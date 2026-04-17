---

번역일: 2026-04-06
카테고리: 06-사이트
---

# 퍼널/웹사이트용 루트 도메인/서브도메인 설정 방법

계정에 도메인을 추가하면 웹사이트와 퍼널 기능을 만들고 활용할 수 있습니다. 도메인은 웹 주소를 의미하며, 예를 들어 mydomain.com과 같은 루트 도메인이나 www.mydomain.com과 같은 서브도메인을 뜻합니다. 먼저 Cloudflare, GoDaddy 등의 도메인 등록업체에서 도메인을 구입한 후, 시스템에 연동하여 사용할 수 있습니다.

**참고:**

이 가이드는 도메인을 수동으로 설정하는 방법을 다룹니다. 자동화된 Domain Connect(도메인 연결) 기능 사용법을 알아보려면 [여기를 클릭](../42-통합/기타/how-to-use-the-domain-connect-feature-.md)하세요.

## 퍼널과 웹사이트용 도메인 설정하기

새 도메인을 설정하려면 다음 단계를 따르세요:

### 1단계: (DNS 설정) A 레코드 또는 CNAME 레코드 추가

Cloudflare나 GoDaddy 등 도메인 등록업체에서 이 단계를 완료해야 합니다. 도메인 호스팅 업체에 따라 다음 두 가지 방법 중 하나를 선택할 수 있습니다:

**CNAME:**
서브도메인용 CNAME 레코드를 sites.ludicrous.cloud 값으로 추가할 수 있습니다.

![CNAME 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023261333/original/Cebw5DDhzZj8UIMgk3c4edx26VHIbmaVDw.png?1710970081)

**중요:**
- DNS 제공업체에서 Host/Name은 서브도메인 부분만 입력해야 합니다 (예: www.mydomain.com의 경우 www, sub.mydomain.com의 경우 sub).
- Value/Target은 sites.ludicrous.cloud여야 합니다.
- 같은 호스트(예: www)에 CNAME과 A 레코드를 동시에 만들지 마세요. CNAME 방법 또는 아래 A 레코드 방법 중 하나만 선택하세요.

**다양한 도메인 등록업체별 CNAME 레코드 추가 방법:**
[Namecheap 가이드](https://www.namecheap.com/support/knowledgebase/article.aspx/9646/2237/how-to-create-a-cname-record-for-your-domain/)
[Godaddy 가이드](https://godaddy.com/help/add-a-cname-record-19236)
[Cloudflare 가이드](https://www.cloudflare.com/en-gb/learning/dns/dns-records/dns-cname-record/)
[Wix 가이드](https://support.wix.com/en/article/adding-or-updating-cname-records-in-your-wix-account)
[Hostinger 가이드](https://support.hostinger.com/en/articles/4738777-how-to-manage-cname-records-on-hpanel)
[BlueHost 가이드](https://www.bluehost.com/hosting/help/cname)

**참고:**
Cloudflare를 사용하는 경우, Proxy 상태를 "DNS only"로 설정했는지 확인하세요. Cloudflare Proxy는 지원하지 않습니다.
![Cloudflare DNS only 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023261325/original/WqLp3FjD91M7f1lbXb5X4U5rhsoBk8bhGw.png?1710970030)

**A 레코드**

또는 루트 도메인이나 서브도메인용 A 레코드를 162.159.140.166으로 추가할 수 있습니다.

[Namecheap 가이드](https://www.namecheap.com/support/knowledgebase/article.aspx/319/2237/how-can-i-set-up-an-a-address-record-for-my-domain/)
[Godaddy 가이드](https://godaddy.com/help/add-an-a-record-19238)
[Cloudflare 가이드](https://www.cloudflare.com/en-gb/learning/dns/dns-records/dns-a-record/)
[Wix 가이드](https://support.wix.com/en/article/adding-or-updating-a-records-in-your-wix-account)
[Hostinger 가이드](https://support.hostinger.com/en/articles/4468886-how-to-manage-a-records-in-hpanel)
[Bluehost 가이드](https://my.bluehost.com/hosting/help/713)

![A 레코드 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023261352/original/zVAN7Kexv39pqBfSdapgoVA-q9oOMRblBA.png?1710970171)

**참고:**
Cloudflare를 사용하는 경우, Proxy 상태를 "DNS only"로 설정했는지 확인하세요. Cloudflare Proxy는 지원하지 않습니다.

![Cloudflare Proxy 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047437419/original/F1N3N4qxFT2WWJfMKD8tULZUNR4Ghyv-FA.png?1748527429)

도메인 등록업체에 도메인을 추가한 후 DNS 설정이 전파되는 데 시간이 걸릴 수 있으므로, 즉시 작동하지 않는다면 시간을 두고(최대 24시간) 다시 시도하세요.

### 2단계: 하위 계정에 도메인/서브도메인 추가

좌측 네비게이션 메뉴에서 Settings(설정)으로 이동합니다.

![설정 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025447474/original/kwCso7zgEzLgmI9sNfrMcRnS3fU7UxgLcw.png?1714693641)

다음으로, Domains & URL Redirects(도메인 및 URL 리다이렉트) > + Connect a domain(도메인 연결) 버튼을 클릭합니다.

![도메인 연결](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053146928/original/Rr-LrDGD5yQGkJQyvXnSyNiJk2_zvX7JUA.png?1757042712)

Funnel/Website/Store/Blog/Webinar 옵션에서 **Connect(연결)**을 클릭합니다.

![연결 옵션 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053146937/original/8GP-x7idWWh_vqjLNejiCYs9GE5sNHRDxg.png?1757042789)

**Domain or Subdomain(도메인 또는 서브도메인)**을 입력하고 Continue(계속)를 클릭합니다.

![도메인 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053147160/original/8fIohGOKHPn3q5xl3h90Qfd1GmNmh3NUPQ.png?1757043498)

### 루트 도메인의 경우 (예: mydomain.com):

Domain URL 필드에 도메인을 입력(서브도메인이 아닌 루트 도메인 사용)한 후 Add record manually(수동으로 레코드 추가) 링크를 클릭합니다.

- 기본적으로 시스템은 루트 도메인 외에 www 서브도메인 추가를 활성화합니다.
- 이 옵션은 301 리다이렉트도 활성화하여 www 서브도메인으로의 모든 트래픽을 루트 도메인으로 보냅니다.

![루트 도메인 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053147097/original/bFAPLFMv-wHky3TCQPSV-MKqAWjagoeumA.png?1757043369)

**참고:** Continue 버튼을 클릭하면 "Domain Connect" 기능이 시작되어 도메인이 어디에 등록되어 있는지 확인하고 필요한 DNS 레코드를 자동으로 추가하는 연결을 승인하려고 시도합니다. 등록업체가 아직 지원되지 않는 경우, 도메인 등록업체에서 수동으로 DNS 레코드를 추가하라는 메시지가 표시됩니다. 해당 과정에 대한 자세한 정보는 [여기](../42-통합/기타/how-to-use-the-domain-connect-feature-.md)를 클릭하세요.

### 서브도메인의 경우 (예: sub.mydomain.com)

Domain URL 필드에 서브도메인을 입력한 후 Add record manually(수동으로 레코드 추가) 링크를 클릭합니다.

![서브도메인 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053147125/original/V44hZD23aoMqw3JydS9fsm8VvO7dfnHwiQ.png?1757043401)

**참고:** 퍼널 스텝이나 웹사이트 페이지가 경로 없이 열리길 원한다면(domain.com/home 대신 domain.com), 해당 페이지를 그 도메인의 기본 페이지로 선택할 수 있습니다. 기본 페이지는 Settings(설정) > Domains & URL Redirects(도메인 및 URL 리다이렉트) > Manage Domain(도메인 관리) > Edit Domain(도메인 편집)에서 선택할 수 있습니다.

![기본 페이지 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053147401/original/Tk8djoyiQGq46tvs48G7nSIMd7mMfA_9rw.png?1757044735)

![도메인 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025451415/original/Szbz_zsNHlvMP4XRIVU1oAVDDMfW4f13Gg.png?1714709918)

### 3단계: 퍼널/웹사이트에 도메인 연결

DNS 레코드가 확인되면 연결하려는 퍼널이나 웹사이트를 선택할 수 있는 화면이 나타납니다.

- 먼저 퍼널 또는 웹사이트를 선택합니다.
- 그다음 기본 랜딩 페이지로 설정할 퍼널 스텝 또는 웹사이트 페이지를 선택합니다.
- 마지막으로 Link Domain(도메인 연결) 버튼을 클릭합니다. 이로써 과정이 완료되고 SSL 인증서가 자동으로 추가됩니다. 백엔드에서 완료되는 데 몇 분이 걸린다는 점을 참고하세요.

![도메인 연결](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025452367/original/lClR_V1asFvnVRVhCCXuU87lJmoq_UwCyA.png?1714712472)

## DNS 레코드 확인 방법 (DNS 조회 도구)

MXtoolbox는 도메인의 DNS 레코드를 확인하는 데 도움이 되는 인기 있는 온라인 도구입니다. MXtoolbox를 사용해 DNS 레코드를 확인하려면 다음 단계를 따르세요:

[https://mxtoolbox.com](https://mxtoolbox.com) MXtoolbox 웹사이트로 이동합니다.

홈페이지에서 MX Lookup, DNS Lookup, Blacklists 등의 옵션이 있는 드롭다운 메뉴를 볼 수 있습니다. 드롭다운 메뉴를 클릭하고 확인하려는 DNS 레코드 유형을 선택합니다. 일반적인 옵션들:

- MX Lookup: 도메인의 메일 교환(MX) 레코드를 확인합니다.
- DNS Lookup: A, AAAA, CNAME, NS 등 다양한 DNS 레코드를 확인합니다.
- TXT Lookup: 도메인의 텍스트(TXT) 레코드를 확인합니다. 보통 SPF, DKIM, DMARC 레코드 등의 정보를 포함합니다.
- CNAME Lookup: 도메인의 정규 이름(CNAME) 레코드를 확인합니다.

드롭다운 메뉴에서 적절한 옵션을 선택한 후, 메뉴 옆의 입력 필드에 도메인 이름(예: example.com)을 입력합니다.

![MXtoolbox 도메인 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287935422/original/r72y28SyHztkt_csEjGTLTlBNqdYLMo5KQ.png?1679074391)

"DNS Lookup" 버튼을 클릭하여 검색을 시작합니다.

![DNS 조회 시작](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287935621/original/Jee5ALw6wFToCaVxUh33b6uN4_85Davtuw.png?1679074464)

그러면 도구가 입력한 도메인의 DNS 레코드를 표시합니다. 모든 결과를 보려면 아래로 스크롤해야 할 수 있습니다.

![DNS 조회 결과](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287935711/original/5jh9-FmFM0N9r0A47VHncXsYKMskKnAz-Q.png?1679074511)

최근에 도메인 설정을 변경했다면 DNS 레코드가 즉시 업데이트되지 않을 수 있습니다. 변경사항이 인터넷 전체에 전파되는 데는 일반적으로 최대 24-48시간이 걸릴 수 있습니다.

## 계정에서 도메인 제거하기

계정에서 도메인을 제거하려면 Settings(설정) > Domains & URL Redirects(도메인 및 URL 리다이렉트) > Manage(관리)로 이동합니다.

![도메인 관리](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053147213/original/5iOelPRWyawebJengpt6NOhogujTD6vnMw.png?1757043821)

**세 개의 점** > Delete(삭제) > 확인 대화창에서 선택을 확인합니다.

![도메인 삭제](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053147479/original/bbTbTx4Vn2h0xpKaQdWR_Y5CV0XgIGjG_g.png?1757045182)

## 문제 해결

### SSL 오류의 원인은 무엇인가요?

SSL(Secure Sockets Layer) 오류는 웹사이트의 SSL 인증서나 SSL/TLS(Transport Layer Security) 설정에 문제가 있을 때 발생합니다. SSL/TLS는 사용자의 브라우저와 웹 서버 간에 암호화와 보안 통신을 제공하는 보안 프로토콜입니다. SSL 오류는 다양한 문제로 인해 발생할 수 있으며, 사용자 브라우저와 웹 서버 간의 연결이 안전하지 않음을 나타냅니다.

![SSL 오류 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287940333/original/HV9QUGCMKridl3Wqc_xjtsWJcRNBYYXMEA.png?1679076664)

도메인에 개인정보보호/SSL 오류가 표시되면 다음 중 하나가 원인일 수 있습니다:

- 같은 도메인/서브도메인에 여러 개의 DNS(A 또는 CNAME) 레코드가 존재합니다. 하나의 도메인이나 서브도메인은 한 번에 하나의 플랫폼/서버에서만 작동할 수 있으므로, 해당 도메인/서브도메인에는 하나의 DNS 레코드만 설정해야 합니다.
- 도메인에 DNS 레코드가 추가되지 않았습니다.
- 도메인에 A/CNAME 레코드 외에 AAAA가 추가되어 있습니다.

### "CNAME / A record not found." 오류의 원인은 무엇인가요?

![CNAME/A 레코드 오류](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287940786/original/TN2a5AUm6BajuKFNhh417MByzKsFzoVHng.png?1679076918)

Hyperclass에서 도메인을 수동으로 추가할 때 다음과 같은 오류를 볼 수 있습니다:

**"Couldn't find a CNAME/A record pointing `www` to `sites.ludicrous.cloud/162.159.140.166`"**

이것은 `sites.ludicrous.cloud/162.159.140.166` 전체 텍스트를 한 필드에 입력해야 한다는 의미가 **아닙니다**. 이는 Hyperclass가 호스트 `www`에 대해 다음 DNS 레코드 중 **하나도** 찾을 수 없다는 의미입니다:

- **Host/Name:** `www`  
  **Value/Target:** `sites.ludicrous.cloud`로 설정된 **CNAME** 레코드  
  **또는**
- **Host/Name:** `www`  
  **Value/IP:** `162.159.140.166`으로 설정된 **A** 레코드

이 레코드 중 어느 것도 존재하지 않거나 잘못된 DNS 제공업체에 설정되어 있으면, Hyperclass는 도메인을 확인할 수 없어 **"CNAME / A record not found"** 오류를 표시합니다.

### 이 오류를 해결하는 방법

**1. DNS가 실제로 호스팅되는 위치를 확인하세요**
- DNS 조회 도구나 등록업체 대시보드를 사용하여 도메인이 사용하는 네임서버를 확인하세요.
- **올바른 제공업체**에서 DNS를 편집하고 있는지 확인하세요(예: 네임서버가 Cloudflare를 가리키면 GoDaddy가 아닌 Cloudflare에서 레코드를 추가해야 합니다).

**2. 기존 `www` 레코드를 확인하세요**
- **Host/Name**이 `www`인 기존 **A** 또는 **CNAME** 레코드를 찾아보세요.
- `www`가 이미 다른 곳(기존 웹사이트, 다른 플랫폼)을 가리키고 있다면 해당 레코드를 제거하거나 업데이트해야 합니다. `www`에 대해서는 **하나의** 레코드만 활성화되어야 합니다.

**3. `www`에 필요한 DNS 레코드를 생성하세요**
- 다음 방법 중 **하나**를 선택하세요(`www`에 대해 둘 다 사용하지 마세요):
  - **CNAME 방법 (서브도메인에 권장):**
    - Type: `CNAME`
    - Host/Name: `www`
    - Value/Target: `sites.ludicrous.cloud`
  - **A 레코드 방법:**
    - Type: `A`
    - Host/Name: `www`
    - Value/IP: `162.159.140.166`
- **Host/Name** 필드에는 `www`(또는 서브도메인, 예: `sub`)만 입력하세요. `www.mydomain.com`이나 `https://www.mydomain.com`을 입력하지 마세요.

**4. 루트 도메인도 사용하는 경우**
- `mydomain.com`과 같은 루트 도메인의 경우 다음과 같은 **A** 레코드를 추가하세요:
  - Type: `A`
  - Host/Name: `@`
  - Value/IP: `162.159.140.166`
- 이 가이드의 2단계에서 시스템은 자동으로 `www`와 301 리다이렉트를 활성화하여 `www.mydomain.com` 방문자를 `mydomain.com`으로 리다이렉트할 수 있습니다.

**5. Cloudflare를 사용하는 경우**
- 도메인/서브도메인의 CNAME 또는 A 레코드가 "Proxied"가 *아닌* **"DNS only"**로 설정되어 있는지 확인하세요.
- Hyperclass는 퍼널/웹사이트 연결에 사용되는 레코드에서 Cloudflare의 프록시를 지원하지 않습니다.

**6. DNS 전파 시간을 허용하세요**
- 변경 후 DNS가 전세계적으로 업데이트되는 데 시간이 걸릴 수 있습니다(경우에 따라 최대 24시간).
- DNS 업데이트 직후 오류가 계속 발생하면 잠시 기다린 후 Hyperclass의 도메인 연결 화면에서 **Retry/Continue(재시도/계속)**를 클릭하세요.

**7. 필요한 경우 DNS 조회 도구로 다시 확인하세요**
- DNS 조회 도구를 사용하여 다음을 확인하세요:
  - `www.yourdomain.com`에 CNAME → `sites.ludicrous.cloud` **또는** A 레코드 → `162.159.140.166`이 있는지 확인
- 해당 레코드가 보이면 Hyperclass가 도메인을 성공적으로 확인할 수 있습니다.

도메인에 404 오류가 간헐적으로 표시되면 퍼널/웹사이트와 함께 www/루트 도메인을 사용하고 있을 수 있습니다. 이 경우 www에서 non-www(루트) 도메인으로 또는 non-www 도메인에서 www로 리다이렉트를 추가했는지 확인하세요.

### Cloudflare 도메인이 프록시와 함께 작동하지 않는 이유는 무엇인가요?

DNS 설정이 정확하지만 여전히 개인정보보호 오류가 발생하거나, 퍼널/웹사이트에 이미지가 표시되지 않거나, 도메인을 추가할 수 없다면, CloudFlare 내에서 프록시 상태를 "DNS Only"로 설정했는지 확인해야 합니다.

CNAME/A 레코드의 프록시 상태가 "proxied"로 설정되면 오류가 표시됩니다.

CloudFlare 프록시 상태는 리다이렉트를 설정할 때만 "proxied"로 설정해야 합니다(리다이렉트 설정 단계에 언급된 정확한 지침을 따를 때만 사용하세요).

![Cloudflare 프록시 상태](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287943055/original/1zb6HOqouP5jryqoxYDQtxIEge6E0W6PiQ.png?1679077947)

## 자주 묻는 질문

**Q: 같은 도메인을 여러 플랫폼에서 사용할 수 있나요?**

아니요, 하나의 도메인/서브도메인은 한 번에 하나의 플랫폼/서버(WordPress, Wix 등)에서만 사용할 수 있습니다.

이미 mydomain.com을 WordPress에서 사용하고 있다면, site.mydomain.com을 저희 시스템에서 사용하거나 다른 도메인을 사용하세요.

또한 퍼널/웹사이트와 함께 도메인/서브도메인을 사용하고 있다면, 다른 서버에서 호스팅되는 멤