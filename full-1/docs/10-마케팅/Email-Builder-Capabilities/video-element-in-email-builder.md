---
원문: https://help.gohighlevel.com/support/solutions/articles/48001202776-video-element-in-email-builder
번역일: 2026-11-06
카테고리: 10-마케팅
---

# 이메일 빌더에서 동영상 요소 추가하기

이메일 안에 동영상을 직접 넣기는 어려워요. 이메일 앱마다 지원 범위가 달라서예요. 대신 **Video element**(동영상 요소)를 쓰면 동영상으로 연결되는 클릭형 썸네일을 넣을 수 있어요. 이 문서에서는 **이메일 빌더**(Email Builder)에서 동영상 요소를 찾는 방법과, 동영상 유형·썸네일·크기·여백을 설정하는 방법을 안내해요.

## 이메일 빌더의 동영상 요소란?

**Video element**를 쓰면 이메일에 동영상 미리보기를 넣을 수 있어요. 이메일 앱에서는 동영상이 직접 재생되지 않아요. 그래서 재생 버튼이 붙은 썸네일을 만들고, 이 썸네일을 클릭하면 동영상으로 바로 이동하게 해 줘요.

{% hint style="info" %}
주요 이메일 앱의 기술적 한계 때문에 아직은 이메일에 동영상을 직접 넣을 수 없어요. **Video element**는 동영상의 썸네일 이미지로 미리보기 이미지를 만들고, 재생 버튼을 얹은 뒤, 그 이미지에 동영상 URL을 링크로 걸어 줘요. 받는 사람이 이미지를 클릭하면 동영상으로 이동해요.
{% endhint %}

![이메일에 삽입된 동영상 썸네일 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082240611/original/lhPgxggQoUcsYjW8nnFFrf7wo0PxdRAnXg.png?1790790020)

## 동영상 요소 찾는 방법

{% hint style="info" %}
**Video element**는 **이메일 빌더**의 **디자인 에디터**와 **이메일 템플릿**에서만 쓸 수 있어요.
{% endhint %}

1. 서브 계정에 로그인하세요.
2. **마케팅 > 이메일**로 이동하세요.
3. **캠페인 만들기**를 클릭하고 **비어 있음**을 선택한 다음 **디자인 에디터**를 선택하세요. 기존 **이메일 템플릿**을 열어도 돼요.
4. 왼쪽에서 **Elements**(요소) 섹션의 **Video element**를 찾으세요.
5. **Video element**를 이메일 레이아웃으로 끌어다 놓으세요.

![동영상 요소를 이메일 레이아웃으로 끌어다 놓는 화면](https://jumpshare.com/v/bRaKnLTHrlbRQ7TOhiVS+/GIF+Recording+2025-07-24+at+12.22.48+AM.gif)

## 동영상 요소 설정

동영상 편집 창에서 아래 항목을 설정할 수 있어요.

**Video Type**(동영상 유형): YouTube, Vimeo, Wistia, HTML5 중에서 선택해요. 선택한 유형에 맞춰 시스템이 동영상 URL에서 썸네일을 가져오려고 시도해요. 재생 버튼도 해당 서비스의 테마에 맞게 바뀌어요. 예를 들어 YouTube는 빨간 배경에 흰색 재생 아이콘으로 표시돼요.

가져온 썸네일 이미지의 링크는 **썸네일 URL** 필드에 자동으로 들어가요.

![동영상 유형을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034043053/original/pmIhldlfN5JzLwwEFnb5gejDVQt6RacdZw.png?1727965929)

**동영상 URL**: 동영상의 URL을 입력하는 곳이에요.

![동영상 URL을 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032578329/original/9Hu32ssUvaGPoirOD3rcNmOJRtGyfjSpyw.jpg?1725961230)

동영상에서 썸네일 이미지를 가져오지 못하면 미리보기에 경고가 표시돼요. 예를 들어 YouTube 동영상 URL인데 동영상 유형을 Vimeo로 바꾸면, 에디터가 Vimeo 방식으로 썸네일을 가져오려고 해요. 이 방식으로는 가져올 수 없어서 경고가 나타나요.

![썸네일을 가져오지 못했을 때 나오는 경고](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032579468/original/izf8GtpyFyLuEI-ymahOnCNYxjMP8uMxJw.jpg?1725961804)

{% hint style="info" %}
썸네일 이미지를 가져오지 못해도 에디터는 이전에 가져온 이미지를 지우지 않아요. 그래서 썸네일이 없는 동영상에 원하는 이미지를 쓰고 싶다면, 먼저 마음에 드는 썸네일이 있는 동영상을 추가하세요. 그다음 동영상 URL을 바꾸면 첫 번째 동영상의 썸네일이 그대로 남아 있어요.
{% endhint %}

**썸네일 URL**: 위에서 설명한 대로 에디터가 선택한 동영상 유형에 맞춰 동영상 URL에서 기본 썸네일 이미지를 가져와 이 필드를 자동으로 채워 줘요. 직접 준비한 썸네일 이미지의 URL을 입력해서 바꿀 수도 있어요.

![썸네일 URL 필드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034043990/original/4MdFN1U8MwQmUyaQjZCC47m_1tGVSBdpeQ.png?1727966486)

- **교체** 버튼: 직접 만든 동영상 썸네일을 업로드해서 적용해요.
- **제거** 버튼: 기본 썸네일을 지워요.

**Width & Height**(너비와 높이): 동영상 크기를 정하는 입력란이에요. 크기를 입력하지 않으면 동영상이 전체 너비로 표시되고, 높이는 이미지 해상도에 맞춰 자동으로 정해져요.

![너비와 높이 입력란](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034043755/original/p0eBTrPq5tm8uZFgcqffKsk8qc1sdSKOJA.png?1727966380)

{% hint style="info" %}
높이와 너비를 직접 입력하면 동영상 요소는 기본적으로 항상 왼쪽에 정렬돼요. 이미지와 달리 **Align**(정렬) 속성으로는 위치를 맞출 수 없어요. 대신 여백을 조정하거나, 2열 또는 3열 레이아웃 안에 넣어서 위치를 맞출 수 있어요.
{% endhint %}

![너비와 높이를 지정한 동영상 요소 예시 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034043297/original/HCCEaKCWkXgSbSOTNleAcQkNwSPXqppi7Q.png?1727966091)

![너비와 높이를 지정한 동영상 요소 예시 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034043506/original/3KjF8wBXW79JthmMYEKoZAZ4eAjeAZIG5g.png?1727966217)

**여백**: 이 필드에서 동영상 요소의 여백을 정할 수 있어요. 적용된 모습은 아래 이미지에서 확인하세요.

![여백을 적용한 동영상 요소 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034044248/original/I-A7L_GPO82zQ0IAT5MaAnkIJ_Hafo-uUw.png?1727966649)
