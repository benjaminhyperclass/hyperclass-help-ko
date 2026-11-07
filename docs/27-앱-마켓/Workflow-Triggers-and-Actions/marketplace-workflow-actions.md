---
원문: /support/solutions/articles/155000000571-marketplace-workflow-actions
번역일: 2026-11-06
카테고리: 27-앱-마켓
---

# 마켓플레이스 워크플로우 액션(Marketplace Workflow Actions) 만들기와 관리

마켓플레이스에서 관리하는 사용자 지정 워크플로우 액션을 설명하는 문서예요. 원하는 필드와 API 엔드포인트를 구성하면, 워크플로우에서 내 애플리케이션/API로 데이터를 보내거나 가져오는 액션을 만들 수 있어요.

{% hint style="info" %}
마켓플레이스 워크플로우 액션을 관리하려면 마켓플레이스에 가입하거나 로그인하세요.
{% endhint %}

{% hint style="warning" %}
마켓플레이스 워크플로우 액션은 하이퍼클래스 프리미엄 트리거 및 액션에 포함되며, 실행할 때마다 요금이 부과돼요.

마켓플레이스 앱에서 만든 액션을 쓰려면 서브 계정에서 워크플로우용 하이퍼클래스 프리미엄 트리거 및 액션을 켜야 해요. 켜는 방법과 재청구 방법도 함께 확인해 두세요.

앱 안에서 만든 마켓플레이스 워크플로우 액션은 서브 계정이 마켓플레이스에서 그 앱을 설치했거나 연동한 경우에만 워크플로우 액션 목록에 나타나요.
{% endhint %}

## 사전 준비

{% hint style="info" %}
액션과 트리거를 사용하려면 `workflows.readyonly` 스코프를 켜야 해요.
{% endhint %}

![workflows.readyonly 스코프 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031136715/original/0aSds7RCt1quSlQ08B6V0bOuZWIUk56ZGw.png?1723791924)

## 액션 만들기

![액션 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005617666/original/6dcMrp542QyK9ITxiYd6SP3nDrmXS0H4ng.png?1692595312)

### Name(이름)

**Name**에 액션 이름을 입력해요.

**Key**(키)

워크플로우 안에서 이 액션을 가리킬 때 쓰는 고유 식별자예요. 이 값은 나중에 바꿀 수 없어요. 예: `{{mycustomaction.data.name}}`

## 액션 정보

액션의 기본 정보를 입력해요.

![액션 정보 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005617692/original/ayYzwBxRpcqkChyLHwVUxiYa6SNiuEUpmg.png?1692595399)

### Icon(아이콘)

이 액션의 아이콘을 골라요. 워크플로우에서 이 액션 옆에 표시돼요.

### Name(이름)

사용자 지정 액션의 이름이에요.

### Key(키)

워크플로우 안에서 이 액션을 가리킬 때 쓰는 고유 식별자예요. 예: `{{action_a.custom_variable}}` 이 값은 나중에 바꿀 수 없어요.

### Short description(짧은 설명)

액션이 무엇을 하는지 사용자가 이해할 수 있도록 짧게 적어요. 워크플로우에서 이 액션의 부제목으로 표시돼요.

### Summary(요약)

액션이 무엇을 하는지, 사용자가 왜 이 액션을 써야 하는지 자세히 적어요.

## 액션 구성

### Manage Fields(필드 관리)

API로 보낼 데이터를 모으는 폼을 구성해요.

#### Create New Field(새 필드 만들기)

![새 필드 만들기 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014097669/original/K7S7qgH1SPJT2Epd6gu8E37h5aImQ0tPDA.png?1701409848)

![새 필드 만들기 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046654687/original/wlQ-4aQO5LpNdpJbhzMNHN2oNPiD95H3sw.png?1747285021)

**Name**

필드 이름을 입력해요.

**Type**(유형)

다음 필드 유형 중 하나를 골라요.

- String
- Numerical
- Textarea
- Select (아래 Select / Multi Select / Radio 유형 참고)
- Multiple Select (아래 Select / Multi Select / Radio 유형 참고)
- Radio (아래 Select / Multi Select / Radio 유형 참고)
- Toggle
- Checkbox
- Attachment
- Rich Text Editor
- Hidden (아래 Hidden 유형 참고)
- Dynamic (아래 Dynamic 유형 참고)

**Required**(필수)

워크플로우에서 꼭 입력해야 하는 필드라면 켜세요.

**Reference**(참조)

고유한 참조 키를 입력해요. 이 필드의 값이 입력한 키에 연결돼요. 예: `action_a_name`

**Default Value**(기본값)

값을 직접 입력하거나 매핑해요. 입력한 값은 워크플로우에서 이 필드를 불러올 때 기본값으로 쓰여요.

**Alters Dynamic Field**(동적 필드 변경)

켜 두면 이 필드 값을 바꿀 때마다 워크플로우 액션 구성 화면에서 동적 필드를 새로 불러와요.

#### Validation Rules(유효성 검사 규칙)

Validation Rules는 **폼 필드**, **테이블 셀**, **구성 입력값**에 사용자가 입력한 값을 저장하거나 다음 단계로 넘기기 전에 검사해서 데이터 품질을 지켜 줘요.
값이 검사를 통과하지 못하면 하이퍼클래스가 저장/제출을 막고, 내가 설정한 오류 메시지를 보여 줘요.

대표적인 사용 사례예요.

| 상황 | 예시 |
| --- | --- |
| 리드 수집 폼 | 올바른 형식의 미국 전화번호만 입력하도록 요구 |
| 웹훅 페이로드 | "status" 필드가 허용된 여러 문자열 중 하나와 일치하는지 확인 |
| 사용자 지정 액션 파라미터 | 일반 텍스트 필드에 Handlebar 구문을 입력하지 못하게 차단 |

### Type: Select / Multi Select / Radio

![Select 유형 옵션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005618327/original/75wTdD-ywGGAzHHCMQ6rSJ74XtVQEivUeQ.png?1692596839)

Option Type(옵션 유형)은 Select, Multi Select, Radio 필드 유형에서만 쓸 수 있어요.

다음 옵션 유형 중 하나를 골라요.

- Constants
- Internal Reference
- External API

#### Constants

라벨-값 상수를 직접 추가해서 옵션을 불러와요.

![Constants 옵션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005617938/original/xkySDB0XDrua62JzPisbo1TNQH59sEZSaw.png?1692595922)

#### Internal Reference

하이퍼클래스 내부 모듈에서 옵션을 불러와요. 옵션 목록을 불러올 하이퍼클래스 모듈을 하나 선택하세요.

![Internal Reference 모듈 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005617998/original/du8lZRMai5wENrSducJPjhqgFASlOZ_P6Q.png?1692596002)

지원되는 하이퍼클래스 모듈

![지원되는 하이퍼클래스 모듈 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005670538/original/8uQtBkMLWLhm6jcDxdX-gzjR07BQ_GPtXw.png?1692623479)

#### External API

외부 API 엔드포인트에서 옵션을 불러와요.

![External API 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005618042/original/2om_uuB9g_V8MhG1MOLUrPPMIiq2kLggTA.png?1692596134)

**URL (GET)**

GET 메서드를 지원하는 URL을 입력하세요. 이 URL은 아래 샘플 응답 구조에 맞는 올바른 응답을 돌려줘야 해요.

**Headers**(헤더)

필요한 헤더를 추가해요.

**Sample Response Data**(샘플 응답 데이터)

```
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

### Type: Hidden

액션 구성 화면에서는 숨겨지고, 매핑된 데이터가 페이로드로 전송돼요. company_id, customerid 같은 필수 정보를 시스템 데이터나 내 사용자 지정 트리거에서 가져올 때 써요.

### Type: Dynamic

Dynamic 필드는 API 호출 결과로 사용자 지정 필드를 만들 때 써요. 워크플로우 액션 구성 폼에 필드를 만들려면 API 호출이 아래 응답 구조를 돌려줘야 해요. 액션 하나에는 Dynamic 유형을 하나만 만들 수 있어요.

![Dynamic 유형 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005619479/original/4iG7FjTRJheIDHXNKGKDV3TZKaEtM-xMCg.png?1692598872)

**URL (POST)**

API 엔드포인트 URL을 입력하세요. 액션이 실행되면 아래 페이로드 형식으로 이 엔드포인트에 POST 방식으로 데이터를 보내요. 응답은 아래 샘플 응답 구조에 맞는 올바른 응답이어야 해요.

**Headers**

필요한 헤더를 추가해요.

**Sample Payload**(샘플 페이로드): 폼 데이터가 Dynamic 필드 API에 페이로드로 전송돼요.

```
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

**Sample Response Structure**(샘플 응답 구조): 섹션은 화면에서 필드를 묶는 데 쓰여요.

```
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

**필드 유형별 샘플 구조**

String

```
{
   "field": "name",
   "title": "Name",
   "fieldType": "string",
   "required": true
}
```

Numeric

```
{
   "field": "name",
   "title": "Name",
   "fieldType": "numeric",
   "required": true
}
```

Textarea

```
{
  "field": "description",
  "title": "Description",
  "fieldType": "textarea",
  "required": true
}
```

Select

```
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

Multiple Select

```
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

Radio

```
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

Toggle

```
{
  "field": "dataShare",
  "title": "Allow my data to be stored",
  "fieldType": "toggle",
  "required": true
}
```

Checkbox

```
{
  "field": "terms",
  "title": "Terms & conditions",
  "fieldType": "checkbox",
  "required": true
}
```

### Validation Rules

![유효성 검사 규칙 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046654729/original/-BqA09IMW6XXljUIMVpOefqpJJ_JkQ2TWg.png?1747285143)

Validation Rules 기능을 쓰면 앱 개발자가 폼 필드에 입력 검사를 적용해 데이터의 정확성을 지킬 수 있어요. 검사 방법은 세 가지 중에서 고를 수 있어요.

1. **Pre-defined Rules**(미리 정의된 규칙)
   - 이메일, 전화번호, URL, 숫자 값, Handlebar 구문 확인 같은 흔한 검사를 쉽게 적용해요.
   - ![미리 정의된 규칙 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046654763/original/XDtbol7Qdfx4-ahKv5gkVKT415lhZivHPw.png?1747285248)
2. **Regex Support**(정규식 지원)
   - 직접 만든 정규식으로 입력값이 특정 패턴에 맞는지 검사해요.
   - ![정규식 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046654765/original/mLG5Rv1JMo5y6MlQZVQfNmcY0Wucw3jr5w.png?1747285258)
3. **Arrow Function**(화살표 함수)
   - 입력값을 받아 검사 통과 여부에 따라 true 또는 false를 반환하는 화살표 함수를 직접 작성해요.
   - ![화살표 함수 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046654766/original/wEHzLmsCVVTfrMXMrTKEHB9Wii3yvBXn_Q.png?1747285266)

검사 규칙마다 검사에 실패했을 때 보여 줄 오류 메시지를 꼭 입력해야 해요.

## Multi-branch(멀티 브랜치)

Multi-Branch 기능을 쓰면 미리 정해 둔 여러 조건에 따라 동적으로 달라지는 브랜치를 만들 수 있어요. 워크플로우에 브랜치를 여러 개 두면 각 연락처를 상호작용이나 상태에 맞는 경로로 보낼 수 있어요.

![멀티 브랜치 설정 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033332890/original/Z0b9pEdrE-DG_za1m0tD-ZmEWFfJnSY3sg.png?1727069887)

![멀티 브랜치 설정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033332901/original/t75w0vc7umALitmmtlZaay_6fJTRh8DIwA.png?1727069912)

![멀티 브랜치 설정 화면 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033332913/original/tBcj_nSW1LIskT9KT_TedDHBqPl92qgMTA.png?1727069931)

- **Branch Section**(브랜치 섹션): 해당 브랜치 섹션의 이름이나 식별자를 정해요.
- **Branch Section Description**(브랜치 섹션 설명): 브랜치 섹션에 대한 간단한 설명을 적어요.
- **Branch Name Label**(브랜치 이름 레이블): 브랜치 이름 옆에 표시할 레이블을 지정해요.
- **Branch Name Helptext**(브랜치 이름 도움말): 브랜치 이름과 관련된 추가 안내를 적어요.
- **Delete Branch Title**(브랜치 삭제 제목): 브랜치를 삭제할 때 쓰는 제목이나 레이블을 정해요.
- **Delete Branch Description**(브랜치 삭제 설명): 브랜치를 삭제할 때 표시되는 설명이에요.

![브랜치 옵션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032480643/original/rq82aq6pm8EaxX8Na_ebjGAmRp129bzkWw.png?1725867015)

- **Allow New Branches**(새 브랜치 허용): 사용자가 액션 안에서 새 브랜치를 추가할 수 있어요.
- **Is Predefined Branches Editable**(미리 정의된 브랜치 편집 가능): 사용자가 액션 안에서 미리 정의된 브랜치를 편집할 수 있어요.

- **Show Branches Section**(브랜치 섹션 표시): 사용자에게 브랜치 섹션 정보를 보여 줘요.

Allow New Branches를 끈 경우

![새 브랜치 허용을 끈 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033332933/original/J0rhJoECnALYR39Y3b0WSBxRUOIKFbbc8A.png?1727069981)

![새 브랜치 허용을 끈 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033332974/original/ZLeZZHyChomMGQNgfpqiAz8J3G4UEZqOGg.png?1727070044)

미리 정의된 브랜치를 편집할 수 있는 경우

![미리 정의된 브랜치 편집 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033333000/original/YoCdmA4wy15bf8TiPG_wyPMIhLblouPGKQ.png?1727070083)

![미리 정의된 브랜치 편집 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033333041/original/RNSq7KP-b7whUKZx_weaXqk29UkYY91mDw.png?1727070133)

브랜치를 숨기는 경우

![브랜치 숨김 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033333116/original/ReCSVS39jy8eUqGbi14v7qicF0nKdyEO6Q.png?1727070243)![브랜치 숨김 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033333104/original/SEal4s-9lkEbiyUrkv4PuHAHfYaaBjb2zw.png?1727070234)

브랜치용 샘플 페이로드

```
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

## Action Execution(액션 실행)

API와 커스텀 코드 중 실행 방식을 고를 수 있어요.

### API

![API 실행 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032480310/original/vH_JLcjEpQJuLJ6A3uQ0b3FUZ-AfgZHipg.png?1725866757)

**URL (POST)**

API 엔드포인트 URL을 입력하세요. 이 액션이 실행되면 아래 페이로드 형식으로 이 엔드포인트에 POST 방식으로 데이터를 보내요.

**Headers**

API 엔드포인트로 데이터를 보낼 때 포함해야 하는 헤더 데이터를 추가해요.

**Sample Payload**: 폼 데이터가 Send Data URL에 페이로드로 전송돼요.

```
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

### Custom code(커스텀 코드)

Custom code를 쓰면 원하는 로직을 직접 만들 수 있어요. 미리 만들어진 API보다 훨씬 자유롭게 제어할 수 있어서, 복잡한 작업을 자동화하거나 API가 지원하지 않는 여러 서비스와 연동할 수 있어요.

![커스텀 코드 편집 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033359936/original/wB9t6ma8X3QDc3MPVASJwbbwjpbazkMzHw.png?1727087419)

**Code Editor**(코드 편집기)

Code Editor에서 코드를 작성해요.

버튼으로 Get, Put, Post, Delete 같은 HTTP 요청을 입력할 수 있어요.

피커를 사용해서 커스텀 값도 쓸 수 있어요.

출력은 JavaScript 객체 또는 객체 배열이어야 해요.

## 코드 테스트와 서식 정리

- 코드 테스트는 꼭 거쳐야 하는 단계예요. 테스트하지 않으면 이후 단계에서 코드의 출력값을 사용할 수 없어요.
- 코드를 테스트하려면 **Test Code**(코드 테스트) 버튼을 클릭하세요.
- **Run test**(테스트 실행) 버튼을 클릭했을 때 코드에 오류가 없으면 **Test Result Success**(테스트 결과 성공)가 표시돼요. 코드에 오류가 있으면 **Test Result Failed**(테스트 결과 실패)가 표시되고, 코드를 다시 확인해서 오류를 고쳐야 해요.
- **Format code**(코드 서식 정리) 버튼으로 코드 서식을 정리할 수도 있어요.

## Pause Execution(실행 일시중지)

- 이 토글을 켜면 재개 웹훅이 요청될 때까지 연락처가 이 액션에서 대기해요.
- 이 토글을 켜면 제공된 extras 객체를 워크플로우 재개 엔드포인트의 본문 페이로드로 전달해야 해요.
- **Show API details**(API 상세 보기) 버튼을 누르면 실행 성공과 실행 실패 때 웹훅에 전달할 샘플 응답을 볼 수 있어요.

![실행 일시중지 설정 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032481365/original/S2CljnH1PD8X0I5hAnHPIb_xpHXMMLNWPg.png?1725867420)

![실행 일시중지 설정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032481330/original/LYFLB1fldHF3ZL6miWM-dM82K7O_7fLCrA.png?1725867393)

**동기 실행(Sync Execution)인 경우**

브랜치 기능과 함께 실행 일시중지를 끄면, API 응답이나 커스텀 코드의 return 문에서 받은 `branchId` 속성을 사용해 연락처가 해당 브랜치로 이동해요. 여기서 branchId는 연락처가 다음으로 진행할 브랜치예요.

![동기 실행 브랜치 이동 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032512093/original/HJeogTLz5tgbQvMiQXG4d87nJw1vzH2bAA.png?1725883517)

**비동기 실행(Async Execution)인 경우**

실행 일시중지를 끈 경우, 재개용 웹훅으로 브랜치 ID를 보내야 해요. 이 정보는 **Show API details** 버튼에서 확인할 수 있어요. 자세한 내용은 위의 실행 일시중지(Pause Execution) 섹션을 참고하세요.

## Response Data(응답 데이터)

커스텀 변수를 구성할 샘플 응답 데이터를 추가해요.

**Add sample response**(샘플 응답 추가)

Send Data API 엔드포인트가 응답으로 보낼 올바른 샘플 응답 JSON 구조를 입력하세요.

![샘플 응답 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005620618/original/v5u2ptIftb-EkjoHz08EEx6aEKrwGKOJQA.png?1692600088)

응답 데이터에서 배열을 지원해요. 이 데이터는 참조를 기준으로 커스텀 변수에서 쓸 수 있고, Array Functions, Custom Code, Custom Webhooks에서도 사용할 수 있어요.

새 드롭다운 옵션에서 표준 값과 커스텀 값 피커 중 하나를 고를 수 있어요.

- Standard Values(표준 값): 필드 유형에 맞게 데이터를 입력해요(예: 날짜, 드롭다운, 태그).
- Custom Value Picker(커스텀 값 피커): 인바운드 웹훅 트리거의 값처럼 커스텀 필드의 데이터를 입력해요.

![표준 값과 커스텀 값 피커 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033144422/original/hiDL0BOJXspAcojkoZKz9dTngO6FL0lARw.png?1726732532)

## Manage Custom Variables(커스텀 변수 관리)

사용자가 워크플로우에서 쓸 수 있도록, 샘플 응답 데이터로 커스텀 변수를 추가해요.

## Add Custom Variable(커스텀 변수 추가)

**Name**

레이블 이름을 입력해요.

**Reference**

**Response Data**에 저장한 샘플 응답에서 참조 키를 선택해요.

## Submit for Review(검토 제출)

액션 버전은 기본적으로 초안 상태예요. 액션 정보와 구성을 업데이트한 뒤에는 그 버전을 검토에 제출해야 해요.

![검토 제출 버튼 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005621439/original/5UVWUz25eAcVTFtVlVtxEh3Fkg15t4zXDg.png?1692600744)

**Submit for review**를 클릭하고, 제출하는 버전의 **changelog**(변경 내역)를 입력하세요.

![변경 내역 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005622232/original/Xrf9qOywJo8Vovd-7Cjgm5mtglHrtYUP_Q.png?1692601503)

승인되면 검토에 제출한 버전이 모든 서브 계정에 게시돼요.

![승인 후 게시된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005621452/original/YeMGRy21eS8S8bI8rexthcKA8R4INYc2zw.png?1692600766)

## Create New Version(새 버전 만들기)

액션의 새 버전을 만들려면 **+ New Version**(+ 새 버전)을 클릭하세요.

![새 버전 만들기 버튼 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005621457/original/bHLDsksmL1K7qgmv7KoFYS6af3iMg8f0vQ.png?1692600778)

**+ New Version**을 클릭하면 이전에 게시한 데이터가 모두 미리 채워진 새 초안 버전이 만들어져요.

![새 초안 버전 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005622063/original/yLpMG6PiUYcVdUTi1zkBE6udOqOscWghbA.png?1692601301)

## Delete Action(액션 삭제)

액션을 삭제하면 완전히 삭제되고 복원할 수 없어요. 삭제한 액션은 마켓플레이스 앱과 워크플로우 액션 목록에서 모두 사라져요. 삭제한 액션이 어떤 워크플로우에 들어 있다면 그 액션은 실행되지 않고 건너뛰어요.

![액션 삭제 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014097127/original/mHtzZ8zfmpagivsX-3J84PV73HpFmvvnpw.png?1701408996)

삭제를 확인하려면 액션 이름을 입력하세요(**Enter action name to confirm delete**).

![액션 이름 입력으로 삭제 확인하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014097165/original/niXVvIBTbQIo0_tYJGqglh99njIMQUOGog.png?1701409041)
