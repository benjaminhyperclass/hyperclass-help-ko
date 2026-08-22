/* Hyperclass 한글팩 — 메인 앱(GHL 화이트라벨) 로더 v4.2.0
 * Agency Settings → Company → Whitelabel → Custom Code → Custom JavaScript 칸 전용 (순수 JS, <script> 태그 없음)
 *
 * 2026-08-22 app.hyperclass.ai 실측 구조(310개 라우트 크롤) 기준.
 * 처리 패턴
 *  A. 호스트(#app) composer 에 merge + mergeLocaleMessage 래핑 → 원격이 영어 네임스페이스를 넣는 즉시 한국어로 재덮어쓰기
 *  B. 별도 Vue 앱(__vue_app__) 24종 → 카탈로그 지문으로 매칭해 각각 merge (정확일치 → 유사도 폴백)
 *  C. provide('t') ref 방식 원격(클라이언트 포털·코스·브랜딩 등) → t ref 를 래퍼로 교체
 *  D. i18n 밖 하드코딩 문구 → 텍스트 치환 레이어(_text)
 *
 * 사전: core(호스트+flat+_text) 먼저, apps 는 백그라운드로 이어서.
 *       REV 가 커밋 SHA 로 고정돼 있으면 URL 이 불변이므로 Cache Storage 를 재검증 없이 쓴다.
 *       REV 를 바꾸면 옛 캐시 버킷은 부팅 때 자동 삭제된다.
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

  /* ---------- 서브계정 옵트아웃 (레거시 hcEx() 와 규칙 동일) ---------- */
  // dashboard-ko 레이어의 hcEx() 와 **글자 그대로 같은 판정**이어야 한다.
  // 두 레이어가 제외 대상을 다르게 보면 그 계정만 반쪽 한국어가 된다.
  //
  //   var c = window.HC_I18N_EXCLUDE || ["1r0pJRd1cQQ5DZsjSbc9"];
  //   var m = window.location.pathname.match(/\/location\/([^\/]+)/);
  //   return !!(m && c.indexOf(m[1]) > -1)
  //
  // 정규식은 레거시 그대로 `/location/` 이다 — `/v2` 를 요구하지 않는다.
  // 아래 ALLOW 검사(locOf)는 `/v2/location/` 을 쓰는데, 그쪽이 더 좁다.
  // 제외는 허용보다 넓어야 안전하므로(좁으면 새어 나간다) 이 차이는 의도적이다.
  // `/location/x` 는 `/v2/location/x` 안에도 들어 있어 두 경로를 모두 잡는다.
  var HC_EXCLUDE_FALLBACK = ['1r0pJRd1cQQ5DZsjSbc9'];
  function excluded() {
    try {
      var c = window.HC_I18N_EXCLUDE || HC_EXCLUDE_FALLBACK;
      var m = window.location.pathname.match(/\/location\/([^\/]+)/);
      return !!(m && c.indexOf(m[1]) > -1);
    } catch (e) { return false; }
  }

  // ▼▼▼ 단계적 배포 ▼▼▼
  // 확대할 때 이 배열을 [] 로 비우세요. 비면 전 서브계정에 적용됩니다.
  // 값이 있으면 그 로케이션 ID 에서만 동작하고 나머지는 영어 그대로입니다.
  var ALLOW = ['r6JD1nsqtk6Oln28fgrj'];
  // ▲▲▲ 단계적 배포 ▲▲▲
  var gate = ALLOW.length > 0;

  function locOf() {
    var m = location.pathname.match(/\/v2\/location\/([^/]+)/);
    return m ? m[1] : null;
  }
  // 여기서 바로 return 하지 않는다. 이 앱은 새로고침 없이 라우트를 바꾸므로
  // (로더 자신이 routeChangeEvent 를 듣는다) 로드 시점 한 번의 판정으로는
  // 계정 전환을 놓친다. 부팅 직전과 라우트 변경 때마다 다시 본다.
  function allowed() {
    // 옵트아웃이 화이트리스트보다 먼저다. 여기서 즉시 return 하지 않고
    // allowed() 안에 둔 이유: ① 게이트에 막혔을 때도 __hcKoApp.status() 로
    // 원인을 확인할 수 있어야 하고(안 그러면 excluded 값을 볼 방법이 없다),
    // ② 이 앱은 새로고침 없이 계정을 바꾸므로 라우트 변경마다 다시 봐야 한다.
    if (excluded()) return false;
    if (!ALLOW.length) return true;
    var l = locOf();
    return !!l && ALLOW.indexOf(l) >= 0;
  }

  /* ---------- P2. 사전 버전을 캐시 키에 반영 ---------- */
  // 커밋할 때마다 REV 가 바뀌면 CDN·Cache Storage 가 함께 무효화된다.
  // @main 고정이면 jsDelivr 24h + TTL 6h 가 직렬로 쌓여 최악 30시간 지연된다.
  var REV = '805efe2341b282d74ab94addd3072dea5ca7d5a3';
  var BASE = 'https://cdn.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@' + REV + '/data/';
  var URL_CORE = BASE + 'hc-ko-app-core.json';
  var URL_APPS = BASE + 'hc-ko-app-apps.json';
  var CACHE = 'hc-ko-app-' + REV.slice(0, 7);
  var TTL = 6 * 3600 * 1000;
  var LOCALE_KEYS = ['en', 'en-US', 'en_US'];
  var DEBUG = /[?&]hcko=debug/.test(location.search);

  var core = null, appsDict = null, appsKeys = null, T = null;
  var booted = false, suspended = false;
  // 되돌릴 수 없는 변경을 한 번이라도 했는가.
  // i18n 카탈로그에 한국어를 부어 넣거나 provides.t 를 래퍼로 바꾸면
  // 원복 수단이 없다 — 이 상태에서 제외 계정으로 넘어가면 새로고침이 유일한 답이다.
  var dirty = false;
  var stats = { host: 0, apps: 0, tref: 0, remerge: 0, fuzzy: 0, unmatched: 0, textHits: 0 };
  function log() { if (DEBUG && window.console) console.log.apply(console, ['[hc-ko]'].concat([].slice.call(arguments))); }

  // API 는 게이트보다 먼저 정의한다. 게이트에 막혔을 때 __hcKoApp 이 undefined 이면
  // "로더를 안 붙였다" 와 "게이트에 막혔다" 를 콘솔에서 구분할 수 없다.
  var API = window.__hcKoApp = {
    version: '4.2.0',
    status: function () {
      var s = JSON.parse(JSON.stringify(stats));
      s.rev = REV;
      s.gate = gate;              // 화이트리스트가 걸려 있는가
      s.allow = ALLOW.slice();
      s.location = locOf();       // 지금 보고 있는 로케이션 (/v2/location/ 기준)
      s.excluded = excluded();    // 서브계정 옵트아웃 — 레거시 hcEx() 와 같은 판정
      s.allowedHere = allowed();  // 여기에 적용되는가 (excluded 가 true 면 무조건 false)
      s.booted = booted;
      s.suspended = suspended;    // 비허용 로케이션으로 이동해 멈춘 상태인가
      s.dirty = dirty;            // 되돌릴 수 없는 변경(카탈로그 병합·t-ref 래핑)을 했는가
      s.coreLoaded = !!core;
      s.appsLoaded = !!appsDict;
      s.textEntries = T ? Object.keys(T).length : 0;
      return s;
    },
    rescan: function () { scanApps(); },
    off: function () { try { localStorage.setItem('hcKoOff', '1'); } catch (e) {} return '새로고침하면 영어로 돌아갑니다.'; },
    on: function () { try { localStorage.removeItem('hcKoOff'); } catch (e) {} return '새로고침하면 한국어로 돌아옵니다.'; },
    get core() { return core; }, get apps() { return appsDict; }
  };

  /* ---------- 한국어 조판 ---------- */
  function injectCss() {
    if (document.getElementById('hc-ko-app-style')) return;
    var css = document.createElement('style');
    css.id = 'hc-ko-app-style';
    css.textContent = 'html[lang="ko"] body{word-break:keep-all;overflow-wrap:anywhere}';
    (document.head || document.documentElement).appendChild(css);
  }

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
    if (n) { dirty = true; log('merged', tag, '→', keys.join(',')); }
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
        // 래퍼는 제거할 수 없다(원본 참조를 앱이 이미 들고 있을 수 있다).
        // 대신 멈춤 상태면 아무것도 하지 않고 원본 결과를 그대로 돌려준다 —
        // 이게 없으면 제외 계정에서 앱이 새로 로드한 영어를 계속 한국어로 되돌린다.
        if (suspended) return r;
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
  // 앱별 시도 횟수. 카탈로그가 아직 비어 있는 채로 마운트된 순간에 스캔이 걸리면
  // 매칭이 실패하는데, 한 번 실패했다고 영구 제외하면 그 앱은 세션 내내 영어로 남는다.
  // 성공 = -1(완료), 실패 = 시도 횟수. MAX_TRY 를 넘겨야 포기하고 unmatched 로 센다.
  var MAX_TRY = 6;
  var attempts = (typeof WeakMap === 'function') ? new WeakMap()
    : { get: function () { return 0; }, set: function () {} };
  function wrapTRef(el) {
    try {
      var root = el._vnode && el._vnode.component, p = root && root.provides;
      if (!p || !Object.prototype.hasOwnProperty.call(p, 't')) return false;
      var ref = p.t;
      if (!ref || typeof ref !== 'object' || !('value' in ref) || ref.__hcWrapped) return false;
      function install(orig) {
        if (typeof orig !== 'function' || orig.__hcWrap) return false;
        var w = function (key) {
          // 멈춤 상태면 원본에 그대로 위임한다. ref.value 를 되돌리는 것보다
          // 안전하다 — 컴포넌트가 이미 이 함수 참조를 캡처했을 수 있다.
          if (!suspended && arguments.length === 1 && core && core.flat) {
            var ko = core.flat[key]; if (ko !== undefined) return ko;
          }
          return orig.apply(this, arguments);
        };
        w.__hcWrap = true; ref.value = w; ref.__hcWrapped = true; stats.tref++; dirty = true;
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
    var m = matchApp(g);
    if (!m) return false;     // 실패해도 등록하지 않는다 — 재시도 여지를 남긴다
    merged.add(g);
    mergeInto(g, m.ko, 'app(' + m.how + ')');
    stats.apps++;
    if (m.how !== 'exact') {
      stats.fuzzy++;
      log(m.how + ' matched', (el.id || el.className || '').toString().slice(0, 30),
          m.fp.slice(0, 40), m.sim ? 'sim=' + m.sim.toFixed(2) : '');
    }
    return true;
  }
  function handle(el, app) {
    var n = attempts.get(app) || 0;
    if (n === -1 || n >= MAX_TRY) return;          // 완료했거나 포기한 앱
    // 호스트도 composer 를 못 찾는 순간이 있다. 한 번 실패로 영구 제외하면
    // 메인 앱 전체(41,997키)가 세션 내내 영어로 남는다.
    if (el.id === 'app') {
      if (hostDone || setupHost()) { attempts.set(app, -1); return; }
      attempts.set(app, n + 1);
      return;
    }
    var g = composerOf(app);
    if (!g) {
      if (wrapTRef(el)) attempts.set(app, -1);
      else attempts.set(app, n + 1);
      return;
    }
    if (!appsDict) return;                          // apps 사전 도착 전 — 횟수도 세지 않는다
    if (applyApp(el, g)) { attempts.set(app, -1); return; }
    n += 1;
    attempts.set(app, n);
    if (n >= MAX_TRY) {
      stats.unmatched++;
      log('no dict for app (포기)', (el.id || el.className || '').toString().slice(0, 30),
          '| fp:', fingerprint(g).slice(0, 60),
          '| top:', Object.keys(catalogOf(g)).slice(0, 8).join(','));
    }
  }
  function scanApps() {
    if (!core || suspended) return;
    var els = document.querySelectorAll('*');
    for (var i = 0; i < els.length; i++) {
      var app = els[i].__vue_app__;
      if (app) handle(els[i], app);
    }
  }
  function applyPendingApps() { scanApps(); }   // apps 사전이 늦게 도착했을 때

  /* ---------- D. 텍스트 치환 ---------- */
  var ATTRS = ['placeholder', 'title', 'aria-label', 'alt'];
  // P6. s.replace(t, v) 는 v 에 $& $' $` $$ 가 있으면 오작동한다.
  // 함수형 치환은 치환 문자열을 해석하지 않는다.
  function repl(s, t, v) { return s.replace(t, function () { return v; }); }

  // 치환하면 안 되는 자리. 스니펫·커스텀 코드 편집기, 사용자가 입력 중인 본문 등.
  // isContentEditable 은 상속을 반영하므로 부모 한 단계만 봐도 충분하다.
  var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, NOSCRIPT: 1, TITLE: 1 };
  function skipNode(n) {
    var p = n.parentElement;
    if (!p) return false;
    if (SKIP_TAGS[p.tagName]) return true;
    if (p.isContentEditable) return true;
    return false;
  }
  function trText(n) {
    var s = n.nodeValue; if (!s || !T) return;
    var t = s.trim(); if (!t) return;
    var v = T[t];
    if (v === undefined) return;
    if (skipNode(n)) return;
    n.nodeValue = repl(s, t, v); stats.textHits++;
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
  // REV 를 커밋 SHA 로 고정하면 URL 이 불변이라 내용이 바뀔 수 없다.
  // 그때 6시간마다 5.4MB 를 다시 받는 건 순수 낭비다.
  var IMMUTABLE = /^[0-9a-f]{7,40}$/.test(REV);

  // 캐시 이름에 REV 가 들어가므로 갱신할 때마다 새 버킷이 생긴다.
  // 옛 버킷을 지우지 않으면 갱신 1회당 약 5.4MB 가 그대로 남는다.
  // 쿼터가 차면 cache.put 이 조용히 실패하고 매 페이지 로드마다 재다운로드한다.
  function purgeOldCaches() {
    try {
      if (!('caches' in window) || !caches.keys) return;
      caches.keys().then(function (names) {
        for (var i = 0; i < names.length; i++) {
          var n = names[i];
          if (n !== CACHE && n.indexOf('hc-ko-app-') === 0) {
            caches.delete(n); log('옛 캐시 삭제', n);
          }
        }
      }).catch(function () {});
    } catch (e) {}
  }

  function load(url, onStale) {
    if (!('caches' in window)) return fetchFresh(url, null);
    return caches.open(CACHE).then(function (cache) {
      return cache.match(url).then(function (hit) {
        if (!hit) return fetchFresh(url, cache);
        var stale = !IMMUTABLE && (Date.now() - Number(hit.headers.get('X-HC-TS') || 0) > TTL);
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
  var scanIv = null;

  function boot() {
    if (booted || !allowed()) return;
    booted = true;
    injectCss();
    purgeOldCaches();
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
      scanIv = setInterval(scanApps, 5000);
      return load(URL_APPS, function (nd) { appsDict = nd.apps || {}; appsKeys = null; applyPendingApps(); });
    }).then(function (a) {
      if (a) {
        appsDict = a.apps || {}; appsKeys = null;
        scanNow();
        log('apps dict loaded', Object.keys(appsDict).length);
      }
    }).catch(function (e) { log('boot failed', e); });
  }

  // 비허용 로케이션으로 넘어갔을 때. 이미 i18n 카탈로그에 병합된 한국어는
  // 되돌릴 수 없지만, 텍스트 치환과 새 앱 적용은 여기서 멈춘다.
  // 완전히 영어로 돌리려면 새로고침이 필요하다.
  function suspend() {
    if (suspended) return;
    suspended = true;
    try { mo.disconnect(); } catch (e) {}
    if (scanIv) { clearInterval(scanIv); scanIv = null; }
    if (scanTimer) { clearTimeout(scanTimer); scanTimer = null; }
    log('비허용 로케이션 — 중단', locOf());

    // 이미 i18n 카탈로그에 부어 넣은 한국어는 되돌릴 방법이 없다.
    // 레거시 hcEx() 는 DOM 치환만 하므로 제외 계정에서 즉시 영어가 되는데,
    // v4 는 그대로 두면 "이전에 로드된 화면은 한국어" 인 반쪽 상태가 된다.
    // 두 레이어의 판정을 맞추려면 여기서 한 번 새로고침하는 수밖에 없다.
    //
    // 루프는 나지 않는다: 새로고침 후 excluded() 가 true 라 allowed() 가 false 이고,
    // boot() 가 아예 실행되지 않아 dirty 가 다시 서지 않는다.
    if (dirty) {
      dirty = false;
      log('오염된 카탈로그 — 새로고침으로 영어 복귀');
      try { location.reload(); } catch (e) {}
    }
  }

  function resume() {
    if (!suspended) return;
    suspended = false;
    try {
      mo.observe(document.documentElement, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS });
    } catch (e) {}
    if (!scanIv) scanIv = setInterval(scanApps, 5000);
    if (T) pass(document.body);
    log('허용 로케이션으로 복귀 — 재개', locOf());
  }

  function onRoute() {
    if (!allowed()) { suspend(); return; }
    if (!booted) { boot(); return; }
    resume();
    // 라우트 이동은 앱이 통째로 갈리는 지점이라 디바운스를 기다리지 않는다.
    scheduleScan(80);
  }
  window.addEventListener('routeChangeEvent', onRoute);

  if (allowed()) boot();
  else log('게이트에 막힘 — 현재 로케이션:', locOf(), '/ 허용:', ALLOW.join(','));
})();
