---
원문: https://help.gohighlevel.com/support/solutions/articles/155000000209-workflow-action-gpt-powered-by-openai
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — GPT Powered by OpenAI(OpenAI 기반 GPT)

**GPT Powered by OpenAI**(OpenAI 기반 GPT) 액션은 워크플로우 안에서 AI로 글을 만들고 복잡한 작업을 처리해 주는 액션이에요. 이 문서에서는 설정 방법, 활용 사례, 예시 프롬프트, 자주 묻는 질문을 안내해요. 고객사에서 이 액션을 쓰도록 켜는 방법은 [이 문서](../../16-SaaS-설정/Saas-Mode/how-to-enable-and-rebill-workflow-external-ai-models.md)를 참고하세요.

{% hint style="warning" %}
GPT-4 요금은 하이퍼클래스의 GPT-4 문서를, GPT-5 요금은 하이퍼클래스의 GPT-5 문서를 참고하세요.
{% endhint %}

## GPT 액션이란?

GPT 액션은 AI를 활용해 비즈니스 자동화를 더 폭넓게 만들어 주는 워크플로우 액션이에요. CRM과 매끄럽게 연결되어, 다양한 트리거와 액션에 맞춰 알아서 응답해요. 여러 OpenAI 모델을 지원하므로 워크플로우에 필요한 속도, 복잡도, 추론 수준에 맞춰 모델을 고를 수 있어요.

소셜 미디어부터 이커머스, 학습 관리 시스템까지 다양한 플랫폼과 함께 쓸 수 있어요. 복잡한 데이터 서식 지정과 계산도 지원해서 업무를 더 정확하고 효율적으로 처리할 수 있어요. 워크플로우 액션으로서 GPT 액션은 비즈니스가 더 빠르게 대응하고 유연하게 움직이도록 도와줘요.

## 다른 워크플로우 액션·트리거와 함께 쓰는 활용 사례

- 유명인 소셜 미디어 자동 응답: 지원되는 소셜 미디어 플랫폼에서 오는 **Inbound Webhook**(인바운드 웹훅)으로 GPT 액션 응답을 실행해요. 새 팔로워마다 보내는 감사 메시지나 DM으로 쓸 수 있어요.
- 생일 축하 자동 발송: **Birthday Reminder**(생일 알림) 트리거로 GPT 액션을 실행해서, 연락처에 기본 생일 축하 메시지를 이메일이나 SMS로 보내요.
- 피트니스 진행 상황 안내: 피트니스 앱에서 **Lesson Completed**(강의 완료) 트리거가 실행되면, 워크플로우가 진행 상황을 SMS나 이메일로 보낼 수 있어요.
- 이커머스 장바구니 이탈 회복: Shopify에서 **Abandoned Checkout**(결제 중단) 트리거가 실행되면, GPT 액션이 만든 장바구니 알림 이메일이나 SMS를 보내요.
- 웨비나 후속 메시지 자동 발송: 웨비나가 끝난 뒤 CRM의 **Appointment Status**(예약 상태) 트리거를 쓰면, 참석자 모두에게 GPT 액션으로 후속 이메일을 보낼 수 있어요.
- 부동산 기회 관리: **Opportunity Status Changed**(기회 상태 변경) 트리거가 실행되면 Google Sheets에 새 데이터를 자동으로 업데이트하고, 예비 고객에게 업데이트 이메일을 보내요.
- 코스 수료증 발급: 온라인 코스에서 **Product Completed**(상품 완료) 트리거가 실행되면, GPT 액션으로 축하 메시지와 수료증을 만들어 수료한 사람에게 보내요.
- 레스토랑 예약 확인 자동 발송: **Customer Booked Appointment**(고객 예약 완료) 트리거가 실행되면, 예약 상세 내용이 담긴 확인 메시지를 GPT 액션으로 만들어 보내요.
- 상품 추천: Shopify에서 **Order Placed**(주문 접수) 트리거가 실행된 뒤, 먼저 관련 상품 데이터를 가져와요. 이 데이터를 GPT 액션에 넘겨 상품 추천을 만들고 이메일이나 SMS로 보내요.
- 구매 후 설문: **Payment Received**(결제 완료) 트리거로 GPT 액션을 실행해서, 고객에게 감사 메시지와 구매 후 설문 링크를 보내요.
- 채용 지원 자동 응답: 채용 지원에 CRM 기본 폼을 쓰면, **Form Submitted**(폼 제출) 트리거가 실행될 때 GPT 액션 응답이 나가서 지원자마다 접수 확인을 보낼 수 있어요.
- 학습 계획: **Lesson Started**(강의 시작) 트리거가 실행되면, GPT 액션으로 학습 계획을 만들어 수강생에게 이메일이나 SMS로 보내는 워크플로우를 만들어요.
- 재무 조언: **Payment Received** 트리거가 실행된 뒤 GPT 액션으로 결제 내역을 바탕으로 한 재무 조언을 만들어 이메일이나 SMS로 보내요.
- CRM 이벤트 후속 메시지: **Order Submitted**(주문 제출) 트리거가 실행되면, 워크플로우가 GPT 액션으로 후속 이메일을 보내 쇼핑 경험에 대한 피드백을 요청할 수 있어요.
- 이커머스 상품 리뷰 자동 요청: Shopify에서 **Order Fulfilled**(주문 처리 완료) 트리거가 실행되면, GPT 액션으로 고객에게 상품 리뷰를 요청하는 이메일을 보내요.
- TikTok 인플루언서 캠페인 관리: **TikTok Form Submitted**(TikTok 폼 제출) 트리거가 실행되면, 워크플로우가 인플루언서를 **제휴 관리자**에 자동으로 추가하고 GPT 액션으로 환영 메시지를 보낼 수 있어요.
- 이벤트 참석 확인(RSVP) 자동 발송: 이벤트 등록 폼에서 오는 **Inbound Webhook**으로 GPT 액션 응답을 실행해서, 등록자마다 참석 확인을 보내요.
- 피트니스 목표 관리: 운동 일정과 관련된 **Task Reminder**(작업 알림) 트리거가 실행된 뒤, GPT 액션으로 사용자에게 진행 소식과 응원 메시지를 보내요.
- SaaS 회사의 고객 온보딩: **Membership New Signup**(멤버십 신규 가입) 트리거가 실행되면, GPT 액션으로 새 사용자에게 환영 메시지와 시작 안내를 보내요.
- 호텔 예약 확인: **Customer Booked Appointment** 트리거가 실행되면, 호텔 예약 상세 내용이 담긴 확인 메시지를 GPT 액션으로 만들어 보내요.

## GPT 액션 설정하기

워크플로우를 새로 만들거나 기존 워크플로우를 열어요. 알맞은 **Workflow Trigger**(워크플로우 트리거)를 추가한 뒤, **Actions**(액션) 목록으로 스크롤해서 **GPT powered by OpenAI** 액션을 추가하세요.

![액션 목록에서 GPT powered by OpenAI 액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025358190/original/pqhxcBuEqd8gL16XkEQaWjclUGVjY5M7OA.png?1714564555)

1. **Model**(모델) 드롭다운을 열고 워크플로우에 가장 알맞은 OpenAI 모델을 선택하세요.

   - GPT-6 Luna: 분류, 요약, 태그 지정, 빠른 답장처럼 빠르고 많은 양을 처리해야 하는 작업에 알맞아요.
   - GPT-6 Sol: 여러 단계의 추론이 필요한 복잡한 작업에 알맞아요.

   **Model** 드롭다운에는 다른 OpenAI 모델이 나올 수도 있어요.

   GPT 5, GPT 5.1, GPT 5 Mini, GPT 5 Nano, GPT 4o, GPT 4 Turbo, GPT 4o Mini

   ![Model 드롭다운에서 모델 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082332542/original/IgRRBp1wY-fl_N_aJDsBuiXKrjqUgrVaWg.png?1790890023)

2. **Prompt**(프롬프트)에 ChatGPT가 응답을 만들 내용을 입력하세요. 예: "고객 메시지에 대한 답변을 작성해 주시겠어요?"

   ![Prompt 입력란에 프롬프트 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050787086/original/dShtIRkWL70cFXZp0bgFMUTNEHEetXePaw.png?1754042869)

   커스텀 값을 활용하면 동적 프롬프트를 만들 수 있어요.

   ![커스텀 값을 넣은 동적 프롬프트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155001426452/original/lHFh9j87_8vh7FhbI0dH2IHZeA_ysqrpWw.png?1687280858)

3. **Advanced options**(고급 옵션)에서 **Temperature**(온도)를 설정하세요. 샘플링 온도는 AI가 글을 만들 때 무작위성을 얼마나 줄지 정하는 값이에요. 0.1에서 1 사이로 설정해요. 0.8처럼 높으면 더 다양하고 무작위한 결과가 나오고, 0.2처럼 낮으면 더 집중되고 예측하기 쉬운 응답이 나와요. 이 값을 조절하면 AI가 만드는 콘텐츠의 창의성과 통제 수준을 맞출 수 있어요.

   ![Advanced options의 Temperature 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155001426451/original/qYfG24IQdY6B5blaXb3Pxo8YJ_CI2IQ91A.png?1687280857)

4. ChatGPT 설정을 마치면 출력 결과를 워크플로우의 다음 액션에서 쓸 수 있어요. `{{chatgpt.1.response}}`

   ![다음 액션에서 사용할 수 있는 GPT 출력 값](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155001426453/original/9oLKr8pfh8CD4aMtX2bsYQ6RASpFkre1Fw.png?1687280858)

## GPT가 만든 출력 활용하기

원하는 AI 모델을 선택하고 설정했다면, 워크플로우에 **GPT powered by OpenAI** 액션을 넣어 프롬프트에 맞는 동적 출력을 만들 수 있어요.

1. 직접 프롬프트를 입력하세요.

   예: "Write a follow-up email based on this message: `{{contact.message}}`"

2. 필요하면 동적 변수를 사용하세요.

   `{{contact.first_name}}`, `{{event.notes}}` 같은 동적 필드를 프롬프트에 넣으면 출력을 개인에 맞게 만들 수 있어요.

3. 워크플로우를 테스트하거나 실행하세요.

   액션을 추가한 뒤 연락처 한 명으로 워크플로우를 테스트해서 GPT 출력이 어떻게 나오는지 확인할 수 있어요. AI 출력은 이어지는 워크플로우 단계에서 쓸 수 있어요(예: 이메일이나 SMS로 보내기).

{% hint style="warning" %}
출력이 어디로 가는지 궁금하다면, AI가 만든 콘텐츠는 다음과 같이 쓸 수 있어요.

1. 커스텀 필드에 저장
2. 이메일이나 SMS 단계에서 바로 사용
3. 내부에 기록하거나 Slack/Webhook으로 팀에 전달
{% endhint %}

## 예시 프롬프트

1. 응답 생성 — 고객 메시지에 답장할 때 쓰는 프롬프트예요.

```
Your name is {{user.name}}. You are a helpful, creative, clever, and very friendly assistant. Generate a best response email to {{contact.name}} from {{user.name}} for the below message.   
{{message.body}}
```

2. 이메일/SMS 콘텐츠 생성 — 이메일이나 SMS에 넣을 동적 콘텐츠를 만들 때 쓰는 프롬프트예요.

```
Generate email content without subject to promote the product in this link YOUR_WEBSITE to {{contact.name}} from {{user.name}}
```

## 자주 묻는 질문

### GPT 액션의 동작과 응답을 직접 조정할 수 있나요?

네, 가능해요. 원하는 온도(temperature)를 설정해서 GPT 액션을 조정할 수 있어요. 온도는 생성되는 응답의 무작위성을 정해요. 온도가 높으면 더 창의적이지만 예측하기 어려운 응답이 나오고, 낮으면 더 집중되고 일관된 결과가 나와요.

### GPT 액션을 쓸 때 제한 사항이나 주의할 점이 있나요?

GPT 액션은 ChatGPT 모델을 기반으로 동작해요. 그래서 AI가 만든 응답이 항상 완벽하지는 않을 수 있어요. 고객에게 보내기 전에 결과를 검토하고 확인하는 것을 권장해요. 또한 충분한 테스트와 모니터링을 통해 생성된 응답의 품질과 정확도를 확인하는 것이 중요해요.

### GPT 액션과 다른 워크플로우 액션·트리거를 함께 쓸 수 있나요?

네, 가능해요. GPT 액션은 다른 워크플로우 액션·트리거와 함께 써서 워크플로우의 기능을 넓힐 수 있어요. 예시를 살펴보세요.

1. 맞춤형 리드 자격 검증

   - 트리거: 리드 데이터가 담긴 **Inbound Webhook**
   - 액션: GPT 액션 안의 ChatGPT로 리드와 대화해요. 대화 내용을 바탕으로 다른 워크플로우 액션을 사용해 리드의 자격을 판단하고, 영업 담당자 배정이나 리드 상태 업데이트 같은 알맞은 액션을 실행해요.

2. 지능형 고객 지원

   - 트리거: **Customer Replied**(고객 답장) 또는 지원 티켓 데이터가 담긴 **Inbound Webhook**
   - 액션: GPT 액션 안의 ChatGPT로 고객의 문의나 문제를 파악해요. 다른 워크플로우 액션과 함께 써서 충분한 정보를 담은 맞춤 응답을 만들어요. 티켓 상태 업데이트, 지원 담당자 배정, 이메일로 응답 보내기 같은 액션을 더할 수 있어요.

3. 동적 콘텐츠 생성

   - 트리거: 동적 콘텐츠 요청이 담긴 **Inbound Webhook**
   - 액션: GPT 액션 안의 ChatGPT로 동적 콘텐츠를 만들어요. 다른 워크플로우 액션과 함께 써서 만든 콘텐츠를 가공하거나 수정·검증하고, 원하는 소통 채널로 전달해요.

4. 상황에 맞는 영업 추천

   - 트리거: **Contact Changed**(연락처 변경) 또는 연락처 데이터가 담긴 **Inbound Webhook**
   - 액션: GPT 액션 안의 ChatGPT로 연락처의 프로필과 이전 상호작용을 분석해요. 분석 결과를 바탕으로 다른 워크플로우 액션을 사용해 맞춤 영업 추천을 만들어요. 추천은 이메일, SMS로 보내거나 영업팀을 위한 CRM 대시보드에 연동할 수 있어요.

5. 이벤트 등록 자동화

   - 트리거: 이벤트 등록 데이터가 담긴 **Inbound Webhook**
   - 액션: GPT 액션 안의 ChatGPT로 이벤트 등록을 확인하고 추가 정보를 안내해요. 다른 워크플로우 액션과 함께 써서 등록 데이터를 처리하고, 참석자 목록을 업데이트하고, ChatGPT가 만든 콘텐츠로 맞춤 이벤트 알림이나 후속 메시지를 보내요.

GPT 액션을 다른 워크플로우 액션·트리거와 함께 쓰면, 프로세스를 자동화하고 상호작용을 맞춤화하며 비즈니스 운영을 간소화하는 똑똑하고 유연한 워크플로우를 만들 수 있어요.
