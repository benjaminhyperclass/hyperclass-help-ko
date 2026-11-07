---
원문: /support/solutions/articles/155000005680-managing-granular-permissions-for-voice-ai-agents
번역일: 2026-11-06
카테고리: 13-AI-Employee
---

# 음성 AI 에이전트 세부 권한 설정

계정 소유자는 음성 AI 에이전트를 누가 보고, 설정하고, 분석할 수 있는지 항목별로 정할 수 있어요. 팀 규모가 크거나 새 역할을 추가할 때 이 설정을 쓰면 에이전트 로직을 보호하고 팀 업무를 매끄럽게 운영할 수 있어요.

## 음성 AI 에이전트의 세부 권한이란?

세부 권한을 쓰면 역할별로 접근 범위를 나누고, 민감한 설정과 워크플로우를 보호할 수 있어요. 토글 네 개로 음성 AI의 각 영역을 따로 관리해요. "전부 허용 아니면 전부 차단" 방식이 아니라 누가 에이전트를 만들고, 누가 목표를 수정하고, 누가 성과 데이터를 볼지 나눠서 정할 수 있어요.

이 설정으로 할 수 있는 일은 다음과 같아요.

- 에이전트를 볼 수 있는 사람과 관리할 수 있는 사람 구분
- 목표 설정 기능에 대한 접근 범위 지정
- 대시보드 조회 권한과 편집 권한 분리

---

## 세부 권한의 장점

권한을 세밀하게 나누면 보안과 업무 효율을 함께 챙길 수 있어요.

- AI 에이전트 편집 보호: 사용자에게 필요한 권한만 주어서 AI 에이전트 로직이 실수로 바뀌는 일을 막아요.
- 업무 범위 명확화: 대시보드, 목표, 에이전트 설정 권한을 따로 나누어 각 사용자가 자기 업무 범위를 분명히 알 수 있어요.
- 확장 가능한 온보딩: 팀이나 에이전시가 커져도 지원, 교육, 관리자 역할에 맞는 권한을 쉽게 줄 수 있어요.
- 더 분명한 역할 경계: 음성 AI 권한은 사용자가 할 수 있는 일뿐 아니라 볼 수 있는 화면도 제어해요. 음성 AI 권한이 없는 사용자에게는 탐색 메뉴에 음성 AI 항목이 보이지 않아서, 우연히 발견하거나 권한 없이 접근을 시도하는 일을 줄여 줘요.

---

## 세부 권한 설정 방법

음성 AI 세부 권한은 **Roles and Permissions**(역할 및 권한) 패널에서 설정해요. 아래 단계를 따라 하세요.

#### 1단계: 스태프 관리로 이동

1. 서브 계정에서 왼쪽 아래의 **설정**을 클릭하세요.
2. 왼쪽 탐색 메뉴에서 **스태프 관리**를 선택하세요.
3. 권한을 바꿀 직원을 찾아 **편집**(연필) 아이콘을 클릭하세요.

![스태프 관리에서 직원의 편집 아이콘을 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050399626/original/DK5kVUkXjjyd8WONabfSUeJPE3nD5NVizg.png?1753384075)

#### 2단계: AI 에이전트 설정 찾기

1. 왼쪽의 보조 탐색 메뉴에서 **Roles and Permissions**를 클릭하세요.
2. 아래로 스크롤해서 **AI 에이전트**를 찾으세요.

![Roles and Permissions에서 AI 에이전트 항목을 찾는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050399637/original/Udv794zvMqf2hLZ3b7nwzGntSpU8h2qw4A.png?1753384115)

#### 3단계: 권한 토글 설정

사용자의 역할에 맞게 권한 토글을 켜거나 끄세요. 토글은 다음과 같아요.

- **AI 에이전트**(상위 제어)
- **View & Manage Voice AI Agents**(음성 AI 에이전트 보기 및 관리)
- **Voice AI 에이전트 목표 보기**
- **View & Manage Voice AI Agent Goals**(음성 AI 에이전트 목표 보기 및 관리)
- **Voice AI 대시보드 보기**

각 권한에 대한 자세한 설명은 [권한 유형 설명](#권한-유형-설명)을 참고하세요.

![권한 토글을 켜고 끄는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050399565/original/AYbckZuTVmSFmgxKJ7zb1o_Qv-XttCxmPg.png?1753383926)

#### 4단계: 변경 사항 저장

파란색 **저장** 버튼을 클릭해 변경 사항이 잘 적용되었는지 확인하세요.

![파란색 저장 버튼을 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050399588/original/1CeFuYXnLVcXnO36uKX_vv3ecAjqwaXObA.png?1753383969)

---

## 권한 유형 설명

### 1. View & Manage Voice AI Agents

에이전트를 관리하는 기본 권한이에요. 음성 AI 에이전트를 만들고, 편집하고, 삭제해야 하는 사용자에게 알맞아요.

{% hint style="info" %}
이 권한은 에이전트 관리의 상위 제어 권한이에요. 대시보드 접근은 성과를 확인하기 위한 별도의 병렬 권한으로 유지돼요.
{% endhint %}

**활성화됨** 상태일 때:

- 음성 AI 에이전트를 만들고, 편집하고, 삭제할 수 있어요.
- 전화번호를 지정하고, 설정을 바꾸고, 에이전트 동작을 구성할 수 있어요.
- **View & Manage Voice AI Agent Goals**와 **Voice AI 에이전트 목표 보기** 같은 하위 목표 권한을 쓸 수 있게 돼요.

**비활성화됨** 상태일 때:

- **음성 AI 에이전트** 목록이 완전히 숨겨져요.
- 사용자가 에이전트를 만들거나 수정할 수 없어요.
- 하위 권한인 목표 관련 권한만 함께 꺼져요.
- 대시보드 접근에는 영향이 없어요.

![View & Manage Voice AI Agents 권한 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050400321/original/qhQvE-A6CPZHP7b2FO0gT88segarxfISyQ.png?1753385872)

#### 탐색 메뉴 표시와 실시간 권한 적용

탐색 메뉴 표시(음성 AI 권한이 없을 때)

- 서브 계정 화면에서 음성 AI 메뉴가 숨겨져요. **AI 에이전트** 영역 안의 음성 AI 항목과 **설정** 사이드바의 음성 AI 항목도 포함돼요.

실시간 권한 적용

- 사용자가 음성 AI를 쓰는 중에 권한이 회수되면 하이퍼클래스가 이후 동작을 즉시 막고 **권한 거부됨** 메시지를 보여 줘요.

### 2. Voice AI 에이전트 목표 보기 (읽기 전용)

지원이나 교육 담당처럼 설정을 알아야 하지만 직접 바꿀 필요는 없는 역할에 알맞아요.

**활성화됨** 상태일 때:

- **Agent Goals**(에이전트 목표) 탭을 읽기 전용으로 볼 수 있어요.
- 설정된 내용을 볼 수 있어서 실수로 수정하거나 잘못 설정할 위험이 없어요.

**비활성화됨** 상태일 때:

- **Agent Goals** 탭이 보이지 않아요.
- 에이전트가 어떻게 구성되어 있는지 볼 수 없어요.
- 민감한 자동화 로직에 대한 접근을 제한할 때 유용해요.

![Voice AI 에이전트 목표 보기 권한 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050400627/original/76beWrBv3Edm06FeNAXRIPrDJrhuv2GwEA.png?1753386499)

### 3. View & Manage Voice AI Agent Goals

AI 로직과 워크플로우를 직접 다루는 고급 사용자나 관리자에게 알맞아요.

**활성화됨** 상태일 때:

- 지식 베이스, 통화 후 워크플로우, 데이터 추출 필드, 고급 액션 같은 에이전트 동작을 설정할 수 있어요.
- 기본 목표 모드와 고급 목표 모드를 모두 쓸 수 있어요.

**비활성화됨** 상태일 때:

- 에이전트를 편집할 때 **Agent Goals** 탭이 숨겨져요.
- 에이전트를 만들 때는 목표를 설정할 수 있지만, 나중에 수정할 수는 없어요.
- 초기 설정의 유연성과 장기적인 관리 통제 사이에서 균형을 잡을 수 있어요.
- **View & Manage Voice AI Agent Goals** 권한이 없으면 새로운 음성 AI 환경으로 업그레이드할 수 없어요. 읽기 권한만 있으면 **Agent Goals**는 보기만 가능해요.

![View & Manage Voice AI Agent Goals 권한 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050400565/original/x2r1_KcM3qiYTvRIRF8eHyI1kx84J_LOWA.png?1753386360)

### 4. Voice AI 대시보드 보기

음성 AI 결과를 모니터링하는 관리자와 분석 담당자에게 권장해요.

**활성화됨** 상태일 때:

- 테스트 통화와 실제 고객 통화의 성과 대시보드를 볼 수 있어요.
- 녹취록, 요약, 통화 녹음, 주요 지표가 포함돼요.

**비활성화됨** 상태일 때:

- 음성 AI 대시보드가 전체 화면과 에이전트 상세 화면 모두에서 숨겨져요.
- 통화 로그, 민감한 데이터, 성과 지표가 노출되지 않아요.

![Voice AI 대시보드 보기 권한 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050400660/original/TVPGB6eTv0z514-ohgz2teN8zsgtfCZMqg.png?1753386576)

---

## 자주 묻는 질문

### 이 권한은 에이전시 수준에서도 설정할 수 있나요?

음성 AI 세부 권한은 서브 계정별로 설정해요.

### 같은 권한 설정을 여러 사용자에게 복사할 수 있나요?

네, 가능해요. **설정 > 스태프 관리**로 이동해서 새 권한을 적용할 사용자를 선택하세요. 오른쪽 위의 **Copy Permission**(권한 복사)을 클릭한 뒤, 권한을 복사해 올 사용자를 선택하면 돼요. 음성 AI 권한뿐 아니라 모든 권한에 적용되니 주의하세요.

### 사용자 지정 음성 AI 권한 설정을 안전하게 테스트하려면 어떻게 하나요?

임시 사용자를 만들어 권한을 적용한 다음, 화면에 보이는 항목이 기대와 같은지 확인하세요. 확인한 뒤에 전체 팀에 적용하는 것이 좋아요.

### 이 토글이 대화 AI 챗봇에도 영향을 주나요?

아니요. 이 토글은 음성 AI 전화 에이전트만 관리해요. 대화 AI에는 별도의 권한 설정이 있어요.

### 사이드바나 AI 에이전트 메뉴에 음성 AI가 안 보여요.

역할에 음성 AI 권한이 포함되어 있지 않을 수 있어요. 관리자에게 **설정 > 스태프 관리 > Roles and Permissions > AI 에이전트**에서 필요한 음성 AI 토글을 켜 달라고 요청하세요.

### 음성 AI를 편집하는데 "권한 거부됨"이 나와요.

작업하는 동안 음성 AI 권한이 변경되었을 수 있어요. 페이지를 새로고침하고, 관리자에게 현재 지정된 권한을 확인하세요.
