---

번역일: 2026-04-06
카테고리: 04-캘린더-예약 > 캘린더-만들기
---

# 부분 결제: 보증금 수집하기

## 목차

- [부분 결제란?](#부분-결제란)
- [부분 결제가 거래 및 인보이스에 미치는 영향](#부분-결제가-거래-및-인보이스에-미치는-영향)
- [부분 결제 사용 방법](#부분-결제-사용-방법)
- [잔액은 어떻게 수집하나요?](#잔액은-어떻게-수집하나요)
- [주요 혜택](#주요-혜택)
- [자주 묻는 질문](#자주-묻는-질문)

---

#### **부분 결제란?**

부분 결제는 예약자가 보증금을 먼저 지불하여 예약을 확정하고, 나머지 금액은 나중에 결제할 수 있는 기능입니다. 전액 결제와 함께, 이제 비즈니스에서도 예약자로부터 보증금을 수집할 수 있습니다. 이 기능은 모든 캘린더 유형에 원활하게 적용되며 좌석 예약에 도움이 됩니다.

이 새로운 기능을 통해 사용자는 예약 시점에 예약자에게 청구할 고정 금액 또는 전체 금액의 일정 비율을 자유롭게 결정할 수 있습니다.

---

#### 부분 결제가 거래 및 인보이스에 미치는 영향

![부분 결제 영향 이미지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023874265/original/c5hsV31Rg8FUfyqrVrCgQQNFYMGoDAKZHA.png?1712122099)

부분 결제가 활성화되면 결제(Payments)에 두 개의 항목이 나타납니다:

- **거래(Transaction):** 예약 중 청구된 금액 (보증금 금액).

![거래 이미지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023874407/original/yKYCL_xx8aiCufzAFCIQifEpOMLWxqLDhQ.png?1712122324)

- 인보이스(Invoices): 예약자로부터 수집해야 할 미결제 금액 (총 금액 - 보증금 금액). 인보이스 상태는 초안(draft)으로 남아 있으며, 사용자가 직접 미결제 금액을 수집해야 합니다.

![인보이스 이미지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023874513/original/06Srji6PwP8roOciFt6BYRb4Lkk0Aq55TQ.png?1712122591)

---

#### 부분 결제 사용 방법

1. 결제 게이트웨이 연동: Stripe 또는 Authorize.net과 같은 결제 게이트웨이를 연동했는지 확인하세요. (Payments Module(결제 모듈) > Integrations(연동))

2. 결제 활성화: Calendar Settings(캘린더 설정) > Forms & Payments(폼 및 결제) 섹션에서 해당 캘린더의 "Accept Payments(결제 허용)" 토글을 활성화하세요.

![결제 활성화 이미지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023873723/original/qh84sI5jK74C15QtJDvFjkxIVY73lfCypw.png?1712120969)

3. 총 금액 및 통화 입력: 서비스나 예약의 총 금액을 지정하고 원하는 통화를 선택하세요.

![총 금액 설정 이미지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023875315/original/jDPTb95KbCiV_Z1bNFkGFXoBJAWYnoDQQg.png?1712123868)

4. 부분 결제 옵션 활성화: "Accept Partial Payment(부분 결제 허용)" 박스를 체크하세요.

![부분 결제 활성화 이미지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023875330/original/nUChXVtlfLyUPYLTHT-bcLVTmTXbbghDqg.png?1712123912)

5. 금액 유형 선택: **고정 금액 또는 비율**을 추가할지 선택하세요. 비율은 총 금액을 기준으로 계산됩니다.

![금액 유형 선택 이미지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023875412/original/EJ0SZ3ZGIUD92bWFq9JrXo90BjB_R_5vsA.png?1712123958)

6. **보증금 금액/비율 입력:** 서비스나 예약의 보증금 금액/보증금 비율을 지정하세요. 비율은 입력한 총 금액을 기준으로 계산됩니다.

![보증금 설정 이미지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023875759/original/h6KWVxtgbVYQ-g0CLA4_P_43_NxR-nuE_w.png?1712124477)

7. **설명 추가:** 필요한 경우 설명을 입력하여 추가 정보를 제공하세요.

![설명 추가 이미지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023874940/original/dkS82BeTBEBKpH74CNQ06h_tQXfNxLxUEQ.png?1712123347)

8. **설정 저장:** 저장을 클릭하여 변경 사항을 적용하세요.

---

#### 잔액은 어떻게 수집하나요?

잔액을 수집하려면, 예약 시 부분 결제가 수집될 때 생성된 초안(DRAFTED) 인보이스를 직접 발송해야 합니다. Payments(결제) > Invoices(인보이스)로 이동하세요.

참고: 향후 기능 개선으로 이 과정이 자동화될 예정입니다.

---

#### 주요 혜택

이 기능은 비즈니스에서 보증금을 수집하는 것을 도와 노쇼(no-show)를 줄이는 데 도움이 됩니다. 예약/서비스의 총 비용을 표시하면서도 보증금만 결제하는 유연성을 제공함으로써, 선불 결제를 강제하지 않고도 사용자 경험을 향상시킵니다.

---

#### 자주 묻는 질문

Q: 어떤 캘린더 유형이 부분 결제를 지원하나요?

A: 모든 캘린더 유형에서 부분 결제를 활성화할 수 있습니다 - Event(이벤트), Round Robin(라운드 로빈), Collective(공동 예약), Class(수업 예약), Service Calendar(서비스 캘린더), Service Menu(서비스 메뉴).

Q: 미결제 금액은 어떻게 관리하나요?

A: 미결제 금액은 Payments(결제) > Invoices(인보이스) 탭을 통해 직접 관리할 수 있습니다. 사용자는 미결제 금액을 확인하고 그에 따라 예약자로부터 수집할 수 있습니다.

Q: 예약자가 미결제 금액에 대한 알림을 받나요?

A: 아니요, 예약자는 미결제 금액에 대한 알림을 받지 않습니다. 하지만 직원은 Payments(결제) > Invoices(인보이스)에서 미결제 금액을 확인할 수 있습니다.

Q: 캘린더 결제에 지원되는 결제 게이트웨이는 무엇인가요?

A: 현재 캘린더 결제에 지원되는 결제 게이트웨이는 Stripe, NMI, Authorize.net입니다.

---
*원문 최종 수정: 2024년 10월 18일*
*Hyperclass 사용 가이드 — hyperclass.ai*