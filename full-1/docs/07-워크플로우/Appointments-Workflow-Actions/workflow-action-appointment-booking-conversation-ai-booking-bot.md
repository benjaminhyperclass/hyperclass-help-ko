---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003467-workflow-action-appointment-booking-conversation-ai-booking-bot
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Appointment Booking Conversation AI(예약 부킹 대화 AI 봇)

이 액션은 AI와의 대화로 연락처가 가능한 시간을 고르고, 선택한 캘린더에 바로 예약하도록 도와줘요. 이 문서에서는 워크플로우에서 액션을 설정하는 방법과 대화를 조절하는 방법을 설명해요. 연락처가 예약을 마쳤을 때, 응답을 멈췄을 때, 예약 없이 메시지 한도에 도달했을 때 이후 흐름을 나누는 방법도 다뤄요.

[동영상](https://www.youtube.com/embed/3V9j32z61Gg?&wmode=opaque)

---

# Appointment Booking Conversation AI 워크플로우 액션이란?

이 액션은 대화형 AI와 예약 캘린더를 연결해요. 팀원이 모든 메시지를 직접 관리하지 않아도, AI가 연락처를 예약까지 안내해 줘요.

액션이 실행되면 AI는 선택한 캘린더로 예약 가능 여부를 확인해요. 가능한 시간대를 제안하고, 연락처가 시간을 고르면 예약을 만들어요. 그 뒤 워크플로우는 기본으로 제공되는 세 가지 결과 중 하나로 이어져요. **Timeout**(시간 초과), **Appointment Was Booked**(예약 완료), **Appointment Was Not Booked**(예약 미완료)예요. 이 결과에 맞춰 고객 여정의 다음 단계를 자동화할 수 있어요.

{% hint style="info" %}
대화 AI에서 예약 부킹을 쓰는 방법은 [대화 AI의 예약 부킹](../../10-마케팅/appointment-booking-conversation-ai-workflow-action.md) 문서를 참고하세요. 대화 AI 봇을 처음 설정한다면 [대화 AI 봇 설정 방법](../../13-AI-Employee/how-to-set-up-a-conversation-ai-bot.md) 문서를 먼저 보세요.
{% endhint %}

---

## 이 액션을 쓰면 좋은 점

- 예약 일정 자동화: AI가 대화부터 예약 확정까지 안내하므로 직접 일정을 잡지 않아도 돼요.
- 캘린더 기반 가용 시간: 선택한 캘린더에서 가능한 시간대를 보여 주고, 비어 있는 시간에 연락처를 예약해요.
- 브랜드에 맞는 대화: **Personality**(성격)와 **Additional Instructions**(추가 지시사항)를 설정하면 비즈니스의 말투와 예약 목표를 대화에 반영할 수 있어요.
- 대화 조절: 메시지 한도, 시간 초과 동작, 응답 지연, 채널, 확인 메시지 방식을 워크플로우에 맞게 정할 수 있어요.
- 결과별 자동화: 연락처가 예약했을 때, 응답을 멈췄을 때, 예약 없이 메시지 한도에 도달했을 때 워크플로우를 다르게 이어갈 수 있어요.

---

## 설정 방법

먼저 워크플로우가 시작되는 지점을 정하세요. 그다음 AI가 어떻게 대화할지, 어떤 캘린더에 예약할지, 결과마다 워크플로우가 무엇을 할지 정해요. 아래 예시는 SMS로 들어온 답장에서 시작하는 흐름이에요. 트리거 필터와 채널은 여러분의 상황에 맞게 바꾸세요.

### 1단계: 워크플로우 만들기 또는 열기

1. 계정에 로그인하세요.
2. **자동화 > 워크플로우**로 이동하세요.
3. **만들기**를 눌러 새 워크플로우를 만들거나, 예약 기능을 추가할 기존 워크플로우를 여세요.

![워크플로우 목록 화면](https://jumpshare.com/share/ytWDT5pLoZrx5QSiOB0d+/Screen+Shot+2026-09-23+at+17.12.47.png)

### 2단계: 워크플로우 트리거 설정

트리거는 연락처가 워크플로우에 들어오는 시점을 정해요. 이 예시에서는 **Customer Replied**(고객 답장) 트리거를 써서, 답장이 들어오면 예약 대화가 시작되게 해요.

{% hint style="info" %}
**Customer Replied**는 예시일 뿐, 모든 예약 워크플로우에 꼭 써야 하는 트리거는 아니에요. 자동화를 시작하고 싶은 이벤트에 맞는 트리거와 필터를 쓰세요. 이 트리거는 [워크플로우 트리거 — Customer Replied](../Events-Workflow-Triggers/workflow-trigger-customer-replied.md) 문서에서 자세히 볼 수 있어요.
{% endhint %}

1. **+ Add New Trigger**(새 트리거 추가)를 클릭하세요.
2. **Customer Replied**를 선택하세요.
3. **Reply Channel**(답장 채널) 필터를 추가하고, 예시 워크플로우에서는 **SMS**를 선택하세요.
4. 필요한 필터가 더 있으면 추가하세요.
5. **Save Trigger**(트리거 저장)를 클릭하세요.

![트리거 설정 과정 녹화](https://jumpshare.com/share/DhE24H74HPKMAVcrdRtJ+/GIF+Recording+2026-09-23+at+17.14.39.gif)

### 3단계: Appointment Booking Conversation AI 액션 추가

1. 트리거 아래, 또는 AI 예약 대화를 시작하려는 위치의 **+** 아이콘을 클릭하세요.
2. **Appointment Booking Conversation AI**를 검색하세요.
3. 사용 가능한 워크플로우 액션에서 **Appointment Booking Conversation AI Bot**을 선택하세요.
4. 워크플로우 캔버스에서 이 단계를 쉽게 알아보고 싶다면 알기 쉬운 액션 이름을 입력하세요.

{% hint style="info" %}
대화 AI 관련 액션은 [워크플로우 액션 — 대화 AI](../기타/workflow-actions-conversation-ai.md) 문서에서 확인할 수 있어요.
{% endhint %}

![액션 추가 과정 녹화](https://jumpshare.com/share/EgaWY5Bu8svPnoBZ6uGB+/GIF+Recording+2026-09-23+at+17.16.21.gif)

### 4단계: 봇 설정

1. AI가 예약 가능 시간을 확인하고 예약을 만들 때 쓸 캘린더를 선택하세요. 이 캘린더의 예약 가능 시간대를 AI가 대화 중에 연락처에게 제안해요.

   {% hint style="warning" %}
   이 워크플로우 액션은 반복 캘린더(Recurring calendar)를 지원하지 않아요. 반복 캘린더는 선택 목록에 나타나지 않아요.
   {% endhint %}

   예약 캘린더를 아직 만들지 않았다면 [시작하기 — 예약 캘린더 설정](../../01-시작하기/기본-설정/getting-started-setup-a-booking-calendar.md) 문서를 참고하세요.
2. **Personality**에는 예약 대화에서 AI가 어떤 말투로 비즈니스를 대표할지 적으세요. 원하는 말투와 소통 방식, 연락처의 일정 잡기를 돕는 전반적인 태도가 드러나도록 구체적으로 쓰세요.
3. **Additional Instructions**에는 이 워크플로우에만 해당하는 규칙이나 안내를 적으세요. 예를 들어 AI가 연락처를 어떻게 안내할지, 대화 중 어떤 정보가 중요한지, 일반적인 성격 설정에 넣기 어려운 제한 사항 등을 적을 수 있어요.
4. **Maximum Messages Limit before it goes to Appointment Not Booked**(예약 미완료로 넘어가기 전 최대 메시지 수)로 AI가 예약을 마무리하려고 보낼 수 있는 메시지 수를 정하세요.

   이 한도 안에 예약이 끝나지 않으면 연락처는 **Appointment Was Not Booked** 분기로 이어져요.

   - 최소: 5개
   - 최대: 25개
5. **Timeout Value**(시간 초과 값)와 **Timeout Unit**(시간 초과 단위)으로 AI가 연락처의 답장을 얼마나 기다릴지 정하세요. 단위는 분, 시간, 일 중에서 고를 수 있어요.

   정해진 시간 안에 연락처가 답하지 않으면 워크플로우는 **Timeout** 분기로 이어져요.

   {% hint style="warning" %}
   **Timeout**과 **Appointment Was Not Booked**는 서로 다른 결과예요. **Timeout**은 연락처가 설정한 시간 안에 답하지 않을 때 쓰여요. **Appointment Was Not Booked**는 AI가 설정한 메시지 한도에 도달할 때까지 예약을 마치지 못했을 때 쓰여요.
   {% endhint %}
6. AI가 연락처에게 답할 채널을 고르세요. 선택할 수 있는 채널은 Facebook, Instagram, SMS, WhatsApp이에요.

![봇 설정 과정 녹화](https://jumpshare.com/share/tVsCxxHDqvLJrxAFHdBp+/GIF+Recording+2026-09-23+at+17.24.56.gif)

### 10단계: 봇이 예약 확인 메시지를 보낼지 선택

<!-- 검토 필요: 원문 내용이 서로 다름 (단계 번호가 4단계에서 10단계로 건너뜀) -->

기본적으로 AI는 예약을 성공적으로 만들고 나면 확인 메시지를 보내요.

AI 액션이 아니라 워크플로우에서 확인 메시지를 처리하고 싶다면 **Don't let the bot send confirmation message**(봇이 확인 메시지를 보내지 않게 하기)를 켜세요.

{% hint style="warning" %}
AI의 확인 메시지를 끄면, **Appointment Was Booked** 아래에 알맞은 확인 또는 후속 액션을 추가하세요. 그래야 연락처가 예약이 만들어진 사실을 알 수 있어요.
{% endhint %}

![확인 메시지 설정 화면](https://jumpshare.com/share/l7lFoLX3oFWThkDXyF4r+/Screen+Shot+2026-09-23+at+17.26.37.png)

### 11단계: 응답 전 대기 시간 설정

**Wait time before responding in seconds**(응답 전 대기 시간, 초 단위)로 AI가 답하기 전의 짧은 지연 시간을 정하세요.

그러면 봇이 연락처가 연달아 보낸 메시지를 모아서, 메시지마다 따로 답하지 않고 전체 맥락에 맞춰 답할 수 있어요.

예를 들어 연락처가 이렇게 보냈다고 해 볼게요.

- "안녕하세요"
- 몇 초 뒤에 "상담 예약하고 싶어요"

응답 지연 시간이 있으면 AI가 두 메시지를 함께 고려한 뒤에 답할 수 있어요.

![응답 대기 시간 설정 화면](https://jumpshare.com/share/BvOBDytmtIXYE1YfRtOU+/Screen+Shot+2026-09-23+at+17.27.49.png)

### 12단계: 액션 저장과 기본 결과 분기

**Save Action**(액션 저장)을 클릭하세요. 기본 분기 세 개가 워크플로우에 추가돼요.

고객 여정에 맞게 각 결과 아래에서 실행할 후속 액션을 추가하세요.

**Timeout**

연락처가 설정한 시간 안에 답하지 않았을 때 쓰여요. 후속 메시지나 내부 액션, 그 밖에 상황에 맞는 복구 흐름을 추가할 수 있어요.

**Appointment Was Booked**

예약이 성공적으로 만들어진 뒤에 쓰여요. 필요하면 확인 메시지, 내부 알림, 리마인더 등 예약 이후 액션을 추가할 수 있어요.

**Appointment Was Not Booked**

설정한 최대 메시지 한도 안에 예약이 끝나지 않았을 때 쓰여요. 육성(nurture), 후속 연락, 태그 지정 등 업무 방식에 맞는 액션을 추가할 수 있어요.

{% hint style="info" %}
이 결과 분기는 Appointment Booking Conversation AI 액션이 만들어 주는 거예요. 분기 조건을 직접 만들 필요는 없어요.
{% endhint %}

![결과 분기가 추가되는 과정 녹화](https://jumpshare.com/share/IgJdTbq2dEUKNwUb0zev+/GIF+Recording+2026-09-23+at+17.30.50.gif)

### 13단계: 저장, 게시, 테스트

1. **Test Workflow**(워크플로우 테스트)를 실행하세요.
2. 트리거, 액션 설정, 분기 액션이 모두 준비되면 워크플로우를 **Save**(저장)하고 **Publish**(게시)하세요.

![워크플로우 저장 및 게시 화면](https://jumpshare.com/share/o2lCncpSAdDiaOqm4A2l+/Screen+Shot+2026-09-23+at+17.33.04.png)

---

## 자주 묻는 질문

### 반복 캘린더가 Calendar 필드에 안 나와요.

Appointment Booking Conversation AI 워크플로우 액션은 반복 캘린더를 지원하지 않아서 선택 목록에 나타나지 않아요. 이 액션에는 반복 캘린더가 아닌, 지원되는 예약 캘린더를 사용하세요.

### Timeout과 Appointment Was Not Booked는 뭐가 다른가요?

**Timeout**은 연락처가 설정한 시간 안에 답하지 않을 때 쓰여요. **Appointment Was Not Booked**는 AI가 **Maximum Messages Limit**에 도달할 때까지 예약을 마치지 못했을 때 쓰여요.

### Don't let the bot send confirmation message를 켜면 어떻게 되나요?

예약이 만들어져도 AI가 기본 예약 확인 메시지를 보내지 않아요. 워크플로우는 **Appointment Was Booked**로 이어지고, 여기에 직접 만든 확인 메시지나 다른 예약 이후 액션을 추가할 수 있어요.

### Maximum Messages Limit는 얼마로 설정해야 하나요?

설정할 수 있는 범위는 5개에서 25개예요.

### AI가 연락처에게 바로 답하지 않고 기다리는 이유가 뭔가요?

**Wait time before responding**은 짧은 지연 시간을 두어, 가까운 시간에 보낸 메시지를 AI가 모아서 전체 맥락으로 답하게 해요. 연락처가 짧은 메시지를 연달아 보낼 때 봇이 메시지마다 따로 답하는 일을 막을 수 있어요.
