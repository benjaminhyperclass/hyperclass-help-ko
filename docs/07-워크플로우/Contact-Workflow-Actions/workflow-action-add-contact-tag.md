---
원문: /support/solutions/articles/155000003111-workflow-action-add-contact-tag
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Add Contact Tag(연락처 태그 추가)

**Add Contact Tag**(연락처 태그 추가) 액션을 쓰면 워크플로우 안에서 연락처의 행동, 속성, 트리거에 따라 태그를 자동으로 붙여 연락처를 분류할 수 있어요. 태그를 활용하면 자동화가 편해지고, 타겟팅이 정확해지고, 데이터베이스도 깔끔하게 유지돼요. 이 문서에서는 액션이 어떻게 동작하는지, 어떻게 설정하는지, 어떻게 활용하면 좋은지 알려 드려요.

## Add Contact Tag 액션이란?

**Add Contact Tag** 액션은 워크플로우 안에서 연락처에 태그를 하나 이상 자동으로 붙여 줘요. 태그는 연락처를 정리하고, 세그먼트를 나누고, 자동화를 실행하고, 리포팅을 돕는 데 쓰여요. 이 액션의 동작 방식을 알아 두면 연락처를 정확하게 분류하고 자동화 로직을 매끄럽게 구성할 수 있어요.

행동, 유입 경로, 참여 단계에 따라 연락처를 분류하면 대상을 세분화하고 더 개인화된 자동화 여정을 만들 수 있어요.

---

## Add Contact Tag 액션의 주요 이점

연락처에 태그를 자동으로 붙이면 데이터베이스가 체계적으로 정리되고, 워크플로우가 깔끔하고 예측 가능한 세그먼트를 바탕으로 움직여요. 에이전시는 시스템을 일관되게 유지하고, 타겟팅을 개선하고, 수작업을 없앨 수 있어요.

- 세그먼트: 연락처를 의미 있는 그룹으로 나눠 맞춤형 커뮤니케이션을 할 수 있어요.

- 자동화: 태그 조건에 따라 워크플로우를 실행하거나 경로를 나눌 수 있어요.

- 개인화: 연락처의 행동이나 속성에 맞춘 메시지를 보낼 수 있어요.

- 데이터베이스 정리: 여러 워크플로우와 캠페인에 걸쳐 기록을 체계적으로 관리할 수 있어요.

- 확장성: 계정이 커져도 명확한 분류 기준을 유지할 수 있어요.

---

## Add Contact Tag 옵션

이 액션의 설정으로 태그를 고르고, 만들고, 액션 설정에서 빼요. 옵션을 잘 알아 두면 태그가 중복되거나 잘못 분류되지 않고 필요한 태그만 정확히 붙어요.

### 태그 선택

- 드롭다운 목록에서 기존 태그를 하나 또는 여러 개 선택해요.
- 드롭다운에서 검색할 수 있어서 태그를 빠르게 찾을 수 있어요.
- 선택한 태그는 드롭다운 위에 라벨 형태로 표시돼요.

### 태그 삭제

- **"x"** 아이콘을 클릭하면 액션 설정에서 해당 태그가 빠져요.
- 연락처 레코드에서 태그가 제거되는 것은 **아니에요**. 액션 설정에서만 빠져요.

### 새 태그 만들기

- 필요한 태그가 없으면 드롭다운에 새 태그 이름을 입력하세요.
- **Add New Tag**(새 태그 추가)를 클릭하면 태그가 바로 만들어지고 선택돼요.
- 새로 만든 태그는 이후 워크플로우와 수동 태그 지정에서도 쓸 수 있어요.

---

## Add Contact Tag 액션 설정하기

액션을 올바르게 설정하면 워크플로우가 태그를 일관되게 붙여요. 아래 순서대로 따라 하면 오류를 줄이고, 태그가 의도한 세그먼트와 자동화 동작으로 이어져요.

### 1. 워크플로우 만들기

왼쪽 메뉴에서 **자동화**(Automation)를 클릭하면 워크플로우 목록이 열려요. 여기서 기존 워크플로우를 확인하거나 새로 만들 수 있어요.

워크플로우 목록 페이지의 오른쪽 위에서 **Create Workflow**(워크플로우 만들기)를 클릭하면 새 자동화를 만들 수 있어요. 드롭다운에서 처음부터 시작하기, 레시피 선택하기 등 상황에 맞는 방법을 고르세요.

![워크플로우 목록 페이지에서 워크플로우 만들기를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060006609/original/1PIb22hBLgOor97iOO02UN6i-l8Z7Kgf1A.png?1764952023)

### 2. Add Contact Tag 선택하기

워크플로우 빌더에서 **Actions**(액션) 패널을 열고, **Contact**(연락처) 섹션까지 스크롤해서 **Add Contact Tag**를 찾으세요. 이 액션을 선택하면 연락처가 워크플로우의 이 단계에 도달했을 때 태그를 하나 이상 붙일 수 있어요.

![액션 패널에서 Add Contact Tag를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060006991/original/FqCJFFonvE4doYCTxvO_q0ZVE8kbl6TWaQ.png?1764952256)

### 3. 액션 이름 정하기

**Action Name**(액션 이름) 필드에 이 단계가 하는 일을 알 수 있는 이름을 입력하세요. 이름을 알아보기 쉽게 지어 두면 나중에 워크플로우를 확인하거나 수정할 때 흐름을 이해하기 쉬워요.

![액션 이름을 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060007311/original/pSG7P7eLCDwVO2BluBVcZs98m_0aRulXdA.png?1764952409)

### 4. 태그 선택하기

**Tags**(태그) 드롭다운에서 기존 태그를 선택하세요. 드롭다운 화살표를 클릭하면 선택할 수 있는 태그를 모두 볼 수 있어요. 선택한 태그 옆의 **X**를 클릭하면 태그를 뺄 수 있어서, 저장하기 전에 선택을 다듬을 수 있어요.

![Tags 드롭다운에서 태그를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060007521/original/WVxOuvZnEmK1WZGe03oNQaOJtQoY_K_TVg.png?1764952603)

### 5. 새 태그 만들기

필요한 태그가 없으면 필드에 새 태그 이름을 입력하세요. 그러면 태그를 만드는 옵션이 나타나요. **Add New Tag**를 클릭하면 시스템에 태그가 바로 추가되고 액션에도 포함돼요.

![새 태그 이름을 입력하고 Add New Tag를 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060007719/original/LX_hTVPkzcpZ1U8Matwc1YNsYqmv6l53fw.png?1764952718)

### 6. 태그 모드 선택하기

**Tags** 필드 옆의 점 세 개 메뉴를 열어 **Standard**(표준)와 **Dynamic**(동적) 태그 모드 중에서 고르세요. 선택한 태그를 그대로 붙일지, 워크플로우 데이터를 바탕으로 동적으로 생성해서 붙일지 정할 수 있어요.

![점 세 개 메뉴에서 Standard와 Dynamic 모드를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060007838/original/bYYYzQkw7723U2XaCrivTGhBtNSYKt9hcw.png?1764952831)

### 7. 액션 저장하기

**Save Action**(액션 저장)을 클릭하면 태그 설정이 확정되고 이 단계가 워크플로우에 추가돼요. 이후 연락처가 자동화의 이 지점에 도달할 때마다 선택한 태그가 자동으로 붙어요.

![Save Action을 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060007938/original/4o6s1bCKLqaVnsSooM0aasFe6fkSpJyY6g.png?1764952954)

---

## 자주 묻는 질문

### 태그를 한 번에 여러 개 추가할 수 있나요?

네. Add Contact Tag 액션에서는 필요한 만큼 태그를 선택할 수 있어요.

### 기회의 커스텀 필드 값에 따라 태그를 자동으로 추가할 수 있나요?

네. 워크플로우에서 **Opportunity Custom Field Changed**(기회 커스텀 필드 변경) 트리거나 조건 로직으로 필드 값을 확인한 뒤, Add Contact Tag 액션으로 알맞은 태그를 자동으로 붙이면 돼요.

### 이 액션으로 태그를 제거할 수 있나요?

아니요. 태그 제거는 **Remove Contact Tag**(연락처 태그 제거) 액션으로 해요.

### 누구나 새 태그를 만들 수 있나요?

태그를 만들 수 있는지는 하이퍼클래스 계정 안의 사용자 권한에 따라 달라져요.

### 태그는 대소문자를 구분하나요?

네. "Facebook"과 "facebook"은 서로 다른 태그로 처리돼요.

### 이 태그가 다른 워크플로우를 실행시키나요?

**Contact Tag**(연락처 태그) 트리거를 쓰는 워크플로우가 있다면 실행돼요. 자세한 내용은 [워크플로우 트리거 — Contact Tag](../빌더/workflow-trigger-contact-tag.md) 문서를 참고하세요.

### 태그로 캠페인 대상을 나눌 수 있나요?

네. 태그는 스마트 리스트, 캠페인, 워크플로우에서 가장 많이 쓰는 필터링 기준 중 하나예요.
