---
원문: https://help.gohighlevel.com/support/solutions/articles/48001208887-how-to-send-a-test-email-in-the-conversation
번역일: 2026-11-06
카테고리: 09-이메일
---

# 대화에서 테스트 이메일 보내기

테스트 연락처를 만들고 대화에서 테스트 이메일을 보내는 방법을 안내해요. Mailgun이나 SMTP 사용 시 발신자 주소를 설정하는 방법과, 이메일이 도착하지 않거나 회신이 돌아오지 않을 때 확인할 내용도 함께 다뤄요.

## 테스트 연락처 만들기

1. 에이전시 화면 왼쪽 위에서 **여기를 클릭하여 전환**을 클릭하세요.
2. 테스트할 서브 계정을 클릭하세요.
3. **연락처**를 클릭하세요.

   ![서브 계정으로 전환한 뒤 연락처를 여는 화면](https://i.ibb.co/zNV0S4V/2023-1-24-11-50-37.gif)

4. **연락처 추가**를 클릭하세요.

   ![연락처 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029821714/original/3CoAFhjjyHDlYZmB19SN0T_TqAK1e37VWA.jpg?1721834838)

5. **이름**과 **이메일**을 입력하고 **저장**을 클릭하세요.

   ![이름과 이메일을 입력하는 연락처 추가 폼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029821818/original/I96Iz9MiMb85t_HZYfAbvYtTFXY5aptZcw.jpg?1721834890)

## 테스트 이메일 보내기

연락처를 저장하면 대화 화면으로 자동 이동해요. 화면 아래쪽의 **이메일 보내기**를 클릭하세요.

![대화 보기의 이메일 보내기 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029821920/original/mO1ZsfTekzCkLub_fVoTZq3HSilwgaU1Rg.jpg?1721834939)

## 발신자 이메일 설정하기

강조 표시된 **발신자 이메일** 필드에서 보내는 사람 주소를 정해요. 기본값은 로그인한 사용자의 이메일이에요. 대량 이메일을 보낼 때 발신자 이메일 주소를 설정하는 방법은 '캠페인 이메일의 보내는 사람 이름·주소 가리기(Masking campaign emails from name address)' 문서를 참고하세요.

![대화 작성 창의 발신자 이메일 필드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029822266/original/ooUl9-PlqUjmPxfLAtVJujfPR5tACZMRDg.jpg?1721835184)

### Mailgun을 사용하는 경우

발신자 이메일을 `testing@gmail.com`으로 가려서 보내면 **회신 주소**는 `testing@replies.subdomain.com`으로 표시돼요. 이 주소는 **에이전시 설정 > 이메일 서비스 > Location Settings**(서브 계정 설정)에서 해당 서브 계정에 설정한 Mailgun 서브도메인이에요. 그래도 회신은 서브 계정의 **대화** 탭에 정상적으로 표시돼요.

예를 들어 Mailgun 서브도메인이 `subdomain.yourdomain.com`이면 **회신 주소**는 `kate@subdomain.yourdomain.com`으로 표시돼요.
<!-- 검토 필요: 원문 내용이 서로 다름 -->

![Mailgun 서브도메인과 일치하는 회신 주소](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029822829/original/sIHHts5GEbn1g0b-ruhREN619Is0x-QMkA.jpg?1721835508)

발신자 이메일 주소를 `testing@subdomain.com`으로 설정하면 전달률을 높일 수 있어요. 이렇게 하면 **회신 주소**의 도메인과 발신자 이메일의 도메인이 같아지기 때문이에요.

[콜드 인바운드 이메일](../메일건/cold-email-inbound-setup-mailgun.md)을 설정하면 `@replies.subdomain.com`으로 끝나는 주소로 온 이메일도 모두 받을 수 있어요.

### SMTP 연동을 사용하는 경우

1. **Sub-account Settings**(서브 계정 설정) > **이메일 서비스**로 이동하세요.
2. SMTP 발신자로 연동된 이메일 주소(강조 표시된 주소)를 복사하세요.
3. **대화** 탭에서 그 주소를 **발신자 이메일**로 사용하세요.

![이메일 서비스 설정의 SMTP 발신자 이메일](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029823782/original/2kuSUuG1Pr11ztYDcKVm960c_D1TdBV7PQ.jpg?1721836209)

SMTP 연동 방식에 따라 별칭(alias)이나 인증된 발신자를 설정하면 다른 주소로도 보낼 수 있어요.

- Google SMTP 별칭 설정하기
- [Zoho SMTP 별칭 설정하기](../using-zoho-as-your-smtp-provider.md)
- [SendGrid로 발신자 이메일 인증하기](https://docs.sendgrid.com/ui/sending-email/senders)

## 이메일이 도착하지 않을 때

이메일을 보냈는데 받지 못했다면 스팸 폴더를 확인하세요.

**대화 보기**에 오류가 표시되면 Mailgun API나 SMTP 서버에서 받은 오류 내용을 그대로 보여 줘요. 오류 아이콘을 클릭하면 전체 메시지를 볼 수 있고, 이메일이 보내지지 않은 이유가 나와 있을 거예요.

오류 내용만으로 원인을 알기 어렵다면 SMTP 제공업체에 지원 요청을 열어 해당 이메일의 발송 상태를 확인해 달라고 하세요.

Mailgun을 사용한다면 [Mailgun 로그를 확인](../how-to-check-logs-for-a-specific-email-in-mailgun.md)해 보세요. '이메일이 발송되지 않을 때(Emails not sending)' 도움말도 참고할 수 있어요.

## 이메일 회신이 돌아오지 않을 때

테스트 이메일을 받았다면 그 메일에 회신하고, 회신이 **대화** 탭에 표시되는지 확인하세요. 표시되지 않으면 [이메일 회신이 대화에 표시되지 않을 때](../when-email-replies-are-not-showing-up-in-conversation.md) 문서를 참고하세요.

## 자주 묻는 질문

### 테스트 연락처를 매번 새로 만들어야 하나요, 아니면 다시 써도 되나요?
같은 테스트 연락처를 다시 써도 돼요. 단, 연락처에 입력한 이메일 주소는 직접 확인할 수 있는 주소여야 해요. 그래야 이메일이 도착했는지 확인하고 회신도 테스트할 수 있어요.

### Mailgun을 쓰는데 **회신 주소**가 발신자 주소와 다르게 보여요. 왜 그런가요?
다른 주소로 발신자를 가려서 보내도 회신은 Mailgun 서브도메인을 거쳐요. 그래야 회신을 추적해서 **대화** 탭으로 가져올 수 있어요. 그래서 입력한 발신자와 **회신 주소**의 도메인이 다를 수 있어요.

### 테스트 연락처의 대화에 **이메일 보내기** 버튼이 보이지 않아요.
연락처가 올바른 이메일 주소로 저장되었는지 확인하세요. 또 대화 안에서 SMS 등 다른 채널이 아니라 **이메일** 탭을 보고 있는지도 확인하세요.

### 테스트할 때 제 개인 이메일을 발신자로 써도 되나요?
간단히 테스트하는 용도라면 괜찮아요. 실제 발송에는 인증했거나 설정을 마친 도메인의 발신자 주소를 쓰세요. 그래야 전달률과 회신 경로가 의도대로 동작해요.

### 발송 실패가 우리 쪽 문제인지 수신자 메일 서버 문제인지 어떻게 알 수 있나요?
**대화 보기**에서 실패한 메시지의 오류 아이콘을 클릭하세요. 수신 메일 서버가 특정 거부 사유를 알려 줬다면 상대 쪽 문제일 가능성이 커요. 내 도메인 설정이 언급되어 있다면 DNS/CNAME/MX 레코드부터 확인하세요.

### Mailgun이나 SMTP가 아니라 하이퍼클래스 이메일을 쓰면 단계가 달라지나요?
테스트 연락처를 만드는 단계와 **이메일 보내기** 단계는 같아요. 하이퍼클래스 이메일은 발신 설정을 대신 관리해 주기 때문에 발신자 설정이 더 간단해요. Mailgun 서브도메인이나 SMTP 별칭을 따로 설정하지 않아도 돼요.
