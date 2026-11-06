---

번역일: 2026-04-07
카테고리: 08-결제 > 시작하기
---

# 구독 결제가 실패하면 어떻게 되나요?

구독 결제가 실패하면 인보이스가 자동으로 생성되어 고객에게 발송됩니다. 고객은 인보이스 링크를 통해 기존 결제 수단이나 새로운 결제 수단으로 결제할 수 있습니다. 또한 시스템은 설정 가능한 재시도 설정에 따라 자동으로 결제를 재시도하며, 모든 재시도가 실패할 경우 구독을 취소하는 옵션도 제공합니다.

## 처리 과정

**인보이스 생성**: 구독 결제가 실패하면 인보이스가 자동으로 생성되어 고객에게 발송됩니다.

**결제 옵션**: 고객은 기존 결제 수단을 사용하거나 새로운 결제 수단을 추가하여 인보이스를 결제할 수 있습니다. 새 카드를 사용하면 향후 구독 결제의 기본 결제 수단이 됩니다.

**자동 결제 재시도**: 시스템이 재시도 설정에 따라 정해진 간격으로 구독 결제를 다시 시도합니다.

**재시도 설정**: 기본적으로 시스템은 하루 간격으로 3번까지 결제를 재시도합니다.
![재시도 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050328252/original/iy9OggNgYeejUe57XZHL6haL9l583V6n-w.png?1753289535)

**재시도 설정 커스터마이징**: 비즈니스는 재시도 횟수(1, 2, 3회)와 재시도 간격(1, 3, 5, 7일)을 설정할 수 있습니다.
![커스터마이징 가능한 재시도 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050328308/original/TdtIopuILG1fkjVoQS8jBpfk9_Qp6THpTQ.png?1753289619)

**재시도 설정 변경의 영향**: 재시도 설정을 변경하면 신규 구독뿐만 아니라 현재 재시도 중인 기존 구독에도 적용됩니다.

**구독 상태**: 재시도를 통해 결제가 성공하거나 인보이스로 결제가 완료되면, 해당 구독에 대기 중인 다른 인보이스가 없는 한 구독 상태가 활성(Active)으로 변경됩니다.
![활성 상태의 구독](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050328678/original/3gjTdwgoukcjUINpCghL5POK8MvLTBYNCw.png?1753290116)

구독의 모든 재시도가 실패하면 구독은 미결제 상태로 유지됩니다.
![미결제 상태의 구독](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050328896/original/aQgD_mI6GHDDAtNXHRDbIn7mTa90VDqMjg.png?1753290450)

**모든 재시도 실패 시**: `Payments(결제) > Settings(설정) > Subscriptions(구독)` 설정을 통해 모든 결제가 실패할 경우 구독을 자동으로 취소 상태로 표시할 수 있습니다.
![자동 취소 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050328366/original/Bt3EP0IZPgv8HEbBQglUVy4Isb5iDmhBIA.png?1753289725)

## 추가 사항

- 고객은 결제 실패와 생성된 인보이스에 대한 알림을 받습니다.

- 결제 재시도는 인보이스 결제 옵션과 병행하여 진행되므로 성공적인 결제 수집을 위한 여러 경로를 제공합니다.

- 재시도 시도 전에 고객이 인보이스를 통해 결제를 완료하면 재시도 프로세스는 자동으로 중단됩니다.

- 비즈니스는 언제든지 재시도 설정을 업데이트할 수 있으며, 이러한 변경 사항은 해당하는 모든 구독에 즉시 적용됩니다.

- 시스템은 결제 수단의 원활한 업데이트를 보장하여 고객의 마찰을 줄이면서 구독 연속성을 유지합니다.

---
*원문 최종 수정: Wed, 26 Nov, 2025 at 12:04 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*