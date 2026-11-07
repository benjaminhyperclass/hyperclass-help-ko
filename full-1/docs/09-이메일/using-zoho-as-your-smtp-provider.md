---
원문: https://help.gohighlevel.com/support/solutions/articles/48001173743-using-zoho-as-your-smtp-provider
번역일: 2026-11-07
카테고리: 09-이메일
---

# Zoho를 SMTP 제공업체로 설정하기

Zoho Mail을 SMTP 제공업체로 연결할 때 필요한 발신 서버 설정값을 정리했어요. 개인 계정과 도메인 기반 계정 모두 다룹니다.

## 개요

SMTP(Simple Mail Transfer Protocol)는 하이퍼클래스에서 보낸 이메일을 안정적으로 전달하는 방식이에요. Zoho Mail의 SMTP 서버를 쓰면 발송 메일을 꾸준히, 문제없이 전달하는 데 도움이 돼요.

이 문서에서는 개인 Zoho 계정과 도메인 기반 조직 계정의 발신 서버 설정을 안내해요. 설정할 때 자주 놓치는 부분도 함께 알려 드려요.

## 개인 이메일 사용자의 발신 서버 설정

username@zoho.com 같은 주소를 쓰는 개인 계정이라면 아래 값을 사용하세요.

| 설정 | 값 |
| --- | --- |
| **Outgoing Server Name**(발신 서버 이름) | smtp.zoho.com |
| **Port**(포트) | SSL 방식 465번 또는 TLS 방식 587번 |
| **Require Authentication**(인증 필요) | 예 |

{% hint style="info" %}
무료 이메일 주소를 SMTP로 쓸 수 없는 이유가 궁금하다면 "Why Can't I Use My Free Email Address As The SMTP?" 문서를 참고하세요.
{% endhint %}

## 도메인 기반 조직의 발신 서버 설정

you@yourdomain.com 같은 도메인 기반 주소를 쓰는 조직 계정이라면 아래 값을 사용하세요.

| 설정 | 값 |
| --- | --- |
| **Outgoing Server Name** | smtppro.zoho.com |
| **Port** | SSL 방식 465번 또는 TLS 방식 587번 |
| **Require Authentication** | 예 |
| **Username**(사용자 이름) | Zoho 사용자 이름 또는 전체 Zoho Mail 주소(you@yourdomain.com) |
| **이메일 주소** | Zoho Mail 주소(you@yourdomain.com) |
| **Password**(비밀번호) | Zoho 계정 비밀번호 (2단계 인증을 켰다면 앱 전용 비밀번호가 필요해요) |

{% hint style="info" %}
Zoho 계정에서 2단계 인증을 켰다면 [앱 전용 비밀번호](https://www.zoho.com/mail/help/adminconsole/two-factor-authentication.html#alink5)를 만들어야 해요. 비밀번호 칸에는 평소 쓰는 Zoho 비밀번호 대신 이 앱 전용 비밀번호를 입력하세요.
{% endhint %}

## 자주 묻는 질문

### smtp.zoho.com과 smtppro.zoho.com 중 어느 것을 써야 하나요?

개인 @zoho.com 주소라면 smtp.zoho.com을 쓰세요. 도메인을 Zoho에서 호스팅하고 있고 이메일 주소가 사용자 도메인(you@yourdomain.com)이라면 smtppro.zoho.com을 쓰세요.

### 포트는 465번과 587번 중 어느 것을 써야 하나요?

둘 다 사용할 수 있어요. 465번은 SSL을, 587번은 TLS를 사용해요. 한쪽이 연결되지 않으면 다른 쪽을 써 보세요. Zoho 쪽 문제보다는 방화벽이나 네트워크 제한 때문인 경우가 많아요.

### 앱 전용 비밀번호가 꼭 필요한가요?

Zoho 계정에서 2단계 인증을 켠 경우에만 필요해요. 이 경우 평소 쓰는 비밀번호로는 SMTP를 사용할 수 없으니, 앱 전용 비밀번호를 만들어 사용하세요.

### 무료 개인 Zoho 주소를 SMTP 발신 주소로 쓸 수 있나요?

연결은 할 수 있어요. 다만 무료 개인 주소로 자동 메일이나 대량 메일을 많이 보내면 도메인 기반 계정보다 발송 한도에 걸리거나 전달률 문제가 생길 가능성이 더 높아요.

### Zoho SMTP에 발송 한도가 있나요?

네, Zoho는 요금제에 따라 다른 일일 발송 한도를 적용해요. 메일을 대량으로 보낸다면 Zoho Mail 요금제 정보를 확인하세요.

### Zoho Mail 별칭(alias)을 발신 주소로 쓸 수 있나요?

Zoho 계정에서 별칭이 인증되어 있다면 대체로 사용할 수 있어요. 인증은 기본 Zoho 계정 정보로 하고, 보이는 발신 주소로 별칭을 지정하세요.
