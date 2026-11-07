---
원문: https://help.gohighlevel.com/support/solutions/articles/155000005658-workflow-trigger-coupon-code-redeemed
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Coupon Code Redeemed(쿠폰 코드 사용됨)

고객이 쿠폰을 쓴 결제가 완료되면 자동으로 워크플로우를 실행하는 트리거예요. 설정 방법, 활용 방법, 필터 종류를 안내해요. 고객 소통, 로열티 보상, 내부 알림, 구매 후 후속 안내에 활용하면 좋아요.

## Coupon Code Redeemed 트리거란?

**Coupon Code Redeemed**(쿠폰 코드 사용됨) 트리거는 쿠폰 코드가 완료된 거래에서 정상적으로 사용되면 실행돼요.

**Coupon Code Applied**(쿠폰 코드 적용됨) 트리거는 결제 완료 여부와 상관없이 쿠폰이 적용되기만 하면 실행돼요. 반면 이 트리거는 주문이 확정되고 결제가 끝났을 때만 실행돼요.

실제로 쿠폰이 사용된 건을 파악하고 구매 직후 바로 조치하려는 마케팅·영업 팀에 유용해요. 감사 메시지 보내기, 고액 고객에게 태그 달기, 로열티 보상 실행 같은 작업을 자동으로 처리할 수 있어요.

## 이 트리거를 쓰면 좋은 점

구매 이후 흐름을 자동화해서 고객 만족도를 높이고 운영을 간소화할 수 있어요.

- 구매 후 소통: 쿠폰을 사용해 구매한 직후 감사 이메일, 온보딩 자료, 교차 판매 제안을 바로 보낼 수 있어요.
- VIP 분류: 고액 쿠폰이나 전용 쿠폰을 사용한 고객에게 태그를 달고, 로열티 캠페인으로 관리할 수 있어요.
- 팀 간 협업: 할인율이 높거나 한정판인 주문이 우선 처리되도록 배송·영업·지원 팀에 실시간으로 알릴 수 있어요.
- 성과 확인: 전환이 잘 되는 쿠폰 코드를 파악해 다음 프로모션을 개선할 수 있어요.
- 운영 효율: 쿠폰 사용 현황을 직접 확인하지 않아도 자동으로 모니터링하고 후속 작업을 실행할 수 있어요.

## Coupon Code Redeemed 트리거 설정하기

워크플로우 빌더에서 아래 순서대로 설정하세요.

### 1단계: 워크플로우에 트리거 추가하기

1. **자동화 > 워크플로우**로 이동하세요.
2. 새 워크플로우를 만들거나 기존 워크플로우를 열어요.
3. 워크플로우 빌더에서 **+ Add New Trigger**(새 트리거 추가)를 클릭하세요.

![트리거 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050549947/original/swkQrj6uGihCga4bZ5fs4VAgXOsMVc6btg.png?1753723609)

### 2단계: 트리거 유형 선택하기

트리거 목록에서 **Payments**(결제) 섹션으로 스크롤한 뒤 **Coupon Code Redeemed**를 선택하세요.

![Payments 섹션에서 Coupon Code Redeemed 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050550009/original/WCcLgUx4rxLLcYK5GCoaDOiynbEWBMQ-TQ.png?1753723734)

### 3단계: 트리거 이름 정하기

1. **Workflow Trigger Name**(워크플로우 트리거 이름) 필드에 알아보기 쉬운 이름을 입력하세요. 워크플로우를 정리하는 데 도움이 돼요.
2. 예: Coupon Code Redeemed (HolidayFlashSale)

![트리거 이름 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050550050/original/rPBngX6TU7KW1rQnBDd37NU-PNgkXFgROw.png?1753723815)

### 4단계: 필터로 대상 조건 좁히기

1. 트리거 이름을 정한 뒤 필터를 적용하면 워크플로우가 실행될 조건을 정확히 좁힐 수 있어요.
2. 필터를 추가하려면 **+ Add Filters**(필터 추가)를 클릭하세요.
3. 필터마다 쓸 수 있는 연산자(Is, Contains, Greater Than, Before/After 등)가 정해져 있어요. 원하는 조건을 정확히 지정하세요.

사용할 수 있는 필터 목록은 아래 **사용 가능한 필터** 표를 참고하세요.

![필터 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050550190/original/U3NC8v9SNG_N3QOgi-Mh1ndm8Ge25Czaww.png?1753724005)

### 5단계: 저장하고 워크플로우 만들기

1. 트리거와 필터 설정이 끝나면 **Save Trigger**(트리거 저장)를 클릭하고, 필요한 액션을 워크플로우에 추가하세요.
2. 다 만들었으면 **Test Workflow**(워크플로우 테스트)로 제대로 동작하는지 확인하세요.
3. **Publish**(게시)를 클릭하면 워크플로우가 활성화돼요.

![트리거 저장 및 워크플로우 게시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049298933/original/tN0plTsaRDbOYWmoJY0MGUIfkOd1z2pzhg.png?1751549653)

## 사용 가능한 필터

필터와 연산자 이름은 워크플로우 빌더 화면에 영어로 표시돼요.

{% hint style="info" %}
연산자 뜻은 다음과 같아요.
- Is(같음), Is Not(같지 않음), Is Empty(비어 있음), Is Not Empty(비어 있지 않음)
- Contains Phrase(문구 포함), Contains Any(하나라도 포함)
- Is Any Of(목록 중 하나), Is None Of(목록에 하나도 없음)
- Equals To(같음), Is Not Equal To(같지 않음)
- Greater Than(초과), Greater Than or Equal To(이상), Less Than(미만), Less Than or Equal To(이하)
{% endhint %}

| 필터 | 연산자 | 입력 유형 |
| --- | --- | --- |
| Contact Email ID(연락처 이메일 ID) | Contains Phrase / Is Not Empty | 텍스트 입력 |
| Contact Tag(연락처 태그) | Contains Phrase / Is Not Empty | 텍스트 입력 |
| Coupon Code(쿠폰 코드) | Is Any Of / Is Empty / Is None Of / Is Not Empty | 쿠폰 코드 다중 선택 드롭다운 |
| Coupon Name(쿠폰 이름) | Is Any Of / Is Empty / Is Not / Is Not Empty | 쿠폰 이름 다중 선택 드롭다운 |
| Coupon Type(쿠폰 유형) | Is / Is Empty / Is Not / Is Not Empty | Amount(금액) / Percentage(퍼센트) |
| Coupon Value(쿠폰 값) | Equals To / Greater Than / Greater Than or Equal To / Is Empty / Is Not Empty / Is Not Equal To / Less Than / Less Than or Equal To | 숫자 입력 상자 |
| Order Value (Before Discount)(주문 금액, 할인 전) | Equals To / Greater Than / Greater Than or Equal To / Is Empty / Is Not Empty / Is Not Equal To / Less Than / Less Than or Equal To | 숫자 입력 상자 |
| Product Collection(상품 컬렉션) | Contains Any / Is Empty / Is None Of / Is Not Empty | 상품 컬렉션 다중 선택 드롭다운 |
| Product Type(상품 유형) | Contains Any / Is Empty / Is None Of / Is Not Empty | 상품 유형 다중 선택 드롭다운(일회성 vs 정기) |
| Product(s) in Order(주문에 포함된 상품) | Contains Any / Is Empty / Is None Of / Is Not Empty | 상품 다중 선택 드롭다운 |
| Redemption Count (per coupon)(쿠폰별 사용 횟수) | Equals To / Greater Than / Greater Than or Equal To / Is Empty / Is Not Empty / Is Not Equal To / Less Than / Less Than or Equal To | 숫자 입력 상자 |
| Source(유입 경로) | Is / Is Empty / Is Not Empty / Is Not | 단일 선택 드롭다운 |

## 쿠폰 사용 시 추천하는 워크플로우 액션

**Coupon Code Redeemed** 트리거를 설정한 뒤 아래 액션을 추가하면 고객 유지, 추가 판매, 내부 알림에 도움이 돼요.

- **Send Email**(이메일 보내기): 주문에 감사 인사를 전하고 다음 프로모션을 안내해요.
- **Add Tag**(태그 추가): 사용한 쿠폰에 따라 고객에게 태그를 달아요. 예: `FlashSaleUser`
- **Internal Notification**(내부 알림): 주요 쿠폰이 사용되면 영업·마케팅 팀에 알려요.
- **Send SMS**(SMS 전송): 감사 메시지나 다음 구매에 쓸 특별 혜택을 보내요.
- **Create/Update Opportunity**(기회 만들기/업데이트): 고액 쿠폰 사용 고객을 영업 파이프라인에 추가해 후속 조치를 해요.

## 자주 묻는 질문

### 쿠폰은 적용했지만 주문이 완료되지 않으면 이 트리거가 실행되나요?
아니요. 이 트리거는 쿠폰이 완료된 거래에서 정상적으로 사용됐을 때만 실행돼요. 결제 단계에서 자동화하려면 **Coupon Code Applied** 트리거를 사용하세요.

### 쿠폰이 어떤 상품에 사용됐는지 추적할 수 있나요?
네. **Product(s) in Order**와 **Product Collection** 필터를 사용하면 쿠폰이 사용된 시점의 상품 선택을 기준으로 조건을 좁힐 수 있어요.

### 필터를 하나도 적용하지 않으면 어떻게 되나요?
완료된 모든 거래에서 쿠폰이 사용될 때마다 워크플로우가 실행돼요. 특정 프로모션만 대상으로 하려면 **Coupon Code** Is나 **Coupon Type** Is 같은 필터를 쓰는 것이 좋아요.

### 주문 금액이나 쿠폰 값에 따라 액션을 실행할 수 있나요?
네. **Order Value (Before Discount)**와 **Coupon Value** 필터에 **Greater Than**, **Less Than** 같은 연산자를 조합하면 워크플로우가 실행되는 시점을 조절할 수 있어요.

### 이 트리거로 쿠폰 사용 한도를 자동으로 확인할 수 있나요?
네. **Redemption Count (per coupon)** 필터를 사용하면 쿠폰 사용 횟수가 특정 숫자에 도달했을 때 액션을 실행할 수 있어요.

### 한 번의 구매에 쿠폰을 여러 개 쓰면 어떻게 되나요?
이 트리거는 쿠폰마다 따로 판단해요. 워크플로우가 반응할 쿠폰 코드를 필터로 지정하세요.
