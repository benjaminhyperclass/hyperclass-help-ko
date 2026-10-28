# hc-ko-edge — 엣지 주입 Worker (2단계 스파이크)

목적: 영문 플래시(콜드 캐시 ≈3초)를 0 으로. GHL 이 인증 후 XHR 로 Custom JS 를 넣는 시점을 기다리지 않고,
Cloudflare Worker 가 HTML 응답의 `<head>` 맨 앞에 **베일 + 부트스트랩**을 끼워 넣는다.

전제 (2026-10-28 실측)
- `hyperclass.ai` 네임서버 = Cloudflare (walk/bruce.ns.cloudflare.com) ✅
- `app.hyperclass.ai` → CNAME `whitelabel.ludicrous.cloud` (현재 DNS only / 회색) — GHL 도 Cloudflare for SaaS
- Cloudflare 공식 O2O(orange-to-orange): 고객 존 레코드를 Proxied 로 바꾸면 고객 존 설정(Worker 라우트)이 먼저 적용된 뒤 GHL 존으로 간다

## 켜는 순서 (벤자민 · 되돌리기 10초)
1. `cd workers/hc-ko-edge && npm i && npx wrangler login` (브라우저 OAuth) → `npx wrangler deploy`
2. Cloudflare 대시보드 → hyperclass.ai → SSL/TLS = **Full (strict)** 확인
3. DNS → `app` 레코드 → Proxy status **Proxied(주황)** 로 전환
4. 시크릿 창에서 `app.hyperclass.ai/v2/location/r6JD…/dashboard` → 콘솔 `__hcEdge` 에 `lifted`(ms) 가 찍히면 성공
5. 문제 시: DNS 를 **DNS only(회색)** 로 되돌림 → 즉시 종전 경로. Worker 는 그대로 둬도 무해(라우트에 트래픽이 안 옴)

킬스위치: Worker 변수 `ENABLED="0"` (대시보드에서 변경, 재배포 불필요) 또는 `?hcko=off`.

## 검증
`npm test` — 로컬 workerd 에 가짜 오리진을 붙여 HTML 주입 / JSON·POST 통과 / `?hcko=off` 미주입을 확인한다 (7건).

## 알려진 위험
- GHL 커스텀 호스트네임 인증서 갱신: O2O 는 Cloudflare 가 공식 지원하지만, 갱신 실패 시 회색으로 되돌리면 된다. 갱신 주기(90일)에 한 번 확인
- 웹소켓·대용량 업로드는 Worker 가 `fetch(request)` 로 그대로 통과시킨다. 이상 시 `ENABLED="0"`
- 베일 최대 2.5초: 로더가 떠도 host composer 를 못 찾으면 2.5초 뒤 걷힌다(검정 화면 없음)
