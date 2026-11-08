# STATE — 메인 앱 한글팩 v4 현재 상태

> **규칙: 매 배포 라운드 종료 시 이 파일을 갱신한다.** `data/DECISIONS.md`(결정)와 짝이 되는 **현재 상태** 파일이다.
> 새 세션은 이 파일 → `PLAN-*.md` 순으로 읽고 시작한다. 기억에 의존해 재개하지 않는다.
> **규칙: 라이브 검증 전 크롬 번역 확장(`hyperclass-ko-ext` 등)이 꺼져 있는지 먼저 확인한다.** 확장이 켜진 화면은 고객 화면이 아니다(10-29 ⑥ 오판의 원인). 가능하면 **헤드리스 Playwright(무쿠키·확장 없음) 결과를 기준**으로 삼고, 사람 브라우저 확인은 보조로 둔다. 슬롯 변경 검증은 새 탭 + 5분 뒤(사고 기록 4).

**진행 중 라운드** 2026-10-31~ 커뮤니티·코스·로그인 한글화 — 계획·진행은 `PLAN-portal-login.md`, 원 지시서 `WORKORDER-portal-login-v1.md`, 포털 설치·확산 `PORTAL-ROLLOUT.md`

## 2026-10-31 커뮤니티·코스·로그인 라운드 (작업지시서 v1) — 현재 상태

| 항목 | 상태 |
|---|---|
| 교차 출처 iframe 화면 (2026-11-07 조사) | 한글팩이 닿지 않는 다른 도메인 iframe 화면: 자동화 워크플로우·비즈니스 프로필(다른 세션이 같은 출처 중계 캐너리 중) 외에 **설정 → 캘린더**(`calendar-app.`) · **설정 → 이메일 서비스**(`ghl-isv-app-prod.`) · **설정 → 대화 제공자**(`client-app-crm-conversations.`) · **마케팅 → 제휴 관리자**(`client-app-affiliate-manager.`) · AI Studio(`leadgen-vibe-ai-builder.`) · 모바일 앱 커스터마이저(`mobile-whitelabel-customizer.`) · 마케팅 → 잠재 고객 발굴(외부 `prod.analyzemy.business`) · 멤버십 옛 코스 목록 v1 `memberships/courses/products`(`backend.memberships.apisystem.tech` — 전부 영어. 메뉴는 v2 `products-v2` 로 가서 한국어, v1 은 옛 주소·옛 링크로만). **편집기(빌더)도 교차 출처 iframe — 전부 영어(2026-11-07 상세 화면 점검)**: 폼 빌더 `form-builder-v2/…`·설문 빌더 `survey-builder-v2/…`(`leadgen-apps-form-survey-builder.`) · 퍼널·웹사이트 페이지 빌더 `/location/…/page-builder/…`(`page-builder.`) · 문서·계약(제안서) 편집기 `payments/proposals-estimates/edit/…`(`leadgen-apps-proposal-builder.`). 목록·개요 화면은 한국어, 빌더를 여는 순간 영어. 같은 화면에서 한국어인 편집기: 코스 편집기(course-creator-studio)·블로그 글 편집기·인보이스 편집기·이메일 템플릿 목록. 73라우트 숨은 iframe 조사 — 중계 대상 후보 목록 |
| 배포 경로 (2026-11-06 밤) | **런타임은 `cdn` 브랜치 커밋으로 서빙** — main 트리 75MB 가 jsDelivr 패키지 한도(50MB)를 넘어 `@main` 데이터 API 가 403. `scripts/publish-cdn.sh` 가 런타임 파일만(11MB/26파일, blob 공유) 담은 커밋을 cdn 브랜치에 발행하고, 메인·포털·결제 포인터의 rev·loader 는 **cdn `3fe299e`**(원본 main 은 각 포인터 `src`). 사전 포인터 봇이 발행·@cdn 대조·전진까지 한다. 로더 승격도 cdn SHA 로(DECISIONS 절차). **cdn 브랜치는 지우거나 강제 푸시 금지.** 남은 main SHA 고정: 에이전시 슬롯 부트스트랩 `@c25c941`·엣지 부트스트랩 `@3bc900d`·포털 슬롯 `@028b315` |
| 사전 (메인) | **v4.2.73** 라이브 — 포인터 rev cdn `62f1d2f`(main `0c50bc3`). v4.2.73 = **AI 에이전트 빌더 `agentBuilderApp` 5,358**(벤자민 제보 2026-11-08 — GHL 이 AI 직원·음성 AI 문자열을 새 네임스페이스로 옮겨 대화 AI·음성 AI 에이전트 편집 화면이 전부 영어였다. 같은 키 이관 4,166·독립 검수 교정 578 + 신규 1,192). 그 전 v4.2.72 = rev `01a7675`(main `f165c59` = v4.2.72 + iframe 앱 사전 별도 파일 `data/hc-ko-app-ifr.json` 458KB, #123 — 2026-11-08 벤자민 '다 반영'). 포인터 봇이 ifr 파일도 대상에 넣고 같은 사전으로 뒤로 가지 않게 고침(#129). v4.2.72 = 텔레메트리(11-07) host 네임스페이스 미번역 전수 대조 — 남은 417개 중 실제 문장 7개(견적서 편집기 미리 채우기 안내 6 · AI 직원 '전화 거는 중...')만 번역, 나머지는 자리표시자·예시 URL·브랜드·모델명(원문 유지) → **메인 앱 i18n 사전은 사실상 완결**. 밤샘 상세 화면 점검(소셜 플래너 작성 창·캘린더 예약 모달·리포팅·설정·기회 옆 패널·문서·계약·커뮤니티·이메일 예약·트리거 링크) 전부 한국어 — 남은 영어는 '1 - 10 of 355' 꼴(로더 v4.21.15 ⑤)과 사용자 데이터. v4.2.71 cdn `f83377b`(main `add50da`). v4.2.71 = **설정 앱(중계 iframe — 비즈니스 프로필 등, crm 설정 앱 지문, 메시지가 컴파일된 함수 꼴이라 런타임 병합 시 문자열로 컴파일됨을 실측) 카탈로그 5,569** + 워크플로우·설정 두 iframe 카탈로그를 런타임 apps 에서 빼 편집 정본 `ifrApps` 에만 보관(전 고객 apps 무게를 늘리지 않으려고 — 별도 파일 `data/hc-ko-app-ifr.json` 발행은 **PR #123 초안, scripts 변경이라 벤자민 승인 대기**, 로더 v4.21.15 ⑩ 이 IFR 이 붙을 때만 받음). v4.2.70 cdn `469c315`(main `6943bac`). v4.2.67 = **워크플로우 앱(자동화 — 중계 iframe, 지문 `1_business_account|2_way_email|…|Due_date`, 로케일 en) 카탈로그 5,309**(같은 원문 이관 2,398 — 독립 검수 교정 165 / 1~3단어 라벨 신규 3,023 — 번역 4갈래 + 검수 2갈래 교정 32). 4단어 이상 문장 약 3,970은 다음 라운드. 적용은 로더 v4.21.15 ⑩(iframe 카탈로그 병합) 뒤 · v4.2.68 = **코스 분석 화면**(별도 앱 membership-analytics, 지문 `analytics`) 316 — 라이브 확인 · 거래 상세 '2단계 주문 폼' · 거래·상품 용어 9 · v4.2.69 = 코스 분석 회원 표 머리글 _text 7(표 열 정의가 카탈로그 병합보다 먼저 만들어지는 경합) · v4.2.70 = **_textScoped 1,407 전수 독립 검수 → 정정 62**(Estimate 견적서·Items 항목·Bold 굵게·Closed 종료됨·Stable 안정·Library 라이브러리 등 한 화면 문맥이 묻은 값, 대소문자 짝, 참조본 다수 표기). v4.2.66 cdn `51bda47`(main `5b97744`). v4.2.64~66 = 상세 화면 점검 계속: **연락처 상세 오른쪽 패널 빈 상태 10**(새 UI record-details-new-ui 하드코딩 — 활동·메모·예약·작업·AI 에이전트) · 기회 → 예측 위험 단계·'마감일 없음' · 연락처 AI 성장 배너 · '{objectNamePlural}을(를)' 어색한 조사 2 · **설정 → 사용자 → 역할 및 권한 목록 영어 37** + 기존 권한 값 용어 통일 7(제품→상품·인증서→수료증·프로스펙팅→잠재 고객 발굴·대량→일괄) · 사용자 유형 'Account - user/admin' · **오늘 추가분 독립 검수 반영 9**(위험도 높음·보통·낮음, 인보이스 요약 카드 '0 건 임시 저장' 꼴, Queued 대기열, 기회 연결 해제, 빈 상태 문구). 라이브 실측(v4.2.64): 연락처 상세 패널 전부 한국어(남은 '0 items' 는 로더 v4.21.15). v4.2.63 cdn `eb7958d`(main `580200a`). v4.2.63 = **상세·편집 화면 점검**: 인보이스 요약 카드(GHL 이 `list.dashboard.*` i18n 키를 쓰지만 데이터가 먼저 오면 영어로 굳는 경합 — 사전 값 + 로더 v4.21.15 숫자 패턴 둘 다, PR #98 은 #109 로 흡수) · 상품 편집 SaaS 'Usage limits' · 인보이스/견적서 편집기 'Opportunity 연결' 등 6(매개변수 `{opportunityObject}` 가 영어 — 결과 문자열 _text) · **코스 편집기**(course-creator-studio, 하드코딩: 라이브 세션·댓글·커뮤니티 그룹·코스 태그·난이도·주제·언어) · _textScoped 정정 9(수신자들·결과들·받은함·옵트인·구독취소·대기중 2·통화 종료→종료·고급 설정→고급). 라이브 실측: 코스 편집기 설정 탭 전부 한국어, 상품 편집 남은 영어는 가격 이름 Monthly·Yearly(사용자 데이터)·편집기 글꼴 Inter·Paragraph. v4.2.62 cdn `067035a`(main `2d0b55b`). v4.2.62 = **SaaS 상품 편집 saasApp 1,306**(상품 편집 화면에서만 로드 — 1,337/1,345 영어였음; 같은 앱 카탈로그 경로 이관 1,267 + 신규 50, 검수 교정 106; 구독 취소 확인 입력어 cancelWord 는 DNT 'Cancel') · 'Search Engine Listing' _text · v4.2.61 cdn `4b54903`(main `68ae07e`). v4.2.61 = 마켓플레이스 카드 개발자 '{name} 제공' · 개발자명 LeadConnector → 하이퍼클래스(_text 3) · v4.2.60 cdn `9a590ae` = **별도 Vue 앱 카탈로그 보강 2,797**: 에이전트 로그 앱(연락처 상세·대화 화면, 최상위 키 2개라 지문 매칭 실패 → 전부 영어였음) 새 지문 `agentLogs|common` 1,319 · 낡은 카탈로그 6개(캘린더 721 · 마켓플레이스 399 · 오브젝트 170 · 주문 81 · 인보이스 56 · 결제 50; 신규 1,063 + 같은 원문 이관 518, 독립 검수 교정 74) · 기존 값 정정 36(수금 통일·리스팅·애드온·플랜·견적서) · 외부 트래킹 Do’s. 라이브 실측: 에이전트 로그 0→1,319/1,338 · 캘린더 1,118→1,838/1,871 · 마켓플레이스 1,765→2,164/2,211. **포인터 봇의 cdn 경로 첫 실전 통과**(v4.2.60·61 자동 발행·대조·전진). v4.2.59 `e28eaed`(cdn `3fe299e`) 라이브(2026-11-06). v4.2.59 = 사이트 스키마 마크업 schemaMarkupApp 146 · 전 메뉴(85라우트) 스윕 잔여 80(29개 앱) · **화이트라벨 정정 20곳**(한국어 값의 'LC 이메일·LC 전화·LC 연동·LC 서브 계정·LC 앱' → 하이퍼클래스, '[LC Tracking]' 안내 2곳 → '접두사에 Tracking') · v4.2.58 `ae180b5` = **멤버십 이전 안내 membershipMigration 43(새 ns — GoKollab·멤버십 화면 위 띠·모달)** · 랩스 labsApp 17 · 잔여 17 · productsApp.common.square 정사각형→Square · 소셜 리스닝 '매일 아침 {time}'→'매일 {time}' · v4.2.57 `4276aba` = GoKollab 배너 _text 3 · 동영상 플레이어(Plyr) 툴팁 _text 4·_textScoped 5 · v4.2.56 `3b1d83b` = 설정 '데이터 가져오기' bulkActionsApp 1,704(CSV·HubSpot 가져오기·일괄 작업·AI 캠페인) · 멤버십 GoKollab goKollabApp 154 · 상품 컬렉션 storeCatalogApp 115 · 필드·오브젝트 crmObjectsSettingsApp 22 — 앱 카탈로그 이관 1,553 + 신규 462, 독립 검수 5갈래 교정 78 + 자동 리뷰 10 · 기존 값 정정 6(Variant=변형 통일, 일괄 액션→일괄 작업, productsApp change/made 조각 '건/건/변경됨') · v4.2.55 `1bfd5f9` = _textScoped certificate·badge(자격 증명 목록 유형 칩) · v4.2.54 `c4637aa` = 'AI에게 문의' 배너 한국어 실측. v4.2.54 = 'AI에게 문의' copilotApp 잔여 581 · 블로그 blogsApp 잔여 115(데스크톱 크롬에서 원문 재추출, 검수 교정 4 + 자동 리뷰 7) · 'AI에게 문의' 첫 화면 배너 _text 2·_textScoped Configure(배너의 'New' 배지는 _textScoped 'New'=새로 만들기로 보임 — 로더 범위 조정 필요) · v4.2.53 `6d809d8` 실측 완료(블로그·폼·QR 화면 한국어, 남은 영어는 사용자 데이터) · v4.2.53 = 'AI에게 문의' copilotApp 1,366 · 블로그 blogsApp 141 · 폼 formSurveyApp 143 · QR 코드 qrCodeListApp 24 · 소량 20(검수 교정 5 + 미디어 저장소 통일 9 + 자동 리뷰 13). copilotApp(영어 1,976)·blogsApp(265) 잔여는 원문 업로드가 끊겨 다음 라운드 · v4.2.52 `c008376` = 기존 사전 일괄 오역 정정 17(범위·페이지 'to'(' 대상: ')→'~', 토글 'On'(날짜)→켬, 반복 종료 'On'→지정일) · v4.2.51 `bfbc52b` = AI 직원 앱 aiEmployeesApp 번역 호스트 이관 2,095(대화 AI 화면 — 예전 별도 앱 카탈로그 번역을 경로 단위로 옮김, 독립 검수 3갈래 교정 146 + 자동 리뷰 17) · 상품 productsApp 116 · 기회·연락처·연동·소셜 소량 · v4.2.49·v4.2.50 실측 완료(평판 개요·이메일 마케팅 템플릿 목록 한국어, 42라우트 네임스페이스 스윕) · v4.2.50 = 앱 전체 카탈로그 라운드: 이메일 빌더 ghlEmailBuilderCommon 2,257 · agentStudioApp 228 · superagentsApp 118 · proposalCommon 91(번역 6갈래 + 독립 검수 4갈래 교정 43 + 자동 리뷰 반영 8) · v4.2.49 = 평판 관리 앱 `reputationApp` 잔여 662문구(경쟁사 분석·프로필 연결·대시보드 v2·순차 응답·수동 리뷰·리뷰 AI 에이전트·위젯·비디오 후기, 독립 검수 22 + 자동 리뷰 6) · v4.2.48 `e61ce56` = 수료증·배지(자격 증명) 앱 `certificatesApp` 588문구 신규(런타임 카탈로그 추출 + 직접 번역 + 독립 검수 4 + 자동 리뷰 반영 7, AI 시작 프롬프트 4종 한국어) · v4.2.47 `57aa5ee` = 평판 개요 리뷰 링크 안내·빈 상태·연동 설명 6 · v4.2.46 = 텔레메트리(11-04) 잔여 1,959문구 직접 번역 6갈래 + 독립 검수 4갈래(교정 9·스코프→범위 2) + 자동 리뷰 반영 6 — superagentsApp 697·ghlEmailBuilderCommon 278·formSurveyApp 207·externalTrackingApp 145·voiceAiApp 142·templateLibraryApp 102 등 18 네임스페이스 · v4.2.45 = 미니 스윕 3차 17(예약 빈 상태·이메일 캠페인 지표·평판 요청 표·WhatsApp 안내·'{기회} & Pipelines') · v4.2.44 = 연락처 상세 기회 패널 빈 상태(오브젝트 이름 변형 26) · v4.2.43 = 연락처 상세 머리 '{오브젝트} Details' 5 · v4.2.42 = 연락처 추가 패널 자리표시자 15·'추가 기회'→'기회 추가'·예약 모달 · v4.2.41 = 런치패드(설치 가이드) 카드 설명·진행 상황 14(신규 계정 첫 화면) · v4.2.40 = 평판 개요 _text 21·대화 결제 패널 빈 상태 4·_textScoped 4(r6JD 40화면 미니 스윕) · v4.2.39 = 연락처 상세 Ask AI 안내 배너 3 · v4.2.38 = 결제 상태(부분 환불됨·수동 결제 등) · v4.2.37 = 오브젝트 템플릿 분류 _textScoped 3 · v4.2.36 = 연락처 상세 AI 에이전트 채널 미연결 배너 _text 4 + 날짜 라벨 2 · v4.2.35 `978ddb7` = 전 화면 스윕(벤자민컨설팅 350라우트) 잔여 영어 _text 127 · v4.2.34 `8f99644` = 텔레메트리 잔여 706문구 직접 번역 · v4.2.30·v4.2.31 = 번역 라운드 6,710문구 독립 검수 교정 691건(결함률 약 10%, crmObjectsSettingsApp 키 밀림 58 복구 등) · v4.2.32 연락처 상세 새 UI 데이터 라벨 _text 10 · v4.2.33 Objects 사물→오브젝트. _text 9,361(core 배포분; pretty 9,368) · _textScoped 1,404 |
| 교차 출처 iframe (2026-11-07) | **캐너리 r6JD 가동(코드 안 `IFR_LOCS` — 로더가 stable 이어도 r6JD 에서만)** — 로더 v4.21.14+ (지금 stable v4.21.16) + 엣지 Worker **`hc-ifr-proxy` v0.3.0**(2026-11-08 배포 버전 e9ca76f8 — 해시 자산 `max-age=31536000, immutable`, 그 전 v0.2.0 d39efcf1, 라우트 `app.hyperclass.ai/__ifr/*`·`/assets/*` Fail open, workers.dev 끔, 소스 `workers/hc-ifr-proxy`). 자동화 워크플로우·비즈니스 프로필 iframe 을 같은 출처로 중계해 기존 pass·mo 를 iframe 문서에도 건다(IFR_LOCS 로케이션에서 부팅했을 때만, Worker 헬스 `x-hc-ifr` 확인 뒤에만). 라이브 실측(r6JD, 읽기만): `status().ifr` on·ok·frames 1~2·fail null · 워크플로우 목록 거의 전부 한국어(이름·상태·총 등록 수·최근 수정·통계·게시됨·날짜 '2026년 7월 30일 오후 5:57'·이전/다음·10 / 페이지·검색) — 남은 영어 UI 4(Deleted·New smart list·Customize list·Created on), 나머지는 워크플로우 이름(데이터) · 빌더 탭·저장됨·추가·트리거 카드 한국어, 남은 영어 Draft·Publish·액션 노드 이름·END · 비즈니스 프로필 로드·제목 한국어, 필드 라벨 약 40 영어(사전 없음). 실패 요청 0(비즈니스 프로필 `check-whitelabel-domain` 400 은 브랜드 도메인 빈 계정에서 같은 현상). **결정**: DECISIONS 2026-11-07(11-06 '자동화 화면은 영어로 둔다' → 캐너리 관찰로 대체). **다음**: ① 며칠 관찰(자동화 저장·트리거 편집은 벤자민이 평소대로 써 보며 확인) ② iframe 미번역 사전 보강(`docs/research/iframe-proxy-2026-11-06.md` §7 목록 + 위 남은 것) ③ 전체 전 **Workers Free 플랜 한도(계정 전체 10만 요청/일, CPU 10ms)** 판단 — 워크플로우 화면 첫 방문 1회에 프록시 요청 약 250(해시 자산은 이후 브라우저 캐시), 한도 초과 시 fail-open 이라 iframe 에 메인 앱이 뜬다 → 유료($5) 전환 또는 Worker 캐시 후 IFR_LOCS 확대 ④ 끄기: `localStorage.hcKoIfr='0'`(브라우저) · Worker 라우트 삭제(전체) · `loader.next` → `3fe299e`. **빌더 iframe 실측(2026-11-08 새벽)**: 폼·설문 빌더 `leadgen-apps-form-survey-builder.` 를 단독으로 열면 같은 출처 요청 5개(번들 3.1MB)뿐 — Workers Free 부담 작음. Vue + vue-i18n(`builderApp`, en-US 외 12로케일, 한국어 없음), 카탈로그 1,690, 지문 `builderValidation\|common\|fields\|form\|integrate` → 중계 확대 시 ⑩ 방식으로 한국어화 가능(번역 1,690 필요). 문서·계약 템플릿 편집기는 `leadgen-apps-template-builder.`(별도 도메인). 대기 PR: #109(로더 v4.21.15, main 위로 리베이스·ifr 하네스 20단언 통과) · #123(ifr 사전 별도 파일, scripts — 벤자민 승인) · #116(Worker immutable 캐시, 미배포) |
| 로더 (메인) | **v4.21.16 `e836453`(cdn `ecc672e`) = 포인터 `loader.stable` = `next`** — 2026-11-08 전 고객(벤자민 '다 반영'). v4.21.16 = 상단 알림 배너 '소셜 플래너 계정 연결 만료' 문장·'Re-integrate' → '다시 연결'(서버 문장, 고객 2곳 실측). **v4.21.15 `d1fabc7`(cdn `2b1ce81`)** 같은 날 승격 = ① 열거값 메뉴 옵션 ② 한국어 라벨+영어 날짜 ③ 상대 시각 ④ 상태 칩·알약 ⑤ 'Companies (0)'·'0 items'·'1 - 10 of 355'→'355개 중 1–10' ⑥ 월 이름 단독 ⑦ 고정 패턴(기회 위험 규칙·인보이스 요약 카드) ⑧ 대화 타임라인 시스템 이벤트 줄 ⑨ 쌍점 라벨+상태값 ⑩ 중계 iframe 앱 카탈로그 병합(`hc-ko-app-ifr.json` 을 IFR 이 붙을 때만). v4.21.14(iframe 중계 — `IFR_LOCS` r6JD 에서만 동작) 포함. 롤백 = stable 을 `2b1ce81`(v4.21.15) 또는 `3fe299e`(v4.21.13). 그 전 이력은 DECISIONS·git log |
| 연락처 상세 새 UI | 2026-11-05 apps 그룹 신설: `record-details-new-ui`(549)·`contact-conversation-panel`(2,824) — 소유자·팔로워·태그·기본 정보·메모 패널·대화 작성기 등. 카탈로그는 화면 덤프(`data/contact/contact-apps-en.json`). 화면 확인은 다음 브라우저 연결 때 |
| 포털 (2026-11-05) | 고객 포털이 Nuxt(#__nuxt) → Vite 앱(#app)으로 바뀜(community.hyperclass.ai 는 아직 #__nuxt). 포털 사전 **v4.3.3** `1e4c43f`(v4.3.0 새 키 546 · v4.3.1 로그인·회원가입·비밀번호 찾기 _rules 25 · v4.3.2 미니 달력 '2026년 11월'·월/연 선택 패널·학습 탭 코스 태그 · v4.3.3 탭 제목 'Client Club'(GHL 포털 이름) → '회원 포털') · 포털 로더 **v4.1.3 `d1e55a0` = stable**. 베일 CSS v1.1.0(#app 포함). 회원 화면 실측(로그인 상태): 계정 설정 7탭·알림 2탭·커뮤니티 홈/멤버/리더보드/소개/학습/이벤트/설정·코스·로열티·대시보드 — 영어는 사용자 데이터·예시값뿐 |
| 포털 일괄 적용 | 러너 `tools/portal/hc-portal-ko-runner.js` v1.2.0(= 프로젝트 문서 `claude/hc-portal-ko-runner.js`) + PORTAL-ROLLOUT C5(내부 API `PUT /clientclub/portal-settings/{id}` **설정 객체 전체**, 맨 위 덧붙임·전 필드 비교·자동 원복). 벤자민 승인 2026-11-05. **포털 있는 18곳 중 17곳 설치**(1곳 제외 — 기존 JS 에 꺾쇠). 포털 없는 11곳은 포털 생성 후 `HCPK.run(id)` |
| 계정별 점검 (2026-11-08) | 서브계정 28(제외 1r0p). **메인 앱**: 27곳 대시보드에서 로더 v4.21.15→16·rev `01a7675` 확인(회원 소유 1곳은 화면을 열지 않음 — 같은 전역 경로), 남은 영어는 약어(SMS·CPC)·사용자 데이터 + 소셜 연결 만료 배너(고객 2곳 → v4.21.16). **포털**: 18곳 중 17곳 한글팩 설치(TP LAB 은 기존 JS 꺾쇠 — 결정 대기), 포털 없는 10곳은 포털 생성 뒤 `HCPK.run(id)`. **알림 이메일**(읽기 전용 점검): 기존 27곳 포털 59·인보이스 17·영수증·캘린더 모두 한국어 유지. **신규 '스냅샷 마스터'(buBP…) 만 미적용** — 드라이런: 포털 59·인보이스 17·영수증 제목·캘린더 동의 문구 1(러너 실행은 벤자민 확인 대기) |
| 마켓플레이스 앱 | 제출 패키지 `marketplace/`: 자체 포함 Custom JS 번들 v1.0.0(로더 4.21.11 · 사전 REV cc05419 — 원격 스크립트·console·텔레메트리 없음, '하이퍼클래스'→'플랫폼'), 영/한 설명(날짜 형식 기능 포함)·심사 메모·로고·개인정보처리방침 초안·스크린샷 촬영 목록. 마켓 Custom JS 는 앱 화면 전용 — **포털·커뮤니티에는 닿지 않음**. 목표 11-11 제출(심사 최대 영업일 10일). 개발자 계정·제출·가격·개인정보처리방침 URL 은 벤자민 |
| 부트스트랩 v1.3.0 | `3bc900d` (`?hcch=next|stable` 7일 고정) — **엣지 배포 완료**(Claude Chat, Cloudflare 대시보드, Worker 버전 b60d5e58 100%). 무쿠키로 엣지 HTML 부트스트랩 src @3bc900d · `__hcBoot` 1.3.0 확인 |
| 에이전시 CSS | **v2.0.0 칸 교체 완료**(2026-10-31, Claude Chat) — 운영 `<style>` = 레포 25401d2 파일에서 끝 줄바꿈만 뺀 것(SHA-256 `13048563…` 일치, 한글 content 1·font-size:0 0). S5 10:58Z·11:03Z(5분 뒤) app 3화면 영문 0, 캡처 정상(재설정 화면 환영 문구 없음). ⚠️ GHL 칸은 저장 시 끝 줄바꿈을 버린다 — 해시 대조는 끝 줄바꿈 제외 |
| 포털 | 패키지 완료: 포인터 `data/hc-portal-rev.json`(rev = main 사전 v3 `0f4e2d5`, loader `028b315`) · 슬롯 `js/portal-slot.js` v1.1 · 베일 `css/portal-custom.css` v1.0.1 · 부트스트랩 v1.0.1 · 로더 v4.0.1. 실배포 산출물 헤드리스 E2E 통과(/login·/forgot-password 한국어, 베일 1~2.3초). **슬롯 미설치(벤자민)** |
| 포털 사전 v4.0.1 | **머지 완료** 4e21458(PR #10) → 포털 포인터 `rev` = 4e21458(2e40929, CI 통과, CDN=raw=local). 슬롯 설치(벤자민) 뒤 라이브 |
| 포털 슬롯 | **설치 완료**(2026-10-31, Claude Chat) — 새 탭: 부트스트랩 next 028b315 · 포털 로더 applied · lang ko · 대시보드·코스·커뮤니티·리더보드·계정 영문 0. 옛 위젯 코드는 Custom JS 가 아니라 **Footer Code 칸**에 있었고 삭제. ⚠️ 포털 칸 편집기는 저장 시 코드를 자동 정렬 → 대조는 해시가 아니라 정규화(공백 제거) 내용으로 |
| B4 잔존 | ① 탭 제목(Courses·Communities·About·Courses in) ② 코스 상세 Start Course ③ 강의 페이지 Products / · Instructor only · {n} Lessons · Instructor · Instructor Name·Title ④ 댓글 자리표시자 Add a comment · 상대 시각 5mo·1w ⑤ 이벤트 달력 요일·월·날짜(날짜 라이브러리 로케일) ⑥ 동영상 플레이어 툴팁. **단서**: Instructor·Instructor Name·Instructor only·Lessons·Add a comment 는 카탈로그에 한국어로 있는데 영어로 보임 → 코스·강의 화면은 별도 Vue 앱(i18n 인스턴스)일 가능성. 방안·진단 스니펫 = 2026-10-31 보고 |
| B5 | 두 그룹 칸에 v3.0.1(레포 js/community-i18n-loader.js 와 동일)이 남아 있음 — 그룹 설정 저장 버튼이 업데이트 요청을 보내지 않아 제거 못 함(GHL 쪽 문제) |
| 포털 로더 v4.1 | **v4.1.1 `be60383` = 포털 포인터 `loader.next`(캐너리 community.hyperclass.ai = 현재 유일한 포털) · 사전 v4.1.0 `114119b` = `rev`**(규칙 11·제목). stable 은 028b315(v4.0.1, 새 키 무시). 적대적 리뷰 반영(규칙 route·정확 범위·성능·composer 별 remote 상태·ns 감시·status 안전·v3 messages 무력화·$ 안전·hasOwn). **라이브(공개 페이지, 새 컨텍스트) 확인 2026-10-31 22:08 KST**: 피드 상대 시각 1년 전·6개월 전·36분 전·1시간 전·1주 전, 시각 툴팁 '2025년 9월 20일 (토) 오후 03:32', 이벤트 달력 요일·'2026년 10월'·미니 달력 요일·'오후 8:00'·'이벤트가 없습니다'. v3.0.1 은 공개 그룹 페이지에서 v4.1 보다 **먼저** 돌아 무력화로 처리(v3 의 범위 없는 _text 8개가 그 전에 한 번 적용될 수 있음 — 근본 해결은 그룹 칸 제거). 잔존: 미니 달력 머리 'Oct 2026'(노드가 'Oct'·'2026' 로 나뉨)·시간대 'Asia/Seoul (GMT+09:00)'. 대기: remote 카탈로그 덤프(오너) → `remotes` 추가 → 오너 화면 확인 → stable. Instructor Title 은 코스 데이터(벤자민). 강의 동영상 Loom iframe 범위 밖 |
| 포털 v4.1.2 | 로더 v4.1.2 `87e211a`(사전 `_css` 주입) = `loader.next` · 사전 v4.1.1 `50fd74c` = `rev`. 오너 확인(Claude Chat, 로그인 새 탭): ✅ 피드 상대 시각 · Plyr(재생·일시정지·10초 뒤로/앞으로·음소거·자막·설정·전체 화면, aria-label 포함, PIP 만 원문) · 탭 제목 '코스'·'○○ 코스'. ❌ 2건 → 반영: 'About ○○' 제목 패턴(라이브 22:32 KST '하이퍼클래스 커뮤니티(무료) 소개') · TipTap 댓글 칸 'Add a comment'(CSS ::before attr — `_css` `[placeholder="Add a comment"] p.is-editor-empty::before` → '댓글을 입력하세요...', 오너 화면 재확인 필요). remote 카탈로그 덤프는 메시지 50,000자 제한으로 잘림 → 파일 다운로드 스니펫(~/Downloads/hc-remote-membership-en.json)으로 재요청 |
| 포털 v4.2 | **사전 v4.2.0 d4f5e87**(Claude Chat 제공 완성본, sha256 8f546248… — remotes.membership 1,137키 + voiceNote.resume '녹음 재개') → **v4.2.1 c77f16e**(코스 템플릿 영문 기본값 _rules 3: remote 앱 안 버튼·강사 카드·제목 정확 일치) = 포털 포인터 `rev`. 로더 **v4.1.3 d1e55a0**(remote 병합 경로·시각 기록 status().remotes.membership.first/last = mo|boot|poll) = `loader.next`(캐너리 community), stable 은 028b315 그대로. 독립 검증: JSON · vue-i18n 컴파일 6,571 오류 0 · 영문↔한국어 1,137 · 화이트라벨·GHL 번호 0 · 자리표시자 불일치 = 의도된 {plural} 4 · 한글 없는 값 = 의도된 영문 6 + 기호 20. 보관: data/portal/remote-membership.{ko,en}.json. 라이브(공개 페이지 23:51 KST): 로더 4.1.3·사전 4.2.0 applied. **대기: 오너가 코스 상세·강의 페이지 확인 → 벤자민 확인 → stable 승격** |
| PR | **#9 → #10 → #11 머지 완료**(2026-10-31, 머지 커밋 2f62775 · 4e21458 · f47db07, 각 사이 워크플로 완료 확인). S5 센서 Actions 수동 실행 성공(login·sense) — 매일 00시 UTC. validate C14 가동 |
| 트랙 E 결제 페이지 | **준비 완료·미배포**(벤자민 지시). 사전 `data/hc-ko-payments.json` v1.0.2 `5533c0a`(337키, 구독 동의 승인안 고정) · 로더 `js/hc-pay-loader.js` v1.0.1 `c3d2465`(SRI) · 포인터 `data/hc-pay-rev.json` · Worker v0.4.0(레포만, 테스트 39/39, CI 결제 게이트) · `PAYMENTS-ROLLOUT.md`(배포 순서·롤백). 실 Worker 주입 HTML + jsDelivr 로더 시뮬: 영문 49→5. 대기: Worker 배포 → DNS `links` Proxied(벤자민 승인) · 트리거 링크 URL · 제외 계정 결정(ⓐ 수용 / ⓑ excludePaths) |
| S5 점검 | `scripts/login-check.py`(PR #11) 무쿠키 6화면 — 승격 전 154 → **승격 후 97**: app 로그인·재설정·SSO **영문 0**(lang ko), 포털 3화면 97(슬롯 미설치). 포털 슬롯 설치 뒤 재측정 |
| C1 스냅샷 | **포털 설정은 스냅샷으로 복제되지 않음**(벤자민: Linked assets 에 Client Portal·Communities 없음, GHL ideas "Client Portal and Groups in Snapshot" = Planned) → C3 확정: 온보딩 체크리스트 1단계 + 계정별 수동(PORTAL-ROLLOUT 4절) |
| 발견한 번역 오염 2건 | ① 에이전시 CSS v1.3.0 의 `.foot-note::전`·`.h6::후`(약관 안내·재설정 완료 메시지가 투명) ② 포털 슬롯 위젯 코드의 `참/거짓`(실행 시 ReferenceError, 위젯 치환 미동작). **교훈: 코드 칸에 번역기·번역 확장을 거친 텍스트가 들어가면 키워드가 한글로 바뀐다 — 칸 정본은 레포, 붙여넣기 전 SHA-256 대조** |
| 사고 기록 5 | push 직전 `pull --rebase` 로 커밋 SHA 가 바뀌어 슬롯·포인터가 미푸시 SHA(3c71af8)를 가리킨 채 한 번 푸시됨 → 1aab419 로 정정(내용 diff 0, 미설치 상태라 영향 없음). **교훈: 다른 커밋의 SHA 를 박는 커밋은 그 SHA 를 먼저 push 해 확정한 뒤 만든다.** CI 조상 게이트가 이후 재발을 막는다 |

**갱신** 2026-10-28 (한글화 2.0 1단계 완료·2단계 코드 완료(배포 대기) · 부트스트랩 v1.0.0 — 로더 SHA 도 포인터로 · 확인입력 어댑터 v1.0.0 · 로더 v4.12.0(REV_BUILTIN 3b82727) · 사전 v4.2.8 보류 제외 2건 확정 · **슬롯 1줄째 `@c25c941…/js/hc-bootstrap.js` 교체 완료 · 라이브 검증 완료 · loader.stable=05f9cf7 승격**)

> 이전 갱신 2026-10-08 (v4.11.0 전 서브계정 개방 라이브 확인 완료 · 사전 v4.2.7 `_text` 단어 1개 키 335건 제거·C12 · CI C10 해소 · AI Studio 는 교차 출처 iframe → 확장 트랙)

## 한글화 2.0 — 1단계 (2026-10-28, 브랜치 `phase1-foundation`)

| 항목 | 값 |
|---|---|
| 실측(작업 0) | 콜드 캐시: 첫 페인트 1.2초 → GHL 이 `marketplace/custom-script` XHR 로 Custom JS 를 `#customJS` div 에 주입 → 로더 실행 4.0초 → core 병합 4.1초. **영문 플래시 ≈3초는 플랫폼 주입 시점**이 원인, 사전 수신은 0.1~0.3초. 재방문은 Cache Storage 로 네트워크 0 |
| 부트스트랩 | `js/hc-bootstrap.js` v1.0.0 — 커밋 `c25c941` 에 고정(슬롯 1줄째). 포인터 `loader{stable,next,canary,files}` 로 로더·어댑터 주입. localStorage `hcKoLoaderPtr` 캐시 → raw 포인터 → `@main` 폴백 |
| 로더 | v4.12.0 (REV_BUILTIN `3b82727` = 소킹된 v4.2.7). 게이트·병합 로직 불변 |
| 어댑터 | `js/hc-confirm-adapter.js` v1.0.0 — DNT 7종 모달에서 한글 입력('삭제' 등) → 영문 토큰 자동 변환, 병기 안내 |
| 포인터 | `loader.stable = loader.next = c25c941` · `canary = [r6JD1nsqtk6Oln28fgrj]` · `excludeLocations = [1r0pJRd1cQQ5DZsjSbc9]` (미결 #8 해소 — 제외 변경은 포인터 커밋) |
| 사전 | v4.2.8 — `agency.gdpr.`·`communitiesApp.universityCommunity.` 제외 확정(host 63 / apps 55 / _text 7 제거, _text 8,763). push 후 `ko-app-pointer.yml` 이 `rev` 전진 |
| CI | `ko-app-validate.yml`: bootstrap·adapter `node --check` + 꺾쇠 0 검사 추가 |
| 라이브 검증 (2026-10-28, Claude in Chrome) | ① 슬롯 `@c25c941/hc-bootstrap.js` + `@8fabb6a` 레거시 확인 ② 캐너리 `r6JD`: channel next → 로더 4.12.0·어댑터 1.0.1, rev `d32834c`(pointer-cache), textEntries 8,763, hits 83 ③ 타 서브계정 `5nssTmO95kobrfWUYa1o`: channel stable(c25c941), 로더 4.12.0·어댑터 1.0.0, 한국어 ④ 제외 `1r0p…`: 부트스트랩 excludeLocations 전달 → excluded true·영어 ⑤ 태그 일괄삭제 모달: '삭제'→DELETE 변환·버튼 활성(취소) → `loader.stable` 05f9cf7 승격 |
| 2단계 (2026-10-28, 브랜치 main) | ① `workers/hc-ko-edge` 엣지 주입 Worker + 로더 v4.13 베일 해제 — 로컬 7건 통과, **배포·DNS Proxied 전환은 벤자민 승인 대기** ② `workers/hc-ko-telemetry` + 로더 v4.14 리포터 + `ko-telemetry-digest.yml` — 로컬 9건 통과, **wrangler 배포·KV·시크릿·포인터 `telemetry.url` 대기** ③ `data/glossary.ko.json` 객체 52(결정 대기 ★9) + `scripts/glossary-audit.py` |
| 로더 채널 | `loader.stable` 05f9cf7(v4.12.0 · 어댑터 1.0.1) 전 고객 · `loader.next` = HEAD(v4.14.0, 텔레메트리는 포인터 url 없으면 무동작) 캐너리 r6JD |
| 2단계 가동 (2026-10-28 21:30 KST) | ✅ 글로서리 v1.0.0 확정(9건 권장안) ✅ `hc-ko-telemetry` 배포(`hc-ko-telemetry.red-boat-3cb2.workers.dev`, KV `0836915d…`, 토큰은 `~/.hyperclass/hc-telemetry-token`) + 포인터 `telemetry.url` + GitHub 시크릿 → 첫 집계 `data/reports/telemetry/2026-10-28.md` 봇 커밋 ✅ `hc-ko-edge` 배포 + **DNS `app` Proxied 전환(벤자민)** |
| 엣지 실측 (콜드, r6JD) | 부트스트랩 601ms(GHL app.js 627ms보다 먼저) → 한국어 병합·베일 해제 2,013ms → 첫 콘텐츠 페인트 2,040ms(한국어). **영문 노출 0ms** (종전 ≈3,000ms). 첫 페인트는 1.2s→2.0s 로 0.8s 늦어짐. 제외 계정 영어·베일 2.5s 타임아웃 해제, 타 서브계정 stable 정상, 콘솔 오류는 `?hcko=off` 와 동일(GHL 자체) |
| 롤백 | DNS `app` → DNS only(회색) 즉시. Worker 변수 `ENABLED="0"`. 포인터 `telemetry` 키 삭제 |
| 최적화 (2026-10-28 밤) | 엣지 Worker v0.3: 포인터 스냅샷 `window.__hcPtr`(60s 엣지 캐시) 주입 + 로더·어댑터·core preload + 브랜드 스플래시 베일 → 우리 자산 783ms 에 전부 도착(GHL app.js 이전), 첫 페인트 616ms(스플래시), 한국어 적용은 GHL 마운트 즉시(≈2.3s). 부트스트랩 v1.2(엣지 포인터·raw 폴백), 로더 v4.15(edge REV). `loader.stable` 승격 완료 |
| 글로서리 통일 | `round-merge.py --unify` 로 1,076건 치환 → 사전 **v4.2.9** 라이브(잔존 25). 정규 표기가 이미 있는 문장·오치환 위험 변형은 제외 |
| 자동 번역 루프 | 로더 **v4.16**(전 고객): 미번역 키 영어 원문을 ns 당 150쌍 동봉 → Worker v0.3 `en/<ns>/<key>` KV → digest 가 `data/telemetry/en-missing/<ns>.json` → `ko-translate-round.yml`(월·목 자동·수동)이 참조본 재사용→번역→글로서리·DNT→검증→**PR**. 머지 = 포인터 자동 전진. 브라우저 수동 추출 불필요 |
| 2026-10-29 오전 | ① **1라운드 PR #7** (사전 v4.2.18 후보, 687건: powerDialerApp 342·calendarComponentsApp 150·common 102·mediaCenterApp 73…) — 자동 리뷰 high 5 → 반영 → high 0, 2차 반영(녹화→녹음·반말·용어). **벤자민 머지 대기** ② `ko-round-review.yml` + `scripts/round-review.py`: 규칙 R1~R7 + Claude 검수 → PR 코멘트 ③ `ko-sensors.yml`: S1 매니페스트(main 2136, federatedApps 버전) 6h · S4 릴리스 노트 → 이슈 #6 ④ 로더 v4.16.1: EN 샘플 600자 이하만(잘림 금지) · 라운드 600자 이상 제외 ⑤ CI: 로더 포인터 SHA 실존 하드 게이트 |
| 사고 기록 | 10-29 01:3x UTC 포인터가 존재하지 않는 로더 SHA(79423a5)를 2분간 가리킴(번들 재사용 실수) → 긴급 수정 806749b. 영향: 그 사이 첫 로드한 세션은 1회 영어. 재발 방지: CI 게이트 + 번들 파일명 고유화 |
| 미결 | 레포 설정 "Allow GitHub Actions to create and approve pull requests" OFF → 라운드 워크플로가 브랜치만 밀고 PR 은 수동(벤자민 결정) |
| 2026-10-29 오후 | ✅ PR #7 머지(사전 v4.2.18, QC 4회: 자동 리뷰 2회 + 독립 서브에이전트 1회 + 조사 보정) → 포인터 자동 전진 → 라이브 확인(`__hcPtr.rev` b02578f, 녹취록). ✅ 레포 설정 "Allow GitHub Actions to create PRs" ON → 라운드 PR 완전 자동. ⚠️ **레거시 DOM 트랙 은퇴 시도 → 회귀 → 복구**: ALL-CAPS 표 제목 13건 `_text` 예외 등재(C12 예외 `[A-Z]{4,}`) 후 슬롯 2줄째 제거 → 연락처 표 머리글·툴바(Phone·Email·Tags·Filters·Sort·Import·All)가 영어로 회귀. 원인: 레거시 단어 1개 항목 1,574건은 i18n 카탈로그가 아니라 DOM 으로 쳐야 하는 문구였는데 "카탈로그 커버리지" 로 잘못 판정. **즉시 레거시 줄 복구**(02:5x UTC, 연락처 한국어 확인). 대책: 로더 **v4.17 `_textScoped`** — 단어 1개 항목을 UI 크롬(th·button·tab·menuitem·label·페이지네이션) 안에서만 치환(셀·옵션·칩·본문 제외 → 고객 데이터 보호). 사전 v4.2.20 `_textScoped` 1,362건(글로서리 적용, 2자 키·해요체·~이다 폐기), validate C13, playwright 단위 테스트 17/17. 캐너리 next → 텔레메트리로 4.17.0/4069893 부팅 확인 → stable 승격(cf7174d) → **레거시 줄 은퇴 완료(03:4x UTC)** → 연락처·대화·기회·캘린더 새 세션 육안 검증 전부 한국어(필터·정렬·가져오기·전화번호·이메일·회사명·태그). 텔레메트리 koRatio 변화 없음 |
| 사고 기록 3 | **텔레메트리 KV 무료 한도 초과**(벤자민이 Cloudflare 메일로 발견): 영어 원문을 키 하나씩 put(이벤트당 ≤400) → 10-28 하루 put 1,000 초과 → put 429 → 10-28 오후~10-29 00:00 UTC 보고 유실(10-29 오전도 구버전 Worker 가 400 거부). Worker **v0.4**: ns 당 블롭 1개(enb/<ns>)로 합쳐 새 키 있는 ns 만 put(이벤트당 ≤6), 레이트리밋·일일 put 예산(800)은 Cache API 로 계수(KV 쓰기 0). 유료 플랜 불필요. digest 에 loaders/revs 집계 추가 |
| 사고 기록 2 | 10-28 글로서리 통일 치환이 받침 불일치 7건(스마트 리스트으로·스토어을) 남김 → 수정. 수정 중 전역 조사 교정기가 동사 어미('있는→있은')를 깨뜨리는 것을 diff 에서 발견·폐기 → **명사 범위 한정 `fix_josa_after`** 로 대체(round-merge 내장) |
| 2026-10-29 ⑤ | **인앱 문구 신고**: 로더 v4.18 — 화면 글자를 Alt+Shift+클릭 → 원문·부모 요소·라우트를 Worker `/report` 로(세션당 20건, 토스트 확인). Worker v0.5 `/report` + digest `reports`. 일일 집계가 `data/telemetry/reports.json` 누적 + 이슈 "문구 신고" 코멘트. 처리 규칙: 단어 1개 → `_textScoped`, 그 외 → `_text`/카탈로그, 반영 후 reports.json 에서 삭제 |
| 사고 기록 4 | 레거시 은퇴 직후의 "연락처 한국어 확인"은 **GHL 이 캐시한 옛 Custom JS(레거시 포함)** 를 보고 한 오판. 새 탭(13:14 KST)에서 머리글 영어 확인 → 원인: `_textScoped` 조상 탐색 3단계인데 GHL 표 머리글 텍스트는 th 아래 4단계+ → **v4.18.1(깊이 8)** 을 stable 로 바로 올려 수정(13:3x KST, 새 탭 한국어 확인). 노출: 약 40분간 표 머리글·툴바 단어 영어. 교훈: 슬롯 변경 검증은 **반드시 새 탭 + 5분 뒤** |
| 2026-10-29 ⑥ | **커뮤니티 트랙(community.hyperclass.ai) 범위 조정**: 오너 계정 실측 — 클라이언트 포털·커뮤니티가 GHL 네이티브 ko 로케일로 거의 전부 한국어. 잔존은 배지 안내·코스 필터·Loyalty 등 12건(manual-dict 등재, hc-dict 재빌드)과 상대 시각("2 days ago"·"1/10 lessons", 패턴형 — 정확 일치 사전으로 불가). 부트스트랩·포인터·텔레메트리 이식은 **보류**: 플랫폼이 오너/관리자에겐 Custom Code 를 주입하지 않아 라이브 검증 불가 + 잔존이 적어 투자 대비 효과 낮음. 사전은 이미 raw@main 으로 슬롯 교체 없이 갱신됨 |
| 2026-10-30 ⑥ 정정 | **⑥ 의 판단은 틀렸다 — 커뮤니티 트랙 보류를 뒤집는다**(작업지시서 v1). ① "GHL 네이티브 ko 로케일로 거의 전부 한국어"는 **벤자민 크롬의 번역 확장이 DOM 을 바꾼 화면**이었다. 확장 제거 후 포털은 사이드바·제목·버튼 전부 영어. 2026-10-31 헤드리스 무쿠키 실측: `community.hyperclass.ai/login` 의 i18n 로케일 13개(da·de·en·es·fi·fr-CA·fr-FR·it·nl·no·pt-BR·pt-PT·sv)에 **ko 없음**, en 외 12개는 0키, en 63 ns · 5,393키. ② "오너·관리자에겐 Custom Code 미주입"은 **그룹 슬롯에만** 해당한다. **포털 레벨 슬롯**(Client Portal → Settings → Branding → Advanced → Custom JS, `#cp-siteCustomFooter > script[data-cp-custom-code=footer]`)은 오너 세션과 비로그인 `/login` 양쪽에 들어간다(10-31 비로그인 DOM 에서 1,382자 확인) → 오너가 직접 검증 가능, 포털 로그인 화면까지 한 슬롯으로 덮는다. 후속: `PLAN-portal-login.md` 트랙 B |
| 2026-10-29 ⑦ | **교차 출처 iframe(AI Studio vibe 빌더) 결정 대기**: Custom JS 로는 원리상 불가. 선택지 ⓐ 영어 수용(권장 — 확장은 고객에게 안 닿음) ⓑ 벤자민 본인용 크롬 확장 유지 ⓒ GHL 에 로케일 요청. 벤자민 결정 필요 |
| 2026-10-29 주기 | **번역 라운드 주기 2주로 조정**(벤자민): `ko-translate-round.yml` 매주 월 10:47 KST 기동, 짝수 ISO 주만 실행(수동 Run workflow 는 항상). 다음 자동 라운드 = 다음 짝수 주 월요일 |
| 2026-11-03~04 신규 계정 | 신규 계정 A(신규 서브계정) 메뉴가 운영 계정보다 영어 많음 제보 → 원인: 계정 설정 차이 아님(엣지·로더·사전 동일). 빈 화면·첫 설정 문구가 사전에 없었고 `en-missing` 15,679키 누적(그중 8,325키는 참조본에 같은 원문 번역 있음) → **PR #12**: v4.2.22 참조본 seed 8,325 + v4.2.23 `_text` 219·`_textScoped` 7(신규 계정 A hc-gap sweep) → **QC**: 자동 리뷰는 앞 600건 표본만 보므로 나머지 7,725건 독립 검수 5갈래(지적 585) + 자동 리뷰 31 + R6 26 → 533건, 2차 리뷰 medium 4건 → high 7→0 → 머지 91d4c5f → 포인터 fbc036f → 신규 계정 A 기회·평판·상품·이메일 마케팅 라이브 확인. 잔존 5,675키(신규 번역 필요)는 다음 라운드. 교차 출처 iframe(자동화 빌더·비즈니스 프로필)은 범위 밖. **용어**: Won/Lost → **고객전환성공/고객전환실패 확정**(벤자민 11-04, PR #13 v4.2.24 — 참조본 150키·`_text` 33·`_textScoped` 4, DECISIONS.md) · DND→수신거부·Notes→메모·단독 Delete 원문 유지 확정(11-04, PR #14 v4.2.25) · (이전 결정 대기 항목: DND 현행 'DND' 혼용(수신거부/방해 금지) · Notes 메모 126 : 노트 90 혼용(이번 PR 은 메모로)) · **발견**: 새 연락처 상세 UI 앱 2개(`record-details-new-ui` fp `DnDChannels|addAssociations|archiveUnarchiveConversation|callContactPhone|changeAlert` 549문구, `contact-conversation-panel` fp `24h|24hDescription|48h|48hDescription|72h` 2,824문구)가 apps 사전에 없어 unmatched — Owner·Followers·Tags·General Info·메모 패널 제목 등 영어 잔존의 원인. 다음 라운드에서 apps 그룹 신설 필요 |
| 다음 손 | 없음(자동). EN 풀이 차면 2주마다(짝수 주 월) 라운드 PR → 자동 리뷰 → Claude 가 QC 후 머지 → 벤자민은 PR 에서 용어만 훑고 머지. 즉시 돌리려면 운영 계정에서 대시보드·AI 스튜디오·통화·리포팅 화면을 새 탭으로 몇 번 열면 풀이 빨리 찬다 → Actions "번역 라운드" Run workflow |

## 배포 좌표

> 2026-10-31 현행화(트랙 D). 이전 표(로더 v4.11.0 · 2줄 슬롯 · 레거시 핀)는 git 이력(`git show bf833aa:docs/STATE.md`)에 있다.

| 항목 | 값 |
|---|---|
| 사전 버전 / REV | **v4.2.25** / `a94c7e0` (2026-11-04, `_text` 9,000 · `_textScoped` 1,369, Delete 198곳 제외) — 이전 v4.2.24 `6812408` — 포인터 `data/hc-ko-app-rev.json` 의 `rev` 가 정한다(봇 `ko-app-pointer.yml` 전진) |
| 로더 | **v4.19.0** / `3bc900d0da3c010a442d336f26f150b9084a7d4d` — stable = next (2026-10-31 승격). 이전 stable v4.18.1 `a2e7596`. 내장 `REV_BUILTIN` = `3b82727`(v4.2.7, 소킹분) |
| 어댑터 | `js/hc-confirm-adapter.js` — 로더와 같은 커밋에서 부트스트랩이 주입 |
| 부트스트랩 (엣지) | **v1.3.0** / `3bc900d0da3c010a442d336f26f150b9084a7d4d` (2026-10-31 배포, Worker 버전 b60d5e58) — 이전 v1.2.0 `047b529` — `workers/hc-ko-edge/wrangler.toml` `BOOTSTRAP_SHA`. app.hyperclass.ai 모든 HTML(비로그인 포함) `<head>` 맨 앞 |
| 부트스트랩 (에이전시 슬롯) | **v1.0.0** / `c25c941dfe4cee25495a225c8c577f534aec6946` — Custom JS 칸 1줄. 엣지가 있으면 `if (window.__hcBoot) return` 가드로 **무동작**(파일만 받음). 엣지 OFF(DNS 회색) 시의 폴백 경로 |
| 엣지 Worker | `hc-ko-edge` v0.3.0 (베일·`__hcPtr` 스냅샷·preload·부트스트랩) · `hc-ko-telemetry` v0.5 (`/r`·`/report`) |
| 레거시 DOM 레이어 | **은퇴 2026-10-29 03:4x UTC** — 슬롯에서 제거. 단어 1개 항목은 로더 v4.17+ `_textScoped`(UI 크롬 한정). 롤백 = 슬롯에 `@8fabb6a/js/dashboard-ko.min.js` 줄 복구 |
| 제외 로케이션 | 포인터 `excludeLocations` = `[1r0pJRd1cQQ5DZsjSbc9]` → 부트스트랩이 `window.HC_I18N_EXCLUDE` 로 세움(미결 #8 해소). 로더 내장 폴백도 같은 값 |
| CDN 삼중 대조 | 부트스트랩·로더·사전 모두 jsDelivr `@40자 SHA` = raw = local (SHA-256), `immutable`, CORS `*` |

Custom JS 칸 (Agency Whitelabel → Custom JavaScript) — 2026-10-29 레거시 줄 제거 후 (벤자민 확인 기준):

```html
<script src="https://cdn.jsdelivr.net/gh/benjaminhyperclass/hyperclass-help-ko@c25c941dfe4cee25495a225c8c577f534aec6946/js/hc-bootstrap.js"></script>
```

(`<script>window.HC_I18N_EXCLUDE=[…]</script>` 줄이 남아 있어도 무해 — 포인터와 같은 값이면 결과가 같다.)

**부트스트랩 이중 로드 판정 (2026-10-31, 트랙 D)** — 엣지 `047b529`(v1.2.0) ↔ 슬롯 `c25c941`(v1.0.0) 차이는 **의도된 것은 아니었지만 무해**하다.
근거: ① 엣지 스크립트는 `<head>` 맨 앞의 동기 `<script src>` 라 GHL 이 Custom JS 를 XHR 로 주입하는 시점(콜드 ≈4초)보다 항상 먼저 실행된다.
② 부트스트랩 첫 줄 `if (window.__hcBoot) return;` 가 두 번째 실행을 막아 로더·어댑터는 1회만 주입된다(10-31 무쿠키 실측: `__hcBoot.status()` source `edge`, version 1.2.0).
③ 엣지가 꺼지면 슬롯 v1.0.0 이 단독으로 돌며, v1.1·v1.2 에서 더해진 것(엣지 포인터·raw 재시도)만 빠진다 — 기능 저하일 뿐 장애는 아니다.
→ `wrangler.toml` 주석의 "슬롯 1줄째와 같은 값"을 정정한다. 폴백 기능까지 같게 하려면 **벤자민이 슬롯 SHA 를 엣지와 같은 값으로 교체**(선택, A2 의 부트스트랩 v1.3 이후 그 SHA 로 한 번에).

## 라이브 확인값 (`__hcKoApp.status()`)

| 시점 | 로더 | rev | host | textEntries | 라우트 | 확인자 |
|---|---|---|---|---|---|---|
| 2026-09-09 (v2 슬롯 교체 후) | 4.9.2 | `81a235c…` | 1 | 9,094 | `/v2/location/r6JD1nsqtk6Oln28fgrj/ai-agents/agent-studio` · `…/super-agents/agent/new` | Claude Chat (크롬) |
| **대기** (v4.10 슬롯 교체 후) | 4.10.0 기대 | 1차 로드 `81a235c`(내장) → 2차 로드부터 `c9879e0`(포인터, `revSource` pointer-cache) | 1 | 9,094 → 9,105 (2차 로드) | 목록 배너 "관리형 에이전트는"(공백 없음) · Recent agents · 템플릿 카드 3종 | Claude Chat |

| **2026-10-08 (v4.11 슬롯 교체 후)** | 4.11.0 | `c9879e0` (pointer-cache) | 1 | 9,105 | ① r6JD 대시보드 hits 42 ② 타 서브계정 `5nssTmO95kobrfWUYa1o` hits 43 (연락처·대화·캘린더 한국어) ③ `/agency_dashboard` allowed/booted false ④-a 제외 계정 직접 진입 excl true·영어 ④-b 서브계정→에이전시→제외 계정 전환 시 자동 새로고침·영어 | Claude in Chrome |

※ 관찰(오류 아님): `re-merge onboardingApp` 이 같은 초에 ~30회 — 원격이 네임스페이스를 쪼개 병합할 때마다 래퍼가 재병합하는 설계 동작. 일반 이동(강력 새로고침 아님) 시 부팅까지 ~11초. 잔존 영문은 런타임 조합(`Search 연락처`, `7/75 columns`, `Page 1 of 2`)·날짜 표기 — `_text` 정확 일치 한계.

※ 종전에 적었던 "4.9.1 확인" 행은 실제 라이브 검증이 아니라 raw 재현값이었으므로 삭제했다.

| **2026-10-29 (레거시 은퇴 · v4.18.1)** | 4.18.1 | `4069893` (edge) | 1 | 8,776 (+scoped 1,362) | 연락처·대화·기회·캘린더 새 탭 육안 한국어(사고 기록 4 이후 재확인) · 텔레메트리 부팅 4.18.1/a2e7596 | Claude in Chrome · 텔레메트리 |
| **2026-11-04 (사전 v4.2.23)** | 4.19.0 | `fbc036f` (edge) | 1 | 9,000 (+scoped 1,369) | 신규 계정 A 기회·평판 개요·상품·이메일 마케팅 — 남은 영어는 날짜 형식·사용자 이름·건수(데이터) | Claude (크롬) |
| **2026-11-04 (사전 v4.2.24)** | 4.19.0 | `6812408` (edge) | 1 | 9,000 (+scoped 1,369) | 신규 계정 A 기회 상세 필터 상태값: 진행 중 · 고객전환성공 · 고객전환실패 · 중단 | Claude (크롬) |
| **2026-11-04 (사전 v4.2.25 · 로더 v4.19.1)** | 4.19.1 | `a94c7e0` (edge) | 1 | 9,000 (+scoped 1,369) | 캐너리 r6JD 연락처 상세 탭 '전체 필드·수신거부·작업', 메모 추가 버튼 '메모 추가', 신규 계정 A 연락처 DND 필터 '수신거부' | Claude (크롬) |

콘솔 판정 스크립트: `scripts/verify-deploy.js` (EXPECT 4.19.1 / a94c7e0 / 9000 — 2026-11-04 갱신). 갱신 직후 첫 로드는 옛 rev 일 수 있다(`revNext`) — 새로고침 후 재실행.

## 게이트

- `ALLOW = []` — **전 서브계정**(`/v2/location/<id>/…`) (v4.11, 2026-10-08 벤자민 지시). 라이브 전 고객 적용 중
- 비로그인 라우트(`/` 로그인·`/forgot_password` 등)는 **v4.18.1 까지 범위 밖**(`location:null` → `suspended:true`, 10-31 무쿠키 실측). v4.19 에서 PREAUTH 목록으로 연다(`PLAN-portal-login.md` A2)
- 원격 킬스위치: `data/hc-ko-app-rev.json` 의 `"off": true` → 다음 로드부터 전 고객 v4 중단
- 제외 `1r0pJRd1cQQ5DZsjSbc9` — 포인터 `excludeLocations` → 부트스트랩이 `window.HC_I18N_EXCLUDE` 로 세움(미결 #8 해소, 10-28). 로더 내장 폴백도 같은 값
- **에이전시 라우트(`/agency_dashboard` `/sub-accounts` `/snapshots` `/reselling`)는 v4 범위 밖** — v4.11 부터 빈 ALLOW 도 `/v2/location/` 한정. 레거시 은퇴(10-29) 뒤로 에이전시 화면은 **영어**다 — 고객 비노출이라 범위 밖(작업지시서 v1 결정 ⑤, 기록만).
- **교차 출처 iframe(워크플로우 `client-app-automation-workflows`, AI Studio `leadgen-vibe-ai-builder` 등)은 Custom JS 로 불가** — 크롬 확장(`~/Downloads/hyperclass-ko-ext`, `ghl-i18n-ko.json`+manual 사전) 트랙만 닿는다. 2026-11-05 조사: 워크플로우 iframe 은 부모와 **Postmate**(application/x-postmate-v1+json)로 핸드셰이크·모델(인증) 전달 + 출처 검사 → 같은 출처 프록시는 GHL 번들 패치가 필요해 비권장(영어 수용 + GHL 로케일 요청 권장).

## AI 스튜디오 (/vibe) — 2026-10-08

- 본문은 교차 출처 iframe `leadgen-vibe-ai-builder.leadconnectorhq.com` → **Custom JS(v4·레거시) 불가, 크롬 확장 전용.**
- 확장 사전(raw `ghl-i18n-ko.json`)에 455건 추가(eab3dd3). 제외 123건은 excluded-strings 의 `AI 스튜디오(vibe iframe) 2026-10-08` 분류.
- 한계: `{플레이스홀더}`·복수형 문구 40건은 확장이 화면 정확 일치라 번역 불가 (예: `Edited {time}`, `{count} files changed`).
- 고객 적용은 확장 배포(웹스토어 비공개 등록)가 선행돼야 한다 — 미착수.

## 미결

| # | 항목 | 상태 |
|---|---|---|
| 1 | `scripts/verify-deploy.js` EXPECT 갱신 (A) | ✅ 451b683 커밋 · v4.10 의미로 재갱신 76c557f |
| 2 | `%[A-Za-z_]+%` 플레이스홀더 검사 (B) | ✅ 1ec2e19 커밋, CI 초록 |
| 3 | CI 'REV↔사전 일치' 구조적 빨간불 (C) | ✅ 해소 — REV 포인터 방식(76c557f). validate 는 포인터·내장 REV 실존만 하드 게이트, 전진은 `ko-app-pointer.yml`(validate 성공 workflow_run) |
| 4 | 킬스위치 범위 | ✅ 레거시 은퇴(10-29)로 해소 — `?hcko=off` / `__hcKoApp.off()` / 포인터 `"off": true` 가 곧 전면 영어 |
| 5 | `hcEx()` 게이트를 `build-dashboard-ko.py` 템플릿에 반영 | C11 이 감시 중(템플릿·소스 ✅, min 은 다음 빌드) — 빌드 트리거(en.json 개행 토글) 전에 확인 |
| 6 | 스테일 핀 `8fabb6a` | ✅ 레거시 은퇴(10-29)로 소멸 — 롤백 경로로만 남음 |
| 7 | Managed Agents 표기 잔존 | `0 Managed Agents`(가변 숫자) — `_text` 정확 일치 한계 |
| 8 | `HC_I18N_EXCLUDE` | ✅ 2026-10-28 포인터 `excludeLocations` 를 부트스트랩이 전역으로 세움 — 제외 변경 = 포인터 커밋 1개. 슬롯 선언 줄은 불필요 |
| 9 | `_text` 11건 → 사전 4.2.6 | ✅ c9879e0 push → validate ✅ → ko-app-pointer 가 jsDelivr 대조 후 4ed156d 로 전진. **사람 손 0회** |
| 10 | 운영 규칙: `REV_BUILTIN` 은 소킹된 사전만 | 첫 방문·Cache Storage 없는 브라우저는 내장 REV 로 부팅하므로 갓 올린 사전을 내장하면 롤백이 늦게 닿는다. 큰 갱신 때만 올리고 그때 슬롯 교체 |
| 11 | 사전 push 직후 다른 push 금지(약 2분) | validate 가 cancel-in-progress 로 취소되면 포인터가 전진하지 않는다 → validate 를 workflow_dispatch 로 재실행하면 이어짐 |
| 12 | 에이전시 부트스트랩 슬롯 `c25c941`(v1.0.0) ↔ 엣지 `047b529`(v1.2.0) | 무해 판정(배포 좌표 절). 폴백 정렬은 벤자민 선택 — A2 부트스트랩 v1.3 SHA 로 한 번에 |

## 알려진 잔존 영문 (번역 대상 아님 또는 대응 불가)

- `0 Managed Agents` — 숫자 가변, `_text` 패턴 미지원
- 에이전트 템플릿 카드의 `Email Campaign` 은 기존 사전으로 이미 치환됨(이번 11건에서 제외)
- 에이전트 템플릿(use case) 판매자 콘텐츠 — 사용자·판매자 데이터, 번역 대상 아님
- 로케일 카탈로그 밖 하드코딩 문구 — `_text`(원문 정확 일치)로만 대응 가능. 노드가 분리돼 있거나 대시·따옴표 문자가 다르면 매칭 실패

## 관련 파일

- `data/DECISIONS.md` — 확정/기각 결정 (2026-09-09 Managed Agents→관리형 에이전트 [확정])
- `DEPLOY-v4.md` — 설치·라이브 확인 절차 (v4.12+ 부트스트랩 1줄 · 로더도 포인터)
- `PLAN-portal-login.md` — **진행 중** 커뮤니티·코스·로그인 라운드(작업지시서 v1)
- `PLAN-superagents.md` — 2026-09-09 두 라운드의 계획·진행 기록
- `data/reports/2026-09-09-superagents-ko-report.md`, `…-v2-report.md` — 라운드 보고서
