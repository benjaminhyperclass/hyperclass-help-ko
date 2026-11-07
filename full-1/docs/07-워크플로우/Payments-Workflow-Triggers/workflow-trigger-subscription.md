---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003536-workflow-trigger-subscription
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Subscription(구독)

구독 상태가 바뀔 때 워크플로우를 자동으로 시작하는 트리거예요. 새 구독이 생기거나, 구독이 체험 상태에서 활성 상태로 바뀌거나, 구독이 취소되는 순간에 맞춰 후속 작업을 실행할 수 있어요.

## 개요

**Subscription**(구독) 트리거를 쓰면 구독 수명 주기의 주요 이벤트에 맞춰 업무를 자동화할 수 있어요.

## 트리거 이름

**Subscription**(구독)

## 트리거 설명

**Subscription** 트리거는 아래와 같은 이벤트가 생기면 워크플로우를 시작해요.

- 고객의 새 구독이 만들어졌을 때
- 구독이 체험 상태에서 활성 상태로 바뀌었을 때
- 구독이 취소되었을 때

구독 상태의 변화나 구독에 연결된 상품을 조건으로 설정할 수 있어요. **Payments**(결제) 영역의 커스텀 값을 활용하면 상황에 맞는 자동화도 만들 수 있어요.

---

## 설정 방법

### 트리거 추가 열기

1. 왼쪽 메뉴에서 **자동화**로 이동해요.
2. 워크플로우 빌더 안에서 **Add Trigger**(트리거 추가)를 클릭해요.

### Subscription 트리거 선택

**Payments** 영역에서 **Subscription** 트리거를 선택해요. 연락처의 구독 상태가 바뀌거나 결제 플랫폼에서 새 구독이 만들어질 때 자동화가 실행돼요.

![Payments 영역에서 Subscription 트리거를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047575727/original/oEAqDx5y42GtEH8tHiNCaKMl-vkFcmP4ww.png?1748856588)

### 필터 추가

**Add filters**(필터 추가)로 워크플로우를 시작할 구독의 조건을 좁힐 수 있어요. 구매한 상품이나 구독 상태(예: **Active**(활성), **Failed**(실패), **Trial**(체험판))를 기준으로 정할 수 있어요. 모든 구독이 아니라 특정 상황에서만 워크플로우를 실행하고 싶을 때 유용해요.

![Add filters로 조건을 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047575769/original/Y4FVhl7-oiXSMpzlufHJQg6Eq0MxQkUxsA.png?1748856610)

### 필터 옵션: Standard Fields와 Custom Fields

드롭다운에서 조건 필터를 추가해 **Subscription** 트리거가 실행되는 시점을 세밀하게 정해요. 필드는 두 종류예요.

- **Standard Fields**(표준 필드): 기본으로 제공되는 항목이에요. **Global Products**(글로벌 상품, 구독에 연결된 상품)와 **Status**(상태, 예: **Active**, **Expired**(만료됨), **Failed**)가 있어요. 이 필드로 필터링하면 시스템 기준의 조건이 맞을 때만 워크플로우가 실행돼요.
- **Custom Fields**(커스텀 필드): 구독과 관련된 세부 정보(예: 멤버십 등급, 고객 세그먼트)를 추적하려고 직접 또는 팀에서 추가한 필드예요. 커스텀 필드를 쓰면 비즈니스 상황에 맞는 자동화를 만들 수 있어요.

![Standard Fields와 Custom Fields를 고르는 드롭다운 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047575812/original/qa2p25hNspPq5WPkzyIHMTUe19uFdlZ39g.png?1748856630)

### Global Products 필터

**Global Products** 필터를 쓰면 구독에 연결된 특정 상품을 기준으로 워크플로우를 시작할 수 있어요. 상품을 포함하거나 제외하려면 **Is**(다음과 같음), **Is not**(다음이 아님), **Is empty**(비어 있음), **Is not empty**(비어있지 않음) 중에서 골라요. 필터를 선택하면 검색할 수 있는 드롭다운이 나타나요. 여기서 상품을 하나 이상 고르면 선택한 상품에서만 워크플로우가 실행돼요. 이렇게 상품별로 정확하게 자동화할 수 있어요.

![Global Products 필터에서 조건과 상품을 고르는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047579165/original/AiNVjOdvjmtoIY9CGWnTVz7xbVF_y1NBtw.png?1748858448)

### Status 필터

**Status** 필터는 연락처의 구독이 지금 어떤 단계에 있는지를 기준으로 워크플로우를 시작해요. 결제나 이용 권한 상태가 바뀔 때 맞춤 이메일, 알림, 내부 공지를 보내고 싶을 때 유용해요. **Is** 또는 **Is not**을 사용해 특정 상태의 구독을 포함하거나 제외할 수 있어요. 그래서 구독이 정해 둔 상태가 되었을 때만 워크플로우가 실행돼요. **Status** 필터에서 고를 수 있는 옵션은 다음과 같아요.

- **Active**: 구독이 진행 중이고 결제도 정상적으로 이뤄지고 있어요. 이 상태는 보통 상품 제공, 온보딩, 접근 권한 처리에 써요.
- **Canceled**(취소됨): 구독이 직접 또는 자동으로 취소되었어요. 재참여 캠페인이나 내부 후속 조치를 시작하기에 알맞아요. Stripe 구독은 구독 기간이 끝나 완료된 경우에도 **Canceled** 상태로 표시돼요.
- **Expired**: 취소나 결제 실패가 아니라 결제 기간이 끝나서 구독이 종료되었어요. 갱신 안내나 피드백 수집에 쓸 수 있어요. (Stripe 구독에는 해당되지 않아요: **Not applicable**(해당 없음))
- **Incomplete Expired**(완료되지 않고 만료됨): 구독을 만드는 과정에서 첫 결제 시도가 실패했어요. 구독이 한 번도 시작되지 못하고 **Active**가 되지 못한 첫 결제 실패 상황에 해당해요. (이전 이름: **Failed**)
- **Incomplete**(미완료): 구독 절차를 시작했지만 끝내지 않았어요(예: 결제 중에 장바구니를 이탈한 경우). 후속 안내나 복구 흐름에 알맞아요.
- **Overdue**(연체): 결제 기한이 지났지만 구독은 아직 활성 상태예요. 유예 기간 안내나 알림에 알맞아요. 구독이 **Active** 상태가 된 적이 있는 경우, 즉 첫 결제가 성공한 구독에 해당해요. 두 번째 이후 결제가 실패하면 이 상태가 돼요.
- **Scheduled**(예약됨): 미래 날짜에 시작하도록 정해 두어 아직 결제가 시작되지 않은 구독이에요. 구독이 시작되기 전에 온보딩이나 준비 안내 이메일을 보내는 데 쓸 수 있어요.
- **Trial**: 구독이 지금 체험 단계에 있어요. 체험이 끝나기 전에 육성 시퀀스나 알림을 보낼 때 유용해요.
- **Unpaid**(미결제): 구독은 활성 상태지만 결제가 밀렸거나 대기 중이에요. 내부 팀에 알리거나 사용자에게 결제 수단 업데이트를 요청할 때 써요.

![Status 필터에서 구독 상태를 고르는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059464853/original/XRelpeTwyVCCzbPC8hN9mylJqtszoA34sw.png?1764335382)

### 액션 설정

트리거가 실행된 뒤에 이어질 액션을 골라요. 이메일 보내기, 레코드 업데이트, 팀원에게 알리기 등이 있어요.

### 저장하고 활성화

설정이 끝나면 트리거를 저장해요. 트리거가 활성화되어 있어야 의도한 대로 작동해요.

---

## 예시

고객과의 소통을 자동화할 때 **Subscription** 트리거를 많이 써요. 예를 들어 고객의 구독이 체험 상태에서 활성 상태로 바뀌면 환영 이메일을 자동으로 보내 고객 참여와 만족도를 높일 수 있어요. 구독이 취소되었을 때는 후속 이메일을 보내 피드백을 받거나 재참여 혜택을 안내할 수 있어요.
