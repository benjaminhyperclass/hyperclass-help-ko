---

번역일: 2026-04-08
카테고리: 22-Eliza > Eliza Agent Platform Onboarding
---

# Eliza 에이전트 플랫폼 - 소개 및 자주 묻는 질문

Eliza 에이전트 플랫폼은 에이전시가 효과적으로 리드를 관리하고 고객으로 전환할 수 있도록 설계된 메시징 플랫폼입니다. 리드 응답, 확장 가능한 리드 육성, 간소화된 예약 흐름이라는 세 가지 핵심 기능을 통해 Eliza는 우수한 고객 서비스를 제공하고 리드 전환율을 향상시키고자 하는 에이전시에게 완벽한 솔루션입니다.

#### 이 글에서 다룰 내용

#### [Eliza 에이전트 플랫폼이란?](#eliza-에이전트-플랫폼이란)

#### [FAQ - Eliza 에이전트 플랫폼](#faq-eliza-에이전트-플랫폼)

- #### [1. Eliza 에이전트 플랫폼에서 커스텀 값 user.Name은 어떻게 작동하나요?](#1-eliza-에이전트-플랫폼에서-커스텀-값-username은-어떻게-작동하나요)

- #### [2. 인바운드 메시지나 인바운드 통화가 없는 연락처를 Eliza로 가져오려면 어떻게 하나요?](#2-인바운드-메시지나-인바운드-통화가-없는-연락처를-eliza로-가져오려면-어떻게-하나요)

- #### [3. GHL에서는 대화를 볼 수 있는데 Eliza로는 들어오지 않아요.](#3-ghl에서는-대화를-볼-수-있는데-eliza로는-들어오지-않아요)

- #### [4. Eliza 에이전트 플랫폼에서 API 키를 업데이트하려면 어떻게 하나요?](#4-eliza-에이전트-플랫폼에서-api-키를-업데이트하려면-어떻게-하나요)

- #### [5. 통화에서 블라인드 전환과 웜 전환을 하려면 어떻게 하나요?](#5-통화에서-블라인드-전환과-웜-전환을-하려면-어떻게-하나요)

#### [블라인드 전환](#블라인드-전환)

- #### [웜 전환](#웜-전환)

- #### [문제 해결:](#문제-해결)

- #### [6. 연락처에 대한 예약이 생성되었는데 연락처가 채팅 대기열에서 제거되지 않아요. (태그 등과 관련하여) 제거하기 위해 특별히 해야 할 일이 있나요?](#6-연락처에-대한-예약이-생성되었는데-연락처가-채팅-대기열에서-제거되지-않아요-태그-등과-관련하여-제거하기-위해-특별히-해야-할-일이-있나요)

- #### [7. GHL 하위 계정 > 설정에서 Eliza Service 탭이 보이지 않아요.](#7-ghl-하위-계정-설정에서-eliza-service-탭이-보이지-않아요)

## Eliza 에이전트 플랫폼이란?

Eliza 에이전트 플랫폼은 에이전시가 리드를 고객으로 육성하여 전환율을 높일 수 있도록 돕는 메시징 플랫폼입니다. Eliza의 주요 기능 중 하나는 클라이언트를 위해 리드에게 신속하게 응답하는 것입니다. 이를 통해 에이전시는 고객 문의에 신속하고 효율적으로 응답할 수 있으며, 느린 응답 시간으로 인한 리드 손실을 방지할 수 있습니다.

또한 Eliza는 에이전시가 확장 가능한 리드 육성 프로세스를 만들 수 있게 해줍니다. 이 기능은 에이전시가 대량의 리드를 처리할 수 있는 시스템을 개발하고, 이러한 리드를 고객으로 전환하는 과정을 효율적으로 관리하는 데 도움을 줍니다.

마지막으로, Eliza 에이전트 플랫폼은 예약 흐름을 간소화하는 데 도움을 줍니다. 사용자 지정 가능한 FAQ 설정과 에이전트 구성을 제공함으로써, Eliza는 에이전트가 예약 프로세스를 쉽게 관리하고 실시간으로 고객 문의에 응답할 수 있게 해줍니다.

Eliza 에이전트 플랫폼은 대화형 봇 기능은 제공하지 않는다는 점을 유의해야 합니다. 하지만 에이전시가 대화형 예약 봇을 찾고 있다면, 이 기능은 플랫폼의 PRO 플랜에서 이용할 수 있습니다.

전반적으로 Eliza 에이전트 플랫폼은 에이전시 계정 내에서 고객 기반에게 인간 전환 시스템을 제공하고자 하는 에이전시에게 이상적인 솔루션입니다. 리드 관리를 위한 확장 가능하고 효율적인 프로세스를 제공함으로써, Eliza는 에이전시가 더 복잡하게가 아닌 더 스마트하게 일할 수 있게 도우며 리드 전환율을 향상시킵니다.

Eliza 에이전트 플랫폼 서비스는 [여기서](https://mp.gohighlevel.com/eliza-agent-platform) 구매하실 수 있습니다.

## FAQ - Eliza 에이전트 플랫폼

### 1. Eliza 에이전트 플랫폼에서 커스텀 값 user.Name은 어떻게 작동하나요?

- 사용자가 연락처에 배정되고, 워크플로우나 Eliza에서 user.Name이 사용되면 배정된 사용자로 대체됩니다. 그러나 메인 앱의 대화 화면에서 동일한 템플릿을 사용하면, 배정된 사용자가 있는지 여부와 관계없이 로그인한 사용자의 이름이 사용됩니다.
- 연락처에 배정된 사용자가 없으면, 워크플로우와 Eliza는 user.name을 공백으로 대체합니다.
- 따라서 Eliza에서 user.name에 유효한 값을 주려면, 연락처가 GHL 쪽에서 누군가에게 배정되어 있어야 Eliza(와 워크플로우)가 이를 선택할 수 있습니다.
- 때로는 Eliza에서 +Assigned To 링크가 보이지 않을 수 있습니다. 이런 경우 메인 앱에서 API 키를 새로 고치고 이 로케이션에 새로운 키를 사용하면 해결됩니다.

### 2. 인바운드 메시지나 인바운드 통화가 없는 연락처를 Eliza로 가져오려면 어떻게 하나요?

연락처가 인바운드 메시지를 보내지 않거나 인바운드 통화만 하는 경우, 연락처가 자동으로 Eliza로 들어오지 않습니다. 이런 경우에는 워크플로우에서 Send to Eliza 액션을 사용하여 Eliza로 보내세요.

Send to Eliza 워크플로우 액션을 사용하세요.

자격 조건을 충족하는 연락처에 대해 Send to Eliza 워크플로우 액션을 구성하면, 플랫폼이 자동으로 처리해 줍니다.

Eliza로 들어오는 리드에 Send to Eliza 태그가 배정되도록 구성되어 있다면, 연락처가 전송되기 전에 해당 태그도 함께 배정됩니다. 이 태그 배정은 이 액션이 작동하는 데 필수는 아닙니다.

![Eliza로 보내기 워크플로우 액션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290277854/original/zmH2Xs3HSvlF4NySnMbkMbaZ0AFDNyF44A.png?1680197106)

Eliza 에이전트 플랫폼에서

Send to Eliza 워크플로우 액션을 통해 Eliza에서 연락처를 받으면 아래와 같이 타이머 아이콘이 표시됩니다.
![타이머 아이콘이 있는 연락처](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290278728/original/OwTeg-3dBKAlY8mXy9-7i60Sj3Grm8Gc2A.png?1680197517)

"Send to Eliza" 워크플로우 액션으로 보낸 연락처만 구체적으로 육성하고 싶다면, 해당 대화만 필터링할 수도 있습니다. "Sent to Eliza" 옵션을 선택하고 "Go"를 클릭하면 워크플로우 액션으로 보낸 메시지만 볼 수 있습니다.
![Sent to Eliza 필터](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290280129/original/TPbfeD5h2OG5hlWzjYabXe5FPm6PPE28uA.png?1680198050)

### 3. GHL에서는 대화를 볼 수 있는데 Eliza로는 들어오지 않아요.

인바운드 메시지만 자동으로 Eliza로 들어옵니다.

- 인바운드 통화는 아직 지원되지 않기 때문에 Eliza로 푸시되지 않습니다. 하지만 인바운드 통화 관리 기능을 개발 중이며 2022년 상반기 중에 제공될 예정입니다.
- 인바운드 통화를 Eliza로 푸시하여 리드를 육성하고 싶다면, 워크플로우에서 Send to Eliza 액션을 사용하세요. 자세한 내용은 FAQ#2를 참조하세요.

Eliza에서 대화 기록의 감사 로그를 분석하고 싶다면, Search > contact로 이동하여 연락처를 선택하고 Audit log 버튼을 클릭하세요. 이 연락처가 Eliza에 들어온 적이 있다면 대화 기록의 감사 로그를 보여줍니다.

### 4. Eliza 에이전트 플랫폼에서 API 키를 업데이트하려면 어떻게 하나요?

이 링크를 따라 하세요.

### 5. 통화에서 블라인드 전환과 웜 전환을 하려면 어떻게 하나요?

#### 블라인드 전환

블라인드 전환은 대상 에이전트가 먼저 전화를 받을 때까지 기다리지 않고 발신자를 다른 내선번호나 링 그룹(대기열)으로 전환하는 것입니다. 목적지 번호로 즉시, 예고 없이 전화를 전환하는 것입니다.

전화 아이콘을 클릭하여 리드에게 아웃바운드 통화를 시작하세요.

![아웃바운드 통화 시작](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290282661/original/BGEYxIy7PQMIvs-U_zTE07nO9ImgCzNvrA.png?1680199220)

통화가 진행 중일 때 아래와 같이 대화 페이지 상단에 알림이 표시됩니다.
![통화 진행 중 알림](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290282879/original/cl4bI_W7IFgKIEzTOg3rPeY8pLBvBN9vqw.png?1680199335)

블라인드 전환을 하려면 팝업의 다이얼러 아이콘 옆 아래쪽 화살표를 클릭하세요.

Blind transfer를 클릭하세요.
![블라인드 전환 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290283562/original/cGw3zjRegHF2G_leIl3MVV1bssij5mx10A.png?1680199594)

표시된 목록에서 GHL 팀 멤버를 선택하세요.

GHL 팀 섹션에 이미 포함된 번호만 전환할 수 있습니다. 이 통화가 전환될 팀 멤버를 선택하고 "Call & Disconnect"를 클릭하세요.

새 멤버를 추가하고 싶다면, GHL에 로그인하여 해당 전화번호로 새 팀 멤버를 생성하세요.

다른 Eliza 에이전트가 이 고객에게 전화를 걸게 하고 싶다면, Search > Contacts를 통해 해당 에이전트로 대화를 전환하세요. 곧 다른 Eliza 에이전트로 직접 통화를 전환할 수 있게 될 예정입니다.
![팀 멤버 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290284237/original/90SL7IkChGM-QR2vnFWhM0qh1djmdz51RQ.png?1680199792)

#### 웜 전환

웜 통화 전환은 접수원이 통화를 전송하기 전에 해당 에이전트와 먼저 대화하는 것을 의미합니다. 발신자가 요청한 내선번호에 들어오는 통화 전환을 알려줍니다. 일반적으로 콜센터 운영자가 원하는 내선번호로 전화를 거는 동안 발신자는 대기 상태에 놓입니다.

연락처에게 아웃바운드 통화를 하세요.
![아웃바운드 통화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290284464/original/KP91iRzUaj4p-o582uM6Re9ZS5cOTeGfEw.png?1680199872)

페이지 상단에 나타나는 팝업에서 "Warm Transfer"를 선택하세요.
![웜 전환 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290285574/original/M49LxiFS7NuAaVsnRlhhIL9wcFIYnK_LJg.png?1680200267)

이 통화를 웜 전환할 번호를 선택한 후 "Call and Hold"를 클릭하세요.
![웜 전환할 번호 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290285746/original/AZ-QQpRwFtJF7KtohqfZRWbxisoWAkk5bQ.png?1680200344)

시스템은 에이전트 2가 전화를 받을 때까지 기다립니다.

![에이전트 2 대기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290285805/original/mFvN2-naURLU1_ygBnHeI5NUIOiLf0YoGA.png?1680200365)

에이전트 2가 통화에 응답하면 "Patch Call"을 클릭하여 세 번호를 모두 회의 통화로 연결하세요.

빨간색 "Drop Off" 버튼을 눌러 회의에서 연결을 끊으세요. 이 작업을 통해 연락처와 에이전트 2가 대화를 계속할 수 있습니다.
![회의 통화 연결](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290285949/original/2fANLYcMpyBemclwowS5O4gGxcd8-lM5sQ.png?1680200423)

#### 문제 해결:

시스템이 일관성이 없어지면, 브라우저가 마이크에 접근할 수 있는지 확인하고 페이지를 새로 고쳐서 Twilio와의 연결이 올바르게 이루어지도록 하세요.

![마이크 접근 허용](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290286221/original/XXfs03-cg7pATtpKn67NwpvO-FJiRUx7JA.png?1680200540)

![브라우저 권한 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290286374/original/OEyUVqeTWhTUKTQqfzMs4ZDhVd56MNlTnA.png?1680200606)

### 6. 연락처에 대한 예약이 생성되었는데 연락처가 채팅 대기열에서 제거되지 않아요. (태그 등과 관련하여) 제거하기 위해 특별히 해야 할 일이 있나요?

시스템은 예약을 잡는 것이 대화의 종료를 의미하는지 알지 못합니다. 따라서 대화를 열어두게 됩니다. 에이전트는 "End Chat"을 클릭하여 대화를 닫을 수 있습니다. 추가로 배정할 처리 사항이 없다면 "Close without a disposition" 버튼을 선택하여 대화를 닫을 수 있습니다.

### 7. GHL 하위 계정 > 설정에서 Eliza Service 탭이 보이지 않아요.

![Eliza Service 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48290287736/original/Z4U7d0EG-pjPhhVNMxrMJslWHQOkPr3hvA.png?1680201231)

다음 조건들을 확인해 주세요.

- Eliza 에이전트 플랫폼의 계정에 로케이션이 추가되었는지 확인
- Location Settings > Eliza Service 탭에 접근할 것으로 예상되는 사용자의 이메일 주소가 해당 로케이션의 로케이션 관리자 또는 로케이션 사용자로 추가되어야 함
- 같은 이메일 주소에 Eliza Service 권한이 활성화되어 있어야 하며, 이를 통해 Location Settings > Eliza Service 탭에서 FAQ를 편집하고 Eliza 우회 태그 및 Send to Eliza 태그를 구성할 수 있음

---
*원문 최종 수정: Fri, 5 May, 2023 at 8:40 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*