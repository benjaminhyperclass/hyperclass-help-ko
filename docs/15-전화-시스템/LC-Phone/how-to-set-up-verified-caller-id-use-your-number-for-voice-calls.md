---

번역일: 2026-04-08
카테고리: 15-전화-시스템 > LC-Phone
---

# 검증된 발신번호 설정하기 (음성 통화 시 내 번호 사용하기)

음성 통화 시 내 전화번호를 발신번호로 사용하고 싶은 경우가 많습니다. 이 가이드에서는 검증된 발신번호(Verified Caller ID)를 설정하는 단계별 과정을 안내해드립니다. 이 기능은 LC Phone에서만 지원되며, 개인 Twilio 계정을 사용하는 클라이언트에게는 제공되지 않습니다.

### 1단계: 좌측 상단에서 검증된 발신번호를 설정할 하위 계정으로 전환하기

- "Click here to switch" 옵션을 클릭하고 검증된 발신번호를 설정할 하위 계정을 검색한 다음, 해당 하위 계정을 클릭하세요.

![하위 계정 전환](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031807920/original/3LbT3E_xaYaHBXT1GhwCT7SAF9eZTOTP2g.png?1724842306)

### 2단계: 하위 계정에 진입한 후 Settings(설정) 클릭하기

![설정 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031807949/original/jg_2IsV_tk3J6K8CRmpiDAcm6TpuNIGLVA.png?1724842327)

### 3단계: Phone Numbers(전화번호) 클릭하기

![전화번호 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031808053/original/OZ5YqG_JI1zXGkhaOjdkfCoSzvfQ5D3YvQ.png?1724842389)

### 4단계: Add Number 탭에서 Add Verified Caller ID 클릭하기

![검증된 발신번호 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031808304/original/aYhDgohvxM9lOg4p3naRThjghWvm3HKB0w.png?1724842561)

### 5단계: 내 전화번호를 새 발신번호로 검증하기

- 내 전화번호를 입력하고 "Verify Number"를 클릭하세요.

![번호 검증](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031808543/original/hnPyyWnPfLshmdkgDKlNA2JYBmkAwEQDkg.png?1724842703)

- "Verify Number"를 클릭하면 검증 코드가 포함된 팝업이 나타나고, 입력한 전화번호로 검증 전화가 걸려옵니다. 검증 코드를 입력하라는 안내를 받게 됩니다. 전화를 받고 제공된 검증 코드를 입력하여 진행하세요. 이 과정이 완료되면 번호가 검증되어 Verified Caller ID 탭에 추가됩니다.

![검증 코드 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031809255/original/7EO0cmca9y5T-lvhG4Q6AkvXxGwhD69Xyw.png?1724843200)

### 6단계: Phone Number 탭에서 내 번호를 발신번호로 사용할 Twilio 번호 선택하기

- Phone Number 탭에서 내 번호를 발신번호로 사용하려는 Twilio 전화번호의 점 세 개 버튼을 클릭하세요.

![Twilio 번호 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031810199/original/87gjW5WyJbn8BXEdf8ct8q6MiW_7dU97XQ.png?1724843809)

- "Edit Configuration" 옵션을 클릭하세요.

![설정 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031810378/original/awEMPIWt48_ZhYq6DtkiqeNEvLz7tFtVlg.png?1724843925)

- "Use your Verified Number as callerID for outbound calls" 옵션을 선택하고 검증된 발신번호를 선택한 후 저장하세요.
- 이 설정을 활성화하면 이제 전화 걸 때 내 번호를 발신번호로 사용할 수 있습니다.

![발신번호 설정 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031811491/original/5Pjch85AB2-s2z67YUMYIn7JdBjGXiX5UA.png?1724844724)

**참고사항**

남용을 방지하기 위해 기본적으로 하위 계정당 검증된 발신번호는 10개로 제한됩니다. 이 제한을 늘리려면 고객지원팀에 문의해주세요.

2024년 8월 1일부터 인도 국내 통화 관련 현지 규정으로 인해, +91 발신번호에서 +91 번호로 걸리는 통화는 작동하지 않습니다.

---
*원문 최종 수정: 2024년 10월 22일*
*Hyperclass 사용 가이드 — hyperclass.ai*