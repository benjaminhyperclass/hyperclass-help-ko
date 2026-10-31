/* Hyperclass 한글팩 — 포털 슬롯 v1.1 (2026-10-31). Client Portal → Settings → Branding → Advanced → Custom JS.
   community.hyperclass.ai: 칸 전체를 이 내용으로 교체(이전 위젯 코드는 참/거짓 번역 오염으로 동작하지 않았다 — git 42ce67c).
   고객 포털: 기존 코드를 지우지 말고 **맨 위에** 이 블록을 별도 문장으로 덧붙인다(뒤 코드가 오류를 내도 이 블록은 먼저 돈다).
   순수 JS 칸: script 태그·꺾쇠 금지. 부트스트랩(고정 SHA)이 포털 포인터를 읽어 로더·채팅 위젯 KO 를 주입한다. CDN 이 막히면 베일만 걷는다. */
(function () {
  var s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@3c71af8bb18c5d5b7f225445e8c1105d0a36ae7b/js/hc-portal-bootstrap.js';
  s.async = false;
  s.onerror = function () { try { document.documentElement.setAttribute('data-hc-ko', 'fail'); } catch (e) {} };
  (document.head || document.documentElement).appendChild(s);
})();
