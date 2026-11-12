---
원문: /support/solutions/articles/48001225291-how-to-analyze-an-agency-s-spending-on-lc-communications
번역일: 2026-11-06
카테고리: 09-이메일
---

# 플랫폼 커뮤니케이션 사용 비용 분석하기

에이전시 계정에서 하이퍼클래스 전화, 하이퍼클래스 이메일, WhatsApp에 쓴 비용을 한곳에서 확인하고 분석하는 방법을 안내해요. 크레딧 잔액 확인, 거래 내역 조회, 카드 자동 충전, 고객에게 사용 요금 재청구하기까지 다뤄요. 이 기능은 에이전시 관리자만 쓸 수 있어요.

{% hint style="info" %}
문서에 나온 금액(달러)과 요금제 이름은 참고용이에요. 하이퍼클래스에서 실제로 적용되는 요금은 [요금제 안내](../00-자주묻는질문/pricing-plans.md)와 [AI·SMS·음성 사용료](../00-자주묻는질문/usage-costs.md)를 확인하세요.
{% endhint %}

## 에이전시 크레딧 잔액 확인하기

1. 계정 전환 메뉴에서 **에이전시 보기로 전환**을 선택하세요.

   ![에이전시 보기로 전환하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48262037925/original/oeNjlf3jhoA6LeYvFAc8lHr15QgtLTe7fw.png?1667918295)

2. **에이전시 설정**을 클릭하세요.

   ![에이전시 설정 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48261834015/original/W6NvyvEwHqCuc1MnNr_YRXbTxpLGGJgHjg.png?1667850709)

3. **청구/결제** 탭 > **지갑 및 거래 내역**을 클릭하면 현재 크레딧 잔액을 볼 수 있어요.

   ![지갑 및 거래 내역 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005371766/original/B-yiXc9rcjilpNwHRemOlg3Z_fbhTWyr0Q.png?1692215238)

## 크레딧 잔액은 무엇인가요?

SMS, 통화, 음성사서함 드롭, 이메일, WhatsApp 메시지 같은 커뮤니케이션 기능을 쓰면, 그 비용이 이 크레딧 잔액에서 차감돼요. 이 잔액을 **지갑**이라고 부르기도 해요.

요금 체계는 아래 문서에서 확인하세요.

- [하이퍼클래스 전화 요금 체계](../15-전화-시스템/lc-phone-pricing-billing-guide.md)
- [하이퍼클래스 이메일 요금 체계](what-is-lc-email.md)
- WhatsApp 요금 체계 (출시 예정)

{% hint style="info" %}
2022년 11월 1일부터 미국 요금은 Twilio보다 10%, Mailgun보다 약 8% 저렴해요. 에이전시 여러분의 많은 호응에 감사드려요.
{% endhint %}

## 지출 내역 한눈에 보기

**상세 거래 내역**을 클릭하면 메시지 하나하나의 거래 로그를 볼 수 있어요.

![상세 거래 내역 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005371794/original/Vr9Y1Zm7N14yg1nZe5hycpBCyV6A6IYQSg.png?1692215282)

이 페이지에서는 다음을 볼 수 있어요.

- 모든 서브 계정의 로그를 한꺼번에 모아 본 화면
- 최근 3개월의 월별 지출 요약 (카테고리별)

![카테고리별 지출 요약](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005371944/original/Hc8PqLNSu7EaPOHkxFBYT0iQ2kUMbzgyog.png?1692215382)
![월별 지출 상세](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005371932/original/0d46HEaKXh-4VKKHZH0x_qDEnwJwZ8-a6w.png?1692215338)

모든 카테고리를 펼치면 카테고리별로 월 지출 요약을 확인할 수 있어요.

{% hint style="info" %}
요약 데이터는 하루에 한 번 갱신돼요. 가장 정확한 수치를 보려면 최대 24시간까지 기다려야 할 수 있어요.
{% endhint %}

## 거래 하나씩 자세히 보기

로그 표에서 거래 ID를 클릭하면 거래나 메시지별 상세 내용을 볼 수 있어요.

![거래 로그 표](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005372049/original/_pDVo1dTOvElF8Ada-sce5wC_gkGPVmNCQ.png?1692215652)
![거래 상세 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005372259/original/xV7_CNrZa7u-aYsXs43_lDOl0I_b8fKVoA.png?1692216263)

## 카드는 언제, 어떻게 결제되나요?

**에이전시 설정 > 청구/결제** 페이지의 자동 충전 규칙에 따라 움직여요. 크레딧 잔액이 기준 금액 아래로 내려가면 충전 금액만큼 카드로 결제돼요.

**예시 1**

![자동 충전 예시 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005371956/original/bTjK9GY6rbnURLKw3qJYbHoAjA03txZmeQ.png?1692215425)

기본 설정이에요. 크레딧 잔액이 $10 아래로 내려가면 에이전시 신용카드로 $10가 결제되고, 잔액이 $20가 돼요.

**예시 2**

![자동 충전 예시 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005371999/original/Pibi0RvAq-2lS-RffH8af9tSImjAdY1qZQ.png?1692215539)

크레딧 잔액이 $50 아래로 내려가면 에이전시 카드로 $200가 결제되고, 잔액이 $250가 돼요.

{% hint style="warning" %}
카드 결제가 실패하면 계정의 모든 에이전시 관리자에게 알림이 가요. 크레딧 잔액이 $0 아래로 내려가면 모든 고객의 SMS, 통화, 이메일 등 커뮤니케이션이 중단돼요.
{% endhint %}

{% hint style="warning" %}
결제 처리가 늦어지면 잔액이 $0 아래로 내려갔을 때 충전 금액의 두 배가 한 번 결제될 수 있어요. 잔액이 마이너스가 되면 먼저 잔액을 $0 위로 올리는 충전 결제가 이루어져요. 이 결제로도 잔액이 설정한 기준 금액 위로 오르지 않으면, 자동 충전 금액만큼 한 번 더 결제돼요. 그래서 합계로는 충전 금액의 두 배가 결제될 수 있어요.
{% endhint %}

## 고객에게 사용 요금을 재청구하려면 어떻게 하나요?

### Pro 플랜 이상을 쓰는 경우

플랫폼 커뮤니케이션은 Twilio나 Mailgun보다 SaaS와 더 잘 맞게 만들어졌어요. 장점은 다음과 같아요.

- 실시간으로 요금이 반영돼요 (Twilio 웹훅 지연 없음)
- 새 서브 계정에는 단계적으로 발송량을 늘리는 구조가 기본으로 들어 있어, 새 고객 때문에 청구액이 갑자기 늘지 않아요. 에이전시 현금 흐름에도 도움이 돼요.
- 오류율과 반송률을 모니터링해서 문제가 있는 리스트를 찾을 수 있어요.
- 수신거부와 구독 취소를 모니터링해서 스팸을 줄여요.
- 통신사 민원과 위반을 모니터링해서 AUP 위반을 확인하고, 발신자 평판을 지켜요.

Pro 플랜 이상에서는 SaaS 모드(전화·이메일 재청구)로 이 사용 요금을 고객에게 재청구할 수 있어요. 마크업을 붙여 수익을 낼 수도 있어요.

{% hint style="info" %}
**변경 사항**: 통신사 요금과 A2P 10DLC 요금은 재청구할 때 마크업을 붙이지 않아요. 원래 요금이 그대로 전달돼요. 수익이 지출의 정확히 2배, 3배, 3.5배가 될 거라고 예상했다면, 규정 준수 요금과 통신사 수수료는 마크업에서 제외된다는 점을 참고하세요.
{% endhint %}

아래 문서를 참고하세요.

- 에이전시 Stripe 계정을 연결해 재청구 결제 받기

재청구는 이렇게 진행돼요. 플랫폼이 에이전시에 사용 요금을 청구하고, 에이전시를 대신해 고객에게도 인보이스를 보내요. 고객에게서 받은 금액은 연결된 Stripe 계정으로 입금돼요.

![재청구 인보이스 흐름](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48261853138/original/CX077tEWPXWK2FNhPjTfqMc_nCO_fDxkrg.jpg?1667859306)

- 에이전시는 플랫폼 브랜딩이 적용된 인보이스를 플랫폼에서 받아요.
- 서브 계정(고객사)은 Stripe 계정에 설정한 로고와 브랜딩이 적용된 인보이스를 에이전시에서 받아요.

이 방식은 항상 선결제예요. 에이전시가 먼저 돈을 받으므로 현금 흐름이 플러스로 유지돼요.

### Starter 또는 Freelancer 플랜을 쓰는 경우

월별 CSV 리포트를 내려받아, 플랫폼 인보이스나 외부 청구 플랫폼으로 고객에게 청구할 수 있어요.

{% hint style="info" %}
Freelancer 계정에서 마크업 없이 플랫폼 커뮤니케이션 요금을 재청구하는 기능은 이후 릴리스에서 제공할 예정이에요.
{% endhint %}

## 모든 거래를 CSV로 내려받으려면 어떻게 하나요?

오른쪽 위의 **내보내기** 버튼을 클릭하면 플랫폼 커뮤니케이션(전화, 이메일, WhatsApp) 요금 전체를 CSV로 내려받을 수 있어요.

![거래 내보내기 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005372008/original/XBLz8LAIdJcYErtnYvRi7xhrvykahEQ6Gg.png?1692215595)
![CSV 내보내기 미리보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005372066/original/82KcMZk5JfAtG-NaW6PUU4Ovi5wYAWlsYQ.png?1692215674)

{% hint style="info" %}
이 데이터는 에이전시 사용자 전용이에요. 이 리포트를 고객에게 그대로 공유하지 마세요. 고객이 할인된 요금(플랫폼과 에이전시 사이의 요금)을 보게 돼요.
{% endhint %}

![거래 내보내기 샘플](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48262038776/original/xNHy_3v37JouzCN7rDB8cwfqYEoIZZcIxg.png?1667918416)

{% hint style="info" %}
저장 공간 한도 때문에 최근 거래 1,000,000건(100만 건)까지 제공할 수 있어요.
{% endhint %}

## 데이터를 더 깊이 분석하려면

비용을 더 깊이 분석하는 방법을 단계별로 안내하는 가이드가 곧 추가될 예정이에요.

## 플랫폼 커뮤니케이션과 이전 제공업체(Twilio, Mailgun/SMTP)에 모두 요금을 내고 있어요

플랫폼 커뮤니케이션(하이퍼클래스 전화, 하이퍼클래스 이메일)은 앞으로 고객에게 기본으로 켜지도록 설계되어 있어요. 그래서 기존 고객은 아직 이전 제공업체를 쓰고 있을 수 있어요. 통화와 SMS는 Twilio, 이메일은 Mailgun/SMTP를 쓰는 경우예요. 이 전환 기간에는 플랫폼 커뮤니케이션 사용 요금과 함께, 이전 서브 계정의 사용분에 대한 Twilio, Mailgun 등 SMTP 제공업체의 요금이 모두 청구될 수 있어요.

가장 쉬운 해결 방법은 기존 고객을 모두 하이퍼클래스 전화와 하이퍼클래스 이메일로 옮기고, 다른 제공업체와의 계정을 정리하는 거예요.

{% hint style="warning" %}
통화 녹음 같은 일부 자료는 옮겨지지 않아요. 규정 준수나 HIPAA 규정 때문에 통화 녹음이나 로그가 필요하면, Twilio 계정을 휴면 상태로 유지하세요.
{% endhint %}

## 자주 묻는 질문

### 결제가 실패하면 어떻게 되나요?
SMS와 이메일 요금이 미납 상태로 남아 있으면 모든 발신 이메일과 SMS가 중단돼요.

### 해지하면 잔액은 어떻게 되나요?
에이전시 계정에 연결된 신용카드로 크레딧을 환불해 드릴 수 있어요.

### 지갑에 잔액이 있는데 SMS나 이메일을 보낼 수 없어요
하이퍼클래스 전화와 하이퍼클래스 이메일은 잔액이 설정해 둔 **when balance is lower than**(잔액이 이 금액보다 낮아지면) 기준 금액의 50% 이상으로 유지되어야 해요. 기준 금액의 50% 아래로 내려가면 발신 이메일과 SMS가 중단돼요.

발송량이 많은 에이전시라면 이 기준 금액을 높여서 자동 충전이 더 일찍 작동하게 하세요. 그렇지 않으면 충전이 시작되기 전에 잔액 여유가 바닥날 수 있어요.

![자동 충전 기준 금액 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005372072/original/kkMQhM9I0LM7_6ejO8X4YfM_BT0bnp_5Wg.png?1692215699)

예를 들어 **when balance is lower than**을 $10로 설정했다면, 발신 이메일과 SMS를 보내려면 지갑 잔액이 $5 위로 유지되어야 해요. 이렇게 하면 계정이 마이너스가 되는 것을 막을 수 있어요.

### 자동 충전 금액과 기준 금액을 바꿀 수 있나요?
네. **에이전시 설정 > 청구/결제**에서 두 값을 모두 설정할 수 있어요. 발송량에 맞춰 카드 결제 횟수와 금액을 조절하세요.

### 크레딧 잔액에 유효기간이 있나요?
아니요. 크레딧 잔액은 만료되지 않아요. 서브 계정에서 커뮤니케이션을 보낼 때마다 차감되고, 남은 잔액은 계속 이월돼요.

### 서브 계정별로 지출을 나눠 볼 수 있나요?
네. 상세 거래 내역 로그와 CSV 내보내기 모두 모든 서브 계정을 합쳐서 보여 줘요. 고객별로 필터링하거나 정렬해서 볼 수 있어요.
