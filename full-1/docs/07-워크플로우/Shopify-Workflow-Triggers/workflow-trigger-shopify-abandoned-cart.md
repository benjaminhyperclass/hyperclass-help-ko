---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002618-workflow-trigger-shopify-abandoned-cart
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Abandoned Checkout(결제 중단): Shopify 장바구니 이탈

고객이 장바구니에 상품을 담고 결제를 끝내지 않았을 때 워크플로우를 자동으로 시작하는 트리거예요. 이 문서에서는 트리거가 하는 일과 장점, 설정 방법, 자주 묻는 질문을 안내해요.

{% hint style="info" %}
이 트리거는 Shopify 연동용이에요. 하이퍼클래스 이커머스 스토어의 미완료 결제 이메일과 공유 링크는 '자동 미완료 결제 이메일로 놓친 매출 되찾기' 문서를 참고하세요.
{% endhint %}

## Abandoned Checkout 트리거란?

**Abandoned Checkout**(결제 중단) 트리거는 고객이 장바구니에 상품을 담았지만 정해진 시간 안에 구매를 완료하지 않으면 워크플로우를 시작해요. 이 트리거로 맞춤 알림을 보내거나 혜택을 제안할 수 있고, 내부 담당자에게 후속 조치를 알릴 수도 있어요. 구매에 관심을 보였던 고객과 다시 소통하는 데 도움이 돼요.

이 트리거로 할 수 있는 일은 다음과 같아요.

- 장바구니 이탈 복구 이메일과 SMS 알림을 자동으로 보내요.
- 결제 중단 시간과 장바구니 금액으로 필터를 걸어 대상을 정확히 골라요.
- 적절한 시점에 관심 있는 고객에게 연락해서 전환율을 높여요.

## Abandoned Checkout 트리거의 장점

워크플로우에서 **Abandoned Checkout** 트리거를 쓰면 다음과 같은 점이 좋아요.

- 자동 후속 조치: 이메일, SMS, 내부 알림을 설정해 두면 직접 챙기지 않아도 고객에게 장바구니를 상기시킬 수 있어요.
- 전환율 향상: 알맞은 시점에 관련 오퍼나 혜택을 보내 놓칠 뻔한 매출을 줄여요.
- 맞춤 소통: **Cart Value**(장바구니 금액)와 **Duration**(기간) 같은 필터로 고객 행동에 맞게 후속 메시지를 나눠 보낼 수 있어요.
- 매출 회복과 성장: 구매 의사를 보였지만 결제를 마치지 않은 고객을 다시 불러와요.

## Abandoned Checkout 트리거 설정하기

### 1단계: 트리거 추가하기

#### 워크플로우 빌더 열기

**자동화** 섹션의 **워크플로우 빌더**로 이동해요. 새 워크플로우를 처음부터 만들거나, **Abandoned Checkout** 트리거를 추가할 기존 워크플로우를 선택하세요.

![워크플로우 빌더 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041114997/original/u4ceHvuBdOwXZi3OVZUIW71XBrT8mT0FpA.png?1738835005)

#### Abandoned Checkout 트리거 선택하기

1. **Add New Trigger**(새 트리거 추가)를 클릭해요.
2. 트리거 목록에서 **Abandoned Checkout**을 검색해요.
3. **Abandoned Checkout** 트리거를 클릭해 설정을 시작해요.

![Abandoned Checkout 트리거 검색 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041115012/original/M0t_QZm7waMwEXt7408RXfdFic9fvXvQ1A.png?1738835026)

### 2단계: 필터 적용하기

필터는 트리거가 언제, 누구에게 작동할지 정해요. 아래 필터로 워크플로우의 대상을 좁힐 수 있어요.

#### Duration 필터

**Duration**(기간) 필터는 결제를 중단한 것으로 보기까지 기다릴 시간을 정해요. 시간은 분 단위로 선택해요. 예를 들어 10분으로 정하면, 고객이 10분 안에 구매를 완료하지 않을 때 결제가 중단된 것으로 처리돼요. 정한 시간이 지나면 트리거가 작동하고 자동 후속 조치가 나가요.

예시: 고객이 결제 페이지를 30분 동안 떠나 있으면, 트리거로 알림 이메일을 보낼 수 있어요.

![Duration 필터 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041115098/original/d1fBN9QA3G5zH7NmHjDxuq_cHiHO4rKzRA.png?1738835060)

#### Cart Value 필터

**Cart Value**(장바구니 금액) 필터는 장바구니에 담긴 상품의 총액을 조건으로 걸어요. 장바구니 금액에 따라 꼭 필요한 고객에게만 후속 메시지를 보낼 수 있어요.

Cart Value 필터에서 사용할 수 있는 연산자는 다음과 같아요.

- **Equals to**(같음): 장바구니 총액이 특정 금액과 같은 고객이 대상이에요.
- **Greater than**(초과): 장바구니 금액이 정한 금액을 넘으면 트리거가 작동해요.
- **Greater than or Equal to**(이상): 장바구니 총액이 정한 금액과 같거나 넘으면 워크플로우가 시작돼요.
- **Is Empty**(비어 있음): 장바구니에 상품이 없을 때 트리거가 작동해요.
- **Is Not Empty**(비어 있지 않음): 장바구니에 상품이 있는 고객에게만 후속 메시지가 가요.
- **Is Not Equal to**(같지 않음): 특정 장바구니 금액은 워크플로우 대상에서 빼요.
- **Less than**(보다 작음): 장바구니 총액이 정한 기준보다 낮을 때 적용돼요.
- **Less than or Equal to**(이하): 장바구니 총액이 정한 금액과 같거나 낮으면 워크플로우가 시작돼요.

예시:

- "Cart Value Greater than $100"으로 설정하면, 장바구니 총액이 $100를 넘는 고객에게만 후속 메시지가 가요.
- "Cart Value Less than or Equal to $50"으로 설정하면, 장바구니 금액이 $50 이하인 고객만 워크플로우를 시작해요.

![Cart Value 필터 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041115149/original/zF9SLMjvEJEZnqqERN4wf5RJR1MkFpYRXg.png?1738835105)

### 3단계: 트리거 저장하고 액션 추가하기

1. 필터를 설정한 뒤 **Save Trigger**(트리거 저장)를 클릭해 조건을 적용해요.
2. 아래와 같은 워크플로우 액션을 추가해요.
   - **Send Email**(이메일 보내기): 장바구니에 남은 상품과 결제 링크를 담은 알림 이메일을 보내요.
   - **Send SMS**(SMS 전송): 구매를 마무리하도록 권하는 짧은 문자를 보내요.
   - **Add Tag**(태그 추가): 태그를 붙여 고객을 나누고 리포트를 보기 쉽게 해요.
   - **Internal Notification**(내부 알림): 금액이 큰 장바구니 이탈을 영업팀에 알려요.

#### 게시하고 테스트하기

1. 모든 액션을 설정한 뒤 **Save**(저장)를 클릭해 설정을 모두 저장해요.
2. **Publish**(게시) 토글을 켜서 워크플로우를 활성화해요. 그러면 자동화가 실제로 작동하고, 정해 둔 조건을 만나면 트리거가 실행돼요.
3. Shopify 스토어에서 결제를 중단하는 상황을 직접 만들어 테스트해요.
4. **Workflow History**(워크플로우 기록)에서 트리거가 제대로 작동했는지, 이메일이나 SMS 같은 후속 액션이 실행됐는지 확인해요.

테스트를 해 보면 실제 고객에게 워크플로우가 나가기 전에 문제가 있는지 알 수 있어요.

![워크플로우 게시 및 테스트 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041115220/original/U2uLrODNnihPlSTVTM1gnA0CeiYnKfV3-Q.png?1738835132)

## 자주 묻는 질문

### 특정 상품을 기준으로 결제 중단 워크플로우를 시작할 수 있나요?

지금은 **Abandoned Checkout** 트리거가 장바구니 금액과 시간을 기준으로 작동하고, 상품별 조건은 지원하지 않아요. 다만 하이퍼클래스의 자동화 규칙으로 추가 세분화는 할 수 있어요.

### Duration 필터는 얼마로 설정하는 게 좋나요?

업종과 고객 행동에 따라 달라요. 빠르게 결정하는 상품은 15~30분이 알맞고, 금액이 큰 상품은 더 길게(예: 24시간) 잡아야 할 수 있어요.

### 한 고객이 장바구니를 여러 번 중단해도 이 트리거를 쓸 수 있나요?

네, 고객이 정해 둔 시간 안에 장바구니를 중단할 때마다 트리거가 작동해요. 다만 후속 메시지가 너무 자주 나가지 않도록 조건을 더해 두면 고객 경험에 좋아요.

### 결제 중단 복구 성과는 어떻게 확인하나요?

워크플로우 분석에서 참여율, 장바구니 복구 성과, 전환을 확인해요. 이메일·SMS 열람률과 고객 반응을 살펴보면 메시지를 개선하는 데 도움이 돼요.

### 결제 중단 워크플로우에 할인 혜택을 함께 쓸 수 있나요?

네, 가능해요. 조건부 로직을 추가해서 후속 메시지를 몇 번 보낸 뒤 할인 코드를 넣을 수 있어요. 예를 들어 고객이 24시간이 지나도 결제를 마치지 않았다면 10% 할인 쿠폰을 보내는 식이에요.
