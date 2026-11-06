---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000005318-how-to-upload-a-dns-zone-file-during-domain-transfer
번역일: 2026-04-23
카테고리: 도메인 연결/이전
---

# 도메인 이전 시 DNS 존 파일 업로드 방법

**목차**

- [개요](#개요)
- [등록업체별 존 파일 내보내기 방법](#등록업체별-존-파일-내보내기-방법)
  - [GoDaddy](#GoDaddy)
  - [Cloudflare](#Cloudflare)
  - [Namecheap](#Namecheap)
  - [IONOS](#IONOS)

---

## 개요

도메인을 이전할 때는 DNS 레코드가 보존되도록 하는 것이 중요합니다. 이를 위한 가장 정확한 방법 중 하나는 현재 등록업체에서 내보낸 DNS 존 파일을 업로드하는 것입니다.

이 파일에는 A, CNAME, TXT, MX 및 기타 레코드 유형을 포함한 도메인의 모든 DNS 항목이 포함되어 있어, 이전 후에도 웹사이트, 이메일 및 기타 서비스가 원활하게 작동하도록 유지하는 데 필수적입니다.

## 등록업체별 존 파일 내보내기 방법

### GoDaddy

GoDaddy에서 존 파일을 업로드하는 방법은 [여기](https://www.godaddy.com/en-in/help/export-my-domains-zone-file-records-4166)를 참고하세요.

---

### Cloudflare

Cloudflare에서 존 파일을 업로드하는 방법은 [여기](https://developers.cloudflare.com/dns/manage-dns-records/how-to/import-and-export/)를 참고하세요.

### Namecheap

현재 Namecheap은 다운로드 가능한 존 파일을 제공하지 않으므로, 레코드를 수동으로 재생성하거나 고객지원팀에 문의하여 레코드에 접근해야 할 수 있습니다. 수동으로 레코드를 추출하는 방법은 [여기](https://gist.github.com/ashleykleynhans/69e4fb525d4f32d766313d3f9d22b688)를 참고하세요.

### IONOS

- [도메인 내보내기](https://www.ionos.com/help/domains/general-information-about-domain-usage/domain-exports/)
- [Cloud DNS](https://docs.ionos.com/cloud/network-services/cloud-dns)
- [API 가이드](https://docs.ionos.com/cloud/network-services/cloud-dns/api-how-tos/export-dns-zone)

형식이나 방법이 확실하지 않으시면 언제든지 고객지원팀에 문의해 주세요!

---
*원문 최종 수정: Wed, 11 Jun, 2025 at 2:42 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*