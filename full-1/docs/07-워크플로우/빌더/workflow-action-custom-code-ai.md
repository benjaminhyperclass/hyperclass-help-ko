---
원문: https://help.gohighlevel.com/support/solutions/articles/155000004709-workflow-action-custom-code-ai
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Custom Code(커스텀 코드) AI로 코드 만들기

워크플로우의 **Custom Code**(커스텀 코드) 액션에서 원하는 기능을 말로 설명하면 AI가 코드를 만들어 줘요. 이 문서에서는 Code with AI(베타)의 사용 방법과 활용 사례를 안내해요.

## 개요

Code with AI(베타)를 쓰면 워크플로우에 넣을 커스텀 코드를 간단한 설명만으로 만들 수 있어요. 코드를 처음부터 직접 쓰지 않아도 돼요.

## 이전 방식

- 워크플로우에서 커스텀 코드를 만들려면 JavaScript 코드를 처음부터 직접 작성해야 했어요. 시간이 오래 걸리고 프로그래밍 지식도 필요했어요.
- 이전 워크플로우 단계의 입력 속성을 코드에서 쓰려면 직접 매핑해야 했어요.
- 적용하기 전에 코드를 직접 테스트하고 디버깅해야 했어요.
- 그래서 많은 시간과 기술이 필요했어요.

## 달라진 점

이제 AI가 코드 작성을 도와줘요. Code with AI로 작업 과정이 훨씬 간단해졌어요.

- AI 코드 생성: 원하는 기능을 쉬운 말로 설명하면 AI가 JavaScript 코드를 만들어 줘요.
- 입력 속성 자동 반영: 설명한 내용에 맞는 입력 속성을 AI가 알아서 코드에 넣어 줘요.
- 한 번에 적용: AI가 만든 코드를 확인한 뒤 워크플로우에 바로 넣을 수 있어요.
- 다시 생성: 첫 결과가 마음에 들지 않으면 **Generate**(생성)를 다시 클릭해 새 코드를 받아 보세요.

{% hint style="info" %}
팁: 요청 내용을 최대한 구체적으로 적을수록 결과가 좋아요.
{% endhint %}

## 사용 방법

1. 워크플로우에서 **Custom Code**(커스텀 코드) 액션을 선택하세요.

   ![워크플로우에서 Custom Code 액션 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042527561/original/nAuVDOdQnA_E5f_4vFRoyZnV4uiwuuVPLQ.png?1740997277)

2. **Build with AI**(AI로 빌드하기)를 클릭해 AI 어시스턴트를 여세요.

   ![Build with AI 버튼으로 AI 어시스턴트 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042527587/original/NGS2QkhHBqVWTPkey7Js2HHEO9y-OxhfMw.png?1740997301)

3. 원하는 기능을 설명해 입력하세요. 예를 들어 이렇게 쓸 수 있어요. "MM-DD-YYYY 형식으로 날짜를 돌려주는 API가 있어요. 이 날짜를 YYYY-MM-DD 형식으로 바꾸는 코드를 만들어 주세요."
4. **Generate**(생성)를 클릭하면 AI가 코드를 만들어 줘요.

   ![설명 입력 후 Generate 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042527680/original/wHemORBiauxMu8J1jd5jKPyo-Ukw5r0AHg.png?1740997376)

   ![AI가 생성한 코드 결과](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042527732/original/bbQ38-TfLfpWsC2KL8rjDbSwD0pjs1xVfA.png?1740997417)

5. 코드를 고치고 싶다면 텍스트 상자에 바꾸고 싶은 내용을 적고 **Regenerate**(재생성)를 클릭하세요.

   ![수정 내용을 입력하고 Regenerate 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042527814/original/IdROuIKWKKyiOz_M_FaiBWIqEXTOuU2tsA.jpeg?1740997504)

6. 결과를 확인한 뒤 **Use Code**(코드 사용)를 클릭해 워크플로우에 넣으세요.

   ![Use Code 클릭으로 워크플로우에 코드 적용](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042527822/original/raFUyfiaiJllR7EUEYNmwx7IBk8zZpL5tw.jpeg?1740997515)

## 활용 사례

- 데이터 형식 맞추기: 전화번호나 날짜를 원하는 형식으로 자동 변환해요.
- API 연동: HTTP 요청으로 외부 서비스와 연결하는 코드를 만들어요.
- 수학 계산: 이자율, 할인율 같은 값을 계산식에 따라 자동으로 구해요.
- 문자열 처리: 이메일 제목에서 이메일 주소를 뽑아내는 것처럼 텍스트에서 필요한 정보를 추출해요.
- 조건 처리: 특정 기준에 따라 리드를 분배하는 것처럼 직접 정한 판단 규칙을 적용해요.
