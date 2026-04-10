---

번역일: 2026-04-07
카테고리: 07-워크플로우 > 시작하기
---

# 워크플로우 - 커스텀 웹훅에서 OAuth2 사용하기

커스텀 웹훅에서 OAuth2 지원 기능을 알아보세요.

**목차**

- [개요](#개요)
- [작동 방식](#작동-방식)

### 개요

OAuth2는 가장 중요하고 널리 사용되는 인증 방법 중 하나입니다. 매우 안전하기 때문에 일반적으로 대규모 API에서 사용됩니다.

OAuth2 인증을 통해 사용자는 Google, Facebook, LinkedIn 등 다양한 API와 연동할 수 있습니다. 이러한 연동은 제품의 무한한 가능성을 열어줍니다.

### 작동 방식

- 사용자는 커스텀 웹훅 액션에서 OAuth2를 인증 옵션으로 선택할 수 있습니다.

![OAuth2 인증 옵션 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035073264/original/YhYeFi9f4AwclACkdSx8WokjgKoASmuqZg.png?1729500305)

![OAuth2 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035073305/original/eAcmJLiCqIbhKiFqqZfffGEpbjhRBJnrjw.png?1729500317)

- 이 옵션을 선택하면 기존 토큰을 선택하거나 새 토큰을 요청할 수 있습니다.

![기존 토큰 선택 또는 새 토큰 요청](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035073369/original/1GgP-1Ama_X24tw5WquXk4wIJm4auWGxwg.png?1729500359)

![토큰 관리 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035073389/original/Z9tiHtKhIuLzCgStjD3cEDVzD55IlPlFiQ.png?1729500370)

- 토큰을 관리하려면 "전역 워크플로우 설정(Global Workflow Settings)"으로 이동하세요. "토큰 관리(Manage Tokens)" 섹션에서 토큰을 관리할 수 있습니다.
- "토큰 관리(Manage Token)"를 클릭하면 새 팝업 화면이 열리며 모든 토큰 목록이 표시됩니다.
- 여기서 토큰을 "업데이트(Update)"하거나 "삭제(Delete)"할 수 있습니다.

![전역 워크플로우 설정에서 토큰 관리](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035074937/original/w9LfBMaxzxciDV72NjCUS4_o_1HR7b35lw.png?1729501178)

![토큰 관리 팝업 창](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035074954/original/FbFXiTe3_sLfu4njnJ0-BvlzD-R4H2FLbw.png?1729501188)

![토큰 업데이트 및 삭제 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035074962/original/EVnue3m73srUk5Y1bnCbPee9p9ws5Eqt4Q.png?1729501194)

---
*원문 최종 수정: Wed, 23 Oct, 2024 at 12:32 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*