---
원문: /support/solutions/articles/155000007779-mistral-ai-workflow-actions
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# Mistral AI 워크플로우 액션 — Create Chat Completion·Create Embeddings·Analyze Image

워크플로우 안에서 Mistral의 언어·임베딩·비전 모델을 바로 호출하는 액션을 설명해요. 내 Mistral API 키로 텍스트 생성, 의미 검색용 벡터 생성, 이미지 분석을 자동화할 수 있어요. 별도 연동을 직접 만들지 않아도 다국어 답장, 데이터 추출, AI 기반 워크플로우 로직을 구성할 수 있어요.

## 워크플로우의 Mistral AI는 무엇인가요?

워크플로우의 Mistral AI는 자동화 안에서 Mistral 모델을 호출하는 기본 제공 연동이에요. 워크플로우가 Mistral AI 액션에 도착하면, 설정한 프롬프트·텍스트·이미지를 Mistral로 보내요. 그리고 결과를 워크플로우 출력 변수로 돌려받아요. 이 출력은 뒤에 오는 **Send SMS**(SMS 전송), **Send Email**(이메일 보내기), **Internal Notification**(내부 알림), **Update Contact Field**(연락처 필드 업데이트) 같은 단계나 조건 분기에서 쓸 수 있어요.

Mistral AI 액션은 베타로 제공돼요. 사용할 수 있는 모델, 필드, 동작이 앞으로 바뀔 수 있어요. 고객에게 나가는 자동화에 쓰기 전에 워크플로우를 먼저 테스트하세요.

## Mistral AI 워크플로우 액션의 장점

- AI 응답 생성: 워크플로우 데이터와 연락처 정보를 바탕으로 답장, 요약, 문장 다듬기, 구조화된 답변을 만들 수 있어요.
- 다국어 자동화: 연락처가 쓰는 언어에 맞춰 답변을 만들면서, 시스템 프롬프트로 브랜드 말투를 일정하게 유지할 수 있어요.
- 이미지 이해: 워크플로우 단계에서 영수증, 신분증, 스크린샷, 명함, 문서 같은 이미지 입력을 분석할 수 있어요.
- 의미 기반 매칭: 텍스트를 임베딩으로 바꿔 의미를 비교할 수 있어요. 질문을 FAQ나 저장된 콘텐츠와 맞춰 보기 쉬워요.
- 워크플로우 변수로 활용: Mistral 결과를 메시지, 내부 알림, 필드 업데이트, 조건 분기 같은 뒤 단계에서 변수로 쓸 수 있어요.
- 모델 선택 가능: 품질, 속도, 추론, 비용 등 워크플로우에 맞는 Mistral 모델 계열을 고를 수 있어요.

## Mistral AI 계정 연결하기

Mistral AI 액션을 쓰려면 먼저 내 Mistral API 키로 연동을 연결해야 해요. 이 연결로 워크플로우가 프롬프트, 텍스트, 이미지 입력을 Mistral에 안전하게 보내고, 응답을 워크플로우 데이터로 받아요.

**자동화 > 워크플로우**를 열고 Mistral AI 액션이나 트리거를 추가하세요.(아래 참고 안내에는 Mistral AI에 워크플로우 트리거가 없다고 나와요.)

- 아직 연결하지 않았다면 **Connect Now**(지금 연결)를 클릭하고 Mistral AI에 로그인해 접근을 승인하세요.
- 이미 연결했다면 단계의 필드가 바로 불러와져요.

![Mistral AI 단계에서 연결 상태를 확인하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071191609/original/t_fMXiqemwkVASAk3DZTsXqqzrO0nK_nXA.png?1778643374)

다른 경로로는 서브 계정에서 **설정 > 연동 > Mistral AI > 연결**로 이동하면 돼요.

![설정의 연동에서 Mistral AI를 연결하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071191631/original/XsTfHoeZInEplWbauqH2vvApap73xAxoSw.png?1778643468)

## 사용할 수 있는 Mistral AI 액션

Mistral AI 액션은 하이퍼클래스 트리거로 자동화가 시작된 뒤 워크플로우 안에서 실행돼요. 액션마다 텍스트 생성, 임베딩 생성, 이미지 분석처럼 맡는 AI 작업이 달라요. 원하는 결과가 나오도록 알맞은 액션을 고르세요.

| 액션 | 설명 | 주요 기능 |
| --- | --- | --- |
| **Create Chat Completion**(채팅 응답 생성) | Mistral 언어 모델로 대화형 응답을 만들어요. | 프롬프트와 시스템 프롬프트 설정, 모델 선택, 출력을 조절하는 기본 튜닝 파라미터를 지원해요. |
| **Create Embeddings**(임베딩 생성) | `mistral-embed`로 텍스트를 숫자 벡터로 바꿔요. | 의미 검색, RAG, 분류, 클러스터링에 알맞아요. |
| **Analyze Image (Vision)**(이미지 분석) | Mistral의 비전 지원 모델로 이미지를 하나 이상 분석해요. | Pixtral Large, Pixtral 12B, Mistral Large/Medium/Small 같은 모델을 지원해요. 구조화된 자연어 응답을 돌려줘요. |

{% hint style="info" %}
현재 Mistral AI에는 워크플로우 트리거가 없어요. 워크플로우를 시작할 때는 **Customer Replied**(고객 답장), **Form Submitted**(폼 제출), **Inbound Webhook**(수신 웹훅), **Opportunity Status Changed**(기회 상태 변경) 같은 기본 하이퍼클래스 트리거를 쓰세요. 그런 다음 Mistral AI 액션을 워크플로우 단계로 추가하세요.
{% endhint %}

### Create Chat Completion

**Create Chat Completion**은 Mistral 언어 모델로 대화형 응답을 만드는 액션이에요. 고객 답장 초안 작성, 메시지 요약, 내용 다듬기, 요청 분류, 워크플로우 데이터를 활용한 구조화된 응답 생성에 쓰기 좋아요.

주요 기능은 다음과 같아요.

- **Prompt**(프롬프트)와 **System Prompt**(시스템 프롬프트)를 모두 설정할 수 있어요.
- Large, Medium, Small, Ministral 8B/3B 같은 모델 중에서 고를 수 있어요.
- 응답의 스타일, 길이, 동작을 조절하는 기본 튜닝 파라미터가 있어요.

자주 쓰는 필드는 다음과 같아요.

- **Action Name**(액션 이름): “고객 답장 초안 작성”, “폼 제출 내용 요약”처럼 알아보기 쉬운 이름을 붙여요.
- **System Prompt**: AI의 역할, 말투, 규칙, 형식 기준을 정해요.
- **Prompt**: 모델이 수행할 구체적인 작업을 입력해요. 프롬프트에는 워크플로우 변수를 넣을 수 있어요.
- **Model**(모델): 워크플로우에 가장 알맞은 Mistral 모델을 선택해요.
- **Tuning Parameters**(튜닝 파라미터): 원하는 응답 스타일과 길이에 맞게 출력 조절 값을 바꿔요.

### Create Embeddings

**Create Embeddings**는 `mistral-embed`로 텍스트를 숫자 벡터로 바꾸는 액션이에요. 임베딩을 쓰면 텍스트의 의미를 비교할 수 있어요. 질문을 맞춰 보거나, 콘텐츠를 분류하거나, 고급 검색을 구현하는 워크플로우에 유용해요.

이런 경우에 알맞아요.

- 의미 검색: 정확한 키워드가 아니라 의미를 기준으로 텍스트를 찾아요.
- RAG: 응답을 만들기 전에 관련 정보를 먼저 가져와요.
- 분류: 텍스트의 의미에 따라 묶거나 라벨을 붙여요.
- 클러스터링: 비슷한 텍스트끼리 모아 정리해요.

### Analyze Image (Vision)

**Analyze Image (Vision)**은 Mistral의 비전 지원 모델로 이미지를 하나 이상 분석하는 액션이에요. 영수증, 신분증, 스크린샷, 명함, 업로드한 문서, 폼 첨부파일처럼 중요한 정보가 이미지에 들어 있을 때 쓰기 좋아요.

지원하는 모델 예시는 다음과 같아요.

- Pixtral Large
- Pixtral 12B
- Mistral Large
- Mistral Medium
- Mistral Small

## 워크플로우에서 Mistral AI 출력 활용하기

Mistral AI 액션이 실행되면 그 출력이 워크플로우 변수가 돼요. 뒤에 오는 단계에서는 도구 사이에 데이터를 직접 복사하지 않고도 생성된 응답, 임베딩, 이미지 분석 결과를 쓸 수 있어요.

자주 쓰는 방법은 다음과 같아요.

- **Create Chat Completion** 응답을 **Send SMS**, **Send Email**, **Internal Notification** 단계에 넣어요.
- 생성된 텍스트를 연락처 커스텀 필드나 메모에 저장해요.
- 영수증, 신분증, 업로드한 문서에서 세부 정보를 추출한 뒤, **Analyze Image (Vision)** 출력으로 레코드를 업데이트해요.
- **If/Else**(조건 분기) 단계에서 Mistral 출력을 평가해, 모델의 응답에 따라 연락처를 다른 경로로 보내요.
- 임베딩 출력을 웹훅이나 커스텀 연동을 통해 외부 벡터 검색 시스템에 전달해요.

## 요금, 베타 상태, 제한

요금과 제한이 어떻게 적용되는지 알아 두면 안전하게 테스트하고, 예상치 못한 워크플로우 동작을 줄일 수 있어요. Mistral 사용량과 하이퍼클래스 워크플로우 실행은 따로 처리돼요. 대규모로 쓰기 전에 둘 다 고려하세요.

핵심 내용은 다음과 같아요.

- Mistral은 API와 모델 사용 요금을 내 Mistral 워크스페이스에서 직접 청구해요.
- Mistral AI 워크플로우 액션은 하이퍼클래스의 프리미엄 액션이에요. 실행할 때 프리미엄 액션 크레딧이 차감될 수 있어요.
- Mistral의 요청 제한과 할당량은 내 Mistral 워크스페이스에서 관리해요.
- Mistral 무료 요금제는 유료 요금제보다 사용 제한이 더 엄격할 수 있어요.
- API 키는 Mistral 워크스페이스에 연결돼 있어요. 워크스페이스를 바꾸면 새 키를 만들어 연동을 다시 연결하세요.
- Mistral AI 액션은 베타라서 사용할 수 있는 모델, 필드, 동작이 시간이 지나며 바뀔 수 있어요.

## 워크플로우에 Mistral AI 설정하기

연동을 연결하고, 알맞은 Mistral 액션을 고르고, 입력을 매핑하고, 액션을 테스트한 뒤, 뒤 단계에서 출력을 쓸 수 있는지 확인하는 순서로 설정해요. 게시하기 전에 샘플 데이터로 테스트하면 프롬프트, 이미지 URL, 출력 변수가 의도대로 동작하는지 확인할 수 있어요.

1. **자동화 > 워크플로우**로 이동해 **+ New Workflow**(+ 새 워크플로우)를 클릭하거나 기존 워크플로우를 열어요.

   ![자동화의 워크플로우에서 새 워크플로우를 만드는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071337530/original/b7pTvpP1TEW9JAyeoKZKkpEhCmyLJ-O2mQ.png?1778766960)
2. 워크플로우에 **Mistral AI** 단계를 추가하고 **Connect Now**를 클릭하세요. 또는 **설정 > 연동 > Mistral AI > 연결**로 이동해 OAuth로 승인하세요.

   ![Mistral AI 단계에서 연결을 시작하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071337569/original/nlFClRWGevTwY7O2E3s-vVVHIV_xCDYAwg.png?1778766983)
3. 하이퍼클래스 워크플로우에서 **Mistral AI** 액션으로 작업을 실행해요. 사용할 액션을 선택하세요.
   - 텍스트를 생성하려면 **Create Chat Completion**을 선택하세요.
   - 의미 매칭이나 벡터 출력이 필요하면 **Create Embeddings**를 선택하세요.
   - 이미지를 분석하려면 **Analyze Image (Vision)**을 선택하세요.

   ![Mistral AI 액션 목록에서 액션을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071337765/original/1cB6wnkrfxLA-LOxBNM0nmFj0ydYbARTAQ.png?1778767097)
4. 프롬프트, 텍스트 입력, 이미지 URL, 모델, 선택 튜닝 설정 같은 액션 필드를 설정하세요. 필요한 곳에는 워크플로우 변수를 넣어 액션을 맞춤 설정하세요.
5. **Send SMS**, **Send Email**, **Update Contact Field**, **Custom Webhook**(커스텀 웹훅), **If/Else** 같은 다음 단계를 추가하세요. 뒤 단계에 Mistral 출력 변수를 넣으세요.
6. 테스트하고 확인하세요.
   - 트리거 경로: Mistral AI 범위 안에서 작은 테스트 이벤트를 만드세요.
   - 액션 경로: 테스트 레코드로 워크플로우를 실행하세요.
   - **Run Logs**(실행 로그) / **Enrollment History**(등록 기록)에서 입력, 출력, 반환된 ID를 확인하세요. 매핑이나 권한 문제가 있으면 고치세요.
7. 워크플로우에서 **Publish**(게시)를 클릭한 뒤 동작을 모니터링하세요.

## 활용 사례

Mistral AI 액션은 간단한 고객 응대 자동화부터 고급 데이터 처리 워크플로우까지 쓸 수 있어요. 아래 예시는 각 액션을 실제 워크플로우에 어떻게 넣는지 보여 줘요.

### 1. 다국어 고객 답장 만들기

수신 메시지 → **Create Chat Completion** → **Send Email**/**Send SMS**

- 연락처가 지원되는 언어로 답장하면 워크플로우가 시작되도록 해요. 프랑스어, 영어, 스페인어, 독일어, 이탈리아어, 포르투갈어는 원어민 수준으로 지원해요. 네덜란드어, 일본어, 한국어, 중국어, 아랍어 등도 폭넓게 지원해요.
- 품질 높은 원어민 수준의 다국어 응답이 필요하면 Mistral Large를 사용하세요.
- 시스템 프롬프트로 브랜드 말투를 유지하고, 연락처 변수로 내용을 맞춤 설정하세요.

### 2. 수신 질문과 FAQ를 의미로 매칭하기

수신 이메일 또는 **Customer Replied** → **Create Embeddings** → 벡터 조회 → 템플릿 답장 보내기

- 수신 질문을 임베딩해서 미리 임베딩해 둔 FAQ 항목과 비교하고, 가장 가까운 항목으로 답장해요.
- 표현이 바뀐 질문도 키워드 매칭처럼 쉽게 깨지지 않고 처리해요.
- 같은 임베딩 액션을 설정 단계에서 한 번 실행해 FAQ 콘텐츠를 색인하세요.

### 3. 이미지에서 영수증과 문서 정보 추출하기

**Inbound Webhook** → 이미지 업로드(폼 또는 수신 MMS) → **Analyze Image (Vision)** → 연락처 업데이트 → **Create Opportunity**(기회 만들기)

- 영수증, 신분증, 사진을 Pixtral Large에 보내면서 구조화된 프롬프트를 쓰세요. 예를 들면 "거래처, 날짜, 합계를 JSON으로 반환해 줘"처럼요.
- 수동 입력 없이 커스텀 필드를 자동으로 채워요.
- 파손 사진, 신분증, 명함 등 이미지로 들어오는 모든 접수 흐름에 쓸 수 있어요.

## 자주 묻는 질문

### Mistral AI가 무엇인가요?

Mistral AI는 오픈 웨이트와 최첨단 언어·비전 모델을 개발하는 AI 연구소예요. 이 연동을 쓰면 워크플로우가 내 API 키로 해당 모델에 직접, 관리된 방식으로 접근할 수 있어요.

### 모델 드롭다운에서 어떤 Mistral 모델을 쓸 수 있나요?

Mistral Large, Medium, Small, Ministral, Magistral 계열 모델을 쓸 수 있어요. Mistral이 이전 버전을 종료하고 새 모델을 내놓을 때마다 목록이 주기적으로 갱신돼요.

### Mistral 계정이 따로 필요한가요?

네. console.mistral.ai에서 직접 API 키를 발급받아 사용하세요. 추론 요금은 계정 요금제와 선택한 모델에 따라 Mistral이 직접 청구해요.

### Mistral AI 액션은 프리미엄 워크플로우 액션인가요?

네. 세 가지 액션 모두 Mistral 사용 요금과 별개로, 표준 자동화 요율로 프리미엄 액션 크레딧이 차감돼요.

### 프롬프트에 워크플로우 변수를 쓸 수 있나요?

네. **System Prompt**와 **Prompt** 모두 연락처 필드, 커스텀 필드, 트리거 페이로드 값, 앞 단계의 출력 같은 변수를 넣을 수 있어요.

### AI가 생성한 응답은 어디에 저장되나요?

액션의 워크플로우 출력 변수로 제공돼요. 메시지에 쓰거나, 커스텀 필드에 기록하거나, 뒤 단계로 넘길 수 있어요. 기본적으로는 별도 레코드로 저장되지 않아요.

### 생성된 응답을 SMS나 이메일 메시지에 쓸 수 있나요?

네. 출력 변수를 **Send SMS**, **Send Email**, 내부 알림 등 모든 메시지 액션에 넣을 수 있어요.

### 임베딩 출력 차원은 얼마인가요?

1024차원이에요. 이 벡터는 주요 벡터 데이터베이스에서 그대로 쓸 수 있어요. 벡터 저장소에 기록하는 웹훅 액션으로 넘기세요.

### Analyze Image는 어떤 이미지 형식을 지원하나요?

직접 URL로 접근하는 표준 PNG와 JPEG를 지원해요. **미디어 저장소**에 저장한 이미지도 파일 URL로 참조하면 쓸 수 있어요. 이미지는 기본 비전 모델이 원본 해상도로 처리해요.

### 이 액션들을 실제 운영에 써도 되나요?

세 가지 액션 모두 베타로 출시됐어요. 실제 운영 중인 워크플로우에 써도 안전해요. 다만 베타를 벗어나는 과정에서 드롭다운에 모델이 추가되는 등 사용 화면이 조금씩 바뀔 수 있어요.(앞부분에는 고객에게 나가는 자동화에 쓰기 전에 먼저 테스트하라고 나와요.)
