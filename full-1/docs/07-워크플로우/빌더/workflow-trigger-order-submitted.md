---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003535-workflow-trigger-order-submitted
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Order Submitted(주문 제출)

**Order Submitted**(주문 제출) 트리거는 1단계 또는 2단계 주문 폼으로 주문이 완료되면 워크플로우를 시작해요. 이 문서에서는 이 트리거가 하는 일, 다른 주문 관련 트리거와의 차이, 설정 방법을 알려 드려요.

## Order Submitted 워크플로우 트리거란?

**Order Submitted** 트리거는 주문 폼으로 주문이 들어오면 워크플로우를 실행해요. 기본 주문 폼 트리거와 달리 첫 구매뿐 아니라 업셀(추가 판매) 결제까지 모두 잡아내요. 이런 경우에 쓰면 좋아요.

- 주문 확인 이메일 보내기
- 업셀 후속 안내 자동화
- 주문 내용을 연락처 정보에 업데이트
- 구매 행동에 따라 고객 분류

이 트리거는 커스텀 값을 지원해요. 워크플로우 안에서 상품 이름, 수량, 가격, 결제 수단을 자동으로 불러와 쓸 수 있어요.

## Order Submitted 트리거의 장점

- 자동 소통: 주문 확인과 업셀 제안을 바로 보내요.
- 매출 증대: 업셀 워크플로우로 판매를 늘릴 수 있어요.
- 시간 절약: 수동으로 하던 주문 관리 작업을 줄여요.
- 상세한 주문 정보: 상품과 결제 데이터를 가져와 더 정교하게 자동화할 수 있어요.

## Order Submitted와 Order Form Submitted의 차이

자동화에 맞는 트리거를 고르려면 두 트리거의 차이를 알아 두는 게 좋아요.

|  |  |  |
| --- | --- | --- |
| 기능 | **Order Submitted**(주문 제출) | **Order Form Submitted**(주문 폼 제출) |
| 트리거 실행 | 상품을 구매할 때마다 실행돼요(기본 상품, 범프, 업셀). | 구매한 상품 수와 관계없이 주문 제출 1건당 한 번 실행돼요. |
| 필터 기능 | 상품, 가격, 소스, 제출 유형으로 필터링할 수 있어요. | 상품이나 가격으로는 필터링할 수 없어요. |
| 커스텀 값 | 상품 이름, 가격, 수량 같은 주문 정보를 제공해요. | 확인할 수 있는 주문 정보가 제한적이에요. |

## Order Submitted 워크플로우 트리거 설정하기

### 워크플로우 빌더 열기

1. 왼쪽 메뉴에서 **자동화 > 워크플로우**를 선택하세요.
2. 새로 만들려면 **+ Create Workflow**(워크플로우 만들기)를 클릭하세요. 이미 있는 워크플로우에 트리거를 추가하려면 목록에서 워크플로우를 찾아 열어 주세요.

![워크플로우 목록 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041447244/original/KLPycPHwFyJvar-6Uifu3gF0yGEd0wRCng.png?1739354237)

### Order Submitted 트리거 추가하기

1. 워크플로우 빌더 안에서 **Add New Trigger**(새 트리거 추가)를 클릭하세요.
2. 검색창에 Order Submitted를 입력하고, 목록에서 **Order Submitted**를 선택하세요.
3. 필요하면 상품 유형, 주문 소스, 제출 정보 등으로 필터를 추가해 트리거를 더 세밀하게 설정하세요.

![트리거 목록에서 Order Submitted 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041448111/original/C9kYGDOj50r0ywoURh10ZgKotD6Y141hiQ.png?1739354689)

### 트리거 이름 정하기

트리거에 목적이 잘 드러나는 구체적인 이름을 붙여 주세요. 이름이 분명하면 워크플로우 안에서 트리거를 찾고 관리하기 쉬워요. 자동화 설정을 나중에 점검할 때도 헷갈리지 않아요.

![트리거 이름 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041449901/original/Jr9Vkn5E8TTTXimIQ_7xH8yh0AquP-jb8A.png?1739355684)

### 필터 적용하기

필터를 쓰면 주문 정보를 조건으로 워크플로우 트리거를 세밀하게 조정할 수 있어요. 조건에 맞는 주문일 때만 자동화가 실행돼요.

아래에서 사용할 수 있는 필터와 연산자를 확인하세요.

#### Global Product

**Global Product**(전역 상품) 필터는 특정 상품이나 가격을 기준으로 워크플로우를 실행해요. 드롭다운 메뉴에서 **Is**(다음과 같음) 또는 **Is Not**(다음과 같지 않음)을 골라 상품을 포함하거나 제외할 수 있어요. 특정 상품 구매자에게만 후속 안내나 구매 후 혜택을 보내고 싶을 때 유용해요.

- **Is:** 지정한 상품을 구매했을 때만 워크플로우가 실행돼요.
- **Is Not:** 선택한 상품을 제외한 모든 상품에 대해 워크플로우가 실행돼요.

![Global Product 필터 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041451561/original/VB2bGF6uQ2iu5TCoVnSXZfn9WnLiiFrHYg.png?1739356561)

#### Order Source

**Order Source**(주문 소스) 필터는 주문이 어디에서 들어왔는지를 기준으로 해요. 선택한 소스에서 들어온 구매일 때만 워크플로우가 실행돼요. 선택할 수 있는 옵션은 다음과 같아요.

|  |  |
| --- | --- |
| **Filter Option**(필터 옵션) | 설명 |
| **External**(외부) | 외부 연동이나 타사 시스템을 통해 들어온 주문이에요. |
| **Form**(폼) | 일반 폼(주문 폼 제외)으로 제출된 주문이에요. |
| **Membership**(멤버십) | 멤버십 상품에 대한 구매예요. |
| **Order Form**(주문 폼) | 주문 폼으로 처리된 거래예요. |
| **Payment Link**(결제 링크) | 결제 링크로 바로 완료된 주문이에요. |
| **Store**(스토어) | 온라인 스토어에서 이루어진 구매예요. |
| **Survey**(설문) | 설문 폼으로 제출된 주문이에요. |

연산자:

- **Is:** 선택한 주문 소스일 때만 워크플로우가 실행돼요.
- **Is Not:** 선택한 주문 소스는 트리거에서 제외돼요.

![Order Source 필터 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041451651/original/W6xZaFYIhJbqLJjgA7n2mVsyX0laW4SHEQ.png?1739356598)

#### Sub-Source

**Sub-Source**(하위 소스) 필터는 **Order Source**를 한 단계 더 좁혀요. 선택한 소스 안에서 특정 퍼널, 페이지 같은 세부 항목을 지정할 수 있어요. 주문이 메인 소스의 특정 세부 영역에서 들어왔을 때만 워크플로우가 실행돼요.

예를 들면 다음과 같아요.

**Order Source**를 **Order Form**으로 선택했다면, **Sub-Source**로 주문 폼이 제출된 특정 퍼널이나 웹사이트를 지정할 수 있어요.

**Order Source**가 **Store**라면, **Sub-Source**로 구매가 이루어진 특정 상품 카테고리나 스토어 영역을 지정할 수 있어요.

연산자:

- **Is:** 주문이 선택한 하위 소스와 일치할 때만 워크플로우가 실행돼요.
- **Is Not:** 선택한 하위 소스의 주문은 제외돼요.

![Sub-Source 필터 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041453920/original/XSKgeqL9Ut_CvNhh52QzaUF8dCMQ-6S4og.png?1739357968)

#### In Funnel/Website

**In Funnel/Website**(퍼널/웹사이트 내) 필터는 특정 퍼널이나 웹사이트에서 주문 폼이 제출될 때만 워크플로우를 실행해요. 어떤 판매 채널에서 들어온 주문인지에 따라 자동화를 나눌 수 있어요. 퍼널을 여러 개 운영하거나 상품·서비스별로 웹사이트가 다른 경우에 특히 유용해요.

예를 들면 다음과 같아요.

여러 퍼널에서 상품을 판매한다면, 특정 퍼널에서 주문이 제출될 때만 워크플로우를 실행할 수 있어요.

프로모션마다 랜딩 페이지가 다르다면, 이 필터로 퍼널이나 웹사이트의 특정 페이지에서 들어온 주문일 때만 워크플로우를 실행할 수 있어요.

사용할 수 있는 연산자:

- **Is:** 선택한 퍼널이나 웹사이트에서 주문이 제출될 때만 워크플로우가 실행돼요.
- **Is Not:** 선택한 퍼널이나 웹사이트의 주문은 제외돼요.

![In Funnel/Website 필터 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041455510/original/TcbjTdl0sBMEDuLY37dmIIXHxIff2vGtSg.png?1739359008)

#### Page Is

**Page Is**(페이지) 필터는 퍼널이나 웹사이트의 특정 페이지에서 주문 폼이 제출될 때만 워크플로우를 실행해요. 고객이 결제를 마친 정확한 페이지를 기준으로 자동화를 정교하게 만들 수 있어요.

예를 들면 다음과 같아요.

퍼널에 결제 페이지, 감사 페이지, 업셀 페이지처럼 여러 페이지가 있다면, 등록 폼이나 결제 페이지처럼 선택한 페이지에서 주문이 제출될 때만 워크플로우가 실행되도록 할 수 있어요.

웹사이트의 여러 페이지에 주문 폼이 있다면, 퍼널이나 웹사이트 전체가 아니라 특정 주문 페이지에서만 워크플로우가 실행되게 제한할 수 있어요.

사용할 수 있는 연산자:

- **Is:** 선택한 페이지에서 주문이 제출될 때만 워크플로우가 실행돼요.
- **Is Not:** 선택한 페이지의 주문은 제외돼요.

![Page Is 필터 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041456803/original/pPELnia5Lg3ESK6wczTCfBKZn1uWCSOAkA.png?1739359842)

#### Submission Type

**Submission Type**(제출 유형) 필터는 구매 유형에 따라 워크플로우를 실행해요. 구매 유형별로 후속 안내와 구매 후 작업을 자동화할 수 있어요. 특정 유형의 거래가 일어날 때만 워크플로우가 활성화돼요.

|  |  |
| --- | --- |
| 옵션 | 설명 |
| **Primary**(기본 구매) | 고객이 결제 단계에서 메인 상품을 구매할 때 실행돼요. 주문 폼으로 처음 구매하는 상품이에요. |
| **Bump**(범프) | 결제 중 범프 오퍼를 수락할 때 실행돼요. 범프 오퍼는 고객이 메인 상품과 함께 구매할 수 있는 선택형 추가 상품이에요. |
| **Upsell**(업셀) | 결제 후 업셀을 수락할 때 실행돼요. 업셀은 첫 구매가 끝난 뒤 보여 주는 추가 제안으로, 주문 금액을 늘리려는 목적이 많아요. |

![Submission Type 필터 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041457552/original/FYpZwBGu8g7zoNf_bNGKc_3bPsa0vB6VTw.png?1739360381)

#### Product Price

**Product Price**(상품 가격) 필터는 상품의 구체적인 가격을 기준으로 워크플로우를 실행해요. 정가, 할인가, 프로모션 가격에 따라 다르게 처리할 수 있어요. 지정한 가격으로 상품을 구매했을 때만 워크플로우가 활성화돼요.

사용할 수 있는 연산자:

- **Is:** 주문 폼에 설정된 특정 가격으로 상품을 구매하면 워크플로우가 실행돼요.
- **Is not**(다음이 아님): 지정한 가격이 아닌 다른 가격으로 상품을 구매하면 워크플로우가 실행돼요.

![Product Price 필터 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041457186/original/FYkeDjYIGGnznC1EeVoKA8LszdSfuPL4ng.png?1739360116)

### Allow Multiple 켜기 (업셀·범프에 권장)

기본 구매와 업셀 모두에서 자동화가 매끄럽게 실행되게 하려면, 워크플로우 설정에서 **Allow Multiple**(여러 번 허용)을 켜는 것을 권장해요. 범프 오퍼와 업셀을 포함해 구매 이벤트마다 워크플로우가 따로 실행돼요.

|  |  |
| --- | --- |
| **Allow Multiple**이 ON일 때 | 같은 연락처에 대해 워크플로우가 여러 번 실행될 수 있어요. 기본 구매와 이후 업셀 구매가 각각 따로 처리돼요. |
| **Allow Multiple**이 OFF일 때 | 기본 구매로 시작된 워크플로우가 아직 진행 중이면, 고객이 업셀을 구매해도 새 워크플로우가 시작되지 않아요. |

{% hint style="info" %}
**Allow Multiple**을 ON으로 두면 지연 없이 업셀과 범프 오퍼가 워크플로우를 제대로 실행해요. 매출 기회를 놓치지 않고 고객과 소통하는 데 도움이 돼요.
{% endhint %}

![Allow Multiple 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041458623/original/X3hNZ7vn-fIj-15ytERk82g925XxdyR9_Q.png?1739361076)

### 워크플로우 저장하고 게시하기

**Order Submitted** 트리거 설정과 필요한 필터 적용을 마쳤다면 워크플로우를 마무리하세요.

1. **Save**(저장)를 클릭해 트리거 설정을 모두 적용하세요.
2. **Publish**(게시)를 클릭해 워크플로우를 활성화하세요. 이제 주문이 자동으로 처리돼요.
3. 테스트 주문을 제출한 뒤 **Workflow History**(워크플로우 기록)에서 트리거가 의도대로 실행됐는지 확인하세요.

## 자주 묻는 질문

### 이 트리거는 업셀 구매에도 작동하나요?

네, **Order Submitted** 트리거는 기본 구매와 업셀 모두에서 실행돼요. 단, 워크플로우 설정에서 **Allow Multiple**을 켜 두어야 해요.

### 이 트리거로 주문 확인 메시지를 보낼 수 있나요?

네, 주문 확인 이메일을 자동으로 보낼 수 있어요. **Shopping Cart**(장바구니) 요소를 쓰면 상품 정보를 이메일에 자동으로 넣을 수 있어요.

### 특정 상품에서만 워크플로우가 실행되게 하려면 어떻게 하나요?

**Global Product** 필터를 사용하고 **Is** 또는 **Is Not**을 선택해 특정 상품을 포함하거나 제외하세요.

### 이 트리거가 기존 주문 폼 워크플로우에 영향을 주나요?

아니요, **Order Submitted** 트리거는 **Order Form Submitted** 트리거와 별개로 작동해요. 그래서 워크플로우 실행을 더 세밀하게 제어할 수 있어요.

### 결제 수단에 따라 워크플로우를 실행할 수 있나요?

네, 결제 게이트웨이(Stripe, PayPal 등)를 기준으로 필터를 적용하면 결제 수단별로 다른 워크플로우를 실행할 수 있어요. <!-- 검토 필요: 원문 내용이 서로 다름 -->
