---

번역일: 2026-04-08
카테고리: AI 직원 > Ask AI
---

# Ask AI + Agent Studio 연동

Ask AI의 대화형 기능과 Agent Studio의 워크플로우 유연성을 결합하세요. 이 연동을 통해 채팅 질문을 맞춤형 AI 에이전트로 라우팅하고, 다단계 작업을 자동화하며, 코드 없이도 더 빠르게 답변을 제공할 수 있습니다.

---

# **Ask AI + Agent Studio 연동이란?**

Ask AI × Agent Studio 연동은 Hyperclass의 인앱 AI 어시스턴트("Ask AI")와 Agent Studio에서 구축한 모든 에이전트를 연결합니다. 각 에이전트의 기능을 설명하고 Ask AI에 매핑하면, 어시스턴트가 언제 사용자 요청을 해당 에이전트로 전달할지 결정하고, 워크플로우를 실행한 후 같은 채팅 스레드에서 결과를 반환합니다.

---

## Ask AI + Agent Studio 연동의 주요 장점

에이전시와 하위 계정에게 게임 체인저가 되는 이유를 알아보세요:

- **통합 채팅 + 워크플로우 경험:** Ask AI를 벗어나지 않고도 복잡한 자동화를 트리거할 수 있습니다.

- **지능형 라우팅:** Ask AI가 기능 설명을 바탕으로 최적의 에이전트를 선택합니다.

- **동적 데이터 처리:** 런타임에 사용자에게 누락된 입력값을 요청하거나 커스텀 값을 미리 입력할 수 있습니다.

- **빠른 실행:** 다단계 플로우(이메일, 광고, 조회, 이미지 생성 등)를 즉시 실행합니다.

- **창의성과 함께 확장:** 웹 검색, MCP, API 호출 등을 하나의 에이전트에서 결합할 수 있습니다.

---

## **원활한 에이전트 매핑**

특정 요청 유형을 어떤 Agent Studio 에이전트가 처리할지 정의하여 Ask AI가 대화를 자동으로 라우팅할 수 있도록 합니다. 이 매핑은 수동 명령 구문을 제거하므로 사용자는 단순히 질문하면 적절한 에이전트가 작동합니다.

- 기존 Agent Studio 에이전트를 클릭 몇 번으로 Ask AI에 할당할 수 있습니다.

- 쉬운 언어로 "에이전트 설명"을 추가하고 주요 기능을 나열하세요(예: "광고 카피를 만들고 연락처에 이메일을 보냅니다").

- 어시스턴트는 모든 사용자 프롬프트를 이러한 설명과 비교하여 언제 에이전트를 호출할지 결정합니다.

---

## **동적 변수 구성**

각 에이전트가 필요한 정확한 데이터를 제공하세요—하드코딩이 필요하지 않습니다. 이 유연성은 자연스러운 채팅 경험을 유지하면서 워크플로우를 정확하게 유지합니다.

- 변수는 텍스트, 숫자, 선택 등을 지원하며, Agent Studio에서 이미 제공되는 강력한 변수 관리 옵션과 일치합니다.

- Agent Studio에서 생성한 모든 입력 변수에 대해 다음 중 선택할 수 있습니다:

고정 기본값 입력

- "런타임에 물어보기"로 표시하여 Ask AI가 실행 전에 사용자로부터 값을 수집하도록 요청합니다.

---

## 도구, 생성 및 캡처 노드로 에이전트 구축

Agent Studio의 드래그 앤 드롭 빌더로 Ask AI와 완벽하게 결합되는 정교한 에이전트를 만들 수 있습니다.

한 번 설계하면 필요할 때마다 Ask AI에서 에이전트를 호출할 수 있습니다.

- **도구 노드:** 웹 검색, MCP, API, 지식 베이스 등.

- **생성 노드:** LLM 프롬프트를 사용하여 카피, 요약 또는 이미지를 작성합니다.

- **캡처 노드:** 다운스트림 단계를 위해 구조화된 사용자 입력(텍스트 또는 선택)을 수집합니다.

---

## Ask AI + Agent Studio 연동 설정 방법

적절한 설정으로 채팅과 자동화 간의 원활한 핸드오프를 보장하세요.

- Agent Studio에서 에이전트를 구축하거나 열어보세요(AI Agents → Agent Studio).

![Agent Studio에서 에이전트 구축](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056073861/original/6Dq04UmYlG8sUVdomzzp5YeQr2PfAGaA0A.png?1760541552)

- 워크플로우 노드, 변수 및 라이프사이클 단계를 확인하세요(Production으로 이동).

- Settings(설정) → Ask AI → Agent Mapping(에이전트 매핑)으로 이동하세요(또는 Ask AI를 열고 "Manage Agents(에이전트 관리)"를 클릭).

![에이전트 매핑 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056073652/original/ioyke5BckzjF3I1UsbLLqbsWhEdj2f0hLw.png?1760541407)

- "Map Agent(에이전트 매핑)"를 클릭하고 Agent Studio 에이전트를 선택한 후 다음을 추가하세요:

1단계: 에이전트 선택 - 로케이션과 특정 에이전트.

![에이전트 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056074058/original/NqqZ4w1FWWsa_7fNsWwErQKk6mGMFSaVrA.png?1760541685)

- 2단계: 연동 구성 - 에이전트 이름, 설명 및 기능.

![연동 구성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056074467/original/2PP6E4GBlNw62x3Wj7uJ7Kuj4FPs4nuNDA.png?1760541851)

- 3단계: 변수 매핑 - 변수 이름과 값(시스템 커스텀 값 또는 "런타임에 사용자에게 물어보기"를 통해 대화에서 즉시 생성).

![변수 매핑](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056074797/original/ALpd5Nk_3MRSUw5XdpsCeP5OjdOAQIOR_g.png?1760542016)

- 저장하세요. Ask AI 채팅에서 관련 요청을 입력하여 테스트하세요(예: "Jane Doe를 위한 광고 카피를 만들어줘").

- 채팅에 "[에이전트 이름] 실행 중..." 메시지와 에이전트 결과가 표시되는지 확인하세요.

![에이전트 실행 결과](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056075095/original/Xzsv8GbTxgFZBgZVbIF8LgGbD_BGu_twbw.png?1760542148)

---

## **자주 묻는 질문**

**Q. 이 연동을 사용하려면 AI 직원 애드온이 필요한가요?**

예—Ask AI와 Agent Studio는 Unlimited AI Employee 플랜이 필요합니다.

**Q. Ask AI에 여러 에이전트를 매핑할 수 있나요?**

물론입니다. Ask AI는 매핑된 각 에이전트의 설명을 평가하여 최적의 매치를 찾습니다.

**Q. 사용자 프롬프트와 일치하는 에이전트가 없으면 어떻게 되나요?**

Ask AI는 내장 기능을 사용하여 정상적으로 응답합니다.

**Q. 에이전트는 스테이징에서 실행되나요, 프로덕션에서 실행되나요?**

"Production"에 발행된 에이전트만 매핑에 사용할 수 있습니다.

**Q. 변수 프롬프트가 브랜딩 되나요?**

런타임 질문은 원활한 사용자 경험을 위해 하위 계정의 채팅 스타일을 상속받습니다.

**Q. 매핑된 후 에이전트를 업데이트할 수 있나요?**

예. Ask AI는 에이전트의 Production 버전을 사용합니다. 동작을 업데이트하려면 스테이징에서 변경한 후, 업데이트된 버전을 Production으로 승격시키세요. 승격 후 재매핑은 필요하지 않습니다.

**Q. 변수 수에 제한이 있나요?**

정해진 제한은 없지만, 더 간단한 에이전트가 더 빠른 응답을 제공합니다.

**Q. 에이전트 성능을 어떻게 모니터링하나요?**

Agent Studio "Run Logs(실행 로그)"와 Ask AI 채팅 히스토리를 사용하여 실행을 검토할 수 있습니다.

---

*원문 최종 수정: Wed, 4 Feb, 2026 at 1:53 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*