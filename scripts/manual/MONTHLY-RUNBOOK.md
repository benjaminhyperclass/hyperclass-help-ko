# 월간 번역 런북 — Claude 플랜(구독) 안에서만, 추가 요금 없이

> 2026-11-07 벤자민 지침: 모든 번역·검수는 Claude 플랜 안에서 한다. API 키(ANTHROPIC_API_KEY)로 과금되는 호출은 쓰지 않는다.
> 저장소 변수 `ALLOW_PAID_API` 가 `true` 가 아니면 모든 워크플로우의 API 단계는 꺼져 있다(기본 꺼짐). 이 값을 켜지 말 것.
> 한 번에 다 하지 않는다. 매달 상한만큼 처리하고, 남은 것은 다음 달로 넘긴다.

## 누가 무엇을
| 단계 | 누가 | 비용 |
|---|---|---|
| GHL 도움말 원문 수집·변동 감지 → `data/manual/queue.json` | GitHub Actions `manual-monthly.yml` (매월 2일 06:00 KST) | 무료 |
| 화면 미번역 키 수집 → `data/telemetry/en-missing/` | `ko-telemetry-digest.yml` (매일) | 무료 |
| 번역·검수·반영 | 월간 예약 작업(Claude 세션, 매월 3일) | 플랜 안 |
| 빌드·검증·배포(REV 전진, GitBook 동기화) | 기존 Actions·Git Sync | 무료 |

## 월 상한 (첫 달 결과를 보고 조정)
- 화면(UI) 미번역 키: **300개** — 2026-11 기준 대기 744개(23개 화면 묶음) → 약 3개월
- 매뉴얼 문서: **40건** — 새 글·바뀐 글 중 핵심 카테고리부터(`queue.py` 우선순위)
- 세션 사용량이 빠듯하면 상한을 줄이고, 남으면 다음 달로 넘긴다. 상한을 넘겨 한 번에 처리하지 않는다.

## A. 화면(UI) 번역 라운드
1. `git pull` 후 `NS_IN= MIN=20 python3 scripts/round-prep.py` → `/tmp/round/plan.json` (묶음별 todo 키 수)
2. todo 가 적은 묶음부터 합계 300키가 될 때까지 고른다. 각 `/tmp/round/<ns>/data/ghl-i18n-en.json` 에서 `ghl-i18n-ko.json` 에 없는 키를 **직접 번역**해 ko 파일에 채운다(seed 는 그대로 둔다).
   - 규칙: `_source/TRANSLATE_INSTRUCTIONS.md`, `data/glossary.ko.json`(확정 용어), 합쇼체, DNT(DELETE·CONFIRM·REMOVE·CANCEL·TRANSFER·DISABLE·RESET) 영어 유지, `{name}`·`@:`·`|` 복수형 등 자리표시자 그대로, 브랜드(GoHighLevel·HighLevel·LeadConnector) 금지.
   - 키가 많으면 서브에이전트에 묶음별로 나눠 맡긴다(같은 규칙 전달).
3. 고른 묶음만 남기도록 `/tmp/round/plan.json` 을 줄인 뒤, `ko-translate-round.yml` 의 **'병합 · 빌드 · 검증'** 단계 스크립트를 그대로 실행(round-merge → 버전 +1 → split → validate → DNT/브랜드 0 → glossary-audit).
4. 브랜치 `round/<날짜>` 커밋 → PR → `ko-round-review`(규칙 검사만, 무료) 통과 확인 → 머지. 머지되면 `ko-app-pointer` 가 REV 를 전진시킨다.

## B. 매뉴얼 문서
1. `python3 scripts/manual/queue.py status` → `python3 scripts/manual/queue.py next 40 --out /tmp/mq`
2. 각 `/tmp/mq/NNN.json`(원문 `source_md`, 화면 이름표 `labels`, 링크표 `links`, `workflow_builder`)을 `scripts/manual/prompt_manual_v2.md` 규칙대로 **직접 번역**해 `/tmp/mq-out/<out_path>` 에 쓴다. 서브에이전트에 5~10건씩 나눠 맡겨도 된다(프롬프트 파일 전체 + 해당 json 전달).
3. 후처리·검수·반영:
   ```
   python3 scripts/manual/postprocess.py /tmp/mq-out --review data/manual/review-notes.json
   python3 scripts/manual/lint_manual.py /tmp/mq-out/docs --json /tmp/mq-lint.json
   python3 scripts/manual/publish_results.py /tmp/mq-out /tmp/mq-lint.json --report /tmp/mq-report.json   # 검수 통과분만 docs/ 로
   python3 scripts/manual/apply_plan.py links
   python3 scripts/manual/video_links.py apply             # 새로 써진 문서 본문에 '▶ 영상' 타임스탬프 링크를 다시 넣는다(못 찾은 위치는 목록으로 출력 → 연결표 at 수정)
   python3 scripts/manual/gen_summary.py --report         # 목차(업무 흐름별) 재생성 · '기본 묶음으로 떨어진 문서'가 있으면 data/manual/toc.json 라우터에 규칙 추가
   python3 scripts/manual/lint_manual.py docs --links      # 브랜드 0 · 링크 0 확인
   python3 scripts/manual/queue.py done <반영한 id ...>
   ```
4. 브랜치 → PR → 머지(GitBook 자동 동기화). SUMMARY `## 제목`의 영문 부분은 바꾸지 않는다(공개 주소가 바뀜).

## 목차 구성 (2026-11-12~)
- 목차는 `data/manual/toc.json` 구성표로 만든다(파일은 옮기지 않음). 섹션 15개 → 묶음 페이지(`docs/_groups/`, 자동 생성 — 직접 고치지 말 것) → 문서.
- 에이전시(운영자)용 폴더·제목은 공개 목차에서 숨긴다(`hide`). 숨긴 문서로 가는 링크는 gen_summary 가 공개 문서에서 정리한다.
- 목차 구조를 바꿔 주소가 달라지면 옛 주소 → 파일 리다이렉트를 `.gitbook.yaml` 에 더한다(이번 개편 때 쓴 방식: 이전 SUMMARY 로 gitbook_urls.page_urls 계산 → 바뀐 주소만 추가). 한 대상 파일로 리다이렉트를 800개 넘게 몰면 뒤쪽이 동작하지 않으니 나눠 보낸다.

## C. 창업 챌린지 강의 영상 연결
- 형식(2026-11-11 벤자민 지침): 상자·목차 페이지 없이, 본문에서 그 내용을 설명하는 문장·소제목 옆에 `▶ 영상 [4강 2부 2:19](유튜브 &t=초)` 텍스트 링크만 둔다. 누르면 바로 그 장면이 나와야 한다.
- **유튜브에 '공개'로 올라간 강의만 연결한다.** 일부 공개(unlisted)·비공개·멤버십 전용·유료 강의는 절대 넣지 않는다. 채널 공개 목록(@benjamin_hyperclass)에서 보이는지 확인하고 `video-map.json` 의 `_meta.public_ids` 에 더해야 `video_links.py` 가 돈다.
- 연결표 `data/manual/video-map.json` 의 `placements`: `{page, at, refs:[[영상 id, 시각]]}`. at 은 `@H1`(제목 아래 첫 문단) · `#소제목` · 문장 일부. 시각은 챕터 시작이 아니라 그 장면이 실제로 시작되는 초를 쓴다(유튜브 '스크립트 표시'로 확인).
- 새 강의: 챕터를 `video-chapters.json` 에 넣고, 기능 시연 장면만 골라 placements 에 더한 뒤 `video_links.py apply` → `gen_summary.py` → `lint_manual.py docs --links`.
- 이론 장면, 자체 개발 앱(Hyperaxis 등), 지금 요금제와 다른 옛 요금제 설명은 연결하지 않는다.
- `postprocess.py` 는 위 영상 id 링크는 남긴다(남의 영상 링크만 지움).

## 하지 말 것
- `ALLOW_PAID_API` 켜기, `translate_batch.py`·`i18n-batch-translator.py`·`ghl-help-updater.py` 실행(모두 API 키 과금)
- 상한을 넘겨 한 달에 몰아서 처리
- `scripts/` 기존 파일 수정은 diff 검토·승인 원칙 그대로
