---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# SaaS 모드 활성화, 결제 요청 및 전화 재청구 설정

SaaS 모델을 통해 에이전시는 플랫폼의 기능과 도구를 고객에게 재판매할 수 있으며, 로컬 소프트웨어 설치가 필요 없습니다.

전화 재청구(Phone Rebilling)는 비즈니스가 고객의 전화 사용량에 대한 청구 프로세스를 자동화할 수 있는 기능입니다. 이 기능은 전화 시스템과 연동되어 에이전시가 전화 시스템에 지불한 요금에 배수를 적용한 후 고객에게 자동으로 청구하므로, 시간을 절약하고 오류를 줄이며 에이전시에게 수익을 제공합니다.

#### 이 가이드에서 다루는 내용

#### [SaaS 모드 활성화 (결제 요청>>전화 재청구 설정)](#saas-모드-활성화-결제-요청전화-재청구-설정))

#### [프리랜서 플랜에서 전화 재청구 (월 $297 & 연 $2,970)](#프리랜서-플랜에서-전화-재청구-월-297--연-2970))

#### [어떤 하위 계정이 전화 사용량 재청구 대상인지 어떻게 알 수 있나요?](#어떤-하위-계정이-전화-사용량-재청구-대상인지-어떻게-알-수-있나요)

#### [전화 재청구는 어떻게 활성화하나요?](#전화-재청구는-어떻게-활성화하나요)

#### [재청구는 어떻게 작동하나요?](#재청구는-어떻게-작동하나요)

#### [에이전시 사용량은 어떻게 확인하나요?](#에이전시-사용량은-어떻게-확인하나요)

#### [고객이 사용량을 확인하는 방법은?](#고객이-사용량을-확인하는-방법은)

## SaaS 모드 활성화 (결제 요청>>전화 재청구 설정)

**알아두세요**

2023년 1월 25일부터 월 $297 및 연 $2,970 플랜에서도 전화 재청구가 가능합니다! 단, Twilio가 아닌 LeadConnector Phone을 사용하는 하위 계정에만 해당합니다.

이 영상은 월 $497 및 연 $4,970 Pro 플랜 고객을 위한 프로세스를 다룹니다.

이 튜토리얼을 시작하기 전에 아직 연결하지 않았다면 Stripe 계정을 에이전시 계정에 연결해주세요.

SaaS 모드 2단계를 통해 특정 하위 계정에 대해 SaaS 모드를 활성화하고, 링크를 통해 고객에게 신용카드를 요청하거나 Stripe 계정의 기존 고객을 연결하고, Twilio 재청구를 설정하여 고객이 Twilio 사용량을 선불로 지불할 수 있습니다. 고객의 크레딧에서 수익을 창출합니다.

## 프리랜서 플랜에서 전화 재청구 (월 $297 & 연 $2,970)

2023년 1월 25일부터 프리랜서 플랜(즉, 에이전시 무제한 플랜, 월 $297 또는 연 $2,970)의 에이전시는 전화 비용을 고객(하위 계정)에게 재청구할 수 있습니다.

이는 고객이 LC Phone을 사용하는 경우에만 작동합니다(Twilio 제외). [여기를 클릭](how-do-i-migrate-my-agency-and-sub-account-over-to-lc-phone-.md)하여 계정을 LeadConnector Phone 시스템으로 이전하는 방법을 알아보세요.

프리랜서 플랜의 에이전시는 비용을 마크업할 수 없습니다. 마크업 재청구는 Pro 플랜에서만 가능합니다. 하지만 프리랜서 플랜 하위 계정은 [LC Phone 요금이 이미 전화번호, 미국/캐나다 SMS 및 통화 등 대부분 카테고리에서 Twilio보다 10% 저렴하기](https://help.gohlighlevel.com/support/solutions/articles/48001223556) 때문에 10% 할인 혜택을 계속 받을 수 있습니다.

하위 계정에는 고객의 결제 방법을 추가/관리할 수 있는 계정 관리자(에이전시 관리자와 혼동하지 마세요)가 최소 한 명은 있어야 합니다.

### 어떤 하위 계정이 전화 사용량 재청구 대상인지 어떻게 알 수 있나요?

에이전시 레벨 → Settings(설정) → Phone Integration(전화 연동)으로 이동하세요.

![전화 연동 설정 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005372571/original/l4eoQvcC4lki3QNwUDjFsvS9-jJzzbFAGw.png?1692216521)

하위 계정은 다음 조건 중 하나에 해당할 수 있습니다:

- 전화 재청구 활성화됨 - 고객에게 전화 관련 비용을 재청구하고 있습니다
- 전화 재청구 활성화 가능 - 고객에게 전화 비용을 재청구하려면 고객 관리 페이지로 가서 전화 재청구를 켜세요
- 전화 재청구 비활성화됨 - 이 하위 계정에서 LeadConnector Phone을 사용하여 고객에게 전화 관련 비용을 재청구하세요

### 전화 재청구는 어떻게 활성화하나요?

여기에서 고객 관리 페이지로 이동할 수 있습니다:

![고객 관리 페이지 이동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005372716/original/QXpMTNeeHFa5tWMxtYbPseekjVIWWPpBwg.png?1692216616)

또는 에이전시 사이드바 → Sub-Accounts(하위 계정) → 계정으로 스크롤:

![하위 계정 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279505825/original/KxIYiI_VCmna-tpUgpZSSH91ugjOTEF_wg.png?1675421148)

Phone System Resell Settings(전화 시스템 재판매 설정)으로 스크롤하여 이 토글을 활성화하세요:

![전화 시스템 재판매 설정 토글](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279506392/original/ZXstew2iZ3ySg7sFVf2BxK9mtHpJTtP9mA.png?1675421278)

그러면 고객에게 결제 방법 추가를 요청할 방법을 묻습니다:

![결제 방법 요청 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279506615/original/F0wBbHtIEUIF-u5KB9ra0FsWRYLrtS_5og.png?1675421343)

고객이 이미 Stripe 계정에 존재하는 경우, "I already have this customer in Stripe(이 고객이 이미 Stripe에 있음)"을 선택하고 Stripe에 등록된 이름, 이메일 또는 Stripe ID로 검색할 수 있습니다.

이제 고객은 하위 계정 레벨 → Settings(설정) → Company Billing(회사 청구) 페이지에서 결제 방법을 추가할 수 있습니다.

**알아두세요**

에이전시는 여기에 자신의 카드를 추가하면 안 됩니다. 고객의 카드여야 합니다.

![회사 청구 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279507415/original/ktFv9ih-M-dQOxfjOa5wV7VnSOlS1VAfXw.png?1675421513)

고객이 카드를 추가하면 고객 관리 영역에서 재청구 옵션을 활성화할 수 있습니다.

![재청구 옵션 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279507827/original/ZyyGFQpvQNhgIl4UPDx80CqVLA1OiY_ZwA.png?1675421614)

위에서 언급했듯이 프리랜서 플랜 에이전시에서는 이러한 요금을 마크업할 수 없습니다. Stripe 수수료를 충당하기 위해 기본 마크업이 1.05배(즉, 5% 마크업)로 설정되어 있습니다.

![기본 마크업 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279508062/original/ACzhbrzH5Xcs5MocCk7aEUrVJuMXY9zMQA.png?1675421683)

### 재청구는 어떻게 작동하나요?

에이전시인 당신은 CRM에서 LC 사용량에 대한 청구를 받습니다.

고객은 전화 재청구에 대해 당신의 Stripe 계정에서 청구를 받습니다.

![재청구 작동 방식](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279508254/original/ccs7nVyaCEXRT1JCyHfZmWWunXGIi2Rkew.png?1675421755)

### 에이전시 사용량은 어떻게 확인하나요?

에이전시 레벨 → Settings(설정) → Billing(청구)로 이동하여 크레딧 섹션에서 "See Details(세부 내용 보기)"를 클릭하세요.

[에이전시의 LC 커뮤니케이션 지출을 분석하는 방법은?](how-to-analyze-an-agency-s-spending-on-lc-communications.md)

### 고객이 사용량을 확인하는 방법은?

하위 계정 레벨 → Settings(설정) → Company Billing(회사 청구)로 이동하여 크레딧 섹션에서 "See Details(세부 내용 보기)"를 클릭하세요.

![고객 사용량 확인 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279508820/original/l4SPjIfLsBcssCOMzTDbDPIf7MpBOvGUJw.png?1675421930)

![고객 사용량 확인 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279508968/original/OZI_RIfl45UonFfyBJ5hgHExQKP6197OPw.png?1675421958)

---
*원문 최종 수정: Wed, 16 Aug, 2023 at 3:13 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*