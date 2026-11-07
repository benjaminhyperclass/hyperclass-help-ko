---
원문: /support/solutions/articles/48000981678-mailgun-setup-godaddy-domain-setup
번역일: 2026-11-06
카테고리: 09-이메일
---

# Mailgun 설정 — GoDaddy 도메인 설정

GoDaddy에서 등록한 도메인을 Mailgun에 연결하는 방법을 안내해요. Mailgun에 가입하고 도메인을 추가한 뒤, Mailgun이 요구하는 DNS 레코드 5개(TXT 2개, MX 2개, CNAME 1개)를 GoDaddy의 DNS 편집기에서 설정해요. Mailgun 레코드를 추가하면서 기존 Google Workspace/Gmail 메일 수신에 문제가 생기지 않게 하는 방법도 함께 다뤄요.

{% hint style="info" %}
이 문서의 Mailgun·GoDaddy 화면 이름은 각 서비스 화면에 표시되는 영어 그대로 적었어요.
{% endhint %}

## Mailgun 가입하고 도메인 추가하기

1. [Mailgun.com](https://signup.mailgun.com/new/signup)에서 가입한 뒤, 받은 편지함에서 이메일 주소를 인증하세요.

   ![Mailgun 가입 완료 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378416/original/VewuZVN3oFOFIvBdf4XqMAOX4vtVGv_jNg.png?1677630998)
   ![Mailgun 이메일 인증 완료 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378421/original/GU6IL6Y3N81qm6KMH9aTz7l5FV5IEv7ySA.png?1677630999)

2. Mailgun에 로그인한 뒤 **Sending > Add New Domain**(새 도메인 추가)을 클릭하세요.

   ![Mailgun의 Sending 메뉴에서 Add New Domain 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378418/original/kxsnymCeuFAsBWkXaOes6QaaWED2_bfASA.png?1677630999)

3. 도메인이 `companyname.com`이라면, Mailgun에 메인 도메인을 설정할지 서브 도메인을 설정할지 정하세요.

   - 메인 도메인: 메인 도메인을 쓰려면 Google Workspace 등 다른 이메일 서비스와 같이 쓰지 않아야 해요. 다른 이메일 서버와 도메인을 함께 쓰는 경우는 [Mailgun 안내](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)를 참고하세요.
   - 서브 도메인: `원하는이름.companyname.com` 형태로 입력해요. 예: `mg.companyname.com`, `replies.companyname.com`, `support.companyname.com`

   {% hint style="warning" %}
   도메인이나 서브 도메인은 EU가 아닌 US 리전으로 설정하세요.
   {% endhint %}

4. **Add domain**(도메인 추가)을 클릭하세요.

   ![Mailgun에서 도메인 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382652/original/woVjMqNw3YY_Zjs20LoBHUb4KrThVvj_Rw.png?1677635102)

{% hint style="info" %}
다음 화면에서 도메인에 추가할 DNS 레코드를 안내해요. 다음 단계에서 이 화면이 필요하니 닫지 말고 열어 두세요.
{% endhint %}

![다음 단계를 위해 열어 둘 Mailgun DNS 레코드 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033639864/original/enFXAfFTmzAed4_oLbMST-Xu1YBUby2MpQ.png?1727378325)

## GoDaddy에서 DNS 레코드 화면 열기

이제 GoDaddy에 로그인해서 Mailgun이 요구하는 DNS 레코드 5개를 추가해요.

1. [GoDaddy Domain Portfolio](https://dcc.godaddy.com/control/portfolio)에 로그인하세요.
2. 도메인 옆에 있는 점 3개(도메인 편집 옵션)를 클릭하고 **Edit DNS**(DNS 편집)를 선택하세요. 보이지 않으면 아래로 스크롤해 보세요. 더 자세한 내용은 GoDaddy의 [TXT 레코드 추가 안내](https://ca.godaddy.com/help/add-a-txt-record-19232)를 참고하세요.

   ![GoDaddy Domain Portfolio의 Edit DNS 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383735/original/cgJYei63pjBqxqUREcrgnMBHMYjimo-FBA.png?1677636137)

3. **Add**를 클릭해 새 레코드를 추가하세요. 아래 레코드 5개를 추가할 때마다 이 과정을 반복해요.

   ![GoDaddy에서 새 DNS 레코드를 만드는 Add 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383808/original/H6np93jJkfJVHPLdTaLTLmRgo2mB_c6JRA.png?1677636223)

## 첫 번째 TXT 레코드(SPF) 추가하기

![GoDaddy DNS 편집기의 레코드 추가 폼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284384102/original/N9CKo-PVMexPIY_hCkU3qz4FgWu5LCmiKw.png?1677636518)

1. **Type**(유형) 메뉴에서 **TXT**를 선택하세요.
2. **Host**(호스트)는 사람마다 달라요. 루트 도메인은 넣지 마세요.

   ![GoDaddy Host 필드 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292759996/original/0Cj6mdSJlEYwYG4Qt4KqNjenCcUdx500Tw.png?1681494292)
`mg.companyname.com` → 호스트 이름은 `mg``replies.companyname.com` → 호스트 이름은 `replies`
   - 메인 도메인(`companyname.com`) → 호스트 이름은 `@`

3. **TXT Value**(TXT 값)는 모든 사람이 같아요. `v=spf1 include:mailgun.org ~all`을 붙여 넣으세요.

   ![SPF 레코드를 입력한 TXT Value 필드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292760093/original/5Gl9rXwkPu648V7b7A73EVcYsiwQjSX3fQ.png?1681494342)

4. **Save**를 클릭하세요.

   ![GoDaddy에 추가된 첫 번째 TXT 레코드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292760158/original/whQOMoD2hGeHEbJgNmnIm1fdwCQhF1Mz9g.png?1681494360)

## 두 번째 TXT 레코드(DKIM) 추가하기

**Add**를 클릭해 새 레코드를 추가하세요.

![GoDaddy의 두 번째 TXT 레코드 추가 폼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284384815/original/FlVncn3L0vrYLOa9P1vI4X9Pt16_Q-FUOg.png?1677637017)

1. **Type** 메뉴에서 **TXT**를 선택하세요.
2. **Host**는 조금 까다로워요. Mailgun에 나온 값의 맨 앞부터 서브 도메인 부분까지 복사하세요. 루트 도메인은 넣지 마세요. 두 번째 TXT 레코드의 호스트 이름과 값은 사람마다 달라요.

   ![DKIM 레코드의 Host 필드 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292760457/original/uKwd7XSYgsN0abFfq-uLghjMc4gYBKFShw.png?1681494446)

   | 예시 | 복사할 호스트 이름 | 강조 표시된 부분 |
   | --- | --- | --- |
   | 서브 도메인을 쓰는 경우 | mx.\_domainkey.helpdesk | 서브 도메인을 쓸 때 복사할 호스트 값 예시 |
   | 메인 도메인을 쓰는 경우 | mailo.\_domainkey | 메인 도메인을 쓸 때 복사할 호스트 값 예시 |

3. **TXT Value**는 Mailgun으로 돌아가 아래 화면에 강조 표시된 두 번째 TXT 레코드(훨씬 긴 값)를 복사해서 붙여 넣으세요.

   ![복사할 긴 DKIM TXT 레코드가 강조된 Mailgun 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385043/original/UvAhE3LGN5sYkTb4kyEsXNM0GE0Uc8Eq1Q.png?1677637220)

4. **Save**를 클릭하세요.

   ![GoDaddy에 추가된 두 번째 TXT 레코드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292760542/original/dHr8OmpttMWN0VMOkXNfAi5G8Ou_hQUiVQ.png?1681494507)

## 첫 번째 MX 레코드 추가하기

![GoDaddy의 MX 레코드 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385538/original/qHcrrZPnp3g0LC4c75qM1hg_opwYUXgE0w.png?1677637720)

**Add**를 클릭해 새 레코드를 추가하세요.

![GoDaddy의 MX 레코드 추가 폼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385352/original/nEr12soR47bfSHjwNBS075J4Dr_Fd3jqUQ.png?1677637478)

{% hint style="warning" %}
메인 도메인으로 들어오는 이메일을 Google Workspace 계정으로 받고 있다면, Mailgun에는 서브 도메인을 사용하세요. 자세한 내용은 [Can I Use the Same Domain Name for Mailgun and for Google Apps (Or Another Email Server)?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)를 참고하세요.
{% endhint %}

1. **Type** 메뉴에서 **MX**를 선택하세요.
2. **Host**는 사람마다 달라요.

   ![MX 레코드의 Host 필드 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292761281/original/ilff0N0hrTpB9rOZOLtKWFcpd_pFm1FAAg.png?1681494876)
`mg.companyname.com` → 호스트 이름은 `mg``replies.companyname.com` → 호스트 이름은 `replies`
   - 메인 도메인 → 호스트 이름은 `@`

3. **Points to**(연결 대상)는 모든 사람이 같아요. `mxa.mailgun.org`를 붙여 넣으세요.
4. **Priority**(우선순위)는 `10`이에요. 어떤 도메인을 설정하든 모든 사람이 같아요.
5. **Save**를 클릭하세요.

   ![GoDaddy에 추가된 첫 번째 MX 레코드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292761314/original/r1sCz03HEK4u2NnzjZxK6TRXfTixx9qJpg.png?1681494889)

## 두 번째 MX 레코드 추가하기

**Add**를 클릭해 새 레코드를 추가하세요.

![GoDaddy의 두 번째 MX 레코드 추가 폼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385634/original/wYOidp2P0QPZbDYtP60qHBim2dahkciEMw.png?1677637830)

1. **Type** 메뉴에서 **MX**를 선택하세요.
2. **Host**는 사람마다 달라요.

   ![두 번째 MX 레코드의 Host 필드 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292761375/original/qVuzSSON9aWqKQCpGlKX89woV1txgzea3g.png?1681494908)
`mg.companyname.com` → 호스트 이름은 `mg``replies.companyname.com` → 호스트 이름은 `replies`
   - 메인 도메인 → 호스트 이름은 `@`

3. **Points to**는 모든 사람이 같아요. `mxb.mailgun.org`를 붙여 넣으세요.
4. **Priority**는 `10`이에요. 모든 사람이 같아요.
5. **Save**를 클릭하세요.

## CNAME 레코드 추가하기

![GoDaddy의 CNAME 레코드 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385721/original/3LyKoigujZ-vEjMFQDflCfmRRfAJra3rYA.png?1677637907)

**Add**를 클릭해 새 레코드를 추가하세요.

![GoDaddy의 CNAME 레코드 추가 폼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385821/original/Z_H7aEV9Fj-ulIPJTmhnmpgRUG-CWVntNA.png?1677638013)

1. **Type** 메뉴에서 **CNAME**을 선택하세요.
2. **Host**는 사람마다 달라요. Mailgun으로 돌아가 호스트 이름을 복사하세요. 맨 앞부터 서브 도메인 부분까지 복사하고, 메인 도메인은 복사하지 마세요.

   ![복사할 Mailgun CNAME 호스트 이름](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292761488/original/yTenM0KsBABRkiuopqOQIzy7E_TjKkeVDw.png?1681494956)
`mg.companyname.com` → 호스트 이름은 `email.mg``replies.companyname.com` → 호스트 이름은 `email.replies`
   - 메인 도메인(`companyname.com`) → 호스트 이름은 `email`

3. **Points to**는 모든 사람이 같아요. `mailgun.org`를 붙여 넣으세요.
4. **Save**를 클릭하세요.

   ![GoDaddy에 추가된 CNAME 레코드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292761511/original/Q-pg6CdROQ4wXlfIoOIOkvDgY1yJdVN1Ug.png?1681494965)

## DNS 확인하고 설정 마치기

![GoDaddy에 추가된 DNS 레코드 5개](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284386112/original/kW6t3s2sXMcjCylHMSgGSwJy8HDwA4momQ.png?1677638281)

레코드 5개를 모두 추가했다면 Mailgun으로 돌아가 **Verify DNS Settings**(DNS 설정 확인)를 클릭하세요. 아직 초록색 체크 표시가 뜨지 않은 레코드가 있으면 같은 버튼을 다시 클릭하세요. DNS 설정이 반영되기까지 시간이 조금 걸릴 수 있어요.

![Mailgun의 Verify DNS Settings 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382101/original/PQecmA9d0ihGiF3VchOhZL1VKMrOZmUvDQ.png?1677634628)

## 다음 단계

모든 레코드가 인증되면 Mailgun API 키를 가져와 이메일 서비스 설정에 추가하세요.

그런 다음 테스트 이메일을 보내 제대로 작동하는지 확인하세요. 대화에서 테스트 이메일을 보내 보면 돼요.

## 자주 묻는 질문

### 설정하다가 오류가 나면 어떻게 하나요?

Mailgun의 API 키와 도메인 설정을 다시 확인하세요. GoDaddy에 DNS 레코드를 제대로 입력했는지, Mailgun 대시보드에서 도메인이 인증됨으로 표시되는지도 확인하세요. 특정 오류 메시지는 Mailgun 지원 자료를 참고하면 원인을 파악하는 데 도움이 돼요.

### Mailgun에서 서브 도메인을 쓸 수 있나요? 어떻게 설정하나요?

네, 쓸 수 있어요. Mailgun에서 도메인을 추가할 때 서브 도메인(예: `mg.companyname.com`)을 선택하세요. 그다음 이 문서의 DNS 레코드 5개를 그 서브 도메인의 호스트 이름에 맞춰 똑같이 추가하면 돼요.

### 설정한 뒤 이메일 전달률은 어떻게 확인하나요?

Mailgun 대시보드에서 열람, 클릭, 반송, 스팸 신고 현황을 확인할 수 있어요. 정기적으로 살펴보면 전달률 문제를 일찍 발견할 수 있어요.

### GoDaddy 계정에 "Edit DNS" 옵션이 보이지 않아요. 무엇을 확인해야 하나요?

Domain Portfolio에서 도메인을 보고 있는지, 올바른 도메인 옆의 점 3개 메뉴를 클릭했는지 확인하세요. DNS를 별도 호스팅 업체 등 다른 곳에서 관리한다면 그곳에서 레코드를 편집해야 해요.

### 서브 도메인을 쓰는지 메인 도메인을 쓰는지에 따라 레코드 값이 달라지나요?

Host 필드는 달라져요(`mg`, `replies`, 메인 도메인은 `@`). 하지만 SPF 값, MX 연결 대상, CNAME 대상 같은 레코드 값 자체는 어느 쪽이든 같아요.

### GoDaddy에서 레코드를 추가하는 방법이 다른 도메인 등록업체와 다른가요?

등록업체가 어디든 필요한 레코드는 똑같이 5개(TXT 2개, MX 2개, CNAME 1개)예요. GoDaddy의 Type/Host/Value/Priority 필드처럼 레코드를 추가하는 화면 모양만 달라요.
