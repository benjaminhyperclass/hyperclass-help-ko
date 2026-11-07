---
원문: /support/solutions/articles/48001177740-activate-saas-mode-request-payment-and-configure-phone-rebilling
번역일: 2026-11-06
카테고리: 16-SaaS-설정
---

# SaaS 모드 켜기, 결제 요청, 전화 재청구 설정

서브 계정별로 SaaS 모드를 켜고, 고객에게 결제 수단을 요청한 뒤, 전화 사용 요금을 재청구하도록 설정하는 방법을 안내해요. 에이전시 관리자가 고객에게 전화 요금을 다시 청구할 때 이 문서를 따라 하세요.

SaaS 모델을 쓰면 에이전시가 플랫폼의 기능과 도구를 고객에게 재판매할 수 있어요. 고객이 소프트웨어를 따로 설치할 필요도 없어요.

전화 재청구는 고객에게 전화 사용 요금을 자동으로 청구하는 기능이에요. 전화 시스템과 연동되어 있어요. 에이전시가 전화 시스템에 낸 요금에 배수를 곱해 고객에게 자동으로 청구해요. 시간을 아끼고 실수를 줄일 수 있고, 에이전시는 수익도 얻을 수 있어요.

---

## SaaS 모드 활성화 (결제 요청 > 전화 재청구 설정)

{% hint style="info" %}
2023년 1월 25일부터 월 $297, 연 $2970 플랜에서도 전화 재청구를 쓸 수 있어요. 단, Twilio가 아니라 하이퍼클래스 전화를 쓰는 서브 계정에서만 가능해요.
{% endhint %}

아래 영상은 **월 $497, 연 $4970 파운더 플랜** 고객의 진행 과정을 다뤄요.

시작하기 전에, 아직 Stripe 계정을 에이전시 계정에 연결하지 않았다면 먼저 연결하세요.

SaaS 모드 2단계에서는 다음 작업을 할 수 있어요.

- 특정 서브 계정에만 SaaS 모드를 켜요.
- 링크로 고객에게 신용카드를 요청하거나, Stripe 계정에 있는 기존 고객을 연결해요.
- Twilio 재청구를 설정해, 고객이 Twilio 사용 요금을 선결제하게 해요.

에이전시는 고객이 충전한 크레딧에서 수익을 얻어요.

---

## 무제한 플랜(월 297 / 연 2970)에서 전화 재청구하기

2023년 1월 25일부터, 월 297 또는 연 2970 **무제한 플랜**을 쓰는 에이전시도 고객(서브 계정)에게 전화 요금을 재청구할 수 있어요.

이 기능은 고객이 하이퍼클래스 전화를 쓰는 경우에만 작동해요. Twilio를 쓰는 경우에는 작동하지 않아요.

무제한 플랜 에이전시는 요금에 마크업을 붙일 수 없어요. 마크업 재청구는 파운더 플랜에서만 쓸 수 있어요. 대신 무제한 플랜의 서브 계정은 계속 10% 할인 혜택을 받아요. 하이퍼클래스 전화 요금이 전화번호, 미국/캐나다 SMS·통화 같은 대부분의 항목에서 이미 Twilio보다 10% 저렴하기 때문이에요. 자세한 내용은 [하이퍼클래스 전화 요금·청구 가이드](../../15-전화-시스템/lc-phone-pricing-billing-guide.md)를 참고하세요.

서브 계정에는 고객의 결제 수단을 추가하고 관리할 계정 관리자가 한 명 이상 있어야 해요. 에이전시 관리자와는 다른 역할이에요.

### 전화 재청구를 할 수 있는 서브 계정은 어떻게 확인하나요?

에이전시 화면에서 **설정 > 전화 연동**으로 이동하세요.

![전화 연동 화면에서 서브 계정별 재청구 상태 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005372571/original/l4eoQvcC4lki3QNwUDjFsvS9-jJzzbFAGw.png?1692216521)

서브 계정은 다음 세 가지 상태 중 하나예요.

1. **전화 재청구 활성화됨**: 고객에게 전화 관련 요금을 재청구하고 있어요.
2. **전화 재청구를 활성화할 수 있습니다**: 고객에게 전화 요금을 재청구하려면 **고객 관리** 페이지에서 전화 재청구를 켜세요.
3. **Phone rebilling disabled**(전화 재청구 비활성화): 이 서브 계정에서 하이퍼클래스 전화를 사용해야 전화 관련 요금을 고객에게 재청구할 수 있어요.

### 전화 재청구는 어떻게 켜나요?

1. **고객 관리** 페이지로 이동하세요. 아래 화면에서 바로 갈 수 있어요.

   ![전화 연동 화면에서 고객 관리 페이지로 이동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005372716/original/QXpMTNeeHFa5tWMxtYbPseekjVIWWPpBwg.png?1692216616)

   에이전시 왼쪽 메뉴의 **서브 계정**에서 해당 계정을 찾아 들어가도 돼요.

   ![서브 계정 목록에서 계정 찾기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279505825/original/KxIYiI_VCmna-tpUgpZSSH91ugjOTEF_wg.png?1675421148)

2. 아래로 스크롤해 **전화 시스템 재판매 설정**의 토글을 켜세요.

   ![전화 시스템 재판매 설정 토글 켜기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279506392/original/ZXstew2iZ3ySg7sFVf2BxK9mtHpJTtP9mA.png?1675421278)

3. 고객에게 **결제 수단**을 추가하도록 요청할 방법을 고르세요.

   ![결제 수단 요청 방법 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279506615/original/F0wBbHtIEUIF-u5KB9ra0FsWRYLrtS_5og.png?1675421343)

고객이 이미 Stripe 계정에 있다면 **I already have this customer in Stripe**(Stripe에 이미 있는 고객이에요)를 고르세요. 그런 다음 Stripe에 등록된 이름, 이메일, Stripe ID로 고객을 검색하면 돼요.

이제 고객은 서브 계정 화면의 **설정 > 회사 청구** 페이지에서 결제 수단을 추가할 수 있어요.

{% hint style="info" %}
에이전시 본인의 카드를 여기에 추가하면 안 돼요. 반드시 고객의 카드여야 해요.
{% endhint %}

![서브 계정의 회사 청구 페이지에서 카드 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279507415/original/ktFv9ih-M-dQOxfjOa5wV7VnSOlS1VAfXw.png?1675421513)

고객이 카드를 추가하면, **고객 관리** 영역에서 해당 고객의 재청구 옵션을 켤 수 있어요.

![고객 관리 영역에서 재청구 옵션 켜기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279507827/original/ZyyGFQpvQNhgIl4UPDx80CqVLA1OiY_ZwA.png?1675421614)

앞서 말했듯이 무제한 플랜 에이전시는 요금에 마크업을 붙일 수 없어요. 다만 Stripe 수수료를 충당하도록 기본 마크업이 1.05배(5% 마크업)로 설정되어 있어요.

![기본 마크업 1.05배 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279508062/original/ACzhbrzH5Xcs5MocCk7aEUrVJuMXY9zMQA.png?1675421683)

### 재청구는 어떻게 이루어지나요?

- 에이전시는 하이퍼클래스에서 하이퍼클래스 사용 요금을 청구받아요.
- 고객은 에이전시의 Stripe 계정에서 전화 재청구 요금을 청구받아요.

![에이전시와 고객의 청구 흐름](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279508254/original/ccs7nVyaCEXRT1JCyHfZmWWunXGIi2Rkew.png?1675421755)

### 에이전시의 사용량은 어디서 확인하나요?

에이전시 화면에서 **설정 > 청구/결제**로 이동한 뒤, 크레딧 영역의 **세부정보 보기**를 클릭하세요.

관련 문서: 하이퍼클래스 커뮤니케이션에 쓴 에이전시 지출 분석하기

### 고객은 자신의 사용량을 어디서 확인하나요?

서브 계정 화면에서 **설정 > 회사 청구**로 이동한 뒤, 크레딧 영역의 **세부정보 보기**를 클릭하세요.

![회사 청구 페이지의 크레딧 영역](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279508820/original/l4SPjIfLsBcssCOMzTDbDPIf7MpBOvGUJw.png?1675421930)

![크레딧 사용 내역 세부정보 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279508968/original/OZI_RIfl45UonFfyBJ5hgHExQKP6197OPw.png?1675421958)
