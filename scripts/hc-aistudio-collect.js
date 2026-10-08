/* Hyperclass 한글팩 — AI Studio 수집기 v1 (2026-10-08)
 *
 * hc-gap-collect.js(렌더된 영어) + hc-crawl-v3.js(i18n 카탈로그)를 한 메뉴용으로 합친 것.
 * 로케이션 화면(/v2/location/<id>/…)의 콘솔에 붙여 넣고, AI Studio 하위 페이지를
 * 평소처럼 돌아다니면 된다. 탭·모달·드롭다운·빈 상태 화면을 열 때마다 줍는다. 클릭은 하지 않는다.
 *
 *   __hcAI.routes()     라우터에 등록된 AI 관련 경로 목록 (빠짐없이 돌기 위한 체크리스트)
 *   __hcAI.status()     수집 현황
 *   __hcAI.download()   hc-aistudio-YYYY-MM-DD.json 저장
 *   __hcAI.reset()      수집분 폐기
 *
 * 모으는 것
 *   catalogs  각 Vue 앱의 i18n 카탈로그. 호스트(#app)는 한글이 없는 잎만, 별도 앱은 카탈로그 전체(중첩 그대로)
 *             + 지문(정렬 키 앞 5개) — v4 로더 apps 사전의 키가 이 지문이다.
 *   text      화면에 렌더된 영어 (텍스트 노드 + placeholder/title/aria-label/alt), 경로별
 *   frames    페이지 안 iframe 목록과 접근 가능 여부 — 교차 출처면 Custom JS 로 번역 불가
 *   caches    localStorage i18n_cache_* 모듈 중 한글 번역이 없는 항목
 */
(function () {
  'use strict';
  if (window.__hcAI && window.__hcAI.running) { console.warn('[hc-ai] 이미 실행 중'); return; }

  var HANGUL = /[가-힣]/, LATIN = /[A-Za-z]{2,}/;
  var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, NOSCRIPT: 1, TITLE: 1, CODE: 1, PRE: 1 };
  var ATTRS = ['placeholder', 'title', 'aria-label', 'alt'];
  var AI_RE = /ai|studio|agent|bot|copilot|voice|knowledge|prompt|llm|model/i;

  var acc = { _meta: { started: new Date().toISOString(), ua: navigator.userAgent, host: location.host },
              routesSeen: {}, catalogs: {}, text: {}, frames: {}, caches: {} };
  var seenText = Object.create(null);

  function usable(s) {
    if (!s) return false;
    var t = s.trim();
    return t.length >= 2 && t.length <= 400 && !HANGUL.test(t) && LATIN.test(t);
  }
  function route() { return location.pathname.replace(/\/v2\/location\/[^/]+/, '/v2/location/:id') + location.hash; }

  /* ---------- 렌더 텍스트 ---------- */
  function addText(t, where) {
    t = t.trim();
    if (!usable(t)) return;
    if (!seenText[t]) { seenText[t] = {}; acc.text[t] = []; }
    if (!seenText[t][where]) { seenText[t][where] = 1; acc.text[t].push(where); }
  }
  function harvestDoc(doc, tag) {
    try {
      var r = route() + (tag || '');
      var w = doc.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT, null), n;
      while ((n = w.nextNode())) {
        var p = n.parentElement;
        if (!p || SKIP_TAGS[p.tagName] || p.isContentEditable) continue;
        addText(n.nodeValue, r);
      }
      var els = doc.querySelectorAll('[placeholder],[title],[aria-label],[alt]');
      for (var i = 0; i < els.length; i++)
        for (var j = 0; j < ATTRS.length; j++) {
          var v = els[i].getAttribute(ATTRS[j]);
          if (v) addText(v, r + '@' + ATTRS[j]);
        }
      // 열린 shadow root 도 훑는다 (웹 컴포넌트형 위젯)
      var all = doc.querySelectorAll('*');
      for (var k = 0; k < all.length; k++) if (all[k].shadowRoot) {
        var sw = doc.createTreeWalker(all[k].shadowRoot, NodeFilter.SHOW_TEXT, null), sn;
        while ((sn = sw.nextNode())) addText(sn.nodeValue, r + '#shadow');
      }
    } catch (e) {}
  }

  /* ---------- i18n 카탈로그 ---------- */
  function composerOf(app) {
    try {
      var p = app._context.provides, s = Object.getOwnPropertySymbols(p);
      for (var i = 0; i < s.length; i++) { var v = p[s[i]]; if (v && v.global && v.mode) return v.global; }
    } catch (e) {}
    return null;
  }
  function unwrap(x) { return (x && typeof x === 'object' && 'value' in x) ? x.value : x; }
  function catalogOf(g) {
    var m = unwrap(g.messages) || {}, l = unwrap(g.locale);
    return { locale: l, locales: Object.keys(m), cat: m[l] || m['en-US'] || m['en_US'] || m['en'] || {} };
  }
  function fingerprint(cat) { return Object.keys(cat).sort().slice(0, 5).join('|'); }
  function englishLeaves(o, pre, out) {
    for (var k in o) {
      var v = o[k];
      if (v && typeof v === 'object') englishLeaves(v, pre + k + '.', out);
      else if (typeof v === 'string' && !HANGUL.test(v) && LATIN.test(v)) out[pre + k] = v;
    }
    return out;
  }
  function plain(o) { try { return JSON.parse(JSON.stringify(o)); } catch (e) { return null; } }

  function harvestApps(doc, tag) {
    var els = doc.querySelectorAll('*'), r = route() + (tag || '');
    for (var i = 0; i < els.length; i++) {
      var app = els[i].__vue_app__; if (!app) continue;
      var el = els[i], isHost = el.id === 'app' && doc === document;
      var g = composerOf(app), id;
      if (!g) {
        // provide('t') 방식 원격 — 카탈로그를 꺼낼 수 없다. 존재만 기록 (텍스트는 위에서 잡힌다)
        id = 'tref:' + (el.id || el.className || el.tagName).toString().slice(0, 60);
        acc.catalogs[id] = acc.catalogs[id] || { kind: 'tref-or-none', routes: {} };
        acc.catalogs[id].routes[r] = 1;
        continue;
      }
      var c = catalogOf(g), fp = fingerprint(c.cat);
      id = isHost ? 'host' : 'app:' + fp;
      var rec = acc.catalogs[id] || (acc.catalogs[id] = { kind: isHost ? 'host' : 'app', fp: fp, el: (el.id || el.className || '').toString().slice(0, 60), routes: {} });
      rec.routes[r] = 1;
      rec.locale = c.locale; rec.locales = c.locales;
      rec.top = Object.keys(c.cat);
      if (isHost) {
        // 호스트는 4만 키가 넘는다 — 한글 없는 잎만. 로더가 이미 병합한 키는 한글이라 빠진다.
        rec.english = englishLeaves(c.cat, '', {});
      } else {
        rec.english = englishLeaves(c.cat, '', {});
        rec.full = plain(c.cat);      // apps 사전에 그대로 넣으려면 중첩 구조가 필요하다
      }
    }
  }

  /* ---------- iframe ---------- */
  function harvestFrames() {
    var fs = document.querySelectorAll('iframe');
    for (var i = 0; i < fs.length; i++) {
      var f = fs[i], src = f.src || f.getAttribute('src') || '(srcdoc/blank)', doc = null;
      try { doc = f.contentDocument; } catch (e) {}
      var key = src.split('?')[0];
      acc.frames[key] = acc.frames[key] || { sameOrigin: !!doc, routes: {} };
      acc.frames[key].routes[route()] = 1;
      if (doc && doc.body && f.id !== 'hc-crawl-frame' && f.id !== 'hc-gap-frame') {
        harvestDoc(doc, ' [iframe ' + key.slice(0, 80) + ']');
        harvestApps(doc, ' [iframe ' + key.slice(0, 80) + ']');
      }
    }
  }

  /* ---------- 해시 기반 런타임 캐시 ---------- */
  function harvestCaches() {
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (!/^i18n_cache_/.test(k)) continue;
        var d; try { d = JSON.parse(localStorage.getItem(k)); } catch (e) { continue; }
        var out = acc.caches[k] || (acc.caches[k] = {});
        for (var h in d) {
          var e = d[h]; if (!e || typeof e !== 'object') continue;
          var o = e.original, tr = e.translatedStr;
          if (o && !HANGUL.test(tr || '') && LATIN.test(o)) out[h] = o;
        }
      }
    } catch (e) {}
  }

  function snap() {
    acc.routesSeen[route()] = (acc.routesSeen[route()] || 0) + 1;
    harvestDoc(document, '');
    harvestApps(document, '');
    harvestFrames();
  }

  /* ---------- 관찰 ---------- */
  var timer = null;
  var mo = new MutationObserver(function () {
    clearTimeout(timer);
    timer = setTimeout(function () { if (C.running) snap(); }, 700);
  });

  var C = window.__hcAI = {
    running: true,
    get acc() { return acc; },
    routes: function () {
      try {
        var router = document.getElementById('app').__vue_app__.config.globalProperties.$router;
        var out = router.getRoutes().map(function (r) { return r.path; })
          .filter(function (p) { return p.indexOf('/v2/location/:location_id') === 0 && AI_RE.test(p); })
          .map(function (p) { return p.replace('/v2/location/:location_id', ''); });
        out = out.filter(function (p, i) { return out.indexOf(p) === i; }).sort();
        acc.routerAi = out;
        console.table(out.map(function (p) { return { path: p, 방문: acc.routesSeen['/v2/location/:id' + p] ? '✓' : '' }; }));
        return out.length + '개 경로';
      } catch (e) { return '라우터를 찾지 못함: ' + e.message; }
    },
    status: function () {
      var cats = {};
      for (var id in acc.catalogs) cats[id.slice(0, 50)] = acc.catalogs[id].english ? Object.keys(acc.catalogs[id].english).length : '-';
      var fr = 0, xo = 0; for (var f in acc.frames) { fr++; if (!acc.frames[f].sameOrigin) xo++; }
      return { 경로: Object.keys(acc.routesSeen).length, 영문텍스트: Object.keys(acc.text).length,
               카탈로그_영문잎: cats, iframe: fr, 교차출처iframe: xo };
    },
    stop: function () { C.running = false; mo.disconnect(); return '중단'; },
    reset: function () { acc.routesSeen = {}; acc.catalogs = {}; acc.text = {}; acc.frames = {}; acc.caches = {}; seenText = Object.create(null); return '초기화'; },
    download: function () {
      snap(); harvestCaches(); C.routes();
      acc._meta.finished = new Date().toISOString();
      acc._meta.loader = window.__hcKoApp ? window.__hcKoApp.status() : null;
      var d = new Date(), p = function (x) { return (x < 10 ? '0' : '') + x; };
      var fn = 'hc-aistudio-' + d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()) + '.json';
      var a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([JSON.stringify(acc)], { type: 'application/json' }));
      a.download = fn; a.click();
      return fn + ' — 텍스트 ' + Object.keys(acc.text).length + '건';
    }
  };

  mo.observe(document.documentElement, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS });
  window.addEventListener('routeChangeEvent', function () { setTimeout(function () { if (C.running) snap(); }, 1200); });
  snap();
  console.log('[hc-ai] 수집 시작. AI Studio 하위를 모두 돌아다니세요 (탭·모달·드롭다운·빈 상태 포함).');
  console.log('  __hcAI.routes()   빠짐없이 돌기 위한 경로 목록');
  console.log('  __hcAI.status()   현황');
  console.log('  __hcAI.download() 저장');
  C.routes();
})();
