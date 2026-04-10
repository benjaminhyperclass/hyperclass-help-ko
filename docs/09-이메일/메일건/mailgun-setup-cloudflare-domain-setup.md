---

번역일: 2026-04-07
카테고리: 09-이메일 > 메일건
---

# Mailgun 설정 - CloudFlare 도메인 설정

**목차**

- [단계별 Mailgun 설정](#단계별-mailgun-설정)
- [첫 번째 TXT 레코드 추가](#첫-번째-txt-레코드-추가)
- [두 번째 TXT 레코드 추가](#두-번째-txt-레코드-추가)
- [첫 번째 MX 레코드 추가](#첫-번째-mx-레코드-추가)
- [두 번째 MX 레코드 추가](#두-번째-mx-레코드-추가)
- [CNAME 레코드 추가](#cname-레코드-추가)

# 단계별 Mailgun 설정

1. [Mailgun.com](https://signup.mailgun.com/new/signup)에 회원가입합니다.

2. 이메일 인박스를 확인하여 이메일 주소를 인증합니다.

[
![이메일 인증 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378416/original/VewuZVN3oFOFIvBdf4XqMAOX4vtVGv_jNg.png?1677630998)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535009/original/7tQRdPUgguqaYEpnIV2uS3kIQpMd7jZBZw.png?1659724083)

[
![이메일 인증 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378421/original/GU6IL6Y3N81qm6KMH9aTz7l5FV5IEv7ySA.png?1677630999)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535045/original/kRGmwZtbq3-zkULjp6-Pg0J-7sTNMNHymQ.png?1659724108)

3. Mailgun에 로그인하고, Sending > Add New Domain을 클릭합니다.

[
![Mailgun 도메인 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378418/original/kxsnymCeuFAsBWkXaOes6QaaWED2_bfASA.png?1677630999)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535197/original/doBfy9jAqoxcOqD5LiuyQO9rnyVWfkkAeg.png?1659724186)

4. 도메인이 companyname.com이라면, 메인 도메인 또는 서브도메인 중 하나를 Mailgun으로 설정할 수 있습니다.

A. 메인 도메인:
- 메인 도메인을 추가하는 경우, [Gsuite나 다른 이메일 제공업체와 함께 사용하면 안 됩니다](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)

서브도메인:
- Mailgun으로 서브도메인을 설정하려면 ANYTHING_HERE.companyname.com 형식으로 입력할 수 있습니다.
예시:
- mg.companyname.com
- replies.companyname.com
- support.companyname.com

B. 도메인 또는 서브도메인을 EU가 아닌 US로 설정해주세요.

C. Add domain을 클릭합니다.

[
![도메인 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382652/original/woVjMqNw3YY_Zjs20LoBHUb4KrThVvj_Rw.png?1677635102)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243536037/original/B5DZocdO2h64MlEDtfuFjER-U_0AO_NOEg.png?1659724559)

다음 화면에서 도메인에 DNS 레코드를 추가하라는 요청이 나타납니다. 다음 단계를 위해 이 화면을 열어둡니다.

![DNS 레코드 추가 요청 화면](https://help.mailgun.com/hc/article_attachments/8759612958491/Screen_Shot_2022-09-11_at_6.39.22_PM.png)

5. 이제 도메인을 구매한 곳의 DNS 레코드에 로그인하여 5개의 DNS 레코드를 추가합니다.

## 첫 번째 TXT 레코드 추가

[첫 번째 TXT 레코드를 추가](https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/)하려면 [Cloudflare 대시보드](https://dash.cloudflare.com/login)에 로그인하고 계정과 도메인을 선택합니다.

DNS > Records를 클릭합니다.

![CloudFlare DNS 레코드 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284386950/original/7Br2BkIKLhDBiHeqj6uRhzUTM68HZihKIQ.png?1677639074)

**+ Add Record**를 클릭합니다.

![레코드 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284387199/original/vr_JbieNqi07EUV9m4GhTYCExqDcTOc-zw.png?1677639281)

![TXT 레코드 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284387183/original/Y8NTiChTf60Ju-PPIBkxMoPvepF9sUSQqQ.png?1677639258)

A. Type: Type 메뉴 옵션에서 TXT를 선택합니다.

B. Name: 루트 도메인은 포함하지 마세요.

- 설정하려는 서브도메인에 따라, [mg.companyname.com](//mg.companyname.com)을 설정하려는 경우 호스트 이름은 mg가 됩니다.
- [replies.companyname.com](//replies.companyname.com)의 경우 호스트 이름은 replies가 됩니다.
- companyname.com과 같은 메인 도메인을 설정하는 경우 호스트 이름은 @가 됩니다.

C. Content: 모든 사용자 공통

- 다음 레코드를 붙여넣기하세요: **v=spf1 include:mailgun.org ~all**

D. Save를 클릭합니다.

![첫 번째 TXT 레코드 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284384681/original/QCbqi3BnzhNKNCspyADXNWBZfk3F55e2dg.png?1677636916)

## 두 번째 TXT 레코드 추가

+ Add Record를 다시 클릭합니다.

![두 번째 레코드 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284387388/original/pGwHEEJ73iotP2Px-sz8EMcZlT852MZg1g.png?1677639444)

A. Type: Type 메뉴 옵션에서 TXT를 선택합니다.

B. Name: 약간 복잡하지만, 핵심은 처음부터 서브도메인 부분까지만 복사하고 루트 도메인은 포함하지 않는 것입니다.

**모든 사용자의 두 번째 TXT 레코드 호스트 이름과 값은 다릅니다.**

예시: 강조 표시된 부분만 복사하세요.

서브도메인 사용 예시 1:

mx._domainkey.helpdesk를 호스트 이름으로 복사

![서브도메인 TXT 레코드 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380215/original/t6MGY8Bw9AK1Vv01kUxtJAkNwp_4UfYjHw.png?1677632945)

메인 도메인 사용 예시 2:

mailo._domainkey를 호스트 이름으로 복사

![메인 도메인 TXT 레코드 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380223/original/JSERXQQhYNvzVp7YoXhIji_yeomZNLXUKA.png?1677632951)

C. Content: Mailgun으로 돌아가서 아래 스크린샷에 강조 표시된 두 번째 TXT 레코드를 복사합니다.

- Content: 여기에 복사한 두 번째 매우 긴 TXT 레코드를 붙여넣기합니다.

![두 번째 TXT 레코드 값](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385043/original/UvAhE3LGN5sYkTb4kyEsXNM0GE0Uc8Eq1Q.png?1677637220)

D. Save를 클릭합니다.

## 첫 번째 MX 레코드 추가

![MX 레코드 추가 준비](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385538/original/qHcrrZPnp3g0LC4c75qM1hg_opwYUXgE0w.png?1677637720)

+ Add Record를 다시 클릭합니다.

![MX 레코드 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284387485/original/P9K8ytrObBrwMJdpaEBYJYuK3S7Z-iq5yg.png?1677639588)

메인 도메인의 수신 이메일을 처리하기 위해 Gsuite 계정이 있는 경우, Mailgun용으로는 서브도메인을 사용해야 합니다. [Mailgun과 Google Apps(또는 다른 이메일 서버)에 동일한 도메인 이름을 사용할 수 있나요?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)를 확인해보세요.

A. Type: Type 메뉴 옵션에서 MX를 선택합니다.

B. Name: 사용자마다 다름

설정하려는 서브도메인에 따라:

[mg.companyname.com](//mg.companyname.com)을 설정하려는 경우 호스트 이름은 mg

[replies.companyname.com](//replies.companyname.com)의 경우 호스트 이름은 replies

companyname.com과 같은 메인 도메인을 설정하는 경우 호스트 이름은 @

C. Mail Server: 모든 사용자 공통

    다음 데이터를 붙여넣기하세요: mxa.mailgun.org

D. Priority는 **10**이며, 설정하려는 도메인에 관계없이 모든 사용자가 동일합니다.

E. **Save**를 클릭합니다.

## 두 번째 MX 레코드 추가

+ Add Record를 다시 클릭합니다.

![두 번째 MX 레코드 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284387662/original/7FOCRV3g2jhAT9ogHOZI9nNtWZiNGsDqlQ.png?1677639703)

A. Type: Type 메뉴 옵션에서 MX를 선택합니다.

B. Name: 사용자마다 다름

설정하려는 서브도메인에 따라:

[mg.companyname.com](//mg.companyname.com)을 설정하려는 경우 호스트 이름은 mg

[replies.companyname.com](//replies.companyname.com)의 경우 호스트 이름은 replies

companyname.com과 같은 메인 도메인을 설정하는 경우 호스트 이름은 @

C. Mail Server: 모든 사용자 공통

    다음 데이터를 붙여넣기하세요: mxb.mailgun.org

D. Priority는 **10**이며, 설정하려는 도메인에 관계없이 모든 사용자가 동일합니다.

E. **Save**를 클릭합니다.

## CNAME 레코드 추가

![CNAME 레코드 추가 준비](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385721/original/3LyKoigujZ-vEjMFQDflCfmRRfAJra3rYA.png?1677637907)

Cloudflare에서 + Add Record를 다시 클릭합니다.

![CNAME 레코드 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284387826/original/6ADDI371NG-0XbruZ2zs5EF4QgaagbkXqQ.png?1677639817)

A. Type: Type 메뉴 옵션에서 CNAME을 선택합니다.

B. Name: 사용자마다 다름

Mailgun으로 돌아가서 호스트 이름을 복사합니다. 약간 복잡하지만 핵심은 처음부터 서브도메인 부분까지만 복사하고 메인 도메인은 복사하지 않는 것입니다.

설정하려는 서브도메인에 따라:

- mg.companyname.com의 경우 호스트 이름은 email.mg
- replies.companyname.com의 경우 호스트 이름은 email.replies

companyname.com과 같은 메인 도메인을 설정하는 경우 호스트 이름은 email

![CNAME 호스트 이름 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385985/original/OtLw_A4zY8FbLbBKqMB9kUKRaQJO3xpp8A.png?1677638165)

C. Target: 모든 사용자 공통

        다음 데이터를 붙여넣기하세요: mailgun.org

D. 주황색 구름 Proxied를 클릭하여 **DNS only**로 변경합니다.

E. Save를 클릭합니다.

![CNAME 레코드 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284387917/original/KyyhGEhxb0QZRZCV2f8MAaNP6jb9n37nvA.png?1677639894)

이제 5개의 레코드를 모두 추가했으니, Mailgun으로 돌아가서 Verify DNS Settings를 클릭합니다.

일부 레코드가 여전히 녹색 체크마크를 표시하지 않는다면 Verify DNS Settings 버튼을 다시 클릭하세요.

![DNS 설정 검증](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284387965/original/I7T5QQCSjAnBvT1zqQlVgXSuNdgfuNiM3w.png?1677639928)

모든 DNS 레코드를 추가하고 검증을 완료하면, [Mailgun API Key - Where to Find in Mailgun & Put in HighLevel](mailgun-private-api-key-setup.md)에서 Mailgun API 키를 가져올 수 있습니다.

그런 다음 모든 것이 작동하는지 확인하기 위해 테스트 이메일을 보낼 수 있습니다! [대화에서 테스트 이메일을 보내는 방법](how-to-send-a-test-email-in-the-conversation.md)을 클릭하여 자세히 알아보세요.

---
*원문 최종 수정: Tue, 28 Feb, 2023 at 10:30 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*