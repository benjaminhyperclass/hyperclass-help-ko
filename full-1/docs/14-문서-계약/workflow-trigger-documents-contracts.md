---
원문: https://help.gohighlevel.com/support/solutions/articles/155000001491-workflow-trigger-documents-contracts
번역일: 2026-11-06
카테고리: 14-문서-계약
---

# 워크플로우 트리거 — Documents & Contracts(문서 & 계약)

**Documents & Contracts**(문서 & 계약) 트리거를 쓰면 문서가 발송·조회·서명·완료될 때마다 알림 보내기, 태그 지정, 파이프라인 업데이트 같은 작업을 자동으로 실행할 수 있어요. 템플릿, 수신자 유형, 문서 값으로 조건을 좁힐 수 있어서 제안서, NDA, 서명 계약서를 더 효율적으로 관리할 수 있어요.

[동영상 보기](https://www.youtube.com/embed/PrzR8h8zbPI?&wmode=opaque)

## Documents & Contracts 워크플로우 트리거란?

하이퍼클래스의 **Documents & Contracts** 트리거는 문서 상태가 바뀔 때 작업을 자동으로 실행해요. 문서가 발송·조회·서명·완료되는 순간을 워크플로우와 연결해서, 수신자의 반응에 맞춰 바로 다음 작업을 할 수 있어요. 제안서나 계약서와 관련된 커뮤니케이션, 기록 관리, 후속 조치를 간편하게 처리할 때 알맞아요.

서명이나 승인을 받기 위해 문서를 자주 보내는 에이전시, 서비스 제공업체, 일반 기업에 특히 유용해요. **Status**(상태), **Template Name**(템플릿 이름), **Recipient Type**(수신자 유형) 같은 필터를 쓰면 특정 상황에 딱 맞는 워크플로우를 만들 수 있어요. NDA, 영업 제안서, 계약서 등 어떤 문서든 업무를 체계적으로 정리하고 제때 처리하는 데 도움이 돼요.
<!-- 검토 필요: 원문 내용이 서로 다름 (필터 이름이 앞부분에는 Template Name, 설정 절차에는 Template으로 표기됨) -->

## Documents & Contracts 워크플로우 트리거의 주요 이점

이 트리거로 문서와 관련된 작업을 정확하게 자동화할 수 있어요. 서명 현황을 추적하거나 문서 상태에 따라 후속 조치를 달리할 때 업무 효율과 소통이 좋아져요.

- 문서 상태에 따른 자동 후속 조치: 문서가 발송·조회·서명·완료될 때 맞춤 워크플로우를 실행해요. 직접 확인하지 않아도 알림, 업데이트, 내부 작업이 제때 이루어져요.
- 기록 관리 개선: 문서 활동에 따라 CRM 필드, Google Sheets, Slack 채널을 자동으로 업데이트해요. 기록을 최신 상태로 유지하고 데이터 입력 오류를 줄일 수 있어요.
- 필터로 정교한 자동화: **Template Name**, **Status**, **Recipient Type** 같은 필터로 특정 문서나 수신자에게만 워크플로우를 실행해요. 문서 종류마다 다른 워크플로우를 운영할 때 알맞아요.
- 내부 팀 협업 강화: 문서에서 중요한 일이 생기면 내부에 바로 알림을 보내요. 영업팀이나 운영팀이 지체 없이 후속 조치를 하거나 다음 단계로 넘어갈 수 있어요.
- 개인화된 고객 경험: 연락처나 문서의 커스텀 값으로 발송 이메일, 알림, 작업을 개인화해요. 전문적이면서 고객 중심의 소통을 이어 갈 수 있어요.

## Documents & Contracts 워크플로우 트리거 설정하기

### 1. 자동화 메뉴로 이동하기

왼쪽 메뉴에서 **자동화**를 클릭하세요. 그다음 오른쪽 위의 파란색 **+ Create Workflow**(워크플로우 만들기) 버튼을 클릭하고 **처음부터 시작**을 선택하면 직접 워크플로우를 만들 수 있어요.

![자동화 메뉴에서 워크플로우 만들기를 시작하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050138126/original/JDTNUOmFqwSypcTAt4onvzkPLr16UZYjKA.png?1753084464)

### 2. 새 트리거 추가하기

워크플로우 빌더에서 **+ Add New Trigger**(새 트리거 추가)를 클릭해 시작 조건을 정하세요. 트리거 목록을 아래로 스크롤해 **Payments**(결제) 섹션에서 **Documents & Contracts**(문서 & 계약)를 클릭하세요. 문서와 관련된 이벤트가 생기면 워크플로우가 실행돼요.

![트리거 목록의 Payments 섹션에서 Documents & Contracts를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050138163/original/YxYmN0at4n7IVWc8FZT1sZ3_UUpytUUDlg.png?1753084486)

### 3. 트리거 이름 정하기

나중에 알아보기 쉽도록 **Workflow Trigger Name**(워크플로우 트리거 이름) 필드에 구체적인 이름을 입력하세요. 예: "계약서 조회 – 온보딩 문서"

![Workflow Trigger Name 필드에 트리거 이름을 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050138195/original/vJVVL0mNv_ugyeTIv2cmmVIEJS0elB5bfA.png?1753084509)

### 4. 필터 추가하기

**Add Filters**(필터 추가)를 클릭해 워크플로우가 실행될 구체적인 조건을 설정하세요.

![Add Filters 버튼을 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050138353/original/B5B6W4cjjAM8SSaIxCGuduxgzRV3tgktRQ.png?1753084634)

### 5. 필터 필드와 조건 선택하기

기본으로 제공되는 필터는 다음과 같아요.

- **Recipient Type**(수신자 유형): **Contact**(연락처) 또는 **Business User**(비즈니스 사용자)
- **Status**(상태): **Viewed**(조회함), **Signed/Accepted**(서명 완료/수락됨), **Completed**(완료), **Sent**(발송됨)
- **Template**(템플릿): 특정 문서 템플릿
- **Value**(값): 계약 금액. 고액 계약만 골라낼 때 유용해요.

![필터 필드와 조건을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050138365/original/EQOWr2EwHhRQd6Dt3cVXCa5rEpoyl2Cqcg.png?1753084655)

### 6. Recipient Type 필터

**Recipient Type** 필터로 문서를 받은 대상이 **Business User**인지 **Contact**인지 정해요. 의도한 수신자 유형이 한 행동에만 워크플로우가 실행돼요.

![Recipient Type 필터를 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050138662/original/VomGMNsKJ5LWh2AaOrDYbMYcb_uBxHwkpw.png?1753084845)

### 7. Status 필터

**Status** 필터로 문서의 진행 단계에 따라 워크플로우를 실행해요. **Sent**, **Viewed**, **Signed/Accepted**, **Completed** 중에서 고를 수 있어요. 문서에 일어난 특정 행동에 맞춰 자동화를 설계할 수 있어요.

![Status 필터를 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050138722/original/S8VozLTPqiGht7et4f0satCACVzNu73wXQ.png?1753084893)

### 8. Template 필터

**Template** 필터로 워크플로우를 실행할 문서나 계약서 템플릿을 지정해요. 온보딩 폼이나 서비스 계약서처럼 특정 문서에만 자동화를 실행하고 싶을 때 유용해요.

![Template 필터를 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050138775/original/vknXb90h7z_GqRa0OvZXn10dt42YcOt6sg.png?1753084950)

### 9. Value 필터

**Value** 필터로 문서에 지정된 금액이나 수치에 따라 워크플로우를 실행해요. **Greater than**(초과), **Equals to**(같음) 같은 연산자를 쓰면 문서가 특정 값 조건을 충족할 때만 자동화가 실행돼요. 예산 기준이나 가격 구간이 정해진 계약에 알맞아요.

![Value 필터를 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050138918/original/w6QjbwMT4mYadLEMbtRno0WL83220eqGbQ.png?1753085030)

### 10. 트리거 저장하기

필터 설정을 마쳤으면 **Save Trigger**(트리거 저장)를 클릭해 설정을 적용하세요. 이제 정해 둔 조건에 맞는 문서 이벤트가 생기면 워크플로우가 자동으로 실행돼요.

![Save Trigger 버튼을 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050138603/original/U47aDMa6KtUVMvs9RZFdsjNAMMF2jbcirA.png?1753084817)

## 자주 묻는 질문

### 연락처가 서명했을 때와 비즈니스 사용자가 서명했을 때 서로 다른 워크플로우를 실행할 수 있나요?

네, 할 수 있어요. **Recipient Type** 필터에서 트리거를 **Contact**(리드나 고객 같은 외부 사용자)에게 적용할지, **Business User**(팀원이나 직원)에게 적용할지 고르면 돼요. 고객에게 보내는 계약과 내부 승인 문서에 서로 다른 워크플로우를 적용할 때 유용해요. 예를 들어 연락처가 제안서에 서명하면 고객 온보딩 이메일을 보내고, 비즈니스 사용자가 내부 검토 문서를 승인하면 내부 Slack 알림을 보낼 수 있어요.

### 같은 문서를 조회하고 서명도 하면 트리거가 두 번 실행되나요?

네, 그럴 수 있어요. 상태가 바뀔 때마다(예: **Viewed**에서 **Signed/Accepted**로) 별개의 이벤트로 처리돼요. 두 상태를 모두 트리거로 설정했다면 각각 워크플로우가 실행될 수 있어요. 같은 자동화가 중복 실행되지 않게 하려면 워크플로우 안에 조건 분기를 추가해서, 작업을 실행하기 전에 태그나 커스텀 필드 값을 확인하세요. 그러면 메시지나 업데이트가 겹치는 일을 막을 수 있어요.

### Value 필터로 5,000달러를 넘는 제안서 같은 고액 계약에만 워크플로우를 실행할 수 있나요?

네, 할 수 있어요. **Value** 필터에서 **Greater than**(초과), **Equals to**(같음) 같은 연산자를 쓸 수 있어요. 계약 금액이 정해 둔 기준을 넘을 때만 트리거가 실행되도록 설정하세요. 고액 고객에게 다른 온보딩 단계를 안내하거나, 큰 딜을 영업 매니저에게 알릴 때 특히 유용해요.

### 특정 문서 템플릿(예: NDA, 서비스 계약서)에서만 워크플로우가 실행되게 하려면 어떻게 하나요?

**Template** 필터에서 워크플로우를 실행할 문서 템플릿을 선택하세요. 문서 종류별로 별도의 자동화를 운영할 수 있어요. 예를 들어 "서비스 계약서" 템플릿에 서명한 고객에게는 환영 시퀀스를 보내고, "NDA" 템플릿을 완료한 고객에게는 다른 시퀀스를 보낼 수 있어요. 이렇게 하면 정확히 그 템플릿을 사용했을 때만 워크플로우가 실행돼요.
