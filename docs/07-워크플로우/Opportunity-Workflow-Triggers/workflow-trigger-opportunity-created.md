---
원문: /support/solutions/articles/155000003499-workflow-trigger-opportunity-created
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Opportunity Created(기회 생성)

새 기회가 만들어질 때 워크플로우를 자동으로 시작하는 트리거예요. 파이프라인에 새 영업 기회가 생기면 알림 보내기, 후속 조치, 작업 배정 같은 일을 자동으로 처리할 수 있어요.

## 트리거 설명

**Opportunity Created**(기회 생성) 트리거는 새 기회가 만들어지면 실행돼요. 파이프라인 단계, 리드 가치, 담당자 같은 기회의 특성에 따라 작업 배정, 팀원 알림, 상태 업데이트를 자동화할 수 있어요.

## 트리거 세부 정보

| 필드 이름 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Assigned To**(담당자) | 기회를 맡은 사용자 | 아니요 |
| **Has Tag**(태그 보유) | 특정 태그가 있는 기회만 걸러 내기 | 아니요 |
| **In Pipeline**(파이프라인) | 기회를 추적할 파이프라인 선택 | 아니요 |
| **Lead Value**(리드 가치) | 리드에 연결된 금액 | 아니요 |
| **Lost Reason**(고객전환실패 사유) | 기회를 고객전환실패로 표시할 때 입력한 사유 | 아니요 |
| **Status**(상태) | 기회의 현재 상태(New, Open 등) | 아니요 |

![Opportunity Created 트리거의 필드 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033069568/original/_veN8lgt5BolbVsdYDxR3sw3dRYxUnbLWg.png?1726650717)

필터 조건에는 다음 연산자를 쓸 수 있어요.

| 연산자 | 설명 |
| --- | --- |
| **Equals to**(같음) | 값이 정확히 일치해요 |
| **Greater than**(초과) | 값이 입력한 값보다 커야 해요 |
| **Less than**(미만) | 값이 입력한 값보다 작아야 해요 |
| **Contains**(포함) | 값에 입력한 문자열이 들어 있어요 |
| **Is Empty**(비어 있음) | 필드가 비어 있어요 |
| **Is Not Empty**(비어 있지 않음) | 필드가 비어 있지 않아요 |

## 설정 방법

- **Select Trigger**(트리거 선택): 워크플로우 빌더에서 트리거로 **Opportunity Created**를 선택하세요.
- **Trigger Name**(트리거 이름): 알아보기 쉬운 이름을 지어 주세요. 예: "고액 리드 기회 생성"
- **Filters**(필터):
  - **Assigned To**: 기회를 맡은 사용자로 걸러 내요.
  - **Pipeline**: 특정 파이프라인의 기회만 대상으로 해요.
  - **Lead Value**: 기회의 금액을 기준으로 조건을 정해요.
- **Tag**: **Tag** 필터로 태그에 따라 기회를 포함하거나 제외할 수 있어요. **Tag**는 여러 개를 고를 수 있는 연산자(**Equals to** / **Not equals to** / **Any of** / **None of**)를 지원해요. **Tag** 필터를 여러 개 추가해서 더 세밀한 규칙도 만들 수 있어요.
- **Add Multiple Filters**(필터 여러 개 추가): 필요하면 **Add filters**(필터 추가)를 클릭하고 원하는 필드와 조건을 골라 필터를 더 추가하세요.

## 예시

시나리오: 파이프라인에 리드 가치가 $10,000를 넘는 새 기회가 만들어지면 영업 매니저에게 알리고 싶어요.

- 트리거: **Opportunity Created**
- 필터: **Lead Value**가 **Greater than** $10,000
- 액션: 영업 매니저에게 알림 보내기

이렇게 설정하면 중요한 기회가 생겼을 때 핵심 담당자에게 바로 알려서 빠르게 대응할 수 있어요.
