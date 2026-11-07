---
원문: /support/solutions/articles/155000001466-workflow-action-array-formatter
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Array Formatter(배열 포맷터)

Array Formatter는 배열(데이터 목록)을 다루는 워크플로우 액션이에요. 목록에서 원하는 데이터를 찾거나 걸러 내고, 계산하고, 다른 모양의 목록으로 다시 만들 수 있어요.

{% hint style="info" %}
문서에 나온 금액(달러)과 요금제 이름은 참고용이에요. 하이퍼클래스에서 실제로 적용되는 요금은 [요금제 안내](../../00-자주묻는질문/pricing-plans.md)와 [AI·SMS·음성 사용료](../../00-자주묻는질문/usage-costs.md)를 확인하세요.
{% endhint %}

## Array Formatter란?

Array Formatter는 하이퍼클래스 워크플로우 안에서 배열을 다루는 액션 모음이에요. 주문 상품 목록(line items)이나 고객 속성처럼 객체가 여러 개 담긴 목록이 배열이에요. 이런 배열은 워크플로우에서 자주 나타나는데, Array Formatter로 필요한 데이터를 꺼내거나 걸러 내거나 계산할 수 있어요.

기본적인 데이터 처리를 외부 서비스로 내보내지 않고 워크플로우 안에서 끝내고 싶을 때 특히 유용해요.

이제 Array Formatter는 무료예요. $0로 청구되는 일반 워크플로우 실행으로 처리되므로 이 액션을 써도 프리미엄 실행 요금이 나오지 않아요. 워크플로우 동작은 그대로예요.

{% hint style="warning" %}
**중요**

- Array Formatter는 더 이상 프리미엄 액션으로 취급하지 않아요.
- 워크플로우 동작은 달라지지 않았어요.
- 웹훅이나 배열을 출력하는 다른 워크플로우 단계 뒤에 계속 사용할 수 있어요.
{% endhint %}

## Array Formatter의 장점

- 워크플로우 자동화 강화: 데이터를 걸러 내거나 정렬하거나 계산하는 작업을 외부 서비스로 보내지 않고 자동화할 수 있어요.
- 의사 결정 개선: 데이터에서 의미 있는 정보를 실시간으로 뽑아낼 수 있어요.
- 수작업 실수 감소: 복잡한 계산과 데이터 가공을 자동으로 처리해요.
- 맞춤 구성: 배열 연산을 유연하게 조합해 비즈니스에 맞는 워크플로우를 만들 수 있어요.

## Array Formatter 설정하기

액션을 저장하기 전에 각 옵션을 더 쉽게 이해할 수 있도록 액션 패널이 개선되었어요. 액션 유형을 고를 때 드롭다운과 설정 패널에서 옵션별 설명을 바로 볼 수 있어요.

개선된 화면에는 다음 내용이 들어 있어요.

- 액션 유형 설명
- 액션 유형별 흐린 색 아이콘
- 반환 유형 표시
- 출력 미리보기 또는 반환 요약 메시지

그래서 액션을 저장하기 전에 각 옵션이 어떤 값을 반환하는지 미리 알 수 있어요.

워크플로우에서 Array Formatter를 설정하는 순서는 다음과 같아요.

1. 워크플로우 빌더를 여세요. 하이퍼클래스에서 **자동화** 메뉴로 이동한 다음, 워크플로우를 만들거나 기존 워크플로우를 선택하세요.

   ![워크플로우 빌더 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040473379/original/BNeYKRSqIiAKoO2etWq1iFcGanZGh-DEXg.png?1737942844)

2. Array Function 액션을 추가하세요. **Add Action**(액션 추가)을 클릭하고, **Premium Actions**(프리미엄 액션) 섹션에서 **Array Function**(배열 함수)을 선택하세요.
   ![Array Function 액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040473375/original/0jHYbd1q6WtZWX1mZca3xyn9BEJEUgoo7Q.png?1737942775)

3. 함수 유형을 고르세요. **Find**(찾기), **Filter**(필터), **Find by Index**(인덱스로 찾기), **Line Items**(라인 아이템), **Math**(수학) 중에서 원하는 함수를 선택하세요.

   ![함수 유형 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040473392/original/-VA72O-j_YI5szbXcqDpIRm8jtKJCz_ALA.png?1737942929)

4. 입력값을 설정하세요. 입력 배열을 지정하고, 선택한 함수 유형에 맞게 키, 값, 조건을 정하세요.

   ![입력값 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040473413/original/mgFN2ZZM68q4RzHXmgQlO5j5xOhCdWh-og.png?1737943149)

5. 워크플로우를 저장하고 테스트해요. 액션이 의도한 대로 동작하는지 확인하세요.

   ![저장 및 테스트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040473426/original/ESwsr1PF1dntsi5CpxqRcBRH0JK1u4j79w.png?1737943285)

6. 결과값을 사용하세요. 액션이 제대로 동작하면 변수가 만들어져요. 이 변수는 다른 액션에서 불러와 쓸 수 있어요.

   ![결과값 사용](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040480458/original/1eTghHjhNXhJv7nQaSMqii0CKYI8rUpswg.png?1737961504)

## 함수 유형별 자세한 설명

함수 유형마다 배열 데이터에 하는 작업이 달라요. 사용할 수 있는 배열 데이터는 Shopify 트리거, **Inbound Webhook Trigger**(인바운드 웹훅 트리거), **Custom Webhook**(커스텀 웹훅) 액션의 응답 데이터에서 가져와요.

### Find(찾기)

**Find**는 키와 값이 일치하는 객체를 배열에서 찾아요. 예를 들어 구매한 상품 목록에 "Laptop"이라는 상품이 있는지 확인할 수 있어요. 일치하는 객체가 있으면 그 객체를 반환해요. 일치하는 객체가 여러 개여도 가장 먼저 일치한 객체 하나만 반환해요.

![Find 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040479747/original/37cstWkFwrxGERq67agrZA-Q6Cb5R_LRJw.png?1737960666)

|  |  |
| --- | --- |
| 예를 들어 Shopify Order Placed 트리거를 쓰는 워크플로우에서, 상품 ID가 "zGhad23wfadfa"인 상품이 Shopify 라인 아이템에 들어 있는지 확인해 볼게요.  1단계: **Action Type**(액션 유형)에서 **Find**를 선택해요. |  |
| 2단계: **Shopify > Line Items**를 선택해요. |  |
| 3단계: **Key**(키)를 고르고, 일치시킬 **Value**(값)를 입력해요. |  |
| 4단계: 사용할 수 있는 라인 아이템 키를 확인해요. |  |
| 5단계: 이 예시에서는 **id** 키를 선택하고, 값에 해당 상품 ID를 붙여 넣어요. |  |

### Find by Index(인덱스로 찾기)

**Find by Index**는 배열 안의 위치(인덱스)로 항목 하나를 반환해요. 배열의 위치는 항상 0부터 시작해요. 항목이 세 개라면 (0) Apple, (1) Banana, (2) Cherry 순으로 번호가 매겨져요. 인덱스 2번 위치의 항목을 요청하면 목록의 세 번째 항목인 Cherry를 반환해요.

![Find by Index 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040479871/original/B5KIJaU-pso0h87O8wcSVDS9iOfpNOorWg.png?1737960844)

### Filter(필터)

**Filter**는 지정한 필터(또는 여러 필터)에 맞는 객체를 모두 모아 배열로 반환해요. 예를 들어 색상이 "blue"인 객체를 모두 가져오거나, 카테고리가 "home"인 객체를 모두 가져올 수 있어요.

![Filter 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040479946/original/7FpotjptUCNI2FoGye1pl0iO-aoe-2azng.png?1737960944)

특정 사람의 데이터만 남기도록 배열을 걸러 낼 수도 있어요. 키를 "id"로 정하고 값을 동적 값 `{{user.name}}`으로 설정하면 그 사람의 주문을 모두 가져올 수 있어요.

![특정 사람으로 필터링한 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040481226/original/OdnHyvfid1bBaAzNfMsSMi0xAhI1e2rUyQ.png?1737962042)

### Line Items(라인 아이템)

**Line Items**는 배열을 대상 액션에 맞게 다시 구성할 때 써요. 대상 액션은 커스텀 웹훅, Google Sheets 저장, **이메일 빌더**의 쇼핑 카트 구조 맞추기 등이에요. 각 항목의 키-값 쌍을 원하는 대로 바꿀 수 있어요. 배열 하나를 받아서 같은 데이터를 지정한 다른 모양의 배열로 내보내요.

### Math(수학)

**Math**는 배열 안의 숫자에 합계나 평균 같은 계산을 해요. 예를 들어 모든 가격을 더해 주문 총액을 구할 수 있어요. 계산 결과를 반환해요. 사용할 수 있는 수학 연산은 다음과 같아요.

- **Sum**(합계): 모든 값을 더해 총합을 반환해요.
- **Min**(최솟값): 가장 작은 값을 찾아 반환해요.
- **Max**(최댓값): 가장 큰 값을 찾아 반환해요.
- **Average**(평균): 모든 값을 더한 뒤 값의 개수로 나눈 평균을 반환해요.
- **Count**(개수): 전체 값의 개수를 세어 반환해요.

![Math 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040480098/original/JZemO149ziEtzyYNP9OH3279OQ7mJ3LpCw.png?1737961192)

## 자주 묻는 질문

### Array Formatter에는 어떤 데이터를 쓸 수 있나요?

객체나 숫자가 담긴 배열(목록)에 쓸 수 있어요. 배열은 폼 제출, 주문 라인 아이템, API 응답 같은 트리거에서 자주 들어와요.

### Array Formatter는 프리미엄 기능인가요?

아니요. Array Formatter는 이제 하이퍼클래스의 프리미엄 워크플로우 액션이 아니고, 무료로 쓸 수 있어요.

### 중첩 배열도 처리할 수 있나요?

아니요. 현재 Array Formatter는 1차원(단순) 배열을 처리하도록 만들어졌어요. 중첩된 데이터를 처리하려면 별도의 맞춤 처리 방법이 필요해요.

### 같은 워크플로우에서 Array Formatter를 여러 개 쓸 수 있나요?

네, 쓸 수 있어요. Array Formatter 액션을 이어서 연결하면 더 복잡한 작업도 할 수 있어요.

### Array Formatter에 문제가 생기면 어떻게 확인하나요?

빌더의 **Test Workflow**(워크플로우 테스트) 기능으로 출력값을 보고 설정이 올바른지 확인하세요.

## 다음 단계

- 워크플로우를 검토해서 Array Formatter로 자동화할 수 있는 부분을 찾아보세요.
- 더 고급 자동화가 필요하면 [Custom Code](../Integrations-Workflow-Actions/workflow-action-custom-code.md) 같은 다른 프리미엄 액션도 살펴보세요.
- 워크플로우를 관리하는 모든 사용자가 Array Formatter를 잘 활용할 수 있도록 사용법을 공유하세요.

## 함께 보면 좋은 문서

- [워크플로우의 Custom Code](../Integrations-Workflow-Actions/workflow-action-custom-code.md)
- [워크플로우의 수학 연산](../빌더/workflow-action-math-operation-216182.md)
- [워크플로우에서 If/Else 조건 사용하기](../../17-멤버십-커뮤니티/기타/how-do-first-time-users-set-login-password-request-forgotten-password-for-their.md)
