---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006574-workflow-action-create-company-or-associated-contact
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Create Company or Associated Contact(회사 또는 연결된 연락처 생성)

**Create Company or Associated Contact**(회사 또는 연결된 연락처 생성) 액션은 워크플로우 안에서 새 회사 레코드를 만들거나, 이미 있는 회사에 연결된 연락처를 만들어요. 폼, 연동, 웹훅으로 새 데이터가 들어올 때 회사와 연락처를 직접 만들고 연결하는 수고를 줄일 수 있어요.

## 이 액션으로 할 수 있는 일

- 워크플로우 안에서 새 회사 레코드를 바로 만들어요.
- 이미 있는 회사 레코드에 연결된 연락처를 만들어요.
- 인바운드 웹훅이나 폼 제출 같은 트리거의 데이터를 필드에 동적으로 매핑해요.
- 레코드를 직접 만들지 않아도 회사와 연락처의 연결 상태를 깔끔하게 유지해요.

중복 항목을 줄이고, 회사 기반 자동화에서도 CRM 구조를 정돈된 상태로 유지하는 데 도움이 돼요.

## 액션 설정 항목

![액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055485023/original/UJpZsTPA4UENuK2PODOvXmPr9SzRxdV04w.png?1759909866)

### 1. 만들 레코드 유형 선택

**Object Record to Create**(생성할 객체 레코드)에서 만들 레코드 유형을 선택해요.

- **Company**(회사): 새 회사 레코드를 만들어요.
- **Associated Contact**(연결된 연락처): 워크플로우에서 현재 처리 중인 회사에 연결된 새 연락처를 만들어요.

### 2. 필드 매핑

워크플로우 데이터나 고정 값을 회사 또는 연락처의 각 필드에 연결해요. 매핑 예시는 다음과 같아요.

- **Company Name**(회사명) → `{{inboundWebhookRequest.body.company}}`
- **Contact Email**(연락처 이메일) → `{{inboundWebhookRequest.body.email}}`
- **First Name**(이름) → `{{inboundWebhookRequest.body.first_name}}`

### 3. 값을 가져올 수 있는 곳

다음 값을 필드에 매핑할 수 있어요.

- **Inbound Webhook**(인바운드 웹훅) 페이로드: 예) `{{inboundWebhookRequest.body.companyName}}`
- 회사 필드: 워크플로우 트리거가 회사 이벤트일 때 쓸 수 있어요.
- 고정 텍스트 값: 예) "하이퍼클래스 파트너스"
- **Custom Values**(커스텀 값)

### 4. 연결 방식

- **Associated Contact**를 선택하면 새 연락처가 워크플로우를 시작시킨 회사 레코드에 자동으로 연결돼요.
- 이 관계는 CRM에서 해당 회사의 **Associated Contacts**(연결된 연락처) 섹션에 표시돼요.

### 5. 필드 추가

1. **+ Add Field**(필드 추가)를 클릭해 매핑할 필드를 더해요.
2. 각 행은 필드 하나와 값 하나를 연결해요.

### 6. 액션 저장

1. 매핑을 모두 설정한 뒤 **Save Action**(액션 저장)을 클릭해요.
2. 워크플로우가 실행되면 선택한 유형(**Company** 또는 **Associated Contact**)의 레코드가 자동으로 만들어지고, 매핑한 필드가 모두 채워져요.

## 예시

### 예시 1: 웹훅으로 새 회사 만들기

목표: 새 비즈니스 리드가 들어오면 회사 레코드를 자동으로 만들어요.

구성

- 워크플로우 유형: **Company-based**(회사 기반)
- 트리거: **Inbound Webhook**(인바운드 웹훅)
- **Object Record to Create**: **Company**
- 필드 매핑:
  - **Company Name** → `{{inboundWebhookRequest.body.companyName}}`
  - **Domain**(도메인) → `{{inboundWebhookRequest.body.domain}}`
  - **Industry**(업종) → `{{inboundWebhookRequest.body.industry}}`

진행 순서

1. 웹훅으로 새 회사 리드가 들어와요.
2. 워크플로우가 시작되어 이 액션이 실행돼요.
3. 매핑한 정보가 모두 담긴 새 회사 레코드가 CRM에 만들어져요.

---

### 예시 2: 기존 회사에 연결된 연락처 만들기

목표: 기존 회사 레코드 아래에 새 직원 연락처를 자동으로 추가해요.

구성

- 워크플로우 유형: **Company-based**(회사 기반)
- 트리거: **Company Updated**(회사 업데이트됨) 또는 웹훅의 직원 추가 이벤트
- **Object Record to Create**: **Associated Contact**
- 필드 매핑:
  - **First Name**(이름) → `{{inboundWebhookRequest.body.firstName}}`
  - **Last Name**(성) → `{{inboundWebhookRequest.body.lastName}}`
  - **Email**(이메일) → `{{inboundWebhookRequest.body.email}}`

진행 순서

1. 웹훅이나 연동으로 직원 데이터가 들어와요.
2. 해당 회사를 기준으로 워크플로우가 시작돼요.
3. 새 연락처가 만들어지고, 그 회사에 자동으로 연결돼요.

---

### 예시 3: 회사 정보를 채우고 연락처도 함께 추가하기

목표: 새 회사가 만들어질 때마다 연락처를 자동으로 추가해요.

구성

1. 1단계: 이 액션을 사용하고 **Object Record to Create**를 **Company**로 선택해요.
   - **Company Name** → `{{inboundWebhookRequest.body.company}}`
   - **Domain** → `{{inboundWebhookRequest.body.domain}}`
2. 2단계: 이 액션을 하나 더 추가하고 **Object Record to Create**를 **Associated Contact**로 선택해요.
   - **Contact Name**(연락처 이름) → `{{inboundWebhookRequest.body.contactName}}`
   - **Email** → `{{inboundWebhookRequest.body.email}}`

진행 순서

1. 새 회사 레코드가 먼저 만들어져요.
2. 바로 이어서 두 번째 액션이 실행되어 연결된 연락처를 추가해요.
3. 연락처가 새 회사의 연결된 연락처 목록에 자동으로 나타나요.
