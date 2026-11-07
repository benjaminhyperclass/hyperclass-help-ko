---
원문: /support/solutions/articles/155000007377-missing-payment-methods-in-stripe-checkout-element
번역일: 2026-11-07
카테고리: 08-결제
---

# Stripe 결제 화면에 결제 수단이 보이지 않을 때

Stripe를 쓰는데 Klarna, Afterpay, 카드 같은 결제 수단이 결제 화면에 보이지 않는다면 이 문서를 확인하세요. 결제 수단이 안 보이는 이유와 원인을 확인하는 방법을 안내해요.

고객 문의가 많은 내용이에요. 결제 화면에 나오는 Klarna, Afterpay, 카드 등의 결제 수단은 Stripe가 상황에 맞게 정해요. Stripe와 하이퍼클래스 양쪽에서 결제 수단을 켜 두었더라도, 결제 건에 따라 Stripe가 숨길 수 있어요.

## 결제 수단이 보이지 않는 이유

Stripe는 아래 조건을 바탕으로 보여 줄 결제 수단을 정해요.

1. Stripe 계정의 기본 통화
2. 결제 통화(구매하는 상품이나 인보이스에 설정된 통화)
3. 결제자의 위치와 IP 주소
4. 내 계정에서 해당 결제 수단의 사용 자격과 제한 사항
5. 해당 결제 수단의 거래 금액 한도
6. 결제자의 국가나 지역에서 해당 결제 수단을 지원하는지 여부

Stripe Payment Element는 결제자와 거래마다 다르게 맞춰져요. 그래서 고객마다 다른 결제 수단이 보일 수 있어요.

## 결제 수단이 안 보이는 원인을 확인하는 방법

두 가지 방법으로 확인할 수 있어요.

### 방법 1: Stripe 문제 해결 도구 사용하기

Stripe는 보이지 않는 결제 수단을 점검하는 전용 도구를 제공해요.
<https://support.stripe.com/questions/troubleshoot-missing-payment-methods>

예시

![Stripe 문제 해결 도구 예시 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065062545/original/frcZNg1RkcfHDdofOP7H-dZi-Z7-MjQRuQ.png?1771316862)

### 방법 2: Stripe 대시보드에서 결제 수단별 조건 확인하기

1. Stripe 대시보드를 엽니다.
2. 오른쪽 위의 톱니바퀴 아이콘(**설정으로 이동**)을 클릭합니다.
3. **Product settings**(상품 설정) 아래에서 **결제**를 엽니다.
4. **결제 수단** 탭을 엽니다.
5. 결제자에게 보이지 않는 결제 수단을 찾습니다.
6. **세부정보 보기**를 클릭합니다.

결제 수단의 조건과 사용 자격이 적힌 패널이 열려요. 결제 수단이 보이지 않는 이유는 보통 아래 항목이 맞지 않아서예요.

- **거래 금액** 한도
- 결제 통화 지원 여부
- 고객 위치 지원 여부
- 전 세계 사용 가능 여부와 제한 사항

거래가 이 조건 중 하나라도 충족하지 못하면 Stripe가 해당 결제 수단을 숨겨요.

예시

![결제 수단 세부 조건 패널 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065062703/original/pQ4XJKZPGkvMdKxTvziXmD0lk7KcTcfkfw.png?1771316949)

이 예시에서는 내 계정의 Klarna를 결제자가 미국이나 푸에르토리코에 있고 결제 통화가 USD일 때만 쓸 수 있어요.

## 하이퍼클래스 결제에서 할 수 있는 것

결제 화면의 요소는 Stripe가 모두 그리고, 어떤 결제 수단을 보여 줄지도 Stripe가 정해요. 하이퍼클래스 결제에서는 결제 수단이 하이퍼클래스 쪽에서 전체적으로 켜져 있는지만 관리해요.

"blocked by 하이퍼클래스 payments" 같은 메시지가 보이면, 그 결제 수단이 아직 하이퍼클래스에서 켜지지 않았다는 뜻이에요. 이 경우 내부 테스트를 거쳐 하이퍼클래스 고객지원이 켜 줘야 할 수 있어요.

하이퍼클래스 쪽에서 켜져 있어도 Stripe가 결제 수단을 억지로 보이게 할 수는 없어요. 결제자와 거래가 Stripe의 자격 조건을 충족하는지에 따라 Stripe가 표시 여부를 정해요.
