---
원문: https://help.gohighlevel.com/support/solutions/articles/155000004507-what-happens-in-case-of-a-payment-failure-for-a-subscription-
번역일: 2026-11-07
카테고리: 08-결제
---

# 구독 결제가 실패하면 어떻게 되나요?

구독 결제가 실패하면 인보이스가 만들어져 고객에게 발송돼요. 고객은 인보이스에 있는 링크로 기존 결제 수단이나 새 결제 수단을 골라 결제할 수 있어요. 시스템은 재시도 설정에 따라 결제를 자동으로 다시 시도하고, 모든 재시도가 실패하면 구독을 취소하는 옵션도 있어요.

## 처리 과정

1. 인보이스 생성: 구독 결제가 실패하면 인보이스가 자동으로 만들어져 고객에게 발송돼요.
2. 결제 옵션: 고객은 기존 결제 수단으로 인보이스를 결제하거나 새 결제 수단을 추가할 수 있어요. 새 카드로 결제하면 그 카드가 이후 구독 결제의 기본 결제 수단이 돼요.
3. 자동 결제 재시도: 시스템이 재시도 설정에 맞춰 일정한 간격으로 구독 결제를 다시 시도해요.
4. 기본 재시도 설정: 기본값은 하루 간격으로 3번 재시도하는 거예요.

   ![기본 결제 재시도 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050328252/original/iy9OggNgYeejUe57XZHL6haL9l583V6n-w.png?1753289535)

5. 재시도 설정 변경: 재시도 횟수는 1회, 2회, 3회 중에서 고를 수 있어요. 재시도 간격도 1일, 3일, 5일, 7일 중에서 바꿀 수 있어요.

   ![재시도 횟수와 간격 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050328308/original/TdtIopuILG1fkjVoQS8jBpfk9_Qp6THpTQ.png?1753289619)

6. 설정 변경이 미치는 범위: 재시도 설정을 바꾸면 새 구독은 물론, 이미 재시도 중인 구독을 포함한 기존 구독에도 모두 적용돼요.
7. 구독 상태: 재시도로 결제가 성공하든 인보이스로 결제하든, 해당 구독에 다른 미결제 인보이스가 없으면 **구독 상태**가 활성으로 바뀌어요.

   ![결제 성공 후 활성 상태로 바뀐 구독](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050328678/original/3gjTdwgoukcjUINpCghL5POK8MvLTBYNCw.png?1753290116)

   구독의 모든 재시도가 실패하면 구독은 미결제 상태로 남아요.

   ![모든 재시도 실패 후 미결제 상태인 구독](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050328896/original/aQgD_mI6GHDDAtNXHRDbIn7mTa90VDqMjg.png?1753290450)

8. 모든 재시도가 실패한 경우: **결제 > 설정 > 구독**에서 설정하면, 모든 결제가 실패했을 때 구독을 자동으로 취소 상태로 바꿀 수 있어요.

   ![모든 결제 실패 시 구독 자동 취소 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050328366/original/Bt3EP0IZPgv8HEbBQglUVy4Isb5iDmhBIA.png?1753289725)

## 알아 두면 좋은 점

- 고객은 결제 실패와 새로 만들어진 인보이스에 대한 알림을 받아요.
- 결제 재시도는 인보이스 결제와 동시에 진행돼요. 그래서 결제를 받을 수 있는 방법이 여러 갈래로 열려 있어요.
- 재시도 전에 고객이 인보이스로 결제를 마치면 재시도는 자동으로 멈춰요.
- 재시도 설정은 언제든 바꿀 수 있고, 바꾸면 해당하는 모든 구독에 바로 적용돼요.
- 결제 수단을 쉽게 바꿀 수 있어서 고객의 번거로움은 줄고, 구독은 끊기지 않고 이어져요.
