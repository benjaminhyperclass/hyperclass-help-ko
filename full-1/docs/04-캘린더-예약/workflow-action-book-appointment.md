---
원문: https://help.gohighlevel.com/support/solutions/articles/155000004209-workflow-action-book-appointment
번역일: 2026-11-07
카테고리: 04-캘린더-예약
---

# 워크플로우 액션 — Book Appointment(예약하기)

**Book Appointment**(예약하기) 액션을 쓰면 트리거가 실행될 때 선택한 캘린더에 예약이 자동으로 만들어져요. 폼 제출, 인바운드 웹훅, CRM 업데이트 같은 이벤트가 생길 때 후속 일정을 직접 잡지 않아도 돼요.

## Book Appointment 액션이란?

이 액션은 지정한 캘린더에 지정한 시간으로 새 예약을 만들어요. 워크플로우에서 설정해 두면 트리거 이벤트가 발생할 때 예약이 만들어지므로, 특정 트리거로 예약을 자동화하려는 비즈니스에 알맞아요.

**알아 둘 점**

- 예약을 받을 **Calendar**(캘린더)를 선택해야 해요.
- **Team member**(팀원)는 **Calendar Default**(캘린더 기본값, 예: 라운드 로빈 배정)로 두거나 특정 팀원으로 지정할 수 있어요.
- 예약 시간은 트리거 데이터(예: 웹훅 페이로드, 폼 필드)에서 가져올 수 있어요. 들어오는 날짜·시간 형식이 지원 형식과 맞지 않으면 **Date Time Formatter**(날짜·시간 형식 변환) 액션을 쓰세요.
- **Override availability**(가용 시간 무시)가 꺼져 있을 때 예약 가능한 사람이 없으면 예약이 만들어지지 않아요.

{% hint style="warning" %}
제한 사항: **Recurring**(반복)이 켜진 캘린더는 **Book Appointment** 액션에서 선택할 수 없어요.
{% endhint %}

---

## Book Appointment 액션을 쓰면 좋은 점

트리거에 따라 실제 가용 시간을 지키면서 예약을 잡아 주고, 성공·실패 결과에 따라 다음 단계를 깔끔하게 나눌 수 있어요. 수작업도 줄어요.

- 빠른 후속 대응: 폼, 채팅, 웹훅에서 들어온 요청을 자동으로 예약해요.
- 전환율 향상: 상대방의 관심이 높을 때 바로 일정을 확정할 수 있어요.
- 유연한 담당자 배정: 캘린더 기본 설정(예: 라운드 로빈)을 따르거나 특정 팀원을 지정해요.
- 믿을 수 있는 분기: **Appointment booked successfully**(예약 성공) 결과로 나눠서 확인 메시지, 리마인드, 대체 액션을 연결할 수 있어요.

---

## Book Appointment 액션 설정하기

**Book Appointment** 단계를 추가하면 워크플로우가 대상 캘린더와 연결돼요. 언제, 누구와 예약을 만들지도 여기서 정해요.

### 1단계: 워크플로우 만들고 트리거 추가하기

**자동화 > 워크플로우**로 이동해 **Create New Workflow**(새 워크플로우 만들기)를 누르고 **처음부터 만들기**를 선택하세요. 그다음 트리거를 추가하세요. 예를 들어 **Form Submitted**(폼 제출), **Inbound Webhook**(인바운드 웹훅) 같은 트리거를 쓸 수 있어요.

![워크플로우를 처음부터 만들고 트리거를 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052586842/original/0riEYOvbFN-W1cUn2lcfd4jm7A_8xWP-NA.gif?1756384342)

### 2단계: 액션 추가하기

**Add Action**(액션 추가) > **Book Appointment**(예약하기)를 선택하고, **Action name**(액션 이름)에 알아보기 쉬운 이름을 입력하세요. 예: "영업팀 데모 예약"

![Book Appointment 액션을 추가하고 액션 이름을 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052587208/original/PlSK-h6vSCDjLAUPpKBZr9mgvrSW9O0V5Q.png?1756384481)

### 3단계: 캘린더, 팀원, 예약 날짜·시간 설정하기

**Calendar**(캘린더): 예약을 받을 캘린더를 선택하세요.

**Team member**(팀원): 아래 중에서 선택하세요.

- **Calendar Default**(캘린더 기본값): 캘린더의 배정 규칙(예: 라운드 로빈)을 따라요.
- **Specific member**(특정 팀원): 한 사람을 직접 지정해요.

**Set Appointment Date & Time**(예약 날짜 및 시간 설정):

동적 시작 날짜와 시간을 쓸 때는 형식이 맞는지 확인하세요. 필요하면 **Date Time Formatter** 액션으로 날짜·시간 형식을 바꾸세요.

- **Standard**(표준): 이 워크플로우로 만들어지는 모든 예약에 같은 날짜·시간을 써요.
- **Dynamic**(동적): 트리거 데이터(예: 웹훅 페이로드, 폼 필드, 커스텀 값)에서 날짜·시간을 가져와요.
- **Supported formats**(지원 형식) 예시:

  - MM-DD-YYYY HH:MM → 12-21-2021 08:30 AM
  - DD-MMM-YYYY HH:MM → 21-OCT-2021 08:30 AM

    입력값이 지원 형식과 맞지 않으면 **Book Appointment** 앞에 **Date Time Formatter** 단계를 넣어 형식을 바꾸세요.

![예약 날짜와 시간을 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052589247/original/kB3ftIpttgUl3WnvXJc-OGTR13VAvEksbQ.png?1756385194)

{% hint style="warning" %}
**Override availability**(가용 시간 무시)

1. 꺼짐: 예약을 만들기 전에 시스템이 가용 시간을 확인해요.
2. 켜짐: 가용 시간을 확인하지 않고 예약을 만들어요. 드물게만 사용하세요.

(선택) 템플릿에 **Action Description**(액션 설명)이나 내부 메모 항목이 있으면 함께 입력하세요.
{% endhint %}

---

## 자주 묻는 질문

### 이 액션은 캘린더의 가용 시간을 지키나요?
네. **Override availability**(가용 시간 무시)를 켜지 않으면 가용 시간을 지켜요.

### 예약 성공·실패에 따라 흐름을 나눌 수 있나요?
네. **If/Else**(조건 분기) 액션을 추가하고 **Appointment booked successfully**(예약 성공) 값(True/False)으로 결과를 나눠 연결하세요.

### Dynamic에서는 어떤 날짜·시간 형식을 지원하나요?
<!-- 검토 필요: 원문 내용이 서로 다름 -->
5단계 아래에 있는 형식을 참고하세요. 필요하면 **Date Time Formatter**(날짜·시간 형식 변환) 단계를 추가하세요.

### 라운드 로빈으로 예약을 배정할 수 있나요?
네. **Team member**(팀원)에서 **Calendar Default**(캘린더 기본값)를 선택하면 캘린더의 배정 규칙을 따라요.

### 예약이 실패하면 어떻게 하나요?
**False** 분기를 사용해 팀에 알림을 보내거나, 작업을 만들거나, 다른 시간으로 다시 예약해 보세요.

### Book Appointment 액션에 제한 사항이 있나요?
**Recurring**(반복)이 켜진 캘린더는 **Book Appointment** 액션에서 선택할 수 없어요.
