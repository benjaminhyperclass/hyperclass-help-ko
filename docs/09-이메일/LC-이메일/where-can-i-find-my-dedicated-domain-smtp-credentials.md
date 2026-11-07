---
원문: /support/solutions/articles/155000002132-where-can-i-find-my-dedicated-domain-smtp-credentials-
번역일: 2026-11-06
카테고리: 09-이메일
---

# 전용 도메인 SMTP 자격 증명 만들기와 관리

전용 발신 도메인에서 SMTP 서버를 쓰려면 그 도메인에 연결된 SMTP 자격 증명이 필요해요. 이 문서에서는 자격 증명을 만들고, 비밀번호를 재설정하고, 삭제하는 방법을 안내해요. 지원하는 포트, 이메일·자격 증명 한도, 요금, 수신용 IMAP 설정을 어디서 찾는지도 함께 알려 드려요.

{% hint style="info" %}
문서에 나온 금액(달러)과 요금제 이름은 참고용이에요. 하이퍼클래스에서 실제로 적용되는 요금은 [요금제 안내](../../00-자주묻는질문/pricing-plans.md)와 [AI·SMS·음성 사용료](../../00-자주묻는질문/usage-costs.md)를 확인하세요.
{% endhint %}

SMTP 자격 증명은 도메인마다 따로 있어요. 도메인끼리 공유하지 않고, 에이전시 단위로도 공유하지 않아요.

## SMTP 자격 증명 만들기

SMTP 자격 증명은 전용 도메인 아래, **서브 계정 단위**에서 만들어요. 에이전시 단위나 에이전시가 할당한 도메인에서는 만들 수 없어요.

1. 서브 계정에서 전용 도메인의 설정 화면으로 이동해요. **이메일 서비스 > SMTP 서비스 > Dedicated Domain and IP**(전용 도메인 및 IP) **> SMTP 설정**으로 가세요.

   ![이메일 서비스의 Dedicated Domain and IP 아래 SMTP 설정 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023337421/original/nMyZojgr2ZYUAZSkyYnJ6GXwk_Eyr_1HGw.png?1711087651)

2. **Create New SMTP User**(새 SMTP 사용자 만들기)를 클릭하고, 자격 증명에 쓸 사용자 이름과 비밀번호를 입력해요.

   ![Create New SMTP User 버튼과 입력 폼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023337477/original/3gfn3HeigPBnj1KhpAJrkIlpaoOzAJ0ONw.png?1711087786)
   ![SMTP 사용자 생성 완료 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023337530/original/utUNsl_XodI8FsMRFgE8TrwwQdmfgvu_uA.png?1711087862)

{% hint style="info" %}
**승인 필요**

하이퍼클래스는 SMTP 사용 권한을 자동 승인 시스템으로 관리해요. 조건에 맞는 서브 계정은 바로 자격 증명을 만들 수 있어요. 승인되지 않은 계정이라면 **Create New SMTP User** 버튼이 비활성화되거나 경고 메시지가 보일 수 있어요.
{% endhint %}

### SMTP 연결 정보

메일 클라이언트나 SMTP 플러그인에는 아래 값을 입력해요.

|  |  |
| --- | --- |
| SMTP 서버 주소 | smtp.mailgun.org |
| 보안 연결 | TLS/SSL (사용하는 메일 클라이언트나 SMTP 플러그인에 따라 선택) |
| SMTP 사용자 이름 | YourGivenName@DomainName.com |
| SMTP 비밀번호 | YourGivenPassword |
| SMTP 포트 | 25, 465 (SSL/TLS), 587 (STARTTLS), 2525 |

## Mailgun이 지원하는 포트

SMTP 서버(smtp.mailgun.org)는 아래 포트에서 연결을 받아요.

| 포트 | 프로토콜 | 사용 시기 |
| --- | --- | --- |
| 25 | Standard SMTP | 서버 간 릴레이용이에요. 클라이언트 용도로는 인터넷 서비스 제공업체(ISP)가 막는 경우가 많아요. |
| 465 | SSL/TLS | 연결 시작부터 암호화(implicit TLS)가 필요한 클라이언트에 사용해요. |
| 587 | STARTTLS | 대부분의 메일 클라이언트와 SMTP 플러그인에 권장해요. |
| 2525 | Alternative SMTP | 25, 465, 587 포트가 막혀 있을 때 대신 사용해요. |

## SMTP 비밀번호 재설정하기

이미 만든 SMTP 자격 증명의 비밀번호를 바꾸려면, 도메인의 **SMTP 설정**에서 해당 자격 증명을 찾아 재설정 옵션을 클릭하세요. 확인 창이 열리면 **비밀번호 재설정**을 클릭해서 변경을 마무리해요.

![SMTP 자격 증명 창의 비밀번호 재설정 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023337656/original/22ZqznlGSww3OYVk2ULdCYph_uhwvbBG9A.png?1711088188)

SMTP 자격 증명 행에서 비밀번호 재설정을 시작해요.

![확인 창에서 비밀번호 재설정 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023337668/original/NsTvuvM2YMJRI2xkQypolDdneD_Yn8-tJw.png?1711088202)

팝업 창에서 재설정을 확인해요.

## SMTP 자격 증명 삭제하기

SMTP 자격 증명을 지우려면 도메인의 **SMTP 설정**에서 해당 자격 증명을 찾아 **삭제**를 클릭하세요. 팝업 창에서 삭제를 확인하면 돼요.

![SMTP 자격 증명 삭제 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023337727/original/f7oeVWxByu7aA60MK7YoTBAA7c-citPWbg.png?1711088371)

SMTP 자격 증명 행에서 **삭제**를 클릭해요.

![SMTP 자격 증명 삭제 확인 창](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023337732/original/-c2VpTSwanpwk3Nc_sLI3fi87590WKS2TA.png?1711088383)

팝업 창에서 삭제를 확인해요.

## SMTP와 이메일 한도

- SMTP 자격 증명 한도: 전용 도메인 하나당 최대 **5개**까지 만들 수 있어요.
- 일일 이메일 한도: 계정당 하루 **1,500통**까지 보낼 수 있어요.

{% hint style="warning" %}
일일 이메일 한도를 넘으면 계정에 있는 모든 전용 도메인의 **SMTP 자격 증명이 자동으로 모두 삭제**돼요.
{% endhint %}

## 하이퍼클래스 이메일 요금

하이퍼클래스 이메일은 **1,000통당 $0.675**예요. 대부분의 주요 SMTP 제공업체보다 낮은 가격이에요(Mailgun은 1,000통당 $0.80). 모든 요금제에 같은 건당 요금이 적용돼요.

이메일 요금은 계정의 크레딧에서 차감돼요. **에이전시 보기 > 청구/결제 > 크레딧**에서 확인할 수 있어요.

{% hint style="info" %}
[받는 이메일과 보내는 이메일 모두, 받는 사람·참조·숨은참조 수신자까지 각각 따로 요금이 청구돼요.](../what-is-lc-email.md)
{% endhint %}

## IMAP 설정은 어디서 찾나요?

{% hint style="warning" %}
**지원되지 않음**

하이퍼클래스에서는 메일함을 호스팅하지 않기 때문에 POP, IMAP 프로토콜을 지원하지 않아요. **SMTP 자격 증명은 IMAP 설정에 사용할 수 없어요.**
{% endhint %}

IMAP은 메일함에서 메시지를 *가져올* 때 쓰고, SMTP는 *보낼* 때 써요. 메일 클라이언트에서 이메일을 읽으려고 IMAP이 필요하다면, 하이퍼클래스가 아니라 사용 중인 이메일 호스팅 업체에서 설정값을 받아야 해요.

**예시 — Google Workspace:** Google에서 앱 비밀번호를 만든 다음 아래 값을 사용하세요.

Google IMAP 설정

|  |  |
| --- | --- |
| 사용자 이름 | 전체 이메일 주소 |
| 비밀번호 | Google 앱 비밀번호 |
| IMAP 호스트 | imap.gmail.com |
| IMAP 포트 | 993 |

다른 업체는 해당 업체의 고객지원 문서에서 IMAP 설정을 찾을 수 있어요. 바로가기 링크는 아래와 같아요.

- [Amazon AWS WorkMail](https://docs.aws.amazon.com/workmail/latest/userguide/using_IMAP.html)
- [Hostgator](https://www.hostgator.com/help/article/email-connection-settings)
- [Ionos](https://www.ionos.com/help/email/general-topics/settings-for-your-email-programs-imap-pop3/)
- [Kinghost](https://king.host/wiki/artigo/como-configurar-seu-e-mail-no-pipedrive/)
- [Rackspace](https://docs.rackspace.com/support/how-to/rackspace-email-and-hosted-exchange-settings/)
- [TransIP](https://www.transip.eu/knowledgebase/entry/309-the-email-settings-at-transip/)
- [Bluehost](https://www.bluehost.com/help/article/email-application-setup)
- [Titan](https://support.titan.email/hc/en-us/articles/900000215446-Configure-Titan-on-other-apps-using-IMAP-POP)
- [Dreamhost](https://help.dreamhost.com/hc/en-us/articles/215612887-Email-client-protocols-and-port-numbers)
- [InMotion](https://www.inmotionhosting.com/support/email/getting-started-guide-email/)

사용하는 업체가 목록에 없다면 해당 업체에 직접 문의해서 IMAP 호스트 이름과 포트를 확인하세요.

자주 쓰는 IMAP 설정 참고표

| 업체 | IMAP 호스트 | IMAP 포트 |
| --- | --- | --- |
| Google / Gmail | imap.gmail.com | 993 |
| Verizon | imap.verizon.net | 995 |
| AOL | imap.aol.com | 993 |

## 문제 해결

**증상:** "Unable to Create SMTP User"(SMTP 사용자를 만들 수 없음) — 버튼이 비활성화되었거나 경고 배너가 보여요.

이 도메인에는 지금 SMTP 자격 증명을 만들 수 없다는 뜻이에요. 자동 승인 시스템이 이를 제어해요. 조건에 맞는 계정은 바로 사용할 수 있고, 그렇지 않은 계정은 수동 검토가 필요해요.

**해결 방법:**

- 하이퍼클래스 고객지원에 문의해서 서브 계정의 SMTP 사용 권한을 요청하세요.
- 문의할 때 서브 계정 ID, 발신 도메인 또는 서브도메인, 경고 메시지 스크린샷을 함께 보내 주세요.

## 자주 묻는 질문

### "SMTP Credential creation is blocked. Please contact support"(SMTP 자격 증명 생성이 차단되었어요. 고객지원에 문의하세요)라는 메시지가 떠요. 왜 그런가요?
계정이 사용량 기준에 도달했거나, 남용을 막기 위한 내부 통제에 걸렸을 때 나타나요. 하루 1,500통 한도를 넘었을 때 자주 발생해요. 하이퍼클래스 고객지원에 서브 계정 ID와 함께 문의하면 차단 상태를 검토하고 해결해 드려요.

### 에이전시 단위에서 SMTP 자격 증명을 만들 수 있나요?
아니요. SMTP 자격 증명은 서브 계정 단위에서만, 그리고 전용 도메인 아래에서만 만들 수 있어요. 에이전시가 할당한 도메인에서는 만들 수 없어요.

### 일일 이메일 한도를 넘으면 SMTP 자격 증명은 어떻게 되나요?
계정에 있는 모든 전용 도메인의 SMTP 자격 증명이 자동으로 삭제돼요. 계정이 한도 안으로 돌아오면 자격 증명을 다시 만들어야 해요.

### 메일 클라이언트나 WordPress SMTP 플러그인에는 어떤 포트를 쓰면 되나요?
대부분의 메일 클라이언트와 SMTP 플러그인에는 **STARTTLS를 사용하는 587 포트**를 권장해요. 클라이언트가 implicit TLS를 요구하면 **465** 포트를 쓰세요. 호스팅 업체나 ISP가 다른 포트를 막고 있다면 **2525** 포트가 안정적인 대안이에요.

### SMTP 자격 증명으로 이메일을 받을 수 있나요(IMAP/POP)?
아니요. SMTP 자격 증명은 *보내기* 전용이에요. 하이퍼클래스에서는 메일함을 호스팅하지 않기 때문에 POP과 IMAP을 지원하지 않아요. 이메일을 받으려면 Google Workspace, Outlook 같은 이메일 호스팅 업체가 제공하는 IMAP 설정을 사용하세요.

### 도메인 하나에 SMTP 자격 증명을 몇 개까지 만들 수 있나요?
전용 도메인 하나당 최대 **5개**까지 만들 수 있어요.

### 숨은참조 수신자도 일일 이메일 한도에 포함되나요?
네. 모든 수신자(받는 사람, 참조, 숨은참조)가 각각 집계되고 요금도 따로 청구돼요. 예를 들어 이메일 한 통을 3명(받는 사람 1명, 참조 1명, 숨은참조 1명)에게 보내면 일일 한도와 요금 모두 3통으로 계산돼요.
