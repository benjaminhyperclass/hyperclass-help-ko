# Managed Agents(superagentsApp) 한국어화 보고 — 2026-09-09

지시서: Claude Chat(라이브 진단 기반) · 실행: Claude Code · 승인: Benjamin

## 1. 건수
| 구분 | 건수 |
|---|---|
| 입력 키 | 855 (superagentsApp 628 / copilotApp 227) |
| 이미 host 에 있어 제외 | 2 (`copilotApp.copilot.askAi.preview.email.senderTo`, `…evaluationListTable.of` — 입력 en 값 자체가 우리 ko 값이라 번역 불필요) |
| 처리 | 853 |
| ├ 재사용 | 403 (manual-dict 165 / AI 네임스페이스 reference 171 / reference 최빈 51 / ko.json 16) |
| ├ 신규 번역 | 450 (claude-sonnet-5, 5배치, 실패 0) |
| ├ DNT 토큰 | 0 (원문 855건에 7종 토큰 없음) |
| └ identity(영문 유지) | 39 (모델명·브랜드·기호·경로·cron 식) |
| 교정 | 119 (재사용 문맥 15 / 용어·조사 35 / 적대적 리뷰 반영 69) |
| `_text` 추가 | 5 |
| reference 등재 | 853 |

## 2. 검사 결과
| 검사 | 결과 |
|---|---|
| validate-ko-app.py C1~C11 | 위반 0 (검사 대상 103,022 / en·ko 쌍 79,534) |
| check_dnt_whitelabel.py (배포본) | D1 0 / D2 0 / D3 0 / W1 0 |
| scripts/whitelabel.py (신규 ko 853 · en 855) | 위반 0 |
| 플레이스홀더 `{x}` 56 + `%x%` 5(4키) + `{'|'}` 1 | 불일치 0 — `%n%` `%q%` `%cat%` 별도 대조 |
| 크론 리터럴 (`0 9 * * 1-5`, `(1,3,5)`, `(1-5)`, `(*/5)`) | 원형 유지 |
| 검증8 (host 최상위 타입 변화 / 네임스페이스 leaf 감소 / 기존 값 변경) | 0 / 0 / 0 |
| split 왕복 (배포본 ↔ 편집 정본) | 일치 |
| CDN = raw = local = git (SHA-256) | core / apps / loader 3개 모두 일치, `immutable`, CORS `*` |
| CI ko-app-validate | 로더 커밋 dcee3b4 ✅ / 사전 커밋 60e7b0b 는 'REV↔사전 일치' 스텝만 ❌ (사전 커밋 시점엔 로더가 옛 REV — 매 라운드 반복되는 구조적 순서 문제, 검증 스텝은 전부 ✅) |

## 3. 배포 좌표
- 사전 v4.2.4 커밋(REV): `60e7b0b4684a9f7214ebd257b7e0fa999dddbf9b` (strings 103,041 · _text 9,093)
- 로더 v4.9.1 커밋: `dcee3b49023d3c7567d8d1d843db20e832c8e04c` (로직 무변경, REV·버전만)
- **Custom JS 에 넣을 URL (2번째 줄 교체):**
  `https://cdn.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@dcee3b49023d3c7567d8d1d843db20e832c8e04c/js/hc-ko-app-loader.js`
- 라이브 기대값: `__hcKoApp.version` = `4.9.1` / `status().rev` = `60e7b0b…` / `status().textEntries` = `9093` / `host` ≥ 1

## 4. 결정·가정 (Benjamin 확인 필요)
1. **Managed Agents 표기**: 지시서 권장대로 영문 유지. 그러나 기존 `_text` 에 `Agent Studio: Managed Agents→관리형 에이전트`, `Managed Agents(formerly Super Agents)→관리형 에이전트(구 슈퍼 에이전트)`, `agentLogsApp…superAgents→관리형 에이전트` 가 이미 있어 **사이드바/로그는 '관리형 에이전트', 목록·빌더 화면은 'Managed Agents'** 로 공존한다. 한쪽으로 통일하려면 결정 후 별도 라운드.
2. **Draft → 임시 저장**: 지시서는 '초안'이나 기존 agentStudioApp 15건·번역 지침 용어집이 '임시 저장'이라 관례를 따랐다(`status.draft`, 게시 안내문 2건). 이미지 품질 힌트의 "drafts"(일반명사)만 '초안 작업'.
3. **Won/Lost/Abandoned = 승리/손실/중단됨**: 리뷰어가 성사/실패를 제안했으나 앱 전역(`common.won` 등 각 15건)이 승리/손실이라 유지.
4. **`_text` 제외 2건**: `Managed Agents`(h1)는 영문 유지라 키==값(C7 위반)이 되어 미등재. `0 Managed Agents` 는 `_text` 가 trim 후 정확 일치만 지원해 제외.
5. **`_text` 긴 문장 가정**: `are prompt-based agents — …` 는 앞의 굵은 "Managed Agents" 가 별도 노드이고 대시가 U+2014 라는 전제. 라이브 확인에서 영어로 남으면 노드 경계·대시 문자를 의심할 것.
6. WhatsApp/Copilot/Facebook 은 영문 유지(코퍼스 299:41). Customize 탭은 '커스터마이징', Actions(빌더 범위)는 '액션', Custom 은 '커스텀'으로 통일.

## 5. 스크립트 변경 필요 (하지 않음 — 지시서 규칙)
1. `scripts/verify-deploy.js` EXPECT → `version: '4.9.1'`, `revPrefix: '60e7b0b'`, `textEntries: 9093` (종전 라운드는 로더 커밋에 함께 갱신했음).
2. `scripts/validate-ko-app.py` C3 `PH_PATTERNS` 에 `%[A-Za-z]+%` 없음 → `%n%` 계열은 검사 사각지대. 이번엔 별도 대조로 0건 확인. 한 줄 추가 필요.
3. `scripts/i18n-batch-translator.py` `PH_RE` 도 `%x%` 미포함 → 번역기가 이를 훼손해도 `ph_ok` 가 잡지 못한다(이번엔 훼손 없음).
4. CI 'REV↔사전 일치' 스텝은 사전 커밋마다 필연적으로 빨간불 — 로더 커밋과 같은 push 에 묶거나 `_source/`·`data/` 만 바뀐 push 에서는 경고로 낮추는 설계 검토.

## 6. 백로그 (이번 범위 밖, 기록만)
- `agentStudioApp.graphBuilder.testBotPanel.labels.transition` = '전환 효과'(오역 추정, 신규 키는 '전환').
- `_source/TRANSLATE_INSTRUCTIONS.md` Form→폼 vs 실제 사전 양식 — 용어집 문서 갱신.
- 기존 copilotApp 'Sources 출처 / Close sources 소스 닫기' 분열, 'Discard→삭제' 관례.
