---

번역일: 2026-04-06
카테고리: 09-이메일
---

# 이메일 답장이 대화(Conversations)에 표시되지 않을 때

이 가이드는 이메일 답장이 대화에 나타나지 않는 문제를 해결하는 방법을 안내합니다. 이러한 문제는 잘못된 Mailgun 설정, 오류가 있는 MX 레코드, 또는 WIX 같은 도메인 제공업체의 문제 등 여러 요인으로 발생할 수 있습니다. 다음 단계를 따라 문제를 효율적으로 진단하고 해결해보세요.

## 목차

[이메일 답장이 대화로 돌아오지 않는 문제 해결하기](#이메일-답장이-대화로-돌아오지-않는-문제-해결하기)

[1. Mailgun 수신 라우트가 설정되었는지 확인하기 (LC Email을 사용 중이라면 2단계로)](#1-mailgun-수신-라우트가-설정되었는지-확인하기-lc-email을-사용-중이라면-2단계로)

[2. MX 레코드 확인 방법](#2-mx-레코드-확인-방법)

[3. Google Workspace와 Mailgun에서 루트 도메인을 사용하고 있는지 확인하기](#3-google-workspace와-mailgun에서-루트-도메인을-사용하고-있는지-확인하기)

[4. DNS 레코드 재확인하기](#4-dns-레코드-재확인하기)

[5. Mailgun/LC Email 대신 SMTP 제공업체를 사용하는 경우](#5-mailgunlc-email-대신-smtp-제공업체를-사용하는-경우)

[6. 도메인 DNS 제공업체로 WIX를 사용하는 경우](#6-도메인-dns-제공업체로-wix를-사용하는-경우)

---

## 이메일 답장이 대화로 돌아오지 않는 문제 해결하기

### 1. Mailgun 수신 라우트가 설정되었는지 확인하기 (LC Email을 사용 중이라면 2단계로)

[Mailgun에서 답장 설정하는 방법](how-to-setup-replies-in-mailgun.md)

### 2. MX 레코드 확인 방법

MX 레코드는 Mailgun이 답장을 추적하는 데 필수적입니다.

1. 에이전시 보기로 전환 > Settings(설정) > Email Services(이메일 서비스) > Location Settings(로케이션 설정) > 하위 계정용으로 설정된 도메인/서브도메인 복사

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033710730/original/336fiUo3ihzu_yI4uP56rIgrHdF3mahwKA.jpg?1727465017)

2. [Mxtoolbox](https://mxtoolbox.com/)로 이동하여 복사한 서브도메인/도메인의 MX 레코드를 조회합니다

Mailgun으로 설정한 서브도메인에 따라:

예시:
- companyname.com으로 설정했다면,
companyname.com의 MX 레코드를 조회합니다

- replies.companyname.com으로 설정했다면,
replies.companyname.com의 MX 레코드를 조회합니다

- 두 레코드가 mxa.mailgun.org와 mxb.mailgun.org를 가리키는지 확인합니다
- 누락된 경우, **mxa.mailgun.org**와 **mxb.mailgun.org**를 추가하고 두 MX 레코드 모두 우선순위 10으로 설정해야 합니다
- 다른 레코드가 다른 이메일 서버(예: Google Workspace)를 가리키고 있다면, 하나만 선택할 수 있으므로 Mailgun용 서브도메인을 설정하거나 해당 도메인을 다른 이메일 서버(예: Google Workspace)용으로 사용하지 말아야 합니다

더 자세한 정보:
[Mailgun과 Google Apps(또는 다른 이메일 서버)에 동일한 도메인 이름을 사용할 수 있나요?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033710796/original/FM2Sxy9BQzzbC3CnquDFbcq0gzPPlYBQZw.jpg?1727465126)

여전히 작동하지 않으면, 도메인 제공업체(GoDaddy, Namecheap 등)의 모든 DNS 레코드 스크린샷을 공유하고 여기서 고객지원팀에 문의해주세요. 도메인 제공업체 고객지원팀에 문의하여 누락된 설정이 무엇인지 확인해볼 수도 있습니다.

### 3. Google Workspace와 Mailgun에서 루트 도메인을 사용하고 있는지 확인하기

Mailgun과 함께 사용할 루트 도메인을 설정하는 경우, 업무용 이메일로 동일한 도메인을 사용하는 Google Workspace나 Outlook과 충돌할 수 있으므로 다른 곳을 가리키지 않도록 해야 합니다. 더 자세한 정보: [Mailgun과 Google Apps(또는 다른 이메일 서버)에 동일한 도메인 이름을 사용할 수 있나요?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)

Mxtoolbox를 사용하여 루트 도메인의 MX 레코드를 조회했을 때, 아래 스크린샷과 같이 Mailgun과 다른 이메일 서버(예: Google Workspace)를 모두 가리키고 있다면, 둘 중 하나만 선택할 수 있으므로 Mailgun용 서브도메인을 설정하거나 해당 도메인을 다른 이메일 서버(예: Google Workspace)용으로 사용하지 말아야 합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033710845/original/rGC1BTGGbHk5MNi82nlWRVyA9Di8s7ocRA.jpg?1727465286)

### 4. DNS 레코드 재확인하기

[Mailgun](https://login.mailgun.com/login/)에 로그인합니다:

1. Sending 탭 확장
2. 마지막 메뉴 항목인 Domain Settings(도메인 설정) 클릭
3. 상단에서 로케이션에 맞는 올바른 도메인/서브도메인을 선택했는지 확인
4. 상단 중간의 DNS records 클릭
5. Verify DNS settings를 클릭하여 5개 DNS 레코드 모두, 특히 MX 레코드에 녹색 체크마크가 있는지 확인

때로는 모든 녹색 체크마크가 있는 것처럼 보여도 실제로는 그렇지 않을 수 있습니다. 레코드를 새로고침하려면 Verify DNS Settings 버튼을 다시 클릭해야 합니다:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033710882/original/n5TrO-ghOMdCcUoKy1eLVCyu09YJz5OnAA.jpg?1727465373)

### 5. Mailgun/LC Email 대신 SMTP 제공업체를 사용하는 경우

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283738240/original/iuhABh85E9KeBQj_tREvrShtALdHnMmXAA.png?1677272715)

### 6. 도메인 DNS 제공업체로 WIX를 사용하는 경우

[도메인 제공업체로 WIX를 사용할 때 Mailgun 답장이 작동하지 않는 문제](mailgun-replies-not-working-when-using-wix-as-the-domain-provider.md)를 확인해보세요.

---

## 자주 묻는 질문

**답장이 발송되는 이메일 주소를 맞춤 설정할 수 있나요?**
네, 보통 설정에서 "reply-to" 이메일 주소를 맞춤 설정할 수 있습니다. 이를 통해 답장이 특정 주소로 가도록 하여 커뮤니케이션을 더 효과적으로 관리할 수 있습니다.

**답장 가시성을 개선하기 위해 다른 이메일 제공업체를 Hyperclass와 연동하는 방법은?**
다른 이메일 제공업체와의 연동은 기능을 향상시킬 수 있습니다. Gmail이나 Outlook 같은 서비스를 연결하는 플랫폼의 연동 옵션을 확인해보세요. 이를 통해 이메일 답장에 대한 더 나은 추적과 가시성을 제공할 수 있습니다.

**문제 해결을 했음에도 문제가 계속되면 어떻게 해야 하나요?**
문제 해결로도 문제가 해결되지 않으면, 추가 지원을 위해 Hyperclass 고객지원팀에 문의하는 것을 고려해보세요. 계정별 맞춤 정보를 제공하고 근본적인 문제를 식별하는 데 도움을 줄 수 있습니다.

---
*원문 최종 수정: Fri, 27 Sep, 2024 at 2:30 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*