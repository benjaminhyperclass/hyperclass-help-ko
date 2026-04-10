---

번역일: 2026-04-06
카테고리: 09-이메일
---

# 지원되는 SMTP 서비스의 이메일 오류 라이브러리

이메일 오류를 해결하는 것은 성공적인 전송을 방해할 수 있는 수많은 요인들을 고려할 때 복잡할 수 있습니다. 이 가이드는 Mailgun과 Google Workspace 같은 이메일 서비스를 사용할 때 발생하는 일반적인 문제들을 설명합니다. 도메인 인증부터 요청 제한까지, 이 자료는 자주 발생하는 오류들과 그 원인, 그리고 원활한 디지털 커뮤니케이션을 위한 해결 방법들을 제공합니다.

## 주의사항

이메일 전송이 실패한 이유에 대한 자세한 정보를 보려면 ⚠️(빨간 삼각형) 아이콘을 클릭해서 세부 정보를 확인하세요.

## 오류 목록

### 도메인이 전송을 허용하지 않음

도메인이 인증되지 않았으며 DNS 설정이 필요합니다. 제어판에 로그인하여 필요한 DNS 레코드를 확인하세요.

Mailgun에 로그인하세요 - https://login.mailgun.com/login/

1. Sending 탭을 확장합니다
2. 마지막 메뉴인 Domain Settings를 클릭합니다  
3. 상단에서 로케이션에 맞는 올바른 도메인/서브도메인을 선택했는지 확인합니다
4. 상단 중앙의 DNS records를 클릭합니다
5. Verify DNS settings를 클릭하고 5개의 DNS 레코드가 모두 녹색 체크 표시가 있는지 확인합니다

때로는 모두 녹색 체크 표시가 있는 것처럼 보일 수 있지만 실제로는 그렇지 않을 수 있습니다. Verify DNS Settings 버튼을 다시 클릭하여 레코드를 새로고침해야 합니다:

![DNS 레코드 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039911647/original/52UvJSdX-s7B7zOJMma92nz30NzeFBIElw.png?1736989239)

### 도메인이 전송을 허용하지 않음: 계정이 종료됨

에이전시는 Mailgun 지원팀에 연락하여 계정이 왜 종료되었는지 확인해야 합니다.

![계정 종료 오류](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48255292156/original/GXQnGSs6f2L7DpRNemtMgsoR69GUUzCAuw.png?1665084790)

### Too old (너무 오래됨)

이것은 하이퍼클래스 에이전시 설정(Settings)에서 지울 수 있는 Mailgun의 내부 오류 중 하나입니다. 하지만 이 오류가 발생하는 이유를 알아보려면 Mailgun 지원팀에 연락하여 자세히 확인해야 합니다.

![Too old 오류](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48195450199/original/ZDTaTOnNpPnOWEvEAxbm5vHqzPR4o1wKcQ.png?1646071445)

### Mailgun 발신자 인증 오류

발신자 주소가 누락되거나 읽을 수 없는 경우 목적지에 도달하지 못할 수 있으며, 도달하더라도 수신자가 응답할 수 없습니다. 마찬가지로 수신 서버가 발신 도메인의 필요한 MX 레코드(Mail Exchanger records)를 찾지 못하면 이메일 통신에서 발신자 주소 인증 오류가 발생할 수 있습니다.

이 문제는 일반적으로 다음과 같이 나타납니다:

- 550 Verification failed for <bounce+c72392.3559d@yoursendingdomain.com>\nUnrouteable address\nSender verify failed
- The domain of the sender address bounce+c72392.3559d@yoursendingdomain.com does not exist
- Sender address rejected: User unknown in virtual mailbox table
- Could not resolve sender domain
- Your domain has no DNS/MX entries
- Requested action not taken: mailbox unavailable invalid DNS MX or A/AAAA resource record.

현재 Mailgun 발신 도메인에 따라 이 문제를 해결하기 위한 단계는 다음과 같습니다:

#### 서브도메인을 사용하는 경우

필수는 아니지만, 발신자 인증 오류를 방지하기 위해 도메인의 MX 레코드를 Mailgun으로 지정하는 것을 강력히 권장합니다.

오류를 해결하려면 서브도메인의 MX 레코드를 Mailgun 값으로 설정하세요:

- Value: mxa.mailgun.org, Priority: 10
- Value: mxb.mailgun.org, Priority: 10

레코드가 완전히 전파되도록 24-48시간을 기다리면 오류가 사라집니다.

여전히 오류가 발생하면 메시지의 From 필드에서 도메인을 발신 도메인과 일치하도록 조정해 보세요.

#### 루트 도메인을 사용하는 경우

루트 도메인에 이미 ESP(Email Service Provider)의 MX 레코드가 설정되어 있는 경우, Mailgun 발신용 서브도메인을 추가하는 것이 최선의 해결책입니다. 서브도메인을 추가하고 Mailgun의 MX 레코드를 설정하면 오류가 해결됩니다.

**주의사항:**
루트 도메인에 호스팅된 메일박스 공급자를 가리키는 MX 레코드가 없거나 필요한 경우, Mailgun 계정에 루트 도메인을 추가하고 필요한 TXT 및 MX 레코드를 인증한 후 루트 도메인을 통해 발신할 수 있습니다. 
기억하세요: 이메일 잘못 전송이나 손실을 방지하기 위해 도메인의 MX 레코드는 한 곳만 가리켜야 합니다.

**대안적 접근법:**
위 단계를 시도한 후에도 오류가 지속되면 다음 대안들을 고려하세요:

- (이메일 공급자의 서버 측에서) 발신자 주소 인증을 끕니다.
- 이메일 공급자 설정에서 "catch-all"을 생성합니다. 이렇게 하면 수신 서버가 들어오는 이메일의 발신자 정보를 확인할 때 발신자 주소 인증이 통과됩니다.

이러한 유형의 문제를 이해하고 해결하는 것은 기술적일 수 있지만, 이 단계들을 따르면 발신자 인증 오류를 해결하는 데 도움이 됩니다.

이 [Mailgun 문서](https://help.mailgun.com/hc/en-us/articles/360011804533-Sender-Verification-Error)에 더 많은 정보가 있습니다.

### 너무 많은 요청

이 오류는 동시에 너무 많은 이메일 요청이 전송되었다는 의미입니다. Mailgun 계정의 이메일 제한을 확인하기 위해 Mailgun 지원팀에 문의하세요.

에이전시 설정(Agency Settings) → Email services 탭에서 오류를 지울 수 있습니다.

### Google Workspace 사용 시 일시적 시스템 문제

"code":"EENVELOPE","response":"421 4.3.0 Temporary System Problem. Try again later (10). o11-20020a056e02092b00b0031559b0cb61sm1590122ilt.8 - gsmtp","responseCode":421,"command":"DATA

이메일을 대량으로 보낼 때 위 오류가 발생하면, Gmail SMTP를 사용할 때 발생할 수 있습니다. [LC Email](what-is-lc-email-.md)을 사용하거나 적은 양으로 배치 발송하도록 사용자에게 안내하세요.

## 다양한 SMTP 서비스의 오류 라이브러리

지원되는 SMTP들(Mailgun, Gmail, Outlook, Sendgrid)의 오류 라이브러리는 여러 형식으로 제공됩니다:

- 웹에서 확인: https://docs.google.com/spreadsheets/d/e/2PACX-1vSTa4RXIdFexBNK2ZyLj-MGgSL5AnzmpIalokFIsPrGg0HnK5w2zrRmNESWcIcOkG3D7nG2Q7wWsBWq/pubhtml
- Google 시트로 확인: https://docs.google.com/spreadsheets/d/1XIl6TyuMamX2vlts1-lzBVXR2ArCFqiJnTeBxz7qBKQ/edit?usp=sharing
- 또는 아래 표에서 확인

### Mailgun

| 코드 | 오류 메시지 | 의미 | 해결 방법 | 용어 설명 |
|------|-------------|------|-----------|-----------|
| 400 | from parameter is missing | 발신자 이메일 주소가 제공되지 않음 | 'from' 매개변수에 발신자 이메일 포함 | 'from' 매개변수: 발신자 이메일 주소 |
| 400 | to parameter is missing | 수신자 이메일 주소가 제공되지 않음 | 'to' 매개변수에 수신자 이메일 포함 | 'to' 매개변수: 수신자 이메일 주소 |
| 400 | message parameter is missing | 이메일 본문이 제공되지 않음 | 'message' 매개변수에 이메일 본문 포함 | 'message' 매개변수: 이메일 본문 |

*(표가 너무 길어 일부만 표시)*

### Gmail / Google Workspace

| 오류 코드 | 의미 | 해결 방법 | 용어 설명 |
|-----------|------|-----------|-----------|
| 421, "4.3.0" | 일시적 시스템 문제. 나중에 다시 시도 | 나중에 메시지 재전송 시도 | SMTP: 이메일 메시지 전송을 위한 프로토콜 |
| 421, "4.4.5" | 서버가 바쁨. 나중에 다시 시도 | 나중에 메시지 재전송 시도 | - |
| 535, "5.7.1" | 사용자명과 비밀번호가 승인되지 않음 | 정확한 사용자명과 비밀번호 입력 확인. 2단계 인증 사용 시 앱 전용 비밀번호 사용 | - |

*(표가 너무 길어 일부만 표시)*

### Outlook

| 오류 카테고리 | 오류 코드 | 의미 | 해결 방법 | 용어 설명 |
|---------------|-----------|------|-----------|-----------|
| 일반 오류 | 0x800CCC00 | 인증이 로드되지 않음. 잘못된 로그인 정보나 서버 문제 | 이메일과 비밀번호를 다시 확인하고 올바른지 확인 | ISP: 인터넷 서비스 공급자 |
| 일반 오류 | 0x800CCC0E | 서버에 연결할 수 없음 | 인터넷 연결, 방화벽 설정, 서버 설정 확인 | 방화벽: 네트워크 보안 시스템 |

*(표가 너무 길어 일부만 표시)*

### Sendgrid

| 오류 | 메시지 | 설명 | 해결 방법 | 용어 설명 |
|------|--------|------|-----------|-----------|
| 250 | 전송을 위해 대기 중 | 메일이 성공적으로 대기열에 추가됨 | - | - |
| 403 | 해당 이메일 주소에서 전송할 권한이 없음 | "from" 주소가 인증된 발신자 ID와 일치하지 않음 | 발신자 ID 설정 확인 및 "from" 주소가 올바르게 설정되었는지 확인 | 발신자 ID: 특정 발신자로부터 이메일을 보낼 수 있도록 인증된 이메일 주소나 도메인 |

*(표가 너무 길어 일부만 표시)*

---
*원문 최종 수정: Tue, 21 Jan, 2025 at 3:47 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*