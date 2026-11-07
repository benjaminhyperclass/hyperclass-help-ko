---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006617-workflow-action-clear-fields-of-company-or-associated-contact
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Clear Fields of Company or Associated Contact(회사 또는 연결된 연락처 필드 지우기)

회사 기반 워크플로우에서 회사 레코드나 그 회사에 연결된 연락처의 필드 값을 비우는 액션이에요. 오래된 데이터를 정리하거나, 회사와의 관계가 바뀔 때 값을 초기화하고 싶을 때 써요.

## 개요

**Clear Fields of Company or Associated Contact**(회사 또는 연결된 연락처 필드 지우기) 액션은 회사 기반 워크플로우 안에서 다음 중 한 곳의 필드 값을 초기화하거나 지워요.

- 회사 레코드
- 그 회사에 연결된 연락처

예를 들어 오래된 전화번호를 지우거나, 이전 태그를 정리하거나, 회사와의 관계가 바뀌었을 때 연락처 상태를 초기화할 수 있어요. CRM 데이터를 깔끔하고 정확하게 유지하는 데 도움이 돼요.

## 액션 이름

Clear Fields of Company or Associated Contact

## 액션 설명

이 액션은 이런 때 사용해요.

- 회사 기반 워크플로우에서 회사 레코드 또는 연결된 연락처의 선택한 필드를 자동으로 지울 때
- 오래되었거나 잘못된 값, 더 이상 쓰지 않는 값을 없애 데이터를 최신 상태로 유지할 때
- 담당자가 바뀌거나 고객 단계가 달라질 때 데이터 초기화를 자동화해 정리 작업을 줄일 때

## 액션 상세 정보

![Clear Fields of Company or Associated Contact 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055667745/original/PMxUtpQERhLTeO9uTcmDNhcnV_a8rD8Mrw.png?1760074320)

### 1. 오브젝트 레코드에서 지울 대상 선택

**Clear a Field From the Object Record**(오브젝트 레코드에서 필드 지우기)에서 필드를 지울 대상을 골라요.

- **Company**(회사): 현재 회사 레코드의 필드를 지워요.
- **Associated Contact**(연결된 연락처): 그 회사에 연결된 연락처의 필드를 지워요.

### 2. 필드 추가

**Add Fields**(필드 추가)에서 지울 필드를 선택해요.

- 드롭다운에서 지울 필드를 하나 이상 선택하세요.
- 선택한 대상에서 편집할 수 있는 표준 필드와 커스텀 필드를 모두 고를 수 있어요.
- **+ Add Field**(필드 추가)를 누르면 여러 필드를 한 번에 지울 수 있어요.

### 3. 지우기 동작

- 액션이 실행되면 선택한 대상(회사 또는 연락처)의 필드가 초기화되어 빈 값이 돼요.
- 연결된 연락처가 없으면 액션은 자동으로 건너뛰어요.
- 연결 관계나 관련 데이터는 삭제되지 않아요. 선택한 필드 값만 초기화돼요.

### 4. 액션 저장

1. 지울 필드를 모두 선택해요.
2. **Save Action**(액션 저장)을 클릭해요.

워크플로우가 실행되면 회사 또는 연결된 연락처에서 선택한 필드가 자동으로 지워져요.

### 5. 알아 둘 점

- 회사 기반 워크플로우에서만 쓸 수 있어요.
- 연락처 기반 워크플로우에서 필드를 지우려면 **Clear Associated Company Fields**(연결된 회사 필드 지우기) 액션을 사용하세요.
- 연결된 연락처가 여러 명이면, 선택한 필드가 각 연락처마다 모두 지워져요.

## 예시

### 예시 1: 회사가 비활성이 되면 연락처 상태 초기화

**목표:** 회사가 비활성이 되면, 그 회사에 연결된 모든 연락처의 상태를 자동으로 초기화해요.

**설정**

- 워크플로우 유형: 회사 기반
- **Trigger**(트리거): **Company Changed**(회사 변경됨) → **Status**(상태) = **Inactive**(비활성)
- **Action**(액션): **Clear Fields of Company or Associated Contact**
- **Clear a Field From**(필드를 지울 대상): **Associated Contact**
- **Fields to Clear**(지울 필드): **Contact Status**(연락처 상태)

**진행 순서**

1. 회사의 상태가 '비활성'으로 바뀌어요.
2. 워크플로우가 지우기 액션을 실행해요.
3. 연결된 모든 연락처의 상태가 지워져요.

---

### 예시 2: 계약이 만료되면 회사 커스텀 필드 지우기

**목표:** 회사의 계약이 만료되면 갱신일, 계약 금액 같은 주요 커스텀 필드를 초기화해요.

**설정**

- 워크플로우 유형: 회사 기반
- **Trigger**(트리거): **Company Changed**(회사 변경됨) → 계약 만료일 도달
- **Action**(액션): **Clear Fields of Company or Associated Contact**
- **Clear a Field From**(필드를 지울 대상): **Company**
- **Fields to Clear**(지울 필드): 갱신일, 계약 금액, 등급

**진행 순서**

1. 회사의 계약 만료일이 지나요.
2. 워크플로우가 액션을 실행해요.
3. 선택한 필드가 회사 레코드에서 자동으로 지워져요.
