---
원문: /support/solutions/articles/155000004049-upsell-products-in-online-store-checkouts
번역일: 2026-11-07
카테고리: 37-이커머스-스토어
---

# 온라인 스토어 결제 후 업셀 상품 판매하기

고객이 결제를 마친 뒤 추가 상품을 제안해 평균 주문 금액을 높일 수 있어요. 몇 번의 클릭만으로 **결제 페이지**에서 **감사 페이지**까지 이어지는 업셀 퍼널을 만들 수 있어요.

---

## 사용 방법

1. 업셀 페이지 만들기

    기존 스토어 페이지와 별도로 업셀용 새 페이지를 만드세요. 전체 너비 섹션을 추가하고, 그 안에 행을 추가하세요.
2. 업셀 요소 추가하기

    **Add Element**(요소 추가) 버튼을 클릭한 뒤 **Upsell**(업셀) 요소를 행으로 끌어다 놓으세요. 한 행의 여러 열에 업셀 요소를 각각 추가할 수 있어요.
3. 업셀 요소 설정하기

    업셀 요소를 선택해 설정을 열어요.
   1. 빌더 미리보기의 배송비 토글을 켜거나 꺼서, 업셀 요소마다 배송비 적용 여부를 정할 수 있어요.
   2. **Upsell** 설정에서 상품을 검색해 선택하세요. 그다음 **Sale Action**(판매 액션)을 설정하세요. **Sale Action**은 **Buy now**(지금 구매) 버튼을 누른 뒤 이동할 곳을 정해요. 다른 업셀 페이지나 **감사 페이지**로 이동하도록 설정할 수 있어요.

4. 업셀 페이지 건너뛰기 설정하기

   **Button**(버튼) 요소를 추가하고 **Button action**(버튼 액션)을 **감사 페이지**로 연결하면 고객이 업셀을 건너뛸 수 있어요.
5. 결제 페이지 설정하기

   **Sale Action**을 **Go to page**(페이지로 이동)로 선택하고, **웹사이트 페이지**에서 새로 만든 업셀 페이지를 선택하세요.

{% hint style="info" %}
- **Upsell** 요소는 결제 후 새 페이지에 추가해야 해요. 결제 전에 추가하면 오류가 나요. 원활하게 쓰려면 상품별 업셀용 새 페이지를 만드는 것을 권장해요.
- 업셀 상품이 구매되면 별도의 주문이 만들어져요.
- 업셀 상품에는 배송 옵션을 켜거나 끌 수 있어요. 켜면 고객이 **Upsell** 요소의 드롭다운에서 배송 요금을 선택할 수 있어요.
- 업셀 페이지를 건너뛰려면 구매 없이 **감사 페이지**로 이동시키는 버튼을 꼭 추가해야 해요. 버튼이 없으면 고객은 구매를 완료해야 **감사 페이지**로 갈 수 있어요.
- 업셀 효과를 높이려면 **Upsell** 요소만 넣은 전용 페이지를 만드는 것을 권장해요.
{% endhint %}

## 단계별 안내

### 1. 업셀 요소를 넣을 새 페이지 추가하기

![새 페이지 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036614518/original/AS3bR46ACm9WEo0g3PaqOpPfRph0nM3VKw.png?1731661554)

**Edit Page**(페이지 편집)를 클릭하세요.

![페이지 편집 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036614493/original/Pe7UHE-lTPoH8Hqy0XHbwf34yrMwYLJ8FA.png?1731661537)

### 2. 업셀 요소 추가하기

![요소 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036615683/original/ZfwPLWDYnUgkFY55vbyTOFKp4uXX6tAoFw.png?1731662434)

![행에 업셀 요소를 끌어다 놓은 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036615691/original/alsADTg_RO1bdaGFH6CxIR2q1WoE0u2Tgw.png?1731662445)

### 3. 업셀 요소의 Sale Action과 웹사이트 페이지 설정하기

**Sale Action**과 **웹사이트 페이지**를 아래 이미지처럼 설정하세요. 고객이 아무것도 사지 않으려 할 때를 대비해 업셀을 건너뛰는 **Button**을 추가할 수 있어요.

![Sale Action과 웹사이트 페이지 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036615883/original/lv6euuOTaE5eadfGEcJ3EquWDVE6rAKhEQ.png?1731662579)

빌더에서 업셀 요소별로 배송비를 켜거나 끌 수 있어요.

![빌더에서 배송비 토글을 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036616637/original/OMUGy1FufIKYZ2WVnbETjO05-uLquAdRLA.png?1731663101)

![업셀 요소의 배송 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036616091/original/F57P3eKo9UQiRY6aLgdOSgiEvDmcqpCtfA.png?1731662700)

{% hint style="info" %}
업셀을 건너뛰는 버튼 단계를 꼭 추가하세요. 추가하지 않으면 고객이 업셀 페이지에 머물게 되고, 다음 단계로 가려면 업셀 상품을 구매해야 해요.
{% endhint %}

### 4. 결제 페이지의 이동 설정을 업셀 페이지로 바꾸기

결제 후 고객이 앞서 만든 업셀 페이지로 이동하도록 **결제 페이지**의 이동 설정을 바꾸세요.

![결제 페이지의 이동 설정을 업셀 페이지로 변경하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035197453/original/J7T8xBtRyl1XjkCUksICl7Y_r6a79Td6sQ.jpeg?1729608607)

### 최종 미리보기

![업셀 페이지 최종 미리보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036616879/original/dfLEjfleR6Bp3EJutdoA7TLRBun3KA3vMg.jpeg?1731663261)
