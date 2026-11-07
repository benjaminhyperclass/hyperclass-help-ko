---
원문: https://help.gohighlevel.com/support/solutions/articles/155000001179-how-to-sell-saas-in-currencies-other-than-usd-
번역일: 2026-11-06
카테고리: 16-SaaS-설정
---

# USD 외 통화로 SaaS 판매하기

SaaS를 USD가 아닌 다른 통화로 판매하는 방법을 안내해요. 설정 과정이 조금 번거롭지만 충분히 가능하고, 이미 많은 에이전시가 이 방법으로 해외에서 SaaS 비즈니스를 넓혔어요. 검증된 설정 절차를 하나씩 따라 해 보세요. 에이전시 관리자가 진행하는 작업이에요.

[동영상](https://www.youtube.com/embed/fQHhMEdbT5s?&wmode=opaque)

커뮤니티에서 올라온 튜토리얼도 함께 참고해 보세요.

<https://youtu.be/Xd0eMUbxpr4>

https://youtu.be/Ea8JWlEKfGw

https://youtu.be/XgxEb7F7cIk

{% hint style="info" %}
USD가 아닌 통화로 SaaS 서브 계정을 판매하는 기능은 곧 기본으로 지원될 예정이에요. 그전까지는 이 문서의 우회 방법을 모든 SaaS 에이전시가 사용할 수 있어요.
{% endhint %}

## USD 외 통화로도 SaaS를 판매할 수 있나요?

네, 판매할 수 있어요. 이 문서의 우회 방법을 따르면 Stripe가 지원하는 거의 모든 통화로 SaaS를 판매할 수 있어요. 비즈니스 국가별로 Stripe가 지원하는 통화는 [여기](https://stripe.com/docs/currencies)에서 확인하세요.

## SaaS 상품을 만들면 항상 USD로 만들어져요. 어떻게 바꾸나요?

먼저 **SaaS 구성기**(SaaS Configurator)에서 SaaS 상품을 USD로 만들어요.

![SaaS 구성기에서 USD로 만든 SaaS 상품](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010056534/original/aiz-Ofx7jvEArutcHKrHitdG6x-8YDwjbg.png?1697198140)

그다음 Stripe 계정에 로그인하면 상품이 이렇게 보여요.

![Stripe 계정에 표시된 SaaS 상품 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009970166/original/3qCemDIge-T1k0l2NTdUQaqBAuDM-fwkOA.png?1697122069)

이제 가격을 편집해서 통화를 원하는 통화로 바꿔요. 이 예시에서는 USD를 사용해요.

<!-- 검토 필요: 원문 내용이 서로 다름 (USD에서 다른 통화로 바꾼다고 하면서 예시 통화를 USD라고 적었고, 뒤에서는 AUD 예시가 나옴) -->

![Stripe에서 가격의 통화를 변경하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009971637/original/GhdkCyVKk4LiWBOrT5iimckFdLTj1Eb1TQ.png?1697122864)

이렇게 하면 Stripe 상품이 USD 대신 선택한 통화로 바뀌어요. 아래와 같이 보여요.

![선택한 통화로 바뀐 Stripe 상품](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009970906/original/UsxS3aGtvlwCjHxrP3ShXhaz2nqvNcsd7A.png?1697122455)

나머지 SaaS 상품과 가격도 같은 방법으로 모두 바꿔 주세요.

## SaaS 구성기에는 계속 USD로 표시돼요. 문제가 되나요?

문제 없어요. 하이퍼클래스 에이전시 화면의 **SaaS 구성기**에는 상품과 가격이 계속 USD로 표시되지만, Stripe에 설정한 통화가 우선 적용돼요. Stripe의 통화가 **SaaS 구성기**의 통화를 덮어써요.

![SaaS 구성기에는 USD로 표시되는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010056771/original/KCbFist1lK0cA4DKg6_tlwrMWijYeuGL-g.png?1697198239)

## 새 통화로 SaaS 판매는 어떻게 시작하나요?

SaaS 상품의 결제 링크를 만들면 바로 시작할 수 있어요.

[동영상](https://www.loom.com/embed/52999569395f4eaaabc31aec0c11e78e?sid=7c253aba-fb6b-4655-a984-580eb2724f0e)

그러면 결제 화면에 USD 대신 선택한 통화가 표시돼요.

![선택한 통화로 표시된 결제 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010056868/original/HiF5MUQjo8_Cvw8IvBuiICfWqSHvRajAog.png?1697198304)

이처럼 결제 화면은 USD가 아니라 선택한 통화로 나와요.

## 내부에서는 어떤 일이 일어나나요?

고객이 SaaS 링크로 결제하면 Stripe 계정에 고객 프로필이 만들어져요. 구독과 결제도 함께 생기고, 체험 기간이 없다면 인보이스도 만들어져요.

![Stripe에 만들어진 고객 프로필과 구독](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010057041/original/tPOVWtT5ig-dG6qGvrO0fjqx4HTCXHiFmA.png?1697198368)

![Stripe에 만들어진 결제 내역](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009975828/original/_zNLJXZUseVxZHCZ5CVX6JvfGPFbPS4V0Q.png?1697124190)

인보이스와 영수증도 USD가 아니라 선택한 통화로 발행돼요.

## 결제 링크 대신 퍼널로 판매하려면 어떻게 하나요?

결제 링크 대신 하이퍼클래스 퍼널로 SaaS 상품을 판매하려면, USD에서 원하는 통화로 바꾼 가격을 판매용 서브 계정으로 가져오면 돼요. 방법은 아래와 같아요.

{% hint style="warning" %}
SaaS 상품을 판매할 서브 계정에 연결된 Stripe 계정과 에이전시에 연결된 Stripe 계정이 같아야 해요. 먼저 두 계정이 같은지 확인하세요.
{% endhint %}

서브 계정에 연결된 Stripe 계정은 서브 계정 화면의 왼쪽 메뉴에서 **결제 > 연동**으로 가서 확인해요.

![서브 계정에 연결된 Stripe 계정 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009977185/original/urZ5-b3HRWwEOkxLcmjtWvHqA0igt4HA0Q.png?1697124967)

에이전시에 연결된 Stripe 계정은 에이전시 화면의 왼쪽 메뉴에서 **설정 > Stripe**로 가서 확인해요.

![에이전시에 연결된 Stripe 계정 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009977428/original/EE4E1t2oyUeZlpmctMlyEQQAZNPlV1YgRw.png?1697125047)

두 Stripe 계정이 같은 것을 확인했다면, 해당 서브 계정으로 SaaS 상품을 가져올 수 있어요.

### 수정한 SaaS 상품과 가격을 판매용 서브 계정으로 가져오려면 어떻게 하나요?

1. 서브 계정 화면의 왼쪽 메뉴에서 **결제 > 상품**으로 이동하세요.
2. **Stripe에서 가져오기** 버튼을 클릭하세요.
3. SaaS 상품을 검색한 뒤 **가져오기**를 클릭하세요.

![Stripe에서 가져오기 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009978053/original/27vKd3PO_-Oi6lD16lzoMLk2xWHy70wSqg.png?1697125244)

![SaaS 상품을 검색해 가져오는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009978972/original/3MWNCYx8mLNZCqi92xlhb43KPMS6kAzbXg.png?1697125550)

나머지 SaaS 상품과 가격도 같은 방법으로 모두 가져오세요. 화면이 아래와 같이 보이면 돼요.

![가져온 SaaS 상품 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009985010/original/eWUIR90lbwwsJjclWuCirEcwva2NxcawxQ.png?1697128332)

![가져온 SaaS 상품의 가격 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009985058/original/6eddlGzEbt2-7wJM9mRobbVLsa96_oi48A.png?1697128373)

가져온 가격이 모두 USD가 아니라 선택한 통화로 표시되는 것을 확인할 수 있어요.

이제 이 상품을 퍼널의 1단계 또는 2단계 주문 폼에 추가하면 판매를 시작할 수 있어요. 자세한 방법은 SaaS 모드 전체 설정 가이드의 퍼널/웹사이트 설정 부분을 참고하세요.

## 지갑 충전(크레딧)은 어떻게 되나요?

서브 계정의 크레딧 결제(지갑 충전)도 선택한 통화로 청구돼요. 다만 사용량은 계속 USD로 표시돼요.

{% hint style="info" %}
고객에게 청구되는 금액(인보이스와 영수증)은 선택한 통화로 표시돼요.

하지만 서브 계정 화면의 **설정 > Company Billing**(회사 결제)에 있는 사용 내역에는 사용량이 계속 USD로 표시돼요.
{% endhint %}

예를 들어 사용자가 크레딧 100달러(US$ 100)를 충전하면 사용 내역에는 아래처럼 표시돼요.

![US$ 100 충전이 USD로 표시된 사용 내역](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009985968/original/dcSLSa5AlEy5fh3lLnOJU9TM4FlLA5Zw2A.png?1697128784)

내부에서는 하이퍼클래스가 이 금액(US$ 100)을 선택한 통화(이 예시에서는 AUD)로 자동 환산해서 Stripe에서 그 통화로 결제해요. 그래서 영수증도 선택한 통화로 발행돼요.

![선택한 통화로 발행된 영수증](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009986380/original/BHEccV8xipyuF-GbKRzjxcvT2QjjBB9QIw.png?1697128932)

[이 영수증](https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSUVEekxCeVZsZklUdlJYKJbDoKkGMgaVsKjTnBM6LBaPStnFOeAWtrXYuHCf1Nx0hjxv_s62yJtVUxM6b7qMCvZK-HMJV6xnsfbn)을 참고해 보세요.
