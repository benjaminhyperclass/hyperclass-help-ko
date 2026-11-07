---
원문: /support/solutions/articles/48001237513-godaddy-dedicated-sending-domain-setu-lc-email-
번역일: 2026-11-06
카테고리: 09-이메일
---

# GoDaddy에서 전용 발송 도메인 설정하기 (하이퍼클래스 이메일)

GoDaddy DNS를 사용해 하이퍼클래스 이메일에 전용 발송 도메인을 추가하고 인증하는 방법을 안내해요. DNS 레코드는 총 5개를 추가해요. TXT 레코드 2개, MX 레코드 2개, CNAME 레코드 1개예요.

GoDaddy는 다른 DNS 제공업체와 달리 레코드를 하나씩 저장해야 해요. 순서대로 따라 하면서, 다음 레코드를 추가하기 전에 매번 **저장**을 클릭하세요.

## 이메일 서비스에서 도메인 추가하기

1. 서브 계정에서 **설정 > 이메일 서비스 > 전용 도메인**으로 이동한 뒤 **도메인 추가**를 클릭하세요.

   ![설정 > 이메일 서비스 > 전용 도메인 > 도메인 추가로 이동하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292765242/original/jQLugI8wtvQRfs38XJDujiQd2QnIgjQqSA.gif)

2. 도메인 유형을 선택하세요. 도메인이 companyname.com이라면 루트 도메인이나 서브 도메인 중 하나를 전용 발송 도메인으로 등록할 수 있어요.
   - 메인 도메인(companyname.com): Google Workspace 등 다른 이메일 서비스에서 이미 쓰고 있지 않은 도메인이어야 해요.
   - **서브 도메인**: 루트 도메인 앞에 원하는 접두사를 붙여 입력하세요. 예를 들어 replies.companyname.com, support.companyname.com처럼요.

   {% hint style="info" %}
   루트 도메인에서 Google Workspace나 다른 이메일 서비스를 쓰고 있다면, 여기서 루트 도메인을 추가할 때 기존 MX 레코드와 충돌해요. 이 경우에는 서브 도메인을 사용하세요. 자세한 내용은 [Mailgun과 Google Apps에서 같은 도메인을 함께 쓸 수 있나요?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)를 참고하세요.
   {% endhint %}

3. 도메인 이름을 입력한 다음 **Add & Verify**(추가 및 인증)를 클릭하세요. 다음 화면에 추가해야 할 DNS 레코드 5개가 나타나요. 아래 단계에서 이 화면의 값을 복사해야 하니 탭을 닫지 말고 열어 두세요.

   ![추가 및 인증 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292766472/original/5TxDqQG542C3YtKLt6stGIAfwcbDmmcesg.png)

   ![추가할 DNS 레코드 5개가 표시된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293298198/original/xGMUZ9x0JoahqbofrVsYVWEjEF9LDDvsMQ.png)

{% hint style="info" %}
Mailgun에서 옮겨 오시나요? [Mailgun에서 하이퍼클래스로 발송 도메인을 옮기는 방법](dedicated-email-sending-domains-overview-setup.md)을 참고하세요.
{% endhint %}

## GoDaddy DNS 열기

새 브라우저 탭에서 [GoDaddy Domain Portfolio](https://dcc.godaddy.com/control/portfolio)에 로그인하세요. 그다음 아래 순서로 도메인의 DNS 편집기를 열어요.

1. 도메인 옆의 점 3개 메뉴를 클릭해 편집 옵션을 여세요.
2. **Edit DNS**(DNS 편집)를 선택하세요. 보이지 않으면 아래로 스크롤하세요.

   ![GoDaddy 도메인 포트폴리오에서 점 3개 메뉴를 클릭한 뒤 Edit DNS를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383735/original/cgJYei63pjBqxqUREcrgnMBHMYjimo-FBA.png)

{% hint style="info" %}
GoDaddy는 DNS 레코드마다 **저장**을 클릭해야 해요. 레코드를 여러 개 입력한 뒤 한 번에 저장할 수 없어요. 아래 섹션을 하나씩 끝까지 마친 뒤 다음 섹션으로 넘어가세요.
{% endhint %}

## DNS 레코드 5개 추가하기

아래 5개 섹션에서 레코드를 하나씩 추가해요. **추가**를 클릭하고 항목을 입력한 다음, 다음 레코드를 시작하기 전에 **저장**을 클릭하세요.

## 첫 번째 TXT 레코드(SPF) 추가하기

1. GoDaddy DNS 편집기에서 **추가**를 클릭해 새 레코드를 만드세요.

   ![GoDaddy의 새 DNS 레코드 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383808/original/H6np93jJkfJVHPLdTaLTLmRgo2mB_c6JRA.png)

   ![GoDaddy의 새 DNS 레코드 입력 폼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284384102/original/N9CKo-PVMexPIY_hCkU3qz4FgWu5LCmiKw.png)

2. **Type**(유형) 메뉴에서 `TXT`를 선택하세요.
3. **Host**(호스트)에는 루트 도메인을 빼고 서브 도메인 접두사만 입력하세요. GoDaddy가 루트 도메인을 자동으로 붙여 줘요.
   - lc.companyname.com을 설정한다면 `lc` 입력
   - replies.companyname.com을 설정한다면 `replies` 입력
   - 루트 도메인 companyname.com을 설정한다면 `@` 입력

   ![GoDaddy의 호스트 입력란. 서브 도메인 접두사만 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292767095/original/U0Uh3wPJ901NXe3E0tAj8DzwIys4kzuXFA.png)

4. **TXT Value**(TXT 값)는 누구나 같아요. 아래 SPF 레코드 값을 그대로 붙여 넣으세요.

   ```
   v=spf1 include:mailgun.org ~all
   ```

   ![SPF TXT 레코드를 입력한 GoDaddy 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292767368/original/n_1Mu3Av0f2EYEvZG9iBeM-knKybDa2RPg.png)

5. **저장**을 클릭해 이 레코드를 확정하세요.

   ![GoDaddy에서 첫 번째 TXT 레코드를 저장하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292760158/original/whQOMoD2hGeHEbJgNmnIm1fdwCQhF1Mz9g.png)

## 두 번째 TXT 레코드(DKIM) 추가하기

{% hint style="warning" %}
두 번째 TXT 레코드의 호스트 이름과 값은 도메인마다 달라요. 이 문서의 스크린샷에 나온 값을 쓰지 말고, 하이퍼클래스의 DNS 레코드 화면에서 두 값을 직접 복사하세요.
{% endhint %}

1. GoDaddy DNS 편집기에서 **추가**를 클릭해 새 레코드를 만드세요.

   ![GoDaddy의 새 DNS 레코드 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383808/original/H6np93jJkfJVHPLdTaLTLmRgo2mB_c6JRA.png)

   ![DKIM용 새 TXT 레코드 입력 폼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284384815/original/FlVncn3L0vrYLOa9P1vI4X9Pt16_Q-FUOg.png)

2. **Type**에서 `TXT`를 선택하세요.
3. **Host**에는 하이퍼클래스 DNS 레코드 화면의 두 번째 TXT 호스트 이름에서 루트 도메인 앞부분만 복사해 붙여 넣으세요. 루트 도메인 자체는 넣지 않아요.

   ![DKIM 호스트 이름. 강조 표시된 부분만 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292768165/original/xN_6s9kcDwkztqKLFUlRtJJJlE7M_GD54w.png)

   | 상황 | 호스트로 복사할 값 | 예시 |
   | --- | --- | --- |
   | 서브 도메인 사용 | `mx._domainkey.helpdesk` | 서브 도메인 DKIM 호스트 이름 예시 |
   | 루트 도메인 사용 | `mailo._domainkey` | 루트 도메인 DKIM 호스트 이름 예시 |

4. **TXT Value**에는 하이퍼클래스 DNS 레코드 화면에 있는 두 번째 TXT 레코드 값(강조 표시된 긴 값) 전체를 붙여 넣으세요. 이 값은 도메인마다 달라요.

   ![두 번째 TXT 값. 강조 표시된 긴 값을 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292768735/original/cUIeRsQGsIF81ZCW8a-cj-v7iGlndoLiKw.png)

5. **저장**을 클릭해 이 레코드를 확정하세요.

   ![GoDaddy에서 두 번째 TXT 레코드를 저장하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292760542/original/dHr8OmpttMWN0VMOkXNfAi5G8Ou_hQUiVQ.png)

## 첫 번째 MX 레코드(mxa.mailgun.org) 추가하기

{% hint style="warning" %}
루트 도메인에서 Google Workspace로 메일을 주고받고 있다면, 루트 도메인에 MX 레코드를 추가하는 순간 기존 이메일이 작동하지 않아요. 하이퍼클래스 이메일에는 서브 도메인을 사용하세요. 자세한 내용은 [Mailgun과 Google Apps에서 같은 도메인을 함께 쓸 수 있나요?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)를 참고하세요.
{% endhint %}

1. GoDaddy DNS 편집기에서 **추가**를 클릭해 새 레코드를 만드세요.

   ![GoDaddy의 새 DNS 레코드 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383808/original/H6np93jJkfJVHPLdTaLTLmRgo2mB_c6JRA.png)

   ![GoDaddy의 MX 레코드 입력 폼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385352/original/nEr12soR47bfSHjwNBS075J4Dr_Fd3jqUQ.png)

2. **Type**에서 `MX`를 선택하세요.
3. **Host**에는 TXT 레코드와 같은 방식으로 서브 도메인 접두사만 입력하세요.
   - lc.companyname.com → `lc` 입력
   - replies.companyname.com → `replies` 입력
   - 루트 도메인 companyname.com → `@` 입력

   ![MX 레코드 호스트 입력란](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292769400/original/UKCDaverUyyLQpklJb1Jxf15cmXUamb0VQ.png)

4. **Points To**(연결 대상)는 누구나 같아요. 아래 값을 붙여 넣으세요.

   ```
   mxa.mailgun.org
   ```

   ![MX 연결 대상 입력란. mxa.mailgun.org](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292769476/original/xvdURibcJ1cBG-y1bc5ngzqpnSNCdRALmA.png)

5. **Priority**(우선순위)도 누구나 같아요. `10`으로 설정하세요. 어떤 도메인을 설정하든 같은 값이에요.

   ![우선순위를 10으로 설정한 MX 레코드 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292769807/original/1wmkWSsWNVmgj5fdec3hG0a9KbuWBxPhnA.png)

6. **저장**을 클릭해 이 레코드를 확정하세요.

   ![GoDaddy에서 첫 번째 MX 레코드를 저장하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292761314/original/r1sCz03HEK4u2NnzjZxK6TRXfTixx9qJpg.png)

## 두 번째 MX 레코드(mxb.mailgun.org) 추가하기

1. GoDaddy DNS 편집기에서 **추가**를 클릭해 새 레코드를 만드세요.

   ![GoDaddy의 새 DNS 레코드 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383808/original/H6np93jJkfJVHPLdTaLTLmRgo2mB_c6JRA.png)

   ![GoDaddy의 두 번째 MX 레코드 입력 폼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385634/original/wYOidp2P0QPZbDYtP60qHBim2dahkciEMw.png)

2. **Type**에서 `MX`를 선택하세요.
3. **Host**에는 첫 번째 MX 레코드와 같이 서브 도메인 접두사만 입력하세요.
   - lc.companyname.com → `lc` 입력
   - replies.companyname.com → `replies` 입력
   - 루트 도메인 companyname.com → `@` 입력

   ![두 번째 MX 레코드 호스트 입력란](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292770778/original/1YS3yCM8yCVGkdwvDlET1DiZvGimSLDnCA.png)

4. **Points To**는 누구나 같아요. 아래 값을 붙여 넣으세요.

   ```
   mxb.mailgun.org
   ```

   ![두 번째 MX 연결 대상 입력란. mxb.mailgun.org](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292770829/original/lo34kUcHgQ_jNcW7DaT0x3DUPiEu1AubLw.png)

5. **Priority**를 `10`으로 설정하세요.

   ![우선순위를 10으로 설정한 두 번째 MX 레코드 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292770920/original/Fw8uyagc8TOy9xxMDsHe3atzfkyEu3QnKw.png)

6. **저장**을 클릭해 이 레코드를 확정하세요.

   ![GoDaddy에서 두 번째 MX 레코드를 저장하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292770952/original/JOROtyvxFT7kuhgJS6UKxsSCMfE6_5IS8A.png)

## CNAME 레코드 추가하기

1. GoDaddy DNS 편집기에서 **추가**를 클릭해 새 레코드를 만드세요.

   ![GoDaddy의 새 DNS 레코드 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284383808/original/H6np93jJkfJVHPLdTaLTLmRgo2mB_c6JRA.png)

   ![GoDaddy의 CNAME 레코드 입력 폼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284385821/original/Z_H7aEV9Fj-ulIPJTmhnmpgRUG-CWVntNA.png)

2. **Type**에서 `CNAME`을 선택하세요.
3. **Host**는 하이퍼클래스 DNS 레코드 화면에서 확인해 복사하세요. CNAME 호스트 이름은 `email.` 뒤에 서브 도메인 접두사가 붙는 형태예요. 화면에서 루트 도메인 앞부분만 복사하면 돼요.
   - lc.companyname.com → `email.lc` 입력
   - replies.companyname.com → `email.replies` 입력
   - 루트 도메인 companyname.com → `email` 입력

   ![GoDaddy의 CNAME 호스트 입력란](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292771034/original/ey4vFuccg-PcVOVNEqKhNZR24VOtPxjuCA.png)

4. **Points To**는 누구나 같아요. 아래 값을 붙여 넣으세요.

   ```
   mailgun.org
   ```

   ![CNAME 연결 대상 입력란. mailgun.org](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292771083/original/z9S5z7FviH8eq6xc6sXjhiBRLNZCCKQ5LA.png)

5. **저장**을 클릭해 이 레코드를 확정하세요.

   ![GoDaddy에서 CNAME 레코드를 저장하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292761511/original/Q-pg6CdROQ4wXlfIoOIOkvDgY1yJdVN1Ug.png)

   ![GoDaddy에 DNS 레코드 5개가 모두 저장된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284386112/original/kW6t3s2sXMcjCylHMSgGSwJy8HDwA4momQ.png)

{% hint style="info" %}
DNS 레코드 5개를 GoDaddy에 모두 추가했어요. 이제 다음 단계에서 도메인을 인증하세요.
{% endhint %}

## 도메인 인증하기

하이퍼클래스 탭으로 돌아가 **이메일 서비스** 화면에서 **도메인 인증**을 클릭하세요.

![이메일 서비스 화면의 도메인 인증 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292771391/original/DSHng9iQ27K8gMmkLYLkL7mpGKnMfyFSkA.png)

{% hint style="info" %}
일부 레코드가 아직 초록색으로 바뀌지 않았나요? DNS 전파에 몇 분 걸릴 수 있어요. 잠시 기다린 뒤 **도메인 인증**을 다시 클릭하세요. 10분이 넘어도 인증되지 않은 레코드가 있다면 GoDaddy로 돌아가 각 레코드의 Type, Host, 값이 맞는지 확인하세요.
{% endhint %}

{% hint style="info" %}
모든 레코드에 초록색 체크 표시가 나타나면 전용 발송 도메인이 활성화된 거예요. 다음으로 하이퍼클래스 이메일 전용 발송 도메인의 SSL 인증서가 제대로 설정되어 있는지 확인하세요.

그런 다음 테스트 이메일을 보내 모든 것이 정상 작동하는지 확인하세요. 대화에서 테스트 이메일을 보낼 수 있어요.
{% endhint %}

## 자주 묻는 질문

### GoDaddy에서는 왜 레코드마다 저장해야 하나요?
GoDaddy의 DNS 편집기는 레코드를 한 번에 하나씩 저장해요. 여러 레코드를 쌓아 두었다가 한꺼번에 저장하게 해 주는 다른 제공업체와 달리, GoDaddy는 레코드마다 따로 확정해야 해요. 순서대로 따라 하면서 레코드를 추가할 때마다 저장을 클릭하세요.

### 이미 Google Workspace를 쓰고 있는 루트 도메인을 그대로 쓸 수 있나요?
아니요. 이미 Google Workspace에서 쓰고 있는 루트 도메인에 MX 레코드를 추가하면 기존 이메일 설정과 충돌해요. 하이퍼클래스 이메일에는 서브 도메인(예: replies.companyname.com)을 사용하세요.

### MX 레코드를 왜 하나가 아니라 두 개 추가하나요?
MX 레코드 두 개(mxa.mailgun.org, mxb.mailgun.org)는 서로 보완하는 역할을 해요. 한쪽 메일 서버를 일시적으로 쓸 수 없을 때 다른 쪽이 메시지를 받을 수 있어요. 두 레코드 모두 우선순위를 10으로 추가하세요. GoDaddy에서는 MX 레코드도 하나씩 따로 추가하고 저장해야 해요.

### 두 번째 TXT 레코드의 호스트 이름이 예시와 달라요.
두 번째 TXT 레코드는 도메인마다 새로 만들어지는 DKIM 키예요. 호스트 이름과 긴 값은 계정마다 항상 달라요. 이 문서의 스크린샷에 나온 값을 쓰지 말고, 항상 내 DNS 레코드 화면에서 두 값을 직접 복사하세요.

### GoDaddy에서 DNS 전파에는 시간이 얼마나 걸리나요?
GoDaddy DNS 변경 사항은 보통 몇 분에서 1시간 안에 전파돼요. 10분이 지나도 레코드가 인증되지 않는다면 문제를 점검하기 전에 조금 더 기다려 보세요. 드물게 전파가 모두 끝나기까지 최대 48시간이 걸릴 수도 있어요.

### 전용 발송 도메인과 공유 발송 도메인은 어떻게 다른가요?
공유 도메인은 여러 계정이 함께 쓰기 때문에 발신자 평판도 다른 계정과 합쳐져요. 전용 도메인은 내 계정만 쓰는 도메인이라서, 시간이 지나며 쌓이는 이메일 전달률 평판을 직접 관리할 수 있어요.

### 도메인은 인증됐는데 이메일이 전달되지 않아요. 무엇을 확인해야 하나요?
먼저 **대화**에서 테스트 이메일을 보내 기본 발송이 되는지 확인하세요. 그다음 전용 발송 도메인의 SSL 인증서가 활성화되어 있는지 확인하세요. 문제가 계속되면 GoDaddy의 DNS 레코드 5개에서 Host나 Points To 입력란에 오타가 없는지 하나씩 살펴보세요.

### 서브 계정마다 다른 전용 도메인을 설정할 수 있나요?
네. 서브 계정마다 각자의 전용 발송 도메인을 둘 수 있어요. 도메인마다 DNS 레코드 5개를 한 세트로 GoDaddy에 따로 추가하고 인증해야 해요.
