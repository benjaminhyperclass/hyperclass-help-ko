---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002492-workflow-trigger-stale-opportunities
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Stale Opportunities(오래된 기회)

**Stale Opportunities**(오래된 기회) 트리거는 정해 둔 기간 동안 움직임이 없는 기회를 자동으로 찾아 후속 조치를 실행해요. 이 문서에서는 트리거의 개념과 장점, 설정 방법, 활용 사례, 자주 묻는 질문을 안내해요.

## Stale Opportunities 트리거란?

**Stale Opportunities** 트리거는 기회가 진행이나 업데이트 없이 같은 단계에 정해진 기간 동안 머물러 있을 때 워크플로우를 시작해요. 멈춰 있는 기회에 먼저 연락해서 놓치는 리드가 없게 할 수 있어요.

예를 들어 기회가 **협상** 단계에 5일 동안 업데이트 없이 머물러 있다고 해 볼게요. 이 트리거로 후속 이메일을 자동으로 보내거나, 관리자에게 알리거나, 다른 팀원에게 기회를 다시 배정할 수 있어요.

## Stale Opportunities 트리거의 장점

- 파이프라인 선제 관리: 멈춘 기회를 자동으로 찾아 처리해서 영업 파이프라인이 계속 움직이게 해요.
- 응답 시간 단축: 영업 담당자에게 자동 알림을 보내, 잠재 고객과 다시 연락할 시점을 놓치지 않게 해요.
- 가시성 향상: 방치된 기회를 관리자나 팀 리더에게 알려서 직접 개입할 수 있게 해요.
- 워크플로우 맞춤 설정: 파이프라인 단계, 비활동 기간, 팀별 역할에 맞춰 트리거와 액션을 조정해서 필요한 후속 조치만 실행해요.
- 수작업 감소: 멈춘 기회를 직접 추적하고 후속 연락을 챙기는 일을 자동화해서 팀의 시간을 아껴 줘요.

## 트리거 설정 단계

1. **자동화 > 워크플로우**로 이동해요.

   ![자동화 메뉴에서 워크플로우 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037992675/original/v52oSSh-I-lN_K0EjzqBygKIcV8pxlWZyQ.png?1733748873)
2. **+ Create Workflow**(워크플로우 만들기)를 클릭한 다음 **처음부터 시작**을 클릭해요.

   ![워크플로우 만들기와 처음부터 시작 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037992710/original/aM1y4qUo4kCInwQZE4mjAylBspkXETBwww.png?1733748906)
3. **+ Add new Trigger**(새 트리거 추가) 버튼을 클릭해서 **Workflow Trigger**(워크플로우 트리거)를 선택하는 화면을 열어요.

   ![새 트리거 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037993058/original/_SQ_J5euvRtyUimg82TQ9V8C_ySLW9KhpQ.png?1733749151)
4. 트리거 목록에서 **Stale Opportunities**를 선택해요.

   ![트리거 목록에서 Stale Opportunities 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037993718/original/ZGKCw0GxgCvLvHZ3faQDp3KeC1Pf0VlZ1w.png?1733749613)
5. **Trigger Name**(트리거 이름)에 이름을 입력해요. 워크플로우 목록에서 쉽게 알아볼 수 있도록 "Stale Opportunity Follow-Up"처럼 지어 주세요.

   ![트리거 이름 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037993955/original/nJkzwOISoek2jCrR1rocZYgL_NJ-bHYPAQ.png?1733749774)

## 트리거 필터 설정

1. **Add Filters**(필터 추가)를 클릭해요.

   ![필터 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037994623/original/2aLVKxmG6QYYdPvFvYaYXWNqCTeynB_Vfw.png?1733750200)
2. **Duration in Days**(경과 일수)에 기회가 움직임 없이 머물 수 있는 일수를 입력해요. 이 기간이 지나면 기회가 "오래된" 상태가 돼요(예: 2일).

   ![경과 일수 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037994663/original/8APRMK1eRbtYicrel-CP79_U8mycGF89fg.png?1733750224)
3. **In Pipeline**(파이프라인)에서 트리거를 적용할 파이프라인을 선택해요(예: 영업 파이프라인).

   ![파이프라인 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037995060/original/u5J2wZu6PoIBMKBvMA2gAedLGOy_gI8znA.png?1733750491)
4. **Pipeline Stage**(파이프라인 단계)에서 트리거를 적용할 단계를 선택해요(예: 협상 단계).

   ![파이프라인 단계 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037995612/original/MeWoSizOEMOYqYAuPDm55fAvopV-4IIzcg.png?1733750814)
5. 필터 설정을 마치면 **Save Trigger**(트리거 저장) 버튼을 꼭 클릭해 주세요.

   ![트리거 저장 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037997243/original/ohn1yJtGqdEcp_Z8zuINlupqp6fM4acpWw.png?1733751840)

## 설정 예시

트리거 설정

- **Workflow Trigger**(워크플로우 트리거): Stale Opportunities
- **Workflow Trigger Name**(워크플로우 트리거 이름): Stale Opportunities Follow-Up

필터

- **Duration in days**(경과 일수): 2
- **In pipeline**(파이프라인): 영업 파이프라인
- **Pipeline stage**(파이프라인 단계): 협상

오래된 기회에 실행할 액션

- **Email Action Name**(이메일 액션 이름): 영업 담당자 알림 이메일
- **From Name**(보내는 사람 이름): 회사명
- **From Email**(보내는 사람 이메일): yourcompany@example.com
- **Subject**(제목): "알림: 확인이 필요한 오래된 기회"

**Email Body**(이메일 본문):

```
안녕하세요 {{opportunity.assigned_user}}님,

"{{pipeline.name}}" 파이프라인의 "{{opportunity.name}}" 기회가 {{duration}}일 동안 움직임이 없어요.

이 기회를 진행하거나 상태를 업데이트해 주세요.

감사합니다.

[회사명]
```

- **Notification Action Name**(알림 액션 이름): 관리자에게 알리기
- **Message**(메시지): "'{{pipeline.name}}' 파이프라인의 기회가 오래된 상태가 되었어요. 기회 세부정보: {{opportunity.details}}."

추가 액션

- 추가 검토나 조치가 필요하면 기회를 다른 단계로 옮겨요.

결과: 이 자동화를 쓰면 오래된 기회를 빠르게 처리할 수 있어요. 영업 파이프라인이 계속 움직이고 놓치는 기회도 줄어들어요. 필터와 액션을 상황에 맞게 설정하면 제때 후속 연락을 하고, 멈춘 기회를 제대로 관리할 수 있어요.

## 활용 사례

1. 멈춘 딜 다시 살리기: **협상** 단계에서 5일 넘게 움직임이 없는 기회에 후속 이메일을 보내 잠재 고객과 대화를 다시 시작해요.
2. 영업 담당자 책임감 높이기: 담당 기회가 식었을 때 영업 담당자에게 자동으로 알려서 제때 움직이도록 도와요.
3. 관리자 알림: 금액이 큰 기회가 오래된 상태가 되면 영업 관리자에게 알려요. 관리자가 영업 담당자를 안내하거나 지원할 수 있어요.
4. 파이프라인 정리: 오래된 기회를 "검토 필요" 단계로 자동으로 옮겨요. 팀이 기회마다 다음 단계를 검토하고 결정할 수 있어요.

## 자주 묻는 질문

### 오래된 기회로 판단할 "Duration in Days"는 며칠로 설정하면 좋나요?

영업 주기에 따라 달라요. 주기가 짧으면 2~3일이면 충분하고, 주기가 길면 7~10일은 지나야 오래된 기회로 볼 수 있어요.

### Stale Opportunities 트리거를 파이프라인의 특정 단계에만 적용할 수 있나요?

네, 필터 조건에서 특정 파이프라인 단계를 지정하면 그 단계의 기회에만 트리거가 적용돼요.

### 실제로는 진행 중인 기회가 오래된 기회로 잡히는 일을 막으려면 어떻게 하나요?

커스텀 필터와 조건을 사용하세요. 메모, 이메일 답장, 통화 기록처럼 최근에 업데이트나 활동이 있는 기회를 오래된 기회에서 제외할 수 있어요.

### 같은 기회가 다시 오래된 상태가 되면 Stale Opportunities 워크플로우를 다시 실행할 수 있나요?

네, 기회가 새 단계로 이동하거나 업데이트되면 트리거가 초기화돼요. 이후 설정한 기준에 따라 다시 오래된 상태가 되면 워크플로우가 정상적으로 실행돼요.

### Stale Opportunities 기능은 과거 기회에도 적용되나요?

아니요, 과거로 소급해서 적용되지 않아요. 오래된 기간은 트리거를 추가한 시점부터 계산해요.
