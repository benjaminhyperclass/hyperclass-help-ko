---

번역일: 2026-04-06
카테고리: 08-결제
---

# 결제 요소에 PayPal 버튼 추가하기

Hyperclass의 결제 요소(Payment Element)에서 이제 PayPal과 PayLater를 지원하여 결제 처리 기능이 한층 강화되었습니다. 이 연동을 통해 고객들은 폼(Forms), 인보이스(Invoices), 결제 링크(Payment Links), 주문 폼(Order Forms) 등 다양한 플랫폼에서 PayPal을 결제 방법으로 선택할 수 있습니다.

**목차**

- [PayPal 결제 요소란?](#paypal-결제-요소란)
- [결제 요소에서 PayPal 사용의 장점](#결제-요소에서-paypal-사용의-장점)
- [PayPal을 지원하는 기능들](#paypal을-지원하는-기능들)
- [결제 요소에서 PayPal 활성화 방법](#결제-요소에서-paypal-활성화-방법)
- [자주 묻는 질문](#자주-묻는-질문)

# PayPal 결제 요소란?

Hyperclass의 결제 요소에 PayPal과 PayLater 옵션이 포함되어 고객에게 매끄러운 결제 경험을 제공합니다. PayPal 연동을 통해 널리 인정받고 신뢰받는 결제 방법을 제공하여 전환율과 고객 만족도를 높일 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036836498/original/FPgBSVytOE1wkEvwcJShxQ1vI0JhrLpMhg.png?1732031171)

## 결제 요소에서 PayPal 사용의 장점

- **다양한 결제 옵션**: PayPal과 PayLater를 포함하여 고객이 선호하는 결제 방법을 선택할 수 있는 유연성을 제공합니다.

- **매끄러운 결제**: 연동이 안전하고 부드러운 결제 프로세스를 보장하여 전반적인 고객 경험을 향상시킵니다.

- **신뢰도 향상**: PayPal의 명성을 활용하여 고객과의 신뢰를 구축할 수 있습니다.

- **간편한 연동**: 기존 결제 워크플로우에 큰 변화 없이 PayPal을 쉽게 통합할 수 있습니다.

- **글로벌 도달**: PayPal이 전 세계적으로 널리 사용되므로 더 넓은 고객층에 접근할 수 있습니다.

## PayPal을 지원하는 기능들

- **웹사이트 및 퍼널**: 1단계 주문 폼과 2단계 주문 폼 페이지 요소를 사용하여 웹사이트나 퍼널에서 PayPal 버튼으로 결제를 받을 수 있습니다!

- **폼 및 설문**: 폼과 설문에서 "결제 수집(collect payment)" 요소를 통해 PayPal 버튼으로 결제를 받을 수 있습니다!

- **인보이스**: PayPal 버튼을 사용하여 고객으로부터 인보이스 결제를 쉽게 받을 수 있습니다!

- **결제 링크**: 일회성 결제 링크에 PayPal 버튼을 직접 연동할 수 있습니다!

- **이커머스 스토어**: PayPal 버튼을 이커머스 스토어에 추가하여 쇼핑객에게 더 많은 결제 방법을 제공할 수 있습니다!

---

## 결제 요소에서 PayPal 활성화 방법

### 1단계: PayPal 계정 연결하기

- Hyperclass 대시보드에서 `Payments(결제) → Integrations(연동)`으로 이동합니다.

- PayPal을 클릭하고 PayPal 개발자 계정에서 받은 Client ID와 Secret Key를 입력합니다.

- 연동 설정을 저장합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036836402/original/6OidsY6RYZxbA96xdFfCH0L6ntGv8znnww.png?1732031111)

### 2단계: 결제 요소 추가 또는 업데이트

- 폼, 설문, 웹사이트, 퍼널에서 결제를 받고 있다면, 결제 요소를 추가하여 결제 과정에서 PayPal 버튼을 활성화할 수 있습니다.

- 이미 결제 요소가 있고 지금 PayPal을 결제 옵션으로 추가하는 경우, PayPal을 지원하는 최신 버전으로 결제 요소가 업데이트되었는지 확인하세요.

**참고:**

폼이나 설문에서 결제를 받는 경우, "결제 수집(Collect Payment)" 요소를 추가하여 결제 과정에서 PayPal 버튼을 활성화하세요.

퍼널이나 웹사이트에서 결제를 받는 경우, 1단계 또는 2단계 주문 폼 요소를 사용하세요. 이제 이 요소들은 자동으로 PayPal을 지원하므로 별도의 결제 요소가 필요하지 않습니다.
2024년 11월 1일 이전에 주문 폼을 추가했다면, 삭제 후 다시 추가하여 PayPal 호환성을 보장하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036924432/original/VM7jzHn02xA4iMpKqeDYyuy4G4i7cd6l1Q.gif?1732129407)

### 3단계: 결제 요소 미리보기

- 결제 요소에서 PayPal 버튼을 보려면 폼, 설문, 웹사이트, 퍼널을 미리보기해야 합니다.

**중요:** 폼, 설문, 웹사이트, 퍼널 빌더에서 결제 요소를 추가할 때는 버튼이 보이지 **않습니다**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036924369/original/-Sl9NRshnUv8pGsIRkkzax2gv6tvHM9dlw.gif?1732129287)

## 자주 묻는 질문

**Q: PayPal Client ID와 Secret Key는 어떻게 받나요?**

PayPal 개발자 계정에 로그인하여 My Apps & Credentials로 이동한 후 새 앱을 만들어 Client ID와 Secret Key를 받으실 수 있습니다.

**Q: PayPal을 다른 결제 제공업체와 함께 사용할 수 있나요?**

네, 여러 결제 제공업체가 연결되어 있으면 고객이 결제 시 선호하는 결제 방법을 선택할 수 있습니다. 아래 이미지는 고객이 비즈니스의 결제 링크를 열었을 때 여러 결제 제공업체가 연동되어 있을 경우의 화면입니다. 이 예시에서는 PayPal과 Stripe가 하위 계정에 연결되어 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036926474/original/UiSlrEY-iJIxqkZuIAAjksUny8dQsGQ5Iw.png?1732134157)

**Q: 모든 거래에서 PayLater를 사용할 수 있나요?**

PayLater 사용 가능 여부는 PayPal의 약관과 고객의 자격 조건에 따라 달라집니다. 이는 Hyperclass 내에서 설정할 수 없습니다.

**Q: PayPal을 지원하려면 기존 결제 요소를 업데이트해야 하나요?**

네, PayPal 지원이 포함된 최신 버전으로 결제 요소를 업그레이드해야 합니다.

---

*원문 최종 수정: Tue, 2 Sep, 2025 at 12:22 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*