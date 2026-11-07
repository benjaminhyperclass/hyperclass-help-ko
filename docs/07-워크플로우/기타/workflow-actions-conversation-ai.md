---
원문: /support/solutions/articles/155000001358-workflow-actions-conversation-ai
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Conversation AI(대화 AI)

**Conversation AI**(대화 AI) 액션을 쓰면 워크플로우 안에서 AI 대화를 시작하고, 연락처의 답장을 기다린 뒤, 설정한 분기와 조건에 따라 연락처를 다음 경로로 보낼 수 있어요. 질문, 응답 타이밍, 채널, AI 지침, 응답 한도, 대체 경로를 액션 하나에서 모두 설정해요. 이 문서에서는 액션이 어떻게 동작하는지, 각 설정이 무엇을 조절하는지, 하이퍼클래스에서 어떻게 설정하고 테스트하는지 안내해요.

이 문서에서 다루는 내용은 다음과 같아요.
- 액션이 연락처와 어떻게 대화하는지
- 프롬프트와 응답 설정 방법
- **Time Out**(시간 초과)과 **No Condition Met**(조건 불일치) 경로가 동작하는 방식
- 게시하기 전에 워크플로우를 테스트하는 방법

{% hint style="warning" %}
현재 이 워크플로우 액션에서 선택할 수 있는 채널은 SMS, Facebook, Instagram, WhatsApp, Live Chat(실시간 채팅)이에요. 플랫폼의 다른 곳에서는 대화 AI가 더 많은 채널을 지원할 수 있어요. 하지만 봇 차원에서 지원하는 채널이라고 해서 이 워크플로우 액션에서도 자동으로 선택할 수 있는 것은 아니에요.
{% endhint %}

## Conversation AI 액션이란?

**Conversation AI** 액션은 워크플로우에 AI 대화 단계를 추가해요. 설정한 질문을 연락처에게 보내고, 답장을 기다리고, 액션 설정에 따라 AI 대화를 이어 가요. 그리고 연락처를 워크플로우의 여러 경로 중 하나로 보내요.

AI는 설정한 **Personality**(성격), **Additional Instructions**(추가 지시사항), **Question**(질문), 봇 학습 내용, 대화 기록을 바탕으로 상황에 맞게 답해요.

분기를 쓰면 연락처의 답장에 따라 워크플로우가 다르게 움직여요. 답장이 없거나 어떤 조건에도 맞지 않는 경우는 기본으로 들어 있는 대체 경로가 처리해요.

### Conversation AI 액션의 장점

AI 대화와 워크플로우 분기를 함께 쓰면 연락처의 답장을 일일이 직접 처리하지 않아도 자격 확인, 후속 연락, 의사 결정을 자동화할 수 있어요.

- 맞춤 연락: 특정 질문을 보내고, 연락처가 답할 때까지 기다린 뒤 워크플로우를 이어 가요.
- 여러 번 오가는 AI 대화: 설정한 Bot responses limit(봇 응답 한도)까지 액션 안에서 AI가 계속 답할 수 있어요.
- 스마트 라우팅: 연락처의 답장을 분기와 조건에 비춰 보고 다음 경로를 정해요.
- 맥락을 반영한 응답: 봇 설정, 학습 내용, 지침, 질문, 대화 맥락을 바탕으로 답해요.
- 응답 제어: 시간 초과, 대기 시간, 응답 한도, Skip if answered(답변했으면 건너뛰기) 동작을 설정해요.
- 채널 선택: 액션 하나에서 지원되는 채널 중 하나를 골라 실행해요.

### Conversation AI 액션의 동작 방식

액션이 진행되는 순서를 알면 시간 초과, 응답 한도, 분기 조건을 알맞게 정하기 쉬워요. AI 대화가 진행되는 동안 연락처는 액션 안에 머물러요. 설정한 결과 중 하나에 도달하면 다음 경로로 이동해요.

| 단계 | 일어나는 일 |
| --- | --- |
| 1. 액션 시작 | 워크플로우가 Conversation AI 액션에 도달하면 선택한 채널로 설정한 Question을 보내요. |
| 2. 연락처 답장 | 설정한 Timeout(답장 대기 시간)에 따라 연락처의 답장을 기다려요. |
| 3. AI가 대화 평가 | AI가 액션과 봇의 맥락을 바탕으로 답하고, 설정한 분기 조건을 충족했는지 확인해요. |
| 4. 필요하면 대화 계속 | 분기가 일치하거나, 연락처가 시간 초과되거나, Bot responses limit에 도달할 때까지 AI가 대화를 이어 갈 수 있어요. |
| 5. 연락처 라우팅 | 일치하는 커스텀 분기, **Time Out**, **No Condition Met** 중 하나로 워크플로우가 이어져요. |

### Conversation AI 설정 항목

설정마다 대화 흐름의 다른 부분을 조절해요. 분기 로직을 만들기 전에 이 항목들을 먼저 살펴보면, 불필요한 메시지나 너무 이른 시간 초과, 연락처가 엉뚱한 대체 경로로 가는 일을 막을 수 있어요.

| 설정 | 용도 |
| --- | --- |
| **Advanced Bot Configuration**(고급 봇 설정) | 이 워크플로우 액션에서만 봇의 기본 Personality와 Additional Instructions를 덮어써요. |
| **Personality** | Advanced Bot Configuration을 켰을 때, AI가 대화에서 쓸 어조나 스타일을 정해요. |
| **Additional Instructions** | 이 워크플로우에 맞는 목표, 의도, 안내 사항을 AI에게 추가로 알려요. |
| **Question** | Conversation AI 대화를 시작하는 메시지나 질문을 정해요. 커스텀 값을 쓸 수 있어요. |
| **Timeout**(답장 대기 시간) | 연락처의 답장을 얼마나 기다린 뒤 **Time Out** 경로로 보낼지 정해요. 분, 시간, 일 단위로 설정할 수 있어요. |
| **Channel**(채널) | 액션이 사용할 커뮤니케이션 채널을 골라요. 현재 선택할 수 있는 채널은 SMS, Facebook, Instagram, WhatsApp, Live Chat이에요. |
| **Skip if answered** | 질문에 이미 직접 답한 경우 액션을 건너뛰어요. 불필요한 AI 연락을 막는 데 도움이 돼요. |
| **Bot responses limit** | 일치하는 분기 조건이 없을 때, **No Condition Met**으로 보내기 전까지 이 액션이 보낼 수 있는 AI 메시지 수를 제한해요. |
| **Wait time in seconds**(대기 시간(초)) | AI가 답하기 전에 지연 시간을 둬요. 그동안 들어온 메시지를 모아서 다음 AI 답변을 만들어요. |
| **Branches & Conditions**(분기 및 조건) | 연락처의 답장을 평가한 뒤 워크플로우가 어디로 이어질지 정해요. |

{% hint style="info" %}
Bot responses limit과 봇 단위 메시지 한도는 서로 달라요. 여기서 설정하는 Bot responses limit은 이 워크플로우 액션에만 적용돼요. 대화 AI 봇에는 워크플로우 밖에서 설정하는 더 넓은 범위의 메시지 한도도 있어요. 이 두 가지는 별개의 설정으로 보세요.
{% endhint %}

## 시작하기 전에

대화 AI 워크플로우가 잘 동작하려면 워크플로우 구조와 봇 설정이 모두 알맞아야 해요. 액션을 설정하기 전에 워크플로우 진입점, 커뮤니케이션 채널, 원하는 분기 결과를 확인하세요.

- 해당 **서브 계정**에서 **자동화 > 워크플로우**를 여세요.
- AI 대화를 넣을 워크플로우를 새로 만들거나 기존 워크플로우를 여세요.
- 사용 목적에 맞는 워크플로우 트리거를 설정하세요. **Customer Replied**(고객 답장)는 예시일 뿐이며, 모든 대화 AI 워크플로우에 꼭 필요한 것은 아니에요.
- 사용하려는 커뮤니케이션 채널을 워크플로우와 봇 설정에서 쓸 수 있는지 확인하세요.
- 분기 조건을 쓰기 전에, 각 커스텀 분기가 어떤 응답이나 의도를 나타낼지 정하세요.
- 연락처가 답장하지 않을 때, 또는 커스텀 조건에 하나도 맞지 않을 때 어떻게 할지 계획하세요.

## Conversation AI 액션 설정하기

AI가 알맞은 지침을 받고, 적당한 시간 동안 기다리고, 대화가 끝난 뒤 연락처를 예측 가능하게 보내도록 단계별로 설정하세요.

### 1단계: 워크플로우 열기

1. 해당 서브 계정에 로그인하세요.
2. **자동화 > 워크플로우**로 이동하세요.

![자동화 메뉴에서 워크플로우를 선택한 화면](https://jumpshare.com/share/Cnveqtr2TxPJeI2Wif1E+/Screen+Shot+2026-01-05+at+6.02.58+PM.png)

3. 새 워크플로우를 만들거나 수정할 기존 워크플로우를 여세요.

![워크플로우를 만들거나 열 수 있는 워크플로우 목록 화면](https://jumpshare.com/share/vy9UlWTok3ZfxkZZpVLC+/Screen+Shot+2026-01-05+at+6.04.41+PM.png)

### 2단계: 워크플로우 진입점 설정하기

연락처를 워크플로우에 들어오게 할 트리거를 추가하거나 확인하세요. 알맞은 트리거는 자동화 목적에 따라 달라요. 예를 들어 들어오는 메시지에 답하는 워크플로우라면 **Customer Replied** 트리거와 **Reply Channel**(답장 채널) 필터를 쓸 수 있어요.

![워크플로우 빌더에서 트리거를 추가하고 설정하는 모습](https://jumpshare.com/share/bfCBKfEABQ5tgCPZfvmk+/GIF+Recording+2026-01-05+at+6.09.00+PM.gif)

### 3단계: Conversation AI 액션 추가하기

1. 액션을 추가할 위치에서 **+** 아이콘을 클릭하세요.
2. **Conversation AI**를 검색하세요.
3. **Conversation AI** 액션을 선택하세요.
4. 워크플로우 캔버스에서 용도를 쉽게 알 수 있도록 액션 이름을 알아보기 쉽게 지정하세요.

![워크플로우 액션 메뉴에서 Conversation AI를 선택하는 모습](https://jumpshare.com/share/bF6jf5XN5BBWxB30m7Tv+/GIF+Recording+2026-01-05+at+6.10.58+PM.gif)

### 4단계: AI 지침 설정하기

이 액션에서 봇의 기본 대화 지침을 덮어쓰려면 **Advanced Bot Configuration**을 켜세요.

- **Personality**: 이 액션에서 쓸 어조와 소통 스타일을 정해요.
- **Additional Instructions**: AI가 따를 목표, 의도, 구체적인 안내를 입력해요. Advanced Bot Configuration을 켜지 않으면 액션은 봇의 기존 설정을 그대로 써요.

![Advanced Bot Configuration이 보이는 Conversation AI 액션 화면](https://jumpshare.com/share/Qm7f7HSl3RIU1Y2DOOXN+/Screen+Shot+2026-01-05+at+6.13.16+PM.png)

**Question**에는 대화를 시작할 메시지나 질문을 입력하세요. 메시지에 연락처별 정보나 워크플로우별 정보가 필요하면 커스텀 값을 쓰세요.

![커스텀 값 컨트롤이 있는 Conversation AI의 Question 입력란](https://jumpshare.com/share/LJfRkkxyunVJWekHEvjX+/Screen+Shot+2026-01-05+at+6.18.07+PM.png)

### 5단계: Timeout과 Channel 설정하기

**Timeout**으로 연락처의 답장을 얼마나 기다릴지 정하세요. 분, 시간, 일 중 알맞은 단위를 고르세요.

![Conversation AI 워크플로우 액션의 Timeout 설정 화면](https://jumpshare.com/share/Iyf2Vr0lac1J5m629Iv7+/Screen+Shot+2026-01-05+at+6.40.18+PM.png)

액션에 사용할 **Channel**을 하나 선택하세요. 현재 선택할 수 있는 채널은 다음과 같아요.

- SMS
- Facebook
- Instagram
- WhatsApp
- Live Chat

![지원되는 채널 옵션이 보이는 Conversation AI 워크플로우 액션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155061913669/original/elqM3Z7dxdMtcPTx0vnTsHFZbE_K-o6c-g.png?1767618785)

### 6단계: 대화 제어 설정하기

질문에 이미 직접 답한 경우 액션을 건너뛰게 하려면 **Skip if answered**를 켜세요.

![Skip if answered가 보이는 Conversation AI 워크플로우 액션 화면](https://jumpshare.com/share/rKvHTow1Nfkccibd9KcA+/Screen+Shot+2026-01-05+at+6.44.27+PM.png)

**Bot responses limit**을 설정하면 액션이 보낼 수 있는 AI 메시지의 최대 개수를 정할 수 있어요. 일치하는 커스텀 분기가 없으면 이 한도에 도달한 뒤 **No Condition Met**으로 이어져요.

![Bot responses limit이 보이는 Conversation AI 워크플로우 액션 화면](https://jumpshare.com/share/YmfxFtvIE2KRlj0HiMHV+/Screen+Shot+2026-01-05+at+6.49.19+PM.png)

**Wait time in seconds**를 설정하면 AI가 답하기 전에 지연 시간을 둘 수 있어요. 그동안 들어온 메시지를 모은 뒤 다음 AI 답변을 만들어요.

![Wait time in seconds가 보이는 Conversation AI 워크플로우 액션 화면](https://jumpshare.com/share/FkWSQGuVTg0AFyp9gJmC+/Screen+Shot+2026-01-05+at+6.56.30+PM.png)

## 분기와 조건으로 연락처 라우팅하기

분기는 AI 대화를 워크플로우 로직으로 바꿔 줘요. 중요하게 보려는 결과별로 조건을 만들고, 다르게 답하거나 아예 답하지 않는 연락처는 어떻게 처리할지 정하세요.

| 분기 | 사용되는 경우 |
| --- | --- |
| **Custom Branch**(커스텀 분기) | 연락처의 답장이 해당 분기에 정의한 조건을 충족할 때 사용돼요. |
| **Time Out**(시간 초과) | 연락처가 설정한 Timeout 시간 안에 답장하지 않을 때 사용돼요. |
| **No Condition Met**(조건 불일치) | 설정한 커스텀 조건 중 어느 것도 일치하지 않을 때 사용돼요. 일치하는 결과 없이 액션이 Bot responses limit에 도달한 경우도 포함해요. |

{% hint style="info" %}
**Time Out**과 **No Condition Met**은 Conversation AI 액션에 항상 포함되어 있고 제거할 수 없어요. 워크플로우가 구분해야 할 결과가 따로 있다면 직접 분기를 추가하세요.
{% endhint %}

분기를 더 추가하고, 원하는 결과마다 명확한 조건을 정의하세요.

![Branches and Conditions가 보이는 Conversation AI 액션 화면](https://jumpshare.com/share/AjykLyHb5QowrR8oGyr2+/Screen+Shot+2026-01-05+at+7.00.05+PM.png)

설정과 분기를 마쳤으면 **Save Action**(액션 저장)을 클릭하세요.

![Save Action이 보이는 Conversation AI 워크플로우 액션 화면](https://jumpshare.com/share/Fu4hWxk9goP3Uelzlt3C+/Screen+Shot+2026-01-05+at+7.01.26+PM.png)

## 워크플로우 테스트하고 게시하기

실제 연락처가 자동화에 들어오기 전에 테스트해 보면, 선택한 채널이 동작하는지, 답장이 제대로 해석되는지, 각 분기가 연락처를 의도한 다음 단계로 보내는지 확인할 수 있어요.

1. Conversation AI 액션과 다른 워크플로우 변경 사항을 저장하세요.
2. 필요하면 **Test Workflow**(워크플로우 테스트)로 테스트 연락처를 워크플로우에 통과시켜 보세요.
3. 중요한 커스텀 분기마다 해당 분기에 일치해야 하는 답장을 하나 이상 테스트하세요.
4. 가능하면 **Time Out**과 **No Condition Met** 경로도 테스트하세요.
5. AI 메시지가 의도한 채널과 지침대로 나가는지 확인하세요.
6. 마지막 수정 사항을 저장하세요.
7. 실제 연락처가 들어오게 할 준비가 되면 워크플로우를 **게시**하세요.

{% hint style="info" %}
워크플로우 테스트는 설정을 검증하는 데 유용해요. 다만 테스트 연락처를 다시 쓰면 이전 활동이 남아 있을 수 있어요. 중요한 자동화라면 실제로 운영하기 전에 최종 동작을 꼼꼼히 확인하세요.
{% endhint %}

![워크플로우 게시 컨트롤이 보이는 워크플로우 빌더 화면](https://jumpshare.com/share/IvN5fTCvGjB0oqXcl0oz+/Screen+Shot+2026-01-05+at+7.04.38+PM.png)

## 자주 묻는 질문

### Conversation AI 액션은 AI 메시지를 한 번만 보내나요?

아니요. 설정한 Question으로 대화가 시작되고, 액션은 설정에 따라 AI 대화를 이어 갈 수 있어요. Bot responses limit은 일치하는 커스텀 조건이 없을 때 액션이 No Condition Met으로 넘어가기 전까지 AI가 몇 번 답할 수 있는지를 정해요.

### 워크플로우 트리거로 Customer Replied를 꼭 써야 하나요?

아니요. Customer Replied는 예시 중 하나예요. 자동화를 시작하려는 이벤트에 맞는 트리거를 쓰세요.

### 연락처가 답장하지 않으면 어떻게 되나요?

연락처가 설정한 Timeout 시간 안에 답장하지 않으면 워크플로우는 **Time Out** 분기로 이어져요.

### 조건에 하나도 맞지 않으면 어떻게 되나요?

설정한 커스텀 조건을 하나도 충족하지 못하면 워크플로우는 **No Condition Met** 분기로 이어져요. 일치하는 분기 없이 Bot responses limit에 도달한 경우도 마찬가지예요.

### Time Out이나 No Condition Met을 제거할 수 있나요?

아니요. 두 분기는 Conversation AI 액션에 기본으로 들어 있어서 제거할 수 없어요.

### Skip if answered는 어떤 역할을 하나요?

질문에 이미 직접 답한 경우 워크플로우가 Conversation AI 액션을 건너뛰게 해요. 불필요한 메시지를 줄이는 데 도움이 돼요.

### 이 워크플로우 액션에서는 어떤 채널을 선택할 수 있나요?

이 워크플로우 액션에서 현재 선택할 수 있는 채널은 SMS, Facebook, Instagram, WhatsApp, Live Chat이에요. 다른 대화 AI 기능은 더 많은 채널을 지원할 수 있어요.

### AI가 답변을 만들 때 어떤 정보를 사용하나요?

Conversation AI 액션은 Personality, Additional Instructions, Question, 봇 학습 내용, 대화 기록을 맥락으로 활용해 답변해요.
