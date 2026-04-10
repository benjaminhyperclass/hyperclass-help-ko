---

번역일: 2026-04-06
카테고리: 전화 시스템
---

# Twilio 사용자를 위한 웹훅 설정 - 수신 전화, 메시지, 통화 상태 업데이트 받기

**목차**

- [1단계: Twilio 계정에 로그인하고 전화번호 보기](#1단계-twilio-계정에-로그인하고-전화번호-보기)
- [2단계: 전화번호를 클릭해서 설정 편집하기](#2단계-전화번호를-클릭해서-설정-편집하기)
- [3단계: 라우팅 지역을 'US1'로 설정하기](#3단계-라우팅-지역을-us1로-설정하기)
- [4단계: 'Voice Configuration'에서 다음과 같이 설정하기](#4단계-voice-configuration에서-다음과-같이-설정하기)
- [5단계: 'Messaging Service'에서 라우팅 지역을 'US1'로 설정하기](#5단계-messaging-service에서-라우팅-지역을-us1로-설정하기)
- [6단계: 메시징 서비스 설정하기](#6단계-메시징-서비스-설정하기)
- [전화번호가 메시징 서비스에 연결된 경우](#전화번호가-메시징-서비스에-연결된-경우)
- [자주 묻는 질문](#자주-묻는-질문)

Hyperclass의 자체 전화번호가 아닌 Twilio를 사용하는 경우, 수신 전화, 메시지, 통화 상태 업데이트를 받으려면 웹훅을 설정해야 합니다. 이 글에서는 Twilio 콘솔에서 웹훅을 설정하는 방법을 알려드립니다.

**웹훅을 설정하는 이유는 무엇인가요?**

Hyperclass 플랫폼에서 전화, 메시지, 상태 업데이트를 받으려면 Twilio가 우리 시스템과 통신해야 합니다. 즉, 수신 전화, 메시지, 상태 업데이트를 우리에게 전송해야 하죠. 웹훅이 바로 이를 가능하게 해줍니다.

아래 단계에 따라 Twilio에서 웹훅을 설정하세요(수신 전화, 수신 메시지, 통화 상태 업데이트용):

# 1단계: [Twilio 계정](https://console.twilio.com/us1/develop/phone-numbers/manage/incoming)에 로그인하고 전화번호 보기

![Twilio 계정 로그인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029960826/original/IZ7yENfP_hQPi6ZixShX8idVcNClaP-ADg.jpg?1722004804)

# 2단계: 전화번호를 클릭해서 설정 편집하기

![전화번호 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029960924/original/5hdNuHihO0Bn1Zs85z92bDr0JuQoEXYsOA.jpg?1722004841)

# 3단계: 라우팅 지역을 'US1'로 설정하기

아직 설정하지 않았다면 라우팅 지역을 'US1'로 설정하세요.

![라우팅 지역 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029961064/original/R_E313n-15o49amF5BgCVQHTQ_4k1_Lhyw.jpg?1722004928)

# 4단계: 'Voice Configuration'에서 다음과 같이 설정하기

![Voice Configuration 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029961145/original/5YoMJcESIuUpyhmxjqxQBVtQ9VPkgtQ6EA.jpg?1722004991)

- Configure with: Webhook, TwiML Bin, Function, Studio Flow, Proxy Service
- A call comes in: Webhook
- 다음 URL 사용: https://services.leadconnectorhq.com/phone-system/voice-call/inbound
- HTTP: HTTP POST
- Primary handler fails: 변경 필요 없음
- Call status changes > URL: https://services.leadconnectorhq.com/appengine/twilio/incoming_call_status
- HTTP: HTTP POST
- Caller Name Lookup: 원하는 대로 설정. 발신자 조회를 사용하려면 'Enabled' 유지를 권장합니다.
- save configuration 버튼 클릭

# 5단계: 'Messaging Service'에서 라우팅 지역을 'US1'로 설정하기

아직 설정하지 않았다면 'Messaging Service'에서도 라우팅 지역을 'US1'로 설정하세요.

![Messaging Service 라우팅 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029961258/original/9T8Q6PHmgecj9Grpd_PjC990gM-p2iaMlw.jpg?1722005052)

# 6단계: 메시징 서비스 설정하기

![메시징 서비스 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029961331/original/BouCDaftFsJpbqCW0FAO9fRcce4KS06oRw.jpg?1722005087)

- Configure with: Webhook, TwiML Bin, Function, Studio Flow, Proxy Service
- A message comes in: Webhook
- 다음 URL 사용: https://services.leadconnectorhq.com/appengine/twilio/incoming_message
- HTTP: HTTP POST
- Primary handler fails: 입력/변경 필요 없음
- save configuration 버튼 클릭

# 전화번호가 메시징 서비스에 연결된 경우

## 1. Active numbers 클릭

![Active numbers 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055960979/original/1b8SARZz963zGQflfuSy8HrQIf8ooUkkpQ.png?1760446722)

## 2. 연결된 메시징 서비스 클릭

![연결된 메시징 서비스 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055961029/original/Y1JYNjrWiWqlSvGEDjcE348tk5qMSFOy-g.png?1760446771)

## 3. Integration 클릭

![Integration 메뉴 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055961125/original/oTd4EfMYxjFzHFNvyyOLMgtciJiNqYVvzw.png?1760446819)

## 4. "Send a webhook" 선택

다음 웹훅을 사용해야 합니다:

Request URL: https://services.leadconnectorhq.com/appengine/twilio/incoming_message

Fallback URL: https://services.leadconnectorhq.com/appengine/twilio/incoming_message

![Send a webhook 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055961193/original/QGoIkSOcuVqVjOBW6NltefAE5svQinu4Ow.png?1760446869)

## 5. Save 클릭

![설정 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055961518/original/_dZHEODhUGJ4cganEb31DFjDRTag52pBqg.png?1760446957)

---

# 자주 묻는 질문

현재 등록된 자주 묻는 질문이 없습니다. 이 섹션에 질문을 추가하기 위해 이 글에 대한 피드백을 보내주세요!

---
*원문 최종 수정: 2025년 10월 14일*
*Hyperclass 사용 가이드 — hyperclass.ai*