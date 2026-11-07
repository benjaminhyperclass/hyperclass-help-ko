---
원문: https://help.gohighlevel.com/support/solutions/articles/48001182524-xml-sitemaps
번역일: 2026-11-06
카테고리: 06-사이트
---

# XML 사이트맵 만들고 Google에 제출하기

XML 사이트맵은 검색엔진이 내 사이트를 더 잘 읽도록 돕는 파일이에요. 이 문서에서는 사이트맵이 필요한지 판단하는 방법, 하이퍼클래스에서 사이트맵을 만들고 수정하는 방법, Google에 제출하는 방법을 안내해요.

## XML 사이트맵이란?

사이트맵은 사이트에 있는 페이지와 페이지 사이의 관계를 알려 주는 파일이에요.

Google 같은 검색엔진은 사이트맵을 읽고 사이트를 더 효율적으로 크롤링해요. 사이트맵을 보면 Google은 어떤 페이지가 중요한지 알 수 있어요. 페이지가 마지막으로 업데이트된 시점, 변경 빈도, 다른 언어 버전 같은 정보도 얻을 수 있어요.

[동영상](https://www.youtube.com/embed/pWs48nOYjTA?&wmode=opaque)

## XML 사이트맵이 꼭 필요한가요?

Google은 다음과 같이 안내해요.

> "사이트의 페이지가 제대로 연결되어 있다면 Google은 보통 사이트 대부분을 찾을 수 있습니다. 그래도 사이트맵은 규모가 크거나 구조가 복잡한 사이트, 또는 특수한 파일의 크롤링을 개선하는 데 도움이 됩니다.
>
> 사이트맵을 사용한다고 해서 사이트맵에 있는 모든 항목이 크롤링되고 색인된다는 보장은 없어요. Google은 복잡한 알고리즘으로 크롤링 일정을 정하기 때문이에요. 하지만 대부분은 사이트맵이 있는 편이 유리하고, 사이트맵이 있다고 해서 불이익을 받는 일은 없어요."

> 사이트맵이 필요할 수 있는 경우
>
> - 사이트가 아주 큰 경우: Google 웹 크롤러가 새로 올렸거나 최근에 수정한 페이지 일부를 놓칠 가능성이 커져요.
> - 서로 연결이 잘 안 되어 있거나 고립된 콘텐츠 페이지가 많은 경우: 페이지끼리 자연스럽게 링크되어 있지 않다면 사이트맵에 나열해서 Google이 놓치지 않게 할 수 있어요.
> - 사이트가 새로 생겨서 외부 링크가 적은 경우: Googlebot 같은 웹 크롤러는 페이지 사이의 링크를 따라 이동해요. 다른 사이트가 내 페이지를 링크하지 않으면 Google이 페이지를 찾지 못할 수 있어요.
> - 동영상·이미지 같은 리치 미디어 콘텐츠가 많거나 Google 뉴스에 노출되는 경우: 사이트맵으로 추가 정보를 제공하면 Google이 검색에 적절히 반영할 수 있어요.
>
> 사이트맵이 필요 없을 수 있는 경우
>
> - 사이트가 "작은" 경우: 여기서 작다는 건 페이지가 약 500개 이하라는 뜻이에요. 검색 결과에 노출되어야 한다고 생각하는 페이지만 이 숫자에 포함해요.
> - Blogger나 Wix 같은 간단한 사이트 호스팅 서비스를 쓰는 경우: 미리 만들어진 페이지와 탐색 요소로 사이트를 빠르게 만들어 주는 서비스라면, 서비스가 사이트맵을 자동으로 만들어 줄 수 있어요. 이때는 따로 할 일이 없어요. 서비스 문서에서 "sitemap"을 검색해 자동 생성되는지, 직접 만들기를 권장하는지(그렇다면 제출 방법은 무엇인지) 확인해 보세요.
> - 사이트 내부 링크가 충분히 촘촘한 경우: 홈페이지에서 시작해 링크를 따라가면 Google이 중요한 페이지를 모두 찾을 수 있다는 뜻이에요.
> - 검색 색인에 노출해야 하는 미디어 파일(동영상, 이미지)이나 뉴스 페이지가 많지 않은 경우: 사이트맵은 Google이 동영상·이미지 파일과 뉴스 기사를 찾고 이해하는 데 도움이 돼요. 이미지, 동영상, 뉴스 검색 결과에 노출할 필요가 없다면 사이트맵이 필요 없을 수 있어요.

---

## 하이퍼클래스에서 XML 사이트맵 설정 위치 찾기

서브 계정에서 **사이트** 메뉴로 이동한 뒤, 화면 오른쪽 위 보조 메뉴에 있는 작은 톱니바퀴 아이콘을 클릭하세요.

![사이트 메뉴의 톱니바퀴 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028203189/original/7hAUxf2LkT6AstyZJBbUH4Gp24clm_0KhQ.jpg?1719336652)

서브 계정 설정의 **도메인** 화면으로 이동해요. 왼쪽 메뉴에서 **설정**으로 이동한 뒤 아래로 스크롤해 **도메인**을 선택해도 같은 화면이 나와요.

**도메인** 화면에서 이 서브 계정에 추가한 도메인의 오른쪽 끝에 **관리**가 보여요. 점 3개 아이콘으로 표시되고, 추가한 도메인에 쓸 수 있는 작업을 모아 둔 버튼이에요.

{% hint style="warning" %}
서브 계정에 도메인을 추가하지 않았다면, 먼저 도메인을 추가해야 **관리**가 보여요.
{% endhint %}

![도메인 목록의 관리 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048641628/original/Wg4b6AF9isKFOhHgNSLyKJzMDHT7x0zctQ.png?1750444427)

**관리**를 클릭하면 해당 도메인의 **연결된 상품** 페이지가 열려요. 원하는 항목 옆의 점 3개 아이콘을 클릭하면 사용할 수 있는 작업이 나와요. 그중 **XML Sitemap**(XML 사이트맵)이 도메인의 XML 사이트맵을 추가, 수정, 삭제하는 작업이에요.

![XML Sitemap 작업 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048641649/original/79ydb6NnmEKM4GQ4xVeUgfdxpjFUg92PiQ.png?1750444483)

**XML Sitemap** 작업을 클릭하면 해당 도메인에 연결된 웹사이트와 퍼널이 모두 목록으로 나와요.

{% hint style="warning" %}
하이퍼클래스에서는 한 도메인에 여러 웹사이트와 퍼널을 연결할 수 있어요. 그래서 XML 사이트맵을 설정할 때 주의가 필요해요. Google이 크롤링하고 이 도메인과 연결해서 보기를 원하는 웹사이트·퍼널 페이지만 선택하세요.
{% endhint %}

![도메인에 연결된 웹사이트와 퍼널 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028203375/original/0X-bHKG6NO-jMM_lDYYhTprtewxbG2xDjg.jpg?1719336858)

이 화면에서 알아 두면 좋은 요소는 다음과 같아요.

- 연결된 웹사이트와 퍼널: 이 도메인에 연결된 웹사이트와 퍼널이 연한 파란색 사각형 아코디언 목록으로 나뉘어 표시돼요.
- 웹사이트·퍼널 이름: 각 아코디언 목록에 웹사이트 또는 퍼널의 이름이 보여요.
- **체크박스**: 웹사이트나 퍼널 이름 왼쪽에 있어요. 선택하면 웹사이트 또는 퍼널 전체를 고르고, 모든 페이지를 XML 사이트맵에 추가해요.
- 화살표 아이콘: 웹사이트나 퍼널 오른쪽에 있어요. 클릭하면 해당 웹사이트 또는 퍼널의 모든 페이지가 펼쳐져서, XML 사이트맵에 추가할 페이지를 하나씩 고를 수 있어요. 이렇게 하면 특정 페이지를 XML 사이트맵 기준의 Google 봇 크롤링에서 제외할 수 있어요.

![체크박스와 화살표 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028207030/original/EdXaVXYzK1H7se1Pijk-6ZOJeZN9Svb88g.jpg?1719343717)

{% hint style="warning" %}
웹 페이지나 퍼널 페이지를 XML 사이트맵에 넣지 않았다고 해서 검색엔진이 그 페이지를 절대 크롤링하지 않는다는 뜻은 아니에요. 크롤링을 원하지 않는 페이지로 연결되는 하이퍼링크가 있다면, 다른 방법으로 해당 페이지의 접근을 제한해야 해요.

검색엔진이 웹사이트나 퍼널 페이지를 크롤링하지 못하게 막는 방법이 궁금하면 하이퍼클래스 고객지원에 문의하세요.
{% endhint %}

---

## 하이퍼클래스에서 XML 사이트맵 만들고 수정하기

처음 사이트맵을 만들거나 기존 사이트맵을 수정하려면, 먼저 XML 사이트맵 설정 화면에서 웹사이트나 퍼널 오른쪽의 화살표 아이콘을 클릭하세요.

{% hint style="info" %}
XML 사이트맵 설정 위치를 모르겠다면, 이 문서 위쪽의 "하이퍼클래스에서 XML 사이트맵 설정 위치 찾기"를 참고하세요.
{% endhint %}

![XML 사이트맵 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028203388/original/stOcTV-S0t-6MlhPaZQ-H6PAJxGr7Xdfuw.jpg?1719336875)

XML 사이트맵에 넣을 웹사이트 또는 퍼널 페이지를 선택하세요. 한 도메인에 여러 웹사이트와 퍼널을 연결할 수 있으니, 다음 단계로 넘어가기 전에 사이트맵에 넣을 페이지를 모두 선택했는지 확인하세요.

다음 단계로 넘어갈 준비가 되면 웹사이트·퍼널 목록 맨 아래의 **계속하기** 버튼을 클릭하세요.

![계속하기 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028203405/original/fJDKPCnBaWE7PiAtuTEuGURkML1NmqkdDA.jpg?1719336885)

{% hint style="info" %}
이 도메인에 XML 사이트맵을 만든 적이 없다면 아래와 같은 메시지가 보여요. **새로 추가** 버튼을 클릭해서 첫 사이트맵을 만드세요.

![XML 사이트맵이 없을 때 나오는 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028207578/original/NDrxoMlOJMXrVqZCR-gFk8O3uYn_ZyasdQ.jpg?1719345051)
{% endhint %}

사이트맵에 넣을 페이지를 고르면 아래와 같은 팝업이 나타나요. 팝업에는 다음 내용이 있어요.

- XML 사이트맵 목록: 이 도메인에 만든 XML 사이트맵이 모두 표시돼요. 사이트맵이 둘 이상이면 목록에 여러 개가 보여요.
- **Custom Path**(사용자 지정 경로): 사이트맵을 만들 때 지정되는 사용자 지정 URL 경로예요. 직접 설정할 수 있고 언제든 바꿀 수 있어요. 이 URL 경로를 바꿨다면 Google이 다시 크롤링하도록 사이트맵을 다시 제출하세요.
- **마지막 수정** 날짜: 사이트맵을 마지막으로 수정한 날짜예요. 페이지를 추가하거나 제거하거나 사용자 지정 URL 경로를 바꾸면 사이트맵이 수정돼요.
- 점 3개 작업 버튼: XML 사이트맵을 **편집**하거나 **삭제**할 수 있어요.

![XML 사이트맵 목록 팝업](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028207585/original/7wSotkqPEYQfo1EZ2Sp-1Z8UzFfxOeRwLA.jpg?1719345085)

XML 사이트맵 내용이 마음에 들면 **Generate & Save**(생성 및 저장) 버튼을 클릭해 만들기 또는 수정을 마치세요. 아래와 같은 메시지가 나타나서 사이트맵이 만들어졌다는 것과 새 XML 사이트맵의 URL을 알려 줘요.

![사이트맵 생성 완료 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028203467/original/QJ-ZUB9aKox93DGRsbqxJuL3FlLcyDTppg.jpg?1719336941)

---

## Google에 사이트맵 제출하기

Google은 사이트를 크롤링할 때마다 사이트맵을 확인하지 않아요. 사이트맵을 처음 발견했을 때 한 번 확인하고, 그 뒤에는 사이트맵이 바뀌었다고 알릴(ping) 때만 확인해요. 사이트맵이 새로 생겼거나 업데이트되었을 때만 Google에 알리세요. 바뀌지 않은 사이트맵을 여러 번 제출하거나 ping하지 마세요.

### Search Console 사이트맵 보고서로 제출하기

Google은 Google Search Console의 "Sitemaps Report"(사이트맵 보고서)로 제출하기를 권장해요. 이 방법을 쓰면 사이트맵에 대한 다양한 데이터와 인사이트도 볼 수 있어요. 예를 들면 다음과 같아요.

- 활성 상태
- 크롤링된 전체 페이지 수
- 크롤링 오류
- 그 밖의 정보

Google 사이트맵 보고서로 사이트맵을 제출하는 순서를 따라가 볼게요.

### 1단계: 사이트맵 보고서 열기

링크(<https://support.google.com/webmasters/answer/7451001>)를 클릭해서 Google "Search Console 고객센터"의 사이트맵 보고서 링크가 있는 페이지로 이동하세요. 페이지가 열리면 "Open Sitemaps Report"(사이트맵 보고서 열기) 버튼을 클릭하세요.

![Open Sitemaps Report 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028207841/original/I9M8E8eDbYou2YqFLXFS6w_XDLA0Jue09g.jpg?1719345698)

### 2단계: Google Search Console에 속성 추가하기

Google Search Console 계정에 속성(웹사이트 도메인)이 아직 없다면 **속성 추가**로 속성을 먼저 추가해야 해요.

이미 Google Search Console 속성을 설정해 두었다면 몇 단계를 건너뛸 수 있어요.

![Google Search Console 속성 추가 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028207952/original/p2d6kwBwKXXfgMCq1sIiz1yw7X1vdhWidQ.jpg?1719345986)

![Google Search Console 속성 추가 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028208053/original/C0vn8aXCw1YxJ2_qfXnGMDLqrkUZAS5HTw.jpg?1719346256)

### 3단계: 새 속성(도메인) 인증하기

속성을 추가했다면 인증해야 해요. 그래야 Google이 해당 도메인과 관련된 Search Console 데이터를 수집해서 보여 줄 수 있어요.

![속성 인증 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028208061/original/1C7I_-hHzr6ip6Eu_eg9u4e9POM6wGVKGg.jpg?1719346280)

![속성 인증 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028208138/original/sdgUfisTQl2cwJMZ3hOD41LwUrW6ffaBtw.jpg?1719346400)

![속성 인증 화면 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028208145/original/rm1cTC6-EdqzTw2JFnG8rBPPmbieRrMhcQ.jpg?1719346422)

### 4단계: Sitemaps 탭으로 이동하기

사이트맵을 제출하려면 Google Search Console에서 **Sitemaps**(사이트맵) 섹션으로 이동하세요.

![Sitemaps 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028208316/original/P0u7A3O7cKKd994VpTIh1c--VYEhKOi-ng.jpg?1719346705)

### 5단계: XML 사이트맵 제출하기

XML 사이트맵을 Google에 제출하려면 사이트맵 URL이 필요해요. 서브 계정에서 사이트맵을 만들거나 수정하면 하이퍼클래스가 이 URL을 알려 줘요. 사이트맵의 URL 경로를 복사해서 이 화면에 입력하세요.

{% hint style="info" %}
하이퍼클래스에서 만든 XML 사이트맵의 URL 경로는 보통 "sitemap.xml"이에요.

경로가 바뀔 수 있으니, Google에 제대로 제출하려면 URL 경로를 꼭 메모해 두세요.
{% endhint %}

![사이트맵 URL 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028208317/original/dZNOjQAmXfyigbKpEUAQVGbngoLsh-FGUg.jpg?1719346721)

Google에 XML 사이트맵을 제출했다면, Google 봇이 사이트를 크롤링할 때까지 기다려야 사이트맵과 관련된 데이터를 볼 수 있어요. 크롤링이 끝나면 Google과 다른 검색엔진이 내 사이트를 어떻게 크롤링하는지 이해하는 데 도움이 되는 데이터를 많이 볼 수 있어요.

이 정보는 Google Search Console의 **페이지** 섹션에서 볼 수 있어요. **Sitemaps** 섹션에서는 목록에 있는 XML 사이트맵 오른쪽의 점 3개 작업 버튼을 클릭해서 이동할 수 있어요.

![사이트맵 목록의 작업 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028208437/original/YbAlceUOOTXuu9IyzixEHqfdldXxbLUWCA.jpg?1719346971)

![사이트맵 크롤링 데이터](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028208359/original/R6R_yp3xPX_W_GgNt5LySMg4xolq9GwMzg.jpg?1719346823)

{% hint style="info" %}
권장 방법으로 사이트맵을 제출하는 데 문제가 있다면 아래의 다른 방법을 써 보세요.
{% endhint %}

### Google에 XML 사이트맵을 제출하는 다른 방법

권장 방법으로 제출하는 데 문제가 있다면 아래 방법을 쓸 수 있어요.

1. robots.txt 파일 아무 곳에나 사이트맵의 URL 경로를 넣으세요.

   예: https://www.yourdomain.com/sitemap.xml

2. "ping" 서비스로 Google에 사이트맵 크롤링을 요청하세요.

   아래와 같은 HTTP GET 요청을 보내세요: https://www.google.com/ping?sitemap=<complete\_url\_of\_sitemap>

   예: `https://www.google.com/ping?sitemap=https://www.example.com.sitemap.xml`

<!-- 검토 필요: 원문의 ping 예시 URL 형식(.sitemap>.xml)이 올바르지 않아 보임 -->
