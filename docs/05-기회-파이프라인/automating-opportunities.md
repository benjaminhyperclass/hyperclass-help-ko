---
원문: /support/solutions/articles/155000002048-automating-opportunities
번역일: 2026-11-06
카테고리: 05-기회-파이프라인
---

# 워크플로우로 기회 자동화하기

하이퍼클래스의 워크플로우 빌더를 쓰면 영업 과정을 자동화할 수 있어요. 이 문서에서는 반복 작업을 찾고, 기회 관련 트리거와 액션으로 워크플로우를 만들어 켜는 과정까지 단계별로 안내해요.

### 1단계: 반복 작업 찾기

- 영업 과정에서 반복적이고 시간이 오래 걸리는 작업을 먼저 찾아보세요. 예를 들어 후속 이메일 보내기, 팀원에게 리드 배정하기, 예약 잡기, 기회 상태 업데이트하기 같은 작업이 있어요.

  ![반복 작업을 찾는 예시 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155010156952/original/KhO2gWjWScXA-SzbbcTttt7UT7HXchMFlg.png?1697438139)

### 2단계: 자동화 워크플로우 설계하기

1. 왼쪽 메뉴에서 **자동화**(Automations)를 클릭하세요.
2. **워크플로우**를 클릭해 워크플로우 빌더로 들어가세요.
3. **워크플로우 추가**를 클릭해 새 워크플로우를 만드세요.
4. 워크플로우 목적이 드러나도록 이름을 정하세요.

   ![새 워크플로우를 만드는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021665988/original/J7nioiGa09D789uxeoQ_rFusROla3twvYQ.png?1709034966)

### 3단계: 트리거 이벤트 고르기

트리거 이벤트는 워크플로우를 시작시키는 계기예요. 리드가 폼을 작성하거나, 링크를 클릭하거나, 영업 파이프라인의 특정 단계에 도달하는 것 등이 있어요.

#### 기회 트리거

1. **Opportunity Status Changed**(기회 상태 변경): 기회의 상태가 업데이트될 때 워크플로우를 시작해요. 그 기회에 연결된 기본 필드나 커스텀 필드로 기회를 걸러 낼 수 있어요.

   ![Opportunity Status Changed 트리거 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021666627/original/ei9zp4_EHZ1Z-hGuW6almLWjBUNdcsk6ew.png?1709035117)

2. **Opportunity Created**(기회 생성): 기회가 만들어질 때 워크플로우를 시작해요. 만들어지는 기회에 연결된 기본 필드나 커스텀 필드로 걸러 낼 수 있어요.

   ![Opportunity Created 트리거 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021667096/original/d_hxWB0vd-XSz-pD3-1xoJNvRNqyQ3Rbiw.png?1709035248)

3. **Opportunity Status Changed**(기회 상태 변경): 상태가 바뀐 기회를 걸러 내요.

   ![Opportunity Status Changed 트리거 필터 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021667978/original/XW2G-kzsr091xEeRj-VkstOktx8rivwxXw.jpeg?1709035592)

4. **Stale Opportunities**(정체된 기회): X일 동안 변동이 없는 기회를 걸러 내요. 이 기회들도 여러 기본 필드와 커스텀 필드로 걸러 낼 수 있어요.

   ![Stale Opportunities 트리거 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021667948/original/sAE7q5SfCU2-8JIUUyUZMSl8ei9ClDHS4w.jpeg?1709035579)

5. **Pipeline Stage Changed**(파이프라인 단계 변경): 파이프라인 단계가 바뀔 때 워크플로우를 시작해요. 여러 기본 필드와 커스텀 필드로 기회를 걸러 낼 수도 있어요.

   ![Pipeline Stage Changed 트리거 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021668117/original/ZpZSVBPbx6b8hFgLgRXNFUwd1GFhGEEOLg.png?1709035662)

### 4단계: 워크플로우 액션 추가하기

트리거 이벤트와 조건이 맞을 때 자동으로 실행할 액션을 추가하세요. 연락처에 연결된 기회 찾기, 새 기회 만들기, 기회 업데이트하기 등 다양한 액션이 있어요.

전체 액션 목록과 동작 방식은 하이퍼클래스 도움말의 기회 워크플로우 액션 문서에서 확인할 수 있어요.

1. **Create Opportunity**(기회 만들기): 지정한 값으로 기회를 만들어요. **Pipeline**(파이프라인), **Pipeline Stage**(파이프라인 단계), **Opportunity Name**(기회명), **Opportunity Source**(기회 소스), **Opportunity Status**(기회 상태)와 **Lost reason**(고객전환실패 사유) 등 여러 필드를 설정할 수 있어요.

   ![Create Opportunity 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049128472/original/PdvVPLQhdichoAHpFm5zPbgyjvYuIAyeGA.png?1751355397)

2. **Remove Opportunities**(기회 제거): 걸러 낸 기회를 특정 파이프라인에서 제거해요.

   ![Remove Opportunities 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021669415/original/cYDjXPDEbllY9A40s98f4468krYYBJV9Rw.png?1709036119)

3. **IF/ELSE**(조건 분기): 특정 조건에 따라 워크플로우를 나눌 수 있어요. 필터에서 기회 필드를 쓰려면 워크플로우에 기회 기반 트리거가 있어야 해요. 이 단계에서는 모든 기본 필드와 커스텀 필드로 분기 조건을 설정할 수 있어요.

   ![IF/ELSE 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155021669650/original/5rgwh_s9XpHIew2e7FHP7zCbDqieglIdsQ.png?1709036227)

### 5단계: 테스트하고 다듬기

1. 워크플로우를 만들었으면 의도대로 작동하는지 테스트하세요.
2. 테스트용 리드나 더미 데이터로 워크플로우를 실행하고, 각 액션이 제대로 수행되는지 확인하세요.
3. 워크플로우의 성과를 지켜보고, 팀원들의 의견을 모아 개선할 부분을 찾으세요.
4. 테스트 결과와 의견을 바탕으로 필요한 부분을 수정하세요.

### 6단계: 워크플로우 켜기

1. 워크플로우 성능에 만족하면 워크플로우를 켜서 영업 과정 자동화를 시작하세요.
2. 지정한 조건이 충족될 때마다 하이퍼클래스가 워크플로우를 자동으로 실행해요. 반복 작업이 효율적이고 일관되게 처리돼요.

### 함께 보면 좋은 문서

- 기회 워크플로우 트리거
- 기회 워크플로우 액션
