---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002546-how-to-use-products-in-payment-element-in-forms
번역일: 2026-11-07
카테고리: 06-사이트
---

# 폼의 결제 요소에서 상품 판매하기

**폼**에 상품을 직접 넣어 판매할 수 있어요. 상품 선택, 설명·이미지 표시, 레이아웃을 폼 안에서 설정하고, 결제 제공업체를 연결해 결제까지 받을 수 있어요.

[동영상](https://www.youtube.com/embed/Rfu6y9W5msw?&wmode=opaque)

## 새로워진 점

- **Payment Type**(결제 유형): 폼에서 상품을 판매할지, 직접 정한 금액을 받을지 고를 수 있어요.
- 상품을 선택하고 설명과 이미지를 넣고 레이아웃을 고를 수 있어요.
- 상품에 옵션(변형)이 있으면 고객이 원하는 옵션을 고를 수 있어요.
- 상품 수량은 재고 관리 기준에 맞게 적용돼요.
- 고객이 상품을 구매할 때 세금이 함께 계산돼요.

## 사용 방법

**Sell Products**(상품 판매) 요소를 쓰면 폼에서 상품을 판매하고, 결제 제공업체를 연결하고, 여러 가격 수준과 옵션을 제공할 수 있어요.

### 1단계: Sell Products 요소 추가하기

1. **폼 빌더**에서 폼을 열어요.
2. **결제** 아래의 **Sell Products**(상품 판매)를 폼으로 끌어다 놓아요.
3. 추가한 요소를 선택하면 오른쪽에 설정 패널이 열려요.

![Sell Products 요소 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155085047163/original/bw492qyZdDakNKm_mdYASGOmggduAxtqaA.png?1793887206)

### 2단계: 결제 제공업체 설정하기

1. **Connect providers**(제공업체 연결)를 클릭하면 빌더에서 바로 결제 제공업체를 연결할 수 있어요.
2. 연결한 제공업체는 **Connected providers**(연결된 제공업체)에서 확인해요.
3. **관리**를 클릭하면 제공업체 설정으로 이동해요.
4. **Live mode**(라이브 모드)를 켜고 끄면 라이브 설정과 테스트 설정을 전환할 수 있어요.

![결제 제공업체 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155085047219/original/EY91AM8kvTCUExjyCHx1gRz3tHnAr3d07Q.png?1793887232)

### 3단계: 상품 추가하고 설정하기

1. **Product**(상품) 탭을 열어요.
2. **Add product**(상품 추가)를 클릭해 상품을 선택해요.
3. **Layout settings**(레이아웃 설정)에서 **Single column**(1열), **Two column**(2열), **Three column**(3열) 중 하나를 선택해요.
4. **Product selection**(상품 선택)에서 **Single**(단일) 또는 **Multi**(다중)를 선택해요.

![상품 추가 및 레이아웃 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155085047530/original/56l9YfBv-5EQdws3bSLhluscg5QHSVUFFQ.png?1793887350)

### 4단계: 가격 수준과 옵션 설정하기

Sell Products 요소에서는 다음 기능을 쓸 수 있어요.

- 가격 수준(Price Levels): 지원되는 상품은 고객이 여러 가격 중 하나를 고를 수 있어요.
- 옵션(Variants): 고객이 색상, 크기 같은 상품 옵션을 고를 수 있어요.

고객이 고른 가격과 옵션은 결제 요약에 표시되고, 결제 진행, 인보이스 발행, 결제 처리까지 그대로 이어져요.

필수 선택 항목은 제출 전에 확인해요.

![가격 수준과 옵션 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155085047490/original/m25m09iah0zrx0JhZCMwcg_jRJWx_u1thA.png?1793887325)

{% hint style="warning" %}
**중요 사항**

- 기존 폼과 결제 설정은 변경 없이 그대로 작동해요.
- 가격 수준과 옵션은 지원되는 상품에서 쓸 수 있어요.
- 데스크톱과 모바일 기기에서 모두 쓸 수 있어요.
{% endhint %}

## 주요 특징

### 사용자 지정

- 상품은 최대 20개까지 추가할 수 있어요.
- 레이아웃은 세 가지 중에서 고를 수 있어요.
- 이 폼을 **퍼널**에 쉽게 넣어서, 자유롭게 꾸민 한 단계짜리 주문 폼으로 쓸 수 있어요.

### 결제 내역 확인

- 폼을 제출하면 결제 금액, 주문 ID, 결제 상태가 제출 상세 정보에 함께 기록돼요.
- **Order ID**(주문 ID)를 클릭하면 주문 상세 정보를 볼 수 있어요.
- 이 정보는 내보내기 옵션으로 내보낼 수도 있어요.

### 이메일 알림

**이메일 알림**에도 결제 상태와 금액이 반영돼요.

### 워크플로우 트리거

**결제 완료** 트리거를 쓸 때 소스로 **폼**을 선택할 수 있어요.

{% hint style="info" %}
**참고**

- 반복 결제 상품은 아직 지원하지 않아요.
- NMI와 [Authorize.net](http://authorize.net/)을 쓰는 경우, 폼에 결제 요소가 있으면 이름(First Name)이 필수 입력 항목이어야 해요.
- **환불 금액**은 아직 기록되지 않아요.
- API 방식의 예전 Stripe 연결은 지원하지 않아요.
- 결제 요소가 있는 커스텀 폼을 쓰는 캘린더에서는 결제 요소가 표시되지 않아요.
- 퍼널에서는 여러 개의 네이티브 폼에 걸친 다중 결제를 아직 지원하지 않아요.
- 결제 요소에서는 실행 취소/다시 실행(Undo/Redo)을 아직 지원하지 않아요.
{% endhint %}

## 예시

![예시 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026869151/original/1YbxlO57b5cbsyG1WzxTxVZSt-zmorR9xg.png?1717096320)
![예시 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026869150/original/rheoLcBvY4EL-OMPiNUBMmyh8pMOW97chg.png?1717096320)
![예시 화면 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026869152/original/s7fkipabypo9Fdh7PpkyJXWjPgGQAIYeAA.png?1717096320)
![예시 화면 4](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026869155/original/9cxDFpaCsJ6886WW_KAGZYHr3CvD0JB85w.png?1717096320)
![예시 화면 5](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026869154/original/WKYKKY1xzplKA_rBXYMtJBi0aPCEedpgsA.png?1717096320)
![예시 화면 6](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026869153/original/uVvs3py6TyoEjtmSsknphqI3Aqd4CA7KIw.png?1717096320)
