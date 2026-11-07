---
원문: https://help.gohighlevel.com/support/solutions/articles/155000004051-how-to-add-customer-login-in-ecommerce-stores-to-view-order-details-and-past-orders-
번역일: 2026-11-07
카테고리: 37-이커머스-스토어
---

# 이커머스 스토어에 고객 로그인 추가하기: 주문 상세와 지난 주문 보기

스토어 고객이 현재 주문 상세와 지난 주문 내역을 직접 확인할 수 있게 하는 기능이에요. 고객이 받는 주문 확인 이메일에는 버튼이 있고, 이 버튼으로 **Customer Access Center**(고객 접근 센터)에 들어가 OTP 인증으로 로그인해요.

## 설정 및 사용 방법

1. 주문 확인 이메일을 켜세요.

   고객이 **Customer Access Center**로 들어가는 이메일을 받으려면 주문 확인 이메일을 켜야 해요. 아래 경로에서 켤 수 있어요.

   **결제 > 설정 > 알림 > Order confirmation Email for Stores**(스토어 주문 확인 이메일)

2. **Customer Access Center**에 로그인해요.

   1. 고객은 주문 확인 이메일의 **주문 보기** 버튼을 눌러 **Customer Access Center**에 들어갈 수 있어요.
   2. 현재 주문 상세를 모두 보려면, 고객은 결제할 때 사용한 이메일 주소로 로그인해야 해요.

   **자동 인증:** **Customer Access Center**의 OTP 요청은 Cloudflare Turnstile이 자동으로 보호해요. 보통은 고객이 아무 작업을 하지 않아도 백그라운드에서 인증이 끝나요. 추가 인증이 필요하면 OTP 요청을 계속하기 전에 인증 화면이 나타나요. 별도로 설정할 것은 없어요.

3. 주문 처리 상태를 확인해요.

   스토어 운영자가 주문에 표시한 처리 상태(fulfilment status)는 일부 처리든 전체 처리든 고객에게도 그대로 보여요. 고객은 운송장 번호, 배송 추적 URL, 배송사 이름이 담긴 처리 상세를 확인할 수 있어요.

4. 지난 주문을 확인해요.

   탐색 메뉴의 **주문** 버튼을 누르면 지난 주문을 볼 수 있어요.

5. **Customer Access Center** 전용 URL을 사용해요.

   아래 주소로도 포털에 들어갈 수 있어요.

   ```
   <storeurl>/store/account/orders
   ```

   예: [myawesomestore.com/products/store/account/orders](http://myawesomestore.com/products/store/account/orders)

   ![Customer Access Center 전용 URL 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035621953/original/TAnpOkm1et0uD0GAg0Vi5TRGhSN4wvF_yQ.png?1730199308)

{% hint style="warning" %}
**Customer Access Center**가 제대로 작동하려면 도메인이 연결되어 있어야 해요. 또 도메인의 기본 경로가 스토어의 아무 페이지나 가리키도록 설정해 주세요.
{% endhint %}

{% hint style="info" %}
- 같은 이메일 주소에 연락처가 여러 개 연결되어 있으면, 가장 먼저 만든 연락처로 **Customer Access Center**에 로그인해요.
- **Sticky Contact**(스티키 연락처)를 켜면, 해당 브라우저 세션의 모든 주문이 하나로 합쳐져요.
{% endhint %}

## 화면 예시

- 주문 확인 이메일 켜기:

![주문 확인 이메일 켜기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035197842/original/GND71JslO3FTUhKXl6fSScLor-YHscqVxA.jpeg?1729608885)

- 주문 상세 페이지로 들어가기:

![주문 상세 페이지로 들어가는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035197841/original/2KGTDV-AFwCZ0W-mmCFesw6j9IeST3f6CA.jpeg?1729608885)

- **주문 상세** 페이지:

![주문 상세 페이지 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035197845/original/3S5zMKxl0VXKCX5Gg0WQR0MnBUZvyOq4pQ.jpeg?1729608885)

- 로그인할 때 이메일 입력하기:

![로그인 시 이메일을 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035197840/original/qfXG0qM-WPNTmoDC8_cNQBl7jGmXKWfV-w.jpeg?1729608884)

- 로그인용 OTP 입력:

![로그인용 OTP 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035197843/original/7qmhJJZncVV35LaKb3kZxsDKXKc9JwUk7A.jpeg?1729608884)

- 주문 상세 요약 페이지:

![주문 상세 요약 페이지 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035197847/original/ubpcxOZ0qhxbtUJCVSmqJt0AbBkJ_z9L2g.jpeg?1729608885)

- 지난 주문 화면:

![지난 주문 목록 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035197844/original/bi9WqCsq4u-qykZeqNzHiUUM-T_Q8kHWrQ.jpeg?1729608885)
