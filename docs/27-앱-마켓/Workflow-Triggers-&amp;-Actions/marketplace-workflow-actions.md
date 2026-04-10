---

번역일: 2026-04-08
카테고리: 27-앱-마켓 > Workflow Triggers & Actions
---

# 마켓플레이스 워크플로우 액션

마켓플레이스 워크플로우 액션은 [마켓플레이스](https://marketplace.gohighlevel.com/)에서 관리하는 사용자 맞춤형 워크플로우 액션입니다. 커스텀 필드와 API 엔드포인트를 사용하여 워크플로우에서 애플리케이션/API로 데이터를 전송하거나 받아올 수 있는 커스텀 액션을 만들 수 있습니다.

[마켓플레이스](https://marketplace.gohighlevel.com/)에 회원가입/로그인하여 마켓플레이스 워크플로우 액션을 관리하세요. 마켓플레이스 워크플로우 액션은 LC 프리미엄 트리거 & 액션의 일부이며 실행당 요금이 부과됩니다. 워크플로우용 LC 프리미엄 트리거 & 액션을 활성화하고 재청구하는 방법을 참고하세요. 마켓플레이스에서 생성된 액션에 접근하려면 하위 계정에서 워크플로우 LC 프리미엄 트리거 & 액션을 활성화해야 합니다. 앱에서 생성된 마켓플레이스 워크플로우 액션은 해당 하위 계정이 마켓플레이스에서 해당 앱을 설치/연동한 경우에만 워크플로우 액션 목록에 표시됩니다.

**목차**

- [사전 요구사항](#사전-요구사항)
- [액션 생성](#액션-생성)
  - [이름](#이름)
- [액션 정보](#액션-정보)
  - [아이콘](#아이콘)
  - [이름](#이름)
  - [키](#키)
  - [간단 설명](#간단-설명)
  - [요약](#요약)
- [액션 구성](#액션-구성)
  - [필드 관리](#필드-관리)
  - [새 필드 생성](#새-필드-생성)
    - [유형: Select / Multi Select / Radio](#유형-select--multi-select--radio)
      - [상수](#상수)
      - [내부 참조](#내부-참조)
      - [외부 API](#외부-api)
    - [유형: Hidden](#유형-hidden)
    - [유형: Dynamic](#유형-dynamic)
    - [검증 규칙](#검증-규칙)
  - [멀티 브랜치](#멀티-브랜치)
- [액션 실행](#액션-실행)
  - [API](#api)
  - [커스텀 코드](#커스텀-코드)
  - [코드 테스트 및 포맷](#코드-테스트-및-포맷)
  - [실행 일시정지](#실행-일시정지)
- [커스텀 변수 관리](#커스텀-변수-관리)
  - [커스텀 변수 추가](#커스텀-변수-추가)
- [검토 요청](#검토-요청)
- [새 버전 생성](#새-버전-생성)
- [액션 삭제](#액션-삭제)

## 사전 요구사항

*참고: 액션과 트리거를 활성화하려면 workflows.readonly 범위가 켜져 있어야 합니다.*

![사전 요구사항 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031136715/original/0aSds7RCt1quSlQ08B6V0bOuZWIUk56ZGw.png?1723791924)

## 액션 생성

![액션 생성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005617666/original/6dcMrp542QyK9ITxiYd6SP3nDrmXS0H4ng.png?1692595312)

### 이름

액션 이름을 입력하세요.

**키**

워크플로우 내에서 이 액션을 참조하는 데 사용되는 고유 식별자입니다. 이 값은 나중에 변경할 수 없습니다. 예시: {{mycustomaction.data.name}}

# 액션 정보

액션 세부 정보를 추가하세요.

![액션 정보 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005617692/original/ayYzwBxRpcqkChyLHwVUxiYa6SNiuEUpmg.png?1692595399)

### 아이콘

이 액션용 아이콘을 선택하세요. 워크플로우에서 이 액션에 대해 표시됩니다.

### 이름

커스텀 액션 이름

### 키

워크플로우 내에서 이 액션을 참조하는 데 사용되는 고유 식별자입니다. 예시: {{action_a.custom_variable}}. 이 값은 나중에 변경할 수 없습니다.

### 간단 설명

사용자가 이해할 수 있도록 액션의 기능을 설명하는 간단한 설명입니다. 워크플로우에서 이 액션의 부제목으로 표시됩니다.

### 요약

사용자가 이 액션을 사용해야 하는 이유를 이해할 수 있도록 액션의 기능에 대한 자세한 정보입니다.

# 액션 구성

## 필드 관리

API로 전송하는 데 필요한 데이터를 수집하기 위한 폼을 구성합니다.

![필드 관리 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005617794/original/ruqdiXv6Qpyb5koXldxA6IezKmW4Kn4k6A.png?1692595629)

### 새 필드 생성

![새 필드 생성 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014097669/original/K7S7qgH1SPJT2Epd6gu8E37h5aImQ0tPDA.png?1701409848)

![새 필드 생성 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046654687/original/wlQ-4aQO5LpNdpJbhzMNHN2oNPiD95H3sw.png?1747285021)

**이름**

필드 이름을 입력하세요.

**유형**

다음 필드 유형 중 하나를 선택하세요:

- String
- Numerical
- Textarea
- [Select](#유형-Select--Multi-Select--Radio)
- [Multiple Select](#유형-Select--Multi-Select--Radio)
- [Radio](#유형-Select--Multi-Select--Radio)
- Toggle
- Checkbox
- Attachment
- Rich Text Editor
- [Hidden](#유형-Hidden)
- [Dynamic](#유형-Dynamic)

**필수**

워크플로우에서 이것이 필수 필드라면 활성화하세요.

**참조**

고유 참조 키를 입력하세요. 이 필드의 값이 제공된 키에 바인딩됩니다. 예시: action_a_name

**기본값**

값을 입력하거나 매핑하세요. 제공된 값은 워크플로우에서 로드될 때 이 필드의 기본값으로 사용됩니다.

**동적 필드 변경**

활성화하면, 이 필드 값을 변경할 때 동적 필드가 워크플로우 액션 구성 UI에 다시 로드됩니다.

#### 검증 규칙

검증 규칙을 사용하면 폼 필드, 테이블 셀 또는 구성 입력에 사용자가 입력한 값을 저장하거나 다운스트림으로 전달하기 전에 확인하여 데이터 품질을 보호할 수 있습니다. 값이 검사에 실패하면 Hyperclass가 저장/제출 작업을 차단하고 사용자가 구성한 커스텀 오류 메시지를 표시합니다.

**일반적인 사용 사례**

| 시나리오 | 예시 |
|---------|------|
| 리드 수집 폼 | 적절한 형식의 미국 전화번호 요구 |
| 웹훅 페이로드 | "status" 필드가 허용된 여러 문자열 중 하나와 일치하는지 확인 |
| 커스텀 액션 매개변수 | 사용자가 일반 텍스트 필드에 핸들바 문법을 입력하지 못하도록 차단 |

### 유형: Select / Multi Select / Radio

![Select 유형 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005618327/original/75wTdD-ywGGAzHHCMQ6rSJ74XtVQEivUeQ.png?1692596839)

옵션 유형은 Select, Multi Select, Radio 필드 유형에만 적용됩니다.

다음 옵션 유형 중 하나를 선택하세요:

- 상수
- 내부 참조
- 외부 API

#### 상수

커스텀 레이블-값 상수를 추가하여 옵션을 로드합니다.

![상수 옵션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005617938/original/xkySDB0XDrua62JzPisbo1TNQH59sEZSaw.png?1692595922)

#### 내부 참조

Hyperclass 내부 모듈에서 옵션을 로드합니다. 옵션 목록을 로드할 Hyperclass 모듈 중 하나를 선택하세요.

![내부 참조 옵션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005617998/original/du8lZRMai5wENrSducJPjhqgFASlOZ_P6Q.png?1692596002)

**지원되는 Hyperclass 모듈**

![지원 모듈 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005670538/original/8uQtBkMLWLhm6jcDxdX-gzjR07BQ_GPtXw.png?1692623479)

#### 외부 API

외부 API 엔드포인트에서 옵션을 로드합니다.

![외부 API 옵션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005618042/original/2om_uuB9g_V8MhG1MOLUrPPMIiq2kLggTA.png?1692596134)

**URL (GET)**

GET 메소드를 지원하고 아래 샘플 응답 구조에 따라 유효한 응답을 보내는 URL을 제공하세요.

**헤더**

요구사항에 따라 헤더를 추가하세요.

**샘플 응답 데이터**

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

### 유형: Hidden

액션 구성에서 숨겨지며 매핑된 데이터가 페이로드에 전송됩니다. 시스템 데이터 또는 커스텀 트리거에서 company_id, customerid 등과 같은 필수 정보를 수집하는 데 사용됩니다.

![Hidden 필드 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014523897/original/XyGotHxLGe2wMKBEiZA-SPiJUKlT7jy-Kw.png?1701863223)

### 유형: Dynamic

동적 필드는 API 호출에서 커스텀 필드를 구축하는 데 사용됩니다. API 호출은 워크플로우 액션 구성 폼 UI에서 필드를 구성하기 위해 아래 응답 구조를 반환해야 합니다. 액션당 하나의 Dynamic 유형만 생성할 수 있습니다.

![Dynamic 필드 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005619479/original/4iG7FjTRJheIDHXNKGKDV3TZKaEtM-xMCg.png?1692598872)

**URL (POST)**

API 엔드포인트 URL을 입력하세요. 실행될 때 데이터가 아래 언급된 페이로드 형식으로 POST 메소드를 통해 이 API 엔드포인트로 전송되며, 아래 공유된 샘플 응답 구조에 따라 유효한 응답이 예상됩니다.

**헤더**

요구사항에 따라 헤더를 추가하세요.

**샘플 페이로드:** 폼 데이터가 동적 필드 API에 페이로드로 전송됩니다.

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
        "dataShare": true,
        "tems": true,
   },
   "extras": {
        "locationId": "xyz",
        "contactId": "abc",
        "workflowId": "def"
   },
   "meta": {
        "key": "custom_action_key",
        "version": "1.0",
   }
}
```

**샘플 응답 구조:** 섹션은 UI에서 필드를 그룹화하는 데 사용됩니다.

```json
{
   "inputs": [
      {
         "section": "Personal Info",
         "fields": [
            {
               "field": "name",
               "title": "Name",
               "fieldType": "string",
               "required": true
            },
            {
               "field": "age",
               "title": "Age",
               "fieldType": "numerical",
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
      },
      {
         "section": "Location Info",
         "fields": [
            {
               "field": "village",
               "title": "Village",
               "fieldType": "string",
               "required": true
            },
            {
               "field": "city",
               "title": "City",
               "fieldType": "string",
               "required": true
            },
            {
               "field": "fullAddress",
               "title": "Your Full Address",
               "fieldType": "textarea",
               "required": true
            }
         ]
      }
   ]
}
```

**각 필드 유형별 샘플 구조**

**String**
```json
{
   "field": "name",
   "title": "Name",
   "fieldType": "string",
   "required": true
}
```

**Numeric**
```json
{
   "field": "name",
   "title": "Name",
   "fieldType": "numeric",
   "required": true
}
```

**Textarea**
```json
{
  "field": "description",
  "title": "Description",
  "fieldType": "textarea",
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

**Radio**
```json
{
  "field": "profileType",
  "title": "Profile Type",
  "fieldType": "radio",
  "required": true,
  "options": [
      {
          "label": "Public",
          "value": "public"
      },
      {
          "label": "Private",
          "value": "private"
      }
  ]
}
```

**Toggle**
```json
{
  "field": "dataShare",
  "title": "Allow my data to be stored",
  "fieldType": "toggle",
  "required": true
}
```

**Checkbox**
```json
{
  "field": "terms",
  "title": "Terms & conditions",
  "fieldType": "checkbox",
  "required": true
}
```

### 검증 규칙

![검증 규칙 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046654729/original/-BqA09IMW6XXljUIMVpOefqpJJ_JkQ2TWg.png?1747285143)

검증 규칙 기능은 앱 개발자가 폼 필드에 입력 검사를 적용하여 데이터 무결성을 보장하도록 도와줍니다. 개발자는 세 가지 유연한 검증 방법 중에서 선택할 수 있습니다:

- **미리 정의된 규칙**
이메일, 전화번호, URL, 숫자 값, 핸들바 구문 검사와 같은 일반적인 검증을 쉽게 적용할 수 있습니다.

![미리 정의된 규칙 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046654763/original/XDtbol7Qdfx4-ahKv5gkVKT415lhZivHPw.png?1747285248)

- **정규 표현식 지원**
커스텀 정규 표현식을 사용하여 특정 패턴에 대해 입력을 검증합니다.

![정규 표현식 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046654765/original/mLG5Rv1JMo5y6MlQZVQfNmcY0Wucw3jr5w.png?1747285258)

- **화살표 함수**
입력 값을 받아서 검증 통과 여부에 따라 true 또는 false를 반환하는 커스텀 화살표 함수를 작성합니다.

![화살표 함수 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046654766/original/wEHzLmsCVVTfrMXMrTKEHB9Wii3yvBXn_Q.png?1747285266)

모든 검증 규칙에 대해 검증 실패 시 의미 있는 피드백을 표시할 커스텀 오류 메시지를 제공해야 합니다.

# 멀티 브랜치

멀티 브랜치 기능은 다양한 미리 정의된 조건에 따라 동적으로 조정할 수 있는 브랜치를 생성할 수 있게 해줍니다. 워크플로우 내에서 여러 브랜치를 허용함으로써 각 연락처를 상호작용이나 상태에 따라 적절한 경로로 안내할 수 있습니다.

![멀티 브랜치 설정 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033332890/original/Z0b9pEdrE-DG_za1m0tD-ZmEWFfJnSY3sg.png?1727069887)

![멀티 브랜치 설정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033332901/original/t75w0vc7umALitmmtlZaay_6fJTRh8DIwA.png?1727069912)

![멀티 브랜치 설정 화면 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033332913/original/tBcj_nSW1LIskT9KT_TedDHBqPl92qgMTA.png?1727069931)

- **브랜치 섹션:** 특정 브랜치 섹션의 이름이나 식별자를 정의합니다.
- **브랜치 섹션 설명:** 브랜치 섹션에 대한 간단한 설명이나 세부사항을 제공합니다.
- **브랜치 이름 레이블:** 브랜치 이름에 대해 표시될 레이블을 지정합니다.
- **브랜치 이름 도움말:** 브랜치 이름과 관련된 추가 정보를 제공합니다.
- **브랜치 삭제 제목:** 브랜치를 삭제할 때 사용되는 제목이나 레이블을 설정합니다.
- **브랜치 삭제 설명:** 브랜치가 삭제되는 때를 설명합니다.

![멀티 브랜치 옵션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032480643/original/rq82aq6pm8EaxX8Na_ebjGAmRp129bzkWw.png?1725867015)

- **새 브랜치 허용:** 사용자가 액션 내에서 새 브랜치를 추가할 수 있게 합니다.
- **미리 정의된 브랜치 편집 가능:** 사용자가 액션 내에서 미리 정의된 브랜치를 편집할 수 있게 합니다.
- **브랜치 섹션 표시:** 사용자에게 브랜치 섹션 세부사항을 표시합니다.

**새 브랜치 허용 비활성화**

![새 브랜치 비활성화 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033332933/original/J0rhJoECnALYR39Y3b0WSBxRUOIKFbbc8A.png?1727069981)

![새 브랜치 비활성화 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033332974/original/ZLeZZHyChomMGQNgfpqiAz8J3G4UEZqOGg.png?1727070044)

**미리 정의된 브랜치 편집 가능**

![미리 정의된 브랜치 편집 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033333000/original/YoCdmA4wy15bf8TiPG_wyPMIhLblouPGKQ.png?1727070083)

![미리 정의된 브랜치 편집 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033333041/original/RNSq7KP-b7whUKZx_weaXqk29UkYY91mDw.png?1727070133)

**브랜치 숨기기**

![브랜치 숨기기 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033333116/original/ReCSVS39jy8eUqGbi14v7qicF0nKdyEO6Q.png?1727070243)

![브랜치 숨기기 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033333104/original/SEal4s-9lkEbiyUrkv4PuHAHfYaaBjb2zw.png?1727070234)

**브랜치 샘플 페이로드**

```json
{
  "data": {
    "name": "John Doe",
    "age": "29",
    "gender": "male",
    "hobbies": [
      "sports",
      "music"
    ],
    "address": "My Address",
    "country": "US",
    "profileType": "public",
    "dataShare": true,
    "tems": true,
    "branches": [
      {
        "id": "a8d14b13-d7cc-4241-bd2c-53180f0ec278",
        "name": "Branch name",
        "fields": {
          "branchFieldKey": "branchFieldValue"
        }
      }
    ]
  },
  "extras": {
    "locationId": "xyz",
    "contactId": "abc",
    "workflowId": "def"
  },
  "meta": {
    "key": "custom_action_key",
    "version": "1.0"
  }
}
```

## 액션 실행

API 또는 커스텀 코드 중에서 선택할 수 있습니다.

### API

![API 설정 화면](https://s