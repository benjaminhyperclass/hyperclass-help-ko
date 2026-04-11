---

번역일: 2026-04-07
카테고리: 09-이메일 > LC Email 전용 도메인 및 IP
---

# Google 전용 발송 도메인 설정 (LC 이메일)

이 가이드에서 다루는 내용

- [LC 이메일 전용 도메인 설정 단계별 가이드 - Google 도메인](#lc-이메일-전용-도메인-설정-단계별-가이드-google-도메인)
- [첫 번째 TXT 레코드 추가하기](#첫-번째-txt-레코드-추가하기)
- [두 번째 TXT 레코드 추가하기](#두-번째-txt-레코드-추가하기)
- [MX 레코드 추가하기](#mx-레코드-추가하기)
- [CNAME 레코드 추가하기](#cname-레코드-추가하기)

## LC 이메일 전용 도메인 설정 단계별 가이드 - Google 도메인

1. 하위 계정에 로그인한 후 > Settings(설정) > Email Services(이메일 서비스) > Dedicated Domain(전용 도메인) > + Add Domain(도메인 추가)를 클릭하세요.

[에이전시를 LC - 이메일로 마이그레이션하는 방법](how-to-migrate-my-agency-over-to-lc-email.md)을 확인해보세요.

![Google 도메인 설정 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292765242/original/jQLugI8wtvQRfs38XJDujiQd2QnIgjQqSA.gif?1681496688)

2. 도메인이 companyname.com이라면, LC-이메일에서 메인 도메인 또는 서브도메인을 설정할 수 있습니다.

[Mailgun에서 LeadConnector로 발송 도메인을 이동하는 방법](how-to-set-up-a-dedicated-sending-domain-lc-email-.md)을 확인해보세요.

**메인 도메인:**
- 메인 도메인을 추가하는 경우, [해당 도메인은 G Suite나 다른 이메일 제공업체와 함께 사용하면 안 됩니다](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)

**서브도메인:**
- LC-이메일에서 전용 서브도메인을 설정하려면 '임의의이름.companyname.com' 형식으로 입력할 수 있습니다.
- 예시: replies.companyname.com, support.companyname.com

3. Add & Verify(추가 및 확인)를 클릭하세요.

![도메인 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292766472/original/5TxDqQG542C3YtKLt6stGIAfwcbDmmcesg.png?1681497266)

다음 화면에서 도메인에 DNS 레코드를 추가하라는 안내가 나타납니다. 다음 단계를 위해 이 화면을 열어두세요.

![DNS 레코드 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293298198/original/xGMUZ9x0JoahqbofrVsYVWEjEF9LDDvsMQ.png?1681838621)

4. 도메인을 구입한 곳의 DNS 레코드에 로그인하여 5개의 DNS 레코드를 추가하세요.

## 첫 번째 TXT 레코드 추가하기

- [domains.google.com](https://domains.google.com/)에 로그인하세요
- 설정하려는 도메인을 클릭하세요
- 왼쪽 패널에서 DNS를 클릭하세요. 5개의 DNS 레코드를 추가해야 합니다

![Google 도메인 DNS 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48299273463/original/nvtEdnUCOa_aEuQG29TmvxEc8zT-TEDQbw.png?1685008255)

**Host name(호스트명): 루트 도메인을 포함하지 마세요**

- 설정하려는 서브도메인에 따라, lc.companyname.com을 설정한다면 호스트명은 lc입니다
- **replies**.companyname.com - 호스트명은 replies입니다
- companyname.com과 같은 메인 도메인을 설정한다면 호스트명은 @입니다

![호스트명 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48299273966/original/QyOvl4oeTZwm5vxk_Qr4E9axVI_3VmGQbQ.png?1685008372)

**Type(유형):** 유형 메뉴에서 TXT를 선택하세요.

**Data(데이터):** 모든 사용자 공통
- 다음 레코드를 붙여넣으세요: `v=spf1 include:mailgun.org ~all`

![TXT 레코드 데이터](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292767368/original/n_1Mu3Av0f2EYEvZG9iBeM-knKybDa2RPg.png?1681497695)

아직 저장하지 마세요. 4개의 레코드를 더 추가해야 합니다.

첫 번째 레코드 입력이 완료되면 Create new record(새 레코드 만들기)를 클릭하세요.

## 두 번째 TXT 레코드 추가하기

**Type(유형):** 드롭다운에서 TXT를 선택하세요.

![두 번째 TXT 레코드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48299274267/original/tgkjiuJTNQWqB0YufpMnGh7eGG8ju2BhYQ.png?1685008457)

**Host name(호스트명):**

여기가 조금 까다로운 부분입니다. 핵심은 서브도메인 부분까지만 복사하고 메인 도메인은 복사하지 않는 것입니다.

![호스트명 복사 방법](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48299274349/original/QZx8yVWaSu8EU88v7eBp1CPDH4P80GKGXg.png?1685008484)

**모든 사용자의 두 번째 TXT 레코드 호스트명과 값은 다릅니다**

예시: 강조 표시된 부분만 복사하세요

**예시 1 - 서브도메인 사용:**
호스트명으로 `mx._domainkey.helpdesk`를 복사하세요

![서브도메인 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292768867/original/Oy2wnQ4XgDD5YzExKorYuiEBhl-wH7krkg.png?1681498513)

**예시 2 - 메인 도메인 사용:**
호스트명으로 `mailo._domainkey`를 복사하세요

![메인 도메인 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292768954/original/rXlYB3cbDo6Ix-Oq_XBgdnsiwBHDHuTUig.png?1681498537)

**Data(데이터):**
아래 스크린샷에서 강조 표시된 두 번째 TXT 레코드를 여기에 복사하세요.

- Value(값): 복사한 두 번째 TXT 레코드를 여기에 붙여넣으세요

![두 번째 TXT 값](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292768735/original/cUIeRsQGsIF81ZCW8a-cj-v7iGlndoLiKw.png?1681498466)

## MX 레코드 추가하기

Create new record(새 레코드 만들기)를 클릭하세요.

설정하려는 서브도메인에 따라:
- lc.companyname.com을 설정한다면 호스트명은 lc입니다
- **replies**.companyname.com을 설정한다면 호스트명은 replies입니다
- companyname.com과 같은 메인 도메인을 설정한다면 호스트명은 @입니다

![MX 레코드 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155000003027/original/5aF_dZ_ziXuTz59XlBASIHTyI7uQ7bOo_g.png?1685262791)

루트 도메인(user@example.com)에서 이메일을 주고받기 위해 Google Workspace 계정을 사용하는 경우, LC 이메일 전용 도메인에는 반드시 서브도메인을 사용하세요. 관련 문서를 확인하세요: [Mailgun과 Google Apps(또는 다른 이메일 서버)에 동일한 도메인명을 사용할 수 있나요?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)

**Type(유형):** 드롭다운에서 MX를 선택하세요.

**Data(데이터):** 다음 데이터를 붙여넣으세요:
- `10 mxa.mailgun.org`를 복사해서 붙여넣으세요
- +Add more to this record(이 레코드에 더 추가)를 클릭하세요
- `10 mxb.mailgun.org`를 복사해서 붙여넣으세요

![MX 레코드 데이터 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155000003013/original/7ZgVLhVdhJ7tXtoJ_8k_TFkrR5RA2pUb4g.png?1685262753)

![MX 레코드 데이터 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155000003080/original/w3lgIZMfVu8zipEIyYvMh72IQgpl6HADcA.png?1685262904)

## CNAME 레코드 추가하기

Create new record(새 레코드 만들기)를 클릭하세요.

설정하려는 서브도메인에 따라:
- lc.companyname.com을 설정한다면 호스트명은 email.lc입니다
- replies.companyname.com을 설정한다면 호스트명은 email.replies입니다
- companyname.com과 같은 메인 도메인을 설정한다면 호스트명은 email입니다

**Type(유형):** 드롭다운에서 CNAME을 선택하세요.

**Data(데이터):** `mailgun.org`를 복사해서 붙여넣으세요.

![CNAME 레코드 설정 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155000003126/original/UjjcYWc_abbbgStIJ5Q7rOwoXfIFdaAT4g.png?1685263000)

![CNAME 레코드 설정 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155000003129/original/4CjEilgb6jZy-PnRXT7Eyoxf94_AeHGPcw.png?1685263026)

5개의 DNS 레코드를 모두 추가했다면 "Save(저장)"을 클릭하세요.

다음으로 Email Services(이메일 서비스) 탭으로 돌아가서 "Verify Domain(도메인 확인)"을 클릭하세요.

![도메인 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292771391/original/DSHng9iQ27K8gMmkLYLkL7mpGKnMfyFSkA.png?1681499820)

일부 레코드에 녹색 체크 표시가 아직 나타나지 않으면 "Verify Domain(도메인 확인)" 버튼을 다시 클릭하세요.

모든 DNS 레코드를 추가하고 확인했다면, [전용 발송 도메인용 SSL 인증서(LC - 이메일)](ssl-certificates-for-dedicated-lc-email-domains.md)가 모두 설정되었는지 확인하세요.

마지막으로, 이메일이 제대로 발송되는지 확인하기 위해 테스트 이메일을 보내보세요. [대화에서 테스트 이메일을 보내는 방법](how-to-send-a-test-email-in-the-conversation.md)을 확인하세요.

---
*원문 최종 수정: 2024년 9월 10일 오전 11:05*
*Hyperclass 사용 가이드 — hyperclass.ai*