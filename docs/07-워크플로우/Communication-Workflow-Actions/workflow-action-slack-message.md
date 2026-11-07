---
원문: /support/solutions/articles/155000003273-workflow-action-slack-message
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Slack Message(Slack 메시지)

**Slack Message**(Slack 메시지) 액션은 워크플로우에서 Slack으로 알림을 바로 보내는 액션이에요. 특정 사용자, 비공개 채널, 공개 채널 중 원하는 곳으로 보낼 수 있어요.

## 개요

**Slack Message** 액션을 쓰면 Slack의 특정 사용자나 비공개 채널, 공개 채널로 알림을 보낼 수 있어요. 팀원이 중요한 활동이나 변경 사항을 바로 알 수 있어요.

프리미엄 액션이라서 실행할 때마다 추가 요금이 부과돼요.

## 액션 이름

**Slack Message**

## 액션 설명

**Slack Message** 액션은 지정한 Slack 계정으로 원하는 내용의 메시지를 보내요. 특정 사용자에게 다이렉트 메시지를 보내거나, 비공개 채널에 올리거나, 공개 채널에 알릴 수 있어요. 작업 완료, 연락처 정보 변경, 새 리드 배정 같은 이벤트마다 알림을 자동으로 보낼 수 있어요.

## 액션 상세 정보(Action Details)

![Slack Message 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032062796/original/Vjk7HtsO6kWQ_NA8iL2v4xpUlr6s6wuCmw.png?1725272305)

| 필드 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Choose an Account**(계정 선택) | 알림을 보낼 Slack 계정을 선택해요. | 예 |
| **Event**(이벤트) | 보낼 메시지의 유형을 선택해요. 사용자에게 다이렉트 메시지, 비공개 채널, 공개 채널 중에서 고를 수 있어요. | 예 |

### 설정 방법

1. **Choose an Account**: 메시지를 보낼 Slack 계정을 드롭다운 목록에서 선택해요. 메시지가 올바른 워크스페이스로 전달되려면 꼭 선택해야 해요.
2. **Event**: 메시지를 보낼 유형을 선택해요. 선택할 수 있는 옵션은 다음과 같아요.
   - **Send Direct Message to a User**(사용자에게 다이렉트 메시지 보내기): 특정 Slack 사용자에게 개인 메시지를 보낼 때 선택해요.
   - **Send Private Channel Message**(비공개 채널 메시지 보내기): 지정한 비공개 채널로 알림을 보낼 때 선택해요.
   - **Send Public Channel Message**(공개 채널 메시지 보내기): 워크스페이스의 모든 사람이 볼 수 있는 공개 채널로 알림을 보낼 때 선택해요.

### 함께 쓰면 좋은 트리거

- **Task Added**(작업 추가됨): 사용자에게 새 작업이 배정되면 Slack 채널에 알려요.
- **Opportunity Status Changed**(기회 상태 변경): 기회의 상태가 바뀌면 영업 채널에 메시지를 보내요.
- **Form Submitted**(폼 제출): 고객이 폼을 제출하면 지정한 채널에 알림을 보내요.

## 예시

새 리드가 추가되고 `높은 우선순위` 태그가 붙을 때마다 Slack의 "마케팅팀" 채널에 알림을 보내고 싶다고 해 볼게요.

**워크플로우 설정 예시**

1. **Trigger**(트리거): `Contact Added`(연락처 추가됨)
   - **Filters**(필터): Tag = `높은 우선순위`
2. **Action**(액션): `Send notification to Slack`
   - **Choose an Account**: `내 계정`
   - **Event**: `Send Private Channel message`
   - **Channel**(채널): `#마케팅팀`
   - **Message**(메시지): `높은 우선순위 신규 리드가 추가되었어요. 상세 내용을 확인해 주세요.`
