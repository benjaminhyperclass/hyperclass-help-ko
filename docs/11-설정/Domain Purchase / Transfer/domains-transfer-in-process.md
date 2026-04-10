---

번역일: 2026-04-07
카테고리: 11-설정 > 도메인 구매/이전
---

# 도메인 - 이전 가져오기 프로세스

도메인을 Hyperclass로 이전하면 등록, 갱신, DNS, 그리고 제품 연결(이메일, 사이트, 클라이언트 포털)을 한 곳에서 모두 관리할 수 있습니다. 이 도메인 이전 가이드에서는 자격 요건, 단계별 안내, 문제 해결법을 포함한 전체 이전 가져오기 워크플로우를 설명합니다.

참고: 모든 계정에서 도메인 이전 가져오기가 활성화되어 있지 않을 수 있습니다. 도메인 이전 옵션이 보이지 않는 경우, 지원팀에 문의하여 기능을 활성화하세요.

---

## 목차

- [도메인 이전 가져오기란?](#도메인-이전-가져오기란)
- [도메인 이전 가져오기의 주요 장점](#도메인-이전-가져오기의-주요-장점)
- [설정 및 사전 요구사항](#설정-및-사전-요구사항)
- [도메인 구매 활성화 방법 (에이전시 설정)](#도메인-구매-활성화-방법-에이전시-설정)
- [하위 계정에서 도메인 구매 활성화 방법](#하위-계정에서-도메인-구매-활성화-방법)
- [도메인 이전 가져오기 기능 사용법](#도메인-이전-가져오기-기능-사용법)
- [일반적인 문제 및 문제 해결](#일반적인-문제-및-문제-해결)
- [자주 묻는 질문](#자주-묻는-질문)

---

## 도메인 이전 가져오기란?

도메인 이전 가져오기(Domain Transfer-In)는 사용자가 제3자 도메인 등록업체(GoDaddy, Namecheap 등)에서 Hyperclass 플랫폼으로 도메인 소유권과 관리를 이전할 수 있게 해주는 내장 기능입니다. 이를 통해 로케이션 내에서 도메인 구매, 이전, 갱신, DNS 레코드 관리를 모두 처리할 수 있어 워크플로우가 간소화됩니다. 도메인 페이지는 모든 도메인 활동을 위한 중앙 집중식 대시보드 역할을 하여 가시성과 제어력을 향상시킵니다.

도메인 이전 가져오기를 시작하면 Hyperclass가 5단계 프로세스를 안내합니다. 도메인 입력으로 시작해서 현재 등록업체의 승인으로 마무리됩니다. 시스템이 자동으로 이전 자격을 확인하고, DNS 레코드 가져오기나 검토를 허용하며, EPP(인증) 코드를 사용해 안전한 완료를 보장합니다. 완료되면 이전된 도메인이 Hyperclass 내의 웹사이트, 퍼널, 클라이언트 포털, 이메일 시스템과 즉시 연동됩니다.

---

## 도메인 이전 가져오기의 주요 장점

- **중앙 집중식 제어**: Hyperclass 내에서 도메인, DNS, 청구, 갱신을 웹사이트, 퍼널, 이메일 도구와 함께 관리합니다.

- **보안 및 유연성**: Hyperclass 내에서 완전한 DNS 접근 권한 - 외부 등록업체 로그인이 필요하지 않습니다.

- **기간 손실 없음**: 기존 남은 기간이 그대로 유지되며, 이전 시 +1년이 추가됩니다(TLD 예외 적용 가능).

- **투명한 가격**: 명확성을 위한 고정된 선불 이전 수수료.

- **원활한 연동**: 이전된 도메인을 Hyperclass 제품과 즉시 연결합니다.

---

## 설정 및 사전 요구사항

시작하기 전에 도메인이 업계 요구사항을 충족하고 도메인 이전 준비가 되었는지 확인하세요:

- 도메인이 60일 이상 되었어야 함(ICANN 규칙)
- 현재 등록업체에서 도메인이 잠금 해제되어 있어야 함
- WHOIS 프라이버시 보호가 꺼져 있어야 함
- DNSSEC(활성화된 경우)가 비활성화되어 있어야 함
- 등록업체에서 EPP/Auth 코드에 접근할 수 있어야 함
- WHOIS에서 연락처 이메일이 정확해야 함(이전 승인 이메일이 여기로 전송됨)
- Hyperclass 지갑에 이전을 위한 충분한 자금이 있어야 함
- 현재 DNS 설정 사본을 저장해 두는 것을 권장합니다

---

## 도메인 구매 활성화 방법 (에이전시 설정)

- 화면 왼쪽 상단의 로케이션 드롭다운을 클릭하고 Agency를 선택해서 에이전시 보기로 전환합니다.

![](https://jumpshare.com/share/cab2JEP4qxktoWZHyGQb+/Screen+Shot+2025-11-04+at+8.23.27+PM.png)

- Settings(설정)를 클릭합니다.

![](https://jumpshare.com/share/2fOTAcG8yhIM5g3Q92D7+/Screen+Shot+2025-11-04+at+8.26.14+PM.png)

- Company → **Domain** Purchase로 이동합니다.

- 설정을 **ON**으로 토글하여 플랫폼 전체에서 도메인 구매 기능을 활성화합니다.

![](https://jumpshare.com/share/hNuxDZzC7z5rESWvG7D6+/Screen+Shot+2025-11-04+at+8.28.42+PM.png)

---

## 하위 계정에서 도메인 구매 활성화 방법

- 에이전시 Settings(설정)로 이동합니다.

![](https://jumpshare.com/share/2fOTAcG8yhIM5g3Q92D7+/Screen+Shot+2025-11-04+at+8.26.14+PM.png)

- Domain Purchase를 클릭합니다.

- 도메인 이전 가져오기 기능을 사용할 하위 계정에 대해 도메인 구매를 **개별적으로** **활성화**합니다.

![](https://jumpshare.com/share/MWoip4PJfZ9SOIYi6eeQ+/Screen+Shot+2025-11-04+at+10.38.03+PM.png)

---

## 도메인 이전 가져오기 기능 사용법

### 1단계: 이전 시작

- 선택한 하위 계정에서 **Settings(설정)**을 클릭합니다.

![](https://jumpshare.com/share/nTXzqZT013Ct84gUr2eY+/Screen+Shot+2025-11-04+at+11.32.38+PM.png)

- Domains & URL Redirects → Domains로 이동합니다.

![](https://jumpshare.com/share/vB2dMSjaWnKpjeU1lMAX+/Screen+Shot+2025-11-04+at+11.34.28+PM.png)

- 도메인이 이미 **external**로 존재하는 경우, **Transfer-In**을 클릭합니다.

![](https://jumpshare.com/share/rR6gVnjPlCmD6NTfM90h+/Screen+Shot+2025-11-04+at+11.36.44+PM.png)

- 새 도메인을 이전하려면 **Transfer-In Domain** 버튼을 클릭합니다.

![](https://jumpshare.com/share/z5QtC2UCM12EBniFj93M+/Screen+Shot+2025-11-04+at+11.39.02+PM.png)

- 또는 Purchase/Transfer Domain 버튼을 클릭합니다.

![](https://jumpshare.com/share/w2Irmx2mjhUBraqyhP33+/Screen+Shot+2025-11-04+at+11.43.20+PM.png)

- 이전하려는 도메인 이름을 입력하고 **Continue** 버튼을 클릭합니다.

![](https://jumpshare.com/share/yXwYA3HzoEGdHK4UsVI8+/Screen+Shot+2025-11-04+at+11.54.46+PM.png)

### 2단계: 자격 확인

- 시스템이 자격 확인을 실행하여 ICANN 요구사항을 확인합니다. 도메인이 이전 자격이 있으면 이전 프로세스를 계속할 수 있습니다.

- 자격 확인 중에 Hyperclass는 도메인이 플랫폼으로 이전될 자격이 있는지 확인합니다. 시스템이 등록업체 수준 규칙과 기술적 준비 상태를 평가합니다. 도메인이 이전 자격이 있으면 이전 프로세스를 계속할 수 있습니다. 도메인이 이전 자격이 있을 때 다음을 확인할 수 있습니다:
  - 도메인 이름
  - 현재 도메인 등록업체
  - 현재 만료일 및 새 만료일(1년 연장)
  - 만료일 연장에 적용되는 수수료

- 계속 진행하기 전에 현재 등록업체에 접근할 수 있는지 확인하세요.

![](https://jumpshare.com/share/KmTBlDnpyy5qXBjQZgqT+/Screen+Shot+2025-11-05+at+12.17.00+AM.png)

- 다음의 경우 도메인은 **이전 자격이 없습니다**:
  - 현재 등록업체가 지원되지 않음
  - 이전에 내부적으로 구매됨
  - TLD가 지원되지 않음
  - 최근 60일 내에 구매 또는 이전됨
  - 이전을 허용하지 않는 EPP 상태(예: pendingDelete, redemptionPeriod, serverHold 등)
  - 이전으로 인해 도메인 기간이 최대 허용 기간을 초과함
  - 도메인 확장자가 지원되지 않음

- 이런 경우 **Continue 버튼이 비활성화**되고, 관련 오류 메시지가 현재 도메인을 이전할 수 없는 이유를 설명합니다.

![](https://jumpshare.com/share/khuuGlRfvHko96IAmf5C+/GIF+Recording+2025-11-05+at+12.22.21+AM.gif)

### 3단계: DNS 레코드 검토 및 저장

**참고:** 도메인을 이전하기 전(예: GoDaddy나 Namecheap에서), 현재 제공업체의 모든 DNS 레코드를 검토하고 복제하세요. 이렇게 하면 웹사이트, 이메일 및 기타 서비스의 다운타임을 방지할 수 있습니다.

사용자는 다음 두 가지 방법 중 하나를 선택하여 DNS 레코드를 가져올 수 있습니다:

참고: 도메인을 구매한 곳에서 네임서버를 변경한 경우 도메인 등록업체와 DNS 제공업체가 다를 수 있습니다. 예를 들어 GoDaddy에서 도메인을 구매했지만 네임서버를 업데이트하여 Cloudflare로 포인팅했다면, 이제 Cloudflare가 DNS를 관리하고 있습니다. 이 경우 DNS 레코드(존 파일)에 접근하려면 Cloudflare에 로그인해야 합니다.

#### 1. DNS 존 파일 업로드

이 방법은 기존 레코드를 놓치지 않고 현재 DNS 제공업체의 모든 DNS 레코드를 가져오려는 경우 권장됩니다. 이 파일에는 A, CNAME, TXT, MX 및 기타 레코드 타입을 포함한 도메인의 모든 DNS 항목이 들어있습니다.

현재 DNS 제공업체에서 DNS 존 파일을 얻으려면:

- 현재 DNS 제공업체 또는 원래 도메인을 구매한 곳에 로그인합니다.
- 이전하려는 도메인의 DNS 설정으로 이동합니다.
- DNS 존/레코드 파일을 내보내는 옵션을 찾습니다.
- 그런 옵션을 찾을 수 없는 경우, 현재 DNS 제공업체나 등록업체의 지원팀에 연락하여 파일을 받으세요.

#### 참고: 아래 등록업체별 단계별 프로세스를 확인하세요:

- **GoDaddy** - GoDaddy에서 존 파일을 업로드하는 방법 [여기서 확인](https://www.godaddy.com/en-in/help/export-my-domains-zone-file-records-4166)
- **Cloudflare** - Cloudflare에서 존 파일을 업로드하는 방법 [여기서 확인](https://developers.cloudflare.com/dns/manage-dns-records/how-to/import-and-export/)
- **NameCheap** - 현재 Namecheap은 다운로드 가능한 존 파일을 제공하지 않으므로, 수동으로 레코드를 재생성하거나 지원팀에 연락하여 레코드에 접근해야 할 수 있습니다. 수동으로 레코드를 추출하는 링크 [여기서 확인](https://gist.github.com/ashleykleynhans/69e4fb525d4f32d766313d3f9d22b688)
- **IONOS** - [도메인 내보내기](https://www.ionos.com/help/domains/general-information-about-domain-usage/domain-exports/), [클라우드 DNS](https://docs.ionos.com/cloud/network-services/cloud-dns), [API How-Tos](https://docs.ionos.com/cloud/network-services/cloud-dns/api-how-tos/export-dns-zone)

![](https://jumpshare.com/share/BkYkQJsNCYsXzMyWBmcG+/Screen+Shot+2025-11-05+at+12.47.10+AM.png)

#### 2. DNS 레코드 자동 스캔

**참고:** 등록업체에서 네임서버 레코드를 업데이트한 경우 도메인 등록업체와 DNS 제공업체가 다를 수 있습니다. 예를 들어 GoDaddy에서 도메인을 구매했지만 네임서버를 변경하여 Cloudflare로 포인팅했다면, Cloudflare가 DNS 제공업체가 됩니다. 이 경우 DNS 레코드를 보고 비교하려면 Cloudflare에 로그인해야 합니다.

- 이 방법은 편리하며 사전 설정이 필요하지 않습니다. 이 방법에서는 기존 DNS 레코드가 자동으로 스캔되지만, 일부 기존 레코드는 스캔에서 감지되지 않을 수 있습니다.

- 따라서 이전 후 퍼널, 웹사이트 등의 기존 연결된 서비스에 중단이 발생하지 않도록, 스캔된 레코드를 현재 DNS 제공업체나 등록업체의 레코드와 수동으로 교차 확인하고 필요한 경우 레코드를 추가/편집하는 것을 강력히 권장합니다.

![](https://jumpshare.com/share/YptMRgalD0ehKRYsx5uJ+/Screen+Shot+2025-11-05+at+1.03.57+AM.png)

### DNS 레코드 검토

참고: 스캔된 DNS 레코드를 DNS 호스트/등록업체의 레코드와 수동으로 교차 확인하세요. 누락된 항목은 이전 후 웹사이트나 이메일 장애를 일으킬 수 있습니다. 캡처되지 않은 항목을 검토하고 추가하세요.

- 레코드를 가져온 후 DNS 레코드를 검토할 수 있습니다. 표시된 DNS 테이블에서 다음을 할 수 있습니다:
  - 모든 DNS 항목을 레코드 타입별(예: A, CNAME, TXT, MX)로 분류된 테이블 형식으로 봅니다
  - "Add Record"를 클릭하여 새 레코드를 추가합니다
  - 개별 레코드를 필요에 따라 편집하거나 삭제합니다
  - 필드(이름, 타입, 값)를 사용하여 레코드를 검색합니다

- 검토 후 확인 상자를 체크하고 **Continue**를 클릭합니다.

![](https://jumpshare.com/share/2XiGPMncxy9qNxlzYQZd+/Screen+Shot+2025-11-05+at+1.21.38+AM.png)

### 4단계: 이전 완료

이전 완료 단계는 현재 등록업체(GoDaddy, Namecheap, IONOS 등)에서 Hyperclass로 도메인을 이동하는 인증 프로세스를 완료하는 곳입니다. 이 단계는 이전 후에도 도메인과 관련 서비스가 원활하게 작동하도록 보장합니다.

이전 완료 화면에서 다음을 수행합니다:

- 현재 등록업체(도메인을 원래 등록한 곳)에 로그인합니다

- **DNSSEC 및 Whois 프라이버시 비활성화**

도메인 이전을 시작하기 전에 현재 등록업체에서 DNSSEC를 비활성화하고 Whois 프라이버시 보호를 제거하는 것이 중요합니다. 일반 지침(세부사항은 다를 수 있음):

1. 현재 등록업체 계정에 로그인합니다
2. DNS 또는 도메인 설정으로 이동합니다
3. DNSSEC 옵션을 찾아 비활성화합니다
4. Whois 프라이버시 보호가 활성화되어 있으면 끕니다
5. 변경사항을 저장합니다

등록업체별 가이드:
- **GoDaddy**: [DNSSEC 비활성화](https://www.godaddy.com/en-in/help/turn-dnssec-on-or-off-6420) 및 [Whois 프라이버시 제거](https://www.godaddy.com/en-in/help/change-my-domain-privacy-level-32283) 참고: DNSSEC 레코드가 완전히 제거되는 데 몇 분이 걸릴 수 있습니다. 설정이 업데이트되면 GoDaddy에서 확인을 볼 수 있습니다.
- **NameCheap**: [DNSSEC 비활성화](https://www.namecheap.com/support/knowledgebase/subcategory/2232/dnssec/) 및 [Whois 프라이버시 제거](https://www.namecheap.com/support/knowledgebase/article.aspx/484/37/how-do-i-disable-domain-privacy-service-for-my-domain/)
- **IONOS**: [DNSSEC 비활성화](https://www.ionos.com/help/domains/dns-pro/setting-up-and-managing-dnssec/#c165924) 및 [Whois 프라이버시 제거](https://www.ionos.com/help/domains/domain-guard/disabling-domain-guard/#:~:text=In%20order%20to%20deactivate%20Domain,instructions%20contained%20in%20the%20email.)

- **도메인 잠금 해제 및 인증 코드(EPP 코드) 요청**

도메인을 이전하기 전에 잠금을 해제하고 현재 등록업체에서 인증 코드(EPP 또는 이전 코드라고도 함)가 필요합니다. 일반 지침(세부사항은 다를 수 있음):

1. 현재 등록업체 계정(예: GoDaddy, Namecheap, IONOS)에 로그인합니다
2. 도메인 관리 또는 도메인 설정 섹션으로 이동합니다
3. Domain Lock 또는 Registrar Lock 옵션을 찾습니다
4. 잠금을 비활성화하거나 끄어서 도메인을 잠금 해제합니다
5. 잠금 해제 후, 인증 코드를 받는 옵션을 찾습니다(EPP 코드, Transfer Code 또는 AuthInfo로 표시될 수 있음)
6. 코드가 화면에 표시되거나 등록된 이메일로 전송됩니다

등록업체별 가이드:
- **GoDaddy**: GoDaddy에서 도메인을 이전하는 상세 방법 [여기서 확인](https://www.godaddy.com/en-in/help/transfer-my-domain-away-from-godaddy-3560)
- **Namecheap**: Namecheap에서 도메인을 이전하는 상세 방법 [여기서 확인](https://www.namecheap.com/support/knowledgebase/article.aspx/258/84/what-should-i-do-to-transfer-a-domain-from-namecheap/) 참고: 인증 코드를 요청하기 전에 WhoisGuard가 비활성화되어 있는지 확인하세요.
- **IONOS**: Ionos에서 도메인을 이전하는 상세 방법 [여기서 확인](https://www.ionos.com/help/domains/transferring-your-domain-away-from-ionos-to-another-provider/transferring-a-domain-from-11-ionos-to-another-provider/)

- **이전 제출 및 결제 완료**

Confirm and Finalize Transfer 버튼을 클릭하면 다음을 수행합니다:
- 도메인 잠금 해제 상태, 인증 코드 및 기타 레지스트리 수준 상태를 검증합니다
- 도메인이 이전에 유효하면 수수료를 지갑에서 차감합니다
- 이전 요청을 제출합니다

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053908643/original/7FrzYltls0iZnMVKfBrzjU7GAJmwemPbmA.png?1758063558)

### 5단계: 진행 중인 이전 승인

도메인 이전 요청을 제출한 후, 마지막 단계는 현재 등록업체에서 이전을 승인하는 것입니다. 승인하지 않으면 이전이 대기 상태로 남아있고 완료되지 않습니다.

#### 승인이 필요한 이유

도메인 이전은 무단 변경을 방지하기 위해 현재 등록업체(GoDaddy, Namecheap 또는 IONOS 등)의 명시적 확인이 필요합니다. 이메일 인박스나 등록업체 대시보드를 통해 수동으로 이전을 승인해야 합니다.

조치를 취하지 않으면 등록업체 정책에 따라 5-7일 후 이전이 자동 승인될 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057577476/original/t1BagzEiwEYI-IHljumJsUBBah-8myD4rA.png?1762287099)

#### 등록업체에서 이전을 승인하는 방법

등록업체에 따른 이전 승인 방법:

**GoDaddy**
- 옵션 1: 이메일 승인
- 옵션 2: 대시보드 승인

**Namecheap**: [Namecheap에서 도메인 이전](https://www.namecheap.com/support/knowledgebase/article.aspx/258/84/what-should-i-do-to-transfer-a-domain-from-namecheap/)

**IONOS**: [Ionos에서 도메인 이전](https://www.ionos.com/help/domains/transferring-your-domain-away-from-ionos-to-another-provider/transferring-a-domain-from-11-ionos-to-another-provider/)
- IONOS에 로그인
- Domains & SSL로 이동
- 이전 중인 도메인을 클릭
- Pending Transfer 프롬프트나 이메일 안내를 찾습니다
- 프롬프트가 나타나면 이전을 승인합니다

#### 이전 승인 후

이전을 승인하면:
- 도메인이 저희 등록업체 파트너(Cloudflare) 아래로 이동됩니다