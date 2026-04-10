---

번역일: 2026-04-08
카테고리: 15-전화-시스템 > 메시징
---

# 자체 Twilio 계정 연결 시 특정 문자 메시지 로그 확인하는 방법

**개요**

Twilio는 Twilio와 애플리케이션 간의 메시징 활동을 조사할 수 있는 도구를 제공합니다. 메시지 전송이 실패하거나 지연되거나 예상과 다르게 작동할 때, Twilio의 메시징 로그(Messaging Logs)를 확인하는 것이 첫 번째 단계여야 합니다. 이러한 로그는 전송 상태를 확인하고, 오류를 식별하며, 추가 문제 해결을 위한 세부 정보를 수집하는 데 도움이 됩니다.

## 메시징 로그에 접근하고 사용하는 방법

단계별 가이드:

### 1. Twilio에 로그인

- [https://console.twilio.com/](https://console.twilio.com/)으로 이동하세요.

### 2. 하위 계정 접근

- Account(화면 중앙) → Subaccounts를 클릭하세요.

![Twilio 하위 계정 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054353513/original/hSe8ljpyqWr2eDO_n_WGaDvcS4qRmpeIMg.png?1758614833)

하위 계정이 너무 많은 경우, 하이퍼클래스(HL)로 돌아가서 해당 로케이션의 Account SID를 복사하세요.

![하이퍼클래스에서 Account SID 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054354205/original/ts0DBJbV4wnlvI5iNQzp8xPOGBiWQk_YKg.png?1758615109)

Twilio에서 해당 Subaccount SID를 검색하여 열어보세요.

에이전시 레벨 설정(Settings) → Twilio에서 Twilio Subaccount SID를 기반으로 검색하세요.

Account SID를 여기에 붙여넣고 클릭하세요:

![Twilio Subaccount SID 검색](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054354374/original/VHVGUsFKO3DJlYn0Ck4P0VA5tbMPZLXcVA.png?1758615216)

### 3. 메시징 로그로 이동

- 좌측 패널에서: Monitor > Logs > Messaging을 클릭하세요.

![메시징 로그 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054354516/original/AAyXbBPdklR9Yw5VdG-9MDJqcNosJD3-CA.png?1758615322)

### 4. 메시지 검색

- 연락처의 전화번호(형식 없이)를 검색 필드에 사용하세요:

FROM 필드 → 수신 SMS (연락처가 Twilio로 문자를 보낸 경우)

- TO 필드 → 발신 SMS (Twilio가 연락처에게 문자를 보낸 경우)

리드의 전화번호(모든 전화번호 형식 제거)를 TO 필드에 입력하세요:

![전화번호 검색 필드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054354685/original/2anbBrzTG7ygEalA4ntfEiKjy_svyXWVaA.png?1758615461)

### 5. 로그 항목 검토

- 각 로그 라인에는 다음이 표시됩니다:

Message SID (고유 식별자)

- TO 및 FROM 번호

- 상태 (accepted, delivered, failed 등)

- Segments (SMS가 분할된 경우의 부분 수)

- Media (MMS가 첨부된 경우)

- 로그에서 문제 식별:

노란색 또는 빨간색 행은 실패하거나 문제가 있는 메시지를 나타냅니다.

- 녹색 (200 상태)은 성공을 나타냅니다.

![메시징 로그 상태](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48256112140/original/HG-uDhFau7lI9zalH2jAjoyI1Wn1LRShEg.png?1665511651)

"delivered"로 표시되지만 연락처가 받지 못하고 있다면, 이 Message SID를 가져와서 [Twilio 지원팀에 지원 티켓을 생성하세요](https://support.twilio.com/hc/en-us/articles/360048500694-Contacting-Twilio-Support)

![Message SID 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48255067362/original/PkEVsPA-qqdDHczBrU2y2-69K8ibOYCgsg.png?1665005446)

### 6. 메시지 세부 정보 보기

- 하이퍼링크된 날짜를 클릭하면 다음을 포함한 전체 세부 정보를 볼 수 있습니다:

Delivery Steps: 요청 생성, 대기 시간, 통신사 전달

- Request Inspector: Twilio와 애플리케이션 간의 요청/응답

- Errors: 색상으로 구분된 상태 (예: 웹훅 엔드포인트가 누락된 경우 404)

- 레코드 위에 마우스를 올리면 메시지 내용을 미리 볼 수 있습니다.

메시지 로그의 상세 보기에서는 Message SID(이 메시지에 대한 Twilio의 고유 식별자), 리소스가 생성된 시간, TO 및 FROM 번호, Delivery Steps, Request Inspector를 찾을 수 있습니다.

이 로그의 Delivery Steps 섹션은 요청이 언제 생성되었는지, Twilio 플랫폼에서 얼마나 오래 대기했는지, 언제 통신사 파트너에게 전달을 위해 발송되었는지를 보여줍니다. 이러한 요소들은 미전달 메시지가 어디서 실패했는지 파악하거나 지연 문제를 조사하는 데 도움이 될 수 있습니다.

![메시지 전달 단계](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48256112783/original/WKv65dNug5qnNnCBuYlnyM7Qo-0b7Qu-fg.png?1665511884)

Request Inspector는 이 메시지를 보내거나 받을 때 만들어진 모든 요청과 응답을 보여줍니다. 요청 우측의 색상으로 구분된 상태를 통해 요청의 오류를 쉽게 확인할 수 있습니다.

![Request Inspector](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48256112967/original/8E4xL8VIshdTc_94LgGdLOJIcrm2tKZ_0g.png?1665511956)

위 응답에서 Twilio가 메시지용으로 설정한 웹훅의 터널을 찾을 수 없어서 404 응답을 받았다는 것을 확인할 수 있습니다.

**Twilio 번호의 MMS 기능 확인**

1. Explore Products → 스크롤 다운 → Phone Numbers로 이동하세요.

![Twilio 전화번호 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054355509/original/4g6kVsCZCG_ApP7idceL7nCpGKvUo9bGZA.png?1758616003)

2. 해당 번호에 MMS 기능이 있는지, 또는 국내 번호로만 SMS를 보내고 받을 수 있는지 확인하세요.

![MMS 기능 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054355682/original/hbDywsEaC75SG6Fv7ZeswatMCaTsZg3E-A.png?1758616108)

---
*원문 최종 수정: Tue, 23 Sep, 2025 at 3:28 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*