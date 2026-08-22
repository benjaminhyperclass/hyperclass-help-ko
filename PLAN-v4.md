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
- [ ] Stage 1 — 검증 스크립트 작성·실행
- [ ] Stage 2 — 사전 수정
- [ ] Stage 3 — 로더 패치
- [ ] Stage 4 — 커밋·해시 고정·CDN 확인
- [ ] Stage 5 — 겹침 분석 (보고만)
- [ ] Stage 6 — 체크리스트 출력
