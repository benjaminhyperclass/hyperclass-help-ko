# 빌드 순서 교정 제안 (미실행 — 승인 대기)

**작성** 2026-08-22 · **대상** `scripts/build-*.py` · **상태** 제안만. 스크립트는 손대지 않았습니다.

## 왜 회수가 필요했나

v4 빌드가 **크롤 산출물을 베이스로 깔고 레거시를 보조로** 썼습니다. 그 결과:

| 자산 | 보유 | v4 반영 |
|---|---:|---:|
| `data/ghl-i18n-ko.json` | 15,644 | 8,310 (53%) |
| `data/manual-dict-v401.json` | 4,770 | 780 (16%) |

이미 번역이 끝난 문자열이 사전에 안 들어갔습니다. 이번 라운드에서 4,805건을 회수했습니다.

## 제안

```
현재:  crawl → (부분) ko.json → (부분) manual-dict
권장:  ko.json → manual-dict → crawl 로 덮어쓰기
       (manual-dict 는 최우선 override 이므로 crawl 이후 한 번 더 적용)
```

최종 우선순위: `manual-dict` > `crawl` > `ko.json`

레거시를 베이스로 깔면 크롤이 놓친 화면(온보딩처럼 조건부 마운트되는 앱)의 번역이 살아남습니다.

## 이번 회수가 드러낸 추가 사실 — 순서만으로는 안 풀림

`ghl-i18n-ko.json` 37,570건 중 **31,174건이 네임스페이스 없는 말단 이름**입니다
(`saasMode`, `agency`, `compliance` …). 어느 네임스페이스 소속인지 정보가 없습니다.

- 그중 91.5%는 이미 host에 같은 한국어로 존재합니다 (중복)
- 루트에 넣으면 `host.agency`(620키) 같은 네임스페이스가 **문자열 하나로 파괴**됩니다
- 이번 라운드에서 3,209건을 `unplaceable_bare_name` 으로 격리했습니다

**순서를 바꿔도 이 3만 건은 여전히 배치 불가입니다.** 병합 키를 만들려면
`_source/hc-ko-app-reference.json`(원문 대조본)으로 원문→경로를 역인덱싱해야 합니다.
같은 원문이 여러 경로에 쓰이면 그것도 모호해집니다.

## 함께 제안 — 번역기 URL 보호

`campaign.regulatoryBundle.ejectModal.faqsUrl` 에서 실측:

```
EN: gohighlevel.com/getstartedtoday-em
KO: 하이퍼클래스.com/getstartedtoday-em   ← 존재하지 않는 도메인
```

화이트라벨 치환이 URL에까지 적용됐습니다. 브랜드가 이미 지워져 브랜드 검사에는 안 걸립니다.
`scripts/whitelabel.py` 에 되돌리는 규칙과 검사기 C8이 이미 들어가 있지만,
**발생 자체를 막으려면** `i18n-batch-translator.py` 에 URL·이메일·도메인을 번역 대상에서
빼는 규칙이 필요합니다.

## 검증 8번 추가 제안 (이번 라운드에서 실사용)

수량 검증과 80% 세이프티만으로는 이번 사고를 못 잡습니다.
25개 네임스페이스가 파괴돼도 host 총계는 **111%로 늘어나** 통과합니다.

```
검증8: 머지 전후 host 최상위 키의 dict→str 타입 변화 0개
       + 네임스페이스별 leaf 수 비감소
```

이번 라운드에서 이 검사가 파괴를 실제로 잡아냈습니다. 검사기에 상설화할 것을 제안합니다.

## 승인이 필요한 이유

`scripts/*` 수정은 벤자민님 승인 사항입니다. 위 3건(빌드 순서·URL 보호·검증8 상설화)은
전부 스크립트 수정이라 이 문서로 제안만 남깁니다.

## CI 'REV↔사전 내용 일치' 스텝 — 사전 커밋마다 구조적 빨간불 (2026-09-09 추가, 미실행)

**현상.** `.github/workflows/ko-app-validate.yml` 의 "로더 REV ↔ 사전 내용 일치" 스텝은 로더의 `REV` 가
가리키는 커밋의 `data/hc-ko-app-{core,apps}.json` blob 이 HEAD 와 같은지 본다. 사전을 바꾼 커밋 시점에는
로더가 **아직 이전 REV** 를 가리키므로(REV 는 그 커밋 SHA 를 알아야 쓸 수 있다) 이 스텝은 반드시 실패한다.
실측: 60e7b0b(v4.2.4) ❌ → dcee3b4(로더 4.9.1) ✅, 81a235c(v4.2.5) ❌ → 0fcf256(로더 4.9.2) ✅.
검증 스텝(C1~C11·DNT·브랜드·문법)은 두 커밋 모두 통과했다. 즉 빨간불이 "검증 실패" 와 구분되지 않는다.

**후보.**

| # | 안 | 장점 | 단점 |
|---|---|---|---|
| 1 | 사전 커밋(`data/`·`_source/` 만 변경, 로더 무변경)에서는 이 스텝을 **warning** 으로 강등 | 워크플로 한 줄 조건(`git diff --name-only HEAD~1 -- js/hc-ko-app-loader.js` 비어 있으면 `continue-on-error`) | 로더 갱신을 잊으면 경고만 남고 초록 — DEPLOY-v4 상단 배너의 "배포 잠김 함정" 을 CI 가 더 이상 막지 못함 |
| 2 | 로더 파일이 바뀐 push 에서만 실행 | 1 과 같되 조건이 더 명시적 | 같은 단점. 사전만 바꾸고 로더를 안 올리는 실수를 못 잡음 |
| 3 | **사전 + 로더를 한 커밋으로** — REV 를 커밋 SHA 대신 **사전 blob 해시**(`git hash-object data/hc-ko-app-core.json`) 또는 `_meta.version` 기반 태그로 바꾸고, jsDelivr URL 은 그 태그(`@v4.2.5`)를 쓴다 | 커밋 순서 문제가 근본적으로 사라짐. 한 push 로 끝나 "REV 갱신 + 슬롯 교체 한 세트" 규칙도 단순해짐 | 로더·CI·DEPLOY-v4 세 곳 수정. 태그는 mutable 이라 jsDelivr `immutable` 캐시 이점을 잃음(태그 재지정 금지 규칙 필요). 로더 `REV` 검사식(blob 비교)도 재작성 |

**권장.** 단기는 **1** (경고 강등 + 요약에 "로더 갱신 대기" 문구), 장기는 **3** 을 별도 라운드로.
어느 쪽이든 `scripts/`·워크플로 수정이라 승인 후 진행한다.

## `_text` 만 바뀔 때 REV·슬롯 교체 없이 가는 방안 (2026-09-09 추가, 미실행)

**문제.** 지금 구조는 `_text`(9,094건, 약 598KB)가 `data/hc-ko-app-core.json`(3.2MB) 안에 있고, 로더가
`@REV/data/` 로 **커밋 SHA 고정** fetch 한다. 그래서 하드코딩 문구 11건을 더하는 소규모 변경도
`사전 커밋 → 로더 REV 갱신 → 로더 커밋 → 벤자민 슬롯 교체` 네 단계를 그대로 밟는다. 슬롯 교체는 사람 손이라
누락되면 "배포 잠김"(DEPLOY-v4 배너)이 된다.

**왜 SHA 고정인가(유지해야 할 것).** jsDelivr `@SHA` 는 `immutable` 이라 로더가 Cache Storage 버킷을
REV 별로 두고 재검증 없이 쓴다. `@main` 은 브랜치 해석이 최대 12h 캐시돼 퍼지가 안 먹는다(DECISIONS 확정).
raw.githubusercontent 는 즉시 반영이지만 CDN 이 없어 3.2MB 를 매 브라우저가 원본에서 받는다.

| # | 안 | 슬롯 교체 | 로더 변경 | 즉시성 | 비용·위험 |
|---|---|---|---|---|---|
| 1 | **`_text` 분리 + raw@main** — `split-ko-app.py` 가 `data/hc-ko-app-text.json` 을 따로 쓰고, 로더는 `raw…/main/data/hc-ko-app-text.json` 을 `cache:'no-cache'` 로 받는다. 실패 시 `@REV` core 의 `_text` 로 폴백 | `_text` 변경 시 **불필요** | 1회 (v4.10) | raw = 즉시 | 598KB 를 CDN 없이 매 세션 조건부 GET(ETag 304 면 헤더만). core/apps 는 종전대로 immutable. CI 'REV↔사전 일치' 는 text 파일 제외 필요 |
| 2 | **REV 포인터 파일** — 로더는 `raw…/main/data/hc-ko-app-rev.json`(`{"rev":"<sha>"}`, 수십 바이트)을 먼저 받아 그 SHA 로 `@SHA/data/` 를 fetch. 실패 시 로더에 박힌 REV 사용 | **사전·_text·apps 어느 변경에도 불필요** | 1회 (v4.10) | 포인터 raw = 즉시, 본문은 jsDelivr immutable 그대로 | 포인터는 사전 커밋 **다음** 커밋에 넣어야 SHA 를 알 수 있다(자동화 가능, 사람 손 없음). CI 는 "포인터 SHA 의 blob == HEAD blob" 로 검사식 치환. Cache Storage 버킷 이름도 포인터 SHA 기준 |
| 3 | 태그 REV(`@v4.2.6`) | 불필요 | 1회 | jsDelivr 태그 해석 캐시로 **즉시 아님**(@main 과 같은 부류) | immutable 이점 상실. 기각 사유가 @main 과 같음 |
| 4 | 현행 유지 + 슬롯 교체 자동화(GHL API 로 Custom JS 필드 갱신) | 자동 | 없음 | 즉시 | 에이전시 화이트라벨 설정을 API 로 쓰는 경로가 확인되지 않음(공개 API 없음 추정). 실패 시 전면 영어 위험 |

**권장.** **2번(포인터)** — 슬롯은 로더 1회만 고정하고 이후 모든 사전 갱신에서 사람 손이 사라진다.
`_text` 만이 아니라 이번 라운드처럼 host 7키 교정에도 같은 효과다. 1번은 2번의 부분집합이라 굳이 나눌 이유가 없다.
포인터 fetch 가 실패해도 로더 내장 REV 로 동작하므로 지금보다 나빠지는 경로는 없다.

**변경 범위(승인 필요).** `js/hc-ko-app-loader.js`(포인터 fetch·CACHE 이름·RAW 폴백) · `scripts/split-ko-app.py`(포인터 파일은 쓰지 않음 — 커밋 SHA 는 push 후에 알 수 있으므로 별도 스텝) · `.github/workflows/ko-app-validate.yml`(REV 검사식을 포인터 기준으로) · `DEPLOY-v4.md`(배너 문구: "REV 갱신 + 슬롯 교체 한 세트" → "포인터 갱신 한 번"). 포인터 커밋은 `sha=$(git rev-parse HEAD)` 후 한 줄 커밋이라 `update-translations.sh` 류에 넣어 자동화 가능.
