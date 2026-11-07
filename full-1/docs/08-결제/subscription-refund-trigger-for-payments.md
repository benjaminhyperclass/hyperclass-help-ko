---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002213-subscription-refund-trigger-for-payments
번역일: 2026-11-07
카테고리: 08-결제
---

# 결제 워크플로우 트리거 — 구독·환불

결제와 관련된 트리거가 늘어나면서, 리드가 고객이 되는 과정의 자동화를 더 세밀하게 만들 수 있어요. 이 문서에서는 새로 추가된 구독 트리거와 환불 트리거를 소개해요.

기존에는 **결제 완료** 트리거, **Order Submitted**(주문 제출) 트리거, **Invoice**(인보이스) 트리거를 쓸 수 있었어요. 여기에 트리거 2개가 더 추가되었어요.

## 1. 구독 트리거

구독 상태가 바뀔 때 실행되는 자동화를 만들 수 있어요. 다음 경우에 트리거를 사용할 수 있어요.

- 고객에게 구독이 만들어졌을 때
- 구독이 체험 상태에서 활성 상태로 바뀌었을 때
- 구독이 취소되었을 때

![구독 트리거 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023959671/original/Um9xxbDbdOh3_6DL7wkqyY9voUUKnNJqwA.png?1712223286)

구독 상태 필터를 쓰면 상태 변경이나 구독에 연결된 상품을 기준으로 IF 조건을 만들 수 있어요. **커스텀 값**의 **결제** 항목에 있는 값도 사용할 수 있어요.

![구독 상태 필터와 커스텀 값 사용 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023960152/original/leLhKdSRr1m71UNylLWYcjpZIc6WMwJmtA.png?1712223613)

## 2. 환불 트리거

본인이나 영업 담당자가 환불로 처리한 결제를 기준으로 자동화를 만들 수 있어요. 환불을 시도하면 워크플로우가 시작되고, 다음 기준으로 조건을 나눌 수 있어요.

- 환불이 성공했는지, 실패했는지
- 전액 환불인지, 부분 환불인지
- 환불 금액이나 환불 경로(소스)

![환불 트리거 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023961501/original/a-24CCX_0JlZO9TAA350GUj2c79hnlG5mA.png?1712224412)

환불 커스텀 값도 **커스텀 값**의 **결제** 항목에 있어요. 이 값으로 상황별 맞춤 알림을 보낼 수 있어요.

![환불 커스텀 값 목록 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023961659/original/boJMFD6t8CXJPrCAN54Y-Qu_c_IAMLhXCA.png?1712224503)

{% hint style="info" %}
이 트리거는 **결제 > 연동**에서 쓸 수 있는 Stripe, Authorize.net, NMI 연동에서 작동해요. NMI/Authorize.net에서 구독이 작동하는 방식은 [Authorize.net 연동으로 결제 처리하기](authorize-net-integration-for-processing-payments.md)를 참고하세요.
{% endhint %}

{% hint style="info" %}
PayPal에서는 구독이 만들어질 때만 트리거가 작동하고, 그 이후의 동작에는 작동하지 않아요. PayPal에서도 곧 모든 기능을 사용할 수 있어요.
{% endhint %}
