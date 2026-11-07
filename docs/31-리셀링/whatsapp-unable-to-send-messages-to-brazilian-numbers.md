---
원문: /support/solutions/articles/155000009155-whatsapp-unable-to-send-messages-to-brazilian-numbers
번역일: 2026-11-07
카테고리: 31-리셀링
---

# WhatsApp에서 브라질 번호로 메시지를 보낼 수 없을 때

브라질에 있는 연락처에게 WhatsApp 메시지를 보낼 때 국가별 발송 제한 오류가 나는 경우의 해결 방법이에요. 아래와 같은 오류 메시지가 보이면 이 문서를 따라 해 보세요.

```
Error: This error is related to a country-based messaging restriction. Currently, only businesses with their Primary Business Location set to Brazil are eligible to send messages to Brazilian numbers.
```

## 오류가 나는 이유

Meta는 WhatsApp Business Platform에 국가별 발송 제한을 두고 있어요. 이 정책에 따라 Meta Business Suite 설정에서 **Primary Business Location**(주요 비즈니스 위치)이 브라질로 지정된 비즈니스만 브라질 전화번호로 WhatsApp 메시지를 보낼 수 있어요.

이 오류는 보통 **비즈니스 정보** 설정의 **Primary Business Location** 항목이 비어 있거나, 브라질이 아닌 다른 국가로 지정되어 있을 때 나타나요.

- ✘ Meta Business Suite에 **Primary Business Location**이 설정되어 있지 않아요.
- ✘ **Primary Business Location**이 브라질이 아닌 다른 국가로 설정되어 있어요.

## 해결 방법

1. **Meta Business Suite > 설정 > 비즈니스 정보**로 이동하세요.

   메뉴에서 찾기 어렵다면 [Primary Business Location 편집 화면](https://business.facebook.com/settings/info?edit_pbl=true)으로 바로 들어갈 수 있어요.

2. **Primary Business Location** 항목을 찾아 **브라질**로 바꾸고 저장하세요.
3. 변경 내용이 Meta 시스템에 반영될 때까지 몇 분 기다린 뒤, WhatsApp 메시지를 다시 보내 보세요.

{% hint style="info" %}
**Primary Business Location**을 브라질로 설정하고 변경 내용이 반영되면, 브라질 번호로 메시지가 정상적으로 발송돼요.
{% endhint %}

## 참고 링크

- [WhatsApp Cloud API 오류 코드 — Meta 개발자 문서](https://developers.facebook.com/docs/whatsapp/cloud-api/support/error-codes)
- [WhatsApp 메시징 한도 — Meta 개발자 문서](https://developers.facebook.com/docs/whatsapp/messaging-limits)
- [Primary Business Location 업데이트 — Meta Business Suite (바로가기)](https://business.facebook.com/settings/info?edit_pbl=true)

## 자주 묻는 질문

### 브라질 연락처에게 메시지를 보내려면 왜 Primary Business Location을 브라질로 설정해야 하나요?
Meta가 정한 정책이에요. Meta는 현지 규정과 메시지 정책을 지키기 위해 WhatsApp Business Platform에서 일부 국가 간 발송을 제한해요. **Primary Business Location**을 브라질로 설정하면 해당 비즈니스가 브라질에서 운영되고 있고, 브라질 사용자에게 메시지를 보낼 수 있는 자격이 있다는 것을 확인해 줘요.

### Primary Business Location을 바꿨는데도 오류가 계속 나요. 어떻게 하나요?
**Primary Business Location** 변경 내용이 Meta 시스템에 반영되기까지 몇 분 걸릴 수 있어요. 저장한 뒤 최소 5분은 기다렸다가 다시 시도하세요. 15분이 지나도 오류가 계속되면 Location ID(서브 계정 ID)와 오류 화면 캡처를 준비해서 하이퍼클래스 고객지원에 문의하세요.

### 비즈니스 정보에서 Primary Business Location 항목을 찾을 수 없어요.
[바로가기 링크](https://business.facebook.com/settings/info?edit_pbl=true)를 열면 **Primary Business Location** 편집 화면으로 바로 이동해요. 링크를 열기 전에 올바른 Meta Business 계정으로 로그인했는지 확인하세요.

### Primary Business Location을 바꾸면 다른 국가의 연락처에게 메시지를 보내는 데 영향이 있나요?
그 시점의 Meta 국가별 메시지 정책에 따라 달라요. 다른 지역 연락처에 대한 영향이 걱정된다면 Meta 공식 문서를 확인하거나 Meta 고객지원에 직접 문의하세요.

### 다른 국가에도 같은 제한이 적용되나요?
네. Meta가 다른 지역에도 비슷한 국가별 발송 제한을 적용할 수 있어요. 다른 국가의 연락처에게 메시지를 보내다 비슷한 오류가 나면 같은 방법으로 해결해요. Meta Business Suite 설정에서 **Primary Business Location**을 해당 국가로 바꾸세요.
