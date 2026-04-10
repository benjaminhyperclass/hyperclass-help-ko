---

번역일: 2026-04-08
카테고리: 15-전화-시스템 > 통화
---

# 모바일 앱에서만 통화가 끊어지는 문제

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193769029/original/qvN3uv1Qy6IphW_prHfWQ7gQ48LpcfWq9g.png?1645642281)

데스크톱 다이얼러에서는 통화가 정상적으로 작동하지만, 모바일 앱에서만 통화가 실패하는 경우:

# 1. Twilio 계정 SID가 마스터 계정인지 하위 계정인지 확인하기

에이전시 보기에서 설정(Settings)을 클릭하세요.

또는 직접 [https://app.gohighlevel.com/settings/twilio](https://app.gohighlevel.com/settings/twilio)로 이동하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193766094/original/v8jRqFgJBH6dZndEelQjitEdOVZStDn0og.png?1645641856)

Twilio를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193743370/original/fr-YyReni5qJ3fMABhpRIFX38Sf9VMYD4g.png?1645638435)

이 문제가 발생한 로케이션에 따라, 하위 계정 SID가 상단의 마스터 계정 SID와 다른지 확인하세요.

모바일 앱으로 정상적으로 통화하려면 항상 Twilio 하위 계정 SID를 사용해야 합니다.

또 다른 일반적인 경우는 로케이션 사용자가 자신의 Twilio SID를 제공하는데, 이것이 모바일 앱에서 작동하지 않는 마스터 계정 SID일 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193744893/original/9YvHbpL2nMCF0EZD2i6IsU1h2ovZUcVENw.png?1645638697)

## 에이전시의 Twilio 계정을 사용할 로케이션의 경우

로케이션이 현재 마스터 계정 SID를 사용하고 있는 경우 이를 해결하는 단계는 다음과 같습니다:

오른쪽의 점 세 개를 클릭하여 "Update Credentials(자격증명 업데이트)"를 클릭해 연결을 삭제하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193750196/original/RIr9cQe_EwSd8PVSJZviO6XiLoC5JrzzJg.png?1645639356)

여기서 **Delete connection(연결 삭제)**을 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193753994/original/vlXBAq5UlsRIXn31zQ1pKseNpJacXNXRsA.png?1645639751)

"Create Sub-Account(하위 계정 생성)"을 클릭하면 상단에 설정된 에이전시 Twilio 마스터 계정을 기반으로 Twilio 하위 계정이 생성됩니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193754153/original/mqtzEHrAKKYJeUBTFzX4P5yl15ZCHtVvzg.png?1645639793)

하위 계정이 생성되면 "Move numbers(전화번호 이동)"를 클릭하여 클라이언트의 마스터 계정에서 하위 계정으로 전화번호를 이동하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193755160/original/pUMRKPR0sra_x4gteUL208R-2KzX8RLC4w.png?1645639828)

전화번호 이동 도구에서 오류가 표시되면 Twilio 지원팀에 문의하여 전화번호 이동을 도와달라고 요청하세요:

[전화번호 이동이 작동하지 않고 오류가 표시되는 경우](move-number-not-working-showing-error-request-failed-with-status-code.md)

## 클라이언트 자체 Twilio 계정을 사용할 로케이션의 경우

로케이션이 현재 클라이언트의 마스터 계정 SID를 사용하고 있는 경우 이를 해결하는 방법은 두 가지입니다:

### 1번째 방법: 클라이언트의 Twilio 계정에서 하위 계정 생성 → 전화번호 이동 → Hyperclass에서 업데이트

[Twilio 콘솔에서 새 하위 계정을 생성하는 방법](https://support.twilio.com/hc/en-us/articles/360011348693-View-and-Create-New-Twilio-Subaccounts)

- [콘솔의 하위 계정 페이지](https://www.twilio.com/console/project/subaccounts)에 접속합니다.
- "Create new Subaccount"를 클릭하거나 ![](https://support.twilio.com/hc/article_attachments/360017865213/Icon_New.png) 아이콘을 클릭합니다.
- 원하는 하위 계정 이름을 입력하고 "Create"를 클릭합니다.
![](https://support.twilio.com/hc/article_attachments/360017137614/Sub_04.png)

- 생성이 완료되면 하위 계정을 클릭하고 **Account SID와 auth token을 복사**합니다.

클라이언트는 [이 지침에 따라](https://support.twilio.com/hc/en-us/articles/223135327-Moving-Twilio-Phone-Numbers-to-another-Twilio-project) Twilio에 티켓을 열어 마스터 계정에서 하위 계정으로 전화번호를 이동할 수 있습니다.

오른쪽의 점 세 개를 클릭하여 "Update Credentials(자격증명 업데이트)"를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193757188/original/CbsOWPRhyWrRJ-vTnHy9wLe0JmUMb9EtCg.png?1645640092)

복사한 account SID와 auth token을 여기에 붙여넣고 **Save(저장)**를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193761766/original/VO6G43kHENBRGI1uOezafSIZJiSf7eqjyw.png?1645641065)

### 2번째 방법: Hyperclass를 사용하여 클라이언트의 Twilio 계정 SID를 기반으로 하위 계정 생성

오른쪽의 점 세 개를 클릭하여 **Update Credentials(자격증명 업데이트)**를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193757188/original/CbsOWPRhyWrRJ-vTnHy9wLe0JmUMb9EtCg.png?1645640092)

여기서 **Delete connection(연결 삭제)**를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193753994/original/vlXBAq5UlsRIXn31zQ1pKseNpJacXNXRsA.png?1645639751)

빈 상태가 되면 위로 스크롤하여 마스터 Account SID와 auth token을 클라이언트 자체 Twilio 마스터 계정 SID와 auth token으로 교체하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193763658/original/YhjuNkYLzEfthQcuB5wyEByVq3ycqohmAA.jpeg?1645641433)

**Create subaccount(하위 계정 생성)**을 클릭하면 클라이언트의 Twilio 마스터 계정을 기반으로 Twilio 하위 계정이 생성됩니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193763652/original/2kHzrthL5WyW2SmqztwqzCUAZx24GPebOA.png?1645641433)

하위 계정이 생성되면 "Move numbers(전화번호 이동)"를 클릭하여 클라이언트의 마스터 계정에서 하위 계정으로 전화번호를 이동하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193763653/original/TNDnfgwHJRYByOWF4yTqAw-diFgIB0MmrQ.png?1645641433)

전화번호 이동 도구에서 오류가 표시되면 Twilio 지원팀에 문의하여 전화번호 이동을 도와달라고 요청하세요:

[전화번호 이동이 작동하지 않고 오류가 표시되는 경우](move-number-not-working-showing-error-request-failed-with-status-code.md)

해당 전화번호들이 로케이션에 표시되면, 여기서 다시 마스터 Account SID와 auth token으로 전환할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193764669/original/dF0znroKFFPSS8BLBAQqnwBIMfcfphjS8Q.png?1645641529)

# 2. 로케이션이 이미 Twilio 하위 계정 SID를 사용 중인 경우 TwiML 앱의 로케이션 ID가 올바른지 확인하기

접속할 링크:

[https://api.gohighlevel.com/twilio/create_application/**<location_id>**](https://api.gohighlevel.com/twilio/create_application/%3Clocation_id%3E)

---
*원문 최종 수정: Wed, 23 Feb, 2022 at 12:56 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*