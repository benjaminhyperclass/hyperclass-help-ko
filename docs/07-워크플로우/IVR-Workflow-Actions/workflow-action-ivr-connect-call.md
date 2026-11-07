---
원문: /support/solutions/articles/155000002285-workflow-action-end-ivr-call
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — End IVR call(IVR 통화 종료)

**End IVR call**(IVR 통화 종료) 액션을 쓰면 워크플로우에서 IVR 통화를 직접 끝낼 수 있어요. 이 문서에서는 액션이 하는 일, 설정 방법, 자주 묻는 질문을 안내해요.

## End IVR call이란?

**End IVR call**은 워크플로우 쪽에서 IVR 통화를 종료하는 액션이에요.

지금까지 워크플로우 소유자는 통화를 직접 끝낼 방법이 없었어요. 그래서 IVR 액션이 끝난 뒤에도 연락처는 IVR이 아닌 다음 액션이 모두 끝날 때까지 대기 음악을 들어야 했어요. 통화도 워크플로우가 끝나야 종료됐어요. 연락처는 워크플로우가 끝날 때까지 대기 음악을 계속 듣거나, 직접 전화를 끊어야 했어요.

## End IVR call은 어떻게 동작하나요?

**End IVR call**은 워크플로우에 새로 추가된 액션이에요. 문자 메시지나 사용자 지정 음성 메시지를 들려준 뒤에 통화를 끝낼 수도 있고, 바로 끝낼 수도 있어요.

![End IVR call 액션 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155024985223/original/X5bTks2dmARo0BMeCY2-x-Ff9ZMpOy5U_Q.png?1713951346)

![End IVR call 액션 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155024985282/original/Tv8g88ELCeuoSmKp_GeOClhgpTKQ0q_9fA.png?1713951382)

![End IVR call 액션 화면 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155024985304/original/vF3RDo7yj2jeVC5CxOdpph-SVSyCqwvkWA.png?1713951393)

![End IVR call 액션 화면 4](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155024985338/original/b-fvpgxcC9kQndQqHGiLOU3F6JC0H_l-_Q.png?1713951403)

## End IVR call 설정하기

1. 통화를 끝내려는 IVR 액션이 들어 있는 워크플로우를 선택해요.
2. **Gather**(입력 받기), **Say/Play a message**(메시지 말하기/재생), **Record**(녹음) 같은 IVR 액션 중 하나의 뒤에 있는 **+** 버튼을 클릭해요.
3. **End IVR call**(IVR 통화 종료) 액션을 검색해서 선택해요.
4. 사용자 지정 옵션을 골라요. **End abruptly**(바로 종료)가 기본값이에요. **Text message**(문자 메시지)를 재생하거나, 사용자 지정 음성을 추가하고 반복 횟수를 정할 수도 있어요.
5. **Save**(저장)를 클릭해요.

## 자주 묻는 질문

### 기존 워크플로우 흐름에는 어떤 영향이 있나요?

IVR 통화 중에 사용자가 끝없이 대기 음악을 듣는 일이 없어져서, 통화 경험이 좋아져요. IVR 액션이 끝난 뒤 워크플로우 소유자가 직접 통화를 끝낼 수 있게 되어, IVR 통화 시간도 바로 줄어들어요. 예전에는 이런 선택권이 없었어요.

### 프리미엄 액션인가요?

아니요, 프리미엄 액션이 아니에요.

### End IVR call에서는 어떤 사용자 지정 옵션을 쓸 수 있나요?

세 가지 유형 중에서 고를 수 있어요.

1. **End abruptly**(바로 종료): 기본값이에요. 경고나 메시지 없이 IVR 통화를 바로 끝내요.
2. **Text message**(문자 메시지): 사용자 지정 설정의 하나예요. 메시지를 입력하고, IVR 통화가 끝나기 전에 메시지를 몇 번 반복할지 정해요.
3. **Custom music**(사용자 지정 음악): 음성 메시지나 브랜드 음악 등 어떤 오디오 형식이든 업로드해서, IVR 통화가 끝나기 전에 재생할 수 있어요. 반복 횟수도 함께 정해요.

### End IVR call 액션 뒤에 있는 IVR 액션은 어떻게 되나요?

**End IVR call** 액션 뒤에 있는 IVR 액션은 모두 건너뛰어요.

{% hint style="info" %}
워크플로우에서 IVR이 아닌 액션은 이와 상관없이 계속 실행돼요.
{% endhint %}
