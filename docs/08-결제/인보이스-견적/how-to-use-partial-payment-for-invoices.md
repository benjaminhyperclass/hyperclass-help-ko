---

번역일: 2026-04-07
카테고리: 08-결제 > 인보이스-견적
---

# 인보이스 부분 결제 사용 방법

### 커뮤니티 추가 튜토리얼

[https://www.youtube.com/watch?v=EFSqKgxke88](https://www.youtube.com/watch?v=EFSqKgxke88)

[https://youtu.be/LKgoPzDZgM0](https://youtu.be/LKgoPzDZgM0)

[https://youtu.be/nWvxS5gKKgw](https://youtu.be/nWvxS5gKKgw)

[https://youtu.be/Ai-pR0TCHHY](https://youtu.be/Ai-pR0TCHHY)

## 새로운 기능 소개

- 기존에는 고객이 인보이스(Invoice)를 통해 전액만 결제할 수 있었고, 부분 결제 옵션이 없었습니다. 이번 새 기능으로 비즈니스 사용자는 전체 인보이스 금액 중 최소 수집 비율을 설정할 수 있게 되었어요.

![부분 결제 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027257698/original/uDBCUig1RdDMo5Il4k3E2Ghs2vmDsnA3WQ.jpeg?1717719769)

![부분 결제 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027257699/original/cADt_E3Xa2ZnnG-gakcZ1XNs8aJTijXDpw.jpeg?1717719769)

- 고객은 하위 계정의 인보이스 대시보드에서 지정된 최소 비율 이상의 금액을 결제할 수 있어요.

![고객 결제 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027257697/original/PKdCKuDCzIAG6sz0pkLAfbeWc7o8g-FHCQ.jpeg?1717719769)

![결제 금액 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027257696/original/uC5-Wju2LozOejLil5ggHlP-4t3l7jJ8Hg.jpeg?1717719769)

- 일회성 인보이스와 정기 인보이스 모두에서 사용할 수 있어요.

## 왜 이 기능이 필요한가요?

- 이 기능으로 비즈니스 오너는 고객의 결제 계획을 더 유연하게 제어할 수 있고, 잠재 고객으로부터 더 많은 결제를 유도할 수 있어요.

## 참고사항

- 정기 인보이스의 경우, 자동 결제가 비활성화된 인보이스에서만 부분 결제 기능을 사용할 수 있어요. 자동 결제가 활성화되고 고객 카드가 등록된 경우, 첫 번째 인보이스에서만 부분 결제 옵션이 제공되고, 이후 인보이스는 자동으로 전액이 결제됩니다.

## 요약

- 이 기능은 비즈니스가 인보이스 결제에 대한 최소 비율을 설정할 수 있게 하여 고객에게 부분 결제를 제공합니다. 이를 통해 결제 계획에 대한 더 큰 유연성과 제어권을 제공하고, 궁극적으로 고객 결제 수집률을 향상시킬 수 있어요.

## 사용 방법

1. 결제 게이트웨이(Stripe / Authorize.net / NMI)가 연동되어 있는지 확인하세요.
2. `Payments(결제) → Invoices(인보이스) → Invoices Settings(인보이스 설정)`으로 이동하세요.
3. 페이지 메뉴에서 `Payment Settings(결제 설정)`를 클릭하고 `Partial Payments(부분 결제)` 토글을 활성화하세요.
4. 입력 필드에 비율을 입력하세요 (비율은 결제해야 할 전체 인보이스 금액 기준으로 계산됩니다).
5. "Save(저장)"를 클릭하면 완료! 이제 부분 결제가 활성화되었어요.

---
*원문 최종 수정: 2024년 6월 6일*
*Hyperclass 사용 가이드 — hyperclass.ai*