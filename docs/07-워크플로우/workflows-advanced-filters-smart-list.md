---
원문: /support/solutions/articles/155000003974-workflows-advanced-filters-smart-list
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 상세 필터와 스마트 리스트 사용하기

워크플로우가 많아도 **상세 필터**와 스마트 리스트를 쓰면 원하는 워크플로우를 빠르게 찾을 수 있어요. 트리거, 작업, 태그로 워크플로우를 좁혀 보고, 자주 쓰는 조건은 스마트 리스트로 저장해 두는 방법을 안내해요.

## 상세 필터와 스마트 리스트란?

**상세 필터**를 쓰면 트리거, 작업, 태그 같은 조건으로 워크플로우를 걸러서 볼 수 있어요. 스마트 리스트는 이렇게 걸러 낸 화면을 저장해 두는 기능이에요. 저장해 두면 같은 필터를 매번 다시 설정하지 않아도 돼요.

## 상세 필터와 스마트 리스트를 쓰면 좋은 점

- 원하는 워크플로우를 빠르게 찾아요. 트리거, 작업, 태그 조건을 여러 개 걸어서 직접 뒤져 볼 필요가 없어요.
- 시간을 아끼고 정리가 쉬워져요. 걸러 낸 화면을 스마트 리스트로 저장하면 반복해서 필터를 걸 필요가 없어요. 워크플로우가 늘어나는 비즈니스에 특히 도움이 돼요.
- 협업과 확인이 쉬워져요. 에이전시나 팀이 고객별로 워크플로우를 분류해 두면 자동화 현황을 더 쉽게 파악할 수 있어요.
- 같은 워크플로우를 또 만들거나 불필요하게 문의하는 일이 줄어요. 필터와 저장된 리스트로 이미 만들어 둔 자동화를 바로 찾을 수 있기 때문이에요.

## 상세 필터와 스마트 리스트, 어떻게 다른가요?

하이퍼클래스에서 워크플로우를 정리하는 방법은 두 가지예요. **상세 필터**를 쓰거나, 스마트 리스트를 만드는 거예요. 둘 다 워크플로우를 걸러 보는 기능이지만, 쓰임새가 달라요.

### 상세 필터 (한 번만 쓸 때)

**상세 필터**는 조건을 그때그때 걸어 워크플로우를 찾는 기능이에요. 조건은 저장되지 않아요. 예를 들어 일시중지된 워크플로우만 보고 싶다면 **Status**(상태)를 **Paused**(일시중지)로 걸어 보세요. 해당하는 워크플로우가 바로 나타나요. 확인이 끝나면 필터를 저장하지 않고 나오면 돼요.

한 번 또는 가끔 찾아볼 때 알맞아요. 같은 화면을 자주 볼 필요가 없을 때 쓰세요.

### 스마트 리스트 (자주 쓸 때)

스마트 리스트는 필터로 걸러 낸 화면을 저장해 둔 거예요. **+ 스마트 리스트**를 클릭하고 필터를 추가한 다음 저장하면 만들어져요. 저장한 스마트 리스트는 **워크플로우** 페이지에 계속 남아 있어서 필요할 때 바로 열 수 있어요.

예를 들어 폼이 제출될 때 시작되는 워크플로우를 자주 확인한다면, 트리거가 **Form Submitted**인 워크플로우만 모은 스마트 리스트를 만들어 두세요. 매번 필터를 다시 걸지 않아도 돼요.

## 상세 필터 사용하기

### 1단계: 워크플로우 페이지 열기

하이퍼클래스에서 **자동화** 메뉴로 가서 **워크플로우**를 열어요. 계정에 만들어 둔 워크플로우가 모두 목록으로 보여요.

![워크플로우 목록 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041003123/original/aXPqKnZPGz_cwx3MxbnPgc6WtfYzj3npkQ.png?1738684875)

### 2단계: 상세 필터 열기

**워크플로우** 페이지 오른쪽 위에서 **상세 필터** 버튼을 클릭해요. 오른쪽에 패널이 열리고, 여기서 조건을 걸어 워크플로우를 걸러 볼 수 있어요.

![상세 필터 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041003158/original/uPp-cDl0sUpd2qrpmz9YWnp2Cd4ijTh2hw.png?1738684903)

### 3단계: 필터 설정하기

**상세 필터** 패널을 열면 쓸 수 있는 필터 옵션이 보여요. 다음 기준으로 워크플로우를 걸러 볼 수 있어요.

- **트리거**: 특정 트리거 이벤트로 시작하는 워크플로우를 봐요. (예: **Form Submitted**(폼 제출), **Appointment Booked**(예약 완료))
- **작업**: 특정 작업이 들어 있는 워크플로우를 봐요. (예: **Send SMS**(SMS 전송), **Add Tag**(태그 추가))
- **태그**: 지정한 태그가 붙은 워크플로우만 보여 줘요.
- **Other Attributes**(기타 속성): 워크플로우 상태(Published(게시됨), Draft(초안)), 마지막 수정일, 마지막으로 수정한 사람으로 걸러 볼 수 있어요.

![상세 필터 패널의 필터 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041003220/original/1bTfb_Pdl6AAkGQRecHPL6WejtB8lhEP7A.png?1738684962)

### 필터 조건 설정하기

1. 드롭다운 메뉴에서 필터 종류를 선택해요.
2. 연산자를 선택해요. (예: **equals**(같음), **contains**(포함), **does not contain**(포함하지 않음))

   ![연산자 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041003385/original/UeyMkb52KSO-X3ypT6ZPWNaYadv-MYGipw.png?1738685086)

3. 선택한 필터에 맞는 값을 입력하거나 선택해요.

   ![값 입력 또는 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041003406/original/Qr-svR4fNAc5buCo72uWsj2sWasfYJ8uZQ.png?1738685100)

### 4단계: 필터 여러 개 추가하기

조건을 더 세밀하게 걸고 싶다면 필터를 여러 개 추가할 수 있어요. 조건에 따라 워크플로우가 표시되는 방식이 달라져요.

**+ And Condition**(그리고 조건)은 선택한 필터를 모두 만족하는 워크플로우만 결과에 보여 줘요. 여러 기준을 동시에 만족하는 워크플로우를 찾을 때 유용해요. (예: Published 상태이면서 Form Submission 트리거를 쓰는 워크플로우)

**Or Condition**(또는 조건)은 선택한 필터 중 하나 이상에 맞는 워크플로우를 보여 줘요. 두 조건을 모두 만족하지 않아도 되니 검색 범위가 넓어져요. (예: Published 상태이거나 특정 태그가 있는 워크플로우)

![And 조건과 Or 조건](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041003496/original/wqXuzyyYVpVeZoDhtGYZS_4T1DHxgRg85w.png?1738685159)

**+ Add Filter Condition**(필터 조건 추가)을 쓰면 서로 다른 속성의 필터 중 하나라도 맞는 워크플로우가 표시돼요. 특정 워크플로우를 찾을 때 더 유연하게 검색할 수 있어요.

![필터 조건 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041003570/original/6qZrigLsMj9nU3ISEdN1ign6xF9Q1VAt0w.png?1738684875)

필터를 삭제하려면 휴지통 아이콘을 클릭하세요.

![필터 삭제 휴지통 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041003630/original/jNqQLVifMezvKxJVGU-1ODD7rx6THpjPpg.png?1738685231)

### 5단계: 필터 적용하기

필터 설정이 끝났으면 **적용** 버튼을 클릭해요. 조건에 맞는 워크플로우만 목록에 나타나요.

![적용 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041003664/original/MQNCabJyiOy3VkSmiHGWJead70_lQZd7dw.png?1738685259)

## 스마트 리스트 사용하기

### 1단계: 걸러 낸 화면 저장하기

필터를 적용하면 **저장** 버튼이 활성화돼요. **저장**을 클릭하면 걸러 낸 화면이 스마트 리스트로 저장돼요.

![저장 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041021277/original/aniV2x61n02JLDySrojQZJGa8LyNDQ9K_w.png?1738724295)

### 2단계: 스마트 리스트 만들기

**저장**을 클릭하면 두 가지 옵션이 나와요.

- **Save as New Smart List**(새 스마트 리스트로 저장): 지금 건 필터를 새 리스트로 저장해서 나중에 다시 볼 수 있어요.
- **변경사항 취소**: 적용한 필터를 없애고 워크플로우 목록을 처음 상태로 되돌려요.

![저장 후 나타나는 두 가지 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041021272/original/vcI4Zd3yodXDm5fWeR1ZduSZAOrcfXWI6w.jpeg?1738724278)

### 3단계: 스마트 리스트 열기

저장한 스마트 리스트는 **워크플로우** 페이지 위쪽에 기존 워크플로우 분류와 나란히 표시돼요. 스마트 리스트를 클릭하면 저장해 둔 필터가 바로 적용돼서, 조건에 맞는 워크플로우만 보여요.

![워크플로우 페이지 위쪽에 표시된 스마트 리스트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041022219/original/qL0vjtO0tK9VMqwcVp_mKcf6FVaR3xQXzQ.png?1738728147)

### 4단계: 처음부터 스마트 리스트 만들기

필터를 먼저 적용하지 않고 스마트 리스트를 만들 수도 있어요.

1. **워크플로우** 페이지 위쪽에서 **+ 스마트 리스트**를 클릭해요.
2. 필요한 필터를 설정해요.
3. **저장**을 클릭하면 새 스마트 리스트가 만들어져요.

![처음부터 스마트 리스트 만들기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041026618/original/N30dEViDJaHSYVqZ5FIfEQCOXctWt9-46A.gif?1738738099)

### 5단계: 스마트 리스트 관리하기

스마트 리스트를 수정하거나 삭제하려면 다음 순서로 진행하세요.

1. 수정하거나 삭제할 스마트 리스트로 이동해요.
2. 오른쪽 위에서 **목록 사용자 지정**을 클릭해요. 수정하려는 스마트 리스트를 열어 둔 상태인지 꼭 확인하세요.
3. 기존 필터를 수정하거나, 더 이상 필요 없으면 스마트 리스트를 삭제해요. 필터를 바꿨다면 **저장** 버튼을 꼭 클릭하세요.

![스마트 리스트 수정과 삭제](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041027570/original/iPWy_9z07x_0c9kCnKVUkWeQHBAx8AVsHQ.gif?1738739176)

## 자주 묻는 질문

### 필터와 스마트 리스트는 어떻게 다른가요?

필터는 선택한 조건으로 워크플로우를 잠시 좁혀 보는 기능이에요. 스마트 리스트는 그 필터 조건을 저장해 두었다가 나중에 쉽게 다시 여는 기능이에요.

### 필터를 한 번에 몇 개까지 걸 수 있나요?

엄격한 제한은 없어요. 필터를 여러 개 걸 수 있고, And 조건과 Or 조건을 함께 써서 원하는 대로 결과를 좁힐 수 있어요.

### 스마트 리스트를 수정하거나 삭제하려면 어떻게 하나요?

**목록 사용자 지정**을 클릭하세요. 필터 설정을 바꾸거나, 필요 없어진 스마트 리스트를 삭제할 수 있어요.

### 스마트 리스트는 누가 보고 관리할 수 있나요?

- 일반 사용자가 스마트 리스트를 만들면, 그 사용자와 관리자가 볼 수 있어요.
- 관리자가 스마트 리스트를 만들면, 모든 관리자가 볼 수 있어요. 일반 사용자는 볼 수 없어요.
- 일반 사용자가 관리자로 바뀌면, 다른 관리자가 만든 스마트 리스트도 모두 볼 수 있게 돼요.
- 관리자가 일반 사용자로 바뀌면, 본인이 직접 만든 스마트 리스트만 볼 수 있어요.

### 상세 필터를 모든 워크플로우 유형에 쓸 수 있나요?

네, 쓸 수 있어요. 구조가 복잡한지 아닌지에 상관없이 모든 워크플로우에 **상세 필터**를 쓸 수 있어요.
