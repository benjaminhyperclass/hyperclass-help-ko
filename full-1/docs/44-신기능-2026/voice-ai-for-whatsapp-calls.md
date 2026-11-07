---
원문: https://help.gohighlevel.com/support/solutions/articles/155000009268-voice-ai-for-whatsapp-calls
번역일: 2026-11-07
카테고리: 44-신기능-2026
---

# WhatsApp 전화를 음성 AI가 받도록 설정하기

이제 하이퍼클래스에서 걸려 오는 WhatsApp 전화를 음성 AI가 대신 받을 수 있어요. 팀이 바쁘거나 자리를 비웠을 때도 고객에게 응답할 수 있습니다. 팀이 받을지, 음성 AI가 바로 받을지, 아무도 받지 않을 때만 음성 AI가 받을지 고를 수 있고, WhatsApp 번호마다 따로 설정할 수 있어요.

---

## WhatsApp 전화를 음성 AI가 받는다는 건 무슨 뜻인가요?

[동영상](https://jumpshare.com/embed/LY7rM4v5WYWWdYTJvDV8)

걸려 오는 WhatsApp 전화를 이미 만들어 둔 음성 AI 에이전트에게 연결하는 기능이에요. 응답 방식은 **팀 전용**, **Team, then Voice AI**, **Voice AI only** 세 가지입니다. 팀이 받을 때와 음성 AI가 받을 때를 직접 정할 수 있어요.

예를 들어 팀이 먼저 받게 하고, 20초 안에 아무도 받지 않으면 음성 AI가 자동으로 이어받게 할 수 있어요.

---

## WhatsApp 전화 응답 방식

응답 방식에 따라 걸려 오는 전화를 팀원이 받을지, 음성 AI가 받을지, 둘이 차례로 받을지가 달라져요. 통화량과 고객이 사람과 연결될 가능성을 고려해 알맞은 방식을 고르세요.

### **팀 전용**

걸려 오는 WhatsApp 전화가 선택한 팀원에게만 울리고, 음성 AI는 관여하지 않아요. 직원이 직접 전화를 받고 싶은 비즈니스에 알맞아요.

- 걸려 오는 전화가 선택한 팀원에게 울려요.
- 팀원은 최대 6명까지 선택할 수 있어요.
- 이 방식에서는 음성 AI가 전화를 받지 않아요.

![팀 전용 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083891456/original/7raKoeDhx-WgtkynUgz4AxIcGT0AKe3esg.png?1792599031)

### **Team, then Voice AI**(팀 먼저, 이후 음성 AI)

팀이 먼저 전화를 받을 기회를 갖는 방식이에요. 정해 둔 대기 시간 안에 아무도 받지 않으면 선택한 음성 AI 에이전트가 자동으로 전화를 받아요.

사람이 먼저 응대하되, 받지 못한 전화는 음성 AI가 처리하게 하고 싶을 때 유용해요.

- **팀원**: 걸려 오는 전화를 받을 팀원을 최대 6명까지 선택해요.
- **음성 AI 에이전트**: 팀이 받지 못할 때 전화를 받을 음성 AI 에이전트를 이미 만들어 둔 것 중에서 골라요.
- **Voice AI answers after**(음성 AI가 받기까지의 시간): 팀원에게 전화가 울리는 시간을 정해요. 음성 AI가 이어받는 시점이에요. 10초, 15초, 20초, 30초 중에서 고를 수 있고 기본값은 20초예요.

![Team, then Voice AI 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083891492/original/VE0qL6JAgN5Lhx_PPHS34HqVf8OrR5C5Uw.png?1792599054)

### **Voice AI only**(음성 AI 전용)

팀원에게 먼저 울리지 않고, 걸려 오는 WhatsApp 전화를 선택한 음성 AI 에이전트에게 바로 연결해요. 전화 응대를 자동화하고 싶은 비즈니스에 알맞아요.

- 걸려 오는 전화가 음성 AI에 바로 연결돼요.
- 전화를 받을 음성 AI 에이전트를 이미 만들어 둔 것 중에서 골라요.
- 팀원 선택과 응답 대기 시간 설정은 필요 없어요.

![Voice AI only 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083891535/original/7py-GLKTApBhnxkNErzacQkyKVzZI9KoIg.png?1792599090)

---

## WhatsApp 전화에 음성 AI 설정하기

연결된 WhatsApp 번호마다 걸려 오는 전화를 누가 받을지 정할 수 있어요. 시작하기 전에 해당 번호에서 WhatsApp 전화 기능을 쓸 수 있는지 확인하세요. [하이퍼클래스의 WhatsApp 전화](../31-리셀링/whatsapp-calling-in-hyperclass.md)와 [WhatsApp 음성 통화](../13-AI-Employee/Voice-AI/whatsapp-voice-calling-in-hyperclass.md) 문서에서 자세히 볼 수 있어요. 전화를 받을 음성 AI 에이전트도 미리 만들어 두세요. 만드는 방법은 [음성 AI 에이전트 만들기](../13-AI-Employee/how-to-create-voice-ai-agents.md)를 참고하세요.

1. 서브 계정에서 **설정 > WhatsApp > 전화 거는 중**으로 이동해 설정할 번호를 열어요.
2. **Allow voice calls**(음성 통화 허용)가 켜져 있는지 확인해요.
3. **Who answers WhatsApp calls?**(WhatsApp 전화를 누가 받나요?)에서 **Team, then Voice AI** 또는 **Voice AI only**를 선택해요.
4. 드롭다운에서 **음성 AI 에이전트**를 선택해요.
5. **Team, then Voice AI**를 골랐다면 전화를 받을 **팀원**(최대 6명)을 선택하고 **Voice AI answers after**를 설정해요.
6. **저장**을 클릭해요.

---

## 자주 묻는 질문

### WhatsApp 번호마다 다른 응답 방식을 설정할 수 있나요?

네. WhatsApp 번호마다 전화 설정이 따로 있어요. 한 번호는 **Team, then Voice AI**로, 다른 번호는 **Voice AI only**로 설정해도 서로 영향을 주지 않아요.

### WhatsApp 전화용 음성 AI 에이전트를 따로 만들어야 하나요?

아니요. **음성 AI 에이전트** 드롭다운에서 이미 만들어 둔 에이전트를 고르면 돼요. 설정을 바꿔야 하면 **Edit agent**(에이전트 편집)로 에이전트 설정 화면에 들어가세요.

### 설정한 뒤에 팀 전용, Team, then Voice AI, Voice AI only 사이를 바꿀 수 있나요?

네. 언제든 해당 WhatsApp 번호의 전화 설정으로 돌아가 응답 방식을 바꾸고 저장하면 돼요.

### 팀이 걸려 온 WhatsApp 전화를 받지 않으면 어떻게 되나요?

**Team, then Voice AI**를 쓰고 있다면, 정해 둔 대기 시간(10초, 15초, 20초, 30초)이 지난 뒤 선택한 음성 AI 에이전트가 자동으로 전화를 받아요. **팀 전용**을 쓰고 있다면 음성 AI는 전화를 받지 않아요. 음성 AI가 전화를 받는 과정은 [음성 AI 인바운드 통화 흐름](../13-AI-Employee/inbound-call-flow-for-voice-ai-calls.md)에서 확인할 수 있어요.
