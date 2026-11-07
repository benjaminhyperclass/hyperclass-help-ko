---
원문: /support/solutions/articles/155000008299-make-your-sites-ai-ready-with-llms-txt
번역일: 2026-11-06
카테고리: 06-사이트
---

# llms.txt로 사이트를 AI가 읽기 쉽게 만들기

연결한 도메인마다 맞춤 `llms.txt` 파일을 만들고, 편집하고, 공개할 수 있어요. 이 파일은 AI 크롤러, LLM, 검색 에이전트가 사이트 구조를 이해하도록 돕고, 자동화된 "Agentic Browsing" 감사도 통과하게 해 줘요. 퍼널과 웹사이트 기능에서 쓸 수 있어요.

## llms.txt 파일이란?

llms.txt 파일은 robots.txt 파일과 비슷하지만, AI 에이전트와 대규모 언어 모델(LLM)을 위해 만든 파일이에요. 사이트의 루트 디렉터리(`https://<yourdomain.com>/llms.txt`)에 있고, 웹사이트와 주요 페이지, 핵심 정보를 Markdown 형식으로 요약해 줘요. 이렇게 하면 AI 검색 노출(AEO/GEO)이 좋아지고, Google PageSpeed의 Agentic Browsing 검사 기준도 충족할 수 있어요.

계정에 연결한 도메인마다 `llms.txt` 파일을 따로 설정해야 해요. 저장하면 파일이 바로 게시되고 `https://<yourdomain.com>/llms.txt` 주소에서 누구나 볼 수 있어요. AI 크롤러가 내용을 제대로 읽으려면 올바른 Markdown 형식으로 써야 해요.

## llms.txt가 PageSpeed와 AI 감사에 도움이 되는 이유

AI 관련 감사에서는 도메인 루트에 llms.txt 파일이 있는지 확인하기도 해요. 파일을 추가하면 지원되는 감사가 이 파일을 찾을 수 있고, 호환되는 AI 에이전트는 사이트 콘텐츠를 정리해 둔 안내서를 얻게 돼요.

1. Lighthouse "Agentic Browsing" 감사 통과: Google PageSpeed Insights(Lighthouse 기반)에는 Agentic Browsing 감사 카테고리가 있어요. Lighthouse는 도메인 루트(`https://<domain>/llms.txt`)에 llms.txt가 있는지, Markdown 형식이 올바른지 확인해요. 이 파일이 있으면 사이트가 이 자동 검사를 통과할 수 있어요.
2. 크롤링 부담과 토큰 사용량 감소: AI 에이전트와 LLM이 스크립트가 많은 무거운 HTML 페이지를 분석하지 않아도 돼요. 가벼운 일반 텍스트 사이트 지도를 대신 읽으면 AI 엔진의 연산 자원, 대역폭, 처리 컨텍스트를 아낄 수 있어요.
3. AI 검색 발견성(AEO/GEO) 향상: Claude, ChatGPT, Gemini 같은 언어 모델에 깔끔한 길잡이가 되어 줘요. AI 에이전트를 핵심 콘텐츠로 바로 안내하므로, AI 검색 엔진이 브랜드를 정확하게 색인하고 인용할 수 있어요.

## 좋은 llms.txt 파일은 어떤 모습일까요?

유용한 `llms.txt` 파일은 Markdown으로 쓰고, 사이트의 목적을 빠르게 설명해요. 그리고 AI 에이전트가 정확하고 공개된 페이지만 모아 둔 목록으로 갈 수 있게 안내해요. 제목이 분명하고, 링크 설명이 구체적이고, 설명이 간결할수록 파일을 이해하기 쉬워요.

구성은 이래요. 사이트 이름에는 `#` 제목을 하나만 쓰고, 그 아래에 짧은 인용문 요약을 넣어요. 주요 페이지 링크는 `##` 소제목으로 묶고 각각 짧은 설명을 붙여요. 우선순위가 낮은 페이지를 모아 두는 선택 섹션을 추가해도 돼요.

실제 예시는 [directory.llmstxt.cloud](https://directory.llmstxt.cloud/)에서 볼 수 있고, 공식 사양은 [llmstxt.org](https://llmstxt.org/)에서 확인할 수 있어요.

아래 Markdown 구조를 시작점으로 활용해 보세요.

```
# Example Company

> Example Company helps small businesses manage appointments, customer communication, and online payments.

## Key Pages

- [Services](https://example.com/services): Overview of the company’s primary services.
- [Pricing](https://example.com/pricing): Available plans and pricing information.
- [Getting Started](https://example.com/getting-started): Instructions for new customers.
- [Contact](https://example.com/contact): Contact and support options.

## Resources

- [Help Center](https://example.com/help): Product documentation and troubleshooting resources.
- [Blog](https://example.com/blog): Educational articles and company updates.

## Optional

- [Company News](https://example.com/news): Announcements and company news.
```

## 도메인에 llms.txt 설정하기

퍼널이나 웹사이트에 연결된 도메인이라면 어느 도메인이든 아래 순서로 `llms.txt` 파일을 추가하거나 편집할 수 있어요.

1. 서브 계정 대시보드에서 **설정 > 도메인 및 URL 리다이렉트**로 이동하세요.

   ![설정에서 도메인 및 URL 리다이렉트 메뉴로 이동하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077522748/original/TEHNbLc6KtSGKH9uneTgO1yPwwkoeXy-Ug.png?1785784409)
2. 설정할 도메인을 찾아 **관리**를 클릭하세요.

   ![도메인 옆의 관리 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077522770/original/gNj8E1CxJY2uuBLusHW7J8001YUZyCzx6w.png?1785784449)
3. 원하는 **Connected Product**(연결된 상품) 옆의 점 3개 아이콘을 선택하고 **편집**을 클릭하세요.

   ![연결된 상품 옆 점 3개 메뉴에서 편집을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077522880/original/FFl8cJvU_tXL6IDiEAcUliwIuNUHNiyHHA.png?1785784549)
4. 설정 패널에서 아래로 스크롤해 **llms.txt** 섹션을 찾으세요. 텍스트 영역에 형식을 맞춘 Markdown 내용을 입력하거나 붙여넣으세요.

   ![설정 패널의 llms.txt 섹션과 텍스트 영역](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077522910/original/tOUlWqeji__rEqUTedEHEAsNz1vONjkMpw.png?1785784574)
5. **저장**을 클릭하세요. 파일이 `https://<yourdomain.com>/llms.txt` 주소에 바로 게시돼요.

   ![저장 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077522942/original/DJ6EcmZ09e0UdgyJJTSAkbiBmh2nYNCRzw.png?1785784669)

## llms.txt 확인하기

공개된 파일을 열어 보면 내용이 올바른 도메인에 저장됐는지, 지원되는 크롤러와 AI 에이전트가 읽을 수 있는 상태인지 확인할 수 있어요.

브라우저 주소창에 `https://yourdomain.com/llms.txt`를 입력하세요.

서브도메인이라면 서브도메인 주소를 전부 입력하세요. 예: `https://offers.yourdomain.com/llms.txt`

![브라우저에서 llms.txt 파일을 열어 본 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077522952/original/lmgj1oPuA9xfNnZfUhpZ7eLDWdXiq7ceVg.png?1785784697)

## 자주 묻는 질문

### **AI 스튜디오**에서도 `llms.txt` 파일을 만들어 주나요?
네, **AI 스튜디오**에서는 요청 문구(프롬프트)만 입력하면 `llms.txt` 내용을 만들어 줘요.

### llms.txt가 XML 사이트맵을 대신하나요?
아니요. XML 사이트맵은 검색 엔진이 URL을 찾도록 돕고, llms.txt는 호환되는 AI 시스템에 사이트 요약과 선별한 링크를 제공해요. 두 파일을 함께 써도 돼요.

### llms.txt를 추가하면 내 사이트가 AI 생성 결과에 꼭 나오나요?
아니요. 이 파일은 호환되는 AI 시스템이 사이트를 이해하는 데 도움이 되지만, 크롤링·색인·인용·순위 방식은 각 외부 플랫폼이 직접 정해요.

### 도메인마다 파일이 따로 필요한가요?
네. 연결한 도메인과 서브도메인은 각각 따로 설정해요.

### 새 웹사이트 페이지는 자동으로 추가되나요?
아니요. 이 파일에는 도메인 설정에 입력한 Markdown 내용만 들어 있어요. 중요한 페이지나 URL이 바뀌면 파일을 검토하고 업데이트하세요.

### 파일은 얼마나 자주 업데이트해야 하나요?
중요한 콘텐츠를 게시하거나 삭제하거나 이름을 바꾸거나 새 URL로 옮길 때마다 검토하세요.
