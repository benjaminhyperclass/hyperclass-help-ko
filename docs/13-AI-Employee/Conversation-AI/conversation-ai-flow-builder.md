---

번역일: 2026-04-08
카테고리: AI 직원 > 대화 AI
---

# 대화 AI 플로우 빌더

대화 AI에서 봇을 구축할 때 중요한 옵션 중 하나가 플로우 기반 빌더(Flow Based Builder)입니다. 대화 로직을 구성하는 시각적 인터페이스를 제공합니다.

---

**목차**

- [플로우 기반 빌더 접근하기](#플로우-기반-빌더-접근하기)
- [봇 설정](#봇-설정)
- [봇 목표](#봇-목표)
- [플로우 기반 빌더](#플로우-기반-빌더)
- [AI 액션](#ai-액션)
  - [AI 액션 - 정보 수집 (자격 검증)](#ai-액션---정보-수집-자격-검증))
  - [AI 액션 - 예약하기](#ai-액션---예약하기)
  - [AI 액션 - 대화 종료](#ai-액션---대화-종료)
  - [AI 액션 - AI 분기](#ai-액션---ai-분기)
  - [AI 액션 - AI 메시지](#ai-액션---ai-메시지)
  - [AI 액션 - 커스텀 메시지](#ai-액션---커스텀-메시지)
  - [AI 액션 - 봇 전환](#ai-액션---봇-전환)
  - [AI 액션 - 대화 계속](#ai-액션---대화-계속)
- [AI 트리거](#ai-트리거)
  - [커스텀 트리거](#커스텀-트리거)
  - [커스텀 트리거 & 조건 분기](#커스텀-트리거--조건-분기)
  - [커스텀 트리거 경로 변경](#커스텀-트리거-경로-변경)

---

## 플로우 기반 빌더 접근하기

AI Agents(AI 에이전트) > Conversation AI(대화 AI) > Create Bot(봇 만들기) 버튼 > Create New Bot(새 봇 만들기) 버튼 (Flow Based Builder(플로우 기반 빌더))로 이동하세요.

대화 AI 플로우 빌더는 자동화(Automations) 워크플로우 빌더와 비슷해 보이지만 여러 면에서 다르게 작동합니다. 이런 차이점들은 해당 부분에서 이런 참고 사항으로 설명됩니다.

![플로우 기반 빌더 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055127605/original/fjdl0fSho8Rmx5ywxt65TabbXpCARG_e6A.png?1759429678)

---

## 봇 설정

Bot Settings(봇 설정) 탭에서:

- 봇 이름을 지정합니다
- Bot Status(봇 상태)를 Auto Pilot(자동 파일럿)으로 설정합니다
- 커뮤니케이션 채널을 선택하거나 선택 해제합니다 (예: SMS, Instagram, Facebook 등)

![봇 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055128002/original/_F4xcZ6LKAJXfaFuQ59m0OqlJEAmiatINQ.png?1759430115)

- max messages(최대 메시지 수)를 100 정도로 설정합니다 (이 플로우는 긴 대화를 처리할 수 있기 때문입니다).

![최대 메시지 수 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055128412/original/H8MxRfzh-tk2SF8XZHYgF5Yk_w01iffP5w.png?1759430658)

- 봇 설정을 저장합니다

---

## 봇 목표

메인 Bot Goals(봇 목표) (성격, 의도 등)는 플로우의 모든 액션에 포함될 글로벌 프롬프트입니다.

Bot Goals(봇 목표) 탭에서 키워드 하나 이상을 선택해서 봇 톤을 설정합니다 (예: friendly(친근한)과 confident(자신감 있는)).

![봇 톤 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055128523/original/lAmR2vcDIGqPkNGshuS7jbfPHW5bdHs2QA.png?1759430860)

문장과 병합 필드를 사용해서 봇의 성격과 스타일을 설명합니다 (예: "You are a bot for {{ai.business_name}}.").

![봇 성격 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055128621/original/HIs9_vHix1uCtvXVHRJdgGM7oA_8bFsShg.png?1759430990)

문장과 병합 필드를 사용해서 대화의 목적을 설명합니다 (예: "Your goal is to help users choose a goal like {{ai.goals}} and book an appointment.").

![대화 목적 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055128717/original/wZ8Mn4ZzKUWsG6SgYjO_p3NgLJdhrp19Iw.png?1759431223)

문장과 병합 필드를 사용해서 추가 정보와 비즈니스 맥락을 설명합니다. 봇이 어떻게 소통해야 하는지 구체적인 예시를 제공하기 좋은 곳입니다 (예: 피할 것: How may I assist you today?, 사용할 것: Hey, how's it going?).

![추가 정보 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055128791/original/L5Ga-uFkeuRczy1yNQRQcb6hif4_mCafJA.png?1759431408)

특별 조건을 지정합니다:

- **Stop Bot(봇 정지)** - 연락처가 워크플로우 어디에 있든, 욕설을 쓰거나 "stop"이라고 말하면 플로우가 즉시 정지됩니다.
- **Human Handover(사람 인계)** - 봇이 답을 모르거나 연락처가 사람을 요청하면 봇이 즉시 정지되고 사람에게 알립니다.
- **Auto Followup(자동 후속)** - 곧 출시 예정!

![특별 조건 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055128878/original/W_Ac_fXX77gB8ZDyU1QaLMper5LHOUZ8Lw.png?1759431562)

Appointment Options(예약 옵션) 토글:

- **Cancel(취소)** - 봇이 예약을 취소할 수 있도록 허용합니다.
- **Reschedule(일정 변경)** - 봇이 예약 일정을 변경할 수 있도록 허용합니다.

![예약 옵션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055129040/original/Wh123TWpecfGW0vcDxJQy6mmMaxTexeLvw.png?1759431759)

Bot Goals(봇 목표)를 저장합니다.

---

## 플로우 기반 빌더

Bot Goals(봇 목표) 탭 > Launch Flow Builder(플로우 빌더 실행) 버튼을 클릭합니다.

![플로우 빌더 실행](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055129166/original/sTD1K5XTkuI3eilLxijQqFPOA8bh_73HCQ.png?1759431899)

"Back to Conversation AI(대화 AI로 돌아가기)"와 "Test Bot(봇 테스트)"가 표시되고 "Workflow"가 아니므로 AI 플로우 빌더에 있다는 것을 알 수 있습니다.

플로우에 [END] 노드가 있는 곳은 목표의 끝을 의미하지, 플로우/채팅의 끝을 의미하지 않습니다. 명시적으로 여러 방법 중 하나로 종료되지 않는 한(예: 최대 메시지 수, 시간 초과, 대화 종료 액션 등) 채팅은 목표 없이 계속됩니다.

![플로우 빌더 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055129847/original/48rD1W6PdCIWDo58XOoHaWsbiXP7O8txpg.png?1759433034)

기본 트리거는 Chat Initiated(채팅 시작)입니다. 이 트리거는 플로우를 시작할 수 있는 유일한 방법입니다.

![기본 트리거](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055130150/original/-3Tofwy9KptUw3YSyRz0dnMolmsVfmmCAg.png?1759433642)

---

## AI 액션

플러스(+)를 클릭해서 액션을 선택합니다. 워크플로우 빌더와 동일한 액션들과 함께 새로운 AI 액션들도 사용할 수 있습니다. AI Actions(AI 액션) 섹션으로 스크롤하세요.

- AI Capture Information(AI 정보 수집) (AI Capture & Qualification(AI 수집 및 자격 검증))
- Book Appointment(예약하기)
- End Conversation(대화 종료)
- AI Splitter(AI 분기)
- AI Message(AI 메시지)
- Custom Message(커스텀 메시지)
- Transfer Bot(봇 전환)
- Continue Conversation(대화 계속)

Capture & Qualify(수집 및 자격 검증) 액션과 Book Appointment(예약하기) 액션은 목표를 달성하거나 종료 기준에 도달할 때까지(예: 최대 시도 횟수) 자율적으로 반복합니다. 다른 메시지 액션들은 특별한 목표 달성 없이 한 번만 메시지를 보냅니다.

![AI 액션 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055130208/original/kGKhMUSVwUotN9JBTfTZLbv6jzkSmlZsXg.png?1759433761)

### AI 액션 - 정보 수집 (자격 검증)

- **Describe the objective(목표 설명)** - 이 특정 목표에 대한 프롬프트나 지시사항을 입력합니다 (최대 500자). 예시: "사용자의 이름을 확인합니다".
- **Update contact field(연락처 필드 업데이트)** (선택사항) - 드롭다운에서 연락처 필드를 선택합니다. 예시: First Name(이름).
- **Additional instructions(추가 지시사항)** - 목표에 대한 보조 지시사항을 설명합니다. 예시: "사용자의 예산이 $5,000 미만이면 진행할 수 없다고 알리되, 그 금액을 공개하지 말고 '저희 기준에 미치지 않는 {사용자가 말한 금액}로는 진행할 수 없습니다'라고만 말하세요."
- **Response example(응답 예시)** - 정확한 형식을 지정합니다. 예시: "USD 통화로 지정: $#,###"
- **Skip objective if field is already filled out(필드가 이미 채워져 있으면 목표 건너뛰기)** - Update Contact Field(연락처 필드 업데이트) 드롭다운을 사용했고, 해당 필드가 연락처 레코드에 이미 채워져 있다면 이 목표는 이미 달성된 것으로 간주되어 건너뜁니다. 예시: 연락처가 Facebook 폼에서 왔다면 이름, 이메일 등은 이미 채워져 있을 것입니다.
- **Maximum attempts(최대 시도 횟수)** - 정수. 봇이 목표를 달성하려고 보낸 자체 메시지 X번 후에 시도를 중단합니다. 예시: 최대:2, 봇:이메일 주소가 어떻게 되시나요?, 사용자:아니요, 봇:연결이 끊어질 경우를 대비해 이메일 주소를 알려주시겠어요?, 사용자:걱정하지 마세요, 봇:[다음 목표로 이동].
- **Don't proceed to the next objective if criteria not met(조건이 충족되지 않으면 다음 목표로 진행하지 않음)** - 마무리 메시지와 함께 대화를 종료합니다. 예시: "감사하지만 예산이 너무 적어서 저희와 맞지 않습니다."
- **Add a tag(태그 추가)** - 이 목표의 마지막 단계로 연락처에 하나 이상의 태그를 추가합니다. 예시: [AI qualified]

![정보 수집 액션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055130299/original/nvT5GWo99VwpKuH7HVYk6QiIS39bvfaVqw.png?1759434069)

### AI 액션 - 예약하기

- 참고: 이 액션은 "예약하지 않겠습니다"와 같은 명확한 종료 기준이 없는 한 예약 목표를 달성하기 위해 여러 메시지를 사용하여 반복 시도합니다.
- **Enter the prompt for calendar booking(캘린더 예약 프롬프트 입력)** - 사용자가 예약하도록 유도하는 방법을 설명합니다.
- **Select calendar(캘린더 선택)** - 드롭다운에서 적절한 캘린더를 선택합니다.
- **Appointment Booked(예약 성공)** - 예약 생성이 성공한 경우의 분기입니다.
- **Appointment not booked(예약 실패)** - 예약 생성이 실패한 경우의 분기입니다.

![예약하기 액션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055132247/original/2Qg2F1NLjKRtixYB0xVBAG4JVMcQ_ODuAA.png?1759437859)

### AI 액션 - 대화 종료

- 참고: 기본적으로 연락처가 플로우의 [END] 노드에 도달하면 그곳에 머물며, 채팅과의 추가 상호작용은 그 맥락에서 이루어집니다. 이 액션은 대화를 확실히 종료하며 계속되지 않습니다.
- **End custom message(종료 커스텀 메시지)** - 사용자에게 보낼 문자 그대로의 메시지를 정의하며, AI가 수정하지 않습니다.
- **Reactivate after bot(봇 이후 재활성화)** - 지연 후 봇이 재활성화되어야 함을 정의하려면 체크합니다.
- **Reactivate after value(재활성화 후 값)** - 봇이 재활성화될 때까지의 시간 단위 수를 지정합니다.
- **Reactivate after unit(재활성화 후 단위)** - 시간 단위를 지정합니다 (예: hours(시간)).

![대화 종료 액션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055132381/original/UeWi8fpgyIOayOMFsMVOY1sIUHYtliE1HA.png?1759438313)

### AI 액션 - AI 분기

- 참고: AI 분기 액션은 메시지를 보내거나 정보를 수집하지 않습니다. 이전에 수집된 정보만 분석합니다.
- **Description(설명)** - 분기 로직을 설명합니다. 예시: 연락처가 어떤 종류의 자동차를 소유하고 있나요?
- **No condition met(조건 없음)** - 최소 기본 분기입니다. 다른 분기가 명확하게 해당되지 않는 경우의 대비책입니다.
- **Branches(분기들)** - [옵션 1] [옵션 2] [옵션 3] [등] AI가 선택할 수 있는 선택지들입니다.

![AI 분기 액션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055131573/original/Z-tjkl3UD5-Xh7LLQw8k6EHkxKeu4-HjOg.png?1759436326)

### AI 액션 - AI 메시지

- 참고: 이 액션은 한 번만 실행됩니다. 목표 달성을 시도하지 않습니다.
- **Enter the prompt for the message(메시지 프롬프트 입력)** - AI가 (그 시점까지의 모든 대화 맥락을 사용해서) 작성하고 보내길 원하는 메시지 유형을 설명합니다. 예시: "저희가 최고의 보험 제공업체라고 사용자에게 알려주세요."
- **Wait for contact reply(연락처 답장 대기)** - 체크하면 답장을 받은 후에만 봇 플로우가 다음 단계로 이동합니다.

![AI 메시지 액션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055131994/original/HI1SeilfPnKirg0mpCQoMzC_c8r3Q7DsCw.png?1759437018)

### AI 액션 - 커스텀 메시지

- 참고: 이 액션은 한 번만 실행됩니다. 목표 달성을 시도하지 않습니다.
- **Enter the message(메시지 입력)** - 사용자가 보길 원하는 문자 그대로의 메시지를 작성합니다. 이 메시지는 수정되지 않고 그대로 전달됩니다. 예시: "저희는 2024년 어워드에 따르면 최고의 보험회사입니다."
- **Wait for contact reply(연락처 답장 대기)** - 체크하면 답장을 받은 후에만 봇 플로우가 다음 단계로 이동합니다.

![커스텀 메시지 액션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055132037/original/vtdsw1CvWTu3hq0LLpWXegDygAxcZPriXQ.png?1759437146)

### AI 액션 - 봇 전환

- 참고: 이것은 연락처를 다른 봇으로 전환하고 **이 플로우를 종료합니다**; 다른 곳에 연락처를 다시 보내는 다른 전환 액션이 없다면 **돌아오지 않습니다**. 이는 비슷하지만 중요한 차이점이 있는 여러 대화 경로가 있을 때 가장 잘 사용됩니다. 모든 것이 하나의 맥락에 있으면 봇이 세부 사항에 혼동할 수 있기 때문입니다. 이것은 하나의 대화 경로 맥락만 가진 봇에게 대화를 보냅니다.
- **Select bot to transfer to(전환할 봇 선택)** - 드롭다운을 사용해서 적절한 봇을 선택합니다. 예시: Car Insurance California, Car Insurance Nevada, Car Insurance Texas.

![봇 전환 액션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055132184/original/SMls_Wa1pvzIcOEtkS_F7yI60C06x2Yt_w.png?1759437614)

### AI 액션 - 대화 계속

- 참고: 기본적으로 연락처가 플로우의 [END] 노드에 도달하면 그곳에 머물며, 채팅과의 추가 상호작용은 그 맥락에서 이루어지지만 달성할 특별한 목표는 없습니다. 이 액션은 사용자가 원한다면 봇이 어떻게 계속 채팅할지에 대한 구체적인 지시사항을 줄 수 있게 해줍니다.
- **Additional instructions(추가 지시사항)** - 사용자가 원한다면 어떻게 계속 채팅할지에 대한 지시사항을 정의합니다.

![대화 계속 액션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055132320/original/pT-VPiPh_nj84fg_Ti1GJ4UcBrpsCcfnOQ.png?1759438115)

---

## AI 트리거

기본 Initiate Chat(채팅 시작) 트리거는 플로우를 시작할 수 있는 유일한 방법입니다. 커스텀 트리거들은 플로우를 시작할 수 없습니다. 연락처가 플로우의 [END] 노드 중 하나에 도달한 후, 그들의 메시지가 커스텀 트리거 중 하나를 발동시켜 플로우의 이전 지점으로 이동시킬 수 있습니다.

가까운 미래에 커스텀 트리거는 ([END] 노드뿐만 아니라) 플로우 중 어느 시점에서나 발동할 수 있게 되고 Sensitivity(민감도) 설정이 적용됩니다.

### 커스텀 트리거

- 참고: 최대 3개의 커스텀 트리거를 가질 수 있습니다.
- **Choose Custom Trigger(커스텀 트리거 선택)** - 드롭다운을 사용해서 미리 만들어진 커스텀 트리거를 선택하거나 (예: Book Another Appointment(다른 예약하기)) 직접 만듭니다.
- **Describe the trigger condition(트리거 조건 설명)** - (초기 채팅과 다른) 커스텀 트리거 조건이 무엇인지 말로 설명합니다. 예시: "사용자가 저희 정책에 대해 알고 싶어합니다."
- **Priority(우선순위)** - 1에서 10을 선택합니다. 동시에 둘 이상의 커스텀 트리거가 발동할 수 있는 경우 어떤 것이 발동될지 제어합니다. 높은 숫자가 더 높은 우선순위입니다.
- **Sensitivity(민감도)** - Low(낮음), Medium(보통), High(높음)을 선택합니다. 커스텀 트리거가 플로우 중간에 발동될지 여부를 제어합니다.
  - Low(낮음) = AI가 현재 플로우를 깨뜨리고 연락처를 트리거로 이동시킬 가능성이 낮습니다.
  - Medium(보통) = AI가 연락처가 플로우를 깨뜨릴지 결정합니다.
  - High(높음) = AI가 거의 항상 연락처를 현재 플로우에서 빼내어 커스텀 트리거로 이동시킵니다.

![커스텀 트리거 설정 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055133991/original/SLWc3V695YUpHs-PsqkCb2CU7ARvcTJa4g.png?1759442875)

![커스텀 트리거 설정 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055133966/original/R6-u5QIgm9dIgnfA9oOIUOvHhNZRDiG7dg.png?1759442818)

### 커스텀 트리거 & 조건 분기

If/Else(조건 분기)와 커스텀 트리거를 결합해서 라우터를 만들 수 있습니다. 커스텀 트리거들을 If/Else Conditional(조건 분기)로 흘러들어가도록 재라우팅하고 각 트리거에 대한 경로를 구성합니다.

- Branch Workflow Trigger Is Chat Initiated(워크플로우 트리거가 채팅 시작인 분기) - 기본 Chat Initiated(채팅 시작) 트리거가 발동된 경우 이 경로를 따릅니다.
- Branch Workflow Trigger is Custom Trigger 1(