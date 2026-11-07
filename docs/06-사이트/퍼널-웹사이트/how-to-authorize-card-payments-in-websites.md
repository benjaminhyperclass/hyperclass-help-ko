---
원문: /support/solutions/articles/48001204309-how-to-authorize-card-payments-in-websites
번역일: 2026-11-07
카테고리: 06-사이트
---

# 웹사이트에서 카드 결제 사전 인증 설정하기

결제를 받기 전에 고객의 카드를 먼저 인증하도록 설정하는 방법을 안내해요. 이 문서는 웹사이트 빌더 버전 2 기준이에요.

## 카드 인증이 작동하는 방식

- 이 기능은 기본으로 꺼져 있어요. 아래 설명대로 몇 단계를 추가로 설정해야 해요.
- 시스템이 "인증 금액"으로 입력한 금액을 고객의 은행 계좌에서 먼저 빼 간 뒤, 나중에 다시 돌려줘요.
- 인증 과정에서 계좌에 잔액이 부족하면 고객은 다음 단계로 넘어갈 수 없어요.
- 인증이 승인되면 시스템이 인증에 쓴 금액을 계좌로 돌려줘요.
- 플랜에 **Trial days**(체험 일수)가 설정되어 있으면, 카드가 인증되는 즉시 체험 기간이 시작돼요.
- 금액이 고객의 은행 계좌로 돌아오기까지 영업일 기준 최대 5일이 걸릴 수 있어요.
- 구독과 결제 플랜(Payment plans)에서만 작동해요.

{% hint style="info" %}
모든 플랜에서 구매 전에 결제를 인증하려면, 결제 폼에 연결된 플랜마다 이 과정을 반복해야 해요.

웹사이트 빌더 버전 1을 사용 중이라면 버전 1 전용 문서를 확인하세요.{% endhint %}

![카드 인증 안내 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48170356544/original/dG2ijMtNx-vtRvBxdy1O4t8--pBSuzcvWg.png?1639433714)

관련 문서: 페이지 빌더 버전 1과 버전 2의 차이점

## 카드 인증 설정하기

1. 웹사이트에서 주문 폼이 있는 단계로 이동한 뒤, 점 3개 아이콘을 클릭하세요.

   ![점 3개 아이콘 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48170358032/original/WWIbWCnmtTu8hy8qQMQD8w8zCCmfx5OLpQ.png?1639434227)

2. **상품**을 클릭하세요.

   페이지에 연결된 상품이 없다면, 먼저 상품을 추가한 뒤에 진행하세요.

   ![상품 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48170358033/original/pJWrb68xxY6JEmthaNy1rnkRH4pi4CDq8g.png?1639434227)

3. **편집** 아이콘을 클릭하세요.

   상품 설정이 열려요. 이 예시에는 인증을 켜야 하는 플랜이 두 개 있어요(월간 $149, 연간 $1490).

   먼저 플랜 1(월간 $149)을 설정하고, 그다음 돌아와서 플랜 2(연간 $1490)도 같은 방법으로 설정해요.

   ![편집 아이콘 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48170358910/original/vGZnyslIrBmEvFxRqymkFAskDdEWG9tX3A.png?1639434707)

4. 화면 맨 아래로 스크롤해서 **추가 옵션**을 클릭하세요.

   ![맨 아래에서 추가 옵션 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48170358904/original/CRYbVpk4Wp87N2H3jL8X4eWevo2kenAY2g.png?1639434705)

5. **사용자 지정 인증**을 클릭하고 금액을 입력하세요.

   {% hint style="info" %}
   여기에 입력한 금액은 고객의 계좌에서 빠져나가요.

   잔액이 부족하면 고객은 다음 단계로 넘어갈 수 없어요. 이 예시에서는 시스템이 고객 계좌에서 $1를 가져간 뒤 $1를 다시 환불해요.

   환불 처리에는 영업일 기준 최대 5일이 걸릴 수 있어요. 구독과 결제 플랜에서만 작동해요.

   입력하는 숫자는 다음 조건을 지켜야 해요.
   - 1 이상이어야 해요.
   - 소수점 이하는 두 자리까지만 쓸 수 있어요.
   - 음수는 쓸 수 없어요.
   {% endhint %}

   ![사용자 지정 인증 금액 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48269611800/original/pv4XNPR4ffDwC44zlDdjWMlnSxDdv72vDA.png?1671103231)

6. **저장**을 클릭하세요.

   꼭 **저장**을 눌러야 설정이 적용돼요. 이것으로 설정이 끝나요.

   ![저장 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48269611888/original/eYaeNHXHeMdARZr62HiLerlicDcFdRizUw.png?1671103256)
