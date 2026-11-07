---
원문: /support/solutions/articles/155000006559-conversation-ai-multi-calendar-booking-setup-guide
번역일: 2026-11-06
카테고리: 13-AI-Employee
---

# 대화 AI 다중 캘린더 예약 설정 가이드

대화 AI의 다중 캘린더 지원을 쓰면 AI 봇이 고객 요청에 맞는 캘린더를 찾아 예약까지 잡아 줘요. 진료과나 부서가 여러 개인 비즈니스의 예약을 봇 하나로 관리할 때 쓰세요.

---

## 다중 캘린더 지원이란?

다중 캘린더 지원을 켜면 AI 예약 봇이 고객의 의도를 파악해 알맞은 캘린더로 예약 요청을 보내요. 봇에 캘린더를 하나만 연결할 필요가 없어요. 서비스, 부서, 담당자별로 캘린더를 여러 개 설정해 두면 AI가 어느 캘린더를 쓸지 알아서 판단해요.

예약 부킹 흐름을 새로 만들거나 편집할 때 **대화 AI**의 **봇 목표** 중 **예약 부킹**에서 설정할 수 있어요.

---

## 다중 캘린더 지원의 장점

- 스마트 캘린더 감지: AI가 캘린더 설명과 키워드를 바탕으로 사용자 요청에 가장 알맞은 캘린더를 자동으로 찾아요.
- 여러 부서 예약을 한 번에 관리: 심장내과, 신경과, 물리치료처럼 팀이나 서비스가 달라도 AI 봇 하나로 예약을 관리할 수 있어요.
- 대체 캘린더로 누락 방지: 어느 캘린더와도 맞지 않는 요청을 받을 기본 대체 캘린더를 지정해 예약이 빠지지 않게 해요.
- 기존 워크플로우와 그대로 연동: 단일 캘린더 예약에서 쓰던 워크플로우 트리거(취소, 일정 변경, 예약 후 자동화)를 모두 지원해요.
- 투명한 추적: 대화나 예약 기록에서 예약에 어떤 캘린더가 쓰였는지 바로 확인할 수 있어요.

---

## 스마트 캘린더 감지

AI는 설정해 둔 캘린더 이름, 설명, 선택 키워드를 보고 예약을 알맞은 캘린더로 보내요. 예를 들어 사용자가 이렇게 입력했다고 해 볼게요.

> “편두통 때문에 신경과 진료를 받고 싶어요.”

그러면 AI는 관련 있는 신경과 캘린더를 찾아 예약 가능한 시간대를 보여 줘요.

---

## 대체 캘린더

대체 캘린더는 설정한 캘린더 중 사용자의 메시지와 맞는 것이 없을 때 쓰는 안전장치예요. 모든 예약 요청이 접수되고 예약되도록 해서 놓치는 기회를 줄여 줘요.

- 설정한 캘린더 중 하나를 대체 캘린더로 선택하세요.
- 어떤 의도도 AI 설명과 맞지 않으면 예약이 이 대체 캘린더에 자동으로 잡혀요.

---

## 예약용 다중 캘린더 설정 방법

다음 단계를 따라 Conversation AI 봇에서 다중 캘린더를 켜고 설정하세요.

{% hint style="info" %}
**봇 목표**의 **예약 부킹**에는 프롬프트와 캘린더 정보가 함께 있어요. 캘린더 정보는 의도를 분류하는 데에만 쓰여요. 봇이 질문에 답하게 하려면 그 내용이 프롬프트(**예약 부킹** 버튼 위)에 들어 있어야 해요.

예를 들어 봇이 어떤 예약을 왜 잡아야 하는지 설명하게 하려면, 그 정보를 프롬프트에도 똑같이 넣어야 해요. 봇은 캘린더 정보에 적힌 세부 내용으로는 대화할 수 없어요.
{% endhint %}

1. **AI 에이전트 > 대화 AI > 봇 목표**로 이동해 **예약 부킹**을 선택하세요.

   ![봇 목표에서 예약 부킹 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055452724/original/ADKs-aZGBhqN-7v-7TtzmqO3GAWtFYDVqw.png?1759854653)

2. 설정 창 맨 위에서 **다중 캘린더** 옵션을 선택하세요.

   ![다중 캘린더 옵션 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055452799/original/TVBNcuppvPui33rNLYt2aKmH3L-GCWse4A.png?1759854733)

3. **캘린더 선택**에서 포함할 캘린더를 고르세요. 각 캘린더의 이름과 설명은 자동으로 불러와요.

   ![캘린더 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055458637/original/0e3EEuOCqecPsHt0tViUWJtylV1K9rnt1A.png?1759859784)

4. 필요하면 **Additional Keywords & Descriptions**(추가 키워드 및 설명)를 입력해 AI가 사용자 의도를 더 잘 알아보게 하세요. **캘린더 설정**에서 캘린더 이름과 설명이 자세하지 않을 때 도움이 돼요. 캘린더에 이름과 설명이 이미 자세히 적혀 있으면 여기에는 아무것도 입력하지 않아도 돼요.

   ![추가 키워드 및 설명 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055458476/original/Ij9k6v74boU-1hwSoaLHkfX-_1texe_lmA.png?1759859603)

5. **Fallback Calendar**(대체 캘린더)를 설정해 어느 캘린더와도 맞지 않는 요청을 처리하게 하세요. 체크를 해제하면 대체 캘린더 없이 운영할 수 있어요.

   ![대체 캘린더 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055458890/original/3C_GDut3Q5QD9da_QPFtYOr9BsooKN6LJg.png?1759860013)

6. **AI 설정**으로 이동해 AI 프롬프트를 입력하세요. 예: “어떤 상담을 예약하시겠어요?”

   ![AI 설정에서 프롬프트 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055452947/original/y0tdQp5-yX14ncT-9GMtNbPf1bYqCYuFwA.png?1759854856)

7. **고급 옵션**으로 이동해 다음 항목을 설정하세요.

   1. **Pause bot response after booking**(예약 후 봇 응답 일시중지)
   2. **Trigger workflows after booking**(예약 후 워크플로우 실행)
   3. **Transfer employee post appointment booking**(예약 후 직원에게 전환)
   4. **봇이 예약을 취소하도록 허용**
   5. **Allow bot to reschedule the appointment**(봇이 예약을 변경하도록 허용)

   ![고급 옵션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055458984/original/taubBBqVVsTtgk5FESVJws1jx1r1fcwCvg.png?1759860118)

8. 설정을 저장하세요.

9. 봇 목표 환경설정의 **대화 요약**과 **Transcript**(대화 기록)는 'Conversation AI Summary and Transcript' 문서에 자세히 나와 있어요.

   ![봇 목표 환경설정의 대화 요약과 대화 기록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055460915/original/XpzPuGZEuhgJ7lqFMuczHpE8qDnh8ghnKg.png?1759862596)

설정을 켜면 봇이 사용자 의도를 자동으로 파악해 대화 내용에 맞는 캘린더에 예약을 잡아요.

---

## AI 설정 팁 (프롬프트와 키워드)

프롬프트와 키워드를 잘 만들어 두면 예약이 더 정확하게 연결돼요.

- “치과”, “시력 검사”, “상담”처럼 서비스를 분명히 나타내는 키워드를 쓰세요.
- 캘린더 설명은 쉬운 말로 써서 AI가 맥락을 이해할 수 있게 하세요.
- 자주 나오는 요청에는 다른 표현도 함께 넣으세요. 예: “눈이 안 좋아서 진료받고 싶어요” → 안과
- 프롬프트는 짧고 친절하게 쓰세요. 길고 복잡한 문장보다 *“어떤 서비스를 예약하시겠어요?”* 같은 문장이 더 잘 작동해요.

---

## 예약 내역과 캘린더 정보 확인하기

예약이 만들어지면 대화와 예약 상세 패널 모두에 어떤 캘린더로 예약했는지 표시돼요.

- 대화 스레드를 열면 AI의 확인 메시지와 예약 시간대 정보를 볼 수 있어요.
- **예약 보기**를 클릭해 상세 패널을 여세요.
- 배정된 캘린더 이름(예: 신경과)이 **캘린더** 필드에 표시돼요.

---

## 자주 묻는 질문

### 단일 캘린더와 다중 캘린더 모드를 둘 다 쓸 수 있나요?
네. 상황에 맞게 둘 중 하나를 선택하면 돼요. **단일 캘린더**는 서비스가 하나일 때 알맞고, **다중 캘린더**는 여러 전문 분야를 운영하는 비즈니스에 알맞아요.

### 캘린더를 몇 개까지 추가할 수 있나요?
여러 개 추가할 수 있어요. 다만 AI가 더 정확하게 구분하도록 목록은 간결하게 유지하길 권장해요.

### AI가 알맞은 캘린더를 찾지 못하면 어떻게 되나요?
대체 캘린더가 자동으로 처리해서 모든 요청이 예약으로 이어져요.

### 사용자 요청과 맞는 캘린더가 없으면 어떻게 되나요?
설정해 둔 대체 캘린더로 예약이 연결돼요.

### 기존 워크플로우도 그대로 실행되나요?
네. 알림, 리마인더, 예약 후 워크플로우 등 기존 자동화와 워크플로우 트리거는 이전처럼 계속 작동해요.
