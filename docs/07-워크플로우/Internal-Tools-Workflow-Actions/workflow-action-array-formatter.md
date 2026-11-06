---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000001466-workflow-action-array-formatter
번역일: 2026-08-11
카테고리: 07-워크플로우 > Internal Tools Workflow Actions
---

# 워크플로우 액션 - 배열 포맷터 (Array Formatter)

배열 포맷터(Array Formatter) 액션을 사용하면 배열(데이터 목록)에 대한 작업을 수행할 수 있어요. 이 강력한 액션을 활용하면 데이터 배열을 조작하고, 필터링하고, 정보를 추출해서 작업을 더 효율적으로 자동화할 수 있습니다.

---

**목차**

- [배열 함수란 무엇인가요?](#What-are-Array-Functions?)
- [배열 함수의 주요 이점](#Key-Benefits-of-Array-Functions)
- [배열 함수 설정 방법](#How-to-Set-Up-Array-Functions)[배열 함수 상세 설명](#Detailed-Explanation-of-Array-Functions)
- [찾기(Find)](#Find)
- [인덱스로 찾기(Find by Index)](#Find-by-Index)
- [필터(Filter)](#Filter)
- [라인 아이템(Line Items)](#Line-Items)
- [수학 연산(Math)](#Math)
- [자주 묻는 질문](#Frequently-Asked-Questions)
- [관련 아티클](#Related-Articles)
- [다음 단계](#Next-Steps)
---

# 배열 포맷터란 무엇인가요?

배열 함수(Array Functions)는 하이퍼클래스 워크플로우 안에서 배열(데이터 목록)을 관리하고 조작하기 위해 만들어진 워크플로우 액션 모음이에요. 주문 라인 아이템이나 고객 속성처럼 여러 개의 객체로 이루어진 목록을 다룰 때 배열이 워크플로우에 나타나는데, 배열 함수를 사용하면 이런 데이터를 효율적으로 추출·필터링·계산할 수 있습니다. 데이터를 외부의 제3자 서비스로 내보내지 않고도 워크플로우 안에서 기본적인 데이터 처리를 직접 하고 싶은 비즈니스에 특히 유용해요.

배열 포맷터는 이제 무료로 사용할 수 있는 일반 워크플로우 실행 항목으로 변경되어 $0으로 청구됩니다. 워크플로우 동작 방식은 그대로 유지되지만, 이 액션을 사용할 때 더 이상 프리미엄 실행 요금이 부과되지 않아요.

**중요:**

- 배열 포맷터는 더 이상 프리미엄 액션(Premium Action)으로 취급되지 않아요


- 워크플로우 동작 방식은 변경되지 않습니다


- 웹훅(Webhook)이나 배열을 출력하는 다른 워크플로우 단계 뒤에서 계속 사용할 수 있어요
---

## 배열 포맷터의 주요 이점

하이퍼클래스 워크플로우에서 배열 함수를 사용하면 자동화, 데이터 처리, 작업 효율성 측면에서 다양한 이점을 얻을 수 있어요. 주요 이점은 다음과 같습니다:

- **워크플로우 자동화 강화:** 데이터를 외부의 제3자 서비스로 보내지 않고도 필터링, 정렬, 계산이 필요한 작업을 자동화할 수 있어요.


- **의사결정 개선:** 데이터셋에서 실시간으로 의미 있는 인사이트를 추출할 수 있어요.


- **수동 오류 감소:** 복잡한 계산과 데이터 조작을 자동화할 수 있어요.


- **맞춤형 액션:** 유연한 배열 연산으로 각 비즈니스의 고유한 요구에 맞게 워크플로우를 구성할 수 있어요.
---

## 배열 포맷터 설정 방법

액션 패널이 개선되어 액션을 저장하기 전에 배열 포맷터를 더 쉽게 이해할 수 있게 되었어요. 액션 유형을 선택할 때 드롭다운과 설정 패널에서 더 명확한 옵션 상세 정보를 바로 확인할 수 있습니다.

업데이트된 UI에는 다음이 포함돼요:

- 액션 유형 설명


- 액션 유형별 톤 다운된 아이콘


- 반환 타입 표시


- 출력 미리보기 또는 반환 요약 메시지


이를 통해 액션을 저장하기 전에 각 옵션이 어떤 결과를 반환하는지 미리 파악할 수 있어요.

워크플로우에서 배열 함수를 설정하고 사용하려면 아래 단계를 따라주세요:

1단계**: 워크플로우 빌더(Workflow Builder) 접속하기**. 하이퍼클래스 애플리케이션을 열고 Automation(자동화) 탭으로 이동한 다음, 워크플로우를 새로 만들거나 기존 워크플로우를 선택하세요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040473379/original/BNeYKRSqIiAKoO2etWq1iFcGanZGh-DEXg.png?1737942844)


2단계**: 배열 함수(Array Function) 액션 추가하기**. "Add Action(액션 추가)"을 클릭하고 Premium Actions(프리미엄 액션) 섹션에서 "Array Function(배열 함수)"을 선택하세요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040473375/original/0jHYbd1q6WtZWX1mZca3xyn9BEJEUgoo7Q.png?1737942775)


3단계**: 함수 유형 선택하기**. Find(찾기), Filter(필터), Find by Index(인덱스로 찾기), Line Items(라인 아이템), Math(수학 연산) 중에서 원하는 배열 함수를 선택하세요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040473392/original/-VA72O-j_YI5szbXcqDpIRm8jtKJCz_ALA.png?1737942929)


4단계: 입력값 설정하기. 대상 배열을 지정하세요. 선택한 함수 유형에 따라 키, 값 또는 조건을 정의합니다.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040473413/original/mgFN2ZZM68q4RzHXmgQlO5j5xOhCdWh-og.png?1737943149)


**5단계: 저장 및 테스트.** 워크플로우를 저장하고 액션을 테스트해서 의도한 대로 작동하는지 확인하세요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040473426/original/ESwsr1PF1dntsi5CpxqRcBRH0JK1u4j79w.png?1737943285)


**6단계: 값 사용하기.** 액션이 정상적으로 작동하면 다른 액션에서 참조할 수 있는 변수가 생성돼요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040480458/original/1eTghHjhNXhJv7nQaSMqii0CKYI8rUpswg.png?1737961504)


---

## **배열 함수 상세 설명**

각 배열 함수 유형은 배열 데이터에 대해 특정 작업을 수행하도록 만들어져 있어요. 사용 가능한 배열 데이터 목록은 Shopify 트리거, 인바운드 웹훅 트리거(Inbound Webhook Trigger), 커스텀 웹훅(Custom Webhook) 액션 응답 데이터에서 수집됩니다.

아래는 사용 가능한 함수들에 대한 상세 설명이에요:

### **찾기(Find)**

Find 액션은 키-값 쌍을 매칭해서 배열 안의 특정 객체를 찾아줘요. 예를 들어 구매한 상품 목록에서 "Laptop"이라는 특정 상품이 있는지 찾는 경우예요. 일치하는 항목이 있으면 그 항목이 반환됩니다. Find는 조건에 맞는 항목 중 맨 처음 발견된 객체 하나만 반환해요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040479747/original/37cstWkFwrxGERq67agrZA-Q6Cb5R_LRJw.png?1737960666)

예를 들어, Shopify Order Placed 트리거를 사용하면서 상품 ID "zGhad23wfadfa"가 Shopify 라인 아이템에 포함되어 있는지 확인하는 경우를 살펴볼게요.

**1단계**: 액션 유형에서 Find 선택하기
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040480609/original/X7iUYaj_SehCrghF7dD29q57bQqW8WEG9g.png?1737961681)
**2단계**: Shopify > Line Items 선택하기
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040480684/original/Stb1nbdogQM3wJV8nZqN59nBDPERRs1mxQ.png?1737961772)
**3단계**: 키(Key)를 고르고 매칭할 값(Value)을 입력하기.
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040480731/original/bUhLbJ5DBfQ2J2DMuUc1I8DALkZVO_zqXA.png?1737961804)
**4단계**: 사용 가능한 Line Item 키 확인하기.
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040481092/original/3CZd4JMwZhu0p4W88wigwYey4s7gGkatag.png?1737961870)
**5단계**: 이 예시에서는 "id" 키를 선택하고 특정 상품 ID를 값(Value)으로 붙여넣습니다.
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040481121/original/MRD8SA6WoV3VoYgFExIJcG6_nIl4Y-ufVg.png?1737961915)


### 


### **인덱스로 찾기(Find by Index)**

Find by Index 액션은 배열 내 위치(인덱스)를 기준으로 항목 하나를 반환해요. 배열은 항상 0부터 시작합니다. 예를 들어 배열에 3개의 항목이 있다면 (0) Apple, (1) Banana, (2) Cherry와 같이 번호가 매겨져요. 인덱스 위치 2를 요청하면 목록의 세 번째 항목, 즉 이 경우 Cherry가 반환됩니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040479871/original/B5KIJaU-pso0h87O8wcSVDS9iOfpNOorWg.png?1737960844)


### 


### **필터(Filter)**

Filter 액션은 주어진 필터(또는 필터 조합)와 일치하는 모든 객체를 배열 형태로 반환해요. 예를 들어 색상이 "blue"인 모든 객체, 또는 카테고리가 "home"인 모든 객체를 가져올 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040479946/original/7FpotjptUCNI2FoGye1pl0iO-aoe-2azng.png?1737960944)

예를 들어, 배열을 특정 사람에 대한 항목만 남도록 필터링할 수 있어요. 키(Key)를 "id"로 설정하고 값(Value)을 동적 변수 {{user.name}}으로 설정하면 해당 사용자의 모든 주문을 가져올 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040481226/original/OdnHyvfid1bBaAzNfMsSMi0xAhI1e2rUyQ.png?1737962042)


### 


### 


### 라인 아이템(Line Items)

Line Items 액션 유형은 커스텀 웹훅, Google Sheets 저장, 이메일 빌더(Email Builder)의 장바구니 구조 맞춤 등 대상 액션에 맞도록 배열을 재구성할 수 있게 해줘요. 각 항목의 키-값 쌍을 직접 지정할 수 있습니다. 하나의 배열을 입력받아서 지정한 다른 형태의 배열로 동일한 데이터를 출력해요.

### 

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040479996/original/GGHxWVTGin31P72-wosdPcgYqAGOCioVGA.png?1737961025)


### 


### **수학 연산(Math)**

Math Functions 액션은 배열 안의 숫자에 대해 Sum(합계)이나 Avg(평균) 같은 여러 연산을 수행할 수 있어요. 예를 들어 모든 가격을 합산해서 전체 주문 금액을 구할 수 있습니다. 연산 결과가 반환돼요. 사용 가능한 수학 연산은 다음과 같습니다:

- Sum(합계): 모든 값을 더해서 합계를 반환합니다.
- Min(최솟값): 가장 작은 값을 찾아 반환합니다.
- Max(최댓값): 가장 큰 값을 찾아 반환합니다.
- Average(평균): 모든 값을 더한 뒤 값의 개수로 나눠 평균을 반환합니다.
- Count(개수): 값의 총 개수를 세어 반환합니다.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040480098/original/JZemO149ziEtzyYNP9OH3279OQ7mJ3LpCw.png?1737961192)


---

## **자주 묻는 질문**

**Q: 배열 함수는 어떤 유형의 데이터에 사용할 수 있나요?**

A: 배열 함수는 객체나 숫자로 이루어진 배열(목록)에서 작동해요. 배열은 폼 제출, 주문 라인 아이템, API 응답 같은 트리거에서 주로 만들어집니다.

**Q: 배열 함수는 프리미엄 기능인가요?**

A: 아니에요. 배열 포맷터는 더 이상 하이퍼클래스의 프리미엄 워크플로우 액션이 아니며, 이제 무료로 사용할 수 있어요.

**Q: 배열 함수는 중첩된 배열도 처리할 수 있나요?**

A: 아니요. 현재 배열 함수는 1차원(플랫) 배열을 처리하도록 설계되어 있어요. 중첩된 데이터를 추가로 처리하려면 별도의 커스텀 솔루션이 필요합니다.

**Q: 하나의 워크플로우에서 여러 개의 배열 함수를 사용할 수 있나요?**

A: 물론이에요. 배열 함수를 여러 개 연결해서 복잡한 작업을 수행할 수 있습니다.

**Q: 배열 함수에 문제가 생겼을 때 어떻게 디버깅하나요?**

A: 빌더 안의 "Test Workflow(워크플로우 테스트)" 기능을 사용해서 출력 결과를 확인하고 설정이 올바른지 점검하세요.

---

## **다음 단계**

- 워크플로우를 검토해서 배열 함수로 자동화할 수 있는 부분을 찾아보세요.


- 고급 자동화가 필요하다면 커스텀 코드(Custom Code) 같은 추가 프리미엄 액션도 살펴보세요.


- 워크플로우를 관리하는 모든 사용자가 배열 함수를 제대로 익혀서 최적으로 활용할 수 있도록 안내해 주세요.

---
*원문 최종 수정: 2026-06-03*
*Hyperclass 사용 가이드 — hyperclass.ai*