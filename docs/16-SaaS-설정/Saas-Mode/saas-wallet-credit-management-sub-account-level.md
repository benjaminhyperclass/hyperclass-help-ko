---

번역일: 2026-04-08
카테고리: 16-SaaS-설정 > Saas Mode
---

# SaaS 월렛 크레딧 관리 - 하위 계정 레벨

#### 이 문서에서 다루는 내용:

[SaaS 월렛이란 무엇인가요?](#saas-월렛이란-무엇인가요)

[월렛은 어디서 접근할 수 있나요?](#월렛은-어디서-접근할-수-있나요)

[월렛 거래 내역을 어떻게 확인하나요?](#월렛-거래-내역을-어떻게-확인하나요)

[월렛을 충전하는 방법](#월렛을-충전하는-방법)

[1. 자동 충전 설정](#1-자동-충전-설정)

[2. 고객 카드로 수동 충전 (잔액 추가)](#2-고객-카드로-수동-충전-잔액-추가)

[3. 월간 무료 크레딧](#3-월간-무료-크레딧)

[4. 에이전시 뷰에서 무료 크레딧 추가](#4-에이전시-뷰에서-무료-크레딧-추가)

[월렛에서 크레딧을 제거하는 방법](#월렛에서-크레딧을-제거하는-방법)

[1. 무료 크레딧](#1-무료-크레딧)

[2. 유료 크레딧](#2-유료-크레딧)

[유료 크레딧 환불 처리 방법](#유료-크레딧-환불-처리-방법)

[월렛 충전 재시도](#월렛-충전-재시도)

[1. SaaS 월렛 (전화 및 이메일 재청구용)](#1-saas-월렛-전화-및-이메일-재청구용)

[2. 에이전시 월렛 (ISV용)](#2-에이전시-월렛-isv용)

# SaaS 월렛이란 무엇인가요?

Twilio 및 이메일 재청구를 위해 고객에게 요금을 청구할 때 시스템은 월렛을 사용합니다. 에이전시 소유자/고객은 고객의 신용카드를 이용해 월렛을 충전하여 로케이션 월렛에 메시징 크레딧을 추가합니다. 메시지/이메일을 보내거나 통화를 하거나 전화번호를 구매할 때마다 월렛 크레딧이 차감됩니다.

참고사항:

월렛의 일부 요금은 **6-24시간 후**에 표시될 수 있습니다.

월렛은 회사 청구 설정에서 설정한 최소 잔액에 도달하면 자동으로 충전됩니다. 모든 요금에 대해 고객의 카드가 월렛에 연결됩니다. 월렛은 무료 월간/일회성 크레딧으로도 충전할 수 있습니다.

이제 메시지가 전송될 때마다 Twilio/Mailgun이 에이전시에 요금을 청구하고, 시스템은 재청구 설정에 따라 고객의 월렛에 요금을 청구합니다. 예를 들어 고객이 $10 상당의 메시지 100개를 보냈고 재청구가 5배로 설정되었다면, Twilio에서 에이전시에 $10를 청구하고 고객의 월렛에서는 $50가 청구됩니다.

참고사항:

월렛이 충전되면 고객의 카드에 요금이 청구되고, 이 요금은 에이전시의 Stripe 계정으로 전송됩니다. 즉, 고객이 이 월렛 크레딧에 대해 에이전시에 지불하는 것입니다.

## 월렛은 어디서 접근할 수 있나요?

월렛은 `Sub Account Settings(하위 계정 설정) → Company Billing(회사 청구)`에서 찾을 수 있습니다.

![월렛 접근 경로](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179220627/original/r-cGcDfoBT7XnC_abUKNm_Ow2VnD_kVv6A.png?1642188595)

### 월렛 크레딧 환불

월렛 크레딧과 Stripe 결제는 연관되어 있지만 크레딧이 사용된 후 자동으로 동기화되지는 않습니다.

고객이 다음과 같은 상황이라면:

- 월렛에 $100 추가
- 월렛 크레딧 $40 사용
- 남은 월렛 잔액 = $60

먼저 월렛 잔액을 조정하지 않으면 Stripe에서 $100를 환불할 수 없습니다.

남은 월렛 잔액과 일치하는 금액만 환불하세요. 월렛 잔액보다 더 많이 환불하면 Stripe와 월렛 크레딧 간에 재정적 불일치가 발생합니다.

## 월렛 거래 내역을 어떻게 확인하나요?

`Settings(설정) → Company Billing(회사 청구) → Credits(크레딧) → See Details(자세히 보기)`에서 월렛 거래 내역을 확인할 수 있습니다:

![월렛 거래 내역](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179221231/original/TXqt8wBkRBOchmACU_YMdAKrYG2f-B_pfA.png?1642188770)

## 월렛을 충전하는 방법

월렛은 여러 가지 방법으로 충전할 수 있습니다.

### 1. 자동 충전 설정

`Company Billing(회사 청구) → Credits(크레딧)` 섹션에서 2가지 옵션이 있는 자동 충전 설정을 찾을 수 있습니다. 'Auto Recharge with(자동 충전 금액)' 필드에 입력한 금액이 잔액이 'when balance lower than(잔액이 다음보다 낮을 때)' 필드에 설정한 금액보다 낮아질 때마다 월렛에 추가됩니다.

![자동 충전 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179222076/original/LB4LFuJAKL9AnoirgKBlbEBMeNce505fQA.png?1642189100)

### 2. 고객 카드로 수동 충전 (잔액 추가)

Company Billing(회사 청구)의 'Add Balance(잔액 추가)' 버튼을 사용하여 고객의 월렛을 충전할 수 있습니다. 이 방법은 Company Billing 설정에서 추가한 고객의 기본 카드에 요금을 청구합니다.

![수동 충전](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179223494/original/PsQIq28kR5TZ_O13q4a634VUEcjUhPQJhg.png?1642189572)

### 3. 월간 무료 크레딧

하위 계정이 SaaS 플랜을 사용하고 있다면, 매월 하위 계정에 부여할 크레딧 금액을 설정할 수 있습니다. 이 크레딧은 매월 고객의 월렛에 추가됩니다. 이 크레딧은 SaaS Configurator(SaaS 구성기)에서 각 SaaS 플랜별로 수정할 수 있습니다.

#### 체험판 동작 (무료 크레딧)

SaaS 플랜에 체험판이 있다면, 에이전시는 무료 크레딧 발급 시점을 선택할 수 있습니다:

- 가입 즉시, 또는
- "Add credits after trial period ends(체험 기간 종료 후 크레딧 추가)" 토글을 사용해 체험 기간 종료 후에만

이 옵션을 활성화하면 체험이 전환될 때까지 크레딧이 발급되지 않습니다. 반복 크레딧은 체험 전환 시점부터 시작되어 그 시점부터 청구 주기를 따릅니다. 롤오버가 활성화되어 있다면 첫 번째 크레딧 발급 후에만 적용됩니다.

![월간 무료 크레딧](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179224350/original/WiV2HJcC_3jecI3DCoeQGb3DyuocqdGEog.png?1642189881)

이 크레딧의 금액은 각 하위 계정(SaaS 플랜 사용 중)별로 개별적으로 변경할 수도 있습니다. 개별 설정은 `Agency View(에이전시 뷰) → Accounts(계정) → View Details(자세히 보기)`에서 접근할 수 있습니다:

![개별 크레딧 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179224816/original/0s24US3LCvhVYQt3E9XEctFypBiJu_OYag.png?1642190032)

### 4. 에이전시 뷰에서 무료 크레딧 추가

`Agency View(에이전시 뷰) → Accounts(계정) → View Details(자세히 보기) → Manage Credits(크레딧 관리)`에서 고객의 월렛에 직접 무료 크레딧을 추가할 수도 있습니다. 이 크레딧은 누구에게도 청구되지 않습니다. 고객이 이 크레딧을 사용해 메시지/통화를 보내면 에이전시 소유자에게 해당 메시지/통화에 대한 요금이 청구되지만, 이 크레딧은 무료로 제공된 것이므로 고객에게는 청구되지 않습니다.

![에이전시 뷰에서 크레딧 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179225579/original/3Dc5PvZJROUW2mKJirq29F9YIpO-M57XIA.png?1642190302)

**월렛 크레딧의 일부가 이미 사용된 후 원래 Stripe 거래 전체를 환불하는 경우:**

월렛 사용 내역은 그대로 남습니다.

마이너스 잔액이나 정산 문제가 발생할 수 있습니다.

플랫폼은 이전에 사용된 월렛 크레딧을 자동으로 재계산하지 않습니다.

## 월렛에서 크레딧을 제거하는 방법

### 1. 무료 크레딧

이 크레딧은 `Agency View(에이전시 뷰) → Accounts(계정) → View Details(자세히 보기) → Manage Credits(크레딧 관리)`의 'Debit(차감)' 옵션을 사용해서 제거할 수 있습니다. 차감 옵션은 월렛에서 잔액만 제거하며 Stripe에서 금액을 환불하지는 않습니다. 따라서 원래 (유료) 크레딧을 제거하려면 다음 단락에서 언급한 추가 단계를 따라야 합니다.

![크레딧 제거](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179226525/original/_esPD3ycS5qkglxxcQPc2q681OVesOgh2A.png?1642190596)

### 2. 유료 크레딧

이 크레딧을 제거하려면:

1. 위에서 언급한 동일한 'Debit(차감)' 옵션을 사용합니다.

2. 아래에서 언급한 단계에 따라 Stripe 계정에서 이 크레딧에 대한 환불을 ***추가로*** 처리해야 합니다.

## 유료 크레딧 환불 처리 방법

1. `Agency Settings(에이전시 설정) → Stripe`에서 연결된 Stripe 계정으로 이동

[2. 해당 하위 계정과 연결된 고객의 Stripe customer를 찾습니다](how-to-upgrade-downgrade-saas-plan-for-a-location.md)

3. 이 고객의 'Payments(결제)' 섹션에서 크레딧 추가를 위한 결제를 찾고 해당 결제에 대해 'Refund payment(결제 환불)' 버튼을 클릭합니다

![결제 환불](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179228361/original/qJlF0g2BYgjbz12TNQikaXPZ7h3Za8ashg.png?1642191183)

완료되었습니다! :)

## 월렛 충전 재시도

### 1. SaaS 월렛 (전화 및 이메일 재청구용)

월렛을 자동으로 충전하는 시도를 최대 7회까지 합니다 (7회 시도 x 하루 1회 시도).

7회 시도가 모두 실패하면 자동 재시도를 중단합니다.

- 에이전시 관리자에게 알림을 보냅니다
- 로케이션 관리자에게 알림을 보냅니다

### 2. 에이전시 월렛 (ISV용)

월렛을 자동으로 충전하는 시도를 최대 **12회까지 합니다 (3일 x 하루 4회 시도).**

12회 시도가 모두 실패하면 자동 재시도를 중단합니다.

- 에이전시 관리자에게 알림을 보냅니다

참고사항:

반복적인 재시도가 Stripe 계정 정지를 야기했기 때문에 이러한 변경을 하고 있습니다. 수동 재시도를 포기한 후에는 사용자가 수동으로 충전할 수 있으며, 이렇게 하면 카운터가 재설정되고 자동 재시도가 다시 시작됩니다.

---
*원문 최종 수정: Thu, 5 Mar, 2026 at 3:49 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*