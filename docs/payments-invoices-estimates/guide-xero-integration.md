---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000007180-guide-xero-integration
번역일: 2026-04-23
카테고리: payments-invoices-estimates
---

# Xero 연동 가이드

## 개요

Xero 연동은 CRM의 연락처와 인보이스를 Xero로 자동 동기화하여 수동 회계 업무를 줄이고 두 시스템 간 일관성을 보장합니다. 정확한 세금 매핑, 다중 통화 지원, 실시간 인보이스 업데이트를 통해 재무 워크플로우를 효율화하여 비즈니스 운영에 집중할 수 있습니다. Xero 연동은 CRM에서 Xero로 인보이스를 전송하는 단방향 동기화를 제공합니다. Xero에서 CRM으로 연락처를 가져와 인보이스를 올바르게 매칭할 수 있습니다. 동기화 시점에 일치하는 연락처를 찾을 수 없으면 Xero에 새 연락처가 자동으로 생성됩니다.

# 현재 동기화되는 항목

### 연락처 (Xero → CRM)

- Xero의 활성 연락처가 설정 시 CRM으로 가져옵니다.
- 인보이스를 동기화할 때 일치하는 연락처를 찾을 수 없으면 시스템이 Xero에 새 연락처를 자동으로 생성합니다.

### 인보이스 (CRM → Xero)

CRM에서 인보이스를 생성하면 다음 정보가 Xero로 동기화됩니다:

- 연락처 매핑
- 라인 아이템(이름, 수량, 가격, 할인)
- 세금
- 통화
- 상태 업데이트(발송됨, 부분 결제됨, 무효)

참고: 상품/아이템은 Xero에 생성되지 않으며, 라인 아이템은 인보이스에만 존재합니다.

### 세금

시스템이 자동으로 올바른 세율을 적용합니다:

- Xero에 세금이 존재하는 경우 → 사용합니다.
- 세금이 존재하지 않는 경우 → 동기화 중에 Xero에 생성합니다.

### 통화

- 인보이스 통화가 Xero로 전달됩니다.
- 존재하지 않는 경우 Xero 조직에 추가됩니다.
- Xero 플랜에 다중 통화 지원이 포함되어 있는지 확인하세요.

### 상태

CRM이 다음과 같은 인보이스 상태를 동기화합니다:

- 발송됨
- 결제 완료
- 부분 결제됨
- 무효

# 동기화되지 않는 항목

❌ 영수증: 영수증 동기화는 아직 지원되지 않습니다(곧 출시 예정).

❌ 상품/아이템 카탈로그: 라인 아이템은 인보이스 수준에서만 동기화됩니다. Xero에서는 상품 레코드가 생성되지 않습니다.

# Xero 연동의 주요 장점

CRM에서 Xero 연동을 사용하면 다음과 같은 이점이 있습니다:

### 시스템 간 연락처 정확성 유지

연락처가 자동으로 동기화되고, 인보이스 동기화 중에 새 연락처를 즉시 생성할 수 있습니다.

### 인보이스 생성 자동화

CRM에서 생성한 인보이스가 Xero에 즉시 나타나므로 수동으로 복제할 필요가 없습니다.

### 일관된 세금 규칙 유지

다중 구성 요소 세금 구조에서도 세금을 정확하게 매핑합니다.

### 인보이스 상태 동기화

CRM의 상태 변경이 Xero에 반영되어 대사 업무가 줄어듭니다.

### 정확한 다중 통화 지원

필요에 따라 통화가 자동으로 적용되고 추가됩니다.

### 게시용 계정 필터링 및 선택

인보이스용 기본 계정을 선택할 때 결제가 활성화된 계정만 표시됩니다.

# Xero 연동 설정 방법

### 1단계: Xero 연동으로 이동

CRM에서 Settings(설정) → Integrations(연동) → Xero로 이동합니다.

![Settings에서 Integrations로 이동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060606613/original/SoMdFLSTW0etwxWQ5eSzZW5zKt8sJ2dcwQ.png?1765793695)

![Xero 연동 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060606625/original/d5Mk3ADw17F7kHh6j6irOgJsCQRFE2YEhw.png?1765793706)

### 2단계: Xero에 연결

Xero 연동 타일을 클릭한 다음 Connect(연결)를 선택합니다. 보안 Xero 인증 창이 열립니다.

### 3단계: 로그인 및 액세스 승인

- Xero 계정에 로그인합니다(메시지가 표시되는 경우).
- 연결할 조직을 선택합니다.
- Allow Access(액세스 허용)를 클릭하여 연결을 승인합니다.

![Xero 인증 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060606649/original/iD9PINc4Wtxjphq-kdzkWRLCk77JHULUdA.png?1765793719)

CRM이 연락처를 읽고 인보이스 거래를 생성하는 데 필요한 표준 권한을 요청합니다.

### 4단계: 기본 계정 선택

연결 후 인보이스를 게시할 Xero 계정을 선택합니다. 결제가 활성화된 계정만 표시됩니다.

![기본 계정 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060606676/original/jlhaYEaKCnD2kuz8RTy9TvRUOigE78vk3w.png?1765793735)

# 계정 과목표(Chart of Accounts) 사용 활성화 방법

연결 후 CRM에서 계정 과목표가 보이지 않으면 Xero에서 다음 단계를 따르세요:

더 자세한 내용: [https://help.leadconnectorhq.com/support/solutions/articles/155000006216-how-to-view-all-chart-of-accounts-within-the-xero-integration-](https://help.leadconnectorhq.com/support/solutions/articles/155000006216-how-to-view-all-chart-of-accounts-within-the-xero-integration-)

### 1. Xero에서 Settings로 이동

Xero 대시보드에서 조직을 선택 → Settings(설정)를 클릭합니다.

![Xero 설정 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060606786/original/n2z5aJiRoOHrtj1Ug6Cje4GoQ3jN9vkChQ.png?1765793756)

### 2. 고급 설정 열기

스크롤하여 Looking for advanced settings?(고급 설정을 찾고 계신가요?)를 선택합니다.

![고급 설정 링크](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060606821/original/Ez9KsswLWmYfaTeflSn5YOP7o3wTDFi1nQ.png?1765793767)

### 3. Chart of Accounts 선택

Advanced Accounting(고급 회계) → Chart of Accounts(계정 과목표)로 이동합니다.

![계정 과목표 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060606828/original/r7Z94sqfyhid5T5N4t_EXE-YmS035wOH2g.png?1765793774)

### 4. 계정 선택

사용할 계정(예: Prepayments)을 선택합니다.

![계정 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060606856/original/xQeT9CSaKoII4D1mODBER9UaU_L6vQ6s1g.png?1765793786)

### 5. 결제 활성화

계정 설정 팝업에서:

- Enable payments to this account(이 계정에 대한 결제 활성화)에 체크합니다.

그런 다음 Save(저장)를 클릭합니다.

![결제 활성화 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060606866/original/KRH7qH4G_UumtbeEfgsBTkTarLjSuY4BXA.png?1765793799)

### 6. CRM으로 돌아가기

활성화한 계정이 이제 연동 구성 시 선택할 수 있게 됩니다.

![활성화된 계정 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060606879/original/m9YNM_usiqJqAaajYQYVWLdSAr-cLyfUEg.png?1765793813)

# 연동 작동 방식

## 1. 연락처 가져오기 (Xero → CRM)

연동이 연결되면:

- Xero의 활성 연락처가 자동으로 CRM에 가져옵니다.
- 가져온 연락처가 올바른 인보이스 매핑을 보장합니다.
- 인보이스 동기화 중에 일치하는 연락처를 찾을 수 없으면 시스템이 Xero에서 직접 생성합니다.

## 2. 인보이스 동기화 (CRM → Xero)

인보이스를 생성하거나 발송할 때:

시스템이 다음 내용이 포함된 인보이스를 Xero에 게시합니다:

### 연락처 정보

가져온 연락처와 매칭되거나 누락된 경우 Xero에서 자동으로 생성됩니다.

### 라인 아이템

아이템 이름, 금액, 수량, 할인을 포함합니다. (상품/아이템은 Xero에 생성되지 않습니다.)

### 세금 매핑

- 일치하는 기존 Xero 세율이 사용됩니다.
- 필요한 경우 새 세율이 생성됩니다.

### 통화

인보이스 통화가 Xero로 전송됩니다. 활성화되지 않은 경우 시스템이 추가합니다(Xero 다중 통화 플랜 필요).

## 3. 설계상 범위 외 항목

- 영수증 동기화 없음
- 아이템 카탈로그 동기화 없음
- 영수증 PDF나 비용 동기화 없음
- 재고 또는 상품 관리 없음

## 4. 연결 해제 및 모범 사례

- Xero에서 고급 추적 카테고리나 전문 수익 계정을 사용하는 경우 기본 인보이스 게시 계정을 신중하게 설정하세요.
- Xero 유효성 검사 오류를 방지하기 위해 은행 계정을 인보이스 라인 아이템에 매핑하지 마세요.
- 연동이 연결 해제되면 Settings(설정) → Integrations(연동) → Xero를 통해 다시 연결하세요.

# 자주 묻는 질문

### Q: 단방향 동기화인가요, 양방향 동기화인가요?

단방향입니다. 연락처는 Xero에서 CRM으로 가져오고, 인보이스는 CRM에서 Xero로 동기화됩니다.

### Q: Xero에 새 연락처가 생성되나요?

예. 일치하는 연락처가 없으면 인보이스 동기화 중에 CRM이 Xero에 새 연락처를 생성합니다.

### Q: 상품/아이템이 Xero로 동기화되나요?

아니요. 라인 아이템은 인보이스에만 나타나며 상품 카탈로그 항목은 생성되지 않습니다.

### Q: 세금은 어떻게 처리되나요?

- 일치하는 세금은 기존 Xero 세율을 사용합니다.
- 일치하지 않는 세금은 Xero에서 자동으로 생성됩니다.

### Q: 통화는 어떻게 처리되나요?

CRM이 인보이스 통화를 Xero로 전달하고 필요에 따라 조직에 통화를 추가합니다. Xero 플랜이 다중 통화를 지원하는지 확인하세요.

### Q: 영수증이 동기화되나요?

현재는 아닙니다.

### Q: 하나의 CRM 계정에 여러 Xero 조직을 연결할 수 있나요?

현재는 불가능합니다. 각 CRM 계정은 단일 Xero 조직에 연결됩니다.

### Q: 연동을 관리하거나 연결 해제하려면 어디로 가야 하나요?

Settings(설정) → Integrations(연동) → Xero로 이동합니다.

### Q: "Organisation is not subscribed to currency XXX" 오류는 무엇을 의미하나요?

인보이스 통화가 Xero에서 활성화되지 않았을 때 나타납니다. Xero 플랜에서 다중 통화를 활성화하거나 특정 통화를 활성화하세요.

### Q: 연결 해제 후 다시 연결하려면 어떻게 하나요?

Settings(설정) → Integrations(연동) → Xero로 돌아가서 Connect(연결)을 다시 클릭하여 인증하세요.

---
*원문 최종 수정: Mon, 15 Dec, 2025 at 4:17 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*