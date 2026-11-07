---
원문: /support/solutions/articles/48001166110-using-sendgrid-as-the-smtp-provider
번역일: 2026-11-06
카테고리: 09-이메일
---

# SendGrid를 SMTP 제공업체로 연결하기

SendGrid를 SMTP 제공업체로 연결하면 발송하는 이메일이 인증된 SMTP 제공업체를 거쳐 안정적으로 전달돼요. 이 문서에서는 SendGrid 계정을 만드는 단계부터 발신자 인증까지 순서대로 설정하는 방법을 안내해요.

연결 오류를 줄이려면 각 단계를 순서대로 따라 하세요. 문제가 생기면 문서 뒷부분의 문제 해결 내용을 확인하세요.

## 1. SendGrid에 가입하기

SendGrid 계정이 없다면 [signup.sendgrid.com](https://signup.sendgrid.com/)에서 계정을 만드세요.

## 2. 서브 계정에서 이메일 서비스 열기

1. 서브 계정에서 **이메일 서비스 > + 서비스 추가**를 클릭하세요.
2. 드롭다운에서 **SendGrid**를 선택하세요.

모든 서브 계정에 SendGrid를 한꺼번에 연결하려면 에이전시 화면의 **설정 > 이메일 서비스**에서 설정하세요.

![이메일 서비스 드롭다운에서 SendGrid 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846783/original/VVFsJCextfR1_d_11XTHga9oeNKatWS0hQ.jpg?1724881299)

## 3. SendGrid API 키 발급받기

SendGrid에서 **설정 > API 키 > API 키 생성**을 클릭하세요. SendGrid 화면이 영어로 보이면 Settings > API Keys > Create API Key 순서로 찾으세요.

![SendGrid 설정에서 새 API 키 만들기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846792/original/eUL7EU_-EOzGchxYPWL0EMk5sjACZxHEPw.jpg?1724881326)

1. **API Key Name**(API 키 이름)을 입력하세요.
2. **API Key Permissions**(API 키 권한)가 **Full Access**(전체 액세스)로 설정돼 있는지 확인하세요.
3. **Create & View**(생성 및 보기)를 클릭하세요.

![전체 액세스 권한을 선택하고 API 키 이름 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846796/original/a9MrgUej0WqHziz31i8UjSTQwtbDIFmj4A.jpg?1724881352)

4. 강조 표시된 API 키를 복사하세요.

SendGrid는 전체 키를 한 번만 보여 주므로 지금 바로 복사해 두세요. 다음 단계에서 하이퍼클래스에 붙여 넣어요.

![발급된 SendGrid API 키 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846806/original/vmo403We5u7Gp8bKNAXeV7jlxNY_I1Ysag.jpg?1724881381)

## 4. 하이퍼클래스에 API 키 입력하기

1. **Username**(사용자 이름)에 `apikey`를 입력하세요.
2. **Email**(이메일)에 SendGrid 로그인 이메일을 입력하세요.
3. **Password**(비밀번호)에 복사한 API 키를 붙여 넣으세요.
4. **저장**을 클릭하세요.

![하이퍼클래스 이메일 서비스 설정에 SendGrid API 키 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846811/original/kq58-V-iDLVwKZwNQXw_UXO2lwUUiMcY9Q.jpg?1724881409)

## 5. SendGrid에서 2단계 인증(2FA) 설정하기

SendGrid는 계정에 2단계 인증이 켜져 있어야 전체 API 액세스를 허용해요. 아직 설정하지 않았다면 SendGrid 계정 설정에서 2단계 인증을 완료하세요.

![SendGrid에서 2단계 인증 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846832/original/HYY2tHoxAB-4qW-jO_raEIIxKBf7lj2QWA.jpg?1724881430)

## 6. SendGrid 계정을 단일 발신자로 인증하기

![SendGrid 단일 발신자 인증 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846845/original/9ipTCXKk0sEKBCLdPOYf1kDUFCiCjpvzAw.jpg?1724881455)

SendGrid 로그인 이메일로 발신자를 만드세요.

![SendGrid 로그인 이메일로 발신자 ID 만들기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846859/original/zBMxS2C0LUORdKKq5EvXd_eDtR6jhzybiQ.jpg?1724881476)

## 7. 다시 저장해서 연동 마무리하기

하이퍼클래스로 돌아가 **저장**을 한 번 더 클릭하면 연동이 끝나요.

![하이퍼클래스에서 SendGrid 연동 다시 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846872/original/XR8nHLqvALSgWinGBq6BV3WYFk9rfKfzPA.jpg?1724881510)

이제 하이퍼클래스에서 SendGrid가 사용 중인 **SMTP 제공업체**로 표시돼요.

![SendGrid가 사용 중인 SMTP 제공업체로 표시된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846879/original/wL9FUvg9EHRVoljO3xNEpr5RS0vzxaYFdA.jpg?1724881532)

## 발신자 ID 오류 해결하기

대화에서 테스트 이메일을 보냈을 때 오류가 나면 **⚠️(빨간 삼각형) 아이콘**을 클릭해 오류 내용을 자세히 확인하세요.

![대화에서 오류 상세 아이콘 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846886/original/q9lMrW_IBu8lblpact0WJarWC8nimrXzTw.jpg?1724881564)

자주 나타나는 오류는 다음과 같아요.

```
550 The from address does not match a verified Sender Identity. Mail cannot be sent until this error is resolved.
```

필요한 조건은 SendGrid의 [발신자 ID 요구 사항](https://sendgrid.com/docs/for-developers/sending-email/sender-identity/)에서 확인하세요.

{% hint style="info" %}
발신자 마스킹을 사용 중이라면, 마스킹한 발신자 이메일이 SMTP로 연동한 이메일과 같아야 해요. 같지 않다면 해당 발신자 이메일을 [docs.sendgrid.com/ui/sending-email/senders](https://docs.sendgrid.com/ui/sending-email/senders)에서 SendGrid에 따로 인증하세요.
{% endhint %}

## 자주 묻는 질문

### SendGrid 유료 요금제를 써야 연동할 수 있나요?
아니요. SendGrid 무료 요금제에서도 API 키 사용과 발신자 인증이 가능해요. 이 연동에 필요한 기능은 그것뿐이에요. 다만 발송량이 많아지면 나중에 유료 요금제가 필요할 수 있어요.

### SendGrid에서 왜 발신자 ID를 인증해야 하나요?
SendGrid는 계정에서 발신자로 인증하지 않은 "보내는 사람" 주소로는 메일을 보내지 못하게 막아요. 발신자 사칭을 막고 SendGrid를 쓰는 모든 사용자의 전달률을 지키기 위해서예요.

### SendGrid를 연결할 때 비밀번호 칸에는 무엇을 입력하나요?
SendGrid 계정 비밀번호가 아니라 SendGrid API 키 전체를 붙여 넣으세요. **Username**(사용자 이름)에는 항상 `apikey`를 입력해야 해요.

### SendGrid를 쓰면서 발신자 이메일 마스킹도 할 수 있나요?
네, 할 수 있어요. 다만 마스킹하는 주소가 SMTP로 연동한 주소와 같거나, SendGrid에서 발신자로 따로 인증돼 있어야 해요. 그렇지 않으면 발신자 ID 오류가 나요.

### "550 sender identity" 오류는 무슨 뜻인가요?
보내는 사람 주소가 SendGrid 계정에서 인증된 발신자가 아니라서 SendGrid가 메시지를 거부했다는 뜻이에요. 해당 주소를 단일 발신자로 인증하면 해결돼요.

### API 키가 작동하려면 2단계 인증이 꼭 필요한가요?
네. SendGrid는 계정에 2단계 인증이 켜져 있어야 전체 액세스 API 키를 만들고 쓸 수 있어요.
### 나중에 API 키를 다시 발급받으면 어떻게 되나요?
이전 키는 바로 작동하지 않아요. 계속 발송하려면 이메일 서비스 설정의 비밀번호 칸을 새 키로 바꿔야 해요.
