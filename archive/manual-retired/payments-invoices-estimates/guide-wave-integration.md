---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000007179-guide-wave-integration
번역일: 2026-04-23
카테고리: payments-invoices-estimates
---

# Wave 연동 가이드

## 개요

Wave 연동을 통해 CRM에서 생성한 인보이스(Invoice)를 Wave 회계 계정으로 자동 동기화할 수 있습니다. Wave에서 인보이스를 수동으로 다시 만들 필요가 없어져 청구 워크플로우가 간소화되고 반복 작업이 줄어듭니다.

## Wave 연동의 기능

### CRM → Wave

연동을 활성화하면 다음 항목이 자동으로 동기화됩니다:

- CRM에서 생성한 새 인보이스
- 해당 인보이스의 변경 사항(항목, 총액, 고객 정보 등)

동기화는 CRM에서 Wave로 가는 단방향입니다.

### 중요한 제한사항

Wave는 현재 다음 기능을 지원하지 않습니다:

- CRM의 결제 영수증 동기화
- 인보이스 상태 변경(결제됨, 부분 결제됨 등) 동기화 (Wave의 제한사항)

이는 다음을 의미합니다:

- 인보이스만 동기화됨
- 상태 업데이트(예: 인보이스를 결제 완료로 표시)는 Wave에서 수동으로 업데이트해야 함
- Wave API 제한으로 인해 CRM에서 Wave의 인보이스 결제 상태를 업데이트할 수 없음

# Wave 연동 설정 방법

- Settings(설정) → Integrations(연동) → Wave로 이동하세요

![Wave 연동 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060604686/original/We3EejSm_DTq1XPWGt2lYbWOrPPPaFwsrw.png?1765792838)

- Manage(관리) 버튼을 클릭하세요

- Wave 계정 정보로 로그인하세요

![Wave 로그인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060604715/original/-1devyoU9illHq61YTvavFrKI-ERQ4fUOg.png?1765792854)

- 단방향 인보이스 동기화 액세스를 승인하세요

![액세스 승인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060604724/original/kYYaCi5q5QX_3qw8Cv46dYKKa0V9QOOqYg.png?1765792861)

- 인보이스가 동기화될 Wave 계정을 선택하세요

![계정 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060604753/original/wMBcv7QSZMyZtKmUQYnauf44lAWJeIDXAQ.png?1765792874)

- Save(저장)를 클릭하세요

저장 완료 후:

✔️ 이제부터 CRM에서 생성하는 모든 인보이스가 Wave로 자동 동기화됩니다.

---
*원문 최종 수정: Mon, 15 Dec, 2025 at 4:01 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*