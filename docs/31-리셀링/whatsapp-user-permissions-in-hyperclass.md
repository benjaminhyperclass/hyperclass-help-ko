---
원문: /support/solutions/articles/155000008814-whatsapp-user-permissions-in-highlevel
번역일: 2026-11-06
카테고리: 31-리셀링
---

# WhatsApp 사용자 권한 설정

관리자는 WhatsApp 사용자 권한으로 사용자마다 할 수 있는 WhatsApp 설정 작업을 따로 정할 수 있어요. 폭넓은 권한을 한꺼번에 주는 대신 템플릿 관리, Flows, 전화번호, 비즈니스 프로필 수정, WhatsApp 연결 해제를 각각 허용하거나 제한할 수 있어요.

## WhatsApp 사용자 권한이란?

WhatsApp 사용자 권한은 사용자 한 명 한 명이 할 수 있는 WhatsApp 설정 작업을 세부적으로 정하는 접근 제어예요.

이 권한을 쓰면 사용자의 WhatsApp 접근 권한을 통째로 없애지 않고도 중요한 설정 변경만 막을 수 있어요.

## 사용할 수 있는 WhatsApp 권한

개별 권한은 모두 7가지예요.

- **Create/edit WhatsApp templates**(WhatsApp 템플릿 만들기/편집): 새 템플릿을 만들고, 기존 템플릿에서 지원되는 변경을 할 수 있어요.
- **Delete WhatsApp templates**(WhatsApp 템플릿 삭제): 삭제가 지원되는 템플릿을 삭제할 수 있어요.
- **Create/edit WhatsApp Flows**(WhatsApp Flows 만들기/편집): 새 Flows를 만들고, 기존 Flows에서 지원되는 변경을 할 수 있어요.
- **Delete/deprecate WhatsApp Flows**(WhatsApp Flows 삭제/사용 중단): Flows에서 지원되는 삭제 또는 사용 중단 작업을 할 수 있어요.
- **Update WhatsApp business profile**(WhatsApp 비즈니스 프로필 수정): 지원되는 WhatsApp 비즈니스 프로필 정보를 수정할 수 있어요.
- **Add/manage WhatsApp phone numbers**(WhatsApp 전화번호 추가/관리): WhatsApp에 연결된 전화번호 중 지원되는 번호를 추가하고 관리할 수 있어요.
- **Disconnect WhatsApp integration**(WhatsApp 연동 해제): WhatsApp 연동을 해제할 수 있어요.

{% hint style="info" %}
WhatsApp 연동을 해제하는 것과 WhatsApp 구독을 해지하는 것은 서로 다른 작업이에요.
{% endhint %}

## WhatsApp 권한이 적용되는 방식

세부 권한은 지원되는 WhatsApp 리소스를 만들거나, 편집하거나, 삭제하거나, 관리하거나, 연결을 해제하는 설정 작업에 적용돼요.

읽기와 미리보기는 지금처럼 기존의 더 넓은 WhatsApp 접근 권한을 따라요. 만들기나 편집 권한을 꺼도 해당 리소스가 모두 보이지 않게 되는 것은 아니에요.

### 기본 권한 상태

세부 권한은 기본적으로 켜져 있고, 필요한 권한만 끄는 방식으로 적용돼요. 지원되는 기존 사용자는 관리자가 개별 권한을 끌 때까지 지금의 WhatsApp 관리 권한을 그대로 유지해요.

### 권한을 끄면 어떻게 되나요?

필요한 WhatsApp 권한을 끄면 다음과 같이 바뀌어요.

- 해당 작업을 하이퍼클래스 화면에서 쓸 수 없어요.
- 제한된 작업에 대해 권한 안내 메시지가 나타날 수 있어요.
- 권한이 없는 작업을 지원되는 API로 직접 요청하면 **403 Forbidden** 응답이 돌아와요.

예를 들어 **Create/edit WhatsApp templates** 권한을 끄면 사용자는 **WhatsApp Templates**(WhatsApp 템플릿)는 열 수 있어도 템플릿을 만들거나 편집할 수 없어요.

## 에이전시와 서브 계정 권한

WhatsApp 권한은 사용자의 접근 범위에 맞는 **사용자** 화면에서 관리해요.

- 에이전시 관리자: **에이전시 보기 > 설정 > 사용자**에서 해당 사용자의 권한을 관리해요.
- 서브 계정 관리자: **서브 계정 > 설정 > 사용자**에서 해당 사용자의 권한을 관리해요.

![사용자 화면에서 WhatsApp 권한을 관리하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082703130/original/x5RZ4xgdZ4PUKmapWlWRZFDhUd8oxhmJfQ.png?1791356587)

WhatsApp 권한은 사용자 단위로 적용돼요. 권한을 주거나 회수하면 그 사용자의 해당 접근 범위에 적용되고, 서브 계정마다 WhatsApp 권한 프로필이 따로 만들어지지는 않아요.

## 감사 로그

WhatsApp 권한 변경은 에이전시 수준에서 사용자 관련 감사 활동으로 기록돼요.

변경 내용을 확인하려면 **에이전시 보기 > 설정 > 감사 로그**로 이동해 필터로 해당 사용자나 활동을 찾아보세요.

![감사 로그 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082703216/original/AZuFR7JinS1tbcYA3W0K4PDTFV2JvOeCjA.png?1791356668)

## WhatsApp 권한과 재판매

WhatsApp 사용자 권한과 WhatsApp 재판매는 서로 별개의 설정이에요.

WhatsApp 재판매를 꺼도 사용자 관리 화면에서 WhatsApp 권한 토글은 그대로 보여요. 재판매를 꺼도 **Roles & Permissions**(역할 및 권한)에서 WhatsApp 관련 항목이 사라지지 않아요.

## WhatsApp 사용자 권한 설정하기

### 에이전시 사용자

1. **에이전시 보기**에서 **설정 > 사용자**로 이동해요.
2. 권한을 바꿀 사용자를 열어요.
3. **Roles & Permissions**를 열어요.
4. **WhatsApp** 권한 섹션을 찾아요.
5. 사용자의 업무에 맞게 각 권한을 켜거나 꺼요.
6. 나머지 모듈 권한과 세부 권한도 확인해요.
7. 변경 내용을 저장해요.

![에이전시 사용자의 WhatsApp 권한 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082703579/original/7TNkeccZjL4PGZTTi-2iGayRfW5u7QoYpw.png?1791356957)

### 서브 계정 사용자

1. 해당 서브 계정을 열어요.
2. **설정 > 사용자**로 이동해요.
3. 권한을 바꿀 사용자를 열어요.
4. **Roles & Permissions**를 열어요.
5. **WhatsApp** 권한 섹션을 찾아요.
6. 사용자가 할 수 있어야 하는 작업에 맞게 각 권한을 켜거나 꺼요.
7. 변경 내용을 저장해요.

![서브 계정 사용자의 WhatsApp 권한 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082703495/original/1zJx_8IKLWPgEcFu_yzK71g7w0fVT7tiTQ.png?1791356931)

{% hint style="info" %}
사용자가 갑자기 특정 WhatsApp 설정 작업을 하지 못한다면, 모듈 접근 권한을 넓게 바꾸기 전에 먼저 그 작업이 7가지 WhatsApp 권한 토글 중 무엇에 해당하는지 확인해 보세요.
{% endhint %}

## 자주 묻는 질문

### WhatsApp 설정은 열리는데 템플릿은 만들 수 없는 이유가 뭔가요?

사용자에게 WhatsApp 접근 권한은 있지만 **Create/edit WhatsApp templates** 권한이 없을 수 있어요. 사용자의 **Roles & Permissions** 설정에서 필요한 WhatsApp 권한이 켜져 있는지 확인해 보세요.

### 템플릿 삭제는 막고 편집만 허용할 수 있나요?

네, 가능해요. 템플릿 만들기/편집과 템플릿 삭제는 서로 다른 권한이에요.

### WhatsApp Flows는 만들게 하되 기존 Flows를 삭제하거나 사용 중단하지 못하게 할 수 있나요?

네, 가능해요. **Create/edit WhatsApp Flows**와 **Delete/deprecate WhatsApp Flows**는 따로 설정해요.

### 만들기나 편집 권한을 빼면 해당 리소스를 볼 수도 없나요?

꼭 그렇지는 않아요. 세부 권한은 지원되는 설정 변경에 적용되고, 읽기와 미리보기는 기존의 더 넓은 WhatsApp 접근 권한을 따라요.

### 연동이 사용자에게 권한이 없는 WhatsApp 작업을 실행하면 어떻게 되나요?

권한이 없는 상태에서 지원되는 API로 변경 요청을 보내면 **403 Forbidden** 응답이 돌아와요.

### WhatsApp 재판매를 꺼도 WhatsApp 권한 섹션이 보이는 이유가 뭔가요?

사용자 권한과 재판매는 별개의 설정이에요. WhatsApp 재판매를 꺼도 사용자 관리 화면의 WhatsApp 권한 항목은 사라지지 않아요.

### 누가 사용자의 WhatsApp 권한을 바꿨는지 어디서 볼 수 있나요?

권한 변경은 사용자 관련 감사 활동으로 기록돼요. 에이전시 관리자는 **에이전시 보기 > 설정 > 감사 로그**에서 확인할 수 있어요.

### Disconnect WhatsApp 권한이 있으면 WhatsApp 구독도 해지할 수 있나요?

아니요. 연동 해제와 구독 해지는 서로 다른 작업이에요. 서비스를 해지할 때는 안내된 구독 해지 절차를 따르세요.
