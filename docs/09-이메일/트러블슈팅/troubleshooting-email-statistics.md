---

번역일: 2026-04-07
카테고리: 09-이메일 > 트러블슈팅
---

# 이메일 통계 문제 해결

**목차**

- [이메일 통계가 표시되지 않는 이유](#이메일-통계가-표시되지-않는-이유)
  - [1. 사용자가 어떤 방식으로 이메일을 보내는지 확인하기](#1-사용자가-어떤-방식으로-이메일을-보내는지-확인하기)
  - [2. SMTP 제공업체 사용 시 제한사항](#2-smtp-제공업체-사용-시-제한사항)
- [Mailgun API 키 재설정 시도](#mailgun-api-키-재설정-시도)
- [CNAME 레코드 재확인](#cname-레코드-재확인)
- [Mailgun 웹훅 재확인](#mailgun-웹훅-재확인)

## 이메일 통계가 표시되지 않는 이유

### 1. 사용자가 어떤 방식으로 이메일을 보내는지 확인하기

이메일 빌더 일괄 작업(Bulk Action)으로 보내는지, 스마트 리스트(Smart List)에서 보내는지, 워크플로우(Workflow)나 캠페인(Campaigns)에서 보내는지 확인하세요.

각 방식마다 이메일을 보내는 방법에 따라 통계가 표시되는 섹션이 다릅니다. 자세한 내용은 [모든 이메일 활동에 대해 이메일 통계가 어디에 표시되나요?](email-statistics.md)를 참고하세요.

이메일 템플릿을 클릭했을 때 이메일 통계가 누락되는 경우:

![이메일 템플릿 통계 누락](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48186969567/original/o7R9Zujq1hhYNwlXiBhBsGPczF6JdpTt5w.png?1644017728)

여기에서 이메일을 보낼 때만 이메일 빌더에서 통계가 표시됩니다:

![이메일 빌더 통계](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48186969568/original/8Grr4aFjwLE_qLJVsbh9xC4OHu8gAFhbYw.jpeg?1644017728)

### 2. SMTP 제공업체 사용 시 제한사항

SMTP 제공업체를 사용하는 경우, 전송됨/반송됨 통계를 가져와서 표시할 수 없습니다. SMTP 연동(Integration)은 열림과 클릭만 표시됩니다. 전체 통계를 보려면 Mailgun만 사용할 수 있습니다.

정확한 통계를 위해 Mailgun이나 LC Email 설정을 적극 권장합니다.

하위 계정(Sub-account)에서 이전에 SMTP 제공업체를 사용했고, 워크플로우에 SMTP 제공업체의 SMTP 통계가 포함되어 있다면, 통계가 제대로 표시되지 않을 수 있습니다. 워크플로우를 복제하고 새로 이메일을 보내서 통계가 제대로 표시되는지 확인해보세요.

## Mailgun API 키 재설정 시도

에이전시(Agency) 뷰 > **Settings(설정)** > **Email Services(이메일 서비스)** > **Location Settings(로케이션 설정)** > 하위 계정의 Mailgun API 연동 편집 > **Delete** 입력

그 다음 다시 연동하세요: [Mailgun API Key - Where to Find in Mailgun & Put in HighLevel](mailgun-private-api-key-setup.md)

![Mailgun API 키 재설정](https://i.ibb.co/1TVG21t/2023-1-24-11-12-42.gif)

## CNAME 레코드 재확인

CNAME 레코드는 Mailgun이 열림 및 클릭 추적, 구독 해지를 추적하는 데 필수적입니다. 해결 방법은 링크가 열리지 않거나 추적되지 않는 문제와 동일합니다:

[내 이메일 링크가 왜 바뀌며, 열리지 않는 이메일 링크를 어떻게 수정하나요?](how-to-fix-links-in-the-email-that-do-not-open-.md)

## Mailgun 웹훅 재확인

1. **Sending(발송)** 클릭
2. **Webhooks(웹훅)** 클릭
3. 하위 계정에 설정된 도메인/서브도메인을 기준으로 올바른 도메인이 선택되어 있는지 확인
4. 아래 스크린샷의 모든 웹훅이 설정되어 있어야 합니다
5. 설정되지 않았다면, 모든 Event type에 대해 **Add Webhook(웹훅 추가)** 클릭

![Mailgun 웹훅 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283724301/original/XuGLhQDfmu5CAwRdHREf2Ak9-qX5s6R9gg.png?1677265427)

---
*원문 최종 수정: Thu, 30 Jan, 2025 at 3:28 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*