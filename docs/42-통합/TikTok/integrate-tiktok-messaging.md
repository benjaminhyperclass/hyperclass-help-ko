---
원문: /support/solutions/articles/155000006620-integrate-tiktok-messaging
번역일: 2026-11-06
카테고리: 42-통합
---

# TikTok 메시지·댓글 자동화 연동하기

TikTok 계정을 하이퍼클래스에 연동해 댓글과 DM(다이렉트 메시지)에 자동으로 답하도록 설정하는 방법을 안내해요. TikTok 연동을 마친 뒤 워크플로우로 댓글·DM 자동화를 만들 때 참고하세요.

## TikTok 메시지·댓글 자동화란

TikTok에는 활성 사용자가 수백만 명 있어요. 하지만 고객, 연락처, 대화를 대규모로 효율적으로 관리하는 도구는 제공하지 않아요. 이런 작업 일부를 자동화하면 대화는 FBIG에서 이뤄지고, 관리는 CRM 안에서 할 수 있어요.
몇 가지 구성 요소를 올바르게 설정하기만 하면 돼요. 이 문서에서는 각 구성 요소와, 이를 함께 쓰는 방법을 설명해요.

## 사용할 수 있는 지역

**TikTok 메시지·댓글 자동화** 기능은 유럽경제지역(EEA), 스위스, 영국(UK)에서 아직 사용할 수 없어요.

현재는 미국에 등록된 비즈니스 계정에서만 사용할 수 있어요.

TikTok 공개 API에 제한이 있기 때문이에요.

![TikTok 메시지·댓글 자동화를 사용할 수 있는 지역 안내](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058389308/original/cXvaUAI45TMYCYy9Ii24_KGTMVzWCi5fpw.jpeg?1763119958)

## TikTok 계정 연동하기

먼저 TikTok 계정이 서브 계정에 연동되어 있어야 해요. 서브 계정에서 **설정 > 연동**으로 이동한 다음 TikTok 카드를 확인하세요.

![연동 화면의 TikTok 카드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058389306/original/_e8cuUt0b6bX_sEG8FjyOX3zuGu21lRvLg.jpeg?1763119958)

### 구성 요소

트리거

- **TikTok Comment on a Reel**(TikTok 릴 댓글): TikTok 게시물에 새 댓글이 달리면 워크플로우가 시작돼요.- **고객이 답장함**: TikTok 메신저 같은 답장 채널을 선택해요.

액션

- **Reply In Comments**(댓글에 답글 달기): 댓글에 답글을 달아요.
- **TikTok Interactive Messenger**(TikTok 인터랙티브 메신저)

## TikTok 댓글 자동화는 어떻게 동작하나요?

### 트리거 설정: TikTok 게시물 댓글

워크플로우를 만들 때 **트리거 추가**를 클릭하세요. 댓글 자동화와 관련된 트리거는 **커뮤니케이션** 카테고리에 있어요. 트리거 이름을 직접 검색하거나 카테고리까지 스크롤해서 찾을 수 있어요.

1. 사용 목적에 맞는 트리거를 선택하세요. 여기서는 **TikTok - Comment(s) on a Post**(TikTok - 게시물 댓글)를 선택해요.

   ![TikTok 댓글 트리거 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058389311/original/2nT0seUkzw8dRG0qpD12wNYcc-dPQ6gQ5w.jpeg?1763119958)

2. 트리거를 클릭하면 사이드바가 열리고 여러 필터가 보여요. 먼저 **Account**(계정)를 선택하세요.

   필터에서 특정 계정을 고르지 않으면 해당 위치(location)에 연동된 모든 계정이 대상이 돼요. 이 경우 연결된 모든 계정에서 자동화가 실행돼요.

   ![트리거 사이드바에서 계정 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058389303/original/BFZpj1pZnFZDE-7DSV-KbLk37LI6pV4usQ.png?1763119957)

3. 계정을 선택한 다음 **Post Type**(게시물 유형)을 선택하세요. 유형은 **게시됨**과 **사용자 지정** 중에서 고를 수 있어요.

   - **게시됨**: 비즈니스 계정의 모든 게시물을 불러와요. 이 선택에 따라 내 계정의 게시물이 드롭다운 목록으로 나타나요.

     TikTok 게시물에 캡션이 없으면 트리거 드롭다운에 게시물 ID와 게시 날짜가 표시돼요. 그래서 올바른 게시물을 정확하게 고를 수 있어요.

     ![게시됨 탭의 게시물 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058389312/original/vwKzHrYg-TglzdmBlP_haucBTTV2xXldzQ.png?1763119958)

   - **사용자 지정**: URL을 입력해 대상 게시물을 직접 지정해요.

   특정 게시물을 선택하지 않으면 연결된 TikTok 계정의 모든 게시물이 자동으로 대상에 포함돼요.

4. 자동화를 실행할 게시물을 선택하거나 URL을 입력하세요.
   ![게시물 선택 또는 URL 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058389304/original/n83MGg55cBaNqCYHortQ4NrBZylAj0y3rQ.png?1763119957)

5. 게시물을 선택했으면 댓글에서 어떤 내용을 찾을지 입력하세요. **Contains Phrase**(문구 포함)와 **Exact Match**(정확히 일치) 중에서 고를 수 있어요. 두 옵션의 차이는 아래 예시로 확인해 보세요.

   | 조건 | 수신 메시지 | 결과 |
   |---|---|---|
   | Exact Match - Price | Price | 통과 |
   | Exact Match - Share the Price | Share the Price | 통과 |
   | Exact Match - Share the Price | Please share the Price | 실패 |
   | Contains Exact Phrase - I bought from you | I bought from you | 통과 |
   | Contains Exact Phrase - I bought from you | I bought from you yesterday | 통과 |
   | Contains Exact Phrase - I bought from you | I bought one from you | 실패 |

#### 연락처는 언제 저장되나요?

트리거를 통해 들어온 사람은 연락처로 저장돼요. 이때 연락처의 이름과 성도 함께 저장돼요.

### 액션 설정: 댓글에 답글 달기

1. 액션 목록의 **커뮤니케이션** 섹션에서 **Reply in Comments**(댓글에 답글 달기)를 선택하세요.

   ![커뮤니케이션 섹션의 Reply in Comments 액션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058389302/original/5_eAOb8F5ups2yHCMeLZzvv_JXYZxhPORw.jpeg?1763119956)

2. 답글은 최대 10개까지 설정할 수 있어요. 실행될 때 이 중 하나가 무작위로 선택돼요.

   ![답글 최대 10개 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058389309/original/yGkVHFgclA4dbg_FvN92cHAvM6lneHNtxw.png?1763119958)

## TikTok DM 자동화는 어떻게 동작하나요?

### 트리거: 고객이 답장함

워크플로우를 만들 때 **트리거 추가**를 클릭하세요. DM 자동화와 관련된 트리거인 **고객이 답장함**은 **이벤트** 카테고리에 있어요. 트리거 이름을 직접 검색하거나 카테고리까지 스크롤해서 찾을 수 있어요.

1. 사용 목적에 맞는 트리거를 선택하세요. 여기서는 **고객이 답장함** 트리거를 선택해요.

   ![고객이 답장함 트리거 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058389314/original/KdQCmKKTGtTCEjMvlmncD_l9pT-iHIuqcw.png?1763119959)

2. 트리거를 클릭하면 사이드바가 열리고 여러 필터가 보여요. 먼저 **Reply channel**(답장 채널) 필터의 값을 TikTok으로 선택하세요.

   ![Reply channel 필터를 TikTok으로 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058389310/original/T0WP-haBSI9g4cyafhPFFHbCG1Aad4yieg.png?1763119958)

3. 다이렉트 메시지의 자동화 규칙은 일치 조건을 정해서 설정해요. 예를 들어 **Contains Phrase**(문구 포함)나 **Exact Match Phrase**(문구 정확히 일치)를 쓸 수 있어요.

   ![DM 일치 조건 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058389307/original/2yXEWZeykp4TQmhcDD6lKvFp0UGoMdM-3Q.png?1763119958)

4. 이렇게 설정한 조건에 따라 자동화가 시작되는 트리거가 정해져요.

### 액션 설정: TikTok 인터랙티브 메신저

**커뮤니케이션** 카테고리에 새 액션이 하나 추가됐어요. 바로 **TikTok Interactive Messenger**(TikTok 인터랙티브 메신저)예요.

액션을 선택하면 사이드바가 열려요. 여기에서 필요한 내용을 입력하세요.

![TikTok Interactive Messenger 액션 사이드바](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058389313/original/FpJiY85rGvZfqgVz0d6_5Pjq2v_Gq7ZWrg.png?1763119958)

TikTok Interactive Messenger는 어렵지 않아요. 앞에서 정한 수신 트리거에 보낼 메시지를 입력하고 액션을 저장하면 돼요.

## 알아 둘 점

1. TikTok Interactive Messenger 액션에는 Facebook·Instagram과 달리 **Reply Type**(답장 유형) 필드가 없어요. Facebook·Instagram에서는 이 필드에서 **DM으로 답장**, **Reply to Comment via DM**(댓글에 DM으로 답장) 같은 값을 정할 수 있어요. TikTok API가 지원하기 시작하는 대로 사용할 수 있게 돼요.
2. TikTok Interactive Messenger 액션은 Facebook·Instagram과 달리 템플릿을 지원하지 않아요. 단계적으로 사용할 수 있게 될 예정이에요.
3. TikTok Interactive Messenger 액션은 첨부파일, 버튼, 빠른 답장(Quick Replies)을 지원하지 않아요. TikTok API가 지원하기 시작하는 대로 사용할 수 있게 돼요.
