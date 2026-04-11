---

번역일: 2026-04-07
카테고리: 09-이메일 > LC Email 전용 도메인 및 IP
---

# Siteground 전용 발송 도메인 설정 (LC Email)

**목차**

- [단계별 LC Email 전용 도메인 설정 - Siteground](#단계별-lc-email-전용-도메인-설정-siteground)
- [첫 번째 TXT 레코드 추가](#첫-번째-txt-레코드-추가)
- [두 번째 TXT 레코드 추가](#두-번째-txt-레코드-추가)
- [첫 번째 MX 레코드 추가](#첫-번째-mx-레코드-추가)
- [두 번째 MX 레코드 추가](#두-번째-mx-레코드-추가)
- [CNAME 레코드 추가](#cname-레코드-추가)

# 단계별 LC Email 전용 도메인 설정 - Siteground

1. 하위 계정에 들어간 후 > Settings(설정) > Email Services(이메일 서비스) > Dedicated Domain(전용 도메인) > + Add Domain(도메인 추가)를 클릭하세요.

[LC Email로 에이전시 이전하기](how-to-migrate-my-agency-over-to-lc-email.md) 가이드를 확인해보세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292765242/original/jQLugI8wtvQRfs38XJDujiQd2QnIgjQqSA.gif?1681496688)

2. 도메인이 companyname.com이라면, 메인 도메인 또는 서브도메인으로 설정할 수 있습니다.

[Mailgun에서 LeadConnector로 발송 도메인을 이전하는 방법](how-to-set-up-a-dedicated-sending-domain-lc-email-.md) 가이드를 확인해보세요.

메인 도메인:
- 메인 도메인을 추가하는 경우, [Gsuite나 다른 이메일 제공업체와 함께 사용하면 안 됩니다](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)

서브도메인:
- 서브도메인을 설정하려면 원하는이름.companyname.com 형태로 입력할 수 있습니다
- 예시: replies.companyname.com, support.companyname.com

3. Add & Verify(추가 및 확인) 버튼을 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030769485/original/Q46amTmsqcDKAnWZRyL8QCC1l7hdpWCLCg.jpg?1723215212)

다음 화면에서 도메인에 DNS 레코드를 추가하라는 안내가 표시됩니다. 다음 단계를 위해 이 화면을 열어두세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030769518/original/u0y6nwg71SG7K_cEFAXEO8VhBAzeldaGQA.jpg?1723215260)

4. 이제 도메인을 구입한 곳의 DNS 레코드 관리 페이지에 로그인하여 5개의 DNS 레코드를 추가하세요.

## 첫 번째 TXT 레코드 추가

[첫 번째 TXT 레코드를 추가](https://world.siteground.com/kb/manage-dns-records/#TXT_record_settings)하려면 [Siteground](https://login.siteground.com/login?lang=en)에 로그인하세요.

Site Tools > Domain > DNS Zone Editor로 이동하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030769548/original/VsNojWfnrB6J31RPe6Kf-eYmW7DBngqqlQ.jpg?1723215298)

Create New Record(새 레코드 생성) 섹션에서:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030780106/original/bHbrF0bUz804hradJsT9OgCLJPXR8Qxiag.jpg?1723224477)

A. TXT 탭을 클릭하세요.

B. Name: 사용자마다 다름, 루트 도메인은 포함하지 마세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030780154/original/LirZym0_7wm9fj29hWQHDt2TXRZOmWAQUQ.jpg?1723224534)

- 설정하려는 서브도메인에 따라 lc.companyname.com을 설정한다면 호스트 이름은 lc
- **replies**.companyname.com이라면 호스트 이름은 replies
- companyname.com 같은 메인 도메인을 설정한다면 호스트 이름은 @ 또는 비워두세요

C. Value: 모든 사용자 공통
- 다음 레코드를 붙여넣으세요: v=spf1 include:mailgun.org ~all

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030780181/original/_hL8idOQ87Q9OiHkGuFyrBAmALbUCfdtAg.jpg?1723224576)

D. Create(생성) 버튼을 클릭하세요.

---

## 두 번째 TXT 레코드 추가

+ Add Record(레코드 추가) 버튼을 다시 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030780286/original/-_m54mJDcyCoz2qwiphfIQjUELRRPGy2TQ.jpg?1723224707)

A. TXT 탭을 클릭하세요.

B. Name: 조금 복잡하지만 핵심은 처음부터 서브도메인 부분까지만 복사하고, 루트 도메인은 포함하지 마세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030780352/original/y-S6ROHWlFNZIPWbWP35TLikz7DU-x5SBg.jpg?1723224751)

**모든 사용자의 두 번째 TXT 레코드 호스트명과 값은 다릅니다**

예시: 강조표시된 부분만 복사하세요

예시 1 (서브도메인 사용):

호스트명으로 mx._domainkey.helpdesk를 복사하세요

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292768867/original/Oy2wnQ4XgDD5YzExKorYuiEBhl-wH7krkg.png?1681498513)

예시 2 (메인 도메인 사용):

호스트명으로 mailo._domainkey를 복사하세요

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292768954/original/rXlYB3cbDo6Ix-Oq_XBgdnsiwBHDHuTUig.png?1681498537)

C. Value: Hyperclass로 돌아가서 아래 스크린샷에서 강조표시된 두 번째 TXT 레코드를 복사해서 붙여넣으세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030780383/original/HdqP4IVZly9D-b8XMoSreStXhxpKOBhmvg.jpg?1723224827)

D. Create(생성) 버튼을 클릭하세요.

---

## 첫 번째 MX 레코드 추가

MX 탭을 클릭 > Add your own MX records(직접 MX 레코드 추가)를 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030780422/original/rNjjKaWuMefXrQn3wNTgUYDpvKK7OsQibA.jpg?1723224862)

메인 도메인에서 수신 이메일을 처리하는 Gsuite 계정이 있다면, 반드시 서브도메인을 사용해야 합니다. [Mailgun과 Google Apps(또는 다른 이메일 서버)에 동일한 도메인을 사용할 수 있나요?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-) 가이드를 확인해보세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030781114/original/Wr1IYksYWNCM4dmafAALzCOKd5u-UHIIRg.jpg?1723225787)

A. Name: 사용자마다 다름

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030782341/original/EoVTlF-5tjzN0euBbaIAnTPzyOadJO6xnw.jpg?1723228044)

설정하려는 서브도메인에 따라:
- lc.companyname.com을 설정한다면 호스트 이름은 lc
- replies.companyname.com이라면 호스트 이름은 replies
- companyname.com 같은 메인 도메인이라면 호스트 이름은 @

B. Priority는 모든 사용자 공통으로 10입니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030782362/original/S3zPWDAvVfLvcHd18dzny8F2chlD-k-McA.jpg?1723228108)

C. Destination: 모든 사용자 공통
   다음 데이터를 붙여넣으세요: mxa.mailgun.org

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030782390/original/dCrujp8-torR3KCkqHj9RCUxV9T4IpP4fw.jpg?1723228150)

D. Create(생성) 버튼을 클릭하세요.

---

## 두 번째 MX 레코드 추가

다시 MX 레코드를 추가하되, 이번에는 Destination이 mxb.mailgun.org입니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030782407/original/STd7r76SSYxjjEueEZ71PlcaGBOkTHo5Jw.jpg?1723228189)

A. Name: 사용자마다 다름

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030782413/original/HGLSaAWGMgGCvPBFzdZi2p5c6a2196-KMQ.jpg?1723228228)

설정하려는 서브도메인에 따라:
- lc.companyname.com을 설정한다면 호스트 이름은 lc
- replies.companyname.com이라면 호스트 이름은 replies
- companyname.com 같은 메인 도메인이라면 호스트 이름은 @

B. Priority는 모든 사용자 공통으로 10입니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030783105/original/TBBrnlPpoLpeqs517AvUL65F5TN5oV6qbQ.jpg?1723229730)

C. Destination: 모든 사용자 공통
   다음 데이터를 붙여넣으세요: mxb.mailgun.org

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030783114/original/gmZ3PYwnHX5SoqOoa1c3TPV-FvlUOwQM6A.jpg?1723229761)

D. Create(생성) 버튼을 클릭하세요.

---

## CNAME 레코드 추가

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030783142/original/PpLAFvnX8fpVSkGYfge-jqVsPe-05bhTMA.jpg?1723229788)

A. CNAME 탭을 클릭하세요.

B. Name: 사용자마다 다름

Hyperclass로 돌아가서 호스트명을 복사하세요. 조금 복잡하지만 핵심은 처음부터 서브도메인 부분까지만 복사하고, 메인 도메인은 복사하지 마세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030783146/original/NzlqSBBFNxO15QArOp7-b2YQT2e5HoEqmg.jpg?1723229819)

설정하려는 서브도메인에 따라:
- lc.companyname.com이라면 호스트 이름은 email.lc
- replies.companyname.com이라면 호스트 이름은 email.replies
- companyname.com 같은 메인 도메인이라면 호스트 이름은 email

C. Resolves to: 모든 사용자 공통
   다음 데이터를 붙여넣으세요: mailgun.org

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030783164/original/pajiIQ0wDsE7fPob2fz6xdduz_LfP-iKMg.jpg?1723229856)

D. Create(생성) 버튼을 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030783184/original/F1CbuTsrXYX_Jc1kpb5rRqS82VtyueNFiQ.jpg?1723229890)

이제 5개의 레코드를 모두 추가했으므로, Hyperclass로 돌아가서 Verify DNS Settings(DNS 설정 확인) 버튼을 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030783203/original/X-TDph4fv6CxTwGhAoTVFfFqut48mxYVKQ.jpg?1723229933)

일부 레코드에 녹색 체크마크가 나타나지 않으면 Verify Domain(도메인 확인) 버튼을 다시 클릭하세요.

모든 DNS 레코드를 추가하고 확인한 후에는 [전용 발송 도메인의 SSL 인증서(LC Email)](ssl-certificates-for-dedicated-lc-email-domains.md)가 제대로 설정되었는지 확인하세요.

그 다음 모든 것이 정상 작동하는지 테스트 이메일을 보낼 수 있습니다! [대화에서 테스트 이메일 보내기](how-to-send-a-test-email-in-the-conversation.md) 방법을 확인해보세요.

---

*원문 최종 수정: 2024년 9월 10일 오전 11시 13분*  
*Hyperclass 사용 가이드 — hyperclass.ai*