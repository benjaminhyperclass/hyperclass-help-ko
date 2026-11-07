---
원문: /support/solutions/articles/48001204142-how-to-authorize-card-payments-using-the-old-funnel-builder
번역일: 2026-11-07
카테고리: 06-사이트
---

# 이전 퍼널 빌더(버전 1)에서 카드 결제 승인 설정하기

고객이 결제하기 전에 카드를 먼저 승인하도록 설정하는 방법을 안내해요. 이전 페이지 빌더(버전 1)의 퍼널과 웹사이트에서 쓸 수 있어요.

## 퍼널의 결제 확인 절차

(버전 1)

페이지 빌더 **버전 2**를 사용 중이라면 버전 2 전용 문서를 확인하세요.

![카드 승인 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48169690339/original/2maBDOymhv5gWVjaWPt_fG8P3CrL4siOlA.png?1639169983)

관련 문서: 페이지 빌더 버전 1과 버전 2의 차이

## 카드 승인이 작동하는 방식

- 이 기능은 기본으로 꺼져 있어요. 아래 단계를 따라 직접 설정해야 해요.
- 시스템이 '승인 금액'으로 입력한 금액을 고객의 은행 계좌에서 먼저 빼 가고, 나중에 다시 돌려줘요.
- 승인 과정에서 계좌에 잔액이 없으면 고객은 다음 단계로 넘어갈 수 없어요.
- 승인이 완료되면 시스템이 승인에 쓴 금액을 고객 계좌로 돌려줘요.
- 플랜에 **Trial days**(체험 일수)가 설정되어 있다면, 카드가 승인되는 즉시 체험 기간이 시작돼요.
- 환불된 금액이 고객의 은행 계좌로 돌아오기까지 영업일 기준 최대 5일이 걸릴 수 있어요.
- 구독과 결제 플랜에서만 작동해요.

{% hint style="info" %}
모든 플랜에 결제 전 승인을 적용하고 싶다면, 결제 폼에 연결된 플랜마다 같은 설정을 반복해야 해요.
{% endhint %}

## 버전 1 페이지 빌더에서 카드 결제 승인하기

1. 퍼널 또는 웹사이트 빌더로 이동해요. 상품이 연결된 퍼널 단계를 선택하세요.

   ![퍼널·웹사이트 빌더로 이동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48169672788/original/l8GQglGuJt3NPHjETWSy2omUIINM88u38w.png?1639164055)

2. **상품**을 클릭하세요.

   ![상품 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48170294110/original/dCwuHTpl0LNldTH6I2ddx6tsKKqWeEdoKQ.png?1639418585)

3. **편집** 아이콘을 클릭해 상품 설정을 열어요.

   이 예시에서는 카드 승인을 켜야 하는 플랜이 두 개예요(월간 $149, 연간 $1490). 먼저 플랜 1(월간 $149)을 설정하고, 돌아와서 플랜 2(연간 $1490)에도 같은 과정을 반복해요.

   ![편집 아이콘 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48169264569/original/eq8HbysR5MrGBCRiyc94ySS7bduxPM0vuw.png?1639079911)

4. **카드 승인**을 클릭하세요.

   ![카드 승인 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48169264570/original/mjPTbeR8JIFf7RsfkK5LPDoFmRlUY1Jtjw.png?1639079912)

5. 승인할 금액을 달러로 입력해요.

   {% hint style="info" %}
   여기에 입력한 금액은 고객 계좌에서 빠져나가요. 잔액이 부족하면 고객은 다음 단계로 진행할 수 없어요.

   이 예시에서는 시스템이 고객 계좌에서 $1를 가져간 뒤 같은 $1를 다시 환불해요.

   환불된 금액이 돌아오기까지 영업일 기준 최대 5일이 걸릴 수 있어요.

   구독과 결제 플랜에서만 작동해요.
   {% endhint %}

   ![승인할 금액 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48169264568/original/qbp9jhC5kQASNQo7Nh_mW-kkTdxHEAzTIg.png?1639079911)

6. **통화**를 클릭하고, 사용할 통화를 선택하세요.

   ![통화 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48169264556/original/5DSrcStrBXoKO42FtMK5r97HVZHVW1tK6g.png?1639079911)

7. 이 예시에서는 USD를 선택해요.

   ![USD 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48169264555/original/almER3wHyCICG_sDoH2G4z5iVMd13lJ0eg.png?1639079910)

8. **업데이트**를 클릭해 저장하면 설정이 끝나요.

   ![업데이트 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48169264552/original/mGgjT5ICn2nqvXEvKiIXv_7KAL4BosVryg.png?1639079910)
