---
원문: /support/solutions/articles/48001236605-eliza-agent-platform-settings-within-the-crm
번역일: 2026-11-06
카테고리: 22-Eliza
---

# 하이퍼클래스에서 Eliza 에이전트 플랫폼 설정하기

하이퍼클래스에는 Eliza 에이전트 플랫폼을 위한 설정이 있어요. 이 설정으로 사용자의 접근 권한을 관리하고, 어떤 연락처를 Eliza로 보낼지 정할 수 있어요. 이 문서에서는 **Eliza 서비스** 접근 권한을 켜는 방법, Bypass 태그와 Send to Eliza 태그를 설정하는 방법, 워크플로우로 연락처를 Eliza에 보내는 방법, 자주 겪는 문제의 해결 방법을 안내해요.

{% hint style="warning" %}
Send to Eliza 태그와 **Send to Eliza Agent Platform**(Eliza 에이전트 플랫폼으로 보내기) 워크플로우 액션은 동작 방식이 달라요. 태그는 새 수신 메시지가 올 때까지 기다리고, 워크플로우 액션은 해당 워크플로우 단계가 실행될 때 연락처를 Eliza로 보내요.
{% endhint %}

## Eliza 에이전트 플랫폼 설정이란?

Eliza 에이전트 플랫폼 설정은 사용자 접근 권한을 정하고, 하이퍼클래스 서브 계정의 연락처가 Eliza로 넘어가는 방식을 정해요.

이 설정으로 다음 작업을 할 수 있어요.

- 권한이 있는 사용자에게 **Eliza 서비스** 접근 권한 부여
- 선택한 연락처가 Eliza로 들어가지 않게 막기
- 선택한 수신 대화만 Eliza로 보내기
- 워크플로우로 연락처를 바로 Eliza에 보내기

연결 조건: 이 설정은 이미 Eliza 에이전트 플랫폼에 추가된 서브 계정에서 사용할 수 있어요.

## 이 설정으로 할 수 있는 일

에이전시는 이 설정으로 누가 Eliza를 설정할 수 있는지, 어떤 연락처를 Eliza에 보낼지 정할 수 있어요. 모든 대화를 같은 방식으로 처리하지 않아도 돼요.

- 사용자 접근 관리: Eliza 설정 권한을 필요한 사용자에게만 줘요.
- 특정 연락처 제외: 특정 연락처를 Eliza에 보내지 않으려면 Eliza Bypass 태그를 사용해요.
- 특정 연락처만 전달: 일부 수신 대화만 Eliza로 보내려면 Send to Eliza 태그를 사용해요.
- 즉시 전달 자동화: 수신 메시지를 기다리지 않고 연락처를 Eliza로 보내려면 워크플로우 액션을 사용해요.
- 하이퍼클래스에서 전달 규칙 관리: Eliza의 기본 전달 규칙을 하이퍼클래스에서 바로 설정해요.

## 사전 준비 및 제한 사항

설정하기 전에 접근 조건과 전달 조건을 확인하면, 설정이 빠지거나 연락처가 예상과 다르게 전달되는 일을 막을 수 있어요.

- 해당 하이퍼클래스 서브 계정이 이미 Eliza 에이전트 플랫폼에 추가되어 있어야 해요.
- 사용자가 해당 하이퍼클래스 서브 계정에 접근할 수 있어야 해요.
- Eliza 설정을 하는 사용자는 **Eliza 서비스** 권한이 켜져 있어야 해요.
- 사용자의 이메일 주소도 Eliza 에이전트 플랫폼에서 해당 로케이션에 설정되어 있어야 해요.
- 태그 기반 전달을 설정하기 전에 사용할 연락처 태그를 만들어 두거나 정해 두세요.

전달 방식 차이: Send to Eliza 태그는 새 수신 메시지가 올 때까지 기다렸다가 연락처를 보내요. **Send to Eliza Agent Platform** 워크플로우 액션은 해당 워크플로우 단계가 실행될 때 연락처를 보내요.

## Eliza 서비스 접근 권한 켜기

**Eliza 서비스** 권한은 사용자가 배정된 하이퍼클래스 서브 계정 안에서 Eliza 설정에 접근할 수 있는지를 정해요. 이 단계는 에이전시 보기에서 진행해요.

1. **에이전시 보기로 전환**을 눌러 에이전시 보기로 이동해요.
2. **설정**을 클릭해요.
3. **팀**을 선택해요.
4. 해당 사용자를 찾아 사용자 설정을 열어요.
5. **Roles & Permissions**(역할 및 권한)를 열어요.
6. **Eliza 서비스**를 찾아요.
7. 권한을 켜요.
8. 사용자 변경 사항을 저장해요.

![Eliza 서비스 접근 권한이 켜진 사용자 권한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48299174187/original/akJyJXWo9hMWQCjA4tKD_iuwlbwLiIkXGQ.png?1684954247)

접근 권한을 켠 뒤 해당 서브 계정으로 전환해 **설정 > Eliza 서비스**를 열어요.

![전달 설정이 있는 서브 계정 설정의 Eliza 서비스 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155081374202/original/imZcdEBa8uT8G3O4q1vwj6GOvia-5XstVA.png?1789866899)

## Eliza Bypass 태그 설정하기

Eliza Bypass 태그가 붙은 연락처는 새 수신 대화가 Eliza 에이전트 플랫폼으로 전달되지 않아요.

전달 규칙을 설정하기 전에 사용할 연락처 태그를 만들어 두거나 정해 두세요.

1. 해당 **서브 계정**을 열어요.
2. **설정**을 클릭해요.
3. **Eliza 서비스**를 선택해요.
4. **Eliza Bypass Tag**(Eliza Bypass 태그) 설정을 찾아요.
5. 사용할 태그를 선택해요.
6. 설정을 저장해요.

![Eliza Bypass Tag 선택 항목이 보이는 Eliza 서비스 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155081374198/original/3sJ3Z-Hjhs6QWfF5ZxDFzC_6UgCZ41j3kQ.png?1789866861)

새 수신 메시지가 오면 하이퍼클래스는 연락처에 설정한 Bypass 태그가 있는지 확인해요. 태그가 있으면 그 수신 대화는 Eliza로 전달되지 않아요.

이미 Eliza에 있는 대화: 이미 Eliza에 있는 대화는 에이전트가 해당 대화로 이동할 때 에이전트 대기열에서 빠질 수 있어요. 종료된 대화에는 **Bypass tag assigned**(Bypass 태그 지정됨) 종료 사유가 적용돼요.

## Send to Eliza 태그 설정하기

새 수신 대화가 있는 연락처 중 일부만 Eliza로 보내고 싶을 때 Send to Eliza 태그를 사용해요.

1. 해당 **서브 계정**을 열어요.
2. **설정**을 클릭해요.
3. **Eliza 서비스**를 선택해요.
4. **Send to Eliza Tag**(Send to Eliza 태그) 설정을 찾아요.
5. 사용할 태그를 선택해요.
6. 설정을 저장해요.
7. 수신 대화를 Eliza로 보낼 연락처에 이 태그를 붙여요.

태그는 직접 붙여도 되고 워크플로우로 붙여도 돼요. 예를 들어 연락처가 전달 조건을 충족하면 **Add Contact Tag**(연락처 태그 추가) 액션을 사용할 수 있어요.

{% hint style="warning" %}
Send to Eliza 태그를 붙인다고 해서 연락처가 바로 Eliza로 전달되지는 않아요. 새 수신 메시지가 오면 그때 전달돼요.
{% endhint %}

두 태그가 모두 적용될 때: Eliza Bypass 태그와 Send to Eliza 태그가 모두 적용되면 하이퍼클래스는 Send to Eliza 태그를 우선해요. 대화가 의도치 않게 제외되지 않도록 하기 위해서예요.

## 워크플로우로 연락처를 Eliza에 보내기

새 수신 메시지를 기다리지 않고 워크플로우가 해당 단계에 도달하는 즉시 연락처를 Eliza로 보내려면 **Send to Eliza Agent Platform** 워크플로우 액션을 사용해요.

### 1단계: 워크플로우 열기

Eliza로 보낼 연락처를 정하는 워크플로우와 트리거부터 준비해요.

1. 해당 **서브 계정**을 열어요.
2. **자동화**를 클릭해요.
3. **워크플로우**를 선택해요.
4. 기존 워크플로우를 열거나 새 워크플로우를 만들어요.
5. 워크플로우에 들어올 연락처를 정하는 트리거를 설정해요.

### 2단계: Send to Eliza Agent Platform 액션 추가하기

워크플로우 실행이 이 단계에 도달하면, 연결된 Eliza 에이전트 플랫폼으로 연락처를 보내요.

1. 액션을 추가할 위치에서 **+** 아이콘을 클릭해요.
2. 사용할 수 있는 워크플로우 액션 목록을 열어요.
3. **Eliza Actions**(Eliza 액션) 섹션을 찾아요.
4. **Send to Eliza Agent Platform**(Eliza 에이전트 플랫폼으로 보내기)을 선택해요.
5. 필요에 맞게 액션을 설정해요.
6. 액션을 저장해요.
7. 워크플로우를 저장하거나 게시해요.

![Send to Eliza Agent Platform 액션이 들어 있는 워크플로우](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290430435/original/EcTE4c2h9HWD7NzCOmpQijjaNRa1oMTAAA.png?1680264126)

워크플로우 동작: 이 워크플로우 액션으로 연락처를 보낼 때 Send to Eliza 태그는 필요 없어요. 로케이션에 Send to Eliza 태그를 설정해 두었다면, 연락처를 보내기 전에 그 태그를 붙일 수도 있어요.

## 문제 해결

Eliza 전달 문제는 대부분 권한이 없거나, Eliza 로케이션 접근 설정이 덜 되었거나, 태그 기반 전달과 워크플로우 액션을 헷갈려서 생겨요.

### 설정에 Eliza 서비스가 보이지 않을 때

Eliza 연결이 안 된다고 단정하기 전에 접근 조건을 모두 확인해 보세요.

1. 서브 계정이 내 Eliza 에이전트 플랫폼 계정에 추가되어 있는지 확인해요.
2. 사용자가 해당 하이퍼클래스 서브 계정에 접근할 수 있는지 확인해요.
3. 같은 사용자의 이메일 주소가 Eliza 에이전트 플랫폼에서 해당 로케이션에 설정되어 있는지 확인해요.
4. 하이퍼클래스에서 사용자의 **Eliza 서비스** 권한이 켜져 있는지 확인해요.

접근 설정을 고친 뒤에는 서브 계정을 새로 고침하고 **설정**을 다시 확인해요.

### 태그를 붙인 연락처가 Eliza에 나타나지 않을 때

Send to Eliza 태그를 사용하는 경우, 연락처가 새 수신 메시지를 보내야 대화가 Eliza로 전달돼요. 연락처를 바로 보내야 한다면 **Send to Eliza Agent Platform** 워크플로우 액션을 사용하세요.

### 연락처가 계속 Eliza로 전달될 때

설정한 Eliza Bypass 태그가 연락처에 실제로 붙어 있는지 확인하세요. 그 연락처가 Send to Eliza 태그 조건도 함께 충족하는지 확인하세요. 두 전달 설정이 모두 적용되면 하이퍼클래스는 Send to Eliza 동작을 우선해요.

## 자주 묻는 질문

### Send to Eliza 태그와 Send to Eliza 워크플로우 액션은 뭐가 다른가요?
태그는 새 수신 메시지가 온 뒤에 연락처를 보내요. 워크플로우 액션은 해당 워크플로우 단계가 실행될 때 연락처를 Eliza로 보내요.

### Send to Eliza 태그를 붙이면 연락처가 바로 Eliza로 전달되나요?
아니요. 태그 기반 전달은 연락처가 새 수신 메시지를 보낼 때까지 기다려요.

### 수신 메시지를 기다리지 않고 연락처를 Eliza에 보낼 수 있나요?
네. **Send to Eliza Agent Platform** 워크플로우 액션을 사용하세요.

### 워크플로우 액션을 쓰려면 Send to Eliza 태그가 꼭 있어야 하나요?
아니요. 워크플로우 액션으로 연락처를 Eliza에 보낼 때 Send to Eliza 태그는 필요 없어요.

### Bypass 태그와 Send to Eliza 태그가 둘 다 적용되면 어떻게 되나요?
하이퍼클래스는 Send to Eliza 태그를 우선해요. 대화가 의도치 않게 제외되지 않도록 하기 위해서예요.

### 서브 계정 설정에 Eliza 서비스가 보이지 않아요.
서브 계정이 Eliza에 연결되어 있는지, 사용자가 그 서브 계정에 접근할 수 있는지, 사용자의 이메일이 Eliza에서 해당 로케이션에 설정되어 있는지, 하이퍼클래스에서 사용자의 **Eliza 서비스** 권한이 켜져 있는지 확인하세요.

### Eliza Bypass 태그는 어떤 역할을 하나요?
해당되는 새 수신 대화가 Eliza 에이전트 플랫폼으로 전달되지 않게 막아요.
