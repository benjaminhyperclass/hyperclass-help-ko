---

번역일: 2026-04-07
카테고리: 09-이메일 > 메일건
---

# 이메일 발송에 사용되는 이메일 제공업체의 우선순위

# 이메일 발송 시 사용되는 이메일 제공업체 우선순위

## 1. 하위 계정 기본 제공업체 (Sub-account 보기)

![하위 계정 기본 제공업체 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279982731/original/zbPvxMEXm3pq7JIa2cM_0D5R-KAY4xq9XQ.png?1675707794)

## 2. 로케이션별 이메일 설정 (Agency 보기)

로케이션 레벨에서 기본 제공업체가 선택되지 않은 경우, Agency 보기에서 설정된 제공업체를 사용합니다.

[https://app.gohighlevel.com/settings/email_services](https://app.gohighlevel.com/settings/email_services)

**로케이션별 Mailgun 설정:**

- 각 로케이션을 고객의 Mailgun 또는 본인의 Mailgun으로 설정할 수 있습니다
- 여러 로케이션에 동일한 Mailgun API와 동일한 도메인/서브도메인을 사용할 수 있습니다
- 여러 로케이션에 동일한 Mailgun API와 다른 도메인/서브도메인을 사용할 수 있습니다
- 여러 로케이션에 각각 다른 Mailgun API와 도메인/서브도메인을 사용할 수 있습니다
- 각 로케이션마다 고유한 도메인/서브도메인을 설정하여 콜드 이메일 수신을 처리할 수도 있습니다. [콜드 이메일 수신 설정에 대한 자세한 내용](cold-email-inbound-setup.md)

**로케이션별 LC 이메일 설정:**

- 에이전시 레벨에서 커스텀 도메인을 추가하면, 하위 계정 레벨에서 커스텀 도메인을 설정하기 전까지는 모든 하위 계정에 적용됩니다. 하위 계정에서 커스텀 도메인을 설정하면 해당 하위 계정의 도메인이 우선 적용됩니다.

관련 가이드:
- [LC - Email이란? 더 자세히 알아보기](what-is-lc-email-.md)
- [내 에이전시를 LC - Email로 마이그레이션하는 방법](how-to-migrate-my-agency-over-to-lc-email.md)
- [전용 발송 도메인 설정 방법 (LC Email)](dedicated-email-sending-domains-overview-setup.md)
- [GoDaddy를 사용한 전용 발송 도메인 설정 방법 (LC Email)](godaddy-dedicated-sending-domain-setu-lc-email-.md)

![로케이션별 이메일 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279982772/original/VaHl4lAMpUxjgcZsYcWwp920XsXHSheaUA.png?1675707822)

이메일 서비스 설정을 위한 새로운 다운로드 기능이 추가되었습니다. 이 옵션은 대량 계정을 관리하는 사용자에게 특히 유용하며, 이메일 설정을 더 쉽게 처리할 수 있는 방법을 제공합니다:

![이메일 설정 다운로드 기능](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003776772/original/DCVsZICi-ulERP-6Euya18IckqdaGaEGBQ.png?1690410906)

## 3. Email Services 탭의 에이전시 기본 제공업체 (Agency 보기)

[https://app.gohighlevel.com/settings/email_services](https://app.gohighlevel.com/settings/email_services)

![에이전시 기본 제공업체 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279983260/original/wnB4delmXyXEl7HCwnIUbAzHqc7AHcj6gg.png?1675708045)

- 새로 생성되는 모든 로케이션은 이 설정된 Mailgun API 키를 기반으로 한 설정을 상속받습니다
- 이메일 인증 코드 발송에도 이 설정이 사용됩니다

## 4. LeadConnector Email

아무것도 설정되지 않은 경우, 다음과 유사한 서브도메인을 사용하여 이메일을 발송하고 수신합니다.

![LeadConnector 이메일 기본 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48190650236/original/d1nUQfQzUpkJ6yrUxRHE-kMy5QxGulcFcQ.png?1644970144)

---
*원문 최종 수정: Wed, 26 Jul, 2023 at 5:36 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*