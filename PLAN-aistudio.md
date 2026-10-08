# PLAN — AI Studio 한국어화 + v4 전 서브계정 개방 · 2026-10-08

요청(벤자민): 새 메뉴 AI Studio 하위 모든 페이지·버튼·설명 한글화 + v4 를 r6JD 외 **전 SaaS 고객 서브계정**에서 동작.
실행: Claude Code. 라이브 수집: 벤자민 크롬 콘솔(이 세션에 Claude in Chrome 미연결).

## 대상 파일
| 파일 | 작업 |
|---|---|
| `scripts/hc-aistudio-collect.js` | 신규 — 카탈로그(호스트 미번역 키·별도 앱 전체)·렌더 영문·iframe·i18n_cache 수집기 |
| `_source/aistudio-*.json` | 수집 원본 보존 |
| `_source/hc-ko-app.pretty.json` | host/apps/_text 추가, `_meta` 버전 |
| `_source/hc-ko-app-reference.json` | 새 키 en/ko 등재 (C2~C6 검사용) |
| `data/hc-ko-app-core.json` · `apps.json` | `split-ko-app.py` 재생성만 |
| `js/hc-ko-app-loader.js` | ALLOW=[] + **빈 ALLOW 는 `/v2/location/` 라우트에서만 동작**(에이전시 화면은 레거시 유지) · version 4.11.0 |
| `DEPLOY-v4.md` · `docs/STATE.md` · `data/DECISIONS.md` | 개방 반영 |

## 의존성
- 수집 JSON → 번역 범위 결정 (별도 앱이면 fingerprint 로 apps 에, 호스트 네임스페이스면 host 에, 하드코딩이면 _text)
- pretty → split → 사전 커밋 → 포인터 봇 전진 (슬롯 교체 불필요)
- 로더 변경(ALLOW) → 로더 커밋 SHA → **Custom JS 슬롯 교체 1회 필요(벤자민)** — 0fcf256/76c557f 대기분도 이걸로 흡수
- ALLOW 개방 시 짧은 `_text` 키가 다른 계정의 단계명·태그와 정확히 같으면 치환됨(check-conventions §5 경고) → 5자 이하 _text 목록 재점검
- 교차 출처 iframe 안 화면은 Custom JS 로 손댈 수 없음 → 수집기에서 iframe 여부 먼저 확인

## 순서
1. 수집기 작성 → 벤자민이 AI Studio 전 페이지 순회·다운로드
2. 수집분 분석: 기존 사전 대비 신규만 추출, 사용자 데이터 제거
3. 재사용 매핑 → 번역기 → 용어집 후처리(AI 스튜디오·관리형 에이전트 등)
4. pretty 병합 → split → validate / DNT·브랜드 / %x%
5. 로더 게이트 수정 + 하네스 스모크
6. 적대적 리뷰(서브에이전트, 히스토리 미제공) → 지적분만 수정
7. 커밋·push → 포인터 전진 확인 → 로더 SHA 로 슬롯 교체 안내
8. 라이브 확인(r6JD + 다른 서브계정 1곳 + 에이전시 화면 + 제외 계정) · STATE/보고서

## 완료 기준
- AI Studio 하위 수집 영문 중 번역 대상 100% 사전 반영(제외분은 사유와 함께 목록화)
- validate 위반 0, DNT·브랜드 0
- 로더: 서브계정 아무 곳 allowedHere=true, 에이전시 화면 false, 제외 계정 false
- 슬롯 교체 후 라이브 확인 기록

## 진행 기록
- [x] 1 수집기 `scripts/hc-aistudio-collect.js` (node --check 통과) — 영향: 없음(콘솔 전용, 리포 산출물 아님)
- [x] 5(선행) 로더 게이트: ALLOW=[] + 빈 ALLOW 는 `/v2/location/` 한정 · REV_BUILTIN 81a235c→c9879e0(한 달 소킹) · 4.11.0. vm 스모크 6경로 기대대로(서브계정 true / 에이전시·제외·`/location/`단독 false) — 영향: 미커밋. 슬롯 교체 1회 필요, DEPLOY-v4·STATE 갱신 필요
- [x] 2 수집분 분석 `_source/hc-aistudio-2026-10-08.json` — **AI Studio = `/vibe` 라우트, 본문은 교차 출처 iframe `leadgen-vibe-ai-builder.leadconnectorhq.com`** → Custom JS(v4·레거시) 접근 불가. 바깥 셸에서 잡힌 vibe 영문 25건뿐(대부분 계정 데이터·전화 위젯). 라이브 로더는 아직 4.9.2/81a235c(76c557f 슬롯 교체 미실시) — 영향: 번역 경로 결정 필요(확장 vs 셸만) → 벤자민 판단 대기
- [x] 6(선행) 로더 적대적 리뷰 → E1(에이전시 경유 제외계정 새로고침 누락)·E2(부팅 경쟁)·E5(원격 킬스위치) 반영, 하네스 8/8 PASS(구 코드는 4 FAIL) — E3(_text 짧은 업종 단어 44건 신규 노출)·E4(성능)·E6/E7 은 보고만
- [x] 7(로더) 45e5a5e v4.11.0 push, CDN=raw=local=git 일치 · 12b0667 DEPLOY-v4/STATE — 영향: 슬롯 교체(벤자민) 대기
- 발견: validate CI 가 C10 15건으로 실패 — 원인은 이번 변경 아님. 09-15 ui-updater 봇(757d86f)이 08-22 제거한 EMA ejectModal 15종을 ghl-i18n-ko.json 에 재추가(en.json 에 원문 잔존 + 업데이터가 제외 레지스트리 미준수). v4 사전 push 시 포인터 전진을 막으므로 AI Studio 사전 반영 전 처리 필요 — 벤자민 판단
- [ ] 2b 확장 수집분(hc-gap-*.json) 대기 → en.json 병합 → ui-updater
