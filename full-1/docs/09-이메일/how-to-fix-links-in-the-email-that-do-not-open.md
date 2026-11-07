---
원문: https://help.gohighlevel.com/support/solutions/articles/48001151622-how-to-fix-links-in-the-email-that-do-not-open-
번역일: 2026-11-06
카테고리: 09-이메일
---

# 이메일 링크가 열리지 않을 때 해결 방법

이메일 안의 링크가 열리지 않는다면 대개 추적 도메인이나 DNS 설정에 문제가 있는 거예요. 이 문서에서는 원인과 점검·해결 순서를 안내해요.

## 이메일 링크가 열리지 않는 원인

이메일 링크가 열리지 않는 이유는 대부분 **추적 도메인이 제대로 설정되지 않았거나** DNS에서 확인되지 않기 때문이에요.

이메일을 보낼 때 링크는 다른 주소로 바뀌어요. 수신자는 추적 도메인을 한 번 거친 뒤 최종 페이지로 이동해요. 이 추적 도메인에 DNS나 SSL 문제가 있으면 이동 과정이 끊겨서 링크가 열리지 않아요.

추적 도메인을 올바르게 설정하면 해결돼요. 올바른 CNAME 레코드가 등록되어 있는지, DNS에서 도메인이 확인되는지, HTTPS/SSL이 켜져 있는지 확인하세요. 모두 맞게 설정하면 이동 과정이 다시 정상 작동하고 링크도 열려요.

{% hint style="info" %}
링크 추적(링크를 추적 도메인으로 거쳐 가게 하는 방식)은 대부분의 이메일 서비스에서 클릭 추적과 올바른 링크 연결을 위해 쓰여요. 하지만 플랫폼에서 열람·클릭 현황을 보여 주는 이메일 추적(Email Tracking)은 하이퍼클래스 이메일을 사용할 때만 쓸 수 있어요.
{% endhint %}

![이메일 링크 추적 개요](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155070162151/original/K15npCUzv1qi8NIKobiSJza24O7kCZaQaA.png?1777399256)

### 이메일 링크 연결 방식

링크가 뒤에서 어떻게 동작하는지 알면 실패 원인을 찾기 쉬워요.

- 원래 링크가 추적 링크로 바뀌어요.
- 추적 링크는 서브도메인(예: `email.yourdomain.com`)을 거쳐 연결돼요.
- 이 서브도메인은 DNS의 **CNAME 레코드**를 바탕으로 동작해요.
- DNS나 SSL 설정이 잘못되면 연결이 실패하고 링크가 열리지 않을 수 있어요.

## 열리지 않는 이메일 링크 해결 순서

### 1단계. 추적 도메인 확인하기

**에이전시 대시보드**에서 **설정 > 이메일 서비스 > Location Settings**(서브 계정 설정)로 이동하세요.

문제를 확인하려는 서브 계정에서 이메일 추적에 쓰는 도메인(예: `email.yourdomain.com`)을 찾으세요.

![Location Settings의 추적 도메인 필드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155070163225/original/dBsHWHN98kdOUSD_rBfWPAvHnlo6zpbIGg.png?1777400124)

### 2단계. CNAME 레코드 조회하기

<!-- 검토 필요: 원문 내용이 서로 다름 (1단계 예시는 email.yourdomain.com, 2단계 예시는 mg.yourdomain.com) -->

[MX Toolbox](https://mxtoolbox.com/CnameLookup.aspx) 또는 [Whatsmydns](https://www.whatsmydns.net/)에서 추적 도메인의 CNAME 레코드를 조회하세요.

1. 1단계에서 확인한 추적 도메인(예: `mg.yourdomain.com`)을 복사해요.
2. 앞에 `email.`을 붙여요 → `email.mg.yourdomain.com`

예를 들면 이렇게 조회해요.

- `mg.companyname.com`을 설정했다면 `email.mg.companyname.com`의 CNAME 레코드를 조회해요.
- `replies.companyname.com`을 설정했다면 `email.replies.companyname.com`의 CNAME 레코드를 조회해요.
- `support.companyname.com`을 설정했다면 `email.support.companyname.com`의 CNAME 레코드를 조회해요.

조회 결과로 유효한 CNAME 레코드가 나와야 해요. "DNS record not found"라고 나오면 CNAME이 없거나 잘못된 거예요.

![CNAME 조회 결과 예시 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155070243288/original/lvHcfFvJJgGbWq7VDpBDC_OV4l3Os5cNcA.png?1777480548)
![CNAME 조회 결과 예시 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155070244734/original/CRtpx0qOclPZf4bzq6WDfJRHbxBkXP4PTg.png?1777481515)

### 3단계. DNS 제공업체에서 CNAME 레코드 확인하기

DNS 제공업체에 로그인해서 추적 도메인의 CNAME 레코드를 찾으세요. 아래 두 가지를 확인하세요.

- 호스트에는 서브도메인만 입력되어 있어야 해요(예: 전체 도메인이 아니라 `email.mg`).
- 값은 이메일 서비스 제공업체의 추적 도메인을 가리켜야 해요.

![DNS 제공업체의 CNAME 레코드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155070247826/original/VPNK5vb32wmqp5BoP-7oNByINEQrRKImNQ.png?1777484783)

### 4단계. HTTPS 사용 여부 확인하기

추적 도메인은 HTTPS를 지원해야 해요. 제공업체 설정에서 추적 프로토콜이 HTTPS로 되어 있는지 확인하세요. 최근에 바꿨다면 SSL 적용이 끝날 때까지 기다리세요.

[추가 정보: HTTPS 추적 링크를 켜는 방법](https://help.mailgun.com/hc/en-us/articles/360011566033-How-to-Enable-HTTPS-Tracking-Links)

![HTTPS 추적 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155070244057/original/9J_4NYHimCj5o882fj48_Kwu5hTXhTeERA.png?1777481018)

### 5단계. 링크 테스트하기

하이퍼클래스에서 **테스트 이메일 보내기**로 테스트 이메일을 보내세요. 받은 이메일에서 링크를 클릭해 최종 URL로 제대로 이동하는지 확인하세요.

### 6단계. 문제가 계속되면 문의하기

링크가 여전히 열리지 않으면 **도메인/DNS 제공업체**(예: GoDaddy, Cloudflare, Google Domains)에 문의해서 아래와 같이 요청하세요.

- **추적 도메인의 CNAME 레코드가 올바르게 설정되어 있고 정상적으로 확인되는지** 점검해 달라고 요청해요.
- DNS 레코드 스크린샷을 함께 보내면 더 빨리 확인할 수 있어요.

DNS 제공업체가 모두 정상이라고 확인했는데도 문제가 계속되면 하이퍼클래스 고객지원에 문의하세요.

![고객지원에 보낼 DNS 레코드 스크린샷 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155070244555/original/SFX68oZGxh9oG7a6deTu8uvYoUBRbkC0lA.png?1777481329)

## 자주 생기는 문제 점검하기

설정 순서를 따라 했는데도 어떤 설정 때문에 링크가 실패할 수 있어요. 아래 항목을 살펴보면 어느 부분이 잘못됐는지 빨리 찾을 수 있어요.

- **CNAME 레코드를 찾을 수 없음:** MX Toolbox에 "DNS record not found"가 나오면 추적 도메인 CNAME이 없는 거예요. DNS 제공업체에서 레코드를 다시 추가하세요.
- **잘못된 CNAME 값:** CNAME은 이메일 서비스 제공업체의 추적 호스트를 가리켜야 해요. 다른 곳을 가리키면 링크가 제대로 연결되지 않아요.
- **호스트 필드에 전체 도메인 입력:** GoDaddy나 Namecheap 같은 대부분의 DNS 제공업체에서는 `email.yourdomain.com` 같은 전체 도메인이 아니라 서브도메인(예: `email` 또는 `email.mg`)만 입력해야 해요.

  올바른 호스트 이름 형식(일반적인 설정):

  - 서브도메인이 `mg.companyname.com`이면 → 호스트는 `email.mg`
  - 서브도메인이 `replies.companyname.com`이면 → 호스트는 `email.replies`
  - 서브도메인이 `support.companyname.com`이면 → 호스트는 `email.support`
- **Cloudflare 프록시 켜짐:** Cloudflare를 쓴다면 레코드를 DNS Only(프록시 없음)로 설정해야 해요.
- **HTTPS 꺼짐:** 일부 제공업체는 설정에서 HTTPS 추적을 켜야 해요. HTTP를 쓰거나 SSL이 켜져 있지 않으면 링크가 열리지 않을 수 있어요.
- **DNS가 아직 전파되지 않음:** 변경한 뒤 전 세계에 DNS 변경 사항이 적용되기까지 최대 24~48시간이 걸릴 수 있어요.

## 자주 묻는 질문

### 어떤 이메일 앱에서는 링크가 열리고 어떤 앱에서는 안 열려요. 왜 그런가요?

이메일 앱마다 DNS나 SSL 인증서를 캐시하는 방식이 다르고, 자체적으로 링크 안전 검사를 하는 경우도 있어요. 추적 도메인의 CNAME이나 SSL이 일부만 전파된 상태라면, 전파가 끝날 때까지 앱마다 동작이 다르게 보일 수 있어요.

### DNS 변경 사항이 모두 전파되려면 시간이 얼마나 걸리나요?

보통 최대 24~48시간 걸리지만, 훨씬 빨리 끝나는 경우도 많아요. 수정이 안 됐다고 판단하기 전에 MX Toolbox나 Whatsmydns로 전파 상태를 확인하세요.

### 추적에는 루트 도메인과 서브도메인 중 무엇을 써야 하나요?

서브도메인(예: `email.yourdomain.com`)을 쓰세요. 추적 트래픽이 메인 도메인과 분리되고, 루트 도메인에 이미 있는 DNS 레코드와 충돌하는 일도 피할 수 있어요.

### Cloudflare에서 DNS가 맞게 보이는데도 링크가 실패해요. 왜 그런가요?

Cloudflare에서 레코드가 프록시(주황색 구름) 상태인지 확인하세요. 추적용 CNAME 레코드는 DNS Only(회색 구름)로 설정해야 해요. 프록시가 켜져 있으면 연결이 끊겨요.

### 이 문제는 하이퍼클래스 이메일에서만 생기나요, 모든 이메일 서비스에서 생기나요?

추적 도메인이나 DNS 설정이 잘못되면 어떤 이메일 서비스에서도 링크 연결이 끊길 수 있어요. 다만 열람·클릭 리포트 기능은 하이퍼클래스 이메일로 보낼 때만 쓸 수 있어요.

### HTTPS 추적이 실제로 켜져 있는지 어떻게 확인하나요?

본인에게 테스트 이메일을 보내고, 링크에 마우스를 올리거나 클릭해서 연결된 URL이 `http://`가 아니라 `https://`로 시작하는지 확인하세요. 제공업체의 추적 도메인 설정에서 인증서 상태를 직접 확인할 수도 있어요.
