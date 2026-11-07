---
원문: https://help.gohighlevel.com/support/solutions/articles/48001222601-how-to-use-twilio-messaging-logs-to-troubleshoot-sms-non-isv-
번역일: 2026-11-06
카테고리: 15-전화-시스템
---

# Twilio 메시지 로그로 SMS 문제 확인하기 (non-ISV)

SMS가 전송되지 않거나, 늦게 도착하거나, 예상과 다르게 동작할 때 Twilio의 메시지 로그에서 원인을 찾는 방법을 안내해요. 로그를 찾는 위치와 읽는 방법을 단계별로 설명해요.

## 개요

Twilio에는 Twilio와 연동한 애플리케이션 사이의 메시지 활동을 조사하는 도구가 있어요. 메시지가 전송되지 않거나, 지연되거나, 예상과 다르게 동작하면 Twilio의 메시지 로그를 가장 먼저 확인하세요. 로그에서 전달 상태와 오류를 확인하고, 더 깊이 조사하는 데 필요한 정보를 모을 수 있어요.

## 메시지 로그를 찾아서 사용하기

### 1단계. Twilio에 로그인하기

[https://console.twilio.com/](https://console.twilio.com/)에 접속해 로그인하세요.

### 2단계. 서브 계정 열기

1. 화면 가운데에 있는 **Account**(계정)를 클릭한 뒤 **Subaccounts**(서브 계정)를 클릭하세요.

![Twilio 계정 메뉴에서 Subaccounts 항목을 보여 주는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054353513/original/hSe8ljpyqWr2eDO_n_WGaDvcS4qRmpeIMg.png?1758614833)

2. 서브 계정이 너무 많으면 하이퍼클래스로 돌아가서 해당 로케이션의 **계정 SID**를 복사하세요.

![로케이션의 계정 SID를 복사하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054354205/original/ts0DBJbV4wnlvI5iNQzp8xPOGBiWQk_YKg.png?1758615109)

3. Twilio에서 그 서브 계정 SID를 검색해 서브 계정을 여세요.

에이전시 수준 설정 > Twilio에서 Twilio 서브 계정 SID로 검색할 수 있어요. 여기에 계정 SID를 붙여 넣고 검색 결과를 클릭하세요.

![Twilio에서 서브 계정 SID를 검색하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054354374/original/VHVGUsFKO3DJlYn0Ck4P0VA5tbMPZLXcVA.png?1758615216)

### 3단계. 메시지 로그로 이동하기

왼쪽 패널에서 **모니터 > 로그 > 메시지**를 클릭하세요.

![Twilio에서 모니터 > 로그 > 메시지로 이동하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054354516/original/AAyXbBPdklR9Yw5VdG-9MDJqcNosJD3-CA.png?1758615322)

### 4단계. 메시지 검색하기

연락처의 전화번호로 검색하세요.

- 연락처가 보낸 수신 SMS는 **보낸 사람** 필드로 검색하세요.
- 연락처에게 보낸 발신 SMS는 **받는사람** 필드로 검색하세요.

전화번호는 Twilio 콘솔에서 인식하는 형식으로 입력하세요.

![받는사람 필드에 전화번호를 입력해 메시지 로그를 검색하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054354685/original/2anbBrzTG7ygEalA4ntfEiKjy_svyXWVaA.png?1758615461)

### 5단계. 로그 항목 확인하기

로그 한 줄에는 다음 정보가 표시돼요.

- **Message SID**(메시지 고유 ID)
- 받는사람과 보낸 사람 번호
- **상태**(accepted, delivered, failed 등)
- **세그먼트**: SMS가 나뉘어 전송된 경우 조각의 수
- **미디어**: MMS 첨부 파일이 있는 경우 표시

로그의 색으로도 문제를 알 수 있어요.

- 노란색 또는 빨간색 행은 전송에 실패했거나 문제가 있는 메시지예요.
- 초록색(200 상태)은 성공을 뜻해요. 초록색이거나 성공으로 표시된 요청 상태는 해당 Twilio 요청이 정상적으로 처리됐다는 의미예요. 메시지가 실제로 전달됐는지는 항상 메시지의 **상태**와 함께 표시되는 오류 코드를 확인하세요.

![상태에 따라 색으로 구분된 메시지 로그 항목](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48256112140/original/HG-uDhFau7lI9zalH2jAjoyI1Wn1LRShEg.png?1665511651)

{% hint style="info" %}
Twilio에는 **전달됨**으로 표시되는데 수신자가 메시지를 받지 못했다면, **Message SID**와 수신자 번호, 시간, 메시지 상태를 복사해 두세요. Twilio Support에 문의할 때 이 정보를 전달하면 통신사 쪽 전달 과정을 조사할 수 있어요.
{% endhint %}

![전달됨 상태인 메시지 로그 항목](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48255067362/original/PkEVsPA-qqdDHczBrU2y2-69K8ibOYCgsg.png?1665005446)

### 6단계. 메시지 상세정보 보기

링크가 걸린 날짜를 클릭하면 **메시지 상세정보**를 볼 수 있어요. 다음 내용이 포함돼요.

- **Delivery Steps**(전송 단계): 요청 생성, 대기열 시간, 통신사 전달
- **Request Inspector**(요청 검사기): Twilio와 내 애플리케이션 사이에 오간 요청과 응답
- **오류**: 상태가 색으로 구분돼요. 예를 들어 웹훅 엔드포인트가 없으면 `404`로 표시돼요.

기록 위에 마우스를 올리면 메시지 내용을 미리 볼 수 있어요.

메시지 로그 상세 화면에서는 Message SID(Twilio가 메시지마다 부여하는 고유 ID), 리소스가 생성된 시간, 받는사람과 보낸 사람 번호, Delivery Steps, Request Inspector를 확인할 수 있어요.

Delivery Steps에서는 요청이 언제 생성됐는지, Twilio 플랫폼에서 얼마나 대기했는지, 언제 통신사 파트너에게 전달됐는지 볼 수 있어요. 이 정보로 전달되지 않은 메시지가 어느 단계에서 실패했는지 파악하거나 지연 문제를 조사할 수 있어요.

![메시지 로그의 Delivery Steps 영역](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48256112783/original/WKv65dNug5qnNnCBuYlnyM7Qo-0b7Qu-fg.png?1665511884)

Request Inspector에는 이 메시지를 보내거나 받을 때 발생한 모든 요청과 응답이 표시돼요. 요청 오른쪽의 색상 상태로 오류를 쉽게 찾을 수 있어요.

![색상으로 요청 상태를 구분해 보여 주는 Request Inspector](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48256112967/original/8E4xL8VIshdTc_94LgGdLOJIcrm2tKZ_0g.png?1665511956)

위 응답에서는 메시지용으로 설정한 웹훅의 터널을 Twilio가 찾지 못해 404 응답을 받았어요.

## Twilio 번호의 MMS 지원 여부 확인하기

### 1단계. 전화번호 목록 열기

**Explore Products**(제품 둘러보기)로 이동해 아래로 스크롤한 뒤 **전화번호**를 클릭하세요.

![Explore Products에서 전화번호로 이동하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054355509/original/4g6kVsCZCG_ApP7idceL7nCpGKvUo9bGZA.png?1758616003)

### 2단계. 번호의 기능 확인하기

번호가 MMS를 지원하는지, 국내 번호로만 SMS를 보내고 받을 수 있는지 확인하세요.

![번호의 MMS 지원 여부와 국내 전용 SMS 여부를 확인하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054355682/original/hbDywsEaC75SG6Fv7ZeswatMCaTsZg3E-A.png?1758616108)

## 자주 묻는 질문

### 특정 로케이션의 계정 SID는 어디에서 찾나요?

에이전시에 Twilio 서브 계정이 여러 개라면 **Agency View**(에이전시 보기) > **설정 > 전화 연동 > 서브 계정 설정**에서 해당 로케이션의 Twilio **계정 SID**를 복사하세요. 그런 다음 Twilio에서 그 SID를 검색하면 올바른 서브 계정을 열 수 있어요. 검색할 때는 연락처의 전화번호를 서식 없이 입력하세요.

### 보낸 사람 필드와 받는사람 필드 중 어느 것으로 검색해야 하나요?

연락처가 Twilio로 보낸 수신 SMS는 **보낸 사람** 필드로 찾으세요. Twilio가 연락처에게 보낸 발신 SMS는 **받는사람** 필드로 찾으세요.

### 메시지 로그에서 행의 색은 무슨 뜻인가요?

노란색 또는 빨간색 행은 전송에 실패했거나 문제가 있는 메시지예요. 200 상태의 초록색 행은 메시지가 정상적으로 처리됐다는 뜻이에요.

### 로그에는 "delivered"로 나오는데 연락처가 메시지를 받지 못했어요. 어떻게 하나요?

해당 로그 항목의 Message SID를 복사해서 Twilio Support에 지원 티켓을 열어 주세요. 그러면 통신사 쪽에서 전달 과정을 추적할 수 있어요.

### Request Inspector에 404가 나오면 보통 무슨 뜻인가요?

404는 보통 Twilio가 해당 번호에 설정된 웹훅 엔드포인트에 연결하지 못했다는 뜻이에요. URL이 없거나 잘못됐거나, 요청을 받는 서버나 터널이 중단된 경우일 수 있어요.

### Twilio 번호가 MMS를 지원하는지, 국내 SMS만 지원하는지 어떻게 알 수 있나요?

**Explore Products** > **전화번호**로 이동해 번호를 열고 기능을 확인하세요. MMS 지원 여부와, 해외로 SMS를 보내고 받을 수 있는지 아니면 국내로만 가능한지 알 수 있어요.
