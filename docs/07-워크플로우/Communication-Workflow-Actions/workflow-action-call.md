---
원문: /support/solutions/articles/155000003274-workflow-action-call
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Call(통화)

**Call**(통화) 액션은 연락처 담당자에게 자동으로 전화를 걸고, 그 담당자를 연락처와 연결해 줘요. 연락처에 전화하기 전에 맞춤 귓속말 메시지를 들려줄 수 있어서, 담당자가 통화 전에 상황을 파악할 수 있어요. 빠른 후속 연락, 예약 안내, 신규 고객 온보딩처럼 직접 대화하는 편이 좋은 상황에서 쓰세요.

{% hint style="info" %}
문서에 나온 금액(달러)과 요금제 이름은 참고용이에요. 하이퍼클래스에서 실제로 적용되는 요금은 [요금제 안내](../../00-자주묻는질문/pricing-plans.md)와 [AI·SMS·음성 사용료](../../00-자주묻는질문/usage-costs.md)를 확인하세요.
{% endhint %}

## Call 액션이란?

**Call** 액션은 내부 수신자와 워크플로우 연락처를 자동으로 전화 연결해 줘요. 전화가 걸리는 순서를 알아 두면 수신자를 올바르게 설정하고, 도움이 되는 귓속말 메시지를 쓰고, 팀원이 준비되기 전에 리드에게 먼저 전화가 가는 일을 막을 수 있어요.

연락처가 **Call** 액션에 도달하면 하이퍼클래스는 먼저 아래 수신자 중 한 명에게 전화를 걸어요.

1. 연락처에 배정된 사용자
2. 연락처에 배정된 사용자가 없으면 **설정 > 회사** 탭의 **Company Phone**(회사 전화번호) 필드에 입력된 번호

수신자가 전화를 받으면 설정해 둔 귓속말 메시지가 재생돼요. 액션의 키 입력 설정에 따라 수신자가 숫자 키를 눌러야 연락처에 전화가 걸릴 수도 있어요. 연락처가 전화를 받으면 두 사람이 연결돼요.

배정된 사용자가 없는 연락처에 사용하는 회사 전화번호는 서브 계정의 **비즈니스 프로필**에서 설정해요.

![Call 액션의 통화 연결 흐름](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077377071/original/p69RQfBs7YHRV4lrgvj5rpbXYARE1Yv1BQ.png?1785526566)

---

## Call 액션을 쓰면 좋은 점

- **빠른 리드 응대:** 연락처가 중요한 행동을 하면 팀원에게 자동으로 알리고 연결해 줘요.
- **배정 기준 라우팅:** 워크플로우가 실행될 때마다 수신자를 직접 고르지 않아도, 연락처를 맡은 사용자에게 전화가 가요.
- **연결 전 상황 안내:** 연락처 이름, 트리거가 된 이벤트 등 필요한 정보를 귓속말 메시지로 들려줄 수 있어요.
- **유연한 자동화:** 예약 확정이나 태그 추가 같은 트리거 뒤에 이 액션을 붙여 쓸 수 있어요.

---

## 통화 라우팅 방식

**Call** 액션은 연락처에 배정된 사용자가 있는지에 따라 흐름이 달라져요.

1. 연락처가 워크플로우에서 **Call** 액션에 도달해요.
2. 하이퍼클래스가 알맞은 내부 수신자에게 전화를 걸어요.
   - **Assigned user**(배정된 사용자): 연락처에 배정된 사용자가 있을 때
   - **Company phone**(회사 전화번호): 연락처에 배정된 사용자가 없을 때
3. 내부 수신자가 전화를 받아요.
4. 하이퍼클래스가 상황을 알려 주는 귓속말 메시지를 재생해요.
5. 키 입력이 켜져 있으면 수신자가 숫자 키를 눌러야 다음 단계로 넘어가요.
6. 하이퍼클래스가 연락처에게 전화를 걸어요.
7. 연락처가 전화를 받으면 두 사람이 연결돼요.

{% hint style="info" %}
연락처에 배정된 사용자가 없을 때 전화가 걸리는 번호는 **설정 > 회사** 탭의 **Company Phone** 필드에 입력된 번호예요.
{% endhint %}

---

## 액션 상세 정보

| 필드 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Action Name**(액션 이름) | 이 통화 액션의 이름이에요. | 예 |
| **Call Whisper**(통화 귓속말) | 통화가 연결되기 전에 수신자에게 들려주는 짧은 메시지예요. 커스텀 값을 넣어 메시지를 맞춤으로 만들 수 있어요. 이 메시지는 최대 세 번 재생돼요. | 아니요 |
| **Call Timeout (s)**(통화 타임아웃, 초) | 통화가 연결되지 않을 때 통화 시도를 끝내기 전까지 기다리는 최대 시간(초)이에요. | 예 |
| **Disable Voicemail Detect**(음성사서함 감지 끄기) | 켜면 시스템이 음성사서함인지 감지하지 않아요. 음성사서함 감지 때문에 생기는 지연을 줄일 수 있지만, 음성사서함 연결이 일반 통화로 처리될 수 있어요. 통화 타임아웃이 짧을 때 권장해요. | 아니요 |
| **Connect Call After Keypress**(키 입력 후 통화 연결) | 켜면 수신자가 키를 눌러야 통화가 연결돼요. 실제 사람이 전화를 받았는지 확인할 때 유용해요. | 아니요 |

{% hint style="warning" %}
**Call Whisper** 메시지는 텍스트 음성 변환(TTS)으로 재생돼요. TTS는 100자당 $0.00084가 청구돼요.
{% endhint %}

![Call 액션의 상세 정보 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077377766/original/9ZEyLgjKwF6pAGSfCQS0B_cRKasQgAShRg.jpeg?1785528036)

---

## 액션 설정 방법

1. 워크플로우에서 사용할 수 있는 액션 목록 중 **Call**을 선택하세요.
2. **Action Name**에 이 액션의 이름을 입력하세요. 예를 들어 "고객 지원 통화"처럼 쓰면 돼요.
3. **Call Whisper**에 연결 전에 수신자에게 들려줄 메시지를 입력하세요. 필요하면 커스텀 값을 넣을 수 있어요.
4. **Call Timeout**에 통화 연결을 시도할 시간을 초 단위로 입력하세요. 이 시간이 지나면 통화 시도가 끝나요.
5. **Advanced Settings**(고급 설정)에서 음성사서함 감지를 켤지, 통화를 연결하기 전에 키 입력을 요구할지 정하세요.
6. 설정을 모두 마쳤으면 액션을 저장하세요.

![Call 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032063905/original/QIzRg25DV6YQaZNN_mntHs3KTkhDBMOyxg.png?1725272857)

---

## Disable Voicemail Detect

워크플로우 설정 **Stop on Response**(응답 시 중지)와 **Call** 액션의 **Disable Voicemail Detect** 설정이 서로 어떻게 작용하는지는 "Stop On Response and Disable Voicemail Detect" 문서를 참고하세요.

{% hint style="info" %}
**Call** 액션에서 비즈니스 쪽이 어떻게 하는지는 **Stop on Response**와 **Disable Voicemail Detect**에 영향을 주지 않아요. 비즈니스 쪽에 먼저 전화가 걸려요. 비즈니스 쪽이 받지 않으면 워크플로우는 계속 진행돼요. 비즈니스 쪽이 받았더라도 연락처가 받지 않으면 워크플로우는 계속 진행돼요. **Stop on Response**/**Disable Voicemail Detect**에는 연락처(또는 연락처의 음성사서함)의 응답만 영향을 줘요.
{% endhint %}

통화가 연결되면 기본적으로 사람이 받았는지 음성사서함인지 확인하려고 해요. 이 과정 때문에 통화 연결이 조금 늦어져요. **Stop On Reply**가 켜져 있을 때 음성사서함이 받은 것으로 판단되면 연락처는 워크플로우를 계속 진행해요. **Disable Voicemail Detect**를 켜면 음성사서함 감지가 꺼져서 지연이 없어져요. 다만 **Stop On Reply**가 켜져 있고 음성사서함 감지가 꺼져 있으면, 사람이 받든 음성사서함이 받든 워크플로우가 중지돼요.

{% hint style="info" %}
워크플로우 설정 **Stop On Reply**가 켜져 있고(**Disable Voicemail Detect**는 꺼져 있고), **Call** 액션이 비즈니스 쪽에 전화를 걸었을 때 비즈니스 쪽은 받았지만 리드가 받지 않으면 워크플로우는 계속 진행돼요.
{% endhint %}

![Disable Voicemail Detect 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057573408/original/5WxfA4EOT9nym7W94JUOajYnuAfJhtG-Xg.png?1762282547)

---

## 워크플로우 예시

**워크플로우 구성 예시**

- **Trigger**(트리거): **Appointment Confirmed**(예약 확정) - 예약 상태가 확정으로 바뀔 때
- **Action**(액션): **Call** - 배정된 사용자에게 전화를 걸어 다가오는 예약을 알려 줘요.
  - **Action Name**: "예약 알림 통화"
  - **Call Whisper**: "[연락처 이름]님과 [예약 시간]에 새 예약이 있습니다. 확인하려면 아무 키나 누르세요."
  - **Call Timeout**: 30초
  - **Disable Voicemail Detect**: 켬 (더 빠른 연결을 위해)
  - **Connect Call After Keypress**: 켬 (통화가 실제 사람에게 연결되도록)

**이 액션과 함께 쓸 수 있는 트리거 (이 외에도 사용할 수 있어요)**

1. **Appointment Confirmed**: 예약이 확정되면 배정된 사용자에게 자동으로 전화를 걸어요.
2. **Lead Form Submitted**(리드 폼 제출): 리드가 "첫 연락 폼" 같은 폼을 제출하면 전화를 걸어요.

이렇게 구성하면 예약 확정이나 리드 상태 변경 같은 중요한 일이 생겼을 때 담당자가 먼저 연락을 받아요. 그래서 고객에게 더 빠르고 알맞게 응대할 수 있어요.
