---
원문: https://help.gohighlevel.com/support/solutions/articles/155000005674-airtable-actions-triggers-in-workflows
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우에서 Airtable 쓰기 — 트리거(New Record, Updated Record)와 액션

Airtable을 하이퍼클래스에 연결하면 Airtable 레코드가 바뀔 때 워크플로우를 시작하고, 워크플로우 안에서 Airtable 작업을 바로 처리할 수 있어요. 이 문서에서는 지원하는 트리거와 액션, 연결 방법, 활용 예시, 자주 묻는 질문을 안내해요.

## 워크플로우의 Airtable 연동이란?

하이퍼클래스는 Airtable을 기본으로 연동해요. Airtable 레코드가 바뀌면 워크플로우가 반응하고, 워크플로우 안에서 Airtable 작업을 직접 실행할 수 있어요.

Airtable 트리거를 쓰면 행이 새로 생기거나 수정될 때 워크플로우를 시작할 수 있어요. Airtable 액션(Find, Create, Update, Delete)을 추가하면 CRM과 Airtable 보드를 같은 상태로 맞출 수 있어요.

---

## Airtable 연동의 장점

하이퍼클래스와 Airtable을 함께 쓰면 데이터를 더 빠르게 전달하고, 수동 작업을 줄이고, 운영을 한곳에서 관리할 수 있어요.

- 데이터를 일관되게 유지해요: 레코드가 바뀔 때마다 프로젝트 트래커와 CRM 데이터를 맞춰 줘요.
- 기본 제공 자동화: 외부 커넥터 없이 하이퍼클래스 안에서 Airtable 단계를 바로 실행해요.
- 예측 가능한 과금: Airtable 단계는 프리미엄 실행으로 집계되며, 서브 계정에 재청구할 수 있어요.
- 빠른 트리거 감지: 약 5분마다 Airtable를 확인해 새 레코드나 수정된 레코드를 찾아요.
- Airtable 무료 플랜에서도 사용 가능: Airtable를 업그레이드하지 않아도 시작할 수 있어요. 단, Airtable 자체의 제한은 그대로 적용돼요.

---

## 트리거와 액션

아래 표에서 Airtable 트리거와 액션의 기능, 그리고 각 단계가 다음 단계에 넘겨 주는 값을 한눈에 비교할 수 있어요.

| 구분 | 이름 | 설명 |
| --- | --- | --- |
| 트리거 | **New Record**(새 레코드) | 선택한 Airtable 테이블에 새 행이 추가되면 실행돼요. 약 5분마다 확인해서 감지해요. |
| 트리거 | **Updated Record**(레코드 수정) | 선택한 테이블의 기존 행이 바뀌면 실행돼요. 약 5분마다 확인해서 감지해요. |
| 액션 | **Find Record**(레코드 찾기) | Record ID나 필드 조건으로 레코드를 찾아요. 찾은 값은 **Custom Values**(커스텀 값)로 다음 단계에 넘겨요. |
| 액션 | **Create Record**(레코드 만들기) | 워크플로우에서 연결한 필드 값으로 선택한 테이블에 새 행을 만들어요. |
| 액션 | **Update Record**(레코드 수정하기) | 지정한 행의 필드를 하나 이상 수정해요. 예를 들어 Record ID나 앞선 Find 결과로 행을 지정해요. |
| 액션 | **Delete Record**(레코드 삭제) | 선택한 테이블에서 행을 완전히 삭제해요. |

---

## Airtable 연동 설정하기

연결과 필드 매핑을 정확히 해 두면 워크플로우 시작과 액션이 안정적으로 동작해요. 아래 방법 중 편한 쪽으로 연결한 다음, 실제로 테스트해서 확인하세요.

### Airtable 연결하기 (두 가지 방법)

1. 트리거/액션 단계에서 연결하기

   - **자동화 > 워크플로우**에서 **+ Add Trigger**(트리거 추가)를 클릭하고 **Airtable**을 검색해요. 또는 **+ Add Action**(액션 추가)을 클릭하고 **Airtable**을 검색해요.
   - 트리거(**New Record**/**Updated Record**) 또는 Airtable 액션을 선택한 다음, **Connect Now**(지금 연결)를 클릭해요.
   - Airtable에 로그인하거나(OAuth), 필요한 경우 개인 액세스 토큰(Personal Access Token)을 입력한 뒤 하이퍼클래스에 권한을 승인해요.

     ![트리거/액션 단계에서 Airtable 연결하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057714153/original/fHHeGQM4qi2T66Tqw7BqeyuK9nKPg05peQ.png?1762424279)
2. **설정 > 연동**에서 연결하기

   - **설정 > 연동**으로 이동해서 **Airtable**을 찾아 연결을 완료해요. 연결은 서브 계정마다 따로 해요.

     ![설정 > 연동에서 Airtable 연결하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057714208/original/hY2HNhxIyTf9RhSqQ-o2MffxcZ4KvZx_FQ.png?1762424308)

## 첫 번째 워크플로우 만들기

1. 사용할 서브 계정에서 **자동화 > 워크플로우**로 이동해 **Create Workflow**(워크플로우 만들기)를 클릭해요. 이미 있는 워크플로우를 열어도 돼요.

   ![워크플로우 만들기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057714378/original/KjhlQg02wPCdc_NE6KQhQIc8yzxvVKmSyg.png?1762424411)
2. Airtable의 **New Record** 또는 **Updated Record**를 추가하고 **Base**(베이스)와 **Table**(테이블)을 선택해요. **Test Trigger**(트리거 테스트)를 클릭하면 샘플 데이터를 가져와요.

   ![트리거 설정과 테스트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057714557/original/gX_e92ZV1yEeSGg-8jcK6JHz7QHQNjCwbg.png?1762424472)
3. Airtable 액션을 추가해요. 예를 들어 **Find Record**를 넣고, 이어서 **Update Record** 또는 **Create Record**를 넣어요. 트리거 샘플에서 이메일, 전화번호, ID 값을 가져와 연결해요.

   ![Airtable 액션 추가 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057714646/original/-a2l0jJcqEgLNIKAjAaULd9TnkyTZoIK-Q.png?1762424522)

   ![Airtable 액션 추가 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057714655/original/EzO5Z2W1-MMyfB0jkdqKSBnKxSaCXpXSSQ.png?1762424539)
4. 후속 액션을 추가해요. 예를 들어 **Send Email**(이메일 보내기), **Notify User**(사용자에게 알림), **Create Opportunity**(기회 만들기)가 있어요. 그다음 **Publish**(게시)하고 한 번 테스트해서 **Execution Logs**(실행 로그)에 기록이 남았는지 확인해요.

---

## 사용 사례

Airtable 단계를 워크플로우 로직과 함께 쓰는 실제 예시예요. 팀에 알림을 보내고, 시스템 간 데이터를 맞추고, AI로 작업을 만들어 낼 수 있어요.

### 사용 사례 1: Airtable 레코드로 팀에 알림 보내기

목표: Airtable에 새 레코드가 만들어지거나 수정되면 팀에 알려요.

워크플로우 구성:

- 트리거: Airtable → **New Record** (변경 시에 알리려면 **Updated Record**를 쓰세요)
- 액션:

  - **Find Record (Airtable)**
  - **Internal Notification → Email**(내부 알림 → 이메일)

예시:
Airtable에 새 클라이언트 프로젝트가 추가돼요. 하이퍼클래스 워크플로우가 그 레코드를 찾고, 프로젝트 매니저에게 내부 이메일을 보내요.
“Airtable에 새 레코드가 만들어졌어요. 프로젝트 ID: {{record.id}}. 세부 내용을 확인해 주세요.”

![Airtable 레코드로 팀에 알림 보내는 워크플로우](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057712753/original/boyesHaGs99c2pZ8Sg_RuVqvnRJq2Yxohw.png?1762423706)

### 사용 사례 2: 조건에 따라 Airtable 업데이트하고 알리기

목표: 하이퍼클래스와 외부 도구에서 생성된 연락처나 리드를 Airtable와 같은 상태로 유지해요.

워크플로우 구성:

- 트리거:

  - **Contact Changed**(연락처 변경) (Tag = "New")
  - **Contact Created**(연락처 생성) (Type = Lead)
  - **Facebook Lead Form Submitted**(Facebook 리드 폼 제출) (Form = "Form 1")
- 액션:

  - **Find Record (Airtable)**
  - 찾았으면 → **Update Record**
  - 못 찾았으면 → **Create Record**

예시:
Facebook 리드 폼이 제출돼요. 하이퍼클래스가 Airtable에 해당 리드가 있는지 확인해요. 있으면 최신 전화번호와 이메일로 레코드를 수정하고, 없으면 Airtable에 새 레코드를 만들어요.

![조건에 따라 Airtable를 업데이트하는 워크플로우](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057713549/original/ualwcW9wQzebY3T9PGnoODRv9sSujdkbww.png?1762424047)

### 사용 사례 3: Airtable 브리프로 콘텐츠 제작 자동화하기

목표: Airtable에 새 브리프가 추가되면 콘텐츠를 생성하고 후속 작업을 만들어요.

워크플로우 구성:

- 트리거: Airtable → **New Record** (Table: “Content Briefs”)
- 액션:

  - **Find Record (Airtable)**
  - **Generate Content with AI (workflows)**(AI로 콘텐츠 생성)
  - **Create Task (ClickUp)**(ClickUp 작업 만들기)
  - **Send Internal Notification (workflows)**(내부 알림 보내기)
  - **Send Email (workflows)**(이메일 보내기)

예시: 새 브리프가 추가되면 워크플로우가 초안 문구를 생성해요. 그 내용으로 ClickUp 작업을 만들고, 팀과 클라이언트에게 알려요.

![Airtable 브리프로 콘텐츠 제작을 자동화하는 워크플로우](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057713569/original/ttdTf_RhEnpHwHEBMrx9obFQAyZIaId63w.png?1762424071)

---

## 자주 묻는 질문

### Airtable 유료 플랜이 꼭 필요한가요?
무료 계정과 유료 계정 모두 연동할 수 있어요. 다만 행 수 제한이나 첨부파일 저장 용량처럼 Airtable 자체의 플랜 제한은 그대로 적용돼요.

### 모든 사용자가 이 연동을 쓸 수 있나요?
네. 하이퍼클래스에서 워크플로우와 연동 기능을 쓸 수 있는 모든 계정에서 사용할 수 있어요.

### Airtable 단계도 프리미엄으로 과금되나요?
네. Airtable 트리거와 액션은 프리미엄이며, 실행할 때마다 계정의 기본 요금으로 과금돼요. 에이전시는 필요하면 서브 계정에 재청구할 수 있어요.

### 새 행이나 수정된 행은 어디에서 읽고 쓰나요?
모든 액션은 해당 단계에서 선택한 Base와 Table에서 읽고 써요. 연결된 Airtable 계정을 사용해요.

### 실패 원인은 어떻게 확인하나요?
**Execution Logs**에서 단계별 오류를 확인하세요. 예를 들어 테이블이나 필드가 잘못됐거나 권한이 없는 경우예요. 인증이 만료됐다면 Airtable를 다시 연결하고 테스트를 다시 실행하세요.
