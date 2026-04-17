---

번역일: 2026-04-09
카테고리: 42-통합 > QuickBooks
---

# QuickBooks에서 인보이스 결제 완료 시 자동 리뷰 요청

QuickBooks 연동(Integration)에는 연락처의 첫 번째 인보이스(Invoice)가 완전히 결제될 때(잔액이 $0이 될 때) 자동으로 [리뷰 요청을 전송](../../41-평판-리뷰/Review-Requests/how-to-send-review-requests.md)하는 내장 자동화 기능이 있습니다. 이 기능은 수동 또는 워크플로우(Workflow) 액션(Action)으로 보내는 리뷰 요청과는 별개로 작동합니다. 이 기능은 활성화 상태로 두거나 비활성화할 수 있습니다.

[QuickBooks 연동에 대해 더 자세히 알아보려면 여기를 클릭하세요.](../../08-결제/setting-up-quickbooks-integration.md)

QuickBooks 자동 리뷰 요청은 연동에 내장된 기능으로, Hyperclass 워크플로우 트리거(Trigger)/액션을 사용하지 않습니다. 인보이스 결제 완료 워크플로우 트리거는 QuickBooks에서 결제된 인보이스에는 반응하지 않고, Hyperclass에서 결제된 인보이스에만 반응합니다.

---

목차

- [QuickBooks 자동 리뷰 요청이란?](#quickbooks-자동-리뷰-요청이란)
- [QuickBooks 연동에 자동 리뷰 요청 기능이 있는 이유는?](#quickbooks-연동에-자동-리뷰-요청-기능이-있는-이유는)
- [QuickBooks 자동 리뷰 요청을 비활성화/끄는 방법은?](#quickbooks-자동-리뷰-요청을-비활성화끄는-방법은)

## QuickBooks 자동 리뷰 요청이란?

리뷰 요청(Review Request)은 서비스 제공업체에 대한 리뷰를 남겨달라고 연락처에게 미리 작성된 메시지(이메일 또는 SMS)를 전송하는 Hyperclass 기능입니다. QuickBooks 연동은 QuickBooks를 Hyperclass에 연결하여 특정 정보를 주고받을 수 있게 하는 기능입니다. QuickBooks 연동에는 연락처가 처음으로 인보이스를 $0까지 결제할 때 리뷰 요청을 자동으로 전송하는 내장 자동화 기능이 있습니다.

리뷰 요청 메시지는 [여기서 커스터마이징할 수 있습니다.](../../41-평판-리뷰/Review-Requests/how-to-customize-the-review-request-messages-sms-email-.md)

## QuickBooks 연동에 자동 리뷰 요청 기능이 있는 이유는?

모든 소규모 비즈니스는 리뷰를 요청해야 하지만, 대부분이 충분히 자주 요청하지 않고 있습니다. 리뷰를 요청하기에 가장 좋은 시점은 첫 거래가 완료된 직후입니다. 이는 QuickBooks에 연결하여 첫 인보이스가 $0까지 결제되었을 때 메시지를 받도록 설정하면 자동화할 수 있습니다.

## QuickBooks 자동 리뷰 요청을 비활성화/끄는 방법은?

한동안 이 자동 리뷰 요청을 비활성화하는 방법이 없었습니다. 2024년 10월에 이 기능을 켜고 끌 수 있는 새로운 기능이 출시되었습니다. `하위 계정(Sub-account) → 설정(Settings) → 연동(Integrations) → QuickBooks Integration → "연락처에 리뷰 요청 전송" 체크 해제`에서 이를 제어할 수 있습니다. 나중에 다시 켜거나 재활성화할 수 있습니다.

![QuickBooks 연동 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036265161/original/OJFXdakaL0LHzIpcnHVcfh4BCptkWLXy2w.png?1731088086)

![연동 메뉴 접근 경로](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036264859/original/SnPYiMVeGdk-sv8u-NZFxPbtQ3nl9NY9SA.png?1731087542)

![리뷰 요청 설정 토글](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036264864/original/PGJ75VCaBw4SDEhTjeZNA027jL-1d9tfpQ.png?1731087556)

---
*원문 최종 수정: Mon, 18 Nov, 2024 at 10:08 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*