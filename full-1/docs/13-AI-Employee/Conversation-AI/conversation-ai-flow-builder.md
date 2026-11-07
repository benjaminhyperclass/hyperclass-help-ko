---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006515-conversation-ai-flow-builder
번역일: 2026-11-06
카테고리: 13-AI-Employee
---

# 대화 AI 플로 빌더로 단계별 대화 흐름 만들기

대화 AI 플로 빌더는 AI 봇의 목표 지향적인 대화를 화면에서 직접 설계하는 도구예요. 봇이 연락처와 어떻게 대화하고, 정보를 어떻게 수집하고, 어떤 단계로 넘어갈지 흐름으로 그려 볼 수 있어요.

대화 AI의 봇은 플로 빌더 안에서 동작하도록 설정하거나, 워크플로우로 실행되도록 설정할 수 있어요. **플로우 기반 빌더**를 쓰면 대화 로직을 정하고, 응답을 자동화하고, 여러 단계로 이어지는 대화를 비즈니스에 맞게 만들 수 있어요.

## 플로우 기반 빌더 열기

**AI 에이전트**(AI Agents) > **대화 AI** > **Create Bot**(봇 만들기) 버튼 > **새 봇 만들기** 버튼(**플로우 기반 빌더**)으로 이동하세요.

{% hint style="info" %}
대화 AI 플로 빌더는 자동화의 **워크플로우 빌더**와 모양이 비슷하지만, 여러 중요한 부분에서 다르게 동작해요. 다른 점은 해당 위치마다 이와 같은 참고 블록으로 알려 드려요.
{% endhint %}

{% hint style="info" %}
플로 기반 봇은 설정 방식에 따라 동작이 달라져요.

봇이 대화 AI 안에서 정해진 대화 경로를 따라가게 하려면 플로 빌더를 쓰세요. 워크플로우에서 질문을 하고, 답장을 기다리고, 조건에 따라 나누고, 워크플로우 빌더에서 자동화를 이어 가려면 대화 AI 워크플로우 액션을 쓰세요.

이 차이는 봇을 플로의 일부로 실행할지, 워크플로우로 외부에서 실행할지 정할 때 중요해요.
{% endhint %}

![플로우 기반 빌더 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055127605/original/fjdl0fSho8Rmx5ywxt65TabbXpCARG_e6A.png?1759429678)

---

## 봇 설정

**봇 설정** 탭에서 다음을 설정하세요.

- 봇 이름을 입력하세요.
- **봇 상태 설정**을 **Auto Pilot**(자동 운영)으로 지정하세요.
- 봇에 사용할 수 있는 채널 중에서 **SMS**, **Facebook**, **Instagram**, **WhatsApp**, **Live Chat**(실시간 채팅) 같은 통신 채널을 선택하거나 해제하세요.

![봇 이름과 상태, 채널 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055128002/original/_F4xcZ6LKAJXfaFuQ59m0OqlJEAmiatINQ.png?1759430115)

- 최대 메시지 수를 100 정도로 설정하세요. 이 플로는 긴 대화도 처리할 수 있어요.

![최대 메시지 수 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055128412/original/H8MxRfzh-tk2SF8XZHYgF5Yk_w01iffP5w.png?1759430658)

- 봇 설정을 저장하세요.

---

## 봇 목표

{% hint style="info" %}
**봇 목표**(성격, 의도 등)는 플로의 모든 액션에 포함되는 전역 프롬프트예요.
{% endhint %}

**봇 목표** 탭에서 키워드를 하나 이상 골라 봇의 말투를 정하세요. 예를 들어 친근함, 자신감 있음을 선택할 수 있어요.

![봇 말투 키워드 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055128523/original/lAmR2vcDIGqPkNGshuS7jbfPHW5bdHs2QA.png?1759430860)

문장과 병합 필드로 봇의 성격과 스타일을 설명하세요. 예: "당신은 `{{ai.business_name}}`의 봇입니다."

![봇 성격과 스타일 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055128621/original/HIs9_vHix1uCtvXVHRJdgGM7oA_8bFsShg.png?1759430990)

문장과 병합 필드로 대화의 의도를 설명하세요. 예: "당신의 목표는 사용자가 `{{ai.goals}}` 같은 목표를 고르고 예약을 잡도록 돕는 것입니다."

![대화 의도 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055128717/original/wZ8Mn4ZzKUWsG6SgYjO_p3NgLJdhrp19Iw.png?1759431223)

문장과 병합 필드로 추가 정보와 비즈니스 배경을 설명하세요. 봇이 어떻게 말해야 하는지 구체적인 예시를 적어 두기 좋은 곳이에요. 예: 피할 말은 "무엇을 도와드릴까요?", 쓸 말은 "안녕하세요, 잘 지내세요?"

![추가 정보와 비즈니스 배경 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055128791/original/L5Ga-uFkeuRczy1yNQRQcb6hif4_mCafJA.png?1759431408)

고유 조건을 지정할 수 있어요.

- **봇 중지**: 연락처가 플로의 어느 단계에 있든 욕설을 하거나 "그만"이라고 말하면 플로가 즉시 멈춰요.
- **상담원 전환**: 봇이 답을 모르거나 연락처가 상담원을 요청하면 봇이 즉시 멈추고 담당자에게 알려요.
- **자동 후속 조치**: 출시 예정이에요.

![봇 중지, 상담원 전환, 자동 후속 조치 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055128878/original/W_Ac_fXX77gB8ZDyU1QaLMper5LHOUZ8Lw.png?1759431562)

예약 옵션 토글을 켜거나 끌 수 있어요.

- **취소**: **봇이 예약을 취소하도록 허용**
- **일정 변경**: **봇이 예약을 일정 변경하도록 허용**

![예약 옵션 토글](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055129040/original/Wh123TWpecfGW0vcDxJQy6mmMaxTexeLvw.png?1759431759)

봇 목표를 저장하세요.

---

## 플로우 기반 빌더 사용하기

**봇 목표** 탭에서 **플로우 빌더 실행** 버튼을 클릭하세요.

![플로우 빌더 실행 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055129166/original/sTD1K5XTkuI3eilLxijQqFPOA8bh_73HCQ.png?1759431899)

자동화의 **워크플로우 빌더**가 아니라 AI 플로 빌더에 들어왔는지는 화면 상단으로 알 수 있어요. **워크플로우** 대신 **Back to Conversation AI**(대화 AI로 돌아가기)와 **Test Bot**(봇 테스트)이 보여요.

{% hint style="info" %}
플로에 `[END]` 노드가 있다는 것은 목표가 끝난다는 뜻이지, 플로나 채팅이 끝난다는 뜻이 아니에요. 최대 메시지 수, 타임아웃, **End Conversation**(대화 종료) 액션처럼 명시적으로 끝내는 방법이 없으면 채팅은 목표 없이 계속돼요.
{% endhint %}

![플로 빌더 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055129847/original/48rD1W6PdCIWDo58XOoHaWsbiXP7O8txpg.png?1759433034)

기본 트리거는 **Chat Initiated**(채팅 시작됨)예요. 이 트리거가 플로를 시작하는 유일한 방법이에요.

![기본 트리거 Chat Initiated](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055130150/original/-3Tofwy9KptUw3YSyRz0dnMolmsVfmmCAg.png?1759433642)

---

## AI 액션

더하기(+)를 클릭해 액션을 선택하세요. 사용할 수 있는 액션은 **워크플로우 빌더**와 같고, 새로운 AI 액션이 더해져 있어요. **AI Actions**(AI 액션) 섹션까지 스크롤하세요.

- **정보 수집**(Capture & Qualification)
- **예약하기**
- **End Conversation**(대화 종료)
- **AI Splitter**(AI 분기)
- **AI 메시지**
- **사용자 지정 메시지**
- **전달 봇**
- **Continue Conversation**(대화 이어가기)

{% hint style="info" %}
**정보 수집** 액션과 **예약하기** 액션은 목표를 달성하거나 종료 조건(예: 최대 시도 횟수)에 도달할 때까지 스스로 반복해요. 다른 메시지 액션은 메시지를 한 번만 보내고, 무언가를 달성하려 하지 않아요.
{% endhint %}

![AI 액션 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055130208/original/kGKhMUSVwUotN9JBTfTZLbv6jzkSmlZsXg.png?1759433761)

### AI 액션 - 정보 수집

- **Describe the objective**(목표 설명): 이 목표에 대한 프롬프트나 지시를 입력해요(최대 500자). 예: "사용자의 이름 알아내기"
- **연락처 필드 업데이트**(선택): 드롭다운에서 연락처 필드를 선택해요. 예: 이름(First Name)
- **추가 지침**: 목표를 뒷받침하는 안내를 적어요. 예: "예산이 5,000달러 미만이면 더 진행할 수 없다고 알리되, 그 금액은 밝히지 마세요. 최소 예산 기준은 말하지 않고 '그 예산으로는 진행하기 어렵습니다'라고만 안내하세요."
- **Response example**(응답 예시): 정확한 형식을 지정해요. 예: "USD 통화로 지정: $#,###"
- **Skip objective if field is already filled out**(필드가 이미 채워져 있으면 목표 건너뛰기): **연락처 필드 업데이트** 드롭다운을 사용했고 연락처 레코드에 그 필드가 이미 채워져 있다면, 이 목표는 이미 달성된 것으로 보고 건너뛰어요. 예: 연락처가 Facebook 폼에서 들어왔다면 이름, 이메일 등이 이미 채워져 있을 가능성이 높아요.
- **Maximum attempts**(최대 시도 횟수): 정수를 입력해요. 봇이 목표를 이루려고 보낸 메시지가 이 횟수에 이르면 더 이상 시도하지 않아요. 예: 최대 2회로 설정한 경우
  - 봇: 이메일 주소가 어떻게 되세요?
  - 사용자: 아니요.
  - 봇: 연결이 끊어질 때를 대비해 다시 연락드릴 이메일 주소를 알려 주시겠어요?
  - 사용자: 신경 쓰지 마세요.
  - 봇: [다음 목표로 넘어감]
- **Don't proceed to the next objective if criteria not met**(기준을 충족하지 못하면 다음 목표로 진행하지 않기): 마무리 메시지를 보내고 대화를 끝내요. 예: "감사합니다만, 예산이 저희와 맞지 않습니다."
- **Add a tag**(태그 추가): 이 목표의 마지막 단계에서 연락처에 태그를 하나 이상 추가해요. 예: [AI 적격]

![정보 수집 액션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055130299/original/nvT5GWo99VwpKuH7HVYk6QiIS39bvfaVqw.png?1759434069)

### AI 액션 - 예약하기

{% hint style="info" %}
이 액션은 "예약하고 싶지 않아요"처럼 분명한 종료 조건이 없으면, 예약을 잡는다는 목표를 이루려고 여러 메시지로 반복해요.
{% endhint %}

- **Enter the prompt for calendar booking**(캘린더 예약 프롬프트 입력): 사용자가 예약하도록 어떻게 유도할지 설명해요.
- **캘린더 선택**: 드롭다운에서 알맞은 캘린더를 선택해요.
- **예약 완료**: 예약이 성공적으로 만들어졌을 때 이어지는 분기예요.
- **예약되지 않음**: 예약이 만들어지지 않고 실패했을 때 이어지는 분기예요.

![예약하기 액션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055132247/original/2Qg2F1NLjKRtixYB0xVBAG4JVMcQ_ODuAA.png?1759437859)

### AI 액션 - End Conversation

{% hint style="info" %}
기본적으로 연락처가 플로의 `[END]` 노드에 도착하면 그 자리에 머물고, 이후 채팅은 그 맥락에서 이어져요. 이 액션은 대화를 확실하게 끝내고, 이후에는 대화를 이어 가지 않아요.
{% endhint %}

- **End custom message**(종료 메시지 직접 입력): 사용자에게 보낼 문구를 그대로 입력해요. AI가 수정하지 않아요.
- **Reactivate after bot**(봇 재활성화): 일정 시간이 지난 뒤 봇을 다시 활성화하려면 체크해요.
- **Reactivate after value**(재활성화 대기 값): 봇을 다시 활성화하기까지 기다릴 시간 단위의 개수를 입력해요.
- **Reactivate after unit**(재활성화 대기 단위): 시간 단위를 지정해요. 예: 시간

![End Conversation 액션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055132381/original/UeWi8fpgyIOayOMFsMVOY1sIUHYtliE1HA.png?1759438313)

### AI 액션 - AI Splitter

{% hint style="info" %}
**AI Splitter** 액션은 메시지를 보내거나 정보를 수집하지 않아요. 앞서 수집한 정보를 분석하기만 해요.
{% endhint %}

- **설명**: 분기 로직을 설명해요. 예: 연락처가 어떤 종류의 차를 가지고 있나요?
- **No condition met**(해당 조건 없음): 기본으로 있는 최소 분기예요. 다른 분기 중 뚜렷하게 맞는 것이 없을 때를 위한 포괄 분기예요.
- **Branches**(분기): [옵션 1] [옵션 2] [옵션 3] 등 AI가 고를 수 있는 선택지예요.

![AI Splitter 액션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055131573/original/Z-tjkl3UD5-Xh7LLQw8k6EHkxKeu4-HjOg.png?1759436326)

### AI 액션 - AI 메시지

{% hint style="info" %}
이 액션은 한 번만 실행돼요. 목표를 달성하려고 시도하지 않아요.
{% endhint %}

- **Enter the prompt for the message**(메시지 프롬프트 입력): 그 시점까지의 대화 맥락을 모두 활용해 AI가 작성하고 보낼 메시지의 종류를 설명해요. 예: "우리가 최고의 보험 제공업체라고 사용자에게 알려 주세요."
- **Wait for contact reply**(연락처 답장 대기): 체크하면 답장을 받은 뒤에야 봇 플로가 다음 단계로 넘어가요.

![AI 메시지 액션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055131994/original/HI1SeilfPnKirg0mpCQoMzC_c8r3Q7DsCw.png?1759437018)

### AI 액션 - 사용자 지정 메시지

{% hint style="info" %}
이 액션은 한 번만 실행돼요. 목표를 달성하려고 시도하지 않아요.
{% endhint %}

- **Enter the message**(메시지 입력): 사용자에게 보여 줄 문구를 그대로 써요. 문구는 수정되지 않고 입력한 그대로 전달돼요. 예: "저희는 Awards 2024에서 최고의 보험사로 선정되었습니다."
- **Wait for contact reply**(연락처 답장 대기): 체크하면 답장을 받은 뒤에야 봇 플로가 다음 단계로 넘어가요.

![사용자 지정 메시지 액션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055132037/original/vtdsw1CvWTu3hq0LLpWXegDygAxcZPriXQ.png?1759437146)

### AI 액션 - 전달 봇

{% hint style="info" %}
이 액션은 연락처를 다른 봇으로 전달하고 현재 플로에서 빠져나가요. 다른 곳에 연락처를 되돌려 보내는 전달 액션을 따로 두지 않으면 돌아오지 않아요. 비슷하지만 중요한 차이가 있는 대화 경로가 여러 개일 때 쓰면 좋아요. 모든 경로가 한 맥락에 있으면 봇이 세부 내용을 헷갈릴 수 있어요. 이 액션을 쓰면 대화 경로 하나의 맥락만 가진 봇으로 대화를 넘겨요.
{% endhint %}

- **Select bot to transfer to**(전달할 봇 선택): 드롭다운에서 알맞은 봇을 선택해요. 예: 자동차 보험 캘리포니아, 자동차 보험 네바다, 자동차 보험 텍사스

![전달 봇 액션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055132184/original/SMls_Wa1pvzIcOEtkS_F7yI60C06x2Yt_w.png?1759437614)

### AI 액션 - Continue Conversation

{% hint style="info" %}
기본적으로 연락처가 플로의 `[END]` 노드에 도착하면 그 자리에 머물고, 이후 채팅은 달성할 특정 목표 없이 그 맥락에서 이어져요. 이 액션을 쓰면 사용자가 원할 때 봇이 대화를 어떻게 이어 갈지 구체적으로 지시할 수 있어요.
{% endhint %}

- **추가 지침**: 사용자가 원할 때 대화를 어떻게 이어 갈지 지침을 입력해요.

![Continue Conversation 액션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055132320/original/pT-VPiPh_nj84fg_Ti1GJ4UcBrpsCcfnOQ.png?1759438115)

---

## AI 트리거

{% hint style="info" %}
기본 **Chat Initiated** 트리거가 플로를 시작하는 유일한 방법이에요. **사용자 지정 트리거**로는 플로를 시작할 수 없어요. 연락처가 플로의 `[END]` 노드 중 하나에 도착한 뒤에는, 연락처의 메시지로 **사용자 지정 트리거**가 실행되어 플로의 앞쪽 지점으로 이동시킬 수 있어요.

가까운 시일 내에 **사용자 지정 트리거**는 `[END]` 노드뿐 아니라 플로 중간 어디서든 실행될 수 있게 되고, **Sensitivity**(민감도) 설정이 적용돼요.
{% endhint %}

### 사용자 지정 트리거

{% hint style="info" %}
사용자 지정 트리거는 최대 3개까지 만들 수 있어요.
{% endhint %}

- **Choose Custom Trigger**(사용자 지정 트리거 선택): 드롭다운에서 미리 만들어진 사용자 지정 트리거(예: 다른 예약 잡기)를 고르거나 직접 만들어요.
- **Describe the trigger condition**(트리거 조건 설명): 사용자 지정 트리거의 조건을 말로 설명해요. 첫 채팅과는 다른 조건이어야 해요. 예: "사용자가 우리 정책에 대해 알고 싶어 해요."
- **우선순위**: 1부터 10까지 선택해요. 두 개 이상의 사용자 지정 트리거가 동시에 실행될 수 있을 때 어느 것이 실행될지 정해요. 숫자가 클수록 우선순위가 높아요.
- **Sensitivity**(민감도): **Low**(낮음), **Medium**(중간), **High**(높음) 중에서 선택해요. 플로 도중에 사용자 지정 트리거가 실행될지를 정해요.
  - **Low**: AI가 현재 플로를 벗어나 연락처를 트리거로 이동시킬 가능성이 낮아요.
  - **Medium**: 연락처가 플로를 벗어날지 AI가 판단해요.
  - **High**: AI가 거의 항상 연락처를 현재 플로에서 벗어나게 하고 사용자 지정 트리거로 이동시켜요.

![사용자 지정 트리거 설정 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055133991/original/SLWc3V695YUpHs-PsqkCb2CU7ARvcTJa4g.png?1759442875)

![사용자 지정 트리거 설정 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055133966/original/R6-u5QIgm9dIgnfA9oOIUOvHhNZRDiG7dg.png?1759442818)

### 사용자 지정 트리거와 If/Else

**If/Else**(조건 분기)와 **사용자 지정 트리거**를 함께 쓰면 라우터처럼 만들 수 있어요. 사용자 지정 트리거들이 **If/Else** 조건으로 이어지게 연결하고, 트리거마다 경로를 설정하세요.

- **Branch**(분기) 조건 **워크플로우 트리거**가 **Chat Initiated**일 때: 기본 **Chat Initiated** 트리거가 실행됐다면 이 경로를 따라요.
- **Branch** 조건 **워크플로우 트리거**가 **사용자 지정 트리거 1**일 때: 사용자 지정 트리거 1이 실행됐다면 이 경로를 따라요.
- **Branch** 조건 **워크플로우 트리거**가 **사용자 지정 트리거 2**일 때: 사용자 지정 트리거 2가 실행됐다면 이 경로를 따라요.
- **Branch** 조건 **워크플로우 트리거**가 **사용자 지정 트리거 3**일 때: 사용자 지정 트리거 3이 실행됐다면 이 경로를 따라요.

![If/Else 라우터 구성 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055134222/original/HZt6DmN-a252NtJzv3cKBCfJYTjYLgJTOA.png?1759444027)

![If/Else 라우터 구성 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055134324/original/VDRiAl7verKNSucnBZvTFK58o7Rs1S2IAA.png?1759444469)

### 사용자 지정 트리거 경로 바꾸기

1. 사용자 지정 트리거 아래쪽의 링크 끊기 아이콘을 클릭하세요.
2. 창이 열리면 **Remove Path**(경로 제거) 버튼을 클릭하세요.
3. 새 경로로 이어 갈 액션을 클릭하세요. 선택할 수 있는 액션은 녹색으로 강조돼요.

![링크 끊기 아이콘 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055134293/original/ZMFt9QLjLiB3DTADyaYQ8pQcJpnS9dNVlw.png?1759444261)

![새 경로로 이어 갈 액션 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055134300/original/hXnNlBL6Nlmxo2hLlBh3mJk0hcg3wYAA3w.png?1759444317)

---

## 자주 묻는 질문

### 플로 빌더 봇은 Chat Initiated 말고 다른 트리거로 시작할 수 있나요?
플로 빌더 봇은 **Chat Initiated**에서 시작해요. 사용자 지정 트리거는 연락처가 설정한 트리거 조건을 충족한 뒤 경로를 나눌 때 써요.

### [END] 노드에 도착하면 대화가 완전히 끝나나요?
아니요. `[END]` 노드는 현재 목표 경로를 끝내지만, **End Conversation**이나 최대 메시지 수, 타임아웃 같은 다른 종료 조건을 쓰지 않으면 대화는 계속될 수 있어요.

### 목표를 달성할 때까지 계속 시도하는 AI 액션은 무엇인가요?
**정보 수집**과 **예약하기**는 목표를 달성하거나 종료 조건에 도달할 때까지 반복할 수 있어요.

### AI 메시지와 사용자 지정 메시지는 무엇이 다른가요?
**AI 메시지**는 입력한 프롬프트와 대화 맥락을 바탕으로 응답을 만들어 내요. **사용자 지정 메시지**는 입력한 문구를 그대로 보내요.

### 플로 안에서 연락처를 다른 봇으로 보낼 수 있나요?
네. **전달 봇**을 사용하면 연락처를 다른 봇으로 보낼 수 있어요. 다른 전달 액션이 연락처를 되돌려 보내지 않는 한, 연락처는 현재 플로에서 빠져나가요.

---

## 함께 보면 좋은 문서

- [대화 AI 설정하기](../how-to-set-up-a-conversation-ai-bot.md)
- [대화 AI 고급 봇 설정](../Getting-Started-w/Conversation-AI/advanced-settings-overview-conversation-ai.md)
- [대화 AI 에이전트 대시보드](conversation-ai-agents-dashboard.md)
