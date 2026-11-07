---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006578-workflow-action-update-company-or-associated-contact
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Update Company or Associated Contact(회사 또는 연결된 연락처 업데이트)

회사 기반 워크플로우에서 회사 레코드나 회사에 연결된 연락처의 정보를 자동으로 업데이트하는 액션이에요. 웹훅 수신, 폼 제출, 레코드 변경 같은 이벤트가 생길 때 CRM 데이터를 최신 상태로 유지할 수 있어요.

## 개요

**Update Company or Associated Contact**(회사 또는 연결된 연락처 업데이트) 액션은 회사 기반 워크플로우 안에서 회사 레코드나 연결된 연락처의 정보를 자동으로 업데이트해요.

웹훅 업데이트, 폼 제출, 레코드 변경처럼 관련 이벤트나 트리거가 발생할 때마다 회사·연락처 정보를 동적으로 바꿔서 CRM 데이터를 정확하게 관리하도록 도와줘요.

## 이 액션으로 할 수 있는 일

- 기존 회사 레코드나 회사에 연결된 연락처를 자동으로 업데이트해요.
- 워크플로우 필드, 웹훅 파라미터, 고정 텍스트 값을 기존 CRM 필드에 매핑해 업데이트해요.
- 들어오는 자동화 트리거에 따라 회사·연락처 데이터를 바로잡거나 보강해요.
- 회사 기반 워크플로우 전반의 데이터 관리를 간편하게 해요.

이 액션은 기존 레코드를 수정하는 액션이에요. 새 레코드는 만들지 않아요.
새 항목을 만들려면 **Create Company or Associated Contact**(회사 또는 연결된 연락처 만들기) 액션을 사용하세요.

## 액션 설정 항목

![액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055521719/original/rq6GvM4emLWOzDVwZ6ENN5cM4OU2mS9QZQ.png?1759928110)

### 1. 업데이트할 대상 선택

**Object Record to Update**(업데이트할 오브젝트 레코드)에서 업데이트할 대상을 고르세요.

- **Company**(회사): 워크플로우에서 현재 다루는 회사 레코드를 수정해요.
- **Associated Contact**(연결된 연락처): 그 회사에 연결된 연락처 한 명 이상의 정보를 업데이트해요.

### 2. 필드 매핑

워크플로우의 데이터를 업데이트할 필드에 연결하세요.

매핑 예시:

- *Company Industry(회사 업종): {{inboundWebhookRequest.body.industry}}*
- *Contact Phone(연락처 전화번호): {{inboundWebhookRequest.body.phone}}*
- *Contact Role(연락처 역할): {{inboundWebhookRequest.body.role}}*

### 3. 사용할 수 있는 동적 값

다음 값을 사용할 수 있어요.

- **Inbound Webhook** 페이로드 (예: `{{inboundWebhookRequest.body.companyName}}`)
- 회사 필드 (워크플로우를 시작시킨 레코드의 필드)
- 고정 텍스트 값 (예: "활성", "워크플로우로 업데이트됨")

### 4. 필드 여러 개 업데이트

**+ Add Field**(필드 추가)를 누르면 여러 필드를 한 번에 업데이트할 수 있어요. 각 행은 업데이트할 필드와 값의 한 쌍이에요.

### 5. 업데이트 동작 방식

- **Associated Contact**를 업데이트할 때는 워크플로우의 회사 레코드에 현재 연결된 연락처만 업데이트해요.
- 일치하는 연결된 연락처가 없으면 액션이 자동으로 건너뛰어요.

### 6. 액션 저장

1. **Save Action**(액션 저장)을 눌러 설정을 확정하세요.
2. 워크플로우가 실행되면, 워크플로우의 최신 값에 따라 선택한 필드가 업데이트돼요.

### 7. 알아 둘 점

- 이 액션은 회사 기반 워크플로우에서만 쓸 수 있어요.
- 새 레코드는 만들 수 없어요. 새로 만들려면 **Create Company or Associated Contact** 액션을 사용하세요.

{% hint style="warning" %}
중요한 정보를 덮어쓰지 않도록 필드 매핑을 정확하게 설정하세요.
{% endhint %}

## 예시

### 예시 1: 웹훅 데이터로 회사 정보 업데이트하기

목표: 외부 연동에서 새 리드 데이터를 받을 때마다 회사 정보를 자동으로 업데이트해요.

설정

- 워크플로우 유형: 회사 기반
- 트리거: **Inbound Webhook**(인바운드 웹훅) — CRM 연동에서 받은 회사 데이터 업데이트
- **Object Record to Update**: **Company**
- 필드 매핑:
  - **Company Name**(회사명) → `{{inboundWebhookRequest.body.company}}`
  - **Industry**(업종) → `{{inboundWebhookRequest.body.industry}}`
  - **Domain**(도메인) → `{{inboundWebhookRequest.body.domain}}`

흐름

1. 업데이트된 회사 데이터가 웹훅으로 전송돼요.
2. 워크플로우가 시작되어 업데이트 액션이 실행돼요.
3. 기존 회사 레코드가 새 값으로 자동 업데이트돼요.

---

### 예시 2: 회사에 연결된 연락처 정보 업데이트하기

목표: 회사 레코드에 연결된 연락처의 직책과 전화번호를 자동으로 업데이트해요.

설정

- 워크플로우 유형: 회사 기반
- 트리거: **Company Updated**(회사 업데이트됨) 또는 **Inbound Webhook** — 직원 데이터 업데이트
- **Object Record to Update**: **Associated Contact**
- 필드 매핑:
  - **Job Title**(직책) → `{{inboundWebhookRequest.body.title}}`
  - **Phone**(전화번호) → `{{inboundWebhookRequest.body.phone}}`

흐름

1. 직원 정보가 외부에서 업데이트돼요.
2. 워크플로우가 회사에 연결된 연락처를 찾아요.
3. 연락처의 직책과 전화번호 필드가 자동으로 업데이트돼요.
