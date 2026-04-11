---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# 웹훅 설정하기: 수신 전화, 메시지, 통화 상태 업데이트 받기 (Twilio 사용자용)

**목차**

- [1단계: Twilio 계정에 로그인하고 전화번호 보기 URL 클릭](#1단계-twilio-계정에-로그인하고-전화번호-보기-url-클릭)
- [2단계: 전화번호를 클릭하여 설정 편집](#2단계-전화번호를-클릭하여-설정-편집)
- [3단계: 라우팅 지역을 'US1'로 설정 (아직 안 했다면)](#3단계-라우팅-지역을-us1로-설정-아직-안-했다면)
- [4단계: 'Voice Configuration(음성 설정)'에서 다음과 같이 설정](#4단계-voice-configuration음성-설정에서-다음과-같이-설정)
- [5단계: 'Messaging Service(메시지 서비스)'에서 라우팅 지역을 'US1'로 설정 (아직 안 했다면)](#5단계-messaging-service메시지-서비스에서-라우팅-지역을-us1로-설정-아직-안-했다면)
- [6단계: 메시지 서비스: 입력/변경 불필요](#6단계-메시지-서비스-입력변경-불필요)
- [전화번호가 메시지 서비스에 연결된 경우](#전화번호가-메시지-서비스에-연결된-경우)
- [자주 묻는 질문](#자주-묻는-질문)

Twilio를 사용하고 LC Phone을 직접 사용하지 않는 경우, 수신 전화, 메시지, 통화 상태 업데이트를 받기 위해 웹훅을 설정해야 합니다. 이 가이드에서는 Twilio 콘솔에서 웹훅을 설정하는 방법을 알아보겠습니다.

**웹훅을 설정해야 하는 이유는 무엇인가요?**

당신이 저희 플랫폼에서 전화, 메시지 또는 상태 업데이트를 받으려면, Twilio가 저희 시스템과 통신해야 합니다. 즉, 수신 전화, 메시지 또는 상태 업데이트를 저희에게 전송해야 합니다. 웹훅을 통해 이것이 가능해집니다.

아래 단계를 따라 Twilio에서 웹훅을 설정해 주세요 (수신 전화, 수신 메시지, 통화 상태 업데이트용):

# 1단계: [Twilio 계정](https://console.twilio.com/us1/develop/phone-numbers/manage/incoming)에 로그인하고 전화번호 보기 URL 클릭

![Twilio 콘솔 전화번호 관리 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029960826/original/IZ7yENfP_hQPi6ZixShX8idVcNClaP-ADg.jpg?1722004804)

# 2단계: 전화번호를 클릭하여 설정 편집

![전화번호 목록에서 편집할 번호 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029960924/original/5hdNuHihO0Bn1Zs85z92bDr0JuQoEXYsOA.jpg?1722004841)

# 3단계: 라우팅 지역을 'US1'로 설정 (아직 안 했다면)

![라우팅 지역 US1 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029961064/original/R_E313n-15o49amF5BgCVQHTQ_4k1_Lhyw.jpg?1722004928)

# 4단계: 'Voice Configuration(음성 설정)'에서 다음과 같이 설정

![음성 설정 구성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029961145/original/5YoMJcESIuUpyhmxjqxQBVtQ9VPkgtQ6EA.jpg?1722004991)

- Configure with(설정 방법): Webhook, TwiML Bin, Function, Studio Flow, Proxy Service
- A call comes in(전화 수신 시): Webhook
- Use the following URL(다음 URL 사용):
[https://services.leadconnectorhq.com/phone-system/voice-call/inbound](https://services.leadconnectorhq.com/phone-system/voice-call/inbound)
- HTTP: HTTP POST
- Primary handler fails(기본 핸들러 실패 시): 변경 불필요
- Call status changes(통화 상태 변경) > URL:
[https://services.leadconnectorhq.com/appengine/twilio/incoming_call_status](https://services.leadconnectorhq.com/appengine/twilio/incoming_call_status)
- HTTP: HTTP POST
- Caller Name Lookup(발신자 이름 조회): 선택사항입니다. 조회 기능을 사용하려면 '활성화' 상태로 두는 것을 권장합니다.
- Save configuration(설정 저장) 버튼을 클릭하세요

# 5단계: 'Messaging Service(메시지 서비스)'에서 라우팅 지역을 'US1'로 설정 (아직 안 했다면)

![메시지 서비스 라우팅 지역 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029961258/original/9T8Q6PHmgecj9Grpd_PjC990gM-p2iaMlw.jpg?1722005052)

# 6단계: 메시지 서비스: 입력/변경 불필요

![메시지 서비스 웹훅 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029961331/original/BouCDaftFsJpbqCW0FAO9fRcce4KS06oRw.jpg?1722005087)

- Configure with(설정 방법): Webhook, TwiML Bin, Function, Studio Flow, Proxy Service
- A message comes in(메시지 수신 시): Webhook
- Use the following URL(다음 URL 사용):
[https://services.leadconnectorhq.com/appengine/twilio/incoming_message](https://services.leadconnectorhq.com/appengine/twilio/incoming_message)
- HTTP: HTTP POST
- Primary handler fails(기본 핸들러 실패 시): 입력/변경 불필요
- Save configuration(설정 저장) 버튼을 클릭하세요

# 전화번호가 메시지 서비스에 연결된 경우

## 1. Active numbers(활성 번호) 클릭

![활성 번호 메뉴 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055960979/original/1b8SARZz963zGQflfuSy8HrQIf8ooUkkpQ.png?1760446722)

## 2. 연결된 메시지 서비스 클릭

![연결된 메시지 서비스 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055961029/original/Y1JYNjrWiWqlSvGEDjcE348tk5qMSFOy-g.png?1760446771)

## 3. Integration(연동) 클릭

![연동 메뉴 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055961125/original/oTd4EfMYxjFzHFNvyyOLMgtciJiNqYVvzw.png?1760446819)

## 4. "Send a webhook(웹훅 전송)" 선택

다음 웹훅을 사용해야 합니다:

Request URL(요청 URL): [https://services.leadconnectorhq.com/appengine/twilio/incoming_message](https://services.leadconnectorhq.com/appengine/twilio/incoming_message)

Fallback URL(대체 URL): [https://services.leadconnectorhq.com/appengine/twilio/incoming_message](https://services.leadconnectorhq.com/appengine/twilio/incoming_message)

![웹훅 전송 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055961193/original/QGoIkSOcuVqVjOBW6NltefAE5svQinu4Ow.png?1760446869)

## 5. Save(저장) 클릭

![설정 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055961518/original/_dZHEODhUGJ4cganEb31DFjDRTag52pBqg.png?1760446957)

---

# 자주 묻는 질문

현재 자주 묻는 질문이 없습니다. 이 섹션에 질문을 추가할 수 있도록 이 문서에 대한 피드백을 보내주세요!

---
*원문 최종 수정: 2025년 10월 14일*
*Hyperclass 사용 가이드 — hyperclass.ai*