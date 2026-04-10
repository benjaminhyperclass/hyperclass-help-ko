---

번역일: 2026-04-08
카테고리: 27-앱-마켓 > 워크플로우 트리거 & 액션
---

# 마켓플레이스 워크플로우 트리거

마켓플레이스 워크플로우 트리거(Marketplace Workflow Triggers)는 [마켓플레이스](https://marketplace.gohighlevel.com/)에서 관리하는 커스터마이징 가능한 워크플로우 트리거입니다. 외부 애플리케이션/API에서 워크플로우로 데이터를 전송하는 커스텀 트리거를 만들 수 있어요.

[마켓플레이스](https://marketplace.gohighlevel.com/)에 가입/로그인하여 마켓플레이스 워크플로우 트리거를 관리하세요. 마켓플레이스 워크플로우 트리거는 LC 프리미엄 트리거 & 액션의 일부이며 실행당 요금이 부과됩니다. 워크플로우용 LC 프리미엄 트리거 & 액션을 활성화하고 재청구하는 방법은? 마켓플레이스에서 생성한 트리거에 접근하려면 하위 계정에서 워크플로우 LC 프리미엄 트리거 & 액션을 활성화해야 합니다. 앱에서 생성한 마켓플레이스 워크플로우 트리거는 하위 계정에 마켓플레이스에서 해당 앱이 설치/연동된 경우에만 워크플로우 트리거 목록에 표시됩니다.

목차

- [사전 요구사항](#사전-요구사항)
- [트리거 생성](#트리거-생성)
- [트리거 정보](#트리거-정보)
- [트리거 구성](#트리거-구성)
- [트리거 데이터](#트리거-데이터)
- [필터 관리](#필터-관리)
- [커스텀 변수 관리](#커스텀-변수-관리)
- [구독 URL](#구독-url)
- [검토 제출](#검토-제출)
- [새 버전 생성](#새-버전-생성)
- [트리거 삭제](#트리거-삭제)
- [연락처 없이 워크플로우가 실행될 수 있나요?](#연락처-없이-워크플로우가-실행될-수-있나요)

## **사전 요구사항**

*참고: 액션과 트리거를 활성화하려면 workflows.readyonly 스코프가 켜져 있어야 합니다.*

![workflows.readonly scope 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031136715/original/0aSds7RCt1quSlQ08B6V0bOuZWIUk56ZGw.png?1723791924)

## 트리거 생성

![트리거 생성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008571402/original/-akI1I0dRCxxnUB-vS_AXBRwM2lDmLY9zQ.png?1695707381)

### 이름(Name)
트리거 이름을 입력하세요

### 키(Key)
이 트리거의 고유 식별자로, 워크플로우 내에서 트리거를 참조할 때 사용됩니다. 나중에 변경할 수 없습니다. 예시: {{mycustomtrigger.data.name}}

# 트리거 정보

트리거 세부 정보를 추가하세요

![트리거 정보 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008571484/original/upXNQ8ldHATTzVMFsJA6SDjKyyyXW8Md0A.png?1695707448)

### 아이콘(Icon)
이 트리거의 아이콘을 선택하세요. 워크플로우에서 이 트리거에 표시됩니다.

### 이름(Name)
커스텀 트리거 이름

### 키(Key)
워크플로우 내에서 트리거를 참조하는 데 사용되는 고유 식별자입니다. 예: {{trigger_a.custom_variable}}. 나중에 변경할 수 없습니다.

### 간단한 설명(Short description)
사용자가 이해할 수 있도록 트리거가 하는 일을 설명하는 짧은 설명입니다. 워크플로우에서 이 트리거의 부제목으로 표시됩니다.

### 요약(Summary)
사용자가 이 트리거를 사용해야 하는 이유를 이해할 수 있도록 트리거가 하는 일에 대한 자세한 정보입니다.

# 트리거 구성

## 트리거 데이터

필터와 커스텀 변수를 구성하기 위한 샘플 트리거 페이로드 데이터를 추가하세요.

### 샘플 트리거 페이로드 데이터 추가
트리거로 전송될 유효한 샘플 페이로드 JSON 구조를 입력하세요.

![샘플 페이로드 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008572394/original/dDTnUzyorTuAP9fwktAjyt8XWSZoNy0ysQ.png?1695708653)

## 필터 관리

사용자가 워크플로우 트리거 구성에서 사용할 수 있도록 샘플 트리거 데이터를 사용하여 필터를 추가하세요.

![필터 관리 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008573989/original/dUCSEOtTj74A2fotCwqyRB5157kJjHfxXA.png?1695710480)

### 새 필터 생성

![새 필터 생성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008575005/original/Eno_UsYIGBv7NPyT-TDujscxHAjDgMwM8w.png?1695711462)

### 이름(Name)
필터 이름을 입력하세요

### 유형(Type)
다음 필드 유형 중 하나를 선택하세요:
- String
- Select
- Multiple Select
- Dynamic

### 필수(Required)
워크플로우에서 필수 필터인 경우 활성화하세요.

### 참조(Reference)
샘플 트리거 데이터에서 참조 키를 선택하세요. 이 필드의 값이 제공된 키와 바인딩됩니다. 예시: trigger_a_name

### 동적 필터 변경(Alters Dynamic Filter)
활성화하면 이 필터 값에 변경이 있을 때 동적 필터를 워크플로우 트리거 구성 UI로 다시 로드하는 트리거를 발생시킵니다.

### 유형: Select / Multi Select

![Select 옵션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008575097/original/esi5jPJrs8bzkVEwcMvNP2P6JGgF_ZMHvg.png?1695711617)

옵션 유형은 Select와 Multi Select 필드 유형에만 적용됩니다.

다음 옵션 유형 중 하나를 선택하세요:
- Constants
- Internal Reference
- External API

#### Constants
커스텀 라벨-값 상수를 추가하여 옵션을 로드

![Constants 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005617938/original/xkySDB0XDrua62JzPisbo1TNQH59sEZSaw.png?1692595922)

#### Internal Reference
HighLevel 내부 모듈에서 옵션을 로드합니다. 옵션 목록을 로드할 HighLevel 모듈 중 하나를 선택하세요.

![Internal Reference 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005617998/original/du8lZRMai5wENrSducJPjhqgFASlOZ_P6Q.png?1692596002)

지원되는 HighLevel 모듈

![지원 모듈 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005670538/original/8uQtBkMLWLhm6jcDxdX-gzjR07BQ_GPtXw.png?1692623479)

#### External API
외부 API 엔드포인트에서 옵션을 로드

![External API 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005618042/original/2om_uuB9g_V8MhG1MOLUrPPMIiq2kLggTA.png?1692596134)

### URL (GET)
GET 메서드를 지원하고 아래 공유된 샘플 응답 구조에 따른 유효한 응답을 보내는 URL을 제공하세요.

### 헤더(Headers)
요구 사항에 따라 헤더를 추가하세요

### 샘플 응답 데이터

```json
{
   "options": [
      {
         "label": "Afghanistan",
         "value": "AF"
      },
      {
         "label": "Åland Islands",
         "value": "AX"
      },
      {
         "label": "Albania",
         "value": "AL"
      },
      {
         "label": "Algeria",
         "value": "DZ"
      },
      {
         "label": "American Samoa",
         "value": "AS"
      }
   ]
}
```

### 유형: Dynamic

동적 필터는 API 호출을 통해 커스텀 필터를 만드는 데 사용됩니다. API 호출은 워크플로우 트리거 구성 폼 UI에서 필터를 구성하기 위해 아래 응답 구조를 반환해야 합니다. 트리거당 하나의 Dynamic 유형만 생성할 수 있습니다.

![Dynamic 필터 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008575252/original/ifNAt13wYheupSXn2LhgyT0zOp4wql5YtQ.png?1695711754)

### URL (POST)
API 엔드포인트 URL을 입력하세요. 실행될 때 데이터가 POST 메서드를 통해 아래 언급된 페이로드 형식으로 이 API 엔드포인트에 전송되며, 아래 공유된 샘플 응답 구조에 따른 유효한 응답이 예상됩니다.

### 헤더(Headers)
요구 사항에 따라 헤더를 추가하세요

### 샘플 페이로드:
폼 데이터가 동적 필드 API에 페이로드로 전송됩니다

```json
{
   "data": {
        "name": "John Doe",
        "age": "29",
        "gender": "male",
        "hobbies": ["sports", "music"],
        "address": "My Address",
        "country": "US",
        "profileType": "public",
   },
   "extras": {
        "locationId": "xyz",
        "contactId": "abc",
        "workflowId": "def"
   },
   "meta": {
        "key": "custom_trigger_key",
        "version": "1.0",
   }
}
```

### 샘플 응답 구조:

```json
{
  "filters": [
    {
      "field": "name",
      "title": "Name",
      "fieldType": "string",
      "required": true
    },
    {
      "field": "gender",
      "title": "Gender",
      "fieldType": "select",
      "required": true,
      "options": [
        {
          "label": "Male",
          "value": "male"
        },
        {
          "label": "Female",
          "value": "female"
        }
      ]
    }
  ]
}
```

### 각 필터 유형의 샘플 구조

**String**
```json
{
   "field": "name",
   "title": "Name",
   "fieldType": "string",
   "required": true
}
```

**Select**
```json
{
   "field": "gender",
   "title": "Gender",
   "fieldType": "select",
   "required": true,
   "options": [
      {
         "label": "Male",
         "value": "male"
      },
      {
         "label": "Female",
         "value": "female"
      }
   ]
}
```

**Multiple Select**
```json
{
   "field": "hobbies",
   "title": "Hobbies",
   "fieldType": "multiselect",
   "required": true,
   "options": [
      {
         "label": "Sport",
         "value": "sport"
      },
      {
         "label": "Music",
         "value": "music"
      }
   ]
}
```

## 커스텀 변수 관리

사용자가 워크플로우에서 사용할 수 있도록 트리거 데이터를 사용하여 커스텀 변수를 추가하세요.

![커스텀 변수 관리](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008572016/original/JkQMjhsCodCIJQU-BA-KjP9rH3aEn7fZYA.png?1695708297)

### 커스텀 변수 추가

![커스텀 변수 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008572039/original/JQry9o7DFN62Ce_h2X0zvVE1zShpmMNqKg.png?1695708327)

### 이름(Name)
라벨 이름을 입력하세요

### 참조(Reference)
샘플 트리거 데이터에서 참조 키를 선택하세요.

## 구독 URL

API 엔드포인트를 통해 트리거 구성 세부 정보를 수집하세요.

![구독 URL 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008572516/original/NxuZK11tEgoiGhlnW0FUCrPpaQu5iM88FA.png?1695708842)

### URL (POST)
API 엔드포인트 URL을 입력하세요. 워크플로우에서 트리거가 구성되면(생성/업데이트/삭제) 트리거 구성 데이터가 POST 메서드를 통해 아래 언급된 페이로드 형식으로 이 API 엔드포인트에 전송됩니다.

### 헤더(Headers)
API 엔드포인트로 데이터를 전송할 때 포함해야 하는 필수 헤더 데이터를 추가하세요

### 페이로드 형식:

**워크플로우에서 트리거 "생성"**
```json
{
   "triggerData": {
      "id": "def",
      "key": "trigger_a",
      "filters": [],
      "eventType": "CREATED",
      "targetUrl": "https://services.leadconnectorhq.com/workflows-marketplace/triggers/execute/abc/def"
   },
   "meta": {
      "key": "trigger_a",
      "version": "2.4"
   },
   "extras": {
      "locationId": "ghj",
      "workflowId": "qwe",
      "companyId": "asd"
   }
}
```

**워크플로우에서 트리거 "업데이트"**
```json
{
   "triggerData": {
      "id": "def",
      "key": "trigger_a",
      "filters": [
         {
            "field": "country",
            "id": "country",
            "operator": "==",
            "title": "Country",
            "type": "select",
            "value": "USA"
         }
      ],
      "eventType": "UPDATED",
      "targetUrl": "https://services.leadconnectorhq.com/workflows-marketplace/triggers/execute/abc/def"
   },
   "meta": {
      "key": "trigger_a",
      "version": "2.4"
   },
   "extras": {
      "locationId": "ghj",
      "workflowId": "qwe",
      "companyId": "asd"
   }
}
```

**워크플로우에서 트리거 "삭제"**
```json
{
   "triggerData": {
      "id": "def",
      "key": "trigger_a",
      "filters": [
         {
            "field": "country",
            "id": "country",
            "operator": "==",
            "title": "Country",
            "type": "select",
            "value": "USA"
         }
      ],
      "eventType": "DELETED",
      "targetUrl": "https://services.leadconnectorhq.com/workflows-marketplace/triggers/execute/abc/def"
   },
   "meta": {
      "key": "trigger_a",
      "version": "2.4"
   },
   "extras": {
      "locationId": "ghj",
      "workflowId": "qwe",
      "companyId": "asd"
   }
}
```

## 검토 제출

트리거 버전은 기본적으로 초안 상태입니다. 트리거 정보와 구성을 업데이트한 후 트리거 버전을 검토를 위해 제출해야 합니다.

![검토 제출 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005621439/original/5UVWUz25eAcVTFtVlVtxEh3Fkg15t4zXDg.png?1692600744)

검토 제출을 클릭하고 제출된 버전에 대한 필수 변경 로그 정보를 추가하세요.

![변경 로그 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008572191/original/IGXs2a9XcQ-ybuxHr4VjcY8_JSnDq-VNOg.png?1695708444)

승인되면 검토를 위해 제출된 버전이 모든 하위 계정에 라이브로 게시됩니다.

![승인된 버전](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005621452/original/YeMGRy21eS8S8bI8rexthcKA8R4INYc2zw.png?1692600766)

## 새 버전 생성

트리거의 새 버전을 생성하려면 + New Version을 클릭하세요

![새 버전 생성 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005621457/original/bHLDsksmL1K7qgmv7KoFYS6af3iMg8f0vQ.png?1692600778)

+ New Version을 클릭하면 이전에 게시된 모든 데이터가 미리 채워진 새 초안 버전이 생성됩니다.

![새 초안 버전](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005622063/original/yLpMG6PiUYcVdUTi1zkBE6udOqOscWghbA.png?1692601301)

## 트리거 삭제

트리거가 삭제되면 영구적으로 삭제되며 복구할 수 없습니다. 삭제된 트리거는 마켓플레이스 앱과 워크플로우 트리거 목록에서 제거됩니다. 삭제된 트리거가 워크플로우의 일부인 경우 트리거 실행이 건너뛰어집니다.

![트리거 삭제 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014522319/original/iILsc-HqjeJcvaYLyzPS1DLyWTp-E8ls2w.png?1701862634)

삭제를 확인하려면 트리거 이름을 입력하세요

![트리거 이름 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014522368/original/6eQ0DnkP561wluUc9BZkj3VbytT196rMSQ.png?1701862664)

## 연락처 없이 워크플로우가 실행될 수 있나요?

- 워크플로우는 연락처 데이터 의존성 없이 연락처 없는 상태로 실행할 수 있으므로 마켓플레이스 트리거를 통해 페이로드 데이터를 보내고 워크플로우에서 사용할 수 있습니다.
- 연락처 없이 진행할 수 있으며 연락처 정보에 의존하지 않는 액션을 사용할 수 있습니다. Custom Webhook(커스텀 웹훅), Google Sheet(구글 시트), Slack(슬랙), ChatGPT(챗GPT) 및 모든 Internal Tools(내부 도구)는 연락처 없이 실행할 수 있습니다.
- 필요한 경우 Create/Update(생성/업데이트) 또는 Find Contact(연락처 찾기) 액션을 사용하여 연락처 데이터를 워크플로우로 검색할 수 있습니다.

**예시:**
- 트리거로 주문 데이터를 보내고 주문 정보를 구글 시트에 추가하고, if/else를 사용하여 주문 금액에 따라 분류하고 슬랙 알림을 보냅니다.
- Find contact(연락처 찾기) 액션을 사용하여 연락처 ID로 연락처를 검색합니다

---
*원문 최종 수정: Fri, 16 Aug, 2024 at 2:19 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*