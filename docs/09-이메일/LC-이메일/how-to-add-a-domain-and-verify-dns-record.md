---

번역일: 2026-04-07
카테고리: 09-이메일 > LC-이메일
---

# 도메인 추가 및 DNS 레코드 인증하기

도메인을 추가하고 인증하는 것은 안전하고 안정적인 이메일 전송을 보장하기 위한 필수 단계입니다. 이 과정은 브랜드 평판을 보호하고, 스푸핑을 방지하며, 이메일이 스팸함이 아닌 받은편지함에 도착할 확률을 높여줍니다. 이 가이드는 도메인 추가, DNS 레코드 인증, 그리고 일반적인 문제 해결 방법을 안내합니다.

**목차**

- [시작하기 전 필요사항](#시작하기-전-필요사항)
- [1단계: 도메인 추가하기](#1단계-도메인-추가하기)
- [2단계: 도메인 인증하기](#2단계-도메인-인증하기)
- [필요한 DNS 레코드 유형과 이유](#필요한-dns-레코드-유형과-이유)
- [메뉴에서 도메인 인증하기](#메뉴에서-도메인-인증하기)
- [DNS 레코드 확인하기](#dns-레코드-확인하기)
- [옵션 1: DNS 제공업체 연동을 통한 자동 구성](#옵션-1-dns-제공업체-연동을-통한-자동-구성)
- [옵션 2: 수동 DNS 설정](#옵션-2-수동-dns-설정)
- [일반 설정 가이드라인](#일반-설정-가이드라인)
- [DNS 제공업체별 예시](#dns-제공업체별-예시)
- [인증 완료 후](#인증-완료-후)
- [일반적인 문제 해결](#일반적인-문제-해결)
- [자주 묻는 질문](#자주-묻는-질문)

---

## **시작하기 전 필요사항**

도메인을 설정하기 전에 다음 사항들을 준비해주세요:

- DNS 제공업체의 관리 패널 접근 권한 (예: Cloudflare, GoDaddy, AWS Route 53, Namecheap, Google Domains 등). 도메인이 현재 호스팅되는 플랫폼에 로그인하여 필요한 DNS 레코드를 추가하면 됩니다.

- 이메일 발송에 사용할 도메인 또는 서브도메인

- DNS 레코드를 추가/편집할 수 있는 자격 증명 또는 권한

- DNS 레코드 유형에 대한 기본 이해 (SPF, DKIM, DMARC, CNAME, TXT, MX)

## **1단계: 도메인 추가하기**

도메인을 추가하는 것이 인증을 위한 첫 번째 단계입니다.

### **전용 도메인 접근하기**

Settings(설정) → Email Services(이메일 서비스) → Dedicated Domain & IP(전용 도메인 & IP)로 이동합니다.

![도메인 설정 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053797876/original/QX6-2-QGltHkBgYk-vToXdQZ3T9ECRHWoA.png?1757947789)

### **도메인 추가하기**

"Dedicated Domains(전용 도메인)" 메뉴 안에서 우측 상단의 + Add Domain(+ 도메인 추가) 옵션을 클릭합니다.

![도메인 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053797941/original/WXqTJ3QH216r_zijFc0qvVi1OVoxJolaeA.png?1757947835)

### **도메인 상세 정보 입력**

사용하려는 도메인 또는 서브도메인을 입력합니다. (더 나은 전송성을 위해 **mail.yourdomain.com**과 같은 서브도메인 사용을 권장합니다.) Add & Verify(추가 및 인증)를 클릭합니다.

![도메인 상세 정보 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053798546/original/rK-bp-KmrNeVDP10evTY13GeeuO5z0gdnw.png?1757948031)

## **2단계: 도메인 인증하기**

인증은 귀하의 이메일이 인증되고 받은편지함 제공업체로부터 신뢰받을 수 있도록 보장합니다. 이는 도메인에 DNS 레코드를 설정하는 과정을 포함합니다.

### **필요한 DNS 레코드 유형과 이유**

- **SPF (Sender Policy Framework):** 귀하의 도메인을 대신하여 어떤 서버가 이메일을 보낼 수 있는지 승인합니다.

- **DKIM (DomainKeys Identified Mail):** 이메일이 변조되지 않았음을 증명하기 위해 디지털 서명을 추가합니다.

- **DMARC (Domain-based Message Authentication, Reporting & Conformance):** 인증 정책을 시행하고 이메일 전송에 대한 리포팅을 제공합니다.

![DNS 레코드 유형](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053798663/original/XPwCzaCP9KTSX6rsPHTQj5cGnCYT_-PaoA.png?1757948102)

### **메뉴에서 도메인 인증하기**

도메인이 추가되면, 도메인 옆의 **점 세 개 메뉴**로 이동하여 **Verify domain(도메인 인증)**을 클릭할 수 있습니다. 이는 시스템에 "DNS 레코드를 설정했으니 지금 확인해주세요"라고 알리는 빠른 방법입니다.

![도메인 인증 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053799931/original/nKdX5oSwO0xNf_65ogodozDF6X7vMVHnEw.png?1757948731)

### **DNS 레코드 확인하기**

**Verify domain(도메인 인증)**을 누른 후, 귀하의 도메인에 필요한 모든 DNS 레코드(SPF, DKIM, CNAME, MX, DMARC) 목록이 표시됩니다. 각 레코드가 인증되었는지 여부를 보여주며, 편리한 **Copy(복사)** 버튼을 사용하여 DNS 제공업체에 값을 붙여넣을 수 있습니다. 모든 것이 확인되면 도메인이 인증됨으로 표시됩니다.

![DNS 레코드 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053867806/original/pRQ-Oa9_dyPPKdZ6l7IEC4rZYNnrihAhJA.png?1758026774)

### **옵션 1: DNS 제공업체 연동을 통한 자동 구성**

지원되는 DNS 제공업체인 경우 가장 간단한 방법입니다.

- 도메인을 추가한 후 **Continue(계속)**을 클릭합니다.
- HighLevel이 귀하의 DNS 제공업체를 감지합니다 (예: Cloudflare, GoDaddy, Namecheap).
- 로그인하고 (Lead Connector)가 DNS 레코드를 자동으로 구성하도록 승인합니다.
- 완료되면 도메인이 **Verified(인증됨)**로 표시됩니다.

**참고:** DNS 제공업체가 지원되지 않는 경우 수동으로 레코드를 설정하라는 메시지가 표시됩니다.

![자동 DNS 구성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053797760/original/1B4vPtUrNt_fg8-Q06IDWSn4UYSWCAXQgw.png?1757947702)

### **옵션 2: 수동 DNS 설정**

자동 구성을 사용할 수 없는 경우 DNS 레코드를 수동으로 추가해야 합니다. HighLevel이 필요한 정확한 레코드를 제공합니다.

#### **일반 설정 가이드라인**

- **Type(유형):** 지시에 따라 TXT, CNAME 또는 MX로 레코드를 추가합니다.

- **Name/Host(이름/호스트):** 루트 도메인의 경우 "@"를 사용합니다. 서브도메인(예: mail.yourdomain.com)의 경우 서브도메인만 입력합니다(예: "mail").

- **Value(값):** HighLevel에 표시된 대로 정확히 복사하여 붙여넣습니다.

- **TTL:** 가능한 경우 5분으로 설정합니다.

![수동 DNS 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053797699/original/O1xyu5hnbNCZBVZ1ca3aJEQcYMRYLOJJbw.png?1757947671)

---

### **DNS 제공업체별 예시**

**Cloudflare**

- Cloudflare에 로그인합니다.
- 도메인의 **DNS** 설정으로 이동합니다.
- HighLevel에서 제공한 레코드(TXT, CNAME, MX)를 추가합니다.

**GoDaddy**

- GoDaddy에 로그인합니다.
- **Domains(도메인) → Manage DNS(DNS 관리)**를 엽니다.
- **Add(추가)**를 클릭하고 각 레코드를 입력합니다.

**AWS Route 53**

- AWS 콘솔을 엽니다.
- **Route 53 → Hosted Zones**로 이동합니다.
- 필요한 레코드 세트를 생성합니다.

**Namecheap**

- Namecheap에 로그인합니다.
- **Domain List(도메인 목록) → Manage(관리) → Advanced DNS**로 이동합니다.
- HighLevel에서 제공한 DNS 레코드를 추가합니다.

**Google Domains**

- Google Domains에 로그인합니다.
- 도메인을 선택하고 **DNS settings(DNS 설정)**로 이동합니다.
- DNS 레코드를 적절히 추가합니다.

## **인증 완료 후**

레코드가 인증되면:

- **SSL 인증서 발급:** 인증 후 1-10분이 소요될 수 있습니다.

- **도메인 상태:** 도메인이 HighLevel에서 **Verified/Active(인증됨/활성)**로 표시됩니다.

- **테스트 발송:** 헤더에서 SPF와 DKIM이 통과하는지 확인하기 위해 테스트 이메일을 발송합니다.

- **전송률 모니터링:** DMARC 리포트와 받은편지함 도달률 테스트 도구를 사용합니다.

## **일반적인 문제 해결**

인증에 실패하는 경우:

- 각 레코드가 제공된 내용과 정확히 일치하는지 다시 확인합니다.

- 올바른 **레코드 유형**(TXT, CNAME, MX)을 선택했는지 확인합니다.

- **Host/Name(호스트/이름)** 필드가 올바른지 확인합니다(추가 "@"를 피하거나 서브도메인 누락 방지).

- **TTL**이 너무 높은지 확인하고 가능한 경우 300초(5분)로 설정합니다.

- 인내심을 가지세요: DNS 전파는 제공업체에 따라 더 오래 걸릴 수 있습니다(때로는 24-48시간).

- DMARC의 경우: 도메인당 하나의 DMARC 레코드만 존재하는지 확인합니다.

- 중복된 SPF 레코드가 없는지 확인합니다. 도메인당 하나의 SPF TXT 레코드만 존재해야 합니다.

## **자주 묻는 질문**

**Q: 루트 도메인과 서브도메인 중 어느 것을 사용해야 하나요?**
루트 도메인의 평판을 보호하기 위해 서브도메인(예: mail.yourdomain.com) 사용을 권장합니다.

**Q: 도메인 인증에 얼마나 시간이 걸리나요?**
일반적으로 1-10분 내에 완료되지만, 드문 경우 전파에 최대 24-48시간이 걸릴 수 있습니다.

**Q: DNS 제공업체가 자동 구성을 지원하지 않으면 어떻게 하나요?**
제공된 레코드를 DNS 제공업체에 직접 입력하여 언제든지 수동 설정 옵션을 사용할 수 있습니다.

**Q: 루트 도메인과 서브도메인 모두에 DMARC 레코드가 필요한가요?**
루트 도메인에 이미 DMARC가 설정되어 있다면 서브도메인에 다시 추가할 필요가 없습니다.

**Q: SPF나 DKIM을 잘못 구성하면 어떻게 되나요?**
이메일이 스팸으로 분류되거나 인증 확인에 실패하여 전송률이 감소할 수 있습니다.

---
*원문 최종 수정: Mon, 9 Mar, 2026 at 5:41 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*