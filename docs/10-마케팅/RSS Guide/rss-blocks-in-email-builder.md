---

번역일: 2026-04-07
카테고리: 10-마케팅 > RSS Guide
---

# 이메일 빌더의 RSS 블록

**목차**

- [개요](#개요)
- [사용법](#사용법)
  - [RSS 헤더](#rss-헤더)
  - [RSS 헤더의 기본 vs 커스텀](#rss-헤더의-기본-vs-커스텀)
- [RSS 아이템](#rss-아이템)
  - [RSS 아이템의 기본 vs 커스텀](#rss-아이템의-기본-vs-커스텀)
- [HTML 기반 RSS 피드](#html-기반-rss-피드)
- [예약 설정](#예약-설정)
  - [발송 옵션](#발송-옵션)
- [RSS 이메일 테스트](#rss-이메일-테스트)
- [RSS 캠페인 보기 및 편집](#rss-캠페인-보기-및-편집)

## 개요

Hyperclass 이메일 빌더의 RSS 요소(Elements)를 사용하면 새로운 RSS(Real Simple Syndication) 아이템이 게시될 때 동적으로 콘텐츠가 삽입된 이메일을 자동으로 발송할 수 있습니다.

## 사용법

### RSS 헤더

![RSS 헤더 블록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855351/original/vkt1WTZi4swPcywq_8ebw7FWUejefs3UTQ.png?1636131879)

RSS Header(RSS 헤더) 블록

RSS 피드의 `<channel>` 태그를 동적으로 가져옵니다([`<channel>` 태그에 대해 자세히 알아보기](http://www.landofcode.com/rss-tutorials/rss-channels.php)). RSS Header(RSS 헤더) 요소는 다음 RSS 채널 태그를 지원하며, 각각의 커스텀 값(Custom Value)을 사용해 이메일에 해당 태그 값을 표시할 수 있습니다:

| RSS 태그 | Hyperclass 커스텀 값 |
|----------|---------------------|
| `<title>` | `{{rss_feed.title}}` |
| `<description>` | `{{rss_feed.description}}` |
| `<link>` | `{{rss_feed.url}}` |
| `<lastBuildDate>` | `{{rss_feed.date}}` |

#### RSS 헤더의 기본 vs 커스텀

RSS Header(RSS 헤더) 블록을 사용할 때 "RSS Editing Options(RSS 편집 옵션)" 드롭다운에서 Basic(기본)과 Custom(커스텀) 두 가지 옵션을 볼 수 있습니다.

![RSS 편집 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855348/original/TXhqhCn_ybN6lz8F_4U1No7-vaLkA_Sj1w.png?1636131878)

- **Basic(기본)**: 텍스트 편집기에 다음과 같은 편집 불가능한 텍스트를 추가합니다:
  ```html
  <h1 class="h1">{{rss_feed.title}}</h1>
  {{rss_feed.description}}<br />
  <br />
  ```

- **Custom(커스텀)**: 텍스트 편집기에 다음과 같은 편집 가능한 텍스트를 추가합니다:
  ```html
  Updates from {{rss_feed.url}}
  <h1>{{rss_feed.title}}</h1>
  <strong>{{rss_feed.description}}</strong><br />
  <br />
  <strong>In the {{rss_feed.date}} edition:</strong><br />
  ```

**참고**: 4개의 커스텀 RSS `<channel>` 변수는 제목 필드에서도 사용할 수 있습니다:

![제목 필드의 RSS 변수](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855344/original/c2Vi4rUtLOvx56OiuS-hfAmtJXBuLF2hng.png?1636131877)

### RSS 아이템

RSS Items(RSS 아이템) 블록

RSS Items(RSS 아이템) 블록은 다음 커스텀 값들을 사용할 수 있으며, 해당하는 RSS 태그를 동적으로 삽입합니다:

| RSS 태그 | 커스텀 값 | 설명 |
|----------|-----------|------|
| `<title/>` | `{{rss_item.title}}` | RSS 아이템의 제목 (보통 블로그 포스트 제목) |
| `<description/>` | `{{rss_item.content}}` | HTML 형식의 RSS 아이템 요약. `<description>` 태그 내용을 표시하며, 태그가 없으면 `<content:encoded>` 태그 내용을 표시 |
| `<link/>` | `{{rss_item.url}}` | 온라인 RSS 아이템으로의 텍스트 링크. 텍스트로 표시하거나 하이퍼링크로 사용 가능 |
| `<content:encoded/>` | `{{rss_item.content_full}}` | HTML 형식의 `<content:encoded>` 태그 전체 내용. 태그가 없으면 `<description>` 태그 내용을 표시 |
| `pubDate` | `{{rss_item.date}}` | RSS 아이템 게시 날짜. `MMM DD, YYYY hh:mm A` 형식. 향후 커스텀 형식 지원 예정 |
| `<dc:creator>` | `{{rss_item.author}}` | RSS 아이템 작성자 |
| `<media:content>` | `{{rss_item.imageUrl}}` | 이미지의 src URL을 텍스트로 제공. 이미지로 렌더링하려면 `{{rss_img}}` 사용 |
|  | `{{rss_img alt="alt_text" src=rss_item.imageUrl height="200" width="200"}}` | 이미지 렌더링을 위한 태그 |
| `<item>` | `{{#rss_items rss_items}}` | 개별 RSS 아이템의 커스텀 형식을 여는 태그 (내용 표시 안 함) |
| `</item>` | `{{/rss_items}}` | 개별 RSS 아이템의 커스텀 형식을 닫는 태그 (내용 표시 안 함) |

#### RSS 아이템의 기본 vs 커스텀

RSS Items(RSS 아이템) 블록을 사용할 때 "RSS Editing Options(RSS 편집 옵션)" 드롭다운에서 Basic(기본)과 Custom(커스텀) 두 가지 옵션을 볼 수 있습니다.

![RSS 아이템 편집 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855347/original/L0LyUj9IorHU0sZYjFppVorh01rAx3ll6A.png?1636131878)

- **Basic(기본)**: 텍스트 편집기에 다음과 같은 편집 불가능한 형식 텍스트를 추가합니다:
  ```html
  {{#rss_items rss_items}}
  <h2 class="mc-toc-title"><a href="{{rss_item.url}}" target="_blank">
  {{rss_item.title}}
  </a> </h2>
  {{rss_item.content}}
  <br />
  <a href="{{rss_item.url}}" target="_blank">Read on &raquo;</a><br />
  <br />
  {{/rss_items}}
  ```

- **Custom(커스텀)**: 다음과 같은 편집 가능한 형식 텍스트를 추가합니다:
  ```html
  {{#rss_items rss_items}}
  <h2 class="mc-toc-title"><a href="{{rss_item.url}}" target="_blank">{{rss_item.title}}</a></h2>
  <em>By {{rss_item.author}} on {{rss_item.date}}</em><br />
  {{rss_item.content_full}}<br />
  <a href="{{rss_item.url}}" target="_blank">Read in browser &raquo;</a><br />
  <br />
  {{/rss_items}}<br />
  <br />
  <br />
  <h3 class="h3">Recent Articles:</h3>
  {{#rss_items rss_items}}
  ```

## HTML 기반 RSS 피드

RSS 기반 커스텀 변수 `{{rss_item.title}}`에서 반환되는 값은 HTML 이스케이프 처리됩니다. 예를 들어, 표현식에 `&`가 포함되어 있으면 HTML 이스케이프된 출력이 `&amp;`로 생성되거나, RSS 피드에 일반 텍스트 대신 HTML 기반 텍스트가 있으면 일반 텍스트로 렌더링됩니다.

값의 이스케이프 처리를 원하지 않는다면 "triple-stash" `{{{`를 사용하세요:

예: RSS 피드 소스가 다음과 같다면

![HTML 기반 RSS 피드 소스](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855360/original/uPxMn189zEmr7WCh_6qYv6DAQ_WrxdccDA.png?1636131880)

"triple-stash" 없이는 다음과 같이 렌더링됩니다:

![이스케이프 처리된 렌더링](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855357/original/78KNj092LUO9cZRouzUlv84qXhEsZtHv3g.png?1636131879)

"triple-stash" `{{{rss_item.content}}}`를 사용하면 다음과 같이 렌더링됩니다:

![정상 렌더링](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855364/original/BojThSBQRv2EsNKXzmCAgxdVL1HDID98HA.png?1636131880)

## 예약 설정

RSS 피드 기반 이메일을 예약하려면:

- "Send or Schedule(발송 또는 예약)" 탭으로 이동합니다
- "RSS Email Campaign(RSS 이메일 캠페인)" 발송 옵션을 선택합니다
- "Campaign Name(캠페인 이름)" 필드에 캠페인 이름을 입력합니다
- "RSS Feed URL(RSS 피드 URL)" 필드에 RSS 피드 URL을 붙여넣습니다

![RSS 이메일 캠페인 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855359/original/SpMiwm3Uo4icKGEWl86NUztsGxQIVOojtg.png?1636131880)

### 발송 옵션

- **"When we should send(언제 발송할지)"**: RSS 이메일을 매일, 매주 또는 매월 발송할지와 몇 시에 발송할지 결정할 수 있습니다
- **Send on(발송 요일)**: 캠페인을 발송할 요일을 선택할 수 있습니다

모든 입력 필드와 수신자를 입력하면, Review and Send(검토 및 발송) 사이드 패널에서 다음과 같은 새로운 정보를 볼 수 있습니다:

- Email type(이메일 유형)
- RSS Feed URL(RSS 피드 URL)
- Repeat After(반복 주기)

![검토 및 발송 패널](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855354/original/MU4iPH7O-wwTKti8UnJOm1i-OjBLL0oviw.png?1636131879)

## RSS 이메일 테스트

RSS 요소가 포함된 이메일에서 "Send Test Email(테스트 이메일 발송)" 기능을 사용하면, 콘텐츠를 가져올 RSS 피드 URL을 입력해야 하는 새로운 "RSS Feed URL(RSS 피드 URL)" 필드가 나타납니다. 이 필드 없이는 모든 RSS 태그 기반 커스텀 변수가 빈 텍스트로 대체됩니다.

![RSS 이메일 테스트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855353/original/ngePuhb-X4mSVnHZA5POqiWBBo9VYF65NQ.png?1636131879)

**참고**: RSS 요소 기반 이메일 템플릿을 일반 예약 옵션(지금 발송, 나중에 예약, 드립 모드로 발송)을 통해 예약하려고 하면, 모든 RSS 태그 기반 커스텀 변수가 빈 텍스트로 대체됩니다.

## RSS 캠페인 보기 및 편집

예약된 RSS 캠페인은 Scheduled(예약됨) 탭에서 확인할 수 있으며, 유형이 RSS로 표시됩니다. 다른 예약 이메일(지금 발송, 나중에 예약, 드립 모드로 발송)의 경우 유형이 Normal(일반)로 표시됩니다.

![예약된 RSS 캠페인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855356/original/8LsOBEXvUvsrD9m6DAUbFnIGnga6WRbVDQ.png?1636131879)

위 예시는 매일 발송되도록 설정된 RSS 이메일이며, Next Execution(다음 실행) 시간이 오후 2시임을 볼 수 있습니다. 오후 2시 이메일이 발송되면 완료로 표시되고, 동일한 구성(RSS 피드 URL, 매일 발송)으로 다음 날 새로운 예약/실행이 스케줄링됩니다.

### 액션

RSS 유형 예약에서는 다음 작업을 수행할 수 있습니다:

- **Edit(편집)**: 연필 아이콘을 클릭해 편집하면, 현재 예약된 이메일을 취소하고 새로 예약하겠다는 확인 모달이 나타납니다.

![편집 확인 모달](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855352/original/o--HIRT2KbBv-OrhGrqfaPrTLEZw1T2Wsw.png?1636131879)

- Confirm(확인)을 클릭하면 현재 예약이 취소되고, 현재 취소된 예약 정보가 미리 채워진 RSS 예약 옵션과 함께 이메일 빌더가 열립니다.

![편집 모드 이메일 빌더](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855361/original/-VqGcwC_5HX3QI-gngmW-H9NmIDY_i7yWg.png?1636131880)

- **Pause/Resume(일시정지/재개)**: Pause/Resume(일시정지/재개) 액션을 통해 실행을 일시정지하고 재개할 수 있습니다
- **Delete(삭제)**: RSS 예약을 삭제할 수 있습니다. 삭제하면 먼저 예약이 취소되고 시스템에서 영구적으로 삭제됩니다

---
*원문 최종 수정: Wed, 25 May, 2022 at 2:33 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*