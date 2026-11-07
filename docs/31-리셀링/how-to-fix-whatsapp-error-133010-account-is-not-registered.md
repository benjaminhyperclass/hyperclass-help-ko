---
원문: /support/solutions/articles/155000009547-how-to-fix-whatsapp-error-133010-account-is-not-registered
번역일: 2026-11-07
카테고리: 31-리셀링
---

# WhatsApp 오류 #133010 해결하기 — 계정이 등록되지 않음

번호가 연결된 것처럼 보이는데도 "The account is not registered"라는 오류가 뜨나요? WhatsApp Cloud API 등록을 다시 하면 메시지를 다시 보낼 수 있어요.

## 개요

Meta WhatsApp Manager에는 WhatsApp 번호가 연결된 것으로 나오는데, WhatsApp 메시지를 보낼 때 **오류 #133010 – The account is not registered**(계정이 등록되지 않았어요)가 나오나요?

![오류 #133010 메시지 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084701756/original/eHpCi5gTQQOjqsjTZyngi18Ch_sZuinKGg.png?1793602686)

이 오류는 전화번호가 WhatsApp Cloud API에 더 이상 등록된 상태가 아닐 수 있다는 뜻이에요. WhatsApp Business Account가 승인되었고 Meta Business Manager에서 번호가 연결된 것으로 보여도, Cloud API 등록은 다시 해야 할 수 있어요.

![Meta에서 연결된 것으로 표시된 전화번호 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084705329/original/ZxVqDO2GQBbpdG4jh3MV-d_CDi_KTF8eIA.png?1793605616)

아래 단계를 따라 문제를 해결해 보세요.

## 4단계로 해결하기

1. 점 3개 메뉴를 눌러 Meta 페이지에서 번호를 삭제하세요.
2. 번호를 다시 추가해 보세요.
3. OTP로 번호를 인증하세요.
4. 테스트 메시지를 보내세요.

## 오류 세부정보: 오류 #133010은 무슨 뜻인가요?

WhatsApp 메시지를 보낼 때 다음과 같은 오류가 나올 수 있어요.

- **오류 코드**: 133010
- **오류 메시지**: The account is not registered.(계정이 등록되지 않았어요.)
- **설명**: Phone number is not registered on Cloud API.(전화번호가 Cloud API에 등록되지 않았어요.)

WhatsApp Cloud API가 이 전화번호를 등록된 번호로 인식하지 못한다는 뜻이에요.

## 1단계. WhatsApp 전화번호 다시 등록하기

전화번호를 WhatsApp Cloud API에 다시 등록해야 할 수 있어요.

1. Meta에서 WhatsApp Business Account를 열어요.
2. **WhatsApp Manager > 전화번호**로 이동해요.
3. 오류가 나는 전화번호를 선택해요.
4. Meta에서 제공하는 등록 또는 인증 절차를 시작해요.
5. 안내가 나오면 SMS 또는 음성 통화로 전화번호 소유를 확인해요.
6. 등록을 마치고, 정상적으로 완료되었는지 확인해요.

## 2단계. 번호 등록을 해제한 뒤 다시 등록하기

전화번호를 다시 등록해도 해결되지 않으면, 등록을 해제한 뒤 다시 등록해야 할 수 있어요.

{% hint style="warning" %}
전화번호 등록을 해제하면 WhatsApp 메시지 서비스가 일시적으로 끊길 수 있어요. 꼭 필요할 때만 진행하고, 어떤 영향이 있는지 확인한 뒤에 진행하세요.
{% endhint %}

1. 오류가 나는 전화번호를 WhatsApp Cloud API에서 등록 해제해요.
2. 등록 절차를 처음부터 다시 시작해요.
3. SMS 또는 음성 통화로 전화번호 인증을 마쳐요.
4. 등록이 성공했는지 확인해요.

## 3단계. 2단계 인증 PIN 확인하기

WhatsApp 전화번호에 2단계 인증이 켜져 있다면 다음을 확인하세요.

1. 올바른 6자리 PIN을 준비해요.
2. 등록 중에 PIN 입력 창이 나오면 PIN을 입력해요.
3. PIN이 기억나지 않으면 Meta의 PIN 복구 안내를 따라요.

{% hint style="info" %}
PIN이 잘못되면 등록 절차가 끝나지 않을 수 있어요.
{% endhint %}

## 4단계. 테스트 메시지 보내기

전화번호 등록이 끝나면 메시지가 잘 가는지 확인해요.

1. 하이퍼클래스 계정으로 돌아가요.
2. 테스트 연락처와의 WhatsApp 대화를 열어요.
3. 테스트 연락처에 메시지를 보내요.
4. 메시지가 정상적으로 전송되었는지 확인해요.

{% hint style="info" %}
오류 #133010 없이 메시지가 전송되면 문제가 해결된 거예요.
{% endhint %}

## 문제가 계속되나요?

위 단계를 모두 해 봐도 오류 #133010이 계속 나오면 하이퍼클래스 고객지원에 문의하세요. 확인 후 이어서 도와 드릴게요.

## 추가 자료

더 자세한 내용은 Meta 공식 문서를 참고하세요.

- [WhatsApp Cloud API – Error Codes](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes)
- [WhatsApp Cloud API – Phone Number Registration](https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/registration)
