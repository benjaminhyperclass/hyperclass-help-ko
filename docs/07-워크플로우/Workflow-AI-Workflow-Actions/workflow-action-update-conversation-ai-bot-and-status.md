---
원문: /support/solutions/articles/155000003821-workflow-action-update-conversation-ai-bot-and-status
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Update Conversation AI Bot and Status(대화 AI 봇 및 상태 업데이트)

연락처에게 특정 대화 AI 봇을 배정하고, 그 봇의 상태를 한 번에 바꾸는 워크플로우 액션이에요. 연락처의 진행 단계나 트리거, 조건에 따라 봇을 자동으로 지정하고 싶을 때 쓰세요.

## 개요

**Update Conversation AI Bot and Status**(대화 AI 봇 및 상태 업데이트) 액션을 쓰면 연락처에게 특정 대화 AI 봇을 배정하고, 그 봇의 상태를 **Active**(활성) 또는 **Inactive**(비활성)로 자동 변경할 수 있어요. 연락처별로 봇을 관리하기가 쉬워지고, 연락처의 진행 단계나 트리거, 직접 정한 조건에 맞게 대화를 이어 갈 수 있어요.

봇 배정과 상태 변경이 자동으로 이루어지므로 수동으로 바꿀 필요가 없어요. 시간을 아끼고 워크플로우도 더 효율적으로 운영할 수 있어요.

## 액션 이름

**Update Conversation AI Bot and Status**

## 액션 설명

이 액션으로 할 수 있는 일은 다음과 같아요.

- 연락처에게 대화 AI 봇을 지정해요.
- 워크플로우나 트리거에 따라 봇의 상태를 **Active** 또는 **Inactive**로 바꿔요.

연락처 한 명 한 명에 대해 대화 AI 봇이 언제, 어떻게 대화할지 세밀하게 정할 수 있어요.

## 활용 사례

1. 커뮤니케이션 채널별로 봇을 배정해요.
2. 직접 정한 트리거 조건에 따라 봇을 배정해요. 예를 들면 다음과 같아요.
   - **Appointments booked**(예약 생성)
   - **Payments received**(결제 완료)
   - **Forms submitted**(폼 제출)
3. 사용자 지정 태그에 따라 봇을 배정해요.
4. 특정 필터 조건이나 If-Else 같은 조건 로직에 따라 봇을 배정해요.
5. 특정 실시간 채팅 채널에 전용 봇을 배정해요.

봇을 배정하고 나면 **대화** 메뉴에서 연락처에게 배정된 봇을 확인할 수 있어요.

![연락처에 배정된 봇이 대화 화면에 표시된 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439234/original/P6e5zIpQKOaedbrSxyONATMtzwnBRaiJoQ.png?1736311939)

## 주요 참고 사항

{% hint style="info" %}
채널 호환성: 배정하는 봇에 해당 채널이 켜져 있는지 확인하세요. 예를 들어 Facebook 대화를 맡길 봇이라면, 그 봇에서 Facebook 채널이 켜져 있어야 해요.
{% endhint %}

{% hint style="info" %}
분기 로직: 이 액션은 연락처에게 봇을 배정한 뒤 워크플로우 로직에 따라 바로 다음 분기로 넘어가요. 대화가 모두 끝날 때까지 기다리지 않아요.
{% endhint %}

## 액션 상세 정보

![액션 설정 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439231/original/DHnyM_Uw84RZBJ0GcZlEmmwYvNvEI_H9YQ.png?1736311939)

![액션 설정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439232/original/4YeIqz5JVSF58O0dzuUDaTmZTyAnzm6CbA.png?1736311939)

{% hint style="info" %}
**Keep Same**(그대로 유지)을 선택하면 아무것도 바뀌지 않고 기존 봇이 그대로 적용돼요.
{% endhint %}

## 예시와 시나리오

### 예시 1: 커뮤니케이션 채널마다 전용 봇 지정하기

**시나리오**

SMS처럼 특정 채널에 전용 봇을 지정하고 싶어요.

**해결 방법**

1. 사전 준비: 워크플로우를 만들어요.
2. 트리거를 선택해요. 예: **Customer replied via SMS**(SMS로 고객이 답장함)
3. 액션 **Update Conversation AI Bot and Status**를 추가해요.
4. 드롭다운 목록에서 봇을 선택해요. 예: "SMS Bot"
5. 봇의 상태를 **Active**로 설정해요.
6. **Publish**(게시)로 워크플로우를 게시해요.

이렇게 하면 SMS 봇이 SMS 대화를 전담하게 돼요. 연락처는 끊김 없이 자연스럽게 대화할 수 있어요.

![SMS 봇을 지정한 워크플로우 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439236/original/yFJ9XtcbRC_Us0v8M0j63B5qMIi5RJbd6g.jpeg?1736311939)

예시 2: 실시간 채팅 채널마다 전용 봇 지정하기

![실시간 채팅 채널별 봇 지정 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439237/original/hwj1XZjbrENdZmlwSvu3p4TNPyGNOUw5Uw.jpeg?1736311939)

![실시간 채팅 채널별 봇 지정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439238/original/9JENTQMCn3DopAPPeGXQhfQP5YsJCt2PFw.jpeg?1736311939)

### 예시 2: 태그에 따라 봇 배정하기

**시나리오**

"Call Booked" 같은 특정 태그가 붙은 연락처하고만 봇이 대화하게 하고 싶어요.

**해결 방법**

1. 사전 준비: 워크플로우를 만들어요.
2. 트리거를 선택해요. 예: **Contact added with Tag: Call Booked**(태그 "Call Booked"가 추가된 연락처)
3. 액션 **Update Conversation AI Bot and Status**를 추가해요.
4. 배정할 봇을 선택해요.
5. 봇의 상태를 **Active**로 설정해요.
6. **Publish**로 워크플로우를 게시해요.

이렇게 하면 연락처에 붙은 태그에 따라 맞춤형 봇 대화를 만들 수 있어요.

![태그 기반 봇 배정 워크플로우 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439235/original/9E7hRSaHQ6BKTkHTgw0eM526T0kgxWgeZg.jpeg?1736311939)

### 예시 3: 결제 상태에 따라 봇 활성화하기

**시나리오**

결제를 완료한 연락처하고만 대화 AI 봇이 대화하게 하고 싶어요.

**해결 방법**

1. 사전 준비: 워크플로우를 만들어요.
2. 트리거를 추가해요. 예: **Payment Received**(결제 완료)
3. 액션 **Update Conversation AI Bot and Status**를 추가해요.
4. 봇을 선택해요. 예: "Sales Bot"
5. 봇의 상태를 **Active**로 설정해요.
6. **Publish**로 워크플로우를 게시해요.

이렇게 하면 결제한 고객만 Sales Bot과 대화하게 돼서, 더 알맞은 메시지를 효율적으로 보낼 수 있어요.

![결제 완료 트리거 기반 워크플로우 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439233/original/C1N3OruegVvuNzY85W7x_agf0KawQJ-hEA.png?1736311939)

![Sales Bot 배정 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439230/original/kdoSUvtbwwJU9ga1rOxu2lF2k0RT3D-y-A.png?1736311939)

### 추가 참고 사항

- 실시간 채팅 채널마다 봇을 따로 배정할 수 있어요. 봇 하나가 채널 하나를 전담해요.
- 조건이나 워크플로우가 바뀌면 봇도 그에 맞게 동적으로 업데이트할 수 있어요. 그래서 더 세밀하게 설정하고 관리할 수 있어요.
