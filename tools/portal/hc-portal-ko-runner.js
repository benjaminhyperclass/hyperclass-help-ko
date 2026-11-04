/* hc-portal-ko-runner v1.0.1 — 클라이언트 포털 한글팩(슬롯 JS + 베일 CSS)을 서브계정 포털 설정 맨 위에 덧붙인다.
   app.hyperclass.ai 의 /v2/location/... 화면에서 실행. 덮어쓰지 않는다(맨 위 덧붙임), 이미 있으면 건너뜀,
   고객 기존 JS 에 꺾쇠가 있으면 건너뛰고 보고, 저장 뒤 전 필드 비교(바뀐 다른 필드가 있으면 즉시 원복 시도·보고).
   HCPK.inventory(ids) · HCPK.run(L,{dry}) · HCPK.runAll(ids,{dry}) · HCPK.log() */
(function () {
  'use strict';
  const B = 'https://backend.leadconnectorhq.com';
  const EXCLUDED = ['1r0pJRd1cQQ5DZsjSbc9'];
  const SLOT = "/* 하이퍼클래스 한국어 팩 (포털 슬롯 v1.1) — 포털 화면을 한국어로 표시합니다. 이 블록을 지우면 영어로 돌아갑니다. */\n(function () {\n  var s = document.createElement('script');\n  s.src = 'https://cdn.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@028b3156bd591ae56d9d1fe099cacda1841b3c8d/js/hc-portal-bootstrap.js';\n  s.async = false;\n  s.onerror = function () { try { document.documentElement.setAttribute('data-hc-ko', 'fail'); } catch (e) {} };\n  (document.head || document.documentElement).appendChild(s);\n})();";
  const CSS = "/* 하이퍼클래스 한국어 팩 — 화면이 한국어로 바뀌는 동안 영어가 잠깐 보이지 않게 가립니다(최대 2.5초). */\n#__nuxt {\n  visibility: hidden;\n  animation: hc-unveil 0s 2.5s forwards;\n}\n@keyframes hc-unveil {\n  to { visibility: visible; }\n}\nhtml[data-hc-ko] #__nuxt {\n  visibility: visible;\n  animation: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  #__nuxt {\n    visibility: visible;\n    animation: none;\n  }\n}";
  const MARK_JS = 'hc-portal-bootstrap.js';
  const MARK_CSS = 'html[data-hc-ko]';
  const LOG = (window.__hcpkLog = window.__hcpkLog || []);
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  async function hdr(L) {
    const t = typeof window.getToken === 'function' ? await window.getToken() : null;
    if (!t) throw new Error('getToken 없음 — app.hyperclass.ai 로케이션 화면에서 실행');
    return { 'Content-Type': 'application/json', Accept: 'application/json', channel: 'APP', source: 'WEB_USER', 'source-id': L, version: '2021-07-28', 'token-id': t };
  }
  async function call(method, L, body) {
    for (let i = 0; i < 4; i++) {
      try {
        const r = await fetch(`${B}/clientclub/portal-settings/${L}`, { method, headers: await hdr(L), body: body ? JSON.stringify(body) : undefined });
        const t = await r.text(); let j; try { j = JSON.parse(t); } catch (e) { j = t; }
        if (r.status !== 429 && r.status < 500) { await sleep(400); return { status: r.status, data: j }; }
      } catch (e) {}
      await sleep(3000 * (i + 1));
    }
    return { status: 0, data: null };
  }
  const SKIP = new Set(['customJs', 'customCss', 'updatedAt', '__v', 'lastSyncTime']);
  const canon = (v) => JSON.stringify(v, (k, x) => (x && typeof x === 'object' && !Array.isArray(x) ? Object.fromEntries(Object.keys(x).sort().map((kk) => [kk, x[kk]])) : x));
  function diff(a, b) {
    const keys = new Set([...Object.keys(a || {}), ...Object.keys(b || {})]); const out = [];
    for (const k of keys) if (!SKIP.has(k) && canon(a[k]) !== canon(b[k])) out.push(k);
    return out;
  }
  function body(s, js, css) {
    const br = s.branding || {};
    return { locationId: s.locationId, supportEmail: s.supportEmail, copyRight: s.copyRight, portalBannerText: s.portalBannerText,
      portalDescription: s.portalDescription, customCss: css, customJs: js, headerCode: s.headerCode, footerCode: s.footerCode,
      branding: { brandColor1: br.brandColor1, brandColor2: br.brandColor2, logo: br.logo, favicon: br.favicon, portalImage: br.portalImage } };
  }
  function plan(s) {
    const js0 = s.customJs || '', css0 = s.customCss || '';
    const hasJs = js0.includes(MARK_JS), hasCss = css0.includes(MARK_CSS);
    const lt = !hasJs && js0.includes('<');
    return { hasJs, hasCss, lt, js: hasJs || lt ? js0 : (js0.trim() ? SLOT + '\n\n' + js0 : SLOT), css: hasCss || lt ? css0 : (css0.trim() ? CSS + '\n\n' + css0 : CSS),
      host: s.customDomain || (s.subDomain ? s.subDomain + '.clientclub.net' : null) };
  }
  async function inventory(ids) {
    const rows = [];
    for (const L of ids) {
      if (EXCLUDED.includes(L)) { rows.push({ L, skip: 'excluded' }); continue; }
      const r = await call('GET', L);
      if (r.status !== 200 || !r.data || !r.data.locationId) { rows.push({ L, status: r.status, portal: false }); continue; }
      const s = r.data, p = plan(s);
      rows.push({ L, host: p.host, jsLen: (s.customJs || '').length, cssLen: (s.customCss || '').length, hasJs: p.hasJs, hasCss: p.hasCss, lt: p.lt, users: s.totalUsers });
    }
    return rows;
  }
  async function run(L, opt) {
    opt = opt || {};
    if (!L || EXCLUDED.includes(L)) throw new Error('제외 계정이거나 locationId 없음');
    const g = await call('GET', L);
    if (g.status !== 200 || !g.data || !g.data.locationId) return { L, result: 'no-portal', status: g.status };
    const s0 = g.data, p = plan(s0);
    const res = { L, host: p.host, hasJs: p.hasJs, hasCss: p.hasCss, lt: p.lt };
    if (p.lt) res.note = '고객 Custom JS 에 꺾쇠(<) — JS 는 건너뜀(주입이 이미 깨져 있을 수 있음, 고객 확인 필요)';
    const needJs = !p.hasJs && !p.lt, needCss = !p.hasCss && (p.hasJs || needJs);   // 슬롯 없이 베일만 넣으면 매 화면 2.5초 가려진다
    if (!needJs && !needCss) { res.result = 'already'; return res; }
    res.change = { js: needJs, css: needCss };
    if (opt.dry) { res.result = 'dry'; return res; }
    const u = await call('PUT', L, body(s0, p.js, p.css));
    res.put = u.status;
    if (u.status >= 300) { res.result = 'put-failed'; res.err = typeof u.data === 'string' ? u.data.slice(0, 200) : JSON.stringify(u.data).slice(0, 200); LOG.push(res); return res; }
    const a = await call('GET', L); const s1 = a.data || {};
    res.changedOther = diff(s0, s1);
    res.jsOk = (s1.customJs || '').includes(MARK_JS) || !needJs;
    res.cssOk = (s1.customCss || '').includes(MARK_CSS) || !needCss;
    res.prevJsKept = !(s0.customJs || '').trim() || (s1.customJs || '').includes((s0.customJs || '').trim().slice(0, 40));
    if (res.changedOther.length) {
      const back = await call('PUT', L, body(s0, s0.customJs || '', s0.customCss || ''));
      res.restored = back.status; res.result = 'other-fields-changed';
    } else res.result = res.jsOk && res.cssOk && res.prevJsKept ? 'ok' : 'check';
    LOG.push(res); return res;
  }
  async function runAll(ids, opt) { const out = []; for (const L of ids) { try { out.push(await run(L, opt)); } catch (e) { out.push({ L, error: String(e) }); } } return out; }
  window.HCPK = { inventory, run, runAll, log: () => LOG, SLOT, CSS, version: '1.0.1' };
})();
