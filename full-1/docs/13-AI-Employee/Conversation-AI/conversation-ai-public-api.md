---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006639-conversation-ai-public-api
번역일: 2026-11-07
카테고리: 13-AI-Employee
---

# 대화 AI 공개 API

하이퍼클래스의 대화 AI API를 쓰면 코드로 AI 에이전트, 작업, 대화 생성 내역(generations)을 직접 다룰 수 있어요. 보안 토큰과 세부 권한 범위(scope)를 사용해 에이전트 설정을 자동화하고, 외부 앱과 연결하고, 분석이나 컴플라이언스용으로 대화 데이터를 내보낼 수 있어요. 이 문서에서는 API가 무엇인지, 어떤 점이 좋은지, 인증 방식(PIT, JWT)과 엔드포인트 종류, 설정 방법을 화면과 함께 설명해요.

---

[동영상](https://www.youtube.com/embed/ZCBrj\_miYiw?&wmode=opaque)

---

## 대화 AI API란?

대화 AI API는 대화 AI 화면에서 하는 핵심 기능을 그대로 제공해요. 에이전트를 만들고 관리하고, 작업을 연결하고, AI 응답 상세 정보를 가져올 수 있어요. 그래서 팀에서 설정을 자동화하고 대화 AI를 자체 시스템과 연결할 수 있어요. 이 API로 에이전트를 대량으로 만들고, 작업 업데이트를 스크립트로 처리하고, 메시지 단위의 생성 데이터를 가져와 리포팅과 감사에 쓸 수 있어요.

이 API는 하이퍼클래스 화면만으로는 대화 AI를 감당하기 어려운 에이전시, SaaS 사업자, 개발자에게 잘 맞아요.

### 대화 AI 공개 API로 할 수 있는 일

API로 다음 작업을 할 수 있어요.

- 대화 AI 에이전트 만들기와 관리
- AI 작업을 코드로 설정하고 업데이트
- AI 대화 생성 데이터 가져오기
- 여러 서브 계정에 걸친 AI 설정을 대규모로 자동화
- 대화 AI를 외부 애플리케이션과 연동
- 맞춤 리포팅과 컴플라이언스 워크플로우 구성

---

## 대화 AI API의 장점

화면으로 할지 API로 할지 정할 때 참고하세요. 팀에서 주로 자동화하는 부분은 빠른 생성, 대규모 환경에서의 일관된 설정, 상세한 대화 데이터 확보예요.

- 빠른 온보딩: 새 로케이션이나 새 고객사의 에이전트 생성과 작업 연결을 몇 분 안에 자동화할 수 있어요.
- 대규모 설정: 스크립트나 CI/CD 작업으로 여러 서브 계정에 같은 에이전트 설정과 작업을 적용할 수 있어요.
- 더 깊은 분석: generations(AI 응답 상세 정보)를 가져와 대시보드, QA 워크플로우, 감사, 컴플라이언스 내보내기에 쓸 수 있어요.
- 유연한 연동: 내부 도구와 하이퍼클래스를 함께 운영하면서 워크플로우를 실행하고, 결과를 추적하고, 이벤트를 외부에 기록할 수 있어요.
- 최소 권한 보안: 읽기 전용 또는 쓰기 권한 범위를 선택해 연동에 필요한 접근만 허용할 수 있어요.

---

## 인증 방식 (PIT, JWT)

인증 방식을 알맞게 고르면 안정적이고 안전하게 접근할 수 있어요. Personal Integration Token(PIT)은 빠르게 만들고 권한 범위를 정할 수 있어요. JSON Web Token(JWT)은 OAuth 기반 앱 흐름을 지원해요. 대화 AI API에는 두 방식 모두 쓸 수 있어요.

1. 하이퍼클래스 서브 계정(location)에서 **설정 > 비공개 연동**을 열어요.

   ![비공개 연동 메뉴 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055757617/original/ts1j0byLnjbb0jt99rFE5zAeNMciISFLfw.png?1760142557)

2. 이름과 설명 같은 기본 정보를 입력해요.
3. 대화 AI 권한 범위(scope)를 선택해요.

   ![대화 AI 권한 범위 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055757647/original/cL1YDtaxgdGf1N_fDfvyZiHWKMg074PACQ.png?1760142690)

4. 토큰을 만들고 복사해 두세요.

   ![토큰 생성 및 복사 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055757653/original/aM2uidnmv1wZAV2tiKGaxvONRM7KugMBpQ.png?1760142733)

5. 토큰을 관리하면서 API 호출에 사용하세요.

   ![토큰 관리 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055757662/original/1_4zzbMedmTiu_KnHwljW4LoQPj0fk235Q.png?1760142791)

---

## API 문서

전체 API 문서는 하이퍼클래스 고객지원에 문의하세요.

### 작업(Actions)

- `Attach Action To Agent`: 에이전트에 작업 연결
- `List Actions For An Agent`: 에이전트의 작업 목록 조회
- `Get Action By ID`: ID로 작업 조회
- `Update Action`: 작업 업데이트
- `Remove Action From Agent`: 에이전트에서 작업 제거
- `Update Followup Settings`: 후속 조치 설정 업데이트

### 에이전트(Agents)

- `Create An Agent`: 에이전트 생성
- `Search Agents`: 에이전트 검색
- `Update Agent`: 에이전트 업데이트
- `Get Agent`: 에이전트 조회
- `Delete Agent`: 에이전트 삭제

### Generations(생성 내역)

- `Get Generation Details`: 생성 상세 정보 조회

---

## 자주 묻는 질문

### 대화 AI에는 서브 계정 토큰과 에이전시 토큰 중 어느 것을 써야 하나요?

서브 계정 토큰을 사용하세요. 그래야 호출이 올바른 로케이션 범위 안에서 실행돼요.

### API로 대화 AI 에이전트를 관리할 수 있나요?

네. API로 대화 AI 에이전트를 만들고, 업데이트하고, 조회하고, 관리할 수 있어요.

### PIT와 JWT를 둘 다 쓸 수 있나요?

네. 두 방식 중 하나로 인증하면 돼요. 단순한 서버 간 연동에는 PIT를, OAuth 앱 흐름에는 JWT를 쓰세요.

### agentId는 어디서 확인하나요?

에이전트 API로 에이전트를 만들거나 검색하면 응답에 id 필드가 돌아와요. 이후 호출에서 이 값을 사용하세요.

### AI 응답을 코드로 감사하려면 어떻게 하나요?

Generations 엔드포인트로 메시지 단위의 응답 상세 정보를 가져와서, 분석 시스템이나 컴플라이언스 시스템에 저장하세요.

### 403 오류가 나요. 왜 그런가요?

보통 권한 범위가 빠졌거나, 권한이 맞지 않거나, 승인된 서브 계정 밖의 리소스에 접근하려고 할 때 발생해요.
