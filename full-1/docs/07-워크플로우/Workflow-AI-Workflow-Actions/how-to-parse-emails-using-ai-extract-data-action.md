---
원문: https://help.gohighlevel.com/support/solutions/articles/155000008182-how-to-parse-emails-using-ai-extract-data-action
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# AI Extract Data(AI 데이터 추출) 액션으로 이메일 파싱하기

받은 이메일 본문에서 리드 정보나 서비스 요청 같은 내용을 뽑아 워크플로우에서 바로 쓸 수 있는 값으로 바꾸는 방법을 안내해요. 값을 추출한 뒤 후속 액션으로 저장하고, 그 데이터로 자동화를 이어 가는 과정까지 다뤄요.

{% hint style="info" %}
AI Extract Data는 프리미엄 워크플로우 액션이라서, 실행할 때마다 추가 요금이 부과돼요.
{% endhint %}

## AI Extract Data 액션으로 이메일을 파싱한다는 건?

이메일 본문에 리드 정보나 서비스 요청이 줄글로 들어 있으면, 팀이 그 내용을 CRM에 일일이 옮겨 적느라 시간을 쓰게 돼요. AI Extract Data는 하이퍼클래스가 받은 이메일을 읽고 리드의 이름, 이메일 주소, 전화번호, 예산, 서비스 요청 같은 정보를 뽑아 줘요. 정리되지 않은 이메일 텍스트를 직접 복사하지 않고도 워크플로우에서 쓸 수 있는 값으로 바꿀 수 있어요. 값을 추출한 뒤에는 이후 액션으로 기록을 만들거나 수정하고, 후속 조치를 실행하고, 팀에 알릴 수 있어요.

리드 유입 사이트, 마켓플레이스, 추천 경로, 외부 시스템처럼 CRM 형식에 맞지 않는 이메일을 받을 때 특히 유용해요.

## AI Extract Data 액션으로 이메일 파싱할 때의 장점

- **리드 처리 속도 향상**: 받은 이메일의 중요한 정보를 자동으로 가져와서 팀이 더 빨리 연락할 수 있어요.
- **수동 입력 감소**: 이메일 내용에서 값을 바로 추출하므로 복사해서 붙여넣는 작업이 줄어요.
- **일관된 데이터 수집**: 추출한 값을 연락처나 기회 필드에 연결해 기록을 깔끔하게 유지할 수 있어요.
- **더 나은 워크플로우 자동화**: 파싱한 값을 연락처 생성, 기회 생성, 알림, 이메일, 통화, SMS 같은 후속 액션에서 쓸 수 있어요.
- **유연한 접수 방식**: 폼이나 CRM 직접 입력이 아니라 이메일로 중요한 정보가 들어오는 경우도 처리할 수 있어요.

## AI Extract Data 액션으로 이메일 데이터 파싱하기

이메일 파싱 워크플로우는 값을 추출하는 데서 끝나지 않아요. 추출한 데이터를 쓸 수 있으려면 이후 액션(**Create Contact**(연락처 생성), **Update Contact Field**(연락처 필드 업데이트), **Create Opportunity**(기회 생성) 등)에서 그 값을 저장하거나 사용해야 해요.

{% hint style="info" %}
AI Extract Data 액션이 어떻게 동작하는지 더 자세히 알고 싶다면 [Workflow Action - AI Extract Data](workflow-action-ai-extract-data.md) 문서를 참고하세요.
{% endhint %}

**시작하기 전에**

- 어느 메일함이나 이메일 흐름에서 워크플로우를 시작할지 정해 두세요.
- 이메일에서 어떤 값을 추출할지 정하세요.
- 추출한 값을 어디에 저장하거나 쓸지 정하세요.
- AI Extract Data는 프리미엄 워크플로우 액션이라 실행할 때마다 추가 요금이 부과된다는 점을 기억하세요.

### 1단계: 새 워크플로우 만들기

1. **자동화 > 워크플로우**로 이동하세요.
2. **+ Create Workflow**(워크플로우 만들기)를 클릭하세요.
3. **처음부터 시작**을 선택하세요.
4. **Standard Builder**(표준 빌더)나 **Advanced Builder**(고급 빌더) 중 원하는 쪽을 선택하세요.

![새 워크플로우 만들기 화면](https://jumpshare.com/share/d2BdXJDO3sLLJUZ0ip3P+/GIF+Recording+2026-07-03+at+18.01.03.gif)

### 2단계: 이메일 트리거 추가하기

{% hint style="info" %}
새로 받은 이메일이 아니라 답장을 기준으로 시작하고 싶다면, 답장 채널을 **Email**(이메일)로 설정한 [Customer Replied](../Events-Workflow-Triggers/workflow-trigger-customer-replied.md)(고객 답장) 트리거를 쓸 수도 있어요.
{% endhint %}

1. **+ Add New Trigger**(새 트리거 추가)를 클릭하세요.
2. [**Inbound Email**](../workflow-trigger-inbound-email.md)(인바운드 이메일)을 선택하세요.
3. 확인하려는 메일함이나 이메일 패턴에 맞게 트리거를 설정하세요.
4. 다음과 같은 필터를 사용할 수 있어요.

   - **Email Sent To Mailbox**(이메일을 받은 메일함)
   - **Email Sent From**(이메일을 보낸 사람)
   - **Subject**(제목)
   - **Body Plain Text**(본문 일반 텍스트)
   - **Has Attachments**(첨부파일 여부)
5. **Advanced Settings**(고급 설정)에서 새 이메일 대화일 때만 워크플로우를 실행할지 선택하세요.

![이메일 트리거 설정 화면](https://jumpshare.com/share/iNckpBfLhtAz9ZAIGauw+/GIF+Recording+2026-07-03+at+18.10.17.gif)

### 3단계: AI Extract Data 액션 추가하기

1. 트리거 아래의 **+** 아이콘을 클릭하세요.

   ![트리거 아래 + 아이콘 클릭](https://jumpshare.com/share/8IlHbwUlIP0TTgFXCL8x+/Screen+Shot+2026-07-03+at+18.15.37.png)
2. **AI Extract Data**(AI 데이터 추출)를 검색해서 선택하세요.

   ![AI Extract Data 액션 검색 및 선택](https://jumpshare.com/share/aB21vBl6HJ4oEiXeqKxy+/Screen+Shot+2026-07-03+at+18.18.19.png)
3. 필요하면 **Rename**(이름 변경)으로 액션 이름을 바꿔서 워크플로우를 알아보기 쉽게 만드세요.

   ![액션 이름 변경](https://jumpshare.com/share/tO6ZKQBmL2EFF8klliig+/Screen+Shot+2026-07-03+at+19.40.27.png)

### 4단계: 추출할 이메일 내용 선택하기

1. **Extract From**(추출 대상)에서 **custom value picker**(커스텀 값 선택기)를 여세요.
2. **Inbound Email**로 이동하세요.
3. 파싱할 이메일 내용을 선택하세요. 자주 쓰는 항목은 다음과 같아요.

   - **Body Plain Text**
   - **Full Body Includes Reply Thread**(답장 스레드를 포함한 전체 본문)
   - **Subject**
   - **Message ID**(메시지 ID)
   - **From Email**(보내는 이메일)
   - **From Name**(보내는 사람)
   - **CC**(참조)
   - **Date**(날짜)

![추출 대상 이메일 내용 선택](https://jumpshare.com/share/iACr6EbxL0HvDgiw1HCf+/GIF+Recording+2026-07-03+at+18.26.17.gif)

### 5단계: 추가 컨텍스트로 추출 정확도 높이기

1. **Additional Context**(추가 컨텍스트)에 액션이 어떤 이메일을 받게 될지 설명하세요.
2. AI가 올바른 값을 찾는 데 도움이 되는 내용을 적으세요.

   **추가 컨텍스트 예시:** "Zillow나 Realtor.com 같은 플랫폼에서 오는 리드 문의 이메일입니다. 리드의 이름, 이메일, 전화번호, 예산, 관심 있는 부동산을 추출하세요. 전화번호는 일반 텍스트로 적혀 있을 수 있습니다."

   이메일 형식이 제각각이거나 보낸 곳마다 같은 값을 다른 이름으로 표시할 때 특히 유용해요.
3. **custom values**(커스텀 값)도 추가할 수 있어요.

![추가 컨텍스트 입력 화면](https://jumpshare.com/share/3xdy5hc8PdGqWpG3i4tY+/Screen+Shot+2026-07-03+at+18.28.53.png)

### 6단계: 추출할 데이터 정의하기

1. 시작하기 쉽도록 미리 만들어진 템플릿을 사용해도 돼요.

   - **Contact Info**(연락처 정보)
   - **Opportunity Info**(기회 정보)
   - **Order Info**(주문 정보)
   - **Appointment Info**(예약 정보)
2. 템플릿을 적용한 뒤에는 사용 목적에 맞게 필드를 수정하세요.
3. 필요에 따라 필드를 추가하거나 삭제하거나 이름을 바꾸세요.
4. 리드 알림 이메일의 필드 예시는 다음과 같아요.

   - 리드 이름
   - 연락처 이메일
   - 연락처 전화번호
   - 예산
5. 나중에 저장할 데이터와 맞는 필드 이름을 고르세요. 그러면 이후 연결 작업이 더 쉽고 정확해져요.
6. **Save Action**(액션 저장)을 클릭하세요.

![추출할 필드 정의 화면](https://jumpshare.com/share/FNflsiEp7iFzsPc5dqlz+/GIF+Recording+2026-07-03+at+19.43.41.gif)

### 7단계: 추출한 값을 저장하거나 쓰는 후속 액션 추가하기

{% hint style="warning" %}
AI Extract Data는 추출한 값을 스스로 영구 저장하지 않아요. 추출한 값은 이후 액션의 custom value picker를 통해 워크플로우 안에서만 쓸 수 있어요. AI Extract Data 뒤에 다른 액션을 추가하지 않으면 추출한 데이터는 연락처, 기회 등 어떤 기록에도 저장되지 않아요.
{% endhint %}

1. 다음 액션으로 자주 쓰는 것은 아래와 같아요.

   - [**Create Contact**](../Contact-Workflow-Actions/workflow-action-create-contact.md)(연락처 생성)
   - [**Update Contact Field**](../workflow-action-update-contact-field-date-type-field.md)(연락처 필드 업데이트)
   - [**Create Opportunity**](../Opportunity-Workflow-Actions/workflow-action-create-opportunity.md)(기회 생성)
   - **Create/Update Opportunity**(기회 생성/업데이트)
   - **Internal Notification**(내부 알림)
   - **Send Email/SMS**(이메일/SMS 보내기)
2. **Create Contact**나 **Update Contact Field**에서는 각 대상 필드를 custom value picker의 **AI Extract Data** 값 중 알맞은 것에 연결하세요.
3. 기회를 만들거나 업데이트하려면 예산, 서비스 유형, 작업 내용 같은 추출 값을 알맞은 기회 필드에 연결하세요.

![추출한 값을 후속 액션에 연결](https://jumpshare.com/share/7musNYUnP6MkBRxNXExA+/GIF+Recording+2026-07-03+at+19.47.11.gif)

### 8단계: 필요한 후속 액션 추가하기

1. 값을 저장한 뒤에는 다음과 같은 액션으로 워크플로우를 이어 갈 수 있어요.

   - 팀원에게 내부 알림 보내기
   - 이메일이나 SMS로 후속 연락하기
   - 후속 연락을 위해 리드 배정하기
   - 기회 생성 또는 업데이트하기
   - 업데이트된 연락처나 기회 데이터를 기준으로 다른 워크플로우 시작하기

![후속 액션 추가 화면](https://jumpshare.com/share/q6iyDxUZgLmo6UrO8Y8w+/Screen+Shot+2026-07-03+at+18.55.45.png)

## 사용 사례

### 부동산 리드 알림

부동산 팀은 매물 사이트나 추천 경로에서 리드 알림을 이메일로 자주 받아요. 이런 이메일에는 리드의 이름, 전화번호, 이메일 주소, 예산, 관심 매물 같은 중요한 정보가 있지만, 줄글 형태로 적혀 있는 경우가 많아요. AI Extract Data로 이메일을 파싱하면 중개인이 정보를 더 빨리 확인하고, 수동 입력을 기다리지 않고 바로 후속 연락을 시작할 수 있어요.

**사용 예시**

1. 부동산 팀이 외부 플랫폼에서 리드 알림 이메일을 받아요.
2. 이메일이 지정한 메일함에 도착하면 워크플로우가 시작돼요.
3. AI Extract Data가 이메일 본문에서 리드 정보를 파싱해요.
4. 후속 액션이 연락처나 기회를 만들어요.
5. 이어서 워크플로우가 내부 알림을 보내 담당자가 빠르게 연락할 수 있게 해요.

![부동산 리드 알림 워크플로우 예시](https://jumpshare.com/share/52ozGEjWlmC1td2RIQ6D+/Screen+Shot+2026-07-03+at+19.00.33.png)

## 자주 묻는 질문

### AI Extract Data가 추출한 값을 자동으로 저장하나요?
아니요. 추출한 값은 이후 워크플로우 액션에서 custom value picker를 통해서만 쓸 수 있어요. 값을 영구 저장하려면 Create Contact, Update Contact Field, Create Opportunity 같은 액션을 추가하세요.

### 이메일 파싱에는 어떤 트리거를 써야 하나요?
새 이메일이 메일함에 도착할 때 워크플로우를 시작하려면 **Inbound Email**을 쓰세요. 이메일 답장이 왔을 때 시작하려면 답장 채널을 **Email**로 설정한 **Customer Replied**를 쓰세요.

### Extract From 필드에서는 무엇을 선택해야 하나요?
대부분의 이메일 파싱 워크플로우에서는 **Body Plain Text**나 **Full Body Includes Reply Thread** 같은 인바운드 이메일 값을 쓰면 돼요. 현재 메시지만 파싱할지 더 긴 이메일 스레드까지 파싱할지에 따라 알맞은 항목이 달라요.

### 왜 Additional Context를 추가해야 하나요?
Additional Context는 AI가 어떤 이메일을 파싱하는지, 어떤 값이 중요한지 이해하도록 도와줘요. 이메일 형식이 제각각일 때 특히 추출 정확도를 높일 수 있어요.

### 파싱한 이메일 데이터로 기회를 만들 수 있나요?
네. 데이터를 추출한 뒤 관련 값으로 기회를 만들거나 업데이트할 수 있어요. 많은 워크플로우에서는 연락처를 먼저 만들거나 업데이트한 다음 기회를 만드는 구성이 가장 깔끔해요.

### AI Extract Data에서 꼭 템플릿을 써야 하나요?
아니요. 템플릿을 쓰면 더 빨리 시작할 수 있지만, 템플릿 필드를 수정하거나 추출 필드를 직접 만들어서 사용 목적에 맞게 구성해도 돼요.
