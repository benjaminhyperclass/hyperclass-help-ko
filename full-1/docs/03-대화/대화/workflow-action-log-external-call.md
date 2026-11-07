---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002930-workflow-action-log-external-call
번역일: 2026-11-06
카테고리: 03-대화
---

# 워크플로우 액션 — Log External Call(외부 통화 기록)

**Log External Call**(외부 통화 기록) 액션은 타사 전화 시스템에서 처리한 통화를 하이퍼클래스의 연락처 활동에 추가해요. 통화 방향, 날짜, 전화번호, 통화 상태, 사용할 수 있는 녹음 참조 정보를 연락처의 통화 기록에 함께 보여 줄 수 있어요. 덕분에 외부에서 처리한 통화도 다른 연락처 활동과 함께 확인할 수 있어요.

[동영상](https://www.youtube.com/embed/xt44bMzQyKQ?&wmode=opaque)

---

## Log External Call 액션이란?

하이퍼클래스 밖의 전화 서비스를 쓰더라도, 그 통화 활동을 알맞은 CRM 연락처에 연결해 두고 싶을 때 이 액션을 써요. 외부 통화 데이터는 [**Inbound Webhook**(인바운드 웹훅)](../../07-워크플로우/빌더/how-to-use-the-inbound-webhook-workflow-premium-trigger.md)으로 받는 경우가 많아요. 다만 액션 자체는 해당 워크플로우에서 쓸 수 있는 값이면 사용할 수 있어요.

---

## 주요 이점

타사 통화를 하이퍼클래스에 기록해 두면, 모든 통화를 하이퍼클래스 기본 전화 기능으로 걸지 않아도 연락처 활동을 더 폭넓게 볼 수 있어요. 외부 통화 정보를 CRM에 연결해 두면 연락처 기록에서 통화 결과와 녹음을 확인하기도 쉬워져요.

- 통화 기록 한곳에 모으기: 외부에서 처리한 통화 활동을 알맞은 하이퍼클래스 연락처에 연결해 둘 수 있어요.
- 타사 통화 확인: 외부 전화 서비스의 통화 정보를 하이퍼클래스로 가져올 수 있어요.
- 통화 상세 정보 연결: 방향, 날짜, **From**·**To** 번호, 통화 상태처럼 사용할 수 있는 통화 정보를 저장해요.
- 녹음 확인: 사용할 수 있는 녹음 참조 정보를 함께 넣으면, 지원되는 통화 녹음을 기록된 통화에서 확인할 수 있어요.
- 유연한 워크플로우 연동: **Inbound Webhook**으로 받은 값을 포함해 워크플로우 데이터를 외부 통화 기록에 채울 수 있어요.

---

## Log External Call 동작 방식

Log External Call은 워크플로우 안에서 사용할 수 있는 통화 정보를 하이퍼클래스 연락처에 연결해요. 통화를 연락처 기록에 추가하려면 외부 통화 데이터가 워크플로우에 도착해야 하고, 알맞은 연락처도 식별되어야 해요. 그래서 데이터 흐름을 이해해 두는 것이 중요해요.

일반적인 흐름은 다음과 같아요.

타사 전화 시스템 → **Inbound Webhook** → 연락처 식별 또는 생성 → **Log External Call** → 연락처의 **대화**

예를 들어 타사 전화 서비스가 통화 직후 하이퍼클래스의 **Inbound Webhook**으로 통화 정보를 보낼 수 있어요. 워크플로우는 그 통화가 수신인지 발신인지 판단하고, 외부 발신자나 수신자를 식별한 다음, 통화 정보를 **Log External Call**에 연결해요.

{% hint style="info" %}
**Inbound Webhook**은 타사 통화 데이터를 전달하는 일반적인 방법이에요. 하지만 Log External Call 액션의 정의 자체로 보면 안 돼요.
{% endhint %}

---

## Log External Call 필드 안내

Log External Call의 각 필드는 외부 통화 기록의 서로 다른 부분을 나타내요. 알맞은 원본 데이터를 연결해야 연락처에 표시되는 활동이 타사 시스템에서 처리한 통화와 정확히 일치해요.

| 필드 | 용도 | 연결 방법 |
| --- | --- | --- |
| **Direction**(방향) | 외부 통화가 수신인지 발신인지 구분해요. | 통화 방향을 나타내는 원본 값을 연결하세요. |
| **Date**(날짜) | 통화가 발생한 시점을 나타내요. | 외부 통화에 대해 전달된 날짜/시간 값을 연결하세요. |
| **To**(받는사람) | 도착지 전화번호를 나타내요. | 전화 시스템이 전달한 도착지 번호를 연결하세요. |
| **From**(보낸 사람) | 발신지 전화번호를 나타내요. | 전화 시스템이 전달한 발신지 번호를 연결하세요. |
| **Call Status**(통화 상태) | 시스템에 기록된 통화 결과 또는 상태를 나타내요. | 통화 결과를 나타내는 외부 값을 연결하세요. |
| **Attachment**(첨부파일) | 사용할 수 있는 녹음 정보를 기록된 통화에 연결해요. | 외부 전화 시스템이 제공하는 호환되는 녹음 참조 정보가 있으면 연결하세요. |

{% hint style="warning" %}
**Direction**, **Date**, **Call Status**, **Attachment** 같은 필드에는 현재 Log External Call 액션과 연동에서 지원하는 값 형식을 맞춰야 해요. 타사 서비스의 사용자 지정 처리 결과나 자체 상태 값이 하이퍼클래스의 같은 의미 필드에 자동으로 연결된다고 가정하지 마세요.
{% endhint %}

전화번호가 일관되고 연락처와 잘 매칭되도록, 가능하면 `+15551234567`처럼 국제 E.164 형식으로 쓰세요.

---

## Inbound Webhook으로 Log External Call 설정하기

**Inbound Webhook**을 쓰면 외부 전화 시스템이 통화 정보를 하이퍼클래스 워크플로우로 보낼 수 있어요. 설정할 때 실제와 비슷한 샘플 데이터를 보내 두면 들어오는 필드를 연결에 쓸 수 있고, 실제 통화를 처리하기 전에 워크플로우를 검증할 수 있어요.

### 1. 워크플로우를 만들고 Inbound Webhook 추가하기

1. **자동화 > 워크플로우**로 이동해요.
2. 새 워크플로우를 만들거나 사용할 워크플로우를 열어요.
3. **Inbound Webhook** 워크플로우 트리거를 추가해요.
4. 하이퍼클래스에서 제공하는 webhook URL을 복사해요.
5. 외부 전화 시스템이 해당 webhook으로 통화 데이터를 보내도록 설정해요.

워크플로우에서 쓰려는 정보가 payload에 들어 있어야 해요. 예를 들면 다음과 같아요.

- 통화 방향
- 발신 번호(From)
- 수신 번호(To)
- 통화 날짜/시간
- 통화 상태
- 녹음 참조 정보(있는 경우)

{% hint style="info" %}
**Inbound Webhook** 트리거가 지원하는 올바른 payload 구조를 사용하세요. 나중에 외부 시스템의 payload 구조가 바뀌면 webhook 연결/참조 데이터를 새로 고쳐서, 바뀐 필드를 워크플로우 연결에 쓸 수 있게 하세요.
{% endhint %}

### 2. 실제와 비슷한 샘플 통화 데이터 보내기

샘플 데이터를 보내면 하이퍼클래스가 나중에 워크플로우에서 쓸 필드를 인식해요. 외부 전화 시스템이 평소에 보내는 것과 같은 필드가 들어 있는 payload를 사용하세요.

1. 외부 시스템에서 **Inbound Webhook**으로 샘플 요청을 보내요.
2. 하이퍼클래스가 샘플을 받았는지 확인해요.
3. 사용할 수 있는 webhook 값을 살펴봐요.
4. 필요한 통화 필드가 모두 있는지 확인한 뒤 다음 단계로 넘어가요.

### 3. 수신 통화와 발신 통화 나누기

수신 통화와 발신 통화는 CRM 연락처를 식별하는 외부 전화번호가 서로 달라요. 두 방향을 나누면 수신 통화에서는 건 사람을, 발신 통화에서는 받은 사람을 연락처로 정확히 찾을 수 있어요.

1. webhook 트리거 뒤에 **If/Else**(조건 분기) 액션을 추가해요.
2. 들어온 통화 방향 값으로 조건을 설정해요.
3. 수신 통화용 분기를 하나 만들어요.
4. 발신 통화용 분기를 하나 더 만들어요.

### 4. 연락처 식별하거나 만들기

Log External Call은 알맞은 CRM 연락처에 연결되어야 해요. 통화를 기록하기 전에 외부 상대방의 전화번호를 해당 연락처 액션에 연결하세요.

다음처럼 연결해요.

| 통화 방향 | 연락처를 식별하는 데 쓰는 번호 | 이유 |
| --- | --- | --- |
| 수신 | **From Number**(발신 번호) | 외부 발신자가 내 비즈니스로 전화를 걸었기 때문이에요. |
| 발신 | **To Number** | 내 비즈니스가 외부 연락처에 전화를 걸었기 때문이에요. |

수신 분기에서는 webhook의 **From Number**를 해당 **Phone**(전화번호) 필드에 연결해요.

발신 분기에서는 webhook의 **To Number**를 해당 **Phone** 필드에 연결해요.

연결한 정보로 연락처를 만들거나 업데이트·매칭하고 싶다면 [**Create Contact**(연락처 만들기)](../../07-워크플로우/Contact-Workflow-Actions/workflow-action-create-contact.md)를 쓸 수 있어요. 이때는 하이퍼클래스의 연락처 매칭 방식이 적용돼요.

{% hint style="warning" %}
연락처 매칭은 입력한 값과 [중복 방지 설정](../../11-설정/Business-Profile-Settings/allow-duplicate-contacts-contact-deduplication-preferences.md)에 따라 달라질 수 있어요. 실제 통화 데이터를 처리하기 전에 실제와 비슷한 레코드로 워크플로우를 테스트하세요.
{% endhint %}

연락처가 이미 있는지 더 분명하게 제어하고 싶다면 [**Find Contact**(연락처 찾기)](../../07-워크플로우/Contact-Workflow-Actions/workflow-action-find-contact.md)를 쓰는 방법도 있어요. 그런 다음 **Contact Found**(연락처 찾음) 또는 **Contact Not Found**(연락처 못 찾음)로 분기해서 새 연락처를 만들지 정할 수 있어요.

### 5. Log External Call 액션 추가하기

워크플로우에 알맞은 연락처 정보가 준비되면 Log External Call을 추가하고 들어온 통화 정보를 연결해요. 각 필드에는 외부 전화 시스템이 전달한 해당 값을 사용하세요.

1. 연락처를 식별하는 단계 뒤에 워크플로우 액션을 추가해요.
2. **Log External Call**을 선택해요.
3. 각 필드에서 커스텀 값/연결 컨트롤을 찾아요.
4. **Inbound Webhook**에서 받은 값 중 알맞은 것을 선택해요.
5. 사용할 수 있는 통화 데이터를 다음 필드에 연결해요.

   - **Direction**
   - **Date**
   - **To**
   - **From**
   - **Call Status**
   - **Attachment**(호환되는 녹음 참조 정보가 있는 경우)
6. 액션을 저장해요.

수신 분기와 발신 분기 두 곳 모두에서 같은 방식으로 설정하세요.

{% hint style="info" %}
**Call Status**: 통화의 시스템 결과를 나타내는 값을 연결하세요. 상담원이 직접 고른 사용자 지정 처리 결과는, 연동에서 그 값을 통화 상태 필드에 맞게 변환해 주는 경우가 아니라면 자동으로 연결하지 마세요.
{% endhint %}

{% hint style="info" %}
녹음: 외부 전화 시스템이 호환되는 녹음 참조 정보를 제공하면 **Attachment**에 연결하세요. 만들어진 통화 항목에서 하이퍼클래스로 녹음에 접근할 수 있는지 확인하세요.
{% endhint %}

---

## 기록된 통화 테스트하고 확인하기

테스트를 하면 외부 payload, 연락처 매칭, 분기, 통화 필드 연결이 의도대로 함께 동작하는지 확인할 수 있어요. webhook 요청이 성공했다고 해서 통화가 알맞은 연락처에 기록된다는 보장은 없어요. 실제 통화에 쓰기 전에 전체 워크플로우를 검증하세요.

운영용으로 워크플로우를 게시하기 전에 다음 순서로 확인하세요.

1. 실제와 비슷한 수신 통화 payload를 보내요.
2. 수신 분기가 실행되는지 확인해요.
3. **From Number**로 의도한 연락처가 식별되는지 확인해요.
4. 그 연락처에 통화가 기록되는지 확인해요.
5. 실제와 비슷한 발신 통화 payload를 보내요.
6. 발신 분기가 실행되는지 확인해요.
7. **To Number**로 의도한 연락처가 식별되는지 확인해요.
8. 하이퍼클래스에서 해당 연락처를 열어요.
9. 연락처의 **대화** 영역에서 기록된 통화를 확인해요.
10. 다음 내용을 포함해 사용할 수 있는 상세 정보가 맞는지 확인해요.

    - 방향
    - 날짜/시간
    - 발신 번호
    - 수신 번호
    - 통화 상태
    - 녹음(제공된 경우)
11. 테스트 결과가 의도한 동작과 같으면 워크플로우를 게시해요.

통화가 올바르게 기록되지 않으면 워크플로우의 **Execution Logs**(실행 로그)나 해당 실행 기록을 살펴보세요. 다음을 확인하세요.

- webhook이 예상한 데이터를 받았는지
- **If/Else** 조건이 올바른 분기를 선택했는지
- 올바른 연락처를 찾았거나 만들었는지
- **Log External Call**이 실행될 때 필수로 연결한 값이 들어 있었는지
- 외부 payload 구조가 워크플로우에 설정한 필드와 여전히 맞는지

---

## 이미지로 따라 하기

위 설정 순서를 화면 이미지와 함께 간단히 정리했어요.

이 액션으로 타사 전화 도구에서 이루어진 외부 통화를 CRM에 올릴 수 있어요. 통화 정보를 CRM에 모아 두면 추적과 관리가 더 쉬워져요. 통화 녹음도 이 액션으로 함께 전달할 수 있고, 연락처의 **대화** 영역에서 볼 수 있어요.

**Inbound Webhook** 트리거와 함께 쓰면 좋아요. 이 트리거는 webhook URL을 제공해요. 전화 시스템에서 통화가 발생할 때마다 이 URL을 호출해 통화 상세 정보를 전달하면 돼요.

트리거 설정 방법은 [도움말 문서](../../07-워크플로우/빌더/how-to-use-the-inbound-webhook-workflow-premium-trigger.md)를 참고하세요.

트리거 설정을 마쳤다면 **If/Else** 분기를 추가하고, direction 필드로 수신과 발신 흐름을 나눠요.

![If/Else 분기에서 direction 필드로 수신·발신 흐름을 나누는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030049016/original/1ZSk4ELYuOe5RoJrZckFQ2fb0j7W29rpDw.png?1722256105)

{% hint style="info" %}
direction 필드는 **Inbound Webhook Trigger** 옵션에서 찾을 수 있어요.
{% endhint %}

![Inbound Webhook Trigger 옵션에서 direction 필드를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030049335/original/i150SOLnrV0vzOpcX5AFX8GDS4qb2g5aCQ.png?1722256238)

수신 통화와 발신 통화 분기를 만든 뒤 **Create Contact** 액션을 추가해요. 이 액션은 webhook으로 전달한 전화번호를 이용해 통화를 기록할 연락처를 식별해요.

**Create Contact** 액션에서 수신 통화 흐름에는 **Phone** 필드를 **From Number**에 연결하고, 발신 통화 흐름에는 **To Number**에 연결해요. 그러면 해당 전화번호와 연결된 연락처를 만들거나 식별해요.

![Create Contact 액션에서 Phone 필드에 From Number 또는 To Number를 연결하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030049744/original/wDhFwiA4PKkIt55s5hntwRsFrKy050Hdzw.png?1722256470)

그다음 **Log External Call** 액션을 추가해요.

![Log External Call 액션을 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030050022/original/bCkK1GTlWcW3c87myvaFIBEXFbgOvHwyDQ.png?1722256617)

**Direction**, **Date**, **To**, **From**, **Call Status**, **Attachment** 필드마다 **Custom Values**(커스텀 값) 아이콘 > **Inbound Webhook Trigger**를 눌러 해당하는 값을 지정해요.

![Custom Values 아이콘에서 Inbound Webhook Trigger 값을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030050317/original/aov6CsyaGDQwCtzXJuoISUVm-7pMvKx2eA.png?1722256777)

워크플로우를 게시하면 외부 통화가 CRM에 기록되고, 연락처의 **대화** 영역에서 볼 수 있어요.

![연락처의 대화 영역에 기록된 외부 통화 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030050720/original/NjOWrt1ItkIe7diZyhF_CwcgPJ5bdT37RQ.png?1722257002)

통화 녹음도 CRM으로 전달할 수 있고, **대화**에서 확인할 수 있어요.

---

## 자주 묻는 질문

### Log External Call을 쓰려면 Inbound Webhook이 꼭 있어야 하나요?

**Inbound Webhook**은 Log External Call에 타사 통화 데이터를 전달하는 일반적인 방법이에요. 하지만 액션 자체는 해당 워크플로우에서 쓸 수 있는 값을 사용해요. 구성에 필요한 통화 정보를 제공하는 데이터 소스를 사용하세요.

### Log External Call에도 연락처가 필요한가요?

외부 통화는 연락처의 CRM 활동에 기록돼요. 그래서 **Log External Call**이 실행되기 전에 워크플로우에 알맞은 연락처 정보가 있어야 해요. 통화 데이터가 **Inbound Webhook**으로 들어오는 경우, 통화를 기록하기 전에 알맞은 연락처를 식별하거나 찾거나 만들 수 있어요.

### Create Contact와 Find Contact 중 어느 것을 써야 하나요?

연락처를 해당 매칭 방식에 따라 만들거나 업데이트·매칭하려면 **Create Contact**를 쓰세요. 매칭되는 연락처가 있을 때와 없을 때의 처리를 직접 제어하고 싶다면 **Find Contact**를 쓰세요.

### 연락처가 중복으로 만들어지는 위험을 줄이려면 어떻게 하나요?

식별 정보를 일관되게 연결하고, 연락처 중복 방지 설정을 확인하고, 실제와 비슷한 연락처 레코드로 워크플로우를 테스트하세요. 새로 만들기 전에 기존 레코드가 있는지 직접 확인하고 싶다면 **Find Contact**도 유용해요.

### 타사 통화 녹음도 넣을 수 있나요?

네. Log External Call에는 사용할 수 있는 녹음 정보를 위한 **Attachment** 필드가 있어요. 외부 전화 시스템이 제공하는 호환되는 녹음 참조 정보를 연결하고, 만들어진 통화 항목에서 녹음에 접근할 수 있는지 테스트하세요.

### Call Status에는 무엇을 연결해야 하나요?

통화의 시스템 결과나 상태를 나타내는 타사 값을 연결하세요. 상담원이 직접 고른 사용자 지정 처리 결과는, 연동에서 일부러 그 값들을 서로 연결해 두지 않았다면 **Call Status**와 같다고 보지 마세요.

### 외부 통화가 대화에 나타나지 않아요

워크플로우 실행 기록을 열어 다음을 확인하세요. webhook이 예상한 값을 받았는지, 올바른 분기가 실행되었는지, 의도한 연락처가 식별되었는지, Log External Call 필드가 채워졌는지 살펴보세요. 워크플로우를 설정한 뒤 외부 payload가 바뀌었다면 webhook 연결 참조 정보를 새로 고치고 필드 연결을 다시 확인하세요.
