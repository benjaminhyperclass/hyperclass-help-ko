---

번역일: 2026-04-07
카테고리: 09-이메일 > LC Email Dedicated Domain and IP
---

# GoDaddy 전용 발신 도메인 설정 (LC Email)

이 가이드에서 다루는 내용:

- [단계별 LC Email 전용 도메인 설정 - GoDaddy](#단계별-lc-email-전용-도메인-설정-godaddy)
- [첫 번째 TXT 레코드 추가하기](#첫-번째-txt-레코드-추가하기)
- [두 번째 TXT 레코드 추가하기](#두-번째-txt-레코드-추가하기)
- [첫 번째 MX 레코드 추가하기](#첫-번째-mx-레코드-추가하기)
- [두 번째 MX 레코드 추가하기](#두-번째-mx-레코드-추가하기)
- [CNAME 레코드 추가하기](#cname-레코드-추가하기)

## **단계별 LC Email 전용 도메인 설정 - GoDaddy**

1. 하위 계정(Sub-account)에 접속 후 Settings(설정) → Email Services(이메일 서비스) → Dedicated Domain(전용 도메인) → + Add Domain(도메인 추가)을 클릭하세요.

[LC Email로 에이전시 이전하는 방법](../how-to-migrate-my-agency-over-to-lc-email.md) 도움말도 참고하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292765242/original/jQLugI8wtvQRfs38XJDujiQd2QnIgjQqSA.gif?1681496688)

2. 도메인이 companyname.com이라면, 메인 도메인 또는 서브 도메인 중 하나를 설정할 수 있습니다.

[Mailgun에서 LeadConnector로 발신 도메인 이전하기](../기타/how-to-set-up-a-dedicated-sending-domain-lc-email-.md) 가이드도 확인하세요.

**메인 도메인:**
- 메인 도메인을 추가하는 경우, [Google Workspace나 다른 이메일 서비스와 함께 사용하면 안 됩니다](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)

**서브도메인:**
- 서브도메인을 설정하려면 ANYTHING_HERE.companyname.com 형식으로 입력하세요
- 예시: replies.companyname.com, support.companyname.com

3. Add & Verify(추가 및 확인)를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292766472/original/5TxDqQG542C3YtKLt6stGIAfwcbDmmcesg.png?1681497266)

다음 화면에서 도메인에 DNS 레코드를 추가하라는 안내가 나타납니다. 이 화면을 열어둔 채로 다음 단계를 진행하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293298198/original/xGMUZ9x0JoahqbofrVsYVWEjEF9LDDvsMQ.png?1681838621)

4. 이제 도메인을 구입한 곳의 DNS 레코드에 로그인하여 5개의 DNS 레코드를 추가하세요.

## 첫 번째 TXT 레코드 추가하기

[GoDaddy Domain Portfolio](https://dcc.godaddy.com/control/portfolio)에 로그인하여 [첫 번째 TXT 레코드](https://ca.godaddy.com/help/add-a-txt-record-19232)를 추가하세요.

도메인 옆에 있는 세 점을 클릭하여 Edit Options(편집 옵션)을 선택합니다.

Edit DNS(DNS 편집)를 선택하세요. Edit DNS 옵션을 보려면 아래로 스크롤해야 할 수도 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383735/original/cgJYei63pjBqxqUREcrgnMBHMYjimo-FBA.png?1677636137)

Add(추가)를 클릭하여 새 레코드를 추가하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383808/original/H6np93jJkfJVHPLdTaLTLmRgo2mB_c6JRA.png?1677636223)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284384102/original/N9CKo-PVMexPIY_hCkU3qz4FgWu5LCmiKw.png?1677636518)

**A. Type(유형):** 메뉴에서 TXT를 선택하세요.

**B. Host(호스트):** 루트 도메인은 포함하지 마세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292767095/original/U0Uh3wPJ901NXe3E0tAj8DzwIys4kzuXFA.png?1681497560)

- 설정하려는 서브도메인에 따라:
  - lc.companyname.com을 설정하는 경우 - 호스트명은 **lc**가 됩니다
  - replies.companyname.com을 설정하는 경우 - 호스트명은 replies가 됩니다
  - companyname.com과 같은 메인 도메인을 설정하는 경우 - 호스트명은 @가 됩니다

**C. TXT Value(TXT 값):** 모든 사용자 공통

다음 레코드를 붙여넣으세요: v=spf1 include:mailgun.org ~all

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292767368/original/n_1Mu3Av0f2EYEvZG9iBeM-knKybDa2RPg.png?1681497695)

**D.** Save(저장)를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292760158/original/whQOMoD2hGeHEbJgNmnIm1fdwCQhF1Mz9g.png?1681494360)

## 두 번째 TXT 레코드 추가하기

Add(추가)를 클릭하여 새 레코드를 추가하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383808/original/H6np93jJkfJVHPLdTaLTLmRgo2mB_c6JRA.png?1677636223)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284384815/original/FlVncn3L0vrYLOa9P1vI4X9Pt16_Q-FUOg.png?1677637017)

**A. Type(유형):**
메뉴에서 TXT를 선택하세요.

**B. Host(호스트):**
약간 까다롭지만, 핵심은 처음부터 서브도메인 부분까지 복사하되 루트 도메인은 포함하지 않는 것입니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292768165/original/xN_6s9kcDwkztqKLFUlRtJJJlE7M_GD54w.png?1681498178)

**모든 사용자의 두 번째 TXT 레코드 호스트명과 값은 서로 다릅니다.**

예시: 강조 표시된 부분만 복사하세요

**예시 1 (서브도메인 사용):**
호스트명으로 mx._domainkey.helpdesk를 복사하세요

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292768867/original/Oy2wnQ4XgDD5YzExKorYuiEBhl-wH7krkg.png?1681498513)

**예시 2 (메인 도메인 사용):**
호스트명으로 mailo._domainkey를 복사하세요

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292768954/original/rXlYB3cbDo6Ix-Oq_XBgdnsiwBHDHuTUig.png?1681498537)

**C. TXT Value(TXT 값):**
아래 스크린샷에서 강조 표시된 두 번째 TXT 레코드를 복사하세요

값: 복사한 매우 긴 두 번째 TXT 레코드를 여기에 붙여넣으세요

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292768735/original/cUIeRsQGsIF81ZCW8a-cj-v7iGlndoLiKw.png?1681498466)

**D.** Save(저장)를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292760542/original/dHr8OmpttMWN0VMOkXNfAi5G8Ou_hQUiVQ.png?1681494507)

## 첫 번째 MX 레코드 추가하기

Add(추가)를 클릭하여 새 레코드를 추가하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383808/original/H6np93jJkfJVHPLdTaLTLmRgo2mB_c6JRA.png?1677636223)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385352/original/nEr12soR47bfSHjwNBS075J4Dr_Fd3jqUQ.png?1677637478)

메인 도메인의 수신 이메일을 처리하기 위해 Google Workspace 계정을 사용하는 경우, 반드시 서브도메인을 사용하세요. [Mailgun과 Google Apps(또는 다른 이메일 서버)에 같은 도메인 이름을 사용할 수 있나요?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-) 가이드를 확인하세요.

**A. Type(유형):** 메뉴에서 MX를 선택하세요.

**B. Host(호스트):** 사용자마다 다름

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292769400/original/UKCDaverUyyLQpklJb1Jxf15cmXUamb0VQ.png?1681498752)

설정하려는 서브도메인에 따라:
- lc.companyname.com을 설정하는 경우 - 호스트명은 lc가 됩니다
- replies.companyname.com을 설정하는 경우 - 호스트명은 replies가 됩니다
- companyname.com과 같은 메인 도메인을 설정하는 경우 - 호스트명은 @가 됩니다

**C. Points to(가리키는 곳):** 모든 사용자 공통

다음 데이터를 붙여넣으세요: mxa.mailgun.org

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292769476/original/xvdURibcJ1cBG-y1bc5ngzqpnSNCdRALmA.png?1681498784)

**D. Priority(우선순위):** 설정하려는 도메인에 관계없이 모든 사용자 공통으로 10입니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292769807/original/1wmkWSsWNVmgj5fdec3hG0a9KbuWBxPhnA.png?1681498971)

**E.** Save(저장)를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292761314/original/r1sCz03HEK4u2NnzjZxK6TRXfTixx9qJpg.png?1681494889)

## 두 번째 MX 레코드 추가하기

Add(추가)를 클릭하여 새 레코드를 추가하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383808/original/H6np93jJkfJVHPLdTaLTLmRgo2mB_c6JRA.png?1677636223)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385634/original/wYOidp2P0QPZbDYtP60qHBim2dahkciEMw.png?1677637830)

**A. Type(유형):** 메뉴에서 MX를 선택하세요.

**B. Host(호스트):** 사용자마다 다름

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292770778/original/1YS3yCM8yCVGkdwvDlET1DiZvGimSLDnCA.png?1681499489)

설정하려는 서브도메인에 따라:
- lc.companyname.com을 설정하는 경우 - 호스트명은 lc가 됩니다
- replies.companyname.com을 설정하는 경우 - 호스트명은 replies가 됩니다
- companyname.com과 같은 메인 도메인을 설정하는 경우 - 호스트명은 @가 됩니다

**C. Points to(가리키는 곳):** 모든 사용자 공통

다음 데이터를 붙여넣으세요: mxb.mailgun.org

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292770829/original/lo34kUcHgQ_jNcW7DaT0x3DUPiEu1AubLw.png?1681499515)

**D. Priority(우선순위):** 설정하려는 도메인에 관계없이 모든 사용자 공통으로 10입니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292770920/original/Fw8uyagc8TOy9xxMDsHe3atzfkyEu3QnKw.png?1681499551)

**E.** Save(저장)를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292770952/original/JOROtyvxFT7kuhgJS6UKxsSCMfE6_5IS8A.png?1681499569)

## CNAME 레코드 추가하기

Add(추가)를 클릭하여 새 레코드를 추가하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383808/original/H6np93jJkfJVHPLdTaLTLmRgo2mB_c6JRA.png?1677636223)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385821/original/Z_H7aEV9Fj-ulIPJTmhnmpgRUG-CWVntNA.png?1677638013)

**A. Type(유형):** 메뉴에서 CNAME을 선택하세요.

**B. Host(호스트):** 사용자마다 다름

Hyperclass로 돌아가서 호스트명을 복사하세요. 약간 까다롭지만, 핵심은 처음부터 서브도메인 부분까지 복사하되 메인 도메인은 복사하지 않는 것입니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292771034/original/ey4vFuccg-PcVOVNEqKhNZR24VOtPxjuCA.png?1681499620)

설정하려는 서브도메인에 따라:
- lc.companyname.com을 설정하는 경우 - 호스트명은 **email.**lc가 됩니다
- replies.companyname.com을 설정하는 경우 - 호스트명은 **email.**replies가 됩니다
- companyname.com과 같은 메인 도메인을 설정하는 경우 - 호스트명은 email이 됩니다

**C. Points to(가리키는 곳):** 모든 사용자 공통

다음 데이터를 붙여넣으세요: mailgun.org

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292771083/original/z9S5z7FviH8eq6xc6sXjhiBRLNZCCKQ5LA.png?1681499652)

**D.** Save(저장)를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292761511/original/Q-pg6CdROQ4wXlfIoOIOkvDgY1yJdVN1Ug.png?1681494965)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284386112/original/kW6t3s2sXMcjCylHMSgGSwJy8HDwA4momQ.png?1677638281)

5개 레코드를 모두 추가했다면 Verify Domain(도메인 확인)을 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292771391/original/DSHng9iQ27K8gMmkLYLkL7mpGKnMfyFSkA.png?1681499820)

일부 레코드에 녹색 체크마크가 표시되지 않으면 Verify Domain(도메인 확인) 버튼을 다시 클릭하세요.

모든 DNS 레코드를 추가하고 확인한 후에는 [전용 발신 도메인 SSL 인증서(LC - Email)](../LC-이메일/ssl-certificates-for-dedicated-lc-email-domains.md)가 제대로 설정되었는지 확인하세요.

그런 다음 테스트 이메일을 보내서 모든 것이 제대로 작동하는지 확인할 수 있습니다! [대화에서 테스트 이메일 보내는 방법](../트러블슈팅/how-to-send-a-test-email-in-the-conversation.md)을 확인하세요.

---
*원문 최종 수정: Tue, 10 Sep, 2024 at 11:05 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*