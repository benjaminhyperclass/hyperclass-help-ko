---
원문: /support/solutions/articles/155000002620-how-to-build-a-custom-payments-integration-on-the-platform
번역일: 2026-11-07
카테고리: 08-결제
---

# 커스텀 결제 제공업체 연동 만들기

하이퍼클래스의 결제 기능(체크아웃, 구독, 저장된 결제 수단 등) 전반에 연결되는 커스텀 결제 제공업체를 만드는 방법을 안내해요. 하이퍼클래스 마켓플레이스 API와 결제 API를 쓰면 자체 결제 게이트웨이나 외부 결제 처리 업체를 연결해 여러 서브 계정(로케이션)에서 쓸 수 있게 할 수 있어요.

## 1. 개요

하이퍼클래스의 커스텀 결제 제공업체 프레임워크를 쓰면 원하는 결제 게이트웨이를 플랫폼에 연동할 수 있어요. 연동한 뒤에는 하이퍼클래스가 결제를 처리하는 모든 곳에서 이 게이트웨이를 쓸 수 있어요.

연동을 마치면 결제 제공업체로 다음을 할 수 있어요.

- **앱 마켓플레이스**와 **결제 > 연동**에 표시하기
- 일회성 결제와 정기 결제 처리하기
- 저장된 결제 수단으로 오프세션 결제 처리하기
- 수동 구독과 구독 스케줄 지원하기
- 웹훅으로 하이퍼클래스에 변경 사항 동기화하기

## 2. 핵심 개념

### 마켓플레이스 앱

하이퍼클래스 마켓플레이스에서 연동을 담는 단위예요. OAuth, 범위(scope), 카테고리, 사용자 지정 페이지를 여기서 정해요.

### 커스텀 결제 제공업체

내 앱이 결제 제공업체라는 것과 지원하는 결제 유형(일회성, 정기, 오프세션)을 하이퍼클래스에 알려 주는 결제 설정이에요.

### queryUrl

하이퍼클래스가 서버 측 결제 작업을 처리할 때 호출하는 백엔드(내 서버) 엔드포인트예요. 다음 작업에 쓰여요.

- 결제 검증 (`type: "verify"`)
- 결제 수단 목록 조회 (`type: "list_payment_methods"`)
- 저장된 결제 수단으로 결제 (`type: "charge_payment"`)
- 수동 구독 생성 (`type: "create_subscription"`)
- 구독 취소 (`type: "cancel_subscription"`)
- 환불 생성 (`type: "refund"`)

### paymentsUrl

하이퍼클래스가 iframe 안에 불러와서, 고객에게 내 결제 제공업체로 결제를 받는 데 쓰는 공개 URL이에요.

### 사용자 지정 페이지(Custom Page)

하이퍼클래스 마켓플레이스 화면의 iframe 안에 불러오는 공개 URL이에요. API 키, 가맹점 ID, 테스트/라이브 모드 같은 연동 설정을 입력받는 데 써요.

### 테스트 모드와 라이브 모드

- 테스트 모드: 실제 돈 없이 결제를 시험하고 모의로 진행할 때 써요.
- 라이브 모드: 실제 결제에 써요.

서브 계정마다 내 제공업체의 테스트 설정과 라이브 설정을 모두 둘 수 있어요.

## 3. 준비 사항

다음이 필요해요.

- 마켓플레이스 대시보드에 접근할 수 있는 하이퍼클래스 계정
- 클라우드 어디에서든 호스팅한 백엔드 서비스(Node.js, Python, Ruby 등)
- 다음을 위한 공개 도메인
  - OAuth **리다이렉트 URL**
  - 사용자 지정 설정 페이지`queryUrl`과 웹훅`paymentsUrl`(체크아웃 iframe)
- 다음에 대한 기본 지식
  - OAuth 2.0
  - JSON과 HTTP API
  - 웹훅 처리

연동 엔드포인트는 공개 결제 API 문서도 함께 참고하세요.

## 4. 연동 전체 흐름

결제 게이트웨이를 연동하는 큰 단계는 네 가지예요.

1. 커스텀 결제 제공업체 카테고리로 마켓플레이스 앱을 만들어요.
2. OAuth, 웹훅, `queryUrl` 요청을 처리하는 백엔드 서비스를 만들어요.
3. 다음 용도의 공개 페이지를 만들어요.
   - 연동 설정(사용자 지정 페이지)
   - iframe으로 결제 받기(`paymentsUrl`)
4. 테스트 결제 모드와 라이브 결제 모드를 설정하고 처음부터 끝까지 흐름을 시험해요.

## 5. 1단계 – 마켓플레이스 앱 만들기

### 5.1 마켓플레이스 대시보드 열기

1. 하이퍼클래스 마켓플레이스 대시보드로 이동하세요.
2. 새 앱을 만들고 다음 항목을 설정하세요.
   - **설정**
   - **결제 제공업체**
   - **Profile**(프로필)
   - **Custom Pages**(사용자 지정 페이지)

### 5.2 설정 구성

#### 5.2.1 필수 범위

앱이 결제와 상품 정보에 접근할 수 있도록 **필수 범위**에 다음 범위를 추가하세요.

```
payments/orders.readonly
payments/orders.write
payments/subscriptions.readonly
payments/transactions.readonly
payments/custom-provider.readonly
payments/custom-provider.write
products.readonly
products/prices.readonly
```

범위 설명
`payments/orders.*`: 결제 주문을 읽고 관리해요.`payments/subscriptions.readonly`: 구독 상세 정보를 읽어요.`payments/transactions.readonly`: 결제 거래 상세 정보를 읽어요.`payments/custom-provider.*`: 커스텀 제공업체 설정을 읽고 관리해요.`products.*`: 결제와 연결된 상품과 가격을 읽어요.

#### 5.2.2 리다이렉트 URL

서브 계정에 앱이 설치될 때 OAuth 흐름을 마무리하는 데 쓰는 주소예요. 하이퍼클래스는 사용자를 이 주소로 보내면서 `code` 쿼리 파라미터를 함께 전달해요.

예시

```
https://your-domain.com/installed?code=0834cbd778dacf89c
```

이 코드로 OAuth Access Token API에서 OAuth 액세스 토큰을 받고, 이후 API 호출에 쓸 수 있도록 안전하게 저장하세요.

필드 설명
`code`(문자열): 유효 시간이 짧은 인증 코드예요. 액세스 토큰으로 교환해서 써요.

#### 5.2.3 Client Keys(클라이언트 키)

하이퍼클래스는 OAuth에 쓸 클라이언트 키를 제공해요.

- 백엔드에만 보관하세요.
- OAuth 코드를 액세스 토큰으로 교환할 때 사용하세요.

#### 5.2.4 Webhook URL(웹훅 URL, 앱 설치/제거)

다음 경우에 하이퍼클래스가 호출할 **Webhook URL**을 설정하세요.

- 서브 계정에 앱이 설치될 때
- 서브 계정에서 앱이 제거될 때

이 웹훅은 다음 용도로 쓸 수 있어요.

- 해당 서브 계정에 필요한 설정을 내 쪽에서 초기화하기
- 앱이 제거되면 데이터 정리하기

앱 제거 웹훅 요청 샘플은 원본 문서에 링크되어 있어요.

#### 5.2.5 SSO Key(SSO 키)

하이퍼클래스가 SSO 키를 제공해요.

- 백엔드에 안전하게 보관하세요.
- iframe 안의 사용자 지정 페이지로 전달되는 인증 토큰을 복호화할 때 사용하세요. 이렇게 하면 하이퍼클래스 사용자와 서브 계정을 확인할 수 있어요.

### 5.3 결제 제공업체 구성

**설정** 탭을 마쳤으면 **결제 제공업체** 섹션을 구성하세요. 이 섹션이 내 앱을 하이퍼클래스의 "결제 앱"으로 만들어 줘요.

필드

- **Name**(이름): 결제 제공업체의 표시 이름이에요.
- **App description**(앱 설명): **결제 > 연동** 화면에 표시되는 짧은 설명이에요.
- **Payment provider type**(결제 제공업체 유형): 제공업체가 지원하는 결제 종류예요.
  - **OneTime**(일회성): 한 번만 결제하고 이후 추가 결제는 없어요.
  - **Recurring**(정기): 정해진 금액을 반복해서 결제하는 구독이에요. 구독은 내 쪽에서 생성하고 관리해야 하며, 변경 사항(새 결제, 취소, 미납 등)은 웹훅으로 하이퍼클래스에 보내야 해요.
  - **Off Session**(오프세션): 고객이 직접 조작하지 않아도 결제하는 방식이에요(예: 저장된 카드). 보통 승인된 결제 수단을 미리 저장해 두어야 해요.
- **Logo**(로고): 화면에 표시할 제공업체 로고의 공개 URL이에요.

### 5.4 프로필

**Profile**(프로필) 섹션에서 다음을 설정하세요.

- **카테고리** = **Third Party Provider**(서드파티 제공업체)

이렇게 설정하면 내 앱이 다음처럼 표시돼요.

- **앱 마켓플레이스**에 올바르게 표시돼요.
- **결제 > 연동**에 표시되어 쉽게 찾을 수 있어요.

### 5.5 사용자 지정 페이지

**Custom Pages**(사용자 지정 페이지)에서 게이트웨이 자격 증명(공개 키, 가맹점 ID 등)을 입력받을 페이지를 설정하세요.

- 앱이 설치된 뒤 하이퍼클래스가 iframe으로 불러오는 공개 URL이에요.
- 사용자가 **결제 > 연동**에서 **Manage Integration**(연동 관리)을 클릭할 때도 이 페이지가 쓰여요.

이 페이지에서 다음을 할 수 있어요.

- 사용자가 게이트웨이를 연결하거나 연결 해제하게 하기
- 테스트/라이브 자격 증명 입력받기
- 하이퍼클래스의 연동 API를 호출하는 백엔드 요청 실행하기

## 6. 2단계 – 인증 및 설치 흐름 구현

### 6.1 설치 순서

사용자가 서브 계정에 내 앱을 설치하면 다음 순서로 진행돼요.

1. 하이퍼클래스가 OAuth 코드와 함께 내 **리다이렉트 URL**을 열어요.
2. 내 백엔드가 코드를 액세스 토큰으로 교환해요(OAuth Access Token API).
3. 하이퍼클래스가 설정용 사용자 지정 페이지를 불러와요.
4. 하이퍼클래스는 공개 제공업체 설정(public provider config)을 만드는 API 호출을 기대해요. 이 호출로 다음이 이루어져요.
   - 하이퍼클래스 결제에 내 제공업체가 등록돼요.
   - **결제 > 연동**에 내 앱이 결제 옵션으로 표시돼요.

### 6.2 공개 제공업체 설정 만들기

다음과 같은 페이로드로 Create Public Provider Config API를 호출하세요.

```json
{
  "name": "My Payment Provider",
  "description": "Tagline or short description",
  "imageUrl": "https://your-domain.com/logo.png",
  "locationId": "GHL_SUB_ACCOUNT_ID",
  "queryUrl": "https://your-backend.com/payments/query",
  "paymentsUrl": "https://your-frontend.com/payments/checkout"
}
```

필드 설명
`name`(문자열): 하이퍼클래스 곳곳(마켓플레이스, 연동 화면 등)에 표시되는 연동 이름이에요.`description`(문자열): **결제 > 연동**에 표시되는 짧은 설명이나 한 줄 소개예요.`imageUrl`(문자열, URL): 결제 제공업체 로고의 공개 URL이에요.`locationId`(문자열): 앱이 설치된 하이퍼클래스 서브 계정 ID예요.`queryUrl`(문자열, URL): 하이퍼클래스가 결제 관련 작업(검증, 환불, 결제 수단 조회·결제, 구독 생성 등)을 처리할 때 호출하는 백엔드 엔드포인트예요.`paymentsUrl`(문자열, URL): 하이퍼클래스가 고객용 결제를 위해 iframe 안에 불러오는 공개 체크아웃 페이지 URL이에요.

## 7. 3단계 – 테스트·라이브 설정 연결

설치가 끝나면 사용자가 테스트 자격 증명과 라이브 자격 증명을 설정해야 해요.

하이퍼클래스는 Connect Config API로 테스트 설정과 라이브 설정이 업데이트되기를 기대해요.

주요 필드
`apiKey`: 하이퍼클래스가 내 `queryUrl`을 백엔드로 호출할 때 쓰는 비밀 키예요.`publishableKey`: 노출돼도 안전한 키예요. 내 프런트엔드(iframe)가 결제를 초기화할 때 써요.

보통 다음 순서로 진행해요.

1. 사용자가 내 사용자 지정 페이지에 테스트 키를 붙여 넣게 해요.
2. 내 백엔드가 Connect Config API(테스트 모드)를 호출해요.
3. 라이브 키로 같은 과정을 반복해요.
4. 사용자가 **결제 > 연동 > [내 앱] > 기본값으로 설정**에서 내 제공업체를 기본값으로 설정해요.

모드(테스트 또는 라이브)별로 키를 추가하면 그 모드로 결제할 수 있게 돼요.

결제 흐름은 다음과 같아요.

![결제 흐름 다이어그램](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060818947/original/zT0aWDcBndJJsZw2E8uoHbbgkYhef9WovQ.png?1765972400)

## 8. 4단계 – 체크아웃 iframe 연동 구현

내 제공업체를 통한 모든 결제는 `paymentsUrl`을 불러온 iframe 안에서 이루어져요.

### 8.1 준비 이벤트: custom_provider_ready

iframe이 로드되어 데이터를 받을 준비가 되면 준비 이벤트를 보내세요.

```json
{
  "type": "custom_provider_ready",
  "loaded": true
}
```

필드 설명
`type` = `"custom_provider_ready"`: 준비 이벤트임을 나타내요.`loaded`(불리언): iframe이 완전히 로드되어 준비되면 `true`로 설정해요.

### 8.2 결제 시작 이벤트: payment_initiate_props

하이퍼클래스가 준비 이벤트를 받으면 결제 데이터 이벤트를 보내요.

```json
{
  "type": "payment_initiate_props",
  "publishableKey": "PUBLIC_KEY",
  "amount": 100,
  "currency": "USD",
  "mode": "payment",
  "productDetails": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "isTaxesEnabled": true,
      "taxes": [
        {
          "rate": 0.08,
          "name": "Sales Tax"
        }
      ],
      "name": "Premium T Shirt",
      "qty": 2,
      "productId": "PRODUCT_ID",
      "priceId": "PRICE_ID",
      "prices": [
        {
          "_id": "507f1f77bcf86cd799439012",
          "name": "Premium T Shirt",
          "type": "onetime",
          "currency": "usd",
          "amount": 2999,
          "compareAtPrice": 3999,
          "setupFee": 0,
          "shippingOptions": {
            "weight": {
              "value": 0.5,
              "unit": "kg"
            },
            "dimensions": {
              "length": 30,
              "width": 25,
              "height": 5,
              "unit": "cm"
            }
          }
        }
      ]
    }
  ],
  "contact": {
    "id": "CONTACT_ID",
    "name": "Customer Name",
    "email": "customer@example.com",
    "contact": "+1XXXXXXXXXX",
    "shippingAddress": {
      "city": "New York",
      "country": "United States",
      "line1": "123 Main St",
      "zipCode": "10001",
      "state": "NY"
    }
  },
  "orderId": "ORDER_ID",
  "transactionId": "TRANSACTION_ID",
  "subscriptionId": "SUBSCRIPTION_ID",
  "locationId": "LOCATION_ID"
}
```

필드 설명
`type`(문자열): `"payment_initiate_props"` 이벤트 유형이에요.`publishableKey`(문자열): 연결한 설정(Connect Config)의 게시 가능 키예요. 게이트웨이 JavaScript SDK를 초기화할 때 써요.`amount`(숫자): 결제할 금액이에요. 소수 단위 통화 금액으로 전달돼요.`currency`(문자열): USD, INR처럼 ISO 세 글자 통화 코드예요.`mode`(문자열): 일회성 결제는 `"payment"`, 구독 흐름은 `"subscription"`이에요.

상품 정보
`productDetails`(배열): 이 결제에 포함된 상품 항목 목록이에요.`productDetails[]._id`(문자열): 상품 항목의 내부 식별자예요.`productDetails[].isTaxesEnabled`(불리언): 이 항목에 세금이 적용되는지 나타내요.`productDetails[].taxes`(배열): 이 항목에 적용되는 세금 정의예요.`productDetails[].taxes[].rate`(숫자): 소수로 나타낸 세율이에요. 예를 들어 8퍼센트는 0.08이에요.`productDetails[].taxes[].name`(문자열): 세금 표시 이름이에요(예: Sales Tax).`productDetails[].name`(문자열): 상품명이에요(예: Premium T Shirt).`productDetails[].qty`(숫자): 이 상품의 수량이에요.`productDetails[].productId`(문자열): 하이퍼클래스 상품 식별자예요.`productDetails[].priceId`(문자열): 선택한 가격의 하이퍼클래스 가격 식별자예요.`productDetails[].prices`(배열): 이 상품의 가격 정의예요.

가격 정보
`productDetails[].prices[]._id`(문자열): 이 가격 레코드의 내부 식별자예요.`productDetails[].prices[].name`(문자열): 가격 이름이에요. 보통 상품명과 같아요.`productDetails[].prices[].type`(문자열): `onetime`, `recurring` 같은 가격 유형이에요.`productDetails[].prices[].currency`(문자열): `usd`처럼 소문자로 쓴 통화 코드예요.`productDetails[].prices[].amount`(숫자): 최소 통화 단위(예: 센트)로 나타낸 가격이에요.`productDetails[].prices[].compareAtPrice`(숫자): 선택 항목이에요. 최소 통화 단위로 나타낸 원래 가격 또는 비교 가격이에요.`productDetails[].prices[].setupFee`(숫자): 선택 항목이에요. 최소 통화 단위로 나타낸 일회성 설정 수수료예요.`productDetails[].prices[].shippingOptions`(객체): 이 상품의 배송 정보예요.`productDetails[].prices[].shippingOptions.weight.value`(숫자): 상품 무게 값이에요.`productDetails[].prices[].shippingOptions.weight.unit`(문자열): `kg` 같은 무게 단위예요.`productDetails[].prices[].shippingOptions.dimensions.length`(숫자): 상품 길이예요.`productDetails[].prices[].shippingOptions.dimensions.width`(숫자): 상품 너비예요.`productDetails[].prices[].shippingOptions.dimensions.height`(숫자): 상품 높이예요.`productDetails[].prices[].shippingOptions.dimensions.unit`(문자열): `cm` 같은 크기 단위예요.

연락처(고객) 정보
`contact`(객체): 이 결제의 고객 정보예요.`contact.id`(문자열): 하이퍼클래스의 고객 식별자예요.`contact.name`(문자열): 고객 전체 이름이에요.`contact.email`(문자열): 고객 이메일 주소예요.`contact.contact`(문자열): 국가 번호를 포함한 고객 전화번호예요.`contact.shippingAddress`(객체): 이 결제의 배송지예요.`contact.shippingAddress.city`(문자열): 배송 도시예요.`contact.shippingAddress.country`(문자열): 미국(United States)처럼 쓰는 배송 국가예요.`contact.shippingAddress.line1`(문자열): 도로명 주소예요.`contact.shippingAddress.zipCode`(문자열): 우편번호예요.`contact.shippingAddress.state`(문자열): NY처럼 쓰는 주 또는 지역 코드예요.

식별자
`orderId`(문자열): 하이퍼클래스 내부 주문 식별자예요.`transactionId`(문자열): 하이퍼클래스 내부 거래 식별자예요.`subscriptionId`(문자열): 결제가 구독에 속할 때의 하이퍼클래스 내부 구독 식별자예요.`locationId`(문자열): 주문이 생성된 서브 계정의 식별자예요.

이 이벤트를 받으면 iframe에서 결제 흐름을 시작하세요.

### 8.3 결과 이벤트

결제를 처리한 뒤에는 다음 이벤트 중 하나를 하이퍼클래스로 꼭 보내야 해요.

#### 8.3.1 결제 성공

```json
{
  "type": "custom_element_success_response",
  "chargeId": "GATEWAY_CHARGE_ID"
}
```

필드 설명
`type` = `"custom_element_success_response"`: 결제가 성공했음을 나타내요.`chargeId`(문자열): 내 게이트웨이의 결제(charge) ID예요. 하이퍼클래스의 주문·거래·구독 상세 정보에 표시돼요.

#### 8.3.2 결제 실패

```json
{
  "type": "custom_element_error_response",
  "error": {
    "description": "Card was declined"
  }
}
```

필드 설명
`type` = `"custom_element_error_response"`: 결제가 실패했음을 나타내요.`error`(객체): 오류 상세 정보예요.`description`(문자열): 사용자에게 보이는 오류 메시지예요.

#### 8.3.3 결제 취소

```json
{
  "type": "custom_element_close_response"
}
```

필드 설명
`type` = `"custom_element_close_response"`: 사용자가 결제 흐름을 취소했음을 나타내요.

### 8.4 검증 호출: type: "verify"

성공을 알리면 하이퍼클래스가 `queryUrl`로 백엔드 검증을 진행해요.

```bash
curl --location '${queryUrl}' \
  --header 'Content-Type: application/json' \
  --data '{
    "type": "verify",
    "transactionId": "ghl_transaction_id",
    "apiKey": "YOUR_API_KEY",
    "chargeId": "gateway_charge_id",
    "subscriptionId": "ghl_subscription_id"
  }'
```

요청 필드 설명
`type` = `"verify"`: 검증 요청임을 나타내요.`transactionId`(문자열): 검증할 하이퍼클래스 거래 ID예요.`apiKey`(문자열): 연결한 설정(Connect Config)으로 전달한 `apiKey`예요. 인증에 써요.`chargeId`(문자열): 내 게이트웨이의 결제 ID예요.`subscriptionId`(문자열, 선택): 해당하는 경우 하이퍼클래스 구독 ID예요.

응답 방식

```json
{ "success": true }
```

- 하이퍼클래스에서 주문과 거래를 성공으로 처리해요.

```json
{ "failed": true }
```

- 거래를 실패로 처리해요.

```json
{ "success": false }
```

- 거래를 보류 상태로 둬요. 결제가 지연되는 경우에는 나중에 웹훅으로 성공 처리할 수 있어요.

이 문서는 커스텀 결제 연동 가이드의 두 번째 편이에요. 저장된 결제 수단, 수동 구독, 환불, 웹훅을 구현하는 방법과 출시 전 점검 목록, 자주 묻는 질문을 다룹니다.

## 9. 5단계 – 저장된 결제 수단과 수동 구독

### 9.1 결제 수단 추가(카드 저장)

카드나 결제 수단 저장을 지원하려면 ready 이벤트를 아래처럼 확장하세요.

```json
{
  "type": "custom_provider_ready",
  "loaded": true,
  "addCardOnFileSupported": true
}
```

필드 설명
`addCardOnFileSupported` (boolean) – 아래 두 조건을 모두 갖춘 경우에만 `true`로 설정하세요.
  - 제공업체가 결제 수단 저장을 지원해요.
  - 저장, 목록 조회, 결제 흐름을 모두 구현했어요.

하이퍼클래스는 이 플래그를 확인하면 아래와 같은 설정 시작 이벤트를 보내요.

```json
{
  "type": "setup_initiate_props",
  "publishableKey": "PUBLIC_KEY",
  "currency": "USD",
  "mode": "setup",
  "contact": {
    "id": "CONTACT_ID",
    "name": "Customer Name",
    "email": "customer@example.com",
    "contact": "+1XXXXXXXXXX"
  },
  "locationId": "LOCATION_ID"
}
```

필드 설명
`type` = `"setup_initiate_props"` – 카드·결제 수단을 추가할 때 보내는 이벤트 유형이에요.`publishableKey` (string) – 설정에 등록한 프론트엔드 키예요.`currency` (string) – 3자리 통화 코드예요.`mode` = `"setup"` – 즉시 결제 없이 결제 수단만 저장하는 설정 모드라는 뜻이에요.`contact.id` (string) – 하이퍼클래스 연락처 ID예요.`locationId` (string) – 결제 수단을 추가하는 서브 계정 ID예요.

제공업체에서 결제 수단 추가를 마치면 결과를 아래 이벤트로 알려 주세요.

성공

```json
{
  "type": "custom_element_success_response"
}
```

실패

```json
{
  "type": "custom_element_error_response",
  "error": {
    "description": "Unable to save card"
  }
}
```

새로 추가한 결제 수단은 이후 해당 연락처의 결제 수단 목록 조회(List Payment Methods) 응답에 반드시 나타나야 해요.

---

### 9.2 결제 수단 목록 조회 – type: "list_payment_methods"

하이퍼클래스는 저장된 결제 수단을 가져오려고 `queryUrl`을 호출해요.

```json
{
  "locationId": "Ktkq45jCf1R15Z1D6Q3t",
  "contactId": "W1nPA7y2Dv8oL1MEvs2A",
  "apiKey": "API_KEY_XXXXXXX",
  "type": "list_payment_methods"
}
```

필드 설명 (요청)
`locationId` (string) – 하이퍼클래스 서브 계정 ID예요.`contactId` (string) – 결제 수단을 조회할 하이퍼클래스 연락처 ID예요.`apiKey` (string) – 제공업체가 등록한 백엔드 API 키예요.`type` = `"list_payment_methods"` – 요청 유형이에요.

기대하는 응답

```json
[
  {
    "id": "payment_method_id",
    "type": "card",
    "title": "Visa",
    "subTitle": "**** **** **** 1111",
    "expiry": "02/29",
    "customerId": "453bu44112q112",
    "imageUrl": "https://your-domain.com/assets/visa.png"
  }
]
```

필드 설명 (응답)
`id` (string) – 내부 결제 수단 ID예요. 나중에 이 결제 수단으로 결제할 때 사용해요.`type` (string) – 결제 수단 유형이에요. 예: `"card"`, `"us_bank_account"`.`title` (string) – 화면에 표시되는 짧은 레이블이에요(최대 약 20자).`subTitle` (string) – 제목 아래에 표시되는 보조 레이블이에요. 예: 카드 끝 4자리.`expiry` (string) – 만료일이에요. MM/YY 형식으로 보내세요.`customerId` (string) – 결제 게이트웨이에 등록된 고객 ID예요.`imageUrl` (string, URL) – 아이콘 URL이에요. 예: 카드사 로고.

올바른 결제 수단을 보여 주려면 시스템에서 `contactId`, `locationId`, `apiKey`, `customerId`의 매핑을 유지해야 해요.

---

### 9.3 저장된 결제 수단으로 결제하기 – type: "charge_payment"

저장된 결제 수단으로 고객이 직접 결제 화면에 있지 않은 상태에서(off-session) 결제하거나 인보이스를 결제할 때, 하이퍼클래스가 `queryUrl`을 호출해요.

```json
{
  "paymentMethodId": "payment_method_id",
  "contactId": "W1nPA7y2Dv8oL1MEvs2A",
  "transactionId": "680a923d54b81c699b845e47",
  "chargeDescription": "Invoice - 1",
  "amount": 100.00,
  "currency": "USD",
  "apiKey": "API_KEY_XXXXXXX",
  "type": "charge_payment"
}
```

필드 설명 (요청)
`paymentMethodId` (string) – 앞서 `list_payment_methods`에서 반환한 ID예요.`contactId` (string) – 하이퍼클래스 연락처 ID예요.`transactionId` (string) – 이 결제에 해당하는 하이퍼클래스 거래 ID예요.`chargeDescription` (string) – 결제 설명이에요. 예: 인보이스 이름.`amount` (number) – 결제 금액이에요. 소수 형식으로 보내세요.`currency` (string) – 3자리 통화 코드예요.`apiKey` (string) – 백엔드 API 키예요.`type` = `"charge_payment"` – 요청 유형이에요.

기대하는 응답

```json
{
  "success": true,
  "failed": false,
  "chargeId": "pay_r8167s62b",
  "message": "Success or Failure message",
  "chargeSnapshot": {
    "id": "payment-id",
    "status": "succeeded",
    "amount": 100.00,
    "chargeId": "pay_r8167s62b",
    "chargedAt": 1724217600
  }
}
```

필드 설명 (응답)
`success` (boolean) – 결제가 성공하면 `true`예요.`failed` (boolean) – 결제가 실패하면 `true`예요.`chargeId` (string) – 게이트웨이의 결제 ID예요.`message` (string) – 사람이 읽을 수 있는 상태 또는 오류 메시지예요.`chargeSnapshot` (object) – 결제 상세 정보예요.`id` (string) – 시스템의 결제 ID예요. `chargeId`와 같을 수 있어요.`status` (string) – `succeeded`, `failed`, `pending`, `processing` 중 하나예요.`amount` (number) – 결제된 금액이에요(단위는 게이트웨이 규칙을 따르세요).`chargeId` (string) – 결제 식별자예요.`chargedAt` (number) – 결제가 완료된 시각의 Unix 타임스탬프(초)예요.

---

### 9.4 저장된 결제 수단으로 수동 구독(구독 스케줄) 만들기

저장된 결제 수단을 지원하는 제공업체는 수동 구독 생성 요청도 받을 수 있어요. 이렇게 하면 체크아웃 세션 없이 사용자가 구독 스케줄(예: "X일에 시작해서 매달 청구")을 만들 수 있어요.

#### 9.4.1 지원 기능 알리기

`Update Capabilities API`(기능 업데이트 API)로 제공업체가 구독 스케줄을 지원한다고 하이퍼클래스에 알려 주세요.

참고 사항
`companyId` 또는 `locationId` 중 하나를 보내세요.
- 해당 범위(scope)를 가진 OAuth 토큰을 사용하세요.
- 이 설정은 에이전시 수준이며, 관련된 서브 계정 설치에 적용돼요.

활성화하면 하이퍼클래스에서 이 제공업체로 수동 구독(SaaS)과 구독 스케줄(결제)을 만들 수 있어요.

#### 9.4.2 실행 흐름: type: "create_subscription"

수동 구독이 만들어지면 하이퍼클래스가 `queryUrl`로 아래 내용을 POST해요.

```json
{
  "type": "create_subscription",
  "apiKey": "API_KEY_XXXXXXX",
  "locationId": "8snsnbsydbwBY",
  "contactId": "W1nPA7y2Dv8oL1MEvs2A",
  "paymentMethodId": "payment_method_id",
  "subscriptionId": "680a923d54b81c699b845e47",
  "transactionId": "680a923d54b81c699b2123",
  "startDate": "2025-09-22",
  "currency": "USD",
  "amount": 100.0,
  "recurringAmount": "80.00",
  "isSchedule": false,
  "productDetails": [
    {
      "_id": "621239912930123998",
      "name": "Product Name",
      "qty": 1,
      "productId": "621239912930123998",
      "priceId": "62123991293012371289",
      "prices": [
        {
          "_id": "62123991293012371289",
          "name": "Price Name",
          "type": "recurring",
          "currency": "USD",
          "amount": 100.0,
          "compareAtPrice": 120.0,
          "setupFee": 0,
          "recurring": {
            "interval": "month",
            "intervalCount": 1
          },
          "trialPeriod": 0,
          "totalCycles": 12
        }
      ]
    }
  ]
}
```

필드 설명 (요청)
`type` = `"create_subscription"` – 요청 유형이에요.`apiKey` (string) – 백엔드 API 키예요.`locationId` (string) – 하이퍼클래스 서브 계정 ID예요.`contactId` (string) – 하이퍼클래스 연락처 ID예요.`paymentMethodId` (string) – `list_payment_methods`에서 반환한 ID예요.`subscriptionId` (string) – 하이퍼클래스 구독 ID예요.`transactionId` (string) – 최초 결제가 있을 때 사용하는 하이퍼클래스 거래 ID예요.`startDate` (string, YYYY-MM-DD) – 구독을 시작할 날짜예요.`currency` (string) – 통화 코드예요.`amount` (number) – 최초 결제 금액이에요(있는 경우).`recurringAmount` (string/number) – 반복 결제 금액이에요.`productDetails` (array) – 이 구독의 상품과 가격 정보예요.`_id` (string) – 내부 상품 레코드 ID예요.`name` (string) – 상품명이에요.`qty` (number) – 수량이에요.`productId` (string) – 하이퍼클래스 상품 ID예요.`priceId` (string) – 하이퍼클래스 가격 ID예요.`prices` (array) – 가격 상세 정보예요.`_id` (string) – 가격 ID예요.`name` (string) – 가격 이름이에요.`type` (string) – 청구 유형이에요. 예: `recurring`, `onetime`.`currency` (string) – 통화 코드예요.`amount` (number) – 청구 금액이에요.`recurring.interval` (string) – 간격 단위예요. 예: `month`.`recurring.intervalCount` (number) – 간격 횟수예요. 예: 1개월.`trialPeriod` (number) – 트라이얼 기간이에요.`totalCycles` (number) – 구독이 끝나기까지의 결제 주기 횟수예요.

기대하는 응답

```json
{
  "success": true,
  "failed": false,
  "message": "Subscription created",
  "transaction": {
    "chargeId": "1234567890",
    "chargeSnapshot": {
      "status": "succeeded",
      "id": "1234567890",
      "amount": 100.0,
      "chargeId": "1234567890",
      "currency": "USD",
      "createdAt": 1724217600,
      "chargedAt": 1724217600
    }
  },
  "subscription": {
    "subscriptionId": "1234567890",
    "subscriptionSnapshot": {
      "status": "active",
      "id": "1234567890",
      "trialEnd": 1724217600,
      "createdAt": 1724217600,
      "nextCharge": 1726896000
    }
  }
}
```

필드 설명 (응답)
`success` (boolean) – 생성에 성공하면 `true`예요.`failed` (boolean) – 생성에 실패하면 `true`예요.`message` (string) – 상태 또는 오류 설명이에요.`transaction` (object, 선택) – 최초 결제가 있을 때의 상세 정보예요.`chargeId` (string) – 결제 ID예요.`chargeSnapshot` (object)`id` (string) – 시스템의 결제 ID예요.`status` (string) – `succeeded` | `failed` | `pending``amount` (number) – 결제된 금액이에요(보통 최소 화폐 단위).`chargeId` (string) – 결제 식별자예요.`chargedAt` (number) – Unix 타임스탬프(초)예요.`subscription` (object, 필수)`subscriptionId` (string) – 시스템의 구독 ID예요.`subscriptionSnapshot` (object)`id` (string) – 구독 ID예요.`status` (string) – `scheduled`, `trialing`, `active`, `expired`, `canceled`, `unpaid`, `incomplete` 중 하나예요.`trialEnd` (number) – 트라이얼이 끝나는 시각의 Unix 타임스탬프예요.`createdAt` (number) – 구독이 만들어진 시각의 Unix 타임스탬프예요.`nextCharge` (number) – 다음 결제 예정 시각의 Unix 타임스탬프예요.

구독이 미래에 시작하고 최초 결제가 없으면 `transaction` 객체는 생략해도 돼요.

#### 9.4.3 구독 취소 – type: "cancel_subscription"

하이퍼클래스가 제공업체에 기존 구독의 취소를 요청할 때 사용하는 요청이에요.

요청 페이로드

```json
{
  "type": "cancel_subscription",
  "subscriptionId": "SUBSCRIPTION_ID",
  "apiKey": "API_KEY"
}
```

필드 설명
`type` (string) – `"cancel_subscription"` 요청 유형이에요.`subscriptionId` (string) – 취소할 하이퍼클래스 구독 ID예요.`apiKey` (string) – 요청을 인증할 수 있도록 하이퍼클래스가 함께 보내는 백엔드 키예요.

기대하는 응답

```json
{
  "status": "canceled"
}
```

필드 설명
`status` (string) – 제공업체 쪽에서 해당 구독의 결과 상태예요. 취소에 성공하면 `"canceled"`여야 해요.

---

## 10. 6단계 – 환불과 기타 작업

### 10.1 환불 이벤트 – type: "refund"

환불이 필요하면 하이퍼클래스가 `queryUrl`을 호출해요.

```json
{
  "type": "refund",
  "amount": 50.00,
  "transactionId": "TRANSACTION_ID",
  "chargeId": "CHARGE_ID",
  "apiKey": "API_KEY"
}
```

필드 설명
`type` = `"refund"` – 환불 요청이라는 뜻이에요.`amount` (number) – 환불할 금액이에요(부분 환불 가능).`transactionId` (string) – 환불할 하이퍼클래스 내부 거래 ID예요.`chargeId` (string) – 결제 시스템의 원래 결제 식별자예요.`apiKey` (string) – 요청을 인증할 수 있도록 하이퍼클래스가 함께 보내는 백엔드 키예요.

환불은 다음과 같이 처리돼요.

- 부분 환불이 가능해요.
- 한 거래에 여러 번 환불할 수 있어요. 단, 총 환불 금액이 원래 금액 이하여야 해요.

기대하는 응답

```json
{
  "success": true,
  "message": "Refund successful",
  "id": "REFUND_ID",
  "amount": 50.0,
  "currency": "USD"
}
```

필드 설명
`success` (boolean) – 환불에 성공하면 `true`, 실패하면 `false`예요.`message` (string) – 환불 상태를 설명하는 텍스트예요. 예: `success`가 `false`일 때의 실패 사유.`id` (string) – 결제 시스템의 환불 식별자예요.`amount` (number) – 환불된 금액이에요(소수 형식).`currency` (string) – 환불 통화 코드예요. 예: `USD`.

---

## 11. 7단계 – 하이퍼클래스로 보내는 웹훅

하이퍼클래스는 구독, 주문, 거래, 환불 등의 변경 사항을 웹훅으로 받을 수 있어요.

### 11.1 웹훅 엔드포인트

- 엔드포인트: `https://backend.leadconnectorhq.com/payments/custom-provider/webhook`
- 메서드: POST
- 본문: 이벤트 유형에 따른 JSON

이 엔드포인트는 하이퍼클래스가 웹훅을 받는 주소예요. 웹훅을 보내는 쪽은 제공업체의 시스템이에요. 하이퍼클래스로 웹훅을 보낼 때 이 구조를 사용하세요.

### 11.2 지원하는 이벤트

구독

1. `subscription.trialing`
2. `subscription.active`
3. `subscription.updated`
4. `subscription.charged`

결제

1. `payment.captured`

---

### 11.3 일반 페이로드 구조

```json
{
  "event": "subscription.charged",
  "chargeId": "CHARGE_ID",
  "ghlSubscriptionId": "GHL_SUBSCRIPTION_ID",
  "subscriptionSnapshot": { },
  "chargeSnapshot": { },
  "ghlTransactionId": "GHL_TRANSACTION_ID",
  "marketplaceAppId": "MARKETPLACE_APP_ID",
  "locationId": "LOCATION_ID",
  "apiKey": "API_KEY_XXXXXXX"
}
```

필드 설명
`event` (string) – 이벤트 유형이에요(`subscription.charged`, `subscription.trialing`, `subscription.active`, `subscription.updated`, `payment.captured`).`chargeId` (string) – 시스템의 결제 ID예요.`ghlSubscriptionId` (string) – 하이퍼클래스의 구독 ID예요.`subscriptionSnapshot` (object) – 현재 구독 상태예요(아래 참고).`chargeSnapshot` (object) – 현재 결제 상태예요(아래 참고).`ghlTransactionId` (string) – 하이퍼클래스의 거래 ID예요.`marketplaceAppId` (string) – 마켓플레이스 앱 ID예요.`locationId` (string) – 하이퍼클래스 로케이션(서브 계정) ID예요.`apiKey` (string) – 결제 제공업체 API 키예요.

---

### 11.4 이벤트별 필수 필드

#### 1. payment.captured

```json
{
  "event": "payment.captured",
  "chargeId": "CHARGE_ID",
  "ghlTransactionId": "GHL_TRANSACTION_ID",
  "chargeSnapshot": { },
  "locationId": "LOCATION_ID",
  "apiKey": "API_KEY_XXXXXXX"
}
```

#### 2. subscription.updated

```json
{
  "event": "subscription.updated",
  "ghlSubscriptionId": "GHL_SUBSCRIPTION_ID",
  "subscriptionSnapshot": { },
  "locationId": "LOCATION_ID",
  "apiKey": "API_KEY_XXXXXXX"
}
```

#### 3. subscription.trialing, subscription.active

```json
{
  "event": "subscription.trialing",
  "chargeId": "CHARGE_ID",
  "ghlTransactionId": "GHL_TRANSACTION_ID",
  "ghlSubscriptionId": "GHL_SUBSCRIPTION_ID",
  "marketplaceAppId": "MARKETPLACE_APP_ID",
  "locationId": "LOCATION_ID",
  "apiKey": "API_KEY_XXXXXXX"
}
```

#### 4. subscription.charged

```json
{
  "event": "subscription.charged",
  "chargeId": "CHARGE_ID",
  "ghlSubscriptionId": "GHL_SUBSCRIPTION_ID",
  "subscriptionSnapshot": { },
  "chargeSnapshot": { },
  "locationId": "LOCATION_ID",
  "apiKey": "API_KEY_XXXXXXX"
}
```

---

### 11.5 subscriptionSnapshot 스키마

```json
{
  "id": "SUBSCRIPTION_ID",
  "status": "trialing",
  "trialEnd": 1724217600,
  "createdAt": 1724217600,
  "nextCharge": 1726896000
}
```

필드 설명
`id` (string) – 시스템의 구독 ID예요.`status` (string) – `trialing`, `active`, `expired`, `canceled`, `unpaid`, `pending` 중 하나예요.`trialEnd` (number) – 트라이얼이 끝나는 시각의 Unix 타임스탬프(초)예요.`createdAt` (number) – 구독이 만들어진 시각의 Unix 타임스탬프예요.`nextCharge` (number) – 다음 결제 예정 시각의 Unix 타임스탬프예요.

---

### 11.6 chargeSnapshot 스키마

```json
{
  "status": "succeeded",
  "amount": 10000,
  "chargeId": "CHARGE_ID",
  "chargedAt": 1724217600
}
```

필드 설명
`status` (string) – `succeeded`, `failed`, `pending` 중 하나예요.`amount` (number) – 결제 금액이에요(보통 최소 화폐 단위, 실제 금액 × 100).`chargeId` (string) – 시스템의 결제 ID예요.`chargedAt` (number) – 결제가 완료된 시각의 Unix 타임스탬프(초)예요.

---

## 12. 테스트 및 출시 점검 목록

아래 목록으로 연동이 제대로 되었는지 확인하세요.

1. 마켓플레이스 앱
   - 올바른 범위(scope)로 마켓플레이스에 앱을 만들었어요.
   - **설정**, **결제 제공업체**, **Profile**(프로필), **Custom Page**(커스텀 페이지)를 구성했어요.
2. OAuth와 설치
   - **리다이렉트 URL**로 code를 받아요.
   - 백엔드에서 code를 **액세스 토큰**으로 교환해요.
   - 앱 설치·제거 웹훅을 처리해요.
3. 제공업체 설정
   - 설치할 때 Create Public Provider Config를 호출해요.`queryUrl`과 `paymentsUrl`을 올바르게 설정했어요.
4. 테스트·라이브 설정
   - Custom Page에서 테스트 자격 증명을 수집해요.
   - 테스트 모드와 라이브 모드 각각 Connect Config API를 호출해요.
   - **결제 > 연동**에서 제공업체를 기본으로 설정했어요.
5. 체크아웃 iFrame`custom_provider_ready`를 보내요.`payment_initiate_props`를 처리해요.
   - 성공·오류·닫기 응답을 보내요.
   - 백엔드가 verify(성공/실패/보류)를 올바르게 처리해요.
6. 저장된 결제 수단`addCardOnFileSupported`를 지원해요.`setup_initiate_props`를 처리해요.`list_payment_methods`와 `charge_payment`를 구현했어요.
7. 수동 구독
   - 구독 스케줄을 켜도록 기능 정보를 업데이트했어요.`create_subscription`을 처리하고 올바른 스냅샷을 반환해요.
8. 환불`type: "refund"` 요청을 지원해요.
9. 웹훅
   - 올바른 이벤트 유형과 페이로드로 하이퍼클래스에 웹훅을 보내요.
10. 최종 테스트
    - 테스트 모드에서 처음부터 끝까지 전체 흐름을 확인했어요.
    - 출시 전에 라이브 모드에서 핵심 경로를 다시 테스트했어요.

---

## 13. 자주 묻는 질문

### 커스텀 결제 연동을 만들 때 어떤 언어나 프레임워크를 쓸 수 있나요?

하이퍼클래스 API는 특정 언어에 얽매이지 않아요. HTTP 요청을 보내고 JSON을 다룰 수 있는 언어라면 모두 쓸 수 있어요. 예를 들면 Node.js, Python, Ruby, PHP, Java가 있어요.

### 출시 전에 커스텀 결제 연동을 테스트할 수 있나요?

네. 테스트 모드 설정과 결제 제공업체의 샌드박스 정보를 사용하면 실제 카드나 계좌에 청구하지 않고 결제를 시뮬레이션할 수 있어요.

### 로그와 오류 모니터링은 어떻게 하나요?

아래 항목은 직접 로그를 남기세요.
`queryUrl`로 오가는 요청
- 하이퍼클래스로 보낸 웹훅
- 하이퍼클래스 API의 응답

이렇게 하면 운영 중 문제를 디버깅하고 모니터링하기 쉬워요.

### 결제 게이트웨이를 여러 개 연동할 수 있나요?

네, 아래와 같이 할 수 있어요.

- 백엔드에서 게이트웨이마다 별도 설정을 만들어요.
- 로케이션, 통화, 비즈니스 규칙에 따라 요청을 다른 게이트웨이로 보내도록 로직을 구성해요.

### subscription.active 웹훅을 보냈는데도 구독이 "미완료"로 남아 있어요. 무엇이 빠졌을까요?

하이퍼클래스에서 구독 상태를 실제로 바꾸는 건 웹훅이 아니라 verify 응답이에요.

하이퍼클래스가 `type: "verify"`로 `queryUrl`을 호출하면, 응답에 결제 상태와 구독 상태를 모두 담아야 해요. 예를 들면 다음과 같아요.

```json
{
  "success": true,
  "failed": false,
  "message": "",
  "chargeSnapshot": {
    "id": "payment-id",
    "status": "succeeded",
    "amount": 10000,
    "chargeId": "your_charge_id",
    "chargedAt": 1724217600
  },
  "subscriptionStatus": "active",
  "subscriptionSnapshot": {
    "id": "your_subscription_id",
    "status": "active",
    "trialEnd": 0,
    "createdAt": 1724217600,
    "nextCharge": 1726896000
  }
}
```

핵심 사항
`success: true`와 유효한 `chargeSnapshot`이 있으면 거래/주문이 성공으로 처리돼요.`subscriptionStatus`와 `subscriptionSnapshot`은 구독이 어떤 상태여야 하는지 하이퍼클래스에 알려 줘요.
- 이 구독 필드가 없거나 잘못되면 `subscription.active` 웹훅을 보냈더라도 구독이 미완료 상태로 남을 수 있어요.

### subscription.trialing, subscription.active, subscription.charged 웹훅은 정확히 언제 보내야 하나요?

웹훅은 그 시점에 시스템에 있는 실제 구독 상태를 그대로 반영하도록 보내세요.
`subscription.trialing`
  - 최초 결제 없이 트라이얼 구독을 만든 직후에 보내요.`subscription.active`
  - 트라이얼/대기 상태의 구독을 활성 청구 상태로 바꾸는 첫 결제가 성공한 뒤에 보내요.`subscription.charged`
  - 반복 결제가 일어날 때마다 보내요. 하이퍼클래스에서 결제 이력을 빠짐없이 보고 싶다면 첫 결제에도 보내세요.

웹훅은 비동기로 보내는 "상태 알림"이라고 생각하세요. 초기 구독 상태를 정할 때 하이퍼클래스가 기본으로 보는 신호는 여전히 verify 응답이에요.

### 구독 웹훅은 verify 단계 전에 보내야 하나요, 후에 보내야 하나요?

체크아웃 기반 구독에는 아래 흐름을 권장해요.

1. 고객이 iframe에서 체크아웃을 마쳐요.
2. iframe이 하이퍼클래스로 성공 이벤트를 보내요(`chargeId`와, 필요하면 구독 ID 포함).
3. 하이퍼클래스가 `type: "verify"`로 `queryUrl`을 호출해요.
4. 성공/실패 여부와 `chargeSnapshot`, 그리고 선택 사항인 `subscriptionStatus`/`subscriptionSnapshot`을 담아 verify 응답을 반환해요.
5. 시스템 내부 이벤트에 따라 해당 웹훅(`subscription.trialing`, `subscription.active`, `subscription.charged`)도 보낼 수 있어요.

웹훅과 verify의 정확한 순서는 크게 중요하지 않아요. 하이퍼클래스는 초기 구독 상태를 항상 verify 응답을 기준으로 판단해요. 웹훅은 이후 변경(다음 결제, 상태 전환 등)을 동기화하고, verify가 실패했을 때의 대비책으로 쓰여요.

### 최초 결제 없이 "트라이얼 진행 중"으로 시작하는 구독은 어떻게 처리하나요?

결제 없이 트라이얼로만 시작하는 경우는 이렇게 처리하세요.

1. 시스템에서 상태가 `trialing`이고 `nextCharge`가 미래 날짜인 구독을 만들어요.
2. iframe 흐름에서도 하이퍼클래스로 성공 이벤트를 보내세요. 실제 결제가 없어도 하이퍼클래스가 verify를 호출할 수 있어요.
3. verify 응답에 최소한 아래 내용을 담아요.

```json
{
  "success": true,
  "failed": false,
  "subscriptionStatus": "trialing",
  "subscriptionSnapshot": {
    "id": "your_subscription_id",
    "status": "trialing",
    "trialEnd": 1724217600,
    "createdAt": 1724217600,
    "nextCharge": 1726896000
  }
}
```

이렇게 하면 최초 결제 없이도 하이퍼클래스의 구독이 미완료에서 트라이얼 진행 중으로 바뀌어요. `subscription.trialing` 웹훅은 선택 사항이며, 비동기 확인용으로 보낼 수 있어요.

### 커스텀 결제 제공업체의 반복 청구는 누가 실행하나요?

하이퍼클래스는 커스텀 결제 제공업체의 반복 청구를 실행하지 않아요.

연동에서 아래를 직접 처리해야 해요.

- 구독 스케줄(시작일, 간격, 트라이얼, 총 주기 등)을 저장해요.
- 결제일마다 결제 게이트웨이로 고객에게 청구해요.
- 구독이 취소되거나 만료되거나 모든 주기를 마치면 청구를 멈춰요.
- 반복 결제가 성공할 때마다 하이퍼클래스로 `subscription.charged` 웹훅을 보내요.

하이퍼클래스는 이 웹훅(그리고 이후의 verify 호출)을 바탕으로 구독 타임라인과 상태를 시스템과 맞춰요.

### 체크아웃 기반 구독과 관리자가 만든 구독 스케줄은 어떻게 다른가요?

크게 두 가지 흐름이 있어요.

1. 체크아웃(iframe) 흐름
   - 고객이 하이퍼클래스 퍼널/페이지에서 `mode: "subscription"`으로 체크아웃해요.
   - 하이퍼클래스가 미완료 구독과 대기 중(pending) 거래를 만들어요.
   - 하이퍼클래스가 `paymentsUrl` iframe을 불러오고, 나중에 verify를 호출해요.
   - verify 응답(과 선택 사항인 웹훅)이 초기 구독 상태와 첫 결제를 정해요.
2. 수동/관리자 생성 구독 스케줄(API 전용) 흐름
   - 관리자가 하이퍼클래스에서 구독이나 스케줄을 직접 만들어요(현재는 커스텀 제공업체로 처리돼요).
   - 하이퍼클래스가 `type: "create_subscription"`으로 `queryUrl`을 호출해요.
   - 제공업체는 바로 아래 내용으로 응답해요.`subscriptionSnapshot` (필수)
     - 최초 결제가 있으면 선택 사항으로 `transaction`/`chargeSnapshot`
   - 이 응답이 하이퍼클래스의 구독 상태를 바로 업데이트해요. 이 흐름에는 iframe도 verify 단계도 없어요.
   - 이후에는 스케줄을 직접 운영하면서 결제할 때마다 `subscription.charged` 웹훅을 보내요.

### verify 요청의 transactionId가 시스템에서 보이는 거래와 달라요. 어떻게 하나요?

여러 번 시도하거나, 취소하거나, 재시도한 경우에는 하이퍼클래스가 보내는 `transactionId`가 게이트웨이의 레코드 하나와 1:1로 맞지 않을 수 있어요.

권장 방법
`transactionId`만 쓰지 말고 요청에 담긴 식별자를 모두 활용해 조회하세요.`transactionId` (하이퍼클래스)`chargeId` (게이트웨이의 결제 식별자)`subscriptionId` (하이퍼클래스 구독 ID)
  - 직접 관리하는 연락처/서브 계정 정보
- 게이트웨이를 조회할 때는 `chargeId`를 우선 사용하세요. 보통 시스템에서 가장 기본이 되는 결제 식별자예요.`transactionId`를 끝내 맞출 수 없으면 아래를 지키세요.
  - verify 페이로드 전체와 처리 방법을 로그로 남겨요.
  - 실제로 성공한 결제에 대해 일관된 `chargeSnapshot`과 `subscriptionSnapshot`을 반환해요.

목표는 하이퍼클래스의 거래마다 시스템의 실제 결제와 구독을 사실대로 담은 스냅샷을 반환하는 거예요.

### 커스텀 제공업체로 저장한 카드가 구독을 만들 때는 보이는데, 연락처 > 결제 > 카드 관리에는 안 보여요. 왜 그런가요?

현재 커스텀 결제 제공업체로 저장한 카드는 이렇게 동작해요.

- 구독을 만들면서 해당 연락처의 저장된 카드를 고를 때는 쓸 수 있어요(`list_payment_methods`와 `charge_payment` 로직 사용).
- 하이퍼클래스의 **연락처 > 결제 > 카드 관리** 화면에는 아직 표시되지 않아요.

현재 구현에서는 정상 동작이며, 연동 오류가 아니에요. **카드 관리**에서 커스텀 제공업체 카드를 모두 보고 관리하는 기능은 이후 개선할 예정이에요.

### 샘플 패키지가 포함된 커스텀 제공업체용 API 전용 문서가 있나요?

네, 현재 있어요. 문서 위치와 샘플 패키지는 하이퍼클래스 고객지원에 문의하세요.
