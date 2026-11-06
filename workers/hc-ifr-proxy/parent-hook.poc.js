// hc-ifr-proxy 부모 쪽 훅 — PoC(2026-11-06 실측 통과판). 한글팩 로더 캐너리 편입용 원본.
// 하는 일: 메인 앱이 교차 출처 iframe 앱을 띄울 때 주소를 app.hyperclass.ai/__ifr/{key}/… 로 바꾼다.
//   - iframe src 속성/프로퍼티 + <a href>(Postmate 가 iframe 출처를 계산하는 곳) 둘 다 바꿔야 핸드셰이크가 맞는다.
//   - 프록시 Worker 가 살아 있을 때만 바꾼다(라우트가 fail-open 이라 Worker 가 죽으면 /__ifr/… 가
//     메인 앱 원본으로 가서 iframe 안에 메인 앱이 뜬다 → 반드시 헬스 확인 후 켠다).
// 끄기: window.__hcIfrHook.off() 또는 포인터 off / Worker 라우트 삭제.
(function () {
  if (window.__hcIfrHook) return;
  var MAP = {
    'client-app-automation-workflows.leadconnectorhq.com': 'wf',
    'client-app-crm-settings.leadconnectorhq.com': 'crm',
  };
  var state = { ok: false, off: false, n: 0 };

  function rw(u) {
    if (!state.ok || state.off) return u;
    try {
      var x = new URL(u, location.href);
      var k = MAP[x.host];
      if (!k) return u;
      state.n++;
      return location.origin + '/__ifr/' + k + x.pathname + x.search + x.hash;
    } catch (e) { return u; }
  }

  // 헬스 확인: Worker 가 붙인 x-hc-ifr 헤더가 있어야 켠다.
  fetch('/__ifr/wf/', { method: 'HEAD', credentials: 'omit', cache: 'no-store' })
    .then(function (r) { state.ok = r.headers.get('x-hc-ifr') === 'wf'; })
    .catch(function () { state.ok = false; });

  var ifr = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, 'src');
  Object.defineProperty(HTMLIFrameElement.prototype, 'src', {
    configurable: true, enumerable: true,
    get: function () { return ifr.get.call(this); },
    set: function (v) { return ifr.set.call(this, rw(String(v))); },
  });
  var a = Object.getOwnPropertyDescriptor(HTMLAnchorElement.prototype, 'href');
  Object.defineProperty(HTMLAnchorElement.prototype, 'href', {
    configurable: true, enumerable: true,
    get: function () { return a.get.call(this); },
    set: function (v) { return a.set.call(this, rw(String(v))); },
  });
  var sa = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function (n, v) {
    if (this instanceof HTMLIFrameElement && String(n).toLowerCase() === 'src') v = rw(String(v));
    return sa.call(this, n, v);
  };

  window.__hcIfrHook = {
    v: '0.1.0', MAP: MAP, state: state,
    off: function () { state.off = true; },
    on: function () { state.off = false; },
  };
})();

// iframe 안 번역(시험판): 같은 출처가 된 iframe 문서에 기존 사전(core._text)을 그대로 적용.
// 실측: 워크플로우 목록·빌더 28곳, 비즈니스 프로필 27곳 즉시 한글화. 미번역 목록은 docs/research 참고.
// 편입 시에는 로더의 기존 DOM 번역 함수를 iframe document 에도 붙이는 방식으로 대체한다.
