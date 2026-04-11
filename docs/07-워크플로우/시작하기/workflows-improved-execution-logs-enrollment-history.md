---

번역일: 2026-04-07
카테고리: 07-워크플로우 > 시작하기
---

# 워크플로우- 개선된 실행 로그 및 등록 기록

이 문서에서는 워크플로우의 실행 로그(Execution Logs)와 등록 기록(Enrollment History)에 대한 최신 개선 사항을 안내해드립니다. 이를 통해 연락처가 어떻게 진행되는지 정확히 파악하고, 오류를 한눈에 발견하며, 문제를 더 빠르게 해결할 수 있습니다. 무엇이 바뀌었고 왜 중요한지 설명함으로써, 모든 자동화 단계를 투명하고 효율적이며 원활하게 실행할 수 있도록 이러한 업데이트를 활용하는 데 도움을 드리겠습니다.

목차

- [워크플로우의 실행 로그 및 등록 기록이란?](#워크플로우의-실행-로그-및-등록-기록이란)
- [실행 로그 및 등록 기록을 어디서 찾을 수 있나요?](#실행-로그-및-등록-기록을-어디서-찾을-수-있나요)
- [메시지 상세에서 특정 실행 열기 (딥링크)](#메시지-상세에서-특정-실행-열기-딥링크)
- [실행 로그 - UI/UX 변경사항](#실행-로그-uiux-변경사항)
- [등록 기록 - UI/UX 변경사항](#등록-기록-uiux-변경사항)
- [날짜 및 시간 개선사항](#날짜-및-시간-개선사항)

## 워크플로우의 실행 로그 및 등록 기록이란?

실행 로그와 등록 기록은 워크플로우의 핵심 구성 요소로, 연락처가 워크플로우를 통해 어떻게 이동하고 어떤 액션을 경험했는지 명확하게 보여줍니다. 이러한 도구는 진행 상황을 추적하고, 오류를 발견하며, 모든 것이 원활하게 작동하는지 확인하는 데 도움을 줍니다.

두 탭 모두에 몇 가지 흥미로운 업데이트와 새로운 기능을 도입하여 사용 경험을 개선했습니다. 이러한 변경사항은 각 단계에서 무엇이 일어나고 있는지 더 쉽게 이해하고, 문제를 신속하게 해결하며, 전반적으로 더 원활하고 효율적인 워크플로우 프로세스를 제공하도록 설계되었습니다.

## 실행 로그 및 등록 기록을 어디서 찾을 수 있나요?

- 하위 계정에 로그인합니다.
- Automations(자동화) 탭을 클릭합니다.
- Workflows(워크플로우)를 클릭합니다.
- 새 워크플로우를 생성하거나 기존 워크플로우를 엽니다.
- ExecutionLogs(실행 로그) 옵션을 클릭합니다.

빠른 이동:

옵션 A (가장 빠름): Conversations(대화) → 메시지 상세 → Workflow(워크플로우) → Execution Details(실행 상세) (컨텍스트가 미리 로드됨).

옵션 B: Workflows(워크플로우) → 워크플로우 열기 → Execution Logs(실행 로그) → View Details(상세 보기).

![빠른 이동 방법](https://jumpshare.com/share/Zalx2YuVgFqlBqsmw5Dl+/GIF+Recording+2025-08-06+at+12.33.57+AM.gif)

## 메시지 상세에서 특정 실행 열기 (딥링크)

메시지 상세를 사용하여 대화와 연결된 정확한 워크플로우 실행으로 바로 이동할 수 있어, 로그를 수동으로 검색하지 않고도 무엇이 일어났는지 검토할 수 있습니다.

단계:

- Conversations(대화)로 이동합니다.
- 대화를 열고 해당 메시지를 선택합니다.
- 메시지 상세를 엽니다.
- Workflow(워크플로우) 아래에서 워크플로우 링크(딥링크)를 클릭합니다.
- HighLevel이 실행 로그를 열고 연락처와 실행 컨텍스트가 미리 선택된 실행 상세를 로드합니다.

---

## 실행 로그 - UI/UX 변경사항

### "상세 보기" 하이퍼링크

이전에는 아이콘으로 표시되었던 "View Details(상세 보기)" 옵션이 이제 더 사용자 친화적인 하이퍼링크로 변경되었습니다. 이 변경사항으로 특정 액션의 실행 상세를 더 쉽게 식별하고 접근할 수 있습니다.

![상세 보기 하이퍼링크](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035082350/original/5UB3nFpMiHBuIo4Ie83QhfKUzJSqAbpS1Q.jpeg?1729505228)

### 향상된 오류 가시성

액션에서 오류가 발생하면 Status(상태) 필드나 View Details(상세 보기) 링크가 강조 표시됩니다. 이 개선사항으로 사용자가 대량의 데이터를 살펴보지 않고도 문제를 신속하게 발견하고 조치를 취할 수 있습니다.

![오류 강조 표시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035085275/original/MktSvOqtV4Unf-g4QLzdmmkMpOkwafr7ng.png?1729506822)

### 열린 행 강조

특정 행 항목의 Details(상세) 섹션이 열리면 해당 행이 강조 표시되어 명확한 시각적 참조를 제공합니다. 이 개선사항으로 사용자가 분석 중인 현재 행을 쉽게 추적할 수 있습니다.

![행 강조 표시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035082935/original/OOpnkZ1jjyX-KqY_edx4QjHvWenvm9i-WQ.png?1729505536)

### Action(액션) 컬럼 개편

- 이전에는 "Action(액션)" 컬럼이 액션 유형만 표시하여, 동일한 유형의 액션이 여러 개 있을 경우 혼란을 야기할 수 있었습니다.
- 이제 사용자가 지정한 "ActionName(액션 이름)"으로 대체했습니다.
- Action Name(액션 이름)에 마우스를 올리면 추가 컨텍스트를 위해 실제 actiontype(액션 유형)이 표시됩니다.

![액션 컬럼 개편](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035082889/original/VPBAerlslI5ySMoQos8xsbPRmAmaNcyvtg.png?1729505524)

### 필터의 향상된 정렬

필터 드롭다운 내에서 워크플로우의 일부인 액션이 먼저 나타납니다. 별도 섹션에는 명확성을 위해 다른 액션들이 나열됩니다. 이러한 분류로 액션 유형별 필터링이 더 직관적이 되고, 사용자가 워크플로우와 직접 연결된 액션의 우선순위를 정할 수 있습니다.

![필터 정렬 개선](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035082883/original/R1Jy1Y8foiApY1RF3GxVamFvAdnum1OW0A.png?1729505513)

### 새로운 워크플로우 상태

등록 기록에 표시되는 상태가 이제 연락처가 워크플로우를 종료하거나 완료한 이유에 대한 더 나은 인사이트를 제공합니다:

- "Workflow Completed(워크플로우 완료)": 연락처가 워크플로우를 자연스럽게 완료한 경우.
- "Removed by Workflow Action(워크플로우 액션에 의한 제거)": 현재 워크플로우 내의 액션으로 인해 연락처가 제거된 경우.
- "Removed by External Workflow Action(외부 워크플로우 액션에 의한 제거)": 다른 워크플로우의 액션으로 인해 연락처가 제거된 경우.

![새로운 워크플로우 상태](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035082869/original/MSxf2QYVgGCdDtxokgTo39ny9m6e7gnUnQ.png?1729505503)

### 페이지네이션

등록 기록과 실행 로그 탭 모두 이제 페이지네이션을 지원합니다. 사용자는 페이지당 표시할 행 항목 수를 선택할 수 있으며, 한 번에 10개, 25개 또는 50개 행의 옵션이 있습니다. 이는 대규모 워크플로우의 성능과 사용성을 개선합니다.

![페이지네이션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035082844/original/eWRiiBKg6zYPSl5gJigfgl_9thzA9UTDzw.png?1729505492)

### 실행 로그의 연락처 병합

연락처가 병합될 때, 실행 로그에는 **Contact Merge(연락처 병합)** 항목이 포함되어 진행 중인 워크플로우 실행이 어떻게 처리되었는지 추적할 수 있습니다(예: 병합의 일부로 중복 연락처가 삭제되는 경우).

다음과 같은 내용을 볼 수 있습니다:

- 실행 타임라인의 **Contact Merge(연락처 병합)** 항목.

예시: 라이브 채팅 "게스트"가 후속 워크플로우에 들어갑니다. 나중에 게스트가 기존 연락처와 병합됩니다. 워크플로우는 마스터 연락처 하에서 계속되므로 단계가 손실되지 않습니다.

스냅샷 새로 고침이 스냅샷 연결 워크플로우에서 단계를 제거하면, 삭제된 단계에서 대기 중인 연락처는 막힘을 방지하기 위해 자동으로 제거될 수 있습니다. 실행 로그에서 "Removed by - Snapshot Refresh(스냅샷 새로 고침에 의한 제거)"라는 레이블이 붙은 항목을 보게 됩니다. 항목을 열어 사이드 패널에서 세부 정보를 확인하세요.

![연락처 병합 항목](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064760452/original/WesRcbDMyoRIw9LFLfnNSnkn3cGdNe8TGg.png?1770890551)

## 등록 기록 - UI/UX 변경사항

### 페이지네이션

등록 기록과 실행 로그 탭 모두 이제 페이지네이션을 지원합니다. 사용자는 페이지당 표시할 행 항목 수를 선택할 수 있으며, 한 번에 10개, 25개 또는 50개 행의 옵션이 있습니다. 이는 대규모 워크플로우의 성능과 사용성을 개선합니다.

![등록 기록 페이지네이션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035083212/original/98yrb1PfVo5uKzodwRzvNdjPzhhcRC289g.png?1729505656)

### 연락처 경로 강조

- 이제 연락처가 빌더에서 이동한 경로를 강조 표시할 수 있습니다.
- 등록 기록 탭이나 실행 기록에서 "Highlight Contact Path(연락처 경로 강조)" 아이콘을 클릭합니다.
- 아이콘을 클릭하면 빌더가 열리고 연락처가 워크플로우에서 이동한 경로가 강조 표시됩니다.

![연락처 경로 강조 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035084528/original/-fJ3t0r9im8jg851GEP3RAqfdC3ApwuA0g.png?1729506400)

![경로 강조 표시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035084505/original/1X32zMEnrKqQhB5qwdvl4rQm0l10y62dhQ.png?1729506388)

![빌더에서의 경로 강조](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035084928/original/wJuSEfvW7ygStvk5ec6awu004rbyAfTqgg.png?1729506615)

### 액션으로 이동 버튼

- 실행 기록에서 세부 정보를 확인하다가 액션을 변경해야 한다고 결정하는 경우.
- 이제 빌더에서 액션을 직접 열 수 있습니다. Go To Action(액션으로 이동) 버튼을 클릭하면 빌더로 바로 이동하여 액션 사이드바가 열려 변경할 수 있습니다.

![액션으로 이동 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035085033/original/MiJgRANTk1L7WzVJPdedbqRLwsM4TKJqwg.png?1729506689)

## 날짜 및 시간 개선사항

### 날짜 형식 업데이트

- 공간 사용을 최적화하기 위해 날짜 형식을 변경했습니다. 이제 날짜는 MMM-DD 형식(예: Oct-21)으로 나타납니다.
- 시간은 사용자가 날짜에 마우스를 올릴 때만 표시되어, 필요한 세부 정보를 제공하면서도 깔끔한 뷰를 유지합니다.

![날짜 형식 변경](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035085511/original/LFuJ9AwqgdLlMy6pSH4ffyRSgXRYV-7dqw.jpeg?1729506950)

### 시간대 추가

실행 로그의 "Executed On(실행 시간)" 필드에 이제 액션이 수행된 시간대가 포함되어, 다른 시간대에서 액션이 실행된 시기를 더 쉽게 이해할 수 있습니다.

![시간대 표시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035085543/original/MucwIaZwirFtbU6_CvnvRoZj-9DEuHHxjg.jpeg?1729506974)

### 커스텀 날짜 범위 옵션

- 사용자는 이제 등록 기록과 실행 로그를 볼 때 날짜 범위를 더 많이 제어할 수 있습니다.
- 미리 설정된 옵션(오늘, 어제 등) 외에도, 사용자는 시간과 함께 커스텀 시작 및 종료 날짜를 선택할 수 있으며, 최대 30일 범위까지 가능합니다.

![커스텀 날짜 범위](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035085000/original/qkFcMhyzjRaBpDXSK4xBdaFHcqmT1Naohw.jpeg?1729506666)

### 연락처 기록의 변경사항

- "Contact History(연락처 기록)" 섹션에 중요한 변경사항을 적용했습니다.
- 사용자는 실행 로그에서 "View Contact History(연락처 기록 보기)" 아이콘을 클릭하여 연락처 기록으로 이동할 수 있습니다.
- 아이콘을 클릭하면 해당 연락처의 연락처 기록으로 이동합니다. 상단에는 연락처 세부 정보가 표시됩니다.
- 로그에는 이 워크플로우에 대해 연락처가 등록한 모든 등록에 대한 연락처의 모든 액션 실행이 표시됩니다.
- 연락처 기록과 실행 로그를 통한 더 쉬운 탐색을 위해 브레드크럼을 개선했습니다.
- 브레드크럼은 클릭 가능하며 클릭하면 로그로 다시 돌아갑니다.

![연락처 기록 보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035085635/original/iQjaqqF_59rsUk3QOE157DcP9VQOXAcZOQ.jpeg?1729507000)

![연락처 기록 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035085794/original/0BAtRW-9sVVtqOib5bMpmN4VXon5sNfP9Q.png?1729507112)

![연락처 기록 브레드크럼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035085759/original/EzC67e8dJkh2iH7AUWKoidNYE0QSojiZeQ.png?1729507094)

### 실행 기록의 변경사항

- "Execution History(실행 기록)"도 개편되었습니다.
- 등록 기록이나 실행 로그에서 "View Execution History(실행 기록 보기)" 아이콘을 클릭하면, 특정 등록에 대한 해당 연락처의 실행 기록이 열립니다.
- 연락처 세부 정보를 위한 별도의 탭이 상단에 표시됩니다.
- 실행 기록과 실행 로그를 통한 더 쉬운 탐색을 위해 브레드크럼을 개선했습니다.
- 브레드크럼은 클릭 가능하며 클릭하면 로그로 다시 돌아갑니다.

![실행 기록 보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035085183/original/dm7BMkqrQPAE8Azj_VncUC_TWDltXWBjLg.jpeg?1729506748)

![실행 기록 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035086043/original/VaQUQ4l5VQgekNWF-omxx_9OYOom_Xpkaw.png?1729507251)

![실행 기록 브레드크럼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035086058/original/kJwv9-vFc4qBZd9QYmQme6mr3r5-pwUrCw.png?1729507262)

---
*원문 최종 수정: Thu, 12 Feb, 2026 at 4:05 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*