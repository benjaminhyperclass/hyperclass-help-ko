---

번역일: 2026-04-06
카테고리: 15-전화-시스템
---

# 문제 해결: 수신 SMS가 전화로 표시되거나 아예 나타나지 않는 경우

Hyperclass에서 수신 SMS 메시지가 보이지 않거나 전화로 표시되는 경우, 이 가이드를 통해 Twilio 사용자인지 LC Phone 사용자인지에 따라 문제를 해결할 수 있습니다.

---

**목차**

- [해결 방법 (한눈에 보기)](#해결-방법-한눈에-보기))
  - [✅ LC Phone 사용자](#-lc-phone-사용자)
  - [✅ Twilio 사용자 (LC Phone이 아닌 경우)](#-twilio-사용자-lc-phone이-아닌-경우))
- [단계별 해결 방법 (Twilio 사용자)](#단계별-해결-방법-twilio-사용자))
  - [1단계: Twilio에 로그인](#1단계-twilio에-로그인)
  - [2단계: 올바른 Twilio 전화번호 찾기](#2단계-올바른-twilio-전화번호-찾기)
  - [3단계: 웹훅 설정 확인](#3단계-웹훅-설정-확인)
  - [SMS 기능 확인](#sms-기능-확인)
  - [메시지 로그 검토](#메시지-로그-검토)

---

# **해결 방법 (한눈에 보기)**

## ✅ LC Phone 사용자

- 해결을 위해 Hyperclass 지원팀에 문의하세요.

## ✅ Twilio 사용자 (LC Phone이 아닌 경우)

- Twilio 전화번호 설정 확인
  - 전화번호가 SMS/MMS 지원 가능한지 확인
  - 메시징용 웹훅 URL이 올바르게 설정되었는지 확인
  - 메시징 서비스가 활성화되어 있는지 확인
- 메시지 로그 검토
- 문제가 계속 발생하면 [Twilio 지원팀](https://support.twilio.com)에 문의하세요.

---

# **단계별 해결 방법 (Twilio 사용자)**

## 1단계: Twilio에 로그인

- [twilio.com/login](https://www.twilio.com/login)으로 이동하여 로그인하세요.
- 좌측 상단 드롭다운에서 계정명(Account Name) > 하위 계정 보기(View Subaccounts)를 클릭하세요. (아래 스크린샷 참조)

![Twilio 하위 계정 보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048323954/original/vSEfQvPJiGA_zCYQVSYDBuW57Nd8YiVNrw.png?1750080048)

여러 하위 계정이 있어 올바른 계정을 찾을 수 없는 경우, Hyperclass 에이전시 뷰 > Settings(설정) > Phone Integration(전화 연동) > Sub-Account Settings(하위 계정 설정)로 이동하세요.
문제 해결 중인 계정을 검색하고 아래 *스크린샷 2.0*에 표시된 대로 Account SID를 복사하세요.

![Account SID 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048325672/original/qGhVCcYLVbwLO1VN4X0Xpn3w8q35BA32yA.png?1750081121)

스크린샷 2.0

## **2단계: 올바른 Twilio 전화번호 찾기**

- 하위 계정(Subaccounts)에서 검색 바에 Account SID를 붙여넣어 일치하는 하위 계정을 찾으세요. (스크린샷 3.0 참조)
- 찾고 있던 하위 계정을 클릭하세요.
- Phone Numbers(전화번호) > Manage(관리) > Active Numbers(활성 번호)로 이동하세요 (스크린샷 3.1)
- 해당 전화번호를 클릭하세요.

![하위 계정 검색](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048326658/original/wfGuy2jN0edS5KwbyvRVA0mOpKVvm0t0sg.png?1750081679)

스크린샷 3.0

![활성 전화번호](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048327877/original/_D4Wur5uDAlf_h1E3_d7NGARNhx25WrDYA.png?1750082372)

스크린샷 3.1

## **3단계: 웹훅 설정 확인**

- 아래로 스크롤하여 **메시징 웹훅 설정(Messaging webhook settings)**을 확인하세요.
- 누락되었거나 잘못된 경우, 적절히 업데이트하세요 (스크린샷 3.2 및 3.3)
- 저장(Save)을 클릭하세요.

![메시징 웹훅 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048362616/original/2ntLPpZIJdr7VF4u9xmzO-7KppYrsCYUyQ.png?1750139542)

스크린샷 3.2

![웹훅 URL 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048362676/original/1DQr6QHWJDF3N6X0Dg1dY6R8xfOOb_ydtg.png?1750139698)

스크린샷 3.3

이제 **수신 메시지가 올바르게 나타나는지** 테스트해 보세요.

# **SMS 기능 확인**

전화번호 옆에 이 아이콘(†)을 찾아보세요. 이는 해당 번호가 **해당 국가 내에서만 SMS 송수신이 가능**함을 의미합니다. (스크린샷 3.4)

![SMS 기능 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048330328/original/NZze8-m4RTxheJoX6VOiTVKmwDY7auuZLA.png?1750083890)

스크린샷 3.4

# **메시지 로그 검토**

- 좌측 사이드바에서 Monitor(모니터) > Logs(로그) > Messaging(메시징)을 클릭하세요.
- To 필드에 리드의 전화번호를 입력하세요(숫자만 입력 - 공백, 대시, 괄호 제외). (스크린샷 4.0)
- 메시지 상태를 검토하세요.
- 메시지 세부사항을 보려면 Date(날짜)를 클릭하세요.

![메시지 로그](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048331030/original/ViTgBcW-gKaOnr8ozV98rbF4K16o2ZsVYQ.png?1750084349)

스크린샷 4.0

메시지 상태가 **"Delivered(배송됨)"**이지만 Hyperclass에는 아무것도 표시되지 않는 경우, Message SID를 복사하여 [**Twilio 지원팀**](https://support.twilio.com)에 티켓을 생성하세요.

---
*원문 최종 수정: Wed, 24 Sep, 2025 at 6:35 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*