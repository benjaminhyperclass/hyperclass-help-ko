---
원문: https://help.gohighlevel.com/support/solutions/articles/155000009162-workflow-trigger-social-planner-posts
번역일: 2026-11-07
카테고리: 44-신기능-2026
---

# 워크플로우 트리거 — Social Planner Posts(소셜 플래너 게시물)

**Social Planner Posts**(소셜 플래너 게시물) 트리거를 쓰면 하이퍼클래스에서 소셜 미디어 게시물에 일어난 일을 기준으로 워크플로우를 시작할 수 있어요. 게시물이 예약, 게시, 승인, 거절되거나 게시에 실패했을 때 워크플로우가 실행되도록 만들 수 있어요. 예를 들어 게시물이 게시되지 않았을 때 팀에 자동으로 알릴 수 있어요.

## 중요 사항

- **소셜 플래너**로 연결한 소셜 계정만 지원해요.
- **연동**으로 연결한 소셜 계정은 아직 이 트리거에서 지원하지 않아요.
- 설정한 필터에 맞는 게시물 이벤트만 워크플로우를 시작해요.

## 사용할 수 있는 트리거 필터

필터를 쓰면 어떤 소셜 플래너 게시물에서 워크플로우를 시작할지 정할 수 있어요.

| 필터 | 선택 가능한 옵션 |
| --- | --- |
| **Category**(카테고리) | 소셜 플래너에 있는 카테고리 |
| **Platform**(플랫폼) | Facebook, Instagram, Bluesky, Google Business Profile, LinkedIn, Pinterest, Threads, TikTok, YouTube |
| **Post Status**(게시물 상태) | Approved(승인됨), Failed(실패), Approval Rejected(승인 거절됨), Approval Requested(승인 요청됨), Published(게시됨), Scheduled(예약됨) |
| **Post Type**(게시물 유형) | Carousel(캐러셀), Post(게시물), Reel(릴스), Short(숏츠), Story(스토리) |
| **Social Accounts**(소셜 계정) | 소셜 플래너에 연결된 계정 |
| **Tags**(태그) | 소셜 플래너에 있는 태그 |

필터를 여러 개 조합하면 원하는 게시물만 골라낼 수 있어요. 예를 들어 **Platform: Facebook**과 **Post Status: Published**를 함께 선택하면 Facebook 게시물이 게시될 때 워크플로우가 실행돼요.

## Social Planner Posts 트리거 설정하기

1. **자동화 > 워크플로우**로 이동해 새 워크플로우를 만들거나 기존 워크플로우를 열어요.

   ![워크플로우 화면](https://jumpshare.com/share/juz6G2sMaACOF4sNm0Fd+/Screen+Shot+2026-10-14+at+17.17.17.png)
2. **Add new trigger**(새 트리거 추가)를 클릭해요.
3. **Social planner posts**를 검색해서 선택해요.
4. **Filters**(필터)에서 **Platform**, **Post Status** 등 원하는 조건을 선택해요.
5. **Save trigger**(트리거 저장)를 클릭해요.
6. 내부 알림 같은 액션을 추가하고 설정해요.
7. 워크플로우를 저장한 뒤 **Publish**(게시)를 클릭해요.

   ![트리거 설정부터 게시까지 진행하는 화면 녹화](https://jumpshare.com/share/6eLsFr3W4MhWf1IKJUc0+/GIF+Recording+2026-10-14+at+17.24.33.gif)

## 워크플로우 액션에서 게시물 정보 사용하기

메시지를 보내는 액션에서 **Custom values**(커스텀 값) > **Social planner posts**를 선택하면 트리거가 된 게시물의 정보를 넣을 수 있어요. 모든 메시지 액션에서 되는 것은 아니고, 지원하는 액션에서만 쓸 수 있어요.

사용할 수 있는 필드는 다음과 같아요.

- **Post Event**(게시물 이벤트)
- **Social Account**(소셜 계정)
- **Social Account Name**(소셜 계정 이름)
- **Platform**
- **Post Type**
- **Category**
- **Tags**
- **Post ID**(게시물 ID)

이 필드를 쓰면 자동 발송 메시지에 게시물 정보를 함께 보낼 수 있어요.

![메시지 액션에서 게시물 커스텀 값을 넣는 화면 녹화](https://jumpshare.com/share/jy3BDZJw6yeRXxYCVuqB+/GIF+Recording+2026-10-14+at+17.28.34.gif)
