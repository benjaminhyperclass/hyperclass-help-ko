---
원문: /support/solutions/articles/155000003366-workflow-action-stripe-one-time-charge
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Stripe One Time Charge(Stripe 일회성 결제)

**Stripe One Time Charge**(Stripe 일회성 결제) 액션은 Stripe 계정에 등록된 특정 고객에게 정해진 금액을 한 번 결제하게 해요. 구독이나 분할 결제 없이 결제를 받고 싶을 때 써요.

## 액션 설명

이 액션은 지정한 고객에게 정해진 금액을 Stripe에서 한 번 결제해요. 결제하려면 유효한 Stripe 고객 ID, 금액, 설명, 통화가 필요해요.
## 액션 상세 정보

![Stripe One Time Charge 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032467636/original/PdJCwJ8ssxtID0-al7VwSXqM7w1dC1-GtA.png?1725821253)

### 설정 방법

1. **Action Name**(액션 이름)에 알아보기 쉬운 이름을 입력해요. 예: "Stripe One Time Charge"
2. **Stripe Customer ID**(Stripe 고객 ID)에 결제할 고객의 Stripe 고객 ID를 입력하거나 선택해요.
3. **Description**(설명)에 결제 내용을 간단히 적어요. 선택 항목이에요.
4. **Amount**(금액)에 고객에게 결제할 금액을 입력해요.
5. **Currency**(통화)에서 결제에 사용할 통화를 선택해요.

| 필드 이름 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Stripe Customer ID** | 결제할 Stripe 고객을 구분하는 고유 ID | 필수 |
| **Description** | 결제 설명 (예: 내역 확인용 메모) | 선택 |
| **Amount** | 고객에게 결제할 금액 | 필수 |
| **Currency** | 금액을 결제할 통화 | 필수 |

## 사용 예시

한 번만 받는 서비스 요금을 결제할 때 이 액션을 쓸 수 있어요. 예를 들어 1회 상담료 150달러를 받는다면 **Amount**에 150을 입력하고 **Currency**에서 USD를 선택해요. 결제가 시작되면 Stripe에서 금액이 처리되고, 지정한 고객의 계정에 연결돼요.

## 함께 쓰면 좋은 트리거

**Stripe One Time Charge** 액션과 함께 쓸 만한 트리거예요.

1. **Form Submission**(폼 제출): 구매하거나 서비스를 요청하겠다는 폼을 고객이 제출하면 자동으로 결제해요.
2. **Tag Added**(태그 추가됨): 고객 프로필에 특정 태그(예: "구매 준비 완료")가 추가되면 일회성 결제를 진행해요.
3. **Appointment Confirmed**(예약 확정됨): 서비스 예약이 확정된 뒤 고객에게 자동으로 결제해요.
4. **Order Completed**(주문 완료): 시스템에서 주문이 완료 처리되면 결제해요.
5. **Email Link Clicked**(이메일 링크 클릭): 이메일에 담긴 결제 관련 링크를 클릭한 고객에게 자동으로 결제해요.

## 추가 참고 사항

- 이 액션을 쓰기 전에 Stripe 연동을 먼저 설정하세요.
- Stripe 고객 ID가 유효한지 확인하세요. 그렇지 않으면 결제가 실패할 수 있어요.
- 이 액션은 일회성 결제에만 쓰세요. 정기 결제가 필요하면 구독 같은 다른 Stripe 관련 액션을 사용하세요.
- 이 액션은 서브 계정이 자기 연락처에게 결제를 청구하는 용도로 만든 것이 아니에요. 에이전시가 서브 계정 관리자에게 결제를 청구하는 용도예요.
