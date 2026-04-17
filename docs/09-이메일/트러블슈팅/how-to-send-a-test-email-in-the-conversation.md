---

번역일: 2026-04-07
카테고리: 09-이메일 > 트러블슈팅
---

# 대화(Conversations)에서 테스트 이메일 보내는 방법

목차

- [테스트 연락처 생성](#테스트-연락처-생성)
- [테스트 이메일 발송](#테스트-이메일-발송)
- [발신자 이메일 설정](#발신자-이메일-설정)
  - [Mailgun을 사용하는 경우](#mailgun을-사용하는-경우)
  - [SMTP 연동을 사용하는 경우](#smtp-연동을-사용하는-경우)
- [이메일 전송 문제 해결](#이메일-전송-문제-해결)
- [이메일 답장이 돌아오지 않을 때](#이메일-답장이-돌아오지-않을-때)

## **테스트 연락처 생성**

- 에이전시 화면에서 좌측 상단의 **Click here to switch**를 클릭합니다
- 테스트할 하위 계정을 클릭합니다
- **연락처(Contacts)**를 클릭합니다

![테스트 연락처 생성 과정](https://i.ibb.co/zNV0S4V/2023-1-24-11-50-37.gif)

연락처 추가(Add Contact)를 클릭합니다

![연락처 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029821714/original/3CoAFhjjyHDlYZmB19SN0T_TqAK1e37VWA.jpg?1721834838)

이름(First name)과 이메일을 입력하고 저장(Save)을 클릭합니다

![연락처 정보 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029821818/original/I96Iz9MiMb85t_HZYfAbvYtTFXY5aptZcw.jpg?1721834890)

## **테스트 이메일 발송**

자동으로 대화 페이지로 이동됩니다. 아래쪽의 Send Email을 클릭합니다

![이메일 발송 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029821920/original/mO1ZsfTekzCkLub_fVoTZq3HSilwgaU1Rg.jpg?1721834939)

## **발신자 이메일 설정**

강조 표시된 부분에서 발신자 이메일 주소를 설정할 수 있습니다. [대량 이메일 발송 시 발신자 이메일 주소를 설정하는 방법은 여기를 확인하세요.](https://gohighlevelassist.freshdesk.com/support/solutions/articles/48000979925-masking-campaign-emails-from-name-address) 기본적으로는 현재 로그인한 사용자의 이메일 주소가 발신자로 표시됩니다.

![발신자 이메일 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029822266/original/ooUl9-PlqUjmPxfLAtVJujfPR5tACZMRDg.jpg?1721835184)

### **Mailgun을 사용하는 경우**

발신자 이메일을 testing@gmail.com 같이 마스킹하면, 답장 주소(reply-to address)는 testing@replies.subdomain.com으로 표시됩니다. 이는 에이전시 Settings(설정) → Email Services(이메일 서비스) → Location Settings(로케이션 설정)에서 하위 계정에 설정한 Mailgun 서브도메인입니다. 답장은 여전히 하이퍼클래스 하위 계정의 대화(Conversation) 탭에 정상적으로 나타납니다.

예를 들어, Mailgun 서브도메인이 [subdomain.gohighlevel.com](//subdomain.gohighlevel.com)이라면 답장 이메일 주소는 kate@subdomain.gohighlevel.com으로 표시됩니다

![Mailgun 서브도메인 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029822829/original/sIHHts5GEbn1g0b-ruhREN619Is0x-QMkA.jpg?1721835508)

이메일 전달성을 높이기 위해 [testing@subdomain.com](mailto:testing@subdomain.com)을 발신자 이메일 주소로 설정할 수 있습니다. 이렇게 하면 답장 주소 도메인이 발신자 이메일 주소와 일치하게 됩니다.

또한 [@replies.subdomain.com으로 끝나는 이메일을 수신하기 위해 콜드 인바운드 이메일](../기타/cold-email-inbound-setup.md)을 설정할 수도 있습니다.

### SMTP 연동(Integration)을 사용하는 경우:

하위 계정 **설정(Settings)** → 이메일 서비스(Email Services)로 이동합니다

SMTP로 연동된 강조 표시된 이메일을 복사하여 대화 탭에서 발신자 이메일로 사용합니다

![SMTP 이메일 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029823782/original/2kuSUuG1Pr11ztYDcKVm960c_D1TdBV7PQ.jpg?1721836209)

사용하는 SMTP 연동에 따라, 다른 이메일로 발송하기 위해 별칭/발신자 확인을 설정할 수 있습니다:

- [Google SMTP용 별칭 설정](../setting-alias-for-google-smtp.md)

- [Zoho SMTP용 별칭 설정](../using-zoho-as-your-smtp-provider.md)

- [Sendgrid로 발신자 이메일 확인](https://docs.sendgrid.com/ui/sending-email/senders)

## 이메일 전송 문제 해결:

이메일을 보낸 후 수신되지 않으면 스팸 폴더를 확인하세요.

대화 화면에 표시되는 오류의 경우, Mailgun API/SMTP 서버에서 받은 오류를 가져와서 표시합니다. 오류 아이콘을 클릭하여 전체 오류 메시지를 보면 이메일이 발송되지 않은 이유에 대한 세부 정보를 확인할 수 있습니다.

오류 메시지가 도움이 되지 않으면 SMTP 제공업체에 지원 티켓을 열어서 해당 이메일의 전달 상태를 문의하세요.

Mailgun을 사용하는 경우 [Mailgun 로그를 확인](../how-to-check-logs-for-a-specific-email-in-mailgun.md)하고 [이메일이 발송되지 않을 때 도움말](https://gohighlevelassist.freshdesk.com/support/solutions/articles/48000981687-emails-not-sending)을 참고하세요.

## **이메일 답장이 돌아오지 않을 때**

이메일을 받은 후 답장을 보내서 대화(Conversation) 탭에 답장이 나타나는지 확인해보세요. 답장이 나타나지 않으면 [이메일 답장이 대화로 돌아오지 않을 때](../../03-대화/기타/when-email-replies-are-not-coming-back-to-the-conversation.md) 해결 방법을 확인하세요.

---
*원문 최종 수정: Wed, 24 Jul, 2024 at 10:51 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*