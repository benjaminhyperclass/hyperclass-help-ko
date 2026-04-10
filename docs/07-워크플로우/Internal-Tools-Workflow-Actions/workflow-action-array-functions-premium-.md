---

번역일: 2026-04-07
카테고리: 07-워크플로우 > Internal Tools Workflow Actions
---

# 워크플로우 액션 - 배열 함수 (프리미엄)

프리미엄 액션인 배열 함수(Array Functions)를 사용하면 배열(데이터 목록)에 대한 작업을 수행할 수 있습니다. 이 강력한 프리미엄 액션을 통해 데이터 배열을 조작하고, 필터링하고, 정보를 추출하여 작업을 더욱 효율적으로 자동화할 수 있습니다.

---

**목차**

- [배열 함수란 무엇인가요?](#배열-함수란-무엇인가요)
- [배열 함수의 주요 장점](#배열-함수의-주요-장점)
- [배열 함수 설정 방법](#배열-함수-설정-방법)
- [배열 함수 상세 설명](#배열-함수-상세-설명)
- [Find (찾기)](#find-찾기)
- [Find by Index (인덱스로 찾기)](#find-by-index-인덱스로-찾기)
- [Filter (필터)](#filter-필터)
- [Line Items (라인 아이템)](#line-items-라인-아이템)
- [Math (수학 연산)](#math-수학-연산)
- [자주 묻는 질문](#자주-묻는-질문)

---

# **배열 함수란 무엇인가요?**

배열 함수는 자동화 워크플로우 내에서 배열(데이터 목록)을 관리하고 조작하도록 설계된 Hyperclass의 프리미엄 워크플로우 액션 세트입니다. 주문 라인 아이템이나 고객 속성과 같은 객체 목록을 다룰 때 워크플로우에 배열이 나타나며, 배열 함수를 사용하면 데이터를 효율적으로 추출, 필터링 또는 계산할 수 있습니다. 이 함수는 특히 데이터를 서드파티 서비스로 내보내지 않고 워크플로우에서만 기본적인 데이터 처리를 하고자 하는 비즈니스에게 매우 유용합니다.

---

## 배열 함수의 주요 장점

Hyperclass 워크플로우에서 배열 함수를 사용하면 자동화, 데이터 처리, 작업 효율성 측면에서 다양한 장점을 얻을 수 있습니다. 주요 장점은 다음과 같습니다:

- **향상된 워크플로우 자동화:** 외부 서드파티 서비스로 데이터를 보내지 않고도 필터링, 정렬, 계산이 필요한 작업을 자동화합니다.

- **개선된 의사결정:** 데이터 세트에서 실시간으로 의미 있는 인사이트를 추출합니다.

- **수동 오류 감소:** 복잡한 계산과 데이터 조작을 자동화합니다.

- **커스터마이즈 가능한 액션:** 유연한 배열 연산으로 고유한 비즈니스 요구사항에 맞게 워크플로우를 조정합니다.

---

## **배열 함수 설정 방법**

워크플로우에서 배열 함수를 설정하고 사용하려면 다음 단계를 따르세요:

**1단계: 워크플로우 빌더 접근**. Hyperclass 애플리케이션을 열고 Automation(자동화) 탭으로 이동한 다음 워크플로우를 생성하거나 선택합니다.

![워크플로우 빌더 접근](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040473379/original/BNeYKRSqIiAKoO2etWq1iFcGanZGh-DEXg.png?1737942844)

**2단계: 배열 함수 액션 추가**. "Add Action(액션 추가)"를 클릭하고 Premium Actions(프리미엄 액션) 섹션에서 "Array Function(배열 함수)"를 선택합니다.

![배열 함수 액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040473375/original/0jHYbd1q6WtZWX1mZca3xyn9BEJEUgoo7Q.png?1737942775)

**3단계: 함수 타입 선택**. Find(찾기), Filter(필터), Find by Index(인덱스로 찾기), Line Items(라인 아이템), Math(수학 연산) 옵션 중에서 원하는 배열 함수를 선택합니다.

![함수 타입 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040473392/original/-VA72O-j_YI5szbXcqDpIRm8jtKJCz_ALA.png?1737942929)

**4단계: 입력 구성**. 입력 배열을 지정합니다. 선택한 함수 타입에 따라 키, 값 또는 조건을 정의합니다.

![입력 구성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040473413/original/mgFN2ZZM68q4RzHXmgQlO5j5xOhCdWh-og.png?1737943149)

**5단계: 저장 및 테스트**. 워크플로우를 저장하고 액션을 테스트하여 의도한 대로 작동하는지 확인합니다.

![저장 및 테스트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040473426/original/ESwsr1PF1dntsi5CpxqRcBRH0JK1u4j79w.png?1737943285)

**6단계: 값 사용**. 액션이 작동하면 다른 액션에서 참조할 수 있는 변수가 생성됩니다.

![값 사용](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040480458/original/1eTghHjhNXhJv7nQaSMqii0CKYI8rUpswg.png?1737961504)

---

## **배열 함수 상세 설명**

각 배열 함수 타입은 배열 데이터에 대한 특정 작업을 수행하도록 맞춤화되어 있습니다. 사용 가능한 배열 데이터 목록은 Shopify 트리거, 인바운드 웹훅 트리거, 커스텀 웹훅 액션 응답 데이터에서 수집됩니다.

사용 가능한 함수의 분석은 다음과 같습니다:

### **Find (찾기)**

Find 액션은 키-값 쌍을 일치시켜 배열에서 특정 객체를 찾습니다. 예를 들어, 구매 항목 목록에서 "노트북"과 같은 특정 상품이 존재하는지 찾는 것입니다. 일치하는 항목이 있으면 반환됩니다. Find는 일치하는 첫 번째 객체만 반환합니다.

![Find 액션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040479747/original/37cstWkFwrxGERq67agrZA-Q6Cb5R_LRJw.png?1737960666)

예를 들어, Shopify Order Placed 트리거를 사용하여 상품 ID "zGhad23wfadfa"가 있는 상품이 Shopify 라인 아이템에 포함되어 있는지 확인하는 방법입니다.

**1단계**: 액션 타입 Find 선택
![1단계](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040480609/original/X7iUYaj_SehCrghF7dD29q57bQqW8WEG9g.png?1737961681)

**2단계**: Shopify > Line Items 선택
![2단계](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040480684/original/Stb1nbdogQM3wJV8nZqN59nBDPERRs1mxQ.png?1737961772)

**3단계**: 키를 선택하고 일치시킬 값을 입력
![3단계](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040480731/original/bUhLbJ5DBfQ2J2DMuUc1I8DALkZVO_zqXA.png?1737961804)

**4단계**: 사용 가능한 라인 아이템 키 확인
![4단계](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040481092/original/3CZd4JMwZhu0p4W88wigwYey4s7gGkatag.png?1737961870)

**5단계**: 이 예에서는 "id" 키를 선택하고 특정 상품 ID를 값으로 입력
![5단계](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040481121/original/MRD8SA6WoV3VoYgFExIJcG6_nIl4Y-ufVg.png?1737961915)

### **Find by Index (인덱스로 찾기)**

Find by Index 액션은 배열 위치를 기준으로 하나의 항목을 반환합니다. 배열은 항상 0부터 시작합니다. 따라서 배열에 3개의 항목이 있다면 다음과 같이 번호가 매겨집니다: (0) 사과, (1) 바나나, (2) 체리. 인덱스 위치 2에 있는 항목을 요청하면 목록의 세 번째 항목인 체리가 반환됩니다.

![Find by Index 액션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040479871/original/B5KIJaU-pso0h87O8wcSVDS9iOfpNOorWg.png?1737960844)

### **Filter (필터)**

Filter 액션은 주어진 필터(또는 필터 세트)와 일치하는 모든 객체의 배열을 반환합니다. 예를 들어, 색상이 "파란색"인 모든 객체나 카테고리가 "홈"인 모든 객체를 찾습니다.

![Filter 액션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040479946/original/7FpotjptUCNI2FoGye1pl0iO-aoe-2azng.png?1737960944)

예를 들어, 특정 사람만으로 배열을 필터링할 수 있습니다. 키를 "id"로 설정하고 값을 동적 {{user.name}}으로 설정하면 해당 사용자의 모든 주문을 가져올 수 있습니다.

![필터 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040481226/original/OdnHyvfid1bBaAzNfMsSMi0xAhI1e2rUyQ.png?1737962042)

### **Line Items (라인 아이템)**

Line Items 액션 타입을 사용하면 커스텀 웹훅, Google 시트 저장, 또는 Email Builder 쇼핑카트 구조에 맞추는 것과 같은 대상 액션에 맞게 배열을 재구축/재구성할 수 있습니다. 각 항목에서 키-값 쌍을 커스터마이즈할 수 있습니다. 이는 하나의 배열을 받아서 지정한 다른 배열로 같은 데이터를 출력합니다.

![Line Items 액션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040479996/original/GGHxWVTGin31P72-wosdPcgYqAGOCioVGA.png?1737961025)

### **Math (수학 연산)**

Math Functions 액션에는 배열의 숫자에 대해 수행할 수 있는 Sum(합계)이나 Avg(평균) 같은 여러 옵션이 있습니다. 예를 들어, 모든 가격을 합하여 총 주문 금액을 구할 수 있습니다. 수학 연산의 결과가 반환됩니다. 수학 연산은 다음과 같습니다:

- Sum(합계): 모든 값을 더하여 총합을 반환합니다.
- Min(최솟값): 가장 작은 값을 찾아 반환합니다.
- Max(최댓값): 가장 큰 값을 찾아 반환합니다.
- Average(평균): 모든 값을 더한 후 값의 개수로 나누어 평균을 반환합니다.
- Count(개수): 총 값의 개수를 세어 반환합니다.

![Math 액션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040480098/original/JZemO149ziEtzyYNP9OH3279OQ7mJ3LpCw.png?1737961192)

---

## **자주 묻는 질문**

**Q: 배열 함수와 함께 어떤 종류의 데이터를 사용할 수 있나요?**

A: 배열 함수는 객체나 숫자의 배열(목록)과 함께 작동합니다. 배열은 종종 폼 제출, 주문 라인 아이템, 또는 API 응답과 같은 트리거에서 나옵니다.

**Q: 배열 함수는 프리미엄 기능인가요?**

A: 네, 배열 함수는 Hyperclass의 프리미엄 워크플로우 액션으로, 실행할 때마다 소액의 요금이 부과됩니다.

**Q: 배열 함수는 중첩된 배열을 처리할 수 있나요?**

A: 아니요, 배열 함수는 현재 1차원(평면) 배열을 처리하도록 설계되어 있습니다. 중첩된 데이터에 대한 추가 처리는 커스텀 솔루션이 필요합니다.

**Q: 같은 워크플로우에서 여러 배열 함수를 사용할 수 있나요?**

A: 물론입니다. 배열 함수를 연결하여 복잡한 작업을 수행할 수 있습니다.

**Q: 배열 함수 문제를 어떻게 디버깅하나요?**

A: 빌더의 "Test Workflow(워크플로우 테스트)" 기능을 사용하여 출력을 확인하고 올바른 구성인지 확인하세요.

---
*원문 최종 수정: Wed, 29 Jan, 2025 at 1:11 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*