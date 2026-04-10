---

번역일: 2026-04-08
카테고리: 16-SaaS-설정 > Saas Mode
---

# SaaS 모드 활성화, 결제 요청 및 전화 재청구 설정

SaaS 모델을 통해 에이전시는 플랫폼의 기능과 도구를 고객에게 재판매할 수 있으며, 로컬 소프트웨어 설치가 필요하지 않습니다.

전화 재청구(Phone Rebilling)는 비즈니스가 고객의 전화 사용료를 자동으로 청구하는 과정을 자동화할 수 있는 기능입니다. 이 기능은 전화 시스템과 연동되어 에이전시가 전화 시스템에 지불한 요금에 수수료를 적용한 후 고객에게 자동으로 청구하므로, 시간을 절약하고 오류를 줄이며 에이전시에게 수익을 제공합니다.

## 이 글에서 다루는 내용

#### [SaaS 모드 활성화 (결제 요청 >> 전화 재청구 설정)](#saas-모드-활성화-결제-요청--전화-재청구-설정))

#### [프리랜서 플랜에서의 전화 재청구 (월 $297 & 연 $2970)](#프리랜서-플랜에서의-전화-재청구-월-297--연-2970))

#### [어떤 하위 계정이 전화 사용료를 재청구할 수 있는지 어떻게 알 수 있나요?](#어떤-하위-계정이-전화-사용료를-재청구할-수-있는지-어떻게-알-수-있나요)

#### [전화 재청구를 어떻게 활성화하나요?](#전화-재청구를-어떻게-활성화하나요)

#### [재청구는 어떻게 작동하나요?](#재청구는-어떻게-작동하나요)

#### [에이전시 사용량을 어떻게 확인할 수 있나요?](#에이전시-사용량을-어떻게-확인할-수-있나요)

#### [고객이 자신의 사용량을 어떻게 확인할 수 있나요?](#고객이-자신의-사용량을-어떻게-확인할-수-있나요)

## SaaS 모드 활성화 (결제 요청 >> 전화 재청구 설정)

**참고사항**

2023년 1월 25일부터 전화 재청구가 월 $297 및 연 $2970 플랜에서도 이용 가능합니다! 단, Twilio가 아닌 LeadConnector 전화를 사용하는 하위 계정에만 해당됩니다.

이 비디오는 월 $497 및 연 $4970 Pro 플랜 고객의 과정을 다룹니다.

이 튜토리얼을 시작하기 전에, 아직 연결하지 않았다면 Stripe 계정을 에이전시 계정에 연결해야 합니다.

SaaS 모드 Phase 2를 통해 특정 하위 계정에 대해 SaaS 모드를 활성화하고, 링크를 통해 고객으로부터 신용카드 정보를 요청하거나 Stripe 계정의 기존 고객을 연결하며, Twilio 재청구를 구성하여 고객이 Twilio 사용료를 선불로 결제할 수 있습니다. 고객의 크레딧에서 수익을 창출할 수 있습니다.

## 프리랜서 플랜에서의 전화 재청구 (월 $297 & 연 $2970)

2023년 1월 25일부터 프리랜서 플랜(에이전시 무제한 플랜, 월 $297 또는 연 $2970)의 에이전시는 전화 비용을 고객(하위 계정)에게 재청구할 수 있습니다.

이는 고객이 LC Phone을 사용하는 경우에만 작동합니다(Twilio가 아님). [여기를 클릭하여](how-do-i-migrate-my-agency-and-sub-account-over-to-lc-phone-.md) 계정을 LeadConnector 전화 시스템으로 이전하는 방법을 알아보세요.

프리랜서 플랜의 에이전시는 비용에 마크업을 적용할 수 없습니다. 마크업을 적용한 재청구는 Pro 플랜에서만 이용 가능합니다. 그러나 프리랜서 플랜의 하위 계정은 [LC Phone이 전화번호, 미국/캐나다 SMS 및 통화 등 대부분의 카테고리에서 Twilio보다 이미 10% 저렴하기](https://help.gohilghlevel.com/support/solutions/articles/48001223556) 때문에 10% 할인 혜택을 계속 받을 수 있습니다.

하위 계정에는 고객의 결제 방법을 추가/관리할 수 있는 계정 관리자(에이전시 관리자와 혼동하지 말 것)가 최소 한 명은 있어야 합니다.

### 어떤 하위 계정이 전화 사용료를 재청구할 수 있는지 어떻게 알 수 있나요?

에이전시 레벨 → 설정(Settings) → 전화 연동(Phone Integration)으로 이동하세요.

![전화 재청구 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005372571/original/l4eoQvcC4lki3QNwUDjFsvS9-jJzzbFAGw.png?1692216521)

하위 계정은 다음 조건 중 하나에 해당할 수 있습니다:

- 전화 재청구 활성화됨 - 전화 관련 비용을 고객에게 재청구하고 있습니다
- 전화 재청구 활성화 가능 - 고객에게 전화 비용을 재청구하려면 고객 관리 페이지로 이동하여 전화 재청구를 켜세요
- 전화 재청구 비활성화됨 - 이 하위 계정에서 LeadConnector 전화를 사용하여 고객에게 전화 관련 비용을 재청구하세요

### 전화 재청구를 어떻게 활성화하나요?

여기서 고객 관리 페이지로 이동할 수 있습니다:

![고객 관리 페이지 이동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005372716/original/QXpMTNeeHFa5tWMxtYbPseekjVIWWPpBwg.png?1692216616)

또는 에이전시 사이드바 → 하위 계정(Sub-Accounts) → 계정으로 스크롤:

![하위 계정에서 관리](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279505825/original/KxIYiI_VCmna-tpUgpZSSH91ugjOTEF_wg.png?1675421148)

전화 시스템 재판매 설정(Phone System Resell Settings)으로 스크롤하여 이 토글을 활성화하세요:

![전화 시스템 재판매 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279506392/original/ZXstew2iZ3ySg7sFVf2BxK9mtHpJTtP9mA.png?1675421278)

그러면 고객에게 결제 방법을 추가하도록 요청하는 방식을 선택하라고 나타납니다:

![결제 방법 요청 방식 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279506615/original/F0wBbHtIEUIF-u5KB9ra0FsWRYLrtS_5og.png?1675421343)

고객이 이미 Stripe 계정에 존재하는 경우, "I already have this customer in Stripe"을 선택하고 Stripe에서 등록한 이름, 이메일 또는 Stripe ID를 사용하여 검색할 수 있습니다.

이 시점에서 고객은 하위 계정 레벨 → 설정(Settings) → 회사 청구(Company Billing) 페이지로 이동하여 결제 방법을 추가할 수 있습니다.

**참고사항**

에이전시는 자신의 카드를 여기에 추가해서는 안 됩니다. 고객의 카드여야 합니다.

![고객 결제 방법 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279507415/original/ktFv9ih-M-dQOxfjOa5wV7VnSOlS1VAfXw.png?1675421513)

고객이 카드를 추가하면, 고객 관리 영역에서 재청구 옵션을 활성화할 수 있습니다.

![재청구 옵션 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279507827/original/ZyyGFQpvQNhgIl4UPDx80CqVLA1OiY_ZwA.png?1675421614)

위에서 언급했듯이, 프리랜서 플랜 에이전시에서는 이러한 요금에 마크업을 적용할 수 없습니다. Stripe 수수료를 충당하기 위해 기본 마크업은 1.05배(즉, 5% 마크업)로 설정되어 있습니다.

![기본 마크업 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279508062/original/ACzhbrzH5Xcs5MocCk7aEUrVJuMXY9zMQA.png?1675421683)

### 재청구는 어떻게 작동하나요?

에이전시는 LC 사용량에 대해 CRM으로부터 청구를 받습니다.

고객은 전화 재청구에 대해 Stripe 계정으로부터 청구를 받습니다.

![재청구 작동 방식](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279508254/original/ccs7nVyaCEXRT1JCyHfZmWWunXGIi2Rkew.png?1675421755)

### 에이전시 사용량을 어떻게 확인할 수 있나요?

에이전시 레벨 → 설정(Settings) → 청구(Billing)로 이동하여 크레딧 섹션에서 "See Details"를 클릭하세요.

[에이전시의 LC 커뮤니케이션 지출을 어떻게 분석하나요?](how-to-analyze-an-agency-s-spending-on-lc-communications.md)

### 고객이 자신의 사용량을 어떻게 확인할 수 있나요?

하위 계정 레벨 → 설정(Settings) → 회사 청구(Company Billing)로 이동하여 크레딧 섹션에서 "See Details"를 클릭하세요.

![고객 사용량 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279508820/original/l4SPjIfLsBcssCOMzTDbDPIf7MpBOvGUJw.png?1675421930)

![고객 사용량 상세](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279508968/original/OZI_RIfl45UonFfyBJ5hgHExQKP6197OPw.png?1675421958)

---
*원문 최종 수정: Wed, 16 Aug, 2023 at 3:13 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*