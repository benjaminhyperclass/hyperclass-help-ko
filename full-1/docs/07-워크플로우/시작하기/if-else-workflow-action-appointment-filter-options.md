---
원문: https://help.gohighlevel.com/support/solutions/articles/155000004050-if-else-workflow-action-appointment-filter-options
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# If/Else 액션의 Appointment(예약) 필터 옵션

워크플로우의 **If/Else**(조건 분기) 액션에서 **Appointment** 옵션을 쓰면 예약과 관련된 이벤트를 기준으로 워크플로우 브랜치를 나눌 수 있어요. 이 문서에서는 이 옵션이 무엇인지, 언제 쓰면 좋은지, 어떻게 설정하는지 알려 드려요.

[동영상](https://www.youtube.com/embed/3TCdylsfvKI?&wmode=opaque)

## If/Else 액션의 Appointment 필터 옵션이란?

**Appointment**(예약) 옵션은 예약 관련 이벤트를 기준으로 워크플로우 자동화를 세밀하게 조정하는 필터예요. 워크플로우에 조건 로직을 넣는 **If/Else** 액션 안에 들어 있어요. 이 옵션으로 예약 일정이 변경되었는지, 시작일과 종료일이 언제인지 등을 조건으로 정할 수 있어요.

이렇게 하면 후속 안내를 자동화하고, 고객과의 소통을 구분하고, 예약 데이터에 맞게 워크플로우 액션을 다듬을 수 있어요.

**If/Else** 액션의 **Appointment** 옵션에는 필터 조건이 세 가지 있어요.

- **Rescheduled**(일정 변경됨): 해당 실행에서 예약 일정이 변경되었는지 판단해요.
- **Start Date**(시작일): 예약 시작일을 기준으로 액션을 거릅니다.
- **End Date**(종료일): 예약 종료일을 기준으로 액션을 거릅니다.

![Appointment 옵션의 필터 세 가지를 보여 주는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042489099/original/Fnssi-jaN7eypapyCsjxAEcqJalojvkbkQ.gif?1740915955)

{% hint style="info" %}
**Appointment** 옵션은 워크플로우가 예약 관련 이벤트로 시작될 때만 나타나요. 워크플로우 트리거가 아래 둘 중 하나일 때 보여요.

- **Customer Booked Appointment**(고객이 예약함): 새 예약이 잡힐 때
- **Appointment Status**(예약 상태): 예약 상태가 바뀔 때(예: No show, Cancelled)
{% endhint %}

## If/Else 액션에서 Appointment 옵션을 쓰면 좋은 점

- 더 정확한 자동화: 예약 상태 변화에 맞게 정확히 반응하는 워크플로우 브랜치를 만들 수 있어요.
- 효율적인 후속 안내: 일정이 변경된 예약을 기준으로 이메일, SMS, 작업 배정을 자동으로 보낼 수 있어요.
- 리드 관리 개선: 예약은 했지만 오지 않은 사람만 골라 다시 연락할 수 있어요.
- 기간이 정해진 프로모션: 예약 시작일이나 종료일에 맞춰 워크플로우가 동작하므로 기간 한정 캠페인에 유용해요.

## If/Else 액션에서 Appointment 옵션 설정하기

### 워크플로우 빌더 열기

**자동화**로 이동해서 새 워크플로우를 만들거나 기존 워크플로우를 선택하세요.

![자동화 메뉴에서 워크플로우를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042474955/original/xAI6p0HzgQ8wHZCtD7tPxdZa5Kje_iKHYg.png?1740841701)

### 트리거 설정하기

워크플로우 트리거로 **Customer Booked Appointment** 또는 **Appointment Status**를 선택하세요.

![트리거로 Customer Booked Appointment 또는 Appointment Status를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042475017/original/PDmXrL_4W6e21-3gnq17xIgh57-EtfQ08g.png?1740841959)

### If/Else 조건 추가하기

**+** 버튼을 눌러 액션을 추가한 다음 **If/Else** 조건을 선택하세요.

![+ 버튼으로 If/Else 조건을 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042475485/original/LLAGvXVOvY9NCfzn_IbQejP7q9Hvh9-oQQ.png?1740843050)

### If/Else 조건 이름 정하기(선택 사항이지만 권장해요)

**If/Else** 조건 패널이 열리면 맨 위에 **Action Name**(액션 이름) 필드가 가장 먼저 보여요. 기본값은 "Condition"이에요. 이름을 바꿔 두면 조건이 여러 개일 때 워크플로우를 이해하기 쉬워요.

**If/Else** 액션은 조건 로직으로 동작하므로, 조건이 확인하는 내용을 질문 형태로 이름 붙이는 것이 좋아요. 그러면 워크플로우를 한눈에 읽고 관리하기 쉬워요.

Appointment 필터별 조건 이름 예시는 다음과 같아요.

| 필터 | 조건 이름 예시 |
| --- | --- |
| **Rescheduled** | "고객이 일정을 변경했나요?" |
| **Start Date** | "예약이 현재 날짜로부터 2주 이후인가요?" |
| **End Date** | "예약이 현재 날짜 기준 4일 전에 종료되었나요?" |

![If/Else 조건의 Action Name을 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042476073/original/0LMkixamQVcqIpQuO7Ozd6e8v0D6yLx6gg.png?1740845256)

### Scenario Recipe 선택하기

**Scenario Recipe**(시나리오 레시피) 드롭다운에는 자주 쓰는 필터링 상황에 맞춰 미리 만들어 둔 조건 템플릿이 있어요. 여기서는 예약 관련 이벤트를 기준으로 조건을 자유롭게 정해야 하므로 **Build Your Own**(직접 만들기)을 선택하세요.

![Scenario Recipe 드롭다운에서 Build Your Own을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042489060/original/EDymppXmFrBNfWrSeFAbXSWoAoAdnyxpFA.png?1740915731)

### If/Else 브랜치 이름 정하기

If/Else 조건을 설정하면 각 브랜치는 조건을 평가한 결과 하나를 뜻해요. 기본 브랜치 이름은 의미가 잘 드러나지 않을 수 있어요. 이름을 바꿔 두면 워크플로우 구조를 이해하기 쉬워요.

스크린샷의 예시에서는 브랜치 이름을 다음과 같이 바꿨어요.

1. "일정 변경됨": 예약 일정이 변경된 경우(True)에 해당해요.
2. "일정 변경 안 됨": 예약 일정이 변경되지 않은 경우(False)에 해당해요.

![브랜치 이름을 바꾼 If/Else 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042489063/original/NbBlcEb9o9FhqiOPy5FjEXYNvXeDiDjlig.png?1740915759)

### Appointment 옵션 선택하기

아래 화면처럼 **Appointment** 옵션을 선택하면 필터 세 가지가 나타나요.

- **Rescheduled** (True/False)
- **Start Date** (특정 날짜 조건 선택)
- **End Date** (특정 날짜 조건 선택)

**Rescheduled**, **Start Date**, **End Date** 필터 중 하나를 설정한 다음 **+ Add Branch**(브랜치 추가)를 눌러 조건을 여러 개 만들 수 있어요.

브랜치마다 이름을 알아보기 쉽게 정해 두세요(예: "일정 변경됨", "일정 변경 안 됨", "예정된 예약", "지난 예약").

![Appointment 옵션을 선택해 필터를 확인하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042500698/original/OS4JNZ9054IB0wg_EDKX9kKBJwwPG7sL6g.gif?1740966633)

### Rescheduled 필터

**Rescheduled** 필터는 예약 일정이 변경되었는지 여부를 판단해요. 이 필터를 선택하면 연산자 드롭다운이 나타나고, 선택지는 두 가지예요.

- **True**(참): 예약 시간을 바꾼 고객만을 위한 워크플로우 액션을 만들 수 있어요.
- **False**(거짓): 원래 예약을 바꾸지 않은 고객을 처리하는 액션으로 워크플로우를 나눌 수 있어요.

![Rescheduled 필터의 True/False 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042502419/original/Zp7PMC-EvET3oIY98liHPFu8b26Q0snafg.gif?1740970819)

### Start Date 필터

**Start Date** 필터를 쓰면 예약이 시작되는 시점을 기준으로 워크플로우를 세밀하게 조정할 수 있어요. **Start Date** 조건을 선택하면 워크플로우가 선택한 기준으로 예약을 평가하고, 그에 맞는 액션을 실행해요.

이 필터를 선택하면 조건을 정하는 드롭다운 메뉴 두 개가 나타나요.

- 첫 번째 드롭다운: **Operators**(연산자)
  - **Is**(다음과 같음): 정확한 날짜와 일치해요. 예약이 지정한 날짜에 시작할 때만 워크플로우가 실행돼요.
  - **Is Not**(다음과 같지 않음): 특정 날짜를 제외해요. 선택한 날짜에 시작하는 예약을 뺀 모든 예약에 워크플로우가 실행돼요.
  - **Is Empty**(비어 있음): 예약에 시작일이 설정되어 있지 않을 때 적용돼요. 완성되지 않은 예약을 찾을 때 유용해요.
  - **Is Not Empty**(비어 있지 않음): 예약에 시작일이 있을 때 적용돼요. 일정이 잡힌 예약에만 조건이 적용되도록 할 수 있어요.
- 두 번째 드롭다운: 시간 기준 연산자
  - **Today**(오늘): 오늘 예정된 예약을 걸러 내요.
  - **Tomorrow**(내일): 다음 날로 잡힌 예약을 걸러 내요.
  - **Yesterday**(어제): 전날 있었던 지난 예약을 걸러 내요.
  - **After**(이후): 특정 날짜 이후에 시작하는 예약을 걸러 내요.
  - **Before**(이전): 특정 날짜 이전에 시작하는 예약을 걸러 내요.
  - **Date**(날짜): 필터링할 특정 날짜를 직접 고를 수 있어요.

![Start Date 필터의 연산자 드롭다운 두 개를 보여 주는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042502458/original/kgpUbPq-X8BVca8-d4QZ_SOfwxByOqZ5iA.png?1740970971)

### End Date 필터

**End Date** 필터는 **Start Date** 필터와 같은 방식으로 동작해요. 다만 예약이 끝나는 시점에 적용돼요.

![End Date 필터 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042493257/original/uzCZsI9Lu2U5rxrL4Eis5gV6H2xAGyUaDA.png?1740929932)

## 자주 묻는 질문

### If/Else 조건 안에 Appointment 옵션이 보이지 않아요.

**Appointment** 옵션은 워크플로우에 예약 관련 트리거(**Customer Booked Appointment** 또는 **Appointment Status**)가 있을 때만 나타나요. 워크플로우에 이 트리거가 없으면 옵션이 보이지 않아요.

### 같은 If/Else 조건 안에서 예약 필터를 여러 개 쓸 수 있나요?

아니요. If/Else 조건 하나에는 예약 기반 필터를 하나만 고를 수 있어요. 대신 워크플로우 안에 If/Else 브랜치를 여러 개 만들어 필터를 따로따로 적용할 수 있어요.

### Start Date와 End Date 필터는 어떻게 활용하면 좋을까요?

**Start Date** 필터는 예약이 시작되는 시점에 맞춰 액션을 실행할 때 쓸 수 있어요. 예를 들어 미팅 전 알림을 보낼 수 있어요. **End Date** 필터는 예약 후 후속 안내나 기간이 정해진 프로모션 처리에 쓸 수 있어요.

### 고객이 일정을 여러 번 변경하면 어떻게 되나요?

**Appointment Rescheduled** 조건은 가장 최근 실행을 기준으로 평가해요. 고객이 일정을 여러 번 변경하면 가장 마지막 일정 변경 상태를 기준으로 조건이 실행돼요.

### Appointment 옵션을 다른 If/Else 필터와 함께 쓸 수 있나요?

네, 쓸 수 있어요. **Contact Details**(연락처 세부정보)나 **Date Time**(날짜 및 시간) 같은 다른 If/Else 조건을 **Appointment** 옵션과 함께 추가하면 워크플로우를 더 세밀하게 구성할 수 있어요.
