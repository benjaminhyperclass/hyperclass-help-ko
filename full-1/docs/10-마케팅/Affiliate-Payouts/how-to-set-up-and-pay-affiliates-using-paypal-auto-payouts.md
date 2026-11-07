---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003658-set-up-and-pay-affiliates-using-paypal-auto-payouts
번역일: 2026-11-06
카테고리: 10-마케팅
---

# PayPal 자동 지급으로 제휴 파트너에게 수익금 지급하기

하이퍼클래스에서 PayPal Payouts API를 설정하고, **제휴 관리자**(Affiliate Manager)에서 PayPal 자동 지급으로 제휴 파트너에게 바로 지급하는 방법을 안내해요. 자동 지급은 PayPal만 지원해요. 은행 등 다른 결제 수단은 직접 처리해야 해요.

[동영상](https://www.youtube.com/embed/b036kbYxJtY?&wmode=opaque)

---

## 요구 사항

- PayPal **비즈니스 계정**(Business Account)
- PayPal 계정에서 Payouts가 활성화되어 있어야 해요. 아래 단계에 따라 활성화하세요.

PayPal로 지급받는 제휴 파트너는 **제휴 관리자**에 올바른 PayPal 지급 방법이 설정되어 있어야 해요.

---

## 1. 자동 지급을 위한 PayPal 설정

제휴 파트너에게 지급하려면 먼저 하이퍼클래스와 연동되도록 PayPal Payouts를 설정해야 해요.

[동영상](https://www.loom.com/embed/a5a4cc5c025f4c0fbdedea84686581fe?sid=33818a61-d283-4ed4-baf7-d5688cd5fef0)

### 1단계: PayPal Developers 페이지 열기

1. PayPal Developers 페이지로 이동하세요.
2. 오른쪽 위의 **Log into dashboard**(대시보드 로그인) 링크를 클릭해 개발자 대시보드에 로그인하세요.

### 2단계: Payouts 활성화

1. 대시보드 오른쪽 위에서 **My Account**(내 계정)를 클릭하세요.
2. 아래로 스크롤해 **Permissions**(권한) 표에서 "Payouts"의 **Live**(라이브) 열에 초록색 체크 표시가 있는지 확인하세요.
3. 체크 표시가 없으면 **Enable**(활성화)을 클릭하고 안내에 따라 진행하세요. Payouts API를 활성화하려면 PayPal에 문의해야 할 수도 있어요.

   ![PayPal 대시보드의 권한 표에서 Payouts 활성화 여부 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810844/original/M0FUGYqV_uHTNxz7mYFUIx-WSXCl0HklOA.jpeg?1727706478)

### 3단계: PayPal에서 앱 만들기

1. 왼쪽 메뉴에서 **Apps and Credentials**(앱 및 자격 증명)를 클릭하세요.
2. **Live**(라이브)를 클릭한 뒤 **Create App**(앱 만들기)을 클릭하세요.

   ![PayPal에서 Live를 선택하고 앱 만들기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810841/original/NSoegoc40tjXesKnIpetO1w650hVCA4n0A.jpeg?1727706478)
3. "하이퍼클래스 Payouts"처럼 알아보기 쉬운 앱 이름을 입력하고 **Create App**을 클릭하세요.
4. 이미 만들어 둔 앱이 있다면 이 단계는 건너뛰어도 돼요.

{% hint style="info" %}
앱을 만든 뒤 오른쪽 위에 "Live/Sandbox"가 보이면 "Live"가 선택되어 있는지 확인하세요.
{% endhint %}

### 4단계: 앱 정보 확인

1. 앱을 만들면 **Client ID**(클라이언트 ID)와 **Secret Key**(시크릿 키)가 표시돼요.

   ![PayPal 앱의 Client ID와 Secret Key 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810831/original/iyCmqdpvQr0Po9cIE2PEy3XnYzAdeNfX7A.jpeg?1727706478)
2. 하이퍼클래스와 PayPal을 연결할 때 필요하니 두 값을 따로 잘 보관해 두세요.

### 5단계: 하이퍼클래스와 PayPal 연결

1. 하이퍼클래스에서 **결제 > 연동**으로 이동해 **PayPal**을 선택하세요.

   ![결제 연동 화면에서 PayPal 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810837/original/1cRVuJLXOqaIcSDV-kHzH4jJ16Jv90C-xA.jpeg?1727706478)
2. 4단계에서 확인한 PayPal 개발자 계정의 라이브용 **클라이언트 ID**와 **Secret Key**를 입력하세요.

   ![PayPal 클라이언트 ID와 Secret Key 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810833/original/2w5UqQ6Z-a96ulgfVBx3i5xuOpQpIoC0Tw.jpeg?1727706478)
3. 샌드박스에서 테스트하려면 같은 과정을 샌드박스 자격 증명으로 다시 진행하세요. 이때 PayPal의 **Apps and Credentials** 페이지에서 **Sandbox**(샌드박스)가 선택되어 있어야 해요.

---

## 2. PayPal로 제휴 파트너에게 지급하기

PayPal 설정을 마쳤다면 하이퍼클래스의 자동 지급 기능으로 제휴 파트너에게 지급할 수 있어요.

### 1단계: 지급 페이지 열기

1. **제휴 관리자**에서 **지급** 페이지로 이동하세요.

### 2단계: 승인된 지급 확인

1. 제휴 파트너 지급 건은 먼저 **대기 중** 탭에 생성돼요. 지급 대상인 건을 검토하고 승인하면 **Approved for Payout**(지급 승인됨)으로 넘어가요.
2. **Approved for Payout** 탭으로 이동하면 승인되어 지급을 기다리는 목록을 볼 수 있어요.

   ![지급 승인됨 탭의 승인된 지급 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810832/original/dVZ30ePq70b82bEEZmQdPLgqfQY5bo5SHQ.jpeg?1727706478)

### 3단계: 지급할 제휴 파트너 선택

1. 지급할 건이나 제휴 파트너 이름 옆의 체크박스를 선택하세요.

### 4단계: 지급 시작

{% hint style="warning" %}
제휴 파트너 지급을 시작하려면 **Pay Affiliate Manager Payout**(제휴 매니저 지급 결제) 권한이 있어야 해요. 이 권한이 없으면 **결제** 동작이 숨겨져요.
{% endhint %}

1. 제휴 파트너를 선택한 뒤 **결제** 버튼을 클릭하면 여러 명에게 한 번에 지급할 수 있어요.

   ![여러 제휴 파트너를 선택한 뒤 결제 버튼 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810834/original/oRxnWIS4e36B_hYucBxsEhnFj0mLn7CoNA.jpeg?1727706478)
2. 한 명에게만 지급하려면 제휴 파트너 이름 옆의 파란색 **결제** 아이콘을 클릭하세요.

   ![제휴 파트너 이름 옆의 파란색 결제 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810839/original/wfhn3fMEF1MCCfPHgG2P6G2sKQLD7J-2nw.jpeg?1727706478)

### 5단계: 내용 확인 후 지급

1. 선택한 지급 내역을 검토하고 세부 정보를 확인하세요.

   ![선택한 지급 내역 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810835/original/2evoYu3FtiYxTDnw0yGN41Gr34CZ9wzW2A.jpeg?1727706478)
2. **지금 결제**를 클릭해 송금을 시작하세요.

{% hint style="warning" %}
PayPal 비즈니스 계정이 연결되어 있지 않으면 계정을 연결하라는 오류 메시지가 나타나요.

![PayPal 비즈니스 계정 연결을 안내하는 오류 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810843/original/NsDNIWym5yNCrCmJRCc0bJ8moQXIQb-W9A.jpeg?1727706478)
{% endhint %}

### 지급 후에는 어떻게 되나요?

1. **지금 결제**를 클릭하면 지급이 완료된 건이 **유료** 탭에 표시돼요.

   ![유료 탭에 표시된 지급 완료 건](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810836/original/z7D8OJHJo_IhkUFdoZeCwvkdBnA868XC7Q.jpeg?1727706478)
2. 지급이 정상적으로 시작되면 해당 건은 **유료** 상태로 넘어가요. 송금이 끝나기 전까지 PayPal에서는 처리 중이거나 대기 중으로 보일 수 있어요.

   ![PayPal에서 처리 중으로 표시된 지급 상태](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810840/original/8uZSr5yeQwokBZryI6uBibEOPzgwYlW1GA.jpeg?1727706478)
3. 지급이 완료되면 관리자(보내는 사람)와 제휴 파트너(받는 사람) 모두에게 확인 이메일이 발송돼요.

   ![지급 완료 확인 이메일](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810838/original/7I68WjZN_QiyXmlorBKoXKvXx7DyFZNuRQ.jpeg?1727706478)

---

## 3. 지급받을 제휴 파트너의 PayPal 계정 추가하기

제휴 파트너의 PayPal 이메일 주소를 꼼꼼히 확인하세요. PayPal은 API를 통해 제휴 파트너의 이메일 주소가 맞는지 검증하지 않아요. 제휴 파트너의 PayPal 계정을 추가하거나 연결하는 방법은 "How to add/link Affiliate's Paypal Account for Payouts" 문서를 참고하세요.

![제휴 파트너의 PayPal 계정 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033810842/original/Ie3iDrFMfWrXLJci_SE9_0LVg6wWPN-G_A.jpeg?1727706478)
