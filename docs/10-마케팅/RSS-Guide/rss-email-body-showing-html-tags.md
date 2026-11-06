---

번역일: 2026-04-07
카테고리: 10-마케팅 > RSS 가이드
---

# RSS 이메일 본문에 HTML 태그가 표시되나요?

문제: RSS 이메일 본문에 `<p>` 같은 HTML 태그가 그대로 표시됩니다.

**해결 방법:** 이메일 빌더에서 Custom RSS Item 요소를 사용하고, `{{rss_item.content}}` 대신 `{{{rss_item.content}}}`를 사용하세요.

## HTML 기반 RSS 피드

RSS 기반 커스텀 변수 `{{rss_item.title}}`이 반환하는 값은 HTML 이스케이프 처리됩니다. 예를 들어, 표현식에 &가 포함되어 있으면 HTML 이스케이프 처리된 출력이 &amp;로 생성됩니다. 또는 RSS 피드가 일반 텍스트 대신 HTML 기반 텍스트를 포함하고 있다면 일반 텍스트로 렌더링됩니다.

값을 이스케이프 처리하지 않으려면 "삼중 중괄호" `{{{`를 사용하세요:

예시: RSS 피드 소스가 다음과 같다면

![RSS 피드 소스 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855360/original/uPxMn189zEmr7WCh_6qYv6DAQ_WrxdccDA.png?1636131880)

"삼중 중괄호" 없이는 다음과 같이 렌더링됩니다:

![삼중 중괄호 없이 렌더링된 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48158897349/original/WrYKfyhcJ5DK5j0lLKBZhA2VMTG80JaNkw.png?1636829725)

"삼중 중괄호" `{{{rss_item.content}}}`를 사용하면 다음과 같이 렌더링됩니다:

![삼중 중괄호 사용 시 렌더링된 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48158897351/original/rxmtzjEm8PqMouDcAVPjKT1IJ7DnYuLEfA.png?1636829727)

---
*원문 최종 수정: Sat, 13 Nov, 2021 at  1:04 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*