---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003429-workflow-action-add-leads-under-an-affiliate
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Add Leads Under an Affiliate(제휴 하위에 리드 추가)

**Add Leads Under an Affiliate**(제휴 하위에 리드 추가) 액션을 쓰면 리드를 지정한 캠페인의 특정 제휴 파트너에게 자동으로 배정할 수 있어요. 리드 관리가 간편해지고, 제휴 실적이 정확하게 반영되고, 리드와 알맞은 제휴 파트너가 연결돼요. 수작업도 줄어들어요.

## Add Leads Under an Affiliate 액션이란?

이 액션은 리드 유입 과정을 제휴 관리 시스템과 바로 이어 줘요. 액션이 실행되면 새 리드가 선택한 제휴 파트너와 캠페인 아래로 자동 배정돼요. 그래서 모든 연락처가 실적 리포트, 수수료, 후속 관리에 맞게 추적되고 귀속돼요.

제휴 배정 방식에 따라 수동으로도, 자동으로도 쓸 수 있어요.

## 이 액션을 쓰면 좋은 점

제휴 워크플로우를 자동화하면 사람이 놓치는 실수를 줄일 수 있어요. 주요 장점은 다음과 같아요.

- 자동화: 직접 입력하지 않아도 리드가 알맞은 제휴 파트너에게 자동으로 배정돼요.
- 정확도: 캠페인 데이터와 바로 동기화하므로 제휴 추적 오류를 막을 수 있어요.
- 유연성: 배정 방식을 **Manual**(수동), **Auto-Track via Attribution**(어트리뷰션으로 자동 추적), **Custom Mapping**(커스텀 매핑) 중에서 고를 수 있어요.
- 연동: 워크플로우 자동화, 폼, 제휴 추적 링크를 매끄럽게 연결해요.
- 확장성: 제휴 네트워크가 커져도 리드 배정을 자동화해서 효율적으로 처리할 수 있어요.

## 워크플로우 액션 설정하기

리드가 들어오는 경로에 따라 리드를 제휴 파트너에게 자동 또는 수동으로 배정하도록 이 액션을 설정할 수 있어요.

아래 순서대로 트리거를 만들고, 액션을 추가하고, 설정 방식을 고른 다음 워크플로우를 게시해 보세요.

### 1. 워크플로우 빌더 열기

1. 왼쪽 메뉴에서 **자동화 > 워크플로우**로 이동하세요.
2. **Workflow List**(워크플로우 목록) 화면 오른쪽 위에서 **Create Workflow**(워크플로우 만들기)를 클릭하세요.
3. 필요에 따라 레시피, 템플릿, 처음부터 만들기 중에서 시작 방식을 고르세요.

이렇게 하면 자동화 구조를 짜는 워크플로우 빌더가 열려요.

![워크플로우 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057427792/original/tv22d0uAxG_kXkldg7Sw-mNcsb_iwTK37w.png?1762167673)

### 2. 워크플로우 트리거 추가하기

제휴 액션을 추가하기 전에 워크플로우에 트리거가 있어야 해요. 트리거는 리드를 제휴 파트너 아래에 추가할 시점을 정해 줘요.

트리거가 없으면 리드가 워크플로우에 들어오지 않아서 액션도 실행되지 않아요.

자주 쓰는 트리거는 다음과 같아요.

- **Form Submitted**(폼 제출): 연락처가 특정 폼을 제출했을 때
- **Tag Added**(태그 추가됨): 연락처에 태그가 붙었을 때

### 3. 워크플로우 액션 추가하기

트리거를 설정했으면 워크플로우에 **Add Leads Under an Affiliate** 액션을 추가해요.

1. **+ Add** 버튼을 클릭하세요.
2. 드롭다운 메뉴에서 **Add Action**(액션 추가)을 선택하세요.

사용할 수 있는 액션 목록이 열려요. 이 단계에서 제휴 리드 배정을 처리할 새 액션 블록이 추가돼요.

![+ Add 버튼에서 Add Action 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057426145/original/OIZKKiCio23PynVlAPspLfNfHkzl6a87Og.jpeg?1762166888)

### 4. 액션 유형 선택하기

1. 액션 메뉴가 열리면 **Actions**(작업) 아래의 **Affiliate**(제휴) 섹션으로 스크롤하세요.
2. **Add Leads Under an Affiliate**를 선택하세요.

이렇게 하면 워크플로우가 **제휴 관리자**와 연결되어, 특정 제휴 캠페인과 제휴 파트너 아래에 리드를 추가할 수 있어요.

액션을 선택하면 워크플로우 빌더에 액션이 나타나고, 바로 설정할 수 있어요.

![Affiliate 섹션에서 Add Leads Under an Affiliate 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057426311/original/Jw2a3lv7PbtA1rd8EBTsEUo8SlX60gle3w.jpeg?1762166953)

### 5. 방식 선택: 수동 배정

리드를 특정 제휴 파트너와 캠페인에 직접 배정하고 싶다면 **Manual Assignment**(수동 배정)를 고르세요.

배정 경로가 고정된 경우, 내부용 워크플로우, 제휴 배정이 이미 정해져 있는 경우에 알맞아요.

설정 방법은 다음과 같아요.

1. **Choose Action Mapping**(액션 매핑 선택)에서 **Manual**(수동)을 선택하세요.
2. 드롭다운 목록에서 제휴 **Campaign**(캠페인)을 고르세요.
3. 캠페인을 고르면 그 캠페인에 연결된 제휴 파트너가 표시돼요. 목록에서 원하는 **Affiliate**(제휴)를 선택하세요.
4. 설정을 저장하세요.

이제 이 워크플로우에 들어오는 모든 새 리드가 선택한 제휴 파트너에게 자동으로 배정돼요.

![Manual 방식으로 캠페인과 제휴 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057426391/original/LZ5YcEpMsdXR_uen_vf_qQ3GPNWvF3Vb5Q.jpeg?1762166995)

### 6. 방식 선택: 어트리뷰션으로 자동 추적

**Auto-Track Affiliate via Attribution**(어트리뷰션으로 제휴 자동 추적) 방식은 제휴 ID(`am_id`)가 들어 있는 추적 링크를 기준으로 리드를 제휴 파트너에게 자동 배정해요.

제휴 링크로 트래픽을 유입시키는 자동화 환경에 가장 알맞아요.

<!-- 검토 필요: 원문 내용이 서로 다름 (앞에서는 "Auto-Track via Attribution", 여기서는 "Auto-Track Affiliate via Attribution"으로 표기) -->

설정 방법은 다음과 같아요.

1. **Choose Action Mapping**에서 **Auto-Track Affiliate via Attribution**을 선택하세요.
2. **Attribution Source**(어트리뷰션 소스)를 고르세요.
   - **First Attribution**(첫 번째 어트리뷰션): 연락처를 처음 소개한 제휴 파트너에게 실적을 귀속해요.
   - **Latest Attribution**(최근 어트리뷰션): 가장 최근에 상호작용한 제휴 파트너에게 실적을 귀속해요.
3. 설정을 저장하세요.

리드가 제휴 URL(예: `https://yourdomain.com/?am_id=1234`)로 들어오면 하이퍼클래스가 그 ID를 인식해서 알맞은 제휴 파트너에게 자동으로 실적을 귀속해요.

![Auto-Track Affiliate via Attribution 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057426453/original/zpQh8LCaLbSn9UNAqQZFcTUhODFd671Dlw.jpeg?1762167017)

### 7. 방식 선택: 커스텀 매핑

**Custom Mapping**(커스텀 매핑)을 쓰면 커스텀 필드나 워크플로우 변수에 저장된 데이터로 제휴 파트너를 동적으로 배정할 수 있어요.

추적 링크 대신 API 연동이나 외부 시스템으로 제휴 데이터를 전달하는 경우에 알맞아요.

설정 방법은 다음과 같아요.

1. **Choose Action Mapping**에서 **Custom Mapping**을 선택하세요.
2. 매핑 소스를 입력하세요.
   - 커스텀 필드를 쓰는 경우: `{{contact.custom_field.am_id}}`
   - 워크플로우 변수를 쓰는 경우: `{{workflow.am_id}}`

입력한 제휴 ID를 시스템이 알맞은 제휴 레코드와 맞춰 보고, 리드를 자동으로 배정해요.

이 방식은 복잡한 배정 경로나 연동된 제휴 데이터 흐름에 가장 유연하게 쓸 수 있어요.

![Custom Mapping 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057426494/original/hc3hXwhgX4T05iQnW_NmKWNptjBvxE8tKQ.jpeg?1762167037)

### 8. 워크플로우 테스트하고 게시하기

활성화하기 전에 제휴 파트너가 제대로 배정되는지 테스트하세요. 트리거, 캠페인 선택, 매핑 로직, 어트리뷰션이 모두 의도대로 동작하는지 확인할 수 있어요.

1. 오른쪽 위의 **Test Workflow**(워크플로우 테스트)를 클릭해 리드 유입을 시뮬레이션하세요.
2. **Execution Logs**(실행 로그)에서 제휴 배정이 성공했는지 확인하세요.
3. 확인이 끝나면 **Draft**(임시 저장)에서 **Publish**(게시)로 전환해 워크플로우를 활성화하세요.

이제 워크플로우가 라이브 상태가 되어, 선택한 방식대로 리드를 제휴 파트너에게 자동 배정해요.

## 자주 묻는 질문

### am_id와 일치하는 제휴 파트너를 찾지 못하면 어떻게 되나요?
리드를 배정하지 않은 채 워크플로우가 완료돼요. `am_id`가 캠페인에 있는 제휴 파트너의 ID와 일치하는지 확인하세요.

### 자동으로 배정된 제휴 파트너를 직접 바꿀 수 있나요?
네. 수정이 필요하면 **제휴 관리자**에서 제휴 파트너를 직접 다시 배정할 수 있어요.

### 이 액션을 쓰려면 판매나 보상이 있어야 하나요?
아니요. 보상이나 금액이 없어도 리드를 제휴 파트너 아래에 배정할 수 있어요. 보상이나 수수료는 제휴 파트너의 링크를 통해 구매나 전환이 일어났을 때만 적용돼요.

### First Attribution과 Latest Attribution은 어떻게 다른가요?
**First Attribution**은 처음 소개한 제휴 파트너에게 실적을 귀속하고, **Latest Attribution**은 전환 직전에 가장 최근에 소개한 제휴 파트너에게 귀속해요.

### 리드 한 명에게 제휴 파트너를 여러 명 배정할 수 있나요?
아니요. 정확한 추적을 위해 리드는 캠페인마다 제휴 파트너 한 명에게만 배정할 수 있어요.

### 활성화하기 전에 이 워크플로우를 테스트하려면 어떻게 하나요?
**Test Workflow** 기능에 샘플 데이터를 넣어서 게시하기 전에 배정이 제대로 되는지 확인하세요.
