---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003534-workflow-trigger-payment-received
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Payment Received(결제 완료)

**Payment Received**(결제 완료) 트리거를 쓰면 결제가 성공할 때마다 후속 작업을 자동으로 실행할 수 있어요. 일회성 결제, 구독 갱신, 인보이스 결제 모두 해당돼요. 확인 메시지 발송, 정보 업데이트, 팀 알림을 자동화해 시간을 아끼고 고객 경험도 높여 보세요.

## Payment Received 트리거란?

**Payment Received** 트리거는 하이퍼클래스 계정에서 결제가 성공하면 자동화된 워크플로우를 시작해요. 퍼널, 인보이스, 캘린더, 멤버십, 폼에서 들어온 결제는 물론 수동으로 입력한 결제도 포함돼요. 일회성 결제든 반복되는 구독 결제든, 결제가 이루어지는 즉시 자동으로 대응할 수 있어요.

수동 후속 작업을 줄이고, 결제를 확인하고, 고객과 내부 팀에 일관되게 안내하는 데 꼭 필요한 자동화 도구예요.

## Payment Received 트리거의 주요 장점

결제 후속 작업을 자동화하면 응답 시간이 짧아지고, CRM과 팀이 바로 최신 상태를 유지할 수 있어요. 사업자와 고객 모두 결제 이후 과정이 매끄러워져요.

- 즉시 확인 메시지 보내기: 결제가 처리되는 즉시 확인 이메일이나 SMS를 자동으로 보내, 고객이 안심할 수 있어요.
- 연락처 정보 업데이트: 태그를 추가하거나 커스텀 필드를 업데이트하거나 내부 메모를 남겨, 고객 프로필에 결제 상태를 직접 입력하지 않고도 반영할 수 있어요.
- 팀에 바로 알리기: 영업, 지원, 배송 담당 팀에 실시간으로 알려 결제 성공 직후 바로 대응하게 할 수 있어요.
- 업셀 또는 멤버십 액세스 실행: 구매 유형에 따라 업셀 제안, 보너스 콘텐츠 전달, 멤버십 액세스 부여 같은 시퀀스를 시작할 수 있어요.
- 결제 실패 후속 조치 자동화: 결제 실패 시 재시도, 알림, 맞춤 메시지를 보내는 워크플로우를 만들어 놓친 매출을 되찾을 수 있어요.
- 구독·인보이스 추적 간소화: 반복 결제나 인보이스 완료를 추적하고, 특정 후속 작업이나 CRM 업데이트와 쉽게 연결할 수 있어요.

## Payment Received 트리거 설정 방법

이 트리거를 설정하면 결제가 일어나는 즉시 시스템이 대응해요. 아래 순서대로 따라 하세요.

### 새 워크플로우 시작하기

1. 왼쪽 메뉴에서 **자동화 > 워크플로우**로 이동해요.
2. 오른쪽 위의 **+ Create Workflow**(워크플로우 만들기)를 클릭해요.
3. 드롭다운에서 **처음부터 시작**을 선택하면 빈 상태에서 워크플로우를 직접 만들 수 있어요.

![새 워크플로우를 처음부터 시작하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050116574/original/x0cORXcHZjSdiS0SL9JQA2p3uJPySbhr7w.png?1753000724)

### 트리거 유형 선택하기

1. **+ Add New Trigger**(새 트리거 추가)를 클릭해 트리거 목록을 열어요.
2. **Payments**(결제) 섹션까지 스크롤해요.
3. **Payment Received**를 선택해 결제 자동화를 만들기 시작해요.

![Payments 섹션에서 Payment Received 트리거를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050116687/original/2PSjzaoe7Yf22PPaoo-SbRwR2fxQY9YeKg.png?1753001737)

### 트리거 이름 정하기

트리거를 알아보기 쉬운 이름으로 지어 주세요(예: "코스 액세스 결제"). 결제 트리거를 여러 개 쓸 때 이름을 잘 지어 두면 워크플로우를 정리하고 구분하기 쉬워요.

![트리거 이름을 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050116690/original/Ihz0uZ2QTFKDXT_-LyMOfRE_llUzGCkeBg.png?1753001757)

### 필터 추가하기

**+ Add filters**(필터 추가)를 클릭하면 워크플로우를 시작할 결제 이벤트를 좁힐 수 있어요. 필터로 특정 거래 유형, 결제 경로, 상품, 상태만 골라 낼 수 있어요.

- **Source**(결제 경로) 필터: 결제가 어디에서 발생했는지 지정해요. 사용한 결제 채널에 맞게 자동화를 조정할 수 있어요.
- **Calendar**(캘린더): 캘린더 예약 중에 이루어진 결제예요.
- **External**(외부): Stripe, PayPal 같은 외부 서비스나 외부 API 연동으로 이루어진 결제예요.
- **Form**(폼): 결제 요소가 들어 있는 폼으로 제출된 결제예요.
- **Funnel**(퍼널): 원스텝, 투스텝 주문 폼 같은 퍼널 페이지에서 이루어진 결제예요.
- **Invoice**(인보이스): 하이퍼클래스의 인보이스 기능으로 보낸 인보이스를 통해 완료된 결제예요.
- **Manual Payment**(수동 결제): CRM 안에서 수동으로 기록한 결제예요.
- **Memberships**(멤버십): 멤버십 상품이나 코스 이용 권한과 관련해 발생한 결제예요.
- **Website**(웹사이트): 이커머스 스토어프론트(상품 또는 구독)에서 이루어진 결제예요.

![필터 추가 후 Source 필터 항목을 고르는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050116698/original/RPFEGNqmD673018pMhM3KDxyqsJalScwXw.png?1753001776)

### 필터 조건 고르기

**Global Product**(전체 상품), **Payment Status**(결제 상태), **Source** 같은 기본 필드 중에서 선택해요. 이 필터로 원하는 거래 유형만 정확하게 골라 워크플로우를 제어할 수 있어요.

![필터 기준 필드를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050116708/original/_cbjeR-U2qXh0JHoyh_Sq6b3EuN30yinHQ.png?1753001796)

### 상품으로 필터링하기

필터 유형으로 **Global Product**를 고르고 특정 상품 이름을 선택해요. 그러면 해당 상품의 결제가 들어올 때만 워크플로우가 실행돼요.

![Global Product 필터로 상품을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050116721/original/k3O79ZWXOElOzn3KRmTG2ltFQMRlI06IAg.png?1753001844)

### 결제 상태로 필터링하기

**Payment Status** 필터를 추가하고 **Success**(성공)로 설정해요. 그러면 결제가 성공적으로 완료됐을 때만 워크플로우가 실행돼요.

![Payment Status 필터를 Success로 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050116737/original/nXTuhHc7FuFv_OsJqyE1vEd2OqbdDg6ybQ.png?1753001909)

### 결제 경로로 필터링하기

**Source** 필터를 추가하고 **Calendar**로 설정해요. 그러면 캘린더 예약으로 이루어진 결제에만 트리거가 작동해요.

![Source 필터를 Calendar로 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050116748/original/teTGp3tGLqp0NBgrPnNFjYtWEhBnuROuQg.png?1753001979)

### 캘린더 지정하기

**Calendar** 필터에서 정확한 캘린더를 선택해요(예: "Pat의 캘린더"). 특정 예약 캘린더에만 워크플로우를 연결해 더 정밀하게 조정할 수 있어요.

![특정 캘린더를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050116755/original/N4UdU1ssmlcz17Zwyia1CNItBvxZSq_aVQ.png?1753002008)

### 트리거 저장하기

필터를 모두 적용했다면 **Save Trigger**(트리거 저장)를 클릭해 설정을 마무리해요. 이렇게 저장하면 정해 둔 조건에서만 워크플로우가 실행돼요.

![Save Trigger 버튼으로 트리거를 저장하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050116763/original/k_IEYOaW9JUfgXxUb0TOhFznxYWHIt_sog.png?1753002034)

## 자주 묻는 질문

### 상품이나 멤버십 플랜으로 필터링할 수 있나요?

네. **Source**와 **Sub-Source** 필터를 쓰면 특정 퍼널, 캘린더, 멤버십에서 발생한 결제만 골라 낼 수 있어요.

### 결제 실패에도 이 트리거를 쓸 수 있나요?

네, 쓸 수 있어요. "Payment Status = Failed"(실패) 필터를 사용하면 재시도나 미납 안내 이메일을 위한 후속 워크플로우를 만들 수 있어요.

### 결제 금액 같은 커스텀 값을 쓸 수 있나요?

네. `{{Payment Amount}}`, `{{Transaction ID}}` 같은 동적 필드를 이메일이나 내부 알림에 사용할 수 있어요.

### 트리거를 테스트하려면 어떻게 하나요?

샌드박스 결제 환경을 쓰거나, 테스트 상품으로 실제 결제를 진행해 보세요. 테스트하기 전에 워크플로우가 활성화되어 있는지 꼭 확인하세요.

### 다른 트리거와 함께 쓸 수 있나요?

네. 한 워크플로우에 트리거를 여러 개 넣을 수 있어요. 또는 If/Else 분기를 써서 결제 경로나 결과에 따라 흐름을 나눌 수도 있어요.

### Stripe 반복 결제용 트리거가 따로 있나요?

Stripe 전용 트리거는 없어요. 결제 게이트웨이에 관계없이 동작하도록 설계되었기 때문이에요. 대신 Stripe 반복 결제는 세 가지 트리거로 잡을 수 있고, 트리거마다 잘 맞는 용도가 달라요.

| 트리거 | 반복 결제 시 실행되나요? | 이럴 때 좋아요 |
| --- | --- | --- |
| **Payment Received** | 네 — "Customer not present/subscription transaction"으로 필터링해요 | 가장 세밀하게 제어할 수 있고 게이트웨이와 상관없이 쓸 수 있어요. Payment Status 필터로 결제 실패도 처리할 수 있어요. 카드 끝 4자리, 브랜드, 거래 ID, 게이트웨이 같은 `{{payment.*}}` 커스텀 값을 풍부하게 쓸 수 있어요 |
| **Order Submitted**(주문 제출) | 네 — 반복 결제가 성공할 때 실행돼요 | 구매 후 업셀, Shopping Cart 이메일 템플릿 자동 채우기, 주문 단위 커스텀 값(장바구니 합계, 상품, 쿠폰, 게이트웨이)에 좋아요. V2 퍼널에서만 쓸 수 있어요 |
| **Subscription**(구독) | 네 — 구독 수명 주기 이벤트(생성, 업데이트, 일시중지, 재개, 취소)에서만 실행돼요 | 개별 결제가 아니라 구독 상태 변화에 대응할 때 좋아요 |

#### 어떤 트리거를 고를까요?

- 실패를 포함해 모든 반복 결제에 대응해야 한다면 → **Payment Received** + "Customer not present/subscription transaction" 필터 + Payment Status 필터
- 반복 결제가 성공한 뒤 상품 정보가 담긴 확인 이메일을 보내려면 → **Order Submitted** (Shopping Cart 이메일 요소가 항목을 자동으로 채워 줘요)
- 구독 생성·일시중지·취소에 대응하려면 → **Subscription** 트리거

{% hint style="warning" %}
**알아 두세요**

- Stripe 반복 결제를 만드는 기본 제공 액션은 없어요. **Stripe One-Time Charge**(Stripe 일회성 결제) 액션은 일회성 결제 전용이에요. Stripe에서 반복 결제를 하려면 Stripe에서 직접 설정한 뒤, 위 트리거 중 하나로 결제에 대응하세요.
- **Order Submitted**는 V2 퍼널이 필요해요. V1을 쓰고 있다면 **Payment Received**를 사용하세요.
- 세 트리거 모두 Stripe, PayPal 등 연결된 모든 게이트웨이에서 작동해요. 결제 이벤트를 하나의 형식으로 통일해 처리하기 때문이에요.
{% endhint %}
