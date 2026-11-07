---
원문: https://help.gohighlevel.com/support/solutions/articles/48001240481-google-dedicated-sending-domain-setup-lc-email-
번역일: 2026-11-06
카테고리: 09-이메일
---

# Google Domains로 전용 발송 도메인 설정하기 (하이퍼클래스 이메일)

Google Domains를 DNS 제공업체로 쓰고 있을 때, 하이퍼클래스 이메일에 전용 발송 도메인을 추가하고 인증하는 방법을 안내해요. DNS 레코드는 모두 5개를 추가해요. TXT 레코드 2개, MX 레코드 2개, CNAME 레코드 1개예요.

루트 도메인(`companyname.com`)이나 서브 도메인(예: `replies.companyname.com`) 중 하나를 설정할 수 있어요. 루트 도메인의 이메일에 이미 Google Workspace를 쓰고 있다면 꼭 서브 도메인을 사용해야 해요.

## 1. 이메일 서비스에서 도메인 추가하기

1. 서브 계정에서 **설정 > 이메일 서비스 > 전용 도메인**으로 이동한 뒤 **+ 도메인 추가**를 클릭하세요.

   ![설정 > 이메일 서비스 > 전용 도메인 > 도메인 추가로 이동하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292765242/original/jQLugI8wtvQRfs38XJDujiQd2QnIgjQqSA.gif)

2. 도메인 유형을 고르세요. 도메인이 `companyname.com`이라면 루트 도메인이나 서브 도메인 중 하나를 전용 발송 도메인으로 등록할 수 있어요.
   - **Main domain**(메인 도메인): `companyname.com`을 그대로 써요. Google Workspace 등 다른 이메일 서비스에서 이미 쓰는 도메인이면 안 돼요.
   - **서브 도메인**: 루트 도메인 앞에 원하는 접두어를 붙여 입력해요. 예를 들면 `replies.companyname.com`, `support.companyname.com`이에요.

   {% hint style="info" %}
   루트 도메인(예: user@companyname.com)에서 Google Workspace로 메일을 주고받고 있다면 여기서는 서브 도메인을 사용해야 해요. 루트 도메인을 추가하면 기존 Google Workspace MX 레코드와 충돌해요. 자세한 내용은 [Mailgun과 Google Apps에서 같은 도메인을 함께 써도 되나요?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)를 참고하세요.
   {% endhint %}

3. 도메인 이름을 입력한 뒤 **Add & Verify**(추가 및 인증)를 클릭하세요. 다음 화면에 추가해야 할 DNS 레코드 5개가 표시돼요. 아래 단계에서 이 화면의 값을 복사해 쓰니 탭을 닫지 말고 열어 두세요.

   ![Add & Verify 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292766472/original/5TxDqQG542C3YtKLt6stGIAfwcbDmmcesg.png)
   ![추가할 DNS 레코드 5개가 표시된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293298198/original/xGMUZ9x0JoahqbofrVsYVWEjEF9LDDvsMQ.png)

{% hint style="info" %}
Mailgun에서 옮겨 오시나요? [Mailgun에서 하이퍼클래스로 발송 도메인 옮기기](dedicated-email-sending-domains-overview-setup.md)를 참고하세요.
{% endhint %}

## 2. Google Domains DNS 열기

새 브라우저 탭에서 [domains.google.com](https://domains.google.com/)에 로그인하세요. 설정할 도메인을 클릭한 뒤 왼쪽 패널에서 **DNS**를 클릭하세요. 레코드 5개를 모두 이곳에서 추가해요.

![Google Domains DNS 패널](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48299273463/original/nvtEdnUCOa_aEuQG29TmvxEc8zT-TEDQbw.png)

{% hint style="info" %}
레코드를 하나 추가할 때마다 **Save**(저장)를 클릭하지 마세요. 5개를 모두 추가한 뒤 마지막에 한 번만 저장하세요.
{% endhint %}

{% hint style="info" %}
3~6번 항목을 따라 TXT 레코드 2개, MX 레코드 2개, CNAME 레코드 1개를 추가해요. 5개를 모두 입력하기 전에는 저장하지 마세요.
{% endhint %}

## 3. 첫 번째 TXT 레코드(SPF) 추가하기

Google Domains에서 **Create new record**(새 레코드 만들기)를 클릭하고 아래 항목을 채우세요.

**Host Name**(호스트 이름)에는 루트 도메인을 빼고 서브 도메인 접두어만 입력하세요. Google Domains가 루트 도메인을 자동으로 붙여 줘요.

- `lc.companyname.com`을 설정한다면 `lc`를 입력해요.
- `replies.companyname.com`을 설정한다면 `replies`를 입력해요.
- 루트 도메인 `companyname.com`을 설정한다면 `@`를 입력해요.

![Google Domains의 호스트 이름 입력란 — 서브 도메인 접두어만 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48299273966/original/QyOvl4oeTZwm5vxk_Qr4E9axVI_3VmGQbQ.png)

**Type**(유형) 드롭다운에서 `TXT`를 선택하세요.

**Data**(데이터)에는 모든 사용자가 같은 값을 쓰며, 아래 SPF 레코드 값을 그대로 붙여 넣으세요.

```
v=spf1 include:mailgun.org ~all
```

![Google Domains에 SPF TXT 레코드를 입력한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292767368/original/n_1Mu3Av0f2EYEvZG9iBeM-knKybDa2RPg.png)

{% hint style="info" %}
아직 **Save**를 클릭하지 마세요. **Create new record**를 클릭해 두 번째 TXT 레코드로 넘어가세요.
{% endhint %}

## 4. 두 번째 TXT 레코드(DKIM) 추가하기

{% hint style="warning" %}
두 번째 TXT 레코드의 호스트 이름과 값은 도메인마다 달라요. 두 값 모두 하이퍼클래스의 DNS 레코드 화면에서 직접 복사하세요. 이 문서의 스크린샷에 나온 값은 쓰지 마세요.
{% endhint %}

**Type**(유형) 드롭다운에서 `TXT`를 선택하세요.

![유형 드롭다운에서 TXT를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48299274267/original/tgkjiuJTNQWqB0YufpMnGh7eGG8ju2BhYQ.png)

**Host Name**(호스트 이름)에는 루트 도메인 앞부분만 복사하고 루트 도메인 자체는 넣지 마세요. 하이퍼클래스 DNS 레코드 화면에서 두 번째 TXT의 호스트 이름을 확인하고, 루트 도메인 이름 앞부분만 복사하세요. 아래 예시에서 어느 부분을 복사하는지 확인할 수 있어요.

![두 번째 TXT 호스트 이름 입력란 — 강조 표시된 부분만 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48299274349/original/QZx8yVWaSu8EU88v7eBp1CPDH4P80GKGXg.png)

| 상황 | 호스트 이름으로 복사할 값 | 예시 |
| --- | --- | --- |
| 서브 도메인을 쓰는 경우 | `mx._domainkey.helpdesk` | 서브 도메인 DKIM 호스트 이름 예시 |
| 루트 도메인을 쓰는 경우 | `mailo._domainkey` | 루트 도메인 DKIM 호스트 이름 예시 |

**Data**(데이터)에는 하이퍼클래스 DNS 레코드 화면에 있는 두 번째 TXT 레코드 값 전체를 붙여 넣으세요. 이 값은 도메인마다 달라요. 강조 표시된 입력란의 값을 그대로 복사하세요.

![두 번째 TXT 레코드 값 — 강조 표시된 값을 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292768735/original/cUIeRsQGsIF81ZCW8a-cj-v7iGlndoLiKw.png)

{% hint style="info" %}
아직 **Save**를 클릭하지 마세요. **Create new record**를 클릭해 MX 레코드를 추가하세요.
{% endhint %}

## 5. MX 레코드 추가하기

Google Domains에서 **Create new record**를 클릭하고 아래 항목을 채우세요.

{% hint style="warning" %}
루트 도메인에서 메일을 주고받는 Google Workspace 계정이 있다면, 루트 도메인에 MX 레코드를 추가할 때 기존 이메일이 작동하지 않게 돼요. 하이퍼클래스 이메일에는 서브 도메인을 사용하세요. 자세한 내용은 [Mailgun과 Google Apps에서 같은 도메인을 함께 써도 되나요?](https://help.mailgun.com/hc/en-us/articles/203357040-Can-I-Use-the-Same-Domain-Name-for-Mailgun-and-for-Google-Apps-Or-Another-Email-Server-)를 참고하세요.
{% endhint %}

**Host Name**(호스트 이름)은 TXT 레코드와 같은 방식으로, 서브 도메인 접두어만 입력하세요.

- `lc.companyname.com`이면 `lc`를 입력해요.
- `replies.companyname.com`이면 `replies`를 입력해요.
- 루트 도메인 `companyname.com`이면 `@`를 입력해요.

![MX 레코드 호스트 이름 입력란](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155000003027/original/5aF_dZ_ziXuTz59XlBASIHTyI7uQ7bOo_g.png)

**Type**(유형) 드롭다운에서 `MX`를 선택하세요.

**Data**(데이터)에 첫 번째 MX 값을 붙여 넣고, **+ Add more to this record**(이 레코드에 항목 추가)를 클릭한 뒤 두 번째 값을 붙여 넣으세요.

```
10 mxa.mailgun.org
```

```
10 mxb.mailgun.org
```

![MX 레코드 데이터를 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155000003013/original/7ZgVLhVdhJ7tXtoJ_8k_TFkrR5RA2pUb4g.png)
![MX 레코드 입력을 마친 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155000003080/original/w3lgIZMfVu8zipEIyYvMh72IQgpl6HADcA.png)

{% hint style="info" %}
아직 **Save**를 클릭하지 마세요. **Create new record**를 클릭해 마지막 CNAME 레코드를 추가하세요.
{% endhint %}

## 6. CNAME 레코드 추가하기

Google Domains에서 **Create new record**를 클릭하고 아래 항목을 채우세요.

**Host Name**(호스트 이름)은 서브 도메인 접두어 앞에 `email.`을 붙여 입력하세요.

- `lc.companyname.com`이면 `email.lc`를 입력해요.
- `replies.companyname.com`이면 `email.replies`를 입력해요.
- 루트 도메인 `companyname.com`이면 `email`을 입력해요.

**Type**(유형) 드롭다운에서 `CNAME`을 선택하세요.

**Data**(데이터)에는 모든 사용자가 같은 값을 쓰며, 아래 값을 입력하세요.

```
mailgun.org
```

![CNAME 레코드 항목을 입력한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155000003126/original/UjjcYWc_abbbgStIJ5Q7rOwoXfIFdaAT4g.png)
![CNAME 레코드 입력을 마친 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155000003129/original/4CjEilgb6jZy-PnRXT7Eyoxf94_AeHGPcw.png)

{% hint style="info" %}
DNS 레코드 5개를 모두 입력했어요. 다음 7번 항목으로 가서 저장하고 인증하세요.
{% endhint %}

## 7. 저장하고 도메인 인증하기

1. DNS 레코드 5개를 모두 입력했으면 Google Domains에서 **Save**(저장)를 클릭하세요.
2. 하이퍼클래스 탭으로 돌아가 **이메일 서비스** 화면에서 **도메인 인증**을 클릭하세요.

   ![이메일 서비스 화면의 도메인 인증 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48292771391/original/DSHng9iQ27K8gMmkLYLkL7mpGKnMfyFSkA.png)

{% hint style="info" %}
아직 초록색으로 바뀌지 않은 레코드가 있다면 DNS 반영에 몇 분이 걸릴 수 있어요. 잠시 기다렸다가 **도메인 인증**을 다시 클릭하세요. 10분이 넘도록 인증되지 않으면 Google Domains에 입력한 값이 하이퍼클래스의 DNS 레코드 화면에 있는 값과 같은지 다시 확인하세요.
{% endhint %}

모든 레코드에 초록색 체크 표시가 뜨면 전용 발송 도메인이 활성화된 거예요. 이어서 전용 발송 도메인(하이퍼클래스 이메일)의 SSL 인증서 설정이 제대로 되어 있는지 확인하세요. 그런 다음 테스트 이메일을 보내 정상적으로 작동하는지 확인하세요. 테스트 이메일은 **대화**에서 보낼 수 있어요.

## 자주 묻는 질문

### 이미 Google Workspace와 함께 쓰고 있는 루트 도메인을 사용할 수 있나요?

아니요. 이미 Google Workspace와 함께 쓰는 루트 도메인에 MX 레코드를 추가하면 기존 Google Workspace MX 레코드와 충돌해서 이메일 전달이 안 될 수 있어요. 하이퍼클래스 이메일에는 서브 도메인(예: `replies.companyname.com`)을 사용하세요.

### Google Domains에서 DNS 반영은 얼마나 걸리나요?

Google Domains의 변경 사항은 보통 몇 분 안에 반영돼요. 드물게 24~48시간까지 걸리기도 해요. 10분이 지나도 인증되지 않으면 값을 점검하기 전에 조금 더 기다렸다가 다시 시도해 보세요.

### 두 번째 TXT 레코드의 호스트 이름이 인터넷에서 본 예시와 달라요.

두 번째 TXT 레코드는 내 도메인에만 맞게 생성되는 DKIM 키예요. 호스트 이름과 값은 다른 계정과 항상 달라요. 두 값 모두 내 DNS 레코드 화면에서 복사하세요. 이 문서나 다른 계정의 설정에서 가져오면 안 돼요.

### 전용 도메인과 공유 도메인은 어떻게 다른가요?

**공유 도메인**은 여러 계정이 함께 쓰는 공용 발송 도메인이에요. 빠르게 켤 수 있지만 발신자 평판을 다른 계정과 함께 쓰게 돼요. **전용 도메인**은 내 계정만 쓰는 도메인이라서 발신자 평판과 전달률을 직접 관리할 수 있어요.

### 서브 계정마다 다른 전용 도메인을 설정할 수 있나요?

네. 서브 계정마다 각자의 전용 발송 도메인을 둘 수 있어요. 도메인마다 DNS 레코드를 따로 추가하고 인증해야 해요.

### 전용 도메인으로 바꾸면 연락처가 변화를 알아차리나요?

직접적으로는 알아차리지 못해요. 발송 도메인은 이메일 헤더에는 나타나지만 화면에 보이는 **보낸 사람** 이름에는 나타나지 않아요. 시간이 지나면서 발신자 평판이 독립적으로 쌓이면 전달률이 좋아져요.

### 도메인은 인증됐는데 이메일이 전달되지 않아요. 무엇을 확인해야 하나요?

먼저 **대화**에서 테스트 이메일을 보내 기본 발송이 되는지 확인하세요. 그다음 전용 발송 도메인의 SSL 인증서가 활성화되어 있는지 확인하세요. 문제가 계속되면 Google Domains에 입력한 SPF와 DKIM 값에 오타가 없는지 살펴보세요.

### 전용 발송 도메인을 쓰려면 비용이 드나요?

하이퍼클래스 이메일에서 전용 발송 도메인을 설정하는 데는 기존 구독 외에 별도 유료 요금제가 필요하지 않아요. 단, 도메인은 직접 소유하고 DNS 제공업체(여기서는 Google Domains)에서 관리해야 해요.
