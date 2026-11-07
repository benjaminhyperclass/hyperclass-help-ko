---
원문: /support/solutions/articles/155000004659-workflow-recipes-facebook-comments-workflow-ai
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 레시피 — Facebook 댓글 + 워크플로우 AI

이 레시피로 워크플로우를 만들면, Facebook 댓글에 AI가 맞춤 답글을 달아 주는 예시를 볼 수 있어요. 댓글이 긍정적일 때만 DM도 함께 보내요.

워크플로우는 다음 순서로 동작해요.

1. 트리거: 게시물에 달린 모든 1단계 댓글(답글이 아닌 첫 번째 댓글)에서 실행돼요.
2. 액션: 댓글을 OpenAI에 보내고, 좋은 답변을 만들어 달라는 짧은 프롬프트를 함께 전달해요.
3. 액션: AI가 만든 답변으로 댓글에 답글을 달아요.
4. 액션: 원래 댓글을 OpenAI에 보내 감정 분석을 하고, 긍정과 부정으로 워크플로우를 나눠요.
5. 액션: 긍정일 때 인터랙티브 DM을 보내요.

![워크플로우 레시피 구성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041915247/original/yZ3qAcufb-Q9EHkjkPiZP8b-RmpoN_mTWQ.png?1740011022)
