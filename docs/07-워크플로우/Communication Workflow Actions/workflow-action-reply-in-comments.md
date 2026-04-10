---

번역일: 2026-04-07
카테고리: 07-워크플로우 > Communication Workflow Actions
---

# 워크플로우 액션 - 댓글 답글

이 워크플로우 액션은 댓글에 댓글로 답글을 달 때 사용합니다.

---

**목차**

- [댓글 답글이란?](#댓글-답글이란)
- [이 액션을 찾는 위치](#이-액션을-찾는-위치)
- [구성 요소](#구성-요소)
- [자주 묻는 질문](#자주-묻는-질문)
---

## **댓글 답글이란?**

페이스북이나 인스타그램 계정에 게시물에 댓글이 달리면, 해당 댓글로 인해 워크플로우가 트리거되었을 때 이 액션을 사용해 그 댓글 아래에 답글을 달 수 있어요. 댓글에 좋아요를 누르는 것도 가능합니다.

댓글 답글 액션은 반드시 관련된 트리거와 함께 사용해야 해요: [Facebook Comment(s) On A Post](workflow-trigger-facebook-comment-s-on-a-post.md) 또는 [Instagram Comment(s) On A Post](workflow-trigger-instagram-comment-s-on-a-post.md)

---

## **이 액션을 찾는 위치**

Automation(자동화) > Workflow(워크플로우) > Workflow Builder(워크플로우 빌더) > Actions(액션) > Communication(커뮤니케이션) > Reply In Comments(댓글 답글)로 이동하세요.

![댓글 답글 액션 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041689521/original/_crQZmWN0VdXKdvGlXXOJg55CGKKa0WbiQ.png?1739767440)

![댓글 답글 액션 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041689518/original/4JZ1TD_6BjU1061yZJcS4ODQcq8reIFB0w.png?1739767423)

---

## **구성 요소**

댓글 답글 액션은 두 가지 구성 요소만 있어요:

- **Comments(댓글):** 랜덤하게 사용될 최대 10개의 댓글을 작성할 수 있어요. 직접 미리 작성한 답글을 입력하거나, 태그 아이콘을 사용해 커스텀 값이나 이전 AI 액션 등 다른 소스에서 답글을 가져올 수 있습니다.

- **Like Comments(댓글 좋아요):** 토글을 끄면 댓글에 좋아요를 누르지 않아요. 토글을 켜면 답글을 다는 댓글에 좋아요를 누릅니다.

![댓글 답글 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041689548/original/_IuxCOq_BNpeo2Ia9TOm24QVugzes7vQsA.png?1739767557)

---

## **자주 묻는 질문**

**Q: 댓글 답글 액션과 함께 어떤 트리거를 사용해야 하나요?**

A: 액션이 어떤 댓글에 답글을 달아야 하는지 알 수 있도록 Facebook Comment(s) On A Post와 Instagram Comment(s) On A Post 트리거를 사용해야 해요.

**Q: 댓글 답글 액션으로 댓글에 좋아요를 누를 수 있나요?**

A: 네, 댓글 답글 액션에는 답글을 다는 댓글에 좋아요를 켜고/끄는 토글이 있어요.

**Q: 댓글 답글 액션을 AI와 함께 사용할 수 있나요?**

A: 네, 이전에 AI 액션이 있다면 해당 액션의 응답을 댓글 답글에서 사용할 수 있어요.

**Q: 특정 댓글에 특정 답글을 지정할 수 있나요?**

A: 아니요, 댓글 답글 액션은 제공된 답글 중에서 랜덤하게 선택해요. 맞춤형 답글을 원한다면 이전에 AI 액션을 사용하거나 If/Else 분기를 사용하거나, 다른 워크플로우에서 다른 기준을 가진 다양한 댓글 트리거를 사용할 수 있어요.

---
*원문 최종 수정: Mon, 17 Feb, 2025 at 1:12 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*