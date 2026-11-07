---
원문: /support/solutions/articles/48000981680-mailgun-setup-namecheap-domain-setup
번역일: 2026-11-06
카테고리: 09-이메일
---

# Mailgun 설정하기: Namecheap 도메인 설정

Mailgun에 가입하고 도메인을 추가한 뒤, Namecheap에 TXT·MX·CNAME 레코드를 등록해 이메일 인증과 발송이 되도록 설정하는 방법이에요. 이 문서에서는 Mailgun 계정 만들기, 발송 도메인 추가, 메인 도메인과 서브도메인 중 선택하기, 그리고 Namecheap의 Advanced DNS 설정에서 필수 DNS 레코드 5개(TXT 2개, MX 2개, CNAME 1개)를 등록하는 과정을 안내해요.

{% hint style="info" %}
Mailgun과 Namecheap 화면은 하이퍼클래스 화면이 아니므로 메뉴와 버튼 이름을 영어 그대로 쓰고, 처음 나올 때 뜻을 괄호로 덧붙였어요.
{% endhint %}

## Mailgun 가입하기

[Mailgun.com](https://signup.mailgun.com/new/signup)에서 계정을 만드세요.

## 이메일 주소 인증하기

가입할 때 입력한 이메일 주소로 인증 메일이 와요. 받은편지함에서 인증을 완료하세요.

![Mailgun 가입 완료 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378416/original/VewuZVN3oFOFIvBdf4XqMAOX4vtVGv_jNg.png?1677630998)
![이메일 인증 완료 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378421/original/GU6IL6Y3N81qm6KMH9aTz7l5FV5IEv7ySA.png?1677630999)

## Mailgun에서 새 도메인 추가하기

Mailgun에 로그인한 뒤 **Sending**(전송) **> Add New Domain**(새 도메인 추가)을 클릭하세요.

![Mailgun의 Sending 메뉴와 Add New Domain 항목](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284378418/original/kxsnymCeuFAsBWkXaOes6QaaWED2_bfASA.png?1677630999)

## 메인 도메인과 서브도메인 중 선택하기

도메인이 companyname.com이라면 Mailgun에 메인 도메인이나 서브도메인 중 하나를 설정할 수 있어요.

### 옵션 A: 메인 도메인

메인 도메인을 추가하면 [Google Workspace나 다른 이메일 서비스와 함께 쓸 수 없어요](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-).

### 옵션 B: 서브도메인

서브도메인으로 설정하려면 `anything_here.companyname.com` 형태로 입력하세요. 예를 들면 다음과 같아요.

- mg.companyname.com
- replies.companyname.com
- support.companyname.com

{% hint style="info" %}
도메인이나 서브도메인은 EU가 아니라 **US** 리전으로 설정하세요. 그런 다음 **Add domain**(도메인 추가)을 클릭하세요.
{% endhint %}

![US 리전을 선택한 Mailgun 도메인 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382652/original/woVjMqNw3YY_Zjs20LoBHUb4KrThVvj_Rw.png?1677635102)

## Namecheap에서 DNS 레코드 추가하기

이제 Namecheap에 DNS 레코드 5개를 등록해요. TXT 레코드 2개, MX 레코드 2개, CNAME 레코드 1개이고, 하위 단계를 하나씩 차근차근 따라 하세요.

먼저 [Namecheap.com](https://www.namecheap.com/myaccount/login/)에 로그인한 뒤 **Domain List**(도메인 목록) **> Manage**(관리)를 클릭하세요.

![Manage 버튼이 있는 Namecheap 도메인 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284379162/original/ZFfDWZRqEj2vF1mZu2LLamthayVacfWNdQ.png?1677631852)

**Advanced DNS**를 클릭하세요. 여기에서 DNS 레코드 5개를 모두 추가해요.

![Namecheap Advanced DNS 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284379194/original/lbM_9qwxdQuZYJgoO8k_Bbs6207ECEULCA.png?1677631892)

### DNS 레코드 1/5: 첫 번째 TXT 레코드 추가

1. **Add New Record**(새 레코드 추가)를 클릭하세요.

   ![Namecheap Advanced DNS의 Add New Record 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284379255/original/z9t88DrLLsk_x-5McqcmUoQay6Rtpl-3JA.png?1677631962)

2. 드롭다운에서 **TXT Record**를 선택하세요.

   ![레코드 유형 드롭다운에서 선택한 TXT Record](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284379274/original/XZhGADHABEyG3gpE2kfSb4glLSsGZ7X29g.png?1677631986)
   ![Namecheap DNS 표의 TXT 레코드 행](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284379750/original/afOhZ_mYDjiPnMtdsXB_BaUvpK7-fBAbEg.png?1677632454)

3. **Host**(호스트)에는 설정하는 도메인에 따라 다음 값을 입력하세요.
   - mg.companyname.com이면 호스트 이름은 `mg`예요.
   - replies.companyname.com이면 호스트 이름은 `replies`예요.
   - 메인 도메인(companyname.com)이면 호스트 이름은 `@`예요.

4. **Value**(값)에는 Mailgun으로 돌아가 첫 번째 TXT 레코드를 복사해 붙여넣으세요. `v=spf1 include:mailgun.org ~all` 같은 형태예요.

   ![SPF 레코드를 붙여넣은 TXT 레코드 값 입력란](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284379641/original/OtndbakIxEwGec0uzyy6VhrQ9ahdwqWR4g.png?1677632355)

5. 초록색 체크 표시를 클릭해 저장하세요.

### DNS 레코드 2/5: 두 번째 TXT 레코드 추가

1. **Add New Record**를 다시 클릭하고, 드롭다운에서 **TXT Record**를 선택하세요.

   ![두 번째 TXT 레코드를 위한 Add New Record 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380045/original/p3EI2E6cXdPA44wNy1dlbvL9SeMlPsN_pg.png?1677632706)
   ![두 번째 레코드에서 선택한 TXT Record 유형](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380093/original/ymsCp1tf0vOpw8jh_ELv1eyAHoFR08klKA.png?1677632745)
   ![Namecheap DNS 표의 두 번째 TXT 레코드 행](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380135/original/h15o-HQi5ZlCUWfi23NsIp_ULoUljPMbDw.png?1677632789)

2. **Host**에는 Mailgun 화면에 보이는 값에서 맨 앞부터 서브도메인 부분까지만 복사해 붙여넣으세요. 이 부분이 조금 헷갈려요. 메인 도메인은 복사하지 마세요.

   ![서브도메인 부분까지 강조 표시한 Mailgun 호스트 값](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284379962/original/S6JIQJ-twEQMWBwUw7Do7908kLEMK8w9gg.png?1677632628)

   강조 표시된 부분을 복사하는 예시예요.

   | 상황 | 스크린샷 |
   | --- | --- |
   | 서브도메인을 사용하는 경우 | 서브도메인을 사용할 때의 호스트 값 예시 |
   | 메인 도메인을 사용하는 경우 | 메인 도메인을 사용할 때의 호스트 값 예시 |

3. **Value**에는 Mailgun의 두 번째 TXT 레코드를 붙여넣으세요. 첫 번째보다 긴 값이에요.

   ![Namecheap에 붙여넣은 두 번째 TXT 레코드 값](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380189/original/a5LTwyG6FV_Hp-L232_fAj2g1VUUDlSyPw.png?1677632888)

4. 초록색 체크 표시를 클릭해 저장하세요.

### DNS 레코드 3/5: 첫 번째 MX 레코드 추가

1. 아래로 스크롤해 **Mail Settings**(메일 설정)로 이동한 뒤, 드롭다운을 **Custom MX**로 바꾸세요.

   ![Custom MX로 바꾼 Mail Settings 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380651/original/s-vIse48Y60uv4ODRMU02N4qsPS5I5uYeg.png?1677633315)

{% hint style="warning" %}
원래 Gmail을 선택해 두었다면, Custom MX로 바꾸는 순간 메인 도메인으로 들어오는 메일에 기존 Google Workspace 계정이 영향을 받아요. Mailgun에는 서브도메인을 사용하고 있는지 꼭 확인하세요. 자세한 내용은 [Can I Use the Same Domain Name for Mailgun and for Google Apps (Or Another Email Server)?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)를 참고하세요.

[Google Gmail용 MX 레코드](https://support.google.com/a/answer/140034?hl=en) 5개를 다시 추가해야 해요.

| Host | TTL | Priority | Value |
| --- | --- | --- | --- |
| @ | 3600 | 1 | ASPMX.L.GOOGLE.COM |
| @ | 3600 | 5 | ALT1.ASPMX.L.GOOGLE.COM |
| @ | 3600 | 5 | ALT2.ASPMX.L.GOOGLE.COM |
| @ | 3600 | 10 | ALT3.ASPMX.L.GOOGLE.COM |
| @ | 3600 | 10 | ALT4.ASPMX.L.GOOGLE.COM |
{% endhint %}

2. 위 MX 레코드 5개를 모두 다시 추가한 뒤에 Mailgun MX 레코드를 추가해요. **Add New Record**를 클릭하세요.

   ![첫 번째 MX 레코드를 위한 Add New Record 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284381008/original/Hvcyh4kYnFgfuL6SKPnyDNBFReckD-0qqg.png?1677633693)
   ![Namecheap에서 설정 중인 MX 레코드 행](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284380997/original/nSuGvsypPVy3uastd0-zS4Dpu71FC2figA.png?1677633659)

3. **Host**에는 설정하는 도메인에 따라 다음 값을 입력하세요.
   - mg.companyname.com이면 호스트 이름은 `mg`예요.
   - replies.companyname.com이면 호스트 이름은 `replies`예요.
   - 메인 도메인(companyname.com)이면 호스트 이름은 `@`예요.

4. **Value**에는 `mxa.mailgun.org`를 입력하세요.

5. **Priority**(우선순위)에는 `10`을 입력하세요.

6. 초록색 체크 표시를 클릭해 저장하세요.

   ![Namecheap에 저장된 첫 번째 MX 레코드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284381240/original/2nrnlf9BwTPbv5cKXKZS8QStDqfFbqz-7w.png?1677633916)

### DNS 레코드 4/5: 두 번째 MX 레코드 추가

1. **Host**에는 설정하는 도메인에 따라 다음 값을 입력하세요.
   - mg.companyname.com이면 호스트 이름은 `mg`예요.
   - replies.companyname.com이면 호스트 이름은 `replies`예요.
   - 메인 도메인(companyname.com)이면 호스트 이름은 `@`예요.

2. **Value**에는 `mxb.mailgun.org`를 입력하세요.

3. **Priority**에는 `10`을 입력하세요.

4. 초록색 체크 표시를 클릭해 저장하세요.

   ![Namecheap에 저장된 두 번째 MX 레코드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284381184/original/wao3EJjnKT5qAO1wn_ZxZqBdEusgs_E8Qw.png?1677633856)

### DNS 레코드 5/5: CNAME 레코드 추가

1. 위로 스크롤해 **Host Records**(호스트 레코드) 섹션으로 돌아간 뒤 **Add New Record**를 클릭하세요.

   ![CNAME 레코드를 위한 Add New Record 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284381639/original/UJxPcf-rUHX7AwbK1pwp4kMH-N9VjEx62w.png?1677634175)

2. 드롭다운에서 **CNAME Record**를 선택하세요.

   ![레코드 유형 드롭다운에서 선택한 CNAME Record](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284381737/original/kaXoDz-tFmwEhnhJ-NOwZcvVlkk_b8I-bg.png?1677634268)

3. Mailgun으로 돌아가 호스트 이름을 복사하세요. 맨 앞부터 서브도메인 부분까지만 복사하고, 메인 도메인은 복사하지 마세요.

   ![복사할 Mailgun CNAME 호스트 값](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382024/original/SKui5c_vVTAOKtN714Bl9mx8OdjgxebDSA.png?1677634552)

4. 다시 Namecheap으로 돌아오세요.

   ![Namecheap의 CNAME 레코드 행](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284381724/original/zDKUjwzlyWytyho6PuhbQEvKuqGiKzYypQ.png?1677634245)

5. **Host**에는 설정하는 도메인에 따라 다음 값을 입력하세요.
   - mg.companyname.com이면 호스트 이름은 `email.mg`예요.
   - replies.companyname.com이면 호스트 이름은 `email.replies`예요.
   - 메인 도메인(companyname.com)이면 호스트 이름은 `email`이에요.

6. **Value**에는 `mailgun.org`를 입력하세요.

7. 초록색 체크 표시를 클릭해 저장하세요.

### DNS 설정 확인하기

레코드 5개를 모두 추가했다면 Mailgun으로 돌아가 **Verify DNS Settings**(DNS 설정 확인)를 클릭하세요. 초록색 체크 표시가 나오지 않은 레코드가 있으면 같은 버튼을 한 번 더 클릭하세요.

![Mailgun의 Verify DNS Settings 결과 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382101/original/PQecmA9d0ihGiF3VchOhZL1VKMrOZmUvDQ.png?1677634628)

## API 키 가져오기와 테스트 이메일 보내기

DNS 레코드를 모두 추가하고 인증까지 마쳤다면 Mailgun에서 API 키를 확인하세요. 방법은 'Mailgun API 키: Mailgun에서 찾아 플랫폼에 추가하기' 문서를 참고하세요.

거의 다 됐어요. 마지막으로 테스트 이메일을 보내 모든 설정이 제대로 되었는지 확인하세요. 방법은 '대화에서 테스트 이메일 보내기' 문서를 참고하세요.

## 자주 묻는 질문

### Custom MX로 바꾸면 기존 Gmail이나 Google Workspace 이메일이 안 되나요?

그럴 수 있어요. 이미 Google Workspace를 쓰는 메인 도메인에 MX 레코드를 추가하는 경우에 해당해요. Mailgun MX 레코드와 함께 Google MX 레코드 5개를 모두 다시 추가하세요. 위험을 아예 피하려면 서브도메인을 사용하는 것도 좋아요.

### TXT·MX 레코드의 Host 값과 CNAME 레코드의 Host 값은 무엇이 다른가요?

TXT와 MX 레코드의 호스트는 서브도메인만 입력해요(예: `mg`). CNAME 레코드는 Namecheap에서 `email.mg`처럼 입력해야 해요. 이 값은 Mailgun이 클릭·오픈 추적에 쓰는 추적용 서브도메인이에요.

### 인증했는데도 초록색 체크 표시가 나오지 않아요. 어떻게 해야 하나요?

DNS 변경 내용이 반영되는 데 시간이 걸릴 수 있어요. 각 호스트와 값이 Mailgun에 표시된 내용과 같은지 다시 확인하세요. 그런 다음 몇 분 뒤에 **Verify DNS Settings**를 다시 클릭하세요.

### TXT 레코드가 왜 두 개나 필요한가요?

첫 번째 TXT 레코드는 SPF 레코드예요. Mailgun이 내 도메인으로 메일을 보내도 된다는 것을 허가해 줘요. 두 번째로 더 긴 TXT 레코드는 DKIM 키예요. 보내는 메일에 암호화 서명을 붙여 줘요.

### 이 문서에 나온 값을 그대로 입력하나요, 아니면 내 Mailgun 계정에 표시된 값을 입력하나요?

항상 내 Mailgun 대시보드에 표시된 호스트와 값을 그대로 복사하세요. `mxa.mailgun.org`와 `mxb.mailgun.org`는 모든 계정에 같은 표준 값이지만, TXT 레코드 값은 도메인마다 달라요.

### Namecheap이 아닌 다른 도메인 제공업체에서도 같은 방법으로 설정할 수 있나요?

레코드 유형과 값은 어디서나 같아요. 다만 레코드를 추가하는 화면은 제공업체마다 달라요. 사용하는 제공업체에 맞는 설정 가이드를 확인하세요.
