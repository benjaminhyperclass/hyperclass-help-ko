---
원문: /support/solutions/articles/48001185819-when-email-replies-are-not-showing-up-in-conversation
번역일: 2026-11-06
카테고리: 09-이메일
---

# 이메일 답장이 대화에 표시되지 않을 때

이메일 답장이 **대화**에 나타나지 않을 때 원인을 찾아 해결하는 방법이에요. Mailgun 설정이 잘못됐거나, MX 레코드에 문제가 있거나, WIX 같은 도메인 업체 때문에 생기는 문제를 차례대로 확인해요.

## 개요

답장이 대화에 보이지 않는 원인은 여러 가지예요. 예를 들면 Mailgun 설정 오류, MX 레코드 문제, 도메인 업체(WIX 등) 문제가 있어요. 아래 단계를 순서대로 따라 하면서 원인을 확인하세요.

## 1단계. Mailgun 수신 라우트가 설정되어 있는지 확인하기

하이퍼클래스 이메일을 사용 중이라면 이 단계는 건너뛰고 2단계로 가세요.

참고 문서: Mailgun에서 답장 설정하는 방법

## 2단계. MX 레코드 확인하기

Mailgun이 답장을 추적하려면 MX 레코드가 꼭 필요해요.

1. 에이전시 보기로 전환한 뒤 **설정 > 이메일 서비스 > Location Settings**(위치 설정)로 이동해요. 서브 계정에 설정된 도메인 또는 서브도메인을 복사하세요.

![Location Settings의 도메인 입력란](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033710730/original/336fiUo3ihzu_yI4uP56rIgrHdF3mahwKA.jpg?1727465017)

2. [MX Toolbox](https://mxtoolbox.com/)에 들어가 복사한 서브도메인 또는 도메인의 MX 레코드를 조회해요.

Mailgun에 어떤 도메인을 설정했는지에 따라 조회할 주소가 달라져요.
`companyname.com`을 설정했다면 `companyname.com`의 MX 레코드를 조회해요.`replies.companyname.com`을 설정했다면 `replies.companyname.com`의 MX 레코드를 조회해요.

- 레코드 두 개가 각각 `mxa.mailgun.org`와 `mxb.mailgun.org`를 가리키는지 확인해요.
- 없다면 `mxa.mailgun.org`와 `mxb.mailgun.org`를 추가하고, 두 MX 레코드의 우선순위(priority)를 모두 10으로 설정하세요.

![MX 레코드 조회 결과](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033710796/original/FM2Sxy9BQzzbC3CnquDFbcq0gzPPlYBQZw.jpg?1727465126)

{% hint style="info" %}
다른 레코드가 다른 이메일 서버(예: Google Workspace)를 가리키고 있다면 둘 중 하나만 고를 수 있어요. Mailgun용 서브도메인을 따로 설정하거나, 그 도메인을 다른 이메일 서버에 쓰지 않아야 해요. 자세한 내용은 [Can I use the same domain name for Mailgun and Google Apps (or another email server)?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)를 참고하세요.
{% endhint %}

### 그래도 해결되지 않나요?

도메인 업체(GoDaddy, Namecheap 등)에 등록된 모든 DNS 레코드의 스크린샷을 준비해서 하이퍼클래스 고객지원에 문의하세요. 도메인 업체의 고객지원에 빠진 설정이 있는지 물어볼 수도 있어요.

## 3단계. 루트 도메인을 Google Workspace와 Mailgun에 함께 쓰고 있는지 확인하기

Mailgun에 루트 도메인을 설정했다면, 그 도메인이 다른 곳(예: Google Workspace)도 함께 가리키고 있지 않은지 확인하세요. 같은 도메인을 Google Workspace나 Outlook의 업무용 이메일에도 쓰면 서로 충돌할 수 있어요. 자세한 내용은 [Can I use the same domain name for Mailgun and Google Apps (or another email server)?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)를 참고하세요.

MX Toolbox로 루트 도메인의 MX 레코드를 조회했을 때 Mailgun과 다른 이메일 서버(예: Google Workspace)를 모두 가리키고 있다면, 둘 중 하나만 고를 수 있어요. Mailgun용 서브도메인을 따로 설정하거나, 그 도메인을 다른 이메일 서버에 쓰지 않아야 해요.

![Mailgun과 다른 서버를 함께 가리키는 MX 레코드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033710845/original/rGC1BTGGbHk5MNi82nlWRVyA9Di8s7ocRA.jpg?1727465286)

## 4단계. DNS 레코드 다시 확인하기

[Mailgun](https://login.mailgun.com/login/)에 로그인한 뒤 아래 순서로 확인해요. Mailgun 화면은 영어로 표시돼요.

1. **Sending**(전송) 탭을 펼쳐요.
2. 맨 아래 메뉴인 **Domain Settings**(도메인 설정)를 클릭해요.
3. 화면 위쪽에서 해당 서브 계정의 도메인 또는 서브도메인이 선택되어 있는지 확인해요.
4. 위쪽 가운데의 **DNS records**(DNS 레코드)를 클릭해요.
5. **Verify DNS settings**(DNS 설정 인증)를 클릭하고, DNS 레코드 5개 모두(특히 MX 레코드)에 초록색 체크 표시가 있는지 확인해요.

{% hint style="info" %}
레코드가 실제로는 올바르지 않은데 체크 표시가 초록색으로 보일 때가 있어요. **Verify DNS Settings**를 한 번 더 클릭해서 새로 고치고 레코드를 다시 확인하세요.
{% endhint %}

![Mailgun DNS 레코드 인증 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033710882/original/n5TrO-ghOMdCcUoKy1eLVCyu09YJz5OnAA.jpg?1727465373)

## 5단계. Mailgun이나 하이퍼클래스 이메일 대신 SMTP 제공업체를 쓰는 경우

![SMTP 제공업체 참고 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283738240/original/iuhABh85E9KeBQj_tREvrShtALdHnMmXAA.png?1677272715)

## 6단계. 도메인/DNS 업체로 WIX를 쓰는 경우

"Mailgun replies not working when using WIX as the domain provider" 문서를 확인하세요.

## 자주 묻는 질문

### 답장을 받을 이메일 주소를 직접 정할 수 있나요?

보통 설정에서 '회신 주소(reply-to)'를 직접 지정할 수 있어요. 답장을 원하는 주소로 받을 수 있어서 소통을 관리하기 더 편해요.

### 답장이 더 잘 보이게 다른 이메일 제공업체를 연동할 수 있나요?

다른 이메일 제공업체를 연동하면 기능이 좋아지는 경우가 많아요. 플랫폼의 연동 옵션에서 Gmail이나 Outlook 같은 서비스를 연결해 보세요. 이메일 답장을 더 잘 추적하고 확인할 수 있을 수 있어요.

### 문제를 확인해도 해결되지 않으면 어떻게 하나요?

위 방법으로 해결되지 않으면 하이퍼클래스 고객지원에 문의하세요. 내 계정에 맞는 안내를 받고, 근본적인 원인도 함께 찾을 수 있어요.

### 서브 계정마다 이 설정을 반복해야 하나요?

네. MX 레코드와 수신 라우트는 도메인/서브도메인별로 설정돼요. 서브 계정마다 별도의 발송 도메인을 쓴다면 각각 MX 레코드와 DNS 레코드를 따로 확인해야 해요.

### MX 레코드 변경이 적용됐는지 어떻게 알 수 있나요?

MX Toolbox에서 도메인/서브도메인을 다시 조회하세요. 그래도 `mxa.mailgun.org`와 `mxb.mailgun.org`가 보이지 않으면 조금 더 기다려 보세요. DNS 전파에는 최대 24~48시간이 걸릴 수 있어요.
