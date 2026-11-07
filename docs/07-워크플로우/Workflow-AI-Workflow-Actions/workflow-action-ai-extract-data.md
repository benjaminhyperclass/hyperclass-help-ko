---
원문: /support/solutions/articles/155000007992-workflow-action-ai-extract-data
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — AI Extract Data(AI 데이터 추출)

**AI Extract Data**(AI 데이터 추출) 액션으로 줄글 같은 비정형 텍스트에서 필요한 정보만 뽑아 워크플로우 변수로 만드는 방법을 안내해요. 설정 절차, 템플릿과 데이터 유형, 활용 예시, 자주 묻는 질문을 함께 다뤄요.

## AI Extract Data 액션이란?

**AI Extract Data**는 하이퍼클래스 워크플로우의 AI 액션이에요. 비정형 텍스트를 같은 워크플로우 뒤쪽에서 쓸 수 있는 구조화된 필드로 바꿔 줘요. SMS 메시지, 이메일 본문, 웹훅 페이로드, AI 출력처럼 텍스트 안에 중요한 정보가 묻혀 있을 때 쓰면 좋아요.

추출할 필드(이름, 이메일, 전화번호, 주문 ID 등)를 정해 두면 AI가 선택한 입력을 분석해 그 값을 워크플로우 변수로 돌려줘요. 이 변수는 이후 액션에서 커스텀 값 선택기로 불러올 수 있어요. 후속 안내, 분기, 레코드 업데이트 같은 작업에 바로 쓸 수 있어요. 자유롭게 쓴 글에서 정보를 직접 뽑아 정리하거나, 복잡한 조건 로직을 만들 필요가 없어요.

**예시:** 리드 소스에서 이메일이 오면 액션이 연락처 정보를 추출해요. 그 값으로 새 연락처와 기회를 만들 수 있어요.

{% hint style="warning" %}
이 액션은 프리미엄 액션이에요. 실행할 때마다 추가 요금이 발생해요. 프리미엄 워크플로우 액션의 사용량과 요금은 AI Product Pricing 문서를 참고하세요.
{% endhint %}

## AI Extract Data 액션의 장점

- 비정형 입력을 구조화된 출력으로: 이메일, SMS 메시지, 웹훅 페이로드, 폼 응답 텍스트, AI/GPT 출력, 이전 워크플로우 값에서 깔끔한 필드를 뽑아요.
- 외부 분석 도구가 필요 없어요: 직접 검토하거나, 코드를 짜거나, 외부 도구를 쓰는 대신 하이퍼클래스 워크플로우 안에서 추출을 끝낼 수 있어요.
- 유연한 데이터 구조: 필요한 필드만 직접 정의해요. 여러 데이터 유형(Text, Email, Phone, Number, Date)을 쓸 수 있어요.
- 정확도를 높이는 선택 입력: 배경 정보를 덧붙이면 AI가 입력이 무엇인지 이해하고 모호한 값도 더 잘 해석해요.
- 미리 만들어 둔 템플릿: 연락처 정보, 기회 정보, 주문 정보, 예약 정보처럼 자주 쓰는 추출 패턴을 템플릿으로 쓸 수 있어요.
- 이후 단계에서 쓰는 변수: 추출한 필드를 **Update Contact Field**(연락처 필드 업데이트), **If/Else**(조건 분기), 알림, 메시지, 기회, 아웃바운드 웹훅 같은 이후 액션에서 쓸 수 있어요.

## 액션 상세 정보

액션의 각 항목이 어떤 역할을 하는지 알면 설정을 더 정확하게 하고 추출 결과의 품질도 높일 수 있어요.

| 항목 | 설명 |
| --- | --- |
| **Action Name**(액션 이름) | 액션에 붙일 이름이에요. 기본값은 “AI extract data”예요. |
| **Extract From** \*(추출 대상) | 데이터를 뽑아낼 비정형 텍스트 입력이에요. 이메일 본문, 웹훅 페이로드, SMS 내용, 이전 액션의 출력 같은 커스텀 값을 선택해요. 필수 항목이에요. |
| **Additional Context**(추가 컨텍스트) | AI가 더 정확하게 추출하도록 돕는 선택 입력이에요. 예: “Zillow 리드 알림 이메일이에요. 전화번호가 여러 형식으로 적혀 있을 수 있어요.” |
| **Templates**(템플릿) | 자주 쓰는 경우를 위해 미리 만들어 둔 추출 템플릿이에요. **Contact info**(연락처 정보), **Opportunity info**(기회 정보), **Order info**(주문 정보), **Appointment info**(예약 정보)가 있어요. 템플릿을 고르면 데이터 필드가 자동으로 채워져요. 적용한 뒤에 필드를 수정, 추가, 삭제할 수 있어요. |
| **Data Fields**(데이터 필드) | 입력에서 추출할 구조화된 필드예요. 필드마다 **Name**(이름, 변수 키), **Type**(유형: Text, Email, Phone, Number, Date), AI에게 힌트를 주는 선택 항목 **Description**(설명)이 있어요. |

## 템플릿

템플릿은 자주 쓰는 추출 필드를 미리 채워 줘서 설정을 빠르게 시작하게 도와줘요. 연락처, 영업, 주문, 일정처럼 흔한 정보를 뽑을 때 특히 편해요.

템플릿을 그대로 써도 되고, 고른 뒤에 필드를 수정해도 돼요. 템플릿 없이 처음부터 직접 필드를 구성할 수도 있어요.

사용할 수 있는 템플릿 예시는 다음과 같아요.

- **Contact info**(연락처 정보): `full_name`(Text), `email`(Email), `phone`(Phone) 필드를 미리 채워 줘요. 이름, 이메일 주소, 전화번호 같은 기본 연락처 정보를 뽑는 용도예요.
- **Opportunity info**(기회 정보): `company_name`, `job_title`, `budget`, `timeline` 필드를 미리 채워 줘요. 리드나 기회와 관련된 메시지에서 흔한 영업 정보를 뽑는 용도예요.
- **Order info**(주문 정보): `order_id`(Text), `items`(Text), `total_amount`(Number), `order_date`(Date) 필드를 미리 채워 줘요. 주문 ID, 주문한 상품이나 서비스, 총액, 주문 날짜 같은 주문·거래 정보를 뽑는 용도예요.
- **Appointment info**(예약 정보): 예약 날짜, 시간, 장소, 예약 유형 같은 일정 정보 필드를 미리 채워 줘요.

![AI Extract Data 템플릿 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075088724/original/oCguvLx66edBje48-VXLPnkBV8gPMIggBA.png?1783014199)

## 추출한 데이터를 이후 액션에서 쓰기

**AI Extract Data** 액션이 실행되면 추출한 필드가 이후 워크플로우 액션에서 커스텀 값으로 나타나요. 그래서 **Create/Update Contact**, 기회 관련 액션, **If/Else** 분기, 알림 같은 이후 단계에 추출한 데이터를 바로 넣을 수 있어요.

예를 들어 `full_name`이라는 이름과 Text 유형으로 필드를 정의했다면, 이후 **Update Contact** 액션에서 연락처 이름으로 쓸 수 있어요. **Send Email** 액션에서 메시지를 개인화하는 데도 쓸 수 있어요.

이후 액션에서 추출한 값을 불러오는 방법은 다음과 같아요.

1. 추출한 데이터를 쓰려는 이후 액션을 열고, 값을 채울 필드를 클릭하세요. 커스텀 값 선택기를 열고 **AI extract data**를 선택하세요.

   ![커스텀 값 선택기에서 AI extract data 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075090678/original/KmxNeGzMBx1u1Xh0cIHTZz_yZLTGERwTPw.jpeg?1783016102)
2. 참조할 **AI Extract Data** 액션을 고르세요. 워크플로우에서 그 액션에 붙인 이름으로 표시돼요. 그다음 넣을 필드를 선택하세요. 선택할 수 있는 항목은 해당 **AI Extract Data** 액션에서 정의한 필드예요.

   ![추출한 필드를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075090679/original/c_8oDtSRg-mZKiJeEu3rGJzJjlV3ZS9ooA.jpeg?1783016110)

## AI Extract Data 액션 설정하기

아래 순서대로 설정하면 추출한 필드를 이후 워크플로우 액션에서 쓸 수 있어요.

### 1단계. 액션 추가

워크플로우에서 **Plus (+)** 아이콘을 클릭해 새 액션을 추가해요. **AI extract data** 액션을 검색해서 선택하세요.

![워크플로우에서 AI extract data 액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075088957/original/R8zq0ylIkwsXI_GIKTBUv6e3YSYVGPQUPA.png?1783014538)

### 2단계. 입력 소스 설정

**Extract From** 필드에서 커스텀 값 선택기로 분석할 입력을 선택하세요.

앞선 워크플로우 액션이나 트리거에서 나온 텍스트 값이면 무엇이든 선택할 수 있어요. 이메일 본문, 웹훅 페이로드 필드, SMS 메시지, 이전 AI 액션의 출력 등이 해당돼요.

![Extract From 필드에서 입력 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075089145/original/b8XuQWZg28uSU50YUDtJt1IDfKA_6tib5Q.png?1783014678)

### 3단계. 컨텍스트 추가(선택)

**Additional Context** 필드에 AI가 더 정확하게 추출하는 데 도움이 될 정보를 입력하세요. 이 필드에는 커스텀 값도 쓸 수 있어요.

예를 들어 원본이 어떤 형식인지 적어 줄 수 있어요. “새 리드 알림 이메일이에요. 전화번호가 여러 형식으로 적혀 있을 수 있어요.”처럼요.

![Additional Context 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075089316/original/pVJZJ0FRkDOEwJcW4vU5Ip-uQw0_mX_cDw.png?1783014860)

### 4단계. 데이터 필드 정의

**Data** 섹션에서 AI가 추출할 필드를 정해요. 방법은 두 가지예요.

**방법 A – 템플릿 사용**

**Contact info**, **Opportunity info**, **Order info**, **Appointment info** 같은 템플릿 중 하나를 클릭하세요. 자주 쓰는 필드가 자동으로 채워져요. 이후 필요에 따라 필드를 수정, 추가, 삭제할 수 있어요.

**방법 B – 필드 직접 정의**

**+ Add data**(데이터 추가)를 클릭해 필드를 하나씩 직접 만드세요. 필드마다 다음 항목을 입력해요.

- **Name**(이름): 이 필드의 변수 키예요. `full_name`, `order_id`, `total_amount`처럼 써요. 이후 액션에서 이 이름이 변수 이름이 돼요.
- **Type**(유형): Text(텍스트), Email(이메일), Phone(전화번호), Number(숫자), Date(날짜) 같은 데이터 유형이에요. AI가 추출한 값을 알맞게 인식하고 형식을 맞추는 데 도움이 돼요.
- **Description**(설명, 선택): AI에게 무엇을 찾아야 하는지 알려 주는 힌트예요. 예: “지역번호가 포함된 전화번호. 예: +1 (555) 234-5678” 설명을 적어 두면 추출 정확도가 높아질 수 있어요.

![Data 섹션에서 필드 정의](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075089527/original/eyaw9OaqB7gN1r3GFjFDvvifcTwYkA6ZKQ.png?1783015032)

### 5단계. 액션 저장

**Save action**(작업 저장)을 클릭해 설정을 저장하세요. 추출한 데이터 필드가 워크플로우의 이후 모든 액션에서 변수로 나타나요.

![Save action 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075089646/original/v8tkRn_dvFvcDoT-b0afpfqTUqPkApgYGg.png?1783015156)

### 6단계. 이후 액션 추가

추출한 값을 쓸 이후 액션을 추가하세요. 연락처를 만들거나 업데이트하고, 기회를 만들고, **If/Else**로 워크플로우를 분기하고, 내부 알림을 보내는 식으로 쓸 수 있어요. 추출한 변수로 다른 액션의 입력을 채울 수도 있어요.

![추출한 값을 쓰는 이후 액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075089951/original/50kLHMgVp-fKr6-zPA4GINqR7RCWcl2XNA.png?1783015520)

## 활용 예시

**AI Extract Data**는 중요한 정보가 일반 텍스트로만 들어 있어서, 워크플로우가 처리하기 전에 구조화된 필드로 바꿔야 할 때 유용해요. 아래는 이 액션을 활용하는 방법 중 일부예요.

### 리드 알림 이메일 분석하기

**시나리오:** 외부 플랫폼(예: Zillow, Realtor.com)에서 리드 알림 이메일이 받은편지함으로 들어와요. 이메일마다 리드의 이름, 전화번호, 관심 매물이 들어 있지만 비정형 텍스트예요. 이 정보를 자동으로 추출해서 연락처 레코드에 저장하려고 해요.

**설정:**

- 트리거: **Inbound Email**(인바운드 이메일)
- 액션 1: **AI Extract Data**
  - **Extract From**: 이메일 본문
  - **Additional Context**: “Zillow 리드 알림 이메일이에요. 전화번호가 여러 형식으로 적혀 있을 수 있어요.”
  - 템플릿: **Contact info**
- 액션 2: **Update Contact**
  - 추출한 `full_name`, `email`, `phone`을 연락처 필드에 매핑해요.

![리드 알림 이메일 분석 워크플로우 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075091659/original/Pu_Ykssik9gKpPRu8zz1YZqN7qLGfF-NBQ.png?1783017060)

### 웹훅 페이로드에서 주문 데이터 추출하기

**시나리오:** 외부 시스템이 웹훅으로 주문 확인 데이터를 보내는데, 페이로드가 구조화된 JSON이 아니라 일반 텍스트 덩어리예요. 주문 ID, 상품, 총액을 추출해서 기회를 만들거나 커스텀 필드를 업데이트하려고 해요.

**설정:**

- 트리거: **Inbound Webhook**(인바운드 웹훅)
- 액션 1: **AI Extract Data**
  - **Extract From**: 웹훅 본문
  - 템플릿: **Order info**
- 액션 2: **Create Opportunity**(기회 만들기)
  - 추출한 `order_id`를 이름으로, `total_amount`를 금액으로 써요.

## 자주 묻는 질문

### 어떤 입력에서 데이터를 추출할 수 있나요?
워크플로우에서 쓸 수 있는 텍스트 기반 입력이면 모두 가능해요. 이메일 본문, 웹훅 페이로드, SMS 메시지, GPT/AI 출력, 폼 응답 텍스트, 이전 액션의 커스텀 값 등이 해당돼요.

### 꼭 템플릿을 써야 하나요, 필드를 직접 정의해도 되나요?
템플릿은 선택 사항이에요. 템플릿을 시작점으로 쓰고 수정해도 되고, 템플릿 없이 **+ Add data** 버튼으로 필드를 처음부터 직접 정의해도 돼요.

### 어떤 데이터 유형을 쓸 수 있나요?
Text(일반 문자열), Email(이메일 주소), Phone(전화번호), Number(숫자 값), Date(날짜 값) 다섯 가지를 쓸 수 있어요. 알맞은 유형을 고르면 AI가 추출한 값을 더 정확하게 인식하고 형식을 맞춰요.

### Description 필드는 어떤 역할을 하나요?
**Description**은 AI에게 무엇을 찾아야 하는지 알려 주는 선택 힌트예요. 예를 들어 “지역번호가 포함된 전화번호. 예: +1 (555) 234-5678”이라고 적어 두면 AI가 전화번호를 정확하게 찾고 형식도 맞춰요. 설명이 구체적일수록 추출 결과가 더 정확해요.

### 추출한 데이터를 다음 단계에서 쓰려면 어떻게 하나요?
추출한 필드는 이후 모든 액션의 커스텀 값 선택기에서 변수로 나타나요. 예를 들어 `full_name`이라는 필드를 정의했다면 **Update Contact**, **Send Email** 같은 이후 액션 어디서든 불러올 수 있어요.

### AI가 입력에서 필드를 찾지 못하면 어떻게 되나요?
정의한 필드와 맞는 값을 AI가 찾지 못하면 그 필드의 변수는 비어 있어요. 중요한 액션에서 쓰기 전에 **If/Else** 분기를 쓰거나 값이 비었는지 확인하도록 워크플로우를 구성해야 해요.

### Additional Context 필드를 쓰면 결과가 좋아지나요?
네. “새 리드 알림 이메일이에요”나 “페이로드에 주문 데이터가 들어 있어요”처럼 입력 형식을 알려 주면 AI가 구조를 이해하고 더 정확하게 추출해요. 선택 사항이지만 형식이 일정하지 않거나 복잡한 입력에는 입력해 두기를 권해요.

### 이 액션은 프리미엄 액션인가요?
네. **AI Extract Data** 액션은 실행할 때마다 추가 요금이 발생해요. 액션을 설정할 때 액션 패널 맨 위에 프리미엄 배지가 보여요.
