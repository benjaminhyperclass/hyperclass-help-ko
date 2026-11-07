---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006075-supported-payment-providers-methods-by-product-area-what-works-where-
번역일: 2026-11-06
카테고리: 08-결제
---

# 제품 영역별로 쓸 수 있는 결제 제공업체와 결제 방법

하이퍼클래스의 각 제품 영역에서 어떤 결제 제공업체와 결제 방법을 쓸 수 있는지 한눈에 보여 주는 안내서예요. Stripe, PayPal, Square, NMI, Authorize.Net, Razorpay와 월렛, BNPL, ACH/SEPA, 카드 리더기가 표에 들어 있어요. 온보딩, 문제 해결, 결제 화면 계획을 세울 때 참고하세요.

## 제품 영역별 결제 제공업체 표란?

이 표는 결제 제공업체와 결제 방법이 하이퍼클래스의 어느 제품 영역에서 지원되는지 한곳에 정리한 표예요. 예를 들어 Stripe 카드, Apple Pay/Google Pay, PayPal, NMI, Authorize.Net, Square, Razorpay를 **Order Forms**(주문 폼), **인보이스**, **결제 링크** 등에서 쓸 수 있는지 확인할 수 있어요. 여러 문서를 찾아보지 않고도 "이 제공업체나 결제 방법을 어디에서 쓸 수 있지?"라는 질문의 답을 얻을 수 있어요.

---

## 제품 영역별 지원 결제 제공업체와 결제 방법

{% hint style="info" %}
일부 결제 방법은 구독이나 반복 결제를 지원하지 않고, 일회성 결제에서만 쓸 수 있어요.
{% endhint %}

표에서 Y는 지원, N은 지원하지 않는다는 뜻이에요.

| 결제 제공업체 / 결제 방법 | Order Forms(주문 폼) | Form Payments(폼 결제) | Survey Payments(설문 결제) | Email Direct Checkout(이메일 다이렉트 체크아웃, 결제 링크 사용) | Ecom Store(이커머스 스토어) | 인보이스 | Invoices (Recurring)(반복 인보이스) | 결제 링크 | 코스 | 커뮤니티 | Contact page(연락처 페이지, 카드 결제) | SaaS 모드 | 캘린더 / 서비스 | Service Menu(서비스 메뉴) | POS |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Stripe (카드) | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| Stripe > Apple Pay / Google Pay | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | N | Y | Y | N | Y |
| Stripe > Affirm / Klarna / Afterpay | Y | Y | Y | Y | Y | Y | N | Y | N |  | N | Y | N | N | N |
| Stripe > ACH 직접 인출(Direct Debit) | N | N | N | N | N | Y | Y | N | N | N | N | N | N | N | N |
| Stripe > iDEAL / Bancontact | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | N | Y | Y | N | N |
| Stripe > SEPA | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | N | Y | N | N | N |
| Stripe > Amazon Pay / Revolut Pay | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | N | Y | N | N | N |
| Stripe > 링크(Stripe Link) | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | N | Y | N | N | N |
| Stripe > 카드 리더기 (Stripe M2, BBPOS Wisepad 3) | N | N | N | N | N | N | N | N | N | N | N | N | N | N | Y |
| PayPal | Y | Y | N | Y | Y | Y | Y | Y | Y | Y | N | N | N | N | N |
| Authorize.Net - 카드 | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y |
| NMI - 카드 | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | N | Y |
| Square - 카드 | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | N | Y |
| Square > 카드 리더기 | N | N | N | N | N | N | N | N | N | N | N | N | N | N | Y |
| Razorpay | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | N | N | Y | N | N |
| 서드파티 연동 | Y | Y | Y | Y | Y | Y | Y | Y | Y | Y | N | N | Y | N | N |

<!-- 검토 필요: 원문 표에서 "Stripe > Affirm/Klarna/Afterpay" 행의 커뮤니티 칸이 비어 있음 -->

---

## 제품 영역 설명

- **Order Forms**(주문 폼): 상품과 오퍼를 판매하도록 만든 퍼널·웹사이트 기반 폼이에요.
- **Form Payments**(폼 결제): Payment Element(결제 요소)를 넣어 결제나 기부를 받을 수 있게 한 일반 폼이에요.
- **Survey Payments**(설문 결제): Payment Element(결제 요소)가 들어 있어서 설문을 제출하는 중에 결제를 받을 수 있는 설문이에요.
- **Email Direct Checkout**(이메일 다이렉트 체크아웃, 결제 링크 사용): 이메일 안의 결제 링크로 바로 시작하는 결제예요.
- **Ecom Store**(이커머스 스토어): 상품 카탈로그와 기본 제공 결제를 갖춘 스토어예요.
- **인보이스**: 일회성 인보이스를 만들고 결제를 받는 흐름이에요.
- **Invoices (Recurring)**(반복 인보이스): 반복 인보이스 템플릿과 자동 청구 주기예요.
- **결제 링크**: 하나 이상의 상품을 결제하는 호스팅 결제 페이지로 연결되는 링크예요.
- **코스**: 코스 구매나 이용 권한과 연결된 결제예요.
- **커뮤니티**: 커뮤니티 멤버십이나 그룹에 대한 결제예요.
- **Contact page**(연락처 페이지, 카드 결제): 연락처 기록에서 저장된 카드나 새 카드로 바로 결제하는 방식이에요.
- **SaaS 모드**: 에이전시의 소프트웨어 요금제와 구독을 서브 계정에 청구하는 기능이에요.
- **캘린더 / 서비스**: 캘린더 예약이나 서비스에서 결제를 받는 방식이에요.
- **Service Menu**(서비스 메뉴): 메뉴 형태로 서비스를 주문하는 화면이에요.
- **POS**: 모바일 기기나 지원되는 카드 리더기로 하는 대면 결제예요.

---

## 자주 묻는 질문

### 표에는 Y로 되어 있는데 Apple Pay/Google Pay 같은 월렛 버튼이 안 보여요.

월렛 버튼은 지원되는 환경에서만 나타나요. Apple Pay는 Apple 기기(iPhone/iPad/Mac)에서, Google Pay는 Android에서 볼 수 있어요. 결제 제공업체에서 해당 결제 방법을 켜 두었는지, 기기에 월렛이 설정되어 있는지 확인하세요.

### 표에서 제공업체가 Y면 구독 결제도 되나요?

그렇지 않을 수 있어요. 일부 결제 방법은 일회성 결제만 지원해요. 위의 참고 내용을 확인하고, 출시 전에 반복 결제를 직접 테스트해 보세요.

### 같은 결제 화면에 Stripe와 PayPal을 함께 보여 줄 수 있나요?

많은 제품 영역에서 결제 옵션을 둘 이상 제공할 수 있어요. 두 제공업체가 모두 연결되어 있고 켜져 있어야 해요. 결제 화면에는 사용할 수 있는 버튼과 옵션이 자동으로 표시돼요.

### 카드 리더기를 주문 폼이나 인보이스에서도 쓸 수 있나요?

아니요. 카드 리더기는 **POS**에서만 Y로 표시되어 있어요. 대면 결제는 POS를 사용하세요.
