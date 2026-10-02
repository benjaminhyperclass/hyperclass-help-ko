---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000008742-workflow-action-ai-email-parser
번역일: 2026-10-02
카테고리: 07-워크플로우 > Workflow AI Workflow Actions
---

# 워크플로우 액션 - AI 이메일 파서(AI Email Parser)

하이퍼클래스의 **이메일 파서(Email Parser)** 워크플로우 액션(Action)은 AI를 활용해 수신 이메일에서 구조화된 데이터를 추출하여 자동화에 활용할 수 있도록 해줘요. 이 글에서는 액션 설정 방법, 추출할 데이터 정의 방법, 그리고 추출된 값을 이후 워크플로우 단계에서 활용하는 방법을 안내해 드릴게요.

**참고:** AI 이메일 파서는 **프리미엄 워크플로우 액션**으로, 실행할 때마다 **추가 요금**이 부과돼요.

**목차**

- [AI 이메일 파서 액션이란?](#What-is-the-AI-Email-Parser-Action?)
- [AI 이메일 파서 액션의 주요 장점](#Key-Benefits-of-the-AI-Email-Parser-Action)
- [AI 이메일 파서 액션 사용 방법](#How-To-Use-the-AI-Email-Parser-Action)
- [자주 묻는 질문](#Frequently-Asked-Questions)

# **AI 이메일 파서 액션이란?**

AI 이메일 파서는 이메일에 담긴 정보를 구조화된 워크플로우 데이터로 변환하기 위해 특별히 설계된 워크플로우 액션이에요. 리드 제공업체, 문의 폼, 예약 시스템, 주문 알림 등 외부 소스에서 전달되는 이메일로 시작되는 프로세스를 자동화하기 쉽게 만들어줘요.

이 액션은 워크플로우를 트리거(Trigger)한 이메일을 읽고, 사용자가 지정한 정보를 식별한 다음, 추출된 값을 이후 워크플로우 액션에서 사용할 수 있게 만들어줘요.

예를 들어, 부동산 리드 알림 이메일에는 잠재 고객의 이름, 이메일 주소, 전화번호, 문의 내용이 담겨 있을 수 있어요. 이메일 파서는 이 값들을 추출한 다음 자동으로 연락처(Contacts)를 생성하고 후속 조치를 시작할 수 있어요.

## AI 이메일 파서 액션의 주요 장점

- 전용 이메일 파싱 기능: 더 범용적인 AI 데이터 추출(AI Extract Data) 액션을 별도로 설정할 필요 없이, 수신 이메일에서 구조화된 정보를 바로 추출할 수 있어요.

- 사전 제작된 추출 템플릿: 신규 리드(New Lead), 주문 상세(Order Details), 문의(Inquiry), 예약(Appointment) 같은 일반적인 사용 사례로 바로 시작할 수 있어요.

- 커스텀 데이터 추출: AI가 이메일에서 식별해야 할 추가 정보를 직접 정의할 수 있어요.

- 다양한 데이터 유형: 값을 텍스트(Text), 이메일(Email), 전화번호(Phone Number), 날짜(Date), 날짜 및 시간(Date and Time), URL, 또는 불리언(Boolean) 필드로 추출할 수 있어요.

- 재사용 가능한 워크플로우 결과값: 파싱된 값을 연락처 생성(Create Contact), 이메일 보내기(Send Email), SMS 보내기(Send SMS), 기회(Opportunity) 관련 액션, 알림, 담당자 배정 등 다른 워크플로우 단계에서 활용할 수 있어요.

- 유연한 이메일 콘텐츠 선택: 워크플로우에 따라 최신 이메일 메시지, 전체 이메일 스레드, 또는 커스텀 값(Custom Value) 중에서 파싱할 대상을 선택할 수 있어요.

## **AI 이메일 파서 액션 사용 방법**

올바르게 설정된 워크플로우는 정확한 수신 이메일이 자동화를 트리거하고, 이메일 파서가 신뢰할 수 있는 구조화된 데이터를 추출할 수 있을 만큼 충분한 맥락을 받도록 보장해줘요. 아래 예시에서는 수신된 부동산 리드 알림 이메일을 활용해 파싱된 정보로 연락처를 생성하는 과정을 보여드릴게요.

시작하기 전에 확인할 사항:

- 어떤 메일함 또는 이메일 흐름이 워크플로우를 트리거해야 하는지 확인하세요.
- 이메일에서 추출하고 싶은 값을 결정하세요.
- 추출된 값을 어디에 저장하거나 어떻게 사용할지 결정하세요.

참고: AI 이메일 파서 액션을 사용하려면 수신 이메일(Inbound Email) 트리거가 반드시 있어야 해요.

### 1단계: 새 워크플로우 생성

- **자동화(Automation) > 워크플로우(Workflows)**로 이동하세요.
- **+ 워크플로우 생성(+ Create Workflow)**을 클릭하세요.
- **처음부터 시작(Start from Scratch)**을 선택하세요.
- 원하는 대로 표준 빌더(Standard Builder) 또는 고급 빌더(Advanced Builder)를 선택하세요.

![](https://jumpshare.com/share/d2BdXJDO3sLLJUZ0ip3P+/GIF+Recording+2026-07-03+at+18.01.03.gif)

### 2단계: 이메일 트리거 추가

참고: 트리거의 전체 동작 방식과 이메일 설정 요건에 대해서는 [워크플로우 트리거 - 수신 이메일(Inbound Email)](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000007650-workflow-trigger-inbound-email) 문서를 참고하세요.

- **+ 새 트리거 추가(+ Add New Trigger)**를 클릭하세요.
- **수신 이메일(Inbound Email)**을 선택하세요.
- 모니터링하고 싶은 메일함이나 이메일 패턴에 맞춰 트리거를 설정하세요.
- 다음과 같은 필터를 사용할 수 있어요:

수신 메일함(Email Sent To Mailbox)
- 발신자(Email Sent From)
- 제목(Subject)
- 본문 일반 텍스트(Body Plain Text)
- 첨부파일 유무(Has Attachments)

- 고급 설정(Advanced Settings)에서 워크플로우가 새로운 이메일 대화에서만 실행되게 할지 여부를 선택하세요.

- 예를 들어, 리드 알림 이메일에 "New Buyer Lead"와 같은 문구가 항상 포함되어 있다면, 본문 일반 텍스트(Body Plain Text) > 포함(Contains) 조건을 설정하고 해당 문구를 입력할 수 있어요. 알림이 항상 같은 발신자에게서 온다면 발신자 이메일 주소로도 필터링할 수 있어요.

기존 스레드에 대한 답장이 워크플로우를 다시 트리거하지 않도록 하려면, **새 이메일 대화에서만 트리거(Trigger Only for New Email Conversations)**를 활성화하세요. 이 옵션을 활성화하면 새로운 대화를 시작하는 첫 번째 이메일만 워크플로우를 트리거해요.

- **트리거 저장(Save Trigger)**을 클릭하세요.

![](https://jumpshare.com/share/iNckpBfLhtAz9ZAIGauw+/GIF+Recording+2026-07-03+at+18.10.17.gif)

### **3단계:** 이메일 파서 액션 추가

- 트리거 아래의 **+** 아이콘을 클릭하세요.
- **Email Parser**를 검색하세요.
- **AI 액션(AI Actions)** 카테고리에서 **Email Parser**를 선택하세요.

![](https://jumpshare.com/share/RlbXuLXYtyz1f603vlRI+/GIF+Recording+2026-09-14+at+16.56.43.gif)

### **4단계:** 액션 설정

- 필요한 경우 **액션 이름(Action Name)**을 입력하거나 수정하세요.
- **이메일 콘텐츠(Email Content)**에서 AI가 파싱해야 할 콘텐츠를 선택하세요:

**AI는 이 워크플로우를 트리거한 이메일을 읽어요. 본문(Body) 또는 전체 본문(Full Body)을 선택하면 제목(subject line)이 기본으로 포함돼요. '커스텀 값(Custom Value)'을 선택하면 AI는 대신 해당 값을 읽는데, 이 경우 이메일이 아닐 수도 있어요.**

본문(Body): 최신 이메일 메시지만 파싱해요.

- 전체 본문(Full Body): 답장 스레드까지 함께 분석해야 할 때 사용해요.

- **이 이메일에 대한 설명(About This Email)** 필드를 사용해 AI에게 분석 중인 이메일이 어떤 유형인지 알려주세요.

예시: 부동산 리드 제공업체로부터 온 신규 구매자 리드 알림

AI가 추출 작업에 유용한 맥락을 가질 수 있도록 설명은 짧고 구체적으로 작성하세요.

![](https://jumpshare.com/share/ZeU98BFW0hS5Y7SNBjBG+/GIF+Recording+2026-09-14+at+17.00.40.gif)

### **5단계:** 추출할 필드 설정

- **추출할 필드(Fields to Extract)**에서 사전 제작된 템플릿을 선택하세요: 신규 리드(New Lead), 주문 상세(Order Details), 문의(Inquiry), 예약(Appointment).

- 이 예시에서는 신규 리드(New Lead)를 사용할게요.

- 추출해야 할 정보를 설정하세요. 예를 들면:

이름(Name)
- 이메일(Email)
- 전화번호(Phone)
- 메시지(Message)

- 각 필드에 맞는 올바른 데이터 유형을 선택하세요.

- 해당 필드에 어떤 정보가 담겨야 하는지 설명하는 짧은 문구를 추가하세요.

- 추가 필드가 필요하면 **데이터 추가(Add Data)**를 클릭하세요.

- 완료되면 **액션 저장(Save Action)**을 클릭하세요.

수신 이메일(Inbound Email) 트리거 조건과 일치하는 이메일이 워크플로우에 들어오면, 이메일 파서는 선택된 콘텐츠를 분석하여 설정된 값을 반환해요.

![](https://jumpshare.com/share/ZicqXlj8xhawE07iH22Q+/GIF+Recording+2026-09-14+at+17.06.22.gif)

### 6단계: 추출된 값을 저장하거나 사용할 후속 액션 추가

중요: AI 이메일 파서는 **추출된 값을 자체적으로 영구 저장하지 않아요**. 추출된 **값은 이후 액션의 커스텀 값 선택기(custom value picker)를 통해 워크플로우 내에서만 사용할 수 있어요**. AI 데이터 추출 이후에 다른 액션을 추가하지 않으면, 추출된 데이터는 연락처, 기회(Opportunity), 또는 다른 어떤 레코드에도 저장되지 않아요.

- 일반적으로 많이 사용하는 다음 액션들:

연락처 생성(Create Contact)
- 연락처 필드 업데이트(Update Contact Field)
- 기회 생성(Create Opportunity)
- 기회 생성/업데이트(Create/Update Opportunity)
- 내부 알림(Internal Notification)
- 이메일/SMS 보내기(Send Email/SMS)

- 연락처 생성(Create Contact) 또는 **연락처 필드 업데이트(Update Contact Field)**에서 각 대상 필드를 커스텀 값 선택기에 있는 **AI 데이터 추출(AI Extract Data)**의 해당 값과 매핑하세요.

- 기회를 생성하거나 업데이트하고 싶다면, 예산, 서비스 유형, 작업 상세 내용 등 추출된 관련 값을 올바른 기회 필드에 매핑하세요.

![](https://jumpshare.com/share/Ekk8smrN1hKfCgfGLoJm+/GIF+Recording+2026-09-14+at+17.10.06.gif)

### 7단계: 후속 액션 추가

이메일이 파싱되고 정보가 워크플로우 안에서 사용 가능해지면, 비즈니스 프로세스에 맞춰 자동화를 계속 진행할 수 있어요.

예시:

- 이메일 보내기
- SMS 보내기
- 기회 생성 또는 업데이트
- 내부 알림 보내기
- 리드를 담당자에게 배정
- 다른 워크플로우 트리거
- 다른 자동 후속 프로세스 시작

예를 들어, 연락처를 생성한 직후 **이메일 보내기(Send Email)** 액션을 추가해서 문의에 대한 접수 확인을 바로 보낼 수 있어요.

![](https://jumpshare.com/share/bfzq1uIDOawkZ6JCvJuG+/Screen+Shot+2026-09-14+at+17.16.38.png)

## **자주 묻는 질문**

**Q: AI 이메일 파서(AI Email Parser)와 AI 데이터 추출(AI Extract Data)의 차이는 무엇인가요?**
**AI 이메일 파서**는 이메일에서 구조화된 정보를 추출하는 데 특화되어 설계된 반면, **AI 데이터 추출**은 이메일, SMS 콘텐츠, 웹훅(Webhook) 페이로드, AI 결과값 등 다양한 텍스트 기반 입력에서 데이터를 추출할 수 있는 더 범용적인 액션이에요. 워크플로우가 이메일 파싱에만 특화되어 있다면 이메일 파서를 사용하고, 다양한 유형의 콘텐츠에 걸쳐 더 유연하게 사용하고 싶다면 AI 데이터 추출을 사용하세요.

Q: 이메일 파서를 사용하려면 수신 이메일(Inbound Email) 트리거가 꼭 필요한가요?
이 글에서 설명한 표준 이메일 파싱 워크플로우의 경우, 수신 이메일 트리거가 이메일 파서가 분석할 이메일을 제공해요. 커스텀 값(Custom Value) 옵션을 선택한 경우에는 이메일 파서가 해당 값을 분석할 수도 있어요.

Q: 본문(Body)과 전체 본문(Full Body) 중 어떤 것을 사용해야 하나요?
필요한 정보가 최신 메시지에 포함되어 있다면 **본문(Body)**을 사용하세요. 이메일 스레드의 다른 부분에 있는 정보도 분석에 포함되어야 한다면 **전체 본문(Full Body)**을 사용하세요.

Q: 사전 제작된 템플릿에 포함되지 않은 필드도 추출할 수 있나요?
네, 가능해요. 추가 데이터 필드를 더하고, AI가 추출할 정보의 데이터 유형과 설명을 직접 정의할 수 있어요.

Q: 추출된 값을 이후의 워크플로우 액션에서 사용할 수 있나요?
네, 가능해요. 이메일 파서의 결과값은 커스텀 값 선택기를 통해 사용할 수 있으며, 이후 워크플로우 액션에 매핑할 수 있어요.

Q: 같은 이메일 스레드의 답장이 워크플로우를 반복해서 시작하지 않게 하려면 어떻게 하나요?
수신 이메일(Inbound Email) 트리거에서 **새 이메일 대화에서만 트리거(Trigger Only for New Email Conversations)**를 활성화하세요. 이 옵션을 활성화하면 기존 이메일 대화에 대한 답장은 트리거에서 무시돼요.

---
*원문 최종 수정: 2026-09-14*
*Hyperclass 사용 가이드 — hyperclass.ai*