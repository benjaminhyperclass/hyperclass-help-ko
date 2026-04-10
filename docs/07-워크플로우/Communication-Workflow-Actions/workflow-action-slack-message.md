---

번역일: 2026-04-07
카테고리: 07-워크플로우 > Communication Workflow Actions
---

# 워크플로우 액션 - Slack 메시지

**목차**

- [개요](#개요)
- [액션 이름](#액션-이름)
- [액션 설명](#액션-설명)
- [액션 세부사항](#액션-세부사항)
- [예시](#예시)

## 개요

"**Slack 메시지**" 액션을 사용하면 특정 사용자, 프라이빗 채널, 또는 퍼블릭 채널에 직접 알림을 보낼 수 있습니다. 이 액션을 통해 원활한 커뮤니케이션과 알림 관리가 가능하며, 팀원들에게 관련 활동이나 업데이트를 즉시 전달할 수 있습니다. 프리미엄 액션으로 실행할 때마다 추가 요금이 발생합니다.

## 액션 이름

**Slack Message**

## 액션 설명

"Slack 메시지" 액션은 지정된 Slack 계정으로 맞춤형 메시지를 전송합니다. 특정 사용자에게 다이렉트 메시지를 보내거나, 프라이빗 채널에 게시하거나, 퍼블릭 채널에 공지할 수 있습니다. 이 연동 기능은 작업 완료, 연락처(Contact) 업데이트, 새 리드 배정 등 다양한 이벤트에 대한 알림을 자동화하여 커뮤니케이션을 효율화합니다.

## 액션 세부사항

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032062796/original/Vjk7HtsO6kWQ_NA8iL2v4xpUlr6s6wuCmw.png?1725272305)

| 필드 | 설명 | 필수 여부 |
|------|------|-----------|
| Choose an Account | 알림을 보낼 Slack 계정을 선택합니다. | 예 |
| Event | 보낼 메시지 유형을 선택합니다: 사용자에게 다이렉트 메시지, 프라이빗 채널, 또는 퍼블릭 채널. | 예 |

**설정 방법:**

- **Choose an Account:** 메시지를 보낼 Slack 계정을 드롭다운 목록에서 선택합니다. 올바른 워크스페이스로 메시지가 전달되도록 하기 위해 필수 항목입니다.
- **Event:** 메시지를 트리거할 이벤트 유형을 선택합니다. 옵션은 다음과 같습니다:
  - **Send Direct Message to a User:** 특정 Slack 사용자에게 개인 메시지를 보내려면 이 옵션을 선택합니다.
  - **Send Private Channel Message:** 지정된 프라이빗 채널에 알림을 보내려면 이 옵션을 선택합니다.
  - **Send Public Channel Message:** 워크스페이스의 모든 사람이 볼 수 있는 퍼블릭 채널에 알림을 보내려면 이 옵션을 사용합니다.

**이 액션과 함께 사용하기 좋은 트리거:**

- **Task Added:** 사용자에게 새 할 일(Task)이 배정될 때 Slack 채널에 알림을 보냅니다.
- **Opportunity Status Changed:** 기회 관리(Opportunity) 상태가 변경될 때 세일즈 채널에 메시지를 보냅니다.
- **Form Submitted:** 고객이 폼(Form)을 제출할 때 특정 채널에 알림을 보냅니다.

## 예시

새 리드가 시스템에 추가되고 "High Priority" 태그(Tag)가 붙을 때마다 "Marketing Team" 채널에 Slack 알림을 보내고 싶다고 가정해봅시다.

**워크플로우(Workflow) 설정 예시:**

- **트리거(Trigger):** Contact Added
- **필터:** Tag = High Priority
- **액션(Action):** Send notification to Slack
  - **Choose an Account:** 본인 계정
  - **Event:** Send Private Channel message
  - **Channel:** #Marketing Team
  - **Message:** 새로운 우선순위 높은 리드가 추가되었습니다. 세부사항을 확인해주세요.

---
*원문 최종 수정: Mon, 2 Sep, 2024 at 5:20 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*