---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003232-how-to-set-up-verified-caller-id-use-your-number-for-voice-calls-
번역일: 2026-11-07
카테고리: 15-전화-시스템
---

# 인증된 발신번호 설정하기: 내 번호로 음성 통화 걸기

내 전화번호를 발신번호(Caller ID)로 쓰고 싶을 때 인증된 발신번호(Verified Caller ID)를 설정해요. 이 문서에서는 내 번호를 인증하고, 음성 통화 발신번호로 지정하는 과정을 단계별로 안내해요.

{% hint style="info" %}
이 기능은 하이퍼클래스 전화에서만 쓸 수 있어요. 개인 Twilio 계정을 쓰는 고객은 지원되지 않아요.
{% endhint %}

## 1단계: 인증된 발신번호를 설정할 서브 계정으로 전환하기

1. 왼쪽 위에서 **여기를 클릭하여 전환**을 클릭해요.
2. 인증된 발신번호를 설정할 서브 계정을 검색한 뒤, 해당 서브 계정을 클릭해요.

![서브 계정 전환 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031807920/original/3LbT3E_xaYaHBXT1GhwCT7SAF9eZTOTP2g.png?1724842306)

## 2단계: 설정 열기

서브 계정으로 들어왔으면 **설정**을 클릭해요.

![설정 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031807949/original/jg_2IsV_tk3J6K8CRmpiDAcm6TpuNIGLVA.png?1724842327)

## 3단계: 전화번호 열기

**전화번호**를 클릭해요.

![전화번호 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031808053/original/OZ5YqG_JI1zXGkhaOjdkfCoSzvfQ5D3YvQ.png?1724842389)

## 4단계: 인증된 발신번호 추가 시작하기

**Add Number**(번호 추가) 탭에서 **Add Verified Caller ID**(인증된 발신번호 추가)를 클릭해요.

![인증된 발신번호 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031808304/original/aYhDgohvxM9lOg4p3naRThjghWvm3HKB0w.png?1724842561)

## 5단계: 내 전화번호 인증하기

1. 내 전화번호를 입력하고 **번호 인증**을 클릭해요.

   ![전화번호 입력과 번호 인증 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031808543/original/hnPyyWnPfLshmdkgDKlNA2JYBmkAwEQDkg.png?1724842703)

2. 인증 코드가 담긴 팝업이 나타나고, 입력한 번호로 인증 전화가 걸려 와요.
3. 전화를 받고, 안내에 따라 팝업에 나온 인증 코드를 입력해요.
4. 인증이 끝나면 내 번호가 **Verified Caller ID**(인증된 발신번호) 탭에 추가돼요.

![인증 코드 팝업](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031809255/original/7EO0cmca9y5T-lvhG4Q6AkvXxGwhD69Xyw.png?1724843200)

## 6단계: 발신번호로 쓸 Twilio 번호 지정하기

내 번호를 발신번호로 쓰고 싶은 Twilio 번호를 골라 설정해요.

1. **전화번호** 탭에서 해당 Twilio 전화번호 옆의 점 세 개 아이콘을 클릭해요.

   ![Twilio 전화번호 옆 점 세 개 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031810199/original/87gjW5WyJbn8BXEdf8ct8q6MiW_7dU97XQ.png?1724843809)

2. **구성 편집**을 클릭해요.

   ![구성 편집 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031810378/original/awEMPIWt48_ZhYq6DtkiqeNEvLz7tFtVlg.png?1724843925)

3. **Use your Verified Number as callerID for outbound calls**(발신 통화의 발신번호로 인증된 번호 사용) 옵션을 선택해요.
4. 인증된 발신번호 중 사용할 번호를 고르고 **저장**을 클릭해요.

이 설정을 켜면 내 전화번호를 발신번호로 해서 전화를 걸 수 있어요.

![인증된 번호를 발신번호로 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031811491/original/5Pjch85AB2-s2z67YUMYIn7JdBjGXiX5UA.png?1724844724)

{% hint style="info" %}
오남용을 막기 위해 서브 계정마다 인증된 발신번호를 기본 10개까지 등록할 수 있어요. 한도를 늘리려면 하이퍼클래스 고객지원에 문의하세요.
{% endhint %}

{% hint style="warning" %}
인도의 국내 통화 관련 현지 규정에 따라, 2024년 8월 1일부터 +91 발신번호에서 +91 수신번호로 거는 통화는 연결되지 않아요.
{% endhint %}
