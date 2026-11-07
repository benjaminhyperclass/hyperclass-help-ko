---
원문: https://help.gohighlevel.com/support/solutions/articles/48001234199-google-analytics-4-tracking
번역일: 2026-11-06
카테고리: 18-리포팅
---

# Google Analytics 4(GA4) 트래킹을 워크플로우에 연결하기

하이퍼클래스 워크플로우에서 Google Analytics 4(GA4) 이벤트를 보내는 방법을 안내해요. 측정 ID(Measurement ID)와 API 시크릿(API Secret)만 있으면 하이퍼클래스 계정에서 바로 GA4 트래킹을 쓸 수 있어요.

Google Analytics 4는 Google Analytics의 최신 버전이에요. 여러 플랫폼과 기기에 걸친 사용자 행동을 더 폭넓게 볼 수 있고, 기기 간 트래킹, 머신러닝 기반 인사이트, 향상된 이벤트 트래킹을 제공해요.

측정 ID와 API 시크릿으로 GA4 이벤트를 추적할 수 있게 되면서, 웹사이트·모바일 앱·소셜 미디어 등 여러 채널의 사용자 행동과 참여도를 하이퍼클래스에서 바로 추적하고 분석할 수 있어요.

{% hint style="info" %}
워크플로우 실행이 끝난 뒤 데이터가 Google Analytics에 반영되기까지 24~48시간이 걸려요.
{% endhint %}

---

## 워크플로우에서 Google Analytics 4 설정하기

워크플로우의 Google Analytics 액션은 Google Analytics 4와 Universal Analytics를 모두 지원해요. 둘 중 하나만 써도 되고, 둘 다 써도 돼요. 마케팅 캠페인과 웹사이트 트래픽을 더 유연하게 추적하고 분석할 수 있어서, 데이터에 근거해 마케팅 전략과 사용자 경험을 개선하는 데 도움이 돼요.

### 1. Google Analytics 워크플로우 만들기 또는 기존 워크플로우 열기

1. Google Analytics 워크플로우에서 **Add to Google Analytics**(Google Analytics에 추가) 액션을 선택하세요.
2. **작업 유형** 드롭다운에서 **Google Analytics 4**를 선택하세요. 새로 추가된 값이에요.

![작업 유형 드롭다운에서 Google Analytics 4 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284543581/original/pSCnn00j0xET-5lNoI-oIuQK7DxHSPkhpA.png?1677682870)

### 2. 데이터 스트림에서 측정 ID 가져오기

1. [Google Analytics 계정](https://analytics.google.com/analytics/web/provision/#/provision)에 접속하세요.
2. **Admin**(관리) > **계정 설정** > **Data Stream**(데이터 스트림) 순서로 이동한 뒤, 사용할 데이터 스트림을 선택하세요.

Google Analytics를 아직 설정하지 않았다면 Google 도움말의 [Google Analytics 설정 방법](https://support.google.com/analytics/answer/9304153?hl=en)을 먼저 참고하세요.

![Google Analytics 관리 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284545161/original/08UB2GMF7fnHHaSVr9VRErWGBJ-iQhLxDA.png?1677683155)
![데이터 스트림 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284546818/original/qZwT3a5g1F-XxBJUp_06x55GF6qp13aTZw.png?1677683421)

3. 사용할 데이터 스트림의 **Measurement ID**(측정 ID)를 복사하세요.

![데이터 스트림의 측정 ID 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284547151/original/YLT7YvK3x0sL9v2IyoBSApaho0IP9X41qQ.png?1677683498)

4. 워크플로우의 Google Analytics 액션에 있는 **Measurement ID** 필드에 붙여 넣으세요.

![워크플로우 액션의 Measurement ID 필드에 붙여 넣기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284556825/original/B3TyroHXE8UMwXdxdRAZiRxGvXI_atNKGw.png?1677685097)

### 3. 추적할 Google Analytics 이벤트 만들기

추적하고 싶은 이벤트 이름을 입력하세요. 이 이벤트 이름은 이미 설정된 다른 표준 이벤트와 함께 Google Analytics 대시보드에 표시돼요. 이름을 정할 때는 [Google의 이벤트 이름 규칙](https://support.google.com/analytics/answer/13316687?hl=en)을 참고하세요.

- **Add to Google Analytics** 액션에는 선택 입력인 **이벤트 값** 필드가 있어요.
- 이벤트와 함께 숫자 값(예: 매출, 주문 합계, 점수)을 보내고 싶을 때 **이벤트 값**을 쓰세요.
- 액션 화면에서는 `event.value`로 보일 수 있어요. 고정된 숫자나 워크플로우의 동적 값으로 채우세요.

### 4. 데이터 스트림에서 API 시크릿 가져오기

Google Analytics 계정에서 **Admin**(관리) > **계정 설정** > **Data Stream**(데이터 스트림) 순서로 이동하세요. 사용할 데이터 스트림을 선택한 뒤 **Measurement Protocol API secrets**(Measurement Protocol API 시크릿)로 들어가면 API 시크릿을 추가할 수 있어요.

{% hint style="info" %}
**이벤트 값**은 선택 사항이에요. 숫자 값을 보낼 필요가 없으면 비워 두어도 돼요.
{% endhint %}

![Measurement Protocol API secrets 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284551270/original/-kJ4WRBEGU3sSkAAzvvkLOz5da1zIV9hFg.png?1677684347)

![API 시크릿 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284551356/original/eeK0BIZ9tHMSteAND_IiSV_-_RryKxsoZA.png?1677684372)

![API 시크릿 만들기 안내 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284551672/original/RlIdIXYuRah3mSzkcUirhp5v8yNAiKkydQ.png?1677684443)

{% hint style="info" %}
API 시크릿을 만들기 전에, 사용자 데이터 수집과 관련된 Google의 개인정보 공개 내용을 읽고 이해했다는 것에 동의해야 해요.
{% endhint %}

![Google 개인정보 공개 내용 동의 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284552028/original/rxoC8VmUv0JkDm513OpemdU1n30sXB0YUA.png?1677684523)

1. 아직 만들어진 API 시크릿이 없다면 **만들기**를 클릭하세요.

![만들기 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284552756/original/GCizmLZKJZvyE_dtxsvG9DPl0srgm95okw.png?1677684693)

2. API 시크릿의 이름을 입력하고 **만들기**를 클릭하세요. 시크릿 값(Secret Value)이 자동으로 생성돼요.

![API 시크릿 이름 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284552953/original/wQYzdtSU5MCvI9B01CmM0Y11ABmU91vmiw.png?1677684726)

![생성된 시크릿 값](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284553558/original/kZiSvw1Lr4RYkWZumT7ns-UxF-0bOEUdAg.png?1677684780)

3. 생성된 시크릿 값을 복사하세요.
4. 워크플로우의 Google Analytics 액션에 있는 **API Secret**(API 시크릿) 필드에 붙여 넣으세요.

{% hint style="warning" %}
API 시크릿 값을 워크플로우 필드에 붙여 넣을 때 앞뒤에 공백이 없어야 해요. 공백이 있으면 Google Analytics 액션이 실패해요.
{% endhint %}

![워크플로우 액션의 API Secret 필드에 붙여 넣기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284555569/original/5Ia3Grxv11-cxX_Rb6BZniRX8wseLXOIIQ.png?1677684919)

### 5. 저장하고 게시하기

1. **Save Action**(액션 저장)을 클릭하세요.
2. **Save Workflow**(워크플로우 저장)를 클릭하세요.
3. 바로 사용할 준비가 되었다면 **게시**를 클릭하세요.
