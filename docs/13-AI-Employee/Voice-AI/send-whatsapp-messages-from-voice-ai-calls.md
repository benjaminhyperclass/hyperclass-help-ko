---
원문: /support/solutions/articles/155000008302-send-whatsapp-messages-from-voice-ai-calls
번역일: 2026-11-06
카테고리: 13-AI-Employee
---

# 음성 AI 통화 중 WhatsApp 메시지 보내기

음성 AI 에이전트가 실시간 통화 중에 승인된 WhatsApp 템플릿을 발신자에게 자동으로 보내도록 설정하는 방법을 설명해요. 예약 링크, 결제 정보, 사업장 안내처럼 통화 중에 필요한 정보를 바로 전달할 때 쓰세요.

이 문서에서는 **WhatsApp 메시지 보내기** 액션을 설정하는 방법, 실행 조건을 정하는 방법, 규정을 지켜 메시지를 보내는 방법을 다뤄요.

{% hint style="info" %}
**Voice AI - Send WhatsApp Message Action (Location)**(음성 AI - WhatsApp 메시지 보내기 액션(로케이션)) 기능은 **설정 > 실험실**에서 먼저 켜야 해요. 켜지 않으면 음성 AI 에이전트 설정에 이 액션이 나타나지 않아요.
{% endhint %}

## WhatsApp 메시지 보내기 액션이란?

**WhatsApp 메시지 보내기** 액션을 쓰면 음성 AI 에이전트가 전화 통화 중에 미리 승인된 WhatsApp 템플릿을 연락처에게 자동으로 보낼 수 있어요. 발신자가 예약 링크, 결제 정보, 사업장 연락처 같은 정보를 요청하면 에이전트가 대화를 끊지 않고 해당 WhatsApp 메시지를 연락처의 WhatsApp 번호로 바로 보내요.

이 액션은 연결해 둔 WhatsApp Business 번호를 사용하고, WhatsApp이 승인한 템플릿만 보내요. 그래서 모든 메시지가 WhatsApp 메시징 정책을 지켜요. 에이전트는 통화 중에 직접 메시지를 작성하거나, 템플릿을 수정하거나, 수신자를 바꿀 수 없어요.

## 주요 장점

- 즉시 정보 전달 — 예약 링크, 결제 URL, 사업장 정보를 발신자가 필요한 순간에 보내요. 발신자가 정보를 받아 적거나 웹사이트를 찾아갈 필요가 없어요.
- 끊김 없는 통화 — 메시지는 비동기로 전송돼서 AI 에이전트와 발신자의 대화를 방해하거나 멈추지 않아요.
- 수신자 자동 인식 — 통화와 연결된 연락처의 WhatsApp 번호로 자동 전송돼요. 전화번호를 직접 입력할 필요가 없어요.
- WhatsApp 정책 준수 — 승인된 WhatsApp 템플릿만 보낼 수 있어서 모든 메시지가 WhatsApp Business API 정책과 템플릿 가이드라인을 지켜요.
- 상황별 실행 조건 — 발신자가 예약 정보나 결제 방법을 물을 때처럼, 메시지를 보낼 대화 상황을 직접 정할 수 있어요.

## 준비 사항

**WhatsApp 메시지 보내기** 액션을 설정하기 전에 서브 계정에서 아래 조건을 갖췄는지 확인하세요.

- WhatsApp Business API 설정: 서브 계정에 WhatsApp이 설정되어 있고, WhatsApp을 쓸 수 있는 전화번호가 1개 이상 연결되어 있어야 해요(**설정 > WhatsApp**).
- 승인된 WhatsApp 템플릿: Meta 가이드라인에 맞게 만들어 WhatsApp의 승인을 받은 메시지 템플릿이 1개 이상 있어야 음성 AI 에이전트에서 쓸 수 있어요.
- 실험실 기능 켜기: **설정 > 실험실**에서 **Voice AI - Send WhatsApp Message Action (Location)** 기능을 켜야 음성 AI 에이전트 설정에 액션이 나타나요.

## WhatsApp 메시지 보내기 액션 설정하기

음성 AI 에이전트가 통화 중에 WhatsApp 메시지를 보내도록 설정하는 순서예요.

1. **설정 > 실험실**로 이동해 **Voice AI - Send WhatsApp Message Action (Location)** 기능을 켜세요. 이렇게 하면 음성 AI 에이전트 설정에서 이 액션을 쓸 수 있어요.

   ![실험실에서 WhatsApp 메시지 보내기 액션 기능 켜기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077129474/original/tKluSeMjDa2NSEtMgkMlEEPk6TRSeD6ktA.png?1785324686)

2. 설정할 음성 AI 에이전트를 열고 **작업** 섹션으로 이동하세요.
3. **+ New Action**(새 액션 추가) 버튼을 눌러 액션 선택 메뉴를 여세요.

   ![작업 섹션에서 새 액션 추가 버튼 누르기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077129551/original/RmTgQCwXp_I8VqBrz8WI4l19wFj7spEK_A.png?1785324736)

4. 액션 드롭다운 메뉴에서 **WhatsApp 메시지 보내기**를 선택하세요. 통화 중에 액션을 언제, 어떻게 실행할지 정하는 설정 창이 열려요.

   ![액션 드롭다운에서 WhatsApp 메시지 보내기 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077129630/original/xb-FgjFKdEc_ejRBVTY8bX326xbiNl276Q.png?1785324785)

5. **액션 이름**에 액션을 알아볼 수 있는 이름을 입력하세요. 예: "send_whatsapp", "send_booking_link". 에이전트 설정에서 이 액션을 구분하는 데 쓰여요.
6. **When should the WhatsApp delivery take place?**(WhatsApp 메시지를 언제 보낼까요?)에 실행 조건을 입력하세요. 예: "고객이 WhatsApp으로 견적서를 받고 싶어 할 때", "발신자가 예약 링크를 요청할 때". AI 에이전트는 대화를 살피다가 이 조건에 맞으면 액션을 실행해요.
7. **What to say before sending WhatsApp message**(WhatsApp 메시지를 보내기 전에 할 말)에 메시지를 보내기 직전에 AI 에이전트가 할 말을 입력하세요. 예: "지금 바로 보내 드릴게요.", "WhatsApp으로 보내 드리겠습니다." 발신자가 무슨 일이 일어나는지 알 수 있어요.
8. **보낸 사람** 드롭다운에서 메시지를 보낼 WhatsApp Business 번호를 선택하세요. **설정 > WhatsApp**에서 서브 계정에 이미 연결한 번호여야 해요.
9. **템플릿** 드롭다운에서 WhatsApp의 승인을 받은 템플릿을 선택하세요. 드롭다운에는 서브 계정에서 쓸 수 있는 승인된 템플릿이 모두 표시되고, 템플릿 이름, 카테고리, 언어, 변수 개수를 볼 수 있어요. 이 액션으로는 승인된 템플릿만 보낼 수 있어요.
10. 선택한 템플릿에 본문 변수(내용이 바뀌는 자리)가 있으면 **Body variables**(본문 변수) 섹션에서 변수마다 값을 입력하세요. 값은 자유 텍스트로 입력해요. 변수를 채우면 오른쪽 실시간 미리보기에 연락처에게 실제로 보낼 메시지가 표시되므로, 저장하기 전에 내용을 확인할 수 있어요.
11. **업데이트**를 눌러 액션 설정을 저장하세요. 저장한 액션은 음성 AI 에이전트의 **작업** 패널 안 **DURING THE CALL**(통화 중) 섹션에 표시돼요. 이제 통화 중에 실행 조건이 충족되면 에이전트가 선택한 WhatsApp 템플릿을 보내요.

    ![통화 중 섹션에 표시된 WhatsApp 메시지 보내기 액션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077129739/original/F5H1wsdADNmIVv5OxVBzIdu-Pxs2znK3Rw.png?1785324863)

## 통화 중 액션이 동작하는 방식

설정을 마치면 **WhatsApp 메시지 보내기** 액션은 정해 둔 실행 조건에 따라 실시간 통화 중에 자동으로 동작해요.

AI 에이전트가 실행 조건이 충족됐다고 판단하면(예: 발신자가 WhatsApp으로 견적서를 요청할 때), 먼저 **What to say before sending WhatsApp message** 필드에 입력해 둔 말("지금 바로 보내 드릴게요." 같은 문구)을 해요. 그다음 설정해 둔 WhatsApp 템플릿을 통화와 연결된 연락처의 WhatsApp 번호로 자동 전송해요.

메시지는 비동기로 전송돼요. 통화를 방해하거나 멈추지 않고 백그라운드에서 보내진다는 뜻이에요. 연락처에게 WhatsApp 메시지가 전달되는 동안에도 AI 에이전트는 대화를 이어 갈 수 있어요.

## 규정 준수와 전송 관련 중요 사항

**WhatsApp 메시지 보내기** 액션은 WhatsApp 메시징 정책을 완전히 지키면서도 끊김 없는 사용 경험을 주도록 만들어졌어요.

### 템플릿으로만 발송

AI 에이전트는 미리 승인된 WhatsApp 템플릿만 보낼 수 있어요. 자유 형식의 WhatsApp 메시지를 작성하거나, 템플릿 내용을 수정하거나, 템플릿 구조를 바꿀 수 없어요. 그래서 모든 메시지가 WhatsApp Business API 정책과 템플릿 승인 요건을 지켜요.

### 비동기 전송

WhatsApp 메시지는 백그라운드에서 전송되고 진행 중인 통화를 방해하지 않아요. 메시지가 전송되는 동안에도 AI 에이전트가 대화를 이어 가므로 발신자는 끊김 없이 통화할 수 있어요.

### 고정된 수신자

WhatsApp 메시지는 통화와 연결된 연락처에게 자동으로 전송돼요. AI 에이전트는 통화 중에 수신자를 바꾸거나 다른 WhatsApp 번호로 메시지를 보낼 수 없어요.

## 자주 묻는 질문

### AI 에이전트가 통화 중에 직접 작성한 WhatsApp 메시지를 보낼 수 있나요?
아니요. AI 에이전트는 미리 승인된 WhatsApp 템플릿만 보낼 수 있어요. 자유 형식 메시지를 작성하거나, 템플릿 내용을 수정하거나, 템플릿 구조를 바꿀 수 없어요. 이렇게 해서 WhatsApp Business API 정책과 템플릿 승인 요건을 지켜요.

### WhatsApp 메시지를 보내면 통화가 끊기나요?
아니요. 메시지는 비동기로 전송돼서 진행 중인 대화를 방해하거나 멈추지 않아요. WhatsApp 메시지가 백그라운드에서 전송되는 동안에도 AI 에이전트는 발신자와 계속 이야기해요.

### AI 에이전트는 어느 WhatsApp 번호로 메시지를 보낼지 어떻게 알아요?
메시지는 통화 중인 연락처의 WhatsApp 번호로 자동 전송돼요. 전화번호를 직접 입력할 필요가 없어요. 시스템이 현재 통화와 연결된 연락처 정보를 사용해요.

### 선택한 WhatsApp 템플릿이 승인되지 않았으면 어떻게 되나요?
**템플릿** 드롭다운에는 승인된 WhatsApp 템플릿만 표시돼요. WhatsApp의 승인을 받지 못한 템플릿은 **WhatsApp 메시지 보내기** 액션에서 쓸 수 없어요. 액션을 설정하기 전에 **설정 > WhatsApp**에서 템플릿이 승인되었는지 확인하세요.

### 한 번의 통화에서 WhatsApp 메시지를 여러 번 보낼 수 있나요?
네. 같은 음성 AI 에이전트에 실행 조건이 서로 다른 **WhatsApp 메시지 보내기** 액션을 여러 개 설정할 수 있어요. 각 액션은 통화 중 자신의 실행 조건이 충족될 때 따로 실행돼요.

### WhatsApp 템플릿은 어디에서 관리하나요?
WhatsApp 템플릿은 **설정 > WhatsApp**에서 만들고 관리해요. 템플릿을 만든 뒤 WhatsApp의 승인을 받아야 **WhatsApp 메시지 보내기** 액션에서 쓸 수 있어요.

### 액션을 저장하기 전에 WhatsApp 메시지를 미리 볼 수 있나요?
네. 템플릿 변수를 입력하면 설정 창 오른쪽에 연락처에게 보낼 최종 메시지가 실시간 미리보기로 표시돼요. 액션 설정을 저장하기 전에 메시지 내용을 확인할 수 있어요.

### 모든 하이퍼클래스 계정에서 WhatsApp 메시지 보내기 액션을 쓸 수 있나요?
**WhatsApp 메시지 보내기** 액션은 현재 실험실 기능으로 제공돼요. 쓰려면 **설정 > 실험실**에서 **Voice AI - Send WhatsApp Message Action (Location)** 기능을 켜야 해요. 실험실 기능은 테스트 중이거나 앞서 써 볼 수 있는 단계라서 변경되거나 제한이 있을 수 있어요.
