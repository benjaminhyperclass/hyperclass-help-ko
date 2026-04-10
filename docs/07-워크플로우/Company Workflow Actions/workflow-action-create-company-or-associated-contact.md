---

번역일: 2026-04-07
카테고리: 07-워크플로우 > Company Workflow Actions
---

# 워크플로우 액션 – 회사 또는 연결된 연락처 생성

**목차**

- [개요](#개요)
- [액션 이름](#액션-이름)
- [액션 설명](#액션-설명)
- [액션 세부사항](#액션-세부사항)
- [사용 예시](#사용-예시)

## 개요

회사 또는 연결된 연락처 생성(Create Company or Associated Contact) 액션을 사용하면 워크플로우 안에서 자동으로 새 회사(Company) 레코드를 생성하거나, 기존 회사 아래에 연결된 연락처를 생성할 수 있습니다.

이 액션은 폼, 연동, 웹훅을 통해 새 데이터가 들어올 때 관련된 회사와 연락처 레코드를 수동 작업 없이 자동으로 생성하고 연결하여 CRM 정보를 풍부하게 만들어줍니다.

## 액션 이름

회사 또는 연결된 연락처 생성(Create Company or Associated Contact)

## 액션 설명

이 액션으로 다음과 같은 작업을 할 수 있습니다:

- 워크플로우 안에서 직접 새 회사 레코드를 자동 생성
- 기존 회사 레코드에 연결된 연락처를 생성
- 인바운드 웹훅이나 폼 제출 같은 워크플로우 트리거의 데이터를 활용해 동적으로 입력 필드 매핑
- 수동 레코드 생성 없이 깔끔한 회사-연락처 연결 관계 유지

이 액션은 중복 항목을 줄이고 회사 기반 자동화를 처리할 때 CRM 구조를 체계적으로 유지하는 데 도움이 됩니다.

## 액션 세부사항

![워크플로우 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055485023/original/UJpZsTPA4UENuK2PODOvXmPr9SzRxdV04w.png?1759909866)

**I. 생성할 객체 레코드(Object Record to Create)**

생성하려는 레코드 유형을 선택합니다:

- **회사(Company)** – 새 회사 레코드를 생성합니다
- **연결된 연락처(Associated Contact)** – 워크플로우의 현재 회사에 연결된 새 연락처를 생성합니다

**II. 필드 매핑(Field Mapping)**

워크플로우 데이터나 고정 값을 채우려는 회사 또는 연락처 필드에 매핑합니다.

매핑 예시:
- 회사명 → {{inboundWebhookRequest.body.company}}
- 연락처 이메일 → {{inboundWebhookRequest.body.email}}
- 이름 → {{inboundWebhookRequest.body.first_name}}

**III. 동적 값 소스**

다음 소스에서 값을 매핑할 수 있습니다:

- 인바운드 웹훅 페이로드 (예: {{inboundWebhookRequest.body.companyName}})
- 회사 필드 (워크플로우 트리거가 회사 이벤트 기반일 때)
- 고정 텍스트 값 (예: "Hyperclass 파트너")
- 커스텀 값

**IV. 연결 동작(Association Behavior)**

- **연결된 연락처(Associated Contact)**를 선택하면, 새 연락처가 워크플로우를 트리거한 회사 레코드에 자동으로 연결됩니다
- 이 관계는 CRM의 해당 회사의 "연결된 연락처(Associated Contacts)" 섹션에 표시됩니다

**V. 필드 추가(Add Field)**

- **+ 필드 추가(Add Field)**를 사용해 추가 필드 매핑을 포함할 수 있습니다
- 각 행은 하나의 필드-값 매핑을 나타냅니다

**VI. 액션 저장(Save Action)**

- 매핑 설정이 완료되면 **액션 저장(Save Action)**을 클릭합니다
- 워크플로우가 실행되면 정의된 레코드 유형(회사 또는 연결된 연락처)을 자동으로 생성하고 모든 매핑된 필드를 채웁니다

## 사용 예시

#### **예시 1: 웹훅으로 새 회사 생성**

**목표:** 새 비즈니스 리드를 받았을 때 회사 레코드를 자동 생성

**설정**
- 워크플로우 유형: 회사 기반
- 트리거: 인바운드 웹훅
- 생성할 객체 레코드: 회사
- 필드 매핑:
  - 회사명 → {{inboundWebhookRequest.body.companyName}}
  - 도메인 → {{inboundWebhookRequest.body.domain}}
  - 업종 → {{inboundWebhookRequest.body.industry}}

**흐름**
1. 웹훅을 통해 새 회사 리드가 수집됩니다
2. 워크플로우가 이 액션을 트리거합니다
3. 매핑된 모든 세부 정보와 함께 새 회사 레코드가 생성되어 CRM에 추가됩니다

#### **예시 2: 기존 회사에 연결된 연락처 생성**

**목표:** 기존 회사 레코드 아래에 새 직원 연락처를 자동 추가

**설정**
- 워크플로우 유형: 회사 기반
- 트리거: 회사 업데이트 또는 웹훅 → 직원 추가 이벤트
- 생성할 객체 레코드: 연결된 연락처
- 필드 매핑:
  - 이름 → {{inboundWebhookRequest.body.firstName}}
  - 성 → {{inboundWebhookRequest.body.lastName}}
  - 이메일 → {{inboundWebhookRequest.body.email}}

**흐름**
1. 웹훅이나 연동을 통해 직원 데이터가 수신됩니다
2. 해당 회사에서 워크플로우가 트리거됩니다
3. 새 연락처가 생성되고 해당 회사에 자동으로 연결됩니다

#### **예시 3: 회사 데이터 풍부화 및 새 연락처 자동 추가**

**목표:** 새 회사가 생성될 때마다 연락처를 자동으로 추가

**설정**
- 1단계: 이 액션 사용 → 생성할 객체 = 회사
  - 회사명 → {{inboundWebhookRequest.body.company}}
  - 도메인 → {{inboundWebhookRequest.body.domain}}
- 2단계: 다른 액션 사용 → 생성할 객체 = 연결된 연락처
  - 연락처 이름 → {{inboundWebhookRequest.body.contactName}}
  - 이메일 → {{inboundWebhookRequest.body.email}}

**흐름**
1. 먼저 새 회사 레코드가 생성됩니다
2. 두 번째 액션이 바로 뒤에 실행되어 연결된 연락처를 추가합니다
3. 연락처가 새 회사의 연결된 연락처 목록에 자동으로 나타납니다

---
*원문 최종 수정: Mon, 13 Oct, 2025 at 3:26 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*