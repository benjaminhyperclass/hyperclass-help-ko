---
원문: https://help.gohighlevel.com/support/solutions/articles/155000007978-linear-integration-in-highlevel-workflows
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우에서 Linear 연동 사용하기 — Linear 트리거와 액션

하이퍼클래스 워크플로우와 Linear를 연결하면, 고객 요청과 지원 활동을 Linear 이슈로 만들거나 Linear의 진행 상황을 고객에게 알릴 수 있어요. 이 문서에서는 Linear 연동이 무엇인지, 어떤 트리거와 액션을 쓸 수 있는지, 어떻게 연결하는지 알려 드려요.

## Linear 연동이란?

워크플로우의 Linear 연동은 하이퍼클래스의 CRM, 고객 요청, 지원 활동, 고객 대상 자동화를 Linear와 바로 이어 줘요. Linear는 제품·개발 팀이 작업을 계획하고 관리하고 배포할 때 쓰는 이슈 트래커예요. 이 연동을 쓰면 웹훅을 따로 만들지 않아도 워크플로우에서 Linear 기록을 만들고, 수정하고, 찾고, 대응할 수 있어요.

고객 피드백을 실제 제품 작업으로 바꾸거나, 이슈가 해결되면 고객에게 알리거나, 하이퍼클래스와 Linear의 고객 기록을 맞춰 두는 데 활용해 보세요.

---

## Linear 연동의 주요 장점

Linear 연동을 쓰면 고객 응대 팀과 제품 팀이 같은 정보를 보고 일할 수 있어요. 고객 요청을 Linear에 일일이 옮겨 적거나 개발 업데이트를 하나씩 확인하는 대신, 트리거와 액션 설정에 따라 워크플로우가 하이퍼클래스와 Linear 사이에서 정보를 자동으로 옮겨 줘요.

- 폐쇄 루프 고객 피드백: 고객이 제보한 버그와 기능 요청을 Linear 이슈나 고객 니즈로 남기고, 작업이 끝나면 처음 제보한 고객에게 알려요.
- 매출 기준 우선순위 정하기: 고객 니즈를 Linear 고객 기록에 연결하면 제품 팀이 고객 등급, 매출, 계정 중요도별로 요청 건수를 파악할 수 있어요.
- 실시간 개발 현황 공유: Linear의 이슈, 프로젝트, 고객 니즈, 이니셔티브 업데이트를 트리거로 삼아 내부 알림이나 고객 알림을 보낼 수 있어요.
- 양방향 고객 정보 공유: Linear 이슈에 CRM 기록 URL을 붙여 두면 개발 팀이 관련 하이퍼클래스 연락처, 회사, 대화, 기회를 바로 볼 수 있어요.
- 워크플로우 자동화와 바로 연결: OAuth로 Linear를 연결하고, 워크플로우 빌더에서 트리거와 액션을 바로 설정해요. 오래 쓰는 API 토큰이나 웹훅 설정은 필요 없어요.
- 이슈부터 기획까지 폭넓게 지원: 이슈, 댓글, 프로젝트, 고객, 고객 니즈, 이니셔티브, 문서에 대한 트리거와 액션을 쓸 수 있어요.

---

## Linear 트리거와 액션

Linear 트리거는 Linear에서 활동이 생길 때 워크플로우를 시작해요. Linear 액션은 워크플로우가 Linear 안에서 정보를 만들고, 수정하고, 검색하고, 첨부하게 해요. Linear에서 일어난 일로 자동화를 시작하려면 트리거를, 하이퍼클래스에서 일어난 일로 Linear 작업을 만들거나 수정하려면 액션을 쓰세요.

### Linear 트리거

모든 Linear 트리거는 Linear 웹훅으로 작동하는 즉시 실행 방식이에요. Linear에서 해당 이벤트가 생기면 바로 실행돼요.

| 트리거 | 하는 일 |
| --- | --- |
| **New Issue**(새 이슈) | 새 이슈가 만들어지면 실행돼요. 팀별로 필터링할 수 있어요. |
| **Updated Issue**(이슈 업데이트) | 이슈의 상태, 우선순위, 담당자, 라벨 등 필드가 바뀌면 실행돼요. |
| **New Issue Comment**(새 이슈 댓글) | 이슈에 새 댓글이 달리면 실행돼요. |
| **New Project**(새 프로젝트) | Linear에서 새 프로젝트가 만들어지면 실행돼요. |
| **New Project Update**(새 프로젝트 업데이트) | 프로젝트 업데이트가 올라오면 실행돼요. |
| **Updated Project Update**(프로젝트 업데이트 수정) | 기존 프로젝트 업데이트가 수정되면 실행돼요. |
| **New Customer**(신규 고객) | Linear에서 새 고객 기록이 만들어지면 실행돼요. |
| **Updated Customer**(고객 업데이트) | 기존 고객 기록이 수정되면 실행돼요. |
| **New Customer Need**(새 고객 니즈) | 새 고객 니즈나 기능 요청이 등록되면 실행돼요. |
| **Updated Customer Need**(고객 니즈 업데이트) | 고객 니즈의 상태, 우선순위, 연결된 작업이 바뀌면 실행돼요. |
| **New Document Comment**(새 문서 댓글) | PRD, 스펙, 제안서 같은 Linear 문서에 새 댓글이 달리면 실행돼요. |
| **New Initiative Update**(새 이니셔티브 업데이트) | Linear 이니셔티브에 업데이트가 올라오면 실행돼요. |

### Linear 액션

Linear 액션은 워크플로우에서 실행되어 Linear의 데이터를 만들고, 수정하고, 검색하고, 첨부해요. 이 액션을 쓰면 CRM과 고객 정보를 사람이 전달하지 않아도 제품 작업으로 넘길 수 있어요.

| 액션 | 용도 |
| --- | --- |
| **Create Issue**(이슈 만들기) | 제목, 설명, 팀, 프로젝트, 우선순위, 담당자, 라벨, 마감일 같은 필드로 새 Linear 이슈를 만들어요. |
| **Update Issue**(이슈 수정) | 기존 이슈에서 선택한 필드만 수정해요. 설정하지 않은 필드는 그대로 유지돼요. |
| **Get Issue**(이슈 가져오기) | ID로 이슈 하나의 최신 상태를 가져와요. |
| **Find Issues**(이슈 찾기) | 팀, 프로젝트, 라벨, 상태, 담당자, 텍스트로 Linear 이슈를 검색해요. |
| **Create Comment**(댓글 만들기) | 기존 이슈에 댓글을 추가해요. Markdown을 쓸 수 있어요. |
| **Create Issue Attachment**(이슈 첨부 만들기) | 원본 기록으로 돌아갈 수 있는 링크가 담긴 URL을 이슈에 첨부해요. |
| **Add Label To Issue**(이슈에 라벨 추가) | 기존 이슈에 라벨을 추가해요. |
| **Remove Label From Issue**(이슈에서 라벨 제거) | 기존 이슈에서 라벨을 제거해요. |
| **Create Project**(프로젝트 만들기) | 이름, 설명, 리드, 목표 날짜를 넣어 Linear 프로젝트를 만들어요. |
| **Find Project**(프로젝트 찾기) | 이름이나 필터로 Linear 프로젝트를 찾아요. |
| **Create Customer**(고객 만들기) | 이름, 도메인, 등급, 매출 같은 정보로 Linear에 고객 기록을 만들어요. |
| **Find Customer**(고객 찾기) | 이름이나 도메인으로 Linear 고객을 찾아요. |
| **Create Customer Need**(고객 니즈 만들기) | 고객 기록, 이슈, 프로젝트에 연결된 고객 니즈를 만들어요. |

---

## Linear 워크플로우 활용 사례

하이퍼클래스의 고객 활동을 정리된 제품 작업으로 바꾸거나, Linear의 개발 진행 상황으로 고객 커뮤니케이션을 시작할 때 Linear 워크플로우가 특히 유용해요. 아래 예시처럼 고객 정보를 붙인 채로 팀 간 전달을 자동화할 수 있어요.

### 고객이 제보한 버그를 Linear 이슈와 고객 니즈로 만들기

폼 제출, 수신 대화, 지원 워크플로우를 이용해 고객 정보가 담긴 Linear 이슈를 만들어요.

예시 워크플로우:

1. 고객이 버그 제보나 기능 요청을 제출하면 워크플로우가 시작되도록 트리거를 설정해요.
2. 이름이나 도메인으로 일치하는 Linear 고객을 찾아요.
3. 제보 내용, 연락처 정보, 우선순위, 라벨을 담아 Linear 이슈를 만들어요.
4. 하이퍼클래스 CRM 기록 URL을 Linear 이슈에 첨부해요.
5. Linear 고객과 이슈에 연결된 고객 니즈를 만들어요.

### Linear 이슈가 해결되면 고객에게 알리기

Linear의 상태 변경을 이용해, 고객이 제보한 이슈가 완료되면 처음 제보한 고객에게 알려요.

예시 워크플로우:

1. **Updated Issue** 트리거를 사용해요.
2. 상태가 Done인 이슈만 거르도록 필터를 추가해요.
3. 고객 제보 출처 라벨 같은 라벨 필터를 추가해요.
4. 최신 이슈 정보를 가져와요.
5. 처음 제보한 고객에게 맞춤 이메일이나 SMS를 보내요.

---

## 워크플로우에서 Linear 연동 설정하기

워크플로우를 만들기 전에 Linear를 연결해 두면, 하이퍼클래스가 승인된 Linear 워크스페이스를 안전하게 읽고 쓸 수 있어요. 연결을 저장한 뒤에도 트리거와 액션마다 팀, 프로젝트, 이슈, 라벨, 고객, 필드 매핑을 알맞게 설정해야 해요.

### 방법 1: 워크플로우 빌더에서 Linear 연결하기

1. **자동화 > 워크플로우**로 이동해요.

   ![워크플로우 목록 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071576255/original/Qwuo4a3bz6eiwte4QZqiFUAJie4SylcOJw.png?1779109335)
2. 기존 워크플로우를 열거나 새 워크플로우를 만들어요.

   ![워크플로우 열기 또는 새로 만들기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071576412/original/pELBthok8bAayVgBmZNkYE2sfYLIB07CvA.png?1779109416)
3. Linear 트리거나 액션을 추가해요.
4. 사용할 트리거나 액션을 선택해요.

   ![Linear 트리거 또는 액션 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071576630/original/TLFyie_G2TIYnnbabvz-7IqlDhKkXn4d1w.png?1779109485)
5. **Connect Now**(지금 연결)를 클릭해요.
6. OAuth로 Linear 계정에 로그인해요.

   ![Linear 계정 로그인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071577329/original/KF3eS12wXA97YKxbw9lIaXKnYqk92ZT0WA.png?1779109888)
7. 연동이 접근할 워크스페이스와 팀을 승인해요.
8. **Save**(저장)를 클릭해요.
9. 선택한 트리거나 액션의 나머지 설정을 이어서 해요.

### 방법 2: 설정에서 Linear 연결하기

1. **설정 > 연동**으로 이동해요.
2. 연동 목록에서 Linear를 찾아 **Connect**(연결)를 클릭해요.

   ![설정의 연동 목록에서 Linear 연결](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071577653/original/QLwUWzA-yAmvXm4J7nB9H1zzgKCqVL6Pnw.png?1779110034)
3. OAuth로 Linear 계정에 로그인해요.

   ![Linear 계정 로그인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071577729/original/w-1FLzWRrumwdI7IRqAy28BwkiamIaFkAw.png?1779110091)
4. 워크스페이스를 승인해요.
5. 연결을 저장해요.
6. 워크플로우 빌더로 돌아가 Linear 트리거나 액션을 설정해요.

---

## 자주 묻는 질문

### Linear 트리거는 바로 실행되나요?
네. Linear 트리거는 Linear 웹훅으로 작동하는 즉시 실행 방식이라, 해당하는 Linear 이벤트가 생기면 워크플로우가 바로 실행돼요.

### Linear 트리거와 액션도 프리미엄 워크플로우 구성 요소인가요?
네. Linear 트리거와 액션은 프리미엄 워크플로우 구성 요소로 분류돼요. 프리미엄 액션 크레딧은 표준 자동화 요율로 차감돼요.

### 트리거나 액션의 드롭다운에 Linear 팀이 보이지 않아요.
OAuth 설정 과정에서 해당 팀을 승인하지 않았을 수 있어요. Linear 연결을 다시 하거나 확인해서, 올바른 워크스페이스와 팀을 승인했는지 확인하세요.

### Linear 연결 하나를 여러 워크플로우에서 쓸 수 있나요?
네. Linear를 한 번 연결하면 여러 워크플로우의 Linear 트리거와 액션을 설정할 때 그 연결을 쓸 수 있어요. 단, 승인한 워크스페이스와 팀 접근 권한이 선택한 워크플로우 단계를 지원해야 해요.

### Linear 트리거가 실행되지 않아요.
선택한 팀, 필터, 라벨, 프로젝트, 상태와 워크플로우 게시 상태를 확인하세요. 최근에 조건에 맞는 Linear 기록으로 트리거를 테스트해 보고, 워크플로우 실행 로그도 살펴보세요.

### Update Issue를 쓰면 설정하지 않은 필드도 덮어써지나요?
아니요. **Update Issue** 액션은 직접 설정한 필드만 보내요. 나머지 Linear 이슈 필드는 그대로 유지돼요.

### Linear에 고객이 없으면 워크플로우에서 새로 만들 수 있나요?
네. 먼저 **Find Customer**를 실행하세요. 일치하는 고객이 없으면 **Create Customer**로 분기하고, 필요하면 이어서 **Create Customer Need**를 실행하세요.

### 고객 니즈를 쓰려면 어떤 Linear 요금제가 필요한가요?
대부분의 트리거와 액션은 Linear 표준 요금제에서 작동해요. 다만 고객과 고객 니즈 기능은 Linear의 고객 요청 기능에 따라 달라서, 특정 Linear 요금제가 필요할 수 있어요.
