---
원문: /support/solutions/articles/155000001166-workflow-trigger-task-completed
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Task Completed(작업 완료)

**Task Completed**(작업 완료) 트리거는 CRM에서 작업을 완료 처리하는 순간 워크플로우를 자동으로 시작해요. 이 문서에서는 트리거가 하는 일과 장점, 설정 방법을 안내해요.

## Task Completed 트리거란?

CRM에서 작업을 완료 처리하면 워크플로우의 액션이 자동으로 실행돼요. 후속 조치, 알림, 다음 단계 진행을 손으로 처리하지 않아도 되니 팀 업무 시간이 줄어요.

## Task Completed 트리거의 장점

- 작업 후속 조치 자동화: 작업이 끝나면 다음 단계가 자동으로 이어져요.
- 팀 협업 강화: 완료된 작업을 담당 팀원이나 관련자에게 알려 줘요.
- 업무 효율: 사람이 직접 개입하지 않아도 워크플로우가 다음 단계로 넘어가요.
- 사용자별 자동화: **Assigned User**(할당된 사용자) 필터로 특정 사용자 기준의 워크플로우를 만들 수 있어요.
- 정확한 작업 기록: 완료된 작업이 CRM 데이터에 최신 상태로 반영돼요.

## Task Completed 트리거 설정하기

### 워크플로우 빌더 열기

1. 하이퍼클래스 왼쪽 메뉴에서 **자동화**로 이동해요.
2. 새 워크플로우를 만들려면 **+ Create Workflow**(워크플로우 만들기)를 누르고 **처음부터 시작**을 선택해요.
3. 이미 있는 워크플로우에 트리거를 추가하려면 해당 워크플로우를 열어요.

![자동화 메뉴에서 워크플로우를 만드는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042034342/original/g5qw4injNkpmSYRFxrfnNtwlm9iHugRvMg.png?1740148687)

### Task Completed 트리거 추가하기

1. **+ Add New Trigger**(새 트리거 추가)를 눌러요.
2. 트리거 목록에서 **Task Completed**를 검색해요.
3. **Task Completed**를 선택해요. 이제 작업이 완료 처리될 때마다 워크플로우가 자동으로 시작돼요.

![트리거 목록에서 Task Completed를 검색하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042034384/original/2vOEXiiM3_red78xpkaDpM34_hOSqB1HYA.png?1740148710)

### Assigned User 필터 적용하기

**Assigned User** 필터를 쓰면 특정 팀원이 관련된 작업에서만 워크플로우가 시작되도록 정할 수 있어요.
1. **Task Completed** 트리거를 선택한 뒤 **Assigned User** 필터를 선택해요.
2. 조건에 맞는 연산자를 골라요.
   - **Is**(다음과 같음): 선택한 사용자가 작업을 완료할 때만 워크플로우가 시작돼요.
   - **Is Empty**(비어 있음): 작업에 할당된 사용자가 없을 때 워크플로우가 시작돼요.
   - **Is Not**(다음과 같지 않음): 선택한 사용자를 제외한 모든 사용자에게 워크플로우가 시작돼요.
   - **Is Not Empty**(비어 있지 않음): 작업에 할당된 사용자가 있을 때 워크플로우가 시작돼요.
3. 연산자를 고르면 다음 드롭다운에 CRM 사용자가 모두 표시돼요. 여기서 원하는 팀원을 선택해요.

필터를 적용하지 않으면 어떤 사용자가 작업을 완료해도 워크플로우가 시작돼요.

![Assigned User 필터와 연산자를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042034421/original/RgmJIhW_ih4ZdJ9coSzQA4KPjKhiTu2o3Q.png?1740148745)

### 워크플로우 액션 추가하기

트리거를 설정한 뒤에는 다음 단계를 자동으로 처리할 액션을 추가해요. 예를 들면 이런 액션이 있어요.

- **Send Notification**(알림 보내기): 작업이 완료되면 팀원에게 알려요.
- **Update CRM Record**(CRM 레코드 업데이트): 작업이 끝난 뒤 연락처나 기회 정보를 수정해요.
- **Move Opportunity to the Next Stage**(기회를 다음 단계로 이동): 작업이 영업 기회와 연결되어 있으면 해당 기회를 다음 단계로 옮겨요.
- **Trigger Another Workflow**(다른 워크플로우 실행): 작업 완료를 기준으로 다른 워크플로우를 실행해요.

특정 액션의 자세한 사용법이 궁금하면 **지식 베이스**에서 해당 액션 문서를 찾아보세요.

## 자주 묻는 질문

### 특정 사용자가 완료한 작업에만 워크플로우를 실행할 수 있나요?
네, **Assigned User** 필터에서 **Is** 연산자를 고른 뒤 팀원을 선택하세요.

### 작업에 할당된 사용자가 없으면 어떻게 되나요?
**Is Empty** 연산자를 쓰면 할당된 사용자가 없는 작업에만 워크플로우를 실행할 수 있어요.

### 이 트리거로 자동 알림을 보낼 수 있나요?
트리거 자체는 알림을 보내지 않아요. 팀원에게 알리려면 **Send Notification** 액션을 추가하세요.

### 작업이 완료된 뒤 기회를 업데이트할 수 있나요?
네, 작업이 완료 처리되면 기회의 파이프라인이나 상태를 업데이트하는 액션을 설정할 수 있어요.

### 워크플로우가 제대로 작동하는지 어떻게 확인하나요?
**Workflow Execution Log**(워크플로우 실행 로그)에서 작업 완료 시 트리거가 제대로 실행됐는지 확인할 수 있어요.
