---

번역일: 2026-04-08
카테고리: 07-워크플로우 > Webhooks Workflow Actions
---

# 워크플로우 액션 - 커스텀 웹훅

Hyperclass의 **커스텀 웹훅(Custom Webhook)** 워크플로우 액션을 사용하면 GET, POST, PUT, DELETE 요청을 통해 외부 서비스에 실시간 데이터를 전송할 수 있습니다. 인증, 헤더, 쿼리 파라미터, JSON/폼 페이로드를 설정하여 CRM, 앱, 커스텀 API를 코드 없이 연결하세요. 이 가이드에서는 설정 방법, 모범 사례, 실제 예시를 통해 안정적인 연동을 빠르게 구축하는 방법을 설명합니다.

---

**목차**

- [커스텀 웹훅이란?](#커스텀-웹훅이란)
- [커스텀 웹훅의 주요 장점](#커스텀-웹훅의-주요-장점)
- [인증 옵션](#인증-옵션)
- [HTTP 메서드와 요청 구성요소](#http-메서드와-요청-구성요소)
- [이벤트 vs 메서드 (UI 동작)](#이벤트-vs-메서드-ui-동작)
- [헤더와 쿼리 파라미터](#헤더와-쿼리-파라미터)
- [페이로드와 필드 매핑](#페이로드와-필드-매핑)
- [테스트와 문제 해결](#테스트와-문제-해결)
- [커스텀 웹훅 설정 방법](#커스텀-웹훅-설정-방법)
- [자주 묻는 질문](#자주-묻는-질문)

---

# **커스텀 웹훅이란?**

커스텀 웹훅은 선택한 URL로 HTTP 요청을 보내는 아웃바운드 워크플로우 액션입니다. 워크플로우 실행이 이 단계에 도달하면, Hyperclass가 헤더, 파라미터, 페이로드(동적 값 매핑 포함)를 조합하여 외부 시스템에 요청을 전송합니다.

---

## **커스텀 웹훅의 주요 장점**

커스텀 웹훅이 어떤 상황에서 유용한지 이해하면 올바른 자동화 도구를 선택하고 제공업체에 맞는 요청을 구조화하는 데 도움이 됩니다.

- **유연한 메서드:** GET, POST, PUT, DELETE를 사용하여 모든 API 작업에 대응합니다.

- **다양한 인증 옵션:** **Bearer 토큰**, **API 키**, **Basic 인증**, **OAuth2**, 또는 **인증 없음**과 커스텀 헤더를 지원합니다.

- **정밀한 데이터 매핑:** **동적 값**(예: {{contact.email}})을 헤더, 파라미터, 본문에 입력하여 각 호출에 정확한 레코드 정보를 포함시킵니다.

- **재사용 가능한 패턴:** 일관된 헤더, 콘텐츠 타입, 페이로드 구조로 한 번 구축하여 여러 워크플로우에서 재사용합니다.

- **빠른 문제 해결:** 선택적 응답 캡처와 워크플로우 실행 로그로 테스트와 이슈 해결을 간소화합니다.

---

## **인증 옵션**

외부 API는 대부분 인증 정보가 필요합니다. 제공업체에서 지원하는 옵션을 선택하고, 보안을 위해 비밀 정보는 URL이 아닌 헤더에 넣으세요.

- **Bearer 토큰**

Authorization: Bearer <token> 헤더를 사용합니다.

*헤더 예시:*
```
Authorization: Bearer {{location.api_token}}
```

- **API 키**

대부분의 서비스는 커스텀 헤더(예: X-API-Key: <key>)를 요구합니다. 제공업체에서 명시적으로 요구하는 경우에만 쿼리 문자열 키를 사용하세요.

*헤더 예시:*
```
X-API-Key: {{location.external_api_key}}
```

*쿼리 예시 (필요한 경우에만):* ?api_key={{location.external_api_key}}

- **Basic 인증**

액션의 Authorization 필드에 **사용자명**과 **비밀번호**를 입력합니다. Hyperclass가 적절한 Authorization: Basic ... 헤더를 전송합니다.

- **OAuth2**

제공업체가 OAuth2를 사용하는 경우, 먼저 **전역 워크플로우 설정 → OAuth2 / 토큰 관리**에서 토큰을 구성한 후 액션에서 선택합니다. OAuth2는 토큰을 자동으로 갱신하거나 로테이션하는 제공업체에게 권장됩니다.

- **인증 없음 + 커스텀 헤더**

제공업체에서 특별한 헤더(예: X-Signature: <secret>)를 요구하는 경우, **인증 없음**을 선택한 후 **헤더**에 해당 헤더를 추가합니다.

---

## **HTTP 메서드와 요청 구성요소**

올바른 메서드를 매칭하고 데이터를 요청의 적절한 부분에 배치하면 400/401/422 오류를 방지하고 연동을 가속화할 수 있습니다.

- **URL과 경로 파라미터**: 경로에 변수를 포함할 수 있습니다. 예: https://api.example.com/contacts/{{contact.id}}

- **GET**: 데이터 조회. 본문은 일반적으로 무시되므로 쿼리 파라미터를 사용합니다: https://api.example.com/leads?email={{contact.email}}&status=active

- **POST**: 리소스 생성. JSON 본문이나 폼 데이터를 전송합니다(Content-Type 참조).

- **PUT**: 리소스 업데이트. 일반적으로 경로에 ID가 필요하고 JSON 본문을 포함합니다.

- **DELETE**: 리소스 삭제. 종종 경로에 ID를 포함합니다.

- **Content-Type**: 일반적인 값: application/json (JSON 본문) 또는 application/x-www-form-urlencoded (폼 필드). 제공업체 문서에 맞춰 설정하세요.

---

## **이벤트 vs 메서드 (UI 동작)**

커스텀 웹훅 액션은 두 가지 구성 모드를 제공합니다. **CUSTOM**은 완전한 제어(메서드, 콘텐츠 타입, 원시 본문)를 노출합니다. **GET/POST**는 단순화된 경험을 제공합니다. 제공업체의 요구사항에 맞는 모드를 선택하세요.

- **이벤트 = CUSTOM (고급):**

**메서드**(GET, POST, PUT, DELETE), **Content-Type**, JSON이나 기타 형식을 위한 **원시 본문** 편집기를 표시합니다.

JSON 페이로드, POST가 아닌 메서드, 또는 명시적 헤더/콘텐츠 타입이 필요한 경우에 적합합니다.

- **이벤트 = POST (단순):**

폼 스타일 페이로드를 위한 **본문(키와 값)** 쌍을 표시하며, 원시 본문 편집기는 없습니다.

단순한 키/값 제출에 사용합니다. 제공업체에서 JSON을 요구하는 경우 **CUSTOM**으로 전환하세요.

- **이벤트 = GET (단순):**

요청 본문이 없습니다. 필터를 위해 **쿼리 파라미터**를 사용합니다. **이 웹훅의 응답 저장**을 사용할 수 있습니다.

- **이벤트 선택기:**

**이벤트** 드롭다운이 표시할 필드를 제어합니다. 완전한 제어를 위해 **CUSTOM**을 선택하세요.

- **변수 선택기:**

필드(URL, 헤더, 쿼리 파라미터, 본문) 옆의 작은 *태그* 아이콘은 {{contact.id}}와 같은 값을 삽입하는 동적 값 선택기를 엽니다.

---

## **헤더와 쿼리 파라미터**

API는 일반적으로 인증, 콘텐츠 타입, 버전 관리, 필터링을 위해 특정 헤더와 쿼리 파라미터를 요구합니다. 필요한 경우 동적 값을 매핑하세요.

- **헤더 예시:**
```
Authorization: Bearer {{location.api_token}}
Content-Type: application/json
X-API-Key: {{location.external_api_key}}
X-App-Version: 2024-11-01
```

- **쿼리 파라미터 예시:**
```
lead_id={{contact.id}}
email={{contact.email}}
source=workflow
```

제공업체에서 요구하지 않는 한 쿼리 문자열에 비밀 정보를 넣지 마세요.

---

## **페이로드와 필드 매핑**

동적 값을 사용하면 각 요청을 연락처, 기회 또는 기타 워크플로우 데이터로 개인화하여 외부 API에 맞게 구성할 수 있습니다.

- **플랫 JSON 페이로드 (POST / 생성):**
```json
{
  "id": "{{contact.id}}",
  "first_name": "{{contact.first_name}}",
  "last_name": "{{contact.last_name}}",
  "email": "{{contact.email}}",
  "phone": "{{contact.phone}}"
}
```

- **중첩 JSON:**
```json
{
  "contact": {
    "id": "{{contact.id}}",
    "name": "{{contact.name}}",
    "phones": ["{{contact.phone}}"],
    "tags": ["{{contact.tag}}", "new-lead"]
  }
}
```

- **폼 인코딩:** Content-Type을 application/x-www-form-urlencoded로 설정하고 JSON 대신 키/값 쌍을 제공합니다.

---

## **테스트와 문제 해결**

라이브 환경으로 가기 전에 요청을 검증하면 자동화 오류를 방지할 수 있습니다. 제공업체 측 도구와 워크플로우 로그를 모두 사용하세요.

- 샘플 레코드로 액션을 트리거하기 위해 **테스트 워크플로우**(초안 모드)를 사용하세요.

- **Webhook.site**나 **Postman** 컬렉션 같은 도구로 테스트 호출을 보내서 헤더, 파라미터, 페이로드 구조를 확인하세요.

- 기본 사항을 먼저 확인하세요: 올바른 URL, 메서드, **Content-Type**, 필수 헤더, 유효한 인증 정보.

- **실행 로그** / 실행 기록을 확인하여 액션이 실행됐는지 확인하고 상태 코드를 검토하세요.

- **Content-Type**이나 **원시 본문** 편집기가 보이지 않으면 **이벤트** 선택을 확인하세요. JSON 페이로드나 **PUT/DELETE** 요청의 경우 **CUSTOM**을 선택하세요.

- **일반적인 HTTP 응답:**

  **400/422** 잘못된 페이로드 → 제공업체의 필수 필드와 타입에 맞추세요.

  **401/403** 인증 실패/권한 없음 → 토큰, 키, 스코프, 계정 권한을 수정하세요.

  **404** 잘못된 경로/ID → 엔드포인트와 경로 변수를 확인하세요.

  **409** 충돌/멱등성 → 고유 ID를 보장하거나 제공업체의 업서트 규칙을 따르세요.

  **429** 속도 제한 → 속도를 늦추거나 제공업체 제한에 따라 지연/재시도를 추가하세요.

  **5xx** 제공업체 오류 → 나중에 재시도하고 제공업체 지원팀에 문의하세요.

---

## 커스텀 웹훅 설정 방법

명확하고 반복 가능한 설정은 오류를 줄이고 요청이 제공업체의 기대에 부합하도록 보장합니다. 아래 단계를 사용하여 URL, 이벤트/메서드, 인증, 헤더/파라미터, 페이로드를 올바르게 구성한 후 테스트하세요.

### **워크플로우 열기**

**자동화(Automation) → 워크플로우(Workflows)**로 이동하여 데이터를 보낼 워크플로우를 열어 실행이 올바른 레코드 컨텍스트로 이 액션에 도달하도록 하세요.

![워크플로우 자동화 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060390113/original/9QPiR4rF7uyh_YfNxki6M-a8FESN4-dekw.png?1765448444)

### **액션 추가**

**+ 액션 추가(Add action) → 데이터 전송(Send Data) → 커스텀 웹훅(Custom Webhook)**을 클릭하여 아웃바운드 HTTP 호출을 만드는 단계를 생성합니다.

![커스텀 웹훅 액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060390153/original/ZfDK-0LbEyoBv-aDfjdBYq1kqyPxyV526Q.png?1765448467)

### 액션 이름 지정

나중에 읽기와 문제 해결을 간소화하기 위해 액션에 명확하고 설명적인 이름을 부여하세요. 예: **외부 CRM에 리드 전송**.

![액션 이름 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060390603/original/m62IhxkcMDBAgaYHRb1wS2nhIMO1Sm2R5A.png?1765448710)

### **이벤트 선택 (해당하는 경우 메서드)**

사용 사례에 맞는 **이벤트**를 선택하세요. **CUSTOM**은 **메서드** 선택기(GET, POST, PUT, DELETE), **Content-Type**, JSON이나 기타 형식을 위한 **원시 본문** 편집기를 노출합니다. **POST**는 원시 본문 편집기 없이 간단한 **본문(키와 값)** 인터페이스를 제공합니다. **GET**은 본문이 없으며 필터를 전달하기 위해 **쿼리 파라미터**를 사용합니다. 필드 옆의 작은 태그 아이콘은 동적 값 선택기(예: {{contact.id}})를 엽니다.

![이벤트 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060390671/original/v0KY7TzROj4I2rS8jMFuibS7UK835pXlhg.png?1765448732)

![커스텀 이벤트 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060391023/original/JyVoG0XaAdDiBdCMIE_qGJO4vO3YuSdYIA.png?1765448867)

### URL 입력

제공업체의 엔드포인트를 붙여넣고 필요한 경우 경로에 변수를 포함하세요. 예: https://api.example.com/leads/{{contact.id}}와 같이 각 요청이 올바른 레코드를 대상으로 하도록 합니다.

![URL 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060391209/original/koqeFYqfE2cjsgJ-GggSa9u2J4CN3zj_0Q.png?1765448994)

### 인증 선택

제공업체에서 요구하는 인증 방법을 선택하세요—**Bearer 토큰**, **API 키**, **Basic 인증**, **OAuth2**, 또는 **없음**(커스텀 헤더 포함)—그리고 401/403 오류를 피하기 위해 정확히 명시된 대로 인증 정보를 제공하세요.

![인증 방법 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060391256/original/wffqrtLfdnPbdcrxh4jIKduKTetW4nFjUw.png?1765449019)

### 헤더와 쿼리 파라미터 추가 (필요한 경우)

**Content-Type**, **Authorization** 및 기타 커스텀 키와 같은 필수 헤더를 제공하고, GET 필터나 URL 기반 옵션을 위한 쿼리 파라미터를 추가하세요. email={{contact.email}}과 같은 동적 값을 사용하면 각 호출이 개인화됩니다.

![헤더 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060391899/original/5E42VGNcB9xSmInW79qF_9f2KM2dceWCeA.png?1765449370)

![쿼리 파라미터 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060391923/original/AnPUTd3sfl7O0czLwRfiEQ0fY1iL5yIASg.png?1765449387)

### **이 웹훅의 응답 저장 (선택 사항)**

계정에서 사용 가능한 경우 응답 캡처를 활성화하여 문제 해결과 기록 보관에 도움을 받으세요.

![응답 저장 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060391950/original/JffuOpTCujq23Ityc_ZX5-up2SSkRDsMMw.png?1765449407)

### **저장 및 테스트**

**액션 저장**을 클릭하고, 샘플 레코드나 Webhook.site 또는 Postman과 같은 샌드박스 엔드포인트로 테스트를 트리거하여 **실행 로그**와 제공업체 로그를 검토하고 라이브로 전환하기 전에 상태 코드와 페이로드 구조를 확인하세요.

---

## **자주 묻는 질문**

**Q: 커스텀 웹훅이 작동하려면 특정 워크플로우 트리거가 필요한가요?**

아니요. 모든 워크플로우 트리거를 사용할 수 있습니다. 매핑된 변수(예: 연락처 필드)가 실행 시 존재하는지 확인하세요.

**Q: 제공업체에서 고정 IP 허용 목록이 필요합니다. Hyperclass에서 제공할 수 있나요?**

아니요. 대신 헤더 기반 인증(Bearer/API 키/Basic/OAuth2)을 사용하고 필요한 인증 정보를 제공업체와 공유하세요.

**Q: API 키 헤더나 쿼리 문자열을 어디에 넣어야 하나요?**

헤더(예: X-API-Key)를 선호하세요. 제공업체에서 명시적으로 요구하는 경우에만 쿼리 문자열 키를 사용하세요.

**Q: 401/403 오류가 발생하는 이유는 무엇인가요?**

잘못되거나 누락된 인증 정보, 잘못된 인증 타입, 만료된 토큰, 또는 불충분한 스코프/권한입니다. Authorization과 필수 헤더를 다시 확인하세요.

**Q: 제공업체에서 내 JSON이 유효하지 않다고 합니다(400/422). 무엇을 확인해야 하나요?**

**Content-Type**, 필수 필드, 데이터 타입, 중첩 구조를 확인하세요. 제공업체의 스키마와 비교하거나 Postman 테스트를 실행해보세요.

**Q: 페이로드에 배열이나 중첩 객체를 포함할 수 있나요?**

네. 중첩 JSON이나 배열을 구성하고 필요한 곳에 동적 값을 매핑하세요(위 예시 참조).

**Q: 응답을 캡처하고 검토할 수 있나요?**

계정에서 사용 가능한 경우 **이 웹훅의 응답 저장**을 활성화하고 워크플로우의 **실행 로그**와 제공업체 로그를 검토하세요.

**Q: 커스텀 웹훅과 웹훅(아웃바운드) 중 어떤 것을 선택해야 하나요?**

고급 인증과 유연한 요청 구성이 필요한 경우 **커스텀 웹훅**을 사용하세요. 더 단순하고 미리 정의된 패턴의 경우 **웹훅(아웃바운드)**을 사용하세요.

---
*원문 최종 수정: Thu, 11 Dec, 2025*
*Hyperclass 사용 가이드 — hyperclass.ai*