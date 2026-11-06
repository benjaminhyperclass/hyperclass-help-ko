/* Hyperclass 한글팩 — 커뮤니티 로더 v3.0.1 (vue-i18n 카탈로그 주입 방식 · customJs 새니타이저 호환: 꺾쇠 비교연산자 제거)
 * customJs 칸 전용: 순수 JS, HTML 태그 금지
 *
 * 동작 원리
 *  1. 페이지(Nuxt 3 + vue-i18n composition)의 i18n 인스턴스를 찾는다.
 *  2. 외부 JSON(hc-ko-i18n.json)의 한국어 메시지를 현재 로케일('en') 카탈로그 위에 mergeLocaleMessage 한다.
 *     → $t()/t() 를 쓰는 모든 컴포넌트가 즉시·반응형으로 한국어를 렌더링한다. (문자열 치환이 아니라 i18n 레이어 자체가 한국어가 됨)
 *  3. i18n 에 없는 소수의 하드코딩 문구는 보조 사전(_text)으로 텍스트 노드를 치환한다.
 *  4. 사전은 Cache Storage 에 6시간 캐시(stale-while-revalidate). 오프라인/차단 시에도 마지막 사전으로 동작.
 */
(function () {
  'use strict';
  if (window.__hcKoLoader) return;
  window.__hcKoLoader = '3.0.1';

  var DICT_URL = 'https://raw.githubusercontent.com/benjaminhyperclass/hyperclass-help-ko/main/data/hc-ko-i18n.json';
  var CACHE = 'hc-ko-v3';
  var TTL = 6 * 3600 * 1000;      // 캐시 신선도(ms). 지나면 백그라운드로 새로 받음
  var VEIL_MS = 0;                // 영어 깜빡임을 숨기고 싶으면 600~1200 (customJs 는 첫 페인트 뒤에 실행되므로 보통 0 권장)
  var WAIT_APP_MS = 15000;        // Vue 앱 탐지 최대 대기
  var PROBE = ['groupSettingsFooter', 'saveChanges']; // 재적용 감시용 키
  var DEBUG = /[?&]hcko=debug/.test(location.search);

  var dict = null, i18n = null, applied = false, probeExpect = null;
  function log() { if (DEBUG && window.console) console.log.apply(console, ['[hc-ko]'].concat([].slice.call(arguments))); }

  /* ---------- 공통 스타일 (한국어 조판 보정) ---------- */
  var kcss = document.createElement('style');
  kcss.id = 'hc-ko-style';
  kcss.textContent = 'html[lang="ko"] body{word-break:keep-all;overflow-wrap:anywhere}';
  (document.head || document.documentElement).appendChild(kcss);

  var veil = null;
  if (VEIL_MS > 0) {
    veil = document.createElement('style');
    veil.textContent = 'html{visibility:hidden!important}';
    (document.head || document.documentElement).appendChild(veil);
    setTimeout(unveil, VEIL_MS);
  }
  function unveil() { if (veil && veil.parentNode) veil.parentNode.removeChild(veil); veil = null; }

  /* ---------- 1) i18n 인스턴스 탐지 ---------- */
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
  function currentLocale(g) {
    var l = g.locale; return (l && typeof l === 'object' && 'value' in l) ? l.value : l;
  }

  /* ---------- 2) 카탈로그 주입 ---------- */
  function applyI18n() {
    if (!dict || !dict.messages || !i18n) return false;
    var g = i18n.global;
    var loc = currentLocale(g) || 'en';
    try {
      // 현재 로케일 + en 둘 다에 덮어써서, 계정 언어 설정과 무관하게 한국어가 보이도록
      g.mergeLocaleMessage('en', dict.messages);
      if (loc !== 'en') g.mergeLocaleMessage(loc, dict.messages);
      try { probeExpect = g.t(PROBE.join('.')); } catch (e) { probeExpect = null; }
      applied = true;
      document.documentElement.setAttribute('lang', 'ko');
      log('i18n merged into', loc, 'probe=', probeExpect);
      return true;
    } catch (e) { log('merge failed', e); return false; }
  }

  // 앱이 메시지를 다시 세팅하는 경우(언어 전환/재초기화)에 대비한 가벼운 감시
  function watchReapply() {
    setInterval(function () {
      if (!i18n || !dict) return;
      try {
        var g = i18n.global, now = g.t(PROBE.join('.'));
        if (probeExpect && now !== probeExpect) { log('catalogue reset detected → re-merge'); applyI18n(); }
      } catch (e) {}
    }, 2000);
  }

  /* ---------- 3) 보조: i18n 밖 하드코딩 문구 치환 ---------- */
  var ATTRS = ['placeholder', 'title', 'aria-label', 'alt'];
  var T = null; // dict._text
  function trText(node) {
    var s = node.nodeValue; if (!s || !T) return;
    var t = s.trim(); if (!t) return;
    var v = T[t]; if (v === undefined) return;
    node.nodeValue = s.replace(t, v);
  }
  function trAttrs(el) {
    if (!T || !el.getAttribute) return;
    for (var i = 0; ATTRS.length > i; i++) {
      var a = ATTRS[i], s = el.getAttribute(a); if (!s) continue;
      var t = s.trim(), v = T[t]; if (v !== undefined) el.setAttribute(a, s.replace(t, v));
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

  /* ---------- 4) 사전 로딩 (Cache Storage, stale-while-revalidate) ---------- */
  function fetchFresh(cache) {
    return fetch(DICT_URL, { mode: 'cors', cache: 'no-cache' }).then(function (res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.text();
    }).then(function (txt) {
      var d = JSON.parse(txt);
      if (cache) {
        cache.put(DICT_URL, new Response(txt, { headers: { 'Content-Type': 'application/json', 'X-HC-TS': String(Date.now()) } }));
      }
      return d;
    });
  }
  function loadDict() {
    if (window.__hcKoDict) return Promise.resolve(window.__hcKoDict); // 테스트/인라인 주입용
    if (!('caches' in window)) return fetchFresh(null);
    return caches.open(CACHE).then(function (cache) {
      return cache.match(DICT_URL).then(function (hit) {
        if (!hit) return fetchFresh(cache);
        var ts = Number(hit.headers.get('X-HC-TS') || 0);
        var stale = Date.now() - ts > TTL;
        return hit.text().then(function (txt) {
          var d = JSON.parse(txt);
          if (stale) fetchFresh(cache).then(function (nd) { dict = nd; applyI18n(); }).catch(function () {});
          return d;
        });
      });
    }).catch(function () { return fetchFresh(null); });
  }

  /* ---------- 5) 부트스트랩 ---------- */
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
    dict = r[0]; i18n = r[1];
    window.__hcKo = { dict: dict, i18n: i18n, reapply: applyI18n };
    if (!i18n) log('i18n 인스턴스를 찾지 못함 → 텍스트 치환 레이어만 동작');
    else applyI18n();
    startTextLayer();
    watchReapply();
    unveil();
  }).catch(function (e) { log('boot failed', e); unveil(); });
})();