---
원문: /support/solutions/articles/155000005660-workflow-trigger-coupon-redemption-limit-reached
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Coupon Redemption Limit Reached(쿠폰 사용 한도 도달)

쿠폰 코드가 허용된 최대 사용 횟수에 도달했을 때 워크플로우를 자동으로 실행하는 트리거예요. 이 문서에서 설정 방법, 활용 이점, 사용할 수 있는 필터를 안내해요. 캠페인 관리, 내부 알림, 프로모션 통제에 쓰기 좋아요.

## Coupon Redemption Limit Reached 트리거란?

**Coupon Redemption Limit Reached**(쿠폰 사용 한도 도달) 트리거는 쿠폰 코드가 허용된 최대 사용 횟수에 도달했을 때 실행돼요. 해당 쿠폰을 쓴 마지막 거래가 정상적으로 완료된 뒤에 작동해요.

기간이나 수량이 한정된 프로모션을 관리하는 마케팅·운영팀에 유용해요. 많이 사용된 쿠폰을 자동으로 멈추거나, 팀에 알려서 다른 오퍼로 교체하거나 종료하게 할 수 있어요.

## 주요 이점

- 수량이 한정된 쿠폰의 과다 사용 방지: 사용 한도에 도달하면 바로 알림을 받아요.
- 진행 중인 프로모션 통제: 적절한 시점에 쿠폰을 자동으로 비활성화하거나 교체할 수 있어요.
- 수동 확인 없이 알림·후속 조치 실행: 사용량을 직접 살피지 않아도 수요가 높은 캠페인을 놓치지 않아요.
- 고객 경험 개선: 소진된 쿠폰을 자동화 액션으로 다른 오퍼로 바꿔 안내할 수 있어요.
- 프로모션 마무리: 캠페인의 사용 목표에 도달하면 영업팀과 마케팅팀이 바로 알 수 있어요.

## 설정 방법

워크플로우 빌더에서 아래 순서로 트리거를 설정하세요.

### 1단계: 워크플로우에 트리거 추가

1. **자동화 > 워크플로우**로 이동해요.
2. 새 워크플로우를 만들거나 기존 워크플로우를 열어요.
3. 워크플로우 빌더에서 **+ Add New Trigger**(새 트리거 추가)를 클릭해요.

![트리거 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050401471/original/2ENHmA9VN1KwSs6oNQkcFlNrULOlDUsKJA.png?1753388951)

### 2단계: 트리거 유형 선택

트리거 목록에서 **Payments**(결제) 섹션으로 스크롤한 뒤 **Coupon Redemption Limit Reached**를 선택해요.

![Payments 섹션에서 트리거 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050401529/original/tu7X7T-ItOhrgrqmHv6I_2m5W8JxY0K37w.png?1753389059)

### 3단계: 트리거 이름 지정

**Workflow Trigger Name**(워크플로우 트리거 이름) 필드에 알아보기 쉬운 이름을 입력해요. 워크플로우를 정리하는 데 도움이 돼요.

예: "FlashSaleCouponLimitreached"

![트리거 이름 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050401090/original/3tY5oaN8xXbcEI5fzzosu7Rn6Idd08XIhw.png?1753388014)

### 4단계: 필터로 특정 상황만 지정

1. 트리거 이름을 입력한 뒤, 필터를 추가해 워크플로우가 실행될 조건을 좁힐 수 있어요.
2. 필터를 추가하려면 **+ Add Filters**(필터 추가)를 클릭해요.
3. 필터마다 **Is**, **Contains**, **Greater Than**, **Before/After** 같은 연산자가 있어요. 원하는 조건에 맞게 골라 정확하게 지정하세요. 필터 목록은 [사용할 수 있는 필터](#사용할-수-있는-필터)에서 확인할 수 있어요.

![필터 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050401224/original/zuviGWg5T8OsLb4htEOJP-G84HYbv1eBDg.png?1753388345)

### 5단계: 저장하고 워크플로우 완성

1. 트리거와 필터 설정이 끝나면 **Save Trigger**(트리거 저장)를 클릭하고, 필요한 액션을 워크플로우에 추가해요.
2. 다 만들었으면 **Test Workflow**(워크플로우 테스트)로 제대로 작동하는지 확인해요.
3. **Publish**(게시)를 클릭해 워크플로우를 활성화해요.

![트리거 저장 및 게시 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049300913/original/xIU1T3gXpIxVA2z8z3tjWi6HdCKKyQMCJg.png?1751551021)

## 사용할 수 있는 필터

| 필터 | 연산자 | 입력 유형 |
| --- | --- | --- |
| **Coupon Code**(쿠폰 코드) | **Is Any Of**(다음 중 하나) / **Is Empty**(비어 있음) / **Is None Of**(다음 중 어느 것도 아님) / **Is Not Empty**(비어 있지 않음) | 활성 쿠폰 코드 다중 선택 드롭다운 |
| **Coupon Name**(쿠폰 이름) | **Is Any Of** / **Is Empty** / **Is None Of** / **Is Not Empty** | 활성 쿠폰 이름 다중 선택 드롭다운 |
| **Coupon Type**(쿠폰 유형) | **Is**(일치) / **Is Empty** / **Is Not**(일치하지 않음) / **Is Not Empty** | 단일 선택 드롭다운(Amount 또는 Percentage) |
| **Redemption Limit**(사용 한도) | **Equals To**(같음) / **Greater Than**(초과) / **Greater Than or Equal To**(이상) / **Is Empty** / **Is Not Empty** / **Is Not Equal To**(같지 않음) / **Less Than**(미만) / **Less Than or Equal To**(이하) | 숫자 입력란 |

## 쿠폰 한도 알림에 추천하는 워크플로우 액션

**Coupon Redemption Limit Reached** 트리거가 활성화되면 다음과 같은 액션을 자동화할 수 있어요.

- **Internal Notification**(내부 알림): 쿠폰이 사용 한도에 도달하면 마케팅팀이나 영업팀에 바로 알려요.
- **Send Email**(이메일 보내기): 관리자나 캠페인 담당자에게 알려서 적절히 조치하게 해요.
- **Add Tag**(태그 추가): 쿠폰이나 관련 캠페인에 태그를 붙여 리포팅과 세그먼트에 활용해요.
- 쿠폰 일시중지 또는 비활성화: 쿠폰 관리 로직이 연결되어 있다면 API로 쿠폰을 자동으로 비활성화해요.
- **Send SMS**(SMS 전송): 수요가 높은 쿠폰이 소진되면 내부 직원에게 문자로 알려요.

## 자주 묻는 질문

### 사용 한도에 가까워졌을 때도 트리거가 실행되나요, 아니면 한도에 도달했을 때만 실행되나요?
완료된 거래로 쿠폰의 최대 허용 사용 횟수에 도달했을 때만 실행돼요.

### 어떤 유형의 쿠폰이 한도에 더 빨리 도달하는지 확인할 수 있나요?
네. **Coupon Type** 필터를 사용하면 **Percentage**(비율) 쿠폰과 **Fixed Amount**(고정 금액) 쿠폰의 활동을 나눠서 볼 수 있어요.

### 필터를 하나도 적용하지 않으면 어떻게 되나요?
사용 한도에 도달하는 모든 쿠폰에 대해 워크플로우가 실행돼요. 특정 캠페인만 확인하려면 **Coupon Code Is**나 **Coupon Name Contains** 같은 필터를 사용하세요.

### 사용 한도 값에 따라 다르게 실행되게 할 수 있나요?
네. **Redemption Limit** 필터에 **Greater Than**이나 **Is** 같은 연산자를 사용하면 한도 수준별로 조건을 나눈 워크플로우를 만들 수 있어요.
