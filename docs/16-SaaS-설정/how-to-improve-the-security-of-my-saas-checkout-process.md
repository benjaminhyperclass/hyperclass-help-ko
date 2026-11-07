---
원문: /support/solutions/articles/155000001180-how-to-improve-the-security-of-my-saas-checkout-process
번역일: 2026-11-06
카테고리: 16-SaaS-설정
---

# SaaS 체크아웃 보안 강화하기

SaaS 결제(체크아웃) 과정의 보안을 높이는 여러 가지 방법을 안내해요. 피싱 사기범이 가입해 SaaS 서브 계정을 악용하는 일을 막는 데 도움이 돼요. 이 문서의 설정은 SaaS를 판매하는 에이전시 관리자를 위한 내용이에요.

## 1단계 - 퍼널/웹사이트 v2 사용하기

SaaS 판매에 하이퍼클래스 퍼널과 웹사이트를 쓰고 있다면 v2 퍼널과 웹사이트로 바꾸는 것이 좋아요. v2는 Stripe 기본 연동과 3D Secure 기술을 지원해서 더 안전하게 결제할 수 있어요.

![퍼널/웹사이트 v2 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009989986/original/_3ABLUhxhsHSRmn_uyvJh3NgctFb4XF_QQ.png?1697131516)

## 2단계 - 체험 기간에 사용자 지정 인증 추가하기

체험 기간이 있는 SaaS 상품에 인증 금액을 설정하면, 잔액이 충분한 실제 신용카드만 가입 과정을 통과할 수 있어요. 가장 확실한 방법이에요.

판매 퍼널에서 **상품 > 추가 옵션 > 사용자 지정 인증**으로 이동해 인증 금액을 입력하세요.

![상품의 추가 옵션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009990802/original/uVeQroA0MV1fGH7NAp6iH5__P7uEehqo-g.png?1697132231)

![사용자 지정 인증 금액 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009990853/original/4nBOm8fAGyQ34wEgXSws_RD6TYHjsIzESw.png?1697132271)

**사용자 지정 인증**은 SaaS 상품에 체험 기간이 있을 때 특히 유용해요. 결제 의도(payment intent)를 만들어 카드가 실제 카드인지, 잔액이 충분한지 확인할 뿐이에요. 고객에게는 요금이 청구되지 않으며, 결제는 바로 환불돼요.

{% hint style="info" %}
- **사용자 지정 인증**은 고객에게 요금을 청구하지 않아요. 결제 의도를 만들고 바로 환불해요.
- 인증 금액은 가장 기본 요금제의 월 요금과 같게 설정하는 것을 권장해요.
{% endhint %}

## 3단계 - 하이퍼클래스 전화와 하이퍼클래스 이메일 사용하기

SaaS 에이전시가 Twilio나 Mailgun을 쓰면 재청구가 늦어져서 위험할 수 있어요. 서브 계정 크레딧이 차감되기 전에 사기범 같은 악의적인 사용자가 Twilio와 Mailgun 사용량을 크게 쌓을 수 있기 때문이에요. 이런 지연은 Twilio나 Mailgun에서 받는 사용 기록과 웹훅이 늦게 도착해서 생겨요.

하이퍼클래스 전화와 하이퍼클래스 이메일을 쓰면 이런 지연을 막을 수 있어요. 아래와 같은 추가 보안 기능도 쓸 수 있어요.

1. SMS, 이메일, 음성 메일 드롭 등의 단계적 사용량 확대(램프업)
2. 서브 계정별 최대 발송 한도
3. 오류율, 구독 취소율, 불만 접수율 모니터링

- [하이퍼클래스 이메일 램프업](../09-이메일/what-is-lc-email.md)
- [하이퍼클래스 전화 램프업](../15-전화-시스템/메시징/lc-phone-messaging-policy.md)
- [하이퍼클래스 이메일 오류 기준 및 발송 한도](../09-이메일/what-is-lc-email.md)
- [하이퍼클래스 전화 오류 기준](../15-전화-시스템/메시징/lc-phone-messaging-policy.md)
- 하이퍼클래스 이메일 인증

이 기술은 모두 백그라운드에서 작동해요. 악의적인 사용자가 SaaS 서브 계정을 악용할 가능성을 줄여 줘요.

하이퍼클래스 전화와 하이퍼클래스 이메일로 옮기는 일은 생각보다 어렵지 않아요. 아래 문서를 참고하세요.

- 하이퍼클래스 전화로 에이전시와 서브 계정을 이전하려면 어떻게 하나요?
- 에이전시를 하이퍼클래스 이메일로 이전하려면 어떻게 하나요?

## 4단계 - 전화번호와 이메일 검증을 기본으로 켜기

전화번호와 이메일 검증을 켜 두면 앞으로 들어오는 SaaS 가입의 보안을 높일 수 있어요.

- 이메일 검증은 모든 SaaS 가입에 기본으로 필수예요.
- 앞으로의 SaaS 가입에 전화번호 검증을 켜려면 에이전시 계정에서 왼쪽 메뉴의 **SaaS 구성기 > 보안 설정**으로 이동해, **Verify Phone Number using a security code during sign-up**(가입 시 보안 코드로 전화번호 인증) 토글을 켜세요.
- 기존 서브 계정 전체에 이메일 검증을 켜려면 에이전시 계정에서 왼쪽 메뉴의 **설정 > 이메일 서비스 > 서브 계정 설정**으로 이동해, **Enable Email Verification for all sub-accounts**(모든 서브 계정에 이메일 검증 켜기)를 선택하세요.

## 5단계 - Stripe Radar 사용하기

Stripe Radar는 Stripe 결제 플랫폼에 들어 있는 사기 방지 도구예요. 전 세계의 방대한 데이터로 학습한 머신러닝 알고리즘으로 사기 거래를 찾아내고 막아 줘요. 특정 조건에 따라 거래를 처리하는 사용자 지정 규칙을 만들 수 있고, 의심스러운 활동에 대한 자세한 정보도 볼 수 있어요.

위험도가 높은 결제에는 추가 인증을 자동으로 요청하는 적응형 승인 기능도 있고, 직접 검토할 수 있는 검토 대시보드도 있어요. Stripe에 기본으로 연동되어 있어서 온라인 거래 보안을 간편하게 관리할 수 있고, 별도의 외부 도구가 덜 필요해요.

{% hint style="info" %}
Stripe Radar는 Stripe의 유료 상품이지만, SaaS 에이전시에는 적극 권장해요.
{% endhint %}

[Stripe Radar](https://stripe.com/en-ca/radar)

Stripe 계정에 로그인한 뒤 **Dashboard > More > Radar for Fraud Teams**로 이동하세요.

![Stripe의 Radar for Fraud Teams 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009992667/original/ybHmh8pg5Q_5Tble9_IzDd5idyaHqPzFig.png?1697134292)

### 추천하는 규칙

Radar의 **Rules**(규칙) 탭에서 규칙을 추가할 수 있어요.

#### 3D Secure 인증 규칙

3D Secure 인증이 완료되면 결제가 진행되도록 하는 규칙이에요.

![3D Secure 인증 규칙 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009993558/original/c8R63SyPyTXmuKg5_-C5FW2Jh8O_Q5GU4Q.png?1697135590)

#### 차단 규칙

결제를 아예 차단하는 규칙이에요.

![차단 규칙 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009993599/original/IdCkpkdV5fOsCS9SX-bkKuIsigezFG8tcQ.png?1697135673)

#### 검토 규칙

결제는 진행되지만, 사람이 검토하고 승인해야 최종적으로 성공 처리되는 규칙이에요.

![검토 규칙 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009993645/original/MNqV767sNLtdLYKxH3bHERszWOl4Lz1WcA.png?1697135770)

검토 대기 중인 결제는 Radar의 **Reviews**(검토) 탭에서 모두 볼 수 있어요. 화면은 아래와 같아요.

![Radar의 검토 탭 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009993689/original/4kNj3tNRcl9hP5jwtqECh2cBCN0LgpkrMA.png?1697135899)

에이전시 관리자나 소유자는 이 결제를 직접 승인하거나 환불할 수 있어요.

---

## 자주 묻는 질문

### 위 단계를 모두 따랐는데도 사기범이 가입했어요. 어떻게 해야 하나요?

위에서 소개한 규칙은 모두 모범 사례예요. 대부분의 경우 SaaS 서브 계정이 악용되는 것을 막아 주지만, 드물게 악의적인 사용자가 통과할 수도 있어요.

이럴 때는 사기 결제를 모두 환불하고, **사기**로 따로 표시하는 것이 가장 좋아요.

![결제 환불 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009994016/original/NuNsREtKzjWvqpGbTsTRt6xU7gIZC4hXrQ.png?1697136361)

![환불 사유로 사기를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009994056/original/1DGpk1rEatstJp4RhI8TWSsI--PmCXzYDQ.png?1697136456)

{% hint style="warning" %}
결제를 환불할 때 **사기**를 선택하세요. 매우 중요해요.
{% endhint %}

결제를 환불하고 사기로 표시하면 Stripe Radar가 시간이 지날수록 더 똑똑해져서 더 많은 사기를 막을 수 있어요.

다음 작업이 자동으로 이루어져요.

- 카드 지문(fingerprint)이 차단 목록에 추가돼요.
- 이메일 주소가 차단 목록에 추가돼요.
- IP, 이메일, 카드 번호 등 여러 신호가 Stripe에 전달돼서 시간이 지날수록 정확도가 높아져요.

### 퍼널/웹사이트 v2는 무엇이고, 보안에 어떻게 도움이 되나요?

퍼널/웹사이트 v2는 하이퍼클래스 퍼널과 웹사이트의 업그레이드 버전이에요. Stripe 기본 연동과 3D Secure 기술을 지원해서 SaaS 체크아웃의 보안이 크게 좋아져요.

### 사용자 지정 인증은 무엇이고 어떻게 작동하나요?

**사용자 지정 인증**은 체험 기간이 있는 SaaS 상품에 인증 금액을 추가하는 기능이에요. 잔액이 충분한 실제 신용카드만 가입할 수 있게 해 줘요. 고객에게는 요금이 청구되지 않아요. 카드가 진짜인지 확인하기 위해 결제 의도를 만들고, 바로 환불해요.

### Twilio나 Mailgun 대신 하이퍼클래스 전화와 하이퍼클래스 이메일을 써야 하는 이유가 뭔가요?

Twilio나 Mailgun은 재청구가 늦어져서 위험할 수 있고, 사기범이 이 점을 악용할 수 있어요. 하이퍼클래스 전화와 하이퍼클래스 이메일은 이런 지연을 막아 주고, 단계적 사용량 확대, 발송 한도, 오류율 모니터링 같은 추가 보안 기능도 제공해요.

### SaaS 가입에 전화번호와 이메일 검증을 켜려면 어떻게 하나요?

에이전시 계정의 설정에서 켤 수 있어요. 전화번호 검증은 **설정 > 전화 연동**으로, 이메일 검증은 **설정 > 이메일 서비스**로 이동하세요.

### Stripe Radar는 무엇이고, 사기 방지에 어떻게 도움이 되나요?

Stripe Radar는 Stripe 결제 플랫폼에 들어 있는 사기 방지 도구예요. 머신러닝 알고리즘으로 사기 거래를 찾아내고 막아 줘요. 거래에 대한 사용자 지정 규칙을 만들 수 있고, 의심스러운 활동에 대한 정보도 제공해요.

### Stripe Radar에서 거래 처리 규칙을 설정하려면 어떻게 하나요?

Stripe 계정의 **Rules** 탭에서 Radar 규칙을 추가할 수 있어요. 규칙에는 3D Secure 인증 규칙, 차단 규칙, 검토 규칙이 있어요. 이 규칙으로 거래를 어떻게 처리할지 정해요.

### Stripe Radar에서 의심 결제로 표시된 건은 어떻게 처리하나요?

Stripe Radar에서 의심 결제로 표시된 건은 직접 검토할 수 있어요. 에이전시 관리자나 소유자는 검토 결과에 따라 이 결제를 승인하거나 환불할 수 있어요.
