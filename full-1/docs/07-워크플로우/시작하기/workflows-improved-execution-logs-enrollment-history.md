---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003992-workflows-improved-execution-logs-enrollment-history
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 개선 — Execution Logs(실행 로그)와 Enrollment History(등록 기록)

워크플로우의 **Execution Logs**(실행 로그)와 **Enrollment History**(등록 기록)가 새롭게 바뀌었어요. 이 문서에서는 바뀐 내용과 활용법을 소개해요. 연락처가 워크플로우를 어떻게 지나가는지 확인하고, 오류를 한눈에 찾아 빠르게 해결할 때 참고하세요.

## Execution Logs와 Enrollment History란?

**Execution Logs**와 **Enrollment History**는 워크플로우에서 연락처의 진행 상황을 보여 주는 탭이에요. 연락처가 워크플로우 안에서 어떻게 이동했고 어떤 액션을 거쳤는지 자세히 알 수 있어요. 진행 상황을 추적하고 오류를 찾아서 워크플로우가 잘 돌아가는지 확인할 때 써요.

두 탭에 새 기능과 화면 개선이 추가됐어요. 각 단계에서 무슨 일이 일어나는지 이해하기 쉬워졌고, 문제도 더 빨리 해결할 수 있어요.

---

## Execution Logs와 Enrollment History는 어디에 있나요?

1. 서브 계정에 로그인하세요.
2. **자동화** 탭을 클릭하세요.
3. **워크플로우**를 클릭하세요.
4. 새 워크플로우를 만들거나 기존 워크플로우를 여세요.
5. **Execution Logs**를 클릭하세요.

```
빠른 이동:

방법 A (가장 빠름): 대화 → message details → 워크플로우 → Execution Details (연락처와 실행 정보가 미리 선택된 상태로 열림)

방법 B: 워크플로우 → 워크플로우 열기 → Execution Logs → View Details
```

![Execution Logs 위치 안내 영상](https://jumpshare.com/share/Zalx2YuVgFqlBqsmw5Dl+/GIF+Recording+2025-08-06+at+12.33.57+AM.gif)

---

## 메시지 상세에서 특정 실행 바로 열기 (딥링크)

대화에 연결된 워크플로우 실행을 로그에서 직접 찾지 않고 바로 열 수 있어요. 무슨 일이 있었는지 빠르게 확인할 수 있어요.

1. **대화**로 이동하세요.
2. 대화를 열고 확인할 메시지를 선택하세요.
3. **message details**(메시지 상세)를 여세요.
4. **워크플로우** 아래에 있는 워크플로우 링크(딥링크)를 클릭하세요.
5. 하이퍼클래스가 **Execution Logs**를 열고, 해당 연락처와 실행 정보가 선택된 상태로 **Execution Details**(실행 상세)를 불러와요.

---

## Execution Logs 화면 변경 사항

### View Details 링크

예전에는 **View Details**(상세 보기)가 아이콘이었어요. 이제는 쓰기 편한 링크로 바뀌었어요. 각 액션의 실행 상세를 더 쉽게 찾아서 열 수 있어요.

![View Details 링크 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035082350/original/5UB3nFpMiHBuIo4Ie83QhfKUzJSqAbpS1Q.jpeg?1729505228)

### 오류가 더 잘 보여요

액션에서 오류가 나면 **Status**(상태) 필드나 **View Details** 링크가 강조 표시돼요. 많은 데이터를 일일이 확인하지 않아도 문제를 바로 알아보고 대처할 수 있어요.

![오류가 강조된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035085275/original/MktSvOqtV4Unf-g4QLzdmmkMpOkwafr7ng.png?1729506822)

### 열어 본 행 강조

특정 행의 **Details**(상세 정보) 영역을 열면 그 행이 강조돼요. 지금 보고 있는 행이 어디인지 쉽게 알 수 있어요.

![강조된 행 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035082935/original/OOpnkZ1jjyX-KqY_edx4QjHvWenvm9i-WQ.png?1729505536)

### Action 열 개선

- 예전에는 **Action**(액션) 열에 액션 종류만 표시됐어요. 같은 종류의 액션이 여러 개면 헷갈릴 수 있었어요.
- 이제는 직접 지정한 **Action Name**(액션 이름)이 표시돼요.
- **Action Name**에 마우스를 올리면 실제 **action type**(액션 종류)을 볼 수 있어요.

![Action Name이 표시된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035082889/original/VPBAerlslI5ySMoQos8xsbPRmAmaNcyvtg.png?1729505524)

### 필터 정렬 개선

**Filter**(필터) 드롭다운에서는 해당 워크플로우에 있는 액션이 맨 위에 나와요. 그 외 액션은 별도 구역에 따로 모아서 보여 줘요. 액션 종류별로 필터링하기 쉬워졌고, 워크플로우와 직접 관련된 액션을 먼저 고를 수 있어요.

![필터 드롭다운 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035082883/original/R1Jy1Y8foiApY1RF3GxVamFvAdnum1OW0A.png?1729505513)

### 새 워크플로우 상태

**Enrollment History**에 표시되는 상태로, 연락처가 워크플로우에서 나간 이유나 완료한 이유를 더 자세히 알 수 있어요.

- **Workflow Completed**(워크플로우 완료): 연락처가 워크플로우를 끝까지 마친 경우예요.
- **Removed by Workflow Action**(워크플로우 액션으로 제거됨): 현재 워크플로우 안의 액션 때문에 연락처가 제거된 경우예요.
- **Removed by External Workflow Action**(외부 워크플로우 액션으로 제거됨): 다른 워크플로우의 액션 때문에 연락처가 제거된 경우예요.

![새 워크플로우 상태 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035082869/original/MSxf2QYVgGCdDtxokgTo39ny9m6e7gnUnQ.png?1729505503)

### Pagination(페이지 나누기)

**Enrollment History**와 **Execution Logs** 탭 모두 페이지 나누기를 지원해요. 한 페이지에 보여 줄 행 수를 10개, 25개, 50개 중에서 고를 수 있어요. 규모가 큰 워크플로우에서 속도가 빨라지고 쓰기도 편해져요.

### Execution Logs의 연락처 병합

연락처를 병합하면 **Execution Logs**에 **Contact Merge**(연락처 병합) 항목이 나올 수 있어요. 진행 중이던 워크플로우 실행이 어떻게 처리됐는지 확인할 수 있어요. 예를 들어 병합 과정에서 중복 연락처가 삭제되는 경우예요.

표시되는 내용:

- 실행 타임라인에 나타나는 **Contact Merge** 항목

예시: 실시간 채팅의 "게스트"가 후속 워크플로우에 들어갔어요. 나중에 그 게스트가 기존 연락처로 병합됐어요. 워크플로우는 마스터 연락처 기준으로 계속 진행되기 때문에 단계가 누락되지 않아요.

```
스냅샷을 새로 고치면서 스냅샷에 연결된 워크플로우의 단계가 삭제되면, 삭제된 단계에서 대기 중이던 연락처는 멈춰 버리지 않도록 자동으로 제거될 수 있어요. Execution Logs에는 "Removed by - Snapshot Refresh"라는 항목이 표시돼요. 항목을 열면 오른쪽 패널에서 상세 내용을 볼 수 있어요.
```

![Contact Merge 항목 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064760452/original/WesRcbDMyoRIw9LFLfnNSnkn3cGdNe8TGg.png?1770890551)

---

## Enrollment History 화면 변경 사항

### Pagination(페이지 나누기)

**Enrollment History**와 **Execution Logs** 탭 모두 페이지 나누기를 지원해요. 한 페이지에 보여 줄 행 수를 10개, 25개, 50개 중에서 고를 수 있어요. 규모가 큰 워크플로우에서 속도가 빨라지고 쓰기도 편해져요.

![Pagination 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035083212/original/98yrb1PfVo5uKzodwRzvNdjPzhhcRC289g.png?1729505656)

### 연락처 경로 강조

- 연락처가 지나간 경로를 빌더에서 강조해서 볼 수 있어요.
- **Enrollment History** 탭이나 **Execution History**(실행 기록)에서 **Highlight Contact Path**(연락처 경로 강조) 아이콘을 클릭하세요.
- 아이콘을 클릭하면 빌더가 열리고, 연락처가 워크플로우에서 지나간 경로가 강조돼요.
- 이제 **Highlight Contact Path**는 워크플로우 캔버스에 정보를 더 보여 줘서 문제를 더 빨리 찾을 수 있어요.
  - 오류 표시: 오류가 발생한 노드가 캔버스에서 강조돼요.
  - 건너뛴 노드: 연락처가 실행 중 지나치지 않은 노드를 확인할 수 있어요.
  - 진입·종료 상태: 연락처가 워크플로우에 들어온 시점과 나간 시점이 시각적으로 표시돼요.
  - 진행 중 추적: 연락처가 아직 워크플로우를 지나가는 중인지 확인할 수 있어요.

![연락처 경로 강조 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035084528/original/-fJ3t0r9im8jg851GEP3RAqfdC3ApwuA0g.png?1729506400)

![연락처 경로 강조 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035084505/original/1X32zMEnrKqQhB5qwdvl4rQm0l10y62dhQ.png?1729506388)

![연락처 경로 강조 화면 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035084928/original/wJuSEfvW7ygStvk5ec6awu004rbyAfTqgg.png?1729506615)

### Go To Action 버튼

- **Execution History**에서 상세 내용을 확인하다가 액션을 수정해야 할 수 있어요.
- 이제 그 액션을 빌더에서 바로 열 수 있어요. **Go To Action**(액션으로 이동) 버튼을 클릭하면 빌더로 이동하고 **Action Sidebar**(액션 사이드바)가 열려요. 거기서 바로 수정하면 돼요.

![Go To Action 버튼 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035085033/original/MiJgRANTk1L7WzVJPdedbqRLwsM4TKJqwg.png?1729506689)

---

## 날짜 및 시간 개선

### 날짜 형식 변경

- 공간을 아끼려고 날짜 형식을 바꿨어요. 이제 날짜는 MMM-DD 형식(예: Oct-21)으로 표시돼요.
- 시간은 날짜에 마우스를 올렸을 때만 표시돼요. 화면은 깔끔하게 유지하면서 필요할 때 시간을 확인할 수 있어요.

![날짜 형식 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035085511/original/LFuJ9AwqgdLlMy6pSH4ffyRSgXRYV-7dqw.jpeg?1729506950)

### 시간대 표시 추가

**Execution Logs**의 **Executed On**(실행 일시) 필드에 액션이 실행된 시간대도 함께 표시돼요. 서로 다른 시간대에서 실행된 액션도 언제 실행됐는지 이해하기 쉬워요.

![Executed On 필드의 시간대 표시 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035085543/original/MucwIaZwirFtbU6_CvnvRoZj-9DEuHHxjg.jpeg?1729506974)

### 사용자 지정 기간 옵션

- **Enrollment History**와 **Execution Logs**를 볼 때 기간을 더 자유롭게 정할 수 있어요.
- **Today**(오늘), **Yesterday**(어제) 같은 기본 옵션 외에 시작일과 종료일을 시간까지 직접 지정할 수 있어요. 최대 30일까지 선택할 수 있어요.

### Contact History 변경 사항

- **Contact History**(연락처 기록) 영역이 크게 바뀌었어요.
- **Execution Logs**에서 **View Contact History**(연락처 기록 보기) 아이콘을 클릭하면 **Contact History**로 이동해요.
- 아이콘을 클릭하면 해당 연락처의 기록이 열리고, 맨 위에 연락처 상세 정보가 표시돼요.
- 로그에는 그 연락처가 이 워크플로우에 등록됐던 모든 기록의 액션 실행이 표시돼요.
- 브레드크럼을 개선해서 **Contact History**와 **Execution Logs** 사이를 더 쉽게 오갈 수 있어요.
- 브레드크럼을 클릭하면 로그로 돌아가요.

![Contact History 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035085635/original/iQjaqqF_59rsUk3QOE157DcP9VQOXAcZOQ.jpeg?1729507000)

![Contact History 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035085794/original/0BAtRW-9sVVtqOib5bMpmN4VXon5sNfP9Q.png?1729507112)

![Contact History 화면 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035085759/original/EzC67e8dJkh2iH7AUWKoidNYE0QSojiZeQ.png?1729507094)

### Execution History 변경 사항

- **Execution History**도 새롭게 바뀌었어요.
- **Enrollment History**나 **Execution Logs**에서 **View Execution History**(실행 기록 보기) 아이콘을 클릭하면, 그 연락처의 해당 등록 건에 대한 실행 기록이 열려요.
- 맨 위에 연락처 상세 정보를 보는 별도 탭이 있어요.
- 브레드크럼을 개선해서 **Execution History**와 **Execution Logs** 사이를 더 쉽게 오갈 수 있어요.
- 브레드크럼을 클릭하면 로그로 돌아가요.

![Execution History 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035085183/original/dm7BMkqrQPAE8Azj_VncUC_TWDltXWBjLg.jpeg?1729506748)

![Execution History 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035086043/original/VaQUQ4l5VQgekNWF-omxx_9OYOom_Xpkaw.png?1729507251)

![Execution History 화면 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035086058/original/kJwv9-vFc4qBZd9QYmQme6mr3r5-pwUrCw.png?1729507262)
