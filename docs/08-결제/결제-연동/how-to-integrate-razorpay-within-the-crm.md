---
원문: /support/solutions/articles/155000002559-how-to-integrate-razorpay-within-the-crm
번역일: 2026-11-07
카테고리: 08-결제
---

# Razorpay 연동하기

인도에서 많이 쓰는 결제 서비스인 Razorpay를 하이퍼클래스에 연결해 결제를 받는 방법을 안내해요. 앱 설치부터 API 키 입력, 웹훅 설정, 도메인 등록까지 순서대로 따라 하면 돼요.

비즈니스 사용자는 Razorpay로 결제를 처리할 수 있어요. 이 연동은 서브 계정의 **앱 마켓플레이스** 메뉴에서 마켓플레이스 앱으로 찾을 수 있어요. **결제 > 연동**에서 **더 보기**를 클릭해도 찾을 수 있어요.

![앱 마켓플레이스와 결제 연동에서 Razorpay를 찾는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026996886/original/cGM38lkSCd8himqlO0oJsISt_rPGSvI_eQ.png?1717409062)

이 연동으로 1회 결제, 금액 직접 입력 결제, 정기 결제를 받을 수 있어요. 주문 폼, 인보이스, 결제 링크, 폼, 연락처 페이지 등 모든 채널에서 쓸 수 있어요. 구독 취소, 저장된 카드 업데이트, 환불 같은 구독 관리 기능도 제공해요.

![Razorpay 연동이 지원하는 결제 기능 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026996913/original/24M_t65AjM_C10oGXduK3C897S57ED9Jvg.png?1717409084)

서브 계정 사용자는 **앱 마켓플레이스**에서 앱을 설치하고, 필요한 API 키로 인증하고, 필요한 권한을 허용하면 Razorpay로 결제를 받을 수 있어요.

## 연동 순서

Razorpay를 연결하려면 아래 4단계를 따라 하세요.

1. Razorpay 앱 설치하기
   **앱 마켓플레이스**로 이동해 Razorpay 앱을 설치하세요.
2. API 키로 인증하기
   Razorpay 대시보드의 **Accounts & Settings > API Keys**에서 API 키를 복사해 앱 인증 페이지에 붙여 넣으세요.
3. 웹훅 설정하기
   Razorpay 대시보드의 **Accounts & Settings > Webhooks**에서 아래 웹훅 URL을 추가하세요.
   `https://backend.leadconnectorhq.com/razorpay/webhook`
   결제와 관련된 이벤트를 모두 켜야 데이터가 제대로 동기화돼요.
4. 도메인 등록하고 허용 목록에 추가하기
   - 하이퍼클래스 대시보드에서 **설정 > 비즈니스 프로필 > 브랜드 도메인**으로 이동해 사용 중인 도메인을 등록하세요. 도메인을 인증한 뒤 **update information**(정보 업데이트)을 클릭하세요.
   - 그다음 Razorpay 대시보드에 로그인해 **Accounts & Settings > Business Website Details > Add Additional Website/App Details**로 이동하세요. 같은 브랜드 도메인을 여기에도 추가하면 Razorpay가 확인한 뒤 활성화해요.

     {% hint style="info" %}
     Razorpay는 자사 대시보드의 허용 목록에 등록된 도메인에서만 결제를 받을 수 있어요.
     {% endhint %}

![Razorpay 연동 설정 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026997128/original/t9TZ7tccQzpZRWN43mOia_7L36jxKsgjJA.png?1717409204)

![Razorpay 연동 설정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026997230/original/dPoQMqwLdRm-suaWk-lrOlU8iKKfIcRorw.png?1717409258)

![Razorpay 연동 설정 화면 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050371865/original/0K6GPMGTrW4t-SZJsA4pnDxEnDfOMM9k5w.png?1753358687)

![Razorpay 연동 설정 화면 4](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050371729/original/ZyWe2x3yglTf1I1OQZ4tpWw-MNA6oBHSqw.png?1753358576)

![Razorpay 연동 설정 화면 5](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050371757/original/9iLBTndWU4xo2kimBb9BS1hPgxMToZjcfw.png?1753358602)

앱을 설치하면 인증 페이지가 나타나요. 여기에 Razorpay 대시보드의 API 키를 입력해야 해요. API 키는 Razorpay 대시보드의 **Accounts & Settings > API keys**에서 확인할 수 있어요.

![Razorpay API 키를 입력하는 인증 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026999032/original/3zOKWp0Fvr9avNgbDH-bVS_c2Mnt-LBe4Q.png?1717410595)

Razorpay의 거래 상태를 문제없이 가져오려면 안내된 링크를 Razorpay 대시보드의 웹훅(**Accounts & Settings > Webhooks**)에도 붙여 넣어야 해요. 기능을 빠짐없이 쓰려면 아래 웹훅 이벤트를 선택하세요.

![선택해야 하는 웹훅 이벤트 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027000787/original/4a6-JrR2U35cs14zYq_UoWzPW9ivayIGjQ.png?1717411942)

사용 중인 브랜드 도메인은 Razorpay 대시보드(**Accounts & Settings > Business website details**)에도 추가하세요.

이 앱은 Stripe, NMI, [Authorize.net](http://authorize.net/) 같은 기존 결제 연동과 다르지 않게 쓸 수 있어요. 자동 판매 영수증, 환불, 결제 수신·주문 제출 트리거, 쿠폰 코드 할인 같은 구매 후 자동화를 포함해 결제 기능을 모두 쓸 수 있어요.

## 자주 묻는 질문

### 연동을 마쳤는데, 결제를 받을 때 Razorpay에서 "payment attempted on your merchant ID - XXXX from web domain - link.fastpaydirect.com has failed as it is not registered. Please contact risk-notification@razorpay.com for more details." 라는 이메일이 와요.

Razorpay는 등록하지 않았거나 인증되지 않은 도메인에서의 결제 처리를 제한해요. Razorpay의 [웹사이트 규정 준수 정책](https://razorpay.com/docs/payments/dashboard/account-settings/business-website-details/)에 따라 가맹점 ID마다 허용 목록에 등록된 도메인과 연결되어 있어야 해요.

하이퍼클래스는 기본 브랜드 도메인으로 link.fastpaydirect.com을 쓰는데, 이 도메인은 하이퍼클래스 자체 가맹점 계정에만 허용 목록으로 등록되어 있어요. 그래서 회원님의 Razorpay 키로는 작동하지 않아요.

해결하려면 위 4단계처럼 하이퍼클래스에 회원님의 브랜드 도메인을 등록하세요. 도메인이 연결되면 Razorpay가 허용 목록에 등록된 설정으로 인식해서 결제가 정상적으로 처리돼요.

### 이 Razorpay 연동을 SaaS 모드와 지갑 충전에도 쓸 수 있나요?

아니요. SaaS 모드와 지갑 충전은 커스텀 결제 제공업체(Razorpay도 그중 하나)로 지원하지만, Razorpay에서는 작동하지 않아요. Razorpay가 이 연동에서는 저장된 카드로 하는 오프세션 결제(고객이 직접 결제하지 않는 상태에서 하는 결제)를 지원하지 않기 때문이에요. 기간이 정해진 구독만 지원해요.
