---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/48001153720-how-to-set-up-root-domain-subdomain-for-funnels-websites
번역일: 2026-09-01
카테고리: 06-사이트 > 트러블슈팅
---

# 퍼널/웹사이트에 루트 도메인/서브도메인 설정하는 방법

계정에 도메인을 추가하면 웹사이트(Website)와 퍼널(Funnel) 기능을 만들고 사용할 수 있어요. 도메인이란 웹 주소를 의미하는데, mydomain.com 같은 루트 도메인이나 www.mydomain.com 같은 서브도메인(Subdomain)이 있어요. 시작하려면 Cloudflare, GoDaddy 등의 등록기관(registrar)에서 먼저 도메인을 만들어야 해요. 그다음 시스템에 도메인을 연동해서 사용할 수 있어요.

**참고:** 이 아티클은 도메인을 수동으로 설정하는 방법을 다룹니다. **자동 Domain Connect 기능**에 대해 알아보시려면 [여기를 클릭](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000000734-how-to-use-the-domain-connect-feature-)하세요.

목차

- 퍼널과 웹사이트에 도메인 설정하는 방법
- DNS 레코드 확인하는 방법 (DNS 조회 도구)
- 계정에서 도메인 삭제하기
- 문제 해결
- 자주 묻는 질문

## 퍼널과 웹사이트에 도메인 설정하는 방법

새 도메인을 설정하려면 아래 안내를 따라주세요.

### 1단계: (DNS 설정) A 레코드 또는 CNAME 레코드 추가하기

이 단계는 Cloudflare나 GoDaddy 같은 도메인 등록기관에서 진행해야 해요. 사용 중인 도메인 호스트에 따라 다음 두 가지 방법 중 하나를 선택할 수 있어요.

**CNAME:** 서브도메인에 대해 sites.ludicrous.cloud 값을 사용하는 CNAME 레코드를 추가할 수 있어요.

![CNAME 레코드 설정 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155078910090/original/SmJk8qKtuQ78o9exR9sXYp40PIrR7yZ_AA.jpeg?1787231667)

**중요:**

- DNS 제공업체에서 Host/Name 항목에는 서브도메인 부분만 입력해야 해요(예: www.mydomain.com이라면 www, sub.mydomain.com이라면 sub).
- Value/Target 항목은 sites.ludicrous.cloud로 설정해야 해요.
- 같은 호스트(예: www)에 CNAME과 A 레코드를 동시에 만들지 마세요. 아래의 CNAME 방식 또는 A 레코드 방식 중 하나만 선택하세요.

다양한 도메인 등록기관에 CNAME 레코드를 추가하는 방법 안내:

[Namecheap 안내](https://www.namecheap.com/support/knowledgebase/article.aspx/9646/2237/how-to-create-a-cname-record-for-your-domain/)
[Godaddy 안내](https://godaddy.com/help/add-a-cname-record-19236)
[Cloudflare 안내](https://www.cloudflare.com/en-gb/learning/dns/dns-records/dns-cname-record/)
[Wix 안내](https://support.wix.com/en/article/adding-or-updating-cname-records-in-your-wix-account)
[Hostinger 안내](https://support.hostinger.com/en/articles/4738777-how-to-manage-cname-records-on-hpanel)
[BlueHost 안내](https://www.bluehost.com/hosting/help/cname)

**참고:**
Cloudflare를 사용 중이시라면 Proxy 상태를 반드시 DNS only로 설정해주세요. Cloudflare Proxy는 지원하지 않아요.

![Cloudflare Proxy 상태를 DNS only로 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023261325/original/WqLp3FjD91M7f1lbXb5X4U5rhsoBk8bhGw.png?1710970030)

**A 레코드**

다른 방법으로는, 루트 도메인이나 서브도메인에 대해 162.159.140.166으로 연결되는 A 레코드를 추가할 수 있어요.

[Namecheap 안내](https://www.namecheap.com/support/knowledgebase/article.aspx/319/2237/how-can-i-set-up-an-a-address-record-for-my-domain/)
[Godaddy 안내](https://godaddy.com/help/add-an-a-record-19238)
[Cloudflare 안내](https://www.cloudflare.com/en-gb/learning/dns/dns-records/dns-a-record/)
[Wix 안내](https://support.wix.com/en/article/adding-or-updating-a-records-in-your-wix-account)
[Hostinger 안내](https://support.hostinger.com/en/articles/4468886-how-to-manage-a-records-in-hpanel)
[Bluehost 안내](https://my.bluehost.com/hosting/help/713)

![A 레코드 설정 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155078910684/original/zl0o612a0bCUsdzzqlp1zz0LUc2AmI_V0w.jpeg?1787231906)

**참고:**

Cloudflare를 사용 중이시라면 Proxy 상태를 반드시 DNS only로 설정해주세요. Cloudflare Proxy는 지원하지 않아요.

![Cloudflare Proxy 설정 안내 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047437419/original/F1N3N4qxFT2WWJfMKD8tULZUNR4Ghyv-FA.png?1748527429)

도메인 등록기관에 도메인을 추가한 후 DNS 설정이 전파되는 데 시간이 걸릴 수 있어요. 바로 작동하지 않는다면 최대 24시간 정도 기다렸다가 다시 시도해주세요.

### 2단계: 하위 계정(Sub-account)에 도메인/서브도메인 추가하기

- 왼쪽 네비게이션 메뉴에서 설정(Settings)으로 이동하세요.

![설정 메뉴 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155078910795/original/wxDFrlR1BidvHXww4yfqYsSzkL9gXDz0Kw.jpeg?1787231988)

- 다음으로 Domains & URL Redirects 메뉴로 이동한 후, **+ Connect a domain** 버튼을 클릭하세요.

![Connect a domain 버튼](https://jumpshare.com/share/k6nnA1224zwYeJgskUSQ+/Screen+Shot+2026-08-20+at+18.55.39.png)

- Funnel/Website/Store/Blog/Webinar 옵션에서 **Connect**를 클릭하세요.

![연동할 옵션 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155078911318/original/059MlZvFc907LDvz9Z-nvA41m6wT1FWNcg.jpeg?1787232218)

- **Domain 또는 Subdomain**을 입력하고 Continue를 클릭하세요.

![도메인 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053147160/original/8fIohGOKHPn3q5xl3h90Qfd1GmNmh3NUPQ.png?1757043498)

**루트 도메인의 경우 (예: mydomain.com):**

Domain URL 필드에 도메인을 입력하세요(서브도메인이 아닌 루트 도메인 사용). 그다음 Add record manually 링크를 클릭하세요.

기본적으로 시스템은 루트 도메인뿐만 아니라 www 서브도메인도 함께 추가할 수 있도록 설정해줘요.

이 옵션을 사용하면 [301 리다이렉트](https://hyperclass.gitbook.io/hyperclass-docs/en/support/solutions/articles/48001202713)도 함께 활성화되어, www 서브도메인으로 들어오는 모든 트래픽이 루트 도메인으로 전달돼요.

![루트 도메인 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155078912984/original/cF8OpEJs02zA4BlWZTfDNcirQ24Hu_UipQ.jpeg?1787232864)

참고: Continue 버튼을 클릭하면 "[Domain Connect](https://hyperclass.gitbook.io/hyperclass-docs/en/support/solutions/articles/155000000734)" 기능이 실행되어 도메인이 어디에 등록되어 있는지 확인하고, 필요한 DNS 레코드를 자동으로 추가할 수 있도록 연결을 시도해요. 아직 지원되지 않는 등록기관이라면 도메인 등록기관에서 DNS 레코드를 직접 추가하라는 안내가 표시돼요.

**서브도메인의 경우 (예: sub.mydomain.com)**

Domain URL 필드에 서브도메인을 입력한 후 Add record manually 링크를 클릭하세요.

![서브도메인 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155078913156/original/uAiDsNO63qw_ZbhHWD9TXw3snIu3u1rcNA.jpeg?1787232960)

참고: 퍼널 단계(Funnel Step)나 웹사이트 페이지를 경로 없이(domain.com/home이 아닌 domain.com 형태로) 열고 싶다면, 해당 페이지를 도메인의 기본 페이지로 지정할 수 있어요. 기본 페이지는 **Settings > Domains & URL Redirects > Manage Domain > Edit Domain**에서 선택할 수 있어요.

![기본 페이지 지정 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053147401/original/Tk8djoyiQGq46tvs48G7nSIMd7mMfA_9rw.png?1757044735)

![기본 페이지 지정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025451415/original/Szbz_zsNHlvMP4XRIVU1oAVDDMfW4f13Gg.png?1714709918)

### 3단계: 도메인을 퍼널/웹사이트에 연결하기

DNS 레코드 확인이 완료되면, 연결할 퍼널이나 웹사이트를 선택할 수 있는 화면이 나타나요.

- 먼저, 연결할 퍼널 또는 웹사이트를 선택하세요.

- 그다음, 기본 랜딩 페이지(Landing Page)로 사용할 퍼널 단계나 웹사이트 페이지를 선택할 수 있어요.

- 마지막으로 Link Domain 버튼을 클릭하세요. 이 작업이 완료되면 SSL 인증서도 자동으로 추가돼요. 백엔드 처리에 몇 분 정도 소요될 수 있어요.

![퍼널/웹사이트 연결 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025452367/original/lClR_V1asFvnVRVhCCXuU87lJmoq_UwCyA.png?1714712472)

## DNS 레코드 확인하는 방법 (DNS 조회 도구)

MXtoolbox는 도메인의 DNS 레코드를 확인할 때 자주 사용되는 온라인 도구예요. DNS 레코드를 확인하려면 다음 단계를 따라주세요.

[https://mxtoolbox.com](https://mxtoolbox.com)에서 MXtoolbox 웹사이트로 이동하세요.

홈페이지에서 MX Lookup, DNS Lookup, Blacklists 등의 옵션이 있는 드롭다운 메뉴가 보일 거예요. 드롭다운 메뉴를 클릭해서 확인하고 싶은 DNS 레코드 유형을 선택하세요. 자주 사용되는 옵션은 다음과 같아요.

- MX Lookup: 도메인의 메일 교환(MX) 레코드를 확인해요.

- DNS Lookup: A, AAAA, CNAME, NS 등 다양한 DNS 레코드를 확인해요.

- TXT Lookup: 도메인의 텍스트(TXT) 레코드를 확인해요. 여기에는 보통 SPF, DKIM, DMARC 정보가 포함돼요.

- CNAME Lookup: 도메인의 정규 이름(CNAME) 레코드를 확인해요.

드롭다운 메뉴에서 원하는 옵션을 선택한 후, 옆의 입력란에 도메인 이름(예: example.com)을 입력하세요.

![도메인 이름 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287935422/original/r72y28SyHztkt_csEjGTLTlBNqdYLMo5KQ.png?1679074391)

검색을 시작하려면 "DNS Lookup" 버튼을 클릭하세요.

![DNS Lookup 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287935621/original/Jee5ALw6wFToCaVxUh33b6uN4_85Davtuw.png?1679074464)

그러면 입력한 도메인의 DNS 레코드가 표시돼요. 전체 결과를 보려면 아래로 스크롤해야 할 수도 있어요.

![DNS 레코드 조회 결과](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287935711/original/5jh9-FmFM0N9r0A47VHncXsYKMskKnAz-Q.png?1679074511)

최근에 도메인 설정을 변경하셨다면 DNS 레코드가 바로 업데이트되지 않을 수 있다는 점을 기억해주세요. 변경 사항이 인터넷 전체에 전파되기까지 보통 24~48시간 정도 걸릴 수 있어요.

## 계정에서 도메인 삭제하기

- 계정에서 도메인을 삭제하려면 Settings > Domains & URL Redirects > Manage로 이동하세요.

![도메인 관리 화면](https://jumpshare.com/share/kK2ztjxPonIVjqnW4ipA+/Screen+Shot+2026-08-20+at+19.19.01.png)

- **점 3개(⋮) 아이콘** > **Delete** > 확인 대화상자에서 **삭제**를 확정하세요.

![도메인 삭제 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053147479/original/bbTbTx4Vn2h0xpKaQdWR_Y5CV0XgIGjG_g.png?1757045182)

## 문제 해결

### SSL 오류의 원인은 무엇인가요?

SSL(Secure Sockets Layer) 오류는 SSL 인증서나 웹사이트의 SSL/TLS(Transport Layer Security) 설정에 문제가 있을 때 발생해요. SSL/TLS는 사용자의 브라우저와 웹 서버 간에 암호화와 보안 통신을 제공하는 보안 프로토콜이에요. SSL 오류는 여러 원인으로 발생할 수 있는데, 대부분 사용자의 브라우저와 웹 서버 간 연결이 안전하지 않다는 것을 의미해요.

![SSL 오류 화면 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287940333/original/HV9QUGCMKridl3Wqc_xjtsWJcRNBYYXMEA.png?1679076664)

도메인에서 개인정보/SSL 오류가 표시된다면 다음 중 하나가 원인일 수 있어요.

- 같은 도메인/서브도메인에 대해 여러 개의 DNS(A 또는 CNAME) 레코드가 존재하는 경우. 하나의 도메인이나 서브도메인은 한 번에 하나의 플랫폼/서버에서만 작동할 수 있으므로, 해당 도메인/서브도메인에는 반드시 하나의 DNS 레코드만 설정해야 해요.

- 도메인에 대한 DNS 레코드가 아예 추가되어 있지 않은 경우

- A/CNAME 레코드 외에 AAAA 레코드가 추가되어 있는 경우

### "CNAME / A record not found." 오류의 원인은 무엇인가요?

![CNAME/A 레코드를 찾을 수 없다는 오류 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287940786/original/TN2a5AUm6BajuKFNhh417MByzKsFzoVHng.png?1679076918)

하이퍼클래스에서 도메인을 수동으로 추가할 때 다음과 같은 오류가 표시될 수 있어요.

> "Couldn't find a CNAME/A record pointing `www` to `sites.ludicrous.cloud/162.159.140.166`"

이 메시지는 `sites.ludicrous.cloud/162.159.140.166` 텍스트 전체를 하나의 필드에 입력하라는 의미가 **아니에요**. 이 메시지는 하이퍼클래스가 `www` 호스트에 대해 다음 두 DNS 레코드 중 **어느 것도** 찾지 못했다는 뜻이에요.

- **CNAME** 레코드
  - **Host/Name:** `www`
  - **Value/Target:** `sites.ludicrous.cloud`

  **또는**

- **A** 레코드
  - **Host/Name:** `www`
  - **Value/IP:** `162.159.140.166`

두 레코드 중 어느 것도 존재하지 않거나(또는 잘못된 DNS 제공업체에 설정된 경우), 하이퍼클래스는 도메인을 확인할 수 없어서 **"CNAME / A record not found"** 오류를 표시해요.

### 이 오류를 해결하는 방법

**1. 실제로 DNS가 어디에 호스팅되어 있는지 확인하기**

- DNS 조회 도구나 등록기관 대시보드를 사용해서 도메인이 어떤 네임서버를 사용하고 있는지 확인하세요.
- **올바른 제공업체**에서 DNS를 수정하고 있는지 확인하세요(예: 네임서버가 Cloudflare를 가리키고 있다면 GoDaddy가 아니라 Cloudflare에서 레코드를 추가해야 해요).

**2. 기존 `www` 레코드 확인하기**

- **Host/Name**이 `www`로 설정된 기존 **A** 또는 **CNAME** 레코드가 있는지 확인하세요.
- `www`가 이미 다른 곳(예전 웹사이트, 다른 플랫폼 등)을 가리키고 있다면 해당 레코드를 삭제하거나 수정해야 해요. `www`에 대한 레코드는 **하나만** 활성화되어 있어야 해요.

**3. `www`에 필요한 DNS 레코드 만들기**

- 다음 방법 중 **하나만** 선택하세요(둘 다 사용하지 마세요).

  - **CNAME 방식(서브도메인에 권장):**
    - Type: `CNAME`
    - Host/Name: `www`
    - Value/Target: `sites.ludicrous.cloud`

  - **A 레코드 방식:**
    - Type: `A`
    - Host/Name: `www`
    - Value/IP: `162.159.140.166`

- **Host/Name** 필드에는 `www`(또는 `sub` 같은 서브도메인)만 입력해야 해요 — `www.mydomain.com`이나 `https://www.mydomain.com`처럼 입력하면 안 돼요.

**4. 루트 도메인도 함께 사용하는 경우**

- `mydomain.com` 같은 루트 도메인의 경우, 다음 **A** 레코드를 추가하세요.
  - Type: `A`
  - Host/Name: `@`
  - Value/IP: `162.159.140.166`
- 이 아티클의 2단계에서 시스템이 자동으로 `www`와 301 리다이렉트를 활성화하여, `www.mydomain.com` 방문자가 `mydomain.com`으로 리다이렉트되도록 설정할 수 있어요.

**5. Cloudflare를 사용하는 경우**

- 도메인/서브도메인의 CNAME 또는 A 레코드가 "Proxied"가 아닌 **"DNS only"**로 설정되어 있는지 확인하세요.
- 하이퍼클래스는 퍼널/웹사이트 연결에 사용되는 레코드에서 Cloudflare의 프록시 기능을 지원하지 않아요.

**6. DNS 전파 시간 기다리기**

- 설정을 변경한 후 DNS가 전 세계적으로 업데이트되는 데 시간이 걸릴 수 있어요(경우에 따라 최대 24시간).
- DNS를 업데이트한 직후에도 오류가 계속되면 잠시 기다린 후 하이퍼클래스의 도메인 연결 화면에서 **Retry/Continue**를 클릭해주세요.

**7. 필요하다면 DNS 조회 도구로 다시 확인하기**

- DNS 조회 도구를 사용해서 다음을 확인하세요.
  - `www.yourdomain.com`이 `sites.ludicrous.cloud`로 연결되는 CNAME **또는** `162.159.140.166`으로 연결되는 A 레코드를 갖고 있는지 확인하세요.
- 해당 레코드가 확인되면 하이퍼클래스가 도메인을 정상적으로 인증할 수 있어요.

도메인에서 간헐적으로 404 오류가 발생한다면 www/루트 도메인을 퍼널/웹사이트와 함께 사용하고 있을 가능성이 있어요. 이 경우 [www에서 non-www(루트) 도메인으로, 또는 non-www 도메인에서 www로의 리다이렉트가 추가되어 있는지](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/48001065407-how-to-redirect-하이퍼클래스-domains-www-to-non-www-) 확인해주세요.

### Cloudflare 도메인이 Proxy와 함께 작동하지 않는 이유는 무엇인가요?

DNS 설정이 정확한데도 개인정보 오류가 계속 발생하거나, 퍼널/웹사이트에 이미지가 표시되지 않거나, 도메인을 추가할 수 없다면 Cloudflare 내에서 Proxy 상태를 "DNS Only"로 설정했는지 확인해주세요.

CNAME/A 레코드의 Proxy 상태가 "proxied"로 설정되어 있으면 오류가 표시돼요.

Cloudflare의 Proxy 상태는 리다이렉트를 설정할 때만 "proxied"로 설정해야 해요(리다이렉트 설정 단계에서 안내된 정확한 방법을 따를 때만 사용하세요).

![Cloudflare Proxy 상태 관련 오류 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48287943055/original/1zb6HOqouP5jryqoxYDQtxIEge6E0W6PiQ.png?1679077947)

## 자주 묻는 질문

**Q: 하나의 도메인을 여러 플랫폼에서 동시에 사용할 수 있나요?**

아니요, 하나의 도메인/서브도메인은 한 번에 하나의 플랫폼/서버(WordPress, Wix 등)에서만 사용할 수 있어요.

이미 mydomain.com을 WordPress에서 사용하고 계시다면, 저희 시스템에서는 site.mydomain.com처럼 다른 서브도메인이나 별도의 도메인을 사용해주세요.

또한, 퍼널/웹사이트에 사용 중인 도메인/서브도메인은 다른 서버에서 호스팅되는 멤버십(Memberships)이나 다른 기능과 함께 사용할 수 없어요.

**Q: 같은 도메인을 여러 계정에 추가할 수 있나요?**

네, 같은 에이전시(Agency) 내에 있는 여러 하위 계정(Sub-account)에 같은 도메인을 추가할 수 있어요.

**Q: 하나의 계정에 도메인을 몇 개까지 추가할 수 있나요?**

필요한 만큼 추가할 수 있어요. 개수 제한은 없어요.

**Q: 도메인에 대한 SSL을 별도로 구매해야 하나요?**

아니요, 도메인을 성공적으로 추가하면 시스템이 자동으로 SSL을 생성해줘요. 별도로 구매하실 필요가 없어요.

**Q: 도메인을 직접 구매할 수도 있나요?**

네! 이제 통합 Domain Marketplace를 통해 하이퍼클래스에서 직접 도메인을 구매할 수 있어요. [하이퍼클래스에서 도메인을 구매하는 방법 알아보기](https://hyperclass.gitbook.io/hyperclass-docs/en/support/solutions/articles/155000003610)

**Q: 하나의 도메인에 퍼널/웹사이트를 몇 개까지 연결할 수 있나요?**

같은 에이전시 내에서 필요한 만큼 연결할 수 있어요. 개수 제한은 없어요.

---
*원문 최종 수정: 2026-08-20*
*Hyperclass 사용 가이드 — hyperclass.ai*