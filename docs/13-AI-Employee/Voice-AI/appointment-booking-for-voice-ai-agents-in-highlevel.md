---

번역일: 2026-04-08
카테고리: 13-AI-Employee > Voice-AI
---

# 음성 AI 에이전트 예약 기능

새로운 음성 AI 에이전트 예약 기능으로 일정 관리를 간편하게 자동화하세요. 이 업데이트를 통해 AI가 전화 통화 중에 직접 미팅 시간을 제안하고 확정할 수 있어, 수동 워크플로우나 외부 예약 링크가 더 이상 필요 없습니다.

목차

- [음성 AI 에이전트 예약 기능이란?](#음성-ai-에이전트-예약-기능이란)
- [주요 장점](#주요-장점)
- [이번 출시의 새로운 기능](#이번-출시의-새로운-기능)
- [음성 AI 에이전트 예약 기능 설정 방법](#음성-ai-에이전트-예약-기능-설정-방법)
- [자주 묻는 질문](#자주-묻는-질문)
- [관련 문서](#관련-문서)

# 음성 AI 에이전트 예약 기능이란?

음성 AI 에이전트 예약 기능은 AI 전화 에이전트가 실시간으로 일정 관리를 할 수 있게 해줍니다. 고객과 통화할 때 AI가 캘린더에 접근하여 예약 가능한 시간을 제안하고, 필요한 정보를 수집하며, 예약을 확정할 수 있습니다. 사람의 개입이나 외부 예약 페이지 연결이 전혀 필요 없죠. 이 기능은 음성 AI 경험 내에서 일정 관리를 원활하고 효율적이며 완전히 통합되도록 설계되었습니다.

## 주요 장점

더 스마트하고 효율적인 일정 관리를 위한 주요 장점들:

- **마찰 없는 예약**: 고객이 통화 중에 바로 예약할 수 있어 이탈률을 줄이고 수동 후속 조치가 필요 없습니다.

- **캘린더 연동**: AI가 사용할 캘린더를 선택하여 예약이 항상 최신 상태로 유지됩니다.

- **맞춤형 예약 가능 시간**: 제공할 일수와 시간대를 설정하여 비즈니스 요구에 맞게 경험을 조정할 수 있습니다.

- **중복 예약 방지**: 실시간 캘린더 확인으로 겹치는 예약을 방지합니다.

- **자동 데이터 수집**: AI가 이메일 주소 등 누락된 정보를 자동으로 요청하여 완전한 예약을 보장합니다.

- **향상된 고객 경험**: 빠르고 지능적인 일정 관리로 고객 만족도가 높아지고 놓치는 기회가 줄어듭니다.

---

## 이번 출시의 새로운 기능

### 캘린더 선택
적합한 캘린더를 선택하면 모든 예약이 정확히 추적되고 다른 예약과의 충돌을 방지할 수 있습니다.
- Google 캘린더, Outlook 또는 기타 지원 플랫폼과 연동
- 여러 부서별 일정 관리를 위해 각 AI 에이전트에 특정 캘린더 할당
- Hyperclass 캘린더 연결에 대해 자세히 알아보기

### 제공 일수 설정
AI가 제시할 예약 가능 일수를 조정하여 예약 기간을 제어하고 팀의 업무량을 관리할 수 있습니다.
- 순차적 기간(예: 다음 3일) 또는 고정 날짜 제공
- 직원 가용성이나 운영 시간에 따라 조정

### 시간대 관리
하루에 예약 가능한 약속 수를 세밀하게 조정하고 시간대 간 최소 간격을 설정하여 과도한 일정을 방지합니다.
- 과부하 방지를 위한 일일 예약 제한
- 준비나 이동 시간을 위한 적절한 약속 간 간격 보장

### 이메일 요청 자동화
연락처 이메일 수집으로 모든 예약에 알림 및 후속 조치를 위한 필요 정보가 포함되도록 보장합니다.
- AI가 누락된 이메일을 자동으로 요청하여 불완전한 예약을 줄임
- 향후 커뮤니케이션을 위해 이메일이 연락처 기록에 추가됨

## 음성 AI 에이전트 예약 기능 설정 방법

음성 AI 에이전트 예약 기능 설정을 통해 AI가 효율적으로 일정 관리와 확인을 처리할 수 있습니다. 이점을 극대화하고 예약 오류를 방지하려면 적절한 설정이 핵심입니다.

예약 전에 AI가 자격 심사 질문을 하도록 하려면(간단한 IF/ELSE 로직 사용), 대화 AI(Conversation AI) → 플로우 빌더(Flow Builder)에서 정보 수집(Capture Information), AI 분할기(AI Splitter), 예약하기(Book Appointment)를 사용하여 짧은 플로우를 구축하세요.

### 옵션 1: 예약 기능이 있는 새 음성 AI 에이전트 생성

#### AI 에이전트 대시보드 열기

Hyperclass 하위 계정에서 메인 네비게이션의 AI 에이전트(AI Agents)를 클릭합니다.

그다음 음성 AI(Voice AI) 탭을 선택합니다.

+ 에이전트 생성(Create Agent) 버튼을 클릭합니다.
![AI 에이전트 생성 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046753190/original/bMHLZJlXGoTe9IvMWJxw0jUBcQPbXPmM4A.png?1747394732)

#### 에이전트 세부 정보 입력

에이전트 세부 정보(Agent Details) 단계에서 필요한 정보를 입력합니다.

다음(Next)을 클릭하여 진행합니다.
![에이전트 세부 정보 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046753492/original/5ytfymPo5xbibzQrXGTZDNJRa15IN5Iljw.png?1747394910)

#### 고급 모드로 전환

에이전트 목표(Agent Goals) 단계에서 고급 모드로 전환(Switch to Advanced Mode)을 클릭합니다.

이렇게 하면 예약 기능 같은 커스텀 액션을 추가할 수 있습니다.
![고급 모드로 전환](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046753686/original/fVi-1NV8074krs8nPv5FfDx3UjhJAjaBww.png?1747395051)

#### 예약 액션 추가

액션 설정(Set Up Your Actions) 섹션으로 스크롤합니다.

+ 새 액션(New Action)을 클릭하고 목록에서 예약하기(Book Appointment)를 선택합니다.
![예약 액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046754117/original/hClUms-CAoXyU80V8G8Izbkr60w9oLbC7g.gif?1747395349)

#### 예약 옵션 설정

캘린더 선택(Select Calendar): AI가 예약에 사용할 캘린더를 선택합니다.

제공 일수 설정(Set Offering Days): AI가 발신자에게 옵션으로 제공할 향후 일수(예: 2일 또는 3일)를 정의합니다.

일일 예약 시간대(Appointments slots per day): 매일 제공할 시간대 수를 설정합니다(예: 3개).

시간대 간격(Hours between slots): 시간대 간 시간 간격을 정의합니다(예: 1시간).

저장(Save)을 클릭하여 설정을 완료합니다.
![예약 옵션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046754899/original/kGzpZf98IyN4b9snUxjrUFar2eUKUkALBA.png?1747395858)

설정된 예약 액션(Appointment Booking Action)과 예약용 이메일 추출 액션(Extract Email for Appointment Action)이 액션 설정(Setup Your Actions) 탭 아래에 표시됩니다.

다음(Next)을 클릭합니다.
![설정 완료된 액션들](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046756332/original/lZPzRVudycuVYyCQXK5hS69V8MUkxcdjbQ.png?1747396956)

#### 전화번호 및 가용성 옵션 설정

전화번호/번호 풀(Phone Number/Number Pool)을 선택합니다.

AI 에이전트를 백업 번호 또는 번호 풀로 활성화 또는 비활성화합니다.

AI 에이전트의 근무 시간을 설정합니다.

저장(Save)을 클릭하여 예약 기능이 있는 새 음성 AI 에이전트를 생성합니다.
![전화번호 및 가용성 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046756660/original/XcDw-6OLDicG_uDhuIRkyIZhx9gnrjoJKQ.png?1747397268)

### 옵션 2: 기존 에이전트에 예약 기능 추가

#### 기존 음성 AI 에이전트 편집

음성 AI 대시보드에서 에이전트를 찾습니다.

에이전트 이름 옆의 점 3개 메뉴를 클릭하고 편집(Edit)을 선택합니다.

![기존 에이전트 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046761216/original/UuVK4cMUgNNKWdiYnlAQPbbjLlWrEuhqJQ.png?1747400200)

#### 고급 모드로 전환(에이전트가 기본 모드로 생성된 경우)

에이전트 목표(Agent Goals) 탭으로 이동합니다.

고급 모드로 전환(Switch to Advanced Mode)을 클릭하여 액션 설정을 활성화합니다.

![고급 모드로 전환](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046761597/original/RB_76oZ2ANlxd61X4j94adupTlnXW_PD9A.png?1747400481)

#### 예약 액션 추가 및 설정

액션 설정(Set Up Your Actions) 아래에서 + 새 액션(New Action)을 클릭합니다.

예약하기(Book Appointment)를 선택한 다음 위에서 설명한 대로 캘린더, 일수, 시간대를 설정합니다.

저장(Save)을 클릭하여 업데이트된 로직을 적용합니다.
![예약 액션 추가 및 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046761674/original/4UzEhhoz-j867FQiOcTiFqrv2G846OzrdA.gif?1747400560)

---

## 간단한 영업 자격 심사 플로우

AI가 예약 전에 발신자의 자격을 심사하도록 하려면 다음과 같은 간단한 로직을 사용하세요.

- 의사결정권자이신가요?
  예인 경우 → 예약 가능 시간으로 이동
  아닌 경우 → 의사결정권자 이름 + 이메일 요청(정보 수집), 그다음 그들과 예약 제안

- 기본 적합성 확인:
  예산, 위치, 일정(정보 수집)을 질문합니다.

팁: 각 답변을 연락처 커스텀 필드에 매핑하세요.

- 적합성에 따른 라우팅:
  예산 ≥ $X이고 일정 ≤ Y주인 경우 → AE 캘린더에 예약
  그 외의 경우 → SDR/디스커버리 캘린더에 예약하거나 콜백 할 일 생성

- 확인:
  예약 후 표준 확인 및 알림 발송

### AI 답변이 저장되는 위치

- 통화 기록(녹음 + 대화 내용 + 요약): 음성 AI(Voice AI) → 통화 기록/대시보드(Call Logs/Dashboard)

- 연락처(리포트 가능한 필드): 플로우에서 각 답변을 연락처 커스텀 필드에 매핑

- 예약(담당자를 위한 컨텍스트): 워크플로우를 통해 예약 메모에 주요 세부사항 추가

- 폼 필드(커스텀 예약 폼을 사용한 경우): 예약을 열어서 폼(Forms) 탭 확인

## 자주 묻는 질문

**Q: 여러 AI 에이전트에 서로 다른 캘린더를 사용할 수 있나요?**

네, 맞춤형 일정 관리를 위해 각 음성 AI 에이전트에 특정 캘린더를 할당할 수 있습니다.

**Q: 연락처가 이메일을 제공하지 않으면 어떻게 되나요?**

AI가 예약을 확정하기 전에 연락처에게 이메일을 요청하여 모든 예약에 완전한 정보가 포함되도록 보장합니다.

**Q: AI는 중복 예약을 어떻게 방지하나요?**

AI가 선택된 캘린더를 실시간으로 확인하여 예약 가능한 시간대만 제공해 겹치는 예약을 방지합니다.

**Q: 제공할 일수와 시간대 수를 맞춤 설정할 수 있나요?**

네, 설정에서 예약 가능 일수와 하루 최대 시간대 수를 설정할 수 있습니다.

**Q: 이 기능은 모든 음성 AI 요금제에서 사용할 수 있나요?**

예약 기능은 음성 AI가 활성화된 사용자에게 제공됩니다. 자격 여부는 요금제 세부사항을 확인하세요.

**Q: 예약된 약속에 대해 알림이 자동으로 발송되나요?**

알림은 캘린더 및 워크플로우 설정에 따라 다릅니다. Hyperclass 계정에서 알림이 설정되어 있는지 확인하세요.

**Q: AI가 예약을 변경하거나 취소할 수 있나요?**

현재 이 기능은 예약에 초점을 맞추고 있습니다. 일정 변경이나 취소는 수동 개입이나 추가 워크플로우 설정이 필요할 수 있습니다.

**Q: 어떤 종류의 캘린더가 지원되나요?**

Hyperclass는 Google 캘린더, Outlook 등 주요 캘린더 플랫폼과의 연동을 지원합니다.

## 관련 문서

- [음성 AI 에이전트 대시보드](voice-ai-agents-dashboard.md)
- [음성 AI 에이전트 생성하기](how-to-create-voice-ai-agents.md)
- [AI 음성 에이전트 개요](ai-voice-agents-overview.md)
- [음성 AI 에이전트 테스트하기](testing-voice-ai-agents.md)

---
*원문 최종 수정: Wed, 21 Jan, 2026 at 8:01 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*