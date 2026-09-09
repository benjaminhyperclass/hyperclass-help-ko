# PLAN — REV 포인터 라운드 + 4.2.6 무슬롯 배포 · 2026-09-09

Benjamin 결정(2026-09-09): A·B 단독 커밋 승인 / 포인터 설계(조건 3) 승인 / 순서 A → B → 포인터 → 4.2.6(_text 11건).

## 대상 파일
| 파일 | 작업 | 단계 |
|---|---|---|
| `scripts/verify-deploy.js` | EXPECT 4.9.2/81a235c/9094 (준비된 diff) | A |
| `scripts/validate-ko-app.py`, `scripts/i18n-batch-translator.py` | `%[A-Za-z_]+%` 플레이스홀더 | B |
| `js/hc-ko-app-loader.js` | v4.10.0: 포인터 SWR(캐시/내장 REV 로 부팅, raw 포인터는 백그라운드), 포인터 REV 로드 실패 시 내장 REV 재시도, 옛 버킷 정리에서 포인터 캐시 제외, status 확장, `_text` 조사 선행 공백 처리 | 포인터 |
| `data/hc-ko-app-rev.json` | 신설 `{"rev":"81a235c…"}` (현재 배포 사전) | 포인터 |
| `.github/workflows/ko-app-pointer.yml` | 신설: core/apps 변경 push → jsDelivr @SHA 200+SHA-256 대조(재시도) → 봇 포인터 커밋. cancel-in-progress 없음 | 포인터 |
| `.github/workflows/ko-app-validate.yml` | 'REV↔사전 일치' → '포인터↔사전' (포인터 커밋 유효성 hard / HEAD 불일치는 ⚠️ 갱신대기·롤백) + 내장 REV 커밋 존재 | 포인터 |
| `DEPLOY-v4.md` | 배너 교체(슬롯 1회 고정), 롤백 절 | 포인터 |
| `docs/STATE.md` | 좌표·미결 갱신 | 포인터·4.2.6 |
| `_source/hc-ko-app.pretty.json` → split | `_text` +11, meta 4.2.6 | 4.2.6 |

## 의존성
- 로더 v4.10 SHA → DEPLOY-v4 슬롯 URL → **벤자민 마지막 슬롯 교체** (이후 무슬롯)
- 4.2.6 사전 커밋 → ko-app-pointer 워크플로가 포인터 커밋 → 라이브 rev 가 4.2.6 SHA
- 봇 push(GITHUB_TOKEN)는 워크플로를 재발화하지 않음 → 루프 없음. 포인터 검증은 커밋 전 jsDelivr 대조로 대체
- 롤백(사람이 포인터만 수정)은 core/apps 변경이 아니므로 pointer 워크플로 미발화 → 자동 전진으로 되돌려지지 않음

## 순서
1. A 커밋 → 2. B 커밋 → push
3. 로더 v4.10 작성 → node --check → 적대적 리뷰(서브에이전트) → 수정 → 포인터 파일·워크플로·문서 → 커밋·push → CDN 대조
4. 4.2.6: pretty _text +11 → split → 검증 → 커밋·push → pointer 워크플로 완료 대기 → 포인터==새 SHA 확인 → verify-deploy EXPECT 갱신 커밋
5. STATE.md·보고

## 완료 기준
- A/B 각각 단독 커밋, CI 초록
- 로더 v4.10 CDN=raw=local, 포인터 파일 raw 200
- 4.2.6 push 후 사람 손 없이 포인터가 새 SHA 로 전진, jsDelivr @새SHA 대조 일치
- "관리형 에이전트 는" 공백 원인 규명·수정

## 진행
- [x] A 451b683 / B 1ec2e19 (CI 초록) — 영향: 없음
- [x] 로더 v4.10.0: 포인터 SWR(캐시→localStorage→내장), 백그라운드 갱신, 불량 rev 기억(localStorage.hcKoBadRev), purge 를 core 로드 뒤로, joinsPrev(be/조동사 시작 원문 + 조사 시작 값). 하네스 24건 통과. 적대적 리뷰 H1·M6·L7 반영(M5 는 운영 규칙 명문화로 대응) — 영향: 슬롯 SHA 1회 교체(마지막)
- [x] ko-app-pointer.yml: validate 성공 workflow_run 에서만 전진, 검증된 blob 과 대조, 롤백 보호(by≠봇 & 대상이 롤백 커밋보다 오래되면 skip, force 로만), 경합 재시도, 커밋 후 자체 검사 — 영향: 사전 push 뒤 validate 가 취소되면 전진 안 됨 → validate 를 dispatch 로 재실행
- [x] ko-app-validate.yml: REV 스텝 → 포인터·내장 REV 실존 하드 게이트 + HEAD 불일치는 ✅/⚠️수동/⏳/⚠️ 요약
- [x] verify-deploy.js: EXPECT 4.10.0 / 포인터 rev / revSource 표시 (A 승인 범위의 EXPECT 갱신 + 주석 정정)
- [x] 로더 커밋 76c557f → CDN=raw=local=git 일치 · validate ✅ · pointer(workflow_run) ✅ "이미 최신" — 영향: DEPLOY-v4·STATE 갱신(a4473f3)
- [x] 4.2.6 (c9879e0): _text +11 → validate ✅ → ko-app-pointer 전진 봇 커밋 4ed156d (81a235c → c9879e0, jsDelivr 대조 ✅). **첫 무슬롯 배포 성공** — 영향: verify-deploy EXPECT 갱신
- [x] 보고서 data/reports/2026-09-09-pointer-report.md
잔여(벤자민): 슬롯 0fcf256 → 76c557f 마지막 교체 → 라이브 2회 로드 확인(1차 내장 81a235c, 2차 포인터 c9879e0 / textEntries 9105 / "관리형 에이전트는")
