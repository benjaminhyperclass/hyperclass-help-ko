---

번역일: 2026-04-06
카테고리: 09-이메일
---

# Mailgun 설정 - Namecheap 도메인 설정

## 단계별 Mailgun 설정 - Namecheap 도메인 설정

1. [Mailgun.com](https://signup.mailgun.com/new/signup)에 회원가입합니다.

2. 이메일 인박스를 확인하여 이메일 주소를 인증합니다.

[
![이메일 인증 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378416/original/VewuZVN3oFOFIvBdf4XqMAOX4vtVGv_jNg.png?1677630998)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535009/original/7tQRdPUgguqaYEpnIV2uS3kIQpMd7jZBZw.png?1659724083)

[
![이메일 인증 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378421/original/GU6IL6Y3N81qm6KMH9aTz7l5FV5IEv7ySA.png?1677630999)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535045/original/kRGmwZtbq3-zkULjp6-Pg0J-7sTNMNHymQ.png?1659724108)

3. Mailgun에 로그인한 후, **Sending** > **Add New Domain**을 클릭합니다.

[
![Mailgun 도메인 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378418/original/kxsnymCeuFAsBWkXaOes6QaaWED2_bfASA.png?1677630999)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535197/original/doBfy9jAqoxcOqD5LiuyQO9rnyVWfkkAeg.png?1659724186)

4. 도메인이 companyname.com인 경우, Mailgun에서 메인 도메인 또는 서브도메인을 설정할 수 있습니다.

A. 메인 도메인:
- 메인 도메인을 추가하는 경우, [해당 도메인은 Google Workspace나 다른 이메일 제공업체와 함께 사용할 수 없습니다](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)

서브도메인:
- Mailgun으로 서브도메인을 설정하려면, **원하는_텍스트**.companyname.com 형태로 입력하세요
예시:
- mg.companyname.com
- replies.companyname.com
- support.companyname.com

B. 도메인이나 서브도메인을 **US**로 설정하세요. **EU가 아닌 US로 설정해야 합니다.**

C. **Add domain**을 클릭합니다.

[
![도메인 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382652/original/woVjMqNw3YY_Zjs20LoBHUb4KrThVvj_Rw.png?1677635102)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243536037/original/B5DZocdO2h64MlEDtfuFjER-U_0AO_NOEg.png?1659724559)

5. 이제 도메인을 구매한 곳의 DNS 레코드에 로그인하여 5개의 DNS 레코드를 추가합니다.

[Namecheap.com](https://www.namecheap.com/myaccount/login/)에 로그인하세요.

**Domain List** > **Manage**를 클릭합니다.

![Namecheap 도메인 관리](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284379162/original/ZFfDWZRqEj2vF1mZu2LLamthayVacfWNdQ.png?1677631852)

**Advanced DNS**를 클릭합니다. 5개의 DNS 레코드를 추가할 예정입니다.

![고급 DNS 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284379194/original/lbM_9qwxdQuZYJgoO8k_Bbs6207ECEULCA.png?1677631892)

## 첫 번째 TXT 레코드 추가

**Add New Record**를 클릭합니다.

![새 레코드 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284379255/original/z9t88DrLLsk_x-5McqcmUoQay6Rtpl-3JA.png?1677631962)

드롭다운에서 **TXT Record**를 선택합니다.

![TXT 레코드 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284379274/original/XZhGADHABEyG3gpE2kfSb4glLSsGZ7X29g.png?1677631986)

![TXT 레코드 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284379750/original/afOhZ_mYDjiPnMtdsXB_BaUvpK7-fBAbEg.png?1677632454)

A. Host:

설정하려는 서브도메인에 따라,

[mg.companyname.com](//mg.companyname.com)을 설정하는 경우: 호스트명은 **mg**
[replies.companyname.com](//replies.companyname.com)을 설정하는 경우: 호스트명은 **replies**

companyname.com과 같은 **메인** 도메인을 설정하는 경우: 호스트명은 @

B. Mailgun으로 돌아가서 첫 번째 TXT 레코드를 복사합니다: v=spf1 include:mailgun.org ~all

Value: 복사한 첫 번째 TXT 레코드를 붙여넣습니다: v=spf1 include:mailgun.org ~all

![TXT 값 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284379641/original/OtndbakIxEwGec0uzyy6VhrQ9ahdwqWR4g.png?1677632355)

C. 녹색 체크 버튼을 클릭합니다.

## 두 번째 TXT 레코드 추가

**Add New Record**를 클릭합니다.

![두 번째 레코드 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380045/original/p3EI2E6cXdPA44wNy1dlbvL9SeMlPsN_pg.png?1677632706)

드롭다운에서 **TXT Record**를 선택합니다.

![두 번째 TXT 레코드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380093/original/ymsCp1tf0vOpw8jh_ELv1eyAHoFR08klKA.png?1677632745)

![TXT 레코드 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380135/original/h15o-HQi5ZlCUWfi23NsIp_ULoUljPMbDw.png?1677632789)

A. Host:

여기가 조금 까다로운 부분입니다. 처음부터 서브도메인 부분까지만 복사하고, 메인 도메인은 복사하지 마세요.

![호스트명 복사 방법](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284379962/original/S6JIQJ-twEQMWBwUw7Do7908kLEMK8w9gg.png?1677632628)

예시: **강조표시된 부분을 복사하세요**

예시 1 - 서브도메인 사용:

![서브도메인 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380215/original/t6MGY8Bw9AK1Vv01kUxtJAkNwp_4UfYjHw.png?1677632945)

예시 2 - 메인 도메인 사용:

![메인 도메인 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380223/original/JSERXQQhYNvzVp7YoXhIji_yeomZNLXUKA.png?1677632951)

B. Value: 두 번째 긴 TXT 레코드를 여기에 붙여넣습니다.

![두 번째 TXT 값](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380189/original/a5LTwyG6FV_Hp-L232_fAj2g1VUUDlSyPw.png?1677632888)

C. 녹색 체크 버튼을 클릭합니다.

## 첫 번째 MX 레코드 추가

**MAIL SETTINGS**까지 스크롤 다운합니다.

드롭다운을 **Custom MX**로 변경합니다.

![Custom MX 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380651/original/s-vIse48Y60uv4ODRMU02N4qsPS5I5uYeg.png?1677633315)

⚠️ **중요:** 메인 도메인에 대해 원래 **Gmail**이 선택되어 있었다면, 이 설정은 기존 Google Workspace 계정의 수신 이메일 수신에 영향을 줍니다. Mailgun에는 서브도메인을 사용하는 것을 권장합니다. [Mailgun과 Google Apps(또는 다른 이메일 서버)에 같은 도메인명을 사용할 수 있나요?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-) 문서를 참조하세요.

Google Gmail용 **5개** [MX 레코드](https://support.google.com/a/answer/140034?hl=en)를 다시 추가해야 합니다:

| Host | Time to Live (TTL) | Priority | Value |
|------|-------------------|----------|-------|
| @ | 3600 | 1 | ASPMX.L.GOOGLE.COM |
| @ | 3600 | 5 | ALT1.ASPMX.L.GOOGLE.COM |
| @ | 3600 | 5 | ALT2.ASPMX.L.GOOGLE.COM |
| @ | 3600 | 10 | ALT3.ASPMX.L.GOOGLE.COM |
| @ | 3600 | 10 | ALT4.ASPMX.L.GOOGLE.COM |

위의 **5개** MX 레코드를 모두 추가한 후, Mailgun용 MX 레코드를 추가할 수 있습니다.

**Add New Record**를 클릭합니다.

![MX 레코드 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284381008/original/Hvcyh4kYnFgfuL6SKPnyDNBFReckD-0qqg.png?1677633693)

![MX 레코드 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380997/original/nSuGvsypPVy3uastd0-zS4Dpu71FC2figA.png?1677633659)

A. Host:

설정하려는 서브도메인에 따라,

[mg.companyname.com](//mg.companyname.com)을 설정하는 경우: 호스트명은 **mg**
[replies.companyname.com](//replies.companyname.com)을 설정하는 경우: 호스트명은 **replies**

companyname.com과 같은 **메인** 도메인을 설정하는 경우: 호스트명은 @

B. Value: 다음 데이터를 붙여넣습니다: mxa.mailgun.org

C. Priority는 10입니다.

D. 녹색 체크 버튼을 클릭합니다.

![첫 번째 MX 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284381240/original/2nrnlf9BwTPbv5cKXKZS8QStDqfFbqz-7w.png?1677633916)

## 두 번째 MX 레코드 추가

A. Host:

설정하려는 서브도메인에 따라,

[mg.companyname.com](//mg.companyname.com)을 설정하는 경우: 호스트명은 **mg**
[replies.companyname.com](//replies.companyname.com)을 설정하는 경우: 호스트명은 **replies**

companyname.com과 같은 **메인** 도메인을 설정하는 경우: 호스트명은 @

B. Value: 다음 데이터를 붙여넣습니다: mxb.mailgun.org

C. Priority는 **10**입니다.

D. 녹색 체크 버튼을 클릭합니다.

![두 번째 MX 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284381184/original/wao3EJjnKT5qAO1wn_ZxZqBdEusgs_E8Qw.png?1677633856)

## CNAME 레코드 추가

HOST RECORDS라는 이름의 상단 섹션으로 다시 스크롤 업합니다.

**Add New Record**를 클릭합니다.

![CNAME 레코드 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284381639/original/UJxPcf-rUHX7AwbK1pwp4kMH-N9VjEx62w.png?1677634175)

드롭다운에서 **CNAME Record**를 선택합니다.

![CNAME 레코드 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284381737/original/kaXoDz-tFmwEhnhJ-NOwZcvVlkk_b8I-bg.png?1677634268)

Mailgun으로 돌아가서 호스트명을 복사합니다. 여기가 조금 까다로운 부분인데, 처음부터 서브도메인 부분까지만 복사하고, 메인 도메인은 복사하지 마세요.

![CNAME 호스트명 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382024/original/SKui5c_vVTAOKtN714Bl9mx8OdjgxebDSA.png?1677634552)

Namecheap으로 돌아가세요:

![CNAME 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284381724/original/zDKUjwzlyWytyho6PuhbQEvKuqGiKzYypQ.png?1677634245)

A. Host:

설정하려는 서브도메인에 따라,

mg.companyname.com을 설정하는 경우: 호스트명은 **email.mg**
replies.companyname.com을 설정하는 경우: 호스트명은 **email.replies**

companyname.com과 같은 **메인** 도메인을 설정하는 경우: 호스트명은 **email**

B. Value: 다음 데이터를 붙여넣습니다: [mailgun.org](https://mxa.mailgun.org/)

C. 녹색 체크 버튼을 클릭합니다.

5개의 레코드를 모두 추가했으므로, Mailgun으로 돌아가서 **Verify DNS Settings**을 클릭하세요.

일부 레코드가 여전히 녹색 체크 표시를 보여주지 않는다면, **Verify DNS Settings** 버튼을 다시 클릭하세요.

![DNS 설정 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382101/original/PQecmA9d0ihGiF3VchOhZL1VKMrOZmUvDQ.png?1677634628)

모든 DNS 레코드를 추가하고 확인했으면, [Mailgun API Key - Mailgun에서 찾아서 하이퍼클래스에 넣는 방법](mailgun-private-api-key-setup.md)을 참조하여 API 키를 가져올 수 있습니다.

그런 다음 테스트 이메일을 보내서 모든 것이 작동하는지 확인할 수 있습니다! [대화에서 테스트 이메일을 보내는 방법](how-to-send-a-test-email-in-the-conversation.md)을 참조하세요.

## 요약 영상:

---
*원문 최종 수정: 2023년 2월 28일*
*Hyperclass 사용 가이드 — hyperclass.ai*