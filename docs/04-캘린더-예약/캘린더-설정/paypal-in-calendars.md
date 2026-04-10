---

번역일: 2026-04-07
카테고리: 04-캘린더-예약 > 캘린더-설정
---

# 캘린더에서 PayPal 결제 사용하기

Hyperclass에서 이제 캘린더 예약 시 PayPal 결제를 받을 수 있습니다. 고객에게는 친숙하고 신뢰할 수 있는 결제 경험을 제공하고, 여러분은 즉시 결제를 받을 수 있어요. Stripe, Square, Authorize .net, NMI와 함께 PayPal을 추가하여 전환율과 결제 옵션을 늘려보세요.

---

## PayPal 캘린더 결제란?

PayPal 캘린더 결제는 서비스(v2), 라운드 로빈, 공동 예약, 개인 예약 캘린더에 PayPal을 결제 게이트웨이로 추가하는 기능입니다. 연결하면 결제 시 PayPal 옵션이 나타나서 예약자가 PayPal 잔액, 연결된 계좌, 또는 카드로 결제할 수 있어요. 캘린더별로 가격을 설정하고 PayPal 계정으로 직접 결제를 받을 수 있습니다.

---

## PayPal 캘린더 결제의 주요 장점

- **원클릭 결제** 제공: PayPal 사용자는 카드 정보 입력 없이 간편 결제
- Stripe, Square, NMI, Authorize .net과 **함께 사용** 가능: 고객이 선호하는 방식 선택
- PayPal 대시보드에서 **즉시** 결제 정산
- **PCI 규정 완전 준수**: Hyperclass는 PayPal 인증 정보를 저장하지 않음

---

## 지원되는 결제 업체

Hyperclass 캘린더에서 지원하는 결제 업체:

- PayPal (신규)
- Stripe
- Authorize .net
- NMI
- Square
- Razorpay*

PayPal과 Razorpay는 동시에 활성화할 수 없습니다. 둘 다 연결되어 있으면 Razorpay가 기본값으로 사용됩니다.

---

## PayPal 호환성 및 제한사항

설정 문제를 피하기 위해 PayPal이 작동하는 곳과 그렇지 않은 곳을 명확히 안내해드립니다.

- 모든 캘린더 유형과 새로운 서비스(v2)에서 지원
- 기존 서비스 메뉴(v1)는 지원하지 않음
- Razorpay와 함께 사용 불가: 둘 다 연결된 경우 Razorpay가 기본값
- 캘린더 결제의 기존 통화, 부분 결제, 쿠폰 규칙과 동일하게 적용

---

## 캘린더 예약에 PayPal 설정하기

PayPal 연결은 몇 분만 있으면 완료되며, 바로 모든 지원 캘린더에서 PayPal 결제가 가능해집니다.

### PayPal을 하위 계정에 연결하기

• Payments(결제) ➜ Integrations(연동)으로 이동합니다.

![PayPal 연동 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056088076/original/MKM1Kr6r87Usq6X9gfVBnxzDzoTewbZhww.png?1760550206)

• PayPal → Connect(연결)을 클릭한 후 PayPal Client ID와 Secret을 입력합니다.

![PayPal 연결 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056088101/original/GrlMnTe50SpGSORF9FVUkFndHQ8q7fbVKg.png?1760550242)

• Save(저장)를 클릭합니다.

### 캘린더에서 결제 활성화하기

• Calendars(캘린더) ➜ Settings(설정) → 결제를 받을 캘린더를 엽니다.

![캘린더 설정 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056088163/original/UXS5ymdkuEaC2urDXtl9XOpVFzNIgnRg0A.png?1760550332)

• Forms & Payments(폼 & 결제)에서 Accept Payments(결제 받기)를 켭니다.

![결제 받기 토글](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056088563/original/3hbV7tkdeFxehlNTuIgabHbnSsAVNWzmBg.png?1760550701)

• PayPal을 선택하거나 (PayPal이 유일한 게이트웨이라면 Default 그대로 둡니다).

• Amount(금액), Description(설명)을 입력하고 Live(실제) 또는 Test(테스트) 모드를 선택합니다.

• Save(저장)를 클릭합니다.

![PayPal 결제 설정 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056088615/original/0WvZfUBlhYt6gk5M8L3QFSc91yy0b-Fjjw.png?1760550773)

---

## 자주 묻는 질문

**Q: PayPal과 신용카드 결제를 모두 제공할 수 있나요?**

A: 네. Stripe, Square, NMI, Authorize .net도 함께 연결되어 있다면 예약 위젯에서 PayPal과 카드 옵션이 모두 표시됩니다. 고객이 결제 시 원하는 방식을 선택할 수 있어요.

**Q: Razorpay도 함께 연결하면 어떻게 되나요?**

A: Hyperclass는 Razorpay를 우선으로 합니다. PayPal을 사용하려면 Razorpay 연결을 해제하거나 기본 게이트웨이를 변경해주세요.

**Q: 정기 예약 캘린더에서도 PayPal이 작동하나요?**

A: 네, 새로운 서비스(v2) 또는 기타 지원되는 캘린더 유형을 사용한다면 가능합니다. 기존 서비스 메뉴(v1)와 앱 내 커스텀 정기 예약은 지원되지 않습니다.

**Q: 결제 금액은 어디로 들어오나요?**

A: Payments(결제) ➜ Integrations(연동)에서 연결한 PayPal 계정으로 직접 정산됩니다.

**Q: Hyperclass에서 PayPal 결제를 환불할 수 있나요?**

A: 아직은 지원하지 않습니다. 환불은 PayPal 대시보드에서 직접 처리해야 해요.

**Q: 우리나라에서도 PayPal을 사용할 수 있나요?**

A: PayPal 사용 가능 여부는 PayPal에서 지원하는 지역과 통화에 따라 다릅니다. 확실하지 않다면 PayPal 공식 문서를 확인해보세요.

---

*원문 최종 수정: Wed, 15 Oct, 2025 at 12:58 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*