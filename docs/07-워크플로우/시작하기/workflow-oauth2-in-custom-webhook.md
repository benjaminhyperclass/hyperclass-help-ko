---
원문: /support/solutions/articles/155000003976-workflow-oauth2-in-custom-webhook
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Custom Webhook(커스텀 웹훅)에서 OAuth2 사용하기

워크플로우의 **Custom Webhook** 액션에서 OAuth2 인증을 쓰는 방법과, 저장된 토큰을 관리하는 방법을 안내해요.

## 개요

OAuth2는 가장 널리 쓰이는 인증 방식 중 하나예요. 보안이 매우 높아서 주로 대형 API에 쓰여요. OAuth2 인증을 쓰면 Google, Facebook, LinkedIn 등 다양한 API와 연동할 수 있어요.

## 작동 방식

- **Custom Webhook** 액션에서 인증 방식으로 **OAuth2**를 선택할 수 있어요.

![Custom Webhook 액션에서 OAuth2 인증 방식을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035073264/original/YhYeFi9f4AwclACkdSx8WokjgKoASmuqZg.png?1729500305)

![OAuth2를 선택한 Custom Webhook 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035073305/original/eAcmJLiCqIbhKiFqqZfffGEpbjhRBJnrjw.png?1729500317)

- **OAuth2**를 선택하면 기존 토큰을 고르거나 새 토큰을 요청할 수 있어요.

![기존 토큰을 선택하거나 새 토큰을 요청하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035073369/original/1GgP-1Ama_X24tw5WquXk4wIJm4auWGxwg.png?1729500359)

![토큰 선택 옵션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035073389/original/Z9tiHtKhIuLzCgStjD3cEDVzD55IlPlFiQ.png?1729500370)

## 토큰 관리하기

1. **글로벌 워크플로우 설정**으로 이동하세요.
2. **Manage Tokens**(토큰 관리) 섹션을 찾으세요.
3. **Manage Token**을 클릭하세요. 전체 토큰 목록이 담긴 팝업 창이 열려요.
4. 이 목록에서 토큰을 **업데이트**하거나 **삭제**할 수 있어요.

![글로벌 워크플로우 설정의 토큰 관리 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035074937/original/w9LfBMaxzxciDV72NjCUS4_o_1HR7b35lw.png?1729501178)

![토큰 목록이 표시된 팝업 창](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035074954/original/FbFXiTe3_sLfu4njnJ0-BvlzD-R4H2FLbw.png?1729501188)

![토큰을 업데이트하거나 삭제하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035074962/original/EVnue3m73srUk5Y1bnCbPee9p9ws5Eqt4Q.png?1729501194)
