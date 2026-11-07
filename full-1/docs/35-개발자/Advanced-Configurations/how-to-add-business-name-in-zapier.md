---
원문: https://help.gohighlevel.com/support/solutions/articles/48001164926-how-to-add-business-name-in-zapier
번역일: 2026-11-07
카테고리: 35-개발자
---

# Zapier에서 연락처에 비즈니스 이름 추가하기

Zapier의 Webhooks 액션을 사용해 연락처를 만들거나 업데이트하면서 비즈니스 이름(`companyName`)도 함께 보내는 방법을 안내해요.

[동영상 보기](https://www.loom.com/embed/797f446592ce406f8d6a978d12bf8276)

## 설정 순서

1. Zap의 액션 앱으로 **Webhooks**를 선택하고, 이벤트로 **Custom Request**를 선택해요.
2. 메서드는 **POST**를 선택해요.

   ![Webhooks Custom Request와 POST 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48069683091/original/JTw7jqk3Y9e2Ngofa-JyVSXXNJ47SgEbKg.png?1605054675)

3. URL에 아래 주소를 입력해요.

   ```
   https://api.gohighlevel.com/zapier/contact/add_update
   ```

   ![URL 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48069683093/original/1p6htLF_7L_Oc1qLo16DVu18cnZcDGVChA.png?1605054675)

4. 헤더에 아래 두 값을 입력해요.

   | 이름 | 값 |
   |---|---|
   | AUTHORIZATION | Bearer YouRlocationAPIKEYHERE |
   | Content-Type | application/json |

   `YouRlocationAPIKEYHERE` 자리에는 서브 계정의 API 키를 넣어요.

   ![헤더 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48069683092/original/im6CubDaMZN_nQ2bZqOSaRBW50_kbasM6w.png?1605054675)

5. 데이터에 아래 JSON을 입력해요. 각 값은 Zap의 이전 단계에서 가져온 정보로 채우세요. 비즈니스 이름은 `companyName` 항목에 넣어요.

   ```json
   {
       "first_name": "zap",
       "last_name": "Zaptest3",
       "name": "D Zaptest",
       "email": "dzap@zap.com",
       "phone": "9516403455",
       "address1": "123 My St.",
       "city": "Meridian",
       "country": "US",
       "state": "Idaho",
       "postalCode": "83646",
       "companyName": "RoboCoach",
       "contact_type": "customer"
   }
   ```

{% hint style="info" %}
위 JSON의 값은 예시예요. 실제로 쓸 때는 Zap의 이전 단계에서 가져온 정보로 바꿔 주세요.
{% endhint %}
