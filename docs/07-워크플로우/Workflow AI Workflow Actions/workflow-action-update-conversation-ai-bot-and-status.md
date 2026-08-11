---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003821-workflow-action-update-conversation-ai-bot-and-status
번역일: 2026-08-11
카테고리: 07-워크플로우 > Workflow AI Workflow Actions
---

# 워크플로우 액션 - 대화 AI 봇 및 상태 업데이트(Update Conversation AI Bot and Status)

**목차**

- [개요](#Overview)
- [액션 이름](#Action-Name)
- [액션 설명](#Action-Description)
- [액션 활용 사례](#Action-Use-Cases)
- [주요 참고 사항](#Key-Notes)
- [액션 상세](#Action-Details)
- [예시 및 시나리오](#Example-&-Scenarios%C2%A0)
  - [예시 1: 커뮤니케이션 채널별 전용 봇](#Example-1%3A-Dedicated-Bot-for-Each-Communication-Channel)
  - [예시 2: 태그 기반 봇 할당](#Example-2%3A-Assigning-Bots-Based-on-Tags)
  - [예시 3: 결제 상태 기반 봇 활성화](#Example-3%3A-Bot-Activation-Based-on-Payment-Status)
- [추가 참고 사항](#Additional-notes:)

## 개요

"대화 AI 봇 및 상태 업데이트(Update Conversation AI Bot and Status)" 액션을 사용하면 특정 연락처(Contacts)에 대화 AI(Conversation AI) 봇을 할당하고, 해당 봇의 상태(활성/비활성)를 자동으로 업데이트할 수 있어요. 이 액션을 통해 개별 연락처에 대한 대화 AI 봇 관리를 간소화하고, 고객의 여정이나 특정 트리거(Trigger), 커스텀 조건에 따라 효율적인 상호작용을 만들어낼 수 있습니다.

봇 할당과 상태 변경을 자동화함으로써 수동 업데이트가 필요 없어지고, 시간을 절약하면서 워크플로우(Workflow) 효율성을 높일 수 있어요.


## 액션 이름

대화 AI 봇 및 상태 업데이트(Update Conversation AI Bot and Status)


## 액션 설명

"대화 AI 봇 및 상태 업데이트" 액션을 사용하면 다음이 가능해요:

- 특정 연락처에 대화 AI 봇 선택하기
- 워크플로우나 트리거에 따라 봇의 상태를 활성(Active) 또는 비활성(Inactive)으로 업데이트하기

이를 통해 개별 연락처 수준에서 대화 AI 봇이 어떻게, 언제 상호작용할지를 정밀하게 제어할 수 있습니다.


## 액션 활용 사례

- 각 커뮤니케이션 채널별로 봇 할당하기
- 다음과 같은 커스텀 트리거 조건에 봇 할당하기:
  - 예약(Appointment) 완료 시
  - 결제(Payment) 완료 시
  - 폼(Form) 제출 시
- 커스텀 태그(Tag)를 기반으로 봇 할당하기
- 특정 필터 조건이나 조건 분기(If-Else) 로직을 사용해 봇 할당하기
- 특정 라이브 채팅 채널 전용 봇 할당하기

봇이 할당되면 대화(Conversations) 탭에서 연락처에 할당된 봇을 확인할 수 있어요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439234/original/P6e5zIpQKOaedbrSxyONATMtzwnBRaiJoQ.png?1736311939)


## 주요 참고 사항

**채널 호환성:**
할당하려는 봇에서 해당 채널이 활성화되어 있는지 반드시 확인하세요. 예를 들어 페이스북(Facebook) 상호작용을 처리할 봇을 할당한다면, 해당 봇에 페이스북 채널이 활성화되어 있는지 확인해야 해요.

**분기 로직(Branching Logic):**
이 액션은 연락처에 봇을 할당한 후, 워크플로우 로직에 따라 즉시 분기됩니다. 대화가 전부 끝날 때까지 기다리지 않고 바로 분기 처리돼요.


## 액션 상세

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439231/original/DHnyM_Uw84RZBJ0GcZlEmmwYvNvEI_H9YQ.png?1736311939)


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439232/original/4YeIqz5JVSF58O0dzuUDaTmZTyAnzm6CbA.png?1736311939)


**동일하게 유지(Keep Same):** 동일하게 유지를 선택하면 아무것도 변경되지 않고 기존에 할당된 봇이 그대로 적용돼요.


## 예시 및 시나리오

### 예시 1: 커뮤니케이션 채널별 전용 봇

**시나리오:** SMS(문자)와 같은 특정 채널 전용 봇을 할당하고 싶어요.

**해결 방법:**

- 사전 준비: 워크플로우를 생성하세요.
- 트리거를 선택하세요. 예: 고객이 SMS로 답장함
- 액션 추가: 대화 AI 봇 및 상태 업데이트
- 드롭다운에서 봇을 선택하세요 (예: SMS 봇).
- 봇 상태를 활성(Active)으로 설정하세요.
- 워크플로우를 발행(Published)하세요.

이렇게 설정하면 SMS 봇이 SMS 관련 상호작용만 전담해서 처리하게 되어, 연락처에게 매끄러운 경험을 제공할 수 있어요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439236/original/yFJ9XtcbRC_Us0v8M0j63B5qMIi5RJbd6g.jpeg?1736311939)


**예시 2: 라이브 채팅 채널별 전용 봇**


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439237/original/hwj1XZjbrENdZmlwSvu3p4TNPyGNOUw5Uw.jpeg?1736311939)


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439238/original/9JENTQMCn3DopAPPeGXQhfQP5YsJCt2PFw.jpeg?1736311939)


### 예시 2: 태그 기반 봇 할당

**시나리오:** 특정 태그(예: "상담 예약 완료")가 있는 연락처와만 상호작용하는 봇을 만들고 싶어요.

**해결 방법:**

- 사전 준비: 워크플로우를 생성하세요.
- 트리거를 선택하세요. 예: 태그 "상담 예약 완료"가 추가된 연락처
- 액션 추가: 대화 AI 봇 및 상태 업데이트
- 할당할 봇을 선택하세요.
- 봇 상태를 활성(Active)으로 설정하세요.
- 워크플로우를 발행하세요.

이렇게 하면 연락처에 부여된 태그에 따라 맞춤형 봇 상호작용이 가능해져요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439235/original/9E7hRSaHQ6BKTkHTgw0eM526T0kgxWgeZg.jpeg?1736311939)


### 예시 3: 결제 상태 기반 봇 활성화

**시나리오:** 결제를 완료한 연락처와만 상호작용하는 대화 AI 봇을 만들고 싶어요.

**해결 방법:**

- 사전 준비: 워크플로우를 생성하세요.
- 트리거를 추가하세요. 예: 결제 완료(Payment Received)
- 액션 추가: 대화 AI 봇 및 상태 업데이트
- 봇을 선택하세요 (예: 세일즈 봇).
- 봇 상태를 활성(Active)으로 설정하세요.
- 워크플로우를 발행하세요.

이렇게 설정하면 결제를 완료한 고객에게만 세일즈 봇의 메시지가 전달되어, 관련성과 효율성을 모두 높일 수 있어요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439233/original/C1N3OruegVvuNzY85W7x_agf0KawQJ-hEA.png?1736311939)


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439230/original/kdoSUvtbwwJU9ga1rOxu2lF2k0RT3D-y-A.png?1736311939)


### 추가 참고 사항

- 여러 라이브 채팅 채널마다 서로 다른 봇을 할당할 수 있으며, 각 봇이 특정 채널만 전담하도록 설정할 수 있어요.
- 봇은 변화하는 조건이나 워크플로우에 따라 동적으로 업데이트할 수 있어서, 더 높은 수준의 커스터마이징과 제어가 가능해요.

---
*원문 최종 수정: 2026-06-02*
*Hyperclass 사용 가이드 — hyperclass.ai*