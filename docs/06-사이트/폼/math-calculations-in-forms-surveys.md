---
원문: /support/solutions/articles/155000003634-math-calculations-in-forms-surveys
번역일: 2026-11-07
카테고리: 06-사이트
---

# 폼·설문에서 수학 계산 사용하기

폼과 설문에 **커스텀 필드**를 추가하고, 폼이나 설문 안의 필드 값으로 계산하는 계산기를 설정하는 기능이에요. 점수 계산이나 금액 합산처럼 입력값을 바로 계산해야 할 때 쓰세요.

**Score Editor**(점수 편집기)에서는 커서를 수식 안에 놓고 바로 고칠 수 있어요. 방향키와 Home 키, End 키로 이동해서 더 빠르게 수정할 수 있어요. 자세한 내용은 아래 '커서로 수식 편집하기'를 참고하세요.

## 새로운 기능

- **커스텀 필드** - **점수**: 입력값을 바탕으로 점수를 계산하는 커스텀 필드를 추가할 수 있어요.
- 계산기: 폼과 설문 안의 숫자 필드와 금액 필드로 계산 로직을 설정할 수 있어요.
- 실시간 계산: 폼이나 설문을 미리보기하는 동안 점수가 실시간으로 계산돼요.
- 조건부 로직에서 점수 사용: 점수를 기준으로 로직과 워크플로우를 설정해 URL로 리디렉션하거나, 부적격 처리하거나, 필드를 표시하거나 숨길 수 있어요.

### 현재 지원하는 필드

- 숫자 유형 필드
- 금액 유형 필드

---

### 커서로 수식 편집하기

수식 안 어디에든 커서를 놓고 바로 고칠 수 있어요. 방향키를 누르면 한 글자씩 이동하고, Home 키는 맨 앞으로, End 키는 맨 뒤로 이동해요. 수정은 커서가 있는 위치에 그대로 적용돼요. 수식 전체를 지우고 다시 쓸 필요가 없어요.

![커서로 수식을 편집하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064207990/original/f6UTaOgk_-t0v3JQYaZvuD2gz3m9S-hzvQ.png?1770226087)

---

## 사용 방법

1. 폼 빌더나 설문 빌더로 이동한 다음, **Quick Add**(빠른 추가)에서 **점수** 필드를 끌어다 놓으세요.

   ![Quick Add에서 점수 필드를 끌어다 놓는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036315477/original/bgYSmxp8T7G3d7R8PiPX_3qEbXxvsYWaXw.png?1731307547)

   ![폼에 추가된 점수 필드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036315599/original/OBTrEA41CSx84horgblO-Q1q1GGyUeVePg.png?1731307714)

2. 계산에 쓸 숫자 필드나 금액 필드를 고르고 계산 규칙을 지정해 계산 로직을 만드세요.

   ![계산 로직을 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036316737/original/XlsU4zBRYb64hVTL91QXFWGarWdDR9B-tg.png?1731309195)

3. 미리보기에서 값을 입력해 보세요. 입력하는 대로 계산 결과가 실시간으로 나와요.

## 이 기능이 필요한 이유

폼이나 설문 안에서 계산이 필요한 경우를 위한 기능이에요. 점수 매기기, 예산 계산 등에 쓸 수 있어요. 실시간으로 계산해 주기 때문에 폼과 설문을 더 편하고 효율적으로 쓸 수 있어요.
