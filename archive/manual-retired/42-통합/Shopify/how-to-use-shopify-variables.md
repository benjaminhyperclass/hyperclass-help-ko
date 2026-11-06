---

번역일: 2026-04-09
카테고리: 42-통합 > Shopify
---

# Shopify 변수 사용 방법

## **아래 표 사용법**

이 표는 Shopify 트리거가 실행될 때 이메일, SMS, 기타 워크플로우 액션에 삽입할 수 있는 변수들을 보여줍니다. 변수를 사용하려면 'Shopify 변수 형식' 열에 표시된 대로 정확히 복사하세요(중괄호 두 개 포함). 예: {{order.id}}

변수는 YES/– 열에 표시된 이벤트 유형으로 워크플로우가 트리거될 때만 값이 채워집니다. 열에 '–'가 표시되면 해당 트리거에서는 해당 변수가 비어있습니다.

YES = 해당 변수가 트리거의 페이로드에 포함되어 값이 채워집니다.
– = 해당 변수가 해당 트리거에 포함되지 않아 값이 채워지지 않습니다.

'데이터 샘플' 열을 참고하여 어떤 종류의 값을 받게 될지 확인하세요.

## **Shopify 변수 삽입 위치**

변수를 지원하는 메시지 편집기나 텍스트 필드 어디든 Shopify 변수를 사용할 수 있습니다:

- 워크플로우 이메일 본문
- 워크플로우 SMS 본문  
- 워크플로우 내부 알림 텍스트
- 커스텀 값은 필요 없습니다. Shopify 변수는 트리거 페이로드에서 가져옵니다.

## Shopify 변수 상세 정보

| Shopify 변수 상세 | Shopify 변수 형식 | 데이터 샘플 | 장바구니 이탈 트리거 | 주문 완료 트리거 |
|---|---|---|---|---|

### **주문 정보**

| 주문 ID | {{[order.id](http://order.id/)}} | 1900968798308 | YES | YES |
| 주문 번호 | {{order.number}} | 1044 | - | YES |
| 주문 상태 URL | {{order.order_status_url}} | 주문 링크 | - | YES |
| 장바구니 이탈 URL | {{order.abandoned_checkout_url}} | 이탈 장바구니 링크 | YES | - |
| 생성 시간 | {{order.created_at}} | 2021-10-21T11:47:12+05:30 | YES | YES |
| 생성일 | {{order.created_on}} | 기본 형식 10-20-2021 | YES | YES |
| 통화 기호 | {{order.currency}} | $ | YES | YES |
| 통화 코드 | {{order.currency_code}} | USD | YES | YES |

### **고객 정보**

| 이름 | {{order.customer.first_name}} | John | YES | YES |
| 성 | {{order.customer.last_name}} | Carter | YES | YES |
| 이메일 | {{order.customer.email}} | [johncarter@gmail.com](mailto:johncarter@gmail.com) | YES | YES |
| 전화번호 | {{order.customer.phone}} | 18989898989 | YES | YES |

### **주문 금액**

| 총 장바구니 가격 | {{order.total_cart_price}} | 99.00 | - | YES |
| 할인 코드 | {{order.discount_code}} | TESTDISC20 | - | YES |
| 총 할인 금액 | {{order.total_discounts}} | 11.99 | - | YES |
| 할인 적용 여부 | {{order.has_discount}} | true/false | - | YES |
| 소계 | {{order.subtotal_price}} | 88.99 | - | YES |
| 총 배송비 | {{order.total_shipping_price}} | 14.49 | - | YES |
| 총 가격 | {{order.total_price}} | 102.99 | - | YES |

### **고객 청구 주소**

| 연락처 이름 | {{order.billing_address.name}} | John Carter | - | YES |
| 회사명 | {{order.billing_address.company}} | Marvel Inc. | - | YES |
| 주소 1 | {{order.billing_address.address1}} | 890 | - | YES |
| 주소 2 | {{order.billing_address.address2}} | Fifth Avenue, Manhattan | - | YES |
| 시/도 | {{order.billing_address.province}} | New York City | - | YES |
| 우편번호 | {{order.billing_address.zip}} | 10128 | - | YES |
| 국가 | {{order.billing_address.country}} | United States | - | YES |

### **고객 배송 주소**

| 연락처 이름 | {{order.shipping_address.name}} | John Carter | - | YES |
| 회사명 | {{order.shipping_address.company}} | Marvel Inc. | - | YES |
| 주소 1 | {{order.shipping_address.address1}} | 890 | - | YES |
| 주소 2 | {{order.shipping_address.address2}} | Fifth Avenue, Manhattan | - | YES |
| 시/도 | {{order.shipping_address.province}} | New York City | - | YES |
| 우편번호 | {{order.shipping_address.zip}} | 10128 | - | YES |
| 국가 | {{order.shipping_address.country}} | United States | - | YES |
| 배송 필요 여부 | {{order.requires_shipping}} | true/false | - | YES |

### **고급 변수**

| 주문/장바구니 이탈 상품 (*출시 예정) | {{#each Order line_items as \| item \|}} | | YES | YES |
|---|---|---|---|---|
| | item.id | | | |
| | item.image | | | |
| | item.title | | | |
| | item.quantity | | | |
| | item.price | | | |
| | item.line_price | | | |
| | {{/each}} | | | |

| 주문 세금 상세 (*출시 예정) | {{#each Order tax_lines as \| tax \|}} | | - | YES |
|---|---|---|---|---|
| | tax.title | | | |
| | tax.rate | | | |
| | tax.price | | | |
| | {{/each}} | | | |

## 예시

### 예시 1: 장바구니 이탈 리마인더

다음 텍스트를 정확히 추가하세요:

- **트리거:** 장바구니 이탈
- **SMS 예시:** 안녕하세요 {{order.customer.first_name}}님, 장바구니에 상품이 남아있어요. 여기서 결제를 완료하세요: {{order.abandoned_checkout_url}}
- **참고:** 장바구니 이탈 URL은 장바구니 이탈 트리거에서만 값이 채워집니다(해당 트리거에서 YES).

이 예시는 표에 표시된 변수 order.customer.first_name과 order.abandoned_checkout_url을 사용하며, 트리거에 따라 달라진다는 점을 강조합니다.

### 예시 2: 주문 확인

다음 텍스트를 정확히 추가하세요:

- **트리거:** 주문 완료
- **이메일 예시:** '주문 #{{order.number}}을 {{order.created_on}}에 해주셔서 감사합니다. 총액: {{order.total_price}} {{order.currency_code}}. 추적: {{order.order_status_url}}'
- **참고:** 주문 상태 URL은 주문 완료 트리거에서 값이 채워집니다(해당 트리거에서 YES).

이 모든 변수들은 표에 나와 있습니다.

---

## 문제 해결

- 변수가 비어서 나타나면, 해당 변수가 표에서 YES로 표시된 트리거를 사용하고 있는지 확인하세요.
- 연락처가 실제로 Shopify에서 해당 데이터를 가지고 있는지 확인하세요(예: 고객이 전화번호를 제공하지 않았다면 전화번호가 비어있을 수 있습니다).
- 변수를 표시된 대로 정확히 복사/붙여넣기하세요. 중괄호가 누락되거나 공백이 추가되면 치환이 되지 않을 수 있습니다.

---
*원문 최종 수정: Thu, 5 Mar, 2026 at 6:27 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*