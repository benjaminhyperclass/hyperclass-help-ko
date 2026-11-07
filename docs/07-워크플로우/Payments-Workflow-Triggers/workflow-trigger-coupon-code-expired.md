---
원문: /support/solutions/articles/155000005661-workflow-trigger-coupon-code-expired
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Coupon Code Expired(쿠폰 코드 만료)

쿠폰 코드가 만료일에 도달해 비활성 상태가 되는 순간 자동으로 작업을 실행하는 트리거예요. 프로모션 마무리, 고객 후속 안내, 내부 알림에 쓰기 좋아요. 이 문서에서 설정 방법과 활용 방법을 알아보세요.

## Coupon Code Expired 워크플로우 트리거란?

**Coupon Code Expired**(쿠폰 코드 만료) 트리거는 쿠폰 코드가 예정된 만료일에 도달해 비활성 상태가 될 때 실행돼요. 기간이 정해진 프로모션을 관리할 때 유용해요. 혜택을 놓친 고객에게 후속 안내를 보내거나, 만료된 쿠폰을 새 쿠폰으로 교체하거나, 혜택이 끝났음을 내부 팀에 알릴 수 있어요.

## Coupon Code Expired 트리거의 장점

- 즉시 알림: 주요 쿠폰이 만료되면 영업, 지원, 마케팅 팀에 바로 알려서 곧장 대응할 수 있어요.
- 고객 재참여 유도: 혜택을 놓친 고객에게 후속 오퍼나 기간 연장 안내를 보내 전환 기회를 높일 수 있어요.
- 캠페인 정리: 쿠폰이 만료되면 태그를 보관하고, 기회를 닫고, 광고를 중단하는 작업을 자동으로 처리해서 데이터를 깔끔하게 유지할 수 있어요.
- 일관된 고객 경험: 고객이 만료된 쿠폰을 다시 쓰려고 하기 전에 더 이상 유효하지 않다고 미리 알려서 혼란을 막을 수 있어요.

## Coupon Code Expired 트리거 설정하기

워크플로우 빌더에서 아래 순서로 설정하세요.

#### 1단계: 워크플로우에 트리거 추가하기

1. **자동화 > 워크플로우**로 이동하세요.
2. 새 워크플로우를 만들거나 기존 워크플로우를 열어요.
3. 워크플로우 빌더에서 **+ Add New Trigger**(새 트리거 추가)를 클릭하세요.

![트리거 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050551956/original/KS83c0dS2PvtlP4YCrV05IBN_GsjzQallg.png?1753727277)

#### 2단계: 트리거 유형 선택하기

트리거 목록에서 **Payments**(결제) 섹션으로 스크롤한 다음 **Coupon Code Expired**를 선택하세요.

![Payments 섹션에서 Coupon Code Expired 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050551986/original/iS9zpAvHNi_rsInKm1vVz0rroVNwkUHKVA.png?1753727377)

#### 3단계: 트리거 이름 정하기

1. **Workflow Trigger Name**(워크플로우 트리거 이름) 필드에 알아보기 쉬운 이름을 입력하세요. 워크플로우를 정리하는 데 도움이 돼요.
2. 예시: *SummerSaleCouponExpired*

![트리거 이름 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050552764/original/FcSxv_3jNMqPs69syQRA2cMIuKgOQyp5SA.png?1753729190)

#### 4단계: 필터로 대상 좁히기

1. 트리거 이름을 정한 뒤에는 필터로 워크플로우가 실행될 조건을 좁힐 수 있어요.
2. 필터를 추가하려면 **+ Add Filters**(필터 추가)를 클릭하세요.
3. 필터마다 쓸 수 있는 연산자가 있어서 원하는 조건을 정확히 지정할 수 있어요. 자세한 내용은 [사용 가능한 필터](#사용-가능한-필터)를 확인하세요.

#### 5단계: 저장하고 워크플로우 완성하기

1. 트리거와 필터 설정이 끝나면 **Save Trigger**(트리거 저장)를 클릭하고 원하는 액션을 추가하세요.
2. 다 만들었으면 **Test Workflow**(워크플로우 테스트)로 제대로 동작하는지 확인하세요.
3. 확인이 끝나면 **Publish**(게시)를 클릭해 워크플로우를 활성화하세요.

![트리거 저장 및 워크플로우 게시 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050552860/original/x4q_5CI9nIOpvsgrNMWld-e8aXcCFPqaPA.png?1753729421)

## 사용 가능한 필터

| 필터 | 연산자 | 입력 방식 |
| --- | --- | --- |
| Coupon Code | Is Any Of / Is Empty / Is None Of / Is Not Empty | 활성 쿠폰 코드를 고르는 다중 선택 드롭다운 |
| Coupon Name | Is Any Of / Is Empty / Is None Of / Is Not Empty | 활성 쿠폰 이름을 고르는 다중 선택 드롭다운 |
| Coupon Type | Is / Is Not / Is Empty / Is Not Empty | 단일 선택 드롭다운(Amount 또는 Percentage) |

## 만료된 쿠폰에 추천하는 워크플로우 액션

**Coupon Code Expired** 트리거를 켠 뒤에는 다음과 같은 액션을 추가해 보세요.

- **Send Email**(이메일 보내기): 고객에게 쿠폰이 만료됐다고 알리고 새 프로모션을 안내해요.
- **Internal Notification**(내부 알림): 주요 쿠폰이 만료되면 영업팀이나 마케팅팀에 알려요.
- **Add Tag**(태그 추가): 후속 안내나 세분화를 위해 연락처에 태그를 붙여요(예: `MissedPromo`).
- **Create/Update Opportunity**(기회 만들기/업데이트): 쿠폰을 사용하지 못한 연락처를 육성 시퀀스로 보내요.
- **Send SMS**(SMS 전송): 일부 고객에게 후속 오퍼나 쿠폰 기간 연장 안내를 간단히 보내요.

## 자주 묻는 질문

### 이 트리거는 정확히 언제 실행되나요?
쿠폰의 예정된 만료일이 되어 쿠폰이 자동으로 비활성 상태가 될 때 실행돼요.

### 특정 유형의 쿠폰만 대상으로 할 수 있나요?
네, **Coupon Type** 필터로 *Percentage*(비율) 쿠폰이나 *Fixed Amount*(고정 금액) 쿠폰만 골라 대상으로 지정할 수 있어요.
### 필터를 하나도 적용하지 않으면 어떻게 되나요?
만료되는 모든 쿠폰에 대해 워크플로우가 실행돼요. 대상을 좁히려면 **Coupon Code Is**나 **Coupon Name Contains** 같은 필터를 적용하세요.
### 쿠폰마다 다른 액션을 실행할 수 있나요?
네, **Coupon Code**나 **Coupon Type** 필터를 다르게 설정한 워크플로우를 따로 만들면 쿠폰마다 다른 액션을 실행할 수 있어요.

### 고객이 이미 만료된 쿠폰을 사용하려고 하면 트리거가 실행되나요?
아니요. 이 트리거는 쿠폰이 활성 상태에서 만료 상태로 바뀔 때만 실행돼요. 만료된 쿠폰을 사용하려다 실패한 경우에는 실행되지 않아요.
