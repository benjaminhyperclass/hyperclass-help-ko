---
원문: /support/solutions/articles/155000002561-how-to-set-up-different-domain-types-in-highlevel-websites-email-wordpress-more
번역일: 2026-11-06
카테고리: 06-사이트
---

# 도메인 유형별 설정 가이드: 웹사이트, 이메일, WordPress 등

하이퍼클래스에서는 웹사이트, 퍼널, WordPress, 이메일 발송, 클라이언트 포탈, 에이전시 브랜딩마다 도메인이나 서브 도메인을 따로 써요. 이 문서는 어떤 도메인 유형이 있는지, 내게 맞는 유형이 무엇인지 알려 드려요. 알맞은 유형을 고르면 DNS 레코드가 충돌하지 않고 서비스를 연결할 수 있어요.

DNS 레코드와 단계별 설정 방법은 연결하려는 서비스의 설정 문서를 따라 하세요.

## 어떤 도메인이 필요한가요?

하이퍼클래스 서비스마다 도메인을 쓰는 목적이 달라요. 무엇을 게시하고, 브랜딩하고, 인증할지 먼저 정하면 DNS를 바꾸기 전에 알맞은 도메인 설정을 고를 수 있어요.

| 도메인 유형 | 이럴 때 사용해요 |
| --- | --- |
| 웹사이트/퍼널 도메인 | 웹사이트, 퍼널, 스토어, 블로그 등 지원되는 사이트 기능을 게시할 때 |
| 하이퍼클래스에서 구매한 도메인 | 하이퍼클래스에서 직접 구매하고 관리하는 도메인을 쓸 때 |
| 화이트라벨 도메인 | 에이전시 브랜드가 적용된 하이퍼클래스 앱·로그인 주소를 제공할 때 |
| API/브랜드 도메인 | 하이퍼클래스 서비스 중 브랜드 도메인을 지원하는 서비스에 쓸 때 |
| 전용 발송 도메인 | 하이퍼클래스 이메일로 메일을 보낼 때 쓰는 도메인을 인증할 때 |
| 클라이언트 포탈 도메인 | 클라이언트 포탈에 브랜드 주소를 제공할 때 |
| WordPress 도메인 | 하이퍼클래스에서 호스팅하는 WordPress 사이트를 게시할 때 |

{% hint style="warning" %}
한 도메인 유형에 필요한 DNS 레코드를 다른 유형에 그대로 쓰면 안 돼요. 연결하려는 서비스에서 하이퍼클래스가 안내하는 설정 방법을 따르세요.
{% endhint %}

## 도메인이란?

도메인은 웹사이트, 이메일 호스팅 같은 온라인 서비스의 주소예요. DNS를 통해 서비스를 IP 주소와 연결해 줘요. 도메인이 있어야 웹사이트에 접속하고 이메일을 주고받을 수 있어요.

도메인은 웹사이트 호스팅, 화이트라벨 브랜딩, 브랜드/API 도메인 설정, 이메일 설정, 클라이언트 포털에 모두 필요해요. 하이퍼클래스 사용자가 온라인 활동을 만들어 가는 바탕이 되는 요소예요.

### 루트 도메인과 서브 도메인

도메인을 다룰 때는 루트 도메인과 서브 도메인을 구분해야 해요.

- 루트 도메인 (예: "mywebsite.com")
  - 루트 도메인은 웹사이트의 기본 주소예요. URL에서 "www." 뒤에 나오는 부분이고, 예를 들어 "www.mywebsite.com"의 루트 도메인은 "mywebsite.com"이에요. 웹사이트의 가장 기본적인 접속 주소예요.
- 서브 도메인 (예: "help.domain.com")
  - 서브 도메인은 루트 도메인에서 뻗어 나온 주소로, 방문자를 특정 영역으로 안내해요. 예를 들어 "help.domain.com"은 고객 지원용으로 쓸 수 있어요. 메인 사이트에 영향을 주지 않고 별도의 콘텐츠, 랜딩 페이지, 마케팅 캠페인을 운영할 수 있어요. 광고, 프로모션, SEO 전략을 나눠 쓸 때도 유용해요.

{% hint style="warning" %}
루트 도메인을 추가할 때는 조심하세요. 이미 사용 중인 루트 도메인을 추가해서 기존 메일함이나 사이트가 끊기는 경우가 많아요. 루트 도메인을 다른 곳에서 쓰고 있다면 서브 도메인을 추가하길 권해요.
{% endhint %}

## Domain Connect로 간편하게 도메인 연결하기

Domain Connect는 지원되는 도메인 제공업체에서 DNS 레코드를 자동으로 설정해 줘요. 레코드를 직접 만들 일이 줄어듭니다. 내 도메인 제공업체에서 Domain Connect를 쓸 수 있으면 하이퍼클래스의 안내에 따라 승인하고 연결을 마치세요.

자세한 내용은 [Domain Connect 기능 사용 방법](../../42-통합/기타/how-to-use-the-domain-connect-feature.md)을 참고하세요.

![Domain Connect로 도메인 연결하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095806/original/hrpCoz1Kx3xl9cE9J2HRAABgfYYjIdiccA.png?1717515282)

### 직접 설정하기

도메인 제공업체가 Google, Cloudflare, GoDaddy가 아니라면 DNS를 직접 설정해야 해요. 하이퍼클래스가 필요한 레코드 값을 만들어 주니, 그 값을 도메인 제공업체에 입력하면 돼요. 이렇게 하면 브랜드 도메인, 웹사이트/퍼널, 전용 도메인, 클라이언트 포탈에 도메인을 연결할 수 있어요.

![하이퍼클래스에서 생성한 DNS 레코드 값 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095809/original/82lhQooK-BZRhn3IMxjM7GcSDZbSWjjPNg.png?1717515282)

![DNS 레코드 값 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095807/original/a8TzYf-3dnw-VbAwcvB557Klucd9jSYIRA.png?1717515282)

1. 사용하는 DNS 제공업체를 열고 레코드를 추가해요. 제공업체마다 조금씩 다르지만 방법은 비슷해요. DNS 관리 화면에서 레코드 추가(Add record)를 클릭하세요.

   ![DNS 관리 화면에서 레코드 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095808/original/NeCo_2dJkC96cNq4SD_gjAtSvrk-e1PSEg.png?1717515282)

2. 하이퍼클래스가 안내한 레코드 유형을 선택하세요.

   ![레코드 유형 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095819/original/Mf13PeAVBfyHw2UVIcqy9npH7W7b2VFhmA.png?1717515282)

3. 호스트 이름(Hostname)은 "Name" 필드에, 값/대상(Value/Target)은 "Target" 필드에 입력하세요.

   ![호스트 이름과 대상 값 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095817/original/c1IMDbugE355g-RMxp50EGWBTEHgDNHCuQ.png?1717515282)

4. 레코드를 저장하세요. Cloudflare를 쓴다면 프록시 상태(Proxy Status)를 꺼야 해요.

   ![레코드 저장 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095821/original/4M9zVsq-xWiE6yTlyTBccTJRD7V3pRHMwQ.png?1717515282)

직접 설정하는 방법은 [퍼널/웹사이트용 루트 도메인·서브 도메인 설정 방법](../트러블슈팅/how-to-set-up-root-domain-subdomain-for-funnels-websites.md)에서 더 자세히 볼 수 있어요.

## 하이퍼클래스에서 도메인을 추가하는 곳

하이퍼클래스에는 도메인을 추가하는 곳이 여러 군데 있어요. 하나씩 간단히 살펴보고, 더 알아볼 수 있는 문서도 함께 안내해 드릴게요.

### 화이트라벨 도메인

데스크톱 웹 앱을 화이트라벨로 설정하면 고객이 기본 도메인 대신 내 도메인으로 앱을 이용해요. 에이전시 관리자만 쓸 수 있어요. 설정은 네 단계예요.

1. DNS 레코드에 CNAME을 만드세요.
2. 하이퍼클래스 에이전시 계정에서 설정하세요.
3. 에이전시 로고를 업로드하세요.
4. 에이전시 이용약관을 업데이트해요.

DNS 레코드가 적용되고 나면 고객이 내 도메인으로 앱에 접속해서 내 로고와 이용약관 같은 브랜드 요소를 볼 수 있어요.

{% hint style="info" %}
화이트라벨에는 서브 도메인을 권장해요. 에이전시에서는 화이트라벨 데스크톱 앱의 서브 도메인으로 "app"을 가장 많이 써요.
{% endhint %}

**Agency View**(에이전시 보기) > **설정 > 회사 설정 > Whitelabel**(화이트라벨)로 이동하세요.

화이트라벨 도메인 설정 방법은 데스크톱 웹 앱용 화이트라벨 도메인 설정 방법을 참고하세요.

![화이트라벨 도메인 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080577419/original/pJtVMPba3s8y1kMogTs1wQOrer8YwHP4cg.png?1789034409)

### API 도메인 / 브랜드 도메인

API/브랜드 도메인으로 시스템이 만드는 링크를 바꾸면 브랜드 인지도와 링크 전달률을 높일 수 있어요. 폼, 설문, 캘린더 등의 링크를 내 브랜드에 맞게 바꿀 수 있어요.

커스텀 API 도메인을 쓰면 시스템 생성 링크에 브랜드를 입힐 수 있어요. 에이전시 관리자는 에이전시 수준의 회사 설정에서 API 도메인을 설정해 모든 서브 계정의 기본 브랜드 도메인으로 정할 수 있어요.

**Agency View**(에이전시 보기) > **설정 > 회사 설정 > White Label**(화이트라벨)로 이동하세요.

고객마다 도메인을 따로 정하고 싶다면 서브 계정 수준에서 브랜드 도메인을 설정해요. 서브 계정 설정의 비즈니스 프로필에서 할 수 있어요.

**서브 계정 > 설정 > 비즈니스 프로필 > 브랜드 도메인**으로 이동하세요.

![브랜드 도메인 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080577998/original/7GLW_9OzvZCCtGvqTJYkHNOAEBITvFpeOA.png?1789034623)

API/브랜드 도메인 설정 방법은 [시스템 생성 링크 브랜딩 설정 방법](../../11-설정/branding-system-generated-links-api-domain.md)을 참고하세요.

{% hint style="warning" %}
API 도메인과 브랜드 도메인에는 모두 서브 도메인을 쓰세요. 여기에 루트 도메인을 쓰면 도메인이 내 웹사이트가 아닌 다른 곳을 가리키게 돼요.
{% endhint %}

### 사이트 도메인 (설정 > 도메인)

사이트 도메인은 하이퍼클래스의 웹사이트, 퍼널, 스토어, 블로그 등 지원되는 사이트 기능에 쓰이는 공개 URL이에요.

**서브 계정 > 설정 > 도메인**에서 관리하세요.

외부 도메인을 연결할 때는 하이퍼클래스에 표시되는 DNS 레코드를 따르세요. DNS 제공업체에 필요한 레코드를 추가한 뒤 하이퍼클래스로 돌아와 도메인을 인증하고 연결하면 돼요.

### 하이퍼클래스에서 구매한 도메인

하이퍼클래스에서 구매한 도메인은 플랫폼 안에서 바로 관리할 수 있어요. 기본적인 도메인 관리를 위해 별도 등록 대행업체를 쓰지 않아도 돼요. 도메인을 외부 제공업체에서 연결한 것이 아니라 하이퍼클래스에서 직접 구매했을 때 이 방법을 쓰세요. 설정과 관리 방법은 "하이퍼클래스에서 구매한 도메인 설정 및 연결" 문서를 참고하세요.

![하이퍼클래스에서 구매한 도메인 관리 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080578348/original/k2kvxh9HkteyBNSXoh_ei3TO6tXSnGLNcg.png?1789034734)

**서브 계정 > 설정 > 도메인**으로 이동하세요.

웹사이트에 도메인을 추가하는 방법은 [퍼널/웹사이트용 루트 도메인·서브 도메인 설정 방법](../트러블슈팅/how-to-set-up-root-domain-subdomain-for-funnels-websites.md)을 참고하세요.

### 이메일 발송 도메인

이메일 마케팅 효과를 높이려면 발신자 평판과 전달률이 중요해요. 하이퍼클래스 이메일에서 전용 발송 도메인을 쓰면 이메일 발송을 직접 관리하고 브랜드 신뢰도를 높일 수 있어요. 스팸 필터에 걸릴 위험도 줄어요. 맞춤 알림 이메일을 보내거나 특정 분류의 수신자를 대상으로 할 때 알맞아요. 기존 이메일 서비스와 충돌하지 않도록 전용 도메인은 서브 도메인으로 설정하세요. 전용 발송 도메인은 좋은 발신자 평판을 유지하고 하이퍼클래스 이메일로 효과적인 이메일 마케팅을 하는 데 핵심이에요.

전용 발송 도메인은 하이퍼클래스 이메일로 메일을 보낼 때 쓰는 도메인을 인증해요. 전용 발송 도메인을 쓰면 이메일 인증이 웹사이트, 퍼널, 클라이언트 포탈 등 다른 하이퍼클래스 서비스에 쓰는 도메인과 분리돼요.

발송 도메인은 **설정 > 이메일 서비스 > Dedicated Domain and IP**(전용 도메인 및 IP) **> 도메인 추가**에서 설정하세요. 하이퍼클래스가 발송 도메인에 필요한 DNS 레코드를 만들어 줘요. 화면에 표시된 레코드를 DNS 제공업체에 추가한 뒤 하이퍼클래스로 돌아와 설정을 인증하세요. 다른 도메인이나 예전 설정의 레코드를 복사하지 말고, 내 도메인용으로 생성된 DNS 값을 사용하세요.

![이메일 발송 도메인 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095829/original/hcq0UeChnG-9hDKlXxqS5zYyMdjHmZ4xNA.png?1717515282)

에이전시 수준의 이메일 서비스는 **Agency View**(에이전시 보기) > **설정 > 이메일 서비스 > 전용 도메인**으로 이동하세요. 에이전시 관리자만 쓸 수 있어요.

서브 계정 수준의 이메일 서비스는 **서브 계정 > 설정 > 이메일 서비스 > 전용 도메인**으로 이동하세요.

전용 이메일 발송 도메인 설정 과정은 [전용 이메일 발송 도메인 설정 방법](../../09-이메일/LC-Email-Dedicated-Domain-and-IP/dedicated-email-sending-domains-overview-setup.md)을 참고하세요.

### 클라이언트 포탈 도메인 (커뮤니티, 코스)

클라이언트 포털은 하이퍼클래스 안에서 제휴, 멤버십, 커뮤니티를 관리하는 안전한 통합 공간이에요. 제휴 관리자 커미션, 커뮤니티 활동, 멤버십 코스 활동을 한곳에 모아 보여 줘요. 커스텀 도메인과 브랜딩 옵션으로 고객 응대도 간편해지고, 브랜드와 고객의 관계도 탄탄해져요. 소통이 원활해지고 고객이 스스로 할 수 있는 일이 늘어나면 만족도와 충성도도 높아져요.

포털을 설정하고 비즈니스에 맞게 꾸미는 방법은 아래 문서에서 안내해요. 고객이 스스로 할 수 있는 작업도 설정할 수 있어요.

**서브 계정 > 사이트 > 클라이언트 포탈 > 설정**으로 이동하세요.

![클라이언트 포탈 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080578699/original/qWhwx9HIyh0rgRbb_4jJECSA3jiZwhgqwQ.png?1789034831)

![클라이언트 포탈 도메인 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080578814/original/FpK2O-Rwtgc9XCLlJg5nIcA3nOUS4yXNWA.png?1789034873)

클라이언트 포탈 설정 방법은 [클라이언트 포탈 설정 방법](../../39-클라이언트-포털/Client-Portal/how-to-set-up-the-client-portal.md)을 참고하세요.

### WordPress

WordPress 호스팅에서는 기존 WordPress 사이트를 옮겨 오거나 새 사이트를 만들 수 있어요. 도메인을 연결하면 WordPress 대시보드, **사용자 관리**, **백업** 및 **복원**, **고급 설정** 같은 주요 기능을 쓸 수 있어요.

새 웹사이트를 시작하든 기존 사이트를 관리하든, 고객을 위한 WordPress 설정 과정을 이 가이드로 효율적으로 진행할 수 있어요.

WordPress 도메인은 하이퍼클래스에서 호스팅하는 WordPress 웹사이트의 공개 URL이에요. WordPress 도메인 라우팅은 일반 사이트 도메인과 따로 관리해요. **서브 계정 > 사이트 > WordPress**로 이동한 뒤 해당 WordPress 사이트를 열고, 도메인 관리 옵션에서 도메인을 연결하세요. 그 WordPress 설정용으로 생성된 DNS 레코드를 따르세요.

WordPress 도메인 설정은 [WordPress 호스팅 설정 방법](../워드프레스/how-to-set-up-wordpress-hosting-for-clients.md)을 참고하세요.

![WordPress 도메인 연결 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095831/original/xBtwh9LbbbyeTDtR7LOC2Tjixy-NKbmPwg.png?1717515282)

## 도메인 용어집

| 용어 | 예시 | 설명 |
| --- | --- | --- |
| 도메인 | www.example.com | 웹사이트, 이메일 호스팅 같은 온라인 서비스의 주소예요. |
| 루트 도메인 | example.com | 웹사이트의 기본 주소로, URL에서 "www." 뒤에 나오는 부분이에요. 예를 들어 "www.example.com"의 루트 도메인은 "example.com"이에요. 웹사이트의 가장 기본적인 접속 주소예요. |
| 서브 도메인 | help.example.com | 루트 도메인에서 뻗어 나온 주소로, 방문자를 특정 영역으로 안내해요. 예를 들어 "help.domain.com"은 고객 지원용으로 쓸 수 있어요. |
| 호스트 이름(Hostname) |  | 레코드에 쓰는 이름/값으로, 보통 사용하는 서브 도메인이에요. 덕분에 "help.example.com" 같은 서브 도메인이 "www.example.com"과 따로 동작해요. |
| 데이터/대상/값(Data/Target/Value) |  | URL을 열었을 때 원하는 웹사이트 데이터가 보이도록 알려 주는 값이에요. |
| 네임서버(Nameservers) | GoDaddy, Cloudflare, Google 등 | DNS 레코드를 정리하고 제어하는 목록이에요. 어떤 도메인 제공업체(GoDaddy, Cloudflare 등)가 이 도메인을 관리하는지 인터넷에 알려 줘요. |
| DNS(Domain Name System)|  | 특정 URL에 접속했을 때 어떤 웹사이트를 보여 줄지 알려 주는 레코드예요. 이메일 제공업체가 도메인 이름으로 메일을 보낼 수 있게 해 주기도 해요. |
| TXT |  | TXT 레코드는 스팸을 막기 위한 이메일 발송에 쓰여요. 도메인 인증을 만들어 도메인을 보호하는 데도 쓰여요. |
| MX |  | 메일 교환(Mail Exchange, MX) 레코드는 이메일을 어디로 보낼지 알려 줘요. 하이퍼클래스에서 이메일을 보내고 받는 데 쓰여요. |
| CNAME |  | CNAME 레코드는 다른 도메인을 가리켜요. 서브 도메인을 만들 때 자주 써요. |
| A 레코드 |  | A 레코드는 웹사이트를 호스팅하는 IP 주소를 가리켜요. 루트 도메인이 메인 웹사이트를 가리키게 할 때 자주 써요. |
| DMARC |  | DMARC 레코드는 이메일 위장(스푸핑)을 막는 TXT 레코드예요. 사기꾼이나 허가받지 않은 사용자가 내 도메인을 쓰지 못하게 이메일 발송을 보호해요. |

## 도메인 연결이 안 될 때

도메인 연결 문제는 대부분 DNS 레코드가 잘못되었거나, 레코드끼리 충돌하거나, DNS 전파가 끝나지 않았을 때 생겨요. 현재 도메인의 네임서버를 관리하지 않는 제공업체에 레코드를 추가했을 때도 생겨요.

도메인이 연결되지 않으면 다음을 확인하세요.

- 도메인을 연결하려는 하이퍼클래스 서비스가 무엇인지 확인하세요.
- DNS 제공업체의 레코드와 하이퍼클래스에 현재 표시된 DNS 레코드를 비교하세요.
- 같은 호스트 이름을 쓰는 A 레코드나 CNAME 레코드가 충돌하는지 확인하세요.
- 도메인의 현재 네임서버를 관리하는 제공업체에서 DNS를 수정하고 있는지 확인하세요.
- DNS 변경이 전파되도록 충분히 기다리세요.
- 하이퍼클래스로 돌아와 **도메인 인증**을 다시 시도하세요.

문제가 계속되면 웹사이트/퍼널, WordPress, 이메일, 클라이언트 포탈, 화이트라벨 등 해당 도메인 설정의 문제 해결 문서를 따라 하세요.

## 자주 묻는 질문

### 도메인이 없으면 어떻게 하나요?

하이퍼클래스에서 직접 구매하거나 지원되는 외부 도메인 등록 대행업체에서 구매할 수 있어요. 도메인을 구매한 뒤에는 해당 하이퍼클래스 서비스의 도메인 설정 절차에 따라 연결하세요.

### 이미 쓰고 있는 도메인을 이메일에 쓸 수 있나요?

기존 도메인으로 전용 도메인을 설정할 수 있어요. 하이퍼클래스에서 이메일 발송용 도메인을 설정할 때는 서브 도메인을 쓰길 권해요. 현재 쓰는 이메일 서비스에 영향을 주지 않기 위해서예요.

### 전용 도메인에 Wix를 쓸 수 있나요?

Wix는 같은 우선순위의 MX 레코드를 여러 개 추가할 수 없어요. Wix에 연결된 도메인을 쓰려면 네임서버를 다른 도메인 호스트로 바꿔야 해요. 자세한 내용은 "하이퍼클래스 이메일 / Mailgun 답장이 Wix 도메인에서 작동하지 않을 때" 문서를 참고하세요.

### Cloudflare에서 CNAME 레코드가 인식되지 않아요.

Cloudflare에 추가한 CNAME 레코드는 프록시를 꺼야 레코드가 전파돼요.

![Cloudflare에서 프록시를 끈 CNAME 레코드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095826/original/MFQYCch3__QKBwKhSpCrSniblWBKnpgYCA.png?1717515282)

### 이미 사용 중인 도메인이 있어도 되나요?

네. 기존 루트 도메인이 이미 웹사이트나 계속 유지하려는 다른 서비스에 연결되어 있다면, 하이퍼클래스 서비스에 알맞은 서브 도메인을 쓰세요(서비스에서 지원할 때). 그러면 기존 서비스와 새 하이퍼클래스 서비스가 서로 영향을 주지 않고 따로 동작해요.
