---

번역일: 2026-04-06
카테고리: 08-결제
---

# 결제 - 구독(Subscriptions) 페이지에 무엇이 표시되나요?

#### 이 가이드에서는 구독 탭이 무엇인지, 어떻게 작동하는지 알아보겠습니다.

Payments(결제) → Subscriptions(구독)으로 이동하세요.

![구독 페이지 접근](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48264662842/original/nYrVD0WunUATbEJp7ykfwC3_o7wD2W2VNA.gif?1669047414)

**참고사항:**

여기 표시되는 구독은 주문 폼, 수동 구독 생성 등 다양한 방법으로 만들어질 수 있습니다.

구독 취소/환불 기능은 곧 추가될 예정이므로, Stripe로 이동하지 않고도 구독을 관리할 수 있게 됩니다.

#### 이 가이드에서 다루는 내용:

- [구독 페이지에 무엇이 표시되나요?](#구독-페이지에-무엇이-표시되나요)
- [구독 상세 정보에는 무엇이 포함되나요?](#구독-상세-정보에는-무엇이-포함되나요)
- [구독 상태는 무엇을 의미하나요?](#구독-상태는-무엇을-의미하나요)
- [구독 상태가 Stripe/PayPal과 동기화되나요?](#구독-상태가-stripepaypal과-동기화되나요)
- [주문 폼에서 결제 실패로 생성되지 못한 구독도 페이지에 표시되나요?](#주문-폼에서-결제-실패로-생성되지-못한-구독도-페이지에-표시되나요)
- [구독 페이지에 포함되지 않는 것은 무엇인가요?](#구독-페이지에-포함되지-않는-것은-무엇인가요)

## 구독 페이지에 무엇이 표시되나요?

선택한 결제 제공업체에서 지원하는 경우, 수동으로 생성된 구독(예: 연락처의 Payments(결제) 탭에서 생성)이 표시됩니다.

[**퍼널 버전 2**](../06-사이트/기타/how-to-upgrade-a-version-1-funnel-to-version-2-.md)의 1단계 또는 2단계 주문 폼을 통해 생성된 모든 구독이 포함되며, 다음 정보가 표시됩니다:

- 결제 제공업체 및 구독 ID
- 고객 정보
- 구독 생성 출처
- 생성 날짜
- 구독 금액
- 구독 상태

## 구독 상세 정보에는 무엇이 포함되나요?

- 결제 제공업체 정보와 구독 생성 출처 정보
- Stripe에서 생성된 구독의 경우, 구독 내에서 발생하는 후속 거래 정보

### 메타데이터(선택사항)

일부 구독에는 추가 메타데이터 필드(예: 결제 시 입력한 회사명)가 포함될 수 있습니다.

## 구독 상태는 무엇을 의미하나요?

| 상태 | Stripe | PayPal |
|------|--------|---------|
| Trial(체험) | trialing | - |
| Active(활성) | active | active |
| Canceled(취소) | canceled | canceled |
| Suspended(정지) | - | suspended |
| Failed(실패) | incomplete_expired | - |
| Incomplete(미완료) | incomplete, past_due | approval pending, approved |
| Unpaid(미결제) | unpaid | - |
| Expired(만료) | - | expired |

위 표에 따라 Stripe와 PayPal의 구독 상태를 분류했습니다. 각 상태의 자세한 의미는 [Stripe 문서](https://stripe.com/docs/billing/subscriptions/overview#subscription-statuses)와 [PayPal 문서](https://developer.paypal.com/docs/api/subscriptions/v1/#subscriptions_create)를 참고하세요.

## 구독 상태가 Stripe/PayPal과 동기화되나요?

- **Stripe의 경우**, 구독 상태와 받은 결제가 Stripe 대시보드와 동기화됩니다. 예를 들어 Stripe에서 구독을 취소하면 구독 목록에서도 '취소됨'으로 표시됩니다. 향후 받을 모든 결제도 Stripe 대시보드와 동기화됩니다.

- **PayPal에서 생성된 구독**의 경우 상태가 동기화되지 않습니다. 또한 PayPal 구독은 현재 향후 결제 정보도 표시되지 않습니다. 하지만 PayPal을 통해 생성된 구독을 추적할 수 있도록 구독 항목은 생성됩니다.

## 주문 폼에서 결제 실패로 생성되지 못한 구독도 페이지에 표시되나요?

아니요. 주문 폼 제출 시 구독의 첫 결제가 실패하면 구독 페이지에 등록되지 않습니다. 하지만 1단계와 2단계 주문 폼 모두에서 연락처는 생성되므로 고객을 추적할 수 있습니다.

## 구독 페이지에 포함되지 않는 것은 무엇인가요?

- 인보이스 섹션에서 생성한 반복 템플릿
- 멤버십 섹션에서 생성한 구독

---
*원문 최종 수정: Wed, 4 Feb, 2026 at 6:56 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*