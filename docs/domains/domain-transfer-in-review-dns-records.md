---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000005316-domain-transfer-in-review-dns-records
번역일: 2026-04-23
카테고리: domains
---

# 도메인 이전 - DNS 레코드 검토

## 개요: DNS 레코드 검토

도메인이 자격 확인을 통과하면, 다음 단계는 DNS 레코드를 검토하는 것입니다. 이 단계에서는 다음 두 가지 옵션 중 하나를 선택할 수 있습니다:

- DNS 존 파일 업로드
- DNS 레코드 자동 스캔

![DNS 레코드 검토 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047256366/original/dn8FSXT4YEd5fapJn6tMfXtdno4gIpCQ5g.png?1748326818)

---

## DNS 레코드 검토가 필요한 이유

GoDaddy, Namecheap 등 현재 등록대행업체에서 도메인을 이전할 때, 현재 DNS 제공업체에 설정된 모든 DNS 레코드도 정확하게 이전되는지 확인하는 것이 중요합니다. 이는 웹사이트, 이메일 및 기타 서비스가 이전 후에도 원활하게 작동하도록 하는 데 필수적입니다. DNS 레코드가 제대로 검토되지 않으면 웹사이트가 다운되거나 이메일이 작동하지 않을 수 있습니다. 이러한 문제를 방지하려면 도메인 이전을 완료하기 전에 DNS 레코드를 신중하게 검토하고 복제하는 것이 강력히 권장됩니다.

---

## 1단계: DNS 레코드 가져오기

현재 DNS 제공업체에서 DNS 존 파일을 업로드하거나 DNS 레코드를 자동 스캔하는 두 가지 방법 중 하나를 선택할 수 있습니다:

### 1. DNS 존 파일 업로드

이 방법은 기존 레코드를 누락하지 않고 현재 DNS 제공업체의 모든 DNS 레코드를 가져오려는 경우에 권장됩니다.

현재 DNS 제공업체에서 DNS 존 파일을 가져오는 방법:

- 현재 DNS 제공업체 또는 도메인을 원래 구매한 곳에 로그인합니다.

**참고:** 네임서버를 변경한 경우 도메인 등록업체와 DNS 제공업체가 다를 수 있습니다. 예를 들어, GoDaddy에서 도메인을 구매했지만 네임서버를 업데이트하여 Cloudflare로 연결한 경우, 이제 Cloudflare가 DNS를 관리합니다. 이 경우 DNS 레코드(존 파일)에 액세스하려면 Cloudflare에 로그인해야 합니다.

- 이전하려는 도메인의 DNS 설정(Settings)으로 이동합니다
- DNS 존/레코드 파일 내보내기 옵션을 찾습니다
- 해당 옵션을 찾을 수 없는 경우 현재 DNS 제공업체 또는 등록업체의 지원팀에 문의하여 파일을 받으세요

아래 등록업체별 단계별 가이드를 참조하세요:

#### GoDaddy

GoDaddy에서 존 파일을 업로드하는 방법은 [여기](https://www.godaddy.com/en-in/help/export-my-domains-zone-file-records-4166)에서 확인할 수 있습니다.

#### Cloudflare

Cloudflare에서 존 파일을 업로드하는 방법은 [여기](https://developers.cloudflare.com/dns/manage-dns-records/how-to/import-and-export/)에서 확인할 수 있습니다.

#### NameCheap

현재 Namecheap은 다운로드 가능한 존 파일을 제공하지 않으므로, 레코드를 수동으로 다시 만들거나 지원팀에 문의하여 레코드에 액세스해야 할 수 있습니다. 수동으로 레코드를 추출하는 방법은 [여기](https://gist.github.com/ashleykleynhans/69e4fb525d4f32d766313d3f9d22b688)를 참조하세요.

#### IONOS

- [도메인 내보내기](https://www.ionos.com/help/domains/general-information-about-domain-usage/domain-exports/)
- [Cloud DNS](https://docs.ionos.com/cloud/network-services/cloud-dns)
- [API 가이드](https://docs.ionos.com/cloud/network-services/cloud-dns/api-how-tos/export-dns-zone)

---

### 2. DNS 레코드 자동 스캔

이 방법은 편리하며 사전 설정이 필요하지 않습니다. 이 방법에서는 기존 DNS 레코드가 자동으로 스캔되지만, 일부 기존 레코드가 스캔에서 감지되지 않을 수 있습니다. 따라서 이전 후 퍼널, 웹사이트 등 기존 연결된 서비스의 중단을 방지하려면, 스캔된 레코드를 현재 DNS 제공업체 또는 등록업체의 레코드와 수동으로 교차 확인하고 필요한 경우 레코드를 추가/편집하는 것이 강력히 권장됩니다.

**참고:** 등록업체에서 네임서버 레코드를 업데이트한 경우 도메인 등록업체와 DNS 제공업체가 다를 수 있습니다. 예를 들어, GoDaddy에서 도메인을 구매했지만 네임서버를 변경하여 Cloudflare로 연결한 경우, Cloudflare가 DNS 제공업체가 됩니다. 이 경우 DNS 레코드를 보고 비교하려면 Cloudflare에 로그인해야 합니다.

---

## 2단계: DNS 레코드 검토

레코드가 가져와지면 이제 DNS 레코드를 검토할 수 있습니다. 표시된 DNS 테이블에서 다음을 수행할 수 있습니다:

- 레코드 유형(예: A, CNAME, TXT, MX)별로 분류된 모든 DNS 항목을 테이블 형식으로 봅니다
- "Add Record(레코드 추가)"를 클릭하여 새 레코드를 추가합니다
- 필요에 따라 개별 레코드를 편집하거나 삭제합니다
- 모든 필드(이름, 유형, 값)를 사용하여 레코드를 검색합니다

![DNS 레코드 테이블](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047294027/original/a_Aa2nz80cD6o0L2p6AXMe_-9Kq9Io1VTQ.png?1748353067)

**GoDaddy 인터페이스 -**

![GoDaddy DNS 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047294066/original/1Uz8wzjSfUSZwRlP2-R73_9rcUaCoQtXoA.png?1748353089)

**참고:** 스캔된 DNS 레코드를 DNS 제공업체 또는 등록업체(도메인을 원래 구매한 곳)에서 현재 사용 가능한 레코드와 수동으로 교차 확인하는 것이 강력히 권장됩니다. 자동 스캔 중에 레코드가 누락되면 이전 후 웹사이트가 다운되거나 이메일이 작동하지 않을 수 있습니다. 따라서 스캔된 레코드를 기존 레코드와 신중하게 검토하고 비교하여 누락된 것이 없도록 필요한 추가 또는 변경을 하는 것이 중요합니다.

---

## 자주 묻는 질문

**1. 자동 스캔 후 일부 DNS 레코드가 누락된 경우 어떻게 하나요?**

항상 스캔된 레코드를 현재 DNS 제공업체와 수동으로 교차 확인하세요. 자동 스캔은 일부 레코드를 놓칠 수 있습니다. 이전을 완료하기 전에 레코드를 편집, 삭제 또는 추가할 수 있습니다.

**2. 네임서버가 다른 곳(예: Cloudflare)에서 관리되지만 도메인이 GoDaddy에 있는 경우 어떻게 하나요?**

등록업체가 GoDaddy라도 DNS 제공업체는 Cloudflare입니다. 도메인을 이전할 때 이전 후 네임서버를 변경하지 않는 한 DNS 설정은 여전히 Cloudflare에서 관리됩니다.

**3. 등록업체와 DNS 제공업체가 다른 경우 어떻게 하나요?**

DNS 제공업체(예: Cloudflare)에 로그인하여 DNS 레코드를 내보내거나 검토해야 합니다. 등록업체는 도메인만 보유하고 DNS 설정은 보유하지 않습니다.

---

## 다음 단계 / 관련 문서

- [도메인 이전 - 이전 완료](https://help.leadconnectorhq.com/support/solutions/articles/155000005317-domain-transfer-in-finalize-transfer)
- [도메인 이전 - 이전 승인](https://help.leadconnectorhq.com/support/solutions/articles/155000005326-domain-transfer-in-approve-transfer)

**이전 단계**
- [도메인 이전 - 자격 확인](https://help.leadconnectorhq.com/support/solutions/articles/155000005315-domain-transfer-in-and-eligibility-check)

---

도메인 이전 중 질문이 있거나 문제가 발생하면 계정의 도움말 아이콘에서 지원팀에 문의해 주세요.

---
*원문 최종 수정: Wed, 11 Jun, 2025 at 5:58 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*