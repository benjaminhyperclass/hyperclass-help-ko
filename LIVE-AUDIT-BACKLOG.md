# 라이브 감사 이월 항목 (2026-08-22)

`hc-i18n-audit.js` 로 33개 라우트를 돌아 수집한 403건 중 **334건을 `_text` 에 머지**했습니다.
나머지와, 머지하며 드러난 구조적 문제를 여기 남깁니다.

## 이월 — 결정·작업이 필요한 것

### 1. 단문 7건 — 벤자민 선별 필요 (`data/quarantine.json`)

`All` `Back` `Edit` `HVAC` `Hide` `Lead` `Yoga`

`_text` 는 텍스트 노드 **전체 일치** 치환이라 짧은 단어는 UI가 아닌 사용자 데이터를 건드립니다.
`Lead` 는 파이프라인 단계명으로 흔히 쓰이고, `HVAC`·`Yoga` 는 태그·업체명일 수 있습니다.
`Edit`·`Back`·`Hide` 는 위험이 낮아 보입니다. 눈으로 골라 주시면 그것만 넣겠습니다.

지침서는 이 7건을 안전 패치에 넣었지만, 직전 라운드에서 확정한 단문 규칙과 어긋나 보류했습니다.

### 2. 기존 값과 충돌 7건 — 머지하지 않음

지침 §7-2("기존 키를 덮어쓰지 말 것")에 따라 기존 값을 남겼습니다. 지침서는 충돌 0건이라 했으나 실제로는 7건입니다.

| 원문 | 기존 (유지) | 신규 (버림) |
|---|---|---|
| Alternative text for image not provided | 이미지에 대한 대체 텍스트가 제공되지 않았습니다 | 이미지 대체 텍스트가 없습니다 |
| Icon only toggle | 아이콘 전용 토글 | 아이콘만 표시 토글 |
| Life Insurance | 생명 보험 | 생명보험 |

나머지 4건(`Event Marketing` `Last Login` `Product Launch` `Sub-accounts`)은 값이 같아 실질 충돌이 아닙니다.
`생명 보험`/`생명보험` 띄어쓰기는 [GLOSSARY-BACKLOG.md](GLOSSARY-BACKLOG.md) 대상입니다.

### 3. 동적 문자열 15건 — `_text` 로 못 잡음

`hcko-dynamic-needs-key.json`. `"24 Sub-accounts"` `"Page 1 of 2"` 처럼 숫자가 변합니다.
`_text` 는 완전 일치라 관측값 하나만 잡히고 나머지는 새어 나갑니다.

권장 처리는 해당 컴포넌트의 i18n 키를 찾아 `core.flat` 에 넣는 것인데, **키를 모릅니다.**
`?hcko=debug` 로 해당 화면의 카탈로그를 떠서 키를 역추적해야 합니다.

### 4. 일괄 추가 금지 20건 — 키 경로 필요

`hcko-DO-NOT-bulk-add.json`. `all` `name` `open` `status` `header` `footer` 같은 일반 단어입니다.
`_text` 전역 등록하면 앱 전체의 정상 텍스트를 오염시킵니다. `core.flat` 키 경로로 처리해야 하는데 역시 키를 모릅니다.

`header`/`footer` 두 건은 지침서에서도 이안을 비워 두었습니다 — 넣지 마세요.

## 구조 문제 — 별도 이슈

### 5. i18n 키 노출 (T3_KEYLEAK) 50건 중 30건을 증상만 덮음

`titleConversionRate` `common.payments` `dateAdded` `snapshots.loadSnapshotsTemplate.saasAccount` 등이
**키 문자열 그대로 화면에 렌더링**되고 있습니다. 번역 누락이 아니라 **앱의 i18n 조회 실패**입니다.

이번에 `_text` 에 키 문자열 자체를 넣어 화면상으로는 정상 보이게 했지만, 근본 원인은 그대로입니다.
해당 앱 사전이 안 머지됐거나 지문 매칭이 실패했을 가능성이 있습니다.

확인 방법: `?hcko=debug` 콘솔에서 `merged app(exact)` / `no dict for app (포기)` 로그를 대조하고
`__hcKoApp.status().unmatched` 를 봅니다. 0이 아니면 지문 매칭 실패입니다.

### 6. ⚠️ 에이전시 라우트는 v4가 아예 안 붙습니다

이번 감사 403건 중 **283건이 에이전시 레이어**인데, 지금 `ALLOW = ['r6JD1nsqtk6Oln28fgrj']` 게이트가
`/v2/location/<id>/` 만 허용합니다. `/agency_dashboard` `/sub-accounts` `/snapshots` `/reselling` 에서는
`status()` 가 `booted:false, suspended:true` 입니다.

**즉 이번에 머지한 334건 중 에이전시 문자열은 화면에 반영되지 않습니다.** 로케이션 레이어 99건만 즉시 반영됩니다.

지금 그 화면들에 보이는 한국어는 레거시 `dashboard-ko.min.js@8fabb6a` 가 친 것이라 커버리지가 들쭉날쭉합니다
(카테고리 칩은 `마케팅 에이전시`인데 바로 아래 이름은 `Affiliate Marketing Agency`).

해소하려면 `ALLOW` 를 비우거나 에이전시 라우트를 게이트에 포함해야 하는데, **배포 범위 결정이라 벤자민님 몫입니다.**
관찰 기간이 끝나고 안정되면 `ALLOW = []` 로 여는 것이 예정된 수순입니다.

### 7. 수집 범위 한계 — 다음 차수

- 각 라우트의 **최초 로드 화면만** 훑었습니다. 모달·드롭다운·에러·빈 상태는 대부분 미수집
- 서브계정 생성 마법사는 최종 생성을 실행하지 않아 신규 계정 온보딩 런치패드가 미검증
- `/marketplace` `/partners` `/saas_education` `/automation/workflows` `/mobile_app` 은 신규 0건 —
  지연 로딩으로 인한 미수집 가능성이 있어 재확인 필요

`scripts/hc-gap-collect.js` 의 `__hcGap.sweep()` 이 스크롤·안전한 펼치기까지 하므로 다음 차수에 쓰면 이 구멍이 줄어듭니다.
