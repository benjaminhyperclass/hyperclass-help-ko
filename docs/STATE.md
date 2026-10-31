# STATE — 메인 앱 한글팩 v4 현재 상태

> **규칙: 매 배포 라운드 종료 시 이 파일을 갱신한다.** `data/DECISIONS.md`(결정)와 짝이 되는 **현재 상태** 파일이다.
> 새 세션은 이 파일 → `PLAN-*.md` 순으로 읽고 시작한다. 기억에 의존해 재개하지 않는다.
> **규칙: 라이브 검증 전 크롬 번역 확장(`hyperclass-ko-ext` 등)이 꺼져 있는지 먼저 확인한다.** 확장이 켜진 화면은 고객 화면이 아니다(10-29 ⑥ 오판의 원인). 가능하면 **헤드리스 Playwright(무쿠키·확장 없음) 결과를 기준**으로 삼고, 사람 브라우저 확인은 보조로 둔다. 슬롯 변경 검증은 새 탭 + 5분 뒤(사고 기록 4).

**진행 중 라운드** 2026-10-31~ 커뮤니티·코스·로그인 한글화 — 계획·진행은 `PLAN-portal-login.md`, 원 지시서 `WORKORDER-portal-login-v1.md`, 포털 설치·확산 `PORTAL-ROLLOUT.md`

## 2026-10-31 커뮤니티·코스·로그인 라운드 (작업지시서 v1) — 현재 상태

| 항목 | 상태 |
|---|---|
| 사전 (메인) | **v4.2.21** `e30d4d2` 라이브(포인터 봇 27010b3, CDN=raw=local). 로그인 화면 교정 11 + 앱 내 GHL 미국 번호 4건 삭제 + 비로그인 오류 화면 `_text` 5 |
| 로더 (메인) | **v4.19.0** `3bc900d` = 포인터 `loader.stable` = `next` — **2026-10-31 전 고객 승격**(d719342, CI 성공). 무쿠키 새 컨텍스트 stable 채널에서 `/`·`/forgot_password` 로더 4.19.0 booted·preauth·lang ko 확인. 롤백 = stable 을 `a2e7596`(v4.18.1)로. PREAUTH(`/`·`/forgot_password`·`/change_password`·`/set_password`·`/login/sso`) + 적대적 리뷰 반영(제외 계정 새로고침 루프 차단기 30초·로그인 화면 0.8초 안정 대기·PREAUTH 텔레메트리 생략·호스트 composer 재병합) |
| 부트스트랩 v1.3.0 | `3bc900d` (`?hcch=next|stable` 7일 고정) — **엣지 배포 완료**(Claude Chat, Cloudflare 대시보드, Worker 버전 b60d5e58 100%). 무쿠키로 엣지 HTML 부트스트랩 src @3bc900d · `__hcBoot` 1.3.0 확인 |
| 에이전시 CSS | **v2.0.0 칸 교체 완료**(2026-10-31, Claude Chat) — 운영 `<style>` = 레포 25401d2 파일에서 끝 줄바꿈만 뺀 것(SHA-256 `13048563…` 일치, 한글 content 1·font-size:0 0). S5 10:58Z·11:03Z(5분 뒤) app 3화면 영문 0, 캡처 정상(재설정 화면 환영 문구 없음). ⚠️ GHL 칸은 저장 시 끝 줄바꿈을 버린다 — 해시 대조는 끝 줄바꿈 제외 |
| 포털 | 패키지 완료: 포인터 `data/hc-portal-rev.json`(rev = main 사전 v3 `0f4e2d5`, loader `028b315`) · 슬롯 `js/portal-slot.js` v1.1 · 베일 `css/portal-custom.css` v1.0.1 · 부트스트랩 v1.0.1 · 로더 v4.0.1. 실배포 산출물 헤드리스 E2E 통과(/login·/forgot-password 한국어, 베일 1~2.3초). **슬롯 미설치(벤자민)** |
| 포털 사전 v4.0.1 | **머지 완료** 4e21458(PR #10) → 포털 포인터 `rev` = 4e21458(2e40929, CI 통과, CDN=raw=local). 슬롯 설치(벤자민) 뒤 라이브 |
| 포털 슬롯 | **설치 완료**(2026-10-31, Claude Chat) — 새 탭: 부트스트랩 next 028b315 · 포털 로더 applied · lang ko · 대시보드·코스·커뮤니티·리더보드·계정 영문 0. 옛 위젯 코드는 Custom JS 가 아니라 **Footer Code 칸**에 있었고 삭제. ⚠️ 포털 칸 편집기는 저장 시 코드를 자동 정렬 → 대조는 해시가 아니라 정규화(공백 제거) 내용으로 |
| B4 잔존 | ① 탭 제목(Courses·Communities·About·Courses in) ② 코스 상세 Start Course ③ 강의 페이지 Products / · Instructor only · {n} Lessons · Instructor · Instructor Name·Title ④ 댓글 자리표시자 Add a comment · 상대 시각 5mo·1w ⑤ 이벤트 달력 요일·월·날짜(날짜 라이브러리 로케일) ⑥ 동영상 플레이어 툴팁. **단서**: Instructor·Instructor Name·Instructor only·Lessons·Add a comment 는 카탈로그에 한국어로 있는데 영어로 보임 → 코스·강의 화면은 별도 Vue 앱(i18n 인스턴스)일 가능성. 방안·진단 스니펫 = 2026-10-31 보고 |
| B5 | 두 그룹 칸에 v3.0.1(레포 js/community-i18n-loader.js 와 동일)이 남아 있음 — 그룹 설정 저장 버튼이 업데이트 요청을 보내지 않아 제거 못 함(GHL 쪽 문제) |
| 포털 로더 v4.1 | **v4.1.1 `be60383` = 포털 포인터 `loader.next`(캐너리 community.hyperclass.ai = 현재 유일한 포털) · 사전 v4.1.0 `114119b` = `rev`**(규칙 11·제목). stable 은 028b315(v4.0.1, 새 키 무시). 적대적 리뷰 반영(규칙 route·정확 범위·성능·composer 별 remote 상태·ns 감시·status 안전·v3 messages 무력화·$ 안전·hasOwn). **라이브(공개 페이지, 새 컨텍스트) 확인 2026-10-31 22:08 KST**: 피드 상대 시각 1년 전·6개월 전·36분 전·1시간 전·1주 전, 시각 툴팁 '2025년 9월 20일 (토) 오후 03:32', 이벤트 달력 요일·'2026년 10월'·미니 달력 요일·'오후 8:00'·'이벤트가 없습니다'. v3.0.1 은 공개 그룹 페이지에서 v4.1 보다 **먼저** 돌아 무력화로 처리(v3 의 범위 없는 _text 8개가 그 전에 한 번 적용될 수 있음 — 근본 해결은 그룹 칸 제거). 잔존: 미니 달력 머리 'Oct 2026'(노드가 'Oct'·'2026' 로 나뉨)·시간대 'Asia/Seoul (GMT+09:00)'. 대기: remote 카탈로그 덤프(오너) → `remotes` 추가 → 오너 화면 확인 → stable. Instructor Title 은 코스 데이터(벤자민). 강의 동영상 Loom iframe 범위 밖 |
| 포털 v4.1.2 | 로더 v4.1.2 `87e211a`(사전 `_css` 주입) = `loader.next` · 사전 v4.1.1 `50fd74c` = `rev`. 오너 확인(Claude Chat, 로그인 새 탭): ✅ 피드 상대 시각 · Plyr(재생·일시정지·10초 뒤로/앞으로·음소거·자막·설정·전체 화면, aria-label 포함, PIP 만 원문) · 탭 제목 '코스'·'○○ 코스'. ❌ 2건 → 반영: 'About ○○' 제목 패턴(라이브 22:32 KST '하이퍼클래스 커뮤니티(무료) 소개') · TipTap 댓글 칸 'Add a comment'(CSS ::before attr — `_css` `[placeholder="Add a comment"] p.is-editor-empty::before` → '댓글을 입력하세요...', 오너 화면 재확인 필요). remote 카탈로그 덤프는 메시지 50,000자 제한으로 잘림 → 파일 다운로드 스니펫(~/Downloads/hc-remote-membership-en.json)으로 재요청 |
| PR | **#9 → #10 → #11 머지 완료**(2026-10-31, 머지 커밋 2f62775 · 4e21458 · f47db07, 각 사이 워크플로 완료 확인). S5 센서 Actions 수동 실행 성공(login·sense) — 매일 00시 UTC. validate C14 가동 |
| 트랙 E 결제 페이지 | **준비 완료·미배포**(벤자민 지시). 사전 `data/hc-ko-payments.json` v1.0.2 `5533c0a`(337키, 구독 동의 승인안 고정) · 로더 `js/hc-pay-loader.js` v1.0.1 `c3d2465`(SRI) · 포인터 `data/hc-pay-rev.json` · Worker v0.4.0(레포만, 테스트 39/39, CI 결제 게이트) · `PAYMENTS-ROLLOUT.md`(배포 순서·롤백). 실 Worker 주입 HTML + jsDelivr 로더 시뮬: 영문 49→5. 대기: Worker 배포 → DNS `links` Proxied(벤자민 승인) · 트리거 링크 URL · 제외 계정 결정(ⓐ 수용 / ⓑ excludePaths) |
| S5 점검 | `scripts/login-check.py`(PR #11) 무쿠키 6화면 — 승격 전 154 → **승격 후 97**: app 로그인·재설정·SSO **영문 0**(lang ko), 포털 3화면 97(슬롯 미설치). 포털 슬롯 설치 뒤 재측정 |
| C1 스냅샷 | **포털 설정은 스냅샷으로 복제되지 않음**(벤자민: Linked assets 에 Client Portal·Communities 없음, GHL ideas "Client Portal and Groups in Snapshot" = Planned) → C3 확정: 온보딩 체크리스트 1단계 + 계정별 수동(PORTAL-ROLLOUT 4절) |
| 발견한 번역 오염 2건 | ① 에이전시 CSS v1.3.0 의 `.foot-note::전`·`.h6::후`(약관 안내·재설정 완료 메시지가 투명) ② 포털 슬롯 위젯 코드의 `참/거짓`(실행 시 ReferenceError, 위젯 치환 미동작). **교훈: 코드 칸에 번역기·번역 확장을 거친 텍스트가 들어가면 키워드가 한글로 바뀐다 — 칸 정본은 레포, 붙여넣기 전 SHA-256 대조** |
| 사고 기록 5 | push 직전 `pull --rebase` 로 커밋 SHA 가 바뀌어 슬롯·포인터가 미푸시 SHA(3c71af8)를 가리킨 채 한 번 푸시됨 → 1aab419 로 정정(내용 diff 0, 미설치 상태라 영향 없음). **교훈: 다른 커밋의 SHA 를 박는 커밋은 그 SHA 를 먼저 push 해 확정한 뒤 만든다.** CI 조상 게이트가 이후 재발을 막는다 |

**갱신** 2026-10-28 (한글화 2.0 1단계 완료·2단계 코드 완료(배포 대기) · 부트스트랩 v1.0.0 — 로더 SHA 도 포인터로 · 확인입력 어댑터 v1.0.0 · 로더 v4.12.0(REV_BUILTIN 3b82727) · 사전 v4.2.8 보류 제외 2건 확정 · **슬롯 1줄째 `@c25c941…/js/hc-bootstrap.js` 교체 완료 · 라이브 검증 완료 · loader.stable=05f9cf7 승격**)

> 이전 갱신 2026-10-08 (v4.11.0 전 서브계정 개방 라이브 확인 완료 · 사전 v4.2.7 `_text` 단어 1개 키 335건 제거·C12 · CI C10 해소 · AI Studio 는 교차 출처 iframe → 확장 트랙)

## 한글화 2.0 — 1단계 (2026-10-28, 브랜치 `phase1-foundation`)

| 항목 | 값 |
|---|---|
| 실측(작업 0) | 콜드 캐시: 첫 페인트 1.2초 → GHL 이 `marketplace/custom-script` XHR 로 Custom JS 를 `#customJS` div 에 주입 → 로더 실행 4.0초 → core 병합 4.1초. **영문 플래시 ≈3초는 플랫폼 주입 시점**이 원인, 사전 수신은 0.1~0.3초. 재방문은 Cache Storage 로 네트워크 0 |
| 부트스트랩 | `js/hc-bootstrap.js` v1.0.0 — 커밋 `c25c941` 에 고정(슬롯 1줄째). 포인터 `loader{stable,next,canary,files}` 로 로더·어댑터 주입. localStorage `hcKoLoaderPtr` 캐시 → raw 포인터 → `@main` 폴백 |
| 로더 | v4.12.0 (REV_BUILTIN `3b82727` = 소킹된 v4.2.7). 게이트·병합 로직 불변 |
| 어댑터 | `js/hc-confirm-adapter.js` v1.0.0 — DNT 7종 모달에서 한글 입력('삭제' 등) → 영문 토큰 자동 변환, 병기 안내 |
| 포인터 | `loader.stable = loader.next = c25c941` · `canary = [r6JD1nsqtk6Oln28fgrj]` · `excludeLocations = [1r0pJRd1cQQ5DZsjSbc9]` (미결 #8 해소 — 제외 변경은 포인터 커밋) |
| 사전 | v4.2.8 — `agency.gdpr.`·`communitiesApp.universityCommunity.` 제외 확정(host 63 / apps 55 / _text 7 제거, _text 8,763). push 후 `ko-app-pointer.yml` 이 `rev` 전진 |
| CI | `ko-app-validate.yml`: bootstrap·adapter `node --check` + 꺾쇠 0 검사 추가 |
| 라이브 검증 (2026-10-28, Claude in Chrome) | ① 슬롯 `@c25c941/hc-bootstrap.js` + `@8fabb6a` 레거시 확인 ② 캐너리 `r6JD`: channel next → 로더 4.12.0·어댑터 1.0.1, rev `d32834c`(pointer-cache), textEntries 8,763, hits 83 ③ 타 서브계정 `5nssTmO95kobrfWUYa1o`: channel stable(c25c941), 로더 4.12.0·어댑터 1.0.0, 한국어 ④ 제외 `1r0p…`: 부트스트랩 excludeLocations 전달 → excluded true·영어 ⑤ 태그 일괄삭제 모달: '삭제'→DELETE 변환·버튼 활성(취소) → `loader.stable` 05f9cf7 승격 |
| 2단계 (2026-10-28, 브랜치 main) | ① `workers/hc-ko-edge` 엣지 주입 Worker + 로더 v4.13 베일 해제 — 로컬 7건 통과, **배포·DNS Proxied 전환은 벤자민 승인 대기** ② `workers/hc-ko-telemetry` + 로더 v4.14 리포터 + `ko-telemetry-digest.yml` — 로컬 9건 통과, **wrangler 배포·KV·시크릿·포인터 `telemetry.url` 대기** ③ `data/glossary.ko.json` 객체 52(결정 대기 ★9) + `scripts/glossary-audit.py` |
| 로더 채널 | `loader.stable` 05f9cf7(v4.12.0 · 어댑터 1.0.1) 전 고객 · `loader.next` = HEAD(v4.14.0, 텔레메트리는 포인터 url 없으면 무동작) 캐너리 r6JD |
| 2단계 가동 (2026-10-28 21:30 KST) | ✅ 글로서리 v1.0.0 확정(9건 권장안) ✅ `hc-ko-telemetry` 배포(`hc-ko-telemetry.red-boat-3cb2.workers.dev`, KV `0836915d…`, 토큰은 `~/.hyperclass/hc-telemetry-token`) + 포인터 `telemetry.url` + GitHub 시크릿 → 첫 집계 `data/reports/telemetry/2026-10-28.md` 봇 커밋 ✅ `hc-ko-edge` 배포 + **DNS `app` Proxied 전환(벤자민)** |
| 엣지 실측 (콜드, r6JD) | 부트스트랩 601ms(GHL app.js 627ms보다 먼저) → 한국어 병합·베일 해제 2,013ms → 첫 콘텐츠 페인트 2,040ms(한국어). **영문 노출 0ms** (종전 ≈3,000ms). 첫 페인트는 1.2s→2.0s 로 0.8s 늦어짐. 제외 계정 영어·베일 2.5s 타임아웃 해제, 타 서브계정 stable 정상, 콘솔 오류는 `?hcko=off` 와 동일(GHL 자체) |
| 롤백 | DNS `app` → DNS only(회색) 즉시. Worker 변수 `ENABLED="0"`. 포인터 `telemetry` 키 삭제 |
| 최적화 (2026-10-28 밤) | 엣지 Worker v0.3: 포인터 스냅샷 `window.__hcPtr`(60s 엣지 캐시) 주입 + 로더·어댑터·core preload + 브랜드 스플래시 베일 → 우리 자산 783ms 에 전부 도착(GHL app.js 이전), 첫 페인트 616ms(스플래시), 한국어 적용은 GHL 마운트 즉시(≈2.3s). 부트스트랩 v1.2(엣지 포인터·raw 폴백), 로더 v4.15(edge REV). `loader.stable` 승격 완료 |
| 글로서리 통일 | `round-merge.py --unify` 로 1,076건 치환 → 사전 **v4.2.9** 라이브(잔존 25). 정규 표기가 이미 있는 문장·오치환 위험 변형은 제외 |
| 자동 번역 루프 | 로더 **v4.16**(전 고객): 미번역 키 영어 원문을 ns 당 150쌍 동봉 → Worker v0.3 `en/<ns>/<key>` KV → digest 가 `data/telemetry/en-missing/<ns>.json` → `ko-translate-round.yml`(월·목 자동·수동)이 참조본 재사용→번역→글로서리·DNT→검증→**PR**. 머지 = 포인터 자동 전진. 브라우저 수동 추출 불필요 |
| 2026-10-29 오전 | ① **1라운드 PR #7** (사전 v4.2.18 후보, 687건: powerDialerApp 342·calendarComponentsApp 150·common 102·mediaCenterApp 73…) — 자동 리뷰 high 5 → 반영 → high 0, 2차 반영(녹화→녹음·반말·용어). **벤자민 머지 대기** ② `ko-round-review.yml` + `scripts/round-review.py`: 규칙 R1~R7 + Claude 검수 → PR 코멘트 ③ `ko-sensors.yml`: S1 매니페스트(main 2136, federatedApps 버전) 6h · S4 릴리스 노트 → 이슈 #6 ④ 로더 v4.16.1: EN 샘플 600자 이하만(잘림 금지) · 라운드 600자 이상 제외 ⑤ CI: 로더 포인터 SHA 실존 하드 게이트 |
| 사고 기록 | 10-29 01:3x UTC 포인터가 존재하지 않는 로더 SHA(79423a5)를 2분간 가리킴(번들 재사용 실수) → 긴급 수정 806749b. 영향: 그 사이 첫 로드한 세션은 1회 영어. 재발 방지: CI 게이트 + 번들 파일명 고유화 |
| 미결 | 레포 설정 "Allow GitHub Actions to create and approve pull requests" OFF → 라운드 워크플로가 브랜치만 밀고 PR 은 수동(벤자민 결정) |
| 2026-10-29 오후 | ✅ PR #7 머지(사전 v4.2.18, QC 4회: 자동 리뷰 2회 + 독립 서브에이전트 1회 + 조사 보정) → 포인터 자동 전진 → 라이브 확인(`__hcPtr.rev` b02578f, 녹취록). ✅ 레포 설정 "Allow GitHub Actions to create PRs" ON → 라운드 PR 완전 자동. ⚠️ **레거시 DOM 트랙 은퇴 시도 → 회귀 → 복구**: ALL-CAPS 표 제목 13건 `_text` 예외 등재(C12 예외 `[A-Z]{4,}`) 후 슬롯 2줄째 제거 → 연락처 표 머리글·툴바(Phone·Email·Tags·Filters·Sort·Import·All)가 영어로 회귀. 원인: 레거시 단어 1개 항목 1,574건은 i18n 카탈로그가 아니라 DOM 으로 쳐야 하는 문구였는데 "카탈로그 커버리지" 로 잘못 판정. **즉시 레거시 줄 복구**(02:5x UTC, 연락처 한국어 확인). 대책: 로더 **v4.17 `_textScoped`** — 단어 1개 항목을 UI 크롬(th·button·tab·menuitem·label·페이지네이션) 안에서만 치환(셀·옵션·칩·본문 제외 → 고객 데이터 보호). 사전 v4.2.20 `_textScoped` 1,362건(글로서리 적용, 2자 키·해요체·~이다 폐기), validate C13, playwright 단위 테스트 17/17. 캐너리 next → 텔레메트리로 4.17.0/4069893 부팅 확인 → stable 승격(cf7174d) → **레거시 줄 은퇴 완료(03:4x UTC)** → 연락처·대화·기회·캘린더 새 세션 육안 검증 전부 한국어(필터·정렬·가져오기·전화번호·이메일·회사명·태그). 텔레메트리 koRatio 변화 없음 |
| 사고 기록 3 | **텔레메트리 KV 무료 한도 초과**(벤자민이 Cloudflare 메일로 발견): 영어 원문을 키 하나씩 put(이벤트당 ≤400) → 10-28 하루 put 1,000 초과 → put 429 → 10-28 오후~10-29 00:00 UTC 보고 유실(10-29 오전도 구버전 Worker 가 400 거부). Worker **v0.4**: ns 당 블롭 1개(enb/<ns>)로 합쳐 새 키 있는 ns 만 put(이벤트당 ≤6), 레이트리밋·일일 put 예산(800)은 Cache API 로 계수(KV 쓰기 0). 유료 플랜 불필요. digest 에 loaders/revs 집계 추가 |
| 사고 기록 2 | 10-28 글로서리 통일 치환이 받침 불일치 7건(스마트 리스트으로·스토어을) 남김 → 수정. 수정 중 전역 조사 교정기가 동사 어미('있는→있은')를 깨뜨리는 것을 diff 에서 발견·폐기 → **명사 범위 한정 `fix_josa_after`** 로 대체(round-merge 내장) |
| 2026-10-29 ⑤ | **인앱 문구 신고**: 로더 v4.18 — 화면 글자를 Alt+Shift+클릭 → 원문·부모 요소·라우트를 Worker `/report` 로(세션당 20건, 토스트 확인). Worker v0.5 `/report` + digest `reports`. 일일 집계가 `data/telemetry/reports.json` 누적 + 이슈 "문구 신고" 코멘트. 처리 규칙: 단어 1개 → `_textScoped`, 그 외 → `_text`/카탈로그, 반영 후 reports.json 에서 삭제 |
| 사고 기록 4 | 레거시 은퇴 직후의 "연락처 한국어 확인"은 **GHL 이 캐시한 옛 Custom JS(레거시 포함)** 를 보고 한 오판. 새 탭(13:14 KST)에서 머리글 영어 확인 → 원인: `_textScoped` 조상 탐색 3단계인데 GHL 표 머리글 텍스트는 th 아래 4단계+ → **v4.18.1(깊이 8)** 을 stable 로 바로 올려 수정(13:3x KST, 새 탭 한국어 확인). 노출: 약 40분간 표 머리글·툴바 단어 영어. 교훈: 슬롯 변경 검증은 **반드시 새 탭 + 5분 뒤** |
| 2026-10-29 ⑥ | **커뮤니티 트랙(community.hyperclass.ai) 범위 조정**: 오너 계정 실측 — 클라이언트 포털·커뮤니티가 GHL 네이티브 ko 로케일로 거의 전부 한국어. 잔존은 배지 안내·코스 필터·Loyalty 등 12건(manual-dict 등재, hc-dict 재빌드)과 상대 시각("2 days ago"·"1/10 lessons", 패턴형 — 정확 일치 사전으로 불가). 부트스트랩·포인터·텔레메트리 이식은 **보류**: 플랫폼이 오너/관리자에겐 Custom Code 를 주입하지 않아 라이브 검증 불가 + 잔존이 적어 투자 대비 효과 낮음. 사전은 이미 raw@main 으로 슬롯 교체 없이 갱신됨 |
| 2026-10-30 ⑥ 정정 | **⑥ 의 판단은 틀렸다 — 커뮤니티 트랙 보류를 뒤집는다**(작업지시서 v1). ① "GHL 네이티브 ko 로케일로 거의 전부 한국어"는 **벤자민 크롬의 번역 확장이 DOM 을 바꾼 화면**이었다. 확장 제거 후 포털은 사이드바·제목·버튼 전부 영어. 2026-10-31 헤드리스 무쿠키 실측: `community.hyperclass.ai/login` 의 i18n 로케일 13개(da·de·en·es·fi·fr-CA·fr-FR·it·nl·no·pt-BR·pt-PT·sv)에 **ko 없음**, en 외 12개는 0키, en 63 ns · 5,393키. ② "오너·관리자에겐 Custom Code 미주입"은 **그룹 슬롯에만** 해당한다. **포털 레벨 슬롯**(Client Portal → Settings → Branding → Advanced → Custom JS, `#cp-siteCustomFooter > script[data-cp-custom-code=footer]`)은 오너 세션과 비로그인 `/login` 양쪽에 들어간다(10-31 비로그인 DOM 에서 1,382자 확인) → 오너가 직접 검증 가능, 포털 로그인 화면까지 한 슬롯으로 덮는다. 후속: `PLAN-portal-login.md` 트랙 B |
| 2026-10-29 ⑦ | **교차 출처 iframe(AI Studio vibe 빌더) 결정 대기**: Custom JS 로는 원리상 불가. 선택지 ⓐ 영어 수용(권장 — 확장은 고객에게 안 닿음) ⓑ 벤자민 본인용 크롬 확장 유지 ⓒ GHL 에 로케일 요청. 벤자민 결정 필요 |
| 2026-10-29 주기 | **번역 라운드 주기 2주로 조정**(벤자민): `ko-translate-round.yml` 매주 월 10:47 KST 기동, 짝수 ISO 주만 실행(수동 Run workflow 는 항상). 다음 자동 라운드 = 다음 짝수 주 월요일 |
| 다음 손 | 없음(자동). EN 풀이 차면 2주마다(짝수 주 월) 라운드 PR → 자동 리뷰 → Claude 가 QC 후 머지 → 벤자민은 PR 에서 용어만 훑고 머지. 즉시 돌리려면 운영 계정에서 대시보드·AI 스튜디오·통화·리포팅 화면을 새 탭으로 몇 번 열면 풀이 빨리 찬다 → Actions "번역 라운드" Run workflow |

## 배포 좌표

> 2026-10-31 현행화(트랙 D). 이전 표(로더 v4.11.0 · 2줄 슬롯 · 레거시 핀)는 git 이력(`git show bf833aa:docs/STATE.md`)에 있다.

| 항목 | 값 |
|---|---|
| 사전 버전 / REV | **v4.2.21** / `e30d4d2` (2026-10-31, `_text` 8,781 · `_textScoped` 1,362) — 이전 v4.2.20 `4069893` — 포인터 `data/hc-ko-app-rev.json` 의 `rev` 가 정한다(봇 `ko-app-pointer.yml` 전진) |
| 로더 | **v4.19.0** / `3bc900d0da3c010a442d336f26f150b9084a7d4d` — stable = next (2026-10-31 승격). 이전 stable v4.18.1 `a2e7596`. 내장 `REV_BUILTIN` = `3b82727`(v4.2.7, 소킹분) |
| 어댑터 | `js/hc-confirm-adapter.js` — 로더와 같은 커밋에서 부트스트랩이 주입 |
| 부트스트랩 (엣지) | **v1.3.0** / `3bc900d0da3c010a442d336f26f150b9084a7d4d` (2026-10-31 배포, Worker 버전 b60d5e58) — 이전 v1.2.0 `047b529` — `workers/hc-ko-edge/wrangler.toml` `BOOTSTRAP_SHA`. app.hyperclass.ai 모든 HTML(비로그인 포함) `<head>` 맨 앞 |
| 부트스트랩 (에이전시 슬롯) | **v1.0.0** / `c25c941dfe4cee25495a225c8c577f534aec6946` — Custom JS 칸 1줄. 엣지가 있으면 `if (window.__hcBoot) return` 가드로 **무동작**(파일만 받음). 엣지 OFF(DNS 회색) 시의 폴백 경로 |
| 엣지 Worker | `hc-ko-edge` v0.3.0 (베일·`__hcPtr` 스냅샷·preload·부트스트랩) · `hc-ko-telemetry` v0.5 (`/r`·`/report`) |
| 레거시 DOM 레이어 | **은퇴 2026-10-29 03:4x UTC** — 슬롯에서 제거. 단어 1개 항목은 로더 v4.17+ `_textScoped`(UI 크롬 한정). 롤백 = 슬롯에 `@8fabb6a/js/dashboard-ko.min.js` 줄 복구 |
| 제외 로케이션 | 포인터 `excludeLocations` = `[1r0pJRd1cQQ5DZsjSbc9]` → 부트스트랩이 `window.HC_I18N_EXCLUDE` 로 세움(미결 #8 해소). 로더 내장 폴백도 같은 값 |
| CDN 삼중 대조 | 부트스트랩·로더·사전 모두 jsDelivr `@40자 SHA` = raw = local (SHA-256), `immutable`, CORS `*` |

Custom JS 칸 (Agency Whitelabel → Custom JavaScript) — 2026-10-29 레거시 줄 제거 후 (벤자민 확인 기준):

```html
<script src="https://cdn.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@c25c941dfe4cee25495a225c8c577f534aec6946/js/hc-bootstrap.js"></script>
```

(`<script>window.HC_I18N_EXCLUDE=[…]</script>` 줄이 남아 있어도 무해 — 포인터와 같은 값이면 결과가 같다.)

**부트스트랩 이중 로드 판정 (2026-10-31, 트랙 D)** — 엣지 `047b529`(v1.2.0) ↔ 슬롯 `c25c941`(v1.0.0) 차이는 **의도된 것은 아니었지만 무해**하다.
근거: ① 엣지 스크립트는 `<head>` 맨 앞의 동기 `<script src>` 라 GHL 이 Custom JS 를 XHR 로 주입하는 시점(콜드 ≈4초)보다 항상 먼저 실행된다.
② 부트스트랩 첫 줄 `if (window.__hcBoot) return;` 가 두 번째 실행을 막아 로더·어댑터는 1회만 주입된다(10-31 무쿠키 실측: `__hcBoot.status()` source `edge`, version 1.2.0).
③ 엣지가 꺼지면 슬롯 v1.0.0 이 단독으로 돌며, v1.1·v1.2 에서 더해진 것(엣지 포인터·raw 재시도)만 빠진다 — 기능 저하일 뿐 장애는 아니다.
→ `wrangler.toml` 주석의 "슬롯 1줄째와 같은 값"을 정정한다. 폴백 기능까지 같게 하려면 **벤자민이 슬롯 SHA 를 엣지와 같은 값으로 교체**(선택, A2 의 부트스트랩 v1.3 이후 그 SHA 로 한 번에).

## 라이브 확인값 (`__hcKoApp.status()`)

| 시점 | 로더 | rev | host | textEntries | 라우트 | 확인자 |
|---|---|---|---|---|---|---|
| 2026-09-09 (v2 슬롯 교체 후) | 4.9.2 | `81a235c…` | 1 | 9,094 | `/v2/location/r6JD1nsqtk6Oln28fgrj/ai-agents/agent-studio` · `…/super-agents/agent/new` | Claude Chat (크롬) |
| **대기** (v4.10 슬롯 교체 후) | 4.10.0 기대 | 1차 로드 `81a235c`(내장) → 2차 로드부터 `c9879e0`(포인터, `revSource` pointer-cache) | 1 | 9,094 → 9,105 (2차 로드) | 목록 배너 "관리형 에이전트는"(공백 없음) · Recent agents · 템플릿 카드 3종 | Claude Chat |

| **2026-10-08 (v4.11 슬롯 교체 후)** | 4.11.0 | `c9879e0` (pointer-cache) | 1 | 9,105 | ① r6JD 대시보드 hits 42 ② 타 서브계정 `5nssTmO95kobrfWUYa1o` hits 43 (연락처·대화·캘린더 한국어) ③ `/agency_dashboard` allowed/booted false ④-a 제외 계정 직접 진입 excl true·영어 ④-b 서브계정→에이전시→제외 계정 전환 시 자동 새로고침·영어 | Claude in Chrome |

※ 관찰(오류 아님): `re-merge onboardingApp` 이 같은 초에 ~30회 — 원격이 네임스페이스를 쪼개 병합할 때마다 래퍼가 재병합하는 설계 동작. 일반 이동(강력 새로고침 아님) 시 부팅까지 ~11초. 잔존 영문은 런타임 조합(`Search 연락처`, `7/75 columns`, `Page 1 of 2`)·날짜 표기 — `_text` 정확 일치 한계.

※ 종전에 적었던 "4.9.1 확인" 행은 실제 라이브 검증이 아니라 raw 재현값이었으므로 삭제했다.

| **2026-10-29 (레거시 은퇴 · v4.18.1)** | 4.18.1 | `4069893` (edge) | 1 | 8,776 (+scoped 1,362) | 연락처·대화·기회·캘린더 새 탭 육안 한국어(사고 기록 4 이후 재확인) · 텔레메트리 부팅 4.18.1/a2e7596 | Claude in Chrome · 텔레메트리 |

콘솔 판정 스크립트: `scripts/verify-deploy.js` (EXPECT 4.18.1 / 4069893 / 8776 — 2026-10-31 갱신, PR 승인 대기). 갱신 직후 첫 로드는 옛 rev 일 수 있다(`revNext`) — 새로고침 후 재실행.

## 게이트

- `ALLOW = []` — **전 서브계정**(`/v2/location/<id>/…`) (v4.11, 2026-10-08 벤자민 지시). 라이브 전 고객 적용 중
- 비로그인 라우트(`/` 로그인·`/forgot_password` 등)는 **v4.18.1 까지 범위 밖**(`location:null` → `suspended:true`, 10-31 무쿠키 실측). v4.19 에서 PREAUTH 목록으로 연다(`PLAN-portal-login.md` A2)
- 원격 킬스위치: `data/hc-ko-app-rev.json` 의 `"off": true` → 다음 로드부터 전 고객 v4 중단
- 제외 `1r0pJRd1cQQ5DZsjSbc9` — 포인터 `excludeLocations` → 부트스트랩이 `window.HC_I18N_EXCLUDE` 로 세움(미결 #8 해소, 10-28). 로더 내장 폴백도 같은 값
- **에이전시 라우트(`/agency_dashboard` `/sub-accounts` `/snapshots` `/reselling`)는 v4 범위 밖** — v4.11 부터 빈 ALLOW 도 `/v2/location/` 한정. 레거시 은퇴(10-29) 뒤로 에이전시 화면은 **영어**다 — 고객 비노출이라 범위 밖(작업지시서 v1 결정 ⑤, 기록만).
- **교차 출처 iframe(워크플로우 `client-app-automation-workflows`, AI Studio `leadgen-vibe-ai-builder` 등)은 Custom JS 로 불가** — 크롬 확장(`~/Downloads/hyperclass-ko-ext`, `ghl-i18n-ko.json`+manual 사전) 트랙만 닿는다.

## AI 스튜디오 (/vibe) — 2026-10-08

- 본문은 교차 출처 iframe `leadgen-vibe-ai-builder.leadconnectorhq.com` → **Custom JS(v4·레거시) 불가, 크롬 확장 전용.**
- 확장 사전(raw `ghl-i18n-ko.json`)에 455건 추가(eab3dd3). 제외 123건은 excluded-strings 의 `AI 스튜디오(vibe iframe) 2026-10-08` 분류.
- 한계: `{플레이스홀더}`·복수형 문구 40건은 확장이 화면 정확 일치라 번역 불가 (예: `Edited {time}`, `{count} files changed`).
- 고객 적용은 확장 배포(웹스토어 비공개 등록)가 선행돼야 한다 — 미착수.

## 미결

| # | 항목 | 상태 |
|---|---|---|
| 1 | `scripts/verify-deploy.js` EXPECT 갱신 (A) | ✅ 451b683 커밋 · v4.10 의미로 재갱신 76c557f |
| 2 | `%[A-Za-z_]+%` 플레이스홀더 검사 (B) | ✅ 1ec2e19 커밋, CI 초록 |
| 3 | CI 'REV↔사전 일치' 구조적 빨간불 (C) | ✅ 해소 — REV 포인터 방식(76c557f). validate 는 포인터·내장 REV 실존만 하드 게이트, 전진은 `ko-app-pointer.yml`(validate 성공 workflow_run) |
| 4 | 킬스위치 범위 | ✅ 레거시 은퇴(10-29)로 해소 — `?hcko=off` / `__hcKoApp.off()` / 포인터 `"off": true` 가 곧 전면 영어 |
| 5 | `hcEx()` 게이트를 `build-dashboard-ko.py` 템플릿에 반영 | C11 이 감시 중(템플릿·소스 ✅, min 은 다음 빌드) — 빌드 트리거(en.json 개행 토글) 전에 확인 |
| 6 | 스테일 핀 `8fabb6a` | ✅ 레거시 은퇴(10-29)로 소멸 — 롤백 경로로만 남음 |
| 7 | Managed Agents 표기 잔존 | `0 Managed Agents`(가변 숫자) — `_text` 정확 일치 한계 |
| 8 | `HC_I18N_EXCLUDE` | ✅ 2026-10-28 포인터 `excludeLocations` 를 부트스트랩이 전역으로 세움 — 제외 변경 = 포인터 커밋 1개. 슬롯 선언 줄은 불필요 |
| 9 | `_text` 11건 → 사전 4.2.6 | ✅ c9879e0 push → validate ✅ → ko-app-pointer 가 jsDelivr 대조 후 4ed156d 로 전진. **사람 손 0회** |
| 10 | 운영 규칙: `REV_BUILTIN` 은 소킹된 사전만 | 첫 방문·Cache Storage 없는 브라우저는 내장 REV 로 부팅하므로 갓 올린 사전을 내장하면 롤백이 늦게 닿는다. 큰 갱신 때만 올리고 그때 슬롯 교체 |
| 11 | 사전 push 직후 다른 push 금지(약 2분) | validate 가 cancel-in-progress 로 취소되면 포인터가 전진하지 않는다 → validate 를 workflow_dispatch 로 재실행하면 이어짐 |
| 12 | 에이전시 부트스트랩 슬롯 `c25c941`(v1.0.0) ↔ 엣지 `047b529`(v1.2.0) | 무해 판정(배포 좌표 절). 폴백 정렬은 벤자민 선택 — A2 부트스트랩 v1.3 SHA 로 한 번에 |

## 알려진 잔존 영문 (번역 대상 아님 또는 대응 불가)

- `0 Managed Agents` — 숫자 가변, `_text` 패턴 미지원
- 에이전트 템플릿 카드의 `Email Campaign` 은 기존 사전으로 이미 치환됨(이번 11건에서 제외)
- 에이전트 템플릿(use case) 판매자 콘텐츠 — 사용자·판매자 데이터, 번역 대상 아님
- 로케일 카탈로그 밖 하드코딩 문구 — `_text`(원문 정확 일치)로만 대응 가능. 노드가 분리돼 있거나 대시·따옴표 문자가 다르면 매칭 실패

## 관련 파일

- `data/DECISIONS.md` — 확정/기각 결정 (2026-09-09 Managed Agents→관리형 에이전트 [확정])
- `DEPLOY-v4.md` — 설치·라이브 확인 절차 (v4.12+ 부트스트랩 1줄 · 로더도 포인터)
- `PLAN-portal-login.md` — **진행 중** 커뮤니티·코스·로그인 라운드(작업지시서 v1)
- `PLAN-superagents.md` — 2026-09-09 두 라운드의 계획·진행 기록
- `data/reports/2026-09-09-superagents-ko-report.md`, `…-v2-report.md` — 라운드 보고서
