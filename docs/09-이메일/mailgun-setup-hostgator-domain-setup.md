---
원문: /support/solutions/articles/48000981679-mailgun-setup-hostgator-domain-setup
번역일: 2026-11-06
카테고리: 09-이메일
---

# Mailgun 연결 — HostGator 도메인 DNS 설정

HostGator cPanel에서 관리하는 도메인에 Mailgun을 연결할 때 쓰는 안내예요. Mailgun 가입부터 도메인 추가, 그리고 Mailgun이 요구하는 DNS 레코드 5개(TXT 2개, MX 2개, CNAME 1개) 입력까지 차례대로 따라 할 수 있어요.

기존 Google Workspace/Gmail 메일 수신에 문제가 생기지 않도록 Mailgun 레코드를 추가하는 방법도 함께 안내해요.

{% hint style="info" %}
Mailgun과 cPanel은 외부 서비스라서 화면이 영어로 보여요. 이 문서에서는 두 서비스의 메뉴와 버튼을 화면에 보이는 영어 그대로 쓰고, 처음 나올 때 뜻을 괄호로 덧붙였어요.
{% endhint %}

## Mailgun 가입하고 도메인 추가하기

1. [Mailgun.com](https://signup.mailgun.com/new/signup)에서 가입한 뒤, 받은 편지함에서 이메일 주소를 인증하세요.

   ![Mailgun 가입 완료 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378416/original/VewuZVN3oFOFIvBdf4XqMAOX4vtVGv_jNg.png?1677630998)
   ![Mailgun 이메일 인증 완료 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378421/original/GU6IL6Y3N81qm6KMH9aTz7l5FV5IEv7ySA.png?1677630999)

2. Mailgun에 로그인한 뒤 **Sending**(전송) **> Add New Domain**(새 도메인 추가)을 클릭하세요.

   ![Mailgun의 Sending 메뉴와 Add New Domain 항목](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378418/original/kxsnymCeuFAsBWkXaOes6QaaWED2_bfASA.png?1677630999)

3. 도메인이 `companyname.com`이라면, Mailgun에 메인 도메인을 쓸지 서브 도메인을 쓸지 정하세요.

   - 메인 도메인: Google Workspace나 다른 이메일 서비스와 함께 쓰고 있지 않아야 해요. 도메인을 다른 이메일 서버와 같이 쓰는 경우는 [Mailgun 안내](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)를 참고하세요.
   - 서브 도메인: `ANYTHING_HERE.companyname.com` 형태로 입력하세요. 예를 들어 `mg.companyname.com`, `replies.companyname.com`, `support.companyname.com`처럼 쓸 수 있어요.

   {% hint style="warning" %}
   도메인이나 서브 도메인은 EU가 아니라 US 리전으로 설정하세요.
   {% endhint %}

4. **Add domain**(도메인 추가)을 클릭하세요.

   ![Mailgun에서 도메인 추가하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382652/original/woVjMqNw3YY_Zjs20LoBHUb4KrThVvj_Rw.png?1677635102)

{% hint style="info" %}
다음 화면에 도메인에 추가해야 할 DNS 레코드가 나와요. 다음 단계에서 이 화면을 보며 값을 복사해야 하니 열어 두세요.
{% endhint %}

![다음 단계를 위해 열어 둘 Mailgun DNS 레코드 화면](https://help.mailgun.com/hc/article_attachments/8759612958491/Screen_Shot_2022-09-11_at_6.39.22_PM.png)

## cPanel에서 DNS 레코드 화면 열기

이제 도메인의 DNS 레코드 관리 화면에 로그인해서 Mailgun이 요구하는 DNS 레코드 5개를 추가해요. 이 문서는 HostGator의 cPanel을 예로 들어요.

1. [cPanel](https://portal.hostgator.com/hosting/cPanel/sso-redirect?redirect=/frontend/paper_lantern/)에 로그인하세요.

2. **Domains**(도메인) 섹션을 찾아 **Zone Editor**(DNS 영역 편집기)를 클릭하세요.

   ![cPanel의 Zone Editor 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284388376/original/0ObShEaAQ6GXG-G-sSlIwX_9uLXpFUjdCA.png?1677640303)

3. Zone Editor 목록에서 내 도메인을 찾아 **Manage**(관리) 버튼을 클릭하세요. 도메인의 전체 DNS 레코드가 보여요.

   ![cPanel Zone Editor에서 도메인 옆의 Manage 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284388585/original/ZsKY3OvmFHtUBZWXElGKPG31Nl51EuXcFA.png?1677640464)

4. **+Add Record**(레코드 추가) 버튼을 클릭하고 **Add "TXT" Record**를 선택하세요.

   ![cPanel Zone Editor의 Add TXT Record 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284388748/original/NLKDFwtDUhzgL1MKCSJEt-0sZ8a-ZR0JaA.png?1677640597)

## 첫 번째 TXT 레코드 추가하기 (SPF)

![cPanel Zone Editor의 TXT 레코드 입력 폼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284389218/original/uUNVP51P30hs2i_U9O701kVRlGP55HpdDw.png?1677641077)

입력할 항목은 다음과 같아요.

- A. **Name**(이름): 사람마다 달라요. 루트 도메인은 넣지 마세요.`mg.companyname.com` → 호스트 이름은 `mg``replies.companyname.com` → 호스트 이름은 `replies`
  - 메인 도메인(`companyname.com`) → 호스트 이름은 `@`
- B. **Record**(값): 모두 같아요. `v=spf1 include:mailgun.org ~all`을 붙여 넣으세요.

  ![복사할 SPF TXT 레코드가 표시된 Mailgun 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284389338/original/L_D8amxfS4rLqz8NkwMDjBWCqAuPnFqSiw.png?1677641215)

- C. **Add Record**를 클릭하세요.

## 두 번째 TXT 레코드 추가하기 (DKIM)

**+Add Record** 버튼을 클릭하고 **Add "TXT" Record**를 다시 선택하세요.

![두 번째 레코드를 위한 cPanel Zone Editor의 Add TXT Record 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284388748/original/NLKDFwtDUhzgL1MKCSJEt-0sZ8a-ZR0JaA.png?1677640597)
![DKIM 레코드를 위한 TXT 레코드 입력 폼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284389413/original/bZ319PXDv8_TwakgxeWsjd6r5-6KFjcfAA.png?1677641278)

입력할 항목은 다음과 같아요.

- A. **Name**: 이 부분이 조금 까다로워요. 값의 맨 앞부터 서브 도메인 부분까지 복사하세요. 루트 도메인은 넣지 마세요. 두 번째 TXT 레코드의 이름과 값은 사람마다 달라요.

  | 예시 | 복사할 호스트 이름 | 강조 표시된 부분 |
  | --- | --- | --- |
  | 서브 도메인을 쓸 때 | `mx._domainkey.helpdesk` | 서브 도메인을 쓸 때 복사할 호스트 값 예시 |
  | 메인 도메인을 쓸 때 | `mailo._domainkey` | 메인 도메인을 쓸 때 복사할 호스트 값 예시 |

- B. **Record**: 사람마다 달라요. Mailgun 화면으로 돌아가서 아래 스크린샷에 강조 표시된, 훨씬 긴 두 번째 TXT 레코드를 복사해 여기에 붙여 넣으세요.

  ![복사할 긴 DKIM TXT 레코드가 강조된 Mailgun 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385043/original/UvAhE3LGN5sYkTb4kyEsXNM0GE0Uc8Eq1Q.png?1677637220)

- C. **Add Record**를 클릭하세요.

## 첫 번째 MX 레코드 추가하기

![cPanel Zone Editor의 MX 레코드 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385538/original/qHcrrZPnp3g0LC4c75qM1hg_opwYUXgE0w.png?1677637720)

**+Add Record** 버튼을 클릭하고 **Add "MX" Record**를 선택하세요.

![cPanel Zone Editor의 MX 레코드 추가 폼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284389907/original/18xrjivpU7RYPDJqHY2wnce79K3AkwJe0A.png?1677641569)

{% hint style="warning" %}
메인 도메인으로 받는 메일을 Google Workspace 계정이 처리하고 있다면, Mailgun에는 서브 도메인을 쓰고 있는지 확인하세요. 자세한 내용은 [Can I Use the Same Domain Name for Mailgun and for Google Apps (Or Another Email Server)?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)를 참고하세요.
{% endhint %}

![cPanel에서 강조 표시된 MX 레코드 입력 항목](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284390505/original/nO1ZhMzBXp4ZqlhfzX1QYLxgGT0_ET-_vg.png?1677642035)

입력할 항목은 다음과 같아요.

- A. **Name**: 사람마다 달라요.`mg.companyname.com` → 호스트 이름은 `mg``replies.companyname.com` → 호스트 이름은 `replies`
  - 메인 도메인 → 호스트 이름은 `@`
- B. **Priority**(우선순위): `10`이에요. 어떤 도메인을 설정하든 모두 같아요.
- C. **Destination**(대상): 모두 같아요. `mxa.mailgun.org`를 붙여 넣으세요.

**Save Record**(레코드 저장)를 클릭하세요.

## 두 번째 MX 레코드 추가하기

**+Add Record** 버튼을 클릭하고 **Add "MX" Record**를 다시 선택하세요. 이번에는 `mxb.mailgun.org`를 가리키는 두 번째 레코드를 추가해요.

![두 번째 MX 레코드 추가 폼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284389907/original/18xrjivpU7RYPDJqHY2wnce79K3AkwJe0A.png?1677641569)
![cPanel에서 강조 표시된 두 번째 MX 레코드 입력 항목](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284390505/original/nO1ZhMzBXp4ZqlhfzX1QYLxgGT0_ET-_vg.png?1677642035)

입력할 항목은 다음과 같아요.

- A. **Name**: 사람마다 달라요.`mg.companyname.com` → 호스트 이름은 `mg``replies.companyname.com` → 호스트 이름은 `replies`
  - 메인 도메인 → 호스트 이름은 `@`
- B. **Priority**: `10`이에요. 모두 같아요.
- C. **Destination**: 모두 같아요. `mxb.mailgun.org`를 붙여 넣으세요.

**Save Record**를 클릭하세요.

## CNAME 레코드 추가하기

![cPanel Zone Editor의 CNAME 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385721/original/3LyKoigujZ-vEjMFQDflCfmRRfAJra3rYA.png?1677637907)

**+Add Record** 버튼을 클릭하고 **Add "CNAME" Record**를 선택하세요.

![cPanel의 Add CNAME Record 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284390884/original/13yHoywGcgf3oSslLKzD03Sj9MAxoJQGfA.png?1677642360)
![cPanel의 CNAME 레코드 입력 폼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284391213/original/QLb8ArxkgSrQsXJzo63PddCcQRhylQBGHw.png?1677642643)

입력할 항목은 다음과 같아요.

- A. **Name**: 사람마다 달라요. Mailgun 화면으로 돌아가 호스트 이름을 복사하세요. 맨 앞부터 서브 도메인 부분까지 복사하고, 메인 도메인은 복사하지 마세요.`mg.companyname.com` → 호스트 이름은 `email.mg``replies.companyname.com` → 호스트 이름은 `email.replies`
  - 메인 도메인(`companyname.com`) → 호스트 이름은 `email`

  ![복사할 CNAME 호스트 이름이 표시된 Mailgun 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385985/original/OtLw_A4zY8FbLbBKqMB9kUKRaQJO3xpp8A.png?1677638165)

- B. **Record**: 모두 같아요. `mailgun.org`를 붙여 넣으세요.
- C. **Save Record**를 클릭하세요.

## DNS 확인하고 설정 마무리하기

레코드 5개를 모두 추가했다면 Mailgun으로 돌아가 **Verify DNS Settings**(DNS 설정 확인)를 클릭하세요. 아직 초록색 체크 표시가 나오지 않은 레코드가 있으면 같은 버튼을 다시 클릭하세요. DNS 변경 내용이 반영되는 데 시간이 조금 걸릴 수 있어요.

![Mailgun의 Verify DNS Settings 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284387965/original/I7T5QQCSjAnBvT1zqQlVgXSuNdgfuNiM3w.png?1677639928)

## 다음 단계

모든 레코드가 인증되면 Mailgun API 키를 복사해 이메일 서비스 설정에 추가하세요.

그런 다음 테스트 이메일을 보내 제대로 동작하는지 확인하세요. 대화에서 테스트 이메일을 보내는 방법을 참고하면 돼요.

## 자주 묻는 질문

### cPanel에서 Zone Editor는 어디에 있나요?
cPanel에 로그인한 뒤 **Domains** 섹션을 찾아 **Zone Editor**를 클릭하세요. 거기서 내 도메인을 찾아 **Manage**를 클릭하면 DNS 레코드를 확인하고 추가할 수 있어요.

### Mailgun에는 메인 도메인과 서브 도메인 중 무엇을 써야 하나요?
이미 메인 도메인을 Google Workspace나 다른 이메일 서비스와 함께 쓰고 있다면, 메일 경로가 겹치지 않도록 Mailgun에는 `mg.companyname.com` 같은 서브 도메인을 쓰세요.

### Name 입력란의 "루트 도메인은 넣지 마세요"는 무슨 뜻인가요?
cPanel Zone Editor의 **Name** 입력란에는 서브 도메인 부분만 입력하면 돼요. 루트 도메인은 자동으로 붙어요. 예를 들어 `mg.companyname.com`이라면 전체 도메인이 아니라 `mg`만 입력하세요.

### 이 설정을 하면 기존 Gmail이나 Google Workspace 메일이 안 되나요?
Mailgun에 메인 도메인 대신 서브 도메인을 쓰고, 메인 도메인에 있는 Google Workspace용 기존 MX 레코드를 그대로 두면 문제가 없어요.

### DNS 레코드 인증에는 시간이 얼마나 걸리나요?
보통은 빠르게 반영되지만, 가끔 몇 시간이 걸리기도 해요. 아직 초록색으로 바뀌지 않은 레코드가 있으면 잠시 기다린 뒤 **Verify DNS Settings**를 다시 클릭하세요.

### 레코드 5개에 모두 초록색 체크 표시가 나온 뒤에는 무엇을 하나요?
Mailgun API 키를 복사해 이메일 서비스 설정에 추가하세요. 그다음 대화에서 테스트 이메일을 보내 메일이 제대로 전달되는지 확인하세요.
