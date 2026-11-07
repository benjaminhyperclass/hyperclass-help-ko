---
원문: https://help.gohighlevel.com/support/solutions/articles/48001064413-mailgun-setup-cloudflare-domain-setup
번역일: 2026-11-06
카테고리: 09-이메일
---

# Mailgun 설정 — Cloudflare 도메인에 DNS 레코드 등록하기

Cloudflare에서 관리하는 도메인에 Mailgun을 연결할 때 필요한 DNS 설정을 단계별로 안내해요. Mailgun 가입부터 도메인 추가, Cloudflare의 DNS 레코드 등록, 인증까지 따라 할 수 있어요.

Mailgun이 요구하는 레코드는 TXT 2개, MX 2개, CNAME 1개로 모두 5개예요. 이 문서에서는 Cloudflare에서 헷갈리기 쉬운 단계도 함께 다뤄요. CNAME 레코드를 **Proxied**에서 **DNS only**로 바꾸는 단계예요.

## Mailgun 가입하고 도메인 추가하기

1. [Mailgun.com](https://signup.mailgun.com/new/signup)에서 가입한 뒤, 받은 편지함에서 이메일 주소를 인증하세요.

   ![Mailgun 가입 완료 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378416/original/VewuZVN3oFOFIvBdf4XqMAOX4vtVGv_jNg.png?1677630998)
   ![Mailgun 이메일 인증 완료 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378421/original/GU6IL6Y3N81qm6KMH9aTz7l5FV5IEv7ySA.png?1677630999)

2. Mailgun에 로그인한 뒤 **Sending > Add New Domain**(전송 > 새 도메인 추가)을 클릭하세요.

   ![Mailgun의 Sending 메뉴에서 Add New Domain 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378418/original/kxsnymCeuFAsBWkXaOes6QaaWED2_bfASA.png?1677630999)

3. 도메인이 `companyname.com`이라면, Mailgun에 메인 도메인을 쓸지 서브 도메인을 쓸지 정하세요.

   - 메인 도메인: 메인 도메인을 쓰는 경우, 같은 도메인을 Google Workspace나 다른 이메일 서비스와 함께 쓰면 안 돼요. 자세한 내용은 [Mailgun 안내](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)에서 확인하세요.
   - 서브 도메인: `원하는이름.companyname.com` 형태로 입력하세요. 예를 들어 `mg.companyname.com`, `replies.companyname.com`, `support.companyname.com`처럼 쓸 수 있어요.

   {% hint style="warning" %}
   도메인이나 서브 도메인은 EU가 아니라 **US** 리전으로 설정하세요.
   {% endhint %}

4. **Add domain**(도메인 추가)을 클릭하세요.

   ![Mailgun에서 도메인 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382652/original/woVjMqNw3YY_Zjs20LoBHUb4KrThVvj_Rw.png?1677635102)

{% hint style="info" %}
다음 화면에서 도메인에 추가할 DNS 레코드를 안내해요. 다음 단계에서 이 화면의 값이 필요하니 닫지 말고 열어 두세요.
{% endhint %}

![다음 단계를 위해 열어 둘 Mailgun DNS 레코드 화면](https://help.mailgun.com/hc/article_attachments/8759612958491/Screen_Shot_2022-09-11_at_6.39.22_PM.png)

## Cloudflare에서 DNS 레코드 화면 열기

이제 Cloudflare에 로그인해서 Mailgun이 요구하는 DNS 레코드 5개를 추가해요.

1. [Cloudflare 대시보드](https://dash.cloudflare.com/login)에 로그인한 뒤 계정과 도메인을 선택하세요. DNS 레코드 만들기에 대한 자세한 내용은 Cloudflare의 [DNS 레코드 만들기 안내](https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/)를 참고하세요.

2. **DNS > Records**(DNS > 레코드)를 클릭하세요.

   ![Cloudflare의 DNS Records 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284386950/original/7Br2BkIKLhDBiHeqj6uRhzUTM68HZihKIQ.png?1677639074)

3. **+ Add Record**(레코드 추가)를 클릭하세요. 아래 5개 레코드를 추가할 때마다 이 단계를 반복해요.

   ![Cloudflare DNS의 Add Record 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284387199/original/vr_JbieNqi07EUV9m4GhTYCExqDcTOc-zw.png?1677639281)

## 첫 번째 TXT 레코드(SPF) 추가하기

![Cloudflare의 레코드 추가 폼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284387183/original/Y8NTiChTf60Ju-PPIBkxMoPvepF9sUSQqQ.png?1677639258)

1. **Type**(유형) 메뉴에서 **TXT**를 선택하세요.
2. **Name**(이름)에 호스트 이름을 입력하세요. 이 값은 사용자마다 달라요. 루트 도메인은 포함하지 마세요.
   - `mg.companyname.com` → 호스트 이름은 `mg`
   - `replies.companyname.com` → 호스트 이름은 `replies`
   - 메인 도메인(`companyname.com`) → 호스트 이름은 `@`
3. **Content**(내용)에 `v=spf1 include:mailgun.org ~all`을 붙여 넣으세요. 이 값은 모든 사용자가 같아요.
4. **Save**(저장)를 클릭하세요.

![첫 번째 TXT 레코드 입력을 마친 Cloudflare 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284384681/original/QCbqi3BnzhNKNCspyADXNWBZfk3F55e2dg.png?1677636916)

## 두 번째 TXT 레코드(DKIM) 추가하기

**+ Add Record**를 다시 클릭하세요.

![Cloudflare에서 두 번째 TXT 레코드 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284387388/original/pGwHEEJ73iotP2Px-sz8EMcZlT852MZg1g.png?1677639444)

1. **Type** 메뉴에서 **TXT**를 선택하세요.
2. **Name**에는 Mailgun에 표시된 값의 맨 앞부터 서브 도메인 부분 직전까지 복사해서 붙여 넣으세요. 이 부분이 조금 까다로워요. 루트 도메인은 포함하지 마세요. 두 번째 TXT 레코드의 이름과 값은 사용자마다 달라요.

   | 예시 | 복사할 이름 | 강조된 부분 |
   | --- | --- | --- |
   | 서브 도메인을 쓰는 경우 | `mx._domainkey.helpdesk` | 서브 도메인을 쓸 때 복사할 이름 값의 예시 |
   | 메인 도메인을 쓰는 경우 | `mailo._domainkey` | 메인 도메인을 쓸 때 복사할 이름 값의 예시 |

3. Mailgun 화면으로 돌아가 아래 스크린샷에서 강조된 두 번째 TXT 레코드(훨씬 긴 값)를 복사하세요. 그런 다음 **Content**에 붙여 넣으세요.

   ![복사할 긴 DKIM TXT 레코드가 강조된 Mailgun 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385043/original/UvAhE3LGN5sYkTb4kyEsXNM0GE0Uc8Eq1Q.png?1677637220)

4. **Save**를 클릭하세요.

## 첫 번째 MX 레코드 추가하기

![Cloudflare의 MX 레코드 개요](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385538/original/qHcrrZPnp3g0LC4c75qM1hg_opwYUXgE0w.png?1677637720)

**+ Add Record**를 다시 클릭하세요.

![Cloudflare의 MX 레코드 추가 폼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284387485/original/P9K8ytrObBrwMJdpaEBYJYuK3S7Z-iq5yg.png?1677639588)

{% hint style="warning" %}
메인 도메인의 수신 이메일을 Google Workspace 계정이 받고 있다면, Mailgun에는 반드시 서브 도메인을 쓰세요. 자세한 내용은 [Can I Use the Same Domain Name for Mailgun and for Google Apps (Or Another Email Server)?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)를 참고하세요.
{% endhint %}

1. **Type** 메뉴에서 **MX**를 선택하세요.
2. **Name**에 호스트 이름을 입력하세요. 이 값은 사용자마다 달라요.
   - `mg.companyname.com` → 호스트 이름은 `mg`
   - `replies.companyname.com` → 호스트 이름은 `replies`
   - 메인 도메인 → 호스트 이름은 `@`
3. **Mail Server**(메일 서버)에 `mxa.mailgun.org`를 붙여 넣으세요. 이 값은 모든 사용자가 같아요.
4. **Priority**(우선순위)에 `10`을 입력하세요. 어떤 도메인을 설정하든 모든 사용자가 같은 값이에요.
5. **Save**를 클릭하세요.

## 두 번째 MX 레코드 추가하기

**+ Add Record**를 다시 클릭하세요.

![Cloudflare의 두 번째 MX 레코드 추가 폼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284387662/original/7FOCRV3g2jhAT9ogHOZI9nNtWZiNGsDqlQ.png?1677639703)

1. **Type** 메뉴에서 **MX**를 선택하세요.
2. **Name**에 호스트 이름을 입력하세요. 이 값은 사용자마다 달라요.
   - `mg.companyname.com` → 호스트 이름은 `mg`
   - `replies.companyname.com` → 호스트 이름은 `replies`
   - 메인 도메인 → 호스트 이름은 `@`
3. **Mail Server**에 `mxb.mailgun.org`를 붙여 넣으세요. 이 값은 모든 사용자가 같아요.
4. **Priority**에 `10`을 입력하세요. 이 값도 모든 사용자가 같아요.
5. **Save**를 클릭하세요.

## CNAME 레코드 추가하기

![Cloudflare의 CNAME 레코드 개요](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385721/original/3LyKoigujZ-vEjMFQDflCfmRRfAJra3rYA.png?1677637907)

Cloudflare에서 **+ Add Record**를 다시 클릭하세요.

![Cloudflare의 CNAME 레코드 추가 폼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284387826/original/6ADDI371NG-0XbruZ2zs5EF4QgaagbkXqQ.png?1677639817)

1. **Type** 메뉴에서 **CNAME**을 선택하세요.
2. **Name**에 호스트 이름을 입력하세요. 이 값은 사용자마다 달라요. Mailgun으로 돌아가 호스트 이름을 복사하세요. 맨 앞부터 서브 도메인 부분 직전까지만 복사하고, 메인 도메인은 복사하지 마세요.

   ![복사할 Mailgun CNAME 호스트 이름](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385985/original/OtLw_A4zY8FbLbBKqMB9kUKRaQJO3xpp8A.png?1677638165)

   - `mg.companyname.com` → 호스트 이름은 `email.mg`
   - `replies.companyname.com` → 호스트 이름은 `email.replies`
   - 메인 도메인(`companyname.com`) → 호스트 이름은 `email`

3. **Target**(대상)에 `mailgun.org`를 붙여 넣으세요. 이 값은 모든 사용자가 같아요.

{% hint style="warning" %}
Cloudflare에서만 필요한 단계예요. 다음 4번 단계를 꼭 확인하세요.
{% endhint %}

4. 주황색 구름 아이콘을 클릭해 **Proxied**에서 **DNS only**로 바꾸세요. 이 레코드가 Proxied 상태로 남아 있으면 Mailgun이 레코드를 인증하지 못하고, 메일 발송에도 실패해요.
5. **Save**를 클릭하세요.

![DNS only로 설정한 CNAME 레코드 입력을 마친 Cloudflare 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284387917/original/KyyhGEhxb0QZRZCV2f8MAaNP6jb9n37nvA.png?1677639894)

## DNS 인증하고 마무리하기

레코드 5개를 모두 추가했다면 Mailgun으로 돌아가 **Verify DNS Settings**(DNS 설정 인증)를 클릭하세요. 아직 초록색 체크 표시가 뜨지 않은 레코드가 있으면 같은 버튼을 다시 클릭하세요. DNS 변경 사항이 반영되기까지 시간이 조금 걸릴 수 있어요.

![Mailgun의 Verify DNS Settings 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284387965/original/I7T5QQCSjAnBvT1zqQlVgXSuNdgfuNiM3w.png?1677639928)

### 다음 단계

모든 레코드가 인증되면 Mailgun API 키를 복사해서 하이퍼클래스의 이메일 서비스 설정에 추가하세요.

그런 다음 테스트 이메일을 보내 제대로 작동하는지 확인하세요. 대화에서 테스트 이메일을 보내는 방법을 참고하면 돼요.

## 자주 묻는 질문

### CNAME 레코드는 왜 "Proxied"가 아니라 "DNS only"여야 하나요?
Cloudflare 프록시는 레코드 앞에서 레코드가 연결되는 방식을 바꿔요. 그래서 Mailgun이 레코드를 인증하지 못해요. DNS only(회색 구름)로 설정하면 Mailgun이 레코드를 직접 확인할 수 있어요.

### Cloudflare에서 +Add Record 버튼은 어디에 있나요?
도메인을 선택한 뒤 **DNS > Records**로 이동하세요. **+ Add Record** 버튼은 레코드 표의 맨 위에 있어요.

### TXT와 MX 레코드도 DNS only로 설정해야 하나요?
Cloudflare에서 TXT와 MX 레코드는 프록시를 쓸 수 없어요. CNAME이나 A 레코드처럼 웹 주소로 연결되는 레코드에만 프록시 토글이 보여요. DNS only 설정은 CNAME 레코드만 확인하면 돼요.

### 기존에 쓰던 Google Workspace나 Gmail 이메일에 영향을 주나요?
Mailgun에 메인 도메인 대신 서브 도메인을 쓰고, 메인 도메인에 있는 Google Workspace용 기존 MX 레코드를 그대로 두면 영향이 없어요.

### Cloudflare에서 DNS 반영에는 시간이 얼마나 걸리나요?
Cloudflare의 DNS 업데이트는 보통 빠르지만, 변경 사항이 완전히 반영되기까지 몇 시간이 걸릴 때도 있어요. Mailgun에서 아직 초록색으로 바뀌지 않은 레코드가 있다면 잠시 기다린 뒤 **Verify DNS Settings**를 다시 클릭하세요.

### 레코드 5개에 모두 초록색 체크 표시가 뜬 뒤에는 무엇을 하나요?
Mailgun API 키를 복사해서 이메일 서비스 설정에 추가하세요. 그런 다음 대화에서 테스트 이메일을 보내 발송이 잘 되는지 확인하세요.
