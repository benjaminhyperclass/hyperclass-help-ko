---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003224-how-to-use-bnpl-in-order-forms-and-payment-links
번역일: 2026-11-06
카테고리: 08-결제
---

# 주문 폼과 결제 링크에서 후불결제(BNPL) 사용하기

이제 주문 폼과 **결제 링크**에서 지금 구매하고 나중에 결제하는 BNPL(Buy Now Pay Later) 결제 수단을 쓸 수 있어요. 1단계 주문 폼과 2단계 주문 폼 모두 해당돼요. 이 문서에서 지원하는 BNPL 옵션과 사용 조건을 안내해요.

[동영상](https://www.youtube.com/embed/FAKPHy7aYhs?&wmode=opaque)

고객에게 다음 BNPL 옵션을 제공할 수 있어요.

- Klarna
- Affirm
- Afterpay/Clearpay

## 알아 두세요

- **사용 가능 대상**: 결제 대행사로 Stripe를 쓰는 비즈니스만 이 기능을 쓸 수 있어요.
- **적용 상품**: BNPL 옵션은 일회성 상품에만 쓸 수 있어요. 반복 결제 상품에는 쓸 수 없어요.
- **장점**: 고객이 결제 방식을 유연하게 고를 수 있어서 전환율을 높이는 데 도움이 될 수 있어요.
- **주문 및 거래 정보**: 주문과 거래 내용은 신용카드 결제와 똑같이 **결제** 메뉴에 기록돼요. 기존에 쓰던 **Order Submitted**(주문 제출) 트리거와 **결제 완료** 트리거도 지금처럼 작동해요.
- **Stripe 마이그레이션**: 이 변경은 Stripe 마이그레이션이 필요해요. 일부 계정에는 이미 적용되어 있고, 나머지 계정은 순차적으로 진행 중이에요.

![주문 폼에서 BNPL 결제 수단을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031777671/original/gJA5ULwoaucsfnusuNKS7Wu1eOCDuJ2RHA.jpeg?1724818467)
![BNPL 결제 수단 옵션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031777673/original/38GKzRqbH_riDn87yl2L5ny67J7Sysh-sw.jpeg?1724818467)
