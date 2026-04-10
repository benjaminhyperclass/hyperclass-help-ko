---

번역일: 2026-04-06
카테고리: 04-캘린더-예약
---

# 예약 노트 생성 - 워크플로우 액션

## 목차

- [개요](#개요)
- [입력 필드](#입력-필드)
- [작동 방식](#작동-방식)
- [설정 방법](#설정-방법)
- [주의사항](#주의사항)
---

## **개요**

**예약(Appointments)** 카테고리에 **예약 노트 생성(Create Appointment Note)**이라는 새로운 액션을 추가했습니다. 이 액션을 사용하면 워크플로우를 통해 예약에 노트를 자동으로 추가할 수 있습니다.

---

## **입력 필드**

- **appointmentId (문자열)** – 인바운드 웹훅 트리거를 사용할 때 필수 입력 항목입니다.

- **body (문자열, 최대 5,000자)** – 예약 노트에 들어갈 내용입니다.

---

## **작동 방식**

- **예약 기반 트리거**를 사용하는 경우 (예: 예약 상태(Appointment Status), 고객 예약 완료(Customer Booked Appointment)), **예약 ID는 필요하지 않습니다**. 워크플로우에 등록된 예약에 자동으로 노트가 추가됩니다.

![예약 기반 트리거 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041031684/original/eYU7rtJBrAfU-VyxQwoF7gfm3GvRZGPYrw.png?1738741881)

- **인바운드 웹훅 트리거**를 사용하는 경우에는 **반드시 예약 ID를 전달해야** 정확한 예약에 노트가 추가됩니다.

![인바운드 웹훅 트리거 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041021416/original/--VuVUw7nr3ibUlOnp2uwplE_Ch5mbJ8rA.png?1738724824)

---

## **설정 방법**

### 액션명: 예약 노트 생성(Create Appointment Note)

### 사용 단계

- **이동 경로:** Automations(자동화) > Create New Workflow(새 워크플로우 생성) > Start From Scratch(처음부터 시작)

- **트리거 추가:**
  **Inbound Webhook(인바운드 웹훅)**, **Appointment Status(예약 상태)**, 또는 **Customer Booked Appointment(고객 예약 완료)** 등의 트리거를 선택합니다.

- **액션 추가:**
  **Add Action(액션 추가) > Create Appointment Note(예약 노트 생성)**을 선택합니다.

- 액션 이름을 입력합니다.

---

### **입력 필드 설정**

#### **인바운드 웹훅 트리거**를 사용하는 경우:

- **Appointment ID(예약 ID):** 다음 커스텀 값을 사용하여 예약 ID를 추가하세요:
  ```
  {{inboundWebhookRequest.appointmentId}}
  ```

- **Note Body(노트 내용):** 다음 커스텀 값을 사용하여 노트 내용을 추가하세요:
  ```
  {{inboundWebhookRequest.body}}
  ```

![인바운드 웹훅 설정 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041021460/original/ZhNR2bzmR0UTPtSsgcdxbRzU9HcET3HrTw.png?1738724940)

#### **예약 기반 트리거**(Appointment Status 또는 Customer Booked Appointment)를 사용하는 경우:

- **Appointment ID(예약 ID)는 필요하지 않습니다**.

- **Note Body(노트 내용):** 원하는 내용을 직접 입력하면 됩니다.

---

## **주의사항**

- **인바운드 웹훅**을 사용할 때는 웹훅 페이로드에 **appointmentId**와 **body** 두 가지 모두 포함되어야 정상 작동합니다.

- **body 필드**는 **최대 5,000자**까지 입력할 수 있습니다.

이 기능을 활용하면 워크플로우 자동화를 통해 예약 관련 노트를 효율적으로 기록할 수 있어, 수동 작업을 줄이고 업무를 체계적으로 관리할 수 있습니다.

---

### **여러 레코드에서의 노트 표시**

이 워크플로우 액션으로 생성된 예약 노트는 내부 예약 노트입니다. 해당 연락처(Contact), 기회(Opportunity), 대화(Conversation) 레코드에도 함께 표시되어, 팀원들이 여러 모듈에서 동일한 맥락을 확인할 수 있습니다. 나중에 노트를 수정하거나 삭제하면, 해당 예약 노트가 표시되는 모든 곳에 변경사항이 반영됩니다.

노트 표시, 필터링, 동기화에 대한 자세한 내용은 [예약 노트 생성 및 관리와 레코드 간 동기화 방법](how-to-create-manage-appointment-notes-sync-them-across-records.md)을 참고하세요.

---
*원문 최종 수정: 2026년 3월 17일*
*Hyperclass 사용 가이드 — hyperclass.ai*