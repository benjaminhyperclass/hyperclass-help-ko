---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006712-paypal-in-calendars
번역일: 2026-11-07
카테고리: 04-캘린더-예약
---

# 캘린더에서 PayPal로 결제 받기

캘린더 예약에 PayPal 결제를 붙이는 방법을 안내해요. 예약자는 익숙한 PayPal 결제를 쓸 수 있고, 결제 금액은 내 PayPal 계정으로 바로 들어와요. PayPal은 Stripe, Square, Authorize .net, NMI와 함께 쓸 수 있어서 결제 선택지를 넓히는 데 도움이 돼요.

## 캘린더의 PayPal 지원이란?

서비스(v2), 라운드 로빈, 컬렉티브, 개인 캘린더에서 PayPal을 결제 수단으로 쓸 수 있는 기능이에요. PayPal을 연결하면 결제 화면에 PayPal이 표시돼요. 예약자는 PayPal 잔액, 연결된 은행 계좌, 카드 중에서 골라 결제할 수 있어요. 가격은 캘린더마다 정할 수 있고, 결제 금액은 내 PayPal 계정으로 바로 들어와요.

## 주요 장점

- 한 번의 클릭으로 결제할 수 있어요. PayPal 고객은 카드 정보를 입력하지 않아도 돼요.
- Stripe, Square, NMI, Authorize .net과 함께 쓸 수 있어요. 고객이 원하는 결제 수단을 직접 고를 수 있어요.
- 결제 금액이 PayPal 대시보드에 바로 정산돼요.
- PCI 규정을 완전히 준수해요. 하이퍼클래스는 PayPal 인증 정보를 저장하지 않아요.

## 지원하는 결제 제공업체

하이퍼클래스 캘린더는 다음 결제 제공업체를 지원해요.

- PayPal (신규)
- Stripe
- Authorize .net
- NMI
- Square
- Razorpay\*

```
PayPal과 Razorpay는 동시에 활성화할 수 없습니다. 둘 다 연결하면 Razorpay가 기본으로 사용됩니다.
```

## PayPal 호환성과 제한 사항

PayPal이 되는 경우와 안 되는 경우를 미리 알아 두면 설정할 때 겪는 문제를 줄일 수 있어요.

- 모든 캘린더 유형과 새 서비스(v2)에서 지원해요.
- 기존 **Service Menu**(서비스 메뉴, v1)에서는 지원되지 않아요.
- Razorpay와 함께 쓸 수 없어요. 둘 다 연결하면 Razorpay가 기본으로 사용돼요.
- 캘린더 결제에 이미 적용된 통화, 부분 결제, 쿠폰 규정을 똑같이 따라요.

## 캘린더 예약에 PayPal 설정하기

PayPal 연결은 몇 분이면 끝나요. 연결하고 나면 PayPal 결제를 쓸 수 있는 모든 캘린더에서 바로 사용할 수 있어요.

### 서브 계정에 PayPal 연결하기

1. **결제 > 연동**으로 이동해요.

   ![결제 연동 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056088076/original/MKM1Kr6r87Usq6X9gfVBnxzDzoTewbZhww.png?1760550206)

2. **PayPal**에서 **연결**을 클릭하고, PayPal의 **Client ID**(클라이언트 ID)와 **Secret**(시크릿)을 입력해요.

   ![PayPal 연결 정보 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056088101/original/GrlMnTe50SpGSORF9FVUkFndHQ8q7fbVKg.png?1760550242)

3. **저장**을 클릭해요.

### 캘린더에서 결제 켜기

1. **캘린더 > 설정**으로 이동해서 결제를 받을 캘린더를 열어요.

   ![캘린더 설정에서 캘린더 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056088163/original/UXS5ymdkuEaC2urDXtl9XOpVFzNIgnRg0A.png?1760550332)

2. **Forms & Payments**(폼 및 결제)에서 **Accept Payments**(결제 받기)를 켜요.

   ![결제 받기 토글을 켠 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056088563/original/3hbV7tkdeFxehlNTuIgabHbnSsAVNWzmBg.png?1760550701)

3. **PayPal**을 선택해요. PayPal이 유일한 결제 수단이라면 **기본**으로 두어도 돼요.
4. **Amount**(금액)와 **설명**을 입력하고, **라이브** 또는 **Test**(테스트) 모드를 선택해요.
5. **저장**을 클릭해요.

   ![금액과 설명을 입력하고 저장하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056088615/original/0WvZfUBlhYt6gk5M8L3QFSc91yy0b-Fjjw.png?1760550773)

## 자주 묻는 질문

### PayPal과 신용카드 결제를 함께 제공할 수 있나요?

네, 할 수 있어요. Stripe, Square, NMI, Authorize .net도 연결되어 있으면 예약 위젯에 PayPal과 카드 결제 옵션이 함께 표시돼요. 고객은 결제할 때 원하는 방법을 골라요.

### Razorpay도 같이 연결하면 어떻게 되나요?

하이퍼클래스는 Razorpay를 우선 사용해요. PayPal을 쓰려면 Razorpay 연결을 해제하거나 기본 결제 수단을 바꾸세요.

### 반복 예약 캘린더에서도 PayPal을 쓸 수 있나요?

네, 새 서비스(v2)나 지원되는 다른 캘린더 유형을 쓰는 경우에는 쓸 수 있어요. 기존 **Service Menu**(v1)와 앱 안에서 직접 만드는 반복 예약은 지원되지 않아요.

### 결제 금액은 어디로 들어가나요?

**결제 > 연동**에서 연결한 PayPal 계정으로 바로 정산돼요.

### 하이퍼클래스 안에서 PayPal 결제를 환불할 수 있나요?

아직은 안 돼요. 환불은 PayPal 대시보드에서 처리해야 해요.

### 우리나라에서도 PayPal을 쓸 수 있나요?

PayPal을 쓸 수 있는지는 PayPal이 지원하는 지역과 통화에 따라 달라요. 잘 모르겠다면 PayPal 문서를 확인하세요.

### PayPal 비회원 결제도 캘린더에서 되나요?

PayPal 비회원 결제는 캘린더 예약과 호환되지 않아요.
