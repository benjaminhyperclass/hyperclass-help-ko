/* Hyperclass 한글팩 — 포털 슬롯 v1 (2026-10-31). Client Portal → Settings → Branding → Advanced → Custom JS 칸 전체를 이 내용으로.
   순수 JS 칸이다: script 태그·꺾쇠 금지. 부트스트랩(고정 SHA)이 포털 포인터를 읽어 로더·채팅 위젯 KO 를 주입한다 — 이후 이 칸은 다시 만지지 않는다.
   이전 내용(채팅 위젯 4문구, true/false 가 참/거짓으로 번역돼 동작하지 않던 코드)은 git 이력 42ce67c 의 이 파일. */
(function () {
  var s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@0a062f8b43de22ff4b3596398e3cf3aa30bf6991/js/hc-portal-bootstrap.js';
  s.async = false;
  (document.head || document.documentElement).appendChild(s);
})();
