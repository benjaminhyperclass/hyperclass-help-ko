---

번역일: 2026-04-07
카테고리: 09-이메일 > 메일건
---

# 메일건 설정 - 사이트그라운드 도메인 설정

**목차**

- [단계별 메일건 설정 - 사이트그라운드 도메인 설정](#단계별-메일건-설정---사이트그라운드-도메인-설정)
- [첫 번째 TXT 레코드 추가](#첫-번째-txt-레코드-추가)
- [두 번째 TXT 레코드 추가](#두-번째-txt-레코드-추가)
- [첫 번째 MX 레코드 추가](#첫-번째-mx-레코드-추가)
- [두 번째 MX 레코드 추가](#두-번째-mx-레코드-추가)
- [CNAME 레코드 추가](#cname-레코드-추가)

# 단계별 메일건 설정 - 사이트그라운드 도메인 설정

1. [Mailgun.com](https://signup.mailgun.com/new/signup)에 가입하세요

2. 이메일 주소 인증을 위해 수신함을 확인하세요

[
![이메일 인증](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378416/original/VewuZVN3oFOFIvBdf4XqMAOX4vtVGv_jNg.png?1677630998)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535009/original/7tQRdPUgguqaYEpnIV2uS3kIQpMd7jZBZw.png?1659724083)

[
![이메일 인증 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378421/original/GU6IL6Y3N81qm6KMH9aTz7l5FV5IEv7ySA.png?1677630999)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535045/original/kRGmwZtbq3-zkULjp6-Pg0J-7sTNMNHymQ.png?1659724108)

3. 메일건에 로그인 후 Sending > Add New Domain을 클릭하세요

[
![도메인 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378418/original/kxsnymCeuFAsBWkXaOes6QaaWED2_bfASA.png?1677630999)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535197/original/doBfy9jAqoxcOqD5LiuyQO9rnyVWfkkAeg.png?1659724186)

4. 도메인이 companyname.com이라면, 메인 도메인 또는 서브도메인 중 하나로 설정할 수 있습니다.

A. 메인 도메인:
- 메인 도메인을 추가하는 경우, [Google Workspace나 다른 이메일 제공업체와 함께 사용하면 안 됩니다](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)

서브도메인:
- 메일건에서 서브도메인을 설정하려면, ANYTHING_HERE.companyname.com 형식으로 입력할 수 있습니다
예시:
- mg.companyname.com
- replies.companyname.com  
- support.companyname.com

B. 도메인이나 서브도메인을 반드시 US로 설정하세요. EU가 아닌 US로 설정해야 합니다.

C. Add domain을 클릭하세요

[
![도메인 지역 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382652/original/woVjMqNw3YY_Zjs20LoBHUb4KrThVvj_Rw.png?1677635102)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243536037/original/B5DZocdO2h64MlEDtfuFjER-U_0AO_NOEg.png?1659724559)

다음 화면에서 도메인에 DNS 레코드를 추가하라고 안내합니다. 다음 단계를 위해 이 화면을 열어두세요.

![DNS 레코드 설정 화면](https://help.mailgun.com/hc/article_attachments/8759612958491/Screen_Shot_2022-09-11_at_6.39.22_PM.png)

5. 이제 도메인을 구입한 곳의 DNS 레코드에 로그인하여 5개의 DNS 레코드를 추가하세요.

## 첫 번째 TXT 레코드 추가

[첫 번째 TXT 레코드를 추가](https://world.siteground.com/kb/manage-dns-records/#TXT_record_settings)하려면, [사이트그라운드](https://login.siteground.com/login?lang=en)에 로그인하세요

Site Tools > Domain > DNS Zone Editor로 이동하세요

![DNS Zone Editor](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284391901/original/ZwLX5zPm5t6xvyGMrcxkIhoPH6U7XtbQsw.png?1677643178)

Create New Record 섹션에서

![새 레코드 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284392257/original/BnfApclXdbWZ_ONRoVqVaZZLCw-m9GTxFw.png?1677643477)

A. TXT 탭을 클릭하세요

B. Name: 사용자마다 다릅니다. 루트 도메인은 포함하지 마세요
- 설정하려는 서브도메인에 따라, [mg.companyname.com](//mg.companyname.com)을 설정한다면 호스트 이름은 mg입니다
- [replies.companyname.com](//replies.companyname.com)이라면 호스트 이름은 replies입니다
- companyname.com과 같은 메인 도메인을 설정한다면 호스트 이름은 @이거나 비워두세요

C. Value: 모든 사용자가 동일합니다
- 다음 레코드를 붙여넣으세요: v=spf1 include:mailgun.org ~all

D. Create를 클릭하세요

![첫 번째 TXT 레코드 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284384681/original/QCbqi3BnzhNKNCspyADXNWBZfk3F55e2dg.png?1677636916)

## 두 번째 TXT 레코드 추가

+ Add Record를 다시 클릭하세요

![레코드 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284392423/original/WFBDHip6_j3WmEo4nRgIeENzQN-OEFhqqA.png?1677643605)

A. TXT 탭을 클릭하세요

B. Name: 약간 복잡하지만, 여기서 핵심은 처음부터 서브도메인 부분까지만 복사하는 것입니다. 루트 도메인은 포함하지 마세요

**모든 사용자의 두 번째 TXT 레코드 호스트 이름과 값은 다릅니다

예시: 강조된 부분만 복사해서 Name 필드에 붙여넣으세요

서브도메인 사용 예시 1:

mx._domainkey.helpdesk를 호스트 이름으로 복사하세요

![서브도메인 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380215/original/t6MGY8Bw9AK1Vv01kUxtJAkNwp_4UfYjHw.png?1677632945)

메인 도메인 사용 예시 2:

mailo._domainkey를 호스트 이름으로 복사하세요

![메인 도메인 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380223/original/JSERXQQhYNvzVp7YoXhIji_yeomZNLXUKA.png?1677632951)

C. Value: 메일건으로 돌아가서 아래 스크린샷에서 강조된 두 번째 TXT 레코드를 복사해서 붙여넣으세요

![두 번째 TXT 값](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385043/original/UvAhE3LGN5sYkTb4kyEsXNM0GE0Uc8Eq1Q.png?1677637220)

D. Create를 클릭하세요

## 첫 번째 MX 레코드 추가

![MX 레코드 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385538/original/qHcrrZPnp3g0LC4c75qM1hg_opwYUXgE0w.png?1677637720)

MX 탭 클릭 > Add your own MX records 선택

![MX 레코드 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284392929/original/H-xERjs6rnHBgx2KfGgEYZBZ7Mmkxa_00A.png?1677644034)

메인 도메인의 수신 이메일을 받기 위해 Google Workspace 계정이 있다면, 메일건에는 반드시 서브도메인을 사용하세요. [메일건과 Google Apps(또는 다른 이메일 서버)에 같은 도메인 이름을 사용할 수 있나요?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-) 문서를 확인하세요.

![MX 레코드 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284393043/original/KK8SevO7iTJJWSHB-9l9vRPfuZtGzkKxmw.png?1677644111)

A. Name: 사용자마다 다릅니다

설정하려는 서브도메인에 따라:
- [mg.companyname.com](//mg.companyname.com)을 설정한다면 호스트 이름은 mg입니다
- [replies.companyname.com](//replies.companyname.com)이라면 호스트 이름은 replies입니다
- companyname.com과 같은 메인 도메인을 설정한다면 호스트 이름은 @입니다

B. Priority는 10입니다 (어떤 도메인을 설정하든 모든 사용자가 동일)

C. Destination: 모든 사용자가 동일합니다
   다음 데이터를 붙여넣으세요: mxa.mailgun.org

D. Create를 클릭하세요

## 두 번째 MX 레코드 추가

다시 MX 레코드를 추가하되, 이번엔 Destination을 mxb.mailgun.org로 설정하세요

![두 번째 MX 레코드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284393336/original/Rwlp0thYONnclsrwYeGKRE6xBW0jl1A2KQ.png?1677644328)

A. Name: 사용자마다 다릅니다

설정하려는 서브도메인에 따라:
- [mg.companyname.com](//mg.companyname.com)을 설정한다면 호스트 이름은 mg입니다
- [replies.companyname.com](//replies.companyname.com)이라면 호스트 이름은 replies입니다
- companyname.com과 같은 메인 도메인을 설정한다면 호스트 이름은 @입니다

B. Priority는 10입니다 (어떤 도메인을 설정하든 모든 사용자가 동일)

C. Destination: 모든 사용자가 동일합니다
   다음 데이터를 붙여넣으세요: mxb.mailgun.org

D. Create를 클릭하세요

## CNAME 레코드 추가

![CNAME 레코드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385721/original/3LyKoigujZ-vEjMFQDflCfmRRfAJra3rYA.png?1677637907)

![CNAME 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284393711/original/khGHMR_qTn12M2FmkiCTjNf8k9lHWO-gDw.png?1677644645)

A. CNAME 탭을 클릭하세요

B. Name: 사용자마다 다릅니다

메일건으로 돌아가서 호스트 이름을 복사하세요. 약간 복잡하지만, 여기서 핵심은 처음부터 서브도메인 부분까지만 복사하는 것입니다. 메인 도메인은 복사하지 마세요.

설정하려는 서브도메인에 따라:
- mg.companyname.com을 설정한다면 호스트 이름은 email.mg입니다
- replies.companyname.com이라면 호스트 이름은 email.replies입니다
- companyname.com과 같은 메인 도메인을 설정한다면 호스트 이름은 email입니다

![CNAME 호스트 이름](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385985/original/OtLw_A4zY8FbLbBKqMB9kUKRaQJO3xpp8A.png?1677638165)

C. Resolves to: 모든 사용자가 동일합니다
   다음 데이터를 붙여넣으세요: mailgun.org

D. Create를 클릭하세요

![CNAME 생성 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284393881/original/3o8rKOzJY89uxP0iayB1w-9flRZKZ1EM8g.png?1677644794)

5개 레코드를 모두 추가했다면, 메일건으로 돌아가서 Verify DNS Settings를 클릭하세요

일부 레코드가 여전히 녹색 체크마크를 표시하지 않는다면, Verify DNS Settings 버튼을 다시 클릭하세요

![DNS 설정 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284387965/original/I7T5QQCSjAnBvT1zqQlVgXSuNdgfuNiM3w.png?1677639928)

모든 DNS 레코드를 추가하고 확인했다면, [메일건 API 키를 어디서 찾아서 하이퍼클래스에 입력하는지](mailgun-private-api-key-setup.md) 가이드를 참고하세요.

그 다음 테스트 이메일을 보내서 모든 것이 제대로 작동하는지 확인해보세요! [대화(Conversations)에서 테스트 이메일을 보내는 방법](how-to-send-a-test-email-in-the-conversation.md)을 참고하세요.

---
*원문 최종 수정: 2023년 2월 28일*  
*Hyperclass 사용 가이드 — hyperclass.ai*