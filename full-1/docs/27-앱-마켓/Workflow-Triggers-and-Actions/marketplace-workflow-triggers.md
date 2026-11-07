---
원문: https://help.gohighlevel.com/support/solutions/articles/155000001024-marketplace-workflow-triggers
번역일: 2026-11-06
카테고리: 27-앱-마켓
---

# 마켓플레이스 워크플로우 트리거 만들기

마켓플레이스 워크플로우 트리거는 마켓플레이스에서 만들고 관리하는 사용자 지정 트리거예요. 직접 만든 애플리케이션이나 API의 데이터를 워크플로우로 보내고 싶을 때 이 트리거를 만들어 쓰세요.

[동영상](https://www.youtube.com/embed/5Ii6NM4iCI8?&wmode=opaque)

{% hint style="info" %}
마켓플레이스 워크플로우 트리거를 관리하려면 마켓플레이스에 가입하거나 로그인하세요.

마켓플레이스 워크플로우 트리거는 하이퍼클래스 프리미엄 트리거 및 액션에 포함돼요. 실행할 때마다 요금이 부과돼요.

하이퍼클래스 프리미엄 트리거 및 액션을 워크플로우에서 켜고 재청구하는 방법

마켓플레이스 앱에서 만든 트리거를 쓰려면 해당 서브 계정에서 워크플로우용 하이퍼클래스 프리미엄 트리거 및 액션을 켜야 해요.

앱 안에서 만든 마켓플레이스 워크플로우 트리거는 서브 계정에 그 앱이 마켓플레이스에서 설치·연동되어 있을 때만 워크플로우 트리거 목록에 나타나요.
{% endhint %}

## 사전 준비

{% hint style="warning" %}
액션과 트리거를 사용하려면 `workflows.readyonly` 스코프를 켜야 해요.
<!-- 검토 필요: 원문 스코프 이름이 'readyonly'로 적혀 있음. 'readonly' 오타인지 확인 -->
{% endhint %}

![스코프 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031136715/original/0aSds7RCt1quSlQ08B6V0bOuZWIUk56ZGw.png?1723791924)

## 트리거 만들기

![트리거 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008571402/original/-akI1I0dRCxxnUB-vS_AXBRwM2lDmLY9zQ.png?1695707381)

- **이름**: 트리거 이름을 입력하세요.
- **키**: 워크플로우 안에서 이 트리거를 가리킬 때 쓰는 고유 식별자예요. 나중에 바꿀 수 없어요. 예: {{mycustomtrigger.data.name}}

## Trigger Information(트리거 정보)

트리거의 상세 정보를 입력해요.

![트리거 정보 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008571484/original/upXNQ8ldHATTzVMFsJA6SDjKyyyXW8Md0A.png?1695707448)

- **아이콘**: 이 트리거에 쓸 아이콘을 고르세요. 워크플로우에서 이 트리거 옆에 보여요.
- **이름**: 사용자 지정 트리거 이름이에요.
- **키**: 워크플로우 안에서 이 트리거를 가리킬 때 쓰는 고유 식별자예요. 예: {{trigger\_a.custom\_variable}} 나중에 바꿀 수 없어요.
- **Short description**(짧은 설명): 트리거가 어떤 일을 하는지 짧게 적어요. 워크플로우에서 이 트리거의 부제목으로 보여요.
- **요약**: 트리거가 어떤 일을 하는지, 왜 써야 하는지 사용자가 이해할 수 있게 자세히 적어요.

## Trigger Configuration(트리거 구성)

### Trigger Data(트리거 데이터)

필터와 커스텀 변수를 설정하려면 먼저 샘플 트리거 페이로드 데이터를 추가해야 해요.

**Add sample trigger payload data**(샘플 트리거 페이로드 데이터 추가)에는 트리거로 전송될 올바른 샘플 페이로드를 JSON 구조로 입력하세요.

![샘플 트리거 페이로드 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008572394/original/dDTnUzyorTuAP9fwktAjyt8XWSZoNy0ysQ.png?1695708653)

### Manage Filters(필터 관리)

샘플 트리거 데이터를 바탕으로 필터를 추가해요. 사용자는 워크플로우에서 트리거를 구성할 때 이 필터를 써요.

![필터 관리 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008573989/original/dUCSEOtTj74A2fotCwqyRB5157kJjHfxXA.png?1695710480)

#### Create New Filter(새 필터 만들기)

![새 필터 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008575005/original/Eno_UsYIGBv7NPyT-TDujscxHAjDgMwM8w.png?1695711462)

- **이름**: 필터 이름을 입력하세요.
- **유형**: 아래 필드 유형 중 하나를 고르세요.
  - **String**(문자열)
  - **Select**(선택)
  - **Multiple Select**(다중 선택)
  - **Dynamic**(동적)
- **필수**: 워크플로우에서 꼭 입력해야 하는 필터라면 켜세요.
- **Reference**(참조 키): 샘플 **Trigger Data**에서 참조할 키를 고르세요. 이 필드의 값이 선택한 키에 연결돼요. 예: trigger\_a\_name
- **Alters Dynamic Filter**(동적 필터 변경): 켜면 이 필터 값이 바뀔 때마다 워크플로우 트리거 구성 화면에서 동적 필터를 다시 불러와요.

#### 유형: Select / 다중 선택

![Select·다중 선택 유형 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008575097/original/esi5jPJrs8bzkVEwcMvNP2P6JGgF_ZMHvg.png?1695711617)

**Option Type**(옵션 유형)은 **Select**와 **다중 선택** 유형에서만 쓸 수 있어요. 아래 옵션 유형 중 하나를 고르세요.

- **Constants**(상수)
- **Internal Reference**(내부 참조)
- **External API**(외부 API)

##### Constants

레이블-값 쌍을 직접 추가해서 옵션을 불러와요.

![Constants 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005617938/original/xkySDB0XDrua62JzPisbo1TNQH59sEZSaw.png?1692595922)

##### Internal Reference

하이퍼클래스 내부 모듈에서 옵션을 불러와요. 옵션 목록을 불러올 하이퍼클래스 모듈을 하나 고르세요.

![Internal Reference 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005617998/original/du8lZRMai5wENrSducJPjhqgFASlOZ_P6Q.png?1692596002)

지원되는 하이퍼클래스 모듈

![지원되는 하이퍼클래스 모듈 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005670538/original/8uQtBkMLWLhm6jcDxdX-gzjR07BQ_GPtXw.png?1692623479)

##### External API

외부 API 엔드포인트에서 옵션을 불러와요.

![External API 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005618042/original/2om_uuB9g_V8MhG1MOLUrPPMIiq2kLggTA.png?1692596134)

- **URL (GET)**: GET 방식을 지원하는 URL을 입력하세요. 아래 샘플 응답 구조에 맞는 올바른 응답을 보내야 해요.
- **헤더**: 필요한 헤더를 추가하세요.

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

#### 유형: Dynamic

Dynamic 필터는 API 호출 결과로 사용자 지정 필터를 만들 때 써요. 워크플로우 트리거 구성 폼 화면에 필터를 만들려면 API 호출이 아래 응답 구조를 반환해야 해요. 트리거 하나에 Dynamic 유형은 하나만 만들 수 있어요.

![Dynamic 유형 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008575252/original/ifNAt13wYheupSXn2LhgyT0zOp4wql5YtQ.png?1695711754)

- **URL (POST)**: API 엔드포인트 URL을 입력하세요. 실행하면 아래 페이로드 형식으로 이 엔드포인트에 POST 방식으로 데이터를 보내요. 아래 샘플 응답 구조에 맞는 올바른 응답을 돌려줘야 해요.
- **헤더**: 필요한 헤더를 추가하세요.

**Sample Payload**(샘플 페이로드): 폼 데이터가 동적 필드 API로 페이로드로 전송돼요.

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

**Sample Response Structure**(샘플 응답 구조)

```
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

**필터 유형별 샘플 구조**

String

```
{  
   "field": "name",  
   "title": "Name",  
   "fieldType": "string",  
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

### Manage Custom Variables(커스텀 변수 관리)

트리거 데이터를 바탕으로 커스텀 변수를 추가해요. 사용자는 워크플로우에서 이 변수를 쓸 수 있어요.

#### Add Custom Variable(커스텀 변수 추가)

![커스텀 변수 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008572039/original/JQry9o7DFN62Ce_h2X0zvVE1zShpmMNqKg.png?1695708327)

- **이름**: 레이블 이름을 입력하세요.
- **Reference**(참조 키): 샘플 트리거 데이터에서 참조할 키를 고르세요.

### Subscription URL(구독 URL)

API 엔드포인트로 트리거 구성 정보를 전달받아요.

![Subscription URL 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008572516/original/NxuZK11tEgoiGhlnW0FUCrPpaQu5iM88FA.png?1695708842)

- **URL (POST)**: API 엔드포인트 URL을 입력하세요. 워크플로우에서 트리거를 구성(CREATED/UPDATED/DELETED)할 때마다 아래 페이로드 형식으로 이 엔드포인트에 POST 방식으로 트리거 구성 데이터를 보내요.
- **헤더**: API 엔드포인트로 데이터를 보낼 때 포함해야 하는 헤더를 추가하세요.

**페이로드 형식**

**워크플로우에서 트리거가 "CREATED"될 때**

```
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

**워크플로우에서 트리거가 "UPDATED"될 때**

```
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

**워크플로우에서 트리거가 "UPDATED"될 때**
<!-- 검토 필요: 원문 내용이 서로 다름 (제목은 UPDATED인데 아래 페이로드의 eventType은 DELETED) -->

```
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

트리거 버전은 기본적으로 초안 상태예요. 트리거 정보와 구성을 모두 수정한 뒤에는 그 버전을 검토에 제출해야 해요.

![트리거 버전 초안 상태 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005621439/original/5UVWUz25eAcVTFtVlVtxEh3Fkg15t4zXDg.png?1692600744)

**검토 제출**을 클릭하고, 제출하는 버전의 **changelog**(변경 내역)를 입력하세요.

![검토 제출 시 변경 내역 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008572191/original/IGXs2a9XcQ-ybuxHr4VjcY8_JSnDq-VNOg.png?1695708444)

검토 제출한 버전이 승인되면 모든 서브 계정에 라이브로 게시돼요.

![승인 후 게시된 버전 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005621452/original/YeMGRy21eS8S8bI8rexthcKA8R4INYc2zw.png?1692600766)

## 새 버전 만들기

트리거의 새 버전을 만들려면 **+ New Version**(새 버전)을 클릭하세요.

![새 버전 버튼 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005621457/original/bHLDsksmL1K7qgmv7KoFYS6af3iMg8f0vQ.png?1692600778)

**+ New Version**을 클릭하면 이전에 게시한 데이터가 모두 채워진 새 초안 버전이 만들어져요.

![새 초안 버전 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005622063/original/yLpMG6PiUYcVdUTi1zkBE6udOqOscWghbA.png?1692601301)

## 트리거 삭제

트리거를 삭제하면 영구적으로 삭제되고 복원할 수 없어요. 삭제한 트리거는 마켓플레이스 앱과 워크플로우 트리거 목록에서 사라져요. 삭제한 트리거가 어떤 워크플로우에 들어 있다면 그 트리거의 실행은 건너뛰어요.

![트리거 삭제 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014522319/original/iILsc-HqjeJcvaYLyzPS1DLyWTp-E8ls2w.png?1701862634)

삭제를 확인하려면 트리거 이름을 입력하세요.

![삭제 확인을 위한 트리거 이름 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014522368/original/6eQ0DnkP561wluUc9BZkj3VbytT196rMSQ.png?1701862664)

## 연락처 없이도 워크플로우를 실행할 수 있나요?

- 워크플로우는 연락처 데이터 없이도 실행할 수 있어요. 마켓플레이스 트리거로 어떤 페이로드 데이터든 보내서 워크플로우에서 쓸 수 있어요.
- 연락처 정보에 의존하지 않는 액션은 연락처 없이 진행할 수 있어요. **Custom Webhook**(사용자 지정 웹훅), Google Sheet, Slack, ChatGPT와 모든 내부 도구는 연락처 없이도 실행돼요.
- 필요하면 **Create/Update Contact**(연락처 생성/업데이트) 또는 **Find Contact**(연락처 찾기) 액션으로 연락처 데이터를 워크플로우로 가져올 수 있어요.

**예시**

- 주문 데이터를 트리거로 보내 주문 정보를 Google Sheet에 추가하고, **If/Else**(조건 분기)로 주문 금액에 따라 분류한 뒤 Slack 알림을 보내요.
- **Find Contact** 액션으로 Contact ID가 일치하는 연락처를 가져와요.
