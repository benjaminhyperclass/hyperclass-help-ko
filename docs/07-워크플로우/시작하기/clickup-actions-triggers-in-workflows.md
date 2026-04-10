---

번역일: 2026-04-07
카테고리: 07-워크플로우 > 시작하기
---

# ClickUp - 워크플로우의 액션과 트리거

HighLevel 워크플로우를 ClickUp과 연결하여 작업 생성, 공간/폴더/목록 구성, AI 생성 문서 저장을 서드파티 도구 없이 처리할 수 있습니다. 이 가이드에서는 연동의 개념, 주요 장점, 설정 방법, 모범 사례를 설명하여 CRM과 프로젝트 관리가 완벽하게 동기화되도록 도와드립니다.

---

**목차**

- [ClickUp 액션과 트리거란?](#clickup-액션과-트리거란)
- [ClickUp 액션과 트리거의 주요 장점](#clickup-액션과-트리거의-주요-장점)
- [사전 요구사항 및 권한](#사전-요구사항-및-권한)
- [ClickUp 계정 연결하기](#clickup-계정-연결하기)
- [사용 가능한 트리거 (ClickUp → HighLevel)](#사용-가능한-트리거-clickup--highlevel))
- [사용 가능한 액션 (HighLevel → ClickUp)](#사용-가능한-액션-highlevel--clickup))
- [ClickUp 액션과 트리거 설정 방법](#clickup-액션과-트리거-설정-방법)
- [일반적인 활용 사례](#일반적인-활용-사례)
- [자주 묻는 질문](#자주-묻는-질문)

---

# **ClickUp 액션과 트리거란?**

ClickUp 액션과 트리거는 HighLevel 자동화를 ClickUp의 작업 및 문서 플랫폼과 연결합니다. 트리거는 ClickUp의 이벤트(새 작업 생성, 상태 변경 등)를 감지하여 HighLevel 워크플로우를 시작할 수 있고, 액션은 HighLevel에서 ClickUp으로 데이터를 전송(작업, 공간, 문서 생성 등)합니다. 이 양방향 연결은 수동 작업을 줄이고 고객 프로젝트를 실시간으로 업데이트합니다.

---

## **ClickUp 액션과 트리거의 주요 장점**

결과를 이해하면 연동을 어디에 먼저 적용할지 결정하는 데 도움이 됩니다. 아래 장점들은 프로젝트 진행이 CRM 단계와 일치해야 하는 일반적인 에이전시 및 서비스 워크플로우에 초점을 맞춥니다.

- **중복 입력 없음:** 고객 및 프로젝트 세부사항이 HighLevel과 ClickUp 간에 자동으로 흐르므로 수동 업데이트가 줄어듭니다.

- **빠른 온보딩:** 거래가 핵심 단계에 도달하는 순간 공간, 폴더, 목록, 작업이 자동으로 생성됩니다.

- **AI to 문서:** HighLevel의 AI 단계로 콘텐츠를 생성하고 검토를 위해 바로 ClickUp 문서에 저장합니다.

- **깔끔한 인수인계:** 댓글과 상태 업데이트가 팀이 작업을 수행하는 곳에 있어 소통 오류가 줄어듭니다.

- **관리할 도구 감소:** 많은 웹훅/Zap 자동화를 네이티브하고 감사 가능한 워크플로우 단계로 대체합니다.

- **비용 제어 (프리미엄):** 프리미엄 실행은 사용량 기반이며 활성화 시 고객에게 재청구할 수 있습니다.

---

## **사전 요구사항 및 권한**

몇 가지 계정 수준 설정이 ClickUp 단계를 추가할 수 있는지 여부와 청구 방식에 영향을 미칩니다. 구축하기 전에 이를 확인하세요.

- 자동화가 실행될 하위 계정에서 **워크플로우** 및 **연동**에 대한 HighLevel 접근 권한.

- 대상 워크스페이스에서 항목을 생성/업데이트할 권한이 있는 ClickUp 사용자(액션은 ClickUp 권한을 존중합니다).

- **워크플로우용 프리미엄 기능**은 프리미엄 액션/트리거를 실행하고 선택적으로 고객에게 사용량을 재청구하기 위해 에이전시에서 활성화해야 할 수 있습니다.

---

## **ClickUp 계정 연결하기**

인증은 ClickUp의 공식 OAuth를 사용하므로 웹훅을 통해 이벤트를 수신하고 액션이 귀하의 권한으로 읽기/쓰기를 할 수 있습니다.

- HighLevel에서 **자동화(Automation) → 워크플로우(Workflows)**를 열고 아무 **ClickUp** 액션이나 트리거를 추가하세요.
→ 연결되지 않은 경우 **지금 연결(Connect Now)**을 클릭하고 ClickUp에 로그인하여 접근을 승인하세요.
→ 이미 연결된 경우 단계에서 필드가 즉시 로드됩니다.

![ClickUp 연결 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056698223/original/zC74oAXM3UU1j02ABVYQmiu5Va6coh8_iQ.png?1761228082)

- 다른 경로: 하위 계정 설정(Sub-Account settings) → 연동(Integrations) → ClickUp → 연결(Connect).

![연동 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056698333/original/9bQTwz8IfjsgKQ6Fr4kGiMr3T9njChVYOw.png?1761228154)

---

## **사용 가능한 트리거 (ClickUp → HighLevel)**

트리거는 ClickUp이 웹훅 이벤트를 보낼 때마다 발생합니다. 워크스페이스/목록별로 필터를 사용하여 범위를 제한하고 노이즈를 방지하세요.

| 트리거 | 작동 방식 |
|--------|-----------|
| New Task | 새 작업이 생성될 때 발생합니다. |
| Task Changes | 작업이 업데이트될 때(상태, 마감일 등) 발생합니다. |
| New List | 새 목록이 생성될 때 발생합니다. |
| New Folder | 새 폴더가 생성될 때 발생합니다. |
| New Comment on a Task | 누군가 작업에 댓글을 달 때 발생합니다. |
| New Attachment Added to Task | 작업에 첨부파일이 추가될 때 발생합니다. |
| New Reaction on Chat Message | 누군가 공개 채널 메시지에 반응할 때 발생합니다. |
| New Reaction on Task Comment | 누군가 작업 댓글에 반응할 때 발생합니다. |
| New Time Entry | 작업에 시간이 기록될 때 발생합니다. |

## **사용 가능한 액션 (HighLevel → ClickUp)**

액션은 워크플로우 내에서 실행되어 ClickUp에서 항목을 생성하거나 업데이트합니다. 아래 이름은 일관성을 위해 빌더와 일치합니다.

| 액션 | 목적 |
|------|------|
| Create Task | 이름, 마감일, 담당자 등이 포함된 작업을 생성합니다. |
| Update Task | 기존 작업 세부사항(상태, 마감일, 우선순위)을 수정합니다. |
| Archive or Delete Task | 항목을 보관하거나 영구적으로 삭제합니다. |
| Create Space | 워크스페이스/팀 공간을 생성합니다. |
| Create Folder | 목록을 구성하기 위한 폴더를 추가합니다. |
| Create List | 새로운 작업 목록을 생성합니다. |
| Post Task Comment | 작업에 댓글을 추가합니다. |
| Post Attachment | 작업에 파일을 업로드합니다. |
| Create New Document | ClickUp에서 문서를 생성합니다. |
| Edit Document Page | 기존 문서 페이지를 업데이트합니다. |
| Create New Document Page | 기존 문서에 새 페이지를 추가합니다. |
| Create Custom Field [곧 출시] | 공간/폴더/작업에 커스텀 필드를 추가합니다. |
| Update Custom Field Value [곧 출시] | 기존 커스텀 필드의 값을 설정합니다. |
| Find Task by ID | ID로 작업을 찾습니다. |
| Find Documents | 문서를 검색합니다. |
| Find Custom Fields | 커스텀 필드를 찾습니다. |
| Find a List of All Tasks | 워크스페이스/목록의 모든 작업을 반환합니다. |
| Find User by Name or Email | 사용자를 찾습니다. |

---

## **ClickUp 액션과 트리거 설정 방법**

이 일반적인 설정을 사용하여 계정을 연결하고, 올바른 방향(트리거 vs 액션)을 선택하고, 필드를 안전하게 매핑하고, 게시하기 전에 모든 것을 검증하세요. 이 단계를 모든 파이프라인 단계나 프로젝트 템플릿에 맞게 조정하세요.

- **워크플로우 열기**

**자동화(Automation) → 워크플로우(Workflows)**로 이동하고 **+ 새 워크플로우(New Workflow)**를 클릭하거나 기존 워크플로우를 여세요.

![워크플로우 생성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056563322/original/oBVlC-MdURl-P7G_AeqopEAluiVDfg5qkQ.png?1761129355)

- **ClickUp 연결**

워크플로우에서 아무 **ClickUp** 단계를 추가하고 **지금 연결(Connect Now)**을 클릭하거나, **설정(Settings) → 연동(Integrations) → ClickUp → 연결(Connect)**로 이동하여 OAuth를 통해 인증하세요.

![ClickUp 연결](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056563354/original/6Y2pFx9ZsNJ_09OJdf-zGUM1YNSl6j9bGg.png?1761129378)

- **방향 선택**

ClickUp → HighLevel (트리거): ClickUp에서 무언가가 발생했을 때 HighLevel 워크플로우를 시작하려면 **ClickUp** 트리거를 추가하세요(예: *New Task*, *Task Changes*)

![ClickUp 트리거 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056563404/original/9AQMRWvJwFGSWV8i1JKIC62ohsgfdbYYoA.png?1761129398)

- HighLevel → ClickUp (액션): HighLevel 워크플로우에서 ClickUp에서 작업을 수행합니다.

**ClickUp** 액션을 추가하세요(예: *Create Task*, *Create List*, *Create New Document*). 대상 **워크스페이스/목록**을 선택하고(해당하는 경우) HighLevel의 **필드를 매핑**하세요(연락처, 기회, 또는 폼 값).

![ClickUp 액션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056563502/original/9vHaGkI0_Mk8JdAy766UxzHSU9Qk4V2lIw.png?1761129440)

- **순서, 조건, 안전성**

파이프라인 단계, 서비스 유형, 태그별로 분할하려면 **조건 분기(If/Else)** 필터를 사용하세요.

- 다음 액션 전에 ClickUp 객체가 존재해야 하는 곳에 **대기(Wait)** 단계를 삽입하세요(예: *Create List* 후 작업 생성 전 대기).

- 대량 생성의 경우 속도 제한 버스트를 피하기 위해 액션 간격을 두세요.

- **테스트 및 검증**

트리거 경로: 범위가 지정된 ClickUp 영역에서 작은 테스트 이벤트를 생성하세요.

- 액션 경로: 테스트 레코드에서 워크플로우를 실행하세요.

- 입력, 출력, 반환된 ID에 대해 **실행 로그 / 등록 기록(Run Logs / Enrollment History)**을 검토하고 매핑/권한 문제를 수정하세요.

- **게시 및 모니터링**

워크플로우에서 **게시(Publish)**를 클릭하세요.

---

## **일반적인 활용 사례**

### **활용 사례 1: HighLevel 폼 제출에서 ClickUp 작업 생성**

**목표:** HighLevel 폼 제출을 실행 가능한 ClickUp 작업으로 변환합니다.
**워크플로우 설정:**

- 트리거: 폼 제출됨(Form Submitted)

- 필터: 폼 이름 = "고객 온보딩 폼"

- 액션: 작업 생성(Create Task) (ClickUp), 작업 댓글 추가(Add Task Comment) (ClickUp)

**예시:** 고객이 요구사항 세부사항과 함께 온보딩 폼을 제출 → ClickUp의 "고객 설정" 목록에서 작업이 생성됨 → 고객의 기대사항이 포함된 댓글이 추가됨.

![폼 제출 워크플로우](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052402986/original/E4p7Hl7VD6cOsKB7GsViphdXRj0ObqsxgA.png?1756216324)

### **활용 사례 2: AI 기반 제안서 문서 자동 생성**

**목표:** 기회 단계가 변경될 때 AI를 사용하여 콘텐츠를 작성하고 ClickUp에 문서를 저장하여 개인화된 제안서, 브리프 또는 요약을 자동으로 생성합니다.

**워크플로우 설정:**

- 트리거: 기회 상태 변경됨(Opportunity Status Changed)

- 필터: 단계 = "제안서 요청" (또는 관련 파이프라인 단계)

- 액션:

GPT powered by OpenAI → 제안서 콘텐츠 생성(예: 고객별 요약, 성과물, 가격 개요).

- 새 문서 생성(Create New Document) (ClickUp) → AI 생성 제안서를 ClickUp의 "영업 문서" 폴더에 저장.

**예시:** 거래가 "제안서 발송" 단계로 진행됨 → GPT가 범위, 성과물, 가격이 포함된 "{{contact.name}}를 위한 제안서"라는 맞춤형 제안서를 생성 → 새 ClickUp 문서가 자동으로 생성되고 검토를 위해 영업팀과 공유됨.

![AI 제안서 워크플로우](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052403321/original/COVIdrRjx24oDSB-8bSkbeJ1V0M23NxuDg.png?1756216503)

### **활용 사례 3: 기회 유형에 따른 프로젝트 공간 자동 구축**

**목표:** 거래가 새 단계로 이동할 때마다 ClickUp에서 구조화된 프로젝트 워크스페이스를 자동으로 설정하고, 서비스 유형(랜딩 페이지, SEO, Google 광고)에 맞춘 작업과 알림을 제공합니다.

**워크플로우 설정:**

- 트리거: 파이프라인 단계 변경됨(Pipeline Stage Changed)

- 액션: ClickUp에서 공간 생성(고객/기회 이름으로)

- 조건 분기:

랜딩 페이지 분기 → 기회 이름 = "랜딩 페이지"인 경우

목록 생성: 랜딩 페이지 프로젝트

- 작업 생성: "랜딩 페이지 디자인"

- 배정된 팀에게 내부 알림

- SEO 분기 → 기회 이름 = "SEO"인 경우

목록 생성: SEO 설정

- 작업 생성: "키워드 연구 및 사이트 감사"

- SEO 팀에게 내부 알림

- Google 광고 분기 → 기회 이름 = "Google_Ads"인 경우

목록 생성: Google 광고 캠페인

- 작업 생성: "캠페인 설정 및 추적"

- 광고팀에게 내부 알림

- None 분기 → 조건이 충족되지 않으면 워크플로우 종료

**예시:** 거래가 "계약 체결" 단계로 이동합니다. 기회가 SEO인 경우, "[고객명] - SEO 프로젝트"라는 새 ClickUp 공간이 생성됩니다. 그 안에서 첫 번째 작업인 키워드 연구 및 사이트 감사가 포함된 SEO 설정 목록이 생성됩니다. SEO 관리자에게 내부 알림이 전송되어 즉시 프로젝트가 시작됩니다.

![프로젝트 공간 자동 구축](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052404119/original/t81EClMvtzIA_B51zQXyXM0U5qjPXnjdqA.png?1756216912)

---

## **자주 묻는 질문**

**Q: 어떤 ClickUp 플랜이 필요한가요?**
연동은 무료 및 유료 플랜에서 작동합니다. 특정 기능(시간 추적이나 일부 커스텀 필드 기능)은 유료 ClickUp 플랜이 필요할 수 있습니다.

**Q: 몇 개의 ClickUp 워크스페이스를 연결할 수 있나요?**
하위 계정과 관련된 ClickUp 워크스페이스를 연결하세요. 액션/권한은 해당 워크스페이스의 인증을 따릅니다.

**Q: 동적 마감일을 사용할 수 있나요?**
네. 마감일 입력에서 **+7 days**와 같은 상대적 계산을 사용할 수 있습니다.

**Q: 오류는 어디서 찾을 수 있나요?**
각 실행의 입력/출력 및 오류 메시지에 대해 **실행 로그 및 등록 기록(Execution Logs & Enrollment History)**을 확인하세요.

**Q: 이 연동은 모든 HighLevel 사용자가 사용할 수 있나요?**
네, 워크플로우 및 연동에 접근할 수 있는 모든 계정에서 사용할 수 있습니다.

**Q: ClickUp으로 몇 개의 워크플로우를 구축할 수 있나요?**
HighLevel에서 워크플로우 제한은 없으며 ClickUp 연동 자체도 ClickUp의 API 속도 제한 외에는 제한을 두지 않습니다.

**Q: 이러한 액션과 트리거는 유료인가요?**
네. 이는 프리미엄 액션이며 표준 요금으로 청구됩니다. Pro 플랜을 사용하는 경우 사용량은 플랜의 기본 요금으로 청구됩니다.

**Q: 트리거를 사용할 때 워크플로우를 연락처와 어떻게 연결하나요?**

트리거는 기본적으로 연락처가 없으므로 워크플로우를 특정 연락처와 자동으로 연결하지 않습니다.

워크플로우를 연락처와 연결해야 하는 경우 워크플로우 내에서 연락처 찾기(Find Contact) 액션을 사용할 수 있습니다. 트리거 응답에서 이메일 주소(이메일이 있는 경우)를 연락처 찾기 액션에 전달하여 올바른 연락처를 찾고 연결합니다. 또는 새 연락처를 생성해야 하는 경우 연락처 생성을 사용합니다.

---
*원문 최종 수정: Wed, 11 Mar, 2026 at 2:23 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*