---

번역일: 2026-04-08
카테고리: 22-Eliza > Eliza Agent Platform Onboarding
---

# CRM 내 Eliza 에이전트 플랫폼 설정

Eliza 에이전트 플랫폼은 CRM 내에서 어느 정도 사용할 수 있으며, 일부 설정을 통해 사용자가 CRM에서 직접 접근할 수 있습니다. 이 가이드에서는 CRM 내의 Eliza 설정에 대한 세부 사항을 다룹니다.

#### 이 가이드의 내용

#### [CRM 내 Eliza 설정](#crm-내-eliza-설정)

#### [Eliza 사용자 권한 설정](#eliza-사용자-권한-설정)

#### [Eliza 우회 태그](#eliza-우회-태그)

#### [Eliza 전송 태그](#eliza-전송-태그)

#### [Hyperclass 워크플로우에서 Eliza 에이전트 플랫폼 전송 액션](#hyperclass-워크플로우에서-eliza-에이전트-플랫폼-전송-액션)

## CRM 내 Eliza 설정

### Eliza 사용자 권한 설정

하위 계정 레벨에서 FAQ를 편집하고 Eliza를 설정할 사용자는 Agency Settings(에이전시 설정) > Team(팀) > Edit User(사용자 편집) > User permissions(사용자 권한)에서 Eliza Service를 활성화해야 합니다.

![사용자 권한 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48299174187/original/akJyJXWo9hMWQCjA4tKD_iuwlbwLiIkXGQ.png?1684954247)

**참고사항**

하위 계정 설정에 Eliza Service 탭을 추가하려면, 사용자 권한으로 이동해서 Eliza Service 탭을 토글하여 해당 사용자에게 접근 권한을 부여해야 합니다. 접근 권한이 부여되면, 하위 계정 설정에 Eliza Service 탭이 표시됩니다.

![Eliza Service 탭 권한 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48299173791/original/-XccIaC1L4t7OpvDhfzwCB30eB2_BpimmA.png?1684954080)

### Eliza 우회 태그

일부 대화가 Eliza 에이전트 플랫폼으로 들어오는 것을 원하지 않는 경우, Eliza 우회 태그를 사용하세요.

Settings(설정) > Tag(태그)에서 태그를 생성하고, Sub-Account Settings(하위 계정 설정) >> Eliza Service에서 이를 Eliza 우회 태그로 선택하세요. 선택하면 새로운 인바운드 대화가 이 태그를 확인하여 Eliza 에이전트 플랫폼을 우회해야 하는지 판단합니다. 이 태그가 연락처에 있으면 인바운드 메시지가 EAP로 전달되지 않습니다.

이 대화가 이미 Eliza에 있다면, 에이전트가 해당 대화로 이동하려고 할 때 에이전트 대기열에서 제거됩니다. 이렇게 종료된 대화는 "우회 태그 할당됨"이라는 처리 결과를 갖게 됩니다.

![Eliza 우회 태그 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290432029/original/jT5NzbRFRVkKc8Fx6EEJmYU7uw5MbNLqpQ.png?1680264581)

### Eliza 전송 태그

모든 대화가 Eliza로 들어오는 것이 아니라 특정 몇 개만 들어오기를 원하는 상황에서는 태그를 생성하고 Location Settings(로케이션 설정) >> Eliza Service에서 해당 태그를 "Eliza 전송 태그"로 설정하세요. 아래 스크린샷을 참조하세요.

워크플로우를 사용하여 대화가 Eliza로 들어와야 하는 연락처에게 이 태그를 할당하세요.

![Eliza 전송 태그 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290430423/original/94vKNYwKYicHIsLdeyVxj6m8keTBSwN7OQ.png?1680264124)

이 태그가 있는 새로운 인바운드 대화만 Eliza로 전송됩니다. 연락처에 태그가 할당되었고 인바운드 메시지 없이도 Eliza에 나타나기를 원한다면, "Eliza로 전송" 워크플로우 액션을 사용하세요. 자세한 내용은 이 사용자 가이드의 왼쪽 메뉴에서 "2. 대화"로 이동하여 "Eliza 전송 설정" 섹션을 찾아보세요.

**참고사항:**

실수로 Eliza 우회 태그와 Eliza 전송 태그를 모두 설정한 경우, 시스템은 대화가 누락되지 않도록 안전을 위해 Eliza 전송 태그만 인식합니다.

### Hyperclass 워크플로우에서 Eliza 에이전트 플랫폼 전송 액션

이 워크플로우 액션을 통과하는 연락처는 연결된 Eliza 계정의 연락처로 전송됩니다.

![Eliza 에이전트 플랫폼 전송 액션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290430435/original/EcTE4c2h9HWD7NzCOmpQijjaNRa1oMTAAA.png?1680264126)

---
*원문 최종 수정: Wed, 24 May, 2023 at 1:50 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*