---
원문: https://help.gohighlevel.com/support/solutions/articles/155000004649-create-a-product-with-price-using-public-api
번역일: 2026-11-06
카테고리: 37-이커머스-스토어
---

# 공개 API로 가격이 있는 상품 만들기

하이퍼클래스 공개 API로 상품과 가격을 만드는 방법을 안내해요. 상품 유형별 차이와 요청 예시도 함께 볼 수 있어요.

## 상품

상품은 하이퍼클래스의 핵심 항목 중 하나예요. **이커머스 스토어**, 인보이스, 견적서 등 여러 판매 채널에서 상품을 판매할 수 있어요.

---

### 상품 유형

하이퍼클래스의 상품은 크게 두 가지예요.

- 가격만 있는 상품
- 변형이 있는 상품

#### 가격만 있는 상품

변형이 없는 단순한 상품이에요. 변형이 필요 없거나 변형 분류가 1개뿐인 상품이라면 이 방식으로 만들 수 있어요. 크기만 고를 수 있는 포스터가 대표적인 예예요.

#### 변형이 있는 상품

상품 하나에 여러 변형이 있는 경우예요. 색상과 크기를 여러 가지로 고를 수 있는 티셔츠가 대표적인 예예요.

---

## 공개 API로 상품 만들기

### 인증

공개 API로 하이퍼클래스의 데이터를 만들고, 조회하고, 수정하고, 삭제(CRUD)하려면 액세스 토큰이 필요해요. 인증 과정은 하이퍼클래스 고객지원에 문의하세요.

### 상품 만들기 절차

상품을 만들 때는 아래 공개 API 두 가지를 사용해요.

- 상품 만들기 API (Create a Product)
- 상품 가격 만들기 API (Create a Price for Product)

아래 순서대로 진행하는 것이 좋아요.

#### 상품 만들기

먼저 상품 만들기 API로 상품을 만들어요. 상품을 만들 때 필요한 기본 속성은 다음과 같아요.

- name: 상품 이름
- locationId: 상품을 만들 서브 계정 ID
- description: 상품 설명. 판매 채널에서 상품을 소개할 때 쓰여요.
- productType: 여기서는 `DIGITAL`로 해 둘게요. <!-- 검토 필요: 원문 내용이 서로 다름 -->
- image: 고객에게 기본으로 보이는 **대표 이미지**
- availableInStore: **이커머스 스토어**에서 이 상품을 쓸 수 있게 할지 여부
- medias: 배열
  - id: 미디어 고유 ID
  - title: 미디어 제목
  - url: 미디어 원본 URL
  - type: 현재는 이미지만 지원해요.
  - isFeatured: 고객에게 보여 줄 이미지라면 `true`로 설정해요.
- variants: 변형 상품을 만들 때만 필요해요.
  - id: 변형 고유 ID
  - name: 변형 이름
  - options: 배열
    - id: 변형 옵션 고유 ID (가격을 만들 때 필요해요)
    - name: 옵션 이름

#### 가격만 있는 상품 요청 예시

```
{  
  "name": "High Speed Memory Drive",  
  "description": "A high speed memory drive with latest safety features and breath taking design",  
  "locationId": "<sub-account_ID>",   
  "availableInStore": true,  
  "productType": "PHYSICAL",  
  "image": "https://via.placeholder.com/150",  
  "medias": [  
    {  
      "id": "550e8400-e29b-41d4-a716-446655440000",  
      "title": "High Speed Memory Drive",  
      "url": "https://via.placeholder.com/150",  
      "type": "image",  
      "isFeatured": true  
    }  
  ]  
}
```

#### 변형이 있는 상품 요청 예시

```
{  
  "name": "T-shirt",  
  "description": "Latest t-shirt with latest design and quality",  
  "locationId": "<sub_account_id>",   
  "availableInStore": true,  
  "productType": "PHYSICAL",  
  "image": "https://via.placeholder.com/150",  
  "medias": [  
    {  
      "id": "550e8400-e29b-41d4-a716-446655440000",  
      "title": "T-shirt",  
      "url": "https://via.placeholder.com/150",  
      "type": "image",  
      "isFeatured": true  
    }  
  ],  
  "variants": [  
    {  
      "id": "550e8400-e29b-41d4-a716-446655440000",  
      "name": "Color",  
      "options": [  
        {  
          "id": "550e8400-e29b-41d4-a716-446655440002",  
          "name": "Red"  
        },  
        {  
          "id": "550e8400-e29b-41d4-a716-446655440001",  
          "name": "Blue"  
        },  
        {  
          "id": "550e8400-e29b-41d4-a716-446655440003",  
          "name": "Green"  
        }  
      ]  
    },  
    {  
      "id": "550e8400-e29b-41d4-a716-446655440111",  
      "name": "Size",  
      "options": [  
        {  
          "id": "550e8400-e29b-41d4-a716-446655440112",  
          "name": "Small"  
        },  
        {  
          "id": "550e8400-e29b-41d4-a716-446655440113",  
          "name": "Medium"  
        },  
        {  
          "id": "550e8400-e29b-41d4-a716-446655440114",  
          "name": "Large"  
        }  
      ]  
    }  
  ]  
}
```

{% hint style="info" %}
변형 상품은 옵션 ID를 잘 기록해 두세요. 가격을 만들 때 중요하게 쓰여요.
{% endhint %}

상품을 만들면 응답에 `_id` 속성이 포함돼요. 이 값이 만들어진 상품의 productId이고, 상품의 가격을 만들 때 사용해요.

#### 상품 가격 만들기

상품 가격 만들기 API로 상품의 가격을 만들어요. 가격을 만들 때 필요한 기본 속성은 다음과 같아요.

- product: 가격을 만들 상품의 ID
- locationId: 서브 계정 ID
- name: 가격 이름
- type: 반복 결제 상품도 지원하므로 `one_time`(1회) 또는 `recurring`(반복) 중에서 선택해요.
- currency: 가격의 통화
- amount: 통화에 맞는 금액
- description: 가격 설명
- variantOptionIds: 변형이 있는 상품에 필요해요.
  - 예를 들어 변형 조합이 `Red/Small`이라면 variantOptionIds 값은 다음과 같아요.

```
  ["550e8400-e29b-41d4-a716-446655440002","550e8400-e29b-41d4-a716-446655440112"]
```

  - `550e8400-e29b-41d4-a716-446655440002`는 `Red`, `550e8400-e29b-41d4-a716-446655440112`는 `Small`의 ID예요.
  - 변형이 있는 상품은 상품이 올바르게 표시되도록 variantOptionIds가 꼭 필요해요. 이 속성이 없으면 변형 조합이 잘못 표시돼요.
- trackInventory: 재고를 추적하려면 `true`로 설정해요.
- availableQuantity: **가용 수량**. trackInventory가 `true`일 때 적용돼요.
- allowOutOfStockPurchases: 품절이어도 구매를 허용할지 여부예요. trackInventory가 `true`일 때만 적용돼요.
- sku: 가격(또는 변형)의 SKU
- isDigitalProduct: **디지털 상품**이면 `true`
- shippingOptions: **실물 상품**(`PHYSICAL`)의 배송 속성이에요. 배송 연동에 쓰여요.
  - weight: 무게 옵션
    - value: 무게 값
    - unit: 무게 단위. 지원하는 값은 `kg, g, lb, oz`예요.
  - dimensions: 실물 상품의 크기
    - height: 숫자
    - width: 숫자
    - length: 숫자
    - unit: 크기 단위. 지원하는 값은 `cm, in, m`이에요.

단순 가격(변형 없음) 요청 예시:

```
    {  
  "product": "66b6021be68f7a98102ba272",  
  "locationId": "<sub_account_id>",  
  "name": "256 GB",   
  "type": "one_time",  
  "currency": "USD",  
  "amount": 100,  
  "description": "256 GB of storage",  
  "sku": "PS-256GB",  
  "isDigitalProduct": false,  
  "shippingOptions": {  
    "weight": {  
      "value": 100,  
      "unit": "g"  
    },  
    "dimensions": {  
      "length": 10,  
      "width": 10,  
      "height": 10,  
      "unit": "cm"  
    }  
  }  
}
```

#### 변형이 있는 상품의 가격 요청 예시

```
{  
  "product": "66b6021be68f7a98102ba272",  
  "locationId": "<sub_account_id>",  
  "name": "Red / Small",  
  "type": "one_time",  
  "currency": "USD",  
  "amount": 100,  
  "description": "Red / Small",  
  "sku": "PS-RED-SMALL",  
  "isDigitalProduct": false,  
  "variantOptionIds": ["550e8400-e29b-41d4-a716-446655440002","550e8400-e29b-41d4-a716-446655440112"],  
  "shippingOptions": {  
    "weight": {  
      "value": 100,  
      "unit": "g"  
    },  
    "dimensions": {  
      "length": 10,  
      "width": 10,  
      "height": 10,  
      "unit": "cm"  
    }  
  }  
}
```

{% hint style="info" %}
상품 변형이 올바르게 표시되려면 변형 옵션 ID가 필요해요.
{% endhint %}

#### 공개 API로 변형에 이미지 추가하기

이 기능은 변형이 있는 상품에서만 쓸 수 있어요. 가격만 있는 상품에서는 쓸 수 없어요. 상품의 가격을 만들면 응답에 가격의 내부 ID가 포함돼요. 이 ID로 특정 변형의 이미지를 업데이트할 수 있어요. 받은 priceIds를 넣어 아래 요청 내용으로 상품을 다시 업데이트하세요.

#### 상품 미디어를 priceIds로 업데이트하는 요청 예시

상품 요청 내용의 medias 배열에는 항목마다 `priceIds`라는 속성이 있고, 이 속성도 배열이에요. 해당하는 priceIds를 넣으면 미디어가 변형에 자동으로 연결돼요.

```
{
  "name": "T-shirt",
  "description": "Latest t-shirt with latest design and quality",
  "locationId": "<sub_account_id>", 
  "availableInStore": true,
  "productType": "PHYSICAL",
  "image": "https://via.placeholder.com/150",
  "medias": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "title": "T-shirt",
      "url": "https://via.placeholder.com/150",
      "type": "image",
      "priceIds": ["<created_price_Id>"],
      "isFeatured": true
    }
  ],
  "variants": [
   {...existing variants data}
  ]
}
```

{% hint style="warning" %}
현재는 priceId 하나에 이미지 하나만 연결할 수 있어요. 이미지 하나에 priceIds를 여러 개 연결하면 상품이 제대로 표시되지 않는 문제가 생겨요.
{% endhint %}

---

## 상품 및 이커머스 공개 API

하이퍼클래스의 상품 공개 API는 상품 일괄 업데이트, 재고, 스토어 노출, 컬렉션, 리뷰 관련 엔드포인트로 상품 관리와 이커머스 연동을 지원해요.

사용할 수 있는 기능은 다음과 같아요.

- 상품 일괄 업데이트: API 요청 한 번으로 여러 상품 레코드를 업데이트해요.
- 재고 관리: 상품 재고 정보를 조회하고 재고 수량을 업데이트해요.
- 스토어 상품 노출: 상품의 스토어 통계를 조회하고, 상품을 스토어에 포함하거나 제외해요.
- 상품 컬렉션: 상품 컬렉션을 조회, 생성, 수정, 삭제해요.
- 상품 리뷰: 상품 리뷰를 조회, 수정, 삭제하고, 검수 상태별 리뷰 수를 조회해요.

![상품 및 이커머스 공개 API 기능 개요](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084429562/original/nRkb7_bc_42dF_cStLT1NUBeShR9Ci-BSQ.png?1793200831)

개발자는 이 엔드포인트로 외부 연동을 통해 상품 관련 리소스를 관리할 수 있어요.

엔드포인트 사양, 인증 요건, 지원하는 API 버전, 요청 예시는 API 문서를 참고하세요. 문서 위치가 궁금하면 하이퍼클래스 고객지원에 문의하세요.

---

## 마무리

위 API를 사용하면 1회 결제 방식의 실물 상품을 단순 가격으로도, 변형을 넣어서도 만들 수 있어요. 반복 결제 상품도 지원하니, 반복 결제 상품 전용 속성은 가격 API 문서에서 자세히 확인해 보세요.
