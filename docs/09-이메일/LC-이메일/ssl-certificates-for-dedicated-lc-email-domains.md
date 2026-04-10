---

번역일: 2026-04-07
카테고리: 09-이메일 > LC-이메일
---

# 전용 LC 이메일 도메인의 SSL 인증서

SSL 인증서(Secure Sockets Layer)는 이메일에 포함된 모든 링크가 안전하고 접근 가능하도록 보장합니다. 추적 URL, 오픈 URL, 클릭 URL을 암호화하여 이메일의 보안을 강화합니다. SSL 인증서가 없으면 이메일의 링크가 깨져서 수신자가 링크를 열려고 할 때 오류가 발생합니다.

전용 도메인이 이메일 시스템에 추가되고 검증되면 SSL 인증서가 자동으로 발급됩니다. 도메인의 SSL 상태는 다음 세 가지 중 하나입니다:

- SSL 발급됨(SSL Issued): SSL 인증서가 성공적으로 생성되었습니다.
- SSL 대기중(SSL Pending): SSL 인증서가 생성 중입니다.
- SSL 알 수 없음(SSL Unknown): SSL 인증서가 생성되지 않았거나 발급되지 않았습니다.

목차

- [SSL 인증서가 왜 필요한가요?](#ssl-인증서가-왜-필요한가요)
- [SSL 인증서 확인 방법](#ssl-인증서-확인-방법)
- [LC 이메일 도메인 SSL 인증서 설정 방법](#lc-이메일-도메인-ssl-인증서-설정-방법)
- [자주 묻는 질문](#자주-묻는-질문)

## SSL 인증서가 왜 필요한가요?

유효한 SSL 인증서가 없으면 수신자가 깨진 링크나 보안 경고를 볼 수 있습니다. 이는 발신자 평판을 해치고 이메일 참여도를 떨어뜨릴 수 있습니다. SSL이 발급되고 유효한지 확인하는 것은 성공적인 이메일 캠페인과 안전한 디지털 환경 유지에 매우 중요합니다.

- **링크 오류 방지**: SSL 인증서는 이메일의 링크가 정상적으로 작동하도록 보장하고 "이 사이트에서 보안 연결을 제공할 수 없습니다" 오류를 방지합니다.
- **보안 강화**: 도메인과 수신자 간의 통신을 보안하여 신뢰할 수 있는 암호화된 링크를 제공합니다.
- **참여도 유지**: 오류를 방지함으로써 사용자가 보안 경고나 중단 없이 쉽게 콘텐츠에 접근할 수 있어 이메일 캠페인의 참여도가 높아집니다.

## SSL 인증서 확인 방법

커스텀 이메일 도메인의 SSL 관리에 접근하려면 다음 단계를 따르세요:

- **Settings(설정) → Location Settings(로케이션 설정)**으로 이동합니다.
- **Email Services(이메일 서비스)**를 선택합니다.
- 오른쪽에서 **Dedicated Domain And IP(전용 도메인 및 IP)** 버튼을 클릭합니다.

도메인 관리 화면이 나타나며, 여기서 SSL 인증서 상태를 확인하고 필요한 경우 조치를 취할 수 있습니다.

![SSL 인증서 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032685878/original/KpOIuYa-wAWeMlovftKhUZ22a_CPT3yJ0w.jpg?1726063683)

![도메인 관리 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032685971/original/f-IR_ph9PrvRzNEdzHK_OIJnoKQstusv3g.jpg?1726063742)

## LC 이메일 도메인 SSL 인증서 설정 방법

커스텀 도메인의 SSL 설정이나 SSL 문제 해결은 간단합니다. 아래 단계를 따라 SSL 인증서가 발급되거나 재발급되도록 하세요. 이 단계들을 따르면 커스텀 도메인과 이메일 캠페인이 안전하고 기능적이며 신뢰할 수 있게 됩니다.

### 1단계: 도메인 검증

- **Settings(설정) → Email Services(이메일 서비스) → Dedicated Domain And IP(전용 도메인 및 IP)**로 이동합니다.
- 도메인 옆의 **Verify Now(지금 검증)** 버튼을 클릭합니다.
- 도메인 DNS 페이지로 리다이렉트됩니다. 모든 DNS 레코드가 올바르게 설정되고 검증되었는지 확인하세요.

주요 DNS 제공업체별 DNS 설정 가이드:
- [GoDaddy](https://www.godaddy.com/help/manage-dns-zone-files-680)
- [Google Domains](https://support.google.com/a/answer/48090?hl=en)
- [Hostgator](https://www.hostgator.com/help/article/manage-dns-records-with-hostgatorenom)
- [Hover](https://help.hover.com/hc/en-us/articles/217282457-How-to-Edit-DNS-records-A-CNAME-MX-TXT-and-SRV-Updated-Aug-2015-)
- [Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/9214/31/cpanel-email-deliverability-tool--spf-and-dkim-records/)
- [Squarespace](https://support.squarespace.com/hc/en-us/articles/205812348-Opening-Advanced-DNS-settings)
- [AWS](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-editing.html)
- [Cloudflare](https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/)
- [Bluehost](https://www.bluehost.com/help/article/dns-management-add-edit-or-delete-dns-entries)
- [Hostinger](https://www.hostinger.com/tutorials/how-to-use-hostinger-dns-zone-editor)
- [InMotion](https://www.inmotionhosting.com/support/domain-names/create-cname-record/)
- [Hostwinds](https://www.hostwinds.com/guide/how-to-change-cname-record/)

- DNS 레코드가 검증되면 **Verify domain(도메인 검증)** 버튼을 클릭하여 SSL 인증서를 발급하거나 재발급합니다.

![도메인 검증 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032685638/original/_xOi8GDwehFPSNgObxk2fnYzk3M092RvKg.png?1726063543)

### 2단계: SSL 상태 확인

- **SSL 발급됨(SSL Issued)**: 추가 작업이 필요하지 않습니다. 도메인이 보안되었습니다.
- **SSL 대기중(SSL Pending)**: 위 단계에 따라 도메인을 다시 검증하세요. 이렇게 하면 SSL 인증서가 성공적으로 생성됩니다.
- **SSL 알 수 없음(SSL Unknown)**: 도메인 검증 과정을 다시 따르세요. 검증 후에도 SSL이 여전히 알 수 없음 상태라면 DNS 레코드를 검토하고 SSL 인증서 발급을 다시 시도하세요.

![SSL 상태 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032685791/original/fvZ-XxXyOUUiH8CamxriFOGDlmTle4T8oQ.png?1726063609)

## 자주 묻는 질문

**Q: 이메일 링크 URL이 깨졌을 때는 어떻게 해야 하나요?**

도메인 설정으로 가서 도메인을 다시 검증하여 SSL 인증서를 재발급하세요.

**Q: "이 사이트에서 보안 연결을 제공할 수 없습니다"라는 오류는 무엇을 의미하나요?**

이 오류는 도메인의 SSL 인증서가 제대로 발급되지 않았음을 의미합니다. 문제를 해결하려면 도메인을 다시 검증해야 합니다.

**Q: SSL이 대기중이거나 알 수 없음 상태일 때는 어떻게 해야 하나요?**

도메인 검증 단계에 따라 도메인을 다시 검증하세요. 이렇게 하면 시스템이 SSL 인증서가 발급되지 않았거나 과정에서 오류가 있을 경우 새 SSL 인증서를 생성하도록 합니다.

---
*원문 최종 수정: Wed, 11 Sep, 2024 at 10:41 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*