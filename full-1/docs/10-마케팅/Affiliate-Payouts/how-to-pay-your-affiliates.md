---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003657-how-to-pay-your-affiliates
번역일: 2026-11-07
카테고리: 10-마케팅
---

# 제휴 파트너에게 지급하기

PayPal 자동 지급이나 수동 결제로 제휴 파트너에게 수수료를 지급하는 방법을 안내해요. 수동으로 처리한 지급은 하이퍼클래스에서 완료로 표시해야 해요.

하이퍼클래스에서는 PayPal 자동 지급이나 원하는 수동 결제 방식으로 제휴 파트너에게 지급할 수 있어요. 다만 더 빠르고 효율적인 방법도 있어요.

[동영상](https://www.youtube.com/embed/LSBKOGPSC2c?&wmode=opaque)

---

## 하이퍼클래스에서 쓸 수 있는 지급 방법

1. **PayPal 자동 지급(가장 빠름)**: PayPal Payouts API로 하이퍼클래스 대시보드에서 바로 제휴 파트너에게 지급해요. PayPal에 따로 로그인하거나 지급 완료로 직접 표시할 필요가 없어요.
2. **은행 결제**: 은행이나 다른 방법으로 직접 지급한 뒤, 하이퍼클래스에서 지급 완료로 표시해요.

---

## 지급 진행 방식

제휴 지급은 두 단계로 진행돼요.

1. **지급 내역 생성**: 하이퍼클래스는 캠페인의 커미션 설정과 지급 조건에 따라 지급 내역을 자동으로 만들어요. 만들어진 지급 내역은 **대기 중** 탭에 표시되고, 여기서 검토할 수 있어요.
2. **지급하고 결제 완료로 표시**: PayPal 자동 지급이나 수동 방식 중에서 고를 수 있어요. 방식별 진행 방법은 아래와 같아요.

---

### 1. PayPal 자동 지급(가장 빠른 방법)

PayPal Payouts API는 여러 제휴 파트너에게 한 번에 지급할 때 가장 빠르고 비용 효율적인 방법이에요. 처음에 한 번만 설정해 두면 하이퍼클래스를 떠나지 않고도 안전하게 지급할 수 있어요.

PayPal 자동 지급을 설정하는 방법은 별도 도움말에서 확인하세요.

### 2. 수동으로 지급하기

은행 결제를 선호한다면 지급을 직접 처리한 뒤 하이퍼클래스에서 지급 완료로 표시할 수 있어요. 순서는 다음과 같아요.

1. 하이퍼클래스에서 **지급** 페이지로 이동해요.
2. **대기 중** 탭에서 처리할 지급 건을 승인해요.

   ![대기 중 탭에서 지급 건을 승인하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033860750/original/uw6AMijpWNsuDCoOJNR7-Mfh1MiIr7g5xg.png?1727775682)
3. 승인한 지급 건이 모여 있는 **Approved for Payout**(지급 승인됨) 탭으로 이동해요.

   ![지급 승인됨 탭 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033860803/original/D-4hKfsh67Q2x3RolQYV-fKdRqzd5R0WqQ.png?1727775726)
4. 지급할 건을 선택해요.
5. **결제**를 클릭해요.

   ![결제 버튼을 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033860836/original/0fbZWtn7v82FTa-0SLKp1xgapupSbTfuKg.png?1727775742)

{% hint style="info" %}
**결제** 작업은 **Pay Affiliate Manager Payout**(제휴 매니저 지급 결제) 권한이 있는 관리자만 쓸 수 있어요. 이 권한이 꺼져 있으면 지급 작업이 보이지 않아요.
{% endhint %}

6. **은행** 탭으로 이동해요.

   ![은행 탭 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044056750/original/PyWjrPkWHZVp2KTK4WqAPTGfFf9IQ4stLQ.png?1743051211)
7. 화면 안내에 따라 진행하고, 하이퍼클래스 밖에서 결제를 처리해야 하면 필요에 따라 CSV 파일을 내려받아요.
8. 결제를 마친 뒤 하이퍼클래스로 돌아와 **결제 완료로 표시**를 클릭해요.

   ![결제 완료로 표시 버튼을 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044056767/original/eu3nVm2pn_adlJszcu0wbt4RPv09ZxhkZQ.png?1743051320)

{% hint style="warning" %}
지급을 승인하기 전에 환불과 차지백을 먼저 확인하세요. 일회성 상품과 구독의 환불은 제휴 관리자의 커미션 지급에 자동으로 반영되지 않아요.
{% endhint %}

{% hint style="warning" %}
**제휴 파트너별 지급 방법 설정**

제휴 파트너가 쓸 수 있는 지급 방법(PayPal, **계좌 이체**)을 직접 정할 수 있어요.

설정 방법은 다음과 같아요.

1. **제휴 관리자 > 설정**으로 이동해요.
2. **Affiliate Portal Settings**(제휴 포털 설정) > **Configure Payout Methods**(지급 방법 설정)를 클릭해요.
3. 사용할 지급 방법을 선택해요.
4. **변경사항 저장**을 클릭해요.

제휴 파트너에게는 켜 둔 지급 방법만 보여요. 그래서 지급 과정이 더 간단해져요.

제휴 파트너가 지급받을 방법을 직접 설정할 수 있도록, 지급 방법을 항상 하나 이상 켜 두세요.

![지급 방법 설정 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044057818/original/2GURtm_H2ImX3KAPRbcZu9XP47xa9ZLUgw.png?1743052838)
![지급 방법 설정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044057820/original/q7xZTCKlD35NOb_Xox8np0DfNlTjxDcrhA.png?1743052847)
{% endhint %}

---

PayPal 자동 지급과 수동 방식 중 어느 쪽을 쓰든, 위 순서대로 진행하면 제휴 파트너에게 제때 효율적으로 지급할 수 있어요.
