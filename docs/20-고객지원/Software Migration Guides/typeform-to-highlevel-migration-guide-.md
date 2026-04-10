---

번역일: 2026-04-08
카테고리: 20-고객지원 > 소프트웨어 마이그레이션 가이드
---

# Typeform에서 Hyperclass로 이전하기 (마이그레이션 가이드)

이 종합 가이드는 Typeform에서 Hyperclass로 폼, 설문조사, 관련 데이터를 효과적으로 이전하는 단계를 안내합니다. CRM 연동, 마케팅 자동화, 고급 분석 등 Hyperclass의 포괄적인 기능을 최대한 활용하면서 원활한 전환을 목표로 합니다.

**중요**: Typeform에서 Hyperclass로 전환할 때 다음 구성 요소를 모두 이전해야 합니다.
1. 폼(양식)
2. 연락처
3. 자동화
4. 도메인 및 QR 코드
5. 보고서

---
목차

- [폼 이전하기](#폼-이전하기)
- [연락처 이전하기](#연락처-이전하기)
- [자동화 및 후속 조치 이전하기](#자동화-및-후속-조치-이전하기)
- [폼 도메인 및 QR 코드 이전하기](#폼-도메인-및-qr-코드-이전하기)
- [데이터 내보내기 및 새 데이터 생성](#데이터-내보내기-및-새-데이터-생성)

# 폼 이전하기

Typeform은 사용자가 폼, 설문조사, 투표를 통해 정보를 수집할 수 있게 해주며, 모든 응답은 CSV 파일로 다운로드할 수 있습니다.

### 1단계: TypeForm 확인하기

- TypeForm 로그인: 로그인하여 워크스페이스에 접근하고 모든 폼과 설문조사를 관리합니다.

- 폼 질문 보기: 각 폼을 클릭하여 폼 미리보기 화면 왼쪽에서 각 폼 질문을 확인합니다.

- 기존 자동화 문서화: 폼 로직, 계산, 이메일 검증, 알림 등 Typeform의 기존 자동화 시퀀스를 검토합니다.

### 2단계: Hyperclass에서 질문 재생성하기

- Hyperclass 로그인: 연락처(Contacts) > 설정(Settings) > 커스텀 필드(Custom Fields)로 이동합니다.

- 폼 질문 재생성: 모든 폼 질문에 대해 커스텀 값(Custom Value) 폴더를 추가합니다. 데이터 유형에 맞춰 커스텀 필드로 수동으로 추가합니다.

### 3단계: Hyperclass에서 폼 및 설문조사 재생성하기

- 폼 및 설문조사 재생성: 개별 폼과 설문조사를 생성하고 해당 질문들을 추가합니다.

- 폼 디자인 재생성: Hyperclass의 커스터마이징 옵션을 사용하여 원본 TypeForm의 디자인과 브랜딩에 맞춥니다.

- 폼 빌더 자동화 추가: 로직, 계산, 이메일/전화 검증, 알림 등 Typeform의 기존 자동화 시퀀스를 복제합니다. 여러 설정은 폼 빌더(Form Builder) 내에서 구성할 수 있으며, 나머지 자동화는 자동화 단계에서 구축합니다.

- 폼 테스트: 폼을 테스트하고 올바르게 작동하는지 확인합니다.

![폼 빌더 스크린샷](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032414391/original/T_GOUaP-crEbIG2Nr1m1IYJjP-S2Dck8hg.jpeg?1725631651)

![폼 설정 스크린샷](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032429215/original/iN6jpFrII7xrrj_bxQv4d3IIiUZb9gd0ww.png?1725645819)

# 연락처 이전하기

Hyperclass와 달리 Typeform은 각 폼 제출 시 이메일이나 전화번호를 필수로 요구하지 않습니다. Hyperclass 연락처로 이전하려면 전화번호와 이메일 필드가 있는 폼 응답만 내보내야 합니다.

### 1단계: Typeform에서 폼 응답 내보내기

- Typeform 데이터 내보내기: My Workspace에서 해당 폼에 접근하여 Results로 이동한 후 Responses를 선택합니다.

- 데이터 다운로드: 체크박스를 사용하여 모든 응답을 선택합니다. 우상단의 다운로드 아이콘을 클릭하여 모든 폼 응답을 CSV 형식으로 다운로드하여 백업합니다.

![Typeform 데이터 내보내기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032429251/original/zreXLrvclihicln5nBGH93xAF--3X3LFcQ.png?1725645847)

### 2단계: Hyperclass 가져오기용 CSV 준비하기

- 날짜 형식 확인: CSV의 모든 날짜 필드가 YYYY-MM-DD 형식인지 확인합니다. Hyperclass 호환성을 위해 필수입니다.

- 특수 문자 인코딩: CSV 파일이 UTF-8 문자 인코딩을 사용하여 특수 문자와 악센트가 포함된 문자를 제대로 처리하는지 확인합니다.

- 데이터 정리: 파일에서 줄바꿈, 이모지, 불필요한 특수 문자를 제거합니다. 이 단계는 가져오기 오류를 방지하는 데 도움이 됩니다.

- 커스텀 필드 재생성: Hyperclass에 로그인하여 연락처(Contacts) > 설정(Settings) > 커스텀 필드(Custom Fields)로 이동합니다. Typeform에 저장된 방식과 유사하게 연락처 데이터를 저장할 커스텀 필드를 추가합니다.

### 3단계: Hyperclass로 연락처 가져오기

- Hyperclass 로그인: 왼쪽 메뉴를 사용하여 연락처(Contacts) 섹션으로 이동합니다.

- 가져오기 프로세스 시작: 연락처 가져오기(Import Contacts) 버튼을 클릭합니다.

- CSV 파일 업로드: 준비된 CSV 파일을 선택하여 업로드합니다.

- 필드 매핑: Hyperclass가 CSV 파일의 필드를 Hyperclass의 해당 필드에 매핑하도록 요청합니다. 예를 들어, CSV의 "First Name"을 Hyperclass의 "First Name"에 매핑합니다.

필드 매핑 팁: 모든 필수 필드가 올바르게 매핑되었는지 확인합니다. CSV의 필드가 Hyperclass에 해당하는 필드가 없는 경우, 진행하기 전에 Hyperclass에서 커스텀 필드를 생성해야 할 수 있습니다.

- 태그 및 목록 지정: 가져오기 프로세스 중에 연락처를 특정 목록에 지정하고 태그를 적용할 수 있습니다. "Typeform Import"와 같이 연락처의 출처를 나타내는 태그를 적용하는 것을 고려해보세요.

- 가져오기 완료: 모든 필드 매핑과 태그/목록 설정을 완료한 후 가져오기(Import)를 클릭합니다. Hyperclass가 가져오기를 처리하고 연락처가 계정에 추가됩니다.

### 4단계: 가져온 데이터 검토하기

- 검토: 연락처와 폼 제출을 포함하여 Hyperclass로 가져온 모든 데이터가 정확하고 완전한지 확인합니다.

- Typeform 데이터와 교차 확인: Hyperclass의 데이터를 원본 Typeform 데이터와 비교하여 불일치가 없는지 확인합니다.

# 자동화 및 후속 조치 이전하기

Typeform의 자동화는 앱 내에서 구축하거나 Slack, Zapier, 웹훅을 사용하여 구축할 수 있습니다.

### 1단계: TypeForm의 기존 자동화 검토하기

- Typeform의 나머지 자동화 시퀀스 검토: 톱니바퀴 아이콘을 클릭하여 설정에 접근합니다. 폼 빌더(Form Builder)에서 생성할 수 없는 경우, 후속 메시지, 연동, 웹훅과 같은 Hyperclass 워크플로우에서 생성할 수 있습니다.

### 2단계: Hyperclass에서 자동화 재생성하기

- 트리거와 액션 설정: Hyperclass의 자동화 워크플로우(Workflow)를 사용하여 폼 빌더 내에서 구축할 수 없는 유사한 시퀀스를 설정합니다. 예를 들어, 후속 이메일 발송이나 폼 응답에 따른 CRM 액션 트리거 등입니다.

- 자동화 테스트: 각 자동화가 올바르게 트리거되고 폼 제출 시 예상대로 작동하는지 확인합니다.

![자동화 워크플로우](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032429259/original/7jSz-3kPivsXXfgI1WvNh-mO2r3CR0qQQw.png?1725645867)

![워크플로우 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032429268/original/kyeLXKdxIJ0wLHfi9sqQoffFKF94tpADgw.png?1725645875)

# 폼 도메인 및 QR 코드 이전하기

고객이 Hyperclass 폼에 계속 사용할 수 있도록 도메인을 이전해야 하며, 리드가 이전 커스텀 링크에 접근할 수 있어야 합니다. 폼은 커스텀 QR 코드로 공유할 수 있습니다. Hyperclass에서 폼용 QR 코드를 재생성해야 합니다.

### 1단계: TypeForm 도메인 문서화 및 제거

- TypeForm 커스텀 도메인 문서화: 좌상단의 조직 아바타를 클릭하고 Admin settings로 이동합니다.

- TypeForm 커스텀 도메인 제거: Admin settings 페이지에서 Change URL을 클릭합니다. Custom domain 라디오 버튼을 선택하고 Confirm을 클릭합니다.

### 2단계: Hyperclass에서 301 리다이렉트 추가

- 리다이렉트 설정: 사이트(Sites) > URL 리다이렉트(URL Redirects)로 이동합니다.

- 공유 및 접근성 테스트: 원활한 사용자 경험을 보장하기 위해 다양한 플랫폼과 디바이스에서 각 폼의 접근성을 테스트합니다.

### 3단계: Hyperclass에서 API 도메인 추가

- 도메인으로 폼 브랜딩: 설정(Settings) > 비즈니스 프로필(Business Profile)로 이동합니다.

### 4단계: TypeForm에서 QR 코드가 있는 폼 문서화

- Typeform 로그인: 공유 패널에 접근하려면 폼을 열고 Share를 클릭합니다. 마지막 아이콘은 폼을 공유하는 데 사용할 수 있는 QR 코드를 제공합니다.

### 5단계: Hyperclass에서 QR 코드 추가

- QR 코드 생성: 사이트(Sites) > QR 코드(QR Codes) > QR 코드 생성(Create QR code)으로 이동합니다. 이름을 추가하고 QR 유형을 웹사이트로 선택한 후 다음(Next)을 클릭합니다.

- Hyperclass 폼 URL 연결: 여기에 Hyperclass 폼 URL을 추가합니다. 사용자를 새 링크로 리다이렉트하려는 경우 나중에 이 웹사이트 URL을 변경할 수 있습니다.

- 테스트 및 공유: QR 코드 관련 분석은 QR 코드(QR Codes) > 분석(Analytics)에서 확인할 수 있습니다.

![QR 코드 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032429273/original/ewZjz5d_jvN5M2mXNlqlivttB7ZMnj7qtw.png?1725645893)

# 데이터 내보내기 및 새 데이터 생성

유료 Typeform 구독을 취소한 사용자는 플랜 취소가 적용된 후 보고서를 보거나 생성할 수 없습니다. 이 보고서는 집계된 폼 응답만 지원합니다. 연락처 정보 및 주소 질문 유형은 현재 지원되지 않습니다.

### 1단계: TypeForm에서 보고서 내보내기

- 보고서 생성: 워크스페이스에서 폼을 열고 Results 패널을 클릭한 후 Summary를 클릭합니다. Generate a report를 클릭합니다. 새 화면이 열리며 보고서를 보고 공유할 수 있습니다.

- 왼쪽의 토글을 클릭하여 보고서에 자유 응답 질문에 대한 답변을 표시합니다.

- 보고서에 포함되도록 모든 자유 응답 질문을 표시합니다.

![Typeform 보고서 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032429288/original/mJmq5RKto93YpnrqyyaPXuF_-eNXKrtaqA.png?1725645930)

### 2단계: 보고서를 PDF로 저장

- 인쇄 버튼을 클릭하여 보고서 인쇄: 브라우저에서 새 탭이 열리며 PDF로 저장 옵션이 표시됩니다. 보관을 위해 클라우드 스토리지에 업로드합니다.

### 3단계: 폼 제출 및 대시보드 위젯 보고서

- [폼 응답이 어디에 표시되나요?]([where-do-form-responses-show-up-](where-do-form-responses-show-up-.md))

- 커스텀 위젯(Pro 플랜 사용자만)

---
*원문 최종 수정: Fri, 7 Mar, 2025 at 11:18 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*