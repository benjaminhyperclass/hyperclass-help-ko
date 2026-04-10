---

번역일: 2026-04-08
카테고리: 13-AI-Employee > Conversation AI + Workflows
---

# 대화 AI 봇과 상태 업데이트 - 워크플로우 액션

**목차**

- [개요](#개요)
- [액션 이름](#액션-이름)
- [액션 설명](#액션-설명)
- [액션 사용 사례](#액션-사용-사례)
- [주요 참고사항](#주요-참고사항)
- [액션 세부사항](#액션-세부사항)
- [예시 및 시나리오](#예시-및-시나리오)
  - [예시 1: 커뮤니케이션 채널별 전용 봇](#예시-1-커뮤니케이션-채널별-전용-봇)
  - [예시 2: 태그 기반 봇 할당](#예시-2-태그-기반-봇-할당)
  - [예시 3: 결제 상태 기반 봇 활성화](#예시-3-결제-상태-기반-봇-활성화)
- [추가 참고사항](#추가-참고사항)

## 개요

"대화 AI 봇과 상태 업데이트" 액션을 사용하면 특정 대화 AI(Conversation AI) 봇을 연락처에 할당하고 해당 봇의 상태(활성 또는 비활성)를 자동으로 업데이트할 수 있습니다. 이 액션은 개별 연락처에 대한 대화 AI 봇 관리를 간소화하여 고객 여정, 특정 트리거 또는 맞춤 조건에 따라 효율적인 상호작용을 보장합니다.

봇 할당과 상태 변경을 자동화함으로써 수동 업데이트가 필요 없어져 시간을 절약하고 워크플로우 효율성을 향상시킵니다.

## 액션 이름

대화 AI 봇과 상태 업데이트

## 액션 설명

"대화 AI 봇과 상태 업데이트" 액션을 통해 다음이 가능합니다:

- 연락처에게 대화 AI 봇을 선택하여 할당
- 워크플로우나 트리거에 따라 봇의 상태를 활성 또는 비활성으로 업데이트

이를 통해 대화 AI 봇이 개별 연락처와 언제, 어떻게 상호작용할지 정밀하게 제어할 수 있습니다.

## 액션 사용 사례

- 개별 커뮤니케이션 채널에 봇 할당
- 다음과 같은 맞춤 트리거 조건에 봇 할당:
  - 예약 완료
  - 결제 완료
  - 폼 제출
- 커스텀 태그를 기반으로 봇 할당
- 특정 필터 조건이나 조건 로직(예: If-Else 조건)을 사용한 봇 할당
- 특정 라이브 채팅 채널에 전용 봇 할당

봇이 할당된 후 대화(Conversations) 탭에서 연락처에 할당된 봇을 확인할 수 있습니다.

![대화 탭에서 할당된 봇 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439234/original/P6e5zIpQKOaedbrSxyONATMtzwnBRaiJoQ.png?1736311939)

## 주요 참고사항

**채널 호환성:**
할당된 봇에 해당 채널이 활성화되어 있는지 확인하세요. 예를 들어, 페이스북 상호작용을 처리하는 봇을 할당하는 경우 해당 봇에 페이스북 채널이 활성화되어 있는지 확인하세요.

**분기 로직:**
이 액션은 연락처에 봇을 할당한 후 워크플로우 로직에 따라 즉시 분기됩니다. 전체 대화가 완료될 때까지 기다리지 않고 바로 분기됩니다.

## 액션 세부사항

![액션 설정 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439231/original/DHnyM_Uw84RZBJ0GcZlEmmwYvNvEI_H9YQ.png?1736311939)

![액션 설정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439232/original/4YeIqz5JVSF58O0dzuUDaTmZTyAnzm6CbA.png?1736311939)

**Keep Same(동일 유지):** 기존 설정을 그대로 유지하며 현재 봇이 계속 적용됩니다.

## 예시 및 시나리오

### 예시 1: 커뮤니케이션 채널별 전용 봇

**시나리오:** SMS와 같은 특정 채널에 전용 봇을 할당하고 싶은 경우

**해결책:**
- 전제조건: 워크플로우 생성
- 트리거 선택: 예) 고객이 SMS로 답변함
- 액션 추가: 대화 AI 봇과 상태 업데이트
- 드롭다운에서 봇 선택(예: SMS Bot)
- 봇 상태를 활성으로 설정
- 워크플로우 발행

이 설정을 통해 SMS 봇이 SMS 관련 상호작용을 전담하여 연락처에게 원활한 경험을 제공합니다.

![SMS 봇 설정 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439236/original/yFJ9XtcbRC_Us0v8M0j63B5qMIi5RJbd6g.jpeg?1736311939)

**예시 2:** 라이브 채팅 채널별 전용 봇

![라이브 채팅 봇 설정 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439237/original/hwj1XZjbrENdZmlwSvu3p4TNPyGNOUw5Uw.jpeg?1736311939)

![라이브 채팅 봇 설정 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439238/original/9JENTQMCn3DopAPPeGXQhfQP5YsJCt2PFw.jpeg?1736311939)

### 예시 2: 태그 기반 봇 할당

**시나리오:** 특정 태그(예: "전화 예약")가 있는 연락처에만 봇이 상호작용하도록 하고 싶은 경우

**해결책:**
- 전제조건: 워크플로우 생성
- 트리거 선택: 예) 태그 추가: 전화 예약
- 액션 추가: 대화 AI 봇과 상태 업데이트
- 할당할 봇 선택
- 봇 상태를 활성으로 설정
- 워크플로우 발행

이를 통해 연락처에 할당된 태그를 기반으로 개인화된 봇 상호작용을 보장합니다.

![태그 기반 봇 할당 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439235/original/9E7hRSaHQ6BKTkHTgw0eM526T0kgxWgeZg.jpeg?1736311939)

### 예시 3: 결제 상태 기반 봇 활성화

**시나리오:** 결제를 완료한 연락처에게만 대화 AI 봇이 상호작용하도록 하고 싶은 경우

**해결책:**
- 전제조건: 워크플로우 생성
- 트리거 추가: 예) 결제 완료
- 액션 추가: 대화 AI 봇과 상태 업데이트
- 봇 선택: 예) 영업 봇
- 봇 상태를 활성으로 설정
- 워크플로우 발행

이 설정을 통해 결제 고객만 영업 봇의 커뮤니케이션을 받게 되어 관련성과 효율성이 향상됩니다.

![결제 기반 봇 활성화 예시 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439233/original/C1N3OruegVvuNzY85W7x_agf0KawQJ-hEA.png?1736311939)

![결제 기반 봇 활성화 예시 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439230/original/kdoSUvtbwwJU9ga1rOxu2lF2k0RT3D-y-A.png?1736311939)

## 추가 참고사항

- 각 봇이 특정 채널에 전담되도록 다양한 라이브 채팅 채널에 여러 봇을 할당할 수 있습니다.
- 변화하는 조건이나 워크플로우에 따라 봇을 동적으로 업데이트할 수 있어 더 큰 맞춤화와 제어가 가능합니다.

---
*원문 최종 수정: 2025년 1월 7일*
*Hyperclass 사용 가이드 — hyperclass.ai*