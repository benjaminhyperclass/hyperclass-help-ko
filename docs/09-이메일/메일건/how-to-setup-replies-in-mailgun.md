---

번역일: 2026-04-07
카테고리: 09-이메일 > 메일건
---

# 메일건에서 답장 설정하는 방법

이 가이드 "메일건에서 답장 설정하는 방법"에서는 Hyperclass에서 메일건을 구성하여 이메일 답장을 효과적으로 관리하는 방법을 알아보겠습니다. 웹훅 설정의 필수 단계를 안내하여 메시지에 대한 답장이 정확하게 수집되도록 해드립니다. 또한 도메인 인증의 중요성을 강조하고 일반적인 문제를 해결할 수 있는 문제 해결 팁을 제공하여 이메일 커뮤니케이션과 참여도를 향상시킬 수 있도록 도와드립니다.


**목차**

- [메일건에서 수신 라우트 확인하기](#메일건에서-수신-라우트-확인하기)
- [메일건 API 키 재설정](#Resetting-the-Mailgun-API-key)
- [자주 묻는 질문](#자주-묻는-질문)


---

 

# **메일건에서 수신 라우트 확인하기**


1. 메일건에 로그인한 후, [Receiving](https://app.mailgun.com/app/receiving/routes) 탭을 클릭하고 웹훅이 아래 스크린샷과 일치하는지 확인하세요:

 


![메일건 수신 라우트 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033707593/original/fd0wTZ07sBwMIEdtEVdYcbE0SeDDcznShw.jpg?1727459035)


2. 에이전시가 클라이언트로 하여금 자체 메일건 계정을 만들게 했고 포워드 링크를 화이트라벨링해야 하는 경우, 아래 스크린샷의 웹훅을 사용할 수 있습니다:


![화이트라벨 웹훅 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033707619/original/kbUNBKsda7HGIPWZ1KrvV9YRJUceB_LH5A.jpg?1727459077)


3. 스크린샷과 일치하지 않는 다른 웹훅이 있다면 제거해보고 문제가 해결되는지 확인하세요. 


4. 웹훅이 없는 경우(아래와 같이 보임), Create Route를 클릭하세요


## 


![웹훅이 없는 상태의 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033707623/original/fb0gf-ysONRhDiyVPaI5cxaWQ5jnM-kIDQ.jpg?1727459100)


[](https://login.mailgun.com/login/)[](https://app.mailgun.com/app/receiving/routes)


5. 다음과 같이 설정하세요:


- Expression Type: Catch All
- Enable Forward: Forward 섹션에 "[https://services.l*e*a*d*connectorhq.com/conversations/providers/mailgun/webhook/inbound](https://services.l*e*a*d*connectorhq.com/conversations/providers/mailgun/webhook/inbound)"를 붙여넣고 URL에서 **** 부분을 제거하세요
- Priority = 99
- 
Description: HighLevel Route

- Save를 클릭하세요


![메일건 라우트 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283735295/original/izEVoHQUsSJAduHwz4KHvgtWutiAmiOuTw.png?1677270953)


## 


# **메일건 API 키 재설정**


Agency view(에이전시 뷰) > Settings(설정) > Email Services(이메일 서비스) > Location Settings(로케이션 설정) > 하위 계정의 Mailgun API integration(메일건 API 연동)을 편집 > Delete 입력


그 다음 다시 연동하세요: [Mailgun API Key - Where to Find in Mailgun & Put in HighLevel](mailgun-private-api-key-setup.md)

완료되면 메일건의 Receiving 페이지를 새로고침하여 웹훅이 생성되었는지 확인하세요


![메일건 API 키 재설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033707818/original/WLRTYVcc530QbHLxarAZTpxkutOxTfMcNA.jpg?1727459208)


## 


---

# 자주 묻는 질문


**1. 메일건 답장과 일반 이메일 답장의 차이점은 무엇인가요?** 메일건 답장은 메일건 API를 통해 특별히 관리되며 애플리케이션의 이메일 처리를 간소화하도록 설계되었습니다. 일반 이메일 답장은 메일건의 자동화 기능 없이 표준 이메일 클라이언트를 통해 처리됩니다.

**2. 특정 유형의 답장에 대해 자동 응답을 설정할 수 있나요?** 네, 답장의 특정 트리거나 키워드를 기반으로 메일건 설정에서 자동 응답을 구성할 수 있습니다. 이 기능은 고객 문의를 더 효율적으로 관리하는 데 도움이 됩니다.

**3. 이메일 답장이 메일건에 나타나지 않는 문제는 어떻게 해결하나요?** 이메일 답장이 나타나지 않는다면 먼저 메일건 설정을 확인하고, 웹훅이 올바르게 설정되어 있는지 확인하며, 도메인이 제대로 인증되었는지 확인하세요. 또한 오류가 있는지 로그를 검토할 수도 있습니다.

**4. 메일건을 통해 받을 수 있는 답장 수에 제한이 있나요?** 메일건은 구독 플랜에 따른 사용 제한이 있습니다. 플랜 세부 사항을 확인하여 처리할 수 있는 답장이나 메시지 수의 제한을 파악해야 합니다.

**5. 답장의 보안과 이메일 규정 준수를 어떻게 보장할 수 있나요?** 보안과 규정 준수를 유지하려면 이메일 인증(SPF, DKIM 등)의 모범 사례를 따르고 이메일 활동을 모니터링해야 합니다. 프로세스가 법적 요구사항과 일치하도록 GDPR이나 CAN-SPAM과 같은 규정을 숙지하세요.

---

[이메일 답장이 대화(Conversations)로 돌아오지 않는 경우](when-email-replies-are-not-showing-up-in-conversation.md)

---
*원문 최종 수정: Fri, 27 Sep, 2024 at 12:47 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*