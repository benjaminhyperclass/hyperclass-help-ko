---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002377-manage-payment-methods-displayed-with-stripe-integration
번역일: 2026-11-07
카테고리: 08-결제
---

# Stripe 연동 시 표시되는 결제 수단 관리

Stripe를 기본 결제 제공업체로 연결해 두면, 하이퍼클래스는 결제 화면에 보여 줄 결제 수단을 자동으로 정해서 표시해요. 이 문서에서는 지원하는 결제 수단과, 용도별로 결제 수단을 켜고 끄는 방법을 안내해요.

## 지원하는 결제 수단

현재 지원하는 결제 수단은 다음과 같아요.

1. Cards
2. Apple Pay (등록된 도메인 필요)
3. Google Pay
4. ACH Direct Debit
5. Affirm (배송지 주소 필요)
6. Klarna (배송지 주소 필요)
7. AfterPay (배송지 주소 필요)
8. Bancontact
9. Ideal
10. Sepa Direct Debit
11. Link (등록된 도메인 필요)
12. Amazon Pay
13. Revolut Pay - 영국에서 인기
14. CashApp
15. GrabPay - 말레이시아에서 인기
16. Zip - 호주에서 인기
17. BACS Direct Debit - 영국에서 인기
18. BECS Direct Debit (AU) - 호주에서 인기
19. FPX - 말레이시아에서 인기

하이퍼클래스는 채널마다 Stripe 구성을 다르게 써서 결제 수단을 보여 줘요. 앞으로 결제 수단이 계속 추가될 예정이라, 이 문서에서 용도에 맞게 결제 수단을 켜고 끄는 방법을 설명해요.

## 결제 수단 구성 확인하기

표시할 결제 수단을 켜고 끄려면 서브 계정 사용자가 Stripe 대시보드로 이동해야 해요.

1. Stripe 대시보드에서 **설정 > 연결 > 결제 수단 > Your account**(내 계정)로 이동하세요. 하이퍼클래스에서 활성화한 결제 수단 목록이 보여요.
2. 화면의 드롭다운에서 하이퍼클래스 구성을 선택하세요. Stripe 계정에 연결된 다른 플랫폼이 있을 수 있기 때문이에요.

![Stripe 결제 수단 화면의 구성 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025575985/original/Y7OzZ5caCjV5-gjd_uzyskEOA7oO3bNMyQ.png?1715000142)

## 하이퍼클래스의 4가지 구성

하이퍼클래스에는 구성이 4개 있어요. 하이퍼클래스가 제공하는 채널 4종류별로 결제 수단을 따로 관리할 수 있어요.

1. **인보이스**: 일회성 인보이스, 자동 결제를 끈 반복 인보이스, Text2Pay 링크에 쓰여요. 기본으로 켜져 있는 결제 수단은 Cards, Apple Pay, Google Pay, ACH Direct Debit, Affirm, Klarna, AfterPay, Link, Amazon Pay, Revolut Pay예요.
2. **InvoiceWithAutopayment**(자동 결제가 켜진 인보이스): 자동 결제를 켠 반복 인보이스에 쓰여요. 기본으로 켜져 있는 결제 수단은 Cards, Apple Pay, Google Pay, ACH Direct Debit예요.
3. **스토어**: 웹사이트의 온라인 스토어에서 쓰는 결제 수단이에요. 기본으로 켜져 있는 결제 수단은 Cards, Apple Pay, Google Pay, Affirm, Klarna, AfterPay, Link, Amazon Pay, Revolut Pay예요.
4. **기본**: 그 외 모든 곳에 쓰여요. 1단계·2단계 주문 폼, 결제 링크, 멤버십, 커뮤니티가 여기에 해당해요. 기본으로 켜져 있는 결제 수단은 Cards, Apple Pay, Google Pay, Link, Amazon Pay, Revolut Pay예요.

[동영상](https://www.youtube.com/embed/uhOcZBriDa8?&wmode=opaque)

## 결제 수단 켜고 끄기

비즈니스 사용자는 구성을 선택한 뒤 위 목록에서 원하는 결제 수단을 켜거나 끌 수 있어요.

1. 끄려는 결제 수단이 속한 구성을 선택하세요.
2. 해당 결제 수단을 선택하세요.
3. 나타나는 끄기 옵션을 선택하세요.

![결제 수단을 끄는 옵션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025607719/original/6YCi0V4l2LP-hbwcm77tUnWeNskDd9wcrA.png?1715062639)

[동영상](https://www.youtube.com/embed/jJycB1uTAcI?&wmode=opaque)

각 구성의 결제 수단 업데이트는 이 문서에서 확인할 수 있어요. 일부 결제 수단은 아직 모든 연결 계정에서 지원하도록 활성화되지 않아서 차단된 상태로 보일 수 있어요.

## 반복 결제/구독

구독에서 특정 결제 수단을 보여 주려면 하이퍼클래스에서 켜는 것 외에, Stripe의 **설정 > 결제 방법 > Billing Payment Methods**(청구 결제 수단)에서도 해당 결제 수단을 켜야 해요.

![Stripe 청구 결제 수단 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038919075/original/idaHuzjpE5wT_30NFdU5wgl00T7vsuKO-A.png?1735220064)

## 추가 결제 수단으로 전환율 높이기

이제 비즈니스 사용자는 주문 폼, 폼, 인보이스, 결제 링크, 온라인 스토어 등 여러 채널에서 고객에게 추가 결제 수단을 제공할 수 있어요. 이 기능은 Stripe를 결제 제공업체로 쓰는 비즈니스에서만 쓸 수 있어요.

지역마다 선호하는 결제 수단을 제공하면 고객이 결제 방식을 고를 폭이 넓어져 전환율을 높이는 데 도움이 돼요.

- IDeal: 네덜란드에서 인기
- Bancontact: 벨기에에서 흔히 쓰는 결제 수단
- Sepa Direct Debit: 유럽연합에서 흔히 쓰는 결제 수단

모든 주문과 거래 내역은 신용카드 결제와 똑같이 **결제** 메뉴에 기록돼요. 기존 **Order Submitted**(주문 제출됨) 트리거와 **결제 완료** 트리거도 같은 방식으로 작동해요. 이 변경은 Stripe 쪽의 이전 작업이라서, 모든 계정에 적용되기까지 며칠이 걸려요. 그래서 어떤 계정에서는 이미 쓸 수 있고, 다른 계정에서는 아직 적용 중일 수 있어요.

![추가 결제 수단 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038913189/original/ZdFdxODhueL3GJ4rdLCQX6IrVVcGPIAgwA.jpeg?1735211541)
![추가 결제 수단 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038913187/original/mGJtDMETGdHwtu6OF-r4-tZyQIyxhUQYVQ.jpeg?1735211541)
![추가 결제 수단 화면 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038913188/original/TlXQxpPWsrN2uGh5y6umtmbQohb_LbqUtA.jpeg?1735211541)
![추가 결제 수단 화면 4](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038913190/original/1Go3DHoB3fE3AGNGGwrARSOYUtaFbT95Nw.jpeg?1735211541)
![추가 결제 수단 화면 5](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038913186/original/jOJjeD8jhUEUmyqqloDyQha_dGDOU0xGyQ.jpeg?1735211541)
