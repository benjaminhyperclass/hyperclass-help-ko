---
원문: /support/solutions/articles/155000006748-can-i-use-my-existing-whatsapp-number-in-crm-
번역일: 2026-11-07
카테고리: 31-리셀링
---

# 기존 WhatsApp 번호를 하이퍼클래스에서 쓸 수 있나요?

기존에 쓰던 WhatsApp 번호를 하이퍼클래스에 연결할 수 있는지, 어떤 경우에 가능하고 어떤 경우에 안 되는지 알려 드려요. 연결이 어려울 때 쓸 수 있는 방법도 함께 안내해요.

개인용이든 비즈니스용이든, 기존 WhatsApp 번호를 하이퍼클래스에 바로 등록할 수는 없어요. 먼저 Meta를 통해 WhatsApp Business API로 번호를 이전하거나 연결해야 해요.

{% hint style="warning" %}
Meta 공식 문서로 확인이 필요해요. 이 문서는 번호를 앱 또는 API 중 한쪽에만 연결할 수 있고 둘 다는 안 된다는 전제로 쓰여 있어요. 이는 Meta가 WhatsApp Coexistence를 내놓기 전의 규칙이에요. 2025년에 Meta가 공식 기능으로 선보인 Coexistence를 쓰면, 번호 하나로 WhatsApp Business 앱과 WhatsApp Business API(하이퍼클래스 연결)를 동시에 쓸 수 있어요. 두 곳의 채팅도 서로 동기화돼요. 계정에서 Coexistence를 쓸 수 있다면 아래 방법 1, 방법 2가 필요 없을 수도 있어요. 번호를 이전하거나 새 번호를 구매하기 전에 온보딩 과정에서 확인하거나 Coexistence 관련 도움말을 참고하세요.
{% endhint %}

## 기존 번호를 쓸 수 있는 경우

아래 조건을 모두 충족하면 기존 WhatsApp 번호를 쓸 수 있어요.

- 번호가 WhatsApp Messenger나 WhatsApp Business 앱에 연결되어 있지 않아요. 또는 API에서 쓰려고 앱에서 WhatsApp 계정을 삭제해 번호를 비울 수 있어요.
- 하이퍼클래스의 WhatsApp API 온보딩 과정을 마쳤어요.
- Meta가 Business Manager(WABA)에서 해당 번호를 인증하고 승인했어요.

연결이 끝나면 WhatsApp 메시지를 하이퍼클래스 안에서 바로 보내고 받을 수 있어요.

## 기존 번호를 쓸 수 없는 경우

아래 두 조건에 모두 해당하면 하이퍼클래스에서 번호를 쓸 수 없어요.

- 번호가 일반 WhatsApp 또는 WhatsApp Business 앱에서 아직 사용 중이에요.
- 일반 연결(Coexistence가 아닌 방식)로 같은 번호를 휴대폰과 하이퍼클래스에서 동시에 쓰려고 해요. Coexistence가 아니면 Meta가 이를 허용하지 않아요.

```
Coexistence가 아닌 경우, 번호 하나는 한 번에 한 플랫폼에만 연결할 수 있어요. 앱 또는 API 중 하나이고, 둘 다는 안 돼요.
```

## 추천 방법

| | |
| --- | --- |
| 1 | 기존 번호 이전하기<br>- 휴대폰 앱에서 WhatsApp 또는 WhatsApp Business 계정을 삭제해요.<br>- 하이퍼클래스의 WhatsApp API 설정 중에 같은 번호를 인증해요.<br>- 승인되면 모든 WhatsApp 메시지를 하이퍼클래스 안에서 관리해요. |

{% hint style="warning" %}
이 일반 연결(Coexistence가 아닌 방식)로 번호를 WhatsApp API에 연결하고 나면, 그 번호는 모바일 앱에서 더 이상 쓸 수 없어요.
{% endhint %}

| | |
| --- | --- |
| 2 | 새 번호 사용하기<br>- WhatsApp API용으로 쓸 새 전화번호를 준비해요. 이 번호를 하이퍼클래스와 연결해요.<br>- 기존 WhatsApp 번호는 휴대폰에서 그대로 두고 개인용이나 직접 연락용으로 계속 써요.<br><br>현재 WhatsApp 앱의 채팅을 잃고 싶지 않고 Coexistence 온보딩도 거치고 싶지 않다면, 가장 쉽고 안전한 방법인 경우가 많아요. |
