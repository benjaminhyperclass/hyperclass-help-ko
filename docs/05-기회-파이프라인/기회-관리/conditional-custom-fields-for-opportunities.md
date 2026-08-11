---
원문: https://help.gohighlevel.com/support/solutions/articles/155000008427-conditional-custom-fields-for-opportunities
번역일: 2026-08-11
카테고리: 05-기회-파이프라인 > 기회-관리
---

# 기회(Opportunities)를 위한 조건부 커스텀 필드

조건부 커스텀 필드(Conditional Custom Fields)를 사용하면 관리자(Admin)가 딜의 파이프라인, 단계, 상태 또는 다른 필드 값을 기준으로 어떤 기회(Opportunity) 필드를 표시할지, 어떤 필드를 필수로 입력해야 할지를 제어할 수 있어요.

이 기능을 사용하면 기회 양식을 목적에 맞게 정리할 수 있고, 팀이 영업 프로세스의 적절한 시점에 필요한 정보를 정확히 수집할 수 있도록 도와줘요.

목차

- [조건부 규칙이 작동하는 방식](#How-Conditional-Rules-Work)
- [조건부 커스텀 필드 활성화 방법](#How-to-Enable-Conditional-Custom-Fields)
- [조건부 규칙 만드는 방법](#How-to-Create-a-Conditional-Rule)[AND와 OR 조건 사용하기](#Using-AND-and-OR-Conditions)
- [필드와 폴더 표시하기](#Showing-Fields-and-Folders)
- [필드를 필수로 지정하기](#Making-Fields-Mandatory)
- [기존 규칙 관리 방법](#How-to-Manage-Existing-Rules)
- [파이프라인(Pipelines) 페이지에서 규칙 관리하기](#How-to-Manage-Rules-from-the-Pipelines-Page)
- [주요 참고 사항 및 제한 사항](#Important-Notes-and-Limitations)
- [자주 묻는 질문](#Frequently-Asked-Questions)

## 조건부 규칙이 작동하는 방식

각 조건부 규칙은 다음으로 구성돼요:

- **트리거(Triggers):** 규칙을 활성화하는 조건
- **결과(Outcomes):** 조건이 충족되면 표시되거나 필수로 바뀌는 필드 또는 폴더

지원되는 트리거는 다음과 같아요:

- 파이프라인(Pipeline)
- 파이프라인 단계(Pipeline Stage)
- 상태(Status)
- 드롭다운 필드
- 라디오 필드
- 체크박스 필드
- 다중 선택 필드

사용 가능한 결과는 다음과 같아요:

- **필드 표시(Show field):** 개별 기회 필드를 표시해요.
- **폴더 표시(Show folder):** 기회 필드 폴더 전체를 표시해요.
- **필수로 지정(Make mandatory):** 기회를 저장하기 전에 표시된 필드를 반드시 입력하도록 요구해요.

예를 들어 기회가 성사(Won) 상태가 되면 추가 온보딩 필드를 표시하거나, 특정 파이프라인 단계(Stage)에 도달하면 제안서 세부 정보를 필수로 요구할 수 있어요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155078108259/original/y1hZxGlqkdE_dV2XMDA_Z7QRqw-Z5zb_SQ.png?1786441916)

## 조건부 커스텀 필드 활성화 방법

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155078108311/original/DVS6tHm_WR8ggl_LYPT-adE_G_diK-nXTA.png?1786441941)

아직 기능이 활성화되어 있지 않다면:

- `Settings(설정) → Labs`로 이동하세요.
- **Show & Require Opportunity Fields Conditionally**를 찾으세요.
- 해당 하위 계정(Sub-account)에서 기능을 활성화하세요.

기능을 활성화하더라도 기존 기회 양식은 바뀌지 않아요. 조건부 동작은 관리자가 첫 번째 규칙을 만들고 저장한 이후부터 시작돼요.

## 조건부 규칙 만드는 방법

- `Settings(설정) → Custom Fields(커스텀 필드)`로 이동하세요.
- **Opportunity(기회)**를 선택하세요.
- **Conditional Rules(조건부 규칙)** 탭을 여세요.
- **Create conditional rule(조건부 규칙 만들기)**을 클릭하세요.
- 규칙을 트리거할 필드를 선택하세요.
- 연산자와 트리거 값을 선택하세요.
- 필요하면 조건을 추가하세요.
- **AND** 또는 **OR** 로직으로 여러 조건을 연결하세요.
- 하나 이상의 결과(Outcome)를 추가하세요.
- 실시간 미리보기로 규칙을 확인하세요.
- **Save rule(규칙 저장)**을 클릭하세요.

규칙은 저장한 즉시 활성화돼요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155078108369/original/a-nzBaJMTsWAZ5VJ_57D74yRto_cJdtzcg.png?1786441964)

### AND와 OR 조건 사용하기

모든 조건이 충족되어야 할 때는 **AND**를 사용하세요.

**예시:**

- 파이프라인이 Sales Pipeline인 경우
- **AND** 파이프라인 단계가 Closed인 경우

조건 중 하나만 충족돼도 규칙이 활성화되어야 할 때는 **OR**을 사용하세요.

**예시:**

- 파이프라인 단계가 Proposal Sent인 경우
- **OR** 파이프라인 단계가 Closed인 경우

규칙을 저장하기 전에 실시간 미리보기로 예상 동작을 확인하세요.

### 필드와 폴더 표시하기

Show(표시) 결과에 포함된 필드와 폴더는 기본적으로 숨겨져 있어요. 규칙의 트리거 조건이 충족될 때만 표시돼요.

Show 규칙에 포함되지 않은 필드는 평소처럼 그대로 표시돼요.

필드나 폴더를 조건부로 표시하려면:

- 규칙의 트리거 조건을 설정하세요.
- **Outcomes(결과)** 항목에서 **Show field(필드 표시)** 또는 **Show folder(폴더 표시)**를 선택하세요.
- 표시할 필드 또는 폴더를 선택하세요.
- 실시간 미리보기를 확인하세요.
- 규칙을 저장하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155078108413/original/gChKIX6Aggd7e0fIKiahglrVqqJmTUi4Rg.png?1786441986)

### 필드를 필수로 지정하기

**Make mandatory(필수로 지정)** 결과는 기회를 저장하기 전에 표시된 필드를 반드시 입력하도록 요구해요.

**예시:**

- **트리거:** 파이프라인 단계가 Closed인 경우
- **결과:**
  - Proposal Amount(제안 금액) 필수 지정
  - Expected Close Date(예상 종료일) 필수 지정
  - Decision Maker(의사결정자) 필수 지정

사용자가 기회를 Closed 단계로 이동시키면, 변경 사항을 저장하기 전에 해당 필드를 모두 입력해야 해요.

**중요:** 필수 지정(mandatory) 결과가 숨겨진 필드를 자동으로 표시해주지는 않아요. 해당 필드가 Show 규칙에 의해 제어되고 있다면, 필요한 시점에 필드가 표시되도록 표시 조건을 함께 확인해야 해요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155078108425/original/mlBGLkrahY2sIwQdTq9ULkL6mSycTAwYSg.png?1786442004)

## 기존 규칙 관리 방법

`Settings(설정) → Custom Fields(커스텀 필드) → Opportunity(기회) → Conditional Rules(조건부 규칙)`으로 이동하세요.

이 페이지에서 관리자는 다음을 할 수 있어요:

- 규칙의 트리거와 결과 확인
- 기존 규칙 검색
- 규칙 편집(수정)
- 규칙 삭제
- 추가 규칙 생성

변경 사항은 규칙을 저장하는 즉시 적용돼요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155078108542/original/6ZsxjjUiirva03_UtEzQHfSB0siTLO9ebQ.png?1786442029)

## 파이프라인(Pipelines) 페이지에서 규칙 관리하기

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155078108602/original/MhSU8qRET7l0v4fYIvX0ceickdiSzSTNYg.png?1786442053)

파이프라인별 규칙은 파이프라인(Pipelines) 페이지에서도 관리할 수 있어요.

- `Settings(설정) → Opportunities & Pipelines(기회 및 파이프라인)`으로 이동하세요.
- 원하는 파이프라인을 찾으세요.
- **Actions(작업)** 메뉴를 여세요.
- **Manage conditional rules(조건부 규칙 관리)**를 선택하세요.
- 규칙을 생성하거나 수정하세요.
- 실시간 미리보기를 확인하세요.
- **Save rule(규칙 저장)**을 클릭하세요.

## 주요 참고 사항 및 제한 사항

- 조건부 규칙은 관리자(Admin)만 생성, 편집, 삭제할 수 있어요.
- 규칙은 하위 계정(Sub-account)마다 별도로 설정돼요.
- 규칙은 사용자가 웹과 모바일에서 기회를 추가, 편집, 일괄 편집(bulk-edit)할 때 작동해요.
- Show 결과에 포함된 필드와 폴더는 조건이 충족되기 전까지 계속 숨겨져 있어요.
- Show 규칙에 포함되지 않은 필드는 계속 표시돼요.
- 숨겨진 필드도 기존에 입력된 값은 그대로 유지돼요.
- 숨겨진 필드는 필수 항목 검증에서 제외돼요.
- 여러 규칙이 동시에 적용되면, 각 규칙의 필수 조건이 모두 합쳐져 적용돼요.
- 조건부 검증(validation)은 Public API 또는 워크플로우(Workflow) 기반 업데이트에는 적용되지 않아요.

## 자주 묻는 질문

**규칙 조건이 충족되지 않았는데 필드가 계속 보여요. 왜 그런가요?**

필드는 **Show field(필드 표시)** 또는 **Show folder(폴더 표시)** 결과에 포함된 경우에만 기본적으로 숨겨져요. Show 규칙에 포함되지 않은 필드는 계속 표시돼요.

**필드가 숨겨지면 기존에 입력했던 값은 어떻게 되나요?**

값은 그대로 유지돼요. 필드를 숨긴다고 해서 기존 데이터가 삭제되거나 변경되지는 않아요.

**숨겨진 필드도 필수 항목 검증에 포함되나요?**

아니요. 숨겨진 필드는 다시 표시되기 전까지 필수 항목 검증에서 제외돼요.

**한 기회에 여러 규칙이 동시에 적용되면 어떻게 되나요?**

해당되는 결과들이 모두 합쳐져 적용돼요. 사용자는 그 규칙들에 의해 필수로 지정된, 화면에 표시된 모든 필드를 입력해야 해요.

**조건부 필드가 표시되지 않아요. 왜 그런가요?**

다음을 확인해보세요:

- 기능이 활성화되어 있는지
- 규칙이 저장되어 있는지
- 해당 기회가 규칙의 트리거 조건과 일치하는지
- 올바른 파이프라인, 단계, 상태 또는 필드 값이 선택되어 있는지
- 해당 필드 또는 폴더가 Show 결과에 포함되어 있는지

**조건부 규칙이 API 및 워크플로우 업데이트에도 적용되나요?**

조건부 검증은 웹과 모바일에서 지원되는 저장 방식에만 적용돼요. Public API 또는 워크플로우 기반 업데이트에는 적용되지 않아요.

---
*원문 최종 수정: 2026-08-11*
*Hyperclass 사용 가이드 — hyperclass.ai*