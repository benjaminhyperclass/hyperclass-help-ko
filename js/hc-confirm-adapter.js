/* Hyperclass 한글팩 — 확인입력 어댑터 v1.0.1 (2026-10-28)
 * 부트스트랩(js/hc-bootstrap.js)이 로더 다음에 주입한다. 단독으로도 동작한다.
 *
 * 문제: GHL 은 파괴적 동작 전에 "Type DELETE to confirm" 식 입력란을 띄우고 **영문 토큰을 정확 비교**한다.
 *       토큰(DELETE CONFIRM REMOVE CANCEL TRANSFER DISABLE RESET)은 DNT 라 번역하지 않는데,
 *       사용자는 '삭제' 를 치고 왜 버튼이 안 켜지는지 모른다.
 * 해결: 모달을 감지해 어떤 토큰을 요구하는지 읽고, 입력값이 그 토큰의 한글 대응어(또는 소문자)이면
 *       네이티브 value setter 로 영문 토큰을 넣고 input/change 이벤트를 재발생시킨다.
 *       입력란 아래에 "삭제 또는 DELETE 입력" 안내를 붙이고, 변환 직후 "DELETE로 입력됨" 을 잠깐 보여 준다.
 * 안전: 토큰을 못 읽은 모달은 건드리지 않는다. 플랫폼 검증 로직은 전혀 바꾸지 않는다.
 * 제외: window.HC_I18N_EXCLUDE 에 든 로케이션(로더·레거시와 같은 판정)에서는 동작하지 않는다.
 * 디버그: window.__hcConfirm.status()
 */
(function () {
  'use strict';
  if (window.__hcConfirm) return;

  var VERSION = '1.0.1';
  var TOKENS = {
    DELETE: ['삭제'],
    CONFIRM: ['확인'],
    REMOVE: ['제거', '삭제'],
    CANCEL: ['취소'],
    TRANSFER: ['이전', '전송'],
    DISABLE: ['비활성화', '비활성'],
    RESET: ['초기화', '재설정']
  };
  var TOKEN_RE = /\b(DELETE|CONFIRM|REMOVE|CANCEL|TRANSFER|DISABLE|RESET)\b/;
  var FLAG = 'data-hc-confirm';
  var HINT_CLS = 'hc-confirm-hint';
  var stats = { version: VERSION, dialogs: 0, inputs: 0, converted: 0, lastToken: null, skippedNoToken: 0 };
  var DEBUG = /[?&]hcko=debug/.test(location.search);
  function log() { if (DEBUG && window.console) console.log.apply(console, ['[hc-confirm]'].concat([].slice.call(arguments))); }

  window.__hcConfirm = { version: VERSION, status: function () { return JSON.parse(JSON.stringify(stats)); } };

  var EXCL_FALLBACK = ['1r0pJRd1cQQ5DZsjSbc9'];
  function excluded() {
    try {
      var c = window.HC_I18N_EXCLUDE || EXCL_FALLBACK;
      var m = location.pathname.match(/\/location\/([^\/]+)/);
      return !!(m && c.indexOf(m[1]) > -1);
    } catch (e) { return false; }
  }

  var setter = null;
  try { setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set; } catch (e) {}
  function setNative(input, v) {
    if (setter) setter.call(input, v); else input.value = v;
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
  }

  // 입력란이 요구하는 토큰: ① placeholder/aria-label ② 가장 가까운 모달 컨테이너의 텍스트
  function containerOf(el) {
    return el.closest('[role="dialog"],[role="alertdialog"],.modal,.n-modal,.hl-modal,.vfm,.vfm__container,[class*="modal"],[class*="Modal"],[class*="dialog"],[class*="Dialog"]') || null;
  }
  function tokenFor(input) {
    var own = (input.getAttribute('placeholder') || '') + ' ' + (input.getAttribute('aria-label') || '');
    var m = own.match(TOKEN_RE);
    if (m) return m[1];
    var c = containerOf(input);
    if (!c) return null;
    var txt = c.textContent || '';
    m = txt.match(TOKEN_RE);
    return m ? m[1] : null;
  }
  function koWords(token) { return TOKENS[token] || []; }

  // 안내는 입력란 **바깥**에 둔다. 테두리·그림자가 있는 래퍼(.hr-input 등) 안이나 플렉스 행 안에
  // 넣으면 테두리 안쪽에 겹치거나 입력란이 찌그러진다(2026-10-28 태그 일괄삭제 모달 실측:
  // input → .hr-input__input → .hr-input-wrapper → .hr-input(테두리) → .hr-input-container(flex row)
  // → .hr-form-item-blank → .hr-form-item(grid)). 테두리·플렉스행·입력 래퍼를 모두 벗어난 첫 조상 뒤에 놓는다.
  function anchorOf(input) {
    var el = input, up = 0;
    while (el.parentElement && up !== 6) {
      var p = el.parentElement, cs;
      try { cs = getComputedStyle(p); } catch (e) { break; }
      var bordered = parseFloat(cs.borderTopWidth) > 0 || cs.boxShadow !== 'none';
      var flexRow = cs.display.indexOf('flex') >= 0 && cs.flexDirection.indexOf('row') === 0;
      var isInput = /(^|\s)(hr-input|n-input|el-input|input-wrapper|input-group)/.test(String(p.className || ''));
      if (bordered || flexRow || isInput) { el = p; up++; continue; }
      break;
    }
    return el;
  }
  function hintEl(input) {
    if (input.__hcHint && input.__hcHint.isConnected) return input.__hcHint;
    var a = anchorOf(input);
    var next = a.nextElementSibling;
    if (next && next.classList && next.classList.contains(HINT_CLS)) { input.__hcHint = next; return next; }
    var h = document.createElement('div');
    h.className = HINT_CLS;
    h.setAttribute('style', 'display:block;font-size:11px;line-height:1.4;color:#6b7280;margin-top:4px;word-break:keep-all;');
    if (a.parentNode) a.parentNode.insertBefore(h, a.nextSibling);
    input.__hcHint = h;
    return h;
  }
  function showHint(input, token, converted) {
    try {
      var h = hintEl(input);
      var ko = koWords(token)[0];
      if (converted) {
        h.textContent = token + '(으)로 입력됐습니다';
        h.style.color = '#15803d';
        clearTimeout(h.__t);
        h.__t = setTimeout(function () { h.textContent = "'" + ko + "' 또는 " + token + ' 입력'; h.style.color = '#6b7280'; }, 1800);
      } else {
        h.textContent = "'" + ko + "' 또는 " + token + ' 입력';
      }
    } catch (e) {}
  }

  function attach(input) {
    if (input.getAttribute(FLAG)) return;
    if (input.type && !/^(text|search)$/i.test(input.type)) return;
    var token = tokenFor(input);
    if (!token) { stats.skippedNoToken++; return; }
    input.setAttribute(FLAG, token);
    stats.inputs++;
    showHint(input, token, false);
    log('입력란 연결', token, input);
    input.addEventListener('input', function () {
      var v = (input.value || '').trim();
      if (!v || v === token) return;
      var words = koWords(token);
      if (words.indexOf(v) >= 0 || v.toUpperCase() === token) {
        setNative(input, token);
        stats.converted++; stats.lastToken = token;
        showHint(input, token, true);
        log('변환', v, '→', token);
      }
    });
  }

  function scan(root) {
    if (excluded()) return;
    var list = (root.querySelectorAll ? root.querySelectorAll('input') : []);
    for (var i = 0, n1 = list.length; i !== n1; i++) {
      var inp = list[i];
      if (containerOf(inp)) attach(inp);
    }
  }

  var pending = null;
  function schedule(nodes) {
    if (pending) return;
    pending = setTimeout(function () {
      pending = null;
      try { stats.dialogs++; scan(document.body); } catch (e) {}
    }, 120);
  }

  try {
    var mo = new MutationObserver(function (muts) {
      for (var i = 0, n2 = muts.length; i !== n2; i++) {
        var m = muts[i];
        if (m.addedNodes && m.addedNodes.length) {
          for (var j = 0, n3 = m.addedNodes.length; j !== n3; j++) {
            var n = m.addedNodes[j];
            if (n.nodeType === 1 && (n.tagName === 'INPUT' || (n.querySelector && n.querySelector('input')))) { schedule(); return; }
          }
        }
      }
    });
    mo.observe(document.documentElement, { subtree: true, childList: true });
  } catch (e) {}
  if (document.body) scan(document.body);
})();
