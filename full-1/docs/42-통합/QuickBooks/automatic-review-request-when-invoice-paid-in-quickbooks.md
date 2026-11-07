---
원문: https://help.gohighlevel.com/support/solutions/articles/155000004140-automatic-review-request-when-invoice-paid-in-quickbooks
번역일: 2026-11-07
카테고리: 42-통합
---

# QuickBooks 인보이스 결제 시 자동 리뷰 요청

QuickBooks 연동에는 연락처의 첫 인보이스가 전액 결제되면 리뷰 요청을 자동으로 보내는 기능이 들어 있어요. 이 문서에서는 이 기능이 무엇인지, 왜 있는지, 어떻게 끄는지 안내해요.

QuickBooks 연동은 연락처의 첫 인보이스가 전액 결제되어 잔액이 0달러가 되면 리뷰 요청을 보내요. 이 기능은 수동으로 보내는 리뷰 요청이나 워크플로우 액션으로 보내는 리뷰 요청과는 별개로 동작해요. 켜 두어도 되고, 끌 수도 있어요.

{% hint style="info" %}
QuickBooks 자동 리뷰 요청은 연동에 내장된 기능이라서 하이퍼클래스 워크플로우 트리거나 액션을 사용하지 않아요. **Invoice Paid**(인보이스 결제 완료) 워크플로우 트리거는 QuickBooks에서 결제된 인보이스에는 반응하지 않고, 하이퍼클래스에서 결제된 인보이스에만 반응해요.
{% endhint %}

## QuickBooks 자동 리뷰 요청이란 무엇인가요?

리뷰 요청은 연락처에게 서비스 제공업체를 평가해 달라고 부탁하는 메시지(이메일 또는 SMS)를 미리 만들어 보내는 하이퍼클래스 기능이에요. QuickBooks 연동은 QuickBooks와 하이퍼클래스를 연결해서 필요한 정보를 서로 주고받게 해 주는 기능이고요.

이 연동에는 자동화가 하나 내장되어 있어요. 연락처가 처음으로 인보이스를 결제해 잔액이 0달러가 되면, 그 연락처에게 리뷰 요청을 보내요.

리뷰 요청 메시지는 원하는 내용으로 직접 수정할 수 있어요.

## QuickBooks 연동에 자동 리뷰 요청이 있는 이유는 무엇인가요?

모든 소규모 사업체는 리뷰를 요청해야 하지만, 대부분은 충분히 자주 요청하지 않아요. 첫 거래가 마무리된 직후는 리뷰를 부탁하기에 아주 좋은 때예요. QuickBooks와 연결해 두면 첫 인보이스의 잔액이 0달러가 되는 순간을 알려 받아서 이 과정을 자동화할 수 있어요.

## QuickBooks 자동 리뷰 요청을 끄려면 어떻게 하나요?

한동안은 이 자동 리뷰 요청을 끌 방법이 없었어요. 2024년 10월에 이 기능을 켜고 끌 수 있는 새 기능이 나왔어요. 서브 계정에서 아래 순서대로 설정하세요.

1. **설정 > 연동 > Quickbook Integration**(QuickBooks 연동)으로 이동해요.
2. **연락처에 대한 리뷰 요청 보내기** 체크를 해제해요.

나중에 다시 켜고 싶으면 같은 곳에서 체크하면 돼요.

![설정 > 연동 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036265161/original/OJFXdakaL0LHzIpcnHVcfh4BCptkWLXy2w.png?1731088086)

![Quickbook Integration 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036264859/original/SnPYiMVeGdk-sv8u-NZFxPbtQ3nl9NY9SA.png?1731087542)

![연락처에 대한 리뷰 요청 보내기 체크 해제 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036264864/original/PGJ75VCaBw4SDEhTjeZNA027jL-1d9tfpQ.png?1731087556)
