/* Hyperclass 한글팩 — 결제 페이지 로더 v1.0.1 (2026-10-31, 작업지시서 v1 8절 E2 · 포털 로더 v4.0.1 승계)
 * v1.0.1 (적대적 리뷰 반영): 약관 문장 재조립을 '이미 한국어 접두로 시작'일 때만 건너뛴다(업체명·금액에 한글이 있어도 동작) ·
 *        Vue 가 가진 요소의 textContent 대신 **단일 텍스트 노드의 data** 만 바꾼다(주석 앵커·프래그먼트 보존), 앞뒤 공백 보존 ·
 *        탭 제목은 아는 영문 구절만 바꾸고 나머지(업체명·번호)는 남긴다 · REV_BUILTIN 최신 사전 · 옛 캐시 버킷 정리
 * 대상: links.hyperclass.ai 의 GHL 결제 앱(Nuxt + vue-i18n, 로케일 en_US) — 결제 링크·인보이스·견적·기프트카드 화면(라우터 실측).
 * GHL 이 이 페이지에 Custom Code 칸을 주지 않으므로 엣지 Worker(workers/hc-ko-edge)만 이 파일을 넣는다(고정 SHA).
 *
 * 하는 일 (이것만 한다)
 *  1. 앱의 vue-i18n 인스턴스를 찾아 결제 사전(data/hc-ko-payments.json, 포인터 rev 커밋 고정)을 'en_US'·현재 로케일에 병합.
 *     앱 메시지는 사전 컴파일(AST)이지만 평문 mergeLocaleMessage 가 동작한다(작업지시서 10-31 실측).
 *  2. html lang=ko, document.title 한국어("FastPayDirect Payment Link" → "결제 링크" 등 — GHL 결제 브랜드 제거).
 *  3. 엣지 베일(#hc-pay-veil)을 병합 직후 또는 포기 즉시 걷는다.
 *  4. 약관 안내문(.terms-note) 한 문단: 앱이 구독 동의·체험 종료 문장을 마운트 때 한 번 조립해 일반 ref 에 넣어 두므로
 *     (번들: `${t(prefix)} ${업체명} ${t(suffix)}`) 병합보다 먼저 조립되면 영어로 굳는다. 병합 전에 받아 둔 영문 원문과
 *     정확히 같은 모양일 때만 같은 조립 방식으로 한국어로 다시 쓴다(업체명·금액은 원문에서 그대로 가져온다).
 * 하지 않는 일: 그 밖의 화면 텍스트 치환(_text 없음), 폼 입력·결제 버튼·네트워크 요청에 손대지 않는다. 텔레메트리 없음.
 *
 * 포인터(엣지가 window.__hcPayPtr 로 넣는다 = data/hc-pay-rev.json): { rev, off, excludePaths[] }
 *   excludePaths: 한국어를 끄는 결제 링크·인보이스 ID(경로 조각) — 제외 계정(1r0p…)을 페이지 데이터로는 가려낼 수 없어서(10-31 실측:
 *   로케이션 ID 는 결제 미리보기 API 응답에만 있고 HTML·__NUXT__·pinia 에 없다) 필요하면 ID 로 뺀다.
 * 콘솔: __hcPay.status() · 긴급 중단 ?hcko=off / localStorage.hcKoOff='1' · 디버그 ?hcko=debug
 */
(function () {
  'use strict';
  if (window.__hcPay) return;

  var VERSION = '1.0.1';
  var REPO = 'benjaminhyperclass/hyperclass-help-ko';
  var CDN = 'https://cdn.jsdelivr.net/gh/' + REPO + '@';
  var RAW = 'https://raw.githubusercontent.com/' + REPO + '/';
  var REV_BUILTIN = '5533c0a7aa8c1d2b6b3239a1d463ce1987d7a414';   // main 의 결제 사전 v1.0.2 (CI 가 조상 여부를 본다)
  var DICT_PATH = 'data/hc-ko-payments.json';
  var SHA_RE = /^[0-9a-f]{7,40}$/;
  var WAIT_APP_MS = 10000;
  var PROBE = ['common', 'pay'];   // 'Pay' → '결제'
  var DEBUG = /[?&]hcko=debug/.test(location.search);
  // 탭 제목: 아는 영문 구절만 바꾼다(업체명·번호 등 나머지는 그대로). GHL 결제 브랜드는 지운다.
  var TITLES = [
    [/\s*FastPayDirect\s*/gi, ' '], [/gift\s*card/gi, '기프트 카드'], [/payment\s*link/gi, '결제 링크'], [/invoice/gi, '인보이스'],
    [/estimate/gi, '견적서'], [/payment\s*method/gi, '결제 수단'], [/checkout/gi, '결제']
  ];

  function log() { if (DEBUG && window.console) console.log.apply(console, ['[hc-pay]'].concat([].slice.call(arguments))); }
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  var P = window.__hcPayPtr || null;
  var REV = P && SHA_RE.test(String(P.rev || '')) ? String(P.rev) : REV_BUILTIN;
  var revSource = P && REV === String(P.rev) ? 'pointer' : 'builtin';
  var dict = null, i18n = null, applied = false, probeExpect = null, err = null, gave = null, merges = 0, remerge = 0, termsFixed = 0;
  var EN = null;   // 병합 전 영문 원문(약관 문장 재조립용)
  var TERMS_KEYS = ['subscriptionTextPrefix', 'subscriptionTextSuffix', 'afterTrialText', 'afterTrialCancellationText'];

  function liftVeil(why) {
    try {
      var v = document.getElementById('hc-pay-veil'); if (v) v.remove();
      var c = document.getElementById('hc-pay-veil-css'); if (c) c.remove();
      if (window.__hcPayEdge && !window.__hcPayEdge.lifted) { window.__hcPayEdge.lifted = Date.now() - window.__hcPayEdge.t0; window.__hcPayEdge.why = why; }
    } catch (e) {}
  }

  window.__hcPay = {
    version: VERSION,
    status: function () {
      var g = i18n && i18n.global;
      return { version: VERSION, rev: REV, revSource: revSource, applied: applied, gave: gave, error: err, merges: merges, remerge: remerge, termsFixed: termsFixed,
        locale: g ? currentLocale(g) : null, dictVersion: dict && dict._meta ? dict._meta.version : null, title: document.title,
        veil: window.__hcPayEdge || null };
    },
    off: function () { try { localStorage.setItem('hcKoOff', '1'); } catch (e) {} return '새로고침하면 영어로 돌아갑니다.'; },
    on: function () { try { localStorage.removeItem('hcKoOff'); } catch (e) {} return '새로고침하면 한국어로 돌아옵니다.'; }
  };

  function giveUp(why) { gave = why; liftVeil(why); log('중단', why); }
  try {
    if (/[?&]hcko=off/.test(location.search) || lsGet('hcKoOff') === '1') { giveUp('off'); return; }
    if (P && P.off === true) { giveUp('remote-off'); return; }
    var ex = P && Array.isArray(P.excludePaths) ? P.excludePaths : [];
    for (var i = 0; ex.length > i; i++) { if (typeof ex[i] === 'string' && ex[i] && location.pathname.indexOf(ex[i]) >= 0) { giveUp('excluded'); return; } }
  } catch (e) {}

  function findI18n() {
    var root = document.getElementById('__nuxt') || document.querySelector('[data-v-app]');
    var app = root && root.__vue_app__;
    if (!app) return null;
    try {
      var prov = app._context && app._context.provides;
      if (prov) {
        var syms = Object.getOwnPropertySymbols(prov);
        for (var j = 0; syms.length > j; j++) {
          var v = prov[syms[j]];
          if (v && v.global && typeof v.global.mergeLocaleMessage === 'function') return v;
        }
      }
    } catch (e) { log('findI18n', e); }
    return null;
  }
  function currentLocale(g) { var l = g.locale; return (l && typeof l === 'object' && 'value' in l) ? l.value : l; }

  function koTitle() {
    try {
      var t = document.title || '', n2 = t;
      for (var k = 0; TITLES.length > k; k++) n2 = n2.replace(TITLES[k][0], TITLES[k][1]);
      n2 = n2.replace(/\s+/g, ' ').trim();
      if (n2 && n2 !== t) document.title = n2;
    } catch (e) {}
  }
  function ko(k) { var pl = dict && dict.messages && dict.messages.paymentLink; return pl && typeof pl[k] === 'string' ? pl[k] : null; }
  function fixTerms() {
    if (!EN) return;
    try {
      var ps = document.querySelectorAll('.terms-note p');
      for (var n = 0; ps.length > n; n++) {
        // Vue 가 가진 요소다 — 요소 내용을 갈지 않고, 텍스트 노드가 정확히 하나일 때 그 노드의 data 만 바꾼다
        var el = ps[n]; if (el.childNodes.length !== 1 || el.firstChild.nodeType !== 3) continue;
        var node = el.firstChild, raw = node.data, t = raw.trim(); if (!t) continue;
        if ((ko('subscriptionTextPrefix') && t.indexOf(ko('subscriptionTextPrefix')) === 0) || (ko('afterTrialText') && t.indexOf(ko('afterTrialText')) === 0)) continue;   // 이미 한국어
        var out = null, a, b;
        a = EN.subscriptionTextPrefix + ' '; b = ' ' + EN.subscriptionTextSuffix;
        if (EN.subscriptionTextPrefix && t.indexOf(a) === 0 && t.length - b.length === t.lastIndexOf(b) && ko('subscriptionTextPrefix') && ko('subscriptionTextSuffix'))
          out = ko('subscriptionTextPrefix') + ' ' + t.slice(a.length, t.length - b.length) + ' ' + ko('subscriptionTextSuffix');
        a = EN.afterTrialText + ' '; b = '. ' + EN.afterTrialCancellationText;
        if (!out && EN.afterTrialText && t.indexOf(a) === 0 && t.length - b.length === t.lastIndexOf(b) && ko('afterTrialText') && ko('afterTrialCancellationText'))
          out = ko('afterTrialText') + ' ' + t.slice(a.length, t.length - b.length) + '. ' + ko('afterTrialCancellationText');
        if (out) { node.data = raw.replace(t, out); termsFixed++; log('약관 문장 재조립'); }
      }
    } catch (e) {}
  }
  function apply() {
    if (!dict || !dict.messages || !i18n) return false;
    var g = i18n.global, loc = currentLocale(g) || 'en_US';
    try {
      if (!EN) { EN = {}; for (var q = 0; TERMS_KEYS.length > q; q++) { try { EN[TERMS_KEYS[q]] = g.t('paymentLink.' + TERMS_KEYS[q]); } catch (e) {} } }
      g.mergeLocaleMessage('en_US', dict.messages);
      if (loc !== 'en_US') g.mergeLocaleMessage(loc, dict.messages);
      try { probeExpect = g.t(PROBE.join('.')); } catch (e) { probeExpect = null; }
      applied = true; merges++;
      document.documentElement.setAttribute('lang', 'ko');
      koTitle(); fixTerms(); liftVeil('applied');
      log('merged', loc, probeExpect);
      return true;
    } catch (e) { err = 'merge:' + (e && e.message); giveUp('merge-fail'); return false; }
  }
  function watch() {
    setInterval(function () {
      if (!dict) return;
      var cur = findI18n();
      if (cur && (!i18n || cur.global !== i18n.global)) { i18n = cur; remerge++; apply(); return; }
      if (!i18n) return;
      if (applied && document.documentElement.getAttribute('lang') !== 'ko') document.documentElement.setAttribute('lang', 'ko');
      koTitle(); fixTerms();
      try { var now = i18n.global.t(PROBE.join('.')); if (probeExpect && now !== probeExpect) { remerge++; apply(); } } catch (e) {}
    }, 1500);
  }

  var BUCKET = 'hc-pay-' + REV.slice(0, 7);
  function fetchJson(url) {
    return fetch(url, { mode: 'cors', cache: 'default' }).then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.text(); })
      .then(function (txt) { return { txt: txt, d: JSON.parse(txt) }; });
  }
  function fetchAt(rev) { return fetchJson(CDN + rev + '/' + DICT_PATH).catch(function () { return fetchJson(RAW + rev + '/' + DICT_PATH); }); }
  function fetchDict() {
    return fetchAt(REV).catch(function (e) {
      if (REV === REV_BUILTIN) throw e;
      REV = REV_BUILTIN; revSource = 'builtin-fallback'; BUCKET = 'hc-pay-' + REV.slice(0, 7);
      return fetchAt(REV);
    });
  }
  function purgeOld() {
    caches.keys().then(function (ks) { ks.forEach(function (k) { if (k.indexOf('hc-pay-') === 0 && k !== BUCKET) caches.delete(k); }); }).catch(function () {});
  }
  function loadDict() {
    var KEY = CDN + REV + '/' + DICT_PATH;
    if (!('caches' in window)) return fetchDict().then(function (r) { return r.d; });
    return caches.open(BUCKET).then(function (cache) {
      return cache.match(KEY).then(function (hit) {
        if (hit) return hit.text().then(function (t) { return JSON.parse(t); }).catch(function () { cache.delete(KEY); return fetchDict().then(function (r) { return r.d; }); });
        return fetchDict().then(function (r) {
          if (revSource !== 'builtin-fallback') cache.put(KEY, new Response(r.txt, { headers: { 'Content-Type': 'application/json' } })).then(purgeOld).catch(function () {});
          return r.d;
        });
      });
    }).catch(function () { return fetchDict().then(function (r) { return r.d; }); });
  }
  function waitApp() {
    return new Promise(function (resolve) {
      var t0 = Date.now();
      (function tick() {
        var inst = findI18n();
        if (inst) return resolve(inst);
        if (Date.now() - t0 > WAIT_APP_MS) return resolve(null);
        setTimeout(tick, 50);
      })();
    });
  }

  Promise.all([loadDict(), waitApp()]).then(function (r) {
    dict = r[0]; i18n = r[1];
    if (!i18n) { err = 'no-i18n'; giveUp('no-i18n'); return; }
    apply(); watch();
  }).catch(function (e) { err = 'boot:' + (e && e.message); giveUp('boot-fail'); });
})();
