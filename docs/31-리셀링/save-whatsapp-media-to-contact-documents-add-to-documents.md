---
원문: /support/solutions/articles/155000007245-save-whatsapp-media-to-contact-documents-add-to-documents-
번역일: 2026-11-06
카테고리: 31-리셀링
---

# 기존 WhatsApp 번호를 WhatsApp Cloud API로 옮기기

하이퍼클래스를 쓰면서 이미 쓰고 있는 WhatsApp 비즈니스 번호를 WhatsApp Cloud API에 연결하려면 먼저 그 번호를 이전해야 해요. 이미 WhatsApp(개인용 또는 비즈니스 앱)에 등록된 번호는 연결을 끊지 않고는 Cloud API에 추가할 수 없어요.

{% hint style="warning" %}
이 문서는 표준 이전 방법을 설명해요. 이 방법에서는 번호를 WhatsApp 또는 WhatsApp Business 앱에서 완전히 제거한 뒤 Cloud API에서 써요.

Meta의 WhatsApp Coexistence 기능은 자격이 되는 계정에 다른 방법을 제공해요. 별도의 연결 절차를 거치면 앱 계정을 삭제하지 않고도 같은 번호를 WhatsApp Business 앱과 Cloud API에서 동시에 쓸 수 있어요. 휴대폰에서도 계속 그 번호를 쓰고 싶다면, 아래의 삭제 후 이전 단계를 따르기 전에 내 지역과 번호에서 Coexistence를 쓸 수 있는지 먼저 확인하세요.
{% endhint %}

## 이전이 필요한 이유

이미 WhatsApp에서 쓰고 있는 번호를 Cloud API에 추가하려고 하면(Meta Business Manager나 하이퍼클래스의 WhatsApp 연동에서) 아래와 같은 오류가 나타나요.

```
"This number is registered to an existing WhatsApp account. To use this number, disconnect it from the existing account. Then, return to this page and re-enter the number. Note: It may take up to 3 minutes for the number to become available."
```

표준 연결 방식에서는 하나의 번호를 두 플랫폼에서 동시에 쓸 수 없기 때문이에요. 하이퍼클래스에서 Cloud API로 번호를 쓰려면 먼저 기존 WhatsApp 또는 WhatsApp Business 앱에서 번호를 삭제하거나 연결을 해제해야 해요. 그 번호가 예전에 다른 업체를 통해 WhatsApp Business API 계정에 연결되어 있었다면, Meta가 몇 분이 아니라 몇 주의 대기 시간을 요구할 수도 있어요.

## 이전하면 달라지는 점

이전하기 전에 아래 내용을 알아 두세요.

| 그대로인 것 | 달라지는 것 |
| --- | --- |
| 전화번호는 그대로예요. | 채팅 기록은 옮겨지지 않아요. 이전 기기·앱에 그대로 남아요. |
| 비즈니스 프로필은 Cloud API에서 다시 만들 수 있어요. | 전환하는 동안 번호를 일시적으로 쓸 수 없어요(보통 최대 3분). |

## 번호 이전 단계

### 1단계. 채팅 기록 백업하기(선택)

연결을 끊기 전에 대화 내용을 내 기기에 보관하고 싶다면 아래 방법으로 백업하세요.

- **WhatsApp:** **설정 > 채팅 > Chat Backup**(채팅 백업)으로 이동해 Google Drive 또는 iCloud에 백업해요.
- **WhatsApp Business:** 경로는 같아요. **설정 > 채팅 > Chat Backup**

이 백업은 Cloud API로 옮겨지지 않으므로 꼭 필요한 단계는 아니에요. 그래도 해 두면 좋아요.

### 2단계. WhatsApp 계정 삭제하기(또는 번호 연결 해제)

기존 WhatsApp 또는 WhatsApp Business 앱에서 번호를 제거해야 해요.

**WhatsApp(개인용)에서**

1. 휴대폰에서 WhatsApp을 열어요.
2. **설정 > 계정 > 계정 삭제**로 이동해요.
3. **국가를 선택하세요**에서 국가 코드를 선택하고 전화번호를 입력해요.
4. **Delete My Account**(내 계정 삭제)를 눌러요.

**WhatsApp Business 앱에서**

1. WhatsApp Business를 열어요.
2. **설정 > 계정 > 계정 삭제**로 이동해요.
3. 번호를 입력하고 확인해요.

{% hint style="info" %}
삭제되는 것은 그 번호에 연결된 WhatsApp 계정이에요. 전화번호 자체는 삭제되지 않아요. SIM과 번호는 그대로예요.
{% endhint %}

### 3단계. 최대 3분 기다리기

계정을 삭제하고 나면 Meta 시스템이 번호를 풀어 주는 데 잠깐 시간이 걸려요. 2~3분 기다린 뒤 다음 단계로 넘어가세요.

### 4단계. 하이퍼클래스에 번호 추가하기

이제 하이퍼클래스에서 Cloud API로 WhatsApp 번호를 연결해요.

1. 하이퍼클래스 서브 계정에서 **설정 > 연동 > WhatsApp**으로 이동해요.
2. **Connect WhatsApp**(WhatsApp 연결)을 클릭해요.
3. Meta Business Manager 연결 절차를 따라요. Facebook에 로그인하고 Meta Business 계정을 선택하거나 새로 만들라는 안내가 나와요.
4. 전화번호를 추가하라는 안내가 나오면 방금 해제한 번호를 입력해요.
5. 인증번호(OTP)를 SMS 또는 전화로 받아 인증해요.

그래도 "number is registered" 오류가 나타나면 2~3분 더 기다렸다가 다시 시도하세요.

### 5단계. 하이퍼클래스에서 WhatsApp 비즈니스 프로필 설정하기

연결이 끝나면 비즈니스 프로필을 설정해요.

- 비즈니스 **표시 이름** — 고객에게 보이는 이름이에요.
- **카테고리** — 내 비즈니스 유형과 가장 비슷한 항목을 골라요.
- **프로필 사진**과 **설명**

이 정보는 Meta Business Manager에서 관리하지만, 하이퍼클래스의 대화에도 그대로 나타나요.

### 6단계. 하이퍼클래스에서 자동화 시작하기

Cloud API를 연결하면 하이퍼클래스에서 WhatsApp의 기능을 모두 쓸 수 있어요.

- 대량 메시지 발송 — 연락처 목록에 WhatsApp으로 캠페인을 보내요.
- **워크플로우 자동화** — 파이프라인 단계, 폼 제출, 예약 등을 기준으로 WhatsApp 메시지를 자동으로 보내요.
- 양방향 대화 — 하이퍼클래스 **대화** 받은편지함에서 답장을 관리해요.
- WhatsApp 템플릿 — 승인된 메시지 템플릿을 만들어 먼저 연락할 때 보내요.
- **CRM 연동** — 모든 WhatsApp 활동이 해당 연락처에 자동으로 기록돼요.

## 자주 생기는 문제와 해결 방법

| 문제 | 해결 방법 |
| --- | --- |
| "Number is already registered" 오류가 나요 | 계정을 삭제한 뒤 3~5분 기다렸다가 다시 시도하세요. |
| 인증번호(OTP)가 오지 않아요 | 번호가 SMS나 전화를 받을 수 있는 상태인지 확인하세요. 전화로 받기 옵션도 써 보세요. |
| Meta Business Manager에서 번호가 대기 중으로 표시돼요 | Meta Business 계정이 승인되었는지, 전화번호가 올바르게 추가되었는지 확인하세요. |
| WhatsApp 메시지가 하이퍼클래스에 보이지 않아요 | 하이퍼클래스 WhatsApp 설정에서 웹훅이 제대로 구성되어 있는지 확인하세요. |

## 마지막 팁

- Cloud API 연결에는 비즈니스 전용 번호를 쓰세요. 개인 WhatsApp 번호는 쓰지 않는 것이 좋아요.
- 하이퍼클래스에서 여러 고객사 서브 계정을 관리한다면, 서브 계정마다 고유한 전화번호가 필요해요.
- 이 표준 방법으로 Cloud API에 연결한 번호는 일반 WhatsApp 또는 WhatsApp Business 앱에서 동시에 쓸 수 없어요. 단, 계정이 Coexistence 자격을 갖춘 경우는 예외예요.

번호 이전은 한 번만 하면 되는 작업이에요. 이전이 끝나면 WhatsApp Cloud API를 하이퍼클래스 안에서 자유롭게 쓸 수 있어요. 자동화, 캠페인, 연락처 데이터, 양방향 메시지를 한곳에서 관리하세요.
