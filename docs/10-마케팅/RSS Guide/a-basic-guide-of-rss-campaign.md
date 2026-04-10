---

번역일: 2026-04-07
카테고리: 10-마케팅 > RSS Guide
---

# RSS 캠페인 기본 가이드

Hyperclass에서는 RSS 콘텐츠 블록을 사용하여 직접 캠페인과 자동화 캠페인에 RSS 피드(아이템과 헤더)를 포함할 수 있습니다. 이를 통해 구독자들이 블로그 포스트, 뉴스 기사 등 온라인 콘텐츠 소스의 업데이트를 자동으로 받아보고 읽을 수 있습니다.

## RSS 캠페인은 어떻게 작동하나요?

RSS 아이템 또는 헤더 요소를 삽입하고 발송 또는 예약 섹션에서 RSS 피드 URL을 추가할 수 있습니다. 캠페인을 예약한 시점과 이메일이 발송되는 시점 사이에 게시된 모든 피드 업데이트가 포함됩니다. 피드에서 표시하고 싶은 태그를 선택하여 피드 레이아웃을 사용자 정의할 수 있습니다.

일반적인 RSS 아이템
RSS 요소를 추가할 때, 피드에 있는 세부 정보에 따라 빌더에서 해당 커스텀 값을 사용할 수 있으며, 자동으로 관련 데이터를 가져옵니다.
예를 들어, 블로그 제목과 내용만 추가하고 싶다면:

1단계: 템플릿에 RSS 헤더 추가

2단계: {{rss_item.title}}과 {{rss_item.content}}가 있는지 확인합니다. 필요한 필드에 따라 해당 커스텀 값을 추가하세요.
3단계: 발송 또는 예약 섹션에서 RSS URL을 추가합니다.

4단계: 캠페인을 예약합니다.

**동작 방식:** 캠페인이 발송될 때, 템플릿에서 연락처는 예약된 날짜부터의 모든 블로그 제목과 내용을 볼 수 있습니다.

## RSS 헤더와 아이템 블록에 대한 세부 정보

RSS 헤더란 무엇인가요?

RSS 피드에서 <channel> 태그를 동적으로 채워줍니다. RSS 헤더 요소는 다음 RSS 채널 태그를 지원하며, 해당하는 커스텀 값을 사용하여 이메일에 해당 태그 값을 채워줍니다:

| RSS 태그 | Hyperclass용 커스텀 값 |
|----------|----------------------|
| `<title>` | `{{rss_feed.title}}` |
| `<description>` | `{{rss_feed.description}}` |
| `<link>` | `{{rss_feed.url}}` |
| `<lastBuildDate>` | `{{rss_feed.date}}` |

RSS 아이템 블록이란 무엇인가요?

RSS 아이템 블록은 다음 커스텀 값들을 받아들이고 해당하는 RSS 태그를 동적으로 삽입합니다:

| RSS 태그 | 커스텀 값 | 설명 |
|----------|-----------|------|
| `<title/>` | `{{rss_item.title}}` | RSS 아이템의 제목, 주로 블로그 포스트 제목 |
| `<description/>` | `{{rss_item.content}}` | HTML 형식의 RSS 아이템 요약으로, `<description>` 태그 안의 정보를 포함합니다. 피드에 `<description>` 태그가 없으면 `<content:encoded>` 태그의 정보를 표시합니다 |
| `<link/>` | `{{rss_item.url}}` | 온라인 RSS 아이템의 텍스트 링크로, 텍스트로 표시하거나 하이퍼링크로 사용할 수 있습니다 |
| `<content:encoded/>` | `{{rss_item.content_full}}` | RSS 아이템의 `<content:encoded>` 태그 안에 있는 전체 정보를 HTML 형식으로 표시합니다. `<content:encoded>` 태그가 없으면 `<description>` 태그의 정보를 표시합니다 |
| `pubDate` | `{{rss_item.date}}` | RSS 아이템이 게시된 날짜를 `MMM DD, YYYY hh:mm A` 형식으로 표시합니다. 향후 사용자 정의 포맷을 지원할 예정입니다 |
| `<dc:creator>` | `{{rss_item.author}}` | RSS 아이템의 작성자 |
| `<media:content>` | `{{rss_item.imageUrl}}` | 이미지의 src URL을 텍스트로 제공합니다. 이미지로 렌더링하려면 `{{rss_img}}`를 사용하세요 |

`{{rss_img alt="alt_text" src=rss_item.imageUrl height="200" width="200"}}`

| `<item>` | `{{#rss_items rss_items}}` | 아무것도 표시하지 않습니다. 개별 RSS 아이템의 사용자 정의 포맷을 시작하는 데 사용됩니다 |
| `</item>` | `{{/rss_items}}` | 아무것도 표시하지 않습니다. 개별 RSS 아이템의 사용자 정의 포맷을 닫는 데 사용됩니다 |

## RSS 캠페인을 발송하는 방법

### 1. RSS 피드 URL 찾기

- 사이트 하단이나 사이드바에서 RSS 아이콘을 찾으세요.
- 페이지 소스를 보고 rss나 xml을 검색하세요.
- /feed, /rss, /rss.xml과 같은 일반적인 끝말을 시도해보세요.
- 브라우저 확장 프로그램이나 Feedbucket, CtrlQ 같은 도구를 사용하여 피드를 감지하세요.

### 2. RSS URL 입력

발송 또는 예약(Send or Schedule) → RSS Campaign으로 가서 피드 URL을 붙여넣으세요.

![RSS URL 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044064262/original/ZNtVQGvrlt2DDSMYM4nOzSPPEODXe1wULg.png?1743061150)

### 3. RSS 콘텐츠 추가

이메일 빌더에서 RSS 헤더 또는 RSS 아이템 요소를 삽입하세요.

![RSS 콘텐츠 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044064296/original/X-oJsYjlONXwwYwFFetlJ5SWeFMk97eHeA.png?1743061209)

### 4. 커스텀 값 설정

RSS 태그에 필요한 커스텀 필드를 추가하세요.

![커스텀 값 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044064334/original/jZdjc8KmvvvMg9RV-Xh1BQNg-qv4NKx1oA.png?1743061238)

### 5. 예약 설정

발송 또는 예약(Send or Schedule) → RSS Schedule에서 발송 시간과 포함할 아이템 수를 설정하세요.

![예약 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044064446/original/CrG6AVKZHoYeLkyUHPKZoFR9UeeM_I6sJw.png?1743061302)

### 6. 캠페인 예약

RSS 캠페인을 검토하고 예약하세요.

## 자주 묻는 질문(FAQ)

### 1. description이 HTML 콘텐츠인 경우는 어떻게 처리하나요?

RSS 기반 커스텀 변수 {{rss_item.title}}이 반환하는 값들은 HTML이 이스케이프됩니다. 예를 들어, 표현식에 &가 포함되면 반환되는 HTML 이스케이프 출력이 &amp;로 생성되거나, RSS 피드에 일반 텍스트 대신 HTML 기반 텍스트가 있으면 일반 텍스트로 렌더링됩니다.

값을 이스케이프하고 싶지 않다면 "트리플 스태시(triple-stash)" {{{를 사용하세요:

예: RSS 피드 소스가 다음과 같다면

![RSS 피드 소스 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044064498/original/053-vudl3uozwzP1Jenv_6x0A937_zBr-g.png?1743061362)

"트리플 스태시" 없이는 다음과 같이 렌더링됩니다:

![트리플 스태시 없는 렌더링](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044064499/original/0lJbkcnhpyV1FeCYL-L8f1VWUhGX7TQ5TA.png?1743061362)

"트리플 스태시" {{{rss_item.content}}}를 사용하면 다음과 같이 렌더링됩니다:

![트리플 스태시 사용한 렌더링](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044064500/original/pgFuMeYnJqPkP0UFa3vHK8k63GH3YNiQjA.png?1743061362)

### 2. 다음 달 RSS 캠페인에서 어떤 콘텐츠를 예상할 수 있나요?

3월 10일에 캠페인을 만들고 3월 25일로 예약했다면, 3월 10일 이후의 모든 블로그 포스트가 3월 25일 캠페인에 포함됩니다.
포스트 수를 제한하고 싶다면, 발송 또는 예약에서 최대 피드 수를 설정하세요. 사용자가 "5"를 지정하면, 캠페인에서 가장 최근 5개의 블로그를 보여줍니다.

### 3. RSS 캠페인이 예약된 후 블로그가 없으면 어떻게 되나요?

다음 주기에는 캠페인이 발송되지 않습니다. 감사 로그(audit log)에서 새로운 피드가 없어 예약이 실패했다는 항목을 확인할 수 있습니다.

---
*원문 최종 수정: Thu, 27 Mar, 2025 at  2:48 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*