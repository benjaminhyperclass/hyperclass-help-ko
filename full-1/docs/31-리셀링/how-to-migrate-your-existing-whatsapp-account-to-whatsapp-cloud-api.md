---
원문: https://help.gohighlevel.com/support/solutions/articles/155000007590-how-to-migrate-your-existing-whatsapp-account-to-whatsapp-cloud-api
번역일: 2026-11-06
카테고리: 31-리셀링
---

# 기존 WhatsApp 계정을 WhatsApp Cloud API로 옮기기

이미 쓰고 있는 WhatsApp 비즈니스 번호를 하이퍼클래스의 WhatsApp Cloud API에 연결하려면 먼저 번호를 옮겨야 해요. 이 문서에서는 기존 WhatsApp 계정에서 번호를 분리하고 하이퍼클래스에 연결하는 과정을 단계별로 안내해요.

이 단계는 꼭 거쳐야 해요. WhatsApp(개인용 또는 비즈니스 앱)에 이미 등록된 번호는 먼저 연결을 끊지 않으면 Cloud API에 추가할 수 없어요.

{% hint style="info" %}
Meta 공식 문서로 확인이 필요한 내용이에요. 이 문서는 표준 이전 방법을 설명해요. 표준 방법에서는 번호를 WhatsApp 또는 WhatsApp Business 앱에서 완전히 삭제한 뒤에야 Cloud API에서 쓸 수 있어요. Meta의 WhatsApp Coexistence 기능은 자격이 되는 계정에 다른 방법을 제공해요. 별도의 연결 절차를 거치면 앱 계정을 삭제하지 않고도 같은 번호를 WhatsApp Business 앱과 Cloud API에서 동시에 쓸 수 있어요. 휴대폰에서 계속 번호를 쓰고 싶다면, 아래의 삭제 후 이전 단계를 따라 하기 전에 내 지역과 번호에서 Coexistence를 쓸 수 있는지 먼저 확인하세요.
{% endhint %}

## 이전이 꼭 필요한 이유

이미 WhatsApp에서 사용 중인 전화번호를 Cloud API에 추가하려고 하면(Meta의 Business Manager나 하이퍼클래스의 WhatsApp 연동을 통해) 다음과 같은 오류가 나타나요. 이미 등록된 WhatsApp 계정이 있으니 연결을 끊고 다시 시도하라는 안내예요.

```
"This number is registered to an existing WhatsApp account. To use this number, disconnect it from the existing account. Then, return to this page and re-enter the number. Note: It may take up to 3 minutes for the number to become available."
```

표준 연결 방식에서는 하나의 번호를 두 플랫폼에서 동시에 쓸 수 없기 때문이에요. 하이퍼클래스에서 Cloud API로 번호를 쓰려면 먼저 일반 WhatsApp 또는 WhatsApp Business 앱에서 번호를 삭제하거나 연결을 해제해야 해요. 번호가 예전에 다른 업체를 통해 WhatsApp Business API 계정에 연결되어 있었다면, Meta가 몇 분이 아니라 몇 주의 대기 시간을 요구할 수도 있어요.

## 이전하면 달라지는 점

이전하기 전에 아래 내용을 알아 두세요.

| 유지되는 것 | 달라지는 것 |
| --- | --- |
| 전화번호는 그대로예요. | 채팅 기록은 옮겨지지 않아요. 기존 기기·앱에 그대로 남아요. |
| 비즈니스 프로필은 Cloud API에서 다시 만들 수 있어요. | 전환하는 동안 번호를 일시적으로 쓸 수 없어요(보통 최대 3분). |

## 번호를 이전하는 단계

### 1단계. 채팅 기록 백업하기 (선택)

연결을 끊기 전에 대화 내용을 내 기기에 보관하고 싶다면 백업해 두세요.

- **WhatsApp:** **설정 > 채팅 > Chat Backup**(채팅 백업)으로 이동해 Google Drive 또는 iCloud에 백업해요.
- **WhatsApp Business:** 경로는 같아요. **설정 > 채팅 > Chat Backup**이에요.

이 백업은 Cloud API로 옮겨지지 않아서 꼭 필요한 단계는 아니에요. 그래도 해 두면 좋아요.

### 2단계. WhatsApp 계정 삭제하기 (또는 번호 연결 해제하기)

기존 WhatsApp 또는 WhatsApp Business 앱에서 번호를 제거해야 해요.

**WhatsApp(개인용)에서 삭제하기**

1. 휴대폰에서 WhatsApp을 열어요.
2. **설정 > 계정 > 계정 삭제**로 이동해요.
3. **국가를 선택하세요**에서 국가 코드를 고르고 전화번호를 입력해요.
4. **Delete My Account**(내 계정 삭제)를 눌러요.

**WhatsApp Business 앱에서 삭제하기**

1. WhatsApp Business를 열어요.
2. **설정 > 계정 > 계정 삭제**로 이동해요.
3. 번호를 입력하고 확인해요.

이 작업은 그 번호에 연결된 WhatsApp 계정을 삭제하는 거예요. 전화번호 자체가 없어지지는 않아요. SIM과 번호는 그대로예요.

### 3단계. 최대 3분 기다리기

계정을 삭제하면 Meta 시스템이 번호를 풀어 주는 데 잠깐 시간이 걸려요. 다음 단계로 넘어가기 전에 2~3분 기다리세요.

### 4단계. 하이퍼클래스에서 번호 추가하기

이제 하이퍼클래스에서 Cloud API로 WhatsApp 번호를 연결해요.

1. 하이퍼클래스 서브 계정에서 **설정 > 연동 > WhatsApp**으로 이동해요.
2. **Connect WhatsApp**(WhatsApp 연결)을 클릭해요.
3. Meta Business Manager 연결 절차를 따라 해요. Facebook에 로그인하고 Meta 비즈니스 계정을 선택하거나 새로 만들라는 안내가 나와요.
4. 전화번호를 추가하라는 안내가 나오면 방금 풀어 둔 번호를 입력해요.
5. OTP(일회용 인증 코드)로 인증해요. SMS나 전화 통화 중에서 고를 수 있어요.

그래도 "number is registered" 오류가 나오면 2~3분 더 기다렸다가 다시 시도하세요.

### 5단계. 하이퍼클래스에서 WhatsApp 비즈니스 프로필 설정하기

연결이 끝나면 비즈니스 프로필을 설정해요.

- **표시 이름**: 고객에게 보이는 이름이에요.
- **카테고리**: 내 비즈니스 유형과 가장 가까운 항목을 골라요.
- **프로필 사진**과 **설명**

이 정보는 Meta의 Business Manager에서 관리하지만, 하이퍼클래스의 대화에도 그대로 반영돼요.

### 6단계. 하이퍼클래스에서 자동화 시작하기

Cloud API를 연결하면 하이퍼클래스 안에서 WhatsApp의 다양한 기능을 쓸 수 있어요.

- 대량 메시지: 연락처 목록에 WhatsApp으로 캠페인을 보내요.
- 워크플로우 자동화: 파이프라인 단계, 폼 제출, 예약 등을 기준으로 WhatsApp 메시지가 자동으로 나가게 해요.
- 양방향 대화: 하이퍼클래스 **대화** 받은편지함에서 답장을 관리해요.
- WhatsApp 템플릿: 승인받은 메시지 템플릿을 만들어 먼저 연락할 때 보내요.
- CRM 연동: 모든 WhatsApp 활동이 해당 연락처 기록에 자동으로 남아요.

## 자주 발생하는 문제와 해결 방법

| 문제 | 해결 방법 |
| --- | --- |
| "Number is already registered" 오류가 나와요 | 계정을 삭제하고 3~5분 기다린 뒤 다시 시도하세요. |
| OTP가 오지 않아요 | 번호가 SMS나 전화를 받을 수 있는지 확인하고, 전화 통화 방식으로 받아 보세요. |
| Meta Business Manager에서 번호가 대기 중으로 표시돼요 | Meta 비즈니스 계정이 승인되었는지, 전화번호가 올바르게 추가되었는지 확인하세요. |
| WhatsApp 메시지가 하이퍼클래스에 보이지 않아요 | 하이퍼클래스의 WhatsApp 설정에서 웹훅이 제대로 구성되었는지 확인하세요. |

<!-- 검토 필요: 원문 내용이 서로 다름 (3단계는 2~3분, 위 표는 3~5분 대기) -->

## 마지막 팁

- Cloud API 연결에는 비즈니스 전용 번호를 쓰세요. 개인 WhatsApp 번호는 쓰지 않는 것이 좋아요.
- 하이퍼클래스에서 여러 고객사 서브 계정을 관리한다면, 서브 계정마다 서로 다른 전화번호가 필요해요.
- 이 표준 방법으로 Cloud API에 연결한 번호는 일반 WhatsApp 또는 WhatsApp Business 앱에서 동시에 쓸 수 없어요. 계정이 Coexistence 대상이면 예외예요.

번호 이전은 한 번만 하면 되는 작업이에요. 이전이 끝나면 자동화, 캠페인, CRM 데이터, 양방향 메시지를 모두 하이퍼클래스 한 곳에서 WhatsApp Cloud API로 관리할 수 있어요.
