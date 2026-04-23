---
원문: https://help.leadconnectorhq.com/support/solutions/articles/48001229612-using-apple-pay-and-google-pay
번역일: 2026-04-23
카테고리: payments-invoices-estimates
---

# Apple Pay 및 Google Pay 사용하기

주문 폼에서 Apple Pay와 Google Pay를 사용할 수 있도록 설정하면 고객의 구매 경험을 크게 개선할 수 있습니다. 이러한 결제 방법은 기존 결제 수단으로는 제공할 수 없는 편의성, 보안성, 그리고 빠른 속도를 제공합니다.

이 가이드에서 다루는 내용:

**[CRM에서 Apple Pay와 Google Pay 사용 방법](#CRM에서-Apple-Pay와-Google-Pay-사용-방법)**

**[Apple Pay와 Google Pay 활성화 방법](#Apple-Pay와-Google-Pay-활성화-방법)**

**[Apple Pay 문제 해결](#Apple-Pay-문제-해결)**

**[Google Pay 문제 해결](#Google-Pay-문제-해결)**

**[자주 묻는 질문](#자주-묻는-질문)**

## CRM에서 Apple Pay와 Google Pay 사용 방법

Stripe를 통해 1단계 및 2단계 주문 폼의 "기타" 탭에서 Apple Pay와 Google Pay를 결제 옵션으로 추가할 수 있습니다. 업셀 기능도 Apple Pay/Google Pay와 연동됩니다.

![Apple Pay와 Google Pay 옵션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48277366188/original/OO5YrPXeUOQwj7A3NQQzIDP5lYywxqV_5A.png?1674561290)

이 옵션을 활성화하면 하위 계정에서 기본 결제 수단인 신용카드 및 PayPal(결제(Payments) → 연동(Integrations)에서 PayPal이 활성화된 경우에만 표시)과 함께 Apple Pay/Google Pay를 결제 수단으로 활성화할 수 있습니다.

고객에게는 지리적 위치와 웹 브라우저에 따라 Apple Pay 및 Google Pay가 표시됩니다. Google 계정/Apple 계정에 연결된 결제 수단이 있는 경우에만 사용할 수 있습니다. 이 두 조건이 모두 충족되는 경우에만 신용카드라는 기본 선택과 함께 Google Pay/Apple Pay가 결제 옵션으로 표시됩니다.

[Apple Pay를 지원하는 국가 및 지역](https://support.apple.com/en-in/HT207957)
[Google Pay를 지원하는 국가](https://support.google.com/googlepay/answer/12429287)

현재 지원되는 브라우저는 Chrome Desktop, Chrome Android, macOS Safari, iOS Safari, Microsoft Edge for Windows입니다.

중요사항:
이 기능은 Version 2 퍼널에서만 작동합니다.

![Apple Pay 아이콘 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48277329145/original/UPM5velcmHCidwIdB9Ez9cn5I1kD5Pxgug.png?1674554607)

활성화 후 주문 폼에 Apple Pay 아이콘이 표시되는 모습입니다.

![Apple Pay 클릭 시 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48277326720/original/uFIwdnFaRw8MmRa0kpubzevUpdERrMA9Lg.png?1674554181)

고객이 주문 폼에서 Apple Pay를 클릭했을 때 나타나는 화면입니다.

![Google Pay 아이콘 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48277329435/original/o1LUc47E74s0iOn45RxEdH_0cmu7RMQEBA.png?1674554675)

활성화 후 주문 폼에 Google Pay 아이콘이 표시되는 모습입니다.

![Google Pay 클릭 시 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48277326885/original/9cLUklr_P0FYfdrCSGKRvVTWFhXnxALRWQ.png?1674554213)

고객이 주문 폼에서 Google Pay를 클릭했을 때 나타나는 화면입니다.

참고사항:
브라우저가 최신 버전이 아니거나, 고객의 국가에서 Apple Pay와 Google Pay가 지원되지 않거나, 고객의 Apple/Google 계정에 관련 신용카드가 등록되지 않은 경우가 있을 수 있습니다. 이런 경우 "기타 결제 수단" 탭에 Apple Pay나 Google Pay 옵션이 표시되지 않습니다. 하지만 고객은 다시 탭을 변경하지 않고도 신용카드 옵션을 통해 주문을 결제할 수 있습니다.

## Apple Pay와 Google Pay 활성화 방법

결제(Payments) → 연동(Integrations) 페이지에서 Stripe Connect를 사용하는 것이 기본 요구사항입니다. Stripe API를 사용해서 Stripe에 연결하고 있다면, 이 기능을 사용하려면 Stripe Connect를 사용해주세요. 결제(Payments) > 연동(Integrations)에서 Stripe 계정을 연결하면, 주문 폼에서 Apple Pay와 Google Pay를 활성화하는 토글이 제공됩니다.

![Stripe 연동 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48274089434/original/x3IlIe6V135JyQ3Ds6pdtTys2QK9Wj2vag.png?1673272755)

## Apple Pay 문제 해결

1. Stripe가 로케이션에 연결된 상태에서 Apple Pay와 Google Pay 활성화 토글이 켜져 있어야 합니다

2. [Apple Pay가 귀하의 국가에서 사용 가능한지 확인하세요](https://stripe.com/docs/connect/payment-method-available-countries#apple-pay)

3. 퍼널이 호스팅되는 도메인이 Stripe에 등록되어 있는지 확인하세요. 이는 Apple Pay의 추가 요구사항이며, 토글을 켜는 즉시 자동으로 진행되어야 합니다

   a. [Stripe 대시보드](https://dashboard.stripe.com/settings/payments/apple_pay)로 이동하여 Web Domains 섹션에 도메인이 나열되어 있는지 확인하세요

   b. 도메인이 여기에 나열되지 않은 경우, Add New Domain을 클릭하여 수동으로 도메인을 추가할 수 있습니다. 이는 빠른 해결을 위한 방법일 뿐이며, 토글을 켜도 자동으로 등록되지 않는다면 저희에게 티켓을 제기해주세요

4. 도메인이 등록된 것으로 표시되면, 해당 도메인에 도메인 연결 파일이 호스팅되어 있는지 확인하세요. 이는 https://example.com에서 등록하는 경우 [https://example.com/.well-known/apple-developer-merchantid-domain-association](https://example.com/.well-known/apple-developer-merchantid-domain-association)을 방문하면 파일이 다운로드되어야 함을 의미합니다. [자세한 정보는 여기를 클릭하세요.](https://stripe.com/docs/stripe-js/elements/payment-request-button?client=html#verifying-your-domain-with-apple-pay)

5. 브라우저나 기기가 다음 요구사항을 충족하는지 확인하세요:

   최종 고객이 iOS 10 또는 macOS Sierra부터 시작하는 Safari 웹에서 사용하고 있어야 합니다

   [Apple Pay 호환 기기 목록](https://support.apple.com/en-us/HT208531)
   [Apple Pay 지원 은행 목록](https://support.apple.com/en-us/HT204916)

## Google Pay 문제 해결

1. Stripe가 로케이션에 연결된 상태에서 Apple Pay와 Google Pay 활성화 토글이 켜져 있어야 합니다

2. Google Pay가 [귀하의 국가에서 사용 가능한지](https://stripe.com/docs/connect/payment-method-available-countries#google-pay) 확인하세요

3. 고객이 Google Chrome 또는 Safari를 사용하고 있어야 합니다

4. 고객이 Google Pay에 유효한 카드를 등록해놓았어야 합니다

## 자주 묻는 질문

### 거래 및 주문 리포팅에서 어떤 차이가 있나요?

거래 및 주문의 리포팅이나 추적에는 변화가 없습니다. Stripe는 Apple Pay 및 Google Pay 결제를 카드 결제로 취급합니다. Apple Pay나 Google Pay를 통해 구매한 모든 주문은 주문/거래/구독 페이지에 반영됩니다.

### 신용카드와 Apple/Google Pay로 처리되는 거래의 Stripe 가격 차이는 어떻게 되나요?

신용카드 거래와 Apple Pay/Google Pay 거래 간에는 가격 차이가 없습니다. 신용카드 거래와 동일하게 요금이 부과됩니다. [Apple Pay에 대한 자세한 내용은 여기에서 확인하세요.](https://stripe.com/docs/apple-pay)

### Stripe 대신 PayPal을 결제 제공업체로 사용하고 있습니다. 고객에게 Apple Pay와 Google Pay를 제공할 수 있나요?

아니요, Apple Pay와 Google Pay는 Version 2 퍼널에서 Stripe Connect를 통해서만 결제 방법으로 제공할 수 있습니다.

### 은행 리다이렉트나 ACH 같은 다른 결제 방법도 활성화할 수 있나요?

현재는 Stripe를 통해 Apple Pay와 Google Pay만 활성화할 수 있습니다. 다른 결제 방법 활성화 기능은 2023년 2분기/3분기에 출시 예정입니다.

### 한 번 활성화한 후 기타 결제 방법 옵션을 비활성화하려면 어떻게 하나요?

연동(Integrations) 페이지의 Stripe 연결 카드에서 Apple Pay 및 Google Pay 토글을 끄면 주문 폼의 "기타 결제 방법" 탭이 비활성화됩니다.

---
*원문 최종 수정: 2023년 3월 22일*
*Hyperclass 사용 가이드 — hyperclass.ai*