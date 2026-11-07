---
원문: /support/solutions/articles/155000007238-how-to-add-a-one%E2%80%91step-order-form-to-a-funnel
번역일: 2026-11-06
카테고리: 06-사이트
---

# 퍼널에 원스텝 주문 폼 추가하기

하이퍼클래스 퍼널에 **원스텝 주문 폼**을 추가하고 설정하는 방법을 안내해요. 상품과 가격을 연결하고, 연락처·배송·결제 필드를 설정한 뒤 장바구니 모드, 오더 범프, 쿠폰 코드 같은 옵션을 켤 수 있어요.

## 원스텝 주문 폼이란?

**원스텝 주문 폼**은 연락처, 배송(선택), 상품 선택, 결제처럼 결제에 필요한 필드를 한 화면에 모두 보여 줘요. 구매 부담이 적은 오퍼, 재구매 고객, 터치 횟수가 중요한 모바일 중심 흐름에 잘 맞아요. 2단계 주문 폼과 비교하면 화면 이동은 없지만 한 화면에 들어가는 요소가 많아져요. 꼭 필요한 필드만 두고 레이블을 명확하게 쓰세요. 원스텝 주문 폼은 일회성 가격과 구독 가격을 모두 지원해요.

## 원스텝 주문 폼의 장점

- 빠른 구매: 결제 과정을 한 페이지로 합쳐서 클릭 수를 줄여요.
- 모든 정보를 한눈에: 구매자가 상품, 합계, 결제 정보를 한 번에 확인할 수 있어요.
- 유연한 필드: 필드를 보이거나 숨기고, 필수 또는 선택으로 정해서 상황에 맞게 바꿀 수 있어요.
- 장바구니 모드: 장바구니 모드와 수량 제한을 쓰면 구매자가 필요한 만큼만 고르고, 합계도 명확하게 보여요.
- 매출 늘리기: 오더 범프를 지원해서 결제 단계에서 함께 살 만한 상품을 쉽게 제안할 수 있어요.

## 상품 준비하기 (사전 작업)

원스텝 주문 폼에서 상품을 보여 주고 결제를 받으려면, 먼저 상품을 퍼널 단계에 연결해야 해요. 아래 순서대로 따라 하면 주문 폼에서 상품과 가격을 쓸 수 있어요.

{% hint style="info" %}
이 작업을 시작하기 전에 상품을 먼저 만들어 두세요. 상품을 만드는 방법은 관련 도움말을 참고하세요.
{% endhint %}

1. 왼쪽 메뉴에서 **사이트**로 이동해 **퍼널**을 열고, 사용할 퍼널 단계를 선택하세요.

   ![퍼널 단계 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062168376/original/VPC01EApF6HRAM139B5--5HsueYzsji3lQ.png?1767823720)
2. 오른쪽의 **상품** 탭을 열고 **+ Add Product**(상품 추가)를 클릭하세요.

   ![상품 탭에서 상품 추가 버튼을 누르는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062168366/original/0AF7X5VVm51amU1D-B7Dfm_yXcABevoaNg.png?1767823687)
3. **상품** 드롭다운에서 판매할 상품을 선택하세요. 새 상품이 필요하면 옆에 있는 텍스트 링크를 클릭해 새로 만들 수 있어요.

   ![상품 드롭다운에서 상품을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062168403/original/hrG_WYHKPkY1yfPLJpFegY1JmjXr757UjA.png?1767823768)
4. **가격**에서 기존 가격을 선택하세요. 새 가격이 필요하면 옆에 있는 텍스트 링크를 클릭해 새로 만들 수 있어요.

   필요하면 **Product Name Override**(상품명 덮어쓰기)로 주문 폼에 보이는 상품 이름을 바꾸거나, **Price Display Override**(가격 표시 덮어쓰기)로 주문 폼에 가격이 보이는 방식을 바꿀 수 있어요.

   ![가격 선택과 덮어쓰기 옵션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062168416/original/WZhPEh-Bi2dqpUYa4_elngkwrO2Avz5Mlg.png?1767823801)
5. **추가 옵션**을 클릭해 상품을 구매하는 방식을 설정하세요.

   - **다중 허용**을 켜면 고객이 상품을 2개 이상 구매할 수 있어요.
   - **Max per order**(주문당 최대 수량)로 한 번의 주문에서 살 수 있는 최대 수량을 정해요. 1~999개까지 설정할 수 있어요.
   - 이 상품을 **Main product**(메인 상품)로 할지 **Bump product**(범프 상품)로 할지 선택하세요.

   ![추가 옵션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062168423/original/17wIIVb4Y7zbJylVNAuY5A-x83xSek3reg.png?1767823829)
6. 필요한 만큼 위 과정을 반복해서 상품을 하나 이상 추가하세요.

## 퍼널에 원스텝 주문 폼 추가하기

상품을 퍼널 단계에 연결했다면, 아래 순서대로 원스텝 주문 폼 요소를 추가하고 설정하세요.

### 1단계: 퍼널 단계 열기

**사이트 > 퍼널**로 이동해 퍼널을 열고, 결제 화면을 넣을 퍼널 단계를 선택하세요.

![퍼널 단계를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062168448/original/EOC-EIh5lt9bja2XRvkkUF471C7GESPhYw.jpeg?1767823932)

### 2단계: 원스텝 주문 폼 요소 추가하기

왼쪽 위의 **요소 추가**(+)를 클릭하세요. **Order elements**(주문 요소)에서 **원스텝 주문 폼** 요소를 선택한 뒤 디자인 화면으로 끌어다 놓으세요.

![요소 추가에서 원스텝 주문 폼을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062168480/original/35X6xZAEky5koXzMrvIA22dF0S8efUf56g.png?1767824046)

### 3단계: 필드 설정하기

요소 설정에서 **Form options**(폼 옵션)를 여세요. **회사명**, **Shipping**(배송), **가격** 등 폼에 들어가는 모든 필드를 여기서 설정할 수 있어요.

![폼 옵션에서 필드를 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062168540/original/P7HFgQHKGuym7rpkVBO6r_3y41hmxsfRAA.png?1767824216)

### 4단계: 기타 설정하기 (선택)

추가 설정으로 상품을 보여 주는 방식, 애드온 제공 여부, 할인 적용 여부를 정할 수 있어요.

- **Enable cart mode**(장바구니 모드 켜기)를 켜세요. 퍼널 버전에 따라 이 옵션이 없을 수도 있어요.

  장바구니 모드를 켜면 고객이 같은 주문 폼에서 여러 상품을 구매할 수 있어요. 고객은 원하는 상품을 고르고, **다중 허용**이 켜진 상품은 수량도 조절할 수 있어요.

  장바구니 모드를 쓰지 않으면 주문 폼에서는 상품을 하나만 선택할 수 있어요. 장바구니 모드는 지원되는 V2 퍼널 주문 폼에서 사용할 수 있어요.
- **상품 설명**과 가격 표시: 주문 폼에 상품 설명과 가격 정보를 보여 줄지 선택해요. 반복 결제 상품은 상품 설명에 초기 설정비, 체험 기간, 체험 일수, 반복 결제 정보 같은 가격 내역이 표시될 수 있어요. 이런 내용을 보여 주고 싶지 않다면 **상품 설명**을 끄세요.
- **Order Bump**(오더 범프)를 켜고 설정하세요. 폼에서 오더 범프를 쓰는 방법은 관련 도움말에서 확인하세요.
- **Coupon Codes**(쿠폰 코드)를 켜세요.

![기타 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062168556/original/3EstZ6u5rNrliMKWFn6WhuXw0zJdysqZXw.png?1767824262)

### 5단계: 폼 스타일 꾸미기

요소 설정의 **색상**에서 버튼, 텍스트, 배경 색을 브랜드에 맞게 조정하세요.

![색상 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062168575/original/gg2AShKDWdLBe_LRiGsMY-r1t6OLYwvSdQ.png?1767824298)

### 6단계: 미리보기와 게시

퍼널을 게시하기 전에 오른쪽 위의 **미리보기** 버튼을 눌러 주문 폼을 테스트하세요. 확인이 끝나면 파란색 **게시** 버튼을 클릭하세요.

![미리보기와 게시 버튼 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062168580/original/TkEk-CQwPG4xOV1Up24K1bBBJfalGj_6MA.png?1767824330)

## 자주 묻는 질문

### 원스텝 주문 폼에 상품이 보이지 않아요.
같은 퍼널 단계의 **상품** 탭에 상품이 추가되어 있고, 가격도 최소 하나 이상 추가되어 있는지 확인하세요.

### 고객이 여러 개를 구매하게 하려면 어떻게 하나요?
**상품 > 추가 옵션**에서 **다중 허용**을 켜고 **Max per order**(주문당 최대 수량)를 설정하세요.

### V1 퍼널에서도 원스텝 주문 폼을 쓸 수 있나요?
퍼널에 원스텝 주문 폼을 추가할 수 있어요. 다만 장바구니 모드 같은 최신 설정을 쓰려면 해당 단계를 V2로 옮기는 것을 고려해 보세요.

### 주문 폼에서 구독 상품과 일회성 상품을 모두 판매할 수 있나요?
네. 주문 폼에는 상품에 연결한 가격(일회성 또는 반복 결제)이 그대로 반영돼요.

### 모든 주문에 플랫폼 수수료나 처리 요금을 붙일 수 있나요?
네. 결제 설정에서 처리 요금이나 플랫폼 수수료를 추가할 수 있어요.
