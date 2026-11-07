---
원문: /support/solutions/articles/48001238332-how-to-manage-refunds-within-the-crm-
번역일: 2026-11-06
카테고리: 08-결제
---

# CRM에서 환불 처리 관리하기

Stripe, Authorize.net, NMI, PayPal 등 여러 결제 제공업체로 결제된 거래를 전액 또는 일부 환불할 수 있어요. Google Pay, Apple Pay, 카드 결제 모두 환불을 지원하므로 한 곳에서 환불을 관리할 수 있어요.

## 환불 기능이란?

환불 기능은 결제 플랫폼에 들어 있는 도구예요. Stripe, Authorize.net, NMI, PayPal 같은 여러 결제 제공업체의 거래를 환불할 수 있고, Google Pay, Apple Pay, 카드 결제도 지원해요. 이 기능으로 할 수 있는 일은 다음과 같아요.

- 거래를 전액 또는 일부 환불할 수 있어요. 고객 상황에 맞게 유연하게 처리할 수 있어요.
- **거래 상세 정보** 페이지에서 환불 성공·실패 기록을 확인할 수 있어요. 특정 거래의 환불 내역과 금액을 한눈에 볼 수 있어요.
- 여러 결제 제공업체와 결제 수단의 환불을 한 곳에서 처리할 수 있어요. 환불 과정이 간단해지고 수작업이 줄어들어요.

{% hint style="info" %}
현재는 환불 처리 권한을 사용자별로 설정할 수 없어요. 이 기능은 앞으로 추가될 예정이에요.
{% endhint %}

### 이런 때 유용해요

- 고객 분쟁 해결: 고객이 상품이나 서비스에 만족하지 못할 때 환불을 빠르게 처리해 고객 만족도와 브랜드 신뢰를 높일 수 있어요.
- 청구 오류 바로잡기: 고객에게 금액이 잘못 청구되었거나 여러 번 청구되었을 때 바로 환불해 고객 경험을 지키고 부정적인 피드백을 줄일 수 있어요.
- 주문 취소 처리: 고객이 주문이나 서비스를 취소하면 필요한 환불을 효율적으로 처리해 관리 업무와 고객의 대기 시간을 줄일 수 있어요.
- 반품·교환 관리: 고객이 상품을 반품하거나 교환을 요청하면 원래 구매 금액을 환불하고, 교체 상품에 대해서는 새 거래를 진행할 수 있어요.
- 할인·프로모션 반영: 구매 시 할인이나 프로모션이 제대로 적용되지 않았다면 일부 환불로 차액을 돌려줄 수 있어요.

## 환불 기능 사용하기

### 지원하는 결제 제공업체

Stripe, Authorize.net, NMI, PayPal 등 모든 결제 제공업체에서 환불 작업을 사용할 수 있어요.

구독에서 반복 결제된 이후 회차의 거래는 아직 환불할 수 없어요.

### 환불하는 방법

1. **결제 > 거래 내역**으로 이동하세요.
2. 환불할 결제 옆의 점 세 개 아이콘을 클릭하세요.
3. **환불**을 클릭하세요.

![환불 메뉴 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294481697/original/41j5gL2qSwbPRpOAAdMAFPbQ8larK1Hu_w.png?1682491291)

### 전액 환불

전액 환불할 때는 환불 창에 거래 전체 금액이 자동으로 채워져 있어요.

![전체 금액이 채워진 환불 창](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294483195/original/K-oPdFTLYfYW0VKJQhm41H8D2ZfNVbIhsg.png?1682491847)

### 일부 환불

일부만 환불하려면 미리 채워진 금액을 거래 전체 금액보다 적은 금액으로 수정하세요.

![환불 금액 수정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294484510/original/M6D5m-WO0tc8HiOhBKdP13XbJGWbWe-qPA.png?1682492260)

![일부 환불 금액 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294484543/original/Q_ZAOTpcgNHUrNjxMpt9dndeiwebjW0H2w.png?1682492274)

{% hint style="info" %}
**Notes**(메모) 영역에 입력한 내용은 본인 기록용이에요. 해당 거래의 **환불 상세 정보**에 있는 **Notes** 열에 표시돼요.

![환불 상세 정보의 Notes 열](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294484586/original/Ilq1RRzeRcvcjypgQmp8aCW0r9c7TgwF4Q.png?1682492295)![환불 상세 정보 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294484252/original/4ptlNfcFsbJmTkA96EalyAH-b4fuOSL6VQ.png?1682492170)
{% endhint %}

### 일부 환불은 이런 때 유용해요

- 가격 오류 조정: 고객에게 잘못된 가격이 청구되었다면, 잘못된 가격과 올바른 가격의 차액만 환불해 정확한 금액이 청구되도록 할 수 있어요.
- 구매 후 할인 적용: 거래가 끝난 뒤에 특정 할인이나 프로모션을 적용하기로 했다면, 일부 환불로 고객에게 약속한 혜택을 줄 수 있어요.
- 합의로 분쟁 해결: 고객이 상품이나 서비스에 완전히 만족하지는 못했지만 사업자와 고객이 적절한 선에서 합의했다면, 합의한 금액만큼 일부 환불할 수 있어요.
- 부분 반품 처리: 고객이 주문의 일부만 반품했다면, 나머지 주문에는 영향을 주지 않고 반품한 상품의 금액만 환불할 수 있어요.
- 파손·누락 상품 보상: 고객이 받은 주문에 파손되거나 빠진 상품이 있다면, 불편에 대한 보상과 해당 상품의 가치만큼 일부 환불할 수 있어요.
- 배송비 환급: 고객이 배송 문제나 지연을 겪었다면, 사과의 뜻으로 배송비만큼 일부 환불할 수 있어요.

## 자주 묻는 질문

### 환불한 거래는 어디에 기록되나요?

환불 시도는 성공과 실패 모두 **거래 상세 정보** 페이지에 기록돼요. 특정 거래에서 환불된 금액을 확인할 때 활용하세요.

![거래 상세 정보 페이지의 환불 기록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294485832/original/Eshvntif-pCDHApfWzfMx2ZmnriKZ2I4Qw.png?1682492675)

### Authorize.net으로 환불하려는데 "The referenced transaction does not meet the criteria for issuing a credit" 오류가 나요

결제 제공업체가 정한 환불 조건을 충족하지 못해서 생기는 오류일 가능성이 높아요. Authorize.net은 거래 시점으로부터 24시간이 지난 거래만 환불할 수 있어요. 오래된 거래를 환불할 수 있는지는 결제 제공업체의 정책과 기간 제한에 따라 달라요. 오래된 거래의 환불 여부는 결제 제공업체의 가이드를 확인하거나 해당 업체의 고객지원에 문의하세요.

### 한 거래에 여러 번 일부 환불할 수 있나요?

네, 환불 금액의 합계가 원래 거래 금액을 넘지 않으면 한 거래에 여러 번 일부 환불할 수 있어요.

### Google Pay와 Apple Pay 거래도 환불할 수 있나요?

네, Google Pay와 Apple Pay 거래, 카드 결제 모두 플랫폼에서 환불할 수 있어요. 환불 금액은 카드 또는 Google/Apple 계정에 연결된 은행 계좌로 돌아가요.

### 환불한 금액이 고객 계좌에 반영되기까지 얼마나 걸리나요?

결제 제공업체와 고객의 은행에 따라 달라요. 보통은 고객 계좌에 반영되기까지 4~6영업일 정도 걸릴 수 있어요.

### 하루에 처리할 수 있는 환불 건수에 제한이 있나요?

보통은 하루 환불 건수에 정해진 제한이 없어요. 다만 결제 제공업체에 환불 처리와 관련한 제한이나 요건이 있는지 확인해 보세요.

### 환불 처리 권한을 사용자별로 설정할 수 있나요? 일부 사용자는 환불하지 못하게 하고 싶어요.

현재는 환불 처리에 대한 사용자 권한을 설정할 수 없어요. 거래에서 이루어진 환불은 **거래 상세 정보**에서 확인하는 것이 가장 좋아요. 사용자별 권한은 개발 예정 목록에 있어요. 환불된 거래는 **거래 내역** 화면 표의 필터에서 바로 걸러 볼 수 있어요.

![거래 내역 표의 환불 거래 필터](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294485695/original/Ch8oCbOWw2_aPmeVJUKjpAle339VPnN9IA.png?1682492626)
