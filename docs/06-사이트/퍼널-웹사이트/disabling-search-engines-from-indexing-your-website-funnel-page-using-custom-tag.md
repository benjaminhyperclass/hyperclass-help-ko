---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/48001156626-disabling-search-engines-from-indexing-your-website-funnel-page-using-custom-tag
번역일: 2026-08-11
카테고리: 06-사이트 > 퍼널-웹사이트
---

# 커스텀 태그를 이용해 웹사이트/퍼널 페이지가 검색엔진에 노출되지 않도록 설정하기

*대부분의 검색엔진 크롤러*가 페이지를 색인하지 못하게 하려면 다음 태그를 사용하세요:

Name: robots

Content: noindex


<meta name="robots" content="noindex">


*구글 크롤러만* 페이지를 색인하지 못하게 하려면 다음 태그를 사용하세요:

Name: googlebot

Content: noindex


<meta name="googlebot" content="noindex">

---
*원문 최종 수정: Thu, 3 Sep, 2020 at 9:38 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*