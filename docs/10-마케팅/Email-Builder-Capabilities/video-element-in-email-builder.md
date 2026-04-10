---

번역일: 2026-04-07
카테고리: 10-마케팅 > 이메일 빌더 기능
---

# 이메일 빌더의 동영상 요소

이메일에 동영상을 삽입하는 것은 이메일 클라이언트의 지원 제한으로 인해 까다로울 수 있습니다. 하이퍼클래스의 동영상 요소(Video Element)는 동영상 콘텐츠로 연결되는 클릭 가능한 동영상 썸네일을 삽입할 수 있게 해서 이 문제를 해결합니다. 이 가이드에서는 이메일 빌더에서 동영상 요소를 사용하는 방법을 설명하며, 동영상 유형 선택, 썸네일 커스터마이징, 최적의 표현을 위한 레이아웃 설정 조정 방법을 포함합니다.

## 목차

- [이메일 빌더의 동영상 요소란 무엇인가요?](#what-is-video-element)
- [동영상 요소를 찾는 방법](#how-to-find-video-element)
- [동영상 편집기 설정](#video-editor-configurations)
- [관련 문서](#related-articles)

## 이메일 빌더의 동영상 요소란 무엇인가요? {#what-is-video-element}

하이퍼클래스 이메일 빌더(Email Builder)의 동영상 요소는 이메일 안에 동영상 미리보기를 추가할 수 있게 해줍니다. 실제 동영상 재생은 이메일 클라이언트에서 지원되지 않지만, 이 요소는 재생 버튼이 있는 클릭 가능한 썸네일을 만들어 동영상으로 직접 연결합니다.

**참고:** 모든 주요 이메일 클라이언트의 기술적 제약으로 인해 아직 이메일에 동영상을 직접 삽입할 수 없습니다. 동영상 블록은 단순히 (동영상의 썸네일 이미지를 사용해) 미리보기 이미지를 만들고, 재생 버튼을 추가한 다음, 이미지를 동영상 URL에 하이퍼링크로 연결합니다. 따라서 누군가 이미지를 클릭하면 해당 동영상으로 이동하게 됩니다.

## 동영상 요소를 찾는 방법 {#how-to-find-video-element}

**참고:** 동영상 요소는 하이퍼클래스 이메일 빌더의 디자인 편집기(Design Editor)와 이메일 템플릿(Email Templates) 내에서만 사용할 수 있습니다.

동영상 요소를 찾아서 사용하려면:

- 하위 계정에 로그인합니다.
- Marketing(마케팅) > Emails(이메일)로 이동합니다.
- + Create Campaign(+ 캠페인 만들기)을 클릭하고 Blank(빈 템플릿)을 선택한 다음 Design Editor(디자인 편집기)를 선택합니다.
- 또는 기존 이메일 템플릿을 엽니다.
- 왼쪽에서 Elements(요소) 섹션 아래에 있는 Video(동영상) 요소를 찾습니다.
- 동영상 요소를 드래그해서 이메일 레이아웃에 드롭합니다.

![동영상 요소 사용 방법](https://jumpshare.com/v/bRaKnLTHrlbRQ7TOhiVS+/GIF+Recording+2025-07-24+at+12.22.48+AM.gif)

## 동영상 편집기 설정 {#video-editor-configurations}

동영상 편집기는 다음과 같은 동영상 설정을 제공합니다.

**동영상 유형(Video Type):** 현재 YouTube, Vimeo, Wistia, HTML5의 4가지 옵션 중 선택할 수 있습니다. 선택한 동영상 유형에 따라 시스템이 동영상 URL에서 동영상 썸네일을 가져오려고 시도하고, 제공업체 테마에 따라 재생 버튼 스타일을 변경합니다 (예: YouTube의 경우 빨간 배경과 흰색 재생 아이콘으로 버튼이 표시됩니다).

썸네일 이미지 링크는 "Video Thumbnail URL(동영상 썸네일 URL)" 필드에 자동으로 나타납니다.

![동영상 유형 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034043053/original/pmIhldlfN5JzLwwEFnb5gejDVQt6RacdZw.png?1727965929)

**동영상 URL(Video URL):** 여기에 동영상의 URL을 입력해야 합니다.

![동영상 URL 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032578329/original/9Hu32ssUvaGPoirOD3rcNmOJRtGyfjSpyw.jpg?1725961230)

미리보기에서 동영상의 썸네일 이미지를 가져오지 못하면 경고가 표시됩니다 (예: YouTube 동영상 URL에 대해 동영상 유형을 Vimeo로 변경하면, 편집기가 Vimeo 로직에 따라 썸네일을 가져오려고 시도하는데 이는 작동하지 않으므로 경고가 표시됩니다).

![썸네일 가져오기 실패 경고](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032579468/original/izf8GtpyFyLuEI-ymahOnCNYxjMP8uMxJw.jpg?1725961804)

**참고:** 썸네일 이미지 가져오기에 실패해도 편집기는 이전에 가져온 이미지를 지우지 않습니다. 따라서 썸네일 이미지가 없는 이미지를 추가하고 싶다면, 먼저 원하는 썸네일 이미지를 가진 동영상을 추가한 다음, 동영상 URL을 변경하면 첫 번째 동영상의 썸네일 이미지가 그대로 남아있습니다.

**동영상 썸네일 URL(Video Thumbnail URL):** 위에서 언급했듯이, 편집기는 선택한 동영상 유형에 따라 동영상 URL에서 기본 썸네일 이미지를 가져와 이 필드를 자동으로 채우려고 시도하지만, URL을 추가해서 자신만의 썸네일 이미지를 제공할 수도 있습니다.

![썸네일 URL 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034043990/original/4MdFN1U8MwQmUyaQjZCC47m_1tGVSBdpeQ.png?1727966486)

Replace(교체) 버튼을 사용해서 커스텀 동영상 썸네일을 업로드하고 제공하세요.

Remove(제거) 버튼을 사용해서 기본 썸네일을 제거하세요.

**너비 및 높이(Width & Height):** 이 입력 필드를 통해 동영상의 크기를 제어할 수 있습니다. 크기가 추가되지 않으면 동영상은 전체 너비와 이미지 해상도에 따른 자동 높이로 표시됩니다.

![크기 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034043755/original/p0eBTrPq5tm8uZFgcqffKsk8qc1sdSKOJA.png?1727966380)

**참고:** 기본적으로 커스텀 높이와 너비를 제공하면 동영상 요소는 항상 왼쪽에 정렬됩니다. 이미지와 달리 Align 속성을 사용해서 정렬할 수 없지만, 패딩을 통하거나 2컬럼 또는 3컬럼 레이아웃 안에 감싸서 정렬할 수 있습니다.

![동영상 정렬 예시 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034043297/original/HCCEaKCWkXgSbSOTNleAcQkNwSPXqppi7Q.png?1727966091)

![동영상 정렬 예시 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034043506/original/3KjF8wBXW79JthmMYEKoZAZ4eAjeAZIG5g.png?1727966217)

**패딩(Padding):** 이 필드를 통해 동영상 요소에 패딩을 제공할 수 있습니다. 아래 이미지에서 실제 작동 모습을 확인하세요.

![패딩 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034044248/original/I-A7L_GPO82zQ0IAT5MaAnkIJ_Hafo-uUw.png?1727966649)

## 관련 문서 {#related-articles}

- [이메일 빌더와 인라인 에디터 사용 방법](how-to-use-the-email-builder-and-its-in-line-editor.md)
- 이메일 빌더의 스페이서 요소
- 테두리 커스터마이징: 색상, 모서리, 두께
- [일반 이메일 캠페인을 보내는 방법 (바로 보내기 또는 예약)](how-to-send-or-schedule-a-regular-email-campaign.md)

---
*원문 최종 수정: 2025년 10월 31일*
*Hyperclass 사용 가이드 — hyperclass.ai*