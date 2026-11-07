---
원문: /support/solutions/articles/155000006914-how-to-use-order-upsell-in-forms
번역일: 2026-11-06
카테고리: 36-기타
---

# 폼에서 주문 업셀 사용하기

V2 퍼널을 사용해 하이퍼클래스 폼 결제 흐름에 원클릭 주문 업셀을 추가하는 방법을 안내해요. 고객은 폼을 제출한 직후, 결제 정보를 다시 입력하거나 다른 결제 페이지로 이동하지 않고 상품을 하나 더 구매할 수 있어요. 덕분에 평균 주문 금액을 높이는 데 도움이 돼요.

## 폼의 주문 업셀이란?

주문 업셀은 고객이 폼으로 구매를 마친 직후에 추가 상품을 제안하는 기능이에요. 업셀은 처음 결제할 때 저장된 결제 토큰을 다시 사용해요. 그래서 고객은 클릭 한 번으로 제안을 수락할 수 있어요. 퍼널 흐름을 복잡하게 만들지 않고도 매출을 늘릴 수 있어요.

구매자의 관심이 가장 높은 순간에 관련 상품을 제안하면 퍼널 전환율을 높이는 데 도움이 돼요. 두 번째 구매 때 결제 정보나 개인 정보를 다시 입력할 필요가 없어서 구매 과정의 번거로움도 줄어요.

## 주문 업셀의 장점

주문 업셀을 쓰면 결제 과정을 간결하게 만들고 매출을 높일 수 있어요. 저장된 결제 토큰을 활용하고 불필요한 단계를 없애서, 효율적으로 전환되는 업그레이드 경로를 만들 수 있어요.

- 평균 주문 금액 상승: 고객이 구매를 마치는 순간에 관련 추가 상품을 제안할 수 있어요.
- 번거로움 없는 결제 경험: 고객이 결제 정보나 개인 정보를 다시 입력하지 않아도 돼요.
- 다양한 상품 유형 지원: 일반 판매 상품(Normal Sell)과 범프 상품(Bump)에서 쓸 수 있어요.
- 주요 결제 제공업체 지원: V2 퍼널에서 Stripe, Authorize.net, NMI, PayPal, Square, 승인된 마켓플레이스 결제 제공업체와 함께 쓸 수 있어요.
- 폼 재사용: **Native Form**(네이티브 폼) 요소를 쓰면 같은 폼을 여러 퍼널에서 사용할 수 있어요.
- 자동화 연계: 기본 구매와 업셀 구매 모두 **Order Submitted**(주문 제출) 자동화를 실행해요. 그래서 워크플로우 대상을 정확하게 지정할 수 있어요.

## 폼의 Sell Product 요소

**Sell Product**(상품 판매) 요소는 폼과 구매할 상품을 연결해 줘요. 구매자는 이 요소를 통해 폼에서 바로 결제를 마칠 수 있어요.

- 가격, 이미지, 옵션, 세금, 재고 설정이 포함된 상품을 추가할 수 있어요.
- 이 단계에서 저장된 결제 토큰이 업셀 구매에 다시 사용돼요.
- 주문 업셀 흐름이 작동하려면 이 요소를 올바르게 설정해야 해요.

## 업셀 버튼 설정

업셀 버튼은 원클릭 업셀 구매를 처리하는 핵심 요소예요.

- 업셀 퍼널 단계에 **버튼** 요소를 놓으세요.
- **Action**(액션)을 **Upsell Product**(업셀 상품)로 설정하세요.
- 업셀로 제안할 상품을 선택하세요.
- 고객이 버튼을 클릭하면, 처음 구매 때 저장된 결제 토큰으로 바로 결제가 처리돼요.

## Order Summary 요소

**Order Summary**(주문 요약) 요소를 쓰면 고객이 기본 상품과 업셀 상품을 포함해 무엇을 구매했는지 한눈에 볼 수 있어요.

- 업셀 확인 페이지나 마지막 감사 페이지에 Order Summary 요소를 추가하세요.
- 요약에는 메인 상품과, 진행 중에 수락한 업셀 상품이 모두 표시돼요.

## 퍼널 연동 시 권장 사항

주문 업셀이 제대로 작동하려면 V2 퍼널과 **Native Form** 요소로 설정해야 해요.

- V2 퍼널만 사용하세요. 주문 업셀은 V1 퍼널이나 웹사이트에서는 작동하지 않아요.
- 결제 토큰이 다음 단계로 전달되도록 **Native Form** 요소를 사용하세요.
- 서드파티 쿠키 문제를 막으려면 업셀 단계를 같은 도메인에 두세요.
- 업셀을 사용한다면 Order Submitted 워크플로우에 긴 **대기** 단계를 넣지 마세요.
- 재고 관리를 켠 상품은 재고가 충분한지 확인하세요. 재고가 부족하면 업셀 결제가 실패할 수 있어요.

## 폼에 주문 업셀 설정하기

처음부터 끝까지 주문 업셀을 설정하는 과정을 안내해요.

### 1단계: 폼 만들기 또는 편집하기

#### Sell Products 요소 추가

**결제** 섹션에 **Sell Products**(상품 판매) 요소가 있어요. 이 요소를 폼으로 끌어다 놓으면 상품 기반 결제를 쓸 수 있어요. 이 요소를 추가해야 폼에서 결제 정보를 받고, 원클릭 업셀에 필요한 토큰을 만들 수 있어요.

![결제 섹션에서 Sell Products 요소 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060619298/original/QOgv3kq_Ula59B7FFM6VFHzEi3L_Gq6tLQ.png?1765799525)

#### 상품 추가

Sell Products 설정 패널에서 **상품 추가**를 선택해 상품을 연결해요. 여기서 첫 번째 폼 제출 때 구매할 상품을 정해요.

![Sell Products 설정 패널의 상품 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060619370/original/oQ2-NMoXLknZtI9YQf1FxxncOfVypybVBQ.png?1765799577)

#### 상품 선택

**상품 선택** 사이드바에서 기존 상품을 고르거나 새 상품을 만들 수 있어요. 메인 상품인지 범프 상품인지 지정할 수 있고, 설명·이미지·수량처럼 폼에 보여 줄 항목도 정할 수 있어요.

![상품 선택 사이드바](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060619412/original/3yNfgX_T8oKn8GVP4o5ZzbUk5oZFtVCvGA.png?1765799598)

#### 상품 저장

상품 정보를 설정한 뒤 **저장**을 클릭하면 상품이 폼에 적용돼요. 이렇게 해야 업셀 단계로 넘어가기 전에 첫 거래가 올바르게 처리돼요.

![상품 설정 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060619451/original/VR4QkRbxyKqtyRZP4y43owdNVTFRtjDS4w.png?1765799617)

### 2단계: V2 퍼널에 폼 추가하기

#### Native Form 삽입

퍼널 빌더의 **Elements**(요소) 패널에서 **폼** 요소를 V2 퍼널 레이아웃에 바로 추가할 수 있어요. 설정한 폼을 여기에 넣으면, 첫 구매 단계가 업셀로 이어지는 다음 단계와 연결돼요.

![퍼널 빌더 Elements 패널에서 폼 요소 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060619648/original/PGPPtlNCNqs6lv31mPnvGX745dgfKzVhLg.png?1765799710)

### 3단계: 업셀 단계 만들기

#### 다음 단계로 리디렉션

폼 요소의 **Button Actions**(버튼 액션) 설정에서 제출 후 이동 방식으로 **Go to Next Step**(다음 단계로 이동)을 선택하세요. 이렇게 하면 첫 구매가 끝난 고객이 바로 업셀 페이지로 이동해요.

![폼 요소의 Button Actions에서 Go to Next Step 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060619784/original/yw52Ja2LiTbgfrda5fR4-Vb4AakLwah6Og.png?1765799772)

#### 퍼널 상품 지정

퍼널 단계의 **상품** 탭에는 첫 결제에 연결된 상품이 표시돼요. 여기서 상품이 올바른지 확인하세요. 그래야 업셀이 첫 주문과 맞게 처리돼요.

![퍼널 단계의 상품 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060619840/original/m34rgxTiPg9i_aUHpdyBxKtBFaWZ7FxWkg.png?1765799801)

#### 업셀 버튼 설정

**버튼** 설정 패널에서 버튼을 **One click up/down sell product**(원클릭 업셀/다운셀 상품) 액션에 연결할 수 있어요. 여기서 업셀 상품을 고르면, 첫 구매 때 저장된 결제 토큰으로 업그레이드가 바로 처리돼요.

![버튼 설정 패널에서 업셀 상품 연결](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060619908/original/44G4_ZMWa1JCNN88_ub--Sai436mHW8SMw.png?1765799832)

### 4단계: 주문 요약 추가하기

#### 주문 확인 요소 추가

**Order Elements**(주문 요소) 메뉴에 **Order Confirmation**(주문 확인) 요소가 있어요. 이 요소를 퍼널의 마지막 페이지에 놓으세요. 수락한 업셀을 포함해, 고객이 완료한 구매 내역을 한눈에 보여 줘요.

![Order Elements 메뉴에서 Order Confirmation 요소 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060619961/original/fCDv_Skg4n-jTIe5fnULvYNUO_7nK0jMog.png?1765799874)

## 자주 묻는 질문

### 업셀 제안을 두 개 이상 추가할 수 있나요?
네. 한 단계에서는 업셀 상품을 하나만 지원해요. 하지만 퍼널 단계를 여러 개 이어 붙여서 여러 단계의 업셀 흐름을 만들 수 있어요.

### 주문 업셀은 V1 퍼널이나 웹사이트에서도 작동하나요?
아니요. **Native Form** 요소를 사용하는 V2 퍼널에서만 작동해요.

### 업셀은 주문 범프와 어떻게 다른가요?
주문 범프는 처음 폼 결제 화면에 표시돼요. 업셀은 첫 구매가 끝난 *뒤*, 다음 퍼널 단계에 표시돼요.

### 고객에게 결제가 두 번 따로 보이나요?
결제는 두 건으로 보이지만, 같은 주문 기록과 하나로 합쳐진 영수증에 함께 표시돼요.

### 업셀을 구매했을 때만 자동화를 실행할 수 있나요?
네. **Order Submitted**(주문 제출) 트리거에 **상품 필터**를 함께 사용하면 특정 SKU만 대상으로 지정할 수 있어요.

### 어떤 결제 게이트웨이를 지원하나요?
V2 퍼널이 지원하는 게이트웨이를 모두 쓸 수 있어요. Stripe, PayPal, Square, Authorize.net, NMI, 승인된 마켓플레이스 결제 제공업체가 해당돼요.

### 재고가 업셀에 영향을 주나요?
네. 재고 관리가 켜져 있고 재고가 없으면 업셀을 구매할 수 없어요.

### 고객이 업셀 상품의 수량을 바꿀 수 있나요?
아니요. 업셀 버튼은 항상 정확히 1개만 판매해요.
