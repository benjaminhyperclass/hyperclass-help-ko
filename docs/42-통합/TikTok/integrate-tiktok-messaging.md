---

번역일: 2026-04-09
카테고리: 42-통합 > TikTok
---

# 틱톡 메시징 연동하기

**목차**

- [틱톡 메시징 및 댓글 자동화 소개](#틱톡-메시징-및-댓글-자동화-소개)
- [지원 지역](#지원-지역)
- [틱톡 계정 연동하기](#틱톡-계정-연동하기)
- [틱톡 댓글 자동화는 어떻게 작동하나요?](#틱톡-댓글-자동화는-어떻게-작동하나요)
  - [트리거 설정: 틱톡 릴 댓글](#트리거-설정-틱톡-릴-댓글)
  - [액션 설정: 댓글로 답변](#액션-설정-댓글로-답변)
- [틱톡 DM 자동화는 어떻게 작동하나요?](#틱톡-dm-자동화는-어떻게-작동하나요)
  - [트리거: 고객 응답](#트리거-고객-응답)
  - [액션 설정: 틱톡 인터랙티브 메신저](#액션-설정-틱톡-인터랙티브-메신저)
- [주의사항](#주의사항)

## 틱톡 메시징 및 댓글 자동화 소개

틱톡에는 수백만 명의 활성 사용자가 있지만, 고객, 연락처, 대화를 효율적으로 대규모로 관리할 도구를 제공하지 않습니다. 이러한 활동의 일부를 자동화하여 대화는 틱톡에서 일어나지만 CRM 내부에서 관리할 수 있습니다.

여러 구성 요소를 올바르게 설정하기만 하면 됩니다. 이 가이드에서는 각 구성 요소와 이들이 함께 작동하는 여러 패턴을 설명합니다.

## 지원 지역

틱톡 메시징 및 댓글 자동화 기능은 아직 유럽경제지역(EEA), 스위스, 영국(UK)에서는 사용할 수 없습니다.

현재 이 기능은 미국에 등록된 비즈니스 계정에서만 사용할 수 있습니다.

이는 틱톡의 공개 API 내 제한사항 때문입니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058389308/original/cXvaUAI45TMYCYy9Ii24_KGTMVzWCi5fpw.jpeg?1763119958)

## 틱톡 계정 연동하기

진행하기 전에 틱톡 계정이 하위 계정과 연동되어 있는지 확인하세요. 하위 계정 > Settings(설정) > Integrations(연동) > TikTok 카드로 이동하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058389306/original/_e8cuUt0b6bX_sEG8FjyOX3zuGu21lRvLg.jpeg?1763119958)

구성 요소

트리거:

- 틱톡 릴 댓글 - 틱톡 게시물에 새 댓글이 달렸을 때 워크플로우가 시작됩니다. [이 트리거에 대한 자세한 정보는 여기를 참조하세요](../../07-워크플로우/Facebook/Instagram-Events-Workflow-Triggers/workflow-trigger-facebook-comment-s-on-a-post.md).

- 고객 응답 - 틱톡 메신저와 같은 응답 채널을 선택합니다. [이 트리거에 대한 자세한 정보는 여기를 참조하세요](../../07-워크플로우/Events-Workflow-Triggers/workflow-trigger-customer-replied.md)

액션:

- [댓글로 답변](../../07-워크플로우/Communication-Workflow-Actions/workflow-action-reply-in-comments.md): 댓글에 댓글로 답변합니다. [이 액션에 대한 자세한 정보는 여기를 참조하세요](../../07-워크플로우/Communication-Workflow-Actions/workflow-action-reply-in-comments.md)

- 틱톡 인터랙티브 메신저

## 틱톡 댓글 자동화는 어떻게 작동하나요?

### 트리거 설정: 틱톡 릴 댓글

워크플로우를 생성할 때 "Add Trigger(트리거 추가)"를 클릭하세요. 댓글 자동화 관련 트리거는 Communication(커뮤니케이션) 카테고리에 있습니다. 트리거를 직접 검색하거나 카테고리로 스크롤할 수 있습니다.

1. 트리거로 이동하여 사용 사례에 따라 사용 가능한 트리거에서 선택하세요. 여기서는 TikTok - Comment(s) on a Post(틱톡 - 게시물 댓글)를 선택해야 합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058389311/original/2nT0seUkzw8dRG0qpD12wNYcc-dPQ6gQ5w.jpeg?1763119958)

2. 트리거를 클릭하면 사이드바가 열립니다. 여러 필터가 있습니다. 첫 번째 단계는 계정을 선택하는 것입니다.

틱톡 댓글 계정 선택

필터에서 특정 계정이 선택되지 않으면 시스템은 로케이션 레벨에서 연동된 모든 계정을 자동으로 고려합니다. 그러면 이 모든 연결된 계정에서 자동화가 실행됩니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058389303/original/BFZpj1pZnFZDE-7DSV-KbLk37LI6pV4usQ.png?1763119957)

3. 페이지를 선택한 후 게시물 유형을 선택해야 합니다. 게시물 유형은 "Published(발행됨)" 또는 "Custom(커스텀)"일 수 있습니다.

 a. Published Post(발행된 게시물) - 'Published Posts(발행된 게시물)' 탭은 비즈니스 페이지의 모든 게시물을 가져옵니다. 이 선택에 따라 계정의 모든 게시물이 드롭다운으로 표시됩니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058389312/original/vwKzHrYg-TglzdmBlP_haucBTTV2xXldzQ.png?1763119958)

b. Custom Post(커스텀 게시물) - 커스텀 게시물 탭에서는 URL을 제공하여 고려할 게시물을 정의할 수 있습니다.

게시물 선택 동작: 특정 게시물이 선택되지 않으면 시스템은 연결된 틱톡 계정과 관련된 모든 게시물을 자동으로 포함합니다.

4. 다음 단계에서는 자동화를 실행할 게시물을 선택하거나 URL을 제공해야 합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058389304/original/n83MGg55cBaNqCYHortQ4NrBZylAj0y3rQ.png?1763119957)

5. 게시물을 선택한 후 댓글에서 찾고 있는 내용을 입력해야 합니다. "Contains Phrase(구문 포함)"와 "Exact Match(정확한 일치)" 두 옵션 중에서 선택할 수 있습니다. 이 두 드롭다운을 더 잘 이해하기 위한 몇 가지 예시는 다음과 같습니다.

정확한 일치 - 가격

인바운드 메시지 - 가격

결과 - 통과

정확한 일치 - 가격을 알려주세요

인바운드 메시지 - 가격을 알려주세요

결과 - 통과

정확한 일치 - 가격을 알려주세요

인바운드 메시지 - 가격을 좀 알려주세요

결과 - 실패

정확한 구문 포함 - 구매했어요

인바운드 메시지 - 구매했어요

결과 - 통과

정확한 구문 포함 - 구매했어요

인바운드 메시지 - 어제 구매했어요

결과 - 통과

정확한 구문 포함 - 구매했어요

인바운드 메시지 - 하나 구매했어요

결과 - 실패

연락처는 언제 저장되나요?

트리거를 통해 연락처가 들어오면 연락처로 저장되고 연락처의 이름과 성이 저장됩니다.

### 액션 설정: 댓글로 답변

- 액션으로 이동하세요. 여기서 Communications(커뮤니케이션) 섹션에서 "Reply in Comments(댓글로 답변)" 액션을 선택할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058389302/original/5_eAOb8F5ups2yHCMeLZzvv_JXYZxhPORw.jpeg?1763119956)

- 사용자는 최대 10개의 답변 댓글을 설정할 수 있으며, 실행 시 무작위로 선택됩니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058389309/original/yGkVHFgclA4dbg_FvN92cHAvM6lneHNtxw.png?1763119958)

## 틱톡 DM 자동화는 어떻게 작동하나요?

### 트리거: 고객 응답

워크플로우를 생성할 때 "Add Trigger(트리거 추가)"를 클릭하세요. DM 자동화 관련 트리거인 "Customer replied(고객 응답)"는 Events(이벤트) 카테고리에 있습니다. 트리거를 직접 검색하거나 카테고리로 스크롤할 수 있습니다.

1. 트리거로 이동하여 사용 사례에 따라 사용 가능한 트리거에서 선택하세요. 여기서는 Customer replied(고객 응답) 트리거를 선택해야 합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058389314/original/KdQCmKKTGtTCEjMvlmncD_l9pT-iHIuqcw.png?1763119959)

2. 트리거를 클릭하면 사이드바가 열립니다. 여러 필터가 있습니다. 첫 번째 단계는 필터 값이 TikTok인 "Reply channel(응답 채널)" 필터를 선택하는 것입니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058389310/original/T0WP-haBSI9g4cyafhPFFHbCG1Aad4yieg.png?1763119958)

3. 사용자는 'Contains Phrase(구문 포함)' 또는 'Exact Match Phrase(정확한 구문 일치)'와 같은 특정 일치 조건을 설정하여 다이렉트 메시지에 대한 자동화 규칙을 구성할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058389307/original/2yXEWZeykp4TQmhcDD6lKvFp0UGoMdM-3Q.png?1763119958)

4. 위 구성을 바탕으로 자동화를 위한 트리거를 정의할 수 있습니다.

### 액션 설정: 틱톡 인터랙티브 메신저

"Communications(커뮤니케이션)" 카테고리에 새로운 액션 1개가 있습니다 - 틱톡 인터랙티브 메신저

액션을 선택하면 모든 관련 세부사항을 입력할 수 있는 사이드바가 열립니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058389313/original/FpJiY85rGvZfqgVz0d6_5Pjq2v_Gq7ZWrg.png?1763119958)

틱톡 인터랙티브 메신저는 매우 간단합니다. 여기서는 정의된 인바운드 트리거에 보낼 메시지를 제공하고 액션을 저장하면 됩니다.

## 주의사항

- 틱톡 인터랙티브 메신저 액션은 페이스북과 인스타그램과 달리 사용자가 "Reply as DM(DM으로 답변)", "Reply to Comment via DM(댓글을 DM으로 답변)" 값을 정의할 수 있는 "Reply Type(답변 유형)" 필드를 지원하지 않습니다. 틱톡 API가 지원하기 시작하면 활성화될 예정입니다.

- 틱톡 인터랙티브 메신저 액션은 페이스북과 인스타그램과 달리 템플릿을 지원하지 않습니다. 점진적으로 활성화될 예정입니다.

- 틱톡 인터랙티브 메신저 액션은 첨부파일, 버튼, 빠른 답변을 지원하지 않습니다. 틱톡 API가 지원하기 시작하면 활성화될 예정입니다.

---
*원문 최종 수정: Fri, 14 Nov, 2025 at 5:33 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*