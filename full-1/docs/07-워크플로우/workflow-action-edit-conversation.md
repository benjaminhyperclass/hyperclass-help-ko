---
원문: https://help.gohighlevel.com/support/solutions/articles/48001214153-workflow-action-edit-conversation
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Edit Conversation(대화 편집)

**Edit Conversation**(대화 편집) 액션은 워크플로우 안에서 대화를 읽음/읽지 않음으로 바꾸거나 보관/보관 해제할 때 쓰는 액션이에요. 이 문서에서는 액션이 하는 일, 장점, 설정 방법을 안내해요.

## Edit Conversation 액션이란?

Edit Conversation 액션을 쓰면 워크플로우에서 특정 이벤트가 일어났을 때 대화 상태를 자동으로 바꿀 수 있어요. 대화를 읽음이나 읽지 않음으로 표시하거나 채팅을 보관하는 일을 직접 하지 않아도 돼요. 고객 지원팀이 받은 편지함을 정돈하고, 중요한 대화에 제때 집중하는 데 도움이 돼요.

대화를 읽음으로 표시하면 **대화** 받은 편지함에서 읽지 않음 상태가 해제돼요. 지원되는 받은 편지함 보기에서는 대화 내용 안의 읽지 않음 구분선도 함께 사라져요.

---

## Edit Conversation 액션의 장점

- 받은 편지함 관리를 자동화해요: 대화 상태를 자동으로 바꿔서 수작업을 줄여 줘요.
- 답변 우선순위를 정하기 쉬워요: 확인이 필요한 읽지 않은 메시지를 한눈에 알아볼 수 있어요.
- 워크플로우 효율이 높아져요: 미리 정해 둔 트리거에 따라 대화를 정리해서 소통 과정을 간소화해요.
- 대화를 깔끔하게 유지해요: 끝났거나 활동이 없는 대화는 보관함으로 옮기고, 진행 중인 대화는 바로 볼 수 있게 둬요.

---

## Edit Conversation 액션 설정하기

Edit Conversation 액션은 간단하게 설정할 수 있어요. 아래 순서대로 워크플로우에 추가해 보세요.

### 워크플로우 빌더 열기

1. 하이퍼클래스 왼쪽 메뉴에서 **자동화**를 클릭하세요.
2. **+ Create Workflow**(워크플로우 만들기)를 클릭한 뒤 **처음부터 시작**을 선택하세요. 대화 관리를 자동화할 기존 워크플로우를 열어도 돼요.

![자동화 메뉴에서 워크플로우를 새로 만드는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042097512/original/l7pW37l8ky1qh-GVGAUcexXiapYmMAzfWg.png?1740382232)

### Edit Conversation 액션 추가하기

1. 워크플로우 편집 화면에서 **+ Add Action**(액션 추가) 버튼을 클릭하세요.
2. 액션 목록에서 **Edit Conversation**을 검색해 선택하세요.

![액션 목록에서 Edit Conversation을 검색하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042097795/original/sR7rukIGhwCymshCMPzsosj3_Z2EaiWRqg.png?1740382442)

### 액션 이름 정하기

워크플로우에서 어떤 일을 하는 액션인지 알아볼 수 있도록 이름을 입력하세요. 예를 들어 "읽음 처리 & 보관"처럼 쓰면 돼요.

![액션 이름을 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042097876/original/88lJG3glI5afW52CTO34bdl96SCm_3fFhQ.png?1740382508)

### 액션 설정하기

Edit Conversation 액션을 추가하면 다음 설정을 고를 수 있어요.

#### 읽음/읽지 않음 표시

- **Mark as Read**(읽음으로 표시): 대화를 열지 않아도 읽음으로 표시해요.
- **Mark as Unread**(읽지 않음으로 표시): 대화를 읽지 않음 상태로 되돌려서 계속 눈에 띄게 해요.
- **None**(없음): 현재 읽음/읽지 않음 상태를 그대로 둬요.

![읽음/읽지 않음 옵션을 고르는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042097944/original/XYVv6xFYIv6xPsB9kcDz0DcvCs4u5yX6QA.png?1740382563)

#### 보관/보관 해제

- **Archive**(보관): 대화를 활성 목록에서 치워서 받은 편지함을 깔끔하게 유지해요.
- **Unarchive**(보관 해제): 보관한 대화를 **최근 대화** 탭으로 되돌려서 쉽게 찾을 수 있게 해요.
- **None**(없음): 대화의 현재 상태를 그대로 둬요.

![보관/보관 해제 옵션을 고르는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042097976/original/zBWZPp26VgVtcE70JAMfRnPazwuR9tGzwA.png?1740382590)

### 저장하고 게시하기

1. 설정을 마쳤으면 **Save Action**(액션 저장)을 클릭하세요.
2. **Publish Workflow**(워크플로우 게시)를 클릭해 자동화를 켜세요.

이제 정해 둔 워크플로우 트리거에 따라 대화 상태가 자동으로 바뀌어요.

![액션을 저장하고 워크플로우를 게시하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042098013/original/9EwV8wa1w6MYOOuQXDkvbGJ8zZYPYTf5dg.png?1740382613)

---

## 자주 묻는 질문

### 완료된 대화를 모두 자동으로 보관할 수 있나요?

네, 할 수 있어요. **Contact Replied**(연락처 답장)나 **Appointment Status Changed**(예약 상태 변경됨) 같은 트리거를 설정하면, 상호작용이 끝났을 때 대화를 자동으로 보관할 수 있어요.

### 읽음/읽지 않음 표시와 보관/보관 해제를 모두 None으로 선택하면 어떻게 되나요?

두 옵션을 모두 **None**(없음)으로 두면 액션이 대화를 전혀 바꾸지 않아요. 대화는 현재 상태 그대로 남아요.

### 대화를 보관하거나 보관 해제하면 사용자에게 알림이 가나요?

아니요, 이 액션은 대화 상태만 바꿔요. 알림이 필요하면 **Send Notification**(알림 보내기) 액션을 따로 추가하세요.

### 이 액션으로 여러 대화를 한꺼번에 업데이트할 수 있나요?

아니요, 이 액션은 워크플로우에서 실행된 개별 대화에만 적용돼요. 다만 시간이 지나면서 여러 대화에 적용되는 워크플로우를 만들 수는 있어요.
