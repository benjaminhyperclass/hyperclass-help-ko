---
원문: /support/solutions/articles/155000002711-managing-team-member-assignments-in-round-robin-calendars
번역일: 2026-11-06
카테고리: 04-캘린더-예약
---

# 라운드 로빈 캘린더에서 팀원 배정 관리

라운드 로빈 캘린더에서 팀원을 알맞게 배정하면 예약이 공평하고 효율적으로 나뉘어요. 예약 배정을 자동화하면서도, 필요할 때는 특정 팀원에게 배정하도록 조정할 수 있어요.

---

## 주요 용어

라운드 로빈 캘린더를 관리하려면 팀원 배정에 영향을 주는 용어를 먼저 알아 두세요. 용어를 알면 설정을 정확히 하고 예약을 매끄럽게 나눌 수 있어요.

- 예약 담당자(Appointment Owner): 예약이 잡힐 때 그 예약에 배정된 사용자예요.
- 할당된 사용자(Assigned User): 시스템에서 연락처에 지정된 담당 사용자예요. 보통 이후 소통을 관리할 때 써요.

---

## 일정 변경 설정

일정 변경 설정은 고객이 예약을 바꿀 때 예약을 어떻게 다시 배정할지 정해요. 유연하게 대응하면서도 예약 배정을 효율적으로 유지할 수 있어요.

### 1단계: 고급 설정 열기

1. **설정 > 캘린더**로 이동해 라운드 로빈 캘린더를 선택하세요.

   ![캘린더 설정에서 라운드 로빈 캘린더 선택하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042366100/original/3SMpQ7qa4lD6BLaFi9L_J3Rs8Ms2OQT8-Q.gif?1740665818)
2. **Meeting Details**(미팅 상세 정보)를 클릭한 다음 **팀원**을 선택하세요.

   ![Meeting Details에서 팀원 선택하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042366339/original/4yDNu0cbLY-LpL3SA30kzN7xs7eBgkDZ3Q.png?1740665973)

### 2단계: 일정 변경 옵션 선택

1. **고급 설정**에서 일정 변경 방식을 설정하세요.

   ![고급 설정의 일정 변경 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042366610/original/i7gb-VZvA9RcbHWUT7iYA78uRTJf_FbDFQ.png?1740666133)
2. 아래 두 옵션 중 하나를 선택하세요.
   - **Reassign Through Round Robin**(라운드 로빈으로 재배정): 일정을 변경한 예약이 라운드 로빈 방식에 따라 아무 팀원에게나 배정돼요.
   - **Keep Same Appointment Owner**(같은 예약 담당자 유지): 연락처가 일정 변경 링크로 예약을 바꾸면, 예약 위젯에 원래 예약 담당자의 시간대만 표시돼요.

예를 들어 사용자 A가 원래 예약 담당자였고 연락처가 일정을 변경하면, 사용자 A의 예약 가능한 시간대만 표시돼요.

{% hint style="info" %}
**Allow Staff Selection**(직원 선택 허용)을 끄면 예약하는 사람이 예약 위젯에서 담당 직원을 바꾸지 못해요. 자세한 내용은 [라운드 로빈 캘린더 직원 선택](round-robin-calendar-staff-selection.md) 문서를 참고하세요.
{% endhint %}

---

## 새 예약 설정

새 예약 설정을 쓰면 미리 정한 조건에 따라 직원 배정을 자동화할 수 있어요. 필요한 경우 고객이 알맞은 팀원과 예약하도록 할 수 있어요.

### 1단계: Always Book with Assigned User 켜기

**Always Book with Assigned User**(항상 할당된 사용자로 예약)를 켜면 새 예약을 항상 연락처의 할당된 사용자와 잡을지 정할 수 있어요. 연락처에 할당된 사용자가 있으면 그 사용자가 우선 배정되고, 없으면 라운드 로빈으로 배정돼요.

![Always Book with Assigned User 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042369995/original/iZGxloCNkMhUwJkv9iYa-uRrYyDN8gBKfg.gif?1740668410)

{% hint style="info" %}
**Allow Staff Selection**을 끄면 예약하는 사람이 예약 위젯에서 담당 직원을 바꾸지 못해요.
{% endhint %}

#### 사전 조건

- 리드나 고객에게 이미 할당된 사용자가 있어야 해요.
- 예약 위젯 순서에서 **폼**이 맨 처음에 있어야 해요. 이 기능을 쓰려면 **Forms & Payments**(폼 및 결제) 탭에서 위젯 순서를 바꾸세요.

  ![Forms & Payments 탭에서 위젯 순서 바꾸기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042369584/original/V3BjcEKK8wTx6pFMirs-IQkV-4yFj2ld7w.png?1740668166)

### 2단계: 설정하기

**Meeting Details > 팀원 > 고급 설정**으로 이동해 **Always Book with Assigned User**를 켜세요.

![Always Book with Assigned User 켜기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042370312/original/AuuwGLM0GxC-YFZLIHj7rciymRCDL5LLcg.gif?1740668656)

#### 새 예약 설정이 작동하는 방식

폼이 맨 처음에 있으면 연락처가 먼저 자기 정보를 입력해요. 시스템은 연락처의 이메일이나 전화번호로 할당된 사용자가 누구인지 확인해요. 경우는 세 가지예요.

- **할당된 사용자가 없는 경우**: 라운드 로빈 방식으로 예약이 배정돼요.
- **할당된 사용자가 캘린더에 속하지 않은 경우**: 연락처에 할당된 사용자(예: 사용자 A)가 캘린더 팀원이 아니면, 캘린더 팀원 사이에서 라운드 로빈 방식으로 예약이 배정돼요.
- **할당된 사용자가 캘린더에 속한 경우**: 연락처에 할당된 사용자(예: 사용자 A)가 캘린더 팀원이면, 예약 위젯에 사용자 A의 시간대가 표시되고 사용자 A와 예약이 잡혀요.

{% hint style="info" %}
이 설정을 끄면 모든 새 예약이 라운드 로빈 방식으로 배정돼요.
{% endhint %}

라운드 로빈으로 배정되는 기준이 궁금하다면 [라운드 로빈 캘린더의 예약 배정 로직](appointment-distribution-logic-for-round-robin-calendars.md) 문서를 참고하세요.

---

## 추가 설정

예약 과정을 더 세밀하게 조정하려면, 라운드 로빈 캘린더에서 연락처를 팀원에게 배정하는 방식에 영향을 주는 설정을 켜세요. 이 설정은 **Notifications and Additional Options**(알림 및 추가 옵션) 탭에서 찾을 수 있어요.

![알림 및 추가 옵션 탭의 추가 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042368798/original/LwPz6aAPrBUuXQxheGHIvsNOiQF2Qg6KFw.png?1740667622)

#### 설정 1: Assign Contacts to Their Respective Calendar Team Members(연락처를 해당 캘린더 팀원에게 할당)

- 예약이 잡히면 연락처가 예약한 팀원에게 자동으로 할당돼요.
- 예약과 소통을 한 팀원이 일관되게 맡게 되어 고객 관리가 편해져요.

#### 설정 2: Automatically Assign a Contact's Future Appointments to the Same Team Member(연락처의 이후 예약을 같은 팀원에게 자동 할당)

- 이 설정을 켜면 연락처가 특정 팀원과 예약한 뒤의 모든 예약이 같은 팀원에게 자동으로 배정돼요.
- 같은 직원과 계속 일할 수 있어 연속성이 유지되고 고객 관계가 좋아져요.

---

## 모범 사례

모범 사례를 따르면 라운드 로빈 캘린더를 효과적이고 효율적으로 운영할 수 있어요. 아래 내용을 지켜 일정 충돌을 줄이고 업무 흐름을 개선하세요.

- 팀원의 가용 시간을 최신 상태로 유지해야 예약이 정확하게 배정돼요.
- **고급 설정**을 주기적으로 확인해 비즈니스 상황에 맞게 조정하세요.
- 모든 캘린더의 설정을 일관되게 유지해 충돌을 막으세요.

---

## 자주 묻는 질문

### 고객에게 할당된 사용자가 없으면 어떻게 되나요?
라운드 로빈 로직에 따라 예약 가능한 팀원이 자동으로 배정돼요.

### 예약을 특정 팀원에게 직접 배정할 수 있나요?
네, 캘린더 설정에서 예약을 직접 다시 배정할 수 있어요.

### 이 기능을 쓰면 일정 변경은 어떻게 처리되나요?
선택한 설정에 따라 예약이 원래 담당자에게 그대로 남거나, 라운드 로빈 로직으로 다시 배정돼요.

### 연락처에서 예약을 잡을 때 팀원 드롭다운에 모든 팀원이 보이지 않아요
연락처 상세 화면(**CRM > 연락처** > 연락처 선택 > **예약** 탭)에서 예약을 잡으면, **팀원** 드롭다운에는 해당 예약의 캘린더에 배정된 사용자만 표시돼요.

여러 팀원이 드롭다운에 나타나게 하려면 **캘린더 >** 해당 캘린더 선택 **> 팀원** 탭으로 이동해 필요한 사용자를 모두 추가하세요. 여기에 추가된 사용자만 직접 예약할 때 드롭다운 목록에 나타나요.
