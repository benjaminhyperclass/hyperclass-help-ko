# hc-ifr-proxy (PoC)

교차 출처 iframe 앱(워크플로우·비즈니스 프로필)을 `app.hyperclass.ai` 출처로 중계한다. 설계·위험: `docs/research/iframe-proxy-2026-11-06.md`.

- 라우트(Cloudflare, 존 hyperclass.ai): `app.hyperclass.ai/__ifr/*`, `app.hyperclass.ai/assets/*` — 둘 다 메인 앱이 쓰지 않는 경로(2026-11-06 실측: 메인 앱 같은 출처 요청은 `/favicon.ico`·`/_pm`뿐).
- 기존 한글팩 Worker(hc-ko-edge)와 별개. 끄기 = 라우트 삭제 또는 `OFF = true` 배포.
- 부모 쪽(메인 앱) 주소 바꾸기는 PoC 단계에서 브라우저 수동 주입만 — 로더 편입은 한글팩 세션 결정.
