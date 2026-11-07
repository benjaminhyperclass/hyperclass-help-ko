---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000005635-shipstation-setup-checklist
번역일: 2026-04-23
카테고리: ecommerce
---

# ShipStation 설정 체크리스트

**목차**

- [배송 출발지 위치 추가](#1.-배송-출발지-위치-추가)
- [모든 활성 배송사에 대해 '패키지' 활성화](#2.-모든-활성-배송사에-대해-'패키지'-활성화)
- [플랫폼과 ShipStation 계정 통화 일치시키기](#3.-플랫폼과-ShipStation-계정-통화-일치시키기)

ShipStation 계정이 연동에 적합하게 설정되도록 다음 단계를 따라주세요.

---

## 1. 배송 출발지 위치 추가

- ShipStation 계정에 **로그인**하세요.

- **Settings(설정)**(톱니바퀴 아이콘) > **Shipping(배송)** > **Ship From Locations(배송 출발지 위치)**로 이동하세요.

- **Add a Ship From Location(배송 출발지 위치 추가)**를 클릭하세요.

- 필수 정보를 입력하고 저장하세요.

- 최소 하나의 위치가 활성 상태로 표시되는지 확인하세요.

![배송 출발지 위치 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049058311/original/Tt7zLKhGK9_8ae_btp7EGBdAcpdCps4EIQ.png?1751269577)

![배송 출발지 위치 추가 양식](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049058293/original/E5S_aZuM5J2Q-fXRuRVJEkRjB8OgR-hesw.png?1751269559)

---

## 2. 모든 활성 배송사에 대해 '패키지' 활성화

- **Settings(설정)**에서 **Shipping(배송)** > **Packages(패키지)**로 이동하세요.

- 패키지 목록을 검토하고 사용할 예정인 모든 활성 배송사에 대해 **'Package(패키지)'** 옵션이 활성화되어 있는지 확인하세요.

- 변경사항을 저장하세요.

![패키지 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049058605/original/Jgej-Pkxkheyv3oQz2XCYfokJv3S7b1aZw.png?1751269742)

---

## 3. 플랫폼과 ShipStation 계정 통화 일치시키기

- **Settings(설정)** > **Account(계정)** > **Your Account(내 계정)**로 이동하세요.

- **Account Currency(계정 통화)**를 확인하세요.

- 이 통화가 플랫폼의 통화 설정(ShipStation과 연동할 플랫폼)과 일치하는지 확인하세요.

- 체크아웃 및 배송비 계산 중 불일치를 방지하기 위해 필요에 따라 업데이트하세요.

3.1. 플랫폼에서 설정하기:

`Settings(설정) → Business Profile(비즈니스 프로필) → Business Physical Address(사업장 주소) → Select Country(국가 선택)`로 이동하세요.

*선택한 국가에 따라 통화가 자동으로 설정됩니다.*

![플랫폼 통화 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049085779/original/_kz7XUqPfyz_MU4s-bwFUyys4Ad3h-gwgw.png?1751287870)

![국가 선택 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049085816/original/mgvvb1wm-LWEvwt91qFv6ra2usvaj_SBog.png?1751287885)

3.2. ShipStation에서 설정하기:

계정 통화는 홈 국가 위치에 따라 설정됩니다. 지원 문서를 참고하세요:

- [ShipStation 통화 작동 방식](https://help.shipstation.com/hc/en-us/articles/360045434792-How-does-currency-work-in-ShipStation#UUID-3ff60925-4929-7a36-0118-3cc78fa60d79_UUID-07d0d250-e31e-5115-1a5a-3dd6a59eb762)
- [Chargebee ShipStation 연동 동기화 요구사항](https://www.chargebee.com/docs/billing/2.0/integrations/shipstation#sync-prerequisites-for-new-orders)

---
*원문 최종 수정: Mon, 30 Jun, 2025 at 8:15 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*