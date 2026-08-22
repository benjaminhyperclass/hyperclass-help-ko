/* Hyperclass 한글팩 — 영어 카탈로그 크롤러 v3 (숨은 iframe 방식: 라우트가 새로고침돼도 부모 스크립트는 살아있음)
 * 콘솔에 붙여 넣으면 시작/이어서 진행. 상태는 IndexedDB 에 저장. 완료 후 __hcCrawl.download()
 */
(async function () {
  if (window.__hcCrawl && window.__hcCrawl.running) { console.warn('[hc-crawl] already running'); return; }
  const DB = 'hc-crawl', STORE = 'kv';
  function idb() { return new Promise((res, rej) => { const r = indexedDB.open(DB, 1); r.onupgradeneeded = () => r.result.createObjectStore(STORE); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); }); }
  async function kvGet(k) { const db = await idb(); return new Promise((res, rej) => { const t = db.transaction(STORE, 'readonly').objectStore(STORE).get(k); t.onsuccess = () => res(t.result); t.onerror = () => rej(t.error); }); }
  async function kvSet(k, v) { const db = await idb(); return new Promise((res, rej) => { const t = db.transaction(STORE, 'readwrite').objectStore(STORE).put(v, k); t.onsuccess = () => res(); t.onerror = () => rej(t.error); }); }
  async function kvDel(k) { const db = await idb(); return new Promise((res) => { const t = db.transaction(STORE, 'readwrite').objectStore(STORE).delete(k); t.onsuccess = () => res(); t.onerror = () => res(); }); }
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  const hostApp = document.getElementById('app').__vue_app__;
  const router = hostApp.config.globalProperties.$router;
  const locId = (location.pathname.match(/\/v2\/location\/([^/]+)/) || [])[1];
  const base = location.origin + '/v2/location/' + locId;
  const SKIP = /logout|oauth|callback|disconnect|\/delete|\/remove|cancel|\/activate|launchpad|\/new$|\/create|import|export|preview|builder|checkout|payment-methods|add-domain|verify-domain|no-permissions/i;
  const WAIT = 2500, SETTLE = 1000, LOAD_TO = 15000, PUSH_TO = 3000;

  function composerOf(a) { try { const p = a._context.provides; for (const s of Object.getOwnPropertySymbols(p)) { const v = p[s]; if (v && v.global && v.mode) return v.global; } } catch (e) {} return null; }
  function catOf(g) { const m = g.messages.value || g.messages; const l = g.locale.value || g.locale; return m[l] || m['en-US'] || m['en_US'] || m['en'] || {}; }
  function flat(o, pre, out) { for (const k in o) { const v = o[k]; if (v && typeof v === 'object') flat(v, pre + k + '.', out); else if (typeof v === 'string') out[pre + k] = v; } return out; }
  function fp(cat) { return Object.keys(cat).sort().slice(0, 5).join('|'); }

  const routes = [...new Set(router.getRoutes().map(r => r.path).filter(p => p.startsWith('/v2/location/:location_id')).map(p => p.replace(/^\/v2\/location\/:location_id\??/, '')).filter(p => p && !/[:*]/.test(p) && !SKIP.test(p)))]
    .sort((a, b) => a.split('/').length - b.split('/').length || a.localeCompare(b));

  let state = await kvGet('state');
  if (!state || state.locId !== locId) state = { locId, idx: 0, reloadRoutes: [], acc: { _meta: { locId, started: new Date().toISOString(), routesTotal: routes.length }, host: {}, hostNsByRoute: {}, apps: {}, appsMeta: {}, flat: {}, flatMeta: {}, errors: [] } };
  state.inFlight = null;
  const acc = state.acc;
  const C = window.__hcCrawl = { running: true, acc, state, routes, total: routes.length, log: [], timing: [] };
  C.download = function (name) { const blob = new Blob([JSON.stringify(acc)], { type: 'application/json' }); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name || ('hc-en-catalog-' + locId + '.json'); a.click(); };
  C.stop = () => { C.running = false; };
  C.reset = async () => { C.running = false; await kvDel('state'); console.log('[hc-crawl] reset'); };
  C.status = () => ({ idx: state.idx, total: routes.length, current: C.current, running: C.running, host: Object.keys(acc.host).length, apps: Object.keys(acc.apps).length, appKeys: Object.values(acc.apps).reduce((s, o) => s + Object.keys(o).length, 0), flat: Object.keys(acc.flat).length, reloads: state.reloadRoutes.length, errors: acc.errors.length });

  // 숨은 iframe
  let fr = document.getElementById('hc-crawl-frame');
  if (!fr) { fr = document.createElement('iframe'); fr.id = 'hc-crawl-frame'; fr.style.cssText = 'position:fixed;left:0;top:0;width:1280px;height:900px;opacity:0.01;pointer-events:none;z-index:-1;border:0'; document.body.appendChild(fr); }
  C.frame = fr;
  function waitLoad(to) { return new Promise(res => { let done = false; const h = () => { if (!done) { done = true; fr.removeEventListener('load', h); res(true); } }; fr.addEventListener('load', h); setTimeout(() => { if (!done) { done = true; fr.removeEventListener('load', h); res(false); } }, to); }); }
  async function frameReady() { // iframe 안의 Vue 앱 + composer 대기
    const t0 = Date.now(); while (Date.now() - t0 < LOAD_TO) { try { const w = fr.contentWindow; const el = w.document.getElementById('app'); if (el && el.__vue_app__ && composerOf(el.__vue_app__)) return w; } catch (e) {} await sleep(150); } return null; }

  function collect(w, route) {
    const doc = w.document; const app = doc.getElementById('app').__vue_app__;
    const hg = composerOf(app); if (hg) { const f = flat(catOf(hg), '', {}); const ns = new Set(); for (const k in f) { if (!(k in acc.host)) acc.host[k] = f[k]; ns.add(k.split('.')[0]); } acc.hostNsByRoute[route] = [...ns].length; }
    const els = doc.querySelectorAll('*');
    for (const el of els) {
      const a = el.__vue_app__; if (!a || el.id === 'app') continue;
      const g = composerOf(a);
      if (g) { const cat = catOf(g); const id = fp(cat); if (!id) continue; acc.apps[id] = acc.apps[id] || {}; const f = flat(cat, '', {}); let n = 0; for (const k in f) if (!(k in acc.apps[id])) { acc.apps[id][k] = f[k]; n++; } acc.appsMeta[id] = acc.appsMeta[id] || { el: (el.id || el.className || el.tagName).toString().slice(0, 40), routes: [] }; if (n) acc.appsMeta[id].routes.push(route); }
      else { try { const root = el._vnode && el._vnode.component; const p = root && root.provides; if (!p || !Object.prototype.hasOwnProperty.call(p, 't')) continue; const tv = p.t && (p.t.value || p.t); if (typeof tv !== 'function') continue;
          const keys = new Set(); const seen = new Set();
          (function visit(c, d) { if (!c || seen.has(c) || d > 80) return; seen.add(c); try { const t = c.type; const src = (t.setup ? t.setup.toString() : '') + (t.render ? t.render.toString() : ''); const re = /["'`]([a-zA-Z][\w-]*(?:\.[\w-]+)+)["'`]/g; let m; while ((m = re.exec(src))) { const k = m[1]; if (k.length < 120 && !/^[\d.]+$/.test(k) && !/\.(js|css|png|svg|com|io|ai|net|html|json)$/i.test(k)) keys.add(k); } } catch (e) {} (function vn(v, dd) { if (!v || dd > 500) return; if (v.component) visit(v.component, d + 1); if (Array.isArray(v.children)) v.children.forEach(ch => vn(ch, dd + 1)); if (v.suspense) vn(v.suspense.activeBranch, dd + 1); })(c.subTree, 0); })(root, 0);
          const name = (root.type && (root.type.name || root.type.__name)) || (el.id || el.className || '').toString().slice(0, 30);
          let n = 0; for (const k of keys) { if (k in acc.flat) continue; let en; try { en = tv(k); } catch (e) { continue; } if (typeof en === 'string' && en && en !== k) { acc.flat[k] = en; acc.flatMeta[k] = name; n++; } }
          if (n) C.log.push(route + ' t-ref ' + name + ' +' + n); } catch (e) {} }
    }
  }

  let w = null;
  for (; state.idx < routes.length && C.running; state.idx++) {
    const r = routes[state.idx]; C.current = r; const t0 = Date.now();
    try {
      let pushed = false;
      if (w && w.__hcMark) { // SPA 내부 이동 시도
        try { const rt = w.document.getElementById('app').__vue_app__.config.globalProperties.$router; await Promise.race([rt.push('/v2/location/' + locId + r).catch(() => {}), sleep(PUSH_TO)]); pushed = true; } catch (e) {}
      }
      if (!pushed || !(w && w.__hcMark)) { // 최초 또는 새로고침 발생 → 직접 로드
        if (pushed) state.reloadRoutes.push(r);
        const lp = waitLoad(LOAD_TO); fr.src = base + r; await lp;
      }
      w = await frameReady(); if (!w) { acc.errors.push(r + ': frame not ready'); continue; }
      w.__hcMark = 1;
      await sleep(WAIT); collect(w, r); await sleep(SETTLE); collect(w, r);
    } catch (e) { acc.errors.push(r + ': ' + (e && e.message)); w = null; }
    C.timing.push(Date.now() - t0);
    if (state.idx % 3 === 0) await kvSet('state', state);
  }
  if (state.idx >= routes.length) { acc._meta.finished = new Date().toISOString(); acc._meta.counts = C.status(); acc._meta.reloadRoutes = state.reloadRoutes; C.done = true; console.log('[hc-crawl] done', acc._meta.counts, '→ __hcCrawl.download()'); }
  await kvSet('state', state); C.running = false;
})();
