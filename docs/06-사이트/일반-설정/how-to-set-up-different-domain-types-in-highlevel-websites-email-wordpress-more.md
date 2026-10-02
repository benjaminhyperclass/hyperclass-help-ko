---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000002561-how-to-set-up-different-domain-types-in-하이퍼클래스-websites-email-wordpress-more
번역일: 2026-10-02
카테고리: 06-사이트 > 일반-설정
---

# 하이퍼클래스에서 도메인 유형별 설정 방법: 웹사이트, 이메일, WordPress 등

하이퍼클래스는 웹사이트(Websites), 퍼널(Funnels), WordPress, 이메일 발송, 클라이언트 포털(Client Portal), 에이전시(Agency) 브랜딩 등 다양한 제품에 도메인(Domain)과 서브도메인(Subdomain)을 사용해요. 올바른 도메인 유형을 선택해야 충돌하는 DNS 레코드 없이 원하는 서비스를 제대로 연결할 수 있어요.

이 가이드는 하이퍼클래스에서 사용되는 다양한 도메인 유형을 설명하고, 어떤 유형이 필요한지 판단하는 데 도움을 드려요. DNS 레코드와 단계별 설정 방법은 연결하려는 특정 하이퍼클래스 제품에 맞는 설정 가이드를 따라주세요.

---

**목차**

- [도메인이란 무엇인가요?](#What-is-a-Domain?) / [루트 도메인과 서브도메인이란](#What-are-Root-&-Sub-Domains)
- [Domain Connect로 손쉽게 도메인 연결하기](#Seamlessly-Connect-Domains-with-Domain-Connect) / [수동 설정 옵션](#Manual-Option)
- [하이퍼클래스에서 도메인을 추가하는 위치](#Places-to-Add-Domains-to-in-하이퍼클래스) / [화이트라벨 도메인](#Whitelabel-Domain)
- [API 또는 브랜드 도메인](#API-or-Branded-Domain)
- [사이트(설정 > 도메인)](#Sites-(Settings-%3E-Domains))
- [이메일 발송 도메인](#Email-Sending-Domain)
- [클라이언트 포털 도메인(커뮤니티, 강의)](#Client-Portal-Domain-(Communities,-Courses))
- [WordPress](#WordPress)
- [도메인 용어 사전 - 알아야 할 핵심 단어](#Domain-Glossary---Key-Words-to-Know)
- [문제 해결](#Troubleshooting) / [1. 중복된 A 레코드 확인](#1.-Check-for-Duplicate-A-Records%3A)
- [2. DNS 전파 확인](#2.-Confirm-DNS-Propagation)
- [3. DNS 설정 정확도 검토](#3.-Review-DNS-Settings-for-Accuracy%3A)
- [4. 도메인 DNS 연동 확인](#4.-Verify-Domain-DNS-Integration%3A)
- [5. 기타 가능한 원인 확인](#5.-Consider-Other-Potential-Causes%3A)
- [6. 추가 지원 요청](#6.-Seek-Additional-Assistance%3A)
- [FAQ](#FAQ) / [도메인이 없다면 어떻게 하나요?](#What-If-I-do-not-have-a-domain?)
- [기존 도메인을 이메일용으로 사용할 수 있나요?](#Can-I-use-an-existing-domain-for-my-email?)
- [전용 도메인으로 WIX를 사용할 수 있나요?](#Can-I-use-WIX-for-my-Dedicated-Domain?)
- [Cloudflare에서 CNAME 레코드가 인식되지 않아요.](#My-Cname-record-is-not-being-recognized-in-Cloudflare.)
- [이미 도메인이 있다면 어떻게 하나요?](#What-if-I-have-an-existing-domain?)

---

## 어떤 도메인이 필요한가요?

하이퍼클래스의 각 제품은 저마다 다른 목적으로 도메인을 사용해요. DNS를 변경하기 전에 무엇을 게시하고, 브랜딩하고, 인증하려는지 먼저 파악하면 올바른 도메인 구성을 선택하는 데 도움이 돼요.

| 도메인 유형 | 용도 |
|---|---|
| 웹사이트/퍼널 도메인 | 웹사이트, 퍼널, 스토어, 블로그 등 사이트(Sites) 관련 기능 게시 |
| 하이퍼클래스에서 구매한 도메인 | 하이퍼클래스를 통해 직접 구매하고 관리하는 도메인 사용 |
| 화이트라벨 도메인 | 에이전시 브랜드가 적용된 하이퍼클래스 애플리케이션/로그인 URL 제공 |
| API/브랜드 도메인 | 하이퍼클래스의 브랜딩 관련 서비스 지원 |
| 전용 발송 도메인 | 하이퍼클래스 이메일(LC Email)로 발송하는 데 사용되는 도메인 인증 |
| 클라이언트 포털 도메인 | 클라이언트 포털의 브랜드 URL 제공 |
| WordPress 도메인 | 하이퍼클래스를 통해 호스팅되는 WordPress 사이트 게시 |

**중요:** 하나의 도메인 유형을 위해 설정한 DNS 레코드를 다른 유형에 그대로 재사용하면 안 돼요. 연결하려는 특정 제품에 대해 하이퍼클래스가 제공하는 설정 안내를 그대로 따라주세요.

---

# 도메인이란 무엇인가요?

도메인은 DNS를 통해 IP 주소와 매핑되어 웹사이트, 이메일 호스팅 등 온라인 서비스의 디지털 주소 역할을 해요. 도메인 이름은 온라인 존재감의 핵심 요소로, 웹사이트 접근성을 높이고 이메일 커뮤니케이션을 가능하게 해줘요.

도메인은 웹사이트 호스팅, 화이트라벨 브랜딩, 브랜드/API 도메인 설정, 이메일 설정, 클라이언트 포털 등에 필수적이에요. 하이퍼클래스 사용자가 온라인 존재감을 구축하는 기반이 되죠.

## 루트 도메인과 서브도메인이란

도메인을 다룰 때는 루트 도메인(Root Domain)과 서브도메인(Subdomain)을 구분하는 것이 중요해요.

- **루트 도메인 (예: "mywebsite.com")**

  루트 도메인은 웹사이트의 기본 주소로, URL에서 "www." 뒤에 나오는 부분이에요(예: "www.mywebsite.com"에서 루트 도메인은 "mywebsite.com"). 웹사이트의 주요 진입점 역할을 해요.

- **서브도메인 (예: "help.domain.com")**

  서브도메인은 루트 도메인의 확장형으로, 온라인 인프라 안의 특정 섹션이나 영역으로 사용자를 안내해요(예: 고객 지원을 위한 "help.domain.com"). 이를 통해 메인 사이트에 영향을 주지 않고 별도의 콘텐츠, 랜딩 페이지, 마케팅 캠페인을 운영할 수 있어요. 광고, 프로모션, 서로 다른 SEO 전략을 활용할 때 유용해요.

**중요 안내:** 루트 도메인을 추가할 때는 주의하세요. 많은 사용자가 이미 사용 중인 루트 도메인을 추가했다가 실수로 기존 메일박스나 사이트가 망가지는 경우가 있어요. 루트 도메인이 다른 곳에서 이미 사용 중이라면 서브도메인을 추가하는 것을 권장해요.

---

## Domain Connect로 손쉽게 도메인 연결하기

Domain Connect는 지원되는 도메인 제공업체와 함께 DNS 레코드를 자동으로 구성해 주는 기능으로, 수동으로 레코드를 생성할 필요를 줄여줘요. 사용 중인 제공업체가 Domain Connect를 지원한다면, 하이퍼클래스의 안내에 따라 권한을 승인하고 연결을 완료하세요.

Domain Connect로 손쉽게 도메인을 연결하는 방법에 대한 자세한 내용은 [Domain Connect 기능 사용 방법](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000000734-how-to-use-the-domain-connect-feature-)을 참고해주세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095806/original/hrpCoz1Kx3xl9cE9J2HRAABgfYYjIdiccA.png?1717515282)

### 수동 설정 옵션

**도메인 제공업체가 Google, Cloudflare, GoDaddy가 아닌 경우**에는 수동으로 DNS를 구성해야 해요. 시스템이 필요한 레코드 값을 자동으로 생성해 주므로, 이를 도메인 제공업체 시스템에 그대로 입력하면 돼요. 이를 통해 브랜드 도메인, 웹사이트/퍼널, 전용 도메인, 클라이언트 포털 등에서 하이퍼클래스와 도메인을 원활하게 연동할 수 있어요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095809/original/82lhQooK-BZRhn3IMxjM7GcSDZbSWjjPNg.png?1717515282)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095807/original/a8TzYf-3dnw-VbAwcvB557Klucd9jSYIRA.png?1717515282)

1) 이제 사용 중인 DNS 제공업체에 접속해서 레코드를 추가해요. 레코드 추가 방식은 제공업체마다 약간씩 다르지만 대체로 유사해요. DNS 관리 화면으로 이동해서 레코드 추가 버튼을 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095808/original/NeCo_2dJkC96cNq4SD_gjAtSvrk-e1PSEg.png?1717515282)

2) 하이퍼클래스에서 제공한 레코드 유형을 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095819/original/Mf13PeAVBfyHw2UVIcqy9npH7W7b2VFhmA.png?1717515282)

3) "Name" 필드에 호스트네임(Hostname)을, "target" 필드에 값/대상(Value/Target)을 입력하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095817/original/c1IMDbugE355g-RMxp50EGWBTEHgDNHCuQ.png?1717515282)

4) 레코드를 저장하세요. Cloudflare를 사용 중이라면 프록시 상태(Proxy Status)를 꺼야 해요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095821/original/4M9zVsq-xWiE6yTlyTBccTJRD7V3pRHMwQ.png?1717515282)

이 수동 설정 과정에 대해 더 알아보려면 [여기](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/48001153720-how-to-set-up-root-domain-subdomain-for-your-funnels-websites-)를 참고해주세요.

---

# 하이퍼클래스에서 도메인을 추가하는 위치

하이퍼클래스 안에는 도메인을 추가할 수 있는 곳이 여러 곳 있어요. 각각을 간단히 살펴보고 더 알아볼 수 있는 자료도 함께 안내해드릴게요.

## 화이트라벨 도메인

데스크톱 웹 앱을 화이트라벨(Whitelabel)로 설정하면 고객이 기본 도메인이 아닌 자사 도메인을 통해 앱을 이용하게 돼요. 네 단계만 거치면 돼요: DNS 레코드에 CNAME을 만들고, 하이퍼클래스 에이전시 계정에서 설정하고, 에이전시 로고를 업로드하고, 에이전시 이용약관을 업데이트하면 돼요. DNS 레코드가 전파되면 고객은 자사 도메인으로 앱에 접속하고, 로고와 이용약관 같은 브랜딩 요소도 그대로 볼 수 있어요.

화이트라벨 설정에는 서브도메인을 사용하는 것을 권장해요. 대부분의 에이전시는 화이트라벨 데스크톱 앱의 서브도메인으로 "app"을 가장 많이 사용해요.

`Agency View(에이전시 뷰) > Settings(설정) > Company Settings(회사 설정) > Whitelabel(화이트라벨)`로 이동하세요.

화이트라벨 도메인 설정에 대한 자세한 내용은 [화이트라벨 도메인 설정 방법](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/48000982207-how-to-set-up-a-whitelabel-domain-for-the-desktop-web-app)을 참고해주세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080577419/original/pJtVMPba3s8y1kMogTs1wQOrer8YwHP4cg.png?1789034409)

---

## API 또는 브랜드 도메인

API/브랜드 도메인을 활용해 시스템에서 자동 생성되는 링크를 커스터마이징하면 브랜드 노출도와 링크 전달력을 높일 수 있어요. 이를 통해 폼(Form), 설문(Survey), 캘린더(Calendars) 등의 링크를 브랜드에 맞게 꾸밀 수 있어요.

커스텀 API 도메인을 사용하면 시스템 생성 링크에 브랜드를 적용할 수 있어서 브랜드 인지도와 링크 전달력이 향상돼요. 에이전시 레벨의 회사 설정에서 API 도메인을 구성하면 모든 하위 계정(Sub-account)에 적용되는 기본 브랜드 도메인을 설정할 수 있어요.

`Agency View(에이전시 뷰) > Settings(설정) > Company Settings(회사 설정) > White Label(화이트라벨)`로 이동하세요.

개별 고객을 위해 하위 계정 레벨에서 도메인을 커스터마이징하려면 브랜드 도메인(Branded Domain)을 별도로 설정할 수 있어요. 이는 하위 계정 설정 안의 비즈니스 프로필(Business Profile)에서 진행해요.

`Sub-Account(하위 계정) > Settings(설정) > Business Profile(비즈니스 프로필) > Branded Domain(브랜드 도메인)`으로 이동하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080577998/original/7GLW_9OzvZCCtGvqTJYkHNOAEBITvFpeOA.png?1789034623)

API/브랜드 도메인 설정에 대한 자세한 내용은 [시스템 생성 링크 브랜딩 설정 방법](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/48001143244-how-to-configure-brand-system-generated-links-api-domain-)을 참고해주세요.

API 도메인과 브랜드 도메인 모두 서브도메인을 사용하세요. 루트 도메인을 사용하면 도메인이 기존 웹사이트에서 벗어나 다른 곳을 가리키게 될 수 있어요.

---

## 사이트(설정 > 도메인)

사이트 도메인(Sites Domains)은 하이퍼클래스 웹사이트, 퍼널, 스토어, 블로그 등 사이트(Sites) 관련 기능에 사용되는 공개 URL을 제공해요.

다음 경로에서 도메인을 관리할 수 있어요:

`Sub-Account(하위 계정) → Settings(설정) → Domains(도메인)`

외부 도메인을 연결할 때는 하이퍼클래스에 표시되는 DNS 레코드를 그대로 따라주세요. 필요한 레코드를 DNS 제공업체에 추가한 뒤, 하이퍼클래스로 돌아와서 도메인을 확인하고 연결하세요.

## 하이퍼클래스를 통해 구매한 도메인

하이퍼클래스를 통해 구매한 도메인은 플랫폼 안에서 직접 관리할 수 있어서, 일상적인 도메인 관리를 위해 별도의 등록 업체를 사용할 필요가 줄어들어요. 외부 제공업체에서 연결한 것이 아니라 하이퍼클래스를 통해 직접 구매한 도메인일 때 이 옵션을 사용하세요. 설정과 관리 방법은 '하이퍼클래스에서 구매한 도메인 구성 및 연결하기' 문서를 참고하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080578348/original/k2kvxh9HkteyBNSXoh_ei3TO6tXSnGLNcg.png?1789034734)

`Sub-Account(하위 계정) > Settings(설정) > Domains(도메인)`로 이동하세요.

웹사이트에 도메인을 추가하는 방법에 대한 자세한 내용은 [퍼널/웹사이트의 루트/서브도메인 설정 방법](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/48001153720-how-to-set-up-root-domain-subdomain-for-your-funnels-websites-)을 참고해주세요.

---

## 이메일 발송 도메인

이메일 마케팅 효과를 극대화하려면 발신자 평판과 전달력을 최우선으로 고려해야 해요. 하이퍼클래스 이메일(LC Email) 시스템의 전용 발송 도메인을 사용하면 이메일 커뮤니케이션을 직접 제어할 수 있어서 브랜드 신뢰도를 높이고 스팸 필터에 걸릴 위험을 줄일 수 있어요. 커스텀 알림 이메일을 보내거나 특정 카테고리를 타겟팅할 때 유용하며, 효율적인 전달을 보장해요. 기존 이메일 서비스와 충돌하지 않도록 전용 도메인은 서브도메인으로 설정하세요. 전용 발송 도메인은 좋은 발신자 평판을 유지하고 하이퍼클래스 이메일로 효과적인 이메일 마케팅을 하는 데 핵심이에요.

전용 발송 도메인(Dedicated Sending Domain)은 하이퍼클래스 이메일로 이메일을 보낼 때 사용하는 도메인을 인증해요. 전용 발송 도메인을 사용하면 이메일 인증이 웹사이트, 퍼널, 클라이언트 포털 등 다른 하이퍼클래스 제품에서 사용하는 도메인과 분리돼요. 발송 도메인은 `Settings(설정) → Email Services(이메일 서비스) → Dedicated Domain and IP(전용 도메인 및 IP) → Add Domain(도메인 추가)`에서 설정하세요. 하이퍼클래스가 발송 도메인에 필요한 DNS 레코드를 자동으로 생성해줘요. 표시된 레코드를 DNS 제공업체에 추가한 뒤, 하이퍼클래스로 돌아와서 구성을 확인하세요. 다른 도메인이나 이전 설정의 레코드를 그대로 복사하지 말고, 반드시 해당 도메인 전용으로 생성된 DNS 값을 사용하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095829/original/hcq0UeChnG-9hDKlXxqS5zYyMdjHmZ4xNA.png?1717515282)

에이전시 레벨의 이메일 서비스는 `Agency View(에이전시 뷰) > Settings(설정) > Email Services(이메일 서비스) > Dedicated domain(전용 도메인)`으로 이동하세요.

하위 계정 레벨의 이메일 서비스는 `Sub-Account(하위 계정) > Settings(설정) > Email Services(이메일 서비스) > Dedicated Domain(전용 도메인)`으로 이동하세요.

전용 이메일 발송 도메인 설정에 대한 자세한 내용은 [전용 발송 도메인 설정 방법](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/48001226115-how-to-set-up-a-dedicated-sending-domain-lc-email-)을 참고해주세요.

---

## 클라이언트 포털 도메인(커뮤니티, 강의)

클라이언트 포털(Client Portal)은 제휴(Affiliate), 멤버십(Membership), 커뮤니티(Community) 관리를 위한 안전하고 중앙화된 플랫폼을 하이퍼클래스 안에서 제공함으로써 고객-비즈니스 간 상호작용 방식을 바꿔줘요. 포털은 제휴 관리자 커미션, 커뮤니티 활동, 멤버십 강의 활동을 하나로 모아주는 동적 인터페이스로 작동해요. 커스텀 도메인과 브랜딩 옵션으로 고객 참여를 간소화하고, 브랜드-고객 관계를 강화해요. 향상된 커뮤니케이션과 고객 자율성은 더 큰 만족도와 충성도로 이어져요.

이 문서는 비즈니스 요구에 맞게 포털을 설정하고 커스터마이징하는 방법을 안내해서, 고객이 자율적으로 행동할 수 있도록 도와줘요.

`Sub-Account(하위 계정) > Sites(사이트) > ClientPortal(클라이언트 포털) > Settings(설정)`로 이동하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080578699/original/qWhwx9HIyh0rgRbb_4jJECSA3jiZwhgqwQ.png?1789034831)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080578814/original/FpK2O-Rwtgc9XCLlJg5nIcA3nOUS4yXNWA.png?1789034873)

클라이언트 포털 설정에 대한 자세한 내용은 [클라이언트 포털 설정 방법](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000000193-how-to-set-up-the-client-portal-)을 참고해주세요.

---

## WordPress

WordPress 호스팅을 통해 기존 WordPress 사이트를 마이그레이션하거나 새 사이트를 만들 수 있어요. 도메인을 연결한 후에는 WordPress 대시보드, 사용자 관리, 백업 및 복원, 고급 설정 같은 필수 기능에 접근할 수 있어요.

새 웹사이트를 시작하든 기존 사이트를 관리하든, 이 가이드는 고객을 위해 WordPress 설정 과정을 효율적으로 진행할 수 있도록 유용한 안내와 정보를 제공해요.

WordPress 도메인은 하이퍼클래스를 통해 호스팅되는 WordPress 웹사이트의 공개 URL을 제공해요. WordPress 도메인 라우팅은 일반 사이트 도메인과는 별도로 관리돼요. `Sub-Account(하위 계정) → Sites(사이트) → WordPress`로 이동해서 해당 WordPress 사이트를 열고, 도메인 관리 옵션을 사용해 도메인을 연결하세요. 해당 WordPress 설정 전용으로 생성된 DNS 레코드를 따라주세요.

WordPress 도메인 설정에 대한 자세한 내용은 [WordPress 클라이언트 사이드 설정 가이드 시작하기](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/48001199648-getting-started-with-wordpress-client-side-setup-guide)를 참고해주세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095831/original/xBtwh9LbbbyeTDtR7LOC2Tjixy-NKbmPwg.png?1717515282)

---

# 도메인 용어 사전 - 알아야 할 핵심 단어

| 용어 | 예시 | 설명 |
|---|---|---|
| 도메인 | www.hyperclass.ai | 웹사이트, 이메일 호스팅 등 온라인 서비스의 디지털 주소 |
| 루트 도메인 | hyperclass.ai | 웹사이트의 기본 주소로, URL에서 "www." 뒤에 나오는 부분(예: "www.hyperclass.ai"에서 루트 도메인은 "hyperclass.ai"). 웹사이트의 주요 진입점 역할 |
| 서브도메인 | hyperclass.gitbook.io/hyperclass-docs | 루트 도메인의 확장형으로, 온라인 인프라 안의 특정 섹션이나 영역으로 사용자를 안내함(예: 고객 지원을 위한 "help.domain.com") |
| 호스트네임(Hostname) | ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095813/original/_yK4XozIWht9RuVCgkZPZLj2RS-PgXlVxA.png?1717515282) | 레코드에 사용되는 이름/값으로, 보통 사용 중인 서브도메인을 의미함. "hyperclass.gitbook.io/hyperclass-docs"와 같은 서브도메인이 "www.hyperclass.ai"와 독립적으로 작동하게 해줌 |
| 데이터/대상/값(Data/Target/Value) | ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095812/original/vLgs8iDxu5UEvVPjhHmwDc0COPb0G20twQ.png?1717515282) | URL이 의도한 웹사이트 데이터를 표시하도록 지정하는 값 |
| 네임서버(Nameservers) | GoDaddy, Cloudflare, Google 등 | DNS 레코드를 정리하고 제어하는 디렉토리. 어떤 도메인 제공업체(예: GoDaddy, Cloudflare 등)가 도메인을 관리하는지 인터넷에 알려줌 |
| DNS(Dedicated Name System) | ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095815/original/OK0coxwyfKCwvT4GTuhBhFWJm35KSh-OuA.png?1717515282) | 특정 URL에 접속했을 때 웹사이트를 표시하도록 알려주는 레코드로, 이메일 제공업체가 해당 도메인 이름으로 이메일을 보낼 수 있게 해줌 |
| TXT | ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095810/original/XgKktnkym29TrLhZdbDE9ZUxHWtMd3m0OQ.png?1717515282) | 스팸을 방지하고 도메인 소유를 인증하기 위한 이메일 발송용 레코드 |
| MX | ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095814/original/3rDvCDQP1_qG-XwtVojf_EOOmjQXYj39bA.png?1717515282) | 이메일이 어디로 라우팅될지 알려주는 메일 교환(Mail Exchange, MX) 레코드. 하이퍼클래스 안에서 이메일 송수신에 사용됨 |
| CNAME | ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095811/original/8cdtZ17kqkLPdZnKQMkBwVtW08YLYykVPg.png?1717515282) | 다른 도메인을 가리키는 레코드. 서브도메인을 만들 때 흔히 사용됨 |
| A 레코드 | ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095818/original/Euay6ddSoczuJvgIyaQABt4wvVqK5JNtKA.png?1717515282) | 웹사이트를 호스팅하는 IP 주소를 가리키는 레코드. 보통 루트 도메인이 메인 웹사이트를 가리키도록 할 때 사용됨 |
| DMARC | ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095820/original/vBdK9jdlUVOa9fmp-DSBENEfTwdHxgN5zQ.png?1717515282) | 이메일 스푸핑(위조)을 방지하고 스캐머와 도메인 무단 사용으로부터 이메일 발송을 보호하는 TXT 레코드 |

---

# 도메인 연결 문제 해결하기

도메인 연결 문제는 주로 잘못된 DNS 레코드, 충돌하는 레코드, DNS 전파 미완료, 또는 현재 도메인의 네임서버를 관리하지 않는 제공업체에 레코드를 추가해서 발생해요.

도메인이 연결되지 않는다면:

- 도메인을 어떤 하이퍼클래스 제품에 연결하려는 것인지 확인하세요.
- DNS 제공업체에 설정된 레코드와 하이퍼클래스에 현재 표시된 DNS 레코드를 비교하세요.
- 같은 호스트네임을 사용하는 A 레코드나 CNAME 레코드가 충돌하지 않는지 확인하세요.
- 도메인의 현재 네임서버를 관리하는 제공업체에서 DNS를 편집하고 있는지 확인하세요.
- DNS 변경 사항이 전파될 수 있도록 충분한 시간을 기다리세요.
- 하이퍼클래스로 돌아와서 도메인 검증을 다시 시도하세요.

문제가 계속되면 해당 웹사이트/퍼널, WordPress, 이메일, 클라이언트 포털, 화이트라벨 또는 다른 도메인 구성에 대한 전용 문제 해결 문서를 참고해주세요.

---

# FAQ

## 도메인이 없다면 어떻게 하나요?

하이퍼클래스를 통해 직접 도메인을 구매하거나, 지원되는 외부 도메인 등록업체를 통해 구매할 수 있어요. 도메인을 구매한 후에는 해당 제품의 도메인 설정 과정에 따라 원하는 하이퍼클래스 제품에 연결하세요.

## 기존 도메인을 이메일용으로 사용할 수 있나요?

기존 도메인을 전용 도메인으로 설정할 수 있어요. 하이퍼클래스 안에서 이메일 발송용 도메인을 설정할 때는 현재 사용 중인 이메일 서비스에 영향을 주지 않도록 서브도메인을 사용하는 것을 권장해요.

## 전용 도메인으로 WIX를 사용할 수 있나요?

Wix는 동일한 우선순위의 MX 레코드를 여러 개 추가하는 것을 허용하지 않아요. Wix에 연결된 도메인을 사용하려면 네임서버를 다른 도메인 호스트를 가리키도록 변경해야 해요. 자세한 내용은 [WIX를 도메인 제공업체로 사용할 때 LC Email/Mailgun 답장이 작동하지 않는 문제](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/48001188738-lc-email-mailgun-replies-not-working-when-using-wix-as-the-domain-provider)를 참고해주세요.

## Cloudflare에서 CNAME 레코드가 인식되지 않아요.

Cloudflare에 추가한 CNAME 레코드의 프록시(Proxy) 설정이 꺼져 있어야 레코드가 제대로 전파돼요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027095826/original/MFQYCch3__QKBwKhSpCrSniblWBKnpgYCA.png?1717515282)

## 이미 도메인이 있다면 어떻게 하나요?

네, 가능해요. 기존 루트 도메인이 이미 다른 웹사이트나 서비스에 연결되어 있고 그대로 유지하고 싶다면, 지원되는 경우 하이퍼클래스 제품에 적절한 서브도메인을 사용하세요. 이렇게 하면 기존 서비스와 새로운 하이퍼클래스 기능이 서로 영향을 주지 않고 독립적으로 작동할 수 있어요.

---
*원문 최종 수정: 2026-09-10*
*Hyperclass 사용 가이드 — hyperclass.ai*