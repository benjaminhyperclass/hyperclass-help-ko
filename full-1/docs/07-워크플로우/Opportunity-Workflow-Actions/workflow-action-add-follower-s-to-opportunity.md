---
원문: https://help.gohighlevel.com/support/solutions/articles/155000004756-workflow-action-add-follower-s-to-opportunity
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Add Follower(s) to Opportunity(기회에 팔로워 추가)

**Add Follower(s) to Opportunity** 액션은 이미 있는 기회에 사용자를 팔로워로 추가해요. 팔로워로 추가된 사용자는 그 기회의 변경 내용과 정보를 확인할 수 있어요.

## 개요

**Add Follower(s) to Opportunity**(기회에 팔로워 추가) 액션을 쓰면 기존 기회에 사용자 한 명 이상을 팔로워로 지정할 수 있어요. 팔로워는 기회의 업데이트와 변경 사항을 볼 수 있어요.

이 액션은 보통 **Find Opportunity**(기회 찾기) 단계 뒤에 넣어요. 기회에서 시작된 워크플로우에서도 쓸 수 있어요. 어느 쪽이든 대상이 되는 기회가 정해져 있어야 해요.

## 액션 이름

**Add Follower(s) to Opportunity**

## 액션 설명

이 액션이 실행되면 선택한 사용자가 각각 해당 기회의 팔로워 목록에 추가돼요. 이미 팔로워인 사용자는 중복해서 추가되지 않아요. 기회를 찾지 못했거나 기회에서 시작된 워크플로우가 아니면 이 액션은 건너뛰어요.

## 액션 상세 정보

![Add Follower(s) to Opportunity 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043055771/original/tySi1AmkMiOH6ceFWWSrymOKQqU2xqYJzw.png?1741702613)

| 항목 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Action Name**(액션 이름) | 워크플로우에서 이 단계를 구분하기 위한 고유한 이름이에요. | 예 |
| **Followers**(팔로워) | 팔로워로 추가할 사용자예요. 보통 사용자 목록에서 한 명 이상 고르는 드롭다운이나 다중 선택 목록으로 보여요(예: “pallavi kothari”, “akshay sarma”). | 예 |

### 예외 상황

- **기회 정보가 없는 경우**: 기회에서 시작된 워크플로우가 아니고 앞에 **Find Opportunity** 단계도 없으면, 이 액션은 아무 작업도 하지 않아요.
- **기회가 여러 개인 경우**: **Find Opportunity** 단계에서 조건에 맞는 기회가 여러 개여도 업데이트되는 기회는 **한 개**뿐이에요. 가장 오래된 기회인지 가장 최근 기회인지는 Find Opportunity 액션에서 정한 기준을 따라요.
- **이미 팔로워인 경우**: 이미 그 기회를 팔로우하고 있거나 담당자로 지정된 사용자는 다시 추가되지 않아요. 그래서 중복 팔로워가 생기지 않아요.

## 예시

시나리오: 금액이 큰 기회가 만들어지거나 업데이트되면, 영업 매니저와 제품 전문가가 바로 그 소식을 받아 보게 하고 싶어요.

1. **Trigger**(트리거): 기회가 만들어지거나 업데이트되고, 정해 둔 조건(예: 금액 10,000 초과)을 충족해요.
2. **Action**(액션): *Find Opportunity*
   - **Filters**(필터):
     - *Opportunity Value*(기회 금액)가 `10000`보다 큼
     - *Status*(상태)가 “Open”(진행 중)
3. **Action**(액션): *Add Follower(s) to Opportunity*
   - **Action Name**(액션 이름): “주요 관계자 알림”
   - **Followers**(팔로워): “영업 매니저”, “제품 전문가”

**Find Opportunity** 단계에서 조건에 맞는 기회를 찾으면 “영업 매니저”와 “제품 전문가”가 그 기회의 팔로워로 추가돼요. 이미 팔로워인 경우에는 추가되지 않아요. 이렇게 하면 두 사람이 기회의 상세 정보와 업데이트를 볼 수 있어요.
