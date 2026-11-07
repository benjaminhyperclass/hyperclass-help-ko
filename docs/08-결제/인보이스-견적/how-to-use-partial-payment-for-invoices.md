---
원문: /support/solutions/articles/155000002614-how-to-use-partial-payment-for-invoices
번역일: 2026-11-07
카테고리: 08-결제
---

# 인보이스 부분 결제 사용하기

인보이스에 최소 결제 비율을 정해 두면, 고객이 인보이스 금액을 나눠서 낼 수 있어요. 이 문서에서는 부분 결제가 어떤 기능인지 알아보고, 켜는 방법을 안내해요.

## 새로워진 점

- 예전에는 고객이 인보이스로 전액만 결제할 수 있었고, 나눠서 낼 방법이 없었어요. 이제 비즈니스 사용자가 인보이스 총액 중 고객에게 받을 최소 비율을 정할 수 있어요.

![부분 결제됨 상태](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027257698/original/uDBCUig1RdDMo5Il4k3E2Ghs2vmDsnA3WQ.jpeg?1717719769)
![부분 결제 대시보드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027257699/original/cADt_E3Xa2ZnnG-gakcZ1XNs8aJTijXDpw.jpeg?1717719769)

- 고객은 서브 계정의 **Invoicing Dashboard**(인보이스 대시보드)에서 지정한 비율 이상이라면 원하는 금액을 낼 수 있어요.

![부분 결제 금액 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027257697/original/PKdCKuDCzIAG6sz0pkLAfbeWc7o8g-FHCQ.jpeg?1717719769)
![부분 결제된 인보이스 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027257696/original/uC5-Wju2LozOejLil5ggHlP-4t3l7jJ8Hg.jpeg?1717719769)

- 일회성 인보이스와 반복 인보이스 모두 쓸 수 있어요.

## 이 기능이 필요한 이유

비즈니스 운영자가 고객별 결제 계획을 더 유연하게 관리할 수 있어요. 잠재 고객에게서 더 많은 결제를 받는 데도 도움이 돼요.

{% hint style="info" %}
반복 인보이스는 자동 결제를 끈 인보이스에서 부분 결제를 쓸 수 있어요. 자동 결제를 켜 둔 상태에서 고객 카드가 등록되어 있으면, 첫 번째 인보이스는 부분 결제를 선택할 수 있어요. 하지만 그다음 인보이스부터는 전체 금액이 자동으로 결제돼요.
{% endhint %}

## 요약

부분 결제를 켜면 인보이스 결제의 최소 비율을 정해 고객이 나눠서 결제하게 할 수 있어요. 결제 계획을 더 유연하게 관리하고, 고객에게서 결제를 받을 가능성도 높일 수 있어요.

## 사용 방법

1. 결제 게이트웨이(Stripe, [Authorize.net](http://authorize.net/), NMI)가 연동되어 있는지 확인하세요.
2. **결제 > 인보이스 > 인보이스 설정**으로 이동하세요.
3. 이 페이지의 메뉴에서 **결제 설정**을 클릭하세요.
4. **Partial Payments**(부분 결제) 토글을 켜세요.
5. 입력란에 비율(%)을 입력하세요. 이 비율은 결제할 인보이스 총액을 기준으로 계산돼요.
6. **저장**을 클릭하세요. 이제 부분 결제를 쓸 수 있어요.
