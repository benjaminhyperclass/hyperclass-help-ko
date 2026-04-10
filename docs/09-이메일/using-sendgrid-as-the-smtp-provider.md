---

번역일: 2026-04-06
카테고리: 09-이메일
---

# SendGrid를 SMTP 공급자로 사용하기

이 가이드는 Hyperclass 플랫폼에서 SendGrid를 SMTP 공급자로 연동하는 방법을 안내합니다. SendGrid를 통해 원활한 이메일 전송을 위한 필수 설정과 구성을 자세히 다룹니다. 기술적인 설정 단계를 통해 SendGrid를 올바르게 구성하여 이메일 커뮤니케이션의 최적 성능과 안정성을 보장할 수 있습니다.

**목차**

- [1단계. SendGrid 가입](#1단계-sendgrid-가입)
- [2단계. 하위 계정의 로케이션 설정으로 이동](#2단계-하위-계정의-로케이션-설정으로-이동)
- [3단계. SendGrid API 키 가져오기](#3단계-sendgrid-api-키-가져오기)
  - [API 키 이름 입력](#api-키-이름-입력)
  - [생성된 API 키 복사](#생성된-api-키-복사)
- [4단계. Hyperclass에 API 키 추가](#4단계-hyperclass에-api-키-추가)
- [5단계. SendGrid에서 2단계 인증 설정](#5단계-sendgrid에서-2단계-인증-설정)
- [6단계. SendGrid 이메일 계정을 단일 발신자로 인증](#6단계-sendgrid-이메일-계정을-단일-발신자로-인증)
- [7단계. Hyperclass에서 저장을 다시 클릭하여 재연동](#7단계-hyperclass에서-저장을-다시-클릭하여-재연동)
- [자주 묻는 질문](#자주-묻는-질문)

---

## **1단계. SendGrid 가입**

[https://signup.sendgrid.com/](https://signup.sendgrid.com/)

## **2단계. 하위 계정의 로케이션 설정으로 이동**

Email Services(이메일 서비스) > Add Service(서비스 추가) > 드롭다운에서 Sendgrid 선택을 클릭합니다.

모든 로케이션에 Sendgrid를 연동하고 싶다면, 에이전시 보기에서 설정할 수 있습니다:

[https://app.gohighlevel.com/settings/email_services](https://app.gohighlevel.com/settings/email_services)

![SendGrid 이메일 서비스 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846783/original/VVFsJCextfR1_d_11XTHga9oeNKatWS0hQ.jpg?1724881299)

## 3단계. SendGrid API 키 가져오기

Settings(설정) > API keys(API 키) > create API Key(API 키 생성)를 클릭합니다.

![SendGrid API 키 생성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846792/original/eUL7EU_-EOzGchxYPWL0EMk5sjACZxHEPw.jpg?1724881326)

### API 키 이름 입력

API Key Permissions(API 키 권한)을 **Full Access(전체 액세스)**로 설정했는지 확인합니다.

**Create & View(생성 및 보기)**를 클릭합니다.

![API 키 생성 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846796/original/a9MrgUej0WqHziz31i8UjSTQwtbDIFmj4A.jpg?1724881352)

### 생성된 API 키 복사

강조 표시된 생성된 API 키를 복사합니다.

![생성된 API 키 복사 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846806/original/vmo403We5u7Gp8bKNAXeV7jlxNY_I1Ysag.jpg?1724881381)

## **4단계. Hyperclass에 API 키 추가**

Username(사용자명): **apikey**

Email(이메일): **SendGrid 로그인 이메일**

Password(비밀번호): **복사한 API 키를 여기에 붙여넣기**

**Save(저장)**을 클릭합니다.

![Hyperclass에 API 키 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846811/original/kq58-V-iDLVwKZwNQXw_UXO2lwUUiMcY9Q.jpg?1724881409)

## **5단계. SendGrid에서 2단계 인증 설정**

![SendGrid 2단계 인증 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846832/original/HYY2tHoxAB-4qW-jO_raEIIxKBf7lj2QWA.jpg?1724881430)

## **6단계. SendGrid 이메일 계정을 단일 발신자로 인증**

![SendGrid 단일 발신자 인증 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846845/original/9ipTCXKk0sEKBCLdPOYf1kDUFCiCjpvzAw.jpg?1724881455)

**SendGrid 로그인 이메일**로 발신자를 생성합니다.

![발신자 생성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846859/original/zBMxS2C0LUORdKKq5EvXd_eDtR6jhzybiQ.jpg?1724881476)

## **7단계. Hyperclass에서 저장을 다시 클릭하여 재연동**

![Hyperclass 재연동 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846872/original/XR8nHLqvALSgWinGBq6BV3WYFk9rfKfzPA.jpg?1724881510)

이제 Hyperclass에서 SendGrid가 SMTP 공급자로 설정된 것을 확인할 수 있습니다.

![SendGrid SMTP 공급자 설정 완료 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846879/original/wL9FUvg9EHRVoljO3xNEpr5RS0vzxaYFdA.jpg?1724881532)

[대화에서 테스트 이메일을 발송](how-to-send-a-test-email-in-the-conversation.md)할 때 오류가 발생한다면:

**⚠️(빨간색 삼각형) 아이콘**을 클릭하여 대화에서 오류에 대한 자세한 내용을 확인하세요.

![이메일 발송 오류 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846886/original/q9lMrW_IBu8lblpact0WJarWC8nimrXzTw.jpg?1724881564)

550 발신 주소가 인증된 발신자 ID와 일치하지 않습니다. 이 오류가 해결될 때까지 메일을 발송할 수 없습니다. 발신자 ID 요구사항을 확인하려면 [https://sendgrid.com/docs/for-developers/sending-email/sender-identity/](https://sendgrid.com/docs/for-developers/sending-email/sender-identity/)를 참조하세요.

[발신자 이메일을 마스킹](sending-priority-from-name-address.md)할 때는 발신자 이메일이 SMTP 연동된 이메일과 일치하는지 확인하거나, 발신자 이메일이 SendGrid에서 인증되었는지 확인하세요:

[https://docs.sendgrid.com/ui/sending-email/senders](https://docs.sendgrid.com/ui/sending-email/senders)

---

# 자주 묻는 질문

현재 등록된 자주 묻는 질문이 없습니다. 이 섹션에 질문을 추가하는 데 도움이 되도록 이 문서에 대한 피드백을 제출해 주세요!

---
*원문 최종 수정: 2024년 8월 28일*
*Hyperclass 사용 가이드 — hyperclass.ai*