---

번역일: 2026-04-06
카테고리: 09-이메일
---

# SMTP 프로바이더 설정하기

Google과 Outlook 모두 직접 연동을 지원합니다. 이 서비스들을 통해 이메일을 발송하신다면 SMTP가 아닌 직접 연동을 사용해 주세요.

Gmail 동기화 가이드 -- [[how-to-set-up-two-way-email-sync-for-gmail]([how-to-set-up-two-way-email-sync-for-gmail.md)]([how-to-set-up-two-way-email-sync-for-gmail](how-to-set-up-two-way-email-sync-for-gmail.md))

Outlook 가이드 -- [[two-way-email-sync-for-outlook]([two-way-email-sync-for-outlook.md)]([two-way-email-sync-for-outlook](two-way-email-sync-for-outlook.md))

또한 LC Email을 사용한 대량 발송 기능도 내장되어 있습니다.

LC Email 가이드 -- [[[what-is-lc-email-i-want-to-know-more](what-is-lc-email-i-want-to-know-more.md)]]

SMTP를 사용하기로 선택하신다면 본인의 책임 하에 사용하시는 것입니다. 저희가 지원을 제공하지만 최선의 노력 기준으로 진행됩니다. SMTP는 전문가를 위한 고급 사용 사례로 간주되며, 대부분의 사용자가 Hyperclass를 통해 이메일을 발송하는 일반적인 방법이 아닙니다.

## SMTP 및 IMAP 서버 목록:
[https://www.arclab.com/en/kb/email/list-of-smtp-and-imap-servers-mailserver-list.html](https://www.arclab.com/en/kb/email/list-of-smtp-and-imap-servers-mailserver-list.html)

## 자체 SMTP 프로바이더 사용 시 발신자 이메일 주소 설정 제한 사항:

SMTP 프로바이더를 사용하는 경우, 여기서 마스킹하는 발신자 이메일이 연동한 이메일과 일치해야 합니다. [발신자 이메일 주소 설정 방법은 여기에서 자세히 알아보세요](sending-priority-from-name-address.md). 발신자 이메일이 SMTP 연동 이메일과 일치하지 않거나, 발신자 이메일이 SMTP 프로바이더에서 인증되지 않은 경우 전송에 실패합니다.

## 연동된 SMTP 연동이 작동하는지 테스트하려면:

이메일을 보낼 때 발신자 이메일 주소를 연동된 SMTP 이메일과 일치하도록 업데이트해야 합니다.

수동 대화에서는 발신자 이메일이 사용자 로그인 이메일로 설정되어 있으므로, 아래 이메일을 SMTP 연동 이메일과 일치하도록 설정해야 합니다. 기본적으로 여기에는 로그인 이메일이 표시됩니다:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029827288/original/gnPwP2x5q8zEvsCuFGHt1QHIQlamElUaEA.jpg?1721840067)

## 일일 이메일 발송 제한:

SMTP 프로바이더에는 하루에 보낼 수 있는 이메일 수에 제한이 있을 수 있습니다. [예를 들어 Gmail의 경우, 원격 이메일 클라이언트에서 서버에 연결할 때 하루에 약 100-150개의 이메일 제한이 있습니다](https://support.google.com/a/answer/166852?hl=en).

[무료 이메일 주소를 SMTP로 사용할 수 없는 이유](why-can-t-i-use-my-free-email-address-as-the-smtp-.md)에 대해 자세히 알아보세요.

## 워크플로우/이메일 통계

배달됨/반송됨 통계를 가져와서 표시할 수 없습니다. SMTP 연동은 열림과 클릭만 표시됩니다. 통계를 보려면 [Mailgun 또는 LC Email 설정](step-by-step-guide-to-set-up-mailgun.md)을 강력히 권장합니다. [이메일 통계 문제 해결](troubleshooting-email-statistics.md)에 대해 자세히 알아보세요.

## SMTP 프로바이더 설정 시 일반적인 문제:

1. 기본 프로바이더를 변경하는 동안 [이메일 재청구](email-re-billing-on-the-unlimited-297-2970-and-pro-497-4970-plans.md)가 비활성화되어 있는지 확인하세요

2. 동일한 입력으로 gmass 도구를 사용해보고 작동하는지 확인해 보세요: [https://www.gmass.co/smtp-test](https://www.gmass.co/smtp-test)

## SMTP 프로바이더 설정 도움말:

Google: [Google/Gmail/GSuite를 SMTP 프로바이더로 사용하기](using-google-gmail-google-workspace-as-your-smtp-provider.md)

[Google SMTP 별칭 설정](setting-alias-for-google-smtp.md)

Yahoo: Yahoo는 일시적으로 SMTP를 비활성화했으며 언제 다시 사용 가능할지 예정일이 없습니다.

Sendgrid: [SendGrid를 SMTP 프로바이더로 사용하기](using-sendgrid-as-the-smtp-provider.md)

Zoho: [Zoho를 SMTP 프로바이더로 사용하기](using-zoho-as-your-smtp-provider.md)

## Amazon SES 설정에 관하여:

- SMTP 설정(Settings) 페이지에 나열된 올바른 서버 이름을 사용하세요
- 포트 465를 사용하세요
- 생성한 IAM 사용자명과 비밀번호를 사용하세요 (다시 볼 수 없으니 저장해 두셨기를 바랍니다)
- Amazon AWS 루트 사용자 이메일 주소를 사용하세요

Amazon SES 빠른 시작

[https://docs.aws.amazon.com/ses/latest/DeveloperGuide/quick-start.html](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/quick-start.html?fbclid=IwAR3h1k7nhVgILHICO0e2RRMZ5kqlh7WXXEtM1b-9InA_au2Is99hWQgUFCM)

Amazon SES 발송 할당량 관리
[https://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-quotas.html](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-quotas.html?fbclid=IwAR1Dd2k5LUYrCYBdCkMbVWX5OCeRnwWNsfKDUwpKMOniKu5jmTg2uBShrck)

Amazon SES 샌드박스에서 벗어나기
[https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html?fbclid=IwAR3aLfFnZ8BBIil1bN8yhPOzDI5MOAYIaaWS-EmcACvq6xXThRdGr8FoAP0)

## Outlook / Microsoft Office 365 설정에 관하여:

2단계 인증이 꺼져 있음에도 불구하고 인증 실패 오류가 발생하는 것이 일반적입니다. Microsoft가 보안 정책을 변경했습니다. 이제 서드파티 앱에서는 SMTP 인증을 활성화해야 합니다. SMTP 활성화 가이드는 다음과 같습니다 > [https://docs.microsoft.com/en-us/exchange/mail-flow-best-practices/how-to-set-up-a-multifunction-device-or-application-to-send-email-using-microsoft-365-or-office-365](https://docs.microsoft.com/en-us/exchange/mail-flow-best-practices/how-to-set-up-a-multifunction-device-or-application-to-send-email-using-microsoft-365-or-office-365)

위 가이드가 도움이 되지 않는다면, 계정 인증을 위해 Outlook 지원팀에 문의해 주세요.

## SMTP 이메일이 발송됨 상태에서 멈춰 있는 이유

SMTP의 경우, 현재 발송됨, 열림, 클릭 이벤트만 수신합니다. 배달됨 이벤트는 SMTP 프로바이더로부터 제공되지 않습니다.

이러한 제한으로 인해 시스템은 열림 이벤트를 받은 후에야 이메일을 배달됨으로 표시합니다.

그래서 이메일이 처음에는 발송됨으로 표시됩니다. 수신자가 이메일을 열면 상태가 그에 따라 업데이트됩니다.

## 자주 묻는 질문:

### Q: 이메일 서비스 > SMTP 서비스 탭에서 "서비스 추가" 버튼이 없어요. 어떻게 해결하나요?

A: 에이전시 보기(Agency View) > 하위 계정(Sub-accounts) > 점 3개 클릭 > 클라이언트 관리(Manage Client)로 전환하세요

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030990778/original/1NAK5QK9IlXxPlsN-xmBJpq5lMvM1QTfyA.png?1723595394)

고급 설정(Advanced Settings) 클릭 > "하위 계정 이메일 서비스 설정에서 이메일 서비스 추가 버튼 비활성화"가 꺼져 있는지 확인하세요

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030990761/original/IQ70geRyZWV4bKSosx3qOb5Eni3qMnRH8g.png?1723595268)

### Q: 하위 계정에서 몇 개의 SMTP 서비스 프로바이더를 사용할 수 있나요?

A: 하위 계정은 여러 SMTP 서비스 프로바이더를 가질 수 있습니다. 하지만 동일한 SMTP 자격 증명을 두 번 이상 추가할 수 없으므로, 동일한 이메일 ID를 다른 연동에서 사용하는 것은 허용되지 않습니다. 또한 동일한 프로바이더(예: Gmail)는 두 번 추가할 수 없습니다.

## 관련 가이드:

[SMTP 설정 도움말 링크 숨기기]([hide-the-smtp-setup-help-doc-link](hide-the-smtp-setup-help-doc-link.md))

[Google SMTP 별칭 설정]([setting-alias-for-google-smtp](setting-alias-for-google-smtp.md))

---
*원문 최종 수정: Wed, 28 Jan, 2026 at 7:26 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*