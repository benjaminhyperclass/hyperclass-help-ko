---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006466-subscribe-to-blog
번역일: 2026-11-06
카테고리: 06-사이트
---

# 블로그에 구독 폼 추가하고 구독자에게 새 글 보내기

블로그에 구독 폼을 끌어다 놓으면 방문자의 이메일 주소를 구독자로 모을 수 있어요. 이메일 캠페인과 연결하면 새 블로그 글도 구독자에게 자동으로 보낼 수 있어요.

## 이 기능으로 할 수 있는 일

- 드래그 앤 드롭 폼: 블로그 페이지 어디에나 구독 폼을 추가할 수 있어요.
- 사용자 지정 스타일: 제목, 설명, 글꼴, 버튼 텍스트, 색상을 바꿀 수 있어요.
- 레이아웃 선택: **Plain**(기본형)과 **With Image**(이미지 포함) 중에서 고를 수 있어요.
- 연락처 자동 생성: 구독 폼을 제출하면 CRM에 연락처로 자동 저장돼요.
- 스마트 태깅: 구독자에게 "블로그" 같은 태그가 붙어서 이메일 캠페인에서 대상을 쉽게 고를 수 있어요.

## 블로그에 구독 폼 추가하기

### 1단계: 블로그 사이트 편집기 열기

1. **사이트**로 이동하세요.
2. 블로그 사이트를 선택하세요.
3. **Blog Builder**(블로그 빌더) > **Site Editor**(사이트 편집기)를 클릭하세요.

블로그 요소를 추가하고 꾸밀 수 있는 페이지 편집기가 열려요.

![사이트 편집기를 여는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054901646/original/BxI9HK8tVNlKjfTD4zaMfhumS8crNcw0ag.png?1759226107)

### 2단계: 구독 폼 추가하기

1. 편집기에서 **Subscribe form**(구독 폼) 요소를 블로그 페이지로 끌어다 놓으세요.

![블로그 페이지에 구독 폼 요소를 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054901737/original/kmy8VbFdmT1sx6kV84iozTK_RGMKLc_DZw.png?1759226169)

### 3단계: 폼 꾸미기

- **제목**을 수정하세요. 예: "블로그 구독하기"
- **설명**을 입력하세요. 예: "최신 글을 메일함으로 바로 받아 보세요"
- **버튼 텍스트**를 바꾸세요. 예: "지금 구독"
- 원하는 레이아웃(**Plain** / **With Image**)을 고르세요.
- 사이트 분위기에 맞게 글꼴, 색상, 간격을 조정하세요.

![구독 폼의 제목, 설명, 버튼 텍스트를 수정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054901770/original/9gI33mewUNavYZyjCDnn43QtbV5z0r1JDQ.png?1759226217)

### 4단계: 블로그 페이지 게시하기

폼이 마음에 들면 **게시**를 클릭해 공개하세요. 이제 방문자가 블로그에서 바로 이메일 주소를 입력해 구독할 수 있어요.

### 5단계: 태그로 이메일 캠페인 보내기

- 새 구독자는 CRM에 **연락처**로 자동 생성돼요.
- 구독자에게 블로그 태그가 붙어요. 나중에 블로그 구독자를 쉽게 찾아서 대상으로 지정할 수 있어요.

![구독자에게 태그가 붙은 연락처 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054901927/original/UvvChIZpCz9zdlMPP7ppu5IoR5RmByEYcw.png?1759226328)

## 태그와 이메일 캠페인으로 블로그 소식 자동 발송하기

워크플로우와 이메일 캠페인을 설정하면 구독자가 새 블로그 글을 자동으로 받아 볼 수 있어요. <!-- 검토 필요: 원문 내용이 서로 다름 (워크플로우를 설정한다고 했지만 아래 단계에는 워크플로우 설정이 없음) -->

<!-- 검토 필요: 원문 내용이 서로 다름 (아래 단계 번호가 1단계 다음에 3단계로 이어지며 2단계가 없음) -->

### 1단계: 블로그 RSS로 이메일 캠페인 만들기

1. **이메일 캠페인**으로 이동하세요.

![이메일 캠페인 메뉴 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054902011/original/X5hq3gIUvszkPv-ch_dZVJioVlnkdytHeA.png?1759226392)

이메일 본문에 **RSS Header**(RSS 헤더)와 **RSS Items**(RSS 항목) 요소를 추가하세요.

- **RSS Header**: 블로그의 제목과 요약을 보여 줘요.
- **RSS Items**: 새 블로그 글 목록을 보여 줘요.

![이메일 본문에 RSS 요소를 추가한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054902062/original/9xFbjW1ViwfxPzLBznbom0wP7cZGqLzldQ.png?1759226428)

### 3단계: 캠페인과 수신자 설정하기

1. 캠페인을 예약할 때 **RSS Schedule**(RSS 일정)을 선택하세요. 그러면 최신 블로그 글이 자동으로 들어가요.

   ![RSS Schedule을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054902086/original/Tpo-uOJsq2l9H76vyHW6K2wn3bpBIzup5Q.png?1759226457)

2. **수신자**에서 **Contacts from Tag**(태그로 연락처 선택) > **블로그**를 선택하세요.
3. 캠페인을 저장하세요.

![수신자를 블로그 태그로 지정한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054902121/original/2LL42q8VNKV5i_k1Dv-RqyNQmzd4rGPLKw.png?1759226474)

이제 누군가 구독할 때마다 새 블로그 글이 그 사람의 메일함으로 자동 발송돼요.

## 이 기능을 쓰면 좋은 점

- 쉬운 리드 확보: 블로그를 가볍게 읽던 방문자를 구독자로 만들 수 있어요.
- 이메일 리스트 확장: 별도 작업 없이 구독자를 늘릴 수 있어요.
- 자동화된 캠페인: 최신 글로 구독자와 계속 소통할 수 있어요.
- 타겟 마케팅: 태그로 대상을 나눠 캠페인을 보내면 더 좋은 결과를 얻을 수 있어요.

## 자주 묻는 질문

### 블로그에 구독 폼을 여러 개 추가할 수 있나요?

네, 할 수 있어요. 사이드바와 푸터처럼 폼을 여러 개 끌어다 놓을 수 있어요. 어느 폼으로 구독하든 같은 태그가 붙은 연락처가 CRM에 만들어져요.

### 구독자는 가입하면 어디에 저장되나요?

모든 구독자는 지정한 태그와 함께 CRM의 **연락처**에 자동으로 저장돼요.

### 버튼 텍스트와 디자인을 바꿀 수 있나요?

네, 바꿀 수 있어요. 버튼 텍스트, 글꼴, 색상, 레이아웃을 사이트 편집기에서 바로 수정할 수 있어요.

### 이메일 캠페인을 설정하지 않으면 어떻게 되나요?

구독자는 CRM에 계속 모이지만 블로그 소식을 자동으로 받지는 못해요. 이메일을 직접 보내거나 RSS 캠페인을 설정해야 해요.

### 구독자가 나중에 구독을 취소할 수 있나요?

현재는 구독 취소(수신 해지) 기능을 지원하지 않아요.

### 구독 폼이 SEO에 영향을 주나요?

아니요. 구독 폼은 화면에 보이는 요소일 뿐이라 블로그의 SEO에는 영향을 주지 않아요.
