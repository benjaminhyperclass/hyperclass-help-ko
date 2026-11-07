---
원문: /support/solutions/articles/48001226115-dedicated-email-sending-domains-overview-setup
번역일: 2026-11-06
카테고리: 09-이메일
---

# 전용 발송 도메인 개요와 설정

전용 발송 도메인을 쓰면 내 브랜드 도메인으로 이메일을 보낼 수 있어요. 스팸 필터를 피하고, 브랜드 평판을 지키고, 전달률을 높이고 싶을 때 설정하세요.

{% hint style="warning" %}
**하이퍼클래스 이메일 사용자 전용**

전용 발송 도메인은 하이퍼클래스 이메일 시스템을 쓰는 계정에만 적용돼요. 새로 만든 도메인으로 많은 연락처에 한꺼번에 보내기 전에는 먼저 워밍업을 해 주세요. 그래야 전달률이 떨어지지 않아요.
{% endhint %}

{% hint style="info" %}
**외부 SMTP를 쓰고 싶다면**

외부 제공업체를 연결하려면 [SMTP 제공업체 설정하기](../setting-up-smtp-providers.md)를 참고하세요.
{% endhint %}

## 전용 발송 도메인이란?

전용 발송 도메인을 쓰면 이메일이 하이퍼클래스의 공유 서버가 아니라 내 브랜드에서 직접 보낸 것처럼 표시돼요. 발신자 평판을 지킬 수 있고, 받는 사람도 일관되고 믿을 수 있는 메일로 느끼게 돼요. 서브 계정이든 에이전시든 빠르게 설정할 수 있어요.

기본값에서는 플랫폼으로 보내는 모든 이메일의 "sent on behalf of" 또는 "sent via" 헤더에 하이퍼클래스의 발송 서버가 표시돼요. 아래 화면처럼 보여요.

![기본 대리 발송 헤더 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48265938968/original/spw7PyvCIf6DlxRXiukwE1KRAbxsW5nK9w.png?1669638686)

## 전용 발송 도메인 설정하기

발송 도메인은 여러 개 만들 수 있어요. 1:1 이메일, 워크플로우 이메일, 마케팅 캠페인, 결제·인보이스 이메일마다 다른 도메인을 지정할 수도 있어요.

### 이메일 서비스 열기

1. **설정 > 이메일 서비스**로 이동해요.
2. **Dedicated Domain and IP**(전용 도메인 및 IP) 탭을 클릭해요.

![설정 > 이메일 서비스 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039358860/original/SDAmMz_uAVt2ybizJ-_9H4TdvCGO9uG8bw.png?1736193889)
![Dedicated Domain and IP 탭 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039359007/original/fPkMuNjtNulufDsHraKqi_RhiT7kVj6i7g.png?1736194222)

---

### 도메인 정보 추가하기

1. **도메인 추가**를 클릭해요.
2. 발송에 사용할 서브도메인을 입력해요.

![도메인 추가 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039359484/original/eF1kHVNdn9F8E4LQc47YnPLKxFqETCQFag.gif?1736195532)

{% hint style="info" %}
**서브도메인이란?**

서브도메인은 루트 도메인에서 갈라져 나온 주소예요. 예를 들어 루트 도메인이 agency123.com이면 emails.agency123.com, no-reply.agency123.com 같은 서브도메인을 만들 수 있어요.

서브도메인은 개수 제한 없이 만들 수 있고, 캠페인이나 메일 종류에 따라 다르게 쓸 수 있어요.
{% endhint %}

---

### DNS 레코드 확인

서브도메인을 추가한 뒤에는 **DNS 레코드 확인**을 진행해야 해요. 하이퍼클래스가 레코드를 자동으로 설정해 줄 수 있어요. 자동 설정을 쓸 수 없다면 직접 추가하세요.

{% hint style="info" %}
DNS 반영에는 최대 24시간이 걸릴 수 있어요. 그보다 오래 걸리면 DNS 설정을 다시 확인해 보세요. 같은 도메인에 DKIM 레코드를 여러 개 두는 것은 지원하지 않아요.
{% endhint %}

![DNS 레코드 확인 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039360349/original/P-zGHtE40RWBS1c78K9-QxTVmAZcGYspOA.gif?1736198292)

#### DNS 레코드 직접 추가하기

DNS 레코드를 직접 추가하려면 하이퍼클래스가 알려 주는 값(아래 화면 참고)으로 사용 중인 호스팅 업체의 관리 화면에서 레코드를 만들어요. 그런 다음 하이퍼클래스 설정 화면에서 확인하세요.

![DNS 레코드 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039360663/original/HzBGtABLJsce2UkbD9t9VMG5rxqjnhBPfg.png?1736199195)

주요 DNS 업체별 안내 문서예요.

- [GoDaddy](https://www.godaddy.com/help/manage-dns-zone-files-680)
- [Google Domains](https://support.google.com/a/answer/48090?hl=en)
- [Hostgator](https://www.hostgator.com/help/article/manage-dns-records-with-hostgatorenom)
- [Hover](https://help.hover.com/hc/en-us/articles/217282457)
- [Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/9214/31/cpanel-email-deliverability-tool--spf-and-dkim-records/)

- [AWS Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-editing.html)
- [Cloudflare](https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/)
- [Bluehost](https://www.bluehost.com/help/article/dns-management-add-edit-or-delete-dns-entries)
- [Hostinger](https://www.hostinger.com/tutorials/how-to-use-hostinger-dns-zone-editor)
- [InMotion](https://www.inmotionhosting.com/support/domain-names/create-cname-record/)

---

### 캘린더 이메일용 전용 발송 도메인

**캘린더** 이메일(예약 확정, 리마인더, 일정 변경)에만 쓸 전용 발송 도메인을 따로 지정할 수 있어요. 시간이 중요한 예약 안내 메일의 전달률을 지키는 데 도움이 돼요.

1. **설정 > 이메일 서비스 > SMTP 서비스**로 이동해요.

   ![SMTP 서비스 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064125555/original/Dy-QEZM3XvMs3u8XmtdQ29qdiEk6YH7vMw.png?1770150834)

2. **Dedicated Domain and IP**(전용 도메인 및 IP)를 선택해요.

   ![Dedicated Domain and IP 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064125509/original/617xc1HLrTXNE-33RpoYWkoBCPkU6T-nZw.png?1770150765)

3. **Domain Configuration**(도메인 설정) > **캘린더**에서 도메인을 최대 5개까지 추가해요.

   ![캘린더 도메인 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064125759/original/T6e4IJkNkOpE5WWg4LVsxbIJt0zqHwPX-w.png?1770151371)

4. 캘린더 도메인을 여러 개 추가했다면 도메인별 발송 비율(%)을 설정해요.

   ![발송 비율 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064125862/original/PJo--R5OwIcyYgi5iiKypuhjotEyGck1PA.png?1770151576)

선택할 수 있는 도메인은 서브 계정에서 만든 도메인뿐이에요. 이 기능은 하이퍼클래스 이메일 사용자만 쓸 수 있어요.

## Google Postmaster Tools 설정하기

Google Postmaster Tools(GPT)를 쓰면 하이퍼클래스 전용 발송 도메인의 Gmail 전달률을 확인할 수 있어요. 도메인·IP 평판, 스팸 비율, 인증 정렬 상태, 전달 오류를 살펴보고 메일이 받은편지함에 들어가지 않는 원인을 찾아 개선하세요.

1. Google 계정으로 [gmail.com/postmaster](https://gmail.com/postmaster/)에 로그인해요.
2. 도메인을 추가해요(예: `yourbrand.com` 또는 `mail.yourbrand.com`).

   ![GPT 도메인 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064881962/original/qmIt0mt7eOEjspzPldDL1WuWoDHfmqav5Q.jpeg?1770994245)

3. **Verify**를 선택하고 TXT 레코드를 복사해요.

   ![GPT TXT 레코드 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064882021/original/0t5JorwG7N5BNjfTtJP0EcRwEQaQvrCT8g.png?1770994314)

4. 복사한 TXT 레코드를 화면에 나온 그대로 DNS 호스트에 추가하고 저장해요.

   ![DNS에 TXT 레코드 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064888368/original/zt-XcQXZF4ZbVfVswWouRQGDDnWwyqCQZQ.png?1770996887)

5. GPT로 돌아가 인증을 마쳐요. Google이 레코드를 인식하는 데 시간이 걸릴 수 있어요.
6. 하이퍼클래스에서 인증된 전용 도메인으로 이메일을 보내요.
7. Google이 충분한 발송량을 수집하면 **Domain Reputation**, **IP Reputation**, **Spam Rate**, **Authentication**, **Delivery Errors** 대시보드를 확인해요.

## 공유 도메인 이메일 발신 주소 변환

하이퍼클래스 소유 도메인이나 에이전시 공유 도메인 같은 공유 발송 도메인을 쓰면, 실제로 발송되는 주소가 공유 도메인 구조에 맞게 자동으로 바뀌어요.

### 작동 방식

설정한 **발신자 주소**는 그대로 두고, 실제 발송 주소만 내부에서 "plus" 형식으로 바꿔요.

```
# 발신자 주소 (설정한 값)
test@yourbrand.com

# 공유 도메인 (계정 단위)
mg.msgsndr.com

# 실제 발송 주소
test+yourbrand.com@mg.msgsndr.com
```

적용 대상은 다음과 같아요.

- 8월 26일 이후에 만든 모든 에이전시 서브 계정
- 이 에이전시들 아래에서 공유 도메인을 쓰는 모든 위치
- 기존 에이전시에는 앞으로 2주 안에 자동으로 적용될 예정이에요.

기존 에이전시는 **아직 영향을 받지 않아요.** 기존 에이전시도 **실험실**에서 같은 기능을 테스트해 보고 점진적으로 적용할 수 있게 할 계획이에요.

{% hint style="info" %}
주소 변환을 피하고 브랜드 이미지를 지키려면 이 문서의 절차대로 전용 발송 도메인을 설정하세요. 전용 도메인을 쓰면 이메일이 설정한 주소 그대로, 변경 없이 발송돼요.
{% endhint %}

## 전용 발송 도메인 문제 해결

전용 발송 도메인을 설정할 때 자주 생기는 문제와 고객지원 문의 없이 해결하는 방법이에요.

### "Domain already pointing to email server!" 오류가 나요

이미 도메인에 다른 서비스와 연결된 DNS 레코드가 있다는 뜻이에요. 여기에 연결하기 전에 기존 **MX** 또는 **SPF 레코드**를 모두 삭제해야 해요. 하이퍼클래스 레코드여도 마찬가지예요.

현재 레코드는 무료 조회 도구로 확인할 수 있어요: [mxtoolbox.com/SuperTool.aspx →](https://mxtoolbox.com/SuperTool.aspx)

## 자주 묻는 질문

### 발송 도메인 이름은 어떻게 정하나요?

다른 용도로 쓰지 않는 고유한 서브도메인을 사용하세요. 예를 들어 루트 도메인이 **yourbrand.com**이면 `mg.yourbrand.com`처럼 서브도메인을 만들어요. 여기서 **mg**가 서브도메인 부분이에요.

### 전용 IP 주소는 어떻게 설정하나요?

전용 IP 주소 설정은 별도 절차예요. 자세한 내용은 하이퍼클래스 고객지원에 문의하세요.

### 일부 DNS 레코드가 아직 인증되지 않았어요. 어떻게 하나요?

인증 절차를 수동으로 강제 실행해 보세요. 그래도 인증되지 않으면 호스팅 업체에 문의하세요. 업체 쪽에서 해결할 수 있는 문제일 수 있어요.

### 전용 발송 도메인의 SSL 인증서는 어떻게 만드나요?

도메인이 인증되면 SSL 인증서가 자동으로 만들어져요. 인증됨으로 표시되는데 SSL 인증서가 없다면, 전체 인증 절차를 처음부터 다시 진행해 보세요. 그래도 해결되지 않으면 호스팅 업체에 문의하세요.

### 도메인에 와일드카드 DNS 레코드가 있으면 어떻게 하나요?

와일드카드 레코드(예: `*.yourdomain.com`)는 모든 서브도메인을 한꺼번에 받는 레코드예요. 그래서 모든 서브도메인이 이미 있는 것으로 처리되어 "pre-existing record" 오류가 나요.

해결 방법: 와일드카드 레코드를 잠시 삭제하고 전용 도메인을 인증한 뒤 와일드카드 레코드를 다시 추가하세요. 아니면 서브도메인마다 DNS 레코드를 직접 추가해서 와일드카드를 덮어쓸 수도 있어요.

### 받는 사람에게도 변환된 발신 주소가 보이나요?

네. 받는 사람의 이메일 프로그램에 변환된 발송 주소(예: `support+yourbusiness.com@mg.msgsndr.com`)가 보여요.

### 이메일 주소가 변환되지 않게 하려면 어떻게 하나요?

전용 발송 도메인을 설정하세요. 전용 도메인을 쓰면 설정한 **발신자 주소** 그대로 발송되고, 변경은 적용되지 않아요.

### 주소 변환이 회신 주소에도 영향을 주나요?

아니요. 변환은 발송 주소에만 적용돼요. 회신 주소는 설정한 그대로 유지돼요.

### 발송 이메일 주소와 회신 이메일 주소는 무엇이 다른가요? 서브도메인 대신 루트 도메인을 써도 되나요?

발송 이메일 주소(**발신자 주소**)는 이메일을 보낼 때 쓰는 주소예요. 전용 발송 도메인으로 인증해야 하고, 보통 서브도메인으로 설정해요. 회신 이메일 주소는 받는 사람이 답장하면 도착하는 주소예요. 도메인 인증 없이 따로 설정할 수 있어요.

**발신자 주소**를 루트 도메인 이메일로 표시할 수도 있어요. 하지만 도메인 평판을 지키고 전달률을 높이려면 발송에는 서브도메인을 쓰는 것이 좋아요. 회신 주소를 루트 도메인 이메일로 설정하면 답장은 평소 쓰는 받은편지함으로 받을 수 있어요.
