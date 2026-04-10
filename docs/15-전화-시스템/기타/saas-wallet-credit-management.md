---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# SaaS 지갑 크레딧 관리 - 하위 계정 수준

#### 이 가이드에서 다루는 내용:

[SaaS 지갑이란?](#saas-지갑이란)

**[지갑은 어디에서 접근할 수 있나요?](#지갑은-어디에서-접근할-수-있나요)**

**[지갑 거래 내역은 어떻게 확인하나요?](#지갑-거래-내역은-어떻게-확인하나요)**

**[지갑을 충전하는 방법](#지갑을-충전하는-방법)**

[1. 자동 충전 설정](#1-자동-충전-설정)

[2. 고객 카드로 수동 충전 (잔액 추가)](#2-고객-카드로-수동-충전-잔액-추가))

[3. 월 무료 크레딧](#3-월-무료-크레딧)

[4. 에이전시 뷰에서 무료 크레딧 추가](#4-에이전시-뷰에서-무료-크레딧-추가)

[지갑에서 크레딧을 제거하는 방법](#지갑에서-크레딧을-제거하는-방법)

[1. 무료 크레딧](#1-무료-크레딧)

[2. 유료 크레딧](#2-유료-크레딧)

[유료 크레딧 환불 처리 방법](#유료-크레딧-환불-처리-방법)

[지갑 충전 재시도](#지갑-충전-재시도)

[1. SaaS 지갑 (전화 및 이메일 재청구용)](#1-saas-지갑-전화-및-이메일-재청구용))

[2. 에이전시 지갑 (ISV용)](#2-에이전시-지갑-isv용))

# **SaaS 지갑이란?**

Twilio와 이메일 재청구 비용을 고객에게 청구하기 위해 시스템은 고객의 지갑을 사용합니다. 에이전시 소유자/고객은 고객의 신용카드로 지갑을 충전하여 로케이션 지갑에 메시징 크레딧을 추가합니다. 메시지/이메일을 보내거나 통화를 하거나 전화번호를 구매할 때마다 지갑 크레딧이 차감됩니다.

참고사항: 

지갑의 일부 청구 내역은 **6 - 24시간 후**에 표시될 수 있습니다.

지갑은 Company Billing 설정에서 설정한 최소 잔액에 도달하면 자동으로 충전됩니다. 모든 청구에는 고객의 카드가 지갑에 연결되어 있습니다. 지갑은 무료 월간/일회성 크레딧으로도 충전할 수 있습니다.

이제 메시지가 전송될 때마다 Twilio/Mailgun이 에이전시에 청구하고, 시스템은 재청구 설정에 따라 고객의 지갑에서 차감합니다. 예를 들어, 고객이 $10 상당의 100개 메시지를 보냈고 재청구가 5배로 설정된 경우, 에이전시는 Twilio에 $10를 지불하고 고객의 지갑에서는 $50가 차감됩니다.

참고사항: 

지갑이 충전되면 고객의 카드에서 청구되고 이 청구 금액은 에이전시의 Stripe 계정으로 전송됩니다. 즉, 고객이 이 지갑 크레딧에 대해 에이전시에 비용을 지불하는 것입니다.

## 지갑은 어디에서 접근할 수 있나요?

지갑은 하위 계정 설정(Sub Account Settings) > 회사 청구(Company Billing)에서 찾을 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179220627/original/r-cGcDfoBT7XnC_abUKNm_Ow2VnD_kVv6A.png?1642188595)

### **지갑 크레딧 환불**
지갑 크레딧과 Stripe 결제는 연관되어 있지만 크레딧을 사용한 후에는 자동으로 동기화되지 않습니다.

고객이 다음과 같은 상황이라면:

- 지갑에 $100 추가
- $40의 지갑 크레딧 사용
- 남은 지갑 잔액 = $60

먼저 지갑 잔액을 조정하지 않으면 Stripe에서 $100를 환불할 수 없습니다.

남은 지갑 잔액과 일치하는 금액만 환불하세요. 지갑 잔액보다 더 많이 환불하면 Stripe와 지갑 크레딧 간의 재무적 불일치가 발생합니다.

## **지갑 거래 내역은 어떻게 확인하나요?**

설정(Settings) > 회사 청구(Company Billing) > 크레딧(Credits) > 자세히 보기(See Details)에서 지갑 거래 내역을 확인할 수 있습니다:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179221231/original/TXqt8wBkRBOchmACU_YMdAKrYG2f-B_pfA.png?1642188770)

## **지갑을 충전하는 방법**

지갑은 여러 가지 방법으로 충전할 수 있습니다.

### 1. 자동 충전 설정

회사 청구(Company Billing) > 크레딧(Credits) 섹션에서 2가지 옵션이 있는 자동 충전 설정을 찾을 수 있습니다. '자동 충전 금액' 필드에 입력한 금액이 잔액이 '최소 잔액' 필드에 설정한 금액보다 낮아질 때마다 지갑에 추가됩니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179222076/original/LB4LFuJAKL9AnoirgKBlbEBMeNce505fQA.png?1642189100)

### 2. 고객 카드로 수동 충전 (잔액 추가)

회사 청구의 '잔액 추가(Add Balance)' 버튼을 사용하여 고객의 지갑을 충전할 수 있습니다. 이 방법은 회사 청구 설정에 추가된 고객의 기본 카드로 청구됩니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179223494/original/PsQIq28kR5TZ_O13q4a634VUEcjUhPQJhg.png?1642189572)

### 3. 월 무료 크레딧

하위 계정이 SaaS 플랜을 사용 중이라면 매월 하위 계정에 지급할 크레딧 금액을 설정할 수 있습니다. 이 크레딧은 매달 고객의 지갑에 추가됩니다. 이 크레딧은 SaaS Configurator에서 각 SaaS 플랜에 대해 수정할 수 있습니다.

#### **체험판 동작 (무료 크레딧)**

SaaS 플랜에 체험판이 있는 경우, 에이전시는 무료 크레딧 지급 시기를 선택할 수 있습니다:

- 가입 즉시 지급하거나
- "체험 기간 종료 후 크레딧 추가" 토글을 사용하여 체험판 종료 후에만 지급

이 옵션이 활성화되면 체험판이 유료로 전환될 때까지 크레딧이 지급되지 않습니다. 정기 크레딧은 체험판 전환 시점부터 시작되어 그 시점부터 청구 주기를 따릅니다. 롤오버가 활성화된 경우 첫 번째 크레딧 지급 후에만 적용됩니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179224350/original/WiV2HJcC_3jecI3DCoeQGb3DyuocqdGEog.png?1642189881)

이 크레딧의 금액은 각 하위 계정(SaaS 플랜 사용 중인)에 대해 개별적으로 변경할 수도 있습니다. 개별 설정은 에이전시 뷰(Agency View) > 계정(Accounts) > 세부 정보 보기(View Details)에서 접근할 수 있습니다:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179224816/original/0s24US3LCvhVYQt3E9XEctFypBiJu_OYag.png?1642190032)

### 4. 에이전시 뷰에서 무료 크레딧 추가

에이전시 뷰(Agency View) > 계정(Accounts) > 세부 정보 보기(View Details) > 크레딧 관리(Manage Credits)에서 고객의 지갑에 직접 무료 크레딧을 추가할 수도 있습니다. 이 크레딧은 누구에게도 청구되지 않습니다. 고객이 이 크레딧을 사용하여 메시지/통화를 하면 에이전시 소유자가 해당 메시지/통화에 대해 청구되지만, 이 크레딧은 무료로 제공되었으므로 고객에게는 청구되지 않습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179225579/original/3Dc5PvZJROUW2mKJirq29F9YIpO-M57XIA.png?1642190302)

**지갑 크레딧이 일부 사용된 후 원래 Stripe 거래 전액을 환불하는 경우:**

지갑 사용 내역은 그대로 남습니다.

음수 잔액 또는 정산 문제가 발생할 수 있습니다.

플랫폼은 이전에 사용된 지갑 크레딧을 자동으로 재계산하지 않습니다.

## 지갑에서 크레딧을 제거하는 방법

### 1. 무료 크레딧

이 크레딧은 에이전시 뷰(Agency View) > 계정(Accounts) > 세부 정보 보기(View Details) > 크레딧 관리(Manage Credits)의 '차감(Debit)' 옵션을 사용하여 제거할 수 있습니다. 차감 옵션은 지갑에서 잔액만 제거하고 Stripe에서 금액을 환불하지는 않으므로, 원래(유료) 크레딧을 제거하려면 다음 단락에 설명된 추가 단계를 따라야 합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179226525/original/_esPD3ycS5qkglxxcQPc2q681OVesOgh2A.png?1642190596)

### 2. 유료 크레딧

이 크레딧을 제거하려면:

1. 위에서 언급한 동일한 '차감(Debit)' 옵션을 사용합니다.

2. 아래 언급된 단계에 따라 Stripe 계정에서 이 크레딧에 대한 환불을 발급해야 ***합니다***.

## **유료 크레딧 환불 처리 방법**

1. 에이전시 설정(Agency Settings) > Stripe에 연결된 Stripe 계정으로 이동합니다.

[**2.** 해당 하위 계정과 연결된 고객의 Stripe 고객을 찾습니다](how-to-upgrade-downgrade-saas-plan-for-a-location.md)

**3.** 이 고객의 '결제(Payments)' 섹션에서 크레딧 추가에 대한 결제를 찾고 해당 결제에 대해 '결제 환불(Refund payment)' 버튼을 클릭합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179228361/original/qJlF0g2BYgjbz12TNQikaXPZ7h3Za8ashg.png?1642191183)

완료되었습니다! :)

## **지갑 충전 재시도**

### 1. SaaS 지갑 (전화 및 이메일 재청구용)

최대 7회(7번 시도 x 1일 1회)까지 자동으로 지갑 충전을 시도합니다.

7번 시도가 모두 실패하면 자동 재시도를 중단합니다.

- 에이전시 관리자에게 알림
- 로케이션 관리자에게 알림

### 2. 에이전시 지갑 (ISV용)

최대 **12회(3일 x 하루 4회 시도)**까지 자동으로 지갑 충전을 시도합니다.

12번 시도가 모두 실패하면 자동 재시도를 중단합니다.

- 에이전시 관리자에게 알림

참고사항: 

반복적인 재시도가 Stripe 계정 정지를 유발하기 때문에 이러한 변경을 하고 있습니다. 자동 재시도를 포기하면 사용자가 수동으로 충전할 수 있으며, 이를 통해 카운터가 리셋되고 자동 재시도가 다시 시작됩니다.

---
*원문 최종 수정: Thu, 5 Mar, 2026 at 3:49 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*