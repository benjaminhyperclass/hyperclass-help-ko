---
원문: https://help.gohighlevel.com/support/solutions/articles/155000004645-workflow-trigger-facebook-comment-s-on-a-post
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Facebook Comment(s) On A Post(Facebook 게시물 댓글)

**Facebook Comment(s) On A Post**(Facebook 게시물에 댓글이 달렸을 때) 트리거를 쓰면 누군가 Facebook 게시물에 댓글을 달 때 워크플로우를 시작할 수 있어요. 특정 단어나 문구가 들어간 댓글만 골라서 워크플로우 액션으로 자동 응답할 수도 있어요.

## Facebook Comment(s) On A Post 트리거란?

**Facebook Comment(s) On A Post** 트리거는 선택한 Facebook 게시물에 누군가 댓글을 달고, 그 댓글이 설정한 조건에 맞으면 워크플로우를 시작해요.

예를 들어 누군가 게시물에 "INFO"라고 댓글을 달면, 그 댓글에 자동으로 답글을 달거나 Messenger 비공개 메시지를 보낼 수 있어요.

## 이 트리거로 할 수 있는 일

Facebook 댓글에 일일이 답하지 않아도 팔로워와 소통할 수 있어요.

- 자동 응답: Facebook 게시물에 댓글이 달리면 워크플로우를 시작해요.
- 맞춤 대응: 특정 단어나 문구가 들어간 댓글에만 워크플로우를 실행해요.
- 유연한 댓글 추적: 댓글에 달린 답글까지 포함할지 선택할 수 있어요.
- 업무 효율 향상: 공개 답글과 Messenger 응대를 자동화해서 시간을 아껴요.

## 트리거 설정하기

1. **자동화 > 워크플로우**로 이동해서 기존 워크플로우를 열거나 새 워크플로우를 만드세요. **Add Trigger**(트리거 추가)를 클릭하고 **Facebook Comment(s) On A Post**를 선택하세요.

   ![워크플로우에서 트리거 추가 후 Facebook Comment(s) On A Post 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083393683/original/D634XFqCSgIEd5s61ASgir8ohArG9K3tww.png?1792059744)

2. **Page Is**(페이지 지정)에서 연결된 Facebook 페이지를 선택하세요.

   ![Page Is에서 연결된 Facebook 페이지 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083389733/original/-8qqAJiSL2jmbdtE_3rkzd-XjBpY9qNR9g.png?1792057892)

3. **Post Type**(게시물 유형)에서 **Published Post**(게시된 게시물) 또는 **Custom Post**(사용자 지정 게시물)를 고르세요. 그다음 **Post Is**(게시물 지정)에서 게시물을 선택하거나 게시물의 URL 또는 ID를 입력하세요.

   ![Post Type과 Post Is 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083393760/original/P2yTKDwJ69NZiZG7WR3xN7lm9W2LSQcDQg.png?1792059799)

4. 필요하면 **Contains Phrase**(문구 포함), **Exact Match**(정확히 일치), **Track First Level Comments Only**(첫 단계 댓글만 추적)를 설정해서 워크플로우를 시작할 댓글을 정하세요.

   ![Contains Phrase, Exact Match, Track First Level Comments Only 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083393861/original/8MhTcqVHsXO8FQ_yGW3RKqkf1Hs-gLEM_Q.png?1792059900)

5. 트리거를 저장하고 **Reply In Comments**(댓글에 답글) 또는 **Facebook Interactive Messenger**(Facebook 인터랙티브 메신저) 같은 액션을 추가하세요.
6. 워크플로우를 저장하고 게시하세요.

## Facebook 댓글 트리거 필터

| 필터 | 설명 |
| --- | --- |
| **Page Is** | 모니터링할 Facebook 페이지를 선택해요. 먼저 페이지가 연결되어 있어야 해요. |
| **Post Type** | Published Post 또는 Custom Post를 선택해요. |
| **Post Is** | 게시된 게시물을 선택하거나 Facebook 게시물 URL 또는 ID를 입력해요. |
| **Contains Phrase** | 댓글에 지정한 문구가 들어 있으면 시작해요. 다른 글이 함께 있어도 돼요. |
| **Exact Match** | 댓글 전체가 지정한 텍스트와 똑같을 때만 시작해요. |

예시: 설정한 문구가 "INFO"일 때

- **Contains Phrase**: "INFO"와 "Send me INFO" 모두 해당돼요.
- **Exact Match**: "INFO"만 해당돼요.

### Track First Level Comments Only

Facebook 게시물에는 게시물에 바로 단 댓글과, 그 댓글에 달린 답글이 있어요. 이 설정은 어떤 댓글로 워크플로우를 시작할지 정해요.

- **Enabled**(활성화됨): 게시물에 바로 단 댓글만 워크플로우를 시작해요.
- **Disabled**(비활성화됨): 게시물에 바로 단 댓글과 댓글에 달린 답글 모두 워크플로우를 시작해요.

![Track First Level Comments Only 설정에 따른 동작](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083346332/original/MxvGGnb884MR6yhblJxTg6CMlRG09oFCWQ.png?1791998845)

## 자주 묻는 질문

### Instagram 댓글에도 이 트리거를 쓸 수 있나요?

아니요. Instagram 댓글에는 [Instagram Comment(s) On A Post](workflow-trigger-instagram-comment-s-on-a-post.md) 트리거를 사용하세요.

### 같은 사람이 워크플로우를 여러 번 시작할 수 있나요?

네, 워크플로우의 재진입 설정에 따라 달라요.

### 댓글을 달면 자동으로 비공개 메시지를 보낼 수 있나요?

네. **Facebook Interactive Messenger** 액션을 추가하고 **Reply to Comment via DM**(DM으로 댓글에 답장)을 선택하세요. Meta의 메시지 제한 정책이 적용돼요.

### Facebook 댓글을 달았는데 워크플로우가 시작되지 않아요

Facebook 페이지가 연결되어 있는지, 워크플로우가 게시되어 있는지, 댓글이 설정한 필터와 맞는지 확인하세요. **Track First Level Comments Only**가 켜져 있는지도 살펴보세요.

### 자동 답글이 워크플로우를 다시 시작하나요?

아니요. 워크플로우 액션이 만든 댓글은 무시돼서 자동화가 반복되는 일이 없어요.
