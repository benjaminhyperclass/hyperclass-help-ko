---

번역일: 2026-04-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 - 대화 편집 (Edit Conversation)

고객과의 상호작용을 처리하는 모든 비즈니스에서 대화를 효율적으로 관리하는 것은 매우 중요합니다. Hyperclass의 대화 편집 워크플로우 액션(Edit Conversation Workflow Action)은 메시지를 읽음/읽지 않음으로 표시하고 보관/복원하여 대화 관리를 자동화합니다. 이를 통해 수동 작업을 없애고 워크플로우를 효율화하며 팀이 체계적으로 운영될 수 있도록 합니다. 이 가이드에서는 이 액션의 기능, 장점, 그리고 워크플로우 내에서 설정하는 방법을 다룹니다.

---

**목차**

- [대화 편집 워크플로우 액션이란?](#대화-편집-워크플로우-액션이란)
- [대화 편집 워크플로우 액션의 주요 장점](#대화-편집-워크플로우-액션의-주요-장점)
- [대화 편집 워크플로우 액션 설정하기](#대화-편집-워크플로우-액션-설정하기)
- [자주 묻는 질문](#자주-묻는-질문)

---

# 대화 편집 워크플로우 액션이란?

대화 편집 워크플로우 액션(Edit Conversation Workflow Action)을 사용하면 워크플로우의 특정 이벤트를 기반으로 대화 상태를 자동으로 업데이트할 수 있습니다. 대화를 읽음이나 읽지 않음으로 수동 표시하거나 채팅을 보관하는 대신, 이 액션이 해당 프로세스를 자동화하여 조직화와 효율성을 향상시킵니다. 고객 지원팀이 인박스를 효과적으로 관리하고 중요한 대화가 적절한 주의를 받을 수 있도록 도와줍니다.

---

## **대화 편집 워크플로우 액션의 주요 장점**

- **인박스 관리 자동화:** 대화 상태를 자동으로 업데이트하여 수동 작업을 줄입니다.

- **응답 우선순위 개선:** 주의가 필요한 읽지 않은 메시지를 쉽게 식별할 수 있도록 합니다.

- **워크플로우 효율성 향상:** 미리 정의된 트리거를 기반으로 대화를 정리하여 커뮤니케이션을 효율화합니다.

- **대화 정리 유지:** 완료되거나 비활성 대화를 보관함으로 이동시키면서 활성 대화는 접근 가능하게 유지합니다.

---

## **대화 편집 워크플로우 액션 설정하기**

Hyperclass에서 대화 편집 워크플로우 액션을 설정하는 것은 간단합니다. 아래 단계를 따라 워크플로우에 통합해보세요.

### **워크플로우 빌더 접근**

Hyperclass 대시보드의 **Automation(자동화)** 섹션으로 이동합니다. + Create Workflow(워크플로우 생성)를 클릭한 다음 +Start from scratch(처음부터 시작)를 선택하거나 대화 관리를 자동화하고 싶은 기존 워크플로우를 엽니다.

![워크플로우 빌더 접근](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042097512/original/l7pW37l8ky1qh-GVGAUcexXiapYmMAzfWg.png?1740382232)

### **대화 편집 액션 추가**

워크플로우 편집기 내에서 **+ Add Action(액션 추가)** 버튼을 클릭합니다. 액션 목록에서 **Edit Conversation(대화 편집)**을 검색하고 선택합니다.

![대화 편집 액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042097795/original/sR7rukIGhwCymshCMPzsosj3_Z2EaiWRqg.png?1740382442)

### 액션 이름 지정

워크플로우 내에서 기능을 쉽게 식별할 수 있도록 "읽음 표시 및 보관"과 같은 설명적인 이름을 제공합니다.

![액션 이름 지정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042097876/original/88lJG3glI5afW52CTO34bdl96SCm_3fFhQ.png?1740382508)

### 액션 설정 구성

대화 편집 액션이 추가되면 사용 가능한 설정을 구성합니다:

#### **읽음 또는 읽지 않음으로 표시**

- **읽음으로 표시(Mark as Read):** 대화를 열지 않고 읽음으로 표시합니다.
- **읽지 않음으로 표시(Mark as Unread):** 대화 상태를 읽지 않음으로 재설정하여 계속 보이도록 합니다.
- **없음(None):** 현재 읽음/읽지 않음 상태를 변경하지 않고 유지합니다.

![읽음/읽지 않음 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042097944/original/XYVv6xFYIv6xPsB9kcDz0DcvCs4u5yX6QA.png?1740382563)

#### **보관 또는 보관 해제**

- **보관(Archive):** 인박스를 깔끔하게 유지하기 위해 대화를 활성 뷰에서 이동시킵니다.
- **보관 해제(Unarchive):** 대화를 최근 대화(Recents) 탭으로 복원하여 쉽게 접근할 수 있게 합니다.
- **없음(None):** 대화를 현재 상태로 유지합니다.

![보관/보관 해제 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042097976/original/zBWZPp26VgVtcE70JAMfRnPazwuR9tGzwA.png?1740382590)

### 워크플로우 저장 및 발행

설정이 완료되면 Save Action(액션 저장)을 클릭한 다음 Publish Workflow(워크플로우 발행)를 클릭하여 자동화를 활성화합니다. 이제 시스템이 정의된 워크플로우 트리거를 기반으로 자동으로 대화를 업데이트합니다.

![워크플로우 저장 및 발행](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042098013/original/9EwV8wa1w6MYOOuQXDkvbGJ8zZYPYTf5dg.png?1740382613)

---

## **자주 묻는 질문**

**Q: 이 액션을 사용해서 완료된 모든 대화를 자동으로 보관할 수 있나요?**

네! Contact Replied(연락처 답변) 또는 Appointment Status Changed(예약 상태 변경)와 같은 트리거를 설정하여 상호작용이 완료되면 자동으로 대화를 보관할 수 있습니다.

**Q: 읽음/읽지 않음 표시와 보관/보관 해제 모두에 대해 "없음"을 선택하면 어떻게 되나요?**

두 옵션 모두 없음으로 설정되면 액션은 대화에 어떤 변경도 가하지 않으며 현재 상태를 유지합니다.

**Q: 이 액션이 대화가 보관되거나 보관 해제될 때 사용자에게 알림을 보내나요?**

아니오, 이 액션은 대화의 상태만 업데이트합니다. 알림이 필요한 경우 Send Notification(알림 발송) 액션을 별도로 추가할 수 있습니다.

**Q: 이 액션을 사용해서 대화를 일괄 업데이트할 수 있나요?**

아니오, 이 액션은 워크플로우 내에서 트리거된 개별 대화에만 적용됩니다. 하지만 시간이 지나면서 여러 대화에 적용되는 워크플로우를 만들 수 있습니다.

---
*원문 최종 수정: Tue, 8 Apr, 2025 at 12:14 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*