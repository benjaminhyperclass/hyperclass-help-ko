---
원문: /support/solutions/articles/155000008289-communities-workflow-triggers-for-posts-comments-requests-and-events
번역일: 2026-11-06
카테고리: 17-멤버십-커뮤니티
---

# 워크플로우 트리거 — 커뮤니티 가입 요청 거절·게시글·댓글·이벤트 등록(Group Joining Request Rejected, Group Post Created, Group Comment Created, Member Registered for Group Event)

하이퍼클래스 **커뮤니티** 그룹에서 가입 요청이 거절되거나, 게시글이나 댓글이 올라오거나, 멤버가 그룹 이벤트에 등록하면 워크플로우를 자동으로 시작할 수 있어요. 이 문서에서는 트리거 4개의 동작과 필터 설정 방법, 워크플로우를 만들어 게시하는 순서를 안내해요.

## 멤버 활동용 커뮤니티 워크플로우 자동화란?

멤버 활동용 커뮤니티 워크플로우 자동화는 그룹 안에서 일어나는 활동을 트리거로 삼아 워크플로우를 시작하는 기능이에요. 가입 요청 거절, 게시글·댓글 작성, 그룹 이벤트 등록이 여기에 해당해요. 그룹 활동을 워크플로우와 바로 연결하면 알림을 보내고, 후속 연락을 하고, 참여도를 자동으로 기록할 수 있어요.

하이퍼클래스에는 CRM, 결제, 커뮤니티 전반에 걸쳐 다양한 워크플로우 트리거가 있고, 모두 **Workflow Builder**(워크플로우 빌더)에서 관리해요. 이번 커뮤니티 트리거가 더해져 그룹도 계정의 다른 영역과 같은 수준으로 자동화할 수 있어요.

## 커뮤니티 워크플로우 트리거를 쓰면 좋은 점

이 트리거들은 멤버가 그룹에서 한 행동을 알맞은 시점에, 알맞은 대상에게 이어지는 자동화로 바꿔 줘요.

- 자동화할 수 있는 일이 늘어나요. 가입 요청 거절, 새 게시글, 새 댓글, 이벤트 등록이 생기면 직접 확인하거나 내보내기를 하지 않아도 워크플로우가 시작돼요.
- 필터로 대상을 좁힐 수 있어요. **Group**(그룹), **Channel**(채널), **Post Title**(게시글 제목), **Post Content**(게시글 내용), **Comment Content**(댓글 내용), **Event Title**(이벤트 제목) 필터를 쓰면 관련 있는 활동에만 워크플로우가 실행돼요.
- 모더레이션과 모니터링이 빨라져요. 우려되는 게시글이나 댓글이 올라오면 모더레이터에게 알리고, VIP가 참여하면 담당 매니저에게 알려요. 민감한 활동은 비공개 검토 채널로 보낼 수도 있어요.
- 커뮤니티가 커져도 손이 덜 가요. 직접 연락하고, 태그를 달고, 후속 업무를 챙기던 일을 표준화된 자동 흐름으로 바꿀 수 있어요. 멤버가 늘어도 그대로 쓸 수 있어요.
- 커뮤니티와 워크플로우가 더 긴밀하게 연결돼요. 기존 커뮤니티 트리거인 **Group Access Granted**(그룹 액세스 부여됨), **Group Access Revoked**(그룹 액세스 해제됨), 리더보드 기반 트리거와 함께 쓰면 첫 가입부터 지속적인 참여와 게이미피케이션까지 이어지는 흐름을 만들 수 있어요.

## Group Joining Request Rejected (그룹 가입 요청 거절됨)

**Group Joining Request Rejected**(그룹 가입 요청 거절됨)는 특정 그룹에 대한 멤버의 가입 요청이 거절되면 실행되는 트리거예요. 거절된 신청자에게 정중한 안내를 보내거나, 다른 자료를 권하거나, 내부 팀에 알리는 식으로 후속 흐름을 체계적으로 관리할 수 있어요.

이럴 때 쓰세요.

- 거절 사실과 다음 단계를 알리는 친절한 메시지를 자동으로 보내고 싶을 때
- 거절된 요청을 CRM에 기록해 두었다가 나중에 연락하거나 리포트에 쓰고 싶을 때
- 가치가 높은 신청자가 거절되면 모더레이터나 영업 담당자에게 알리고 싶을 때

트리거 동작

- 발생 시점: 커뮤니티 그룹의 가입 요청이 거절될 때
- 필수 필터: **Group** – 트리거를 적용할 그룹을 반드시 지정해야 해요.
- 이어서 자주 쓰는 액션:
  - 액세스가 거절된 이유와 승인받는 방법을 이메일이나 DM으로 안내하기
  - 팀원이 신청서를 검토하도록 작업 만들기
  - 구분을 위해 태그 추가하기(예: "커뮤니티 – 가입 요청 거절")

![Group Joining Request Rejected 트리거 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077055813/original/gJwNqLkmN3BPhs7S9M0rioekZjGNoH6bmQ.png?1785253202)

## Group Post Created (그룹 게시글 생성됨)

**Group Post Created**(그룹 게시글 생성됨)를 쓰면 지정한 커뮤니티 그룹에 새 게시글이 올라올 때마다 워크플로우를 실행할 수 있어요. 멤버 참여를 자동화하거나, 중요한 글을 알맞은 곳으로 보내거나, 특정 조건에 맞는 글을 모니터링할 때 알맞아요.

이 트리거는 댓글이 아니라 최상위 게시글만 대상으로 해요. 채널과 내용 필터를 함께 쓰면 특히 효과적이에요.

트리거 동작

- 발생 시점: 커뮤니티 그룹에 새 게시글이 올라올 때
- 필터:
  - **Group**(필수) – 대상 그룹을 지정해요.
  - **Channel** – 특정 채널로 한정해요(예: 공지, Q&A).
  - **Post Title** – 제목을 기준으로 게시글을 골라요(예: "런칭"이 포함된 제목).
  - **Post Content** – 본문 내용을 기준으로 게시글을 골라요(예: "환불", "문의" 등 지켜보고 싶은 키워드가 포함된 글).

활용 아이디어

- 누군가 도움을 요청하거나 문의하는 글을 올리면 안내 메시지를 자동으로 답글로 보내기
- VIP나 파트너가 주요 채널에 글을 올리면 이메일이나 Slack으로 팀에 알리기
- "환영" 채널에 자기소개 글이 올라오면 육성 워크플로우 시작하기
- 특정 키워드가 포함된 게시글에 표시해 모더레이션 검토 대상으로 분류하기

![Group Post Created 트리거 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077055880/original/G11CSrV0Cc_zzWcwJfqY3mRCVnYmkJKFAA.png?1785253245)

## Group Comment Created (그룹 댓글 생성됨)

**Group Comment Created**(그룹 댓글 생성됨)는 기존 그룹 게시글에 댓글이 달리면 실행돼요. 글이 많이 올라오는 스레드에서 놓치기 쉬운 답글, 질문, 위험 신호가 있는 댓글을 잡아내기 좋아서 참여도를 깊이 있게 추적할 때 알맞아요.

**Group Post Created**와 같은 정보에 더해 댓글 내용까지 정확히 가져와요.

트리거 동작

- 발생 시점: 커뮤니티 그룹의 게시글에 새 댓글이 달릴 때
- 필터:
  - **Group**(필수) – 하나 이상의 그룹으로 한정해요.
  - **Channel** – 특정 채널로 좁혀요.
  - **Post Title** – 특정 제목의 게시글에 달린 댓글에만 실행해요.
  - **Post Content** – 원래 게시글의 내용을 기준으로 걸러요.
  - **Comment Content** – 댓글에 쓰인 내용을 기준으로 걸러요(예: "해지", "환불", "문제", 비속어 등 키워드).

활용 아이디어

- 댓글에 긴급 대응이 필요한 키워드가 있으면 지원 티켓 자동으로 열기
- 가치가 높은 고객이 게시글에 질문을 남기면 담당 매니저에게 알리기
- 멤버가 도움이 되는 답변을 남기면 게이미피케이션 포인트를 주거나 칭찬 메시지 보내기
- 해로울 수 있거나 정책에 어긋나는 댓글을 모더레이터 검토로 보내기

![Group Comment Created 트리거 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077055967/original/XPkByHs-Wgx1ony27J-GB34DBpwPRZvRng.png?1785253280)

## Member Registered for Group Event (멤버가 그룹 이벤트에 등록함)

**Member Registered for Group Event**(멤버가 그룹 이벤트에 등록함)를 쓰면 특정 커뮤니티 그룹에 연결된 이벤트에 누군가 등록할 때 워크플로우를 시작할 수 있어요. 리마인더, 후속 연락, 이벤트 이후 육성 같은 자동화의 출발점으로 쓰기 좋아요.

트리거 동작

- 발생 시점: 멤버가 그룹 이벤트에 등록할 때
- 필터:
  - **Group**(필수) – 이벤트를 여는 그룹을 선택해요.
  - **Event Title** – 이벤트 이름이나 이름 패턴으로 하나 또는 여러 이벤트를 지정해요(예: "월간 Q&A").

활용 아이디어

- 캘린더 링크와 준비 자료가 담긴 확정 안내 메시지 보내기
- 등록자를 후속 캠페인에 추가해 다시보기와 업셀 오퍼 보내기
- VIP나 특정 세그먼트가 등록하면 호스트에게 알리기
- 등록한 이벤트 유형에 따라 연락처에 자동으로 태그 달기(예: "웨비나 – 상품 데모 참석자")

![Member Registered for Group Event 트리거 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077056117/original/ZReZnapGPG016hed2aCx80NhHCehhuasZA.png?1785253351)

## 커뮤니티 워크플로우 트리거 설정하기

다음 단계를 따라 4가지 트리거 중 원하는 것을 설정하고 자동 참여 흐름을 만들어 보세요.

이 트리거들의 설정 방식은 하이퍼클래스의 다른 워크플로우 트리거와 같아요. 트리거를 고르고, 필터를 추가한 뒤, 실행할 액션을 정해요. 이 순서를 익혀 두면 계정 전체에서 일관된 자동화를 만들 수 있어요.

### 1단계. 워크플로우 빌더 열기

1. 하이퍼클래스 서브 계정에서 **자동화 > 워크플로우**로 이동하세요.
2. **Create Workflow**(워크플로우 만들기)를 클릭하세요. 커뮤니티 트리거를 추가할 기존 워크플로우가 있다면 그것을 열어도 돼요.

![워크플로우 목록에서 워크플로우 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077056407/original/vVAwf63pyxNGsd8gMhSzuLUxU_2wISCvpw.png?1785253438)

### 2단계. 커뮤니티 트리거 추가하기

1. 워크플로우 캔버스에서 **Add New Trigger**(새 트리거 추가)를 클릭하세요.
2. 트리거 목록에서 **Communities**(커뮤니티) 카테고리를 찾으세요.
3. 다음 4가지 트리거 중 하나를 선택하세요.
   - **Group Joining Request Rejected**
   - **Group Post Created**
   - **Group Comment Created**
   - **Member Registered for Group Event**

![트리거 목록에서 Communities 카테고리 찾기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077056522/original/rUMIRSXeZRT1o_zN_HkBGs3d7jK0woI8MA.png?1785253496)

![Communities 트리거 4가지 중 선택하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077056639/original/qFH6eTg5A0sgUsrW7CKXPLNJkrbjn1M34A.png?1785253543)

### 3단계. 필수 필터 설정하기

트리거마다 최소한 **Group** 필터가 필요하고, 트리거에 따라 선택 필터가 더 있어요.

1. **Filters**(필터) 아래에서 **Group**(필수)을 설정하고, 모니터링할 커뮤니티 그룹을 선택하세요.
2. (선택) 트리거에 맞춰 필터를 더 추가하세요.
   - **Channel** – 게시글·댓글 트리거에서 쓸 수 있어요.
   - **Post Title** / **Post Content** – 특정 단어나 문구가 포함된 게시글을 고를 때 써요.
   - **Comment Content** – 특정 댓글에 반응할 때 써요.
   - **Event Title** – 이벤트 등록 트리거에서 쓸 수 있어요.
3. **Save Trigger**(트리거 저장)를 클릭하세요.

![트리거 필터 설정과 Save Trigger 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077056777/original/jXpTQc1C9h9OG7M3sh9_rTFxrr8XEy93ug.png?1785253610)

### 4단계. 자동화 흐름에 액션 추가하기

트리거 설정이 끝나면 트리거가 실행됐을 때 일어날 일을 정해요.

자주 쓰는 액션은 다음과 같아요.

- **Send Email**(이메일 보내기), **SMS**, **In-app notification**(앱 내 알림)으로 멤버나 내부 팀에 알리기
- **Create a Task**(작업 만들기)로 모더레이터나 담당 매니저에게 업무 지정하기
- **Add/Remove Tags**(태그 추가/제거)로 커뮤니티 활동에 따라 연락처 분류하기
- **Add to Another Workflow**(다른 워크플로우에 추가)로 연락처를 더 큰 육성 또는 온보딩 시퀀스에 등록하기
- **Update Contact Fields**(연락처 필드 업데이트)로 마지막으로 참여한 그룹, 관심 카테고리 같은 정보 갱신하기

### 5단계. 테스트하고 게시하기

테스트용 연락처나 테스트용 멤버 계정으로 설정한 트리거에 맞는 활동을 해 보세요.

- 가입 요청을 보낸 뒤 거절하기
- 게시글이나 댓글 작성하기
- 그룹 이벤트에 등록하기

그런 다음 다음 내용을 확인하세요.

- 연락처가 워크플로우 실행에 추가됐는지
- 이메일, 태그, 작업 등 알맞은 액션이 실행됐는지

문제가 없으면 워크플로우의 **Publish**(게시) 토글을 켜세요.
