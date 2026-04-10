---

번역일: 2026-04-06
카테고리: 06-사이트
---

# 화이트라벨 도메인, API 도메인, 이메일 발송 도메인, 사이트 도메인, 클라이언트 포털 도메인 등 설정하기

도메인 연결에 대해 알아야 할 거의 모든 것

---

**목차**

- [도메인이란 무엇인가요?](#도메인이란-무엇인가요)
- [루트 도메인과 서브 도메인이란?](#루트-도메인과-서브-도메인이란)
- [Domain Connect로 손쉽게 도메인 연결하기](#domain-connect로-손쉽게-도메인-연결하기)
- [수동 옵션](#수동-옵션)
- [Hyperclass에서 도메인을 추가할 수 있는 곳](#hyperclass에서-도메인을-추가할-수-있는-곳)
- [화이트라벨 도메인](#화이트라벨-도메인)
- [API 또는 브랜딩 도메인](#api-또는-브랜딩-도메인)
- [사이트 (Settings > Domains)](#사이트-settings--domains))
- [이메일 발송 도메인](#이메일-발송-도메인)
- [클라이언트 포털 도메인 (커뮤니티, 강의)](#클라이언트-포털-도메인-커뮤니티-강의))
- [WordPress](#wordpress)
- [도메인 용어집 - 알아야 할 핵심 용어](#도메인-용어집---알아야-할-핵심-용어)
- [문제 해결](#문제-해결)
- [FAQ](#FAQ)

---

# 도메인이란 무엇인가요?

도메인은 웹사이트, 이메일 호스팅 등 온라인 서비스의 디지털 주소 역할을 하며, DNS를 통해 IP 주소에 매핑됩니다. 도메인 이름은 온라인 존재감에 필수적이며, 웹사이트 접근성을 향상시키고 이메일 커뮤니케이션을 가능하게 합니다.

도메인은 웹사이트 호스팅, 화이트라벨 브랜딩, 브랜딩/API 도메인 구성, 이메일 설정, 클라이언트 포털에 매우 중요합니다. Hyperclass 사용자가 디지털 존재감을 구축하는 기초가 됩니다.

## 루트 도메인과 서브 도메인이란?

도메인을 다룰 때 루트 도메인과 서브 도메인을 구분하는 것이 중요합니다.

- **루트 도메인** (예: "mywebsite.com")

루트 도메인은 웹사이트의 주요 주소로, URL에서 "www." 뒤에 나타납니다 (예: "www.mywebsite.com"에서 루트 도메인은 "mywebsite.com"입니다). 웹사이트의 주요 진입점 역할을 합니다.

- **서브 도메인** (예: "help.domain.com")

서브 도메인은 루트 도메인의 확장으로, 사용자를 온라인 인프라 내의 특정 섹션이나 영역으로 안내합니다 (예: 지원을 위한 "help.domain.com"). 이를 통해 기본 사이트에 영향을 주지 않으면서 별도의 콘텐츠, 랜딩 페이지, 마케팅 캠페인을 운영할 수 있습니다. 이 설정은 광고, 프로모션, 다양한 SEO 전략 활용에 유용합니다.

**중요 참고사항:** 루트 도메인을 추가할 때 주의하세요. 많은 사용자가 실수로 이미 사용 중인 루트 도메인을 추가해서 기존 메일박스나 사이트를 손상시킵니다. 루트 도메인이 다른 곳에서 사용 중이라면 서브 도메인 추가를 권장합니다.

---

## Domain Connect로 손쉽게 도메인 연결하기

**도메인 제공업체가 Google, Cloudflare, GoDaddy인 경우**, 시스템에서 도메인을 플랫폼에 연결하기 위한 자동 DNS 구성을 제공합니다. 이 기능은 브랜딩 도메인, 웹사이트, 전용 도메인, 클라이언트 포털에 대한 DNS 레코드를 수동으로 관리할 필요를 없애줍니다. 자동 구성은 도메인 통합을 간소화하여 시간을 절약하고 오류 위험을 줄입니다.

도메인을 손쉽게 연결하는 방법에 대한 자세한 정보는 [Domain Connect 기능 사용 방법](how-to-use-the-domain-connect-feature-.md)을 참조하세요.

![Domain Connect 자동 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095806/original/hrpCoz1Kx3xl9cE9J2HRAABgfYYjIdiccA.png?1717515282)

### 수동 옵션

**도메인 제공업체가 Google, Cloudflare, GoDaddy가 아닌 경우**, 수동 DNS 구성이 필요합니다. 시스템은 사용자가 도메인 제공업체 시스템에 입력할 필요한 레코드 값을 생성하여 이 과정을 단순화합니다. 이는 브랜딩 도메인, 웹사이트/퍼널, 전용 도메인, 클라이언트 포털을 지원하여 도메인을 Hyperclass와 원활하게 통합하도록 보장합니다.

![수동 DNS 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095809/original/82lhQooK-BZRhn3IMxjM7GcSDZbSWjjPNg.png?1717515282)

![DNS 레코드 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095807/original/a8TzYf-3dnw-VbAwcvB557Klucd9jSYIRA.png?1717515282)

1) 이제 선택한 DNS 제공업체를 열고 레코드를 추가합니다. 레코드 추가는 제공업체에 따라 약간의 차이가 있지만 대체로 비슷합니다. DNS 관리자로 가서 레코드 추가를 클릭합니다.

![DNS 관리자 레코드 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095808/original/NeCo_2dJkC96cNq4SD_gjAtSvrk-e1PSEg.png?1717515282)

2) Hyperclass에서 제공하는 레코드 타입을 선택합니다.

![레코드 타입 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095819/original/Mf13PeAVBfyHw2UVIcqy9npH7W7b2VFhmA.png?1717515282)

3) Hostname을 "Name" 필드에, Value/Target을 "target 필드"에 입력합니다.

![호스트명과 값 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095817/original/c1IMDbugE355g-RMxp50EGWBTEHgDNHCuQ.png?1717515282)

4) 레코드를 저장합니다. Cloudflare를 사용하는 경우 Proxy Status를 해제해야 합니다.

![Cloudflare 프록시 설정 해제](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095821/original/4M9zVsq-xWiE6yTlyTBccTJRD7V3pRHMwQ.png?1717515282)

이 수동 과정에 대해 더 자세히 알아보려면 [여기]([how-to-set-up-root-domain-subdomain-for-your-funnels-websites-](how-to-set-up-root-domain-subdomain-for-your-funnels-websites-.md))를 참조하세요.

---

# Hyperclass에서 도메인을 추가할 수 있는 곳

Hyperclass 내에는 도메인을 추가할 수 있는 여러 곳이 있습니다. 각각을 간단히 살펴보겠습니다. 더 자세한 내용을 위한 자료도 제공하겠습니다.

## 화이트라벨 도메인

데스크톱 웹 앱을 화이트라벨링하면 고객이 기본 도메인 대신 귀하의 도메인과 상호작용하게 됩니다. 간단히 네 단계를 따르세요: DNS 레코드에서 CNAME 생성, Hyperclass 에이전시 계정에서 구성, 에이전시 로고 업로드, 에이전시 이용약관 업데이트. DNS 레코드가 전파되면 고객이 귀하의 도메인을 사용하여 앱에 접근할 수 있으며, 로고와 이용약관 같은 브랜딩 요소를 볼 수 있습니다.

화이트라벨링에는 서브 도메인을 권장합니다. 대부분의 에이전시는 화이트라벨 데스크톱 앱의 서브 도메인으로 "app"을 사용합니다.

![화이트라벨 도메인 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095824/original/RYqwtTH5ELlsyMXglUGtprsoLu3EhJsF3A.png?1717515282)

*Agency View(에이전시 뷰) > Settings(설정) > Company Settings(회사 설정) > Whitelabel Domain(화이트라벨 도메인)으로 이동*

화이트라벨 도메인 설정에 대한 자세한 정보는 [화이트라벨 도메인 설정 방법]([how-to-set-up-a-whitelabel-domain-for-the-desktop-web-app](how-to-set-up-a-whitelabel-domain-for-the-desktop-web-app.md))을 참조하세요.

---

## API 또는 브랜딩 도메인

API/브랜딩 도메인으로 시스템 생성 링크를 맞춤화하여 브랜드 가시성과 링크 전달률을 향상시키세요. 이를 통해 폼, 설문, 캘린더 등의 링크를 개인화할 수 있습니다.

커스텀 API 도메인은 시스템 생성 링크의 브랜딩을 가능하게 하여 브랜드 인지도와 링크 전달률을 향상시킵니다. 에이전시 레벨 회사 설정에서 API 도메인을 구성하여 모든 하위 계정의 기본 브랜딩 도메인을 설정할 수 있습니다.

![API 도메인 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095823/original/Ft7JzHK2yiJeQfqbYizWpfp41evuZq2edQ.png?1717515282)

*Agency View(에이전시 뷰) > Settings(설정) > Company Settings(회사 설정) > API Domain(API 도메인)으로 이동*

하위 계정 레벨에서 개별 클라이언트의 도메인을 맞춤화하려면 브랜딩 도메인을 설정할 수 있습니다. 이는 하위 계정 설정의 비즈니스 프로필 내에서 진행됩니다.

![하위 계정 API 도메인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095816/original/4VyHIMkwNpESs9yMBEBVy-jAHxNIO0EG6A.png?1717515282)

*Sub-Account(하위 계정) > Settings(설정) > Business Profile(비즈니스 프로필) > API Domain(API 도메인)으로 이동*

API/브랜딩 도메인 설정에 대한 자세한 정보는 [브랜드 시스템 생성 링크 구성 방법](how-to-configure-brand-system-generated-links-api-domain-.md)을 참조하세요.

API와 브랜딩 도메인 모두에서 서브 도메인을 사용하세요. 루트 도메인을 사용하면 도메인이 웹사이트에서 다른 곳으로 향하게 됩니다.

---

## 사이트 (Settings > Domains)

계정에 도메인을 통합하면 웹사이트와 퍼널 기능의 잠재력을 발휘할 수 있습니다. 이 가이드는 DNS 설정, 하위 계정과 도메인 연결, SSL 오류 및 404 오류 같은 일반적인 문제 해결을 포함하여 도메인을 수동으로 구성하는 완전한 안내를 제공합니다.

![사이트 도메인 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095830/original/eSAldtQTlORLqsoMGuuptYJI9sCEsD6evg.png?1717515282)

*Sub-Account(하위 계정) > Settings(설정) > Domains(도메인)으로 이동*

웹사이트에 도메인을 추가하는 방법에 대한 자세한 정보는 [퍼널/웹사이트용 루트/서브 도메인 설정 방법]([how-to-set-up-root-domain-subdomain-for-your-funnels-websites-](how-to-set-up-root-domain-subdomain-for-your-funnels-websites-.md))을 참조하세요.

---

## 이메일 발송 도메인

이메일 마케팅 효과를 극대화하려면 발신자 평판과 전달률을 우선시하세요. LC Email 시스템의 전용 발송 도메인은 이메일 커뮤니케이션을 제어할 수 있게 해주어 브랜드 신뢰성을 향상시키고 스팸 필터 위험을 줄입니다. 이 설정은 맞춤형 알림 이메일과 특정 카테고리 타겟팅에 이상적이며, 효율적인 전달을 보장합니다. 기존 이메일 서비스와의 충돌을 피하려면 서브 도메인을 사용하여 전용 도메인을 구성하세요. 전용 발송 도메인은 긍정적인 발신자 평판을 유지하고 LC Email로 효과적인 이메일 마케팅을 달성하는 핵심입니다.

- **추가 MX 레코드 추가**

Google Domains와 같은 일부 도메인 호스트는 도메인당 하나의 MX 레코드만 허용할 수 있습니다. 이런 경우 도메인 등록소에 두 번째 값을 포함할 추가 레코드를 추가하는 옵션이 있을 수 있습니다.

![이메일 발송 도메인 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095829/original/hcq0UeChnG-9hDKlXxqS5zYyMdjHmZ4xNA.png?1717515282)

에이전시 레벨 이메일 서비스: Agency View(에이전시 뷰) > Settings(설정) > Email Services(이메일 서비스) > Dedicated domain(전용 도메인)으로 이동

하위 계정 레벨 이메일 서비스: Sub-Account(하위 계정) > Settings(설정) > Email Services(이메일 서비스) > Dedicated Domain(전용 도메인)으로 이동

전용 이메일 발송 도메인 설정 과정에 대한 자세한 정보는 [전용 발송 도메인 설정 방법](how-to-set-up-a-dedicated-sending-domain-lc-email-.md)을 참조하세요.

---

## 클라이언트 포털 도메인 (커뮤니티, 강의)

클라이언트 포털은 제휴업체, 멤버십, 커뮤니티 관리를 위한 안전하고 중앙화된 플랫폼을 Hyperclass에서 제공하여 클라이언트-비즈니스 상호작용을 변화시킵니다. 포털은 제휴 관리자 수수료, 커뮤니티 상호작용, 멤버십 강의 활동을 중앙화하는 동적 인터페이스로 기능합니다. 커스텀 도메인과 브랜딩 옵션으로 클라이언트 참여를 단순화하여 브랜드-클라이언트 관계를 강화합니다. 향상된 커뮤니케이션과 클라이언트 자율성은 더 큰 만족도와 충성도로 이어집니다.

이 문서는 특정 비즈니스 요구를 충족하도록 포털을 설정하고 맞춤화하는 과정을 안내하여 클라이언트가 자율적인 행동을 취할 수 있도록 합니다.

![클라이언트 포털 도메인 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095828/original/pE8FkmSirGnzByVygxv8KkZ-ogkjwzVFcw.png?1717515282)

*Sub-Account(하위 계정) > Sites(사이트) > ClientPortal(클라이언트포털) > API Domain(API 도메인)으로 이동*

클라이언트 포털 설정에 대한 자세한 정보는 [클라이언트 포털 설정 방법](how-to-set-up-the-client-portal.md)을 참조하세요.

---

## WordPress

WordPress 호스팅은 기존 WordPress 사이트를 마이그레이션하거나 새 사이트를 만들 수 있게 해줍니다. 도메인을 연결한 후 사용자는 WordPress 대시보드, 사용자 관리, 백업 및 복원, 고급 설정 같은 필수 기능에 액세스할 수 있습니다.

새 웹사이트를 시작하거나 기존 웹사이트를 관리하든, 이 가이드는 클라이언트를 위한 WordPress 설정 과정을 효과적으로 간소화하는 유용한 지침과 인사이트를 제공합니다.

![WordPress 도메인 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095831/original/xBtwh9LbbbyeTDtR7LOC2Tjixy-NKbmPwg.png?1717515282)

*Sub-Account(하위 계정) > Sites(사이트) > Wordpress > Add Domain(도메인 추가)로 이동*

WordPress 도메인 설정에 대한 자세한 정보는 [WordPress 클라이언트 측 설정 가이드 시작하기](getting-started-with-wordpress-client-side-setup-guide.md)를 참조하세요.

---

# 도메인 용어집 - 알아야 할 핵심 용어

| 예시 | 설명 |
|------|------|
| **도메인** | www.gohighlevel.com | 웹사이트, 이메일 호스팅 등 온라인 서비스의 디지털 주소 |
| **루트 도메인** | gohighlevel.com | URL에서 "www." 뒤에 나타나는 웹사이트의 주요 주소 (예: "www.gohighlevel.com"에서 루트 도메인은 "gohighlevel.com"). 웹사이트의 주요 진입점 역할 |
| **서브 도메인** | help.gohighlevel.com | 루트 도메인의 확장으로, 사용자를 온라인 인프라 내의 특정 섹션이나 영역으로 안내 (예: 지원을 위한 "help.domain.com") |
| **Hostname** | ![호스트명 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095813/original/_yK4XozIWht9RuVCgkZPZLj2RS-PgXlVxA.png?1717515282) | 레코드에서 사용되는 이름/값으로, 일반적으로 사용되는 서브 도메인. "help.gohighlevel.com"과 같은 서브 도메인이 "www.highlevel.com"과 독립적으로 작동할 수 있게 함 |
| **Data/Target/Value** | ![데이터 값 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095812/original/vLgs8iDxu5UEvVPjhHmwDc0COPb0G20twQ.png?1717515282) | URL이 의도된 웹사이트 데이터를 표시하도록 하는 값 |
| **Nameservers** | GoDaddy, Cloudflare, Google 등 | DNS 레코드를 구성하고 제어하는 디렉토리. 인터넷에 어떤 도메인 제공업체(예: Godaddy, Cloudflare 등)가 도메인을 제어하고 있는지 알려줌 |
| **DNS (Dedicated Name Servers)** | ![DNS 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095815/original/OK0coxwyfKCwvT4GTuhBhFWJm35KSh-OuA.png?1717515282) | 특정 URL을 방문할 때 웹사이트를 표시하도록 인터넷에 알려주고, 이메일 제공업체가 도메인 이름에서 이메일을 보낼 수 있게 하는 레코드 |
| **TXT** | ![TXT 레코드 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095810/original/XgKktnkym29TrLhZdbDE9ZUxHWtMd3m0OQ.png?1717515282) | TXT 레코드는 스팸을 방지하기 위한 이메일 발송과 도메인 검증을 생성하여 도메인을 보호하는 데 사용됨 |
| **MX** | ![MX 레코드 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095814/original/3rDvCDQP1_qG-XwtVojf_EOOmjQXYj39bA.png?1717515282) | Mail Exchange(MX) 레코드는 이메일이 어디로 라우팅될지 알려줌. Hyperclass 내에서 이메일을 보내고 받는 데 사용됨 |
| **CNAME** | ![CNAME 레코드 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095811/original/8cdtZ17kqkLPdZnKQMkBwVtW08YLYykVPg.png?1717515282) | CNAME 레코드는 다른 도메인을 가리킴. 이 레코드는 서브 도메인을 생성할 때 일반적으로 사용됨 |
| **A Record** | ![A 레코드 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095818/original/Euay6ddSoczuJvgIyaQABt4wvVqK5JNtKA.png?1717515282) | A 레코드는 웹사이트를 호스팅하는 IP 주소를 가리킴. 이 레코드는 루트 도메인이 기본 웹사이트를 가리키도록 하는 데 일반적으로 사용됨 |
| **DMARC** | ![DMARC 레코드 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095820/original/vBdK9jdlUVOa9fmp-DSBENEfTwdHxgN5zQ.png?1717515282) | DMARC 레코드는 이메일 스푸핑을 방지하는 TXT 레코드로, 사기꾼과 도메인의 무단 사용으로부터 이메일 발송을 보호함 |

---

# 문제 해결

도메인 제공업체에 DNS 레코드를 추가했지만 웹 페이지가 404 오류를 반환하는 등의 문제가