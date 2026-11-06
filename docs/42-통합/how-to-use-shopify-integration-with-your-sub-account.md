---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000004061-how-to-use-shopify-integration-with-your-sub-account-
번역일: 2026-04-23
카테고리: 전자상거래
---

# 하위 계정에서 Shopify 연동 사용하는 방법

## Shopify를 하위 계정과 연동하는 과정은 2단계로 진행됩니다:

- Shopify 스토어에서 커스텀 앱 생성
- Shopify를 계정에 연결


# 1단계: Shopify 스토어에서 커스텀 앱 생성

연동을 설정하기 전에 먼저 Shopify 스토어에서 커스텀 앱을 생성해야 합니다.


1.1 Shopify 스토어에 로그인하고 대시보드에서 "Apps"를 클릭하세요


![Shopify 대시보드의 Apps 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035274558/original/ZSJJrCQiG1mxMWdAognKbVtt7sLmlZO5Rg.png?1729693048)


1.2 화면 상단에 강조표시된 "Develop apps"를 클릭하세요


![Develop apps 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035274557/original/WIhYzLcoelf6zT6fSg3xpF2MbizCAgcIdg.png?1729693048)


1.3 "Allow custom app development"를 클릭하세요 (이미 이 권한을 활성화했다면 Shopify는 1.5 단계로 바로 이동합니다)


![Allow custom app development 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035274554/original/c1efIzaYNwK6AMhTsaqHHPcWiflc3hwaXw.png?1729693048)


1.4 다음 화면에서 "Allow custom app development"를 클릭하세요


![Allow custom app development 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035274555/original/c3C51155RfXJBhQ91P_M-mUb_IaR1UG_6Q.png?1729693048)


1.5 "Create an app"을 클릭하세요


![Create an app 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035274560/original/kWDttIMq7bGHQ6X8hRxK6-YZRrOS2qhqsg.png?1729693050)


1.6 앱 이름을 입력하고(예: "Marvel's App"), App developer 아래에서 이메일을 선택한 후 "Create app"을 클릭하세요


![앱 생성 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035274561/original/SnexU3bF6wv-D0lEC6Iv8cXaqQX-SA6lXA.png?1729693050)


1.7 "Configure Admin API scopes"를 클릭하여 Admin API 연동을 설정하세요


![Configure Admin API scopes 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035274559/original/Em7J9mPM5C9u_MSWaVd7Q1t7gdPU_jgsrg.png?1729693049)


1.8 "Orders" 섹션을 검색하거나 스크롤해서 찾고, 최소한 "read_orders" 권한을 활성화해야 합니다


![Orders 권한 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035274568/original/MBWg0uA8kYUDN-1WQnXphdBk0j_OohW3Bw.jpeg?1729693053)


1.9 "read_customers" 범위를 추가하세요. 설정에서 "Admin API Integrations"을 편집합니다. 이 섹션의 고객 부분에서 "read_customers" 체크박스를 선택하세요.


![고객 권한 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035278217/original/zbwoZ95ElWEao2flGsTzj1raSsFps7JUVQ.png?1729695165)


![read_customers 체크박스](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035274552/original/P7Z8MGEHQOVtd8Eij3a-MM0bdhBlGpW90g.png?1729693048)


1.10 "Products" 섹션을 검색하거나 스크롤해서 찾고, 최소한 "read_products" 권한을 활성화해야 합니다


![Products 권한 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035274571/original/Nqj0fAX2cPnqXad89vM16z7gPjzmXowFfA.png?1729693053)


1.11 "Inventory" 섹션을 검색하거나 스크롤해서 찾고, 최소한 "read_inventory" 권한을 활성화해야 합니다


![Inventory 권한 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035278346/original/mR5D0owQUbz3NuMj87W8ZaKuxGFQscb_YA.png?1729695263)


1.12 "주문, 상품, 고객, 재고"에 대한 읽기 권한을 모두 활성화한 후, 오른쪽 상단의 "Save" 버튼을 클릭하여 앱을 저장하세요


![Save 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035279308/original/pySvS_dv6-v1XgVd9IuTVwvZ8Eg3iSvw5Q.png?1729695846)


1.13 저장 후 아래 이미지와 같이 "Install app"을 클릭하세요


![Install app 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035279765/original/Jez2k-yblgx-Dfk1R5tXQVEeYTTMvAQ1WQ.png?1729696188)


1.14 아래 이미지와 같이 팝업에서 "Install"을 클릭하세요


![Install 확인 팝업](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035274562/original/LQrins-fsfsZ5o6RdJTjTN31MyUG44KmPQ.png?1729693051)


이제 앱이 연동할 준비가 완료되었습니다!


1.15 설치 후, Shopify 연동에 필요한 "Admin API access token"은 API 자격 증명 섹션에서 찾을 수 있습니다. "Reveal token once"를 클릭하여 토큰에 접근하세요


![API access token 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035274563/original/uaDkd9S1RtsNKm2vue958XKXpOqC4YuslQ.png?1729693052)


1.16 클립보드 아이콘을 클릭하여 "Admin API access token"을 복사하세요


![토큰 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035274567/original/lIbw63vCPHdPPpo5mvjDlfUBz9RrvaHc6g.png?1729693053)


## 2단계: Shopify를 계정에 연결

사용 방법:

- **연동 접근**: 
Shopify 연동은 하위 계정에서 다음 경로로 찾을 수 있습니다: 
`Settings(설정) > Integration(연동) > Shopify`


![Shopify 연동 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050249674/original/BNomncFhtx_t7mQa6Tq4se8AyFs5idiupQ.png?1753197002)

- **Shopify 스토어 연결**: 
사용자는 "connect" 버튼을 클릭하여 설정을 시작할 수 있습니다. 모달이 나타나면 첫 번째 단계로 Admin API 액세스 토큰과 유효한 Shopify 스토어 URL을 입력해야 합니다.


![연결 설정 모달](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050250397/original/CTLVi2OkD2Q_pGZzxIdPBL3fieXKM1AVEQ.png?1753197556)

- **가져올 데이터 선택**:
 두 번째 단계에서는 Import Elements 화면으로 이동하여 Shopify 스토어에서 가져올 데이터를 선택할 수 있습니다. 가져오기 가능한 옵션은 다음과 같습니다: 
**연락처, 주문, 거래, 상품, 컬렉션**.

**데이터 재가져오기**: 데이터를 다시 가져오려면 연동을 해제한 후 다시 연결하면 초기 가져오기에서 누락된 데이터를 재가져올 수 있습니다.


![데이터 가져오기 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050250152/original/xmcecQkcD97iu8O7AMzkc2Vv6fXIrQO1ZA.jpeg?1753197350)

- **동기화 설정 구성**:
 세 번째이자 마지막 단계에서는 Sync Settings 화면으로 이동하여 향후 Shopify에서 Hyperclass로 지속적으로 동기화할 데이터를 선택할 수 있습니다. 동기화 옵션에는 다음이 포함됩니다: 
**연락처, 주문, 거래, 주문 제출 트리거, 결제 수신 트리거, 상품, 컬렉션**.

![동기화 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050250254/original/W-aICI6xtxX_-E0kQYNmsVHvVlBYw30gNw.png?1753197429)


- **설정 완료**:
 가져올 요소와 동기화할 요소를 선택한 후 **저장**을 클릭하세요. 가져오기 및 동기화 프로세스가 완료되는 데 시간이 걸릴 수 있습니다.
- **설정 관리**: 
Shopify 연동이 성공적으로 연결되면 Shopify 스토어의 향후 주문에 대해 동기화하려는 요소를 활성화하거나 비활성화할 수 있습니다.


![연동 관리 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035277243/original/WMC9UZReXPr_dzCylfjhn1dTsN-2ID1nTA.jpeg?1729694598)

---
*원문 최종 수정: 2025년 7월 22일*
*Hyperclass 사용 가이드 — hyperclass.ai*