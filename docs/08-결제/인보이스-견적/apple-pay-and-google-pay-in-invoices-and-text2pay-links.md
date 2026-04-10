---

번역일: 2026-04-07
카테고리: 08-결제 > 인보이스-견적
---

# 인보이스와 Text2Pay 링크에서 Apple Pay 및 Google Pay 사용하기

Apple Pay와 Google Pay를 일회성 및 정기 인보이스(Invoice), 그리고 Text2Pay 링크에서 사용할 수 있습니다.

고객에게는 지역 위치와 사용하는 웹 브라우저에 따라 Apple Pay 또는 Google Pay가 표시됩니다. Google 계정이나 Apple 계정에 결제 수단이 등록되어 있어야 사용할 수 있으며, 이 두 조건이 모두 충족될 때만 기본 신용카드 선택 옵션과 함께 Google Pay/Apple Pay가 결제 수단으로 표시됩니다.

[Apple Pay를 지원하는 국가 및 지역](https://support.apple.com/en-in/HT207957)  
[Google Pay를 지원하는 국가](https://support.google.com/googlepay/answer/12429287)

현재 지원되는 브라우저는 Chrome Desktop, Chrome Android, macOS Safari, iOS Safari, Windows용 Microsoft Edge입니다.

## Apple Pay와 Google Pay를 어떻게 활성화하나요?

`결제(Payments) ➝ 연동(Integrations)` 페이지에서 Stripe Connect를 사용하는 것이 필수 조건입니다. 현재 Stripe API를 통해 Stripe에 연결하고 있다면, 이 기능을 사용하려면 Stripe Connect로 변경해야 합니다. 

결제 > 연동에서 Stripe 계정을 연결한 후, Stripe 계정에서 Apple Pay와 Google Pay를 활성화하기만 하면 인보이스와 Text2Pay 링크에 자동으로 나타나기 시작합니다.

**Apple Pay의 경우 결제를 받을 도메인을 Apple Pay에 등록하는 추가 단계가 필요합니다. 플랫폼은 Stripe 계정이 연결되는 즉시 모든 비즈니스에 대해 이 등록을 자동으로 수행합니다. 이를 통해 인보이스와 Text2Pay 링크 결제에서 Apple Pay를 결제 수단으로 자동 제공할 수 있습니다.**

## FAQ

### 거래 및 주문 보고서에 어떤 차이가 있나요?

거래 및 주문 보고서나 추적에는 변화가 없습니다. Stripe는 Apple Pay와 Google Pay 결제를 카드 결제로 처리합니다. Apple Pay나 Google Pay를 통해 구매한 모든 주문은 인보이스(Invoices) 및 거래(Transactions) 페이지에 그대로 반영됩니다.

### 신용카드와 Apple/Google Pay로 처리된 거래의 Stripe 수수료에 차이가 있나요?

신용카드 거래와 Apple Pay/Google Pay 거래 간 수수료 차이는 없습니다. 신용카드 거래와 동일하게 청구됩니다. [Apple Pay에 대한 자세한 정보는 여기를 참조하세요.](https://stripe.com/docs/apple-pay)

### Stripe 대신 PayPal/Authorize.net/NMI를 결제 제공업체로 사용하고 있습니다. 고객에게 Apple Pay와 Google Pay를 제공할 수 있나요?

아니요, Apple Pay와 Google Pay는 Stripe Connect를 통해서만 결제 수단으로 제공할 수 있습니다.

### 은행 리다이렉트나 ACH 같은 다른 결제 수단도 활성화할 수 있나요?

현재는 Stripe를 통해 Apple Pay와 Google Pay만 활성화할 수 있습니다. ACH 결제 같은 다른 결제 수단은 2023년 3분기에 제공될 예정입니다.

## Apple Pay 문제 해결

1. Stripe가 로케이션에 연결되어 있는 상태에서 Apple Pay와 Google Pay 활성화 토글이 켜져 있어야 합니다.

2. [Apple Pay가 귀하의 국가에서 사용 가능한지 확인하세요](https://stripe.com/docs/connect/payment-method-available-countries#apple-pay)

3. 인보이스가 호스팅되는 도메인이 Stripe에 등록되어 있는지 확인하세요. 이는 Apple Pay의 추가 요구사항이며, 토글을 켜는 즉시 자동으로 처리되어야 합니다.

   a. [Stripe 대시보드](https://dashboard.stripe.com/settings/payments/apple_pay)로 이동하여 웹 도메인 섹션에 도메인이 나열되어 있는지 확인하세요.

   b. 도메인이 여기에 없다면 "Add New Domain"을 클릭하여 수동으로 추가할 수 있습니다. 이는 빠른 해결을 위한 것이며, 토글을 켜도 자동 등록되지 않는다면 저희에게 티켓을 발행해 주세요.

4. 도메인이 등록되어 있다면, 해당 도메인에 도메인 연결 파일이 호스팅되어 있는지 확인하세요. [https://example.com](https://example.com/)에서 등록하는 경우 [https://example.com/.well-known/apple-developer-merchantid-domain-association](https://example.com/.well-known/apple-developer-merchantid-domain-association)을 방문했을 때 파일이 다운로드되어야 합니다. [이에 대한 자세한 정보는 여기를 클릭하세요.](https://stripe.com/docs/stripe-js/elements/payment-request-button?client=html#verifying-your-domain-with-apple-pay)

5. 브라우저나 디바이스가 다음 요구사항을 충족해야 합니다:

   고객이 iOS 10 또는 macOS Sierra부터 시작하는 Safari 웹에서 접속해야 합니다.

   [Apple Pay 호환 디바이스 목록](https://support.apple.com/en-us/HT208531)  
   [Apple Pay 참여 은행 목록](https://support.apple.com/en-us/HT204916)

## Google Pay 문제 해결

1. 연동(Integrations) 페이지에서 Stripe가 연결되어 있어야 합니다.

2. [Google Pay가 귀하의 국가에서 사용 가능한지](https://stripe.com/docs/connect/payment-method-available-countries#google-pay) 확인하세요.

3. 고객이 Google Chrome 또는 Safari를 사용해야 합니다.

4. 고객이 Google Pay에 유효한 카드를 등록해 두었어야 합니다.

---
*원문 최종 수정: Tue, 9 Jan, 2024 at 12:45 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*