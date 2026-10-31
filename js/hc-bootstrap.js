/* Hyperclass 한글팩 — 부트스트랩 v1.3.0 (2026-10-31)
 * Agency Settings → Company → Whitelabel → Custom Code → Custom JavaScript 칸에 **단 한 번** 붙인다.
 *
 *   script src = https://cdn.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@[이 파일이 든 커밋 SHA]/js/hc-bootstrap.js
 *   script src = https://cdn.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@8fabb6a/js/dashboard-ko.min.js   (레거시, 종전대로)
 *   (HTML 주입 칸이므로 두 줄 모두 script 태그로 감싼다 — 정확한 2줄은 DEPLOY-v4.md 참조)
 *
 * 역할: 로더(js/hc-ko-app-loader.js)와 확인입력 어댑터(js/hc-confirm-adapter.js)를
 *       **어느 커밋에서 받을지**를 data/hc-ko-app-rev.json 의 `loader` 블록에서 읽어 주입한다.
 *       사전 REV 는 종전대로 로더가 같은 파일의 `rev` 로 정한다(이 파일은 사전을 모른다).
 *       → 로더·어댑터를 고친 뒤 포인터의 loader.stable/next 만 커밋하면 슬롯 교체 없이 전 고객에 반영된다.
 *
 * 포인터 `loader` 블록:
 *   { "stable": "[sha]", "next": "[sha]", "canary": ["[locationId]", …],
 *     "files": ["js/hc-ko-app-loader.js", "js/hc-confirm-adapter.js"] }
 *   canary 에 든 로케이션은 next, 나머지는 stable 을 받는다. next 가 비어 있으면 모두 stable.
 * 포인터 `excludeLocations`: 한국어 UI 를 끄는 로케이션 목록 → window.HC_I18N_EXCLUDE 로 넘긴다
 *   (로더 excluded() 와 레거시 hcEx() 가 같은 전역을 읽는다). 비어 있으면 두 레이어의 내장 폴백.
 *
 * v1.3: 채널 강제 — 주소에 ?hcch=next (또는 stable) 를 붙이면 이 브라우저를 그 채널로 고정(localStorage.hcKoCh, 7일 만료),
 *       ?hcch= (빈 값) 으로 해제. 로케이션이 없는 비로그인 화면은 canary 가 걸리지 않으므로 next 검증용.
 *       주소의 값은 저장 실패(사파리 사생활 보호 등)와 무관하게 이번 로드에 바로 쓴다. 강제 중이면 콘솔 경고.
 *       상태: __hcBoot.status().forced (next 가 비었거나 형식이 틀리면 forced 'next' 여도 channel 은 'stable')
 * v1.2: 파일 로드 실패(갓 올린 커밋의 jsDelivr 전파 지연 등) 시 raw.githubusercontent 로 1회 재시도.
 * v1.1: 엣지 Worker 가 넣어 준 window.__hcPtr 이 있으면 0) 그 값으로 즉시 주입(source 'edge') — 저장소·네트워크 대기 없음.
 * 부팅 순서 (로더의 stale-while-revalidate 와 같은 철학):
 *   1) localStorage 에 저장된 포인터가 있으면 **즉시** 그 SHA 로 주입 (왕복 0)
 *   2) 없으면 raw@main 포인터를 받아 주입 (첫 방문 1회, 100~300ms)
 *   3) 둘 다 실패하면 FALLBACK_REF(@main) — 최후의 안전망
 *   4) 어느 경우든 포인터를 백그라운드로 다시 받아 저장 → **다음 로드**에 반영
 *
 * 금지: 이 파일에 꺾쇠(less-than) 문자를 쓰지 않는다 (ClientClub 계열 슬롯 호환). 스크립트 삽입은 createElement 만.
 * 킬: ?hcko=off / localStorage.hcKoOff='1' 은 로더가 본다. 부트스트랩 자체를 끄려면 localStorage.hcBootOff='1'.
 */
(function () {
  'use strict';
  if (window.__hcBoot) return;

  var VERSION = '1.3.0';
  var REPO = 'benjaminhyperclass/hyperclass-help-ko';
  var CDN = 'https://cdn.jsdelivr.net/gh/' + REPO + '@';
  var RAW = 'https://raw.githubusercontent.com/' + REPO + '/';
  var POINTER_URL = 'https://raw.githubusercontent.com/' + REPO + '/main/data/hc-ko-app-rev.json';
  var FALLBACK_REF = 'main';
  var DEFAULT_FILES = ['js/hc-ko-app-loader.js', 'js/hc-confirm-adapter.js'];
  var LS_KEY = 'hcKoLoaderPtr';
  var CH_KEY = 'hcKoCh';
  var SHA_RE = /^[0-9a-f]{7,40}$/;
  var DEBUG = /[?&]hcko=debug/.test(location.search);

  var state = { version: VERSION, source: null, ref: null, channel: null, forced: null, files: [], excluded: [], refreshed: false, error: null };
  window.__hcBoot = { version: VERSION, status: function () { return JSON.parse(JSON.stringify(state)); } };

  function log() { if (DEBUG && window.console) console.log.apply(console, ['[hc-boot]'].concat([].slice.call(arguments))); }
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { if (v == null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) {} }

  try { if (lsGet('hcBootOff') === '1') { log('hcBootOff — 중단'); return; } } catch (e) {}

  // 채널 강제 (v1.3) — ?hcch=next|stable 고정(7일), ?hcch= 해제. 다른 값은 해제로 본다.
  var CH_TTL = 7 * 86400000;
  var forcedNow = null;   // 이번 주소에 hcch 가 있으면 그 값('' = 해제)
  try {
    var chm = location.search.match(/[?&]hcch=([a-z]*)(?=&|#|$)/);
    if (chm) {
      forcedNow = chm[1] === 'next' || chm[1] === 'stable' ? chm[1] : '';
      lsSet(CH_KEY, forcedNow ? JSON.stringify({ ch: forcedNow, ts: Date.now() }) : null);
    }
  } catch (e) {}
  function forcedCh() {
    if (forcedNow !== null) return forcedNow || null;
    try {
      var o = JSON.parse(lsGet(CH_KEY) || 'null');
      if (o && (o.ch === 'next' || o.ch === 'stable') && CH_TTL > Date.now() - (+o.ts || 0)) return o.ch;
      if (o) lsSet(CH_KEY, null);   // 만료·형식 오류는 지운다
    } catch (e) { lsSet(CH_KEY, null); }
    return null;
  }

  function locOf() {
    var m = location.pathname.match(/\/location\/([^/]+)/);
    return m ? m[1] : null;
  }

  // 포인터에서 이번 로드에 쓸 값을 고른다. 형식이 깨졌으면 null.
  function pick(ptr) {
    if (!ptr || typeof ptr !== 'object') return null;
    var L = ptr.loader;
    if (!L || typeof L !== 'object') return null;
    var stable = String(L.stable || '');
    var next = String(L.next || '');
    if (!SHA_RE.test(stable)) return null;
    var canary = Array.isArray(L.canary) ? L.canary : [];
    var loc = locOf();
    var forced = forcedCh();
    var useNext = forced === 'next' ? SHA_RE.test(next)
      : forced === 'stable' ? false
      : !!(loc && SHA_RE.test(next) && canary.indexOf(loc) >= 0);
    var files = Array.isArray(L.files) && L.files.length ? L.files.filter(function (f) { return typeof f === 'string' && /^js\/[A-Za-z0-9._-]+\.js$/.test(f); }) : DEFAULT_FILES;
    var excl = Array.isArray(ptr.excludeLocations) ? ptr.excludeLocations.filter(function (x) { return typeof x === 'string' && x; }) : [];
    return { ref: useNext ? next : stable, channel: useNext ? 'next' : 'stable', forced: forced, files: files, excluded: excl };
  }

  function inject(sel, source) {
    state.source = source; state.ref = sel.ref; state.channel = sel.channel; state.forced = sel.forced || null; state.files = sel.files.slice(); state.excluded = sel.excluded.slice();
    // 로더·레거시보다 먼저 전역을 세운다. 포인터에 비어 있으면 전역을 만들지 않아 각 레이어의 내장 폴백이 산다.
    if (sel.excluded.length && !window.HC_I18N_EXCLUDE) window.HC_I18N_EXCLUDE = sel.excluded.slice();
    log('주입', sel.channel, sel.ref.slice(0, 7), sel.files.join(','), '(' + source + ')');
    if (sel.forced && window.console) console.warn('[hc-boot] 채널 강제 ' + sel.forced + ' → ' + sel.channel + ' ' + sel.ref.slice(0, 7) + ' (해제: 주소에 ?hcch= )');
    // 순서 보장: 앞 파일이 로드된 뒤 다음 파일. (로더 → 어댑터)
    (function chain(i, viaRaw) {
      if (i >= sel.files.length) return;
      var s = document.createElement('script');
      s.src = (viaRaw ? RAW + sel.ref + '/' : CDN + sel.ref + '/') + sel.files[i];
      s.async = false;
      s.setAttribute('data-hc-boot', sel.channel + (viaRaw ? '-raw' : ''));
      s.onload = function () { chain(i + 1, false); };
      s.onerror = function () {
        if (!viaRaw) { state.error = 'cdn-fail:' + sel.files[i]; log('CDN 로드 실패 — raw 재시도', s.src); chain(i, true); return; }
        state.error = 'load-fail:' + sel.files[i]; log('로드 실패', s.src); chain(i + 1, false);
      };
      (document.head || document.documentElement).appendChild(s);
    })(0, false);
  }

  function fetchPointer() {
    return fetch(POINTER_URL, { mode: 'cors', cache: 'no-cache' }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    });
  }

  // 백그라운드 갱신 — 결과는 저장만 하고 다음 로드에 반영
  function refresh() {
    fetchPointer().then(function (d) {
      var sel = pick(d);
      if (!sel) throw new Error('bad loader block');
      lsSet(LS_KEY, JSON.stringify({ loader: d.loader, excludeLocations: d.excludeLocations || [], ts: Date.now() }));
      state.refreshed = true;
      if (sel.ref !== state.ref) log('새 로더 감지 — 다음 로드에 반영', sel.ref.slice(0, 7));
    }).catch(function (e) { state.error = 'pointer:' + (e && e.message); log('포인터 갱신 실패', e && e.message); });
  }

  // 0) 엣지 포인터 — Worker 가 요청마다 60초 캐시로 읽어 head 에 넣어 준 스냅샷
  try {
    var ep = window.__hcPtr;
    var es = pick(ep);
    if (es) {
      lsSet(LS_KEY, JSON.stringify({ loader: ep.loader, excludeLocations: ep.excludeLocations || [], ts: Date.now() }));
      inject(es, 'edge'); refresh(); return;
    }
  } catch (e) {}

  // 1) 저장된 포인터
  var cached = null;
  try { cached = JSON.parse(lsGet(LS_KEY) || 'null'); } catch (e) { cached = null; }
  var sel = pick(cached);
  if (sel) { inject(sel, 'cache'); refresh(); return; }

  // 2) 첫 방문 — 포인터를 기다린다
  fetchPointer().then(function (d) {
    var s2 = pick(d);
    if (!s2) throw new Error('bad loader block');
    lsSet(LS_KEY, JSON.stringify({ loader: d.loader, excludeLocations: d.excludeLocations || [], ts: Date.now() }));
    inject(s2, 'pointer');
  }).catch(function (e) {
    // 3) 안전망 — @main (jsDelivr 가 최대 12시간 캐시하지만 아예 안 뜨는 것보단 낫다)
    state.error = 'pointer:' + (e && e.message);
    log('포인터 실패 — @main 폴백', e && e.message);
    inject({ ref: FALLBACK_REF, channel: 'fallback', files: DEFAULT_FILES, excluded: [] }, 'fallback');
  });
})();
