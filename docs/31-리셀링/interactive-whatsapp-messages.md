---
원문: /support/solutions/articles/155000006082-interactive-whatsapp-messages
번역일: 2026-11-06
카테고리: 31-리셀링
---

# WhatsApp 인터랙티브 메시지 보내기

워크플로우에서 보내는 WhatsApp 메시지에 버튼, 목록, 위치, 연락처 카드를 넣을 수 있어요. 이 문서에서는 인터랙티브 메시지가 무엇인지, 어떤 유형을 보낼 수 있는지, 워크플로우에서 어떻게 설정하는지 설명해요.

## WhatsApp 인터랙티브 메시지란?

하이퍼클래스는 **자동화**(Automation) 안에서 WhatsApp 인터랙티브 메시지를 바로 보낼 수 있어요. **WhatsApp Interactive Messages**(WhatsApp 인터랙티브 메시지) 액션을 쓰면 고객에게 눌러서 반응하는 메시지를 WhatsApp으로 보낼 수 있어요. 보낼 수 있는 유형은 다음과 같아요.

- 인터랙티브 답장 버튼: 사용자가 누를 수 있는 빠른 답장 버튼을 최대 3개까지 넣어요.
- 위치 메시지: 위도와 경도로 지도 위치를 보내요.
- 연락처 메시지: 이름, 전화번호, 주소, 이메일이 담긴 연락처 카드를 보내요.
- 목록 메시지: 여러 섹션과 항목으로 구성된 메뉴를 보여 줘요.

## 인터랙티브 메시지의 장점

워크플로우에서 인터랙티브 메시지를 쓰면 이런 점이 좋아요.

- 답장률 상승: 입력할 필요 없이 한 번 누르면 답할 수 있어서 연락처가 더 빨리 응답해요.
- 더 깔끔한 CRM 데이터: 선택지가 정해져 있어 오타나 불일치가 줄고, 리포트가 정확하게 유지돼요.
- 메시지 비용 절감: 고객 서비스 창이 열려 있는지 확인하고 보내면 불필요한 지출을 줄일 수 있어요.
- 전환 증가: 예약, 결제 같은 행동으로 바로 이어지는 콜투액션 덕분에 연락처가 덜 번거롭게 움직여요.
- 실수와 오해 감소: 미리 정해 둔 선택지 덕분에 오타와 모호함이 줄어 대화가 정확하게 이어져요.

## 사전 준비: 고객 서비스 창

인터랙티브 WhatsApp 메시지를 보내기 전에 **WhatsApp 24시간 고객 서비스 창**(Customer Service Window)이 열려 있어야 해요.

WhatsApp 사용자가 비즈니스에 메시지를 보내면 24시간 고객 서비스 창이 시작돼요. 이 창이 열려 있는 동안에는 다음과 같아요.

- 인터랙티브 WhatsApp 메시지를 비용 없이 제한 없이 보낼 수 있어요.
- 자유 형식 메시지에도 제한이 없어요.

[WhatsApp 고객 서비스 창 확인에 대해 더 알아보기](whatsapp-customer-service-window-check.md)

### 고객 서비스 창을 확인하거나 여는 방법

자동화에서는 두 가지 방법을 쓸 수 있어요.

**방법 1: Customer Replied 트리거 사용하기 (WhatsApp)**

**Customer Replied**(고객 답장) 트리거를 WhatsApp 답장 조건으로 설정하면, 고객이 WhatsApp 메시지를 보냈을 때만 워크플로우가 시작돼요. 고객이 메시지를 보내면 24시간 창이 자동으로 열려요. 트리거는 다음과 같이 설정해요.

- **워크플로우 트리거:** Customer Replied
- **필터:** **Reply Channel**(답장 채널)을 WhatsApp으로 설정

**방법 2: WhatsApp: Customer Service Window Check 액션 사용하기**

![고객 서비스 창 확인 액션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052286891/original/3p45ZiR6nSp7HO_6m0HuAiT8noU3aMYSXw.png?1756120926)

인터랙티브 메시지를 보내기 전에 **WhatsApp: Customer Service Window Check**(WhatsApp: 고객 서비스 창 확인) 액션으로 24시간 창이 열려 있는지 확인할 수 있어요. 액션은 다음과 같이 설정해요.

- **액션 이름:** WhatsApp: Customer Service Window Check
- **Conversation Phone Number**(대화 전화번호): 메시지를 보낼 WhatsApp 번호를 선택해요.
- 분기를 설정해요.
  - **Branch Name**(분기 이름): **Open** – 조건: 고객 서비스 창이 열려 있음
  - **Branch Name**(분기 이름): **Closed** – 조건: 고객 서비스 창이 닫혀 있음

{% hint style="warning" %}
창이 닫혀 있으면 마케팅 또는 유틸리티 템플릿 메시지를 보내서 대화를 다시 열어야 해요.
{% endhint %}

![고객 서비스 창 확인 분기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052303654/original/FJ1UwAUkxDRrkuBv4yk2GcPknCNGmD3fiA.png?1756128686)

## WhatsApp Interactive Messages 액션 추가하기

고객 서비스 창이 열려 있는 것을 확인했다면 인터랙티브 메시지 액션을 추가해요.

1. **워크플로우**를 열어요.
2. **Add Action (+)**(액션 추가)을 클릭해요.
3. **WhatsApp Interactive Messages**를 선택해요.
4. 필요하면 **액션 이름**을 알아보기 쉽게 바꿔요. 기본값은 **WhatsApp Interactive Messages**예요.
5. **Interactive Message Configuration**(인터랙티브 메시지 설정)에서 **발신 전화번호**를 선택한 뒤 **Interactive Message Type**(인터랙티브 메시지 유형)을 선택해요.

![인터랙티브 메시지 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053696925/original/ZNv9FFIduh2wqWMn4lQszCuhrux-KHQecg.png?1757707568)

## 인터랙티브 답장 버튼 (메시지 유형)

인터랙티브 답장 버튼을 쓰면 미리 정한 답변을 최대 3개까지 보여 줄 수 있어요. 사용자가 버튼을 누르면 그 선택에 따라 워크플로우에서 분기, 태그, 후속 액션이 실행돼요. 설정 방법은 다음과 같아요.

1. **Interactive Message Type**을 **Quick Reply Buttons**(빠른 답장 버튼)로 설정해요.

   ![빠른 답장 버튼 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053696931/original/pGFXib0bZdiFXP1hYZhsHzOzvr-SF2q1sQ.png?1757707607)

2. 빠른 답장 버튼 메시지에 필요한 항목을 입력해요.
   - **Input for Button Message**(버튼 메시지 입력) – 메인 메시지 텍스트예요.
   - **Button Count**(버튼 수) – 최대 3개까지 선택해요.
   - **Header Type**(헤더 유형) – Text, Image, Video, Document 중에서 선택해요.
   - **Header Text or Media URL**(헤더 텍스트 또는 미디어 URL) – 텍스트나 미디어 링크를 입력해요.
   - **본문** – 필수 항목이에요. 메시지의 주요 내용을 입력해요.
   - **푸터** – 선택 항목이에요. 짧은 보조 문구를 입력해요.
   - **Timeout Unit**(시간 초과 단위) – Minutes, Hours, Days 중에서 선택해요.
   - **Timeout Value**(시간 초과 값) – 단위의 숫자를 입력해요.
   - **Button Titles**(버튼 제목) – 각 버튼에 표시할 텍스트를 입력해요.

3. 모든 항목을 입력했으면 워크플로우를 저장하고 테스트해 보세요.

{% hint style="info" %}
본문은 짧게 쓰세요. 그러면 스크롤하지 않아도 버튼이 보여요.
{% endhint %}

![빠른 답장 버튼 입력 항목](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053697047/original/Ey4RWC5g-LFOdffnA4lZb_P04N7k3FdCKQ.png?1757707904)

## 위치 (메시지 유형)

위치 유형을 쓰면 지도 미리보기를 누를 수 있는 위치 카드를 고객에게 보낼 수 있어요. 설정 방법은 다음과 같아요.

1. **Interactive Message Type**을 **Location**(위치)으로 설정해요.

   ![위치 메시지 유형](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053697233/original/H_yqPhMhzOVV9YOX7kfa3L3qds3MVZoz6w.png?1757708451)

2. **위치 세부정보**에서 필요한 항목을 입력해요.
   - **위치 이름** – 예: `Facebook HQ`
   - **주소** – 예: `1 Hacker Way, Menlo Park, CA 94025`
   - **위도** – 예: `37.758056`
   - **경도** – 예: `-122.425332`

3. 저장한 뒤 테스트해서 WhatsApp에서 위치가 제대로 표시되는지 확인해요.

{% hint style="info" %}
좌표가 비즈니스 주소와 일치하는지 꼭 다시 확인하세요. 그래야 혼선을 막을 수 있어요.
{% endhint %}

![위치 세부정보 입력 항목](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053697255/original/6TbqEiRjbLl2hhAx_xXD_Pe_BCQxdp_XVQ.png?1757708534)

## 연락처 (메시지 유형)

연락처 유형을 쓰면 고객이 자기 기기에 저장할 수 있는 연락처 카드를 보낼 수 있어요. 설정 방법은 다음과 같아요.

1. **Interactive Message Type**을 **Contact**(연락처)로 설정해요.

   ![연락처 메시지 유형](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053697343/original/1wBRIHgioXCvGOSGKnQOs5evGBjFrpuXXQ.png?1757708813)

2. 필요한 항목을 입력해요.
   - **연락처 이름** – **First Name**(이름)과 **Last Name**(성)은 모두 필수예요. 예: `John`, `Jones`
   - **전화번호** – **전화번호**(필수, 예: `+16505551234`)와 **Phone Type**(전화번호 유형: Work, Mobile, Home)을 입력해요.
   - **이메일** – **이메일 주소**(선택, 예: `john.jones@company.com`)와 **Email Type**(이메일 유형: Work, Home)을 입력해요.

3. 워크플로우를 저장하고 테스트해서 WhatsApp에서 연락처 카드가 제대로 보이는지 확인해요.

![연락처 카드 입력 항목](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053697351/original/A10hwB70kfbG-ICVzcy6TfsEByUBXXTPdQ.png?1757708885)

## 목록 (메시지 유형)

목록 메시지로는 여러 섹션과 항목이 있는 메뉴를 보낼 수 있어서, 고객이 선택지를 한눈에 보고 고를 수 있어요. 선택한 항목마다 워크플로우에서 서로 다른 분기를 실행할 수 있어요. 설정 방법은 다음과 같아요.

1. **Interactive Message Type**을 **List**(목록)로 설정해요.

   ![목록 메시지 유형](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053697461/original/jAhje1lcLkV524FVO-gkPHzgAL8CZdyphA.png?1757709100)

2. 필요한 항목을 입력해요.
   - **Input for Button Message**(버튼 메시지 입력) – 메뉴의 메인 안내 문구예요.
   - **Section Count**(섹션 수) – 만들 섹션 수를 선택해요. 예: 3
   - **헤더 텍스트** – 선택 항목이에요. 짧은 헤더 제목을 입력해요.
   - **본문** – 메시지의 주요 내용이에요.
   - **푸터** – 선택 항목이에요. 보조 문구를 입력해요.
   - **List Button Text**(목록 버튼 텍스트) – 목록을 여는 버튼에 표시할 텍스트예요. 예: "옵션 보기"
   - **Timeout Unit & Value**(시간 초과 단위 및 값) – 시간 초과를 5분에서 2일 사이로 정해요.

3. 섹션마다 다음을 설정해요.
   - **Section Title**(섹션 제목) – 예: "요금제", "서비스"
   - **Row Count**(항목 수) – 섹션에 넣을 항목 수예요.
   - **Row Title**(항목 제목) – 옵션 이름이에요. 예: "프리미엄 요금제"
   - **Row Description**(항목 설명) – 옵션에 대한 선택적 설명이에요.

4. 항목마다 분기를 추가해요.
   - 예: `Section1 Row1`, `Section2 Row1` 등
   - **Not Delivered**(전송 실패)와 **시간 초과** 분기도 추가로 쓸 수 있어요.

5. 저장한 뒤 테스트해서 메뉴가 표시되는지, 항목을 선택했을 때 알맞은 분기가 실행되는지 확인해요.

{% hint style="info" %}
관련 있는 옵션은 섹션 제목으로 묶어 두세요(예: "요금제", "애드온"). 그러면 더 알아보기 쉬워요.
{% endhint %}

![목록 메시지 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053697482/original/AVIAAbGp3xNshGnnZ85VE7WQnp2U6H0GKw.png?1757709159)

## 인터랙티브 콜투액션(웹사이트 방문) URL 버튼 메시지

WhatsApp 사용자는 일반 텍스트 메시지에 있는 길고 복잡한 URL을 누르기 망설일 수 있어요. **인터랙티브 CTA URL 버튼 메시지**는 URL을 깔끔한 버튼으로 바꿔 줘서, 더 매끄럽고 믿을 수 있는 경험을 줘요. 버튼을 누르면 사용자의 기본 브라우저에서 지정한 URL이 열려요. 설정 방법은 다음과 같아요.

1. **Interactive Message Type**을 **Visit Website Button**(웹사이트 방문 버튼)으로 설정해요.
2. 필요한 항목을 입력해요.
   - **Header Type**(헤더 유형) – Text, Image, Video, Document 중에서 선택해요.
   - **Header Text or Media URL**(헤더 텍스트 또는 미디어 URL) – 헤더 텍스트나 미디어 링크를 입력해요.
   - **본문** – 메시지의 주요 내용을 입력해요(최대 1,024자).
   - **푸터** – 선택 항목이에요. 짧은 보조 문구를 입력해요(최대 60자).
   - **URL** – 이동할 URL을 입력해요.
   - **버튼 텍스트** – 버튼에 표시할 텍스트를 입력해요(최대 20자).
   - **Timeout Unit & Value**(시간 초과 단위 및 값) – Minutes, Hours, Days 중에서 선택해요(허용 범위: 5분~2일).
3. 저장한 뒤 샘플 연락처로 테스트해서 버튼이 제대로 표시되는지, 링크가 브라우저에서 열리는지 확인해요.

![CTA URL 버튼 예시 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057874072/original/6brNPbS8T0q-ZhBmH6H4YCpfCfxRY4Tqdw.png?1762550971) ![CTA URL 버튼 예시 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057874080/original/ueMfiC4y8-l88Wg7aTBVRU2rGIjATSDlEA.png?1762550994)

### CRM 변수를 넣은 URL 예시

**CRM 필드**(연락처 필드, 커스텀 값 포함)를 URL에 넣으면 연락처마다 다른 URL을 만들 수 있어요.

`https://www.google.com/?name={{contact.name}}&calendar={{custom_values.agent_calendar}}`

이 예시에서는 다음과 같이 값이 들어가요.
`{{contact.name}}`에는 연락처의 이름이 들어가요.`{{custom_values.agent_calendar}}`에는 담당 에이전트의 캘린더 링크가 들어가요.

이렇게 하면 개인별 예약 링크, 결제 URL, 캠페인 랜딩 페이지를 만들 수 있어요.

### 워크플로우 버튼 설정 예시

- **헤더 텍스트:** 워크숍 안내
- **본문:** 아래 버튼을 눌러 자리를 예약하세요.
- **푸터:** 자리가 한정되어 있어요.
- **URL:** `https://mybusiness.com/booking?name={{contact.name}}`
- **버튼 텍스트:** 지금 예약
- **Timeout Value:** 30분

**결과:** 고객마다 자신의 예약 페이지로 연결되는 버튼이 보여요.

## 분기와 워크플로우 동작

버튼의 전송 여부와 고객의 반응에 따라 워크플로우를 나눌 수 있어요.

- **Link Opened**(링크 열림) – 링크가 정상적으로 열렸을 때 실행돼요.
- **Not Delivered**(전송 실패) – 메시지 전송에 실패했을 때 실행돼요.
- **시간 초과** – 고객이 반응하지 않은 채 메시지가 만료됐을 때 실행돼요.

이렇게 하면 고객이 링크를 눌렀는지에 따라 후속 액션을 자동으로 이어 갈 수 있어요.

![워크플로우 분기 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057873995/original/2mqJTecLKybuHkZCCqGIFC0vY3t1Q_LIfA.png?1762550749)

## 활용 팁

- 클릭률을 높이려면 신뢰할 수 있거나 브랜드가 드러나는 URL을 쓰세요.
- CRM 변수를 쓰면 연락처가 덜 번거로워요(예: 폼 미리 채우기, 캘린더 자동 배정).
- **WhatsApp: Customer Service Window Check** 액션과 함께 쓰면 고객 서비스 창이 열려 있는 동안 메시지를 보낼 수 있어요.

## 자주 묻는 질문

### 인터랙티브 WhatsApp 메시지는 추가 비용이 드나요?
아니요. 24시간 고객 서비스 창이 열려 있는 동안에는 인터랙티브 WhatsApp 메시지가 무료예요. Meta는 서비스 대화에 요금을 부과하지 않아요.

### 24시간 창이 지난 뒤에 인터랙티브 메시지를 보내면 어떻게 되나요?
고객 서비스 창이 닫혀 있으면 먼저 마케팅 또는 유틸리티 템플릿 메시지를 보내서 창을 다시 열어야 해요.

### 빠른 답장 메시지에 버튼을 몇 개까지 넣을 수 있나요?
답장 버튼은 최대 3개까지 넣을 수 있어요. 버튼마다 텍스트가 달라야 하고, 글자 수는 20자까지예요.

### 빠른 답장 메시지에 헤더와 푸터를 둘 다 쓸 수 있나요?
네. 헤더에는 Text, Image, Video, Document를 쓸 수 있어요. 푸터에는 짧은 텍스트만 쓸 수 있고, 최대 60자예요.

### 위치 메시지에 좌표를 잘못 입력하면 어떻게 되나요?
위치 카드의 핀이 엉뚱한 곳에 찍힐 수 있어요. 저장하기 전에 위도와 경도를 꼭 확인하세요.

### 연락처 메시지 하나에 여러 연락처를 보낼 수 있나요?
아니요. 연락처 메시지 하나에는 연락처 카드를 하나만 넣을 수 있어요. 여러 개를 보내려면 액션을 따로 만드세요.

### 목록 메시지에는 섹션과 항목을 몇 개까지 추가할 수 있나요?
섹션을 여러 개 만들 수 있고, 섹션마다 항목을 하나 이상 넣을 수 있어요. 항목마다 제목은 반드시 입력해야 하고 설명은 선택이에요. 시간 초과는 5분에서 2일 사이로 설정해야 해요.

### 콜투액션(웹사이트 방문) 버튼 메시지의 URL을 연락처마다 다르게 만들 수 있나요?
네. URL 안에 연락처 필드와 커스텀 값 같은 CRM 변수를 쓸 수 있어요. 예시는 다음과 같아요.

`https://www.google.com/?name={{contact.name}}&calendar={{custom_values.agent_calendar}}`

이렇게 하면 개인별 예약 링크, 결제 페이지, 캠페인 랜딩 페이지를 만들 수 있어요.

### 고객이 웹사이트 방문 버튼을 누르면 어떻게 되나요?
링크가 고객의 기본 브라우저에서 열려요. 워크플로우에서는 결과에 따라 다음과 같이 분기할 수 있어요.

- Link Opened
- Not Delivered
- 시간 초과

### 인터랙티브 메시지의 시간 초과 규칙은 어떻게 되나요?
시간 초과는 인터랙티브 메시지(버튼, 목록, 웹사이트 방문 버튼)가 유지되는 시간을 정해요.

- 최소: 5분
- 최대: 2일

시간이 지나면 인터랙티브 요소는 더 이상 쓸 수 없게 돼요. 이때 워크플로우의 시간 초과 분기를 사용하면 후속 조치를 이어 갈 수 있어요.

### 한 메시지에 인터랙티브 유형을 여러 개 같이 보낼 수 있나요(예: 목록과 웹사이트 방문 버튼)?
아니요. WhatsApp은 메시지 하나에 인터랙티브 유형을 하나만 허용해요. 대신 워크플로우에서 액션을 여러 개 이어서 차례로 보낼 수는 있어요.
