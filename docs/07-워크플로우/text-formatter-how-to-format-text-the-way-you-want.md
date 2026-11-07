---
원문: /support/solutions/articles/155000002065-text-formatter-how-to-format-text-the-way-you-want
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Text Formatter(텍스트 포매터)로 텍스트를 원하는 형태로 바꾸기

**Text Formatter**(텍스트 포매터)는 워크플로우에서 텍스트 데이터의 형식을 바꾸거나 필요한 부분만 뽑아낼 때 쓰는 액션이에요. 이 문서에서는 Text Formatter의 유형별 기능과 쓰임새, 설정 방법을 안내해요.

## 1. Text Formatter 액션이란?

가지고 있는 데이터의 형식을 바꾸거나, 그 안에서 필요한 정보만 꺼내야 할 때가 있어요. 이럴 때 **Text Formatter**를 쓰면 데이터를 원하는 형태로 맞출 수 있어요. 무료로 쓸 수 있는 액션이에요.

## 2. Text Formatter 유형과 활용 예

- **Upper Case**(대문자 변환): 텍스트의 모든 글자를 대문자로 바꿔요.
  - 사용자 입력을 대문자로 바꿔 데이터를 통일할 때
  - 출력 메시지의 대소문자 표기를 일정하게 맞출 때

- **Lower Case**(소문자 변환): 텍스트를 소문자로 바꿔요.
  - 대소문자를 구분하지 않고 비교하도록 텍스트를 통일할 때
  - 사용자가 입력한 내용을 소문자로 맞춰 일관성을 유지할 때

- **Title Case**(단어별 첫 글자 대문자): 각 단어의 첫 글자를 대문자로 바꿔요.
  - 제목과 소제목을 보기 좋게 정리할 때
  - 특정 콘텐츠를 더 읽기 쉽게 만들 때

- **Capitalize**(첫 글자 대문자): 텍스트의 첫 글자를 대문자로 바꿔요.
  - 이름과 제목의 대문자 표기를 바르게 맞출 때
  - 특정 콘텐츠를 더 보기 좋게 만들 때

- **Default Value**(기본값): 텍스트가 비어 있으면 기본값을 반환하고, 텍스트가 있으면 그 텍스트를 그대로 반환해요.
  - 빠진 데이터를 대신할 내용을 채울 때
  - 정보가 불완전해도 일정한 응답을 유지할 때

- **Trim**(자르기): 텍스트를 지정한 길이로 줄여요.
  - 사용자가 입력한 내용에 글자 수 제한을 두어, 정해진 범위 안에서 간결하게 받을 때
  - 기사 요약이나 티저처럼 긴 텍스트의 짧은 미리보기를 일정한 형식으로 만들 때

- **Trim Whitespaces**(공백 제거): 텍스트 맨 앞과 맨 뒤의 공백을 없애요.
  - 공백을 정리해 텍스트를 읽기 쉽게 만들 때
  - 사용자가 입력한 내용의 형식을 다듬을 때

- **Replace Text**(텍스트 교체): 지정한 텍스트를 새 값으로 바꿔요.
  - 텍스트 안의 오래된 정보를 업데이트할 때
  - 템플릿 기반 콘텐츠에 상황에 맞는 값을 넣을 때

- **Find**(찾기): 텍스트 안에서 지정한 문구가 처음 나오는 위치를 알려 줘요.
  - 사용자가 입력한 내용에서 특정 키워드나 문구를 찾을 때
  - 텍스트에 포함된 키워드를 바탕으로 필요한 정보를 뽑을 때

- **Length**(길이): 텍스트의 글자 수를 알려 줘요.
  - 사용자가 입력한 내용의 글자 수 제한을 확인할 때
  - 동적으로 만들어진 텍스트의 길이를 분석할 때

- **Extract URL**(URL 추출): 텍스트에서 첫 번째 URL을 뽑아요.
  - 사용자 입력에서 URL을 수집하고 확인할 때
  - 콘텐츠에 포함된 URL 목록을 만들 때

- **Extract Email**(이메일 추출): 텍스트에서 첫 번째 이메일 주소를 뽑아요.
  - 여러 출처에서 가져온 이메일 주소를 확인하고 정리할 때
  - 텍스트에서 연락처 정보를 자동으로 뽑을 때

- **Word Count**(단어 수): 텍스트에 들어 있는 단어 수를 알려 줘요.
  - 사용자가 입력한 내용의 단어 수를 확인하고 제한할 때
  - 단어 수를 기준으로 텍스트 정보의 복잡도를 분석할 때

- **Remove HTML Tags**(HTML 태그 제거): 텍스트에서 HTML 태그를 없애요.
  - HTML 콘텐츠를 일반 텍스트로 정리할 때
  - HTML이 아닌 환경에서도 텍스트가 제대로 보이게 할 때

- **Split**(분할): 지정한 구분자를 기준으로 텍스트를 여러 조각으로 나눠요.
  - 쉼표로 구분된 값을 개별 항목으로 나눌 때
  - 구분자로 나뉜 목록에서 키워드나 문구를 뽑을 때

## 3. Text Formatter 액션 사용 방법

1. **+** 아이콘을 눌러 액션을 추가해요. **Internal Tools**(내부 도구) 카테고리에서 **Text Formatter**를 찾거나, 검색창에서 바로 검색할 수 있어요.

   ![액션 추가에서 Text Formatter 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022273578/original/4gJhoNjkJpLqoc24iC741Wa0a8EF3IK9ag.jpeg?1709635138)

2. **Text Formatter** 액션을 선택한 다음, **Action Type**(액션 유형) 목록에서 원하는 유형을 골라요.

   ![Action Type 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022273685/original/DEIHgODvnAfTgsCM72Pv2TfYBEpK76kS_w.png?1709635224)

### Trim 유형 설정

1. 자를 대상인 입력 텍스트를 선택해요.
2. 텍스트를 줄일 길이를 선택해요. 이 두 항목은 필수예요.
3. 필요하면 텍스트 맨 앞에서 글자를 건너뛰는 옵션을 선택해요. 이 옵션을 선택하고 입력란에 숫자를 넣으면, 텍스트 맨 앞에서 그 수만큼의 글자가 제거돼요.
4. 필요하면 텍스트 끝에 **Ellipsis**(말줄임표)를 붙이는 토글을 켜요.

![Trim 유형 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022274074/original/cJWtiIKOC5p5e70uubXKOkkrAw2uKRRdTw.png?1709635442)

### Split 유형 설정

1. 나눌 입력 데이터를 선택해요.
2. **Separator**(구분자)를 입력해요.
3. 나눈 조각 중 어느 것을 결과로 받을지 선택해요. **First**(첫 번째), **Second**(두 번째), **Last**(마지막), **Second Last**(끝에서 두 번째) 중에서 고를 수 있어요.

![Split 유형 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155022274322/original/8rm-RC2H8OEFL9FxjwOo8eF6RReinvYW2w.png?1709635599)
