---

번역일: 2026-04-07
카테고리: 07-워크플로우 > 시작하기
---

# Airtable - 워크플로우의 액션 및 트리거

Airtable을 하이퍼클래스와 연결하여 데이터 동기화, 리드 수집, 프로젝트 운영을 자동화하는 네이티브 트리거와 액션을 활용하세요. 이 가이드는 지원되는 단계, 설정 방법, 예시, FAQ를 다루어 팀이 서드파티 도구 없이도 자신 있게 시작할 수 있도록 도와드립니다.

---

**목차**

- [워크플로우의 Airtable 연동이란?](#워크플로우의-airtable-연동이란)
- [Airtable 연동의 주요 이점](#airtable-연동의-주요-이점)
- [트리거 및 액션](#트리거-및-액션)
- [Airtable 연동 설정 방법](#airtable-연동-설정-방법)
- [Airtable 연결하기 (두 가지 방법)](#airtable-연결하기-두-가지-방법)
- [첫 번째 플로우 구축하기](#첫-번째-플로우-구축하기)
- [활용 사례](#활용-사례)
- [자주 묻는 질문](#자주-묻는-질문)

---

# **워크플로우의 Airtable 연동이란?**

하이퍼클래스의 네이티브 Airtable 연동을 사용하면 Airtable 레코드 변경에 반응하고 워크플로우에서 직접 Airtable 작업을 수행할 수 있습니다. Airtable 트리거를 사용하여 행이 생성되거나 업데이트될 때 실행을 시작하고, Airtable 액션(찾기/생성/업데이트/삭제)을 추가하여 CRM과 보드를 동기화하세요.

---

## **Airtable 연동의 주요 이점**

다음 이점들은 하이퍼클래스와 Airtable이 어떻게 협력하여 데이터를 더 빠르게 라우팅하고, 수동 작업을 줄이며, 운영을 하나의 자동화 허브에 중앙화하는지 보여줍니다.

- **손쉬운 데이터 일관성:** 레코드 변경 시 프로젝트 트래커와 CRM 데이터를 정렬 상태로 유지합니다.

- **네이티브 자동화:** 하이퍼클래스에서 직접 Airtable 단계를 실행하여 외부 커넥터를 대체합니다.

- **예측 가능한 청구:** Airtable 단계는 프리미엄 실행으로 하위 계정에 재청구할 수 있습니다.

- **빠른 트리거 감지:** 폴링이 새 레코드나 업데이트된 레코드를 약 5분마다 Airtable에서 확인합니다.

- **Airtable 무료 플랜에서 작동:** Airtable을 업그레이드하지 않고도 시작할 수 있습니다(Airtable 자체 제한은 여전히 적용).

---

## 트리거 및 액션

이 개요는 Airtable 트리거와 액션을 한 곳에 통합하여 기능을 빠르게 비교하고 각 단계가 다운스트림 매핑을 위해 반환하는 내용을 확인할 수 있습니다.

| 유형 | 이름 | 설명 |
|------|------|------|
| 트리거 | New Record | 선택한 Airtable 테이블에 새 행이 추가될 때 실행됩니다. 폴링(~5분)을 통해 감지합니다. |
| 트리거 | Updated Record | 선택한 테이블의 기존 행이 변경될 때 실행됩니다. 폴링(~5분)을 통해 감지합니다. |
| 액션 | Find Record | Record ID 또는 필드 조건으로 레코드를 찾고, 값을 **커스텀 값**으로 다운스트림 단계에 반환합니다. |
| 액션 | Create Record | 워크플로우에서 매핑한 필드로 선택한 테이블에 새 행을 생성합니다. |
| 액션 | Update Record | 식별된 행(예: Record ID 또는 이전 찾기 결과를 통해)의 하나 이상의 필드를 업데이트합니다. |
| 액션 | Delete Record | 선택한 테이블에서 행을 영구적으로 제거합니다. |

---

## **Airtable 연동 설정 방법**

깔끔한 연결과 올바른 매핑은 안정적인 등록과 액션을 보장합니다. 아래 옵션을 사용하여 빠르게 연결하고 실제 테스트로 검증하세요.

### **Airtable 연결하기 (두 가지 방법)**

- **트리거/액션 단계에서**

**Automations(자동화) → Workflows(워크플로우)**에서 **+ Add Trigger(트리거 추가)**를 클릭하고 **Airtable**을 검색하거나 **+ Add Action(액션 추가)**을 클릭하고 **Airtable**을 검색하세요.

- **New Record**/**Updated Record**(트리거) 또는 Airtable 액션을 선택한 후 **Connect Now(지금 연결)**을 클릭하세요.

- Airtable에 로그인(OAuth)하거나 Personal Access Token을 추가하고(해당하는 경우) 하이퍼클래스를 승인하세요.

![Airtable 연결 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057714153/original/fHHeGQM4qi2T66Tqw7BqeyuK9nKPg05peQ.png?1762424279)

- **Settings(설정) → Integrations(연동)에서**

**Settings(설정) → Integrations(연동)**으로 이동하여 **Airtable**을 찾아 연결을 완료하세요(연결은 하위 계정별로 설정됩니다).

![연동 설정 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057714208/original/hY2HNhxIyTf9RhSqQ-o2MffxcZ4KvZx_FQ.png?1762424308)

## **첫 번째 플로우 구축하기:**

- 원하는 하위 계정에서 **Automations(자동화) → Workflows(워크플로우)**로 이동하여 **Create Workflow(워크플로우 생성)**을 클릭하세요(또는 기존 워크플로우를 열어주세요).

![워크플로우 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057714378/original/KjhlQg02wPCdc_NE6KQhQIc8yzxvVKmSyg.png?1762424411)

- **New Record** 또는 **Updated Record**(Airtable)를 추가하고 **Base**와 **Table**을 선택하세요. **Test Trigger(트리거 테스트)**를 클릭하여 샘플을 가져오세요.

![트리거 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057714557/original/gX_e92ZV1yEeSGg-8jcK6JHz7QHQNjCwbg.png?1762424472)

- Airtable 액션(예: **Find Record**, **Update Record** 또는 **Create Record**)을 추가하세요. 트리거 샘플에서 이메일/전화번호/ID를 매핑하세요.

![액션 설정 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057714646/original/-a2l0jJcqEgLNIKAjAaULd9TnkyTZoIK-Q.png?1762424522)

![액션 설정 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057714655/original/EzO5Z2W1-MMyfB0jkdqKSBnKxSaCXpXSSQ.png?1762424539)

- 후속 액션(예: **Send Email(이메일 발송)**, **Notify User(사용자 알림)**, **Create Opportunity(기회 생성)**)을 추가한 후 **Publish(발행)**하고 **Execution Logs(실행 로그)**에서 항목을 확인하기 위해 한 번 테스트하세요.

---

## **활용 사례**

실제 패턴들은 Airtable 단계를 워크플로우 로직과 결합하여 팀에 알림을 보내고, 시스템 간 데이터를 동기화하며, AI로 작업을 생성하는 방법을 보여줍니다.

### 활용 사례 1: Airtable 레코드에서 할 일 생성 및 팀 알림

**목표:** 새 Airtable 레코드가 생성되거나 업데이트될 때 팀에 알림을 보냅니다.

**워크플로우 설정:**

- **트리거:** Airtable → **New Record** *(변경 시 알림을 선호한다면 ****Updated Record**** 사용)*

- **액션:**
  - **Find Record (Airtable)**
  - **Internal Notification → Email**

**예시:**
새 클라이언트 프로젝트가 Airtable에 추가됨 → 하이퍼클래스 워크플로우가 레코드를 찾음 → 프로젝트 매니저에게 내부 이메일이 발송됨:
"새로운 Airtable 레코드가 생성되었습니다. 프로젝트 ID: {{record.id}}. 세부사항을 검토해주세요."

![할 일 생성 워크플로우](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057712753/original/boyesHaGs99c2pZ8Sg_RuVqvnRJq2Yxohw.png?1762423706)

### 활용 사례 2: Airtable의 조건부 업데이트 및 알림

**목표:** Airtable을 하이퍼클래스와 외부 도구에서 생성된 연락처나 리드와 동기화합니다.

**워크플로우 설정:**

- **트리거:**
  - **Contact Changed** *(태그 = "New"와 함께)*
  - **Contact Created** *(유형 = 리드)*
  - **Facebook Lead Form Submitted** *(폼 = "Form 1")*

- **액션:**
  - **Find Record (Airtable)**
  - **찾은 경우 → Update Record**
  - **찾지 못한 경우 → Create Record**

**예시:**
Facebook 리드 폼이 제출됨 → 하이퍼클래스가 Airtable에 리드가 존재하는지 확인 → 찾은 경우 최신 전화번호/이메일로 레코드 업데이트 → 찾지 못한 경우 새 Airtable 레코드 생성.

![조건부 업데이트 워크플로우](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057713549/original/ualwcW9wQzebY3T9PGnoODRv9sSujdkbww.png?1762424047)

### 활용 사례 3: Airtable 브리프에서 콘텐츠 제작 자동화

**목표:** Airtable에 추가된 새 브리프를 기반으로 콘텐츠를 생성하고 다운스트림 작업을 생성합니다.

**워크플로우 설정:**

- **트리거:** Airtable → **New Record** (테이블: "Content Briefs")

- **액션:**
  - **Find Record (Airtable)**
  - **Generate Content with AI (workflows)**
  - **Create Task (ClickUp)**
  - **Send Internal Notification (workflows)**
  - **Send Email (workflows)**

**예시:** 새 브리프가 추가되면 워크플로우가 초안 카피를 생성하고, 콘텐츠가 채워진 ClickUp 작업을 만들며, 팀과 클라이언트에게 알림을 보냅니다.

![콘텐츠 제작 자동화 워크플로우](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057713569/original/ttdTf_RhEnpHwHEBMrx9obFQAyZIaId63w.png?1762424071)

---

## 자주 묻는 질문

**Q: 유료 Airtable 플랜이 필요한가요?**
무료 및 유료 Airtable 계정 모두에서 연동이 작동합니다. Airtable 자체 플랜 제한(예: 행 제한, 첨부 파일 저장소)은 여전히 적용됩니다.

**Q: 이 연동은 모든 사용자에게 제공되나요?**
네, 하이퍼클래스에서 워크플로우와 연동에 접근할 수 있는 모든 계정에서 사용할 수 있습니다.

**Q: Airtable 단계는 하이퍼클래스에서 프리미엄으로 청구되나요?**
네. Airtable 트리거와 액션은 프리미엄으로 계정의 표준 요율에 따라 실행당 청구됩니다. 에이전시는 선택적으로 하위 계정에 재청구할 수 있습니다.

**Q: 새로운 행이나 업데이트된 행은 어디에 저장되나요?**
모든 액션은 연결된 Airtable 계정을 사용하여 해당 단계에서 선택한 Base와 Table에서 읽기/쓰기를 수행합니다.

**Q: 실패 문제는 어떻게 해결하나요?**
특정 단계 오류(예: 잘못된 테이블/필드, 권한 없음)에 대해서는 **Execution Logs(실행 로그)**를 확인하세요. 인증이 만료된 경우 Airtable을 다시 연결하고 테스트를 다시 실행하세요.

---

*원문 최종 수정: Fri, 12 Dec, 2025 at 7:33 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*