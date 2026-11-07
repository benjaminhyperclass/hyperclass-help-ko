---
원문: https://help.gohighlevel.com/support/solutions/articles/155000004254-adding-paypal-buttons-to-payment-elements
번역일: 2026-11-06
카테고리: 08-결제
---

# 결제 요소에 PayPal 버튼 추가하기

하이퍼클래스의 **Payment Element**(결제 요소)에서 PayPal과 PayLater를 쓸 수 있어요. 고객은 폼, 인보이스, 결제 링크, 주문 폼 등에서 PayPal로 결제할 수 있어요. 이 문서에서는 PayPal 계정을 연결하고 결제 요소에 PayPal 버튼을 표시하는 방법을 안내해요.

[동영상](https://www.youtube.com/embed/l6K6kqqT0ck?&wmode=opaque)

## PayPal 결제 요소란?

**Payment Element**에 PayPal과 PayLater 옵션이 추가되어, 고객이 더 편하게 결제할 수 있어요. 많은 사람이 알고 믿는 결제 수단을 제공하면 전환율과 고객 만족도를 높이는 데 도움이 될 수 있어요.

![PayPal이 포함된 결제 요소 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036836498/original/FPgBSVytOE1wkEvwcJShxQ1vI0JhrLpMhg.png?1732031171)

## 결제 요소에서 PayPal을 쓰면 좋은 점

1. 결제 옵션이 늘어나요: 고객이 PayPal, PayLater 등 원하는 결제 수단을 직접 고를 수 있어요.
2. 결제가 매끄러워요: 안전하고 간편한 결제 과정으로 고객 경험이 좋아져요.
3. 신뢰도가 높아져요: PayPal의 평판을 활용해 고객의 신뢰를 얻을 수 있어요.
4. 연동이 쉬워요: 기존 결제 흐름을 크게 바꾸지 않고 PayPal을 추가할 수 있어요.
5. 해외 고객까지 만날 수 있어요: PayPal은 해외에서도 널리 쓰여서 더 많은 고객에게 다가갈 수 있어요.

## PayPal 버튼을 쓸 수 있는 기능

1. **웹사이트 & 퍼널**: 1단계 주문 폼과 2단계 주문 폼 페이지 요소로 웹사이트나 퍼널에서 PayPal 버튼으로 결제를 받을 수 있어요.
2. **폼 및 설문**: 폼과 설문에 **결제 수집** 요소를 넣어 PayPal 버튼으로 결제를 받을 수 있어요.
3. **인보이스**: 고객에게 보낸 인보이스 결제를 PayPal 버튼으로 간편하게 받을 수 있어요.
4. **결제 링크**: 일회성 결제 링크에 PayPal 버튼을 바로 넣을 수 있어요.
5. 이커머스 스토어: 스토어에 PayPal 버튼을 추가해 구매자에게 더 다양한 결제 방법을 제공할 수 있어요.

## 결제 요소에서 PayPal 켜기

### 1단계: PayPal 계정 연결하기

1. 하이퍼클래스에서 **결제 > 연동**으로 이동하세요.
2. PayPal을 클릭하세요.
3. PayPal 개발자 계정에서 받은 **클라이언트 ID**와 **Secret Key**(시크릿 키)를 입력하세요.
4. **저장**을 클릭해 연동 설정을 저장하세요.

![PayPal 연동 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036836402/original/6OidsY6RYZxbA96xdFfCH0L6ntGv8znnww.png?1732031111)

### 2단계: 결제 요소 추가 또는 업데이트하기

- 폼, 설문, 웹사이트, 퍼널에서 결제를 받는다면 결제 요소를 추가하세요. 그러면 결제 화면에 PayPal 버튼이 표시돼요.
- 이미 결제 요소가 있는 상태에서 PayPal을 결제 옵션으로 추가한다면, **Payment Element**를 PayPal을 지원하는 최신 버전으로 업데이트하세요.

{% hint style="info" %}
폼이나 설문에서 결제를 받는다면 **결제 수집** 요소를 추가하세요. 그러면 결제 화면에 PayPal 버튼이 표시돼요.

퍼널이나 웹사이트에서 결제를 받는다면 **1-Step Order Form**(1단계 주문 폼) 또는 **2-Step Order Form**(2단계 주문 폼) 요소를 사용하세요. 이 요소들은 PayPal을 자동으로 지원해서 별도의 결제 요소가 필요 없어요.

2024년 11월 1일 이전에 주문 폼을 추가했다면, PayPal과 호환되도록 주문 폼을 삭제한 뒤 다시 추가하세요.
{% endhint %}

![결제 요소를 추가하는 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036924432/original/VM7jzHn02xA4iMpKqeDYyuy4G4i7cd6l1Q.gif?1732129407)

### 3단계: 결제 요소 미리보기

- 결제 요소에서 PayPal 버튼을 확인하려면 폼, 설문, 웹사이트 또는 퍼널을 미리보기로 열어야 해요.

{% hint style="warning" %}
폼, 설문, 웹사이트, 퍼널 빌더에서 결제 요소를 추가하는 중에는 버튼이 보이지 않아요.
{% endhint %}

![미리보기에서 PayPal 버튼을 확인하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036924369/original/-Sl9NRshnUv8pGsIRkkzax2gv6tvHM9dlw.gif?1732129287)

## 자주 묻는 질문

### PayPal 클라이언트 ID와 Secret Key는 어떻게 받나요?

PayPal 개발자 계정에 로그인한 뒤 **My Apps & Credentials**(내 앱 및 자격 증명)로 이동하세요. 새 앱을 만들면 클라이언트 ID와 Secret Key를 받을 수 있어요.

### PayPal을 다른 결제 업체와 함께 쓸 수 있나요?

네, 결제 업체를 여러 개 연결해 두면 고객이 결제할 때 원하는 결제 수단을 고를 수 있어요. 아래 이미지는 여러 결제 업체를 연동한 상태에서 고객이 비즈니스의 결제 링크를 열었을 때 보이는 화면이에요. 이 예시에서는 서브 계정에 PayPal과 Stripe가 연결되어 있어요.

![PayPal과 Stripe가 함께 표시된 결제 링크 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036926474/original/UiSlrEY-iJIxqkZuIAAjksUny8dQsGQ5Iw.png?1732134157)

### PayLater는 모든 거래에서 쓸 수 있나요?

PayLater를 쓸 수 있는지는 PayPal의 약관과 고객의 자격에 따라 달라요. 하이퍼클래스에서 설정하는 항목이 아니에요.

### PayPal을 쓰려면 기존 결제 요소를 업데이트해야 하나요?

네, PayPal을 지원하는 최신 버전으로 **Payment Element**를 업그레이드해야 해요.
