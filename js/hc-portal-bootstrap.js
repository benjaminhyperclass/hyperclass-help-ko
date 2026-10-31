/* Hyperclass 한글팩 — 포털 부트스트랩 v1.0.0 (2026-10-31, 작업지시서 v1 B3)
 * 클라이언트 포털(ClientClub · Nuxt 3) 전용. 포털 레벨 Custom JS 칸(Client Portal → Settings → Branding → Advanced)에는
 * 이 파일을 jsDelivr 고정 SHA 로 붙이는 몇 줄(js/portal-slot.js)만 넣는다. 이 파일은 그 뒤로 슬롯을 다시 만지지 않게 한다.
 *
 * 역할: data/hc-portal-rev.json(포털 포인터)을 읽어
 *   · loader.stable / loader.next 중 이번 로드에 쓸 커밋을 고르고 → loader.files(포털 로더·채팅 위젯 KO)를 그 SHA 로 주입
 *   · rev(포털 사전 커밋)·off·telemetry 를 window.__hcPortalPtr 로 로더에 넘긴다
 * 채널: loader.canaryHosts 에 든 호스트는 next, 나머지는 stable. 주소에 ?hcch=next|stable 을 붙이면 이 브라우저를 7일 고정,
 *       ?hcch= 로 해제(메인 앱 부트스트랩 v1.3 과 같은 규칙 — 오리진이 달라 저장소는 따로다).
 * 제외: 포인터 excludeHosts 에 든 호스트는 아무것도 하지 않는다(고객 포털 옵트아웃).
 * 부팅 순서(stale-while-revalidate): localStorage 포인터 → 없으면 raw 포인터 대기 → 실패 시 베일만 걷고 종료.
 *       어느 경우든 포인터를 백그라운드로 다시 받아 저장 → 다음 로드에 반영.
 * 베일: 포털 Custom CSS 칸의 #__nuxt 베일(css/portal-custom.css)은 html[data-hc-ko] 가 서면 즉시 걷힌다.
 *       로더가 성공하면 '1', 이 파일이 포기하면 'off'·'excluded'·'fail' 을 세운다. CSS 자체도 2.5초 뒤 스스로 걷힌다.
 *
 * 금지: 이 파일에 꺾쇠(less-than) 문자를 쓰지 않는다 — 포털 customJs 새니타이저가 그 문자부터 다음 '>' 까지 지운다
 *       (DECISIONS 2026-08-22, CI 무손실 검사). 비교는 좌우를 뒤집어 쓴다. 스크립트 삽입은 createElement 만.
 * 킬: ?hcko=off / localStorage.hcKoOff='1'. 디버그: ?hcko=debug → 콘솔, __hcPortalBoot.status()
 */
(function () {
  'use strict';
  if (window.__hcPortalBoot) return;

  var VERSION = '1.0.0';
  var REPO = 'benjaminhyperclass/hyperclass-help-ko';
  var CDN = 'https://cdn.jsdelivr.net/gh/' + REPO + '@';
  var RAW = 'https://raw.githubusercontent.com/' + REPO + '/';
  var POINTER_URL = RAW + 'main/data/hc-portal-rev.json';
  var DEFAULT_FILES = ['js/hc-portal-loader.js', 'js/community-chat-widget-ko.js'];
  var LS_KEY = 'hcPortalPtr', CH_KEY = 'hcKoCh', CH_TTL = 7 * 86400000;
  var SHA_RE = /^[0-9a-f]{7,40}$/;
  var DEBUG = /[?&]hcko=debug/.test(location.search);

  var state = { version: VERSION, source: null, ref: null, channel: null, forced: null, files: [], host: location.hostname, refreshed: false, gave: null, error: null };
  window.__hcPortalBoot = { version: VERSION, status: function () { return JSON.parse(JSON.stringify(state)); } };

  function log() { if (DEBUG && window.console) console.log.apply(console, ['[hc-pboot]'].concat([].slice.call(arguments))); }
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { if (v == null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) {} }
  function release(why) { state.gave = why; try { if (!document.documentElement.hasAttribute('data-hc-ko')) document.documentElement.setAttribute('data-hc-ko', why); } catch (e) {} }

  try {
    if (/[?&]hcko=off/.test(location.search) || lsGet('hcKoOff') === '1') { release('off'); log('킬 스위치'); return; }
  } catch (e) {}

  // 채널 강제 — 주소 값은 저장 실패와 무관하게 이번 로드에 쓴다
  var forcedNow = null;
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
      if (o) lsSet(CH_KEY, null);
    } catch (e) { lsSet(CH_KEY, null); }
    return null;
  }

  // 포인터에서 이번 로드에 쓸 값을 고른다. 형식이 깨졌으면 null.
  function pick(ptr) {
    if (!ptr || typeof ptr !== 'object' || !SHA_RE.test(String(ptr.rev || ''))) return null;
    var L = ptr.loader;
    if (!L || typeof L !== 'object' || !SHA_RE.test(String(L.stable || ''))) return null;
    var host = location.hostname;
    var excl = Array.isArray(ptr.excludeHosts) && ptr.excludeHosts.indexOf(host) >= 0;
    var next = String(L.next || '');
    var forced = forcedCh();
    var canary = Array.isArray(L.canaryHosts) && L.canaryHosts.indexOf(host) >= 0;
    var useNext = forced === 'next' ? SHA_RE.test(next) : forced === 'stable' ? false : !!(canary && SHA_RE.test(next));
    var files = Array.isArray(L.files) && L.files.length ? L.files.filter(function (f) { return typeof f === 'string' && /^js\/[A-Za-z0-9._-]+\.js$/.test(f); }) : DEFAULT_FILES;
    return {
      ref: useNext ? next : String(L.stable), channel: useNext ? 'next' : 'stable', forced: forced, files: files,
      off: ptr.off === true, excluded: excl,
      ptr: { rev: String(ptr.rev), version: ptr.version || null, telemetry: ptr.telemetry || null }
    };
  }

  function inject(sel, source) {
    state.source = source; state.ref = sel.ref; state.channel = sel.channel; state.forced = sel.forced || null; state.files = sel.files.slice();
    if (sel.off) { release('off'); log('원격 킬스위치(off)'); return; }
    if (sel.excluded) { release('excluded'); log('제외 호스트', location.hostname); return; }
    window.__hcPortalPtr = sel.ptr;
    log('주입', sel.channel, sel.ref.slice(0, 7), sel.files.join(','), '(' + source + ')');
    if (sel.forced && window.console) console.warn('[hc-pboot] 채널 강제 ' + sel.forced + ' → ' + sel.channel + ' ' + sel.ref.slice(0, 7) + ' (해제: 주소에 ?hcch= )');
    (function chain(i, viaRaw) {
      if (i >= sel.files.length) return;
      var s = document.createElement('script');
      s.src = (viaRaw ? RAW + sel.ref + '/' : CDN + sel.ref + '/') + sel.files[i];
      s.async = false;
      s.setAttribute('data-hc-pboot', sel.channel + (viaRaw ? '-raw' : ''));
      s.onload = function () { chain(i + 1, false); };
      s.onerror = function () {
        if (!viaRaw) { state.error = 'cdn-fail:' + sel.files[i]; log('CDN 실패 — raw 재시도', s.src); chain(i, true); return; }
        state.error = 'load-fail:' + sel.files[i]; log('로드 실패', s.src);
        if (i === 0) release('fail');   // 로더를 못 받으면 베일을 걷고 끝 — 위젯은 그래도 시도
        chain(i + 1, false);
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
  function save(d) { lsSet(LS_KEY, JSON.stringify({ d: d, ts: Date.now() })); }
  function refresh() {
    fetchPointer().then(function (d) {
      if (!pick(d)) throw new Error('bad pointer');
      save(d); state.refreshed = true;
    }).catch(function (e) { state.error = 'pointer:' + (e && e.message); log('포인터 갱신 실패', e && e.message); });
  }

  // 1) 저장된 포인터 — 왕복 0
  var cached = null;
  try { cached = JSON.parse(lsGet(LS_KEY) || 'null'); } catch (e) { cached = null; }
  var sel = cached && pick(cached.d);
  if (sel) { inject(sel, 'cache'); refresh(); return; }

  // 2) 첫 방문 — 포인터를 기다린다. 실패하면 베일만 걷는다(영어로 정상 동작).
  fetchPointer().then(function (d) {
    var s2 = pick(d);
    if (!s2) throw new Error('bad pointer');
    save(d); inject(s2, 'pointer');
  }).catch(function (e) {
    state.error = 'pointer:' + (e && e.message);
    log('포인터 실패 — 영어로 둔다', e && e.message);
    release('fail');
  });
})();
