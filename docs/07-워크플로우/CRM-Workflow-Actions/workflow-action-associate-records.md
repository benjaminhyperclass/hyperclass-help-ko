---
원문: /support/solutions/articles/155000007718-workflow-action-associate-records
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Associate Records(레코드 연결)

**Associate Records**(레코드 연결) 액션은 필터와 매칭 방식을 설정해 두면, 워크플로우에 들어온 레코드와 다른 객체의 레코드를 자동으로 연결해 줘요. 연결 작업을 일일이 하지 않아도 CRM 레코드 사이의 관계를 정리할 수 있어요.

## 이 문서에서 배울 내용

**Associate Records** 액션은 필드 값, 병합 필드, 직접 정한 매칭 규칙을 기준으로 CRM 레코드를 찾아 연결해 줘요.

이 문서에서는 다음 내용을 설명해요.

- 액션을 설정하는 방법
- 매칭 방식을 고르는 방법
- 연관 레이블을 적용하는 방법
- 복잡한 비즈니스 관계를 만드는 실제 활용 예시

{% hint style="info" %}
**베타 기능이에요.** **Associate Records** 액션은 현재 **실험실**에서 베타로 제공돼요. 사용하기 전에 **설정 > 실험실 > Associate Records - Workflow Action**(레코드 연결 - 워크플로우 액션)을 켜세요. 베타 기능은 개발이 계속 진행 중이라, 사용자 의견에 따라 업데이트될 수 있어요.
{% endhint %}

## Associate Records 액션이란?

**Associate Records** 액션은 필드 단위의 매칭 규칙에 따라 CRM 레코드 사이에 연관을 자동으로 만들어 줘요. 연락처, 회사, 기회, 사용자 지정 객체에서 모두 쓸 수 있어서, 데이터를 직접 입력하지 않고도 복잡한 비즈니스 관계를 구성할 수 있어요.

워크플로우에 레코드가 들어오면 액션이 설정해 둔 필터(예: 도시, 부동산 유형, 상태)로 일치하는 레코드를 찾아요. 그리고 정해 둔 방식(가장 먼저 만든 레코드, 가장 나중에 만든 레코드, 일치하는 모든 레코드)에 따라 연관을 만들어요.

CRM 관계를 유지하려고 외부 도구나 별도 코드를 쓸 필요가 없고, 레코드가 새로 만들어지거나 수정되어도 연관을 정확하게 유지할 수 있어요.

## 주요 장점

- 레코드 연결 작업을 직접 반복하지 않아도 돼요. 필드 값과 비즈니스 규칙에 따라 연결이 자동으로 이루어져요.
- 레코드가 만들어지거나 수정될 때마다 연관이 자동으로 만들어져, 관계가 최신 데이터를 반영해요.
- 표준 객체와 사용자 지정 객체에 걸친 복잡한 자동화를 만들어 실제 업무 프로세스를 CRM에 그대로 옮길 수 있어요.
- 서드파티 자동화 도구나 별도 코드 대신, CRM 안에서 바로 동작하는 기본 워크플로우 액션을 쓸 수 있어요.
- 고정 값이나, 워크플로우에 들어온 레코드의 병합 필드를 사용해 일치하는 레코드를 유연하게 찾을 수 있어요.

## 주요 기능

**Associate Records** 액션은 다양한 CRM 업무 상황에 맞게 설정할 수 있어요.

1. **여러 객체 지원**
   워크플로우 유형과 서브 계정에 설정된 객체 연관에 따라 연락처, 회사, 기회, 사용자 지정 객체 사이의 레코드를 연결해요.

2. **필드 기반 필터**
   하나 이상의 필드 기반 필터로 레코드를 찾아요. 모든 필드 유형과 그에 맞는 연산자(equals, is, is not empty, contains, greater than 등)를 쓸 수 있어요.

3. **고정 값과 병합 필드**
   "4"(침실 수)처럼 고정 값을 쓰거나, `contact.preferred_city`처럼 워크플로우에 들어온 레코드의 병합 필드를 써서 실시간 데이터에 맞게 레코드를 찾아요.

4. **매칭 방식**
   비즈니스 상황에 따라 가장 먼저 만든 레코드, 가장 나중에 만든 레코드, 일치하는 모든 레코드 중에서 연결 대상을 고를 수 있어요.

5. **연관 레이블**
   이미 만들어 둔 연관 레이블을 적용해 레코드 사이의 관계를 분류하고 설명해요(예: "Potential Buyer"(잠재 구매자), "Seller"(판매자)). 선택한 레이블은 트리거 레코드에 적용돼요.

6. **객체 간 연관**
   서브 계정에 설정된 연관에 따라 서로 다른 객체 사이에 연관을 만들 수 있어요(예: 연락처와 Property(부동산 매물), 회사와 기회).

7. **다중 필터 로직**
   필터를 여러 개 추가하면 AND 조건으로 적용돼서 더 정확한 매칭 규칙을 만들 수 있어요. 레코드가 모든 조건을 충족해야 연결 대상이 돼요.

## Associate Records 액션 설정하기

연락처, 회사, 사용자 지정 객체 워크플로우에서 **Associate Records** 액션을 설정하는 순서예요.

1. **실험실에서 기능 켜기**

   **설정 > 실험실**로 이동해 **Associate Records - Workflow Action**(레코드 연결 - 워크플로우 액션) 기능을 켜세요.

   ![실험실에서 Associate Records 기능을 켜는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077497329/original/wO99TV_UQCyIiYu5wGvADNuJAUeJ1IZLjg.png?1785767436)

2. **워크플로우 열기 또는 만들기**

   액션을 추가할 기존 워크플로우를 열거나, 새 연락처·회사·사용자 지정 객체 워크플로우를 만드세요.

3. **Associate Records 액션 추가하기**

   **+** 아이콘을 눌러 새 액션을 추가해요. **Associations**(연관) 카테고리에서 **Associate Records**를 선택하세요. 옆에 BETA 표시가 붙어 있어요.

   ![Associations 카테고리에서 Associate Records 액션을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077507058/original/vs-r6KzVQfT0SpaPnk8kdqGjhTfWzCaroQ.png?1785772549)

4. **액션 이름 정하기 (선택)**

   **ACTION NAME**(액션 이름) 필드에서 기본 이름인 "Associate records"를 그대로 두어도 되고, 만들려는 연관을 알아볼 수 있는 이름으로 바꿔도 돼요.

   ![액션 이름을 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077507117/original/a6vuzGxhSqYUeF-ZBqdDQqE-mXoCnl2JvA.png?1785772592)

5. **연결할 객체 선택하기**

   **CREATE ASSOCIATION WITH**(연관을 만들 대상)에서 연결하려는 레코드가 들어 있는 객체 유형을 선택하세요(예: Property, Campaign, Company, Insurance Policy, Transaction).

   선택할 수 있는 객체는 서브 계정에 설정된 연관에 따라 달라져요. 다른 객체의 레코드와 연결하려면 **연관** 설정으로 이동하세요.

   ![연관을 만들 객체를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077507180/original/kpIHrfIjHiH-ph1_cfi6bs1qyfqnzse0nA.png?1785772622)

6. **일치하는 레코드를 찾을 필터 설정하기**

   **FILTER RECORDS TO ASSOCIATE**(연결할 레코드 필터링)에서 필드 기반 필터를 하나 이상 추가하세요. 필터 행마다 다음과 같이 설정해요.

   - 일치 여부를 확인할 필드를 선택하세요(예: Bedrooms, City, Property Type).
   - 연산자를 선택하세요(예: **Equals**, **Is**, **Is not empty**).
   - 고정 값을 입력하거나, 병합 필드 아이콘으로 워크플로우에 들어온 레코드의 병합 필드를 쓰세요.

   조건을 더 추가하려면 **Add field**(필드 추가)를 누르세요. 모든 필터는 AND 조건으로 적용돼서, 레코드가 모든 조건을 충족해야 연결 대상이 돼요.

   액션이 동작하려면 필드와 값을 한 쌍 이상 입력해야 해요.

   ![연결할 레코드를 찾는 필터를 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077507661/original/G8iRb_qmRhJy-CsqrUkEhsW4PM3rWVRATg.png?1785772870)

7. **매칭 방식 선택하기**

   **WHEN MULTIPLE RECORDS MATCH**(일치하는 레코드가 여러 개일 때)에서 처리 방식을 고르세요.

   - **Associate with all matching records**(일치하는 모든 레코드와 연결): 필터 조건을 충족하는 모든 레코드와 연관을 만들어요.
   - **Associate with earliest created record**(가장 먼저 만든 레코드와 연결): 가장 먼저 만들어진 레코드하고만 연결해요.
   - **Associate with latest created record**(가장 나중에 만든 레코드와 연결): 가장 최근에 만들어진 레코드하고만 연결해요.

   ![일치하는 레코드가 여러 개일 때의 처리 방식을 고르는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077507694/original/xdv4MzpzKet9doSF3TGhBzYZZbjexxtyMg.png?1785772915)

8. **연관 레이블 선택하기**

   **ASSOCIATION LABEL**(연관 레이블)에서 연관을 분류할 기존 레이블을 선택하세요(예: "Potential Buyer", "Seller").

   선택한 레이블은 트리거 레코드에 적용돼요. 일부 레이블은 짝으로 구성돼 있어요(예: "Seller - Paired with Property", "Potential Buyer - Paired with Interest Property").

   ![연관 레이블을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077507725/original/JsyEWQI8VtwXmFguq7qa2aJrDShkW6M_GA.png?1785772962)

9. **변경 사항 저장하기**

   **Save action**(작업 저장)을 눌러 설정한 액션을 워크플로우에 추가하세요. 변경 사항을 버리려면 **Cancel**(취소)을 누르면 돼요.

   연관 자동화를 시작하려면 워크플로우를 저장하고 게시하세요.

   ![Save action 버튼으로 액션을 저장하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077507779/original/V95cjMUVysjwtrIRPjWZn1j_LSD5p0-eUA.png?1785773001)

10. **연관 확인하기**

    워크플로우가 실행된 뒤 연관을 확인하려면 **연락처 > 연관**으로 이동하세요.

    ![연락처의 연관 화면에서 만들어진 연관을 확인하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077508422/original/XYDNjNUqwuUH1L4d3ZjtrAvGQSJLCPo7Wg.png?1785773366)

{% hint style="info" %}
워크플로우를 게시하면, 레코드가 들어와서 설정한 필터 조건과 일치할 때마다 연관이 자동으로 만들어져요.
{% endhint %}

**Associate Records** 액션을 쓰면 연락처, 회사, 기회, 사용자 지정 객체에 걸친 복잡한 관계 관리를 자동화할 수 있어요. 직접 처리하는 일이 줄고 CRM 데이터도 정확하게 유지돼요.

## 실제 활용 예시

**Associate Records** 액션은 규칙에 따라 레코드를 동적으로 연결해야 하는 업종에 잘 맞아요. 아래는 부동산 중개 회사의 예시예요.

### 활용 예시: 부동산 구매자와 매물 매칭

부동산 중개 회사가 매물을 관리하려고 "Property"라는 사용자 지정 객체를 쓰고 있어요. 새 구매자 연락처가 워크플로우에 들어오면 **Associate Records** 액션이 구매자의 선호 조건과 맞는 Property 레코드를 자동으로 찾아요.

액션 설정은 다음과 같아요.

- **CREATE ASSOCIATION WITH**: Property
- **FILTER RECORDS TO ASSOCIATE**: Bedrooms(Number)가 4와 **Equals**, City(Dropdown single)가 `contact.preferred_city`와 **Is**, Property Type(Dropdown single)이 `contact.preferred_type`과 **Is**, Property Name(Single line)이 **Is not empty**
- **WHEN MULTIPLE RECORDS MATCH**: **Associate with all matching records**
- **ASSOCIATION LABEL**: Potential Buyer

결과는 이래요. 구매자마다 조건에 맞는 모든 매물이 자동으로 연결돼요. 담당 중개인은 각 Property 레코드에서 관심 있는 구매자 목록을 바로 볼 수 있어요. 연결 작업을 직접 하지 않아도 되고, 구매자는 맞는 매물을 곧바로 확인할 수 있어요.

이 자동화를 쓰면 새 연락처와 매물이 추가될 때마다 레코드를 하나씩 연결하지 않아도 연관을 만들고 유지할 수 있어서, 시간을 많이 아낄 수 있어요.
