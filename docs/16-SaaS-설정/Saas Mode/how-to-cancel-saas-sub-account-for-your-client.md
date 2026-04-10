---

번역일: 2026-04-08
카테고리: 16-SaaS-설정 > Saas Mode
---

# 고객의 SaaS 하위 계정 해지하는 방법

이 아티클은 SaaS가 활성화된 하위 계정의 모든 해지 절차에 대한 완전한 가이드입니다. 고객의 SaaS 하위 계정을 해지하는 방법과 고객이 직접 에이전시의 SaaS 구독을 해지할 수 있도록 허용하는 방법을 포함하고 있습니다.

**중요**: 하위 계정의 SaaS를 해지할 때 기억해야 할 핵심 사항:

1. 에이전시 레벨(관리자) 사용자로 로그인해야 합니다. 하위 계정은 에이전시 관리자만 해지할 수 있습니다.
2. Settings(설정) → SaaS에서 "Cancel SaaS"가 보이지 않으면, Agency Dashboard(에이전시 대시보드) → Sub-accounts(하위 계정)으로 이동하여 해당 고객 타일의 점 3개 메뉴를 클릭하고 "Cancel Subscription"을 선택하세요.
3. 버튼이 여전히 보이지 않으면, 해당 하위 계정에 활성 SaaS 플랜이 있는지 확인하세요. 비활성 계정이나 체험 계정에는 해지 옵션이 표시되지 않습니다.

위 사항을 확인해도 여전히 해지할 수 없다면, HighLevel 지원팀에 문의해 주세요.

---

**목차**

- [직접 SaaS 활성화 하위 계정을 해지하는 방법](#직접-saas-활성화-하위-계정을-해지하는-방법)
  - [1단계: SaaS 지갑 잔액 정리](#1단계-saas-지갑-잔액-정리)
  - [2단계: 에이전시 뷰에서 하위 계정의 SaaS 비활성화](#2단계-에이전시-뷰에서-하위-계정의-saas-비활성화)
  - [3단계: Twilio / Mailgun 하위 계정 종료 - 에이전시를 떠나는 고객용](#3단계-twilio--mailgun-하위-계정-종료---에이전시를-떠나는-고객용)
  - [4단계: 팀 관리에서 사용자 제거 / 하위 계정 삭제 - 에이전시를 떠나는 고객용](#4단계-팀-관리에서-사용자-제거--하위-계정-삭제---에이전시를-떠나는-고객용)
- [고객이 직접 구독을 해지할 수 있게 하는 방법](#고객이-직접-구독을-해지할-수-있게-하는-방법)
- [FAQ](#faq)

---

## 직접 SaaS 활성화 하위 계정을 해지하는 방법

### 1단계: SaaS 지갑 잔액 정리

고객의 지갑에 무료가 아닌 크레딧이 있다면, 해당 크레딧을 Stripe에서 환불해야 합니다.

지갑 크레딧이 무료인지 유료인지는 하위 계정 설정 > Company Billing(회사 청구) > See Details(세부 정보 보기) (Transaction History(거래 내역))에서 확인할 수 있습니다.

자세한 내용은 이 아티클을 참고하세요: [SaaS 지갑 크레딧 관리](saas-wallet-credit-management.md)

![SaaS 지갑 잔액 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048933937/original/xzJs8bQuXFcLRrINWXwPf49y7UohpaAqyg.png?1750947254)

### 2단계: 에이전시 뷰에서 하위 계정의 SaaS 비활성화

Agency view(에이전시 뷰) > Accounts(계정) 탭 > View Details(세부 정보 보기)로 이동하여 해당 하위 계정의 SaaS를 비활성화하세요:

![하위 계정 SaaS 비활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048932456/original/KsQf420juKKARMnRmEf2LjrBOwt9OSZLSw.png?1750946346)

더 이상 고객에게 SaaS 플랜 요금을 청구하지 않으려면 Stripe 구독을 해지하세요:

![Stripe 구독 해지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048934027/original/mYa8K1T3fvgB_AXmR-0r6W7eex-k19shKw.png?1750947323)

참고: SaaS를 비활성화하기 전에 모든 거래 내역을 내보내기하는 것을 권장합니다. SaaS 모드가 비활성화되면 모든 거래/지갑 이력이 삭제되기 때문입니다.

![거래 내역 내보내기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048934135/original/qhgKoztfS9gHywLjCb1XhDE-v-gYwhIIGA.png?1750947418)

### 3단계: Twilio / Mailgun 하위 계정 종료 - 에이전시를 떠나는 고객용

하위 계정에 Twilio나 이메일(Mailgun) 재청구가 활성화되어 있는 경우, SaaS를 비활성화한 후에도 해당 Twilio / Mailgun 하위 계정이 Agency Settings(에이전시 설정) > Twilio / Mailgun에서 여전히 연결되어 있습니다. 이러한 연결을 삭제하고 하위 계정을 종료했는지 확인하세요.

### 4단계: 팀 관리에서 사용자 제거 / 하위 계정 삭제 - 에이전시를 떠나는 고객용

이 단계는 선택에 따라 다릅니다.

- 고객을 제거한 후에도 데이터를 보관하고 싶다면, Agency Settings(에이전시 설정) > Team(팀)으로 이동하여 고객의 사용자를 제거하세요.
- 데이터를 보관하지 않으려면, Accounts(계정) > View Details(세부 정보 보기)로 이동하여 하위 계정을 삭제하세요.

![하위 계정 삭제](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48231582189/original/UNt-o4efJOfgcS8C_GZxKH-ffa-PJV6YAQ.png?1654802197)

---

## 고객이 직접 구독을 해지할 수 있게 하는 방법

SaaS 에이전시는 이제 SaaS 고객이 직접 구독을 해지할 수 있도록 허용할 수 있습니다. **이 기능은 기본적으로 비활성화되어 있습니다. 해지 요청을 받고 SaaS 고객을 붙잡을 수 있는 기회를 얻는 것이 이탈 방지에 필수적이라고 생각하기 때문입니다.** 하지만 그럼에도 불구하고 결정권은 이제 에이전시에 있습니다! 에이전시는 SaaS 설정도구로 이동하여 이 기능을 활성화할 수 있습니다.

![고객 해지 허용 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283853058/original/EXydpUSYh0jRtPZZbCAuKJDLeV7gfPi9XQ.png?1677443608)

"Allow clients(sub-accounts) to cancel their subscriptions" 체크박스를 선택하고 Save Changes(변경사항 저장) 버튼을 클릭하세요.

**참고:**

이 설정은 앞으로 SaaS 설정도구를 사용하여 생성될 모든 SAAS 계정에 적용됩니다.

이 기능은 **Agency Sidebar(에이전시 사이드바) > Sub-Accounts(하위 계정) > 특정 고객으로 스크롤 > 이름 클릭 또는 Manage Client(고객 관리) 클릭**을 통해 고객별로도 제어할 수 있습니다:

![고객별 해지 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283853129/original/9AoVO1tjSy3tZiO9T9Pdp86r-psvGgEm1w.png?1677443737)

![고객별 해지 설정 상세](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283853190/original/M-C0JVaU2t_c5FRe7gKQpklWP0fPeVMpvw.png?1677443880)

"Allow client (sub-account) to cancel their subscription" 체크박스를 선택하면, 고객이 구독을 해지할 수 있게 됩니다. 이 설정은 해당 하위 계정에만 적용되며, 앞으로 SaaS 설정도구를 사용하여 생성되는 모든 SAAS 계정에는 적용되지 않습니다. 이 체크박스를 선택하면, 고객은 **Settings(설정) > Company Billing(회사 청구)**에서 구독 상세 정보 아래에 Modify Subscription(구독 수정) 버튼을 볼 수 있습니다:

![구독 수정 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283853315/original/XhaDmc3F2wJFinQXHzHkr0lUWg6QYkcc3A.png?1677444056)

![구독 해지 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283853362/original/YJmN1TCM39ZEymD3Akcdm7YOMPCg3iRQrg.png?1677444178)

Cancel(해지)을 클릭하면, 고객에게 다음과 같은 확인 팝업이 표시됩니다:

![해지 확인 팝업](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283853420/original/opynSJ-8czUIdkHnfv9bGxrEInEgSnr9Mw.png?1677444302)

Confirm Cancellation(해지 확인)을 클릭하면, 다음 메시지를 볼 수 있습니다:

![해지 완료 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283853447/original/rIoJvvzOmyRrCwitB3eV11oDYl1Au0pxAA.png?1677444384)

해지된 계정에 접속하려고 하면 재활성화할 때까지 다음 메시지가 표시됩니다:

![계정 비활성화 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283853919/original/HKf8Gd1WlX6sp90-psZrQeHnPyevgbAcuw.png?1677445552)

고객이 구독을 해지한 경우, 재활성화 버튼을 클릭하여 하위 계정을 재활성화할 수 있습니다. 또한 필요한 경우 결제 방법을 변경할 수 있는 옵션도 제공됩니다.

고객이 실수로 계정에 접근할 수 없게 된 경우, 회사 설정의 에이전시 이메일을 통해 연락할 수도 있습니다.

---

## FAQ

### 고객이 해지하면 자동으로 하위 계정이 일시정지되나요?

이 동작은 SaaS 설정도구의 다음 설정에 따라 달라집니다:

따라서 에이전시는 자신에게 맞는 동작을 결정할 수 있습니다.

![SaaS 설정도구 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283853515/original/QQ9keW23Oy_rRKGHbuO_HpxhA9uwj1eguQ.png?1677444558)

### 고객이 해지하면 Stripe에서 고객 구독은 어떻게 되나요?

Stripe 측에서도 구독이 종료됩니다.

### 고객에게 남은 크레딧이 있으면 어떻게 되나요?

고객 계정의 남은 잔액이나 크레딧은 모두 소멸됩니다.

---
*원문 최종 수정: Fri, 27 Jun, 2025 at 3:52 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*