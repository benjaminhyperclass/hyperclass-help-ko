---

번역일: 2026-04-07
카테고리: 06-사이트 > 트러블슈팅
---

# 모바일에서 고정/패럴랙스 배경 이미지가 표시되지 않는 이유

패럴랙스 이미지나 고정 배경 이미지는 iPhone과 iPad에서 제대로 작동하지 않습니다. 이는 iOS에서 이 애니메이션에 사용되는 Javascript를 차단하는 제한사항 때문입니다. 안드로이드 폰이나 태블릿, 크롬북, 윈도우 태블릿에서는 완벽하게 작동합니다.

iOS 모바일 Safari는 고정 배경 이미지 렌더링에 문제가 있습니다. 이는 iOS 브라우저의 한계입니다.

이 문제는 다른 많은 플랫폼에서도 발생하며, 각 플랫폼마다 이 문제를 해결하는 고유한 방법을 사용하고 있습니다.

![패럴랙스 배경 이미지 예시 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48066657290/original/CYD0whl8xRxJUGReYDkGqxgRQKjcPsLPFg.png?1603710070)

![패럴랙스 배경 이미지 예시 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48066657407/original/rzHh_JZPLbhuE_rIpY8jTQuF8uA1aESX4A.png?1603710101)

**Hyperclass에서의 해결방법**

패럴랙스 배경 이미지가 포함된 섹션을 모바일용으로 별도 제작하고, 모바일에서는 패럴랙스가 아닌 다른 옵션을 선택할 수 있습니다.

모바일용 별도 섹션 만드는 방법은 다음 가이드를 참고하세요:

[https://help.gohighlevel.com/support/solutions/articles/48001161151](how-to-have-different-websites-for-desktop-and-phone.md)

이 문제를 다루는 여러 포럼 스레드들도 도움이 될 수 있습니다:
[https://www.google.com/search?source=hp&ei=n6eWX_GlOMjMaIu9nagH&q=parallax+image+not+showing+on+iphone&oq=parallax+image+iphon&gs_lcp=CgZwc3ktYWIQAxgAMgYIABAWEB4yBggAEBYQHjoICAAQsQMQgwE6AggAOgUILhCxAzoFCAAQsQM6DgguELEDEIMBEMcBEK8BOggILhCxAxCDAToCCC46CAguELEDEJMCOgoILhCxAxAKEJMCOgQIABAKOgQILhAKOgcIABCxAxAKOgoIABCxAxCDARAKOgcILhCxAxAKUKMNWPF0YJ2BAWgAcAB4AIABgQWIAeo4kgEKMi0xOC43LjAuMZgBAKABAaoBB2d3cy13aXo&sclient=psy-ab](https://www.google.com/search?source=hp&ei=n6eWX_GlOMjMaIu9nagH&q=parallax+image+not+showing+on+iphone&oq=parallax+image+iphon&gs_lcp=CgZwc3ktYWIQAxgAMgYIABAWEB4yBggAEBYQHjoICAAQsQMQgwE6AggAOgUILhCxAzoFCAAQsQM6DgguELEDEIMBEMcBEK8BOggILhCxAxCDAToCCC46CAguELEDEJMCOgoILhCxAxAKEJMCOgQIABAKOgQILhAKOgcIABCxAxAKOgoIABCxAxCDARAKOgcILhCxAxAKUKMNWPF0YJ2BAWgAcAB4AIABgQWIAeo4kgEKMi0xOC43LjAuMZgBAKABAaoBB2d3cy13aXo&sclient=psy-ab)

---
*원문 최종 수정: Mon, 26 Oct, 2020 at 6:04 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*