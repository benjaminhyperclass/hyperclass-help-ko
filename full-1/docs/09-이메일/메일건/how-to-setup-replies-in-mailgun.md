---
원문: https://help.gohighlevel.com/support/solutions/articles/48000987293-how-to-setup-replies-in-mailgun
번역일: 2026-11-07
카테고리: 09-이메일
---

# Mailgun에서 이메일 답장 받도록 설정하기

Mailgun을 하이퍼클래스와 연결했을 때 고객의 이메일 답장이 제대로 들어오도록 웹훅(수신 경로)을 설정하는 방법을 안내해요. 답장이 보이지 않을 때 확인할 사항과 Mailgun API 키를 다시 연동하는 방법도 함께 다뤄요.

## Mailgun 수신 경로 확인하기

1. Mailgun에 로그인한 뒤 [**Receiving**](https://app.mailgun.com/app/receiving/routes)(수신) 탭을 열고, 웹훅이 아래 스크린샷과 같은지 확인하세요.

   ![Mailgun Receiving 탭의 기본 웹훅 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033707593/original/fd0wTZ07sBwMIEdtEVdYcbE0SeDDcznShw.jpg?1727459035)

2. 에이전시가 고객사에게 고객사 본인의 Mailgun 계정을 쓰게 했고 전달 링크를 화이트라벨로 써야 한다면, 아래 스크린샷의 웹훅을 사용하세요.

   ![화이트라벨 전달 링크용 웹훅 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033707619/original/kbUNBKsda7HGIPWZ1KrvV9YRJUceB_LH5A.jpg?1727459077)

3. 스크린샷과 다른 웹훅이 있으면 삭제해 보고, 문제가 해결되는지 확인하세요.

4. 웹훅이 하나도 없다면(아래 화면처럼 보여요) **Create Route**(경로 만들기)를 클릭하세요.

   ![웹훅이 없는 Mailgun 수신 경로 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033707623/original/fb0gf-ysONRhDiyVPaI5cxaWQ5jnM-kIDQ.jpg?1727459100)

5. 아래와 같이 입력하세요.

   - **Expression Type**(표현식 유형): Catch All
   - **Enable Forward**(전달 사용): **Forward** 섹션에 아래 주소를 붙여넣고, 주소 안의 `****`를 지우세요.
     `https://services.l*e*a*d*connectorhq.com/conversations/providers/mailgun/webhook/inbound`
   - **Priority**(우선순위): 99
   - **Description**(설명): Hyperclass Route
   - **Save**(저장)를 클릭하세요.

   ![Mailgun 경로 만들기 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283735295/original/izEVoHQUsSJAduHwz4KHvgtWutiAmiOuTw.png?1677270953)

## Mailgun API 키 재설정하기

에이전시 관리자만 쓸 수 있어요.

1. 에이전시 화면에서 **설정 > 이메일 서비스 > Location Settings**(서브 계정 설정)로 이동하세요.
2. 해당 서브 계정의 Mailgun API 연동을 편집하고, 확인 창에 `DELETE`를 입력하세요.
3. Mailgun API 키를 다시 연동하세요. 키를 찾는 방법과 하이퍼클래스에 입력하는 방법은 "Mailgun API Key - Where to Find in Mailgun & Put in Hyperclass" 문서를 참고하세요.
4. 연동이 끝나면 Mailgun의 **Receiving** 페이지를 새로 고쳐 웹훅이 만들어졌는지 확인하세요.

   ![Mailgun Receiving 페이지에서 생성된 웹훅 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033707818/original/WLRTYVcc530QbHLxarAZTpxkutOxTfMcNA.jpg?1727459208)

## 자주 묻는 질문

### Mailgun 답장과 일반 이메일 답장은 어떻게 다른가요?
Mailgun 답장은 Mailgun API로 관리하며, 애플리케이션의 이메일 처리를 간소화하도록 만들어졌어요. 일반 이메일 답장은 표준 이메일 클라이언트에서 처리하기 때문에 Mailgun이 제공하는 자동화 기능이 없어요.

### 특정 유형의 답장에 자동 응답을 설정할 수 있나요?
네. Mailgun 설정에서 답장에 포함된 특정 트리거나 키워드를 기준으로 자동 응답을 설정할 수 있어요. 고객 문의를 더 효율적으로 처리하는 데 도움이 돼요.

### 이메일 답장이 Mailgun에 나타나지 않으면 어떻게 하나요?
먼저 Mailgun 구성 설정을 확인하세요. 웹훅이 올바르게 설정되어 있는지, 도메인이 제대로 인증되어 있는지도 확인하세요. 로그에서 오류가 있는지 살펴볼 수도 있어요.

### Mailgun으로 받을 수 있는 답장 수에 제한이 있나요?
Mailgun은 구독 중인 요금제에 따라 사용량 제한이 있어요. 처리할 수 있는 답장이나 메시지 수에 어떤 제한이 있는지 요금제 상세 내용을 확인하세요.

### 답장을 안전하게 관리하고 이메일 관련 규정도 지키려면 어떻게 해야 하나요?
보안과 규정 준수를 유지하려면 SPF, DKIM 같은 이메일 인증 모범 사례를 따르고 이메일 활동을 모니터링하세요. GDPR, CAN-SPAM 같은 규정을 숙지해 업무 방식이 법적 요건에 맞는지 확인하세요.
