---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006224-ecommerce-dropshipping-integration
번역일: 2026-11-06
카테고리: 37-이커머스-스토어
---

# 이커머스 드롭쉬핑 연동 만들기

물류·주문 처리·배송 같은 공급업체와 하이퍼클래스를 연결하는 드롭쉬핑 연동을 만들고, 마켓플레이스 앱으로 게시하는 흐름을 설명해요.

## 소개

이 문서는 드롭쉬핑 연동을 만들어 마켓플레이스 앱으로 게시할 때 도움이 돼요. 플랫폼에 연결되고 마켓플레이스로 배포되는 공급업체 연동(예: 물류, 주문 처리, 배송)을 만들 때 따라갈 큰 목표와 구조를 정리했어요.

## 드롭쉬핑 연동

### 1. 마켓플레이스 앱 만들기

마켓플레이스에서 앱을 만들어요. 아래 순서로 진행해요.

- 배포 유형(에이전시 또는 서브 계정)을 정해요.
- 앱 프로필을 작성해요.
- 필요한 OAuth 스코프를 추가해요.
- 클라이언트 자격 증명(Client ID/Secret)을 생성해요.

이 과정을 거치면 앱의 정체성과 권한이 정해져요.

자세한 안내는 [마켓플레이스 개발 시작하기](../35-개발자/Developer-Resources/how-to-get-started-with-the-developer-s-marketplace.md) 문서를 참고하세요.

사용할 API(상품, 가격, 주문, 주문 처리, 웹훅 등)에 맞춰 해당하는 OAuth 스코프를 앱에 추가해야 해요. 전체 스코프 목록은 [Scopes](https://highlevel.stoplight.io/docs/integrations/vcctp9t1w8hja-scopes)에서 확인하세요.

### 2. 마켓플레이스 앱 인증 처리

인증 처리는 아래 순서로 진행해요.

- 앱 설정에서 OAuth **리다이렉트 URL**을 설정해요.
- 인증 코드를 받을 GET 콜백 엔드포인트를 구현해요.
- 받은 코드를 액세스/리프레시 토큰으로 교환하고, 토큰은 안전하게 저장해요.
- POST 웹훅 엔드포인트를 만들고, 그 URL을 앱 설정에 추가해요.
- 앱에 로케이션/계정을 할당하고, 연결이 잘 되는지 확인해요.

자세한 안내는 [마켓플레이스 개발 시작하기](../35-개발자/Developer-Resources/how-to-get-started-with-the-developer-s-marketplace.md) 문서를 참고하세요.

### 3. 상품 동기화 (플랫폼 → 하이퍼클래스)

공개 API로 먼저 상품을 만들고, 그 상품에 가격을 하나 이상 만들어요. 단순한 상품은 가격이 하나예요. 옵션이 있는 상품은 옵션 조합마다 가격을 만들어요.

- 상품 만들기(요약):

  - 핵심 필드를 넣어 상품을 만들어요: `name`, `locationId`, `description`, `productType`(PHYSICAL/DIGITAL), `availableInStore`, `image`, `medias`.
  - 옵션이 있는 상품이라면 옵션(예: 색상, 사이즈)이 담긴 `variants`를 포함해요. 옵션 ID는 옵션별 가격을 만들 때 필요하니 꼭 보관하세요.
- 가격 만들기:

  - 상품의 `_id`를 참조해 가격을 만들어요. `locationId`, `type`(one_time/recurring), `currency`, `amount`, `sku`를 넣고, 필요하면 재고 관련 플래그도 넣어요.
  - 옵션이 있는 상품은 해당 조합과 일치하는 `variantOptionIds`를 넘겨요(예: [색상: 빨강, 사이즈: 小]).
  - 실물 상품은 무게(`value`, `unit`)와 크기(`length`, `width`, `height`, `unit`)가 담긴 `shippingOptions`를 포함해요.
- 선택 사항: 가격을 만든 뒤 상품의 `medias`에 `priceIds`를 넣어 업데이트하면, 이미지를 특정 옵션에 연결할 수 있어요. 이렇게 하면 스토어에 옵션에 맞는 이미지가 표시돼요.

예시와 페이로드가 담긴 자세한 안내는 [공개 API로 가격이 있는 상품 만들기](create-a-product-with-price-using-public-api.md) 문서를 참고하세요.

API 목록과 표준 응답 필드는 [Integrations API — Standard Response Fields](https://highlevel.stoplight.io/docs/integrations/0443d7d1a4bd0-standard-response-fields)를 참고하세요.

### 4. 주문 웹훅 (하이퍼클래스 → 공급업체)

웹훅 두 개(`OrderCreate`, `OrderStatusUpdate`)를 구독해요. 이 웹훅으로 주문을 공급업체에 내보내고, 이후 변경 사항도 전달해요.

- `OrderCreate` 웹훅 (스키마 요약):
- 주문 헤더(ID, 날짜), 고객 정보, 배송지/청구지 주소, 가격·SKU가 있는 주문 항목, 통화/금액, 선택적 메타데이터가 들어 있어요.
- 이 웹훅으로 공급업체에 해당 주문을 만들거나 업서트(upsert)해요. 제출하기 전에 각 주문 항목을 공급업체의 SKU/옵션에 맞게 매핑하세요.
- 스키마: [OrderCreate](https://highlevel.stoplight.io/docs/integrations/80837edaceead-order)

- `OrderStatusUpdate` 웹훅 (스키마 요약):
- 주문 ID와 상태 변화(예: 대기 중 → 완료/취소), 타임스탬프가 들어 있어요. 플랫폼에서 보내는 주문 처리 관련 신호도 포함될 수 있어요.
- 상태가 조건에 맞을 때(예: 완료)만 공급업체에 주문을 만들거나, 필요에 따라 주문을 취소하거나 보류하는 용도로 써요.
- 스키마: [OrderStatusUpdate](https://highlevel.stoplight.io/docs/integrations/9f1caf85e3890-order)

이 웹훅으로 공급업체 형식에 맞는 주문 페이로드(항목을 공급업체 SKU/옵션에 매핑, 주소, 합계)를 만들고, 해당 플랫폼에서 주문을 만들거나 업데이트해요.

### 5. 주문 처리 웹훅 (공급업체 → 하이퍼클래스)

공급업체의 배송/주문 처리 웹훅을 구독해요. 배송이 생성되거나 업데이트되면, 하이퍼클래스의 해당 주문에 맞는 주문 처리 페이로드를 만들어 제출해요.

- 공급업체 배송 → 하이퍼클래스 주문 처리 매핑:

  - 주문: 하이퍼클래스의 내부 주문 ID
  - 항목: 가격/옵션 식별자와 처리된 수량
  - 배송 추적: `trackingNumber`, `shippingCarrier`, `trackingUrl`
  - 필요하면 고객에게 알림도 보내요.

주문 처리는 API로 만들어요: [주문 처리 만들기 API(Create Order Fulfillment)](https://highlevel.stoplight.io/docs/integrations/1e091099a92c6-create-order-fulfillment)

요청 본문 예시:

```json
{
  "items": [{ "priceId": "66b6021be68f7a98102ba272", "qty": 2 }],
  "trackings": [
    {
      "trackingNumber": "1Z999AA10123456784",
      "shippingCarrier": "UPS",
      "trackingUrl": "https://wwwapps.ups.com/WebTracking/track?trackNums=1Z999AA10123456784"
    }
  ],
  "notifyCustomer": true
}
```

### 6. 커스텀 페이지 (선택)

마켓플레이스 앱에 더 풍부한 화면이나 흐름을 넣고 싶다면 커스텀 페이지를 활용하세요. 사용자 컨텍스트를 유지한 채 공급업체 전용 설정, 고급 설정, 대시보드를 하이퍼클래스 안에 넣을 수 있어요.

- 주요 활용 예: 연결 마법사, 인증 단계, 배송 환경설정, 배송사 서비스 매핑, 문제 해결 페이지
- 인증/사용자 컨텍스트: 가이드에 따라 사용자 컨텍스트를 전달하고 검증하세요. 그러면 페이지를 보여 줄 때 앱을 설치한 사용자와 로케이션을 안전하게 식별할 수 있어요.

[User context in Marketplace apps](https://highlevel.stoplight.io/docs/integrations/adfc6ad89ffb8-user-context-in-marketplace-apps)를 참고하세요.

## 마무리

지금까지 드롭쉬핑 연동을 처음부터 끝까지 만드는 흐름을 정리했어요.

- 마켓플레이스 앱을 만들고 스코프를 설정한 뒤, OAuth 인증과 토큰 저장을 마쳐요.
- 상품/가격 API로 카탈로그 데이터를 동기화해요.
- 주문 웹훅을 구독해 주문을 공급업체로 내보내요.
- 공급업체의 배송 웹훅을 받아, 하이퍼클래스에 주문 처리를 다시 만들어요.
- 필요하면 사용자 컨텍스트를 활용한 커스텀 페이지로 사용 경험을 높여요.

각 단계를 구현할 때는 링크된 문서에서 더 자세한 내용과 페이로드 예시를 확인하세요.
