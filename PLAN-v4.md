# PLAN — 메인 앱 한글팩 v4 배포

작성 2026-08-22 · 지침 원본 `~/Downloads/CLAUDE-CODE-지침-v4배포.md`

## 대상 파일

| 경로 | 출처 | 성격 |
|---|---|---|
| `_original/hc-ko-app-loader.js` | v4 패키지 | 원본 보존 (수정 금지) |
| `_source/hc-ko-app.pretty.json` | v4 패키지 | **편집 정본** — 번역 수정은 전부 여기서 |
| `_source/hc-ko-app-reference.json` | v4 패키지 | 키 ↔ {en,ko} 대조표 69,437건 (읽기 전용) |
| `data/hc-ko-app-core.json` | pretty 에서 분할 | 배포본 (로더가 fetch) |
| `data/hc-ko-app-apps.json` | pretty 에서 분할 | 배포본 (로더가 fetch) |
| `js/hc-ko-app-loader.js` | 원본 + P1~P7 패치 | Custom JS 칸에 붙일 것 |
| `scripts/validate-ko-app.py` | 신규 | C1~C7 검증, 위반 시 exit(1) |
| `scripts/split-ko-app.py` | 신규 | pretty → core/apps 재분할 |
| `scripts/hc-crawl-v3.js` | v4 패키지 | 분기 갱신용, 이번 배포와 무관 |

## 의존성

- `_source/hc-ko-app.pretty.json` 을 고치면 → **반드시** `split-ko-app.py` 로 `data/` 재생성 → `validate-ko-app.py` 재실행.
  core/apps 를 직접 고치면 pretty 와 어긋나 다음 갱신에서 되돌아간다.
- `js/hc-ko-app-loader.js` 의 `REV` 는 **data/ 커밋의 SHA** 에 의존. data 커밋 → SHA 확보 → REV 교체 → 로더 커밋 순서를 지킨다.
- Stage 5(기존 사전 축소)는 `js/dashboard-ko.js` 를 건드리므로 `ui-updater.yml` 자동 빌드와 충돌 가능.
  빌드 원천은 `data/ghl-i18n-ko.json` + `manual-dict-v401.json` 이므로 **js 만 고치면 다음 자동 실행에 되돌아온다.**

## 변경 순서

1. Stage 0 — 파일 배치, 커밋 없음
2. Stage 1 — `validate-ko-app.py` 작성 + 실행, 결과 표 보고 (커밋 없음)
3. Stage 2 — pretty 수정 (2-A~2-D) → 재분할 → 재검증
4. Stage 3 — 로더 P1~P7 패치, `node --check`
5. Stage 4 — 커밋 A(data) → SHA → REV 교체 → 커밋 B(loader) → push → jsDelivr 확인
6. Stage 5 — 기존 사전 겹침 분석, **숫자만 보고** (제거 커밋 안 함)
7. Stage 6 — 브라우저 체크리스트 출력
8. 추가 — `ui-updater.yml` 판단 결과 보고

## 완료 판정 기준 (DoD)

- `validate-ko-app.py` 가 `data/` 배포본에 대해 **exit 0**
- C1(화이트라벨) 위반 0 — 단 protect 3건 화이트리스트
- C3 위반은 2-E 예외분(`{plural}` 3건 등)만 남음
- `node --check js/hc-ko-app-loader.js` 통과
- 로더의 `REV` 가 실제 data 커밋 SHA 와 일치
- jsDelivr 가 해당 SHA 경로에서 200 + `access-control-allow-origin: *` 응답
- 로더 기본값이 `ALLOW = ['r6JD1nsqtk6Oln28fgrj']` (단일 로케이션 게이트)

## 안전 규칙 (지침 원문)

1. `docs/` 금지
2. `data/ghl-i18n-en.bak.json` 덮어쓰기 금지
3. `.yml` / `scripts/*.py` 기존 파일 수정은 승인 후 (신규 스크립트 추가는 해당 없음)
4. 자격증명 출력·커밋 금지
5. 단계별 커밋 분리

## 진행 기록

- [x] Stage 0 — v4 파일 `~/Downloads/hyperclasskoappv4/` 에서 확인. 저장소 배치 완료.
      영향: 없음 (커밋 전)
- [x] Stage 1 — `scripts/validate-ko-app.py` 작성·실행. 베이스라인 C1 149 / C2 9 / C3 10 / C5 1 / C6 1 / C7 5.
      영향: 지침의 예상치(C1 80, C2 0, C3 6)와 달랐다. C1 149 는 고유 키 79개에 대한 위반 건수라 실질 일치.
      **C2 9건은 지침이 0건으로 본 것이 틀렸다** — 검사 대상을 키가 아니라 영어 원문으로 잡아야 드러난다.
- [x] Stage 2 — `scripts/fix-ko-app-v4.py` 로 총 187건 교정. 재분할 후 C1~C7 전부 0.
      영향: `_source/hc-ko-app-reference.json` 의 ko 도 함께 동기화(412건). pretty 가 정본이다.
- [x] Stage 3 — 로더 v4.1.0 P1~P7 적용. `node --check` 통과.
      영향: P4 를 3단(정확→유사도→포함)으로 만들면서 임계값을 `MIN_TOP 2 / MIN_SIM 0.6 / MIN_GAP 0.15 / CONTAIN_MAX 4` 로 확정.
      실제 24개 앱에 ns 추가·삭제를 가한 46개 시뮬레이션 전부 통과(로더 소스에서 함수를 떼어 실행).
- [x] Stage 4 — 커밋 A `d6fcc4c`(data) → REV 고정 → 커밋 B `958fb11`(loader) → push.
      jsDelivr 200 / `access-control-allow-origin: *` / `immutable` 확인. CDN 실물에서 교정 내용까지 확인.
      영향: REV 고정으로 CDN 캐시가 `immutable` 이 됐다. 사전을 바꾸면 **반드시 REV 를 새 SHA 로 갱신**해야 한다.
- [x] Stage 5 — 겹침 분석만 수행, 제거는 하지 않음 (`scripts/analyze-dict-overlap.js`).
      98.0%(36,851건) 겹침 / 742건만 고유 / 실제 표현 충돌 556건.
      영향: **`js/dashboard-ko.js` 를 직접 줄이면 다음 자동 빌드에서 되돌아온다.**
      `build-dashboard-ko.py` 가 `data/ghl-i18n-{en,ko}.json` + `manual-dict-v401.json` 에서 재생성하기 때문.
      축소는 원천이나 빌드 제외 목록으로 해야 한다.
- [x] Stage 6 — 브라우저 체크리스트 (아래 별도 섹션)
- [x] 추가 — `ui-updater.yml` 판단: **`exit(1)` 은 이미 있다**(317행, 2026-08-12 승격 `4276d3d`).
      지침의 전제가 낡았다. 실제 구멍은 그 게이트가 **평면 사전만** 검사해 v4 중첩 카탈로그를 그냥 통과한다는 것.
      `ui-updater.yml` 을 고치는 대신 `.github/workflows/ko-app-validate.yml` 을 새로 두어 파이프라인을 분리했다.
      영향: 기존 자동 배포 경로는 그대로다. v4 사전 문제로 dashboard-ko 배포가 멈추지 않는다.

## 적대적 리뷰 반영 (커밋 `c63cb6c`, 별도 에이전트·구현 히스토리 미제공)

리뷰가 실제 결함 7건을 찾았고 전부 수정했다. 사전이 바뀌었으므로 REV 도 `3e900ad` 로 갱신.

| # | 무엇 | 왜 위험했나 |
|---|---|---|
| V1 | `flat` 706건이 C2~C6 미검사 | 로더가 `core.flat[key]` 로 쓰는 배포 사전인데 검사망 밖. 실제 위반 3건 잠복 — 확인 모달이 안 눌리는 건 포함 |
| V2 | `whitelabel.py` 가 `LeadConnector` 붙여쓰기만 검사 | 공백형·약칭으로 원 제품 브랜드 45곳 노출 |
| L1 | 게이트를 로드 시 1회만 판정 | SPA 라우팅이라 계정 전환 시 비허용 로케이션에도 적용됨 |
| L3 | `merged.add` 가 매칭 **전**에 실행 | 카탈로그가 비어 있는 순간에 걸린 앱은 세션 내내 영어로 박제 |
| L4 | 캐시 버킷 누수 | REV 갱신 1회당 5.4MB 잔류, 쿼터 차면 매 로드 재다운로드 |
| L7 | 게이트에 막히면 `__hcKoApp` 이 `undefined` | "안 붙였다"와 "막혔다"를 구분 불가 |
| C1·C2 | CI paths 에 `js/` 없음 + REV 존재만 확인 | 로더만 바꾸면 CI 미실행. REV 검사는 두 번째 갱신부터 무력 |

**리뷰가 지적했으나 수정하지 않은 것 — L2 (`_text` ↔ 사용자 데이터 충돌)**
`Grant→부여`, `Retirees→은퇴자` 같은 한 단어 항목 212건이 고객 데이터와 겹칠 수 있다.
다만 **212건 전부가 기존 `dashboard-ko` 사전(37,593건)에도 있어 이미 프로덕션에서
같은 치환이 돌고 있다.** v4 가 만든 회귀가 아니므로 배포를 막지 않는다.
로더 쪽 완화(편집기·스크립트 영역 제외)만 적용하고, 사전 정리는 양쪽을 함께 봐야 하므로
아래 별도 작업으로 넘긴다.

## 후속 라운드 — DNT 전수 재검사 (커밋 `aad5cb1`·`d1cac8a`·`a0d97de`·`b5f8ce5`)

지침이 지목한 D1 11건·D3 3건은 **재검사 시점에 이미 0** 이었다(직전 두 라운드에서 해소됨).
대신 같은 전수 검사에서 새 결함이 나왔다.

| 검사 | v4 원본 | 재검사 시 배포본(`3e900ad`) | 조치 후(`d1cac8a`) |
|---|---|---|---|
| D1 리터럴 번역 | 11 | **0** | 0 |
| D2 리터럴 소실 | 0 | 0 | 0 |
| D3 모달 불일치 | 3 | **0** | 0 |
| W1 브랜드 누출 | 117 | 1 (예외 등재분) | 0 |

**새로 나온 것 — 조사 교정이 띄어쓴 조사를 통째로 놓치고 있었다.**
원문이 `HighLevel 을` 처럼 공백을 두고 조사를 붙여 놓은 경우가 있어, 브랜드만 치환하면
`하이퍼클래스 을` 이 되어 공백과 조사가 둘 다 틀린다. 종전 정규식은 붙임형만 봤다. 34건.

기존 파이프라인 사전도 같은 기준으로 처리(지침 §2-2) — `ghl-i18n-ko.json` 45건,
`manual-dict-v401.json` 7건 교정 + 43건 승격. **승격이 필요한 이유는 빌드 우선순위가
`i18n < 기존 JS < manual-dict` 라서 ko.json 만 고치면 기존 JS 가 덮어쓰기 때문이다.**

CI 편입(지침 §3): `check_dnt_whitelabel.py` 를 C1~C7 과 **병행**으로 넣고,
`paths` 에 `ghl-i18n-ko.json` / `manual-dict-v401.json` / 검사기 자신을 추가했다.
음성 테스트로 실제 차단을 실증 — `product.deleteModal.confirmationPlaceholder` 를
일부러 `삭제` 로 되돌린 브랜치에서 C1~C7 과 새 검사기가 **각각 독립적으로** 실패했다.

## 남은 것 (별도 작업)

1. **기존 사전 축소** — Stage 5 수치를 보고 판단. 원천 레벨에서 해야 한다.
2. ~~조사 오류 29건~~ **해소됨** (`b5f8ce5`) — `scripts/fix-brand-legacy.py` 로
   `ghl-i18n-ko.json`·`manual-dict-v401.json` 전부 교정. 단 **`js/dashboard-ko.js` 는
   다음 빌드에서 반영**된다. 즉시 반영하려면 `data/ghl-i18n-en.json` 말미 개행 토글로
   ui-updater 를 트리거해야 한다 — 배포 타이밍은 벤자민 판단이라 이번엔 트리거하지 않았다.
3. **`HighLevel` 22개 키 치환 — 사후 승인 필요.** 지침 §2-1 은 일괄 치환 금지였으나
   **그 지침이 오기 전 라운드에서 이미 `하이퍼클래스` 로 치환됐다.** 특히 아래는 되돌릴지 판단이 필요하다.
   - `agency.gdpr.*` 4건 — GDPR 안내에서 처리자/컨트롤러를 지칭. 지금은
     "하이퍼클래스는 데이터 처리자입니다" 로 읽힌다. 실제 처리자는 GHL 이므로 법적 정확성 검토 필요.
   - `campaign.regulatoryBundle.ejectModal.whiteLabel` — "계정을 하이퍼클래스로 직접 이전한 후" 로
     바뀌어 문장이 성립하지 않는다(이미 하이퍼클래스인데 하이퍼클래스로 이전). 문구 재작성이 맞다.
   - `communitiesApp.universityCommunity.*` 4건 — `HighLevel University` → `하이퍼클래스 아카데미`.
     확정 용어집대로라 유지가 맞다.
   되돌리려면 `scripts/fix-ko-app-v4.py` 에 예외를 등재하고 재분할·REV 갱신하면 된다.
4. **`whitelabel.py` 구멍 2종** — 파이프라인 전체를 고치려면 `scripts/whitelabel.py` 수정 승인이 필요하다.
   v4 는 둘 다 자체 교정으로 처리했지만 `data/ghl-i18n-ko.json` 쪽은 그대로다.
   - 서브도메인 없는 `gohighlevel.com` — `[\w-]+\.gohighlevel\.com` 이 앞 라벨을 요구해 빠진다.
   - 브랜드 공백형·약칭 — `LeadConnector` 붙여쓰기만 검사한다. `Lead Connector` / `LC Phone` /
     `LC Email` 이 통과한다. **값 자체는 `b5f8ce5` 로 전부 교정했고 CI 가 재발을 막지만,
     `whitelabel.py` 본체는 여전히 이 변형을 모른다** — 새 번역이 들어올 때마다 같은 누락이 난다.
5. **`_text` ↔ 사용자 데이터 충돌** — 한 단어 항목 212건(`Grant→부여`, `Retirees→은퇴자`,
   `Blueberry→블루베리` 등)이 연락처명·태그·스마트리스트명과 겹칠 수 있다.
   **212건 전부 기존 `dashboard-ko` 사전에도 있어 이미 프로덕션 동작이다.** v4 회귀가 아니다.
   로더에서 편집기·스크립트 영역은 제외했다. 사전 정리는 두 레이어를 함께 봐야 한다 —
   기존 `data/excluded-strings.json`(990건) 큐레이션 방식을 v4 `_text` 에도 적용하는 것이 맞다.
