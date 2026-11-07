---
원문: /support/solutions/articles/155000005892-workflow-action-ai-translate
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — AI Translate(AI 번역)

워크플로우에서 **AI Translate** 액션을 사용해 텍스트를 다른 언어로 자동 번역하는 방법을 안내해요. 다국어 고객에게 보내는 메시지를 더 쉽게 맞춤 설정할 수 있어요.

## AI Translate 액션이란?

**AI Translate**(AI 번역)는 워크플로우 빌더에서 쓸 수 있는 액션이에요. 텍스트를 한 언어에서 다른 언어로 번역해 줘요. 이 액션을 쓰면 다국어 커뮤니케이션을 자동화할 수 있어요.

예를 들어 어떤 언어로 들어온 메시지를 번역한 다음, 그 결과를 이메일, SMS, 내부 알림 같은 다음 액션에서 사용할 수 있어요. 연락처가 선호하는 언어로 메시지를 받게 되니 고객 경험도 좋아져요.

## AI Translate 액션 설정하기

다음 단계를 따라 워크플로우에 액션을 설정하세요.

### 1단계: Translate Content 액션 추가하기

1. 워크플로우 빌더로 이동해 액션 메뉴에서 "Translate"를 검색해요.
2. **Translate Content**(콘텐츠 번역) 액션을 번역이 필요한 위치에 추가해요.

### 2단계: 설정 입력하기

1. **Action Name**(액션 이름): 액션을 알아보기 쉬운 이름으로 지정해요. 예: "환영 이메일을 스페인어로 번역"
2. **From Language**(원본 언어) 선택: 번역할 텍스트의 원래 언어를 입력해요. 예: 영어
3. **To Language**(번역 언어) 선택: 텍스트를 바꿀 언어를 입력해요. 예: 프랑스어
4. **Input Text**(입력 텍스트): 번역할 내용을 입력해요. 입력 방법은 두 가지예요.
   - **Static Value**(고정 값): 필드에 텍스트를 직접 입력해요.
   - **Custom Variables**(커스텀 변수): 태그 아이콘을 눌러 연락처 프로필이나 앞선 워크플로우 단계의 동적 데이터를 넣어요.
5. 설정을 마치면 **Save Action**(액션 저장)을 클릭해 워크플로우에 추가해요.

![AI Translate 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062015130/original/RaD9z8SEp23oVch6H6LRPGgy8AD0rsMBCQ.png?1767706955)

### 번역 결과 사용하기

설정을 마치면 번역된 텍스트를 커스텀 변수로 사용할 수 있어요.

![번역 결과 커스텀 변수 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062015167/original/99LztYMfx8IP5rMETb2lQg8meYnR2t4lkQ.png?1767706984)

![번역 결과 변수를 삽입한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155062015220/original/Y4tyVqHsuUyoRzHTs5YN1JaMY3G-JI9XAQ.png?1767707018)

## 활용 예시

### 예시: 환영 메시지 번역하기

새 연락처가 폼으로 가입하면서 선호 언어를 "프랑스어"로 선택했다고 가정해요. 워크플로우는 이 정보를 활용해 연락처가 고른 언어로 환영 이메일을 보낼 수 있어요.

- 트리거: **Contact Created**(연락처 생성)
- 액션: **Translate Content**(콘텐츠 번역)
  - **Action Name**: 환영 메시지를 프랑스어로 번역
  - **From Language**: 영어
  - **To Language**: 프랑스어
  - **Input Text**: `Hello, thank you for signing up!`
- 액션: **Send Email**(이메일 보내기)
  - **Email Body**(이메일 본문): 번역 액션의 결과를 넣어요.

    `{{workflow_ai_translate_content.2.response}}`

이 워크플로우를 쓰면 프랑스어를 쓰는 새 연락처가 올바르게 번역된 맞춤 환영 메시지를 자동으로 받아요.
