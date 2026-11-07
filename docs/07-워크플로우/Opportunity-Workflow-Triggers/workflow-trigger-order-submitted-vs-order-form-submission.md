---
원문: /support/solutions/articles/155000004303-workflow-trigger-order-submitted-vs-order-form-submission
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Order Submitted(주문 제출)와 Order Form Submission(주문 폼 제출) 차이

이 문서는 주문 폼이 제출됐을 때와 주문이 완료됐을 때 각각 작동하는 두 트리거의 차이를 설명해요. 어떤 상황에 어느 트리거를 써야 할지 고를 때 참고하세요.

두 트리거를 가르는 기준은 결제예요. 주문 폼이 제출되면 한 트리거가, 주문 결제가 이루어지면 다른 트리거가 작동해요. 주문 폼도 있고 결제도 있다면 두 트리거가 모두 작동할 수 있어요.

두 트리거는 판매·마케팅 퍼널의 서로 다른 단계에서 쓰여요. **Order Submitted**(주문 제출) 트리거는 보통 고객이 구매를 마친 뒤에 써요. **Order Form Submission**(주문 폼 제출) 트리거는 그보다 앞선 단계에서 써요. 예를 들어 잠재 리드를 확보하거나 후속 연락에 필요한 정보를 모을 때예요.

## 트리거는 어디에 있나요?

**Order Form Submission**과 **Order Submitted** 트리거는 **워크플로우 빌더**의 **Payments**(결제) 항목 아래에 있어요.

![워크플로우 빌더의 Payments 항목 아래에 있는 주문 관련 트리거](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037341103/original/rMToiDblKmlcDM7EI6xuAAcNtIpFZ8pt2g.png?1732737641)

## Order Submitted 트리거

자세한 내용은 **Order Submitted** 트리거 문서를 참고하세요.

이 트리거는 시스템에서 실제 주문 결제(거래)가 이루어졌을 때 작동해요. 예를 들어 누군가 상품을 구매했을 때예요.

- 사용 사례: 보통 결제 거래와 연결해서 써요. 고객이 구매를 마치면 이 트리거로 후속 작업을 자동화할 수 있어요. 주문 확인 이메일 보내기, CRM 기록 업데이트, SMS 알림 보내기, 배송 워크플로우 시작하기 등이 있어요.
- 워크플로우 액션 예시:
  - "구매해 주셔서 감사합니다" 이메일 보내기
  - 인보이스 만들기 또는 결제 처리하기
  - 배송 절차를 시작하거나 배송 담당 팀에 알리기

## Order Form Submission 트리거

자세한 내용은 **Order Form Submission** 트리거 문서를 참고하세요.

이 트리거는 고객이 주문 정보가 담긴 폼을 제출했을 때 작동해요. 다만 거래가 완료됐다는 뜻은 아닐 수 있어요. 확정된 주문이 아니라 폼 제출 자체에 초점을 둔 트리거예요.

- 사용 사례: 주로 리드 확보용 폼이나 견적 요청(RFQ) 폼에 써요. 주문과 관련된 정보를 입력하지만 아직 결제는 하지 않은 경우예요. 사전 주문 폼이나 문의 폼처럼, 정식 구매 전에 관심을 보이거나 정보를 남기는 경우도 포함돼요.
- 워크플로우 액션 예시:
  - 접수 확인 이메일이나 문의 감사 이메일 보내기
  - 리드가 주문 폼을 작성했다고 영업 담당자에게 알리기
  - 계약 성사를 돕는 후속 시퀀스 시작하기

## 두 트리거의 주요 차이

- **Order Submitted**: 실제 구매나 완료된 거래와 연결돼요. 결제 과정이 포함되는 경우가 많아요. 주문 폼이 있었는지는 따지지 않아요.
- **Order Form Submission**: 주문 정보가 담긴 폼을 제출하면 작동해요. 거래가 완료됐다는 뜻은 아니에요(예: 리드 폼, 견적 요청). 결제가 있었는지는 따지지 않아요.
- 사용 가능한 값: 주문과 관련된 값 중에는 워크플로우에 **Order Submitted** 트리거가 있을 때만 쓸 수 있는 값이 있어요.

  |  |  |
  | --- | --- |
  | **Order Form Submission** |  |
  | **Order Submitted** |  |

- **Shopping Cart**(장바구니): **Order Submitted** 값을 사용할 수 있으면, **이메일 템플릿** 빌더에 추가한 **Shopping Cart** 요소에 주문의 상품 정보가 자동으로 채워져요.  
  ![이메일 템플릿 빌더의 Shopping Cart 요소에 주문 상품 정보가 자동으로 채워진 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037688926/original/JQLNpZGa7HKoBRgFL1iBOJyhAhS2wRxoog.png?1733247406)
