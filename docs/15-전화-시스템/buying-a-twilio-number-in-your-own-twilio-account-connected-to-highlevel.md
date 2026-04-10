---

번역일: 2026-04-06
카테고리: 전화 시스템
---

# Hyperclass에 연결된 개인 Twilio 계정에서 Twilio 전화번호 구매하기

Hyperclass에 연결된 개인 Twilio 계정을 사용하는 경우, Twilio 콘솔에서 직접 구매한 모든 전화번호가 자동으로 Hyperclass 하위 계정에 반영됩니다. 이 가이드에서는 Twilio 콘솔에서 전화번호를 구매하는 단계별 과정을 안내하며, 구매한 번호가 Hyperclass 계정에서 즉시 사용할 수 있도록 하는 방법을 설명합니다.

---

**목차**

- [Twilio 전화번호 구매 후 Hyperclass에 반영하는 단계](#twilio-전화번호-구매-후-hyperclass에-반영하는-단계)
  - [1단계: Twilio 로그인](#1단계-twilio-로그인)
  - [2단계: Twilio에서 하위 계정 찾기](#2단계-twilio에서-하위-계정-찾기)
  - [3단계: 전화번호 구매 페이지로 이동](#3단계-전화번호-구매-페이지로-이동)
  - [4단계: 국가 선택](#4단계-국가-선택)
  - [5단계: 고급 검색으로 휴대폰 번호 찾기](#5단계-고급-검색으로-휴대폰-번호-찾기)
  - [6단계: 구매 완료 후 Hyperclass에서 확인](#6단계-구매-완료-후-hyperclass에서-확인)

---

## Twilio 전화번호 구매 후 Hyperclass에 반영하는 단계

### **1단계: Twilio 로그인**

- [https://www.twilio.com/login](https://www.twilio.com/login)으로 이동하여 계정에 로그인하세요.

- 대시보드 상단에서 메인 계정을 클릭하고 해당 하위 계정을 선택하세요.

![Twilio 계정 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049588966/original/jTcfr6wvmzjhSZRlrn-8fNeC0oZyzHJmog.png?1752062318)

**참고**: Twilio에 여러 하위 계정이 있어서 어떤 계정을 선택해야 할지 모르겠다면, Hyperclass에서 올바른 Account SID를 확인할 수 있습니다.

방법:
- Hyperclass 에이전시 뷰 > Settings(설정) > Phone Integration(전화 연동) > Sub-account Settings(하위 계정 설정)로 이동하세요.
- 특정 하위 계정의 Account SID를 찾아 복사하세요.

![Account SID 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049586755/original/h4GQQICAK9syddiLrwFYczjHGkFjG_puyQ.png?1752060767)

### **2단계: Twilio에서 하위 계정 찾기**

- Twilio 대시보드로 돌아가세요.

- Hyperclass에서 복사한 Account SID를 사용하여 올바른 Twilio 하위 계정을 검색하고 전환하세요.

- Twilio의 계정 전환기에 Account SID를 붙여넣고 선택하세요.

![하위 계정 전환](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065363298/original/F4ZqK45mPgn0m1TtP26gaw_rj2ynMQG5Aw.png?1771597622)

### **3단계: 전화번호 구매 페이지로 이동**

Twilio 콘솔 왼쪽 사이드바에서 **Develop > Phone Numbers > Manage > Buy a Number**로 이동하세요.

![전화번호 구매 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065363498/original/1IyYJf7aoGdZ93E4q1mpyeLhBjkG-dT0sQ.png?1771597707)

### **4단계: 국가 선택**

국가 드롭다운 메뉴(왼쪽 상단)에서 원하는 국가(예: Australia)를 입력하고 선택하세요. Twilio가 음성 기능만 있는 해당 국가의 지역 전화번호 목록을 표시합니다.

![국가 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065363729/original/OtLAlkETb8DMTHEBuF6v_hcu6EYI5QX01A.png?1771597812)

### **5단계: 고급 검색으로 휴대폰 번호 찾기**

- Advanced Search(고급 검색)를 클릭하세요.

- Local number(지역 번호) 옵션의 체크를 해제하고 다시 검색하세요.

- 이제 선택한 기능(음성, SMS 등)으로 구매 가능한 휴대폰 번호가 표시됩니다.

![고급 검색 결과](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065363894/original/Mypx0bPv-tOmkXuyAnJt1KxPZn7FETSdjA.png?1771597890)

### **6단계: 구매 완료 후 Hyperclass에서 확인**

- 원하는 번호를 구매한 후, Hyperclass 하위 계정으로 돌아가세요.

- Settings(설정) > Phone Numbers(전화번호)로 이동하세요.

- 새로 구매한 Twilio 전화번호가 목록에 자동으로 반영된 것을 확인할 수 있습니다.

![Hyperclass에서 전화번호 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049588248/original/2FlbQEM_ggwy_NPqkV8Knb36iZDrqhm9fw.png?1752061821)

![전화번호 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049588509/original/0LIg2MhPF3FwZLsXA8psmd0Zijf2GmAG6g.png?1752062026)

---

**자주 묻는 질문**

**Q. 새로 구매한 Twilio 전화번호가 내 Hyperclass 하위 계정에 자동으로 나타나나요?**

네, 맞습니다. Twilio 하위 계정이 올바른 Hyperclass 하위 계정에 제대로 연결되어 있다면, 전화번호가 자동으로 동기화되어 해당 하위 계정의 설정 > 전화번호에 표시됩니다.

**Q. 올바른 Twilio 하위 계정을 사용하고 있는지 어떻게 확인하나요?**

다음과 같이 올바른 하위 계정을 확인할 수 있습니다:
- Hyperclass 에이전시 뷰 > 설정 > 전화 연동 > 하위 계정 설정으로 이동
- 해당 하위 계정에 연결된 Account SID 복사
- 해당 SID를 사용하여 Twilio에서 올바른 하위 계정을 검색하고 전환

**Q. 번호를 구매한 후 추가로 설정해야 할 것이 있나요?**

Twilio 계정이 Hyperclass에 올바르게 연동되어 있다면 추가 설정은 필요하지 않습니다. 구매한 번호는 워크플로우, 대화, 통화에서 즉시 사용할 수 있습니다.

---

**관련 아티클**

- 사용할 수 없는 번호를 요청하는 방법
- 하위 계정에서 전화번호 구매하는 방법

---
*원문 최종 수정: Fri, 20 Feb, 2026 at 8:38 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*