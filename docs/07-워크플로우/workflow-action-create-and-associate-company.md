---
원문: /support/solutions/articles/155000006580-workflow-action-create-and-associate-company
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Create and Associate Company(회사 생성 및 연결)

**Create and Associate Company**(회사 생성 및 연결) 액션은 새 회사 레코드를 자동으로 만들고, 워크플로우를 시작시킨 연락처와 연결해 줘요. 연락처와 회사를 손으로 입력해 연결하지 않아도 돼요.

## 개요

이 액션을 쓰면 워크플로우 안에서 새 회사 레코드를 만들고, 트리거가 된 연락처와 자동으로 연결할 수 있어요. 연락처와 회사가 자동으로 이어지므로 CRM 정보를 체계적이고 최신 상태로 유지하기 좋아요.

## 액션 이름

Create and Associate Company

## 액션 설명

이 액션은 다음과 같은 경우에 써요.

- 연락처 기반 워크플로우에서 새 회사 레코드를 자동으로 만들어요.
- 새로 만든 회사를 트리거가 된 연락처와 연결해요.
- 연락처 레코드, 워크플로우 변수, 인바운드 웹훅의 데이터를 가져와 필드 값으로 넣어요.
- 회사와 연락처의 관계를 직접 만들지 않아도 정리된 상태로 유지해요.

연락처마다 관련 회사가 연결되므로 B2B 온보딩, 폼 제출, 정보 보강 워크플로우에 특히 유용해요.

## 액션 상세 정보

![Create and Associate Company 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055523318/original/AqE8q-f_AeqTkh_iP73zxthxtgiktxGC5w.png?1759928801)

### 1. 필드 매핑

워크플로우 변수나 고정 값을 새 회사의 필드에 매핑해서 값을 채워요. 매핑 예시는 다음과 같아요.

- **Company Name**(회사명) → `{{contact.company_name}}`
- **Domain**(도메인) → `{{inboundWebhookRequest.body.domain}}`
- **Industry**(업종) → `{{contact.industry}}`

### 2. 동적 값 소스

다음 값을 가져와 매핑할 수 있어요.

- 연락처 필드: **First Name**(이름), **Company Name**(회사명), **Email**(이메일) 등
- 인바운드 웹훅 페이로드: `{{inboundWebhookRequest.body.company}}` 등
- 고정 텍스트 값: "New Lead Company" 등

### 3. 연결 동작

- 이 액션으로 만든 새 회사 레코드는 워크플로우를 시작시킨 연락처와 자동으로 연결돼요.
- 연결 관계는 CRM에서 연락처의 **Associated Companies**(연결된 회사) 섹션과 회사의 **Associated Contacts**(연결된 연락처) 섹션에 모두 표시돼요.

### 4. 필드 추가

- **+ Add Field**(필드 추가)를 누르면 회사 필드를 더 매핑할 수 있어요.
- 각 행은 필드와 값의 쌍이에요. 이 쌍들이 회사 레코드를 어떻게 만들지 정해요.

### 5. 액션 저장

1. 필요한 매핑을 모두 설정해요.
2. **Save Action**(액션 저장)을 눌러요.

워크플로우가 실행되면 새 회사 레코드가 만들어지고, 연락처와 자동으로 연결돼요.

### 6. 참고할 점

- 이 액션은 연락처 기반 워크플로우에서만 쓸 수 있어요.
- 연락처에 이미 연결된 회사가 있으면 회사가 하나 더 만들어져요. 이때 새로 만든 회사는 연락처와 연결되지 않아요.

## 예시

**목표:** 새 연락처가 CRM에 추가되면 새 회사 레코드를 자동으로 만들어요.

**구성**

- 워크플로우 유형: 연락처 기반
- 트리거: **Contact Created**(연락처 생성)
- 액션: **Create Associated Company**- 필드 매핑:
  - **Company Name** → `{{contact.company_name}}`
  - **Domain** → `{{contact.email}}` (해당하는 경우 이메일에서 추출한 도메인)
  - **Industry** → "Lead Company"

**흐름**

1. CRM에서 새 연락처가 만들어져요.
2. 워크플로우가 액션을 실행해요.
3. 매핑한 필드로 회사 레코드가 만들어져요.
4. 새 회사가 해당 연락처와 자동으로 연결돼요.
