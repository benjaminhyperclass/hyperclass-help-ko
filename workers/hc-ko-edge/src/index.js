/* Hyperclass 한글팩 — 엣지 주입 Worker v0.1.0 (2026-10-28, 2단계 스파이크)
 *
 * 역할: app.hyperclass.ai 의 HTML 문서 응답에만 개입해 <head> 맨 앞에
 *   ① 베일 스타일 — 로더가 사전을 병합할 때까지 화면을 숨겨 영문 플래시를 없앤다 (최대 VEIL_MS)
 *   ② 부트스트랩 스크립트 — GHL 이 Custom JS 를 주입하는 시점(인증 후 XHR, ~4초)을 기다리지 않는다
 * 를 끼워 넣는다. HTML 이 아닌 응답(JS·API·웹소켓 업그레이드)은 그대로 통과시킨다.
 *
 * 안전장치
 *   · ENABLED="0" 이면 완전 통과. ?hcko=off 쿼리도 통과(로더 킬스위치와 같은 키).
 *   · 부트스트랩·로더는 중복 실행 가드(__hcBoot/__hcKoApp)가 있어 슬롯 주입과 겹쳐도 한 번만 돈다.
 *   · 베일은 로더가 걷거나(start 시) VEIL_MS 뒤 스스로 걷힌다 — 로더가 아예 못 떠도 화면은 나온다.
 *   · 제외 로케이션은 로더가 부팅하지 않으므로 베일만 VEIL_MS 뒤 걷힌다 → 로더 v4.13 이 제외 판정 즉시 걷는다.
 *   · Content-Length 는 스트리밍 변환 시 Cloudflare 가 제거한다. 다른 헤더는 손대지 않는다.
 */
export function buildHead(env) {
  const sha = env.BOOTSTRAP_SHA;
  const veilMs = parseInt(env.VEIL_MS || '2500', 10) || 2500;
  return (
    `<style id="hc-ko-veil">html{visibility:hidden !important}</style>` +
    `<script>window.__hcEdge={v:'0.1.0',veilMs:${veilMs},t0:Date.now()};` +
    `setTimeout(function(){var v=document.getElementById('hc-ko-veil');if(v)v.remove();},${veilMs});</script>` +
    `<script src="https://cdn.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@${sha}/js/hc-bootstrap.js"></script>`
  );
}

export function shouldInject(request, res, env) {
  if (env.ENABLED === '0') return false;
  if (request.method !== 'GET') return false;
  const ct = res.headers.get('content-type') || '';
  if (!ct.includes('text/html')) return false;
  const url = new URL(request.url);
  if (/[?&]hcko=off/.test(url.search)) return false;
  return true;
}

export default {
  async fetch(request, env) {
    const res = await fetch(request);
    if (!shouldInject(request, res, env)) return res;
    const head = buildHead(env);
    return new HTMLRewriter()
      .on('head', { element(el) { el.prepend(head, { html: true }); } })
      .transform(res);
  },
};
