# PLAN — Managed Agents(superagentsApp) 한국어화 · 2026-09-09

지시서: Claude Chat 작성(라이브 진단 기반). 실행: Claude Code. 승인: Benjamin.

## 대상 파일
| 파일 | 작업 |
|---|---|
| `_source/superagentsApp-copilotApp.en.json` | ~/Downloads 에서 이동 (입력 원본 보존) |
| `_source/hc-ko-app.pretty.json` | host 에 `superagentsApp` 네임스페이스 신설(628) + `copilotApp` 키 단위 병합(225) + `_text` 6건 + `_meta` 4.2.4 |
| `_source/hc-ko-app-reference.json` | 새 키 855건 en/ko 등재 (C2~C6 검사 가능하게) |
| `data/hc-ko-app-core.json`, `data/hc-ko-app-apps.json` | `split-ko-app.py` 재생성만 (직접 수정 금지) |
| `js/hc-ko-app-loader.js` | REV = 사전 커밋 SHA, version 4.9.1 |
| `DEPLOY-v4.md` | 준비된 것 / 설치 URL 갱신 |
| `scripts/*` | **수정 금지** (verify-deploy.js EXPECT 도 손대지 않고 보고만) |

## 의존성
- pretty.json 변경 → split → core/apps 변경 → 사전 커밋 SHA 확정 → 로더 REV → 로더 커밋 SHA → Custom JS URL(벤자민)
- reference.json 에 en 이 없으면 validate C2~C6 이 새 키를 검사하지 못함 → pretty 와 같은 커밋에 등재
- `_text` 키==값 은 C7 위반 → "Managed Agents"(h1) 는 영문 유지 결정이면 _text 에 넣지 않음

## 순서
1. 입력 이동·분석 ✅
2. 재사용 매핑(manual > AI 네임스페이스 reference > reference 최빈 > ko.json > _text) → 스크래치 `data/ghl-i18n-ko.json` 사전 시드
3. `REPO_PATH=<scratch> i18n-batch-translator.py` 로 잔여 번역 (스크립트 무수정)
4. 후처리: 용어 통일(Managed Agents 영문 유지·Draft→임시 저장(기존 agentStudioApp 관례)·트리거·스킬·지식 베이스·게시), 크론 리터럴 원문 유지, `%n%` 보존 검사, 전건 육안 검토
5. pretty 병합(중첩) + _text + reference + _meta → split → validate(C1~C11) + merge-ko-app + check_dnt_whitelabel + 검증8(네임스페이스 무결성) + %x% 별도 검사
6. 적대적 리뷰(서브에이전트, 히스토리 미제공) → 지적 항목만 수정
7. 커밋·push → REV 갱신 + 4.9.1 → 커밋·push → CDN=raw=로컬 SHA-256 삼중 대조
8. 보고서

## 완료 기준
- validate-ko-app.py 위반 0, check_dnt_whitelabel TOTAL 0, 검증8 통과, %x% 5건 원형 보존
- 로더 REV == 사전 커밋 SHA, CDN 삼중 대조 일치
- 보고서에 재사용/신규/DNT 건수, 검사 수치, REV·로더 SHA·최종 URL, 스크립트 변경 필요 내역

## 진행 기록
- [x] 1. 입력 이동 `_source/superagentsApp-copilotApp.en.json` — 영향: 없음
- [x] 2. 재사용 매핑 403건(manual 165 / ref-ai 171 / ref 51 / ko.json 16), 문맥 교정 15건 — 영향: 없음(스크래치)
- [x] 3. 번역기 실행 450건, 5배치, 실패 0, identity 37→39 — 영향: 없음(스크래치)
- [x] 4. 후처리 교정 50건(location→서브 계정, Managed Agents 영문, Draft→임시 저장, WhatsApp/Copilot 영문, 조사) — 영향: 없음
- [x] 5. pretty 병합 853 + _text 5 + reference 853 + _meta 4.2.4/strings 103041 → split → validate C1~C11 0 / DNT·브랜드 0 / %x% 0 / 검증8 OK / 기존값 변경 0 — 영향: core/apps 재생성(커밋 필요), 로더 REV 갱신 필요
- [ ] 6. 적대적 리뷰 (진행 중)
- [ ] 7. 커밋·REV·로더 4.9.1·CDN 대조
- [ ] 8. 보고서
결정: "Managed Agents"(h1) 는 영문 유지라 _text 미등재(키==값 C7 위반) / "0 Managed Agents" 는 _text 가 정확 일치만 지원해 제외
- [x] 6. 적대적 리뷰 — H1/M13/L31 → 반영 69건(Won/Lost/Abandoned 는 앱 전역 관례 승리/손실/중단됨 유지, Copilot 표기는 세트 내 일관 유지) — 영향: pretty/reference/core/apps 재생성
- [x] 7. 사전 커밋 60e7b0b(v4.2.4) → 로더 dcee3b4(v4.9.1, REV=60e7b0b…) → DEPLOY-v4 0a2615f. CDN=raw=local=git 삼중 일치(core/apps/loader) — 영향: Custom JS 슬롯 교체는 벤자민 수동
- [x] 8. 보고서 data/reports/2026-09-09-superagents-ko-report.md
잔여(벤자민): Custom JS 로더 SHA 교체 → 라이브 확인(version 4.9.1 / rev 60e7b0b / textEntries 9093). 스크립트 변경 필요 항목은 보고서 §5.
