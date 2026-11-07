---
원문: /support/solutions/articles/155000003302-workflow-action-reply-in-comments
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Reply In Comments(댓글에 답글 달기)

**Reply In Comments**(댓글에 답글 달기) 액션은 댓글에 댓글로 답할 때 써요. 이 문서에서는 액션을 찾는 위치와 설정 항목, 자주 묻는 질문을 안내해요.

## Reply In Comments란?

Facebook이나 Instagram 계정의 게시물에는 댓글이 달려요. 이런 댓글 때문에 워크플로우가 시작되면, 이 액션으로 해당 댓글 아래에 답글을 달 수 있어요. 그 댓글에 좋아요를 누르는 것도 가능해요.

{% hint style="info" %}
**Reply In Comments** 액션은 관련 트리거와 함께 써야 해요. 사용할 수 있는 트리거는 **Facebook Comment(s) On A Post**(Facebook 게시물 댓글)와 **Instagram Comment(s) On A Post**(Instagram 게시물 댓글)예요.
{% endhint %}

## 이 액션은 어디에 있나요?

1. 왼쪽 메뉴에서 **자동화 > 워크플로우**로 이동해 워크플로우 빌더를 엽니다.
2. 빌더에서 **Actions**(액션)를 선택합니다.
3. **Communication**(커뮤니케이션)을 선택합니다.
4. **Reply In Comments**를 선택합니다.

![워크플로우 빌더에서 Reply In Comments 액션을 찾는 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041689521/original/_crQZmWN0VdXKdvGlXXOJg55CGKKa0WbiQ.png?1739767440)

![워크플로우 빌더에서 Reply In Comments 액션을 찾는 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041689518/original/4JZ1TD_6BjU1061yZJcS4ODQcq8reIFB0w.png?1739767423)

## 설정 항목

**Reply In Comments** 액션에는 설정 항목이 두 가지 있어요.

1. **Comments**(댓글): 답글을 최대 10개까지 만들 수 있고, 이 중에서 무작위로 사용돼요. 미리 써 둔 답글을 직접 입력해도 되고, 태그 아이콘을 눌러 커스텀 값이나 앞선 AI 액션 등 다른 출처의 답글을 가져올 수도 있어요.
2. **Like Comments**(댓글 좋아요): 끄면 댓글에 좋아요를 누르지 않아요. 켜면 답글을 다는 댓글에 좋아요를 눌러요.

![Reply In Comments 액션의 설정 항목 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041689548/original/_IuxCOq_BNpeo2Ia9TOm24QVugzes7vQsA.png?1739767557)

## 자주 묻는 질문

### Reply In Comments 액션에는 어떤 트리거를 써야 하나요?

**Facebook Comment(s) On A Post**와 **Instagram Comment(s) On A Post** 트리거를 쓰세요. 그래야 액션이 어떤 댓글에 답해야 하는지 알 수 있어요.

### Reply In Comments 액션으로 댓글에 좋아요를 누를 수 있나요?

네, 가능해요. **Reply In Comments** 액션에는 답글을 다는 댓글에 좋아요를 누를지 정하는 **Like Comments** 토글이 있어요.

### Reply In Comments 액션을 AI와 함께 쓸 수 있나요?

네, 가능해요. 앞에 AI 액션을 두면 그 액션의 응답을 **Reply In Comments**에서 쓸 수 있어요.

### 특정 댓글에 특정 답글을 지정할 수 있나요?

아니요, 지정할 수 없어요. **Reply In Comments** 액션은 입력해 둔 답글 중에서 무작위로 골라요. 댓글마다 맞춤 답글이 필요하다면 이 액션 앞에 AI 액션이나 **If/Else**(조건 분기) 브랜치를 두세요. 또는 조건이 서로 다른 댓글 트리거를 각각 다른 워크플로우에 사용할 수도 있어요.
