---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003361-workflow-action-text-formatter
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Text Formatter(텍스트 포맷터)

**Text Formatter**(텍스트 포맷터) 액션은 워크플로우 안에서 텍스트를 바꾸고 다듬는 액션이에요. 대소문자 변환, 텍스트 교체, 단어 찾기 같은 작업을 할 수 있어요.

## [동영상](https://www.youtube.com/embed/vLUuSbL-Zwo?&wmode=opaque)

---

## Text Formatter란?

**Text Formatter** 액션은 여러 가지 액션 유형으로 텍스트 데이터를 바꿔요. 대문자나 소문자로 바꾸기, 텍스트 교체, 특정 단어 찾기 등을 할 수 있어요. 텍스트를 다음 단계에서 처리하기 전에 올바른 형태로 맞출 때 꼭 필요해요.

---

## Text Formatter 사용 방법

1. 워크플로우를 만들거나 편집해요.

   **자동화 > 워크플로우**로 이동해서 **Create Workflow**(워크플로우 만들기)를 클릭하거나, 기존 워크플로우를 열어 편집하세요.

   ![워크플로우 만들기 또는 편집 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041019619/original/_5Fz7Xp8ubjh7QaF8vcioBe9iCqq1TCi2g.png?1738718117)

2. 액션을 추가해요.

   플러스(+) 버튼을 눌러 액션을 추가하세요. 목록을 스크롤하거나 검색해서 **Text Formatter**를 찾으세요.

   ![액션 목록에서 Text Formatter 찾기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041019586/original/1tomhZgkQogf6A5jWZgE89aacXc2zsuEMQ.png?1738718010)

3. Text Formatter 설정을 입력해요.

   액션에 구체적인 이름을 붙이고, 사용할 **Action Type**(액션 유형)과 해당 필드를 선택하세요. 액션 유형마다 설정 필드가 달라요. 유형별 내용은 아래 표를 참고하세요.

   ![Text Formatter 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041019641/original/Wqp0VRYrdHw6W-vQ26vF1-k0IvXPZA1weg.png?1738718277)

---

## Text Formatter 상세 정보

### 표 - 액션 유형 상세

| 액션 유형(Action Type) | 설명 | 예시 | 필드 |
| --- | --- | --- | --- |
| **Upper Case** | 모든 글자를 대문자로 바꿔요. | "text" -> "TEXT" | **Select Field**(필드 선택) |
| **Lower Case** | 모든 글자를 소문자로 바꿔요. | "TEXT" -> "text" | **Select Field** |
| **Title Case** | 각 단어의 첫 글자를 대문자로 바꿔요. | "text formatter" -> "Text Formatter" | **Select Field** |
| **Capitalize** | 첫 번째 단어의 첫 글자만 대문자로 바꿔요. | "text formatter" -> "Text formatter" | **Select Field** |
| **Default Value** | 입력한 텍스트가 비어 있으면 지정한 기본값을 넣어요. | "" -> "Default Value" | **Select Field** |
|  |  |  | **Default Value**(기본값) |
| **Trim** | 지정한 글자 수에 맞춰 텍스트를 줄여요. | "applesauce" -> "apple" | **Select Field** |
|  |  |  | **Max Length**(최대 길이) |
|  |  |  | **Remove Characters From Beginning**(앞에서부터 글자 제거) |
|  |  |  | **Ellipses**(말줄임표): 필요하면 텍스트를 세 글자 줄이고 끝에 "..."를 붙여요. |
| **Trim Whitespace** | 텍스트 앞뒤의 공백을 없애요. | " hello " -> "hello" | **Select Field** |
| **Replace Text** | 정확히 일치하는 글자, 단어, 문구를 모두 다른 글자, 단어, 문구로 바꿔요. | "this ain't it" -> "this is not it" | **Select Field** |
|  |  |  | **Find**(찾을 텍스트) |
|  |  |  | **Replace**(바꿀 텍스트) |
| **Find** | 텍스트에서 값이 처음 나오는 위치를 찾아요. 값이 없으면 -1이에요. | "lorem ipsum dolor sit" -> "ipsum" = 7 또는 "cat" = -1 | **Select Field** |
|  |  |  | **Find** |
| **Word Count** | 텍스트에 들어 있는 단어 수를 세요. | "lorem ipsum" -> 2 words | **Select Field** |
| **Length** | 텍스트에 들어 있는 글자 수를 세요. | "cat" -> 3 characters | **Select Field** |
| **Split Text** | 지정한 구분자로 텍스트를 나눈 뒤, 구간 하나(첫 번째, 두 번째, 뒤에서 두 번째, 마지막)를 가져와요. | "lorem ipsum dolor sit"를 " "(공백)으로 나누면 두 번째 구간은 "ipsum" | **Select Field** |
|  |  |  | **Separator**(구분자) |
|  |  |  | **Segment**(구간) |
| **Remove HTML Tags** | 텍스트에서 HTML 태그를 없애요(HTML을 일반 텍스트로 바꿔요). | `<p>Hello world!</p>` -> "Hello world!" | **Select Field** |
| **Extract Email** | 텍스트에서 처음 발견한 이메일 주소를 가져와요. | "my email is name@domain.com" -> "name@domain.com" | **Select Field** |
| **Extract URL** | 텍스트에서 처음 발견한 URL을 가져와요. | " my homepage is lioncleaning.com" -> "lioncleaning.com" | **Select Field** |

### 표 - Select Field 상세

**Select Field**에서는 단계별로 들어가며 필드를 골라요. 아래 표의 필드 이름은 빌더 화면에 표시되는 영어 그대로 적었고, 처음 나올 때만 괄호로 뜻을 붙였어요.

| 필드 1단계 | 필드 2단계 | 필드 3단계 |
| --- | --- | --- |
| **Contact**(연락처, CRM에 저장된 연락처) | **Full Name**(전체 이름) | - |
|  | **First Name**(이름) | - |
|  | **Last Name**(성) | - |
|  | **Email**(이메일) | - |
|  | **Phone**(전화번호) | - |
|  | **Phone (raw format)**(전화번호, 원본 형식) | - |
|  | **Company Name**(회사명) | - |
|  | **Full Address**(전체 주소) | - |
|  | **Address 1**(주소 1) | - |
|  | **City**(도시) | - |
|  | **State**(주/도) | - |
|  | **Country**(국가) | - |
|  | **Postal Code**(우편번호) | - |
|  | **Timezone**(시간대) | - |
|  | **Source**(소스) | - |
|  | **Website**(웹사이트) | - |
|  | **ID**(ID) | - |
| **User**(사용자, 서브 계정의 직원) | **Full Name** | - |
|  | **First Name** | - |
|  | **Last Name** | - |
|  | **Email** | - |
|  | **Phone** | - |
|  | **Phone (raw format)** | - |
|  | **Signature**(서명) | - |
|  | **Calendar Link**(캘린더 링크) | - |
|  | **Twilio Phone**(Twilio 전화번호) | - |
|  | **ID** | - |
| **Message**(메시지) | **Message Body**(메시지 본문) | - |
|  | **Message Subject**(메시지 제목) | - |
|  | **Message Attachments**(메시지 첨부파일) | - |
| **Account**(계정, 서브 계정의 비즈니스) | **Name**(이름) | - |
|  | **Full Address** | - |
|  | **Address Line 1**(주소 1) | - |
|  | **City** | - |
|  | **State** | - |
|  | **Country** | - |
|  | **Postal Code** | - |
|  | **Email** | - |
|  | **Phone** | - |
|  | **Phone (raw format)** | - |
|  | **Website** | - |
|  | **Logo URL**(로고 URL) | - |
|  | **Owner**(소유자) | **First Name** |
|  |  | **Last Name** |
|  |  | **Email** |
|  |  | **ID** |
|  |  | **Facebook Lead ID**(Facebook 리드 ID) |
| **Phone Call**(전화 통화) | **Phone Call Direction**(통화 방향) | - |
|  | **Phone Call Duration**(통화 시간) | - |
|  | **Phone Call From**(발신 번호) | - |
|  | **Phone Call To**(수신 번호) | - |
|  | **Phone Call From City**(발신 도시) | - |
|  | **Phone Call From State**(발신 주/도) | - |
|  | **Phone Call From Country**(발신 국가) | - |
|  | **Phone Call From Zip**(발신 우편번호) | - |
|  | **Phone Call To City**(수신 도시) | - |
|  | **Phone Call To State**(수신 주/도) | - |
|  | **Phone Call To Zip**(수신 우편번호) | - |
|  | **Phone Call To Country**(수신 국가) | - |
|  | **Phone Call Answered By Phone**(응답한 전화번호) | - |
|  | **Phone Call Answered By User Name**(응답한 사용자 이름) | - |
|  | **Phone Call Answered By User Id**(응답한 사용자 ID) | - |
|  | **Phone Call Answered By Device**(응답한 기기) | - |
|  | **Phone Call User Id**(통화 사용자 ID) | - |
|  | **Phone Call User Name**(통화 사용자 이름) | - |
|  | **Phone Call Start Time**(통화 시작 시간) | - |
|  | **Phone Call End Time**(통화 종료 시간) | - |
|  | **Phone Call Status**(통화 상태) | - |
| **Client Portal Contact**(클라이언트 포털 연락처) | **Login URL (Magic Link)**(로그인 URL, 매직 링크) | - |
| **Attribution**(어트리뷰션) | **First**(첫 번째) | **Session Source**(세션 소스) |
|  |  | **URL**(URL) |
|  |  | **Campaign**(캠페인) |
|  |  | **UTM Source**(UTM 소스) |
|  |  | **UTM Medium**(UTM 매체) |
|  |  | **UTM Content**(UTM 콘텐츠) |
|  |  | **Referrer**(유입 경로) |
|  |  | **Campaign Id**(캠페인 ID) |
|  |  | **FB Clickld**(Facebook 클릭 ID) |
|  |  | **Google Clickld**(Google 클릭 ID) |
|  |  | **Google Client Id**(Google 클라이언트 ID) |
|  |  | **UTM Campaign**(UTM 캠페인) |
|  |  | **UTM Keyword**(UTM 키워드) |
|  |  | **UTM Match Type**(UTM 매치 유형) |
|  |  | **Ad Group ID**(광고 그룹 ID) |
|  |  | **Ad ID**(광고 ID) |
|  | **Latest**(최근) | **Session Source** |
|  |  | **URL** |
|  |  | **Campaign** |
|  |  | **UTM Source** |
|  |  | **UTM Medium** |
|  |  | **UTM Content** |
|  |  | **Referrer** |
|  |  | **Campaign Id** |
|  |  | **FB Clickld** |
|  |  | **Google Clickld** |
|  |  | **Google Client Id** |
|  |  | **UTM Campaign** |
|  |  | **UTM Keyword** |
|  |  | **UTM Match Type** |
|  |  | **Ad Group ID** |
|  |  | **Ad ID** |
| **Custom Fields**(커스텀 필드) | 서브 계정마다 달라요. | - |
| **Custom Values**(커스텀 값) | 서브 계정마다 달라요. | - |

---

## 함께 쓰기 좋은 트리거

- **Form Submission**(폼 제출): 폼이 제출된 뒤 Text Formatter 액션을 실행해서 데이터 형식을 맞춰요. 예를 들어 필드가 비어 있으면 기본값 "답변 없음"을 채울 수 있어요.
- **New Contact Created**(새 연락처 생성됨): CRM에 새 연락처가 추가될 때 텍스트 필드 형식을 자동으로 맞춰요. 예를 들어 이름의 대소문자를 올바르게 정리할 수 있어요.
- **Webhook Received**(웹훅 수신): 외부 시스템에서 받은 텍스트의 형식을 자동으로 맞춰요. 이 트리거는 개발자와 상의해서 설정하세요.

---

## 자주 묻는 질문

### Text Formatter로 메시지를 개인화할 수 있나요?

네, 할 수 있어요. Text Formatter를 커스텀 값, 머지 필드와 함께 쓰면 형식이 잘 맞는 개인화 메시지를 만들 수 있어요.

### 여러 포맷 액션을 이어서 쓸 수 있나요?

네, 할 수 있어요. 워크플로우에 Text Formatter 액션을 여러 개 추가하면 복잡한 텍스트 변환을 단계별로 처리할 수 있어요.

### Text Formatter는 숫자에도 쓸 수 있나요?

부분적으로 가능해요. 숫자가 텍스트 형태라면 텍스트처럼 다룰 수 있어요. 숫자가 숫자 형태라면 **Number Formatter**(숫자 포맷터) 액션을 사용하세요.

### 내 텍스트가 들어 있는 필드를 찾을 수 없어요.

위의 **Select Field** 상세 표에 그 필드가 있는지 확인하세요. 필드를 선택할 수 있는 단계까지 끝까지 들어가야 하는 경우도 있어요.
