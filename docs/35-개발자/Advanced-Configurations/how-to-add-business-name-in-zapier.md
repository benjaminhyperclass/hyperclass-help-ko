---

번역일: 2026-04-08
카테고리: 35-개발자 > Advanced Configurations
---

# Zapier에서 비즈니스 이름을 추가하는 방법

webhooks Custom Request를 선택하세요

Post를 선택하세요

![Zapier에서 웹훅 커스텀 요청 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48069683091/original/JTw7jqk3Y9e2Ngofa-JyVSXXNJ47SgEbKg.png?1605054675)

API 엔드포인트:
[https://api.gohighlevel.com/zapier/contact/add_update](https://api.gohighlevel.com/zapier/contact/add_update)

![API 엔드포인트 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48069683093/original/1p6htLF_7L_Oc1qLo16DVu18cnZcDGVChA.png?1605054675)

**헤더 설정:**
- AUTHORIZATION: Bearer 여기에로케이션API키입력
- Content-Type: application/json

![헤더 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48069683092/original/im6CubDaMZN_nQ2bZqOSaRBW50_kbasM6w.png?1605054675)

**데이터 입력** (Zap의 이전 단계에서 정보를 입력하세요):

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

---
*원문 최종 수정: Tue, 10 Nov, 2020 at 6:31 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*