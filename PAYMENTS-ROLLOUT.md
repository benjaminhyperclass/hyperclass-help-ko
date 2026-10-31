# 결제 페이지 한글팩 — 배포 순서 (작업지시서 v1 8절 E4) · ⏳ 실행 전

> 2026-10-31 작성. **배포·DNS 전환은 아직 하지 않았다**(벤자민 지시: 준비되면 보고만). 상태 정본은 `docs/STATE.md`.

## 1. 구조

```
links.hyperclass.ai (CNAME brand.ludicrous.cloud, 지금 DNS only = 회색)
  └─ (Proxied 전환 뒤) 엣지 Worker hc-ko-edge v0.4 — 결제 앱 경로의 200 text/html GET 에만
       ├─ 베일(최대 1.2초, 상한 1.5초) — CSS 만으로 걷힘(인라인 스크립트가 막혀도), 동작 줄이기 환경은 베일 없음
       ├─ window.__hcPayPtr = data/hc-pay-rev.json 스냅샷(60초 엣지 캐시) { rev, off, excludePaths }
       ├─ preload: 결제 사전 jsDelivr @rev data/hc-ko-payments.json
       └─ <script async integrity=sha384-…> jsDelivr @loader.stable js/hc-pay-loader.js   (?hcch=next 면 loader.next)
```
- 대상 경로(결제 앱 라우터 실측): `/payment-link/:id` · `/invoice/:id` · `/estimate/:id` (+ 각 `-ssr`) · `/gift-card/[preview|product-preview|sample|terms-and-conditions/]:id`.
- 그 밖(트리거 링크 3xx 리다이렉트·404·JSON·POST 본문·`/`·CSP 헤더가 붙은 응답·`excludePaths`·포인터 실패/300ms 초과/`off`)은 **아무것도 넣지 않고 통과** — 로컬 테스트 27건(결제)으로 증명, 앱 경로 12건 동일(`workers/hc-ko-edge` `npm test` 39/39). Worker 예외 시 원본 통과(passThroughOnException).
- 로더는 카탈로그 병합·`lang=ko`·탭 제목·약관 안내문(구독 동의·체험 종료 문장)만 바꾼다. 폼 입력·결제 버튼·네트워크 요청은 건드리지 않는다.

## 1-2. 현재 좌표 (2026-10-31)

| 항목 | 값 |
|---|---|
| 결제 사전 | `data/hc-ko-payments.json` v1.0.2 — 커밋 `5533c0a`(포인터 rev) · 337키 · 구독 동의 문구 승인안 고정 |
| 결제 로더 | `js/hc-pay-loader.js` v1.0.1 — 커밋 `c3d2465`(포인터 loader.stable=next) · SRI `sha384-ajCbWDHQNxJtC68K5wixDLr68A5mMM0WKZjTaxtWESW9byyQXd18HA/pDiRzPamr`(jsDelivr 실파일과 일치) |
| 포인터 | `data/hc-pay-rev.json` — CI 가 rev·loader 40자·main 조상·SRI 해시 대조·REV_BUILTIN 을 하드 게이트로 본다 |
| Worker | `hc-ko-edge` v0.4.0 — 레포에만. **미배포**(실배포는 v0.3.0 + BOOTSTRAP 3bc900d). `wrangler.toml` 에 `links.hyperclass.ai/*` 라우트·`PAY_ENABLED`·`PAY_VEIL_MS` |
| 실측 | 실제 Worker 주입 HTML(`buildPayHead`)을 실제 결제 링크에 끼워 jsDelivr 로더(SRI)로 실행: applied·lang ko·탭 "결제 링크"·구독 문장 승인안·베일 1.0초·무결성 오류 0. 영문 단어 49 → 5(상품 데이터 Starter·Monthly·PG, 하단 Powered by) |

## 2. 배포 순서 (벤자민 승인 후)

1. **Worker 배포** — `cd workers/hc-ko-edge && npx wrangler deploy` (라우트 `links.hyperclass.ai/*` 포함). DNS 가 회색인 동안 결제 도메인 트래픽은 Worker 를 지나지 않는다. app.hyperclass.ai 동작은 v0.3 과 같다(테스트 12건 동일).
2. **DNS 전환(벤자민 승인)** — Cloudflare DNS 에서 `links` 레코드를 Proxied(주황)로. SSL/TLS Full (strict).
3. **새 탭 확인**(번역 확장 끈 시크릿 창) — 결제 링크를 열기만 한다(입력·결제 금지):
   ```js
   __hcPay.status()   // applied true · termsFixed 1 · title '결제 링크' · rev = 포인터 rev · error null
   ```
   그리고 `python3 scripts/login-check.py --only pay` → 영문 단어 ≤ 5(상품 데이터 Starter·Monthly·PG, 하단 Powered by).
4. **트리거 링크 1개**가 전과 같이 리다이렉트되는지(3xx + 같은 Location) 확인 — 실제 트리거 링크 URL 이 필요하다(벤자민).
5. 상품 설정에서 가격 이름 "Monthly" → "월간"(벤자민, 카탈로그 밖 데이터).

## 3. 롤백 (빠른 순)
- **DNS `links` → DNS only(회색)** — 즉시 종전 경로(Worker 를 지나지 않음).
- 포인터 `data/hc-pay-rev.json` 의 `"off": true` 커밋 — 60초 안에 주입 중단(Worker 는 통과).
- Worker 변수 `PAY_ENABLED="0"`(결제만) 또는 `ENABLED="0"`(전부).

## 4. 열린 질문
- **제외 계정(1r0p…)**: 고객 서브계정의 결제 링크·인보이스도 이 도메인을 쓰면 함께 한국어가 된다. 페이지 HTML·`__NUXT__`·pinia 에는 로케이션 ID 가 없고 결제 미리보기 API 응답에만 있다(10-31 실측) → 로더가 요청을 가로채지 않는 한 자동 판별 불가. 지금 수단은 포인터 `excludePaths`(결제 링크·인보이스 ID 목록). **벤자민 결정**: ⓐ 전부 한국어 수용 ⓑ 1r0p 의 링크 ID 를 excludePaths 로 관리.
