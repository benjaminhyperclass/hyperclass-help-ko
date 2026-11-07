---
원문: /support/solutions/articles/155000006323-documents-contracts-public-apis
번역일: 2026-11-06
카테고리: 14-문서-계약
---

# 문서 & 계약 공개 API

문서 & 계약 공개 API를 쓰면 하이퍼클래스 안의 문서 작업을 자동화할 수 있어요. 문서와 템플릿의 목록을 조회하고 문서를 보내는 일을 API로 처리하면, 수작업을 줄이고 외부 시스템과도 쉽게 연동할 수 있어요.

## 문서 & 계약 공개 API란?

문서 & 계약 공개 API는 하이퍼클래스의 핵심 문서·계약 기능을 개발자가 코드로 사용할 수 있게 해 주는 API예요. 이 API로 다음 작업을 할 수 있어요.

- 문서 불러오기
- 연락처에게 문서 보내기
- 템플릿 불러오기
- 문서를 만들고 바로 보내기

이 API를 연동하면 워크플로우를 자동화하고, 문서 관리 방식을 일관되게 유지하고, 여러 비즈니스 앱으로 문서 관리를 넓혀 갈 수 있어요.

## 주요 장점

- 문서 목록: 전체 문서 목록을 가져와 문서 현황을 정확하게 파악해요.
- 자동 전송: 사람이 직접 보내지 않아도 연락처에게 문서를 보내요.
- 템플릿 조회: 사용할 수 있는 템플릿을 빠르게 불러와 문서를 더 빨리 만들어요.
- 생성과 전송을 한 번에: API 호출 한 번으로 템플릿에서 문서를 만들고 보내요.
- 손쉬운 연동: 문서 워크플로우를 다른 앱·시스템과 연결해 번거로움을 줄여요.

## 문서 목록 조회(List Documents)

`List Documents` 엔드포인트로 특정 서브 계정(로케이션)의 문서를 모두 가져올 수 있어요. CRM, 대시보드, 자체 앱 사이에서 문서 기록을 맞출 때 유용해요. 자세한 내용은 [List Documents](https://highlevel.stoplight.io/docs/integrations/60ec57df068f6-list-documents)를 참고하세요.

- 내 계정에 연결된 문서 전체 목록을 가져와요.
- 문서 기록을 실시간으로 최신 상태로 유지해요.
- 문서 메타데이터를 활용하는 연동을 만들 수 있어요.

## 문서 전송(Send Document)

`Send Document` 엔드포인트를 쓰면 이미 있는 문서를 한 명 또는 여러 명의 연락처에게 자동으로 보낼 수 있어요. 직접 보내는 시간을 줄이고, 항상 같은 방식으로 문서를 보낼 수 있어요. 자세한 내용은 [Send Document](https://highlevel.stoplight.io/docs/integrations/f7326427fcf70-send-document)를 참고하세요.

- 보낼 문서를 이미 있는 문서 중에서 선택해요.
- 받는 연락처를 한 명 이상 선택해요.
- 문서 전달을 자동화해 응답 시간을 줄여요.

## 템플릿 목록 조회(List Templates)

`List Templates` 엔드포인트로 서브 계정(로케이션)에서 사용할 수 있는 템플릿을 모두 가져올 수 있어요. 자동화 워크플로우나 연동을 만들 때 템플릿을 그때그때 불러올 수 있어요. 자세한 내용은 [List Templates](https://highlevel.stoplight.io/docs/integrations/da393f098cd9e-list-templates)를 참고하세요.

- 템플릿 목록을 한곳에서 가져와요.
- 용도에 맞는 템플릿을 찾아요.
- 최신 템플릿 현황을 반영하는 연동을 만들 수 있어요.

## 템플릿 전송(Send Template)

`Send Template` 엔드포인트는 템플릿으로 문서를 만드는 일과 보내는 일을 API 호출 한 번으로 처리해요. 작업이 한 단계로 줄어서 대규모 자동화를 만들기 쉬워요. 자세한 내용은 [Send Template](https://highlevel.stoplight.io/docs/integrations/c2be6fd51f42c-send-template)를 참고하세요.

- 템플릿에서 새 문서를 만들어요.
- 지정한 연락처에게 바로 보내요.
- 단계를 줄여 과정을 단순하게 만들어요.

## 설정 방법

API 접근을 제대로 설정해 두면 연동이 안전하고 안정적으로 돌아가요. 아래 순서에 따라 API를 쓸 수 있도록 하이퍼클래스 계정을 설정하세요.

### 1단계: API 자격 증명 받기

1. 하이퍼클래스에서 **에이전시 설정 > 비공개 연동**으로 이동해요.
2. **비공개 연동** 토큰을 만들어요. 보안과 접근 제어 면에서 API 키보다 비공개 연동 토큰을 권장해요.

{% hint style="warning" %}
**중요:** 스코프(scope)는 외부 앱이 내 계정 데이터에 접근하거나 작업을 실행할 수 있는 권한 범위를 정해요. 계정 보안을 위해 꼭 필요한 스코프만 부여하는 것을 권장해요.
{% endhint %}

![비공개 연동 토큰을 만드는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053781481/original/4c1yU4D8Qr94ycqumFEQMR0ig3l8TO6SgQ.gif?1757939075)

### 2단계: API 문서 확인하기

1. [공개 API 문서 포털](https://highlevel.stoplight.io/docs/integrations/7d92ac20e1355-documents-and-contracts-api)에 들어가요.
2. 내 워크플로우에 필요한 엔드포인트를 골라요. 선택할 수 있는 엔드포인트는 `List Documents`, `Send Document`, `List Templates`, `Send Template`이에요.

![공개 API 문서 포털 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053781579/original/PW18r5Ci6TL3FisjacnDXoBp7fCWwHi-UA.png?1757939149)

### 3단계: API 호출 테스트하기

1. Postman 같은 도구로 테스트 요청을 보내요.
2. 인증 헤더를 `Authorization: Bearer <your-token>` 형식으로 설정해요.
3. 필요한 파라미터(문서 ID, 템플릿 ID, 연락처 ID)를 입력해요.

### 4단계: 응답 확인하기

각 호출의 JSON 응답을 살펴봐요. 문서나 템플릿이 제대로 반환되고 전송이 성공했는지 확인하세요.

### 5단계: 내 워크플로우에 연동하기

CRM, 자동화 스크립트, 백엔드 프로세스에 API 호출을 넣어요. 원한다면 문서 이벤트를 기준으로 실행되는 하이퍼클래스 워크플로우와 함께 쓸 수도 있어요. 예를 들면 **Document Sent**(문서 전송됨)나 **Document Signed**(문서 서명됨) 트리거를 쓸 수 있어요.

### 6단계: 안전하게 운영하기

API 토큰을 안전하게 보관하고, 주기적으로 교체하세요. API 호출 제한(rate limit)에 걸리지 않도록 사용량도 모니터링하세요.

## 자주 묻는 질문

### 문서 & 계약 공개 API에는 어떤 엔드포인트가 있나요?
문서 목록 조회, 문서 전송, 템플릿 목록 조회, 템플릿 전송 엔드포인트를 쓸 수 있어요.

### 공식 API 문서는 어디에서 볼 수 있나요?
[공개 API 문서 포털](https://highlevel.stoplight.io/docs/integrations/7d92ac20e1355-documents-and-contracts-api)에서 전체 문서를 볼 수 있어요.

### 이 API를 쓰려면 별도 권한이 필요한가요?
네, 유효한 API 자격 증명이 있어야 접근할 수 있어요. 비공개 연동 토큰을 쓰는 것을 권장해요.

### API를 안전하게 테스트하려면 어떻게 하나요?
실제 운영에 적용하기 전에 Postman 같은 API 클라이언트로 샘플 데이터를 넣어 테스트해 보세요.

### 문서를 쓰는 것과 템플릿을 쓰는 것은 어떻게 다른가요?
문서는 내 계정에 이미 있는 파일이에요. 템플릿은 미리 정해 둔 구조라서, 이걸로 새 문서를 만들어 보낼 수 있어요.
