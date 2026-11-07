---
원문: /support/solutions/articles/155000003252-workflow-trigger-opportunity-status-changed
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Opportunity Status Changed(기회 상태 변경)

**Opportunity Status Changed**(기회 상태 변경) 트리거는 기회의 상태가 바뀔 때 워크플로우를 자동으로 시작해요. 이 문서에서는 트리거가 하는 일, 설정 방법, 활용 사례, 자주 묻는 질문을 안내해요.

## Opportunity Status Changed 트리거란?

CRM에서 기회의 상태가 바뀌면 이 트리거가 실행돼요. 예를 들어 상태가 "진행 중"에서 "고객전환성공" 또는 "고객전환실패"로 바뀔 때예요. 이 트리거로 팀원에게 알림을 보내거나, CRM 기록을 업데이트하거나, 후속 작업을 시작할 수 있어요. 반복되는 수작업이 줄고, 팀 간 연락도 제때 이루어져요.

## 주요 장점

- **자동 알림:** 기회 상태가 바뀌면 관련 팀원에게 바로 알려요. 팀 내 소통이 원활해져요.
- **워크플로우 효율 향상:** 상태 변경에 따른 일상 업무를 자동화해서 수작업을 줄여요.
- **CRM 데이터 정확도 향상:** CRM 기록을 자동으로 업데이트해서 기회 현황을 항상 최신 상태로 유지해요.
- **맞춤 필터:** **Moved From Status**(이전 상태)나 **In Pipeline**(파이프라인 내) 같은 필터로 비즈니스에 맞는 워크플로우를 만들 수 있어요.
- **영업 프로세스 간소화:** 기회가 단계 사이를 빠르게 이동하게 도와서 인보이스 발행, 후속 연락, 담당자 인계를 제때 진행할 수 있어요.

## 트리거 설정 방법

1. **자동화 > 워크플로우**로 이동해요. 새 워크플로우를 처음부터 만들거나, 트리거를 추가할 기존 워크플로우를 선택해요.2. **Add New Trigger**(새 트리거 추가)를 클릭하고 드롭다운 메뉴에서 Opportunity Status Changed를 선택해요.

   ![트리거 목록에서 Opportunity Status Changed 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038815320/original/FnODhDk0EWJh7BgT4boRrNjs4FrjF1Eamw.png?1734975099)

3. 트리거 이름을 입력해요. 어떤 트리거인지 알 수 있는 이름이 좋아요. 예: "기회 고객전환성공 알림"
4. 필터를 설정해서 트리거가 실행될 조건을 좁혀요.
   - **Assigned To**(담당자): 기회를 맡은 사용자나 팀을 지정해요.
   - **Tag**(태그): 이전 이름은 **Has Tag**예요. 고급 연산자와 다중 선택으로 태그별로 기회를 걸러내요. 사용할 수 있는 연산자는 **Equals to**(같음), **Not equals to**(같지 않음), **Any of**(하나라도 포함), **None of**(모두 미포함)이에요. 포함·제외 조건을 세밀하게 정하려면 **Tag** 필터를 여러 개 추가할 수도 있어요.
   - **In Pipeline**(파이프라인 내): 특정 파이프라인에 있는 기회에만 트리거가 실행되게 해요.
   - **Lead Value**(리드 가치): 워크플로우를 시작할 최소 또는 최대 리드 가치를 정해요.
   - **Moved From Status**(이전 상태): 변경 전의 원래 상태를 정해요.
   - **Moved To Status**(변경 후 상태): 변경 후의 새 상태를 정해요.
   - **Pipeline Stage**(파이프라인 단계): 파이프라인 안의 특정 단계로 범위를 좁혀요.

   ![Opportunity Status Changed 트리거의 필터 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065764060/original/iNktmpy_LDTWGShWExjlrjPe5Ntp6-p8Qg.png?1772101354)

5. 설정을 저장하고, 샘플 데이터로 워크플로우를 테스트해서 의도한 대로 동작하는지 확인해요.
6. **Publish**(게시) 토글을 켜면 워크플로우가 활성화되고 자동화가 시작돼요.

## 사용 사례

### 영업 성과 알림

- 시나리오: 영업 기회가 "Negotiation"(협상)에서 "Closed Won"으로 바뀌어요.
- 트리거 설정
  - 트리거: Opportunity Status Changed
  - 필터
    - **Assigned To**: 홍길동
    - **Moved From Status**: Negotiation
    - **Moved To Status**: Closed Won
- 결과: 영업 담당자에게 축하 이메일을 보내요. 재무팀에 인보이스 발행을 알리고, CRM에 완료 상태를 업데이트해요.

### 놓친 기회 후속 조치

- 시나리오: 기회가 "Open"(진행 중)에서 "Lost"(고객전환실패)로 바뀌어요.
- 트리거 설정
  - 트리거: Opportunity Status Changed
  - 필터
    - **Tag**: "높은 우선순위"
    - **Moved To Status**: Lost
- 결과: 잠재 고객에게 피드백을 요청하는 후속 이메일을 보내요. 담당 매니저에게는 추가 검토를 알려요.

### 파이프라인 단계 이동 알림

- 시나리오: 기회가 "엔터프라이즈 딜" 파이프라인의 "In Review"(검토 중) 단계로 이동해요.
- 트리거 설정
  - 트리거: Opportunity Status Changed
  - 필터
    - **In Pipeline**: 엔터프라이즈 딜
    - **Pipeline Stage**: In Review
- 결과: 영업 매니저에게 알리고, 검토팀에 기회를 평가하는 작업을 배정해요.

### 리드 재검증 워크플로우

- 시나리오: 한동안 반응이 없던 리드가 다시 관심을 보여서 "Lost"(고객전환실패)에서 "Reopened"로 바뀌어요.
- 트리거 설정
  - 트리거: Opportunity Status Changed
  - 필터
    - **Moved From Status**: Lost
    - **Moved To Status**: Reopened
- 결과: 리드를 영업 담당자에게 배정하고 우선순위 상태를 업데이트해요.

### 마케팅 캠페인 성과 추적

- 시나리오: 특정 캠페인의 기회가 "Open"(진행 중)에서 "Closed Won"으로 바뀌어요.
- 트리거 설정
  - 트리거: Opportunity Status Changed
  - 필터
    - **Tag**: 캠페인-X
    - **Moved To Status**: Closed Won
- 결과: 캠페인 성과 리포트를 만들고 마케팅팀에 알려요.

## 자주 묻는 질문

### 한 트리거에 필터를 여러 개 쓸 수 있나요?

네, 쓸 수 있어요. **Tag**와 **In Pipeline**처럼 필터를 함께 쓰면 특정 조건일 때만 실행되는 정교한 워크플로우를 만들 수 있어요.

### 기회 상태가 짧은 시간에 여러 번 바뀌면 어떻게 되나요?

상태가 바뀔 때마다 트리거가 실행돼요. 그래서 워크플로우에 조건이나 쿨다운(대기) 기간을 넣어 같은 작업이 불필요하게 반복되지 않게 하는 것이 좋아요.

### 여러 파이프라인에 걸쳐 액션을 실행할 수 있나요?

네, 가능해요. 파이프라인마다 별도의 워크플로우를 만들어도 되고, 필터로 트리거를 특정 파이프라인에만 적용해도 돼요.

### 태그가 없는 기회는 어떻게 처리하나요?

**Doesn't Have Tag**(태그 없음) 필터를 쓰면 특정 태그가 없는 기회만 골라서 워크플로우를 실행할 수 있어요. 태그가 없는 기회에만 워크플로우가 작동해요.
### 기회가 왜 실패했는지 추적할 수 있나요?

네, 가능해요. **Lost Reason**(실패 사유) 필터로 기회가 실패한 이유를 구분하고, 그 이유에 맞춰 피드백 설문 발송이나 리드 프로필 업데이트 같은 워크플로우를 실행할 수 있어요.