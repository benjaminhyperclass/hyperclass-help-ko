---

번역일: 2026-04-07
카테고리: 07-워크플로우 > Communication Workflow Actions
---

# 워크플로우 액션 - 할 일 알림(Task Notification)

**목차**

- [개요](#개요)
- [액션 이름](#액션-이름)
- [액션 설명](#액션-설명)
- [액션 세부사항](#액션-세부사항)
- [예시](#예시)

## 개요

**할 일 알림(Task Notification)** 액션을 사용하면 마감일이 정해진 새로운 할 일을 생성하여 특정 사용자에게 배정할 수 있습니다. 팀원들이 자신에게 배정된 할 일을 놓치지 않도록 하는 데 특히 유용합니다.

## 액션 이름

Task Notification

## 액션 설명

이 액션은 시스템 내에서 할 일을 생성하고, 사용자에게 배정하며, 완료해야 하는 마감일을 설정합니다. 할 일 제목을 지정하고, 담당자를 배정하고, 설명을 추가하며, 마감일을 설정할 수 있어 할 일 관리를 쉽게 정리할 수 있습니다.

## 액션 세부사항

![할 일 알림 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032490951/original/clJ29r5zGEHylhicr_7iIfahd-PbJO_-mw.png?1725872615)

### **설정 방법:**

- **Action Name(액션 이름):** "Add Task(할 일 추가)"와 같이 목적에 맞는 적절한 이름을 입력하세요.
- **Title(제목):** 사용자에게 표시될 할 일 제목을 입력하세요.
- **Description(설명):** 할 일에 대한 자세한 정보를 제공하세요. 담당자가 자신의 업무를 이해할 수 있는 내용입니다.
- **Assign To(담당자 지정):** 할 일을 배정받을 사용자나 팀원을 선택하세요.
- **Due In(마감일):** 미리 정의된 기간(예: 1일, 2일 또는 즉시)을 사용하여 할 일의 마감일을 설정하세요.

| 필드명 | 설명 | 필수 여부 |
|--------|------|----------|
| Title(제목) | 사용자가 할 일을 식별할 수 있는 할 일 제목 | 예 |
| Description(설명) | 배정받은 사용자에게 맥락과 안내를 제공하는 할 일의 자세한 설명 | 아니오 |
| Assign To(담당자 지정) | 사용 가능한 사용자 목록에서 할 일을 배정받을 사용자 선택 | 예 |
| Due In(마감일) | 할 일의 마감일 설정(예: 1일 후, 2일 후, 5일 후 또는 즉시 완료를 위한 "Now") | 예 |

## 예시

팀원인 John에게 리드 후속 조치 할 일을 배정하고 싶다면 다음과 같이 액션을 설정할 수 있습니다:

- **Action Name(액션 이름):** Add Task
- **Title(제목):** Follow-up with Lead XYZ
- **Description(설명):** Call Lead XYZ and check on the progress of their onboarding process.
- **Assign To(담당자 지정):** John Doe
- **Due In(마감일):** 2 Days

이 경우 John은 시스템에서 할 일을 받게 되며, 2일 이내에 완료해야 합니다.

---
*원문 최종 수정: Mon, 9 Sep, 2024 at 4:06 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*