---
원문: https://help.gohighlevel.com/support/solutions/articles/155000001052-schedule-posts-using-rss-url
번역일: 2026-11-06
카테고리: 10-마케팅
---

# RSS 주소로 소셜 게시물 예약하기

하이퍼클래스 **소셜 플래너**(Social Planner)에 RSS나 Atom 피드 주소를 등록하면, 새 콘텐츠가 올라올 때마다 연결된 소셜 미디어 계정에 자동으로 공유돼요. 피드를 확인하는 주기, 게시할 게시물 수, 게시물에 들어갈 내용을 직접 정할 수 있어요. 이 문서에서는 RSS 기반 소셜 게시물을 설정하고 관리하는 방법을 안내해요.

RSS 피드를 이메일로 보내고 싶다면 [RSS 이메일 캠페인 보내기](RSS-Guide/how-to-send-rss-email-campaign-s.md) 문서를 참고하세요.

{% hint style="warning" %}
API 제한 때문에 RSS로 Twitter/X에 게시하는 기능은 지원하지 않아요. 소셜 플래너가 지원하는 나머지 네트워크에서는 모두 RSS를 사용할 수 있어요.
{% endhint %}

[동영상](https://www.youtube.com/embed/xiP8akMKXTI?&wmode=opaque)

---

## 소셜 플래너의 RSS 예약이란

RSS 예약을 쓰면 소셜 플래너가 RSS나 Atom 피드의 새 콘텐츠를 연결된 소셜 미디어 계정에 자동으로 게시해요. 블로그 글, 팟캐스트 에피소드, 뉴스처럼 자주 업데이트되는 콘텐츠를 소셜 게시물을 하나하나 만들지 않고도 공유할 수 있어요.

---

## RSS 예약의 장점

RSS(Really Simple Syndication) 예약을 쓰면 직접 게시하는 수고를 줄이면서 소셜 미디어 활동을 꾸준히 이어 갈 수 있어요.

- 콘텐츠 큐레이션: 여러 출처의 콘텐츠를 한 피드로 모아 공유할 만한 글을 쉽게 찾을 수 있어요.
- 자동 콘텐츠 공유: 소셜 계정에 자동으로 게시해 시간을 아끼고 게시 흐름을 꾸준히 유지할 수 있어요.
- 업계 동향 파악: 업계 블로그나 뉴스를 구독해 시의성 있는 게시물을 만들 수 있어요.
- 정보 과부하 줄이기: 여러 사이트를 돌아다니지 않고 한곳에서 콘텐츠를 모아 볼 수 있어요.
- 사용자 제작 콘텐츠 공유: 커뮤니티나 포럼 피드를 살펴보고 눈에 띄는 글을 공유할 수 있어요.
- 일정한 게시 주기 유지: RSS와 예약 기능을 함께 써서 꾸준한 간격으로 게시할 수 있어요.

---

## 시작하기 전에

- 유효한 RSS/Atom 피드 주소가 필요해요(예: 내 블로그나 YouTube 채널의 피드).
- **마케팅 > 소셜 플래너 > 설정**에서 소셜 계정을 연결해 두세요(예: Facebook 페이지, Instagram 비즈니스, LinkedIn 프로필/페이지, Google Business Profile, Pinterest). 연결 방법은 [시작하기 – 소셜 플래너 설정](../01-시작하기/마케팅-리드-생성/getting-started-setup-social-planner.md) 문서를 참고하세요.

---

## RSS 피드 주소 찾기

RSS 피드는 지금도 널리 쓰이지만, 예전과 달리 브라우저가 알려 주지 않고 웹사이트도 RSS 링크를 눈에 띄게 보여 주지 않는 경우가 많아서 찾기가 조금 까다로울 수 있어요. 그래도 대부분의 사이트는 RSS 피드를 제공해요. Google 검색만으로 찾기 어려울 때 쓸 수 있는 방법을 알려 드릴게요.

웹사이트의 40% 이상이 WordPress로 만들어져 있어서, 방문한 사이트가 WordPress일 가능성이 높아요. WordPress 사이트는 대개 피드 주소를 쉽게 찾을 수 있어요.

WordPress 피드 주소는 사이트 주소 끝에 "/feed"를 붙이면 돼요. 예: <https://justinpot.com/feed>. 대부분의 경우 이 방법으로 찾을 수 있어요.

이 방법으로 안 된다면 사이트 유형별로 아래 방법을 시도해 보세요.

- Tumblr 사이트: 주소 끝에 "/rss"를 붙여요. 예: <https://example.tumblr.com/rss>

- Blogger 사이트: 주소 끝에 "feeds/posts/default"를 붙여요. 예: [example.blogspot.com/feeds/posts/default](//example.blogspot.com/feeds/posts/default)
- Medium 게시판: 게시판 이름 앞에 "/feed/"를 넣어요. 예를 들어 [medium.com/example-site](http://medium.com/example-site)는 [medium.com/feed/example-site](//medium.com/feed/example-site)가 돼요.
- YouTube 채널 페이지: 채널 주소를 RSS 리더에 그대로 붙여 넣으면 피드로 쓸 수 있어요.
- 거기에서 구독 목록 전체가 담긴 OPML 파일도 찾을 수 있어요.

블로그용 피드는 [블로그용 RSS 피드](../06-사이트/블로그/rss-feed-for-blogs.md) 문서에서도 확인할 수 있어요.

위 방법으로도 찾지 못했다면 웹페이지 소스 코드를 확인해 보세요. 생각보다 간단해요.

피드를 찾으려는 웹사이트의 빈 공간에서 마우스 오른쪽 버튼을 누르고 "페이지 소스 보기"(View Page Source)를 선택하세요. 브라우저에 따라 문구가 조금 다를 수 있어요.

![웹페이지에서 페이지 소스 보기를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009129939/original/ljGpSDLcDdd-9knR7lMWqfVlfuhAjnKjLg.png?1696343867)

그다음 Ctrl+F(Windows, Linux) 또는 Command+F(Mac)를 눌러 코드를 검색해요. 먼저 "RSS"를 검색해 보세요.

![소스 코드에서 RSS를 검색하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009129927/original/E-aWIuKCArOaEVdeLiyQ6BYp4knhkShqBg.png?1696343865)

"rss"로 결과가 나오지 않으면 "atom"으로 검색해 보세요. 위 화면처럼 RSS 주소를 찾으면 복사해서 사용하면 돼요.

---

## RSS 피드로 게시물 만들기

소셜 플래너에서 RSS 게시물을 설정하면, 피드에 올라온 새 항목이 정해진 주기에 따라 연결된 채널에 자동으로 게시돼요.

### 1단계: RSS 게시물 메뉴로 이동

1. **마케팅 > 소셜 플래너**로 이동하세요.
2. **새 게시물**을 클릭하세요.
3. 옵션 중에서 **RSS Post**(RSS 게시물)를 선택하세요.

### 2단계: 주소 추가

RSS 피드 주소를 입력하세요. 주소를 찾는 방법은 위의 "RSS 피드 주소 찾기"를 참고하세요.

### 3단계: 소셜 계정 선택

게시할 소셜 계정을 선택하세요.

### 4단계: 마무리 문구 추가

**다음으로 끝남** 옵션에 텍스트, 해시태그, 링크를 입력하면 게시물 끝에 붙일 수 있어요.

### 5단계: 업데이트 주기 선택

피드를 확인하는 주기를 선택하세요. 5분마다부터 하루 한 번까지 고를 수 있어요.

![피드 업데이트 주기를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055530694/original/xy91wt151AQcaqv7nD2aOHnGc_xna0F4oA.png?1759932027)

### 6단계: 최대 게시물 수 선택

- 피드를 확인할 때마다 가져올 서로 다른 게시물의 수를 선택하세요(최소 1개, 최대 5개).

- 예를 들어 '3'을 선택하면, 게시 시점에 RSS 피드에서 가장 최근 항목을 최대 3개까지 가져와요.
- 같은 게시물이 여러 번 게시된다는 뜻은 아니에요. 가져온 항목은 각각 하나의 소셜 게시물로 한 번씩만 게시돼요.

![가져올 최대 게시물 수를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155009129942/original/VcgRrCxOyet5lCDer97vLERGn02fRe6YtA.png?1696343867)

### 7단계: (선택) 게시물에 RSS 항목 설명 포함하기

게시할 때 RSS **항목 설명**을 포함할지 선택할 수 있어요.

- **Include Description**(설명 포함)을 활성화하면 RSS 피드의 제목과 설명을 함께 게시해요.
- 비활성화하면 지금처럼 제목만 게시해요.
- 최대 5개 항목을 한 번에 보여 주는 미리보기로 서식, 콘텐츠 길이, 잘림 여부를 저장하기 전에 확인할 수 있어요.

이 옵션을 쓰면 공유할 콘텐츠의 양을 더 세밀하게 조절하고, 소셜 플랫폼마다 알맞게 게시할 수 있어요.

{% hint style="info" %}
RSS 게시물을 여러 소셜 네트워크에 게시하면, 소셜 플래너가 네트워크별 글자 수 제한에 맞춰 플랫폼마다 게시글 텍스트를 따로 만들어요. 같은 RSS 항목이 여러 플랫폼에 올라갈 때 예상치 못하게 잘리는 일을 줄일 수 있어요.

저장하기 전에 최대 5개 항목을 보여 주는 미리보기로 서식과 잘릴 수 있는 위치를 확인하세요.
{% endhint %}

![RSS 항목 설명 포함 옵션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064040493/original/p6ikyhhQlCffVahc68PS6npSqGCVSqe6LA.png?1770098889)

![여러 항목 미리보기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064040473/original/Fbn8NP-Dgt3XoubbJCh0AF3F0KU0YWiC7Q.png?1770098865)

---

## RSS 중복 게시 방지 방식

소셜 플래너는 이미 처리한 RSS 항목을 기록해 두었다가, 같은 게시물이 중복으로 올라가지 않도록 하면서 새 콘텐츠는 게시해요.

- 고유 항목 식별: 피드 항목은 RSS GUID로 구분해요. GUID가 없으면 링크와 제목으로 구분해요.
- 90일 동안 기록: 소셜 플래너는 처리한 항목을 90일 동안 기록해 중복 게시를 막아요.
- 새 콘텐츠만 게시: 피드를 확인했을 때 게시할 수 있는 새 항목이 없으면 새 게시물을 만들지 않아요.

---

## 알아 두면 좋은 점

RSS 게시가 어떻게 동작하는지 알면 지원되는 소셜 플랫폼에 콘텐츠를 올바르게 공유하는 데 도움이 돼요.

- 지원 플랫폼: RSS 게시는 소셜 플래너가 지원하는 네트워크에서 쓸 수 있어요. X(Twitter)는 제외돼요.
- 최대 게시물 수: 1~5개 제한은 피드를 확인할 때마다 처리하는 고유 항목 수에 적용돼요.
- 콘텐츠 서식: 소셜 플래너가 플랫폼별 글자 수 제한에 맞춰 RSS 게시글 텍스트를 조정해요.
- 게시물 미리보기: 저장하기 전에 피드 항목을 확인해 서식이나 잘림 문제가 없는지 살펴보세요.
- 이미지: 링크 미리보기는 소셜 플랫폼마다 달라요. 더 안정적인 미리보기를 원하면 원본 페이지에 대표 이미지와 Open Graph 메타데이터를 설정하세요.
- 피드 접근성: 자동 게시를 하려면 원본 RSS 주소가 계속 유효하고 접근할 수 있어야 해요.

---

## 자주 묻는 질문

### 설정한 뒤에 RSS 게시 주기를 바꿀 수 있나요?
네, 가능해요. RSS 설정을 편집해서 피드 확인 주기나 **Maximum Posts**(최대 게시물 수) 설정을 바꿀 수 있어요.

### 소셜 플래너가 예전 RSS 항목을 반복해서 게시하나요?
소셜 플래너는 처리한 항목을 90일 동안 기록해 중복 게시를 막아요. 이 기록 기간 안에는 이미 처리한 항목을 건너뛰어요.

### RSS 피드에 새 콘텐츠가 없으면 어떻게 되나요?
소셜 플래너가 게시할 수 있는 새 피드 항목을 찾을 때까지 새 게시물을 만들지 않아요.

### RSS 예약은 반복 게시물과 어떻게 다른가요?
RSS 예약은 피드의 새 콘텐츠를 자동으로 공유해요. [반복 게시물](소셜-플래너/how-to-post-recurring-social-posts-through-the-social-planner.md)은 미리 설정해 둔 콘텐츠를 정해진 간격으로 다시 게시해요.

### RSS 피드의 설명도 게시물에 넣을 수 있나요?
네, 가능해요. **Include Description**(설명 포함)을 활성화하면 지원되는 RSS 항목의 제목과 설명을 함께 게시해요.
