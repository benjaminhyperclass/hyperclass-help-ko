---
원문: https://help.gohighlevel.com/support/solutions/articles/48001227438-ssl-certificates-for-dedicated-lc-email-domains
번역일: 2026-11-06
카테고리: 09-이메일
---

# 하이퍼클래스 이메일 전용 도메인의 SSL 인증서

전용 도메인으로 이메일을 보낼 때 링크가 깨지지 않고 안전하게 열리도록 SSL 인증서를 확인하고 관리하는 방법을 안내해요. SSL 상태를 확인하거나, 인증서가 발급되지 않아 링크 오류가 생겼을 때 참고하세요.

## 개요

SSL 인증서(Secure Sockets Layer)는 이메일에 들어가는 추적 URL, 열람 URL, 클릭 URL을 암호화해 링크가 안전하게 열리도록 해 줘요. 유효한 SSL 인증서가 없으면 링크가 깨지고, 수신자에게는 콘텐츠 대신 오류 화면이 보여요.

전용 도메인을 추가하고 인증하면 SSL 인증서가 자동으로 발급돼요. 도메인에는 다음 세 가지 상태 중 하나가 표시돼요.

- **SSL Issued**(발급됨): 인증서가 활성화된 상태예요.
- **SSL Pending**(대기 중): 인증서를 생성하는 중이에요.
- **SSL Unknown**(알 수 없음): 인증서가 아직 생성되거나 발급되지 않았어요.

## SSL 인증서가 왜 필요한가요?

유효한 SSL 인증서가 없으면 수신자가 이메일 링크를 눌렀을 때 링크가 깨지거나 보안 경고가 보일 수 있어요. 그러면 발신자 평판이 나빠지고 참여율도 떨어져요. 이메일 캠페인을 잘 운영하려면 SSL이 발급되어 있고 유효한지 꼭 확인하세요.

- 링크 깨짐 방지: SSL 인증서가 있으면 이메일 링크가 정상적으로 열려요. 수신자가 링크를 눌렀을 때 "이 사이트는 보안 연결을 제공할 수 없습니다(This site can't provide a secure connection)" 오류가 나타나지 않아요.
- 보안 강화: SSL이 도메인과 수신자 사이의 통신을 보호해요. 추적, 열람, 클릭 URL이 모두 처음부터 끝까지 암호화돼요.
- 참여율 유지: 오류가 없으면 수신자가 보안 경고나 깨진 링크 페이지를 만나지 않고 콘텐츠를 볼 수 있어요. 그만큼 참여율도 높아져요.

## SSL 인증서 확인하는 곳

사용 중인 이메일 도메인의 SSL 관리 화면은 다음 순서로 열어요.

1. **설정**으로 이동하세요.
2. **이메일 서비스**를 선택하세요.
3. 오른쪽에서 **Dedicated Domain And IP**(전용 도메인 및 IP) 버튼을 클릭하세요. 도메인 관리 화면이 열려요. 여기서 SSL 상태를 확인하고 필요한 조치를 할 수 있어요.

![설정 내비게이션에서 이메일 서비스로 이동하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032685878/original/KpOIuYa-wAWeMlovftKhUZ22a_CPT3yJ0w.jpg?1726063683)

설정에서 이메일 서비스로 이동하는 화면

![SSL 인증서 상태가 보이는 Dedicated Domain And IP 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032685971/original/f-IR_ph9PrvRzNEdzHK_OIJnoKQstusv3g.jpg?1726063742)

SSL 인증서 상태가 표시된 Dedicated Domain And IP 화면

## 이메일 도메인에 SSL 인증서 설정하기

사용 중인 도메인의 SSL을 설정하거나 문제를 해결하는 방법은 간단해요. 아래 두 단계를 따라 인증서를 발급하거나 다시 발급하세요.

### 1단계. 도메인 인증하기

**설정 > 이메일 서비스 > Dedicated Domain And IP**로 이동한 뒤 도메인 옆의 **지금 인증하기** 버튼을 클릭하세요. 도메인 DNS 페이지로 이동해요. 모든 레코드가 올바르게 설정되고 인증되었는지 확인하세요.

주요 DNS 제공업체별 안내는 다음 링크를 참고하세요.

- [GoDaddy](https://www.godaddy.com/help/manage-dns-zone-files-680)
- [Google Domains](https://support.google.com/a/answer/48090?hl=en)
- [Hostgator](https://www.hostgator.com/help/article/manage-dns-records-with-hostgatorenom)
- [Hover](https://help.hover.com/hc/en-us/articles/217282457-How-to-Edit-DNS-records-A-CNAME-MX-TXT-and-SRV-Updated-Aug-2015-)
- [Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/9214/31/cpanel-email-deliverability-tool--spf-and-dkim-records/)
- [Squarespace](https://support.squarespace.com/hc/en-us/articles/205812348-Opening-Advanced-DNS-settings)
- [AWS (Route 53)](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-editing.html)
- [Cloudflare](https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/)
- [Bluehost](https://www.bluehost.com/help/article/dns-management-add-edit-or-delete-dns-entries)
- [Hostinger](https://www.hostinger.com/tutorials/how-to-use-hostinger-dns-zone-editor)
- [InMotion](https://www.inmotionhosting.com/support/domain-names/create-cname-record/)
- [Hostwinds](https://www.hostwinds.com/guide/how-to-change-cname-record/)

DNS 레코드 인증이 끝나면 **도메인 인증** 버튼을 클릭하세요. SSL 인증서가 발급되거나 다시 발급돼요.

![SSL 인증서를 발급하는 도메인 인증 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032685638/original/_xOi8GDwehFPSNgObxk2fnYzk3M092RvKg.png?1726063543)

**도메인 인증**을 클릭하면 SSL 발급이 시작돼요

### 2단계. SSL 상태 확인하기

- **SSL Issued:** 따로 할 일은 없어요. 도메인이 보호되고 있어요.
- **SSL Pending:** 1단계를 다시 따라 도메인을 다시 인증하세요. 그러면 시스템이 인증서 생성을 마무리해요.
- **SSL Unknown:** 도메인 인증 과정을 다시 진행하세요. 인증 후에도 SSL이 계속 알 수 없음으로 표시되면 DNS 레코드를 확인한 뒤 다시 시도하세요.

![도메인 관리 화면의 SSL 인증서 상태 표시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032685791/original/fvZ-XxXyOUUiH8CamxriFOGDlmTle4T8oQ.png?1726063609)

SSL 상태 표시: 발급됨(Issued), 대기 중(Pending), 알 수 없음(Unknown)

### 설정 완료

SSL이 **Issued**로 표시되면 도메인과 이메일 캠페인이 안전하게 보호되고, 바로 발송할 수 있는 상태예요.

## 자주 묻는 질문

### 이메일 링크 URL이 깨져서 열리지 않으면 어떻게 하나요?

**설정 > 이메일 서비스 > Dedicated Domain And IP**로 이동해 **도메인 인증**을 클릭하면 SSL 인증서가 다시 발급돼요. 인증서가 다시 발급되면 링크가 정상적으로 열려요.

### "이 사이트는 보안 연결을 제공할 수 없습니다(This site can't provide a secure connection)"는 무슨 뜻인가요?

도메인의 SSL 인증서가 제대로 발급되지 않았다는 뜻이에요. **Dedicated Domain And IP** 화면에서 도메인을 다시 인증하면 해결돼요.

### SSL이 대기 중이거나 알 수 없음으로 표시되면 어떻게 하나요?

도메인 인증 절차를 따라 도메인을 다시 인증하세요. 그러면 시스템이 새 SSL 인증서를 생성해요. 상태가 계속 그대로라면 도메인의 DNS 레코드가 모두 올바르게 설정되어 있는지 다시 확인하세요.

### SSL 인증서에 비용이 드나요?

아니요. 전용 도메인을 추가하고 인증하면 SSL 인증서가 추가 비용 없이 자동으로 발급돼요. 인증서를 따로 구매하거나 설정할 필요가 없어요.

### SSL 인증서가 발급되기까지 얼마나 걸리나요?

대부분 도메인을 인증하고 몇 분 안에 발급돼요. **대기 중**으로 15~30분 넘게 표시되면 도메인을 다시 인증해서 재발급을 시작하세요.

### 추적 URL이나 수신거부 URL 같은 모든 이메일 링크에 SSL이 적용되나요?

네. SSL 인증서는 전용 도메인에서 이메일 시스템이 만드는 모든 URL에 적용돼요. 추적 URL, 열람 확인 픽셀, 클릭 링크, 수신거부 링크가 모두 포함돼요.

### SSL을 다시 발급하면 연락처에게 서비스 중단이 생기나요?

재발급은 거의 즉시 끝나고 백그라운드에서 진행돼요. 이미 보낸 이메일의 링크를 누른 연락처는 재발급되는 몇 분 동안 잠시 오류를 볼 수 있어요. 새 인증서가 활성화되면 링크는 정상적으로 열려요.
