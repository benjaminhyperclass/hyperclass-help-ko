---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000007423-rentals-taxes
번역일: 2026-08-11
카테고리: 04-캘린더-예약 > 렌탈
---

# 렌탈 - 세금

**렌탈(Rentals)**의 투명한 수동 세금 기능으로 하이퍼클래스에서 렌탈 예약을 관리해보세요. 이 가이드에서는 이 기능이 무엇인지, 누구를 위한 것인지, 어떻게 작동하는지, 그리고 예약 페이지, 예약 상세, 인보이스, 리포트 전반에서 합계가 어떻게 표시되는지 설명해요.

**목차**

- [렌탈 세금이란?](#What-are-Taxes-for-Rentals?)[렌탈 세금의 주요 이점](#Key-Benefits-of-Rental-Taxes)
- [렌탈의 수동 세금](#Manual-Taxes-in-Rentals)
- [예약 및 인보이스에서의 표시](#Visibility-in-Bookings-&-Invoices)
- [렌탈 리스팅에 세금을 적용하는 방법](#How-To-Apply-Taxes-to-Rental-Listings)
- [자주 묻는 질문](#Frequently-Asked-Questions)

# **렌탈 세금이란?**

렌탈의 세금 기능을 사용하면 정확한 리포팅을 유지하면서도 깔끔하게 항목별로 정리된 결제 경험을 제공할 수 있어요. 각 리스팅은 자동으로 연결된 상품(Product)을 생성하며, 이 상품에 수동 세율을 연결할 수 있어요.

세율은 결제(Payments)에서 설정한 후 렌탈 리스팅(Rental Listings)에 직접 적용해요. 렌탈 예약이 생성되면 선택된 세율이 자동으로 계산되어 다음 위치에 표시돼요.

- 공개 예약 페이지
- 예약 상세 보기
- 렌탈 인보이스
- 영수증 및 내보내기(Export) 파일

하나의 예약에 여러 리스팅이 포함된 경우, 세금은 리스팅별로 계산된 후 최종 합계에 합산돼요.

## **렌탈 세금의 주요 이점**

이 기능은 렌탈 거래 전반에서 투명성, 규정 준수, 정확한 리포팅에 초점을 맞추고 있어요.

- **수동 세금 제어:** 결제(Payments)에서 연결된 상품을 통해 렌탈 리스팅의 수동 세금을 설정할 수 있어요.
- **투명한 가격 책정:** 렌탈 예약에 세금이 적용될 때 고객이 더 정확한 예약 합계를 확인할 수 있도록 도와줘요.
- **베리언트(Variant) 단위의 유연성:** 각 베리언트가 자체 연결 상품을 가지고 있는 경우, 서로 다른 세금 설정을 적용할 수 있어요.
- **운영 효율성:** 수동 세금 계산을 없애고 예약 관리 과정에서 발생하는 번거로운 우회 작업을 줄여줘요.
- **재무 가시성 향상:** 지원되는 예약 관련 합계, 인보이스, 관련 리포팅 화면에 세금이 반영되도록 보장해줘요.

## **렌탈의 수동 세금 (v2)**

수동 세금은 리스팅에 직접 연결되는 것이 아니라 상품(Product)에 연결돼요. 각 리스팅에는 연결된 상품이 있기 때문에, 해당 상품에 세율을 지정하면 리스팅이 예약될 때마다 올바른 세금이 예약 합계에 추가돼요.

**작동 방식**

- 각 리스팅은 자동으로 연결된 상품을 생성해요.
- **결제(Payments)** → **설정(Settings)** → **세금(Taxes)**에서 해당 상품에 하나 이상의 세율을 추가해요.
- 리스팅이 예약되면 해당 세율이 자동으로 적용돼요.

결제(Payments)의 세금 설정이 포함형(inclusive)인 경우, 시스템이 리스팅 가격에서 세금 부분을 추출해요. 별도형(exclusive)인 경우, 렌탈 소계 위에 세금이 추가돼요.

## **예약 및 인보이스에서의 표시**

세금이 어디에 표시되는지 알아두면 합계를 확인하고 고객 문의에 응답하는 데 도움이 돼요.

세금은 다음 위치에서 확인할 수 있어요.

- 공개 예약 페이지 (합계 위에 항목별로 표시)
- 렌탈의 예약 편집 화면 내부
- 예약의 결제(Payments) 탭 내부
- 생성된 인보이스

동일한 합계는 내부 리포팅 및 대사(Reconciliation)를 위해 렌탈 모듈 전반에서 유지돼요.

## **렌탈 리스팅에 세금을 적용하는 방법**

올바른 설정을 통해 모든 예약이 정확한 합계를 반영하도록 하고, 고객 혼란을 줄이며, 대사 작업 속도를 높일 수 있어요. 아래 단계에 따라 세금과 수수료를 모두 설정해보세요.

- **캘린더(Calendars)** → **캘린더 설정(Calendar Settings)** → **렌탈(Rentals)** → **리스팅(Listings)**으로 이동한 후 업데이트하려는 리스팅을 여세요. 렌탈 리스팅 편집기에는 재고, 가격, 관련 옵션을 관리하는 고급 설정 영역이 포함되어 있어요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071358723/original/gjmuC5uqyhKcrhISsZ3WrS8LWWQ13tf_dQ.png?1778779241)

- **리스팅 편집(Edit Listing)**을 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071358828/original/yQtN7QYjYwM1LW0ajXOK8EiLP3JHM5skyA.png?1778779295)

- **재고 및 가격(Inventory & Pricing)** 탭으로 이동한 후 **이 리스팅의 세금 설정(Configure Taxes for This Listing)**을 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071358853/original/WYltwyQV47wSoQt8juX6-E46dgZnNvCsBQ.png?1778779320)

- 하이퍼클래스가 **결제(Payments)** > **상품(Products)** 아래의 연결된 상품으로 이동시켜줘요. 연결된 상품의 수동 세금을 추가하거나 업데이트한 후 **저장(Save)**을 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071358886/original/XBdJ6bcqyaK-0mDnhipyMR_jhlaljHKQ0A.png?1778779360)

- 새 예약을 만들거나 향후 예약 합계를 확인하여 세금이 예상대로 적용되는지 확인하세요. 세금은 설정이 저장된 이후의 향후 예약부터 적용돼요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155071358966/original/usMg_XrQU50xow8lCAxwbgNgZ1vdW3PLnQ.gif?1778779464)

---

## **자주 묻는 질문**

**Q: 리스팅마다 다른 세율을 사용할 수 있나요?**
네, 가능해요. 세금은 렌탈 리스팅별로 설정되기 때문에 각 리스팅마다 고유한 세율을 가질 수 있어요.

**Q: 세금 변경이 기존 예약에도 영향을 미치나요?**
아니요. 변경 사항은 이후 새로 생성되는 예약부터 적용돼요. 기존 예약은 직접 수정하지 않는 한 그대로 유지돼요.

**Q: 여러 리스팅이 포함된 예약에서는 세금이 어떻게 처리되나요?**
각 리스팅은 세금을 독립적으로 계산해요. 이후 시스템이 모든 세금 금액을 합산하여 최종 예약 합계에 반영해요.

**Q: 관련 보증금(Security Deposit)에도 세금이 적용되나요?**
아니요. 세금은 리스팅에만 적용되며, 보증금에는 적용되지 않아요.

**Q: 렌탈은 자동 세금 계산을 지원하나요?**
아니요. 현재 렌탈은 수동 세금만 지원해요.

**Q: 보증금에도 세금이 적용되나요?**
아니요. 세금은 리스팅에만 적용되며, 관련 보증금에는 적용되지 않아요.

---

*원문 최종 수정: 2026년 8월 5일*
*Hyperclass 사용 가이드 — hyperclass.ai*