/* ─────────────────────────────────────────────────────────────────────────
   커뮤니티(ClientClub) 채팅 위젯 한글화

   설치: 커뮤니티 → 설정 → 브랜딩 → 고급(Advanced) → Custom JS 칸에
        아래 전체를 붙여넣습니다.

   ⚠ 이 칸은 에이전시 화이트라벨 Custom JS 칸과 규칙이 정반대입니다.
     · 에이전시 칸 = HTML 주입 필드 → script 태그로 감싸야 함
     · 커뮤니티 칸 = 순수 JS 필드   → 태그를 넣으면 거부됨
   ⚠ 그리고 이 칸은 '작다' 기호를 만나면 그 뒤 '크다' 기호까지 통째로 잘라냅니다.
     원본 코드의  for (var i = 0; i [작다] els.length; i++)  같은 비교가
     그대로 들어가면 코드가 잘려 아무 일도 일어나지 않습니다(에러도 안 납니다).
     그래서 이 파일에는 '작다' 기호가 한 개도 없습니다.
     반복문은 전부 forEach 로, 시간 비교는 좌우를 뒤집어 '크다' 로 썼습니다.
     ★ 문구를 추가·수정할 때도 '작다' 기호를 절대 넣지 마세요.

   진단: 콘솔에서  __hcChatKo.status()   치환 횟수·감시 중인 루트 수
        __hcChatKo.probe()    화면의 실제 문자열·섀도루트·iframe 상태
        __hcChatKo.rescan()   즉시 다시 훑기
        __hcChatKo.stop()     중지

   ⚠ MAP 은 '완전 일치'입니다. 화면 문구와 한 글자(공백·대소문자 포함)라도
     다르면 안 걸립니다. probe().texts 로 실제 문자열을 확인해 그대로 옮기세요.
   ───────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  // ── 번역할 문구 ────────────────────────────────────────────────────────
  // 화면에 보이는 그대로(앞뒤 공백 제외) 적습니다. 부분 일치가 아니라 완전 일치입니다.
  var MAP = {
    'Chat via SMS/Email': '문자·이메일로 문의하기',
    'Chat via Live Chat': '실시간 채팅으로 문의하기',
    'Chat with Instagram': '인스타그램으로 문의하기'
    // 채널을 열고 나서 보이는 문구도 여기에 계속 추가하세요.
    // 예: 'Send us a message': '메시지 보내기',
  };

  var ATTRS = ['placeholder', 'aria-label', 'title', 'alt'];

  // 위젯 후보. LeadConnector 채팅 위젯이 쓰는 이름들을 모아 두었습니다.
  var SEL = [
    'chat-widget', 'lc-chat-widget',
    '[id*="chat-widget"]', '[class*="chat-widget"]',
    '[id*="lc_text-widget"]', '[class*="lc_text-widget"]',
    '[id*="lc_chat"]', '[class*="lc_chat"]'
  ].join(',');

  // 초반에는 위젯을 찾았든 못 찾았든 문서 전체를 함께 훑습니다.
  // 그 상태를 무한정 두면 페이지가 바뀔 때마다 전체 순회가 돌아 비싸므로
  // 아래 시간까지만 허용하고, 이후에는 위젯 안만 봅니다.
  var WARMUP_MS = 60000;

  if (window.__hcChatKo) { window.__hcChatKo.rescan(); return; }

  var t0 = Date.now();
  var stats = { hits: 0, scans: 0, roots: 0, found: false };
  var observed = (typeof WeakSet === 'function') ? new WeakSet() : null;
  var MO = window.MutationObserver || window.WebKitMutationObserver || null;
  var stopped = false;

  // ── 한 루트(문서·섀도루트) 안을 훑어 치환 ──────────────────────────────
  function translate(root) {
    if (!root) return;
    try {
      // 0) 이 요소 자신의 섀도루트.
      //    LeadConnector 채팅 위젯은 chat-widget 커스텀 엘리먼트 하나뿐이고
      //    내용이 전부 그 shadowRoot 안에 있습니다. 자식 순회만 하면
      //    querySelectorAll('*') 가 빈 배열이라 아무것도 못 찾습니다.
      if (root.shadowRoot) { watch(root.shadowRoot); translate(root.shadowRoot); }

      // 1) 텍스트 노드 — 완전 일치일 때만 바꿉니다.
      var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), n;
      while ((n = w.nextNode())) {
        var key = n.textContent.trim();
        var ko = MAP[key];
        // 이미 바뀐 노드는 건드리지 않습니다 — 안 그러면 관찰자가 무한히 되돕니다.
        if (ko && n.textContent !== ko) { n.textContent = ko; stats.hits++; }
      }

      // 2) 속성 — 툴팁·스크린리더 레이블도 같이 바꿉니다.
      var els = root.querySelectorAll ? root.querySelectorAll('*') : [];
      [].forEach.call(els, function (el) {
        ATTRS.forEach(function (a) {
          var cur = el.getAttribute && el.getAttribute(a);
          if (!cur) return;
          var t = MAP[cur.trim()];
          if (t && cur !== t) { el.setAttribute(a, t); stats.hits++; }
        });
        // 3) 섀도 DOM — 위젯 본문은 대개 여기 안에 있습니다.
        //    TreeWalker 는 섀도 경계를 넘지 못하므로 직접 들어갑니다.
        if (el.shadowRoot) { watch(el.shadowRoot); translate(el.shadowRoot); }
      });
    } catch (e) {}
  }

  // ── 변경 감시 ──────────────────────────────────────────────────────────
  var pending = false;
  function schedule() {
    if (pending || stopped) return;
    pending = true;
    setTimeout(function () { pending = false; scan(); }, 120);
  }

  function watch(root) {
    if (!MO || !observed || !root || observed.has(root)) return;
    observed.add(root);
    stats.roots++;
    try {
      new MO(schedule).observe(root, {
        childList: true, subtree: true, characterData: true,
        attributes: true, attributeFilter: ATTRS
      });
    } catch (e) {}
  }

  function scan() {
    if (stopped) return;
    stats.scans++;
    var hosts = document.querySelectorAll(SEL);
    if (hosts.length) {
      stats.found = true;
      [].forEach.call(hosts, function (el) { watch(el); translate(el); });
    }
    // 워밍업 동안은 위젯을 찾았더라도 문서 전체를 함께 훑습니다.
    // 선택자가 맞았는데도 문구가 다른 요소에 있는 경우를 놓치지 않기 위해서입니다.
    // (좌우를 뒤집어 '크다' 로 씁니다. '작다' 기호는 이 칸에서 잘립니다.)
    if (WARMUP_MS > Date.now() - t0) translate(document.body);
  }

  // ── 진단 — 화면에 실제로 어떤 문자열이 있는지 뽑아 봅니다 ──────────────
  // MAP 에 적은 문구와 화면의 실제 문구가 한 글자라도 다르면 완전 일치라 안 걸립니다.
  // 아래 결과의 texts 를 보고 MAP 을 그대로 맞추세요.
  function probe() {
    var out = { hosts: [], iframes: [], texts: [], closedShadowSuspect: false };
    [].forEach.call(document.querySelectorAll(SEL), function (el) {
      out.hosts.push({
        tag: el.tagName.toLowerCase(),
        id: el.id || null,
        cls: (el.className && el.className.baseVal !== undefined ? el.className.baseVal : el.className) || null,
        openShadow: !!el.shadowRoot,
        children: el.children ? el.children.length : 0
      });
      // 자식도 없고 열린 섀도루트도 없으면 닫힌 섀도루트일 가능성이 큽니다.
      if (!el.shadowRoot && el.children && el.children.length === 0) out.closedShadowSuspect = true;
    });
    [].forEach.call(document.querySelectorAll('iframe'), function (f) {
      out.iframes.push(f.src || '(src 없음)');
    });
    var seen = {};
    function collect(root, depth) {
      if (!root || depth === 0) return;
      try {
        if (root.shadowRoot) collect(root.shadowRoot, depth);
        var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), n;
        while ((n = w.nextNode())) {
          var t = n.textContent.trim();
          if (t && !seen[t] && /[A-Za-z]/.test(t) && 80 > t.length) { seen[t] = 1; out.texts.push(t); }
        }
        var els = root.querySelectorAll ? root.querySelectorAll('*') : [];
        [].forEach.call(els, function (el) { if (el.shadowRoot) collect(el.shadowRoot, depth - 1); });
      } catch (e) {}
    }
    var hs = document.querySelectorAll(SEL);
    if (hs.length) [].forEach.call(hs, function (el) { collect(el, 6); });
    else collect(document.body, 6);
    out.texts = out.texts.slice(0, 60);
    return out;
  }

  // 위젯이 늦게 붙으므로 문서 전체의 구조 변경을 감시해 등장을 잡습니다.
  watch(document.documentElement);

  // 관찰자가 못 잡는 경우(섀도루트 내부 교체 등)를 위한 느린 예비 순회.
  // 워밍업이 끝나면 위젯 안만 보므로 부담이 없습니다.
  var timer = setInterval(scan, 2000);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scan);
  }
  scan();

  window.__hcChatKo = {
    version: '1.1.0',
    status: function () {
      return {
        hits: stats.hits,          // 지금까지 치환한 횟수
        scans: stats.scans,
        roots: stats.roots,        // 감시 중인 루트(섀도루트 포함) 수
        widgetFound: stats.found,  // false 면 SEL 선택자가 위젯을 못 맞춘 것
        entries: Object.keys(MAP).length,
        stopped: stopped
      };
    },
    rescan: function () { scan(); return this.status(); },
    probe: probe,   // 화면의 실제 문자열·섀도루트·iframe 진단
    stop: function () { stopped = true; clearInterval(timer); return '중지했습니다.'; }
  };
})();
