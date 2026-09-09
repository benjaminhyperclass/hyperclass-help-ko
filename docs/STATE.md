# STATE — 메인 앱 한글팩 v4 현재 상태

> **규칙: 매 배포 라운드 종료 시 이 파일을 갱신한다.** `data/DECISIONS.md`(결정)와 짝이 되는 **현재 상태** 파일이다.
> 새 세션은 이 파일 → `PLAN-*.md` 순으로 읽고 시작한다. 기억에 의존해 재개하지 않는다.

**갱신** 2026-09-09 (후속 v2 라운드 종료 · 라이브 확인 반영)

## 배포 좌표

| 항목 | 값 |
|---|---|
| 사전 버전 / REV | **v4.2.5** / `81a235c06fd7a8c65ba720b3642fe72a5a4af817` (strings 103,042 · _text 9,094) |
| 로더 버전 / SHA | **v4.9.2** / `0fcf2569f1e0bc26b410f4c4ea8ca35fed6979cb` (로직 무변경, REV·버전만) |
| Custom JS 슬롯에 실제 들어있는 로더 SHA | `0fcf2569f1e0bc26b410f4c4ea8ca35fed6979cb` (v4.9.2 / REV 81a235c) — 2026-09-09 교체·라이브 확인 완료 |
| 레거시 DOM 레이어 핀 | `@8fabb6a/js/dashboard-ko.min.js` (스테일 핀 유지 결정 — 아래 미결) |
| CDN 삼중 대조 | core / apps / loader 모두 CDN = raw = local = git (SHA-256), `immutable`, CORS `*` (2026-09-09) |

Custom JS 칸 (Agency Whitelabel → Custom JavaScript) — **실제 슬롯은 아래 2줄뿐이다.** `HC_I18N_EXCLUDE` 선언 줄은 없고, 제외 로케이션은 두 레이어의 하드코딩 폴백(`HC_EXCLUDE_FALLBACK` / 레거시 `hcEx()`)에 의존한다(미결 #8).

```html
<script src="https://cdn.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@0fcf2569f1e0bc26b410f4c4ea8ca35fed6979cb/js/hc-ko-app-loader.js"></script>
<script src="https://cdn.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@8fabb6a/js/dashboard-ko.min.js"></script>
```

## 라이브 확인값 (`__hcKoApp.status()`)

| 시점 | 로더 | rev | host | textEntries | 라우트 | 확인자 |
|---|---|---|---|---|---|---|
| 2026-09-09 (v2 슬롯 교체 후) | 4.9.2 | `81a235c…` | 1 | 9,094 | `/v2/location/r6JD1nsqtk6Oln28fgrj/ai-agents/agent-studio` · `…/super-agents/agent/new` | Claude Chat (크롬) |

※ 종전에 적었던 "4.9.1 확인" 행은 실제 라이브 검증이 아니라 raw 재현값이었으므로 삭제했다.

콘솔 판정 스크립트: `scripts/verify-deploy.js` (EXPECT 4.9.2 / 81a235c / 9094 — **미커밋 diff, 승인 대기**).

## 게이트

- `ALLOW = ['r6JD1nsqtk6Oln28fgrj']` 단일 로케이션 (v4 는 여기서만 동작)
- 제외 `1r0pJRd1cQQ5DZsjSbc9` — 슬롯에 `HC_I18N_EXCLUDE` 선언이 **없어** 두 레이어의 하드코딩 폴백으로만 동작 중(미결 #8)
- **에이전시 라우트(`/agency_dashboard` `/sub-accounts` `/snapshots` `/reselling`)는 v4 범위 밖** — `booted:false, suspended:true`. 그 화면 한국어는 레거시 레이어가 친 것.

## 미결

| # | 항목 | 상태 |
|---|---|---|
| 1 | `scripts/verify-deploy.js` EXPECT 갱신 (A) | diff 준비됨 · **미커밋 · 승인 대기** |
| 2 | `scripts/validate-ko-app.py` C3 + `i18n-batch-translator.py` `ph_ok` 에 `%[A-Za-z_]+%` 추가 (B) | diff 준비됨 · 로컬 검증 통과(C3 0, 소실 감지 실증) · **미커밋 · 승인 대기 · 우선순위 최상** |
| 3 | CI 'REV↔사전 일치' 스텝 구조적 빨간불 (C) | 설계안 3종 `BUILD-ORDER-PROPOSAL.md` 마지막 절 · 미실행 |
| 4 | 킬스위치 범위 | `?hcko=off` / `__hcKoApp.off()` 는 v4 만 끈다. 레거시 `dashboard-ko@8fabb6a` 는 계속 동작 → 전면 영어 복귀는 Custom JS 3줄째 제거로만 가능 |
| 5 | `hcEx()` 게이트를 `build-dashboard-ko.py` 템플릿에 반영 | C11 이 감시 중(템플릿·소스 ✅, min 은 다음 빌드) — 빌드 트리거(en.json 개행 토글) 전에 확인 |
| 6 | 스테일 핀 `8fabb6a` 유지 | 운영 사전 11,810건, @main 은 37,395건이지만 미반영분 98% 를 v4 가 커버 → 핀 이동은 레거시 축소·재빌드와 한 번에 |
| 7 | Managed Agents 표기 잔존 | `0 Managed Agents`(가변 숫자) — `_text` 정확 일치 한계 |
| 8 | `HC_I18N_EXCLUDE` 는 로더 폴백에 의존 중 | 슬롯에 `<script>window.HC_I18N_EXCLUDE=[…]</script>` 를 명시할지 **벤자민 결정**. 명시하면 로더 재배포 없이 배열만 고쳐 제외 계정을 바꿀 수 있고, 안 하면 제외 변경 = 두 레이어 재배포 |
| 9 | `_text` 11건 추가 (Claude Chat 라이브 감사분) → 사전 4.2.6 / 로더 4.9.3 / 슬롯 재교체 | **목록 미수신** — 11건 원문·번역이 전달되면 착수. 함께: `_text` 만 바뀔 때 REV·슬롯 교체 없이 가는 설계안 `BUILD-ORDER-PROPOSAL.md` 마지막 절 (권장: REV 포인터 파일) |

## 알려진 잔존 영문 (번역 대상 아님 또는 대응 불가)

- `0 Managed Agents` — 숫자 가변, `_text` 패턴 미지원
- 에이전트 템플릿(use case) 판매자 콘텐츠 — 사용자·판매자 데이터, 번역 대상 아님
- 로케일 카탈로그 밖 하드코딩 문구 — `_text`(원문 정확 일치)로만 대응 가능. 노드가 분리돼 있거나 대시·따옴표 문자가 다르면 매칭 실패

## 관련 파일

- `data/DECISIONS.md` — 확정/기각 결정 (2026-09-09 Managed Agents→관리형 에이전트 [확정])
- `DEPLOY-v4.md` — 설치·라이브 확인 절차 (상단 배너: REV 갱신과 슬롯 교체는 한 세트)
- `PLAN-superagents.md` — 이번 두 라운드의 계획·진행 기록
- `data/reports/2026-09-09-superagents-ko-report.md`, `…-v2-report.md` — 라운드 보고서
