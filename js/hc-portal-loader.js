/* Hyperclass 한글팩 — 클라이언트 포털 로더 v4.1.2 (2026-10-31, 작업지시서 v1 B3·B4·B5)
 * v4.1.2: 사전 `_css`(문자열, 최대 8KB)를 페이지 스타일로 넣는다 — TipTap 편집기 자리표시자처럼 DOM 이 아니라 CSS(::before attr)로
 *        그려지고 편집기가 속성을 계속 다시 쓰는 문구용. 포털 CSS 칸을 다시 붙여넣지 않고 포인터로 갱신된다.
 * v4.1.1 (적대적 리뷰 반영): 규칙에 route(경로 정규식) 추가·범위는 사전에서 정확히(공개 페이지 실측) · 텍스트 일치를 먼저 보고
 *        범위·편집기 검사는 맞을 때만(성능) · remote 병합 상태를 앱(composer)별로, 감시 키를 네임스페이스마다 · status() 를 꺼진
 *        상태에서도 · v3 무력화를 i18n·킬 스위치와 무관하게 돌리고 v3 의 카탈로그 재병합(messages)도 비움 · '$' 치환 안전 ·
 *        hasOwnProperty · 제목 정확 일치는 첫 구절만 · title 요소 교체 감지 · 형식기 ampm·metaDate 추가
 * v4.1.0: ① 같은 페이지의 **다른 Vue 앱**(예: 코스·강의 화면의 #remote-membership-preview-mount — 별도 i18n, 1,137키)도 찾아
 *        사전 `remotes.[이름]` 을 병합한다. [data-v-app] 전부를 스캔(나중에 마운트되는 앱 포함: DOM 추가 감지 + 2초 감시),
 *        마운트 id 로 고르고 없으면 네임스페이스 지문(겹침 60% 이상)으로 고른다. 앱이 카탈로그를 다시 세팅하면 다시 병합.
 *        ② `_rules`: 범위(CSS 선택자) 안에서만 도는 정확 일치·전체 일치 패턴·날짜 형식기·속성 치환 — 상대 시각(5mo·1w),
 *        이벤트 달력(FullCalendar 요일 머리글·월/연 제목·toDateString 날짜), Plyr 플레이어 툴팁·스크린리더 문구·aria-label.
 *        텍스트 노드 **전체**가 맞을 때만, 편집기 안은 제외. ③ `_titles`: 탭 제목을 구분자(| - ·)로 나눠 아는 구절만 바꾼다.
 *        ④ B5: 그룹 칸에 남은 v3.0.1 을 멈춘다 — v3 의 중복 실행 방지 변수(window.__hcKoLoader)를 먼저 세우고,
 *        이미 돈 v3 는 범위 없는 _text 목록을 비워 무력화(카탈로그 병합은 같은 사전이라 무해).
 *        새 키(remotes·_rules·_titles)는 v3 가 읽지 않는다.
 * v4.0.1 (적대적 리뷰 반영): REV_BUILTIN 을 main 에 있는 커밋으로(브랜치 전용 커밋은 GC 위험) · 포인터 rev 사전이 404 면
 *        REV_BUILTIN 으로 재시도 · 깨진 캐시 항목 삭제 · _text 를 UI 크롬(nav·aside·header·메뉴·탭·버튼·label·th) 안으로 한정
 *        (게시글·코스·멤버 이름이 'Home'·'New' 같은 문구와 같아도 안 바뀌게) · i18n 인스턴스가 다시 만들어지면 다시 찾아 병합
 *        회원의 언어 선택은 v3 와 같이 덮어쓴다(포털 en 외 로케이션은 비어 있고 목적이 한국어 — 2026-10-31 수용 결정)
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
  // B5: 그룹 칸의 옛 v3.0.1 은 첫 줄에서 이 변수를 보고 멈춘다(그쪽이 나중에 실행될 때). 킬 스위치로 아래에서 빠져도 v3 는 막힌 채가 맞다.
  if (!window.__hcKoLoader) window.__hcKoLoader = 'portal-4.1.2';

  var VERSION = '4.1.2';
  var REPO = 'benjaminhyperclass/hyperclass-help-ko';
  var CDN = 'https://cdn.jsdelivr.net/gh/' + REPO + '@';
  var RAW = 'https://raw.githubusercontent.com/' + REPO + '/';
  // 포인터를 못 받았거나 포인터 rev 의 사전을 못 받을 때의 안전망 — **main 에 있는** 검증된 사전 커밋만 넣는다(CI 가 조상 여부를 본다).
  // 현재 4e21458 = 사전 v4.0.1(PR #10 머지). remotes·_rules 가 든 사전이 main 에 들어가면 다음 로더에서 올린다.
  var REV_BUILTIN = '4e2145881ae2bf1d1771ca22abf129179312622d';
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
  var stats = { merges: 0, remerge: 0, textHits: 0, ruleHits: 0, titleHits: 0, fallback: 0, v3Neutralized: false };
  var remoteStats = {};
  var RULES = [], TT = null;   // 킬 스위치로 아래에서 빠져도 status() 가 읽을 수 있게 먼저 초기화
  function hasOwn(o, k) { return !!o && Object.prototype.hasOwnProperty.call(o, k); }
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
        merges: stats.merges, remerge: stats.remerge, textHits: stats.textHits, ruleHits: stats.ruleHits, titleHits: stats.titleHits, fallback: stats.fallback,
        rules: RULES.length, v3Neutralized: stats.v3Neutralized, v3Present: !!window.__hcKo,
        remotes: (function () { var o = {}; for (var k in remoteStats) o[k] = { merges: remoteStats[k].merges, mountId: remoteStats[k].mountId }; return o; })(),
        veil: document.documentElement.getAttribute('data-hc-ko'), telemetry: JSON.parse(JSON.stringify(telemetry))
      };
    },
    off: function () { try { localStorage.setItem('hcKoOff', '1'); } catch (e) {} return '새로고침하면 영어로 돌아갑니다.'; },
    on: function () { try { localStorage.removeItem('hcKoOff'); } catch (e) {} return '새로고침하면 한국어로 돌아옵니다.'; },
    reapply: function () { return applyI18n(); }
  };

  // B5: v3 무력화는 i18n·킬 스위치와 무관하게 — 처음 30초는 1초마다, 그 뒤 5초마다
  (function () { var n = 0; var iv = setInterval(function () { neutralizeV3(); if (++n === 30) { clearInterval(iv); setInterval(neutralizeV3, 5000); } }, 1000); })();
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
    return composerOfApp(root && root.__vue_app__);
  }
  function composerOfApp(app) {
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
  function safeT(g, k) { try { return g.t(k); } catch (e) { return null; } }
  function firstLeaf(o, pre) { for (var k in o) { var v = o[k], p = pre ? pre + '.' + k : k; if (typeof v === 'string') return p; if (v && typeof v === 'object') { var r = firstLeaf(v, p); if (r) return r; } } return null; }
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
      if (!dict) return;
      // 앱이 i18n 인스턴스를 다시 만들면(재마운트) 새 인스턴스를 찾아 병합한다
      var cur = findI18n();
      if (cur && (!i18n || cur.global !== i18n.global)) { i18n = cur; stats.remerge++; log('i18n 인스턴스 교체 → 병합'); applyI18n(); return; }
      if (!i18n) return;
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
  // _text 는 카탈로그 밖 하드코딩 UI 문구(사이드바·메뉴 등)용이다. 본문(게시글·댓글·코스·멤버 이름)이 같은 글자여도
  // 바뀌지 않도록 UI 크롬 요소 안에서만 적용한다.
  var CHROME = { NAV: 1, ASIDE: 1, HEADER: 1, BUTTON: 1, LABEL: 1, TH: 1 };
  var CHROME_ROLES = { navigation: 1, menu: 1, menuitem: 1, menubar: 1, tab: 1, tablist: 1, button: 1, banner: 1 };
  function inChrome(node) {
    for (var el = node.nodeType === 1 ? node : node.parentNode, d = 0; el && 10 > d; el = el.parentNode, d++) {
      if (el.nodeType !== 1) continue;
      if (CHROME[el.tagName] || CHROME_ROLES[el.getAttribute && el.getAttribute('role')]) return true;
    }
    return false;
  }
  /* ---------- 3-2) _rules — 범위 안에서만 도는 정확 일치·패턴·날짜 형식기·속성 ---------- */
  // 규칙 { route: '경로 정규식'|null, scope: 'CSS 선택자'|null, text: {EN: KO}, patterns: [['^…$', '치환']], formats: [...], attrs: ['aria-label'|'title'] }
  // 패턴은 '^' 로 시작하고 '$' 로 끝나는 것만 받는다(텍스트 노드 전체 일치). 일치를 먼저 보고 범위(closest)는 맞을 때만 본다.
  var WD = { Sun: '일', Mon: '월', Tue: '화', Wed: '수', Thu: '목', Fri: '금', Sat: '토' };
  var WDL = { Sunday: '일요일', Monday: '월요일', Tuesday: '화요일', Wednesday: '수요일', Thursday: '목요일', Friday: '금요일', Saturday: '토요일' };
  var WDS = { Sunday: '일', Monday: '월', Tuesday: '화', Wednesday: '수', Thursday: '목', Friday: '금', Saturday: '토' };
  var MON = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12 };
  var MONL = { January: 1, February: 2, March: 3, April: 4, May: 5, June: 6, July: 7, August: 8, September: 9, October: 10, November: 11, December: 12 };
  var FORMATS = {
    // 'October 2026' → '2026년 10월'
    monthYear: function (t) { var m = t.match(/^([A-Z][a-z]+) (\d{4})$/); return m && hasOwn(MONL, m[1]) ? m[2] + '년 ' + MONL[m[1]] + '월' : null; },
    // Date.toDateString(): 'Tue Nov 03 2026' → '2026년 11월 3일 (화)'
    dateString: function (t) { var m = t.match(/^(Sun|Mon|Tue|Wed|Thu|Fri|Sat) ([A-Z][a-z]{2}) (\d{2}) (\d{4})$/); return m && hasOwn(MON, m[2]) ? m[4] + '년 ' + MON[m[2]] + '월 ' + (+m[3]) + '일 (' + WD[m[1]] + ')' : null; },
    // 요일 머리글: 'Sun' → '일', 'Sunday' → '일요일', 'Sun 11/1' → '11/1 (일)'
    weekday: function (t) { if (hasOwn(WD, t)) return WD[t]; if (hasOwn(WDL, t)) return WDL[t]; var m = t.match(/^(Sun|Mon|Tue|Wed|Thu|Fri|Sat) (\d{1,2}\/\d{1,2})$/); return m ? m[2] + ' (' + WD[m[1]] + ')' : null; },
    // '8:00pm' · '8pm' · '10:30 AM' → '오후 8:00' · '오후 8시' · '오전 10:30'
    ampm: function (t) { var m = t.match(/^(\d{1,2})(?::(\d{2}))? ?([AaPp])\.?[Mm]\.?$/); if (!m) return null; var ap = /[Pp]/.test(m[3]) ? '오후 ' : '오전 '; return m[2] ? ap + m[1] + ':' + m[2] : ap + m[1] + '시'; },
    // 게시글 시각 툴팁: 'Saturday / 20 Sep 2025 / 03:32' (· ' PM') → '2025년 9월 20일 (토) 03:32'
    metaDate: function (t) { var m = t.match(/^([A-Z][a-z]+day) \/ (\d{1,2}) ([A-Z][a-z]{2}) (\d{4}) \/ (\d{1,2}:\d{2})(?: ?([AP]M))?$/); if (!m || !hasOwn(MON, m[3]) || !hasOwn(WDS, m[1])) return null; return m[4] + '년 ' + MON[m[3]] + '월 ' + (+m[2]) + '일 (' + WDS[m[1]] + ') ' + (m[6] ? (m[6] === 'PM' ? '오후 ' : '오전 ') : '') + m[5]; }
  };
  function compileRules(src) {
    var out = [];
    (Array.isArray(src) ? src : []).forEach(function (r) {
      if (!r || typeof r !== 'object') return;
      var pats = [], route = null;
      (Array.isArray(r.patterns) ? r.patterns : []).forEach(function (p) {
        if (!Array.isArray(p) || typeof p[0] !== 'string' || typeof p[1] !== 'string') return;
        if (p[0].charAt(0) !== '^' || p[0].charAt(p[0].length - 1) !== '$') return;
        try { pats.push({ re: new RegExp(p[0]), ko: p[1] }); } catch (e) {}
      });
      if (typeof r.route === 'string' && r.route) { try { route = new RegExp(r.route); } catch (e) { return; } }
      out.push({ route: route, scope: typeof r.scope === 'string' && r.scope ? r.scope : null, text: r.text && typeof r.text === 'object' ? r.text : null, pats: pats,
        fmts: (Array.isArray(r.formats) ? r.formats : []).filter(function (f) { return hasOwn(FORMATS, f); }), attrs: Array.isArray(r.attrs) ? r.attrs : [] });
    });
    return out;
  }
  function inScope(el, scope) { try { return !scope || !!(el && el.closest && el.closest(scope)); } catch (e) { return false; } }
  function candidate(r, t) {
    if (r.text && hasOwn(r.text, t)) return r.text[t];
    for (var j = 0; r.pats.length > j; j++) if (r.pats[j].re.test(t)) return t.replace(r.pats[j].re, r.pats[j].ko);
    for (var f = 0; r.fmts.length > f; f++) { var v = FORMATS[r.fmts[f]](t); if (v) return v; }
    return null;
  }
  function ruleValue(t, el, attr) {
    var path = location.pathname;
    for (var i = 0; RULES.length > i; i++) {
      var r = RULES[i];
      if (attr ? r.attrs.indexOf(attr) === -1 : false) continue;
      if (r.route && !r.route.test(path)) continue;
      var v = candidate(r, t);                       // 싼 검사 먼저
      if (v !== null && inScope(el, r.scope)) return v;   // closest 는 맞을 때만
    }
    return null;
  }
  function put(s, t, v) { return s.replace(t, function () { return v; }); }   // '$' 가 든 값도 그대로

  /* ---------- 3-3) _titles — 탭 제목 구절 ---------- */
  function koTitle() {
    try {
      var t = document.title; if (!t || !TT) return;
      var parts = t.split(/(\s[|\-–·]\s)/), changed = false;
      for (var i = 0; parts.length > i; i += 2) {
        var seg = parts[i].trim(); if (!seg || !/[A-Za-z]/.test(seg)) continue;
        // 정확 일치는 첫 구절(화면 이름)만 — 뒤 구절은 포털·커뮤니티 이름일 수 있다
        var v = i === 0 && TT.exact && hasOwn(TT.exact, seg) ? TT.exact[seg] : undefined;
        if (v === undefined && TT.pats) for (var j = 0; TT.pats.length > j; j++) if (TT.pats[j].re.test(seg)) { v = seg.replace(TT.pats[j].re, TT.pats[j].ko); break; }
        if (v !== undefined && v !== seg) { parts[i] = put(parts[i], seg, v); changed = true; }
      }
      if (changed) { document.title = parts.join(''); stats.titleHits++; }
    } catch (e) {}
  }

  function trText(node) {
    var s = node.nodeValue; if (!s) return;
    var t = s.trim(); if (!t) return;
    var v = null, rule = false;
    if (T && hasOwn(T, t) && inChrome(node)) v = T[t];
    if (v === null && RULES.length) { v = ruleValue(t, node.parentNode, null); rule = v !== null; }
    if (v === null || inEditor(node)) return;          // 편집기 검사는 맞을 때만
    if (rule) stats.ruleHits++; else stats.textHits++;
    node.nodeValue = put(s, t, v);
  }
  function trAttrs(el) {
    if (!el.getAttribute) return;
    for (var i = 0; ATTRS.length > i; i++) {
      var a = ATTRS[i], s = el.getAttribute(a); if (!s) continue;
      var t = s.trim(), v = T && hasOwn(T, t) && inChrome(el) ? T[t] : null;
      if (v === null && RULES.length) v = ruleValue(t, el, a);
      if (v !== null && v !== t) { el.setAttribute(a, put(s, t, v)); stats.textHits++; }
    }
  }
  function pass(root) {
    if (!(T || RULES.length) || !root) return;
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), n;
    while ((n = w.nextNode())) trText(n);
    if (root.querySelectorAll) {
      var els = root.querySelectorAll('[placeholder],[title],[aria-label],[alt]');
      for (var i = 0; els.length > i; i++) trAttrs(els[i]);
      if (root.nodeType === 1) trAttrs(root);
    }
  }
  var remoteTimer = null;
  function scheduleRemoteScan() { if (remoteTimer) return; remoteTimer = setTimeout(function () { remoteTimer = null; scanRemotes(); }, 150); }
  var mo = new MutationObserver(function (muts) {
    var added = false, title = false;
    for (var i = 0; muts.length > i; i++) {
      var m = muts[i], tg = m.target;
      if (tg && (tg.nodeName === 'TITLE' || (tg.parentNode && tg.parentNode.nodeName === 'TITLE'))) { title = true; continue; }
      if (m.type === 'characterData') trText(m.target);
      else if (m.type === 'attributes') trAttrs(m.target);
      else if (m.addedNodes && m.addedNodes.length) {
        added = true;
        for (var j = 0; m.addedNodes.length > j; j++) {
          var nd = m.addedNodes[j];
          if (nd.nodeType === 1 && nd.nodeName === 'TITLE') { title = true; continue; }
          if (nd.nodeType === 3) trText(nd); else if (nd.nodeType === 1) pass(nd);
        }
      }
    }
    if (title) koTitle();
    if (added && dict && dict.remotes) scheduleRemoteScan();
  });
  function startTextLayer() {
    if (!dict) return;
    T = dict._text || null;
    RULES = compileRules(dict._rules);
    if (dict._titles && typeof dict._titles === 'object') {
      TT = { exact: dict._titles.exact || null, pats: compileRules([{ patterns: dict._titles.patterns }])[0].pats };
    }
    if (typeof dict._css === 'string' && dict._css && 8192 >= dict._css.length) {
      var rc = document.getElementById('hc-portal-css-rules') || document.createElement('style');
      rc.id = 'hc-portal-css-rules'; rc.textContent = dict._css;
      if (!rc.parentNode) (document.head || document.documentElement).appendChild(rc);
    }
    pass(document.body);
    koTitle();
    mo.observe(document.documentElement, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS });
  }

  /* ---------- 3-4) 다른 Vue 앱 (remote) ---------- */
  function remoteDictFor(el, g) {
    var R = dict && dict.remotes; if (!R) return null;
    for (var k in R) if (R[k] && R[k].mountId && el.id === R[k].mountId && R[k].messages) return { key: k, r: R[k] };
    var cat = catalogOf(g), en = cat.en || cat[currentLocale(g)] || {}, names = Object.keys(en), best = null, bestScore = 0;
    for (var k2 in R) {
      var m = R[k2] && R[k2].messages; if (!m) continue;
      var keys = Object.keys(m), hit = 0;
      for (var i = 0; keys.length > i; i++) if (names.indexOf(keys[i]) >= 0) hit++;
      var score = keys.length ? hit / keys.length : 0;
      if (score > bestScore) { bestScore = score; best = { key: k2, r: R[k2] }; }
    }
    return bestScore >= 0.6 ? best : null;
  }
  // composer 별 상태 — 같은 사전을 쓰는 마운트가 여럿이어도 서로의 감시값을 덮지 않는다
  var remoteState = typeof WeakMap !== 'undefined' ? new WeakMap() : null;
  function nsProbes(messages) { var out = []; for (var ns in messages) { var leaf = firstLeaf(messages[ns], ns); if (leaf) out.push(leaf); } return out; }
  function scanRemotes() {
    if (!dict || !dict.remotes || !remoteState) return;
    var els = document.querySelectorAll('[data-v-app]');
    for (var i = 0; els.length > i; i++) {
      var el = els[i]; if (el.id === '__nuxt' || !el.__vue_app__) continue;
      var inst = composerOfApp(el.__vue_app__); if (!inst || (i18n && inst.global === i18n.global)) continue;
      var g = inst.global, st = remoteState.get(g), hit;
      if (st) { hit = st.hit; } else { hit = remoteDictFor(el, g); if (!hit) continue; }
      if (st && st.probes.every(function (pk, j) { return safeT(g, pk) === st.vals[j]; })) continue;   // 그대로면 건너뜀
      try {
        g.mergeLocaleMessage('en', hit.r.messages);
        var loc = currentLocale(g); if (loc && loc !== 'en') g.mergeLocaleMessage(loc, hit.r.messages);
        var probes = st ? st.probes : nsProbes(hit.r.messages);
        remoteState.set(g, { hit: hit, probes: probes, vals: probes.map(function (pk) { return safeT(g, pk); }) });
        var rs = remoteStats[hit.key] || (remoteStats[hit.key] = { merges: 0, mountId: null });
        rs.merges++; rs.mountId = el.id || null;
        log('remote 병합', hit.key, el.id, loc);
      } catch (e) { log('remote 병합 실패', hit.key, e); }
    }
  }

  /* ---------- 3-5) B5 — 이미 돈 v3.0.1 무력화 ---------- */
  function neutralizeV3() {
    try {
      var h = window.__hcKo;
      if (stats.v3Neutralized || !h || !h.dict || (dict && h.dict === dict)) return;
      var t3 = h.dict._text, m3 = h.dict.messages, k;
      if (t3) for (k in t3) delete t3[k];      // v3 텍스트 레이어가 읽는 바로 그 객체(T = dict._text, 1회 캡처)
      if (m3) for (k in m3) delete m3[k];      // v3 의 재병합(감시·재검증 전)이 raw@main 사전으로 우리 고정 rev 를 덮지 않게
      stats.v3Neutralized = true; log('v3.0.1 무력화(_text·messages 비움)');
    } catch (e) {}
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
  function fetchAt(rev) {
    var cdn = CDN + rev + '/' + DICT_PATH, raw = RAW + rev + '/' + DICT_PATH;
    return fetchJson(cdn).catch(function (e) { stats.fallback++; log('CDN 실패 — raw', e && e.message); return fetchJson(raw); });
  }
  function fetchDict() {
    return fetchAt(REV).catch(function (e) {
      if (REV === REV_BUILTIN) throw e;
      log('포인터 rev 사전 실패 — 내장 REV 로', e && e.message);
      REV = REV_BUILTIN; revSource = 'builtin-fallback'; BUCKET = 'hc-portal-' + REV.slice(0, 7);
      return fetchAt(REV);
    });
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
        if (hit) return hit.text().then(function (t) { return JSON.parse(t); }).catch(function () {
          cache.delete(KEY);   // 깨진 항목은 지우고 새로 받는다
          return fetchDict().then(function (r) { return r.d; });
        });
        return fetchDict().then(function (r) {
          // 내장 REV 로 폴백한 사전은 포인터 rev 키로 저장하지 않는다(다음 방문에 옛 사전을 새 rev 로 오인)
          if (revSource !== 'builtin-fallback') cache.put(KEY, new Response(r.txt, { headers: { 'Content-Type': 'application/json' } })).then(purgeOld).catch(function () {});
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
    scanRemotes(); neutralizeV3();
    setInterval(function () { scanRemotes(); koTitle(); }, 2000);   // i18n 이 없어도 돈다
    watchReapply();
    scheduleTelemetry('start');
  }).catch(function (e) { err = 'boot:' + (e && e.message); log('boot failed', e); mark('fail'); });
})();
