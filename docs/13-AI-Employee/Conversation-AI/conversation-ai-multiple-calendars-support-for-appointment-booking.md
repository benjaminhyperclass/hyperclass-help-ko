---

번역일: 2026-04-08
카테고리: 13-AI-Employee > Conversation-AI
---

# 대화 AI: 예약을 위한 다중 캘린더 지원

**Hyperclass의 대화 AI – 다중 캘린더 지원**으로 일정 예약의 유연성을 높여보세요. 이 새로운 기능을 통해 AI 봇이 여러 캘린더에서 지능적으로 예약을 감지하고 예약할 수 있어, 여러 전문 분야나 부서를 보유한 비즈니스의 일정 관리가 훨씬 간편해집니다.

---

## **다중 캘린더 지원이란 무엇인가요?**

다중 캘린더 지원을 통해 AI 예약 봇이 고객의 의도에 따라 예약 요청을 올바른 캘린더로 라우팅할 수 있습니다. 봇을 단일 캘린더로 제한하는 대신, 이제 각각 서비스, 부서 또는 전문가를 나타내는 여러 캘린더를 구성하고 AI가 자동으로 적절한 캘린더를 선택하도록 할 수 있습니다.

이 기능은 예약 예약 흐름을 설정하거나 편집할 때 **대화 AI(Conversation AI) → 예약 봇 목표(Appointment Booking Bot Goal)**에서 사용할 수 있습니다.

---

## 다중 캘린더 지원의 주요 장점

- **스마트 캘린더 감지**: AI가 설명과 키워드를 기반으로 사용자 요청을 가장 적절한 캘린더와 자동으로 매칭합니다.

- **손쉬운 다중 부서 예약**: 하나의 AI 봇으로 다양한 팀이나 서비스(예: 심장내과, 신경과, 물리치료과)의 예약을 관리할 수 있습니다.

- **폴백 캘린더 보장**: 매칭되지 않는 요청을 위한 기본 폴백 캘린더를 설정하여 예약이 누락되지 않도록 합니다.

- **원활한 워크플로우 통합**: 단일 캘린더 예약에서 사용된 모든 기존 워크플로우 트리거(취소, 일정 변경, 예약 후 자동화)를 지원합니다.

- **투명한 추적**: 대화나 예약 기록에서 어떤 캘린더가 사용되었는지 즉시 확인할 수 있습니다.

---

## **스마트 캘린더 감지**

AI는 구성된 **캘린더 이름, 설명, 그리고 선택적 키워드**를 사용하여 자동으로 예약을 감지하고 올바른 캘린더로 라우팅합니다. 사용자가 다음과 같이 입력하면:

"편두통 때문에 신경과 상담을 받고 싶습니다."

AI는 관련 **신경과** 캘린더를 식별하고 예약 가능한 시간대를 조회합니다.

**스크린샷:** 사용자 의도에 따라 AI가 신경과 예약 시간을 제안하는 대화 화면.

---

## **폴백 캘린더**

폴백 캘린더는 구성된 캘린더 중 어느 것도 사용자 메시지와 일치하지 않을 때 안전망 역할을 합니다. 이를 통해 모든 예약 요청이 캡처되고 예약되어 기회 손실을 방지할 수 있습니다.

- 구성된 캘린더 중 하나를 폴백 옵션으로 선택합니다.

- AI 설명과 일치하는 의도가 없으면 예약이 자동으로 이 폴백 캘린더에 예약됩니다.

**스크린샷:** 폴백 캘린더 필드를 보여주는 예약 봇 구성 화면.

---

## **예약을 위한 다중 캘린더 구성 방법**

대화 AI 봇에서 다중 캘린더를 활성화하고 구성하려면 다음 단계를 따라하세요:

봇 목표의 예약 옵션에는 프롬프트와 캘린더에 대한 세부 정보가 있습니다. 캘린더 세부 정보는 의도 분류용으로만 사용됩니다. 봇이 질문에 답할 수 있도록 하려면 해당 정보가 프롬프트(예약 버튼 위)에 있어야 합니다.

예를 들어: 봇이 어떤 종류의 예약을 예약할지, 그리고 왜 예약해야 하는지 논의할 수 있도록 하려면 해당 정보를 프롬프트에 복제해야 합니다. 봇은 캘린더 세부 정보에서 찾은 세부 사항을 논의할 수 없습니다.

- **AI 직원(AI Agents) → 대화 AI(Conversation AI) → 봇 목표(Bot Goals)**로 이동하여 **예약(Appointment Booking)**을 선택하세요.

![대화 AI 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055452724/original/ADKs-aZGBhqN-7v-7TtzmqO3GAWtFYDVqw.png?1759854653)

- 설정 창 상단에서 **다중 캘린더(Multiple Calendars)** 옵션을 선택하세요.

![다중 캘린더 옵션 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055452799/original/TVBNcuppvPui33rNLYt2aKmH3L-GCWse4A.png?1759854733)

- **캘린더 선택(Calendar Selection)** 아래에서 포함하려는 캘린더를 선택하세요. 각 캘린더의 이름과 설명이 자동으로 가져와집니다.

![캘린더 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055458637/original/0e3EEuOCqecPsHt0tViUWJtylV1K9rnt1A.png?1759859784)

- 선택적으로 **추가 키워드 및 설명(Additional Keywords & Descriptions)**을 추가하여 AI가 사용자 의도를 인식하는 데 도움을 주세요. 캘린더 자체의 캘린더 설정에 자세한 이름과 설명이 없는 경우에 유용합니다. 캘린더에 자세한 이름과 설명이 있다면 여기에 추가할 필요가 없습니다.

![추가 키워드 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055458476/original/Ij9k6v74boU-1hwSoaLHkfX-_1texe_lmA.png?1759859603)

- 매칭되지 않는 요청을 처리하기 위해 **폴백 캘린더(Fallback Calendar)**를 구성하세요. 폴백 캘린더를 사용하지 않으려면 이 옵션을 해제할 수 있습니다.

![폴백 캘린더 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055458890/original/3C_GDut3Q5QD9da_QPFtYOr9BsooKN6LJg.png?1759860013)

- **AI 구성(AI Configuration)**으로 진행하여 **AI 프롬프트**를 정의하세요(예: "어떤 종류의 상담을 예약하고 싶으신가요?").

![AI 프롬프트 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055452947/original/y0tdQp5-yX14ncT-9GMtNbPf1bYqCYuFwA.png?1759854856)

- 고급 옵션으로 진행하세요:

  - 예약 후 봇 응답 일시정지
  - 예약 후 워크플로우 트리거
  - 예약 후 직원 전환
  - 봇이 예약을 취소할 수 있도록 허용
  - 봇이 예약을 변경할 수 있도록 허용

![고급 옵션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055458984/original/taubBBqVVsTtgk5FESVJws1jx1r1fcwCvg.png?1759860118)

- 구성을 저장하세요.

- 봇 목표 설정 - 대화 요약과 대화 기록은 다음 아티클에서 자세히 설명됩니다:

[대화 AI 요약 및 대화 기록](how-to-generate-conversation-summaries-and-transcript-in-conversation-ai.md)

![봇 목표 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055460915/original/XpzPuGZEuhgJ7lqFMuczHpE8qDnh8ghnKg.png?1759862596)

활성화되면 봇이 자동으로 사용자 의도를 감지하고 대화 내용에 따라 올바른 캘린더에 예약을 생성합니다.

---

## **AI 구성 팁 (프롬프트 및 키워드)**

효과적인 AI 프롬프트와 키워드 설계로 정확한 라우팅을 보장할 수 있습니다:

- "치과의사", "시력 검사", "상담"과 같은 **명확한 서비스 기반 키워드**를 사용하세요.

- AI가 맥락을 이해할 수 있도록 캘린더 설명을 **쉬운 언어**로 작성하세요.

- 일반적인 사용자 의도에 대한 **대체 표현**을 포함하세요(예: "눈 때문에 의사를 만나고 싶어요" → 안과).

- 프롬프트를 간결하고 사용자 친화적으로 유지하세요: *"어떤 서비스를 예약하시겠습니까?"*가 길거나 복잡한 문구보다 효과적입니다.

**스크린샷:** 캘린더 설명과 키워드 입력 예시를 보여주는 AI 구성 화면.

---

## **예약 완료된 예약 및 캘린더 세부 정보 보기**

예약이 생성된 후 **대화**와 **예약 세부 정보 패널** 모두에서 예약을 완료하는 데 사용된 캘린더를 확인할 수 있습니다.

- 대화 스레드를 열어 AI의 확인 메시지와 시간대 세부 정보를 확인하세요.

- **예약 보기(View Appointment)**를 클릭하여 세부 정보 패널을 여세요.

- 배정된 캘린더 이름(예: 신경과)이 **캘린더(Calendar)** 필드에 명확히 표시됩니다.

**스크린샷:** 예약된 신경과 캘린더를 보여주는 예약 세부 정보 화면.

---

## **자주 묻는 질문**

**Q: 단일 캘린더와 다중 캘린더 모드를 모두 사용할 수 있나요?**

네. 사용 사례에 따라 각각의 모드를 선택할 수 있습니다. 단일 캘린더는 하나의 서비스에 적합하고, 다중 캘린더는 다중 전문 분야 비즈니스에 이상적입니다.

**Q: 몇 개의 캘린더를 추가할 수 있나요?**

여러 캘린더를 추가할 수 있지만, 더 정확한 AI 매칭을 위해 목록을 간결하게 유지하는 것이 권장됩니다.

**Q: AI가 올바른 캘린더를 식별할 수 없으면 어떻게 되나요?**

폴백 캘린더가 자동으로 이런 경우를 처리하여 모든 요청이 예약으로 연결되도록 보장합니다.

**Q: 기존 워크플로우가 여전히 트리거되나요?**

네. 모든 기존 자동화와 워크플로우 트리거(알림, 리마인더, 예약 후 워크플로우 등)가 이전과 동일하게 작동합니다.

---

### **관련 아티클**

- [대화 AI를 사용하여 예약하는 방법]([how-to-use-conversation-ai-to-book-appointments](how-to-use-conversation-ai-to-book-appointments.md))

- [워크플로우 액션 – 예약 대화 AI 봇]([workflow-action-appointment-booking-conversation-ai-booking-bot](workflow-action-appointment-booking-conversation-ai-booking-bot.md))

- [대화 AI 예약 후 액션]([conversation-ai-post-appointment-booking-actions](conversation-ai-post-appointment-booking-actions.md))

- [대화 AI 설정하기]([setting-up-conversation-ai](setting-up-conversation-ai.md))

---
*원문 최종 수정: Wed, 25 Mar, 2026 at 6:04 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*