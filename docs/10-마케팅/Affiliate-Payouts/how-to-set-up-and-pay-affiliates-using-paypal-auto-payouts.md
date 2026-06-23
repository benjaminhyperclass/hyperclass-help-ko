---

번역일: 2026-04-07
카테고리: 10-마케팅 > 제휴 지급
---

# PayPal 자동 지급을 이용한 제휴 파트너 설정 및 지급 방법

## **PayPal 자동 지급을 이용한 제휴 파트너 설정 및 지급 방법**

이 가이드는 PayPal Payouts API를 Hyperclass과 연동하여 플랫폼에서 직접 제휴 파트너에게 수수료를 지급하는 방법을 설명합니다. 현재 자동 지급에서는 PayPal만 지원되며, 이 문서에서는 설정 과정과 제휴 파트너 지급 방법을 단계별로 안내합니다.

---

## **필요 조건:**

- PayPal 비즈니스 계정
- PayPal 계정에서 Payouts 기능이 활성화되어야 합니다. 아래 단계에 따라 활성화하세요.
---

## **1. 자동 지급을 위한 PayPal 설정**
제휴 파트너에게 지급을 시작하기 전에, Hyperclass과 원활하게 연동할 수 있도록 PayPal Payouts을 설정해야 합니다.


### **1단계: PayPal 개발자 페이지 접속**

- PayPal Developers 페이지로 이동하세요.
- 우측 상단의 **"Log into dashboard"** 링크를 클릭하여 개발자 대시보드에 로그인하세요.


### **2단계: Payouts 활성화**

- 대시보드에서 우측 상단의 **My Account**를 클릭하세요.
- **Permissions** 테이블로 스크롤을 내려서 Live 컬럼 아래 "Payouts"에 초록색 체크마크가 있는지 확인하세요.
- 체크마크가 없다면 **Enable**을 클릭하고 안내를 따르세요. Payouts API 활성화를 위해 PayPal에 문의해야 할 수도 있습니다.
![PayPal Payouts 권한 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810844/original/M0FUGYqV_uHTNxz7mYFUIx-WSXCl0HklOA.jpeg?1727706478)


### **3단계: PayPal에서 앱 생성**

- 좌측 메뉴에서 **Apps and Credentials**를 클릭하세요.
- **Live**를 클릭한 후 **Create App**으로 진행하세요.
![PayPal 앱 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810841/original/NSoegoc40tjXesKnIpetO1w650hVCA4n0A.jpeg?1727706478)


- 앱 이름으로 "Hyperclass Payouts"을 입력하고 **Create App**을 클릭하세요.
- 이미 앱이 생성되어 있다면 이 단계를 건너뛰셔도 됩니다.
참고: 앱 생성 후 우측 상단에 "Live/Sandbox"가 표시되면 "Live"가 선택되어 있는지 확인하세요.
### **4단계: 앱 정보 획득**

- 앱 생성 후 **Client ID**와 **Secret Key**가 제공됩니다.
![PayPal 클라이언트 ID와 시크릿 키](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810831/original/iyCmqdpvQr0Po9cIE2PEy3XnYzAdeNfX7A.jpeg?1727706478)

- Hyperclass과 PayPal 연동에 필요하므로 이 정보를 보관해두세요.


### **5단계: Hyperclass과 PayPal 연결**

- Hyperclass의 **Payment Integration(결제 연동)** 페이지로 이동하세요.
![결제 연동 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810837/original/1cRVuJLXOqaIcSDV-kHzH4jJ16Jv90C-xA.jpeg?1727706478)


- PayPal 섹션까지 스크롤을 내리고 **Manage(관리)**를 클릭하세요.
- 4단계에서 얻은 Live **Client ID**와 **Secret Key**를 입력하세요.
![PayPal 크리덴셜 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810833/original/2w5UqQ6Z-a96ulgfVBx3i5xuOpQpIoC0Tw.jpeg?1727706478)


- 샌드박스에서 테스트하는 경우, PayPal의 Apps and Credentials 페이지에서 "Sandbox"가 선택되었는지 확인하고 샌드박스 크리덴셜로 동일한 과정을 반복하세요.
## **2. 제휴 파트너 지급에 PayPal 사용하기**

PayPal 설정이 완료되면 이제 Hyperclass의 자동 지급 기능을 사용하여 제휴 파트너에게 수수료를 지급할 수 있습니다.


### **1단계: 지급 페이지로 이동**

- Hyperclass 제휴 관리(Affiliate Manager)에서 **Payouts(지급)** 페이지로 이동하세요.
### **2단계: 승인된 지급 확인**

- **Approved for Payouts(지급 승인됨)** 탭으로 전환하여 지급 대기 중인 승인된 결제 목록을 확인하세요.
![승인된 지급 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810832/original/dVZ30ePq70b82bEEZmQdPLgqfQY5bo5SHQ.jpeg?1727706478)


### **3단계: 지급할 제휴 파트너 선택**

- 지급하고자 하는 지급 건 또는 제휴 파트너 이름 옆의 체크박스를 선택하세요.
### **4단계: 지급 실행**

- 제휴 파트너를 선택한 후 **Pay(지급)** 버튼을 클릭하여 여러 제휴 파트너에게 한 번에 지급하세요.
![일괄 지급 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810834/original/oRxnWIS4e36B_hYucBxsEhnFj0mLn7CoNA.jpeg?1727706478)


- 또는 제휴 파트너 이름 옆의 파란색 **Pay(지급)** 아이콘을 클릭하여 개별적으로 지급할 수도 있습니다.
![개별 지급 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810839/original/wfhn3fMEF1MCCfPHgG2P6G2sKQLD7J-2nw.jpeg?1727706478)


### **5단계: 검토 및 확인**

- 선택한 지급 건을 검토하고 세부 사항을 확인하세요.
![지급 세부사항 검토](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810835/original/2evoYu3FtiYxTDnw0yGN41Gr34CZ9wzW2A.jpeg?1727706478)


- **Pay Now(지금 지급)**를 클릭하여 송금을 실행하세요.**중요:** 
PayPal 비즈니스 계정이 연결되지 않은 경우, 계정 연결을 요구하는 오류 메시지가 표시됩니다.
![PayPal 계정 연결 필요](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810843/original/NsDNIWym5yNCrCmJRCc0bJ8moQXIQb-W9A.jpeg?1727706478)


### **지급 후 어떻게 될까요?**

- **Pay Now(지금 지급)**를 클릭한 후, 성공한 지급은 **Paid(지급 완료)** 탭에 나타납니다.
![지급 완료 상태](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810836/original/z7D8OJHJo_IhkUFdoZeCwvkdBnA868XC7Q.jpeg?1727706478)

- PayPal에서 결제 처리에 시간이 걸릴 수 있으며, 그 동안 상태가 "Pending(대기 중)"으로 표시될 수 있습니다. 페이지를 새로고침하여 업데이트를 확인하세요.
![지급 대기 상태](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810840/original/8uZSr5yeQwokBZryI6uBibEOPzgwYlW1GA.jpeg?1727706478)


- 지급이 성공적으로 완료되면 관리자(발송인)와 제휴 파트너(수신인) 모두에게 확인 이메일이 전송됩니다.
![지급 확인 이메일](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810838/original/7I68WjZN_QiyXmlorBKoXKvXx7DyFZNuRQ.jpeg?1727706478)

## **3. 지급을 위한 제휴 파트너의 PayPal 계정 추가 방법**

제휴 파트너에게 지급하기 전에 PayPal 정보가 연결되어 있는지 확인하세요. 제휴 파트너의 PayPal 계정을 추가하거나 연결하는 방법을 알아보려면 [여기를 클릭하세요.](how-to-add-link-a-new-payout-method-for-affiliates.md)
![제휴 파트너 PayPal 계정 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810842/original/Ie3iDrFMfWrXLJci_SE9_0LVg6wWPN-G_A.jpeg?1727706478)


---

## 다음 단계:

- [제휴 관리에서 상품 판매에 지원되는 결제 게이트웨이는?](what-payment-gateways-supported-in-affiliate-manager-for-product-sales-.md)
- [제휴 지급 FAQ](faqs-for-affiliate-payouts.md)
- [지급을 위한 제휴 파트너의 PayPal 계정 추가/연결 방법](../../21-어필리에이트/기타/how-to-add-link-affiliate-s-paypal-account-for-payouts.md)

---
*원문 최종 수정: Tue, 1 Oct, 2024 at 5:32 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*