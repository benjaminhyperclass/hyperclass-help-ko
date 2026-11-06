# hc-ifr-proxy (PoC)

교차 출처 iframe 앱(워크플로우·비즈니스 프로필)을 `app.hyperclass.ai` 출처로 중계한다. 설계·위험·실측 결과: `docs/research/iframe-proxy-2026-11-06.md`.

## 배포 상태 (2026-11-06, 벤자민 승인 "추천하는데로해보자")
- Worker `hc-ifr-proxy` — 하이퍼클래스 Cloudflare 계정, 코드 = `src/index.js`.
- 라우트(존 hyperclass.ai, 둘 다 **Fail open**): `app.hyperclass.ai/__ifr/*`, `app.hyperclass.ai/assets/*`.
  둘 다 메인 앱이 쓰지 않는 경로(실측: 메인 앱 같은 출처 요청은 `/favicon.ico`·`/_pm`뿐) → 훅 없이는 아무도 안 탄다.
- workers.dev 공개 주소: **끔**(열린 중계 노출 방지).
- 기존 한글팩 Worker(hc-ko-edge, `app.hyperclass.ai/*`)는 건드리지 않음 — 더 구체적인 라우트가 우선.

## 끄기
1. 즉시: Cloudflare → hc-ifr-proxy → Domains → 라우트 2개 삭제(훅이 있어도 헬스 확인 실패로 원래 주소 사용).
2. 또는 `OFF = true` 로 바꿔 배포.

## 부모 쪽 훅
`parent-hook.poc.js` — PoC 에서는 벤자민 탭에 수동 주입만 했다. 로더 캐너리 편입은 한글팩 세션 결정.
Worker 가 죽으면 fail-open 으로 `/__ifr/…` 가 메인 앱 원본에 닿아 iframe 안에 메인 앱이 뜨므로, 훅은 반드시 헬스(`x-hc-ifr` 헤더) 확인 뒤에만 주소를 바꾼다.

## 대시보드 코드 편집 메모
- API 직접 업로드(`/workers/scripts/…/content`)는 Cloudflare WAF 가 403 으로 막음(코드 안 `<script>` 문자열). 우회하지 말고 대시보드 편집기에 붙여넣기 → Deploy.
