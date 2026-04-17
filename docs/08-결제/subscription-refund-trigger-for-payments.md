---

번역일: 2026-04-06
카테고리: 08-결제
---

# 결제 구독 및 환불 트리거

결제와 관련된 추가 트리거를 통해 비즈니스 사용자는 리드 전환 프로세스를 중심으로 구축된 자동화를 더욱 세밀하게 제어할 수 있습니다. 기존의 결제 수신(Payment Received), 주문 제출(Order Submitted) 트리거, 인보이스(Invoice) 트리거 지원과 함께 2가지 새로운 트리거가 추가되었습니다.

## 1. 구독 트리거

구독 상태 변경을 중심으로 프로세스를 자동화할 수 있습니다:

- 고객을 위한 구독이 생성될 때
- 구독이 체험판에서 정식 구독으로 전환될 때  
- 구독이 취소될 때

![구독 트리거 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023959671/original/Um9xxbDbdOh3_6DL7wkqyY9voUUKnNJqwA.png?1712223286)

비즈니스에서는 구독 상태 필터를 사용하여 상태 변경이나 구독과 연결된 상품을 기준으로 조건 분기(IF)를 생성할 수 있으며, 결제 커스텀 값 안의 커스텀 값도 활용할 수 있습니다.

![구독 상태 필터 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023960152/original/leLhKdSRr1m71UNylLWYcjpZIc6WMwJmtA.png?1712223613)

## 2. 환불 트리거

사용자나 영업 담당자가 환불 처리한 결제를 중심으로 자동화를 구축할 수 있습니다. 사용자는 환불 시도를 기준으로 워크플로우를 트리거하고, 다음 조건에 따라 분기할 수 있습니다:

- 환불이 성공했는지 실패했는지 여부
- 환불이 전액 환불인지 부분 환불인지 여부
- 또는 환불 금액이나 환불 출처를 기준으로

![환불 트리거 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023961501/original/a-24CCX_0JlZO9TAA350GUj2c79hnlG5mA.png?1712224412)

환불 커스텀 값도 커스텀 값의 결제 섹션에서 사용할 수 있어, 비즈니스에서 다양한 시나리오에 따라 맞춤형 알림을 발송할 수 있습니다.

![환불 커스텀 값 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023961659/original/boJMFD6t8CXJPrCAN54Y-Qu_c_IAMLhXCA.png?1712224503)

이러한 트리거는 `결제(Payments) → 연동(Integrations)`에서 제공되는 Stripe, Authorize.net, NMI 연동과 함께 작동합니다.

PayPal의 경우, 현재는 구독 생성 시에만 트리거가 작동하며 다른 작업에서는 작동하지 않습니다. 모든 기능은 곧 PayPal에서도 지원될 예정입니다.

---

### 관련 문서

- [NMI/Authorize.net에서 구독 작동 방식](authorize-net-integration-for-processing-payments.md)
- [Stripe에서 구독 작동 방식](https://docs.stripe.com/billing/subscriptions/overview)

---
*원문 최종 수정: 2024년 4월 11일 오전 1시 20분*
*Hyperclass 사용 가이드 — hyperclass.ai*