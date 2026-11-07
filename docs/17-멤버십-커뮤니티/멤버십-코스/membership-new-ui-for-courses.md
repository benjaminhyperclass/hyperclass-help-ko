---
원문: /support/solutions/articles/155000004153-membership-new-ui-for-courses
번역일: 2026-11-07
카테고리: 17-멤버십-커뮤니티
---

# 멤버십 코스 모바일 화면 개편 안내

멤버십의 **코스** 모바일 화면이 새롭게 바뀌었어요. 더 부드럽고 빠르고 편하게 학습할 수 있도록 다듬었어요. 이 문서에서 바뀐 내용을 하나씩 살펴보세요.

## 1. 카테고리와 강의를 한 화면에서 이동해요

같은 화면에서 카테고리와 강의 사이를 쉽게 오갈 수 있어요. 펼치면 자세한 내용을 볼 수 있고, 접으면 핵심만 한눈에 볼 수 있어요. 화면을 앞뒤로 오갈 필요가 없어요.

![카테고리와 강의를 한 화면에서 탐색하는 코스 모바일 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036338892/original/k06yhHcg0wuKc9jaRllP8ijbxx35dnQBWA.png?1731325761)

## 2. 모든 유형의 강의를 쉽게 학습해요

텍스트, 오디오, 비디오 등 어떤 강의든 새 디자인으로 간단하고 직관적으로 이용할 수 있어요.

## 3. 댓글 섹션이 새로워졌어요

댓글 섹션을 새로 디자인했어요. 다른 수강생의 댓글에 쉽게 답글을 달고 대화를 이어 갈 수 있어요.

![새로 바뀐 댓글 섹션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036338780/original/m_ei62GFqQNWNJXf5ccmO2Ujqb24UlEPew.png?1731325665)

## 4. 퀴즈와 과제 화면이 깔끔해졌어요

콘텐츠가 잘리거나 화면 전환이 헷갈리는 문제가 없어요. 문제 사이를 쉽게 넘나들 수 있고, 퀴즈와 과제를 끊김 없이 진행할 수 있어요.

![퀴즈와 과제 진행 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036339596/original/5K1W7peWt93XOX4kqgkYzfKFeA1wSSJGgg.png?1731326273)

## 5. 진행 상태를 한눈에 확인해요

퀴즈와 과제가 검토 중인지, 통과했는지, 통과하지 못했는지 한눈에 볼 수 있어요.

![퀴즈와 과제의 진행 상태 표시 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155036338758/original/ezG3pK-xk_eacwovyqVoMf8OFlQQd3ZMuw.png?1731325653)

## 6. 로딩 아이콘 대신 반짝이는 자리표시를 보여 줘요

콘텐츠를 불러오는 동안 예전의 로딩 아이콘(스피너) 대신 반짝이는 자리표시(shimmer)가 나타나요. 기다리는 동안에도 화면이 깔끔하고 자연스럽게 보여요.

## 7. 코드 구조를 개선했어요

폴더 구조를 개선하고 코드를 Vue 3 composition API로 바꿨어요. 유지보수와 가독성을 높이기 위한 변경이에요.

## 8. 번들 크기를 줄였어요

페이지를 여러 하위 컴포넌트로 나누고 지연 로딩(lazy loading)을 적용했어요. 처음 불러오는 전체 번들 크기가 줄어들어요.
