---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006701-custom-object-and-company-based-workflow-actions-triggers
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 사용자 지정 객체·회사 기반 워크플로우 액션과 트리거

연락처, 회사, 사용자 지정 객체를 넘나들며 자동화할 때 쓰는 워크플로우 액션을 소개해요. 연결된 레코드를 다른 워크플로우에 넣거나 빼고, 웹훅 데이터나 필드 필터로 원하는 레코드를 정확히 찾을 수 있어요.

[동영상](https://www.youtube.com/embed/WegLUpjMB5c?&wmode=opaque)

## 사용자 지정 객체·회사 기반 워크플로우 액션과 트리거란?

하이퍼클래스 워크플로우에는 레코드 사이의 관계(연결)를 이해하는 액션이 있어요. 워크플로우를 시작시킨 레코드만 자동화하는 것이 아니라, 그 레코드와 연결된 연락처, 회사, 사용자 지정 객체를 대상으로 삼을 수 있어요. 레코드 ID, 외부 ID, 필드 조건으로 원하는 레코드를 정확히 찾을 수도 있어요. 이렇게 데이터와 관계를 바탕으로 자동화를 만들 수 있어요.

이 문서에서 다루는 액션은 다음 세 가지예요.

- **Add Associated Records to Workflow**(연결된 레코드를 워크플로우에 추가)
- **Remove Associated Records from Workflow**(연결된 레코드를 워크플로우에서 제거)
- **Find Object Record**(객체 레코드 찾기) / **Find Company**(회사 찾기)

## 이런 점이 좋아요

- 더 깊은 자동화: 수동 작업 없이 연락처, 회사, 사용자 지정 객체에 걸쳐 동작하는 흐름을 만들 수 있어요.
- 관계 기반 대상 지정: **Association Label**(연결 레이블)로 필터링해서 원하는 연결 레코드에만 도달할 수 있어요.
- 정확한 레코드 조회: **Find** 액션에서 **Record ID**(레코드 ID), **External ID**(외부 ID), 필드 필터로 레코드를 찾아요. 인바운드 웹훅으로 들어온 동적 값도 쓸 수 있어요.
- 분기 로직: **Record Found**(레코드 찾음)와 **Record Not Found**(레코드 못 찾음)에 따라 흐름을 나눌 수 있어요. 일치하는 레코드가 여러 개면 **Earliest**(가장 오래된 것), **Latest**(가장 최근 것), **All**(전체) 중에서 고를 수 있어요.
- 세밀한 운영 제어: 연결된 레코드를 다른 워크플로우에 넣거나 빼서, 원하는 시점에 커뮤니케이션이나 프로세스를 시작하거나 멈출 수 있어요.

## Add Associated Records to Workflow

현재 레코드를 기준으로, 연결된 연락처·회사·사용자 지정 객체를 **다른** 워크플로우에 등록하고 싶을 때 쓰는 액션이에요. **Association Label**로 필터링하면 대상을 더 정확하게 고를 수 있어요.

이 액션에서 할 수 있는 일은 다음과 같아요.

- 연결된 **Object Type**(객체 유형)을 선택해요. **Contact**, **Company**, **Custom Object** 중에서 고를 수 있어요.
- **Association Label**로 대상을 걸러내요. 예를 들어 Buyer, Account Owner, Assigned Dealer 같은 레이블이 있어요.
- 연결된 레코드를 추가할 대상 워크플로우를 골라요.

예시: 자동차(사용자 지정 객체) 레코드가 판매 준비 완료(Ready for Sale) 상태로 바뀌면, 연결된 딜러를 모두 "딜러 알림 워크플로우"에 자동으로 추가해요.

```
자세한 내용은 Add Associated Records to Workflow 문서를 참고하세요.
```

![Add Associated Records to Workflow 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055982231/original/AX6w1FMXLsFnp6FBnWQPXGfMGuHpHbj_Hw.png?1760455574)

## Remove Associated Records from Workflow

조건이 바뀌었을 때(예: 판매 완료, 종료) 연결된 레코드를 다른 워크플로우에서 자동으로 제외하는 액션이에요. 더 이상 필요 없는 시퀀스에 연락처나 다른 레코드가 남아 있지 않게 해 줘요.

이 액션에서 할 수 있는 일은 다음과 같아요.

- 연결 관계를 통해 연락처, 회사, 사용자 지정 객체를 대상으로 지정해요.
- 특정 **Association Label**로 필터링해서, 원하는 관계의 레코드만 제거해요.
- 제거할 워크플로우를 지정해요.

예시: 부동산(Property) 레코드가 판매 완료(Sold)로 바뀌면, 연결된 구매자(Buyer)를 "활성 매물 워크플로우"에서 제거해서 더 이상 알림이 가지 않게 해요.

```
자세한 내용은 Remove Associated Records from Workflow 문서를 참고하세요.
```

![Remove Associated Records from Workflow 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055982982/original/odUhBST3aSWV803cf8vyIOAIR8N02ITH0A.png?1760455950)

## Find Object Record / Find Company

**Find** 액션은 **Record ID**, **External ID**, 필드 필터 중 하나로 기존 레코드를 찾아요. **Inbound Webhook**(인바운드 웹훅)에서 받은 동적 값도 넘길 수 있어요. 일치하는 레코드가 여러 개일 때의 처리 방식을 고르고, **Record Found**와 **Record Not Found**에 따라 흐름을 나눌 수 있어요.

이 액션에서 할 수 있는 일은 다음과 같아요.

- **Record ID**, **External ID**, **Field-Based Filters**(필드 기반 필터) 중 하나로 레코드를 찾아요.
- 인바운드 웹훅 트리거로 들어온 동적 값을 쓸 수 있어요. 예: `{{inboundWebhookRequest.body.subscription_ref}}`
- 일치하는 레코드가 여러 개일 때 **Earliest**, **Latest**, **All** 중에서 처리 방식을 골라요.
- **Record Found**와 **Record Not Found** 상황에 맞게 흐름이 자동으로 나뉘어요.

예시: 웹훅이 `{ "companyDomain": "acme.com" }` 값을 보내면, 일치하는 회사 레코드를 찾아서 워크플로우에 등록해요.

```
자세한 내용은 Find Object Record / Find Company 문서를 참고하세요.
```

![Find Object Record / Find Company 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055984482/original/cVSxwpd01NoZN1ZrY4zwoUzB5MrAjFo88Q.jpeg?1760456626)

## 자주 묻는 질문

### **Add to Workflow**와 **Add Associated Records to Workflow**는 어떻게 다른가요?

**Add to Workflow**(워크플로우에 추가)는 현재 레코드 유형을 워크플로우에 등록해요. **Add Associated Records to Workflow**는 현재 레코드와 연결된 다른 레코드 중에서, 선택한 레이블에 맞는 레코드를 등록해요.

### 한 번에 **Association Label**을 여러 개 지정할 수 있나요?

액션 하나에는 레이블을 하나만 쓸 수 있어요. 여러 레이블이 필요하면 포함하려는 레이블마다 **Add Associated Records to Workflow** 또는 **Remove Associated Records from Workflow** 액션을 따로 추가하세요.

### **Earliest** / **Latest** / **All**을 고르면 **Find** 결과가 어떻게 달라지나요?

**Earliest**나 **Latest**를 고르면 가장 알맞은 레코드 하나만 골라서 다음 단계로 넘어가요. **All**을 고르면 일치하는 레코드마다 이후 경로가 각각 실행돼요.
