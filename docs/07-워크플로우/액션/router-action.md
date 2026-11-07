---
원문: /support/solutions/articles/155000009512-router-action
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Router(라우터)

**Router**(라우터) 액션은 조건이 맞는 분기마다 연락처를 모두 보내 줘요. 한 연락처가 여러 경로에 해당할 수 있을 때 쓰세요. 예를 들어 폼에서 서비스를 여러 개 고른 리드가 여기에 해당해요.

**Router**는 **If/Else** 액션과 같은 계열이에요. 차이는 실행되는 분기의 수예요. **If/Else**는 조건이 맞는 첫 번째 분기로만 연락처를 보내고, 연락처가 다른 분기 조건에 맞아도 나머지 분기는 무시해요. **Router**는 모든 분기를 확인해서 조건이 맞는 분기를 전부 실행해요. 분기는 왼쪽에서 오른쪽 순서로 차례대로 실행돼요.

## 주요 장점

- 조건이 맞으면 모두 실행돼요: 세 분기에 해당하는 연락처는 첫 번째 분기만이 아니라 세 분기 모두로 들어가요.
- 실행 순서를 예측할 수 있어요: 분기는 왼쪽에서 오른쪽으로 실행되고, 원하는 순서로 끌어서 바꿀 수 있어요.
- 분기 유형이 세 가지예요: **Custom rules**(사용자 지정 규칙), **Always run**(항상 실행), **Fallback**(다른 경로가 맞지 않을 때 실행)로 각 분기가 언제 실행될지 정해요.
- 익숙한 방식으로 조건을 만들어요: 필드, 연산자, 조건, 규칙 그룹으로 각 규칙을 만들어요.
- 중복 워크플로우가 줄어요: 두 번째, 세 번째로 맞는 경우를 잡으려고 따로 만들던 분기나 워크플로우를 **Router** 하나로 대신할 수 있어요.
- 테스트 결과가 분명해요: 테스트 출력에서 어떤 분기 조건이 통과했는지와 그 이유를 볼 수 있어요.

## 액션 이름

Router

## 액션 설명

조건이 맞는 모든 분기로 연락처를 보내요. 분기는 왼쪽에서 오른쪽으로 차례대로 실행돼요.

## 액션 상세 정보

**Action Details**(액션 상세 정보)에서 설정하는 항목은 다음과 같아요.

| 필드 | 설명 | 필수 |
| --- | --- | --- |
| **Action Name**(액션 이름) | 워크플로우 캔버스에 표시되는 이름이에요. 기본값은 "Router"예요. | 예 |
| **Branches**(분기 목록) | 이 **Router**에 들어 있는 분기를 실행 순서대로 보여 줘요. **Add branch**(분기 추가)로 분기를 추가하고, 드래그 핸들로 순서를 바꾸고, 삭제 아이콘으로 분기를 지워요. | 예 |
| **Branch Name**(분기 이름) | 분기의 이름이에요. 예: "Branch 1". 캔버스에서 분기 위에 표시돼요. | 예 |
| **Branch Type**(분기 유형) | **Custom rules**: 아래 조건이 맞을 때만 실행돼요. **Always run**: 조건 없이 모든 연락처에 실행돼요. **Fallback**: 다른 경로가 하나도 맞지 않을 때만 실행돼요. | 예 |
| **Only Continue If**(다음 조건일 때만 계속) | **Custom rules**를 고르면 나타나요. 연락처가 충족해야 하는 조건이에요. 필드를 선택하고, 연산자를 선택하고, 값을 입력해요. 조건을 더 넣으려면 **Add condition**(조건 추가)과 **Add rule group**(규칙 그룹 추가)을 사용해요. | 예, **Custom rules**일 때 |

## 설정 방법

아래 단계는 가장 흔한 흐름을 따라가요. 트리거가 연락처를 들여오고, **Router**가 그 연락처를 조건이 맞는 분기마다 보내는 흐름이에요.

### 1단계: Router 액션 추가하기

1. 워크플로우 빌더에서 **Router**를 넣을 자리의 + 아이콘을 클릭하세요.
2. **Actions**(액션) 패널에서 Router를 검색해 선택하세요. 캔버스에 **Router**가 나타나고, 그 아래에 분기가 보여요.

### 2단계: 분기 열기

1. **Router** 패널의 **Branches** 목록에서 전체 분기를 확인하세요.
2. 분기를 클릭해 설정을 여세요.
3. **Branch Name**을 입력하세요.
4. 목록으로 돌아가려면 **Back to branches**(분기 목록으로 돌아가기)를 클릭하세요.

### 3단계: 분기 유형 고르기

**Branch Type** 드롭다운을 열고 옵션 하나를 선택하세요.

- **Custom rules**: 아래 조건이 맞을 때만 분기가 실행돼요.
- **Always run**: 조건 없이 모든 연락처에 분기가 실행돼요.
- **Fallback**: 다른 경로가 하나도 맞지 않을 때만 분기가 실행돼요.

![Router 액션을 선택하고 분기 유형과 조건을 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084503340/original/DAFc2bwWdBxiiTjCvoZ6pqAPREp5GygFhA.gif?1793276740)

*Router 액션을 선택하고, 분기 유형을 고르고, 조건을 설정하는 모습이에요.*

### 4단계: 조건 설정하기

**Custom rules**를 골랐다면 **Only Continue If** 아래에서 규칙을 만드세요.

1. 필드를 선택하세요. 연락처 필드나 커스텀 필드를 고를 수 있어요.
2. 연산자를 선택하세요. 사용할 수 있는 연산자는 다음과 같아요.
   - **is**(같음)
   - **is not**(같지 않음)
   - **contains**(포함)
   - **does not contain**(포함하지 않음)
   - **is any of (comma separated)**(쉼표로 구분한 값 중 하나)
   - **is none of (comma separated)**(쉼표로 구분한 값 중 어느 것도 아님)
   - **is not empty**(비어 있지 않음)
3. 값을 입력하세요.
4. 조건을 더 넣으려면 **Add condition**이나 **Add rule group**을 클릭하세요.
5. 분기를 저장하세요.

### 5단계: 분기 더 추가하기

1. 캔버스의 **+ Add branch**(분기 추가)나 **Branches** 목록의 **Add branch**를 클릭하세요.
2. 새 분기마다 **Branch Name**, **Branch Type**, 조건을 설정하세요.
3. 사용 목적에 필요한 만큼 분기를 추가하세요.

### 6단계: 실행 순서 정하기

분기는 왼쪽에서 오른쪽으로 실행돼요. 어떤 분기를 가장 먼저 실행하려면, 그 분기의 핸들을 잡고 **Branches** 목록 맨 위로 끌어다 놓으세요. 캔버스에도 바뀐 순서가 반영돼요.

![Branch 2를 Branch 1 위로 끌어 실행 순서를 바꾸는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084503413/original/nSjfIsnZFa2xa8bVj3bWuyQ0nDL6cNhrSA.gif?1793276782)

*Branch 2를 Branch 1 위로 끌어 놓았어요. 이제 Branch 2가 먼저 실행돼요.*

### 7단계: 저장하고 다음 단계 추가하기

1. **Save action**(액션 저장)을 클릭하세요.
2. 각 분기 아래의 + 아이콘을 클릭하고, 그 분기에서 실행할 액션을 추가하세요. 메모, 내부 알림, 태그, 작업 같은 액션을 넣을 수 있어요.

## 동작 방식과 로직

| 규칙 | 동작 |
| --- | --- |
| 실행되는 분기 | 조건이 맞는 분기는 모두 실행돼요. 세 분기에 해당하는 연락처는 세 분기 모두로 들어가요. |
| 실행 순서 | 조건이 맞는 분기는 왼쪽에서 오른쪽으로 차례대로 실행돼요. **Branches** 목록의 순서가 곧 실행 순서예요. |
| **Custom rules** | 연락처가 분기 조건에 맞을 때만 분기가 실행돼요. |
| **Always run** | 조건 없이 모든 연락처에 분기가 실행돼요. |
| **Fallback** | 다른 경로가 하나도 맞지 않을 때만 분기가 실행돼요. |
| **If/Else**와 비교 | **If/Else**는 조건이 맞는 첫 번째 분기만 실행해요. **Router**는 조건이 맞는 분기를 모두 실행해요. |

## Router 테스트하기

게시하기 전에 **Test workflow**(워크플로우 테스트)로 실제 이벤트에서 **Router**를 확인해 보세요.

- **Input**(입력): **Router** 단계를 열고 **Test** 탭으로 이동하세요. **Input**에 각 분기 조건과 규칙이 나열돼요. 예: Branch 1 · condition 1
- 테스트 실행: 최근 **Form Submitted**(폼 제출) 이벤트 같은 실제 이벤트를 선택하고, **Router** 액션에 대해 테스트를 실행하세요.
- **Output**(출력): **Action tested** 배너로 실행이 완료됐음을 알 수 있어요. **Output**에는 각 분기 조건이 **Passed**(통과)와 그 이유와 함께 나열되고, 연락처가 실제로 가진 값도 함께 표시돼요. 예: `Passed, includes HVAC (actual: HVAC, Plumbing, Electrical)`

![Branch 1, 2, 3이 각각 이유와 함께 통과한 테스트 출력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084503480/original/A6BOrMg7qZH2lFQbSKXux4MGFyU02OKXIA.gif?1793276814)

*테스트 출력에서 Branch 1, Branch 2, Branch 3이 각각 이유와 함께 통과한 모습이에요.*

## 활용 사례

상황: 어떤 홈서비스 업체가 폼에서 "어떤 서비스가 필요하세요?"라는 질문 하나를 물어봐요. 리드는 냉난방(HVAC), 배관(Plumbing), 전기(Electrical), 목공(Carpentry) 중 하나 이상을 고를 수 있어요. 서비스마다 담당 팀과 후속 단계가 따로 있어요.

- 트리거: 홈서비스 폼에 대한 **Form Submitted**
- 액션: 분기가 네 개인 **Router**
- Branch 1: **Custom rules**. 서비스에 HVAC가 포함돼요.
- Branch 2: **Custom rules**. 서비스에 Plumbing이 포함돼요.
- Branch 3: **Custom rules**. 서비스에 Electrical이 포함돼요.
- Branch 4: **Fallback**. 다른 분기에 하나도 해당하지 않는 리드를 위한 분기예요.
- 각 분기 안: 해당 팀의 다음 단계예요. 메모, 내부 알림, 태그, 작업 같은 액션을 넣어요.
- 결과: HVAC, Plumbing, Electrical을 모두 선택한 리드는 Branch 1, Branch 2, Branch 3 순서로 들어가요. **If/Else**를 쓰면 HVAC 분기만 실행돼요.

![여러 개를 선택할 수 있는 폼 질문과 서비스별 Router 분기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084503431/original/k9bRvGGnjuw74jCjbslvU4gCWq-AV9RlxQ.gif?1793276797)

*여러 개를 선택할 수 있는 폼 질문과, 서비스별 Router 분기예요.*

## 자주 묻는 질문

### Router와 If/Else는 어떻게 다른가요?
**If/Else**는 조건이 맞는 첫 번째 분기로만 연락처를 보내고 나머지는 무시해요. **Router**는 조건이 맞는 모든 분기로 연락처를 왼쪽에서 오른쪽으로 차례대로 보내요.

### 분기는 어떤 순서로 실행되나요?
왼쪽에서 오른쪽으로, **Branches** 목록의 순서대로 실행돼요. 분기를 목록 맨 위로 끌어다 놓으면 가장 먼저 실행돼요.

### 조건이 맞는 분기들이 동시에 실행되나요?
아니요. 차례대로 하나씩 실행돼요.

### 모든 연락처에 분기를 실행하려면 어떻게 하나요?
**Branch Type**을 **Always run**으로 설정하세요. 조건 없이 모든 연락처에 실행돼요.

### 어떤 분기에도 해당하지 않는 연락처는 어떻게 처리하나요?
**Branch Type**을 **Fallback**으로 설정한 분기를 추가하세요. 다른 경로가 하나도 맞지 않을 때만 실행돼요.

### 연락처가 어떤 분기로 들어가는지 미리 확인하려면 어떻게 하나요?
실제 이벤트로 **Test workflow**에서 **Router**를 테스트하세요. **Output**에 각 분기 조건이 **Passed**와 그 이유와 함께 나와요.
