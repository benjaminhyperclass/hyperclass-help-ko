---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# 화이트라벨 도메인, API 도메인, 이메일 발송 도메인, 사이트 도메인, 클라이언트 포털 도메인 설정 방법

도메인 연결에 대해 알아야 할 거의 모든 것

---

**목차**

- [도메인이란?](#도메인이란)
- [루트 도메인과 서브 도메인](#루트-도메인과-서브-도메인)
- [Domain Connect로 도메인 간편하게 연결하기](#domain-connect로-도메인-간편하게-연결하기)
- [수동 설정](#수동-설정)
- [Hyperclass에서 도메인을 추가할 수 있는 곳들](#hyperclass에서-도메인을-추가할-수-있는-곳들)
- [화이트라벨 도메인](#화이트라벨-도메인)
- [API 또는 브랜드 도메인](#api-또는-브랜드-도메인)
- [사이트 (설정 > 도메인)](#사이트-설정-도메인)
- [이메일 발송 도메인](#이메일-발송-도메인)
- [클라이언트 포털 도메인 (커뮤니티, 강의)](#클라이언트-포털-도메인-커뮤니티-강의)
- [워드프레스](#워드프레스)
- [도메인 용어집 - 알아두어야 할 핵심 단어들](#도메인-용어집-알아두어야-할-핵심-단어들)
- [문제 해결](#문제-해결)
- [자주 묻는 질문](#자주-묻는-질문)

---

# 도메인이란?

도메인은 웹사이트, 이메일 호스팅 등 온라인 서비스의 디지털 주소 역할을 하며, DNS를 통해 IP 주소와 연결됩니다. 도메인 이름은 온라인 존재감에 필수적이며, 웹사이트 접근성을 높이고 이메일 커뮤니케이션을 가능하게 합니다.

도메인은 웹사이트 호스팅, 화이트라벨 브랜딩, 브랜드/API 도메인 설정, 이메일 설정, 클라이언트 포털에 필수적입니다. Hyperclass 사용자가 디지털 존재감을 구축하는 토대가 됩니다.

## 루트 도메인과 서브 도메인

도메인 작업 시, 루트 도메인과 서브 도메인을 구분하는 것이 중요합니다.

- **루트 도메인** (예시: "mywebsite.com")

루트 도메인은 웹사이트의 주요 주소로, URL에서 "www." 뒤에 나타납니다(예: "www.mywebsite.com"에서 루트 도메인은 "mywebsite.com"). 웹사이트의 메인 진입점 역할을 합니다.

- **서브 도메인** (예시: "help.domain.com")

서브 도메인은 루트 도메인의 확장으로, 사용자를 온라인 인프라의 특정 섹션이나 영역으로 안내합니다(예: 지원을 위한 "help.domain.com"). 이를 통해 메인 사이트에 영향을 주지 않고 별도의 콘텐츠, 랜딩 페이지, 마케팅 캠페인을 운영할 수 있습니다. 광고, 프로모션, 다양한 SEO 전략 활용에 유용한 설정입니다.

**중요한 참고사항:** 루트 도메인을 추가할 때는 주의하세요. 많은 사용자가 이미 사용 중인 루트 도메인을 추가하여 기존 메일박스나 사이트를 실수로 손상시킵니다. 루트 도메인이 다른 곳에서 사용 중이라면 서브 도메인을 추가하는 것을 권장합니다.

---

## Domain Connect로 도메인 간편하게 연결하기

**도메인 제공업체가 Google, Cloudflare, GoDaddy인 경우**, 시스템이 플랫폼에 도메인을 연결하기 위한 자동 DNS 설정 기능을 제공합니다. 이 기능을 통해 브랜드 도메인, 웹사이트, 전용 도메인, 클라이언트 포털용 DNS 레코드를 수동으로 관리할 필요가 없습니다. 자동 설정으로 도메인 통합이 간편해지며, 시간을 절약하고 오류 위험을 줄일 수 있습니다.

도메인 간편 연결에 대한 자세한 정보는 [Domain Connect 기능 사용법](../../42-통합/기타/how-to-use-the-domain-connect-feature-.md)을 참조하세요.

![Domain Connect 자동 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095806/original/hrpCoz1Kx3xl9cE9J2HRAABgfYYjIdiccA.png?1717515282)

### 수동 설정

**도메인 제공업체가 Google, Cloudflare, GoDaddy가 아닌 경우**, 수동 DNS 설정이 필요합니다. 시스템이 필요한 레코드 값을 자동으로 생성해주므로, 이 값들을 도메인 제공업체의 시스템에 입력하기만 하면 됩니다. 이를 통해 브랜드 도메인, 웹사이트/퍼널, 전용 도메인, 클라이언트 포털과 Hyperclass의 원활한 통합을 보장할 수 있습니다.

![수동 DNS 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095809/original/82lhQooK-BZRhn3IMxjM7GcSDZbSWjjPNg.png?1717515282)

![DNS 레코드 정보](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095807/original/a8TzYf-3dnw-VbAwcvB557Klucd9jSYIRA.png?1717515282)

1) 이제 DNS 제공업체를 열고 레코드를 추가합니다. 레코드 추가 방식은 대부분 비슷하지만, 제공업체에 따라 약간의 차이가 있을 수 있습니다. DNS 관리자로 가서 레코드 추가를 클릭하세요.

![DNS 관리자 레코드 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095808/original/NeCo_2dJkC96cNq4SD_gjAtSvrk-e1PSEg.png?1717515282)

2) Hyperclass에서 제공하는 레코드 타입을 선택합니다.

![레코드 타입 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095819/original/Mf13PeAVBfyHw2UVIcqy9npH7W7b2VFhmA.png?1717515282)

3) 호스트명을 "Name" 필드에 입력하고, Value/Target을 "target field"에 입력합니다.

![호스트명과 값 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095817/original/c1IMDbugE355g-RMxp50EGWBTEHgDNHCuQ.png?1717515282)

4) 레코드를 저장합니다. Cloudflare 사용 시 Proxy Status를 반드시 꺼야 합니다.

![레코드 저장 및 프록시 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095821/original/4M9zVsq-xWiE6yTlyTBccTJRD7V3pRHMwQ.png?1717515282)

이 수동 과정에 대해 더 자세히 알아보려면 [여기](../../06-사이트/how-to-set-up-root-domain-subdomain-for-your-funnels-websites-.md)를 참조하세요.

---

# Hyperclass에서 도메인을 추가할 수 있는 곳들

Hyperclass 내에는 도메인을 추가할 수 있는 곳이 여러 곳 있습니다. 각각을 간단히 살펴보고 더 자세히 알아볼 수 있는 리소스를 제공하겠습니다.

## 화이트라벨 도메인

데스크톱 웹 앱을 화이트라벨로 설정하면 고객이 기본 도메인 대신 귀하의 도메인과 상호작용하게 됩니다. 4단계만 따라하세요: DNS 레코드에 CNAME 생성, Hyperclass 에이전시 계정에서 설정, 에이전시 로고 업로드, 에이전시 이용약관 업데이트. DNS 레코드가 전파되면 고객은 귀하의 도메인을 사용하여 앱에 접근할 수 있으며, 로고와 이용약관 등 브랜딩 요소를 볼 수 있습니다.

화이트라벨에는 서브 도메인을 권장합니다. 대부분 에이전시에서는 화이트라벨 데스크톱 앱용 서브 도메인으로 "app"을 사용합니다.

![화이트라벨 도메인 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095824/original/RYqwtTH5ELlsyMXglUGtprsoLu3EhJsF3A.png?1717515282)

*경로: Agency View(에이전시 뷰) > Settings(설정) > Company Settings(회사 설정) > Whitelabel Domain(화이트라벨 도메인)*

화이트라벨 도메인 설정에 대한 자세한 정보는 [화이트라벨 도메인 설정 방법](../../25-애드온-세일즈/Whitelabel-Desktop-App/how-to-set-up-a-whitelabel-domain-for-the-desktop-web-app.md)을 참조하세요.

---

## API 또는 브랜드 도메인

API/브랜드 도메인으로 시스템 생성 링크를 커스터마이징하여 브랜드 가시성과 링크 전달률을 향상시키세요. 이를 통해 폼, 설문, 캘린더 등의 링크를 개인화할 수 있습니다.

커스텀 API 도메인을 통해 시스템 생성 링크를 브랜딩하여 브랜드 인지도와 링크 전달률을 개선할 수 있습니다. 에이전시 레벨 회사 설정에서 API 도메인을 구성하여 모든 하위 계정의 기본 브랜드 도메인을 설정할 수 있습니다.

![API 도메인 설정 - 에이전시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095823/original/Ft7JzHK2yiJeQfqbYizWpfp41evuZq2edQ.png?1717515282)

*경로: Agency View(에이전시 뷰) > Settings(설정) > Company Settings(회사 설정) > API Domain(API 도메인)*

개별 고객을 위한 도메인을 커스터마이징하려면 하위 계정 레벨에서 브랜드 도메인을 설정할 수 있습니다. 이는 하위 계정 설정의 비즈니스 프로필에서 진행됩니다.

![API 도메인 설정 - 하위계정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095816/original/4VyHIMkwNpESs9yMBEBVy-jAHxNIO0EG6A.png?1717515282)

*경로: Sub-Account(하위 계정) > Settings(설정) > Business Profile(비즈니스 프로필) > API Domain(API 도메인)*

API/브랜드 도메인 설정에 대한 자세한 정보는 [브랜드 시스템 생성 링크 설정 방법](../../19-에이전시-뷰/기타/how-to-configure-brand-system-generated-links-api-domain-.md)을 참조하세요.

API 도메인과 브랜드 도메인 모두 서브 도메인을 사용하세요. 루트 도메인을 사용하면 도메인이 웹사이트에서 벗어나 다른 곳을 가리키게 됩니다.

---

## 사이트 (설정 > 도메인)

계정에 도메인을 통합하면 웹사이트와 퍼널 기능의 잠재력이 열립니다. 이 가이드는 DNS 설정, 하위 계정과 도메인 연결, SSL 오류 및 404 오류 등 일반적인 문제 해결을 포함하여 수동으로 도메인을 구성하는 방법을 자세히 안내합니다.

![사이트 도메인 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095830/original/eSAldtQTlORLqsoMGuuptYJI9sCEsD6evg.png?1717515282)

경로: Sub-Account(하위 계정) > Settings(설정) > Domains(도메인)

웹사이트에 도메인을 추가하는 방법에 대한 자세한 정보는 [퍼널/웹사이트용 루트/서브도메인 설정 방법](../../06-사이트/how-to-set-up-root-domain-subdomain-for-your-funnels-websites-.md)을 참조하세요.

---

## 이메일 발송 도메인

이메일 마케팅 효과를 극대화하려면 발신자 신뢰도와 전달률을 우선시하세요. LC 이메일 시스템의 전용 발송 도메인을 통해 이메일 커뮤니케이션을 제어하고, 브랜드 신뢰성을 높이며, 스팸 필터 위험을 줄일 수 있습니다. 이 설정은 맞춤형 알림 이메일과 특정 카테고리 타겟팅에 이상적이며, 효율적인 전달을 보장합니다. 기존 이메일 서비스와의 충돌을 방지하려면 서브 도메인을 사용하여 전용 도메인을 설정하세요. 전용 발송 도메인은 긍정적인 발신자 신뢰도를 유지하고 LC 이메일로 효과적인 이메일 마케팅을 달성하는 핵심입니다.

- **추가 MX 레코드 추가**

Google Domains 같은 일부 도메인 호스트는 하나의 도메인에 하나의 MX 레코드만 설정할 수 있습니다. 이런 경우 도메인 레지스트리에 추가 레코드를 넣을 수 있는 옵션이 있을 수 있으며, 여기에 두 번째 값을 포함해야 합니다.

![이메일 발송 도메인 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095829/original/hcq0UeChnG-9hDKlXxqS5zYyMdjHmZ4xNA.png?1717515282)

에이전시 레벨 이메일 서비스: Agency View(에이전시 뷰) > Settings(설정) > Email Services(이메일 서비스) > Dedicated domain(전용 도메인)

하위 계정 레벨 이메일 서비스: Sub-Account(하위 계정) > Settings(설정) > Email Services(이메일 서비스) > Dedicated Domain(전용 도메인)

전용 이메일 발송 도메인 설정 과정에 대한 자세한 정보는 [전용 발송 도메인 설정 방법](how-to-set-up-a-dedicated-sending-domain-lc-email-.md)을 참조하세요.

---

## 클라이언트 포털 도메인 (커뮤니티, 강의)

클라이언트 포털은 제휴, 멤버십, 커뮤니티 관리를 위한 안전하고 중앙화된 Hyperclass 플랫폼을 제공하여 클라이언트-비즈니스 상호작용을 변화시킵니다. 포털은 제휴 관리자 수수료, 커뮤니티 상호작용, 멤버십 강의 활동을 중앙화하는 동적 인터페이스로 기능합니다. 커스텀 도메인과 브랜딩 옵션으로 클라이언트 참여를 간소화하여 브랜드-클라이언트 관계를 강화합니다. 향상된 커뮤니케이션과 클라이언트 자율성으로 더 큰 만족도와 충성도를 얻을 수 있습니다.

이 문서는 특정 비즈니스 요구사항에 맞춰 포털을 설정하고 커스터마이징하는 방법을 안내하여 클라이언트가 자율적으로 작업을 수행할 수 있게 합니다.

![클라이언트 포털 도메인 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095828/original/pE8FkmSirGnzByVygxv8KkZ-ogkjwzVFcw.png?1717515282)

경로: Sub-Account(하위 계정) > Sites(사이트) > ClientPortal(클라이언트포털) > API Domain(API 도메인)

클라이언트 포털 설정에 대한 자세한 정보는 [클라이언트 포털 설정 방법](../../39-클라이언트-포털/Client-Portal/how-to-set-up-the-client-portal-.md)을 참조하세요.

---

## 워드프레스

워드프레스 호스팅을 통해 기존 워드프레스 사이트를 마이그레이션하거나 새 사이트를 생성할 수 있습니다. 도메인을 연결한 후, 사용자는 워드프레스 대시보드, 사용자 관리, 백업 및 복원, 고급 설정 등 필수 기능에 접근할 수 있습니다.

새 웹사이트를 시작하거나 기존 웹사이트를 관리하는 경우, 이 가이드는 고객을 위한 워드프레스 설정 프로세스를 효과적으로 간소화하는 유용한 지침과 인사이트를 제공합니다.

![워드프레스 도메인 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095831/original/xBtwh9LbbbyeTDtR7LOC2Tjixy-NKbmPwg.png?1717515282)

경로: Sub-Account(하위 계정) > Sites(사이트) > Wordpress(워드프레스) > Add Domain(도메인 추가)

워드프레스 도메인 설정에 대한 자세한 정보는 [워드프레스 클라이언트 측 설정 시작 가이드](../../36-기타/리커버리/getting-started-with-wordpress-client-side-setup-guide.md)를 참조하세요.

---

# 도메인 용어집 - 알아두어야 할 핵심 단어들

| 용어 | 예시 | 설명 |
|------|------|------|
| Domain(도메인) | www.gohighlevel.com | 웹사이트, 이메일 호스팅 등 온라인 서비스의 디지털 주소 |
| Root Domain(루트 도메인) | gohighlevel.com | URL에서 "www." 뒤에 나타나는 웹사이트의 주요 주소 (예: "www.gohighlevel.com"에서 루트 도메인은 "gohighlevel.com"). 웹사이트의 메인 진입점 역할 |
| Subdomain(서브 도메인) | help.gohighlevel.com | 루트 도메인의 확장으로, 온라인 인프라의 특정 섹션이나 영역으로 사용자를 안내 (예: 지원용 "help.domain.com") |
| Hostname(호스트명) | ![호스트명 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095813/original/_yK4XozIWht9RuVCgkZPZLj2RS-PgXlVxA.png?1717515282) | 레코드에서 사용되는 이름/값으로, 일반적으로 사용되는 서브 도메인. 이를 통해 "help.gohighlevel.com" 같은 서브 도메인이 "www.highlevel.com"과 독립적으로 작동 |
| Data/Target/Value(데이터/대상/값) | ![데이터값 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095812/original/vLgs8iDxu5UEvVPjhHmwDc0COPb0G20twQ.png?1717515282) | URL이 의도된 웹사이트 데이터를 표시하도록 하는 값 |
| Nameservers(네임서버) | GoDaddy, Cloudflare, Google 등 | DNS 레코드를 정리하고 제어하는 디렉토리. 인터넷에 어느 도메인 제공업체(예: GoDaddy, Cloudflare 등)가 도메인을 제어하는지 알려줌 |
| DNS (Dedicated Name Servers) | ![DNS 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095815/original/OK0coxwyfKCwvT4GTuhBhFWJm35KSh-OuA.png?1717515282) | 특정 URL이 방문될 때 웹사이트를 표시하도록 인터넷에 알려주고, 이메일 제공업체가 도메인 이름에서 이메일을 발송할 수 있게 하는 레코드 |
| TXT | ![TXT 레코드 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095810/original/XgKktnkym29TrLhZdbDE9ZUxHWtMd3m0OQ.png?1717515282) | 스팸 방지를 위한 이메일 발송과 도메인 인증을 생성하여 도메인을 보호하는데 사용되는 TXT 레코드 |
| MX | ![MX 레코드 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095814/original/3rDvCDQP1_qG-XwtVojf_EOOmjQXYj39bA.png?1717515282) | 이메일이 라우팅될 위치를 알려주는 메일 교환(MX) 레코드. Hyperclass에서 이메일을 송수신하는데 사용됨 |
| CNAME | ![CNAME 레코드 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095811/original/8cdtZ17kqkLPdZnKQMkBwVtW08YLYykVPg.png?1717515282) | 다른 도메인을 가리키는 CNAME 레코드. 서브 도메인 생성 시 일반적으로 사용됨 |
| A Record(A 레코드) | ![A 레코드 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095818/original/Euay6ddSoczuJvgIyaQABt4wvVqK5JNtKA.png?1717515282) | 웹사이트를 호스팅하는 IP 주소를 가리키는 A 레코드. 루트 도메인이 주 웹사이트를 가리키도록 할 때 일반적으로 사용됨 |
| DMARC | ![DMARC 레코드 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095820/original/vBdK9jdlUVOa9fmp-DSBENEfTwdHxgN5zQ.png?1717515282) | 이메일 스푸핑을 방지하여 스캐머와 도메인 무