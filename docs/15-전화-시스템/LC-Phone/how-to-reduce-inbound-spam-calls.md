---

번역일: 2026-04-08
카테고리: 15-전화-시스템 > LC-Phone
---

# 수신 스팸 전화 줄이는 방법

스팸 전화는 팀을 압도하고, 통화량을 부풀리며, 시간을 낭비하게 만들 수 있습니다. 이 가이드에서는 내장 도구와 통화 라우팅 전략을 사용해서 수신 스팸 전화를 줄이는 실용적인 단계를 설명드립니다.

---

**목차**

- [Hyperclass의 수신 스팸 전화 차단이란?](#hyperclass의-수신-스팸-전화-차단이란)
- [수신 스팸 전화 차단의 주요 장점](#수신-스팸-전화-차단의-주요-장점)
- [Number Intelligence (스팸 탐지, 발신자 ID 및 검증)](#number-intelligence-스팸-탐지-발신자-id-및-검증)
- [음성 통화 커스텀 처리 상태 ("스팸 전화" 생성)](#음성-통화-커스텀-처리-상태-스팸-전화-생성)
- [워크플로우 — 연락처 DND (표시된 스팸 격리)](#워크플로우-연락처-dnd-표시된-스팸-격리)
- [대화형 음성 응답 (IVR) — 가벼운 1차 필터 (선택사항)](#대화형-음성-응답-ivr-가벼운-1차-필터-선택사항)-—-가벼운-1차-필터-(선택사항))
- [VIP/세이프 리스트 및 자동 DND 해제 (되돌리기 패턴)](#vip세이프-리스트-및-자동-dnd-해제-되돌리기-패턴)
- [모바일 가시성 (앱에서 스팸 라벨 표시)](#모바일-가시성-앱에서-스팸-라벨-표시)
- [수신 스팸 전화 차단 설정 방법 (단계별)](#수신-스팸-전화-차단-설정-방법-단계별)
- [자주 묻는 질문](#자주-묻는-질문)

---

# **Hyperclass의 수신 스팸 전화 차단이란?**

수신 스팸 전화 차단은 상담원이 응답하기 전에 스팸 가능성을 식별하고, 반복 가해자를 자동으로 격리하며, 봇을 막기 위한 가벼운 IVR "1차 관문"을 추가하는 다층 구성입니다. 탐지(Number Intelligence), 상담원 입력(커스텀 처리 상태), 자동화(DND + IVR)를 결합하여 실제 고객은 차단하지 않으면서도 강력한 보호를 제공합니다.

---

## **수신 스팸 전화 차단의 주요 장점**

결과를 이해하면 보호와 접근성의 적절한 균형을 구성할 수 있습니다. 이러한 장점들은 방해 요소 줄이기, 리드 플로우 보존, 되돌리기 옵션 단순화에 중점을 둡니다.

- **상담원 방해 요소 감소**: 사용자에게 울리는 스팸을 줄입니다.

- **더 빠른 처리**: 상담원이 한 번의 탭/클릭으로 통화를 **스팸 전화**로 표시할 수 있습니다.

- **자동 격리**: 워크플로우가 표시된 번호를 **DND**에 추가하여 향후 수신 벨소리를 방지합니다.

- **1차 스크리닝 (IVR)**: 간단한 키 입력 안내가 로봇 콜을 차단하면서 실제 사람은 빠르게 연결합니다.

- **세이프 리스트 및 되돌리기**: VIP는 필터를 우회할 수 있고, DND는 검토 후 또는 X일 후 자동 해제 가능합니다.

- **측정 가능한 효과**: "스팸 가능성" 비율, IVR 완료, 상담원이 처리하는 스팸 전화 감소를 추적할 수 있습니다.

---

## **Number Intelligence (스팸 탐지, 발신자 ID 및 검증)**

Number Intelligence는 통화 기록과 전화 경험에 네트워크 레벨 신호(예: **스팸 가능성**)를 추가합니다. 이를 활성화하면 상담원이 응답하기 전에 의심스러운 통화를 표시/라우팅할 수 있도록 조기 탐지 기능을 제공합니다.

- **활성화 위치:** **Settings(설정) → Phone System(전화 시스템) → Additional Settings(추가 설정) → Number Intelligence** (하위 계정).

- **범위 및 참고사항:** 스팸 탐지/발신자 이름 조회 가용성과 요금은 Number Intelligence 아티클에 문서화되어 있습니다. 요금은 조회/이벤트당 사용량 기반입니다. 국가별로 가용성이 다를 수 있으며, 스팸 탐지는 미국에서 가장 효과적입니다. (자세한 정보는 이 아티클을 참조하세요: [Number Intelligence - 스팸 탐지, 발신자 ID 및 SMS 검증](number-intelligence-spam-detection-caller-id-sms-validation.md))

- **작동 확인:** 통화 기록과 지원되는 다이얼러 뷰에서 수신 통화에 **스팸 가능성** 표시를 찾아보세요.

---

## **음성 통화 커스텀 처리 상태 ("스팸 전화" 생성)**

커스텀 처리 상태는 상담원 피드백을 표준화합니다. **스팸 전화** 처리 상태를 추가하면 상담원이 원하지 않는 통화를 일관성 있게 라벨링할 수 있고, 워크플로우가 이를 사용해서 향후 시도를 자동 격리할 수 있습니다.

- **처리 상태 생성:** **Settings(설정) → Phone System(전화 시스템) → Dispositions(처리 상태) → Add Disposition(처리 상태 추가) → Name(이름): "스팸 전화" → Save(저장)**.

- **상담원 사용 위치:** 통화 종료 화면 (웹 및 모바일).

- **가이드라인:** 라벨은 짧고 명확하게 유지하세요 (예: **스팸 전화**).

---

## **워크플로우 — 연락처 DND (표시된 스팸 격리)**

워크플로우는 정책을 운영화합니다. 상담원이 **스팸 전화**로 표시하면, 워크플로우가 해당 연락처에 **DND**를 활성화할 수 있습니다. 이는 같은 번호로부터의 향후 수신 벨소리를 차단하면서도 필요시 연락할 수 있는 능력은 보존합니다.

**권장 안전 사전 설정 (용어 명확성):**

- **Direction(방향)**은 어느 방향의 커뮤니케이션을 차단할지 제어합니다 (예: **Inbound(수신)**).

- **Channels(채널)**은 *무엇을* 차단할지 제어합니다 (예: **Voice(음성)** vs **All channels(모든 채널)**). 합법적인 SMS/이메일에 영향을 주지 않도록 **Inbound + Voice**로 보수적으로 시작하세요.

레시피:

- **트리거:** **Call Details(통화 상세)**.

- **필터:** **Disposition = 스팸 전화** (그리고 선택적으로 **Direction = Inbound**).

- **액션:** Enable/Disable DND → **Direction = Inbound** → **Channels = Voice** → Save & Publish(저장 및 발행).

---

## **대화형 음성 응답 (IVR) — 가벼운 1차 필터 (선택사항)**

최소한의 IVR("1번/2번을 누르세요")은 로봇 콜을 막고 사람들을 빠르게 연결합니다. 긴급 사용 업체의 경우 마찰을 피하기 위해 짧게 유지하세요.

**최소 2옵션 IVR 템플릿:**

- **Say/Play(말하기/재생):** "고객지원팀으로 연결하려면 1번을, 새로운 문의는 2번을 눌러주세요."

- **Gather Input (DTMF)(입력 수집)** → **Map Input(입력 매핑)**:
  - **1 → Connect Call(통화 연결)** 고객지원팀 또는 User/Group으로
  - **2 → Connect Call** 영업팀으로

- **Timeout/Invalid(시간초과/잘못된 입력):** **한 번 반복**, 그 다음 **Voicemail(음성사서함)** 또는 **Fallback agent(대체 상담원)**

- **제약사항:** 한 전화번호는 **하나의 IVR 워크플로우**에만 매핑될 수 있습니다.

**구축 경로:**

- **트리거:** **Start IVR(IVR 시작)** (수신 번호를 이 워크플로우에 매핑).

- **액션:** **Say/Play → Gather Input → Map Input → Connect Call** (+ Voicemail 대체).

---

## **VIP/세이프 리스트 및 자동 DND 해제 (되돌리기 패턴)**

가양성(False positive)은 발생합니다. 이 두 패턴은 핵심 발신자의 접근성을 보존하고 검토 후 또는 시간 경과 후 자동으로 액세스를 복원합니다.

- **VIP / 세이프 리스트 우회:**
  - 연락처에 **VIP** 또는 **SafeList** 태그를 추가합니다.
  - DND 워크플로우에서 DND 전에 **If/Else**를 추가합니다: **연락처에 VIP/SafeList 태그가 있으면 → DND 건너뛰기**; 그렇지 않으면 → DND 적용.

- **X일 후 자동 DND 해제 (예: 30일):**
  - **트리거: Contact DND(연락처 DND)** (또는 스케줄 기반 로직), **Wait: 30일**, **액션: Disable DND**(또는 먼저 검토자에게 알림)로 워크플로우를 만듭니다.
  - 선택적으로 검토 시 "격리됨-스팸" 태그를 제거합니다.

---

## **모바일 가시성 (앱에서 스팸 라벨 표시)**

모바일에서 "스팸 가능성"을 보는 것은 상담원이 데스크톱에서 멀리 떨어져 있을 때도 필터가 작동하고 있다는 확신을 줍니다.

- **요구사항:** Hyperclass 모바일 앱 **v3.97.3 이상**.

- **경험:** 지원되는 곳에서 통화 목록과 상세에 "스팸 가능성"이 표시됩니다.

---

## **수신 스팸 전화 차단 설정 방법 (단계별)**

올바른 순서는 리스크를 줄이고 확인 속도를 높입니다. 각 단계를 완료하고 다음으로 넘어가기 전에 테스트하세요.

### **1단계 — Number Intelligence 활성화**

- **Settings(설정) → Phone System(전화 시스템) → Additional Settings(추가 설정) → Number Intelligence**로 이동하세요.

- **Gather Intelligence on Unknown Phone Numbers(알 수 없는 전화번호에 대한 정보 수집)**를 체크하세요.

- 저장하세요.

**에이전시 온보딩 팁:** 에이전시 뷰에서 기본값을 설정하면 새로운 하위 계정이 기본적으로 Number Intelligence가 활성화된 상태로 시작됩니다. 새 하위 계정의 기본 전화 설정 이해를 참조하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064902613/original/ISK2NvIiX9g7Ik1KOXpJhBdc2wD1HfxoTw.png?1771005949)

### **2단계 — "스팸 전화" 처리 상태 생성**

- **Settings(설정) → Phone System(전화 시스템) → Voice(음성) → Custom Dispositions(커스텀 처리 상태)**로 이동하세요.

- **+ Add Disposition(처리 상태 추가)**를 클릭하세요.

- **Add Disposition**에서 Disposition Name → **Save(저장)**를 설정하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064902755/original/6uFL7DKPET7vF0BnXpgIvpMTkP9l7uUc8A.png?1771006193)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064902925/original/J4RxRzTIh3XSfbRY1NqgfGttJvsU1p-Tpw.png?1771006375)

### **3단계 — 스팸으로 표시된 연락처에 대해 수신 DND (통화) 자동 활성화**

- **워크플로우**를 만드세요.

- **트리거:** **Call Details(통화 상세)**.

- **필터 추가:** **Direction = Inbound** AND Disposition

- **액션:** **Enable/Disable DND (Contact)(연락처 DND 활성화/비활성화)** → **Inbound → Calls**만 활성화.

- 선택적 분기: **VIP tag** 건너뛰기; 수정된 경우 **Remove DND** 경로.

- 발행하세요.

더 자세한 정보는 이 도움말 아티클들을 참조하세요:
1. [Call Details 워크플로우 트리거]([workflow-trigger-call-details](workflow-trigger-call-details.md))
2. [Enable/Disable DND 워크플로우 액션]([workflow-action-dnd-contact](workflow-action-dnd-contact.md))

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064902942/original/fCYl4HaMFO821RnbJ6213bX2XwpJAN_54w.png?1771006428)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064903380/original/hbwEj589hq62cC92yhyQ6y5or3F2E5kKeA.png?1771007028)

### **4단계 — IVR 워크플로우 사용**

이 아티클에서는 중요한 단계만 일부 제공합니다. 더 자세한 내용은 아래 도움말 아티클을 참조하세요:
[대화형 음성 응답 (IVR) 가이드 - 트리거 및 액션]([interactive-voice-response-ivr-guide-triggers-actions](interactive-voice-response-ivr-guide-triggers-actions.md))

- 새로운 **워크플로우**를 만들고 **Start IVR Trigger(IVR 시작 트리거)**를 선택하세요.

- **필터**에서 **In Phone Number(수신 전화번호)**를 설정하고 스크리닝할 공용 회선을 선택하세요 (참고: 번호가 나타나지 않으면 이미 다른 워크플로우에서 사용 중일 수 있습니다).

- **Gather Input on call(통화 시 입력 수집)**을 추가하고 **Say a message(메시지 말하기)**를 사용해서 "[비즈니스]에 전화해주셔서 감사합니다. 연결하려면 1번을 눌러주세요."와 같은 짧은 안내를 전달하세요.

- **Language(언어)**, **Message Voice(메시지 음성)**을 선택하고, **Number of loops(반복 횟수)**를 1로 유지하며, **Advanced Settings(고급 설정)**에서 짧은 **timeout(시간초과)** (약 3-5초)를 설정하고 한 번 재시도; 숫자 **1**만 허용하세요.

- 1번을 누르는 발신자의 경우 **Connect Call (IVR)(통화 연결)**을 추가하고 **Users(사용자)** 또는 **Add custom number(커스텀 번호 추가)**를 선택하세요. 선택적으로 **Detect Voicemail(음성사서함 탐지)**를 활성화하고, **Record Call(통화 녹음)** 여부를 고려하며, 적절한 **Timeout (seconds)(시간초과(초))**를 설정하세요.

- 응답하지 않거나 잘못된 키를 누르는 발신자의 경우, 간결한 "잘못 입력하셨습니다" 알림과 함께 **Say or play a message(메시지 말하기 또는 재생)**를 추가한 후 **End Call (IVR)(통화 종료)** (또는 원한다면 음성사서함으로 라우팅)하세요.

- **발행**한 후 모바일과 유선전화에서 테스트 통화를 걸어 "1번 누르기" 경로가 연결되고 대체 경로가 깔끔하게 종료되는지 확인하세요.

새로운 **워크플로우**를 만들거나 기존 번호 플로우를 업데이트하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064903722/original/CI8QPr9w3ZaFyQ2BcrYgTtxhXz_kM7Le1Q.png?1771007364)

**트리거:** 공용 수신 번호에 연결된 **Start IVR**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064903775/original/9fS-rImrX9eH1SH2pNlEvl9lnuxRBRHr2w.jpeg?1771007437)

**IVR Gather Input on Call:** "1" 예상; 시간초과 ~3-5초; 1번 재시도.

**Say or Play Message 예시:** "[비즈니스]에 전화해주셔서 감사합니다. 연결하려면 1번을 눌러주세요."

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064903720/original/sNYoYLfYNiIwQ9AmC5_UoY-kqDKyE21l4Q.png?1771007342)

### **5단계 — 통화 플로우 및 시간초과 검증**

- **Phone Numbers(전화번호) → [번호 선택] → Incoming Calls Settings(수신 통화 설정)**를 열어주세요.

- IVR/워크플로우 연결을 확인하고 **ring timeout(벨소리 시간초과)** (예: ~20초)를 설정하세요.

- 3-5회 테스트 통화를 걸어(알 수 없는 번호; 스팸으로 표시된 번호; VIP 번호) 결과를 확인하세요.

### **6단계 — 모니터링 및 조정**

- 주간: **Call Logs(통화 기록)**, 처리 상태 사용량, IVR 무입력 비율, **Inbound DND (Calls)**가 있는 연락처를 검토하세요.

- 필요에 따라 안내/시간초과를 조정하고 상담원을 재교육하세요.

참고: 자신의 번호가 "스팸 가능성"으로 표시되는 경우, 이는 별도의 발신 평판 문제입니다. 발신자 평판 모범 사례와 무료 발신자 등록 단계를 통한 개선은 관련 아티클을 참조하세요.

---

## **자주 묻는 질문**

**Q: Number Intelligence가 자동으로 전화를 차단하나요?**

아니요. "스팸 가능성" 신호를 제공합니다. 차단 동작은 워크플로우(예: DND) 및/또는 IVR 설계에서 나옵니다.

**Q: DND를 "모든 채널"로 설정해야 하나요?**

**Inbound + Voice**로 시작하세요. 모든 채널로 확장하면 합법적인 SMS/이메일이 억제될 위험이 있습니다. 스팸이 지속되는 경우에만 범위를 늘리세요.

**Q: VIP나 중요한 벤더를 차단하지 않으려면 어떻게 하나요?**

**VIP/SafeList** 태그를 사용하고 **If/Else** 조건을 추가해서 해당 연락처들은 DND를 건너뛰고 IVR을 우회하도록 하세요.

**Q: 상담원이 실제 고객을 "스팸 전화"로 표시하면 어떻게 하나요?**

연락처 기록에서 DND를 제거하세요 (또는 자동 해제 워크플로우가 X일 후 DND를 해제하도록 하세요). 메모를 남기고 VIP 태그를 추가할 수도 있습니다.

**Q: 스팸으로 표시된 전화를 바로 음성사서함으로 보낼 수 있나요?**

네. IVR 시간초과/잘못된 입력을 통해 라우팅하거나, 처리 상태 = 스팸 전화일 때 **Inbound, Voice**를 음성사서함으로 보내는 워크플로우 분기를 추가하세요.

**Q: 이게 발신 다이얼링에 영향을 주나요?**

**Inbound**로 구성된 DND 설정은 해당 연락처에 대한 발신 전화를 차단하지 않습니다. 방향과 채널을 의도적으로 선택하세요.

**Q: SMS 스팸도 필터링할 수 있나요?**

추가 **Channels** (예: SMS)에 DND를 적용할 수 있습니다. 먼저 영향을 평가하고, SMS vs Voice에 대한 별도 로직을 고려하세요.

**Q: IVR이 필수인가요?**

아니요. IVR은 선택사항입니다. 많은 비즈니스가 Number Intelligence + 처리 상태 → DND만 사용합니다. 특히 긴급 대응 사용 사례에서 그렇습니다.

---
*원문 최종 수정: Fri, 13 Feb, 2026 at 12:48 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*