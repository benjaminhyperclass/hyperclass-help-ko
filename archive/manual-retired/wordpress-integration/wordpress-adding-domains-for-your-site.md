---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000002384-wordpress-adding-domains-for-your-site
번역일: 2026-04-23
카테고리: WordPress 연동
---

# WordPress 사이트용 도메인 추가하기

이 글에서는 WordPress 웹사이트에 도메인을 추가하고 설정하는 방법을 안내합니다.

#### 이 글에서 다루는 내용

- WordPress 웹사이트에 도메인을 추가하는 방법
- 새 루트 도메인을 기본 도메인으로 추가하기
- WWW 도메인을 WordPress 사이트의 기본 도메인으로 추가하기
- WordPress 사이트에 서브도메인 추가하기

## WordPress 웹사이트에 도메인을 추가하는 방법

WordPress 사이트에 도메인을 추가하는 것은 해당 도메인을 통해 웹사이트를 대중에게 공개하기 위해 필요합니다. 도메인은 웹사이트의 주소 역할을 하며, 방문자들이 사이트에 접속할 때 사용합니다.

이 글에서는 WordPress 사이트에 기본 도메인, 추가 도메인, 그리고 루트 도메인(에이펙스 도메인 또는 네이키드 도메인이라고도 함)을 추가하는 단계별 방법을 제공합니다.

또한 사용자가 WordPress 웹사이트에 도메인을 추가하기 전에 스테이징 도메인이 필요할 수 있다는 점을 설명하며, 이를 통해 실제 도메인을 연결하기 전에 웹사이트가 어떻게 보이는지 확인할 수 있습니다. GoDaddy에서 도메인을 보유한 사용자를 위한 구체적인 안내도 제공합니다.

루트 도메인 추가에 대한 자세한 내용은 이 Loom 동영상을 확인하세요:

WWW/서브도메인 추가에 대한 자세한 내용은 이 Loom 동영상을 확인하세요:

### a) 새 루트 도메인을 기본 도메인으로 추가하기

1) 첫 번째 루트 도메인(예: theparag.com)을 추가하려면, '도메인 또는 서브도메인 추가' 버튼을 클릭하세요. 도메인 이름을 입력하고 '도메인 추가' 버튼을 클릭하세요. 두 개의 TXT 레코드가 제공됩니다. DNS 제공업체에 TXT 레코드를 추가하고 TTL 값을 가능한 한 낮게 설정하세요.

![도메인 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025701556/original/Itt0_Kprok-_mtx8VkMOvpnd3aXZf-8ThQ.png?1715165816)

![TXT 레코드 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025701548/original/T_-mmZio8s_6dfYzhGw5uo4ViEdDAw1hHQ.jpeg?1715165814)

2) 도메인 제공업체에 TXT 레코드를 추가한 후, 확인 체크박스를 클릭하고 레코드 검증을 진행하세요. 이제 하나의 A 레코드와 CNAME 값을 받게 됩니다. 웹사이트에 WWW 서브도메인(예: www.theparag.com)을 추가하려면 CNAME도 추가로 설정하세요.

![A 레코드와 CNAME 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025701558/original/rxhKhZktfXc7Ccvx6h-kE9afC4VzUHkcVQ.jpeg?1715165817)

2) A 레코드의 키(Key)와 값(Value)을 복사하세요. DNS 제공업체에서 도메인에 대한 A 레코드를 설정하세요.

![A 레코드 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025701563/original/ApeGXEHZuaT_3tJ6ytz5u6fwcPlvA8qc7g.png?1715165820)

**주의사항:**

Cloudflare를 사용하는 경우, Cloudflare 프록시를 비활성화하고 프록시 상태를 'DNS만 사용'으로 전환하세요.

TXT와 A 레코드를 DNS 제공업체에 추가한 후, WordPress 대시보드로 돌아가서 '도메인 제공업체의 DNS 설정에 위의 도메인 레코드를 추가했습니다' 체크박스를 선택하고 '레코드 검증' 버튼을 클릭하세요.

![레코드 검증 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025701554/original/MBpFBaQZMzDFVj3Yao9e3ie1Zco1Gs8wRw.jpeg?1715165816)

3) 설정이 완료되면 해당 도메인이 기본적으로 기본 도메인(Primary Domain)으로 설정됩니다.

![기본 도메인 설정 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025701557/original/PBdZgsLqSH88cHtHBc96CNJvtFjKDc4pdA.jpeg?1715165817)

### b) WWW 도메인을 WordPress 사이트의 기본 도메인으로 추가하기

1) 루트 도메인(theparag.com)이 이미 추가된 상태에서 WWW 버전(www.theparag.com)을 추가할 때는 다음과 같은 안내가 나타납니다. DNS 제공업체에 생성된 CNAME 키와 값을 설정하면 도메인이 정상적으로 작동합니다.

![WWW 도메인 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025701559/original/x5yHnvcqOaprVizMzjWyi1GSRkKRe6Zchw.jpeg?1715165819)

2) 반대 상황에서 www.theparag.com이 이미 존재할 때 루트 도메인(theparag.com)을 추가하려고 하면, DNS 제공업체에서 설정할 수 있는 A 레코드가 제공됩니다.

### c) WordPress 사이트에 서브도메인 추가하기

1) 사용자가 서브도메인을 추가하려고 할 때, DNS 제공업체에 생성된 2개의 TXT 레코드를 설정하세요.

![서브도메인 TXT 레코드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025701564/original/IMmgwuod0JtCyCiojCXtSy9MPQ6tJSTKJA.jpeg?1715165820)

2) TXT 레코드를 설정한 후, '도메인 제공업체의 DNS 설정에 위의 도메인 레코드를 추가했습니다' 체크박스를 클릭하고 '레코드 검증'을 클릭하세요.

3) 이제 CNAME 레코드를 받게 됩니다. CNAME의 키와 값을 복사하여 DNS 제공업체에서 도메인에 대한 CNAME을 설정하세요.

2) 추가된 도메인은 기본적으로 기본 도메인(Primary)으로 설정되지 않으며, 필요한 경우 사용자가 직접 기본 도메인으로 설정할 수 있습니다.

3) DNS 검증이 아직 완료되지 않은 추가 도메인 근처에는 '미검증' 태그가 표시됩니다.

![미검증 도메인 표시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025701560/original/ZGe12ymCh0LhC_RsyHFNqquPG9vFYsLzRA.png?1715165819)

4. 도메인 호스팅 플랫폼에 인증 정보를 추가하려면 DNS 설정(DNS Settings)을 클릭하세요.

![DNS 설정 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025701562/original/kF7zws4cltJrkNS-LMaoSM2zYyQXVhJUiw.png?1715165820)

![DNS 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025701561/original/Coo9rcjMEtOvqUvHOl7VxTD7fPg8peVejw.png?1715165820)

---
*원문 최종 수정: Wed, 8 May, 2024 at 5:57 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*