---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000003467-workflow-action-appointment-booking-conversation-ai-booking-bot
번역일: 2026-10-02
카테고리: 07-워크플로우 > Communication Workflow Actions
---

# 워크플로우 액션 - 예약 부킹 대화 AI 부킹 봇

예약 부킹 대화 AI(Appointment Booking Conversation AI) 워크플로우 액션은 AI 기반 대화를 활용하여 연락처(Contacts)가 가능한 시간을 선택하고 지정된 캘린더(Calendars)에 바로 예약할 수 있도록 도와줍니다. 이 가이드에서는 워크플로우(Workflow)에서 이 액션(Action)을 설정하는 방법, 대화를 제어하는 방법, 그리고 연락처가 예약을 완료했는지, 응답을 멈췄는지, 또는 예약 없이 메시지 한도에 도달했는지에 따라 경로를 분기하는 방법을 안내해 드려요.

## 예약 부킹 대화 AI 워크플로우 액션이란?

예약 부킹 대화 AI 워크플로우 액션은 대화형 AI와 예약 캘린더를 연결하여, 팀원이 모든 메시지를 직접 관리하지 않아도 AI가 연락처에게 예약 일정을 안내할 수 있도록 해주는 기능이에요.

이 액션이 실행되면, AI는 선택한 캘린더를 활용해 예약 가능 시간(Availability)을 확인하고, 가능한 시간대를 제안한 뒤, 연락처가 시간을 선택하면 예약(Appointment)을 생성해요. 이후 워크플로우는 **대기 시간 초과(Timeout)**, **예약 완료(Appointment Was Booked)**, **예약 미완료(Appointment Was Not Booked)**라는 세 가지 내장 결과(outcome) 중 하나로 이어져, 고객 여정의 다음 단계를 자동화할 수 있어요.

## 예약 부킹 대화 AI 워크플로우 액션의 주요 장점

- **자동화된 예약 스케줄링:** 수동 스케줄링 없이 AI가 대화부터 예약 확정까지 연락처를 안내해 드려요.

- **캘린더 기반 예약 가능 시간:** 선택한 캘린더를 활용해 예약 가능한 시간대를 보여주고, 비어있는 시간에 연락처를 예약해요.

- **브랜드에 맞는 대화:** Personality(성격)와 Additional Instructions(추가 지시사항)를 커스터마이징하여 상호작용이 비즈니스의 톤과 예약 목표에 맞게 이루어지도록 할 수 있어요.

- **대화 제어:** 메시지 한도, 타임아웃 동작, 응답 지연 시간, 채널, 확인 메시지 전송 여부를 워크플로우에 맞게 설정할 수 있어요.

- **결과 기반 자동화:** 연락처가 예약을 완료했는지, 응답을 멈췄는지, 또는 예약 없이 메시지 한도에 도달했는지에 따라 워크플로우를 다르게 이어갈 수 있어요.

## 예약 부킹 대화 AI 워크플로우 액션 설정 방법

완전한 설정은 적절한 워크플로우 진입점(트리거)을 만드는 것부터 시작해서, AI가 어떻게 소통해야 하는지, 어떤 캘린더에 예약해야 하는지, 각 가능한 결과 후 워크플로우가 무엇을 해야 하는지를 정의하는 순서로 진행돼요. 아래 예시는 인바운드 SMS 대화를 기준으로 하지만, 실제 트리거 필터(Filter)와 채널은 여러분의 사용 사례에 맞게 설정하시면 돼요.

### 1단계: 워크플로우 생성 또는 열기

- 계정에 로그인하세요.

- **Automations(자동화) > Workflows(워크플로우)** 메뉴로 이동하세요.

- 예약 부킹 기능을 추가하려는 **새 워크플로우(new workflow)**를 생성하거나 기존 워크플로우를 편집하세요.

![](https://jumpshare.com/share/ytWDT5pLoZrx5QSiOB0d+/Screen+Shot+2026-09-23+at+17.12.47.png)

### 2단계: 워크플로우 트리거 설정

트리거(Trigger)는 연락처가 워크플로우에 진입하는 시점을 결정해요. 이 예시에서는 인바운드 답장이 온 후 예약 부킹 대화가 시작되도록 **Customer Replied(고객 응답)**를 사용했어요.

팁: Customer Replied는 하나의 예시 트리거일 뿐, 모든 예약 부킹 워크플로우에 반드시 필요한 것은 아니에요. 자동화를 시작하려는 이벤트에 맞는 워크플로우 트리거와 필터를 사용하세요.

- **+ Add New Trigger(새 트리거 추가)**를 클릭하세요.

- **Customer Replied**를 선택하세요.

- **Reply Channel(답장 채널)** 필터를 추가하고, 예시 워크플로우를 위해 **SMS**를 선택하세요.

- 사용 사례에 맞게 필요한 추가 필터를 설정하세요.

- **Save Trigger(트리거 저장)**를 클릭하세요.

![](https://jumpshare.com/share/DhE24H74HPKMAVcrdRtJ+/GIF+Recording+2026-09-23+at+17.14.39.gif)

### 3단계: 예약 부킹 대화 AI 액션 추가

- 트리거 아래나 AI 부킹 대화가 시작되어야 할 워크플로우 지점에서 **+** 아이콘을 클릭하세요.

- Appointment Booking Conversation AI를 검색하세요.

- 사용 가능한 워크플로우 액션 중에서 **Appointment Booking Conversation AI Bot**을 선택하세요.

- 워크플로우 캔버스에서 이 단계를 더 쉽게 식별하고 싶다면 명확한 액션 이름을 입력하세요.

![](https://jumpshare.com/share/EgaWY5Bu8svPnoBZ6uGB+/GIF+Recording+2026-09-23+at+17.16.21.gif)

### 4단계: 봇 설정하기

- AI가 예약 가능 시간을 확인하고 예약을 생성할 때 사용할 캘린더를 선택하세요. 이 캘린더의 예약 가능한 시간대가 대화 중 연락처에게 제안될 수 있어요.

중요: 반복 캘린더(Recurring calendars)는 이 워크플로우 액션에서 지원되지 않으며, 선택 가능한 캘린더 목록에 표시되지 않아요.

- Personality(성격)를 사용해 예약 부킹 대화 중 AI가 어떻게 말하고 비즈니스를 어떻게 대변해야 하는지 정의하세요. 원하는 톤, 커뮤니케이션 스타일, 연락처의 예약을 돕는 전반적인 방식을 명확히 설정할 수 있도록 구체적으로 작성하세요.

- Additional Instructions(추가 지시사항)를 사용해 예약 부킹 대화에 반영되어야 할 워크플로우별 규칙이나 가이드라인을 입력하세요. 여기에는 AI가 연락처를 어떻게 안내해야 하는지, 상호작용 중 어떤 정보가 중요한지, 혹은 일반적인 Personality에 포함되지 않는 다른 제약 사항 등을 포함할 수 있어요.

- 예약이 완료되지 못하고 Appointment Not Booked로 넘어가기 전까지 AI가 사용할 수 있는 메시지 개수를 제어하기 위해 Maximum Messages Limit(최대 메시지 수)을 설정하세요.

이 한도 내에 예약이 완료되지 않으면 연락처는 **Appointment Was Not Booked(예약 미완료)** 분기로 이동해요.

최소값: 5개 메시지
최대값: 25개 메시지

- AI가 연락처의 답장을 얼마나 기다려야 하는지 정의하기 위해 Timeout Value(타임아웃 값)와 **Timeout Unit(타임아웃 단위)**을 설정하세요. 단위는 분, 시간, 일 중에서 설정할 수 있어요.

연락처가 설정된 기간 내에 답장하지 않으면 워크플로우는 **Timeout(타임아웃)** 분기를 따라가요.

중요: Timeout과 Appointment Was Not Booked는 서로 다른 결과예요. **Timeout**은 연락처가 설정된 시간 내에 답장하지 않을 때 사용되고, **Appointment Was Not Booked**는 AI가 예약을 완료하지 못한 채 설정된 메시지 한도에 도달했을 때 사용돼요.

- **사용 가능한 옵션**: **Facebook, Instagram, SMS, WhatsApp** 중에서 AI가 연락처에게 응답할 때 사용할 채널을 선택하세요.

![](https://jumpshare.com/share/tVsCxxHDqvLJrxAFHdBp+/GIF+Recording+2026-09-23+at+17.24.56.gif)

### 10단계: 봇이 예약 확인 메시지를 보낼지 여부 선택

기본적으로 AI는 예약을 성공적으로 완료한 후 확인 메시지를 전송해요.

AI 액션이 아닌 워크플로우가 확인 메시지를 처리하도록 하고 싶다면 Don't let the bot send confirmation message(봇이 확인 메시지를 보내지 않도록 함) 옵션을 활성화하세요.

중요: AI 확인 메시지를 비활성화하는 경우, 예약 생성 후 연락처에게 알림이 전달될 수 있도록 Appointment Was Booked 아래에 적절한 확인 또는 후속 액션을 추가하세요.

![](https://jumpshare.com/share/l7lFoLX3oFWThkDXyF4r+/Screen+Shot+2026-09-23+at+17.26.37.png)

### 11단계: 응답 전 대기 시간 설정

Wait time before responding in seconds(응답 전 대기 시간(초))를 사용해 AI가 답장하기 전에 약간의 지연 시간을 추가하세요.

이렇게 하면 봇이 연락처로부터 연속으로 오는 메시지들을 수집한 뒤, 각 메시지에 개별적으로 답하는 대신 통합된 맥락으로 응답할 수 있는 시간을 확보할 수 있어요.

예를 들어, 연락처가 다음과 같이 메시지를 보낸 경우:

- "안녕하세요"
- 몇 초 뒤 "상담 예약하고 싶어요"

응답 지연 시간은 AI가 두 메시지를 함께 고려한 후 응답할 수 있는 기회를 제공해요.

![](https://jumpshare.com/share/BvOBDytmtIXYE1YfRtOU+/Screen+Shot+2026-09-23+at+17.27.49.png)

### 12단계: 액션 저장 및 기본 결과 분기 확인

Save Action(액션 저장)을 클릭하세요. 워크플로우에 세 가지 내장 분기가 자동으로 추가돼요.

고객 여정에 맞춰 각 결과 아래에 실행될 후속 액션을 추가하세요.

**Timeout(타임아웃)**

연락처가 설정된 타임아웃 시간 내에 답장하지 않을 때 사용돼요. 후속 메시지, 내부 액션, 또는 적절한 복구 경로를 추가할 수 있어요.

**Appointment Was Booked(예약 완료)**

예약이 성공적으로 생성된 후 사용돼요. 필요한 경우 확인 메시지, 내부 알림, 리마인더, 또는 기타 예약 후 워크플로우 액션을 추가할 수 있어요.

**Appointment Was Not Booked(예약 미완료)**

설정된 최대 메시지 한도 내에 예약이 완료되지 않았을 때 사용돼요. 여러분의 프로세스에 맞는 육성(nurture) 액션, 후속 조치, 태그(Tag) 지정 등을 추가할 수 있어요.

참고: 이 결과 분기들은 Appointment Booking Conversation AI 액션에 의해 자동으로 생성되며, 직접 수동으로 만들어야 하는 커스텀 분기 조건이 아니에요.

![](https://jumpshare.com/share/IgJdTbq2dEUKNwUb0zev+/GIF+Recording+2026-09-23+at+17.30.50.gif)

### 13단계: 워크플로우 저장, 발행, 테스트

- 워크플로우를 테스트하세요.

- 트리거, 액션 설정, 분기 액션이 모두 준비되면 **워크플로우**를 저장하고 **발행(publish)**하세요.

![](https://jumpshare.com/share/o2lCncpSAdDiaOqm4A2l+/Screen+Shot+2026-09-23+at+17.33.04.png)

## 자주 묻는 질문

**Q: 반복 캘린더가 Calendar 필드에 왜 나타나지 않나요?**

반복 캘린더(Recurring calendars)는 예약 부킹 대화 AI 워크플로우 액션에서 지원되지 않기 때문에 선택 가능한 캘린더 목록에 표시되지 않아요. 이 액션에는 반복되지 않는 지원 가능한 예약 캘린더를 사용하세요.

**Q: Timeout과 Appointment Was Not Booked의 차이는 무엇인가요?**

Timeout은 연락처가 설정된 타임아웃 기간 내에 응답하지 않을 때 사용돼요. Appointment Was Not Booked는 AI가 예약을 성공적으로 완료하지 못한 채 Maximum Messages Limit에 도달했을 때 사용돼요.

**Q: Don't let the bot send confirmation message를 활성화하면 어떻게 되나요?**

예약이 생성된 후 AI가 일반적인 예약 확인 메시지를 보내지 않아요. 워크플로우는 **Appointment Was Booked** 분기로 계속 이어지며, 여기에서 직접 확인 메시지나 다른 예약 후 액션을 추가할 수 있어요.

**Q: Maximum Messages Limit는 어떤 값으로 설정해야 하나요?**

지원되는 범위는 5~25개 메시지예요.

**Q: AI가 연락처에게 응답하기 전에 왜 기다리나요?**

**Wait time before responding**는 짧은 지연 시간을 추가해서, AI가 짧은 간격으로 전송된 메시지들을 모아 통합된 맥락으로 응답할 수 있도록 해줘요. 이를 통해 연락처가 짧은 메시지를 연속으로 여러 개 보낼 때 봇이 각각 따로 답장하는 것을 방지할 수 있어요.

---
*원문 최종 수정: Wed, 23 Sep, 2026 at 7:14 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*