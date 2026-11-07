---
원문: /support/solutions/articles/155000005897-webhook-new-saas-plan-created
번역일: 2026-11-06
카테고리: 16-SaaS-설정
---

# 웹훅 — 새 SaaS 플랜 생성(New SaaS Plan Created)

하이퍼클래스 계정에서 새 SaaS 플랜이 만들어질 때마다 실시간으로 알림을 받는 웹훅이에요. 플랜의 기능, 가격 구성, 애드온 정보가 자동으로 전달되므로 API를 계속 조회하지 않아도 결제 처리, 분석, 맞춤 연동을 간단하게 구성할 수 있어요.

## 새 SaaS 플랜 생성 웹훅이란?

새 SaaS 플랜 생성(New SaaS Plan Created)은 하이퍼클래스 계정에 새 SaaS 플랜이 추가되는 즉시 실행되는 자동 이벤트 트리거예요. 전달되는 페이로드는 GET /plans 엔드포인트의 응답과 같아요. 플랜 구성과 메타데이터, `saasProducts` 배열의 포함 기능, `prices` 배열의 가격 옵션, `addOns` 배열의 선택 애드온이 담겨 있어요. 결제 시스템, 분석 도구, 외부 연동을 항상 최신 상태로 유지할 때 쓰기 좋아요. 자세한 기술 정보는 아래 [개발자 리소스](#개발자-리소스)를 참고하세요.

플랫폼에서 새 SaaS 플랜이 추가되면 이 웹훅이 자동으로 실행돼요. GET /plans 엔드포인트와 같은 구조로 다음 정보를 모두 받을 수 있어요.

- 플랜 구성과 메타데이터`saasProducts` 배열에 담긴 포함 기능`prices` 배열에 담긴 가격 정보(예: 월간, 연간 옵션)`addOns` 배열에 담긴 선택 애드온

엔드포인트: <https://services.leadconnectorhq.com/saas/agency-plans/:companyId>

![새 SaaS 플랜 생성 웹훅 엔드포인트 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058217153/original/Ugxg5AGQ3fx4uhV4-UnoQW-58OgHXg3M_A.png?1762962464)

## 이 웹훅을 쓰면 좋은 점

플랜이 만들어지는 즉시 플랜 정보를 자동으로 받아서 운영 작업이 간단해져요.

- 결제 정보 자동 동기화: 새 플랜이 생기면 결제 플랫폼에도 바로 반영돼요.
- 실시간 분석: 데이터를 직접 가져오지 않아도 플랜 생성 추이를 바로 확인할 수 있어요.
- 매끄러운 연동: 최신 플랜 구성을 맞춤 워크플로우와 외부 도구에 바로 전달해요.
- API 호출 감소: GET /plans 엔드포인트를 자주 조회할 필요가 없어서 성능이 좋아져요.

## 페이로드 예시

웹훅 구조를 알아 두면 받은 데이터를 헷갈리지 않고 처리할 수 있어요.

```
POST /webhook/saas/agency-plans/:companyId {  "id": "plan_12345",  "name": "Professional Suite",  "saasProducts": [    { "id": "prod_abc", "name": "CRM", "enabled": true },    { "id": "prod_def", "name": "Marketing Automation", "enabled": true }  ],  "prices": [    { "interval": "monthly", "amount": 49.99 },    { "interval": "yearly", "amount": 499.99 }  ],  "addOns": [    { "id": "addon_001", "name": "Extra Users", "price": 10 }  ],  "metadata": { "createdBy": "user_789", "createdAt": "2025-08-07T12:34:56Z" } }
```

위 예시는 플랜 ID, 기능 활성화 여부, 가격 구성, 선택 애드온을 보여 주는 샘플 페이로드예요.

## 보안 요구 사항

웹훅 요청을 하나씩 검증해서 엔드포인트를 보호하세요.

하이퍼클래스는 웹훅 페이로드에 HMAC SHA256 서명을 붙여서 `X-HighLevel-Signature` 헤더로 보내요. 이 서명을 시크릿 키로 검증하면 알림이 진짜인지 확인할 수 있고, 중간에 위조된 요청도 막을 수 있어요.

링크: [웹훅 보안 모범 사례](../05-기회-파이프라인/기회-관리/opportunities-faqs.md)

## 오류 처리와 버전 관리

실패한 경우와 앞으로의 변경 사항까지 고려해서 안정적으로 처리하세요.

- 오류 코드: 성공하면 HTTP 2xx로 응답하세요. 2xx가 아닌 응답을 받으면 하이퍼클래스가 지수 백오프 방식으로 최대 3번 다시 보내요.
- 속도 제한: 웹훅 이벤트는 회사당 분당 100건으로 제한돼요.
- 버전 관리: 페이로드는 v1 버전을 따라요. 이후 버전이 나오면 엔드포인트 경로의 버전이 올라가요(예: /v2/agency-plans). 새 형식에 맞추려면 `schemaVersion` 필드를 항상 확인하세요.
## 개발자 리소스

연동을 확장할 때 참고할 가이드와 API 문서예요.

- [SaaS 구성기 공개 API 엔드포인트](public-api-endpoints-for-saas-configurator.md)
- SaaS 플랜 생성, 판매, 고객 온보딩 가이드
- [워크플로우 액션 – 웹훅](../07-워크플로우/Webhooks-Workflow-Actions/workflow-action-webhook-outbound.md)
- [Custom Webhook – 프리미엄 액션](../07-워크플로우/빌더/guide-to-custom-webhook-workflow-action.md)

## 사용 사례

- 최신 플랜 목록을 반영해야 하는 결제 연동
- SaaS 상품 구성이 시간에 따라 어떻게 바뀌는지 추적하는 맞춤 분석 파이프라인
- 플랜 변경 사항을 바로 알아야 하는 자동화나 외부 서비스 동기화

## 자주 묻는 질문

### 지난 플랜 생성 이벤트는 어떻게 가져오나요?
GET /plans 엔드포인트로 과거 플랜 목록을 조회하세요. 웹훅은 새 이벤트만 전달해요.

### 엔드포인트가 HTTP 500을 반환하면 어떻게 되나요?
하이퍼클래스가 지수 백오프 방식으로 최대 3번 다시 보내요. 같은 요청이 여러 번 와도 문제없이 처리되도록 엔드포인트를 만들어 주세요(멱등성).

### 특정 플랜 유형만 골라서 웹훅을 받을 수 있나요?
아니요. 이 웹훅은 모든 플랜 생성에 대해 실행돼요. 받는 쪽에서 메타데이터나 플랜 속성을 기준으로 필터링 로직을 직접 구현하세요.

### 플랜을 수정해도 알림을 받나요?
아니요. 플랜 수정 알림은 별도의 **Webhook: SaaS Plan Updated**(SaaS 플랜 수정 웹훅) 이벤트를 구독하세요.

### 스키마가 바뀌면 어떻게 처리하나요?
페이로드마다 `schemaVersion` 필드를 확인하고, 새 버전에 맞게 파싱 로직을 수정하세요.

### 웹훅이 제대로 동작하는지 어떻게 확인하나요?
설정을 마친 뒤 새 SaaS 플랜을 만들어 보세요. 웹훅이 실행되고 예상한 데이터 페이로드가 오는지 확인할 수 있어요.
