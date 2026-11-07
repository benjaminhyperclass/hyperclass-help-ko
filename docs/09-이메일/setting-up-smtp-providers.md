---
원문: /support/solutions/articles/48001059689-setting-up-smtp-providers
번역일: 2026-11-06
카테고리: 09-이메일
---

# SMTP 제공업체 설정 가이드

SMTP 제공업체를 하이퍼클래스에 연동하고, 테스트하고, 문제가 생겼을 때 해결하는 방법을 한곳에 모았어요. **이메일 서비스** 메뉴에서 SMTP를 설정하기 전에 먼저 읽어 보세요.

{% hint style="warning" %}
**SMTP를 사용하기 전에 꼭 읽어 보세요**

하이퍼클래스는 **Google**, **Outlook**과 직접 연동돼요. 이 제공업체로 이메일을 보낸다면 SMTP 대신 아래 연동을 사용하세요.

- Gmail 동기화: [Gmail 양방향 이메일 동기화](../42-통합/connect-google-to-use-gmail-for-email.md)
- Outlook 동기화: [Outlook 양방향 이메일 동기화](../42-통합/Other-Integrations/two-way-email-sync-for-outlook.md)
- 하이퍼클래스 이메일: [하이퍼클래스 이메일이란?](what-is-lc-email.md)

SMTP는 본인 판단에 따라 쓰는 고급 방식이에요. 하이퍼클래스에서 이메일을 보내는 일반적인 방법이 아니고, 지원도 최선을 다하는 범위에서만 제공돼요.
{% endhint %}

## SMTP·IMAP 서버 목록

사용 중인 이메일 제공업체의 SMTP·IMAP 서버 설정은 아래 참고 목록에서 찾아보세요.

[SMTP & IMAP 서버 참고 목록](https://www.arclab.com/en/kb/email/list-of-smtp-and-imap-servers-mailserver-list.html)

## 발신자 이메일 주소 설정 시 제한 사항

SMTP 제공업체를 쓴다면 여기에서 지정하는 발신자 이메일이 **연동한 이메일과 같아야** 해요. 발신자 이메일 주소를 설정하는 방법은 별도 도움말에서 확인할 수 있어요.

발신자 이메일이 SMTP로 연동한 이메일과 다르거나, SMTP 제공업체에서 인증되지 않은 주소라면 이메일이 전달되지 않아요.

## SMTP 연동 테스트하기

이메일을 보낼 때 발신자 이메일 주소를 SMTP로 연동한 이메일과 같게 바꿔 주세요.

대화에서 직접 이메일을 보내면 발신자 이메일은 기본적으로 로그인한 이메일로 표시돼요. 이 주소를 SMTP로 연동한 이메일로 바꿔야 해요.

![SMTP 발신자 이메일 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029827288/original/gnPwP2x5q8zEvsCuFGHt1QHIQlamElUaEA.jpg?1721840067)

## 일일 발송 한도

SMTP 제공업체에 따라 하루에 보낼 수 있는 이메일 수가 제한될 수 있어요. 예를 들어 [Gmail은 원격 이메일 클라이언트로 연결하면 하루 약 100~150통으로 제한](https://support.google.com/a/answer/166852?hl=en)해요.

무료 이메일 주소를 SMTP로 쓸 수 없는 이유는 무엇인가요?

## 워크플로우·이메일 통계

SMTP로는 발송(sent), 열람(open), 클릭(click), 바운스(bounce) 이벤트만 받을 수 있어요. SMTP 제공업체가 전달 완료(delivered) 이벤트를 보내 주지 않기 때문이에요.

{% hint style="info" %}
이런 한계 때문에 시스템은 열람 이벤트를 받은 뒤에야 이메일을 전달 완료로 표시해요.
{% endhint %}

전체 발송 통계를 보려면 Mailgun이나 하이퍼클래스 이메일을 설정하는 것을 권장해요. 이메일 통계 문제 해결 방법도 별도 도움말에서 확인할 수 있어요.

## SMTP 이메일이 **발송됨** 상태에서 멈춰 있어요

SMTP로는 발송(sent), 열람(open), 클릭(click), 바운스(bounce) 이벤트만 받아요. SMTP 제공업체가 전달 완료(delivered) 이벤트를 보내 주지 않기 때문이에요.

그래서 시스템은 열람 이벤트를 받은 뒤에야 이메일을 전달 완료로 표시해요.

이메일이 처음에 **발송됨**으로 보이는 것도 이 때문이에요. 받는 사람이 이메일을 열면 상태가 바뀌어요.

## SMTP 제공업체 설정 시 자주 생기는 문제

1. 기본 제공업체를 변경하는 동안에는 **Email Re-Billing**(이메일 재청구)을 꺼 두세요.
2. GMass SMTP 테스트 도구로 SMTP 자격 증명을 테스트해 보세요: [gmass.co/smtp-test](https://www.gmass.co/smtp-test)

## SMTP 제공업체별 도움말

- Google / Gmail / GSuite – Google을 SMTP 제공업체로 사용하기
- Google SMTP 별칭(Alias) 설정하기
- Yahoo – SMTP를 일시적으로 사용할 수 없어요. 다시 사용할 수 있는 시점은 정해지지 않았어요.
- SendGrid – SendGrid를 SMTP 제공업체로 사용하기
- Zoho – Zoho를 SMTP 제공업체로 사용하기

## Amazon SES 설정하기

Amazon SES를 SMTP 제공업체로 설정할 때는 아래 순서를 따르세요.

1. **SMTP 설정** 페이지에 나와 있는 서버 이름을 정확히 입력하세요.
2. 465 포트를 사용하세요.
3. 직접 만든 IAM 사용자 이름과 비밀번호를 입력하세요. 나중에 다시 볼 수 없으니 꼭 저장해 두세요.
4. Amazon AWS 루트 사용자 이메일 주소를 입력하세요.

Amazon SES 참고 자료

- [Amazon SES 빠른 시작 가이드](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/quick-start.html)
- [Amazon SES 발송 할당량 관리하기](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-quotas.html)
- [Amazon SES 샌드박스에서 벗어나기](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html)

## Outlook / Microsoft Office 365 설정하기

2단계 인증을 꺼 두었는데도 "Authentication unsuccessful" 오류가 나는 경우가 많아요. Microsoft가 보안 요건을 바꿔서, 이제 서드파티 앱은 SMTP 인증을 명시적으로 켜야 해요.

[Microsoft 가이드: SMTP 인증 켜기](https://docs.microsoft.com/en-us/exchange/mail-flow-best-practices/how-to-set-up-a-multifunction-device-or-application-to-send-email-using-microsoft-365-or-office-365)

위 가이드로도 해결되지 않으면 Outlook 고객지원에 문의해서 계정 인증을 받으세요.

## 자주 묻는 질문

### **이메일 서비스** > **SMTP services**(SMTP 서비스) 탭에 **+ 서비스 추가** 버튼이 안 보여요. 어떻게 해야 하나요?

에이전시 관리자가 설정을 바꿔야 해요. **에이전시 보기로 전환**한 뒤 **서브 계정**으로 이동하세요. 해당 계정 옆의 점 세 개를 클릭하고 **고객 관리**를 선택하세요.

![고객 관리 메뉴 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030990778/original/1NAK5QK9IlXxPlsN-xmBJpq5lMvM1QTfyA.png?1723595394)

**고급 설정**을 클릭하고 **Disable the Add Email Service button in the sub-account Email Services Settings**(서브 계정 이메일 서비스 설정에서 이메일 서비스 추가 버튼 비활성화)가 꺼져 있는지 확인하세요.

![고급 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030990761/original/IQ70geRyZWV4bKSosx3qOb5Eni3qMnRH8g.png?1723595268)

### 서브 계정 하나에 SMTP 서비스 제공업체를 몇 개까지 추가할 수 있나요?

서브 계정 하나에 SMTP 서비스 제공업체를 여러 개 추가할 수 있어요. 다만 같은 SMTP 자격 증명은 두 번 이상 추가할 수 없어요. 같은 이메일 ID를 다른 연동에 쓰는 것도 안 돼요. 같은 제공업체(예: Gmail)도 두 번 추가할 수 없어요.
