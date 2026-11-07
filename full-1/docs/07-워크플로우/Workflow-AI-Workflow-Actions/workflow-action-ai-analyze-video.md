---
원문: https://help.gohighlevel.com/support/solutions/articles/155000009515-ai-analyze-video
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — AI Analyze Video(AI 동영상 분석)

**AI Analyze Video**(AI 동영상 분석) 액션은 Google Gemini로 동영상을 분석해 텍스트 결과를 만들어 줘요. 공개 동영상 URL과 프롬프트를 넣으면 동영상 요약, 음성 받아쓰기, 화면 속 대상 파악, 타임스탬프 추출을 할 수 있어요. 분석 결과는 이후 액션에서 그대로 쓸 수 있어서, 영상을 일일이 확인하지 않고도 작업을 자동화할 수 있어요.

## AI Analyze Video를 쓰면 좋은 점

AI Analyze Video는 동영상 콘텐츠를 워크플로우에서 자동으로 처리할 수 있는 정보로 바꿔 줘요.

- 자동 동영상 분석: 영상을 하나하나 보지 않아도 분석할 수 있어요.
- 화면과 음성 이해: 영상 속 사물, 장면, 말한 내용, 중요한 순간을 파악해요.
- 자유로운 분석 프롬프트: 요약, 스크립트, 타임스탬프, 특정 질문에 대한 답을 만들 수 있어요.
- 동적 동영상 입력: 폼, 웹훅, 커스텀 값, 이전 액션에서 받은 URL을 쓸 수 있어요.
- 워크플로우 연계: 분석 결과를 연락처 필드, 이메일, 알림, 조건 분기 액션에 활용할 수 있어요.
- AI 동영상 생성 연계: AI로 만든 동영상을 고객에게 보여 주는 워크플로우에 쓰기 전에 먼저 분석해 볼 수 있어요.

## 지원하는 AI 모델

AI Analyze Video에서는 Google Gemini 모델 두 가지를 쓸 수 있어요. 분석 목적에 맞는 모델을 고르세요.

| 모델 | 설명 |
| --- | --- |
| Gemini 3.8 Flash | 기본 모델 |
| Gemini 3.5 Flash Lite | 대체 모델 |

{% hint style="info" %}
같은 동영상으로 두 모델을 모두 테스트해서 응답을 비교해 보세요.
{% endhint %}

## 지원하는 동영상 URL과 형식

공개로 접근할 수 있는 동영상 URL이 필요해요. YouTube 동영상과 동영상 파일 직접 링크를 쓸 수 있어요.

| 출처 | 지원 형식 |
| --- | --- |
| YouTube | 일반 시청 링크, `youtu.be`, Shorts |
| 동영상 파일 직접 링크 | MP4, MOV, WebM, MPEG, FLV, WMV, 3GP |
| 동적 URL | 폼, 웹훅, 이전 액션에서 가져온 커스텀 값 |

{% hint style="warning" %}
- 동영상 URL은 공개 상태여야 하고, 인증 없이 접근할 수 있어야 해요.
- Vimeo와 TikTok의 웹페이지 링크는 지원하지 않아요.
- 일반 웹페이지 주소를 넣으면 정확하지 않은 응답이 나올 수 있어요. 올바른 동영상 URL을 쓰세요.
{% endhint %}

## 분석 프롬프트와 응답 결과

**Analysis Prompt**(분석 프롬프트)는 Gemini가 동영상에서 무엇을 뽑아낼지 정해요. 지시를 분명하게 쓸수록 이후 액션에서 안정적으로 쓸 수 있는 결과가 나와요.

프롬프트 예시:

- 요약: "이 동영상에서 다룬 주요 주제를 요약해 주세요."
- 음성 받아쓰기: "동영상 속 모든 대화를 일반 텍스트로 받아 적어 주세요."
- 시각 분석: "이 동영상에 보이는 사물을 나열해 주세요."
- 타임스탬프: "중요한 장면과 해당 타임스탬프를 알려 주세요."
- 콘텐츠 확인: "이 동영상에 제품 시연이 포함되어 있나요? YES 또는 NO로 답해 주세요."

### 응답 결과 사용하기

동영상 처리가 끝나면 액션이 **Response**(응답)라는 텍스트 결과를 돌려줘요. 아래 경로에서 가져올 수 있어요.

**Previous steps > AI analyze video > Response**

이 결과로 연락처 필드를 업데이트하거나, 알림을 보내거나, 이메일 내용을 채우거나, [If/Else](../Internal-Tools-Workflow-Actions/workflow-action-if-else.md) 조건을 설정할 수 있어요.

{% hint style="info" %}
조건 분기가 있는 워크플로우라면 YES, NO, UNCERTAIN처럼 일정한 형태로 답하도록 요청하세요. 예상하지 못한 결과에 대비한 대체 경로도 함께 만들어 두세요.
{% endhint %}

## AI Analyze Video 액션 설정하기

설정을 제대로 해 두면 액션이 동영상에 접근해 원하는 내용을 분석하고, 결과를 이후 단계로 넘길 수 있어요.

### 1단계: 액션 추가하기

1. **자동화 > 워크플로우**로 이동하세요.
2. 워크플로우를 열거나 새로 만드세요.
3. **+** 아이콘을 클릭해 액션을 추가하세요.
4. **AI Actions**(AI 액션)에서 **AI analyze video**(AI 동영상 분석)를 선택하세요.

   ![AI Actions에서 AI analyze video 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084936681/original/FvB1S0WHSmHIBmcBjXrWchdOamwusHgOHA.png?1793794641)

### 2단계: AI 모델 선택하기

**Model**(모델) 드롭다운에서 **Gemini 3.8 Flash**(기본값) 또는 **Gemini 3.5 Flash Lite**를 선택하세요.

![Model 드롭다운에서 AI 모델 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084936723/original/gxB4cpsOYEuAi8Dik2BlLixXMBgQzERhdA.png?1793794679)

### 3단계: 동영상 URL 입력하기

**Video**(동영상) 필드에 공개 동영상 URL을 입력하거나, 이전 워크플로우 단계의 커스텀 값을 넣으세요. 예를 들어 [AI Video Generation](workflow-action-ai-video-generation.md) 액션이 만든 동영상 URL을 선택할 수 있어요.

### 4단계: 분석 프롬프트 작성하기

**Analysis Prompt**(분석 프롬프트) 필드에 Gemini가 분석할 내용을 지시문으로 입력하세요.

예시:

"이 동영상을 세 가지 항목으로 요약하고, 중요한 장면에는 타임스탬프를 넣어 주세요."

![분석 프롬프트 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084936963/original/SB62_5xiXvOtiQWo1AUO26QCFExPcs8YXg.png?1793794760)

### 5단계: 액션 테스트하기 (선택)

1. **Test** 탭을 여세요.
2. 입력값을 확인하세요.
3. **Test Action**(액션 테스트)을 클릭하세요.
4. **Output**(출력) 아래에 생성된 **Response**를 확인하세요.

   ![테스트 실행 후 Output에서 Response 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084937730/original/AbFKcg2lS4fzTC_-fCnJDwAEdqB-XHDNXg.gif?1793795076)
5. 필요하면 프롬프트를 수정하세요.

{% hint style="info" %}
테스트 실행도 비용이 발생해요.
{% endhint %}

### 6단계: 저장하고 응답 사용하기

1. **Save action**(액션 저장)을 클릭하세요.
2. 이어서 실행할 워크플로우 액션을 추가하세요.
3. 사용할 수 있는 필드에 **Previous steps > AI analyze video > Response**를 넣으세요. 예를 들어 [Update Contact Field](../workflow-action-update-contact-field-date-type-field.md) 액션의 값 필드에 넣을 수 있어요.
4. 워크플로우를 저장하고 게시하세요.

## 알아 두면 좋은 점과 제한 사항

아래 내용을 미리 알아 두면 실행 실패나 예상 밖의 결과를 줄일 수 있어요.

- 프리미엄 요금: 실행할 때마다 추가 요금이 발생해요. 요금은 AI 모델, 동영상 길이, 응답 길이에 따라 달라질 수 있어요.
- 공개 URL: 로그인 없이 접근할 수 있는 동영상이어야 해요.
- 처리 시간: 용량이 큰 동영상은 처리 시간이 오래 걸리거나 시간 초과로 실패할 수 있어요.
- 실패한 액션 재시도: 일시적인 가져오기 시간 초과는 액션을 다시 실행하면 해결될 수 있어요.
- 응답 서식: Gemini가 마크다운 형식으로 답할 수 있어요. 필요하면 프롬프트에 일반 텍스트로 달라고 요청하세요.
- AI 정확도: 응답에 오류가 있을 수 있어요. 중요한 결정에 쓰기 전에 핵심 내용은 직접 확인하세요.

### 자주 겪는 문제 해결

| 문제 | 해결 방법 |
| --- | --- |
| 동영상 URL이 차단됨 | 공개 YouTube URL이나 동영상 파일 직접 링크를 쓰세요. |
| 잘못되었거나 접근할 수 없는 URL | 인증 없이 동영상이 열리는지 확인하세요. |
| 처리 시간 초과 | 액션을 다시 실행하거나 더 작은 동영상을 쓰세요. |
| 부정확한 응답 | URL을 확인하고 프롬프트를 더 구체적으로 고쳐 보세요. |
| 원치 않는 마크다운 서식 | 분석 프롬프트에 일반 텍스트로 답해 달라고 요청하세요. |

요금 정보는 [AI 상품 요금](../../13-AI-Employee/ai-product-pricing-update.md) 문서를 참고하세요.

## 자주 묻는 질문

### 한 워크플로우에서 서로 다른 동영상을 분석할 수 있나요?
네. AI Analyze Video 액션을 여러 개 추가하고, 액션마다 동영상 URL을 따로 설정하세요.

### 연락처마다 다른 동영상 URL을 쓸 수 있나요?
네. 커스텀 값을 사용하면 폼, 웹훅, 이전 워크플로우 액션에서 동영상 URL을 동적으로 가져올 수 있어요. 웹훅으로 데이터를 받는 방법은 [Inbound Webhook 프리미엄 트리거 사용 방법](../빌더/how-to-use-the-inbound-webhook-workflow-premium-trigger.md) 문서를 참고하세요.

### 소리가 없는 동영상도 분석할 수 있나요?
네. 음성이 없어도 Gemini가 화면 내용을 분석할 수 있어요.

### 응답을 If/Else 조건에 쓸 수 있나요?
네. YES 또는 NO처럼 일정한 형태로 답하도록 요청하고, 그에 맞춰 뒤따르는 조건을 설정하세요.

### AI Analyze Video로 자막을 만들 수 있나요?
타임스탬프가 포함된 스크립트는 요청할 수 있어요. 다만 이 액션은 텍스트를 돌려줄 뿐, 자막 전용 파일을 만들어 주지는 않아요.

### 동영상에 접근할 수 없으면 어떻게 되나요?
액션이 실패하거나 정확하지 않은 응답이 나올 수 있어요. URL이 공개로 접근할 수 있는 동영상을 가리키는지 확인하세요.
