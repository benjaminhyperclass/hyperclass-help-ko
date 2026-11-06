---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003224-how-to-use-bnpl-in-order-forms-and-payment-links
번역일: 2026-11-06
카테고리: 08-결제
---

# 주문 폼과 결제 링크에서 BNPL 결제 수단 사용하기

주문 폼과 **결제 링크**에서 BNPL(Buy Now Pay Later, 지금 사고 나중에 결제) 결제 수단을 쓸 수 있어요. 이 문서에서 지원 범위와 사용 조건, 주문·거래 내역이 기록되는 방식을 안내해요.

[동영상](https://www.youtube.com/embed/FAKPHy7aYhs?&wmode=opaque)

1단계 주문 폼과 2단계 주문 폼 모두에서 BNPL을 쓸 수 있어요. 고객에게 아래 BNPL 결제 수단을 제공할 수 있어요.

- Klarna
- Affirm
- Afterpay/Clearpay

## 알아 두세요

- **사용 조건**: Stripe를 결제 대행사로 쓰는 비즈니스만 사용할 수 있어요.
- **적용 상품**: 일회성 상품에만 쓸 수 있어요. 반복 결제 상품에는 쓸 수 없어요.
- **기대 효과**: 고객이 결제 방식을 더 유연하게 고를 수 있어서 전환율을 높이는 데 도움이 될 수 있어요.
- **주문·거래 내역**: 주문 및 거래 상세 정보는 신용카드 결제처럼 **결제** 메뉴에 기록돼요.
- **트리거**: 기존 **Order Submitted**(주문 제출) 트리거와 **Payment Received**(결제 완료) 트리거는 그대로 작동해요.

{% hint style="info" %}
이 기능은 Stripe 쪽 마이그레이션이 필요해요. 이미 사용할 수 있는 계정도 있고, 아직 적용 중인 계정도 있어요.
{% endhint %}

![BNPL 결제 수단 설정 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031777671/original/gJA5ULwoaucsfnusuNKS7Wu1eOCDuJ2RHA.jpeg?1724818467)
![BNPL 결제 수단 설정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031777673/original/38GKzRqbH_riDn87yl2L5ny67J7Sysh-sw.jpeg?1724818467)
