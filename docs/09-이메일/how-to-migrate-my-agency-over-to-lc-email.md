---

번역일: 2026-04-06
카테고리: 09-이메일
---

# 에이전시를 LC - Email로 마이그레이션하는 방법

기존에 Mailgun이나 SMTP가 연동된 Hyperclass를 사용하고 계신 고객이시라면 아래 가이드를 따라해 주세요. 만약 '신규 에이전시'이시고 아직 SMTP/Mailgun 제공업체를 연동하지 않으셨다면 이미 기본적으로 LC - Email을 사용하고 계십니다.

LC - Email은 에이전시가 Mailgun이나 기타 외부 이메일 서비스 제공업체에 가입하는 번거로움을 피할 수 있도록 설계되었습니다. 과거에는 에이전시가 가입할 때 이메일 발송/수신을 위해 Mailgun이나 다른 이메일 서비스 제공업체와 반드시 연동해야 했습니다.

LC - Email을 사용하면 모든 하위 계정에서 별도 설정 없이도 이메일 발송 및 수신이 즉시 작동합니다. 이 문서는 에이전시와 하위 계정을 LC - Email로 마이그레이션하는 방법을 안내합니다.

#### 이 문서에서 다루는 내용:

#### [LC - Email로 마이그레이션하는 방법](#lc---email로-마이그레이션하는-방법)

#### [LC - Email 서버를 사용 중인지 확인하는 방법 (동영상)](#lc---email-서버를-사용-중인지-확인하는-방법-동영상))

관련 문서: [하위 계정에서 전용 발송 도메인 설정하기](dedicated-email-sending-domains-overview-setup.md)

## LC - Email로 마이그레이션하는 방법

에이전시 Settings(설정) > Email Services(이메일 서비스)로 이동하세요. 'Use LC - Email' 버튼이 보이면 LeadConnector를 기본 제공업체로 선택하고 안내에 따라 진행하세요:

![LC - Email 마이그레이션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029831993/original/FFrLN5kZPjqsmU1FrHsV7ksdR6nB3ndPYw.jpg?1721848787)

**참고사항:**

'Use LC - Email' 버튼을 클릭해도 이미 SMTP나 Mailgun이 연동된 하위 계정에는 영향을 주지 않습니다. 기존 SMTP 연동을 제거하려면 아래 단계를 따라해 주세요. 'Use LC - Email' 버튼을 클릭한 후 생성되는 모든 신규 계정은 자동으로 LC - Email로 전환됩니다. 원한다면 여전히 자체 Mailgun이나 SMTP를 연동하여 신규 계정을 LC - Email에서 다른 서비스로 변경할 수 있습니다.

도메인/서브도메인을 추가하려고 할 때 다음 오류가 표시된다면:

## **Request Failed**

This domain (replies.example.com) is already configured inside a Mailgun account.

Login to Mailgun and delete it from there so you can use it in LC Email

해당 도메인이 삭제되어야 한다고 생각되시면 새로운 지원 요청을 생성해 주세요.

![도메인 오류 메시지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029832042/original/v0M02hZm2B1viRUHbRD3mWAjg_Edg2NfSg.jpg?1721848869)

## SMTP 연동을 제거하려면:

1. LeadConnector를 기본 제공업체로 선택하세요
2. Gmail integration(Gmail 연동)을 클릭하세요
3. 휴지통 아이콘을 클릭하세요

![SMTP 연동 제거](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029832061/original/sLvqpJUiNauxdCOgNeyr8Fu_P7iHkx7owA.jpg?1721848911)

## LC - Email 서버를 사용 중인지 확인하는 방법 (동영상)

### 발송 도메인이 아래 목록에 있다면 LC - Email로 성공적으로 전환된 것입니다

[mg.msgsndr.org](//mg.msgsndr.org)

[mg.msgsndr.net](//mg.msgsndr.net)

[replies001.msgsndr.com](//replies001.msgsndr.com)

[replies.msgsndr.com](//replies.msgsndr.com)

[replies000.msgsndr.com](//replies000.msgsndr.com)

[ec1.msgsndr.org](//ec1.msgsndr.org)

[ec1.msgsndr.net](//ec1.msgsndr.net)

![LC Email 서버 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48258278599/original/NsnAs5TRldG6TnkrawVIUlQR9DnHQxQXzA.png?1666313812)

### 관련 문서: [하위 계정에서 전용 발송 도메인 설정하기](dedicated-email-sending-domains-overview-setup.md)

---
*원문 최종 수정: Wed, 24 Jul, 2024 at 2:23 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*