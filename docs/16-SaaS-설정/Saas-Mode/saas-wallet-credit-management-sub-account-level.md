---
원문: /support/solutions/articles/48001207115-saas-wallet-credit-management-sub-account-level
번역일: 2026-11-06
카테고리: 16-SaaS-설정
---

# SaaS 지갑 크레딧 관리 (서브 계정 기준)

SaaS 지갑이 무엇인지, 거래 내역은 어디서 보는지, 크레딧을 충전하거나 차감하고 환불하는 방법을 안내해요. 지갑 충전이 실패했을 때 재시도 규칙도 함께 설명해요. 에이전시 관리자만 쓸 수 있는 메뉴도 포함돼 있어요.

## SaaS 지갑이란?

Twilio와 이메일 재청구(rebilling) 요금을 고객에게 청구할 때 시스템은 고객의 지갑을 사용해요. 에이전시 소유자나 고객이 고객의 신용카드로 지갑을 충전하면 서브 계정 지갑에 메시지 크레딧이 쌓여요. 메시지나 이메일을 보내거나, 전화를 걸거나, 전화번호를 구매할 때마다 지갑 크레딧이 차감돼요.

{% hint style="info" %}
지갑 요금 일부는 6~24시간 뒤에 표시될 수 있어요.
{% endhint %}

**회사 청구** 설정에서 정한 최소 잔액에 도달하면 지갑이 충전돼요. 모든 요금은 지갑에 연결된 고객의 카드로 결제돼요. 매월 또는 1회성 무료 크레딧으로도 지갑을 충전할 수 있어요.

메시지를 보낼 때마다 Twilio/Mailgun은 에이전시에 요금을 청구하고, 시스템은 재청구 설정에 따라 고객의 지갑에서 요금을 차감해요. 예를 들어 고객이 $10어치 메시지 100건을 보냈고 재청구 배율이 5배라면, Twilio는 에이전시에 $10를 청구하고 고객의 지갑에서는 $50가 차감돼요.

{% hint style="info" %}
지갑을 충전하면 고객의 카드로 결제되고, 그 결제 금액은 에이전시의 Stripe 계정으로 들어가요. 즉, 고객이 지갑 크레딧 값을 에이전시에 지불하는 거예요.
{% endhint %}

---

## 지갑은 어디에서 볼 수 있나요?

**서브 계정 설정 > 회사 청구**에서 지갑을 확인할 수 있어요.

![서브 계정 설정의 회사 청구 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179220627/original/r-cGcDfoBT7XnC_abUKNm_Ow2VnD_kVv6A.png?1642188595)

### 지갑 크레딧 환불

지갑 크레딧과 Stripe 결제는 서로 관련이 있지만, 크레딧을 사용한 뒤에는 자동으로 동기화되지 않아요.

예를 들어 고객이 다음과 같이 지갑을 썼다고 해 볼게요.

- 지갑에 $100를 충전했어요.
- 지갑 크레딧 $40를 사용했어요.
- 남은 지갑 잔액은 $60예요.

지갑 잔액을 먼저 조정하지 않으면 Stripe에서 $100를 환불할 수 없어요.

{% hint style="warning" %}
남은 지갑 잔액과 같은 금액만 환불하세요. 지갑 잔액보다 많이 환불하면 Stripe와 지갑 크레딧의 금액이 서로 맞지 않게 돼요.
{% endhint %}

---

## 지갑 거래 내역은 어떻게 보나요?

**설정 > 회사 청구 > 크레딧 > See Details**(상세 내용 보기)에서 지갑 거래 내역을 확인할 수 있어요.

![크레딧 섹션의 거래 내역 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179221231/original/TXqt8wBkRBOchmACU_YMdAKrYG2f-B_pfA.png?1642188770)

---

## 지갑을 충전하려면

지갑은 여러 가지 방법으로 충전할 수 있어요.

### 1. 자동 충전 설정

**회사 청구 > 크레딧** 섹션에 자동 충전 설정이 있고, 옵션은 두 가지예요. **Auto Recharge with**(자동 충전 금액) 필드에 입력한 금액은 잔액이 **when balance lower than**(잔액이 다음 금액보다 적을 때) 필드에 입력한 금액보다 낮아질 때마다 지갑에 추가돼요.

![자동 충전 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179222076/original/LB4LFuJAKL9AnoirgKBlbEBMeNce505fQA.png?1642189100)

### 2. 고객의 카드로 직접 결제(잔액 추가)

**회사 청구**의 **Add Balance**(잔액 추가) 버튼으로 고객의 지갑을 충전할 수 있어요. 이 방법은 **회사 청구** 설정에 등록된 고객의 기본 카드로 결제돼요.

![잔액 추가 버튼 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179223494/original/PsQIq28kR5TZ_O13q4a634VUEcjUhPQJhg.png?1642189572)

### 3. 매월 지급하는 무료 크레딧

서브 계정이 SaaS 플랜을 쓰고 있다면, 매달 서브 계정에 지급할 크레딧 양을 정할 수 있어요. 이 크레딧은 매월 고객의 지갑에 추가돼요. SaaS 플랜별 크레딧 양은 **SaaS 구성기**에서 바꿀 수 있어요.

#### 체험 기간이 있을 때의 동작 (무료 크레딧)

SaaS 플랜에 체험 기간이 있으면, 에이전시는 무료 크레딧을 지급하는 시점을 고를 수 있어요.

- 가입하자마자 바로 지급해요.
- 체험 기간이 끝난 뒤에 지급해요. 이때는 **체험 기간 종료 후 크레딧 추가** 토글을 사용해요.

이 토글을 켜면 체험이 유료로 전환될 때까지 크레딧이 지급되지 않아요. 반복 지급 크레딧은 전환 시점부터 시작하고, 그 시점부터 결제 주기를 따라가요. 이월 설정을 켜 두었다면 첫 크레딧이 지급된 이후부터 적용돼요.

![SaaS 구성기의 무료 크레딧 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179224350/original/WiV2HJcC_3jecI3DCoeQGb3DyuocqdGEog.png?1642189881)

SaaS 플랜을 쓰는 서브 계정마다 이 크레딧 양을 따로 바꿀 수도 있어요. 개별 설정은 **Agency View**(에이전시 보기) **> 계정 > 상세 보기**에서 열어요.

![서브 계정별 크레딧 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179224816/original/0s24US3LCvhVYQt3E9XEctFypBiJu_OYag.png?1642190032)

### 4. 에이전시 보기에서 무료 크레딧 추가

**Agency View > 계정 > 상세 보기 > Manage Credits**(크레딧 관리)에서 고객의 지갑에 무료 크레딧을 직접 추가할 수도 있어요. 이 크레딧은 누구에게도 청구되지 않아요. 고객이 이 크레딧으로 메시지를 보내거나 전화를 걸면 에이전시 소유자에게 해당 요금이 청구되지만, 무료로 지급된 크레딧이므로 고객에게는 청구되지 않아요.

![크레딧 관리에서 무료 크레딧을 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179225579/original/3Dc5PvZJROUW2mKJirq29F9YIpO-M57XIA.png?1642190302)

{% hint style="warning" %}
지갑 크레딧 일부를 이미 사용한 뒤에 원래 Stripe 거래 금액 전체를 환불하면 다음과 같은 일이 생길 수 있어요.

- 지갑 사용 내역은 그대로 남아요.
- 마이너스 잔액이 생기거나 금액을 맞춰야 하는 문제가 생길 수 있어요.
- 이미 사용한 지갑 크레딧은 플랫폼이 자동으로 다시 계산하지 않아요.
{% endhint %}

---

## 지갑에서 크레딧을 제거하려면

### 1. 무료 크레딧

**Agency View > 계정 > 상세 보기 > Manage Credits**의 **차변** 옵션으로 이 크레딧을 제거할 수 있어요. **차변** 옵션은 지갑 잔액만 줄이고 Stripe 결제 금액은 환불하지 않아요. 원래 결제한(무료가 아닌) 크레딧을 제거하려면 다음 항목의 추가 단계를 따라야 해요.

![크레딧 관리에서 차변 옵션을 사용하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179226525/original/_esPD3ycS5qkglxxcQPc2q681OVesOgh2A.png?1642190596)

### 2. 무료가 아닌 크레딧

이 크레딧을 제거하려면 다음 순서로 진행하세요.

1. 위에서 설명한 것과 같이 **차변** 옵션을 사용해요.
2. 아래 안내에 따라 Stripe 계정에서 이 크레딧에 대한 환불도 진행해요.

---

## 무료가 아닌 크레딧을 환불하려면

1. **에이전시 설정 > Stripe**에 연결된 Stripe 계정으로 이동해요.
2. [서브 계정에 연결된 고객의 Stripe 고객 정보를 찾아요.](how-to-upgrade-saas-plan-for-a-location.md)
3. 해당 고객의 **결제** 섹션에서 크레딧을 추가한 결제 건을 찾아, 그 결제 건의 **Refund payment**(결제 환불) 버튼을 눌러요.

![Stripe에서 결제 환불 버튼을 누르는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48179228361/original/qJlF0g2BYgjbz12TNQikaXPZ7h3Za8ashg.png?1642191183)

이제 모두 끝났어요!

---

## 지갑 충전 재시도 규칙

### 1. SaaS 지갑 (전화·이메일 재청구용)

지갑 결제가 실패하면 최대 7번(하루 1번씩 7회) 자동으로 다시 결제를 시도해요.

7번 모두 실패하면 자동 재시도를 멈춰요.

- 에이전시 관리자에게 알려요.
- 서브 계정 관리자에게 알려요.

### 2. 에이전시 지갑 (ISV용)

지갑 결제가 실패하면 최대 12번(3일 동안 하루 4번씩) 자동으로 다시 결제를 시도해요.

12번 모두 실패하면 자동 재시도를 멈춰요.

- 에이전시 관리자에게 알려요.

{% hint style="info" %}
반복되는 재시도 때문에 Stripe 계정이 정지되는 일이 있어서 이렇게 바꿨어요. 수동 재시도를 중단하면 사용자가 직접 지갑을 충전할 수 있고, 직접 충전하면 재시도 횟수가 초기화되어 자동 재시도가 다시 시작돼요.
{% endhint %}
