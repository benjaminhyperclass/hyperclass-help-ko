---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000007178-guide-setting-up-the-quickbooks-integration
번역일: 2026-04-23
카테고리: payments-invoices-estimates
---

# QuickBooks 연동 설정 가이드

## QuickBooks 연동이 무엇을 해주나요?

QuickBooks 연동은 CRM과 QuickBooks 사이에 원활한 연결을 만들어, 고객 데이터, 인보이스, 결제가 수동 작업 없이 자동으로 동기화되도록 해줍니다.

## CRM → QuickBooks

### 1. 고객 자동 생성 또는 업데이트

CRM 내에서 결제 가능한 활동에 참여할 때마다 QuickBooks에 고객이 자동으로 생성됩니다. QuickBooks에 같은 이메일이 이미 존재하는 경우, 중복 생성 대신 기존 고객 정보가 업데이트됩니다.

### 2. 결제 활동을 매출 영수증으로 동기화

주문 폼, 구독, 멤버십 결제, 캘린더 결제 등을 통해 CRM에서 결제가 이루어질 때마다 QuickBooks에 해당하는 매출 영수증이 자동으로 생성됩니다.

### 3. 인보이스 생성 및 동기화

CRM 내에서 인보이스가 발송됨으로 표시되면 QuickBooks에 해당하는 인보이스가 생성됩니다. 연동은 다음을 포함한 인보이스 업데이트를 계속 동기화합니다:

- 인보이스 번호
- 결제 상태(결제 완료, 무효 등)
- 발행일 및 만료일
- 고객 세부 정보
- 청구 이메일
- 인보이스 총액
- 지불된 금액
- 항목명
- 할인 및 세금(미국 지역의 경우 항목 가격 내에서 조정됨, 기타 지역은 개별 필드로 동기화)

중요사항:
✔️ CRM에서 새로 생성된 인보이스만 QuickBooks로 동기화됩니다.
❌ 연동 이전에 생성된 기존 인보이스는 가져오기를 하지 않는 한 동기화되지 않습니다.

## QuickBooks → CRM

### 1. 기존 및 새로운 QuickBooks 연락처 동기화

QuickBooks에 저장된 모든 기존 연락처가 CRM으로 가져와집니다. 시스템은 새로운 QuickBooks 연락처를 자동으로 계속 동기화합니다(최대 5분 소요).

### 2. 리뷰 자동화 트리거(선택사항)

QuickBooks에서 고객의 첫 번째 완전 결제 인보이스(잔액 = $0)가 기록되면, CRM이 자동으로 리뷰 요청을 보낼 수 있습니다. 이 기능은 연동 설정에서 켜거나 끌 수 있습니다.

### 3. 과거 인보이스 가져오기

초기 설정 중에 활성화하면 CRM이 QuickBooks에서 이전에 생성된 인보이스를 가져옵니다.

참고사항:
- CRM 내에서 이렇게 가져온 인보이스를 편집해도 변경 사항이 QuickBooks로 다시 동기화되지 않습니다.
- 이 과정은 동기화 루프를 생성하지 않습니다. QuickBooks에서 가져온 인보이스는 다시 QuickBooks로 푸시되지 않습니다.

## QuickBooks 연동 방법

- Settings(설정) → Integrations(연동)으로 이동합니다.

![QuickBooks 연동 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060603687/original/kw4chAAhgkOnUMdEKnYors5kb9sd976dXw.png?1765792390)

- "QuickBooks Connect"를 선택합니다.

- (선택사항) Import Invoices를 활성화하여 과거 QuickBooks 인보이스를 가져옵니다.

![인보이스 가져오기 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060603705/original/p-8MAX3YGmMVe9yu-WydeqPajBu5lZn_hg.png?1765792402)

- (선택사항) Review Automation을 활성화합니다.

![리뷰 자동화 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060603755/original/QhFKXSxVxev636cqp_Wk0PALJoltlyR_Yg.png?1765792412)

- Connect를 클릭하고 QuickBooks 계정 정보로 로그인합니다.

- 모든 권한 승인 프롬프트를 수락하여 연동을 완료합니다.

# 자주 묻는 질문

### Q: QuickBooks 연동이 무엇을 해주나요?

연동은 모든 기존 및 새로운 QuickBooks 연락처를 CRM으로 동기화하고, 고객의 첫 번째 인보이스가 완전히 결제되었을 때 선택적으로 리뷰 요청을 보내며, CRM에서 처리된 결제에 대한 매출 영수증을 기록합니다. 또한 CRM에서 인보이스가 발송되거나 수정될 때마다 QuickBooks에서 인보이스를 생성하고 업데이트합니다.

### Q: 연동이 기존 QuickBooks 인보이스를 내 CRM으로 동기화하나요?

네, 설정 중에 Import Invoices를 활성화하면 이전에 생성된 모든 QuickBooks 인보이스를 CRM으로 가져옵니다.

- CRM에서 이러한 과거 인보이스에 대한 편집은 QuickBooks로 다시 동기화되지 않습니다.
- 이 옵션을 활성화하지 않으면 앞으로 CRM에서 새로 생성된 인보이스만 QuickBooks로 동기화됩니다.

### Q: QuickBooks에 이미 존재하는 고객을 연동이 어떻게 처리하나요?

QuickBooks에 같은 이메일 주소의 고객이 이미 있으면, 연동이 해당 고객 기록을 업데이트하고 거래를 연결합니다. 일치하는 것이 없으면 QuickBooks에 새 고객 기록이 자동으로 생성됩니다.

### Q: 동기화된 인보이스에 세금과 할인이 포함되나요?

네. 세금과 할인이 완전히 포함됩니다:

- 미국 계정: 세금 및 할인이 항목 가격에 포함됩니다.
- 기타 지역: 세금 및 할인이 별도 필드로 동기화됩니다.

---
*원문 최종 수정: Mon, 15 Dec, 2025 at 3:55 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*