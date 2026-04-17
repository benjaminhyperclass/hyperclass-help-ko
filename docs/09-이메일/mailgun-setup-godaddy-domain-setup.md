---

번역일: 2026-04-06
카테고리: 09-이메일
---

# Mailgun 설정 - GoDaddy 도메인 설정

## 단계별 Mailgun 설정 - GoDaddy 도메인 설정

1. [Mailgun.com](https://signup.mailgun.com/new/signup)에 가입하세요.

2. 이메일 주소 확인을 위해 이메일 인박스를 확인하세요.

[
![이메일 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378416/original/VewuZVN3oFOFIvBdf4XqMAOX4vtVGv_jNg.png?1677630998)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535009/original/7tQRdPUgguqaYEpnIV2uS3kIQpMd7jZBZw.png?1659724083)

[
![이메일 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378421/original/GU6IL6Y3N81qm6KMH9aTz7l5FV5IEv7ySA.png?1677630999)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535045/original/kRGmwZtbq3-zkULjp6-Pg0J-7sTNMNHymQ.png?1659724108)

3. Mailgun에 로그인한 후, Sending > Add New Domain을 클릭하세요.

[
![Mailgun 도메인 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378418/original/kxsnymCeuFAsBWkXaOes6QaaWED2_bfASA.png?1677630999)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243535197/original/doBfy9jAqoxcOqD5LiuyQO9rnyVWfkkAeg.png?1659724186)

4. 도메인이 companyname.com인 경우, 메인 도메인 또는 서브도메인을 Mailgun에 설정할 수 있습니다.

**A. 메인 도메인:**
- 메인 도메인을 추가하는 경우, [Gsuite나 다른 이메일 제공업체와 함께 사용할 수 없습니다](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)

**서브도메인:**
- Mailgun에 서브도메인을 설정하려면, ANYTHING_HERE.companyname.com 형식으로 입력하세요.
- 예시: mg.companyname.com, replies.companyname.com, support.companyname.com

**B.** 도메인 또는 서브도메인을 EU가 아닌 US 지역에 설정하세요. EU 지역이 아닌 US 지역을 선택해야 합니다.

**C.** Add domain을 클릭하세요.

[
![도메인 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382652/original/woVjMqNw3YY_Zjs20LoBHUb4KrThVvj_Rw.png?1677635102)
](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243536037/original/B5DZocdO2h64MlEDtfuFjER-U_0AO_NOEg.png?1659724559)

다음 화면에서 도메인에 DNS 레코드를 추가하라는 안내가 나타납니다. 다음 단계를 위해 이 화면을 열어두세요.

![DNS 레코드 화면](https://help.mailgun.com/hc/article_attachments/8759612958491/Screen_Shot_2022-09-11_at_6.39.22_PM.png)

5. 도메인을 구매한 곳의 DNS 레코드에 로그인하여 5개의 DNS 레코드를 추가하세요.

## 첫 번째 TXT 레코드 추가

[첫 번째 TXT 레코드를 추가](https://ca.godaddy.com/help/add-a-txt-record-19232)하려면, [GoDaddy Domain Portfolio](https://dcc.godaddy.com/control/portfolio)에 로그인하세요.

도메인 옆에 있는 점 세 개를 클릭하여 Domain Edit Options을 선택하세요.

Edit DNS를 선택하세요. Edit DNS 옵션을 보려면 아래로 스크롤해야 할 수 있습니다.

![GoDaddy DNS 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383735/original/cgJYei63pjBqxqUREcrgnMBHMYjimo-FBA.png?1677636137)

새 레코드를 추가하려면 Add를 클릭하세요.

![레코드 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383808/original/H6np93jJkfJVHPLdTaLTLmRgo2mB_c6JRA.png?1677636223)

![TXT 레코드 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284384102/original/N9CKo-PVMexPIY_hCkU3qz4FgWu5LCmiKw.png?1677636518)

**A. Type:** 유형 메뉴 옵션에서 TXT를 선택하세요.

**B. Host:** 루트 도메인을 포함하지 마세요.

![호스트 설정 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292759996/original/0Cj6mdSJlEYwYG4Qt4KqNjenCcUdx500Tw.png?1681494292)

- 설정하려는 서브도메인에 따라:
  - mg.companyname.com을 설정하는 경우 호스트 이름은 mg
  - replies.companyname.com을 설정하는 경우 호스트 이름은 replies
  - companyname.com과 같은 메인 도메인을 설정하는 경우 호스트 이름은 @

**C. TXT Value:** 모든 사용자에게 동일
- 다음 레코드를 붙여넣으세요: v=spf1 include:mailgun.org ~all

![TXT 값 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292760093/original/5Gl9rXwkPu648V7b7A73EVcYsiwQjSX3fQ.png?1681494342)

**D.** Save를 클릭하세요.

![저장 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292760158/original/whQOMoD2hGeHEbJgNmnIm1fdwCQhF1Mz9g.png?1681494360)

## 두 번째 TXT 레코드 추가

새 레코드를 추가하려면 Add를 클릭하세요.

![레코드 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383808/original/H6np93jJkfJVHPLdTaLTLmRgo2mB_c6JRA.png?1677636223)

![두 번째 TXT 레코드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284384815/original/FlVncn3L0vrYLOa9P1vI4X9Pt16_Q-FUOg.png?1677637017)

**A. Type:** 유형 메뉴 옵션에서 TXT를 선택하세요.

**B. Host:** 조금 복잡하지만 핵심은 처음부터 서브도메인 부분까지만 복사하는 것입니다. 루트 도메인은 포함하지 마세요.

![호스트 복사 방법](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292760457/original/uKwd7XSYgsN0abFfq-uLghjMc4gYBKFShw.png?1681494446)

**모든 사용자의 두 번째 TXT 레코드 호스트 이름과 값은 서로 다릅니다.**

예시: 강조 표시된 부분만 복사하세요.

**서브도메인 사용 예시 1:**
호스트 이름으로 mx._domainkey.helpdesk를 복사하세요.

![서브도메인 예시 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380215/original/t6MGY8Bw9AK1Vv01kUxtJAkNwp_4UfYjHw.png?1677632945)

**메인 도메인 사용 예시 2:**
호스트 이름으로 mailo._domainkey를 복사하세요.

![메인 도메인 예시 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380223/original/JSERXQQhYNvzVp7YoXhIji_yeomZNLXUKA.png?1677632951)

**C. TXT Value:** Mailgun으로 돌아가서 아래 스크린샷에서 강조 표시된 두 번째 TXT 레코드를 복사하세요.
- Value: 복사한 두 번째 긴 TXT 레코드를 여기에 붙여넣으세요.

![TXT 값 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385043/original/UvAhE3LGN5sYkTb4kyEsXNM0GE0Uc8Eq1Q.png?1677637220)

**D.** Save를 클릭하세요.

![저장 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292760542/original/dHr8OmpttMWN0VMOkXNfAi5G8Ou_hQUiVQ.png?1681494507)

## 첫 번째 MX 레코드 추가

![MX 레코드 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385538/original/qHcrrZPnp3g0LC4c75qM1hg_opwYUXgE0w.png?1677637720)

새 레코드를 추가하려면 Add를 클릭하세요.

![레코드 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383808/original/H6np93jJkfJVHPLdTaLTLmRgo2mB_c6JRA.png?1677636223)

![첫 번째 MX 레코드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385352/original/nEr12soR47bfSHjwNBS075J4Dr_Fd3jqUQ.png?1677637478)

메인 도메인의 수신 이메일을 받기 위해 Gsuite 계정이 있다면, Mailgun에는 서브도메인을 사용해야 합니다. [Mailgun과 Google Apps(또는 다른 이메일 서버)에 같은 도메인 이름을 사용할 수 있나요?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-) 문서를 확인하세요.

**A. Type:** 유형 메뉴 옵션에서 MX를 선택하세요.

**B. Host:** 사용자마다 다름

![MX 호스트 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292761281/original/ilff0N0hrTpB9rOZOLtKWFcpd_pFm1FAAg.png?1681494876)

설정하려는 서브도메인에 따라:
- mg.companyname.com을 설정하는 경우 호스트 이름은 mg
- replies.companyname.com을 설정하는 경우 호스트 이름은 replies
- companyname.com과 같은 메인 도메인을 설정하는 경우 호스트 이름은 @

**C. Points to:** 모든 사용자에게 동일
- 다음 데이터를 붙여넣으세요: mxa.mailgun.org

**D. Priority:** 어떤 도메인을 설정하든 모든 사용자에게 동일하게 10

**E.** Save를 클릭하세요.

![저장 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292761314/original/r1sCz03HEK4u2NnzjZxK6TRXfTixx9qJpg.png?1681494889)

## 두 번째 MX 레코드 추가

새 레코드를 추가하려면 Add를 클릭하세요.

![레코드 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383808/original/H6np93jJkfJVHPLdTaLTLmRgo2mB_c6JRA.png?1677636223)

![두 번째 MX 레코드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385634/original/wYOidp2P0QPZbDYtP60qHBim2dahkciEMw.png?1677637830)

**A. Type:** 유형 메뉴 옵션에서 MX를 선택하세요.

**B. Host:** 사용자마다 다름

![두 번째 MX 호스트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292761375/original/qVuzSSON9aWqKQCpGlKX89woV1txgzea3g.png?1681494908)

설정하려는 서브도메인에 따라:
- mg.companyname.com을 설정하는 경우 호스트 이름은 mg
- replies.companyname.com을 설정하는 경우 호스트 이름은 replies
- companyname.com과 같은 메인 도메인을 설정하는 경우 호스트 이름은 @

**C. Points to:** 모든 사용자에게 동일
- 다음 데이터를 붙여넣으세요: mxb.mailgun.org

**D. Priority:** 어떤 도메인을 설정하든 모든 사용자에게 동일하게 10

**E.** Save를 클릭하세요.

## CNAME 레코드 추가

![CNAME 레코드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385721/original/3LyKoigujZ-vEjMFQDflCfmRRfAJra3rYA.png?1677637907)

새 레코드를 추가하려면 Add를 클릭하세요.

![레코드 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383808/original/H6np93jJkfJVHPLdTaLTLmRgo2mB_c6JRA.png?1677636223)

![CNAME 레코드 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385821/original/Z_H7aEV9Fj-ulIPJTmhnmpgRUG-CWVntNA.png?1677638013)

**A. Type:** 유형 메뉴 옵션에서 CNAME을 선택하세요.

**B. Host:** 사용자마다 다름

Mailgun으로 돌아가서 호스트 이름을 복사하세요. 조금 복잡하지만 핵심은 처음부터 서브도메인 부분까지만 복사하는 것입니다. 메인 도메인은 복사하지 마세요.

![CNAME 호스트 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292761488/original/yTenM0KsBABRkiuopqOQIzy7E_TjKkeVDw.png?1681494956)

설정하려는 서브도메인에 따라:
- mg.companyname.com을 설정하는 경우 호스트 이름은 email.mg
- replies.companyname.com을 설정하는 경우 호스트 이름은 email.replies
- companyname.com과 같은 메인 도메인을 설정하는 경우 호스트 이름은 email

**C. Points to:** 모든 사용자에게 동일
- 다음 데이터를 붙여넣으세요: mailgun.org

**D.** Save를 클릭하세요.

![저장 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292761511/original/Q-pg6CdROQ4wXlfIoOIOkvDgY1yJdVN1Ug.png?1681494965)

![완성된 레코드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284386112/original/kW6t3s2sXMcjCylHMSgGSwJy8HDwA4momQ.png?1677638281)

이제 5개의 레코드를 모두 추가했으므로, Mailgun으로 돌아가서 Verify DNS Settings을 클릭하세요.

일부 레코드가 여전히 녹색 체크 표시를 보여주지 않는다면, Verify DNS Settings 버튼을 다시 클릭하세요.

![DNS 설정 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382101/original/PQecmA9d0ihGiF3VchOhZL1VKMrOZmUvDQ.png?1677634628)

모든 DNS 레코드를 추가하고 확인이 완료되면, [Mailgun API 키를 어디서 찾아서 Hyperclass에 입력하는지](메일건/mailgun-private-api-key-setup.md) 확인할 수 있습니다.

그 다음, 모든 것이 작동하는지 테스트 이메일을 보내볼 수 있습니다! [대화에서 테스트 이메일을 보내는 방법](트러블슈팅/how-to-send-a-test-email-in-the-conversation.md)을 배우려면 여기를 클릭하세요.

---
*원문 최종 수정: 2023년 4월 14일*
*Hyperclass 사용 가이드 — hyperclass.ai*