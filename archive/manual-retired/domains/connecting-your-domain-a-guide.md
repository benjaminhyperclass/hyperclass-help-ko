---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000005273-connecting-your-domain-a-guide
번역일: 2026-04-23
카테고리: domains
---

# 도메인 연결 가이드

도메인을 연결하면 웹사이트, 퍼널, 이메일, 고객용 도구 전반에서 일관된 브랜드 이미지를 유지할 수 있습니다. 이 가이드에서는 도메인 연결 과정과 각 제품이 연결된 도메인과 어떻게 통합되는지 설명합니다.

**목차**

- [단계별 도메인 연결 과정](#단계별-도메인-연결-과정)
  - [1. 자동 연결 방법 (지원되는 제공업체)](#1-자동-연결-방법-지원되는-제공업체)
  - [2. 수동으로 도메인 추가하기](#2-수동으로-도메인-추가하기)
- [제공업체별 수동 DNS 설정](#제공업체별-수동-DNS-설정)
  - [Cloudflare](#Cloudflare)
  - [GoDaddy](#GoDaddy)
  - [Namecheap](#Namecheap)
  - [Squarespace](#Squarespace)
- [문제 해결 - 도메인 연결](#문제-해결-도메인-연결)
  - [레코드 충돌: 다중 A 레코드](#레코드-충돌-다중-A-레코드)
  - [AAAA 레코드 충돌](#AAAA-레코드-충돌)
  - [CAA 레코드 충돌](#CAA-레코드-충돌)
  - [DNS 레코드가 일치하지 않음](#DNS-레코드가-일치하지-않음)
  - [도메인이 다른 곳에서 연결됨](#도메인이-다른-곳에서-연결됨)
- [도메인을 연결할 수 있는 제품들](#도메인을-연결할-수-있는-제품들)
  - [퍼널 / 웹사이트 / 스토어 / 웨비나 / 블로그](#퍼널-웹사이트-스토어-웨비나-블로그)
  - [WordPress](#WordPress)
  - [이메일](#이메일)
  - [브랜드 도메인 (화이트라벨링용)](#브랜드-도메인-화이트라벨링용)
  - [클라이언트 포털](#클라이언트-포털)
- [유용한 팁](#유용한-팁)
- [도움이 되는 링크](#도움이-되는-링크)

## 단계별 도메인 연결 과정

도메인을 연결하는 주요 방법은 두 가지입니다:

### 1. 자동 연결 방법 (지원되는 제공업체)

도메인이 지원되는 제공업체(GoDaddy, Google Domains, Cloudflare 등)에서 등록된 경우, API 기반 인증을 통해 자동으로 연결할 수 있습니다.

단계:

- 계정의 `Sites(사이트) > Settings(설정) > Domains(도메인)`으로 이동합니다.

- "Connect a Domain(도메인 연결)"을 선택합니다.

- 연결하려는 제품(예: 퍼널, 웹사이트, 이메일)을 선택합니다.
![도메인 연결 제품 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046655018/original/Z3qXa2R-Nk3ULwcMHRurCOPIoxel1AUtng.jpeg?1747285710)

- 제공된 필드에 루트 도메인 또는 서브도메인을 입력합니다. "www" 서브도메인을 추가하는 경우, 루트 도메인을 추가하는 옵션도 표시됩니다.

- 도메인이 Google Domains, GoDaddy 또는 Cloudflare에 있는 경우 "Authorize(인증)" 버튼이 표시됩니다. 클릭하여 Domain Connect가 DNS 설정에 접근하도록 허용합니다.

- 화면 안내에 따라 도메인 제공업체 인터페이스에서 인증 과정을 완료합니다. 이렇게 하면 필요한 DNS 레코드가 자동으로 추가되거나 연결됩니다.

- 인증이 완료되면 해당 탭을 닫고 Domain Connect 인터페이스로 돌아갑니다.

연동된 제공업체에서 도메인을 관리하는 경우 권장되는 방법입니다.

### 2. 수동으로 도메인 추가하기

도메인이 Namecheap, Bluehost 또는 목록에 없는 기타 제공업체에서 호스팅되는 경우, DNS 레코드를 수동으로 추가해야 합니다.

단계:

- `Sites(사이트) > Settings(설정) > Domains(도메인)`로 이동합니다.

- "Connect a Domain(도메인 연결)"을 선택합니다.

- 연결하려는 제품(예: 퍼널, 웹사이트, 이메일)을 선택합니다.
![수동 도메인 연결](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046655020/original/QTIlR-F5qNFttAnb1dVYSTHN32AK-iKEFw.jpeg?1747285710)

- 퍼널, 웹사이트, 블로그 또는 웨비나에 도메인을 연결하려면 안내에 따라 도메인 이름을 입력합니다.

- "add records manually(레코드 수동 추가)" 옵션을 클릭합니다.
![레코드 수동 추가 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046655019/original/Z7h44VmS7sQ1tb6p5RmqJNNpEs-kU3GKUg.png?1747285710)

- 도메인 등록업체에서 추가해야 하는 특정 DNS 레코드(A 레코드, CNAME, TXT)가 제공됩니다.
![DNS 레코드 정보](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046655022/original/bXlA6Canqq8-HPQpq5XnhFoWyD5El-Q2aw.png?1747285711)

- 도메인 제공업체(예: Namecheap)에 로그인하여 DNS 설정으로 이동합니다.

- 표시된 대로 정확히 레코드를 추가합니다.

- 변경 사항을 저장하고 DNS 전파를 기다립니다(최대 24시간 소요 가능).

제공업체가 직접 지원되지 않는 경우 이 옵션을 사용하세요.

## 제공업체별 수동 DNS 설정

### Cloudflare

- Cloudflare 대시보드에 로그인합니다.

- 도메인을 선택하고 DNS 탭을 클릭합니다.

- Add Record(레코드 추가)를 클릭합니다.

- 필요한 각 레코드에 대해:
  - 유형 선택: A, CNAME 또는 TXT
  - @ (루트 도메인)용 A 레코드 → IP 주소를 가리킴
  - www 또는 서브도메인용 CNAME (해당하는 경우)
  - 이메일 인증용 TXT (예: SPF/DKIM)

- 중요: A 및 CNAME 레코드의 프록시 상태를 "DNS Only(DNS 전용)" (회색 구름)으로 설정합니다.

- 각각에 대해 Save(저장)를 클릭합니다.

- 전파를 기다립니다(몇 분에서 24시간).

### GoDaddy

- [GoDaddy 계정](https://www.godaddy.com/)에 로그인합니다.

- My Products > Domains로 이동한 다음 도메인 옆의 Manage DNS를 클릭합니다.

- Records 섹션에서 Add를 클릭합니다:
  - 유형 선택: A, CNAME 또는 TXT
  - 루트 도메인은 @, 서브도메인은 www 사용
  - 제공된 대로 정확히 레코드 값을 입력
  - 각 레코드 추가 후 Save 클릭

- 변경 사항이 전파될 시간을 허용합니다.

### Namecheap

- [Namecheap 대시보드](https://www.namecheap.com/)에 로그인합니다.

- Domain List > 도메인 옆의 Manage로 이동합니다.

- Advanced DNS 탭으로 이동합니다.

- Host Records에서 Add New Record를 클릭합니다:
  - @용 A 레코드
  - www용 CNAME 레코드
  - 인증 또는 이메일용 TXT 레코드 (예: SPF/DKIM)

- 지침의 정확한 값을 붙여넣습니다.

- Save All Changes를 클릭합니다.

- DNS 전파까지 최대 24시간 기다립니다.

### Squarespace

- [Squarespace 계정](https://login.squarespace.com/api/1/login/oauth/provider/authorize?client_id=wAHMs0yNCd2CyyoI0Eclva4GmZ1qqRPx&redirect_uri=https%3A%2F%2Fwww.squarespace.com%2Foauth-connect&state=v1.local.JLM4WccEMBU-f2nvZIq9ns5jeSsgpejZ9z-DaQPhTeCbCE8l-DPJR2P_wWBVXXiNNp8mcI4VBtbQToTirX7qs2UwaSXGdAhOzDFT6L3lFfr63ttBwjcpe_F0RIz8gk3gVfiDLJ_f9_buFyAtm2NfyTj9FardYX-jgQck8PDxPQ8aMNMEy6p9q2wLc5Ce6Z_Oqin9qgUEv8rGqIQlvSL5lU0-G8BFrhc8if5LqKK7QMqqtKHJQyylR71zPoL3VO57Z9_DYjoXVhp6fW5mcsn1GYMmjiP855DP1MDbDM-nYDvbewXtI4x49YbVpTRlgdTe1RSntYD4foT20CVVa6Zy_Muc3glEC04bZTK5OWaEKwjeUDxgrA-LJyZLG9dSIq7xPHjbiw&referrer=https%3A%2F%2Fwww.squarespace.com%2F&overrideLocale=en-US&options=%7B%22isCloseVisible%22%3Atrue%2C%22isCreateAccountViewActive%22%3Afalse%7D#/)에 로그인합니다.

- Settings > Domains로 이동하여 도메인을 선택합니다.

- DNS Settings (Advanced)를 클릭합니다.

- 다음을 추가합니다:
  - @용 A 레코드 (제공된 IP 사용)
  - www용 CNAME (필요한 경우)
  - 이메일 인증용 TXT

- 각 레코드 후 Save를 클릭합니다.

- 변경 사항 저장 후 앱으로 돌아가서 도메인을 다시 연결합니다.

## 문제 해결 - 도메인 연결

도메인을 수동으로 또는 자동으로 연결할 때 다음과 같은 일반적인 문제가 발생할 수 있습니다:

### 레코드 충돌: 다중 A 레코드

[문제 해결 링크](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#1.-Record-Conflicts%3A-Multiple-A-Records)

### AAAA 레코드 충돌
![AAAA 레코드 충돌 오류](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046655026/original/cHQgguyBQaaSSir3GPui2P0Xa8T1OjY-EQ.png?1747285711)

[문제 해결 링크](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#2.-AAAA-Record-Conflict)

### CAA 레코드 충돌
![CAA 레코드 충돌 오류](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046655030/original/zXuryY68zjRfdnIm3GCT4pvI9S7tTIFeIA.png?1747285711)

[문제 해결 링크](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#3.-CAA-Record-Conflict)

### DNS 레코드가 일치하지 않음
![DNS 레코드 불일치 오류](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046655024/original/lOsk8ZcAx7Ax992nD1ohbhpVnuaPye3THg.png?1747285711)

[문제 해결 링크](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#4.-DNS-Records-Do-Not-Match)

### 도메인이 다른 곳에서 연결됨

[문제 해결 링크](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#5.-Domain-is-Connected-Elsewhere)

### 제품 충돌: 도메인이 이미 다른 제품에 연결됨
![제품 충돌 오류](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047257422/original/VflEoYd9Gr0XSOpC5yhiOuoBw6KqXnwGZA.png?1748327998)

[문제 해결 링크](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain#5.-Product-Conflict%3A-Domain-Already-Connected-to-Another-Product)

## 도메인을 연결할 수 있는 제품들

### 퍼널 / 웹사이트 / 스토어 / 웨비나 / 블로그

- 도메인을 사용하여 퍼널, 이커머스 스토어, 웨비나 또는 블로그와 같은 고객용 페이지를 호스팅합니다.

### WordPress

- WordPress 호스팅을 사용하는 경우, 제공된 DNS 레코드를 사용하여 도메인을 WordPress 사이트에 연결합니다.

- DNS 설정이 완료되면 시스템이 자동으로 감지하고 검증합니다.

### 이메일

- 이메일 발송 인증(예: SPF, DKIM, DMARC)을 위해서는 도메인이 필요합니다.

- 도메인을 연결하면 이메일 도달률이 향상되고 메시지가 스팸으로 분류되지 않습니다.

### 브랜드 도메인 (화이트라벨링용)

- 하위 계정(Sub-account) 또는 SaaS 기능을 화이트라벨링하기 위해 도메인을 연결합니다.

- 기본 URL을 자신의 브랜딩으로 대체합니다.

### 클라이언트 포털

- 커스텀 도메인을 사용하여 고객용 대시보드를 호스팅합니다.

- 고객이 자산, 캠페인 또는 보고서에 접근할 때 브랜드화된 경험을 제공합니다.

## 유용한 팁

- DNS 전파: 변경 사항이 완전히 전파되는 데 몇 분에서 최대 24시간까지 소요될 수 있습니다.

- 도메인이 연결되고 레코드가 올바르게 설정되면 SSL이 자동으로 제공됩니다.

- Settings(설정) > Domains(도메인)에서 연결된 모든 도메인을 관리할 수 있습니다.

- 도메인이 24시간 이상 "Pending(대기 중)" 상태라면 DNS 값을 다시 확인하거나 지원팀에 문의하세요.

## 도움이 되는 링크

- [도메인 연결 문제 해결 가이드](https://help.leadconnectorhq.com/support/solutions/articles/155000004862-troubleshooting-guide-connecting-your-domain)

---
*원문 최종 수정: Thu, 8 Jan, 2026 at 10:09 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*