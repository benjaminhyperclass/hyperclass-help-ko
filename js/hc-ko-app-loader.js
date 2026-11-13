/* Hyperclass 한글팩 — 메인 앱(GHL 화이트라벨) 로더 v4.21.22
 * v4.21.22: IFR_TEXT 범위에 빌더 설정 탭(.settings-container) — 같은 모듈 상수인 설정 설명 문장 4개(PDF 자동 생성·연락처 기억·대화 스레드·시간대).
 * v4.21.21: 중계 iframe 앱의 '모듈 상수' 라벨 — 폼·설문·퀴즈 빌더 요소 팔레트(Personal Info·Full Name…)는 앱이 모듈을 읽을 때
 *          t() 로 한 번 만든 상수라 사전 병합 뒤에도 영어로 남는다(로케일을 바꿔도 안 바뀜 실측). 병합 직전 같은 키의 영어 값을 떠 두고
 *          (영어→한국어), IFR_TEXT 가 정한 범위(팔레트 #standard-container) 안의 텍스트 노드만 바꾼다 — 표시만, 폼 데이터는 그대로.
 * v4.21.20: 폼·설문·퀴즈 빌더 iframe(leadgen-apps-form-survey-builder) 중계 대상 추가 — Worker hc-ifr-proxy v0.5.0 앱 키 fsb.
 * v4.21.19: 에이전시 화면(로그인한 에이전시 관리자 메뉴 — 대시보드·하위 계정·스냅샷·리셀링·설정 등)을 연다(벤자민 2026-11-10 '진행해줘').
 *          명시 목록 AGENCY(첫 경로 조각, 라우터 getRoutes·사이드바 실측). 사전은 이미 97% 를 덮는다(에이전시 화면 카탈로그 9,885 중 9,562 한국어 실측).
 *          통과·리다이렉트 경로(/logout·/eject·/idp·/login/*·/desktop 등)와 공개 경로는 넣지 않는다. 결정 ⑤(10월, 에이전시 화면 범위 밖)를 대체.
 * v4.21.18: iframe 중계(자동화·비즈니스 프로필·AI 스튜디오)를 전 계정으로(벤자민 승인 2026-11-08) — IFR_LOCS null.
 * v4.21.17: iframe 중계 대상에 AI 스튜디오(leadgen-vibe-ai-builder → /__ifr/vibe/, Worker v0.4.0) 추가 — 범위는 그대로 IFR_LOCS.
 * v4.21.16: 상단 알림 배너 '소셜 플래너 계정 연결 만료' 문장·'Re-integrate' 버튼(서버가 영어로 내려주는 문장, 고객 2곳 실측) — 고정 패턴 ⑦에 추가.
 * v4.21.15: ① 선택 목록 옵션의 단어 1개 — 같은 메뉴 옵션이 전부 사전 단어일 때만(앱이 정한 열거값: 코스 난이도·주제·언어)
 *          ② 한국어 라벨 + 영어 날짜('기한 September 30, 2026' → '기한 2026년 9월 30일', 인보이스 결제 일정)
 *          ③ 상대 시각 '2 months ago'·'an hour ago'·'in 3 days' → '2개월 전'·'1시간 전'·'3일 후'(코스 댓글 등, 노드 전체 일치)
 *          ④ 상태 칩 허용 목록에 소문자 paid·pending(인보이스 미리보기 결제 일정) · Tailwind 알약(.rounded-full) 안의 상태어(커뮤니티 그룹 'Active').
 *          ⑤ '라벨 (숫자)' — 라벨이 사전 단어일 때('Companies (0)' → '회사 (0)', 연락처 상세 연관 패널) · 'N items' → 'N개 항목'
 *             · 페이지 표시 '1 - 3 of 3' → '3개 중 1–3'.
 *          ⑥ 월 이름 단독(전체 이름)·"January '27" → '10월'·'2027년 1월'(기회 예측 타임라인 열 머리).
 *          ⑦ 앱이 조각을 이어 붙인 문장 패턴 — 기회 예측 위험 규칙 'Slipped 2+ times 또는 14+ days (excluding high)'
 *             · 인보이스 요약 카드 '0 Invoice(s) in Draft' → '0 건 임시 저장'(카탈로그 패치보다 데이터가 먼저 오면 영어로 굳는 경합).
 *          ⑧ 대화 타임라인 시스템 이벤트 줄 — 'Appointment X'·'updated'·' → marked as cancelled for Oct 31, 2026 04:45PM'
 *             → '예약 X'·'업데이트됨'·' → 취소됨 · 2026년 10월 31일 오후 4:45'(굵은 조각 2개 + 꼬리 구조일 때만).
 *          ⑨ 쌍점 라벨 'Status:' → '상태:'(라벨이 사전 단어일 때) · 바로 뒤 값이 상태어면 범위 밖이어도 번역(기회 카드 'Status: Open').
 *          ⑩ 중계 iframe(IFR) 문서 안 Vue 앱 카탈로그도 지문으로 병합 — 워크플로우 앱(9,399문자열, 로케일 en)은 DOM 치환만으론
 *             빌더 대부분이 영어였다. iframe 의 #app 은 호스트가 아니므로 별도 앱 경로(applyApp)로만 다룬다.
 * v4.21.14: 교차 출처 iframe(자동화 워크플로우·비즈니스 프로필) 같은 출처 중계 — IFR_LOCS 로케이션에서 부팅했을 때만.
 *          iframe 주소를 app.hyperclass.ai/__ifr/{wf|crm}/… (엣지 Worker hc-ifr-proxy)로 바꾸고, 같은 출처가 된 iframe 문서에
 *          기존 DOM 번역(pass·mo)을 건다. Worker 헬스(x-hc-ifr) 확인 전·실패 시엔 원래 주소. 끄기: localStorage.hcKoIfr='0'.
 * v4.21.13: 새 디자인 시스템 입력칸 자리표시자(.hr-input__placeholder)의 단어 1개('Search' 등)도 _textScoped 범위.
 * v4.21.12: 배지·알약(pill) 안 'New' → '신규'(버튼용 '새로 만들기' 대신) · 자격 증명 목록 유형 칩 certificate·badge(상태 칩 허용 목록).
 * v4.21.11: '{{' 가 든 flat 값은 원본 t 대신 한국어를 보간 없이 그대로(원본 t 도 보간하지 않음 — 앱이 직접 치환).
 * v4.21.10: 멤버십 flat — vue-i18n 리터럴 {'x'} 를 글자로(화면에 "{'|'}" 가 그대로 보이던 문제), '{{' 가 든 값은 원본 t 에(안쪽만 채워지던 문제).
 * v4.21.9: 기간 선택기 월/연 보기(.hr-mm-yy-panel) — 머리 'Month'·'Year' → '월'·'연도', 월 목록 'Jan'… → '1월'….
 * v4.21.8: 새 디자인 시스템 날짜 선택 패널 — 머리 'Nov 2026'(노드 3개) → '2026년 11월', 요일 'Su'…→'일'…, 월 목록 'Jan'…→'1월'….
 * v4.21.7: 기간 '0 minutes'·'56 seconds'·'3 days' → '0분'·'56초'·'3일'(노드 전체 일치) · _textScoped 범위에 hr 제목 글자(2xl·xl·lg).
 * v4.21.6: 상태 칩(n-tag) 안 시스템 열거값(Succeeded·Pending·Failed·Refunded·Paid·Draft·Active…) 허용 목록 — 사용자 태그는 그대로.
 * v4.21.5: _textScoped 범위에 새 디자인 시스템 체크박스·라디오 라벨(.hr-checkbox__label·.hr-radio__label) 추가.
 * v4.21.4: 날짜 앞 구분 기호·괄호 없는 시간대 — 감사 로그 '- 8:41 PM KST' → '- 오후 8:41 KST'.
 * v4.21.3: 차트(ECharts 등) SVG 글자 — _textScoped 범위에 포함(대시보드 기회 상태 'Open'·'Won'), 월·요일 약어 단독('Dec'→'12월'),
 *          '범례 - 숫자'('Open - 123'), 페이지 크기 '10 / page' → '10 / 페이지'. 모두 D3 스위치(_opts.dates·hcKoDates)를 따른다.
 * v4.21.2: 날짜 앞 라벨·뒤 시간대 — 'Created on: 5 Sep 2026, 6:17 PM (KST)' → '생성일: 2026년 9월 5일 오후 6:17 (KST)'.
 *          라벨은 _text 에 있는 것만(사전이 정한다). 시간대 약어는 그대로 둔다.
 * v4.21.1: 캘린더 주간 머리글 '01 Sun' → '1일 (일)', 'Sun 01'·'Sun 11/1' 도 같은 레이어에서.
 * v4.21.0: 날짜·시각 표기 레이어(D3) — 텍스트 노드(·title·aria-label) **전체가** 영어 날짜/시각(또는 범위)일 때만
 *          'Sep 28, 2026 02:07 PM' → '2026년 9월 28일 오후 2:07', '08:00 PM – 10:00 PM' → '오후 8:00 – 오후 10:00',
 *          'Today at 10:22 AM' → '오늘 오전 10:22'. 사용자 언어가 영어라 GHL 이 dayjs/moment 영어 형식으로 찍던 것(연락처·대화·
 *          소셜 플래너·캘린더·결제 표 등 전 화면 스윕 41형). 부분 일치는 하지 않는다(문장 속 날짜·사용자 본문 보존).
 *          끄기: core._opts.dates=false(원격) · localStorage.hcKoDates='0'. 상태: status().dateHits
 * v4.20.1: _textScoped 범위에 새 디자인 시스템 라벨류(.hr-text-medium·.hr-form-item-label__text·.hr-dropdown__trigger-wrapper·.hr-base-selection-label) 추가 —
 *        연락처 상세 새 UI 의 'Owner·Followers·Tags'·'Unassigned'·'Lead' 가 앱 카탈로그가 아니라 데이터/설정 시점 문자열이라 영어로 남던 문제.
 * v4.20.0: 멤버십 앱(#membership)이 provide 하는 t(key, params) 의 **인자 있는 호출**도 flat 으로 바꾼다.
 *          종전엔 인자 1개 호출만 flat 을 봤다 → '{count} locations available' 같은 198키가 영어로 남았다.
 *          이름 자리표시자 {name} 만 params 에서 채우고, 하나라도 못 채우거나 값에 '|'(복수형) 가 있으면 원본 t 에 맡긴다.
 * v4.19.1: _textScoped 범위에 새 디자인 시스템 탭(.hr-tabs-tab) 추가 — 연락처 상세 탭 'DND'·'Actions' 가 role 없는
 *          div 탭이라 영어로 남았다(2026-11-04 신규 계정 실측). 셀·옵션·칩은 종전대로 SCOPED_SKIP 이 먼저 거른다.
 * v4.19: 비로그인 화면(PREAUTH) 허용 — 로그인 `/`·비밀번호 재설정·설정·변경·SSO·토큰·데스크톱·지원·eject 로그인만 명시 목록으로 연다.
 *        로케이션이 없으므로 제외 판정은 false(로그인 전엔 사용자를 모른다 — 작업지시서 v1 결정 ①). 외부 연동 로그인
 *        (`/login/canny`·`/login/ideas-board`·`/login/shopify`)과 에이전시 화면은 계속 범위 밖. 로그인 직후 이동이
 *        routeChangeEvent 를 내지 않아도 놓치지 않도록 경로 감시(0.5초)를 더했다 — 제외 계정이면 기존대로 새로고침→영어.
 *        상태: __hcKoApp.status().preauth
 *        안전장치(적대적 리뷰 반영): ① 로그인 화면에서는 경로가 0.8초 안정된 뒤에만 병합(로그인된 사용자의 `/` 경유 리다이렉트에서
 *        병합하지 않도록) ② 제외 계정 새로고침 차단기 — 같은 탭에서 30초 안에 다시 새로고침하지 않고, 새로고침 직후 로드는
 *        PREAUTH 에서 부팅하지 않는다(GHL 이 `/` 를 거쳐 가도 루프 없음) ③ PREAUTH 에서는 텔레메트리를 보내지 않는다(KV 예산)
 *        ④ 리다이렉트 전용 경로(/login/token·/login/support·/login/desktop·/eject/login)는 목록에서 뺐다
 *        ⑤ #app 에 새 Vue 앱이 붙으면(composer 가 바뀌면) 호스트를 다시 병합한다(종전 hostDone 은 첫 composer 만 처리)
 *        버그 수정: 범위 밖 경로를 지나 허용 경로로 처음 들어올 때 부팅이 '적용 보류'에 빠지던 문제(onRoute 에서 suspended 해제).
 * v4.18.1: _textScoped 조상 탐색 깊이 3→8 (실측: 연락처 표 머리글이 th 아래 4단계 이상이라 v4.17 이 못 잡았다)
 * v4.18: 인앱 문구 신고 — 화면의 글자를 **Alt+Shift+클릭** 하면 그 텍스트 노드의 원문·부모 요소·라우트를 텔레메트리 Worker
 *        /report 로 보낸다(세션당 20건, 식별자 없음). 일일 집계가 data/telemetry/reports.json 과 이슈 코멘트로 모은다.
 *        (Alt+클릭만 쓰면 크롬이 링크를 다운로드하므로 Shift 를 함께 요구한다.) 상태: __hcKoApp.status().reports
 * v4.17: 단어 1개 치환 레이어(_textScoped) — 레거시 dashboard-ko 가 전역으로 치던 단어 1개 항목(Phone·Filters·Import·All…)을
 *        **UI 크롬 요소 안에서만**(표 머리글·버튼·탭·메뉴·label) 정확 일치로 바꾼다. 셀·옵션·칩·본문은 범위 밖이라
 *        고객 데이터(태그·단계명·업체명)는 건드리지 않는다(2026-10-08 결정의 좁은 완화). 레거시 슬롯 줄 은퇴의 전제.
 *        상태: __hcKoApp.status().scopedEntries / scopedHits
 * v4.16: 텔레메트리에 미번역 키의 **영어 원문 샘플**(ns 당 최대 150쌍, 보고서 ≤60KB)을 동봉 — Worker 가 KV 에 모아
 *        번역 라운드 입력(data/telemetry/en-missing/)을 사람 손 없이 채운다. UI 문자열만, 사용자 데이터 없음.
 * v4.15: 엣지 Worker 가 <head> 에 넣어 준 window.__hcPtr(포인터 스냅샷)이 있으면 Cache Storage 포인터를 기다리지 않고
 *        그 rev 로 즉시 부팅(revSource 'edge'). 불변 URL(SHA) 사전은 cache:'default' 로 받아 <link rel=preload> 와 합쳐진다.
 * v4.14: 텔레메트리 — 적용 후 ~8초, 라우트마다 세션당 1회, 카탈로그에서 한글이 없는 리프를 네임스페이스별로 세어
 *        포인터 `telemetry.url` 로 sendBeacon. 식별자 없음(로케이션 ID 는 :loc 으로 치환). url 이 없으면 아무것도 보내지 않는다.
 *        끄기: localStorage.hcKoTelemetryOff='1'. 상태: __hcKoApp.status().telemetry
 * v4.13: 엣지 Worker(workers/hc-ko-edge)가 <head> 에 넣은 베일(#hc-ko-veil)을 한국어 적용 시점(start) 또는
 *        게이트 판정(제외·비허용) 즉시 걷는다. 베일이 없으면 아무 일도 하지 않는다.
 * v4.12 부터 슬롯에는 js/hc-bootstrap.js 만 붙고, 이 파일은 부트스트랩이 포인터(data/hc-ko-app-rev.json 의
 * loader.stable/next)에서 읽은 커밋 SHA 로 주입한다. 슬롯에 직접 붙이던 방식도 그대로 동작한다.
 * Agency Settings → Company → Whitelabel → Custom Code → Custom JavaScript 칸.
 * ⚠️ 이 칸은 **HTML 주입 필드**다. script 태그로 감싸야 실행된다.
 *    (ClientClub customJs 는 반대로 태그를 거부한다 — 두 필드를 혼동하지 말 것)
 *
 * 2026-08-22 app.hyperclass.ai 실측 구조(310개 라우트 크롤) 기준.
 * 처리 패턴
 *  A. 호스트(#app) composer 에 merge + mergeLocaleMessage 래핑 → 원격이 영어 네임스페이스를 넣는 즉시 한국어로 재덮어쓰기
 *  B. 별도 Vue 앱(__vue_app__) 24종 → 카탈로그 지문으로 매칭해 각각 merge (정확일치 → 유사도 폴백)
 *  C. provide('t') ref 방식 원격(클라이언트 포털·코스·브랜딩 등) → t ref 를 래퍼로 교체
 *  D. i18n 밖 하드코딩 문구 → 텍스트 치환 레이어(_text)
 *
 * 사전: core(호스트+flat+_text) 먼저, apps 는 백그라운드로 이어서.
 *       REV 가 커밋 SHA 로 고정돼 있으면 URL 이 불변이므로 Cache Storage 를 재검증 없이 쓴다.
 *       REV 를 바꾸면 옛 캐시 버킷은 부팅 때 자동 삭제된다.
 * REV 결정 (v4.10, 2026-09-09): 슬롯의 로더는 한 번만 고정하고 사전 REV 는 포인터로 받는다.
 *       부팅 = Cache Storage 에 저장된 포인터 → 없으면 내장 REV_BUILTIN (raw 왕복을 기다리지 않는다).
 *       raw@main 의 data/hc-ko-app-rev.json 은 부팅 뒤 백그라운드로 받아 저장만 하고 **다음 로드**에 반영한다.
 *       포인터 REV 의 사전 로드가 실패하면 내장 REV 로 한 번 더 시도한다(포인터 캐시는 버린다).
 *       롤백 = 포인터 파일의 rev 를 직전 SHA 로 되돌린 커밋 (다음 로드부터 반영).
 *       운영 규칙: REV_BUILTIN 은 충분히 검증된(소킹된) 사전만 넣는다 — 포인터를 아직 못 받은
 *       첫 방문은 이 값으로 부팅하므로, 갓 올린 사전을 내장하면 롤백이 그 방문자에게 늦게 닿는다.
 * 서브계정 옵트아웃: window.HC_I18N_EXCLUDE = ['locationId', …] — v4.12 부터 부트스트랩이 포인터의
 *   excludeLocations 로 이 전역을 세운다(비어 있으면 아래 HC_EXCLUDE_FALLBACK).
 *   레거시 dashboard-ko 의 hcEx() 와 판정이 같아야 한다 — 다르면 그 계정만 반쪽 한국어가 된다.
 * 긴급 중단: 주소에 ?hcko=off 또는 콘솔에서 localStorage.hcKoOff='1'
 * 디버그:   주소에 ?hcko=debug → 콘솔 로그, window.__hcKoApp.status()
 */
(function () {
  'use strict';
  if (window.__hcKoApp) return;

  /* ---------- P1. 킬 스위치 + 단계적 배포 게이트 ---------- */

  // 긴급 중단 — 이 줄이 먼저다. 사전을 받기 전에 빠져나간다.
  try {
    if (/[?&]hcko=off/.test(location.search) || localStorage.getItem('hcKoOff') === '1') { liftVeil('off'); return; }
  } catch (e) {}

  /* ---------- 서브계정 옵트아웃 (레거시 hcEx() 와 규칙 동일) ---------- */
  // dashboard-ko 레이어의 hcEx() 와 **글자 그대로 같은 판정**이어야 한다.
  // 두 레이어가 제외 대상을 다르게 보면 그 계정만 반쪽 한국어가 된다.
  //
  //   var c = window.HC_I18N_EXCLUDE || ["1r0pJRd1cQQ5DZsjSbc9"];
  //   var m = window.location.pathname.match(/\/location\/([^\/]+)/);
  //   return !!(m && c.indexOf(m[1]) > -1)
  //
  // 정규식은 레거시 그대로 `/location/` 이다 — `/v2` 를 요구하지 않는다.
  // 아래 ALLOW 검사(locOf)는 `/v2/location/` 을 쓰는데, 그쪽이 더 좁다.
  // 제외는 허용보다 넓어야 안전하므로(좁으면 새어 나간다) 이 차이는 의도적이다.
  // `/location/x` 는 `/v2/location/x` 안에도 들어 있어 두 경로를 모두 잡는다.
  var HC_EXCLUDE_FALLBACK = ['1r0pJRd1cQQ5DZsjSbc9'];
  function excluded() {
    try {
      var c = window.HC_I18N_EXCLUDE || HC_EXCLUDE_FALLBACK;
      var m = window.location.pathname.match(/\/location\/([^\/]+)/);
      return !!(m && c.indexOf(m[1]) > -1);
    } catch (e) { return false; }
  }

  // ▼▼▼ 단계적 배포 ▼▼▼
  // 비어 있으면 전 서브계정(/v2/location/<id>/…)에 적용된다 — 2026-10-08 전체 개방(벤자민 지시).
  // 값을 넣으면 그 로케이션 ID 에서만 동작한다(다시 좁혀야 할 때).
  // 에이전시 화면은 v4.21.19 부터 아래 AGENCY 목록으로 연다(ALLOW 로 좁혀 둔 상태에서는 열지 않는다).
  var ALLOW = [];
  // ▲▲▲ 단계적 배포 ▲▲▲
  var gate = ALLOW.length > 0;

  // 비로그인 화면 (v4.19) — 라우터 getRoutes() 로 실재 확인한 경로 중 **화면이 있는 것만**(2026-10-31). 정확 일치,
  // 끝 슬래시·대소문자 무시(Vue Router 와 같게). 토큰·지원·데스크톱·eject 로그인은 곧바로 리다이렉트하는 통과 경로라 뺐다 —
  // 거기서 병합하면 도착지가 제외 계정일 때 새로고침이 하나 더 생긴다(토큰 소비 뒤 새로고침은 검증한 적 없음).
  // ALLOW 로 좁혀 둔 상태(gate)에서는 열지 않는다 — 단계적 배포 중엔 검증한 로케이션만.
  var PREAUTH = ['/', '/forgot_password', '/change_password', '/set_password', '/login/sso'];
  var PREAUTH_SETTLE_MS = 800;
  function preauth() {
    var p = location.pathname.replace(/\/+$/, '').toLowerCase() || '/';
    return PREAUTH.indexOf(p) >= 0;
  }
  // 에이전시 화면 (v4.21.19) — 로그인한 에이전시 관리자의 메뉴 화면. 첫 경로 조각 정확 일치(대소문자 무시).
  // 2026-11-10 라우터 getRoutes()·에이전시 사이드바 링크 실측으로 고른 **화면이 있는 메뉴 경로만**. 로그아웃·eject·idp·데스크톱·다운로드·
  // 외부 연동 리다이렉트(jobber·shopify·tiktok)·공개 템플릿·잠김/정지 화면·맞춤 메뉴 링크(고객 페이지 iframe)는 넣지 않는다.
  var AGENCY = ['agency_dashboard', 'agency_launchpad', 'ai-suite', 'ask-ai-agency', 'ai-usage', 'saas_dashboard', 'saas_education',
    'saas_fasttrack', 'prospecting', 'sub-accounts', 'sub-accounts-v2', 'accounts', 'transfer-locations', 'snapshots', 'reselling',
    'marketplace', 'integration', 'affiliate_portal', 'template-library-admin', 'partners', 'partner-network', 'university',
    'ghl-swag', 'ideas', 'mobile-app-customiser', 'desktop-whitelabel-app', 'settings'];
  function agencyRoute() {
    var seg = (location.pathname.split('/')[1] || '').toLowerCase();
    return !!seg && AGENCY.indexOf(seg) >= 0;
  }
  // 제외 계정 새로고침 차단기 — reloadIfExcluded() 가 sessionStorage 에 시각을 남긴다.
  // 30초 안에 남긴 기록이 있으면 ① 이 로드는 PREAUTH 에서 부팅하지 않고 ② 다시 새로고침하지 않는다(루프 주기는 수 초).
  var RELOAD_KEY = 'hcKoExclReload', RELOAD_GUARD_MS = 30000;
  function recentlyReloaded() {
    try { var t = +sessionStorage.getItem(RELOAD_KEY) || 0; return t > 0 && Date.now() - t < RELOAD_GUARD_MS; } catch (e) { return false; }
  }
  var afterExclReload = recentlyReloaded();

  function remoteOff() {
    try { return localStorage.getItem('hcKoRemoteOff') === '1'; } catch (e) { return false; }
  }
  function locOf() {
    var m = location.pathname.match(/\/v2\/location\/([^/]+)/);
    return m ? m[1] : null;
  }
  // 여기서 바로 return 하지 않는다. 이 앱은 새로고침 없이 라우트를 바꾸므로
  // (로더 자신이 routeChangeEvent 를 듣는다) 로드 시점 한 번의 판정으로는
  // 계정 전환을 놓친다. 부팅 직전과 라우트 변경 때마다 다시 본다.
  function allowed() {
    // 옵트아웃이 화이트리스트보다 먼저다. 여기서 즉시 return 하지 않고
    // allowed() 안에 둔 이유: ① 게이트에 막혔을 때도 __hcKoApp.status() 로
    // 원인을 확인할 수 있어야 하고(안 그러면 excluded 값을 볼 방법이 없다),
    // ② 이 앱은 새로고침 없이 계정을 바꾸므로 라우트 변경마다 다시 봐야 한다.
    if (excluded()) return false;
    if (remoteOff()) return false;
    var l = locOf();
    // 빈 ALLOW 도 서브계정 라우트로 한정한다. 종전 코드는 빈 배열이면 무조건 true 라
    // 개방하는 순간 검증한 적 없는 에이전시 화면까지 v4 가 붙었다(DEPLOY-v4 표의 설명과 어긋남).
    // 로케이션 없는 화면은 PREAUTH 목록(v4.19)과 AGENCY 목록(v4.21.19)만.
    // afterExclReload(제외 계정 새로고침 직후)는 PREAUTH 에만 건다 — 그 값은 페이지 수명 내내 남으므로 에이전시에 걸면
    // 제외 계정 → 에이전시로 돌아온 뒤 그 탭에선 영어로 남는다. 에이전시 화면 자체는 새로고침 루프를 만들지 않는다
    // (제외 계정으로 가면 reloadIfExcluded 가 30초 차단기를 본다).
    if (!l) return !gate && (preauth() ? !afterExclReload : agencyRoute());
    return !ALLOW.length || ALLOW.indexOf(l) >= 0;
  }

  /* ---------- P2. 사전 REV — 포인터 캐시 → 내장 순 ---------- */
  // 커밋할 때마다 REV 가 바뀌면 CDN·Cache Storage 가 함께 무효화된다.
  // @main 고정이면 jsDelivr 24h + TTL 6h 가 직렬로 쌓여 최악 30시간 지연된다.
  // 내장 REV 는 포인터를 한 번도 못 받은 첫 방문과, 포인터 REV 로드 실패 시의 안전망이다.
  // 슬롯 교체 없이 사전을 갱신하려면 data/hc-ko-app-rev.json 의 rev 만 바꾸면 된다(CI 봇이 한다).
  var REV_BUILTIN = '3b8272791e0280c079f663e722ad826343d8724a';
  var POINTER_URL = 'https://raw.githubusercontent.com/benjaminhyperclass/hyperclass-help-ko/main/data/hc-ko-app-rev.json';
  // 'hc-ko-app-' 접두사를 쓰지 않는다 — purgeOldCaches() 가 그 접두사 버킷을 전부 지운다.
  var POINTER_CACHE = 'hc-ko-pointer';
  var SHA_RE = /^[0-9a-f]{40}$/;
  var REV, revSource, revNext = null;
  var BASE, URL_CORE, URL_APPS, URL_IFR, CACHE, RAW, IMMUTABLE;
  function applyRev(rev, src) {
    REV = rev; revSource = src;
    BASE = 'https://cdn.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@' + REV + '/data/';
    URL_CORE = BASE + 'hc-ko-app-core.json';
    URL_APPS = BASE + 'hc-ko-app-apps.json';
    URL_IFR = BASE + 'hc-ko-app-ifr.json';   // v4.21.15 ⑩: 중계 iframe 앱 카탈로그 — IFR 이 붙을 때만 받는다(전 고객 apps 무게 제외)
    CACHE = 'hc-ko-app-' + REV.slice(0, 7);
    // CSP 가 connect-src 를 다르게 걸어 jsDelivr fetch 가 막힐 때의 폴백 (커뮤니티 트랙과 같은 raw 경로)
    RAW = 'https://raw.githubusercontent.com/benjaminhyperclass/hyperclass-help-ko/' + REV + '/data/';
    // REV 를 커밋 SHA 로 고정하면 URL 이 불변이라 내용이 바뀔 수 없다.
    // 그때 6시간마다 5.4MB 를 다시 받는 건 순수 낭비다.
    IMMUTABLE = /^[0-9a-f]{7,40}$/.test(REV);
  }
  applyRev(REV_BUILTIN, 'builtin');
  var TTL = 6 * 3600 * 1000;
  var LOCALE_KEYS = ['en', 'en-US', 'en_US'];
  var DEBUG = /[?&]hcko=debug/.test(location.search);

  var core = null, appsDict = null, appsKeys = null, T = null, TS = null;
  var booted = false, suspended = false;
  // 되돌릴 수 없는 변경을 한 번이라도 했는가.
  // i18n 카탈로그에 한국어를 부어 넣거나 provides.t 를 래퍼로 바꾸면
  // 원복 수단이 없다 — 이 상태에서 제외 계정으로 넘어가면 새로고침이 유일한 답이다.
  var dirty = false;
  var stats = { host: 0, apps: 0, tref: 0, remerge: 0, fuzzy: 0, unmatched: 0, textHits: 0, scopedHits: 0, dateHits: 0, ifrTextHits: 0, fallback: 0, pointerFail: 0, revFallback: 0 };
  function log() { if (DEBUG && window.console) console.log.apply(console, ['[hc-ko]'].concat([].slice.call(arguments))); }

  // API 는 게이트보다 먼저 정의한다. 게이트에 막혔을 때 __hcKoApp 이 undefined 이면
  // "로더를 안 붙였다" 와 "게이트에 막혔다" 를 콘솔에서 구분할 수 없다.
  var API = window.__hcKoApp = {
    version: '4.21.22',
    status: function () {
      var s = JSON.parse(JSON.stringify(stats));
      s.rev = REV;
      s.revSource = revSource;
      s.telemetry = JSON.parse(JSON.stringify(telemetry));    // builtin | pointer-cache | builtin-fallback(포인터 REV 로드 실패)
      s.revBuiltin = REV_BUILTIN;
      s.revNext = revNext;        // 백그라운드에서 받은 새 포인터 — 다음 로드에 반영
      s.gate = gate;              // 화이트리스트가 걸려 있는가
      s.allow = ALLOW.slice();
      s.location = locOf();       // 지금 보고 있는 로케이션 (/v2/location/ 기준)
      s.preauth = preauth();      // 비로그인 화면(PREAUTH 목록)인가 — v4.19
      s.agency = agencyRoute();   // 에이전시 화면(AGENCY 목록)인가 — v4.21.19
      s.afterExclReload = afterExclReload; // 제외 계정 새로고침 직후 로드(PREAUTH 부팅 안 함)
      s.excluded = excluded();    // 서브계정 옵트아웃 — 레거시 hcEx() 와 같은 판정
      s.remoteOff = remoteOff();  // 포인터 파일의 "off": true (원격 킬스위치)
      s.allowedHere = allowed();  // 여기에 적용되는가 (excluded 가 true 면 무조건 false)
      s.booted = booted;
      s.suspended = suspended;    // 비허용 로케이션으로 이동해 멈춘 상태인가
      s.dirty = dirty;            // 되돌릴 수 없는 변경(카탈로그 병합·t-ref 래핑)을 했는가
      s.coreLoaded = !!core;
      s.appsLoaded = !!appsDict;
      s.textEntries = T ? Object.keys(T).length : 0;
      s.scopedEntries = TS ? Object.keys(TS).length : 0;
      s.scopedHits = stats.scopedHits;
      s.datesOn = kdOn();
      s.reports = reported;
      s.ifr = JSON.parse(JSON.stringify(ifr));   // v4.21.14 iframe 같은 출처 중계 상태
      return s;
    },
    rescan: function () { scanApps(); },
    off: function () { try { localStorage.setItem('hcKoOff', '1'); } catch (e) {} return '새로고침하면 영어로 돌아갑니다.'; },
    on: function () { try { localStorage.removeItem('hcKoOff'); } catch (e) {} return '새로고침하면 한국어로 돌아옵니다.'; },
    get core() { return core; }, get apps() { return appsDict; }
  };

  /* ---------- 한국어 조판 ---------- */
  function injectCss() {
    if (document.getElementById('hc-ko-app-style')) return;
    var css = document.createElement('style');
    css.id = 'hc-ko-app-style';
    css.textContent = 'html[lang="ko"] body{word-break:keep-all;overflow-wrap:anywhere}';
    (document.head || document.documentElement).appendChild(css);
  }

  /* ---------- vue-i18n 유틸 ---------- */
  function composerOf(app) {
    try {
      var p = app && app._context && app._context.provides; if (!p) return null;
      var syms = Object.getOwnPropertySymbols(p);
      for (var i = 0; i < syms.length; i++) {
        var v = p[syms[i]];
        if (v && v.global && v.mode && typeof v.global.mergeLocaleMessage === 'function') return v.global;
      }
    } catch (e) {}
    return null;
  }
  function unwrap(x) { return (x && typeof x === 'object' && 'value' in x) ? x.value : x; }
  function catalogOf(g) {
    var m = unwrap(g.messages) || {}, l = unwrap(g.locale);
    return m[l] || m['en-US'] || m['en_US'] || m['en'] || {};
  }
  function fingerprint(g) { return Object.keys(catalogOf(g)).sort().slice(0, 5).join('|'); }
  function rawMerge(g) { return g.__hcOrigMerge || g.mergeLocaleMessage; }

  /* ---------- P3. 병합 대상 로케일 축소 ---------- */
  // 종전엔 en/en-US/en_US 3개에 무조건 넣어 같은 사전을 3벌 들고 있었다
  // (호스트만 41,997키 × 3). 실제 존재하는 로케일 + 현재 로케일에만 넣는다.
  function targetLocales(g) {
    var msgs = unwrap(g.messages) || {}, cur = unwrap(g.locale), out = [];
    for (var i = 0; i < LOCALE_KEYS.length; i++)
      if (LOCALE_KEYS[i] in msgs) out.push(LOCALE_KEYS[i]);
    if (cur && out.indexOf(cur) < 0) out.push(cur);
    return out.length ? out : [cur || 'en'];
  }
  function mergeInto(g, messages, tag) {
    if (!messages) return 0;
    var keys = targetLocales(g), fn = rawMerge(g), n = 0;
    for (var i = 0; i < keys.length; i++) { try { fn.call(g, keys[i], messages); n++; } catch (e) {} }
    if (n) { dirty = true; log('merged', tag, '→', keys.join(',')); }
    return n;
  }
  function pickNs(dict, incoming) {   // 원격이 넣은 네임스페이스에 해당하는 한국어만 골라낸다
    var out = null;
    for (var k in incoming) if (dict && dict[k] !== undefined) { (out = out || {})[k] = dict[k]; }
    return out;
  }

  /* ---------- A. 호스트 ---------- */
  var hostDone = false, hostG = null;
  function setupHost() {
    if (!core) return false;
    var el = document.getElementById('app'), app = el && el.__vue_app__;
    var g = app && composerOf(app); if (!g) return false;
    hostG = g;
    mergeInto(g, core.host, 'host');
    if (!g.__hcOrigMerge) {
      g.__hcOrigMerge = g.mergeLocaleMessage;
      g.mergeLocaleMessage = function (loc, msgs) {
        var r = g.__hcOrigMerge.apply(this, arguments);
        // 래퍼는 제거할 수 없다(원본 참조를 앱이 이미 들고 있을 수 있다).
        // 대신 멈춤 상태면 아무것도 하지 않고 원본 결과를 그대로 돌려준다 —
        // 이게 없으면 제외 계정에서 앱이 새로 로드한 영어를 계속 한국어로 되돌린다.
        if (suspended) return r;
        try {
          var ko = pickNs(core && core.host, msgs);
          if (ko) { g.__hcOrigMerge.call(g, loc, ko); stats.remerge++; log('re-merge', Object.keys(ko).join(',')); }
        } catch (e) {}
        return r;
      };
    }
    document.documentElement.setAttribute('lang', 'ko');
    hostDone = true; stats.host = 1; return true;
  }

  /* ---------- P4. 지문 매칭 — 정확일치 후 유사도 폴백 ---------- */
  // 정확일치는 최상위 네임스페이스가 하나만 추가돼도 어긋난다.
  // bulkActionsList 는 13,034키가 걸려 있어 조용히 영어로 돌아가면 타격이 크다.
  var MIN_TOP = 2;      // 최상위 키가 이보다 적으면 유사도가 무의미
  var MIN_SIM = 0.6;    // 자카드 유사도 하한
  var MIN_GAP = 0.15;   // 1위와 2위의 최소 격차 — 붙어 있으면 채택하지 않는다
  var CONTAIN_MAX = 4;  // 포함 관계 폴백을 시도할 최대 최상위 키 수

  function buildAppsKeys() {
    appsKeys = [];
    for (var fp in appsDict) {
      var top = Object.keys(appsDict[fp] || {});
      appsKeys.push({ fp: fp, set: top, n: top.length });
    }
  }
  function jaccard(a, bArr) {
    var inter = 0, seenB = {};
    for (var i = 0; i < bArr.length; i++) seenB[bArr[i]] = 1;
    for (var k in a) if (seenB[k]) inter++;
    var union = Object.keys(a).length + bArr.length - inter;
    return union ? inter / union : 0;
  }
  function matchApp(g) {
    if (!appsDict) return null;
    var fp = fingerprint(g);
    if (appsDict[fp]) return { ko: appsDict[fp], how: 'exact', fp: fp };

    var live = catalogOf(g), liveN = Object.keys(live).length;
    if (!appsKeys) buildAppsKeys();

    var i, c;
    if (liveN >= MIN_TOP) {
      var best = null, second = 0;
      for (i = 0; i < appsKeys.length; i++) {
        c = appsKeys[i];
        if (c.n < MIN_TOP) continue;
        var s = jaccard(live, c.set);
        if (!best || s > best.s) { second = best ? best.s : second; best = { s: s, fp: c.fp }; }
        else if (s > second) second = s;
      }
      if (best && best.s >= MIN_SIM && (best.s - second) >= MIN_GAP)
        return { ko: appsDict[best.fp], how: 'fuzzy', fp: best.fp, sim: best.s };
    }

    // 포함 관계 폴백 — gbp-optimization(yext), reputation-dashboard(reputation)처럼
    // 최상위 네임스페이스가 하나뿐인 앱은 유사도가 성립하지 않는다.
    // "사전의 네임스페이스가 전부 화면 카탈로그 안에 있는" 후보 중 가장 큰 것을 고른다.
    // 동점이면 채택하지 않는다.
    if (liveN <= CONTAIN_MAX) {
      var pick = null, tie = false;
      for (i = 0; i < appsKeys.length; i++) {
        c = appsKeys[i];
        if (c.n > liveN) continue;
        var all = true;
        for (var j = 0; j < c.set.length; j++) if (!(c.set[j] in live)) { all = false; break; }
        if (!all) continue;
        if (!pick || c.n > pick.n) { pick = c; tie = false; }
        else if (c.n === pick.n) tie = true;
      }
      if (pick && !tie) return { ko: appsDict[pick.fp], how: 'contain', fp: pick.fp };
    }
    return null;
  }

  /* ---------- B/C. 별도 Vue 앱 ---------- */
  // 앱별 시도 횟수. 카탈로그가 아직 비어 있는 채로 마운트된 순간에 스캔이 걸리면
  // 매칭이 실패하는데, 한 번 실패했다고 영구 제외하면 그 앱은 세션 내내 영어로 남는다.
  // 성공 = -1(완료), 실패 = 시도 횟수. MAX_TRY 를 넘겨야 포기하고 unmatched 로 센다.
  var MAX_TRY = 6;
  var attempts = (typeof WeakMap === 'function') ? new WeakMap()
    : { get: function () { return 0; }, set: function () {} };
  // v4.20: flat 값의 이름 자리표시자 {name} 을 params 로 채운다. 확실할 때만 — 못 채운 자리가 남거나
  // 복수형('|')·위치 인자(배열)·params 가 객체가 아니면 null 을 돌려 원본 t 가 처리하게 한다(영어로 남는 쪽이 안전).
  var PH_NAME = /\{\s*([A-Za-z_$][\w$]*)\s*\}/g;
  // v4.21.10: vue-i18n 리터럴 이스케이프 {'x'} 를 글자로 푼다(원본 t 는 컴파일러가 푼다 — 'Recommended aspect ratio: 16:9 {'|'} …').
  var LIT_RE = /\{\s*'((?:[^'\\]|\\.)*)'\s*\}/g;
  function unLit(s) { return s.indexOf("{'") === -1 && s.indexOf("{ '") === -1 ? s : s.replace(LIT_RE, function (m, x) { return x.replace(/\\(.)/g, '$1'); }); }
  function interpFlat(ko, params) {
    if (!params || typeof params !== 'object' || Array.isArray(params)) return null;
    if (ko.replace(LIT_RE, '').indexOf('|') !== -1) return null;     // 복수형 '|' 은 원본 t 에(리터럴 {'|'} 은 제외하고 본다)
    var missing = false;
    var out = ko.replace(PH_NAME, function (m, name) {
      if (Object.prototype.hasOwnProperty.call(params, name) && params[name] !== null && params[name] !== undefined) return String(params[name]);
      missing = true; return m;
    });
    return missing ? null : unLit(out);
  }
  function wrapTRef(el) {
    try {
      var root = el._vnode && el._vnode.component, p = root && root.provides;
      if (!p || !Object.prototype.hasOwnProperty.call(p, 't')) return false;
      var ref = p.t;
      if (!ref || typeof ref !== 'object' || !('value' in ref) || ref.__hcWrapped) return false;
      function install(orig) {
        if (typeof orig !== 'function' || orig.__hcWrap) return false;
        var w = function (key) {
          // 멈춤 상태면 원본에 그대로 위임한다. ref.value 를 되돌리는 것보다
          // 안전하다 — 컴포넌트가 이미 이 함수 참조를 캡처했을 수 있다.
          if (!suspended && core && core.flat && typeof key === 'string') {
            var ko = core.flat[key];
            // v4.21.10~11: '{{mode}} 모드' 처럼 겹중괄호(앱이 t() 뒤에 직접 치환하는 자리)가 든 값은 보간하지 않고 그대로 돌려준다.
            // 원본 t 도 인자와 상관없이 '{{mode}} Mode' 를 그대로 돌려준다(캐너리 실측) — 안쪽 {mode} 만 채워지던 v4.20 문제 방지.
            if (typeof ko === 'string' && ko.indexOf('{{') !== -1) return unLit(ko);
            if (typeof ko === 'string') {
              if (arguments.length === 1) return unLit(ko);
              var out = interpFlat(ko, arguments.length === 2 ? arguments[1] : null);
              if (out !== null) return out;
            }
          }
          return orig.apply(this, arguments);
        };
        w.__hcWrap = true; ref.value = w; ref.__hcWrapped = true; stats.tref++; dirty = true;
        log('t-ref wrapped', el.id || el.className); return true;
      }
      if (ref.value) return install(ref.value);
      var tries = 0, iv = setInterval(function () {
        if (ref.value && !ref.value.__hcWrap) { install(ref.value); clearInterval(iv); }
        if (++tries > 120) clearInterval(iv);
      }, 100);
      return true;
    } catch (e) { return false; }
  }
  // 같은 composer 를 두 번 병합하지 않는다. applyPendingApps 가 전체를 다시 훑기 때문에
  // 가드가 없으면 중복 merge 와 통계 부풀림이 생긴다.
  var merged = (typeof WeakSet === 'function') ? new WeakSet() : { has: function () { return false; }, add: function () {} };
  function applyApp(el, g) {
    if (merged.has(g)) return true;
    var m = matchApp(g);
    if (!m) return false;     // 실패해도 등록하지 않는다 — 재시도 여지를 남긴다
    merged.add(g);
    mergeInto(g, m.ko, 'app(' + m.how + ')');
    stats.apps++;
    if (m.how !== 'exact') {
      stats.fuzzy++;
      log(m.how + ' matched', (el.id || el.className || '').toString().slice(0, 30),
          m.fp.slice(0, 40), m.sim ? 'sim=' + m.sim.toFixed(2) : '');
    }
    return true;
  }
  function handle(el, app) {
    var n = attempts.get(app) || 0;
    if (n === -1 || n >= MAX_TRY) return;          // 완료했거나 포기한 앱
    // 호스트도 composer 를 못 찾는 순간이 있다. 한 번 실패로 영구 제외하면
    // 메인 앱 전체(41,997키)가 세션 내내 영어로 남는다.
    if (el.id === 'app') {
      // 같은 composer 면 이미 병합·래핑했다. 로그인 뒤 등 #app 에 새 앱이 붙으면 composer 가 달라 다시 병합한다.
      if ((hostDone && composerOf(app) === hostG) || setupHost()) { attempts.set(app, -1); return; }
      attempts.set(app, n + 1);
      return;
    }
    var g = composerOf(app);
    if (!g) {
      if (wrapTRef(el)) attempts.set(app, -1);
      else attempts.set(app, n + 1);
      return;
    }
    if (!appsDict) return;                          // apps 사전 도착 전 — 횟수도 세지 않는다
    if (applyApp(el, g)) { attempts.set(app, -1); return; }
    n += 1;
    attempts.set(app, n);
    if (n >= MAX_TRY) {
      stats.unmatched++;
      log('no dict for app (포기)', (el.id || el.className || '').toString().slice(0, 30),
          '| fp:', fingerprint(g).slice(0, 60),
          '| top:', Object.keys(catalogOf(g)).slice(0, 8).join(','));
    }
  }
  // v4.21.15 ⑩: 중계 iframe 문서의 앱 — #app 이어도 호스트가 아니다. 지문 매칭(applyApp)만.
  var ifrDict = null, ifrDictReq = false;
  function loadIfrDict() {        // 첫 IFR 문서가 붙을 때 한 번. 파일이 없으면(404) 조용히 apps 사전만 쓴다
    if (ifrDictReq || !URL_IFR) return; ifrDictReq = true;
    load(URL_IFR, function (nd) { ifrDict = nd.apps || {}; scanApps(); })
      .then(function (d) { ifrDict = (d && d.apps) || {}; scanApps(); })
      .catch(function (e) { ifrDict = {}; log('ifr 사전 없음', e && e.message); });
  }
  // v4.21.21: 모듈 상수 라벨(앱이 모듈을 읽을 때 t() 로 한 번 만든 문자열)은 병합 뒤에도 영어다.
  // 지문별로 '그 상수가 그려지는 범위'를 적어 두면, 병합 직전 영어 값→한국어 표를 떠서 그 범위 텍스트 노드만 바꾼다.
  // 범위는 앱 크롬(요소 팔레트)만 — 캔버스(폼 미리보기)·폼 이름·제출 내역 같은 사용자 내용은 넣지 않는다.
  var IFR_TEXT = { 'builderValidation|common|fields|form|integrate': '#standard-container,.settings-container' };   // 폼·설문·퀴즈 빌더 요소 팔레트·설정 탭
  function ifrTextPrep(d, g, ko, sel) {
    try {
      var m = Object.create(null), n = 0, bad = Object.create(null);
      (function walk(o, pre) {
        for (var k in o) {
          var v = o[k], key = pre ? pre + '.' + k : k;
          if (v && typeof v === 'object') { walk(v, key); continue; }
          if (typeof v !== 'string' || !v || /[{}@|]/.test(v)) continue;     // 자리표시자·연결·복수형 문장은 제외
          var en = g.t(key);
          if (typeof en !== 'string' || en === key || !/[A-Za-z]/.test(en) || en === v) continue;
          en = en.trim();
          if (bad[en]) continue;
          if (m[en] !== undefined && m[en] !== v) { delete m[en]; bad[en] = 1; n--; continue; }   // 같은 영어·다른 한국어 → 쓰지 않는다
          if (m[en] === undefined) { m[en] = v; n++; }
        }
      })(ko, '');
      if (n > 0) d.__hcIfrTx = { sel: sel, m: m, n: n };
    } catch (e) { log('ifr text prep 실패', e && e.message); }
  }
  function ifrTextPass(d) {
    var ix = d && d.__hcIfrTx; if (!ix) return;
    try { var els = d.querySelectorAll(ix.sel); for (var i = 0; i < els.length; i++) pass(els[i]); } catch (e) {}
  }
  function handleIfrApp(el, app) {
    var n = attempts.get(app) || 0;
    if (n === -1 || n >= MAX_TRY) return;
    var g = composerOf(app);
    if (!g) { attempts.set(app, n + 1); return; }
    if (ifrDict === null) { loadIfrDict(); return; }   // 사전 도착 전 — 횟수 세지 않는다
    var fp = fingerprint(g);
    if (ifrDict[fp] && !merged.has(g)) {
      var sel = IFR_TEXT[fp], d = el.ownerDocument;
      if (sel && d && d !== document) ifrTextPrep(d, g, ifrDict[fp], sel);   // 병합 전에 영어 값을 뜬다
      merged.add(g); mergeInto(g, ifrDict[fp], 'ifr-app'); stats.apps++; attempts.set(app, -1);
      if (sel && d && d !== document) ifrTextPass(d);
      return;
    }
    if (!appsDict) return;
    if (applyApp(el, g)) { attempts.set(app, -1); return; }
    attempts.set(app, n + 1);
    if (n + 1 >= MAX_TRY) { stats.unmatched++; log('no dict for iframe app', fingerprint(g).slice(0, 60)); }
  }
  var ifrDocs = [];
  function scanApps() {
    if (!core || suspended || deferred) return;
    var els = document.querySelectorAll('*');
    for (var i = 0; i < els.length; i++) {
      var app = els[i].__vue_app__;
      if (app) handle(els[i], app);
    }
    for (var k = ifrDocs.length - 1; k >= 0; k--) {
      var d = ifrDocs[k];
      if (!d || !d.defaultView || !d.documentElement) { ifrDocs.splice(k, 1); continue; }   // iframe 이 다른 문서로 바뀜
      try {
        var es = d.querySelectorAll('*');
        for (var j = 0; j < es.length; j++) { var a = es[j].__vue_app__; if (a) handleIfrApp(es[j], a); }
      } catch (e) {}
    }
  }
  function applyPendingApps() { scanApps(); }   // apps 사전이 늦게 도착했을 때

  /* ---------- D. 텍스트 치환 ---------- */
  var ATTRS = ['placeholder', 'title', 'aria-label', 'alt'];
  // P6. s.replace(t, v) 는 v 에 $& $' $` $$ 가 있으면 오작동한다.
  // 함수형 치환은 치환 문자열을 해석하지 않는다.
  function repl(s, t, v) { return s.replace(t, function () { return v; }); }

  // 치환하면 안 되는 자리. 스니펫·커스텀 코드 편집기, 사용자가 입력 중인 본문 등.
  // isContentEditable 은 상속을 반영하므로 부모 한 단계만 봐도 충분하다.
  var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, NOSCRIPT: 1, TITLE: 1 };
  function skipNode(n) {
    var p = n.parentElement;
    if (!p) return false;
    if (SKIP_TAGS[p.tagName]) return true;
    if (p.isContentEditable) return true;
    return false;
  }
  // "<b>Managed Agents</b> are prompt-based …" 처럼 앞 노드(굵은 제품명)에 이어지는 조각은
  // 원문이 소문자로 시작하고 앞에 공백이 있다. 한국어 값은 조사("는 …")로 시작하는데
  // 선행 공백을 남기면 "관리형 에이전트 는" 이 된다(2026-09-09 실측). 이 경우에만 앞 공백을 버린다.
  // 조건 셋을 모두 요구한다 — 노드 선행 공백 · 원문이 be/조동사/동사로 시작(주어가 앞 노드에 있다는
  // 결정적 표지; "this contact" 같은 지시사 조각은 제외) · 값이 조사(+공백/문장부호)로 시작.
  var JOIN_EN_RE = /^(?:is|are|was|were|has|have|had|can|could|will|would|should|may|might|must|does|do|did|lets|helps|allows|runs?)\b/;
  var PARTICLE_RE = /^(?:은|는|이|가|을|를|의|에|와|과|도|로|으로|에서|에게|까지|부터)(?:\s|[,.]|$)/;
  function joinsPrev(s, t, v) {
    return /^\s/.test(s) && JOIN_EN_RE.test(t) && PARTICLE_RE.test(v);
  }
  // D2. 단어 1개 치환(_textScoped, v4.17) — 텍스트 노드의 부모가 UI 크롬(표 머리글·버튼·탭·메뉴·label·페이지네이션)
  // 안에 있을 때만. 조상 8단계까지 본다 — GHL 표 머리글은 th > wrapper > title > div > span > text 처럼 깊다(v4.18.1,
  // 3단계로는 연락처 머리글을 못 잡았다). 셀(td)·옵션·칩·본문은 SCOPED_SKIP 이 먼저 걸러 범위 밖.
  var SCOPED_SEL = 'th,[role="columnheader"],button,[role="button"],[role="tab"],[role="menuitem"],label,' +
    '.n-button,.n-tabs-tab,.hr-tabs-tab,.n-pagination-item,.hl-btn,.hl-text-btn,.topmenu-nav a,nav a,[role="navigation"] a,[role="menubar"] a,' +
    // v4.20.1: 새 디자인 시스템(hr-*)의 라벨류 — 연락처 상세 새 UI 의 섹션 머리글(Owner·Followers·Tags)·폼 라벨·드롭다운 트리거·선택값
    '.hr-text-medium,.hr-form-item-label__text,.hr-dropdown__trigger-wrapper,.hr-base-selection-label,' +
    // v4.21.5: 새 디자인 시스템 체크박스·라디오 라벨(필터 목록 — 커스텀 오브젝트 템플릿 분류 'Events'·'Insurance'·'Pets' 등)
    '.hr-checkbox__label,.hr-radio__label,' +
    // v4.21.7: 새 디자인 시스템 제목 글자(.hr-text-2xl·xl·lg) — 평판 개요 'Overview' 등 단어 1개 제목
    '.hr-text-2xl,.hr-text-xl,.hr-text-lg,' +
    // v4.21.13: 입력칸 자리표시자(span) — 상품 컬렉션 검색칸 'Search' 등. 입력값이 있으면 자리표시자가 사라지므로 사용자 데이터와 섞이지 않는다
    '.hr-input__placeholder';
  var SCOPED_SKIP = 'td,[role="option"],[role="listbox"],[role="gridcell"],.n-tag,.tag,[contenteditable]';
  // v4.21.3: 차트(ECharts·Highcharts·ApexCharts) SVG 글자도 단어 1개 범위 — 대시보드 기회 상태 'Open'·'Won' 범례 등
  var SVG_NS = 'http://www.w3.org/2000/svg', CHART_SEL = '.vue-echarts-inner,.highcharts-container,.apexcharts-canvas,.echarts';
  function inChart(p) { try { return !!p && p.namespaceURI === SVG_NS && !!p.closest && !!p.closest(CHART_SEL); } catch (e) { return false; } }
  // v4.21.6: 상태 칩(n-tag) — 사용자 태그와 섞여 범위 밖(SCOPED_SKIP)이지만, 결제·구독·게시 상태 같은 시스템 열거값만
  // 허용 목록으로 연다(거래 내역 'Succeeded'·'Pending' 실측). 번역은 _textScoped 의 같은 키를 쓴다.
  var STATUS_WORDS = { Succeeded: 1, Pending: 1, Failed: 1, Refunded: 1, Paid: 1, Unpaid: 1, Overdue: 1, Draft: 1, Sent: 1, Void: 1,
    Active: 1, Inactive: 1, Canceled: 1, Cancelled: 1, Expired: 1, Scheduled: 1, Completed: 1, Processing: 1, Published: 1,
    Archived: 1, Incomplete: 1, Trialing: 1,
    certificate: 1, badge: 1,     // v4.21.12: 자격 증명 목록 유형 칩(소문자 + CSS capitalize)
    paid: 1, pending: 1 };        // v4.21.15: 인보이스 미리보기 결제 일정 상태(소문자 + CSS capitalize)
  // v4.21.15: Tailwind 알약(.rounded-full — 코스 편집기 커뮤니티 그룹 'Active' 실측). 허용 목록 단어만이라 아바타 머리글자 등은 무관
  var TAG_SEL = '.n-tag,.hr-tag,.ui-tag,.rounded-full';   // .ui-tag: 거래 상세 상태 칩 'Succeeded'(rounded, 알약 아님)
  // v4.21.12: 배지·알약(pill) 안의 'New' 는 버튼(_textScoped 'New'=새로 만들기)이 아니라 '신규'('AI에게 문의' 배너 .askai-banner__pill 실측)
  var PILL_WORDS = { New: '신규', NEW: '신규' };
  var PILL_SEL = '[class*="__pill"],[class*="-pill"],[class*="badge"]';
  function inPill(p) { try { return !!p && !!p.closest && !!p.closest(PILL_SEL); } catch (e) { return false; } }
  function inStatusTag(p, t) { try { return STATUS_WORDS[t] === 1 && !!p && !!p.closest && !!p.closest(TAG_SEL); } catch (e) { return false; } }
  // v4.21.15: 선택 목록 옵션(새 디자인 시스템·naive) 안의 단어 1개는 사용자 데이터(파이프라인·태그·사람 이름)와 섞여 범위 밖이었다.
  // 같은 메뉴의 옵션이 **전부** 사전 단어(_text·_textScoped, 또는 이미 한국어)이면 앱이 정한 열거값 목록으로 보고 연다
  // (코스 편집기 난이도 Beginner…Expert·주제·언어 실측). 사용자 데이터가 하나라도 섞이면 그 메뉴는 그대로 둔다.
  // 판정은 메뉴별로 옵션 수·첫/끝 옵션 글자를 열쇠로 기억한다(가상 스크롤로 옵션이 바뀌면 다시 본다).
  var ENUM_OPT = '.hr-base-select-option,.n-base-select-option', ENUM_MENU = '.hr-base-select-menu,.n-base-select-menu';
  var enumMemo = typeof WeakMap === 'function' ? new WeakMap() : null;
  function enumWord(s) {
    s = (s || '').trim();
    return !s || /[\uAC00-\uD7A3]/.test(s) || (!!T && typeof T[s] === 'string') || (!!TS && typeof TS[s] === 'string');
  }
  function inEnumMenu(p) {
    try {
      var o = p && p.closest ? p.closest(ENUM_OPT) : null; if (!o) return false;
      var menu = o.closest(ENUM_MENU); if (!menu) return false;
      var opts = menu.querySelectorAll(ENUM_OPT), n = opts.length; if (n < 2) return false;
      var key = n + '|' + (opts[0].textContent || '') + '|' + (opts[n - 1].textContent || '');
      var c = enumMemo && enumMemo.get(menu);
      if (c && c.k === key) return c.ok;
      var ok = true;
      for (var i = 0; i < n && ok; i++) ok = enumWord(opts[i].textContent);
      if (enumMemo) enumMemo.set(menu, { k: key, ok: ok });
      return ok;
    } catch (e) { return false; }
  }
  function inScope(p) {
    if (inChart(p)) return true;
    try {
      var e = p, depth = 0;
      while (e && e.nodeType === 1 && depth < 8) {
        if (e.matches(SCOPED_SKIP)) return false;
        if (e.matches(SCOPED_SEL)) return true;
        e = e.parentElement; depth++;
      }
    } catch (err) {}
    return false;
  }
  // D3. 날짜·시각 표기(v4.21) — 'Sep 28, 2026 02:07 PM' → '2026년 9월 28일 오후 2:07'. 텍스트 노드(·title·aria-label) 전체가
  // 날짜/시각 하나(또는 범위)일 때만 바꾼다(부분 일치 없음 — 문장 속 날짜·사용자 본문은 건드리지 않는다).
  // GHL 은 사용자 언어 설정이 영어라 dayjs/moment 가 영어 월·AM/PM 으로 찍는다(연락처·대화·소셜·캘린더·결제 표 실측).
  var KD_MON = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, sept: 9, oct: 10, nov: 11, dec: 12,
    january: 1, february: 2, march: 3, april: 4, june: 6, july: 7, august: 8, september: 9, october: 10, november: 11, december: 12 };
  var KD_WD = { sun: '일', mon: '월', tue: '화', tues: '화', wed: '수', thu: '목', thur: '목', thurs: '목', fri: '금', sat: '토',
    sunday: '일', monday: '월', tuesday: '화', wednesday: '수', thursday: '목', friday: '금', saturday: '토' };
  var KD_REL = { today: '오늘', yesterday: '어제', tomorrow: '내일' };
  var KD_FULLMON = /^(?:January|February|March|April|May|June|July|August|September|October|November|December)$/;
  var KD_PRE = /^(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|Mon|Tue|Wed|Thu|Fri|Sat|Sun|Today|Yesterday|Tomorrow|\d{1,2}[ :])/;
  var KD_TIME = /^(\d{1,2}):(\d{2})(?::(\d{2}))?(?:\s?([AaPp])\.?[Mm]\.?)?$/;
  function kdMon(s) { var k = String(s).toLowerCase().replace(/\.$/, ''); return KD_MON.hasOwnProperty(k) ? KD_MON[k] : 0; }
  function kdTime(s) {
    var m = s.match(KD_TIME); if (!m) return null;
    var h = +m[1], mi = m[2]; if (h > 23 || +mi > 59) return null;
    if (!m[4]) return m[1] + ':' + mi + (m[3] ? ':' + m[3] : '');           // 24시간제는 그대로
    if (h > 12 || h === 0) return null;
    return (/[Pp]/.test(m[4]) ? '오후 ' : '오전 ') + h + ':' + mi;
  }
  // 날짜 한 덩어리: [요일,] (월 일 | 일 월)[,] [연도] | 월 연도 | 오늘/어제/내일
  function kdDate(s) {
    var wd = '', m, mo, d, y;
    m = s.match(/^([A-Za-z]{3,9})\.?,?\s+(.+)$/);
    if (m && KD_WD.hasOwnProperty(m[1].toLowerCase())) { wd = KD_WD[m[1].toLowerCase()]; s = m[2]; }
    if (KD_REL.hasOwnProperty(s.toLowerCase())) return wd ? null : KD_REL[s.toLowerCase()];
    if (wd && /^\d{1,2}$/.test(s) && +s >= 1 && +s <= 31) return (+s) + '일 (' + wd + ')';              // 'Sun 01'
    if (wd && (m = s.match(/^(\d{1,2})\/(\d{1,2})$/))) return (+m[1]) + '/' + (+m[2]) + ' (' + wd + ')';  // 'Sun 11/1'
    if (!wd && (m = s.match(/^(\d{1,2})\s+([A-Za-z]{3,9})$/)) && KD_WD.hasOwnProperty(m[2].toLowerCase()) && +m[1] >= 1 && +m[1] <= 31)
      return (+m[1]) + '일 (' + KD_WD[m[2].toLowerCase()] + ')';                                            // 주간 머리글 '01 Sun'
    if ((m = s.match(/^([A-Za-z]{3,9}\.?)\s+(\d{1,2})(?:st|nd|rd|th)?(?:,?\s+(\d{4}))?$/)) && (mo = kdMon(m[1]))) { d = +m[2]; y = m[3]; }
    else if ((m = s.match(/^(\d{1,2})\s+([A-Za-z]{3,9}\.?),?(?:\s+(\d{4}))?$/)) && (mo = kdMon(m[2]))) { d = +m[1]; y = m[3]; }
    else if ((m = s.match(/^([A-Za-z]{3,9}\.?),?\s+(\d{4})$/)) && (mo = kdMon(m[1]))) { return wd ? null : m[2] + '년 ' + mo + '월'; }
    // v4.21.15 ⑥: "January '27" → '2027년 1월' · 월 이름 단독(전체 이름만 — 'October' → '10월', 기회 예측 타임라인 열 머리)
    else if ((m = s.match(/^([A-Za-z]{3,9}\.?) '(\d{2})$/)) && (mo = kdMon(m[1]))) { return wd ? null : '20' + m[2] + '년 ' + mo + '월'; }
    else if (!wd && KD_FULLMON.test(s)) return kdMon(s) + '월';
    else return null;
    if (d < 1 || d > 31) return null;
    return (y ? y + '년 ' : '') + mo + '월 ' + d + '일' + (wd ? ' (' + wd + ')' : '');
  }
  // 날짜[,| at] 시각 | 시각 | 날짜
  function kdOne(s) {
    var v = kdTime(s); if (v) return v;
    var m = s.match(/^(.+?),?\s+(?:at\s+)?(\d{1,2}:\d{2}(?::\d{2})?(?:\s?[AaPp]\.?[Mm]\.?)?)$/);
    if (m) { var dd = kdDate(m[1]), tt = kdTime(m[2]); return dd && tt ? dd + ' ' + tt : null; }
    return kdDate(s);
  }
  // v4.21.2: 앞 라벨('Created on: …' — 라벨은 _text 에 있어야 한다)·뒤 시간대('(KST)'·'(GMT+09:00)')를 떼고 본다
  // v4.21.4: 앞 구분 기호('- 8:41 PM KST' — 감사 로그)·괄호 없는 시간대 약어(KST·PST·EDT·UTC·GMT+9)
  var KD_LABEL = /^([A-Z][A-Za-z ]{1,24}:)\s+(.+)$/,
    KD_TZ = /^(.+?)\s+(\((?:[A-Z]{2,5}|(?:GMT|UTC)[+-]\d{1,2}(?::\d{2})?)\)|[A-Z]{1,4}T|UTC|GMT(?:[+-]\d{1,2}(?::\d{2})?)?)$/,
    KD_SEP = /^([-–·•|]\s+)(.+)$/;
  function kdPre(t) { return KD_PRE.test(t) || KD_LABEL.test(t) || (KD_SEP.test(t) && KD_PRE.test(t.replace(KD_SEP, '$2'))); }
  function koDate(t) {
    var lab = '', tz = '', m = t.match(KD_SEP);
    if (m) { lab = m[1]; t = m[2]; }
    else if ((m = t.match(KD_LABEL))) { if (!T || typeof T[m[1]] !== 'string') return null; lab = T[m[1]] + ' '; t = m[2]; }
    if ((m = t.match(KD_TZ))) { t = m[1]; tz = ' ' + m[2]; }
    var v = kdCore(t);
    return v === null ? null : lab + v + tz;
  }
  function kdCore(t) {
    if (t.length > 48 || !KD_PRE.test(t)) return null;
    var v = kdOne(t); if (v) return v === t ? null : v;
    var r = t.match(/^(.+?)\s+([-–—~]|to)\s+(.+)$/); if (!r) return null;
    var a = kdOne(r[1]), sep = ' ' + (r[2] === 'to' ? '–' : r[2]) + ' ', b = kdOne(r[3]), m;
    if (a && b) return (a + sep + b) === t ? null : a + sep + b;
    // 'Nov 1 – 7, 2026' · '21 Oct - 27' : 오른쪽이 일(·연도)만
    if (a && (m = r[3].match(/^(\d{1,2})(?:,?\s+(\d{4}))?$/)) && /^\d+월 \d+일$/.test(a)) return (m[2] ? m[2] + '년 ' : '') + a + sep + (+m[1]) + '일';
    return null;
  }
  // v4.21.3: 차트 SVG 글자 — 월·요일 약어 단독('Dec'→'12월', 'Mon'→'월'), '범례 - 숫자'('Open - 123'→'진행 중 - 123')
  function kdChart(p, t) {
    if (!inChart(p)) return null;
    var k = t.toLowerCase().replace(/\.$/, ''), m;
    if (KD_MON.hasOwnProperty(k)) return KD_MON[k] + '월';
    if (KD_WD.hasOwnProperty(k)) return KD_WD[k];
    if ((m = t.match(/^(.+?) - ([\d,.]+%?)$/))) {
      var x = (T && typeof T[m[1]] === 'string') ? T[m[1]] : (TS && typeof TS[m[1]] === 'string') ? TS[m[1]] : null;
      return x ? x + ' - ' + m[2] : null;
    }
    return null;
  }
  // v4.21.3: 페이지 크기 선택 '10 / page' → '10 / 페이지'
  var KD_PAGE = /^(\d+) \/ page$/;
  // v4.21.7: 기간 '0 minutes'·'56 seconds'·'0 min'·'3 days' → '0분'·'56초'·'0분'·'3일'(평판 응답 시간 등 — 노드 전체 일치만)
  var KD_DUR = /^(\d+(?:\.\d+)?) ?(seconds?|secs?|minutes?|mins?|hours?|hrs?|days?|weeks?|months?|years?)$/i;
  var KD_DUR_KO = { s: '초', mi: '분', h: '시간', d: '일', w: '주', mo: '개월', y: '년' };
  // v4.21.15: 상대 시각(dayjs/moment fromNow) — 'ago'·'in' 중 하나만, 노드 전체 일치. 'a few seconds ago' → '방금 전'
  var KD_AGO = /^(in )?(\d+|an?|a few) (second|minute|hour|day|week|month|year)s?( ago)?$/i;
  var KD_AGO_KO = { second: '초', minute: '분', hour: '시간', day: '일', week: '주', month: '개월', year: '년' };
  function kdAgo(t) {
    var m = t.match(KD_AGO); if (!m || !m[1] === !m[4]) return null;
    var u = m[3].toLowerCase(), q = m[2].toLowerCase();
    if (q === 'a few') return u === 'second' ? (m[1] ? '잠시 후' : '방금 전') : null;
    return (/^\d/.test(q) ? q : '1') + KD_AGO_KO[u] + (m[1] ? ' 후' : ' 전');
  }
  // v4.21.15: '라벨 (숫자)' — 라벨이 _text 이거나 범위 안의 _textScoped 단어일 때(오브젝트 복수형 이름 'Companies (0)' 등) · 'N items'
  var KD_CNT = /^(\S.{0,39}?) \((\d[\d,]*)\)$/, KD_ITEMS = /^(\d[\d,]*) items?$/;
  var KD_RANGE = /^(\d[\d,]*)\s*[-–]\s*(\d[\d,]*) of (\d[\d,]*)$/;   // 페이지 표시 '1 - 3 of 3' → '3개 중 1–3'
  function kdCount(p, t) {
    var m = t.match(KD_CNT), x = null;
    if (m) {
      if (T && typeof T[m[1]] === 'string') x = T[m[1]];
      else if (TS && typeof TS[m[1]] === 'string' && (inScope(p) || inEnumMenu(p))) x = TS[m[1]];
      return x ? x + ' (' + m[2] + ')' : null;
    }
    if ((m = t.match(KD_RANGE))) return m[3] + '개 중 ' + m[1] + '–' + m[2];
    return (m = t.match(KD_ITEMS)) ? m[1] + '개 항목' : null;
  }
  // v4.21.15 ⑦: 앱이 숫자·조각을 이어 붙여 사전 키와 일치하지 않는 문장(노드 전체 일치). 첫 글자로 먼저 거른다.
  var FIX_PATS = [
    ['S', /^Slipped (\d+)\+ times (?:or|또는) (\d+)\+ days(?: \(excluding (high|high\/medium)\))?\.?$/, function (m) {
      return m[1] + '회 이상 지연 또는 ' + m[2] + '일 이상 지연' + (m[3] ? (m[3] === 'high' ? ' (상 제외)' : ' (상/중 제외)') : '');
    }],
    // 결제 → 인보이스 요약 카드: 앱이 '{숫자} {라벨}' 을 데이터 도착 때 한 번 조립한다. 별도 앱 카탈로그(listInvoices) 패치보다
    // 데이터가 먼저 오면 영어 문자열이 그대로 남는다(2026-11-07 같은 계정에서 두 경우 모두 실측) → 사전 값과 같은 꼴로 맞춘다.
    ['', /^(\d[\d,]*) Invoice\(s\) (in Draft|in Due|received|Overdue)$/, function (m) {
      return m[1] + ' 건 ' + ({ 'in Draft': '임시 저장', 'in Due': '지급 예정', received: '결제 완료', Overdue: '기한 초과' })[m[2]];
    }],
    // v4.21.16: 상단 알림 배너 — 서버가 영어 문장으로 내려준다(i18n 키 없음). 소셜 계정 연결이 만료된 고객 2곳에서 매 화면 노출(2026-11-08 실측).
    ['T', /^The connection for the following Social Planner (\S+(?: \S+)?) account\(s\) has expired: (.+?)\.?$/, function (m) {
      return '다음 소셜 플래너 ' + m[1] + ' 계정의 연결이 만료되었습니다: ' + m[2];
    }],
    ['R', /^Re-integrate$/, function () { return '다시 연결'; }]
  ];
  function kdPat(t) {
    if (t.length > 300) return null;   // v4.21.16: 120 → 300(배너 문장에 계정 이름이 여럿 붙는 경우)
    for (var i = 0; i < FIX_PATS.length; i++) {
      if (FIX_PATS[i][0] && t.charAt(0) !== FIX_PATS[i][0]) continue;
      var m = t.match(FIX_PATS[i][1]); if (m) return FIX_PATS[i][2](m);
    }
    return null;
  }
  // v4.21.15 ⑨: 쌍점 라벨('Status:' — 라벨이 사전 단어/구일 때만)과 그 바로 뒤 상태 값('Open' 등, 이전 형제 요소가 상태 라벨일 때만)
  var COLON_RE = /^([A-Za-z][A-Za-z ]{1,30}):$/, STATUS_LAB = { 'Status:': 1, '상태:': 1 };
  // 유형 라벨 뒤 값(거래 상세 '유형: Funnel') — 여기 오는 값은 이미 _textScoped 에 있는 단어뿐이라 열거값만 바뀐다
  var TYPE_LAB = { 'Type:': 1, '유형:': 1, 'Sub type:': 1, 'Sub Type:': 1, '하위 유형:': 1, 'Source:': 1, '출처:': 1 };
  var STATUS_VAL = { Open: 1, Won: 1, Lost: 1, Abandoned: 1 };
  function kdColon(t) {
    var m = t.match(COLON_RE); if (!m) return null;
    var x = (T && typeof T[m[1]] === 'string') ? T[m[1]] : (TS && typeof TS[m[1]] === 'string') ? TS[m[1]] : null;
    return x ? x + ':' : null;
  }
  function afterStatusLabel(p, t) {
    try {
      var q = p && p.previousElementSibling; if (!q) return false;
      var lt = (q.textContent || '').trim();
      if (STATUS_LAB[lt] === 1) return STATUS_WORDS[t] === 1 || STATUS_VAL[t] === 1;
      return TYPE_LAB[lt] === 1;
    } catch (e) { return false; }
  }
  // v4.21.15 ⑧: 대화·활동 타임라인의 시스템 이벤트 줄 — 서버 활동 기록을 앱이 '<개체> <이름>'(굵게) + '<동사>'(굵게) + 꼬리
  // (' for <날짜>'·' in <곳>'·' → marked as <상태> for <날짜>')로 조립한다(i18n 아님, 대화 화면 실측). 줄 구조(굵은 조각 2개 이상,
  // 첫 조각이 개체 이름으로 시작)를 확인한 뒤에만 바꾼다. 이름·곳(사용자 데이터)은 그대로 둔다.
  var EV_ENT = { Appointment: '예약', Opportunity: '기회', Contact: '연락처', Task: '작업', Invoice: '인보이스', Estimate: '견적서', Order: '주문' };
  var EV_VERB = { created: '생성됨', updated: '업데이트됨', deleted: '삭제됨', booked: '예약됨', cancelled: '취소됨', canceled: '취소됨',
    rescheduled: '일정 변경됨', confirmed: '확정됨', moved: '이동됨', completed: '완료됨', assigned: '배정됨', won: '고객전환성공', lost: '고객전환실패' };
  var EV_STAT = { cancelled: '취소됨', canceled: '취소됨', confirmed: '확정됨', showed: '출석', noshow: '노쇼', 'no-show': '노쇼', booked: '예약됨',
    invalid: '무효', rescheduled: '일정 변경됨', open: '진행 중', won: '고객전환성공', lost: '고객전환실패', abandoned: '중단됨', completed: '완료됨' };
  var EV_ENT_RE = /^(Appointment|Opportunity|Contact|Task|Invoice|Estimate|Order) (.+)$/;
  var EV_HEAD_RE = /^(?:Appointment|Opportunity|Contact|Task|Invoice|Estimate|Order|예약|기회|연락처|작업|인보이스|견적서|주문) /;
  function evBox(el) {
    for (var c = el, k = 0; c && c.nodeType === 1 && k < 3; c = c.parentElement, k++) {
      var b = [], ch = c.children;
      for (var i = 0; i < ch.length && b.length < 3; i++) if (ch[i].tagName === 'SPAN' && /(^|\s)font-semibold(\s|$)/.test(ch[i].className)) b.push(ch[i]);
      if (b.length >= 2 && EV_HEAD_RE.test((b[0].textContent || '').trim())) return c;
    }
    return null;
  }
  function evDate(d) { var v = koDate(d); return v === null ? d : v; }
  function kdEvent(n, t) {
    var m, p = n.parentElement, box;
    if ((m = t.match(EV_ENT_RE))) {
      box = evBox(p); return box && p.parentElement === box ? EV_ENT[m[1]] + ' ' + m[2] : null;
    }
    if (EV_VERB.hasOwnProperty(t)) { box = evBox(p); return box && p.parentElement === box ? EV_VERB[t] : null; }
    if (t.length > 160 || !/^(?:for |in |→ )/.test(t)) return null;
    box = evBox(p); if (!box || p !== box) return null;
    if ((m = t.match(/^→ marked as ([A-Za-z-]+) for (.+)$/))) return EV_STAT.hasOwnProperty(m[1].toLowerCase()) ? '→ ' + EV_STAT[m[1].toLowerCase()] + ' · ' + evDate(m[2]) : null;
    if ((m = t.match(/^→ marked as ([A-Za-z-]+)$/))) return EV_STAT.hasOwnProperty(m[1].toLowerCase()) ? '→ ' + EV_STAT[m[1].toLowerCase()] : null;
    if ((m = t.match(/^for (.+)$/))) return '· ' + evDate(m[1]);
    if ((m = t.match(/^in (.+)$/))) return '· ' + m[1];
    return null;
  }
  // v4.21.15: 한국어 라벨 + 영어 날짜 — i18n 값('기한 {date}')에 앱이 영어로 찍은 날짜를 넣는 경우(인보이스 결제 일정 실측).
  // 라벨은 한글·공백·가운뎃점·쌍점만, 나머지가 통째로 날짜(kdCore)일 때만 바꾼다.
  var KD_KOLAB = /^[\uAC00-\uD7A3][\uAC00-\uD7A3\s·]*:?\s+$/;
  function kdKoLabel(t) {
    var c = t.charCodeAt(0); if (c < 0xAC00 || c > 0xD7A3 || t.length > 64) return null;
    var i = t.search(/[A-Za-z0-9]/); if (i < 2) return null;
    var lab = t.slice(0, i); if (!KD_KOLAB.test(lab)) return null;
    var v = kdCore(t.slice(i)); return v === null ? null : lab + v;
  }
  function kdDur(t) {
    var m = t.match(KD_DUR); if (!m) return null;
    var u = m[2].toLowerCase(), k = u.charAt(0) === 'm' ? (u.indexOf('mo') === 0 ? 'mo' : 'mi') : u.charAt(0);
    return KD_DUR_KO.hasOwnProperty(k) ? m[1] + KD_DUR_KO[k] : null;
  }
  // v4.21.8: 새 디자인 시스템 날짜 선택 패널(hr-date-panel) — 머리 'Nov'·' '·'2026' 이 텍스트 노드 3개로 나뉘어 D3 가 못 잡는다.
  // 노드 값만 바꾼다(노드를 갈아 끼우면 Vue 패치가 끊긴다): 월 노드 ← '2026년', 연 노드 ← '11월' → '2026년 11월'.
  // 원래 값은 노드에 기억해 두고(Vue 는 값이 바뀔 때만 그 노드를 다시 쓴다) 바뀔 때마다 다시 맞춘다.
  // 요일 머리 'Su'…'Sa' → '일'…'토', 월 목록 'Jan'… → '1월'…(월 단어는 패널 안에서만).
  var KD_WD2 = { Su: '일', Mo: '월', Tu: '화', We: '수', Th: '목', Fr: '금', Sa: '토' };
  var KD_PANEL_PRE = /^(?:[A-Za-z]{2,9}\.?|\d{4})$/;
  function kdPanel(n, t) {
    if (t.length > 10 || !KD_PANEL_PRE.test(t)) return false;              // 짧은 단어·연도만(비용)
    var p = n.parentElement; if (!p || !p.matches) return false;
    try {
      if (p.matches('.hr-date-panel-month__text')) {
        var tx = [], c = p.firstChild;
        for (; c; c = c.nextSibling) if (c.nodeType === 3 && c.nodeValue.trim()) tx.push(c);
        if (tx.length !== 2) return false;
        var M = tx[0], Y = tx[1], mv = M.nodeValue.trim(), yv = Y.nodeValue.trim();
        if (kdMon(mv)) M.__hcM = mv;
        if (/^\d{4}$/.test(yv)) Y.__hcY = yv;
        if (!M.__hcM || !Y.__hcY) return false;
        var a = Y.__hcY + '년', b = kdMon(M.__hcM) + '월';
        if (M.nodeValue !== a) M.nodeValue = a;
        if (Y.nodeValue !== b) Y.nodeValue = b;
        stats.dateHits++;
        return true;
      }
      if (KD_WD2.hasOwnProperty(t) && p.matches('.hr-date-panel-weekdays__day')) { n.nodeValue = KD_WD2[t]; stats.dateHits++; return true; }
      // v4.21.9: 기간 선택기의 월/연 보기(.hr-mm-yy-panel — 'Month'·'Year' 머리, 월 목록 .month-item)도 같은 처리
      var PANEL = '.hr-date-panel,.hr-date-picker-panel,.hr-mm-yy-panel';
      if (kdMon(t) && /^[A-Za-z]{3,9}\.?$/.test(t) && p.closest(PANEL)) { n.nodeValue = kdMon(t) + '월'; stats.dateHits++; return true; }
      if ((t === 'Month' || t === 'Year') && p.closest(PANEL)) { n.nodeValue = t === 'Month' ? '월' : '연도'; stats.dateHits++; return true; }
    } catch (e) {}
    return false;
  }
  // 끄기: 사전 core._opts.dates === false(원격) 또는 localStorage.hcKoDates = '0'(브라우저별 진단)
  var kdFlag = null;   // core 가 바뀌면(onCoreStale) 다시 계산
  function kdOn() {
    if (kdFlag !== null) return kdFlag;
    var on = !(core && core._opts && core._opts.dates === false) && lsGet('hcKoDates') !== '0';
    if (core) kdFlag = on;
    return on;
  }
  function trText(n) {
    var s = n.nodeValue; if (!s || (!T && !TS)) return;
    var t = s.trim(); if (!t) return;
    var od = n.ownerDocument;
    if (od !== document && od && od.__hcIfrTx) {                            // v4.21.21 중계 iframe 모듈 상수 라벨(범위 안만)
      var ix = od.__hcIfrTx, iv = ix.m[t], pe = n.parentElement;
      if (iv !== undefined && pe && pe.closest && pe.closest(ix.sel) && !skipNode(n)) { n.nodeValue = repl(s, t, iv); stats.ifrTextHits++; return; }
    }
    if (kdOn() && kdPanel(n, t)) return;                                    // v4.21.8 날짜 선택 패널(사전보다 먼저 — 'Nov' 는 _textScoped 에도 있다)
    var v = T ? T[t] : undefined, scoped = false, dated = false;
    if (v === undefined && PILL_WORDS.hasOwnProperty(t) && inPill(n.parentElement)) { v = PILL_WORDS[t]; scoped = true; }   // v4.21.12
    if (v === undefined) {
      if (TS && (v = TS[t]) !== undefined) {
        if (inScope(n.parentElement) || inStatusTag(n.parentElement, t) || inEnumMenu(n.parentElement) || afterStatusLabel(n.parentElement, t)) scoped = true;
        else if (kdOn() && KD_FULLMON.test(t)) { v = kdMon(t) + '월'; dated = true; }   // v4.21.15 ⑥ 월 이름 단독(범위 밖)
        else return;
      } else {
        if (!kdOn()) return;                                                  // D3 날짜·시각(v4.21)·차트·페이지 크기
        if (kdPre(t) && (v = koDate(t)) !== null) dated = true;
        else if ((v = kdChart(n.parentElement, t)) !== null) dated = true;
        else if (KD_PAGE.test(t)) { v = t.replace(KD_PAGE, '$1 / 페이지'); dated = true; }
        else if ((v = kdDur(t)) !== null) dated = true;
        else if ((v = kdAgo(t)) !== null) dated = true;              // v4.21.15
        else if ((v = kdKoLabel(t)) !== null) dated = true;          // v4.21.15
        else if ((v = kdCount(n.parentElement, t)) !== null) dated = true;   // v4.21.15
        else if ((v = kdPat(t)) !== null) dated = true;              // v4.21.15
        else if ((v = kdEvent(n, t)) !== null) dated = true;         // v4.21.15 ⑧
        else if ((v = kdColon(t)) !== null) dated = true;            // v4.21.15 ⑨
        else return;
      }
    }
    if (skipNode(n)) return;
    n.nodeValue = joinsPrev(s, t, v) ? v + (s.match(/\s*$/) || [''])[0] : repl(s, t, v);
    if (dated) stats.dateHits++; else if (scoped) stats.scopedHits++; else stats.textHits++;
  }
  function trAttrs(el) {
    if ((!T && !TS) || !el.getAttribute) return;
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i], s = el.getAttribute(a); if (!s) continue;
      var v = T ? T[s.trim()] : undefined, sc = false;
      if (v === undefined && TS && (a === 'placeholder' || a === 'aria-label')) { v = TS[s.trim()]; sc = true; }
      if (v === undefined && (a === 'title' || a === 'aria-label') && kdPre(s.trim()) && kdOn()) {   // D3(v4.21)
        var dv = koDate(s.trim()); if (dv !== null) { el.setAttribute(a, dv); stats.dateHits++; continue; }
      }
      if (v !== undefined) { el.setAttribute(a, v); if (sc) stats.scopedHits++; else stats.textHits++; }
    }
  }
  function pass(root) {
    if ((!T && !TS) || !root) return;
    try {
      var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), n;
      while ((n = w.nextNode())) trText(n);
      if (root.querySelectorAll) { var els = root.querySelectorAll('[placeholder],[title],[aria-label],[alt]'); for (var i = 0; i < els.length; i++) trAttrs(els[i]); }
      if (root.nodeType === 1) trAttrs(root);
    } catch (e) {}
  }

  /* ---------- P5. scanApps 호출 억제 ---------- */
  // querySelectorAll('*') 은 GHL 페이지에서 만 개 단위를 훑는다.
  // 텍스트 치환은 종전대로 즉시 하고, 앱 스캔만 늦춘다.
  var SCAN_DEBOUNCE = 400;
  var scanTimer = null;
  function scheduleScan(delay) {
    if (scanTimer) return;
    scanTimer = setTimeout(function () { scanTimer = null; scanApps(); }, delay || SCAN_DEBOUNCE);
  }
  function scanNow() { if (scanTimer) { clearTimeout(scanTimer); scanTimer = null; } scanApps(); }
  // 새로 붙은 노드에 Vue 앱 루트가 실제로 있을 때만 스캔을 건다.
  // 자식까지 전부 뒤지면 억제하려던 비용이 그대로 돌아오므로 본인 + 직계 자식까지만 본다.
  function hasVueApp(nd) {
    if (nd.__vue_app__) return true;
    var c = nd.children; if (!c) return false;
    for (var i = 0; i < c.length; i++) if (c[i].__vue_app__) return true;
    return false;
  }

  var mo = new MutationObserver(function (muts) {
    var wantScan = false;
    for (var i = 0; i < muts.length; i++) {
      var m = muts[i];
      if (m.type === 'characterData') trText(m.target);
      else if (m.type === 'attributes') trAttrs(m.target);
      else if (m.addedNodes) for (var j = 0; j < m.addedNodes.length; j++) {
        var nd = m.addedNodes[j];
        if (nd.nodeType === 3) trText(nd);
        else if (nd.nodeType === 1) { pass(nd); if (!wantScan && hasVueApp(nd)) wantScan = true; }
      }
    }
    if (wantScan) scheduleScan(SCAN_DEBOUNCE);
  });

  /* ---------- IFR. 교차 출처 iframe 같은 출처 중계 (v4.21.14, 캐너리) ---------- */
  // 자동화(워크플로우)·비즈니스 프로필은 다른 출처 iframe 이라 한글팩이 닿지 않는다(조사: docs/research/iframe-proxy-2026-11-06.md).
  // 엣지 Worker hc-ifr-proxy 가 app.hyperclass.ai/__ifr/{wf|crm}/… 로 그 앱을 중계한다. 여기서 iframe 주소와
  // Postmate 가 iframe 출처를 계산하는 <a href> 를 그 경로로 바꾸면 핸드셰이크가 그대로 맞고(2026-11-06 실측),
  // iframe 이 같은 출처가 되므로 기존 DOM 번역(pass·mo)을 iframe 문서에도 건다.
  // 범위: IFR_LOCS 로케이션에서 부팅했을 때만 프로토타입을 건드린다 — 다른 고객은 이 로더가 stable 이 돼도 무변화.
  // 안전: Worker 라우트는 fail-open 이라 Worker 가 없으면 /__ifr/… 가 메인 앱 원본으로 간다 → 헬스 헤더 확인 전·실패 시엔 원래 주소.
  // 끄기: localStorage.hcKoIfr='0'(이 브라우저) · Worker 라우트 삭제(전체 — 헬스 실패로 원래 주소) · 포인터 loader.next 되돌리기.
  var IFR_HOSTS = { 'client-app-automation-workflows.leadconnectorhq.com': 'wf', 'client-app-crm-settings.leadconnectorhq.com': 'crm',
    'leadgen-vibe-ai-builder.leadconnectorhq.com': 'vibe',     // v4.21.17: AI 스튜디오(Worker v0.4.0)
    'leadgen-apps-form-survey-builder.leadconnectorhq.com': 'fsb' };   // v4.21.20: 폼·설문·퀴즈 빌더(Worker v0.5.0)
  // v4.21.18: 전 계정(벤자민 승인 2026-11-08). null = 로더가 허용된 모든 로케이션. 끄기 = Worker OFF(헬스 실패 → 원래 주소) 또는 이 값을 캐너리 목록으로.
  var IFR_LOCS = null;
  var ifr = { on: false, ok: null, rewrites: 0, frames: 0, fail: null };
  function ifrWanted() { var l = locOf(); return !!l && (!IFR_LOCS || IFR_LOCS.indexOf(l) >= 0) && allowed(); }
  function ifrRw(u) {
    if (ifr.ok !== true || !ifrWanted()) return u;
    try {
      var x = new URL(u, location.href), k = IFR_HOSTS[x.host];
      if (!k) return u;
      ifr.rewrites++;
      return location.origin + '/__ifr/' + k + x.pathname + x.search + x.hash;
    } catch (e) { return u; }
  }
  var IFR_MO = { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS };
  function ifrDoc(el) {        // 같은 출처로 중계된 iframe 문서만(Worker 가 심은 __hcIfr 표지)
    try { var w = el.contentWindow, d = el.contentDocument; return (w && d && w.__hcIfr && d.documentElement) ? d : null; } catch (e) { return null; }
  }
  function ifrHook(d) {        // 번역 + 감시. 사전이 아직 없으면 감시만 — start() 가 ifrRefresh() 로 다시 부른다
    if (T || TS) pass(d.body);
    if (!suspended) mo.observe(d.documentElement, IFR_MO);
  }
  function ifrAttach(el) {     // iframe 문서가 (다시) 뜰 때마다
    try {
      var d = ifrDoc(el);
      if (!d || d.__hcKoIfr) return;
      d.__hcKoIfr = 1; ifr.frames++;
      if (ifrDocs.indexOf(d) < 0) ifrDocs.push(d);   // ⑩ 카탈로그 병합 대상
      loadIfrDict();
      // iframe 앱은 load 뒤 인증을 거쳐 늦게 마운트된다 — 마운트 루트(#app)는 이미 있던 노드라 mo 가 새 앱을 못 본다
      [400, 1500, 4000, 10000].forEach(function (t) { setTimeout(scanApps, t); });
      var css = d.createElement('style'); css.textContent = 'body{word-break:keep-all;overflow-wrap:anywhere}';
      (d.head || d.documentElement).appendChild(css);
      ifrHook(d);
    } catch (e) { ifr.fail = 'attach: ' + (e && e.message || e); }
  }
  function ifrRefresh() {      // start()·resume() 뒤 — suspend() 의 mo.disconnect() 가 iframe 감시까지 끊으므로 다시 건다
    if (!ifr.on) return;
    try {
      var fs = document.querySelectorAll('iframe');
      for (var i = 0; i < fs.length; i++) { var d = ifrDoc(fs[i]); if (!d) continue; if (d.__hcKoIfr) ifrHook(d); else ifrAttach(fs[i]); }
    } catch (e) {}
  }
  function ifrWatch(el) {
    if (el.__hcKoIfrW) return; el.__hcKoIfrW = 1;
    el.addEventListener('load', function () { ifrAttach(el); });
  }
  function ifrInstall() {
    try {
      if (lsGet('hcKoIfr') === '0' || !ifrWanted()) return;
      var dI = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, 'src');
      var dA = Object.getOwnPropertyDescriptor(HTMLAnchorElement.prototype, 'href');
      if (!dI || !dI.get || !dI.set || !dA || !dA.get || !dA.set) return;
      Object.defineProperty(HTMLIFrameElement.prototype, 'src', {
        configurable: true, enumerable: dI.enumerable,
        get: function () { return dI.get.call(this); },
        set: function (v) { var n = ifrRw(String(v)); if (n !== String(v)) ifrWatch(this); return dI.set.call(this, n); }
      });
      Object.defineProperty(HTMLAnchorElement.prototype, 'href', {
        configurable: true, enumerable: dA.enumerable,
        get: function () { return dA.get.call(this); },
        set: function (v) { return dA.set.call(this, ifrRw(String(v))); }
      });
      var sa = Element.prototype.setAttribute;
      Element.prototype.setAttribute = function (n, v) {
        if (this instanceof HTMLIFrameElement && String(n).toLowerCase() === 'src') {
          var nv = ifrRw(String(v)); if (nv !== String(v)) { ifrWatch(this); v = nv; }
        }
        return sa.call(this, n, v);
      };
      ifr.on = true;
      fetch('/__ifr/wf/', { method: 'HEAD', credentials: 'omit', cache: 'no-store' })
        .then(function (r) { ifr.ok = r.headers.get('x-hc-ifr') === 'wf'; if (!ifr.ok) ifr.fail = 'health: no header'; })
        .catch(function (e) { ifr.ok = false; ifr.fail = 'health: ' + (e && e.message || e); });
    } catch (e) { ifr.fail = 'install: ' + (e && e.message || e); }
  }

  /* ---------- 사전 로딩 ---------- */
  // 기존 레이어는 jsDelivr 를 <script src>(script-src)로 썼는데 v4 는 fetch(connect-src)다.
  // CSP 가 다르게 걸려 있을 수 있고, 막히면 core 로드가 실패해 _text 치환까지 통째로
  // 죽는다(전면 영어). 커뮤니티 트랙에서 이미 쓰는 raw 경로(RAW, applyRev 에서 결정)로 한 번 더 시도한다.
  function grab(u) {
    // SHA 고정 URL 은 내용이 바뀔 수 없으므로 재검증(no-cache)이 낭비다 — 엣지 preload 와 같은 캐시 모드를 쓴다.
    return fetch(u, { mode: 'cors', cache: IMMUTABLE ? 'default' : 'no-cache' }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status); return r.text();
    });
  }
  function fetchFresh(url, cache) {
    return grab(url).catch(function (e) {
      var alt = url.indexOf(BASE) === 0 ? RAW + url.slice(BASE.length) : null;
      if (!alt) throw e;
      stats.fallback++;
      log('CDN 실패 — raw 폴백', e && e.message);
      return grab(alt);
    }).then(function (txt) {
      var d = JSON.parse(txt);
      if (cache) { try { cache.put(url, new Response(txt, { headers: { 'Content-Type': 'application/json', 'X-HC-TS': String(Date.now()) } })); } catch (e) {} }
      return d;
    });
  }
  // 캐시 이름에 REV 가 들어가므로 갱신할 때마다 새 버킷이 생긴다.
  // 옛 버킷을 지우지 않으면 갱신 1회당 약 5.4MB 가 그대로 남는다.
  // 쿼터가 차면 cache.put 이 조용히 실패하고 매 페이지 로드마다 재다운로드한다.
  function purgeOldCaches() {
    try {
      if (!('caches' in window) || !caches.keys) return;
      caches.keys().then(function (names) {
        for (var i = 0; i < names.length; i++) {
          var n = names[i];
          if (n !== CACHE && n.indexOf('hc-ko-app-') === 0) {
            caches.delete(n); log('옛 캐시 삭제', n);
          }
        }
      }).catch(function () {});
    } catch (e) {}
  }

  function load(url, onStale) {
    if (!('caches' in window)) return fetchFresh(url, null);
    return caches.open(CACHE).then(function (cache) {
      return cache.match(url).then(function (hit) {
        if (!hit) return fetchFresh(url, cache);
        var stale = !IMMUTABLE && (Date.now() - Number(hit.headers.get('X-HC-TS') || 0) > TTL);
        return hit.text().then(function (txt) {
          var d = JSON.parse(txt);
          if (stale) fetchFresh(url, cache).then(function (nd) { if (onStale) onStale(nd); }).catch(function () {});
          return d;
        });
      });
    }).catch(function () { return fetchFresh(url, null); });
  }
  /* ---------- P7. REV 포인터 (stale-while-revalidate) ---------- */
  // 부팅은 raw 왕복을 기다리지 않는다. Cache Storage 의 포인터(지난 로드에서 저장) 또는
  // 내장 REV 로 즉시 시작하고, 새 포인터는 저장만 해 두고 다음 로드에 쓴다.
  // (community-loader v2.0.1 의 TTL 백그라운드 갱신과 같은 패턴)
  // Cache Storage 가 없거나 거부하는 브라우저(사파리·파이어폭스 프라이빗)를 위해 rev 한 줄은
  // localStorage 에도 둔다. 없으면 그 브라우저는 영원히 내장 REV 로만 부팅해 포인터·롤백이 안 닿는다.
  var LS_REV = 'hcKoRev', LS_BAD = 'hcKoBadRev';
  // 원격 킬스위치 (v4.11) — 포인터 파일에 "off": true 를 커밋하면 다음 로드부터 전 고객에서 v4 가 서지 않는다.
  // 전체 개방 후엔 슬롯 교체 없이 끌 수단이 이것뿐이다. 꺼져 있어도 포인터는 계속 읽어
  // "off": false 로 되돌리면 그다음 로드부터 다시 켜진다. 레거시 레이어는 이것과 무관하다.
  var LS_OFF = 'hcKoRemoteOff';
  var LS_TEL = 'hcKoTelemetryUrl';
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) {} }
  // 사전 로드에 실패한 rev. 도달 불가 커밋(force push·gc)이면 포인터가 같은 값을 계속 주므로
  // 기억해 두지 않으면 매 로드마다 "실패 → 폴백 → 전체 재다운로드" 가 반복된다.
  function isBad(rev) { return !!rev && lsGet(LS_BAD) === rev; }
  function usable(rev) { return !!rev && SHA_RE.test(String(rev)) && !isBad(rev) ? rev : null; }
  function readCachedPointer() {
    var ls = usable(lsGet(LS_REV));
    if (!('caches' in window)) return Promise.resolve(ls);
    return caches.open(POINTER_CACHE).then(function (c) { return c.match(POINTER_URL); })
      .then(function (hit) { return hit ? hit.json() : null; })
      .then(function (d) { return usable(d && d.rev) || ls; })
      .catch(function () { return ls; });
  }
  function dropCachedPointer(rev) {
    lsSet(LS_BAD, rev || null); lsSet(LS_REV, null);
    try { if ('caches' in window) caches.open(POINTER_CACHE).then(function (c) { return c.delete(POINTER_URL); }).catch(function () {}); } catch (e) {}
  }
  var revReady = null;
  function edgePointer() {
    try {
      var p = window.__hcPtr;
      if (p && SHA_RE.test(String(p.rev)) && !isBad(p.rev)) return p;
    } catch (e) {}
    return null;
  }
  function resolveRev() {
    if (revReady) return revReady;
    var ep = edgePointer();
    if (ep) {
      if (ep.rev !== REV) applyRev(ep.rev, 'edge'); else revSource = 'edge';
      lsSet(LS_REV, ep.rev);
      try { if (ep.telemetry && typeof ep.telemetry.url === 'string' && /^https:\/\//.test(ep.telemetry.url)) lsSet(LS_TEL, ep.telemetry.url); } catch (e) {}
      log('REV', REV.slice(0, 7), '(edge)');
      revReady = Promise.resolve(REV);
      return revReady;
    }
    revReady = readCachedPointer().then(function (rev) {
      if (rev && rev !== REV) applyRev(rev, 'pointer-cache');
      else if (rev) revSource = 'pointer-cache';
      log('REV', REV.slice(0, 7), '(' + revSource + ')');
      return REV;
    });
    return revReady;
  }
  function refreshPointer() {
    try {
      fetch(POINTER_URL, { mode: 'cors', cache: 'no-cache' }).then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status); return r.text();
      }).then(function (txt) {
        var d = JSON.parse(txt);
        if (!d || !SHA_RE.test(String(d.rev))) throw new Error('bad pointer');
        lsSet(LS_OFF, d.off === true ? '1' : null);
        if (d.off === true) log('원격 킬스위치 켜짐 — 다음 로드부터 v4 중단');
        if (isBad(d.rev)) { log('포인터가 로드 실패했던 REV 를 가리킴 — 무시', d.rev.slice(0, 7)); return; }
        if (d.rev !== REV) { revNext = d.rev; log('새 REV 감지 — 다음 로드에 반영', d.rev.slice(0, 7)); }
        lsSet(LS_REV, d.rev);
        try { lsSet(LS_TEL, d.telemetry && typeof d.telemetry.url === 'string' && /^https:\/\//.test(d.telemetry.url) ? d.telemetry.url : null); } catch (e) {}
        if (lsGet(LS_BAD) && lsGet(LS_BAD) !== d.rev) lsSet(LS_BAD, null);   // 포인터가 옮겨 갔으면 불량 기록 해제
        if ('caches' in window) {
          caches.open(POINTER_CACHE).then(function (c) {
            return c.put(POINTER_URL, new Response(txt, { headers: { 'Content-Type': 'application/json', 'X-HC-TS': String(Date.now()) } }));
          }).catch(function () {});
        }
      }).catch(function (e) { stats.pointerFail++; log('포인터 갱신 실패 — 현재 REV 유지', e && e.message); });
    } catch (e) {}
  }
  function onCoreStale(nd) { core = nd; kdFlag = null; T = nd._text || null; TS = nd._textScoped || null; hostDone = false; setupHost(); }
  // 포인터가 가리키는 REV 의 사전을 CDN·raw 양쪽에서 못 받으면(가리키는 커밋에 파일이 없거나
  // 삭제된 경우) 포인터를 버리고 내장 REV 로 한 번 더 간다. 내장 REV 까지 실패하면 그대로 실패.
  function loadCore() {
    return load(URL_CORE, onCoreStale).catch(function (e) {
      if (REV === REV_BUILTIN) throw e;     // 내장 REV 자체가 실패 — 같은 URL 을 다시 시도할 이유가 없다
      stats.revFallback++;
      log('포인터 REV 사전 로드 실패 — 내장 REV 로 재시도', e && e.message);
      dropCachedPointer(REV);
      applyRev(REV_BUILTIN, 'builtin-fallback');
      return load(URL_CORE, onCoreStale);
    });
  }
  function waitHost(ms) {
    return new Promise(function (res) {
      var t0 = Date.now();
      (function tick() {
        var el = document.getElementById('app');
        if (el && el.__vue_app__ && composerOf(el.__vue_app__)) return res(true);
        if (Date.now() - t0 > ms) return res(false);
        setTimeout(tick, 60);
      })();
    });
  }

  /* ---------- T. 텔레메트리 (v4.14) ---------- */
  // 무엇을: 라우트별 ① 카탈로그 네임스페이스마다 한글이 없는 리프 수(+샘플 키 3개) ② 보이는 텍스트의 한글/영문 비율
  //         ③ 베일 해제까지 걸린 ms. 개인정보·로케이션 ID·본문 텍스트는 보내지 않는다(키 경로와 영어 원문 샘플뿐).
  // 언제: start() 8초 뒤와 라우트 변경 8초 뒤. 같은 라우트 패턴은 세션당 1회.
  var telemetry = { sent: 0, skipped: 0, last: null, url: null };
  var HANGUL = /[가-힣]/, LATIN = /[A-Za-z]{3,}/;
  function routePattern() {
    return location.pathname.replace(/\/location\/[^/]+/, '/location/:loc').replace(/\/[0-9a-zA-Z]{20,}(?=\/|$)/g, '/:id').slice(0, 160);
  }
  function countNs(cat, out) {
    for (var ns in cat) {
      var v = cat[ns]; if (!v || typeof v !== 'object') continue;
      var c = out[ns] || (out[ns] = { total: 0, en: 0, samples: [] });
      (function walk(o, path) {
        for (var k in o) {
          var x = o[k];
          if (x && typeof x === 'object') { walk(x, path + '.' + k); continue; }
          if (typeof x !== 'string') continue;
          c.total++;
          if (!HANGUL.test(x) && LATIN.test(x)) {
            c.en++;
            var kp = (path + '.' + k).slice(1).slice(0, 120);
            if (c.samples.length < 3) c.samples.push(kp);
            // 영어 원문 샘플: 저수지 샘플링으로 ns 당 최대 80쌍 — 여러 세션이 모이면 Worker 가 전체를 갖게 된다
            c.pairs = c.pairs || [];
            // 잘린 원문을 번역하면 안 되므로 600자 초과는 샘플에 넣지 않는다(자르지 않는다)
            if (x.length <= 600) {
              if (c.pairs.length < 150) c.pairs.push([kp, x]);
              else { var j = Math.floor(Math.random() * c.en); if (j < 150) c.pairs[j] = [kp, x]; }
            }
          }
        }
      })(v, '');
    }
  }
  function visibleRatio() {
    var ko = 0, en = 0, n = 0;
    try {
      var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      var t;
      while ((t = w.nextNode()) && n < 4000) {
        var s = t.nodeValue; if (!s || !s.trim()) continue;
        var pe = t.parentElement; if (!pe || /^(SCRIPT|STYLE|NOSCRIPT)$/.test(pe.tagName)) continue;
        n++;
        if (HANGUL.test(s)) ko++; else if (LATIN.test(s)) en++;
      }
    } catch (e) {}
    return { ko: ko, en: en };
  }
  function telemetryUrl() { return lsGet(LS_TEL); }
  function sendTelemetry(reason) {
    try {
      if (lsGet('hcKoTelemetryOff') === '1') { telemetry.skipped++; return; }
      var url = telemetryUrl(); telemetry.url = url;
      if (!url || !booted || suspended) { telemetry.skipped++; return; }
      var rp = routePattern();
      var key = 'hcKoTel:' + rp;
      try { if (sessionStorage.getItem(key)) { telemetry.skipped++; return; } } catch (e) {}
      var ns = {};
      var el = document.getElementById('app'), g = el && el.__vue_app__ && composerOf(el.__vue_app__);
      if (g) countNs(catalogOf(g), ns);
      // 영문이 남은 네임스페이스만, 많은 순으로 상위 25개
      var rows = [];
      for (var k in ns) if (ns[k].en) rows.push({ ns: k, total: ns[k].total, en: ns[k].en, samples: ns[k].samples, pairs: ns[k].pairs || [] });
      rows.sort(function (a, b) { return b.en - a.en; });
      var body = {
        v: 1, t: new Date().toISOString(), route: rp, loader: API.version, rev: String(REV).slice(0, 7),
        edge: window.__hcEdge ? { lifted: window.__hcEdge.lifted || null, why: window.__hcEdge.why || null } : null,
        text: visibleRatio(), hits: stats.textHits, unmatched: stats.unmatched, ns: rows.slice(0, 25), reason: reason
      };
      var payload = JSON.stringify(body);
      // 60KB 상한(sendBeacon 64KB): 넘치면 하위 ns 부터 pairs 를 비우고, 그래도 넘치면 ns 수를 줄인다
      for (var ci = body.ns.length - 1; ci >= 0 && payload.length > 48000; ci--) { body.ns[ci].pairs = []; payload = JSON.stringify(body); }
      if (payload.length > 60000) { body.ns = body.ns.slice(0, 10); payload = JSON.stringify(body); }
      var ok = false;
      try { ok = navigator.sendBeacon(url, new Blob([payload], { type: 'text/plain' })); } catch (e) {}
      if (!ok) { try { fetch(url, { method: 'POST', body: payload, mode: 'no-cors', keepalive: true, headers: { 'Content-Type': 'text/plain' } }); ok = true; } catch (e) {} }
      if (ok) { telemetry.sent++; telemetry.last = rp; try { sessionStorage.setItem(key, '1'); } catch (e) {} log('텔레메트리 전송', rp, rows.length + ' ns'); }
    } catch (e) { log('텔레메트리 실패', e && e.message); }
  }
  /* ---------- R. 문구 신고 (v4.18) ---------- */
  var REPORT_MAX = 20, reported = 0;
  function reportUrl() { var u = telemetryUrl(); return u ? String(u).replace(/\/r$/, '/report') : null; }
  function textNodeAt(x, y) {
    try {
      var n = null;
      if (document.caretPositionFromPoint) { var cp = document.caretPositionFromPoint(x, y); n = cp && cp.offsetNode; }
      else if (document.caretRangeFromPoint) { var cr = document.caretRangeFromPoint(x, y); n = cr && cr.startContainer; }
      if (n && n.nodeType === 3 && n.nodeValue.trim()) return n;
      var el = document.elementFromPoint(x, y); if (!el) return null;
      var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), t;
      while ((t = w.nextNode())) if (t.nodeValue.trim()) return t;
    } catch (e) {}
    return null;
  }
  function toast(msg) {
    try {
      var el = document.getElementById('hc-ko-toast');
      if (!el) {
        el = document.createElement('div'); el.id = 'hc-ko-toast';
        el.style.cssText = 'position:fixed;left:50%;bottom:28px;transform:translateX(-50%);z-index:2147483647;background:#111827;color:#fff;padding:10px 16px;border-radius:8px;font:13px/1.4 -apple-system,system-ui,sans-serif;box-shadow:0 6px 24px rgba(0,0,0,.25);max-width:70vw;pointer-events:none;transition:opacity .3s';
        document.body.appendChild(el);
      }
      el.textContent = msg; el.style.opacity = '1';
      clearTimeout(el._t); el._t = setTimeout(function () { el.style.opacity = '0'; }, 2200);
    } catch (e) {}
  }
  function onReportClick(e) {
    try {
      if (!e.altKey || !e.shiftKey || e.button !== 0) return;
      var url = reportUrl(); if (!url || !booted) return;
      var n = textNodeAt(e.clientX, e.clientY); if (!n) return;
      e.preventDefault(); e.stopPropagation();
      if (reported >= REPORT_MAX) { toast('이 세션의 신고 한도(' + REPORT_MAX + '건)에 닿았습니다'); return; }
      var text = n.nodeValue.trim().slice(0, 300);
      var p = n.parentElement, ctx = '';
      if (p) {
        ctx = p.tagName.toLowerCase();
        var cls = typeof p.className === 'string' ? p.className.trim().split(/\s+/).filter(function (c) { return c && c.length < 40; }).slice(0, 3) : [];
        if (cls.length) ctx += '.' + cls.join('.');
        var role = p.getAttribute && p.getAttribute('role'); if (role) ctx += '[' + role + ']';
      }
      var body = { v: 1, t: new Date().toISOString(), route: routePattern(), loader: API.version, rev: String(REV).slice(0, 7),
                   text: text, ctx: ctx.slice(0, 120), lang: HANGUL.test(text) ? 'ko' : 'en' };
      fetch(url, { method: 'POST', body: JSON.stringify(body), mode: 'no-cors', keepalive: true, headers: { 'Content-Type': 'text/plain' } }).catch(function () {});
      reported++;
      toast('문구 신고됨 (' + reported + '/' + REPORT_MAX + '): ' + (text.length > 48 ? text.slice(0, 48) + '…' : text));
      log('문구 신고', body);
    } catch (err) {}
  }
  try { document.addEventListener('click', onReportClick, true); } catch (e) {}

  var telTimer = null;
  function scheduleTelemetry(reason) {
    clearTimeout(telTimer);
    // 로그인 화면은 모든 세션이 거치는 곳이라 이벤트 수만 늘고 KV 예산(DAILY_PUT_BUDGET)을 앱 화면에서 빼앗는다 (v4.19)
    if (preauth()) return;
    telTimer = setTimeout(function () { if (!preauth()) sendTelemetry(reason); }, 8000);
  }

  /* ---------- 부트스트랩 ---------- */
  var scanIv = null;

  function boot() {
    if (booted || !allowed()) return;
    booted = true;
    resolveRev().then(function () {
      refreshPointer();          // 부팅 경로 밖 — 결과는 다음 로드에
      injectCss();
      return Promise.all([loadCore(), waitHost(20000)]);
    }).then(function (r) {
      // 옛 버킷 정리는 core 를 **받은 뒤**에 한다. 먼저 지우면 포인터 REV 로드가 실패해
      // 내장 REV 로 돌아갈 때 그 버킷이 이미 없어 5.4MB 를 처음부터 다시 받는다.
      purgeOldCaches();
      core = r[0] || {}; core.host = core.host || {}; core.flat = core.flat || {};
      T = core._text || null; TS = core._textScoped || null;
      hostFound = !!r[1];
      // 첫 방문은 사전(수 MB)을 받는 동안 사용자가 제외 계정·에이전시 화면으로 옮겨 갈 수 있다.
      // 그때 바로 적용하면 그 화면이 한국어가 되고 suspended 라 이후 새로고침도 걸리지 않는다.
      // 적용은 허용 로케이션으로 돌아올 때(resume)까지 미룬다. 사전 다운로드는 그대로 둔다.
      if (suspended || !allowed()) { deferred = true; log('부팅 중 비허용 화면으로 이동 — 적용 보류'); }
      else if (preauth()) { deferred = true; settlePreauth(location.pathname); }
      else start();
      return load(URL_APPS, function (nd) { appsDict = nd.apps || {}; appsKeys = null; applyPendingApps(); });
    }).then(function (a) {
      if (a) {
        appsDict = a.apps || {}; appsKeys = null;
        if (!deferred) scanNow();
        log('apps dict loaded', Object.keys(appsDict).length);
      }
    }).catch(function (e) { log('boot failed', e); });
  }
  var deferred = false, hostFound = false;
  // 로그인 화면: 경로가 PREAUTH_SETTLE_MS 동안 그대로일 때만 적용한다. 로그인된 사용자가 `/` 로 들어오면 GHL 이 곧바로
  // 대시보드로 보내는데, 그 사이에 병합하면(되돌릴 수 없음) 도착지가 제외 계정일 때 새로고침이 하나 더 생긴다.
  // 그 사이 경로가 바뀌면 onRoute(이벤트·감시)가 resume()/suspend() 로 이어받는다.
  function settlePreauth(path) {
    setTimeout(function () {
      if (!deferred || suspended) return;
      if (location.pathname !== path) { if (allowed() && preauth()) settlePreauth(location.pathname); return; }
      if (!allowed()) return;
      deferred = false; log('PREAUTH 안정 — 적용', path); start(); scanNow();
    }, PREAUTH_SETTLE_MS);
  }
  // 엣지 Worker 가 넣은 첫 페인트 베일. 한국어가 들어간 직후, 또는 이 화면엔 적용하지 않는다고
  // 판정한 직후 걷는다. 걷힌 시각을 __hcEdge.lifted 에 남겨 텔레메트리·검증이 플래시 길이를 잰다.
  function liftVeil(why) {
    try {
      var v = document.getElementById('hc-ko-veil');
      var vc = document.getElementById('hc-ko-veil-css'); if (vc) vc.remove();
      if (v) { v.remove(); if (window.__hcEdge) { window.__hcEdge.lifted = Date.now() - window.__hcEdge.t0; window.__hcEdge.why = why; } log('베일 해제', why); }
    } catch (e) {}
  }
  function start() {
    if (hostFound) setupHost(); else if (!waitHostLate()) log('host composer not found in 20s');
    liftVeil('start');
    scheduleTelemetry('start');
    if (T) pass(document.body);
    mo.observe(document.documentElement, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS });
    scanApps();
    if (!scanIv) scanIv = setInterval(scanApps, 5000);
    ifrRefresh();   // v4.21.14
  }
  // 보류 뒤 재개 시점엔 호스트가 이미 떠 있을 수 있다 — 한 번 더 찾아본다.
  function waitHostLate() { var el = document.getElementById('app'); return !!(el && el.__vue_app__ && composerOf(el.__vue_app__) && setupHost()); }

  // 비허용 로케이션으로 넘어갔을 때. 이미 i18n 카탈로그에 병합된 한국어는
  // 되돌릴 수 없지만, 텍스트 치환과 새 앱 적용은 여기서 멈춘다.
  // 완전히 영어로 돌리려면 새로고침이 필요하다.
  function suspend() {
    liftVeil('suspend');
    // 이미 멈춘 상태(에이전시 화면 등)에서 제외 계정으로 들어오는 경로도 새로고침이 필요하다.
    // 종전엔 여기서 바로 return 해 A → 에이전시 → 제외 계정 순서면 한국어가 남았다.
    if (suspended) { reloadIfExcluded(); return; }
    suspended = true;
    try { mo.disconnect(); } catch (e) {}
    if (scanIv) { clearInterval(scanIv); scanIv = null; }
    if (scanTimer) { clearTimeout(scanTimer); scanTimer = null; }
    log('비허용 로케이션 — 중단', locOf());

    // 이미 i18n 카탈로그에 부어 넣은 한국어는 되돌릴 방법이 없다.
    // 레거시 hcEx() 는 DOM 치환만 하므로 제외 계정에서 즉시 영어가 되는데,
    // v4 는 그대로 두면 "이전에 로드된 화면은 한국어" 인 반쪽 상태가 된다.
    // 두 레이어의 판정을 맞추려면 여기서 한 번 새로고침하는 수밖에 없다.
    //
    // 루프는 나지 않는다: 새로고침 후 excluded() 가 true 라 allowed() 가 false 이고,
    // boot() 가 아예 실행되지 않아 dirty 가 다시 서지 않는다.
    // 새로고침은 **옵트아웃 계정** 에만 건다.
    // 단순히 범위 밖인 곳(에이전시 뷰)은 우리 화면이라 카탈로그에 한국어가 남아도 해가 없다.
    // 거기까지 새로고침하면 계정을 옮길 때마다 페이지가 통째로 다시 뜨는 셈이라 체감이 나쁘다.
    reloadIfExcluded();
  }
  function reloadIfExcluded() {
    if (dirty && excluded()) {
      dirty = false;
      if (recentlyReloaded()) { log('옵트아웃 계정 — 30초 안에 이미 새로고침함, 루프 방지로 생략'); return; }
      try { sessionStorage.setItem(RELOAD_KEY, String(Date.now())); } catch (e) {}
      log('옵트아웃 계정 — 새로고침으로 영어 복귀');
      try { location.reload(); } catch (e) {}
    }
  }

  function resume() {
    if (deferred) {
      suspended = false;
      if (preauth()) { settlePreauth(location.pathname); return; }   // 로그인 화면끼리 이동 — 다시 안정 대기
      deferred = false; log('보류했던 적용 시작', locOf()); start(); scanNow(); return;
    }
    if (!suspended) return;
    suspended = false;
    try {
      mo.observe(document.documentElement, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS });
    } catch (e) {}
    if (!scanIv) scanIv = setInterval(scanApps, 5000);
    if (T) pass(document.body);
    ifrRefresh();   // v4.21.14
    log('허용 로케이션으로 복귀 — 재개', locOf());
  }

  function onRoute() {
    if (!allowed()) { suspend(); return; }
    // 첫 부팅 전의 suspended 는 '범위 밖을 지나왔다'는 표시일 뿐이다(mo·인터벌은 아직 없다).
    // 그대로 boot() 하면 부팅 콜백이 suspended 를 보고 적용을 보류해, 다음 라우트 변경까지 영어로 남는다
    // (v4.19 실측: /login/canny → / , 종전에도 에이전시 → 서브계정 첫 진입에 같은 경로). 여기서 푼다.
    if (!booted) { suspended = false; boot(); return; }
    resume();
    scheduleTelemetry('route');
    // 라우트 이동은 앱이 통째로 갈리는 지점이라 디바운스를 기다리지 않는다.
    scheduleScan(80);
  }
  window.addEventListener('routeChangeEvent', onRoute);

  // v4.19: 로그인 화면 → 로그인 직후 이동이 routeChangeEvent 를 내는지는 로그인 세션 없이 확인할 수 없다.
  // 경로가 바뀌었는데 이벤트가 없었으면 직접 onRoute 를 부른다(제외 계정 새로고침·에이전시 중단이 걸리도록).
  // 이벤트가 먼저 와서 lastPath 가 이미 같으면 아무것도 하지 않는다.
  var lastPath = location.pathname;
  window.addEventListener('routeChangeEvent', function () { lastPath = location.pathname; });
  setInterval(function () {
    if (location.pathname === lastPath) return;
    lastPath = location.pathname;
    log('경로 변경 감지(이벤트 없음)', lastPath);
    onRoute();
  }, 500);

  ifrInstall();   // v4.21.14 — GHL 이 iframe 을 만들기 전에(로더는 GHL app.js 보다 먼저 뜬다)

  if (allowed()) boot();
  else {
    liftVeil('gate');
    log('게이트에 막힘 — 현재 로케이션:', locOf(), '/ 허용:', ALLOW.length ? ALLOW.join(',') : '전 서브계정', remoteOff() ? '(원격 킬스위치)' : '');
    if (remoteOff()) refreshPointer();   // 꺼진 상태에서도 포인터를 읽어야 원격으로 다시 켤 수 있다
  }
})();
