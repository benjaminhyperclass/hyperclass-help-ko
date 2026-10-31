/* Hyperclass 한글팩 — 클라이언트 포털 로더 v4.0.0 (2026-10-31, 작업지시서 v1 B3 · v3.0.1 승계)
 * 포털 부트스트랩(js/hc-portal-bootstrap.js)이 포털 포인터(data/hc-portal-rev.json)의 loader 커밋으로 이 파일을 주입한다.
 *
 * 동작
 *  1. Nuxt 3 + vue-i18n(composition) 인스턴스를 찾는다 (#__nuxt.__vue_app__ provides 의 i18n 심볼).
 *  2. 포털 사전(data/hc-ko-i18n.json)을 **포인터 rev 커밋으로 고정한 jsDelivr URL** 에서 받아 'en' 과 현재 로케일 카탈로그에
 *     mergeLocaleMessage → $t() 를 쓰는 모든 컴포넌트가 반응형으로 한국어가 된다. html lang=ko.
 *  3. 카탈로그 밖 하드코딩 문구는 _text(원문 정확 일치)로 텍스트 노드·placeholder/title/aria-label/alt 를 치환한다.
 *     편집기(textarea·contenteditable) 안은 건드리지 않는다 — 게시글·댓글 작성 중인 사용자 글 보호.
 *  4. 사전 URL 이 커밋 SHA 로 불변이라 Cache Storage 를 재검증 없이 쓴다(버킷 hc-portal-[rev 앞 7자], 옛 버킷은 성공 후 삭제).
 *  5. 앱이 카탈로그를 다시 세팅하면(언어 전환·재초기화) 2초 감시로 다시 병합한다.
 *  6. 베일: 병합 직후 html[data-hc-ko="1"] — 포털 Custom CSS 베일(css/portal-custom.css)이 즉시 걷힌다.
 *     실패·포기 시 'fail'. CSS 도 2.5초 뒤 스스로 걷힌다.
 *  7. 텔레메트리: 포인터에 telemetry.url 이 있을 때만. 라우트마다 세션당 1회, 적용 ~8초 뒤 en 카탈로그에서 한글이 없는 리프를
 *     네임스페이스별로 세어 보낸다. ns 이름은 **'portal:' 접두사**(메인 앱 ns 와 섞이지 않게), app:'portal'. 식별자 없음.
 *     ⚠️ Worker·일일 집계·번역 라운드가 portal: 을 분리하기 전에는 포인터에 url 을 넣지 않는다(메인 라운드 오염 방지).
 *
 * 콘솔: __hcPortal.status() · __hcPortal.off()/on() · 디버그 ?hcko=debug · 긴급 중단 ?hcko=off / localStorage.hcKoOff='1'
 * 금지: 꺾쇠(less-than) 문자를 쓰지 않는다(포털 슬롯 계열 CI 무손실 검사). 비교는 좌우를 뒤집어 쓴다.
 */
(function () {
  'use strict';
  if (window.__hcPortal) return;

  var VERSION = '4.0.0';
  var REPO = 'benjaminhyperclass/hyperclass-help-ko';
  var CDN = 'https://cdn.jsdelivr.net/gh/' + REPO + '@';
  var RAW = 'https://raw.githubusercontent.com/' + REPO + '/';
  // 포인터를 못 받은 경우(부트스트랩 없이 직접 붙인 경우 등)의 안전망 — 검증된 사전 커밋만 넣는다
  var REV_BUILTIN = '8413843b48ede78ecd441b6d9178b979d44c34ed';
  var SHA_RE = /^[0-9a-f]{7,40}$/;
  var WAIT_APP_MS = 15000;
  var PROBE = ['auth', 'email'];   // 재병합 감시 키 (en 'Email' → ko '이메일')
  var ATTRS = ['placeholder', 'title', 'aria-label', 'alt'];
  var DEBUG = /[?&]hcko=debug/.test(location.search);

  function log() { if (DEBUG && window.console) console.log.apply(console, ['[hc-portal]'].concat([].slice.call(arguments))); }
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function mark(v) { try { document.documentElement.setAttribute('data-hc-ko', v); } catch (e) {} }

  var P = window.__hcPortalPtr || null;
  var REV = P && SHA_RE.test(String(P.rev || '')) ? String(P.rev) : REV_BUILTIN;
  var revSource = P && REV === String(P.rev) ? 'pointer' : 'builtin';
  var stats = { merges: 0, remerge: 0, textHits: 0, fallback: 0 };
  var telemetry = { url: null, sent: 0, skipped: 0, last: null };
  var dict = null, i18n = null, applied = false, probeExpect = null, T = null, booted = false, err = null;

  var API = window.__hcPortal = {
    version: VERSION,
    status: function () {
      var g = i18n && i18n.global;
      return {
        version: VERSION, rev: REV, revSource: revSource, booted: booted, applied: applied, error: err,
        locale: g ? currentLocale(g) : null, dictVersion: dict && dict._meta ? dict._meta.version : null,
        dictStrings: dict && dict._meta ? dict._meta.strings : null, textEntries: T ? Object.keys(T).length : 0,
        merges: stats.merges, remerge: stats.remerge, textHits: stats.textHits, fallback: stats.fallback,
        veil: document.documentElement.getAttribute('data-hc-ko'), telemetry: JSON.parse(JSON.stringify(telemetry))
      };
    },
    off: function () { try { localStorage.setItem('hcKoOff', '1'); } catch (e) {} return '새로고침하면 영어로 돌아갑니다.'; },
    on: function () { try { localStorage.removeItem('hcKoOff'); } catch (e) {} return '새로고침하면 한국어로 돌아옵니다.'; },
    reapply: function () { return applyI18n(); }
  };

  try {
    if (/[?&]hcko=off/.test(location.search) || lsGet('hcKoOff') === '1') { mark('off'); log('킬 스위치'); return; }
    if (P && P.off === true) { mark('off'); log('원격 킬스위치'); return; }
  } catch (e) {}

  /* ---------- 한국어 조판 ---------- */
  var kcss = document.createElement('style');
  kcss.id = 'hc-portal-style';
  kcss.textContent = 'html[lang="ko"] body{word-break:keep-all;overflow-wrap:anywhere}';
  (document.head || document.documentElement).appendChild(kcss);

  /* ---------- 1) i18n 인스턴스 ---------- */
  function findI18n() {
    var root = document.getElementById('__nuxt') || document.querySelector('[data-v-app]');
    var app = root && root.__vue_app__;
    if (!app) return null;
    try {
      var prov = app._context && app._context.provides;
      if (prov) {
        var syms = Object.getOwnPropertySymbols(prov);
        for (var i = 0; syms.length > i; i++) {
          var v = prov[syms[i]];
          if (v && v.global && v.mode && typeof v.global.mergeLocaleMessage === 'function') return v;
        }
      }
      var gi = app.config && app.config.globalProperties && app.config.globalProperties.$i18n;
      if (gi && typeof gi.mergeLocaleMessage === 'function') return { mode: 'legacy', global: gi };
    } catch (e) { log('findI18n error', e); }
    return null;
  }
  function currentLocale(g) { var l = g.locale; return (l && typeof l === 'object' && 'value' in l) ? l.value : l; }
  function catalogOf(g) { try { var m = g.messages; m = (m && typeof m === 'object' && 'value' in m) ? m.value : m; return m || {}; } catch (e) { return {}; } }

  /* ---------- 2) 카탈로그 주입 ---------- */
  function applyI18n() {
    if (!dict || !dict.messages || !i18n) return false;
    var g = i18n.global, loc = currentLocale(g) || 'en';
    try {
      g.mergeLocaleMessage('en', dict.messages);
      if (loc !== 'en') g.mergeLocaleMessage(loc, dict.messages);
      try { probeExpect = g.t(PROBE.join('.')); } catch (e) { probeExpect = null; }
      applied = true; stats.merges++;
      document.documentElement.setAttribute('lang', 'ko');
      mark('1');
      log('i18n merged into', loc, 'probe=', probeExpect);
      return true;
    } catch (e) { err = 'merge:' + (e && e.message); log('merge failed', e); return false; }
  }
  function watchReapply() {
    setInterval(function () {
      if (!i18n || !dict) return;
      // Nuxt head 관리가 html lang 을 'en' 으로 되돌린다(실측) — 적용 중이면 다시 세운다
      if (applied && document.documentElement.getAttribute('lang') !== 'ko') document.documentElement.setAttribute('lang', 'ko');
      try {
        var now = i18n.global.t(PROBE.join('.'));
        if (probeExpect && now !== probeExpect) { stats.remerge++; log('catalogue reset → re-merge'); applyI18n(); }
      } catch (e) {}
    }, 2000);
  }

  /* ---------- 3) _text — 카탈로그 밖 하드코딩 문구 ---------- */
  function inEditor(node) {
    for (var el = node.nodeType === 1 ? node : node.parentNode, d = 0; el && 10 > d; el = el.parentNode, d++) {
      if (el.nodeType !== 1) continue;
      if (el.isContentEditable || el.tagName === 'TEXTAREA') return true;
    }
    return false;
  }
  function trText(node) {
    var s = node.nodeValue; if (!s || !T) return;
    var t = s.trim(); if (!t) return;
    var v = T[t]; if (v === undefined || inEditor(node)) return;
    node.nodeValue = s.replace(t, v); stats.textHits++;
  }
  function trAttrs(el) {
    if (!T || !el.getAttribute) return;
    for (var i = 0; ATTRS.length > i; i++) {
      var a = ATTRS[i], s = el.getAttribute(a); if (!s) continue;
      var t = s.trim(), v = T[t]; if (v !== undefined) { el.setAttribute(a, s.replace(t, v)); stats.textHits++; }
    }
  }
  function pass(root) {
    if (!T || !root) return;
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), n;
    while ((n = w.nextNode())) trText(n);
    if (root.querySelectorAll) {
      var els = root.querySelectorAll('[placeholder],[title],[aria-label],[alt]');
      for (var i = 0; els.length > i; i++) trAttrs(els[i]);
      if (root.nodeType === 1) trAttrs(root);
    }
  }
  var mo = new MutationObserver(function (muts) {
    if (!T) return;
    for (var i = 0; muts.length > i; i++) {
      var m = muts[i];
      if (m.type === 'characterData') trText(m.target);
      else if (m.type === 'attributes') trAttrs(m.target);
      else if (m.addedNodes) for (var j = 0; m.addedNodes.length > j; j++) {
        var nd = m.addedNodes[j];
        if (nd.nodeType === 3) trText(nd); else if (nd.nodeType === 1) pass(nd);
      }
    }
  });
  function startTextLayer() {
    if (!dict || !dict._text) return;
    T = dict._text;
    pass(document.body);
    mo.observe(document.documentElement, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS });
  }

  /* ---------- 4) 사전 — 커밋 고정 URL · 불변 캐시 ---------- */
  var DICT_PATH = 'data/hc-ko-i18n.json';
  var BUCKET = 'hc-portal-' + REV.slice(0, 7);
  function fetchJson(url) {
    return fetch(url, { mode: 'cors', cache: 'default' }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.text();
    }).then(function (txt) { return { txt: txt, d: JSON.parse(txt) }; });
  }
  function fetchDict() {
    var cdn = CDN + REV + '/' + DICT_PATH, raw = RAW + REV + '/' + DICT_PATH;
    return fetchJson(cdn).catch(function (e) { stats.fallback++; log('CDN 실패 — raw', e && e.message); return fetchJson(raw); });
  }
  function purgeOld() {
    if (!('caches' in window)) return;
    caches.keys().then(function (ks) {
      ks.forEach(function (k) { if (k.indexOf('hc-portal-') === 0 && k !== BUCKET) caches.delete(k); });
    }).catch(function () {});
  }
  function loadDict() {
    if (window.__hcKoDict) return Promise.resolve(window.__hcKoDict);   // 테스트·인라인 주입용
    var KEY = CDN + REV + '/' + DICT_PATH;
    if (!('caches' in window)) return fetchDict().then(function (r) { return r.d; });
    return caches.open(BUCKET).then(function (cache) {
      return cache.match(KEY).then(function (hit) {
        if (hit) return hit.text().then(function (t) { return JSON.parse(t); });
        return fetchDict().then(function (r) {
          cache.put(KEY, new Response(r.txt, { headers: { 'Content-Type': 'application/json' } })).then(purgeOld).catch(function () {});
          return r.d;
        });
      });
    }).catch(function () { return fetchDict().then(function (r) { return r.d; }); });
  }

  /* ---------- 5) 텔레메트리 (포인터 telemetry.url 이 있을 때만) ---------- */
  var HANGUL = /[가-힣]/;
  function routePattern() {
    return location.pathname.replace(/\/[0-9a-zA-Z_-]{16,}(?=\/|$)/g, '/:id').replace(/\/\d+(?=\/|$)/g, '/:n').slice(0, 160);
  }
  function countNs(en, ko) {
    var rows = [];
    for (var ns in en) {
      var r = { ns: 'portal:' + ns, total: 0, en: 0, samples: [], pairs: [] };
      (function walk(e, k, path) {
        if (e && typeof e === 'object') { for (var c in e) walk(e[c], k && typeof k === 'object' ? k[c] : undefined, path + '.' + c); return; }
        if (typeof e !== 'string') return;
        r.total++;
        var v = typeof k === 'string' ? k : e;
        if (!HANGUL.test(v) && /[A-Za-z]{2,}/.test(e)) {
          r.en++;
          if (5 > r.samples.length) r.samples.push(path.slice(1));
          if (150 > r.pairs.length && 600 >= e.length) r.pairs.push([path.slice(1), e]);
        }
      })(en[ns], ko ? ko[ns] : undefined, '');
      if (r.en) rows.push(r);
    }
    rows.sort(function (a, b) { return b.en - a.en; });
    return rows;
  }
  function sendTelemetry(reason) {
    try {
      var url = P && P.telemetry && P.telemetry.url; telemetry.url = url || null;
      if (!url || !applied || lsGet('hcKoTelemetryOff') === '1') { telemetry.skipped++; return; }
      var rp = routePattern(), key = 'hcPortalTel:' + rp;
      try { if (sessionStorage.getItem(key)) { telemetry.skipped++; return; } } catch (e) {}
      var cat = catalogOf(i18n.global);
      var rows = countNs(cat.en || {}, dict && dict.messages);   // 병합 뒤 en 카탈로그에서 사전에 없는(한글 없는) 리프
      var body = { v: 1, app: 'portal', t: new Date().toISOString(), route: rp, loader: 'portal-' + VERSION, rev: REV.slice(0, 7),
        edge: null, text: null, hits: stats.textHits, unmatched: 0, ns: rows.slice(0, 25), reason: reason };
      var payload = JSON.stringify(body);
      for (var ci = body.ns.length - 1; ci >= 0 && payload.length > 48000; ci--) { body.ns[ci].pairs = []; payload = JSON.stringify(body); }
      if (payload.length > 60000) { body.ns = body.ns.slice(0, 10); payload = JSON.stringify(body); }
      var ok = false;
      try { ok = navigator.sendBeacon(url, new Blob([payload], { type: 'text/plain' })); } catch (e) {}
      if (ok) { telemetry.sent++; telemetry.last = rp; try { sessionStorage.setItem(key, '1'); } catch (e) {} log('텔레메트리', rp, rows.length + ' ns'); }
    } catch (e) { log('텔레메트리 실패', e && e.message); }
  }
  var telTimer = null, lastPath = location.pathname;
  function scheduleTelemetry(reason) { clearTimeout(telTimer); telTimer = setTimeout(function () { sendTelemetry(reason); }, 8000); }
  setInterval(function () { if (location.pathname !== lastPath) { lastPath = location.pathname; scheduleTelemetry('route'); } }, 1000);

  /* ---------- 6) 부팅 ---------- */
  function waitApp() {
    return new Promise(function (resolve) {
      var t0 = Date.now();
      (function tick() {
        var inst = findI18n();
        if (inst) return resolve(inst);
        if (Date.now() - t0 > WAIT_APP_MS) return resolve(null);
        setTimeout(tick, 60);
      })();
    });
  }

  Promise.all([loadDict(), waitApp()]).then(function (r) {
    dict = r[0]; i18n = r[1]; booted = true;
    if (!i18n) { err = 'no-i18n'; log('i18n 인스턴스 없음 → 텍스트 치환만'); mark('fail'); }
    else applyI18n();
    startTextLayer();
    watchReapply();
    scheduleTelemetry('start');
  }).catch(function (e) { err = 'boot:' + (e && e.message); log('boot failed', e); mark('fail'); });
})();
