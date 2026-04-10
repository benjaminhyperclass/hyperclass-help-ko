---

번역일: 2026-04-07
카테고리: 08-결제 > 주문-구독
---

# 구독을 CSV로 내보내기 또는 다운로드

이 도움말 문서는 컴플라이언스, 수익 분석, 유지 모니터링, 청구 관리를 위해 구독을 상세한 CSV 파일로 내보내는 방법을 설명합니다.

## 개요

구독(Subscriptions) CSV 내보내기 기능을 사용하면 Payments(결제) → Subscriptions(구독) 대시보드에서 구독 기록을 다운로드할 수 있습니다.

다음을 내보낼 수 있습니다:

- 계정의 모든 구독 또는
- 필터/검색 쿼리와 일치하는 구독만

내보내기는 이메일을 통해 안전한 다운로드 링크로 전달되며, 7일 후 만료됩니다.

링크가 만료되면 → 다시 내보내기를 실행하면 됩니다.

**목차**

- [구독 내보내기 방법](#구독-내보내기-방법)
- [데이터 형식 이해하기](#데이터-형식-이해하기)
- [컬럼 참조 가이드 (예시 포함)](#컬럼-참조-가이드-예시-포함)
- [다중 행 구독 데이터 예시](#다중-행-구독-데이터-예시)
- [FAQ](#faq)

## 구독 내보내기 방법

- Payments(결제) → Subscriptions(구독)으로 이동
- (선택사항) 검색 또는 필터 적용:
  - Status(상태): Active(활성), Canceled(취소됨), Past Due(연체) 등
  - 상품 유형
  - 고객 정보
  - 제공업체, 통화, 날짜 범위
- Download(다운로드) 클릭
- 이메일로 전송된 링크 열기 → CSV가 즉시 다운로드됩니다

## 데이터 형식 이해하기

구독에는 종종 다음이 여러 개 포함됩니다:

- 상품(라인 아이템)
- 세금

따라서 하나의 구독이 파일에서 여러 행을 생성할 수 있습니다 — 라인 아이템과 세금 항목(해당하는 경우)당 하나의 행입니다.

이는 정확한 상품별 및 세금별 보고를 위해 필요합니다.

**팁: 스프레드시트/엑셀에서 총합을 요약할 때 → 이중 계산을 피하려면 구독 ID별로 값을 그룹화하세요.**

## **데이터 일관성 보장 (내보내기 업그레이드)**

구독 내보내기는 안정적인 청구 분석과 감사 준비 보고를 위해 포맷됩니다.

**0 vs 빈 값**

- 0은 해당 필드가 적용되고 값이 실제로 0일 때만 나타납니다.
- 빈 값은 해당 필드가 적용되지 않을 때만 나타납니다(예: 체험이 없을 때 체험 필드).

**보고를 위한 안정적인 구조**

- 컬럼 순서는 피벗, 가져오기, BI 파이프라인을 지원하기 위해 일관성이 있습니다.
- 다중 행 구독 출력은 상품별 및 세금별 정확성을 위해 의도적입니다. 이중 계산을 피하려면 **Subscription id**로 그룹화하세요.

## 컬럼 참조 가이드 (예시 포함)

| 컬럼명 | 설명 | 예시 |
|---------|------|------|
| Subscription id | 구독의 내부 시스템 ID | jfhbiabfoanfle13kj |
| Location id | 하위 계정 식별자 | NyGCsdhgRZ8Ffa8Ssagfhd |
| Customer id | 고객의 시스템 식별자 | jbtyjkzMjvd8cLi9HUC |
| Customer name | 고객 표시명 | Maria Russell |
| Customer email | 구독자를 위해 저장된 이메일 | maria@domain.com |
| Customer phone | 구독자를 위해 저장된 전화번호 | +1 480-555-7002 |
| Subscription start | 구독이 생성된 날짜 | Jan 05, 2026 |
| Subscription end | 취소되거나 만료된 경우 종료 날짜; 구독이 끝나지 않았으면 빈 값 | May 30, 2026 |
| Number of trial days | 적용된 체험 기간; 체험이 없으면 빈 값 | 14 |
| Trial start | 체험 첫날; 체험이 없으면 빈 값 | Jan 05, 2026 |
| Trial end | 체험 완료 날짜; 체험이 없으면 빈 값 | Jan 19, 2026 |
| Cancelled at | 구독이 취소된 시점; 취소되지 않았으면 빈 값 | Mar 15, 2026 |
| Payment method | 최근 성공한 결제에 사용된 방법 | Visa •1234 |
| Currency | 구독 통화 | USD |
| Sub total | 할인 및 별도 세금 전 총액 (설정 수수료 미포함) | 200.00 |
| Discount | 적용된 할인 (쿠폰 등) | -20.00 |
| Total tax amount (excluded in prices) | 가격에 별도로 추가된 세금 (설정 수수료에는 미포함) | 14.40 |
| Total tax amount (included in prices) | 가격에 포함된 세금 (설정 수수료에는 미포함) | 0.00 |
| Total amount | 최종 청구 금액 (할인 + 세금 후; 처리 수수료 미포함) | 194.40 |
| Coupon code | 적용된 쿠폰 (해당하는 경우) | WELCOME10 |
| Status | 구독 라이프사이클 상태 | Active, Past Due, Cancelled |
| Live mode | 구독이 테스트인지 실제인지 | Yes, No |
| Source type | Funnel(퍼널), Payment Link(결제 링크), Store(스토어) 같은 체크아웃 출처 | Funnel |
| Source sub type | 더 구체적인 출처 분류 | One-Step Checkout |
| Source id | 체크아웃의 내부 식별자 | fnl_0188 |
| Source name | 출처의 표시 제목 | Health Coaching Funnel |
| Payment provider | Stripe, NMI, Authorize.net, PayPal, Square | Stripe |
| Connected account | 청구에 사용된 제공업체 계정 | acct_5520XX |
| Transaction date | 마지막 성공한 갱신 거래 날짜 | Mar 05, 2026 |
| Transaction time | 마지막 청구 시간 | 2:10 PM |
| Timezone | 시스템 타임존 | America/New_York |
| Total products | 구독에 연결된 상품 수 | 1 |
| Line item name | 상품 제목 | Monthly Yoga Plan |
| Line item quantity | 상품 수량 | 1 |
| Line item price | 상품 단위당 가격 | 200.00 |
| Line item discount | 상품에 적용된 할인 | 20.00 |
| Line item subtotal | 상품 소계 (세금 및 수수료 전) | 180.00 |
| Line item product id | 상품 참조 ID | prod_X7E12 |
| Tax name | 라인의 세금 라벨 | NY Sales Tax |
| Tax amount | 이 라인에 할당된 세금 부분 | 14.40 |
| Last paused on date | 가장 최근 일시정지 시점 | April 01, 2026 |
| Resumed on date | 구독이 재개된 날짜; 일시정지 상태에서 구독이 실제로 재개된 날짜 | April 10, 2026 |
| Pause end date | 가장 최근 일시정지의 예상 종료 날짜; 일시정지된 구독이 일시정지를 끝낼 것으로 예상되는 날짜 | April 10, 2026 |
| Processing charge name | 추가 수수료/요금 이름 | Platform Fee |
| Processing charge amount | 요금 값 | 2.50 |

## 다중 행 구독 데이터 예시

**예시 1:**
다음을 포함하는 단일 구독:

- 상품 3개
- 세금 2개 - 모두 별도

CSV는 총 6개 행을 생성할 수 있습니다:

- 각 상품당 2개 행
- 세금 6개 행, 각 상품에 대한 각 세금명별 세금 금액이 새로운 행 → 모두 동일한 Subscription id 공유

**예시 2:**
다음을 포함하는 단일 구독:

- 상품 3개
- 세금 2개 - 상품 1에는 둘 다 별도, 상품 2에는 둘 다 포함, 상품 3에는 세금 없음

CSV는 총 5개 행을 생성할 수 있습니다:

- 상품 2개당 2개 행과 3번째 상품에 1개 행
- 세금 4개 행, 즉 첫 2개 세금은 <Tax Name 1>과 <Tax Name 2> 형식이고 다음 2개 세금은 <Tax Name 1 (Included in prices)>와 <Tax Name 2 (Included in prices)> 형식; 5번째 행은 세금 컬럼에 값이 없음 → 모두 동일한 Subscription id 공유

## FAQ

### **1. 구독당 여러 행이 보이는 이유는 무엇인가요?**

각 상품 및/또는 세금이 정확한 보고를 위해 개별적으로 분리되기 때문입니다.

### 2. 취소된 구독도 내보내기에 포함되나요?

예 — 내보내기 전에 Status(상태)로 필터링하지 않는 한 포함됩니다.

### 3. 내보내기에서 구독 업데이트 작업에 기반한 최신 업데이트된 값과 세부사항이 표시되나요?

예, 내보내기는 구독의 시작 데이터와 관계없이 구독의 최신 데이터를 보여줍니다. 즉, 상품, 수량 등이 변경되면 최신 내용이 내보내기에 반영됩니다.

### **4. 구독 청구 내역을 내보낼 수 있나요?**

완전한 청구 내역을 위해서는 → Transactions Export(거래 내보내기)를 사용하세요.

### **5. 누가 구독 내보내기를 다운로드할 수 있나요?**

다음 권한이 있는 사용자만:
✔ View Subscriptions(구독 보기)
✔ Export Subscriptions(구독 내보내기)

### **6. 고객 주소가 포함되나요?**

체크아웃을 통해 수집된 경우에만 — 그렇지 않으면 컬럼이 빈 상태로 유지됩니다.

### **7. Subscription End가 빈 값인 이유는 무엇인가요?**

구독이 여전히 활성, 미결제, 체험 중, 예약됨 등의 상태라는 뜻입니다. 즉, 구독이 아직 종료되지 않았습니다.

---
*원문 최종 수정: Tue, 3 Feb, 2026 at 11:36 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*