/* Hyperclass 한글팩 — 메인 앱(GHL 화이트라벨) 로더 v4.1.0
 * Agency Settings → Company → Whitelabel → Custom Code → Custom JavaScript 칸 전용 (순수 JS, <script> 태그 없음)
 *
 * 2026-08-22 app.hyperclass.ai 실측 구조(310개 라우트 크롤) 기준.
 * 처리 패턴
 *  A. 호스트(#app) composer 에 merge + mergeLocaleMessage 래핑 → 원격이 영어 네임스페이스를 넣는 즉시 한국어로 재덮어쓰기
 *  B. 별도 Vue 앱(__vue_app__) 24종 → 카탈로그 지문으로 매칭해 각각 merge (정확일치 → 유사도 폴백)
 *  C. provide('t') ref 방식 원격(클라이언트 포털·코스·브랜딩 등) → t ref 를 래퍼로 교체
 *  D. i18n 밖 하드코딩 문구 → 텍스트 치환 레이어(_text)
 *
 * 사전: core(호스트+flat+_text) 먼저, apps 는 백그라운드로 이어서. Cache Storage 6시간 stale-while-revalidate.
 * 긴급 중단: 주소에 ?hcko=off 또는 콘솔에서 localStorage.hcKoOff='1'
 * 디버그:   주소에 ?hcko=debug → 콘솔 로그, window.__hcKoApp.status()
 */
(function () {
  'use strict';
  if (window.__hcKoApp) return;

  /* ---------- P1. 킬 스위치 + 단계적 배포 게이트 ---------- */

  // 긴급 중단 — 이 줄이 먼저다. 사전을 받기 전에 빠져나간다.
  try {
    if (/[?&]hcko=off/.test(location.search) || localStorage.getItem('hcKoOff') === '1') return;
  } catch (e) {}

  // ▼▼▼ 단계적 배포 ▼▼▼
  // 확대할 때 이 배열을 [] 로 비우세요. 비면 전 서브계정에 적용됩니다.
  // 값이 있으면 그 로케이션 ID 에서만 동작하고 나머지는 영어 그대로입니다.
  var ALLOW = ['r6JD1nsqtk6Oln28fgrj'];
  // ▲▲▲ 단계적 배포 ▲▲▲
  var gate = true;
  if (ALLOW.length) {
    var loc = (location.pathname.match(/\/v2\/location\/([^/]+)/) || [])[1];
    if (!loc || ALLOW.indexOf(loc) < 0) return;
    gate = true;
  } else {
    gate = false;   // 게이트 해제 = 전체 적용
  }

  /* ---------- P2. 사전 버전을 캐시 키에 반영 ---------- */
  // 커밋할 때마다 REV 가 바뀌면 CDN·Cache Storage 가 함께 무효화된다.
  // @main 고정이면 jsDelivr 24h + TTL 6h 가 직렬로 쌓여 최악 30시간 지연된다.
  var REV = 'd6fcc4c28972d466746db748b57f0e836cae1324';
  var BASE = 'https://cdn.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@' + REV + '/data/';
  var URL_CORE = BASE + 'hc-ko-app-core.json';
  var URL_APPS = BASE + 'hc-ko-app-apps.json';
  var CACHE = 'hc-ko-app-' + REV.slice(0, 7);
  var TTL = 6 * 3600 * 1000;
  var LOCALE_KEYS = ['en', 'en-US', 'en_US'];
  var DEBUG = /[?&]hcko=debug/.test(location.search);

  var core = null, appsDict = null, appsKeys = null, T = null;
  var stats = { host: 0, apps: 0, tref: 0, remerge: 0, fuzzy: 0, unmatched: 0, textHits: 0 };
  function log() { if (DEBUG && window.console) console.log.apply(console, ['[hc-ko]'].concat([].slice.call(arguments))); }

  var API = window.__hcKoApp = {
    version: '4.1.0',
    status: function () {
      var s = JSON.parse(JSON.stringify(stats));
      s.rev = REV; s.gate = gate; s.allow = ALLOW.slice();
      return s;
    },
    rescan: function () { scanApps(); },
    off: function () { try { localStorage.setItem('hcKoOff', '1'); } catch (e) {} return '새로고침하면 영어로 돌아갑니다.'; },
    on: function () { try { localStorage.removeItem('hcKoOff'); } catch (e) {} return '새로고침하면 한국어로 돌아옵니다.'; },
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

  /* ---------- P3. 병합 대상 로케일 축소 ---------- */
  // 종전엔 en/en-US/en_US 3개에 무조건 넣어 같은 사전을 3벌 들고 있었다
  // (호스트만 41,997키 × 3). 실제 존재하는 로케일 + 현재 로케일에만 넣는다.
  function targetLocales(g) {
    var msgs = unwrap(g.messages) || {}, cur = unwrap(g.locale), out = [];
    for (var i = 0; i < LOCALE_KEYS.length; i++)
      if (LOCALE_KEYS[i] in msgs) out.push(LOCALE_KEYS[i]);
    if (cur && out.indexOf(cur) < 0) out.push(cur);
    return out.length ? out : [cur || 'en'];
  }
  function mergeInto(g, messages, tag) {
    if (!messages) return 0;
    var keys = targetLocales(g), fn = rawMerge(g), n = 0;
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

  /* ---------- P4. 지문 매칭 — 정확일치 후 유사도 폴백 ---------- */
  // 정확일치는 최상위 네임스페이스가 하나만 추가돼도 어긋난다.
  // bulkActionsList 는 13,034키가 걸려 있어 조용히 영어로 돌아가면 타격이 크다.
  var MIN_TOP = 2;      // 최상위 키가 이보다 적으면 유사도가 무의미
  var MIN_SIM = 0.6;    // 자카드 유사도 하한
  var MIN_GAP = 0.15;   // 1위와 2위의 최소 격차 — 붙어 있으면 채택하지 않는다
  var CONTAIN_MAX = 4;  // 포함 관계 폴백을 시도할 최대 최상위 키 수

  function buildAppsKeys() {
    appsKeys = [];
    for (var fp in appsDict) {
      var top = Object.keys(appsDict[fp] || {});
      appsKeys.push({ fp: fp, set: top, n: top.length });
    }
  }
  function jaccard(a, bArr) {
    var inter = 0, seenB = {};
    for (var i = 0; i < bArr.length; i++) seenB[bArr[i]] = 1;
    for (var k in a) if (seenB[k]) inter++;
    var union = Object.keys(a).length + bArr.length - inter;
    return union ? inter / union : 0;
  }
  function matchApp(g) {
    if (!appsDict) return null;
    var fp = fingerprint(g);
    if (appsDict[fp]) return { ko: appsDict[fp], how: 'exact', fp: fp };

    var live = catalogOf(g), liveN = Object.keys(live).length;
    if (!appsKeys) buildAppsKeys();

    var i, c;
    if (liveN >= MIN_TOP) {
      var best = null, second = 0;
      for (i = 0; i < appsKeys.length; i++) {
        c = appsKeys[i];
        if (c.n < MIN_TOP) continue;
        var s = jaccard(live, c.set);
        if (!best || s > best.s) { second = best ? best.s : second; best = { s: s, fp: c.fp }; }
        else if (s > second) second = s;
      }
      if (best && best.s >= MIN_SIM && (best.s - second) >= MIN_GAP)
        return { ko: appsDict[best.fp], how: 'fuzzy', fp: best.fp, sim: best.s };
    }

    // 포함 관계 폴백 — gbp-optimization(yext), reputation-dashboard(reputation)처럼
    // 최상위 네임스페이스가 하나뿐인 앱은 유사도가 성립하지 않는다.
    // "사전의 네임스페이스가 전부 화면 카탈로그 안에 있는" 후보 중 가장 큰 것을 고른다.
    // 동점이면 채택하지 않는다.
    if (liveN <= CONTAIN_MAX) {
      var pick = null, tie = false;
      for (i = 0; i < appsKeys.length; i++) {
        c = appsKeys[i];
        if (c.n > liveN) continue;
        var all = true;
        for (var j = 0; j < c.set.length; j++) if (!(c.set[j] in live)) { all = false; break; }
        if (!all) continue;
        if (!pick || c.n > pick.n) { pick = c; tie = false; }
        else if (c.n === pick.n) tie = true;
      }
      if (pick && !tie) return { ko: appsDict[pick.fp], how: 'contain', fp: pick.fp };
    }
    return null;
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
  // 같은 composer 를 두 번 병합하지 않는다. applyPendingApps 가 전체를 다시 훑기 때문에
  // 가드가 없으면 중복 merge 와 통계 부풀림이 생긴다.
  var merged = (typeof WeakSet === 'function') ? new WeakSet() : { has: function () { return false; }, add: function () {} };
  function applyApp(el, g) {
    if (merged.has(g)) return true;
    merged.add(g);
    var m = matchApp(g);
    if (m) {
      mergeInto(g, m.ko, 'app(' + m.how + ')');
      stats.apps++;
      if (m.how !== 'exact') {
        stats.fuzzy++;
        log(m.how + ' matched', (el.id || el.className || '').toString().slice(0, 30),
            m.fp.slice(0, 40), m.sim ? 'sim=' + m.sim.toFixed(2) : '');
      }
      return true;
    }
    stats.unmatched++;
    log('no dict for app', (el.id || el.className || '').toString().slice(0, 30),
        '| fp:', fingerprint(g).slice(0, 60),
        '| top:', Object.keys(catalogOf(g)).slice(0, 8).join(','));
    return false;
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
        applyApp(el, g);
      } else wrapTRef(el);
    }
  }
  function applyPendingApps() {   // apps 사전이 늦게 도착했을 때 이미 뜬 앱들에 적용
    var els = document.querySelectorAll('*');
    for (var i = 0; i < els.length; i++) {
      var el = els[i], app = el.__vue_app__; if (!app || el.id === 'app') continue;
      var g = composerOf(app); if (!g) continue;
      applyApp(el, g);
    }
  }

  /* ---------- D. 텍스트 치환 ---------- */
  var ATTRS = ['placeholder', 'title', 'aria-label', 'alt'];
  // P6. s.replace(t, v) 는 v 에 $& $' $` $$ 가 있으면 오작동한다.
  // 함수형 치환은 치환 문자열을 해석하지 않는다.
  function repl(s, t, v) { return s.replace(t, function () { return v; }); }
  function trText(n) {
    var s = n.nodeValue; if (!s || !T) return;
    var t = s.trim(); if (!t) return;
    var v = T[t];
    if (v !== undefined) { n.nodeValue = repl(s, t, v); stats.textHits++; }
  }
  function trAttrs(el) {
    if (!T || !el.getAttribute) return;
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i], s = el.getAttribute(a); if (!s) continue;
      var v = T[s.trim()];
      if (v !== undefined) { el.setAttribute(a, v); stats.textHits++; }
    }
  }
  function pass(root) {
    if (!T || !root) return;
    try {
      var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), n;
      while ((n = w.nextNode())) trText(n);
      if (root.querySelectorAll) { var els = root.querySelectorAll('[placeholder],[title],[aria-label],[alt]'); for (var i = 0; i < els.length; i++) trAttrs(els[i]); }
      if (root.nodeType === 1) trAttrs(root);
    } catch (e) {}
  }

  /* ---------- P5. scanApps 호출 억제 ---------- */
  // querySelectorAll('*') 은 GHL 페이지에서 만 개 단위를 훑는다.
  // 텍스트 치환은 종전대로 즉시 하고, 앱 스캔만 늦춘다.
  var SCAN_DEBOUNCE = 400;
  var scanTimer = null;
  function scheduleScan(delay) {
    if (scanTimer) return;
    scanTimer = setTimeout(function () { scanTimer = null; scanApps(); }, delay || SCAN_DEBOUNCE);
  }
  function scanNow() { if (scanTimer) { clearTimeout(scanTimer); scanTimer = null; } scanApps(); }
  // 새로 붙은 노드에 Vue 앱 루트가 실제로 있을 때만 스캔을 건다.
  // 자식까지 전부 뒤지면 억제하려던 비용이 그대로 돌아오므로 본인 + 직계 자식까지만 본다.
  function hasVueApp(nd) {
    if (nd.__vue_app__) return true;
    var c = nd.children; if (!c) return false;
    for (var i = 0; i < c.length; i++) if (c[i].__vue_app__) return true;
    return false;
  }

  var mo = new MutationObserver(function (muts) {
    var wantScan = false;
    for (var i = 0; i < muts.length; i++) {
      var m = muts[i];
      if (m.type === 'characterData') trText(m.target);
      else if (m.type === 'attributes') trAttrs(m.target);
      else if (m.addedNodes) for (var j = 0; j < m.addedNodes.length; j++) {
        var nd = m.addedNodes[j];
        if (nd.nodeType === 3) trText(nd);
        else if (nd.nodeType === 1) { pass(nd); if (!wantScan && hasVueApp(nd)) wantScan = true; }
      }
    }
    if (wantScan) scheduleScan(SCAN_DEBOUNCE);
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
    setInterval(scanApps, 5000);
    // 라우트 이동은 앱이 통째로 갈리는 지점이라 디바운스를 기다리지 않는다.
    window.addEventListener('routeChangeEvent', function () { scheduleScan(80); });
    // apps 사전은 뒤이어
    return load(URL_APPS, function (nd) { appsDict = nd.apps || {}; appsKeys = null; applyPendingApps(); });
  }).then(function (a) {
    if (a) {
      appsDict = a.apps || {}; appsKeys = null;
      applyPendingApps(); scanNow();
      log('apps dict loaded', Object.keys(appsDict).length);
    }
  }).catch(function (e) { log('boot failed', e); });
})();
