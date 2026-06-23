---

번역일: 2026-04-08
카테고리: 개발자 > Developer Resources
---

# 마켓플레이스 앱 연결 오류 재연결 방법

개발자가 어떤 이유로든 액세스 토큰이나 새로고침 토큰에 대한 접근을 잃게 된 경우 - Hyperclass 측 사고든 개발자 측 오류든 상관없이 - 해결책을 제공합니다.

이제 Reconnect API를 사용하여 [Get Access Token API](https://highlevel.stoplight.io/docs/integrations/00d0c0ecaa369-get-access-token) (OAuth - 인증 권한 부여 플로우)에서 사용할 수 있는 인증 코드를 다시 받을 수 있습니다. 이를 통해 새로운 액세스 토큰과 새로고침 토큰 세트를 얻을 수 있습니다.

이 기능을 통해 사용자에게 불편을 끼치지 않고도 연결을 복원할 수 있습니다.

하위 계정(Sub-Account) 앱 연결의 경우:

```
curl --location 'https://services.leadconnectorhq.com/oauth/reconnect' \
--header 'Content-Type: application/json' \
--data '{
    "clientKey": "<client_id>",
    "clientSecret": "<client_secret>",
    "locationId": "<앱이 설치된 locationID>"
}'
```

에이전시(Agency) 연결의 경우:

```
curl --location 'https://services.leadconnectorhq.com/oauth/reconnect' \
--header 'Content-Type: application/json' \
--data '{
    "clientKey": "<client_id>",
    "clientSecret": "<client_secret>",
    "companyId": "<앱이 설치된 company>"
}'
```

API 응답:

```
{
    "authorizationCode": "<auth_code>",
    "expiresAt": "2024-10-08T13:35:43.887Z",
    "traceId": "trace-ID-ref"
}
```

**중요**: Hyperclass API 관련 이슈나 마켓플레이스 앱 연결 오류에 대한 공식 지원을 받는 방법이 궁금하시다면, API 문서와 지원을 위해 [https://developers.hyperclass.ai/](https://developers.hyperclass.ai/)을 방문하세요.

---
*원문 최종 수정: Sat, 17 May, 2025 at 6:35 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*