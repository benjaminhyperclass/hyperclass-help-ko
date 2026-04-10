---

번역일: 2026-04-07
카테고리: 08-결제 > 결제-연동
---

# CRM에 Razorpay 연동하는 방법

비즈니스 사용자는 인도에서 인기 있는 결제 서비스인 Razorpay를 통해 결제를 처리할 수 있습니다. 이 연동은 하위 계정 내 App Marketplace(앱 마켓플레이스) 메뉴에서 마켓플레이스 앱으로 제공되며, Payments(결제) → Integrations(연동)에서 Search for More(더 찾기) 옵션을 클릭해도 이용할 수 있습니다.

![Razorpay 앱 찾기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026996886/original/cGM38lkSCd8himqlO0oJsISt_rPGSvI_eQ.png?1717409062)

이 연동 기능은 주문 폼, 인보이스, 결제 링크, 폼, 연락처 페이지 등 모든 채널에서 일회성 결제, 커스텀 금액 결제, 정기 결제를 모두 받을 수 있습니다. 또한 구독 취소, 등록된 카드 변경, 환불 등의 구독 관리 기능도 제공합니다.

![Razorpay 기능](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026996913/original/24M_t65AjM_C10oGXduK3C897S57ED9Jvg.png?1717409084)

하위 계정 사용자는 App Marketplace에서 앱을 설치하고, 필요한 API 키로 인증한 후, 필요한 권한을 부여하여 Razorpay로 결제를 받기 시작할 수 있습니다.

## 설정 방법

Razorpay를 시스템에 성공적으로 연결하려면 다음 네 가지 필수 단계를 따라주세요:

### 1. Razorpay 앱 설치
App Marketplace로 이동하여 Razorpay 앱을 설치합니다.

### 2. API 키로 인증
Razorpay 대시보드(Accounts & Settings → API Keys)에서 API 키를 복사하여 앱 인증 페이지에 붙여넣습니다.

### 3. 웹훅 설정
Razorpay 대시보드(Accounts & Settings → Webhooks)에서 다음 웹훅 URL을 추가합니다:
`https://backend.leadconnectorhq.com/razorpay/webhook`
적절한 동기화를 위해 모든 결제 관련 이벤트를 활성화해야 합니다.

### 4. 도메인 등록 및 화이트리스트 추가

GHL 대시보드에서 Settings(설정) → Business Profile(비즈니스 프로필) → Branded Domain(브랜드 도메인)으로 이동하여 사용 중인 도메인을 등록합니다. 반드시 확인하고 정보 업데이트를 클릭하세요.

다음으로, Razorpay 대시보드에 로그인하여 Accounts & Settings → Business Website Details → Add Additional Website/App Details로 이동합니다. 여기에 동일한 브랜드 도메인을 추가합니다. Razorpay에서 확인하고 활성화할 것입니다.

참고: Razorpay는 대시보드에서 화이트리스트에 등록된 도메인에서만 결제를 허용합니다.

![도메인 등록 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026997128/original/t9TZ7tccQzpZRWN43mOia_7L36jxKsgjJA.png?1717409204)

![도메인 등록 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026997230/original/dPoQMqwLdRm-suaWk-lrOlU8iKKfIcRorw.png?1717409258)

![도메인 설정 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050371865/original/0K6GPMGTrW4t-SZJsA4pnDxEnDfOMM9k5w.png?1753358687)

![도메인 설정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050371729/original/ZyWe2x3yglTf1I1OQZ4tpWw-MNA6oBHSqw.png?1753358576)

![도메인 설정 화면 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050371757/original/9iLBTndWU4xo2kimBb9BS1hPgxMToZjcfw.png?1753358602)

앱이 설치되면 인증 페이지가 표시되며, Razorpay 대시보드의 API 키를 입력해야 합니다. Razorpay 대시보드에서 API 키를 얻으려면 Accounts & Settings → API keys로 이동하세요.

![API 키 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026999032/original/3zOKWp0Fvr9avNgbDH-bVS_c2Mnt-LBe4Q.png?1717410595)

Razorpay에서 거래 상태를 가져오는 연동이 원활하게 작동하려면, 제공된 링크를 Razorpay 대시보드의 Webhooks(Accounts & Settings → Webhooks) 아래에 붙여넣어야 합니다. 모든 기능을 놓치지 않으려면 다음 웹훅 이벤트를 선택해야 합니다:

![웹훅 이벤트 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027000787/original/4a6-JrR2U35cs14zYq_UoWzPW9ivayIGjQ.png?1717411942)

또한 사용 중인 브랜드 도메인을 Razorpay 대시보드(Accounts & Settings → Business website details)에 추가하세요.

이 앱은 기존 결제 연동(Stripe/NMI/Authorize.net)과 전혀 다르지 않으며, 자동화된 결제 영수증, 환불, 결제 수신 및 주문 제출 트리거나 쿠폰 코드를 통한 할인 제공과 같은 구매 후 자동화를 포함한 모든 결제 기능을 갖추고 있습니다.

## 자주 묻는 질문

**Q: 연동을 완료했는데, 결제를 받을 때 Razorpay로부터 "payment attempted on your merchant ID - XXXX from web domain - link.fastpaydirect.com has failed as it is not registered. Please contact risk-notification@razorpay.com for more details"라는 이메일을 받았습니다.**

A: 이 오류는 Razorpay가 등록되지 않았거나 확인되지 않은 도메인에서의 결제 처리를 제한하기 때문에 발생합니다. Razorpay의 각 판매자 ID는 [웹사이트 규정 정책](https://razorpay.com/docs/payments/dashboard/account-settings/business-website-details/)의 일부로 화이트리스트된 도메인에 매핑되어야 합니다.

기본적으로 GHL은 link.fastpaydirect.com을 브랜드 도메인으로 사용하는데, 이는 GHL 자체 판매자 계정에만 화이트리스트되어 있습니다. 귀하의 Razorpay 키로는 작동하지 않습니다.

이 문제를 해결하려면 GHL에서 자신만의 브랜드 도메인을 등록해야 합니다(4단계 참조). 도메인이 연결되면 Razorpay가 이를 화이트리스트 설정의 일부로 인식하여 결제가 성공적으로 처리됩니다.

**Q: 이 Razorpay 연동은 SaaS 모드와 지갑 충전에서도 작동하나요?**

A: 저희는 커스텀 결제 제공업체(Razorpay의 한 유형)로 SaaS 모드와 지갑 충전을 지원하지만, Razorpay의 경우 작동하지 않습니다. 이는 Razorpay가 저희 연동을 통해 저장된 카드의 오프세션 결제를 지원하지 않기 때문입니다. 고정 기간 구독만 지원됩니다.

---
*원문 최종 수정: Fri, 12 Dec, 2025 at 12:11 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*