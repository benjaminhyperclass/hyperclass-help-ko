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

## 7. PoC 실측 결과 (2026-11-06 밤, 스냅샷 마스터 `buBPs5x9kdFpGMOagWa8`, 벤자민 맥 크롬 1개 탭)
배포: Worker `hc-ifr-proxy` + 라우트 `app.hyperclass.ai/__ifr/*`·`/assets/*`(Fail open, workers.dev 끔). 부모 훅은 해당 탭에만 수동 주입.

| 시험 | 결과 | 비고 |
|---|---|---|
| 메인 앱 영향 | ✅ 없음 | 훅 없는 탭·훅 있는 탭 모두 대시보드 정상. 메인 앱은 `/assets/`·`/__ifr/` 미사용 재확인 |
| 워크플로우 목록 | ✅ | iframe src `app.hyperclass.ai/__ifr/wf/…`, `contentDocument` 직접 접근, 폴더·워크플로우 데이터 로드 |
| Postmate 핸드셰이크·인증 | ✅ | 훅으로 iframe src + `<a href>` 출처 계산을 같이 바꾸면 그대로 맞음 |
| 워크플로우 빌더 열기 | ✅ | 자동 저장 안내 모달 → "Continue with Manual Save" 선택 |
| 트리거 편집 패널 | ✅ | 폼 필터 값 표시, 취소/저장 동작 |
| 저장 | ✅ | 내용 변경 없이 트리거 저장→Save → "Saved", 목록 최근 수정 11-06 10:03 PM, Published 유지 |
| API 호출 | ✅ | backend·services.leadconnectorhq.com 실패 0(워크플로우). 같은 출처 `app.hyperclass.ai` Origin 허용됨 |
| 비즈니스 프로필(crm-settings) | ✅ 로드 | 데이터 표시. `check-whitelabel-domain` 400 1건 — 브랜드 도메인 비어 있어서로 추정(원 출처 비교 미실시). 저장은 미시험(워크플로우 저장과 같은 경로) |
| 콘솔 오류 | ✅ 0 | Sentry·pendo 동작 |
| iframe 안 한글(기존 사전 `core._text` 그대로) | ✅ 부분 | 워크플로우 28곳·비즈니스 프로필 27곳 즉시 한글화(워크플로우 목록·폴더 만들기·AI로 만들기·표준 빌더·등록 이력·실행 로그·새 트리거 추가·폼 제출·대기·비즈니스 프로필 설정 등) |

### iframe 안 미번역 상위(사전 보강 대상)
- 워크플로우: Builder · Settings · Draft · Publish · Saved · Save · Add · Stats · Explain this workflow · Explain · Export · Name · Status · Timestamp · Error · Previous · Next · Deleted · New smart list · Customize list · Search · Created on · Published · Email
- 비즈니스 프로필: General Information · Location ID · Business Logo · Upload · Remove · Friendly Business Name · Legal Business Name · Business Email · Business Phone · Add Domain · Business Website · Business Niche · Choose one.. · Update Information · Business Information · Business Type · Pick Business Type · Business Industry · Pick Business Industry · Business Registration ID Type · Business Registration Number · Business Regions of Operations · Africa · Asia · Europe · Latin America · USA and Canada · Business Physical Address · Street Address · City · Postal/Zip Code · State / Prov / Region · Country · Time Zone · Platform Language · Outbound communication language for custom values · Update
  (짧은 일반어 Builder·Settings·Save 등은 전역 `_text`에 없을 뿐 범위 사전에 있을 수 있음 — iframe 문서에도 범위 규칙을 적용하면 줄어듦)

### 발견한 것 · 편입 전 고칠 것
1. **`/assets/*` 라우트가 실제로 필요**: 번들의 `__vite__mapDeps`가 `"assets/X.js"`를 루트 기준(`/assets/…`)으로 미리 불러온다(워크플로우 화면 한 번에 140여 건). 지금은 Referer로 앱을 고르는데(`/settings/` → crm), CSS 안 `url()`처럼 Referer가 CSS 파일인 경우 오판 가능 → **Worker가 JS 본문의 `"assets/` 를 `"__ifr/{key}/assets/` 로 바꾸면 루트 `/assets/*` 라우트를 없앨 수 있다**(권장).
2. **fail-open 함정**: Worker가 죽거나 한도 초과면 `/__ifr/…`가 메인 앱 원본으로 가서 iframe 안에 메인 앱이 뜬다 → 훅은 `HEAD /__ifr/wf/`의 `x-hc-ifr` 헤더 확인 뒤에만 켠다(`parent-hook.poc.js` 반영).
3. **localStorage 공유**: iframe 앱이 이제 메인 앱과 같은 저장소를 쓴다(예: `workflow-sidebar-visible`). 지금까지 충돌 징후 없음 — 캐너리 기간 관찰.
4. 훅은 `<a href>` 세터 전역 교체 — 대상 두 호스트만 바꾸므로 다른 링크 영향 없음.
5. AI 스튜디오(`leadgen-vibe-ai-builder`)는 Worker `APPS`에 아직 없음 — 같은 방식으로 추가 가능, 미시험.

### 다음 (한글팩 세션 판단)
1. Worker: JS `"assets/` 치환 → `/assets/*` 라우트 제거(위 1).
2. 로더 캐너리(r6JD) 편입: `parent-hook.poc.js` + iframe document에 기존 DOM 번역(범위 규칙 포함) 부착.
3. 사전 보강: 위 미번역 목록.
4. 캐너리 1~2일 관찰 후 전체.
