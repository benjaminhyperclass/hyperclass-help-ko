---

번역일: 2026-04-06
카테고리: 06-사이트
---

# XML 사이트맵

목차

- [XML 사이트맵이란?](#xml-사이트맵이란)
- [XML 사이트맵이 필요한가요?](#xml-사이트맵이-필요한가요)
- [Hyperclass에서 XML 사이트맵 설정 찾기](#hyperclass에서-xml-사이트맵-설정-찾기)
- [Hyperclass에서 XML 사이트맵 생성/변경하기](#hyperclass에서-xml-사이트맵-생성변경하기)
- [구글에 사이트맵 제출하는 방법](#구글에-사이트맵-제출하는-방법)
  - [Search Console 사이트맵 리포트로 구글에 제출하기](#search-console-사이트맵-리포트로-구글에-제출하기)
- [1단계: 사이트맵 리포트 열기](#1단계-사이트맵-리포트-열기)
- [2단계: 구글 서치 콘솔에 속성 추가](#2단계-구글-서치-콘솔에-속성-추가)
- [3단계: 새 속성(도메인) 확인](#3단계-새-속성도메인-확인)
- [4단계: 사이트맵 탭으로 이동](#4단계-사이트맵-탭으로-이동)
- [5단계: XML 사이트맵 제출](#5단계-xml-사이트맵-제출)
- [구글에 XML 사이트맵을 제출하는 다른 방법들](#구글에-xml-사이트맵을-제출하는-다른-방법들)

---

# XML 사이트맵이란?

사이트맵은 사이트의 페이지와 페이지 간 관계에 대한 정보를 제공하는 파일입니다.

구글과 같은 검색 엔진은 사이트맵을 읽어 사이트를 더 효율적으로 크롤링합니다. 사이트맵은 구글에 어떤 페이지가 중요한지 알려주고, 페이지가 언제 마지막으로 업데이트됐는지, 얼마나 자주 변경되는지, 다른 언어 버전이 있는지 등 유용한 정보를 제공합니다.

## XML 사이트맵이 필요한가요?

**구글에 따르면:**
"사이트 페이지가 제대로 연결되어 있다면, 구글은 보통 대부분의 사이트를 찾을 수 있습니다. 그래도 사이트맵은 더 크거나 복잡한 사이트, 또는 전문화된 파일의 크롤링을 향상시킬 수 있습니다. 사이트맵을 사용한다고 해서 사이트맵의 모든 항목이 크롤링되고 색인화될 것을 보장하지는 않습니다. 구글의 프로세스는 복잡한 알고리즘으로 크롤링 일정을 결정하기 때문입니다. 하지만 대부분의 경우 사이트맵이 있으면 도움이 되고, 사이트맵이 있어서 불이익을 받는 일은 없습니다."

다음의 경우 사이트맵이 필요할 수 있습니다:
- 사이트가 매우 큰 경우: 구글 웹 크롤러가 새 페이지나 최근 업데이트된 페이지를 놓칠 가능성이 높습니다.
- 서로 고립되어 있거나 잘 연결되지 않은 콘텐츠 페이지가 많은 경우: 사이트 페이지가 서로 자연스럽게 참조하지 않는다면, 사이트맵에 나열하여 구글이 일부 페이지를 놓치지 않도록 할 수 있습니다.
- 사이트가 새롭고 외부 링크가 거의 없는 경우: 구글봇과 다른 웹 크롤러는 한 페이지에서 다른 페이지로의 링크를 따라 웹을 크롤링합니다. 따라서 다른 사이트에서 링크하지 않으면 구글이 페이지를 발견하지 못할 수 있습니다.
- 리치 미디어 콘텐츠(동영상, 이미지)가 많거나 구글 뉴스에 표시되는 사이트인 경우: 제공된다면 구글은 적절한 경우 검색에서 사이트맵의 추가 정보를 고려할 수 있습니다.

다음의 경우 사이트맵이 필요하지 않을 수 있습니다:

- 사이트가 "작은" 경우: 작다는 것은 사이트에 약 500페이지 이하를 의미합니다. (검색 결과에 나타나야 한다고 생각하는 페이지만 이 총계에 포함됩니다.)
- Blogger나 Wix 같은 간단한 사이트 호스팅 서비스를 사용하는 경우: 미리 포맷된 페이지와 네비게이션 요소로 빠르게 사이트를 설정할 수 있는 서비스를 사용한다면, 서비스에서 자동으로 사이트맵을 생성할 수 있습니다. 서비스 문서에서 "사이트맵"을 검색해보세요.
- 사이트가 내부적으로 포괄적으로 링크되어 있는 경우: 구글이 홈페이지에서 시작하는 링크를 따라 사이트의 모든 중요한 페이지를 찾을 수 있다는 뜻입니다.
- 색인에 표시되어야 하는 미디어 파일(동영상, 이미지)이나 뉴스 페이지가 많지 않은 경우: 구글 검색 결과에 나타나기를 원한다면 사이트맵이 구글이 사이트의 동영상, 이미지 파일 또는 뉴스 기사를 찾고 이해하는 데 도움이 됩니다. 이미지, 동영상 또는 뉴스 결과에 나타날 필요가 없다면 사이트맵이 필요하지 않을 수 있습니다.

---

## Hyperclass에서 XML 사이트맵 설정 찾기

XML 사이트맵을 찾으려면 하위 계정의 **사이트(SITES)** 섹션으로 이동하고 화면 우상단의 보조 네비게이션 메뉴에서 작은 톱니바퀴 아이콘을 클릭해야 합니다.

![하위 계정 사이트 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028203189/original/7hAUxf2LkT6AstyZJBbUH4Gp24clm_0KhQ.jpg?1719336652)

하위 계정 설정의 **도메인(DOMAINS)** 섹션으로 이동합니다. 메인 네비게이션에서 설정(SETTINGS)으로 이동한 후 화면 왼쪽의 **도메인(DOMAINS)**으로 스크롤해서도 이 섹션에 접근할 수 있습니다.

도메인(DOMAINS) 섹션에 들어가면, 이 하위 계정에 추가한 모든 도메인의 오른쪽 끝에 **"관리(Manage)"** 버튼이 표시됩니다. 이 3점 아이콘은 여기에 추가한 도메인의 "액션" 버튼입니다.

**중요:** 하위 계정에 도메인을 추가하지 않았다면, 화면에 관리(Manage) 옵션이 표시되기 전에 도메인을 먼저 추가해야 합니다.

![도메인 관리 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048641628/original/Wg4b6AF9isKFOhHgNSLyKJzMDHT7x0zctQ.png?1750444427)

클릭하면 해당 도메인의 연결된 제품(Connected Products) 페이지로 이동합니다. 원하는 자산 옆의 3점 아이콘을 클릭하세요. 여기서 수행할 수 있는 다양한 액션을 볼 수 있습니다. 이 액션 중 하나가 **"XML 사이트맵(XML Sitemap)"** 입니다. 도메인의 XML 사이트맵을 추가, 변경 또는 삭제하려면 이 액션을 클릭해야 합니다.

![XML 사이트맵 액션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048641649/original/79ydb6NnmEKM4GQ4xVeUgfdxpjFUg92PiQ.png?1750444483)

XML 사이트맵 액션 버튼을 클릭하면 해당 도메인에 연결된 모든 웹사이트와 퍼널 목록이 표시됩니다.

Hyperclass에서는 같은 도메인에 여러 다른 웹사이트와 퍼널을 연결할 수 있으므로, XML 사이트맵을 설정할 때 주의해야 합니다. 구글이 크롤링하고 해당 도메인과 연결하기를 원하는 웹사이트와 퍼널 페이지만 선택하세요.

![웹사이트와 퍼널 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028203375/original/0X-bHKG6NO-jMM_lDYYhTprtewxbG2xDjg.jpg?1719336858)

이 화면에서 웹사이트와 퍼널을 볼 때 이해해야 할 몇 가지 중요한 요소들이 있습니다:

- **연결된 웹사이트와 퍼널:** 이 도메인에 연결된 웹사이트와 퍼널은 연한 파란색 사각형 아코디언 드롭다운으로 서로 구분됩니다.

- **웹사이트와 퍼널 이름:** 웹사이트 또는 퍼널의 이름이 이 사각형 아코디언 드롭다운에 표시됩니다.

- **체크박스:** 웹사이트 또는 퍼널 이름 왼쪽에 있는 체크박스를 사용하면 전체 웹사이트 또는 퍼널을 선택하고 모든 페이지를 XML 사이트맵에 추가할 수 있습니다.

- **화살표:** 웹사이트 또는 퍼널 오른쪽에 있는 화살표 아이콘을 클릭하면 해당 웹사이트 또는 퍼널과 연결된 모든 페이지를 볼 수 있어, 개별 페이지를 선택해서 XML 사이트맵에 추가할 수 있습니다. 이를 통해 XML 사이트맵과 관련하여 특정 페이지가 구글 봇에 의해 크롤링되지 않도록 할 수 있습니다.

![페이지 선택 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028207030/original/EdXaVXYzK1H7se1Pijk-6ZOJeZN9Svb88g.jpg?1719343717)

웹 페이지나 퍼널 페이지를 XML 사이트맵에 추가하지 않는다고 해서 검색 엔진이 절대 크롤링하지 않는 것은 아닙니다. 크롤링되지 않기를 원하는 페이지로 연결되는 하이퍼링크가 있다면, 다른 방법으로 해당 페이지에 대한 액세스를 제한해야 합니다.

[검색 엔진이 웹사이트나 퍼널 페이지를 크롤링하지 못하도록 차단하는 방법을 알아보려면 여기를 클릭하세요.](https://developers.google.com/search/docs/crawling-indexing/block-indexing)

---

## Hyperclass에서 XML 사이트맵 생성/변경하기

첫 번째 사이트맵을 생성하거나 기존 사이트맵을 편집하려면, 먼저 XML 사이트맵 구성 마법사에서 웹사이트 또는 퍼널 오른쪽의 화살표를 클릭해야 합니다.

XML 사이트맵 설정을 어디서 찾는지 모르신다면, 이 글의 위쪽으로 스크롤하거나 ["Hyperclass에서 XML 사이트맵 설정 찾기"](#hyperclass에서-xml-사이트맵-설정-찾기)를 클릭하세요.

![사이트맵 구성 시작](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028203388/original/stOcTV-S0t-6MlhPaZQ-H6PAJxGr7Xdfuw.jpg?1719336875)

XML 사이트맵에 추가하려는 웹사이트 또는 퍼널 페이지를 선택하세요. 같은 도메인에 여러 다른 웹사이트 및/또는 퍼널을 연결할 수 있으므로, 다음 단계로 진행하기 전에 XML 사이트맵에 추가하려는 모든 페이지를 선택했는지 확인하세요.

다음 단계로 넘어갈 준비가 되면 웹사이트와 퍼널 목록 하단의 "계속(Proceed)" 버튼을 클릭하세요.

![페이지 선택 후 계속](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028203405/original/fJDKPCnBaWE7PiAtuTEuGURkML1NmqkdDA.jpg?1719336885)

이 도메인에 대해 과거에 XML 사이트맵을 생성한 적이 없다면 이와 같은 메시지가 표시됩니다. 첫 번째 사이트맵을 생성하려면 "새로 추가(Add New)" 버튼을 클릭하세요.

![첫 사이트맵 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028207578/original/NDrxoMlOJMXrVqZCR-gFk8O3uYn_ZyasdQ.jpg?1719345051)

XML 사이트맵에 포함할 페이지를 선택한 후, 아래와 같은 팝업이 표시됩니다. 이 팝업에는 다음이 포함됩니다:

- **XML 사이트맵 목록:** 이 목록에는 이 도메인에 대해 생성된 모든 XML 사이트맵이 표시됩니다. XML 사이트맵이 두 개 이상 있다면 목록에 여러 개가 표시됩니다.

- **커스텀 경로:** XML 사이트맵이 생성될 때 할당되는 커스텀 URL 경로입니다. 구성 가능하며 언제든지 변경할 수 있습니다. 이 URL 경로를 변경한다면 구글이 크롤링할 수 있도록 사이트맵을 다시 제출해야 합니다.

- **마지막 수정일:** 사이트맵이 마지막으로 수정된 날짜를 나타냅니다. 페이지를 추가하거나 제거하거나 커스텀 URL 경로를 변경하여 XML 사이트맵을 수정할 수 있습니다.

- **3점 액션 버튼:** 이 액션 버튼을 통해 XML 사이트맵을 편집(EDIT)하거나 삭제(DELETE)할 수 있습니다.

![사이트맵 설정 팝업](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028207585/original/7wSotkqPEYQfo1EZ2Sp-1Z8UzFfxOeRwLA.jpg?1719345085)

XML 사이트맵에 만족하면 **"생성 및 저장(Generate & Save)"** 버튼을 클릭하여 생성 또는 편집을 완료하세요. 아래와 같은 메시지가 표시되어 사이트맵이 생성되었음을 확인하고 새 XML 사이트맵의 URL을 알려줍니다.

![사이트맵 생성 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028203467/original/QJ-ZUB9aKox93DGRsbqxJuL3FlLcyDTppg.jpg?1719336941)

---

## 구글에 사이트맵 제출하는 방법

구글은 사이트가 크롤링될 때마다 사이트맵을 확인하지 않습니다. 사이트맵은 구글이 처음으로 발견할 때만 확인되고, 그 이후에는 사이트맵이 변경되었다고 구글에 알릴 때만 확인됩니다. 사이트맵이 새롭거나 업데이트되었을 때만 구글에 알려야 하며, 변경되지 않은 사이트맵을 여러 번 제출하거나 핑하지 마세요.

### Search Console 사이트맵 리포트로 구글에 제출하기

구글에서는 "사이트맵 리포트"와 구글 서치 콘솔을 사용하여 사이트맵을 제출할 것을 권장합니다. 이 방법을 사용하면 다음과 같은 사이트맵에 대한 많은 데이터와 인사이트를 얻을 수 있습니다:

- 활성 상태
- 총 크롤링된 페이지 수
- 크롤링 오류
- 기타 등등!

구글의 사이트맵 리포트를 사용하여 사이트맵을 제출하는 단계를 살펴보겠습니다!

### 1단계: 사이트맵 리포트 열기

이 링크([https://support.google.com/webmasters/answer/7451001](https://support.google.com/webmasters/answer/7451001))를 클릭하여 구글의 "서치 콘솔 도움말" 센터, 특히 사이트맵 리포트 링크가 포함된 페이지로 이동하세요. 이 페이지에서 "사이트맵 리포트 열기(Open Sitemaps Report)" 버튼을 클릭하세요.

![사이트맵 리포트 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028207841/original/I9M8E8eDbYou2YqFLXFS6w_XDLA0Jue09g.jpg?1719345698)

### 2단계: 구글 서치 콘솔에 속성 추가

구글 서치 콘솔 계정에 연결된 속성(웹사이트 도메인)이 없다면 추가해야 합니다.

이미 구글 서치 콘솔 속성이 구성되어 있다면 여기를 클릭하여 이 과정에서 몇 단계 건너뛸 수 있습니다!

![속성 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028207952/original/p2d6kwBwKXXfgMCq1sIiz1yw7X1vdhWidQ.jpg?1719345986)

![속성 추가 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028208053/original/C0vn8aXCw1YxJ2_qfXnGMDLqrkUZAS5HTw.jpg?1719346256)

### 3단계: 새 속성(도메인) 확인

속성을 추가한 후에는 구글이 해당 도메인과 관련된 모든 서치 콘솔 데이터를 수집하고 표시할 수 있도록 확인해야 합니다.

![도메인 확인 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028208061/original/1C7I_-hHzr6ip6Eu_eg9u4e9POM6wGVKGg.jpg?1719346280)

![도메인 확인 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028208138/original/sdgUfisTQl2cwJMZ3hOD41LwUrW6ffaBtw.jpg?1719346400)

![도메인 확인 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028208145/original/rm1cTC6-EdqzTw2JFnG8rBPPmbieRrMhcQ.jpg?1719346422)

### 4단계: 사이트맵 탭으로 이동

사이트맵을 제출하려면 구글 서치 콘솔의 "사이트맵(Sitemaps)" 섹션으로 이동해야 합니다.

![사이트맵 탭으로 이동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028208316/original/P0u7A3O7cKKd994VpTIh1c--VYEhKOi-ng.jpg?1719346705)

### 5단계: XML 사이트맵 제출

구글에 XML 사이트맵을 제출하려면 사이트맵의 URL이 필요합니다. Hyperclass는 하위 계정에서 사이트맵을 생성하거나 편집한 후 이를 제공합니다. 사이트맵의 URL 경로를 가져와서 여기에 추가하세요.

일반적으로 Hyperclass에서 생성된 XML 사이트맵의 URL 경로는 **"sitemap.xml"** 입니다.

이는 변경될 수 있으므로 구글에 성공적으로 제출하기 위해 URL 경로를 확인하세요.

![사이트맵 제출](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028208317/original/dZNOjQAmXfyigbKpEUAQVGbngoLsh-FGUg.jpg?1719346721)

구글에 XML 사이트맵을 성공적으로 제출한 후에는 구글 봇이 사이트를 크롤링할 때까지 기다려야 사이트맵과 관련된 데이터를 볼 수 있습니다. 사이트가 크롤링되면 구글과 다른 검색 엔진이 사이트와 어떻게 상호작용하고 크롤링하는지 더 잘 이해하는 데 도움이 되는 유용한 데이터를 많이 볼 수 있습니다.

이 정보는 구글 서치 콘솔의 "페이지(Pages)" 섹션에서 찾을 수 있으며, 사이트맵 목록에서 XML 사이트맵 오른쪽의 3점 액션 버튼을 클릭하여 "사이트맵(Sitemaps)" 섹션에서도 액세스할 수 있습니다.

![사이트맵 데이터 확인 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028208437/original/YbAlceUOOTXuu9IyzixEHqfdldXxbLUWCA.jpg?1719346971)

![사이트맵 데이터 확인 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028208359/original/R6R_yp3xPX_W_GgNt5LySMg4xolq9GwMzg.jpg?1719346823)

권장 방법으로 구글에 사이트맵을 제출하는 데 문제가 있다면 다음 대체 방법을 사용할 수 있습니다!

### 구글에 XML 사이트맵을 제출하는 다른 방법들

권장 방법으로 구글에 사이트맵을 제출하는 데 문제가 있다면 이러한 대체 방법을 사용할 수 있습니다:

**1. robots.txt 파일의 아무 곳에나 사이트맵 URL 경로를 삽입하세요.**

예시: https://www.yourdomain.com/sitemap.xml

**2. "핑(ping)" 서비스를 사용하여 구글에 사이트맵 크롤링을 요청하세요.**

다음과 같은 HTTP GET 요청을 보내세요: https://www.google.com/ping?sitemap=<complete_url_of_