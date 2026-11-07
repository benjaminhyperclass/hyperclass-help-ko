---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003426-workflow-actions-remove-contact-follower
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Remove Contact Follower(연락처 팔로워 제거)

**Remove Contact Follower** 액션은 연락처에 지정된 팔로워를 워크플로우에서 자동으로 제거해요. 이미 만들어 둔 워크플로우에 추가해서 팔로워 관리를 간편하게 할 수 있어요.

## 액션 이름

**Remove Contact Follower**(연락처 팔로워 제거)

## 액션 설명

이 액션은 연락처 프로필에서 팔로워를 한 명 또는 여러 명 제거해요.

## 설정 방법

1. **Contact**(연락처) 카테고리에서 **Remove Contact Follower** 액션을 선택하세요.

   ![워크플로우 액션 목록에서 Remove Contact Follower 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032724886/original/Vl9gdpnzkRY3lC0LsKVrIlswAWOlOJlwXQ.png?1726125579)

2. **Remove Contact Follower** 액션으로 연락처의 팔로워를 일부만 제거하거나 전체를 제거할 수 있어요. 토글을 켜면 연락처의 팔로워를 모두 제거해요. 아니면 팔로워 목록에서 제거할 팔로워를 직접 선택하세요.

   ![Remove Contact Follower 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032724888/original/9DKHbfCqKBBhpxJfCwRHr9L0z5oHNGrupA.jpeg?1726125580)

## 예시

연락처의 진행 단계에 따라 담당자가 자주 배정되고 바뀌는 워크플로우를 예로 들어 볼게요.

**설정 예시**

- **Action Name**(액션 이름): Remove Contact Follower

**워크플로우 단계**

1. **Trigger**(트리거): **Opportunity Status Changed**(기회 상태 변경) 트리거예요. 연락처와 연결된 기회가 **Closed**(종료됨)로 바뀌면 실행돼요.
2. **Action**(액션): **Remove Contact Follower** 액션이에요. 연락처에 배정되어 있던 팔로워를 제거해요.
