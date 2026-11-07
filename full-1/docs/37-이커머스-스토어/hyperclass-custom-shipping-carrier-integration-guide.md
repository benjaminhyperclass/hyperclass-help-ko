---
원문: https://help.gohighlevel.com/support/solutions/articles/155000004995-highlevel-custom-shipping-carrier-integration-guide
번역일: 2026-11-06
카테고리: 37-이커머스-스토어
---

# 하이퍼클래스 맞춤 배송업체 연동 개발 가이드

하이퍼클래스 마켓플레이스에 맞춤 배송업체 연동 앱을 만들 때 따라 하는 개발 가이드예요. 앱 설정부터 실시간 배송 요금, 주문 동기화, 연동 해제까지 순서대로 설명해요.

## 소개

맞춤 배송업체 연동을 만들면, 하이퍼클래스를 쓰는 비즈니스가 원하는 배송업체를 직접 연결할 수 있어요. 결제 단계에서 실시간 배송 요금을 보여 주고, 주문 처리를 자동화하고, 배송 추적 정보를 고객에게 바로 전달할 수 있어요. 하이퍼클래스의 기본 이커머스 기능이 그만큼 넓어져요.

맞춤 배송업체 연동을 만들면 다음과 같은 이점이 있어요.

- 유연성: API를 제공하는 배송업체라면 기본 제공 옵션 외에도 어디든 연결할 수 있어요.
- 정확한 요금: 결제 단계에서 내 배송업체 계정 기준의 실시간 배송비를 보여 줄 수 있어요.
- 자동화된 주문 처리: 배송 라벨 생성과 출고 요청을 배송업체와 자동으로 처리해서 수작업을 줄여요.
- 매끄러운 배송 추적: 배송업체의 추적 정보를 하이퍼클래스 주문으로 동기화해서 고객이 배송 상황을 알 수 있어요.
- 통합된 사용 경험: 배송 관련 작업을 하이퍼클래스 안에서 관리할 수 있어요.

이 연동을 만들려면 다음 작업이 필요해요.

- API 호출과 웹훅을 처리하는 백엔드 개발
- 사용자가 설정할 수 있는 프런트엔드 개발(보통 커스텀 페이지로 만들어요)
- 하이퍼클래스, 내 서비스, 배송업체 API 사이에서 오가는 인증 정보와 데이터를 안전하게 관리하는 일

이 가이드를 따라 하면 하이퍼클래스 사용자의 배송 업무를 간편하게 해 주는 안정적인 연동을 만들 수 있어요.

## 연동 흐름도

![연동 흐름도](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044784099/original/KlH4zElvi21uzFzAciqiP3e3oxmP1F6ldQ.png?1744189412)

## 1. 요구 사항

### 기술 지식

- Node.js, Python 등 기본적인 백엔드 개발 지식
- REST API, 웹훅, OAuth 2.0 인증 흐름에 대한 이해

### 백엔드 서비스

백엔드 서비스는 다음을 처리할 수 있어야 해요.

- 하이퍼클래스에서 오는 OAuth 리디렉션 처리
- 하이퍼클래스(예: 주문 이벤트)와 맞춤 배송업체(예: 배송 업데이트) 양쪽에서 오는 웹훅 수신과 처리
- 하이퍼클래스 API와 맞춤 배송업체 API 호출
- 프런트엔드 UI 제공(UI를 따로 호스팅하지 않는 경우)

### 데이터베이스

데이터베이스에는 다음 정보를 안전하게 저장해야 해요.

- location ID별 하이퍼클래스 OAuth 토큰(액세스 토큰과 리프레시 토큰)
- 사용자가 입력한 맞춤 배송업체 자격 증명(API 키, 시크릿 등)과 해당 하이퍼클래스 서브 계정(location)의 연결 정보
- 하이퍼클래스 항목(예: 주문)과 배송업체 항목 사이의 매핑 정보

### 프런트엔드

간단한 프런트엔드 애플리케이션이 필요해요. 하이퍼클래스 커스텀 페이지로 만들 수도 있어요. 사용자는 이 화면에서 다음 작업을 해요.

- 연결 절차 시작
- 배송업체 API 자격 증명 입력과 저장
- 연결 설정 관리(예: 기능 켜기/끄기)

### API

백엔드 서비스에는 다음 API 엔드포인트가 필요해요.

- OAuth Redirect URI: 앱 승인이 끝난 뒤 하이퍼클래스가 호출하는 콜백을 처리해요.
- 하이퍼클래스 웹훅 리스너: 하이퍼클래스의 웹훅(예: `OrderCreate`, `OrderStatusUpdate`)을 받아요.
- 배송업체 자격 증명 관리: 프런트엔드에서 입력한 배송업체 자격 증명을 저장, 수정, 삭제하는 API예요.
- 배송업체 웹훅 리스너: 맞춤 배송업체가 보내는 웹훅을 받아요.
- 실시간 요금 콜백: 결제 단계에서 하이퍼클래스가 실시간 배송 요금을 가져오려고 호출하는 엔드포인트예요.

## 2. 초기 설정

### 마켓플레이스 앱 만들기

- 하이퍼클래스 API 문서의 인증(Authorization) 항목을 참고해서 새 마켓플레이스 앱을 만드세요.

### 앱 설정 구성하기

**앱 설정**에서 다음 항목을 입력해요.

- **앱 유형**: **서브 계정**으로 설정해요. 이렇게 하면 특정 서브 계정(location)에 앱을 설치할 수 있어요.
- **Redirect URI**(리디렉션 URI): OAuth 콜백을 처리할 백엔드 서비스 엔드포인트 주소를 입력해요. 예: `https://your-backend.com/oauth/callback`
- **웹훅 URL**: 하이퍼클래스의 웹훅을 받을 백엔드 서비스 엔드포인트 주소를 입력해요. 예: `https://your-backend.com/webhooks/highlevel`. 앱 설정에서 `OrderCreate`와 `OrderStatusUpdate` 웹훅이 켜져 있는지 확인하세요.

### 필요한 스코프

배송과 주문을 관리하려면 앱에 다음 스코프가 필요해요. 정확한 스코프 이름은 하이퍼클래스 API 문서의 스코프(Scopes) 항목을 참고하세요.

- `orders.readonly`
- `orders.write`
- `shipping.readonly`
- `shipping.write`

### 프런트엔드 UI(커스텀 페이지)

- 사용자가 배송업체 자격 증명(API 키, 시크릿, 계정 ID 등)을 입력할 수 있는 프런트엔드 화면을 만드세요.
- 이 화면은 호스팅한 프런트엔드 페이지, 또는 UI를 제공하는 엔드포인트를 가리키는 **사용자 정의 메뉴 링크**를 통해 하이퍼클래스 안에 넣어요.

### 사용자 컨텍스트 처리

- 프런트엔드와 백엔드는 사용자가 지금 작업 중인 하이퍼클래스 서브 계정(location)을 알아내야 해요. 커스텀 페이지나 메뉴 링크를 불러올 때 하이퍼클래스가 전달하는 컨텍스트를 사용하세요.
- 자세한 내용은 하이퍼클래스 API 문서의 마켓플레이스 앱 사용자 컨텍스트(User Context in Marketplace Apps) 항목을 참고하세요.
- 보통은 하이퍼클래스가 프런트엔드나 백엔드로 리디렉션할 때 쿼리 파라미터로 넘기는 토큰(JWT 또는 암호화된 페이로드)을 해석해요. 앱을 설정할 때 받은 공유 시크릿으로 이 토큰을 복호화하거나 검증하면 `locationId`를 얻을 수 있어요.

백엔드 예시(Node.js/Express):

```
// Example using crypto-js for AES decryption
const CryptoJS = require('crypto-js')

function decryptGhlUserData(encryptedData, sharedSecret) {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, sharedSecret)
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8)
    return JSON.parse(decryptedData)
  } catch (error) {
    console.error('Decryption failed:', error)
    throw new Error('Failed to decrypt or parse user data')
  }
}

// Example Express middleware/route handler
app.post('/your-context-endpoint', (req, res) => {
  try {
    // Assuming encrypted data is passed in the request body
    const { encryptedContextData } = req.body
    const sharedSecret = process.env.GHL_APP_SHARED_SECRET // Load your shared secret securely

    if (!encryptedContextData || !sharedSecret) {
      return res.status(400).json({ error: 'Missing data or configuration' })
    }

    const userData = decryptGhlUserData(encryptedContextData, sharedSecret)
    console.log('Decrypted User Context:', userData)
    // Now you have access to userData.locationId, userData.userId, etc.
    // Proceed with your logic...
    res.json({ success: true, locationId: userData.locationId })
  } catch (error) {
    res.status(500).json({ error: error.message || 'Internal Server Error' })
  }
})
```

프런트엔드 예시(커스텀 페이지 JavaScript):

```
// Function to request and potentially decrypt user context data
async function getUserContext() {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error('Timeout waiting for user context response'))
      window.removeEventListener('message', messageHandler)
    }, 5000) // 5-second timeout

    const messageHandler = (event) => {
      // Optional: Add origin check for security
      // if (event.origin !== 'expected_highlevel_origin') return;

      if (event.data && event.data.message === 'REQUEST_USER_DATA_RESPONSE') {
        clearTimeout(timeout)
        window.removeEventListener('message', messageHandler)
        console.log('Received encrypted context from HighLevel:', event.data.payload)
        // Send event.data.payload to your backend for decryption
        // fetch('/your-context-endpoint', { method: 'POST', ... body: { encryptedContextData: event.data.payload }})
        //   .then(response => response.json())
        //   .then(decryptedData => resolve(decryptedData))
        //   .catch(error => reject(error));

        // For demonstration, assuming payload is the decrypted context (or you handle decryption client-side IF safe)
        resolve(event.data.payload)
      }
    }

    window.addEventListener('message', messageHandler)
    // Request the data from the parent HighLevel window
    window.parent.postMessage({ message: 'REQUEST_USER_DATA' }, '*') // Use a specific target origin in production
  })
}

// Example usage:
getUserContext()
  .then((context) => {
    console.log('User Context:', context)
    // Use context.locationId, context.userId etc.
  })
  .catch((error) => {
    console.error('Failed to get user context:', error)
  })
```

### 배송업체 자격 증명 처리

1. 자격 증명 받기: 프런트엔드 UI에서 사용자에게 배송업체 API 키, 시크릿 등을 입력받아요.
2. 서브 계정과 연결하기: 받은 자격 증명을 데이터베이스에 안전하게 저장하고, 사용자 컨텍스트에서 얻은 `locationId`와 연결해 두세요.
3. 자격 증명 검증하기: 입력받은 자격 증명으로 배송업체 API에 테스트 호출을 보내서 유효한지 확인하고, 결과를 사용자에게 알려 주세요.

   프런트엔드 예시(자격 증명 저장):

   ```
   async function saveCarrierCredentials(locationId, apiKey, apiSecret) {
     try {
       const response = await fetch('/your-backend-api/carrier/credentials', {
         // Your backend endpoint
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
           // Include authentication if needed (e.g., JWT)
         },
         body: JSON.stringify({
           locationId: locationId, // Send context if needed by backend
           apiKey: apiKey,
           apiSecret: apiSecret
         })
       })

       if (!response.ok) {
         const errorData = await response.json()
         throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
       }

       const result = await response.json()
       console.log('Credentials saved successfully:', result)
       // Update UI (e.g., show success message)
       return result
     } catch (error) {
       console.error('Failed to save carrier credentials:', error)
       // Update UI (e.g., show error message)
       throw error
     }
   }

   // Example form submission handler
   document.getElementById('credential-form').addEventListener('submit', async (event) => {
     event.preventDefault()
     const apiKey = document.getElementById('api-key').value
     const apiSecret = document.getElementById('api-secret').value
     const locationId = 'USER_LOCATION_ID' // Get this from user context

     try {
       await saveCarrierCredentials(locationId, apiKey, apiSecret)
       alert('Credentials Saved!')
     } catch (error) {
       alert(`Error saving credentials: ${error.message}`)
     }
   })
   ```
4. 배송업체 웹훅 설정하기: 검증이 끝난 자격 증명으로 배송업체 시스템의 API를 호출해서, 내 백엔드의 배송업체 웹훅 리스너 URL(예: `https://your-backend.com/webhooks/carrier`)을 등록하세요. 이렇게 하면 배송업체가 송장 번호 생성 같은 배송 업데이트를 내 서비스에 알려 줄 수 있어요.

## 3. 실시간 배송 요금 구현

하이퍼클래스 결제 단계에서 맞춤 배송업체의 실시간 배송 요금을 보여 주려면, 내 서비스를 하이퍼클래스에 배송업체로 등록해야 해요.

### 하이퍼클래스에 배송업체 등록하기

- 백엔드 서비스에서 배송업체를 만드는 하이퍼클래스 API 엔드포인트로 POST 요청을 보내세요. 이 엔드포인트는 보통 스토어/결제 마이크로서비스에 속해 있어요. 엔드포인트는 `POST /shipping-carrier`예요.
- 요청 본문에는 서브 계정 정보(`altId`, `altType`)와 배송업체 연동 정보를 넣어요.

요청 예시:

```
POST /shipping-carrier HTTP/1.1
Host: <highlevel-api-domain>
Authorization: Bearer <location_access_token>
Content-Type: application/json

{
  "altId": "LOCATION_ID_HERE", // The location ID obtained from user context
  "altType": "location",
  "name": "Your Custom Carrier Name", // e.g., "My Awesome Shipping"
  "callbackUrl": "https://your-backend.com/rates" // Your backend endpoint for live rates
}
```

- `name`: 하이퍼클래스 배송 설정에서 사용자에게 보이는 이름이에요.
- `callbackUrl`: 결제 단계에서 하이퍼클래스가 실시간 요금을 가져오려고 POST 요청을 보내는 기본 URL이에요. 하이퍼클래스가 이 URL 뒤에 `/rates`를 붙여서 호출해요. 예를 들어 `https://your-backend.com/shipping`을 입력하면 `https://your-backend.com/shipping/rates`를 호출해요. 위 예시에서는 최종 호출 주소가 `https://your-backend.com/rates/rates`가 되므로, 엔드포인트가 `/rates`라면 `callbackUrl`을 `https://your-backend.com`처럼 맞춰 주세요. 정정: 사용자 요청 기준으로는 `callbackUrl`에 `/rates`까지 포함한 전체 URL을 넣는 것으로 보여요. 이 문서에서는 그 기준이 맞다고 보고 `callbackUrl`을 `https://your-backend.com/rates`로 설정해요. <!-- 검토 필요: 원문 내용이 서로 다름 -->
- 응답: 요청이 성공하면 만들어진 배송업체의 상세 정보가 돌아와요. 여기에 고유한 `_id`가 들어 있어요(이 문서에서는 `shippingCarrierId`라고 불러요). 이 `shippingCarrierId`를 서브 계정, 배송업체 자격 증명과 연결해서 데이터베이스에 저장하세요.

```
{
  "data": {
    "_id": "SHIPPING_CARRIER_ID_HERE", // Store this ID
    "altId": "LOCATION_ID_HERE",
    "altType": "location",
    "name": "Your Custom Carrier Name",
    "callbackUrl": "https://your-backend.com/rates",
    "marketplaceAppId": "YOUR_MARKETPLACE_APP_ID",
    "createdAt": "...",
    "updatedAt": "..."
  },
  "status": true
}
```

### 실시간 요금 콜백 구현하기

- 백엔드는 `callbackUrl`에 지정한 엔드포인트(예: `POST /rates`)를 구현해야 해요.
- 하이퍼클래스는 결제 단계에서 장바구니 내용과 배송지 주소를 담아 이 엔드포인트로 `POST` 요청을 보내요.

백엔드가 받는 요청 본문 예시(`POST /rates`):

```
{
  "rate": {
    "altId": "LOCATION_ID_HERE",
    "altType": "location",
    "origin": {
      "name": "Store Owner Name",
      "companyName": "Store Name",
      "address1": "123 Origin St",
      "address2": "Suite 100",
      "city": "Origin City",
      "state": "CA",
      "zip": "90210",
      "country": "US",
      "phone": "5551112222",
      "email": "store@example.com"
    },
    "destination": {
      "name": "Customer Name",
      "companyName": null,
      "address1": "456 Destination Ave",
      "address2": null,
      "city": "Destination City",
      "state": "NY",
      "zip": "10001",
      "country": "US",
      "phone": "5553334444",
      "email": "customer@example.com"
    },
    "items": [
      {
        "name": "Product A",
        "sku": "SKU123",
        "quantity": 2,
        "grams": 500, // Weight per item
        "unitPrice": 25.0,
        "totalPrice": 50.0, // quantity * unitPrice
        "productId": "HL_PRODUCT_ID_1",
        "priceId": "HL_PRICE_ID_1"
      },
      {
        "name": "Product B",
        "sku": "SKU456",
        "quantity": 1,
        "grams": 1200,
        "unitPrice": 100.0,
        "totalPrice": 100.0,
        "productId": "HL_PRODUCT_ID_2",
        "priceId": "HL_PRICE_ID_2"
      }
    ],
    "currency": "USD"
  }
}
```

백엔드에서 처리할 순서는 다음과 같아요.

1. 요청 본문을 파싱해요.
2. `altId`(locationId)에 연결된 배송업체 자격 증명을 데이터베이스에서 가져와요.
3. 하이퍼클래스의 요금 요청 페이로드를 맞춤 배송업체 API가 요구하는 형식으로 바꿔요.
4. 배송업체 API를 호출해서 실시간 배송 요금을 받아요.
5. 배송업체의 응답을 하이퍼클래스가 기대하는 형식으로 바꿔요.

백엔드가 보내는 응답 예시:

```
{
  "rates": [
    {
      "serviceName": "Standard Ground", // Name of the shipping service
      "amount": 15.5, // Cost of the service
      "currency": "USD", // Currency code
      "estimatedDays": 5 // Estimated delivery days (optional)
    },
    {
      "serviceName": "Express Overnight",
      "amount": 45.0,
      "currency": "USD",
      "estimatedDays": 1
    }
  ]
}
```

### 하이퍼클래스 배송 지역에 배송 요금 설정하기

- 배송업체 등록이 끝나면, 연동 앱이 직접(또는 사용자가 수동으로) 하이퍼클래스 스토어 설정의 해당 **배송 지역**에 이 배송업체 기반의 **배송 요금**을 추가해야 해요.
- 백엔드 자동화 방법:

  1. 하이퍼클래스 API로 해당 서브 계정의 **배송 지역** 목록을 가져와요. 엔드포인트는 `GET /shipping-zone`이에요.

     요청 예시(`GET /shipping-zone`):

     ```
     GET /shipping-zone?altId=LOCATION_ID_HERE&altType=location HTTP/1.1
     Host: <highlevel-api-domain>
     Authorization: Bearer <location_access_token>
     ```
  2. 위 호출로 받은 지역 중 필요한 지역마다 하이퍼클래스 API로 새 배송 요금을 만들어요(`POST /shipping-zones/{zoneId}/rates`, 엔드포인트는 추정한 값이에요).

     - 요금을 만드는 요청 본문에는 다음 값을 넣어요.
       - `isCarrierRate`를 `true`로 설정해요.
       - 배송업체를 등록할 때 받은 `shippingCarrierId`를 넣어요.
       - 실제 요금은 콜백으로 실시간 조회하므로, `amount`에는 임시 값(예: 0)을 넣어요.
       - `name`을 정해요(예: "My Awesome Shipping - Live Rates").
       - `altId`, `altType`을 지정해요.

요청 본문 예시(`POST /shipping-zones/{zoneId}/rates`):

```
{
  "altId": "LOCATION_ID_HERE",
  "altType": "location",
  "name": "My Awesome Shipping - Live Rates", // Name shown to user
  "currency": "USD", // Or the location's currency
  "amount": 0, // Placeholder, actual rate fetched live
  "conditionType": "NONE", // Or based on weight/price if needed, though usually NONE for carrier rates
  "isCarrierRate": true,
  "shippingCarrierId": "SHIPPING_CARRIER_ID_HERE" // The ID received when registering the carrier
}
```

## 4. 주문 동기화와 주문 처리

이 섹션에서는 주문을 배송업체로 동기화하고, 출고 업데이트를 하이퍼클래스 주문으로 되돌려 보내 자동화하는 방법을 설명해요.

### 주문 웹훅 켜기

- 하이퍼클래스 마켓플레이스 앱의 **앱 설정**에서 `OrderCreate`와 `OrderStatusUpdate` 웹훅이 켜져 있는지 확인하세요. 이 웹훅은 백엔드의 하이퍼클래스 웹훅 리스너 엔드포인트로 연결해 주세요.

### 주문 생성 웹훅 처리하기

1. 웹훅 받기: 주문이 만들어지거나 주문 상태가 바뀌면 백엔드가 하이퍼클래스에서 POST 요청을 받아요. 이 중에서 배송과 관련된, 새로 완료된 주문을 찾아내요.
2. 검증: 웹훅 서명이나 진위 여부를 확인할 수 있다면 확인하세요.
3. 처리:

   - 주문 상태가 배송 처리에 적합한지(예: `Completed`, `Paid`) 확인해요.
   - 주문에 배송이 필요한지(실물 상품이 있는지) 확인해요.
   - 하이퍼클래스 API(`GET /orders/{orderId}`)로 주문 상세 정보를 모두 가져와요.
   - `locationId`로 데이터베이스에서 연결된 배송업체 자격 증명을 가져와요.
4. 백엔드 예시(Node.js/Express):

   ```
   // Example Express endpoint for HighLevel webhooks
   app.post('/webhooks/highlevel', async (req, res) => {
     try {
       // 1. TODO: Validate webhook signature (important for security)
       // const signature = req.headers['webhook-signature']; // Example header
       // const isValid = validateSignature(req.rawBody, signature, GHL_WEBHOOK_SECRET);
       // if (!isValid) return res.status(401).send('Invalid signature');

       const { type, locationId, orderId, status } = req.body // Adjust based on actual webhook payload structure

       console.log(`Received webhook: Type=${type}, LocationId=${locationId}, OrderId=${orderId}, Status=${status}`)

       // 2. Process only relevant events (e.g., completed orders)
       if ((type === 'OrderCreate' || type === 'OrderStatusUpdate') && orderId && status === 'completed') {
         console.log(`Processing order ${orderId} for location ${locationId}`)
         await processOrderForShipping(locationId, orderId)
       } else {
         console.log(`Skipping webhook type: ${type} or status: ${status}`)
       }

       res.status(200).send('Webhook received successfully')
     } catch (error) {
       console.error('Error processing HighLevel webhook:', error)
       // Respond with 5xx error but don't reveal internal details
       res.status(500).send('Internal Server Error')
     }
   })

   async function processOrderForShipping(locationId, orderId) {
     try {
       // 3. Retrieve full order details from HighLevel API
       // const orderDetails = await highlevelApiClient.getOrder(locationId, orderId);
       // Example: const orderDetails = { requiresShipping: true, items: [...] }; // Mock

       // Check if order actually needs shipping
       // if (!orderDetails || !orderDetails.requiresShipping) {
       //   console.log(`Order ${orderId} does not require shipping.`);
       //   return;
       // }

       // 4. Retrieve carrier credentials for the location from your DB
       // const credentials = await database.getCarrierCredentials(locationId);
       // if (!credentials) throw new Error(`Credentials not found for location ${locationId}`);

       // 5. Transform HighLevel order data to carrier's API format
       // const carrierPayload = transformOrderForCarrier(orderDetails);

       // 6. Call carrier API to create shipment/order
       // const carrierResponse = await carrierApiClient.createShipment(credentials, carrierPayload);
       // const carrierOrderId = carrierResponse.id;

       // 7. Store mapping in your DB
       // await database.storeOrderMapping(locationId, orderId, carrierOrderId);

       console.log(`Successfully created shipment with carrier for order ${orderId}. Carrier ID: ${carrierOrderId}`)
     } catch (error) {
       console.error(`Failed to process order ${orderId} for shipping:`, error)
       // TODO: Implement retry logic or error notification system
     }
   }
   ```
5. 배송업체에 주문 생성하기:

   - 하이퍼클래스 주문 데이터를 배송업체의 "주문 생성" 또는 "배송 생성" API 엔드포인트가 요구하는 형식으로 바꿔요.
   - 배송업체 API를 호출해서 주문이나 배송을 만들어요.
   - 하이퍼클래스 `orderId`와 배송업체의 주문/배송 ID를 연결한 매핑을 데이터베이스에 저장해요.

### 배송업체의 배송 업데이트 처리하기

1. 웹훅 받기: 배송 상태가 바뀌면(예: 라벨 출력, 송장 번호 생성, 출고, 배송 완료) 배송업체가 알림을 보내요. 이 알림을 백엔드의 배송업체 웹훅 리스너가 받아요.
2. 검증: 배송업체가 제공하는 방식(예: 서명)으로 웹훅이 진짜인지 확인하세요.
3. 처리:

   - 웹훅 데이터를 파싱해서 배송업체의 주문/배송 ID와 새 배송 정보(송장 번호, 추적 URL, 상태)를 꺼내요.
   - 배송업체 ID로 데이터베이스 매핑에서 해당하는 하이퍼클래스 `orderId`와 `locationId`를 찾아요.
4. 백엔드 예시(Node.js/Express):

   ```
   // Example Express endpoint for Carrier webhooks
   app.post('/webhooks/carrier', async (req, res) => {
     try {
       // 1. TODO: Validate webhook authenticity (specific to the carrier)
       // const isValid = validateCarrierSignature(req);
       // if (!isValid) return res.status(401).send('Invalid signature');

       const carrierWebhookData = req.body
       console.log('Received carrier webhook:', JSON.stringify(carrierWebhookData))

       // 2. Parse carrier data (adjust keys based on actual payload)
       const carrierOrderId = carrierWebhookData.orderReference // Or shipmentId, etc.
       const trackingNumber = carrierWebhookData.tracking?.number
       const trackingUrl = carrierWebhookData.tracking?.url
       const shippingStatus = carrierWebhookData.status // e.g., 'SHIPPED', 'LABEL_CREATED'

       // 3. Check if we have necessary data (especially tracking number for fulfillment)
       if (!carrierOrderId || !trackingNumber) {
         console.log('Carrier webhook missing order reference or tracking number. Skipping.')
         return res.status(200).send('Webhook received, but no action needed yet.')
       }

       // 4. Find corresponding HighLevel order info from DB mapping
       // const mapping = await database.findMappingByCarrierId(carrierOrderId);
       // if (!mapping) {
       //   console.warn(`Received carrier update for unknown order reference: ${carrierOrderId}`);
       //   return res.status(404).send('Mapping not found'); // Or 200 to prevent carrier retries
       // }
       // const { highlevelOrderId, locationId } = mapping;
       // Mock:
       const highlevelOrderId = 'HL_ORDER_ID_123'
       const locationId = 'LOCATION_ID_XYZ'

       // 5. Create fulfillment in HighLevel if applicable (e.g., status is SHIPPED)
       if (shippingStatus === 'SHIPPED' || shippingStatus === 'LABEL_CREATED') {
         // Adjust condition as needed
         console.log(`Triggering fulfillment for HighLevel Order ${highlevelOrderId}`)
         await createHighLevelFulfillment(locationId, highlevelOrderId, trackingNumber, trackingUrl)
       } else {
         console.log(`Carrier status ${shippingStatus} doesn't require fulfillment action yet.`)
       }

       res.status(200).send('Carrier webhook processed successfully')
     } catch (error) {
       console.error('Error processing carrier webhook:', error)
       res.status(500).send('Internal Server Error')
     }
   })

   async function createHighLevelFulfillment(locationId, orderId, trackingNumber, trackingUrl) {
     try {
       // Fetch order details to get line items and price IDs if needed
       // const orderDetails = await highlevelApiClient.getOrder(locationId, orderId);
       // const itemsToFulfill = orderDetails.items.map(item => ({ priceId: item.price._id, qty: item.quantity })); // Adjust as needed

       const fulfillmentPayload = {
         altId: locationId,
         altType: 'location',
         items: [
           /* Populate with items being fulfilled, e.g., itemsToFulfill */
         ],
         trackings: [
           {
             trackingNumber: trackingNumber,
             shippingCarrier: 'Your Custom Carrier Name', // Use the name registered earlier
             trackingUrl: trackingUrl || undefined // Include URL if available
           }
         ],
         notifyCustomer: true // Or based on user preference/setting
       }

       console.log('Creating HighLevel fulfillment with payload:', JSON.stringify(fulfillmentPayload))
       // await highlevelApiClient.createFulfillment(locationId, orderId, fulfillmentPayload);
       console.log(`Successfully created fulfillment for order ${orderId}`)
     } catch (error) {
       console.error(`Failed to create fulfillment for order ${orderId}:`, error)
       // TODO: Implement retry logic or error notification
     }
   }
   ```
5. 하이퍼클래스에 주문 처리(fulfillment) 만들기: 송장 번호를 사용할 수 있게 되면 하이퍼클래스에서 주문 처리를 시작해요.

   - 하이퍼클래스 API로 주문 처리 기록을 만드세요. 하이퍼클래스 API 문서의 주문 처리 생성(Create Order Fulfillment) 항목을 참고하세요.
   - 보통 `/orders/{orderId}/fulfillments` 같은 엔드포인트로 `POST` 요청을 보내요. 위 예시의 `createHighLevelFulfillment` 함수가 이 방식을 보여 줘요.

## 5. 연동 해제와 앱 삭제

사용자가 서브 계정에서 마켓플레이스 앱의 연결을 끊거나 앱을 삭제하면, 하이퍼클래스에 설정해 둔 연동 정보를 정리해야 해요.

### 배송업체 삭제하기

- 백엔드는 하이퍼클래스의 App Uninstalled 웹훅(앱 삭제 알림)을 받을 수 있어야 해요. 이 웹훅은 마켓플레이스 앱의 **앱 설정**에서 구성하세요.
- 특정 `locationId`에 대해 이 웹훅을 받으면 다음 순서로 처리해요.
  1. 데이터베이스에서 해당 `locationId`에 연결된 `shippingCarrierId`를 찾아요.
  2. 찾았다면 하이퍼클래스 API로 `DELETE` 요청을 보내서 배송업체 등록을 지워요. 엔드포인트는 `DELETE /shipping-carrier/{shippingCarrierId}`예요.

요청 예시:

```
DELETE /shipping-carrier/SHIPPING_CARRIER_ID_HERE?altId=LOCATION_ID_HERE&altType=location HTTP/1.1
Host: <highlevel-api-domain>
Authorization: Bearer <location_access_token> // Need a valid token, potentially stored or obtained via app credentials
```

- 이렇게 하면 해당 서브 계정의 배송 설정에서 배송업체가 제거돼요. 콜백 URL이 더는 유효하지 않게 되었을 때 생길 수 있는 오류를 막을 수 있어요.
- 내 쪽에서도 저장해 둔 자격 증명, 배송업체에 등록한 웹훅 등을 함께 정리하세요.

## 마무리

하이퍼클래스용 맞춤 배송업체 연동을 잘 만들면, 사용자는 더 유연하고 자동화된 배송 과정을 쓸 수 있어요. 플랫폼의 이커머스 기능도 크게 좋아져요. 이 가이드에서는 마켓플레이스 앱 설정과 인증부터 실시간 요금, 주문 동기화, 주문 처리까지 필요한 단계를 정리했어요.

핵심 구성 요소는 다음과 같아요.

1. 안전한 인증: 하이퍼클래스 OAuth 토큰과 배송업체 API 자격 증명을 관리해요.
2. API 연동: 하이퍼클래스 API와 배송업체 API를 모두 사용해서 등록, 요금, 주문, 주문 처리를 연결해요.
3. 웹훅 처리: 두 플랫폼에서 비동기로 오는 이벤트를 안정적으로 처리해요.
4. 데이터 관리: 자격 증명을 저장하고, 시스템 간 ID를 매핑해요.
5. 사용자 인터페이스: 사용자가 연동을 쉽게 설정할 수 있는 화면을 제공해요.

연동을 만들 때는 다음 사항을 챙기세요.

- 오류 처리를 탄탄하게 하세요.
- 특히 자격 증명 주변에서 보안 모범 사례를 지키세요.
- 디버깅하기 쉽도록 로그를 명확하게 남기세요.
- 사용량이 늘어도 버틸 수 있도록 백엔드 서비스와 데이터베이스의 확장성을 고려하세요.
- 장기적인 호환성을 위해 하이퍼클래스와 대상 배송업체의 API 변경 사항을 계속 확인하세요.

이 원칙을 따르고 제공된 예시를 상황에 맞게 바꿔 쓰면, 하이퍼클래스 마켓플레이스에서 쓸 수 있는 안정적이고 가치 있는 배송업체 연동을 만들 수 있어요.
