---
원문: https://help.gohighlevel.com/support/solutions/articles/155000005461-voice-ai-custom-actions
번역일: 2026-11-06
카테고리: 13-AI-Employee
---

# 음성 AI 사용자 지정 액션으로 통화 중 웹훅 보내기

음성 AI 사용자 지정 액션을 쓰면 Voice AI 에이전트가 실시간 통화 중에 POST 웹훅 요청을 보낼 수 있어요. 통화가 끝나기 전에 외부 시스템에서 데이터를 조회하거나, 정보를 보내거나, 외부 프로세스를 실행할 수 있어요.

## 음성 AI 사용자 지정 액션이란?

음성 AI 사용자 지정 액션은 Voice AI 에이전트가 통화 중에 외부 API로 POST 웹훅 요청을 보내는 기능이에요. 웹훅 URL, 헤더, 인증 정보를 설정할 수 있고, 발신자에게서 실시간으로 받은 값을 동적 파라미터로 함께 보낼 수 있어요. 덕분에 에이전트는 통화 중 발신자가 말한 내용에 따라 정보를 가져오거나 보낼 수 있어요.

---

## 사용자 지정 액션의 장점

사용자 지정 액션을 쓰면 Voice AI 에이전트가 통화 중에 외부 시스템과 연결돼요. 응답을 개인화하고, 정보를 조회하고, 업무를 더 빠르게 처리할 수 있어요.

- 발신자의 의도나 대화 단서에 따라 실시간으로 POST 웹훅 요청을 보내요.
- 통화 중에 정보를 조회하거나 전송해요.
  - 예: 발신자가 "최근에 주문한 상품은 지금 어떤 상태인가요?"라고 물으면, AI가 주문 관리 시스템을 호출해서 통화를 대기시키지 않고 주문 상태를 알려 줄 수 있어요.
- 웹훅 URL, 헤더, 인증을 설정해요.
- 전화번호, 이메일 주소, 날짜, 주문 ID 같은 통화 데이터를 동적으로 전달해요.
- 액션을 저장하기 전에 웹훅 요청과 응답을 테스트해요.
- 통화 중에 더 많은 요청을 해결해서 수동 후속 조치를 줄여요.

---

## 음성 AI 대화 트리거

대화 트리거는 통화 중 사용자 지정 액션이 언제 실행될지 정해요. 발신자가 한 말, 발신자가 알려 준 정보, Voice AI 에이전트가 파악한 의도를 기준으로 트리거를 만들 수 있어요.

**트리거 예시**

- 발신자가 "예약을 확인하고 싶어요"라고 말할 때
- 발신자가 이메일 주소를 알려 줄 때
- 발신자가 주문 번호, 예약 ID, 계좌 번호처럼 숫자열을 알려 줄 때

![대화 트리거 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055755629/original/vgHTKbSkl3-K92KksuOOFk68vYIqwNYOkw.png?1760133377)

---

## 웹훅 사용자 지정 액션

웹훅 연동은 음성 AI 사용자 지정 액션의 핵심이에요. CRM, 일정 관리 도구, 데이터베이스, 주문 관리 시스템 등 API 요청을 지원하는 외부 시스템과 Voice AI 에이전트를 연결해요.

사용자 지정 액션은 POST 요청 하나로 정의하고, 요청에는 다음 내용을 담을 수 있어요.

- 웹훅 엔드포인트 URL
- API 키나 토큰 같은 헤더
- Bearer 토큰, Basic Auth 같은 인증 정보
- 통화 중 수집한 동적 파라미터가 담긴 요청 본문

예를 들어 CRM과 연동한다면, 웹훅 URL이 `/api/v1/lookupContact` 같은 엔드포인트를 가리키고 발신자의 이메일 주소나 전화번호 같은 파라미터를 함께 보낼 수 있어요.

Salesforce 같은 CRM과 연동하는 경우에도 마찬가지예요. 웹훅 URL이 /api/v1/lookupContact 같은 엔드포인트를 가리키고, 연락처의 이메일이나 전화번호 같은 파라미터를 함께 보낼 수 있어요.

![웹훅 사용자 지정 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055755818/original/0AnIb0Kcut2JhaBPtg13Hc2HJYhgfZpu7A.png?1760134023)

---

## 동적 파라미터 수집

Voice AI는 실시간 통화 중에 필요한 정보를 추출해서 이름을 붙일 수 있어요. 이 값을 웹훅 요청 본문의 파라미터에 지정할 수 있어요. 웹훅 요청을 보내기 전에 주문 번호, 이메일 주소, 전화번호, 예약 날짜 같은 정보를 AI가 먼저 받아야 할 때 유용해요.

**지원하는 데이터 유형**

- 텍스트 / 문자열
- 숫자
- 이메일
- 전화번호
- 날짜

![동적 파라미터 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055755787/original/ce1pQwudBZ1h7MA3OKbJUXB1XQna-sm0fA.png?1760133816)

---

## 사용자 지정 액션 설정하기

Voice AI 에이전트 화면에서 몇 단계만 거치면 사용자 지정 액션을 설정할 수 있어요.

### 1단계: Voice AI 에이전트로 이동하기

1. **AI 에이전트 > 음성 AI**로 이동해요.
2. **Agent List**(에이전트 목록) 탭을 열어요.
3. 설정할 Voice AI 에이전트를 선택해요.

![음성 AI 에이전트 목록에서 에이전트를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155081221494/original/GZ4d9BcGys7eGUngBQdsvc4Ab2afYUB6gg.png?1789666015)

### 2단계: 사용자 지정 액션 추가하기

1. 음성 AI 빌더에서 **빌드** 탭이 선택되어 있는지 확인해요.
2. **Actions**(액션) 섹션을 찾아요.
3. **+ New Action**(새 액션 추가)을 클릭해요.
4. **사용자 지정 액션 2.0**을 선택해요.

![액션 섹션에서 새 액션을 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155081221582/original/kuNV-hw-QctTn4tI_-halsAGDP2tnXjggQ.png?1789666090)

![사용자 지정 액션 2.0 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155081221736/original/Jjh_V3YhYvXCg90F4JMT8dJn1TraTCxI6w.png?1789666177)

### 3단계: 사용자 지정 액션 설정하기

필요한 정보를 입력해요. 웹훅 설정에 따라 입력하지 않아도 되는 항목이 있을 수 있어요.

1. 사용자 지정 액션 이름을 입력해요.
2. 대화 트리거 조건을 설정해요.
   - 예: 발신자가 "계좌 잔액을 확인하고 싶어요"라고 말하면 실행되도록 트리거를 설정하고, 외부 API에 전달할 전화번호 파라미터를 정의할 수 있어요.
3. 웹훅 URL을 추가해요.
4. 요청 방식이 POST인지 확인해요.
5. 필요한 헤더를 추가해요.
6. 필요하면 Bearer 토큰이나 Basic Auth 같은 인증 정보를 입력해요.
7. 대화에서 수집할 동적 파라미터를 정의해요.
8. 저장하기 전에 **웹훅 테스트** 기능으로 설정이 올바른지 확인해요.

![사용자 지정 액션 설정 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055756544/original/nF_csn19zfxSMnNRhz8aoPEHn3sVJIkc_Q.jpeg?1760136422)![사용자 지정 액션 설정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055756461/original/QakH6lkuv8dghp6PziRjzkrBE7VA8QnEpw.png?1760135971)

---

## 음성 AI 실시간 테스트

사용자 지정 액션을 저장하기 전에 기본으로 제공되는 **웹훅 테스트** 도구로 요청과 응답을 확인해 보세요. 테스트 데이터를 넣어 웹훅 요청을 살펴보고, 외부 시스템이 예상한 응답을 돌려주는지 확인할 수 있어요.

**확인할 수 있는 내용**

- 헤더와 본문을 포함한 전체 요청
- 200 OK, 400 Bad Request, 404 Not Found 같은 웹훅의 원본 응답
- 돌려받은 데이터를 Voice AI 에이전트가 통화 중에 쓸 수 있는지 여부
- 저장하기 전에 찾아서 고칠 수 있는 설정 문제

![웹훅 테스트 결과 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055756518/original/QnD2obzf89LBLKjkEbmtslKhe45Euau57g.png?1760136257)

---

## 자주 묻는 질문

### GET 같은 다른 요청 방식도 쓸 수 있나요?
아니요. 사용자 지정 액션은 현재 POST 요청만 지원해요.

### 웹훅에서 인증을 쓸 수 있나요?
네. Bearer 토큰, Basic Auth를 쓰거나 헤더에 키를 담아 전달할 수 있어요.

### 통화 중에 웹훅이 실패하면 어떻게 되나요?
시스템이 실패 내역을 기록해요. 데이터가 돌아오지 않거나, 요청이 실패하거나, 웹훅이 시간 초과되는 경우를 위해 대체 동작을 정해 둘 수 있어요.

### 한 통화에서 웹훅을 여러 개 실행할 수 있나요?
네. 각 사용자 지정 액션은 자기 조건에 따라 따로 실행돼요.

### 이 액션을 설정하려면 개발자가 필요한가요?
꼭 그렇지는 않아요. 연동할 외부 시스템의 API 문서가 있다면 기본적인 웹훅 설정은 직접 할 수 있어요. 더 복잡한 활용 사례, 인증 요구 사항, 맞춤 페이로드는 개발자의 도움이 필요할 수 있어요.

### 어떤 요청 방식을 지원하나요?
사용자 지정 액션은 현재 POST 요청을 지원해요.
