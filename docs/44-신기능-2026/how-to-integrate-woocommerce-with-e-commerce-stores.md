---
원문: /support/solutions/articles/155000004052-how-to-integrate-woocommerce-with-e-commerce-stores
번역일: 2026-11-06
카테고리: 44-신기능-2026
---

# 이커머스 스토어에 WooCommerce 연동하기

WooCommerce 스토어의 연락처, 주문, 거래 내역을 하이퍼클래스로 가져오고 동기화하는 방법을 안내해요. 서브 계정으로 어떤 데이터를 동기화할지 직접 고를 수 있어요.

---

## WooCommerce 연동이란?

WooCommerce 연동은 WooCommerce 스토어를 하이퍼클래스 서브 계정에 연결하는 기능이에요. 이전 기록을 가져오고, 새 구매도 계속 동기화할 수 있어요. 연결하면 WooCommerce의 연락처, 주문, 거래 내역을 하이퍼클래스로 가져오고, 주문 관련 이벤트를 자동화에 사용할 수 있어요.

WooCommerce 스토어 운영자는 하이퍼클래스의 마케팅 도구를 쓸 수 있어요. **Order Submitted**(주문 제출) 트리거와 결제 완료 트리거가 대표적이에요.
조건에 맞는 WooCommerce 고객은 하이퍼클래스 연락처에 구매 이력 데이터를 채울 수 있어요. 하이퍼클래스는 고객 ID, 스토어 이름, 주문 수, 평생 가치, 구매 날짜, 마지막 주문 금액에 해당하는 WooCommerce 연락처 필드를 자동으로 만들어요.

이 이커머스 데이터로 스마트 리스트에서 연락처를 나누거나, 고객 가치·주문 이력·최근 구매 여부를 기준으로 워크플로우 조건을 만들 수 있어요.

---

## WooCommerce 연동의 주요 장점

- 주문 현황을 한곳에서 보기: 동기화를 켜면 WooCommerce 주문을 하이퍼클래스 안에서 볼 수 있어요.
- 연락처 보강: 비회원(게스트) 결제를 포함해 WooCommerce 구매로 하이퍼클래스 연락처를 만들거나 업데이트해요.
- 맞춤 자동화: 주문 제출이나 결제 완료 같은 주문 관련 이벤트로 워크플로우를 실행해요.
- 선택적 제어: 처음에 가져올 데이터 유형과 계속 동기화할 데이터 유형(연락처, 주문, 거래 내역)을 직접 골라요.
- 다시 가져오기: 필요할 때 **연결 해제**했다가 다시 연결하면 이전 데이터를 다시 가져올 수 있어요.

- 연락처 보강: 조건에 맞는 WooCommerce 고객 연락처를 만들거나 업데이트하고, 총 주문 수, 평생 가치, 구매 날짜, 마지막 주문 금액 같은 구매 이력 데이터를 채워요.

- 구매 기반 세분화와 자동화: 스마트 리스트와 워크플로우 조건에서 WooCommerce 연락처 필드를 사용해 첫 구매 고객, 재구매 고객, 고가치 고객, 최근 활동 고객을 찾아요.

---

## WooCommerce 연동 설정하기

설정을 제대로 해 두면 이전 데이터를 정확히 가져오고, 새 주문도 서브 계정에 계속 동기화돼요.

{% hint style="info" %}
나중에 데이터를 다시 가져오려면 연결을 해제했다가 다시 연결한 뒤, 가져올 항목을 다시 선택하세요.
{% endhint %}

1. 서브 계정에 로그인하세요.
2. **설정**을 클릭하세요.

   ![설정 메뉴](https://jumpshare.com/share/kUE8x0oaKW32yQzD1Rzz+/Screen+Shot+2025-12-04+at+3.36.46+PM.png)
3. **연동 > WooCommerce**로 이동한 뒤 **연결**을 클릭하세요.

   ![WooCommerce 연결 버튼](https://jumpshare.com/share/iNPwWwctR9NNTHhYbGnM+/Screen+Shot+2025-12-04+at+3.38.35+PM.png)
4. **WooCommerce 스토어 URL 입력** 칸에 스토어 주소를 입력하고 연결을 승인하세요. 주소 끝에 슬래시(/)는 붙이지 마세요(예: https://yourstore.com).

   ![스토어 URL 입력 화면](https://jumpshare.com/share/qS6VghlQySGEvyAgsbVJ+/Screen+Shot+2025-12-04+at+3.42.30+PM.png)
5. **가져오기** 항목을 선택하세요.

   - **연락처 가져오기**: 이전에 주문한 적이 있는 고객 연락처만 가져와요.
   - **주문 가져오기**: 켜면 거래 가져오기를 쓸 수 있고, 주문 접수·결제 완료 이벤트 트리거도 쓸 수 있어요.
   - **거래 가져오기**: WooCommerce 주문 거래 내역을 모두 가져와요.
   - **상품 가져오기**: WooCommerce에서 게시된 상품은 기본적으로 온라인 스토어에 자동으로 포함돼요.
6. **다음**을 클릭하세요.

   ![가져오기 항목 선택 화면](https://jumpshare.com/share/R2lLdmxLgNKm0G5D8aSI+/Screen+Shot+2025-12-04+at+3.46.11+PM.png)
7. **동기화** 항목을 선택하세요.

   - **연락처 동기화**: 앞으로 주문하는 고객 연락처만 동기화해요.
   - **주문 동기화**: 앞으로 들어오는 WooCommerce 주문을 한곳에 모두 동기화해요.

     주문 동기화를 켜면 거래 동기화를 쓸 수 있고, 주문 접수·결제 완료 이벤트 트리거도 쓸 수 있어요.

     - **주문 접수 트리거**: WooCommerce에서 주문이 접수되면 하이퍼클래스 자동화에서 주문 접수 트리거를 쓸 수 있어요.
     - **거래 동기화**: WooCommerce 주문 거래 내역을 모두 동기화해요.
     - **결제 완료 트리거**: WooCommerce에서 결제가 완료되면 하이퍼클래스 자동화에서 결제 완료 트리거를 쓸 수 있어요.
   - **상품 동기화**: 게시된 모든 상품과 카테고리를 속성까지 포함해 WooCommerce에서 바로 동기화해요. WooCommerce에서 바꾼 내용은 이쪽에도 반영되지만, 이쪽에서 바꾼 내용은 WooCommerce로 다시 동기화되지 않아요.
8. **저장**을 클릭하세요.

   ![저장 버튼](https://jumpshare.com/share/hH4eVfRWFyKyMF8axPW8+/Screen+Shot+2025-12-04+at+3.54.24+PM.png)

---

## WooCommerce 연락처 보강 필드

WooCommerce 연락처 보강은 이커머스 구매 이력을 하이퍼클래스 연락처 정보로 가져와요. 이 데이터로 하이퍼클래스를 떠나지 않고도 고객 가치와 구매 행동을 파악할 수 있어요.

WooCommerce 스토어를 연결하면 하이퍼클래스가 연락처 **커스텀 필드** 아래에 **WooCommerce** 폴더를 자동으로 만들어요. 이 폴더에는 아래 7개 필드가 들어 있어요.

- **WooCommerce - Customer ID**(고객 ID): 고객의 WooCommerce 고객 ID예요.
- **WooCommerce - Store Name**(스토어 이름): 고객과 연결된 WooCommerce 스토어예요.
- **WooCommerce - Total Orders**(총 주문 수): 고객과 연결된 대상 WooCommerce 주문의 수예요.
- **WooCommerce - Lifetime Value**(평생 가치): 환불을 반영한 뒤 고객의 대상 WooCommerce 구매 금액이에요.
- **WooCommerce - First Purchase Date**(첫 구매 날짜): 고객이 처음으로 구매한 대상 주문의 날짜예요.
- **WooCommerce - Last Purchase Date**(마지막 구매 날짜): 고객이 가장 최근에 구매한 대상 주문의 날짜예요.
- **WooCommerce - Last Order Value**(마지막 주문 금액): 환불을 반영한 뒤 고객의 가장 최근 대상 주문 금액이에요.

채워진 값은 고객의 **연락처 세부정보** 화면에 있는 WooCommerce 필드 그룹에서도 볼 수 있어요.

### WooCommerce 주문이 연락처 필드를 업데이트하는 방식

대상 WooCommerce 주문만 보강 필드에 반영돼요. WooCommerce가 주문 생성 또는 업데이트 이벤트를 보낼 때, 지원하는 주문 활동만 연락처 데이터에 반영하기 위해서예요.

아래 WooCommerce 주문 상태는 반영 대상이에요.

- 처리 중(Processing)
- 보류(On hold)
- 완료
- 환불됨

이 외의 상태인 주문은 WooCommerce 보강 계산에서 제외돼요.

---

## WooCommerce용 트리거와 자동화 설정하기

### 1. 주문 접수 트리거

1. 서브 계정에 로그인하세요.
2. **자동화 > 워크플로우**로 이동하세요.
3. 새 워크플로우를 만들거나 기존 워크플로우를 편집하세요.
4. **+ Add New Trigger**(새 트리거 추가)를 클릭하세요.
5. **Order Submitted**(주문 제출) 트리거를 검색해서 선택하세요.
6. **+ Add Filter**(필터 추가)를 클릭한 뒤 **Order Source**(주문 출처) > **is**(일치) > **External**(외부)을 선택하세요.
7. 두 번째 필터로 **Sub-Source**(하위 출처) > **is** > **WooCommerce**를 추가하세요.
8. **Save**(저장)를 클릭하세요.

   ![주문 제출 트리거 필터 설정](https://jumpshare.com/share/6J2KJQygxCJwo0doquQ0+/GIF+Recording+2025-12-04+at+4.46.41+PM.gif)
9. 워크플로우에 맞게 트리거 뒤에 SMS·이메일·인보이스 보내기 같은 **Action**(액션)을 추가하세요.

   ![트리거 뒤에 액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039790362/original/THMQ5QyLgNppx7hwllkozMytCCWcUrc7uA.png?1736850239)

### 2. 결제 완료 트리거

1. 서브 계정에 로그인하세요.
2. **자동화 > 워크플로우**로 이동하세요.
3. 새 워크플로우를 만들거나 기존 워크플로우를 편집하세요.
4. **+ Add New Trigger**를 클릭하세요.
5. **Payment Received**(결제 완료) 트리거를 검색해서 선택하세요.
6. **+ Add Filter**를 클릭한 뒤 **Source**(출처) > **is** > **External**을 선택하세요.
7. 두 번째 필터로 **Sub-Source** > **is** > **WooCommerce**를 추가하세요.
8. **Save**를 클릭하세요.
9. 워크플로우에 맞게 트리거 뒤에 SMS·이메일·인보이스 보내기 같은 **Action**을 추가하세요.

   ![결제 완료 트리거 설정](https://jumpshare.com/share/8i0O3lydsvuyUqexokIc+/GIF+Recording+2025-12-04+at+4.55.21+PM.gif)

---

## 자주 묻는 질문

### 서브 계정이나 에이전시끼리 같은 WooCommerce 연결을 공유할 수 있나요?
같은 에이전시에 속한 서브 계정끼리는 같은 도메인에 연결할 수 있어요. 에이전시는 WooCommerce 계정을 하나만 연결할 수 있어요. 그 WooCommerce 계정이 이미 다른 에이전시에 연결돼 있으면 현재 에이전시는 연결할 수 없어요.

### 어떤 WooCommerce 고객 유형이 연락처로 가져와지나요?
역할이 **고객**과 **구독자**인 고객을 가져와요.

### 연락처 동기화를 꺼도 연락처가 만들어지나요?
네. **주문 동기화**를 켜 두면 **연락처 동기화**가 꺼져 있어도 주문에서 연락처가 만들어져요.

### 게스트 결제 주문은 어떻게 처리되나요?
게스트 결제 구매자도 연락처로 만들어져요. 다만 이 게스트 계정은 이후 업데이트나 동기화가 이뤄지지 않아요.

### WooCommerce 주문 상태는 하이퍼클래스에서 어떻게 바뀌나요?
- WooCommerce의 **완료** 또는 **환불됨** → 하이퍼클래스의 **완료**
- WooCommerce의 **취소됨** 또는 **실패** → 하이퍼클래스의 **취소됨**
- WooCommerce의 그 외 모든 상태 → 하이퍼클래스의 **대기 중**

### 놓친 데이터가 있으면 어떻게 다시 가져오나요?
연동을 **연결 해제**했다가 다시 **연결**하세요. 그다음 다시 가져올 항목을 선택하면 돼요.

### 스토어 URL 끝에 슬래시를 붙여야 하나요?
아니요. 스토어 URL은 끝에 슬래시 없이 입력하세요.
