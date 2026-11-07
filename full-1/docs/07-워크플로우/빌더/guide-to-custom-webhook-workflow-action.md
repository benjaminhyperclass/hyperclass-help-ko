---
원문: https://help.gohighlevel.com/support/solutions/articles/48001238167-guide-to-custom-webhook-workflow-action
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Custom Webhook(커스텀 웹훅) 사용 가이드

**Custom Webhook**(커스텀 웹훅) 액션을 쓰면 CRM과 외부 서비스가 실시간으로 데이터를 주고받을 수 있어요. HTTP 메서드, 인증 방식, 헤더, 쿼리 파라미터를 원하는 대로 지정해 요청을 보낼 수 있어요. 다만 상대 API의 응답과 서버 한도에 따라 워크플로우 실행 결과가 달라질 수 있으니 함께 확인하세요.

```
모든 요금제($97, $970, $297, $2970, $497, $4970)의 에이전시가 하이퍼클래스 프리미엄 트리거 및 액션을 쓸 수 있어요.

- 에이전시 설정에서 프리미엄 액션 및 트리거를 켜면, 기존 서브 계정과 새 서브 계정 모두 100회 무료 실행이 제공돼요.

- 기존 서브 계정에서 실행 비용이 쌓이지 않게 하려면, 에이전시 보기에서 서브 계정마다 재청구(rebilling)를 직접 켜야 해요.

- **SaaS 구성기**에서 프리미엄 액션을 켜 두면, 새로 만들어지는 서브 계정은 하이퍼클래스 프리미엄 액션 및 트리거에 자동으로 등록돼요. 에이전시가 따로 할 일은 없어요.
```

## Custom Webhook 액션이란?

**Custom Webhook**(커스텀 웹훅)은 CRM과 외부 서비스가 실시간으로 통신하게 해 주는 하이퍼클래스 프리미엄 액션이에요. 지정한 URL로 원하는 데이터를 담은 요청을 보낼 수 있고, HTTP 메서드와 인증 방식도 고를 수 있어요.

헤더와 쿼리 파라미터를 추가하고 커스텀 값을 매핑해서 필요한 형태로 요청을 구성할 수도 있어요. 입력할 때 자동완성 제안이 나타나므로 데이터를 더 정확하게 주고받을 수 있어요. 다만 상대 API가 성공 응답을 주는지, 서버 한도를 넘지 않는지 꼭 살펴보세요. 그렇지 않으면 오류가 나거나 워크플로우 실행이 멈출 수 있어요.

## 이 기능은 이런 분께 유용해요

CRM을 외부 서비스와 연결해 데이터를 주고받고, 자동화를 만들고, 기능을 넓히려는 기업과 개인에게 도움이 돼요. 특히 마케터, 개발자, IT 담당자가 여러 플랫폼에 걸친 워크플로우를 간소화하고, 데이터 일관성을 높이고, 업무를 효율적으로 관리하고 싶을 때 유용해요.

## 주요 장점

- 정확한 연동: CRM과 외부 서비스가 직접 통신하므로, 실수하기 쉬운 수동 입력을 대신할 수 있어요. 자동완성이 데이터 매핑을 제안해 줘요.
- 유연성: 다양한 HTTP 메서드, 인증 방식, 헤더, 쿼리 파라미터를 지원해서 필요에 맞는 요청을 만들 수 있어요.
- 실시간 업데이트: 알림과 업데이트를 실시간으로 전달해서 대응과 의사결정이 빨라져요.
- 확장성: 여러 업종에 맞게 쓸 수 있고, 사업 규모가 커져도 설정을 바꿀 필요가 없어요.

## Custom Webhook 설정하기

### 1단계: URL 입력

코딩이나 서버 운영 없이도 원하는 URL로 데이터 요청을 보낼 수 있어요.

![URL 입력란](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294091111/original/EDBmiD3CByaY9AzWrugDV5p_sgu4UjDWhg.png?1682327841)

### 2단계: 메서드 선택

POST, GET, DELETE, PUT 등 필요한 HTTP 메서드를 고르세요.

![HTTP 메서드 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294091211/original/fn4VdG-17mzKyBYaCKVsdkdCo_VMZC7tmg.gif?1682327875)

### 3단계: 인증 방식 선택

웹훅에 접근할 때 쓸 인증 방식을 고르세요. 여러 인증 방식을 지원해요.

![인증 방식 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294091321/original/KDoCu7K61OSjQcvg9r4zWGOgjFAD1idHLg.gif?1682327914)

### 4단계: 헤더와 쿼리 파라미터

요청 본문 외에도 웹훅으로 요청을 보낼 때 **Headers**(헤더)와 **Query Parameters**(쿼리 파라미터)를 넣을 수 있어요.

헤더에는 인증 정보, 콘텐츠 유형, 캐시 제어처럼 요청에 대한 추가 정보를 담아요.

쿼리 파라미터는 웹훅 엔드포인트에 값을 넘길 때 써요. 이 값으로 받아 오는 응답 데이터를 걸러 내거나 바꿀 수 있어요.

![헤더와 쿼리 파라미터 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294091453/original/NTQRsd_lJ9jCRHBNB3U3Q5s4jhVcucDt6A.gif?1682327951)

### 5단계: 전송할 데이터 구성

Custom Webhook 프리미엄 기능에서는 커스텀 값을 원하는 구조로 매핑할 수 있어요. 입력란에 글자를 입력하면 인바운드 웹훅 변수를 포함한 모든 커스텀 값이 자동완성으로 제안돼요.

입력한 내용과 맞는 값을 제안해 주므로 매핑이 간단해지고 시간도 절약돼요. 데이터 매핑의 정확성과 일관성을 지키는 데도 도움이 돼요.

![전송할 데이터 구성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294091557/original/Sw2g0QozPRAO007VglNJeG3jDYJRHUwiaw.gif?1682327991)

## 문제 해결

Custom Webhook 액션이 성공하려면 호출하는 API가 성공 응답을 보내야 해요. API가 오류를 돌려보내면 연락처의 워크플로우 실행에도 반영돼요. 액션이 **Failed**(실패) 처리된 뒤 건너뛰어지거나, 지수 백오프(재시도 간격을 점점 늘리는 방식)로 재시도돼요.

받는 서버가 보내려는 실행 횟수를 감당할 수 있는지 확인하세요. 감당하지 못하면 한도에 걸려 오류가 날 수 있어요. 연락처가 이 단계에 도달하는 즉시 Custom Webhook 액션이 실행돼요. 그러니 연락처를 워크플로우에 넣을 때는 받는 서버의 한도를 고려하세요.
