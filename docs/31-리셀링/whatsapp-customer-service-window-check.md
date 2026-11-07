---
원문: /support/solutions/articles/155000003235-whatsapp-customer-service-window-check
번역일: 2026-11-06
카테고리: 31-리셀링
---

# WhatsApp 고객 서비스 창 확인(Customer Service Window Check)

워크플로우에서 이 조건을 쓰면 24시간 서비스 창 안에서 자유 형식 WhatsApp 메시지를 무료로 보낼 수 있어요.

## 워크플로우에서 WhatsApp을 쓰기 전에 필요한 것

서브 계정에서 WhatsApp을 구독하고 활성화해야 해요. 서브 계정에서 WhatsApp을 설정하는 방법은 "WhatsApp Sub-Account Setup" 문서를 참고하세요.

비즈니스가 먼저 대화를 시작하려면 승인된 템플릿도 있어야 해요. 템플릿 만드는 방법은 [WhatsApp 템플릿 만들기](WhatsApp/how-to-create-a-whatsapp-template.md)를 참고하세요.

## 대화란

대화는 비즈니스와 고객 사이에 이어지는 24시간짜리 메시지 스레드예요. 요금도 대화를 기준으로 매겨져요. 자유 형식 메시지나 템플릿 메시지를 보내면 대화가 열려요.

고객에게 메시지를 보낼 때 아래 조건에 해당하면 대화가 열려요.

### 1. 마케팅·유틸리티·인증 대화

승인된 마케팅, 유틸리티, 인증 템플릿을 고객에게 보내면, 그 템플릿과 같은 카테고리의 대화가 이미 열려 있는지 확인해요. 열려 있으면 새 대화를 열지 않아요. 열려 있지 않으면 해당 카테고리의 새 대화가 24시간 동안 열려요.

예를 들어 볼게요.

- **0시간째:** 고객에게 타깃 프로모션(마케팅 템플릿 메시지)을 보내요. 열려 있는 마케팅 대화가 없어서 24시간짜리 마케팅 대화가 열려요.
- **4시간째:** 고객이 사이트에서 주문을 마쳐서 주문 확인(유틸리티 템플릿 메시지)을 보내요. 열려 있는 유틸리티 대화가 없어서 24시간짜리 유틸리티 대화가 열려요.
- **10시간째:** 배송 확인(유틸리티 템플릿 메시지)을 보내요. 이미 열려 있는 유틸리티 대화가 있어서 새 대화는 열리지 않아요.

### 2. 서비스 대화

템플릿 메시지가 아닌 메시지가 고객에게 전달되었는데 어떤 카테고리의 대화도 열려 있지 않으면 서비스 대화가 열려요.

{% hint style="info" %}
템플릿이 아닌 메시지를 보내려면 먼저 고객과의 고객 서비스 창이 열려 있어야 해요.
{% endhint %}

예를 들어 볼게요.

- **0시간째:** 고객에게 타깃 프로모션(마케팅 템플릿)을 보내요. 열려 있는 마케팅 대화가 없어서 24시간짜리 마케팅 대화가 열려요.
- **4시간째:** 고객이 메시지를 보내요. 고객 서비스 창이 열리고, 이후 24시간 동안 어떤 유형의 메시지든 보낼 수 있어요.
- **5시간째:** 인터랙티브 목록 메시지를 보내요. 이미 열려 있는 대화(마케팅 대화)가 있어서 서비스 대화는 열리지 않아요.
- **24시간째:** 마케팅 대화가 끝나요.
- **25시간째:** 24시간 고객 서비스 창은 아직 열려 있어서 두 번째 문자 메시지를 보내요. 열려 있는 대화가 없으므로 24시간짜리 서비스 대화가 열려요.
- **26시간째:** 24시간 고객 서비스 창은 아직 열려 있어서 세 번째 문자 메시지를 보내요. 이미 열려 있는 서비스 대화가 있어서 새 대화는 열리지 않아요.

## 고객 서비스 창이란

WhatsApp 사용자가 메시지를 보내면 고객 서비스 창이라는 24시간 타이머가 시작되거나 다시 시작돼요.

## 무료 구간 대화

WhatsApp 비즈니스 계정 하나당 모든 비즈니스 전화번호를 합쳐 매월 서비스 대화 1,000건이 무료예요. 이 횟수는 매월 초에 WhatsApp 비즈니스 계정의 시간대를 기준으로 다시 채워져요.

마케팅, 유틸리티, 인증 대화는 무료 구간에 포함되지 않아요.

---

## WhatsApp: Customer Service Window Check 사용하기

자유 형식 메시지를 보내려면 먼저 고객 서비스 창이 열려 있는지 확인해야 해요. 열려 있으면 자유 형식 메시지를 보낼 수 있어요. 고객이 먼저 보낸 메시지에 답하면 서비스 대화가 자동으로 열려요. 서비스 대화는 매월 1,000건까지 무료로 시작할 수 있어서 메시지 비용을 줄이는 데 도움이 돼요.

1. **자동화 > 워크플로우 > Create Workflow**(워크플로우 만들기) **> 처음부터 시작**으로 이동하세요.

   ![워크플로우를 처음부터 시작하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032110933/original/dhgXLmbZK6BUiWao0efgrITVnawa0U_GYA.png?1725326485)

2. 더하기 버튼을 눌러 액션을 추가한 다음 **WhatsApp: Customer Service Window Check**(WhatsApp 고객 서비스 창 확인)를 선택하세요.

   ![액션 목록에서 고객 서비스 창 확인을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032064326/original/5Wu83WCEBufxxBUQgacV5vC9YJg-2iHmGg.png?1725273049)

3. 대화에 사용할 전화번호를 선택하세요.

   {% hint style="info" %}
   고객 서비스 창이 열려 있으면 자유 형식 메시지를 무제한으로 보낼 수 있어요. 창이 닫혀 있으면 마케팅 또는 유틸리티 템플릿을 보내서 고객과의 대화를 시작해야 해요.
   {% endhint %}

   ![대화 전화번호를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042687784/original/VUBA4yUfCv94WiHMIdMfffm98Q4CejeT7w.png?1741171907)

4. **Open**(고객 서비스 창이 열려 있을 때) 분기에서 **WhatsApp** 액션을 선택하고 템플릿을 **None – Free form message**(없음 – 자유 형식 메시지)로 설정하세요.

   {% hint style="info" %}
   고객 서비스 창이 열려 있으면 고객에게 자유 형식 메시지를 무제한으로 보낼 수 있어요. WABA 계정마다 매월 서비스 대화 1,000건이 무료이므로, 서비스 대화 1,000건을 다 쓰기 전까지는 이 메시지를 무료로 보낼 수 있어요.
   {% endhint %}

   ![Open 분기에서 자유 형식 메시지를 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032078204/original/D2yDApfBewDZk7TVW8zQWpw4YGPI0Npmmg.png?1725280992)

5. **Closed**(고객 서비스 창이 닫혀 있을 때) 분기에서 **WhatsApp** 액션을 선택하고, 마케팅 또는 유틸리티 템플릿을 골라 고객과의 대화를 시작하세요.

   {% hint style="info" %}
   고객 서비스 창이 닫혀 있다는 건 지난 24시간 동안 고객의 답장이 없었다는 뜻이에요. 이때는 WhatsApp 마케팅 또는 유틸리티 템플릿만 보낼 수 있어요.
   {% endhint %}

   ![Closed 분기에서 템플릿을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032078337/original/saR0wa8LHzRlSZusnI7D512Lz24k-tpjdQ.png?1725281089)

---

## 자주 묻는 질문

### 워크플로우에서 WhatsApp 메시지를 보낼 때 "None – Free form message"와 템플릿 선택은 어떻게 달라요?

**None – Free form message**(없음 – 자유 형식 메시지)를 고르면 24시간 고객 서비스 창 안에서 메시지를 자유롭게 써서 보낼 수 있어요. 템플릿을 고르면 미리 승인받은 메시지를 보내요. 24시간 창 밖에서 대화를 시작할 때나 특정 마케팅·지원 목적으로 보낼 때 쓰면 좋아요.

### 무료 구간 대화 수는 어디에서 확인하나요?

[Facebook Business Manager](https://business.facebook.com/wa/manage/insights/)로 이동해 WhatsApp 계정을 선택한 다음 **계정 도구 > 인사이트**로 이동하세요.

![무료 구간 대화 수를 확인하는 인사이트 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032110899/original/ZW0QUfhwK2gkSe_4GcLJutkU6GC4dCVO1Q.png?1725326249)

### WhatsApp과 SMS, 이메일 같은 다른 채널을 함께 쓰는 워크플로우를 만들 수 있나요?

네, 만들 수 있어요. CRM 워크플로우는 WhatsApp과 다른 소통 채널을 자유롭게 조합해서 다양한 자동화 흐름을 구성할 수 있어요.

### WhatsApp 워크플로우 자동화로 24시간 고객 서비스 창 밖에서도 메시지를 보낼 수 있나요?

네, 24시간 고객 서비스 창이 닫힌 뒤에는 승인된 WhatsApp 템플릿으로 먼저 연락하거나 후속 메시지를 보낼 수 있어요. 다만 템플릿 기반 메시지에는 추가 요금이 발생해요.

### "무료 진입점 대화(Free Entry Point Conversation)"는 무엇이고 일반 대화와 어떻게 달라요?

- 고객이 "Click to WhatsApp" 광고나 Facebook 행동 유도 버튼을 클릭하면 시작돼요.
- 기본 24시간 창보다 긴 72시간 동안 이어져요.
- 이 연장된 창 동안에는 자유 형식 메시지와 템플릿 메시지를 모두 보낼 수 있어요.
