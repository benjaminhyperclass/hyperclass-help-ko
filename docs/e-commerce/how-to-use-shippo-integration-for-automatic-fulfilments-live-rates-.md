---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000003162-how-to-use-shippo-integration-for-automatic-fulfilments-live-rates-
번역일: 2026-04-23
카테고리: 이커머스 > 
---

# Shippo 연동을 통한 자동 배송 처리 및 실시간 배송료 계산 사용법

**목차**

- [1단계: Shippo에서 Live 토큰 생성](#1단계-Shippo에서-Live-토큰-생성)
- [2단계: Shippo에서 패키지 템플릿 및 배송 옵션 설정](#2단계-Shippo에서-패키지-템플릿-및-배송-옵션-설정)
  - [2.1. Shippo에서 패키지 템플릿 설정](#2.1-Shippo에서-패키지-템플릿-설정)
  - [2.2. Shippo에서 배송 발송지 설정](#2.2-Shippo에서-배송-발송지-설정)
  - [2.3. Shippo에서 배송 옵션 설정](#2.3-Shippo에서-배송-옵션-설정)
- [3단계: 배송 설정에서 배송 발송지 설정](#3단계-배송-설정에서-배송-발송지-설정)
- [4단계: 마켓플레이스에서 Shippo 앱 설치](#4단계-마켓플레이스에서-Shippo-앱-설치)
- [5단계: Shippo Live 토큰 입력 및 계속 진행](#5단계-Shippo-Live-토큰-입력-및-계속-진행)
- [6단계: 실시간 배송료 활성화/비활성화](#6단계-실시간-배송료-활성화비활성화)
- [7단계: 상품 무게 추가](#7단계-상품-무게-추가)
- [중요 참고사항](#중요-참고사항)

# 1단계: Shippo에서 Live 토큰 생성

Shippo에서 Live 토큰 생성은 다음 경로에서 접근할 수 있습니다: Settings > Advanced > API > Live Token

- Generate live token을 클릭하세요:

![Shippo Live 토큰 생성 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031484932/original/rhPvZlOA4-QgPBcvx1TEED5zAjXJq6wTCQ.jpeg?1724320619)

- Live 토큰을 복사하세요:

![Shippo Live 토큰 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031484930/original/Cq_b0SJPBbnI8p3No0vscNav74TAIR7F5w.jpeg?1724320619)

# 2단계: Shippo에서 패키지 템플릿 및 배송 옵션 설정

### 2.1. Shippo에서 패키지 템플릿 설정

- 패키지 템플릿은 다음 경로에서 접근할 수 있습니다: Settings > Shipping > Packages > Add New Template

![Shippo 패키지 템플릿 접근 경로](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031484928/original/Imd5I3ojmxNLCs2sovh8bCtlCof3w2JKdQ.jpeg?1724320618)

- 스토어 소유자는 커스텀 크기를 추가하거나 배송업체에서 제공하는 표준 택배 크기를 선택할 수 있습니다:

![패키지 크기 선택 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031484929/original/SAI4FwF5hN0mnjHUFP61W-qpK2B9rJQCCw.jpeg?1724320618)

- 배송업체에서 제공하는 표준 택배를 선택한 경우:

![표준 택배 크기 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031484942/original/G8XEjXrMjppeUZgquQEDiYCFFULLkNbicQ.jpeg?1724320622)

- 배송업체 제공 택배의 경우, 여기서 패키지 무게를 설정해야 합니다. 현재 템플릿을 기본값으로 설정하려면 체크박스를 체크하세요:

![패키지 무게 설정 및 기본 템플릿 지정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031484935/original/hujHmE5_k9_qLwew26fo5Q1O4s1Mty-p0g.jpeg?1724320619)

### 2.2. Shippo에서 배송 발송지 설정

- 발송자 및 반송 주소는 다음 경로에서 설정할 수 있습니다: Settings > Address book > Sender & return > Add New address

![발송자 및 반송 주소 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031484946/original/mEIlQFJzslFWGyj9W30zORtsNjJyyZZxyw.jpeg?1724320622)

- 완전한 주소를 추가하고 기본 발송자 및 반송 주소를 선택하세요(필요한 경우):

![주소 정보 입력 및 기본 주소 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031484945/original/WEATtb6w-tgtNpTwirQO425kD7orLhfgsQ.jpeg?1724320622)

### 2.3. Shippo에서 배송 옵션 설정

- 배송 옵션은 다음 경로에서 설정합니다: Settings > Shipping > Rates at Checkout > Add Shipping option

![배송 옵션 설정 경로](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031484950/original/ptqEV1YJfRAge8DK802-Hcg-Q_c7Kh8rnA.jpeg?1724320622)

- Live rate 옵션을 선택하고 원하는 배송업체 서비스를 선택하세요:

![Live rate 옵션 및 배송업체 서비스 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031484943/original/GIrcp5ZVkacT9blbI3Srvq6JFRrhkYLueA.jpeg?1724320622)

- 결제 페이지의 실시간 배송료는 배송 옵션에서 지정한 이름으로 표시됩니다

![결제 페이지 배송 옵션 표시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031484949/original/stEqJql6pd-TRHUAb4RpPdHMpf7EE-xsIQ.jpeg?1724320623)

# 3단계: 배송 설정에서 배송 발송지 설정

이커머스 스토어 빌더 애플리케이션에서 배송 발송지를 설정하세요. 이는 Shippo에서 주문 생성 시 발송자 주소로 간주됩니다. 다음 경로에서 접근할 수 있습니다: Payments(결제) > Settings(설정) > Shipping Origin(배송 발송지). 세부 정보를 추가하고 저장하세요.

참고: 실시간 배송료를 생성하려면 발송자 주소가 유효한 주소여야 합니다.

![배송 발송지 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035682182/original/PNu4Hk0mHsWYspzpBgBRIrNHhp0YCsX1LA.png?1730270244)

# 4단계: 마켓플레이스에서 Shippo 앱 설치

Leadconnector의 공식 Shippo 연동 기능을 사용하려면: App Marketplace(앱 마켓플레이스) > "Shippo: Shipping Integration" 검색 > Install(설치).

![Shippo 앱 마켓플레이스 설치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035682652/original/Hl0ZFzPHqpTgkZ1BezDiAyT0CyvD5MLsWA.jpeg?1730270883)

설치 완료 후, Live 토큰을 추가하여 계속 진행하세요.

![Live 토큰 입력 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035682340/original/bXrbZF_9z7qqW_dBacCBV8nX7iGRa6PrAQ.png?1730270464)

![Live 토큰 입력 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035682707/original/dl8Cnz3ntMASfLMVRxHPbR2nzjAm4T_W0Q.png?1730270948)

# 5단계: Shippo Live 토큰 입력 및 계속 진행

- 1단계에서 생성한 Live 토큰을 입력하세요:

![Live 토큰 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031484941/original/GkSk79hiTOVSpP6TuB4E0U2jmb1X-34tXw.jpeg?1724320622)

- Shippo에서 패키지 템플릿, 배송 발송지, 배송 옵션 설정을 완료한 후 배송에서 실시간 배송료를 활성화하세요:

![실시간 배송료 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031484948/original/bi_bHr9Q_tmdk-Db4JFHvzmWfm03UOtbOQ.jpeg?1724320623)

- Shippo에서 패키지 템플릿, 배송 발송지, 배송 옵션 설정 중 누락된 것이 있으면 다음 오류가 나타납니다:

![설정 누락 시 오류 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031484944/original/PPyyDxgklvVaL28g-LMgSpbtPsizJ5oXoA.jpeg?1724320622)

# 6단계: 실시간 배송료 활성화/비활성화

체크박스를 체크하거나 체크 해제하여 배송료를 활성화하거나 비활성화할 수 있습니다. 실시간 배송료를 활성화/비활성화한 후 Save(저장)를 클릭하세요.

![실시간 배송료 활성화/비활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035683099/original/R4fdoYyCrqypqE2Pg7kCbwDo8Im6hJkueA.png?1730271477)

# 7단계: 상품 무게 추가

이커머스 스토어에서 정확한 배송료를 제공하려면 상품 상세 페이지에서 상품 무게를 추가하는 것이 필수입니다. Payments(결제) > Products(상품) > Variants(변형) > Shipping & Delivery(배송 및 주문 처리) > Weight(무게)로 이동하세요. 상품에 여러 변형이 있다면 각 변형의 상세 페이지에서 개별적으로 무게를 지정해야 합니다. 이 단계는 결제 시 Shippo에서 실시간 배송료를 받기 위해 중요합니다. 그렇지 않으면 고정 배송료가 적용됩니다.

![상품 무게 설정 경로](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035683258/original/I7YOfyOJx3gPAV3kq6sqnQ_6YshtNnXr-A.png?1730271682)

![상품 무게 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035683365/original/HZ8DP5UNHnjVbbQc68Qkrdebg0BpPnXMLA.png?1730271764)

# 중요 참고사항:

- **Shippo 설정**: Shippo에서 배송 옵션, 패키지 템플릿, 발송자 및 수신자 주소를 구성하여 결제 시 실시간 배송료를 확인하세요. 배송 옵션과 패키지 템플릿이 설정된 경우에만 실시간 배송료를 활성화할 수 있습니다.

- **Live 토큰 생성**: 배송 처리 및 실시간 배송료를 위해 Shippo 계정을 이커머스 플랫폼에 연결하려면 Live 토큰만 사용할 수 있습니다.

- **상품 무게 추가**: 이커머스 스토어 플랫폼의 Payments(결제) > Products(상품) > Variants(변형) > Shipping & Delivery(배송 및 주문 처리) > Weight(무게) 경로에서 상품 상세 페이지에 상품 무게를 추가해야 합니다. 상품에 여러 변형이 있는 경우, 결제 시 Shippo에서 실시간 배송료를 받으려면 변형 상세 페이지에서 각 변형의 상품 무게를 정의해야 합니다. 그렇지 않으면 고정 배송료가 적용됩니다.

---
*원문 최종 수정: 2024년 10월 30일 오전 2시 15분*
*Hyperclass 사용 가이드 — hyperclass.ai*