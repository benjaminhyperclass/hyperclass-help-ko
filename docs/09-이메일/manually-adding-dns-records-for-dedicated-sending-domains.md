---
원문: /support/solutions/articles/155000004427-manually-adding-dns-records-for-dedicated-sending-domains
번역일: 2026-11-07
카테고리: 09-이메일
---

# 전용 발송 도메인에 DNS 레코드 직접 추가하기

도메인 호스팅 업체의 대시보드에서 필요한 DNS 레코드를 만드는 방법을 안내해요. 자주 쓰는 업체별 설명서 링크도 함께 모아 두었어요.

## 이 문서에서 다루는 내용

전용 발송 도메인을 인증하려면 도메인 호스팅 업체의 대시보드에서 DNS 레코드를 추가해야 해요. 필요한 값은 하이퍼클래스가 정확히 만들어 줘요. 여러분은 그 값을 등록 기관이나 DNS 관리 화면의 알맞은 칸에 복사해 넣으면 돼요. 이 문서에서 어떤 화면이 나오는지 살펴보고, 자주 쓰는 업체의 설명서로 바로 이동할 수 있어요.

## 추가해야 하는 DNS 레코드

하이퍼클래스에서 도메인을 추가하면 인증에 필요한 DNS 레코드 목록 화면이 나와요. 각 레코드에는 **유형**, **이름/호스트**, **값**이 있어요. 이 내용을 DNS 업체의 대시보드에 그대로 복사해 넣으세요.

![하이퍼클래스에서 추가할 DNS 레코드를 보여 주는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039360663/original/HzBGtABLJsce2UkbD9t9VMG5rxqjnhBPfg.png?1736199195)

하이퍼클래스가 DNS 레코드 값을 정확하게 알려 줘요. 각 값을 DNS 업체의 대시보드에 복사해 넣으세요.

{% hint style="warning" %}
DNS 업체에 **이름/호스트** 값을 입력할 때는 루트 도메인(예: `companyname.com`)을 넣지 마세요. 화면에 나온 앞부분만 입력하세요. 예를 들어 레코드가 `replies.companyname.com`으로 표시되면 **이름** 칸에는 `replies`만 입력해요.
{% endhint %}

![업체 대시보드에서 DNS 레코드를 추가하는 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039361554/original/T5G5pq9wi3Y0FuJFrDMUewd5qA0IECShbQ.jpeg?1736202012)

업체의 DNS 관리 화면에 DNS 레코드를 입력한 예시예요.

## DNS 업체별 설정 안내

아래에서 사용 중인 DNS 업체를 클릭하면 DNS 레코드 추가 방법을 설명한 해당 업체의 공식 문서가 열려요.

|  |  |
| --- | --- |
| [GoDaddy](https://www.godaddy.com/help/manage-dns-zone-files-680) | [AWS Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-editing.html) |
| [Google Domains](https://support.google.com/a/answer/48090?hl=en) | [Cloudflare](https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/) |
| [HostGator](https://www.hostgator.com/help/article/manage-dns-records-with-hostgatorenom) | [Bluehost](https://www.bluehost.com/help/article/dns-management-add-edit-or-delete-dns-entries) |
| [Hover](https://help.hover.com/hc/en-us/articles/217282457-How-to-Edit-DNS-records-A-CNAME-MX-TXT-and-SRV-Updated-Aug-2015-) | [Hostinger](https://www.hostinger.com/tutorials/how-to-use-hostinger-dns-zone-editor) |
| [Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/9214/31/cpanel-email-deliverability-tool--spf-and-dkim-records/) | [InMotion Hosting](https://www.inmotionhosting.com/support/domain-names/create-cname-record/) |
| [Squarespace](https://support.squarespace.com/hc/en-us/articles/205812348-Opening-Advanced-DNS-settings) | [Hostwinds](https://www.hostwinds.com/guide/how-to-change-cname-record/) |

{% hint style="info" %}
사용 중인 업체가 목록에 없나요? 해당 업체의 도움말 센터에서 "[제공업체명] add DNS records"를 검색해 보세요. TXT, MX, CNAME 레코드를 추가하는 방법은 주요 등록 기관마다 비슷해요.
{% endhint %}

## 자주 묻는 질문

### DNS 레코드는 몇 개를 추가해야 하나요?
총 5개를 추가해야 해요. TXT 레코드 2개(SPF용 1개, DKIM용 1개), MX 레코드 2개(`mxa.mailgun.org`, `mxb.mailgun.org`), CNAME 레코드 1개예요. 도메인을 추가하고 나면 하이퍼클래스의 DNS 레코드 화면에서 5개 값을 모두 확인할 수 있어요.

### DNS 레코드를 추가하면 적용되기까지 얼마나 걸리나요?
업체마다 달라요. Cloudflare, Siteground 등 많은 업체는 몇 분 안에 변경 사항이 적용돼요. GoDaddy, Namecheap 등은 30분에서 48시간까지 걸릴 수 있어요. 레코드를 추가한 직후 하이퍼클래스 인증 결과에 빨간색 ✗가 표시되면, 15~30분 기다린 뒤 **Verify DNS Settings**(DNS 설정 확인)를 다시 클릭하세요. 그래도 안 되면 그때 다른 원인을 확인하세요.

### **이름/호스트** 칸에 루트 도메인(예: companyname.com)도 입력해야 하나요?
아니요. 대부분의 DNS 업체는 루트 도메인을 자동으로 붙여 줘요. 하이퍼클래스에 표시된 앞부분만 입력하세요. 예를 들어 호스트 이름이 `replies.companyname.com`으로 표시되면 **이름** 칸에는 `replies`만 입력해요. 전체 도메인을 입력하면 `replies.companyname.com.companyname.com`처럼 호스트 이름이 중복돼서 인증에 실패할 수 있어요.

### DNS 업체에 접근할 수 없으면 어떻게 하나요?
도메인을 관리하는 담당자에게 문의하세요. 보통 웹 개발자, IT 팀, 도메인을 등록한 회사예요. 하이퍼클래스의 DNS 레코드 화면에 있는 값을 전달하고 대신 추가해 달라고 요청하세요.

### 레코드를 모두 추가했는데 일부에 빨간색 ✗가 계속 표시돼요. 어떻게 하나요?
먼저 각 레코드의 **유형**, **이름**, **값**이 하이퍼클래스에 표시된 내용과 정확히 같은지 확인하세요. 불필요한 공백이 있거나 **이름** 칸에 루트 도메인을 넣지 않았는지도 살펴보세요. 그다음 몇 분 더 기다렸다가 **Verify DNS Settings**를 다시 클릭하세요. 24시간이 지나도 해결되지 않으면 DNS 업체의 대시보드에서 레코드가 제대로 저장됐는지 확인하거나, 하이퍼클래스 고객지원에 문의하세요.

### 이 DNS 레코드를 추가하면 기존 이메일(예: Google Workspace)에 영향이 있나요?
서브도메인을 쓰는지, 메인 도메인을 쓰는지에 따라 달라요. 서브도메인(예: `replies.companyname.com`)을 설정하는 경우, 서브도메인의 MX 레코드는 메인 도메인의 이메일에 영향을 주지 않아요. 하지만 메인 도메인(`companyname.com`)에 레코드를 추가하는데 이미 Google Workspace MX 레코드가 있다면, Mailgun MX 레코드와 충돌해요. 이럴 때는 서브도메인을 대신 사용하세요.
