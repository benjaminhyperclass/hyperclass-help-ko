---

번역일: 2026-04-08
카테고리: 개발자 > 고급 설정
---

# Zapier를 사용한 하위 계정 생성

# Zapier 설정 가이드 - 개발자 연동


### Public API를 통해 새 하위 계정을 생성하려면 현재 [ProPlan](../../11-설정/에이전시-설정/billing-related-questions-for-agencies.md)-How-Do-I-Upgrade-my-Hyperclass-Account?)에 가입되어 있는지 확인해주세요.


API 문서 및 관련 정보는 개발자 웹사이트를 참조하세요: [https://developers.gohighlevel.com/](https://developers.gohighlevel.com/) 


**진행하기 전 중요 사항:**

Zapier 없이 Hyperclass 내에서 계정 생성을 자동화하고 싶다면 Hyperclass [SaaS 가이드](../../16-SaaS-설정/Saas-Mode/saas-mode-full-setup-guide-faq.md)를 확인해주세요 (Pro 플랜 필요).

[Zapier LeadConnector 연동](https://zapier.com/apps/leadconnector/integrations)의 "add Account" 액션은 2022년 2월 21일에 중단되었습니다.

이 문서의 단계는 고급 연동을 위한 것이며 정보 제공 목적입니다. 지원팀에서는 API나 커스텀 Zapier 연동의 복잡성으로 인해 현재 해당 서비스를 지원하지 않지만, 시작과 연결에 도움이 되는 많은 도구와 그룹을 제공합니다! API 관련 지원은 개발자 협의회 슬랙 커뮤니티에 참여하세요: [https://www.gohighlevel.com/dev-slack](https://www.gohighlevel.com/dev-slack)

또한 매월 개발자 협의회 줌 콜(마지막에서 두 번째 금요일)을 진행하며, 이벤트 캘린더에서 확인할 수 있습니다: [https://www.gohighlevel.com/events](https://www.gohighlevel.com/events)

API 문서 및 관련 정보는 개발자 웹사이트를 참조하세요: [https://developers.gohighlevel.com/](https://developers.gohighlevel.com/)


이 문서를 사용하려면 Zapier 웹훅이 필요하며, 이는 무료 플랜에 포함되지 않습니다. 진행하기 전에 유료 플랜에 가입해주세요.


**목차**


#### [1. 에이전시 설정에서 에이전시 API 키 가져오기](#1-에이전시-설정에서-에이전시-api-키-가져오기)

#### [2. 에이전시 API 키를 복사한 후 Zapier에 로그인하여 새 Zap 만들기](#2-에이전시-api-키를-복사한-후-zapier에-로그인하여-새-zap-만들기)

#### [3. Zapier로 돌아가서 로케이션 Zap 만들기](#3-zapier로-돌아가서-로케이션-zap-만들기)

#### [4. Continue를 클릭하고 테스트 실행하기](#4-continue를-클릭하고-테스트-실행하기)

#### [5. 마지막 단계로 사용자, 비밀번호를 만들고 새 로케이션에 추가하기](#5-마지막-단계로-사용자-비밀번호를-만들고-새-로케이션에-추가하기)

#### [6. Continue를 클릭하고 테스트 실행하기](#6-continue를-클릭하고-테스트-실행하기)

#### [문제 해결](#문제-해결)

#### [Q1) 사용자 생성 시 Post 결과에서 비밀번호, 로케이션 또는 에이전시 API를 받지 못하는 경우](#q1-사용자-생성-시-post-결과에서-비밀번호-로케이션-또는-에이전시-api를-받지-못하는-경우)

#### [Q2) 워크플로우에서 웹훅이 실행되지 않는 경우](#q2-워크플로우에서-웹훅이-실행되지-않는-경우)-워크플로우에서-웹훅이-실행되지-않는-경우)


## 1. 에이전시 설정에서 에이전시 API 키 가져오기

1.1단계: 에이전시 하위에 새 로케이션을 만들려면 에이전시 API 키를 사용해야 합니다. API 키를 찾으려면 Agency View(에이전시 보기) -> Settings(설정) -> API Keys(API 키) -> API key 복사 클릭으로 이동하세요.


1.2단계: 나중에 사용하기 위해 이 API 키를 저장하거나, 이 문서에서 사용하라고 안내하는 두 지점에서 이 단계로 돌아오세요! 나머지 연동을 구축하는 시간을 투자하기 전에 에이전시 API 키를 미리 준비해두는 것이 중요합니다.


참고:

API 키가 보이지 않는다면 "+ Create New" 버튼(주황색 화살표)을 클릭하여 새 키를 생성하세요.


![에이전시 API 키 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48178848059/original/ecNsGcs-m9uuoDpbuU1fWDPD5tgGpRtWNA.png?1642119401)


## 2. 에이전시 API 키를 복사한 후 [Zapier](https://zapier.com/app/login)에 로그인하여 새 Zap 만들기


2.1단계: Zap의 첫 번째 단계는 Zapier가 Hyperclass에서 계정을 생성하도록 트리거하는 액션/이벤트입니다. 이 액션/이벤트는 파이프라인 변경, 기회 추가/업데이트 등과 같은 LeadConnector 액션([모든 내부 액션 보기](https://zapier.com/apps/leadconnector/integrations))이거나, Zapier의 "capture webhook" 액션과 워크플로우를 사용하여 새 하위 계정을 만들 수 있습니다.


아래 예시에서는 Zapier의 "Capture webhook" 액션을 사용합니다. 웹훅 URL을 복사하고 다음 단계(2.2)로 진행하세요.


![Zapier 웹훅 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48194925453/original/9hyAddnNsmMmiPGMUm4NIQd1X3jBgZoZcg.gif?1645891175)


참고:

Zapier 웹훅(프리미엄)을 사용하려면 유료 플랜에 가입하세요.


2.2단계: 다음으로, 방금 만든 Zapier 웹훅을 실행할 새 워크플로우를 Hyperclass에 설정해보겠습니다.


워크플로우의 첫 번째 단계는 "Account Creation Form"이라는 주문 폼입니다. 다음으로 +를 클릭하고 "webhook" 액션을 검색하여 선택하세요(아래 이미지 참조).


폼과 웹훅을 설정한 후 다음 단계로 진행하기 전에 웹훅을 테스트하세요. 웹훅을 테스트하려면 더미 연락처 데이터로 폼을 최소 한 번 제출하세요.


![워크플로우 웹훅 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48178863464/original/zL6mUxu4EGRomcUJsZmORPCWrlIEeWnorw.png?1642133236)


참고:

폼을 최소 한 번 제출하지 않으면 Zapier가 새 로케이션 생성이라는 다음 단계에 필요한 데이터를 받지 못합니다.


## 3. Zapier로 돌아가서 로케이션 Zap 만들기


### 3.1단계: 웹훅을 다시 선택하되 이번에는 "Custom Request"를 선택하고 Action Event로 "POST"를 선택하세요.


### 3.2단계: 로케이션 생성 엔드포인트 URL 추가:

[https://rest.gohighlevel.com/v1/locations](https://rest.gohighlevel.com/v1/locations)

### 3.3단계: Data Pass-Through는 비워두세요.


### 3.4단계: 다음으로 2.2단계에서 제출한 연락처 정보로 "Data"를 매핑해보겠습니다.

참고:

- "input fields"에 대한 데이터가 보이지 않으면 워크플로우로 돌아가서 폼을 최소 한 번 제출하세요.

{

    "businessName": "{{Insert__company_name}}",

    "address": "3500 Deer Creek Road",

    "city": "Palo Alto",

    "country": "US",

    "state": "CA",

    "postalCode": "94304",

    "website": "[https://www.tesla.com](https://www.tesla.com)",

    "timezone": "US/Central",

    "firstName": "{{Insert __first_name}}",

    "lastName": "{{Insert  __last_name}}",

    "email": "{{Insert __email}}",

    "phone": "{{Insert __Phone}}",

    "settings": {

        "allowDuplicateContact": false,

        "allowDuplicateOpportunity": false,

        "allowFacebookNameMerge": false,

        "disableContactTimezone": false

    },

    "snapshot": {

        "id": "NLCFWNuvs9DLwMsYku3H",

        "type": "vertical"

    },

    "social": {

        "facebookUrl": "[https://facebook.com/groups/XXX](https://facebook.com/groups/XXX)",

        "googlePlus": "[https://groups.google.com/d/XXX](https://groups.google.com/d/XXX)",

        "linkedIn": "[https://www.linkedin.com/groups/XXX/profile](https://www.linkedin.com/groups/XXX/profile)",

        "foursquare": "[https://foursquare.com/groups/XXX](https://foursquare.com/groups/XXX)",

        "twitter": "[https://twitter.com/XXX](https://twitter.com/XXX)",

        "yelp": "[https://yelp.com/XXX](https://yelp.com/XXX)",

        "instagram": "[https://instagram.com/XXX](https://instagram.com/XXX)",

        "youtube": "[https://youtube.com/XXX](https://youtube.com/XXX)",

        "pinterest": "[https://pinterest.com/XXX](https://pinterest.com/XXX)",

        "blogRss": "[https://rss.xyz.com](https://rss.xyz.com)",

        "googlePlaceId": "redfdfdere"

    }

}


### 3.5단계: (선택 사항) Payload에 스냅샷 ID 추가

이 연동을 통해 생성할 새 계정에 하나 이상의 스냅샷을 자동으로 로드하려면, 위 payload 본문에 넣을 각 스냅샷의 스냅샷 ID를 찾아야 합니다. API 호출을 사용하지 않고 스냅샷 ID를 찾는 가장 쉬운 방법은 아래 동영상을 참조하세요.


스냅샷을 추가할 때는 "스냅샷 ID"와 "Type"을 다음 중 하나로 추가하세요: Own, Imported, Vertical

다양한 스냅샷 "Type"의 의미:

- Own: [직접 생성한 스냅샷](../../19-에이전시-뷰/Snapshots/snapshots-overview.md)

- Imported: 다른 에이전시의 스냅샷

- Vertical: 네이티브 Hyperclass 스냅샷


### 3.6단계: Basic Authorization은 비워두세요.


### 3.7단계: Authorization Headers 추가

요청이 성공적으로 제출되려면 두 개의 헤더가 필요합니다. API 키가 포함된 Authorization 헤더와 데이터가 전송되는 형식을 API에 알려주는 Content Type 헤더입니다.


먼저 헤더 제목으로 "Authorization"을 추가한 다음, "Bearer"라는 단어를 입력하고 -> 공백 하나를 추가한 후 첫 번째 단계의 에이전시 API 키를 authorization 박스에 입력하세요.


아래 + 버튼을 클릭하고 새 헤더를 추가하세요: "Content-Type", 그다음 "application/json"


![Authorization Headers 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48223503954/original/MKkSO5aobHHTa4OBBLIZhLbYpVNPk-Lq5g.png?1651684704)


참고:

헤더 제목으로 "Authorization"을 추가할 때, "Bearer"라는 단어를 입력한 후 -> 공백 하나를 추가하고 첫 번째 단계의 에이전시 API 키를 추가하세요.


## 4. Continue를 클릭하고 테스트 실행하기

새 로케이션 ID에 대한 "Post" 결과를 확인하세요.


![로케이션 생성 테스트 결과](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193279760/original/Tfvh5uOai8c80gDI--86E9P746Yax2ht3A.png?1645579331)


로케이션 ID 참고: 섹션 3.4에서 한 것처럼, 이 문서의 5단계(사용자 생성 부분)에 로케이션 ID를 매핑할 때 스크린샷에 강조 표시된 로케이션 ID를 복사하여 붙여넣지 않도록 하세요. 이 단계에서는 단순히 로케이션이 성공적으로 생성되었는지 확인하고, 이 위치에 있는 로케이션 ID가 Hyperclass 계정에 들어가지 않고도 그 증거입니다. 섹션 3.4 필드 매핑과 유사한 드롭다운에서 선택하는 대신 이 로케이션 ID를 다음 단계에 복사하여 붙여넣으면, 나중에 실행되는 모든 후속 사용자 생성이 매번 새 로케이션이 생성될 때마다 동적으로 업데이트되는 대신 붙여넣은 로케이션 ID에 매핑됩니다.


## 5. 마지막 단계로 사용자, 비밀번호를 만들고 새 로케이션에 추가하기


![사용자 생성 단계](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193675898/original/DvazTPRbMEkk7Bm4jlM2iN3s1nE_PTs48Q.gif?1645632660)


### 5.1단계: 웹훅을 다시 선택하되 "Custom Request"를 선택하고 Action Event로 "POST"를 선택하세요.


### 5.2단계: 사용자 생성 엔드포인트 URL 추가:

[https://rest.gohighlevel.com/v1/users/](https://rest.gohighlevel.com/v1/users/)

### 5.3단계: Data Pass-Through는 비워두세요.


### 5.4단계: 다음으로 2.2단계에서 제출한 연락처 정보로 사용자 "Data"를 매핑해보겠습니다.

이전 단계의 입력 필드를 매핑한 후 원하는 사용자 권한을 설정하세요.


![사용자 데이터 매핑](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48194086155/original/JkkYWvOPrNhUYes-39l_ARAf1wNSuVmXwA.png?1645707292)


참고:

비밀번호를 자동 생성하려면 Password 필드를 비워두세요. 또는 특수 기호가 포함된 8자리 문자를 사용하세요.

로케이션 ID: 이 스크린샷에서 로케이션 ID가 어떻게 보이는지 확인하세요. 이 줄에 복사하여 붙여넣는 대신 이전 단계의 사용 가능한 변수 목록에서 적절히 매핑되었습니다. 'ID'라는 제목의 필드를 찾으시면 됩니다.

### 사용자 데이터 필드: ([개발자 문서 보기](https://developers.gohighlevel.com/))

{

    "firstName": "Zapier",

    "lastName": "Test",

    "email": "test@testing.com",

    "password": "Qwerty123!@#",

    "type": "account",

    "role": "admin",

    "locationIds": [

        "ABXfgmOjNw2FG2Y4UJPt"

    ],

    "permissions": {

        "campaignsEnabled": false,

        "campaignsReadOnly": false,

        "contactsEnabled": true,

        "workflowsEnabled": true,

        "triggersEnabled": false,

        "funnelsEnabled": false,

        "websitesEnabled": false,

        "opportunitiesEnabled": false,

        "dashboardStatsEnabled": true,

        "bulkRequestsEnabled": true,

        "appointmentsEnabled": true,

       "reviewsEnabled": true,

        "onlineListingsEnabled": true,

        "phoneCallEnabled": true,

        "conversationsEnabled": true,

        "assignedDataOnly": false,

        "adwordsReportingEnabled": false,

        "membershipEnabled": false,

        "facebookAdsReportingEnabled": false,

        "attributionsReportingEnabled": false,

        "settingsEnabled": true,

        "tagsEnabled": true,

        "leadValueEnabled": true,

        "marketingEnabled": true

    }

}

### 5.5단계: Basic Authorization은 비워두세요.


### 5.6단계: Authorization Headers 추가

요청이 성공적으로 제출되려면 두 개의 헤더가 필요합니다. API 키가 포함된 Authorization 헤더와 데이터가 전송되는 형식을 API에 알려주는 Content-Type 헤더입니다.


먼저 헤더 제목으로 "Authorization"을 추가한 다음, "Bearer"라는 단어를 입력하고 -> 공백 하나를 추가한 후 첫 번째 단계의 에이전시 API 키를 authorization 박스에 입력하세요.


아래 + 버튼을 클릭하고 새 헤더를 추가하세요: "Content-Type", 그다음 "application/json"


![사용자 생성 Authorization Headers](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48223503789/original/b8O8E4RypkwsUDtrMQ_pdVIKCT7OOS6rbQ.png?1651684648)


참고:

헤더 제목으로 "Authorization"을 추가할 때, "Bearer"라는 단어를 입력한 후 -> 공백 하나를 추가하고 첫 번째 단계의 에이전시 API 키를 추가하세요.

## 6. Continue를 클릭하고 테스트 실행하기

완료되었습니다! 방금 새 로케이션을 생성하고 사용자를 추가했습니다.


# 문제 해결


Hyperclass과 연동을 생성할 때 인터페이스에 관계없이 API를 사용하고 있다는 점을 이해하는 것이 중요합니다. Zapier, Pabbly Connect, API Nation, Make(이전 Integromat) 또는 다른 플러그 앤 플레이 연동 도구를 사용하든, 이러한 플랫폼은 단순히 우리 API를 활용하여 여러 플랫폼을 연결하는 더 쉬운 방법일 뿐이며, 경우에 따라서는 코딩 경험이 전혀 없어도 사용할 수 있습니다.


뭔가 작동하지 않나요? 다른 조치를 취하기 전에 잠깐 멈추고 다음 문서를 검토하세요: [Webhook.site를 사용하여 API 관련 요청 문제 해결하는 방법](../Developer-Resources/how-to-use-webhook-site-to-troubleshoot-your-api-requests.md).

    - 개발자와 함께 payload 데이터를 검토하면 문제가 해결될 가능성이 높습니다.

    - 데이터를 검토하고 개발 팀과 상의한 후에도 문제가 해결되지 않는 경우, 위에 나열된 Webhook.site 문서에서 요청한 정보를 첨부하여 답장해 주시면 웹훅 데이터를 검토하여 오류의 원인을 알려드릴 수 있습니다.


위는 연동을 검토받기 위한 첫 번째 단계입니다. Webhook.site 데이터 없이는 개발자가 보고하신 문제를 분리할 수 없습니다.


#### Q1) 사용자 생성 시 Post 결과에서 비밀번호, 로케이션 또는 에이전시 API를 받지 못하는 경우

시스템은 이메일/전화번호당 고유한 비밀번호를 하나만 생성합니다. 테스트할 때 매번 고유한 데이터(이메일/전화번호)를 사용하고 있는지 확인하세요.


#### Q2) 워크플로우에서 웹훅이 실행되지 않는 경우

웹훅이 라이브/발행된 상태인지 확인한 다음, 새 연락처 정보(고유한 이메일/전화번호)를 사용하여 연락처를 다시 생성하세요. 현재 사용하던 이메일에 +1을 추가할 수 있습니다. 예: myemail+1@gmail.com, myemail+2@gmail.com 등. 이렇게 하면 자동화 이메일도 원래 이메일로 전송됩니다... [자세한 정보](https://www.google.com/search?q=adding+%2B1+to+my+email&rlz=1C1VDKB_enUS938US939&ei=TWQWYpXXD4bCkPIPu9iKiAQ&ved=0ahUKEwjVse_fopb2AhUGIUQIHTusAkEQ4dUDCA4&uact=5&oq=adding+%2B1+to+my+email&gs_lcp=Cgdnd3Mtd2l6EANKBAhBGABKBAhGGABQAFieHGCnHWgAcAF4AIAB8gGIAf0OkgEGMTYuMi4xmAEAoAEBwAEB&sclient=gws-wiz)


참고:

이 문서의 단계는 고급 연동을 위한 것이며 정보 제공 목적입니다. 지원팀에서는 API나 커스텀 Zapier 연동의 복잡성으로 인해 현재 해당 서비스를 지원하지 않지만, 시작과 연결에 도움이 되는 많은 도구와 그룹을 제공합니다! API 관련 지원은 개발자 협의회 슬랙 커뮤니티에 참여하세요: [https://www.gohighlevel.com/dev-slack](https://www.gohighlevel.com/dev-slack)

또한 매월 개발자 협의회 줌 콜(마지막에서 두 번째 금요일)을 진행하며, 이벤트 캘린더에서 확인할 수 있습니다: [https://www.gohighlevel.com/events](https://www.gohighlevel.com/events)

API 문서 및 관련 정보는 개발자 웹사이트를 참조하세요: [https://developers.gohighlevel.com/](https://developers.gohighlevel.com/)

---
*원문 최종 수정: Sun, 29 Dec, 2024 at 1:27 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*