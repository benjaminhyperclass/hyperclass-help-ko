---
원문: https://help.gohighlevel.com/support/solutions/articles/155000007390-workflow-trigger-order-fulfilled-for-ecommerce-stores-including-shopify-
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Order Fulfilled(주문 처리 완료), 이커머스 스토어·Shopify 포함

이커머스 스토어의 **Order Fulfilled**(주문 처리 완료) 트리거를 쓰면 상품이 발송되는 순간 구매 후 안내를 자동으로 보낼 수 있어요. 이 문서에서 트리거가 하는 일, 쓰면 좋은 점, 설정 방법을 설명해요.

## Order Fulfilled 트리거란?

주문 상태가 "처리 완료(Fulfilled)"로 바뀌면 이 트리거가 워크플로우를 시작해요. 하이퍼클래스 이커머스 스토어 안에서 처리했든, Shopify 같은 외부 플랫폼이나 Shippo, ShipStation 같은 배송 연동 도구로 처리했든 마찬가지예요. 모든 처리 이벤트를 한 곳에서 자동화할 수 있어서, 상품이 창고를 떠나는 시점에 맞춰 고객 후속 안내, 내부 작업, 재고 업데이트가 실행돼요.

## Order Fulfilled 트리거의 장점

- 주문이 처리되는 즉시 배송 알림을 보내 고객 경험을 매끄럽게 마무리할 수 있어요.
- CRM, 재고, 회계 시스템을 자동으로 업데이트해 수작업을 줄여요.
- 카트 금액, 상품 SKU, 배송업체 같은 처리 단위 데이터로 고객을 나눌 수 있어요.
- 여러 스토어를 운영하는 브랜드도 트리거 하나로 하이퍼클래스 스토어와 Shopify 같은 외부 소스를 모두 다룰 수 있어요.

## 필터 옵션

아래 필터를 조합해 워크플로우가 실행될 조건을 세밀하게 정할 수 있어요.

- **Cart Value**(카트 금액): 금액이 높거나 낮은 주문을 골라요.
- **Fulfilled Products**(처리된 상품): 특정 SKU에만 후속 조치를 실행해요.
- **Order Source**(주문 소스): **Store**(하이퍼클래스 스토어) 또는 **External**(외부)을 선택해요.
- **Order Sub Source**(주문 하위 소스): **External**을 선택했을 때 Shopify로 좁혀요.
- **Shipping Carrier**(배송업체): FedEx, UPS, USPS 등을 다르게 처리해요.
- **Tracking Number**(추적 번호): 추적 번호가 있을 때, 또는 특정 패턴(예: 익일 배송 코드)일 때 실행해요.
- **Available Quantity**(가용 수량): 선택한 상품 가격의 현재 재고를 기준으로 처리된 주문을 걸러요. **Global Products**(전체 상품)를 선택하고, **Price**(가격)를 하나 고른 다음, **Available Quantity**에 필요한 조건과 숫자 값 하나를 설정해요.
- **Fulfillment Status**(처리 상태): 처리 이벤트를 상태별로 걸러요.
- **Product Collection**(상품 컬렉션): 처리된 상품이 속한 컬렉션을 기준으로 배송을 걸러요.
- **Order Tags**(주문 태그): 주문 태그로 Shopify 처리 이벤트를 걸러요.
- **Product and Price**(상품 및 가격): 실제로 처리된 상품이나 가격 정보로 배송을 골라요.

이 필터들로 처리 후 고객 경험을 상황에 딱 맞게 만들 수 있어요.

## 스토어 주문과 외부 주문

이 트리거는 두 가지 처리 경로를 감지해요.

- **Store**: 하이퍼클래스 이커머스 스토어에서 만든 주문
- **External**: 타사 쇼핑몰에서 동기화된 주문(현재는 Shopify)

두 경로가 하나로 합쳐져 있어서 플랫폼마다 워크플로우를 따로 관리할 필요가 없어요. **Order Source** 필터만 설정하면 돼요.

## "Shopify Order Fulfilled (Deprecating Soon)"에서 옮겨 가기

하이퍼클래스는 기존 Shopify 전용 트리거의 이름을 **Shopify Order Fulfilled (Deprecating Soon)**(곧 지원 종료)으로 바꿨어요. 이미 만든 워크플로우는 계속 동작해요. 새 자동화는 이커머스 스토어의 **Order Fulfilled** 트리거로 만드는 것이 좋아요. 앞으로를 대비할 수 있고, 위의 모든 필터를 쓸 수 있어요.

## 배송 연동 도구와의 호환

Shippo, ShipStation 등 연결된 배송 도구에서 들어오는 처리 이벤트도 이 트리거를 실행해요. 배송 라벨을 어디서 만들든 워크플로우 하나로 관리할 수 있어요.

## Order Fulfilled 트리거 설정하기

트리거를 제대로 설정하면 고객의 상품이 발송되는 바로 그 시점에 안내를 보낼 수 있어요. 아래 순서대로 따라 하세요.

### 1. 워크플로우 열기

1. 왼쪽 메뉴에서 **자동화**를 클릭해 워크플로우 도구로 이동해요.
2. **Workflow List**(워크플로우 목록) 페이지에서 **+ Create Workflow**(워크플로우 만들기)를 클릭해 새 워크플로우를 시작해요. 수정할 워크플로우가 있으면 그 워크플로우를 열어도 돼요.

![워크플로우 목록에서 새 워크플로우 만들기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065379185/original/zxqZkOO-2sXTy630WdrAWACQ5PvCPxjzMQ.png?1771605917)

### 2. 트리거 추가

워크플로우 빌더에서 **Add Trigger**(트리거 추가)를 클릭해 워크플로우를 시작할 이벤트를 정해요. 액션을 추가하기 전에 자동화의 시작점을 만드는 단계예요.

![Add Trigger 버튼 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065379212/original/MjWtehlbnw5iz4id0BoQka-pgobc-AbccQ.png?1771605954)

### 3. 트리거 선택

**Add Trigger** 패널에서 **Ecommerce Stores**(이커머스 스토어)까지 스크롤한 뒤 **Order Fulfilled**를 선택해요. 주문이 처리 완료로 표시되는 순간 워크플로우가 시작돼요.

![Ecommerce Stores에서 Order Fulfilled 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065380596/original/TCy832Ss-f3fFsQnqAfq2XQ0Tw9E3DZUVA.png?1771607024)

### 4. 트리거 이름 정하기

**Workflow Trigger Name**(워크플로우 트리거 이름)에 알아보기 쉬운 이름을 입력해요. 예를 들어 "Order Fulfilled – Store + Shopify"처럼 쓸 수 있어요. 이름이 구체적이면 시작점이 여러 개인 워크플로우에서도 나중에 트리거를 찾고 관리하기 쉬워요.

![Workflow Trigger Name 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065380606/original/kZRtoqXpcV6JPpb3JTzo3rs2m_nUk6_VuQ.png?1771607040)

### 5. 필터 추가

**Filters**(필터) 아래에서 **Add filters**(필터 추가)를 클릭해 워크플로우에 등록될 처리 이벤트를 제한해요. 필터를 쓰면 불필요한 등록을 줄이고, 주문 내용에 맞는 후속 조치만 실행할 수 있어요.

![Add filters 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065380682/original/uv3IHCU0TpS1vSv4dwf5yjVs2OLtmK66SA.png?1771607055)

### 6. 필터 고르기

필터 드롭다운을 열고 가장 먼저 적용할 조건을 선택해요. 예를 들어 **Cart Value**나 **Order Source**를 고를 수 있어요. 필터 종류에 따라 처리 데이터 중 어느 부분을 확인할지가 정해져요.

```
재고 기준으로 필터링하려면 Global Products → Price → Available Quantity 순서의 중첩 필터 경로를 사용하세요. Price를 하나 선택하고, 필요한 조건을 고른 다음, Available Quantity 숫자 값을 입력하세요.
```

![필터 드롭다운에서 조건 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065380689/original/-HG68VCw6BFDdzBKuNIqT6dExLdyWIZONA.png?1771607077)

### Shopify 처리 이벤트 필터링

Shopify 처리 이벤트용 워크플로우를 만들려면 **Order Source**를 **External**로, **Order Sub Source**를 **Shopify**로 설정해요.

![Order Source를 External, Order Sub Source를 Shopify로 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083550439/original/ZNZEKhFCr2Bpd1zi0gYn7bZ77-axZyQ6LA.png?1792177790)

사용할 수 있는 필터로 특정 배송만 골라낼 수 있어요. **Product Collection**, 주문 태그, 처리된 상품의 상품·가격 정보로 필터링할 수 있어요.

일부만 처리된 주문에서는 상품 기준 필터가 원래 주문의 전체 상품이 아니라 해당 배송에 포함된 상품을 기준으로 확인해요.

필터를 설정한 뒤 **Save Trigger**(트리거 저장)를 클릭해 저장해요.

### Cart Value 필터

필터 목록에서 **Cart Value**를 선택하면 고객이 쓴 금액을 기준으로 주문을 고를 수 있어요. 금액이 높은 구매는 VIP 후속 조치로 보내고, 금액이 낮은 주문은 특정 자동화에서 빼는 식으로 쓸 수 있어요.

### 카트 금액 규칙 설정

**Cart Value**를 선택한 뒤 **Greater than**(초과)이나 **Between**(사이) 같은 연산자를 고르고, 대상으로 삼을 값을 입력해요. 금액이 높은 주문은 프리미엄 경험으로 안내하고, 금액이 낮은 구매는 제외할 때 유용해요.

![Cart Value 연산자와 값 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065380714/original/A4UugA19AhljEh5jxqOf_lrC0rZOQPIGFA.png?1771607094)

### 상품 필터링

**Fulfilled Products**를 선택하고 연산자를 골라요. **Contains any**(다음 중 하나 포함)를 고르면 특정 상품을 포함하고, **Is none of**(어느 것도 해당 없음)를 고르면 제외해요. 주문된 상품이 아니라 실제로 처리된 상품을 기준으로 구매 후 메시지를 다르게 보낼 수 있어요.

![Fulfilled Products 연산자 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065380770/original/bBEZ4WSKdvL-8gZH7sQ1Si5dpuoLM2BgNQ.png?1771607114)

### 주문 소스 선택

**Order Source**로 처리된 주문이 어디서 들어왔는지 정해요. **Store** 또는 **External**을 선택할 수 있어요. 스토어를 여러 곳에서 운영한다면 플랫폼별로 자동화 동작을 나눌 수 있어서 중요한 설정이에요.

![Order Source 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065380747/original/8c0qEJFrTMM_KUynX6R4affcTh3u48q3Ww.png?1771607114)

### 하위 소스 선택

**Order Source**를 **External**로 설정했다면 **Order Sub Source**로 **Shopify** 같은 특정 플랫폼으로 트리거를 좁혀요. 통합된 **Order Fulfilled** 트리거를 그대로 쓰면서 외부 주문 자동화를 정확하게 나눌 수 있어요.

![Order Sub Source 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065380788/original/Me3pNe8FDWr1z87QHksf3N1K95bxVWnnzA.png?1771607164)

### 배송업체 필터링

**Shipping Carrier**를 선택하고 목적에 맞게 **Contains Phrase**(문구 포함)나 **Is Not Empty**(비어 있지 않음) 같은 연산자를 골라요. **Contains Phrase**를 쓴다면 배송업체 이름을 입력하고 Enter(또는 Return) 키를 눌러 추가해요. 이렇게 하면 배송업체나 배송 방법별로 메시지를 다르게 보낼 수 있어요.

![Shipping Carrier 연산자 선택과 이름 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065380800/original/U9Sjsc0OYq_VxZp0gWIbl0Hu65zqOq_yhg.png?1771607186)

### 추적 번호 필수로 설정

**Tracking Number**를 선택하고 연산자를 **Is Not Empty**로 설정하면 추적 번호가 생긴 뒤에만 워크플로우가 실행돼요. 너무 이른 알림을 막고, 고객이 실제로 확인할 수 있는 배송 정보가 담긴 메시지를 받게 해 줘요.

![Tracking Number를 Is Not Empty로 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065380834/original/3OJTEsC3WiXFwZraNy7xj8KJ1t9sdizWXg.png?1771607209)

### 트리거 저장

트리거 이름과 필터를 확인한 뒤 **Save Trigger**를 클릭해 설정을 적용해요. 이 처리 이벤트를 기준으로 나머지 워크플로우 액션을 만들고 게시하려면 먼저 저장해야 해요.

저장하고 게시한 다음, 스토어나 Shopify에서 테스트 주문을 처리해 보며 확인하세요.

- (선택) 주문 하나에 배송이 여러 번 나갈 것으로 예상된다면 **Allow Multiple**(여러 번 허용)을 켜세요.
- 처리 후 액션을 추가하세요. 예시는 다음과 같아요.
  - 추적 링크가 담긴 이메일이나 SMS 보내기
  - 고객을 "발송됨" 파이프라인 단계에 추가하기
  - 창고 Slack 채널에 알리기

![트리거 저장 후 액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065380844/original/O1-6AF5iDeX10SKTwgiKSmQrhxEAbskmBA.png?1771607227)

## 커스텀 값으로 처리 알림 개인화하기

Order Fulfilled 트리거는 처리와 관련된 커스텀 값을 제공해요. 이 값으로 고객 알림을 개인화할 수 있어요.

처리된 상품, 배송 수량, 처리 상태, 추적 정보를 메시지에 넣을 수 있어요.

### 사용할 수 있는 Order Fulfillment 커스텀 값

**Order Fulfillment**(주문 처리) 카테고리에는 다음 값이 있어요.

- 상품 정보: **Fulfilled Product IDs**(처리된 상품 ID), **Product Name(s)**(상품명), **Price**(가격), **Fulfilled Quantity**(처리된 수량), **Fulfilled Quantity (per item)**(상품별 처리된 수량)
- 처리 정보: **Fulfillment Date**(처리일), **Fulfillment Status**(처리 상태)
- 배송 정보: **Shipping Carrier**(배송업체), **Tracking Number**(추적 번호), **Tracking URL**(추적 URL), **Order Status URL**(주문 상태 URL)

**Order ID**(주문 ID)와 **Billing Address**(청구지 주소) 같은 주문 정보도 개인화에 쓸 수 있어요.

### 워크플로우 이메일에서 처리 커스텀 값 사용하기

1. **Order Fulfilled** 트리거가 들어 있는 워크플로우를 열어요.
2. **Email**(이메일) 액션을 추가하거나 기존 액션을 열어요.
3. 이메일 제목과 내용을 입력해요.
4. 메시지 편집기에서 커스텀 값 선택기를 열어요.
5. **Order Fulfilled**를 선택해요.
6. 이메일에 넣을 처리 값을 골라요.
7. **Save action**(액션 저장)을 클릭해요.

![워크플로우 이메일에서 Order Fulfilled 커스텀 값 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083550726/original/ID-bKhfXMt1IsKx4zp8Rl7Iu5HS8W21mBQ.png?1792178331)

이 값으로 처리된 상품 정보, 배송업체 정보, 추적 번호, 추적 링크를 안내할 수 있어요.

### SMS 메시지에서 처리 커스텀 값 사용하기

1. 워크플로우를 열고 **SMS** 액션을 추가하거나 선택해요.
2. 메시지 편집기에서 커스텀 값 선택기를 열어요.
3. 넣고 싶은 **Order Fulfilled** 값을 선택해요.
4. 배송 정보와 추적 정보를 메시지에 넣어요.
5. **Save action**을 클릭해요.

![SMS 액션에서 Order Fulfilled 커스텀 값 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083550523/original/7baU7MGSwma6Ln8aCv3nGtBLNnyyb7J4wA.png?1792177972)

예를 들어 처리된 수량, 처리 상태, 배송업체 정보, 추적 URL을 넣어 SMS 알림을 개인화할 수 있어요.

### 이메일 템플릿과 스니펫에서 처리 커스텀 값 사용하기

재사용할 이메일 템플릿과 메시지 스니펫을 만들 때도 주문 처리 값을 넣을 수 있어요.

해당 편집기를 열고 커스텀 값 선택기에서 **주문 처리**로 이동해 넣을 배송 정보를 선택하세요.

![이메일 템플릿에서 주문 처리 커스텀 값 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083550610/original/la4Mh1jxoT4x1QAfXxro5E6cbqMW7J1rYw.png?1792178079)

이 값을 쓰면 주문마다 정보를 직접 입력하지 않아도 처리 정보가 담긴 메시지를 준비할 수 있어요.

## 자주 묻는 질문

### 일부만 처리(부분 처리)되어도 트리거가 실행되나요?

네. Shopify 주문은 배송마다 각각 Order Fulfilled 이벤트가 생겨요. 주문이 여러 번에 나뉘어 처리될 때도 마찬가지예요.

각 배송 알림에는 원래 주문의 전체 상품이 아니라 그 배송에서 처리된 상품만 포함돼요.

처리 전용 필터를 쓰면 워크플로우에 맞는 배송만 골라낼 수 있어요.

### 기존 "Shopify Order Fulfilled" 워크플로우가 작동하지 않게 되나요?

아니요. 계속 실행돼요. 다만 이전 트리거가 종료되기 전에 새 트리거로 옮기기를 권해요.

### 추적 번호가 생길 때까지 후속 이메일을 미룰 수 있나요?

네. **Wait** 단계를 추가해 "until tracking URL is not empty"(추적 URL이 비어 있지 않을 때까지)로 설정하거나, 트리거 뒤에 X분을 지연하세요.

### 분할 배송 때 알림이 중복으로 가는 것을 막으려면 어떻게 하나요?

**Tracking Number** 필터를 켜고 **Is Not Empty**를 선택하세요. 그러면 새 추적 번호가 있는 배송만 트리거돼요.

### 주문을 "배송 완료(Delivered)"로 표시하면 다시 트리거되나요?

아니요. Order Fulfilled 트리거는 상태가 처리 완료(Fulfilled)로 바뀔 때만 실행돼요. 배송 완료 단계의 자동화에는 다른 트리거를 쓰세요.

### WooCommerce도 지원하나요?

아직 지원하지 않아요. 새 플랫폼 연동이 추가되면 **External** > **Order Sub Source** 필터를 쓰세요.

### 처리 후에 추적 정보가 바뀌면 어떻게 되나요?

Shopify 배송이 나간 뒤에 추적 번호를 추가하거나 수정하면, 고객은 업데이트된 추적 정보가 담긴 후속 알림을 받아요.

### 취소된 처리나 과거 주문에도 알림이 가나요?

취소된 처리와 과거 주문, 가져온 주문은 예상치 못한 알림이나 중복 처리 알림을 만들지 않아요.

### 기존에 주문으로 트리거되던 워크플로우는 계속 작동하나요?

네. 주문으로 트리거되던 기존 워크플로우와 이메일 알림은 변경 없이 계속 작동해요.

### 주문을 "배송 완료(Delivered)"로 표시하면 워크플로우가 다시 트리거되나요?

주문을 배송 완료로 표시하는 것만으로는 Order Fulfilled 워크플로우가 다시 트리거되지 않아요.

Shopify 처리 후 추적 번호를 추가하거나 수정하는 경우는 별도로 처리되며, 후속 알림이 발송될 수 있어요.
