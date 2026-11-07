---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003431-voice-ai-how-to-configure-inbound-call-flow
번역일: 2026-11-06
카테고리: 13-AI-Employee
---

# 음성 AI 수신 전화 흐름 설정

하이퍼클래스 전화번호로 걸려 온 전화를 음성 AI 에이전트에게 연결하는 방법을 안내해요. 전화번호를 에이전트에 연결하고, 전화가 제대로 처리되도록 시간 초과를 조정하는 방법까지 다뤄요. 설정해 두면 걸려 온 전화에 자동으로 응답하고, 발신자의 질문에 답하며, 놓치는 기회를 줄일 수 있어요.

## 음성 AI 수신 전화 흐름이란?

수신 전화 흐름을 설정하면 하이퍼클래스 전화번호로 걸려 온 전화를 음성 AI 에이전트에게 연결할 수 있어요. 전화 응대를 자동화하고, 자주 묻는 질문에 대응하고, 발신자가 알맞은 응대를 받도록 도와줘요. 사람이 직접 받는 방식에만 의존하지 않아도 돼요.

전화번호를 음성 AI 에이전트에 연결하면 에이전트가 전화를 받고, 발신자와 대화하고, 설정된 구성에 따라 응답해요. 수신 전화 업무도 함께 지원해요.

### 수신 전화 흐름을 설정하면 좋은 점

- 자동 전화 응대: 팀원이 먼저 받지 않아도 음성 AI가 수신 전화를 받아요.
- 빠른 응답: 연결이 제대로 설정되어 있으면 발신자가 활성화된 음성 AI 에이전트에게 바로 연결돼요.
- 넓어진 응대 범위: 근무 시간 외나 바쁜 시간대에도 음성 AI가 수신 전화를 처리하는 데 도움이 돼요.
- 세밀한 연결 제어: **Call Forwarding**(통화 전달) 설정으로 전화번호가 수신 전화를 어떻게 처리할지 정할 수 있어요.
- 놓치는 기회 감소: 시간 초과를 알맞게 설정하면 음성 AI가 받기 전에 전화가 휴대전화 음성사서함으로 넘어가는 일을 막는 데 도움이 돼요.

## Call Forwarding 설정은 어디에 있나요?

### 1단계: 번호 관리로 이동하기

1. 서브 계정에서 **설정**을 클릭하세요.

   ![설정 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049245444/original/d7Nl2mGkrxeyQrMafHOZEv0iwft9t-J3OQ.png?1751472295)
2. **전화 시스템** 탭을 클릭하세요.
3. **번호 관리** 탭에 서브 계정에서 사용할 수 있는 번호 목록이 표시돼요.

   ![번호 관리 탭의 번호 목록](https://jumpshare.com/share/FkbeBJ5jV0m2UlN6wfir+/Screen+Shot+2026-06-29+at+18.16.23.png)

### 2단계: 구성 편집 열기

1. 설정할 번호 옆의 점 세 개 아이콘을 클릭하세요.
2. 팝업 메뉴에서 **구성 편집**을 클릭하세요.

   ![구성 편집 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049245548/original/1zUmXclHDt-lAZu28HXGNwrGou6pDv9F_g.png?1751472415)
3. **Call Forwarding** 탭을 여세요.
4. 통화 연결 방식에서 **음성 AI** 옵션을 선택하거나 확인하세요.

   ![Call Forwarding 탭의 음성 AI 옵션](https://jumpshare.com/share/UAEltwoCd2RdIIbypmVo+/Screen+Shot+2026-06-29+at+18.06.06.png)

{% hint style="info" %}
통화 전달에 대한 자세한 내용은 [하이퍼클래스 전화번호로 통화 전달하기](../15-전화-시스템/call-forwarding-to-your-hyperclass-phone-number.md)를, 수신 전화의 전체 흐름은 [수신 전화 라우팅 이해하기](../15-전화-시스템/통화/inbound-call-routing-explained.md)를 참고하세요.
{% endhint %}

## 통화 전달 없이 음성 AI 사용하기

{% hint style="warning" %}
음성 AI 에이전트에 연결한 전화번호에 통화 전달이 활성화되어 있지 않으면, 그 번호로 걸려 오는 전화는 항상 음성 AI 에이전트가 받아요.

예외는 AI 에이전트에 배정한 번호가 서브 계정의 기본 전화번호인 경우뿐이에요.
{% endhint %}

수신 전화를 음성 AI 에이전트로 바로 연결하면 좋은 이유는 여러 가지예요. 가장 흔한 경우는 하루 종일 전화를 받기 어려울 만큼 바쁠 때예요. 이럴 때 음성 AI 에이전트가 사무실 직원처럼 전화를 받고, 리드를 응대하고, 후속 상담에 필요한 고객 정보를 수집해요.

음성 AI 에이전트가 항상 수신 전화를 받도록 설정하려면 다음 두 가지를 지키세요.

- 기본 계정 전화번호를 AI 에이전트에 배정하지 마세요.
- AI 에이전트에 배정한 전화번호에는 통화 전달을 설정하지 마세요.

![통화 전달 없이 음성 AI를 설정한 화면](https://jumpshare.com/share/ygVbCNJmHjBI5onjr58E+/Screen+Shot+2026-06-29+at+18.10.23.png)

## 수신 전화 시간 초과 조정하기

수신 전화 시간 초과는 하이퍼클래스가 전화를 대체 옵션으로 넘기기 전에 얼마나 기다릴지 정하는 설정이에요. 이 시간을 짧게 두면 음성 AI 에이전트가 받기 전에 발신자가 휴대전화 음성사서함으로 넘어가는 일을 막는 데 도움이 돼요.

{% hint style="warning" %}
발신자가 휴대전화 음성사서함에 연결되면 하이퍼클래스는 그 통화를 완료된 것으로 처리하고, 음성 AI 에이전트는 전화를 받지 않아요.
{% endhint %}

시간 초과를 조정하는 방법은 다음과 같아요.

1. **설정**으로 이동하세요.

   ![설정 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155074739927/original/xkGrBOnJpFCRp5--xlCT5WkTz1n1XEvKmw.jpeg?1782737143)
2. **전화 시스템**을 선택하세요.
3. **전화번호** 탭을 여세요.

   ![전화번호 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155074740257/original/vuoOivqQFX9GEIhe7k0kZD3iQt3LIIRLNw.jpeg?1782737388)
4. 번호 옆의 점 세 개 메뉴를 클릭하세요.
5. **구성 편집**을 선택하세요.

   ![구성 편집 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155074740311/original/uhv6joyDVcj1dOlZHosk0cWeROKTxPLW6Q.jpeg?1782737411)
6. **Call Forwarding** 탭을 여세요.
7. **시간 초과** 설정을 찾으세요.
8. 시간 초과를 1~3초처럼 짧은 값으로 줄이세요. 연결 방식에 따라 0초로 설정해도 돼요.
9. **저장**을 클릭해 변경사항을 저장하세요.

   ![시간 초과 설정 후 저장](https://jumpshare.com/share/O6hZSDFULXFZotFm41M5+/Screen+Shot+2026-06-29+at+18.23.14.png)

## 자주 묻는 질문

### 음성 AI 에이전트가 수신 전화를 받지 않아요.
에이전트의 **배포** 탭에서 전화번호가 올바른 음성 AI 에이전트에 배정되어 있는지 확인하세요. 그다음 번호의 **Call Forwarding** 설정에서 연결 방식이 **음성 AI**로 되어 있는지 확인하세요.

### 음성 AI 에이전트 하나에 전화번호를 여러 개 연결할 수 있나요?
네, 에이전트 하나에 전화번호를 여러 개 배정할 수 있어요. Twilio 번호를 배정하려면 [음성 AI 에이전트에 Twilio 번호 배정하기](Voice-AI/how-to-assign-twilio-numbers-to-voice-ai-agents.md)를 참고하세요.

### 음성 AI 에이전트에 번호 풀을 배정할 수 있나요?
네, 사용할 수 있는 환경이라면 가능해요. 에이전트 하나에 번호 풀 하나를 배정할 수 있어요. 자세한 내용은 [음성 AI 에이전트의 번호 풀 지원](Voice-AI/number-pool-support-in-voice-ai-agents.md)을 참고하세요.

### 전화가 휴대전화 음성사서함으로 먼저 넘어가면 어떻게 되나요?
<!-- 검토 필요: 원문 내용이 서로 다름 -->
하이퍼클래스가 그 통화를 완료된 것으로 처리할 수 있고, 이 경우 음성 AI 에이전트는 전화를 받지 않아요. 수신 전화 시간 초과를 줄이면 이런 상황을 피할 수 있어요.

### 음성 AI 에이전트에 번호를 배정하다가 새 번호를 살 수 있나요?
네, 전화번호 배정 화면에서 새 번호 구매 옵션을 쓸 수 있어요. 사용할 수 있는 번호가 아직 없을 때 활용하세요.

### 설정이 잘 되었는지 어떻게 확인하나요?
배정한 전화번호로 전화를 걸어 연결된 음성 AI 에이전트가 받는지 확인하세요. 테스트 방법은 [음성 AI 에이전트 테스트하기](Voice-AI/how-to-test-voice-ai-agents.md)에서 자세히 볼 수 있어요.
