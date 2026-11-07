---
원문: /support/solutions/articles/155000009388-ai-receptionist-and-google-organic-booking-in-field-services
번역일: 2026-11-07
카테고리: 04-캘린더-예약
---

# 현장 서비스의 AI 리셉셔니스트와 Google 자연 검색 예약

**현장 서비스**에는 [예약 페이지](Field-Services/booking-page-editor-in-field-services.md) 밖에서도 고객을 받고 응대할 수 있는 연결이 두 가지 있어요. 하나는 서비스·가격·서비스 지역 문의에 답하고 고객의 요청을 받는 AI 리셉셔니스트예요. 다른 하나는 고객이 Google에서 바로 찾아 예약할 수 있게 해 주는 Google 자연 검색 예약이에요. 이 문서에서 두 가지를 모두 설명해요.

{% hint style="info" %}
현장 서비스는 현재 비공개 베타이며, 선택된 계정에서만 쓸 수 있어요. 두 기능 모두 계속 확장하고 있어요.
{% endhint %}

## AI 리셉셔니스트

AI 리셉셔니스트는 고객이 묻는 서비스, 가격, 서비스 지역에 답하고 고객의 요청을 받는 AI 에이전트예요. 팀이 바쁠 때도 새로운 일감을 놓치지 않아요. 비공개 베타에서는 SMS, 웹 채팅, 소셜 메시지를 포함한 채팅을 처리해요.

![AI 리셉셔니스트 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084163748/original/7Dv6EyHQgkwsUazfg4ilhjybQYLkf1FhfQ.jpg?1793000099)

---

## AI 리셉셔니스트 만들기

1. **현장 서비스 > Field Services Settings**(현장 서비스 설정) **> 글로벌 설정**으로 이동하세요. 각 설정은 [현장 서비스 설정: 온라인 예약](Field-Services/field-services-settings-online-booking.md)에서도 볼 수 있어요.
2. **Operations**(운영) 아래에서 **AI 리셉셔니스트**를 클릭하세요.
3. **새 에이전트 만들기**의 5단계를 따라 진행하세요.
4. 단계마다 **저장 후 다음**을 클릭해 다음으로 넘어가세요.

| 단계 | 하는 일 |
| --- | --- |
| **Agent overview**(에이전트 개요) | 에이전트 이름을 정하세요. 예: Aria, Riley. 그다음 **Agent type**(에이전트 유형)을 고르세요. 지금은 **Chat only**(채팅 전용)만 쓸 수 있어요. **Voice only**(음성 전용)와 **Voice + Chat**(음성+채팅)은 아직 쓸 수 없어요. |
| **사업 세부정보** | 사업체 정보, 위치, 연락처를 입력하세요. |
| **Business skills**(비즈니스 스킬) | 에이전트가 고객을 어떻게 도울지 고른 뒤, 세부 내용을 알려 주세요. |
| **Agent config**(에이전트 구성) | 에이전트의 동작 방식, 음성, 채팅 처리 방식을 원하는 대로 설정하세요. |
| **Review & configure channel**(검토 및 채널 설정) | 설정을 확인하고 채널별로 설정한 다음, 에이전트를 저장하세요. |

에이전트를 켜기 전에 오른쪽의 **에이전트 테스트하기** 패널에서 먼저 써 볼 수 있어요. 지난 대화를 확인하려면 **로그**를 클릭하세요.

---

## Google 자연 검색 예약

**Google organic booking**(Google 자연 검색 예약)을 쓰면 고객이 Google Business Profile에서 바로 예약할 수 있어요.

1. **현장 서비스 > Field Services Settings > 글로벌 설정**으로 이동하세요.
2. **연결** 아래에서 **Google organic booking**을 클릭하세요.
3. **시작하기 전에**를 클릭해 필요한 준비물을 확인하세요.
4. **연결**을 클릭하고, Google Business Profile을 관리하는 Google 계정으로 로그인하세요.
5. Google에 표시할 프로필과 서비스를 선택하세요.

연결하기 전에는 페이지에 *Google account not connected*(Google 계정이 연결되지 않았어요)라고 표시돼요.

![Google 자연 검색 예약 연결 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084163756/original/eYgq8DOap-IFhK9v1DGrKTMZdNJQNy5_qg.jpg?1793000103)

---

## 자주 묻는 질문

### AI 리셉셔니스트는 질문에 답하는 것 말고 요청도 받을 수 있나요?
네. 질문에 답하는 것 외에도 채팅으로 고객의 요청을 받을 수 있어요. 팀이 그 요청을 이어서 처리하면 돼요.

### AI 리셉셔니스트가 전화도 받나요?
아직은 받지 않아요. 음성 에이전트는 계획 중이에요. 지금은 채팅 메시지에만 답해요.

### Google Business Profile이 꼭 있어야 하나요?
네. Google 자연 검색 예약은 본인이 소유하거나 관리하는 Google Business Profile과 함께 쓸 수 있어요.

### Google에서 예약한 고객에게도 제 예약 규칙이 적용되나요?
예약은 [서비스 지역](Field-Services/service-areas-in-field-services.md), [서비스](Field-Services/services-and-add-ons-in-field-services.md), 직원의 가용 시간을 따라요.
