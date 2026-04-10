---

번역일: 2026-04-07
카테고리: 08-결제 > 결제-연동
---

# Stripe 결제 요소에서 결제 방법이 표시되지 않는 문제

## 

고객들로부터 자주 받는 질문입니다. Stripe를 사용하는 경우, 결제 시 표시되는 결제 방법(Klarna, Afterpay, 카드 등)은 Stripe가 동적으로 결정합니다. Stripe에서 해당 결제 방법이 활성화되고 LC(LeadConnector)에서도 활성화되어 있더라도, Stripe가 특정 결제에서 이를 숨길 수 있습니다.

## 
**결제 방법이 표시되지 않는 이유는?**

Stripe는 다음을 포함한 여러 조건을 기반으로 표시할 결제 방법을 결정합니다:

- 
Stripe 계정의 기본 통화

- 
표시 통화(구매하려는 상품이나 인보이스의 통화)

- 
결제자 위치 및 IP 주소

- 
계정에 대한 결제 방법의 자격 요건 및 제한 사항

- 
해당 결제 방법의 거래 한도

- 
결제자의 국가나 지역에서 해당 결제 방법 지원 여부

Stripe Payment Element는 결제자와 거래마다 맞춰서 조정되므로, 고객마다 다른 결제 방법을 볼 수 있습니다.

## 
**결제 방법이 누락된 이유를 확인하는 방법은?**

두 가지 방법으로 문제를 해결할 수 있습니다.

#### 옵션 1: Stripe의 문제 해결 도구 사용

Stripe에서 누락된 결제 방법을 디버그하는 전용 도구를 제공합니다:
[https://support.stripe.com/questions/troubleshoot-missing-payment-methods](https://support.stripe.com/questions/troubleshoot-missing-payment-methods)

*예시 -*

![Stripe 문제 해결 도구 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065062545/original/frcZNg1RkcfHDdofOP7H-dZi-Z7-MjQRuQ.png?1771316862)
 
#### 
옵션 2: Stripe 대시보드에서 결제 방법 요구사항 확인

- 
Stripe 대시보드 열기

- 
설정(우측 상단 톱니바퀴 아이콘)으로 이동

- 
Product settings에서 Payments 열기

- 
Payment methods 탭 열기

- 
결제자가 볼 수 없는 결제 방법 찾기

- 
View details 클릭

결제 방법 요구사항과 자격 요건 세부 사항이 포함된 패널이 열립니다. 결제 방법이 표시되지 않는 일반적인 이유는 다음 항목의 불일치입니다:

- 거래 한도 제한
- 표시 통화 지원
- 고객 위치 지원
- 글로벌 가용성 및 제한 사항

해당 거래에서 이러한 요구사항 중 하나라도 충족되지 않으면, Stripe가 해당 결제 방법을 숨깁니다.

*예시 -*

![Stripe 결제 방법 세부 정보 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065062703/original/pQ4XJKZPGkvMdKxTvziXmD0lk7KcTcfkfw.png?1771316949)

*따라서 이 경우, 계정에서 Klarna는 결제자가 미국과 푸에르토리코에 있고 결제 시 통화가 USD인 경우에만 작동합니다.*

## 
**LeadConnector Payments가 제어할 수 있는 것은?**

Stripe가 결제 요소를 완전히 렌더링하고 어떤 결제 방법이 표시될지 결정합니다. LeadConnector Payments는 LC 쪽에서 결제 방법이 전역적으로 활성화되어 있는지만 제어합니다.

Stripe에서 "blocked by LC payments"와 같은 메시지를 표시하는 경우, 이는 해당 결제 방법이 아직 LC에서 활성화되지 않았음을 의미하며, 내부 테스트 후 LC 지원팀이 활성화해야 할 수 있습니다.

이 경우에도 LC는 Stripe가 결제 방법을 표시하도록 강제할 수 없습니다. Stripe는 결제자와 거래에 대한 자격 요건 규칙을 기반으로 표시 여부를 결정합니다.

---
*원문 최종 수정: Tue, 17 Feb, 2026 at  2:34 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*