---
원문: https://help.gohighlevel.com/support/solutions/articles/155000004646-workflow-trigger-instagram-comment-s-on-a-post
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Instagram Comment(s) On A Post(Instagram 게시물 댓글)

Instagram 게시물에 댓글이 달리면 워크플로우를 시작하는 트리거예요. 설정한 필터 조건에 맞는 댓글이 달릴 때만 작동해요.

## 이 트리거는 어디에 있나요?

**자동화 > 워크플로우**에서 워크플로우를 열고, 빌더에서 **Triggers**(트리거) > **Facebook/Instagram Events**(Facebook/Instagram 이벤트)로 이동하세요.

![워크플로우 빌더에서 트리거 메뉴로 이동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041830962/original/L9pXyb2ALo5ULdcFeYUy0T6VYpOyoO-wRw.jpeg?1739902001)

![Facebook/Instagram Events 목록에서 트리거 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041831350/original/46MFAXXN7ivLHEZi5jJITh3R3RFPEcN9zw.png?1739902649)

## 구성 요소

**Instagram Comment(s) On A Post** 트리거는 네 가지 항목으로 이루어져 있어요.

1. **Choose A Workflow Trigger**(워크플로우 트리거 선택): 기본값은 이 트리거예요. 원하면 다른 트리거로 바꿀 수 있어요.
2. **Workflow Trigger Name**(워크플로우 트리거 이름): 기본값은 트리거 이름 그대로예요. 워크플로우에서 한눈에 알아볼 수 있도록 이름을 직접 바꿀 수 있어요.
3. **Filters**(필터): 어떤 상황에서 트리거를 작동시킬지 조건을 고르는 곳이에요. 자세한 내용은 다음 섹션에서 설명해요.
4. **Track First Level Comments Only**(첫 번째 댓글만 추적): 토글을 끄면 대댓글을 포함한 모든 댓글에서 트리거가 작동해요. 토글을 켜면 가장 위(첫 번째) 댓글에서만 작동하고, 그 댓글에 달린 댓글에서는 작동하지 않아요.

![트리거 구성 요소 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041831384/original/6Ce-Rwd62Mg6NBY35w_eh41WpIfq_p66-w.png?1739902707)

## 필터

필터 항목은 다음과 같아요.

|  |  |
| --- | --- |
| Filter Level 1 | Options |
| Page Is(페이지) | 계정에 연결된 페이지 목록 |
| Post Type(게시물 유형) | Published Post(게시된 게시물): 비즈니스 페이지의 모든 게시물 |
| | Custom Post(사용자 지정 게시물): URL 입력 |
| Post is(게시물) | Page Is와 Post Type 설정에 맞는 게시물 목록 |
| Contains Phrase(문구 포함) | 문구 = "구매했어요"<br>댓글 = "어제 구매했어요" → 통과<br>댓글 = "하나 샀어요" → 실패<br>댓글 = "얼마예요?" → 실패 |
| Exact Match(정확히 일치) | 문구 = "구매했어요"<br>댓글 = "구매했어요" → 통과<br>댓글 = "어제 구매했어요" → 실패<br>댓글 = "하나 샀어요" → 실패 |

### Page Is + Post Type + Post Is

먼저 **Page Is**에서 페이지를 고르고, **Post Type**에서 게시물 유형을 고른 다음, **Post Is**에서 게시물을 선택해요.

**1단계: 페이지 선택**

**Standard Fields**(표준 필드) > **Page Is**를 선택한 뒤 목록에서 페이지를 고르세요.

![Page Is에서 페이지 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041831411/original/8CdKJJyt-KHiyQ9u9FFZEPG_LDKCS1Nl3A.png?1739902781)

![페이지 목록에서 페이지 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041831479/original/tvHzg5VvNtl1or3g4RyJUsQETiIrz9dEAA.png?1739902917)

**2단계: 게시물 유형 선택**

목록에서 고르려면 **Published Post**를, URL을 직접 입력하려면 **Custom Post**를 선택하세요.

![게시물 유형 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041830957/original/5smhFAlN2W3h3Ufg9WrD7zVrqb_7LWtvAw.jpeg?1739902001)

**3단계: 게시물 지정**

**Published Post**를 골랐다면 목록에서 게시물을 선택하세요. **Custom Post**를 골랐다면 게시물의 URL을 그대로 입력하세요.

![목록에서 게시물 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041830959/original/QgLcGzSJlU_yu4JQsPGv92RDNLxdUPAEtQ.jpeg?1739902002)

![게시물 URL 직접 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041830961/original/tOlAMbpzythpz_CBJFtWIpYNC06JaKsy9A.jpeg?1739902002)

### Contains Phrase 또는 Exact Match

게시물을 지정한 뒤에는 **Contains Phrase** 필터나 **Exact Match** 필터 중 하나를 쓸 수 있어요.

- **Contains Phrase**: 댓글 내용에 입력한 문구 중 하나가 정확히 들어 있으면 트리거가 작동해요.
- **Exact Match**: 댓글 전체가 입력한 문구 중 하나와 정확히 같을 때만 트리거가 작동해요.

![Contains Phrase 필터 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041830958/original/VXaZqRiMQLv0vjxMBVhtcP7sqHT5lYfwkQ.jpeg?1739902002)

![Exact Match 필터 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041830964/original/oudpvop2MK-VyOCAWk55cgPMouFiDOjYhg.jpeg?1739902002)

### Track First Level Comment Only

**Track First Level Comments Only** 토글로 첫 번째 댓글만 추적할지 정할 수 있어요.

- 토글을 켜면: 댓글 묶음에서 첫 번째 댓글에서만 트리거가 작동해요. 그 댓글에 달린 댓글에서는 작동하지 않아요.
- 토글을 끄면: 다른 댓글 아래에 달린 댓글을 포함해 모든 댓글에서 트리거가 작동해요.

![첫 번째 댓글만 추적하는 토글](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041830963/original/JM8x0HqYuN35fNB2rYm4BspMSf4USIjDAQ.jpeg?1739902002)

## 자주 묻는 질문

### Instagram 게시물 댓글 트리거를 Facebook에서도 쓸 수 있나요?

아니요, 이 트리거는 Instagram에서만 작동해요. Facebook에서는 똑같은 방식으로 쓸 수 있는 **Facebook Comment(s) On A Post** 트리거를 사용하세요.

### Instagram 게시물 댓글 트리거와 함께 어떤 액션을 쓰면 좋나요?

워크플로우에서 이 트리거를 어떻게 쓰는지 예시를 보려면 **Instagram Comment Automation** 레시피를 사용해 보세요. 「Facebook & Instagram Comment Automation」 문서와 **Reply In Comment**(댓글에 답글) 액션, **Instagram Interactive Messenger**(Instagram 인터랙티브 메신저) 액션 문서도 함께 참고하세요.

### 게시물 댓글 트리거가 무한 반복되지는 않나요?

아니요, 자동으로 단 댓글 때문에 무한 반복되지 않아요. 워크플로우 트리거는 워크플로우 액션이 올린 댓글을 자동으로 무시해요.
