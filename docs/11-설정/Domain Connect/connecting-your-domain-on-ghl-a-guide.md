---

번역일: 2026-04-07
카테고리: 11-설정 > Domain Connect
---

# GHL에서 도메인 연결하기 - 완전 가이드

도메인을 하이퍼클래스에 연결하면 웹사이트, 퍼널, 이메일, 클라이언트 도구 전반에서 일관된 브랜드 경험을 제공할 수 있습니다. 이 가이드에서는 도메인 연결 과정과 각 제품에서 연결된 도메인을 어떻게 활용하는지 자세히 설명합니다.

---

목차

- [도메인 연결 단계별 가이드](#도메인-연결-단계별-가이드)
- [도메인 연결 문제해결](#도메인-연결-문제해결)
- [도메인을 연결할 수 있는 제품들](#도메인을-연결할-수-있는-제품들)
- [전문가 팁](#전문가-팁)
- [유용한 링크](#유용한-링크)

# 도메인 연결 단계별 가이드

하이퍼클래스에 도메인을 연결하는 방법은 두 가지입니다:

### 1. 자동 연결 방법 (지원 도메인 업체 이용 시)

도메인이 지원 업체(GoDaddy, Google Domains, Cloudflare 등)에 등록되어 있다면 API 기반 인증을 통해 자동으로 연결할 수 있습니다.

연동 지원 업체에서 도메인을 관리하고 있다면 추천하는 방법입니다.

- Sites(사이트) → Settings(설정) → Domains(도메인)로 이동합니다.
- "Connect a Domain(도메인 연결)"을 선택합니다.
- 연결하려는 제품(퍼널, 웹사이트, 이메일 등)을 선택합니다.

![도메인 연결 인터페이스](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045491132/original/mGa9aDaXW4Ytb7xL12a6RFqhz1BiTtLGPw.png?1745385425)

- 제공된 필드에 루트 도메인 또는 서브도메인을 입력합니다. "www" 서브도메인을 추가하는 경우 루트 도메인을 추가하는 옵션도 나타납니다.
- 도메인이 Google Domains, GoDaddy, Cloudflare에 등록되어 있다면 "Authorize(인증)" 버튼이 표시됩니다. 클릭하여 Domain Connect가 DNS 설정에 접근할 수 있도록 허용합니다.
- 도메인 업체 인터페이스에서 화면 안내에 따라 인증 과정을 완료합니다. 이 과정에서 필요한 DNS 레코드가 자동으로 추가됩니다.
- 인증이 완료되면 해당 탭을 닫고 Domain Connect 인터페이스로 돌아옵니다.

---

### 2. 수동 도메인 추가

도메인이 Namecheap, Bluehost 또는 목록에 없는 업체에서 호스팅되는 경우 DNS 레코드를 직접 추가해야 합니다.

직접 지원되지 않는 업체를 사용하는 경우 이 방법을 사용하세요.

- **Sites(사이트)** → Settings(설정) → Domains(도메인)로 이동합니다.
- "Connect a Domain(도메인 연결)"을 선택합니다.
- 연결하려는 제품(퍼널, 웹사이트, 이메일 등)을 선택합니다.

![도메인 연결 제품 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045491132/original/mGa9aDaXW4Ytb7xL12a6RFqhz1BiTtLGPw.png?1745385425)

- 퍼널, 웹사이트, 블로그, 웨비나에 도메인을 연결하려면 안내에 따라 도메인 이름을 입력합니다.
- "add records manually(수동으로 레코드 추가)" 옵션을 클릭합니다.

![수동 레코드 추가 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045491766/original/Z5xJ2bdqGdqayjfdHK7wGVVP5Vs5lKUqiQ.png?1745385962)

- 도메인 등록업체에 추가해야 할 특정 DNS 레코드(A Records, CNAME, TXT)가 표시됩니다.

![DNS 레코드 정보](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045491792/original/YCI8-DHpBnHtPNr9frNnfoVS4BElSM4SkQ.png?1745385993)

- 도메인 업체(예: Namecheap)에 로그인하고 DNS 설정으로 이동합니다.
- 표시된 대로 정확히 레코드를 추가합니다.
- 변경사항을 저장하고 DNS 전파를 기다립니다(최대 24시간 소요 가능).

---

## 업체별 수동 DNS 설정

#### Cloudflare

- Cloudflare 대시보드에 로그인합니다.
- 도메인을 선택하고 DNS 탭을 클릭합니다.
- Add Record(레코드 추가)를 클릭합니다.
- 하이퍼클래스에서 제공한 각 레코드에 대해:
  - 유형 선택: A, CNAME, 또는 TXT
  - @ (루트 도메인)에 대한 A 레코드 → IP 주소로 지정
  - www 또는 서브도메인에 대한 CNAME (해당하는 경우)
  - 이메일 인증을 위한 TXT (예: SPF/DKIM)
- 중요: A 및 CNAME 레코드의 Proxy 상태를 "DNS Only"(회색 구름)로 설정합니다.
- 각각에 대해 Save(저장)를 클릭합니다.
- 전파를 기다립니다(몇 분에서 24시간).

#### GoDaddy

- GoDaddy 계정에 로그인합니다.
- My Products > Domains로 이동한 후 도메인 옆의 Manage DNS를 클릭합니다.
- Records 섹션에서 Add를 클릭합니다:
  - 유형 선택: A, CNAME, 또는 TXT
  - 루트 도메인은 @, 서브도메인은 www 사용
  - 하이퍼클래스에서 제공한 레코드 값을 정확히 입력
- 각 레코드 추가 후 Save(저장)를 클릭합니다.
- 변경사항 전파 시간을 기다립니다.

#### Namecheap

- Namecheap 대시보드에 로그인합니다.
- Domain List > 도메인 옆의 Manage로 이동합니다.
- Advanced DNS 탭으로 이동합니다.
- Host Records에서 Add New Record를 클릭합니다:
  - @에 대한 A 레코드
  - www에 대한 CNAME 레코드
  - 인증 또는 이메일용 TXT 레코드 (예: SPF/DKIM)
- 하이퍼클래스 안내의 정확한 값을 붙여넣습니다.
- Save All Changes(모든 변경사항 저장)를 클릭합니다.
- DNS 전파를 위해 최대 24시간 기다립니다.

#### Squarespace

- Squarespace 계정에 로그인합니다.
- Settings > Domains로 이동하여 도메인을 선택합니다.
- DNS Settings (Advanced)를 클릭합니다.
- 다음을 추가합니다:
  - @에 대한 A 레코드 (제공된 IP 사용)
  - www에 대한 CNAME (필요한 경우)
  - 이메일 인증용 TXT
- 각 레코드 후 Save(저장)를 클릭합니다.
- 변경사항 저장 완료 후 하이퍼클래스로 돌아가서 도메인을 다시 연결합니다.

---

## 도메인 연결 문제해결

수동 또는 자동 도메인 연결 시 다음과 같은 일반적인 문제가 발생할 수 있습니다:

- 레코드 충돌: 여러 A 레코드: [문제해결 링크](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#1.-Record-Conflicts%3A-Multiple-A-Records)

![레코드 충돌 오류](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045492883/original/-TX2PyjOHmMMB7Tjw2-PgGtYgaORdXTxLA.png?1745387571)

- AAAA 레코드 충돌: [문제해결 링크](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#2.-AAAA-Record-Conflict)

![AAAA 레코드 충돌](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045492907/original/663d7TxsvhXmjTPV-eUbvLzzFDUxDkED0A.png?1745387595)

- CAA 레코드 충돌: [문제해결 링크](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#3.-CAA-Record-Conflict)

![CAA 레코드 충돌](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045493186/original/m9rQevRuymmHX63WTCZRYzPPI0PNYhbqdw.png?1745388089)

- DNS 레코드 불일치: [문제해결 링크](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#4.-DNS-Records-Do-Not-Match)

![DNS 레코드 불일치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045492971/original/ISi4IULI6PfftWfr-bcq7IBDkZSB9XqFJQ.png?1745387718)

- 다른 곳에서 사용 중인 도메인: [문제해결 링크](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#5.-Domain-is-Connected-Elsewhere)

## 도메인을 연결할 수 있는 제품들

**퍼널 / 웹사이트 / 스토어 / 웨비나 / 블로그**

- 퍼널, 이커머스 스토어, 웨비나, 블로그 등 고객 대면 페이지를 호스팅하는 데 도메인을 사용합니다.

#### WordPress

- 하이퍼클래스의 WordPress 호스팅을 사용하는 경우, 제공된 DNS 레코드를 사용하여 도메인을 WordPress 사이트로 연결합니다.
- DNS 설정 완료 후 시스템이 자동으로 감지하고 유효성을 검사합니다.
- 자세한 내용: [WordPress: Domain Connect Integration]([wordpress-domain-connect-integration](wordpress-domain-connect-integration.md))

#### 이메일

- 이메일 발송 인증(SPF, DKIM, DMARC 등)에 도메인이 필요합니다.
- 연결하면 이메일 전달율이 향상되고 메시지가 스팸으로 분류되는 것을 방지할 수 있습니다.
- 자세한 내용: [전용 이메일 발송 도메인 개요 및 설정]([dedicated-email-sending-domains-overview-setup](dedicated-email-sending-domains-overview-setup.md))

**브랜드 도메인 (화이트라벨링용)**

- 하위 계정이나 SaaS 기능을 화이트라벨링하기 위해 도메인을 연결합니다.
- 기본 .hlpages.co URL을 자체 브랜딩으로 대체합니다.
- 자세한 내용: [브랜드 시스템 생성 링크 (API 도메인)](how-to-configure-brand-system-generated-links-api-domain-.md) 및 [브랜드 도메인 설정 이유 및 방법](https://www.youtube.com/watch?v=y8-_fWUqiG8)

**클라이언트 포털**

- 클라이언트 대면 대시보드를 호스팅하기 위해 커스텀 도메인을 사용합니다.
- 고객이 자산, 캠페인, 보고서에 접근할 때 브랜드 경험을 제공합니다.
- 자세한 내용: [클라이언트 포털 설정 방법]([how-to-set-up-the-client-portal-](how-to-set-up-the-client-portal-.md))

## 전문가 팁

- DNS 전파: 변경사항은 몇 분에서 최대 24시간까지 완전히 전파됩니다.
- SSL은 도메인이 연결되고 레코드가 정확하면 자동으로 발급됩니다.
- 연결된 모든 도메인은 Settings(설정) → Domains(도메인)에서 관리할 수 있습니다.
- 도메인이 24시간 이상 "Pending(대기 중)"으로 표시되면 DNS 값을 다시 확인하거나 지원팀에 문의하세요.

## 유용한 링크

- [도메인 연결 문제해결 가이드](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain)

---
*원문 최종 수정: Wed, 25 Mar, 2026 at 4:47 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*