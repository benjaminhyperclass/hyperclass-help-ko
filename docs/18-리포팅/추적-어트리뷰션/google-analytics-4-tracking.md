---

번역일: 2026-04-08
카테고리: 18-리포팅 > 추적-어트리뷰션
---

# Google Analytics 4 추적

Google Analytics 4(GA4)는 Google Analytics 플랫폼의 최신 버전으로, 다양한 플랫폼과 기기에서 사용자 행동에 대한 더욱 진보되고 종합적인 관점을 제공합니다. 크로스 디바이스 추적, 머신러닝 기반 인사이트, 향상된 이벤트 추적 기능을 제공합니다.

저희 CRM과 관련하여, Measurement ID와 API Secret으로 GA4 이벤트를 추적하는 최신 개선 사항은 CRM 사용자들이 이제 CRM 계정에서 GA4 추적을 쉽게 사용할 수 있다는 것을 의미합니다. 이를 통해 웹사이트, 모바일 앱, 소셜 미디어 플랫폼을 포함한 다양한 채널에서 사용자 행동과 참여를 추적하고 분석할 수 있습니다.

#### 이 가이드에서 다루는 내용:

#### [워크플로우에서 Google Analytics 4 설정하는 단계](#워크플로우에서-google-analytics-4-설정하는-단계)

#### [Google Analytics 워크플로우 생성 또는 기존 워크플로우 사용](#google-analytics-워크플로우-생성-또는-기존-워크플로우-사용)

#### [Google Analytics 데이터 스트림에서 Measurement ID 가져오기](#google-analytics-데이터-스트림에서-measurement-id-가져오기)

#### [추적하려는 Google Analytics 이벤트 생성](#추적하려는-google-analytics-이벤트-생성)

#### [데이터 스트림에서 API Secret 값 가져오기](#데이터-스트림에서-api-secret-값-가져오기)

참고사항:
워크플로우 실행이 완료된 후 Google Analytics 플랫폼에 데이터가 반영되기까지 24~48시간이 소요됩니다.

## 워크플로우에서 Google Analytics 4 설정하는 단계

CRM의 기존 Google Analytics 워크플로우 액션은 Google Analytics 4와 Universal Analytics를 모두 포함하므로, 사용자는 마케팅 캠페인과 웹사이트 트래픽을 추적하기 위해 한 플랫폼을 선택하거나 둘 다 사용할 수 있습니다. 이는 사용자 행동을 추적하고 분석하는 더욱 유연하고 통합적인 접근 방식을 제공하여, 비즈니스가 마케팅 전략과 사용자 경험을 개선하기 위한 데이터 기반 의사결정을 내리는 데 도움이 됩니다.

### Google Analytics 워크플로우 생성 또는 기존 워크플로우 사용

Google Analytics 워크플로우에서 'Add to Google Analytics(Google Analytics에 추가)' 액션을 선택하세요.

'Action Type(액션 유형)' 아래에 'Google Analytics 4'라는 새로운 드롭다운 값이 도입되었습니다. 드롭다운에서 이것을 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284543581/original/pSCnn00j0xET-5lNoI-oIuQK7DxHSPkhpA.png?1677682870)

### Google Analytics 데이터 스트림에서 Measurement ID 가져오기

[Google Analytics 계정](https://analytics.google.com/analytics/web/provision/#/provision)으로 이동하여 Admin ➝ Account Settings(계정 설정) ➝ Data Stream(데이터 스트림) ➝ Select the Data Stream(데이터 스트림 선택)에서 Measurement ID를 가져오세요. (Google Analytics가 설정되지 않은 경우 [Google Analytics 설정 방법](https://support.google.com/analytics/answer/9304153?hl=en)에 대한 Google 도움말 문서를 참조하세요.)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284545161/original/08UB2GMF7fnHHaSVr9VRErWGBJ-iQhLxDA.png?1677683155)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284546818/original/qZwT3a5g1F-XxBJUp_06x55GF6qp13aTZw.png?1677683421)

원하는 데이터 스트림의 Measurement ID를 복사하세요:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284547151/original/YLT7YvK3x0sL9v2IyoBSApaho0IP9X41qQ.png?1677683498)

워크플로우의 Google Analytics 액션에 있는 Measurement ID 필드에 Measurement ID를 붙여넣으세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284556825/original/B3TyroHXE8UMwXdxdRAZiRxGvXI_atNKGw.png?1677685097)

### 추적하려는 Google Analytics 이벤트 생성

추적하려는 이벤트 이름을 추가할 수 있습니다. 이 이벤트 이름은 설정된 다른 표준 이벤트와 함께 Google Analytics 대시보드에 표시됩니다. [Google의 이벤트 명명 규칙은 여기를 참조하세요](https://support.google.com/analytics/answer/13316687?hl=en)

- "Add to Google Analytics 워크플로우 액션은 선택적 Event Value(이벤트 값) 필드를 지원합니다."

- "Event Value를 사용하여 이벤트와 함께 숫자 값(예: 수익, 주문 총액 또는 점수)을 보내세요."

- "액션 UI에서 이것은 event.value로 나타날 수 있습니다. 고정 숫자나 워크플로우의 동적 값을 사용하여 채우세요."

### 데이터 스트림에서 API Secret 값 가져오기

Google Analytics 계정의 Admin ➝ Account Settings(계정 설정) ➝ Data Stream(데이터 스트림) ➝ Select the Data Stream(데이터 스트림 선택) ➝ Measurement Protocol API secrets로 이동하여 API Secret을 추가하세요.

"Event Value는 선택사항입니다. 숫자 값을 보낼 필요가 없다면 비워둘 수 있습니다."

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284551270/original/-kJ4WRBEGU3sSkAAzvvkLOz5da1zIV9hFg.png?1677684347)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284551356/original/eeK0BIZ9tHMSteAND_IiSV_-_RryKxsoZA.png?1677684372)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284551672/original/RlIdIXYuRah3mSzkcUirhp5v8yNAiKkydQ.png?1677684443)

참고사항:
API Secret을 생성하기 전에 사용자 데이터 수집에 관한 Google의 개인정보 보호 공개 사항을 읽고 이해했음을 인정해야 합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284552028/original/rxoC8VmUv0JkDm513OpemdU1n30sXB0YUA.png?1677684523)

이미 생성된 API Secret이 없다면 Create(생성)을 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284552756/original/GCizmLZKJZvyE_dtxsvG9DPl0srgm95okw.png?1677684693)

API Secret의 이름을 지정하고 Create(생성)을 누르면 Secret Value가 자동으로 생성됩니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284552953/original/wQYzdtSU5MCvI9B01CmM0Y11ABmU91vmiw.png?1677684726)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284553558/original/kZiSvw1Lr4RYkWZumT7ns-UxF-0bOEUdAg.png?1677684780)

여기에서 Secret Value를 복사하여 워크플로우의 Google Analytics 액션에 있는 API Secret 필드에 붙여넣으세요.

참고사항:
API Secret 값을 워크플로우 필드에 붙여넣을 때 앞뒤에 공백이 없는지 확인하세요. 그렇지 않으면 Google Analytics 액션이 실패합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284555569/original/5Ia3Grxv11-cxX_Rb6BZniRX8wseLXOIIQ.png?1677684919)

액션을 저장한 후 워크플로우를 저장하세요. 사용할 준비가 되면 발행하세요.

---
*원문 최종 수정: Wed, 4 Mar, 2026 at 8:28 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*