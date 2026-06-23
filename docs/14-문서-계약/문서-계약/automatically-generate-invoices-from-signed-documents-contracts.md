---

번역일: 2026-04-08
카테고리: 14-문서-계약 > 문서-계약
---

# 서명된 문서 및 계약에서 자동으로 인보이스 생성하기

[](https://ideas.hyperclass.ai/changelog/2-in-1-documents-direct-invoice-payments-after-signing)

# 문서 서명과 동시에 결제를 받는 방법

고객이 문서 서명과 결제를 한 번의 흐름으로 완료할 수 있도록 만드세요.

1. 상품 목록 추가 → 직접 결제(Direct Payments) 활성화 → 문서 발송 → 사용자가 서명하면 인보이스로 즉시 리다이렉트

## **새 문서에서 발송하기**

- **결제(Payments) › 문서 및 계약(Documents & Contracts) › 새 문서(New Document)**로 이동하세요.

![새 문서 생성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051365192/original/Vc1wvMN6oETE-ZfL0WmBUl5YOBBL-lyvyw.png?1754927243)

- **주 서명자(Primary signer)**를 추가하세요.

![주 서명자 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051366150/original/yOa2RSTtVxoTgsulKr-slgKZelwoZszJ2g.png?1754927718)

- 상품 목록을 추가하세요. 항목 유형에 따라 목록이 **일회성(One‑time)** 또는 **정기결제(Recurring)**로 결정되며, **태그**는 자동으로 표시됩니다.

![상품 목록 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051366166/original/JCxJUNJo-GPfNfUveyySJsp7N7q-NHoV3A.png?1754927734)

일회성 상품이 추가되면 인보이스 유형이 일회성으로 설정됩니다.

- 상품을 선택하고 필요에 따라 선택 항목으로 변경하거나 우측 속성 섹션에서 수량을 편집 가능하게 만들 수 있습니다.

- 좌측의 결제(Payments) 섹션에서 필요에 따라 설정을 구성할 수 있습니다.

![결제 설정 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051366432/original/bhM_qquIzDeGHIaeNvYDXLWPjyCP0u23cQ.png?1754927827)

![추가 결제 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051366606/original/jTxRkj0ltdrXRljZlzTpKmYOovynXZ20xA.png?1754927890)

- 상품 목록에 하나 이상의 정기결제 상품이 추가되면 인보이스 유형이 정기결제로 변경됩니다. 하나의 문서는 하나의 정기결제 주기만 가질 수 있으며, 좌측의 인보이스 빈도 설정에서 선택할 수 있습니다.

![정기결제 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051366786/original/3I3qx7U4b4K_DFgdFusKaZgxiZVMbtJN8A.png?1754928032)

![인보이스 빈도 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051366803/original/kYuN_Ssu2furPuvhpj6ug9l1pn1EcDxEtw.png?1754928047)

- 필요한 설정을 선택하세요 (아래 **설정** 섹션에서 자세한 내용 확인):

**직접 결제(Direct Payment)** — 켜기: 서명 시 인보이스가 존재하면 주 서명자를 **서명 후** 결제 페이지로 리다이렉트합니다.

- **인보이스 발송(Send Invoice)** — 켜기: 인보이스 생성 시(서명 시 또는 일정에 따라) 이메일로 발송합니다.

- **자동 결제(Auto‑Payment)** — 켜기: 향후 정기 인보이스를 자동으로 결제합니다.

- 테스트 vs 실제 결제는 결제 설정에 의해 제어됩니다(문서 및 계약 템플릿 설정이 아님).

- 문서를 발송하세요.

- **서명 시 일어나는 일**

**일회성**: 주 서명자가 **인보이스로 리다이렉트**되어 즉시 결제합니다.

- **정기결제(시작 = 서명 시)**: 주 서명자가 첫 번째 인보이스로 **리다이렉트**되어 즉시 결제합니다.

- **정기결제(시작 = 나중에)**: 서명 시 리다이렉트 없음. 첫 번째 인보이스는 일정에 따라 생성/발송됩니다.

- **주 서명자**만 리다이렉트됩니다. 다른 서명자는 단순히 서명만 합니다. 활성화된 경우 인보이스 이메일도 발송됩니다.

![서명 완료 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051377741/original/FhMDhzp-cjaHCYGpgeMe2J7kWShDM-7Kfw.png?1754936621)

![결제 리다이렉트 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051377746/original/DMsUuq7mMmekdg22i3kkmQ0eY48hKef_cg.png?1754936635)

![결제 완료 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051377750/original/sB6OGo-MXbkH1NKMODO-DsO_q2rRCSntPQ.png?1754936646)

---

## **설정**

### 직접 결제(Direct Payment)

- **켜기**: 서명 시 인보이스가 존재하면 **주 서명자**가 서명 즉시 인보이스 페이지로 리다이렉트되며, 인보이스 이메일도 발송됩니다.

- **끄기**: 리다이렉트 없음. 결제자는 이메일로 받은 인보이스를 사용하거나, 나중에 초안에서 발송하세요.

### 인보이스 발송(Send Invoice)

- **켜기**: 인보이스 생성 시(서명 시 또는 일정에 따라) 자동으로 이메일을 발송합니다.

- **끄기**: 인보이스를 **초안**으로 유지하여 검토 후 수동으로 발송할 수 있습니다.

### 자동 결제(Auto‑Payment)

- **켜기**: 카드를 저장하고(지원하는 게이트웨이) 정기 일정 또는 결제 일정이 있는 후속 인보이스를 **자동으로 결제**합니다.

- **끄기**: 결제자가 발행된 각 인보이스를 수동으로 결제합니다.

자동 결제는 정기 일정에 영향을 미칩니다. 일회성은 즉시 결제 중에 결제됩니다.

### 실제 모드(Live Mode) (참/거짓)

- 문서 및 계약 템플릿에는 실제 모드 토글이 포함되어 있지 않습니다. 테스트가 필요한 경우 테스트/실제 모드를 지원하는 결제 경험(예: 인보이스 또는 결제 링크)이나 게이트웨이의 테스트 설정을 사용하세요.

---

## 2 in 1 문서 자동화 방법: 템플릿으로 저장하고 '문서 및 계약 발송' 액션으로 자동화하기

- **결제(Payments) › 문서 및 계약(Documents & Contracts) › 템플릿(Templates) › 새 템플릿(New Template)**으로 이동하세요.

- **서명(Signature)** 필드를 삽입하고 **상품 목록 추가(Add Product List)**(유형 + 태그 자동)하세요.

- 정기결제의 경우 일정이 시작되는 **시점**을 선택하세요: **서명 시** 또는 **미래 날짜/요일**.

- 필요에 따라 직접 결제, 인보이스 발송, 자동 결제를 설정하세요.

- 템플릿을 저장하세요.

![템플릿 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051377851/original/8YcFgpdyieAbTCU_6H9pvaF3n-Ltf8qtmA.jpeg?1754936733)

- **워크플로우(Workflows)** → 액션 추가: 문서 및 계약 발송 → 템플릿 선택을 열어주세요. 워크플로우가 트리거되면 서명자가 문서를 받습니다. 주 사용자가 문서에 서명하면 직접 결제가 활성화된 경우 인보이스로 리다이렉트됩니다.

![워크플로우 액션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051377889/original/d5kwC0KoHoruWVoaZv12ywCt9yS0UcPzIQ.jpeg?1754936745)

![워크플로우 템플릿 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051377931/original/IfaA7MfDcYDTmeQN6G5ejMZOkqkCUNNXVg.jpeg?1754936845)

- **서명 시 일어나는 일** (동일한 규칙):

**일회성** 또는 **정기결제(시작 = 서명 시)** → 주 서명자를 결제로 **리다이렉트**합니다.

- **정기결제(시작 = 나중에)** → **리다이렉트 없음**. 첫 번째 인보이스는 일정에 따라 도착합니다.

---

## 추적

- **결제(Payments) › 문서 및 계약(Documents & Contracts)**: 문서 + 서명 + 결제 상태를 한 곳에서 확인할 수 있습니다.

- **결제(Payments) › 인보이스(Invoices)**: 각 인보이스 기록과 결제 상태(정기 일정 진행 상황 및 자동 결제 결과 포함)를 확인할 수 있습니다.

---

## **팁 & 특수 상황**

- **주간 예시**: 일정이 **매주 목요일**이고 서명이 목요일에 완료되면 첫 번째 인보이스가 **즉시** 생성되어 리다이렉트가 적용됩니다. 그렇지 않으면 첫 번째 인보이스는 **다음 목요일**에 발송됩니다.

- **여러 수신자**: **주 서명자**만 결제로 리다이렉트됩니다.

- **설정 수수료**: 첫 번째 인보이스에 **일회성** 항목으로 표시되며, 정기 항목만 계속됩니다.

- **항목 혼합**: 일회성 항목은 첫 번째 인보이스에 청구되고, 정기 항목은 일정을 따릅니다.

## 자주 묻는 질문

- **고객이 서명 후 리다이렉트되지 않은 이유는?**
**직접 결제**가 꺼져 있거나, **서명 시** 인보이스가 없었기 때문입니다(예: 정기결제가 나중에 시작). 직접 결제를 활성화하고, 정기결제의 경우 시작을 **서명 시**로 설정하세요.

- **진행 상황은 어디서 추적하나요?**
**문서 및 계약**(문서 수준 상태)과 **인보이스**(인보이스/결제 상태, 일정, 자동 결제 결과)에서 확인할 수 있습니다.

- **일회성과 정기결제 항목을 섞을 수 있나요?**
네. 상품 목록 태그가 유형을 표시합니다. 일회성은 먼저 청구되고, 정기결제는 일정에 따라 계속됩니다.

- **문서에 결제 일정이 있었는데 인보이스가 생성되지 않았어요**
이는 보통 결제 일정 날짜 중 하나가 인보이스 만료일을 넘어갔을 때 발생합니다. 첫 번째 결제를 커스텀 날짜로 설정했을 때 자주 발생합니다. 이를 방지하려면 첫 번째 결제를 "주 서명 시"로 설정하여 일정이 올바르게 맞춰지고 인보이스가 생성될 수 있도록 하세요.

- **문서 및 계약 템플릿에서 "테스트 모드"로 인보이스를 보낼 수 있나요?**
문서 및 계약 템플릿에는 "실제 모드" 토글이 포함되어 있지 않습니다. 테스트 결제를 실행하려면 테스트/실제 모드를 지원하는 결제 흐름(결제 링크나 인보이스 발송 옵션 등)이나 게이트웨이의 테스트 설정을 사용하세요.

---
*원문 최종 수정: Wed, 4 Mar, 2026 at 3:11 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*