---
원문: https://help.gohighlevel.com/support/solutions/articles/155000007216-monday-com-actions-and-triggers-in-workflows
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# Monday.com 연동 — 워크플로우 액션(Actions)과 트리거(Triggers)

Monday.com을 하이퍼클래스 워크플로우에 연결하면 Zapier, Make, 직접 만든 웹훅 없이 프로젝트 진행, CRM, 작업, 상태를 맞춰 둘 수 있어요. 지금은 보드 항목을 만들고, 수정하고, 찾는 액션을 쓸 수 있고, Monday 이벤트로 워크플로우를 시작하거나 분기하는 트리거는 곧 출시돼요.

## Monday.com 연동이란?

Monday.com 연동은 하이퍼클래스 워크플로우를 Monday 보드에 바로 연결해 줘요. 워크플로우에서 Monday 항목을 만들고 수정할 수 있고, ID나 열 값으로 항목을 찾을 수도 있어요. 트리거가 출시되면 Monday 이벤트가 워크플로우를 자동으로 시작하거나 분기해서, 이벤트 기반 자동화를 만들 수 있어요.

---

## Monday.com 연동의 주요 장점

기본 제공 연동과 외부 연결 서비스 중 무엇을 쓸지 정할 때 참고하세요. 에이전시 운영에서 자주 필요한 속도, 정확성, 비용을 다뤄요.

- 두 플랫폼을 함께 보기: 한쪽 도구에서 바뀐 내용을 워크플로우로 다른 쪽에도 반영할 수 있어요.
- 연동 비용 절감: Zapier, Make 같은 외부 연결 서비스 대신 기본 제공 단계를 써요.
- 빠른 업무 인수인계: CRM 단계가 바뀌면 바로 전달 작업을 시작할 수 있어요.
- 오류 감소: CRM과 프로젝트 보드 사이에 수동으로 복사해 붙여넣지 않아도 돼요.
- ID 재사용: **Test Action**(액션 테스트)으로 **Item ID**(항목 ID)를 한 번 가져오면 이후 단계에서 다시 쓸 수 있어요.
- 확장하기 쉬운 패턴: 서브 계정 전반에서 프로젝트 템플릿을 표준화할 수 있어요.

---

## 사전 준비

접근 권한을 미리 확인하면 설정 오류 대부분을 막을 수 있고 테스트도 빨라져요. 첫 워크플로우를 만들기 전에 아래 내용을 확인하세요.

- **워크플로우**를 사용할 수 있는 하이퍼클래스 서브 계정
- 대상 워크스페이스, 보드, 그룹, 항목을 보고 편집할 수 있는 권한이 있는 Monday.com 계정
- 인증에 쓸 Monday.com API 키
- 읽거나 쓸 열이 무엇인지에 대한 정리(예: 상태, 사람/소유자, 날짜, 문자, 숫자)

---

## 계정 연결하기

워크플로우 단계나 연동 페이지 중 어느 쪽에서 연결해도 하이퍼클래스가 Monday 워크스페이스와 보드에 안전하게 접근할 수 있어요. 역할과 작업 방식에 맞는 방법을 고르세요.

<!-- 검토 필요: 원문 내용이 서로 다름 -->

1. **자동화 > 워크플로우**를 열고 ClickUp 액션이나 트리거를 아무거나 추가하세요.
   - 아직 연결하지 않았다면 **Connect Now**(지금 연결)를 클릭하고 ClickUp에 로그인해 접근을 승인하세요.
   - 이미 연결했다면 단계 안에서 필드가 바로 불러와져요.

   ![워크플로우 단계에서 연결하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065156523/original/mm80WrujjgmF72gGCBzytc9zSes0mggiiQ.png?1771407450)
2. 다른 방법으로, 서브 계정의 **설정 > 연동**에서 ClickUp을 찾아 **연결**을 클릭하세요.

   ![설정의 연동 페이지에서 연결하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065156149/original/JmACc65iauX7lVeFSbovwk2s-44OP9H-vg.png?1771407219)

---

## Monday.com 트리거 (곧 출시)

트리거를 쓰면 Monday 이벤트로 워크플로우를 자동으로 시작하거나 분기할 수 있어요. 지금 로직을 미리 계획해 두고, 트리거가 출시되면 바꿔 쓰세요. 수동 시작이나 주기적 조회 같은 우회 방법이 필요 없어져요.

| 트리거 | 하는 일 |
| --- | --- |
| **Any Column Value Changed in Board** | 항목에서 지정한 열(상태, 사람, 날짜 등)의 값이 바뀔 때 실행돼요. |
| **Any Item Moved to a Group** | 보드에서 항목이 한 그룹에서 다른 그룹으로 옮겨질 때 실행돼요. |
| **New Board** | 연결된 워크스페이스에 새 보드가 만들어질 때 실행돼요. |
| **New Item in a Board** | 선택한 보드에 새 항목이 추가될 때 실행돼요. |
| **New Subitem in Board** | 보드의 항목 아래에 하위 항목이 만들어질 때 실행돼요. |
| **New Update in Board** | 항목에 새 업데이트나 댓글이 추가될 때 실행돼요. |
| **New User** | Monday 워크스페이스에 새 사용자가 들어올 때 실행돼요. |

---

## Monday.com 액션 (지금 사용 가능)

액션을 쓰면 워크플로우에서 Monday 데이터를 만들고, 수정하고, 찾을 수 있어요. **Test Action**으로 연결을 확인하고 실시간 스키마를 미리 본 뒤, 반환된 필드(**Item ID** 등)를 이후 단계에서 쓰세요.

| 액션 | 용도 |
| --- | --- |
| **Create New Board** | 새 보드를 만들고, 이후 단계에서 쓸 보드 ID를 반환해요. |
| **Create New Group** | 보드 안에 그룹을 만들고 그룹 ID를 반환해요. |
| **Create New Column** | 보드에 열(상태, 날짜, 사람 등)을 추가해요. |
| **Create New Item** | 그룹에 항목을 만들고, 다시 쓸 수 있도록 항목 ID를 반환해요. |
| **Create New Subitem** | 항목 아래에 하위 항목을 만들고 하위 항목 ID를 반환해요. |
| **Update Item** | 매핑한 항목의 열(상태, 사람, 날짜, 문자 등)을 수정해요. |
| **Update Subitem** | 매핑한 하위 항목의 열을 수정해요. |
| **Archive Board** | 끝난 보드를 보관해 워크스페이스를 깔끔하게 유지해요. |
| **Archive Group** | 보드에서 끝난 그룹을 보관해요. |
| **Delete Item** | 항목을 영구 삭제해요(되돌릴 수 없어요). |
| **Delete Group** | 그룹을 영구 삭제해요(되돌릴 수 없어요). |
| **Get Board Items** | 보드의 항목을 가져와요(큰 보드는 여러 페이지로 나뉠 수 있어요). |
| **Find Items by Column Value** | 특정 열 값(상태, 사람, 커스텀)으로 항목을 찾아요. |
| **Find Items by ID** | 항목 ID를 이미 알고 있을 때 그 항목을 가져와요. |

---

## Test Action

Monday.com 단계에서 **Test Action**을 쓰면 연결을 확인하고, 실시간 스키마를 미리 보고, 반환된 필드(**Item ID** 등)를 이후 단계에서 쓸 수 있어요. 매핑 오류를 줄이는 데 도움이 돼요.

- Monday 인증과 선택한 보드, 그룹, 항목을 확인해요.
- 실시간 응답을 가져와 **스키마를 자동으로 저장**해요(예: `item.id`, `column_values.status.label`).
- 반환된 필드를 이후 단계에서 커스텀 값으로 다시 쓸 수 있어요(다시 매핑할 필요가 없어요).
- 키가 잘못됐거나, 권한이 없거나, 열이 맞지 않는 등 자주 생기는 오류를 미리 보여 줘요.

![Test Action 실행 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065225631/original/xPW1QPdqPerrwnNS7N_wFqaqvQ3T2-FjaA.png?1771484368)

---

## Monday.com으로 워크플로우 설정하기

아래 순서대로 Monday.com을 연결하고, 워크플로우에 추가하고, 필드를 매핑하면 보드, 그룹, 항목이 안정적으로 업데이트돼요. [ClickUp - 워크플로우 액션 & 트리거](clickup-actions-triggers-in-workflows.md) 문서의 설정 흐름과 같아요. 워크플로우 빌더 화면은 [워크플로우 빌더 둘러보기](../기타/workflow-builder-walkthrough.md)에서, 전체 액션 목록은 [워크플로우 액션 전체 목록](../기타/what-are-workflow-actions-complete-list.md)에서 볼 수 있어요.

#### 1단계: 워크플로우 만들기 또는 열기

**자동화 > 워크플로우**로 이동해 새 워크플로우를 만들거나 기존 워크플로우를 여세요. 이름을 정하고, 필요하면 폴더를 선택하세요.

![새 워크플로우를 만드는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065157499/original/neb9ys-zzVi7KodKomQMOR-ymbbZVqCTmA.png?1771407968)

#### 2단계: 트리거 선택

Monday.com 트리거는 아직 **Coming Soon**(곧 출시) 상태예요. 먼저 다른 트리거로 시작하세요(예: **Opportunity Status Changed**(기회 상태 변경), **Form Submitted**(폼 제출), **Schedule**(일정)). 필요한 필터도 설정하세요. 나중에 Monday.com 트리거로 바꿔도 뒤쪽 단계를 다시 만들 필요가 없어요.

#### 3단계: Monday.com 액션 단계 추가

**+** 아이콘을 클릭해 단계를 추가하고 **Monday.com**을 검색하세요. 그다음 **Create New Item**, **Update Item**, **Find Items by Column Value** 등 필요한 액션을 선택하세요. 안내가 나오면 **Connect Now**를 클릭하고 Monday.com 계정을 인증하세요.

![Monday.com 액션을 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065157995/original/H0p1ZSOc31LWg1x2aL8V0lWBK6yiWQlasA.png?1771408203)

#### 4단계: Workspace, Board, Group 선택

액션 설정 화면에서 **Workspace**(워크스페이스)를 고르고 대상 **Board**(보드)를 선택하세요. 해당되는 경우 액션을 적용할 **Group**(그룹)도 고르세요.

#### 5단계: Monday 열에 필드 매핑

**Item name**(항목 이름)처럼 꼭 필요한 값을 입력하세요. 쓰고 싶은 다른 열은 **Status**(상태), **People/Owner**(사람/소유자), **Date**(날짜), **Text**(문자) 등에 매핑하세요. 각 값은 해당 Monday 열의 유형과 맞아야 해요. 수정이나 삭제 액션에는 해당하는 **Item ID**, **Subitem ID**(하위 항목 ID), **Group ID**(그룹 ID), **Board ID**(보드 ID)를 넣으세요.

![필드를 Monday 열에 매핑하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065225584/original/ECDb0YN54JnTGoMeoB67wv3vkMVNCwmSfw.png?1771484291)

#### 6단계: 후속 조치 추가(선택)

결과에 따라 달라지는 상황을 처리하도록 조건이나 분기를 만드세요. 필요하면 Monday.com 액션을 이어서 추가하세요. 내부 작업이나 CRM 업데이트도 넣어 두면 관련자들이 진행 상황을 알 수 있어요.

#### 7단계: 저장 및 게시

**Save**(저장)를 클릭한 뒤 **Publish**(게시)를 클릭해 워크플로우를 활성화하세요. 그다음 딜을 대상 단계로 옮기는 식으로 통제된 실제 테스트를 해 보세요. 예상한 업데이트가 올바른 Monday 보드와 그룹에 나타나는지 확인하세요.

---

## 활용 사례와 패턴

아래 패턴은 에이전시가 자주 쓰는 업무 흐름을 바탕으로 했어요. 기본 흐름으로 시작하고, 필요에 따라 분기, 필터, 일정을 더하세요.

<!-- 검토 필요: 원문 내용이 서로 다름 -->

### 사례 1: 고객 온보딩 자동화

목표: 새 온보딩 항목을 CRM 및 팀 알림과 자동으로 동기화해요.

**워크플로우 구성**

- 트리거: **New Item in Board**(“고객 온보딩” 보드)
- 액션:

  - 하이퍼클래스 CRM에서 연락처 만들기 또는 업데이트
  - 담당 매니저에게 Slack 메시지 보내기
  - 추적용으로 Google Sheets에 행 추가
  - Monday 항목 상태를 “CRM 동기화됨”으로 업데이트

결과: 새 온보딩 항목이 생길 때마다 CRM이 바로 업데이트되고 팀에 알림이 가요.

### 사례 2: 프로젝트 상태 → 고객 커뮤니케이션

목표: 프로젝트가 완료되면 고객에게 알려요.

**워크플로우 구성**

- 트리거: **Column Value Changed**(상태 → 완료)
- 액션:

  - 고객에게 Gmail 메시지 보내기
  - CRM 메모 만들기
  - Monday.com에서 항목 보관
  - #client-updates에 Slack 업데이트 보내기

결과: 고객과 팀이 자동으로 소식을 받아요. 따로 후속 연락을 하지 않아도 돼요.

### 사례 3: 내부 작업 동기화 (Monday → ClickUp)

목표: 팀 간에 Monday와 ClickUp 작업을 맞춰 둬요.

**워크플로우 구성**

- 트리거: **New Item in Board**(“디자인 작업” 보드)
- 액션:

  - ClickUp에서 작업 만들기
  - Monday 항목 ID를 ClickUp 커스텀 필드에 저장
  - Slack 알림 보내기
  - ClickUp 작업 링크로 Monday 항목 업데이트

결과: 팀마다 선호하는 도구로 일하면서도 진행 상황을 놓치지 않아요.

---

## 자주 묻는 질문

### 양방향 동기화를 만들 수 있나요?
네. 워크플로우를 두 개 만드세요. 하나는 Monday에서 하이퍼클래스로, 다른 하나는 하이퍼클래스에서 Monday로 보내는 워크플로우예요. 충돌을 피하려면 두 워크플로우 사이에 ID를 넘겨 주세요.

### 특정 Monday 요금제가 필요한가요?
대부분의 액션은 표준 접근 권한으로 쓸 수 있어요. 고급 보드 기능은 워크스페이스에 설정된 Monday 요금제 등급이 필요할 수 있어요.

### 요금은 어떻게 청구되나요?
Monday.com 단계는 프리미엄 워크플로우 기능으로 집계돼요. 에이전시는 프리미엄 기능을 켜고 서브 계정에 재청구할 수 있어요. 자세한 내용은 [워크플로우 프리미엄 기능 켜고 재청구하기](how-to-enable-and-rebill-workflow-premium-features.md)를 참고하세요.

### 여러 열을 한 번에 수정할 수 있나요?
네. **Update Item**과 **Update Subitem**은 한 단계에서 호환되는 여러 열을 매핑할 수 있어요.
