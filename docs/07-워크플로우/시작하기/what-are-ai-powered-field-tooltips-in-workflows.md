---
원문: /support/solutions/articles/155000007460-what-are-ai-powered-field-tooltips-in-workflows-
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 AI 필드 툴팁 (AI-Powered Field Tooltips)

AI 필드 툴팁은 워크플로우 빌더의 각 필드 옆에서 바로 도움말을 보여 주는 기능이에요. 정보 아이콘에 마우스를 올리면 짧은 설명이 나오고, AI 어시스턴트를 열면 대화하듯 더 자세한 설명을 들을 수 있어요. 설정이 헷갈릴 때 추측하지 않고 확인할 수 있어서, 실수를 줄이고 워크플로우를 더 자신 있게 만들 수 있어요.

## AI 필드 툴팁이란?

AI 필드 툴팁은 워크플로우 액션 안의 필드마다 AI가 설명을 덧붙여 주는 기능이에요. 고급 설정에서 특정 필드가 워크플로우 동작에 어떤 영향을 주는지 정확히 알고 싶을 때 특히 유용해요. 빌더를 벗어나거나 지식 베이스를 검색하지 않아도 돼요.

이 기능은 현재 실험 단계예요. **Manual SMS**(수동 SMS)와 **Manual Call**(수동 전화) 액션의 **Advanced Settings**(고급 설정) 안에 있는 필드 두 곳에서 사용할 수 있어요.

## AI 필드 툴팁의 장점

고급 설정에서는 작은 설정 하나가 발송 시점, 담당자 지정, 워크플로우 결과에 영향을 줄 수 있어요. 필드 단위 AI 설명은 이런 혼란을 줄여 주고, 각 필드가 하는 일을 이해하면서 빠르게 작업하도록 도와줘요.

- 빠른 설정: 워크플로우를 만드는 중에 바로 설정 내용을 확인할 수 있어요. 탭을 오갈 필요가 없어요.
- 실수 감소: 워크플로우 동작을 바꿀 수 있는 설정을 저장하기 전에 그 영향을 이해할 수 있어요.
- 쉬운 학습: 처음 쓰는 사용자도 상황에 맞는 도움말을 보면서 빌더를 익힐 수 있어요.
- 필요할 때 자세한 설명: **Explain Field**(필드 설명)를 누르면 대화하듯 더 자세한 설명을 볼 수 있어요.
- 후속 질문: AI 어시스턴트에 질문을 이어 가며 이해한 내용이 맞는지 확인할 수 있어요.

## AI 필드 툴팁 사용하기

먼저 지원되는 워크플로우 액션에서 ℹ️ 아이콘이 있는 필드를 찾아야 해요. 이 기능은 실험 단계라서 별도로 켜는 설정은 없어요. 알맞은 위치에 있는지 확인하고, 툴팁과 **Explain Field** 순서로 사용하면 돼요.

1. **자동화 > 워크플로우**로 이동하세요.

   ![자동화 메뉴에서 워크플로우로 이동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066572328/original/jTu1BriMOC8vYRGkH19m1YTl8krK8Alleg.png?1773136495)
2. 기존 워크플로우를 열거나 새 워크플로우를 만드세요.

   ![워크플로우 열기 또는 새로 만들기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066572435/original/JemKtBk_xMdWskn6-7hKEzhtiJws6QwiJg.png?1773136555)
3. 지원되는 액션인 **Manual SMS** 또는 **Manual Call**을 추가하거나 선택하세요.

   ![지원되는 액션 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066572198/original/KJqBhOSDQ5natFKJ5_1GIgo0hL_AJeS4NA.png?1773136424)
4. 액션 설정 패널에서 **Advanced Settings**를 여세요.

   ![액션 설정 패널에서 고급 설정 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066572588/original/_B8v0_gI6TO8XimAuNvKiLD22gYqkwJMow.png?1773136664)
5. 지원되는 필드 옆에서 ℹ️ 아이콘을 찾으세요.
6. ℹ️ 아이콘에 마우스를 올려 짧은 툴팁 설명을 읽으세요.
7. **Explain Field**를 클릭해 AI 어시스턴트를 여세요.

   ![정보 아이콘 툴팁과 필드 설명 버튼으로 AI 어시스턴트 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066572982/original/3Wt9TVp5qdIsggVtTb8jJ6Va_CUCb327Uw.gif?1773136823)
8. AI 어시스턴트에 후속 질문을 해 보세요.
   ![AI 어시스턴트에 후속 질문하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066573055/original/AA-bTysSv3YhyZrzg78UUajaIRhE3X5mxw.png?1773136886)

{% hint style="info" %}
워크플로우 빌더가 처음이라면 [워크플로우 시작하기](../기타/getting-started-with-workflows.md)와 [워크플로우 빌더 둘러보기](../기타/workflow-builder-walkthrough.md)를 참고하세요. 빌더 안의 AI 도우미는 [워크플로우 AI 어시스턴트](../../13-AI-Employee/workflow-ai-assistant.md)에서 확인할 수 있어요. **Manual SMS** 액션 자체의 설정은 [Manual SMS 액션](../Communication-Workflow-Actions/workflow-action-manual-sms.md) 문서를 보세요.
{% endhint %}

## 자주 묻는 질문

### 필드 옆에 ℹ️ 아이콘이 보이지 않아요. 왜 그런가요?
AI 필드 툴팁은 현재 실험 단계라서 특정 필드에만 나타나고, 아직 모든 계정에 보이지는 않을 수 있어요. 또한 **Manual SMS** 또는 **Manual Call**의 **Advanced Settings**를 보고 있는지 확인하세요.

### 툴팁은 보이는데 **Explain Field** 버튼이 안 보여요.
실험 기간에는 **Explain Field** 버튼이 지원되는 필드와 대상 계정에만 나타날 수 있어요. 다른 지원 액션(**Manual SMS** 또는 **Manual Call**)이나 **Advanced Settings** 안의 다른 필드를 확인해 보세요.

### **Explain Field**를 누르면 설정이 자동으로 바뀌나요?
아니요. **Explain Field**는 필드가 하는 일을 설명해 주는 기능이에요. 워크플로우 설정은 직접 바꾸고 저장해야 해요.

### 내 워크플로우 목표에 맞춰 후속 질문을 해도 되나요?
네. **Explain Field**를 클릭한 뒤 후속 질문을 하면 활용 사례와, 해당 필드가 워크플로우 동작에 어떤 영향을 줄 수 있는지 알아볼 수 있어요.

### 액션과 트리거에 있는 **Learn More**와 같은 기능인가요?
관련은 있지만 시작하는 곳이 달라요. **Learn More**는 액션과 트리거에 대한 AI 설명을 보여 주고, AI 필드 툴팁은 액션 설정 안의 개별 필드에 집중해요. **Learn More**는 [워크플로우 빌더: AI로 자세히 알아보기](workflow-builder-learn-more-using-ai.md) 문서에서 확인할 수 있어요.

### 다른 액션과 트리거에도 적용되나요?
결과가 좋으면 확대할 계획이에요. 다만 실험 단계라서 제공 범위는 확대 과정에서 달라질 수 있어요.

### AI 설명이 액션에서 보이는 내용과 달라요. 어떻게 하나요?
액션 문서를 기준으로 삼고, 중요한 워크플로우 변경 사항을 게시하기 전에 설정 동작을 확인하세요. AI 어시스턴트는 설정을 이해하도록 돕는 도구이고, 액션의 공식 동작은 액션 문서에서 확인하는 것이 가장 정확해요.

### 워크플로우 밖에서도 쓸 수 있나요?
아니요. 이 실험은 현재 워크플로우 빌더 안의 필드 단위 도움말에 집중하고 있어요. **Manual SMS**와 **Manual Call**의 **Advanced Settings**부터 시작했어요.
