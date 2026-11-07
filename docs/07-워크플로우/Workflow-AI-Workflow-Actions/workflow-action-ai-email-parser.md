---
원문: /support/solutions/articles/155000008742-workflow-action-ai-email-parser
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — AI Email Parser(AI 이메일 파서)

**Email Parser**(이메일 파서) 워크플로우 액션은 AI로 인바운드 이메일에서 필요한 정보를 뽑아 자동화에 쓸 수 있는 데이터로 바꿔 줘요. 이 문서에서는 액션을 설정하는 방법, 추출할 데이터를 정하는 방법, 추출한 값을 이후 단계에서 활용하는 방법을 안내해요.

{% hint style="info" %}
AI Email Parser는 프리미엄 워크플로우 액션이에요. 실행할 때마다 추가 요금이 발생해요.
{% endhint %}

## AI Email Parser 액션이란?

AI Email Parser는 이메일에 담긴 정보를 워크플로우에서 쓸 수 있는 데이터로 바꿔 주는 액션이에요. 리드 제공업체, 문의 폼, 예약 시스템, 주문 알림 등 외부에서 오는 이메일로 시작하는 업무를 자동화할 때 유용해요.

이 액션은 워크플로우를 시작시킨 이메일을 읽고, 사용자가 지정한 정보를 찾아내요. 추출한 값은 이후 워크플로우 액션에서 쓸 수 있어요.

예를 들어 부동산 리드 알림 이메일에는 잠재 고객의 이름, 이메일 주소, 전화번호, 문의 내용이 들어 있을 수 있어요. Email Parser로 이 값들을 추출하면 연락처를 자동으로 만들고 후속 응대까지 이어갈 수 있어요.

---

## AI Email Parser 액션 사용하기

워크플로우를 제대로 설정해야 알맞은 수신 이메일만 자동화를 시작시키고, Email Parser도 정확한 데이터를 뽑을 만큼 충분한 내용을 받아요. 아래 예시는 부동산 리드 알림 이메일을 받아서, 파싱한 정보로 연락처를 만드는 흐름이에요.

**시작하기 전에**

- 어떤 메일함 또는 이메일 흐름으로 워크플로우를 시작할지 확인하세요.
- 이메일에서 어떤 값을 추출할지 정하세요.
- 추출한 값을 어디에 저장하거나 어떻게 쓸지 정하세요.

{% hint style="info" %}
AI Email Parser 액션을 쓰려면 **Inbound Email**(인바운드 이메일) 트리거가 있어야 해요.
{% endhint %}

### 1단계: 새 워크플로우 만들기

1. **자동화 > 워크플로우**로 이동하세요.
2. **+ Create Workflow**(워크플로우 만들기)를 클릭하세요.
3. **처음부터 시작**을 선택하세요.
4. 원하는 대로 **Standard Builder**(표준 빌더) 또는 **Advanced Builder**(고급 빌더)를 선택하세요.

![새 워크플로우를 처음부터 만드는 화면](https://jumpshare.com/share/d2BdXJDO3sLLJUZ0ip3P+/GIF+Recording+2026-07-03+at+18.01.03.gif)

### 2단계: 이메일 트리거 추가하기

{% hint style="info" %}
트리거 동작과 이메일 설정 조건을 자세히 알고 싶다면 [워크플로우 트리거 - Inbound Email](../workflow-trigger-inbound-email.md) 문서를 참고하세요.
{% endhint %}

1. **+ Add New Trigger**(새 트리거 추가)를 클릭하세요.
2. **Inbound Email**을 선택하세요.
3. 감시하려는 메일함이나 이메일 패턴에 맞게 트리거를 설정하세요.
4. 필요에 따라 아래와 같은 필터를 사용하세요.

   - **Email Sent To Mailbox**(이메일을 받은 메일함)
   - **Email Sent From**(이메일을 보낸 사람)
   - **Subject**(제목)
   - **Body Plain Text**(본문 일반 텍스트)
   - **Has Attachments**(첨부파일 있음)
5. **Advanced Settings**(고급 설정)에서 새 이메일 대화일 때만 워크플로우를 실행할지 정하세요.
6. 예를 들어 리드 알림 이메일에 "New Buyer Lead" 같은 문구가 항상 들어 있다면, **Body Plain Text > Contains**(포함)를 설정하고 그 문구를 입력하면 돼요. 알림이 늘 같은 발신자에게서 온다면 발신자 이메일 주소로도 걸러 낼 수 있어요.

   기존 대화에 달린 답장 때문에 워크플로우가 다시 실행되지 않게 하려면 **Trigger Only for New Email Conversations**(새 이메일 대화에서만 트리거)를 켜세요. 이 옵션을 켜면 새 대화를 시작하는 첫 이메일만 워크플로우를 시작시켜요.
7. **Save Trigger**(트리거 저장)를 클릭하세요.

![인바운드 이메일 트리거를 설정하는 화면](https://jumpshare.com/share/iNckpBfLhtAz9ZAIGauw+/GIF+Recording+2026-07-03+at+18.10.17.gif)

### 3단계: Email Parser 액션 추가하기

1. 트리거 아래의 **+** 아이콘을 클릭하세요.
2. **Email Parser**를 검색하세요.
3. **AI Actions**(AI 액션)에서 **Email Parser**를 선택하세요.

![Email Parser 액션을 추가하는 화면](https://jumpshare.com/share/RlbXuLXYtyz1f603vlRI+/GIF+Recording+2026-09-14+at+16.56.43.gif)

### 4단계: 액션 설정하기

1. 필요하면 **Action Name**(액션 이름)을 입력하거나 수정하세요.
2. **Email Content**(이메일 콘텐츠)에서 AI가 분석할 내용을 선택하세요.

   AI는 이 워크플로우를 시작시킨 이메일을 읽어요. **Body** 또는 **Full Body**를 선택하면 제목도 기본으로 함께 읽어요. **Custom Value**(커스텀 값)를 선택하면 AI가 이메일 대신 그 값을 읽어요. 이 값은 이메일이 아닐 수도 있어요.

   - **Body**(본문): 가장 최근 이메일 메시지를 분석해요.
   - **Full Body**(전체 본문): 답장 스레드까지 함께 분석해야 할 때 선택해요.
3. **About This Email**(이메일 설명) 필드에 AI가 분석할 이메일이 어떤 종류인지 알려 주세요.

   예: `New buyer lead notification from a real estate lead provider.`

   설명은 짧고 구체적으로 쓰세요. 그래야 AI가 추출할 때 참고할 맥락이 분명해져요.

![Email Parser 액션을 설정하는 화면](https://jumpshare.com/share/ZeU98BFW0hS5Y7SNBjBG+/GIF+Recording+2026-09-14+at+17.00.40.gif)

### 5단계: 추출할 필드 설정하기

1. **Fields to Extract**(추출할 필드)에서 미리 만들어 둔 템플릿 중 하나를 선택하세요. **New Lead**(새 리드), **Order Details**(주문 상세), **Inquiry**(문의), **Appointment**(예약)가 있어요.
2. 이 예시에서는 **New Lead**를 사용해요.
3. 추출할 정보를 설정하세요. 예를 들면 다음과 같아요.

   - Name
   - Email
   - Phone
   - Message
4. 각 필드에 알맞은 데이터 유형을 선택하세요.
5. 필드에 어떤 정보가 들어가야 하는지 짧게 설명을 입력하세요.
6. 필드가 더 필요하면 **Add Data**(데이터 추가)를 클릭하세요.
7. 설정이 끝나면 **Save Action**(액션 저장)을 클릭하세요.

Inbound Email 트리거 조건에 맞는 이메일이 워크플로우에 들어오면, Email Parser가 선택한 내용을 분석해서 설정한 값을 돌려줘요.

![추출할 필드를 설정하는 화면](https://jumpshare.com/share/ZicqXlj8xhawE07iH22Q+/GIF+Recording+2026-09-14+at+17.06.22.gif)

### 6단계: 추출한 값을 저장하거나 쓸 액션 추가하기

{% hint style="warning" %}
AI Email Parser는 추출한 값을 스스로 저장하지 않아요. 추출한 값은 이후 액션의 커스텀 값 선택기를 통해서만 워크플로우 안에서 쓸 수 있어요. **AI Extract Data**(AI 데이터 추출) 액션 뒤에 다른 액션을 추가하지 않으면, 추출한 데이터는 연락처, 기회, 그 밖의 어떤 레코드에도 저장되지 않아요.
{% endhint %}

1. 다음 액션으로는 보통 아래와 같은 것을 사용해요.

   - **Update Contact Field**(연락처 필드 업데이트)
   - **Create Opportunity**(기회 만들기)
   - **Update Opportunity**(기회 업데이트)
   - **Internal Notification**(내부 알림)
   - **Send Email/SMS**(이메일/SMS 보내기)
2. **Create Opportunity** 또는 **Update Opportunity**에서는 커스텀 값 선택기로, AI가 추출한 값(이름, 예산, 서비스 유형, 작업 내용 등)을 알맞은 기회 필드에 연결하세요.

![추출한 값을 기회 필드에 연결하는 화면](https://jumpshare.com/share/gXbOS8PzzaVzmbEvfggw+/GIF+Recording+2026-10-08+at+20.51.20.gif)

### 7단계: 후속 액션 추가하기

이메일을 파싱해서 워크플로우에서 정보를 쓸 수 있게 되면, 업무 방식에 맞게 자동화를 이어 갈 수 있어요.

예를 들면 다음과 같아요.

- 이메일 보내기
- SMS 보내기
- 내부 알림 보내기
- 리드를 사용자에게 배정하기
- 다른 워크플로우 실행하기
- 다른 자동 후속 프로세스 시작하기

예를 들어 연락처를 만든 직후에 [**Send Email**](../Communication-Workflow-Actions/workflow-action-send-email.md) 액션을 추가하면 문의를 받았다는 안내 메일을 바로 보낼 수 있어요.

![후속 액션으로 이메일 보내기를 추가한 화면](https://jumpshare.com/share/OwGMNcYfWYoJXjNOi2m2+/Screen+Shot+2026-10-08+at+20.53.48.png)

---

## 자주 묻는 질문

### AI Email Parser와 AI Extract Data는 어떻게 다른가요?

**AI Email Parser**는 이메일에서 정보를 뽑는 데 맞춰 만든 액션이에요. [**AI Extract Data**](workflow-action-ai-extract-data.md)는 더 범용적인 액션으로, 이메일뿐 아니라 SMS 내용, 웹훅 페이로드, AI 출력, 그 밖의 텍스트 기반 입력에서도 데이터를 추출할 수 있어요. 이메일 파싱이 목적이라면 Email Parser를, 여러 종류의 콘텐츠를 유연하게 다뤄야 한다면 AI Extract Data를 사용하세요.

### Email Parser를 쓰려면 Inbound Email 트리거가 꼭 필요한가요?

이 문서에서 설명한 일반적인 이메일 파싱 워크플로우에서는 Inbound Email 트리거가 Email Parser가 분석할 이메일을 전달해 줘요. **Custom Value** 옵션을 선택하면 Email Parser가 커스텀 값을 분석할 수도 있어요.

### Body와 Full Body 중 무엇을 선택해야 하나요?

필요한 정보가 가장 최근 메시지에 있다면 **Body**를 선택하세요. 이메일 스레드의 다른 곳에 있는 정보까지 분석해야 한다면 **Full Body**를 선택하세요.

### 미리 만들어 둔 템플릿에 없는 필드도 추출할 수 있나요?

네, 할 수 있어요. 데이터 필드를 추가하고, AI가 추출할 정보의 데이터 유형과 설명을 직접 정하면 돼요.

### 추출한 값을 이후 워크플로우 액션에서 쓸 수 있나요?

네, 쓸 수 있어요. Email Parser의 결과값은 커스텀 값 선택기에서 고를 수 있고, 이후 액션에 연결해서 사용할 수 있어요.

### 같은 이메일 스레드의 답장 때문에 워크플로우가 계속 시작되지 않게 하려면 어떻게 하나요?

Inbound Email 트리거에서 **Trigger Only for New Email Conversations**를 켜세요. 이 옵션을 켜면 기존 이메일 대화에 달린 답장은 트리거가 무시해요.
