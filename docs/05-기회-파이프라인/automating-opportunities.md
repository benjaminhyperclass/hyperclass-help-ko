---

번역일: 2026-04-06
카테고리: 05-기회-파이프라인
---

# 기회 자동화

Hyperclass에서 기회를 자동화하는 것은 플랫폼의 강력한 워크플로우 빌더를 사용하여 쉽게 할 수 있는 작업입니다. 다음 단계를 따라 영업 프로세스를 자동화하고 워크플로우를 효율화해보세요:

이 문서의 내용:

- [1단계: 반복 작업 식별](#1단계-반복-작업-식별)
- [2단계: 자동화 워크플로우 설계](#2단계-자동화-워크플로우-설계)
- [3단계: 트리거 이벤트 선택](#3단계-트리거-이벤트-선택) - [기회 트리거](#기회-트리거)
- [4단계: 워크플로우 액션 추가](#4단계-워크플로우-액션-추가)

---

### 1단계: 반복 작업 식별

영업 워크플로우에서 반복적이고 시간이 많이 소요되는 작업이나 프로세스를 먼저 식별해보세요. 예를 들어 후속 이메일 발송, 팀원에게 리드 배정, 예약 일정 관리, 기회 상태 업데이트 등이 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010156952/original/KhO2gWjWScXA-SzbbcTttt7UT7HXchMFlg.png?1697438139)

### 2단계: 자동화 워크플로우 설계

- Hyperclass 대시보드에서 "Automations(자동화)" 섹션으로 이동합니다.
- "Workflows(워크플로우)"를 클릭하여 워크플로우 빌더에 접근합니다.
- "Create New Workflow(새 워크플로우 만들기)"를 클릭하여 자동화 워크플로우 구축을 시작합니다.
- 워크플로우의 목적을 반영하는 설명적인 이름을 지정합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021665988/original/J7nioiGa09D789uxeoQ_rFusROla3twvYQ.png?1709034966)

### 3단계: 트리거 이벤트 선택

리드가 폼을 작성하거나, 링크를 클릭하거나, 영업 파이프라인의 특정 단계에 도달하는 등의 액션을 트리거 이벤트로 선택할 수 있습니다.

#### 기회 트리거

**1. 기회 상태 변경(Opportunity status changed):** 기회의 상태를 업데이트할 때 워크플로우가 트리거됩니다. 기회에 연결된 모든 기본 또는 커스텀 필드를 기준으로 기회를 필터링할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021666627/original/ei9zp4_EHZ1Z-hGuW6almLWjBUNdcsk6ew.png?1709035117)

**2. 기회 생성(Opportunity Created):** 기회가 생성될 때 워크플로우를 트리거합니다. 이 트리거는 생성되는 기회에 연결된 모든 기본 또는 커스텀 필드를 기준으로 필터링할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021667096/original/d_hxWB0vd-XSz-pD3-1xoJNvRNqyQ3Rbiw.png?1709035248)

**3. 기회 상태 변경(Opportunity Status Changed):** 상태가 변경된 기회를 필터링합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021667978/original/XW2G-kzsr091xEeRj-VkstOktx8rivwxXw.jpeg?1709035592)

**4. 오래된 기회(Stale Opportunities):** X일 동안 변경 사항이 없는 기회를 필터링하며, 이러한 기회들은 다양한 기본 및 커스텀 필드를 기준으로도 필터링할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021667948/original/sAE7q5SfCU2-8JIUUyUZMSl8ei9ClDHS4w.jpeg?1709035579)

**5. 파이프라인 단계 변경(Pipeline Stage Changed):** 파이프라인 단계가 변경될 때 워크플로우를 트리거할 수 있으며, 여러 기회의 기본 및 커스텀 필드를 기준으로 필터링할 수도 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021668117/original/ZpZSVBPbx6b8hFgLgRXNFUwd1GFhGEEOLg.png?1709035662)

### 4단계: 워크플로우 액션 추가

트리거 이벤트와 조건이 충족될 때 자동으로 수행될 액션을 워크플로우에 추가합니다. 이러한 액션에는 연락처에 연결된 기회 찾기, 새 기회 생성, 기회 업데이트 등이 포함될 수 있습니다.

액션의 전체 목록과 작동 방식은 여기에서 확인할 수 있습니다.

**1. 기회 생성(Create Opportunity):** 트리거된 기회에 대해 지정된 값으로 기회를 생성할 수 있습니다. 파이프라인, 파이프라인 단계, 기회명, 기회 소스, 기회 상태와 실패 사유 등 여러 필드를 업데이트할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049128472/original/PdvVPLQhdichoAHpFm5zPbgyjvYuIAyeGA.png?1751355397)

**2. 기회 제거(Remove Opportunities):** 특정 파이프라인에서 필터링된 기회를 제거할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021669415/original/cYDjXPDEbllY9A40s98f4468krYYBJV9Rw.png?1709036119)

**3. 조건 분기(IF/ELSE):** 특정 조건에 따라 워크플로우를 분기할 수도 있습니다. 워크플로우에 기회 기반 트리거가 있는 경우에만 필터에서 기회 필드를 사용할 수 있습니다. 이 단계에서 분기를 필터링하는 데 모든 기본 및 커스텀 필드를 사용할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021669650/original/5rgwh_s9XpHIew2e7FHP7zCbDqieglIdsQ.png?1709036227)

**5단계: 테스트 및 개선**

- 자동화 워크플로우를 생성한 후, 의도한 대로 작동하는지 테스트해보세요.
- 테스트 리드나 더미 데이터를 사용하여 워크플로우를 트리거하고, 각 액션이 올바르게 수행되는지 확인합니다.
- 워크플로우의 성능을 모니터링하고 팀원들로부터 피드백을 수집하여 개선할 영역을 식별합니다.
- 테스트와 피드백을 바탕으로 워크플로우에 필요한 조정이나 개선을 수행합니다.

**6단계: 워크플로우 활성화**

- 자동화 워크플로우의 성능에 만족하면 활성화하여 영업 프로세스 자동화를 시작하세요.
- Hyperclass는 지정된 조건이 충족될 때마다 자동으로 워크플로우를 트리거하여, 반복 작업이 효율적이고 일관되게 처리되도록 합니다.

**기타 중요 링크**

기회 워크플로우 트리거

기회 워크플로우 액션

---
*원문 최종 수정: 2025-07-01*
*Hyperclass 사용 가이드 — hyperclass.ai*