/* Hyperclass 한글팩 — 미번역 문구 수집기 v1
 *
 * hc-crawl-v3.js 는 라우터의 i18n **카탈로그(키→영어)** 를 뽑는다.
 * 이 스크립트는 다른 축이다 — **화면에 실제로 렌더된 영어**를 모은다.
 * v4 로더가 돌고 있는 상태에서 쓰면 "v4 를 적용하고도 남은 영어"가 그대로 나온다.
 *
 * 콘솔에 붙여 넣고 둘 중 하나:
 *   __hcGap.watch()    수동 — 평소처럼 돌아다니면 알아서 모은다. 클릭 안 함. 위험 0.
 *   __hcGap.sweep()    자동 — 라우트를 순회하며 스크롤 + 안전한 펼치기만 수행
 *   __hcGap.status()   진행 상황
 *   __hcGap.stop()     중단 (IndexedDB 에 남아 이어서 가능)
 *   __hcGap.download() hc-gap-YYYY-MM-DD.json 저장 → scripts/curate-gap.py 입력
 *   __hcGap.reset()    수집분 폐기
 *
 * ⚠️ 자동 모드도 **값을 바꾸는 버튼은 절대 누르지 않는다.** 탭·아코디언·더보기처럼
 *    화면을 펼치기만 하는 컨트롤로 한정하고, 라우트도 hc-crawl-v3 와 같은 SKIP 규칙으로
 *    삭제·결제·가져오기 계열을 건너뛴다. 그래도 운영 계정보다는 테스트 서브계정을 권한다.
 */
(function () {
  'use strict';
  if (window.__hcGap && window.__hcGap.running) { console.warn('[hc-gap] 이미 실행 중'); return; }
  if (window.top !== window.self) return;   // iframe 안에서는 뜨지 않는다

  var DB = 'hc-gap', STORE = 'kv';
  function idb() {
    return new Promise(function (res, rej) {
      var r = indexedDB.open(DB, 1);
      r.onupgradeneeded = function () { r.result.createObjectStore(STORE); };
      r.onsuccess = function () { res(r.result); };
      r.onerror = function () { rej(r.error); };
    });
  }
  function kv(k, v) {
    return idb().then(function (db) {
      return new Promise(function (res, rej) {
        var mode = (v === undefined) ? 'readonly' : 'readwrite';
        var st = db.transaction(STORE, mode).objectStore(STORE);
        var t = (v === undefined) ? st.get(k) : st.put(v, k);
        t.onsuccess = function () { res(t.result); };
        t.onerror = function () { rej(t.error); };
      });
    });
  }
  var sleep = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };

  /* ---------- 수집 규칙 ---------- */
  // 한글이 하나라도 있으면 번역된 것으로 본다.
  var HANGUL = /[가-힣]/;
  // 영문자가 2자 이상 이어져야 문구로 친다 (숫자·기호 덩어리 제외).
  var LATIN = /[A-Za-z]{2,}/;
  // 치환하면 안 되는 자리 — v4 로더의 skipNode 와 같은 기준.
  var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, NOSCRIPT: 1, TITLE: 1, CODE: 1, PRE: 1 };
  var ATTRS = ['placeholder', 'title', 'aria-label', 'alt'];
  var MINLEN = 2, MAXLEN = 150;   // 기존 dashboard-ko 사전 규칙과 맞춘다

  function usable(s) {
    if (!s) return false;
    var t = s.trim();
    if (t.length < MINLEN || t.length > MAXLEN) return false;
    if (HANGUL.test(t)) return false;
    if (!LATIN.test(t)) return false;
    return true;
  }
  function skipNode(n) {
    var p = n.parentElement;
    if (!p) return true;
    if (SKIP_TAGS[p.tagName]) return true;
    if (p.isContentEditable) return true;
    return false;
  }

  var acc = { ok_flat: [], ok_detail: {} };
  var seen = Object.create(null);
  var C;

  function add(text, src) {
    var t = text.trim();
    if (!usable(t) || seen[t]) return 0;
    seen[t] = 1;
    acc.ok_flat.push(t);
    acc.ok_detail[t] = { src: src };
    return 1;
  }

  function harvest(root, src) {
    var n = 0;
    try {
      var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), node;
      while ((node = w.nextNode())) {
        if (skipNode(node)) continue;
        n += add(node.nodeValue, src);
      }
      var els = root.querySelectorAll ? root.querySelectorAll('[placeholder],[title],[aria-label],[alt]') : [];
      for (var i = 0; i < els.length; i++) {
        for (var j = 0; j < ATTRS.length; j++) {
          var v = els[i].getAttribute(ATTRS[j]);
          if (v) n += add(v, src + '@' + ATTRS[j]);
        }
      }
    } catch (e) {}
    return n;
  }

  /* ---------- 스크롤 ---------- */
  // 가상 스크롤·지연 로딩 목록은 끝까지 내려야 나머지가 렌더된다.
  function scrollables(doc) {
    var out = [doc.scrollingElement || doc.documentElement];
    var all = doc.querySelectorAll('*');
    for (var i = 0; i < all.length; i++) {
      var e = all[i];
      if (e.scrollHeight > e.clientHeight + 80 && e.clientHeight > 120) out.push(e);
      if (out.length > 12) break;      // 상위 몇 개면 충분하다
    }
    return out;
  }
  function scrollSweep(doc, src) {
    var targets = scrollables(doc), n = 0, i = 0;
    return (function step() {
      if (i >= targets.length) return Promise.resolve(n);
      var el = targets[i++], pos = 0, guard = 0;
      return (function down() {
        if (guard++ > 40 || pos >= el.scrollHeight) { el.scrollTop = 0; return step(); }
        el.scrollTop = pos;
        pos += Math.max(el.clientHeight - 60, 200);
        return sleep(220).then(function () { n += harvest(doc.body || doc, src + '#scroll'); return down(); });
      })();
    })();
  }

  /* ---------- 안전한 펼치기 ---------- */
  // **값을 바꾸는 버튼은 누르지 않는다.** 탭·아코디언·더보기처럼 화면만 펼치는 것만.
  var EXPANDERS = [
    '[role="tab"]:not([aria-selected="true"])',
    '.el-tabs__item:not(.is-active)',
    'details:not([open]) > summary',
    '[data-toggle="collapse"]',
    '[aria-expanded="false"][role="button"]'
  ].join(',');
  var EXPAND_DENY = /delete|remove|cancel|disconnect|archive|send|pay|purchase|subscribe|upgrade|downgrade|import|export|publish|deactivate|activate|삭제|제거|전송|결제|구독/i;

  function expandSweep(doc, src, cap) {
    var list = [], nodes = doc.querySelectorAll(EXPANDERS);
    for (var i = 0; i < nodes.length && list.length < (cap || 12); i++) {
      var e = nodes[i], label = (e.textContent || '') + ' ' + (e.getAttribute('aria-label') || '');
      if (EXPAND_DENY.test(label)) continue;
      list.push(e);
    }
    var n = 0, k = 0;
    return (function next() {
      if (k >= list.length) return Promise.resolve(n);
      var el = list[k++];
      try { el.click(); } catch (e) {}
      return sleep(420).then(function () { n += harvest(doc.body || doc, src + '#expand'); return next(); });
    })();
  }

  /* ---------- 라우트 목록 (hc-crawl-v3 와 같은 규칙) ---------- */
  var SKIP = /logout|oauth|callback|disconnect|\/delete|\/remove|cancel|\/activate|launchpad|\/new$|\/create|import|export|preview|builder|checkout|payment-methods|add-domain|verify-domain|no-permissions/i;
  function routeList() {
    try {
      var app = document.getElementById('app').__vue_app__;
      var router = app.config.globalProperties.$router;
      var locId = (location.pathname.match(/\/v2\/location\/([^/]+)/) || [])[1];
      if (!locId) return { locId: null, routes: [] };
      var seenR = {}, out = [];
      router.getRoutes().forEach(function (r) {
        var p = r.path;
        if (p.indexOf('/v2/location/:location_id') !== 0) return;
        p = p.replace(/^\/v2\/location\/:location_id\??/, '');
        if (!p || /[:*]/.test(p) || SKIP.test(p) || seenR[p]) return;
        seenR[p] = 1; out.push(p);
      });
      out.sort(function (a, b) { return a.split('/').length - b.split('/').length || a.localeCompare(b); });
      return { locId: locId, routes: out };
    } catch (e) { return { locId: null, routes: [] }; }
  }

  /* ---------- API ---------- */
  var state = { mode: null, idx: 0, routes: [], locId: null };
  var watchMo = null, watchTimer = null;

  function save() { return kv('acc', acc).then(function () { return kv('state', state); }); }

  C = window.__hcGap = {
    running: false,
    get acc() { return acc; },
    status: function () {
      return {
        mode: state.mode, running: C.running,
        수집: acc.ok_flat.length,
        진행: state.routes.length ? (state.idx + '/' + state.routes.length) : '-',
        현재: C.current || location.pathname
      };
    },
    stop: function () { C.running = false; if (watchMo) { watchMo.disconnect(); watchMo = null; } return save().then(function () { return '중단. 이어서 하려면 다시 붙여 넣으세요.'; }); },
    reset: function () { C.running = false; acc = { ok_flat: [], ok_detail: {} }; seen = Object.create(null); state = { mode: null, idx: 0, routes: [], locId: null }; return save().then(function () { return '초기화 완료'; }); },
    download: function (name) {
      var d = new Date(), p = function (x) { return (x < 10 ? '0' : '') + x; };
      var fn = name || ('hc-gap-' + d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()) + '.json');
      var blob = new Blob([JSON.stringify(acc, null, 1)], { type: 'application/json' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob); a.download = fn; a.click();
      return fn + ' — ' + acc.ok_flat.length + '건';
    },

    /* 수동 모드 — 클릭하지 않는다. 돌아다니는 동안 계속 줍는다. */
    watch: function () {
      state.mode = 'watch'; C.running = true;
      harvest(document.body, 'watch:' + location.pathname);
      if (!watchMo) {
        watchMo = new MutationObserver(function () {
          clearTimeout(watchTimer);
          watchTimer = setTimeout(function () {
            if (!C.running) return;
            harvest(document.body, 'watch:' + location.pathname);
            save();
          }, 600);
        });
        watchMo.observe(document.documentElement, { subtree: true, childList: true, characterData: true });
      }
      window.addEventListener('routeChangeEvent', function () {
        setTimeout(function () { if (C.running) { harvest(document.body, 'watch:' + location.pathname); save(); } }, 1200);
      });
      return '수동 수집 시작. 평소처럼 돌아다니세요. 다 되면 __hcGap.download()';
    },

    /* 자동 모드 — 라우트 순회 + 스크롤 + 안전한 펼치기 */
    sweep: function (opts) {
      opts = opts || {};
      var r = routeList();
      if (!r.locId) return Promise.resolve('❌ 로케이션 URL 에서 실행하세요 (/v2/location/<id>/…)');
      state.mode = 'sweep'; state.locId = r.locId;
      if (!state.routes.length) state.routes = r.routes;
      C.running = true;
      var base = location.origin + '/v2/location/' + r.locId;
      var fr = document.getElementById('hc-gap-frame');
      if (!fr) {
        fr = document.createElement('iframe');
        fr.id = 'hc-gap-frame';
        fr.style.cssText = 'position:fixed;left:0;top:0;width:1440px;height:1000px;opacity:0.01;pointer-events:none;z-index:-1;border:0';
        document.body.appendChild(fr);
      }
      console.log('[hc-gap] 라우트 ' + state.routes.length + '개 순회 시작. 중단은 __hcGap.stop()');

      return (function loop() {
        if (!C.running || state.idx >= state.routes.length) {
          C.running = false;
          return save().then(function () {
            console.log('[hc-gap] 완료 — ' + acc.ok_flat.length + '건. __hcGap.download()');
            return acc.ok_flat.length;
          });
        }
        var path = state.routes[state.idx];
        C.current = path;
        return new Promise(function (res) {
          var done = false, to = setTimeout(function () { if (!done) { done = true; res(null); } }, opts.timeout || 18000);
          fr.onload = function () { if (!done) { done = true; clearTimeout(to); res(fr.contentDocument); } };
          try { fr.src = base + path; } catch (e) { clearTimeout(to); res(null); }
        }).then(function (doc) {
          if (!doc) return 0;
          return sleep(opts.settle || 2600)
            .then(function () { return harvest(doc.body, path); })
            .then(function () { return scrollSweep(doc, path); })
            .then(function () { return opts.noExpand ? 0 : expandSweep(doc, path, opts.expandCap); })
            .catch(function () { return 0; });
        }).then(function () {
          state.idx++;
          if (state.idx % 5 === 0) console.log('[hc-gap] ' + state.idx + '/' + state.routes.length + ' — ' + acc.ok_flat.length + '건');
          return save().then(loop);
        });
      })();
    }
  };

  /* 이전 수집분 복원 */
  Promise.all([kv('acc'), kv('state')]).then(function (r) {
    if (r[0] && r[0].ok_flat) {
      acc = r[0];
      for (var i = 0; i < acc.ok_flat.length; i++) seen[acc.ok_flat[i]] = 1;
    }
    if (r[1]) state = r[1];
    console.log('[hc-gap] 준비 완료. 수집분 ' + acc.ok_flat.length + '건.');
    console.log('  __hcGap.watch()  수동 — 돌아다니는 동안 수집 (클릭 안 함)');
    console.log('  __hcGap.sweep()  자동 — 라우트 순회 + 스크롤 + 안전한 펼치기');
    console.log('  __hcGap.download()  결과 저장');
  });
})();
