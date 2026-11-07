---
원문: https://help.gohighlevel.com/support/solutions/articles/155000009256-whatsapp-unable-to-access-your-whatsapp-business-account-
번역일: 2026-11-07
카테고리: 31-리셀링
---

# WhatsApp "Unable to Access Your WhatsApp Business Account" 오류 해결

Coexistence 연결이 끊어지는 이유와, 계정 연결을 해제한 뒤 다시 연결해 접근 권한을 복구하는 방법을 안내해요. 아래 오류 메시지가 보일 때 참고하세요.

```
Error: We are currently unable to access your WhatsApp Business Account. Kindly disconnect and then reconnect to restore access.
```

## 이 오류가 생기는 이유

WhatsApp 계정이 WhatsApp 모바일 앱, WhatsApp Web, WhatsApp Coexistence처럼 여러 기기에 연결되어 있을 때 Meta와의 연결이 끊기면 이 오류가 나타날 수 있어요.

Coexistence 연결이 끊기면 하이퍼클래스가 WhatsApp Business Account에 접근할 수 없어요. 계정을 다시 연결하기 전까지는 메시지를 보내거나 받을 수 없어요.

### 연결된 기기를 오래 사용하지 않았을 때

연결된 기기 중 한 곳에서 WhatsApp을 오랫동안 열지 않으면, Meta가 보안상의 이유로 오프보딩(연결 해제) 이벤트를 일으킬 수 있어요. 이때 Coexistence 연결이 끊겨요.

### WhatsApp 모바일 앱을 업데이트했을 때

WhatsApp 모바일 앱을 업데이트한 뒤에도 같은 연결 끊김이 나타난 사례가 있어요.

{% hint style="info" %}
이 동작은 전적으로 Meta가 관리해요. 하이퍼클래스나 회원님의 계정 설정에 문제가 있어서 생기는 것이 아니에요.
{% endhint %}

## 계정이 차단됐는지 확인하기

다시 연결하기 전에, WhatsApp Business Account가 Meta에 의해 차단되었거나 제한되었는지 먼저 확인하세요. 계정이 차단된 상태에서는 Meta가 제한을 풀기 전까지 다시 연결해도 접근 권한이 복구되지 않아요.

- ✓ 계정이 차단되지 않았어요: 아래 해결 방법을 계속 진행하세요.
- ✘ 계정이 Meta에 의해 차단됐어요: 먼저 Meta에서 차단 문제를 해결하세요. 연결을 해제했다가 다시 연결해도 차단은 풀리지 않아요.

## 해결 방법

WhatsApp 계정의 연결을 해제한 다음, Coexistence 방식으로 다시 연결해야 해요.

1. 위에서 설명한 계정 확인을 먼저 마쳐서, 계정이 차단되지 않았는지 확인하세요. 이 확인을 끝내기 전에는 아무것도 변경하지 마세요.
2. 서브 계정에서 **설정 > WhatsApp**으로 이동해, 문제가 생긴 WhatsApp 계정의 연결을 해제하세요.
3. 같은 WhatsApp Business 계정을 Coexistence 방식으로 다시 연결하세요. 온보딩 중에는 휴대폰에서 WhatsApp Business 앱을 열어 두세요.
   - 자세한 설정 방법은 'WhatsApp Coexistence 방식 — 전체 설정 가이드'를 참고하세요.
4. 계정이 연결됨으로 표시되면 테스트 메시지를 보내 보세요. 그리고 받은 메시지가 **대화**에 나타나는지 확인하세요.

## 같은 문제를 예방하는 방법

- ✓ 연결된 기기에서 WhatsApp을 주기적으로 여세요. Meta의 Coexistence 안내에 따르면, WhatsApp Business 앱을 최소 13일에 한 번은 열어야 해요.
- ✓ WhatsApp 모바일 앱을 최신 버전으로 유지하세요.
- ✓ 연결된 휴대폰에서 WhatsApp Business 앱을 삭제하지 마세요.

{% hint style="warning" %}
이렇게 관리해도 Meta가 Coexistence 계정의 연결을 끊을 수 있어요. WhatsApp 앱을 업데이트한 뒤에도 그럴 수 있어요. 그런 일이 생기면 위에서 설명한 대로 연결을 해제했다가 다시 연결하세요.
{% endhint %}

## 자주 묻는 질문

### 하이퍼클래스 계정에 문제가 생긴 건가요?

아니요. 연결 끊김은 Meta가 일으키는 거예요. 보통 연결된 기기를 오래 사용하지 않았거나 WhatsApp 모바일 앱을 업데이트한 뒤에 나타나요. 계정 연결을 해제한 다음 다시 연결하면 해결돼요.

### 앱을 매일 쓰는데도 연결이 끊긴 이유가 뭔가요?

이 동작은 Meta가 관리해요. WhatsApp 모바일 앱을 업데이트한 뒤에도 나타난 사례가 있어요. Coexistence 방식으로 다시 연결하면 접근 권한이 복구돼요. 앱은 최신 버전으로 유지하세요.

### Meta에서 계정이 차단된 경우에는 어떻게 하나요?

다시 연결해도 차단은 풀리지 않아요. 먼저 Meta에서 제한을 해결한 다음 다시 연결하세요.

### 다시 연결해도 안 될 때 고객지원에 무엇을 알려 드려야 하나요?

다음 내용을 함께 보내 주세요.

- Location ID(서브 계정 ID)
- WhatsApp 번호
- 화면에 표시된 오류 메시지 전체
- 문제가 시작된 시점
- WhatsApp 앱을 최근에 업데이트했는지, 또는 한동안 열지 않았는지 여부

스크린샷이나 화면 녹화를 첨부하면 더 빨리 확인할 수 있어요.
