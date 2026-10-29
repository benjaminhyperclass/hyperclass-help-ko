/* Hyperclass 한글팩 — 텔레메트리 수신 Worker v0.5.0 (2026-10-29)
 * v0.5: POST /report — 로더 v4.18 의 인앱 문구 신고(Alt+Shift+클릭) 1건 {text, ctx, route, lang}. KV `rp/<day>/<ts>` 1 put.
 *       GET /digest 에 reports: [{text, ctx, route, lang, n}] (같은 text 는 합산) 동봉.
 * v0.4: **KV 무료 한도(put 1,000/일) 안에서 돌게 재설계.** 10-28 에 한도를 넘겨 put 이 429 → 로더 보고가 하루 통째로 유실됐다.
 *       ① 영어 원문은 키 하나씩(en/<ns>/<key>, 이벤트당 최대 400 put) 대신 **ns 당 블롭 1개**(enb/<ns>) 에 합쳐 두고
 *          새 키가 생긴 ns 만 put (이벤트당 최대 EN_PUTS_PER_EVENT, 기본 6). 정상 상태에서는 거의 0.
 *       ② 레이트리밋 카운터는 KV 대신 Cache API(caches.default) — KV 쓰기 0.
 *       ③ 이벤트 put 은 종전대로 1회. 하루 put 상한(DAILY_PUT_BUDGET, 기본 800)을 Cache API 로 세어 넘으면 204 로 조용히 버린다.
 *       옛 en/<ns>/<key> 키는 /en 이 블롭과 합쳐 읽는다(90일 TTL 로 자연 소멸).
 * v0.3.1: digest 에 loaders/revs 집계, 검증 거부 사유 console.log
 *
 * POST /r        로더(v4.14+)가 sendBeacon 으로 보내는 라우트별 미번역 집계 1건. 본문은 JSON(text/plain).
 *                검증 후 KV 에 `ev/<YYYY-MM-DD>/<ts>-<rand>` 로 저장(TTL_DAYS). 응답 204.
 * GET  /digest?date=YYYY-MM-DD[&token=…]
 *                그날 이벤트를 모아 { routes, ns(미번역 많은 순), text(한글 비율), edge(플래시 ms 분포) } JSON.
 *                date 생략 = 오늘(UTC). Authorization: Bearer <DIGEST_TOKEN> 또는 ?token=.
 * PUT  /blob/<name>  라이브 추출(브라우저)에서 올리는 JSON 덩어리(≤1MB, 7일). Origin 이 app.hyperclass.ai 일 때만. name = [A-Za-z0-9._-]{3,64}
 *                   같은 이름이 이미 있으면 409. GET /blob/<name> 은 DIGEST_TOKEN 필요. (v0.2 — 번역 라운드 입력 전달 채널)
 * GET  /en?ns=<ns>[&token=…]  로더 v4.16 이 동봉한 영어 원문(pairs)을 KV `enb/<ns>` 블롭(+옛 en/<ns>/<key>)에 모은 것 → {key: en}. ns 생략 = ns 목록과 건수.
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

export function validateReport(ev) {
  if (!ev || typeof ev !== 'object') return 'not-object';
  if (ev.v !== 1) return 'bad-version';
  if (typeof ev.route !== 'string' || ev.route.length > 200) return 'bad-route';
  if (/\/location\/(?!:loc)/.test(ev.route)) return 'route-has-location-id';
  if (typeof ev.text !== 'string' || !ev.text.trim() || ev.text.length > 300) return 'bad-text';
  if (ev.ctx !== undefined && (typeof ev.ctx !== 'string' || ev.ctx.length > 120)) return 'bad-ctx';
  if (ev.lang !== undefined && ev.lang !== 'ko' && ev.lang !== 'en') return 'bad-lang';
  return null;
}

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
      for (const p of r.pairs) if (!Array.isArray(p) || p.length !== 2 || typeof p[0] !== 'string' || typeof p[1] !== 'string' || p[0].length > 160 || p[1].length > 600) return 'bad-pair';
    }
  }
  if (ev.text && (!Number.isFinite(ev.text.ko) || !Number.isFinite(ev.text.en))) return 'bad-text';
  return null;
}

// Cache API 카운터 — KV 쓰기를 쓰지 않는다. 엣지 PoP 별로 따로 세지만 남용 방지·예산 상한 용도로는 충분하다.
async function cacheCount(name, ttl) {
  try {
    const c = caches.default;
    const req = new Request('https://hc-ko-telemetry.invalid/counter/' + name);
    const hit = await c.match(req);
    const n = (hit ? parseInt(await hit.text(), 10) || 0 : 0) + 1;
    await c.put(req, new Response(String(n), { headers: { 'Cache-Control': 'max-age=' + ttl } }));
    return n;
  } catch (e) { return 0; }   // Cache API 를 못 쓰는 환경(테스트 등) — 제한하지 않는다
}
async function rateLimited(env, request) {
  const ip = request.headers.get('cf-connecting-ip') || '0';
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(ip + '|' + Math.floor(Date.now() / 60000)));
  const key = 'rl-' + Array.from(new Uint8Array(buf)).slice(0, 8).map(b => b.toString(16).padStart(2, '0')).join('');
  const n = await cacheCount(key, 120);
  return n > (parseInt(env.RATE_PER_MIN || '30', 10) || 30);
}
// 하루 KV put 예산. 무료 한도 1,000 아래(기본 800)에서 멈춰 다른 호출(blob·digest 워크플로)이 남는 여유를 가진다.
async function overBudget(env, puts) {
  const budget = parseInt(env.DAILY_PUT_BUDGET || '800', 10) || 800;
  const n = await cacheCount('puts-' + day(), 86400);
  return n + puts - 1 > budget;
}
// 영어 원문 블롭: enb/<ns> = {key: en}. 새 키가 있는 ns 만 put (이벤트당 상한). 반환 = put 횟수.
async function mergeEnPairs(env, rows, maxPuts) {
  let puts = 0;
  const cand = rows.filter(r => Array.isArray(r.pairs) && r.pairs.length).sort((a, b) => b.pairs.length - a.pairs.length);
  for (const row of cand) {
    if (puts >= maxPuts) break;
    const bk = 'enb/' + row.ns;
    const cur = (await env.TEL.get(bk, 'json')) || {};
    let added = 0;
    for (const [k, en] of row.pairs) if (!(k in cur)) { cur[k] = en; added++; }
    if (!added) continue;
    await env.TEL.put(bk, JSON.stringify(cur), { expirationTtl: 180 * 86400 }); puts++;
  }
  return puts;
}

export async function digest(env, date) {
  const prefix = 'ev/' + date + '/';
  const routes = {}, ns = {}, text = { ko: 0, en: 0, n: 0 }, edge = { lifted: [], gate: 0 }, loaders = {}, revs = {}, reports = {};
  let cursor, events = 0;
  do {
    const page = await env.TEL.list({ prefix, cursor, limit: 1000 });
    for (const k of page.keys) {
      const ev = await env.TEL.get(k.name, 'json');
      if (!ev) continue;
      events++;
      if (ev.loader) loaders[ev.loader] = (loaders[ev.loader] || 0) + 1;
      if (ev.rev) revs[ev.rev] = (revs[ev.rev] || 0) + 1;
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
  // 문구 신고(rp/<date>/…) — 같은 text 는 합산
  cursor = undefined;
  do {
    const page = await env.TEL.list({ prefix: 'rp/' + date + '/', cursor, limit: 1000 });
    for (const k of page.keys) {
      const r = await env.TEL.get(k.name, 'json'); if (!r) continue;
      const a = reports[r.text] || (reports[r.text] = { text: r.text, ctx: r.ctx || '', route: r.route, lang: r.lang || '', n: 0 });
      a.n++;
    }
    cursor = page.list_complete ? null : page.cursor;
  } while (cursor);
  const reportRows = Object.values(reports).sort((x, y) => y.n - x.n);
  const nsRows = Object.entries(ns).map(([name, a]) => ({ ns: name, exposures: a.seen, en: a.en, total: a.total, routes: Object.keys(a.routes).length, samples: [...a.samples] }))
    .sort((x, y) => y.exposures * y.en - x.exposures * x.en);
  const routeRows = Object.entries(routes).map(([route, r]) => ({ route, views: r.n, koRatio: r.ko + r.en ? +(r.ko / (r.ko + r.en)).toFixed(3) : null, enNsLeaves: r.enNs }))
    .sort((x, y) => (x.koRatio ?? 1) - (y.koRatio ?? 1));
  const lifted = edge.lifted.sort((a, b) => a - b);
  const pct = p => lifted.length ? lifted[Math.min(lifted.length - 1, Math.floor(lifted.length * p))] : null;
  return { date, events, loaders, revs, reports: reportRows, routes: routeRows, ns: nsRows.slice(0, 100), text: { koRatio: text.ko + text.en ? +(text.ko / (text.ko + text.en)).toFixed(3) : null, samples: text.n }, edge: { n: lifted.length, p50: pct(0.5), p90: pct(0.9), gate: edge.gate } };
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
      if (err) { console.log('reject', err, ev.loader, ev.route, txt.length); return new Response(err, { status: 400, headers: CORS }); }
      if (await rateLimited(env, request)) return new Response('rate', { status: 429, headers: CORS });
      if (await overBudget(env, 1)) { console.log('budget', ev.loader, ev.route); return new Response(null, { status: 204, headers: CORS }); }
      const ttl = (parseInt(env.TTL_DAYS || '30', 10) || 30) * 86400;
      const key = 'ev/' + day() + '/' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
      const ns = ev.ns.map(r => ({ ns: r.ns, total: r.total, en: r.en, samples: r.samples }));   // pairs 는 이벤트에 넣지 않는다(블롭으로)
      const slim = { v: 1, t: ev.t, route: ev.route, loader: ev.loader, rev: ev.rev, edge: ev.edge || null, text: ev.text || null, hits: ev.hits, unmatched: ev.unmatched, ns, reason: ev.reason };
      await env.TEL.put(key, JSON.stringify(slim), { expirationTtl: ttl });
      const maxPuts = parseInt(env.EN_PUTS_PER_EVENT || '6', 10) || 6;
      const puts = await mergeEnPairs(env, ev.ns, maxPuts);
      for (let i = 0; i < puts; i++) await cacheCount('puts-' + day(), 86400);
      return new Response(null, { status: 204, headers: CORS });
    }

    if (url.pathname === '/report' && request.method === 'POST') {
      const txt = await request.text();
      if (txt.length > 4096) return new Response('too large', { status: 413, headers: CORS });
      let ev; try { ev = JSON.parse(txt); } catch { return new Response('bad json', { status: 400, headers: CORS }); }
      const err = validateReport(ev);
      if (err) { console.log('reject-report', err); return new Response(err, { status: 400, headers: CORS }); }
      if (await rateLimited(env, request)) return new Response('rate', { status: 429, headers: CORS });
      if (await overBudget(env, 1)) return new Response(null, { status: 204, headers: CORS });
      const key = 'rp/' + day() + '/' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
      await env.TEL.put(key, JSON.stringify({ v: 1, t: ev.t, route: ev.route, loader: ev.loader, rev: ev.rev, text: ev.text.trim(), ctx: ev.ctx || '', lang: ev.lang || '' }), { expirationTtl: 90 * 86400 });
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
      const out = {}; let cursor;
      // v0.4 블롭(enb/<ns>) + 옛 키(en/<ns>/<key>, 90일 TTL 로 소멸 중)를 합친다
      if (ns) {
        Object.assign(out, (await env.TEL.get('enb/' + ns, 'json')) || {});
        do {
          const page = await env.TEL.list({ prefix: 'en/' + ns + '/', cursor, limit: 1000 });
          for (const k of page.keys) { const kk = k.name.slice(4 + ns.length); if (!(kk in out)) out[kk] = await env.TEL.get(k.name); }
          cursor = page.list_complete ? null : page.cursor;
        } while (cursor);
      } else {
        const legacy = {};
        do {
          const page = await env.TEL.list({ prefix: 'en/', cursor, limit: 1000 });
          for (const k of page.keys) { const n = k.name.slice(3).split('/')[0]; (legacy[n] = legacy[n] || new Set()).add(k.name.slice(4 + n.length)); }
          cursor = page.list_complete ? null : page.cursor;
        } while (cursor);
        cursor = undefined;
        do {
          const page = await env.TEL.list({ prefix: 'enb/', cursor, limit: 1000 });
          for (const k of page.keys) { const n = k.name.slice(4); const b = (await env.TEL.get(k.name, 'json')) || {}; for (const kk of Object.keys(b)) (legacy[n] = legacy[n] || new Set()).add(kk); }
          cursor = page.list_complete ? null : page.cursor;
        } while (cursor);
        for (const [n, set] of Object.entries(legacy)) out[n] = set.size;
      }
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
