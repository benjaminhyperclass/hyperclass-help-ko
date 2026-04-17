---

번역일: 2026-04-07
카테고리: 09-이메일 > 메일건
---

# 메일건 설정 - 구글 도메인 설정

목차

- [단계별 메일건 설정 - 구글 도메인](#단계별-메일건-설정-구글-도메인)
- [첫 번째 TXT 레코드 추가하기](#첫-번째-txt-레코드-추가하기)
- [두 번째 TXT 레코드 추가하기](#두-번째-txt-레코드-추가하기)
- [MX 레코드 추가하기 - 새 레코드 만들기 클릭](#mx-레코드-추가하기-새-레코드-만들기-클릭)
- [CNAME 레코드 추가하기 - 새 레코드 만들기 클릭](#cname-레코드-추가하기-새-레코드-만들기-클릭)

# 단계별 메일건 설정 - 구글 도메인

1. [Mailgun.com](https://signup.mailgun.com/new/signup)에 가입하세요

2. 이메일 인박스(수신함)를 확인하여 이메일 주소를 인증하세요

[
![이메일 인증 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382834/original/93q62at2bi41NnpFtGv2FEPRQFFSRfxR7w.png?1677635327)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535009/original/7tQRdPUgguqaYEpnIV2uS3kIQpMd7jZBZw.png?1659724083)

[
![메일건 로그인 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382837/original/cRlyZ3AGCLES6EuDfYfGZsvx1meXvGsPdg.png?1677635328)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535045/original/kRGmwZtbq3-zkULjp6-Pg0J-7sTNMNHymQ.png?1659724108)

3. 메일건에 로그인하고, Sending > Add New Domain을 클릭하세요

[
![메일건 도메인 추가 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382836/original/dX85fHXCrcdjQS7AUBN05K-nzvcunlx1CQ.png?1677635327)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535197/original/doBfy9jAqoxcOqD5LiuyQO9rnyVWfkkAeg.png?1659724186)

4. 도메인이 companyname.com이라면, 메일건에서 메인 도메인 또는 서브도메인을 설정할 수 있습니다.

A. 메인 도메인:
- 메인 도메인을 추가하는 경우, [G Suite나 다른 이메일 제공업체와 함께 사용할 수 없습니다](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)

서브도메인:
- 메일건에서 서브도메인을 설정하려면 ANYTHING_HERE.companyname.com 형태로 입력할 수 있습니다

예시:
- mg.companyname.com
- replies.companyname.com
- support.companyname.com

B. 도메인 또는 서브도메인을 EU가 아닌 US로 설정해주세요.

C. Add domain을 클릭하세요

[
![도메인 추가 양식](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382833/original/orhf_0AVhwlQvuxlv2cPV72PZBV30Ec4gw.png?1677635326)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243536037/original/B5DZocdO2h64MlEDtfuFjER-U_0AO_NOEg.png?1659724559)

5. 이제 도메인을 구입한 곳의 DNS 레코드에 로그인하여 5개의 DNS 레코드를 추가하세요

- [domains.google.com](//domains.google.com)에 로그인하세요
- 설정하려는 도메인을 클릭하세요
- 왼쪽 패널에서 DNS를 클릭하세요. 5개의 DNS 레코드를 추가하겠습니다

첫 번째 TXT 레코드를 복사하세요: v=spf1 include:mailgun.org ~all

![첫 번째 TXT 레코드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243542584/original/jduaWZZKo0s-PYGnVfTYxkAaGSceLswDuQ.png?1659727406)

## 첫 번째 TXT 레코드 추가하기

Host name:
- 설정하려는 서브도메인에 따라, [mg.companyname.com](//mg.companyname.com)을 설정하는 경우 호스트 이름은 mg입니다
- [replies.companyname.com](//replies.companyname.com)의 경우 호스트 이름은 replies입니다
- companyname.com과 같은 메인 도메인을 설정하는 경우 호스트 이름은 @입니다

Type: 드롭다운에서 TXT를 선택하세요

Data: 여기에 복사한 첫 번째 TXT 레코드를 붙여넣으세요: v=spf1 include:mailgun.org ~all

![첫 번째 TXT 레코드 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243542124/original/92-SiILtsZ5kfbsAEFFhKKjKEM8sGjIWEQ.png?1659727285)

아직 저장하지 마세요. 4개의 레코드를 더 추가해야 합니다.

첫 번째 레코드를 완료했으면 Create new record를 클릭하세요.

## 두 번째 TXT 레코드 추가하기

Host name:
조금 까다롭지만 핵심은 처음부터 서브도메인 부분까지만 복사하고, 메인 도메인은 복사하지 않는 것입니다.

![두 번째 TXT 레코드 복사 방법](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243542908/original/5vSFtNLEoaRQt2aK8L4rniJCWjLDJy6Vmg.png?1659727560)

예시: 하이라이트된 부분을 복사하세요

서브도메인 사용 예시 1:

![서브도메인 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243543383/original/LybPtPP4joO7bl9IEDJ1fwxnIvEiXCedvA.png?1659727679)

메인 도메인 사용 예시 2:

![메인 도메인 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378839/original/6xJR3U2ek0CgVESacXXEwkHcgsLaOXbjhQ.png?1677631543)

Type: 드롭다운에서 TXT를 선택하세요

Data: 여기에 두 번째 긴 TXT 레코드를 붙여넣으세요

![두 번째 TXT 레코드 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243543480/original/SA3H2iuimeXJJUdD5n5KAwd7ZwCI3qt5gA.png?1659727710)

## MX 레코드 추가하기 - 새 레코드 만들기 클릭

Host name:
설정하려는 서브도메인에 따라,

[mg.companyname.com](//mg.companyname.com)을 설정하는 경우 호스트 이름은 mg입니다

[replies.companyname.com](//replies.companyname.com)의 경우 호스트 이름은 replies입니다

companyname.com과 같은 메인 도메인을 설정하는 경우 호스트 이름은 @입니다

Type: 드롭다운에서 MX를 선택하세요

Data: 다음 데이터를 붙여넣으세요

- 10 [mxa.mailgun.org](//mxa.mailgun.org)를 복사하고 붙여넣으세요
- +Add more to this record를 클릭하세요
- 10 mxb.mailgun.org를 복사하고 붙여넣으세요

![MX 레코드 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243544215/original/laPv0qzJMIw-tvzuWSaNoZUh1BosRw4EOg.png?1659728081)

## CNAME 레코드 추가하기 - 새 레코드 만들기 클릭

Host name:
설정하려는 서브도메인에 따라,

[mg.companyname.com](//mg.companyname.com)을 설정하는 경우 호스트 이름은 email.mg입니다

[replies.companyname.com](//replies.companyname.com)의 경우 호스트 이름은 email.replies입니다

companyname.com과 같은 메인 도메인을 설정하는 경우 호스트 이름은 email입니다

Type: 드롭다운에서 CNAME을 선택하세요

Data: mailgun.org를 복사하고 붙여넣으세요

![CNAME 레코드 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243543931/original/4TQk2kmsk4suUaSdEwDrhVPLhdT8fYRTiw.png?1659727913)

이제 5개의 DNS 레코드를 모두 추가했으므로 SAVE를 클릭하세요!

메일건으로 돌아가서 Verify DNS Settings를 클릭하세요

일부 레코드가 여전히 녹색 체크 표시를 보이지 않는다면 Verify DNS Settings 버튼을 다시 클릭하세요

![DNS 설정 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243544863/original/fZ4MWAp_hBYkuUM9L9YEuCRqwG5FLmD8Yw.png?1659728463)

모든 DNS 레코드를 추가하고 확인했다면, [메일건 API 키 - 메일건에서 찾아서 하이레벨에 넣는 방법](mailgun-private-api-key-setup.md)에서 API 키를 가져올 수 있습니다.

그러면 모든 것이 작동하는지 테스트 이메일을 보낼 수 있습니다! [대화(Conversations)에서 테스트 이메일을 보내는 방법](../트러블슈팅/how-to-send-a-test-email-in-the-conversation.md)을 알아보세요.

---
*원문 최종 수정: Wed, 26 Jul, 2023 at 6:38 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*