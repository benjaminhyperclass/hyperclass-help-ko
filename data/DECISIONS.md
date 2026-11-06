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
