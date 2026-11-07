---
원문: https://help.gohighlevel.com/support/solutions/articles/48001201780-how-to-use-rss-blocks-in-the-email-builder
번역일: 2026-11-06
카테고리: 10-마케팅
---

# 이메일 빌더에서 RSS 블록 사용하기

RSS 블록을 쓰면 블로그 글이나 피드 업데이트를 하이퍼클래스 이메일 빌더로 만든 이메일에 자동으로 넣을 수 있어요. 피드 정보는 **RSS Header**(RSS 헤더) 블록으로, 개별 글은 **RSS Items**(RSS 항목) 블록으로 보여 줘요. 준비된 레이아웃을 고르거나, 지원되는 RSS 변수로 직접 꾸밀 수도 있어요. 이 문서에서는 설정, 테스트, 그리고 RSS 내용이 채워지려면 꼭 필요한 발송 옵션을 안내해요.

## RSS 블록이란?

**RSS(Really Simple Syndication)** 는 웹사이트가 새 소식을 공유할 때 쓰는 형식이에요. 하이퍼클래스에는 RSS 피드 데이터를 캠페인에 넣어 주는 이메일 블록이 두 가지 있어요.

- **RSS Header:** 피드의 제목, 설명 같은 피드 전체 정보를 보여 줘요.
- **RSS Items:** 개별 글의 제목, 발췌문, 링크 등 사용할 수 있는 항목을 보여 줘요.

블록은 하나만 써도 되고 둘 다 써도 돼요. 블록은 내용을 채워 주는 역할만 하고, 캠페인이 언제 발송될지는 **RSS Schedule**(RSS 발송 일정)이 정해요. 블록을 추가했다고 해서 글이 게시되는 순간 이메일이 바로 나가지는 않아요.

## RSS 블록의 장점

RSS 블록을 쓰면 정기적으로 올라오는 콘텐츠를 뉴스레터마다 새로 만들지 않고, 이메일 레이아웃 하나를 계속 재사용할 수 있어요.

- 동적 콘텐츠: 예약된 이메일에 피드 업데이트를 넣을 수 있어요.
- 유연한 레이아웃: 제목, 발췌문, 이미지, 전체 콘텐츠 또는 사용자 지정 레이아웃 중에서 고를 수 있어요.
- 일관된 디자인: 피드 내용을 이메일 템플릿의 디자인에 맞춰 보여 줘요.
- 수작업 감소: 정기 글 모음 이메일에 같은 디자인을 다시 쓸 수 있어요.

## RSS Header 블록과 피드 변수

RSS Header는 피드 자체의 정보를 보여 줘요. 글 목록 위에 출처 이름이나 설명을 넣고 싶을 때 사용하세요.

| 피드 정보 | RSS 변수 |
| --- | --- |
| 피드 제목 | `{{rss_feed.title}}` |
| 피드 설명 | `{{rss_feed.description}}` |
| 피드 링크 | `{{rss_feed.url}}` |
| 마지막 빌드 날짜 | `{{rss_feed.date}}` |

**RSS Editing Options**(RSS 편집 옵션)에서 **기본**을 고르면 미리 만들어진 헤더가 나와요. **사용자 지정**을 고르면 헤더 내용을 직접 편집하고 위 값을 원하는 대로 배치할 수 있어요. 여기에 소개한 RSS Header 변수는 RSS 캠페인의 제목(subject)에도 쓸 수 있어요.

![RSS Header 블록의 편집 옵션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083453149/original/dHTJrdxVExSbMJnsKASCf3GRTFgrRF_LWA.png?1792091928)

## RSS Items 블록과 표시 옵션

RSS Items 블록은 피드에서 선택된 글마다 정보를 반복해서 보여 줘요. 받는 사람에게 얼마나 많은 내용을 보여 줄지에 맞춰 표시 옵션을 고르세요.

- **발췌문:** 각 글의 짧은 미리보기예요.
- **Excerpts with Image**(이미지가 있는 발췌문): 사용할 수 있는 이미지 데이터가 있으면 이미지와 함께 미리보기를 보여 줘요.
- **제목:** 글 제목만 간단한 목록으로 보여 줘요.
- **전체 콘텐츠:** 피드가 제공하는 글 전체 내용을 보여 줘요.
- **사용자 지정:** 지원되는 글 항목을 원하는 대로 배치해요.

사용자 지정 레이아웃에서는 다음 값을 쓸 수 있어요.

| 글 정보 | RSS 변수 |
| --- | --- |
| 제목 | `{{rss_item.title}}` |
| 요약/설명 | `{{rss_item.content}}` |
| 전체 콘텐츠 | `{{rss_item.content_full}}` |
| 글 링크 | `{{rss_item.url}}` |
| 게시일 | `{{rss_item.date}}` |
| 작성자 | `{{rss_item.author}}` |
| 이미지 URL | `{{rss_item.imageUrl}}` |

값은 원본 피드가 해당 정보를 제공할 때만 나타나요. `{{rss_item.imageUrl}}` 은 이미지 자체가 아니라 이미지 URL을 돌려줘요. 이미지가 들어간 프리셋을 쓰려면 **Excerpts with Image**를 고르세요. 사용자 지정 RSS 콘텐츠에서 이미지를 넣을 때는 `rss_img` 도우미도 쓸 수 있어요.

## 사용자 지정 RSS 레이아웃과 HTML 콘텐츠

어떤 피드 항목을 어떤 순서로 보여 줄지 직접 정하려면 **사용자 지정**을 사용하세요. 반복해서 나타나는 글 내용은 RSS Items의 여는 태그와 닫는 태그 사이에 들어가요.

```
{{#rss_items rss_items}}
<a href="{{rss_item.url}}">{{rss_item.title}}</a>
<p>{{rss_item.content}}</p>
{{/rss_items}}
```

위는 사용자 지정 RSS Items 레이아웃의 예시예요. 편집기가 반복 태그를 이미 넣어 두었다면 한 쌍을 더 추가하지 말고 그대로 두세요.

RSS 텍스트에 `<p>` 같은 HTML 태그가 글자 그대로 보일 때가 있어요. 이럴 때는 **사용자 지정** RSS Items 블록에서 `{{{rss_item.content}}}` 처럼 중괄호 세 개를 쓰면 HTML을 변환 없이 그대로 표시할 수 있어요.

{% hint style="warning" %}
**중요:** 변환 없는 HTML은 믿을 수 있는 피드에서만 쓰고, 결과를 꼭 테스트하세요. 중괄호 세 개를 써도 잘못되었거나 없는 **RSS 피드 URL** 문제는 해결되지 않아요.
{% endhint %}

## 이메일 빌더에서 RSS 블록 설정하기

먼저 접근할 수 있는 RSS 피드 URL을 준비하세요. 그다음 **디자인 에디터**에서 두 블록을 설정해 피드 정보와 개별 글이 원하는 순서로 나오게 해요.

1. **마케팅 > 이메일 > 템플릿**으로 이동한 뒤, 기존 템플릿을 열거나 **디자인 에디터**에서 새 템플릿을 만드세요.
2. 피드 전체 정보를 보여 주려면 **요소 추가(+)** 를 열고 **RSS Header**를 디자인으로 끌어다 놓으세요.
3. 헤더 블록을 선택하고 **RSS Editing Options**에서 **기본** 또는 **사용자 지정**을 고르세요.

![RSS Header 편집 옵션과 헤더 미리보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083453360/original/4di7CYr0erbvO8QytOzmxp0BGA0zr6-ZCA.png?1792092394)

*RSS Header 편집 옵션과 헤더 미리보기*

4. **요소 추가(+)** 에서 **RSS Items**를 헤더 아래로 끌어다 놓으세요. 글만 보여 주고 싶다면 RSS Items만 써도 돼요.
5. **RSS Items**를 선택하고 **발췌문**, **제목**, **사용자 지정** 같은 표시 옵션을 고르세요.

![RSS Items 표시 옵션 선택과 발췌문 미리보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083453542/original/nFK7gmqICjWkHK7dOb_eZCJEWg1vqT1JxQ.png?1792092602)

*RSS Items 표시 옵션 선택과 발췌문 형태 미리보기*

6. **사용자 지정** 레이아웃을 쓴다면 지원되는 RSS 항목을 원하는 대로 배치하세요. 기존 RSS Items 반복 태그는 그대로 두세요.
7. 사용할 수 있는 서식과 여백을 조정한 뒤 템플릿을 저장하세요.

## RSS 블록이 들어간 이메일 테스트하고 보내기

**미리보기**로는 디자인을 확인하고, **테스트 이메일**로는 RSS 변수가 실제 피드 내용으로 바뀌는지 확인해요. 실제 RSS 캠페인을 보낼 때는 **RSS Schedule**을 사용하세요.

![이메일 편집 화면에서 미리보기와 테스트 이메일을 여는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083452873/original/b3vrYGAZGGbbjyHHl8MWzrOjUIemVfpknA.png?1792091318)

1. 편집기에서 **미리보기**를 선택해 데스크톱, 태블릿, 모바일 레이아웃을 확인하세요.
2. **미리보기** 옆의 점 3개 메뉴를 열고 **테스트 이메일**을 선택하세요.
3. 필요한 이메일 정보를 입력하고, 테스트 이메일의 **RSS 피드 URL** 필드에 올바른 URL을 붙여 넣으세요.
4. 테스트 이메일을 보내세요. 받은편지함에서 글 제목, 날짜, 이미지, 링크, 서식이 제대로 나오는지 확인하세요.
5. 수신자에게 보내려면 RSS 블록이 들어간 디자인으로 **이메일 캠페인**을 만든 뒤 **Send or Schedule**(보내기 또는 예약) **> RSS Schedule**로 이동하세요.
6. **RSS 피드 URL**을 입력하고, 선택할 수 있는 발송 주기, 발송 시간, 최대 항목 수를 정하세요. 수신자를 확인한 뒤 예약하세요.

![RSS Schedule 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083454505/original/N0J5IuJmj5ucqZ_0GQpiS2QECT8TCp2X3w.png?1792093922)

{% hint style="warning" %}
**중요:** RSS 테스트에서 피드 URL을 넣지 않으면 RSS 변수가 비어 있을 수 있어요. 실제 RSS 이메일은 **Send Now**(지금 보내기), 일반 **일정**, **배치 일정**이 아니라 **RSS Schedule**로 보내세요. 안내된 대로라면 이런 일반 발송 방식에서는 RSS 변수가 채워지지 않아요.

캠페인 전체 설정과 관리 방법은 [RSS 이메일 캠페인 보내기](how-to-send-rss-email-campaign-s.md)를 참고하세요.
{% endhint %}

## RSS 블록 문제 해결

RSS 내용이 이상하게 보이면 피드, 선택한 블록 레이아웃, 발송 방식 중 어디가 원인인지 확인해 보세요.

- **RSS 필드가 비어 있어요:** 테스트 이메일이나 실제 RSS Schedule에 피드 URL이 들어 있는지 확인하세요.
- **글 이미지가 안 보여요:** 피드의 이미지 데이터와 선택한 RSS Items 레이아웃을 확인하세요.
- **HTML 태그가 글자로 보여요:** 중괄호 세 개를 쓰기 전에 피드 형식을 확인하고, RSS 이메일 본문에 HTML 태그가 보일 때의 문제 해결 안내를 살펴보세요.
- **어떤 주기에는 이메일이 발송되지 않았어요:** 새 피드 항목이 없으면 하이퍼클래스가 RSS 발송을 건너뛸 수 있어요. 캠페인의 감사 로그를 확인하세요.

## 자주 묻는 질문

### RSS Header와 RSS Items를 둘 다 추가해야 하나요?
아니요. RSS Header는 선택 사항이에요. 개별 글만 보여 주고 싶다면 RSS Items만 쓰세요.

### 하이퍼클래스 밖의 웹사이트 RSS 피드도 쓸 수 있나요?
네. 올바르고 접근할 수 있는 RSS 피드 URL을 사용하고, 보여 주고 싶은 글 정보가 피드에 들어 있는지 확인하세요.

### RSS 글에 작성자나 날짜가 없으면 어떻게 되나요?
원본 피드에 해당 항목이 없으면 그 값은 채워지지 않을 수 있어요. 피드를 확인하고 테스트 이메일을 보내 보세요.

### 최대 항목 수 설정은 이메일에 어떤 영향을 주나요?
RSS 캠페인에는 예약할 때 정한 최대 항목 수만큼, 사용할 수 있는 최신 글이 포함돼요.

### RSS 캠페인을 예약한 뒤에도 이메일 내용을 수정할 수 있나요?
네. 예약된 캠페인의 **작업 > 이메일 콘텐츠 업데이트** 옵션을 열고 내용을 수정한 뒤 저장하세요. 다음 발송 시간에 가까운 시점에 수정하면 제때 반영되지 않을 수 있어요.
