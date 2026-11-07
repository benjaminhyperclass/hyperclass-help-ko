---
원문: /support/solutions/articles/155000003261-workflow-trigger-task-reminder
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Task Reminder(작업 알림)

**Task Reminder**(작업 알림) 트리거를 쓰면 작업 마감일 전후의 알림 시점에 맞춰 워크플로우를 자동으로 실행할 수 있어요. 마감 알림을 직접 챙기지 않아도 되고, 마감을 놓치는 일도 줄일 수 있어요.

## Task Reminder 트리거란?

**Task Reminder** 트리거는 작업 마감일을 기준으로 정해 둔 알림 시점이 되면 워크플로우를 실행해요. 마감일 전이나 후에 자동화를 실행할 수 있어서, 담당자에게 알리거나 중요한 마감을 상위 담당자에게 전달하거나 작업 상태를 자동으로 바꾸는 데 쓸 수 있어요.

이 트리거를 쓰려면 마감일이 있는 작업이 필요해요. 작업이 완료됐더라도 트리거 조건에 맞으면 워크플로우가 실행돼요. 알림 시점 전에 작업을 삭제하면 트리거는 실행되지 않아요. 작업의 마감일을 바꾸면 알림 시점도 새 마감일에 맞춰 달라져요.

## Task Reminder 트리거의 장점

- 자동 알림: 작업 마감일 전이나 후에 워크플로우가 실행되므로 직접 챙기는 후속 조치가 줄어요.
- 마감 관리: 다가오는 작업이나 기한이 지난 중요한 작업을 담당자에게 알려 줄 수 있어요.
- 유연한 시점: 마감일 전에 실행할지, 후에 실행할지 고를 수 있어요.
- 내부 소통 개선: 워크플로우 액션으로 팀원에게 알리거나 작업 기록을 자동으로 업데이트할 수 있어요.
- 마감 누락 방지: 마감이 가까워지거나 기한이 지난 작업을 놓치지 않게 도와줘요.

## Task Reminder 트리거 필터

**Filters**(필터)로 작업 마감일을 기준으로 워크플로우를 언제 실행할지 정해요. 팀의 업무 방식에 맞게 알림 시점을 설정해 보세요.

### 사용할 수 있는 필터

**After no. of days**(일 수 이후)

- 작업 마감일에서 정해 둔 일수가 지난 뒤에 워크플로우를 실행해요.
- 기한이 지난 작업을 후속 확인하거나 상위 담당자에게 전달하는 워크플로우에 알맞아요.

**Before no. of days**(일 수 이전)

- 작업 마감일보다 정해 둔 일수만큼 앞서 워크플로우를 실행해요.
- 미리 알리거나 내부 알림을 보낼 때 알맞아요.

## Task Reminder 트리거 설정하기

아래 순서대로 따라 하면 원하는 시점에 워크플로우가 실행되도록 트리거를 설정할 수 있어요.

### 1. 자동화 열기

왼쪽 메뉴에서 **자동화**로 이동하면 만들어 둔 워크플로우 목록이 보여요. 오른쪽 위에서 **Create Workflow**(워크플로우 만들기)를 클릭해 새 자동화를 만드세요.

![자동화에서 워크플로우 만들기 버튼을 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059802170/original/Te35NTwrv7_iSXiLwvf4_xcVpzeB-xbQKA.png?1764765814)

### 2. Add New Trigger 클릭하기

워크플로우 빌더에서 트리거를 추가하는 시작 지점을 찾으세요. **Add New Trigger**(새 트리거 추가)를 클릭하고, 연락처를 워크플로우에 등록할 이벤트를 고르세요.

![워크플로우 빌더에서 Add New Trigger를 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059802256/original/PJbtVBtNyA7FgbEKpMBtiCi96p_5ts9mFA.png?1764765837)

### 3. Task Reminder 선택하기

트리거 목록을 아래로 내려 작업 관련 트리거 중에서 **Task Reminder**를 찾아 선택하세요. 다가오는 작업이나 기한이 지난 작업의 알림 시점에 실행되는 워크플로우를 만들 수 있어요.

![트리거 목록에서 Task Reminder를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059802317/original/eKRD8AtlEzA2_PaUA7hsH-pdG64TK5M-6g.png?1764765873)

### 4. 트리거 이름 정하기

**Task Reminder**를 선택한 뒤 트리거 이름을 알아보기 쉽게 입력하세요. 예를 들면 "작업 마감일 알림"처럼 쓸 수 있어요. 트리거가 여러 개일 때 이름만 봐도 용도를 바로 알 수 있어요.

![트리거 이름을 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059802395/original/MAJY06Vmj9uZV2VF_iWQOqzVfd-2bTysrQ.png?1764765898)

### 5. 필터 옵션 열기

트리거 설정 영역에서 **Filters** 아래의 **Select**(선택) 드롭다운을 클릭하면 알림 시점 옵션 목록이 열려요. 이 필터로 알림이 워크플로우를 언제 실행할지 정확히 정해요.

![Filters 아래의 Select 드롭다운을 여는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059802421/original/KzgfJyBeQXyrmZi0DRfpBpjmPJkaXUH0Xw.png?1764765925)

### 6. 트리거 저장하기

작업 마감일을 기준으로 워크플로우를 언제 실행할지에 따라 **Before no. of days** 또는 **After no. of days**를 고르세요. 일수를 입력한 다음 **Save Trigger**(트리거 저장)를 클릭하면 설정이 적용돼요.

![일수를 입력하고 Save Trigger를 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059802470/original/r6-kSy7mxIWj1O6sD3CkqHHMSiweJ9YKlQ.png?1764765943)

## 자주 묻는 질문

### 작업에 마감일이 없어도 트리거가 작동하나요?

아니요. 알림 시점을 정하려면 마감일이 있어야 해요.

### 작업을 일찍 완료해도 알림 트리거가 실행되나요?

네. 완료된 작업이라도 조건에 맞으면 트리거가 실행돼요.

### 마감일 이전 알림과 이후 알림을 둘 다 설정할 수 있나요?

네. 입력한 시점에 따라 각각 따로 실행돼요.

### 작업의 마감일을 바꾸면 알림에도 영향이 있나요?

네. 바뀐 마감일을 기준으로 알림 시점이 다시 계산돼요.

### 작업을 삭제하면 트리거가 실행되나요?

아니요. 삭제된 작업은 워크플로우를 실행하지 않아요.

### 이 트리거를 쓰면 담당자에게 자동으로 알림이 가나요?

알림을 보내는 워크플로우 액션을 추가한 경우에만 가요.

### 작업의 담당자를 바꾸면 알림 동작이 달라지나요?

담당자를 바꿔도 알림 시점에는 영향이 없어요.
