# 결정 대장 (DECISIONS)

승인·기각된 설계 결정 기록. **판단을 요청하거나 보고서를 쓰기 전에 이 파일을 먼저 확인할 것.**

세션이 바뀌면 컨텍스트가 사라져 이미 끝난 논의가 다시 올라온다(실제로 CDN 선택지 2회, 검사식 승인 2회가 유실됐다). 여기 [확정]으로 적힌 항목은 **다시 묻지 않는다.** 결정을 새로 받으면 즉시 이 파일에 추가한다.

---

## [확정] CDN 이원 체계 — 2026-08-12

| 소비자 | 경로 | 이유 |
|---|---|---|
| 크롬 확장 (v0.4+) | `raw.githubusercontent.com` 직결 | 즉시성. 별칭 캐시를 타지 않음 |
| GHL Custom JS | `cdn.jsdelivr.net/...@main` + 퍼지 | 무설치 폴백. 최대 12h 지연은 공식 SLA로 수용 |

**SHA 고정 전환은 최종 기각** — 배포마다 URL을 손으로 갱신해야 해 무인 운영 원칙을 훼손한다.

> ⚠️ **자주 하는 오인 (3회 반복됨)** — "@main 캐시 때문에 확장이 구버전을 받을 수 있다"는 **틀린 말이다.**
> 확장은 v0.4부터 `raw.githubusercontent` 직결이라 [사전 새로고침] 즉시 최신을 받는다.
> `@main` 지연은 **Custom JS 폴백 경로에만** 해당한다. 보고서에 이 우려를 쓰지 말 것.

배경: `@main`은 브랜치→커밋 해석 결과를 별도 캐싱해(최대 12h) 파일 경로 퍼지로는 갱신되지 않는다. `@SHA` 고정 URL과 GitHub 원본은 즉시 최신이므로, 지연이 문제되는 소비자만 직결로 뺀다.

## [확정] 플레이스홀더 검사식 — 태그명 정규화 (승인 3회째) — 2026-08-12

`<a href='...' style='...'>` → `<a>` 로 정규화해 비교한다. **속성은 비교하지 않는다.**

이유: `href`는 화이트라벨이 의도적으로 바꾼다(`help.gohighlevel.com` → `hyperclass.gitbook.io`). 속성까지 비교하면 정상 치환이 훼손으로 잡힌다(오탐 6건 발생). 보존해야 할 것은 **태그 구조**지 속성값이 아니다.

구현: `scripts/i18n-batch-translator.py`의 `_normalize()`.

## [확정] DNT 예외 파일 금지 — 2026-08-13

DELETE·CONFIRM·REMOVE·CANCEL·TRANSFER·DISABLE·RESET 7종은 사용자가 영문 그대로 타이핑해야 통과하는 확인 절차 값이다. 토큰 소실 = 조용한 기능 고장이므로 **예외가 성립하지 않는다.** `whitelabel-exceptions.json` 같은 파일을 만들지 말 것.

## [확정] 빌드 우선순위 수정 금지 (등재만) — 2026-08-12

`ko.json < 기존 JS < manual-dict` 순서 탓에 ko.json 값 교정이 기존 JS에 덮여 무효화된다. 화이트라벨은 빌드 후처리가 수습하지만 **오역 수정 등은 조용히 사라진다.**

수정하려면 JS 단독 존재 항목(DOM 수집 번역)의 처우 검토가 선행돼야 하므로, 별도 설계안 승인 전까지 손대지 않는다.

## [확정] 여러 줄 배치 형식 현행 유지 — 2026-08-12

콘텐츠가 `1. 2. 3.`으로 시작하면 배치 번호와 충돌해 파서가 오배정한다. 실측 **17건(<20)**이라 현행 유지하고 identity 폴백을 감수한다. JSON 출력 등 형식 변경은 건수가 20을 넘을 때 재검토.

---

## [확정] 지원 이메일 → benjamin@hyperclass.ai — 2026-08-13

`support@gohighlevel.com` / `transfers@gohighlevel.com` 2건을 **`benjamin@hyperclass.ai`로 교체**한다. 예외 등재를 해제하고 `whitelabel.py`의 치환 규칙으로 옮겼다 — 일회 교정이 아니라 규칙이므로 앞으로 수집되는 같은 문자열도 자동 처리된다.

⚠️ Vue i18n 카탈로그는 `@`를 `{'@'}`로 이스케이프해 저장한다. 치환 규칙은 **두 형식을 모두 매칭하고 입력 형식을 그대로 따른다**(`{'@'}` 입력 → `{'@'}` 출력). 형식을 섞으면 카탈로그가 깨진다.

**예외로 계속 남기는 것** — 실재 대상을 가리키는 안내라 바꾸면 거짓이 된다:
- `https://staging.gohighlevel.com와 같은…` (사용자 입력 예시 URL)
- GHL 개발자 협의회 이벤트 링크 (`gohighlevel.com/events`)

---

## [확정] 커뮤니티 무설치 경로 = 인라인 로더 + raw 데이터 고속선 — 2026-08-21

커뮤니티(ClientClub) Custom Code 슬롯에 인라인 로더(v2.0.0)를 심고, 로더가
`raw.githubusercontent.com/…/data/hc-dict.min.json`(통합 사전 = ko ∪ manual,
manual 우선, DNT·identity 제거)을 fetch한다. **jsDelivr 미사용** — raw는
`X-Content-Type-Options: nosniff`라 `<script src>`가 불가하고, 이를 우회하려던
jsDelivr 경로는 @main 캐시 지연을 다시 데려온다. 데이터(fetch+JSON.parse)로
받으면 nosniff와 무관하며 raw 직결의 즉시성을 유지한다.

- 산출: `scripts/build-community-dict.py` (ui-updater Step 3에서 실행, 기존
  빌드 우선순위 로직과 독립)
- 로더 원문: `js/community-loader.js`(JS, node --check 대상) +
  `js/community-loader.slot.html`(슬롯 붙여넣기용 전체 블록)
- 구 `community-ko.js`(50건, 2026-05)는 **폐기 예정** — 슬롯 교체 확인 후
  별도 승인으로 삭제한다 (아직 삭제 금지).

## [확정] ClientClub customJs에 '<' 문자 금지 — 2026-08-22

ClientPortal은 그룹 customJs를 주입 전에 `e.replace(/<\/?[^>]+(>|$)/g,"")`로
HTML 태그를 제거한다. **`i < n` 같은 비교 연산자도 태그로 오인**돼 다음 `>`까지
통째로 삭제되고(실측: v3.0.0 로더에서 4,288자 소실), 그 결과가 `new Function`
검증에 실패하면 **주입 전체가 스킵돼 전면 영어로 회귀**한다
(콘솔: "Custom JS is invalid — skipping injection: Unexpected identifier 'TTL'").

- 규칙: customJs 칸에 넣는 코드는 `<` 문자 자체를 쓰지 않는다. 비교는
  역방향(`n > i`)으로 쓴다. 주석·문자열 포함 전체가 대상이다.
- 검증식: `code.replace(/<\/?[^>]+(>|$)/g,"").trim() === code.trim()` 이
  성립해야 한다(무손실). 배포 전 필수 체크.
- 수정본: 로더 v3.0.1(`js/community-i18n-loader.js`) · v2.0.1
  (`js/community-loader.js`). 라이브 페이지 주입 실증 완료(영→한 전환 확인).

## 관련 파일

- `data/whitelabel-exceptions.json` — 화이트라벨 검사·치환 제외 값 (사유 포함)
- `data/placeholder-exceptions.json` — 플레이스홀더 판정 기록 (D identity / B 정상 / E 재번역)
- `data/excluded-strings.json` — 수집 제외 문자열 레지스트리 (사용자 데이터·런타임 값 등)

---

## [확정] Managed Agents → '관리형 에이전트' — 2026-09-09

superagentsApp(Managed Agents 빌더·목록·채팅 레이어)의 제품명 표기는 **'관리형 에이전트'** 로 통일한다.
영문 유지안(2026-09-09 v1 라운드, `reshapeBanner` 선례 근거)은 **기각** — 사이드바·`agentLogsApp`·기존 `_text` 3건이
이미 '관리형 에이전트'라 한 화면에 두 표기가 공존했다.

- 적용: `_source/hc-ko-app.pretty.json` host 7키(`superagentsApp.chatLayer.*` 5, `agentStudioPanel.triggerTypes.chat.desc`, `agentStudioApp.agentDirectory.reshapeBanner.message`) + `_text` 4건.
- 같은 문장의 **Labs** 는 GHL 메뉴명이라 유지. **Agent Studio** 도 고유명 유지.
- `0 Managed Agents`(가변 숫자)는 `_text` 정확 일치 한계로 영문 잔존 — 알려진 잔존.
- 용어집 `data/glossary/ghl-glossary.json` 에 등재. 새 번역에서 다시 영문으로 내지 말 것.

---

## [확정] v4 전 서브계정 개방 · 에이전시 화면 제외 · 원격 킬스위치 — 2026-10-08

- 로더 v4.11.0(`45e5a5e`) `ALLOW = []`. 빈 ALLOW 도 `/v2/location/<id>/` 라우트에서만 동작하고, 에이전시 화면은 레거시 레이어가 맡는다.
- 전 고객 중단 수단은 `data/hc-ko-app-rev.json` 의 `"off": true` (원격 킬스위치)다. 슬롯 수정은 최후 수단이다.
- 라이브 확인 완료: 서브계정 2곳, 에이전시 화면, 제외 계정(직접 진입·계정 전환 진입). 기록은 docs/STATE.md.

## [확정] `_text` 에 단어 하나짜리 키 금지 — 2026-10-08 (벤자민)

전 서브계정 개방 뒤에는 `_text`(정확 일치 텍스트 치환)가 모든 고객 화면에서 돈다. `Solar`·`Roofing`·`New` 같은 단어 하나짜리 키가 고객의 태그·파이프라인 단계·업체명과 정확히 같으면 그 데이터까지 한국어로 바뀐다.

- 사전 v4.2.7 에서 해당 335건을 제거했다. 목록은 `data/reports/2026-10-08-removed-single-word-text.json`.
- `validate-ko-app.py` **C12(하드 게이트)** 가 재유입을 막는다. 단어 하나짜리 화면 문구는 i18n 카탈로그(host/apps/flat)로만 다룬다.
- 대상이 아닌 것: 내부 키 유출(`dateAdded` 같은 camelCase·점 표기), 기호가 붙은 문구(`Clicks:`, `Typing...`).
- 남은 한계: 레거시 레이어(`dashboard-ko@8fabb6a`)의 단어 하나짜리 항목은 그대로다. 레거시 축소·제거 때 함께 정리한다(LEGACY-REMOVAL-DECISION).

## [확정] 레거시 사전 제외 정리를 ui-updater 파이프라인에 편입 — 2026-10-08

09-15 봇 커밋(`757d86f`)이 08-22 에 지운 EMA ejectModal 15건을 `ghl-i18n-ko.json` 에 되살려 ko-app-validate C10 이 실패했다. 원인은 en.json 에 원문이 남아 있어 번역 단계가 매번 다시 번역하는 것이다. ui-updater 에 빌드 전 `scripts/exclusions.py --legacy` 단계를 추가했다. 제외 등재 문구는 매 실행마다 걷어낸다.

## [확정] 기회 상태 Won/Lost = 고객전환성공 / 고객전환실패 — 2026-11-04

벤자민 결정. 이전 표기는 승리·성사·성공 / 손실·실패·패배가 화면마다 섞여 있었다(단독 라벨 51건 중 승리 23·손실 22·성사 3·실패 3).
- 단독 상태값(Won/Lost/won/lost/LOST), Lost reason(→ 고객전환실패 사유), Won on/Lost on(→ 고객전환성공일·고객전환실패일), Won revenue(→ 고객전환성공 매출), won/lost opportunities(→ 고객전환성공·고객전환실패 기회), Mark as lost, 리포팅 위젯 제목·설명, `_text`·`_textScoped` 까지 일괄.
- "changes will be lost"·"connection lost"·"revenue lost" 처럼 '사라짐' 뜻의 lost 는 제외.
- 글로서리에 Won/Lost 등재(variants 없음 — '성공'·'실패'는 일반어라 자동 치환 금지).
- 화면 칩·칸반 열 머리에서 6자라 말줄임될 수 있다 — 라이브에서 확인.

## [확정] DND = 수신거부 · Notes = 메모 · 단독 'Delete' 는 원문 유지 — 2026-11-04

벤자민 결정.
- **DND → 수신거부**: 이전 DND(49)·방해 금지(15)·수신 거부(3) 혼용. 'Do not disturb' 포함. '수신 DND'(Inbound) → '인바운드 수신거부'. 드래그 앤 드롭 뜻의 DnD('Fetch Element DND Failed')는 제외. 글로서리 DND 등재(variants: 방해 금지 모드·방해 금지·방해금지·수신 거부).
- **Notes → 메모**: 이전 메모 126 : 노트 90 혼용. 릴리스 노트·크레딧 노트·노트북은 예외, Sticky notes 는 윈도우 표기 '스티커 메모'. 글로서리 Note 등재(variants 없음 — 예외 단어 보호).
- **단독 'Delete'(대소문자 무관) 는 번역하지 않는다**: 버튼·메뉴 '삭제' 198곳을 배포본에서 뺀다 → 화면에 'Delete' 원문. 문장 속 delete 는 번역 유지. `data/ko-app-exclusions.json` 에 영어 원문 단위 제외(`english`) 신설 — split 이 참조본 영어로 경로를 대조해 host·apps·flat·_text·_textScoped 에서 제거, validate C10 이 잔존을 막는다. 편집 정본·참조본에는 '삭제'가 남아 번역 라운드가 다시 채우지 않는다. 되돌리려면 등재를 지우고 재분할. DELETE 확인 입력(DNT)·한글 '삭제' 입력 보조 어댑터는 그대로.
- 번역기 프롬프트(`i18n-batch-translator.py`)에 Won/Lost·DND·Notes 확정 용어 규칙 추가.

## [확정] 멤버십 앱(memberships remote) flat 카탈로그 전체 번역 · Title = 제목 — 2026-11-04

벤자민 지시("멤버십 → 오퍼 화면에 영어가 많고 '직함'은 오역"). 멤버십 관리 화면(코스·오퍼·상품·강의·퀴즈·분석·공지·자격 증명·테마·결제 페이지 설정)은 `#membership` Vue 앱이 자체 `t(key)` 를 provide 하고, 로더가 그 t 를 감싸 `flat` 에서 한국어를 돌려준다. 그런데 flat 에는 카탈로그 4,186키 중 706키만 있었다(나머지는 영어).
- 카탈로그 원본: 화면에 로드된 webpack 모듈(remote 2232)의 `JSON.parse` 리터럴에서 추출 → `data/membership/catalog-en-2232.json` 보관(다음 GHL 업데이트 때 diff 기준).
- 신규 3,744키: 참조본 같은 영어 번역을 '제안'으로 붙여 10갈래 번역 → 4갈래 독립 검수(75건 수정) → 같은 영어 표기 통일 22건.
- 기존 33키 수정: Title '직함' → '제목'(3), 자리표시자가 빠진 채 들어 있던 27키 복원(예: `"" 복제` → `"{title}" 복제`), common.post(s) 게시글 → 강의, common.product 제품 → 상품.
- 이 앱 용어: Post/Lesson → 강의 · Product → 상품 · Offer → 오퍼 · Category → 카테고리 · Credential → 자격 증명 · Certificate → 수료증 · Setup fee → 설정 비용 · Discard → 변경 취소 · Visibility → 공개 범위 · Announcement → 공지 · Location → 서브 계정. 강사 정보의 Title(직업 표기)만 '직책'.
- 한계: 로더 v4.19.1 의 t 래퍼는 인자 1개 호출만 flat 으로 바꾼다 → `{count}` 같은 값이 들어가는 198키는 여전히 영어. 로더에 이름 자리표시자 치환을 더하면 해결(별도 브랜치, 캐너리 절차).

## [확정] 연락처 상세 새 UI 앱 2개 apps 그룹 신설 — 2026-11-04
- 대상: `record-details-new-ui`(왼쪽 패널, 549문구, 지문 `DnDChannels|addAssociations|archiveUnarchiveConversation|callContactPhone|changeAlert`) · `contact-conversation-panel`(대화 패널, 2,824문구, 지문 `24h|24hDescription|48h|48hDescription|72h`). 둘 다 로케일 `en_US`. 원문 스냅샷 `data/contact/contact-apps-en.json`.
- 1,178문구는 참조본 동일 영어 재사용, 2,195문구 신규 번역 → 독립 검수 2회(35건 교정) → 사전 v4.2.28.
- 용어: CC/BCC = **참조/숨은 참조** · Voice note = **음성 녹음**(Voicemail = 음성 메시지와 구분) · 연락처 상세의 Actions 탭 = **작업 탭**(라이브 탭 표기와 일치), 그 밖의 action = 액션 · All fields 탭 = **전체 필드** · Owner = 소유자 · Reply = 답글 · Inbox = 인박스 · 수동 Outbound/Inbound call = 발신/수신 통화.
- 경로 충돌 2건(참조본의 같은 경로가 다른 영어): `common.description`, `commonComponents.addRecordAssociationDisabledTooltip` — 검증기(C3)가 경로로 영어를 대조하므로 한국어에서 `{object}`·`{record}` 를 쓰지 않는 문장으로 우회(뜻은 유지). 참조본은 경로가 없을 때만 추가(3,251), 다른 영어가 있는 경로 122개는 건드리지 않음.

## [확정] 번역 라운드 결과는 독립 검수 후 교정 — 2026-11-05
- 텔레메트리 라운드(v4.2.29, 6,698건) 중 노출이 큰 11개 네임스페이스 3,909문구를 독립 검수 4명이 전수 검토 → 404건 교정(v4.2.30). 결함률 약 10%: Location→서브 계정 미준수, Offer=오퍼·Certificate=수료증 미준수, 이메일 빌더의 DND(드래그 앤 드롭)를 수신거부로 오역, 'markdown'(가격 인하)→마크다운, 'Second'(둘째 주)→초, 자리표시자 뒤 고정 조사, 'LC' 브랜드 잔존 등.
- 용어 추가: Topic = 토픽, Sentiment = 감성, 하위 계정 이전 = 이전, Attribution = 어트리뷰션(기존 결정 유지), 이메일 Unsubscribed = 수신거부(이메일 빌더 안 통일).
- 남은 라운드 문구(약 2,800, agentLogs·schemaMarkup·crmObjectsSettings·aiEmployees 등)는 같은 방식으로 이어서 검수한다.

## [확정] 날짜·시각 표기는 로더가 한국어 형식으로 바꾼다(D3) — 2026-11-05
- 사용자 언어가 영어라 GHL 이 dayjs/moment 영어 형식으로 찍는다(연락처 표 'Sep 28, 2026'·'12:20 AM', 대화 'Sep 28', 캘린더 '08:00 PM – 10:00 PM'·'01 Sun', 소셜 플래너 '30 Oct 2026', 평판 'Today at 10:22 AM', 연락처 상세 'Created on: 5 Sep 2026, 6:17 PM (KST)' 등 전 화면 스윕 41형). 사전(_text)으로는 값마다 달라 못 잡는다.
- 메인 로더 v4.21(D3): 텍스트 노드·title·aria-label **전체가** 날짜/시각(또는 범위)일 때만 바꾼다. 부분 일치 없음 — 문장 속 날짜·사용자 본문·입력 칸은 그대로.
- 형식: `2026년 9월 28일 오후 2:07` · `오후 8:00 – 오후 10:00` · `2026년 11월 1일 – 7일` · `9월 28일 (월)` · 주간 머리글 `1일 (일)` · `오늘 오전 10:22` · 월/연 `2026년 11월`. 시(hour) 앞 0 은 뺀다(02:07 PM → 오후 2:07). 24시간제·숫자만 있는 값은 그대로. 시간대 약어 '(KST)' 는 유지.
- 앞 라벨('Created on:')은 _text 에 있을 때만 함께 바꾼다(사전이 정한다).
- 차트(ECharts 등) SVG 글자: _textScoped 범위에 포함(기회 상태 범례), 월·요일 약어 단독 → '12월'·'월', '범례 - 숫자'. 페이지 크기 '10 / page' → '10 / 페이지'.
- 끄기: core `_opts.dates = false`(원격, 전 고객) · `localStorage.hcKoDates = '0'`(브라우저별 진단).
- 포털은 별도(포털 로더 _rules formats: monthYear·dateString·metaDate·ampm). 포털 미니 달력 머리 'Nov 2026' 은 사전 v4.3.2 _rules + _css 순서 뒤집기로 '2026년 11월'.

## [확정] 로더 포인터를 옮기기 전 jsDelivr 200 을 먼저 확인한다 — 2026-11-05
- 사고: loader.next 를 새 머지 커밋 409990e 로 올렸더니 jsDelivr 가 `@409990e…/js/hc-ko-app-loader.js` 에 **403 "Package size exceeded the configured limit of 50 MB"** 를 돌려주고 그 응답이 캐시됐다 → 캐너리 r6JD 에서 로더가 안 떠 영어(부트스트랩 error `load-fail`). `purge.jsdelivr.net/gh/…@<sha>/<file>` 퍼지 후 200 → 복구(수 분).
- 원인 추정: 레포 작업 트리 73MB(압축 18.8MB)로 jsDelivr 한도(50MB) 근처 — 새 커밋을 처음 가져올 때 간헐적으로 거절될 수 있다. 사전 포인터 봇은 이미 jsDelivr 대조 후 전진하지만, **로더 포인터(stable/next)는 사람이 옮기므로 이 확인이 없었다.**
- 절차: 로더 커밋 머지 → 브라우저 콘솔에서 두 파일(`js/hc-ko-app-loader.js`·`js/hc-confirm-adapter.js`)을 `@<40자 SHA>` 로 fetch(`cache:'reload'`) → 200 이 아니면 `purge.jsdelivr.net` 같은 경로로 퍼지 후 재확인 → 그다음 포인터 커밋. 포털 포인터도 같다(`data/hc-ko-i18n.json`·포털 로더).
- 후속(결정 필요): 레포 크기 줄이기 — `_source/hc-ko-app-reference.json`(13MB)·`js/dashboard-ko*.js`(레거시 5.5MB)·`data/ghl-i18n-*`(레거시 6MB) 를 별도 레포/브랜치로 옮기면 한도에서 멀어진다. 부트스트랩이 next 로드 실패 시 stable 로 떨어지게 하는 것도 후보(슬롯·엣지 변경이라 별도 절차).

## [확정] 텔레메트리 잔여는 '현재 사전에 한국어가 없는 키'만 골라 직접 번역 + 독립 검수 — 2026-11-05
- 집계(en-missing)는 하루 늦은 상태라, 그대로 라운드에 넣으면 이미 번역된 키가 섞인다. host[ns] 와 apps 그룹 카탈로그(네임스페이스 없이 경로로) 모두에서 한국어 유무를 확인해 **진짜 빈 키**만 뽑는다(11-04치: 2,836 → 제외 후 2,165 → 원문 동일·코드 조각 제외 1,959).
- 제외: 브랜드·약어(대문자 12자 이하)·URL·이메일 예시·DNT 7종·단독 'Delete'·자리표시자만 있는 값·Lorem ipsum·카멜/점 표기 코드.
- 번역 6갈래(배치 185, 자리표시자·'|'·브랜드·DNT 검사기) → 독립 검수 4갈래(결함만) → `scripts/round-merge.py --part host`(글로서리·DNT·복수형) → 자동 리뷰(ko-round-review) 지적 반영 → split·검증.
- 이번 검수 결함률 약 0.5%(1,959 중 9) — 기존 화면 동일 원문 제안(suggest)을 주고, 맞지 않으면 문맥대로 바꾸게 한 것이 효과.
- 용어: API 토큰 scopes = **범위**, Labs = **랩**, Voice AI = **음성 AI**(기존 화면 다수), Full name = 전체 이름(이름과 겹칠 때).

## [확정] 앱 네임스페이스 전체를 런타임 카탈로그에서 뽑아 번역한다(텔레메트리 표본 대신) — 2026-11-05
- 텔레메트리 en-missing 은 세션당 ns 마다 최대 150쌍 표본이라, 큰 앱(평판 관리 1,537키·이메일 빌더 4,155키)은 여러 날이 지나도 다 모이지 않는다. 그 화면을 r6JD 에서 열고 호스트 composer 의 `messages['en-US'][ns]` 에서 **아직 영어인 값만** 뽑는다(머지된 한국어는 자동 제외).
- 원문 전달: 브라우저 → 텔레메트리 Worker `/r`(ns 한 행에 pairs ≤150, 이벤트 사이 2.5초, route 는 `:loc`) → `ko-telemetry-digest.yml` workflow_dispatch → `data/telemetry/en-missing/<ns>.json`. 손으로 옮겨 적지 않아 원문 오타가 없다. 작은 앱은 화면 출력 후 SHA-256(키·값 정렬)을 브라우저 원본과 대조해도 된다(certificatesApp 596키 일치).
- 그다음은 종전대로: 사전에 없는 키만 → 직접 번역 → 독립 검수 → round-merge → 자동 리뷰 반영.
- 2026-11-05: certificatesApp 588(v4.2.48) · reputationApp 662(v4.2.49) · 같은 날 저녁 digest 를 수동 실행해 ghlEmailBuilderCommon 2,257 · agentStudioApp 228 · superagentsApp 118 · proposalCommon 91(v4.2.50, 검수 결함률 약 1.6% — 43/2,694).
- 다른 앱 카탈로그에 같은 경로의 한국어가 있으면 '이미 번역됨'으로 빼지 말고 suggest 로 넘긴다(호스트 ns 에는 없어서 화면은 영어였다 — proposalCommon 90키).
- 이메일 캠페인 화면 Unsubscribe 는 기존 표기 '수신거부', 이메일 본문 푸터 기본 문구는 '구독 취소'. Resend = 재발송.

## [확정] 앱이 별도 Vue 앱에서 호스트 네임스페이스로 옮겨 가면 번역을 경로 단위로 이관한다 — 2026-11-06
- AI 직원 앱(aiEmployeesApp)은 예전에 별도 앱(사전 `apps` 그룹, 시그니처 `aiAgentsContestBanner|…`)으로 떠서 번역이 있었지만, 지금은 호스트 composer 에 `aiEmployeesApp` 네임스페이스로 병합돼 그 번역이 닿지 않았다(대화 AI 화면 2,653키 중 2,144 영어).
- 이관 규칙: 같은 앱 카탈로그에서 **경로가 같고 자리표시자가 같은** 값만 가져온다(`tr1106/adopt.py`). 그래도 **반드시 독립 검수**를 거친다 — 11-06 이관 2,200건 중 146건(6.6%)이 결함: 원문 변경(Bot→Agent)·예전 오역·확정 용어 이전 표기.
- 검수 중 발견한 기존 사전의 일괄 오역('to'→' 대상: ', 'On'→'날짜')은 형제 키로 쓰임이 분명한 곳만 고친다(v4.2.52, 17곳). 필터 연산자 'On'·이메일 'To' 처럼 불분명한 곳은 화면 확인 뒤.


## [확정] 상품·일괄 작업 용어와 배지 'New' — 2026-11-06 저녁
- 상품 Variant = **변형**(productsApp 기존 13곳 기준). storeCatalogApp·productsApp 의 '배리언트' 2곳을 변형으로 통일했다. 상품 옵션(Option)은 '옵션'으로 따로 쓴다.
- Bulk action(기능 이름·화면 제목) = **일괄 작업**. 채널별 액션 이름(대량 이메일·대량 SMS·대량 리뷰 요청·대량 대화 AI)은 기존 화면 표기대로 '대량'으로 둔다.
- 숫자 뒤에 붙는 조각 change/changes/made 는 '건/건/변경됨'('3 건 변경됨')으로 쓴다. 조각을 문장으로 옮기면 이어 읽을 때 깨진다(productsApp '3 변경사항 만들었습니다' 정정).
- 데이터 가져오기 화면(bulkActionsApp)의 Unsubscribe 는 GUIDE 기준 '구독 취소'다. 이메일 캠페인 통계 화면은 '수신거부'로 남아 있어 두 화면의 표기가 다르다. 통일할지는 화면을 확인한 뒤 정한다.
- 배지·알약(`[class*="__pill"]`·`-pill`·`badge`) 안의 단독 'New' 는 로더가 '신규'로 바꾼다(v4.21.12). 사전 common.new 도 '신규'라서, 결제 송장의 'New' 버튼도 '신규'로 보인다. 이것은 의도된 표기다.

## [확정] 한국어 값에서도 'LC'(LeadConnector)를 드러내지 않는다 — 2026-11-06 저녁
- 원문의 LC Phone·LC Email·LC Integrations·LC 서브 계정은 기존 관례대로 **하이퍼클래스 전화·하이퍼클래스 이메일·하이퍼클래스 연동·하이퍼클래스 서브 계정**으로 옮긴다(v4.2.59, 20곳 정정 — host 5 · apps 14 · _text 1). 마켓플레이스 번들은 빌드 때 '하이퍼클래스'를 '플랫폼'으로 바꾼다.
- 외부 트래킹 스크립트의 콘솔 접두사 '[LC Tracking]'은 실제 로그 문자열이지만, 안내문에는 쓰지 않고 '접두사에 Tracking 이 들어간 콘솔 로그'로 안내한다. 브라우저 콘솔 필터에 'Tracking'을 넣으면 같은 로그가 잡힌다.
- check_dnt_whitelabel 의 W1 은 영어 'LC Phone|Email…' 패턴만 본다. 한국어 값에 남은 'LC' 토큰은 라운드 머지 뒤 core 전체를 `(?<![A-Za-z])LC(?![A-Za-z])` 로 한 번 더 훑는다(v4.2.59 시점 0건).

## [확정] 스윕 잔여 선택 시 '영어 그대로'로 판정한 값은 다시 고르지 않는다 — 2026-11-06 저녁
- round-merge 는 한국어가 원문과 같으면 넣지 않는다(제품명·형식 예시·키 이름). 그래서 select.py 가 그 키를 다음 라운드에 다시 고른다. 이전 라운드 출력(out·qc)에서 ko == en 이었던 id 는 빼고 고른다(tr1106f 에서 95건 제외).
- 런타임 영어가 남은 ns 중 사전에 한국어가 이미 있는 것은 대개 ① 영어 그대로 값 ② ko-app-exclusions.json 의 의도적 제외(agency.gdpr 법적 문구 등)다. 숫자만 보고 번역 누락으로 판단하지 않는다.

## [확정] 런타임은 cdn 브랜치 커밋으로 서빙한다 — jsDelivr 50MB 한도 — 2026-11-06 밤
- 확인: `data.jsdelivr.com/v1/packages/gh/benjaminhyperclass/hyperclass-help-ko@main` → **403 "Package size exceeded the configured limit of 50 MB"**. main 트리는 75MB(도움말 문서 20MB · `_source` 편집 정본·참조본 24MB · 레거시 사전 등). 파일 단위 요청은 대개 통과했지만 새 커밋을 처음 가져올 때 403 이 나고 캐시된 적이 있다(2026-11-05 사고).
- 결정(벤자민 승인 "레포 대용량 분리", 2026-11-06): main 을 쪼개지 않고, **런타임 파일만 담은 커밋을 `cdn` 브랜치에 발행**해 포인터가 그 SHA 를 가리키게 한다. 런타임 트리 약 11MB/25파일(js/ 중 레거시 dashboard-ko 제외 · 사전 core/apps · 포털 사전 · 결제 사전 · hc-dict · 마켓플레이스 번들 · 포털 러너). 포인터(*-rev.json)는 raw@main 에서만 읽으므로 넣지 않는다.
- 왜 이 방식인가: 부트스트랩·로더·엣지는 `gh/<레포>@<SHA>/<경로>` 로만 요청하므로 SHA 가 cdn 커밋이어도 코드·슬롯 변경 없이 동작한다. blob 은 main 과 같은 객체라 레포 용량이 늘지 않는다. main 에서 큰 파일을 빼거나 참조본을 gzip 하는 안은 검증·라운드 파이프라인을 크게 고쳐야 하고(gzip 은 커밋마다 수 MB 씩 이력이 불어난다) 도움말 문서가 계속 늘어 한도 아래를 유지할 수 없다.
- 도구: `scripts/publish-cdn.sh <main 커밋> [--push]` — 런타임 트리가 직전 cdn 커밋과 같으면 재사용, 다르면 새 커밋(메시지 `cdn ← main <SHA>`). 필수 파일(로더·어댑터·core·apps)이 없으면 발행하지 않는다.
- 사전 포인터 봇(ko-app-pointer.yml): 대상 main 커밋으로 cdn 커밋 발행 → jsDelivr `@cdn` 바이트 대조 → `rev` = cdn SHA, `src` = 원본 main SHA. '이미 최신' 판정은 `src` 기준.
- **로더 승격 절차(사람)**: 로더 PR 머지 → `C=$(scripts/publish-cdn.sh origin/main --push | tail -1)` → 브라우저에서 `@C` 의 로더·어댑터 200·바이트 확인 → `loader.next = C`(캐너리) → 실측 → `loader.stable = C`. `verify-deploy.js` 의 revPrefix 는 cdn SHA 앞 7자다.
- 남은 위험: 슬롯에 고정된 진입 파일(에이전시 Custom JS 의 `@c25c941/js/hc-bootstrap.js`, 포털 슬롯의 `@028b315…/js/hc-portal-bootstrap.js`)은 아직 main 커밋 SHA 다. jsDelivr 가 영구 캐시해 지금은 서빙되지만, 같은 내용을 cdn 커밋 SHA 로 바꿔 두면 완전히 한도 안이 된다(에이전시 슬롯은 벤자민 수동 교체, 포털 슬롯은 러너로 교체 가능).
- 함께 정리: 원시 캡처 `_source/hc-aistudio-2026-10-08.json`·`_source/hc-gap-2026-10-08.json`(고객 데이터 포함, 1MB)을 트리에서 뺐다. 필요하면 `git show d931f20:_source/hc-aistudio-2026-10-08.json` 으로 되살린다.

## [확정] 2026-11-06 밤 벤자민 승인 묶음 ("승인하니까 진행해줘")
- **PR #25 머지**(번역기 ⟦n⟧ 표지·반복 오류 예방 규칙). 머지 직후 프롬프트 예시 `"{name}을(를)"` 이 f-string 변수로 해석돼 ui-updater 가 NameError → #91 로 `{{name}}` 이스케이프. 수동 재실행은 EN 무인 추출 단계에서 GHL 세션 만료로 실패(이슈 #92, 세션 재발급은 벤자민 로그인·2FA 필요). 메인 한글팩 경로와는 무관.
- **자동화(워크플로우) 화면은 영어로 둔다.** GHL 이 다른 도메인 iframe 으로 띄워 한글팩이 닿지 않고, 우회하려면 GHL 코드를 패치해야 한다. GHL 에 한국어 지원을 요청하는 쪽으로 간다.
- **레포 대용량 분리** → 런타임 cdn 브랜치(위 절).
- **신규 포털 주간 점검 예약 작업** 생성: 매주 월요일 10:42 KST, 맥 데스크톱 앱에 묶임(크롬 사용), 승인 없이 실행(auto). 내용: 서브계정 전체 포털 인벤토리 → 한글팩 빠진 포털에 러너 v1.2 설치 → 옛 베일 갱신 → 로그인 화면 확인 → 한국어 보고. other-fields-changed·put-failed 면 즉시 멈추고 보고. 레포에는 쓰지 않는다.
- **공개 레포의 광고 계정 이름·ID 5개 제거**(#90) — 같은 목록의 제3자 실명·인보이스 번호·레코드 ID·토큰·고객 도메인도 함께 뺐다(공개 레포 규칙). git 이력에는 남는다(이력 재작성은 하지 않는다).
- **마켓플레이스 개인정보처리방침 URL = 레포 파일 주소** `https://github.com/benjaminhyperclass/hyperclass-help-ko/blob/main/marketplace/PRIVACY.md`. 가격(무료/유료)은 아직 미정.

## [확정] 자동화(워크플로우)·비즈니스 프로필 iframe — 같은 출처 중계로 한국어, 캐너리 r6JD 먼저 — 2026-11-07
- 11-06 밤 '자동화 화면은 영어로 둔다'(위 절)는 "우회하려면 GHL 코드를 패치해야 한다"는 전제였다. 같은 밤 다른 세션 실측으로 **GHL 코드 패치 없이** 된다는 것이 확인됐다: 엣지 Worker 가 iframe 앱을 `app.hyperclass.ai/__ifr/{wf|crm}/…` 로 중계하고, 로더가 iframe 주소와 Postmate 출처 계산(`<a href>`)만 그 경로로 바꾸면 핸드셰이크·인증·저장이 그대로 동작한다(스냅샷 마스터 수동 주입: 목록·빌더·트리거 편집·저장·비즈니스 프로필 통과, 콘솔 오류 0).
- 두 결정이 충돌해 벤자민이 고름(2026-11-07, 버튼): **"한 계정에서만 먼저"** — r6JD 캐너리에서 며칠 관찰한 뒤 전체 여부를 정한다. GHL 에 한국어 지원 요청은 병행. 같은 날 배포 승인 "배포"(PR #97 머지 · 포인터 `loader.next` · Worker v0.2).
- 구현: 로더 v4.21.14 IFR 블록(IFR_LOCS 로케이션에서 부팅했을 때만 프로토타입 교체 — stable 로 올라가도 다른 고객 무변화) + `workers/hc-ifr-proxy`(v0.2.0). 안전장치: Worker 헬스(`x-hc-ifr`) 확인 전·실패 시 원래 주소(라우트가 fail-open 이라 Worker 가 없으면 iframe 에 메인 앱이 뜨는 함정).
- 전체로 넓히기 전 조건: 캐너리 기간 자동화 저장·트리거 편집 이상 없음 · iframe 사전 보강 · **Workers 플랜 한도 판단**(현재 Free — 계정 전체 10만 요청/일·CPU 10ms, 워크플로우 첫 방문당 프록시 요청 약 250).
- 근거·실측: `docs/research/iframe-proxy-2026-11-06.md`(research 브랜치) · STATE '교차 출처 iframe (2026-11-07)' 행.

## [확정] GitBook 매뉴얼 개편 — 화면 이름과 일치·자연스러운 한국어·자체 앱 정리 — 2026-11-07
- 요청(벤자민 2026-11-06): 화면 한글화된 메뉴·버튼 이름과 매뉴얼 단어를 맞추고, 어색한 번역을 알기 쉬운 한국어로 다시 쓰고, 신규 고객에게 주는 자체 앱은 KAKA·토스페이먼츠만 남긴다(Hyperaxis 등 삭제). "특별한 경우 아니면 스스로 검증·검토·개선해 끝까지 진행".
- 원문: GHL 도움말 전체를 Actions 에서 수집(`scripts/manual/fetch_ghl_help.py` → `manual-src` 브랜치, 3,134건). 기존 문서는 `원문:` id → 파일 이름 → 단어 겹침 순으로 원문과 다시 연결(2,062건).
- 번역기 v2(`scripts/manual/`): 화면 이름표 `data/manual/screen-labels.json`(v4 사전 reference en→현재 ko, 사이드바 우선 → 확정 용어집 → 최빈값; 브랜드·안내 머리말 제외) 중 그 문서에 나오는 것만 + 핵심 화면 이름 550개를 프롬프트에 넣는다. 해요체, 화면 이름은 굵게 한국어 그대로, 외부 브랜드는 영어(WhatsApp·Google…), 워크플로우 빌더 안 트리거·액션은 영어 + 첫 등장 괄호 뜻(2026-11-06 '빌더는 영어' 결정 기준. 11-07 iframe 중계로 한국어화 캐너리가 시작됐으므로, 전체 고객에게 한국어 빌더가 열리면 워크플로우 문서 383건을 iframe 사전 이름으로 다시 돌린다 — `build_jobs.py` 의 workflow_builder 표시를 끄고 해당 문서만 재번역).
- 원문에 충실 규칙: 사실 추가·강화 금지, 원문 모순은 `<!-- 검토 필요: 원문 내용이 서로 다름 -->` 주석, 목록 구조 유지, 링크표에 있는 링크는 반드시 연결.
- 파일럿 32건 → 독립 검수(문서당 실질 결함 약 1.4건: 이름표 남용·WhatsApp 한글 표기·설명으로 대신한 버튼 이름·링크 누락) → 프롬프트 보강 → 파일럿 2에서 해소 확인 → 전체 실행.
- 구조: 영문 폴더 64개 → 번호 카테고리로 통합, 중복 80건 삭제, 파일 이름의 highlevel/leadconnector → hyperclass, 원문이 사라진 문서 713건은 `archive/manual-retired/`(목차 제외), 옛 주소 1,295건은 `.gitbook.yaml` redirects. GHL 신규 카테고리: LevelUp 2026 → `44-신기능-2026`, Custom Objects·Companies·CRM → 02-연락처 등.
- 자체 앱: Hyperaxis 문서(법적 고지·개인정보처리방침·이용약관·데이터 삭제)·`undefined/hyperaxis` 삭제. Meta 앱 심사 등에 이 GitBook 주소를 등록해 두었다면 그쪽 주소를 바꿔야 한다(벤자민 확인 필요). KAKA AI 설치 가이드 10쪽 신규(`docs/43-한국-앱/kaka/`, 노션 'KAKA ai 설치가이드_20260925' 기준; 노션 스크린샷은 서명 URL이라 옮기지 않음 — 필요하면 `docs/43-한국-앱/assets/`에 올려 연결). 노션 원본에 본문이 없던 '3-8 REST API 키' 절은 짧게 새로 썼으므로 실제 설정 화면 문구와 맞는지 확인 필요.
- 반영 기준(`publish_results.py`): 정상 완료 + 브랜드 노출·원문 링크·머리말·제목·이미지 누락·영어 과다 검사 통과분만 docs/ 에 쓴다. 용어 지적은 보고만.
- 정기 업데이트: `manual-monthly.yml`(매월 1일 KST 2일 06:00) — 원문 재수집 → 본문 해시(`data/manual/src-state.json`)로 새 글·바뀐 글만 v2 번역 → 검수 통과분 반영 → 목차 재생성. 옛 `help-updater.yml` 은 수동 실행만 남김.

## [확정] 별도 Vue 앱 인스턴스 전수 점검을 정기 스윕에 넣는다 — 2026-11-07
- 호스트 사전 스윕(네임스페이스별 영어 잔여)만으로는 **별도로 마운트되는 Vue 앱**(자체 vue-i18n 인스턴스, 로더가 지문으로 `apps` 카탈로그를 매칭)의 빈 곳이 보이지 않는다. 47라우트에서 `#app` 밖의 `__vue_app__` 인스턴스를 모두 찾아 지문(최상위 키 정렬 앞 5개)·한글 비율을 세면 두 종류가 나온다:
  1. **매칭 실패** — 에이전트 로그 앱(`agentLogs`·`common` 2개)은 정확일치·자카드(최상위 2개)·포함 폴백 모두 실패해 연락처 상세·대화 화면에서 전부 영어였다. 같은 내용이 host 네임스페이스(`agentLogsApp`)에 있으면 그 번역을 새 지문 카탈로그로 이관한다.
  2. **낡은 카탈로그** — GHL 이 키를 늘리면 매칭은 되지만 새 키는 영어로 남는다(캘린더 화면 748, 마켓플레이스 430 등).
- 수집은 **메인 탭에서** 한다(숨은 iframe 은 로더가 앱을 패치하기 전에 읽혀 0% 로 잘못 보인다). Worker 업로드 ns 이름은 `APP~<지문의 | 를 __ 로>`(digest 가 `?ns=` 를 URL 인코딩하지 않아 `+` 가 공백이 된다).
- 병합: 이미 매칭되는 카탈로그는 그 지문으로, 지문이 바뀌었는데 유사도로 매칭되는 경우(마켓플레이스)도 매칭되는 기존 카탈로그에 넣는다. 같은 영어 원문의 기존 번역 이관은 반드시 독립 검수(이번 10% 교정).
- 용어(같은 라운드): 캘린더 결제 Collect = **수금**(결제 수금·수금됨·수금 실패·자동 수금), 렌탈 Listing = **리스팅**, Add-on = **애드온**, 마켓플레이스 Plan = **플랜**(Pricing plans 는 '요금제'), Labs 출시 단계 Preview = **프리뷰**, 개발자 표기 = '{name} 제공'.
- 인보이스 요약 카드('0 Invoice(s) in Draft' 등)는 i18n 키가 없는 하드코딩 → 로더 숫자 패턴(PR #98, v4.21.15). v4.21.14(교차 출처 iframe 중계) 캐너리 관찰이 끝난 뒤 머지·발행한다.

## [확정] 마켓플레이스 한국어 UI 팩 가격 = 무료 — 2026-11-07
- 벤자민 결정: **무료(Free)**, 구독·사용료 없음. `marketplace/README.md` 체크리스트와 `LISTING.md` 에 반영.
- 함께 고침: 소개문의 지원 범위에서 '자동화(automation)'를 뺐다. 워크플로우 빌더는 다른 도메인 iframe 이라 다른 에이전시에 설치되는 번들로는 번역되지 않는다(같은 출처 중계는 app.hyperclass.ai 엣지 전용). '포함되지 않음'에 iframe 화면을 명시.
- 남은 제출 절차(벤자민 직접 로그인): 개발자 계정·앱 생성 → Custom JS 모듈에 `dist/hc-ko-marketplace.html` → 가격 Free → 개인정보처리방침 URL(레포 PRIVACY.md) → 심사 제출(11일까지).

## [확정] 추가 요금 없이 플랜 안에서만 — API 키 자동 호출 중단, 월간 분할 처리 — 2026-11-07
- 벤자민 지침(모든 프로젝트 공통): 번역·검수는 Claude 플랜(구독) 안에서만 한다. 별도 과금되는 API 키 호출은 쓰지 않는다. 한 번에 다 하지 말고 매달 조금씩 진행한다.
- 배경: 11-06~07 매뉴얼 전면 재번역(3,134건)을 Actions + ANTHROPIC_API_KEY 로 돌려 API 과금(약 $240–250 추정)이 발생 — 사전 고지 부족.
- 조치: 모든 워크플로우의 API 키 주입을 저장소 변수 `ALLOW_PAID_API=true` 일 때만 켜지게 바꿈(기본 꺼짐 — 켜지 말 것). `ko-translate-round` 정기 실행 해제, `ui-updater` 신규 키 번역 단계 끔, `ko-round-review` 는 규칙 검사만, `manual-monthly` 는 변동 감지·대기열(`data/manual/queue.json`)만.
- 번역은 월간 예약 작업(Claude 세션, 매월 3일)이 `scripts/manual/MONTHLY-RUNBOOK.md` 대로 처리: 화면 미번역 키 월 300개, 매뉴얼 문서 월 40건 상한, 남은 건 다음 달로. 첫 달 결과를 보고 상한 조정.
- 2026-11 기준 대기: 화면 미번역 744키(23개 묶음, `scripts/round-prep.py`), 매뉴얼은 다음 감지(12-02)부터.

## [기록] 상세·편집 화면 전용 네임스페이스와 교차 출처 iframe 목록 — 2026-11-07
- 목록 화면 스윕으로는 **편집 화면에서만 로드되는 네임스페이스**가 안 잡힌다. 상품 편집(SaaS 상품)의 `saasApp` 이 1,337/1,345 영어였다(v4.2.62 에서 같은 앱 카탈로그 경로 이관으로 해결). 상세·편집 화면(상품·인보이스·견적서·강좌·폼 빌더·캘린더 예약 설정)은 메인 탭에서 직접 열어 host 네임스페이스 영어 수를 센다.
- 구독 취소처럼 **사용자가 단어를 입력해 확인하는** 키(cancelWord 등)는 DNT — 영어 그대로 두고 앞뒤 조각만 번역한다('확인하려면 Cancel 을 입력하세요').
- 교차 출처 iframe 화면(한글팩이 닿지 않음, 73라우트 숨은 iframe 조사): 설정 → 캘린더(`calendar-app.leadconnectorhq.com`), 설정 → 이메일 서비스(`ghl-isv-app-prod.`), 설정 → 대화 제공자(`client-app-crm-conversations.`), 마케팅 → 제휴 관리자(`client-app-affiliate-manager.`), AI Studio(`leadgen-vibe-ai-builder.`), 모바일 앱 커스터마이저(`mobile-whitelabel-customizer.`), 잠재 고객 발굴(외부). 자동화·비즈니스 프로필의 같은 출처 중계(로더 v4.21.14, 캐너리)가 정식이 되면 이 목록이 다음 대상 후보다 — 특히 **캘린더 설정은 신규 계정 첫 설정 화면**이라 우선순위가 높다.
- verify-deploy 의 textEntries 는 **배포된 core 의 _text 건수**다(pretty 보다 C7 미배포분만큼 적다 — 11-07 에 pretty 건수를 넣었다가 바로잡음).

## [기록] 상세 화면 점검 결과 — 사전 v4.2.63 · 로더 v4.21.15 초안 — 2026-11-07

- **인보이스 요약 카드**: GHL 이 `list.dashboard.*` i18n 키(별도 앱 listInvoices)를 쓰지만 문자열은 데이터 도착 때 한 번만 조립된다 → 카탈로그 패치가 먼저면 한국어, 데이터가 먼저면 '0 Invoice(s) in Draft' 로 굳는다(같은 계정에서 둘 다 실측). 사전 값('0 건 임시 저장' 꼴) + 로더 v4.21.15 ⑦ 숫자 패턴 둘 다 둔다(PR #98 은 #109 로 흡수).
- **사용자 데이터로 보고 번역하지 않는 것**: SaaS 상품 가격 이름 Monthly·Yearly(SaaS 설정이 만든 기본 이름이지만 고객 결제 화면에도 그대로 나가는 가격 이름) · 인보이스 미리보기 제목 'INVOICE'(인보이스 설정의 제목 값) · 편집기 글꼴 이름(Inter).
- **매개변수가 영어인 i18n 값**(`{opportunityObject} 연결` → 'Opportunity 연결'): 값에서 매개변수를 빼면 검증(C 규칙)에 걸리고 오브젝트 이름을 바꾼 계정이 깨진다 → 결과 문자열을 `_text` 로 잡는다.
- **로더 v4.21.15(PR #109, 초안)**: 선택 목록 옵션의 단어 1개는 *같은 메뉴 옵션이 전부 사전 단어일 때만* 번역(앱 열거값만 — 사용자 데이터가 섞인 메뉴는 그대로) · 한국어 라벨+영어 날짜 · 상대 시각(ago/in) · 소문자 상태 칩·Tailwind 알약 상태어. **v4.21.14 캐너리(교차 출처 iframe) 관찰이 끝난 뒤** 같은 절차로 next → stable.
- **빌더 iframe(폼·설문·페이지 빌더)** 은 v4.21.14 중계(hc-ifr-proxy)를 넓혀야 닿는다. Workers 유료 전환은 **지금 필요 없다**(2026-11-07 실측으로 정정):
  - 계정 전체 Worker 호출: 오늘 3,333 / 100,000(대시보드), 지난 24시간 7.5천(edge 6천·ifr 1.6천·telemetry 1.3천), CPU P90 3ms, 오류 0.
  - 한도는 'Worker 호출 수'다. 빌더 코드(JS·CSS)는 모든 고객에게 같은 파일이고, 고객별로 다른 데이터는 API(backend.…)로 Worker 를 거치지 않는다.
  - 워크플로우 목록 1회 열기: 처음 207건(JS 171·CSS 25 등, 6MB) → 브라우저 캐시가 살아 있으면 **1건**(HTML 문서만, 211건 캐시 적중). 페이지 빌더는 큰 번들 1개라 열 때 4건(단 원래 출처가 no-store 라 5MB 를 매번 다시 받음).
  - 원래 출처 캐시가 4시간(워크플로우·폼 빌더)·no-store(페이지 빌더)라 4시간마다 수백 건이 다시 탄다 → hc-ifr-proxy v0.3.0 이 해시 이름 파일을 1년 immutable 로 바꿔, GHL 이 새로 배포하기 전까지는 사용자당 '열 때 1건'으로 줄인다(페이지 빌더는 원래보다 빨라짐).
  - 에셋을 Worker 밖(GHL 출처 직접)으로 돌리는 길은 막혀 있다: 모듈 스크립트가 교차 출처라 CORS 헤더가 필요한데 GHL 에셋 서버가 주지 않는다(실측 'Failed to fetch'). GHL 번들을 우리 정적 파일로 복제하는 길(정적 요청은 무료·무제한)은 배포마다 따라가야 하고 남의 코드를 재배포하는 문제라 택하지 않는다.
  - 유료 전환 기준: 하루 Worker 호출이 꾸준히 5만(한도의 절반)을 넘을 때. 한도를 넘기면 라우트가 Fail open 이라 그날 남은 시간 동안 중계 화면이 깨질 수 있다(영어로 되돌아가는 게 아니라) → 대시보드 사용량 알림을 걸어 둔다.
- **독립 검수 반영(오늘 추가분)**: 자동 리뷰가 규칙 검사만 도는 동안(ANTHROPIC_API_KEY 없음) 사전 추가분은 별도 검수 에이전트로 본다 — 지적 9건 반영(v4.2.66). 용어: 위험 단계 '위험도 높음/보통/낮음', Queued '대기열'(Pending '대기 중'과 구분), 권한 목록 '… 보기 및 관리' 꼴·WhatsApp·GBP 원문 유지.
- **이미지 속 영어**(소셜 플래너 새 게시물 미리보기 'Select a social account to preview your post here.')는 그림이라 손대지 않는다.

## [기록] 밤샘 진행(2026-11-07 밤 ~ 11-08 새벽, 벤자민 '자는 동안 계속') — 2026-11-08
- **워크플로우 앱 카탈로그(사전 v4.2.67)**: 중계 iframe 안 앱은 vue-i18n 카탈로그(로케일 en, 9,399)를 갖고 있어 DOM 치환보다 카탈로그 병합이 맞다 → 로더 v4.21.15 ⑩(iframe 문서의 Vue 앱도 지문 병합, iframe 의 #app 은 호스트로 보지 않음). 이번엔 1~3단어 라벨만(눈에 가장 많이 띔), 문장 약 3,970은 '큰 작업은 나눠서' 지침대로 다음 라운드.
- **같은 원문 이관 검수는 계속 필수**: 이번 이관 2,398 중 165(6.9%)가 고쳐졌다 — 다른 화면 문맥 묻음(END '통화 종료'→'종료', Actions '작업'→'액션', Due date '만료일'→'마감일').
- **별도 앱 카탈로그 병합 경합**: 카탈로그는 병합되지만(코스 분석 화면 t() 가 한국어) 앱이 마운트 때 한 번 만든 값(표 열 정의·인보이스 요약 카드 문자열)은 영어로 굳는다 → 그런 자리는 _text(멀티 단어) 또는 로더 패턴으로 덮는다. 마운트 전에 병합하는 근본책은 GHL 번들을 건드려야 해서 택하지 않는다.
- **_textScoped 는 문맥 없이 적용**되므로 '어느 화면에 나와도 무난한 값'이 기준(v4.2.70 전수 검수). 확정: Inbox 인박스(결정 기록) · Estimate 견적서 · Create 만들기 · Draft 임시 저장 · Year 년 · On/Off 켜짐/꺼짐.
- 비즈니스 프로필 iframe 앱(crm settings)은 메시지가 컴파일된 함수(원문 문자열 없음)라 이번 추출 방식이 안 통한다 — 함수 소스 파싱 또는 g.t() 렌더 결과로 따로 뽑아야 한다(다음).


## [기록] '다 반영' 배포와 계정별 점검 — 2026-11-08
- 벤자민 지시(2026-11-08 아침 "다 반영하고 오늘은 계정마다 상태가 어떤지 검토해줘")로 대기 중이던 것을 모두 내보냈다: #123(iframe 사전 별도 파일) · 로더 v4.21.15(#109, 캐너리 r6JD 실측 뒤 stable) · hc-ifr-proxy v0.3.0(#116, 대시보드 편집기로 배포 — 버전 e9ca76f8, 해시 자산 `immutable` 확인).
- **포인터 봇 결함 2건(#129로 수정)**: ① 대상 커밋을 core/apps 만으로 골라 ifr 파일만 바뀐 커밋이 발행되지 않았다. ② 사전과 무관한 커밋으로 수동 전진(workflow_dispatch target)한 직후, 다음 검증 실행이 *더 오래된* 사전 커밋으로 포인터를 되돌렸다(rev 가 ifr 파일 없는 cdn 을 가리킴 — 캐너리만 영향, 404 로 조용히 꺼짐). 수정: `DICT_PATHS`(core·apps·ifr)로 대상·최신 판단·jsDelivr 대조, 포인터 원본이 대상의 후손이고 사전 파일이 같으면 건너뜀. **교훈: 포인터 수동 전진에 사전과 무관한 target 을 주지 않는다.**
- 로컬 클론의 fetch refspec 이 main 만이면 `publish-cdn.sh` 의 `git fetch origin cdn` 이 원격 추적 브랜치를 갱신하지 않아 non-fast-forward 로 3회 실패한다 → `git config remote.origin.fetch '+refs/heads/*:refs/remotes/origin/*'` 후 실행.
- **계정별 점검(서브계정 28, 제외 1r0p)**: 메인 앱 로더 v4.21.15·사전 rev 01a7675 가 27곳(회원 소유 1곳은 화면을 열지 않음 — 같은 전역 경로)에서 동작, 대시보드 남은 영어는 약어(SMS·CPC)·사용자 데이터뿐. 포털 한글팩 17/18(고객 1곳은 기존 JS 꺾쇠 — 결정 대기) · 포털 없는 계정 10. 알림 이메일(포털 59·인보이스 17·영수증·캘린더)은 기존 27곳 전부 한국어 유지, **신규 '스냅샷 마스터' 계정만 미적용**(드라이런: 포털 59·인보이스 17·영수증 제목·캘린더 동의 문구 1).
- 점검에서 찾은 영어: 소셜 계정 연결이 만료된 고객 2곳의 모든 화면 상단 배너('The connection for the following Social Planner Instagram account(s) has expired: …' + 'Re-integrate') — 서버 문장이라 로더 v4.21.16 고정 패턴으로 처리.

## [기록] GHL 네임스페이스 이동 — AI 에이전트 빌더(agentBuilderApp) — 2026-11-08
- 벤자민 제보: 대화 AI 에이전트 편집 화면(`/ai-agents/conversation-ai/agent/:id`)이 영어. 원인 = GHL 이 `aiEmployeesApp`·`voiceAiApp` 의 문자열을 새 네임스페이스 `agentBuilderApp`(5,398)으로 옮겼다(키 경로는 대부분 그대로 — 4,170 이 같은 경로·같은 원문). 사전에 없는 네임스페이스라 통째로 영어였고, 텔레메트리 en-missing 에도 아직 없었다(이동 직후).
- 처리(v4.2.73): 같은 경로 이관 4,166 + 신규 1,192. 옮겨 오는 김에 기존 번역도 독립 검수(578 교정 — '예약 부킹'·'마구간'(stable)·'환자'(patient)·'강조 색상'(accent) 같은 오역 포함).
- **교훈**: GHL 은 기능을 개편할 때 네임스페이스를 통째로 옮긴다 — 키 경로가 같으면 기존 번역을 그대로 쓸 수 있다. 계정 점검·화면 스윕 때 `#app` 카탈로그에서 '사전에 없는 네임스페이스 + 영어 비율 높음'을 함께 본다(텔레메트리는 그 화면을 누군가 열어야 들어온다).
- 원문의 '600자 초과' 값(프롬프트 템플릿 9·약관 1)은 텔레메트리 Worker 가 받지 않는다 → 550자 조각(`key#n`)으로 올려 다시 잇는다.

## [결정] iframe 중계 전 계정 · AI 스튜디오 — 2026-11-08
- 벤자민 제보(스냅샷 마스터 계정 `/vibe` — AI 스튜디오 전부 영어). AI 스튜디오는 다른 출처 iframe(`leadgen-vibe-ai-builder`, Vue + vue-i18n en 2,314).
- 처리: Worker hc-ifr-proxy v0.4.0(앱 키 `vibe`, 대시보드 편집기 배포 cbc910cb) · 로더 v4.21.17(IFR_HOSTS 에 vibe) → 캐너리에서 앱 로드·프로젝트 목록 정상 확인 → 카탈로그 추출·번역(사전 v4.2.75, ifrApps).
- **벤자민 결정(AskUserQuestion 2026-11-08): '확인 후 전 계정'** → 로더 v4.21.18 `IFR_LOCS = null`. 다른 계정(스냅샷 마스터) 강제 next 실측(AI 스튜디오 로드·워크플로우 한국어 55/2·비즈니스 프로필 84/5) 뒤 stable.
- 끄기: Worker `OFF = true` 배포 → 헬스 헤더 없음 → 로더가 원래 주소로(자동 폴백). 계정별 제외는 포인터 excludeLocations(로더 `allowed()`).
- 원문 브랜드 정리: LeadConnector Domain Hub → 하이퍼클래스 도메인 허브, 'inside HighLevel' → 하이퍼클래스, 앱 이름 Vibe → AI 스튜디오(환경 변수 접두어 `VIBE_` 같은 코드 값은 그대로 — 화면에 보일 수 있음).

## [결정] 온보딩 템플릿 계정 한국어 완료 · 꺾쇠 포털 보류 — 2026-11-09
- 벤자민 지시(2026-11-09): 꺾쇠 포털 고객의 한글팩 설치는 보류, 스냅샷 마스터(온보딩 템플릿) 계정 한국어 설치는 다시 진행 — 기존 JS 에 꺾쇠가 있는 고객 포털 1곳은 **보류**(러너를 돌리지 않는다, 다시 지시가 있을 때까지).
- 온보딩 템플릿 계정(buBP…): 포털 Custom JS·CSS 는 벤자민이 직접 넣었다. 러너로 덧붙이지 않고 저장값을 읽어 정본과 대조만 했다(슬롯 고정 SHA 028b315 일치, 베일 규칙 v1.1.0 과 같음 — 머리 주석만 v1.0.1 표기).
- 알림 이메일 러너(전날 자동 안전 검사로 멈춤)는 벤자민의 명시 지시로 실행: 포털 59·인보이스 17·영수증·캘린더 동의 문구 1, 오류 0.
- 러너가 띄운 '인보이스 다른 설정 변화 reminderSettings,_id,altId,altType,createdAt,customFields,deleted' 는 **신규 계정의 인보이스 설정 문서가 첫 저장으로 만들어지면서 생긴 차이**였다(createdAt = 러너 저장 시각). 저장 뒤 리마인더는 GHL 기본 3개 켜짐 — 다른 계정 7곳과 같다. 러너 v1.2.2(프로젝트 문서)는 가상 기본값(_id 없음)이었던 경우 문서 생성 필드·reminderId·customFields(없음→[])만 빼고 비교한다(리마인더 켜짐·간격 등 실제 값 변화는 계속 보고).
- 기본 포털 주소는 `<subDomain>.app.clientclub.net` 이다(`.clientclub.net` 은 DNS 없음) — 포털 러너 inventory 표시 수정(v1.2.1).

## [결정] 에이전시 화면 한국어(로더 v4.21.19) — 2026-11-10
- 계기: 텔레메트리 2026-11-09 집계에 `agencyDashboardApp` 영문 188/188. 벤자민에게 '에이전시 대시보드 번역'을 제안 → "진행해줘".
- 원인: 사전에는 v4.2.22 부터 188개 모두 한국어로 있었다. 로더가 로케이션 없는 화면을 PREAUTH 목록만 열어(v4.19) 에이전시 화면에서 `suspended` — 결정 ⑤(작업지시서 v1, 2026-10 '에이전시 화면은 고객 비노출이라 범위 밖')와 레거시 은퇴(10-29)가 겹쳐 에이전시 화면 전체가 영어였다. 사이드바에 원래 브랜드 메뉴명(굿즈 스토어)도 그대로 노출.
- 실측: 에이전시 화면의 호스트 카탈로그 103 ns · 9,885 리프 중 9,562 가 사전(core host)에 한국어로 있다(없는 것 323: agency 43·common 36·campaign 21…).
- 처리: 로더 v4.21.19 — `AGENCY` 명시 목록(첫 경로 조각 27개: agency_dashboard·sub-accounts·snapshots·reselling·settings·marketplace·integration 등, 라우터 getRoutes·사이드바 링크 실측). 통과·리다이렉트(/logout·/eject·/idp·/desktop·/download·외부 연동)·맞춤 메뉴 링크·공개 템플릿·잠김/정지 화면은 제외. `afterExclReload` 는 PREAUTH 에만. `ALLOW` 로 좁혀 둔 상태에서는 열지 않는다.
- 결정 ⑤를 대체한다. 에이전시 화면은 에이전시 관리자(벤자민 팀)만 보므로 고객 화면 영향 없음. 되돌리기 = 포인터 loader.stable 을 v4.21.18 cdn `1796413` 로.
- 라이브(2026-11-10, `?hcch=next`): 엣지 포인터 반영까지 머지 뒤 약 5분(raw 캐시 300초 → 엣지 60초). 에이전시 대시보드 한국어(남은 영어 'AI Suite' 1 — 제품명), 사이드바 '하이퍼클래스 굿즈'. 화면별 보이는 텍스트 한국어/전체: 잠재고객 발굴 37/38 · SaaS 구성기 86/99 · 스냅샷 83/90 · 팀 126/182(나머지는 이름·이메일) · 회사 설정 44/86 · 애드온 37/94 · 리셀링 171/268. 고객 화면(r6JD 대시보드) 회귀 없음 → stable.
- 남은 일: 에이전시 화면 안의 별도 마이크로앱(예: `reselling-dashboard-app` 지문 `common|reselling` 924 — 583 이 호스트 사전과 같은 키 경로)·하위 계정 목록·회사 설정·애드온 카탈로그 추출 → 같은 경로 이관 + 신규 번역(정기 라운드). 회사 설정에 원래 브랜드명이 든 문장('What do you primarily use HighLevel for?')도 그때 정리.


## [결정] 매뉴얼 ↔ 창업 챌린지 강의 영상 크로스레퍼런스 — 2026-11-11
- 벤자민 지시(2026-11-11): 유튜브 '무료 창업 챌린지' 강의에서 다루는 부분이 있으면 그 챕터 링크를 매뉴얼에 넣어 영상으로도 공부할 수 있게.
- 19편(1강~10강, 부별 영상) 설명란 챕터를 그대로 가져와 기능 시연 챕터 90개 → 문서 90개에 107건 연결(`data/manual/video-map.json`). 이론 챕터·Hyperaxis 챕터는 연결하지 않음.
- 문서마다 제목 다음 첫 문단 뒤에 초록 hint 상자 '🎬 영상으로 배우기'(타임스탬프 링크 `&t=초`) + 목차 페이지 링크. 목차 페이지는 `docs/01-시작하기/creator-challenge-videos.md`(시작하기 맨 앞, 강의별 영상 embed + 전체 챕터 표 + 관련 매뉴얼).
- `scripts/manual/video_links.py apply` 로 다시 만든다(멱등, 연결표에서 빠진 문서의 상자는 지움). 월간 번역으로 문서가 새로 써지면 런북 B-3 단계에서 다시 실행.
- `postprocess.py` 의 영상 링크 제거는 벤자민 본인 영상 id(`data/manual/video-chapters.json`)를 남기도록 예외 추가 — 화이트라벨 원칙(남의 영상 제거)은 그대로.
- 외부 API·유료 호출 없음(챕터는 유튜브 공개 설명란에서 수집).
- 벤자민 추가 지침(2026-11-11): **링크는 유튜브에 공개된 강의만.** 연결한 19편은 채널 공개 업로드 목록에서 모두 확인했다. `video-map.json` `_meta.public_ids` 에 없는 영상은 `video_links.py` 가 거부한다(일부 공개·비공개·멤버십·유료 강의 금지).
- 벤자민 피드백(2026-11-11): 초록 상자·강의 목차 페이지 형식은 유튜브가 이미 제공하는 것이라 불필요 → **본문 문장·소제목 옆 텍스트 링크로 전환**. 상자 90개·목차 페이지 삭제, 105문서 162곳에 186링크(`▶ 영상 [N강 M부 mm:ss]`). 스크립트(유튜브 자막)로 장면 시작 시각을 맞춘 곳도 있다(예: 스플릿 테스트 만들기 2:19). 옛 요금제(스타터·그로스) 설명 장면은 현재 Accelerator 단일 요금제와 달라 연결에서 뺐다.

## [결정] 카카오 커넥터(KAKAO Connector · 카톡채팅연결) 매뉴얼 전면 개편 — 2026-11-12
- 벤자민 지시(2026-11-12): "매뉴얼에 카카오커넥터 앱에 대한 가이드를 자세히 작성해줘".
- 기존 `docs/43-한국-앱/kaka/`(KAKA AI, 11-06 작성)는 옛 제품 기준(무료 답장 1분·응답대기 고정 문구 등)이라 현재 앱과 어긋남 → 전면 재작성.
- 근거(정본): hyperclass-kakao-ai `docs/setup-guide.md`(C-136, 2026-11-11) + `public/kaka-setup-helper.md`(화면 기준 2026-11-08) + 앱 화면 그림 15장(`public/assets/onboard`, 민감값 가림 처리본) → `.gitbook/assets/kakao-connector/`.
- 구성 15쪽: 개요 · 1~7단계(채널 준비 · 설치/설정 화면 · 오픈빌더 · 연결 확인 · 답변 방식 · 늦은 답장 · 실제 확인/완료 화면) · 운영 가이드 · 선택 A~D · AI 프롬프트 템플릿 · 체크리스트/FAQ.
- 파일 번호 변경(05~09 → 09·10·11·12·14)에 따라 옛 주소 5개는 `.gitbook.yaml` 리다이렉트.
- 앱 서버 이름 KAKA는 손님·상담원에게 보이는 메모 문구([KAKA] …)·태그(`kaka-mirror`)에서만 그대로 둔다. 문서 본문 이름은 "카카오 커넥터", 메뉴는 "카톡채팅연결".
- 앱 동작·문구가 바뀌면(kakao-ai 저장소 setup-guide/helper 갱신) 이 폴더도 함께 고친다 — API 없이 플랜 내 세션에서.

## [결정] GitBook 목차를 업무 흐름별로 재구성 — 2026-11-12
- 벤자민 지시(2026-11-12): "처음 보는 사람들이 보기 힘든 구조… FAQ는 왜 2개나 있는지". 선택: 에이전시용 공개 목차에서 빼기 · 업무 흐름별 재구성 · 2026 신기능은 각 기능 섹션으로.
- 섹션 44개 → 15개(처음 시작하기 · FAQ · 한국 전용 앱 · 고객 관리 · 예약 · 사이트 · 이메일/마케팅 · 자동화 · AI 에이전트 · 결제/스토어/계약 · 코스/커뮤니티/포털 · 전화/문자 · 리포팅 · 설정/연동/모바일 · 참고), 섹션 안은 묶음(접히는 하위 목록) 98개.
- FAQ: '자주 묻는 질문 모아보기' 페이지를 목차에서 빼고 FAQ 섹션 안 5개 묶음으로. 첫 화면 제목 'README' → '하이퍼클래스 도움말 홈'.
- 숨김 460쪽(에이전시·SaaS·리셀링·스냅샷·화이트라벨 등, `data/manual/toc-hidden.json`). 파일은 저장소에 남김. 공개 문서 66곳의 숨김 문서 링크 정리.
- 파일 위치는 그대로(번역 파이프라인·영상 연결표·문서 간 링크 영향 없음). 구성은 `data/manual/toc.json` + `scripts/manual/gen_summary.py`(v3).
- 주소가 바뀐 3,131쪽은 옛 주소 → 파일 리다이렉트(총 4,167). 숨긴 문서의 옛 주소는 첫 화면으로.
- 실측(2026-11-12): 같은 대상(README.md)으로 가는 리다이렉트가 약 830개를 넘으면 그 뒤 항목은 동작하지 않았다(404). 숨긴 문서 옛 주소는 제목 키워드로 관련 묶음 페이지에 나눠 보내 해결. **한 대상에 리다이렉트를 몰지 말 것.**

## [결정] 결제 페이지 한글팩 가동 — 2026-11-13
- 벤자민: "결제링크도 한글화 안되니? 해봐" — 10-31 부터 '준비 완료·미배포'였던 트랙 E 를 가동.
- 사전 확인: 실제 결제 링크에 포인터·로더(jsDelivr @stable, SRI)를 손으로 넣어 applied·약관 문장·탭 제목 한국어 확인(현행 결제 앱 버전에서도 동작). `brand.ludicrous.cloud` 가 Cloudflare IP(Cloudflare for SaaS) — 앱 도메인과 같은 O2O 경로라 Proxied 전환 가능하다고 판단.
- 실행: ① `hc-ko-edge` v0.4.0 대시보드 배포(활성 b60d5e58 = v0.3.0 에서 교체, 앱 도메인 주입 재확인) ② 라우트 `links.hyperclass.ai/*` **Fail open**(결제는 Worker 한도·오류 때 원본으로 통과해야 한다) ③ DNS `links` Proxied.
- 실측(전환 직후): 결제 링크 주입·applied·베일 0.5초, `/` 통과, `/payment-link/*`·`/invoice/*` 주입. 입력·결제는 하지 않았다.
- 남은 일: 기존 `app.hyperclass.ai/*` 라우트의 Failure mode 확인(기본값 Fail closed 면 무료 한도 초과 시 앱이 막힌다 — Fail open 권장). 상품 가격 이름 'Monthly'(상품 데이터)는 상품 설정에서 '월간'으로.

