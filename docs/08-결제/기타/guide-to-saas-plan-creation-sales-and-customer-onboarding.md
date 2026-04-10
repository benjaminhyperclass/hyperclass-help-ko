---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# SaaS 플랜 생성, 판매 및 고객 온보딩 가이드

SaaS 모드는 이제 구독 결제 처리를 위해 Stripe, NMI, Authorize.net, Square를 지원합니다. 시스템은 '에이전시 하위 계정' 내의 결제(Payments) 모듈을 사용해 고객과 구독을 관리하며, 이는 결제 처리를 위해 결제 공급업체와 연결됩니다.

'에이전시 하위 계정'은 귀하(에이전시)가 소유한 하위 계정으로, 내부 운영 관리에 사용됩니다. 이상적으로는 고객이 이 하위 계정에 접근할 수 없어야 합니다.
SaaS 모드 관리를 위해 새로운 하위 계정을 생성하는 것을 권장합니다. 이러한 하위 계정은 여러 개 만들 수도 있습니다.

**목차**

- [섹션 1: SaaS 설정기 설정](#섹션-1-saas-설정기-설정)
- [1단계: 에이전시 하위 계정 선택](#1단계-에이전시-하위-계정-선택))
- [2단계: SaaS 플랜 생성](#2단계-saas-플랜-생성)
- [3단계: SaaS 플랜 설정](#3단계-saas-플랜-설정)
- [4단계: 플랜 저장](#4단계-플랜-저장)
- [가격 편집으로 일회성 설정 수수료 추가](#가격-편집으로-일회성-설정-수수료-추가)
- [섹션 2: SaaS 플랜 판매](#섹션-2-saas-플랜-판매)
- [섹션 3: SaaS 고객 온보딩](#섹션-3-saas-고객-온보딩)

## 섹션 1: SaaS 설정기 설정

### 1단계: 에이전시 하위 계정 선택

- 에이전시 레벨에서 SaaS Configurator(SaaS 설정기) > Configure(설정) 탭으로 이동해 'Select Sub-Accounts(하위 계정 선택)'를 클릭하세요.

![에이전시 하위 계정 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034516731/original/Uf8Zsl9fDBVPOhVNUg0_Zmkl4L5mcnvd_A.png?1728633170)

- 드롭다운에서 에이전시 하위 계정을 선택하고 'Add Sub-Account(하위 계정 추가)'를 클릭하세요.

![하위 계정 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034516886/original/hl9Yb_LOrrDdCQcRFWIj94roOXsEFJ6_Tw.png?1728633261)

### 2단계: SaaS 플랜 생성

**옵션 1: SaaS 설정기를 통해**

SaaS Configurator(SaaS 설정기)에서 'Add Your Plan(플랜 추가)' 버튼을 선택하세요.

**참고:** SaaS 설정기에서 SaaS 체크아웃 링크(판매 링크)를 생성하면, Hyperclass는 동일한 SaaS 상품에 대해 이미 기존 결제 링크가 있을 때 이를 재사용합니다. 새 링크는 필요할 때만 생성됩니다.

![SaaS 플랜 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034543967/original/R3cGuGxnBx3IdCQEu6YFHQVkXnxxBcbL7g.png?1728650822)

- 상품을 생성할 로케이션(하위 계정, 설정된 에이전시 하위 계정 목록에서)을 선택하세요. 즉, 고객과 구독을 관리하고 결제를 처리할 계정입니다.

![로케이션 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034544150/original/Z2YfOS7S8o8Mc3f1xXBHgw33wteShDSj2w.png?1728650975)

- 선택한 하위 계정의 결제(Payments) 모듈로 리다이렉트되어 SaaS 플랜을 설정할 수 있습니다.

- 계정 설정에 따라 SaaS 설정기에서 가이드 체크리스트를 통해 계속 진행하거나, 선택한 하위 계정의 결제(Payments) 모듈로 이동해 설정을 완료할 수 있습니다.

참고: SaaS 설정기에서 가이드 온보딩 체크리스트가 보이면, 이를 따라 결제 연동, 통화 선택, 플랜 생성, 판매 링크 생성을 완료하세요.

중요: SaaS 설정기에서 SaaS 체크아웃 링크를 생성할 때, 호스팅된 체크아웃은 구독 설정 시 카드 결제만 지원합니다. 고객이 카드가 아닌 방법으로 체크아웃을 완료하면 SaaS 활성화가 실패할 수 있습니다.

**옵션 2: 결제 모듈을 통해**

선호하는 에이전시 하위 계정으로 전환하고 Payments(결제) 탭으로 이동하세요.

- 'New Product(신규 상품)' 버튼을 선택하세요.

![신규 상품 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034544574/original/fDlx3HqI-O0i9c5r_ZJGyXG5QvTNwbZ9qQ.png?1728651272)

### 3단계: SaaS 플랜 설정

- 상품 설정 화면(아래 참조)에서 'Use as SaaS Product(SaaS 상품으로 사용)' 토글을 활성화해야 합니다. 토글을 활성화하면 즉시 'SaaS' 섹션이 표시됩니다.

![SaaS 상품 토글 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034544961/original/E1rlEIWsnpoFqir5Rf4mcziCSQeiCuVrnw.png?1728651573)

- 제목, 설명 등 SaaS 플랜의 기본 세부 정보를 모두 추가하세요.

- Pricing(가격) 섹션으로 스크롤하여 월간 및 연간 가격과 해당 체험 기간을 설정하세요.

![가격 설정 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034545575/original/3eN4dJqGHZpc_dgDVEEZuVEPvD4W3Cf7Og.png?1728652009)

- SaaS 섹션으로 스크롤하여 기능, 사용 한도, 무료 크레딧, 재청구, 리셀링 등 모든 SaaS 옵션을 설정하세요.

![SaaS 설정 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034546007/original/jc-OXb05cC6zUMhq5wP_1BctRySIY_0Egg.png?1728652339)

**무료 크레딧 (체험 타이밍)**

플랜에 무료 크레딧이 포함된 경우, 크레딧 발급 시기를 선택할 수 있습니다:

- 가입 즉시 (기본 동작), 또는
- "체험 기간 종료 후 크레딧 추가" 토글을 사용하여 체험 기간 종료 후

활성화되면 체험 기간 동안 크레딧이 발급되지 않습니다. 첫 번째 발급은 체험 전환 시 발생하며, 그 시점부터 정기 크레딧이 청구 주기에 맞춰집니다.

### 4단계: 플랜 저장

![플랜 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034546308/original/lUS0OOOLtLTdLERphLUD93GSV-a75Hh7lg.png?1728652465)

## 가격 편집으로 일회성 설정 수수료 추가

**1단계: 상품 저장 및 편집**

상품을 저장한 후(SaaS 상품으로 사용 토글 켜짐) 다시 편집을 위해 열면, 가격(Pricing) 섹션을 더 자세하게 편집할 수 있습니다. 여기서 일회성 설정 수수료를 추가할 수 있습니다.

**2단계: 월간 및 연간 클릭**

상품을 저장하고 다시 편집을 위해 열면 이 옵션이 나타납니다. Edit Product(상품 편집) > Pricing(가격)에서 "Monthly(월간)"와 "Yearly(연간)" 글자가 클릭 가능해집니다.

![월간 연간 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050555911/original/27sIQVZ003A_HaEpwJleV0pEdBiNw7tkxQ.png?1753737969)

**3단계: 설정 수수료 추가**

월간/연간 가격의 세부 "variants(변형)" 설정에서 Setup Fee(설정 수수료) 필드를 변경하여 플랜 설정을 위한 일회성 요금을 생성할 수 있습니다. 그런 다음 저장을 클릭하고 플랜 설정으로 돌아가세요.

![설정 수수료 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050558822/original/pLK2whmEce3t_VHk4qykCV806UE2vqSA6A.png?1753750260)

## 섹션 2: SaaS 플랜 판매

SaaS 플랜은 다른 결제(Payments) 상품과 유사하게 퍼널, 주문 폼, 결제 링크 등을 통해 판매할 수 있습니다. 도움말은 아래 문서를 참조하세요:

- 주문 폼에서 상품 판매
- 결제 링크
- 결제 요소에서 상품 사용

## 섹션 3: SaaS 고객 온보딩

- SaaS 고객은 플랜 구매가 성공하는 즉시 자동으로 온보딩됩니다.

- 플랫폼/결제 방식에 관계없이 SaaS 상품에 대한 구독이 생성되는 즉시, 해당 SaaS 플랜의 설정으로 하위 계정이 자동으로 생성됩니다.

![자동 온보딩](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034549318/original/76HR8kMlJzUqKIKw6J69HD4v1ZdHzFGlPg.png?1728654455)

- 고객 계정이 성공적으로 생성되면, 등록한 이메일 주소로 시스템 로그인 방법(로그인 URL)과 비밀번호 설정 단계에 대한 안내가 포함된 이메일을 받게 됩니다.

![환영 이메일](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034550056/original/FfgMqtyh63zxfgYger7TwlSW2zUZJeO-gA.png?1728654896)

- SaaS 고객을 위한 환영 이메일 커스터마이징 방법은 이 문서를 참조하세요.

---
*원문 최종 수정: Mon, 6 Apr, 2026 at 5:30 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*