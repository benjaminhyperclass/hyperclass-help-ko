---

번역일: 2026-04-07
카테고리: 08-결제 > 결제-연동
---

# 플랫폼에서 커스텀 결제 연동을 구축하는 방법

이 가이드는 Hyperclass의 모든 결제 사용 사례(체크아웃, 구독, 저장된 결제 방법 등)에 연결되는 커스텀 결제 제공업체를 구축하는 방법을 안내합니다. Hyperclass의 Marketplace와 Payments API를 사용하여 자체 게이트웨이나 서드파티 프로세서를 연결하고 모든 Hyperclass 로케이션(하위 계정)에서 사용할 수 있게 만들 수 있습니다.

목차

- [목차](#목차)
- [1. 개요](#1-개요)
- [2. 주요 개념](#2-주요-개념)
- [3. 사전 요구사항](#3-사전-요구사항)
- [4. 높은 수준의 연동 흐름](#4-높은-수준의-연동-흐름)
- [5. 1단계 – Marketplace 앱 생성](#5-1단계-marketplace-앱-생성)
  - [5.1 Marketplace 대시보드 접근](#51-marketplace-대시보드-접근)
  - [5.2 설정 구성](#52-설정-구성)
  - [5.3 Payment Provider 구성](#53-payment-provider-구성)
  - [5.4 프로필](#54-프로필)
  - [5.5 커스텀 페이지](#55-커스텀-페이지)
- [6. 2단계 – 인증 및 설치 플로우 구현](#6-2단계-인증-및-설치-플로우-구현)
- [7. 3단계 – 테스트 및 라이브 구성 연결](#7-3단계-테스트-및-라이브-구성-연결)
- [8. 4단계 – 체크아웃 iFrame 연동 구현](#8-4단계-체크아웃-iframe-연동-구현)
- [9. 5단계 – 저장된 결제 방법 및 수동 구독](#9-5단계-저장된-결제-방법-및-수동-구독)
- [10. 6단계 – 환불 및 기타 액션](#10-6단계--환불-및-기타-액션)
- [11. 7단계 – Hyperclass로부터의 웹훅](#11-7단계--hyperclass로부터의-웹훅)
- [12. 테스트 및 라이브 체크리스트](#12-테스트-및-라이브-체크리스트)
- [13. 자주 묻는 질문](#13-자주-묻는-질문)

## 1. 개요

Hyperclass의 커스텀 결제 제공업체 프레임워크를 사용하면 모든 결제 게이트웨이를 플랫폼과 연동하고 Hyperclass이 결제를 처리하는 모든 곳에서 사용할 수 있습니다.

연동이 완료되면 결제 제공업체는 다음이 가능합니다:

- App Marketplace와 결제(Payments) > 연동(Integrations)에 표시
- 일회성 및 정기 결제 처리
- 오프 세션 결제 처리(저장된 결제 방법 사용)
- 수동 구독 및 구독 일정 지원
- 웹훅을 통해 Hyperclass에 업데이트 동기화

## 2. 주요 개념

**Marketplace 앱**
Hyperclass Marketplace에서 연동의 컨테이너입니다. OAuth, 스코프, 카테고리, 커스텀 페이지를 정의합니다.

**커스텀 결제 제공업체**
Hyperclass에 앱이 결제 제공업체임을 알리고 지원하는 결제 유형(일회성, 정기, 오프 세션)을 설정하는 결제 구성입니다.

**queryUrl**
Hyperclass이 모든 서버 측 결제 작업을 위해 호출하는 백엔드 엔드포인트(귀하의 서버)입니다:
- 결제 검증 (type: "verify")
- 결제 방법 목록 (type: "list_payment_methods")
- 저장된 방법 결제 (type: "charge_payment")
- 수동 구독 생성 (type: "create_subscription")
- 구독 취소 (type: "cancel_subscription")
- 환불 생성 (type: "refund")

**paymentsUrl**
Hyperclass이 iframe 내부에서 로드하여 고객이 결제 제공업체를 통해 결제할 수 있게 하는 공개 URL입니다.

**커스텀 페이지**
Hyperclass이 Marketplace UI의 iframe 내부에서 로드하는 공개 URL입니다. 연동 구성(API 키, 머천트 ID, 테스트/라이브 모드 등)에 사용됩니다.

**테스트 vs 라이브 모드**
- 테스트 모드 – 실제 돈 없이 결제를 샌드박싱하고 시뮬레이션하는 데 사용
- 라이브 모드 – 실제 결제에 사용

각 로케이션은 제공업체에 대해 테스트 및 라이브 구성을 모두 가질 수 있습니다.

## 3. 사전 요구사항

다음이 필요합니다:

- Marketplace 대시보드에 액세스할 수 있는 Hyperclass 계정
- 클라우드 제공업체에 호스팅된 백엔드 서비스(Node.js, Python, Ruby 등)
- 다음을 위한 공개 도메인:
  - OAuth 리다이렉트 URL
  - 커스텀 구성 페이지
  - queryUrl 및 웹훅
  - paymentsUrl(체크아웃 iframe)
- 다음에 대한 친숙함:
  - OAuth 2.0
  - JSON 및 HTTP API
  - 웹훅 처리

연동 엔드포인트에 대한 공개 Payments API 문서도 참조하세요.

## 4. 높은 수준의 연동 흐름

결제 게이트웨이 연동에는 네 가지 주요 단계가 있습니다:

- 커스텀 결제 제공업체 카테고리에서 Marketplace 앱 생성
- OAuth, 웹훅, queryUrl 요청을 처리하는 백엔드 서비스 생성
- 다음을 위한 공개 페이지 생성:
  - 연동 구성(커스텀 페이지)
  - iframe을 통한 결제 수집(paymentsUrl)
- 테스트 및 라이브 결제 모드 구성 및 종단 간 플로우 테스트

참고용 소개 비디오 - https://www.loom.com/share/f524dbd7858a47dea08f8a27c688ed46

## 5. 1단계 – Marketplace 앱 생성

### 5.1 Marketplace 대시보드 접근

- https://marketplace.gohighlevel.com 이동
- 새 앱 생성 및 구성:
  - 설정(Settings)
  - 결제 제공업체(Payment Provider)
  - 프로필(Profile)
  - 커스텀 페이지(Custom Pages)

### 5.2 설정 구성

#### 5.2.1 필수 스코프

앱이 결제 및 상품과 상호 작용할 수 있도록 다음 스코프를 추가합니다:

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

**스코프 참조**
- payments/orders.* – 결제 주문을 읽고 관리합니다.
- payments/subscriptions.readonly – 구독 세부정보를 읽습니다.
- payments/transactions.readonly – 결제 거래 세부정보를 읽습니다.
- payments/custom-provider.* – 커스텀 제공업체 구성을 읽고 관리합니다.
- products.* – 결제와 연관된 상품 및 가격을 읽습니다.

#### 5.2.2 리다이렉트 URL

앱이 로케이션에 설치될 때 OAuth 플로우를 완료하는 데 사용됩니다. Hyperclass은 code 쿼리 매개변수와 함께 사용자를 여기로 리다이렉트합니다.

예시:
```
https://your-domain.com/installed?code=0834cbd778dacf89c
```

코드를 사용하여 OAuth Access Token API를 통해 OAuth 액세스 토큰을 받고 향후 API 호출을 위해 안전하게 저장하세요.

**필드 참조**
- code (string) – 단수명 인증 코드. 액세스 토큰으로 교환합니다.

#### 5.2.3 클라이언트 키

Hyperclass은 OAuth를 위한 클라이언트 키를 제공합니다.
- 백엔드에만 저장하세요.
- OAuth 코드를 액세스 토큰으로 교환할 때 사용하세요.

#### 5.2.4 웹훅 URL(앱 설치/제거)

다음 상황에서 Hyperclass이 호출할 웹훅 URL을 구성합니다:
- 로케이션에 앱이 설치될 때
- 로케이션에서 앱이 제거될 때

다음 용도로 사용하세요:
- 해당 로케이션에 대한 구성을 귀하 측에서 초기화
- 앱이 제거될 때 데이터 정리

#### 5.2.5 SSO 키

Hyperclass이 SSO 키를 제공합니다.
- 백엔드에 안전하게 저장하세요.
- iframe 내부의 커스텀 페이지로 전달된 인증 토큰을 해독하여 Hyperclass 사용자와 로케이션을 식별하는 데 사용하세요.

### 5.3 Payment Provider 구성

설정(Settings) 탭이 완료되면 Payment Provider 섹션을 구성합니다. 이것이 앱을 Hyperclass의 "결제 앱"으로 만드는 것입니다.

**필드**
- Name – 결제 제공업체의 표시 이름
- App description – 결제(Payments) > 연동(Integrations) UI에 나타나는 짧은 설명
- Payment provider type – 제공업체가 지원하는 결제 유형:
  - OneTime – 단일 고정 결제, 향후 결제 없음
  - Recurring – 고정 정기 결제 및 구독. 귀하 측에서 구독을 생성/관리하고 웹훅을 통해 업데이트(새 결제, 취소, 미납 등)를 다시 보내야 합니다.
  - Off Session – 오프 세션 결제: 고객과 직접적인 상호작용 없이 결제(예: 저장된 카드). 일반적으로 승인된 결제 방법을 파일에 저장해야 합니다.
- Logo – UI에 표시되는 제공업체 로고의 공개 URL

### 5.4 프로필

프로필(Profile) 섹션에서 다음을 설정합니다:
- Category = Third Party Provider

이렇게 하면 앱이:
- App Marketplace에 올바르게 나타납니다
- 쉬운 검색을 위해 결제(Payments) > 연동(Integrations)에 나타납니다

### 5.5 커스텀 페이지

게이트웨이 자격 증명(공개 키, 머천트 ID 등)을 수집하기 위한 커스텀 페이지를 구성합니다.

- 설치 후 Hyperclass이 iframe에서 로드하는 공개 URL입니다
- 결제(Payments) > 연동(Integrations)에서 사용자가 연동 관리를 클릭할 때도 사용됩니다

이 페이지를 사용하여:
- 사용자가 게이트웨이를 연결/연결 해제하도록 허용
- 테스트/라이브 자격 증명 수집
- Hyperclass의 연동 API에 대한 백엔드 호출 트리거

## 6. 2단계 – 인증 및 설치 플로우 구현

### 6.1 설치 순서

사용자가 로케이션에 앱을 설치할 때:

1. Hyperclass이 OAuth 코드와 함께 리다이렉트 URL을 엽니다
2. 백엔드에서 코드를 액세스 토큰으로 교환합니다(OAuth Access Token API)
3. Hyperclass이 구성을 위해 커스텀 페이지를 로드합니다
4. Hyperclass은 공개 제공업체 구성을 생성하는 API 호출을 기대합니다. 이는:
   - Hyperclass Payments에서 제공업체를 등록합니다
   - 결제(Payments) > 연동(Integrations)에서 앱이 결제 옵션으로 나타나게 합니다

### 6.2 공개 제공업체 구성 생성

다음과 같은 페이로드로 Create Public Provider Config API를 호출합니다:

```json
{
  "name": "My Payment Provider",
  "description": "Tagline or short description",
  "imageUrl": "https://your-domain.com/logo.png",
  "locationId": "Hyperclass_SUB_ACCOUNT_ID",
  "queryUrl": "https://your-backend.com/payments/query",
  "paymentsUrl": "https://your-frontend.com/payments/checkout"
}
```

**필드 참조**
- name (string) – Hyperclass 전체에 표시되는 연동 이름(Marketplace, Integrations 등)
- description (string) – 결제(Payments) > 연동(Integrations)에 표시되는 짧은 설명/태그라인
- imageUrl (string, URL) – 결제 제공업체 로고의 공개 URL
- locationId (string) – 앱이 설치된 Hyperclass 하위 계정 ID
- queryUrl (string, URL) – Hyperclass이 결제 관련 작업을 위해 호출하는 백엔드 엔드포인트: verify, refund, list/charge payment methods, create subscriptions 등
- paymentsUrl (string, URL) – Hyperclass이 고객 대면 결제를 위해 iframe 내부에서 로드하는 공개 체크아웃 페이지 URL

## 7. 3단계 – 테스트 및 라이브 구성 연결

설치 후 사용자는 테스트 및 라이브 자격 증명을 구성해야 합니다.

Hyperclass은 Connect Config API를 통한 테스트 및 라이브 구성 업데이트를 기대합니다:

**주요 필드:**
- apiKey – Hyperclass에서 queryUrl로의 백엔드 호출에 사용되는 비밀 키
- publishableKey – 프론트엔드(iframe)에서 결제를 초기화하는 데 사용하는 노출 가능한 키

일반적으로 다음을 수행합니다:
1. 사용자가 커스텀 페이지에서 테스트 키를 붙여넣도록 합니다
2. 백엔드에서 Connect config API를 호출합니다(테스트 모드)
3. 라이브 키에 대해 반복합니다
4. 사용자가 결제(Payments) > 연동(Integrations) > [귀하의 앱] > 기본값으로 설정에서 제공업체를 기본값으로 설정합니다

모드(테스트 또는 라이브)에 대한 키가 추가되면 해당 모드는 결제에 사용할 수 있게 됩니다.

결제 플로우 작동 방식:

![결제 플로우 다이어그램](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060818947/original/zT0aWDcBndJJsZw2E8uoHbbgkYhef9WovQ.png?1765972400)

## 8. 4단계 – 체크아웃 iFrame 연동 구현

제공업체를 통한 모든 결제는 paymentsUrl을 로드하는 iframe 내에서 발생합니다.

### 8.1 준비 이벤트: custom_provider_ready

iframe이 로드되고 데이터를 수신할 준비가 되면 준비 이벤트를 보냅니다:

```json
{
  "type": "custom_provider_ready",
  "loaded": true
}
```

**필드 참조**
- type = "custom_provider_ready" – 준비 이벤트임을 식별합니다
- loaded (boolean) – iframe이 완전히 로드되고 준비되었을 때 true로 설정합니다

### 8.2 결제 시작 이벤트: payment_initiate_props

Hyperclass이 준비 이벤트를 받은 후 결제 데이터 이벤트를 보냅니다:

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

이 이벤트를 받으면 iframe에서 결제 플로우를 시작해야 합니다.

### 8.3 결과 이벤트

결제를 처리한 후 다음 이벤트 중 하나를 Hyperclass로 다시 보내야 합니다.

#### 8.3.1 결제 성공

```json
{
  "type": "custom_element_success_response",
  "chargeId": "GATEWAY_CHARGE_ID"
}
```

#### 8.3.2 결제 실패

```json
{
  "type": "custom_element_error_response",
  "error": {
    "description": "Card was declined"
  }
}
```

#### 8.3.3 결제 취소

```json
{
  "type": "custom_element_close_response"
}
```

### 8.4 검증 호출: type: "verify"

성공을 보고하면 Hyperclass은 queryUrl을 통해 백엔드 검증을 수행합니다:

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

**예상 응답**
- `{ "success": true }` - Hyperclass에서 주문 및 거래를 성공으로 표시합니다
- `{ "failed": true }` - 거래를 실패로 표시합니다
- `{ "success": false }` - 거래를 대기 상태로 둡니다. 나중에 웹훅을 통해 성공으로 표시할 수 있습니다

## 9. 5단계 – 저장된 결제 방법 및 수동 구독

### 9.1 결제 방법 추가(카드 파일 저장)

카드/결제 방법 저장을 지원하려면 준비 이벤트를 확장합니다:

```json
{
  "type": "custom_provider_ready",
  "loaded": true,
  "addCardOnFileSupported": true
}
```

이 플래그를 보면 Hyperclass은 설정 시작 이벤트를 보냅니다:

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

제공업체로 결제 방법 추가를 완료한 후:

**성공**
```json
{
  "type": "custom_element_success_response"
}
```

**실패**
```json
{
  "type": "custom_element_error_response",
  "error": {
    "description": "Unable to save card"
  }
}
```

새로 추가된 결제 방법은 나중에 해당 연락처에 대한 결제 방법 목록 응답에 나타나야 합니다.

### 9.2 결제 방법 목록 – type: "list_payment_methods"

Hyperclass은 저장된 방법을 가져오기 위해 queryUrl을 호출합니다:

```json
{
  "locationId": "Ktkq45jCf1R15Z1D6Q3t",
  "contactId": "W1nPA7y2Dv8oL1MEvs2A",
  "apiKey": "API_KEY_XXXXXXX",
  "type": "list_payment_methods"
}
```

**예상 응답**
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

### 9.3 결제 방법 청구 – type: "charge_payment"

저장된 방법을 사용한 오프 세션 청구나 인보이스의 경우 Hyperclass이 queryUrl을 호출합니다:

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

**예상 응답**
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

### 9.4 저장된 방법을 사용한 수동 구독(구독 일정)

저장된 방법을 지원하는 제공업체는 수동 구독 생성 요청을 받을 수 있습니다.

#### 9.4.1 기능 선언

Update Capabilities API를 사용하여 제공업체가 구독 일정을 지원한다고 Hyperclass에 알립니다.

#### 9.4.2 런타임 플로우: type: "create_subscription"

수동 구독이 생성되면 Hyperclass이 queryUrl에 POST를 보냅니다:

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
  "productDetails": [...]
}
```

**예상 응답**
```json
{
  "success": true,
  "failed": false,
  "message": "Subscription created",
  "transaction": {
    "chargeId": "1234567890",
    "chargeSnapshot": {...}
  },
  "subscription": {
    "subscriptionId": "1234567890",
    "subscriptionSnapshot": {...}
  }
}
```

#### 9.4.3 구독 취소: type: "cancel_subscription"

Hyperclass이 제공업체에게 기존 구독을 취소하도록 요청할 때 사용합니다:

```json
{
  "type": "cancel_subscription",