---

번역일: 2026-04-07
카테고리: 08-결제 > 인보이스-견적
---

# 하이퍼클래스에서 인보이스 만드는 방법

인보이싱(인보이스 발행)은 모든 비즈니스에서 매우 중요한 부분입니다. 비용을 추적하는 데 도움이 되고, 수행한 작업에 대해 대금을 받을 수 있게 해줍니다. 시스템 내에서 쉽게 인보이스를 만들 수 있습니다.

이 가이드에서는 인보이스를 생성, 편집, 할인 적용, 세금 추가, 발송하는 방법을 다룹니다.

#### 이 가이드에서 다루는 내용:

#### [개요](#개요)
#### [새 인보이스 만드는 방법](#새-인보이스-만드는-방법)
#### [인보이스 정보 편집하는 방법](#인보이스-정보-편집하는-방법)
#### [인보이스에 세금 추가하는 방법](#인보이스에-세금-추가하는-방법)
#### [인보이스에 할인 추가하는 방법](#인보이스에-할인-추가하는-방법)
#### [인보이스 발송하는 방법](#인보이스-발송하는-방법)
#### [인보이스 상태 확인하는 방법](#인보이스-상태-확인하는-방법)
#### [거래 탭에서도 인보이스를 확인할 수 있습니다](#거래-탭에서도-인보이스를-확인할-수-있습니다)
#### [관련 도움말 문서](#관련-도움말-문서)

인보이스 개선 방안에 대한 의견: [피드백 양식](https://feedback.fastpymnts.com/submit-feedback)

## 개요

이제 하위 계정에서 생성한 상품을 사용하여 고객에게 인보이스를 발송할 수 있습니다.

참고사항:

Stripe Connect 없이 인보이싱을 사용하는 경우 이 가이드를 참조하세요 - [Stripe Connect 없이 수동 결제 기록용 인보이스 사용하기](common-uses-cases-for-payments-and-invoices.md)

Stripe Connect 없이 인보이싱을 사용할 때의 제한사항은 사용자가 결제를 수동으로 기록해야 한다는 점입니다.

## 새 인보이스 만드는 방법

- Payments(결제) 탭으로 가서 Invoice(인보이스) 탭을 클릭합니다
- "New" 버튼을 클릭하여 새 인보이스 생성을 시작합니다

![인보이스 생성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48295684124/original/o8JIhScbKsJJ4rdKJvjjJiTXG2vCbLNgTw.png?1683126566)

참고:

"+ New" 버튼 옆의 톱니바퀴 아이콘(주황색 화살표)을 클릭하여 전역 서비스 약관/메모를 추가할 수 있습니다.

## 인보이스 정보 편집하는 방법

**1단계**: 텍스트를 클릭하여 "발신인 정보"를 편집합니다. 클릭하면 해당 정보를 편집할 수 있습니다.

![발신인 정보 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189118323/original/i55oqo8Exy4InrVRO1VUgQx57NhlOppPBA.png?1644520846)

**2단계**: 이미지를 클릭하여 변경할 수 있습니다. 이렇게 하면 미디어 라이브러리가 열리고 거기서 새 이미지를 선택하거나 업로드할 수 있습니다.

![이미지 변경](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189118316/original/zNv44n1njtS4kJZj0FIdXI3d3w3WsMSxPQ.png?1644520844)

**3단계**: 고객을 추가하고 인보이스 번호, 발행일, 마감일을 편집할 수 있습니다.

![고객 정보 및 날짜 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189508034/original/a-GK6JrGcLypdBYpcF7Y0VWKD7uavRw8Bw.png?1644597978)

**4단계**: "add an item"을 클릭하여 Products(상품) 탭에서 생성한 상품을 추가합니다.

![상품 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189455786/original/_4cKxr4KtRAx0YNTl2KPA-urzKx0_ffnAg.png?1644590904)

**5단계**: 상품을 추가하면 가격과 수량을 편집할 수 있습니다.

![가격 및 수량 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189492869/original/TkJ3cuE2ZufmAewqLdQoDtZ9pe65giug8A.png?1644595130)

## 인보이스에 세금 추가하는 방법

**1단계**: "Tax Settings..."를 클릭합니다.

![세금 설정 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189495214/original/-r2mTlvPVoWwWEFBjJHOta2cwdBEvmj9rg.png?1644595523)

**2단계**: "Add Tax"를 클릭합니다.

![세금 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189495388/original/dQmDYh8f6NAFbwackNAKS_qJqsDENnIONQ.png?1644595576)

**3단계**: "Add Tax"를 클릭하고 다음 정보를 입력합니다:

- 세금 이름 추가
- 세율을 %로 추가
- 설명 또는 세금 ID 번호 추가

![세금 정보 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189495624/original/C4Q95tLGsljhjp2mV8Dutw-0HbYCXAY70g.png?1644595622)

![세금 설정 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48190165380/original/5E6d3iPNV1ePefWLE5W9riolA5FTH41tBQ.png?1644875572)

## 인보이스에 할인 추가하는 방법

"add discount" 아이콘을 클릭하여 이 인보이스에 할인을 추가할 수 있습니다.

![할인 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189503863/original/cSNM76KK-kDKkqMW9OTm_BkzJ1M6dINjpw.png?1644597092)

## 인보이스 발송하는 방법

**1단계**: 인보이스를 생성한 후 우측 상단의 녹색 버튼을 사용하여 고객에게 발송할 수 있습니다.

![인보이스 발송 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189118315/original/lrBLj06j7mN3tZaqF3R1ZCpbGewMiPxRxw.png?1644520844)

**2단계**: 원하는 대로 이메일과 문자로 인보이스를 발송할 수 있으며, 테스트 모드로도 발송할 수 있습니다.
고급 옵션을 클릭하여 라이브 모드와 테스트 모드 간에 전환할 수 있습니다.

![발송 옵션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189508144/original/dMdDQH7FdcMqn9kpDzIdmFBwoyGyn2rF9w.png?1644598007)

## 인보이스 상태 확인하는 방법

**1단계**: Invoices(인보이스) 탭으로 가면 인보이스 목록과 그 상태를 볼 수 있습니다.

**2단계**: 상태와 날짜 범위로 인보이스를 필터링할 수도 있습니다.

![인보이스 상태 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48295684580/original/a-rTtlcGha6FfQwNGP6l-OG_vK70hsLFwQ.png?1683126642)

## 거래 탭에서도 인보이스를 확인할 수 있습니다

인보이스 관련 성공 또는 실패 거래를 찾을 수 있습니다. 인보이스를 직접 열 수도 있습니다.
Payments(결제) > Transactions(거래)

![거래 탭에서 인보이스 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189514063/original/9hVpI6UpRIiXpr4udM0BzxMRzfLRyAmrsw.png?1644598898)

참고:

Transactions(거래) 탭은 새로운 UI에서만 사용할 수 있습니다.

---

## 관련 도움말 문서

[결제 및 인보이스의 일반적인 사용 사례](common-use-cases-for-payments-and-invoices.md)

하이퍼클래스에서 인보이스 만드는 방법 (모바일 앱)

[정기 인보이스 만드는 방법](how-to-create-and-manage-recurring-invoices-in-highlevel.md)

[정기 템플릿에서 자동 결제](auto-payments-in-recurring-templates.md)

---
*원문 최종 수정: Mon, 21 Jul, 2025 at 7:45 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*