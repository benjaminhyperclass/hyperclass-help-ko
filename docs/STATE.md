# STATE — 메인 앱 한글팩 v4 현재 상태

> **규칙: 매 배포 라운드 종료 시 이 파일을 갱신한다.** `data/DECISIONS.md`(결정)와 짝이 되는 **현재 상태** 파일이다.
> 새 세션은 이 파일 → `PLAN-*.md` 순으로 읽고 시작한다. 기억에 의존해 재개하지 않는다.

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
| 다음 손 | 없음(자동). EN 풀이 차면 월·목 라운드 PR → 자동 리뷰 → Claude 가 QC 후 머지 → 벤자민은 PR 에서 용어만 훑고 머지. 즉시 돌리려면 운영 계정에서 대시보드·AI 스튜디오·통화·리포팅 화면을 새 탭으로 몇 번 열면 풀이 빨리 찬다 → Actions "번역 라운드" Run workflow |

## 배포 좌표

| 항목 | 값 |
|---|---|
| 사전 버전 / REV | **v4.2.7** / `3b8272791e0280c079f663e722ad826343d8724a` (strings 102,718 · _text 8,770) — 포인터가 정한다. 봇 커밋 881d9a3 로 자동 전진(2026-10-08). ⚠️ 내장 REV_BUILTIN 은 c9879e0(단어 1개 키 포함)이라 **포인터를 아직 못 받은 첫 방문 1회**만 옛 사전으로 뜬다 — 다음 로더 교체 때 REV_BUILTIN 을 3b82727 로 올린다 |
| 로더 버전 / SHA | **v4.11.0** / `45e5a5e13757aecce678f63f7ec47bce9325d28e` (ALLOW=[] 전 서브계정 · 에이전시 화면 제외 · 원격 킬스위치 `off` · 내장 REV_BUILTIN=c9879e0) |
| Custom JS 슬롯에 실제 들어있는 로더 SHA | `0fcf256` (v4.9.2, 2026-10-08 라이브 수집 `_meta.loader` 로 재확인 — 76c557f 교체는 실시되지 않음) → **`45e5a5e` (v4.11.0) 교체 완료 2026-10-08** (76c557f 는 건너뜀). 슬롯 1줄째 `HC_I18N_EXCLUDE` 명시 — 미결 #8 해소 |
| 레거시 DOM 레이어 핀 | ~~`@8fabb6a/js/dashboard-ko.min.js`~~ **은퇴 2026-10-29 03:4x UTC** — 슬롯은 부트스트랩 1줄. 단어 1개 항목 1,362건은 로더 v4.17 `_textScoped`(UI 크롬 한정) 가 담당. 롤백 = 슬롯 2줄째 복구(`@8fabb6a/js/dashboard-ko.min.js`) |
| CDN 삼중 대조 | core / apps / loader 모두 CDN = raw = local = git (SHA-256), `immutable`, CORS `*` (2026-09-09) |

Custom JS 칸 (Agency Whitelabel → Custom JavaScript) — **실제 슬롯은 아래 2줄뿐이다.** `HC_I18N_EXCLUDE` 선언 줄은 없고, 제외 로케이션은 두 레이어의 하드코딩 폴백(`HC_EXCLUDE_FALLBACK` / 레거시 `hcEx()`)에 의존한다(미결 #8).

```html
<script src="https://cdn.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@45e5a5e13757aecce678f63f7ec47bce9325d28e/js/hc-ko-app-loader.js"></script>
<script src="https://cdn.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@8fabb6a/js/dashboard-ko.min.js"></script>
```

## 라이브 확인값 (`__hcKoApp.status()`)

| 시점 | 로더 | rev | host | textEntries | 라우트 | 확인자 |
|---|---|---|---|---|---|---|
| 2026-09-09 (v2 슬롯 교체 후) | 4.9.2 | `81a235c…` | 1 | 9,094 | `/v2/location/r6JD1nsqtk6Oln28fgrj/ai-agents/agent-studio` · `…/super-agents/agent/new` | Claude Chat (크롬) |
| **대기** (v4.10 슬롯 교체 후) | 4.10.0 기대 | 1차 로드 `81a235c`(내장) → 2차 로드부터 `c9879e0`(포인터, `revSource` pointer-cache) | 1 | 9,094 → 9,105 (2차 로드) | 목록 배너 "관리형 에이전트는"(공백 없음) · Recent agents · 템플릿 카드 3종 | Claude Chat |

| **2026-10-08 (v4.11 슬롯 교체 후)** | 4.11.0 | `c9879e0` (pointer-cache) | 1 | 9,105 | ① r6JD 대시보드 hits 42 ② 타 서브계정 `5nssTmO95kobrfWUYa1o` hits 43 (연락처·대화·캘린더 한국어) ③ `/agency_dashboard` allowed/booted false ④-a 제외 계정 직접 진입 excl true·영어 ④-b 서브계정→에이전시→제외 계정 전환 시 자동 새로고침·영어 | Claude in Chrome |

※ 관찰(오류 아님): `re-merge onboardingApp` 이 같은 초에 ~30회 — 원격이 네임스페이스를 쪼개 병합할 때마다 래퍼가 재병합하는 설계 동작. 일반 이동(강력 새로고침 아님) 시 부팅까지 ~11초. 잔존 영문은 런타임 조합(`Search 연락처`, `7/75 columns`, `Page 1 of 2`)·날짜 표기 — `_text` 정확 일치 한계.

※ 종전에 적었던 "4.9.1 확인" 행은 실제 라이브 검증이 아니라 raw 재현값이었으므로 삭제했다.

콘솔 판정 스크립트: `scripts/verify-deploy.js` (EXPECT 4.10.0 / c9879e0 / 9105 · revSource 표시). 슬롯 교체 직후 첫 로드는 내장 81a235c 라 rev FAIL 이 정상 — 새로고침 후 재실행.

## 게이트

- `ALLOW = []` — **전 서브계정**(`/v2/location/<id>/…`) (v4.11, 2026-10-08 벤자민 지시). 슬롯 교체 전까지 라이브는 여전히 r6JD 한 곳
- 원격 킬스위치: `data/hc-ko-app-rev.json` 의 `"off": true` → 다음 로드부터 전 고객 v4 중단
- 제외 `1r0pJRd1cQQ5DZsjSbc9` — 슬롯에 `HC_I18N_EXCLUDE` 선언이 **없어** 두 레이어의 하드코딩 폴백으로만 동작 중(미결 #8)
- **에이전시 라우트(`/agency_dashboard` `/sub-accounts` `/snapshots` `/reselling`)는 v4 범위 밖** — v4.11 부터 빈 ALLOW 도 `/v2/location/` 한정. 그 화면 한국어는 레거시 레이어가 친 것.
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
| 4 | 킬스위치 범위 | `?hcko=off` / `__hcKoApp.off()` 는 v4 만 끈다. 레거시 `dashboard-ko@8fabb6a` 는 계속 동작 → 전면 영어 복귀는 Custom JS 3줄째 제거로만 가능 |
| 5 | `hcEx()` 게이트를 `build-dashboard-ko.py` 템플릿에 반영 | C11 이 감시 중(템플릿·소스 ✅, min 은 다음 빌드) — 빌드 트리거(en.json 개행 토글) 전에 확인 |
| 6 | 스테일 핀 `8fabb6a` 유지 | 운영 사전 11,810건, @main 은 37,395건이지만 미반영분 98% 를 v4 가 커버 → 핀 이동은 레거시 축소·재빌드와 한 번에 |
| 7 | Managed Agents 표기 잔존 | `0 Managed Agents`(가변 숫자) — `_text` 정확 일치 한계 |
| 8 | `HC_I18N_EXCLUDE` 는 로더 폴백에 의존 중 → ✅ 2026-10-28 포인터 `excludeLocations` 를 부트스트랩이 전역으로 세움 | 슬롯에 `<script>window.HC_I18N_EXCLUDE=[…]</script>` 를 명시할지 **벤자민 결정**. 명시하면 로더 재배포 없이 배열만 고쳐 제외 계정을 바꿀 수 있고, 안 하면 제외 변경 = 두 레이어 재배포 |
| 9 | `_text` 11건 → 사전 4.2.6 | ✅ c9879e0 push → validate ✅ → ko-app-pointer 가 jsDelivr 대조 후 4ed156d 로 전진. **사람 손 0회** |
| 10 | 운영 규칙: `REV_BUILTIN` 은 소킹된 사전만 | 첫 방문·Cache Storage 없는 브라우저는 내장 REV 로 부팅하므로 갓 올린 사전을 내장하면 롤백이 늦게 닿는다. 큰 갱신 때만 올리고 그때 슬롯 교체 |
| 11 | 사전 push 직후 다른 push 금지(약 2분) | validate 가 cancel-in-progress 로 취소되면 포인터가 전진하지 않는다 → validate 를 workflow_dispatch 로 재실행하면 이어짐 |

## 알려진 잔존 영문 (번역 대상 아님 또는 대응 불가)

- `0 Managed Agents` — 숫자 가변, `_text` 패턴 미지원
- 에이전트 템플릿 카드의 `Email Campaign` 은 기존 사전으로 이미 치환됨(이번 11건에서 제외)
- 에이전트 템플릿(use case) 판매자 콘텐츠 — 사용자·판매자 데이터, 번역 대상 아님
- 로케일 카탈로그 밖 하드코딩 문구 — `_text`(원문 정확 일치)로만 대응 가능. 노드가 분리돼 있거나 대시·따옴표 문자가 다르면 매칭 실패

## 관련 파일

- `data/DECISIONS.md` — 확정/기각 결정 (2026-09-09 Managed Agents→관리형 에이전트 [확정])
- `DEPLOY-v4.md` — 설치·라이브 확인 절차 (상단 배너: REV 갱신과 슬롯 교체는 한 세트)
- `PLAN-superagents.md` — 이번 두 라운드의 계획·진행 기록
- `data/reports/2026-09-09-superagents-ko-report.md`, `…-v2-report.md` — 라운드 보고서
