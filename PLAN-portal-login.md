# PLAN — 커뮤니티·코스·로그인 한글화 (작업지시서 v1, 2026-10-30) · 착수 2026-10-31

원 지시서: `WORKORDER-portal-login-v1.md` (벤자민 10-30). 이 파일은 **실행 계획 + 진행 기록**이다. 새 세션은 `docs/STATE.md` → 이 파일 순으로 읽는다.

## 0. 착수 전 실측 (2026-10-31, 헤드리스 Playwright · 무쿠키 · 번역 확장 없음)

| 대상 | 결과 | 계획에 주는 영향 |
|---|---|---|
| `app.hyperclass.ai/` · `/forgot_password` | 엣지 v0.3.0 → 부트스트랩 1.2.0(source edge, channel **stable** — 로케이션 없음) → 로더 4.18.1 `allowedHere:false, suspended:true, location:null`. `lang=en` | A2 는 게이트만 열면 된다. 비로그인 라우트는 canary 가 안 걸리므로 채널 강제 수단 필요 |
| 라우터 `getRoutes()` | `/forgot_password` `/change_password` `/set_password` `/login/sso` `/login/token` `/login/desktop` `/login/support` `/eject/login` 실재. 로그인 화면 = `/`(경로 '') | PREAUTH 후보 9개 전부 실재 확인 |
| 에이전시 Custom CSS | 비로그인 HTML 에 `<style>` 로 들어 있음(15,460자, 헤더 "Hyperclass — GHL 로그인/가입 페이지 한글화 Custom CSS") | A1 을 세션 없이 추출 가능. SHELL_STORE 대조는 콘솔 스니펫으로 벤자민 1회(선택) |
| `/forgot_password` 화면 | "하이퍼클래스에 오신 걸 환영해요 / 계정에 로그인하세요 / Email / Your email address / 로그인" | 지시서의 재설정 오표시 버그 재현 |
| v4 사전 `host.login` | 53키 존재. `troubleToLogin` 에 `tel:+18887324197` / `highLevelSupport` "24/7 전화 문의" | A3 결정 ② |
| `community.hyperclass.ai/login` | Nuxt i18n, 로케일 13개(ko 없음, en 외 0키), **en 63 ns · 5,393키**(지시서 10-30 오너 세션 5,357). 슬롯 `#cp-siteCustomFooter > script[data-cp-custom-code=footer]` 1,382자 DOM 에 있음 | B1 을 비로그인으로 추출 가능. 오너 세션 수와 36키 차이는 기록만 |
| 포털 사전 v3.0.0 | 3,676건 중 현행 en 과 일치 3,635 · 고아 41 · **미번역 1,758** · 해요체형 382 · 영문만 55 | B2 범위 확정 |
| wrangler | 로그인됨(OAuth) | 엣지 Worker 재배포 가능 |

## 1. 대상 파일

| 파일 | 작업 | 트랙 |
|---|---|---|
| `docs/STATE.md` | ⑥ 정정 행 · 배포 좌표 현행화 · 확장 오염 교훈 · BOOTSTRAP 이중 로드 판정 | D |
| `DEPLOY-v4.md` | 중간부 낡은 값(v4.11.0·2줄 슬롯) 정리 | D |
| `scripts/verify-deploy.js` | EXPECT 4.18.1 / 4069893 / _text 건수 (라운드 뒤 4.19.x) | D (승인 대상) |
| `.github/workflows/ko-app-validate.yml` | paths 에 bootstrap·adapter·`js/hc-portal-*.js`·`css/*.css` | D |
| `workers/hc-ko-edge/wrangler.toml` | BOOTSTRAP_SHA 주석 정정 → A2 에서 새 부트스트랩 SHA | D·A |
| `css/agency-custom.css` | A1 원본 커밋 → A4 v2 | A |
| `js/hc-bootstrap.js` | v1.3.0 `?hcch=next` 채널 강제(localStorage 고정, `?hcch=` 해제) | A |
| `js/hc-ko-app-loader.js` | v4.19.0 PREAUTH 분기 | A |
| `_source/hc-ko-app.pretty.json` → split | A3 login 문구 교정 | A |
| `scripts/login-check.py` (신규) | 무쿠키 로그인 점검 → `data/reports/login-check/` | A (승인 대상) |
| `.github/workflows/ko-sensors.yml` | S5 로그인 무인 점검(일 1회) | A |
| `data/portal/en.json` · `data/portal/build.json` (신규) | B1 추출 + 빌드 식별자 | B |
| `data/hc-ko-i18n.json` | v3.0.0 → v4.0 | B |
| `js/hc-portal-loader.js` · `js/hc-portal-bootstrap.js` · `js/portal-slot.js` · `css/portal-custom.css` (신규) | B3 | B |
| `docs/PORTAL-ROLLOUT.md` (신규) | C 확산 절차·조사 결과 | C |

## 2. 의존성

- `ko-app-validate.yml` paths 확장(D) → 이후 bootstrap·portal 파일 커밋이 CI 를 탄다. **D 먼저.**
- 부트스트랩 v1.3 커밋 SHA → `wrangler.toml` BOOTSTRAP_SHA → `wrangler deploy` → 로그인 화면에서 `?hcch=next` 가능. 슬롯 1줄째(c25c941)는 엣지가 있으면 가드로 무동작 — 벤자민이 맞추면 엣지 OFF 시 폴백도 같은 기능.
- 로더 v4.19 커밋 → 포인터 `loader.next` → 로그인 화면 next 검증 → `loader.stable` 승격 → **그 다음에만** CSS v2 교체(먼저 바꾸면 로그인 화면이 영어가 된다).
- CSS v1 이 남아 있는 동안 v4.19 가 돌아도 무해(CSS `font-size:0`+`::after` 가 화면을 덮을 뿐, DOM 은 카탈로그 한국어).
- A3 사전 교정 → split → validate → ko-app-pointer 가 `rev` 전진(사전 push 뒤 2분 다른 push 금지, 미결 #11).
- B1 en.json → B2 결손 목록 → 번역 → v4.0 사전 → B3 로더가 v4.0 을 읽음 → B4 → B5 → C.
- 포털 슬롯은 `<` 금지(무손실 검사식) — 부트스트랩·슬롯 파일은 CI 하드 게이트.

## 3. 순서와 이유

1. **D** — CI 감시 경로가 먼저 넓어져야 이후 커밋이 검증된다. STATE 정정으로 ⑥ 오판을 즉시 막는다.
2. **A1** — CSS 원본을 레포에 고정(이후 diff 기준).
3. **A2·A3** — 로더·부트스트랩·사전 교정은 독립. 부트스트랩 → Worker 재배포 → 로더 next → 검증 → stable.
4. **B1** (A 와 병렬) — 비로그인 추출이라 대기 없음.
5. **A4·A5** — CSS v2 준비 + 점검 스크립트, CSS 교체는 벤자민.
6. **B2** — 번역 라운드(포털 소스). **B3** 로더·슬롯 파일. B4 비로그인 검증 → 오너 화면은 벤자민/크롬.
7. **C** — 조사·문서.

## 4. 완료 기준 (지시서 7절 그대로)

- [ ] 비로그인 새 탭 `/` · `/forgot_password` 화면 텍스트 한국어, 재설정 화면 "로그인" 오표시 없음, 에이전시 CSS 한글 `content:` ≤ 1(환영 문구)
- [ ] 포털 `/login` · `/dashboard` · `/courses` · 코스 상세 · 커뮤니티 피드 영문 UI 0(사용자 콘텐츠·고유명사 제외), 잔존 목록화
- [ ] 포털 사전 커버리지 ≥ 98%(EN 키 대비), 해요체·영문 잔존 0 또는 사유 기록
- [ ] 모든 슬롯 교체는 새 탭 + 5분 뒤 확인, CDN = raw = local SHA-256 삼중 대조
- [ ] `scripts/` · 슬롯 변경은 diff 검토 후 벤자민 승인 — `scripts/` 는 **PR 로** 올려 머지 = 승인

## 5. 벤자민 수동 (순서대로)

- [ ] B0 포털 Custom JS 칸 끝에 `window.__hcPortalProbe=1;` → 확인 후 제거 (선택 — B3 붙여넣기가 같은 확인을 겸함)
- [ ] (A2 뒤) 에이전시 슬롯 1줄째 부트스트랩 SHA 를 엣지와 같은 값으로 (선택, 폴백 정렬)
- [ ] A4 에이전시 Custom CSS v2 붙여넣기 — 로더 v4.19 stable 승격·검증 **뒤**
- [ ] B3 포털 Custom JS(부트스트랩 + 채팅 위젯 KO) · 포털 Custom CSS(베일)
- [ ] B5 그룹 슬롯 v2.0.1 제거
- [x] C1 스냅샷 복제 여부 확인 — 복제 안 됨 → C3 확정
- [ ] 결정 ② 하이퍼클래스 연락처(카카오 채널/이메일) — 정해지기 전엔 전화 안내 삭제로 진행

## 6. 진행

- [x] D1 STATE 정정·좌표 현행화·교훈 — 상단 규칙(확장 OFF·헤드리스 기준) · ⑥ 정정 행 · 배포 좌표 표 교체 · 게이트/미결 #4·#6·#8 해소 표기 · #12 신설
  영향: 없음(문서). 새 세션은 STATE 상단 '진행 중 라운드' 줄로 이 PLAN 에 온다
- [x] D2 DEPLOY-v4 정리 — 준비된 것·§1 불릿·§6·문제표·로더 롤백(포인터)·전면 중단·한계 2 주석
  영향: 없음(문서)
- [x] D3 verify-deploy EXPECT — PR #9 머지(2f62775), 4.19.0/e30d4d2/8781
- [x] D4 validate paths — bootstrap·adapter·`js/hc-portal-*.js`·`js/portal-slot.js`·`css/*.css` + 포털 파일 node --check·꺾쇠·무손실 검사(있을 때만). 로컬: 무손실식이 위젯 통과·`i<n` 샘플 exit 1
  영향: 이후 부트스트랩·포털·CSS 커밋이 validate 를 탄다(→ 성공 시 ko-app-pointer workflow_run, core/apps 불변이면 무동작)
- [x] D5 BOOTSTRAP_SHA 판정 — 무해(엣지가 먼저·`__hcBoot` 가드·슬롯은 폴백). wrangler.toml 주석 정정, STATE 배포 좌표에 근거 3개
  영향: 슬롯 정렬은 벤자민 선택(A2 부트스트랩 v1.3 SHA 로 한 번에)
- [x] A1 CSS 원본 — 82a8246, 비로그인 HTML 의 style 추출(15,460자, SHA-256 9a502c4…). ⚠️ v1.3.0 자체 버그 발견: `.foot-note::전`·`.h6::후`(의사 요소명 번역 오염)로 ::before/::after 가 무효인데 짝 `font-size:0` 은 살아 있어 **약관 안내문·재설정 완료 메시지가 투명** — v2 에서 해소
  영향: A4 v2 의 diff 기준
- [x] A2 로더 v4.19.0 · 부트스트랩 v1.3.0 = `3bc900d`(CDN=raw=local) → 포인터 `loader.next` 76bc410. 적대적 리뷰 H1·M4(M3 문서화)·L2 반영, 헤드리스 시나리오 10종 통과
  ✅ 엣지 배포(Claude Chat, Worker b60d5e58) → ?hcch=next 검증(벤자민·Claude Code) → **stable 승격 d719342** → 무쿠키 stable 확인 → S5 154→97(app 0)
  영향: stable 승격 전까지 고객 로그인 화면은 종전(영어 + CSS v1 오버레이). 승격 후에만 A4 CSS 교체
- [x] A3 사전 v4.2.21 — e30d4d2 → 포인터 27010b3, CDN=raw=local. login 11건(호스트+onboardingApp 지문 앱 사본), 앱 내 GHL 번호 4건, `_text` 5건. 해요체: login 은 `~세요` 명령형만(관례 유지)
  영향: 결정 ② 연락처 확정 시 troubleToLogin 의 a 태그에 href 만 추가. whitelabel '타사 전화번호' 규칙은 scripts PR 로(검토)
- [x] A4 CSS v2.0.0 파일 — 25401d2. [x] 칸 교체(벤자민·Claude Chat 2026-10-31) — 운영 = 레포(끝 줄바꿈 제외) 일치, S5 2회(5분 간격) app 영문 0
  영향: 칸 교체 전 SHA-256 eea14b2… 대조
- [x] A5 `scripts/login-check.py` + S5(ko-sensors 00시 UTC) + validate C14 — PR #11 머지(f47db07), Actions 실행 성공. 측정: app 0 · portal 97 · pay 49
- [x] B1 en.json · build.json — 42ce67c, 63 ns · 5,393키, 엔트리 DDSGwuF2.js. B0 원본 `js/portal-slot.js`(⚠️ 참/거짓 번역 오염 → 런타임 ReferenceError, 위젯 치환 미동작)
  영향: B2 결손 1,758키 산정 기준, B3 슬롯 교체 시 위젯은 레포 정상본 사용
- [x] B2 포털 사전 v4.0.1 — PR #10 머지 4e21458, 포털 포인터 rev 갱신(2e40929). 이전 기록: 포털 사전 v4.0.0 — PR #10(8413843): 커버리지 5,393/5,393, 신규 번역 1,437(번역기 무수정)·재사용 321·수동 13, 글로서리 30, round-review(무수정, py3.12) Claude 17·R6 2 반영. 문체: 명령형 ~세요 유지(사유 보고서). 머지 대기
  영향: 머지 후 포털 포인터 rev → 머지 커밋, 포털 로더 REV_BUILTIN 은 다음 로더 때
- [x] B3 포털 부트스트랩 v1.0.1 · 로더 v4.0.1 · 베일 v1.0.1 = `028b315`, 슬롯 v1.1(1aab419), 포인터(rev main v3 0f4e2d5). 적대적 리뷰 H2·M3(M5·M6 문서화)·L5 반영. CI: 포털 포인터·슬롯·REV_BUILTIN 실존+main 조상 하드 게이트, 위젯 검사 편입
  영향: 슬롯 설치(벤자민) 전엔 라이브 영향 없음
- [~] B4 비로그인 헤드리스 E2E(실배포 산출물, 슬롯 원문 실행): /login·/forgot-password·/signup 한국어, lang=ko, 베일 1.0~2.3초. 오너 화면(대시보드·코스·피드 등)은 슬롯 설치 후 벤자민/크롬
- [x] C `PORTAL-ROLLOUT.md` — 설치·SHA-256·고객 코드 보호(맨 위 덧붙이기)·옵트아웃(excludeHosts). 조사: GHL 공개 API 에 포털 레벨 코드 필드 없음(코스 상품 customJs 는 있음 — 보고만), 스냅샷 복제 여부 문서 미기재 → C1 벤자민 확인

## 7. 트랙 E — 결제 페이지 (links.hyperclass.ai) · 작업지시서 8절 (10-31 추가)

원문은 Claude Docs 작업지시서 8절(https://claude.ai/artifact/3PL8esL619o6LUdRtaee7n). **배포·DNS 전환은 하지 않고 준비되면 보고만**(벤자민 10-31).

| 단계 | 산출물 | 의존 |
|---|---|---|
| E1 | `data/payments/en.json`(헤드리스 추출, 약 380키) → `data/hc-ko-payments.json` (기존 번역기·리뷰 도구 무수정). 합쇼체, Taxes=부가세, `paymentLink.subscriptionTextPrefix/Suffix` 는 승인안 수동 고정(자동 번역·글로서리 제외), `common.month` 쓰임새 확인 | 결제 링크 URL 1개(실측용) |
| E2 | `js/hc-pay-loader.js`(포털 로더 v4.0.1 승계: Nuxt i18n · `en_US`+현재 로케일 · lang=ko · 재병합 · `document.title`), 포인터 `data/hc-pay-rev.json` | E1 사전 커밋(main) |
| E3 | `hc-ko-edge` 에 `links.hyperclass.ai/*` 라우트 + 결제 앱 경로·text/html 만 주입, 3xx·비HTML·POST 통과(로컬 테스트), 베일 ≤1.5초, 고정 SHA | E2 로더 커밋 |
| E4 | 배포 순서 문서만(Worker 배포 → 벤자민 승인 후 DNS Proxied → 새 탭) — **실행 안 함** | E3 |
| E5 | 헤드리스로 결제 링크 영문 UI 단어 집계·S5 포함(폼 입력·제출·결제 금지), 트리거 링크 리다이렉트 유지 확인 | E2 (Worker 전엔 라우팅 주입으로) |

- [x] E1 사전 v1.0.2(5533c0a, 337키, 승인안 고정, 리뷰 반영) · [x] E2 로더 v1.0.1(c3d2465, SRI) · [x] E3 Worker v0.4(레포, 테스트 39/39, 미배포) · [x] E4 `PAYMENTS-ROLLOUT.md`(실행 안 함) · [~] E5 S5 에 pay 화면(PR #11) + 주입 시뮬 49→5. 트리거 링크 확인은 DNS 전환 후(링크 URL 필요)
  영향: Worker 배포 시 app.hyperclass.ai 경로는 v0.3 과 같은 출력(테스트 12건), 결제 도메인은 DNS 회색 동안 무영향
- 열린 질문: 고객 서브계정 결제 링크도 이 도메인 → 제외 계정(1r0p…)을 페이지 데이터로 가려낼 수 있는지

## 8. B4 잔존 → 포털 로더 v4.1 (2026-10-31, Claude Chat 오너 세션 진단 기반)

| 우선 | 잔존 | 원인(진단) | 처리 |
|---|---|---|---|
| ① | 코스 상세 Start Course · 강의 페이지 Products / · Instructor only · {n} Lessons · Instructor · Instructor Name | 같은 페이지 안 **별도 Vue 앱** `#remote-membership-preview-mount`(i18n 78 ns · 1,137키 · 한국어 0) | remote 카탈로그 추출(오너 세션 스니펫) → 번역 → 사전 `remotes.membership-preview` → 로더가 `[data-v-app]` 전부(나중 마운트 포함) 스캔·병합 |
| ① | Instructor Title | 코스 데이터 기본값(카탈로그에 없음) | 벤자민이 코스 설정에서 강사 이름·직함 입력 |
| ② | 상대 시각 5mo·1w · 탭 제목 Courses/Communities/About/Courses in … | 카탈로그 밖 | `_rules` 패턴(텍스트 노드 전체 일치, 편집기 제외) · `_titles`(구절 단위, 이름 보존) |
| ③ | 이벤트 달력 FC 요일 머리글 · 월/연 제목 · `toDateString` 날짜 | FullCalendar 인스턴스 접근 불가(전역·컴포넌트 경로 없음) | `_rules` 범위 패턴(`.fc` 머리글, 월/연·toDateString 형식) |
| ④ | 동영상 플레이어 툴팁·스크린리더 텍스트·aria-label | Plyr(섀도 DOM 아님) | `_rules` 범위(`.plyr`) 텍스트·aria-label 사전 |
| — | 강의 동영상 Loom | 교차 출처 iframe | 범위 밖 |
| B5 | 그룹 칸 v3.0.1 | 그룹 저장 버튼 불량으로 제거 불가 | v4.1 이 `window.__hcKoLoader` 를 먼저 세워 v3 실행 중단, 먼저 돈 v3 는 `_text` 목록을 비워 무력화. 새 규칙은 v3 가 읽지 않는 키(`remotes`·`_rules`·`_titles`)에 |

진행: [x] 로더 v4.1 구현·합성 시험(c2949b3) → [x] 적대적 리뷰(H2·M5·L6) 반영 v4.1.1(be60383, 공개 페이지 DOM 실측으로 범위 확정) → [x] 사전 v4.1.0 규칙·제목(114119b) → [x] 포털 포인터 next·rev(CI 통과) → [x] 공개 페이지 라이브 확인(피드·이벤트) → [ ] remote 카탈로그 수신(오너 덤프) → [ ] 번역·리뷰 → [ ] 사전 v4.1.x remotes → [ ] 오너 화면 확인 → [ ] stable 승격
