---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003299-workflow-action-webhook-outbound-
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Webhook(아웃바운드)

워크플로우 빌더의 **Webhook** 액션을 쓰면 연락처 데이터 등을 하이퍼클래스에서 외부 앱이나 서비스로 실시간 전송할 수 있어요. 이 문서에서는 설정 방법, 전송되는 데이터, 테스트와 게시 방법을 안내해요.

## 워크플로우 액션 웹훅이란?

워크플로우 액션 웹훅은 하이퍼클래스의 정보를 다른 소프트웨어로 자동 전달하는 메신저 같은 기능이에요. 웹 요청을 받을 수 있는 외부 시스템이라면 거의 모두 하이퍼클래스와 연결할 수 있어요.

아웃바운드 웹훅은 하이퍼클래스 워크플로우에서 지정한 목적지 URL로 보내는 자동 메시지예요. 연락처가 워크플로우의 웹훅 단계에 도달하면 하이퍼클래스가 그 연락처와 트리거가 된 이벤트의 데이터를 모아 "페이로드"로 묶어요. 그리고 입력한 URL로 보내요. 이 데이터로 하이퍼클래스 밖의 다른 앱에서 작업을 실행하거나, 데이터를 동기화하거나, 프로세스를 시작할 수 있어요.

---

## 아웃바운드 웹훅을 쓰면 좋은 점

웹훅은 기본 연동만으로는 어려운 복잡한 연동 문제를 풀고, 더 고급스러운 자동화를 만들 때 쓸 수 있어요.

- 무제한 연동: Zapier, Make, 직접 만든 도구 등 수천 개의 외부 앱·서비스와 연결해서 하이퍼클래스 밖의 작업을 실행할 수 있어요.
- 실시간 데이터 동기화: 워크플로우에서 이벤트가 일어나는 즉시 외부 데이터베이스, 스프레드시트, 분석 플랫폼으로 데이터를 보낼 수 있어요.
- 맞춤형 자동화: 우편물 발송, 자체 CRM 업데이트, 외부 코스 플랫폼에 사용자 등록처럼 다른 시스템의 고유한 프로세스를 실행할 수 있어요.
- 리포팅 강화: 워크플로우와 연락처 데이터를 BI 도구로 보내 맞춤형 리포트와 대시보드를 만들 수 있어요.
- 높은 유연성: 비즈니스에 꼭 맞는 솔루션을 만들어 하이퍼클래스 자동화를 확장할 수 있어요.

---

## Webhook 액션 추가하고 설정하기

아래 순서대로 따라 하면 원하는 목적지로 데이터를 보내는 웹훅을 만들 수 있어요.

1. 서브 계정 왼쪽 메뉴에서 **자동화**를 클릭해 **워크플로우 빌더**로 이동하세요.
2. 새 워크플로우를 만들거나, 편집할 기존 워크플로우를 선택하세요.
3. 워크플로우에 트리거가 하나 이상 설정되어 있는지 확인하세요. 예를 들어 **Contact Tag Added**(연락처 태그 추가됨) 트리거가 있어요.

   ![워크플로우에 트리거가 설정된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053613164/original/sxl1bvnrmOfa15b-qWi1Yong5tmq8plIxw.png?1757635770)

4. 액션을 추가할 위치의 워크플로우 캔버스에서 플러스 아이콘(+)을 클릭하세요. 화면 오른쪽에 **Actions**(액션) 패널이 열려요.
5. **Actions** 패널의 검색창에 `webhook`을 입력하세요.
6. 목록에서 **Webhook**을 선택하세요. 워크플로우에 단계가 추가되고 **Webhook** 설정 패널이 열려요.

   ![Actions 패널에서 Webhook을 검색해 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053613176/original/l0oi-bAwLYD5cyjUPNOXi-7wiSvBabDDJw.png?1757635847)

---

## 웹훅 세부 설정

웹훅이 제대로 동작하려면 설정을 정확히 해야 해요. **Webhook** 설정 패널의 각 항목은 아래와 같아요.

- **Action Name**(액션 이름): 웹훅의 목적을 알 수 있는 이름을 입력하세요. 예: "Send New Lead to Slack", "Update External DB". 나중에 워크플로우에서 이 단계를 쉽게 찾을 수 있어요.
- **Method**(방법): 요청에 사용할 HTTP 메서드를 선택하세요. 데이터를 보낼 때는 POST를 가장 많이 쓰고, 기본으로 선택되어 있어요.
- **URL**: 데이터를 받을 외부 서비스의 고유 URL을 입력하세요. 가장 중요한 항목이니 받는 서비스에서 복사해 정확히 붙여 넣으세요.

![Webhook 설정 패널의 Action Name, Method, URL 항목](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053613194/original/alZJip9nvp_sBWBOGnyTZlzGHpevKR1ERg.png?1757635963)

---

## 커스텀 데이터 추가하기

웹훅 페이로드에 원하는 정보를 더 담을 수 있어요.

1. **CUSTOM DATA**(커스텀 데이터) 섹션에서 **+ Add item**(항목 추가) 버튼을 클릭하세요.
2. **Key**(키)와 **Value**(값) 입력란이 있는 새 줄이 나타나요.
3. **Key**에는 보내려는 데이터 필드의 이름을 입력하세요. 예: `lead_source`, `product_interest`. 공백 없는 간단한 텍스트로 쓰세요.
4. **Value**에는 보낼 데이터를 입력하세요. 일반 텍스트를 쓰거나, 커스텀 값으로 동적 데이터를 넣을 수 있어요. 예: `{{contact.source}}`, `{{custom_fields.product_id}}`

![CUSTOM DATA 섹션에서 Key와 Value를 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053613212/original/te2gT8iZzsHjip9pIGUg0TU0UGWqTQQ0bg.png?1757636087)

모든 항목을 입력했으면 패널 아래쪽의 파란색 **Save Action**(액션 저장) 버튼을 클릭해 설정을 저장하세요.

---

## 웹훅 데이터(페이로드) 이해하기

웹훅이 보내는 데이터를 "페이로드"라고 해요. 기본으로 어떤 데이터가 담기는지, 워크플로우 트리거에 따라 받는 정보가 어떻게 달라지는지 알아 두면 외부 시스템에서 데이터를 제대로 처리할 수 있어요.

### 기본 데이터

모든 웹훅은 기본적으로 워크플로우에 참여한 연락처의 기본 정보를 보내요. 아래 항목이 포함돼요.

- 전체 이름, 이름, 성
- 이메일과 전화번호
- 주소
- 태그
- 연락처에 연결된 모든 기본 필드와 커스텀 필드

포함되는 기본 필드의 전체 목록은 설정 패널의 **standard data** 링크를 클릭하면 공식 문서에서 볼 수 있어요.

### 트리거에 따라 달라지는 데이터

웹훅 페이로드에는 워크플로우를 시작한 트리거와 관련된 데이터가 추가로 담길 수 있어요. 꼭 알아 두어야 할 개념이에요.

- 예시: 워크플로우 트리거가 **Appointment Booked**(예약 완료)이면 웹훅 페이로드에 해당 예약의 정보(시작 시간, 캘린더 ID, 예약 상태 등)도 함께 담겨요.

{% hint style="warning" %}
**Contact Tag Added** 같은 트리거처럼 특정 오브젝트와 관련 없는 트리거라면, 예약이나 기회 같은 다른 오브젝트의 데이터는 페이로드에 포함되지 않아요. 필요한 데이터를 받으려면 알맞은 트리거를 사용해야 해요.
{% endhint %}

---

## 웹훅 테스트하고 게시하기

워크플로우를 활성화하기 전에 웹훅이 데이터를 제대로 보내는지 테스트해 보세요. 아래에서 테스트 방법, **Execution Logs**(실행 로그)에서 결과를 확인하는 방법, 워크플로우를 게시하는 방법을 안내해요.

{% hint style="info" %}
무료 사이트로 웹훅을 테스트할 수 있어요. https://webhook.site/ 가 대표적이에요. 또는 "free webhook test"로 검색해 보세요.
{% endhint %}

1. 웹훅 액션을 저장한 뒤, 빌더 오른쪽 위에 있는 **Test Workflow**(워크플로우 테스트) 버튼을 클릭하세요.
2. **Run A Test For Contact**(연락처로 테스트 실행) 패널이 열려요. **SELECT CONTACTS**(연락처 선택) 드롭다운에서 테스트용 연락처를 선택하세요.
3. 파란색 **Run Test**(테스트 실행) 버튼을 클릭하세요. 웹훅 액션을 포함해 선택한 연락처에 대해 워크플로우 전체가 실행돼요.

   ![Run A Test For Contact 패널에서 테스트 연락처를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053613253/original/nNtyFfTfBe42PYSJhinEiV8LhO8kUNkgjQ.png?1757636342)

4. 테스트가 성공했는지 확인하려면 **Execution Logs** 탭을 클릭하세요.
5. 테스트 연락처의 로그 항목을 찾으세요. **Webhook** 액션의 상태가 **Executed**(실행됨)로 보이면, 하이퍼클래스가 입력한 URL로 데이터를 성공적으로 보냈다는 뜻이에요.

   ![Execution Logs에서 Webhook 액션이 Executed 상태로 표시된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053613268/original/qO-eiyrUCHBfHi8MqVet-7-A5oIEHdFcuA.png?1757636410)

6. 웹훅이 의도대로 동작하는 것을 확인했다면, 오른쪽 위의 **Publish**(게시) 토글을 켜세요. 워크플로우가 라이브 상태가 되어 실제 이벤트로 실행돼요.

---

## 데이터 형식 자세히 보기

연락처 데이터와 서브 계정(location) 오브젝트 데이터는 기본으로 포함돼요. 반면 예약, 작업 같은 다른 관련 오브젝트는 해당 트리거가 워크플로우에 적용된 경우에만 전달돼요.

예를 들어 예약 날짜와 시간은 **Appointment Booked** 같은 트리거로 워크플로우가 예약 정보를 입력값으로 가지고 있을 때만 가져올 수 있어요. 마찬가지로 파이프라인에 있는 여러 기회의 **Opportunity owner**(기회 담당자)는 **Pipeline Changed**(파이프라인 변경됨) 같은 기회 트리거가 있는 워크플로우에서만 사용할 수 있어요.

```
{

  // Contact standard fields

  first_name,

  last_name,

  full_name,

  email,

  phone,

  tags,

  address1,

  city,

  state,

  country,

  timezone,

  date_created,

  postal_code,

  company_name,

  website,

  date_of_birth,

  contact_source,

  full_address,

  contact_type,

  gclid,

  ...

  ... Contact Custom Fields

  ...

  // Location Data mostly present alawys with all webhooks, key field: location

  location: {

      name,

      address,

      city,

      state,

      country,

      postalCode,

      fullAddress,

      id

  }

  // Opportunity if applicable, added on root level

  opportunity_name,

  status,

  lead_value,

  opportunity_source,

  source,

  pipleline_stage, // name of pipeline stage

  pipeline_id,

  id,

  pipeline_name,

  // Campaign if applicable, field key: campaign

  campaign: {

      id,

      name

  },

  // User if applicable, field key: user

  user: {

      firstName,

      lastName,

      email,

      phone,

      extension,

      address1,

      city,

      state,

      country,

      postalCode

  },

  // Appointment if applicable, field key: calendar 

  calendar: {

      id, // calendar id

      calendarName, // calendar.name,

      title, // appointment title

      selectedTimezone, // location timezone OR 'UTC'

      appointmentId,

      startTime: // startTime as per the selectedTimezone in format 'YYYY-MM-DDTHH:mm:ss'

      endTime: // endTime as per the selectedTimezone in format 'YYYY-MM-DDTHH:mm:ss'

      status,

      appoinmentStatus,

      address,

      notes,

      date_created,

      created_by, // user name if this is created by user

      created_by_user_id // user id if this is created by user

      created_by_meta: { // internal fields

        source,

        channel

      },

      last_updated_by_meta: { // internal fields

        source,

        channel

      }

  },

  // Two Step OrderForm if applicable, field key: order

  order: {

      ... // Dynamic data, please run the test in order to get example data

  },

  // Invoice if applicable, field key: invoice

  invoice: {

      ... // Dynamic data, please run the test in order to get example data

  },

  // Task if applicable, field key: task

  task: {

      title,

      body,

      dueDate: dueDate converted to UTC timezone with format 'YYYY-MM-DDTHH:mm:ss'

  }

  // Note if applicable, field key: note

  note: {

      body

  }

  // Message if applicable, field key: message

  message: {

      type,

      body,

      direction,

      status

  }

  // Workflow if applicable, field key: workflow

  workflow: {

      id,

      name

  }

}
```

---

## 자주 묻는 질문

### 아웃바운드 웹훅과 인바운드 웹훅은 뭐가 다른가요?

아웃바운드 웹훅(이 액션)은 하이퍼클래스에서 외부 서비스로 데이터를 보내요. 인바운드 웹훅(워크플로우 트리거의 한 종류)은 외부 서비스에서 하이퍼클래스로 데이터를 받아 워크플로우를 시작해요.

### 웹훅으로 실제 전송된 데이터를 확인하려면 어떻게 하나요?

**Execution Logs**에서는 액션이 실행되었는지만 확인할 수 있고, 페이로드 데이터 자체는 보이지 않아요. 데이터를 보려면 테스트할 때 `webhook.site` 같은 무료 웹훅 테스트 도구의 주소를 URL로 설정해 보세요. 데이터를 받는 앱의 수신 데이터 로그에서 확인할 수도 있어요.

### Execution Logs에 웹훅 액션 오류가 표시돼요. 어떻게 해야 하나요?

먼저 웹훅 설정의 URL이 정확하고 사용 가능한 주소인지 다시 확인하세요. 다음으로 받는 앱이 POST 요청을 받도록 설정되어 있고, 하이퍼클래스가 보내는 데이터 형식을 처리할 수 있는지 확인하세요. 마지막으로 외부 앱의 오류 로그에서 요청이 실패한 이유를 자세히 확인하세요.

### 특정 기회나 예약을 트리거로 쓰지 않고도 그 데이터를 보낼 수 있나요?

아니요. 페이로드 데이터는 워크플로우가 시작된 상황에 따라 달라져요. 기회 같은 특정 오브젝트의 데이터를 받으려면 그 기회와 관련된 이벤트(예: **Pipeline Stage Changed**(파이프라인 단계 변경됨))로 워크플로우가 시작되어야 해요. **Tag Added**(태그 추가됨) 같은 일반 트리거는 연락처 수준의 데이터만 보내요.

### 웹훅과 함께 많이 쓰는 도구에는 어떤 것이 있나요?

웹훅은 Zapier나 Make(예전 Integromat) 같은 연동 플랫폼으로 데이터를 보낼 때 많이 써요. 이런 플랫폼은 수천 개의 다른 앱과 연결할 수 있어요. 직접 만든 서버, Google Sheets(Zapier 같은 서비스를 거쳐서), Slack 같은 커뮤니케이션 도구로 데이터를 보낼 때도 써요.

### 이 기능을 쓰려면 개발자여야 하나요?

하이퍼클래스에서 웹훅 액션을 설정하는 일은 간단하고 코딩이 필요 없어요. 다만 데이터를 보낼 서비스에서 목적지 URL을 받아 와야 해요. 그 서비스가 어떤 데이터를 받는지 알면 도움이 되지만, 많은 서비스가 URL과 필요한 안내를 모두 제공해요.

### 웹훅 액션으로 이미지나 파일도 보낼 수 있나요?

아니요, 웹훅 액션으로는 이미지나 파일을 보낼 수 없어요.
