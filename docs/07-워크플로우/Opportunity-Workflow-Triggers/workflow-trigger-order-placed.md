---
원문: /support/solutions/articles/155000003255-workflow-trigger-order-placed
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Order Placed(주문 접수)

**Order Placed**(주문 접수) 트리거는 고객이 주문하면 워크플로우를 시작해요. 주문이 확정된 직후에 후속 안내를 보내거나 정보를 업데이트하는 등의 작업을 자동으로 실행할 때 쓰세요.

## 트리거 이름

**Order Placed**

## 트리거 설명

고객이 주문하면 이 트리거가 작동해요. 주문 확인 이메일 발송, CRM 정보 업데이트, 재고 관리 같은 작업을 자동화할 수 있어요. 필터를 설정하면 카트 금액이나 상품 종류처럼 주문과 관련된 특정 조건에서만 작동하게 할 수도 있어요.

## 설정 방법

1. **Workflow Trigger**(워크플로우 트리거) 목록에서 **Order Placed**를 선택하세요.
2. **Workflow Trigger Name**(트리거 이름)에 알아보기 쉬운 이름을 입력하세요. 예를 들어 "Order Placed"라고 써도 좋아요.
3. **Filters**(필터)에서 워크플로우가 실행될 조건을 정하세요. 예를 들어 **Cart Value**(카트 금액)를 기준으로 필터를 걸면, 주문 총액에 따라 서로 다른 작업을 실행할 수 있어요.

| 항목 | 설명 | 필수 여부 |
| --- | --- | --- |
| Cart Value | 고객 카트에 담긴 상품의 총 금액이에요. | 선택 |
| Operator(연산자) | **Equals to**(같음), **Greater than**(초과), **Greater than or Equal to**(이상), **Less than**(미만) 등의 비교 연산자예요. | 선택 |

![Order Placed 트리거의 필터 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032021734/original/KnZXQYJh7sCPAmjPVH1u_iYtCdXC-Eb3-A.png?1725186844)

## 예시

카트 금액이 $150 이상인 주문을 한 고객에게 감사 이메일을 보내고, 다음 구매에 쓸 수 있는 할인 쿠폰도 함께 주려고 해요.

- **Configuration**(구성):
  - **Trigger**(트리거): Order Placed
  - **Filters**(필터):
    - **Cart Value**: Greater than or Equal to
    - **Value**(값): $150
- **Actions**(작업): 트리거가 작동하면 다음 순서로 실행돼요.
  1. 구매에 감사하는 이메일을 고객에게 자동으로 보내요.
  2. 감사 이메일에 다음 구매에 쓸 수 있는 할인 쿠폰을 넣어요.
  3. CRM의 고객 프로필을 업데이트해서 로열티 혜택 대상임을 표시해요.

이렇게 설정하면 구매 금액이 큰 고객에게 맞춤 안내를 보낼 수 있어요. 고객과의 관계를 쌓고 재구매를 유도하는 데 도움이 돼요.
