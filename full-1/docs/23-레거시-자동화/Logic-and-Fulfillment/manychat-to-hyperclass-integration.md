---
원문: https://help.gohighlevel.com/support/solutions/articles/48001158874-manychat-to-highlevel-integration
번역일: 2026-11-07
카테고리: 23-레거시-자동화
---

# Manychat과 하이퍼클래스 연동하기

Manychat에서 받은 연락처를 API로 하이퍼클래스에 보내는 방법을 알려 드려요. 연락처를 만들고 기회를 추가하거나 업데이트하는 API 주소와 데이터 필드, 연락처가 중복될 때의 해결 방법을 다뤄요.

[동영상](https://www.youtube.com/embed/a0ZPO1dqp2c?&wmode=opaque)

{% hint style="warning" %}
이 문서의 단계는 고급 연동용이며 참고용으로만 제공돼요.

API와 Manychat 연동은 구성이 복잡해서 하이퍼클래스 고객지원이 직접 지원하지 않아요. 대신 시작하고 연결하는 데 도움이 되는 도구와 모임이 있어요.

- API 관련 도움은 개발자 협의회(Developer Council) Slack 커뮤니티에서 받을 수 있어요.
- 개발자 협의회 Zoom 미팅은 매월 둘째 마지막 금요일에 열려요. 일정은 이벤트 캘린더에서 확인할 수 있어요.
- 커뮤니티 참여 방법과 API 문서 안내는 하이퍼클래스 고객지원에 문의하세요.
{% endhint %}

{% hint style="info" %}
API 주소는 아래와 같아요.
{% endhint %}

```
Create Contact: https://api.gohighlevel.com/zapier/contact/add_update
Add/Update Opportunity: https://api.gohighlevel.com/zapier/contact/add_update_opportunity
```

## 데이터 필드

연락처를 보낼 때는 아래 형식으로 데이터를 구성해요.

```json
{
  "email": "john@deo.com",
  "phone": "+18887324197",
  "firstName": "John",
  "lastName": "Deo",
  "tags": [
    "commodo sed aliquip",
    "ut exercitation sunt"
  ]
}
```

## 문제 해결

### Manychat에서 연락처가 중복으로 들어와요. 하이퍼클래스와 Manychat을 어떻게 동기화하나요?

하이퍼클래스에 Manychat 연락처가 중복으로 생기지 않게 하려면 아래 영상을 보세요. 연락처를 새로 만들지 않고, External Request로 기존 연락처를 업데이트하는 방법을 보여 줘요.

[External Request로 연락처 중복 없이 업데이트하기 (영상)](https://www.loom.com/share/1c05ad65de8d4bbdae71e0c557e79a4d)

External Request에는 아래 값을 입력하세요.

**Headers**(헤더)

```
AUTHORIZATION = Bearer APIKEY
Content-Type = application/json
```

**Body**(본문)

```
{
  "first_name": {{first_name|fallback:""|to_json:true}},
  "last_name": {{last_name|fallback:""|to_json:true}},
  "email": {{email|fallback:""|to_json:true}},
  "phone": {{phone|fallback:""|to_json:true}}
}
