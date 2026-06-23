---

번역일: 2026-04-06
카테고리: 09-이메일
---

# Mailgun에서 특정 이메일 로그 확인하는 방법

목차

- [Mailgun 발송 로그](#mailgun-발송-로그)
- [결과 분석](#결과-분석)
- [일반적인 오류](#일반적인-오류)
  - [이전 반송 주소로 배송되지 않음](#이전-반송-주소로-배송되지-않음)
  - [수신자가 실수로 구독 취소한 경우](#수신자가-실수로-구독-취소한-경우)
  - [xxxxxxxxxxxx.com에서 인증되지 않은 이메일](#xxxxxxxxxxxxcom에서-인증되지-않은-이메일)
  - [yahoo.com / hotmail.com / aol.com / outlook.com에서 인증되지 않은 이메일](#yahoocom-hotmailcom-aolcom-outlookcom에서-인증되지-않은-이메일)

# Mailgun 발송 로그

1. [https://app.mailgun.com/app/dashboard](https://app.mailgun.com/app/dashboard)에 로그인합니다.

2. Sending(발송)을 클릭합니다.

![Mailgun 대시보드에서 Sending 메뉴 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48116160535/original/JVr72sqsbd8goiu1yWyP9X8LxzQIFiymnA.png?1625007552)

3. Logs(로그)를 클릭합니다.

![Sending 메뉴에서 Logs 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48116160533/original/jMWfS1lnuChsOsRrZdbYVxkKEj_FwXl5Ww.png?1625007551)

4. 올바른 도메인이 선택되었는지 확인합니다.

![도메인 선택 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48116160536/original/4gc_ywO8KMIJ2gmt_r41V-pqblZouLsulA.png?1625007552)

5. Add Filter(필터 추가)를 클릭합니다.

![Add Filter 버튼 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48188695181/original/_cN2JqLI_-4mgq52yjw5XkN8wD6j70j-fw.png?1644453931)

6. 드롭다운 목록에서 Recipient(수신자)를 선택하고 배송 상태를 확인하고자 하는 이메일을 붙여넣습니다.

![Recipient 선택 및 이메일 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48188695195/original/4e5JP7AlzSsBZYZOUHSn2mk7YQ0gtx0EAA.png?1644453944)

7. Filter(필터)를 클릭합니다.

![Filter 버튼 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48188695270/original/5B1sUhnEpr9-WLqcHMifkVuz0WUuxtyCsQ.png?1644454025)

## 결과 분석

이메일을 찾았으면 오른쪽의 톱니바퀴 ⚙️ 아이콘을 클릭합니다.

Quick view(빠른 보기)를 선택합니다.

이메일의 미리보기가 표시됩니다.

![이메일 미리보기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48188695369/original/C19SliRpd7Pl_5q67zgT2hTAWFXDSR3jrg.png?1644454139)

"delivered(배송됨)"라고 표시된다면, 스팸 폴더를 확인하거나 Mailgun 고객지원팀에 문의하여 이메일 제공업체에서 해당 이메일을 차단하고 있는지 확인해보세요.

## 일반적인 오류

### 이전 반송 주소로 배송되지 않음

해결 방법:

1. Sending(발송) → Suppressions(억제 목록)을 클릭합니다.

2. 상단에서 도메인을 선택합니다.

3. 수신자의 이메일을 검색합니다.

4. 해당 수신자를 선택하고 오른쪽의 휴지통 아이콘을 클릭하여 Bounces(반송) 탭에서 연락처 이메일을 제거합니다.

### 수신자가 실수로 구독 취소한 경우

Unsubscribes(구독 취소) 탭으로 전환하여 해당 이메일을 제거합니다.

![구독 취소 목록에서 이메일 제거](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48188695886/original/EgH5LxHkk9DeQiKIUhWyFYFOyklyac8D7Q.png?1644454582)

### xxxxxxxxxxxx.com에서 인증되지 않은 이메일

해결 방법: 커스텀 도메인에서 DMARC를 none으로 설정합니다.

Google Workspace 이메일을 사용하고 있다면, [여기에서 DMARC를 none으로 설정할 수 있습니다](https://support.google.com/a/answer/10032169?hl=en).

### yahoo.com / hotmail.com / aol.com / outlook.com에서 인증되지 않은 이메일

빠른 해결 방법: 발신자 이메일을 yahoo.com / aol.com 등에서 자신의 도메인이나 gmail.com으로 변경합니다.

예: name@yahoo.com을 name@gmail.com 또는 name@your_domain.com으로 변경

[발신자 이메일 주소 설정 방법은 여기에서 확인하세요](https://hyperclass.gitbook.io/hyperclass-docs).

---
*원문 최종 수정: Mon, 6 Mar, 2023 at 2:27 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*