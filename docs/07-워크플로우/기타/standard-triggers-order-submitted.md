---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# 워크플로우 트리거 - 주문 제출

주문 제출(Order Submitted) 트리거는 고객이 주문을 제출한 후 업셀을 할 수 있게 해주는 강력한 새 워크플로우 트리거입니다. 이 트리거는 1단계와 2단계 주문 폼 모두에서 작동하므로, 비즈니스에서 사용하는 주문 폼 유형이나 구매 상품 종류에 따라 업셀을 자유롭게 맞춤화할 수 있습니다.

#### 이 글에서 다룰 내용:

#### [주문 제출 트리거는 언제 실행되나요?](#주문-제출-트리거는-언제-실행되나요)

#### [주문 폼 제출 워크플로우 트리거와 어떻게 다른가요?](#주문-폼-제출-워크플로우-트리거와-어떻게-다른가요)

#### [이 워크플로우로 주문 확인을 위한 이메일 템플릿 사용하기](#이-워크플로우로-주문-확인을-위한-이메일-템플릿-사용하기)

#### [제출 유형 필터는 어떻게 작동하나요?](#제출-유형-필터는-어떻게-작동하나요)

#### [이 트리거가 기존 주문 폼 제출 트리거에 영향을 주나요?](#이-트리거가-기존-주문-폼-제출-트리거에-영향을-주나요)

#### [사용할 수 있는 필터 유형, if/else 조건, 커스텀 값은 무엇인가요?](#사용할-수-있는-필터-유형-ifelse-조건-커스텀-값은-무엇인가요)

---

## 주문 제출 트리거는 언제 실행되나요?

**참고사항**

업셀을 위해 주 상품 구매 직후 같은 연락처에 대해 트리거가 실행되기를 원한다면, 워크플로우 설정에서 중복 허용(Allow Multiple) 설정을 켜두세요.

워크플로우에 **대기 단계**를 두어 첫 번째 인스턴스(주 상품 구매로 인해 발생한)를 대기시키고, 고객이 업셀을 구매한다면, 고객이 워크플로우 안에 아직 있기 때문에 업셀 구매로 인해 워크플로우에 두 번째로 진입할 수 없습니다. 이 워크플로우에서는 대기 단계 사용을 피하시고, **같은 상품에 대해 업셀이나 범프를 판매할 계획이 없다면** 자유롭게 사용하세요.

---

이 트리거는 1단계 또는 2단계 주문 폼 제출 시와 업셀 시에 실행됩니다. 이 트리거는 주문 폼이 제출될 때와 업셀 구매가 발생할 때 모두 실행되며, 두 경우 모두 상품 정보를 보유합니다. 즉, 최종 고객이 주문 폼에서 상품 A와 B를 구매하고 업셀에서 상품 C를 구매하면, 2번 실행됩니다(첫 번째는 A와 B 구매, 두 번째는 업셀 구매).

참고: 

이는 **버전 2** 퍼널에서만 작동합니다. (V2 퍼널에 대한 자세한 내용은 [이 글](how-to-upgrade-a-version-1-funnel-to-version-2-.md)을 참조하세요) 버전 1 퍼널을 사용 중이라면, 아래 버튼을 사용해 버전 2로 업그레이드하세요:

![업그레이드 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48271898507/original/Jt_bZs48_YpDTe855zfIKEv09u7ptooXnA.png?1672223754)

---

## **주문 폼 제출 워크플로우 트리거와 어떻게 다른가요?**

---

주문 제출과 주문 폼 제출 워크플로우 트리거 간의 가장 중요한 차이점들은 다음과 같습니다:

- 여러 상품 구매 시 트리거가 여러 번 실행되지 않습니다. 트리거는 하나의 체크아웃 객체를 포함하여 주문 폼 제출 시 한 번만 정보를 전송합니다. 한 번의 주문 세션에서 여러 상품을 구매하더라도 마찬가지입니다.
- 글로벌 상품/가격 기준으로 트리거를 직접 필터링할 수 있습니다. 기존 트리거는 이 기능을 제공하지 않습니다.

![트리거 필터 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48271902305/original/HkW1R_dgtia5VEH8lw5XtAJoMKdamm2xog.png?1672224456)

- 워크플로우 내에서 주문 관련 커스텀 값을 사용할 수 있습니다. 여기에는 고객, 주문 세부사항, 쿠폰 정보, 결제 게이트웨이와 관련된 커스텀 값이 포함됩니다.

참고:

주문 제출 트리거가 워크플로우 트리거 단계 중 하나가 아니면 이러한 커스텀 값은 커스텀 값 드롭다운에 표시되지 않습니다.

![커스텀 값 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48271903161/original/GfNiNTpIzmqHoleW7RVRvGJKHUBrcM8vow.png?1672224689)

- If 분기에서 주문 세부사항이나 상품 세부사항과 관련된 조건을 사용하여 장바구니 가치/구매 상품/퍼널을 기준으로 워크플로우를 안내할 수 있습니다.

![조건 분기 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48271903365/original/Fy-l-g5na5xvLpx26kk97KGSVej6hjghwA.png?1672224749)

---

## 이 워크플로우로 주문 확인을 위한 이메일 템플릿 사용하기

---

고객이 구매한 상품은 이메일 빌더 템플릿의 장바구니 요소를 사용하여 표시할 수 있으며, 해당 템플릿을 사용해 최종 고객에게 확인 이메일을 발송할 수 있습니다. 장바구니 요소는 구매 수량, 상품 이미지, 상품별 가격과 함께 상품 항목을 자동으로 표시합니다.

참고: 

장바구니 요소는 Payments(결제) → Products(상품) 페이지에 추가된 상품 이미지도 표시합니다. 상품에 이미지가 추가되지 않은 경우, 요소가 자체적으로 기본 이미지를 표시합니다. 기본 시스템 생성 이미지를 피하려면 장바구니 요소를 사용할 때 커스텀 상품 이미지를 사용하는 것을 강력히 권장합니다.

![장바구니 요소](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48271904923/original/uMFRmaT5jF11XlibbTZhrwlAA9Slk44k0w.png?1672225164)

값이 제대로 표시되도록 하려면 **장바구니** 요소가 템플릿에 추가되어 있고, 같은 템플릿이 워크플로우의 이메일 발송 액션에 추가되어 있는지만 확인하면 됩니다.

---

## **제출 유형 필터는 어떻게 작동하나요?**

**Primary(주 상품)** - 주문 폼 체크아웃에서 주 상품이 구매된 경우를 필터링합니다.

**Bump(범프)** - 주문 폼에서 범프 상품이 구매된 경우만 필터링합니다. 범프 상품이 구매되지 않으면 트리거가 작동하지 않습니다.

**Upsell(업셀)** - 업셀 구매의 경우만 필터링합니다. 필터가 업셀로 설정되면, 주문 폼 제출(주 상품/범프 상품 구매) 시에는 트리거가 실행되지 않습니다.

![제출 유형 필터](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48271933980/original/qbQT79u8jkDAXIjo053ldP95IVhs9kG4kw.png?1672231859)

---

## 이 트리거가 기존 주문 폼 제출 트리거에 영향을 주나요?

아니요, 기존 주문 폼 제출 트리거에 변경을 주지 않습니다. 하지만 주문 관련 커스텀 값과 쿠폰 정보, 상품 항목을 활용하려면 주문 제출 트리거를 사용하는 것을 권장합니다.

---

## 사용할 수 있는 필터 유형, if/else 조건, 커스텀 값은 무엇인가요?

**트리거**

| **필터** | **연산자** | **선택 가능한 항목** |
|----------|------------|-------------------|
| 1 Product | is, is not | 글로벌 상품명 |
| 1a Price | is, is not | 가격명 |
| 2 Order Source | is, is not | 주문 폼 |
| 2a Submission Type | is, is not | Primary, Bump, Upsell |
| 3 Funnel | is, is not | 퍼널명 |
| 3a Page | is, is not | 퍼널 내 페이지 |
| 3b Product | is, is not | 퍼널 레벨 상품 |

**If/Else**

| **필터** | **연산자** | **선택 가능한 항목** |
|----------|------------|-------------------|
| A Order Source | is, is not | 주문 폼 |
| B Product | is, is not | 글로벌 상품 |
| C Payment Gateway | is, is not | Stripe, Paypal |
| D Order Total | 숫자 연산자 | 숫자 연산자 |
| E Submission Type | is, is not | Primary, Bump, Upsell |
| F Funnel | is, is not | 퍼널명 |

**커스텀 값**

**주문 카테고리**
- Currency symbol ($) - 통화 기호
- Currency code (USD) - 통화 코드
- Cart Total - 장바구니 합계
- Order total - 주문 총액
- Coupon code - 쿠폰 코드
- Total discount - 총 할인액
- Created on - 생성일
- Created at - 생성 시간
- Order ID - 주문 ID
- Payment Gateway - 결제 게이트웨이

**주문 > 고객 카테고리**
- ID - 고객 ID
- First Name - 이름
- Last Name - 성
- Name - 성명
- Email - 이메일
- Phone - 전화번호
- Full Address - 전체 주소
- City - 도시
- State - 주/도
- Country - 국가
- Postal Code - 우편번호

---
*원문 최종 수정: Tue, 8 Apr, 2025 at 12:38 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*