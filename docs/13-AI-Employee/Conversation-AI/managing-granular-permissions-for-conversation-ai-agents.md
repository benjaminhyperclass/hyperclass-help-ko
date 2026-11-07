---
원문: /support/solutions/articles/155000006054-managing-granular-permissions-for-conversation-ai-agents
번역일: 2026-11-06
카테고리: 13-AI-Employee
---

# 대화 AI 에이전트 세부 권한 설정

**대화 AI 에이전트**(Conversation AI Agents)의 세부 권한을 쓰면 팀원이 봇 관리, 봇 목표, 봇 학습에 접근하는 범위를 세밀하게 정할 수 있어요. 역할에 맞게 권한을 나눠서 허가받지 않은 변경을 막고 싶을 때 사용하세요.

## 대화 AI 에이전트 세부 권한이란?

관리자가 팀원이 **Conversation AI 봇**에서 무엇을 보고, 관리하고, 설정할 수 있는지 정하는 하이퍼클래스 기능이에요. 권한을 지정하면 허가된 역할만 봇 생성, 봇 목표, 봇 학습을 다룰 수 있어요. 팀원의 업무 범위에 맞게 접근 권한을 유연하게 관리할 수 있어요.

## 대화 AI 에이전트 세부 권한의 장점

- 보안: 봇 설정, 목표, 학습 내용이 허가 없이 바뀌지 않도록 지켜요.
- 역할 기반 접근: 역할과 책임에 맞춰 팀원마다 다른 접근 권한을 줄 수 있어요.
- 효율성: 필요 없거나 제한된 옵션을 숨겨서 워크플로우을 간단하게 만들어요.
- 위험 감소: 접근을 제어해서 실수나 허가 없는 수정을 줄여요.

## 대화 AI 에이전트 세부 권한 설정하기

1. **내 직원**으로 이동해요.

   - 서브 계정에서 왼쪽 아래의 **설정**을 클릭하세요.
   - 왼쪽 메뉴에서 **스태프 관리**를 선택하세요.
   - 권한을 바꿀 직원을 찾아 **편집**(연필) 아이콘을 클릭하세요.

   ![직원 편집 아이콘 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051822542/original/voWtZqf_b3R6VwV0-AgODankVinuD-Yo0Q.png?1755525394)

2. **AI 에이전트** 권한 설정을 찾아요.

   - 왼쪽의 보조 메뉴에서 **Roles and Permissions**(역할 및 권한)를 클릭하세요.
   - 아래로 스크롤해서 **AI 에이전트**를 찾으세요.

   ![역할 및 권한의 AI 에이전트 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052015397/original/RhV7Uhx86lxx6RunreUccMXJY5uQBaPlyQ.png?1755701873)

3. 직원의 역할에 맞게 권한 토글을 켜거나 꺼요. 토글은 다음과 같아요.

   - **AI Agents**(AI 에이전트, 상위 제어)
   - **View & Manage Conversation AI agents**(대화 AI 에이전트 보기 및 관리)
   - **View Conversation AI agent Goals**(대화 AI 에이전트 목표 보기)
   - **View & Manage Conversation AI agent Goals**(대화 AI 에이전트 목표 보기 및 관리)
   - **View & Manage Conversation AI agent training**(대화 AI 에이전트 학습 보기 및 관리)

   ![권한 토글 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052015155/original/YnK2Ssi4guom6ioV-JBxi1QLMXPR7RVpNg.png?1755701760)

4. 변경 사항을 저장해요.

   - 파란색 **저장** 버튼을 클릭하세요.

   ![저장 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051822991/original/TpaYhrQgwhjAwnSwevoOCNxUfQONTVM62w.png?1755525644)

## 권한 종류별 설명

### 1. View & Manage Conversation AI Agents

봇을 만들고, 편집하고, 삭제하는 것까지 **Conversation AI 봇** 전체 관리를 제어하는 권한이에요.

켜면:

- **Conversation AI 봇**을 만들기, 편집, 삭제할 수 있는 전체 권한이 생겨요.
- 하위 권한인 **View & Manage Conversation AI agent Goals**, **View Conversation AI agent Goals**, **View & Manage Conversation AI agent Training**이 함께 활성화돼요.

  ![권한을 켠 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051899123/original/t9_uzbIDr7ud4DWI3JmJZKXRcSsdCgM_MA.png?1755605006)

끄면:

- **Conversation AI 봇** 메뉴 항목이 모두 숨겨져요.
- 목록 보기에 접근할 수 없고, 새 봇도 만들 수 없어요.
- 하위 권한이 자동으로 꺼지고, **AI 에이전트** 메뉴에서 대화 AI가 보이지 않아요.

  ![권한을 끈 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051899169/original/BbkO7qSSJxhr0cGxMo1lgrrx7SM1Nj5MiA.png?1755605052)

### 2. View & Manage Conversation AI agent Goals

**봇 목표**를 편집할 수 있는 권한이에요. 봇의 로직과 목적을 설정하는 숙련 사용자에게 알맞아요.

켜면:

- 기존 봇을 편집할 때 **봇 목표**를 편집할 수 있어요.
- 봇의 목적과 응답 로직을 설정하는 숙련 사용자에게 적합해요.

  ![목표 권한을 켠 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051899247/original/UPtGJaTHP_DyOyxCDTORthNGvu7tnLEfBA.png?1755605090)

끄면:

- 편집할 때 **봇 목표** 탭이 숨겨져요.
- 폼 기반 봇을 만드는 과정에서는 여전히 목표를 정의할 수 있어요.
- **Bot Trial**(봇 체험)은 계속 사용할 수 있어요.

  ![목표 권한을 끈 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051899967/original/EaTiawj6WXLGlilFBbyFZbXttE4dEUKNhQ.png?1755605501)

### 3. View Conversation AI Agent Goals

설정된 **봇 목표**를 보기만 하고 편집은 하지 않는 사용자를 위한 권한이에요.

켜면:

- 지침과 액션 같은 설정된 **봇 목표**를 볼 수 있어요.
- **AI 응답 정보** 창에서 프롬프트 상세 내용도 볼 수 있어요.

  ![목표 보기 권한을 켠 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051900252/original/EmzWofTJ7JvSC24-bDD2Z0ToFSzW1mHYiQ.png?1755605642)

끄면:

- 편집할 때 **봇 목표** 탭이 숨겨져요.
- 목표는 폼 기반 봇을 만들 때만 볼 수 있어요.
- 이 경우 추가 지침도 숨겨져요.

### 4. View & Manage Conversation AI agent Training

봇에 지식 베이스를 연결하거나 해제할 수 있는 사람을 정해서 **봇 학습** 설정 접근을 제어하는 권한이에요.

켜면:

- 봇에 지식 베이스를 연결하거나 해제할 수 있어요.
- **AI 응답 정보** 창에서 응답에 어떤 지식 베이스를 썼는지 볼 수 있어요.

  ![학습 권한을 켠 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051900290/original/-uywLXbF4GGroDJt4w0KsOCos9AsykCbzg.png?1755605695)

끄면:

- **봇 학습** 탭이 숨겨지고 수정할 수 없어요.
- 대화의 **AI 응답 정보** 창에서 지식 베이스 참조가 사라져요.

  ![학습 권한을 끈 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051900302/original/DbPT5hj9ftGmI9elDyHy1OTJPZ161D2-cA.png?1755605711)

{% hint style="info" %}
**View & Manage Conversation AI agent Training**과 **View & Manage Conversation AI agent Goals**를 둘 다 끄면 **Bot Trial**을 사용할 수 없어요.
{% endhint %}

## 자주 묻는 질문

### "View & Manage Conversation AI Agents"를 끄면 어떻게 되나요?

**Conversation AI 봇** 메뉴가 모두 사라져서 봇을 만들거나 편집할 수 없어요. 하위 권한도 모두 꺼져요.

### 봇 목표는 보기만 하고 학습은 못 하게 할 수 있나요?

네, 할 수 있어요. **View Conversation AI Agent Goals**는 켜고 **View & Manage Conversation AI Agent Training**은 끄면 목표는 볼 수 있지만 학습에는 접근할 수 없어요.

### "View & Manage Conversation AI Agent Goals"를 끄면 목표를 아예 설정할 수 없나요?

아니요. 폼 기반 봇을 만드는 과정에서는 목표를 정의할 수 있어요. 다만 기존 봇을 편집할 때는 설정할 수 없어요.

### "View & Manage Conversation AI Agent Training"을 끄면 봇에 어떤 영향이 있나요?

**봇 학습** 탭에 접근할 수 없고, 지식 베이스를 연결하거나 해제할 수 없어요. **AI 응답 정보** 창에서도 학습 관련 내용이 숨겨져요.

### 목표와 학습 권한을 둘 다 끄면 Bot Trial은 어떻게 되나요?

**View & Manage Conversation AI Agent Training**과 **View & Manage Conversation AI Agent Goals**를 둘 다 끄면 **Bot Trial**을 사용할 수 없어요.

### 대화 AI 대시보드가 안 보여요.

**Roles & Permissions** > **AI 에이전트**에서 **View Conversation AI Dashboard**(대화 AI 대시보드 보기) 권한이 활성화되어 있는지 확인하세요. 이 권한을 끄면 대화 AI 홈 페이지와 에이전트별 페이지에서 대시보드가 보이지 않아요.
