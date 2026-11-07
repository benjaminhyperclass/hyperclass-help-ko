---
원문: https://help.gohighlevel.com/support/solutions/articles/155000000568-siteground-dedicated-sending-domain-setup-lc-email-
번역일: 2026-11-06
카테고리: 09-이메일
---

# Siteground에서 전용 발신 도메인 설정하기 (하이퍼클래스 이메일)

Siteground의 DNS Zone Editor에서 DNS 레코드 5개를 추가해 하이퍼클래스 이메일의 전용 발신 도메인을 인증하는 방법을 안내해요. TXT 레코드 2개, MX 레코드 2개, CNAME 레코드 1개를 추가해요.

## 시작하기 전에

기본 도메인(예: companyname.com)을 쓸지, 서브 도메인(예: replies.companyname.com)을 쓸지 먼저 정하세요. 기본 도메인을 이미 Google Workspace나 다른 메일 서비스에서 쓰고 있다면 반드시 서브 도메인을 써야 해요.

## 도메인 추가하고 인증 시작하기

### 1. 전용 도메인 설정 화면으로 이동하기

1. 서브 계정에서 **설정 > 이메일 서비스 > 전용 도메인 > 도메인 추가**로 이동하세요.

   ![설정 > 이메일 서비스 > 전용 도메인 > 도메인 추가로 이동하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292765242/original/jQLugI8wtvQRfs38XJDujiQd2QnIgjQqSA.gif?1681496688)

### 2. 기본 도메인과 서브 도메인 중 선택하기

도메인이 companyname.com이라면 기본 도메인으로 설정할 수도 있고, 서브 도메인으로 설정할 수도 있어요.

- 기본 도메인: 기본 도메인을 추가하면, 그 도메인을 Google Workspace나 다른 이메일 서비스와 동시에 쓸 수 없어요.
- 서브 도메인: 루트 도메인 앞에 원하는 이름을 붙여요. 예를 들면 replies.companyname.com, support.companyname.com이에요. 루트 도메인을 이미 이메일에 쓰고 있다면 이 방법을 권장해요.

{% hint style="warning" %}
기본 도메인의 수신 이메일에 Google Workspace(Gmail)를 쓰고 있다면 여기서는 반드시 서브 도메인을 써야 해요. 그렇지 않으면 Google Workspace의 MX 레코드와, 곧 추가할 Mailgun MX 레코드가 충돌해요.
{% endhint %}

### 3. Add & Verify 클릭하기

1. 도메인 또는 서브 도메인 이름을 입력하고 **Add & Verify**(추가 및 인증)를 클릭하세요.

   ![추가 및 인증 버튼 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030769485/original/Q46amTmsqcDKAnWZRyL8QCC1l7hdpWCLCg.jpg?1723215212)

다음 화면에 추가해야 할 DNS 레코드 5개가 나타나요. 이후 단계에서 계속 참고해야 하니 이 화면을 닫지 말고 열어 두세요.

![추가해야 할 DNS 레코드 5개가 표시된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030769518/original/u0y6nwg71SG7K_cEFAXEO8VhBAzeldaGQA.jpg?1723215260)

아래 단계에서 이 화면의 값을 복사하게 되니 열어 둔 채로 진행하세요.

## 첫 번째 TXT 레코드 (SPF)

1. [Siteground](https://login.siteground.com/login?lang=en)에 로그인한 뒤 **Site Tools > Domain > DNS Zone Editor**로 이동하세요.

   ![Siteground의 Site Tools > Domain > DNS Zone Editor 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030769548/original/VsNojWfnrB6J31RPe6Kf-eYmW7DBngqqlQ.jpg?1723215298)

2. **Create New Record** 섹션에서 아래 순서대로 입력하세요.

   ![Siteground DNS Zone Editor의 Create New Record 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030780106/original/bHbrF0bUz804hradJsT9OgCLJPXR8Qxiag.jpg?1723224477)

   1. **TXT** 탭을 클릭하세요.
   2. **Name** 필드를 입력하세요. 값은 사람마다 달라요. 루트 도메인은 넣지 마세요. 도메인에서 서브 도메인 부분만 입력해요.
      - lc.companyname.com을 설정한다면 Name에 `lc`를 입력하세요.
      - replies.companyname.com을 설정한다면 Name에 `replies`를 입력하세요.
      - 기본 도메인(companyname.com)을 설정한다면 Name에 `@`를 입력하거나 비워 두세요.

      ![Siteground 첫 번째 TXT 레코드의 Name 필드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030780154/original/LirZym0_7wm9fj29hWQHDt2TXRZOmWAQUQ.jpg?1723224534)

   3. **Value** 필드를 입력하세요. 값은 모든 사용자가 같아요. 아래 값을 그대로 붙여 넣으세요.

      ```
      v=spf1 include:mailgun.org ~all
      ```

      ![첫 번째 TXT 레코드 Value 필드에 SPF 값을 입력한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030780181/original/_hL8idOQ87Q9OiHkGuFyrBAmALbUCfdtAg.jpg?1723224576)

   4. **Create**를 클릭하세요.

## 두 번째 TXT 레코드 (DKIM)

1. **+ Add Record**를 다시 클릭해 새 Create New Record 폼을 여세요.

   ![+ Add Record를 클릭해 두 번째 DNS 레코드를 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030780286/original/-_m54mJDcyCoz2qwiphfIQjUELRRPGy2TQ.jpg?1723224707)

2. **TXT** 탭을 클릭하세요.
3. **Name** 필드를 입력하세요. 값은 사람마다 달라요. 루트 도메인은 넣지 마세요. 하이퍼클래스의 DNS 레코드 화면으로 돌아가 두 번째 TXT 레코드의 호스트 이름을 복사하세요. 루트 도메인 앞부분까지만 복사하고, **companyname.com** 부분은 빼고 붙여 넣어야 해요.

   ![Siteground 두 번째 TXT 레코드의 호스트 이름 필드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030780352/original/y-S6ROHWlFNZIPWbWP35TLikz7DU-x5SBg.jpg?1723224751)

   {% hint style="info" %}
   두 번째 TXT 레코드의 호스트 이름과 값은 계정마다 달라요. DNS 레코드 화면에 표시된 값을 그대로 복사하세요.
   {% endhint %}

   예시예요. 강조 표시된 부분만 복사하세요.

   | 상황 | Siteground에 입력할 호스트 이름 | 예시 스크린샷 |
   | --- | --- | --- |
   | 서브 도메인 (예: helpdesk.companyname.com) | mx.\_domainkey.helpdesk | 서브 도메인 DKIM 예시 |
   | 기본 도메인 (companyname.com) | mailo.\_domainkey | 기본 도메인 DKIM 예시 |

4. **Value** 필드를 입력하세요. 값은 계정마다 고유해요. 하이퍼클래스로 돌아가 두 번째 TXT 레코드에 표시된 값(아래 이미지에서 강조된 부분)을 복사해 Siteground의 Value 필드에 붙여 넣으세요.

   ![하이퍼클래스 DNS 화면에서 강조된 두 번째 TXT 레코드 값](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030780383/original/HdqP4IVZly9D-b8XMoSreStXhxpKOBhmvg.jpg?1723224827)

5. **Create**를 클릭하세요.

## 첫 번째 MX 레코드 (mxa.mailgun.org)

1. **+ Add Record**를 클릭해 새 폼을 여세요. 이번에는 **MX** 탭을 클릭하고 **Add your own MX records**(직접 MX 레코드 추가)를 선택하세요.

   ![MX 탭을 클릭하고 Add your own MX records를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030780422/original/rNjjKaWuMefXrQn3wNTgUYDpvKK7OsQibA.jpg?1723224862)
   ![Add your own MX records를 선택한 MX 레코드 폼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030781114/original/Wr1IYksYWNCM4dmafAALzCOKd5u-UHIIRg.jpg?1723225787)

2. **Name** 필드를 입력하세요. 값은 사람마다 달라요. 위 TXT 레코드와 같은 방식으로 입력해요.
   - lc.companyname.com이라면 Name에 `lc`를 입력하세요.
   - replies.companyname.com이라면 Name에 `replies`를 입력하세요.
   - 기본 도메인(companyname.com)이라면 Name에 `@`를 입력하세요.

   ![첫 번째 MX 레코드의 Name 필드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030782341/original/EoVTlF-5tjzN0euBbaIAnTPzyOadJO6xnw.jpg?1723228044)

3. **Priority** 필드에 `10`을 입력하세요. 모든 사용자가 같아요.

   ![Priority를 10으로 입력한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030782362/original/S3zPWDAvVfLvcHd18dzny8F2chlD-k-McA.jpg?1723228108)

4. **Destination** 필드에 아래 값을 붙여 넣으세요. 모든 사용자가 같아요.

   ```
   mxa.mailgun.org
   ```

   ![Destination 필드에 mxa.mailgun.org를 입력한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030782390/original/dCrujp8-torR3KCkqHj9RCUxV9T4IpP4fw.jpg?1723228150)

5. **Create**를 클릭하세요.

## 두 번째 MX 레코드 (mxb.mailgun.org)

1. **+ Add Record**를 다시 클릭하세요. 두 번째 MX 레코드는 첫 번째와 같고, Destination만 **mxb**로 바뀌어요.

   ![두 번째 MX 레코드 폼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030782407/original/STd7r76SSYxjjEueEZ71PlcaGBOkTHo5Jw.jpg?1723228189)

2. **Name** 필드를 입력하세요. 값은 사람마다 달라요. 첫 번째 MX 레코드와 같은 방식이에요.
   - lc.companyname.com이라면 Name에 `lc`를 입력하세요.
   - replies.companyname.com이라면 Name에 `replies`를 입력하세요.
   - 기본 도메인이라면 Name에 `@`를 입력하세요.

   ![두 번째 MX 레코드의 Name 필드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030782413/original/HGLSaAWGMgGCvPBFzdZi2p5c6a2196-KMQ.jpg?1723228228)

3. **Priority** 필드에 `10`을 입력하세요. 모든 사용자가 같아요.

   ![두 번째 MX 레코드의 Priority를 10으로 입력한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030783105/original/TBBrnlPpoLpeqs517AvUL65F5TN5oV6qbQ.jpg?1723229730)

4. **Destination** 필드에 아래 값을 붙여 넣으세요. 모든 사용자가 같아요.

   ```
   mxb.mailgun.org
   ```

   ![Destination 필드에 mxb.mailgun.org를 입력한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030783114/original/gmZ3PYwnHX5SoqOoa1c3TPV-FvlUOwQM6A.jpg?1723229761)

5. **Create**를 클릭하세요.

## CNAME 레코드

1. **+ Add Record**를 마지막으로 한 번 더 클릭하세요.

   ![Siteground DNS Zone Editor의 CNAME 레코드 폼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030783142/original/PpLAFvnX8fpVSkGYfge-jqVsPe-05bhTMA.jpg?1723229788)

2. **CNAME** 탭을 클릭하세요.
3. **Name** 필드를 입력하세요. 값은 사람마다 달라요. 루트 도메인은 복사하지 마세요. 하이퍼클래스로 돌아가 CNAME 호스트 이름을 복사하되, 루트 도메인 부분은 빼세요.
   - lc.companyname.com이라면 Name에 `email.lc`를 입력하세요.
   - replies.companyname.com이라면 Name에 `email.replies`를 입력하세요.
   - 기본 도메인(companyname.com)이라면 Name에 `email`을 입력하세요.

   ![Siteground CNAME 레코드의 Name 필드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030783146/original/NzlqSBBFNxO15QArOp7-b2YQT2e5HoEqmg.jpg?1723229819)

4. **Resolves To** 필드에 아래 값을 입력하세요. 모든 사용자가 같아요.

   ```
   mailgun.org
   ```

   ![Resolves To 필드에 mailgun.org를 입력한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030783164/original/pajiIQ0wDsE7fPob2fz6xdduz_LfP-iKMg.jpg?1723229856)

5. **Create**를 클릭하세요.

   ![Siteground에 DNS 레코드 5개를 모두 추가한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030783184/original/F1CbuTsrXYX_Jc1kpb5rRqS82VtyueNFiQ.jpg?1723229890)

## 하이퍼클래스에서 인증하기

DNS 레코드 5개를 모두 추가했어요. 이제 하이퍼클래스로 돌아가 인증하세요.

1. 하이퍼클래스로 돌아가 **Verify DNS Settings**(DNS 설정 인증)를 클릭하세요.

   ![하이퍼클래스의 DNS 설정 인증 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030783203/original/X-TDph4fv6CxTwGhAoTVFfFqut48mxYVKQ.jpg?1723229933)

{% hint style="info" %}
인증한 뒤에도 일부 레코드에 빨간 ✗가 보이면 **도메인 인증**을 다시 클릭하세요. DNS 변경이 완전히 반영되기까지 최대 24~48시간이 걸릴 수 있어요. Siteground에서는 보통 몇 분 안에 반영돼요.
{% endhint %}

## 다음 단계

모든 레코드에 초록색 체크 표시가 나타나면 전용 발신 도메인 SSL 인증서(하이퍼클래스 이메일) 문서를 보고 SSL 인증서가 올바르게 설정되었는지 확인하세요.

그런 다음 **대화**에서 테스트 이메일을 보내 처음부터 끝까지 정상 작동하는지 확인하세요.

## 자주 묻는 질문

### 전용 발신 도메인이 꼭 필요한가요? 공용 도메인을 써도 되나요?

하이퍼클래스 공용 도메인을 쓰면 DNS 설정 없이 이메일을 보낼 수 있어요. 다만 전용 발신 도메인을 쓰면 이메일이 공용 도메인이 아닌 내 도메인에서 온 것처럼 보여서 이메일 도달률과 브랜드 신뢰도가 높아져요. 발신 평판도 직접 관리할 수 있어요.

### 회사 이메일로 Google Workspace를 쓰고 있어요. 기본 도메인(예: companyname.com)을 그대로 써도 되나요?

아니요. Google Workspace(또는 다른 메일 서비스)와 하이퍼클래스 이메일에 필요한 Mailgun MX 레코드를 같은 도메인에서 함께 쓸 수 없어요. 기본 도메인에 이미 Google Workspace MX 레코드가 있다면 서브 도메인(예: **replies.companyname.com**)을 쓰세요.

### Siteground에 레코드를 추가한 뒤 DNS가 반영되기까지 얼마나 걸리나요?

Siteground 안에서 관리하는 레코드는 보통 몇 분 안에 반영돼요. 다만 전 세계에 완전히 반영되려면 경우에 따라 24~48시간이 걸릴 수 있어요. 레코드를 추가한 직후 인증에 실패하면 15~30분 기다린 뒤 **도메인 인증**을 다시 클릭하세요.

### MX 레코드가 왜 2개(mxa, mxb) 필요한가요?

두 MX 레코드(**mxa.mailgun.org**, **mxb.mailgun.org**)는 Mailgun의 수신 이메일 라우팅을 이중으로 받쳐 줘요. 한쪽 서버를 쓸 수 없으면 이메일이 자동으로 다른 쪽을 거쳐 전달돼요. 두 레코드 모두 우선순위(Priority)는 10이에요.

### 한참 기다렸는데도 일부 DNS 레코드에 빨간 ✗가 떠요. 어떻게 하나요?

Name/Hostname 필드에 루트 도메인을 넣지 않았는지 다시 확인하세요. 예를 들어 도메인이 **replies.companyname.com**이라면 TXT와 MX 레코드의 Name에는 **replies.companyname.com**이 아니라 **replies**만 입력해야 해요. 또 두 번째 TXT 값을 하이퍼클래스에서 복사할 때 공백이 섞이지 않고 그대로 들어갔는지도 확인하세요.

### 서브 도메인 이름은 아무거나 써도 되나요? 정해진 이름이 있나요?

원하는 서브 도메인 이름을 자유롭게 쓸 수 있어요. 흔히 **replies**, **mail**, **lc**, **send**, **support** 등을 써요. 서브 도메인 이름 자체는 이메일 도달률에 영향을 주지 않아요. 업무 방식에 맞는 이름을 고르세요.

### 전용 발신 도메인으로 바꾸면 연락처가 차이를 느끼나요?

연락처에게는 이메일이 하이퍼클래스 공용 도메인이 아니라 내 도메인(예: noreply@replies.companyname.com)에서 온 것처럼 보여요. 그래서 오픈율과 신뢰도가 높아질 수 있어요. 하이퍼클래스 안에서 이메일을 보내는 방법은 달라지지 않아요.

### 서브 계정마다 이 과정을 반복해야 하나요?

네. 전용 발신 도메인은 서브 계정별로 설정해요. 여러 서브 계정에 전용 도메인이 필요하면 서브 계정마다 다른 서브 도메인(예: **team1.companyname.com**, **team2.companyname.com**)을 쓰면 돼요. 필요하다면 서로 다른 서브 계정에 같은 서브 도메인을 쓸 수도 있어요.
