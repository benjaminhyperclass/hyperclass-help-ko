---

번역일: 2026-04-08
카테고리: 14-문서-계약 > 문서-계약
---

# 문서 & 계약: 문서 서명 시 인보이스 자동 발송 방법

## 새로운 기능

2-in-1 문서 & 계약 기능에 직접 통합된 **정기 인보이스 자동 생성** 기능을 소개합니다. 이 개선사항을 통해 문서 서명 시점에 정기 인보이스 생성과 관리를 원활하게 자동화할 수 있습니다. 주요 업데이트는 다음과 같습니다:

- **자동 설정 패널:** 새 템플릿이나 문서에 상품 목록을 추가할 때, 상품 목록을 클릭하면 설정 패널이 자동으로 열려 손쉽게 구성할 수 있습니다.

![자동 설정 패널](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192610/original/m32qF971fhQ6W0aWKAm1haQRa96V4I8eJw.png?1737463687)

- **자동 정기 유형 할당:** 정기 상품을 추가하면 자동으로 유형이 정기로 변경됩니다.
- **가격 유형 태그:** 상품이 일회성인지 정기인지를 시각적 태그로 구분하여 가격 유형을 쉽게 구별할 수 있습니다.

![가격 유형 태그](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192575/original/BvTl1r-opmC8DgoyB8z7wzUbyuTU5E24HQ.png?1737463645)

- **유연한 인보이스 스케줄링:** 서명 즉시 인보이스를 생성하거나 서명일을 기준으로 한 고정 스케줄을 선택할 수 있습니다.

![유연한 인보이스 스케줄링](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192590/original/PphDdpE_JVjTz8UCOdPTjOjDc__V-bCtcA.png?1737463657)

## 사용 방법

### 템플릿 작업

- **새 템플릿 생성:**
Payments(결제) → Documents & Contracts(문서 & 계약) → Templates(템플릿) → New Template(새 템플릿)으로 이동합니다.

![새 템플릿 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192695/original/_2f8RiHPRq3Ck-IfTr1HmJdOpvMFgpdAOQ.png?1737463746)

- **상품 목록과 서명 추가:**
템플릿에 상품 목록을 추가합니다.
- 필요한 위치에 서명 요소를 삽입합니다.

![상품 목록과 서명 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192790/original/18VAl-uoP2MKbCWRUUOqI6zYkIFvSCQ4Bg.png?1737463789)

- **정기 상품 설정:**
상품 목록에 정기 상품을 추가합니다.
- 설정 패널이 자동으로 열리며 구성할 수 있습니다.

![정기 상품 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192818/original/XWkZ94CHm5lsYqgW7teiPASepCzdpa3rMA.png?1737463823)

- **상품 유형 구분:**
상품 목록에서 일회성 상품과 정기 상품의 구분이 표시됩니다.
- **참고:**
  - **일회성 상품:** 항상 일회성 결제로 처리됩니다.
  - **설치비가 있는 정기 상품:** 두 개의 항목으로 표시됩니다. 하나는 정기 결제용, 다른 하나는 일회성 설치비용입니다.
  - 정기 상품만 이후 발송되는 인보이스에서 청구됩니다.

### 상품 목록 내 정기 인보이스 설정 구성

- **서명 시 인보이스 생성:**
  - **토글 켜기:** 서명 시점에 첫 번째 인보이스가 생성되고, 이후 인보이스는 정의된 주기(예: 매월)에 따라 발송되는 정기 인보이스 스케줄을 생성합니다.
    *예시:* 1월 25일에 문서가 서명되고 월간 스케줄인 경우, 다음 인보이스는 2월 25일에 발송됩니다.
  - **토글 끄기:** 서명일과 관계없이 인보이스를 발송할 특정 날짜를 설정할 수 있습니다.

- **직접 결제 활성화:**
  - **토글 켜기:** 서명 후 주 서명자를 인보이스 페이지로 직접 리다이렉트하고 인보이스가 담긴 이메일을 발송합니다.
  - **토글 끄기:** 인보이스가 초안으로 저장되며 나중에 수동으로 발송할 수 있습니다.

![정기 인보이스 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192852/original/53u9d00rt6mIJJRGbNWgOoALYyEREYHhfA.png?1737463853)

![정기 인보이스 설정 상세](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192883/original/9VWaDF-ImEVjKlK_pm_qLC-ASsWa7Mxllg.png?1737463880)

### 워크플로우 구성

- **템플릿 저장:**
구성을 완료한 후 템플릿을 저장합니다.

![템플릿 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192893/original/-3UIQsdRELaPte1YEzcXcntWdBZGqKdhxg.png?1737463897)

- **워크플로우 설정:**
Workflows(워크플로우)로 이동하여 저장된 템플릿을 사용해 새 워크플로우를 설정합니다.

![워크플로우 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192926/original/trhoweVKEWsarS92L9_mLcX6oECFxCQrFg.png?1737463916)

- **전송 및 완료:**
워크플로우가 트리거되면 서명자가 인보이스가 첨부된 문서를 받습니다.
- 서명 후 주 서명자는 즉시 결제를 위해 인보이스 페이지로 리다이렉트됩니다. 백업용으로 인보이스가 담긴 이메일도 발송됩니다.

![전송 및 완료 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192963/original/-5DIX_m1N7lwK76TblG97tZr_a23Zw9K3Q.png?1737463928)

![전송 및 완료 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192971/original/1VXEFDVxboVsHLyRxvqLUGI9qf5ZIczQNQ.png?1737463939)

![전송 및 완료 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040192978/original/62cCnKuHvRplJjDhOVXsERda4Hl4lYskiQ.png?1737463953)

![전송 및 완료 4](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040193092/original/Dq1GC8aTbjw7fxaRsQaIYV35IbibaoibJQ.png?1737464042)

- **결제 추적:**
Documents(문서) 섹션이나 Invoices(인보이스) 섹션에서 결제를 모니터링합니다.

## 자주 묻는 질문

### 문서에 결제 스케줄을 설정했는데 인보이스가 생성되지 않아요

이는 보통 결제 스케줄 날짜 중 하나가 인보이스 만료일을 지나갔을 때 발생합니다. 첫 번째 결제를 커스텀 날짜로 설정한 경우 자주 발생하는 문제입니다. 이를 방지하려면 첫 번째 결제를 "Upon primary signature(주 서명 시)"로 설정하여 스케줄이 올바르게 맞춰지도록 하고 인보이스가 생성될 수 있도록 해야 합니다.

---
*원문 최종 수정: Wed, 17 Dec, 2025 at 9:46 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*