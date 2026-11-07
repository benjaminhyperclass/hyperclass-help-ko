---
원문: /support/solutions/articles/155000004751-workflow-action-find-opportunity
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Find Opportunity(기회 찾기)

**Find Opportunity**(기회 찾기) 액션은 워크플로우를 시작시킨 연락처에 연결된 기존 기회를 조건에 맞게 찾아 줘요. 조건에 맞는 기회가 없을 때 다른 경로로 처리하고 싶다면(예: 새 기회 만들기) 이 액션을 쓰세요.

## 개요

**Find Opportunity** 액션은 워크플로우를 시작시킨 연락처에 연결된 기회 중에서 지정한 조건에 맞는 기회를 찾아요. 조건에 맞는 기회가 여러 개면 **Earliest**(가장 먼저 만든 기회)나 **Latest**(가장 최근에 만든 기회) 중 선택한 쪽 하나만 가져와요.

찾은 기회는 이후 워크플로우에서 기회를 다루는 모든 액션의 기준이 돼요. 조건에 맞는 기회가 없으면 워크플로우가 다른 경로로 나뉘어요. 이 경로에서 새 기회를 만드는 등 다르게 처리할 수 있어요.

{% hint style="warning" %}
워크플로우에 연락처가 없다면(예: 연락처 정보가 없는 인바운드 웹훅) **Find Opportunity** 필터에서 특정 필드를 웹훅 파라미터에 매핑해야 해요. 매핑하지 않으면 기회를 찾을 수 없어요.
{% endhint %}

## 액션 이름

Find Opportunity

## 액션 설명

**Find Opportunity** 액션은 워크플로우에 들어온 연락처에 연결된 기존 기회를, 지정한 필터에 맞게 검색해요. 모든 필터는 **AND**(그리고) 조건으로 묶여요. 지정한 조건을 모두 만족해야 일치하는 기회로 인정된다는 뜻이에요.

조건을 만족하는 기회가 여러 개여도 하나만 반환해요. 설정에 따라 가장 먼저 만든 기회이거나 가장 최근에 만든 기회예요. 일치하는 기회가 없으면 워크플로우는 별도의 **Opportunity Not Found**(기회를 찾지 못함) 경로로 이어져요.

## 액션 설정 항목

![Find Opportunity 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043046868/original/FxNS2rZa7iap2gXiQGTppOlMqFAt7cIDvw.png?1741697609)

| **항목 이름** | **설명** | **필수 여부** |
| --- | --- | --- |
| **Action Name**(액션 이름) | 워크플로우 안에서 이 단계를 알아보기 쉽게 붙이는 이름이에요. | 예 |
| **Opportunity to be Found**(찾을 기회) | 워크플로우에 들어온 연락처의 기회 중 필터 조건에 맞는 기회를 **Earliest**(가장 먼저 만든 기회)로 가져올지 **Latest**(가장 최근에 만든 기회)로 가져올지 정해요. | 예 |
| **Filters**(필터) | 검색 범위를 좁히는 조건이에요. <ul><li>모든 필터는 **AND** 조건으로 적용돼요.</li><li>필터 개수에 제한이 없어요.</li><li>표준 기회 필드와 커스텀 기회 필드를 모두 쓸 수 있어요(예: **Opportunity Name**(기회 이름), **Followers**(팔로워), **Status**(상태)).</li><li>연락처가 없으면(예: 인바운드 웹훅) 특정 필드를 웹훅 파라미터에 매핑해야 해요.</li></ul> | 예 |
| **Multiple Matches**(여러 개 일치) | 일치하는 기록이 여러 개여도 기회는 **하나만** 반환해요. 선택에 따라 가장 먼저 만든 기회이거나 가장 최근에 만든 기회예요. | — |
| **Branching Behavior**(분기 동작) | 기회를 찾으면 **Opportunity Found**(기회를 찾음) 경로로, 찾지 못하면 **Opportunity Not Found** 경로로 이어져요. | — |

## 예시

시나리오: 새 리드가 폼을 제출했어요. 이 리드에게 이미 만들어 둔 기회가 있는지 확인하고 싶어요. 있으면 그 기회를 업데이트하고, 없으면 새로 만들려고 해요.

1. **Trigger**(트리거): 연락처가 웹사이트에서 폼을 제출해요.
2. **Action**(액션): *Find Opportunity*
   - **Action Name**: "Locate Existing Opportunity"
   - **Opportunity to be Found**: **Latest Opportunity**
   - **Filters**(모든 조건을 만족해야 해요):
     - **Opportunity Name** → **Contains** → "Contact\_Email\_Address"
     - **Status** → **Is** → "Open"
3. **Branching**(분기):
   - **Opportunity Found**: *Update Opportunity* 액션으로 이어가서 **Status** 같은 필드를 수정하거나 메모를 추가해요.
   - **Opportunity Not Found**: *Create Opportunity* 액션으로 이어가서 파이프라인에 새 기록을 추가해요.

이렇게 설정하면 기존 기회가 있을 때는 항상 그 기회를 기준으로 작업하고, 꼭 필요할 때만 새 기회를 만들 수 있어요.

연락처가 없는 경우(예: 연락처 정보가 없는 인바운드 웹훅)에는 필터에서 관련 필드를 웹훅 데이터에 매핑하세요.
