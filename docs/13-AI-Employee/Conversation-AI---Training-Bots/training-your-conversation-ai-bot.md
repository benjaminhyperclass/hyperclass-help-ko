---

번역일: 2026-04-08
카테고리: 13-AI-Employee > Conversation AI - Training Bots
---

# 대화 AI 봇 학습시키기

이 문서는 HighLevel의 고급 도구를 사용해서 AI 봇을 학습시키는 종합 가이드입니다. 정확하고 관련성 높은 응답을 보장하기 위한 방법을 설명합니다. 웹 크롤러와 커스텀 봇 응답(FAQ)을 활용하면 일반적인 고객 질문에 대한 정확한 답변을 만들 수 있어, 봇이 정확성, 일관성, 효율성을 갖춘 고객 상호작용을 관리할 수 있게 됩니다.

## 목차

- [대화 AI 봇 학습이란?](#대화-ai-봇-학습이란)
- [봇 학습의 주요 이점](#봇-학습의-주요-이점)
- [웹 크롤러](#웹-크롤러)
  - [웹 크롤러에 URL 추가하는 방법](#웹-크롤러에-url-추가하는-방법)
  - [구글 문서로 봇 학습시키기](#구글-문서로-봇-학습시키기)
- [커스텀 봇 응답(FAQ)](#커스텀-봇-응답faq)
- [자주 묻는 질문](#자주-묻는-질문)
- [다음 단계](#다음-단계)

## 대화 AI 봇 학습이란?

봇 학습은 AI 봇이 고객 질문에 대해 정확하고 상황에 맞는 응답을 제공하도록 가르치는 과정입니다. 웹 크롤러와 커스텀 봇 응답 같은 도구를 사용해서 원활한 고객 상호작용을 지원하는 포괄적인 지식 베이스를 구축할 수 있습니다. 고객이 일반적인 질문이든 구체적인 질문이든 상관없이, 잘 학습된 봇은 고객의 요구를 효율적으로 충족시켜줍니다.

![대화 AI 봇 학습 인터페이스](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039825034/original/e16ZMdJvSNSQ2RuHp6tMSlK1Mu1jL-LHdg.jpeg?1736872885)

## 봇 학습의 주요 이점

- **정확도 향상**: 관련 데이터 소스에 액세스함으로써 봇이 고객 질문에 맞춤화된 정확한 응답을 제공할 수 있습니다.

- **효율성 증대**: 자동 응답으로 수동 개입이 줄어들어 팀과 고객 모두의 시간을 절약합니다.

- **일관성**: 모든 상호작용에서 고객이 동일한 고품질 정보를 받을 수 있도록 보장합니다.

- **확장성**: 리소스를 늘리지 않고도 증가하는 고객 기반을 지원할 수 있습니다.

## 웹 크롤러

웹 크롤러를 사용하면 인터넷 상의 정보를 활용해서 봇을 학습시킬 수 있어, 정확하고 상황에 맞는 응답을 제공할 수 있습니다. 정확한 URL, 경로, 전체 도메인의 데이터와 구글 문서를 포함하도록 웹 크롤러를 설정할 수 있습니다.

![웹 크롤러 인터페이스](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039825074/original/6LJg1GHQ3QSp6KEgbacL0CwQEcIRXnHGMg.jpeg?1736872923)

### 웹 크롤러에 URL 추가하는 방법

봇에 URL을 제공하는 것은 견고한 지식 베이스를 만드는 핵심 단계입니다. URL을 추가하면 웹 크롤러가 웹사이트에서 특정 정보를 추출하고 활용할 수 있어, 봇이 고객 상호작용을 위한 정확하고 맥락적으로 관련된 데이터에 액세스할 수 있게 됩니다.

**Hyperclass 전문가 팁**: 웹 크롤러로 봇을 학습시킬 때 최대한 활용할 수 있는 전문가 팁과 모범 사례를 소개합니다!
- URL과 문서가 최신이고 관련성 있는지 확인하세요.
- 자주 묻는 질문과 우선순위가 높은 주제에 집중하세요.
- 쉽게 파싱할 수 있도록 콘텐츠를 명확하게 구조화하세요.

#### 1단계: 도메인 유형 선택 및 도메인 입력

봇을 학습시킬 때 크롤링할 수 있는 여러 도메인 유형이 있습니다. 선택하는 도메인 유형에 따라 봇 학습을 위해 크롤링될 URL 수가 결정됩니다.

- **정확한 URL**: 특정 웹페이지를 크롤링해서 해당 데이터를 학습에 사용합니다. 예를 들어 https://www.gohighlevel.com/ 를 입력하면 해당 정확한 웹페이지로만 크롤링이 제한됩니다.

- **경로가 포함된 모든 URL**: 특정 경로 내의 모든 페이지를 크롤링합니다. 예를 들어 https://www.gohighlevel.com/marketing 을 입력하면 /marketing/offers 또는 /marketing/promotions 같은 해당 URL 경로를 사용하는 모든 페이지가 포함됩니다.

- **도메인 내 모든 URL**: 도메인 내의 모든 페이지를 크롤링합니다. 예를 들어 https://www.gohighlevel.com/promo 를 입력하면 루트 도메인 www.gohighlevel.com 을 가진 모든 페이지가 포함됩니다.

![도메인 유형 선택하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039830261/original/AdPxdhIyOyQbqfqVnPFSEssl4AlYCQzYDA.gif?1736880673)

#### 2단계: URL 크롤링

URL 유형을 선택하고 URL을 입력한 후 "Get Data(데이터 가져오기)" 버튼을 클릭해서 URL 크롤링을 시작하세요. 이 과정은 정보 수집을 위해 크롤링하는 URL 수에 따라 시간이 걸릴 수 있습니다.

![URL 크롤링 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039828897/original/3BKWqlTHf82HGcwKVPzpyAM5JeqDEKFR5Q.gif?1736877926)

#### 3단계: 크롤링된 URL 선택

크롤링된 모든 URL이 목록에 나타나며, 봇의 학습 데이터로 사용할 URL을 원하는 만큼 선택할 수 있습니다. 모든 URL을 "전체 선택"하거나, 학습 데이터에 추가하려는 URL 옆의 체크박스를 클릭해서 개별 URL을 선택할 수 있습니다.

![크롤링된 URL 선택하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039829406/original/HTBV9ilgvHnBQ2jt8QKw7-zR_T6SrP4TUA.gif?1736878861)

### 구글 문서로 봇 학습시키기

구글 문서 URL을 봇에 제공해서 해당 콘텐츠를 학습에 사용할 수 있습니다. 이는 상세한 문서, FAQ 또는 서비스 설명을 업로드하는 데 이상적입니다.

![구글 문서 학습 인터페이스](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039829486/original/mPxitCqoF1RBZmz6yQ9zryF7z30NqFEd2Q.png?1736879009)

#### 구글 문서를 학습에 사용하기 위한 요구사항

대화 AI 봇을 학습시키기 위해 구글 문서를 사용하려면 구글 문서를 "공개"로 설정해야 합니다. 이를 위해서는 구글 문서 공유 설정을 "링크가 있는 모든 사용자"로 설정해야 합니다.

- 구글 문서를 열어주세요
- 화면 우상단의 "공유" 버튼을 클릭하세요
- "일반 액세스"에서 "링크가 있는 모든 사용자" 옵션을 선택하세요

![구글 문서 공유 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039829734/original/3VKjAUTThq0ur38LW5KrCBwmTKRW4cD1Sw.gif?1736879557)

**중요**: 구글 문서의 공유 설정을 변경하지 않으면 아래 스크린샷과 같은 오류 메시지가 표시됩니다.

![구글 문서 오류 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039829610/original/CzvjS_vM7z0n2yzsqW3teX1jZiCDtaKDtQ.png?1736879271)

## 커스텀 봇 응답(FAQ)

커스텀 봇 응답을 사용하면 자주 묻는 질문에 대한 정확한 답변을 정의할 수 있습니다. 이러한 응답은 특히 중요한 고객 질문에 대해 봇이 일관되고 정확한 정보를 제공하도록 보장합니다.

![커스텀 봇 응답 인터페이스](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039825087/original/qUzTiAVc684gNegMV0Xa2FbhmjXC8HqZxw.jpeg?1736872947)

**Hyperclass 전문가 팁**: 커스텀 봇 응답으로 봇을 학습시킬 때 최대한 활용할 수 있는 전문가 팁과 모범 사례를 소개합니다!
- 답변을 간결하고 핵심적으로 유지하세요.
- 자주 묻는 질문의 다양한 변형을 예상하세요.
- 변화하는 고객 요구에 맞춰 응답을 정기적으로 업데이트하세요.

### 커스텀 봇 응답 추가하는 방법

커스텀 봇 응답은 자주 묻는 질문에 대해 봇이 정확한 답변을 제공하도록 보장하는 데 필수적입니다. 일반적인 질문에 대한 정확한 응답을 정의함으로써 봇의 일관성, 정확성, 그리고 중요한 고객 요구사항을 효과적으로 해결하는 능력을 향상시킬 수 있습니다.

학습 데이터에 새로운 커스텀 봇 응답을 추가하는 방법은 두 가지가 있습니다. 수동으로 FAQ를 추가하거나 대화에서 봇 응답에 피드백을 제공하는 것입니다.

**수동으로 FAQ 추가하기:**

- "+ Add Q&A(Q&A 추가)" 버튼을 클릭하세요
- 질문을 입력하고 정확한 응답을 정의하세요
- 향후 사용을 위해 응답을 저장하세요

![수동으로 FAQ 추가하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039825319/original/K4p1iXpTC3XsyyNy9KtH8K_oIdO187zgBQ.gif?1736873143)

**AI 대화 피드백:**

- 실시간 대화 중이나 AI 테스트 환경에서 봇이 생성한 응답 아래의 엄지척 또는 엄지아래 옵션을 사용해서 피드백을 제공하세요
- 이 피드백은 봇의 향후 답변을 개선합니다

![AI 대화 피드백 제공하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039825197/original/tGYCZueYj8SRwiF0TGF7AQAyY6F7HNGX4Q.gif?1736873045)

---

## 자주 묻는 질문

**Q: 봇의 학습 데이터를 얼마나 자주 업데이트해야 하나요?**

분기마다 또는 서비스에 주요 변경사항이 있은 후 학습 데이터를 업데이트하면 정확성과 관련성을 보장할 수 있습니다.

**Q: 봇 학습에 여러 URL을 사용할 수 있나요?**

네! 정확한 URL, 경로별 URL, 도메인 레벨 URL을 결합하면 포괄적인 지식 베이스를 구축하는 데 도움이 됩니다. 단일 지식 베이스에서 최대 4,000개의 웹 URL을 학습시킬 수 있습니다.

**Q: 봇의 응답이 정확한지 어떻게 확인하나요?**

피드백 메커니즘을 사용하고 고객 질문을 시뮬레이션해서 봇을 자주 테스트하세요. 정기적인 FAQ 업데이트도 정확성을 보장합니다.

**Q: 봇이 질문에 답할 수 없으면 어떻게 되나요?**

설정에 따라 봇은 명확한 설명을 요청하거나 질문을 사람 상담원에게 전달할 수 있습니다.

**Q: 커스텀 봇 응답에 어떤 유형의 정보가 가장 좋나요?**

일반적인 고객 요구사항을 효과적으로 해결하기 위해 가격, 정책 또는 지침과 같은 정확하고 중요한 정보를 포함하세요.

## 다음 단계

봇 학습을 완료했다면 다음 문서들을 확인해서 대화 AI를 더욱 효과적으로 활용해보세요:

- [대화 AI 봇 - 설명](../Getting-Started-w/-Conversation-AI/conversation-ai-bot-explained.md)
- [대화 AI V2 설정하기](../Getting-Started-w/-Conversation-AI/setting-up-conversation-ai.md)
- [고급 설정 개요 - 대화 AI](../Getting-Started-w/-Conversation-AI/advanced-settings-overview-conversation-ai.md)

---
*원문 최종 수정: Tue, 3 Feb, 2026 at 1:19 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*