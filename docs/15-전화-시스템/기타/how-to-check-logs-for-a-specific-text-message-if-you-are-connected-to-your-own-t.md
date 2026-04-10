---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# 자체 Twilio 계정 연동 시 특정 문자 메시지 로그 확인 방법

**개요**

Twilio는 Twilio와 애플리케이션 간의 메시징 활동을 조사할 수 있는 도구를 제공합니다. 메시지가 전송에 실패하거나 지연되거나 예상과 다르게 동작할 때, Twilio의 메시징 로그(Messaging Logs)를 검토하는 것이 첫 번째 단계입니다. 이 로그는 전송 상태를 확인하고 오류를 식별하며 추가 문제 해결을 위한 세부 정보를 수집하는 데 도움이 됩니다.

## 메시징 로그(Messaging Logs)에 접근하고 사용하는 방법

단계별 가이드-

### 1. Twilio에 로그인

- [https://console.twilio.com/](https://console.twilio.com/)으로 이동하세요.

### 2. 서브어카운트(Subaccounts)에 접근

- 화면 중앙의 Account(계정) → Subaccounts(서브어카운트)를 클릭하세요.

![Twilio 계정 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054353513/original/hSe8ljpyqWr2eDO_n_WGaDvcS4qRmpeIMg.png?1758614833)

서브어카운트가 너무 많다면, 하이퍼클래스(HL)로 돌아가서 해당 로케이션의 Account SID를 복사하세요.

![하이퍼클래스에서 Account SID 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054354205/original/ts0DBJbV4wnlvI5iNQzp8xPOGBiWQk_YKg.png?1758615109)

Twilio에서 해당 서브어카운트 SID를 검색하고 열어주세요.

에이전시 레벨 설정(Settings) → Twilio에서 Twilio 서브어카운트 SID를 기준으로 검색하세요. Account SID를 여기에 붙여넣고 클릭하세요:

![Twilio 서브어카운트 SID 검색](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054354374/original/VHVGUsFKO3DJlYn0Ck4P0VA5tbMPZLXcVA.png?1758615216)

### 3. 메시징 로그로 이동

- 왼쪽 패널에서: Monitor(모니터) > Logs(로그) > Messaging(메시징)을 선택하세요.

![메시징 로그 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054354516/original/AAyXbBPdklR9Yw5VdG-9MDJqcNosJD3-CA.png?1758615322)

### 4. 메시지 검색

- 검색 필드에 연락처의 전화번호를 (서식 없이) 입력하세요:

FROM 필드 → 수신 SMS(문자) (연락처가 Twilio로 문자를 보냄)

- TO 필드 → 발신 SMS(문자) (Twilio가 연락처에게 문자를 보냄)

리드의 전화번호를 (모든 전화 서식 제거) TO 필드에 입력하세요:

![전화번호 검색](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054354685/original/2anbBrzTG7ygEalA4ntfEiKjy_svyXWVaA.png?1758615461)

### 5. 로그 항목 검토

- 각 로그 라인은 다음을 보여줍니다:

Message SID (고유 식별자)

- TO 및 FROM 번호

- 상태(accepted, delivered, failed 등)

- 세그먼트 (SMS가 분할된 경우 부분 수)

- 미디어 (MMS가 첨부된 경우)

- 로그는 문제점을 강조표시합니다:

노란색 또는 빨간색 행은 실패했거나 문제가 있는 메시지를 나타냄

- 초록색 (200 상태)은 성공을 나타냄

![로그 항목 상태](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48256112140/original/HG-uDhFau7lI9zalH2jAjoyI1Wn1LRShEg.png?1665511651)

만약 전송됨(delivered)으로 표시되지만 연락처가 받지 못했다면, 이 Message SID를 기록하고 [Twilio 지원팀에 지원 티켓을 생성](https://support.twilio.com/hc/en-us/articles/360048500694-Contacting-Twilio-Support)하세요.

![Message SID 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48255067362/original/PkEVsPA-qqdDHczBrU2y2-69K8ibOYCgsg.png?1665005446)

### 6. 메시지 상세 정보 보기

- 하이퍼링크된 날짜를 클릭하면 다음을 포함한 전체 상세 정보를 볼 수 있습니다:

전송 단계(Delivery Steps): 요청 생성, 대기열 시간, 통신사 전달

- 요청 검사기(Request Inspector): Twilio와 앱 간의 요청/응답

- 오류: 색상 코딩된 상태 (예: 웹훅 엔드포인트가 없으면 404)

- 레코드 위에 마우스를 올리면 메시지 내용을 미리 볼 수 있습니다.

메시지 로그의 상세 보기에서 Message SID(이 메시지에 대한 Twilio의 고유 식별자)와 리소스 생성 시간, TO 및 FROM 번호, 전송 단계, 요청 검사기를 확인할 수 있습니다.

로그의 전송 단계(Delivery Steps) 섹션은 요청이 언제 생성되었는지, Twilio 플랫폼에서 얼마나 오래 대기열에 있었는지, 언제 통신사 파트너에게 전송을 위해 발송되었는지를 보여줍니다. 이러한 요소들은 전송되지 않은 메시지가 어디에서 실패했는지 확인하거나 지연 문제를 조사하는 데 도움이 됩니다.

![전송 단계 상세](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48256112783/original/WKv65dNug5qnNnCBuYlnyM7Qo-0b7Qu-fg.png?1665511884)

요청 검사기는 이 메시지를 보내거나 받을 때 만들어진 모든 요청과 응답을 보여줍니다. 요청 오른쪽의 색상 코딩된 상태로 요청 오류를 쉽게 확인할 수 있습니다.

![요청 검사기 상세](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48256112967/original/8E4xL8VIshdTc_94LgGdLOJIcrm2tKZ_0g.png?1665511956)

위 응답에서 메시지에 대해 설정한 웹훅의 터널을 Twilio가 찾을 수 없어서 404 응답을 받았다는 것을 확인할 수 있습니다.

**Twilio 번호의 MMS 기능 확인**

1. Explore Products(제품 탐색) → 아래로 스크롤 → Phone Numbers(전화번호)로 이동하세요.

![전화번호 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054355509/original/4g6kVsCZCG_ApP7idceL7nCpGKvUo9bGZA.png?1758616003)

2. 해당 번호가 MMS 기능을 지원하는지, 또는 국내 번호로만 SMS(문자) 송수신이 가능한지 확인하세요.

![번호 기능 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054355682/original/hbDywsEaC75SG6Fv7ZeswatMCaTsZg3E-A.png?1758616108)

---
*원문 최종 수정: Tue, 23 Sep, 2025 at 3:28 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*