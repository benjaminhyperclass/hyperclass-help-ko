---

번역일: 2026-04-06
카테고리: 03-대화 > 대화
---

# 워크플로우 액션 - 외부 통화 기록

이 문서는 워크플로우 액션 - 외부 통화 기록을 사용하여 타사 통화 도구의 통화를 CRM에 기록하는 방법을 설명합니다.

### **이 문서에서 다루는 내용:**

- 워크플로우 액션 - 외부 통화 기록이란?
- 이 액션을 사용하는 방법

### 워크플로우 액션 - 외부 통화 기록이란?

이 워크플로우 액션을 사용하면 타사 통화 도구에서 발생한 외부 통화를 CRM에 등록할 수 있습니다. 이를 통해 모든 커뮤니케이션 세부 정보가 CRM 내에서 중앙 집중화되어 더 나은 추적과 관리가 가능합니다. 이 액션을 통해 통화 녹음도 전달할 수 있으며, 연락처의 대화(Conversations) 섹션에서 확인할 수 있습니다.

### 이 액션을 사용하는 방법

이 액션은 인바운드 웹훅 트리거(Inbound Webhook Trigger)와 함께 효과적으로 사용할 수 있습니다. 이 트리거는 통화 시스템에서 통화가 발생할 때마다 통화 세부 정보를 공유하기 위해 호출할 수 있는 웹훅 URL을 제공합니다.

인바운드 웹훅 트리거 설정: 도움말 문서

트리거가 설정되면, 방향(direction) 필드와 함께 조건 분기(If/Else)를 추가하여 인바운드와 아웃바운드 흐름을 분리합니다.

![조건 분기 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030049016/original/1ZSk4ELYuOe5RoJrZckFQ2fb0j7W29rpDw.png?1722256105)

참고: direction 필드는 인바운드 웹훅 트리거(Inbound Webhook Trigger) 옵션에서 액세스할 수 있습니다
![방향 필드 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030049335/original/i150SOLnrV0vzOpcX5AFX8GDS4qb2g5aCQ.png?1722256238)

인바운드 통화와 아웃바운드 통화에 대한 두 개의 분기를 생성한 후, "연락처 생성" 액션을 추가합니다. 이는 웹훅에서 전달하는 전화번호를 사용하여 통화가 등록될 연락처를 식별합니다.

연락처 생성 액션에서, 전화 필드를 인바운드 통화 흐름에서는 "발신 번호(From Number)"에, 아웃바운드 통화 흐름에서는 "수신 번호(To Number)"에 매핑합니다. 이렇게 하면 해당 전화번호와 연결된 연락처가 생성/식별됩니다.

![연락처 생성 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030049744/original/wDhFwiA4PKkIt55s5hntwRsFrKy050Hdzw.png?1722256470)

이후 외부 통화 기록(Log External Call) 액션을 추가합니다.

![외부 통화 기록 액션 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030050022/original/bCkK1GTlWcW3c87myvaFIBEXFbgOvHwyDQ.png?1722256617)

각 필드(방향, 날짜, 수신자, 발신자, 통화 상태, 첨부파일)에 대해 커스텀 값(custom values) 아이콘 > 인바운드 웹훅 트리거(Inbound Webhook Trigger)를 클릭하여 관련 값을 업데이트합니다.

![필드 값 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030050317/original/aov6CsyaGDQwCtzXJuoISUVm-7pMvKx2eA.png?1722256777)

워크플로우가 발행되면, 외부 통화가 CRM에 기록되어 연락처의 대화(Conversation) 섹션에서 확인할 수 있습니다.

![대화 섹션의 통화 기록 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030050720/original/NjOWrt1ItkIe7diZyhF_CwcgPJ5bdT37RQ.png?1722257002)

통화 녹음 파일도 CRM에 전달할 수 있으며 대화 내에서 표시됩니다.

---
*원문 최종 수정: Mon, 19 Aug, 2024 at 3:25 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*