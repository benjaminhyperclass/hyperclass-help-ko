---

번역일: 2026-04-06
카테고리: 09-이메일
---

# Zoho를 SMTP 제공업체로 사용하기

Hyperclass에서 Zoho를 SMTP 제공업체로 구성하기

이 아티클에서는 Hyperclass 내에서 Zoho Mail을 SMTP 제공업체로 연동하는 단계별 가이드를 제공합니다. SMTP(Simple Mail Transfer Protocol)는 Hyperclass 계정에서 안정적으로 이메일을 발송하는 데 필수적이며, Zoho의 SMTP 서버를 사용하면 원활한 이메일 전송을 보장할 수 있습니다. 이 가이드에서는 구성 설정(Settings)과 문제 해결 팁을 포함하여 Zoho를 SMTP 제공업체로 설정하는 자세한 방법을 안내합니다. Zoho를 처음 설정하거나 기존 설정을 조정해야 하는 경우 모두 이 가이드를 통해 Hyperclass를 통한 원활한 이메일 커뮤니케이션을 구현할 수 있습니다.

**목차**

- [개인 이메일 사용자를 위한 발신 서버 설정](#개인-이메일-사용자를-위한-발신-서버-설정)
- [도메인 기반 이메일을 사용하는 조직을 위한 발신 서버 설정](#도메인-기반-이메일을-사용하는-조직을-위한-발신-서버-설정)
- [자주 묻는 질문](#자주-묻는-질문)

---

[Zoho Mail IMAP 서버 세부 정보](https://www.zoho.com/mail/help/imap-access.html)

## 개인 이메일 사용자를 위한 발신 서버 설정: (username@zoho.com 형식의 이메일 주소를 사용하는 개인 사용자)

발신 서버 이름: smtp.zoho.com
포트: SSL과 함께 465 또는
포트: TLS와 함께 587
인증 필요: 예

[무료 이메일 주소를 SMTP로 사용할 수 없는 이유](why-can-t-i-use-my-free-email-address-as-the-smtp-.md)에 대해 자세히 알아보세요.

## 도메인 기반 이메일을 사용하는 조직을 위한 발신 서버 설정: (you@yourdomain.com 형식의 도메인 기반 이메일 주소를 사용하는 조직 사용자)

발신 서버 이름: smtppro.zoho.com
포트: SSL과 함께 465 또는
포트: TLS와 함께 587
인증 필요: 예

사용자 이름: Zoho 사용자명 또는 완전한 Zoho Mail 주소를 입력하세요. 도메인이 Zoho에 호스팅되어 있다면 이메일 주소는 you@yourdomain.com 형식입니다.
이메일 주소: Zoho Mail 주소를 입력하세요. 도메인이 Zoho에 호스팅되어 있다면 이메일 주소는 you@yourdomain.com 형식입니다.
비밀번호: Zoho 계정 비밀번호를 입력하세요. (2단계 인증이 활성화된 경우 [앱별 비밀번호](https://www.zoho.com/mail/help/adminconsole/two-factor-authentication.html#alink5)가 필요할 수 있습니다.)

---

# 자주 묻는 질문

현재 자주 묻는 질문이 없습니다. 이 섹션에 질문을 추가할 수 있도록 이 아티클에 피드백을 제출해주세요!

---
*원문 최종 수정: Wed, 28 Aug, 2024 at 1:12 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*