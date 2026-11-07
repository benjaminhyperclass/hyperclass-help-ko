---
원문: /support/solutions/articles/155000002351-facebook-comments-workflow-ai
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Facebook 댓글에 맞춤 답글 달기(GPT powered by OpenAI + Respond on Comment)

**Respond on Comment**(댓글에 답글 달기) 액션에 GPT 액션을 함께 쓰면, 방문자가 남긴 댓글 내용에 맞춰 답글을 자동으로 만들 수 있어요.

**Respond on Comment** 액션에는 미리 정해 둔 답글을 여러 개 넣을 수 있어요. 하지만 댓글 내용에 따라 답글을 다르게 달고 싶을 때가 있어요. 이럴 때 GPT 액션을 앞에 추가하면 돼요.

## 설정 순서

1. **Respond on Comment** 액션 앞에 **GPT powered by OpenAI**(OpenAI 기반 GPT) 액션을 추가하세요. 워크플로우에 **Facebook - User comments on a post**(Facebook - 사용자가 게시물에 댓글을 남김) 트리거나 **Instagram - User comments on a post**(Instagram - 사용자가 게시물에 댓글을 남김) 트리거가 있어야 해요.
2. **Action Type**(액션 유형)을 **Custom**(사용자 지정)으로 선택하고, 댓글에 어떤 식으로 답하면 좋을지 **Prompt**(프롬프트)에 적으세요.
3. **custom value picker**(커스텀 값 선택기)에서 Facebook 또는 Instagram의 **Comment body**(댓글 내용)를 선택하세요.
4. **Save Action**(액션 저장)을 클릭하세요.
5. 이제 **Respond on Comment** 액션을 추가하세요.
6. 답글을 입력하는 **response**(답글) 필드에서 **custom value picker**를 열고, GPT 액션이 만든 응답을 선택하세요.

![GPT powered by OpenAI 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025353191/original/f1xgfUS8HxQa-Jt2vWbnwm5avK6izLrAow.png?1714559030)

![Respond on Comment 액션에서 GPT 응답을 선택한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025353462/original/BQIhO5eOLFRDCg7XaUAOqniGzFLrWJdCDQ.png?1714559293)
