---
원문: /support/solutions/articles/48001155148-mailgun-setup-google-domain-setup
번역일: 2026-11-06
카테고리: 09-이메일
---

# Mailgun 연결하기 — Google Domains에서 DNS 설정

Google Domains에 등록한 도메인을 Mailgun에 연결하는 DNS 설정 방법을 단계별로 안내해요. Mailgun에 가입해 도메인을 추가하고, Mailgun이 요구하는 DNS 레코드를 Google Domains에 등록하는 과정을 다뤄요.

## 이 문서에서 다루는 내용

Mailgun 가입부터 도메인 추가까지 진행한 뒤, Google Domains에서 Mailgun이 요구하는 DNS 레코드 5개를 등록해요. 5개는 TXT 레코드 2개, MX 값 2개, CNAME 1개예요.

기존 Google Workspace/Gmail 메일 수신에 문제가 생기지 않게 Mailgun 레코드를 추가하는 방법도 함께 안내해요.

## Mailgun에 가입하고 도메인 추가하기

1. [Mailgun.com](https://signup.mailgun.com/new/signup)에서 가입한 뒤, 받은 편지함에서 이메일 주소를 인증하세요.

   ![Mailgun 가입 완료 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382834/original/93q62at2bi41NnpFtGv2FEPRQFFSRfxR7w.png?1677635327)
   ![Mailgun 이메일 인증 완료 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382837/original/cRlyZ3AGCLES6EuDfYfGZsvx1meXvGsPdg.png?1677635328)

2. Mailgun에 로그인한 다음 **전송 중**(Sending) 메뉴에서 **Add New Domain**(새 도메인 추가)을 클릭하세요.

   ![Mailgun의 전송 메뉴와 새 도메인 추가 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382836/original/dX85fHXCrcdjQS7AUBN05K-nzvcunlx1CQ.png?1677635327)

3. 가지고 있는 도메인이 `companyname.com`이라면, Mailgun에 메인 도메인을 연결할지 서브 도메인을 연결할지 정하세요.

   - 메인 도메인: 메인 도메인을 Mailgun에 쓴다면 Google Workspace나 다른 이메일 서비스와 같이 쓰면 안 돼요. 다른 이메일 서버와 도메인을 함께 쓰는 문제는 [Mailgun 안내](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)를 참고하세요.
   - **서브 도메인**: `원하는이름.companyname.com` 형식으로 입력하세요. 예를 들어 `mg.companyname.com`, `replies.companyname.com`, `support.companyname.com`처럼 쓸 수 있어요.

   {% hint style="warning" %}
   도메인이나 서브 도메인은 EU가 아닌 **US** 리전으로 설정하세요.
   {% endhint %}

4. **Add domain**(도메인 추가)을 클릭하세요.

   ![Mailgun에서 도메인 추가하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284382833/original/orhf_0AVhwlQvuxlv2cPV72PZBV30Ec4gw.png?1677635326)

## Google Domains에서 DNS 레코드 화면 열기

이제 도메인의 DNS 레코드 화면에서 Mailgun이 요구하는 DNS 레코드 5개를 추가해요.

1. [domains.google.com](https://domains.google.com)에 로그인하세요.
2. 설정하려는 도메인을 클릭하세요.
3. 왼쪽 패널에서 **DNS**를 클릭하세요. 레코드 5개를 모두 이 화면에서 추가해요.

![Google Domains의 DNS 관리 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243542584/original/jduaWZZKo0s-PYGnVfTYxkAaGSceLswDuQ.png?1659727406)

## 첫 번째 TXT 레코드 추가하기 (SPF)

- **Host name**(호스트 이름): 연결한 도메인에 따라 다음과 같이 입력하세요.`mg.companyname.com` → 호스트 이름은 `mg``replies.companyname.com` → 호스트 이름은 `replies`
  - 메인 도메인(`companyname.com`) → 호스트 이름은 `@`
- **유형**: 드롭다운에서 `TXT`를 선택하세요.
- **데이터**: Mailgun에서 복사해 둔 첫 번째 TXT 레코드를 붙여넣으세요. 값은 `v=spf1 include:mailgun.org ~all`이에요.

![SPF 값을 입력한 Google Domains의 TXT 레코드 양식](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243542124/original/92-SiILtsZ5kfbsAEFFhKKjKEM8sGjIWEQ.png?1659727285)

{% hint style="info" %}
아직 **저장**을 클릭하지 마세요. 추가할 레코드가 4개 더 남아 있어요. 이 레코드를 다 입력했다면 **Create new record**(새 레코드 만들기)를 클릭하고 다음 단계로 넘어가세요.
{% endhint %}

## 두 번째 TXT 레코드 추가하기 (DKIM)

- **Host name**(호스트 이름): 이 부분이 조금 까다로워요. 값의 처음부터 서브 도메인 부분까지만 복사하세요. 메인 도메인은 복사하지 마세요.

  ![DKIM 레코드에서 복사할 호스트 이름 값 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243542908/original/5vSFtNLEoaRQt2aK8L4rniJCWjLDJy6Vmg.png?1659727560)

  | 예시 | 복사할 부분 (강조 표시) |
  | --- | --- |
  | 서브 도메인을 사용하는 경우 | 서브 도메인을 쓸 때 복사할 호스트 값 예시 |
  | 메인 도메인을 사용하는 경우 | 메인 도메인을 쓸 때 복사할 호스트 값 예시 |

- **유형**: 드롭다운에서 `TXT`를 선택하세요.
- **데이터**: 두 번째로 나오는, 더 긴 TXT 레코드를 붙여넣으세요.

![DKIM 값을 입력한 Google Domains의 두 번째 TXT 레코드 양식](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243543480/original/SA3H2iuimeXJJUdD5n5KAwd7ZwCI3qt5gA.png?1659727710)

## MX 레코드 추가하기

**Create new record**(새 레코드 만들기)를 클릭한 뒤 다음과 같이 입력하세요.

- **Host name**(호스트 이름): 연결한 도메인에 따라 다음과 같이 입력하세요.`mg.companyname.com` → 호스트 이름은 `mg``replies.companyname.com` → 호스트 이름은 `replies`
  - 메인 도메인 → 호스트 이름은 `@`
- **유형**: 드롭다운에서 `MX`를 선택하세요.
- **데이터**: Google Domains에서는 MX 값 2개를 같은 레코드에 함께 추가할 수 있어요.
  1. `10 mxa.mailgun.org`를 복사해 붙여넣으세요.
  2. **+Add more to this record**(이 레코드에 값 추가)를 클릭하세요.
  3. `10 mxb.mailgun.org`를 복사해 붙여넣으세요.

![Mailgun 값 2개를 모두 입력한 Google Domains의 MX 레코드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243544215/original/laPv0qzJMIw-tvzuWSaNoZUh1BosRw4EOg.png?1659728081)

## CNAME 레코드 추가하기

**Create new record**(새 레코드 만들기)를 클릭한 뒤 다음과 같이 입력하세요.

- **Host name**(호스트 이름): 연결한 도메인에 따라 다음과 같이 입력하세요.`mg.companyname.com` → 호스트 이름은 `email.mg``replies.companyname.com` → 호스트 이름은 `email.replies`
  - 메인 도메인(`companyname.com`) → 호스트 이름은 `email`
- **유형**: 드롭다운에서 `CNAME`을 선택하세요.
- **데이터**: `mailgun.org`를 복사해 붙여넣으세요.

![Google Domains에서 완성한 CNAME 레코드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243543931/original/4TQk2kmsk4suUaSdEwDrhVPLhdT8fYRTiw.png?1659727913)

## DNS 확인하고 설정 마무리하기

1. DNS 레코드 5개를 모두 추가했다면 **저장**을 클릭하세요.
2. Mailgun으로 돌아가 **Verify DNS Settings**(DNS 설정 확인)를 클릭하세요.
3. 아직 초록색 체크 표시가 나오지 않는 레코드가 있다면 같은 버튼을 한 번 더 클릭하세요. DNS 전파에는 시간이 조금 걸릴 수 있어요.

![Mailgun의 DNS 설정 확인 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243544863/original/fZ4MWAp_hBYkuUM9L9YEuCRqwG5FLmD8Yw.png?1659728463)

## 다음 단계

모든 레코드가 인증되면 Mailgun API 키를 복사해 이메일 서비스 설정에 추가하세요.

그런 다음 대화에서 테스트 이메일을 보내 제대로 작동하는지 확인하세요.

## 자주 묻는 질문

### Google Domains에서는 MX 레코드가 왜 2개가 아니라 1개만 필요한가요?
Google Domains에서는 "+Add more to this record"로 한 MX 레코드에 값을 여러 개 넣을 수 있어요. 그래서 mxa.mailgun.org와 mxb.mailgun.org를 레코드 2개로 나누지 않고 하나의 레코드에 함께 넣어요.

### 첫 번째 레코드를 추가한 뒤에 저장을 누르면 안 되나요?
저장은 어느 시점에 해도 돼요. 다만 레코드 5개를 먼저 모두 추가하고 마지막에 한 번만 저장하는 편이 더 쉬워요. 저장하고 DNS 화면을 계속 다시 여는 것보다 편해요.

### 기존 Google Workspace나 Gmail 메일에 영향이 있나요?
Mailgun에 메인 도메인 대신 서브 도메인을 쓰고, 메인 도메인에 있는 기존 Google Workspace MX 레코드를 그대로 두면 영향이 없어요.

### Google Domains에서 DNS 전파에는 시간이 얼마나 걸리나요?
대개 빠르지만, 가끔 몇 시간이 걸릴 수 있어요. Mailgun에서 어떤 레코드가 아직 초록색으로 표시되지 않으면 잠시 기다렸다가 Verify DNS Settings를 다시 클릭하세요.

### MX 레코드의 우선순위 값은 얼마로 입력하나요?
mxa.mailgun.org와 mxb.mailgun.org 둘 다 10을 쓰세요. 값 바로 앞에 입력하며, 예를 들면 "10 mxa.mailgun.org"처럼 써요.

### 레코드 5개에 모두 초록색 체크 표시가 나온 뒤에는 무엇을 하나요?
Mailgun API 키를 복사해 이메일 서비스 설정에 추가하세요. 그런 다음 대화에서 테스트 이메일을 보내 발송이 잘 되는지 확인하세요.
