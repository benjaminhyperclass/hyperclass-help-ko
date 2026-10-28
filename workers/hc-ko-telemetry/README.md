# hc-ko-telemetry — 미번역 키 수집 Worker (2단계 ②)

로더 v4.14+ 가 라우트마다 세션당 1회, 적용 8초 뒤 보내는 집계(네임스페이스별 영문 리프 수·샘플 키·보이는 텍스트 한글 비율·베일 해제 ms)를
KV 에 30일 보관하고, `GET /digest?date=` 로 하루치를 모아 준다. `.github/workflows/ko-telemetry-digest.yml` 이 매일 받아
`data/reports/telemetry/<date>.md` 와 `data/telemetry/missing-top.json`(= 다음 번역 라운드 작업 목록)을 커밋한다.

식별자 없음: 로케이션 ID 는 로더가 `:loc` 으로 치환하고 Worker 가 포함 시 400 으로 거부한다. IP·UA 는 저장하지 않는다(레이트리밋 카운터만 IP 해시 1분).

## 켜는 순서 (벤자민, 1회)
1. `cd workers/hc-ko-telemetry && npm i -D wrangler@4 && npx wrangler login`
2. `npx wrangler kv namespace create TEL` → 출력된 id 를 `wrangler.toml` 의 `REPLACE_WITH_KV_ID` 에
3. `npx wrangler secret put DIGEST_TOKEN` (긴 임의 문자열) → `wrangler.toml` 의 `DIGEST_TOKEN` 줄 삭제 → `npx wrangler deploy`
   → 주소 `https://hc-ko-telemetry.<account>.workers.dev`
4. 포인터 `data/hc-ko-app-rev.json` 에 `"telemetry": {"url": "https://hc-ko-telemetry.<account>.workers.dev/r"}` 추가 커밋 → 로더가 다음 로드부터 전송
5. GitHub 시크릿: `gh secret set HC_TELEMETRY_URL` (= `https://hc-ko-telemetry.<account>.workers.dev`), `gh secret set HC_TELEMETRY_TOKEN`
6. 다음날 `data/reports/telemetry/` 에 첫 보고서. 수동 실행: Actions → "텔레메트리 일일 집계" → Run workflow

끄기: 포인터에서 `telemetry` 키 삭제(전 고객, 다음 로드부터) / 한 브라우저 `localStorage.hcKoTelemetryOff='1'`.

## 검증
`npm test` — 로컬 workerd + KV: 수신 204 / 로케이션 ID 거부 / 비JSON 400 / digest 401·200·정렬 / 레이트리밋 429 (9건).

## 라이브 선측정 (2026-10-28, r6JD AI 스튜디오 라우트, 전송 없이 계산만)
52ms · 3.2KB · 네임스페이스 140 중 영문 잔존 42. 상위: superagentsApp 965/1593, agentLogsApp 820/1338,
powerDialerApp 567/574(신규 앱), agentStudioApp 388/2211 — 9월 이후 GHL 이 추가한 키들. 보이는 텍스트 한글 104 / 영문 58.
