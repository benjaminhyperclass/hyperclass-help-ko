---
원문: https://help.gohighlevel.com/support/solutions/articles/155000008669-sms-ai-generate-sms-messages-with-ai-in-workflows
번역일: 2026-11-07
카테고리: 13-AI-Employee
---

# 워크플로우에서 AI로 SMS 문구 만들기 (SMS AI)

워크플로우의 SMS 액션 안에서 AI 프롬프트로 SMS 메시지를 바로 만들 수 있어요. 직접 문구를 쓰지 않아도 돼요. 사용 목적을 설명하고 톤을 고르면 AI가 메시지를 만들어 줘요.

이 문서에서는 SMS AI가 무엇인지, 어떤 점이 좋은지, 그리고 AI가 만든 SMS 메시지를 워크플로우에 넣는 방법을 순서대로 알아봐요.

## SMS AI란?

SMS AI는 하이퍼클래스 워크플로우에 들어 있는 AI 어시스턴트예요. 전문적이고 전환율 높은 SMS 메시지를 바로 만들어 줘요. 문구를 직접 쓰는 대신, 사용 목적을 일상적인 말로 설명하면 AI가 상황에 맞는 메시지를 만들어요.

이 기능은 워크플로우의 SMS 액션에 바로 들어 있어요. 카피라이팅 경험이 없어도 설득력 있는 메시지를 쉽게 만들 수 있어요. 톤을 바꾸거나 다른 버전으로 다시 생성할 수 있고, 마음에 드는 문구는 클릭 한 번으로 적용할 수 있어요.

![워크플로우 SMS 액션에서 SMS AI를 사용하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080498263/original/Hyv6orGJZqEgUbv_z0WLsFQF23Hqq4G0fQ.png?1788960199)

## SMS AI의 장점

SMS AI는 속도, 품질, 사용 편의성을 함께 갖추고 있어요.

- 카피라이팅이 필요 없어요: 글쓰기 경험이 없어도 전문적인 SMS 메시지를 만들 수 있어요. 목표만 설명하면 AI가 내용을 만들어 줘요.
- 바로 만들어 줘요: 문구를 직접 다듬느라 시간을 쓰지 않아도, 전환율 높은 메시지를 몇 초 만에 만들 수 있어요.
- 상황에 맞는 내용을 만들어 줘요: 프로모션, 거래 안내, 정보 전달 등 사용 목적에 맞는 메시지를 만들어요.
- 톤을 고를 수 있어요: 전문적인 톤부터 캐주얼한 톤까지 브랜드에 맞는 톤을 고를 수 있어요. 고르지 않으면 기본 중립 톤이 적용돼요.
- 쉽게 다시 생성할 수 있어요: 기본으로 들어 있는 **Regenerate**(재생성) 버튼으로 처음부터 다시 하지 않고도 다른 버전이나 개선안을 받을 수 있어요.
- 워크플로우 안에서 바로 쓸 수 있어요: 빌더를 벗어나지 않고 워크플로우의 SMS 액션 안에서 SMS 내용을 만들고 적용할 수 있어요.

## AI로 SMS 메시지 만들기

다음 단계를 따라 워크플로우에서 AI가 만든 SMS 메시지를 사용해 보세요.

1. 워크플로우 빌더에서 워크플로우를 열어요. 메시지를 만들 SMS 액션을 추가하거나, 이미 있는 SMS 액션을 선택해요.
2. SMS 액션 설정 패널에서 **Write with AI**(AI로 작성) 버튼을 클릭해요. **AI Assistant**(AI 어시스턴트) 화면이 열려요.

   ![SMS 액션 설정 패널의 Write with AI 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080498553/original/RBfTrWfpMEMAFnvKqnumzW7ZN2P_rR2A1A.png?1788960247)

3. **AI Assistant** 입력란에 SMS로 이루고 싶은 목표를 적어요. 목표와 대상을 구체적으로 설명하세요.

   예: "연말 시즌 할인을 활용해 크리스마스 테마 상품을 구매하도록 안내하는 프로모션 SMS를 작성해 줘."

   ![AI Assistant 입력란에 사용 목적을 입력하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080499021/original/GjP_iJdv13nIaZNyttJoNXfoBr9SxJ_KUQ.gif?1788960375)

4. (선택) 브랜드에 맞는 톤을 골라요. 전문적, 캐주얼, 친근함, 긴급함 등을 고를 수 있어요. 이 단계를 건너뛰면 기본 중립 톤이 적용돼요.
5. **Generate**(생성) 버튼을 클릭해요. 입력한 설명과 선택한 톤에 맞춰 AI가 SMS 메시지를 만들고, 미리보기 영역에 보여 줘요.
6. 만들어진 SMS 내용을 확인해요. 마음에 들면 **Use Message**(메시지 사용)를 클릭해 SMS 액션에 넣어요. 이제 이 메시지가 워크플로우의 일부가 돼요.
7. 결과가 마음에 들지 않으면 **Regenerate**(재생성) 버튼을 눌러 다른 버전이나 개선안을 요청해요. 설명을 다시 입력하지 않아도 필요한 만큼 여러 번 재생성할 수 있어요.

{% hint style="info" %}
팁: 설명이 구체적일수록 AI가 더 좋은 결과를 만들어요. 대상, 오퍼, 긴급성, 원하는 콜투액션을 함께 적으면 좋아요.
{% endhint %}

{% hint style="info" %}
출시 예정: 이메일 AI도 곧 만나볼 수 있어요. AI 프롬프트로 개인화되고 브랜드에 맞는 이메일 콘텐츠를 만들 수 있게 될 예정이에요. 더 똑똑해질 이메일 자동화를 기대해 주세요.
{% endhint %}
