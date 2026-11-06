---

번역일: 2026-04-08
카테고리: 16-SaaS-설정 > Saas Mode
---

# USD 외 다른 통화로 SaaS를 판매하는 방법

### 커뮤니티 추가 튜토리얼

[https://youtu.be/Xd0eMUbxpr4](https://youtu.be/Xd0eMUbxpr4)

https://youtu.be/Ea8JWlEKfGw

[https://youtu.be/XgxEb7F7cIk ](https://youtu.be/XgxEb7F7cIk​​)

USD 외 다른 통화로 SaaS를 설정하는 것이 다소 복잡할 수 있지만, 충분히 가능합니다. 많은 에이전시들이 성공적으로 SaaS 사업을 해외로 확장했습니다. 이 가이드에서는 검증되고 확장 가능한 설정 과정을 안내드립니다.

**목차**

- [USD가 아닌 통화로 SaaS를 판매할 수 있나요?](#usd가-아닌-통화로-saas를-판매할-수-있나요)
- [SaaS 상품을 만들면 항상 USD로 표시됩니다. 어떻게 변경하나요?](#saas-상품을-만들면-항상-usd로-표시됩니다-어떻게-변경하나요)
- [SaaS Configurator에 여전히 USD가 표시됩니다. 문제가 있나요?](#saas-configurator에-여전히-usd가-표시됩니다-문제가-있나요)
- [이 새 통화로 SaaS 판매를 어떻게 시작하나요?](#이-새-통화로-saas-판매를-어떻게-시작하나요)
- [백엔드에서는 어떤 일이 일어나나요?](#백엔드에서는-어떤-일이-일어나나요)
- [결제 링크 대신 퍼널을 사용해서 판매하고 싶어요. 어떻게 하나요?](#결제-링크-대신-퍼널을-사용해서-판매하고-싶어요-어떻게-하나요)
- [수정된 SaaS 상품과 가격을 판매용 하위 계정(로케이션)으로 어떻게 가져오나요?](#수정된-saas-상품과-가격을-판매용-하위-계정로케이션으로-어떻게-가져오나요)
- [지갑 충전(크레딧)은 어떻게 되나요?](#지갑-충전크레딧은-어떻게-되나요)?)

USD 외 다른 통화로 SaaS 하위 계정을 판매하는 기본 지원 기능이 곧 출시될 예정입니다. **그때까지는 이 우회 방법이 모든 SaaS 에이전시에게 유효합니다.**

# USD가 아닌 통화로 SaaS를 판매할 수 있나요?

네, 가능합니다. 이 문서에 설명된 우회 방법을 따르면, SaaS 에이전시는 Stripe가 지원하는 거의 모든 통화로 SaaS를 판매할 수 있습니다. [여기를 클릭](https://stripe.com/docs/currencies)하여 귀하의 사업 소재국에 따라 Stripe가 지원하는 통화를 확인해보세요.

# SaaS 상품을 만들면 항상 USD로 표시됩니다. 어떻게 변경하나요?

먼저 SaaS Configurator를 사용하여 USD로 SaaS 상품을 생성하세요.

![SaaS Configurator 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010056534/original/aiz-Ofx7jvEArutcHKrHitdG6x-8YDwjbg.png?1697198140)

그다음 Stripe 계정에 로그인하면 상품이 다음과 같이 표시됩니다.

![Stripe 상품 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009970166/original/3qCemDIge-T1k0l2NTdUQaqBAuDM-fwkOA.png?1697122069)

이제 가격을 편집하여 원하는 통화로 변경하세요. 이 예시에서는 USD를 사용하겠습니다.

![Stripe 가격 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009971637/original/GhdkCyVKk4LiWBOrT5iimckFdLTj1Eb1TQ.png?1697122864)

이제 Stripe 상품이 USD 대신 선택한 통화로 표시됩니다. 다음과 같이 보일 것입니다.

![변경된 통화의 Stripe 상품](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009970906/original/UsxS3aGtvlwCjHxrP3ShXhaz2nqvNcsd7A.png?1697122455)

모든 SaaS 상품과 가격에 대해 이 과정을 반복하세요.

# SaaS Configurator에 여전히 USD가 표시됩니다. 문제가 있나요?

아니요, 문제 없습니다. Hyperclass 에이전시 화면의 SaaS Configurator에는 계속 USD로 상품과 가격이 표시되지만, Stripe에서 설정한 통화가 우선 적용됩니다. Stripe 내부의 통화가 SaaS Configurator의 통화를 덮어씁니다.

![SaaS Configurator USD 표시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010056771/original/KCbFist1lK0cA4DKg6_tlwrMWijYeuGL-g.png?1697198239)

# 이 새 통화로 SaaS 판매를 어떻게 시작하나요?

SaaS 상품에 대한 결제 링크를 생성하여 시작할 수 있습니다.

그러면 결제 페이지에서 USD 대신 선택한 통화가 표시됩니다.

![변경된 통화의 결제 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010056868/original/HiF5MUQjo8_Cvw8IvBuiICfWqSHvRajAog.png?1697198304)

보시다시피 결제 페이지가 USD 대신 선택한 통화로 표시됩니다.

# 백엔드에서는 어떤 일이 일어나나요?

SaaS 링크를 통해 결제가 완료되면, Stripe 계정에 고객 프로필이 생성되고, 관련된 구독, 결제, 인보이스(무료 체험이 없는 경우)가 함께 만들어집니다.

![Stripe 고객 프로필](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010057041/original/tPOVWtT5ig-dG6qGvrO0fjqx4HTCXHiFmA.png?1697198368)

![Stripe 구독 정보](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009975828/original/_zNLJXZUseVxZHCZ5CVX6JvfGPFbPS4V0Q.png?1697124190)

[인보이스](https://storage.googleapis.com/ghl-test/whcJGypGlr1gJ9kdfvIC/media/6528106941c4a93d52bff4a4.pdf)와 [영수증](https://storage.googleapis.com/ghl-test/whcJGypGlr1gJ9kdfvIC/media/6528106941c4a95131bff4a3.pdf)도 USD 대신 설정한 통화로 표시됩니다.

# 결제 링크 대신 퍼널을 사용해서 판매하고 싶어요. 어떻게 하나요?

결제 링크 대신 Hyperclass 퍼널을 사용하여 SaaS 상품을 판매하고 싶다면, 아래와 같이 이 가격들(USD 대신 설정한 통화로 업데이트한)을 해당 하위 계정으로 가져오면 됩니다.

SaaS 상품 판매에 사용할 하위 계정(로케이션)에 연결된 Stripe 계정이 에이전시에 연결된 Stripe 계정과 동일한지 확인하세요.

하위 계정(로케이션)에 연결된 Stripe 계정은 로케이션 레벨(Location Level) → 좌측 메뉴 → Payments(결제) → Integrations(연동)에서 확인할 수 있습니다.

![로케이션 레벨 Stripe 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009977185/original/urZ5-b3HRWwEOkxLcmjtWvHqA0igt4HA0Q.png?1697124967)

에이전시에 연결된 Stripe 계정은 에이전시 레벨(Agency Level) → 좌측 메뉴 → Settings(설정) → Stripe에서 확인할 수 있습니다.

![에이전시 레벨 Stripe 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009977428/original/EE4E1t2oyUeZlpmctMlyEQQAZNPlV1YgRw.png?1697125047)

두 Stripe 계정이 동일한지 확인했다면, 해당 하위 계정(로케이션)에서 SaaS 상품 가져오기를 시작할 수 있습니다.

## 수정된 SaaS 상품과 가격을 SaaS 판매용 하위 계정(로케이션)으로 어떻게 가져오나요?

로케이션 레벨(Location Level) → 좌측 메뉴 → Payments(결제) → Products(상품)로 이동하여 "Import from Stripe(Stripe에서 가져오기)" 버튼을 클릭하세요. 그다음 SaaS 상품을 검색하고 가져오기를 클릭하세요.

![Stripe에서 상품 가져오기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009978053/original/27vKd3PO_-Oi6lD16lzoMLk2xWHy70wSqg.png?1697125244)

![상품 검색 및 가져오기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009978972/original/3MWNCYx8mLNZCqi92xlhb43KPMS6kAzbXg.png?1697125550)

모든 SaaS 상품과 가격에 대해 이를 반복하세요. 화면이 다음과 같이 보일 것입니다.

![가져온 상품 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009985010/original/eWUIR90lbwwsJjclWuCirEcwva2NxcawxQ.png?1697128332)

![상품 가격 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009985058/original/6eddlGzEbt2-7wJM9mRobbVLsa96_oi48A.png?1697128373)

보시다시피 가져온 모든 가격이 USD 대신 선택한 통화로 표시됩니다.

이제 [퍼널의 원스텝 또는 투스텝 주문 폼에 이 상품들을 추가](saas-mode-full-setup-guide-faq.md)하여 판매를 시작할 수 있습니다!

# 지갑 충전(크레딧)은 어떻게 되나요?

네, 하위 계정 크레딧 충전(지갑 충전)도 선택한 통화로 표시됩니다. 하지만 사용량은 여전히 USD로 표시됨을 유의하세요.

고객에게 청구되는 금액(인보이스와 영수증)은 설정한 통화로 표시됩니다.

하지만 사용량 기록(Hyperclass → 로케이션 레벨 → 좌측 메뉴 → Settings(설정) → Company Billing(회사 청구) 내부)에서는 사용량이 여전히 USD로 표시됩니다.

예를 들어 이 경우, 사용자가 크레딧에 US$ 100을 추가했습니다. 사용량 기록에서 다음과 같이 표시됩니다.

![사용량 기록 USD 표시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009985968/original/dcSLSa5AlEy5fh3lLnOJU9TM4FlLA5Zw2A.png?1697128784)

백엔드에서 Hyperclass는 이 금액(US$ 100)을 자동으로 설정한 통화(이 예시에서는 AUD)로 변환하고 Stripe에서 설정한 통화로 청구합니다. 그래서 관련 영수증이 선택한 통화로 표시되는 것입니다.

![변환된 통화의 영수증](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009986380/original/BHEccV8xipyuF-GbKRzjxcvT2QjjBB9QIw.png?1697128932)

참고용으로 [이 영수증](https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSUVEekxCeVZsZklUdlJYKJbDoKkGMgaVsKjTnBM6LBaPStnFOeAWtrXYuHCf1Nx0hjxv_s62yJtVUxM6b7qMCvZK-HMJV6xnsfbn)을 확인해보세요.

---
*원문 최종 수정: Mon, 11 Mar, 2024 at 3:33 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*