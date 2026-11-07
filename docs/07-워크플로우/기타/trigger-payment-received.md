---
원문: /support/solutions/articles/48001238334-workflow-trigger-payment-received
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Payment Received(결제 완료)

**Payment Received**(결제 완료) 트리거는 CRM 전체로 들어오는 결제를 한곳에서 받아 워크플로우를 시작해요. 필터를 더하면 원하는 결제만 골라 쓸 수 있어서, 결제 확인 메시지 발송이나 결제 실패 대응 같은 작업을 실시간으로 자동화할 수 있어요.

{% hint style="info" %}
문서에 나온 금액(달러)과 요금제 이름은 참고용이에요. 하이퍼클래스에서 실제로 적용되는 요금은 [요금제 안내](../../00-자주묻는질문/pricing-plans.md)와 [AI·SMS·음성 사용료](../../00-자주묻는질문/usage-costs.md)를 확인하세요.
{% endhint %}

## Payment Received 워크플로우 트리거란?

워크플로우에서 **Payment Received** 트리거를 쓰면 들어오는 결제를 기준으로 작업을 자동화할 수 있어요. 일회성 구매, 구독 결제, 인보이스 결제 등 CRM 전체의 결제 이벤트에 반응하도록 설정할 수 있어요. 결제 성공이나 실패, 특정 상품, 결제 경로를 기준으로 고를 수도 있어요.

조건에 맞는 결제가 들어오면 트리거가 바로 워크플로우를 시작해요. 그래서 확인 이메일 발송, 인보이스 생성, 고객 정보 업데이트 같은 작업을 자동으로 처리할 수 있어요. 트리거에는 거래 유형, 결제 경로, 상품 같은 여러 필터를 적용할 수 있어요. 구독 갱신이나 결제 실패처럼 특정 상황에 맞는 워크플로우를 만들 수 있어요.

워크플로우에서 **If/Else**(조건 분기)를 쓰면 금액, 결제 경로, 거래 상태 같은 결제 특성에 따라 상황별로 다른 액션을 실행할 수 있어요. 워크플로우 액션으로 결제 데이터를 모아 분석과 리포팅에 활용할 수도 있어요. 들어오는 결제와 그 특성을 살펴보면 매출 성과, 고객 행동, 개선할 부분을 파악하는 데 도움이 돼요.

---

## 주요 장점

**Payment Received** 트리거는 여러 상황에서 쓸 수 있어요. 업무를 자동화하고, 고객 경험을 개선하고, 결제 데이터에서 인사이트를 얻는 데 도움이 돼요. 대표적인 활용 사례는 다음과 같아요.

- 결제 확인 자동 발송: 결제가 처리되면 고객에게 확인 이메일이나 메시지를 자동으로 보내요. 고객 만족도를 높이는 데 도움이 돼요.
- 구독 관리: 구독 결제가 성공하거나 실패하면 시스템의 구독 상태를 자동으로 업데이트해요. 구독 관리가 간편해져서 업무 효율이 올라가요.
- 결제 실패 대응: 결제가 실패하면 고객 지원팀이나 영업팀에 자동으로 알려요. 고객을 바로 도와 결제 문제를 빠르게 해결할 수 있어요.

---

## Payment Received 트리거 사용 방법

1. 워크플로우 안에서 **Payment Received** 워크플로우 트리거를 추가하세요.

![워크플로우에 Payment Received 트리거를 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041535027/original/LuaYlXLD0wUPr6GAtd8O9TKuYMunxgXfEA.png?1739444985)

```
Click "add filter" to choose a filter. Then click "add filter" again to add the  Sub-filters.
```

위 안내는 "add filter"를 클릭해 필터를 고르고, 한 번 더 클릭해 하위 필터를 추가하라는 뜻이에요.

---

## 필터

**Filters**(필터)를 쓰면 워크플로우 트리거를 더 구체적으로 좁힐 수 있어요. 아래 표에 사용할 수 있는 필터와 하위 필터를 정리했어요. 표에 나오는 **Payment Source**(결제 소스), **Sub-Source**(하위 소스), **Transaction type**(거래 유형), **Payment status**(결제 상태)가 대표적인 필터 이름이에요.

| 트리거 | 필터 | 필터 수준 옵션 | 하위 필터 1단계 | 하위 필터 1단계 옵션 | 연산자 |
| --- | --- | --- | --- | --- | --- |
| Payment Received | Payment Source | Invoice | Sub-Source | Text2Pay link | is, is not |
| One-time invoice |
| Recurring template |
| Funnel/ Website | Sub-Source | One-step order form |
| Two-step order form |
| Upsell |
| Transaction type | Customer present/first transaction |
| Customer not present/subscription transaction |
| Calendar | Calendar | Calendar names |
| Global Product | Global product Names | Price | Prices Names as per selected Global Product |
| Payment status | Success | --- | |
| Failed |

예를 들어 두 단계 주문 폼이 제출될 때 워크플로우가 실행되게 하려면 다음처럼 선택해요.

1. **Payment Source**를 선택해요.
2. **is**를 선택해요.
3. **Funnel**을 선택해요.
4. **Add Filter**(필터 추가)를 클릭한 뒤 **Sub-Source**를 선택해요.
5. **is**를 선택해요.
6. **Two-step order form**을 선택해요.

![두 단계 주문 폼 필터를 설정한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038871990/original/jIbyU9wy4QW1uUfU59g0Oe0Lj9gvorYF8g.png?1735067718)

---

## If/Else 조건

워크플로우 트리거에 필터와 하위 필터를 원하는 대로 추가했다면, 특정 조건에 따라 워크플로우를 나눌 때 **Payment**(결제)에 대한 **If/Else** 조건을 추가할 수 있어요.

![결제 If/Else 조건을 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041545885/original/t7AzOXeC_h2Ny9inaeFgWD2IvemRTkKBPw.gif?1739451375)

아래 표는 사용할 수 있는 If/Else 조건과 분기를 정리한 거예요.

| If/Else 옵션 | 액션 | 연산자 | 옵션 |
| --- | --- | --- | --- |
| Payment | Product | is, is not | Global product Names |
| Funnel/Website | Funnel/Website names |
| Calendar | Calendar names |
| Source | Invoice, Funnel, Website, Calendar |
| Payment status | success/failed |
| Amount | Equal to, is not equal to, Greater than, Greater than or equal to, Less than, Less than or equal to, is not empty, is empty. | Amount paid |

---

## 커스텀 값

**Payment Received** 트리거를 추가하고 설정하면, 워크플로우 액션에서 **Custom Values**(커스텀 값)를 쓸 수 있어요. SMS, 이메일, 내부 알림 등에 이 값을 넣을 수 있어요. 아래 표에 커스텀 값을 자세히 정리했어요.

| 커스텀 값 카테고리 | 커스텀 값 이름 (커스텀 값 그룹 이름) | 그룹 안의 커스텀 값 | 값 |
| --- | --- | --- | --- |
| **Payment** | Source |  | `{{payment.source}}` |
| Currency Symbol | `{{payment.currency_symbol}}` |
| Currency Code | `{{payment.currency_code}}` |
| **Customer** (커스텀 값 그룹) | ID | `{{payment.customer.id}}` |
| First Name | `{{payment.customer.first_name}}` |
| Last Name | `{{payment.customer.last_name}}` |
| Name | `{{payment.customer.name}}` |
| Email | `{{payment.customer.email}}` |
| Phone | `{{payment.customer.phone}}` |
| Full Address | `{{payment.customer.address}}` |
| City | `{{payment.customer.city}}` |
| State | `{{payment.customer.state}}` |
| Country | `{{payment.customer.country}}` |
| Postal Code | `{{payment.customer.postal_code}}` |
| **Invoice** (커스텀 값 그룹) | Name | `{{payment.invoice.name}}` |
| Number | `{{payment.invoice.number}}` |
| Issue Date | `{{payment.invoice.issue_date}}` |
| Due Date | `{{payment.invoice.due_date}}` |
| URL | `{{payment.invoice.url}}` |
| Recorded By | `{{payment.invoice.recorded_by}}` |
| Sub-Total |  | `{{payment.sub_total_amount}}` |
| Discount Amount | `{{payment.discount_amount}}` |
| Coupon Code | `{{payment.coupon_code}}` |
| Tax Amount | `{{payment.tax_amount}}` |
| Created On | `{{payment.created_on}}` |
| Total Amount | `{{payment.total_amount}}` |
| Transaction ID | `{{payment.transaction_id}}` |
| Status | `{{payment.payment_status}}` |
| Gateway | `{{payment.gateway}}` |
| Card Last 4 Digits | `{{payment.card.last4}}` |
| Card Brand | `{{payment.card.brand}}` |
| Method | `{{payment.method}}` |

---

## 자주 묻는 질문

### Sub-Source 필터는 무엇인가요?

퍼널, 웹사이트, 인보이스 같은 결제 소스를 고르면 하위 소스가 있을 수 있어요. 예를 들어 퍼널에서 들어온 결제는 one-step order form, two-step order form, upsell 중 한 곳에서 올 수 있어요. **Sub-Source** 필터를 쓰면 결제가 어디서 시작됐는지 구체적으로 지정할 수 있어요.

### 이 트리거는 첫 구독 결제와 이후 구독 결제를 모두 포함하나요?

네. 고객이 주문 폼을 제출해 직접 결제할 때와, 구독이 백그라운드에서 청구될 때 모두 트리거가 실행돼요.

### Customer present/first transaction과 Customer not present/subscription transaction은 무슨 뜻인가요?

거래 유형을 두 가지로 나눠요.

- **Customer present/first transaction**: 고객이 직접 접속해서 결제하는 거래예요. 일회성 구매 전부와 구독 상품의 첫 주문이 여기에 들어가요.
- **Customer not present/subscription transaction**: 구독이 만들어진 뒤 백그라운드에서 진행되는 거래예요. 예를 들어 고객이 14일 체험 기간이 있는 반복 상품을 구매한다고 해 볼게요. 구매할 때 이루어진 거래($0 거래)는 Customer present/first transaction에 해당해요. 14일 체험이 끝나 반복 상품 요금 $100이 청구되면, 이 $100 거래는 Customer not present/subscription transaction에 해당해요.

### 이후 구독 거래가 성공했을 때를 위한 트리거는 어떻게 설정하나요?

구독은 퍼널이나 웹사이트에서 만들어질 수 있어요. 그래서 **Payment Received** 트리거를 만들고 아래 필터를 적용하면 돼요.

- 소스 유형: Funnel/Website
- 거래 유형: Customer not present/subscription transaction
- **Payment status** 필터: 목적에 따라 성공 또는 실패 결제를 골라요.

![구독 결제용 필터를 설정한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041546117/original/7l-LgbEmh0f0FKJXnSMQQaI9SLxv8aWYFw.png?1739451471)

### 실패한 결제도 이 트리거에 잡히나요?

네. 필터를 하나도 걸지 않으면 기본적으로 결제 성공과 실패 시도 모두에서 트리거가 실행돼요. 성공 또는 실패한 결제만 대상으로 하고 싶다면 **Transaction status** 필터를 추가하고 success 또는 failed 중 하나로 설정하세요.

![결제 성공 또는 실패 필터를 설정한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041546210/original/xyXYNTCf_UL6-vTxallLYkcJpPrgJmeFpg.png?1739451511)

### 트리거 필터에서 특정 상품을 선택했어요. 그 상품이 어디서 팔리든 실행되나요?

아니요. 특정 상품으로 필터를 설정하면 그 상품이 퍼널, 웹사이트, 인보이스에서 판매될 때만 실행돼요. 구매가 성공했을 때 실행할지, 실패했을 때 실행할지는 transaction status 필터로 정할 수 있어요.

---

## 추가 장점

- 던닝(dunning) 관리: 구독 결제에 실패한 고객에게 던닝 이메일 시퀀스를 자동으로 보내요. 결제 실패에 빠르게 대응해 매출 회수율을 높이고, 이탈을 줄이고, 고객 유지에 도움이 돼요.
- 고객 세분화: 결제 데이터로 구매 행동을 기준으로 고객을 나눌 수 있어요. 예를 들어 고액 고객이나 자주 구매하는 고객으로 나눠요. 타깃 마케팅 캠페인을 운영하고, 업셀·크로스셀 기회를 찾고, 개인화된 고객 경험을 제공하는 데 도움이 돼요.
- 판매 성과 추적: 결제 데이터를 살펴보며 판매 성과와 추세를 파악해요. 베스트셀러 상품, 계절별 변동, 고객 선호도 같은 것을 볼 수 있어요. 전략적 의사결정에 참고할 수 있고, 판매 전략을 다듬고 매출을 키우는 데 도움이 돼요.
- 회계 시스템 연동: 아웃바운드 웹훅을 이용해 인보이스, 매출 인식, 세금 계산 같은 결제 정보를 회계 기록에 자동으로 업데이트해요. 재무 리포트를 정확하게 만들고, 회계 업무를 간소화하고, 수작업 입력을 줄여 줘요.
- 체험 기간 거래 처리: **Payment Received** 트리거는 구독 상품의 체험 기간(예: 14일 체험)이 있는 거래도 처리해요. 이 예시에서 고객이 체험에 가입하며 선결제 $0을 내면, 고객이 직접 접속해 결제 정보를 입력하므로 Customer present 거래로 분류돼요. 14일 체험이 끝나면 결제 정보를 다시 입력하지 않아도 $100이 자동으로 청구돼요. 이 거래는 백그라운드에서 일어나므로 Customer not present 거래로 봐요. 이 트리거로 체험 기간 거래를 정확히 추적하고 워크플로우를 자동화할 수 있어요. 고객 경험을 개선하고, 구독 관리를 개선하고, 수작업을 줄여 고객 만족도와 유지율을 높이는 데 도움이 돼요.
- Text2Pay 링크 연동: **Payment Received** 트리거는 **Text2Pay link**를 결제 소스로 지원해요. 문자 메시지로 받은 결제에 대한 워크플로우를 자동화할 수 있어요. 트리거 설정에 Text2Pay 링크를 넣으면 이런 거래를 효과적으로 관리하고 대응할 수 있어요. 고객 경험이 좋아지고 결제 처리도 간편해져요. 더 많은 고객에게 다가가고, 결제를 빠르게 처리하고, 고객과의 소통을 단순하게 만들어 매출과 고객 충성도를 높이는 데 도움이 돼요.
