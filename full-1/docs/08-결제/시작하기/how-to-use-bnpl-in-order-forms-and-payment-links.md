---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003224-how-to-use-bnpl-in-order-forms-and-payment-links
번역일: 2026-11-07
카테고리: 08-결제
---

# 주문 폼과 결제 링크에서 BNPL(선구매 후결제) 사용하기

주문 폼과 **결제 링크**에서 BNPL(Buy Now Pay Later, 선구매 후결제) 결제 수단을 쓸 수 있어요. 이 글에서는 어떤 BNPL 옵션을 제공하는지, 어떤 조건에서 쓸 수 있는지 안내해요.

[동영상](https://www.youtube.com/embed/FAKPHy7aYhs?&wmode=opaque)

1단계 주문 폼과 2단계 주문 폼 모두에서 BNPL을 쓸 수 있어요. 비즈니스 사용자는 고객에게 아래 BNPL 옵션을 제공할 수 있어요.

- Klarna
- Affirm
- Afterpay/Clearpay

## 알아 둘 점

- 사용 가능 조건: Stripe를 결제 제공업체로 쓰는 비즈니스만 사용할 수 있어요.
- 적용 상품: BNPL 옵션은 일회성 상품에만 적용돼요. 반복 결제 상품에는 쓸 수 없어요.
- 기대 효과: BNPL을 제공하면 고객이 더 유연하게 결제할 수 있어서 전환율을 높이는 데 도움이 돼요.
- 주문 및 거래 상세 정보: 주문과 거래 상세 내역은 신용카드 결제와 똑같이 **결제** 메뉴에 기록돼요. 기존의 **Order Submitted**(주문 제출), **Payment Received**(결제 완료) 트리거도 평소처럼 동작해요.
- 적용 시점: 이 변경은 Stripe 쪽 마이그레이션이 필요해요. 일부 계정에서는 이미 사용할 수 있고, 나머지 계정에는 순차적으로 적용되고 있어요.

![주문 폼에서 BNPL 결제 수단을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031777671/original/gJA5ULwoaucsfnusuNKS7Wu1eOCDuJ2RHA.jpeg?1724818467)

![결제 링크에서 BNPL 결제 수단을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031777673/original/38GKzRqbH_riDn87yl2L5ny67J7Sysh-sw.jpeg?1724818467)
