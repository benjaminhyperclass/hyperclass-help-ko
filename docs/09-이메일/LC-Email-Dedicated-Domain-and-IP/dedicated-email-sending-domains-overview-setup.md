---

번역일: 2026-04-07
카테고리: 09-이메일 > LC Email 전용 도메인 및 IP
---

# 전용 이메일 발송 도메인 개요 및 설정

이메일 마케팅은 고객에게 다가가고 매출을 늘리는 훌륭한 방법입니다. 하지만 주의하지 않으면 문제가 생길 수 있어요. 전용 발송 도메인을 사용하면 비즈니스에서 보내는 것처럼 보이는 이메일을 제어할 수 있습니다. 즉, 스팸 필터와 원하지 않는 메일 서버에서 메시지가 차단되는 문제를 피할 수 있어요.

이메일 마케팅 노력이 묻히지 않도록 하세요! 전용 발송 도메인으로 바로 시작해보세요.

**중요**: 전용 발송 도메인은 [LC Email 시스템](../how-to-migrate-my-agency-over-to-lc-email.md) 사용자에게만 적용됩니다.

이메일 발송에 사용한 적 없는 새 도메인을 사용하는 경우, 대량 리스트로 이메일을 보내기 전에 반드시 도메인 워밍업을 진행하세요. 이를 하지 않으면 전달률이 떨어집니다.

**중요**: 다른 SMTP 제공업체를 설정하려면 [SMTP 제공업체 설정](../setting-up-smtp-providers.md)을 참조하세요.

목차

- [전용 발송 도메인이란?](#전용-발송-도메인이란)
- [전용 발송 도메인 설정](#전용-발송-도메인-설정)
- [공유 도메인 이메일 리팩토링](#공유-도메인-이메일-리팩토링)
- [전용 발송 도메인 문제 해결](#전용-발송-도메인-문제-해결)
- [자주 묻는 질문](#자주-묻는-질문)

# 전용 발송 도메인이란?

전용 발송 도메인을 사용하면 브랜드에서 보내는 것처럼 보이는 이메일을 발송할 수 있어, 이메일 서비스에서 더 나은 평판을 유지하는 데 도움이 됩니다. 모든 하위 계정(Sub-account)이나 에이전시에서 전용 발송 도메인을 만들 수 있으며, 빠르고 쉽게 설정할 수 있어요.

기본적으로 플랫폼에서 발송되는 모든 이메일은 이메일 헤더의 "대신 발송됨" 또는 "경유하여 발송됨"에 이메일 발송 서버 이름이 표시됩니다:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48265938968/original/spw7PyvCIf6DlxRXiukwE1KRAbxsW5nK9w.png?1669638686)

## 전용 발송 도메인 설정

계정에서 여러 발송 도메인을 만들 수 있으며, 1:1 이메일, 워크플로우에서 발송되는 이메일, 마케팅 캠페인 이메일, 결제 및 인보이스 이메일 등 다양한 이메일 발송 작업에 서로 다른 도메인을 사용할 수 있어요.

### 1단계: 이메일 서비스로 이동

- `Settings(설정) → Email Services(이메일 서비스)`로 이동
- "Dedicated Domain and IP(전용 도메인 및 IP)" 버튼을 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039358860/original/SDAmMz_uAVt2ybizJ-_9H4TdvCGO9uG8bw.png?1736193889)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039359007/original/fPkMuNjtNulufDsHraKqi_RhiT7kVj6i7g.png?1736194222)

### 2단계: 도메인 정보 추가

- "Add Domain(도메인 추가)" 버튼을 클릭하여 발송 도메인 설정을 시작하세요.
- 전용 발송 도메인에 사용할 서브도메인을 입력하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039359484/original/eF1kHVNdn9F8E4LQc47YnPLKxFqETCQFag.gif?1736195532)

**서브도메인이란?**
서브도메인은 루트 도메인의 변형입니다.
예를 들어: "agency123.com"이라는 루트 도메인을 사용해 이메일을 보내고 싶다면, "emails.agency123.com"이나 "no-reply.agency123.com" 같은 서브도메인을 만들어 다양한 커뮤니케이션이나 마케팅 캠페인에 사용할 수 있어요.
루트 도메인 앞에 고유한 단어를 추가하고 호스팅 제공업체 설정에서 DNS 레코드를 구성하면 원하는 만큼 서브도메인을 만들 수 있습니다.

### 3단계: DNS 레코드 확인

서브도메인을 추가한 후 DNS 레코드를 확인해야 합니다. Hyperclass가 DNS 레코드를 자동으로 구성하도록 하거나 직접 수동으로 입력할 수 있어요.

Hyperclass가 DNS 레코드를 자동으로 구성할 수 없는 경우 수동으로 추가해야 합니다.

**기억하세요**: 전파 과정은 최대 24시간까지 걸릴 수 있습니다. 24시간이 넘었다면 위 과정을 따라 DNS 설정을 다시 확인해주세요.

**참고**: 하나의 도메인에 대해 여러 DKIM을 지원하지 않습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039360349/original/P-zGHtE40RWBS1c78K9-QxTVmAZcGYspOA.gif?1736198292)

### 4단계: 캘린더 이메일용 전용 발송 도메인 (하위 계정)

예약 확인, 리마인더, 일정 변경 등 예약 관련 이메일에 캘린더 전용 발송 도메인을 사용하세요. 이렇게 하면 예약 트래픽을 다른 이메일 카테고리와 분리할 수 있어, 시간에 민감한 캘린더 커뮤니케이션의 전달률과 평판 관리에 도움이 됩니다.

#### DNS 레코드 수동 추가

DNS 레코드를 수동으로 추가하려면, 도메인을 관리하는 호스팅 제공업체의 대시보드에서 DNS 레코드를 만들어야 합니다. 아래 스크린샷과 같이 Hyperclass에서 제공하는 특정 정보를 사용하여 DNS 레코드를 생성하게 됩니다.

DNS 레코드 수동 추가에 대해 더 자세히 알아보려면 여기를 클릭하여 더 상세한 도움말을 읽어보세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039360663/original/HzBGtABLJsce2UkbD9t9VMG5rxqjnhBPfg.png?1736199195)

일반적인 DNS 제공업체 설정 안내는 아래 링크를 클릭하세요:

- [GoDaddy](https://www.godaddy.com/help/manage-dns-zone-files-680)
- [Google Domains](https://support.google.com/a/answer/48090?hl=en)
- [Hostgator](https://www.hostgator.com/help/article/manage-dns-records-with-hostgatorenom)
- [Hover](https://help.hover.com/hc/en-us/articles/217282457-How-to-Edit-DNS-records-A-CNAME-MX-TXT-and-SRV-Updated-Aug-2015-)
- [Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/9214/31/cpanel-email-deliverability-tool--spf-and-dkim-records/)
- [Squarespace](https://support.squarespace.com/hc/en-us/articles/205812348-Opening-Advanced-DNS-settings)
- [AWS](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-editing.html)
- [Cloudflare](https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/)
- [Bluehost](https://www.bluehost.com/help/article/dns-management-add-edit-or-delete-dns-entries)
- [Hostinger](https://www.hostinger.com/tutorials/how-to-use-hostinger-dns-zone-editor)
- [InMotion](https://www.inmotionhosting.com/support/domain-names/create-cname-record/)
- [Hostwinds](https://www.hostwinds.com/guide/how-to-change-cname-record/)

#### 캘린더 이메일용 전용 발송 도메인 (하위 계정)

예약 커뮤니케이션의 전달률을 보호하기 위해 캘린더 이메일 전용 발송 도메인을 지정할 수 있어요.

1. `Settings(설정) → Email Service(이메일 서비스) → SMTP Service(SMTP 서비스)`를 선택하고 2단계로 진행하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064125555/original/Dy-QEZM3XvMs3u8XmtdQ29qdiEk6YH7vMw.png?1770150834)

2. `Dedicated Domain and IP(전용 도메인 및 IP)`를 선택하고 3단계로 진행하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064125509/original/617xc1HLrTXNE-33RpoYWkoBCPkU6T-nZw.png?1770150765)

3. 도메인 구성을 선택하세요:

- Calendar(캘린더) 카테고리에서 드롭다운을 선택하고 최대 5개까지 도메인을 추가하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064125759/original/T6e4IJkNkOpE5WWg4LVsxbIJt0zqHwPX-w.png?1770151371)

4. 캘린더 도메인을 선택하면, 캘린더 도메인 간 백분율 기반 분산을 설정하세요. (여러 도메인이 있는 경우 적용)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064125862/original/PJo--R5OwIcyYgi5iiKypuhjotEyGck1PA.png?1770151576)

하위 계정에서 생성한 도메인만 선택할 수 있습니다.

이 기능은 LC Email 사용자에게 제공됩니다.

## 전용 도메인용 Google Postmaster Tools 설정

Google Postmaster Tools(GPT)는 Hyperclass 전용 발송 도메인의 Gmail 전용 전달률을 모니터링하는 데 도움이 됩니다. GPT에서 도메인을 인증하면 도메인/IP 평판, 스팸율, 인증 정렬, 전송 오류를 추적할 수 있어, 인박스 도달 문제를 진단하고 시간이 지남에 따라 성능을 향상시킬 수 있어요.

단계별 안내:

- [Google Postmaster Tools](https://gmail.com/postmaster/)에 Google 계정으로 로그인하세요.

- 도메인을 포함하세요(예: yourbrand.com 또는 mail.yourbrand.com).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064881962/original/qmIt0mt7eOEjspzPldDL1WuWoDHfmqav5Q.jpeg?1770994245)

- Verify(인증)를 선택하고 Google에서 제공한 TXT 레코드 값을 복사하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064882021/original/0t5JorwG7N5BNjfTtJP0EcRwEQaQvrCT8g.png?1770994314)

- DNS 호스트에서 표시된 대로 정확히 TXT 레코드를 추가한 후 저장/적용하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064888368/original/zt-XcQXZF4ZbVfVswWouRQGDDnWwyqCQZQ.png?1770996887)

- GPT로 돌아가서 인증을 완료하세요 (Google이 레코드를 감지하는 데 시간이 걸릴 수 있습니다).

- 인증된 전용 도메인을 사용하여 Hyperclass에서 이메일을 발송하세요.

- Google이 충분한 양을 받은 후 도메인 평판, IP 평판, 스팸율, 인증, 전송 오류 대시보드를 검토하세요.

## 공유 도메인 이메일 리팩토링

공유 발송 도메인(Hyperclass 소유 또는 에이전시 공유 도메인)을 사용하면, Hyperclass가 공유 도메인 인프라와 일치하도록 실제 발송 주소를 자동으로 리팩토링합니다.

### 작동 방식

Hyperclass는 설정한 From 주소를 유지하지만, "플러스" 형식을 사용하여 백엔드에서 발송 주소를 재작성합니다:

**From 주소 (설정된 것):** `test@gohighlevel.com`

**공유 도메인 (계정 레벨):** `mg.msgsndr.com`

**실제 발송 주소:** `test+gohighlevel.com@mg.msgsndr.com`

### 기존 에이전시는 아직 영향을 받지 않습니다. 동일한 기능이 기존 에이전시의 테스트 및 점진적 롤아웃을 위해 **Labs**에서 제공될 예정입니다.

적용 대상:

- 8월 26일 이후 생성된 모든 에이전시 하위 계정
- 공유 도메인을 사용하는 해당 에이전시 하위의 모든 로케이션
- 리팩토링은 향후 2주 내에 모든 기존 에이전시에 자동 적용됩니다.

이메일 리팩토링을 피하고 브랜드 아이덴티티를 유지하려면,

이 문서의 지침에 따라 전용 발송 도메인을 설정하세요. 전용 도메인을 사용하면 주소 수정 없이 설정한 그대로 이메일이 발송됩니다.

## 전용 발송 도메인 문제 해결

전용 발송 도메인을 설정하는 동안 Hyperclass 지원 팀에 문의하지 않고도 해결할 수 있는 몇 가지 문제가 발생할 수 있어요. 전용 발송 도메인 설정 시 겪을 수 있는 일반적인 문제들을 아래에 소개합니다.

- **'Domain already pointing to email server!' 오류 메시지**
도메인이 이미 이메일 서버를 가리키고 있다는 오류 메시지가 나타날 수 있어요. 이는 이메일 도메인에 이미 다른 서비스에 연결된 DNS 레코드가 있다는 뜻이며, Hyperclass 계정에 연결하기 전에 도메인을 연결 해제해야 합니다.
Hyperclass 레코드라도 MX나 SPF 레코드가 있으면 시스템에서 도메인을 거부하므로 제거해야 합니다.
인터넷의 다양한 도구를 사용해 도메인 MX와 SPF 레코드를 조회할 수 있어요. 다음 링크는 MX와 SPF 조회에 도움이 되는 무료 도구입니다: [https://mxtoolbox.com/SuperTool.aspx](https://mxtoolbox.com/SuperTool.aspx)

## 자주 묻는 질문

**Q: 계정의 발송 도메인 이름은 어떻게 선택하나요?**

다른 용도로 사용되지 않는 고유한 서브도메인을 사용하는 것이 좋아요. 서브도메인은 루트 도메인의 보조 부분입니다. 예를 들어, 전용 발송 도메인이 hello@mg.yourbrand.com이라면, 서브도메인은 해당 도메인의 "mg" 부분이 됩니다.

**Q: 전용 IP 주소는 어떻게 설정하나요?**

전용 IP 주소 설정은 완전히 다른 과정입니다. [전용 IP 주소 설정에 대해 자세히 알아보려면 여기를 클릭하세요.](lc-email-complete-guide-to-dedicated-ip.md)

**Q: 도메인의 일부 DNS 레코드가 아직 인증되지 않았다면 어떻게 하나요?**

수동으로 인증 과정을 강제로 실행해야 합니다. 이렇게 해도 DNS 레코드가 여전히 인증되지 않으면 호스팅 제공업체에 문의하여 문제를 해결해야 할 수 있어요.

**Q: 전용 발송 도메인용 SSL 인증서는 어떻게 생성하나요?**

도메인이 인증되면 SSL 인증서가 자동으로 생성됩니다.

도메인이 인증된 것으로 표시되지만 SSL 인증서가 없다면, 전체 인증 과정을 다시 거쳐 재인증해야 할 수 있어요. 그래도 작동하지 않으면 호스팅 제공업체에 문의하여 도메인에 문제가 있는지 확인하거나 SSL 인증서 생성을 도와달라고 요청하세요.

**Q: 도메인에 와일드카드 DNS 레코드가 있다면 어떻게 하나요?**

도메인에 와일드카드 레코드(예: *.yourdomain.com)가 있으면, mail.yourdomain.com 같은 서브도메인을 설정하려 할 때 "기존 레코드" 오류가 나타날 거예요.

와일드카드 레코드는 catch-all 역할을 하므로 모든 서브도메인이 기본적으로 이미 "존재"하기 때문입니다.

이를 해결하려면 와일드카드 레코드를 일시적으로 제거하고 전용 도메인이 인증된 후 다시 추가할 수 있어요. 또는 각 서브도메인에 대해 DNS 레코드를 수동으로 추가하여 와일드카드를 재정의할 수도 있습니다.

**Q: 수신자가 리팩토링된 이메일 주소를 보게 되나요?**

네, 수신자는 이메일 클라이언트에서 리팩토링된 발송 주소(예: support+yourbusiness.com@mg.msgsndr.com)를 보게 됩니다.

**Q: 이메일 주소가 리팩토링되는 것을 어떻게 방지할 수 있나요?**

전용 발송 도메인을 설정하세요. 전용 도메인을 사용하면 수정 없이 정확한 from 주소로 이메일이 발송됩니다.

**Q: 이것이 reply-to 주소에 영향을 주나요?**

리팩토링은 발송 주소에만 영향을 줍니다. reply-to 주소는 설정한 그대로 유지됩니다.

---
*원문 최종 수정: Tue, 7 Apr, 2026 at 3:51 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*