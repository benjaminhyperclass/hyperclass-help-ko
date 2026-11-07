---
원문: /support/solutions/articles/155000003305-workflow-action-custom-webhook
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Custom Webhook(커스텀 웹훅)

워크플로우의 **Custom Webhook**(커스텀 웹훅) 액션을 쓰면 GET, POST, PUT, DELETE 요청으로 외부 서비스에 데이터를 실시간으로 보낼 수 있어요. 인증, 헤더, 쿼리 파라미터, JSON/폼 페이로드를 설정해서 코드 없이 CRM, 앱, 맞춤 API와 연결할 수 있어요. 이 문서에서는 설정 방법, 활용 팁, 실제 예시를 안내해요.

## Custom Webhook이란?

Custom Webhook은 워크플로우에서 내가 정한 URL로 HTTP 요청을 보내는 액션이에요. 워크플로우가 이 단계에 도착하면 하이퍼클래스가 헤더, 파라미터, 페이로드(매핑한 동적 값 포함)를 조립해서 외부 시스템으로 요청을 보내요.

## Custom Webhook의 장점

Custom Webhook이 어떤 상황에 잘 맞는지 알면 알맞은 자동화 도구를 고르고, 연동할 서비스에 맞게 요청을 구성하기 쉬워요.

- **다양한 메서드:** GET, POST, PUT, DELETE 중에서 API 작업에 맞게 골라 쓸 수 있어요.

- **다양한 인증 방식:** **Bearer token**, **API key**, **Basic Auth**, **OAuth2**를 쓰거나, **No auth**를 선택하고 커스텀 헤더를 추가할 수 있어요.

- **정확한 데이터 매핑:** {{contact.email}} 같은 **동적 값**을 헤더, 파라미터, 본문에 넣어서 요청마다 알맞은 레코드 정보를 보낼 수 있어요.

- **재사용 가능한 구성:** 한 번 만들어 두면 헤더, 콘텐츠 유형, 페이로드 형태를 그대로 유지한 채 다른 워크플로우에서도 쓸 수 있어요.

- **빠른 문제 확인:** 응답 저장(선택)과 워크플로우 실행 로그로 테스트하고 문제를 해결하기 쉬워요.

## 인증 방식

외부 API는 대개 인증 정보를 요구해요. 연동할 서비스가 지원하는 방식을 고르고, 보안을 위해 비밀 값은 URL이 아니라 헤더에 넣으세요.

- **Bearer Token**

  Authorization: Bearer <token> 헤더를 사용해요.

  *헤더 예시:*

```
Authorization: Bearer {{location.api_token}}
```

- **API Key**

  대부분의 서비스는 X-API-Key: <key> 같은 커스텀 헤더를 요구해요. 연동할 서비스가 요구할 때만 쿼리 문자열에 키를 넣으세요.

  *헤더 예시:*

```
X-API-Key: {{location.external_api_key}}
```

- *쿼리 예시(필요한 경우에만):* ?api\_key={{location.external\_api\_key}}
- **Basic Auth**

  액션의 Authorization 입력란에 **Username**(사용자명)과 **Password**(비밀번호)를 입력하세요. 하이퍼클래스가 Authorization: Basic ... 헤더를 알맞게 만들어 보내요.
- **OAuth2**

  연동할 서비스가 OAuth2를 쓴다면 먼저 **글로벌 워크플로우 설정**의 **OAuth2 / Manage Tokens**(OAuth2 / 토큰 관리)에서 토큰을 설정하고, 액션에서 그 토큰을 선택하세요. 토큰이 자동으로 교체되거나 갱신되는 서비스에는 OAuth2를 권장해요.
- **No Auth + Custom Header**

  X-Signature: <secret> 같은 별도 헤더를 요구하는 서비스라면 **No auth**를 선택하고 **Headers**(헤더)에 해당 헤더를 추가하세요.

## HTTP 메서드와 요청 구성 요소

알맞은 메서드를 고르고 데이터를 요청의 올바른 위치에 넣으면 400/401/422 오류를 줄이고 연동을 빠르게 마칠 수 있어요.

- **URL과 경로 파라미터:** 경로에 변수를 넣을 수 있어요. 예: https://api.example.com/contacts/{{contact.id}}

- **GET:** 데이터를 조회해요. 본문은 보통 무시되므로 쿼리 파라미터를 쓰세요: <https://api.example.com/leads?email={{contact.email}}&status=active>

- **POST:** 리소스를 새로 만들어요. JSON 본문이나 폼 데이터를 보내요(Content-Type 참고).

- **PUT:** 리소스를 수정해요. 보통 경로에 ID가 있어야 하고 JSON 본문이 필요해요.

- **DELETE:** 리소스를 삭제해요. 경로에 ID를 넣는 경우가 많아요.

- **Content-Type:** 주로 application/json(JSON 본문)이나 application/x-www-form-urlencoded(폼 필드)를 써요. 연동할 서비스의 문서에 맞추세요.

## Event와 Method의 차이 (화면 동작)

Custom Webhook 액션에는 두 가지 설정 방식이 있어요. **CUSTOM**은 메서드, 콘텐츠 유형, Raw Body를 모두 직접 설정할 수 있어요. **GET/POST**는 더 간단한 화면을 보여 줘요. 연동할 서비스의 요구 사항에 맞는 방식을 고르세요.

- **Event = CUSTOM (고급):**

  - **Method**(메서드: GET, POST, PUT, DELETE), **Content-Type**(콘텐츠 유형), JSON 등을 입력하는 **Raw Body**(원본 본문) 편집기가 나타나요.
  - JSON 페이로드, POST가 아닌 메서드, 명시적인 헤더/콘텐츠 유형이 필요할 때 알맞아요.
- **Event = POST (간단):**

  - 폼 형식 페이로드용 **Body (Key and Value)**(본문: 키와 값) 입력란이 나타나고, Raw Body 편집기는 나타나지 않아요.
  - 단순한 키/값 전송에 쓰세요. 연동할 서비스가 JSON을 요구하면 **CUSTOM**으로 바꾸세요.
- **Event = GET (간단):**

  - 요청 본문이 없어요. 필터는 **Query Parameters**(쿼리 파라미터)로 보내세요. **Save response from this Webhook**(이 웹훅의 응답 저장)을 쓸 수 있어요.
- **Event 선택 상자:**

  - **Event** 드롭다운에서 고른 값에 따라 보이는 입력란이 달라져요. 모든 항목을 직접 설정하려면 **CUSTOM**을 고르세요.
- **변수 선택기:**

  - URL, Headers, Query Params(쿼리 파라미터), Body 입력란 옆의 작은 *태그* 아이콘을 누르면 동적 값 선택기가 열려요. {{contact.id}} 같은 값을 넣을 수 있어요.

## 헤더와 쿼리 파라미터

API는 인증, 콘텐츠 유형, 버전, 필터링을 위해 특정 헤더와 쿼리 파라미터를 요구하는 경우가 많아요. 필요하면 동적 값을 매핑하세요.

- **헤더 예시:**

```
Authorization: Bearer {{location.api_token}} Content-Type: application/json X-API-Key: {{location.external_api_key}} X-App-Version: 2024-11-01
```

- **쿼리 파라미터 예시:**

```
lead_id={{contact.id}} email={{contact.email}} source=workflow
```

- 연동할 서비스가 요구하는 경우가 아니라면 비밀 값을 쿼리 문자열에 넣지 마세요.

## 페이로드와 필드 매핑

동적 값을 쓰면 연락처, 기회 등 워크플로우 데이터로 요청마다 내용을 맞출 수 있어요. 외부 API가 요구하는 형태에 맞추세요.

- **단순(flat) JSON 페이로드 (POST / 생성):**

```
{  "id": "{{contact.id}}",  "first_name": "{{contact.first_name}}",  "last_name": "{{contact.last_name}}",  "email": "{{contact.email}}",  "phone": "{{contact.phone}}" }
```

- **중첩 JSON:**

```
{  "contact": {    "id": "{{contact.id}}",    "name": "{{contact.name}}",    "phones": ["{{contact.phone}}"],    "tags": ["{{contact.tag}}", "new-lead"]  } }
```

- **폼 인코딩:** Content-Type을 application/x-www-form-urlencoded로 설정하고, JSON 대신 키/값 쌍을 입력하세요.

## 테스트와 문제 해결

실제로 쓰기 전에 요청을 확인하면 자동화가 끊기는 일을 막을 수 있어요. 연동할 서비스 쪽 도구와 워크플로우 로그를 함께 활용하세요.

- **Test Workflow**(워크플로우 테스트, 초안 모드)에 샘플 레코드를 넣어 액션을 실행해 보세요.

- **Webhook.site**나 **Postman** 컬렉션으로 테스트 요청을 보내서 헤더, 파라미터, 페이로드 형태를 확인하세요.

- 먼저 기본 사항을 확인하세요. URL, 메서드, **Content-Type**, 필수 헤더, 유효한 인증 정보가 맞는지 살펴보세요.

- **Execution Logs**(실행 로그)와 실행 기록에서 액션이 실행됐는지, 상태 코드가 어떤지 확인하세요.

- **Content-Type**이나 **Raw Body** 편집기가 보이지 않으면 **Event** 선택을 확인하세요. JSON 페이로드나 **PUT/DELETE** 요청에는 **CUSTOM**을 고르세요.

- 자주 만나는 HTTP 응답:

  - **400/422** 잘못된 페이로드 → 서비스가 요구하는 필드와 데이터 유형에 맞추세요.
  - **401/403** 인증 실패/접근 금지 → 토큰, 키, 권한 범위(scope), 계정 권한을 바로잡으세요.
  - **404** 잘못된 경로/ID → 엔드포인트와 경로 변수를 확인하세요.
  - **409** 충돌/멱등성 → 고유한 ID를 쓰거나 서비스의 upsert 규칙을 따르세요.
  - **429** 요청 한도 초과 → 서비스의 한도에 맞춰 속도를 늦추거나 지연/재시도를 추가하세요.
  - **5xx** 서비스 오류 → 나중에 다시 시도하고, 서비스 고객지원에 문의하세요.

## Custom Webhook 설정하기

순서대로 차근차근 설정하면 오류를 줄이고, 요청을 서비스가 기대하는 형태에 맞출 수 있어요. 테스트하기 전에 아래 단계로 URL, 이벤트/메서드, 인증, 헤더/파라미터, 페이로드를 설정하세요.

### 1. 워크플로우 열기

**자동화 > 워크플로우**로 이동해서 데이터를 보낼 워크플로우를 여세요. 그래야 워크플로우가 이 액션에 도착할 때 알맞은 레코드 정보를 쓸 수 있어요.

![워크플로우 목록에서 워크플로우를 여는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060390113/original/9QPiR4rF7uyh_YfNxki6M-a8FESN4-dekw.png?1765448444)

### 2. 액션 추가하기

**+ Add action**(액션 추가)을 클릭하고 **Send Data**(데이터 보내기) > **Custom Webhook**(커스텀 웹훅)을 선택하세요. 외부로 HTTP 요청을 보내는 단계가 만들어져요.

![액션 추가 패널에서 Send Data의 Custom Webhook을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060390153/original/ZfDK-0LbEyoBv-aDfjdBYq1kqyPxyV526Q.png?1765448467)

### 3. 액션 이름 정하기

나중에 읽고 문제를 찾기 쉽도록 액션 이름을 알아보기 쉽게 정하세요. 예: **Send Lead to External CRM**

![액션 이름을 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060390603/original/m62IhxkcMDBAgaYHRb1wS2nhIMO1Sm2R5A.png?1765448710)

### 4. Event 선택하기 (필요하면 Method도)

사용 목적에 맞는 **Event**를 고르세요.

- **CUSTOM**을 고르면 **Method**(GET, POST, PUT, DELETE) 선택, **Content-Type**, JSON 등을 입력하는 **Raw Body** 편집기가 나타나요.
- **POST**를 고르면 Raw Body 편집기 없이 간단한 **Body (Key and Value)** 입력란이 나타나요.
- **GET**에는 본문이 없어요. 필터는 **Query Parameters**로 보내세요.

입력란 옆의 작은 태그 아이콘을 누르면 동적 값 선택기가 열려요(예: {{contact.id}}).

![Event 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060390671/original/v0KY7TzROj4I2rS8jMFuibS7UK835pXlhg.png?1765448732)

![Event에 따라 달라지는 입력란 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060391023/original/JyVoG0XaAdDiBdCMIE_qGJO4vO3YuSdYIA.png?1765448867)

### 5. URL 입력하기

연동할 서비스의 엔드포인트를 붙여 넣으세요. 필요하면 경로에 변수를 넣어서 요청마다 알맞은 레코드를 가리키게 할 수 있어요. 예: https://api.example.com/leads/{{contact.id}}

![URL을 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060391209/original/koqeFYqfE2cjsgJ-GggSa9u2J4CN3zj_0Q.png?1765448994)

### 6. Authorization 선택하기

서비스가 요구하는 인증 방식을 고르세요. **Bearer Token**, **API Key**, **Basic Auth**, **OAuth2**, 또는 **None**(커스텀 헤더 사용) 중에서 선택해요. 401/403 오류를 막으려면 인증 정보를 안내된 그대로 입력하세요.

![인증 방식을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060391256/original/wffqrtLfdnPbdcrxh4jIKduKTetW4nFjUw.png?1765449019)

### 7. 헤더와 쿼리 파라미터 추가하기 (필요한 경우)

**Content-Type**, **Authorization**, 그 밖의 커스텀 키 같은 필수 헤더를 입력하세요. GET 필터나 URL 기반 옵션이 필요하면 쿼리 파라미터도 추가하세요. email={{contact.email}}처럼 동적 값을 쓰면 요청마다 내용이 맞춰져요.

![헤더와 쿼리 파라미터를 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060391899/original/5E42VGNcB9xSmInW79qF_9f2KM2dceWCeA.png?1765449370)

![헤더와 쿼리 파라미터 입력 예시 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060391923/original/AnPUTd3sfl7O0czLwRfiEQ0fY1iL5yIASg.png?1765449387)

### 8. Save response from this Webhook (선택)

계정에서 응답 저장 기능을 쓸 수 있다면 **Save response from this Webhook**(이 웹훅의 응답 저장)을 켜세요. 문제를 찾고 기록을 남기는 데 도움이 돼요.

![응답 저장 옵션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060391950/original/JffuOpTCujq23Ityc_ZX5-up2SSkRDsMMw.png?1765449407)

### 9. 저장하고 테스트하기

**Save Action**(액션 저장)을 클릭하세요. 그다음 샘플 레코드나 Webhook.site, Postman 같은 테스트용 엔드포인트로 테스트를 실행하세요. 실제로 쓰기 전에 **Execution Logs**와 서비스 쪽 로그를 함께 보며 상태 코드와 페이로드 형태를 확인하세요.

## 자주 묻는 질문

### Custom Webhook을 쓰려면 특정 워크플로우 트리거가 필요한가요?

아니요. 어떤 워크플로우 트리거든 쓸 수 있어요. 매핑한 변수(예: 연락처 필드)가 실행 시점에 존재하는지만 확인하세요.

### 연동할 서비스가 고정 IP 허용 목록(allowlist)을 요구해요. 하이퍼클래스에서 고정 IP를 제공하나요?

아니요, 제공하지 않아요. 대신 헤더 기반 인증(Bearer/API Key/Basic/OAuth2)을 쓰고, 필요한 인증 정보를 서비스 쪽에 전달하세요.

### API 키는 헤더와 쿼리 문자열 중 어디에 넣어야 하나요?

헤더(예: X-API-Key)를 권장해요. 서비스가 꼭 필요하다고 안내할 때만 쿼리 문자열에 키를 넣으세요.

### 401/403 오류가 나는 이유가 뭔가요?

인증 정보가 잘못됐거나 없는 경우, 인증 방식이 다른 경우, 토큰이 만료된 경우, 권한 범위(scope)나 권한이 부족한 경우일 수 있어요. Authorization과 필수 헤더를 다시 확인하세요.

### 서비스에서 JSON이 잘못됐다고 해요(400/422). 무엇을 확인해야 하나요?

**Content-Type**, 필수 필드, 데이터 유형, 중첩 구조를 확인하세요. 서비스의 스키마와 비교하거나 Postman으로 테스트해 보세요.

### 페이로드에 배열이나 중첩 객체를 넣을 수 있나요?

네. 중첩 JSON이나 배열을 만들고 필요한 곳에 동적 값을 매핑하면 돼요(위 예시 참고).

### 응답을 저장해서 확인할 수 있나요?

계정에서 쓸 수 있다면 **Save response from this Webhook**을 켜고, 워크플로우의 **Execution Logs**와 서비스 쪽 로그를 확인하세요.

### Custom Webhook과 Webhook (Outbound) 중 무엇을 써야 하나요?

고급 인증과 유연한 요청 구성이 필요하면 **Custom Webhook**을 쓰세요. 미리 정해진 단순한 패턴이면 **Webhook (Outbound)**를 쓰세요.
