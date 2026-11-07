---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006606-workflow-action-update-associated-company
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Update Associated Company(연결된 회사 업데이트)

**Update Associated Company**(연결된 회사 업데이트) 액션은 연락처 기반 워크플로우에서 연락처에 연결된 회사의 정보를 자동으로 업데이트해요. 연락처 정보가 바뀌거나 웹훅·폼으로 새 데이터가 들어올 때 회사 정보를 맞춰 두고 싶을 때 쓰세요.

## 개요

이 액션은 **연락처 기반 워크플로우에서만** 쓸 수 있어요. 연락처에 연결된 회사가 없으면 이 액션은 자동으로 건너뛰어요.

## 액션 이름

Update Associated Company

## 액션 설명

이 액션으로 할 수 있는 일은 다음과 같아요.

- 워크플로우를 실행시킨 연락처에 연결된 회사의 필드를 자동으로 업데이트해요.
- 워크플로우 변수, 연락처 필드, 웹훅 데이터를 회사 필드(예: **Company Name**(회사명), **Domain**(도메인), **Industry**(업종))에 연결해요.
- 직접 수정하지 않아도 연락처 정보와 회사 정보를 모두 최신 상태로 유지해요.

이 액션은 이미 있는 회사 정보를 업데이트해요. **새 회사를 만들지는 않아요.**
연결된 회사를 새로 만들려면 **Create Associated Company**(연결된 회사 생성) 액션을 사용하세요.

## 액션 상세 정보

### 1. 필드 매핑

- 워크플로우 데이터나 고정 값을 사용해 업데이트할 회사 필드를 연결해요.
- 매핑 예시는 다음과 같아요.
  - **Company Name** → `{{contact.company_name}}`
  - **Industry** → `{{inboundWebhookRequest.body.industry}}`
  - **Domain** → `{{contact.email}}` (이메일에서 도메인을 자동으로 추출해요)

### 2. 값으로 쓸 수 있는 데이터

다음 값을 사용할 수 있어요.

- 연락처 필드(예: company_name, email, city)
- Inbound Webhook 페이로드(예: `{{inboundWebhookRequest.body.domain}}`)
- 고정 텍스트 값(예: "Active Client")

### 3. Add Field

- **+ Add Field**(필드 추가)를 누르면 여러 회사 속성을 한 번에 업데이트할 수 있어요.
- 필드와 값의 쌍 하나가 업데이트 한 건이에요.

### 4. 업데이트 동작

- 이 액션은 연락처에 연결된 대표 회사를 업데이트해요.
- 연락처가 어떤 회사에도 연결되어 있지 않으면 액션을 자동으로 건너뛰어요.

### 5. 액션 저장

1. 필드 매핑을 마친 뒤 **Save Action**(액션 저장)을 클릭하세요.
2. 워크플로우가 실행되면 설정한 값으로 연결된 회사 정보가 업데이트돼요.

### 6. 참고할 점

- 연락처 기반 워크플로우에서만 쓸 수 있어요.
- 이 액션으로는 새 회사를 만들 수 없어요. 새로 만들려면 **Create Associated Company**를 사용하세요.
- 연락처에 연결된 회사가 없으면 워크플로우가 이 액션의 실행을 건너뛰어요.

## 예시

#### 연락처가 이사하면 회사 주소 업데이트하기

**목표:** 주소 변경을 회사 정보에도 자동으로 반영해요.

**구성**

- **Trigger**(트리거): **Contact Changed**(연락처 변경) → Address 필드 업데이트
- **Action**(액션): **Update Associated Company**
- **필드 매핑:**
  - **Address** → `{{contact.address}}`
  - **City** → `{{contact.city}}`
  - **State** → `{{contact.state}}`

**진행 순서**

1. 연락처가 자기 주소를 업데이트해요.
2. 워크플로우가 실행되어 업데이트 액션이 시작돼요.
3. 연결된 회사의 주소 필드가 자동으로 업데이트돼요.
