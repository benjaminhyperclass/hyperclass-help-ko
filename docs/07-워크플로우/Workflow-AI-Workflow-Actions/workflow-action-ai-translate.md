---

번역일: 2026-04-08
카테고리: 07-워크플로우 > Workflow AI Workflow Actions
---

# 워크플로우 액션 - AI 번역

이 가이드에서는 워크플로우에서 **AI 번역** 액션을 사용하는 방법을 안내해드립니다. 원본 언어에서 목표 언어로 텍스트를 자동 번역하여, 전 세계 고객과의 소통을 개인화하는 방법을 배워보세요.

# "AI 번역" 워크플로우 액션이란?

"AI 번역" 액션은 워크플로우 빌더 내에서 주어진 텍스트를 한 언어에서 다른 언어로 번역할 수 있는 강력한 기능입니다. 이 액션을 활용하면 다국어 커뮤니케이션을 자동화할 수 있습니다. 예를 들어, 특정 언어로 들어온 메시지를 번역한 후, 번역된 텍스트를 이메일, SMS, 내부 알림 등의 후속 액션에서 사용할 수 있습니다. 이를 통해 연락처가 선호하는 언어로 메시지를 받을 수 있어 고객 경험이 향상됩니다.

# "AI 번역" 워크플로우 액션 설정 방법

다음 단계에 따라 워크플로우에서 이 액션을 구성해보세요.

### 1단계: "콘텐츠 번역" 액션 추가

워크플로우 빌더에서 액션 메뉴에서 "Translate"를 검색하세요. 콘텐츠를 번역하고 싶은 지점에 이 액션을 추가합니다.

![AI 번역 액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062015020/original/KmpLXhkz5eH8PztJiu0bsB8Bs_7rPB0Ajw.png?1767706891)

### 2단계: 설정 구성

#### 1. 액션명: 액션에 설명이 포함된 이름을 지정하세요 (예: "환영 이메일을 스페인어로 번역")

#### 2. '원본' 언어 선택:

번역하고 싶은 텍스트의 원본 언어를 입력합니다. 원본 텍스트가 작성된 언어입니다. (예: "English")

#### 3. '목표' 언어 선택:

목표 언어를 입력합니다. 텍스트를 변환하고 싶은 언어입니다. (예: "French")

#### 4. 입력 텍스트

입력 텍스트 필드에 번역하고 싶은 내용을 입력합니다. 두 가지 옵션이 있습니다:

- **고정값**: 필드에 텍스트를 직접 입력합니다.
- **커스텀 변수**: 태그 아이콘을 사용하여 연락처 프로필이나 이전 워크플로우 단계의 동적 데이터를 삽입합니다.

구성이 완료되면 '액션 저장'을 클릭하여 워크플로우에 추가합니다.

![AI 번역 설정 구성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062015130/original/RaD9z8SEp23oVch6H6LRPGgy8AD0rsMBCQ.png?1767706955)

### 출력값 사용하기

설정이 완료되면 번역된 텍스트를 커스텀 변수로 사용할 수 있습니다:

![번역된 텍스트 변수](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062015167/original/99LztYMfx8IP5rMETb2lQg8meYnR2t4lkQ.png?1767706984)

![변수 사용 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062015220/original/Y4tyVqHsuUyoRzHTs5YN1JaMY3G-JI9XAQ.png?1767707018)

# 사용 사례 예시

### 예시: 환영 메시지 번역

새로운 연락처가 폼을 통해 가입하면서 선호 언어를 "French"로 지정했다고 가정해보세요. 워크플로우는 이 정보를 사용하여 해당 연락처의 언어로 환영 이메일을 발송할 수 있습니다.

- **트리거**: 연락처 생성
- **액션**: 콘텐츠 번역
  - 액션명: 환영 메시지를 프랑스어로 번역
  - 원본 언어: English
  - 목표 언어: French
  - 입력 텍스트: Hello, thank you for signing up!
- **액션**: 이메일 발송
  - 이메일 본문: 번역 액션의 출력값을 삽입:
    {{workflow_ai_translate_content.2.response}}

이 워크플로우를 통해 프랑스어를 사용하는 새 연락처는 자동으로 개인화되고 정확하게 번역된 환영 메시지를 받게 됩니다.

---
*원문 최종 수정: 2026년 1월 6일*
*Hyperclass 사용 가이드 — hyperclass.ai*