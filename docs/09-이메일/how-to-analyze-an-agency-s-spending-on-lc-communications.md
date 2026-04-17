---

번역일: 2026-04-06
카테고리: 09-이메일
---

# 에이전시의 LC 커뮤니케이션 지출 분석 방법

에이전시 계정에서 LC 커뮤니케이션(LC Phone, LC Email, WhatsApp 등)에 대한 지출을 분석할 수 있는 기능을 제공합니다.

목차

- [에이전시의 크레딧 잔액 확인 방법](#에이전시의-크레딧-잔액-확인-방법)
- [에이전시 크레딧 잔액의 의미](#에이전시-크레딧-잔액의-의미)
- [카테고리별 에이전시 지출 내역 확인 방법](#카테고리별-에이전시-지출-내역-확인-방법)
- [개별 거래 상세 내역 확인 방법](#개별-거래-상세-내역-확인-방법)
- [카드 결제 시점과 방법](#카드-결제-시점과-방법)
  - [예시 1](#예시-1)
  - [예시 2](#예시-2)
- [클라이언트에게 사용료 재청구하는 방법](#클라이언트에게-사용료-재청구하는-방법)
  - [Pro 플랜 이상인 경우](#pro-플랜-이상인-경우)
  - [Starter 또는 Freelancer 플랜인 경우](#starter-또는-freelancer-플랜인-경우)
- [모든 거래를 CSV로 다운로드하는 방법](#모든-거래를-csv로-다운로드하는-방법)
- [비용을 더 잘 이해하기 위해 데이터를 분석하는 방법](#비용을-더-잘-이해하기-위해-데이터를-분석하는-방법)
- [LC 커뮤니케이션과 기존 제공업체(Twilio 또는 Mailgun/SMTP) 둘 다 결제하고 있어요](#lc-커뮤니케이션과-기존-제공업체-둘-다-결제하고-있어요)
- [결제가 실패하면 어떻게 되나요?](#결제가-실패하면-어떻게-되나요)
- [계정을 취소하면 잔액은 어떻게 되나요?](#계정을-취소하면-잔액은-어떻게-되나요)
- [지갑에 잔액이 있는데 SMS와 이메일을 보낼 수 없어요](#지갑에-잔액이-있는데-sms와-이메일을-보낼-수-없어요)

# 에이전시의 크레딧 잔액 확인 방법

'Agency View(에이전시 뷰)'로 전환해주세요.

![에이전시 뷰 전환](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48262037925/original/oeNjlf3jhoA6LeYvFAc8lHr15QgtLTe7fw.png?1667918295)

'Agency Settings(에이전시 설정)'을 클릭하세요.

![에이전시 설정 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48261834015/original/W6NvyvEwHqCuc1MnNr_YRXbTxpLGGJgHjg.png?1667850709)

'Billing(결제) 탭' > Wallet & Transactions(지갑 및 거래)를 클릭하세요.

![결제 탭에서 지갑 및 거래 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005371766/original/B-yiXc9rcjilpNwHRemOlg3Z_fbhTWyr0Q.png?1692215238)

# 에이전시 크레딧 잔액의 의미

SMS, 전화, 음성메일, 이메일, WhatsApp 메시지 등의 커뮤니케이션 기능을 사용하면, 해당 커뮤니케이션과 관련된 비용이 이 크레딧 잔액에서 차감됩니다. 이것을 지갑이라고도 부르기도 합니다.

다음 문서도 참고하세요:
- [LC Phone 요금 구조](../15-전화-시스템/기타/lc-phone-pricing-structure.md)
- [LC Email 요금 구조](기타/what-is-lc-email-i-want-to-know-more.md)
- WhatsApp 요금 구조 (곧 제공 예정)

참고: 2022년 11월 1일부터 미국 요금이 Twilio보다 10% 저렴하고, Mailgun보다 약 8% 저렴합니다. 에이전시들의 압도적인 응답에 감사드립니다.

# 카테고리별 에이전시 지출 내역 확인 방법

Detailed Transactions(상세 거래)를 클릭하면 메시지별 자세한 거래 로그를 확인할 수 있습니다.

![상세 거래 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005371794/original/Vr9Y1Zm7N14yg1nZe5hycpBCyV6A6IYQSg.png?1692215282)

이 페이지에서는 다음 정보를 제공합니다:
- 모든 하위 계정(로케이션)의 통합 로그 뷰
- 지난 3개월간의 월별 지출 요약과 관련 카테고리

![월별 지출 요약](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005371944/original/Hc8PqLNSu7EaPOHkxFBYT0iQ2kUMbzgyog.png?1692215382)

![카테고리별 지출](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005371932/original/0d46HEaKXh-4VKKHZH0x_qDEnwJwZ8-a6w.png?1692215338)

모든 카테고리를 펼치면 개별 카테고리별 월별 지출 요약을 확인할 수 있습니다.

참고사항:
요약 데이터는 하루에 한 번 업데이트됩니다. 따라서 가장 정확한 보고서를 위해 최대 24시간 기다려야 할 수 있습니다.

# 개별 거래 상세 내역 확인 방법

로그 테이블에서 거래 ID를 클릭하면 각 거래/메시지의 상세 내역을 확인할 수 있습니다.

![거래 ID 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005372049/original/_pDVo1dTOvElF8Ada-sce5wC_gkGPVmNCQ.png?1692215652)

![거래 상세 내역](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005372259/original/xV7_CNrZa7u-aYsXs43_lDOl0I_b8fKVoA.png?1692216263)

# 카드 결제 시점과 방법

Agency Settings(에이전시 설정) → Billing(결제) 페이지의 자동 충전 규칙에 따라, 크레딧 잔액이 임계값보다 낮아지면 충전 금액으로 카드가 결제됩니다.

몇 가지 예시:

## 예시 1

![기본 자동 충전 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005371956/original/bTjK9GY6rbnURLKw3qJYbHoAjA03txZmeQ.png?1692215425)

이것은 기본 설정이기도 합니다. 이 시나리오에서는 크레딧 잔액이 $10 아래로 떨어지면, 에이전시의 신용카드에서 $10이 결제되어 잔액이 $20이 됩니다.

## 예시 2

![사용자 정의 자동 충전 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005371999/original/Pibi0RvAq-2lS-RffH8af9tSImjAdY1qZQ.png?1692215539)

이 시나리오에서는 크레딧 잔액이 $50 아래로 떨어지면 에이전시 카드에서 $200이 결제되어 크레딧 잔액이 $250이 됩니다.

신용카드 결제가 실패하면 에이전시 계정의 모든 관리자에게 알림을 보냅니다. 크레딧 잔액이 $0 아래로 떨어지면 모든 클라이언트의 SMS, 전화, 이메일 등이 영향을 받습니다.

결제 처리 지연으로 인해 계정 잔액이 $0 아래로 떨어지면 충전 금액의 두 배가 일시적으로 청구될 수 있습니다. 잔액이 음수가 되면, 첫 번째 초기 충전 금액이 거래에 추가되어 잔액을 다시 $0 이상으로 끌어올립니다. 이 청구로 계정 잔액이 지정된 임계값을 초과하지 않으면, 설정된 자동 충전 임계값을 초과하도록 보조 청구(자동 충전 금액과 동일)가 거래에 추가됩니다. 총 충전 금액의 두 배까지 청구될 수 있습니다.

# 클라이언트에게 사용료 재청구하는 방법

## Pro 플랜 이상인 경우

LC 커뮤니케이션 시스템은 Twilio나 Mailgun에 비해 SaaS와 더 잘 작동하도록 설계되었습니다. LC 커뮤니케이션을 사용하는 고유한 장점들:

- 즉시 청구 (Twilio 웹훅으로 인한 지연 없음)
- 새 하위 계정(로케이션)을 위한 내장 제한으로 새 클라이언트가 요금을 급증시키지 않음. 이는 에이전시의 현금 흐름을 개선합니다.
- 오류율 및 반송률 모니터링으로 불량 목록 식별
- 스팸 감소를 위한 수신거부 및 구독취소 모니터링
- AUP 위반에 대한 통신사 불만 및 위반 모니터링으로 발신자 평판 보호

Pro 플랜 이상에서는 SaaS 모드(전화 및 이메일 재청구)를 사용하여 클라이언트에게 이 사용료를 쉽게 재청구할 수 있으며, 재청구에 마크업을 포함하여 수익을 창출할 수도 있습니다.

통신사 요금과 A2P 10DLC 요금을 재청구할 때 더 이상 마크업을 적용하지 않습니다. 즉, 추가 마크업 없이 원래 요금을 그대로 전달합니다. 때때로 고객들이 수익이 지출의 정확히 2배, 3배, 또는 3.5배가 될 것이라고 기대하며 티켓을 생성하는 경우가 있습니다. 하지만 규정 준수 요금과 통신사 수수료에는 마크업을 적용하지 않기 때문에 그렇지 않습니다.

다음 문서를 참고하세요:
- 재청구 결제 수집을 위한 에이전시 Stripe 계정 연결
- [이메일 재청구 활성화 방법](기타/email-re-billing.md)
- [일반 SaaS 모드 설정 및 전화 재청구](../08-결제/기타/activate-saas-mode-request-payment-and-configure-twilio-rebilling.md)

재청구는 Hyperclass가 사용료에 대해 인보이스를 발행하고, 그 다음 대신해서 클라이언트에게 인보이스를 발행하는 방식으로 설계되었습니다. 클라이언트로부터 수집한 자금은 연결된 Stripe 계정에 입금됩니다.

![재청구 플로우](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48261853138/original/CX077tEWPXWK2FNhPjTfqMc_nCO_fDxkrg.jpg?1667859306)

에이전시는 Hyperclass 로고 및 브랜딩이 포함된 Hyperclass의 인보이스를 받습니다.

하위 계정(클라이언트 로케이션)은 Stripe 계정에 구성된 로고와 브랜딩이 포함된 귀하의 인보이스를 받습니다.

이 시스템은 항상 선불입니다. 즉, 에이전시가 미리 돈을 수집하여 긍정적인 현금 흐름을 유지합니다.

## Starter 또는 Freelancer 플랜인 경우

아래와 같이 해당 월의 CSV 보고서를 다운로드하여 Hyperclass 인보이스나 외부 결제 플랫폼을 사용해 클라이언트에게 청구할 수 있습니다.

향후 마크업 없는 LC 커뮤니케이션 재청구가 Freelancer 계정에서 제공될 예정입니다. 예상 일정 - 2022년 12월 15일

# 모든 거래를 CSV로 다운로드하는 방법

우측 상단의 내보내기 버튼을 클릭하여 모든 LC 커뮤니케이션(전화, 이메일, WhatsApp) 요금을 CSV 형태로 다운로드할 수 있습니다.

![CSV 내보내기 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005372008/original/XBLz8LAIdJcYErtnYvRi7xhrvykahEQ6Gg.png?1692215595)

![CSV 다운로드 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005372066/original/82KcMZk5JfAtG-NaW6PUU4Ovi5wYAWlsYQ.png?1692215674)

이 데이터는 에이전시 사용자 전용입니다. 할인된 요금(Hyperclass에서 에이전시로의 요금)이 표시되므로 이 보고서를 클라이언트와 직접 공유하지 않는 것을 권합니다.

![에이전시 전용 데이터 경고](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48262038776/original/xNHy_3v37JouzCN7rDB8cwfqYEoIZZcIxg.png?1667918416)

저장 제한으로 인해 최대 1,000,000(100만) 건의 거래만 제공할 수 있습니다.

# 비용을 더 잘 이해하기 위해 데이터를 분석하는 방법

지침이 포함된 Loom 영상이 곧 추가될 예정입니다. 며칠 후 다시 확인해주세요.

# LC 커뮤니케이션과 기존 제공업체 둘 다 결제하고 있어요

설계상 LC 커뮤니케이션(LC Phone 및 LC Email)이 이제부터 클라이언트에게 활성화됩니다. 즉, 대부분의 경우 기존 클라이언트는 여전히 기존 제공업체(전화 및 SMS는 Twilio, 이메일은 Mailgun/SMTP)를 사용합니다. 이 전환 기간 동안 LC 커뮤니케이션에서 발생하는 사용료에 대해서는 Hyperclass에서, 여전히 기존 제공업체를 사용하는 기존 하위 계정의 사용료에 대해서는 Twilio, Mailgun 또는 기타 SMTP 제공업체에서 인보이스를 받을 가능성이 높습니다.

이 상황을 해결하는 가장 쉬운 방법은 모든 기존 클라이언트를 LC Phone과 LC Email로 이전하고 다른 제공업체와의 계정을 해지하는 것입니다.

참고사항:
통화 녹음과 같은 특정 자산은 이전되지 않습니다. 따라서 규정 준수나 HIPAA 규정을 위해 통화 녹음이나 로그에 액세스해야 하는 경우 Twilio 계정을 휴면 상태로 계속 운영하는 것이 좋습니다.

# 결제가 실패하면 어떻게 되나요?

SMS 및 이메일 요금이 미납되면 모든 발신 이메일과 SMS가 중단됩니다.

# 계정을 취소하면 잔액은 어떻게 되나요?

에이전시 계정에 연결된 신용카드로 크레딧을 환불할 수 있습니다.

# 지갑에 잔액이 있는데 SMS와 이메일을 보낼 수 없어요

LC 전화 및 이메일의 경우 "잔액이 다음보다 낮을 때"로 설정된 금액의 최소 50% 이상의 잔액이 있어야 합니다.

50% 미만이면 모든 발신 이메일과 SMS가 중단되는 규칙이 설정되어 있습니다.

에이전시가 대량으로 발송하는 경우, 잔액이 낮을 때 SMS와 이메일을 보낼 수 없는 상황을 피하려면 여기서 숫자를 높여서 잔액이 $50보다 낮을 때 자동 충전이 더 빨리 이루어지도록 해주세요!

![자동 충전 임계값 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005372072/original/kkMQhM9I0LM7_6ejO8X4YfM_BT0bnp_5Wg.png?1692215699)

예를 들어, "잔액이 다음보다 낮을 때"로 설정된 금액이 $10인 경우, 발신 이메일/SMS를 보내려면 현재 지갑 잔액이 $5보다 많아야 합니다. 이는 계정이 음수가 되는 것을 방지하기 위한 보호 장치입니다.

---
*원문 최종 수정: 2025년 9월 4일 목요일 오전 9:46*
*Hyperclass 사용 가이드 — hyperclass.ai*