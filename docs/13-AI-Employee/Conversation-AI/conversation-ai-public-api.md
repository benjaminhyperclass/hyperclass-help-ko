---

번역일: 2026-04-08
카테고리: 13-AI-Employee > Conversation-AI
---

# 대화 AI(Conversation AI) Public API

Hyperclass의 대화 AI API는 개발자가 AI 에이전트, 액션, 대화 생성 등을 프로그래밍 방식으로 제어할 수 있도록 해줍니다. 보안 토큰과 세밀한 범위 설정을 통해 에이전트 설정을 자동화하고, 외부 앱과 연동하며, 분석이나 컴플라이언스를 위한 대화 데이터를 내보낼 수 있습니다. 이 가이드는 API가 무엇인지, 장점, 인증 옵션(PIT & JWT), 엔드포인트 분류, 그리고 스크린샷과 함께 단계별 설정 방법을 설명합니다.

---

**목차**

- [대화 AI API란 무엇인가요?](#대화-ai-api란-무엇인가요)
- [대화 AI API의 주요 장점](#대화-ai-api의-주요-장점)
- [인증 (PIT & JWT)](#인증-pit-jwt)
- [API 문서](#api-문서)
- [액션](#액션)
- [에이전트](#에이전트)
- [생성](#생성)
- [자주 묻는 질문](#자주-묻는-질문)

---

# **대화 AI API란 무엇인가요?**

대화 AI API는 대화 AI UI에서 제공하는 핵심 기능들(에이전트 생성 및 관리, 액션 연결, AI 응답 세부 정보 가져오기)을 동일하게 제공하여, 팀이 구성을 자동화하고 대화 AI를 자신의 시스템에 연결할 수 있도록 합니다. 이 API를 사용하면 에이전트를 대규모로 프로비저닝하고, 액션 업데이트를 스크립트로 처리하며, 보고서와 감사를 위한 메시지 수준의 생성 데이터를 검색할 수 있습니다.

---

## **대화 AI API의 주요 장점**

실용적인 장점을 이해하면 UI 대신 API를 언제 사용할지 결정하는 데 도움이 됩니다. 이러한 포인트들은 팀이 일반적으로 자동화하는 결과들을 강조합니다: 더 빠른 프로비저닝, 대규모 일관된 구성, 세부적인 대화 데이터에 대한 안정적 접근.

- **더 빠른 온보딩**: 새로운 로케이션이나 클라이언트를 위한 에이전트 생성과 액션 연결을 몇 분 만에 자동화할 수 있습니다.

- **확장 가능한 구성**: 스크립트나 CI/CD 작업을 통해 여러 하위 계정에 일관된 에이전트 설정과 액션을 적용할 수 있습니다.

- **더 깊은 분석**: 생성 데이터(AI 응답 세부 정보)를 검색하여 대시보드, QA 워크플로우, 감사, 컴플라이언스 내보내기에 활용할 수 있습니다.

- **유연한 연동**: Hyperclass를 내부 도구와 연결하여 워크플로우를 트리거하고, 결과를 추적하며, 이벤트를 외부에 기록할 수 있습니다.

- **최소 권한 보안**: 읽기 전용 또는 쓰기 범위를 사용하여 연동에 필요한 부분에만 정확히 접근을 제한할 수 있습니다.

---

## **인증 (PIT & JWT)**

올바른 인증 방법을 선택하면 안정적이고 안전한 접근이 보장됩니다. Personal Integration Token(PIT)은 빠르게 생성하고 범위를 설정할 수 있으며, JSON Web Token(JWT)은 OAuth 기반 앱 플로우를 지원합니다. 두 방법 모두 대화 AI API 접근에 사용할 수 있습니다.

Hyperclass 하위 계정(로케이션)에서 `Settings(설정) → Private Integrations(프라이빗 연동)`을 열어주세요.

![프라이빗 연동 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055757617/original/ts1j0byLnjbb0jt99rFE5zAeNMciISFLfw.png?1760142557)

기본 정보(이름과 설명)를 입력하세요.

대화 AI 범위를 선택하세요.

![대화 AI 범위 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055757647/original/cL1YDtaxgdGf1N_fDfvyZiHWKMg074PACQ.png?1760142690)

토큰을 생성하고 복사해 두세요.

![토큰 생성 및 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055757653/original/aM2uidnmv1wZAV2tiKGaxvONRM7KugMBpQ.png?1760142733)

토큰을 적절히 관리하고 사용하세요.

![토큰 관리](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055757662/original/1_4zzbMedmTiu_KnHwljW4LoQPj0fk235Q.png?1760142791)

---

## **API 문서**

전체 API 문서는 여기에서 확인할 수 있습니다: [Marketplace API 2.0 대화 AI 액션](https://marketplace.hyperclass.ai/docs/ghl/conversation-ai/actions)

### **액션**

- 에이전트에 액션 연결
- 에이전트의 액션 목록 조회
- ID로 액션 조회
- 액션 업데이트
- 에이전트에서 액션 제거
- 후속 조치 설정 업데이트

### **에이전트**

- 에이전트 생성
- 에이전트 검색
- 에이전트 업데이트
- 에이전트 조회
- 에이전트 삭제

### **생성**

- 생성 세부 정보 조회

---

## **자주 묻는 질문**

**Q: 대화 AI에 하위 계정 토큰이 필요한가요, 아니면 에이전시 토큰이 필요한가요?**

A: 하위 계정 토큰을 사용하세요. 그래야 호출이 올바른 로케이션 컨텍스트 내에서 작동합니다.

**Q: PIT와 JWT를 모두 사용할 수 있나요?**

A: 네. 두 방법 중 하나로 인증할 수 있습니다. 간단한 서버 간 연동에는 PIT를 선택하고, OAuth 앱 플로우에는 JWT를 사용하세요.

**Q: agentId는 어디에서 찾을 수 있나요?**

A: Agents API를 통해 에이전트를 생성하거나 검색한 후, 반환된 id 필드를 후속 호출에서 사용하세요.

**Q: AI 응답을 프로그래밍 방식으로 감사하려면 어떻게 해야 하나요?**

A: Generations 엔드포인트를 사용하여 메시지 수준의 응답 세부 정보를 검색하고, 이를 분석 또는 컴플라이언스 시스템에 저장하세요.

**Q: 토큰이 유효해 보이는데 403 오류가 발생하는 이유는 무엇인가요?**

A: 대부분의 경우, 토큰에 필요한 범위가 없거나 대상 로케이션에 대한 하위 계정 토큰이 아니기 때문입니다.

---
*원문 최종 수정: Tue, 3 Feb, 2026 at 5:16 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*