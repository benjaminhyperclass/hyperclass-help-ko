---
원문: /support/solutions/articles/48001216453-how-to-cancel-saas-sub-account-for-your-client
번역일: 2026-11-06
카테고리: 16-SaaS-설정
---

# SaaS 서브 계정 취소하기: 에이전시가 직접 취소할 때와 고객이 직접 취소할 때

SaaS가 켜진 서브 계정을 취소하는 모든 방법을 정리했어요. 에이전시가 고객의 SaaS 서브 계정을 직접 취소하는 방법과, 고객이 에이전시와 맺은 SaaS 구독을 직접 취소하도록 허용하는 방법을 다뤄요.

{% hint style="warning" %}
**서브 계정의 SaaS를 취소할 때 꼭 기억하세요**

1. 에이전시 관리자 권한의 사용자로 로그인해야 해요. 서브 계정은 에이전시 관리자만 취소할 수 있어요.
2. **설정 > SaaS**에 **Cancel SaaS**(SaaS 취소)가 보이지 않으면, **에이전시 대시보드 > 서브 계정**으로 이동하세요. 고객 타일의 점 세 개 메뉴를 클릭하고 **구독 취소**를 선택하면 돼요.
3. 그래도 버튼이 보이지 않으면 해당 서브 계정에 활성 상태의 SaaS 플랜이 있는지 확인하세요. 비활성 계정이나 체험 계정에는 취소 옵션이 나타나지 않아요.

위 내용을 모두 확인했는데도 취소할 수 없다면 하이퍼클래스 고객지원에 문의하세요.
{% endhint %}

## 에이전시가 SaaS 서브 계정을 직접 취소하기

### [1단계: SaaS 지갑 잔액 정리하기](saas-wallet-credit-management-sub-account-level.md)

고객 지갑에 무상 제공이 아닌 크레딧이 남아 있다면 Stripe에서 환불해야 해요.

지갑 크레딧이 무상 제공인지 아닌지는 서브 계정의 **설정 > 회사 청구 > 상세 보기**(거래 내역)에서 확인할 수 있어요.

{% hint style="info" %}
자세한 내용은 [SaaS 지갑 크레딧 관리](saas-wallet-credit-management-sub-account-level.md) 문서를 참고하세요.
{% endhint %}

![서브 계정의 회사 청구 화면에서 거래 내역을 확인하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048933937/original/xzJs8bQuXFcLRrINWXwPf49y7UohpaAqyg.png?1750947254)

---

### 2단계: 에이전시 화면에서 서브 계정의 SaaS 비활성화하기

에이전시 보기의 **서브 계정** 탭에서 **상세 보기**를 클릭하고, 해당 서브 계정의 **SaaS 비활성화**를 진행하세요.

![서브 계정 상세 보기에서 SaaS를 비활성화하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048932456/original/KsQf420juKKARMnRmEf2LjrBOwt9OSZLSw.png?1750946346)

고객에게 SaaS 플랜 요금을 더 이상 청구하지 않으려면 Stripe 구독을 취소하세요.

![Stripe 구독을 취소하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048934027/original/mYa8K1T3fvgB_AXmR-0r6W7eex-k19shKw.png?1750947323)

{% hint style="info" %}
SaaS를 비활성화하기 전에 거래 내역을 모두 내보내 두는 것을 권장해요. SaaS 모드를 비활성화하면 거래 내역과 지갑 내역이 모두 삭제돼요.
{% endhint %}

![거래 내역을 내보내는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048934135/original/qhgKoztfS9gHywLjCb1XhDE-v-gYwhIIGA.png?1750947418)

---

### 3단계: Twilio / Mailgun 서브 계정 닫기 (에이전시를 떠나는 고객만)

서브 계정에서 Twilio 또는 이메일(Mailgun)의 재청구(Rebilling)가 켜져 있는 상태로 SaaS를 비활성화하면, 해당 Twilio / Mailgun 서브 계정이 **에이전시 설정 > Twilio / Mailgun**에 계속 연결되어 있어요. 이 연결을 삭제하고 Twilio / Mailgun 서브 계정도 닫았는지 확인하세요.

---

### 4단계: 팀 관리에서 사용자 제거하기 또는 서브 계정 삭제하기 (에이전시를 떠나는 고객만)

고객 데이터를 어떻게 할지에 따라 방법이 달라요.

1. 고객을 제거한 뒤에도 데이터를 보관하려면, **에이전시 설정 > 팀**으로 이동해 해당 고객의 사용자를 제거하세요.
2. 데이터를 보관하지 않으려면, **서브 계정 > 상세 보기**로 이동해 서브 계정을 삭제하세요.

   ![서브 계정을 삭제하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48231582189/original/UNt-o4efJOfgcS8C_GZxKH-ffa-PJV6YAQ.png?1654802197)

---

## 고객이 직접 구독을 취소하도록 허용하기

SaaS 에이전시는 SaaS 고객이 직접 구독을 취소할 수 있게 허용할 수 있어요. 이 기능은 기본적으로 꺼져 있어요. 취소 요청을 직접 받아 보고 고객을 붙잡을 기회를 갖는 것이 이탈을 막는 데 중요하다고 보기 때문이에요. 다만 사용할지는 에이전시가 결정해요. 에이전시는 **SaaS 구성기**에서 이 기능을 켤 수 있어요.

![SaaS 구성기에서 구독 취소 허용 설정을 켜는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283853058/original/EXydpUSYh0jRtPZZbCAuKJDLeV7gfPi9XQ.png?1677443608)

**Allow clients(sub-accounts) to cancel their subscriptions**(클라이언트(서브 계정)의 구독 취소 허용) 체크박스를 선택한 다음 **변경사항 저장** 버튼을 클릭하세요.

{% hint style="info" %}
이 설정은 앞으로 SaaS 구성기로 만드는 모든 SaaS 계정에 적용돼요.
{% endhint %}

고객별로도 이 기능을 설정할 수 있어요. 에이전시 사이드바에서 **서브 계정**으로 이동해 해당 고객을 찾은 뒤, 고객 이름이나 **고객 관리**를 클릭하세요.

[![고객 목록에서 고객 관리로 이동하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283853129/original/9AoVO1tjSy3tZiO9T9Pdp86r-psvGgEm1w.png?1677443737)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283851954/original/-B4BSvLsb6RMYvd1AhFHMdIAMamU3AE2sQ.png?1677441616)

![고객별 구독 취소 허용 체크박스 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283853190/original/M-C0JVaU2t_c5FRe7gKQpklWP0fPeVMpvw.png?1677443880)

**Allow client (sub-account) to cancel their subscription**(클라이언트(서브 계정)의 구독 취소 허용) 체크박스를 선택하면 해당 고객이 구독을 취소할 수 있어요. 이 설정은 이 서브 계정에만 적용돼요. 앞으로 SaaS 구성기로 만드는 모든 SaaS 계정에는 적용되지 않아요.

체크박스를 선택하면 고객의 **설정 > 회사 청구**에서 구독 상세 정보 아래에 **Modify Subscription**(구독 수정) 버튼이 나타나요.

![고객의 회사 청구 화면에 나타난 구독 수정 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283853315/original/XhaDmc3F2wJFinQXHzHkr0lUWg6QYkcc3A.png?1677444056)

![구독 수정 화면의 취소 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283853362/original/YJmN1TCM39ZEymD3Akcdm7YOMPCg3iRQrg.png?1677444178)

고객이 **취소**를 클릭하면 다음과 같은 확인 팝업이 나타나요.

![구독 취소 확인 팝업](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283853420/original/opynSJ-8czUIdkHnfv9bGxrEInEgSnr9Mw.png?1677444302)

고객이 **취소 확인**을 클릭하면 다음 메시지가 나타나요.

![구독 취소 완료 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283853447/original/rIoJvvzOmyRrCwitB3eV11oDYl1Au0pxAA.png?1677444384)

취소된 계정에 접속하려고 하면 계정을 다시 활성화할 때까지 다음 메시지가 나타나요.

![취소된 계정에 접속할 때 나타나는 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283853919/original/HKf8Gd1WlX6sp90-psZrQeHnPyevgbAcuw.png?1677445552)

구독을 취소한 고객은 **Reactivate**(재활성화) 버튼을 클릭해 서브 계정을 다시 활성화할 수 있어요. 필요하면 결제 수단도 바꿀 수 있어요.

고객의 계정이 잘못 잠긴 경우에는 **회사 설정**에 등록된 에이전시 이메일로 에이전시에 문의할 수 있어요.

---

## 자주 묻는 질문

### 고객이 구독을 취소하면 서브 계정이 자동으로 일시 중지되나요?

SaaS 구성기의 다음 설정에 따라 달라요. 그래서 에이전시가 원하는 방식으로 정할 수 있어요.

![SaaS 구성기에서 구독 취소 시 계정 동작을 정하는 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283853515/original/QQ9keW23Oy_rRKGHbuO_HpxhA9uwj1eguQ.png?1677444558)

### 고객이 취소하면 Stripe의 구독은 어떻게 되나요?

Stripe 쪽 구독도 함께 종료돼요.

### 고객에게 남은 크레딧이 있으면 어떻게 되나요?

고객 계정에 남은 잔액이나 크레딧은 소멸돼요.
