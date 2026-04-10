---

번역일: 2026-04-07
카테고리: 04-캘린더-예약 > 서비스
---

# 서비스(v2)에서 세금 및 처리 수수료

**서비스(Services v2)**에서 투명한 수동 세금과 커스텀 처리(기타) 수수료로 Hyperclass의 캘린더 기반 예약을 관리하세요. 이 가이드는 이 기능이 무엇인지, 누구를 위한 것인지, 설정 방법, 그리고 예약 폼, 예약 상세, 영수증, 보고서에서 합계가 어떻게 표시되는지 설명합니다. 또한 결제 업체 호환성, 계산 규칙, FAQ, 관련 설정 아티클 링크도 찾을 수 있습니다.

---

## 서비스(v2)의 세금 및 처리 수수료란?

**서비스(v2)**의 세금 및 처리 수수료는 고객에게 깔끔하고 항목별로 정리된 결제 과정을 제공하면서 내부 보고서는 정확하게 유지할 수 있게 해줍니다. 각 서비스는 자동으로 **연결된 상품**을 생성합니다. 해당 상품에 **수동 세율**을 추가하고, 선택적으로 서비스에 **처리/기타 수수료**를 추가하면 서비스 예약 시 둘 다 자동으로 표시됩니다.

---

## 세금 및 처리 수수료의 주요 장점

이러한 장점은 투명성, 규정 준수, 결제 전반의 일관성에 중점을 둡니다. 이를 통해 청구 분쟁을 줄이고 정산을 간소화할 수 있습니다.

- **비용 회수:** 라벨이 붙은 수수료로 카드/편의 수수료를 전가합니다.
- **규정 준수:** 정확한 수동 판매세/VAT/GST 세율을 사용하여 지역 규정을 준수합니다.
- **일관성:** 예약 페이지, 예약 기록, 영수증, 내보내기 전반에서 합계를 일치시킵니다.
- **신뢰:** 결제 전에 **항목별** 합계를 보여주어 혼란과 지불 거절을 줄입니다.

---

## 처리 수수료/기타 비용

**기타 비용**(처리 수수료)은 처리비나 편의 수수료를 충당하기 위해 **서비스(v2)**별로 추가하는 퍼센트 기반의 추가 항목입니다. 라벨과 퍼센트는 완전히 커스터마이징할 수 있으며 결제 시와 영수증에서 별도 항목으로 표시됩니다.

**작동 방식**

- 퍼센트 기반 수수료(예: **5%**)와 커스텀 라벨(예: **"서비스 수수료"**)
- **공개 예약 폼**과 **결제 영수증**에서 독립적인 항목으로 표시
- **예약 기록**에 나타나서 직원이 소계, 수수료, 세금, 총액을 볼 수 있음

![서비스 수수료 표시 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056277687/original/CeohL25mWr6kUOr8WFZe4nbPGusDvjNX1w.png?1760719633)

---

## 서비스(v2)의 수동 세금

수동 세금은 서비스에 직접 연결되는 것이 아니라 **상품**에 연결됩니다. 각 서비스마다 **연결된 상품**이 있기 때문에, 해당 상품에 세율을 설정하면 서비스 구매 시마다 올바른 세금이 예약 총액에 자동으로 추가됩니다.

**작동 방식**

- 각 서비스(v2)는 연결된 상품을 **자동 생성**합니다.
- **결제(Payments) → 설정(Settings) → 세금(Taxes)**에서 해당 상품에 하나 이상의 **세율**을 추가합니다.
- 서비스가 예약되면 해당 세율이 자동으로 적용됩니다.

---

## 예약 및 영수증에서의 표시

수수료와 세금이 어디에 표시되는지 알면 팀이 총액을 확인하고 고객 질문에 답하는 데 도움이 됩니다. 동일한 총액이 내부 명확성과 보고를 위해 예약 기록에도 반영됩니다.

세금과 수수료는 다음에서 확인할 수 있습니다:

- **공개 예약 폼**에서 (총액 바로 위에 항목별로 표시)
- 직원용 **예약 상세**에서 결제 세부사항 포함
- **판매 영수증**에서 고객에게 이메일로 발송 (영수증이 활성화된 경우)

![예약 폼과 영수증에서의 세금 및 수수료 표시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056279159/original/5IzibjI_zEqifwFFE01gpVJOmAOrTP6oqg.png?1760721164)

---

## 세금 및 처리 수수료 설정 방법

적절한 설정을 통해 모든 예약에서 정확한 총액을 반영하고, 고객 혼란을 줄이며, 정산을 빠르게 할 수 있습니다. 세금과 수수료를 모두 설정하려면 다음 단계를 따르세요.

- 하위 계정에서 설정(Settings) → 캘린더(Calendars) → 서비스(Services) → 편집할 서비스를 선택합니다.

![서비스 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056278875/original/yxJAj75bsGQ_vMSQUctK1k9EyYbdXzELgA.png?1760720733)

- **결제** 섹션에서 → **이 서비스에 대한 세금 설정**을 클릭합니다.

![세금 설정 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056278902/original/Bm3jNyvhnfCa0LV_os3x5yRwGXiKmshqEg.png?1760720770)

- **연결된 상품** 창에서 **세율 추가**를 선택하거나 기존 세율을 선택 → **저장**합니다.
(선택사항) 서비스에 처리/기타 수수료 추가 → **퍼센트**와 **커스텀 라벨**을 입력합니다.

![세율 설정 및 처리 수수료 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056279039/original/u377K1S3iRyCkkQTmxfAj1DqGTBCB9kIEA.png?1760720984)

- 서비스를 **저장**합니다. 이후 예약에서는 예약 페이지, 예약 기록, 영수증에 **수수료**와 **세금** 항목이 자동으로 표시됩니다.

![완성된 설정 결과](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056279063/original/bKySYIg6nt9LmXNNTl0--OeaEI9uhyDD7g.png?1760721033)

![예약 폼에서의 최종 표시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056279050/original/kSmY5JHsWDhGgR_NpC5GiEAc7IP1C02YNQ.png?1760721013)

---

## 자주 묻는 질문

**Q: 서비스마다 다른 수수료를 사용할 수 있나요?**
예. 수수료는 서비스(v2)에서 **서비스별로** 설정되므로 각 서비스마다 고유한 퍼센트와 라벨을 가질 수 있습니다.

**Q: 세금이나 수수료 변경이 과거 예약에 영향을 주나요?**
아니요. 편집은 향후 **새로운** 예약에만 적용되며, 이전에 완료된 예약과 영수증은 변경되지 않습니다.

**Q: 수집된 수수료와 세금 보고서를 어디서 내보낼 수 있나요?**
결제(Payments) → 거래(Transactions) → CSV 내보내기(사용하는 경우 주문 CSV도 포함)로 이동하세요. 내보내기에는 정산을 지원하는 수수료 금액/라벨과 세금 컬럼이 포함됩니다.

**Q: 할인과 예치금이 총액에 어떤 영향을 주나요?**
할인은 **연결된 상품**의 과세 기준을 줄이며, 수수료가 서비스 가격의 퍼센트로 계산되는 경우 수수료에도 영향을 줄 수 있습니다. 예치금의 경우 예약 상세와 영수증에서 수집된 금액 대비 잔액을 보여줍니다.

---

## 관련 아티클

- [세금 추가 방법 – 개요]([how-to-add-taxes-overview](how-to-add-taxes-overview.md))
- [캘린더에서 결제 수집]([collecting-payments-in-calendars](collecting-payments-in-calendars.md))
- [캘린더에서 PayPal 사용]([paypal-in-calendars](paypal-in-calendars.md))
- [주문 폼, 캘린더, 인보이스 결제에 대한 판매 영수증 활성화 방법](how-to-enable-sales-receipts-for-order-form-calendar-and-invoice-payments.md)
- [워크플로우 트리거 – 서비스 예약(Services v2)]([workflow-trigger-service-booking-services-v2-](workflow-trigger-service-booking-services-v2-.md))

---
*원문 최종 수정: Wed, 12 Nov, 2025 at 2:14 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*