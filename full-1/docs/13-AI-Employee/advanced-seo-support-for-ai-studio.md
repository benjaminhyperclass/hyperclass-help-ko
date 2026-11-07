---
원문: https://help.gohighlevel.com/support/solutions/articles/155000007691-advanced-seo-support-in-ai-studio
번역일: 2026-11-06
카테고리: 13-AI-Employee
---

# AI 스튜디오 고급 SEO 지원

AI 스튜디오로 만든 사이트를 검색엔진, 소셜 플랫폼, AI 크롤러가 더 잘 읽을 수 있게 해 주는 기능이에요. 게시한 사이트가 검색 결과, 링크 미리보기, AI 검색에서 더 잘 보이도록 설정하고 싶을 때 쓰세요.

## 고급 SEO 지원이란?

**Advanced SEO Support**(고급 SEO 지원)는 게시한 AI 스튜디오 사이트를 검색엔진, 소셜 플랫폼, AI 크롤러가 더 쉽게 읽도록 돕는 기능이에요.

AI 스튜디오 사이트는 대부분 싱글 페이지 애플리케이션(SPA)이에요. 사람에게는 빠르게 보이지만, 로딩에 JavaScript가 필요해서 봇에게는 "빈 상자"처럼 보일 때가 많아요. 그래서 이런 문제가 있었어요.

- Google이 콘텐츠를 색인하는 데 몇 주가 걸렸어요.
- Slack이나 Twitter에서 링크 미리보기가 비어 있거나 평범하게 보였어요.
- ChatGPT나 Perplexity 같은 AI 검색이 사이트를 "읽지" 못해서 인용하지 못했어요.

**Advanced SEO Support**를 켜면 지원되는 봇이 빈 SPA 껍데기 대신 렌더링된 HTML을 받아요. 그러면 크롤링이 쉬워지고, 소셜 링크 미리보기가 더 정확해지고, AI 도구가 게시된 콘텐츠를 더 잘 이해해요.

고급 SEO 지원에는 다음 세 가지가 들어 있어요.

- **Pre-render SEO**(프리렌더 SEO): 지원되는 봇이 기본 SPA 응답 대신 렌더링된 페이지 콘텐츠를 받도록 해요.
- **소셜 미디어와 링크 미리보기**: 공유한 링크에 올바른 제목, 설명, 미리보기 이미지가 표시되도록 해요.
- **Generate Sitemap**(사이트맵 생성): 검색엔진이 게시한 사이트의 중요한 페이지를 더 효율적으로 찾도록 해요.

세 가지를 함께 쓰면 사이트가 더 잘 노출되고 더 쉽게 발견돼요. 일반 방문자가 보는 화면은 그대로예요.

***![고급 SEO 지원 개요](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069337327/original/JQEfEbjbC4npyO1t5FZF_0S65XppVumRuQ.jpeg?1776378012)***

![고급 SEO 지원 구성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069337332/original/3zepGl7NsIRV0ryzy8V7yF8HCinxfHOzdg.png?1776378021)

---

## 고급 SEO 지원의 장점

- **풍부한 소셜 미리보기:** LinkedIn, WhatsApp, X에 링크를 공유하면 올바른 제목, 설명, Open Graph 이미지가 표시돼요.
- **AI 검색 노출:** ChatGPT, Claude, Gemini 같은 AI 검색 엔진이 콘텐츠를 이해하고 답변에 인용할 수 있어요.
- **엣지 수준의 성능:** 프리렌더된 페이지는 Cloudflare 엣지에서 10ms 이내에 제공돼요. 봇에게는 매우 빠르고, 실제 방문자에게는 영향이 전혀 없어요.
- **즉시 색인 가능:** 검색엔진이 완전히 렌더링된 HTML을 받아요. Google의 JS 처리 대기열을 기다릴 필요 없이 첫 크롤링에서 색인될 수 있어요.
- **프로젝트별 제어:** 설정 패널에서 프로젝트마다 프리렌더링을 켜거나 끌 수 있어요.

---

## Pre-render SEO

**Pre-render SEO**(프리렌더 SEO)는 지원되는 봇이 기본 싱글 페이지 애플리케이션 껍데기 대신 완전히 렌더링된 HTML을 받도록 해 줘요.

{% hint style="info" %}
**Pre-render SEO**는 사용자 지정 도메인이 연결된 게시 프로젝트에서만 쓸 수 있어요.
{% endhint %}

**Advanced SEO Support**로 켜면 지원되는 봇이 페이지에 이미 있는 콘텐츠, 메타데이터, 이미지, canonical 태그, 구조화된 데이터를 읽을 수 있어요. JavaScript 렌더링을 늦게 하거나 아예 건너뛰는 검색엔진과 AI 크롤러에 특히 도움이 돼요.

빈 앱 껍데기 대신 첫 요청에서 렌더링된 콘텐츠를 받기 때문에 크롤링이 쉬워지고, 콘텐츠를 해석하기도 쉬워져요. 검색 결과, 미리보기, AI 기반 서비스에서 페이지가 더 정확하게 보여요.

동작 방식은 다음과 같아요.

- **봇 자동 감지:** 지원되는 검색엔진 크롤러, 소셜 미디어 봇, AI 크롤러에는 렌더링된 HTML이 자동으로 제공돼요.
- **자동 대체 응답:** 프리렌더링이 꺼져 있거나 페이지가 아직 캐시되지 않았다면 봇은 기존과 같은 표준 SPA를 받아요. 지금보다 나빠지는 일은 없어요.
- **캐시 자동 갱신:** 게시, 도메인 변경, 사이트 업데이트가 있을 때마다 프리렌더된 페이지가 자동으로 다시 만들어져요. 캐시를 직접 비우거나 다시 만들 필요가 없어요. 사이트당 최대 150개 경로까지 처리해요.
- **엣지 수준 제공:** 프리렌더된 페이지는 Cloudflare 엣지 네트워크에서 10ms 이내에 제공돼요. 봇이나 사용자에게 추가 지연이 생기지 않아요.

---

## 고급 SEO 지원 켜기

**Advanced SEO Support**를 켜면 게시한 AI 스튜디오 프로젝트에서 SEO 도구를 쓸 수 있어요. 프로젝트 안의 SEO 설정에서 진행하며, 사용자 지정 도메인이 연결되어 있어야 해요.

AI 스튜디오 프로젝트 안에서 다음 순서로 진행하세요.

1. 설정할 AI 스튜디오 프로젝트를 엽니다.
2. 빌더 상단에서 **더보기**를 클릭한 다음, 더보기 패널에서 **SEO & AI search**(SEO 및 AI 검색)를 엽니다.

   ![더보기 패널의 SEO & AI search 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079917962/original/Jx2xQbkhl-JPN8Zq9WIkCF5g3d4x-GFjow.png?1788355686)
3. 프로젝트가 게시되어 있고, 사용자 지정 도메인이 연결되어 있고, 그 도메인이 기본 도메인으로 설정되어 있는지 확인합니다.

   AI 스튜디오 프로젝트 게시 방법은 [AI 스튜디오 프로젝트 게시하기](ai-studio-in-hyperclass.md)에서 확인하세요.

   ![게시 및 도메인 연결 상태 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069332146/original/3vcUYZb42nAW25K7dqMbIshS6ANXokgZJQ.png?1776366016)
4. **활성화**를 클릭해 **Advanced SEO Support**를 켭니다.

   ![활성화 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069332136/original/IJ6ImAL5yipWf8xBvPzzG9axVF6naCvvfQ.png?1776365981)
5. **Advanced SEO Support** 토글이 보라색으로 바뀌었는지 확인합니다. 그런 다음 프로젝트를 다시 게시하세요. 그래야 최신 렌더링 결과를 지원되는 봇이 받을 수 있어요.

   ![보라색으로 켜진 토글](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069332124/original/bwwtDtzP8lL5-ZkxsOrnH4_OVj16X50HRA.png?1776365958)

---

## 소셜 미디어와 링크 미리보기

**Advanced SEO Support**를 켜면 Facebook, Twitter, LinkedIn, WhatsApp, Slack, Discord에 공유한 링크가 빈 미리보기나 평범한 미리보기 대신 올바른 페이지 제목, 설명, Open Graph 이미지로 표시돼요. 사이트 전체에 하나의 기본값을 쓰는 대신, 페이지마다 고유한 제목, 설명, 미리보기 이미지를 소셜 플랫폼에 보여 줄 수도 있어요.

**Improve social preview content**(소셜 미리보기 콘텐츠 개선)는 **Copy prompt**(프롬프트 복사) 방식으로 프로젝트 전체에 SEO 메타데이터를 적용해요. **Advanced SEO Support**가 켜져 있으면 지원되는 봇이 렌더링된 HTML에서 이 태그를 받아서, 페이지마다 올바른 미리보기 정보가 표시돼요.

소셜 미디어와 링크 미리보기를 만드는 방법은 다음과 같아요.

1. 업데이트할 AI 스튜디오 프로젝트를 엽니다.
2. 빌더 상단에서 **더보기**를 클릭한 다음 **SEO & AI search**를 엽니다.

   ![더보기 패널에서 SEO & AI search 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079918427/original/nMre5csDOlqLBug2cUOs-4n1Q9dYu_KNzg.png?1788355885)
3. **Improve social preview content**를 찾아 **Copy prompt**를 클릭합니다.

   ![Improve social preview content의 Copy prompt 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079918507/original/aWwzBsRfTILM0fsAxPBuyTTJYDzmiXQ4Zg.png?1788355914)
4. 복사한 프롬프트를 AI 스튜디오 채팅에 붙여넣습니다.

   ![AI 스튜디오 채팅에 프롬프트 붙여넣기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069335531/original/PfYQEObBtubtMLq-VIe1x6YK6jzokMkhzQ.png?1776372507)
5. 빌더에 나온 업데이트 요약을 확인한 다음, 프로젝트를 게시해 변경 사항을 적용합니다.

   ![업데이트 요약 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069335730/original/DguwRcIw0eFaf9-_piaigDZ5khr8Xg8WQQ.png?1776373017)
6. 아래 방법으로 제대로 적용됐는지 확인하세요.
   - 실제 URL을 Facebook, Twitter, LinkedIn, WhatsApp, Slack, Discord 같은 지원 플랫폼에 공유합니다. 미리보기에 원하는 제목, 설명, Open Graph 이미지가 나오는지 확인하세요.
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) 또는 [Twitter Card Validator](https://cards-dev.twitter.com/validator)로 Open Graph 태그가 제대로 제공되는지 확인하세요.

---

## 사이트맵 생성

**Generate Sitemap**(사이트맵 생성)은 검색엔진이 사이트의 중요한 페이지를 더 효율적으로 찾도록 도와줘요. AI 스튜디오에서는 **Generate sitemap**(사이트맵 생성) 항목이 **Copy prompt**(프롬프트 복사) 방식으로 프로젝트의 사이트맵을 만들어 줘요.

사이트를 게시하거나 업데이트하거나 다른 도메인으로 옮길 때 렌더링 결과가 자동으로 갱신돼요. 그래서 사이트맵이 최신 콘텐츠와 구조에 맞게 유지돼요.

사이트맵을 생성하는 방법은 다음과 같아요.

1. 업데이트할 AI 스튜디오 프로젝트를 엽니다.
2. 빌더 상단에서 **더보기**를 클릭한 다음 **SEO & AI search**를 엽니다.

   ![더보기 패널에서 SEO & AI search 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155079918693/original/e5fIvAe1HlX4qA_AWKmvZsyVArwwRHrRcA.jpeg?1788355982)
3. **Generate sitemap**을 찾아 **Copy prompt**를 클릭합니다.

   ![Generate sitemap의 Copy prompt 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069332162/original/ETkb4VGmYgZ5_niWHwrgfTqBh33hY5M7OA.png?1776366055)
4. 복사한 프롬프트를 AI 스튜디오 채팅에 붙여넣습니다.

   ![AI 스튜디오 채팅에 프롬프트 붙여넣기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069335739/original/H765GV75hozWe6QqsIDj65ViWVSasPdHcA.png?1776373064)
5. 빌더에 나온 업데이트 요약을 확인한 다음, 프로젝트를 게시해 변경 사항을 적용합니다. **상세 정보**를 클릭하면 사이트맵을 볼 수 있어요.

   ![상세 정보에서 사이트맵 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069335827/original/98shH1SJJWIus2bAC1SvgqF39h0mgkeTEw.png?1776373260)
6. 사이트맵을 Google Search Console에 제출합니다. Google이 URL을 찾고 사이트맵 처리 상태를 확인하는 데 도움이 돼요.

   ![Google Search Console에 사이트맵 제출](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069335797/original/Wd88q0mIPDw939R8w8tQTAsl9x7Eb7FIVQ.png?1776373179)

---

## 자주 묻는 질문

### 고급 SEO 지원을 켜기 전에 프로젝트를 먼저 게시해야 하나요?
네. 사용자 지정 도메인과 SEO 설정을 마치려면 먼저 게시해야 해요.

### 프리렌더링을 켜면 일반 방문자가 보는 사이트의 모습이나 동작이 달라지나요?
아니요. 방문자는 지금처럼 빠르고 인터랙티브한 SPA 화면을 그대로 봐요. 프리렌더된 HTML 스냅샷은 봇과 크롤러에만 제공돼요.

### 고급 SEO 지원이 스키마 마크업을 자동으로 넣어 주나요?
아니요. **Advanced SEO Support** 자체가 스키마 마크업을 자동으로 추가하지는 않아요. AI 스튜디오 프롬프트로 스키마를 추가해서 페이지 코드에 생성됐다면, 프리렌더링이 켜진 상태에서 지원되는 봇이 렌더링된 HTML의 일부로 그 스키마를 받을 수 있어요.

### 캐시는 어떻게 갱신되나요?
프로젝트를 게시하거나, 연결된 도메인을 바꾸거나, 사이트를 업데이트하고 다시 게시하면 캐시가 자동으로 갱신돼요.
