---
원문: https://help.gohighlevel.com/support/solutions/articles/155000004209-workflow-action-book-appointment
번역일: 2026-11-06
카테고리: 04-캘린더-예약
---

# 워크플로우 액션 — Book Appointment(예약하기)

**Book Appointment**(예약하기) 액션을 쓰면 트리거가 실행될 때 선택한 캘린더에 예약이 자동으로 만들어져요. 폼 제출, 인바운드 웹훅, CRM 업데이트 같은 이벤트가 생겼을 때 후속 일정을 직접 잡지 않아도 되어요.

## Book Appointment 액션이란?

**Book Appointment** 액션은 지정한 캘린더에 지정한 시간으로 새 예약을 만들어요. 워크플로우에 이 액션을 넣으면 트리거 이벤트를 기준으로 예약을 만들 수 있어요. 특정 트리거로 예약 과정을 자동화하려는 비즈니스에 알맞아요.

**알아 둘 점**

- 예약을 받을 **Calendar**(캘린더)를 반드시 선택해야 해요.
- **Team member**(팀원)는 캘린더 기본값(예: 라운드 로빈)으로 두거나 특정 팀원으로 지정할 수 있어요.
- 예약 시간은 트리거 데이터(예: 웹훅 페이로드, 폼 필드)에서 가져올 수 있어요. 들어오는 형식이 지원 형식과 맞지 않으면 **Date Time Formatter**(날짜/시간 형식 변환)를 쓰세요.
- 예약 가능한 사람이 없고 **Override availability**(예약 가능 시간 무시)가 꺼져 있으면 예약이 만들어지지 않아요.

{% hint style="warning" %}
제한 사항: **반복**이 켜진 캘린더는 **Book Appointment** 액션에서 선택할 수 없어요.
{% endhint %}

---

## Book Appointment 액션을 쓰면 좋은 점

실제 예약 가능 시간을 지키면서 트리거에 맞춰 일정을 잡아요. 수작업이 줄고, 성공·실패에 따라 다음 단계를 깔끔하게 나눌 수 있어요.

- 후속 연락을 빠르게 처리해요. 폼, 채팅, 웹훅에서 들어온 요청을 자동으로 예약해요.
- 전환율을 높여요. 관심이 높을 때 바로 시간을 확정해요.
- 담당자 배정이 유연해요. 캘린더 기본값(예: 라운드 로빈)을 따르거나 특정 팀원을 고를 수 있어요.
- 흐름을 믿을 수 있어요. **Appointment booked successfully**(예약 성공 여부)를 기준으로 확인 메시지, 재안내, 대체 액션으로 나눌 수 있어요.

---

## Book Appointment 액션 설정하기

**Book Appointment** 단계를 만들면 워크플로우가 대상 캘린더와 연결돼요. 예약을 언제, 누구와 만들지도 이 단계에서 정해요.

### 1단계: 자동화 메뉴 열기

**자동화 > 워크플로우**로 이동해 **Create New Workflow**(새 워크플로우 만들기)를 누르고 **처음부터 만들기**를 선택하세요. 그런 다음 트리거를 추가하세요. 예를 들어 **Form Submitted**(폼 제출), **Inbound Webhook**(인바운드 웹훅) 같은 트리거를 쓸 수 있어요.

![워크플로우를 처음부터 만들고 트리거를 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052586842/original/0riEYOvbFN-W1cUn2lcfd4jm7A_8xWP-NA.gif?1756384342)

### 2단계: 액션 추가하기

**Add Action**(액션 추가)을 누르고 **Book Appointment**를 선택하세요. 그다음 **Action name**(액션 이름)을 알아보기 쉽게 입력하세요(예: "영업팀 데모 예약").

![액션 추가에서 Book Appointment를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052587208/original/PlSK-h6vSCDjLAUPpKBZr9mgvrSW9O0V5Q.png?1756384481)

### 3단계: Calendar, Team member 선택하고 예약 날짜·시간 설정하기

**Calendar**: 예약을 받을 캘린더를 선택하세요.

**Team member**:

- **Calendar Default**(캘린더 기본값): 캘린더의 배정 규칙(예: 라운드 로빈)을 따라요.
- **Specific member**(특정 팀원): 지정한 한 사람에게 예약을 배정해요.

**Set Appointment Date & Time**(예약 날짜·시간 설정):

시작 날짜와 시간을 동적으로 가져오려면 형식이 맞는지 확인하세요. 필요하면 **Date Time Formatter** 액션으로 날짜·시간 형식을 바꾸세요.

- **Standard**(표준): 이 워크플로우가 만드는 모든 예약에 같은 날짜·시간을 써요.
- **Dynamic**(동적): 트리거 데이터(예: 웹훅 페이로드, 폼 필드, 커스텀 값)에서 날짜·시간을 가져와요.
- **Supported formats**(지원 형식) 예시:

  - MM-DD-YYYY HH:MM → 12-21-2021 08:30 AM
  - DD-MMM-YYYY HH:MM → 21-OCT-2021 08:30 AM

  입력값이 지원 형식과 맞지 않으면 **Book Appointment** 앞에 **Date Time Formatter** 단계를 넣어 형식을 바꾸세요.

![캘린더, 팀원, 예약 날짜·시간을 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052589247/original/kB3ftIpttgUl3WnvXJc-OGTR13VAvEksbQ.png?1756385194)

{% hint style="warning" %}
**Override availability**:

1. **Off**: 예약하기 전에 시스템이 예약 가능 시간을 확인해요.
2. **On**: 예약 가능 시간을 확인하지 않고 예약해요(되도록 적게 사용하세요).

템플릿에 입력란이 있다면 **Add Action Description**(액션 설명 추가)이나 내부 메모도 입력할 수 있어요.
{% endhint %}

---

## 자주 묻는 질문

### 이 액션은 캘린더의 예약 가능 시간을 지키나요?
네, **Override availability**를 켜지 않는 한 캘린더의 예약 가능 시간을 지켜요.

### 예약이 성공했는지 실패했는지에 따라 흐름을 나눌 수 있나요?
네. **If/Else**(조건 분기)를 추가하고 **Appointment booked successfully**(True/False)를 기준으로 결과별 경로를 나누세요.

### Dynamic에서는 어떤 날짜·시간 형식을 쓸 수 있나요?
<!-- 검토 필요: 원문 내용이 서로 다름 -->
5단계의 형식을 참고하세요. 필요하면 **Date Time Formatter** 단계를 추가하세요.

### 라운드 로빈으로 예약을 배정할 수 있나요?
네, **Calendar Default**를 선택하면 캘린더의 배정 규칙을 따라요.

### 예약이 실패하면 어떻게 하나요?
**False** 경로에서 팀에 알림을 보내거나, 작업을 만들거나, 다른 시간으로 다시 예약해 보세요.

### Book Appointment 액션에 제한 사항이 있나요?
**반복**이 켜진 캘린더는 **Book Appointment** 액션에서 선택할 수 없어요.
