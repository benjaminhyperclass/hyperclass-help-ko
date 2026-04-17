---

번역일: 2026-04-06
카테고리: 01-시작하기 > 커머스
---

# 시작하기 - Stripe 연동

거래를 간편하게 만들 준비가 되셨나요? Stripe 연동을 통해 신용카드 결제, 구독 등을 더 간단하고 안전하게 처리할 수 있습니다. 함께 설정해보겠습니다!

## **Stripe 연동하기**

먼저 결제(Payments) 섹션으로 이동하세요. 고객 거래를 원활하게 처리하기 위한 결제 게이트웨이 연동이 이루어지는 곳입니다.

- `Payments(결제) → Integrations(연동)`으로 이동하세요. 여기서 Stripe, PayPal, Authorize.net, NMI, Manual Payment Methods(수동 결제 방식, 예: 착불, COD), Square 등 인기 있는 옵션들을 찾을 수 있습니다.

![Stripe 연동 인터페이스](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047521122/original/Pzm_agDxZiQDXGxZ40DuvBmhEBQEk5IbEw.png?1748649426)

- **Connect with Stripe(Stripe 연결하기)** 버튼을 클릭하세요. 안전하게 로그인하거나, 아직 계정이 없다면 Stripe 계정을 생성할 수 있는 페이지로 이동합니다.

- 마지막으로 **Stripe 계정을 승인**하세요. 이 과정을 통해 모든 것이 원활하고 안전하게 동기화됩니다. 연동이 완료되면 **Manage(관리)** 버튼을 클릭해서 연결을 편집할 수 있습니다.

![Stripe 연동 완료 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047521127/original/o7bIfWXE2UK74snQVqVpQO2k2PC5hsFd3A.png?1748649525)

훌륭합니다! 이제 결제 시스템이 준비되었습니다.

Stripe를 사용하지 않으시나요? 제품 영역에 따라 다른 지원 게이트웨이(예: Authorize.net, NMI, Square, Adyen, Razorpay)로도 판매할 수 있고, Stripe Connect 없이도 일회성 인보이스를 기록할 수 있습니다(수동 결제 입력). 결제(Payments) 보고서/영수증과 완전한 호환성을 원한다면 지원되는 게이트웨이를 연결하세요. [제품 영역별 지원 결제 제공업체](../../08-결제/supported-payment-providers-methods-by-product-area-what-works-where-.md) 및 [Stripe Connect 없는 수동 인보이스](../../08-결제/기타/common-uses-cases-for-payments-and-invoices.md) 가이드를 참조하세요.

**다음으로** 할 수 있는 일들:

- 더 세밀한 제어를 위해 하위 계정(Sub-account) 수준에서 Stripe를 연결하는 방법 살펴보기
- 시간을 절약하기 위해 Stripe에서 상품과 가격을 직접 가져오는 방법 배우기

더 자세히 알고 싶으시다면 이 문서들을 확인해보세요:

- [제품 영역별 지원 결제 제공업체 및 방식 (어디서 무엇이 작동하는지)](../../08-결제/supported-payment-providers-methods-by-product-area-what-works-where-.md)
- [Authorize.net 연동 (비-Stripe 게이트웨이 예시)](../../08-결제/authorize-net-integration-for-processing-payments.md)
- [Stripe Connect 없이 인보이스 사용하기 (수동 결제) ("첫 번째 인보이스 보내는 방법…"에서)](../../08-결제/인보이스-견적/how-to-create-invoices-in-highlevel.md)
- [HighLevel API (문서 & 제한사항)](../../35-개발자/Developer-Resources/highlevel-api-documentation.md)
- 웹훅 (Zapier) – HighLevel로 구매 데이터 보내기
- [커스텀 결제 연동 (개발자 경로)](../../08-결제/결제-연동/how-to-build-a-custom-payments-integration-on-the-platform.md)

# 자주 묻는 질문

**Q: Stripe 계정을 여러 개 연결할 수 있나요?**

각 HighLevel 하위 계정(Sub-account)은 한 번에 하나의 Stripe 계정만 연결할 수 있습니다. 여러 브랜드나 비즈니스를 관리한다면 별도의 하위 계정을 생성하고 각각에 다른 Stripe 계정을 연결하세요.

**Q: OAuth를 통해 Stripe를 연결하지 않고도 HighLevel에서 Stripe 결제를 추적할 수 있나요?**

자동으로는 불가능합니다. Stripe에서 직접 생성된 결제는 Stripe가 연결되지 않으면 HighLevel로 동기화되지 않습니다. Stripe Connect 없이 수동 일회성 인보이스를 발행할 수는 있지만(결제를 직접 기록), 자동 결제 동기화와 결제(Payments) 보고서는 연결된 제공업체가 필요합니다.

**Q: 서드파티 도구(예: Easify)가 어트리뷰션을 위해 API나 웹훅을 통해 구매 이벤트를 HighLevel에 보낼 수 있나요?**

제한적으로 가능합니다. 서드파티 도구는 공개 API를 통해 HighLevel에 이벤트를 POST하거나 웹훅/Zapier를 통해 데이터를 보내 연락처, 태그, 기회 금액을 업데이트하여 파이프라인/매출 어트리뷰션에 활용할 수 있습니다. 이 방법은 마케팅 어트리뷰션과 영업 보고서에는 도움이 되지만, 연결된 결제 제공업체나 커스텀 결제 연동을 통하지 않으면 HighLevel "결제(Payments)" 기록/영수증을 생성하지는 않습니다.

**Q: Stripe 로그인 없이도 결제(Payments) 영역에 결제를 기록하는 API 기반 대안이 있나요?**

커스텀 결제 연동을 구축하거나 사용하세요. HighLevel은 체크아웃, 구독, 저장된 결제 방식, 결제(Payments) 보고서에 연결되는 제공업체 구축을 지원합니다—Stripe OAuth 없이도 가능합니다. 이는 개발자 경로이며 수동 인보이스와는 별개입니다.

**Q: HighLevel과 깔끔하게 연동되는 권장 비-Stripe 프로세서가 있나요?**

HighLevel은 제품 영역별로 여러 게이트웨이를 지원합니다(예: Authorize.net, NMI, Square, Adyen, Razorpay, PayPal 버튼). 공식 "무엇이 어디서 작동하는지" 매트릭스와 각 제공업체의 설정 가이드를 확인하여 주문 양식, 인보이스, 구독 등에 대한 지원을 확인하세요.

**Q: Stripe에서 연결을 완료하려면 어떤 권한이 필요한가요?**

연동을 승인하려면 Stripe에서 관리자 수준의 액세스 권한이나 적절한 권한이 있어야 합니다. 연결을 승인할 수 없다면 Stripe 계정 소유자에게 권한 수준 조정을 요청하세요.

**Q: 연결한 후 Stripe의 기존 결제가 HighLevel에 표시되나요?**

아니요. HighLevel은 연동 후 HighLevel을 통해 생성된 새로운 거래만 추적합니다. 계정 연결 전에 Stripe 내부에서 직접 이루어진 결제는 HighLevel로 동기화되지 않습니다.

**Q: HighLevel에서 Stripe로 어떤 통화를 사용할 수 있나요?**

지원되는 통화는 Stripe 계정의 국가와 해당 Stripe 계정에서 활성화된 통화에 따라 다릅니다. HighLevel이 거래 데이터를 Stripe에 보내면, Stripe가 활성화된 통화를 사용하여 처리합니다.

**Q: Stripe의 테스트 모드를 사용해서 결제를 테스트할 수 있나요?**

예. Stripe의 테스트 모드를 사용하면 실제 카드에 청구하지 않고 결제를 시뮬레이션할 수 있습니다. 이런 테스트 결제는 실제 보고서에 나타나지 않으므로, 실제 결제를 받을 준비가 되면 라이브 모드로 전환하세요.

**Q: 상품 정보를 Stripe로 어떻게 보내나요?**

HighLevel 내부에서 생성된 상품 세부정보는 고객이 구매를 완료할 때 자동으로 Stripe로 전송됩니다. HighLevel은 체크아웃 중에 상품명, 가격, 거래 데이터를 전송합니다.

---
*원문 최종 수정: Tue, 20 Jan, 2026 at 8:06 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*