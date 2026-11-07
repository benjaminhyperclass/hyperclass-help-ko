---
원문: /support/solutions/articles/48000981685-mailgun-setup-siteground-domain-setup
번역일: 2026-11-06
카테고리: 09-이메일
---

# Mailgun + SiteGround 도메인 설정

SiteGround에서 관리하는 도메인을 Mailgun에 연결하는 방법을 안내해요. Mailgun에 가입하고 도메인을 추가한 뒤, SiteGround의 DNS Zone Editor에서 Mailgun이 요구하는 DNS 레코드 5개(TXT 2개, MX 2개, CNAME 1개)를 등록해요.

Mailgun 레코드를 추가하면서 기존 Google Workspace/Gmail 메일 수신에 문제가 생기지 않게 하는 방법도 함께 다뤄요.

## Mailgun 가입 및 도메인 추가

1. [Mailgun.com](https://signup.mailgun.com/new/signup)에서 가입한 뒤, 받은 편지함에서 이메일 주소를 인증하세요.

   ![Mailgun 가입 완료 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378416/original/VewuZVN3oFOFIvBdf4XqMAOX4vtVGv_jNg.png?1677630998)
   ![Mailgun 이메일 인증 완료 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378421/original/GU6IL6Y3N81qm6KMH9aTz7l5FV5IEv7ySA.png?1677630999)

2. Mailgun에 로그인한 뒤 **Sending > Add New Domain**(전송 > 새 도메인 추가)을 클릭하세요.

   ![Mailgun의 Sending 메뉴에서 Add New Domain 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378418/original/kxsnymCeuFAsBWkXaOes6QaaWED2_bfASA.png?1677630999)

3. 도메인이 `companyname.com`이라면, Mailgun에 메인 도메인을 설정할지 서브 도메인을 설정할지 정하세요.

   - 메인 도메인: 메인 도메인을 Mailgun에 쓰면 같은 도메인을 Google Workspace나 다른 이메일 서비스와 함께 쓰지 않아야 해요. 자세한 내용은 [Mailgun 안내](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)를 참고하세요.
   - 서브 도메인: `원하는이름.companyname.com` 형태로 입력하세요. 예를 들면 `mg.companyname.com`, `replies.companyname.com`, `support.companyname.com`이에요.

{% hint style="warning" %}
도메인이나 서브 도메인은 EU가 아닌 US 리전으로 설정하세요.
{% endhint %}

4. **Add domain**(도메인 추가)을 클릭하세요.

   ![Mailgun에서 도메인 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382652/original/woVjMqNw3YY_Zjs20LoBHUb4KrThVvj_Rw.png?1677635102)

{% hint style="info" %}
다음 화면에서 도메인에 추가할 DNS 레코드를 안내해요. 다음 단계에서 이 값을 복사해야 하니 화면을 열어 둔 채로 두세요.
{% endhint %}

![다음 단계에서 계속 열어 둘 Mailgun DNS 레코드 화면](https://help.mailgun.com/hc/article_attachments/8759612958491/Screen_Shot_2022-09-11_at_6.39.22_PM.png)

## SiteGround에서 DNS 레코드 화면 열기

이제 SiteGround에 로그인해서 Mailgun이 요구하는 DNS 레코드 5개를 추가해요.

1. [SiteGround](https://login.siteground.com/login?lang=en)에 로그인하세요. 더 자세한 내용은 SiteGround의 [DNS 레코드 관리 안내](https://world.siteground.com/kb/manage-dns-records/#TXT_record_settings)를 참고하세요.

2. **Site Tools > Domain > DNS Zone Editor**로 이동하세요.

   ![SiteGround Site Tools의 DNS Zone Editor](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284391901/original/ZwLX5zPm5t6xvyGMrcxkIhoPH6U7XtbQsw.png?1677643178)

3. **Create New Record**(새 레코드 만들기) 섹션에서 레코드 5개를 하나씩 같은 방식으로 추가해요.

   ![SiteGround DNS Zone Editor의 Create New Record 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284392257/original/BnfApclXdbWZ_ONRoVqVaZZLCw-m9GTxFw.png?1677643477)

## 첫 번째 TXT 레코드(SPF) 추가

1. **TXT** 탭을 클릭하세요.
2. **Name**(이름)은 사람마다 달라요. 루트 도메인은 넣지 않고 입력하세요.`mg.companyname.com` → 호스트 이름은 `mg``replies.companyname.com` → 호스트 이름은 `replies`
   - 메인 도메인(`companyname.com`) → 호스트 이름은 `@`이거나 비워 두세요
3. **Value**(값)는 모두 같아요. `v=spf1 include:mailgun.org ~all`을 붙여 넣으세요.
4. **Create**(만들기)를 클릭하세요.

![SiteGround에서 완성한 첫 번째 TXT 레코드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284384681/original/QCbqi3BnzhNKNCspyADXNWBZfk3F55e2dg.png?1677636916)

## 두 번째 TXT 레코드(DKIM) 추가

**+ Add Record**(레코드 추가)를 다시 클릭하세요.

![SiteGround DNS Zone Editor에서 두 번째 레코드 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284392423/original/WFBDHip6_j3WmEo4nRgIeENzQN-OEFhqqA.png?1677643605)

1. **TXT** 탭을 클릭하세요.
2. **Name**은 조금 까다로워요. Mailgun에 나온 값의 맨 앞부터 서브 도메인 부분 앞까지를 복사하세요. 루트 도메인은 넣지 않아요. 두 번째 TXT 레코드의 이름과 값은 사람마다 모두 달라요.

   | 예시 | 복사할 이름 | 강조된 부분 |
   | --- | --- | --- |
   | 서브 도메인을 쓰는 경우 | mx.\_domainkey.helpdesk | 서브 도메인을 쓸 때 복사할 이름 값의 예시 |
   | 메인 도메인을 쓰는 경우 | mailo.\_domainkey | 메인 도메인을 쓸 때 복사할 이름 값의 예시 |

3. **Value**는 Mailgun으로 돌아가서 두 번째 TXT 레코드를 복사해 붙여 넣으세요. 첫 번째보다 훨씬 길고, 아래 화면에서 강조된 값이에요.

   ![Mailgun 화면에서 복사할 긴 DKIM TXT 레코드 강조](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385043/original/UvAhE3LGN5sYkTb4kyEsXNM0GE0Uc8Eq1Q.png?1677637220)

4. **Create**를 클릭하세요.

## 첫 번째 MX 레코드 추가

![SiteGround MX 레코드 개요](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385538/original/qHcrrZPnp3g0LC4c75qM1hg_opwYUXgE0w.png?1677637720)

**MX** 탭을 클릭한 뒤 **Add your own MX records**(직접 MX 레코드 추가)를 선택하세요.

![SiteGround의 Add your own MX records 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284392929/original/H-xERjs6rnHBgx2KfGgEYZBZ7Mmkxa_00A.png?1677644034)

{% hint style="warning" %}
메인 도메인으로 오는 이메일을 Google Workspace 계정이 받고 있다면, Mailgun에는 반드시 서브 도메인을 쓰세요. 자세한 내용은 [Can I Use the Same Domain Name for Mailgun and for Google Apps (Or Another Email Server)?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)를 참고하세요.
{% endhint %}

![SiteGround의 MX 레코드 입력 필드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284393043/original/KK8SevO7iTJJWSHB-9l9vRPfuZtGzkKxmw.png?1677644111)

1. **Name**은 사람마다 달라요.`mg.companyname.com` → 호스트 이름은 `mg``replies.companyname.com` → 호스트 이름은 `replies`
   - 메인 도메인 → 호스트 이름은 `@`
2. **Priority**(우선순위)는 `10`이에요. 어떤 도메인을 설정하든 모두 같아요.
3. **Destination**(대상)은 모두 같아요. `mxa.mailgun.org`를 붙여 넣으세요.
4. **Create**를 클릭하세요.

## 두 번째 MX 레코드 추가

MX 레코드를 하나 더 추가해요. 이번에는 대상이 `mxb.mailgun.org`예요.

![SiteGround의 두 번째 MX 레코드 추가 폼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284393336/original/Rwlp0thYONnclsrwYeGKRE6xBW0jl1A2KQ.png?1677644328)

1. **Name**은 사람마다 달라요.`mg.companyname.com` → 호스트 이름은 `mg``replies.companyname.com` → 호스트 이름은 `replies`
   - 메인 도메인 → 호스트 이름은 `@`
2. **Priority**는 `10`이에요. 모두 같아요.
3. **Destination**은 모두 같아요. `mxb.mailgun.org`를 붙여 넣으세요.
4. **Create**를 클릭하세요.

## CNAME 레코드 추가

![SiteGround CNAME 레코드 개요](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385721/original/3LyKoigujZ-vEjMFQDflCfmRRfAJra3rYA.png?1677637907)
![SiteGround의 CNAME 레코드 추가 폼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284393711/original/khGHMR_qTn12M2FmkiCTjNf8k9lHWO-gDw.png?1677644645)

1. **CNAME** 탭을 클릭하세요.
2. **Name**은 사람마다 달라요. Mailgun으로 돌아가서 호스트 이름을 복사하세요. 맨 앞부터 서브 도메인 부분까지만 복사하고, 메인 도메인은 복사하지 않아요.

   ![복사할 Mailgun CNAME 호스트 이름](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385985/original/OtLw_A4zY8FbLbBKqMB9kUKRaQJO3xpp8A.png?1677638165)
`mg.companyname.com` → 호스트 이름은 `email.mg``replies.companyname.com` → 호스트 이름은 `email.replies`
   - 메인 도메인(`companyname.com`) → 호스트 이름은 `email`
3. **Resolves to**(연결 대상)는 모두 같아요. `mailgun.org`를 붙여 넣으세요.
4. **Create**를 클릭하세요.

![SiteGround에 DNS 레코드 5개를 모두 추가한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284393881/original/3o8rKOzJY89uxP0iayB1w-9flRZKZ1EM8g.png?1677644794)

## DNS 인증 및 설정 마무리

레코드 5개를 모두 추가했다면 Mailgun으로 돌아가서 **Verify DNS Settings**(DNS 설정 인증)를 클릭하세요. 아직 초록색 체크 표시가 나오지 않는 레코드가 있으면 같은 버튼을 다시 클릭하세요. DNS가 적용되는 데 시간이 조금 걸릴 수 있어요.

![Mailgun의 Verify DNS Settings 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284387965/original/I7T5QQCSjAnBvT1zqQlVgXSuNdgfuNiM3w.png?1677639928)

### 다음 단계

모든 레코드가 인증되면 Mailgun API 키를 복사해서 이메일 서비스 설정에 추가하세요.

그런 다음 테스트 이메일을 보내 제대로 작동하는지 확인하세요. 대화에서 테스트 이메일을 보내는 방법을 참고하세요.

## 자주 묻는 질문

### SiteGround에서 DNS Zone Editor는 어디에 있나요?
SiteGround에 로그인한 뒤 **Site Tools > Domain > DNS Zone Editor**로 이동하세요. 여기서 도메인의 TXT, MX, CNAME 레코드를 추가할 수 있어요.

### Add your own MX records가 보이지 않아요.
이 옵션은 DNS Zone Editor의 **MX** 탭 안에 있어요. 보이지 않는다면 올바른 도메인을 선택했는지 확인하세요. SiteGround 요금제에서 이메일 호스팅이 다른 서비스에 고정되어 있지는 않은지도 확인하세요.

### 메인 도메인의 Name 필드는 비워 둘까요, `@`를 입력할까요?
SiteGround의 DNS Zone Editor에서는 둘 다 가능해요. 둘 다 루트 도메인을 뜻해요. 오류 없이 입력되는 쪽을 쓰세요.

### 기존에 쓰던 Google Workspace나 Gmail 이메일에 영향이 있나요?
Mailgun에 메인 도메인이 아닌 서브 도메인을 쓰고, 메인 도메인에 있는 Google Workspace용 기존 MX 레코드를 그대로 두면 영향이 없어요.

### SiteGround에서 DNS가 적용되는 데 얼마나 걸리나요?
보통 빠르게 적용되지만, 가끔 몇 시간이 걸리기도 해요. Mailgun에서 레코드에 아직 초록색 표시가 나오지 않으면 잠시 기다렸다가 **Verify DNS Settings**를 다시 클릭하세요.

### 레코드 5개에 모두 초록색 체크 표시가 나온 뒤에는 무엇을 하나요?
Mailgun API 키를 복사해서 이메일 서비스 설정에 추가하세요. 그런 다음 대화에서 테스트 이메일을 보내 발송이 제대로 되는지 확인하세요.
