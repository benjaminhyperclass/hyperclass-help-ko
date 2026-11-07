---
원문: https://help.gohighlevel.com/support/solutions/articles/155000004753-workflow-action-update-opportunity
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Update Opportunity(기회 업데이트)

워크플로우 안에서 **Update Opportunity**(기회 업데이트) 액션을 써서 기존 기회의 파이프라인 단계, 기회 이름, 금액 등을 자동으로 바꾸는 방법을 알려 드려요. 워크플로우 흐름이나 연락처의 행동에 따라 기회 정보를 바꾸고 싶을 때 쓰세요.

## Update Opportunity 액션이란?

**Update Opportunity** 액션은 CRM 파이프라인에 있는 기존 기회를 워크플로우에서 자동으로 수정하는 액션이에요. 기회의 이름, 금액(값), 파이프라인, 단계를 바꿀 수 있어요. 입력값은 직접 정하거나 **Find Opportunity**(기회 찾기) 같은 다른 액션의 결과를 가져와 쓸 수 있어요.

## Update Opportunity 액션의 장점

워크플로우에서 기회 정보를 자동으로 수정하면 영업 과정이 더 효율적이고 상황에 맞게 운영돼요. 이 액션을 쓰면 좋은 점은 다음과 같아요.

- 트리거나 연락처 활동에 따라 기회(딜)를 알맞은 파이프라인 단계로 자동 이동해요.
- 병합 필드로 기회 이름을 만들어, 한눈에 맥락을 알 수 있게 해요.
- 리드의 참여도가 높아질 때 기회 금액을 자동으로 조정해요.
- 파이프라인 단계나 금액을 손으로 고치는 일이 없어져요.
- 리드 팔로우업을 자동으로 진행하는 중에도 CRM 기록을 정확하게 유지해요.
- 명시적으로 허용하지 않으면 파이프라인에서 기회가 이전 단계로 돌아가지 않아요.

## Update Opportunity 액션 사용 방법

액션을 올바르게 설정하고 워크플로우 흐름에 연결하는 방법이에요. 이렇게 설정하면 업데이트가 안정적으로 적용돼요.

### 워크플로우 목록으로 이동하기

1. 왼쪽 메뉴에서 **자동화**를 클릭해요.
2. 위쪽의 **워크플로우** 탭을 클릭해요. (**자동화 > 워크플로우**)

워크플로우 목록이 열려요. 여기에서 기존 워크플로우를 보고, 새로 만들고, 관리할 수 있어요. 이 화면이 앞으로 설정할 **Update Opportunity** 액션 같은 자동화를 만드는 출발점이에요.

### 워크플로우 만들기 또는 기존 워크플로우 선택하기

오른쪽 위의 **+ Create Workflow**(워크플로우 만들기) 버튼을 클릭하면 처음부터 또는 템플릿으로 새 자동화를 시작할 수 있어요. 기회 업데이트용 워크플로우를 새로 만들 때 알맞아요.

{% hint style="info" %}
팁: 리드 팔로우업처럼 이미 만들어 둔 워크플로우가 있다면 새로 만들지 않고 **목록에서 선택**해도 돼요. 그런 다음 그 워크플로우에 **Update Opportunity** 액션을 추가하세요.
{% endhint %}

![워크플로우 만들기 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051102591/original/DJTyqNLE3JHkU7AiCXYzusDFImDMJPZmZw.png?1754561288)

### 워크플로우 트리거 선택하기

1. **Add New Trigger**(새 트리거 추가)를 클릭해요.
2. 목록에서 알맞은 트리거를 선택해요.

이 문서에서는 예시로 **Opportunity Status Changed**(기회 상태 변경) 트리거를 사용했어요. 이 트리거는 기존 기회(딜)의 상태가 바뀔 때마다 워크플로우를 시작해요.

{% hint style="info" %}
이 트리거를 예시로 쓴 이유: 워크플로우가 시작될 때 이미 기회가 정해져 있어서 **Update Opportunity** 액션과 바로 연결할 수 있어요. 워크플로우를 시작시킨 기회를 이미 알고 있으니 따로 찾는 단계가 필요 없어요.
{% endhint %}

{% hint style="info" %}
팁: 이 트리거만 써야 하는 것은 아니에요. 태그 추가, 폼 제출 등 원하는 트리거를 쓸 수 있어요. 다만 기회를 기준으로 시작하는 트리거가 아니라면, 워크플로우 앞부분에 **Find Opportunity** 단계를 넣어 업데이트할 기회를 먼저 찾아야 해요.
{% endhint %}

![트리거 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051102631/original/x_q9oBU9KEV2q5n3326Ar7Em0zEasextTw.png?1754561311)

### Update Opportunity 액션 추가하기

1. 트리거를 선택한 뒤, 트리거 아래의 **+ 아이콘**을 클릭해요.
2. 액션 목록의 **Opportunity**(기회) 섹션에서 **Update Opportunity**를 찾아 선택해요. 검색해도 돼요.

이 액션은 워크플로우를 시작시킨 기회(또는 **Find Opportunity** 단계에서 찾은 기회)의 파이프라인, 단계, 금액, 이름 같은 주요 정보를 자동으로 바꿔 줘요.

![Update Opportunity 액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051102657/original/Ugkl_Hxs6OhpWD8czzju_gsErkCEOA7kRA.png?1754561325)

### 액션 이름 정하기

**Action Name**(액션 이름) 필드에 이 액션이 무엇을 하는지 알 수 있는 이름을 입력해요. 예를 들면 "Move to Proposal Stage"나 "Update Deal Info" 같은 이름이에요.

이 이름은 워크플로우 빌더에 표시돼요. 단계가 많은 워크플로우에서 구분하기 쉬워요. 내부용 이름이라서 연락처에게는 보이지 않아요.

![액션 이름 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051102667/original/vu8zX9ydjp5jGvJ5lPH-3jigC8ylLyI8ZQ.png?1754561338)

### 이전 단계로 이동 허용 켜기/끄기

기회를 파이프라인의 앞선 단계로 되돌리고 싶다면 **Allow Opportunity to Move to Any Previous Stage**(기회를 이전 단계로 이동 허용) 토글을 ON으로 켜세요.

기본적으로 기회는 앞으로 이동하거나 같은 단계에 머물기만 할 수 있어요. 이 옵션을 켜면 너무 일찍 다음 단계로 옮겨진 기회를 되돌리는 등 더 유연하게 운영할 수 있어요.

![이전 단계로 이동 허용 토글](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051102693/original/DIWtuiHXDv-vsDQd3D3uZT7nImoLBWgOpg.png?1754561352)

### Duplicate Opportunity 설정

**Update Opportunity** 액션 안에는 **Duplicate Opportunity**(기회 복제) 토글이 있어요. 하지만 이 액션은 새 기회를 만들지 않아요. 기존 기회만 업데이트하기 때문에, 이 토글을 켜도 새로 만들어지는 기회는 없어요.

토글 옆의 미리보기 아이콘을 클릭하면 **설정 > 비즈니스 프로필**로 이동해요. 여기에서 기회 중복 규칙을 관리하라는 안내가 나와요. **Go to Opportunity Settings**(기회 설정으로 이동)를 클릭하면 설정 화면이 열리고, 여기서 **Allow Multiple Opportunities per Contact**(연락처당 여러 기회 허용)를 켤 수 있어요. 갱신이나 재구매처럼 같은 연락처가 파이프라인을 여러 번 거칠 수 있을 때 유용해요. 단, 이 설정은 **Update Opportunity** 액션의 동작에는 영향을 주지 않아요. 이 액션은 중복 기회를 만들지 않아요.

![기회 중복 설정 안내](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051108804/original/rrxt6QxcspIBdiyM6-KlSoGFwiUZzs4BLA.gif?1754564749)

### 업데이트할 필드 추가하기

**Add field**(필드 추가) 버튼을 클릭해 바꿀 기회 정보를 선택해요. 파이프라인, 단계, 이름, 금액 등을 업데이트할 수 있어요.

이곳에서 **Update Opportunity** 액션이 어떤 내용을 바꿀지 정해요. 병합 필드를 쓰면 연락처 정보에 따라 값을 개인별로 다르게 넣을 수도 있어요.

![필드 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051102738/original/zT8MIoCJ5vxZZGGTqaWAatfVsM9s16bgpg.png?1754561371)

### Pipeline Filter(파이프라인 필터)

기회를 옮길 파이프라인을 선택해요. 갱신이나 추가 판매 기회를 전용 파이프라인으로 보내는 것처럼, 기회를 다른 영업 과정으로 옮길 때 유용해요.

이 필드를 업데이트하면 손으로 파이프라인을 바꾸지 않아도 영업 흐름을 자동으로 재배치할 수 있어요.

![파이프라인 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051102801/original/pjdq6rQQMtRdUWNbuAGt33g2S1bRqNcsMg.png?1754561412)

### Pipeline Stage(파이프라인 단계)

선택한 파이프라인 안에서 기회를 보낼 단계를 선택해요. 영업 진행 상황에 맞게 기회를 앞으로 옮길 수 있어요. 이전 단계로 이동하는 옵션을 켰다면 뒤로도 옮길 수 있어요.

![파이프라인 단계 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051102853/original/tmPABHBvFl86S08WEZD3y3UWrwRBPjJ5Lw.png?1754561435)

### Status(상태)

기회의 현재 상태를 **Open**(진행 중), **Won**(고객전환성공), **Lost**(고객전환실패) 중에서 정해요. 이 필드를 업데이트하면 기회의 진행 상황을 실시간 변화에 맞출 수 있어요. 워크플로우를 시작하거나 이어 갈 때 특히 도움이 돼요.

![상태 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051102894/original/m6Nv95kUl7dbIiPOyXOpd0sNbsO6Tc7mcQ.png?1754561454)

### Opportunity Source(기회 소스)

기회가 어디서 들어왔는지 업데이트하거나 기록하는 필드예요. 리드 폼, 광고 캠페인, 특정 랜딩 페이지 등이 해당돼요.

직접 입력하거나, {{contact.source}} 같은 커스텀 값을 써서 연락처 정보를 가져올 수도 있어요. 입력란 옆의 **태그 아이콘**을 클릭하면 커스텀 값을 찾아 넣을 수 있어요. 연락처가 여러 채널로 파이프라인에 들어올 때 소스 정보를 정확하게 유지하는 데 도움이 돼요.

![기회 소스 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051103460/original/wNEAErRrLfk4EmqFebiUMnqckyeQST4DzA.png?1754561787)

### Opportunity Value(기회 값)

파이프라인에 있는 기회의 금액을 지정하거나 업데이트하는 필드예요. 500처럼 고정 금액을 입력할 수도 있고, 연락처 정보나 워크플로우 흐름에 따라 달라지는 커스텀 값(예: {{contact.quoted\_price}})을 쓸 수도 있어요.

이 필드를 활용하면 예상 매출을 더 정확하게 파악하고, 기회가 영업 과정의 어느 위치에 있는지에 맞춰 파이프라인 예측을 자동화할 수 있어요.

![기회 금액 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051103944/original/FoCFRBcDPCudz-Ff3qvvXSj4HxqPrBWbSw.png?1754562087)

### 액션 저장하기

파이프라인, 단계, 상태 등 업데이트할 기회 필드를 모두 채웠다면 **Save Action**(액션 저장)을 클릭해 저장해요. 그러면 트리거 조건이 충족될 때 워크플로우가 설정한 업데이트를 적용해요.

![액션 저장 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051104023/original/waKilXqwzRk6ykBf4fqivWoRM-MEGg9pig.png?1754562143)

## 자주 묻는 질문

### 워크플로우에 기회가 없으면 어떻게 되나요?
액션이 건너뛰어져요. 워크플로우가 기회를 기준으로 시작하거나, 워크플로우 안에 **Find Opportunity** 단계가 포함되어 있는지 확인하세요.

### 기회를 파이프라인에서 이전 단계로 되돌릴 수 있나요?
네, 가능해요. 단, **Allow Opportunity to Move to Any Previous Stage** 토글이 켜져 있을 때만 돼요.

### 워크플로우 앞부분에서 **Create Opportunity**(기회 만들기) 액션으로 기회를 만들었다면, 그 기회가 업데이트되나요?
아니요. 워크플로우 앞에서 기회를 만들었다고 해서 **Update Opportunity** 단계가 그 기회를 자동으로 알지는 못해요. 워크플로우 뒤쪽에서 기회를 업데이트하려면 **Find Opportunity** 액션으로 해당 기회를 찾거나, 기회를 만들 때 커스텀 값으로 올바른 참조 정보를 넘겨야 해요. 그래야 업데이트가 알맞은 기회에 적용돼요.

### 기회의 담당자를 업데이트할 수 있나요?
이 액션으로는 할 수 없어요. 담당자를 바꾸려면 **Assign User**(사용자 배정) 또는 **Update Contact**(연락처 업데이트) 액션을 사용하세요.
