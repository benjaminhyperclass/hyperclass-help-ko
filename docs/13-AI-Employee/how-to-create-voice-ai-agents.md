---

번역일: 2026-04-06
카테고리: 13-AI-Employee
---

# 음성 AI 에이전트 생성하기

음성 AI 에이전트(Voice AI Agent) 생성은 빠르고 쉽습니다. 음성 AI가 전화를 대신 받아주면 직원들은 따뜻한 리드 후속 관리나 계약 성사 같은 더 중요한 업무에 집중할 수 있어요! 아래 단계를 따라 첫 번째 음성 AI 에이전트를 설정해보세요!

권한 안내: 음성 AI 접근은 역할 기반 권한으로 제어됩니다. AI 직원(AI Agents) 메뉴에서 음성 AI(Voice AI)가 보이지 않는다면, 사용자 역할에 음성 AI 권한이 포함되지 않았을 수 있습니다. 관리자에게 음성 AI 접근 권한을 요청하세요.

**목차**

- [음성 AI 에이전트 생성하기](#음성-ai-에이전트-생성하기)
- [음성 AI 에이전트 세부사항 구성하기](#음성-ai-에이전트-세부사항-구성하기)
- [에이전트 세부사항 탭](#에이전트-세부사항-탭)
- [에이전트 목표 탭](#에이전트-목표-탭)
- [워크플로우 트리거](#워크플로우-트리거)
- [이메일 알림](#이메일-알림)
- [전화번호 및 이용 가능 시간 탭](#전화번호-및-이용-가능-시간-탭)
- [생성 중 음성 AI 에이전트 테스트하기](#생성-중-음성-ai-에이전트-테스트하기)
- [인바운드 음성 AI 에이전트에 연결하기 (위젯 또는 URL)](#인바운드-음성-ai-에이전트에-연결하기-위젯-또는-url)
- [전화번호 공개하기 (tel: 링크를 통한 공유 가능한 "URL")](#전화번호-공개하기-tel-링크를-통한-공유-가능한-url)
- [AI 에이전트 편집 및/또는 삭제하기](#ai-에이전트-편집-및또는-삭제하기)

# 음성 AI 에이전트 생성하기

- 하위 계정(Sub-account)에 로그인하세요.

- AI 직원(AI Agents) 탭 > **음성 AI(Voice AI)**를 클릭하세요.

![음성 AI 메뉴](https://jumpshare.com/share/qIIM5HWhxZuKX47ECUmy+/Screen+Shot+2026-03-17+at+19.09.16.png)

- **+ 에이전트 생성(Create Agent)** 버튼을 클릭하세요.

![에이전트 생성 버튼](https://jumpshare.com/share/Nt7lPIZin7ewgWjsA3QU+/Screen+Shot+2026-03-17+at+19.11.08.png)

- **처음부터 에이전트 생성(Create an Agent from scratch)** 또는 **마켓플레이스(Marketplace)**에서 **미리 만들어진 에이전트(prebuilt agents)**를 선택할 수 있어요.

- 원하는 방법을 선택하고 **계속(Continue)**을 클릭하세요.

![에이전트 생성 방법 선택](https://jumpshare.com/share/ZSYD0YVF1skQFqkXwHCk+/Screen+Shot+2026-03-17+at+19.12.29.png)

# 음성 AI 에이전트 세부사항 구성하기

음성 AI 에이전트를 구성할 때는 AI 에이전트 설정, 전화 통화 후 발생할 액션 지정, 하위 계정의 전화번호에 AI 에이전트 연결을 포함한 다단계 프로세스를 따라야 해요.

## 에이전트 세부사항 탭

- 에이전트 이름(Agent Name): 에이전트 이름을 입력하세요 (예: "고객지원 봇").

- 비즈니스 이름(Business Name): 비즈니스 이름을 확인하거나 업데이트하세요.

- 음성(Voice): AI 에이전트를 위한 이용 가능한 음성 목록에서 선택하세요. 재생 버튼을 클릭하여 각 음성을 미리 들어볼 수 있어요.

- 시간대(Timezone): 비즈니스의 시간대를 선택하세요.

- LLM: 선호하는 LLM 모델을 선택하세요.

![에이전트 세부사항 설정](https://jumpshare.com/share/vjEtB31jnSglGwdrHafg+/Screen+Shot+2026-03-17+at+19.22.47.png)

- 고급 설정(Advanced Settings): **통화 설정(Call Settings)**, **에이전트 행동(Agent Behavior)**, **음성 인식(Transcription)** 및 **음성 설정(Speech Settings)** & 음성 설정을 구성하세요.

![고급 설정](https://jumpshare.com/share/TooYjdkpNYTuynk7gYS0+/GIF+Recording+2026-03-17+at+19.27.49.gif)

- 인사말 메시지 구성(Greeting Message Configuration): 인바운드(Inbound) 및 아웃바운드(Outbound) 통화 모두에 대해 에이전트가 말하는 첫 메시지를 커스터마이즈하세요 (예: "안녕하세요, [비즈니스 이름]에 연결되셨습니다. 오늘 어떻게 도와드릴까요?"). 또한 말하기 전 대기 시간(Wait Time Before Speaking)을 선택하세요.

- **다음(Next)**을 클릭하세요.

![인사말 메시지 설정](https://jumpshare.com/share/izpLKakCPkb2JA4VtiqQ+/GIF+Recording+2026-03-17+at+19.32.52.gif)

## 에이전트 목표 탭

에이전트 목표 설정을 위해 두 가지 옵션이 있어요: 기본 모드(Basic Mode) 또는 고급 모드(Advanced Mode).

접근 제어(보기 vs 관리): 역할에 음성 AI 에이전트 목표 보기 및 관리 권한이 포함되지 않은 경우, 에이전트 목표 영역이 보기 전용이고 편집이 비활성화될 수 있어요. 이 경우 최신 음성 AI 경험으로의 업그레이드도 차단될 수 있습니다.

### 기본 모드(Basic Mode)

기본 모드는 통화 중 음성 AI 에이전트에게 지시할 수 있는 옵션을 적게 제공하여 음성 AI 에이전트 설정 프로세스를 단순화해요. 프롬프팅이 필요하지 않아요!

- **지식 베이스(Knowledge Base)**를 선택하세요.

- 에이전트가 발신자로부터 수집할 정보를 선택하세요: **이름(Name)**, **이메일(Email)**, **주소(Address)**, **연락처 문제(Contact's issue)**.

- 통화 완료 후 트리거할 워크플로우(Workflow)를 선택하세요.

- 통화 완료 후 **이메일 알림(Email Notification)**을 받을 사람을 선택하세요.

![기본 모드 설정](https://jumpshare.com/share/0j8vEw9zE1gNrhXr3yLY+/Screen+Shot+2026-03-17+at+19.39.49.png)

### 고급 모드(Advanced Mode)

고급 모드를 사용하면 프롬프트와 다양한 액션 등 AI 에이전트를 제어할 수 있는 더 많은 옵션이 제공돼요.

프롬프팅에 대해 더 자세히 알아보려면 이 아티클들을 확인하세요:

[AI 프롬프팅 101](Conversation-AI---Goals,-Prompts,-&-Actions/ai-prompting-101.md)
음성 AI에서 프롬프트 평가기 사용법
음성 AI - 에이전트용 노출된 시스템 프롬프트
[음성 AI 커스텀 변수 프롬프트 지원](Voice-AI/voice-ai-custom-variable-support-in-prompt.md)

- **고급 모드로 전환(Switch to Advanced Mode)** 버튼을 클릭하세요.

![고급 모드 전환](https://jumpshare.com/share/zDmlLH2hWoWZvfLnueW4+/Screen+Shot+2026-03-17+at+19.47.31.png)

- **지식 베이스(Knowledge Base)**를 선택하세요.

- 프롬프트(Prompt): 에이전트를 위한 자세한 지시사항과 성격 특성을 작성하세요.

프롬프트 편집기 도구 모음 및 단축키

고급 모드에서 프롬프트를 편집할 때, 프롬프트 편집기에는 빠른 작업을 위한 도구 모음이 포함되어 있어요:

실행 취소(Undo) 및 다시 실행(Redo): 최근 프롬프트 변경 사항을 되돌리거나 다시 적용합니다.
- 커스텀 값(Custom Value): 지원되는 값을 프롬프트에 삽입합니다.
- 평가(Evaluate): 변경 사항을 발행하기 전에 프롬프트 평가를 실행하여 피드백을 받습니다.

- 키보드 단축키:

**실행 취소:** Cmd + Z (Mac) / Ctrl + Z (Windows)
다시 실행: Cmd + Shift + Z (Mac) / Ctrl + Y (Windows)

![프롬프트 편집기](https://jumpshare.com/share/44MXmOe7WLVipYwIdvBl+/Screen+Shot+2026-03-06+at+19.49.21.png)

- 액션(Actions) 설정:
통화 전환(Call Transfer): 특정 조건 하에서 통화를 사람 에이전트에게 전환합니다.

- 워크플로우 트리거(Trigger a Workflow): 통화 상호작용을 기반으로 워크플로우를 자동으로 시작합니다.

- SMS 발송(Send SMS): 통화 중 또는 통화 후 SMS 메시지를 발송하도록 에이전트를 구성합니다.

- 연락처 필드 업데이트(Update Contact Fields): 수집된 정보로 연락처 레코드를 업데이트하는 방법을 지정합니다.

- 예약(Appointment Booking).

- **커스텀 액션(Custom Action)**.

- **MCP 추가(Add MCP)** (베타)

![액션 설정](https://jumpshare.com/share/OdPRE5LnSGo9HnJfOHAZ+/Screen+Shot+2026-03-17+at+19.58.29.png)

- **다음(Next)**을 클릭하세요.

### 워크플로우 트리거

음성 AI 에이전트로 통화 종료 후 단일 워크플로우 또는 여러 워크플로우를 트리거할 수 있는 옵션이 있어요. 이렇게 하면 워크플로우 트리거링이 간단해지고 통화에 관련된 AI 에이전트를 기반으로 음성 AI 에이전트의 모든 워크플로우 진입을 제어할 수 있어요.

![워크플로우 트리거](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035814793/original/AaVhDvNIim1ZcaBQHFZpYDcULGB_61biyg.gif?1730404561)

번역 참고사항(통화 후 출력): 음성 AI 번역이 활성화되어 있으면, 통화 후 출력에는 번역된 요약과 녹취록이 포함될 수 있어요. 통화 후 트리거된 워크플로우는 번역된 필드를 사용할 수 있고, 통화 후 알림에는 번역된 결과물이 표시될 수 있어요.

### 이메일 알림

해당 AI 에이전트가 관련된 통화가 종료된 후 개인 또는 여러 사람에게 이메일을 보내세요.

![이메일 알림](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035814808/original/I7KXFj9nJ2NSpmBGENIFdVXg7jxx-VXHtw.gif?1730404590)

이메일 알림에는 다음 데이터가 포함됩니다:

- 통화 요약(Call Summary): 통화 시간, 날짜 및 시간 개요.

- 연락처 정보(Contact Information): 통화 중 수집된 세부 정보.

- 통화 녹취록(Call Transcript): 대화의 서면 기록.

- 수행된 액션(Actions Taken): 트리거된 워크플로우 또는 업데이트된 연락처 필드.

![이메일 알림 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035815444/original/YE-vVHh1Ypl8da9fNfHRwVpAW2WMDayhvA.jpeg?1730406227)

## 전화번호 및 이용 가능 시간 탭

음성 AI 에이전트를 생성할 때 해당 AI 에이전트를 하위 계정 내의 단일 전화번호 또는 여러 번호에 할당해야 해요. 이는 해당 특정 번호 또는 번호 그룹에 전화가 걸려올 때 AI 에이전트가 개입하여 통화를 처리한다는 의미예요.

또한 AI 에이전트가 통화를 처리해야 하는 특정 날짜와 시간 간격을 설정하는 근무 시간을 구성하는 옵션도 있어요.

[음성 AI 에이전트의 근무 시간 설정 및 구성에 대해 더 자세히 알아보려면 여기를 클릭하세요.](working-hours-for-ai-employee.md)

### **생성 중 음성 AI 에이전트 테스트하기:**

**에이전트 생성(Create Agent)** 흐름을 벗어나지 않고도 빠른 테스트 통화를 실행할 수 있어요.

- 전화번호 및 이용 가능 시간(Phone & Availability) 단계에서 오른쪽에 **에이전트 테스트 패널(Test Your Agent panel)**이 있어요. 통화 유형(전화 통화(Phone Call) 또는 웹 통화(Web Call))과 시나리오(**인바운드(Inbound) 또는 아웃바운드(Outbound)**)를 선택하세요.

- 테스트할 전화번호를 입력하세요.

- **전화 걸기(Call Me)**를 클릭하여 음성 AI 에이전트로부터 테스트 통화를 받으세요. 에이전트와 상호작용하여 응답을 평가하세요. **웹 통화(Web Call)** 테스트 중에는 통화 창의 **실시간 녹취록(Live Transcript)**을 사용하여 실시간으로 대화를 따라갈 수 있어요.

- 통화 후 다음을 검토하세요:

- 과거 테스트 통화를 위한 통화 기록(Call History).

- 대화를 분석하기 위한 녹취록 및 녹음(Transcripts & Recordings).

- 에이전트의 행동을 개선하기 위한 요약 및 피드백(Summaries & Feedback).

![에이전트 테스트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155061015213/original/V-aP0HSVDV43--n10yzBrA_K8dDTMuguGg.png?1766152841)

## 인바운드 음성 AI 에이전트에 연결하기 (위젯 또는 URL)

인바운드 음성 AI 에이전트를 생성한 후, 사람들이 어떻게 연결할지 선택하세요. 기존 인바운드 통화를 위해 전화번호를 사용하거나 음성 AI 채팅 위젯(Voice AI Chat Widget)을 웹페이지에 임베드하여 방문자들이 브라우저에서 직접 에이전트와 대화할 수 있도록 하세요.

### 전화번호 공개하기 (tel: 링크를 통한 공유 가능한 "URL")

발신자에게 인바운드 에이전트로 연결되는 전용 번호를 제공하세요. 번호를 어디든 게시하고 모바일 사용자를 위한 클릭 통화 링크를 만들 수 있어요.

- 에이전트 편집으로 이동하세요.

![에이전트 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064889358/original/Qrx4asnzq9gD_mskkd1PdM43_RnU7kB_cA.png?1770997372)

- 전화번호 및 이용 가능 시간(Phone & Availability)을 열고 이 에이전트에 하이레벨(Hyperclass) (LC Phone 또는 Twilio) 번호를 할당하세요. 저장하세요.

![전화번호 할당](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064889450/original/b0jOgOreEhegRahv2qhijy29Fk73CA_w0g.png?1770997432)

- 에이전트가 즉시 응답하거나 타임아웃/음성사서함 규칙 후 응답하도록 인바운드 통화 흐름(Inbound Call Flow) 및 수신 통화 설정(Incoming Call Settings)을 구성하세요.

![통화 흐름 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064889570/original/iE4qfoDL6oAs8V7vBB23dXl0R2QeQYVvrQ.png?1770997503)

- 번호를 공개적으로 공유하세요 (웹사이트, 구글 비즈니스 프로필, 소셜, 이메일 서명).

- 클릭 가능한 링크를 만들려면 tel:를 사용하세요 — 예를 들어:

버튼/링크: tel:+15551234567

- HTML 예시: <a href="tel:+15551234567">AI 어시스턴트에게 전화하기</a>

# AI 에이전트 편집 및/또는 삭제하기

음성 AI 에이전트를 편집하거나 삭제하려면, 먼저 해당 AI 에이전트의 액션(actions) 탭을 클릭한 다음 "편집(Edit)" 또는 "삭제(Delete)"를 선택하세요.

중요: 음성 AI 에이전트 삭제는 영구적이에요. 커스텀 프롬프트 정보를 보관하고 AI 에이전트를 휴면 상태로 만들고 싶다면, 해당 AI 에이전트에서 전화번호를 제거하기만 하면 더 이상 전화 통화에 참여하지 않아요.

![AI 에이전트 편집 및 삭제](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036927896/original/yZ9a9RXstPDOVH4SRiwJpJlHXpm3WtU1bA.gif?1732137586)

---
*원문 최종 수정: 2026-03-17*
*Hyperclass 사용 가이드 — hyperclass.ai*