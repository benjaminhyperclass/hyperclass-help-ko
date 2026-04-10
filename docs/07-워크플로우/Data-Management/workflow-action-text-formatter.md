---

번역일: 2026-04-08
카테고리: 07-워크플로우 > 데이터 관리
---

# 워크플로우 액션 - 텍스트 포맷터

텍스트 포맷터(Text Formatter) 액션을 사용하면 텍스트를 관리하고 변환할 수 있습니다.

---

**목차**

- [텍스트 포맷터란?](#텍스트-포맷터란)
- [텍스트 포맷터 사용 방법](#텍스트-포맷터-사용-방법)
- [텍스트 포맷터 세부 사항](#텍스트-포맷터-세부-사항)
- [액션 타입 세부 사항 표](#액션-타입-세부-사항-표)
- [필드 선택 세부 사항 표](#필드-선택-세부-사항-표)
- [권장 트리거](#권장-트리거)
- [자주 묻는 질문](#자주-묻는-질문)

---

## 텍스트 포맷터란?

워크플로우의 **텍스트 포맷터** 액션을 사용하면 다양한 액션 타입을 통해 텍스트 데이터를 조작하고 수정할 수 있습니다. 텍스트를 대문자나 소문자로 변경하거나, 텍스트를 치환하거나, 특정 단어를 찾는 등의 작업이 가능합니다. 이는 텍스트 데이터가 추가 처리 전에 올바르게 표시되거나 조작되도록 보장하는 데 중요합니다.

---

## 텍스트 포맷터 사용 방법

**1단계:** 워크플로우 생성/편집

Automation(자동화) > Workflows(워크플로우)로 이동하여 Create Workflow(워크플로우 생성)를 클릭하거나 기존 워크플로우를 편집하세요.

![워크플로우 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041019619/original/_5Fz7Xp8ubjh7QaF8vcioBe9iCqq1TCi2g.png?1738718117)

**2단계:** 액션 추가

더하기(+) 버튼을 사용하여 액션을 추가하고 스크롤하거나 검색하여 Text Formatter(텍스트 포맷터)를 찾으세요.

![텍스트 포맷터 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041019586/original/1tomhZgkQogf6A5jWZgE89aacXc2zsuEMQ.png?1738718010)

**3단계:** 텍스트 포맷터 설정 구성

액션에 더 구체적인 이름을 지정하고, 사용할 액션 타입을 선택한 후(이 문서의 나머지 부분 참고) 관련 필드를 선택하세요. 액션 타입에 따라 구성 필드가 다릅니다.

![텍스트 포맷터 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041019641/original/Wqp0VRYrdHw6W-vQ26vF1-k0IvXPZA1weg.png?1738718277)

---

## 텍스트 포맷터 세부 사항

### 액션 타입 세부 사항 표

| 액션 타입 | 설명 | 예시 | 필드 |
|----------|------|------|------|
| **대문자** | 모든 텍스트를 대문자로 변환 | "text" → "TEXT" | 필드 선택 |
| **소문자** | 모든 텍스트를 소문자로 변환 | "TEXT" → "text" | 필드 선택 |
| **제목 케이스** | 각 단어의 첫 글자를 대문자로 변환 | "text formatter" → "Text Formatter" | 필드 선택 |
| **첫 글자 대문자** | 첫 번째 단어의 첫 글자만 대문자로 변환 | "text formatter" → "Text formatter" | 필드 선택 |
| **기본값** | 입력 텍스트가 비어있을 경우 지정한 기본값으로 설정 | "" → "Default Value" | 필드 선택<br>기본값 |
| **잘라내기** | 지정된 문자 수만큼 텍스트를 단축/절단 | "applesauce" → "apple" | 필드 선택<br>최대 길이<br>처음에서 제거할 문자 수<br>생략 부호(필요 시 텍스트를 3글자 짧게 하고 끝에 "..." 삽입) |
| **공백 제거** | 앞과 뒤의 공백 제거 | " hello " → "hello" | 필드 선택 |
| **텍스트 치환** | 정확한 문자, 단어 또는 구문을 다른 문자, 단어 또는 구문으로 모두 치환 | "this ain't it" → "this is not it" | 필드 선택<br>찾을 텍스트<br>바꿀 텍스트 |
| **찾기** | 텍스트에서 값의 첫 번째 위치를 찾음, 값이 없으면 -1 반환 | "lorem ipsum dolor sit"에서 "ipsum" = 7 또는 "cat" = -1 | 필드 선택<br>찾을 텍스트 |
| **단어 수** | 텍스트 문자열의 단어 수를 계산 | "lorem ipsum" → 2 words | 필드 선택 |
| **길이** | 텍스트 문자열의 문자 수를 계산 | "cat" → 3 characters | 필드 선택 |
| **텍스트 분할** | 제공한 구분자를 기준으로 텍스트 문자열을 분할하고 세그먼트 중 하나를 반환(첫 번째, 두 번째, 끝에서 두 번째, 마지막) | "lorem ipsum dolor sit"를 " "로 분할 → 두 번째 세그먼트는 "ipsum" | 필드 선택<br>구분자<br>세그먼트 |
| **HTML 태그 제거** | 텍스트에서 HTML 태그를 제거(HTML을 일반 텍스트로 변환) | "\<p>Hello world!\</p>" → "Hello world!" | 필드 선택 |
| **이메일 추출** | 텍스트에서 발견된 첫 번째 이메일 주소를 추출 | "my email is name@domain.com" → "name@domain.com" | 필드 선택 |
| **URL 추출** | 텍스트에서 발견된 첫 번째 URL을 추출 | "my homepage is lioncleaning.com" → "lioncleaning.com" | 필드 선택 |

### 필드 선택 세부 사항 표

| 필드 레벨 1 | 필드 레벨 2 | 필드 레벨 3 |
|------------|------------|------------|
| **Contact(연락처)** <br>(CRM의 고객) | Full Name(전체 이름) | - |
| | First Name(이름) | - |
| | Last Name(성) | - |
| | Email(이메일) | - |
| | Phone(전화번호) | - |
| | Phone (raw format)(전화번호 원시 형식) | - |
| | Company Name(회사명) | - |
| | Full Address(전체 주소) | - |
| | Address 1(주소 1) | - |
| | City(도시) | - |
| | State(주/도) | - |
| | Country(국가) | - |
| | Postal Code(우편번호) | - |
| | Timezone(시간대) | - |
| | Source(출처) | - |
| | Website(웹사이트) | - |
| | ID | - |
| **User(사용자)** <br>(하위 계정의 직원) | Full Name(전체 이름) | - |
| | First Name(이름) | - |
| | Last Name(성) | - |
| | Email(이메일) | - |
| | Phone(전화번호) | - |
| | Phone (raw format)(전화번호 원시 형식) | - |
| | Signature(서명) | - |
| | Calendar Link(캘린더 링크) | - |
| | Twilio Phone(Twilio 전화번호) | - |
| | ID | - |
| **Message(메시지)** | Message Body(메시지 본문) | - |
| | Message Subject(메시지 제목) | - |
| | Message Attachments(메시지 첨부파일) | - |
| **Account(계정)** <br>(하위 계정 비즈니스) | Name(이름) | - |
| | Full Address(전체 주소) | - |
| | Address Line 1(주소 라인 1) | - |
| | City(도시) | - |
| | State(주/도) | - |
| | Country(국가) | - |
| | Postal Code(우편번호) | - |
| | Email(이메일) | - |
| | Phone(전화번호) | - |
| | Phone (raw format)(전화번호 원시 형식) | - |
| | Website(웹사이트) | - |
| | Logo URL(로고 URL) | - |
| **Owner(소유자)** | First Name(이름) | - |
| | Last Name(성) | - |
| | Email(이메일) | - |
| | ID | - |
| **Facebook Lead ID** | - | - |
| **Phone Call(전화)** | Phone Call Direction(통화 방향) | - |
| | Phone Call Duration(통화 시간) | - |
| | Phone Call From(발신번호) | - |
| | Phone Call To(수신번호) | - |
| | Phone Call From City(발신 도시) | - |
| | Phone Call From State(발신 주/도) | - |
| | Phone Call From Country(발신 국가) | - |
| | Phone Call From Zip(발신 우편번호) | - |
| | Phone Call To City(수신 도시) | - |
| | Phone Call To State(수신 주/도) | - |
| | Phone Call To Zip(수신 우편번호) | - |
| | Phone Call To Country(수신 국가) | - |
| | Phone Call Answered By Phone(전화 응답 번호) | - |
| | Phone Call Answered By User Name(전화 응답 사용자명) | - |
| | Phone Call Answered By User Id(전화 응답 사용자 ID) | - |
| | Phone Call Answered By Device(전화 응답 장치) | - |
| | Phone Call User Id(전화 사용자 ID) | - |
| | Phone Call User Name(전화 사용자명) | - |
| | Phone Call Start Time(통화 시작 시간) | - |
| | Phone Call End Time(통화 종료 시간) | - |
| | Phone Call Status(통화 상태) | - |
| **Client Portal Contact(클라이언트 포털 연락처)** | Login URL (Magic Link)(로그인 URL(매직 링크)) | - |
| **Attribution(어트리뷰션)** | **First(최초)** | Session Source(세션 출처) |
| | | URL |
| | | Campaign(캠페인) |
| | | UTM Source(UTM 소스) |
| | | UTM Medium(UTM 매체) |
| | | UTM Content(UTM 콘텐츠) |
| | | Referrer(추천자) |
| | | Campaign Id(캠페인 ID) |
| | | FB Clickld(FB 클릭 ID) |
| | | Google Clickld(구글 클릭 ID) |
| | | Google Client Id(구글 클라이언트 ID) |
| | | UTM Campaign(UTM 캠페인) |
| | | UTM Keyword(UTM 키워드) |
| | | UTM Match Type(UTM 매치 타입) |
| | | Ad Group ID(광고 그룹 ID) |
| | | Ad ID(광고 ID) |
| | **Latest(최근)** | Session Source(세션 출처) |
| | | URL |
| | | Campaign(캠페인) |
| | | UTM Source(UTM 소스) |
| | | UTM Medium(UTM 매체) |
| | | UTM Content(UTM 콘텐츠) |
| | | Referrer(추천자) |
| | | Campaign Id(캠페인 ID) |
| | | FB Clickld(FB 클릭 ID) |
| | | Google Clickld(구글 클릭 ID) |
| | | Google Client Id(구글 클라이언트 ID) |
| | | UTM Campaign(UTM 캠페인) |
| | | UTM Keyword(UTM 키워드) |
| | | UTM Match Type(UTM 매치 타입) |
| | | Ad Group ID(광고 그룹 ID) |
| | | Ad ID(광고 ID) |
| **Custom Fields(커스텀 필드)** | 각 하위 계정마다 고유 | - |
| **Custom Values(커스텀 값)** | 각 하위 계정마다 고유 | - |

---

## 권장 트리거

- **폼 제출:** 폼 제출 후 텍스트 포맷터 액션을 트리거하여 데이터가 올바르게 포맷되도록 보장(예: 필드가 비어있을 때 기본값 "답변 없음" 입력)
- **새 연락처 생성:** CRM에 새 연락처가 추가될 때 텍스트 필드를 자동으로 포맷(예: 이름이 올바르게 대문자 처리됨)
- **웹훅 수신:** 외부 시스템에서 받은 텍스트를 자동으로 포맷(이 부분은 개발자와 상담하세요)

---

## 자주 묻는 질문

**Q: 텍스트 포맷터를 사용해서 개인화된 메시지를 만들 수 있나요?**

A: 네! 텍스트 포맷터를 커스텀 값과 머지 필드와 결합하여 올바르게 포맷된 텍스트로 개인화된 메시지를 만들 수 있습니다.

**Q: 여러 포맷팅 액션을 연결해서 사용할 수 있나요?**

A: 네! 워크플로우 내에서 여러 텍스트 포맷터 액션을 추가하여 복잡한 텍스트 변환을 단계별로 수행할 수 있습니다.

**Q: 텍스트 포맷터가 숫자에도 작동하나요?**

A: 어느 정도는 그렇습니다. 숫자가 텍스트 형태라면 텍스트처럼 조작할 수 있습니다. 숫자가 숫자 형태라면 [Number Formatter 액션](workflow-action-number-formatter.md)을 사용하세요.

**Q: 텍스트가 들어있는 필드를 찾을 수 없어요.**

A: 표를 다시 확인하여 해당 필드가 포함되어 있는지 확인하고, 충분히 깊이 드릴다운해서 선택하세요.

---
*원문 최종 수정: Wed, 5 Feb, 2025 at 7:42 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*