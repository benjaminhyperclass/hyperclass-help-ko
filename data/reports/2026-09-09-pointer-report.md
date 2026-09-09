# REV 포인터 라운드 + 4.2.6 첫 무슬롯 배포 — 보고 (2026-09-09)

Benjamin 결정: A·B 커밋 승인 / 포인터 설계(조건 3) 승인 / 순서 A → B → 포인터 → 4.2.6.

## 1. 커밋 순서 (전부 main, push 완료)
| 커밋 | 내용 | CI |
|---|---|---|
| 451b683 | A `scripts/verify-deploy.js` EXPECT 4.9.2/81a235c/9094 | (B 실행에 포함) |
| 1ec2e19 | B `%[A-Za-z_]+%` 플레이스홀더 — validate C3 + 번역기 ph_ok | validate ✅ |
| **76c557f** | **로더 v4.10.0** + `data/hc-ko-app-rev.json` + `ko-app-pointer.yml` 신설 + validate REV 스텝 교체 + verify-deploy EXPECT 4.10.0 | validate ✅ · pointer ✅(이미 최신) |
| a4473f3 | DEPLOY-v4 배너·흐름·롤백 절 / STATE | — |
| **c9879e0** | **사전 v4.2.6** — `_text` +11 (9,105) | validate ✅ → **pointer ✅ 전진** |
| 4ed156d | `[Auto] REV 포인터 → c9879e0` (봇) | 자체 검사 ✅ |

## 2. 로더 v4.10.0 — 승인 조건 대응
| 조건 | 구현 |
|---|---|
| 1 부팅 경로에 raw 왕복 없음 | `resolveRev()` = Cache Storage 포인터 → `localStorage.hcKoRev` → 내장 `REV_BUILTIN`. raw 포인터는 `refreshPointer()` 가 부팅 뒤 fire-and-forget 으로 받아 저장만(다음 로드 반영, `status().revNext`) |
| 2 CI 순서 고정 | `ko-app-pointer.yml` 은 validate **성공 workflow_run** 에서만 → 검증된 커밋과 대상의 core/apps blob 동일 확인 → jsDelivr `@SHA` SHA-256 대조(8×15s 재시도) → 봇 커밋(경합 시 fetch·재계산·재시도 3회) → 커밋 직후 자체 검사. validate 의 'REV↔사전 일치' 는 포인터·내장 REV **실존** 하드 게이트 + HEAD 불일치는 요약(⏳ 전진 대기 / ⚠️ 수동 롤백)으로 교체 → 사전 커밋 빨간불 해소 |
| 3 롤백 | `rev` 를 직전 SHA 로 되돌린 커밋(by≠봇). pointer 워크플로는 롤백 커밋보다 오래된 대상으로 전진하지 않음(dispatch 도 `force=true` 필요). DEPLOY-v4 "롤백" 절 신설 |

추가 안전장치(적대적 리뷰 H1·M6·L7 반영): 포인터 REV 사전 로드 실패 → 내장 REV 재시도 + `localStorage.hcKoBadRev` 기억(재다운로드 루프 차단) · 옛 캐시 버킷 정리를 core 로드 **성공 뒤**로 · Cache Storage 없는 브라우저는 localStorage 포인터 · `REV === REV_BUILTIN` 이면 재시도 생략 · 포인터 workflow_dispatch 에 `target`/`force` 입력.
리뷰 M5(첫 방문·캐시 없는 브라우저는 내장 REV 부팅이라 롤백이 한 로드 늦음)는 운영 규칙으로 대응: **REV_BUILTIN 은 소킹된 사전만**(로더 주석·STATE 미결 #10).

Node 하네스(가짜 DOM·caches·fetch) 24건 통과: 내장 부팅·포인터 백그라운드 저장 / 캐시 포인터 부팅 / 포인터 REV 실패→내장 폴백·불량 기억·해제 / 포인터 fetch 실패 / caches 없음→localStorage / 조사 접합(오탐 "this contact" 차단) / purge 시점.

## 3. "관리형 에이전트 는" 원인·수정
원인은 `_text` 값 앞 공백이 아니라 **로더의 치환 방식**: `repl(s, t, v)` 가 trim 한 원문만 바꾸고 노드의 선행 공백(`<b>Managed Agents</b>` 와 ` are prompt-based…` 사이)을 보존한다. 영어에선 필요한 공백이 한국어 조사 앞에선 오류.
수정(`joinsPrev`): 노드에 선행 공백 · 원문이 be/조동사/동사로 시작(`is|are|was|…|runs?`) · 값이 조사(+공백·문장부호)로 시작 — 셋 다 만족할 때만 선행 공백 제거. 지시사 조각(" this contact"→" 이 연락처")은 접합하지 않음(리뷰 M3 반영).

## 4. 4.2.6 — 첫 무슬롯 배포
- `_text` +11 (Recent agents · 빌더 프롬프트 3 · 템플릿명 3 · 설명 4). `Email Campaign` 제외(이미 치환). C7·브랜드·DNT·중복 사전 점검 0.
- validate C1~C11 0 · DNT 0 · host 변경 0 · 기존 `_text` 변경 0.
- **push 뒤 사람 개입 0회**: validate ✅(push) → ko-app-pointer(workflow_run) `81a235c → c9879e0` jsDelivr 대조 ✅ → 봇 커밋 4ed156d. jsDelivr `@c9879e0` core `4543481c…` / apps `9ad06e8e…` = git blob.
- raw@main 포인터는 `max-age=300` — 갱신 후 최대 5분 + 다음 로드에 반영.

## 5. 슬롯 (벤자민, 마지막 교체)
```html
<script src="https://cdn.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@76c557fda02cd49d27e35b1db48358c033e1f558/js/hc-ko-app-loader.js"></script>
<script src="https://cdn.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@8fabb6a/js/dashboard-ko.min.js"></script>
```
로더 CDN=raw=local=git `d32b6428…` 일치(immutable). 라이브 기대값: 1차 로드 `version 4.10.0 · rev 81a235c(builtin) · textEntries 9094` → 새로고침 → `rev c9879e0 · revSource pointer-cache · textEntries 9105`.

## 6. 하지 않은 것 · 주의
- 라이브 확인(Claude Chat). 슬롯 교체 뒤 **두 번 로드**해서 판정.
- `REV_BUILTIN` 은 81a235c(4.2.5) 유지 — 4.2.6 을 내장하지 않음(운영 규칙). 다음 큰 갱신 때 올리고 그때만 슬롯 교체.
- 사전 push 직후 약 2분간 다른 push 금지 — validate 가 cancel-in-progress 로 취소되면 포인터가 전진하지 않음(재실행: validate workflow_dispatch).
- `<pre>` 안 텍스트는 SKIP_TAGS 밖(종전과 동일) — 리뷰 L7, 변경 안 함.
