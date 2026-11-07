---
원문: /support/solutions/articles/155000003328-workflow-action-goal-event
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Goal Event(목표 이벤트)

**Goal Event**(목표 이벤트) 액션은 연락처가 링크를 클릭하거나, 폼을 제출하거나, 예약을 확정하거나, 결제하거나, 팀원이 연락처에게 답장하는 것처럼 정해 둔 행동을 했는지 추적해요. 연락처가 목표를 달성하면 워크플로우 안에서 이동 경로를 자동으로 바꿀 수 있어서, 자동화가 연락처의 행동에 더 알맞게 반응해요.

Goal Event를 쓰면 복잡한 워크플로우를 단순하게 만들 수 있어요. 중복되는 트리거도 줄이고, 하이퍼클래스에서 고객 여정을 더 세밀하게 구성할 수 있어요.

## Goal Event 액션이란?

Goal Event는 워크플로우 안에 목표를 정해 두고, 연락처가 원하는 결과에 도달하도록 자동으로 안내하는 액션이에요. 연락처가 목표 조건을 충족하면(예: 링크 클릭, 폼 제출) 워크플로우의 어느 단계에 있었는지와 관계없이 바로 목표 단계로 이동해요.

Goal Event는 자동화 중간에 놓는 동적인 체크포인트예요. 연락처가 모든 단계를 차례로 지나가기를 기다리지 않고, 중요한 행동이 일어나는 순간을 감지해서 바로 대응해요. 그래서 리드를 더 빠르고 정확하게 응대할 수 있어요.

## Goal Event의 장점

Goal Event를 쓰면 자동화가 연락처의 실시간 행동에 맞춰 움직여요. 연락처마다 상황에 맞는 메시지를 받고, 자연스럽고 개인화된 여정을 경험해요.

- **자동화 효율:** 목표를 달성하면 남은 단계를 건너뛰거나 워크플로우를 끝낼 수 있어요.
- **참여도 향상:** 연락처가 클릭하거나, 열어 보거나, 원하는 행동을 하면 바로 반응해요.
- **간단한 로직:** 여러 트리거와 "If/Else" 분기를 이벤트 하나로 대신할 수 있어요.
- **추적 강화:** 이메일 이벤트, 링크 클릭, 태그, 예약, 결제 등을 모니터링해요.
- **동작 설정:** 목표를 달성했을 때, 또는 달성하지 못했을 때 어떻게 할지 직접 정해요.

## 지원하는 목표 유형

목표 유형마다 연락처의 특정 행동이나 이정표를 나타내요. 알맞은 유형을 골라야 의미 있는 행동에만 워크플로우가 반응하고, 자동화가 비즈니스 프로세스와 맞아떨어져요.

### Form Submitted(폼 제출)

폼을 하나 이상 선택해서, 연락처가 그 폼을 제출하면 워크플로우가 반응하게 해요.

**주요 특징:**

- 여러 폼을 선택할 수 있는 다중 선택 드롭다운이 있어요.
- 선택한 폼 중 하나라도 제출하면 목표를 달성해요.

**활용 예시:**

에이전시가 리드 폼을 제출한 사용자에게 후속 메시지를 보내려고 해요. 선택한 폼들로 "Wait until Form Submitted"(폼 제출까지 대기)를 설정하면 폼 응답 처리를 한곳에 모을 수 있어요.

![Form Submitted 목표 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058401814/original/eE1-hhhQc-QLPs3x6SCbHjPij7yMcHNX3w.png?1763124591)

### Payment Received(결제 완료)

결제 이벤트에 따라 워크플로우 액션을 실행해요.

**주요 특징:**

- **Select Type of Goal**(목표 유형 선택) > **Payment Received**에서 선택해요.
- 성공 또는 실패 상태와 상품으로 걸러 낼 수 있어요.

**활용 예시:**

- 첫 결제가 끝나면 온보딩을 시작해요.
- 결제에 성공하면 감사 이메일을 보내요.
- 결제에 실패했거나 기한이 지난 경우 리마인더를 보내요.

![Payment Received 목표 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058400782/original/XdS_bSkvmdwKND6TF1LcxHEUbZNTLOIpMA.jpeg?1763124403)

### Invoice Paid(인보이스 결제 완료)

연락처의 인보이스가 **Paid**(결제 완료) 또는 **Partially Paid**(부분 결제됨) 상태가 되면 목표를 달성해요.

**주요 특징:**

- 연락처의 인보이스 중 어느 것이든 해당되게 할지, 선택한 **Send Invoice**(인보이스 보내기) 액션과 연결된 인보이스만 해당되게 할지 정할 수 있어요(해당 액션이 있는 경우).

**활용 예시:**

**Send Invoice** 액션 뒤에서 인보이스가 **Paid** 또는 **Partially Paid**가 되면, 연락처를 "영수증 + 다음 단계 안내 보내기" 단계로 이동해요.

![Invoice Paid 목표 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155072139779/original/8lyQuVqe2SXNFvQIYtFmnD9AUUbnthiyjQ.png?1779716507)

### Document Status(문서 상태)

제안서와 계약서의 진행 상태를 추적해요. 예를 들어 **Viewed**(열람), **Signed**(서명), **Declined**(거절), **Completed**(완료) 상태가 있어요.

**활용 예시:**

- 문서를 열람했지만 24시간 안에 서명하지 않으면 리마인더를 보내요.
- 계약이 **Completed** 상태가 되면 온보딩을 시작해요.
- 문서가 거절되면 후속 조치를 실행해요.

![Document Status 목표 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058401519/original/9gOkwfUrZ5cHKNvcskj7qCZRteSrmMU1Uw.png?1763124532)

### Email Events(이메일 이벤트)

연락처가 이메일을 열거나, 링크를 클릭하거나, 수신을 취소하는 등 이메일에 반응한 순간을 감지해요.

**지원하는 이벤트 예시:**

- **Opened**(열람)
- **Clicked**(클릭)
- **Unsubscribed**(구독취소) (Mailgun에서만 지원)
- **Complained**(신고)
- **Marked as Spam**(스팸으로 표시)

**활용 예시:**

- 연락처가 캠페인 이메일을 열거나 클릭하면 후속 워크플로우를 실행해요.
- 연락처가 구독을 취소하면 "재참여" 시퀀스로 이동해요.
- 참여 수준에 따라 맞춤 드립 이메일을 보내요.

### Clicked a Trigger Link(트리거 링크 클릭)

연락처가 메시지 안의 특정 추적 링크를 클릭했는지 확인해요.

**활용 예시:**

- 연락처가 상품이나 데모 링크를 클릭하면 육성(너처링) 시퀀스를 시작해요.
- 어떤 콘텐츠 링크를 클릭했는지에 따라 관심사별로 사용자를 나눠요.
- 리드가 이벤트 등록 링크를 클릭하면 후속 이메일을 보내요.

### Review Request Clicked(리뷰 요청 클릭)

연락처가 리뷰 요청 링크를 클릭하면 목표를 달성해요.

**주요 특징:**

모든 채널의 클릭을 대상으로 하거나, 채널을 하나 이상 골라 걸러 낼 수 있어요. 필요하면 특정 리뷰 링크(예: 별도로 지정한 리뷰 링크)로 목표 범위를 좁힐 수도 있어요.

**활용 예시:**

SMS로 리뷰 요청을 보내요. 연락처가 리뷰 링크를 클릭하면 "감사 인사 + 추천 요청" 단계로 이동해요.

![Review Request Clicked 목표 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155072140240/original/tEEJRaGBn1W3aBio-UhsNJ4Q3tBY0z7ezw.png?1779716700)

### Contact Tag Added or Removed(연락처 태그 추가 또는 제거)

연락처에 특정 태그가 추가되거나 제거되면 반응해요.

**활용 예시:**

- "상품 구매 완료" 태그가 추가되면 연락처를 새 단계로 이동해요.
- "고객" 태그가 추가되면 육성 워크플로우를 멈춰요.
- "구독취소" 태그가 제거되면 리텐션 캠페인을 실행해요.

### Appointment Status(예약 상태)

연락처의 예약이 **New**(신규), **Confirmed**(확정), **Showed**(참석) 같은 특정 상태로 바뀌는 순간을 확인해요.

**활용 예시:**

- 상담 예약이 확정되면 온보딩을 이어서 진행해요.
- 상태가 **Showed**로 바뀌면 예약 후 설문을 보내요.
- **No-show**(노쇼) 예약에는 리마인더나 일정 재조정 플로우를 실행해요.

### User Replied(사용자 답장)

팀원이 연락처에게 답장하면 목표를 달성해요. 메시지를 보낸 순간이 아니라 메시지가 전달된 시점에 목표가 달성돼요.

**주요 특징:**

- 필요하면 연락처에게 배정된 사용자처럼 특정 사용자와 하나 이상의 채널로 목표 범위를 좁힐 수 있어요.
- 사람이 답장하는 즉시 자동 시퀀스를 멈추는 용도로 가장 많이 써요.

**활용 예시:**

- 담당자가 직접 답장하는 순간 육성이나 드립 시퀀스를 멈춰요. 연락처가 자동 메시지와 직접 보낸 메시지를 동시에 받지 않도록 해요.
- 팀원이 응답하면 연락처를 "직원이 응대 중" 경로로 이동해요.

![User Replied 목표 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075541758/original/9mEoEa4vcrU2pbTFro9KiUSG4Q1PA9xj2g.png?1783523925)

## Goal Event 액션 설정하기

Goal Event를 설정해 두면 중요한 고객 행동에 워크플로우가 자동으로 반응해요. 제대로 설정하면 사람이 따로 손대지 않아도 자동화가 매끄럽게 이어져요.

### 1단계: 워크플로우 빌더 열기

1. **자동화 > 워크플로우**로 이동하세요.
2. **+ Create Workflow**(워크플로우 만들기)를 클릭하세요.
3. **처음부터 시작**을 선택하세요. 이미 있는 워크플로우를 열어도 돼요.

![워크플로우 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058401984/original/0ArelTzGBkMyvrcDiosRNvzqb8RQai0ZXQ.jpeg?1763124690)

### 2단계: Goal Event 액션 추가하기

1. **+** 버튼을 클릭해 새 액션을 추가하세요.
2. **Internal**(내부)에서 **Goal Event**를 선택하세요.

![Internal 항목에서 Goal Event 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058402051/original/U90HAJj6vZhgrYnpnuXJqz4R368FfeWJ3g.png?1763124723)

### 3단계: Goal Event 설정하기

1. **Action Name**(액션 이름)에 알아보기 쉬운 이름을 입력하세요(예: "리드 전환 목표").
2. **Select Type of Goal**(목표 유형 선택)에서 지원하는 목표 유형 중 하나를 고르세요(이메일, 트리거 링크, 태그, 예약 등).
3. 구체적인 이벤트 조건을 정하세요(예: 특정 트리거 링크 클릭, 폼 제출, 예약 확정).

![목표 유형 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058402123/original/LM3m1zxhsa7lgOcnpcs4mdHtaJpDSEfzpQ.png?1763124765)

![이벤트 조건 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058402145/original/AhDmwOAn0_-onV-tKK0xoKnIrO2wd7HGrA.png?1763124788)

### 4단계: 워크플로우 동작 선택하기

1. **If Contact Reaches This Goal Without Meeting Conditions**(조건을 충족하지 않은 채 연락처가 이 목표 단계에 도달한 경우)에서 하나를 선택하세요.

   - **End this workflow**(이 워크플로우 종료)
   - **Continue anyway**(그래도 계속 진행)
   - **Wait until the goal is met**(목표를 달성할 때까지 대기)
2. **Save Action**(액션 저장)을 클릭해 적용하세요.

![워크플로우 동작 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058402175/original/stJvS-x5WOQAfDab7oRrpjK-uyrTdCHY2A.png?1763124807)

### 5단계: 워크플로우 게시하기

1. 오른쪽 위의 **Publish**(게시)를 클릭해 워크플로우를 활성화하세요.
2. 이제 하이퍼클래스가 Goal Event 조건을 충족하는 연락처를 자동으로 감지해요.

## 자주 묻는 질문

### 이메일 이벤트 하나가 여러 Goal Event를 동시에 달성시킬 수 있나요?

네, 이메일 열람 같은 이벤트 하나가 여러 목표를 작동시킬 수 있어요. 워크플로우를 그렇게 설정한 경우에 해당해요.

### 영업시간 외에도 Goal Event가 작동하나요?

네. 시스템이 이벤트를 계속 모니터링하기 때문에, 목표를 충족한 연락처는 즉시 이벤트를 작동시켜요.

### 연락처가 같은 Goal Event를 여러 번 달성할 수 있나요?

아니요. 연락처가 특정 Goal Event를 한 번 달성하면, 그 워크플로우 안에서는 같은 목표로 다시 평가하지 않아요.

### Goal Event를 달성한 뒤 예약 일정이 바뀌면 어떻게 되나요?

워크플로우는 처음 발생한 이벤트에만 반응해요. 이후에 일정이 바뀌어도 이미 진행된 흐름은 되돌려지지 않아요.

### 한 워크플로우에 Goal Event를 여러 개 쓸 수 있나요?

한 워크플로우에는 Goal Event 액션을 하나만 추가할 수 있어요. 그 Goal Event 하나 안에서 여러 조건을 설정할 수는 있지만, 같은 워크플로우에 Goal Event 액션을 둘 이상 추가할 수는 없어요.

### 목표 설정에서 폼, 상품, 발신 커뮤니케이션을 여러 개 선택할 수 있나요?

네, 폼, 상품, 발신 커뮤니케이션을 여러 개 선택할 수 있어요. 선택한 항목은 OR 방식으로 평가해요. 선택한 항목 중 하나라도 일치하면 목표를 달성해요.

### 팀원이 답장하면 워크플로우를 멈출 수 있나요?

네. Goal Event를 추가하고 **User Replied** 목표 유형을 선택하세요. 사용자가 연락처에게 답장하면 연락처가 목표 단계로 이동해요. 이 단계에서 워크플로우를 끝내거나 남은 단계를 건너뛸 수 있어요.
