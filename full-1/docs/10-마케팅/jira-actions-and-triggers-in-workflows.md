---
원문: https://help.gohighlevel.com/support/solutions/articles/155000008219-jira-actions-and-triggers-in-workflows
번역일: 2026-11-06
카테고리: 10-마케팅
---

# 워크플로우에서 Jira 트리거·액션 사용하기

Jira Cloud를 하이퍼클래스 워크플로우에 연결하면 이슈 관리와 고객 후속 연락을 자동화할 수 있어요. Jira 이벤트로 워크플로우를 시작하고, 워크플로우 액션으로 Jira 이슈를 찾거나 만들고 수정하고 관리할 수 있어요. 이 문서에서는 연결 방법, 사용할 수 있는 트리거와 액션, 연락처 매칭, 문제 해결 방법을 안내해요.

## Jira 연동이란?

Jira 연동은 하이퍼클래스 워크플로우와 Jira Cloud를 이어 주는 기능이에요. Jira 트리거는 이슈가 만들어지거나 업데이트될 때 자동화를 시작해요. Jira 액션은 워크플로우에서 이슈, 사용자, 프로젝트, 스프린트를 다룰 수 있게 해 줘요. 고객에게 메시지를 보내려면 일치하는 하이퍼클래스 연락처가 있어야 해요.

## Jira 연동의 장점

Jira 이슈 활동을 하이퍼클래스와 연결하면, 지원팀·개발팀·고객 커뮤니케이션을 같은 작업을 반복하지 않고 조율할 수 있어요.

- 양방향 자동화: Jira 이벤트에 반응하고, 지원되는 업데이트를 Jira로 보낼 수 있어요.
- 적시 후속 연락: 설정한 이슈 조건을 충족하면 일치하는 연락처에 알릴 수 있어요.
- 중복 작업 감소: 정해 둔 조건으로 관련 이슈를 찾아 연결할 수 있어요.
- 이슈 관리: 이슈를 만들거나 수정하고, 댓글과 첨부 파일을 추가하고, 작업을 기록하고, 관찰자나 스프린트를 관리할 수 있어요.
- 여러 사이트 사용: 연결한 계정에서 접근할 수 있는 Jira Cloud 사이트 중에서 고를 수 있어요.
- 워크플로우 통합 관리: CRM 작업, 알림, Jira 액션을 하나의 자동화에 함께 넣을 수 있어요.

## 사전 준비

Jira를 연결하기 전에 자동화에 필요한 계정과 데이터에 접근할 수 있는지 확인하세요.

- 하이퍼클래스 서브 계정의 **자동화 > 워크플로우**에 접근할 수 있어야 해요.
- Atlassian 계정과 그 이메일 주소, 그리고 필요한 Jira Cloud 사이트와 리소스에 접근할 수 있어야 해요.
- Jira 활동으로 하이퍼클래스 연락처를 찾아야 한다면 이메일 주소, 연락처 ID, 티켓 ID 같은 공통 참조 값이 있어야 해요.

## Jira 계정 연결하기

Atlassian 계정을 한 번 승인해 두면, Jira를 지원하는 워크플로우 단계에서 그 연결을 선택해 쓸 수 있어요.

1. **자동화 > 워크플로우**를 열고 워크플로우를 만들거나 연 다음, Jira 트리거나 액션을 추가해요.
2. 연결된 계정이 없으면 **Connect your account**(계정 연결)를 클릭해요.
3. **외부 인증 설정**에서 연결 **이름**과 Atlassian 계정 **이메일**을 입력해요.
4. **계속**을 클릭하고 Atlassian에서 접근을 승인해요.
5. 승인한 계정을 선택하고, 해당하는 경우 알맞은 **Cloud Site**(클라우드 사이트)를 선택해요.

![워크플로우 단계에서 Jira 연결을 승인하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076260473/original/dL3ST1Jx8mG8raXeRWmUEm65lOsyg4_Jog.png?1784298081)

다른 방법으로는 **설정 > 연동 > Jira > 연결**에서도 Jira를 연결할 수 있어요.

![연동 화면에서 Jira 연결 옵션을 보여 주는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083252298/original/mPm71kdhu4HqtRT5AiUzKWhpjsd0Ggmseg.png?1791948787)

## Jira 트리거

Jira 트리거는 이슈 이벤트가 생길 때 하이퍼클래스 워크플로우를 시작해요. Cloud Site와 이슈 필터를 사용해 어떤 이벤트에 반응할지 좁힐 수 있어요.

| 트리거 | 실행 시점 | 주로 쓰는 경우 |
| --- | --- | --- |
| **New issue**(새 이슈) | Jira 이슈가 만들어졌을 때 | 비슷한 이슈를 찾거나 후속 연락을 시작할 때 |
| **Updated issue**(업데이트된 이슈) | 기존 이슈가 업데이트되었을 때 | 설정한 이슈 조건에 반응할 때 |

{% hint style="warning" %}
`Status = Done` 같은 필터는 이미 Done 상태인 이슈의 이후 업데이트에도 일치할 수 있어요. 고객에게 해결 소식을 알리기 전에 상태 전환 데이터를 확인하거나 안전장치를 추가하세요.
{% endhint %}

## Jira 액션

Jira 액션은 데이터를 검색하고 이슈 작업을 수행해요. 선택한 액션이 지원하는 Cloud Site와 Jira 리소스를 고르세요. 카테고리는 Find(찾기), Manage(관리), Enrich(보강), Organize(정리)로 나뉘어요.

| 카테고리 | 액션 | 용도 |
| --- | --- | --- |
| Find | **Find users** | Jira 사용자를 찾아요. |
| Find | **Find projects** | 접근할 수 있는 프로젝트를 찾아요. |
| Find | **Find issues** | 조건에 맞는 이슈를 검색해요. |
| Manage | **Create issue** | 프로젝트에 이슈를 만들어요. |
| Manage | **Update issue** | 기존 이슈를 수정해요. |
| Enrich | **Add comment to issue** | 댓글을 남겨요. |
| Enrich | **Add watcher to issue** | 이슈 관찰자를 추가해요. |
| Enrich | **Add attachment to issue** | 지원되는 파일을 첨부해요. |
| Enrich | **Add work log to issue** | 수행한 작업을 기록해요. |
| Organize | **Link issue** | 관련 이슈를 서로 연결해요. |
| Organize | **Move issue to sprint** | 이슈를 스프린트에 배정해요. |

전체 워크플로우 액션은 [워크플로우 액션 전체 목록](../07-워크플로우/기타/what-are-workflow-actions-complete-list.md)에서 확인할 수 있어요.

{% hint style="warning" %}
**Create issue**에는 Cloud Site가 필요해요. 선택할 수 있는 프로젝트, 이슈, 사용자, 스프린트는 승인한 Atlassian 계정에 따라 달라요. **Add attachment to issue** 액션이 지원하는 파일 출처만 사용하세요.
{% endhint %}

## Jira 이슈와 하이퍼클래스 연락처 매칭하기

Jira 이슈 이벤트만으로는 메시지를 보낼 하이퍼클래스 연락처를 자동으로 알 수 없어요. 공통 참조 값이 있으면 워크플로우가 받을 사람을 찾아 확인할 수 있어요.

1. 이메일 주소, 티켓 ID, 지원되는 필드에 매핑한 연락처 ID처럼 두 시스템에 같은 식별 값을 저장해 두세요.
2. 액션이 지원되는 곳에서 그 식별 값으로 **Find Contact**(연락처 찾기)를 사용하세요. 자세한 내용은 [워크플로우 액션 - 연락처 찾기](../07-워크플로우/Contact-Workflow-Actions/workflow-action-find-contact.md)에서 볼 수 있어요.
3. 연락처 관련 액션은 **Contact Found**(연락처를 찾음) 분기 아래에 이어 붙이세요. 일치하는 연락처를 찾지 못했을 때는 **Contact Not Found**(연락처를 찾지 못함) 분기에 안전한 대체 경로를 만들어 두세요.

![Find Contact 결과로 Contact Found와 Contact Not Found 분기가 나뉜 워크플로우](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083252303/original/b1qo86aEm4w5q851cUXw-TrlBTjCSJhq9A.png?1791948821)

## Jira 워크플로우 활용 예시

Jira와 하이퍼클래스 단계를 조합하는 방법을 보여 주는 예시예요. 필터, 데이터 참조 값, 대체 경로는 업무 방식에 맞게 바꿔 쓰세요.

- 고객이 제보한 버그: 하이퍼클래스에서 설정한 이벤트로 시작 → 필요하면 Jira 프로젝트나 사용자 찾기 → **Create issue** → 필요하면 댓글이나 지원되는 첨부 파일 추가
- 해결 후 후속 연락: **Updated issue** → 해결 조건을 확인하고 중복 알림을 막기 → 하이퍼클래스 연락처 매칭 → 연락처를 찾았을 때만 업데이트 전송
- 중복 이슈 감지: **New issue** → 공통 참조 값으로 **Find issues** → [**If/Else**(조건 분기)](../07-워크플로우/Internal-Tools-Workflow-Actions/workflow-action-if-else.md)로 결과 확인 → 알맞은 이슈가 있으면 **Link issue**

## Jira 워크플로우 설정하기

알맞은 트리거, Jira 계정, 데이터 참조 값을 설정한 뒤, 워크플로우를 게시하기 전에 각 경로를 테스트하세요. 워크플로우 빌더 사용법은 [워크플로우 빌더 둘러보기](../07-워크플로우/기타/workflow-builder-walkthrough.md)에서 볼 수 있어요.

1. 워크플로우를 만들거나 열어요. **자동화 > 워크플로우**로 이동해서 워크플로우 이름을 입력해요.

   ![워크플로우 페이지에서 워크플로우를 만들거나 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083252163/original/Dh9hBujFyHgbivG8XFWlgB4P4t7Lm5LV3w.png?1791948197)
2. **트리거를 선택하세요** 화면에서 트리거를 골라요. Jira에서 하이퍼클래스로 자동화하려면 **New issue**나 **Updated issue**를 선택하고, 워크플로우가 Jira에서 작업을 수행해야 한다면 알맞은 하이퍼클래스 트리거를 선택해요.

   ![워크플로우 빌더에서 Jira 트리거를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076261437/original/j-k3BeZRSc6H-bbd2iFWx__NZdzrdrSF2w.png?1784298620)
3. Jira를 연결해요. 기존 연결을 선택하거나, 위의 연결 단계에 따라 새로 승인해요.

   ![워크플로우 빌더에서 Jira 계정 연결 필드를 보여 주는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076261473/original/-oEWCg-ktJNMy1pISgrWA1cmykNaQfaKMw.png?1784298649)
4. Jira 단계를 설정해요. 계정, Cloud Site, 그리고 해당하는 프로젝트·이슈·사용자·스프린트 등의 필드를 선택해요. 동적으로 값을 넣어야 할 때는 지원되는 커스텀 값을 사용하세요.

   ![선택한 액션을 설정하는 Jira 워크플로우 단계 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076261685/original/SvpDZ0EoiqdV8h4iuqLZN4DIKwceTDSHug.png?1784298752)
5. 분기와 후속 단계를 추가해요. 일치 결과에는 **If/Else**를, 필요한 곳에는 **Find Contact**를 사용하세요. 메시지를 보내거나 이슈를 바꾸기 전에 데이터가 없는 경우를 먼저 처리하세요.
6. 테스트하고 저장한 다음 게시해요. 올바른 사이트, 이슈, 값, 수신자인지 확인하세요. 실행 후에는 [**Execution Logs**(실행 로그)](../07-워크플로우/시작하기/workflows-improved-execution-logs-enrollment-history.md)에서 **상세 보기**를 열어 실행 상태와 확인할 수 있는 오류 정보를 살펴보세요.

## 자주 묻는 질문

### Jira 단계마다 다른 Cloud Site를 쓸 수 있나요?

지원되는 단계에는 각각 Cloud Site 설정이 있어요. 단계마다 연결한 계정에서 접근할 수 있는 사이트를 선택하세요.

### Jira 프로젝트, 사용자, 스프린트가 안 보여요.

선택한 Cloud Site와, 연결한 계정의 Jira 권한을 확인하세요.

### 검색 조건에 여러 이슈가 일치하면 어떻게 하나요?

검색 조건을 더 좁히고, 이슈를 자동으로 연결하거나 업데이트하기 전에 결과를 확인하세요.

### Find Contact에서 일치하는 연락처가 없으면 어떻게 하나요?

**Contact Not Found** 분기를 따로 처리하세요. 받을 사람을 확인하지 못했다면 고객 대상 메시지를 보내지 마세요.

### Jira 액션이 실패한 이유는 어디에서 확인하나요?

워크플로우의 **Execution Logs**를 열고 **상세 보기**를 선택하세요. 선택한 사이트, 입력 값, 상태, 확인할 수 있는 오류 정보를 살펴보세요.
