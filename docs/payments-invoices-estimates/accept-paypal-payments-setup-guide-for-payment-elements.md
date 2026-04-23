---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000006212-accept-paypal-payments-setup-guide-for-payment-elements
번역일: 2026-04-23
카테고리: 결제/인보이스/견적서 > 
---

# PayPal 결제 받기: 결제 요소 설정 가이드

영수증과 유연한 결제 옵션은 고객 경험을 개선하고 전환율을 높이는 데 중요한 역할을 합니다. PayPal 결제 요소(Payment Element)를 통해 이제 여러 결제 화면에서 PayPal과 PayLater를 결제 방법으로 제공할 수 있어, 고객이 더 쉽게 거래를 완료할 수 있습니다.

이 기능을 사용하면 폼(Forms), 인보이스(Invoices), 결제 링크(Payment Links), 주문 폼(Order Forms)에서 PayPal을 통한 결제를 받을 수 있어 고객에게 더 많은 선택권을 제공하고 결제 완료율을 향상시킬 수 있습니다.

---

**목차**

- [PayPal 결제 요소란?](#PayPal-결제-요소란?)
- [결제 요소에서 PayPal 사용의 이점](#결제-요소에서-PayPal-사용의-이점)
- [PayPal을 사용할 수 있는 곳](#PayPal을-사용할-수-있는-곳)
- [결제 요소에서 PayPal 활성화 방법](#결제-요소에서-PayPal-활성화-방법)
- [중요 사항](#중요-사항)
- [자주 묻는 질문](#자주-묻는-질문)
- [도움이 필요하신가요?](#도움이-필요하신가요?)

---

# **PayPal 결제 요소란?**

PayPal 결제 요소를 사용하면 기존 결제 설정 내에서 PayPal과 PayLater를 통한 결제를 받을 수 있습니다. 복잡한 설정 없이도 신뢰할 수 있고 널리 사용되는 결제 옵션을 결제 경험에 추가할 수 있습니다.

고객은 PayPal 계정을 사용하여 안전하게 결제를 완료하거나 (조건에 맞는 경우) PayLater를 선택할 수 있어 결제 과정의 마찰을 줄일 수 있습니다.

---

## **결제 요소에서 PayPal 사용의 이점**

PayPal을 추가하면 친숙하고 유연한 결제 옵션을 제공하여 고객 경험과 결제 성공률을 모두 개선할 수 있습니다.

- **더 많은 결제 선택권:** 고객이 카드 결제만이 아닌 PayPal이나 PayLater를 선택할 수 있습니다
- **높은 전환율:** 신뢰할 수 있는 결제 방법으로 이탈률을 줄입니다
- **원활한 결제 경험:** 부드럽고 안전한 결제 흐름을 제공합니다
- **글로벌 접근성:** PayPal은 해외 고객도 지원합니다
- **간편한 설정:** 기존 결제 워크플로우에 쉽게 통합됩니다

---

## **PayPal을 사용할 수 있는 곳**

PayPal은 다양한 결제 경험에서 작동하므로 여러 방법으로 결제를 수집할 수 있습니다.

- **웹사이트 및 퍼널:** 주문 폼을 사용하여 결제 받기
- **폼 및 설문:** 결제 수집 요소 사용
- **인보이스:** 고객이 PayPal을 통해 인보이스 결제
- **결제 링크:** PayPal이 활성화된 직접 결제 링크 공유
- **온라인 스토어:** 결제 과정에서 PayPal 제공

---

## **결제 요소에서 PayPal 활성화 방법**

### **
![PayPal 계정 연결 및 자격 증명 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069415700/original/1JfBh5Ib0BjsWrVj4V_IO_fUFwnaoSGMpA.jpeg?1776474305)
**

*이 이미지는 PayPal 계정을 연결하고 자격 증명을 입력하는 위치를 보여줍니다.*

PayPal 결제를 받기 시작하려면 결제 설정에서 PayPal 계정을 연결하세요.

- 결제 연동(Payment Integrations) 섹션으로 이동
- PayPal 선택
- Client ID와 Secret Key 입력
- 설정 저장

---

### 
![결제 요소 또는 주문 폼 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069415710/original/yXMCF6_yaeqWWRnVx_T_TwSXw6fxfVHKiQ.jpeg?1776474394)

*이 이미지는 결제 요소나 주문 폼을 추가하는 위치를 보여줍니다.*

결제 과정에서 PayPal을 활성화하려면:

- 결제를 수집하는 곳에 결제 요소를 추가
- 설정에 따라 적절한 결제 컴포넌트를 사용:

폼/설문 → **결제 수집 요소(Collect Payment element)** 사용

- 웹사이트/퍼널 → 주문 폼 요소 사용
- 결제 요소가 최신 버전으로 업데이트되어 있는지 확인

---

### **
![PayPal 버튼이 나타나는 결제 미리보기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069415761/original/uBfPP11Z_TbVU-NoJTSxVS0xhpIVF6c2EQ.jpeg?1776474740)
**

*이 이미지는 PayPal 버튼이 나타나는 결제 미리보기 화면을 보여줍니다.*

PayPal 버튼은 미리보기나 실제 사용 모드에서만 나타납니다.

- 폼, 페이지 또는 퍼널을 미리보기
- 고객에게 PayPal 옵션이 보이는지 확인

**중요:** PayPal 버튼은 편집기 화면에서는 나타나지 않습니다.

---

## **중요 사항**

- 오래된 주문 폼은 PayPal을 지원하지 않을 수 있습니다
- 업데이트 이전에 만들어진 경우, 요소를 제거하고 다시 추가해야 합니다
- PayLater 사용 가능 여부는 고객의 자격에 따라 달라집니다
- PayPal은 다른 결제 방법과 함께 작동합니다

---

## **자주 묻는 질문**

**Q: PayPal Client ID와 Secret Key는 어떻게 얻나요?**

PayPal 개발자 계정에 로그인하여 앱을 생성하면 이 자격 증명을 생성할 수 있습니다.

**Q: 고객이 PayPal과 다른 결제 방법 중에서 선택할 수 있나요?**

네, 고객은 결제 과정에서 사용 가능한 모든 결제 옵션을 볼 수 있습니다.

**Q: 편집기에서 PayPal 버튼이 보이지 않는 이유는 무엇인가요?**

PayPal 버튼은 미리보기나 실제 사용 모드에서만 나타나며, 편집기 내부에서는 표시되지 않습니다.

**Q: 기존 결제 요소를 업데이트해야 하나요?**

네, 오래된 요소는 PayPal을 지원하기 위해 업데이트하거나 다시 추가해야 합니다.

**Q: PayLater는 항상 사용 가능한가요?**

아니요, 사용 가능 여부는 고객 자격과 PayPal 조건에 따라 달라집니다.

---

## **도움이 필요하신가요?**

PayPal 활성화나 결제 요소 문제 해결에 도움이 필요하시면 고객지원에 문의하거나 결제 설정 문서를 참조하세요.

---
*원문 최종 수정: 2026년 4월 17일 오후 8시 23분*
*Hyperclass 사용 가이드 — hyperclass.ai*