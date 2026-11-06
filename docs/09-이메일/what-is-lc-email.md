---

번역일: 2026-04-06
카테고리: 09-이메일
---

# LC Email이란 무엇인가요?

LC Email은 "이메일 서비스 제공업체(Email Service Provider)" 또는 이메일을 구동하는 "엔진" 역할을 합니다. 에이전시가 Mailgun이나 다른 외부 이메일 서비스 제공업체에 별도로 가입해야 하는 번거로움을 없애줍니다. 과거에는 에이전시가 가입할 때 이메일 송수신을 위해 Mailgun이나 다른 이메일 서비스 제공업체와 연동해야 했습니다. LC Email을 사용하면 모든 하위 계정에서 최소한의 설정만으로 이메일 송수신이 바로 작동합니다.

LC Email로 마이그레이션을 원하신다면 설정 가이드를 참고하세요: LC Email로 마이그레이션하는 방법.

## LC Email이란 무엇인가요?

LC Email은 CRM에서 호스팅하는 이메일 서비스 제공업체로, 업계 최고 수준의 전달률(Deliverability), 오류 모니터링, 컴플라이언스를 제공하여 이메일이 전달될 가능성을 크게 높입니다. 또한 시장의 다른 이메일 서비스 제공업체와 비교해 상당히 저렴합니다.

## **이 기능을 만든 이유는 무엇인가요?**

LC Email은 에이전시가 Mailgun이나 Sendgrid 같은 외부 이메일 서비스 제공업체를 설정하고 관리하는 번거로움을 없애기 위해 설계되었습니다.

따라서 LC Email은 에이전시나 하위 계정에서 최소한의 설정과 구성만으로 즉시 작동하도록 구축했습니다. 간단히 말해, "그냥 작동하는" 이메일 서비스를 제공하고자 했습니다.

## 설정

## 오류 및 발송 제한

이메일 발송을 예약할 때, 예약된 발송이 현재 발송 제한을 초과하면 하이퍼클래스에서 인라인 오류를 표시할 수 있습니다. (확인 필요: 정확한 UI 문구와 메시지가 나타나는 위치)

**해결 방법:**

- 예약된 발송의 수신자를 줄이거나 발송을 더 작은 배치로 나누세요.

- 더 높은 처리량이 필요한 경우, 이 아티클의 램프업 모델(Ramp-Up Model)과 발송 제한 확장(Extend Sending Limit) 섹션의 안내를 따르세요.

다른 아티클의 고정 임계값에 의존하지 마세요. 제한은 램프업 단계와 구성에 따라 달라집니다. 현재 제한과 램프업 동작에 대한 권위 있는 참조로 이 LC Email 아티클을 사용하세요.

## **LC Email 가격**

모든 플랜에서 가격은 1,000개 이메일당 $0.675이며, 거래 내역은 에이전시 레벨에서 상세히 확인할 수 있습니다:

확인하려면 "Agency View(에이전시 보기)" > "Billing(결제)" > "Credits(크레딧)"로 이동하세요.

**참고: 모든 수신 및 발신 이메일(To, CC, BCC)에 요금이 부과됩니다**

![LC Email 크레딧 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029831080/original/uWgbiGCqEjw3nsUKsb4CDekqJyDBOK5k_w.jpg?1721846702)

![크레딧 상세 내역](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029831093/original/0vmQ0pA0iItR2tdwnbThShKEIZfJXFO0yQ.jpg?1721846737)

![거래 내역 보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029831105/original/aDQoUwqqzj67hlwzUOazHPU0QM-W-2yZXg.jpg?1721846772)

## LC Email 검증 가격

이메일 검증을 활성화할 수 있으며, 이를 통해 유효한 주소로만 이메일을 발송할 수 있습니다. 이 서비스는 1,000개 이메일 검증당 $2.50가 부과됩니다.

## LC Email 전달 가격

LC Email 전달 요금은 LC Email 가격과 동일합니다.

전달된 이메일은 발신 이메일과 같은 방식으로 청구됩니다. 에이전시 레벨에서 전달된 각 이메일에 요금이 부과됩니다. 하위 계정에 재청구가 활성화된 경우, 전달된 각 이메일에 대해 하위 계정에 요금이 부과됩니다.

상세 청구 알림을 확인하려면: Settings(설정) → Billing(결제) → Wallets & Transactions(지갑 및 거래) → Detailed Transactions(상세 거래)로 이동하세요:

- Billing Source Type – 요금을 발생시키는 서비스 유형
- Billing Trigger ID – 전달된 이메일 이벤트의 고유 식별자

이를 통해 어떤 전달된 이메일이 청구되는지 더 쉽게 추적하고 확인할 수 있습니다.

## 램프업 모델:

LC Email 시스템의 모든 새 하위 계정은 램프업 모델을 따릅니다. 이는 발송 평판을 구축하고 스팸 필터를 피하기 위해 일일 발송 제한을 점진적으로 증가시킵니다.

이메일 제한은 첫 7일 동안 매일 확장됩니다. 8일째부터는 공유 IP를 사용하는지 전용 IP를 사용하는지에 따라 제한이 달라집니다:

| 일차 | 이메일 제한 |
|------|-------------|
| 1    | 250         |
| 2    | 500         |
| 3    | 1,000       |
| 4    | 2,500       |
| 5    | 5,000       |
| 6    | 7,500       |
| 7    | 10,000      |
| 8일째 및 이후 | 공유 도메인: 150,000<br>전용 도메인: 450,000 |

**참고사항:**

일일 카운터는 매일 자정 00:00:01 AM UTC에 리셋됩니다. 리셋 시간 전에 제한에 도달하면 나머지 기간 동안 계정이 잠깁니다.

참고: 하위 계정 활동을 검증하고 스팸 계정이 아닌지 확인하는 것이 중요합니다.

## 발송 제한 확장:

1. 공유 IP 이메일 발송 제한은 250개에서 15,000개입니다 (증가하려면 하위 계정에 전용 발송 도메인을 설정해야 함)

2. 전용 IP 이메일 발송 제한은 250개에서 450,000개입니다 (이 제한을 증가시키려면 지원 팀에 문의하세요)

"Agency View(에이전시 보기)" > "Sub-Accounts(하위 계정)" > 하위 계정 이름을 검색하고 클릭한 후 "Additional Settings(추가 설정)" 섹션으로 스크롤하여 제한을 증가시킬 수 있습니다.

공유 도메인:

![공유 도메인 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029831160/original/IxE4M2xEjR2qx9aoQ10sAa-0ZvnYSO-UJQ.jpg?1721846888)

![공유 도메인 제한 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029831170/original/9JOJvixRnNLQ9wuWQ897afP7aES4Wnlj0A.jpg?1721846920)

전용 도메인:
![전용 도메인 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029831185/original/Ctf9TQgszFvp8BSf5E340Lvcy56c_rpNaA.jpg?1721846955)

**제휴 마케터에게 미치는 영향은?**

LC Email은 CRM을 시작하고 운영하는 데 있어 두 가지 주요 장벽 중 하나를 제거하므로, 새로운 제휴 마케터들이 성공을 찾고 지속할 가능성이 높아집니다.

## 자주 묻는 질문:

**에이전시를 LC Email로 마이그레이션하는 방법은?**

도움말 가이드를 확인하세요: 에이전시를 LC Email로 마이그레이션하기

**자체 SMTP를 연동하고 싶은 에이전시는 어떻게 하나요?**

문제없습니다! 모든 새 계정은 기본적으로 LC Email을 사용하지만, 언제든지 외부 SMTP 제공업체를 연동할 수 있습니다.

**클라이언트의 이메일 사용량은 어디서 확인하나요?**

Agency Settings(에이전시 설정) → Billing(결제) → See Details(세부 정보 보기) (Credits(크레딧) 하위)로 이동하여 클라이언트의 이메일 사용량을 확인할 수 있습니다.

**기존 계정은 어떻게 되나요?**

에이전시는 기존 하이퍼클래스 계정을 LC Email로 원활하게 마이그레이션할 수 있습니다!

**사용량을 클라이언트에게 청구하는 방법은?**

Pro 플랜을 사용 중이라면 클라이언트에게 재청구할 수 있어 수동으로 청구하는 시간과 노력을 절약할 수 있습니다.

**이메일 재청구가 ISV와 작동하나요?**

물론입니다! Pro 플랜의 모든 에이전시는 LC Email 또는 연결된 외부 SMTP를 사용하면서 이메일 사용량을 재청구할 수 있는 기능을 계속 사용할 수 있습니다. 낮은 비용으로 에이전시의 마진이 더욱 늘어납니다!

**콜드 이메일이 LC Email과 작동하나요?**

네. 자세한 정보는 이 도움말 아티클을 참고하세요.

**LC Email은 HIPAA 규정을 준수하나요?**

네, Twilio와 HIPAA 준수를 위한 BAA(Business Associate Agreement)에 서명했습니다. HIPAA 준수 패키지를 보유하고 있다면 사용할 수 있습니다!

**하위 계정의 이메일 제한이 15,000개인 이유는?**

전용 도메인이 없는 하위 계정은 에이전시에 전용 도메인이 있더라도 공유 도메인으로 간주됩니다. 이를 해결하려면 하위 계정에 전용 도메인을 추가하세요.

---
*원문 최종 수정: Sat, 31 Jan, 2026 at 8:12 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*