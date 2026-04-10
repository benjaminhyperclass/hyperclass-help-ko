---

번역일: 2026-04-07
카테고리: 04-캘린더-예약 > 캘린더-설정
---

# 캘린더 예약에서 결제 받기

이제 예약(Appointment) 시 캘린더(Calendar) 결제가 가능합니다. 이 기능을 통해 고객이 특정 캘린더 예약을 할 때 결제를 받을 수 있습니다. 특히 예약 시 사전 결제가 필요한 비즈니스에 매우 유용한 기능입니다.

### 이 문서에서 다루는 내용:

- [사용 가능한 결제 제공업체와 추가 방법](#사용-가능한-결제-제공업체와-추가-방법)

### **사용 가능한 결제 제공업체와 추가 방법**

1. 캘린더 결제는 6개의 결제 게이트웨이를 지원합니다: Stripe, NMI, [**Authorize.net**](https://www.authorize.net/), Razorpay, Square, PayPal입니다.

참고: 이러한 결제 방법은 모든 캘린더 유형에서 결제를 받을 때 사용할 수 있습니다. 다만, Razorpay, NMI, Square는 현재 클래식 위젯(Classic Widget)과 서비스(Service) 메뉴에서는 지원되지 않습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033519978/original/63VZ1CmzvapFjUo7DsuLNJTUgpiRzwUDHg.png?1727262265)

2. 하위 계정(Sub-account)의 **결제(Payments) 탭** > 연동(Integrations)으로 이동하여 결제 게이트웨이를 먼저 추가하세요.

참고사항:
여러 게이트웨이를 연결하면 기본 결제 게이트웨이를 선택할 수 있는 드롭다운이 표시됩니다. **기본 결제 게이트웨이**만 결제 수집에 사용됩니다. 따라서 Stripe를 선택했다면 Stripe를 통해서만 결제가 처리됩니다.

3. 이제 캘린더 설정(Calendar Settings)으로 이동하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033521080/original/uFxtBz_v_b80OCe3k7My8k0RuceLbq9QBQ.png?1727262963)

3. 기존 캘린더를 편집(세 개 점 클릭)하거나 새 캘린더 생성(고급 설정(Advanced Settings))을 선택하세요. 폼 & 결제(Forms & Payments) 섹션에서 "결제 받기(Accept Payments)" 토글을 확인할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033521192/original/sqik4r-JwEgnavpFvMgALB5OJEcFd6CMGg.png?1727263051)

활성화하면 다음과 같은 새로운 폼 필드가 나타납니다:

- **금액(Amount)** (통화 포함)
- **설명(Description)**
- **결제 모드(Payment mode)** (테스트 또는 라이브)

참고: "테스트 또는 라이브" 토글이 활성화되면(오른쪽으로 전환) 캘린더가 라이브 모드(Live Mode)로 작동합니다. 비활성화되면(왼쪽으로 전환) 테스트 모드(Test Mode)로 유지됩니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045843011/original/VTDRnW10BGxy0xY9xAdwogayFefOWFSJsQ.jpeg?1745931481)

참고: 부분 결제는 반복 캘린더에서 작동하지 않습니다.

**중요!** 아래 스크린샷과 같은 결제 옵션이 보이지 않는다면, 아직 결제 게이트웨이를 연동하지 않았기 때문입니다. 위의 단계를 검토하여 캘린더용 결제 옵션을 활성화하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155006648060/original/I2_PFrdBEYb75fJtOwaUD6WR8wMsmpd7vA.png?1693595785)

### 결제 제공업체를 연동하는 방법은?

**Square:**

Square 연결은 다음 단계를 따라 하세요:

- Square 계정에 로그인하세요 - [https://app.squareup.com/login](https://app.squareup.com/login) 그리고 Square 사용자로 로그인 상태를 유지하세요.
- 그다음 GHL의 결제(Payments) 모듈 > 연동(Integrations)으로 이동하여 Square 라이브 모드(Square Live Mode)의 연결(Connect) 버튼을 클릭하세요. 자동으로 로그인된 계정을 선택하여 GHL에 연결됩니다!

**Razorpay** - [도움말 문서]([how-to-integrate-razorpay-within-the-crm](how-to-integrate-razorpay-within-the-crm.md))

---
*원문 최종 수정: Mon, 13 Oct, 2025 at 12:26 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*