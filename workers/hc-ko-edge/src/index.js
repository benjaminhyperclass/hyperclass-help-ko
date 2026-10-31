/* Hyperclass 한글팩 — 엣지 주입 Worker v0.4.0 (2026-10-31)
 * v0.4: links.hyperclass.ai 결제 앱(작업지시서 v1 8절 E3). 결제 앱 경로(PAY_PATH_RE)의 200 text/html GET 에만
 *       짧은 베일(≤1.5초) + window.__hcPayPtr(data/hc-pay-rev.json 60초 캐시) + preload + 결제 로더(고정 SHA)를 넣는다.
 *       3xx(트리거 링크 리다이렉트)·4xx/5xx·비HTML·POST·다른 경로·포인터 실패/off 는 **아무것도 안 하고 통과**.
 *       라우트(links.hyperclass.ai/*)는 DNS 가 회색(DNS only)인 동안 트래픽을 받지 않는다 — Proxied 전환은 벤자민 승인 후.
 *       운영·테스트가 같은 handle() 을 쓴다(테스트가 실제 분기를 검증).
 *       적대적 리뷰 반영: 베일은 CSS 만으로도 걷힌다(인라인 스크립트가 막혀도 결제 화면이 가려지지 않게, 동작 줄이기 환경은 베일 없음) ·
 *       응답에 CSP 헤더가 있으면 주입하지 않는다 · 결제 포인터 읽기 300ms 상한(넘으면 통과) · 예외 시 원본 통과(passThroughOnException) ·
 *       결제 포인터 SHA 는 40자만 · 로더에 SRI(integrity) · excludePaths 는 Worker 에서도 판정
 *
 * 역할: app.hyperclass.ai 의 HTML 문서 응답에만 개입해 <head> 맨 앞에
 *   ① 베일 — 로더가 사전을 병합할 때까지 흰 오버레이(브랜드 문구)로 덮어 영문 플래시를 없앤다 (최대 VEIL_MS).
 *      v0.3: html visibility:hidden(빈 화면) 대신 body 첫 요소로 오버레이를 넣어 '불러오는 중' 이 보인다
 *   ② 포인터 스냅샷 window.__hcPtr — data/hc-ko-app-rev.json 을 엣지에서 60초 캐시로 읽어 넣는다.
 *      부트스트랩 v1.1·로더 v4.15 는 이 값으로 저장소·네트워크 대기 없이 즉시 부팅한다 (v0.2)
 *   ③ preload 힌트 — 로더·어댑터·core 사전을 GHL 번들과 병렬로 미리 받는다 (v0.2)
 *   ④ 부트스트랩 스크립트
 * HTML 이 아닌 응답(JS·API·웹소켓 업그레이드)은 그대로 통과시킨다.
 *
 * 안전장치
 *   · ENABLED="0" 이면 완전 통과. ?hcko=off 쿼리도 통과.
 *   · 포인터를 못 읽으면 ②③ 없이 ①④ 만 넣는다 → 부트스트랩이 종전 경로(저장소→raw→@main)로 간다.
 *   · 부트스트랩·로더는 중복 실행 가드가 있어 슬롯 주입과 겹쳐도 한 번만 돈다.
 *   · 베일은 로더가 걷거나 VEIL_MS 뒤 스스로 걷힌다.
 */
const REPO = 'benjaminhyperclass/hyperclass-help-ko';
const CDN = `https://cdn.jsdelivr.net/gh/${REPO}@`;
const POINTER_URL = `https://raw.githubusercontent.com/${REPO}/main/data/hc-ko-app-rev.json`;
const SHA_RE = /^[0-9a-f]{7,40}$/;
export const VEIL_HTML = `<div id="hc-ko-veil"><i></i>하이퍼클래스 불러오는 중…</div>`;

export async function readPointer(env) {
  try {
    const r = await fetch(POINTER_URL, { cf: { cacheTtl: parseInt(env.POINTER_TTL || '60', 10) || 60, cacheEverything: true } });
    if (!r.ok) return null;
    const d = await r.json();
    if (!d || !SHA_RE.test(String(d.rev)) || !d.loader || !SHA_RE.test(String(d.loader.stable))) return null;
    return d;
  } catch { return null; }
}

function locOf(pathname) {
  const m = pathname.match(/\/location\/([^/]+)/);
  return m ? m[1] : null;
}

export function pickLoader(ptr, pathname) {
  const L = ptr.loader, loc = locOf(pathname);
  const useNext = !!(loc && SHA_RE.test(String(L.next || '')) && Array.isArray(L.canary) && L.canary.includes(loc));
  const files = Array.isArray(L.files) && L.files.length ? L.files : ['js/hc-ko-app-loader.js', 'js/hc-confirm-adapter.js'];
  return { ref: useNext ? L.next : L.stable, channel: useNext ? 'next' : 'stable', files };
}

export function buildHead(env, ptr, pathname) {
  const sha = env.BOOTSTRAP_SHA;
  const veilMs = parseInt(env.VEIL_MS || '2500', 10) || 2500;
  let out =
    `<style id="hc-ko-veil-css">#hc-ko-veil{position:fixed;inset:0;z-index:2147483647;background:#fff;display:flex;align-items:center;justify-content:center;font:500 14px/1.4 Pretendard,-apple-system,"Apple SD Gothic Neo","Noto Sans KR",sans-serif;color:#6b7280;letter-spacing:-.01em}#hc-ko-veil i{display:inline-block;width:14px;height:14px;margin-right:8px;border:2px solid #d1d5db;border-top-color:#2563eb;border-radius:50%;animation:hcspin .8s linear infinite;vertical-align:-2px}@keyframes hcspin{to{transform:rotate(360deg)}}</style>` +
    `<script>window.__hcEdge={v:'0.3.0',veilMs:${veilMs},t0:Date.now()};` +
    `setTimeout(function(){var v=document.getElementById('hc-ko-veil');if(v)v.remove();},${veilMs});</script>`;
  if (ptr) {
    const sel = pickLoader(ptr, pathname);
    const snap = { rev: ptr.rev, off: ptr.off === true, loader: ptr.loader, excludeLocations: ptr.excludeLocations || [], telemetry: ptr.telemetry || null };
    // </script> 가 JSON 안에 들어오는 일은 없지만 방어적으로 이스케이프
    out += `<script>window.__hcPtr=${JSON.stringify(snap).replace(/</g, '\\u003c')};</script>`;
    if (ptr.off !== true) {
      for (const f of sel.files) out += `<link rel="preload" as="script" href="${CDN}${sel.ref}/${f}">`;
      out += `<link rel="preload" as="fetch" crossorigin="anonymous" href="${CDN}${ptr.rev}/data/hc-ko-app-core.json">`;
    }
  }
  out += `<script src="${CDN}${sha}/js/hc-bootstrap.js"></script>`;
  return out;
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

/* ---------- 결제 앱 (links.hyperclass.ai) ---------- */
export const PAY_HOST = 'links.hyperclass.ai';
const PAY_POINTER_URL = `https://raw.githubusercontent.com/${REPO}/main/data/hc-pay-rev.json`;
// 결제 앱 라우터 getRoutes() 실측(2026-10-31): payment-link·invoice·estimate(+ -ssr) /:id, gift-card/(preview|product-preview|sample|terms-and-conditions)?/:id
export const PAY_PATH_RE = /^\/(?:(?:payment-link|invoice|estimate)(?:-ssr)?\/[^/]+|gift-card\/(?:(?:preview|product-preview|sample|terms-and-conditions)\/)?[^/]+)\/?$/;
export const PAY_VEIL_HTML = `<div id="hc-pay-veil"><i></i>불러오는 중…</div>`;

export async function readPayPointer(env) {
  try {
    const r = await fetch(PAY_POINTER_URL, { cf: { cacheTtl: parseInt(env.POINTER_TTL || '60', 10) || 60, cacheEverything: true } });
    if (!r.ok) return null;
    return validPayPointer(await r.json());
  } catch { return null; }
}
const SHA40_RE = /^[0-9a-f]{40}$/;
const SRI_RE = /^sha(256|384|512)-[A-Za-z0-9+/=]{40,}$/;
export const PAY_PTR_TIMEOUT_MS = 300;
export function validPayPointer(d) {
  if (!d || !SHA40_RE.test(String(d.rev)) || !d.loader || !SHA40_RE.test(String(d.loader.stable))) return null;
  return d;
}
function payExcluded(ptr, url) {
  const ex = Array.isArray(ptr.excludePaths) ? ptr.excludePaths : [];
  return ex.some((x) => typeof x === 'string' && x.length >= 6 && url.pathname.includes(x));
}
function withTimeout(p, ms) {
  return Promise.race([Promise.resolve(p).catch(() => null), new Promise((r) => setTimeout(() => r(null), ms))]);
}
export function payTarget(request, res, env, url) {
  if (env.ENABLED === '0' || env.PAY_ENABLED === '0') return false;
  if (request.method !== 'GET') return false;
  if (!PAY_PATH_RE.test(url.pathname)) return false;
  if (/[?&]hcko=off/.test(url.search)) return false;
  if (!res) return true;                         // 오리진 응답 전 사전 판정(포인터를 읽을지)
  if (res.status !== 200) return false;          // 3xx 리다이렉트·4xx·5xx 는 손대지 않는다
  if (res.headers.get('content-security-policy')) return false;   // CSP 가 붙으면 인라인 주입이 막힐 수 있다 — 아예 손대지 않는다
  return (res.headers.get('content-type') || '').includes('text/html');
}
export function buildPayHead(env, ptr, url) {
  const veilMs = Math.min(parseInt(env.PAY_VEIL_MS || '1200', 10) || 1200, 1500);
  const useNext = /[?&]hcch=next(?:&|$)/.test(url.search) && SHA40_RE.test(String(ptr.loader.next || ''));
  const loader = useNext ? ptr.loader.next : ptr.loader.stable;
  const sri = useNext ? ptr.loader.integrityNext : ptr.loader.integrity;
  const sriAttr = SRI_RE.test(String(sri || '')) ? ` integrity="${sri}" crossorigin="anonymous"` : '';
  const snap = { rev: ptr.rev, off: ptr.off === true, excludePaths: Array.isArray(ptr.excludePaths) ? ptr.excludePaths : [], channel: useNext ? 'next' : 'stable' };
  // 베일은 CSS 애니메이션만으로 veilMs 뒤 보이지 않게(클릭도 통과) 된다 — 인라인 스크립트가 막혀도 결제 화면을 가리지 않는다.
  // 아래 타이머·로더는 노드를 치우는 정리용이다(div 먼저, CSS 나중 — 반대로 하면 스타일 없는 글자가 남는다).
  return `<style id="hc-pay-veil-css">#hc-pay-veil{position:fixed;inset:0;z-index:2147483647;background:#fff;display:flex;align-items:center;justify-content:center;font:500 14px/1.4 -apple-system,"Apple SD Gothic Neo","Noto Sans KR",sans-serif;color:#6b7280;animation:hcpayveil 0s ${veilMs}ms forwards}#hc-pay-veil i{display:inline-block;width:14px;height:14px;margin-right:8px;border:2px solid #d1d5db;border-top-color:#2563eb;border-radius:50%;animation:hcspin .8s linear infinite;vertical-align:-2px}@keyframes hcspin{to{transform:rotate(360deg)}}@keyframes hcpayveil{to{visibility:hidden;pointer-events:none}}@media (prefers-reduced-motion:reduce){#hc-pay-veil{display:none}}</style>` +
    `<script>window.__hcPayEdge={v:'0.4.0',veilMs:${veilMs},t0:Date.now()};setTimeout(function(){var v=document.getElementById('hc-pay-veil');if(v)v.remove();var c=document.getElementById('hc-pay-veil-css');if(c)c.remove();},${veilMs + 300});</script>` +
    `<script>window.__hcPayPtr=${JSON.stringify(snap).replace(/</g, '\\u003c')};</script>` +
    `<link rel="preload" as="fetch" crossorigin="anonymous" href="${CDN}${ptr.rev}/data/hc-ko-payments.json">` +
    `<script async src="${CDN}${loader}/js/hc-pay-loader.js"${sriAttr}></script>`;
}

/* ---------- 요청 처리 (운영·테스트 공용) ---------- */
// deps: { fetchOrigin(request), readAppPtr(), readPayPtr(), host? }
export async function handle(request, env, deps) {
  const url = new URL(request.url);
  const host = deps.host || url.hostname;
  if (host === PAY_HOST) {
    const want = payTarget(request, null, env, url);
    // 포인터는 300ms 상한 — 넘거나 실패하면 결제 HTML 을 기다리게 하지 않고 그대로 통과
    const [res, ptr] = await Promise.all([deps.fetchOrigin(request), want ? withTimeout(deps.readPayPtr(), PAY_PTR_TIMEOUT_MS) : null]);
    if (!want || !ptr || ptr.off === true || payExcluded(ptr, url) || !payTarget(request, res, env, url)) return res;
    return new HTMLRewriter()
      .on('head', { element(el) { el.prepend(buildPayHead(env, ptr, url), { html: true }); } })
      .on('body', { element(el) { el.prepend(PAY_VEIL_HTML, { html: true }); } })
      .transform(res);
  }
  // app.hyperclass.ai — v0.3 동작 그대로. 포인터와 오리진을 동시에(포인터는 엣지 캐시 60초라 보통 수 ms)
  const [res, ptr] = await Promise.all([deps.fetchOrigin(request), env.ENABLED === '0' ? null : deps.readAppPtr()]);
  if (!shouldInject(request, res, env)) return res;
  const head = buildHead(env, ptr, url.pathname);
  return new HTMLRewriter()
    .on('head', { element(el) { el.prepend(head, { html: true }); } })
    .on('body', { element(el) { el.prepend(VEIL_HTML, { html: true }); } })
    .transform(res);
}

export default {
  async fetch(request, env, ctx) {
    // 이 Worker 에서 예외가 나면 오리진 응답으로 통과한다(한글팩 실패가 결제·앱 장애가 되지 않게)
    if (ctx && ctx.passThroughOnException) ctx.passThroughOnException();
    return handle(request, env, { fetchOrigin: (r) => fetch(r), readAppPtr: () => readPointer(env), readPayPtr: () => readPayPointer(env) });
  },
};
