---
원문: /support/solutions/articles/155000005671-clickup-actions-triggers-in-workflows
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# ClickUp 연동 — 워크플로우 트리거와 액션(ClickUp Actions & Triggers)

하이퍼클래스 워크플로우를 ClickUp과 연결하면 별도 외부 도구 없이 태스크를 만들고, 스페이스·폴더·리스트를 구성하고, AI가 쓴 문서를 저장할 수 있어요. 이 문서에서는 연동이 무엇인지, 어떤 점이 좋은지, 어떻게 설정하는지 알려 드려요. CRM과 프로젝트 진행 상황을 같은 상태로 맞추는 데 도움이 돼요.

---

## ClickUp 트리거와 액션이란?

ClickUp 트리거와 액션은 하이퍼클래스 자동화를 ClickUp의 태스크·문서 플랫폼과 이어 주는 기능이에요.

- 트리거는 ClickUp에서 일어난 일(새 태스크 생성, 상태 변경 등)을 감지해서 하이퍼클래스 워크플로우를 시작해요.
- 액션은 하이퍼클래스의 데이터를 ClickUp으로 보내요. 태스크, 스페이스, 문서를 만드는 식이에요.

양방향으로 연결되기 때문에 수작업이 줄고, 고객 프로젝트 정보가 실시간으로 최신 상태를 유지해요.

---

## ClickUp 연동의 주요 장점

어떤 효과가 있는지 알면 어디부터 적용할지 정하기 쉬워요. 아래는 프로젝트 진행이 CRM 단계와 맞아야 하는 에이전시·서비스 업무에서 자주 얻는 장점이에요.

- 이중 입력 없음: 고객·프로젝트 정보가 하이퍼클래스와 ClickUp 사이를 자동으로 오가서 수동 업데이트가 줄어요.
- 빠른 온보딩: 딜이 주요 단계에 도달하는 즉시 스페이스, 폴더, 리스트, 태스크가 만들어져요.
- AI로 문서 작성: 하이퍼클래스의 AI 기능으로 콘텐츠를 만들고 바로 ClickUp Docs에 저장해 검토할 수 있어요.
- 깔끔한 인수인계: 댓글과 상태 업데이트가 팀이 실제로 일하는 곳에 남아서 소통 오류가 줄어요.
- 관리할 도구 감소: 웹훅이나 Zapier로 만든 여러 자동화를 워크플로우 기본 스텝으로 대체할 수 있어요. 실행 내역도 확인할 수 있어요.
- 비용 관리(프리미엄): 프리미엄 실행은 사용량 기준으로 과금되고, 설정을 켜면 고객에게 재청구할 수 있어요.

---

## 사용 전 준비 사항과 권한

계정 수준의 몇 가지 설정에 따라 ClickUp 스텝을 추가할 수 있는지, 비용이 어떻게 청구되는지가 달라져요. 워크플로우를 만들기 전에 아래 내용을 확인하세요.

- 자동화를 실행할 서브 계정에서 **워크플로우**와 **연동**을 쓸 수 있어야 해요.
- 대상 워크스페이스에서 항목을 만들거나 수정할 권한이 있는 ClickUp 사용자가 필요해요. 액션은 ClickUp 권한을 그대로 따라요.
- 프리미엄 액션·트리거를 실행하려면, 그리고 사용량을 고객에게 재청구하려면 에이전시에서 **워크플로우 - 프리미엄 기능**을 켜야 할 수 있어요. 자세한 내용은 워크플로우 프리미엄 기능 켜기와 재청구를 참고하세요.

---

## ClickUp 계정 연결하기

ClickUp의 공식 OAuth 방식으로 승인해요. 이렇게 하면 웹훅으로 이벤트를 받을 수 있고, 액션이 사용자 권한으로 ClickUp 데이터를 읽고 쓸 수 있어요.

1. 하이퍼클래스에서 **자동화 > 워크플로우**를 열고 **ClickUp** 액션이나 트리거를 아무거나 추가해요.
   - 아직 연결하지 않았다면 **Connect Now**(지금 연결)를 클릭하고 ClickUp에 로그인해 접근을 승인하세요.
   - 이미 연결했다면 스텝 안의 필드가 바로 불러와져요.

   ![ClickUp 스텝에서 지금 연결 버튼을 누르는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056698223/original/zC74oAXM3UU1j02ABVYQmiu5Va6coh8_iQ.png?1761228082)
2. 다른 방법으로는 서브 계정의 **설정 > 연동 > ClickUp > 연결**로 들어가도 돼요.

   ![서브 계정 설정의 연동에서 ClickUp 연결 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056698333/original/9bQTwz8IfjsgKQ6Fr4kGiMr3T9njChVYOw.png?1761228154)

---

## 사용할 수 있는 트리거 (ClickUp → 하이퍼클래스)

ClickUp이 웹훅 이벤트를 보낼 때마다 트리거가 작동해요. 필터로 워크스페이스나 리스트를 지정하면 불필요한 실행을 막을 수 있어요.

| 트리거 | 하는 일 |
| --- | --- |
| **New Task**(새 태스크) | 새 태스크가 만들어지면 작동해요. |
| **Task Changes**(태스크 변경) | 태스크가 수정되면(상태, 마감일 등) 작동해요. |
| **New List**(새 리스트) | 새 리스트가 만들어지면 작동해요. |
| **New Folder**(새 폴더) | 새 폴더가 만들어지면 작동해요. |
| **New Comment on a Task**(태스크 새 댓글) | 누군가 태스크에 댓글을 달면 작동해요. |
| **New Attachment Added to Task**(태스크 첨부파일 추가) | 태스크에 첨부파일이 추가되면 작동해요. |
| **New Reaction on Chat Message**(채팅 메시지 새 반응) | 공개 채널 메시지에 누군가 반응하면 작동해요. |
| **New Reaction on Task Comment**(태스크 댓글 새 반응) | 누군가 태스크 댓글에 반응하면 작동해요. |
| **New Time Entry**(새 시간 기록) | 태스크에 시간이 기록되면 작동해요. |

---

## 사용할 수 있는 액션 (하이퍼클래스 → ClickUp)

액션은 워크플로우 안에서 실행되어 ClickUp의 항목을 만들거나 수정해요. 아래 이름은 워크플로우 빌더 화면과 같아요.

| 액션 | 용도 |
| --- | --- |
| **Create Task**(태스크 만들기) | 이름, 마감일, 담당자 등을 지정해 태스크를 만들어요. |
| **Update Task**(태스크 수정) | 기존 태스크의 상태, 마감일, 우선순위 등을 바꿔요. |
| **Archive or Delete Task**(태스크 보관 또는 삭제) | 항목을 보관하거나 완전히 삭제해요. |
| **Create Space**(스페이스 만들기) | 워크스페이스/팀 스페이스를 만들어요. |
| **Create Folder**(폴더 만들기) | 리스트를 정리할 폴더를 추가해요. |
| **Create List**(리스트 만들기) | 태스크를 담을 새 리스트를 만들어요. |
| **Post Task Comment**(태스크 댓글 등록) | 태스크에 댓글을 달아요. |
| **Post Attachment**(첨부파일 등록) | 태스크에 파일을 업로드해요. |
| **Create New Document**(새 문서 만들기) | ClickUp에 문서를 만들어요. |
| **Edit Document Page**(문서 페이지 편집) | 기존 문서의 페이지를 수정해요. |
| **Create New Document Page**(새 문서 페이지 만들기) | 기존 문서에 새 페이지를 추가해요. |
| **Create Custom Field**(커스텀 필드 만들기) [출시 예정] | 스페이스/폴더/태스크에 커스텀 필드를 추가해요. |
| **Update Custom Field Value**(커스텀 필드 값 수정) [출시 예정] | 기존 커스텀 필드의 값을 설정해요. |
| **Find Task by ID**(ID로 태스크 찾기) | ID로 태스크를 찾아요. |
| **Find Documents**(문서 찾기) | 문서를 검색해요. |
| **Find Custom Fields**(커스텀 필드 찾기) | 커스텀 필드를 찾아요. |
| **Find a List of All Tasks**(전체 태스크 목록 찾기) | 워크스페이스/리스트의 모든 태스크를 가져와요. |
| **Find User by Name or Email**(이름 또는 이메일로 사용자 찾기) | 사용자를 찾아요. |

---

## ClickUp 트리거·액션 설정하기

아래 순서는 계정 연결부터 방향 선택, 필드 매핑, 테스트, 게시까지 이어지는 기본 절차예요. 어떤 파이프라인 단계나 프로젝트 템플릿에도 맞춰 쓸 수 있어요.

1. 워크플로우를 열어요.

   **자동화 > 워크플로우**로 이동해 **+ New Workflow**(새 워크플로우)를 클릭하거나 기존 워크플로우를 열어요.

   ![워크플로우 목록에서 새 워크플로우를 만드는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056563322/original/oBVlC-MdURl-P7G_AeqopEAluiVDfg5qkQ.png?1761129355)
2. ClickUp을 연결해요.

   워크플로우에 **ClickUp** 스텝을 추가하고 **Connect Now**를 클릭하거나, **설정 > 연동 > ClickUp > 연결**로 이동해 OAuth로 승인하세요.

   ![ClickUp 연결을 승인하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056563354/original/6Y2pFx9ZsNJ_09OJdf-zGUM1YNSl6j9bGg.png?1761129378)
3. 데이터가 흐를 방향을 선택해요.

   ClickUp → 하이퍼클래스(트리거): ClickUp에서 일이 생길 때 하이퍼클래스 워크플로우를 시작하려면 **ClickUp** 트리거를 추가하세요(예: **New Task**, **Task Changes**).

   ![ClickUp 트리거를 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056563404/original/9AQMRWvJwFGSWV8i1JKIC62ohsgfdbYYoA.png?1761129398)
4. 하이퍼클래스 → ClickUp(액션): 하이퍼클래스 워크플로우에서 ClickUp의 작업을 실행해요.

   **ClickUp** 액션을 추가하세요(예: **Create Task**, **Create List**, **Create New Document**). 해당하는 경우 대상 **Workspace**(워크스페이스)와 **List**(리스트)를 고르고, 하이퍼클래스의 연락처·기회·폼 값을 필드에 연결(매핑)하세요.

   ![ClickUp 액션에서 필드를 매핑하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056563502/original/9vHaGkI0_Mk8JdAy766UxzHSU9Qk4V2lIw.png?1761129440)
5. 순서, 조건, 안전장치를 설정해요.

   - **If/Else**(조건 분기) 필터로 파이프라인 단계, 서비스 유형, 태그에 따라 흐름을 나눠요.
   - 다음 액션 전에 ClickUp 항목이 먼저 만들어져 있어야 하면 **Wait**(대기) 스텝을 넣어요. 예를 들어 **Create List** 뒤에 대기를 넣고 나서 태스크를 만들어요.
   - 한꺼번에 많이 만들 때는 액션 사이에 간격을 두어 요청이 몰려 한도(rate limit)에 걸리지 않게 하세요.
6. 테스트하고 확인해요.

   - 트리거: 지정한 ClickUp 영역에서 작은 테스트 이벤트를 만들어 보세요.
   - 액션: 테스트용 데이터로 워크플로우를 실행해 보세요.
   - **Run Logs**(실행 로그) / **Enrollment History**(등록 기록)에서 입력값, 출력값, 반환된 ID를 확인하고 매핑이나 권한 문제를 고치세요. 자세한 내용은 [워크플로우 실행 로그·등록 기록 개선](workflows-improved-execution-logs-enrollment-history.md)을 참고하세요.
7. 게시해요.

   - 워크플로우에서 **Publish**(게시)를 클릭하세요.

---

## 활용 사례

### 사례 1: 하이퍼클래스 폼 제출로 ClickUp 태스크 만들기

목표: 하이퍼클래스 폼 제출 내용을 바로 처리할 수 있는 ClickUp 태스크로 바꿔요.

워크플로우 구성:

- 트리거: **Form Submitted**(폼 제출)
- 필터: **Form Name** = “고객 온보딩 폼”
- 액션: **Create Task**(ClickUp), **Add Task Comment**(ClickUp)
예시:
고객이 요구 사항을 적어 온보딩 폼을 제출해요. → ClickUp의 “고객 셋업” 리스트에 태스크가 만들어져요. → 고객이 기대하는 내용이 댓글로 추가돼요.

![폼 제출로 ClickUp 태스크를 만드는 워크플로우](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052402986/original/E4p7Hl7VD6cOsKB7GsViphdXRj0ObqsxgA.png?1756216324)

### 사례 2: AI로 제안서 문서 자동 생성하기

목표: 기회의 단계가 바뀌면 AI로 맞춤 제안서, 브리프, 요약본 초안을 쓰고 ClickUp에 문서로 저장해요.

워크플로우 구성:

- 트리거: **Opportunity Status Changed**(기회 상태 변경)
- 필터: **Stage** = “제안 요청”(또는 해당하는 다른 파이프라인 단계)
- 액션:

  1. **GPT powered by OpenAI**(OpenAI 기반 GPT) → 제안서 내용을 생성해요(예: 고객별 요약, 산출물, 가격 개요).
  2. **Create New Document**(새 문서 만들기, ClickUp) → AI가 만든 제안서를 ClickUp의 “영업 문서” 폴더에 저장해요.

예시:
딜이 “제안서 발송” 단계로 넘어가요.→ GPT가 범위, 산출물, 가격을 담은 “{{contact.name}} 제안서”를 만들어요. → ClickUp에 새 문서가 자동으로 만들어지고 영업팀과 공유되어 검토를 받아요.

![AI로 제안서 문서를 만드는 워크플로우](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052403321/original/COVIdrRjx24oDSB-8bSkbeJ1V0M23NxuDg.png?1756216503)

### 사례 3: 기회 유형에 따라 프로젝트 스페이스 자동 구성하기

목표: 딜이 새 단계로 넘어갈 때마다 ClickUp에 프로젝트 공간을 자동으로 만들고, 서비스 유형(랜딩 페이지, SEO, Google Ads)에 맞는 태스크와 알림을 설정해요.

워크플로우 구성:

- 트리거: **Pipeline Stage Changed**(파이프라인 단계 변경)
- 액션: ClickUp에 **Create Space**(스페이스 만들기)를 실행해요. 이름은 고객/기회 이름으로 지정해요.
- 조건 분기:

  - 랜딩 페이지 분기 → **Opportunity Name** = “Landing Page”인 경우

    - **Create List**: “랜딩 페이지 프로젝트”
    - **Create Task**: “랜딩 페이지 디자인”
    - 담당 팀에 **Internal Notification**(내부 알림)
  - SEO 분기 → **Opportunity Name** = “SEO”인 경우

    - **Create List**: “SEO 셋업”
    - **Create Task**: “키워드 조사 및 사이트 점검”
    - SEO 팀에 **Internal Notification**
  - Google Ads 분기 → **Opportunity Name** = “Google\_Ads”인 경우

    - **Create List**: “Google Ads 캠페인”
    - **Create Task**: “캠페인 셋업 및 트래킹”
    - Ads 팀에 **Internal Notification**
  - **None** 분기 → 조건에 맞지 않으면 워크플로우를 끝내요.

예시:
딜이 “계약 체결” 단계로 이동해요. 기회가 SEO 건이면 “[고객명] - SEO 프로젝트”라는 ClickUp 스페이스가 새로 만들어져요. 그 안에 “SEO 셋업” 리스트가 생기고, 첫 태스크로 “키워드 조사 및 사이트 점검”이 추가돼요. SEO 매니저에게 내부 알림이 가서 프로젝트를 바로 시작할 수 있어요.

---

## 자주 묻는 질문

### 어떤 ClickUp 요금제가 필요한가요?
무료 요금제와 유료 요금제 모두에서 연동할 수 있어요. 시간 추적이나 일부 커스텀 필드 기능처럼 유료 ClickUp 요금제가 필요한 기능도 있어요.

### 연결할 수 있는 ClickUp 워크스페이스는 몇 개인가요?
서브 계정에 맞는 ClickUp 워크스페이스를 연결하세요. 액션과 권한은 연결한 워크스페이스의 승인을 따라요.

### 마감일을 동적으로 지정할 수 있나요?
네. **Due Date**(마감일) 입력란에 **+7 days**처럼 상대 날짜 계산을 쓰면 돼요.

### 오류는 어디에서 확인하나요?
**Execution Logs**(실행 로그)와 **Enrollment History**(등록 기록)에서 실행마다 입력값, 출력값, 오류 메시지를 확인할 수 있어요. 자세한 내용은 [워크플로우 실행 로그·등록 기록 개선](workflows-improved-execution-logs-enrollment-history.md)을 참고하세요.

### 하이퍼클래스 사용자라면 누구나 이 연동을 쓸 수 있나요?
네. 워크플로우와 연동을 쓸 수 있는 모든 계정에서 사용할 수 있어요.

### ClickUp으로 만들 수 있는 워크플로우 수에 제한이 있나요?
하이퍼클래스에서는 워크플로우 수를 제한하지 않아요. ClickUp 연동 자체도 ClickUp의 API 요청 한도 외에는 제한을 두지 않아요.

### 이 액션과 트리거는 유료인가요?
네. 프리미엄 액션이라서 표준 요금으로 청구돼요. Pro 요금제를 쓰고 있다면 해당 요금제의 기본 요금으로 청구돼요. 자세한 내용은 워크플로우 프리미엄 기능 켜기와 재청구를 참고하세요.

### 트리거를 쓸 때 워크플로우를 연락처와 연결하려면 어떻게 하나요?
트리거는 기본적으로 연락처가 없는(contactless) 상태라서 워크플로우가 특정 연락처와 자동으로 연결되지 않아요.

워크플로우를 연락처와 연결해야 한다면 **Find Contact**(연락처 찾기) 액션을 쓰세요. 트리거 응답에 이메일 주소가 있으면 그 주소를 **Find Contact** 액션에 넣어서 맞는 연락처를 찾아 연결해요. 새 연락처를 만들어야 한다면 **Create Contact**(연락처 만들기)를 쓰면 돼요.
