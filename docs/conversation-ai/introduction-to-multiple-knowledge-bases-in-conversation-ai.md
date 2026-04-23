---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000005012-introduction-to-multiple-knowledge-bases-in-conversation-ai
번역일: 2026-04-23
카테고리: conversation-ai
---

# 대화 AI(Conversation AI)의 다중 지식 베이스(Knowledge Base) 소개

## 목차

- [소개](#소개)
- [다중 지식 베이스를 사용하는 이유](#다중-지식-베이스를-사용하는-이유)
- [다중 지식 베이스 설정 및 사용 방법](#다중-지식-베이스-설정-및-사용-방법)
  - [1단계: 지식 베이스 섹션 접근](#1단계-지식-베이스-섹션-접근)
  - [2단계: 새 지식 베이스 생성](#2단계-새-지식-베이스-생성)
  - [3단계: 지식 베이스 훈련](#3단계-지식-베이스-훈련)
  - [4단계: AI 봇에 지식 베이스 연결](#4단계-ai-봇에-지식-베이스-연결)
  - [5단계: 할당된 지식 베이스 확인 및 관리](#5단계-할당된-지식-베이스-확인-및-관리)
- [마무리](#마무리)

## 소개

새로운 다중 지식 베이스(Multiple Knowledge Base) 기능으로 각 AI 봇마다 별도의 지식 베이스를 생성하고 관리할 수 있게 되었습니다. 이는 이전에 모든 봇이 하나의 공유된 지식 베이스에 의존했던 방식에서 크게 향상된 기능입니다.

이 개선사항을 통해 콘텐츠를 더 효율적으로 정리하고 봇별 맞춤 훈련을 제공할 수 있어, 각 AI 에이전트가 더 정확하고 관련성 높은 응답을 제공할 수 있습니다.

## 다중 지식 베이스를 사용하는 이유

다음과 같은 설정이 있다고 가정해봅시다:

- 지식 베이스(Knowledge Bases): A, B, C
- AI 에이전트: Jane과 Parker

이 기능을 사용하면:

- Jane에게는 지식 베이스 A와 B를 할당할 수 있어, 해당 베이스만으로 훈련됩니다.
- 한편 Parker는 지식 베이스 C로만 독점 훈련시켜, 각 봇이 서로 다른 사용 사례나 고객을 독립적으로 담당할 수 있습니다.

**참고**: 기존에 가지고 있던 지식 베이스는 기본적으로 워크플로우(Workflow) 봇에서 사용되므로 삭제할 수 없습니다. 워크플로우 봇의 다중 지식 베이스 지원은 곧 출시될 예정입니다.

## 다중 지식 베이스 설정 및 사용 방법

### 1단계: 지식 베이스 섹션 접근

왼쪽 네비게이션 바에서 새로운 "Knowledge Base(지식 베이스)" 메뉴로 이동하세요(스크린샷 참조). 이 섹션에서 모든 지식 베이스를 관리할 수 있습니다.

![지식 베이스 메뉴 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044909724/original/O8tKa5hGdPJFWR1bz_fYuMj3F-Ff1FGiRQ.png?1744320819)

### 2단계: 새 지식 베이스 생성

- "Create Knowledge Base(지식 베이스 생성)" 버튼을 클릭하세요.
- 새 지식 베이스의 이름을 입력하세요(내부 참조용).
- "Save & Continue(저장 및 계속)" 버튼을 클릭하세요.

✅ 총 최대 15개의 지식 베이스를 생성할 수 있습니다.

![지식 베이스 생성 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044909757/original/ZJbA4zDPH9-ut78ivYRDwgxvLxMej9OTQQ.png?1744320921)

![지식 베이스 이름 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044909736/original/q4hGwuxnp4pgFlH7HxOLOJvTgcgGJbFy6g.png?1744320877)

![지식 베이스 생성 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044909786/original/UWUSOTRP8qYjTscue6Qtu_8jvOogDqm0xQ.jpeg?1744321063)

### 3단계: 지식 베이스 훈련

생성 후, 두 가지 방법으로 지식 베이스를 훈련시킬 수 있습니다:

- **URL 방식**: 봇이 학습할 관련 링크를 추가합니다.
- **FAQ 방식**: 질문과 답변을 직접 입력합니다.

훈련 과정은 이전 버전과 동일합니다.

💡 **참고**: 파일 업로드를 통한 훈련 기능은 곧 출시됩니다!

![지식 베이스 훈련 방법](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044909785/original/Gyz2zA-zoJmLQf1rJinndTpSB2pKp9CedQ.png?1744321046)

![FAQ 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044909793/original/SDvLYkcrsJ9zQMbVOv82p6nOj8JdwjJFqw.jpeg?1744321104)

![URL 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044909810/original/09wSpDCkGDsriuEqFRmO5fxJzqcykjPz-A.png?1744321144)

### 4단계: AI 봇에 지식 베이스 연결

- 대화 AI(Conversation AI) 봇 섹션으로 이동하세요.
- 봇 훈련에 접근하여 지식 베이스(Knowledge Base) 드롭다운으로 이동하세요.
- 해당 봇을 훈련시킬 지식 베이스를 최대 7개까지 선택하세요.

![대화 AI 봇 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044909828/original/uNA4qQ97t1nNnB6S50Y51qXrYHtVzCnM6A.png?1744321204)

![지식 베이스 선택 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044909856/original/bfmOUOyD98QVwMDrrcXpgO7btl5jVqmWWQ.png?1744321305)

### 5단계: 할당된 지식 베이스 확인 및 관리

- 할당된 지식 베이스들이 봇 설정 내에서 탭으로 표시됩니다.
- "Create New(새로 생성)" 버튼을 클릭해서 즉석에서 새 지식 베이스를 생성할 수도 있습니다.

![할당된 지식 베이스 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044909881/original/Xe0SqS4xKr2DQtZ9aotBqx0bbZtbDVAuvA.png?1744321345)

## 마무리

이 기능은 AI 봇의 훈련 및 응답 방식에 대해 세밀한 제어권을 제공하여, 다양한 사용 사례나 고객별로 정확성, 관련성, 관리 효율성을 개선합니다.

여러 비즈니스나 부서를 위해 봇을 관리하고 있다면, 다중 지식 베이스는 게임 체인저가 될 것입니다.

---
*원문 최종 수정: Mon, 28 Apr, 2025 at 1:56 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*