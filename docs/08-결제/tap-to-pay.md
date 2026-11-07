---
원문: /support/solutions/articles/155000000950-tap-to-pay
번역일: 2026-11-07
카테고리: 08-결제
---

# Tap to Pay로 현장 결제 받기

Tap to Pay를 쓰면 POS(Point of Sale, 현장 결제)에서 고객의 비접촉 카드나 스마트폰을 모바일 앱에 대기만 해도 결제를 받을 수 있어요. 이 문서에서는 사용 방법, 지원 기기, 베타 프로그램 참여 방법을 안내해요.

{% hint style="info" %}
이 기능은 현재 미국 지역에서만 쓸 수 있어요. 미국 외 국가에서는 베타 프로그램에 참여해야 사용할 수 있어요. 참여 링크는 문서 맨 아래를 확인하세요.
{% endhint %}

## Tap to Pay의 장점

1. 매끄러운 거래: POS 결제를 더 간편하게 마칠 수 있어요. 호환되는 비접촉 결제 수단과 함께 쓸 수 있어요.
2. 빠르고 편리함: 고객의 호환 카드나 스마트폰을 앱에 대기만 하면 끝나요. 카드를 긁거나 PIN을 입력하거나 서명할 필요가 없어요.
3. 보안 강화: 사업자와 고객의 금융 정보는 항상 보호돼요. Tap to Pay는 최신 암호화 기술로 거래를 안전하게 지켜요.
4. 폭넓은 호환성: 비접촉 신용카드는 물론 Apple Pay, Google Pay 같은 모바일 지갑 앱도 모두 지원해요.

## Tap to Pay 사용 방법

1. 모바일 앱에서 **Point of Sale**(현장 결제)을 선택하세요.

   ![모바일 앱에서 Point of Sale 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155007790601/original/1FwlxtB1HrNtlHEpH3Viz1si8bQ6RYXIBA.png?1694787736)

2. 거래 금액을 입력하세요. **+Note**(메모 추가)를 눌러 판매 내용을 간단히 적을 수도 있어요.

   ![금액 입력과 메모 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008547690/original/YIdowIukMXOG3K8AbmKvSZRgWNsMSO2BNQ.png?1695658961)

   {% hint style="info" %}
   모바일 앱에서 Tap to Pay를 쓰기 전에, 웹 앱에서 Stripe 계정이 연결되어 있는지 먼저 확인하세요. **Stripe not connected**(Stripe 연결 안 됨)라는 메시지가 보이면 웹 앱에서 먼저 연동해야 해요.
   {% endhint %}

   ![Stripe 연결 안 됨 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155007792779/original/z3QQPmrZFup9Z8RThYglBzzOwbTqqBHoXA.png?1694788958)

   Stripe 계정은 **결제 > 연동 > Stripe 로 연결**에서 연동할 수 있어요.

3. 모바일 앱의 지역(Location) 설정이 올바른지 확인하세요. Tap to Pay는 특정 지역에서만 작동해요(현재는 미국만 해당).

   ![모바일 앱 지역 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155007796892/original/xJD9SPxp-TKkFjLzhmPnWMf9--TslHJRLQ.png?1694790410)

4. 설정이 모두 끝났다면 금액과 메모를 입력한 뒤 **Charge (Amount)**(금액 결제)를 누르세요.

   ![Charge 버튼 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155007934923/original/AtdTIGjBZ91SsX3kAAeQ3rMICuLZDaNhNQ.png?1695046040)

5. 리더에 연결될 때까지 기다리세요.

   ![리더 연결 중 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155007935087/original/4BhmX7Nl_CtG56wADAZCmEOKkTNH9x6GyA.png?1695046104)

6. 필요하면 결제 금액에 팁을 더하세요. **사용자 지정**을 누르면 팁 금액을 직접 정할 수 있어요. 팁을 받지 않으려면 **No tip**(팁 없음)을 누르세요.

   ![팁 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155007935418/original/DfaCNrriYriLFY1e2J5ZigAavijSMbTQ6g.png?1695046237)

7. 고객에게 비접촉 결제 수단(신용카드, Apple Pay 등)을 앱에 대 달라고 요청하세요. 결제 금액은 사업자의 Stripe 계정으로 들어와요.

   ![고객이 카드를 앱에 대는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155007936105/original/EqihTxXmVAgdVph_1Bv5_x1TjgnKeD0VhQ.png?1695046577)

8. 결제가 완료되면 화면에 "Approved"(승인됨)와 **결제 완료** 문구, 사업체 이름, 거래 ID가 표시돼요.

   ![결제 완료 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155007937760/original/k5ckT57y4JQezKNMl3fzxnDZPIBeEfRArg.png?1695046990)

## 지원 기기

1. NFC 기능이 있고 Android 8 이상이 설치된 모든 Android 기기
2. iPhone: iOS 16 이상이 설치된 iPhone XS 이상(미국)

{% hint style="info" %}
iOS 베타 버전에서는 Tap to Pay가 작동하지 않아요. 가장 좋은 환경에서 쓰려면 최신 OS로 업데이트하길 권장해요.
{% endhint %}

## 베타 프로그램에 참여해서 Tap to Pay 켜기

미국을 제외한 대부분의 국가에서는 Tap to Pay가 현재 베타 단계예요. 사용하는 기기에 맞는 링크로 참여하세요.

1. Android
   - [하이퍼클래스 모바일 앱 베타 참여](https://play.google.com/apps/testing/com.LeadConnector)

2. iPhone
   - [하이퍼클래스 모바일 앱 베타 참여](https://testflight.apple.com/join/u00jRPj2)
