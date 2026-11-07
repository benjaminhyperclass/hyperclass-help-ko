---
원문: /support/solutions/articles/155000000080-apple-pay-and-google-pay-in-invoices-and-text2pay-links
번역일: 2026-11-07
카테고리: 08-결제
---

# 인보이스와 Text2Pay 링크에서 Apple Pay·Google Pay 사용하기

일회성 인보이스, 반복 인보이스, Text2Pay 링크에서 Apple Pay와 Google Pay로 결제를 받을 수 있어요. 이 문서에서는 사용 조건과 설정 방법, 안 보일 때 확인할 내용을 안내해요.

고객에게 Apple Pay와 Google Pay가 보이는지는 고객의 지역과 웹 브라우저에 따라 달라져요. 고객이 Google 계정이나 Apple 계정에 결제 수단을 등록해 둔 경우에만 쓸 수 있어요. 이 조건이 모두 맞아야 기본 선택지인 신용카드와 함께 Apple Pay/Google Pay가 결제 수단으로 보여요.

- [Apple Pay를 지원하는 국가 및 지역](https://support.apple.com/en-in/HT207957)
- [Google Pay를 지원하는 국가](https://support.google.com/googlepay/answer/12429287)

현재 지원하는 브라우저는 Chrome 데스크톱, Chrome Android, macOS Safari, iOS Safari, Windows용 Microsoft Edge예요.

## Apple Pay와 Google Pay를 켜려면 어떻게 하나요?

**결제 > 연동** 페이지에서 Stripe Connect로 Stripe를 연결해야 해요. Stripe API로 Stripe를 연결해서 쓰고 있다면, 이 기능을 쓰려면 Stripe Connect로 다시 연결하세요.

**결제 > 연동**에서 Stripe 계정을 연결한 뒤, Stripe 계정에서 Apple Pay와 Google Pay를 켜세요. 그러면 인보이스와 Text2Pay 링크에 자동으로 나타나요.

{% hint style="info" %}
Apple Pay를 쓰려면 결제를 받을 도메인을 등록하는 단계가 하나 더 필요해요. Stripe 계정을 연결하면 하이퍼클래스가 모든 비즈니스의 도메인을 자동으로 등록해요. 그래서 인보이스와 Text2Pay 링크 결제에서 Apple Pay를 결제 수단으로 바로 제공할 수 있어요.
{% endhint %}

## 자주 묻는 질문

### 거래와 주문 리포팅이 달라지나요?

달라지지 않아요. 거래와 주문의 리포팅과 추적 방식은 그대로예요. Stripe는 Apple Pay와 Google Pay 결제를 카드 결제로 처리해요. Apple Pay나 Google Pay로 구매한 주문은 모두 **인보이스**와 **거래 내역** 페이지에 표시돼요.

### 신용카드와 Apple Pay/Google Pay의 Stripe 수수료는 다른가요?

수수료는 같아요. Apple Pay/Google Pay 거래도 신용카드 거래와 똑같이 수수료가 부과돼요. [Apple Pay에 대한 자세한 내용은 여기에서 확인하세요.](https://stripe.com/docs/apple-pay)

### Stripe 대신 PayPal, Authorize.net, NMI를 결제 제공업체로 쓰고 있어요. 고객에게 Apple Pay와 Google Pay를 제공할 수 있나요?

아니요. Apple Pay와 Google Pay는 Stripe Connect를 쓸 때만 결제 수단으로 제공할 수 있어요.

### 은행 리디렉션이나 ACH 같은 다른 결제 수단도 켤 수 있나요?

지금은 Stripe에서 Apple Pay와 Google Pay만 켤 수 있어요. ACH 결제 같은 다른 결제 수단은 2023년 3분기까지 제공될 예정이에요.

## Apple Pay가 안 보일 때 확인할 내용

1. Stripe를 연결할 때 Apple Pay와 Google Pay를 켜는 토글이 켜져 있어야 해요.

2. [내 국가에서 Apple Pay를 쓸 수 있는지](https://stripe.com/docs/connect/payment-method-available-countries#apple-pay) 확인하세요.

3. 인보이스가 호스팅되는 도메인이 Stripe에 등록되어 있는지 확인하세요. Apple Pay에만 필요한 조건이에요. 원칙적으로 토글을 켜면 자동으로 등록돼요.

    1. [Stripe 대시보드의 이 주소](https://dashboard.stripe.com/settings/payments/apple_pay)로 가서 **Web Domains**(웹 도메인) 섹션에 해당 도메인이 있는지 확인하세요.

    2. 도메인이 없다면 **Add New Domain**(새 도메인 추가)을 눌러 직접 추가할 수 있어요. 급할 때 임시로 해결하는 방법이에요. 토글을 켜도 자동으로 등록되지 않는다면 하이퍼클래스 고객지원에 문의하세요.

4. 도메인이 등록되어 있다면, 그 도메인에 도메인 연결 파일이 호스팅되어 있는지 확인하세요. `https://example.com`을 등록했다면 `https://example.com/.well-known/apple-developer-merchantid-domain-association` 주소에 접속했을 때 파일이 다운로드되어야 해요. [자세한 내용은 여기에서 확인하세요.](https://stripe.com/docs/stripe-js/elements/payment-request-button?client=html#verifying-your-domain-with-apple-pay)

5. 브라우저나 기기가 아래 조건을 충족하는지 확인하세요.

    - 고객이 iOS 10 이상 또는 macOS Sierra 이상의 Safari에서 웹으로 접속해야 해요.

    - [Apple Pay 호환 기기 목록](https://support.apple.com/en-us/HT208531)
    - [Apple Pay 참여 은행 목록](https://support.apple.com/en-us/HT204916)

## Google Pay가 안 보일 때 확인할 내용

1. **연동** 페이지에서 Stripe가 연결되어 있어야 해요.

2. [내 국가에서 Google Pay를 쓸 수 있는지](https://stripe.com/docs/connect/payment-method-available-countries#google-pay) 확인하세요.

3. 고객이 Google Chrome 또는 Safari를 쓰고 있어야 해요.

4. 고객이 Google Pay에 유효한 카드를 등록해 두어야 해요.
