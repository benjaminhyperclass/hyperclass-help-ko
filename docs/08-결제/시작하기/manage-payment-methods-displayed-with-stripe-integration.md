---

번역일: 2026-04-07
카테고리: 08-결제 > 시작하기
---

# Stripe 연동 시 표시되는 결제 수단 관리

LeadConnector는 비즈니스 사용자가 Stripe를 기본 결제 제공업체로 연결한 경우, 시스템 전반에서 결제 처리 시 결제 수단을 동적으로 표시합니다.

현재 지원되는 결제 수단은 다음과 같습니다:

- 카드
- Apple Pay (등록된 도메인 필요)
- Google Pay
- ACH 자동 이체
- Affirm (배송 주소 필요)
- Klarna (배송 주소 필요)
- AfterPay (배송 주소 필요)
- Bancontact
- Ideal
- Sepa 자동 이체
- Link (등록된 도메인 필요)
- Amazon Pay
- Revolut Pay - 영국에서 인기
- CashApp
- GrabPay - 말레이시아에서 인기
- Zip - 호주에서 인기
- BACS 자동 이체 - 영국에서 인기
- BECS 자동 이체 (호주) - 호주에서 인기
- FPX - 말레이시아에서 인기

저희는 Stripe와 함께 다양한 구성을 사용하여 여러 채널에서 결제 수단을 표시합니다. 지속적으로 더 많은 결제 수단이 추가되고 있으므로, 이 가이드에서는 사용 사례에 따라 특정 결제 수단을 켜거나 끄는 방법을 설명합니다.

하위 계정 사용자는 특정 결제 수단을 켜거나 끄기 위해 Stripe 대시보드로 이동해야 합니다. Settings(설정) → Connect(연결) → Payment methods(결제 수단) → Your account(내 계정)으로 이동하여 LeadConnector가 활성화한 결제 수단 목록을 확인하세요.

Stripe 계정이 연결된 플랫폼이 여러 개 있을 수 있으므로, 여기서 LeadConnector 구성을 선택해야 합니다. 아래 이미지를 참고하세요.

![Stripe 결제 수단 구성 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025575985/original/Y7OzZ5caCjV5-gjd_uzyskEOA7oO3bNMyQ.png?1715000142)

이제 LeadConnector에서 4가지 구성을 사용할 수 있습니다. 이는 저희가 제공하는 4가지 다른 종류의 채널에 대한 결제 수단을 관리할 수 있게 합니다:

- **Invoice(인보이스)** - 일회성 인보이스 또는 자동 결제가 꺼진 반복 인보이스, Text2Pay 링크에 사용 - 기본적으로 카드, Apple Pay, Google Pay, ACH 자동 이체, Affirm, Klarna, AfterPay, Link, Amazon Pay, Revolut Pay가 켜져 있음
- InvoiceWithAutopayment(자동 결제 인보이스) - 자동 결제가 활성화된 반복 인보이스에 사용 - 기본적으로 카드, Apple Pay, Google Pay, ACH 자동 이체가 켜져 있음
- **Store(스토어)** - 웹사이트의 온라인 스토어 결제 수단에 사용 - 기본적으로 카드, Apple Pay, Google Pay, Affirm, Klarna, AfterPay, Link, Amazon Pay, Revolut Pay가 켜져 있음
- **Default(기본)** - 1단계/2단계 주문 폼, 결제 링크, 멤버십, 커뮤니티 등 다른 모든 곳에 사용 - 기본적으로 카드, Apple Pay, Google Pay, Link, Amazon Pay, Revolut Pay가 켜져 있음

비즈니스 사용자는 구성을 선택하고 위 목록에서 특정 결제 수단을 켜거나 끌 수 있습니다. 특정 결제 수단을 끄려면, 올바른 구성을 선택한 후 해당 결제 수단을 선택하면 끄는 옵션이 표시됩니다.

![결제 수단 끄기 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025607719/original/6YCi0V4l2LP-hbwcm77tUnWeNskDd9wcrA.png?1715062639)

구성 및 각 구성의 결제 수단에 대한 추가 업데이트를 확인하려면 이 가이드를 계속 확인해 주세요. 일부 결제 수단은 차단된 것으로 표시될 수 있는데, 이는 해당 결제 수단이 모든 연결된 계정에서 지원하기 위해 저희 측에서 아직 활성화되지 않았기 때문입니다.

## 반복 결제/구독:

구독에서 특정 결제 수단을 표시하려면 LeadConnector 내에서 활성화하는 것과 함께 Stripe Settings(Stripe 설정) → Payment Methods(결제 수단) → Billing Payment Methods(청구 결제 수단)에서도 활성화해야 합니다.

![구독 결제 수단 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038919075/original/idaHuzjpE5wT_30NFdU5wgl00T7vsuKO-A.png?1735220064)

비즈니스 사용자는 이제 주문 폼, 폼, 인보이스, 결제 링크, 온라인 스토어 등 다양한 채널에서 고객에게 추가 결제 수단을 제공할 수 있습니다.

이 기능은 Stripe를 결제 제공업체로 사용하는 비즈니스에서만 사용할 수 있습니다.

이는 다양한 지역의 최종 고객에게 결제 유연성을 제공하여 전환율을 높이는 데 도움이 됩니다:

- IDeal - 네덜란드에서 인기
- Bancontact - 벨기에의 일반적인 결제 수단
- Sepa 자동 이체 - 유럽연합의 일반적인 결제 수단

모든 주문 및 거래 세부 정보는 신용카드 결제와 마찬가지로 결제(Payments) 메뉴에 등록됩니다. 기존의 "Order Submitted(주문 제출됨)" 및 "Payment received(결제 수신됨)" 트리거의 기능도 포함됩니다. 이는 Stripe 측에서의 마이그레이션 변경으로 며칠에 걸쳐 모든 계정에 변경 사항이 전파되어야 합니다. 따라서 일부 계정에서는 이미 사용 가능하고 다른 계정에서는 진행 중일 수 있습니다.

![결제 수단 예시 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038913189/original/ZdFdxODhueL3GJ4rdLCQX6IrVVcGPIAgwA.jpeg?1735211541)

![결제 수단 예시 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038913187/original/mGJtDMETGdHwtu6OF-r4-tZyQIyxhUQYVQ.jpeg?1735211541)

![결제 수단 예시 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038913188/original/TlXQxpPWsrN2uGh5y6umtmbQohb_LbqUtA.jpeg?1735211541)

![결제 수단 예시 4](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038913190/original/1Go3DHoB3fE3AGNGGwrARSOYUtaFbT95Nw.jpeg?1735211541)

![결제 수단 예시 5](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038913186/original/jOJjeD8jhUEUmyqqloDyQha_dGDOU0xGyQ.jpeg?1735211541)

---
*원문 최종 수정: Wed, 26 Feb, 2025 at 4:18 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*