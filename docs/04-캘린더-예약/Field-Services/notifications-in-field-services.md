---
원문: /support/solutions/articles/155000009384-notifications-in-field-services
번역일: 2026-11-07
카테고리: 04-캘린더-예약
---

# 현장 서비스 알림 설정

**현장 서비스**에서는 새 요청이 들어올 때부터 방문이 끝날 때까지, 중요한 순간마다 이메일, SMS, WhatsApp 메시지를 보낼 수 있어요. 직접 연락하지 않아도 고객과 팀원이 상황을 알 수 있어요. 이 문서에서는 어떤 알림이 있는지, 알림을 켜는 방법, 메시지를 수정하는 방법을 안내해요.

{% hint style="info" %}
**현장 서비스**는 현재 비공개 베타 단계이며, 선택된 계정에서만 사용할 수 있어요. 기능과 화면은 개선 과정에서 바뀔 수 있어요.
{% endhint %}

## 현장 서비스 알림이란?

알림은 각 상황에 맞춰 메시지를 자동으로 보내 줘요. 알림마다 **이메일**, **SMS**, WhatsApp 중 원하는 채널로 보낼 수 있어요. 받는 대상은 세 가지로 나뉘고, 대상별로 따로 설정해요.

- **연락처**(고객)
- **Assigned staff**(배정된 직원)
- **관리자 / Dispatcher**(디스패치 담당자)

## 알림 메뉴 위치

1. **현장 서비스 > Field Services Settings**(현장 서비스 설정) **> 글로벌 설정**으로 이동하세요.
2. **Operations**(운영) 아래에서 **알림**을 클릭하세요.
3. **연락처**, **Assigned staff**, **관리자 / Dispatcher** 중 설정할 대상을 선택하세요.

![알림 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084162885/original/k2MkEq24uutf0PwpzrFY3o--rg-QpVx5_g.jpg?1792999579)

## 사용할 수 있는 알림

알림은 발송되는 시점에 따라 나뉘어 있어요.

| 알림 | 발송 시점 |
| --- | --- |
| **요청이 제출되었습니다** | 연락처가 새 서비스 요청을 제출했을 때 |
| **Request visit scheduled**(요청 방문 예약) | 요청에 방문 일정이 잡혔을 때 |
| **Request visit reminder**(요청 방문 리마인더) | 예약된 요청 방문 전 |
| **Job visit scheduled**(작업 방문 예약) | 작업에 방문 일정이 잡혔을 때 |
| **Visit rescheduled**(방문 일정 변경) | 방문 시간이 바뀌었을 때 |
| **Visit cancelled**(방문 취소) | 방문이 취소되었을 때 |
| **Visit reminder**(방문 리마인더) | 예약된 방문 전 |
| **Staff en route**(직원 이동 중) | 배정된 직원이 방문 장소로 이동 중일 때 |
| **Visit completed**(방문 완료) | 방문이 완료로 표시되었을 때 |

## 알림 켜기와 메시지 수정

1. 알림 옆의 연필 아이콘을 클릭하세요.
2. 채널 탭(**이메일**, **SMS**, WhatsApp)을 선택하세요.
3. 채널을 **비활성화됨**에서 활성화 상태로 바꾸세요.
4. 이메일은 이메일 템플릿을 고르거나 처음부터 작성해요. **제목**과 **이메일 본문**을 수정하세요. 원래 메시지로 되돌리려면 **기본값으로 초기화**를 클릭하세요.
5. 오른쪽의 **미리보기**를 확인하세요.
6. **저장**을 클릭하세요.

![미리보기가 함께 보이는 알림 편집 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084162907/original/aKliJTI-uy7C3Ksvdg1r2n8yJD-zWPaRiA.jpg?1792999582)

## 발신자 설정

고객에게 보내는 이메일은 오른쪽의 **Sender settings**(발신자 설정) 패널에서 **발신자 주소**와 **발신자 이름**을 설정해요. 이 패널은 고객용 이메일 알림을 켜면 나타나요. 변경한 내용을 적용하려면 이 패널에서 **저장**을 클릭하세요.

## 병합 필드

메시지에는 병합 필드(merge field)가 들어가서 상세 정보가 자동으로 채워져요. 기본 메시지에는 연락처 이름, 요청 또는 작업 제목, 서비스 주소, 서비스와 상품, 방문 날짜와 시간, 도착 시간대, 배정된 직원 같은 필드가 들어 있어요. 편집기의 태그 아이콘을 클릭하면 필드를 더 넣을 수 있어요.

## 자주 묻는 질문

### 요청이 예약되면 고객이 메시지를 두 번 받나요?
아니요. **Request visit scheduled**와 **Job visit scheduled**를 모두 켜도 두 알림은 서로 다른 상황에서 발송돼요. 하나는 요청 방문이 예약될 때, 다른 하나는 작업 방문이 예약될 때 발송돼요.

### 직접 만든 이메일이나 SMS 템플릿을 쓸 수 있나요?
네. 편집기에서 저장해 둔 이메일 템플릿을 고르거나 직접 작성할 수 있어요.

### 현장 서비스 이벤트로 직접 만든 자동화를 실행할 수 있나요?
현장 서비스의 워크플로우 지원은 베타 기간 동안 확대하고 있어요. 업데이트는 **릴리스 노트**에서 확인하세요.

## 함께 보면 좋은 문서

- [현장 서비스의 요청](requests-in-field-services.md)
- [현장 서비스에서 방문 예약하고 가능한 시간 찾기](scheduling-visits-and-finding-availability-in-field-services.md)
- [현장 서비스의 방문 상태](visit-statuses-in-field-services.md)
- [현장 서비스 설정: 작업, 방문, 환경설정](field-services-settings-jobs-visits-and-preferences.md)
