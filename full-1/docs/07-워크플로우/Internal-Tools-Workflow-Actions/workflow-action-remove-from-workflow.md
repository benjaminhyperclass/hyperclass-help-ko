---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002553-workflow-action-remove-from-workflow
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Remove from Workflow(워크플로우에서 제거)

**Remove from Workflow**(워크플로우에서 제거) 액션은 연락처를 워크플로우에서 자동으로 빼 주는 액션이에요. 이 문서에서는 액션이 하는 일과 장점, 설정 방법, 실제 활용 예시를 알려 드려요.

## Remove from Workflow 액션이란?

**Remove from Workflow** 액션은 특정 트리거나 조건에 따라 연락처를 하나 또는 여러 워크플로우에서 자동으로 제거해요. 연락처가 더 이상 필요 없는 워크플로우에 남아 있지 않게 정리해 주기 때문에, 알맞은 시점에 알맞은 메시지만 받을 수 있어요. 같은 내용이나 상황에 맞지 않는 메시지가 계속 가는 일도 줄어요.

## Remove from Workflow 액션의 장점

1. **연락처 관리가 편해져요:** 더 이상 참여할 필요가 없는 워크플로우에서 연락처를 자동으로 제거해 시간과 수고를 줄여 줘요.
2. **메시지가 상황에 맞게 가요:** 연락처의 현재 상태에 해당하는 워크플로우에만 남겨 두기 때문에, 중복되거나 맞지 않는 메시지를 받지 않아요.
3. **자동화가 효율적이에요:** 연락처를 직접 제거할 일이 줄어서 더 중요한 업무에 집중할 수 있어요.
4. **고객 경험이 좋아져요:** 불필요한 이메일이나 알림에 시달리지 않고 꼭 필요한 안내만 받아요.

## Remove from Workflow 액션 설정하기

1. 왼쪽 메뉴에서 **자동화 > 워크플로우**를 클릭하세요.

   ![자동화 메뉴에서 워크플로우 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037743577/original/LducBGjpOhjDCyAciTCMv6xmHWntNsT0eQ.png?1733319807)

2. **+ Create Workflow**(워크플로우 만들기) 버튼을 클릭하세요.
3. 드롭다운 메뉴에서 **+ 처음부터 시작**을 클릭하세요. 워크플로우 편집 화면으로 이동해요.

   ![처음부터 시작 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038188859/original/bSWlYHJGZWprpe5cfNxNfeUQjg8BIywZEw.png?1733983194)

### 액션 추가하기

1. **+** 아이콘을 클릭하면 워크플로우 액션 목록이 나와요.
2. 목록을 아래로 스크롤해 **Remove from Workflow** 액션을 찾아 클릭하세요. 설정 화면이 열려요.

   ![액션 목록에서 Remove from Workflow 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037749735/original/cDMwvUsu4s0n_nF2gN1fXpMumVR63h1wVA.png?1733323255)

### 액션 이름 정하기

**Action Name**(액션 이름)에 워크플로우에서 쉽게 알아볼 수 있는 이름을 입력하세요. 예를 들면 "마케팅 캠페인 워크플로우에서 제거"처럼 쓸 수 있어요.

![액션 이름 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037749730/original/K6R-lpptNAiWwmR5mZaPcoHG-Tu1OZgUMg.png?1733323246)

### 제거 방식 선택하기

아래 중 원하는 옵션을 고르세요.

- **Current Workflow**(현재 워크플로우): 연락처가 지금 들어 있는 워크플로우에서 제거해요.
- **Another Workflow**(다른 워크플로우): 연락처를 제거할 다른 워크플로우를 직접 지정해요.
- **All Except Current Workflow**(현재 워크플로우를 제외한 전체): 지금 들어 있는 워크플로우를 뺀 나머지 모든 워크플로우에서 제거해요.
- **All Workflows**(모든 워크플로우): 진행 중인 모든 워크플로우에서 제거해요.

![제거 방식 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038191746/original/GZ0jPomXVuNWGsyullicEeQ7U01QHyYBaQ.png?1733986911)

드롭다운에서 연락처를 제거할 워크플로우를 선택하세요.

![제거할 워크플로우 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037749816/original/UmFTlc2p8-Du7R-MX4Ys2EiWR3KKBCwmxw.png?1733323294)

### 저장하고 테스트하기

액션을 저장한 뒤, 워크플로우를 실행해 보면서 의도한 대로 동작하는지 확인하세요.

![액션 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037749910/original/pbv1OpZB9EuPSuEcSL8d3GKtKHv7f5n4Kg.png?1733323331)

워크플로우를 실제로 가동할 준비가 되면 **Publish**(게시) 토글을 켜세요.

![Publish 토글 켜기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038191955/original/M1cMZ4bRqUlwkjOmdUxlP3-fZF_fdpjHjA.png?1733987133)

## 사용 사례

**시나리오:** 연락처가 구매 같은 특정 행동을 완료하면, 진행 중인 마케팅 캠페인 워크플로우에서 빼서 같은 내용의 메시지가 계속 가지 않게 하고 싶어요.

**설정 방법:**

1. **트리거:** 연락처가 구매를 완료하거나 서비스를 구독하면 워크플로우가 시작되도록 트리거를 설정해요.
2. **Remove from Workflow** 액션을 추가해요.
   - **Action Name:** 마케팅 캠페인 워크플로우에서 제거
   - **Workflow Selection**(워크플로우 선택): **Another Workflow**를 선택해요.
   - **Specified Workflow**(지정한 워크플로우): 연락처를 제거할 마케팅 캠페인 워크플로우를 선택해요.
3. **결과:**
   - 연락처가 지정한 마케팅 캠페인 워크플로우에서 자동으로 제거돼요.
   - 프로모션 이메일이 더 이상 가지 않아서, 상황에 맞고 중복 없는 메시지만 받아요.

**최종 효과:** 이 자동화를 쓰면 불필요한 메시지를 줄이고 소통을 깔끔하게 유지할 수 있어요. 고객 만족도와 참여도도 높아져요.

## 자주 묻는 질문

### 연락처가 여러 워크플로우에 들어 있으면 어떻게 되나요?
다음 중에서 선택해 제거할 수 있어요.

- 현재 워크플로우에서만 제거
- 직접 고른 다른 워크플로우에서 제거
- 현재 워크플로우를 제외한 모든 워크플로우에서 제거
- 진행 중인 모든 워크플로우에서 제거

### 연락처가 특정 행동을 완료하면 워크플로우에서 자동으로 제거할 수 있나요?
네. "구매 완료" 같은 트리거를 설정하면 특정 워크플로우에서 연락처를 자동으로 제거할 수 있어요. 그러면 연락처가 상황에 맞지 않는 메시지를 더 이상 받지 않아요.

### Remove from Workflow 액션이 제대로 동작하는지 어떻게 알 수 있나요?
테스트용 연락처로 워크플로우를 실행해서 의도한 대로 제거되는지 확인하세요. 활동 로그에서도 제거가 잘 됐는지 확인할 수 있어요.

### 한 번 실행된 Remove from Workflow 액션을 되돌릴 수 있나요?
아니요. 연락처가 제거되면 자동으로 되돌릴 수 없어요. 필요하면 직접 다시 등록해야 해요.

### 워크플로우에서 제거되면 연락처에게 알림이 가나요?
아니요. 이 액션은 내부 워크플로우 상태에만 영향을 주고, 연락처에게는 알림이 가지 않아요.
