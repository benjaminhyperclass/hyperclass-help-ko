---
원문: https://help.gohighlevel.com/support/solutions/articles/155000009291-how-to-connect-and-use-mcp-servers-in-conversation-ai
번역일: 2026-11-06
카테고리: 44-신기능-2026
---

# 대화 AI에서 MCP 서버 연결하고 사용하기

Conversation AI 봇을 MCP(Model Context Protocol) 서버에 연결하면, 고객과 대화하는 중에 외부 애플리케이션과 도구를 쓸 수 있어요. Cal.com으로 예약을 잡거나, Stripe 결제 링크를 보내거나, Google Sheets를 수정하는 일을 대화 안에서 처리해요. 마켓플레이스의 기성 MCP 서버를 연결하거나 직접 만든 서버를 추가할 수 있어요. 이 문서에서는 서버 연결, 사용 지침 설정, 도구 접근 관리, **에이전트 로그**에서 MCP 활동을 확인하는 방법을 안내해요.

## 대화 AI의 MCP 서버 지원이란?

MCP 서버 지원을 켜면 **프롬프트 기반 봇**이 외부 애플리케이션에 연결되어, 고객에게 응답하면서 그 애플리케이션의 도구를 쓸 수 있어요. 봇이 정보를 알려 주는 데서 그치지 않고, 고객의 요청과 설정해 둔 지침에 따라 연결된 시스템에서 지원되는 작업을 직접 실행해요.

Model Context Protocol(MCP)은 AI 에이전트가 외부 도구·서비스와 소통하는 표준 방식이에요.

예를 들어 Conversation AI 봇은 Cal.com에서 예약 가능한 시간을 확인하고 예약을 만들 수 있어요. Stripe로 결제 링크를 보낼 수도 있어요. 연결한 서버와 그 서버가 제공하는 도구에 따라 Google Sheets, Notion 같은 외부 애플리케이션과도 함께 쓸 수 있어요.

MCP 도구는 기존 대화 AI 기능과 함께 작동해요. 기존 기능에는 Custom API 액션, **지식 베이스** 검색, 워크플로우가 있어요.

## MCP 서버를 쓰면 좋은 점

MCP 서버를 연결하면 Conversation AI 봇이 대화 중에 처리할 수 있는 일이 늘어나요. 외부 애플리케이션을 연결하고 도구를 설정하기만 하면 되므로, 애플리케이션마다 별도의 커스텀 연동을 만들 필요가 없어요.

- **외부 작업 실행:** 봇이 대화 중에 예약 잡기, 결제 링크 보내기, 외부 기록 수정하기 같은 작업을 처리해요.
- **기성 애플리케이션 연결:** Stripe, Google Sheets, Google Calendar, Notion, Zapier 등 40개가 넘는 마켓플레이스 MCP 서버 중에서 고를 수 있어요.
- **직접 만든 도구 연결:** 이름과 HTTPS URL로 나만의 MCP 서버를 추가해요. 인증 정보는 선택 사항이에요.
- **도구 접근 제어:** 연결한 MCP 서버의 도구 중 Conversation AI 봇이 쓸 도구를 직접 고를 수 있어요.
- **사용 시점 설정:** 봇이 각 서버를 호출할 상황을 정하고, 호출한 뒤에 할 말도 정할 수 있어요.
- **실행 모니터링:** **에이전트 로그**에서 MCP 도구 호출과 **성공**/**실패** 상태를 확인해요.

## 사전 준비와 제한 사항

MCP 서버를 연결하기 전에 Conversation AI 봇이 지원 조건을 갖췄는지 확인하세요. MCP는 봇 유형, 작동 모드, **실험실** 활성화 여부에 따라 사용할 수 있어요.

**사전 준비**

- **실험실**에서 **MCP support for Conversation AI**(대화 AI의 MCP 지원)를 켜세요.
- 대화 AI에서 **프롬프트 기반 봇**을 사용하세요.
- 수신 대화에서 봇이 **오토 파일럿** 모드로 작동하도록 설정하세요.
- 연결하려는 외부 애플리케이션의 연결 과정에서 계정이 필요하면, 해당 애플리케이션 계정을 준비하세요.
- 직접 만든 MCP 서버를 연결하려면 서버의 **HTTPS URL**과 필요한 인증 정보를 준비하세요.

Conversation AI 봇을 처음 만든다면 [Conversation AI 봇 설정하기](../13-AI-Employee/how-to-set-up-a-conversation-ai-bot.md)를 먼저 확인해 보세요.

**제한 사항**

- **지원 모드:** 현재 MCP 서버는 수신 대화에서 **오토 파일럿** 모드로 작동하는 프롬프트 기반 봇에서만 쓸 수 있어요.
- **미지원 모드:** **제안 모드**와 플로우 봇에서는 아직 MCP 서버를 쓸 수 없어요.
- **서버 수 제한:** 봇 하나에 MCP 서버를 최대 5개까지 연결할 수 있어요.
- **도구 수 제한:** 릴리스 안내에는 최대 100개로 명시되어 있어요.
- **도구 제공 범위:** 봇이 쓸 수 있는 작업은 연결한 MCP 서버가 제공하는 도구에 따라 달라져요.

## MCP 서버 설정하기

MCP 설정은 **실험실** 기능 켜기, 외부 서버 또는 직접 만든 서버 연결, 봇이 쓸 도구 정하기 순서로 진행해요. 지원되는 대화에서 MCP 활동을 테스트하기 전에 아래 단계를 모두 마치세요.

### 1단계: 실험실에서 MCP 지원 켜기

**실험실**에서 MCP 지원을 켜야 Conversation AI 봇 빌더에 새로운 MCP 서버 섹션이 나타나요. **실험실**에 대한 자세한 내용은 [Labs 기능 전체 개요](../19-에이전시-뷰/Agency-Settings/labs-features-complete-overview.md)에서 볼 수 있어요.

1. **서브 계정 보기**에서 왼쪽 메뉴의 **설정**을 선택하세요.
2. **실험실**을 선택하세요.
3. **MCP support for Conversation AI** 기능을 찾으세요.
4. 기능을 켜세요.
5. 대화 AI로 돌아가 해당 봇 편집 화면을 다시 여세요.

### 2단계: 봇 빌더에서 MCP 서버 열기

MCP 서버 섹션은 프롬프트 기반 봇 편집 화면 안에 있어요. 이곳에서 외부 애플리케이션을 연결하고, 봇이 쓸 서버를 관리해요.

1. **서브 계정 보기**에서 왼쪽 메뉴의 **AI 에이전트**를 선택하세요.
2. **대화 AI**를 선택하세요.
3. **에이전트 목록**을 여세요.
4. 설정할 프롬프트 기반 봇을 선택하세요.
5. 오른쪽 설정 패널에서 **MCP Servers**(MCP 서버)를 찾아 펼치세요.
6. **Connect MCP Server**(MCP 서버 연결)를 클릭하세요.

MCP 서버 선택 창이 열려요. 여기서 마켓플레이스에 있는 기존 커넥터를 고르거나 직접 만든 서버를 추가할 수 있어요.

![MCP 서버 선택 창](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084013734/original/U8XGmQQA6XXlCDNSAmMj_iQ2p4-7oAGF-g.png?1792719807)

### 3단계: 마켓플레이스에서 MCP 서버 연결하기

MCP 마켓플레이스에는 지원되는 외부 애플리케이션용 기성 커넥터가 있어요. 목록을 검색하고 서버 상세 정보를 확인한 뒤, 봇이 쓸 외부 계정을 연결하세요.

1. MCP 서버 선택 창에서 **Search apps...**(앱 검색...) 입력란을 찾으세요.
2. 연결할 애플리케이션을 검색하세요. 예를 들어 **Cal.com**, **Stripe**, **Google Sheets**가 있어요.
3. **NOT CONNECTED**(연결 안 됨) 목록에서 해당 애플리케이션을 선택하세요.
4. 설명, 제작자, 커넥터 URL을 확인하세요.
5. **연결**을 클릭하세요.
6. 애플리케이션의 연결 또는 승인 절차를 마치세요.
   - 예를 들어 Cal.com 커넥터에서는 하이퍼클래스가 Cal.com 계정에 접근해도 되는지 묻는 승인 창이 나타나요.
7. 승인 요청이 나타나면 내용을 확인하고 **허용**을 선택하세요.
8. MCP 서버 창으로 돌아가 해당 애플리케이션이 **CONNECTED**(연결됨) 아래에 표시되는지 확인하세요.

![마켓플레이스 애플리케이션 연결 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084013750/original/o4hn1qfggAbyQocq9ceKMLcdUOsOfotvlQ.png?1792719881)

![승인 요청 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084013753/original/avBlonPQht5tUc1-htgSX8m7LuPYQdxxZg.png?1792719921)

### 4단계: 직접 만든 MCP 서버 추가하기

필요한 애플리케이션이 마켓플레이스 기성 커넥터에 없다면 HTTPS URL로 직접 만든 MCP 서버를 추가할 수 있어요. 호환되는 외부 서버나 내부에서 운영하는 서버를 연결해 그 서버의 도구를 쓸 수 있어요.

직접 만든 서버를 추가하려면 다음 순서대로 하세요.

1. **서브 계정 보기**에서 왼쪽 메뉴의 **AI 에이전트**를 선택하세요.
2. **대화 AI**를 선택하세요.
3. **에이전트 목록**을 여세요.
4. 설정할 프롬프트 기반 봇을 선택하세요.
5. **MCP Servers**를 펼치고 **Connect MCP Server**를 클릭하세요.
6. 서버 선택 창에서 **+ Add custom MCP**(직접 만든 MCP 추가)를 선택하세요.

   ![직접 만든 MCP 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084013548/original/iDgoS2oTS6fT2aZTei9BuOl2W4hTj87TNQ.png?1792718999)

7. 필수 정보를 입력하세요.
   - **이름:** 직접 만든 MCP 서버를 알아볼 수 있는 이름을 입력하세요.
   - **MCP server URL**(MCP 서버 URL): 서버의 HTTPS URL을 입력하세요.
8. 연결에 추가 인증 설정이 필요하면 **고급**을 펼치세요.
9. 해당하는 항목을 확인하거나 입력하세요.
   - **클라이언트 ID:** 선택 사항이에요.
   - **Client secret**(클라이언트 시크릿): 선택 사항이에요.
   - **Redirect URI**(리디렉션 URI): 인증 설정에 필요한 URI가 화면에 표시되니 확인하세요.
10. **MCP 추가**를 클릭하세요.

그러면 직접 만든 서버가 MCP 서버 설정 화면에 나타나요.

![직접 만든 MCP 서버 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084013621/original/rCgsMK3hJ4rGeJIhmCLeiicuVMlc4vV9Lw.png?1792719363)

### 5단계: 봇이 MCP 서버를 사용할 시점 설정하기

연결된 MCP 서버를 선택한 뒤에는 봇이 그 서버를 호출할 시점을 정하세요. 지침이 명확해야 봇이 고객의 요청과 그 요청을 처리할 외부 도구를 잘 연결해요. 지침 작성 요령은 [프롬프트로 Conversation AI 에이전트 응답 맞춤 설정하기](../13-AI-Employee/Conversation-AI-Goals-Prompts-and-Actions/customize-your-ai-responses-using-prompts.md)에서 볼 수 있어요.

1. 선택한 서버의 설정 패널에서 **When should this MCP be used?**(이 MCP는 언제 사용해야 하나요?)를 찾으세요.
2. 봇이 이 서버를 사용할 시점을 설명하는 지침을 입력하세요.

   이 항목은 **필수**이고, 최대 500자까지 입력할 수 있어요.
   예시: 고객이 방문을 원하면 비어 있는 시간을 확인하고, 고객이 고른 시간으로 예약하세요.

![MCP 사용 시점 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084013653/original/ViOvd77s7mg-vB2mGYedbkxTzau3YyCZpA.png?1792719451)

고객이 방문을 원하면 비어 있는 시간을 확인하고, 고객이 고른 시간으로 예약하세요.

3. **What to say after using this MCP server**(이 MCP 서버를 사용한 뒤 할 말)를 찾으세요.
4. 서버를 사용한 뒤 봇이 전달할 내용을 지침으로 입력하세요. 입력은 선택 사항이에요.

   이 항목은 최대 300자까지 입력할 수 있어요.

예약 기능을 Conversation AI 봇에 연결하는 방법은 [Conversation AI 예약 부킹](../10-마케팅/appointment-booking-conversation-ai-workflow-action.md)에서도 볼 수 있어요.

### 6단계: 연결된 계정 선택하고 도구 설정하기

MCP 서버마다 봇이 쓸 수 있는 도구 목록이 있어요. 이 목록을 살펴보고, 맡은 업무에 필요한 작업만 봇이 쓰도록 설정하세요.

1. 선택한 MCP 서버의 설정 패널에서 **계정**을 찾으세요.
2. 사용할 연결된 계정을 선택하세요.

   다른 계정을 연결하려면 **+ Add account**(계정 추가)를 쓰세요.
3. **도구** 섹션으로 스크롤하세요.
4. 연결된 서버에서 제공하는 도구를 확인하세요.
5. 특정 도구를 찾으려면 도구 검색란을 쓰세요.
6. 기본적으로 사용 가능한 도구가 모두 선택되어 있어요.
7. 봇이 쓰지 않아야 할 도구는 옆의 체크박스를 해제하세요.

예를 들어 Cal.com MCP 서버는 다음과 같은 도구를 제공해요.

- `get_availability`
- `get_busy_times`
- `get_event_types`
- `get_bookings`
- `create_booking`
- `reschedule_booking`
- `cancel_booking`

봇이 예약 가능 시간 확인과 예약 생성만 하면 된다면, 그 밖의 도구는 선택을 해제해도 돼요.

{% hint style="warning" %}
사용할 수 있는 도구는 연결한 MCP 서버에 따라 달라요. 모든 연동이 같은 작업을 제공한다고 가정하지 말고, 현재 도구 목록을 확인하세요.
{% endhint %}

![연결된 계정과 도구 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084013674/original/T6z3N0uq1v_hmy0kiuZHQFQW9zCcYXy7AQ.png?1792719555)

### 7단계: MCP 설정 저장하고 테스트하기

저장하면 선택한 서버 지침, 계정, 도구 설정이 적용돼요. 실제 고객 대화에서 쓰기 전에 테스트해서 봇이 의도한 지침대로 움직이는지 확인하세요.

1. 선택한 MCP 서버의 사용 지침을 확인하세요.
2. 올바른 연결된 계정이 선택되어 있는지 확인하세요.
3. 쓰려는 도구만 켜져 있는지 확인하세요.
4. MCP 설정 패널 아래쪽의 **저장**을 클릭하세요.
5. **서브 계정 보기**에서 **AI 에이전트**를 선택한 다음 **대화 AI**를 선택하세요.
6. **에이전트 목록**을 열어 설정한 프롬프트 기반 봇을 선택하고 **봇 목표**를 여세요. **봇 목표**에 대한 자세한 내용은 [봇 목표 개요 - 대화 AI](../13-AI-Employee/bot-goals-overview-conversation-ai.md)에서 볼 수 있어요.
7. **봇 테스트하기**를 찾아 MCP 서버와 관련된 고객 요청 예시를 입력하세요.

   예를 들어 Cal.com 커넥터를 쓰고 있다면 예약 요청을 입력해 보세요.
8. 봇의 응답이 설정한 지침과 맞는지 확인하세요.
9. 봇이 **오토 파일럿** 모드로 처리하는 수신 대화를 테스트용으로 만들어 MCP 실행을 확인하세요.
10. **에이전트 로그**에서 MCP 도구 호출 결과를 확인하세요.

## 에이전트 로그에서 MCP 도구 호출 확인하기

**에이전트 로그**에서는 Conversation AI 봇이 대화 중에 수행한 작업을 볼 수 있어요. MCP 서버의 경우 어떤 외부 도구를 호출했는지, 호출이 성공했는지 실패했는지 알 수 있어요. 에이전트 로그에 대한 더 자세한 내용은 [대화 AI - 에이전트 로그](../13-AI-Employee/Conversation-AI/conversation-ai-agent-logs.md)에서 볼 수 있어요.

MCP 활동을 확인하려면 다음 순서대로 하세요.

1. **서브 계정 보기**에서 왼쪽 메뉴의 **AI 에이전트**를 선택하세요.
2. **에이전트 로그**를 선택하세요.
3. **세션** 보기를 여세요.
4. 확인할 세션을 찾으세요. 필터로 연락처, 에이전트, 채널, 기간별로 결과를 좁힐 수 있어요.
5. 해당 세션을 여세요.
6. 대화 내용과 실행 타임라인을 확인하세요.
7. `MCP -` 뒤에 도구 이름이 붙은 항목을 찾으세요.
8. 각 호출이 **성공**으로 표시되는지 **실패**로 표시되는지 확인하세요.

예를 들어 예약 대화에서는 다음과 같은 항목이 나타날 수 있어요.

- `MCP - get_availability`
- `MCP - create_booking`

Stripe가 포함된 대화에서는 결제 관련 도구 호출도 나타날 수 있어요.

로그를 보면 대화를 처리하면서 어떤 외부 도구를 호출했는지 알 수 있어요. 실패한 호출이나 예상과 다른 결과의 원인을 조사할 때도 쓸 수 있어요.

![에이전트 로그의 MCP 도구 호출 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084013720/original/i80tri_AgfWb0bM6f4QVEDW_0ru9nY8-MA.png?1792719733)

## 자주 묻는 질문

### 마켓플레이스 MCP 서버와 직접 만든 MCP 서버를 같은 Conversation AI 봇에 연결할 수 있나요?
네, 가능해요. 봇 하나에 마켓플레이스 커넥터와 직접 만든 MCP 서버를 함께 설정할 수 있어요. 제공된 예시에는 Cal.com과 Stripe, 그리고 직접 만든 Shop inventory 서버가 함께 설정되어 있어요.

### 한 대화에서 봇이 여러 MCP 서버의 도구를 쓸 수 있나요?
네, 가능해요. 릴리스 시연에서는 봇이 Cal.com으로 예약을 잡고 Stripe로 결제 관련 작업을 하면서, 다른 대화 AI 기능도 함께 쓰는 대화를 보여 줘요.

### 직접 만든 MCP 서버는 항상 클라이언트 ID와 Client secret이 필요한가요?
아니요. 직접 만든 MCP 설정에서 두 항목은 모두 선택 사항이에요. 연결하는 MCP 서버의 인증 설정에서 요구할 때만 입력하세요.

### 봇이 대화할 때마다 켜져 있는 MCP 도구를 전부 호출하나요?
아니요. **When should this MCP be used?** 항목이 봇이 서버를 사용할 시점을 정해요. 도구 선택은 봇이 그 서버를 호출했을 때 쓸 수 있는 작업의 범위를 정해요.
