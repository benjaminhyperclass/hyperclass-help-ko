---
원문: /support/solutions/articles/48001207047-troubleshooting-login-issues
번역일: 2026-11-06
카테고리: 11-설정
---

# 로그인 문제 해결

하이퍼클래스에 로그인할 때 오류가 나거나 화면이 넘어가지 않을 때 원인을 찾아 해결하는 방법을 오류별로 정리했어요.

{% hint style="info" %}
에이전시 사용자가 2단계 인증(2FA) 코드를 받지 못한다면 Google 계정으로 로그인해 보세요.
{% endhint %}

---

## 오류: "Unable to log you in at this time"(지금은 로그인할 수 없어요)

1. 사용 중인 인터넷 서비스 제공업체(ISP)와 보안 프로그램을 확인하세요.

   - **Verizon Fios**를 쓴다면 아래 페이지에서 보호 기능을 끌 수 있어요.

     <https://www.verizon.com/support/residential/internet/essentials/home-network-protection>

   - **CenturyLink**를 쓴다면 아래 페이지에서 보안 Wi-Fi를 끌 수 있어요.

     <https://kb.plu.edu/page.php?id=109248>

   - **Survey Junkie**를 설치한 적이 있다면 삭제한 뒤 로그인이 되는지 확인하세요. 이 프로그램은 웹사이트의 SSL 인증서를 모두 바꿔 버려요.

   - **McAfee**가 설치되어 있다면 아래 페이지에서 웹 보호를 끌 수 있어요.

     <https://www.help.k12.com/s/article/McAfee-Web-Protection-Enable-Disable>

   - **xfinity**를 쓴다면 아래 페이지를 확인하세요.

     <https://www.xfinity.com/support/articles/online-security-with-xfi-faqs>

   - **Spectrum**을 쓴다면 아래 페이지에서 Security Shield를 끌 수 있어요.

     <https://www.spectrum.net/support/internet/security-shield>

   하이퍼클래스에서 장기적인 해결 방법을 준비하고 있어요. 그동안 기기에서 보안 웹사이트만 이용한다면 보호 기능을 꺼도 위험하지 않을 거예요.

2. 위에 해당하는 ISP나 프로그램을 쓰지 않는다면 다음과 같이 해 주세요.

   1. 로그인을 시도하는 화면에서 페이지를 검사(Inspect)해요.
   2. Network 탭을 열어요.
   3. 전송되는 요청을 Loom으로 녹화하고, API 응답이 보이게 해 주세요.
   4. [하이퍼클래스 고객지원](../20-고객지원/General-Support-Info/24-7-customer-support-options.md)에 문의해 티켓을 열고, 아래 영상처럼 녹화한 Loom 영상을 보내 주세요.

---

## 오류: "Not able to send the security code at this time"(지금은 보안 코드를 보낼 수 없어요)

![보안 코드를 보낼 수 없다는 오류 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48208336001/original/hd-njyZxcCzRRNN6-YVAEahHCLRPy52sUQ.png?1648508301)

로그인하려는 사용자에게 2FA 코드를 문자로 보내려면 사용자 전화번호가 등록되어 있어야 해요. 에이전시 관리자에게 해당 사용자의 전화번호를 추가해 달라고 요청하세요. 에이전시 관리자가 본인뿐이라면 [하이퍼클래스 고객지원](../20-고객지원/General-Support-Info/24-7-customer-support-options.md)에 문의해 주세요. 사용자 전화번호를 대신 업데이트해 드려요.

이메일 인증이 되지 않을 때는 아래 영상을 참고하세요.

관련 문서: [Mailgun에서 특정 이메일의 로그 확인하기](../09-이메일/how-to-check-logs-for-a-specific-email-in-mailgun.md)

아래 내용을 차례로 확인해 보세요.

1. 사용자의 로그인 이메일 주소가 무엇인가요?
2. 사용자가 스팸 메일함에서 "Login Security Code"라는 제목의 이메일을 확인했나요?
3. 회사 관계 번호(company relationship number)가 무엇인가요? 에이전시의 **설정 > 회사** 탭에서 확인할 수 있어요.
4. 자체 SMTP를 쓰나요, Mailgun을 쓰나요? 에이전시 **설정**에서 확인하세요.

---

## 오류: "User does not exist in this Agency"(이 에이전시에 없는 사용자예요)

화이트라벨 도메인으로 로그인하는 중에 이 오류가 나온다면, 그 사용자가 해당 화이트라벨 도메인의 에이전시에 속해 있지 않다는 뜻이에요.

---

## 오류 메시지 없이 페이지가 넘어가지 않고 멈출 때

1. 하이퍼클래스 접속 주소에서 쿠키가 허용되어 있는지 확인하세요.

2. 그래도 멈춰 있다면 NordVPN처럼 브라우징 활동이나 웹 보호를 제어하는 소프트웨어를 쓰고 있는지 확인하세요. 있다면 **끄거나 삭제**한 뒤 로그인이 되는지 확인하세요. 이런 소프트웨어는 웹사이트의 SSL 인증서를 모두 바꿔 버려요.

   확인하는 방법은 다음과 같아요.

   1. 브라우저 주소창 왼쪽 위의 자물쇠 아이콘을 클릭해요.
   2. **Connection is secure**(연결이 안전함)를 클릭해 자세한 정보를 펼쳐요.

   ![자물쇠 아이콘을 눌러 연결 정보를 펼친 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48214923808/original/-cxhH_s5-wD5i533clkajJDXXS-nWRfEJQ.png?1649784344)

   3. **Certificate is valid**(인증서가 유효함)를 클릭해요.

   ![인증서 정보를 확인하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48214923894/original/Ie7DvglOBiQVnPX-4v84FPweKZMWaG33Rw.png?1649784361)

   여기에 **Issued by: NordVPN**(발급자: NordVPN)이 보이면 NordVPN이 페이지 로딩을 막고 있는 거예요.

   [![발급자가 NordVPN으로 표시된 인증서 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243261263/original/iaR5OJAROGTw8h558Xa35v-A-F_51NqqKA.png?1659647486)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48214924256/original/KrSfiqBXakxpAqeRFjXGNwbDJGBtmp5Kyg.png?1649784415)

---

## 오류: "Web server is returning an Unknown Error"(웹 서버에서 알 수 없는 오류가 발생했어요)

이 오류는 사이트 데이터를 지우면 해결돼요.

### Chrome에서 사이트 데이터 지우기

1. 브라우저 화면에서 마우스 오른쪽 버튼을 클릭하고 페이지 요소를 검사(Inspect)해요.
2. 위쪽 메뉴에서 **Applications**(애플리케이션)를 클릭하고, 왼쪽 메뉴에서 **Storage**(저장소)를 선택해요.
3. 화면 가운데에 **Clear Site Data**(사이트 데이터 지우기) 옵션이 보여요. 이 옵션으로 사이트 데이터를 지우세요.

   ![Chrome에서 사이트 데이터를 지우는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022406765/original/dVbD6_BoWBFbPRBvNHEZb8UEqddug13kOA.png?1709769796)

4. 브라우저를 새로고침하고 다시 로그인해 보세요. 그래도 로그인할 수 없다면 [하이퍼클래스 고객지원](../20-고객지원/General-Support-Info/24-7-customer-support-options.md)에 문의하세요.

### Safari에서 사이트 데이터 지우기

1. Safari에서는 먼저 개발자 도구를 켜야 해요. Safari 메뉴에서 설정을 열어 주세요.

   ![Safari 메뉴에서 설정을 여는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022407042/original/1OSg0GE1md89bgWQXUwH_xZ_PDlZ219rGA.png?1709770518)

2. 위쪽 메뉴에서 **Advanced**(고급)를 클릭하고 "show features for web developers"(웹 개발자용 기능 보기) 체크박스를 켜세요.

   ![고급 설정에서 웹 개발자용 기능을 켜는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022407093/original/HXh6bsHxuIta5cRAhMo2M8bK-D2oOsqkhA.png?1709770665)

3. 웹 개발자용 기능을 켰다면 페이지에서 마우스 오른쪽 버튼을 클릭하고 페이지 요소를 검사(Inspect)해요.

   ![페이지 요소를 검사하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022407103/original/U7On6mcbyLggi0jhoGTdO0wNAPQTUq-AOg.png?1709770736)

4. 열린 창 위쪽 메뉴에서 **Storage**(저장소)를 선택해요. **Local Storage** 아래에서 해당 사이트를 찾아 휴지통 아이콘을 클릭하면 데이터가 지워져요.

   ![Local Storage에서 휴지통 아이콘으로 데이터를 지우는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022407114/original/0vJPTlj6kLu2t92xPgEfgThlhYixP8FEqg.png?1709770754)

5. 브라우저를 새로고침하고 다시 로그인해 보세요. 그래도 로그인할 수 없다면 [하이퍼클래스 고객지원](../20-고객지원/General-Support-Info/24-7-customer-support-options.md)에 문의하세요.
