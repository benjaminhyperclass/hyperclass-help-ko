---

번역일: 2026-04-06
카테고리: 15-전화-시스템
---

# Twilio에서 특정 통화 로그 확인하는 방법

Twilio는 Twilio와 애플리케이션 간의 상호작용을 조사할 수 있는 여러 도구를 제공합니다. 전화 통화가 실패하거나 지연되거나 예상과 다르게 동작할 경우, 이러한 도구들이 디버깅을 위한 첫 번째 단계입니다.

## 통화 로그로 이동하고 사용하는 방법

Twilio Console에 접속하여 Twilio 계정의 오류 로그를 확인할 수 있습니다. 이 로그를 통해 어떤 Twilio 리소스가 영향을 받았고 누가 담당했는지 파악할 수 있습니다.

1. Twilio에 로그인하세요 [https://console.twilio.com/](https://console.twilio.com/)

2. 우측 상단으로 이동 → Account(계정) 클릭 → Subaccounts(서브계정) 클릭

[
![서브계정 메뉴로 이동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48275331048/original/tKKQGCoc0KwVVECepLM-u6_le6WDb30LrA.jpeg?1673655495)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48182954716/original/xU1ASMn2bOtT6Y1BdbfgUAYu3F-UlqKoNQ.jpeg?1643126214)

3. Twilio 내에 서브계정이 너무 많다면, Hyperclass로 돌아가서 해당 로케이션의 Account SID를 복사하여 Twilio에서 검색하세요:

[
![Account SID 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48275331050/original/F1w4q9sNHfd2rFix5SIbGIWkFrJG7CYyhA.png?1673655496)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243463531/original/HGHMrQLG8UVwaBtM03YuuaWZaffth7TEfg.png?1659711416)

4. 복사한 Account SID를 가지고 Twilio로 다시 돌아가세요

에이전시 레벨 설정에서 Twilio Subaccount SID를 기반으로 검색하세요 → Twilio
Account SID를 여기에 붙여넣고 클릭하세요:

[
![Account SID 검색](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48275331045/original/3VBRH3JZhS8yXCHdp4JaSshLMhTpXUM8zA.png?1673655495)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48182954706/original/TaZM1HBRp-VAFwRC5VUjjoQfYNndbVXXeQ.png?1643126214)

5. 서브계정을 클릭하면 좌측 상단에 주황색 텍스트가 표시됩니다:

![서브계정 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48206739357/original/89Q8Rpsbb4Jw6U_0n-R2myOb5EKTcWU0Ew.png?1648158152)

Twilio 내 서브계정에 들어간 후:

### 6. 먼저 Twilio 전화번호가 음성 기능을 지원하는지 확인하세요:

[
![전화번호 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48291056571/original/XA1mgNJH9hU_ISW_9uZwQKMxlemdO-pIqw.jpeg?1680624454)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48182954714/original/upUE1TjZVCDpol7AORlv2jGlHDK5qCPJRg.jpeg?1643126214)

### Phone numbers(전화번호)를 클릭하세요:

[
![전화번호 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48291057314/original/kvs-zd_5XOXt5ABtGuKQ5uc94zyex7jVDg.jpeg?1680624625)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48282353637/original/UuPrOZYjpEbL77yl8Mf1o-wEwddnsT-x9g.png?1676661628)

### Twilio 전화번호에 전화기 아이콘이 표시되는지 확인하세요:

[
![전화기 아이콘 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48291056995/original/0BbgQN6wxDQGajmzMTWpzOo6u98R93KTXw.png?1680624553)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48282353849/original/XX7YyfGy4J3Gb7PbKgDidBzLeG-9eTNk-w.png?1676661731)

7. 좌측 패널로 이동하여 Monitor(모니터) > Logs(로그) > Calls(통화)를 클릭하세요

FROM / TO 필드에 연락처의 전화번호를 입력하세요 (모든 전화번호 형식 제거):

FROM 필드: 수신 통화를 확인하려면 연락처의 전화번호를 TO 필드에 입력하세요

Twilio 번호로 전화를 건 연락처 번호를 From 필드에 붙여넣으세요

![FROM 필드 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283208691/original/GBzcBgBGw-9kH79nUBfnalpNgvMiuMWqVg.png?1677088149)

첫 번째 레코드를 참조할 수 있습니다. 이것이 통화를 전달 번호로 라우팅하는 시점입니다

![첫 번째 레코드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283209009/original/3iL12ECP4ej4b3unl9kF6xEOp6ZdMa70Fg.png?1677088204)

TO 필드: 발신 통화를 확인하려면 연락처의 전화번호를 TO 필드에 입력하세요

![TO 필드 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283208577/original/otx5gV4kidnMdARoACo39JxcwbD_IhKTxw.png?1677088138)

8. 문제가 발생한 통화를 찾으세요. 하이퍼링크된 날짜를 클릭하여 각 통화의 세부 정보를 더 자세히 확인할 수 있습니다.

![통화 세부정보](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48275331233/original/xh0Wss_7g38SY0XN-_ylhUwS-046Btwueg.png?1673655790)

8. 이 Call SID를 복사하여 [Twilio 지원팀에 지원 티켓을 생성](https://support.twilio.com/hc/en-us/articles/360048500694-Contacting-Twilio-Support)하면 더 자세한 내용을 확인할 수 있습니다

![Call SID 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48275331221/original/U9T9uUAhi3o8Dudn_ZMBi5P_OoWIdxPh3w.png?1673655762)

---
*원문 최종 수정: Fri, 19 May, 2023 at 5:01 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*