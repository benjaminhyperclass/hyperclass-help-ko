---
원문: https://help.gohighlevel.com/support/solutions/articles/48001228664-workflow-trigger-order-submitted
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Order Submitted(주문 제출)

**Order Submitted**(주문 제출) 트리거는 고객이 주문을 제출한 뒤 업셀을 제안할 때 쓰는 워크플로우 트리거예요. 1단계·2단계 주문 폼에서 모두 작동하므로, 주문 폼 종류나 구매한 상품 종류에 따라 업셀을 다르게 설정할 수 있어요.

## Order Submitted 트리거는 언제 실행되나요?

{% hint style="info" %}
**참고**

같은 연락처가 기본 상품을 구매한 직후 업셀도 구매할 때 트리거가 다시 실행되게 하려면, **Workflow Settings**(워크플로우 설정)에서 **Allow Multiple**(같은 연락처의 재진입 허용) 설정을 켜 두세요.

워크플로우에 대기 단계(**Wait**)를 넣으면, 기본 상품을 구매해서 처음 들어온 고객이 워크플로우 안에 계속 머물러 있어요. 이 상태에서 고객이 업셀을 구매하면 이미 워크플로우 안에 있으므로 두 번째로 진입하지 못해요. 그래서 이 워크플로우에서는 대기 단계를 되도록 쓰지 마세요. 같은 상품에 업셀이나 범프를 판매할 계획이 없다면 써도 괜찮아요.
{% endhint %}

[동영상](https://www.loom.com/embed/03105bba5cc64a4b8aec9e9e4ac9a88a)

이 트리거는 1단계·2단계 주문 폼을 제출할 때와 업셀을 구매할 때 실행돼요. 두 경우 모두 구매한 상품 정보를 함께 전달해요.

예를 들어 고객이 주문 폼에서 상품 A와 B를 구매하고 업셀로 상품 C를 구매하면, 트리거는 두 번 실행돼요. 처음에는 A와 B 구매로, 다음에는 업셀 구매로 실행돼요.

{% hint style="info" %}
**참고**

이 트리거는 V2 퍼널에서만 작동해요. V2 퍼널에 대한 자세한 내용은 별도 문서를 참고하세요. V1 퍼널을 쓰고 있다면 아래 버튼으로 V2로 업그레이드하세요.

![V2로 업그레이드하는 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48271898507/original/Jt_bZs48_YpDTe855zfIKEv09u7ptooXnA.png?1672223754)
{% endhint %}

## Order Form Submitted 트리거와 어떻게 다른가요?

[동영상](https://www.loom.com/embed/ce4e9483f7c7496cb8765613254bd689)

**Order Submitted** 트리거와 **Order Form Submitted**(주문 폼 제출) 트리거의 큰 차이는 다음과 같아요.

- 여러 상품을 구매해도 트리거가 여러 번 실행되지 않아요. 주문 폼을 한 번 제출하면 체크아웃 정보가 한 번만 전달돼요. 한 번의 주문에서 상품을 여러 개 구매해도 마찬가지예요.
- 글로벌 상품/가격을 기준으로 트리거에 바로 필터를 걸 수 있어요. 기존 트리거에서는 이 기능을 쓸 수 없어요.

  ![글로벌 상품/가격 필터 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48271902305/original/HkW1R_dgtia5VEH8lw5XtAJoMKdamm2xog.png?1672224456)

- 워크플로우 안에서 주문과 관련된 커스텀 값을 쓸 수 있어요. 고객, 주문 상세, 쿠폰 정보, 결제 게이트웨이와 관련된 커스텀 값이 있어요.

  {% hint style="info" %}
  **참고**

  워크플로우의 트리거 중에 **Order Submitted**가 하나 들어 있어야만 이 커스텀 값이 커스텀 값 드롭다운에 나타나요.
  {% endhint %}

  ![주문 관련 커스텀 값 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48271903161/original/GfNiNTpIzmqHoleW7RVRvGJKHUBrcM8vow.png?1672224689)

- **If/Else**(조건 분기)에서 주문 상세나 상품 상세와 관련된 조건을 쓸 수 있어요. 장바구니 금액, 구매한 상품, 퍼널에 따라 워크플로우를 나눌 수 있어요.

  ![If/Else 조건 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48271903365/original/Fy-l-g5na5xvLpx26kk97KGSVej6hjghwA.png?1672224749)

## 이메일 템플릿으로 주문 확인 이메일 보내기

[동영상](https://www.loom.com/embed/d63c77963e294cffbaa4258c3501924e)

이메일 빌더 템플릿에 **장바구니** 요소를 넣으면 고객이 구매한 상품을 이메일에 표시할 수 있어요. 이 템플릿으로 고객에게 주문 확인 이메일을 보내세요. **장바구니** 요소는 상품 항목, 구매 수량, 상품 이미지, 항목별 가격을 자동으로 채워 줘요.

{% hint style="info" %}
**참고**

**장바구니** 요소는 **결제 > 상품** 페이지에서 등록한 상품 이미지도 함께 채워 줘요. 상품에 이미지를 등록하지 않았다면 기본 이미지가 자동으로 들어가요. 시스템이 만든 기본 이미지가 나오지 않도록, **장바구니** 요소를 쓸 때는 직접 등록한 상품 이미지를 쓰는 것을 권장해요.
{% endhint %}

![장바구니 요소가 들어간 이메일 템플릿](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48271904923/original/uMFRmaT5jF11XlibbTZhrwlAA9Slk44k0w.png?1672225164)

값이 제대로 채워지려면 두 가지만 확인하면 돼요.

1. 이메일 템플릿에 **장바구니** 요소를 추가했는지 확인하세요.
2. 워크플로우의 **Send Email**(이메일 보내기) 액션에 같은 템플릿을 지정했는지 확인하세요.

## 제출 유형 필터는 어떻게 작동하나요?

- **Primary**(기본): 주문 폼 체크아웃에서 기본 상품을 하나라도 구매했을 때 필터를 통과해요.
- **Bump**(범프): 주문 폼에서 범프 상품을 구매했을 때만 필터를 통과해요. 범프 상품을 구매하지 않았다면 트리거가 작동하지 않아요.
- **Upsell**(업셀): 업셀을 구매했을 때만 필터를 통과해요. 필터를 **Upsell**로 설정하면 주문 폼 제출(기본 상품이나 범프 상품 구매) 때는 트리거가 실행되지 않아요.

![제출 유형 필터 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48271933980/original/qbQT79u8jkDAXIjo053ldP95IVhs9kG4kw.png?1672231859)

## 이 트리거가 기존 주문 폼 제출 트리거에 영향을 주나요?

아니요. 기존 주문 폼 제출 트리거는 이 트리거 때문에 바뀌지 않아요. 다만 주문 관련 커스텀 값, 쿠폰 정보, 상품 항목을 쓰려면 **Order Submitted** 트리거를 쓰는 것을 권장해요.

## 쓸 수 있는 필터, If/Else 조건, 커스텀 값

### 트리거 필터

**Order Submitted** 트리거에서 쓸 수 있는 필터예요.

| 트리거 | 번호 | 필터 | 연산자 | 선택 가능 항목 |
| --- | --- | --- | --- | --- |
| Order submission(주문 제출) | 1 | **Product**(상품) | is, is not | 글로벌 상품 이름 |
| | 1a | **Price**(가격) | is, is not | 가격 이름 |
| | 2 | **Order Source**(주문 출처) | is, is not | Order form(주문 폼) |
| | 2a | **Submission Type**(제출 유형) | is, is not | Primary, Bump, Upsell |
| | 3 | **Funnel**(퍼널) | is, is not | 퍼널 이름 |
| | 3a | **Page**(페이지) | is, is not | 퍼널 안의 페이지 |
| | 3b | **Product** | is, is not | 퍼널 단위 상품 |

### If/Else 조건

| 구분 | 필터 | 연산자 | 선택 가능 항목 |
| --- | --- | --- | --- |
| A | **Order Source** | is, is not | Order form |
| B | **Product** | is, is not | 글로벌 상품 |
| C | **Payment Gateway**(결제 게이트웨이) | is, is not | Stripe, PayPal |
| D | **Order Total**(주문 합계) | 숫자 연산자 | 숫자 연산자 |
| E | **Submission Type** | is, is not | Primary, Bump, Upsell |
| F | **Funnel** | is, is not | 퍼널 이름 |

### 커스텀 값

**Order** 카테고리

| 커스텀 값 카테고리 | 커스텀 값 | 뜻 |
| --- | --- | --- |
| Order | **Currency symbol ($)** | 통화 기호 |
| | **Currency code (USD)** | 통화 코드 |
| | **Cart Total** | 장바구니 합계 |
| | **Order total** | 주문 합계 |
| | **Coupon code** | 쿠폰 코드 |
| | **Total discount** | 총 할인 금액 |
| | **Created on** | 생성일 |
| | **Created at** | 생성 시각 |
| | **Order ID** | 주문 ID |
| | **Payment Gateway** | 결제 게이트웨이 |

**Order > Customer** 카테고리

| 커스텀 값 카테고리 | 커스텀 값 | 뜻 |
| --- | --- | --- |
| Order > Customer | **ID** | 고객 ID |
| | **First Name** | 이름 |
| | **Last Name** | 성 |
| | **Name** | 전체 이름 |
| | **Email** | 이메일 |
| | **Phone** | 전화번호 |
| | **Full Address** | 전체 주소 |
| | **City** | 시/도시 |
| | **State** | 주/도 |
| | **Country** | 국가 |
| | **Postal Code** | 우편번호 |
