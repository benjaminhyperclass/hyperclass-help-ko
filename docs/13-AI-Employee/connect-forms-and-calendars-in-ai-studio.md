---

번역일: 2026-04-06
카테고리: 13-AI-Employee
---

# AI Studio에서 폼과 캘린더 연결하기

폼과 캘린더는 AI가 생성한 페이지를 실제로 작동하는 페이지로 만들어 정보를 수집하거나 비즈니스 예약을 받을 수 있도록 도와줍니다. AI Studio에서는 이러한 구성 요소가 프론트엔드 페이지 경험의 일부로 시작되며, 실제 기능을 구현할 준비가 되면 하이퍼클래스 계정에 연결할 수 있습니다. 이렇게 하면 먼저 페이지를 만들고, 나중에 제출이나 일정 예약에 필요한 연결 단계를 완료하는 것이 더 쉬워집니다.

중요: AI Studio는 **Labs**를 통해 사용할 수 있습니다. 사용하기 전에 하위 계정에서 이 기능을 활성화해주세요.

---

## AI Studio의 폼과 캘린더란 무엇인가요?

AI Studio는 페이지에서 **폼 경험**을 만들 수 있습니다. 사용자가 폼을 요청하면 AI Studio는 그 목표에 맞게 페이지를 구성하는 데 도움을 줍니다. 예를 들어, 연락처 섹션, 등록 섹션, 또는 통화 예약 섹션을 만들고 페이지의 적절한 위치에 폼을 배치할 수 있습니다. 요청이 광범위하면 AI Studio는 먼저 어떤 종류의 폼을 원하는지 물어볼 수 있습니다.

이렇게 하면 사용자가 시작하기 전에 모든 세부 사항을 알 필요가 없기 때문에 설정이 더 쉬워집니다.

즉, AI Studio는 다음과 같은 것들을 만드는 데 도움을 줄 수 있습니다:

- 연락처 폼(Contact forms)
- 등록 폼(Registration forms)  
- 리드 수집 섹션
- 예약 페이지(Appointment booking pages)
- 상담 요청 페이지

AI Studio는 브랜드, 페이지 스타일, 전체적인 목표에 맞는 맞춤형이고 독특한 폼과 예약 경험을 생성할 수 있어 창의적인 유연성을 제공합니다!

**중요:** 폼과 캘린더는 자동으로 연결되지 않습니다. AI Studio는 폼이나 예약 섹션의 레이아웃을 만들 수 있지만, 하위 계정으로 데이터 전송을 시작하려면 해당 구성 요소를 연결하도록 요청해야 합니다.

![AI Studio 폼 연결 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068281687/original/VCKJ0hcuDDv4v3NWS-0izNzQGcWQCe4e2Q.png?1775059157)

---

## AI Studio에서 폼과 캘린더를 연결하는 주요 이점

AI Studio에서 폼과 캘린더를 연결하면 생성된 초안을 비즈니스에서 사용할 수 있는 경험으로 바꿀 수 있습니다. 또한 페이지 생성과 리드 수집, 예약 기능을 하나의 워크플로우로 결합하여 시간을 절약할 수 있습니다.

- **더 빠른 설정**: 페이지와 액션 영역을 수동으로 조합하는 대신 함께 구축
- **제어된 연결**: 폼과 캘린더를 하이퍼클래스 계정에 언제 연결할지 결정
- **CRM 준비된 리드 수집**: 연결된 폼은 제출 내용을 하위 계정으로 전송 가능
- **간단한 일정 예약 플로우**: 연결된 캘린더는 예약 페이지를 실시간 일정 관리 경험으로 전환

---

## AI Studio에서 폼 작동 방식

AI Studio에 연락처 폼, 예약 문의 폼, 등록 폼 등 다양한 유형의 폼을 만들도록 요청할 수 있습니다. AI Studio는 프롬프트와 페이지 목표에 따라 페이지 레이아웃, 섹션, 또는 팝업 플로우에 폼을 직접 추가할 수 있습니다.

AI Studio의 폼은 프론트엔드 레이아웃으로 시작됩니다. 페이지에서 폼을 보는 것이 자동으로 CRM에 연결되거나 제출 내용을 수집한다는 의미가 아니라는 점이 중요합니다.

![AI Studio 폼 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068285896/original/y-7pCb1oWXFw-dRjTml14YxiO58fT08JBg.png?1775061287)

### AI Studio에서 폼을 연결하는 방법

폼이 제출 내용을 수집하기 시작하도록 하려면 AI Studio에 연결하도록 요청하거나("*내 CRM에 폼을 연결해줘*") 채팅에서 메시지가 나타날 때 **Connect**를 클릭하세요. 이렇게 하면 CRM 연결 플로우가 실행됩니다.

AI Studio에서 폼이 연결되면 페이지는 하이퍼클래스의 외부 추적 동작을 사용하여 제출 활동을 계정으로 다시 전송합니다. 사용자가 페이지에 CRM 추적을 연결하기로 선택한 후, 폼 제출 내용을 하이퍼클래스에서 수집하고 후속 워크플로우에 사용할 수 있습니다.

간단히 말해서, 과정은 다음과 같습니다:

- AI Studio가 페이지에 폼을 구축
- 사용자가 CRM 추적에 연결
- 제출 내용이 하이퍼클래스로 흘러들어가기 시작

![폼 연결 프로세스](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068277913/original/wT3ZrszE_OG812gntkwQQs-vZz0-ff5dXQ.png?1775057242)

### 연결 후 폼 제출 내용이 어디로 가는지

연결되면 폼 제출 내용은 AI Studio 프로젝트 자체가 아닌 연결된 하위 계정 CRM 설정으로 이동합니다. 즉, 페이지는 AI Studio에 있지만 응답, 연락처, 제출 활동은 연결된 하이퍼클래스 계정으로 이동합니다. 연결 후, 폼 제출 내용은 외부 제출로 폼 제출에 나타날 수 있으며, 외부 추적 동작을 통해 워크플로우 활동과도 연결될 수 있습니다.

사용자는 다음에서 제출 내용을 볼 수 있습니다:

- 연락처(Contacts)

![연락처에서 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068278869/original/F5KfLTQbO5NsWrZwZVyXU-p9nRYb2RGI5Q.png?1775057616)

- 사이트(Sites) > 폼(Forms) > 제출(Submissions) > 외부 폼(External Forms)

![외부 폼 제출에서 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068278950/original/vwg6Q1CvuQnoWvgeEl6iC76h6L74B2kqqA.png?1775057667)

### 워크플로우가 폼 제출과 연결되는 방법

폼이 CRM 추적에 연결되면 추적 트리거를 통해 워크플로우에서 제출 내용을 사용할 수 있습니다. 실제 플로우는 다음과 같습니다:

- AI Studio에서 폼 레이아웃 생성
- 폼을 CRM 추적에 연결
- 워크플로우에서 "External Tracking Event" 트리거 사용
- "Form submission" 이벤트를 사용하여 자동화 계속
- "Domain" 필터 및/또는 "External Form" 필터를 사용한 후 자동화 액션 계속

![워크플로우 연결](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068287157/original/A6V41TP-dz5qO9mo5BStFI5X9bECrTMgrw.jpeg?1775062158)

---

## AI Studio에서 캘린더 작동 방식

AI Studio는 표준 캘린더 위젯 레이아웃만 임베드하는 대신 프론트엔드에서 맞춤형 예약 경험을 만들 수 있습니다. AI Studio에 예약 페이지, 상담 페이지, 또는 발견 전화 페이지를 요청하면 프론트엔드 레이아웃을 생성하고 경험의 일부로 예약 영역을 추가할 수 있습니다.

기존 캘린더 중 하나에 연결되면 해당 맞춤형 경험이 일정 예약을 위해 백그라운드에서 선택된 하이퍼클래스 캘린더를 사용할 수 있습니다!

![캘린더 연결 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068290680/original/R0Yw05aXWLXPZ2Mdl2cIiNSFvgeK-ChC3Q.png?1775064580)

### AI Studio에서 캘린더를 연결하는 방법

캘린더를 연결하면 페이지의 예약 섹션이 실시간 일정 관리 경험으로 바뀝니다. 일정 관리 구성 요소를 수동으로 구축하는 대신 AI Studio가 하위 계정의 기존 캘린더를 연결하는 데 도움을 줄 수 있습니다.

- AI Studio에 예약 중심 페이지나 일정 관리 섹션을 만들도록 요청합니다.
- 채팅에서 메시지가 나타나면 하위 계정에서 사용할 캘린더를 선택합니다.
- 해당 캘린더를 페이지 구성 요소에 연결합니다.
- 예약 경험을 미리 보고 테스트합니다.

![캘린더 연결 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068284764/original/6iugIWnPI-GnOtwjnSlQCDhz1yHL-Wu2fg.png?1775060780)

### 캘린더가 연결된 후 일어나는 일

캘린더 자체는 하위 계정에서 가져옵니다. AI Studio는 페이지 경험 내에서 이를 배치하고 연결하는 데 도움을 줍니다. 따라서 페이지는 AI Studio에 있지만 일정 관리 설정은 여전히 계정 내의 연결된 캘린더와 연결되어 있습니다.

즉, AI Studio 페이지에서 예약된 미팅이나 시간대는 프론트엔드에만 남아있는 것이 아니라 연결된 캘린더에 추가됩니다. 캘린더가 연결된 후:

- 방문자가 페이지에서 사용 가능한 시간을 예약할 수 있습니다
- 예약된 미팅이 하위 계정의 선택된 캘린더에 추가됩니다
- 예약은 해당 캘린더에 이미 구성된 예약 가능 시간과 설정을 사용합니다
- 해당 캘린더에 연결된 모든 자동화, 후속 액션, 또는 기타 캘린더 기반 동작이 하이퍼클래스에서 구성된 대로 계속 실행될 수 있습니다

이렇게 하면 AI Studio 페이지가 계정에 이미 존재하는 캘린더 설정을 사용하면서도 예약 경험을 빠르게 제공할 수 있는 방법이 됩니다.

![캘린더 연결 결과](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155068285436/original/-95iFshVQARbb2zQMPquezRGkDoOOAnoKQ.png?1775061166)

---

## 자주 묻는 질문

**Q: 폼이나 캘린더를 연결한 후에도 페이지를 편집할 수 있나요?**
네. 구성 요소가 연결된 후에도 AI Studio에서 페이지 경험을 계속 수정할 수 있습니다.

**Q: AI Studio에서 사용하기 전에 먼저 하이퍼클래스에서 폼을 만들어야 하나요?**
아니요. AI Studio는 프롬프트에서 프론트엔드 폼 경험을 생성할 수 있으며, 준비가 되면 연결 단계를 안내해줍니다.

**Q: 캘린더 확인, 알림, 자동화가 여전히 연결된 캘린더 설정에서 나오나요?**
네. 페이지가 캘린더에 연결되면 페이지에서 이루어진 예약이 선택된 캘린더를 사용하므로 해당 캘린더에 연결된 모든 확인, 알림, 자동화가 실행됩니다.

---
*원문 최종 수정: 2026-04-02*
*Hyperclass 사용 가이드 — hyperclass.ai*