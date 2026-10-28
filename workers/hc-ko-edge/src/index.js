/* Hyperclass 한글팩 — 엣지 주입 Worker v0.3.0 (2026-10-28)
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

export default {
  async fetch(request, env) {
    // 포인터와 오리진을 동시에 — 포인터는 엣지 캐시(60초)라 보통 수 ms
    const [res, ptr] = await Promise.all([fetch(request), env.ENABLED === '0' ? null : readPointer(env)]);
    if (!shouldInject(request, res, env)) return res;
    const head = buildHead(env, ptr, new URL(request.url).pathname);
    return new HTMLRewriter()
      .on('head', { element(el) { el.prepend(head, { html: true }); } })
      .on('body', { element(el) { el.prepend(VEIL_HTML, { html: true }); } })
      .transform(res);
  },
};
