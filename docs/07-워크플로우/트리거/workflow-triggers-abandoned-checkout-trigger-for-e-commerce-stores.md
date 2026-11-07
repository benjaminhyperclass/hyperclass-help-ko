---
원문: /support/solutions/articles/155000007380-workflow-triggers-abandoned-checkout-trigger-for-e-commerce-stores
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Abandoned Checkout(결제 중단), 이커머스 스토어용

**Abandoned Checkout**(결제 중단) 트리거는 하이퍼클래스 스토어나 Shopify 같은 외부 플랫폼에서 결제를 마치지 않고 떠난 카트를 감지해요. 이 트리거 하나로 알맞은 시점에 후속 메시지를 자동으로 보내, 놓칠 뻔한 매출을 되찾을 수 있어요.

## Abandoned Checkout 트리거란?

쇼핑객이 카트에 상품을 담고 올바른 이메일 주소를 입력했지만, 정해 둔 중단 기준 시간 안에 결제를 마치지 않으면 이 트리거가 작동해요. 하이퍼클래스 이커머스 스토어와 연결된 외부 스토어(예: Shopify)에서 모두 쓸 수 있어요. 그래서 결제 회수 캠페인을 하나의 시작점으로 관리할 수 있어요.

## Abandoned Checkout 트리거의 장점

판매에 집중하는 동안 결제 회수는 자동으로 처리돼요.

- 플랫폼 통합: Shopify 전용 트리거와 하이퍼클래스 전용 트리거를 따로 오가지 않아도 돼요.
- 세분화: 카트 금액, 국가, 상품, 주문 출처로 대상을 좁혀 메시지를 더 정확하게 보낼 수 있어요.
- 유연한 타이밍: 몇 분이 지나면 카트를 중단된 것으로 볼지 직접 정할 수 있어요. 너무 이르거나 늦은 알림을 막을 수 있어요.
- 확장성: 외부 플랫폼이 추가되면 함께 지원할 수 있도록 설계되어 있어요.
- 전환율 향상: 적절한 시점에 개인화된 알림을 보내면 놓칠 뻔한 주문의 10~30%를 되찾는 경우가 많아요.

## Shopify Abandoned Cart 트리거 (곧 지원 중단 예정)

기존 **Shopify Abandoned Cart** 트리거의 이름이 **Shopify Abandoned Cart (Deprecating Soon)**(곧 지원 중단 예정)으로 바뀌었어요. 이미 만든 워크플로우는 계속 작동해요. 새로 만드는 결제 회수 자동화에는 **Ecommerce Stores > Abandoned Checkout** 트리거를 쓰세요. 더 유연하고 앞으로도 지원받을 수 있어요.

## Abandoned Checkout 트리거 설정하기

아래 순서대로 따라 하면 바로 결제 회수를 시작할 수 있어요.

### 1. 워크플로우 만들기

왼쪽 메뉴에서 **자동화 > 워크플로우**로 이동해 워크플로우 목록 화면을 여세요. 오른쪽 위의 **+ Create Workflow**(워크플로우 만들기) 버튼을 누르고 **처음부터 시작**을 선택하면 새 자동화를 만들 수 있어요.

![워크플로우 목록에서 처음부터 시작을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065195915/original/tdy3e4NbCZ584LIN6NJmIG7cHvtPmWsVsw.png?1771428330)

### 2. 트리거 추가하기

워크플로우 빌더에서 **Add Trigger**(트리거 추가)를 클릭하세요. 자동화를 시작할 이벤트를 정하는 단계예요. 트리거를 고를 수 있는 패널이 열려요.

![워크플로우 빌더에서 Add Trigger를 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065196031/original/3BJIFYPNjfB9Ll1Itz9c751h4lwdI87gjw.png?1771428393)

### 3. Abandoned Checkout 선택하기

트리거 목록을 아래로 내려 **Ecommerce Stores**(이커머스 스토어) 섹션에서 **Abandoned Checkout**을 선택하세요. 고객이 결제를 마치지 않고 떠났을 때 워크플로우가 시작돼요.

![트리거 목록의 Ecommerce Stores 섹션에서 Abandoned Checkout을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065196084/original/JRvULGxCjpWkqOFEeQ-NFc70AjjryXfhkA.png?1771428419)

### 4. 트리거 이름 정하기

**Choose a Workflow Trigger**(워크플로우 트리거 선택) 아래에 **Abandoned Checkout**이 선택되어 있는지 확인하세요. 그다음 **Workflow Trigger Name**(워크플로우 트리거 이름) 필드를 살펴보세요. 기본 이름을 그대로 써도 되고, 트리거가 여러 개라면 구분하기 쉽게 이름을 바꿔도 돼요.

![Workflow Trigger Name 필드를 확인하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065196145/original/tkKYgeW0SCNxjIJeoGsJIoS6Wkqoya19dQ.png?1771428463)

### 5. 필터 설정하기

**Duration (in mins)**(기간, 분 단위)를 설정해 몇 분을 기다린 뒤에 결제 중단으로 볼지 정하세요. 그다음 Filters(필터) 아래의 **Select** 드롭다운에서 **Cart Value**(카트 금액), **Country**(국가), **Global Products**(전체 상품), **Order Source**(주문 출처), **Store Name**(스토어 이름), **Sub Source**(하위 출처) 같은 조건을 골라 트리거를 더 좁힐 수 있어요.

- **Duration (in mins)**: 카트를 결제 중단으로 볼 때까지 기다릴 시간을 정확히 정해요.
- **Cart Value**: 최소 금액, 최대 금액, 금액 범위를 설정해 금액이 큰(또는 작은) 카트에만 트리거가 작동하게 해요.
- **Country**: 특정 지역의 쇼핑객에게만 자동화를 적용해요. 지역별 배송이나 세금 규정이 다를 때 알맞아요.
- **Global Products**: 트리거에 쓸 상품을 선택해요. 재고로 필터링하려면 **Price**(가격) 항목 하나를 선택한 다음 **Available Quantity**(가용 수량)를 선택하고, 필요한 조건과 숫자 값을 설정하세요.
- **Order Source**: **Store**(하이퍼클래스 스토어) 또는 **External**(외부) 중에서 골라요.
- **Sub Source**: **Order Source**를 **External**로 선택하면 나타나요. 현재는 Shopify를 고를 수 있고, 다른 플랫폼도 곧 추가될 예정이에요.

트리거에 필요한 상품 정보가 있으면 지원되는 워크플로우 액션에서 **Price**와 **Available Quantity**를 커스텀 값으로 쓸 수 있어요.

{% hint style="info" %}
**Price**와 **Available Quantity**는 현재 If/Else 조건에서 지원되지 않아요.
{% endhint %}

![Duration과 Filters를 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065196234/original/H9TWKcHW3B-407c7U7fQAxmJTS5iemjhZA.png?1771428503)

### 6. 조건 분기 사용하기 (선택)

**Abandoned Checkout** 트리거 뒤에 **Condition**(조건) 액션을 추가하면 결제 회수 메시지를 보내기 전에 연락처를 한 번 더 나눌 수 있어요. 아래 예시에서는 **Cart Value**, **Order Source**, **Sub Source** 필터로 어떤 결제 중단 건이 특정 분기로 갈지 정해요. 모든 연락처에게 같은 메시지를 보내지 않고, 카트 정보나 스토어 출처에 맞춰 후속 메시지를 보낼 수 있어요.

![Condition 액션으로 연락처를 분기하는 예시 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065197722/original/ymqt67As61I__Riv0FhuaWDf2q8qdPSKmA.png?1771429298)

## 자주 묻는 질문

### 쇼핑객이 이메일을 입력하지 않아도 트리거가 작동하나요?
아니요. 이메일 주소가 있어야 결제 중단으로 처리되고 워크플로우가 시작돼요.

### 중단 기준 시간은 얼마로 정하는 게 좋나요?
빠르게 팔리는 저가 상품 스토어는 보통 15~30분으로 정해요. 고가 상품이나 주문 제작 상품은 몇 시간까지 늘리는 경우가 많아요. 여러 기준 시간을 테스트해 보고 전환이 가장 잘 되는 시간을 찾아보세요.

### 카트 금액에 따라 후속 메시지를 다르게 보낼 수 있나요?
네. 트리거의 **Cart Value** 필터를 쓰거나 트리거 뒤에 If/Else 단계를 추가하면 돼요. 금액이 큰 카트와 작은 카트에 서로 다른 혜택을 보낼 수 있어요.

### 기존 Shopify Abandoned Cart 워크플로우가 작동하지 않게 되나요?
아니요. 계속 작동해요. 다만 앞으로의 지원을 위해 새 트리거로 옮기는 것을 권장해요.

### 특정 상품만 기준으로 트리거할 수 있나요?
네. **Global Products** 필터에서 SKU를 하나 이상 선택하면 돼요.

### 알림 이메일에 카트에 담긴 상품을 자동으로 넣으려면 어떻게 하나요?
**이메일 빌더**에서 **Shopping Cart**(쇼핑 카트) 요소를 쓰면 결제 중단된 상품이 자동으로 나열돼요.

### 외부(Shopify) 스토어에서도 SMS를 보낼 수 있나요?
네. 트리거가 작동한 뒤에는 이메일, SMS, 전화, 작업 등 어떤 워크플로우 액션이든 추가할 수 있어요. 스토어 종류와 상관없어요.

### 결제 회수 성과는 어디에서 볼 수 있나요?
워크플로우의 **Analytics**(분석) 탭에서 발송·열람·클릭 통계와 되찾은 매출을 확인할 수 있어요. 되찾은 주문은 **결제 > 주문** 화면에서 볼 수 있어요.
