---
원문: https://help.gohighlevel.com/support/solutions/articles/155000007398-configure-your-stripe-account-for-nacha-compliance
번역일: 2026-11-07
카테고리: 08-결제
---

# Nacha 규정 준수를 위한 Stripe 계정 설정

Stripe가 Nacha 운영 규칙에 맞춰 ACH Direct Debit 요건을 강화하고 있어요. 이 문서에서는 Stripe 대시보드에서 거래 분류 방식을 설정하는 방법을 안내해요.

## 개요

하이퍼클래스에서 Stripe로 미국 은행 계좌 결제를 받고 있다면 Stripe 계정 정보를 업데이트해야 할 수 있어요. 고객이 은행 명세서에서 내 비즈니스를 쉽게 알아보고, 연락할 방법도 있어야 하기 때문이에요. ([Stripe](https://stripe.com/gb/resources/more/nacha-rules-explained "Nacha Rules and Compliance: A Guide for Businesses - Stripe")) [[Nacha compliance](https://support.stripe.com/questions/configure-your-account-for-nacha-compliance)]

{% hint style="info" %}
2026년 3월 20일부터 적용돼요.
{% endhint %}

**누가 설정해야 하나요?**

1. 하이퍼클래스에 Stripe 계정을 연결했고, ACH Direct Debit으로 결제를 받고 있거나 미국 은행 계좌 결제를 받을 계획이 있는 경우
2. 하이퍼클래스에 Stripe 계정을 연결한 서브 계정(고객사)이 ACH Direct Debit으로 결제를 받고 있거나 미국 은행 계좌 결제를 받을 계획이 있는 경우

## Stripe에서 해야 할 일

Stripe가 은행 결제 거래를 어떻게 분류할지 직접 선택해야 해요. Stripe에서는 세 가지 옵션을 제공해요.

1. **Automatically classify transactions**(거래 자동 분류)
   Stripe가 판매자 정보, 거래 내용 등 확인 가능한 신호를 바탕으로 각 거래가 상품 구매인지 판단해요. 대부분의 비즈니스에 맞고, 코드를 바꿀 필요도 없어요.
2. **Classify all ACH transactions as goods**(모든 ACH 거래를 상품으로 분류)
   실물 상품이나 디지털 상품만 판매한다면 이 옵션을 선택하세요. 모든 ACH 거래가 상품 구매로 분류돼요.
3. **Do not classify any transactions as goods**(어떤 거래도 상품으로 분류하지 않음)
   상품을 판매하지 않고 서비스를 제공하거나, 기부금 또는 공과금·청구서 결제를 받는다면 이 옵션을 선택하세요.

![Stripe의 거래 분류 옵션 세 가지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065543710/original/P7nTO5m7e6C8uPSkMaZ2eVwNSBJ6_kKY-g.png?1771909883)

## Stripe에서 거래 분류 설정하기

1. Stripe 대시보드를 열어요.
2. **설정**으로 이동한 다음 **Payment**(결제)에서 **Link**를 찾아요.

   ![Stripe 설정 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065543867/original/5AQRago7_AZme6oKFt1l-YMqt_Toe43kQQ.png?1771910281)

   ![Stripe 결제 설정의 Link 항목](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065543874/original/arW0y6_1iBXVm_NADOfhFRFeetfaU2fMQA.png?1771910307)
3. **Nacha compliance**(Nacha 규정 준수) 섹션을 찾아요.

   ![Nacha compliance 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065543918/original/12x260ybt1sQkCQGuYdU5-2nHvATc9c-ww.png?1771910380)
4. 세 가지 분류 옵션 중 하나를 선택해요.
5. **변경사항 저장**을 눌러요.

## 자주 묻는 질문

### 하이퍼클래스가 대신 설정해 주나요?

아니요. Stripe 계정의 설정이라서 Stripe 대시보드에서 직접 바꿔야 해요.

### 명세서 표시 이름(statement descriptor)은 어떻게 정하면 되나요?

고객이 내 비즈니스로 알아볼 수 있는 이름을 쓰세요. ACH Direct Debit 거래 시 은행 명세서에 이 이름이 표시돼요. ([Stripe Docs](https://docs.stripe.com/payments/ach-direct-debit "ACH Direct Debit | Stripe Documentation"))
