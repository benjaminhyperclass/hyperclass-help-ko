---

번역일: 2026-04-07
카테고리: 07-워크플로우 > Facebook/Instagram Events Workflow Triggers
---

# 워크플로우 트리거 - 인스타그램 게시물 댓글

이 트리거는 인스타그램 게시물에 댓글이 달렸을 때 실행됩니다.

**목차**

- [인스타그램 게시물 댓글 트리거란?](#인스타그램-게시물-댓글-트리거란)-On-A-Post?)
- [트리거 위치](#트리거-위치)
- [구성 요소](#구성-요소)
- [필터](#필터)
- [페이지 + 게시물 유형 + 게시물 설정](#페이지--게시물-유형--게시물-설정)
- [문구 포함 또는 정확히 일치](#문구-포함-또는-정확히-일치)
- [첫 번째 댓글만 추적](#첫-번째-댓글만-추적)
- [자주 묻는 질문](#자주-묻는-질문)

# 인스타그램 게시물 댓글 트리거란?

이 트리거는 인스타그램 게시물의 댓글이 설정한 필터 조건과 일치할 때 실행됩니다.

## 트리거 위치

Automations(자동화) > Workflows(워크플로우) > Workflow Builder(워크플로우 빌더) > Triggers(트리거) > Facebook/Instagram Events로 이동하세요.

![트리거 메뉴 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041830962/original/L9pXyb2ALo5ULdcFeYUy0T6VYpOyoO-wRw.jpeg?1739902001)

![인스타그램 댓글 트리거 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041831350/original/46MFAXXN7ivLHEZi5jJITh3R3RFPEcN9zw.png?1739902649)

## 구성 요소

인스타그램 게시물 댓글 워크플로우 트리거는 4가지 주요 구성 요소가 있습니다:

- Choose A Workflow Trigger(워크플로우 트리거 선택): 기본적으로 이 트리거로 설정되어 있습니다. 원하면 다른 트리거로 변경할 수 있습니다.
- Workflow Trigger Name(워크플로우 트리거 이름): 기본적으로 트리거 이름이 표시됩니다. 워크플로우에서 더 명확하게 보이도록 이름을 편집할 수 있습니다.
- Filters(필터): 적절한 상황에서 트리거가 실행되는 기준을 선택하는 곳입니다. 자세한 내용은 다음 섹션에서 설명합니다.
- Track First Level Comments Only(첫 번째 댓글만 추적): 이 토글을 끄면 모든 대댓글에 대해서도 트리거가 실행됩니다. 토글을 켜면 첫 번째(최상위) 댓글에서만 트리거가 실행되고, 그 댓글의 대댓글에서는 실행되지 않습니다.

![트리거 구성 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041831384/original/6Ce-Rwd62Mg6NBY35w_eh41WpIfq_p66-w.png?1739902707)

## 필터

필터에 대한 자세한 설명:

| 필터 레벨 1 | 옵션 |
|-------------|------|
| Page Is | 계정의 페이지 목록 |
| Post Type | Published Post(발행된 게시물 - 비즈니스 페이지의 모든 게시물)<br>Custom Post(커스텀 게시물 - URL 직접 입력) |
| Post Is | Page Is + Post Type 설정과 일치하는 게시물 목록 |
| Contains Phrase | 문구 = "구매했어요"<br>댓글 = "어제 구매했어요" → 통과<br>댓글 = "하나 구매했어요" → 실패<br>댓글 = "얼마인가요" → 실패 |
| Exact Match | 문구 = "구매했어요"<br>댓글 = "구매했어요" → 통과<br>댓글 = "어제 구매했어요" → 실패<br>댓글 = "하나 구매했어요" → 실패 |

### 페이지 + 게시물 유형 + 게시물 설정

먼저 Page Is에서 페이지를 선택하고, Post Type에서 게시물 유형을 선택한 다음, Post Is에서 구체적인 게시물을 선택하세요.

1단계: 페이지 선택. Standard Fields(표준 필드) > Page Is를 선택한 후 목록에서 페이지를 선택하세요.

![페이지 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041831411/original/8CdKJJyt-KHiyQ9u9FFZEPG_LDKCS1Nl3A.png?1739902781)

![페이지 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041831479/original/tvHzg5VvNtl1or3g4RyJUsQETiIrz9dEAA.png?1739902917)

2단계: 게시물 유형 선택. Published Post를 선택해서 목록에서 고르거나, Custom Post를 선택해서 URL을 직접 입력하세요.

![게시물 유형 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041830957/original/5smhFAlN2W3h3Ufg9WrD7zVrqb_7LWtvAw.jpeg?1739902001)

3단계: 구체적인 게시물 식별. Published Post를 사용했다면 목록에서 선택하고, Custom Post를 사용했다면 직접 URL을 입력하세요.

![게시물 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041830959/original/QgLcGzSJlU_yu4JQsPGv92RDNLxdUPAEtQ.jpeg?1739902002)

![URL 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041830961/original/tOlAMbpzythpz_CBJFtWIpYNC06JaKsy9A.jpeg?1739902002)

### 문구 포함 또는 정확히 일치

구체적인 게시물을 식별한 후에는 Contains Phrase(문구 포함) 필터 또는 Exact Match(정확히 일치) 필터를 사용할 수 있습니다.

- Contains Phrase(문구 포함): 댓글 내용에 입력한 텍스트 문구 중 하나가 포함되어 있으면 트리거가 실행됩니다.
- Exact Match(정확히 일치): 전체 댓글 내용이 입력한 텍스트 문구 중 하나와 정확히 일치하면 트리거가 실행됩니다.

![문구 포함 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041830958/original/VXaZqRiMQLv0vjxMBVhtcP7sqHT5lYfwkQ.jpeg?1739902002)

![정확히 일치 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041830964/original/oudpvop2MK-VyOCAWk55cgPMouFiDOjYhg.jpeg?1739902002)

### 첫 번째 댓글만 추적

토글을 사용해서 첫 번째 댓글만 추적할지 설정할 수 있습니다.

- 토글 켜기: 댓글 체인의 첫 번째 댓글에서만 트리거가 실행되고, 댓글에 달린 대댓글에서는 실행되지 않습니다.
- 토글 끄기: 다른 댓글에 달린 대댓글이라도 모든 댓글에 대해 트리거가 실행됩니다.

![첫 번째 댓글만 추적 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041830963/original/JM8x0HqYuN35fNB2rYm4BspMSf4USIjDAQ.jpeg?1739902002)

## 자주 묻는 질문

**Q: 인스타그램 게시물 댓글 트리거가 페이스북에서도 작동하나요?**

A: 아니요, 이 트리거는 인스타그램에서만 작동합니다. 페이스북에서는 동일한 [Facebook Comment(s) on post](workflow-trigger-facebook-comment-s-on-a-post.md) 트리거를 사용하세요.

**Q: 인스타그램 게시물 댓글 트리거와 함께 어떤 액션을 사용해야 하나요?**

A: Instagram Comment Automation 레시피를 사용해서 이 트리거를 워크플로우에서 활용하는 예시를 확인해보세요. Facebook & Instagram Comment Automation 문서와 [Reply In Comment](workflow-action-reply-in-comments.md), Instagram Interactive Messenger 액션을 참고하세요.

**Q: 게시물 댓글 트리거가 무한 루프를 만들 수 있나요?**

A: 아니요, 자동 댓글은 무한 루프를 만들지 않습니다. 워크플로우 트리거는 워크플로우 액션에 의해 게시된 댓글을 자동으로 무시합니다.

---
*원문 최종 수정: Wed, 19 Feb, 2025*
*Hyperclass 사용 가이드 — hyperclass.ai*