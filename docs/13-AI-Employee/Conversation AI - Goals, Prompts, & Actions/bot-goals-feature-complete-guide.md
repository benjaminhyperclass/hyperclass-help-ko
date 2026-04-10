---

번역일: 2026-04-08
카테고리: 13-AI-Employee > Conversation AI - Goals, Prompts, & Actions
---

# 봇 목표(Bot Goals) 기능: 완전 가이드

**목차**

- [소개](#소개)
- [새 버전의 주요 변경 사항](#새-버전의-주요-변경-사항)
- [단계별 가이드](#단계별-가이드)
  - [1단계: 봇 목표 기능 접근하기](#1단계-봇-목표-기능-접근하기)
  - [2단계: 봇 인터페이스 둘러보기](#2단계-봇-인터페이스-둘러보기)
  - [3단계: 봇 목표 맞춤 설정하기](#3단계-봇-목표-맞춤-설정하기)
    - [봇 목표 내 세부 기능](#봇-목표-내-세부-기능)
  - [4단계: 봇 설정 완료하기](#4단계-봇-설정-완료하기)

## 소개

봇 목표(Bot Goals) 기능은 대화 AI(Conversation AI) 새 버전에서 기존 의도 구성(Configure Intent) 기능을 대폭 업데이트한 것입니다. 이 기능을 통해 신규 봇이나 기존 봇의 프롬프트를 편집하거나 업데이트할 수 있습니다.

워크플로우 트리거(Trigger a Workflow), 연락처 정보 업데이트(Update Contact Info) 같은 추가 세부 기능이 곧 추가될 예정이며, 더욱 다양한 맞춤 설정과 기능을 제공할 예정입니다.

또한 기존의 봇 테스트(Bot Trial) 기능도 "봇 테스트하기(Test Your Bot)"라는 이름으로 봇 목표 기능에 통합되어, 일관된 사용 환경을 제공합니다.

## 새 버전의 주요 변경 사항

- **여러 봇 지원**: 기존 버전은 하나의 봇만 지원했지만, 업데이트된 버전에서는 여러 봇을 생성할 수 있습니다. 이를 통해 일반 Q&A, 예약 예약 등 특정 목적에 맞는 봇을 만들 수 있습니다.

예시: 일반 문의를 처리하는 봇 하나와 예약만 전담하는 봇 하나를 따로 만들 수 있습니다.

![여러 봇 지원 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439318/original/1FTEW5yc7wbuRO0kSq-axteBKzzWk9rJtw.png?1736312114)

## 단계별 가이드

### 1단계: 봇 목표 기능 접근하기

- 시작하려면 새 봇을 만들거나 기존 봇을 편집합니다.
- 새 봇을 만드는 경우, 계속 진행하기 전에 봇 이름을 지정해야 합니다.

![새 봇 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439317/original/TIKxHrua9pVhaTg0dulFR8OMBimctR2uUA.png?1736312114)

![봇 이름 지정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439315/original/dTWGGaxCcYd3VzVrc3pqj5oCNeuoMxg2ww.png?1736312114)

### 2단계: 봇 인터페이스 둘러보기

봇을 생성하거나 선택하면 세 개의 탭을 볼 수 있습니다:

- **Bot Settings(봇 설정)**: 이전 버전과 동일하며 기능적 변경 사항이 없습니다.
- **Bot Training(봇 학습)**: 봇 설정과 마찬가지로 이 섹션에는 변경 사항이 없습니다.
- **Bot Goals(봇 목표)**: 최신 버전에서 도입된 새로운 기능으로, 워크플로우 트리거, 연락처 정보 업데이트(곧 출시) 등 봇 동작을 맞춤 설정하는 세부 기능을 포함합니다.

이전에 별도 탭에 있던 봇 테스트(Bot Trial) 기능은 이제 봇 학습(Bot Training) 또는 봇 목표(Bot Goals) 섹션에 통합되었습니다.

![봇 인터페이스 탭 구성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439316/original/VUxpv-lWvbtuYTs429Z-BIGzl1Us28Cxtg.png?1736312114)

### 3단계: 봇 목표 맞춤 설정하기

- 봇 목표(Bot Goals) 탭에서 프롬프트(Prompt) 섹션에 접근하여 목표에 맞는 AI 프롬프트를 추가하거나 업데이트할 수 있습니다.
- 봇이 달성하기를 원하는 각 목표마다 새 봇과 해당 프롬프트를 생성해야 합니다.

새로운 목표를 위한 프롬프트를 설정하는 경우, 새 봇을 생성하고 해당 봇의 봇 목표 섹션에서 프롬프트를 맞춤 설정해야 합니다.

#### 봇 목표 내 세부 기능

봇 목표 아래에는 세 가지 주요 세부 기능이 있습니다:

- **예약 예약(Appointment Booking)**: 예약 예약 섹션에 새로운 세부 기능인 "예약 후 직원 전환(Transfer Employee Post Appointment Booking)"이 추가되었습니다. 이 개선 사항을 통해 예약 성공과 같은 의도된 작업이 완료된 후 대화를 다른 봇으로 원활하게 전환할 수 있습니다.

드롭다운 목록에서 다음 봇을 선택할 수 있어 적절한 봇으로 대화가 원활하게 이어집니다.

- **워크플로우 트리거(Trigger a Workflow)**: 곧 출시 예정

- **연락처 정보 추가(Add Contact Info)**: 곧 출시 예정

플랫폼 내 각 링크를 클릭하면 이러한 세부 기능에 대한 자세한 도움말 문서에 접근할 수 있습니다.

![봇 목표 세부 기능](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439319/original/SVaf9Eq9X5P-qTtkIIYFjles_NRHl1S77w.png?1736312114)

![예약 후 직원 전환 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439320/original/WjqTVX1kVOMTH6EkaV5xqVDoHvB_rFIX2A.png?1736312114)

### 4단계: 봇 설정 완료하기

- 프롬프트를 업데이트하고 필요에 따라 봇을 구성한 후 저장을 클릭합니다.
- 새로 생성되거나 업데이트된 봇이 활성화되어, 설정한 기능과 프롬프트로 사용자 상호작용을 개선할 준비가 완료됩니다.

---
*원문 최종 수정: 2025-01-07*
*Hyperclass 사용 가이드 — hyperclass.ai*