---
원문: https://help.gohighlevel.com/support/solutions/articles/48001181601-troubleshooting-inbound-sms-showing-as-calls-or-not-appearing-at-all-
번역일: 2026-11-06
카테고리: 15-전화-시스템
---

# 수신 SMS가 보이지 않거나 통화로 표시될 때 해결하기

플랫폼에서 들어온 문자가 보이지 않거나, 문자가 메시지가 아닌 통화로 표시될 때 원인을 찾고 해결하는 방법이에요. Twilio를 쓰는지, 하이퍼클래스 전화를 쓰는지에 따라 해결 방법이 달라요.

## 한눈에 보는 해결 방법

### 하이퍼클래스 전화를 쓰는 경우

하이퍼클래스 고객지원에 문의하세요.

### Twilio를 쓰는 경우 (하이퍼클래스 전화가 아닌 경우)

- Twilio 번호 설정을 확인하세요.
  - 번호가 SMS/MMS를 지원하는지 확인하세요.
  - 메시지용 웹훅 URL이 올바르게 설정되어 있는지 확인하세요.
- 전화번호가 Twilio **Messaging Service**(메시징 서비스)에 연결되어 있는지 확인하세요. 연결되어 있다면 Messaging Service의 **Integration**(연동) 설정에서 수신 메시지 경로를 확인하세요. 연결되어 있지 않다면 전화번호 자체의 **Messaging**(메시지) 웹훅을 확인하세요.
- 메시지 로그를 확인하세요.
- 그래도 해결되지 않으면 [Twilio Support](https://support.twilio.com)에 문의하세요.

## 단계별 해결 방법 (Twilio 사용자)

### 1단계. Twilio에 로그인하기

1. [twilio.com/login](https://www.twilio.com/login)에 접속해 로그인하세요.
2. 왼쪽 위 드롭다운에서 **Account Name > View Subaccounts**(서브 계정 보기)를 클릭하세요.

![View Subaccounts가 보이는 Twilio 계정 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048323954/original/vSEfQvPJiGA_zCYQVSYDBuW57Nd8YiVNrw.png?1750080048)

{% hint style="info" %}
Twilio 서브 계정이 여러 개라서 원하는 계정을 찾기 어렵다면, **Agency View**(에이전시 보기)의 **설정 > 전화 연동 > 서브 계정 설정**으로 이동하세요. 에이전시 관리자만 볼 수 있어요. 문제를 확인 중인 계정을 검색한 뒤, 아래 스크린샷 2.0처럼 Account SID를 복사하세요.
{% endhint %}

![서브 계정 설정에서 Account SID를 복사하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048325672/original/qGhVCcYLVbwLO1VN4X0Xpn3w8q35BA32yA.png?1750081121)

스크린샷 2.0

### 2단계. 해당 Twilio 번호 찾기

1. Twilio 서브 계정 목록의 검색창에 Account SID를 붙여 넣어 해당 서브 계정을 찾으세요.
2. 찾으려던 서브 계정을 클릭하세요.
3. **Phone Numbers > Manage > Active Numbers**(전화번호 > 관리 > 활성 번호)로 이동하세요.
4. 문제가 있는 전화번호를 클릭하세요.

![Account SID로 서브 계정을 검색하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048326658/original/wfGuy2jN0edS5KwbyvRVA0mOpKVvm0t0sg.png?1750081679)

스크린샷 3.0

![Phone Numbers > Manage 아래의 Active Numbers 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048327877/original/_D4Wur5uDAlf_h1E3_d7NGARNhx25WrDYA.png?1750082372)

스크린샷 3.1

### 3단계. 수신 메시지 웹훅 확인하기

먼저 Twilio 번호가 **Messaging Service**(메시징 서비스)에 연결되어 있는지 확인하세요.

**번호가 Messaging Service에 연결되어 있지 않은 경우**

1. Twilio 전화번호를 여세요.
2. **Messaging**(메시지)까지 스크롤하세요.
3. **A message comes in**(메시지가 수신될 때)을 **Webhook**(웹훅)으로 설정하세요.
4. 다음 주소를 입력하세요.
   `https://services.leadconnectorhq.com/appengine/twilio/incoming_message`
5. 방식을 **HTTP POST**로 설정하세요.
6. **Save**(저장)를 클릭하세요.

**번호가 Messaging Service에 연결되어 있는 경우**

1. 연결된 Messaging Service를 여세요.
2. **Integration**(연동)으로 이동하세요.
3. **Incoming Messages**(수신 메시지)에서 **Send a webhook**(웹훅 보내기)을 선택하세요.
4. 다음 주소를 입력하세요.
   `https://services.leadconnectorhq.com/appengine/twilio/incoming_message`
5. Request URL(요청 URL)의 방식을 **HTTP POST**로 설정하세요.
6. 같은 주소를 **Fallback URL**(대체 URL)에도 입력하세요.
7. Fallback URL의 방식을 **HTTP POST**로 설정하세요.
8. **Save**를 클릭하세요.

![메시지 웹훅을 설정하는 입력란](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048362616/original/2ntLPpZIJdr7VF4u9xmzO-7KppYrsCYUyQ.png?1750139542)

스크린샷 3.2

![메시지 웹훅이 올바르게 저장된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048362676/original/1DQr6QHWJDF3N6X0Dg1dY6R8xfOOb_ydtg.png?1750139698)

스크린샷 3.3

### 설정 테스트하기

1. 다른 휴대폰에서 Twilio 번호로 새 SMS를 보내세요.
2. 하이퍼클래스의 **대화**에 메시지가 나타나는지 확인하세요.
3. 메시지가 나타나지 않으면 Twilio **Messaging Logs**(메시지 로그)에서 해당 메시지를 확인하세요.
4. 추가로 문제를 확인해야 하면 **Message SID**(메시지 SID)와 정확한 시각을 기록해 두세요.

## SMS 지원 여부 확인하기

Twilio 전화번호가 **SMS**를 지원하는지 확인하세요. 수신 메시지에 미디어가 포함되어 있다면 **MMS**도 지원하는지 확인하세요.

Twilio에 단검 기호(†)가 표시되어 있다면, 그 번호의 SMS 기능이 국내 메시지로 제한되어 있을 수 있다는 뜻이에요.

![국내 전용 SMS 기능을 나타내는 단검 기호](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048330328/original/NZze8-m4RTxheJoX6VOiTVKmwDY7auuZLA.png?1750083890)

스크린샷 3.4

## 메시지 로그 확인하기

1. Twilio 왼쪽 사이드바에서 **Monitor > Logs > Messaging**(모니터 > 로그 > 메시지)을 클릭하세요.
2. 수신 SMS를 확인할 때는 **From**(보낸사람) 입력란에 연락처의 전화번호를 입력하세요. 연락처에게 보낸 발신 SMS를 확인할 때는 **To**(받는사람) 입력란을 사용하세요.
3. 메시지 상태를 확인하세요.
4. 날짜를 클릭해 메시지 상세 내용을 확인하세요.

![전화번호로 필터링한 Twilio 메시지 로그](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048331030/original/ViTgBcW-gKaOnr8ozV98rbF4K16o2ZsVYQ.png?1750084349)

스크린샷 4.0

{% hint style="info" %}
Twilio **Messaging Logs**에는 수신 메시지가 보이는데 하이퍼클래스에는 나타나지 않는다면, **Message SID**, 정확한 시각, 발신 번호, 수신 번호, 메시지 상태를 복사해 두세요.

그런 다음 수신 메시지 웹훅이나 Messaging Service 설정을 확인하세요. 설정이 올바른데도 문제가 계속되면, 이 정보를 함께 전달해 문의하세요.
{% endhint %}

## 자주 묻는 질문

### Twilio를 쓰는지 하이퍼클래스 전화를 쓰는지 어떻게 알 수 있나요?

**설정 > 전화번호**에서 번호를 확인하세요. 플랫폼 기본 전화 시스템으로 받은 번호는 하이퍼클래스 전화 번호이고, 직접 만든 Twilio 계정으로 연결한 번호는 Twilio 번호예요.

### Twilio 서브 계정이 여러 개라서 내 계정이 어느 것인지 모르겠어요. 어떻게 하나요?

**Agency View**(에이전시 보기)의 **설정 > 전화 연동 > 서브 계정 설정**에서 Account SID를 복사하세요. 그런 다음 Twilio의 서브 계정 검색창에 붙여 넣으면 해당 서브 계정으로 바로 이동할 수 있어요.

### 수신 문자가 메시지가 아닌 통화로 표시되는 이유가 뭔가요?

Twilio의 수신 메시지 경로가 올바르게 설정되지 않았을 때 이런 일이 생길 수 있어요.

먼저 번호가 **Messaging Service**에 연결되어 있는지 확인하세요.

- 연결되어 있지 않다면 번호 단위의 **A message comes in** 웹훅을 확인하세요.
- 연결되어 있다면 Messaging Service의 **Integration** 설정을 확인하세요.

또한 하이퍼클래스의 수신 메시지 엔드포인트가 **HTTP POST**로 설정되어 있는지도 확인하세요.

### 번호 옆의 단검 기호는 무슨 뜻인가요?

그 번호는 해당 번호가 속한 국가 안에서만 SMS를 보내고 받을 수 있다는 표시예요. 그 번호로 해외에 메시지를 보내고 있다면, 이 때문에 메시지가 도착하지 않을 가능성이 커요.

### Twilio 로그에는 "Delivered"(전달됨)로 나오는데 메시지가 보이지 않아요. 어디에 문의해야 하나요?

이 경우 메시지는 Twilio까지 정상적으로 도착한 상태예요. 그래서 문제는 전달 또는 웹훅 쪽에 있어요. Message SID를 복사해서 Twilio Support에 문의하면, 데이터가 어디에서 끊겼는지 추적해 줄 거예요.

### 하이퍼클래스 전화를 쓰는데 같은 문제가 생겼어요. 웹훅을 직접 고칠 수 있나요?

아니요. 하이퍼클래스 전화 번호는 플랫폼에서 관리해서 웹훅 설정에 직접 접근할 수 없어요. 하이퍼클래스 고객지원에 문의하면 원인을 확인하고 해결해 드려요.
