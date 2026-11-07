---
원문: https://help.gohighlevel.com/support/solutions/articles/48001204314-how-to-authorize-card-payments-using-the-old-website-builder
번역일: 2026-11-07
카테고리: 06-사이트
---

# 예전 웹사이트 빌더(버전 1)에서 카드 결제 승인 설정하기

구매 전에 고객의 카드를 먼저 승인받고 싶을 때 쓰는 설정이에요. 이 문서는 예전 웹사이트 빌더(버전 1)에서 상품별로 카드 승인을 켜는 방법과 승인 방식을 안내해요.

[동영상](https://www.youtube.com/embed/pmxcMfzmIe8?&wmode=opaque)

웹사이트 빌더 버전 2를 사용 중이라면 버전 2용 도움말을 참고하세요.

![웹사이트 빌더 버전 1 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48170360013/original/eTmb5y8-L8XBuNd_8XJ_b6lb7eldXSIU3Q.png?1639435259)

관련 문서: 페이지 빌더 버전 1과 버전 2의 차이

## 카드 승인은 이렇게 작동해요

- 기본으로 켜져 있지 않아요. 아래 설명대로 몇 가지 단계를 직접 설정해야 해요.
- 시스템이 "승인 금액"으로 정한 금액을 고객의 은행 계좌에서 먼저 빼 간 뒤, 나중에 다시 돌려줘요.
- 승인 과정에서 계좌에 잔액이 없으면 고객은 다음 단계로 넘어갈 수 없어요.
- 승인이 완료되면 시스템이 승인에 사용한 금액을 고객 계좌에 되돌려 줘요.
- 플랜에 **Trial days**(체험 기간)가 설정되어 있으면, 카드가 승인되는 즉시 체험 기간이 시작돼요.
- 금액이 고객의 은행 계좌로 돌아오기까지 영업일 기준으로 최대 5일이 걸릴 수 있어요.
- 구독과 결제 플랜에서만 작동해요.

{% hint style="info" %}
모든 플랜에서 구매 전에 결제를 승인받으려면, 결제 폼에 연결된 플랜마다 이 과정을 반복해야 해요.
{% endhint %}

## 설정 방법

1. 웹사이트에서 주문 폼이 들어 있는 단계를 찾아 점 3개 아이콘을 클릭하세요.

   ![점 3개 아이콘 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48170360364/original/cNMaC-p9WFR_LaNAtbqNMymeR_QBauQtdw.png?1639435447)

2. **상품**을 클릭하세요. 페이지에 연결된 상품이 없다면 먼저 상품을 추가한 뒤 이어서 진행하세요.

   ![상품 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48170360366/original/_Fn5Lzm-A0GcGIMaYwngVWh00Hp2qgndtw.png?1639435447)

3. **편집** 아이콘을 클릭하세요. 상품 설정이 열려요. 이 예시에서는 승인을 켜야 하는 플랜이 두 개(월 $149, 연 $1490)예요. 먼저 플랜 1(월 $149)을 설정하고, 그다음 플랜 2(연 $1490)에도 같은 과정을 반복해요.

   ![편집 아이콘 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48170360465/original/4NiKSkt3B81dw8dknWwHAD5nKaBlKERxqw.png?1639435477)

4. **카드 승인**을 클릭하세요.

   ![카드 승인 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48170360467/original/SS4Zt7VbCJqI0cYo1CaNOEkrb_f5L1QBNQ.png?1639435478)

5. 승인할 금액을 달러로 입력하세요.

   {% hint style="info" %}
   여기에 입력한 금액은 고객의 계좌에서 빠져나가요. 잔액이 없으면 고객은 다음 단계로 진행할 수 없어요.

   이 예시에서는 시스템이 고객 계좌에서 "$1"를 빼 간 뒤 같은 "$1"를 다시 돌려줘요.

   환불된 금액이 돌아오기까지 영업일 기준으로 최대 5일이 걸릴 수 있어요. 구독과 결제 플랜에서만 작동해요.
   {% endhint %}

   ![승인할 금액 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48172058669/original/2TylRONBkqsiYk9Y-WolQjjADwEXTTEcbA.png?1639781682)

6. **통화**를 클릭하고 사용할 통화를 입력하세요.

   ![통화 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48172058694/original/02uEUg5tzFbTLN7qVrea5_EgRVGw6GeynA.png?1639781713)

7. 이 예시에서는 USD를 클릭하세요.

   ![USD 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48172058722/original/X8CvW6bFFgbw8k05npD0lhjcs4_kDdMjBg.png?1639781751)

8. **업데이트**를 클릭하세요. 꼭 클릭해야 설정이 반영되고, 이걸로 끝이에요.
