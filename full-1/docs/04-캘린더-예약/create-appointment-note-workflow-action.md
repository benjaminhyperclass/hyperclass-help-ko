---
원문: https://help.gohighlevel.com/support/solutions/articles/155000004580-create-appointment-note-workflow-action
번역일: 2026-11-07
카테고리: 04-캘린더-예약
---

# 워크플로우 액션 — Create Appointment Note(예약 메모 만들기)

워크플로우에서 예약에 메모를 자동으로 남기고 싶을 때 쓰는 액션이에요. 이 문서에서는 입력값, 작동 방식, 설정 방법을 안내해요.

## 개요

**Appointments**(예약) 카테고리에 **Create Appointment Note**(예약 메모 만들기) 액션이 새로 생겼어요. 이 액션을 쓰면 워크플로우에서 예약에 메모를 추가할 수 있어요.

## 입력값

- **appointmentId** (문자열): **Inbound Webhook**(인바운드 웹훅) 트리거를 쓸 때 필수예요.
- **body** (문자열, 최대 5,000자): 예약 메모의 내용이에요.

## 작동 방식

- 예약과 관련된 트리거를 쓰면(예: **Appointment Status**(예약 상태), **Customer Booked Appointment**(고객 예약 완료)) 예약 ID를 입력하지 않아도 돼요. 워크플로우에 들어온 예약에 메모가 추가돼요.

![예약 관련 트리거를 사용한 워크플로우 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041031684/original/eYU7rtJBrAfU-VyxQwoF7gfm3GvRZGPYrw.png?1738741881)

- **Inbound Webhook** 트리거를 쓰면 예약 ID를 반드시 함께 전달해야 해요. 그래야 메모가 올바른 예약에 추가돼요.

![Inbound Webhook 트리거를 사용한 워크플로우 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041021416/original/--VuVUw7nr3ibUlOnp2uwplE_Ch5mbJ8rA.png?1738724824)

## 설정 방법

### 사용할 액션: Create Appointment Note

1. **자동화 > 워크플로우**로 이동해 **Create New Workflow**(새 워크플로우 만들기)를 선택한 다음, **처음부터 만들기**를 선택해요.
2. 트리거를 추가해요.
   - **Inbound Webhook**, **Appointment Status**, **Customer Booked Appointment** 같은 트리거를 선택해요.
3. 액션을 추가해요.
   - **Add Action**(액션 추가) > **Create Appointment Note**를 선택해요.
   - 액션 이름을 입력해요.

### 입력값 설정

#### Inbound Webhook 트리거를 쓸 때

- **Appointment ID**(예약 ID): 아래 커스텀 값으로 예약 ID를 넣어요.

  ```
  {{inboundWebhookRequest.appointmentId}}
  ```
- **Note Body**(메모 내용): 아래 커스텀 값으로 메모 내용을 넣어요.

  ```
  {{inboundWebhookRequest.body}}
  ```

#### 예약 관련 트리거(Appointment Status 또는 Customer Booked Appointment)를 쓸 때

- **Appointment ID**는 입력하지 않아도 돼요.
- **Note Body**: 원하는 메모 내용을 직접 입력할 수 있어요.

## 알아 두세요

- **Inbound Webhook**을 쓸 때는 웹훅 페이로드에 **appointmentId**와 **body**가 모두 들어 있어야 정상적으로 작동해요.
- **body** 필드는 최대 5,000자까지 입력할 수 있어요.

이 액션으로 예약 관련 메모를 워크플로우에서 바로 기록할 수 있어서, 직접 입력하는 수고를 줄이고 정보를 더 깔끔하게 정리할 수 있어요.

## 메모가 보이는 위치

이 워크플로우 액션으로 만든 예약 메모는 내부용 예약 메모예요. 해당 예약과 연결된 연락처, 기회, 대화 기록에도 표시돼서 팀원들이 같은 내용을 여러 곳에서 확인할 수 있어요. 나중에 메모를 수정하거나 삭제하면, 같은 예약 메모가 보이는 모든 곳에 변경 내용이 반영돼요.

메모가 보이는 방식, 필터, 동기화 동작은 「How to Create & Manage Appointment Notes & Sync them Across Records」 문서에서 자세히 볼 수 있어요.
