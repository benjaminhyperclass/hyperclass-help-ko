---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006483-workflow-action-find-object-record-find-company
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Find Object Record / Find Company(오브젝트 레코드 찾기 / 회사 찾기)

이 액션은 인바운드 웹훅으로 들어온 값을 이용해 CRM에서 커스텀 오브젝트 레코드나 회사 레코드를 찾아요. 웹훅으로 받은 데이터를 바탕으로 기존 레코드를 조회한 뒤, 찾았는지 여부에 따라 워크플로우를 나누고 싶을 때 사용하세요.

## 개요

**Find Object Record**(오브젝트 레코드 찾기) 액션은 **Inbound Webhook**(인바운드 웹훅) 트리거로 받은 값을 사용해 CRM에서 특정 커스텀 오브젝트 레코드를 검색해요. 웹훅 페이로드의 필드를 오브젝트의 필드에 연결해서 조건을 만들어요. 워크플로우가 이미 같은 오브젝트를 트리거로 시작했다면 이 단계는 건너뛰어요.

회사 기반 워크플로우에서는 이 액션을 **Find Company**(회사 찾기)라는 이름으로 쓸 수 있어요. `companyName`, `domain` 같은 웹훅 값으로 회사 레코드를 찾아요.

## 액션 이름

- **Find Object Record**: 커스텀 오브젝트 워크플로우에서 쓰는 이름이에요.
- **Find Company**: 회사 기반 워크플로우에서 쓰는 이름이에요.

## 액션 설명

이 액션으로 할 수 있는 일이에요.

- **Filters**(필터)에서 **웹훅 파라미터를 오브젝트 또는 회사 필드에 연결**해 레코드(커스텀 오브젝트 또는 회사)를 조회해요.
- 일치하는 레코드가 여러 개일 때는 **Earliest Created**(가장 먼저 만든 레코드) 또는 **Latest Created**(가장 최근에 만든 레코드) 기준으로 하나를 골라요.
- **Record Found**(레코드 찾음)와 **Record Not Found**(레코드 못 찾음)로 흐름을 나눠, 결과가 명확한 워크플로우를 만들어요.

{% hint style="warning" %}
**사전 조건:** 워크플로우에 **Inbound Webhook** 트리거가 있어야 해요. 이 액션은 해당 트리거 페이로드(body, headers)의 값을 읽어요.
{% endhint %}

## Action Details(액션 상세 정보)

**1. Inbound Webhook 필요**

- 워크플로우에 **Inbound Webhook** 트리거가 있을 때만 이 액션을 사용할 수 있어요.
- 값은 그 트리거의 페이로드에서 가져와요. 예: `{{inboundWebhookRequest.body.petname}}`, `{{inboundWebhookRequest.body.domain}}`

**2. Filter On(필터 기준, 동점 처리)**

일치하는 레코드가 여러 개일 때 어떤 레코드를 선택할지 정해요.

- **Earliest Created Record**(가장 먼저 만든 레코드)
- **Latest Created Record**(가장 최근에 만든 레코드)

**3. Filters(필터, AND 조건)**

- 행을 하나 이상 추가해요. 모든 필터는 **AND**(그리고) 조건으로 적용돼요.
- **왼쪽:** 일치 여부를 확인할 오브젝트 또는 회사 필드를 골라요. 예: **Record ID**(레코드 ID), **External ID**(외부 ID), **VIN**, **Pet Name**(펫 이름), **Company Name**(회사명), **Domain**(도메인)
- **오른쪽(값):** **Inbound Webhook** 트리거의 필드(Body, Headers)를 고르거나 고정값을 직접 입력해요.

{% hint style="info" %}
- 결과를 정확히 하나로 좁히려면 **Record ID**, **External ID**, **Domain** 같은 고유 식별자를 사용하세요.
- 상태, 위치, 유형 같은 필터를 더 추가하면 여러 레코드가 걸리는 상황을 줄일 수 있어요.
{% endhint %}

**4. Outcomes(결과)**

- **Record Found:** 찾은 오브젝트가 이후 액션(**Update**(업데이트), **Associate**(연결), **Clear**(비우기) 등)에서 **현재 레코드**가 돼요.
- **Record Not Found:** 이 분기에서는 새 레코드를 만들거나, 사용자에게 알림을 보내거나, 워크플로우를 멈출 수 있어요.

**5. 건너뛰기 동작**

- 워크플로우가 같은 오브젝트를 트리거로 시작하면(예: "Car created" 또는 "Company created") 이 단계는 자동으로 건너뛰어요.

**6. 권장 사항**

- 웹훅이 문자열, 숫자, 불리언 같은 형식이 정리된 값을 보내는지 확인하세요.
- 이름으로 일치 여부를 확인한다면, 원본 시스템에서 대소문자와 공백을 통일해 두세요.
- 실제로 운영하기 전에 테스트용 워크플로우에서 샘플 페이로드로 먼저 테스트하세요.

## 예시

#### 예시 1: 이름으로 Pet 찾기(웹훅 → 조회)

**목표:** 웹훅이 `petname = "snowy"`를 보내면, 그 이름의 **Pet** 오브젝트를 찾아요.

**설정**

- **Filter On:** Earliest Created Record
- **Filters:**

  - **Pet Name** = `{{inboundWebhookRequest.body.petname}}`

**흐름**

1. Inbound Webhook이 `{ "petname": "snowy" }`와 함께 트리거돼요.
2. 액션이 **Pet Name**이 *snowy*인 Pet을 찾아요.
3. **Record Found:** Pet 상태를 업데이트하고 보호자에게 알려요.
4. **Record Not Found:** 이름이 "snowy"인 Pet 레코드를 만들고 검토용 태그를 붙여요.

---

#### 예시 2: 외부 참조 값으로 구독 찾기

**목표:** 결제 시스템의 웹훅이 `subscription_ref`를 보내면, 해당하는 **구독** 오브젝트를 찾아요.

**설정**

- **Filter On:** Latest Created Record
- **Filters:**

  - **External Reference**(외부 참조) = `{{inboundWebhookRequest.body.subscription_ref}}`
  - **Status**(상태) = active (선택 사항, 안전장치용 필터)

**흐름**

1. `subscription_ref`가 담긴 웹훅이 들어와요.
2. 액션이 해당 참조 값을 가진 활성 구독 중 가장 최근에 만든 구독을 선택해요.
3. **Record Found:** 요금제 필드를 업데이트하고 갱신 안내 이메일을 대기열에 추가해요.
4. **Record Not Found:** 임시 구독 레코드를 만들고 재무팀에 알려요.

---

#### 예시 3: 도메인으로 회사 찾기

**목표:** 리드 수집 폼에서 보낸 웹훅이 `companyDomain`을 전달하면, 해당 도메인을 가진 **회사** 레코드를 찾아요.

**설정**

- **Filter On:** Latest Created Record
- **Filters:**

  - **Domain** = `{{inboundWebhookRequest.body.companyDomain}}`

**흐름**

1. Inbound Webhook이 `{ "companyDomain": "acme.com" }`와 함께 트리거돼요.
2. 액션이 **Domain**이 *acme.com*인 회사를 찾아요.
3. **Record Found:** 해당 회사를 "온보딩" 워크플로우에 등록해요.
4. **Record Not Found:** 도메인이 *acme.com*인 새 회사 레코드를 만들어요.
