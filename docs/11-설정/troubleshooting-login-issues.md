---

번역일: 2026-04-06
카테고리: 11-설정
---

# 로그인 문제 해결하기

#### 
2단계 인증(2FA) 코드를 받지 못하는 에이전시의 경우, [app.Hyperclass.com](//app.gohighlevel.com)에서 Google 계정으로 로그인을 시도해보세요.
![Google 계정 로그인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293030587/original/QzSePcEb_f0it3b2HgnTqQYoNk3wW5gh0Q.gif?1681742080)

#### 
이 가이드에서 다루는 내용:

- [오류: 현재 로그인할 수 없습니다](#오류-현재-로그인할-수-없습니다)
- [오류: 현재 보안 코드를 보낼 수 없습니다](#오류-현재-보안-코드를-보낼-수-없습니다)
- [오류: 이 에이전시에 사용자가 존재하지 않습니다](#오류-이-에이전시에-사용자가-존재하지-않습니다)
- [오류는 없지만 페이지가 리디렉션되지 않고 멈춤](#오류는-없지만-페이지가-리디렉션되지-않고-멈춤)
- [오류: 웹 서버에서 알 수 없는 오류 반환](#오류-웹-서버에서-알-수-없는-오류-반환)
- [Chrome에서 사이트 데이터 제거 방법](#chrome에서-사이트-데이터-제거-방법)
- [Safari에서 사이트 데이터 제거 방법](#safari에서-사이트-데이터-제거-방법)

## 오류: 현재 로그인할 수 없습니다

1. 사용 중인 인터넷 서비스 제공업체(ISP)를 확인하세요

Verizon Fios를 사용하는 경우, 다음에서 보안 기능을 비활성화할 수 있습니다:
[https://www.verizon.com/support/residential/internet/essentials/home-network-protection](https://www.verizon.com/support/residential/internet/essentials/home-network-protection)

CenturyLink를 사용하는 경우, 다음에서 보안 WiFi를 비활성화할 수 있습니다:
[https://kb.plu.edu/page.php?id=109248](https://kb.plu.edu/page.php?id=109248)

Survey Junkie를 이전에 사용한 적이 있다면, 제거하여 문제가 해결되는지 확인해보세요. 이 프로그램은 웹사이트의 모든 SSL 인증서를 업데이트합니다.

McAfee가 설치되어 있다면, 다음에서 웹 보안 기능을 끌 수 있습니다:
[https://www.help.k12.com/s/article/McAfee-Web-Protection-Enable-Disable](https://www.help.k12.com/s/article/McAfee-Web-Protection-Enable-Disable)

**Xfinity**를 사용하는 경우, 다음을 확인하세요:
[https://www.xfinity.com/support/articles/online-security-with-xfi-faqs](https://www.xfinity.com/support/articles/online-security-with-xfi-faqs)

**Spectrum**을 사용하는 경우, 다음에서 Security Shield를 끌 수 있습니다:
[https://www.spectrum.net/support/internet/security-shield](https://www.spectrum.net/support/internet/security-shield)

장기적인 해결책을 준비하고 있습니다. 사용자가 보안 웹사이트를 브라우징하는 한, 보안 기능을 끄는 것은 위험하지 않습니다.

2. 위의 ISP를 사용하지 않는 경우:

로그인을 시도할 때, 페이지를 검사하고 네트워크 탭을 열어서 전송되는 요청과 API 응답을 보여주는 Loom 영상을 만드세요.

[(888) 732-4197](tel:+18887324197)로 전화하여 티켓을 열고, 아래와 같은 Loom 영상을 보내주시면 더 자세히 살펴보겠습니다.

## 오류: 현재 보안 코드를 보낼 수 없습니다

![보안 코드 오류](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48208336001/original/hd-njyZxcCzRRNN6-YVAEahHCLRPy52sUQ.png?1648508301)

로그인을 시도하는 사용자의 전화번호를 추가할 수 있도록 에이전시 관리자에게 연락하여 2단계 인증 코드를 전화번호로 받을 수 있게 해달라고 요청하세요. 본인이 유일한 에이전시 관리자라면, [(888) 732-4197](tel:+18887324197)로 연락하여 사용자 전화번호를 업데이트해드리겠습니다.

이메일 인증이 작동하도록 하려면, 다음 영상을 보고 확인하세요:

관련 가이드: [[how-to-check-logs-for-a-specific-email-in-mailgun](../09-이메일/how-to-check-logs-for-a-specific-email-in-mailgun.md)]([how-to-check-logs-for-a-specific-email-in-mailgun](../09-이메일/how-to-check-logs-for-a-specific-email-in-mailgun.md)

1. 사용자 로그인 이메일이 무엇인가요?

2. 사용자가 스팸 폴더에서 "Login Security Code"라는 제목의 이메일을 확인했나요?

3. 회사 관계 번호가 무엇인가요? (에이전시 설정→회사 탭에서 확인)
[https://app.hyperclass.ai/settings/company](https://app.hyperclass.ai/settings/company)

4. 자체 SMTP를 사용하고 있나요, 아니면 Mailgun을 사용하고 있나요? (에이전시 설정에서 확인)

## 오류: 이 에이전시에 사용자가 존재하지 않습니다

화이트라벨 도메인을 통해 로그인을 시도할 때 이 오류가 나타나면, 해당 사용자가 화이트라벨 도메인 내의 해당 에이전시와 연결되어 있지 않다는 의미입니다.

## 오류는 없지만 페이지가 리디렉션되지 않고 멈춤

1. [app.Hyperclass.com](//app.gohighlevel.com)에서 쿠키가 허용되어 있는지 확인하세요

2. 여전히 멈춰있다면,

브라우징 활동/웹 보안을 제어하는 소프트웨어(예: NordVPN)가 있는지 확인하고, 있다면 끄거나 제거하여 작동하는지 확인해보세요. 이는 웹사이트의 모든 SSL 인증서를 업데이트합니다.

상단 왼쪽의 자물쇠 아이콘을 클릭 > "Connection is secure"를 클릭하여 자세한 정보 확인

![연결 보안 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48214923808/original/-cxhH_s5-wD5i533clkajJDXXS-nWRfEJQ.png?1649784344)

"Certificate is valid"를 클릭

![인증서 유효성 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48214923894/original/Ie7DvglOBiQVnPX-4v84FPweKZMWaG33Rw.png?1649784361)

여기서 "Issued by: NordVPN"으로 표시될 수 있으며, 이는 페이지 로딩을 차단한다는 의미입니다.

![NordVPN 인증서](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243261263/original/iaR5OJAROGTw8h558Xa35v-A-F_51NqqKA.png?1659647486)

## 오류: 웹 서버에서 알 수 없는 오류 반환

![알 수 없는 오류](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022406517/original/CPkUVWpbRCE5CQKFm4BCm9BLdKkw0VV7UQ.png?1709769021)

이 오류를 해결하려면 사이트 데이터를 삭제해야 합니다.

### Chrome에서 사이트 데이터 제거 방법:

1. Chrome에서 브라우저를 우클릭하고 페이지 요소를 검사하세요.
![Chrome 요소 검사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022406701/original/AV0Fvm6rnoOYjuzJ5KTu0PmBf9A60QhTaA.png?1709769573)

2. 상단 메뉴에서 Applications를 클릭하고 왼쪽 네비게이션 메뉴에서 Storage 옵션에 접근하세요

3. 화면 중앙에서 "Clear Site Data" 옵션을 확인할 수 있습니다:

![사이트 데이터 삭제](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022406765/original/dVbD6_BoWBFbPRBvNHEZb8UEqddug13kOA.png?1709769796)

4. 브라우저를 새로고침하고 다시 시도하세요. 여전히 로그인할 수 없다면, 지원팀에 문의하세요: [[[live-24-7-Hyperclass-support-](../36-기타/리커버리/live-24-7-highlevel-support-.md)]]

### Safari에서 사이트 데이터 제거 방법:

1. Safari에서는 먼저 개발자 도구를 활성화해야 합니다. Safari를 클릭한 다음 설정을 클릭하여 브라우저 설정에 접근하세요

![Safari 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022407042/original/1OSg0GE1md89bgWQXUwH_xZ_PDlZ219rGA.png?1709770518)

2. 상단 메뉴에서 Advanced를 클릭하고 "show features for web developers" 체크박스를 활성화하세요

![개발자 기능 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022407093/original/HXh6bsHxuIta5cRAhMo2M8bK-D2oOsqkhA.png?1709770665)

3. 웹 개발자 기능이 활성화되면, 페이지를 우클릭하고 페이지 요소를 검사하세요.

![Safari 요소 검사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022407103/original/U7On6mcbyLggi0jhoGTdO0wNAPQTUq-AOg.png?1709770736)

4. 이 창에서 먼저 메뉴 상단의 Storage를 선택한 다음, Local Storage 아래에 나열된 사이트를 찾아서 휴지통 아이콘을 선택하여 데이터를 삭제하세요.

![로컬 스토리지 삭제](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022407114/original/0vJPTlj6kLu2t92xPgEfgThlhYixP8FEqg.png?1709770754)

5. 브라우저를 새로고침하고 다시 시도하세요. 여전히 로그인할 수 없다면, 지원팀에 문의하세요: [[[live-24-7-Hyperclass-support-](../36-기타/리커버리/live-24-7-highlevel-support-.md)]]

---
*원문 최종 수정: Thu, 10 Jul, 2025 at 3:18 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*