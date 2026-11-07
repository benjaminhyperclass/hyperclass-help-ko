---
원문: /support/solutions/articles/48001204216-how-to-authorize-card-payments-in-funnels
번역일: 2026-11-07
카테고리: 06-사이트
---

# 퍼널에서 카드 결제 인증 설정하기

퍼널 주문 폼에서 고객이 구매하기 전에 카드 결제를 먼저 인증하도록 설정하는 방법을 안내해요. 인증 금액을 잠시 결제했다가 되돌려 받는 방식이며, 구독과 결제 플랜에서만 쓸 수 있어요.

{% hint style="info" %}
문서에 나온 금액(달러)과 요금제 이름은 참고용이에요. 하이퍼클래스에서 실제로 적용되는 요금은 [요금제 안내](../../00-자주묻는질문/pricing-plans.md)와 [AI·SMS·음성 사용료](../../00-자주묻는질문/usage-costs.md)를 확인하세요.
{% endhint %}

## 퍼널의 결제 인증 과정 (버전 2)

퍼널 빌더 버전 1을 사용 중이라면 버전 1용 문서를 참고하세요.
![퍼널 빌더 버전 안내 이미지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48169674666/original/PNaVmfCFCN4Dp1mdI8ArXMUx4LW68v5STQ.png?1639164658)

관련 문서: 페이지 빌더 버전 1과 버전 2의 차이점

---

## 인증이 작동하는 방식

- 이 기능은 기본으로 꺼져 있어요. 아래 설명대로 몇 가지 단계를 직접 설정해야 해요.
- 시스템이 "인증 금액"에 입력한 금액을 고객의 은행 계좌에서 먼저 빼 간 뒤, 나중에 다시 돌려줘요.
- 인증하는 시점에 계좌에 잔액이 없으면 고객은 다음 단계로 넘어갈 수 없어요.
- 인증이 승인되면 시스템이 인증에 쓴 금액을 계좌로 돌려줘요.
- 플랜에 **Trial days**(체험 기간)가 설정되어 있다면, 카드가 인증되는 즉시 체험 기간도 시작돼요.
- 돌려받는 금액이 고객의 은행 계좌에 반영되기까지 영업일 기준 최대 5일이 걸릴 수 있어요.
- 구독과 결제 플랜에서만 쓸 수 있어요.

{% hint style="info" %}
결제 폼에 연결된 모든 플랜에서 구매 전에 결제를 인증하려면, 플랜마다 같은 설정을 반복해야 해요.
{% endhint %}

---

## 인증 설정

1. **상품**을 클릭하세요.

   주문 폼이 들어 있는 퍼널 단계로 이동해서 **상품**을 클릭해요.

   페이지에 연결된 상품이 하나도 보이지 않으면, 먼저 상품을 추가한 뒤에 다음 단계로 넘어가세요.

   ![상품 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48169674242/original/OlqBbrr8_q-cWpSor89fzZ5bkxemxAeYxA.png?1639164514)

2. **편집** 아이콘을 클릭하세요.

   상품 설정이 열려요. 이 예시에는 인증을 켜야 하는 플랜이 두 개 있어요. 월간 플랜($149)과 연간 플랜($1490)이에요.

   먼저 플랜 1(월간 $149)을 설정하고, 돌아와서 플랜 2(연간 $1490)도 같은 방법으로 설정해요.

   ![편집 아이콘 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48169674238/original/-IG2y_utYnSDtA0RTQbMGB_bS8V0dR2VDQ.png?1639164513)

3. 맨 아래로 스크롤해서 **추가 옵션**을 클릭하세요.

   ![맨 아래에서 추가 옵션 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48169674227/original/SgMEtPuNeHlY-JEtaxMSInAHv6Pxd0m-Aw.png?1639164512)

4. **사용자 지정 인증** 입력란에 인증 금액을 입력하세요.

   {% hint style="info" %}
   여기에 입력한 금액은 고객의 계좌에서 실제로 빠져나가요. 잔액이 부족하면 고객은 다음 단계로 진행할 수 없어요.

   이 예시에서는 시스템이 고객 계좌에서 "$1"를 가져간 뒤 같은 "$1"를 환불해요.

   환불된 금액이 고객 계좌로 돌아오기까지 영업일 기준 최대 5일이 걸릴 수 있어요.

   구독과 결제 플랜에서만 쓸 수 있어요.

   입력하는 숫자는 다음 조건을 지켜야 해요.
   - 1 이상이어야 해요.
   - 소수점 이하는 두 자리로 입력해야 해요.
   - 음수는 입력할 수 없어요.
   {% endhint %}

   ![사용자 지정 인증 금액 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48269604649/original/W5N5H9SpSPOHU0ae6pf_WUgEgUwKLpIA3w.png?1671101914)

5. **저장**을 클릭하세요.

   **저장**을 꼭 눌러야 설정이 끝나요.

   ![저장 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48269605071/original/fLw3sAIvnZx1c8G7SS7UwVYOpg3-DdGqvw.png?1671102027)
