---
원문: https://help.gohighlevel.com/support/solutions/articles/155000007330-workflow-action-openrouter-generate-response
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — OpenRouter Generate Response(응답 생성)

OpenRouter의 **Generate Response**(응답 생성) 액션을 쓰면 워크플로우 안에서 AI가 메시지나 요약을 자동으로 만들어 줘요. 이 문서에서는 OpenRouter 연동 방법과 액션 설정 방법을 안내해요.

## Generate Response 액션이란?

**Generate Response**(응답 생성) 액션은 OpenRouter를 통해 연결한 AI 모델로 응답을 만드는 워크플로우 액션이에요. 선택한 AI 모델에 프롬프트를 보내면, 지시 사항과 문맥, 워크플로우 변수를 바탕으로 응답이 자동으로 만들어져요.

OpenRouter는 여러 AI 모델을 한곳에서 쓸 수 있게 해 주는 관문 역할을 해요. 그래서 대화형 답변, 데이터 요약, 맞춤 마케팅 문구 등 자동화 목적에 가장 잘 맞는 모델을 골라 쓸 수 있어요.

워크플로우가 이 액션에 도달하면 프롬프트가 선택한 모델로 전달돼요. 모델이 응답을 만들면 그 결과가 출력 변수로 저장돼요. 이 변수는 메시지 보내기나 레코드 업데이트 같은 이후 단계에서 쓸 수 있어요.

## OpenRouter: Generate Response의 장점

OpenRouter를 쓰면 하나의 연동으로 여러 AI 모델에 접근할 수 있어요. 그래서 상황에 맞는 AI 응답을 워크플로우에 쉽게 넣을 수 있어요.

- 여러 모델 사용: OpenRouter를 통해 여러 AI 제공업체에 연결하고, 자동화 작업마다 가장 알맞은 모델을 고를 수 있어요.
- 동적 AI 응답: 프롬프트와 워크플로우 변수를 활용해 연락처마다 맞춤형 결과를 자동으로 만들어요.
- 유연한 활용: AI가 만든 응답을 SMS, 이메일, 내부 알림, CRM 업데이트에 쓸 수 있어요.
- 프롬프트 직접 제어: 시스템 프롬프트와 지시 사항으로 AI 응답의 말투, 동작, 형식을 정할 수 있어요.
- 대규모 자동화: 큰 워크플로우에서도 사람이 일일이 손대지 않고 응답을 만들 수 있어요.

## OpenRouter 계정 연결하기

워크플로우에서 **Generate Response** 액션을 쓰려면 먼저 OpenRouter 연동을 연결해야 해요. 연결하면 하이퍼클래스가 API 키로 OpenRouter의 AI 모델과 안전하게 통신해요. 이 연결이 있어야 워크플로우에서 AI 모델에 프롬프트를 보내고 응답을 받을 수 있어요.

### OpenRouter 연결 순서

1. **설정**으로 이동하세요.
2. **연동**을 선택하세요.
3. 연동 목록에서 **OpenRouter**를 찾으세요.
4. **연결**을 클릭하세요.
5. **OpenRouter API Key**(OpenRouter API 키)를 입력하세요.
6. **저장**을 클릭하면 연동이 완료돼요.

![설정 > 연동에서 OpenRouter 연결하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067002910/original/AgRhNVNo3XuXaWfU86aj4_EdQE1Knj6KLg.png?1773656058)

![OpenRouter API 키 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067003736/original/XYoxfAVDf93K9Qhi7OIXEuOUTEhM6PBY6A.png?1773656361)

## System Prompt와 Prompt의 차이

효과적인 AI 응답을 만들려면 **System Prompt**(시스템 프롬프트)와 **Prompt**(프롬프트)의 차이를 알아 두는 게 좋아요.

**System Prompt**는 AI의 성격, 동작 방식, 규칙을 정해요. 요청이 바뀌어도 그대로 유지되고, AI가 어떻게 행동할지 조절해 줘요.

**Prompt**는 AI가 처리할 구체적인 작업이나 질문을 정해요.

설정 예시입니다.

System Prompt:

```
You are a friendly sales assistant that writes short and persuasive messages.
```

Prompt:

```
Create a follow-up message for {{contact.first_name}} who downloaded our pricing guide.
```

이렇게 나누면 AI의 동작은 일정하게 유지하면서, 연락처마다 다른 응답을 만들 수 있어요.

## 워크플로우에 OpenRouter: Generate Response 액션 설정하기

OpenRouter 연동을 연결했다면 워크플로우에 **Generate Response** 액션을 추가할 수 있어요. 이 액션은 OpenRouter를 통해 선택한 AI 모델에 프롬프트를 보내고, 만들어진 응답을 돌려받아요. 받은 응답은 메시지 보내기나 CRM 레코드 업데이트 같은 이후 단계에서 쓸 수 있어요.

### 1단계: 워크플로우에 새 액션 추가하기

1. **자동화 > 워크플로우**로 이동하세요.
2. 기존 워크플로우를 열거나 새 워크플로우를 만드세요.
3. 워크플로우 빌더에서 **Add**(추가)를 클릭해 새 단계를 넣으세요.
4. 화면 오른쪽에 **Actions**(액션) 패널이 나타나요.

![워크플로우 빌더에서 Add 클릭하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067029681/original/UPEEzYXMJGzbrMGheMyGZfPBed-BezBGYg.png?1773668846)

![오른쪽에 나타난 Actions 패널](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067030124/original/OtHmgL1kW4CwHTEirVh_ou8D-N_XJxhCNQ.png?1773669098)

### 2단계: OpenRouter 앱 선택하기

1. **Actions** 패널에서 **Apps**(앱) 탭을 선택하세요.
2. 설치된 앱 목록을 스크롤하세요.
3. **OpenRouter**를 찾으세요.

![Apps 탭에서 OpenRouter 찾기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067030234/original/wlAnHyDrF7UGRG7O8m139TcTa3eAl4R2TA.png?1773669149)

### 3단계: Generate Response 액션 선택하기

1. **OpenRouter**를 클릭해 사용할 수 있는 액션을 펼치세요.
2. **Generate Response**를 선택하세요.

이 액션은 선택한 AI 모델로 프롬프트를 실행하고, 만들어진 응답을 워크플로우로 돌려줘요.

![OpenRouter 액션 목록에서 Generate Response 선택하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067030747/original/d5ZeeI3Fj7P8PECJxE86eMdf2oWrrtxp5Q.png?1773669358)

### 4단계: Generate Response 액션 설정하기

액션을 선택하면 **Generate Response** 설정 패널이 열려요. 이 패널에서 AI가 어떻게 동작하고 어떤 응답을 만들지 정해요.

#### Action Name

**Action Name**(액션 이름)에는 워크플로우 액션에 붙일 이름을 직접 입력해요. 한 워크플로우에 AI 액션이 여러 개일 때 각각의 용도를 쉽게 구분할 수 있어요.

예시:

```
Generate Lead Follow-Up Email
```

#### System Prompt

**System Prompt**(시스템 프롬프트)에는 AI 모델이 응답을 만들 때 따를 역할, 말투, 동작 방식을 입력해요. 이 지시는 AI가 프롬프트를 이해하고 답변을 구성하는 방향을 잡아 줘요.

AI의 역할이나 성격을 정할 때 이 필드를 쓰세요.

예시:

```
You are a helpful front office assistant that provides clear, professional responses to customer inquiries.
```

![System Prompt 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067030858/original/Z7kTKbyKst5S0czyZQWOw4ztk-F5nbmrdg.png?1773669419)

#### Prompt

**Prompt**(프롬프트)에는 AI가 수행할 구체적인 작업을 입력해요. 이 내용이 선택한 AI 모델로 전달돼요.

프롬프트에는 워크플로우 변수를 넣을 수 있어요. 그러면 연락처 데이터나 워크플로우 상황에 맞춰 응답이 달라져요.

프롬프트 예시:

```
You are an Email Assistant. Your task is to write clear, professional emails based on the user's intent, audience, and key details.
```

![Prompt 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067030917/original/YK3kK699qzxeHmJp04fbhR8KZWJkIHTJ3g.png?1773669454)

#### Model

**Model**(모델) 드롭다운에서는 OpenRouter가 응답을 만들 때 사용할 AI 모델을 골라요.

모델마다 다음과 같은 차이가 있어요.

- 더 빠른 응답 생성
- 더 높은 수준의 추론
- 더 나은 창의적 글쓰기
- 요청당 더 낮은 비용

워크플로우 자동화에 가장 잘 맞는 모델을 선택하세요.

![Model 드롭다운에서 AI 모델 선택하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067030975/original/oz0uKfV5icN8CY3uj3QJFt-1qUtHxWVycQ.png?1773669476)

### 5단계: 액션 테스트하기

워크플로우 단계를 저장하기 전에 액션을 테스트해서 AI 모델이 기대한 결과를 만드는지 확인하는 것을 권장해요.

1. **Test Action**(액션 테스트)을 클릭하세요.
2. 선택한 모델로 프롬프트가 실행돼요.
3. 만들어진 응답이 **Test Action** 결과 패널에 나타나요.

테스트하면서 프롬프트를 고치고 결과를 다듬은 뒤 워크플로우를 활성화할 수 있어요.

### 6단계: 액션 저장하기

설정을 마쳤다면 다음 순서로 저장하세요.

1. **Save Action**(액션 저장)을 클릭하세요.
2. AI 응답 생성 단계가 워크플로우에 추가돼요.

이 액션이 만든 출력은 이후 워크플로우 단계에서 이런 식으로 쓸 수 있어요.

- SMS 메시지 보내기
- 이메일 보내기
- 내부 메모 만들기
- CRM 필드 업데이트
- 조건 분기 실행

이렇게 하면 사람이 직접 입력하지 않아도 워크플로우가 알아서 AI 응답을 만들어요.

## 자주 묻는 질문

### OpenRouter가 무엇인가요?

OpenRouter는 하나의 API로 여러 AI 모델을 쓸 수 있게 해 주는 플랫폼이에요. 작업마다 가장 알맞은 모델을 골라 쓸 수 있어요.

### 프롬프트 안에서 워크플로우 변수를 쓸 수 있나요?

네, 쓸 수 있어요. 연락처 필드, 커스텀 필드, 이전 액션의 출력 같은 워크플로우 변수를 프롬프트에 넣으면 맞춤형 응답을 만들 수 있어요.

### AI가 만든 응답은 어디에 저장되나요?

만들어진 응답은 워크플로우 출력 변수로 저장돼요. 이후 워크플로우 액션에서 이 변수를 쓸 수 있어요.

### AI 모델이 응답을 만들지 못하면 어떻게 되나요?

AI 모델이 실패하거나 오류를 반환하면, 워크플로우는 설정된 자동화 로직에 따라 계속 진행돼요. 활성화하기 전에 워크플로우를 테스트하는 것을 권장해요.

### 만들어진 응답을 SMS나 이메일 메시지에 쓸 수 있나요?

네, 쓸 수 있어요. AI가 만든 출력을 워크플로우의 **Send SMS**(SMS 전송), **Send Email**(이메일 보내기) 등 메시지 액션에 넣을 수 있어요.

### OpenRouter 응답을 조건 분기와 함께 쓸 수 있나요?

네, 쓸 수 있어요. 만들어진 응답을 이후 워크플로우 단계에서 평가해 조건에 따른 경로를 정할 수 있어요.
