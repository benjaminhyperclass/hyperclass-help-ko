---
원문: /support/solutions/articles/155000004496-how-to-fetch-product-details-purchased-by-customers-in-workflows
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우에서 고객이 구매한 상품 정보 가져오기 (Pluck and Join)

워크플로우에서 주문에 담긴 상품 제목 같은 정보를 꺼내 하나의 문자열로 정리하는 방법을 안내해요. 주문 관리를 자동화하거나, 외부 시스템에 상품 정보를 보내거나, Google Sheets 같은 기록 시트를 업데이트할 때 쓰세요.

## 개요

워크플로우의 Pluck and Join 기능을 쓰면 주문 제출 데이터에서 상품 제목 같은 정보를 꺼내 하나의 문자열로 정리할 수 있어요. 커스텀 필드를 쓰듯이 Pluck and Join으로 데이터를 원하는 형태로 만들 수 있어요.

이 문서에서는 제출된 주문에서 상품 항목 같은 정보를 가져와 Google Sheets나 다른 플랫폼으로 보내는 방법을 설명해요.

## 지원되는 워크플로우 텍스트 필드에서 목록 데이터 바로 서식 지정하기

주문 항목처럼 목록(배열) 형태의 값이나 **Inbound Webhook**(수신 웹훅)으로 받은 데이터는 지원되는 워크플로우 텍스트 필드의 **Custom Value**(커스텀 값) 선택기에서 바로 서식을 지정할 수 있어요. 자주 쓰는 형태라면 `pluck`과 `join` 표현식을 직접 만들지 않아도 목록 데이터를 간단하게 보여 줄 수 있어요.

목록 값의 서식을 지정하려면 다음 순서로 진행하세요.

1. 워크플로우 텍스트 필드에서 **Custom Value** 선택기를 열어요.
2. 사용할 목록 또는 배열 값을 선택해요.
3. 목록의 각 항목에서 꺼낼 필드를 선택해요.
4. 값을 어떤 형태로 보여 줄지 선택해요.

   - **Comma-separated**(쉼표로 구분)
   - **Bulleted list**(글머리 기호 목록)
   - **Numbered list**(번호 목록)
   - **Custom separator**(사용자 지정 구분 기호)
5. 필요하면 목록이 비어 있을 때 대신 표시할 값(empty-list fallback)을 설정해요.
6. 미리보기에서 서식이 적용된 결과를 확인해요.
7. **Insert**(삽입)를 클릭하면 커서 위치에 서식이 적용된 목록이 추가돼요.

{% hint style="info" %}
기존의 `pluck`, `join` 방식도 배열 값을 직접 꺼내고 서식을 지정할 때 그대로 쓸 수 있어요. 목록 값을 서식이 적용된 텍스트로 보여 주기만 하면 된다면 기본 제공 목록 서식 기능이 더 간단해요.
{% endhint %}

---

## 설명

워크플로우에서 `pluck`, `join` 같은 헬퍼를 쓸 수 있어요. `pluck` 헬퍼는 객체 배열에서 상품 제목 같은 특정 필드를 꺼내요. `join` 헬퍼는 꺼낸 값을 원하는 구분 기호로 이어 하나의 문자열로 만들어요. 데이터를 꺼내고 정리하는 작업을 자동화할 때 유용해요.

---

## 단계별 안내

1. 트리거 선택하기

   - 주문이 들어올 때 워크플로우가 시작되도록 트리거를 설정하세요. **Order Submitted**(주문 제출됨)나 **Inbound Webhook**(수신 웹훅)처럼 목록 형태의 데이터를 가진 트리거라면 무엇이든 쓸 수 있어요.
2. 액션 설정하기

   - 예를 들어 **Create Row in Google Sheets**(Google Sheets에 행 만들기) 액션을 사용해 고객과 상품 정보를 기록할 수 있어요.
     - **Customer Name**(고객 이름): `{{ contact.first_name }}`을 사용해요.
     - **Email**(이메일): `{{ contact.email }}`을 사용해요.
     - **Products**(상품): 다음 단계에서 만든 문자열을 사용해요.
3. 데이터 처리 로직 추가하기
`pluck` 헬퍼로 주문의 `line_items` 배열에서 상품 제목을 꺼내요.

     `{{ pluck order.line_items "title" }}``join` 헬퍼로 꺼낸 제목들을 하나의 문자열로 이어요.

     ```
     {{ join (pluck order.line_items "title") ", " }}
     ```
4. 테스트하고 확인하기

   - 마무리하기 전에 테스트를 실행해 워크플로우가 데이터를 의도한 대로 처리하는지 확인하세요. Postman 같은 도구나 실제 주문 제출로 결과가 올바른지 확인할 수 있어요.
5. 사용할 수 있는 필드
`title``image``price``quantity``line_subtotal``line_discount``line_price``meta``product_id``price_id``order_id` / `invoice_id`

pluck 예시:

```
{{ pluck payment.line_items "title" }}
{{ pluck payment.line_items "line_subtotal" }}
{{ pluck payment.line_items "meta.product_id" }}
```

다른 값을 꺼내려면 위 예시에서 필드 이름만 바꾸세요.

---

## 예시

![워크플로우 구성 예시 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040013638/original/ArPTxHZKN6pAr_EZVTjXMnyzNroCaA8w4A.png?1737111986)

### 시나리오

고객이 주문 폼을 제출할 때마다 주문 정보를 Google Sheets에 기록하려고 해요. 기록에는 고객 이름, 이메일, 구매한 상품 목록이 서식에 맞게 들어가야 해요.

### 단계

1. 워크플로우 트리거 만들기

   - **Order Submitted** 트리거로 워크플로우를 시작해요.
2. Pluck and Join 헬퍼 사용하기
`pluck` 헬퍼로 상품 제목을 꺼내요.

     ```
     {{ pluck order.line_items "title" }}
     ````join` 헬퍼로 제목의 서식을 지정해요.

     ```
     {{ join (pluck order.line_items "title") ", " }}
     ```
3. Google Sheets 액션 추가하기

   - **Create Row in Google Sheets** 액션을 선택해요.
   - 필드를 다음과 같이 연결해요.
     - **Name**(이름): `{{ contact.first_name }}`
     - **Email**(이메일): `{{ contact.email }}`
     - **Products**(상품): `{{ join (pluck order.line_items "title") ", " }}`
4. 워크플로우 테스트하고 활성화하기

   - 테스트 주문 폼을 제출하고, 주문 정보가 Google Sheets에 올바르게 들어갔는지 확인해요.

### 결과 예시

Google Sheets 예시:

| Name | Email | Products |
| --- | --- | --- |
| Alice | alice@test.com | TEST OFFER, ANOTHER PRODUCT |
| Bob | bob@test.com | SINGLE ITEM |

---

`pluck`과 `join` 헬퍼를 쓰면 상품 데이터를 꺼내 원하는 형태로 정리해 워크플로우 자동화와 연동에 활용할 수 있어요. 시간을 아끼고 수작업을 줄이는 데 도움이 돼요.
