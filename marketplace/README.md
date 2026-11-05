# GHL 마켓플레이스 앱 — 한국어 UI 팩 (제출 패키지)

목표: 2026-11-11 까지 **마켓플레이스 심사 제출**. 심사는 최대 영업일 10일이라 공개는 그 뒤일 수 있다.

## 1. 이 앱이 하는 일 / 하지 않는 일

| | 내용 |
|---|---|
| 한다 | 앱을 설치한 **에이전시의 서브계정 화면(대시보드·연락처·대화·캘린더·결제·멤버십 관리 등)** 문구를 한국어로 바꾼다. 하이퍼클래스와 같은 사전·로더(v4.20)를 쓴다. 사전은 포인터로 계속 갱신된다(재심사 불필요). |
| 하지 않는다 | **클라이언트 포털·커뮤니티(clientclub.net·고객 도메인)는 바뀌지 않는다.** 마켓플레이스 Custom JS 는 HighLevel 앱 화면에서만 돈다. 포털은 서브계정마다 포털 Custom JS 칸에 한글팩을 넣어야 한다(`PORTAL-ROLLOUT.md`). |
| 하지 않는다 | 사용자·연락처 데이터를 읽거나 보내지 않는다. 텔레메트리·오류 보고도 끈다(하이퍼클래스 본 계정과 다름). |
| 하지 않는다 | 엣지 Worker 의 스플래시 베일이 없으므로, 첫 화면에서 영어가 잠깐(사전 도착 전) 보일 수 있다. 두 번째 방문부터는 캐시로 즉시. |

하이퍼클래스 자체 에이전시에는 설치하지 않는다(이미 슬롯·엣지 Worker 로 동작 중이며, 설치해도 `window.__hcKoApp` 가드로 중복 실행되지 않는다).

## 2. 번들

- 빌드: `python3 marketplace/build.py` → `marketplace/dist/hc-ko-marketplace.html`(Custom JS 칸에 붙일 `<script>…</script>`), `.js`(같은 내용, 태그 없음).
- 규정 대응
  - 원격 스크립트 금지 → 로더(`js/hc-ko-app-loader.js`)·확인입력 어댑터(`js/hc-confirm-adapter.js`) **코드 전체를 번들 안에** 넣는다. 원격에서 받는 것은 **번역 사전 JSON(데이터)** 뿐 — jsDelivr 의 커밋 고정 URL(`@<sha>/data/hc-ko-app-core.json`·`apps.json`)과 포인터 `raw.githubusercontent.com/.../data/hc-ko-app-rev.json`.
  - console.log 금지 → `log()` 를 빈 함수로. 난독화 금지 → 원본 그대로(주석 포함).
  - 사용자 데이터 전송 금지 → `telemetryUrl()` 이 항상 null.
- 브랜드 중립화: 사전 속 화이트라벨 표기 `하이퍼클래스`(409곳)를 **`플랫폼`** 으로 바꾼다(조사 교정: 가→이, 를→을, 는→은, 와→과, 로→으로). 파싱 직전에 바꾸므로 사전은 하나로 유지된다.
- 로더 **코드**를 고치면 번들을 다시 빌드해 **재심사**를 받아야 한다. 사전·용어 수정은 포인터로 바로 반영된다.

## 3. 벤자민이 직접 해야 하는 일 (로그인·제출)

1. **개발자 계정**: marketplace.gohighlevel.com 에서 가입·로그인(에이전시 계정과 별개).
2. **앱 만들기** (My Apps → Create App)
   - App Name: `Korean Language Pack (한국어 UI 팩)` — `LISTING.md` 참고
   - App Type: **Public**(마켓 공개) — 먼저 Private 로 만들어 자체 시험 후 Public 전환도 가능
   - Target User: **Agency** / Who Can Install: **Agencies Only** (Custom JS 는 에이전시 배포형만 가능)
   - Listing Type: White-label
3. **Profile**: 로고(`assets/logo-512.png`), 카테고리, 회사명(근하 / Hyperclass), 설명·스크린샷(`LISTING.md`).
4. **Modules → Custom JS**: `dist/hc-ko-marketplace.html` 내용을 그대로 붙여 넣는다(맨 앞 `<script>`, 맨 끝 `</script>` 포함).
5. **Advanced**: Scopes 는 최소(필요 없으면 비움 — 이 앱은 API 를 쓰지 않는다). Redirect URL 이 필수면 `https://hyperclass.ai/marketplace/installed`(안내 페이지) 같은 정적 페이지 하나.
6. **Pricing**: 무료 / 유료(월 구독) — **벤자민 결정**.
7. **Submit for review** — 심사 메모는 `LISTING.md` 의 *Notes for reviewers* 를 붙여 넣는다.

## 4. 남은 결정·자료

- [ ] 가격(무료·유료, 금액)
- [ ] 개인정보처리방침 URL — 초안 `marketplace/PRIVACY.md`(영/한)를 웹페이지로 게시하고 URL 등록. **바로 쓸 수 있는 임시 URL**: `https://github.com/benjaminhyperclass/hyperclass-help-ko/blob/main/marketplace/PRIVACY.md`(공개 레포라 지금 열린다 — 심사관이 내용을 읽을 수 있으면 충분). 하이퍼클래스 도메인 페이지가 생기면 바꾼다. 이용약관 URL 이 필수면 같은 방식으로
- [ ] 지원 이메일: benjamin@hyperclass.ai (DECISIONS 2026-08-13)
- [ ] 스크린샷 3~5장(한국어 대시보드·연락처 상세·대화·캘린더·멤버십) — 브라우저 연결 시 캡처
- [x] 출시 전 시험(2026-11-05): 슬롯을 끈 브라우저(`localStorage.hcBootOff='1'`)에 번들을 실행 → 로더·확인입력 어댑터 기동, 화면 한국어(textHits 35), 텔레메트리 전송 0, 포인터로 최신 사전 사용 확인

## 5. 스크린샷 촬영 목록 (개인정보 없는 화면만)

마켓 공개 페이지라 실제 고객 이름·이메일·전화번호가 보이면 안 된다. 데모 데이터가 있는 계정이나 아래처럼 데이터가 거의 없는 화면을 쓴다(1280×800 이상).

1. 대시보드 — 위젯 제목·차트 범례·월 축이 한국어(금액·파이프라인 이름은 가려도 됨)
2. 캘린더 주간 보기 — '2026년 11월 1일 – 7일', '1일 (일)', '오후 8:00' 같은 날짜·시각 형식
3. 설정 → 비즈니스 프로필 또는 캘린더 설정 — 폼 라벨·도움말 문구
4. 자동화(워크플로우) 목록 또는 빌더 — 트리거·액션 이름
5. 멤버십 → 코스(상품) 목록 — 카드·버튼

번들을 다시 빌드한 뒤(로더가 바뀌면) 같은 화면을 다시 찍을 필요는 없다 — 문구 사전은 포인터로 갱신된다.
