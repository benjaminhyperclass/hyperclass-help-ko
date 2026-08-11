---
원문: https://help.gohighlevel.com/support/solutions/articles/155000007992-workflow-action-ai-extract-data
번역일: 2026-08-11
카테고리: 07-워크플로우 > Workflow AI Workflow Actions
---

# 워크플로우 액션 - AI 데이터 추출(AI Extract Data)

이 아티클에서는 워크플로우에서 AI 데이터 추출(AI Extract Data) 액션을 사용해 비정형 텍스트에서 구조화된 데이터를 추출하는 방법을 설명해요. 단계별 설정 방법, 사용 가능한 템플릿과 데이터 유형, 실제 활용 사례, 그리고 자주 묻는 질문에 대한 답변을 확인할 수 있어요.

---

**목차**

- [AI 데이터 추출 워크플로우 액션이란?](#What-is-the-AI-Extract-Data-Workflow-Action?)[AI 데이터 추출 워크플로우 액션의 주요 장점](#Key-Benefits-of-the-AI-Extract-Data-Workflow-Action)
- [액션 세부 정보](#Action-Details)
- [템플릿](#Templates)
- [추출된 데이터를 이후 액션에서 사용하기](#Using-Extracted-Data-in-Downstream-Actions)
- [AI 데이터 추출 워크플로우 액션 설정 방법](#How-to-Configure-the-AI-Extract-Data-Workflow-Action)
- [일반적인 활용 사례](#Common-Use-Cases)
- [자주 묻는 질문](#Frequently-Asked-Questions)

---

# AI 데이터 추출 워크플로우 액션이란?

AI 데이터 추출(AI Extract Data) 워크플로우 액션은 하이퍼클래스의 Workflow AI 액션 중 하나로, 비정형 텍스트를 이후 같은 워크플로우 안에서 사용할 수 있는 구조화된 필드로 변환해줘요. SMS 메시지, 이메일 본문, 웹훅(Webhook) 페이로드, AI 출력값, 또는 기타 텍스트 형태의 데이터 안에 중요한 정보가 섞여 있는 상황을 위해 만들어졌어요.

이름, 이메일, 전화번호, 주문 ID처럼 추출하고 싶은 필드를 정의하면, AI가 선택된 입력값을 분석해서 해당 값들을 구조화된 워크플로우 변수로 반환해요. 이렇게 추출된 변수는 커스텀 값(Custom Value) 선택 도구를 통해 이후 액션에서 바로 사용할 수 있어서, 후속 조치, 라우팅, 레코드 업데이트 등의 워크플로우 결정을 더 쉽게 자동화할 수 있어요. 자유 형식의 텍스트에서 정보를 추출하기 위해 직접 비정형 데이터를 파싱하거나 복잡한 조건 로직을 만들 필요가 없어져요.

**예시:** 리드 소스로부터 이메일이 수신되면, 이 액션이 연락처 정보를 추출하고, 추출된 값을 사용해 새 연락처(Contacts)와 기회(Opportunity)를 생성할 수 있어요.

**중요:** 이 액션은 프리미엄 액션이에요. 이 액션을 사용하면 실행 건당 추가 요금이 발생해요. 프리미엄 워크플로우 액션 사용 및 결제(Billing)에 대한 자세한 내용은 [AI 제품 가격 정책](https://help.gohighlevel.com/support/solutions/articles/155000006652-ai-product-pricing#Workflow-AI)을 참고해 주세요.

---

## AI 데이터 추출 워크플로우 액션의 주요 장점

- **비정형 입력값을 구조화된 출력값으로:** 이메일, SMS 메시지, 웹훅 페이로드, 폼 응답 텍스트, AI/GPT 출력값, 이전 워크플로우 값에서 정제된 필드를 추출할 수 있어요.

- **외부 파싱 도구 불필요:** 수동 검토, 커스텀 코드, 제3자 도구에 의존하는 대신 하이퍼클래스 워크플로우 안에서 추출 작업을 처리할 수 있어요.

- **유연한 데이터 스키마:** 필요한 필드를 정확히 정의할 수 있고, 여러 데이터 유형(텍스트, 이메일, 전화번호, 숫자, 날짜)을 지원해요.

- **정확도 향상을 위한 선택적 컨텍스트 제공:** 배경 정보를 추가해서 AI가 입력값이 무엇을 의미하는지, 모호한 값을 어떻게 해석해야 하는지 이해할 수 있도록 도울 수 있어요.

- **사전 제작 템플릿:** 연락처 정보, 기회 정보, 주문 정보, 예약 정보 등 자주 사용되는 추출 패턴에 대한 템플릿을 사용할 수 있어요.

- **후속 워크플로우 변수:** 연락처 필드 업데이트(Update Contact Field), 조건 분기(If/Else), 알림, 메시지, 기회 관리, 아웃바운드 웹훅 등 이후 액션에서 추출된 필드를 사용할 수 있어요.

---

## 액션 세부 정보

AI 데이터 추출 워크플로우 액션의 각 구성 요소를 이해하면 액션을 더 정확하게 설정하고 추출 결과의 품질을 높일 수 있어요.

| 필드 | 설명 |
|---|---|
| Action Name(액션 이름) | 액션의 커스텀 이름이에요. 기본값은 "AI extract data"예요. |
| Extract From(추출 대상) * | 데이터를 추출할 비정형 텍스트 입력값이에요. 커스텀 값(예: 이메일 본문, 웹훅 페이로드, SMS 내용, 또는 이전 액션의 출력값)을 선택하세요. 필수 입력 항목이에요. |
| Additional Context(추가 컨텍스트) | AI가 데이터를 더 정확하게 추출하도록 도와주는 선택적 보조 정보예요. 예: "이 콘텐츠는 Zillow 리드 알림 이메일이에요. 전화번호가 다양한 형식으로 나타날 수 있어요." |
| Templates(템플릿) | 자주 사용되는 사례를 위한 사전 제작 추출 템플릿이에요: 연락처 정보, 기회 정보, 주문 정보, 예약 정보. 템플릿을 선택하면 데이터 필드가 자동으로 채워져요. 적용 후 필드를 수정, 추가, 삭제할 수 있어요. |
| Data Fields(데이터 필드) | 입력값에서 추출할 구조화된 필드예요. 각 필드에는 Name(변수 키), Type(텍스트, 이메일, 전화번호, 숫자, 날짜 중 하나), 그리고 AI를 안내하는 선택적 Description(설명)이 있어요. |

---

## 템플릿

템플릿은 자주 쓰이는 워크플로우 사례에 맞춰 일반적인 추출 필드를 미리 채워주기 때문에 더 빠르게 시작할 수 있도록 도와줘요. 설정 시간을 줄여주고, 특히 표준적인 연락처, 영업, 주문, 일정 정보를 추출하고 싶을 때 실용적인 출발점이 되어줘요.

템플릿을 그대로 사용하거나, 선택 후 필드를 수정하거나, 처음부터 나만의 커스텀 필드 세트를 만들 수도 있어요.

사용 가능한 템플릿 예시는 다음과 같아요:

- **연락처 정보(Contact info):** full_name(텍스트), email(이메일), phone(전화번호) 필드를 미리 채워줘요. 이 필드들은 이름, 이메일 주소, 전화번호 같은 표준 연락처 정보를 추출하도록 설계되었어요.

- **기회 정보(Opportunity info):** company_name, job_title, budget, timeline 필드를 미리 채워줘요. 리드나 기회 관련 메시지에서 자주 나타나는 영업 정보를 캡처하도록 설계되었어요.

- **주문 정보(Order info):** order_id(텍스트), items(텍스트), total_amount(숫자), order_date(날짜) 필드를 미리 채워줘요. 주문 ID, 주문한 상품/서비스, 총 금액, 주문 날짜 같은 주문 및 거래 정보를 추출하도록 설계되었어요.

- **예약 정보(Appointment info):** 예약 날짜, 시간, 장소, 예약 유형 같은 일반적인 일정 관련 정보를 미리 채워줘요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075088724/original/oCguvLx66edBje48-VXLPnkBV8gPMIggBA.png?1783014199)

---

## 추출된 데이터를 이후 액션에서 사용하기

AI 데이터 추출 워크플로우 액션이 실행되고 나면, 추출된 필드는 이후 워크플로우 액션에서 커스텀 값(Custom Value)으로 사용할 수 있게 돼요. 이를 통해 추출된 데이터를 연락처 생성/업데이트(Create/Update Contact), 기회 관련 액션, 조건 분기(If/Else), 알림, 그리고 그 외의 이후 단계로 직접 전달할 수 있어요.

예를 들어 Text 유형의 full_name이라는 필드를 정의했다면, 이후의 연락처 업데이트(Update Contact) 액션에서 연락처 이름을 설정하거나, 이메일 발송(Send Email) 액션에서 메시지를 개인화하는 데 사용할 수 있어요.

이후 액션에서 추출된 값에 접근하는 방법:

- 추출된 데이터를 사용하고 싶은 이후 액션을 열고, 채우고 싶은 필드를 클릭하세요. 커스텀 값 선택 도구를 열고 **AI extract data**를 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075090678/original/KmxNeGzMBx1u1Xh0cIHTZz_yZLTGERwTPw.jpeg?1783016102)

- 참조하고 싶은 특정 AI 데이터 추출 액션을 선택하세요. 해당 액션은 워크플로우에서 지정한 이름으로 표시돼요. 이후 삽입하고 싶은 필드를 선택하세요. 선택 가능한 옵션은 해당 AI 데이터 추출 액션에서 정의된 필드를 기준으로 표시돼요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075090679/original/c_8oDtSRg-mZKiJeEu3rGJzJjlV3ZS9ooA.jpeg?1783016110)

---

## AI 데이터 추출 워크플로우 액션 설정 방법

아래 단계를 따라 액션을 설정하고, 추출된 필드를 이후 워크플로우 액션에서 사용할 수 있게 만들어보세요.

#### 1단계: 액션 추가하기

워크플로우에서 **더하기(+)** 아이콘을 클릭해 새 액션을 추가한 다음, **AI extract data** 액션을 검색해서 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075088957/original/R8zq0ylIkwsXI_GIKTBUv6e3YSYVGPQUPA.png?1783014538)

#### 2단계: 입력 소스 설정하기

**Extract From(추출 대상)** 필드에서, 커스텀 값 선택 도구를 사용해 파싱하고 싶은 입력값을 선택하세요.

이메일 본문, 웹훅 페이로드 필드, SMS 메시지, 또는 이전 AI 액션의 출력값처럼 이전 워크플로우 액션이나 트리거에서 나온 텍스트 형태의 값이면 무엇이든 사용할 수 있어요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075089145/original/b8XuQWZg28uSU50YUDtJt1IDfKA_6tib5Q.png?1783014678)

#### 3단계: 컨텍스트 추가하기 (선택 사항)

**Additional Context(추가 컨텍스트)** 필드에, AI가 데이터를 더 정확하게 추출할 수 있도록 도와줄 보조 정보를 입력하세요. 이 필드는 커스텀 값을 지원해요.

예를 들어, 소스의 형식을 지정할 수 있어요(예: "이것은 신규 리드 알림 이메일이에요. 전화번호가 다양한 형식으로 나타날 수 있어요.").

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075089316/original/pVJZJ0FRkDOEwJcW4vU5Ip-uQw0_mX_cDw.png?1783014860)

#### 4단계: 데이터 필드 정의하기

**Data(데이터)** 섹션에서, AI가 추출할 필드를 정의하세요. 두 가지 방법이 있어요:

**옵션 A – 템플릿 사용하기**

연락처 정보, 기회 정보, 주문 정보, 예약 정보 등 사전 제작된 템플릿 중 하나를 클릭하면 자주 사용되는 필드 세트가 자동으로 채워져요. 이후 필요에 따라 필드를 수정, 추가, 삭제할 수 있어요.

**옵션 B – 커스텀 필드 정의하기**

**+ Add data(+ 데이터 추가)**를 클릭해서 각 필드를 직접 만드세요. 각 필드마다 다음을 입력하세요:

- **Name(이름):** 이 필드의 변수 키예요. 예: full_name, order_id, total_amount. 이후 액션에서 이 값이 변수 이름이 돼요.

- **Type(유형):** 텍스트, 이메일, 전화번호, 숫자, 날짜 중 데이터 유형이에요. AI가 추출한 값을 올바르게 식별하고 형식화하는 데 도움을 줘요.

- **Description(설명, 선택 사항):** AI가 무엇을 찾아야 하는지 안내하는 힌트예요. 예: "지역 번호가 포함된 전화번호, 예: +1 (555) 234-5678". 설명을 추가하면 추출 정확도를 높일 수 있어요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075089527/original/eyaw9OaqB7gN1r3GFjFDvvifcTwYkA6ZKQ.png?1783015032)

#### 5단계: 액션 저장하기

**Save action(액션 저장)**을 클릭해서 설정을 저장하세요. 추출된 데이터 필드는 워크플로우의 이후 모든 액션에서 변수로 사용할 수 있게 돼요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075089646/original/v8tkRn_dvFvcDoT-b0afpfqTUqPkApgYGg.png?1783015156)

#### 6단계: 이후 액션 추가하기

추출된 값을 사용할 이후 액션들을 추가하세요. 예를 들어, 연락처를 생성하거나 업데이트하고, 기회를 생성하고, 조건 분기(If/Else)로 워크플로우를 라우팅하고, 내부 알림을 보내거나, 추출된 변수를 사용해 다른 액션을 채울 수 있어요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075089951/original/50kLHMgVp-fKr6-zPA4GINqR7RCWcl2XNA.png?1783015520)

---

## 일반적인 활용 사례

AI 데이터 추출은 중요한 정보가 일반 텍스트에는 존재하지만, 워크플로우가 이를 처리하기 위해서는 구조화된 필드로 변환해야 하는 상황에서 유용해요. 아래 예시는 이 액션이 팀을 지원할 수 있는 몇 가지 방법을 보여줘요.

#### 리드 알림 이메일 파싱하기

**시나리오:** 제3자 플랫폼(예: Zillow, Realtor.com)으로부터 리드 알림 이메일을 인박스로 받고 있어요. 각 이메일에는 리드의 이름, 전화번호, 관심 매물 정보가 담겨있지만 비정형 텍스트 형태예요. 이 정보를 자동으로 추출해서 연락처 상세(Contact Record)에 저장하고 싶어요.

**설정 방법:**

- 트리거: 인바운드 이메일(Inbound Email)

- 액션 1: AI Extract Data
  - Extract From: 이메일 본문
  - Context: "Zillow 리드 알림 이메일. 전화번호가 다양한 형식으로 나타날 수 있어요."
  - Template: 연락처 정보

- 액션 2: 연락처 업데이트(Update Contact)
  - 추출된 full_name, email, phone을 연락처 필드에 매핑

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075091659/original/Pu_Ykssik9gKpPRu8zz1YZqN7qLGfF-NBQ.png?1783017060)

#### 웹훅 페이로드에서 주문 데이터 추출하기

**시나리오:** 외부 시스템이 웹훅(Webhook)을 통해 주문 확인 데이터를 전송하는데, 페이로드가 구조화된 JSON이 아니라 원본 텍스트 블록이에요. 기회(Opportunity)를 생성하거나 커스텀 필드를 업데이트하기 위해 주문 ID, 상품, 총 금액을 추출해야 해요.

**설정 방법:**

- 트리거: 인바운드 웹훅(Inbound Webhook)

- 액션 1: AI Extract Data
  - Extract From: 웹훅 본문
  - Template: 주문 정보

- 액션 2: 기회 생성(Create Opportunity)
  - 추출된 order_id를 이름으로, total_amount를 금액 값으로 사용

---

## 자주 묻는 질문

**Q: 어떤 유형의 입력값에서 데이터를 추출할 수 있나요?**

워크플로우 안에서 사용 가능한 텍스트 형태의 입력값이면 모두 가능해요 – 이메일 본문, 웹훅 페이로드, SMS 메시지, GPT/AI 출력값, 폼 응답 텍스트, 또는 이전 액션의 커스텀 값 등이 있어요.

**Q: 반드시 템플릿을 사용해야 하나요, 아니면 직접 필드를 정의할 수 있나요?**

템플릿은 선택 사항이에요. 템플릿을 출발점으로 사용해서 수정할 수도 있고, 템플릿을 전혀 사용하지 않고 + Add data 버튼으로 처음부터 커스텀 필드를 직접 정의할 수도 있어요.

**Q: 어떤 데이터 유형을 지원하나요?**

다섯 가지 데이터 유형을 지원해요: Text(일반 문자열), Email(이메일 주소), Phone(전화번호), Number(숫자 값), Date(날짜 값). 올바른 유형을 선택하면 AI가 추출된 값을 정확하게 식별하고 형식화하는 데 도움이 돼요.

**Q: Description 필드는 어떤 역할을 하나요?**

Description은 AI에게 무엇을 찾아야 하는지 안내하는 선택적 힌트예요. 예를 들어 "지역 번호가 포함된 전화번호, 예: +1 (555) 234-5678"을 추가하면 AI가 전화번호를 더 정확하게 식별하고 형식화할 수 있도록 도와줘요. 설명을 더 구체적으로 작성할수록 추출 정확도가 높아져요.

**Q: 추출된 데이터를 다음 단계에서 어떻게 사용하나요?**

추출된 각 필드는 이후 모든 액션의 커스텀 값 선택 도구에서 사용 가능한 변수가 돼요. 예를 들어 "full_name"이라는 필드를 정의했다면, 연락처 업데이트, 이메일 발송, 또는 그 외 이후 액션에서 이를 참조할 수 있어요.

**Q: AI가 입력값에서 필드를 찾지 못하면 어떻게 되나요?**

AI가 정의된 필드에 일치하는 값을 찾지 못하면, 해당 필드의 변수는 빈 값이 돼요. 워크플로우에서는 조건 분기(If/Else)를 사용하거나, 중요한 액션에서 사용하기 전에 빈 값 여부를 확인하는 방식으로 이를 처리해야 해요.

**Q: Additional Context 필드가 결과 정확도를 높여주나요?**

네. 입력값 형식에 대한 컨텍스트를 제공하면(예: "이것은 신규 리드 알림 이메일이에요" 또는 "이 페이로드에는 주문 데이터가 포함되어 있어요") AI가 구조를 더 잘 이해하고 더 정확하게 추출할 수 있어요. 선택 사항이지만, 비표준적이거나 복잡한 입력값의 경우 권장해요.

**Q: 이 액션은 프리미엄 액션인가요?**

네. AI 데이터 추출 액션은 실행 건당 추가 요금이 발생해요. 이 액션을 설정할 때 액션 패널 상단에 프리미엄 배지가 표시돼요.

---
*원문 최종 수정: 2026-07-02*
*Hyperclass 사용 가이드 — hyperclass.ai*