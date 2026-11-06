---

번역일: 2026-04-07
카테고리: 09-이메일 > LC-이메일
---

# 전용 도메인 SMTP 인증 정보는 어디에서 찾을 수 있나요?

LC 이메일 전용 도메인을 위한 SMTP 인증 정보를 생성하고 찾는 방법을 알아보세요. smtp.mailgun.org 설정과 포트, SMTP 인증 정보 재설정/삭제 단계, 제한사항, IMAP 참고사항을 포함합니다.

---

목차

- [SMTP 인증 정보 생성하는 방법](#smtp-인증-정보-생성하는-방법)
- [Mailgun에서 지원하는 포트는?](#mailgun에서-지원하는-포트는)
- [SMTP 비밀번호 재설정하는 방법](#smtp-비밀번호-재설정하는-방법)
- [SMTP 인증 정보 삭제하는 방법](#smtp-인증-정보-삭제하는-방법)
- [SMTP 및 이메일 제한사항](#smtp-및-이메일-제한사항)
- [LC - 이메일 요금제](#lc-이메일-요금제)
- [IMAP 설정은 어디에서 찾을 수 있나요?](#imap-설정은-어디에서-찾을-수-있나요)
- [자주 묻는 질문](#자주-묻는-질문)
---

### 커뮤니티 튜토리얼 더보기

[https://youtu.be/B7KnqDLcxho](https://youtu.be/B7KnqDLcxho)

[https://youtu.be/m57kladVncA](https://youtu.be/m57kladVncA)

[https://youtu.be/QIChDtF10ZA](https://youtu.be/QIChDtF10ZA)

[https://youtu.be/E6OpiGGjcTs](https://youtu.be/E6OpiGGjcTs)

SMTP 서버를 사용하려면 도메인과 연결된 SMTP 인증 정보를 사용해야 합니다. SMTP 인증 정보는 추가하는 도메인마다 고유하다는 점을 참고하세요. 현재 추가된 사용자 목록을 확인하거나 사용자를 더 추가하려면 도메인 설정에서 쉽게 할 수 있습니다.

**참고**: 저희는 메일박스를 호스팅하지 않으므로 POP 또는 IMAP 프로토콜에 대한 지원을 제공하지 않습니다.
---

## **SMTP 인증 정보 생성하는 방법**

SMTP 인증 정보는 에이전시 레벨이 아닌 하위 계정 레벨(에이전시에서 할당한 도메인이 아님)에서 생성할 수 있습니다.

### 1단계: 하위 계정 설정으로 이동

Email Service(이메일 서비스) → SMTP Service(SMTP 서비스) → Dedicated Domain and IP(전용 도메인 및 IP) → 전용 도메인 하위의 SMTP Settings(SMTP 설정)으로 이동하세요.

![SMTP 설정 페이지로 이동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023337421/original/nMyZojgr2ZYUAZSkyYnJ6GXwk_Eyr_1HGw.png?1711087651)

### **2단계:** "Create New SMTP User(새 SMTP 사용자 생성)"을 클릭하고 사용자명과 비밀번호를 추가하세요

참고: Hyperclass은 SMTP 액세스에 대한 자동화된 승인 시스템을 사용합니다. 자격을 갖춘 하위 계정은 즉시 SMTP 인증 정보를 생성할 수 있습니다. 계정이 승인되지 않은 경우 Create New SMTP User(새 SMTP 사용자 생성) 옵션이 비활성화되거나 경고 메시지가 표시될 수 있습니다.

![새 SMTP 사용자 생성 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023337477/original/3gfn3HeigPBnj1KhpAJrkIlpaoOzAJ0ONw.png?1711087786)

![SMTP 사용자 생성 양식](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023337530/original/utUNsl_XodI8FsMRFgE8TrwwQdmfgvu_uA.png?1711087862)

**SMTP 설정:**
- SMTP 서버 주소: smtp.mailgun.org
- 보안 연결: 메일 클라이언트/웹사이트 SMTP 플러그인에 따른 TLS/SSL
- SMTP 사용자명: [사용자명@도메인이름.com]
- SMTP 비밀번호: [설정한 비밀번호]
- SMTP 포트: 25, 465 (SSL/TLS), 587 (STARTTLS), 2525

---

## **Mailgun에서 지원하는 포트는?**

저희 서버는 포트 25, 465 (SSL/TLS), 587 (STARTTLS), 2525를 지원합니다.

---

## **SMTP 비밀번호 재설정하는 방법**

비밀번호 재설정을 완료하려면 팝업 모달에 있는 "Reset Password(비밀번호 재설정)" 버튼을 클릭하세요.

![비밀번호 재설정 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023337656/original/22ZqznlGSww3OYVk2ULdCYph_uhwvbBG9A.png?1711088188)

![비밀번호 재설정 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023337668/original/NsTvuvM2YMJRI2xkQypolDdneD_Yn8-tJw.png?1711088202)

---

## **SMTP 인증 정보 삭제하는 방법**

SMTP 인증 정보를 삭제하려면 팝업 모달에 있는 "Delete(삭제)" 버튼을 클릭하세요.

![SMTP 인증 정보 삭제 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023337727/original/f7oeVWxByu7aA60MK7YoTBAA7c-citPWbg.png?1711088371)

![SMTP 인증 정보 삭제 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023337732/original/-c2VpTSwanpwk3Nc_sLI3fi87590WKS2TA.png?1711088383)

---

## SMTP 및 이메일 제한사항

1. SMTP 제한:
   - 각 전용 도메인당 최대 **5개의 SMTP 인증 정보**를 생성할 수 있습니다.

2. 일일 이메일 제한:
   - 각 계정은 **하루 1,500개 이메일** 제한이 있습니다.
   - 일일 제한을 초과하면 **모든 전용 도메인에서 SMTP 인증 정보가 자동으로 삭제**됩니다.

---

## LC - 이메일 요금제

저희는 모든 요금제에서 이메일 1,000개당 $0.675를 청구합니다. 이는 MailGun의 1,000개당 $0.80와 비교했을 때 대부분의 주요 SMTP 제공업체보다 저렴한 가격입니다.

Agency view(에이전시 보기) > Billing(결제) > Credits(크레딧): [모든 수신 및 발신 이메일(받는사람, 참조, 숨은참조)에 대해 요금이 청구됩니다.](../기타/what-is-lc-email-i-want-to-know-more.md)

---

## IMAP 설정은 어디에서 찾을 수 있나요?

IMAP은 메시지를 가져오는 데 사용되고, SMTP는 데이터를 보내는 데 사용됩니다.

**참고**: 저희는 메일박스를 호스팅하지 않으므로 POP 또는 IMAP 프로토콜에 대한 지원을 제공하지 않습니다. IMAP 설정에서는 SMTP 인증 정보를 사용할 수 없습니다.

IMAP 설정은 이메일 제공업체 설정에서 찾을 수 있습니다.

예시: Google을 사용하는 경우 Google에서 앱 비밀번호를 생성해야 합니다.

**사용자명**: 이메일 주소
**비밀번호**: 앱 비밀번호
- IMAP 호스트: imap.gmail.com
- IMAP 포트: 993

다음은 IMAP 호스트명을 얻는 방법을 안내하는 일부 이메일 제공업체의 지원 페이지입니다:

- [Amazon AWS](https://docs.aws.amazon.com/workmail/latest/userguide/using_IMAP.html)
- [Hostgator](https://www.hostgator.com/help/article/email-connection-settings)
- [Ionos](https://www.ionos.com/help/email/general-topics/settings-for-your-email-programs-imap-pop3/)
- [Kinghost](https://king.host/wiki/artigo/como-configurar-seu-e-mail-no-pipedrive/)
- [Rackspace](https://docs.rackspace.com/support/how-to/rackspace-email-and-hosted-exchange-settings/)
- [TransIP](https://www.transip.eu/knowledgebase/entry/309-the-email-settings-at-transip/)
- [Bluehost](https://www.bluehost.com/help/article/email-application-setup)
- [Titan](https://support.titan.email/hc/en-us/articles/900000215446-Configure-Titan-on-other-apps-using-IMAP-POP)
- [Dreamhost](https://help.dreamhost.com/hc/en-us/articles/215612887-Email-client-protocols-and-port-numbers)
- [InMotion](https://www.inmotionhosting.com/support/email/getting-started-guide-email/)

Verizon
- IMAP 호스트: imap.verizon.net
- IMAP 포트: 995

AOL
- IMAP 호스트: imap.aol.com  
- IMAP 포트: 993

사용하는 제공업체가 여기에 없다면 IMAP 설정에 대해 이메일 서비스 제공업체에 문의하시길 권합니다.

---

## **문제 해결**

SMTP 승인 및 "Unable to Create SMTP User(SMTP 사용자를 생성할 수 없습니다)"

**Unable to Create SMTP User(SMTP 사용자를 생성할 수 없습니다)** 배너가 표시되거나 Create New SMTP User(새 SMTP 사용자 생성) 버튼이 비활성화된 경우, 현재 해당 도메인에 대해 SMTP 인증 정보를 생성할 수 없습니다.

해결 방법:
- 하위 계정에서 SMTP 인증 정보를 활성화하는 도움을 받으려면 Hyperclass 고객지원팀에 문의하세요.
- 하위 계정 ID, 발송 도메인/서브도메인, 경고 메시지 스크린샷을 포함해 주세요.

---

## 자주 묻는 질문

**Q: "SMTP Credential creation is blocked. Please contact support…(SMTP 인증 정보 생성이 차단되었습니다. 고객지원팀에 문의하세요…)" 오류가 나타나는 이유는?**

이 메시지는 계정이 사용량 임계값에 도달했거나 SMTP 인증 정보 생성에 제한이 있을 때 나타납니다. 일일 이메일 제한(예: 하루 1,500개 이메일) 초과나 남용 방지를 위한 내부 통제 때문일 수 있습니다. 계정 상태를 검토하고 제한 증가를 요청하거나 규정 준수 플래그를 해결하려면 고객지원팀에 문의하세요.

---
*원문 최종 수정: Mon, 2 Feb, 2026 at 4:22 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*