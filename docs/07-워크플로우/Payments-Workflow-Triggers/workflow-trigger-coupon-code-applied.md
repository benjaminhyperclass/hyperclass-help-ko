---
원문: /support/solutions/articles/155000005641-workflow-trigger-coupon-code-applied
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Coupon Code Applied(쿠폰 코드 적용)

고객이 결제 단계에서 쿠폰 코드를 적용하는 순간 워크플로우를 시작하는 트리거예요. 고객이 구매를 끝내지 않아도 작동하므로 보상 안내, 내부 알림, 판매 촉진에 활용할 수 있어요. 이 문서에서는 트리거의 설정 방법과 장점, 사용할 수 있는 필터를 안내해요.

## Coupon Code Applied 트리거란

**Coupon Code Applied**(쿠폰 코드 적용) 트리거는 결제 중 주문에 쿠폰 코드가 적용되는 순간 워크플로우를 시작해요. 주문 완료 여부와 관계없이 작동해요. 그래서 할인 코드가 쓰이는 즉시 후속 안내, 태그 지정, 내부 알림, 맞춤 판매 제안을 자동으로 실행할 수 있어요.

주문 처리가 끝날 때까지 기다리지 않고 쿠폰 사용 현황을 확인해 바로 대응하고 싶은 영업·마케팅 팀에 특히 유용해요.

## 주요 장점

- 쿠폰 사용에 즉시 대응: 결제 중 쿠폰이 적용되는 즉시 자동화를 실행해요.
- 장바구니 이탈 회복: 쿠폰을 적용하고도 결제를 끝내지 않은 고객에게 알림을 보내, 돌아와서 구매를 마치도록 유도해요.
- 맞춤 업셀: 쿠폰 유형이나 값을 확인해 고객에게 도움이 될 만한 업셀 제안을 보여 줘요.
- 상세 필터로 정확한 대상 지정: 쿠폰 코드, 유형, 주문 금액, 상품 등을 기준으로 액션을 실행해요.
- 운영 효율: 특정 할인 코드가 쓰이면 팀에 알리거나 연락처에 태그를 지정해 성과를 파악해요.

## 설정 방법

워크플로우 빌더에서 아래 순서로 트리거를 설정하세요.

### 1단계: 워크플로우에 트리거 추가하기

1. **자동화 > 워크플로우**로 이동하세요.
2. 새 워크플로우를 만들거나 기존 워크플로우를 열어요.
3. 워크플로우 빌더에서 **+ Add New Trigger**(새 트리거 추가)를 클릭하세요.

![워크플로우 빌더에서 새 트리거 추가 버튼을 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050382194/original/F9qxCGgkR-XZ5jtwTc9S9hWkflT9XX_HwQ.png?1753365840)

### 2단계: 트리거 유형 선택하기

사용할 수 있는 트리거 목록에서 **Payments**(결제) 섹션까지 스크롤한 다음 **Coupon Code Applied**를 선택하세요.

![트리거 목록의 Payments 섹션에서 Coupon Code Applied를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050382304/original/QA74NLhgPeH9Qd5PPf8TA7dXIl5KJ_XHcg.png?1753365909)

### 3단계: 트리거 이름 정하기

1. **Workflow Trigger Name**(워크플로우 트리거 이름) 필드에 알아보기 쉬운 이름을 입력하세요. 워크플로우를 정리하는 데 도움이 돼요.
2. 예시: *"상품 1에 15% 할인 쿠폰 코드 적용"*

![워크플로우 트리거 이름을 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050382386/original/-YcR2-lw0tkrVI_cuCbmWTxdhzATBG4GfA.png?1753365945)

### 4단계: 필터로 대상 상황 좁히기

1. 트리거 이름을 입력한 뒤에는 필터를 적용해 워크플로우가 실행될 상황을 좁힐 수 있어요.
2. 필터를 추가하려면 **+ Add Filters**(필터 추가)를 클릭하세요.
3. 필터마다 쓸 수 있는 연산자가 달라요. 예를 들면 *Is*(같음), *Contains*(포함), *Greater Than*(보다 큼), *Before/After*(이전/이후) 같은 연산자로 원하는 조건을 정확하게 지정해요. 필터 목록은 [사용 가능한 필터](#사용-가능한-필터)에서 확인하세요.

![필터를 추가해 트리거 조건을 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050382758/original/fAA2RXLA9XQtmfmX7dzdf1Oo2QvMndMwww.png?1753366194)

### 5단계: 저장하고 워크플로우 완성하기

1. 트리거와 필터 설정이 끝나면 **Save Trigger**(트리거 저장)를 클릭하고, 필요한 액션을 워크플로우에 추가하세요.
2. 모두 마쳤다면 **Test Workflow**(워크플로우 테스트)로 제대로 작동하는지 확인하세요.
3. **Publish**(게시)를 클릭해 워크플로우를 활성화하세요.

![트리거 저장 후 워크플로우를 테스트하고 게시하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049297661/original/PtVRE6cOM4E2TbgTZG2g_JvxWNFrchlcZw.png?1751548691)

## 사용 가능한 필터

| 필터 | 연산자 | 입력 유형 |
| --- | --- | --- |
| **Coupon Code**(쿠폰 코드) | Is Any Of / Is Empty / Is None Of / Is Not Empty | 쿠폰 코드 다중 선택 드롭다운 |
| **Coupon Name**(쿠폰 이름) | Is Any Of / Is Empty / Is None Of / Is Not Empty | 쿠폰 이름 다중 선택 드롭다운 |
| **Coupon Type**(쿠폰 유형) | Is / Is Empty / Is Not / Is Not Empty | 금액 / 퍼센트 |
| **Coupon Value**(쿠폰 값) | Equals To / Greater Than / Greater Than or Equal To / Is Empty / Is Not Empty / Is Not Equal To / Less Than / Less Than or Equal To | 숫자 입력란 |
| **Order Value (Before Discount)**(주문 금액, 할인 전) | Equals To / Greater Than / Greater Than or Equal To / Is Empty / Is Not Empty / Is Not Equal To / Less Than / Less Than or Equal To | 숫자 입력란 |
| **Product Collection**(상품 컬렉션) | Contain Any / Is Empty / Is None Of / Is Not Empty | 상품 컬렉션 다중 선택 드롭다운 |
| **Product Type**(상품 유형) | Contain Any / Is Empty / Is None Of / Is Not Empty | 상품 유형 다중 선택 드롭다운 (일회성 / 반복) |
| **Product(s) In Order**(주문에 포함된 상품) | Contain Any / Is Empty / Is None Of / Is Not Empty | 상품 다중 선택 드롭다운 |
| **Source**(출처) | Is / Is Empty / Is Not / Is Not Empty | 단일 선택 드롭다운 |

연산자는 영어 그대로 표시돼요. 뜻은 아래와 같아요.

| 연산자 | 뜻 |
| --- | --- |
| Is | 같음 |
| Is Not | 같지 않음 |
| Is Any Of | 선택한 값 중 하나와 같음 |
| Is None Of | 선택한 값 중 어느 것과도 같지 않음 |
| Is Empty | 비어 있음 |
| Is Not Empty | 비어 있지 않음 |
| Contain Any | 선택한 값 중 하나라도 포함 |
| Equals To | 같음 |
| Is Not Equal To | 같지 않음 |
| Greater Than | 보다 큼 |
| Greater Than or Equal To | 이상 |
| Less Than | 미만 |
| Less Than or Equal To | 이하 |

## 쿠폰 코드 사용 시 추천 액션

**Coupon Code Applied** 트리거를 설정했다면 아래 액션을 함께 추가해 보세요. 매출과 고객 경험을 높이는 데 도움이 돼요.

- **Send Email**(이메일 보내기): 쿠폰 코드를 사용한 고객에게 맞춤 메시지를 보내요.
- **Assign to User**(사용자에게 배정): 영업 또는 지원 담당 사용자에게 연락처를 자동으로 배정해 후속 대응을 맡겨요.
- **Add Tag**(태그 추가): 고객이 적용한 쿠폰 코드에 따라 연락처에 태그를 지정해요.
- **Internal Notification**(내부 알림): 고액 쿠폰이나 특별 쿠폰이 쓰이면 팀에 알려요.
- **Create/Update Opportunity**(기회 만들기/업데이트): 해당되는 경우 리드를 영업 파이프라인으로 보내요.

## 자주 묻는 질문

### 고객이 결제를 끝내지 않아도 트리거가 작동하나요?
네, 이 트리거는 쿠폰이 적용되는 순간 실행돼요. 고객이 주문을 완료했는지와는 관계가 없어요.

### 쿠폰이 적용된 상품을 확인할 수 있나요?
네, **Product(s) In Order** 필터와 **Product Collection** 필터를 쓰면 쿠폰이 적용된 시점에 선택된 상품을 기준으로 대상을 좁힐 수 있어요.

### 필터를 추가하지 않으면 어떻게 되나요?
필터를 적용하지 않으면 결제 중 적용되는 모든 쿠폰 코드에 워크플로우가 실행돼요. 특정 캠페인만 대상으로 하려면 **Coupon Code**의 *Is Any Of*나 **Coupon Type**의 *Is* 같은 필터를 쓰는 것이 좋아요.

### 할인 전후 주문 금액을 기준으로 액션을 실행할 수 있나요?
네, **Order Value (Before Discount)** 필터와 **Order Value (After Discount)** 필터에 *Greater Than*, *Less Than* 같은 연산자를 사용해 워크플로우가 실행되는 조건을 조절할 수 있어요.
### 이 트리거는 예약 주문도 지원하나요?
아니요, 이 트리거는 결제 중에 쿠폰이 직접 적용될 때만 실행돼요.
