# 커뮤니티·코스·로그인 한글화 — 작업지시서 v1

Oct 30, 2026 · @Benjamin · 대상: Claude Code (레포 `benjaminhyperclass/hyperclass-help-ko`)

> 원문 보관용. 실행 계획·진행은 `PLAN-portal-login.md`.

## 0. 요약

이번 라운드는 한국 고객이 처음 보는 세 화면 — 대시보드 로그인, 클라이언트 포털 로그인, 포털 안의 커뮤니티·코스 — 을 카탈로그(vue-i18n) 방식으로 한글화한다. 새로 만들 것은 많지 않다. 대시보드 로그인 키 61개(`login` 53 · `emailOTPModal` 2 · `termsOfService` 6)는 이미 v4 사전에 번역돼 있고, 포털용 카탈로그 로더 v3.0.1과 사전 3,676건도 8월에 만들어 두었다. 막혀 있던 것은 로더 게이트와 주입 슬롯 선택이다.

**STATE.md 10-29 ⑥의 커뮤니티 트랙 보류를 뒤집는다.** ⑥은 "포털이 GHL 네이티브 ko 로케일로 거의 전부 한국어"라고 판단했다. 10-30 재실측 결과 그 한국어는 벤자민 크롬의 번역 확장이 DOM을 바꾼 것이었다. 확장을 지운 뒤 포털은 사이드바·제목·버튼이 모두 영어이고, 포털 카탈로그에는 ko 로케일이 없다.

보류의 두 번째 사유("오너·관리자에겐 Custom Code가 주입되지 않아 라이브 검증 불가")는 그룹 슬롯에만 해당한다. 포털 레벨 슬롯(Client Portal → Settings → Branding → Advanced → Custom JS)은 오너 세션과 비로그인 `/login` HTML 양쪽에 SSR로 들어간다. 따라서 오너가 직접 검증할 수 있고, 포털 로그인 화면까지 한 슬롯으로 덮는다.

## 1. 실측 근거 (10-30, 번역 확장 제거 후)

고객이 처음 보는 화면은 모두 영어이며, 비밀번호 재설정 화면은 잘못된 한국어까지 뜬다. 포털 확인은 크롬 오너 세션 + 쿠키 없는 fetch, 대시보드는 로그인 세션 + 쿠키 없는 fetch로 했다.

| 화면 | 실측 | 원인 |
| --- | --- | --- |
| 대시보드 `/` 로그인 | 제목·라벨·버튼만 한국어(CSS 오버레이, 해요체). 그 외 상태(OTP·SSO·계정 선택·오류)는 영어 | v4 로더는 로드됨. `allowed()`가 `/v2/location/` 밖이라 `suspended: true` |
| 대시보드 `/forgot_password` | 제목 "계정에 로그인하세요", 버튼 "로그인" — 실제로는 재설정 메일 발송 버튼. 라벨 `Email`, 자리표시자 `Your email address` | 로그인 CSS가 화면 구분 없이 같은 문구를 덮음 (버그) |
| 에이전시 `/agency_dashboard` | 사이드바·제목 전부 영어 | 레거시 은퇴 후 v4 범위 밖. Claude Code 추정 확인 |
| 포털 `/dashboard` | Welcome back · Communities · Courses · Pick where you left off · Continue learning · Pinned communities 등 전부 영어 | 포털에 한글 레이어 없음. 슬롯엔 채팅 위젯 4문구 스크립트뿐 |
| 포털 코스 상세 | Start Course · Instructor Title 등 UI 영어(코스 본문은 한국어 콘텐츠) | 위와 같음 |
| 포털 `/login` (비로그인 HTML) | SSR 영어. 포털 슬롯 스크립트는 HTML에 포함됨 | 위와 같음 |

설계에 쓰일 사실:

- **포털 앱**: Nuxt 3 + vue-i18n composition. 접근자 `#__nuxt.__vue_app__._context.provides[app.__VUE_I18N_SYMBOL__].global`, `mergeLocaleMessage` 있음. 로케일 13개(da·de·en·es·fi·fr-CA·fr-FR·it·nl·no·pt-BR·pt-PT·sv) — ko 없음, en 외 12개는 빈 객체.
- **포털 카탈로그**: en 63개 네임스페이스 5,357키. 대시보드·코스 목록·코스 상세에서 같은 수 — 첫 로드에 전량 적재되므로 1회 덤프로 끝난다.
- **포털 슬롯**: `div#cp-siteCustomFooter > script[data-cp-custom-code=footer]`. 오너 로그인 DOM과 비로그인 `/login` 응답 모두에 있음. 순수 JS 칸이며 `<` 금지 규칙이 적용된다(`js/community-chat-widget-ko.js` 헤더, DECISIONS 2026-08-22).
- **대시보드 로그인**: 엣지 Worker가 비로그인 HTML에도 `__hcPtr`·부트스트랩·로더·어댑터를 넣는다. 로그인 화면에서 로더는 이미 돌고 있고, 막는 것은 게이트뿐이다.
- **로그인 CSS**: 에이전시 Custom CSS(15,460자, `content:` 11개, "Hyperclass — GHL 로그인/가입 페이지 한글화 Custom CSS")는 레포에 없다. GHL 칸에만 있다.
- **사전 문제**: `login.troubleToLogin` 번역에 GHL 미국 지원번호 `+1(888)732-4197`이 "하이퍼클래스 지원팀"으로 들어 있다. whitelabel은 브랜드명만 바꿨다.
- **부트스트랩 핀**: 엣지 Worker `BOOTSTRAP_SHA = 047b529`, 에이전시 슬롯 `@c25c941`. 부트스트랩이 두 번 로드된다(로더·어댑터는 1회). `wrangler.toml` 주석은 "슬롯 1줄째와 같은 값"이라고 적혀 있다.

## 2. 트랙 A — 대시보드 로그인 (app.hyperclass.ai)

목표: 비로그인 화면 전부(로그인·비밀번호 재설정·OTP·SSO·계정 선택·비밀번호 설정/변경)이 카탈로그로 한국어가 되고, CSS 텍스트 오버레이는 없어진다.

**A1. 로그인 CSS 정본화**

- 크롬 로그인 세션에서 `SHELL_STORE.state.company.company.custom_css` 를 그대로 `css/agency-custom.css` 로 저장하고, 손대지 않은 원본으로 커밋 1개.
- 이후 이 칸의 정본은 레포. 슬롯 교체는 벤자민 수동, 교체 전 레포 파일과 칸 내용 SHA-256 대조.

**A2. 로더 v4.19 — 비로그인 라우트 허용**

- `allowed()`에 `PREAUTH` 분기를 두고, 명시 목록에 있는 경로만 true. 후보: `/` · `/forgot_password` · `/change_password` · `/set_password` · `/login/sso` · `/login/token` · `/login/desktop` · `/login/support` · `/eject/login`. 라우터 `getRoutes()`로 실재 확인 후 확정한다. `/login/canny` · `/login/ideas-board` · `/login/shopify` 는 외부 연동이므로 제외를 기본으로.
- 에이전시 라우트는 계속 false(범위 밖, 6-⑤).
- 로그인 직후 `/v2/location/` 로 넘어갈 때 기존 흐름(재병합·excluded 판정·새로고침)이 그대로 이어지는지 확인.
- 캐너리: 비로그인 라우트에는 로케이션이 없어 `canary` 채널이 걸리지 않는다. 부트스트랩에 채널 강제 수단이 없으면 추가한다(예: `?hcch=next` → localStorage 고정, `?hcch=` 로 해제). 이것으로 next 채널을 로그인 화면에서 검증한 뒤 stable 승격.

**A3. 사전 점검** (`host.login` 53 · `emailOTPModal` 2 · `termsOfService` 6)

- 이미 번역돼 있다. 글로서리 · 합쇼체 · R1~R7만 재점검.
- `login.troubleToLogin` · `login.highLevelSupport`: GHL 지원번호와 "24/7 전화" 안내를 6-② 결정대로 고친다. whitelabel 검사에 "타사 전화번호·tel: 링크" 규칙 추가를 검토.
- 커스텀 환영 문구(카탈로그에 없고 CSS에만 있음) "하이퍼클래스에 오신 걸 환영해요" → 남길 경우 "하이퍼클래스에 오신 것을 환영합니다"(6-③).

**A4. CSS v2** (`css/agency-custom.css`)

- "★★★ CSS-ONLY 한국어 텍스트 교체 ★★★" 절 전체(#1~#10의 `font-size:0` + `::after content`)를 삭제. 디자인(레이아웃 · 로고 교체 · 언어 드롭다운 숨김 · 색 · Pretendard · 반응형 · 스코프 가드)은 유지.
- 환영 문구를 남기면 `/` 화면에서만 보이도록 선택자를 좁힌다(재설정 화면 오표시 재발 방지).
- 순서: 로더 v4.19 stable 승격 → 비로그인 새 탭에서 `__hcKoApp.status().booted` 와 카탈로그 한국어 확인 → CSS v2 교체(벤자민) → 새 탭 + 5분 뒤 재확인.

**A5. 검증 (자동화 우선)**

- Playwright 무쿠키 실행으로 `/` · `/forgot_password` · `/login/sso` 스크린샷 + 화면 텍스트의 영문 UI 단어 목록(브랜드·이메일 예시 제외). 결과는 `data/reports/login-check/` 에 날짜별로.
- 가능하면 `ko-sensors.yml` 에 S5(로그인 화면 무인 점검, 일 1회)로 상설화 — GHL 로그인 UI 변경을 바로 잡는다.
- 벤자민 1회: 시크릿 창 로그인, OTP 화면이 뜨는 계정이면 그 화면 캡처.

## 3. 트랙 B — 클라이언트 포털 (커뮤니티·코스·포털 로그인)

목표: community.hyperclass.ai(r6JD 포털)의 로그인·대시보드·커뮤니티·코스·계정 화면이 한국어가 되고, 같은 패키지를 고객 서브계정 포털에 그대로 붙일 수 있다. 포털 테스트는 r6JD만 쓴다(`5nss` 는 회원 소유 — 테스트 금지).

**B0. 슬롯 확인** (벤자민 5분 + Claude Code)

- 포털 레벨 Custom JS 칸의 현재 내용(채팅 위젯 4문구, 1,382자)을 레포 `js/portal-slot.js` 로 보관.
- 칸 끝에 `window.__hcPortalProbe=1;` 한 줄을 넣고, 오너 새 탭과 비로그인 fetch에서 실행·포함을 확인. 확인 뒤 B3 부트스트랩으로 대체.

**B1. EN 카탈로그 추출**

- 오너 세션에서 `global.messages.value.en` 전량을 `data/portal/en.json` 으로(5,357 예상). 비로그인 `/login` 에서도 같은 수인지 Playwright로 확인.
- 포털 빌드 식별자(`_nuxt-clientportal/` 엔트리 파일명)를 함께 기록 — 이후 변경 감지(S1처럼) 기준.

**B2. 사전 보강** — `data/hc-ko-i18n.json` v3.0.0(3,676) → v4.0

- 결손 네임스페이스 9개, 580키: loyalty 142 · badges 125 · analytics 121 · welcomeSetup 113 · discover 30 · emailUnsubscribe 18 · groupCreation 14 · welcomeOnboarding 14 · appOpenBanner 3
- 부분 커버 11개, 약 1,070키 부족: clientportal 122/479(포털 대시보드 홈) · groupInfo 471/730 · groups 46/160 · account 553/667 · channel 106/162 · courses 259/302 · comments 47/78 · library 9/27 · chats 86/102 · leaderboard 30/36 · notifications 8/10
- 기존 3,676건 재검수: 해요체형 종결 382건(예: `auth.passwordPlaceholder` "비밀번호를 입력하세요"), 영문 잔존 54건, 8월 뒤 확정된 글로서리 v1.0.0 미적용. `glossary-audit.py` + `round-review.py`(R1~R7) + DNT + whitelabel을 그대로 건다.
- 번역은 기존 라운드 도구(`i18n-batch-translator.py` → `round-merge.py` → PR → 자동 리뷰)를 포털 소스로 돌린다. 사람 검수는 PR에서.
- `_text` 는 카탈로그 밖 하드코딩 문구만. 기존 8건에서 시작하고 이후는 텔레메트리로 채운다.

**B3. 포털 로더 v4.0** (`js/hc-portal-loader.js`, v3.0.1 승계)

- 유지: Nuxt i18n 탐지 · `mergeLocaleMessage('en')` + 현재 로케일 · `lang=ko` · `_text` 레이어 · Cache Storage · 재병합 감시.
- 추가: 대시보드와 같은 포인터 체계(별도 `hc-portal-rev.json` 또는 기존 포인터의 `portal` 섹션), REV 핀 jsDelivr, 텔레메트리(`app:"portal"`, 미번역 키 보고 → 같은 2주 라운드에 합류), `__hcPortal.status()`.
- 슬롯 내용: `<` 없는 순수 JS 부트스트랩 몇 줄(`document.createElement('script')` 로 jsDelivr 고정 SHA 로더를 붙임) + 채팅 위젯 KO. DECISIONS 2026-08-22의 무손실 검사식을 CI 하드 게이트로.
- 영문 플래시: SSR이 영어로 먼저 그린다. 포털 Custom CSS 칸에 JS 없이도 걷히는 베일을 둔다 — `#__nuxt{visibility:hidden;animation:hc-unveil 0s 2.5s forwards}` + `@keyframes hc-unveil{to{visibility:visible}}`, 로더가 `html[data-hc-ko]` 를 세우면 즉시 visible. 최대 2.5초이고 로더가 죽어도 화면은 남는다.
- 상대 시각·개수 문구(`2 days ago`, `1/10 lessons`, `(11 new posts)`)가 파라미터 카탈로그 키인지 먼저 확인. 키면 사전으로 해결, 아니면 잔존 목록.

**B4. 배포·검증**

- 오너 세션 새 탭 + 5분 뒤: `/dashboard` · `/courses` · 코스 상세 · 레슨 플레이어 · 커뮤니티 피드 · 채널 · 멤버 · 이벤트 · 리더보드 · 계정 설정. 화면별 영문 UI 단어 목록 + `__hcPortal.status()` 보고.
- 비로그인 Playwright: `/login` · 보안 코드 로그인 · 비밀번호 재설정 · 가입.
- 검증 브라우저에 번역 확장이 없는지 먼저 확인(헤드리스 Playwright 결과를 기준으로 삼는다).

**B5. 그룹 슬롯 v2.0.1 정리**

- B4 통과 후 그룹 Custom Code의 v2.0.1 DOM 로더를 제거해 이중 처리를 막는다(벤자민 수동). 롤백은 다시 붙여넣기.

## 4. 트랙 C — 고객 서브계정 포털로 확산

포털 슬롯은 서브계정마다 따로 있어서, B를 끝내도 하이퍼클래스 고객(지식창업자)의 수강생 화면은 그대로 영어다. 수강생은 각 고객의 포털 도메인(`*.clientclub.net` 또는 고객 도메인)으로 들어오므로 엣지 Worker로는 닿지 않고, 슬롯이 유일한 경로다.

1. **스냅샷 복제 여부 확인** (벤자민): Client Portal → Branding → Advanced 코드가 스냅샷으로 넘어가는지. 크롤용 새 서브계정은 만들지 않는 원칙이므로, 다음 실제 신규 가입 계정에서 확인하거나 GHL 문서·지원 문의로 확인한다.
2. **복제되면**: 하이퍼클래스 기본 스냅샷의 포털 슬롯에 B3 부트스트랩을 넣으면 끝. 이후 로더·사전 갱신은 포인터로 전 고객에게 동시에 닿는다.
3. **복제되지 않으면**: 신규 계정 온보딩 체크리스트에 "포털 Custom JS 붙여넣기" 1단계를 더하고, 기존 고객 서브계정에 일괄 적용할 방법(GHL API에 포털 커스텀 코드 필드가 있는지)을 조사해 보고만 한다. 고객 계정 쓰기는 하지 않는다.
4. **고객 슬롯 보호**: 고객이 이미 넣은 코드가 있을 수 있다. 덮어쓰지 않고 앞에 덧붙이는 절차로 문서화한다.

범위 밖: GoKollab 모바일·데스크톱 앱(Custom JS가 닿지 않음). community.hyperclass.ai 엣지 주입(Worker 라우트 + DNS Proxied)은 r6JD 한 곳에만 효과가 있어 B 결과를 보고 판단한다(6-④).

## 5. 트랙 D — 하우스키핑

Claude Code가 10-30에 제안한 4건에 이번 실측에서 나온 것을 더했다. A·B보다 먼저 처리한다(새 파일이 CI 감시에 들어가야 하므로).

- [ ] STATE.md: 10-29 ⑥ 정정 행 추가(번역 확장 오염 · 포털에 ko 로케일 없음 · 포털 레벨 슬롯은 오너에게도 주입) + 「배포 좌표」 이하 낡은 값(로더 v4.11.0, 2줄 슬롯)을 현재값(사전 v4.2.20, 로더 v4.18.1, 부트스트랩 1줄)으로
- [ ] DEPLOY-v4.md 중간부 낡은 값 정리
- [ ] `scripts/verify-deploy.js` EXPECT → 4.18.1 (이번 라운드 뒤 4.19.x)
- [ ] `ko-app-validate.yml` 감시 경로에 `js/hc-bootstrap.js` · `js/hc-confirm-adapter.js` · 신규 `js/hc-portal-*.js` · `css/*.css` 추가
- [ ] 엣지 Worker `BOOTSTRAP_SHA`(047b529) ↔ 에이전시 슬롯(c25c941): 의도된 차이인지 판정해 주석을 고치거나 슬롯을 맞춘다(슬롯 교체 = 벤자민). 이중 로드가 무해하다면 그 근거를 STATE에 기록
- [ ] 교훈 기록(STATE 상단 규칙 + 함정 도감): "라이브 검증 전 크롬 번역 확장(`hyperclass-ko-ext` 등)이 꺼져 있는지 확인. 확장이 켜진 화면은 고객 화면이 아니다. 가능하면 헤드리스 Playwright 결과를 기준으로"
- [ ] 에이전시 화면 영어: 기록만. 고객은 에이전시 라우트를 보지 않으므로 이번 범위 밖(6-⑤)

## 6. 벤자민 결정·수동 작업

결정 5건 중 작업을 멈추는 것은 ② 하나뿐이다. 나머지는 권장안으로 진행하고 바꾸고 싶으면 여기에 적는다.

| # | 결정 | 권장안 |
| --- | --- | --- |
| ① | 제외 계정 `1r0p…` 사용자도 대시보드 로그인 화면은 한국어가 된다 | 수용. 로그인 전에는 사용자를 알 수 없고, 로그인 후에는 기존대로 영어 |
| ② | `troubleToLogin` · `highLevelSupport` 의 GHL 미국 전화번호 | 하이퍼클래스 연락처(카카오 채널 또는 이메일)로 교체. 연락처가 정해지기 전엔 전화 안내 삭제 |
| ③ | CSS 환영 문구 유지 | 유지, 합쇼체로, `/` 에서만 |
| ④ | community.hyperclass.ai 엣지 주입(DNS Proxied) | 보류. B 결과(플래시 체감)를 보고 |
| ⑤ | 에이전시 화면 한글화 | 보류. 고객 비노출 |

수동 작업 (순서대로)

- [ ] B0 포털 Custom JS 칸에 프로브 한 줄 추가 → 확인 후 제거
- [ ] A4 에이전시 Custom CSS v2 붙여넣기
- [ ] B3 포털 Custom JS(부트스트랩 + 채팅 위젯 KO) · 포털 Custom CSS(베일) 붙여넣기
- [ ] B5 그룹 슬롯 v2.0.1 제거
- [ ] C1 스냅샷 복제 여부 확인
- [ ] (D 판정에 따라) 에이전시 슬롯 부트스트랩 핀 정렬

## 7. 작업 순서와 완료 기준

D를 먼저 끝내고, A와 B는 병렬, C는 B가 통과한 뒤에 진행한다.

1. D — STATE 정정 · CI 감시 경로 · verify-deploy (선행)
2. A — A1 → A2·A3 → next 채널로 로그인 화면 검증 → stable 승격 → A4 CSS 교체 → A5
3. B — B0 → B1 → B2(라운드 PR) → B3 → B4 → B5
4. C — C1 결과에 따라 2 또는 3
5. STATE.md 갱신으로 마감

완료 기준

- [ ] 비로그인 새 탭에서 `/` · `/forgot_password` 의 화면 텍스트가 한국어이고, 재설정 화면에 "로그인" 오표시가 없다. 에이전시 CSS의 한글 `content:` 는 환영 문구 1개 이하
- [ ] 포털 `/login` · `/dashboard` · `/courses` · 코스 상세 · 커뮤니티 피드에서 영문 UI 0(사용자 콘텐츠·고유명사 제외), 남은 것은 목록화
- [ ] 포털 사전 커버리지 98% 이상(EN 키 대비), 해요체·영문 잔존은 0 또는 사유 기록
- [ ] 모든 슬롯 교체는 새 탭 + 5분 뒤 확인, CDN = raw = local SHA-256 삼중 대조
- [ ] `scripts/` · 슬롯 변경은 diff 검토 후 벤자민 승인(기존 규칙)
