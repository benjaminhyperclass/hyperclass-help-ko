---
원문: /support/solutions/articles/155000002674-workflow-trigger-custom-date-reminder
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Custom Date Reminder(커스텀 날짜 알림)

**Custom Date Reminder**(커스텀 날짜 알림) 트리거는 기념일, 구독 갱신일, 이벤트 일정처럼 직접 고른 날짜를 기준으로 알림과 후속 연락을 자동화해요. 이 문서에서는 트리거가 무엇인지, 어떤 점이 좋은지, 어떻게 설정하는지, 자주 묻는 질문의 답을 알려 드려요.

## Custom Date Reminder 트리거란?

**Custom Date Reminder** 트리거는 선택한 날짜 필드를 기준으로 그 날짜 전, 당일, 또는 후에 워크플로우를 시작해요. 고를 수 있는 날짜 필드는 워크플로우 유형에 따라 달라요.

- 연락처 기반 워크플로우: 연락처 날짜 필드와, 지원되는 기회 날짜 필드
- 사용자 지정 객체 기반 워크플로우: 워크플로우의 기준이 되는 사용자 지정 객체와 같은 유형의 객체에 있는 날짜 필드
- 회사 기반 워크플로우: 회사 오브젝트의 날짜 필드

갱신, 기념일, 만료 알림처럼 시간에 맞춰 후속 연락을 보내야 할 때 유용해요.

## Custom Date Reminder 트리거의 장점

- 고객 참여가 좋아져요. 관련 날짜에 맞춰 알림이나 후속 연락을 보내 적절한 때에 소통할 수 있어요.
- 높은 사용자 맞춤화가 가능해요. 필터를 추가해서 정확한 날짜, 날짜 며칠 전·후, 특정 월에 실행되도록 정할 수 있어요.
- 계약 갱신이나 서비스 안내처럼 고객 관계 관리를 먼저 챙기는 데 도움이 돼요.
- 반복 작업을 자동화해서 시간을 아끼고, 중요한 날짜를 놓칠 위험을 줄여요.

## Custom Date Reminder 트리거 설정하기

이 섹션에서는 알맞은 날짜 필드를 고르고, **After Number of Days**(일수 이후)나 **Day Is**(요일) 같은 필터를 설정하는 방법을 살펴봐요. 지정한 날짜에 정확히 실행되도록 트리거를 설정해서 알림과 후속 연락 등 날짜 기반 작업을 자동화할 수 있어요.

**Custom Date Reminder** 트리거를 추가하면 날짜 필드 선택 목록에는 해당 워크플로우 유형에서 지원하는 필드만 나와요. 그래서 트리거가 워크플로우가 실행되는 대상과 항상 맞게 유지돼요.

### 워크플로우 빌더 열기

1. 왼쪽 메뉴에서 **자동화**로 이동해요.
2. **+ Create New Workflow**(새 워크플로우 만들기)를 선택해요.
3. 처음부터 만들려면 **처음부터 시작**을, 시스템에 있는 기본 제공 템플릿을 가져다 고치려면 **템플릿 선택**을 골라요.

이미 있는 워크플로우에 이 트리거를 추가하려면, 목록에서 해당 워크플로우 위에 마우스를 올린 뒤 선택해서 편집 화면으로 들어가세요.

![워크플로우 만들기 화면에서 처음부터 시작과 템플릿 선택 중 하나를 고르는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040111408/original/Gqovi-DbLC4Udzz7Ar-K8iDpgp4wAyZbVQ.png?1737369481)

### 새 워크플로우 트리거 추가

1. **Add New Trigger**(새 트리거 추가) 버튼을 클릭해요.
2. 목록에서 **Custom Date Reminder**를 선택해요.

![트리거 목록에서 Custom Date Reminder를 선택하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040110969/original/0pCxJxs0VzChGXOqTkFb-cdnrdP_c2aklg.jpeg?1737369179)

### 트리거 이름 정하기

트리거에 알아보기 쉬운 이름을 붙이세요. 이름이 분명하면 워크플로우가 정돈되고, 나중에 특정 트리거를 찾아 수정하기도 쉬워요.

![트리거 이름을 입력하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040111663/original/mnOenB8Nq-DqxTVfkV9cYIlX5rRMiGoLCQ.png?1737369635)

### 필터 추가

**Add Filters**(필터 추가) 버튼을 클릭하면 트리거에 추가할 수 있는 필터 목록이 나와요.

![Add Filters 버튼을 눌러 필터 목록이 열린 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040116971/original/eBXF1KpkllZEOYWMyeUwxTUX9hM2yJwdxQ.png?1737373413)

### Match on Year Along with Day and Month

**Match on Year Along with Day and Month**(일·월과 함께 연도까지 일치) 옵션을 켜면 커스텀 날짜 필드의 연도가 올해와 같을 때만 트리거가 실행돼요. 연간 알림이나 시기가 중요한 후속 연락처럼, 정확한 연도가 중요한 날짜 기반 워크플로우에서 특히 유용해요.

![Match on Year Along with Day and Month 옵션을 켠 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040122043/original/zqSZXLQFJxGKmnI1JSv9hAwrX60hVuV5PQ.png?1737376743)

#### Custom Date Field Filter

**Custom Date Field Filter**(커스텀 날짜 필드 필터)에서는 트리거가 기준으로 삼을 날짜 필드를 골라요. 선택할 수 있는 날짜 필드는 워크플로우 유형에 따라 달라요.

1. 연락처 기반 워크플로우에서는 지원되는 연락처 날짜 필드와 기회 날짜 필드를 선택할 수 있어요.
2. 사용자 지정 객체 기반 워크플로우에서는 워크플로우의 기준이 되는 사용자 지정 객체와 같은 유형의 객체에 있는 날짜 필드를 선택할 수 있어요.
3. 회사 기반 워크플로우에서는 회사 날짜 필드를 선택할 수 있어요.

알림 시점이 설정과 맞으면(선택한 날짜의 전, 당일, 후) 워크플로우가 시작돼요.

- **Birthday**(생일): 연락처 생일을 간단하게 월과 일(MM/DD)로만 나타내는 형식이에요. 연도가 필요 없을 때 주로 써요.
- **Birthday (MM/DD/YYYY)**(생일, 연도 포함): 연도를 포함한 전체 생년월일을 저장해요. 연락처의 정확한 나이를 계산하거나 확인해야 하는 워크플로우에 꼭 필요한 옵션이에요.
- **Policy Expiry Date**(보험 만료일): 고객 보험의 만료일을 관리해요. 보험사나 구독형 서비스처럼 갱신을 제때 처리해야 하는 비즈니스에 중요해요.
- **Policy Purchase Date**(보험 가입일): 고객이 보험에 가입한 날짜를 기록해요. 가입일을 기준으로 기념일이나 후속 연락 일정을 관리할 수 있어요.
- **Proposed Appt Time**(예약 희망 시간): 예정된 예약의 날짜와 시간을 뜻해요. 상담이나 서비스처럼 일정이 잡힌 고객 접점이 있는 워크플로우에 꼭 필요한 필드예요.

![Custom Date Field Filter에서 날짜 필드를 고르는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040122155/original/9vUlahCim3PHP0lMIHWdRw-mdLlSN7xd3A.png?1737376830)

### Advanced Filters(상세 필터)

- **After Number of Days**(일수 이후): 커스텀 날짜로부터 정해진 일수가 지난 뒤에 트리거가 실행되도록 설정해요. 예를 들어 커스텀 날짜가 보험 가입일이고 5일로 설정하면, 가입 후 5일째 되는 날 워크플로우가 실행돼요. 행사나 구매 뒤의 후속 연락이나 알림에 알맞아요.
- **Before Number of Days**(일수 이전): 커스텀 날짜 며칠 전에 워크플로우가 실행되도록 설정해요. 예를 들어 보험 만료일이나 예약 3일 전에 알림 이메일을 보내서 제때 조치하거나 준비할 수 있게 해요.
- **Has Tag**(태그 보유): CRM에서 특정 태그가 붙은 연락처에만 트리거가 실행되도록 좁혀요. 태그로 고객 그룹별 워크플로우를 나누면 자동화를 더 정확하게 쓸 수 있어요.
- **Day Is**(요일): 워크플로우가 실행될 정확한 요일(예: 월요일, 화요일)을 정해요. 후속 전화를 걸거나 프로모션 캠페인을 시작하는 일처럼, 특정 요일에 작업이나 액션을 예약할 때 특히 유용해요.
- **Month Is**(월): 워크플로우가 실행될 특정 월(예: 6월, 12월)을 정해요. 시즌 캠페인을 계획하거나 생일 메시지를 보내거나, 해마다 반복되는 행사와 관련된 작업을 시작할 때 알맞아요.

![Advanced Filters에서 상세 조건을 설정하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040127086/original/fYemuwNmKdFAFt43Nnbr9R6yOr6IvwK6LQ.png?1737380020)

### 워크플로우 저장하고 게시하기

워크플로우를 만드는 중에는 틈틈이 **Save**(저장)를 눌러 두세요. 그래야 변경 내용을 잃지 않고 하던 곳부터 이어서 작업할 수 있어요. 워크플로우가 완성되어 작동할 준비가 되면 **Draft**(초안)를 **Publish**(게시)로 전환해서 활성화하는 것도 잊지 마세요.

## 자주 묻는 질문

### 이 트리거로 여러 날짜에 맞춰 알림을 설정하려면 어떻게 하나요?

날짜 필드마다 워크플로우를 따로 만들고, 각각 다른 알림이 실행되도록 설정하면 돼요. 헷갈리지 않도록 워크플로우마다 이름을 분명하게 붙이고 설정을 꼼꼼히 확인하세요.

### 커스텀 날짜 전과 후에 동시에 알림을 보낼 수 있나요?

네, 가능해요. 같은 워크플로우 안에 트리거를 두 개 만들어서 하나는 날짜 전 알림용, 다른 하나는 날짜 후 알림용으로 설정하세요.

### 연락처의 커스텀 날짜 필드가 비어 있으면 어떻게 되나요?

커스텀 날짜 필드에 값이 없는 연락처는 트리거가 실행되지 않아요. 알림을 받아야 하는 연락처에는 커스텀 필드에 날짜가 모두 입력되어 있는지 확인하세요.

### 이 트리거로 매년 반복되는 알림을 보낼 수 있나요?

네, **Match on the year along with the day and month** 옵션을 켜면 트리거가 매년 같은 날짜에 실행돼요.

### 특정 연락처에만 트리거가 실행되게 하려면 어떻게 하나요?

**Has Tag**나 **Business Niche**(비즈니스 니치) 같은 필터를 사용해서 트리거를 특정 연락처 그룹으로 좁히세요.
