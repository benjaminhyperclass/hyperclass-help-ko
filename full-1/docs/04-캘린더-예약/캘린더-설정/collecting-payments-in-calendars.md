---
원문: https://help.gohighlevel.com/support/solutions/articles/155000000875-collecting-payments-in-calendars
번역일: 2026-11-07
카테고리: 04-캘린더-예약
---

# 캘린더에서 결제 받기

고객이 캘린더로 예약할 때 결제를 받을 수 있어요. 예약 시간을 잡으려면 일정 금액을 먼저 받아야 하는 비즈니스에서 특히 유용해요.

[동영상](https://www.youtube.com/embed/ttGFXDYIAnY?&wmode=opaque)

## 결제 정보 수집 방식 선택하기

캘린더 결제 설정에서는 예약 중에 결제까지 할지, 결제 없이 카드 정보만 받을지 고를 수 있어요.

### Charge upfront

예약 과정에서 바로 결제를 받으려면 **Charge upfront**(선결제)를 활성화하세요.

결제 여부는 최종 결제 금액에 따라 달라져요.

- 최종 금액이 **$0**을 초과하면 고객이 결제 정보를 입력하고 최종 금액을 결제해요.
- 설정한 금액이 **$0**이면 카드 정보 수집과 결제를 건너뛰어요.
- 쿠폰으로 최종 금액이 **$0**이 되면 카드 정보 수집과 결제를 건너뛰어요.
- 쿠폰으로 금액이 줄었지만 **$0**을 초과하는 금액이 남으면 고객이 할인된 금액을 결제해요.

### Collect Card on File

예약할 때 결제는 하지 않고 고객의 카드 정보만 안전하게 저장하려면 **Collect Card on File**(카드 정보 저장)을 활성화하세요.

이 옵션을 켜면 다음과 같이 진행돼요.

- 고객이 예약할 때 카드 정보를 입력해요.
- 카드는 나중에 쓸 수 있도록 안전하게 저장돼요.
- 예약 중에는 고객에게 결제가 청구되지 않아요.
- 예약 중에는 결제 거래가 만들어지지 않아요.

![캘린더 결제 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079903459/original/aKkkDjAd15id4Y8sJdlh11G32TuMKznCQQ.png?1788350018)

| 캘린더 결제 설정 | 최종 금액 | 카드 수집 여부 | 결제 처리 여부 |
| --- | --- | --- | --- |
| **Collect Card on File** | 선결제 없음 | 예 | 아니오 |
| **Charge upfront** | $0 초과 | 예 | 예 |
| **Charge upfront** | $0으로 설정 | 아니오 | 아니오 |
| **Charge upfront** + 쿠폰 | $0으로 할인 | 아니오 | 아니오 |
| **Charge upfront** + 쿠폰 | $0 초과 | 예 | 예, 할인된 최종 금액 |

## 사용할 수 있는 결제 제공업체와 추가 방법

캘린더 결제는 Stripe, NMI, [Authorize.net](https://www.authorize.net/), Razorpay, Square, PayPal까지 여섯 가지 결제 게이트웨이로 지원해요.

{% hint style="info" %}
모든 캘린더 유형에서 이 결제 수단으로 결제를 받을 수 있어요. 다만 Razorpay, NMI, Square는 현재 **Classic Widget**(클래식 위젯)과 **Service menu**(서비스 메뉴)에서 지원하지 않아요.
{% endhint %}

![캘린더 결제를 지원하는 결제 게이트웨이](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033519978/original/vzCmzvapFjUo7DsuLNJTUgpiRzwUDHg.png?1727262265)

1. 먼저 서브 계정에서 **결제 > 연동**으로 이동해 결제 게이트웨이를 추가하세요.

   {% hint style="info" %}
   게이트웨이를 여러 개 연결하면 기본 결제 게이트웨이를 고르는 드롭다운이 나타나요. 결제는 **DEFAULT PAYMENT GATEWAY**(기본 결제 게이트웨이)로 선택한 곳으로만 받아요. 예를 들어 Stripe를 선택하면 Stripe로만 결제를 받아요.
   {% endhint %}

2. **캘린더 설정**으로 이동하세요.

   ![캘린더 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033521080/original/uFxtBz_v_b80OCe3k7My8k0RuceLbq9QBQ.png?1727262963)

3. 기존 캘린더는 점 세 개를 눌러 편집하고, 새 캘린더를 만들 때는 **고급 설정**으로 이동하세요. **Forms & Payments**(폼 및 결제) 아래에 **Accept Payments**(결제 받기) 토글이 있어요.

   ![Forms & Payments의 결제 받기 토글](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033521192/original/sqik4r-JwEgnavpFvMgALB5OJEcFd6CMGg.png?1727263051)

4. 토글을 켜면 다음 입력 항목이 나타나요.
   1. **금액**(통화 포함)
   2. **설명**
   3. **결제 모드**(Test 또는 Live)

{% hint style="info" %}
**Test or Live**(테스트 또는 라이브) 토글을 켜면(오른쪽으로 밀면) 캘린더가 라이브 모드로 작동해요. 끄면(왼쪽으로 밀면) 테스트 모드로 유지돼요.

![테스트 또는 라이브 토글](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045843011/original/VTDRnW10BGxy0xY9xAdwogayFefOWFSJsQ.jpeg?1745931481)
{% endhint %}

{% hint style="info" %}
부분 결제는 반복 캘린더에서 작동하지 않아요.
{% endhint %}

{% hint style="info" %}
아래 화면처럼 **결제 옵션**이 보이지 않는다면 아직 결제 게이트웨이를 연동하지 않은 거예요. 위 단계를 다시 확인해 캘린더의 **결제 옵션**을 활성화하세요.
{% endhint %}

![결제 옵션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155006648060/original/I2_PFrdBEYb75fJtOwaUD6WR8wMsmpd7vA.png?1693595785)

### 결제 제공업체 연동하기

#### Square

Square를 연결하려면 다음 단계를 따르세요.

1. [Square 계정](https://app.squareup.com/login)에 로그인하고, 로그인한 상태로 두세요.
2. 하이퍼클래스에서 **결제 > 연동**으로 이동해 **Square 라이브 모드**의 **Connect**(연결) 버튼을 클릭하세요. 로그인된 Square 계정이 자동으로 선택되어 하이퍼클래스에 연결돼요.

#### Razorpay

자세한 내용은 [Razorpay 연동 도움말](../../08-결제/결제-연동/how-to-integrate-razorpay-within-the-crm.md)을 참고하세요.
