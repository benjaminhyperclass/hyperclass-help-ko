---
원문: /support/solutions/articles/155000006489-asana-actions-and-triggers-in-workflows
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우의 Asana 트리거와 액션 — Asana Actions and Triggers

하이퍼클래스 워크플로우를 Asana와 연결하면 프로젝트 관리를 간소하게 만들 수 있어요. 기본 제공되는 Asana 액션과 트리거로 작업을 바로 만들고, 업데이트하고, 동기화할 수 있어요. Zapier나 웹훅은 필요 없어요.

## 워크플로우의 Asana 연동이란?

Asana 연동을 쓰면 워크플로우와 Asana 프로젝트 관리 플랫폼 사이를 매끄럽게 자동화할 수 있어요. 작업을 만들거나, 프로젝트를 관리하거나, 두 시스템 사이의 업데이트를 동기화할 때 수작업을 줄이고 팀이 같은 정보를 보도록 도와줘요.

### 이 연동을 쓰면 좋은 이유

에이전시, 마케터, 운영팀은 이 연동으로 다음 일을 할 수 있어요.

- 워크플로우에서 Asana 작업과 프로젝트를 자동으로 만들고 업데이트해요.
- Asana에 새 작업, 댓글, 첨부파일이 추가되면 워크플로우를 시작해요.
- 여러 플랫폼에서 프로젝트, 팀, 고객사의 정보를 같은 상태로 유지해요.

## 주요 장점

추가 도구 없이 영업팀과 프로젝트 팀을 연결할 수 있어요.

- 실시간 동기화: Asana에서 무언가 바뀌면 바로 워크플로우가 실행돼요. 반대 방향도 마찬가지예요.
- 실수 감소: 작업 생성과 업데이트가 자동으로 이뤄져서 복사해 붙여 넣을 필요가 없어요.
- 비용 절감: Zapier, Make, n8n 같은 유료 연결 도구 대신 기본 제공 액션을 쓸 수 있어요.
- 도구 간 일관성: ClickUp, Airtable, Slack, 이메일, CRM 필드를 모든 프로젝트와 같은 상태로 유지해요.

## 트리거 (Asana → 워크플로우)

워크플로우를 시작할 수 있는 Asana 이벤트예요.

| 트리거 이름 | 설명 |
| --- | --- |
| **Task Created (Instant)**(작업 생성됨, 즉시) | Asana에서 새 작업이 만들어지면 즉시 실행돼요. |
| **Task Updated (Instant)**(작업 업데이트됨, 즉시) | 작업이 업데이트되면 즉시 실행돼요. |
| **Project Created (Instant)**(프로젝트 생성됨, 즉시) | 새 프로젝트가 만들어지면 실행돼요. |
| **Comment on Task (Instant)**(작업에 댓글 달림, 즉시) | 작업에 댓글이 추가되면 실행돼요. |
| **New User**(새 사용자) | Asana 워크스페이스에 새 사용자가 추가되면 실행돼요. |
| **Tag Added to Task (Instant) (Coming soon)**(작업에 태그 추가됨, 즉시, 출시 예정) | 작업에 태그가 추가되면 즉시 실행돼요. |
| **Task Moved to Section (Instant)**(작업이 섹션으로 이동됨, 즉시) | 작업이 섹션 사이로 이동하면 실행돼요. |
| **New Attachment Added to Task (Instant)**(작업에 새 첨부파일 추가됨, 즉시) | 새 첨부파일이 추가되면 실행돼요. |
| **New Subtask (Coming soon)**(새 하위 작업, 출시 예정) | Asana에서 새 하위 작업이 만들어지면 실행돼요. |

## 액션 (워크플로우 → Asana)

워크플로우가 Asana에서 실행할 수 있는 액션이에요.

| 액션 이름 | 설명 |
| --- | --- |
| **Create Task**(작업 만들기) | Asana에 새 작업을 만들어요. |
| **Update Task**(작업 업데이트) | 기존 Asana 작업의 세부 정보를 업데이트해요. |
| **Find Task by ID**(ID로 작업 찾기) | Asana 작업 ID로 작업을 검색해요. |
| **Find Task**(작업 찾기) | 작업 이름으로 작업을 검색해요. |
| **Create Section**(섹션 만들기) | Asana 프로젝트에 새 섹션을 추가해요. |
| **Find Comment from Task**(작업에서 댓글 찾기) | 작업에 달린 댓글을 가져와요. |
| **Add Task to Section**(작업을 섹션에 추가) | 기존 작업을 특정 섹션으로 옮겨요. |
| **Find All Tasks from the Project**(프로젝트의 모든 작업 찾기) | 지정한 프로젝트의 모든 작업을 가져와요. |
| **Find Task in Project**(프로젝트에서 작업 찾기) | 프로젝트 안에서 특정 작업을 검색해요. |
| **Create Comment/Story**(댓글/스토리 만들기) | 작업에 댓글이나 스토리를 추가해요. |
| **Create Subtask**(하위 작업 만들기) | 기존 작업 아래에 하위 작업을 만들어요. |
| **Find Project**(프로젝트 찾기) | 이름으로 프로젝트 ID를 찾아요. |
| **Find Section**(섹션 찾기) | 프로젝트의 섹션 ID를 찾아요. |
| **Create Project**(프로젝트 만들기) | Asana에 새 프로젝트를 만들어요. |

## Asana 연결하고 시작하기

1. 워크플로우 빌더에서 Asana 트리거나 액션을 검색하세요. 예를 들어 **Create Task**나 **Task Created**를 검색해 보세요.

   ![워크플로우 빌더에서 Asana 트리거와 액션 검색하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060732240/original/nk39zSgkhHdSXeHNtKwl2YrrmnHLpNpQzg.png?1765892611)

2. Asana 계정이 이미 연결되어 있으면 설정 옵션이 자동으로 나타나요. 연결되어 있지 않으면 **Connect Now**(지금 연결)를 누르고 Asana 계정 정보나 OAuth로 로그인하세요.

   ![Asana 계정 연결 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060732319/original/O4dhX9JRofUzhtQ4x9PU3Oh7MMc4Y4sq7Q.png?1765892648)

## Asana 트리거가 작동하는 방식

Asana 트리거는 웹훅으로 작동해서 즉시 실행돼요. Asana에서 새 작업이나 프로젝트 업데이트 같은 이벤트가 생기면 곧바로 워크플로우에 알려 줘요. 지연되거나 일정 간격으로 확인하는 과정(polling)도 없어요.

1. 트리거를 선택하세요. 예를 들어 **Task Created**나 **Task Updated**를 선택해요.
2. **Trigger Name**(트리거 이름)에 이름을 입력하고 **Test Trigger**(트리거 테스트)를 눌러 샘플 작업 데이터를 불러오세요.
3. 다음 워크플로우 액션에서 작업 이름, 담당자, 마감일 같은 동적 필드를 사용하세요.

![Asana 트리거 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055317531/original/f9laclC-OASMZbAlQCXgSXcxy48UfAQAow.png?1759752522)

{% hint style="info" %}
권장 사항: **Task Updated** 트리거를 쓸 때는 **Fields Changed**(변경된 필드) 필터를 추가하는 것을 권장해요. Asana에서는 필드 하나를 바꿔도 연쇄적으로 추가 업데이트가 생겨서, 작업 하나에 업데이트 이벤트가 여러 번 발생할 수 있어요. 이 필터를 적용하면 원하는 필드가 바뀔 때만 자동화가 실행돼서 불필요한 트리거 실행을 막을 수 있어요.
{% endhint %}

## 자주 쓰는 활용 사례

### 활용 사례 1: 작업 관리 자동화

목표: 새 리드가 생기면 Asana에서 작업을 자동으로 만들거나 업데이트해요.

워크플로우 설정:

- 트리거: **Contact Created**(연락처 생성됨)
- 액션:

  - **Create Task**(Asana) → **Title**(제목): “신규 리드: {{contact.name}}”
  - **Assign to**(담당자): 영업팀
  - **Create Comment**(댓글 만들기): “{{contact.name}}({{contact.email}})에게 후속 연락하기”

예시: 새 리드가 폼을 제출하면 영업팀이 후속 연락을 할 수 있도록 Asana 작업이 자동으로 만들어져요.

![작업 관리 자동화 워크플로우 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055317365/original/dYl8ra4AyBxoqa3zYpKYpTtljvQ90BMc0w.png?1759752430)

---

### 활용 사례 2: 도구 간 프로젝트 동기화

목표: Asana 프로젝트를 ClickUp, Airtable 같은 다른 플랫폼과 같은 상태로 유지해요.

워크플로우 설정:

- 트리거: **Project Created**(Asana)
- 액션:

  - **Create Project**(ClickUp) 또는 **Update Record**(레코드 업데이트, Airtable)
  - **Send Internal Notification**(내부 알림 보내기)을 프로젝트 매니저에게 보내기

예시: Asana에서 새 프로젝트가 만들어지면 다른 도구에도 해당 레코드나 프로젝트가 자동으로 만들어져서 시스템 간 일관성이 유지돼요.

![프로젝트 동기화 워크플로우 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055317729/original/z3OF1odelFJQ9d--n5PmUy7t3CAWbN9n0w.png?1759752706)

---

### 활용 사례 3: 작업이 업데이트되면 팀에 알림

목표: Asana에서 주요 작업 이벤트가 생기면 내부 팀에 알려요.

워크플로우 설정:

- 트리거: **Task Updated**(Asana)
- 액션:

  - **Send Internal Notification** → Slack 또는 이메일
  - 연락처 태그 업데이트
  - ClickUp 같은 다른 도구의 작업 상태 업데이트

예시: 디자인 작업의 상태가 “검토 준비 완료”로 바뀌면 워크플로우가 검토자에게 이메일 알림을 보내요. 그리고 연락처의 태그와 다른 프로젝트 관리 도구도 그에 맞게 업데이트해요.

![작업 업데이트 알림 워크플로우 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055317839/original/wuOTn4Ze4_jwn2w-9o1bBIQMb6gv22vaYg.png?1759752795)

---

## 자주 묻는 질문

### Asana 트리거는 바로 실행되나요, 아니면 지연되나요?
모든 Asana 트리거는 웹훅으로 즉시 실행돼요. 일정 간격으로 확인(polling)할 필요가 없어요.

### Asana와 워크플로우 사이에서 데이터를 양방향으로 동기화할 수 있나요?
현재 이 연동은 단방향 동기화를 지원해요. Asana에서 시작되거나 하이퍼클래스에서 실행되는 방식이에요.

### 유료 Asana 플랜이 필요한가요?
무료 플랜과 유료 플랜 모두에서 쓸 수 있어요. 다만 여러 프로젝트, 게스트 접근 같은 고급 기능은 유료 플랜이 필요할 수 있어요.

### Asana 액션과 트리거에도 요금이 부과되나요?
네, 프리미엄 액션과 트리거라서 사용 중인 요금제의 표준 자동화 요금으로 청구돼요.

### 하위 작업이나 댓글을 자동으로 추가할 수 있나요?
네, 워크플로우에서 **Create Subtask**와 **Create Comment/Story** 액션을 쓰면 돼요.
