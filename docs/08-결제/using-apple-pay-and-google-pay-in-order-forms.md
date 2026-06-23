---

번역일: 2026-04-06
카테고리: 08-결제
---

# 주문 폼에서 Apple Pay와 Google Pay 사용하기

주문 폼(Order Form)에서 Apple Pay와 Google Pay를 지원하는 것은 고객의 구매 경험을 크게 향상시키는 방법입니다. 이러한 결제 수단은 기존 결제 방식으로는 제공하기 어려운 편의성, 보안성, 속도를 제공합니다.

## 이 문서에서 다루는 내용:

- [CRM에서 Apple Pay와 Google Pay를 사용하는 방법](#crm에서-apple-pay와-google-pay를-사용하는-방법)
- [Apple Pay와 Google Pay를 활성화하는 방법](#apple-pay와-google-pay를-활성화하는-방법)
- [Apple Pay 문제 해결](#apple-pay-문제-해결)
- [Google Pay 문제 해결](#google-pay-문제-해결)
- [자주 묻는 질문](#자주-묻는-질문)
- [거래 및 주문 보고에서 달라지는 점은 무엇인가요?](#거래-및-주문-보고에서-달라지는-점은-무엇인가요)
- [신용카드와 Apple/Google Pay 처리의 Stripe 요금 차이는 무엇인가요?](#신용카드와-applegoogle-pay-처리의-stripe-요금-차이는-무엇인가요)
- [Stripe 대신 PayPal을 결제 제공업체로 사용 중입니다. Apple Pay와 Google Pay를 제공할 수 있나요?](#stripe-대신-paypal을-결제-제공업체로-사용-중입니다-apple-pay와-google-pay를-제공할-수-있나요)
- [은행 리다이렉트나 ACH 같은 다른 결제 수단도 활성화할 수 있나요?](#은행-리다이렉트나-ach-같은-다른-결제-수단도-활성화할-수-있나요)
- [한번 활성화한 후 다른 결제 수단 옵션을 비활성화하려면 어떻게 하나요?](#한번-활성화한-후-다른-결제-수단-옵션을-비활성화하려면-어떻게-하나요)

## CRM에서 Apple Pay와 Google Pay를 사용하는 방법

Stripe은 기본적으로 신용카드 옵션과 함께 Google Pay를 표시합니다. Apple Pay를 표시하려면 연동(Integration) 페이지에서 토글을 켜서 Stripe에 도메인을 등록하는 추가 요구사항을 완료해야 합니다.

![Apple Pay와 Google Pay 활성화 토글](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003234638/original/CIq6-4GxITrF4kSlh7XlUG4_NWGaR9PjEQ.png?1689772696)

완료되면 주문 폼에서 신용카드 옵션과 함께 Google Pay와 Apple Pay가 표시됩니다. Apple Pay/Google Pay로 정기 결제와 업셀도 지원됩니다.

![주문 폼의 Google Pay](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003227532/original/hx9QDvGm4Xpm06lgnDi2mXobknNXL6dD6w.png?1689768902)

![주문 폼의 Apple Pay](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003227578/original/_lrqMDwNra0tiGcrVzYBCZ8EwdMzZ9b4Sg.png?1689768914)

**PayPal은 결제(Payments) → 연동(Integrations)에서 PayPal이 활성화된 경우에만 표시됩니다**

고객은 거주 지역과 웹 브라우저에 따라 Apple Pay와 Google Pay를 볼 수 있습니다. Google 계정/Apple 계정에 연결된 결제 수단이 있는 경우에만 사용할 수 있습니다. 이 두 조건이 모두 충족되는 경우에만 기본 신용카드 선택지와 함께 Google Pay/Apple Pay가 결제 옵션으로 표시됩니다.

[Apple Pay를 지원하는 국가 및 지역](https://support.apple.com/en-in/HT207957)
[Google Pay를 지원하는 국가](https://support.google.com/googlepay/answer/12429287)

현재 지원되는 브라우저는 Chrome Desktop, Chrome Android, macOS Safari, iOS Safari, Windows용 Microsoft Edge입니다.

**참고사항:**

이 기능은 버전 2 퍼널에서만 작동합니다. V1 퍼널을 V2로 업그레이드하는 방법은 [이 문서](../06-사이트/기타/why-and-how-to-upgrade-a-version-1-funnel-to-version-2-.md)를 참조하세요.

**알아두세요:**

브라우저가 최신 버전이 아니거나, 고객 국가에서 Apple Pay와 Google Pay가 지원되지 않거나, 고객의 Apple/Google 계정에 관련 신용카드가 추가되지 않은 경우가 있을 수 있습니다. 이런 경우 Apple Pay나 Google Pay 결제 옵션은 나타나지 않지만, 고객은 여전히 신용카드 옵션으로 결제할 수 있습니다.

## Apple Pay와 Google Pay를 활성화하는 방법

결제(Payments) → 연동(Integrations) 페이지에서 Stripe Connect를 사용하는 것이 기본 요구사항입니다. Stripe API를 사용하여 Stripe에 연결하고 있다면 이 기능을 사용하기 위해 Stripe Connect를 사용하세요. 결제 > 연동에서 Stripe 계정을 연결하면 주문 폼에서 Apple Pay와 Google Pay를 활성화하는 토글이 제공됩니다.

## Apple Pay 문제 해결

1. Stripe이 로케이션에 연결되어 있는 상태에서 Apple Pay와 Google Pay 활성화 토글이 켜져 있어야 합니다

2. [Apple Pay가 당신의 국가에서 사용 가능한지 확인하세요](https://stripe.com/docs/connect/payment-method-available-countries#apple-pay)

3. 퍼널이 호스팅되는 도메인이 Stripe에 등록되어 있는지 확인하세요. 이는 Apple Pay의 추가 요구사항이며 토글을 켜자마자 자동으로 이루어져야 합니다

   a. [이 URL에서](https://dashboard.stripe.com/settings/payments/apple_pay) Stripe 대시보드로 가서 웹 도메인 섹션에 도메인이 나열되어 있는지 확인하세요

   b. 도메인이 여기에 없다면 "Add New Domain"을 클릭하여 수동으로 도메인을 추가할 수 있습니다. 이는 빠른 해결을 위한 것이므로, 토글을 켰을 때 자동으로 등록되지 않는다면 저희에게 티켓을 제출하세요.

4. 도메인이 등록된 것으로 보인다면 해당 도메인에 대해 도메인 연결 파일이 호스팅되어 있는지 확인하세요. [https://example.com](https://example.com)에서 등록하는 경우 [https://example.com/.well-known/apple-developer-merchantid-domain-association](https://example.com/.well-known/apple-developer-merchantid-domain-associationif)을 방문했을 때 파일이 다운로드되어야 합니다. [자세한 정보는 여기를 클릭하세요.](https://stripe.com/docs/stripe-js/elements/payment-request-button?client=html#verifying-your-domain-with-apple-pay)

5. 브라우저나 기기가 다음 요구사항을 충족해야 합니다:

   최종 고객이 iOS 10 또는 macOS Sierra부터 시작하는 Safari에서 웹을 사용 중이어야 합니다

   [Apple Pay 호환 기기 목록](https://support.apple.com/en-us/HT208531)
   [Apple Pay 참여 은행 목록](https://support.apple.com/en-us/HT204916)

## Google Pay 문제 해결

1. Stripe이 로케이션에 연결되어 있는 상태에서 Apple Pay와 Google Pay 활성화 토글이 켜져 있어야 합니다.

2. Google Pay가 [당신의 국가에서 사용 가능한지](https://stripe.com/docs/connect/payment-method-available-countries#google-pay) 확인하세요

3. 고객이 Google Chrome 또는 Safari를 사용하고 있어야 합니다.

4. 고객이 Google Pay에 등록된 유효한 카드를 가지고 있어야 합니다.

## 자주 묻는 질문

### 거래 및 주문 보고에서 달라지는 점은 무엇인가요?

거래 및 주문의 보고나 추적에는 변화가 없습니다. Stripe은 Apple Pay와 Google Pay 결제를 카드 결제로 취급합니다. Apple Pay나 Google Pay로 구매한 모든 주문은 주문/거래/구독 페이지에 반영됩니다.

### 신용카드와 Apple/Google Pay 처리의 Stripe 요금 차이는 무엇인가요?

신용카드 거래와 Apple Pay/Google Pay 거래 간에는 요금 차이가 없습니다. 신용카드 거래와 동일하게 청구됩니다. [Apple Pay에 대해 더 알아보기](https://stripe.com/docs/apple-pay)

### Stripe 대신 PayPal을 결제 제공업체로 사용 중입니다. Apple Pay와 Google Pay를 제공할 수 있나요?

아니요, Apple Pay와 Google Pay는 퍼널 버전 2에서 Stripe Connect를 사용해서만 결제 수단으로 제공할 수 있습니다.

### 은행 리다이렉트나 ACH 같은 다른 결제 수단도 활성화할 수 있나요?

현재 Stripe을 사용해서는 Apple Pay와 Google Pay만 활성화할 수 있습니다. 다른 결제 수단 활성화는 2023년 3분기/4분기에 제공될 예정입니다.

### Google Pay를 활성화하지 않았는데 왜 표시되나요?

Stripe은 계정 설정과 기기/브라우저 호환성에 따라 Apple Pay와 Google Pay를 포함한 지원되는 결제 방법을 자동으로 활성화할 수 있습니다. Google Pay를 명시적으로 활성화하지 않았더라도 브라우저나 기기에서 Google Pay/Apple Pay를 지원하거나 계정에 Stripe의 기본 지갑 설정이 활성화되어 있으면 Hyperclass 주문 폼에 나타날 수 있습니다.

### Apple Pay나 Google Pay로 테스트 거래를 실행하면 어떻게 되나요?

Stripe을 테스트 모드로 사용할 때 Apple Pay나 Google Pay 거래는 시뮬레이션되며 실제 청구나 금액 이동을 포함하지 않습니다. Stripe 대시보드에서 성공적인 거래를 볼 수 있지만 이는 테스트 목적일 뿐입니다. 테스트 거래를 되돌리거나 환불할 필요는 없습니다. 테스트 목적으로만 사용되며 Stripe 잔액에는 영향을 주지 않습니다.

---
*원문 최종 수정: Tue, 22 Apr, 2025 at 5:09 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*