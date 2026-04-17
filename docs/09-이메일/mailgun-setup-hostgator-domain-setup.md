---

번역일: 2026-04-06
카테고리: 09-이메일
---

# Mailgun 설정 - HostGator 도메인 설정

**목차**

- [단계별 Mailgun 설정 - HostGator 도메인 설정](#단계별-mailgun-설정-hostgator-도메인-설정)
- [첫 번째 TXT 레코드 추가하기](#첫-번째-txt-레코드-추가하기)
- [두 번째 TXT 레코드 추가하기](#두-번째-txt-레코드-추가하기)
- [첫 번째 MX 레코드 추가하기](#첫-번째-mx-레코드-추가하기)
- [두 번째 MX 레코드 추가하기](#두-번째-mx-레코드-추가하기)
- [CNAME 레코드 추가하기](#cname-레코드-추가하기)

# 단계별 Mailgun 설정 - HostGator 도메인 설정

1. [Mailgun.com](https://signup.mailgun.com/new/signup)에서 계정을 만들어 주세요

2. 이메일 인박스를 확인하여 이메일 주소를 인증해 주세요

[
![Mailgun 이메일 인증](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378416/original/VewuZVN3oFOFIvBdf4XqMAOX4vtVGv_jNg.png?1677630998)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535009/original/7tQRdPUgguqaYEpnIV2uS3kIQpMd7jZBZw.png?1659724083)

[
![Mailgun 로그인 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378421/original/GU6IL6Y3N81qm6KMH9aTz7l5FV5IEv7ySA.png?1677630999)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535045/original/kRGmwZtbq3-zkULjp6-Pg0J-7sTNMNHymQ.png?1659724108)

3. Mailgun에 로그인한 후, Sending > Add New Domain을 클릭해 주세요

[
![Mailgun 도메인 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378418/original/kxsnymCeuFAsBWkXaOes6QaaWED2_bfASA.png?1677630999)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535197/original/doBfy9jAqoxcOqD5LiuyQO9rnyVWfkkAeg.png?1659724186)

4. 도메인이 companyname.com인 경우, 메인 도메인 또는 서브도메인을 Mailgun으로 설정할 수 있습니다.

A. 메인 도메인:
- 메인 도메인을 추가하는 경우, [G Suite나 다른 이메일 제공업체와 함께 사용할 수 없습니다](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)

서브도메인:
- Mailgun으로 서브도메인을 설정하려면, ANYTHING_HERE.companyname.com 형식으로 입력할 수 있습니다
예시:
- mg.companyname.com
- replies.companyname.com
- support.companyname.com

B. 도메인 또는 서브도메인을 EU가 아닌 US로 설정해 주세요.

C. Add domain을 클릭해 주세요

[
![Mailgun 도메인 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382652/original/woVjMqNw3YY_Zjs20LoBHUb4KrThVvj_Rw.png?1677635102)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243536037/original/B5DZocdO2h64MlEDtfuFjER-U_0AO_NOEg.png?1659724559)

다음 화면에서 도메인에 DNS 레코드를 추가하라는 안내가 나타납니다. 다음 단계를 위해 이 화면을 그대로 열어둬 주세요.

![Mailgun DNS 레코드 안내](https://help.mailgun.com/hc/article_attachments/8759612958491/Screen_Shot_2022-09-11_at_6.39.22_PM.png)

5. 이제 도메인을 구입한 곳에 따라 DNS 레코드에 로그인하여 5개의 DNS 레코드를 추가해 주세요.

## 첫 번째 TXT 레코드 추가하기

- [cPanel](https://portal.hostgator.com/hosting/cPanel/sso-redirect?redirect=/frontend/paper_lantern/)에 로그인해 주세요.
- Domains 섹션에서 Zone Editor를 클릭해 주세요.

![HostGator Zone Editor](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284388376/original/0ObShEaAQ6GXG-G-sSlIwX_9uLXpFUjdCA.png?1677640303)

- 다음 페이지에서 Zone Editor 섹션의 도메인을 찾아 Manage 버튼을 클릭해 주세요.

![Zone Editor 관리](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284388585/original/ZsKY3OvmFHtUBZWXElGKPG31Nl51EuXcFA.png?1677640464)

- Manage를 클릭하여 도메인의 모든 DNS 레코드를 확인해 주세요.
- +Add Record 버튼을 클릭하고 Add "TXT" Record를 선택해 주세요.

![TXT 레코드 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284388748/original/NLKDFwtDUhzgL1MKCSJEt-0sZ8a-ZR0JaA.png?1677640597)

![TXT 레코드 양식](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284389218/original/uUNVP51P30hs2i_U9O701kVRlGP55HpdDw.png?1677641077)

A. Name: 사용자마다 다릅니다. 루트 도메인은 포함하지 마세요

- 설정하려는 서브도메인에 따라:
- [mg.companyname.com](//mg.companyname.com)을 설정하는 경우 호스트명은 mg
- [replies.companyname.com](//replies.companyname.com)을 설정하는 경우 호스트명은 replies
- companyname.com과 같은 메인 도메인을 설정하는 경우 호스트명은 @

B. Record: 모든 사용자 동일

- 다음 레코드를 붙여넣어 주세요: **v=spf1 include:mailgun.org ~all**

![첫 번째 TXT 레코드 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284389338/original/L_D8amxfS4rLqz8NkwMDjBWCqAuPnFqSiw.png?1677641215)

C. Add Record를 클릭해 주세요

## 두 번째 TXT 레코드 추가하기

**+Add Record 버튼**을 클릭하고 다시 **Add "TXT" Record**를 선택해 주세요

![TXT 레코드 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284388748/original/NLKDFwtDUhzgL1MKCSJEt-0sZ8a-ZR0JaA.png?1677640597)

![두 번째 TXT 레코드 양식](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284389413/original/bZ319PXDv8_TwakgxeWsjd6r5-6KFjcfAA.png?1677641278)

A. Name: 조금 복잡하지만 핵심은 처음부터 서브도메인 부분까지만 복사하고, 루트 도메인은 포함하지 않는 것입니다

**모든 사용자의 두 번째 TXT 레코드 호스트명과 레코드는 다릅니다**

예시: 강조 표시된 부분만 복사해 주세요

서브도메인 사용 예시 1:

mx._domainkey.helpdesk를 호스트명으로 복사

![서브도메인 TXT 레코드 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380215/original/t6MGY8Bw9AK1Vv01kUxtJAkNwp_4UfYjHw.png?1677632945)

메인 도메인 사용 예시 2:

mailo._domainkey를 호스트명으로 복사

![메인 도메인 TXT 레코드 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380223/original/JSERXQQhYNvzVp7YoXhIji_yeomZNLXUKA.png?1677632951)

B. Record: 사용자마다 다름

Mailgun으로 돌아가서 아래 스크린샷에서 강조 표시된 두 번째 TXT 레코드를 복사해 주세요

- Record: 복사한 두 번째 긴 TXT 레코드를 여기에 붙여넣어 주세요

![두 번째 TXT 레코드 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385043/original/UvAhE3LGN5sYkTb4kyEsXNM0GE0Uc8Eq1Q.png?1677637220)

C. Add Record를 클릭해 주세요

## 첫 번째 MX 레코드 추가하기

![MX 레코드 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385538/original/qHcrrZPnp3g0LC4c75qM1hg_opwYUXgE0w.png?1677637720)

**+Add Record 버튼**을 클릭하고 Add "MX" Record를 선택해 주세요

![MX 레코드 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284389907/original/18xrjivpU7RYPDJqHY2wnce79K3AkwJe0A.png?1677641569)

메인 도메인의 수신 이메일을 처리하기 위해 G Suite 계정이 있는 경우, Mailgun에는 서브도메인을 사용해야 합니다. [Mailgun과 Google Apps(또는 다른 이메일 서버)에서 같은 도메인명을 사용할 수 있나요?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)를 확인해 보세요

![MX 레코드 양식](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284390505/original/nO1ZhMzBXp4ZqlhfzX1QYLxgGT0_ET-_vg.png?1677642035)

A. Name: 사용자마다 다름

설정하려는 서브도메인에 따라:

[mg.companyname.com](//mg.companyname.com)을 설정하는 경우 호스트명은 mg

[replies.companyname.com](//replies.companyname.com)을 설정하는 경우 호스트명은 replies

companyname.com과 같은 메인 도메인을 설정하는 경우 호스트명은 @

B. Priority는 설정하려는 도메인에 관계없이 모든 사용자에게 동일하게 **10**입니다

C. Destination: 모든 사용자 동일

다음 데이터를 붙여넣어 주세요: **mxa.mailgun.org**

E. Save Record를 클릭해 주세요

## 두 번째 MX 레코드 추가하기

**+Add Record 버튼**을 클릭하고 Add "MX" Record를 선택해 주세요

이번에는 mx**B**.mailgun.org에 대한 추가 레코드를 등록해야 합니다

![MX 레코드 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284389907/original/18xrjivpU7RYPDJqHY2wnce79K3AkwJe0A.png?1677641569)

![두 번째 MX 레코드 양식](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284390505/original/nO1ZhMzBXp4ZqlhfzX1QYLxgGT0_ET-_vg.png?1677642035)

A. Name: 사용자마다 다름

설정하려는 서브도메인에 따라:

[mg.companyname.com](//mg.companyname.com)을 설정하는 경우 호스트명은 mg

[replies.companyname.com](//replies.companyname.com)을 설정하는 경우 호스트명은 replies

companyname.com과 같은 메인 도메인을 설정하는 경우 호스트명은 @

B. Priority는 설정하려는 도메인에 관계없이 모든 사용자에게 동일하게 **10**입니다

C. Destination: 모든 사용자 동일

다음 데이터를 붙여넣어 주세요: **mxb.mailgun.org**

E. Save Record를 클릭해 주세요

## CNAME 레코드 추가하기

![CNAME 레코드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385721/original/3LyKoigujZ-vEjMFQDflCfmRRfAJra3rYA.png?1677637907)

**+Add Record 버튼**을 클릭하고 Add "CNAME" Record를 선택해 주세요

![CNAME 레코드 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284390884/original/13yHoywGcgf3oSslLKzD03Sj9MAxoJQGfA.png?1677642360)

![CNAME 레코드 양식](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284391213/original/QLb8ArxkgSrQsXJzo63PddCcQRhylQBGHw.png?1677642643)

A. Name: 사용자마다 다름

Mailgun으로 돌아가서 호스트명을 복사해 주세요. 조금 복잡하지만 핵심은 처음부터 서브도메인 부분까지만 복사하고, 메인 도메인은 복사하지 않는 것입니다

설정하려는 서브도메인에 따라:

- mg.companyname.com을 설정하는 경우 호스트명은 email.mg
- replies.companyname.com을 설정하는 경우 호스트명은 email.replies
- companyname.com과 같은 메인 도메인을 설정하는 경우 호스트명은 email

![CNAME 레코드 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385985/original/OtLw_A4zY8FbLbBKqMB9kUKRaQJO3xpp8A.png?1677638165)

B. Record: 모든 사용자 동일

다음 데이터를 붙여넣어 주세요: **mailgun.org**

C. Save Record를 클릭해 주세요

이제 5개 레코드를 모두 추가했으므로, Mailgun으로 돌아가서 Verify DNS Settings를 클릭해 주세요

일부 레코드에 여전히 녹색 체크 표시가 나타나지 않으면 Verify DNS Settings 버튼을 다시 클릭해 주세요

![DNS 설정 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284387965/original/I7T5QQCSjAnBvT1zqQlVgXSuNdgfuNiM3w.png?1677639928)

모든 DNS 레코드를 추가하고 확인했다면, [Mailgun API 키 - Mailgun에서 찾는 방법 및 하이레벨에 입력하기](메일건/mailgun-private-api-key-setup.md)를 참고하여 API 키를 가져올 수 있습니다.

그 다음 테스트 이메일을 보내서 모든 설정이 잘 작동하는지 확인해 보세요! [대화에서 테스트 이메일 보내는 방법](트러블슈팅/how-to-send-a-test-email-in-the-conversation.md)에서 자세한 내용을 확인하실 수 있습니다.

---
*원문 최종 수정: 2023년 2월 28일*
*Hyperclass 사용 가이드 — hyperclass.ai*