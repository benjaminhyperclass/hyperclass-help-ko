/* Hyperclass 한글팩 — 메인 앱(GHL 화이트라벨) 로더 v4.0.0
 * Agency Settings → Company → Whitelabel → Custom Code → Custom JavaScript 칸 전용 (순수 JS, <script> 태그 없음)
 *
 * 2026-08-22 app.hyperclass.ai 실측 구조(310개 라우트 크롤) 기준.
 * 처리 패턴
 *  A. 호스트(#app) composer 에 merge + mergeLocaleMessage 래핑 → 원격이 영어 네임스페이스를 넣는 즉시 한국어로 재덮어쓰기
 *  B. 별도 Vue 앱(__vue_app__) 24종 → 카탈로그 지문으로 매칭해 각각 merge
 *  C. provide('t') ref 방식 원격(클라이언트 포털·코스·브랜딩 등) → t ref 를 래퍼로 교체
 *  D. i18n 밖 하드코딩 문구 → 텍스트 치환 레이어(_text)
 *
 * 사전: core(호스트+flat+_text) 먼저, apps 는 백그라운드로 이어서. Cache Storage 6시간 stale-while-revalidate.
 * 디버그: 주소 뒤에 ?hcko=debug → 콘솔 로그, window.__hcKoApp.status()
 */
(function () {
  'use strict';
  if (window.__hcKoApp) return;

  var BASE = 'https://cdn.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@main/data/';
  var URL_CORE = BASE + 'hc-ko-app-core.json';
  var URL_APPS = BASE + 'hc-ko-app-apps.json';
  var CACHE = 'hc-ko-app-v4';
  var TTL = 6 * 3600 * 1000;
  var LOCALE_KEYS = ['en', 'en-US', 'en_US'];
  var DEBUG = /[?&]hcko=debug/.test(location.search);

  var core = null, appsDict = null, T = null;
  var stats = { host: 0, apps: 0, tref: 0, remerge: 0 };
  function log() { if (DEBUG && window.console) console.log.apply(console, ['[hc-ko]'].concat([].slice.call(arguments))); }

  var API = window.__hcKoApp = {
    version: '4.0.0',
    status: function () { return JSON.parse(JSON.stringify(stats)); },
    rescan: function () { scanApps(); },
    get core() { return core; }, get apps() { return appsDict; }
  };

  /* ---------- 한국어 조판 ---------- */
  var css = document.createElement('style');
  css.id = 'hc-ko-app-style';
  css.textContent = 'html[lang="ko"] body{word-break:keep-all;overflow-wrap:anywhere}';
  (document.head || document.documentElement).appendChild(css);

  /* ---------- vue-i18n 유틸 ---------- */
  function composerOf(app) {
    try {
      var p = app && app._context && app._context.provides; if (!p) return null;
      var syms = Object.getOwnPropertySymbols(p);
      for (var i = 0; i < syms.length; i++) {
        var v = p[syms[i]];
        if (v && v.global && v.mode && typeof v.global.mergeLocaleMessage === 'function') return v.global;
      }
    } catch (e) {}
    return null;
  }
  function unwrap(x) { return (x && typeof x === 'object' && 'value' in x) ? x.value : x; }
  function catalogOf(g) {
    var m = unwrap(g.messages) || {}, l = unwrap(g.locale);
    return m[l] || m['en-US'] || m['en_US'] || m['en'] || {};
  }
  function fingerprint(g) { return Object.keys(catalogOf(g)).sort().slice(0, 5).join('|'); }
  function rawMerge(g) { return g.__hcOrigMerge || g.mergeLocaleMessage; }
  function mergeInto(g, messages, tag) {
    if (!messages) return 0;
    var loc = unwrap(g.locale), keys = LOCALE_KEYS.slice();
    if (loc && keys.indexOf(loc) < 0) keys.push(loc);
    var fn = rawMerge(g), n = 0;
    for (var i = 0; i < keys.length; i++) { try { fn.call(g, keys[i], messages); n++; } catch (e) {} }
    if (n) log('merged', tag, '→', keys.join(','));
    return n;
  }
  function pickNs(dict, incoming) {   // 원격이 넣은 네임스페이스에 해당하는 한국어만 골라낸다
    var out = null;
    for (var k in incoming) if (dict && dict[k] !== undefined) { (out = out || {})[k] = dict[k]; }
    return out;
  }

  /* ---------- A. 호스트 ---------- */
  var hostDone = false;
  function setupHost() {
    if (!core) return false;
    var el = document.getElementById('app'), app = el && el.__vue_app__;
    var g = app && composerOf(app); if (!g) return false;
    mergeInto(g, core.host, 'host');
    if (!g.__hcOrigMerge) {
      g.__hcOrigMerge = g.mergeLocaleMessage;
      g.mergeLocaleMessage = function (loc, msgs) {
        var r = g.__hcOrigMerge.apply(this, arguments);
        try {
          var ko = pickNs(core && core.host, msgs);
          if (ko) { g.__hcOrigMerge.call(g, loc, ko); stats.remerge++; log('re-merge', Object.keys(ko).join(',')); }
        } catch (e) {}
        return r;
      };
    }
    document.documentElement.setAttribute('lang', 'ko');
    hostDone = true; stats.host = 1; return true;
  }

  /* ---------- B/C. 별도 Vue 앱 ---------- */
  var seen = (typeof WeakSet === 'function') ? new WeakSet() : { has: function () { return false; }, add: function () {} };
  function wrapTRef(el) {
    try {
      var root = el._vnode && el._vnode.component, p = root && root.provides;
      if (!p || !Object.prototype.hasOwnProperty.call(p, 't')) return false;
      var ref = p.t;
      if (!ref || typeof ref !== 'object' || !('value' in ref) || ref.__hcWrapped) return false;
      function install(orig) {
        if (typeof orig !== 'function' || orig.__hcWrap) return false;
        var w = function (key) {
          if (arguments.length === 1 && core && core.flat) { var ko = core.flat[key]; if (ko !== undefined) return ko; }
          return orig.apply(this, arguments);
        };
        w.__hcWrap = true; ref.value = w; ref.__hcWrapped = true; stats.tref++;
        log('t-ref wrapped', el.id || el.className); return true;
      }
      if (ref.value) return install(ref.value);
      var tries = 0, iv = setInterval(function () {
        if (ref.value && !ref.value.__hcWrap) { install(ref.value); clearInterval(iv); }
        if (++tries > 120) clearInterval(iv);
      }, 100);
      return true;
    } catch (e) { return false; }
  }
  function scanApps() {
    if (!core) return;
    var els = document.querySelectorAll('*');
    for (var i = 0; i < els.length; i++) {
      var el = els[i], app = el.__vue_app__;
      if (!app || seen.has(app)) continue;
      seen.add(app);
      if (el.id === 'app') { if (!hostDone) setupHost(); continue; }
      var g = composerOf(app);
      if (g) {
        if (!appsDict) { el.__hcPending = 1; continue; }          // apps 사전 도착 전이면 나중에
        var fp = fingerprint(g), ko = appsDict[fp];
        if (ko) { mergeInto(g, ko, 'app'); stats.apps++; }
        else log('no dict for app', (el.id || el.className || '').toString().slice(0, 30), fp.slice(0, 40));
      } else wrapTRef(el);
    }
  }
  function applyPendingApps() {   // apps 사전이 늦게 도착했을 때 이미 뜬 앱들에 적용
    var els = document.querySelectorAll('*');
    for (var i = 0; i < els.length; i++) {
      var el = els[i], app = el.__vue_app__; if (!app || el.id === 'app') continue;
      var g = composerOf(app); if (!g) continue;
      var fp = fingerprint(g), ko = appsDict && appsDict[fp];
      if (ko) { mergeInto(g, ko, 'app(late)'); stats.apps++; }
    }
  }

  /* ---------- D. 텍스트 치환 ---------- */
  var ATTRS = ['placeholder', 'title', 'aria-label', 'alt'];
  function trText(n) { var s = n.nodeValue; if (!s || !T) return; var t = s.trim(); if (!t) return; var v = T[t]; if (v !== undefined) n.nodeValue = s.replace(t, v); }
  function trAttrs(el) { if (!T || !el.getAttribute) return; for (var i = 0; i < ATTRS.length; i++) { var a = ATTRS[i], s = el.getAttribute(a); if (!s) continue; var v = T[s.trim()]; if (v !== undefined) el.setAttribute(a, v); } }
  function pass(root) {
    if (!T || !root) return;
    try {
      var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), n;
      while ((n = w.nextNode())) trText(n);
      if (root.querySelectorAll) { var els = root.querySelectorAll('[placeholder],[title],[aria-label],[alt]'); for (var i = 0; i < els.length; i++) trAttrs(els[i]); }
      if (root.nodeType === 1) trAttrs(root);
    } catch (e) {}
  }
  var pending = false;
  var mo = new MutationObserver(function (muts) {
    for (var i = 0; i < muts.length; i++) {
      var m = muts[i];
      if (m.type === 'characterData') trText(m.target);
      else if (m.type === 'attributes') trAttrs(m.target);
      else if (m.addedNodes) for (var j = 0; j < m.addedNodes.length; j++) {
        var nd = m.addedNodes[j];
        if (nd.nodeType === 3) trText(nd); else if (nd.nodeType === 1) pass(nd);
      }
    }
    if (!pending) { pending = true; setTimeout(function () { pending = false; scanApps(); }, 60); }
  });

  /* ---------- 사전 로딩 ---------- */
  function fetchFresh(url, cache) {
    return fetch(url, { mode: 'cors', cache: 'no-cache' }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status); return r.text();
    }).then(function (txt) {
      var d = JSON.parse(txt);
      if (cache) { try { cache.put(url, new Response(txt, { headers: { 'Content-Type': 'application/json', 'X-HC-TS': String(Date.now()) } })); } catch (e) {} }
      return d;
    });
  }
  function load(url, onStale) {
    if (!('caches' in window)) return fetchFresh(url, null);
    return caches.open(CACHE).then(function (cache) {
      return cache.match(url).then(function (hit) {
        if (!hit) return fetchFresh(url, cache);
        var stale = Date.now() - Number(hit.headers.get('X-HC-TS') || 0) > TTL;
        return hit.text().then(function (txt) {
          var d = JSON.parse(txt);
          if (stale) fetchFresh(url, cache).then(function (nd) { if (onStale) onStale(nd); }).catch(function () {});
          return d;
        });
      });
    }).catch(function () { return fetchFresh(url, null); });
  }
  function waitHost(ms) {
    return new Promise(function (res) {
      var t0 = Date.now();
      (function tick() {
        var el = document.getElementById('app');
        if (el && el.__vue_app__ && composerOf(el.__vue_app__)) return res(true);
        if (Date.now() - t0 > ms) return res(false);
        setTimeout(tick, 60);
      })();
    });
  }

  /* ---------- 부트스트랩 ---------- */
  Promise.all([
    load(URL_CORE, function (nd) { core = nd; T = nd._text || null; hostDone = false; setupHost(); }),
    waitHost(20000)
  ]).then(function (r) {
    core = r[0] || {}; core.host = core.host || {}; core.flat = core.flat || {};
    T = core._text || null;
    if (r[1]) setupHost(); else log('host composer not found in 20s');
    if (T) pass(document.body);
    mo.observe(document.documentElement, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS });
    scanApps();
    setInterval(scanApps, 2500);
    // apps 사전은 뒤이어
    return load(URL_APPS, function (nd) { appsDict = nd.apps || {}; applyPendingApps(); });
  }).then(function (a) {
    if (a) { appsDict = a.apps || {}; applyPendingApps(); scanApps(); log('apps dict loaded', Object.keys(appsDict).length); }
  }).catch(function (e) { log('boot failed', e); });
})();
