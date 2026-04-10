---

번역일: 2026-04-07
카테고리: 07-워크플로우 > Payments Workflow Triggers
---

# 워크플로우 트리거 - 쿠폰 코드 적용됨

결제 시 쿠폰 코드가 적용될 때 자동으로 작업을 실행할 수 있습니다. 이 가이드에서는 설정 방법부터 주요 장점까지 모든 것을 설명합니다. 고객이 구매를 완료했는지 여부에 관계없이 쿠폰 코드를 적용하는 순간 워크플로우를 트리거할 수 있어, 보상 후속 조치, 내부 알림, 매출 최적화에 완벽합니다.

**목차**

- [쿠폰 코드 적용됨 워크플로우 트리거란](#쿠폰-코드-적용됨-워크플로우-트리거란)
- [쿠폰 코드 적용됨 워크플로우 트리거의 주요 장점](#쿠폰-코드-적용됨-워크플로우-트리거의-주요-장점)
- [쿠폰 코드 적용됨 워크플로우 트리거 설정하기](#쿠폰-코드-적용됨-워크플로우-트리거-설정하기)
- [사용 가능한 필터](#사용-가능한-필터)
- [쿠폰 코드 사용에 권장되는 워크플로우 액션](#쿠폰-코드-사용에-권장되는-워크플로우-액션)
- [자주 묻는 질문](#자주-묻는-질문)

## 쿠폰 코드 적용됨 워크플로우 트리거란

쿠폰 코드 적용됨 트리거는 결제 과정에서 주문에 쿠폰 코드가 적용되는 순간 워크플로우를 시작하는 데 사용됩니다. 주문이 완료되지 않아도 워크플로우가 실행되므로, 할인 코드가 사용될 때 실시간으로 후속 조치, 태깅, 내부 알림 또는 타겟팅된 세일즈 오퍼를 자동화할 수 있습니다.

쿠폰 코드 사용을 모니터링하고 주문 처리 완료를 기다리지 않고 즉시 행동하고자 하는 영업팀과 마케터에게 필수적인 도구입니다.

## 쿠폰 코드 적용됨 워크플로우 트리거의 주요 장점

- **쿠폰 코드 사용에 즉시 반응**: 결제 시 쿠폰이 적용되는 순간 자동화 트리거
- **장바구니 이탈 복구**: 쿠폰을 적용했지만 결제를 완료하지 않은 쇼핑객에게 리마인드를 보내 돌아와서 구매를 완료하도록 유도
- **개인화된 업셀링**: 쿠폰 유형이나 가치를 감지하여 관련성 있고 도움이 되는 맞춤형 업셀 오퍼 제시
- **고급 필터로 정확한 타겟팅**: 쿠폰 코드, 유형, 주문 가격, 상품 등을 기반으로 액션 실행
- **운영 효율성**: 특정 할인 코드가 적용될 때 팀에 알림을 보내거나 연락처에 태그를 달아 성과 모니터링

## 쿠폰 코드 적용됨 워크플로우 트리거 설정하기

이 트리거를 설정하려면 워크플로우 빌더로 이동하여 다음 단계를 따르세요:

#### **1단계: 워크플로우에 트리거 추가**

- `Automation(자동화) → Workflows(워크플로우)`로 이동
- 새 워크플로우를 만들거나 기존 워크플로우를 편집
- 워크플로우 빌더에서 `+ Add New Trigger(새 트리거 추가)`를 클릭

![쿠폰 코드 적용됨 트리거 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050382194/original/F9qxCGgkR-XZ5jtwTc9S9hWkflT9XX_HwQ.png?1753365840)

#### **2단계: 트리거 유형 선택**

사용 가능한 트리거 목록에서 `Payments(결제)` 섹션으로 스크롤하여 `Coupon Code Applied(쿠폰 코드 적용됨)`를 선택합니다.

![쿠폰 코드 적용됨 트리거 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050382304/original/QA74NLhgPeH9Qd5PPf8TA7dXIl5KJ_XHcg.png?1753365909)

#### **3단계: 트리거 이름 지정**

- `Workflow Trigger Name(워크플로우 트리거 이름)` 필드에 설명적인 이름을 입력하여 워크플로우를 체계적으로 관리하세요.
- 예시: "상품 1에 15% 할인 쿠폰 코드 적용됨"

![트리거 이름 지정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050382386/original/-YcR2-lw0tkrVI_cuCbmWTxdhzATBG4GfA.png?1753365945)

#### **4단계: 특정 시나리오를 타겟팅하는 필터 적용**

- 트리거 이름을 지정한 후, 필터를 적용하여 이 워크플로우가 실행되어야 하는 정확한 조건을 좁혀보세요
- 필터를 추가하려면 `+ Add Filters(필터 추가)`를 클릭
- 각 필터는 특정 연산자(Is, Contains, Greater Than, Before/After 등)와 함께 제공되어 관심 있는 조건을 정확히 타겟팅할 수 있습니다. [사용 가능한 필터 목록 보기](#사용-가능한-필터)

![필터 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050382758/original/fAA2RXLA9XQtmfmX7dzdf1Oo2QvMndMwww.png?1753366194)

#### **5단계: 저장하고 워크플로우 구축**

- 트리거와 필터가 설정되면 `Save Trigger(트리거 저장)`를 클릭하고 원하는 액션을 워크플로우에 추가하기 시작하세요.
- 완료되면 `Test Workflow(워크플로우 테스트)`를 사용하여 모든 것이 예상대로 작동하는지 확인한 다음 `Publish(발행)`하여 워크플로우를 활성화하세요.

![워크플로우 저장 및 발행](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049297661/original/PtVRE6cOM4E2TbgTZG2g_JvxWNFrchlcZw.png?1751548691)

## 사용 가능한 필터

| 필터 | 연산자 | 입력 유형 |
|------|--------|-----------|
| Coupon Code(쿠폰 코드) | Is Any Of / Is Empty / Is None Of / Is Not Empty | 쿠폰 코드 다중 선택 드롭다운 |
| Coupon Name(쿠폰 이름) | Is Any Of / Is Empty / Is None Of / Is Not Empty | 쿠폰 이름 다중 선택 드롭다운 |
| Coupon Type(쿠폰 유형) | Is / Is Empty / Is Not / Is Not Empty | Amount / Percentage |
| Coupon Value(쿠폰 값) | Equals To / Greater Than / Greater Than or Equal To / Is Empty / Is Not Empty / Is Not Equal To / Less Than / Less Than or Equal To | 숫자 입력 상자 |
| Order Value (Before Discount)(주문 가격 - 할인 전) | Equals To / Greater Than / Greater Than or Equal To / Is Empty / Is Not Empty / Is Not Equal To / Less Than / Less Than or Equal To | 숫자 입력 상자 |
| Product Collection(상품 컬렉션) | Contain Any / Is Empty / Is None Of / Is Not Empty | 상품 컬렉션 다중 선택 드롭다운 |
| Product Type(상품 유형) | Contain Any / Is Empty / Is None Of / Is Not Empty | 상품 유형 다중 선택 드롭다운 (일회성 vs 반복) |
| Product(s) In Order(주문 상품) | Contain Any / Is Empty / Is None Of / Is Not Empty | 상품 다중 선택 드롭다운 |
| Source(소스) | Is / Is Empty / Is Not / Is Not Empty | 단일 선택 드롭다운 |

## 쿠폰 코드 사용에 권장되는 워크플로우 액션

쿠폰 코드 적용됨 트리거가 설정되면, 매출과 고객 경험을 최적화하기 위해 다음 액션들을 추가해보세요:

- **이메일 발송**: 쿠폰 코드 사용을 확인하는 개인화된 메시지를 고객에게 발송
- **사용자에 배정**: 후속 조치를 위해 연락처를 영업 또는 지원 사용자에게 자동 배정
- **태그 추가**: 적용한 쿠폰 코드를 기반으로 연락처에 태그 적용
- **내부 알림**: 고가치 또는 특별 쿠폰이 사용될 때 팀에 알림
- **기회 생성/업데이트**: 해당하는 경우 리드를 영업 파이프라인으로 연결

## 자주 묻는 질문

**Q: 고객이 결제를 완료하지 않아도 트리거가 작동하나요?**
네, 이 트리거는 고객이 주문을 완료했는지 여부에 관계없이 쿠폰이 적용되는 순간 실행됩니다.

**Q: 쿠폰이 어떤 상품에 적용되었는지 추적할 수 있나요?**
네, `Product(s) in Order(주문 상품)`와 `Product Collection(상품 컬렉션)` 필터를 사용하여 쿠폰이 적용될 때의 상품 선택을 기반으로 범위를 좁힐 수 있습니다.

**Q: 필터를 추가하지 않으면 어떻게 되나요?**
필터가 적용되지 않으면, 결제 시 적용되는 모든 쿠폰 코드에 대해 워크플로우가 트리거됩니다. 특정 캠페인을 타겟팅하려면 `Coupon Code Is` 또는 `Coupon Type Is` 같은 필터를 사용하는 것이 모범 사례입니다.

**Q: 할인 전후 주문 가격을 기반으로 액션을 트리거할 수 있나요?**
네, `Order Value (Before Discount)(주문 가격 - 할인 전)`와 `Order Value (After Discount)(주문 가격 - 할인 후)` 필터를 `Greater Than`, `Less Than` 등의 연산자와 함께 사용하여 워크플로우가 실행되는 조건을 제어할 수 있습니다.

**Q: 예약 주문도 이 트리거에서 지원되나요?**
아니요, 이 트리거는 결제 시 쿠폰이 적극적으로 적용될 때만 실행됩니다.

---
*원문 최종 수정: Mon, 28 Jul, 2025 at 1:21 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*