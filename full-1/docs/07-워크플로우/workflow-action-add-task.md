---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003375-workflow-action-add-task
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Add Task(작업 추가)

**Add Task**(작업 추가) 액션은 마감 기한이 있는 새 작업을 만들어 특정 사용자에게 할당해요. 팀원이 꼭 확인해야 할 작업을 놓치지 않게 알릴 때 유용해요.

## 액션 이름

**Add Task**

## 액션 설명

이 액션은 시스템에 작업을 만들고, 사용자에게 할당하고, 작업을 끝내야 하는 마감 기한을 정해요. 작업 제목, 담당자, 설명, 마감 기한을 지정할 수 있어서 작업 관리를 한결 쉽게 정리할 수 있어요.

## Action Details(액션 상세 정보)

![Add Task 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069591400/original/erfOTjEhjTxcDgzif-5UHGSECMDpnxPR5Q.png?1776765989)

### 설정 방법

1. **Action Name**(액션 이름): 액션을 알아보기 쉬운 이름으로 지어 주세요. 예: "Add Task - Follow Up"
2. **Title**(제목): 작업 제목을 입력하세요.
3. **Description**(설명): 작업 내용을 서식이 있는 텍스트로 입력하세요. 작업을 저장하고 표시할 때도 서식이 그대로 유지돼요.
4. **Assign To**(할당 대상): 작업을 받을 사용자를 선택하세요.
5. **Due In**(마감까지 기간): 숫자를 입력하고 시간 단위(일, 주, 월, 년)를 선택하세요.
6. **Due Time**(마감 시간, 선택): 마감 시각을 정하고 싶다면 하루 중 원하는 시간을 선택하세요.
7. **Skip Weekends**(주말 건너뛰기, 선택): 마감 기한을 계산할 때 주말을 건너뛰려면 켜세요. <!-- 검토 필요: 원문 내용이 서로 다름 (단계 설명은 Skip Weekends, 표와 예시는 Exclude Weekends) -->
8. **Due Date Preview**(마감 일시 미리보기): 계산된 마감 날짜와 시간이 맞는지 실시간 미리보기로 확인하세요.

### 필드 안내

| 필드 이름 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Title** | 사용자가 작업을 알아볼 수 있는 작업 제목이에요. | 예 |
| **Description** | 담당자에게 상황과 안내를 전하는 작업의 상세 설명이에요. | 아니요 |
| **Assign To** | 선택할 수 있는 사용자 목록에서 작업을 할당할 사용자를 골라요. | 예 |
| **Due In** | 작업 마감 기한을 정해요. 예: 1일 후, 2일 후, 5일 후, 또는 바로 처리할 작업이면 **Now**(지금) | 예 |
| **Due Time** | 마감일의 시각을 정해요. 선택 사항이에요. | 아니요 |
| **Exclude Weekends** | 마감 기한을 계산할 때 주말을 건너뛰어요. | 아니요 |

## 예시

팀원 John에게 리드 후속 연락 작업을 할당한다고 해 볼게요. 액션은 이렇게 설정하면 돼요.

- **Action Name:** Add Task
- **Title:** 리드 XYZ 후속 연락
- **Description:** 리드 XYZ에게 전화해서 온보딩 진행 상황을 확인하세요.
- **Assign To:** John Doe
- **Due In:** 2주
- **Due Time**(선택): 오전 10:30
- **Exclude Weekends**(선택): 활성화

담당자가 작업을 받으면, 마감 날짜와 시간은 액션 화면의 미리보기와 같게 표시돼요.
