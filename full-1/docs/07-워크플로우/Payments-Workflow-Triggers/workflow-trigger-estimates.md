---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003704-workflow-trigger-estimates
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Estimates(견적서)

**Estimates**(견적서) 트리거를 쓰면 견적서를 발송하거나 고객이 수락·거절하는 순간에 맞춰 워크플로우를 자동으로 실행할 수 있어요. 이 문서에서는 트리거의 필터와 연산자, 설정 방법, 활용 예시를 안내해요.

[동영상](https://www.youtube.com/embed/cYv4JbRuZSE?&wmode=opaque)

## Estimates 트리거란?

**Estimates** 트리거는 견적서에 특정 동작이 생겼을 때 워크플로우를 실행해요. 견적서를 고객에게 보냈을 때, 고객이 수락했을 때, 검토 후 거절했을 때 등이 해당해요. 덕분에 후속 조치를 제때 자동으로 처리할 수 있어요. 견적서 상태를 추적하고, 기회를 관리하고, 고객과 소통을 이어 가는 데 쓸 수 있어요.

## Estimates 트리거의 장점

- 자동 후속 조치: 직접 챙기지 않아도 후속 이메일, 감사 메시지, 다음 단계 안내를 자동으로 보낼 수 있어요.
- 고객 경험 개선: 견적서가 수락되면 바로 대응해서 고객에게 진행 상황을 알릴 수 있어요.
- 기회 관리: 수락된 견적서를 새 기회로 자동 전환하고, 알맞은 팀원에게 바로 배정할 수 있어요.
- 원활한 소통: 견적서 상태가 바뀌면 내부 팀에 알려서 모두가 같은 정보를 보게 할 수 있어요.

## Estimates 트리거의 필터와 연산자

**Estimates** 트리거를 설정할 때 필터로 실행 조건을 좁힐 수 있어요. 필터를 쓰면 트리거가 실행될 조건을 구체적으로 정할 수 있어서 자동화가 더 정확해져요. 필터는 **Operator**(연산자)와 함께 써요. 연산자는 견적서 관련 데이터를 어떤 논리 조건으로 판단할지 정해 줘요.

**Estimates** 워크플로우를 만들 때 쓸 수 있는 필터는 3가지예요.

1. **Estimate Status**(견적서 상태)
2. **Estimate Value**(견적서 금액)
3. **Estimate Template**(견적서 템플릿)

<!-- 검토 필요: 원문의 필터 설명이 의미 없는 문자열로 되어 있어 필터 이름만 옮김 -->

아래에서 필터와 연산자가 어떻게 동작하는지 하나씩 살펴볼게요.

### Estimate Status 필터

**Estimate Status**(견적서 상태) 필터에서 고를 수 있는 상태는 다음과 같아요.

| 상태 | 설명 |
| --- | --- |
| **Accepted**(수락됨) | 고객이 제안된 조건과 가격에 동의하며 견적서를 승인한 상태예요. |
| **Declined**(거절됨) | 고객이 견적서를 검토한 뒤 진행하지 않기로 한 상태예요. |
| **Invoiced**(인보이스 발행됨) | 견적서가 인보이스로 전환된 상태예요. 고객이 진행에 동의했고, 결제가 예정되었거나 이미 처리되었다는 뜻이에요. |
| **Sent**(발송됨) | 견적서를 만들어 고객에게 보냈지만, 아직 열어 보거나 수락·거절하지 않은 상태예요. |
| **Viewed**(조회함) | 고객이 견적서를 열어 봤지만 아직 수락하거나 거절하지 않은 상태예요. |

상태 필터에서 쓸 수 있는 연산자는 다음과 같아요.

| 연산자 | 설명 |
| --- | --- |
| **Is**(다음과 같음) | 견적서 상태가 지정한 값과 같을 때만 실행돼요. 예: "Accepted" |
| **Is Empty**(비어 있음) | 견적서에 상태가 지정되지 않았을 때 실행돼요. 처리되지 않은 견적서를 찾을 때 유용해요. |
| **Is Not**(다음과 같지 않음) | 견적서 상태가 지정한 값과 다를 때 실행돼요. 예를 들어 "Is Not Declined"는 "Declined"를 제외한 모든 상태에서 실행돼요. |
| **Is Not Empty**(비어 있지 않음) | 견적서에 어떤 상태든 지정되어 있을 때만 실행돼요. 미완성이거나 처리되지 않은 견적서를 제외할 때 도움이 돼요. |

예를 들어 견적서가 거절되었을 때만 동작을 실행하려면 **Estimate Status → Is → Declined**로 설정하세요.

![Estimate Status 필터를 Is, Declined로 설정한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040857388/original/Elsb6sKbJ8-F4OGTYGQvGfsmMCD-jOh6xQ.png?1738490635)

### Estimate Value 필터

이 필터는 견적서의 금액을 기준으로 트리거를 좁혀요. 예를 들어 $1,499가 넘는 견적서에 알림을 보내려면 **Estimate Value > Greater Than > 1499**로 설정하세요.

| 연산자 | 설명 |
| --- | --- |
| **Equals To**(같음) | 견적서 금액이 지정한 금액과 정확히 같을 때 실행돼요. |
| **Greater Than**(보다 큼) | 견적서 금액이 기준값을 넘을 때 실행돼요. |
| **Greater Than or Equals To**(이상) | 견적서 금액이 설정한 금액과 같거나 더 클 때 실행돼요. |
| **Is Empty**(비어 있음) | 견적서에 금액이 지정되지 않았을 때 실행돼요. 미완성 견적서를 찾을 때 유용해요. |
| **Is Not Empty**(비어 있지 않음) | 견적서에 어떤 금액이든 지정되어 있을 때 실행돼요. |
| **Is Not Equal To**(같지 않음) | 견적서 금액이 지정한 금액과 다를 때 실행돼요. |
| **Less Than**(보다 작음) | 견적서 금액이 정한 금액보다 낮을 때 실행돼요. |
| **Less Than or Equal To**(이하) | 견적서 금액이 정한 금액과 같거나 더 낮을 때 실행돼요. |

![Estimate Value 필터를 설정한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040857434/original/gcG-Bjk3naX5RuSifryTTLRZpZeboecmuA.png?1738490834)

### Estimate Template 필터

이 필터를 쓰면 특정 견적서 템플릿으로 만든 견적서에만 트리거가 실행돼요. 쓸 수 있는 연산자는 다음과 같아요.

- **Is**(다음과 같음): 견적서를 지정한 템플릿으로 만들었을 때만 실행돼요.
- **Is Empty**(비어 있음): 견적서를 만들 때 템플릿을 쓰지 않았을 때 실행돼요. 직접 작성한 견적서를 찾을 때 유용해요.
- **Is Not**(다음과 같지 않음): 견적서를 특정 템플릿으로 만들지 않았을 때 실행돼요.
- **Is Not Empty**(비어 있지 않음): 견적서를 어떤 템플릿으로든 만들었을 때만 실행돼요.

예를 들어 "프리미엄 패키지" 템플릿으로 만든 견적서에만 자동 이메일을 보내려면 **Estimate Template → Is → 프리미엄 패키지**로 설정하세요.

![Estimate Template 필터를 설정한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040857520/original/H_-YVWd4r_lcrnwU2_5tMp87V-fZFsCXUw.png?1738491100)

## Estimates 트리거 설정하기

하이퍼클래스에서 **Estimates** 트리거를 설정하는 순서예요.

### 1. 자동화로 이동하기

1. **자동화** 메뉴로 이동해 **+ Create Workflow**(워크플로우 만들기)를 선택하세요.
2. **Estimates** 트리거를 쓸 기존 워크플로우를 고르거나, 새 워크플로우를 처음부터 만드세요.

![자동화 메뉴에서 워크플로우 만들기를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040856446/original/TB_vMRVJQMxaQ1GUT3yDHIJJvkzxQGsIlA.jpeg?1738487449)

### 2. Estimates 트리거 추가하기

1. **Add New Trigger**(새 트리거 추가)를 선택하세요.
2. 워크플로우 트리거 목록에서 **Estimates**(견적서)를 선택하세요.

![트리거 목록에서 Estimates를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040856456/original/4jIEmwnL7N_m4OE6qZS6AJ8kz6ezcWp2qA.png?1738487495)

### 3. 트리거 이름 정하기

**Trigger Name**(트리거 이름)을 트리거의 목적이 드러나는 이름으로 바꾸세요. 예를 들어 "Estimate Follow-Up Workflow"(견적서 후속 조치 워크플로우)처럼 지으면 돼요. 이 문서의 예시에서는 트리거 이름을 "Estimate Declined"(견적서 거절됨)로 지었어요.

![트리거 이름을 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040856471/original/BC8ynz3J7YqB1SZVqGjwtNhmUfK8Law92w.png?1738487534)

### 4. 필터 설정하기

트리거를 추가한 뒤 필터로 실행 조건을 좁힐 수 있어요.

1. **+ Add Filters**(필터 추가)를 클릭하고 표준 필드 중 하나를 선택하세요.
2. 필드를 고른 뒤 알맞은 연산자를 선택하세요.
3. 트리거와 필터 설정을 마쳤다면 **Save**(저장)를 클릭하세요.

![필터를 추가하고 연산자를 선택하는 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040810187/original/K1lyhNifbJOZaTRJ02EwsDf7FkH-jDWFLQ.gif?1738334712)

### 5. 완성된 Estimates 트리거 확인하기

트리거 설정을 마쳤다면 필요에 맞는 워크플로우 액션도 설정하세요. 트리거와 액션을 모두 설정한 워크플로우는 아래 화면처럼 보여요.

![트리거와 액션을 모두 설정한 워크플로우 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040810971/original/rm2JqxZjc6o7P4cEGlrMGaDIQ-O6hroryA.png?1738335186)

## 자주 묻는 질문

### 고객이 견적서를 조회했을 때 워크플로우가 실행되게 하려면 어떻게 하나요?
**Estimate Status** 필터를 **Viewed**로 설정하세요. 고객이 견적서를 열어 보면 워크플로우가 실행돼요.

### 특정 금액 이상의 견적서에만 워크플로우를 실행할 수 있나요?
네, 가능해요. **Estimate Value** 필터를 **Greater Than**으로 두고 원하는 금액을 입력하세요. 금액이 큰 견적서에만 워크플로우가 실행돼요.

### 트리거 하나에 필터를 여러 개 함께 쓸 수 있나요?
네, 쓸 수 있어요. **Estimate Status**와 **Estimate Value**처럼 필터를 여러 개 추가하면 워크플로우에 맞게 더 구체적인 트리거를 만들 수 있어요.

### 견적서 상태에 따라 팀별로 알림을 보내려면 어떻게 하나요?
견적서 상태(예: **Sent**, **Accepted**, **Declined**)마다 워크플로우를 따로 만드세요. 각 워크플로우에 내부 알림 액션을 추가하면 해당 팀에 알릴 수 있어요.

### 수락된 견적서로 기회를 자동으로 만들 수 있나요?
네, 가능해요. 워크플로우에 **Create Opportunity**(기회 생성) 액션을 추가하면 수락된 견적서가 CRM에서 새 기회로 자동 생성돼요.
