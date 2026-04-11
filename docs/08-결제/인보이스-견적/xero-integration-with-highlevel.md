---

번역일: 2026-04-07
카테고리: 08-결제 > 인보이스-견적
---

# Xero 연동 가이드

이 문서에서는 Hyperclass와 Xero 간에 연락처와 인보이스(청구서)를 자동으로 동기화하여 재무 업무 흐름을 간소화하는 결제(Payments) - Xero 연동(Integration) 기능을 설명합니다. 실시간 업데이트와 정확한 세금 매핑을 통해 수동 작업을 줄이고 시스템 간 데이터 일관성을 보장합니다.

---

**목차**

- [Xero 연동이란](#xero-연동이란)
- [결제 - Xero 연동의 주요 장점](#결제-xero-연동의-주요-장점)
- [Xero 연동 설정 방법](#xero-연동-설정-방법)
- [작동 방식](#작동-방식)
- [자주 묻는 질문](#자주-묻는-질문)
---

## Xero 연동이란

Xero 연동을 통해 Hyperclass에서 Xero로 인보이스를 단방향 동기화할 수 있습니다. 먼저 Xero에서 Hyperclass로 연락처를 가져와서 Hyperclass에서 생성한 인보이스가 동기화될 때 올바른 Xero 연락처와 매핑되도록 합니다. 일치하는 연락처가 없으면 인보이스 동기화 중에 Xero에서 새 연락처가 생성됩니다.

현재 동기화되는 항목

- **연락처**: Xero → Hyperclass로 가져와서 매핑용으로 사용. 일치하는 연락처가 없으면 인보이스 동기화 시 새 Xero 연락처 생성
- **인보이스**: Hyperclass에서 생성한 모든 인보이스가 Xero에 자동으로 생성됩니다. 라인 항목과 할인이 생성된 인보이스에 포함됩니다. 상품/항목은 Xero에서 생성되지 않으며, 라인 항목은 인보이스에만 남아있습니다.
- **세금**: 매핑된 세금이 Xero에 이미 있으면 적용되고, 없으면 새 세율이 생성되어 인보이스와 함께 전송됩니다.
- **통화**: 인보이스 통화가 Xero로 전달되며, 존재하지 않으면 조직에 새 통화가 추가됩니다. (Xero 플랜에서 다중 통화를 지원하는지 확인하세요.)
- **상태**: 인보이스 상태가 변경되면 상태가 Xero로 동기화됩니다. 예: 발송됨, 부분 결제됨, 무효

동기화되지 않는 항목

- **영수증**: 영수증 동기화는 이 연동에 포함되지 않습니다. 곧 제공될 예정입니다.

### **플로우 다이어그램**

![Xero 연동 플로우 다이어그램](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052075397/original/JBkgecCQkPnRuEeHkRTHVxGZqjTegX8jyw.png?1755774291)

## **결제 - Xero 연동의 주요 장점**

이 연동을 활용하면 재무 운영의 효율성과 정확성을 향상시킬 수 있습니다. 주요 장점은 다음과 같습니다:

- 새로운 또는 업데이트된 연락처 자동 동기화로 정확한 기록 유지
- Hyperclass에서 Xero로 최신 결제 상태와 세금 세부사항이 포함된 인보이스 즉시 전송
- 다중 구성 요소 세금 구조에서도 정확한 세금 매핑을 통한 규정 준수 보장
- 결제가 활성화된 계정만 표시하도록 필터링하여 데이터를 관련성 있고 체계적으로 유지

---

## **Xero 연동 설정 방법**

Hyperclass 하위 계정을 Xero에 연결하는 것은 간단하며, 모든 재무 데이터가 플랫폼 간에 원활하게 흐르도록 보장합니다. 다음 단계에 따라 연동을 설정하세요:

### **1단계:** 연동(Integrations) 하위의 Xero로 이동

왼쪽 네비게이션에서 Settings(설정) → Integrations(연동) → Xero를 클릭합니다.

![연동 메뉴에서 Xero 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052070129/original/uzX2jg7WfM2yiVPnqkjVRQoGzHr2W1LUTQ.png?1755771800)

### **2단계:** Xero 선택

연동 목록에서 Xero 타일을 클릭한 후 Connect(연결)를 선택합니다. 이렇게 하면 인증을 위한 안전한 Xero 창이 열립니다.

![Xero 연결 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056907154/original/GBLAjHNNQejAbp4YrY-Jv0nGdybkIU65Xg.png?1761568772)

### **3단계:** 로그인 및 인증

Xero에 로그인하고(메시지가 표시되는 경우), 연결할 Xero 조직을 선택한 후 Allow access(액세스 허용)를 클릭합니다. (Hyperclass는 연락처/설정 읽기 및 인보이스 거래 생성을 위한 표준 범위를 요청합니다.)

![Xero 인증 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056907424/original/8VgcvzeiTBD-50UXRDzPwJg_wVeCAgjqQw.png?1761568913)

**팁**: 연결이 완료되면 Hyperclass에서 연결 확인하기
Hyperclass로 돌아가면 Integrations(연동) → Xero에서 연결된 조직 이름과 연결 상태를 볼 수 있습니다.

### **4단계:** 인보이스용 기본 계정 선택

Hyperclass 내의 Xero 설정 패널에서 인보이스를 게시할 때 사용할 계정과 조직을 선택합니다.

![기본 계정 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056907699/original/NLtmmZwE-jGy0o-SBZJ8xhQgIb4Ll05NMQ.png?1761569114)

---

### Xero 연동에서 모든 "계정 차트" 보는 방법은?

Xero 연결 후 CRM에서 계정 차트를 볼 수 없다면 다음 단계에 따라 활성화하세요.

### 1단계: Xero에서 설정으로 이동

Xero 대시보드에서 조직을 선택합니다. 드롭다운 메뉴에서 Settings(설정)을 클릭합니다.

![Xero 설정 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052650525/original/V5GhObE_hP5_jtSQfOGHz_Df4wQG6oq4kA.jpeg?1756455179)

### **2단계:** 고급 설정 열기

Organization settings(조직 설정)에서 아래로 스크롤하여 Looking for advanced settings?(고급 설정을 찾고 계신가요?)를 클릭합니다.

![고급 설정 링크](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052650526/original/MhNDbxF8re4TyogB_DPkIF42Qmp7uGR6Vw.jpeg?1756455179)

### **3단계:** 계정 차트 접근

Advanced Accounting(고급 회계) 하위에서 Chart of accounts(계정 차트)를 클릭합니다.

![계정 차트 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052650522/original/2UkCixPoVD7z-HbBP0KYMuNZaXTkh4uZHg.jpeg?1756455177)

### **4단계:** 관련 계정 선택

계정 목록에서 연결하려는 계정(예: Prepayments)을 선택합니다. 이 계정의 세부사항을 편집하려면 클릭합니다.

![계정 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052650524/original/GIwnfvHXPPSP2RiQqNVc7zkEJj9MiX0REw.png?1756455179)

### **5단계:** 계정에 결제 활성화

편집 팝업에서:

- ✅ Enable payments to this account(이 계정에 결제 활성화)에 체크
- Save(저장) 클릭

![결제 활성화 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056908925/original/Z6KxVG9-8cbq0f2T_cStKfqrLuBhjnEQmA.png?1761569654)

### **6단계:** CRM에 연결

CRM의 Xero 연동으로 돌아갑니다. Connected Account(연결된 계정) 하위에서 방금 활성화한 계정(예: Prepayments)을 선택합니다.

![CRM에서 계정 연결](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052650515/original/l3sp-IJO5kkUzVlecULoxkFCCguDQTI-yw.jpeg?1756455174)

완료되면 계정 차트가 이제 CRM에서 표시되고 사용할 준비가 됩니다.

## **작동 방식**

### 1. 연락처 가져오기 (Xero → Hyperclass)

- 연결 시 Hyperclass는 활성 Xero 연락처(핵심 프로필 세부사항)를 가져와서 향후 인보이스가 올바른 연락처와 매핑되도록 합니다.
- 나중에 인보이스를 동기화할 때 가져온 연락처와 일치하는 것이 없으면, Hyperclass가 인보이스 동기화 중에 Xero에서 연락처를 자동으로 생성합니다.

### 2. 인보이스 동기화 (Hyperclass → Xero)

Hyperclass에서 인보이스를 생성/발송하고 Sync to Xero(Xero에 동기화)를 선택하면, Hyperclass가 연결된 Xero 조직에 다음 사항이 포함된 인보이스를 게시합니다:

- **연락처**: 가져온/매칭된 Xero 연락처 또는 존재하지 않으면 새 Xero 연락처 생성
- **라인 항목**: 이름, 수량, 금액, 할인이 인보이스에 전송됩니다. 상품/항목은 Xero에서 생성되지 않습니다.
- **세금**:
  - 매핑된 세금이 Xero에 이미 있으면 기존 세율이 적용됩니다.
  - 없으면 Hyperclass가 즉석에서 세율을 생성하여 인보이스에 사용합니다.
- **통화**:
  - 인보이스 통화가 Xero로 전달됩니다.
  - 해당 통화가 활성화되지 않았으면 Hyperclass가 인보이스 게시 전에 Xero 조직에 추가/활성화합니다. (Xero 플랜에서 다중 통화를 지원하는지 확인하세요.)

### 3. 의도적으로 범위에 포함되지 않은 항목

- **영수증 동기화 없음**: 영수증/비용 항목(또는 영수증 PDF)은 이 연동으로 동기화되지 않습니다.
- **항목 카탈로그 동기화 없음**: Hyperclass는 Xero에서 상품/항목을 생성하거나 관리하지 않습니다. 라인 항목은 인보이스에 포함된 상태로 유지됩니다.

### 4. 연결 해제

![연결 해제 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052070896/original/e32i-hdj1zBlLo94muGsFohu90_8DE5PGg.png?1755772154)

**모범 사례**: Xero에서 회계 전용 추적 카테고리나 맞춤 수익 계정을 사용하는 경우, Hyperclass의 Xero 설정에서 기본 계정 매핑을 신중하게 설정하고, Xero 유효성 검증 오류를 방지하기 위해 은행 계정을 라인 항목에 매핑하는 것을 피하세요.

## **자주 묻는 질문**

**Q. 단방향 동기화인가요, 양방향 동기화인가요?**
단방향입니다. 연락처는 Xero에서 Hyperclass로 매핑용으로 가져오고, 인보이스는 Hyperclass에서 Xero로 동기화됩니다.

**Q. Hyperclass가 Xero에서 새 연락처를 생성하나요?**
네—인보이스의 고객이 가져온 연락처와 일치하지 않으면, Hyperclass가 동기화 시점에 Xero에서 연락처를 생성합니다.

**Q. 상품/항목이 Xero에서 생성되나요?**
아니요. 라인 항목은 인보이스에만 게시되며, 상품/항목은 Xero에서 생성되거나 유지되지 않습니다.

**Q. 세금은 어떻게 처리되나요?**
매핑된 세율이 Xero에 이미 있으면 사용됩니다. 존재하지 않으면 Hyperclass가 세율을 생성하여 인보이스에 적용합니다.

**Q. 통화는 어떻게 처리되나요?**
Hyperclass가 인보이스 통화를 Xero로 전달하고, 아직 활성화되지 않았으면 조직에 추가합니다. Xero 조직에서 다중 통화를 지원하는지 확인하세요.

**Q. 영수증이 동기화되나요?**
아니요. 영수증 동기화는 이 연동에 포함되지 않습니다.

**Q. 하나의 Hyperclass 계정에 여러 Xero 조직을 연결할 수 있나요?**
이 버전에서는 불가능합니다. 하나의 Hyperclass 계정/인스턴스는 한 번에 하나의 Xero 조직에 연결됩니다. 에이전시/화이트라벨은 각 하위 계정을 별도의 Xero 조직에 개별적으로 연결할 수 있습니다.

**Q. 연결을 어디서 관리하나요?**
Hyperclass의 Settings(설정) → Integrations(연동) → Xero로 이동하여 연결된 조직 이름을 확인하고, 상태를 점검하며, 필요에 따라 연결 해제/재연결할 수 있습니다.

**Q. "Organisation is not subscribed to currency XXX." 오류를 받았습니다. 어떻게 해야 하나요?**
이는 인보이스 통화가 Xero 조직에서 활성화되지 않았을 때 발생합니다. Xero에서 다중 통화를 활성화하고 다시 시도하거나, 조직에서 해당 통화를 허용하는지 확인하세요. 사용 가능해지면 Hyperclass가 동기화의 일부로 통화를 전달하고 생성합니다.

**Q. 연결을 해제했습니다. 어떻게 다시 연결하나요?**
Settings(설정) → Integrations(연동) → Xero로 돌아가서 Connect(연결)를 클릭하여 다시 인증하고 조직을 선택하세요.

**Q. Xero 연결 전에 생성한 인보이스가 자동으로 동기화되나요?**
아니요. 일반적으로 Xero 연동 후에 생성한 인보이스만 자동으로 동기화됩니다.

---
*원문 최종 수정: Mon, 9 Feb, 2026 at 11:05 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*