---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# 캘린더 결제 수집하기

이제 예약 시 캘린더 결제(Calendar Payments) 기능을 사용할 수 있습니다. 이 기능을 통해 고객이 특정 캘린더 예약을 할 때 결제를 받을 수 있습니다. 예약 시 결제가 필요한 비즈니스에게 매우 유용한 기능입니다.

### 이 가이드의 내용:

- [지원되는 결제 업체 및 추가 방법](#지원되는-결제-업체-및-추가-방법)

### **지원되는 결제 업체 및 추가 방법**

1. 캘린더 결제는 6개의 결제 게이트웨이를 통해 지원됩니다: Stripe, NMI, [**Authorize.net**](https://www.authorize.net/), Razorpay, Square, PayPal입니다.

**참고:** 모든 캘린더 유형에서 이러한 결제 방법을 사용할 수 있습니다. 단, Razorpay, NMI, Square는 현재 클래식 위젯과 서비스 메뉴에서는 지원되지 않습니다.

![결제 게이트웨이 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033519978/original/63VZ1CmzvapFjUo7DsuLNJTUgpiRzwUDHg.png?1727262265)

2. 하위 계정에서 **Payments(결제) 탭** > Integrations(연동)으로 이동하여 먼저 결제 게이트웨이를 추가하세요.

**참고:** 
여러 게이트웨이를 연결하면 기본 결제 게이트웨이를 선택하는 드롭다운이 표시됩니다. **기본 결제 게이트웨이**만 결제 수집에 사용됩니다. 예를 들어 Stripe를 선택하면 Stripe를 통해서만 결제가 처리됩니다.

3. 이제 Calendar Settings(캘린더 설정)으로 이동하세요.

![캘린더 설정 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033521080/original/uFxtBz_v_b80OCe3k7My8k0RuceLbq9QBQ.png?1727262963)

3. 기존 캘린더를 편집하거나(점 3개 아이콘 클릭) 새 캘린더를 생성하세요(고급 설정). Forms & Payments(폼 및 결제) 섹션에서 "Accept Payments(결제 받기)" 토글을 찾을 수 있습니다.

![결제 받기 토글 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033521192/original/sqik4r-JwEgnavpFvMgALB5OJEcFd6CMGg.png?1727263051)

활성화하면 다음 폼 필드가 나타납니다:

- **Amount(금액)** (통화 포함)
- **Description(설명)**
- **Payment mode(결제 모드)** (테스트 또는 라이브)

**참고:** "Test or Live(테스트 또는 라이브)" 토글이 활성화(우측으로 전환)되면 캘린더가 라이브 모드로 작동합니다. 비활성화(좌측으로 전환)되면 테스트 모드로 유지됩니다.

![결제 모드 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045843011/original/VTDRnW10BGxy0xY9xAdwogayFefOWFSJsQ.jpeg?1745931481)

**참고:** 부분 결제는 반복 캘린더에서는 작동하지 않습니다.

**주의하세요!** 아래 스크린샷과 같은 결제 옵션이 보이지 않는다면, 아직 결제 게이트웨이를 연동하지 않았기 때문입니다. 캘린더 결제 옵션을 활성화하려면 위의 단계를 검토하세요.

![결제 옵션이 없는 경우](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155006648060/original/I2_PFrdBEYb75fJtOwaUD6WR8wMsmpd7vA.png?1693595785)

### 결제 업체는 어떻게 연동하나요?

**Square:**

Square와 연결하려면 다음 단계를 따르세요:

- Square 계정에 로그인하세요 - [https://app.squareup.com/login](https://app.squareup.com/login) 그리고 Square 사용자로 로그인 상태를 유지하세요.
- 그다음 Hyperclass의 Payments(결제) 모듈 > Integrations(연동)으로 가서 Square Live Mode의 Connect(연결) 버튼을 클릭하세요. 로그인된 계정이 자동으로 선택되어 Hyperclass과 연결됩니다!

**Razorpay** - [도움말 문서](../../08-결제/결제-연동/how-to-integrate-razorpay-within-the-crm.md)

---
*원문 최종 수정: Mon, 13 Oct, 2025 at 12:26 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*