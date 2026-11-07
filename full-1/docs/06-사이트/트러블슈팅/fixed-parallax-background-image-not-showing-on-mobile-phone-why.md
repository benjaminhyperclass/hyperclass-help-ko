---
원문: https://help.gohighlevel.com/support/solutions/articles/48001163062-fixed-parallax-background-image-not-showing-on-mobile-phone-why-
번역일: 2026-11-07
카테고리: 06-사이트
---

# 모바일에서 고정(Parallax) 배경 이미지가 안 보일 때

iPhone과 iPad에서는 고정 배경 이미지(패럴랙스 이미지)가 제대로 나오지 않을 수 있어요. 이 문서에서 원인과 해결 방법을 안내해요.

패럴랙스 이미지는 고정 배경 이미지라고도 불러요. iOS는 이 애니메이션에 쓰이는 JavaScript를 막기 때문에, iPhone과 iPad에서는 제대로 작동하지 않아요. Android 폰과 태블릿, Chromebook, Windows 태블릿에서는 문제없이 작동해요.

iOS의 모바일 Safari는 고정 배경 이미지를 제대로 표시하지 못해요. iOS 브라우저 자체의 제한이에요.

이 문제는 다른 여러 플랫폼에서도 똑같이 나타나고, 플랫폼마다 나름의 해결 방법을 써요.

![iPhone에서 고정 배경 이미지가 표시되지 않는 화면 예시 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48066657290/original/CYD0whl8xRxJUGReYDkGqxgRQKjcPsLPFg.png?1603710070)

![iPhone에서 고정 배경 이미지가 표시되지 않는 화면 예시 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48066657407/original/rzHh_JZPLbhuE_rIpY8jTQuF8uA1aESX4A.png?1603710101)

## 하이퍼클래스에서의 해결 방법

모바일 전용 섹션을 따로 만들어서 패럴랙스 배경 이미지를 넣을 수 있어요. 모바일 전용 섹션에서는 **배경 이미지** 옵션 중 **Parallax**(패럴랙스)가 아닌 다른 옵션을 선택하세요.

모바일용 섹션을 따로 만드는 방법은 [데스크톱과 모바일에서 서로 다른 웹사이트 보여 주기](../기타/how-to-have-different-websites-for-desktop-and-phone.md) 문서를 참고하세요.

이 문제를 다룬 글이 여러 포럼에 올라와 있어요. 아래 검색 결과에서 도움이 될 만한 글을 찾아볼 수 있어요.

https://www.google.com/search?source=hp&ei=n6eWX_GlOMjMaIu9nagH&q=parallax+image+not+showing+on+iphone&oq=parallax+image+iphon&gs_lcp=CgZwc3ktYWIQAxgAMgYIABAWEB4yBggAEBYQHjoICAAQsQMQgwE6AggAOgUILhCxAzoFCAAQsQM6DgguELEDEIMBEMcBEK8BOggILhCxAxCDAToCCC46CAguELEDEJMCOgoILhCxAxAKEJMCOgQIABAKOgQILhAKOgcIABCxAxAKOgoIABCxAxCDARAKOgcILhCxAxAKUKMNWPF0YJ2BAWgAcAB4AIABgQWIAeo4kgEKMi0xOC43LjAuMZgBAKABAaoBB2d3cy13aXo&sclient=psy-ab
