---
원문: https://help.gohighlevel.com/support/solutions/articles/155000009502-workflows-api-create-publish-and-monitor-workflows-by-api
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# Workflows API로 워크플로우 만들고 게시하고 모니터링하기

Workflows API를 쓰면 개발자와 에이전시가 코드로 하이퍼클래스 워크플로우를 만들고, 관리하고, 게시하고, 실행 현황을 확인할 수 있어요. 외부 애플리케이션에서 워크플로우를 만들거나, 여러 서브 계정에 자동화를 한꺼번에 배포하거나, 실행 로그와 성능 통계를 살펴볼 때 사용해요. 빌더에서 워크플로우를 하나씩 직접 관리하지 않아도 돼요.

{% hint style="warning" %}
중요: Workflows API는 현재 일부 서브 계정에만 제공되는 비공개 베타예요. 사용하려면 하이퍼클래스 고객지원에 접근 권한을 요청하세요. 접근 권한이 없는 서브 계정에서 요청하면 `WORKFLOW_API_NOT_ENABLED_FOR_LOCATION` 코드와 함께 403 오류가 나와요.
{% endhint %}

## Workflows API란?

Workflows API는 외부 애플리케이션이나 연동에서 하이퍼클래스 워크플로우를 관리할 수 있게 해 주는 API예요.

워크플로우를 만들고, 설정을 조회하고, 워크플로우 단계를 수정하고, 게시 상태를 바꾸고, 워크플로우를 삭제할 수 있어요.

실행 로그와 통계도 가져올 수 있어서, 활동을 추적하고 실패 원인을 조사하고 워크플로우 성과를 측정할 수 있어요.

API로 만든 워크플로우는 **워크플로우 빌더**(Workflow Builder)에도 표시되고, 다른 워크플로우처럼 관리할 수 있어요.

## Workflows API의 장점

- 워크플로우 생성 자동화: 외부 애플리케이션에서 바로 워크플로우를 만들고 배포할 수 있어요.
- 대규모 워크플로우 관리: 표준 워크플로우를 지원되는 여러 서브 계정에 나눠 배포할 수 있어요.
- 게시 전 검증: 워크플로우를 활성화하기 전에 설정 오류를 찾을 수 있어요.
- 충돌하는 업데이트 방지: 버전 확인으로 **워크플로우 빌더**에서 한 변경 내용을 보호해요.
- 실행 모니터링: 실행 기록, 실패 내역, 집계 통계를 가져올 수 있어요.
- API 권한 제어: 연동이 하는 일에 맞춰 범위를 나눠 부여할 수 있어요.

## 시작하기 전에

Workflows API를 쓰려면 사용 자격이 있는 서브 계정과 승인된 액세스 토큰이 필요해요.

1. 서브 계정이 Workflows API 비공개 베타에 접근할 수 있는지 확인하세요.
2. 서브 계정에서 **설정 > 비공개 연동**으로 이동하세요.
3. 비공개 연동을 만들고, **범위**에서 워크플로우 관련 권한을 찾으세요.
4. 연동에 필요한 권한을 켜세요.
5. 액세스 토큰을 생성하고 안전하게 보관하세요.

![비공개 연동에서 워크플로우 범위를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084600886/original/AflDswEMedBKDWVe8LPJYfYs0dxrDzxZDQ.png?1793363901)

사용할 수 있는 권한은 다음과 같아요.

| 권한 | API 범위 | 용도 |
| --- | --- | --- |
| **워크플로우 보기** | `workflows.readonly` | 워크플로우 정보와 사용 가능한 단계 유형 조회 |
| **Edit Workflows**(워크플로우 편집) | `workflows.write` | 워크플로우 생성, 검증, 수정 |
| **Publish Workflows**(워크플로우 게시) | `workflows.publish` | 워크플로우 게시 또는 초안 상태로 되돌리기 |
| **Delete Workflows**(워크플로우 삭제) | `workflows.delete` | 기존 워크플로우 삭제 |
| **View Workflow Logs**(워크플로우 로그 보기) | `workflows.logs` | 실행 로그와 통계 조회 |

API 요청에는 해당 권한이 있는 인증 토큰, `Version: v3` 헤더, 서브 계정의 `locationId`가 필요해요.

{% hint style="info" %}
참고: 하이퍼클래스 API 요청의 API 도메인은 계속 `services.leadconnectorhq.com`이에요. 하이퍼클래스 도움말 센터나 앱 도메인으로 바꾸지 마세요.
{% endhint %}

## 사용할 수 있는 Workflows API 엔드포인트

Workflows API에는 워크플로우를 관리하고 모니터링하는 엔드포인트가 10개 있어요.

| 기능 | 메서드 | 엔드포인트 |
| --- | --- | --- |
| Get Step Types(단계 유형 조회) | GET | `/workflows/step-types` |
| Validate Workflow Definition(워크플로우 정의 검증) | POST | `/workflows/definition/validate` |
| Search Workflows(워크플로우 검색) | POST | `/workflows/search` |
| Create Workflow(워크플로우 생성) | POST | `/workflows/` |
| Get Workflow Definition(워크플로우 정의 조회) | GET | `/workflows/{workflowId}/definition` |
| Update Workflow Definition(워크플로우 정의 수정) | PUT | `/workflows/{workflowId}/definition` |
| Update Workflow Status(워크플로우 상태 변경) | PUT | `/workflows/{workflowId}/status` |
| Delete Workflow(워크플로우 삭제) | DELETE | `/workflows/{workflowId}` |
| Get Workflow Logs(워크플로우 로그 조회) | GET | `/workflows/{workflowId}/logs` |
| Get Workflow Log Statistics(워크플로우 로그 통계 조회) | GET | `/workflows/{workflowId}/logs/aggregate` |

엔드포인트별 파라미터, 요청 스키마, 응답 예시는 하이퍼클래스 **API 문서**를 참고하세요.

## API 요청 테스트하기

API 문서에는 Workflows API를 바로 테스트할 수 있는 요청 패널이 있어요.

1. Workflows API **API 문서**를 여세요.
2. 테스트할 엔드포인트를 선택하세요. 예를 들어 **Get Workflow Definition**(워크플로우 정의 조회)을 선택해요.
3. **Bearer Token**(베어러 토큰) 필드에 액세스 토큰을 입력하세요.
4. 필요한 파라미터를 입력하세요. 해당되는 경우 `workflowId`와 `locationId`도 넣어요.
5. **버전** 필드에서 `v3`를 선택하세요.
6. **Send API Request**(API 요청 보내기)를 클릭하세요.
7. 문서 패널에 나타난 응답을 확인하세요.

{% hint style="warning" %}
중요: API 문서에서 보낸 요청은 선택한 서브 계정에 실제로 실행돼요. 데이터를 수정하거나 삭제하는 작업은 먼저 테스트용 워크플로우로 해 보세요.
{% endhint %}

![API 문서의 요청 테스트 패널](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084600913/original/N6I9ceIHrts-VEm3xRocJa-W6-0AA2Geeg.png?1793363925)

## API로 워크플로우 만들고 게시하기

워크플로우를 API로 만들고 활성화하려면 다음 단계를 따르세요.

1. 사용 가능한 단계 유형을 조회해요. Get Step Types로 지원되는 워크플로우 트리거, 액션과 각각의 필수 속성을 확인해요.
2. 워크플로우 정의를 준비해요. 워크플로우의 이름, 트리거, 액션, 연결, 설정을 구성해요.
3. 정의를 검증해요. 저장하기 전에 Validate Workflow Definition으로 설정을 확인해요.
4. 워크플로우를 만들어요. Create Workflow로 정의를 제출해요. 새 워크플로우는 초안 상태로 만들어져요.
5. 워크플로우를 게시해요. 검증을 통과한 뒤 Update Workflow Status로 워크플로우를 게시해요.

![API로 워크플로우를 만들고 게시하는 흐름](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084600932/original/-qOsStr4vB9-ItIIxAvpZmU6uKGd-iz9xg.png?1793363946)

워크플로우를 게시하려면 다음 상태 값을 보내세요.

```
{
  "status": "published"
}
```

### 검증 결과 이해하기

검증 엔드포인트는 워크플로우 정의에서 발견한 오류와 경고를 알려 줘요.

- **오류**(Errors): 워크플로우를 저장하거나 게시할 수 없게 만드는 문제예요.
- **경고**(Warnings): 확인이 필요한 잠재적인 설정 문제예요. 저장은 되는 경우도 있어요.
- 단계 참조 정보(Step references): 어떤 단계나 설정 경로에서 문제가 생겼는지 개발자가 찾는 데 도움이 되는 정보예요.

검증 결과를 확인하고, 보고된 문제를 고친 다음, 다시 검증한 뒤에 진행하세요.

## 기존 워크플로우 안전하게 수정하기

Workflows API로 기존 워크플로우 정의를 수정할 수 있어요. 워크플로우를 처음부터 다시 만들 필요가 없어요.

다음 순서로 진행하세요.

1. **Get Workflow Definition**(워크플로우 정의 조회)으로 현재 워크플로우를 가져와요.
2. 정의를 수정하기 전에 워크플로우를 초안 상태로 되돌려요.
3. 필요한 속성만 수정하고, 나머지 필수 워크플로우 정보는 그대로 유지해요.
4. **Update Workflow Definition**(워크플로우 정의 수정)으로 전체 정의를 제출해요.
5. 수정한 워크플로우를 검증하고 게시해요.

### 버전 충돌 방지

API는 버전 확인을 통해 오래된 업데이트가 더 새로운 워크플로우 설정을 덮어쓰지 않게 막아요.

업데이트를 제출할 때는 API가 돌려준 현재 워크플로우 버전을 함께 보내세요.

정의를 가져온 뒤에 다른 사용자가 워크플로우를 바꾸면, API는 오래된 요청을 거부해요.

그럴 때는 최신 버전을 다시 가져와 변경 내용을 확인한 뒤, 업데이트한 정의를 다시 제출하세요.

{% hint style="warning" %}
중요: 워크플로우 정의를 수정하면 기존 정의가 새 정의로 바뀌어요. 워크플로우에 남아 있어야 하는 단계와 연결은 빠뜨리지 말고 그대로 포함하세요.
{% endhint %}

## 워크플로우 실행 로그와 통계 모니터링하기

워크플로우 활동은 엔드포인트 두 개로 모니터링할 수 있어요.

### 워크플로우 로그 조회(Get Workflow Logs)

이 엔드포인트로 워크플로우의 실행 기록을 가져와요.

실행 로그에서 다음을 확인할 수 있어요.

- 워크플로우에 진입한 연락처
- 워크플로우가 실행되는 동안 처리된 단계
- 실패했거나 오류가 난 단계
- 연락처별 실행 상태
- 특정 워크플로우 단계와 관련된 활동

### 워크플로우 로그 통계 조회(Get Workflow Log Statistics)

이 엔드포인트로 워크플로우 실행 정보를 집계해서 가져와요.

다음을 분석할 수 있어요.

- 워크플로우 진입 수
- 단계별 실행 결과
- 워크플로우 단계 전반의 실패
- 연락처가 워크플로우에서 나간 이유
- 선택한 기간의 추세

예를 들어 개발자는 단계별 실패 횟수를 가져온 다음, 실행 로그로 영향을 받은 연락처를 조사할 수 있어요.

![워크플로우 로그 조회 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084601014/original/gXjLMXhuO6fK12OTNyMhnvZdLENzn78MzA.png?1793364004)

![워크플로우 로그 통계 조회 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084600980/original/dpA73QgWS_2dNEvpMSovDyvhUR76d1_Dqg.png?1793363983)

워크플로우 성과를 분석할 때는 날짜 필터와 그룹화 옵션을 쓸 수 있어요.

{% hint style="info" %}
참고: 실행 로그 요청은 최대 30일 범위까지 지원하고, 조회할 수 있는 최근 60일 기록 안에서 가져와요.
{% endhint %}

## API 요청 제한

Workflows API 요청에는 하이퍼클래스 공개 API 제한과 엔드포인트별 추가 제한이 함께 적용돼요.

문서에 나와 있는 제한은 다음과 같아요.

| 요청 유형 | 제한 |
| --- | --- |
| 일반 공개 API 요청 | 서브 계정당 10초에 100건, 하루 200,000건 |
| 워크플로우 조회 | 서브 계정당 10초에 30건 |
| 워크플로우 쓰기 | 서브 계정당 10초에 10건 |
| 워크플로우 로그 | 10초에 20건, 1분에 60건 |
| 워크플로우 로그 통계 | 10초에 5건, 1분에 10건, 하루 1,000건 |

제한을 넘기면 HTTP `429` 응답이 돌아와요.

이 제한에 맞춰 연동을 설계하고, 재시도 처리를 적절히 구현하세요.

## 활용 사례

### 1. 서브 계정 전체에 표준 워크플로우 배포하기

에이전시는 Workflows API로 표준 자동화 구성을 자격이 되는 고객사 서브 계정에 나눠 배포할 수 있어요.

예를 들어 템플릿 서브 계정에서 워크플로우 정의를 가져온 뒤, 각 고객사 서브 계정에 같은 워크플로우를 만들고 게시할 수 있어요.

비슷한 워크플로우를 배포할 때 반복되는 수동 설정을 줄일 수 있어요.

### 2. 워크플로우 실패 모니터링하기

개발자는 워크플로우 실행 로그와 통계로 자동화 과정에서 생기는 문제를 찾을 수 있어요.

예를 들어 연동에서 실패 횟수를 가져오고, 영향을 받은 워크플로우 단계를 확인하고, 팀에 보낼 리포트를 만들 수 있어요.

### 3. 외부 애플리케이션에서 워크플로우 만들기

하이퍼클래스와 연동된 애플리케이션은 외부 시스템의 이벤트나 동작에 따라 워크플로우를 만들 수 있어요.

예를 들어 새 고객이 가입을 마치면 온보딩 워크플로우를 자동으로 만들 수 있어요.

애플리케이션이 API로 워크플로우 정의를 검증하고, 워크플로우를 만들고, 게시까지 할 수 있어요.

## 자주 묻는 질문

### Workflows API는 누가 쓸 수 있나요?

Workflows API는 현재 비공개 베타에 참여하는 일부 서브 계정에서만 쓸 수 있어요. 접근 권한이 필요하면 하이퍼클래스 고객지원에 문의하세요.

### 403 오류가 나와요. 왜 그런가요?

`WORKFLOW_API_NOT_ENABLED_FOR_LOCATION`과 함께 403 응답이 나오면, 서브 계정에 비공개 베타 접근 권한이 없다는 뜻이에요.

그 밖의 인증 오류는 토큰 권한이나 서브 계정 접근 제한 때문일 수 있어요.

### 워크플로우를 API만으로 만들고 게시할 수 있나요?

네. 자격이 되는 연동은 워크플로우 정의를 만들고, 검증하고, 초안으로 저장하고, 게시하는 과정을 모두 코드로 처리할 수 있어요.

### 이미 게시된 워크플로우를 수정할 수 있나요?

네. 워크플로우를 초안 상태로 바꾸고, 현재 정의를 가져와서, 변경 내용을 반영한 뒤 다시 게시하세요.

### API가 워크플로우 업데이트 충돌을 막아 주나요?

네. 버전 확인으로 오래된 업데이트를 거부해서, 더 새로운 변경 내용이 조용히 덮어써지지 않게 해요.

### 워크플로우 실행 기록을 볼 수 있나요?

네. Get Workflow Logs는 실행 단위의 정보를, Get Workflow Log Statistics는 집계된 횟수를 보여 줘요.

### 이 엔드포인트로 워크플로우에 연락처를 추가할 수 있나요?

아니요. 워크플로우에 연락처를 추가하거나 제거하는 일은 해당 Contacts API 엔드포인트로 해야 해요.

### 워크플로우를 검증하면 저장되거나 게시되나요?

아니요. 검증은 제출한 정의를 확인하고 오류나 경고만 알려 줘요. 워크플로우를 저장하지는 않아요.

## 도움이 필요하면

Workflows API를 쓰다가 오류가 나면 하이퍼클래스 고객지원에 문의하세요.

문의할 때는 엔드포인트, HTTP 응답 상태, 오류 메시지, 확인된 검증 상세 정보나 트레이스 ID를 함께 알려 주세요. 액세스 토큰이나 다른 민감한 인증 정보는 공유하지 마세요.
