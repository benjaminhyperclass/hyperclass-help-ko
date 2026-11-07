---
원문: https://help.gohighlevel.com/support/solutions/articles/155000007360-how-to-reduce-inbound-spam-calls
번역일: 2026-11-06
카테고리: 15-전화-시스템
---

# 인바운드 스팸 전화 줄이기

스팸 전화는 팀의 업무를 방해하고, 실제 고객 전화를 관리하기 어렵게 만들어요. 이 문서에서는 의심스러운 발신자를 알아보고, 반복되는 스팸 전화를 줄이는 방법을 안내해요.

하이퍼클래스에서는 다음 기능을 함께 쓸 수 있어요.

- **번호 인텔리전스**로 스팸으로 의심되는 전화를 표시해요.
- **사용자 지정 처리 결과**로 상담원이 원치 않는 전화를 직접 표시해요.
- **인바운드 수신거부**로 반복해서 전화하는 발신자를 차단해요.
- 필요하면 IVR(Interactive Voice Response, 키패드 자동 응답)로 발신자를 먼저 거른 뒤 팀에 연결해요.

{% hint style="warning" %}
번호 인텔리전스는 스팸으로 의심되는 전화를 알려 줄 뿐, 전화를 자동으로 차단하지는 않아요. 이후 전화를 막으려면 수신거부나 통화 연결 로직을 따로 설정해야 해요.
{% endhint %}

## 인바운드 스팸 전화 줄이기란?

하이퍼클래스는 스팸 감지와 통화 처리 자동화를 함께 써서 원치 않는 수신 전화를 줄일 수 있어요.

일반적인 구성은 다음과 같아요.

- **번호 인텔리전스**: 스팸일 수 있는 전화를 알아봐요.
- **사용자 지정 처리 결과**: 상담원이 원치 않는 전화를 일관된 기준으로 표시해요.
- **인바운드 수신거부**: 스팸으로 확인된 연락처의 이후 수신 전화를 차단해요.
- **IVR**(선택): 발신자가 키패드 번호를 먼저 눌러야 팀에 연결되게 해요.

이 도구들은 각각 따로 쓸 수도 있고, 필터링 강도에 맞춰 함께 쓸 수도 있어요.

---

## 스팸 전화 줄이기는 이렇게 동작해요

일반적인 흐름은 다음과 같아요.

1. 모르는 번호에서 하이퍼클래스 번호로 전화가 와요.
2. 번호 인텔리전스가 수신 전화를 확인해요.
3. 번호가 의심스러우면 하이퍼클래스에 "Spam Likely"(스팸 의심)가 표시돼요.
4. 상담원이 통화를 마친 뒤 "스팸 전화" 사용자 지정 처리 결과를 선택해요.
5. 워크플로우가 이 처리 결과를 감지해 해당 연락처에 인바운드 수신거부를 켜요.
6. 이후 그 연락처에서 오는 수신 전화는 차단돼요.

자동 발신 전화(로보콜)를 줄이고 싶다면, 일반 통화 연결 앞에 IVR을 둘 수도 있어요.

---

## 1단계 — 번호 인텔리전스 켜기

번호 인텔리전스는 모르는 미국 번호에서 오는 수신 전화를 확인해서 스팸일 가능성이 높은 전화를 알려 줘요.

전화가 의심스러우면 하이퍼클래스에 "Spam Likely" 표시가 나타나요. 번호 인텔리전스가 전화를 자동으로 차단하지는 않아요.

켜는 방법은 다음과 같아요.

1. **설정 > 전화 시스템**으로 이동하세요.
2. **추가 설정 > 번호 인텔리전스**를 여세요.
3. **알 수 없는 전화번호 정보 수집**을 켜세요.
4. 변경사항을 저장하세요.

번호 인텔리전스는 사용량에 따라 요금이 부과돼요. 현재 요금과 이용 가능 여부는 [번호 인텔리전스 문서](../number-intelligence-spam-detection-caller-id-sms-validation.md)를 참고하세요.

![번호 인텔리전스 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080466023/original/juzu57BEFtjvDOY9PbjxXqKPey66ocUdBg.png?1788948763)

{% hint style="info" %}
지원되는 하이퍼클래스 모바일 앱의 통화 화면에도 스팸 표시가 나타날 수 있어요. 하이퍼클래스 모바일 앱을 최신 버전으로 유지하세요.
{% endhint %}

---

## 2단계 — 스팸 전화용 사용자 지정 처리 결과 만들기

스팸으로 처리할 전화를 상담원이 일관되게 표시할 수 있도록 사용자 지정 처리 결과를 만들어요. 자세한 내용은 [음성 통화용 사용자 지정 처리 결과](custom-dispositions-for-voice-calls.md) 문서에서 볼 수 있어요.

1. **설정 > 전화 시스템 > 음성 > 사용자 지정 처리 결과**로 이동하세요.
2. **+ 처리 상태 추가**를 클릭하세요.
3. 처리 상태 이름으로 "스팸 전화"를 입력하세요.
4. 저장하세요.

의심스러운 전화가 끝나면 상담원이 처리 결과로 "스팸 전화"를 선택해요. 그러면 워크플로우가 이 값을 보고 해당 연락처를 찾아 다음 작업을 실행할 수 있어요.

![사용자 지정 처리 결과 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080466515/original/yY55WLRrtXfP3JqqRWAQpfMdlLeCTGvDBw.png?1788948974)

---

## 3단계 — 인바운드 수신거부로 반복 스팸 발신자 차단하기

상담원이 전화를 "스팸 전화"로 표시하면, 그 연락처에 인바운드 수신거부를 켜는 워크플로우를 만들어요.

1. **자동화 > 워크플로우**로 이동하세요.
2. 새 워크플로우를 만드세요.
3. **Call Details**(통화 상세 정보) 트리거를 추가하세요.
4. 다음 필터를 설정하세요.
   - **Call Direction**(통화 방향) = **Incoming**(수신)
   - **Custom Disposition**(사용자 지정 처리 상태) = 스팸 전화
5. **Enable/Disable DND**(수신거부 켜기/끄기) 액션을 추가하세요.
6. **DND Direction**(수신거부 방향)을 **Inbound**(수신)로 설정하세요.
7. 계정에 표시되는 수신 채널 옵션 중 지원되는 항목을 설정하세요.
8. 워크플로우를 저장하고 **Publish**(게시)하세요.

이 워크플로우를 쓰면 원치 않는 발신자가 팀에 계속 전화하는 일을 줄일 수 있어요.

---

## IVR로 가볍게 먼저 거르기 (선택)

"1번, 2번을 누르세요" 같은 간단한 IVR은 로보콜을 줄이고 사람들을 빠르게 연결해 줘요. 긴급하게 연락해야 하는 업종에서는 불편하지 않도록 짧게 유지하세요.

**2가지 선택지만 있는 기본 IVR 템플릿**

- **Say/Play**(메시지 말하기/재생): "지원 상담은 1번, 신규 문의는 2번을 눌러 주세요."
- **Gather Input (DTMF)**(키패드 입력 받기) → **Map Input**(입력값 연결):

  - **1 → Connect Call**(통화 연결): 지원팀 또는 사용자/그룹에 연결
  - **2 → Connect Call**: 영업에 연결
- **Timeout/Invalid**(시간 초과/잘못된 입력): **Repeat once**(한 번 반복) 후 **Voicemail**(음성 메시지) 또는 대체 상담원으로 연결
- **제한 사항**: 전화번호 하나에는 한 번에 IVR 워크플로우 하나만 연결할 수 있어요.

**구성 경로**

- **트리거**: **Start IVR**(IVR 시작). 수신 번호를 이 워크플로우에 연결해요. 자세한 내용은 [Start IVR 트리거](../../07-워크플로우/IVR-Workflow-Triggers/workflow-trigger-start-ivr-trigger.md) 문서를 참고하세요.
- **액션**: **Say/Play → Gather Input → Map Input → Connect Call** (+ Voicemail 대체 경로)

---

## VIP/세이프 리스트와 수신거부 자동 해제 (되돌리기 패턴)

스팸이 아닌데 스팸으로 처리되는 경우도 있어요. 다음 두 가지 패턴을 쓰면 중요한 발신자가 계속 연락할 수 있고, 검토가 끝나거나 일정 기간이 지나면 접근이 자동으로 복원돼요.

- **VIP / 세이프 리스트 예외 처리**:

  - 연락처에 **VIP** 또는 **SafeList** 태그를 추가해요.
  - 수신거부 워크플로우에서 수신거부 전에 **If/Else**(조건 분기)를 추가해요. 연락처에 VIP/SafeList 태그가 있으면 수신거부를 건너뛰고, 없으면 수신거부를 적용해요.
- **X일 후 수신거부 자동 해제 (예: 30일)**:
- 트리거는 **Contact DND**(연락처 수신거부, [트리거 문서](../../07-워크플로우/Contact-Workflow-Triggers/workflow-trigger-contact-dnd.md) 참고) 또는 일정 기반 로직으로 하고, **Wait**(대기)는 30일, 액션은 **Disable DND**(수신거부 해제)로 워크플로우를 만들어요. 검토자에게 먼저 알림을 보내도 돼요.
- 검토가 끝나면 "Quarantined–Spam" 태그를 제거해도 돼요.

---

## 모바일에서 스팸 표시 확인하기

모바일에서 "Spam Likely"가 보이면, 상담원이 데스크톱 앞에 없을 때도 필터가 작동하고 있다는 것을 확인할 수 있어요.

- **요구 사항**: 하이퍼클래스 모바일 앱 **v3.97.3 이상**
- **경험**: 지원되는 통화 목록과 상세 화면에 "Spam Likely"가 표시돼요.

---

## 단계별 설정 순서

올바른 순서로 설정하면 위험이 줄고 확인도 빨라져요. 각 단계를 마칠 때마다 테스트한 뒤 다음 단계로 넘어가세요.

### 1단계 — 번호 인텔리전스 켜기

1. **설정 → 전화 시스템 → 추가 설정 → 번호 인텔리전스**로 이동하세요.
2. **알 수 없는 전화번호 정보 수집**을 체크하세요.
3. 저장하세요.

{% hint style="info" %}
에이전시 온보딩 팁: **Agency View**(에이전시 보기)에서 기본값을 설정하면 새 서브 계정이 번호 인텔리전스를 켠 상태로 시작해요. 자세한 내용은 [신규 서브 계정의 기본 전화 환경설정 이해하기](../understanding-default-phone-preferences-for-new-sub-accounts.md)를 참고하세요.
{% endhint %}

![번호 인텔리전스 켜기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064902613/original/ISK2NvIiX9g7Ik1KOXpJhBdc2wD1HfxoTw.png?1771005949)

### 2단계 — "스팸 전화" 처리 결과 만들기

1. **설정 → 전화 시스템 → 음성 → 사용자 지정 처리 결과**로 이동하세요.
2. **+ 처리 상태 추가**를 클릭하세요.
3. **처리 상태 추가** 창에서 **처리 상태 이름**을 입력한 뒤 **저장**을 클릭하세요.

![처리 상태 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064902755/original/6uFL7DKPET7vF0BnXpgIvpMTkP9l7uUc8A.png?1771006193)

![처리 상태 이름 입력 후 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064902925/original/J4RxRzTIh3XSfbRY1NqgfGttJvsU1p-Tpw.png?1771006375)

### 3단계 — 스팸으로 표시된 연락처에 인바운드 수신거부(전화) 자동 적용하기

1. **워크플로우**를 만드세요.
2. **트리거**: **Call Details**(통화 상세 정보)
3. **필터 추가**: **Direction**(방향) = **Inbound**(수신) 그리고 **Disposition**(처리 결과)
4. **액션**: **Enable/Disable DND (Contact)**(연락처 수신거부 켜기/끄기) → **Inbound → Calls**(수신 → 전화)만 켜세요.
5. 선택 분기: **VIP** 태그가 있으면 건너뛰기, 잘못 처리된 경우 **Remove DND**(수신거부 제거) 경로 추가
6. **Publish**(게시)하세요.

{% hint style="info" %}
더 자세한 내용은 다음 도움말을 참고하세요.

1. Call Details 워크플로우 트리거
2. [Enable/Disable DND 워크플로우 액션](../../07-워크플로우/Contact-Workflow-Actions/workflow-action-dnd-contact.md)
{% endhint %}

![통화 상세 정보 트리거와 필터 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064902942/original/fCYl4HaMFO821RnbJ6213bX2XwpJAN_54w.png?1771006428)

![수신거부 액션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064903380/original/hbwEj589hq62cC92yhyQ6y5or3F2E5kKeA.png?1771007028)

### 4단계 — IVR 워크플로우 사용하기

{% hint style="info" %}
이 문서에는 중요한 단계만 정리했어요. 자세한 내용은 [Interactive Voice Response(IVR) 가이드 - 트리거 & 액션](../../07-워크플로우/interactive-voice-response-ivr-guide-triggers-actions.md)을 참고하세요.
{% endhint %}

- 새 **워크플로우**를 만들고 **Start IVR**(IVR 시작) 트리거를 선택하세요.

- **Filters**(필터)에서 **In Phone Number**(수신 전화번호)를 설정하고, 걸러 낼 대표 번호를 선택하세요. 번호가 보이지 않으면 이미 다른 워크플로우에서 쓰고 있을 수 있어요.

- **Gather Input on call**(통화 중 입력 받기)을 추가하고, **Say a message**(메시지 말하기)로 "전화 주셔서 감사합니다. [비즈니스 이름]입니다. 연결하려면 1번을 눌러 주세요." 같은 짧은 안내를 설정하세요.

- **Language**(언어)와 **Message Voice**(메시지 음성)를 선택하고, **Number of loops**(반복 횟수)는 1로 두세요. **Advanced Settings**(고급 설정)에서는 짧은 **timeout**(대기 시간, 약 3~5초)과 재시도 1회를 설정하고, 숫자 **1**만 입력받도록 하세요.

- 1번을 누른 발신자는 **Connect Call (IVR)**(통화 연결)을 추가하고 **Users**(사용자)를 선택하거나 **Add custom number**(사용자 지정 번호 추가)를 선택하세요. 필요하면 **Detect Voicemail**(음성 메시지 감지)을 켜고, **Record Call**(통화 녹음) 여부를 정하고, 적절한 **Timeout (seconds)**(대기 시간, 초)를 설정하세요.

- 응답이 없거나 다른 키를 누른 발신자는 **Say or play a message**(메시지 말하기 또는 재생)를 추가해서 "입력을 확인하지 못했어요" 같은 짧은 안내를 전하세요. 그다음 **End Call (IVR)**(통화 종료)을 추가하거나, 원하면 음성 메시지로 연결하세요.

- **Publish**(게시)한 뒤 휴대전화와 유선전화에서 각각 테스트 전화를 걸어 보세요. "1번 누르기" 경로는 연결되고, 대체 경로는 깔끔하게 종료되는지 확인하세요.

새 **워크플로우**를 만들거나 기존 번호 플로우를 수정하세요.

![IVR 워크플로우 만들기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064903722/original/CI8QPr9w3ZaFyQ2BcrYgTtxhXz_kM7Le1Q.png?1771007364)

**트리거**: 대표 수신 번호에 연결한 **Start IVR**

![Start IVR 트리거 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064903775/original/9fS-rImrX9eH1SH2pNlEvl9lnuxRBRHr2w.jpeg?1771007437)

**IVR Gather Input on Call**: "1" 입력 대기, 대기 시간 약 3~5초, 재시도 1회

**Say or Play Message 예시**: "전화 주셔서 감사합니다. [비즈니스 이름]입니다. 연결하려면 1번을 눌러 주세요."

![IVR 입력 받기와 안내 메시지 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064903720/original/sNYoYLfYNiIwQ9AmC5_UoY-kqDKyE21l4Q.png?1771007342)

### 5단계 — 통화 흐름과 대기 시간 확인하기

1. **전화번호 → [번호 선택] → Incoming Calls Settings**(수신 통화 설정)를 여세요.
2. IVR/워크플로우가 연결되어 있는지 확인하고, 벨 울림 제한 시간(ring timeout)을 설정하세요(예: 약 20초).
3. 모르는 번호, 스팸으로 표시된 번호, VIP 번호로 각각 3~5회 테스트 전화를 걸어 결과를 확인하세요.

### 6단계 — 모니터링하고 조정하기

- 매주: **Call Logs**(통화 기록), 처리 결과 사용 현황, IVR 무입력 비율, 인바운드 수신거부(전화)가 적용된 연락처를 확인하세요.
- 필요하면 안내 멘트와 대기 시간을 조정하고 상담원을 다시 교육하세요.

{% hint style="info" %}
내 번호가 "Spam Likely"로 표시되는 경우는 아웃바운드 평판의 별개 문제예요. 해결 방법은 [내 통화가 스팸으로 표시되는 이유와 피하는 방법](../통화/why-are-my-calls-marked-as-spam-and-how-can-i-avoid-it.md)과 [Free Caller Registry로 발신번호의 "Spam Likely" 해결하기](../통화/remediate-spam-likely-on-your-caller-id-using-free-caller-registry.md)를 참고하세요.
{% endhint %}

---

## 자주 묻는 질문

### 번호 인텔리전스가 전화를 자동으로 차단하나요?

아니요. "Spam Likely" 신호만 보여 줘요. 차단은 수신거부 같은 워크플로우나 IVR 설계로 만들어요.

### 수신거부를 "All channels"로 설정해야 하나요?

**Inbound**(수신) + **Voice**(음성)부터 시작하세요. 모든 채널로 넓히면 정상적인 SMS나 이메일까지 막힐 수 있어요. 스팸이 계속될 때만 범위를 넓히세요.

### VIP나 중요한 거래처를 차단하지 않으려면 어떻게 하나요?

**VIP**/**SafeList** 태그를 쓰고 **If/Else** 조건을 추가해서, 해당 연락처는 수신거부를 건너뛰고 IVR도 거치지 않게 하세요.

### 상담원이 실제 고객을 "스팸 전화"로 표시했어요. 어떻게 하나요?

연락처에서 수신거부를 해제하세요. 수신거부 자동 해제 워크플로우를 만들어 두었다면 X일 뒤에 자동으로 풀려요. 메모를 남기고 VIP 태그를 추가해도 돼요.

### 스팸으로 표시된 전화를 바로 음성 메시지로 보낼 수 있나요?

네. IVR의 **Timeout**/**Invalid** 경로로 보내거나, 사용자 지정 처리 결과가 "스팸 전화"일 때 **Inbound**, **Voice** 전화를 음성 메시지로 보내는 분기를 워크플로우에 추가하세요.

### 이 설정이 아웃바운드 발신에도 영향을 주나요?

**Inbound**(수신)로 설정한 수신거부는 해당 연락처로 거는 아웃바운드 전화를 막지 않아요. 방향(Direction)과 채널(Channels)은 신중하게 선택하세요.

### SMS 스팸도 거를 수 있나요?

SMS 같은 다른 **Channels**(채널)에도 수신거부를 적용할 수 있어요. 먼저 영향을 검토하고, SMS와 음성은 별도 로직으로 구성하는 것을 고려하세요.

### IVR이 꼭 필요한가요?

아니요. IVR은 선택 사항이에요. 특히 긴급 대응이 필요한 업종에서는 번호 인텔리전스와 처리 결과 → 수신거부만 쓰는 곳이 많아요.
