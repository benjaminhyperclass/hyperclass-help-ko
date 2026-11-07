---
원문: /support/solutions/articles/155000004757-workflow-action-remove-followers-from-opportunity
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Remove Follower(s) From Opportunity(기회에서 팔로워 제거)

**Remove Follower(s) From Opportunity**(기회에서 팔로워 제거) 액션은 기회의 팔로워 목록에서 지정한 사용자를 빼거나, 모든 팔로워를 한 번에 제거해요. 기회의 팔로워 목록을 정리하고 싶을 때 쓰세요.

## 개요

이 액션은 보통 **Find Opportunity**(기회 찾기) 단계 뒤에 두어요. 기회에서 시작하는 워크플로우에서도 쓸 수 있어요. 어느 기회를 대상으로 할지 정해져 있어야 하기 때문이에요. 대상 기회가 없으면 이 액션은 건너뛰어요.

## 액션 이름

**Remove Follower(s) From Opportunity**(기회에서 팔로워 제거)

## 액션 설명

이 액션이 실행되면 지정한 사용자를 기회의 팔로워 목록에서 제거해요. **Remove All Followers**(모든 팔로워 제거)를 켜면 사용자 목록과 상관없이 기회의 팔로워가 모두 제거돼요.

팔로워 목록을 깔끔하게 정리하거나, 관련 있는 팀원만 기회에 남기고 싶을 때 유용해요.

## 액션 상세 정보

![액션 상세 정보 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043056240/original/tsf8_kOR2lhxJQfLXWtjXf7695S2uBoNkg.png?1741702837)

| 항목 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Action Name**(액션 이름) | 워크플로우에서 이 단계를 구분할 수 있는 고유한 이름이에요. | 예 |
| **Users**(사용자) | 기회의 팔로워 목록에서 제거할 사용자예요. 한 명 이상 선택할 수 있어요(예: **Account User**(계정 사용자)). 선택한 사용자가 현재 팔로워가 아니면 그 사용자에게는 아무 변화가 없어요. | 아니요(**Remove All Followers**를 비활성화한 경우는 제외) |
| **Remove All Followers**(모든 팔로워 제거) | 켜면 **Users**에서 누구를 선택했는지와 상관없이 기회의 팔로워를 모두 제거해요. | 아니요 |

### 예외 상황

- 대상 기회가 없을 때: 워크플로우에 기회가 없으면(기회에서 시작하지도 않았고 **Find Opportunity**로 찾은 기회도 없으면) 이 액션은 건너뛰어요.
- 기회가 여러 개일 때: **Find Opportunity** 단계에서 조건에 맞는 기록이 여러 개여도 가장 먼저 만들어진 기회 또는 가장 최근 기회, 둘 중 하나만 적용돼요.
- 팔로워가 아닌 사용자: 지정한 사용자가 지금 그 기회를 팔로우하고 있지 않으면 그 사용자에게는 아무 변화가 없어요.
- 모두 제거할 때와 특정 사용자만 제거할 때: **Remove All Followers**를 켜면 지정한 사용자 목록은 무시하고 모든 팔로워를 제거해요.

## 예시

시나리오: 종료된 기회에서 여러 사용자를 팔로워에서 빼고, 기록 소유자만 팔로워로 남기는 워크플로우예요.

1. **Trigger**(트리거): 기회가 "종료됨" 단계로 이동해요.
2. **Action**(액션): **Find Opportunity**(기회 찾기)
   - **Filters**(필터):
     - **Status**(상태)가 "Closed"(종료됨)예요.
3. **Action**(액션): **Remove Follower(s) From Opportunity**(기회에서 팔로워 제거)
   - **Action Name**(액션 이름): "종료된 딜의 팔로워 정리"
   - **Users**(사용자): "영업팀 A", "영업팀 B"
   - **Remove All Followers**(모든 팔로워 제거): 꺼짐(지정한 사용자만 제거해요)

이 예시에서는 **Find Opportunity** 단계가 종료된 기회를 찾으면, **Remove Follower(s) From Opportunity** 액션이 지정한 사용자를 팔로워 목록에서 제거해요. 모든 팔로워를 제거해야 한다면 **Remove All Followers**를 켜세요.
