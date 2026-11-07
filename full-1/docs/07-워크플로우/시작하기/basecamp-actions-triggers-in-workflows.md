---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006399-basecamp-actions-triggers-in-workflows
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우에서 Basecamp 연동하기 — 트리거와 액션(Basecamp Actions & Triggers)

Basecamp를 하이퍼클래스에 연결하면 프로젝트 생성, 할 일 등록, 팀 소통을 실시간으로 자동화할 수 있어요. 이 문서에서는 Basecamp에서 하이퍼클래스로 즉시 전달되는 트리거, 워크플로우에서 쓸 수 있는 Basecamp 액션, 연결 방법, 사용 사례, 과금 안내를 한 번에 정리했어요.

[동영상](https://www.youtube.com/embed/63NYWhGxmMI?&wmode=opaque)

## 워크플로우에서 쓰는 Basecamp 연동이란?

하이퍼클래스의 기본 제공 Basecamp 연동을 쓰면 Basecamp에서 일어난 활동에 바로 반응하고, Basecamp 작업을 워크플로우 안에서 직접 실행할 수 있어요.

- **트리거**: **New To-do**(새 할 일)나 **New Message Posted**(새 메시지 게시) 같은 Basecamp 트리거를 쓰면 활동이 생긴 순간 워크플로우가 시작돼요.
- **액션**: **Create Project**(프로젝트 만들기), **Create/Update To-do**(할 일 만들기/수정), **Create Message**(메시지 만들기), **Create Document**(문서 만들기) 같은 액션으로 온보딩, 할 일 관리, 고객 납품 과정을 간소화할 수 있어요.

## Basecamp 연동의 장점

- 업무 인계가 빨라져요: 딜이 납품 단계로 넘어가면 프로젝트, 할 일 목록, 할 일이 자동으로 만들어져요.
- 트리거가 즉시 실행돼요: 웹훅 기반 트리거라서 확인 주기를 기다릴 필요 없이 바로 실행돼요.
- 중복이 줄어요: "Find" 액션(Project/List/To-do/Person/Document)으로 먼저 찾아보고, 없을 때만 새로 만들 수 있어요.
- 요금제를 가리지 않아요: Basecamp 무료·유료 요금제 모두에서 쓸 수 있어요. 쓸 수 있는 기능은 Basecamp 요금제에 따라 달라요.
- 비용을 예측하기 쉬워요: Basecamp 트리거와 액션은 프리미엄 기능이라서 [워크플로우 Pro](../workflows-pro-plan-new-pricing-tiers.md) 요금제 기준으로 실행할 때마다 과금돼요. 에이전시는 선택에 따라 서브 계정에 다시 청구할 수 있어요.

## 트리거와 액션

### 트리거 (Basecamp → 하이퍼클래스)

Basecamp에서 아래 이벤트가 생기는 순간 연락처 등의 레코드가 워크플로우에 들어와요.

| 트리거 | 실행되는 때 |
| --- | --- |
| New To-do(새 할 일) | Basecamp에서 새 할 일이 만들어질 때 |
| New Comment Added(새 댓글 추가) | 할 일이나 메시지에 댓글이 달릴 때 |
| New Document(새 문서) | 새 문서가 만들어질 때 |
| New Activity(새 활동) | Basecamp 프로젝트에 새 활동이 생길 때(프로젝트 단위 이벤트) |
| New Message Posted(새 메시지 게시) | 프로젝트에 새 메시지가 게시될 때 |
| New To-do List(새 할 일 목록) | 새 할 일 목록이 만들어질 때 |

### 액션 (하이퍼클래스 → Basecamp)

워크플로우에 아래 액션을 넣으면 Basecamp 안의 항목을 만들거나, 수정하거나, 찾을 수 있어요.

| 액션 | 용도 / 사용 예 |
| --- | --- |
| Create Project(프로젝트 만들기) | 새 프로젝트를 만들어요. 빈 프로젝트로 만들거나, 지원되는 경우 템플릿으로 만들 수 있어요. |
| Create To-do List(할 일 목록 만들기) | 특정 프로젝트 안에 목록을 만들어요. |
| Create To-do(할 일 만들기) | 선택한 할 일 목록에 할 일을 추가해요(제목, 마감일, 담당자 등). |
| Update To-do(할 일 수정) | 기존 할 일의 제목, 마감일, 담당자, 상태 등을 바꿔요. |
| Create Message(메시지 만들기) | 프로젝트 메시지 보드에 글을 올려요. |
| Create Campfire Message(Campfire 메시지 만들기) | 프로젝트의 Campfire 대화방에 채팅 메시지를 보내요. |
| Create Document(문서 만들기) | 프로젝트에 텍스트 메모나 파일 항목을 만들어요. |
| Add Person to Project(프로젝트에 사람 추가) | 팀원이나 고객을 프로젝트에 추가해요. |
| Find Project(프로젝트 찾기) | 기존 프로젝트를 찾아 이후 단계에서 쓰고, 중복 생성을 막아요. |
| Find To-do List(할 일 목록 찾기) | 기존 할 일 목록을 찾아 뒤따르는 단계에 연결해요. |
| Find To-do(할 일 찾기) | 이름이나 ID로 할 일을 찾아서 안정적으로 수정할 수 있게 해요. |
| Find Document(문서 찾기) | 기존 문서를 찾아 연결하거나 수정해요. |
| Find Person(사람 찾기) | 추가하거나 담당자로 지정할 Basecamp 사용자·고객을 찾아요. |

## Basecamp 연동 설정하기

Basecamp는 두 가지 방법으로 연결할 수 있어요.

1. 트리거/액션 단계에서 연결하기
   - **자동화 > 워크플로우**에서 워크플로우를 열거나 새로 만드세요.
   - **+ Add Trigger**(+ 트리거 추가) 또는 **+ Add Action**(+ 액션 추가)을 누르고 **Basecamp**를 검색하세요.
   - Basecamp 트리거나 액션을 고른 뒤 **Connect Now**(지금 연결)를 누르세요.
   - Basecamp에 로그인하고 하이퍼클래스 접근을 승인하세요.

   ![트리거/액션 단계에서 Basecamp 연결하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057547751/original/AKqrLWY6rg1u7SlikflT-Nt_JAIUoCxYCw.png?1762265738)

2. **설정 > 연동**에서 연결하기
   - **설정 > 연동**으로 이동해 **Basecamp**를 찾은 뒤 OAuth 연결을 완료하세요.

   {% hint style="info" %}
   연결은 서브 계정별로 따로 해요. 앱을 설치하거나 일괄 설치해도 모든 서브 계정이 자동으로 연결되지는 않아요. Basecamp가 필요한 서브 계정마다 각각 승인해 주세요.
   {% endhint %}

   ![설정 > 연동에서 Basecamp 연결하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057547803/original/NhDc-5xITyJcKXF0SHxBvSrZOaONnWEk9A.png?1762265775)

## 첫 번째 워크플로우 만들기

1. 사용할 서브 계정에서 **자동화 > 워크플로우**로 이동해 **Create Workflow**(워크플로우 만들기)를 누르세요. 기존 워크플로우를 열어도 돼요.

   ![워크플로우 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057547881/original/D3_V9Kb0d_yu1u3zNKHrPOONI0QlsZmLkA.png?1762265810)
2. Basecamp 트리거(예: New To-do)를 추가하고, 필요하면 대상 프로젝트나 범위를 선택하세요.

   ![Basecamp 트리거 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057547912/original/zmOYumtJrnMy6nY80amqxGDtmUCiTS6OjQ.png?1762265831)

   ![트리거 대상 프로젝트 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057547940/original/TZdRZVxmPaEZdylzZhxTZvUdZwJU27qcqw.png?1762265852)
3. Basecamp 액션을 추가하세요. 예를 들어 Find Project → If Not Found(찾지 못한 경우) → Create Project 순서로 연결한 뒤, Create To-do List → Create To-do를 이어 붙일 수 있어요.

   ![Basecamp 액션 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057547984/original/y85Xxu12til6jE1PM0hm2QdHZc_DL209oA.png?1762265880)

   ![액션 연결 예시 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057548033/original/XPK2FXPjR53TxzHSb_1x8UaBWKitWcxQGg.png?1762265901)
4. 내부 후속 조치도 추가하세요(예: **Notify User**(사용자에게 알림), **Send Email**(이메일 보내기), **Update Opportunity**(기회 업데이트)).
5. **Publish**(게시)를 누르고 Basecamp에서 이벤트를 한 번 만들어 보세요(예: 할 일 하나 만들기). **Execution Logs**(실행 로그)에 기록이 나타나면 정상이에요.

## 사용 사례

### 사용 사례 1: 하이퍼클래스 폼에서 할 일과 프로젝트 문서 만들기

- 목표: 접수된 신청 폼을 Basecamp의 실제 업무와 문서로 바꿔요.
- 워크플로우 구성:
  - Trigger: **Form Submitted**(폼 제출)
  - Filter(필터): Form Name = "Project Intake Form"
  - Actions: **Create To-do**(Basecamp), **Create Document**(Basecamp), **Notify User**
- 예시: 고객이 "Project Intake" 폼을 제출하면 Basecamp에 "Client X 작업 공간 만들기" 할 일이 생기고, 폼 답변이 담긴 문서도 만들어져요. 팀에는 시작 알림이 가요.

![폼 제출로 할 일과 문서를 만드는 워크플로우 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057548792/original/37eojZUOd_6M3GRscwD3gYAcV3Thi1fFmw.png?1762266215)

### 사용 사례 2: "Closed Won" 시 AI 킥오프 브리프 만들기

- 목표: AI로 프로젝트 요약을 만들고, Basecamp에 저장한 뒤 팀에 알려요.
- 워크플로우 구성:
  - Trigger: **Opportunity Stage Changed**(기회 단계 변경됨) (단계 = "Closed Won", 계약 성사)
  - Filter(필터): Opportunity Stage = "Closed Won"
  - Actions: **GPT (OpenAI)** → **Create Document**(Basecamp) → **Notify User**
- 예시: 딜이 성사되면 AI가 기회 정보를 바탕으로 킥오프 브리프 초안을 써요. 브리프는 Basecamp 문서로 저장되고, 온보딩 팀에 알림이 가요.

![Closed Won 시 AI 킥오프 브리프를 만드는 워크플로우 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057551339/original/w9yYKJ6rlsUbWLFp6xmZDyPdrG59zravpw.png?1762267283)

### 사용 사례 3: 하이퍼클래스 폼에서 할 일 목록과 할 일 만들기

- 목표: 요청 폼이 제출될 때마다 새 목록과 첫 할 일을 만들어요.
- 워크플로우 구성:
  - Trigger: **Form Submitted**(폼 제출)
  - Filter(필터): 없음
  - Actions: **Create To-do List**(Basecamp) → **Condition**(조건) → **Create To-do**(Basecamp)
- 예시: 폼이 제출되면 "Website Redesign – Client ABC" 목록이 새로 만들어져요. 목록 생성에 성공하면 "디자이너 배정 및 킥오프 일정 잡기" 할 일이 추가돼서 바로 작업을 시작할 수 있어요.

![폼 제출로 할 일 목록과 할 일을 만드는 워크플로우 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057551439/original/Bm75Z4SbFhLo0XzZ_97Juo1ujHFZyICR6A.png?1762267329)

## 자주 묻는 질문

### Basecamp 유료 요금제가 필요한가요?
Basecamp 무료·유료 요금제 모두에서 연동을 쓸 수 있어요. 다만 고급 Basecamp 기능은 Basecamp 구독의 제한을 그대로 따라요.

### Basecamp와 하이퍼클래스 사이에 데이터를 양방향으로 동기화할 수 있나요?
현재는 한 방향만 지원해요. Basecamp에서 이벤트가 생길 때 워크플로우를 시작하거나, 하이퍼클래스에서 Basecamp 작업을 실행할 수 있어요. 양방향 동기화가 필요하면 Make나 Zapier 같은 중간 연결 서비스를 쓰세요.

### 하이퍼클래스에서 Basecamp 단계에 프리미엄 요금이 부과되나요?
네. Basecamp 트리거와 액션은 프리미엄이며, 계정의 기본 요율로 실행할 때마다 과금돼요. 에이전시 관리자는 선택에 따라 서브 계정에 다시 청구할 수 있어요.

### 템플릿으로 프로젝트를 만들 수 있나요?
네. Basecamp 계정에 템플릿이 있으면 **Create Project**로 템플릿에서 프로젝트를 만들 수 있어요.

### 실패한 원인은 어디서 확인하나요?
**Execution Logs**를 열어 해당 단계의 오류(예: 잘못된 ID, 권한 없음)를 확인하세요. 승인이 만료됐다면 **설정 > 연동**에서 Basecamp를 다시 연결한 뒤 테스트를 다시 실행하세요.

### Basecamp 계정을 여러 개 연결할 수 있나요?
네. 서브 계정마다 알맞은 Basecamp 계정으로 인증하고, 각 액션/트리거 단계에서 사용할 연결을 선택하세요. 선택한 계정을 바꾸면 계정에 따라 달라지는 필드가 다시 불러와지거나 초기화될 수 있어요.
