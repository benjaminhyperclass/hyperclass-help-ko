# 교차 출처 iframe 한글화 — 같은 출처 프록시 조사 (2026-11-06)

> 벤자민 결정(2026-11-05): "iframe 화면은 우회 방법부터 조사". 이 문서는 조사 결과와 PoC 설계다. **구현·배포 아님.**

## 1. 대상 iframe 앱 (2026-11-06 실측, 스냅샷 마스터 계정)
| 화면 | iframe 호스트 |
|---|---|
| 자동화 — 워크플로우 목록·빌더 | `client-app-automation-workflows.leadconnectorhq.com` |
| 설정 — 비즈니스 프로필 | `client-app-crm-settings.leadconnectorhq.com` |
| AI 스튜디오 vibe 빌더(STATE 기록) | `leadgen-vibe-ai-builder.leadconnectorhq.com` |

(AI 에이전트·소셜 플래너·리포팅·결제·직원·커스텀 값·연동 화면은 iframe 없음 — 메인 앱 안에서 렌더 → 기존 한글팩 범위)

## 2. 워크플로우 앱 내부 (번들 `assets/index-*.js` 정적 확인)
- Vue 3 + vue-i18n(`createI18n({legacy:false, locale:'en', fallbackLocale:'en'})`).
- 로케일 13개가 앱 안에 묶여 있음: da·de·en·es·fi·fr_CA·fr_FR·it·nl·no·pt_BR·pt_PT·sv — **ko 없음**. 로케일 청크는 앱 자기 출처에서 동적 import.
- 언어 결정: `사용자 언어 || 로케이션 언어 || 'en'` → 설정으로 한국어 불가.
- 앱 자산(`/assets/*.js`)에 **CORS 헤더 없음** → 다른 출처 페이지에서 모듈로 직접 불러올 수 없음.

## 3. 부모↔iframe 통신 (메인 앱 postMessage 실측)
- 부모가 **Postmate**(`application/x-postmate-v1+json`)로 핸드셰이크·모델 전달. 부모→iframe 메시지의 targetOrigin = **`https://client-app-automation-workflows.leadconnectorhq.com`(고정 출처)**.
- iframe→부모: postmate 응답·`ghl:page-appearance:request`·pendo·`announce-frame-initialized`(localStorageRouter) 등.
- Postmate 부모는 iframe 주소 문자열에서 출처를 계산(`<a href>`로 해석)해 그 출처로만 보내고, 그 출처에서 온 응답만 받는다.

## 4. 결론 — 가능한 유일한 길: 같은 출처 프록시
iframe을 `app.hyperclass.ai` 출처로 띄우면 한글팩이 iframe 문서 안까지 들어가 번역할 수 있다. 필요한 세 조각:
1. **엣지 Worker(새 라우트, 기존 hc-ko-edge와 분리)** `app.hyperclass.ai/__ifr/wf/*` → `client-app-automation-workflows.leadconnectorhq.com/*` 중계.
   - HTML: `/assets/` → `/__ifr/wf/assets/` 치환(자산도 같은 출처로 → CORS 문제 해소, 상대 import도 따라옴), `<head>` 맨 앞에 `history.replaceState`로 경로에서 `/__ifr/wf` 접두사 제거(앱 라우터가 원래 경로를 보게) + 한글팩 iframe용 로더 주입.
   - 자산·청크: 그대로 중계(캐시 허용).
2. **부모 쪽 훅(한글팩 로더, 캐너리 전용)**: Postmate가 iframe 주소를 정하기 전에 `client-app-automation-workflows…` 주소를 `/__ifr/wf/…`로 바꾼다 — iframe `src` 설정과 출처 계산(`<a href>`) 둘 다. 그러면 Postmate가 출처를 `app.hyperclass.ai`로 계산해 핸드셰이크가 맞는다.
3. **iframe 안 번역**: 같은 출처가 되므로 기존 `_text` DOM 층(+필요하면 앱 i18n 메시지 주입)을 iframe 문서에도 적용.

## 5. 위험·확인할 것 (PoC에서 실측)
- 워크플로우 빌더는 **핵심 기능** — 통신이 깨지면 자동화 화면 전체가 멈춤 → **캐너리 1곳 + 즉시 끄는 스위치**, 처음엔 벤자민 브라우저 수동 주입으로만.
- API 호출 CORS(`backend`/`services.leadconnectorhq.com`가 `app.hyperclass.ai` 출처를 허용하는지 — 메인 앱이 같은 출처라 허용될 가능성 높음).
- iframe 안 localStorage가 메인 앱과 같은 저장소를 쓰게 됨(키 충돌 여부).
- pendo·Sentry 등 3rd-party가 출처를 검사하는지.
- iframe 새로고침 시 접두사 없는 경로로 가면 메인 앱이 iframe 안에 뜸 → Worker가 `Sec-Fetch-Dest: iframe` 요청을 감지해 되돌리는 보호 필요.
- GHL이 앱 번들을 바꾸면(해시 파일명) Worker는 그대로 통과 — 깨질 곳은 Postmate 출처 계산 훅뿐.

## 6. PoC 순서 (승인 필요)
1. Cloudflare에 새 Worker + 라우트 `app.hyperclass.ai/__ifr/*`(기존 트래픽 무영향 — 이 경로를 아무도 안 씀).
2. 벤자민 브라우저 탭에서만 부모 훅을 수동 주입 → 워크플로우 목록·빌더 열기·저장·트리거 편집 통과 여부 표.
3. 통과하면 iframe 안에 한글 레이어 시험 → 결과를 한글팩 세션에 넘겨 로더 캐너리(r6JD)로 편입. 실패 항목은 "범위 밖" 확정.
4. 같은 방식으로 `client-app-crm-settings`(비즈니스 프로필) 반복.
