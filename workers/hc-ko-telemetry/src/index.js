/* Hyperclass 한글팩 — 텔레메트리 수신 Worker v0.3.0 (2026-10-28)
 *
 * POST /r        로더(v4.14+)가 sendBeacon 으로 보내는 라우트별 미번역 집계 1건. 본문은 JSON(text/plain).
 *                검증 후 KV 에 `ev/<YYYY-MM-DD>/<ts>-<rand>` 로 저장(TTL_DAYS). 응답 204.
 * GET  /digest?date=YYYY-MM-DD[&token=…]
 *                그날 이벤트를 모아 { routes, ns(미번역 많은 순), text(한글 비율), edge(플래시 ms 분포) } JSON.
 *                date 생략 = 오늘(UTC). Authorization: Bearer <DIGEST_TOKEN> 또는 ?token=.
 * PUT  /blob/<name>  라이브 추출(브라우저)에서 올리는 JSON 덩어리(≤1MB, 7일). Origin 이 app.hyperclass.ai 일 때만. name = [A-Za-z0-9._-]{3,64}
 *                   같은 이름이 이미 있으면 409. GET /blob/<name> 은 DIGEST_TOKEN 필요. (v0.2 — 번역 라운드 입력 전달 채널)
 * GET  /en?ns=<ns>[&token=…]  로더 v4.16 이 동봉한 영어 원문(pairs)을 KV `en/<ns>/<key>` 에 모은 것 → {key: en}. ns 생략 = ns 목록과 건수.
 *                   번역 라운드 입력. (v0.3)
 * GET  /health   200 ok
 *
 * 개인정보: 본문에 식별자가 없다(로더가 :loc 치환). 저장 시 IP·UA 를 쓰지 않는다. 레이트리밋 카운터만 IP 해시를 1분 쓴다.
 */
const CORS = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type, Authorization' };
const BLOB_RE = /^\/blob\/([A-Za-z0-9._-]{3,64})$/;
const BLOB_ORIGINS = ['https://app.hyperclass.ai'];
const MAX_BODY = 65536;

function day(d) { return (d || new Date()).toISOString().slice(0, 10); }

export function validate(ev) {
  if (!ev || typeof ev !== 'object') return 'not-object';
  if (ev.v !== 1) return 'bad-version';
  if (typeof ev.route !== 'string' || ev.route.length > 200) return 'bad-route';
  if (/\/location\/(?!:loc)/.test(ev.route)) return 'route-has-location-id';
  if (!Array.isArray(ev.ns) || ev.ns.length > 50) return 'bad-ns';
  for (const r of ev.ns) {
    if (typeof r.ns !== 'string' || r.ns.length > 80) return 'bad-ns-name';
    if (!Number.isFinite(r.total) || !Number.isFinite(r.en)) return 'bad-ns-count';
    if (!Array.isArray(r.samples) || r.samples.length > 5 || r.samples.some(s => typeof s !== 'string' || s.length > 160)) return 'bad-samples';
    if (r.pairs !== undefined) {
      if (!Array.isArray(r.pairs) || r.pairs.length > 160) return 'bad-pairs';
      for (const p of r.pairs) if (!Array.isArray(p) || p.length !== 2 || typeof p[0] !== 'string' || typeof p[1] !== 'string' || p[0].length > 160 || p[1].length > 300) return 'bad-pair';
    }
  }
  if (ev.text && (!Number.isFinite(ev.text.ko) || !Number.isFinite(ev.text.en))) return 'bad-text';
  return null;
}

async function rateLimited(env, request) {
  const ip = request.headers.get('cf-connecting-ip') || '0';
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(ip + '|' + Math.floor(Date.now() / 60000)));
  const key = 'rl/' + Array.from(new Uint8Array(buf)).slice(0, 8).map(b => b.toString(16).padStart(2, '0')).join('');
  const n = parseInt((await env.TEL.get(key)) || '0', 10) + 1;
  await env.TEL.put(key, String(n), { expirationTtl: 120 });
  return n > (parseInt(env.RATE_PER_MIN || '30', 10) || 30);
}

export async function digest(env, date) {
  const prefix = 'ev/' + date + '/';
  const routes = {}, ns = {}, text = { ko: 0, en: 0, n: 0 }, edge = { lifted: [], gate: 0 };
  let cursor, events = 0;
  do {
    const page = await env.TEL.list({ prefix, cursor, limit: 1000 });
    for (const k of page.keys) {
      const ev = await env.TEL.get(k.name, 'json');
      if (!ev) continue;
      events++;
      const r = routes[ev.route] || (routes[ev.route] = { n: 0, ko: 0, en: 0, enNs: 0 });
      r.n++;
      if (ev.text) { r.ko += ev.text.ko; r.en += ev.text.en; text.ko += ev.text.ko; text.en += ev.text.en; text.n++; }
      for (const row of ev.ns) {
        r.enNs += row.en;
        const a = ns[row.ns] || (ns[row.ns] = { seen: 0, en: 0, total: 0, routes: {}, samples: new Set() });
        a.seen++; a.en = Math.max(a.en, row.en); a.total = Math.max(a.total, row.total);
        a.routes[ev.route] = (a.routes[ev.route] || 0) + 1;
        for (const s of row.samples) if (a.samples.size < 10) a.samples.add(s);
      }
      if (ev.edge) { if (Number.isFinite(ev.edge.lifted)) edge.lifted.push(ev.edge.lifted); if (ev.edge.why === 'gate') edge.gate++; }
    }
    cursor = page.list_complete ? null : page.cursor;
  } while (cursor);
  const nsRows = Object.entries(ns).map(([name, a]) => ({ ns: name, exposures: a.seen, en: a.en, total: a.total, routes: Object.keys(a.routes).length, samples: [...a.samples] }))
    .sort((x, y) => y.exposures * y.en - x.exposures * x.en);
  const routeRows = Object.entries(routes).map(([route, r]) => ({ route, views: r.n, koRatio: r.ko + r.en ? +(r.ko / (r.ko + r.en)).toFixed(3) : null, enNsLeaves: r.enNs }))
    .sort((x, y) => (x.koRatio ?? 1) - (y.koRatio ?? 1));
  const lifted = edge.lifted.sort((a, b) => a - b);
  const pct = p => lifted.length ? lifted[Math.min(lifted.length - 1, Math.floor(lifted.length * p))] : null;
  return { date, events, routes: routeRows, ns: nsRows.slice(0, 100), text: { koRatio: text.ko + text.en ? +(text.ko / (text.ko + text.en)).toFixed(3) : null, samples: text.n }, edge: { n: lifted.length, p50: pct(0.5), p90: pct(0.9), gate: edge.gate } };
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS });
    if (url.pathname === '/health') return new Response('ok', { headers: CORS });

    if (url.pathname === '/r' && request.method === 'POST') {
      const txt = await request.text();
      if (txt.length > MAX_BODY) return new Response('too large', { status: 413, headers: CORS });
      let ev; try { ev = JSON.parse(txt); } catch { return new Response('bad json', { status: 400, headers: CORS }); }
      const err = validate(ev);
      if (err) return new Response(err, { status: 400, headers: CORS });
      if (await rateLimited(env, request)) return new Response('rate', { status: 429, headers: CORS });
      const ttl = (parseInt(env.TTL_DAYS || '30', 10) || 30) * 86400;
      const key = 'ev/' + day() + '/' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
      const slim = { v: 1, t: ev.t, route: ev.route, loader: ev.loader, rev: ev.rev, edge: ev.edge || null, text: ev.text || null, hits: ev.hits, unmatched: ev.unmatched, ns: ev.ns, reason: ev.reason };
      await env.TEL.put(key, JSON.stringify(slim), { expirationTtl: ttl });
      // 영어 원문 수집 — 이미 있는 키는 건너뛴다(쓰기 절약). 90일 보존.
      let puts = 0;
      for (const row of ev.ns) {
        if (!Array.isArray(row.pairs)) continue;
        for (const [k, en] of row.pairs) {
          if (puts >= 400) break;
          const ek = 'en/' + row.ns + '/' + k;
          if (await env.TEL.get(ek) !== null) continue;
          await env.TEL.put(ek, en, { expirationTtl: 90 * 86400 }); puts++;
        }
      }
      return new Response(null, { status: 204, headers: CORS });
    }

    const bm = url.pathname.match(BLOB_RE);
    if (bm && request.method === 'PUT') {
      const origin = request.headers.get('origin') || '';
      if (!BLOB_ORIGINS.includes(origin)) return new Response('origin', { status: 403, headers: CORS });
      if (await rateLimited(env, request)) return new Response('rate', { status: 429, headers: CORS });
      const txt = await request.text();
      if (txt.length > 1048576) return new Response('too large', { status: 413, headers: CORS });
      try { JSON.parse(txt); } catch { return new Response('bad json', { status: 400, headers: CORS }); }
      const key = 'blob/' + bm[1];
      if (await env.TEL.get(key)) return new Response('exists', { status: 409, headers: CORS });
      await env.TEL.put(key, txt, { expirationTtl: 7 * 86400 });
      return new Response(JSON.stringify({ ok: true, name: bm[1], bytes: txt.length }), { status: 201, headers: { ...CORS, 'Content-Type': 'application/json' } });
    }
    if (bm && request.method === 'GET') {
      const tok = (request.headers.get('authorization') || '').replace(/^Bearer\s+/i, '') || url.searchParams.get('token') || '';
      if (!env.DIGEST_TOKEN || tok !== env.DIGEST_TOKEN) return new Response('unauthorized', { status: 401, headers: CORS });
      const v = await env.TEL.get('blob/' + bm[1]);
      if (!v) return new Response('not found', { status: 404, headers: CORS });
      return new Response(v, { headers: { ...CORS, 'Content-Type': 'application/json; charset=utf-8' } });
    }

    if (url.pathname === '/en' && request.method === 'GET') {
      const tok = (request.headers.get('authorization') || '').replace(/^Bearer\s+/i, '') || url.searchParams.get('token') || '';
      if (!env.DIGEST_TOKEN || tok !== env.DIGEST_TOKEN) return new Response('unauthorized', { status: 401, headers: CORS });
      const ns = url.searchParams.get('ns');
      const prefix = ns ? 'en/' + ns + '/' : 'en/';
      const out = {}; let cursor;
      do {
        const page = await env.TEL.list({ prefix, cursor, limit: 1000 });
        for (const k of page.keys) {
          const rest = k.name.slice(3);
          if (ns) out[rest.slice(ns.length + 1)] = await env.TEL.get(k.name);
          else { const n = rest.split('/')[0]; out[n] = (out[n] || 0) + 1; }
        }
        cursor = page.list_complete ? null : page.cursor;
      } while (cursor);
      return new Response(JSON.stringify(out, null, 1), { headers: { ...CORS, 'Content-Type': 'application/json; charset=utf-8' } });
    }

    if (url.pathname === '/digest' && request.method === 'GET') {
      const tok = (request.headers.get('authorization') || '').replace(/^Bearer\s+/i, '') || url.searchParams.get('token') || '';
      if (!env.DIGEST_TOKEN || tok !== env.DIGEST_TOKEN) return new Response('unauthorized', { status: 401, headers: CORS });
      const date = /^\d{4}-\d{2}-\d{2}$/.test(url.searchParams.get('date') || '') ? url.searchParams.get('date') : day();
      const out = await digest(env, date);
      return new Response(JSON.stringify(out, null, 2), { headers: { ...CORS, 'Content-Type': 'application/json; charset=utf-8' } });
    }
    return new Response('not found', { status: 404, headers: CORS });
  },
};
