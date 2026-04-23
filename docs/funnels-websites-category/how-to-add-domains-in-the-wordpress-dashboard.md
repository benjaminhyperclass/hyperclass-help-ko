---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000002548-how-to-add-domains-in-the-wordpress-dashboard
번역일: 2026-04-23
카테고리: 퍼널 및 웹사이트
---

# WordPress 대시보드에서 도메인 추가하는 방법

WordPress 사이트에 도메인을 추가하는 것은 해당 도메인을 통해 웹사이트를 일반 사용자가 접근할 수 있도록 하는 데 필요합니다. 도메인은 웹사이트의 주소 역할을 하며, 방문자가 이를 사용해 사이트에 접근할 수 있습니다.

이 가이드는 WordPress 사이트에 기본 도메인과 추가 도메인을 추가하는 단계별 안내를 제공합니다.

## 목차

- [WordPress 대시보드에서 기본 도메인 추가하기](#wordpress-대시보드에서-기본-도메인-추가하기)
  - [1단계: 도메인명 추가](#1단계-도메인명-추가)
  - [2단계: SSL 인증서 구성](#2단계-ssl-인증서-구성)
  - [3단계: DNS 업데이트](#3단계-dns-업데이트)
- [WordPress 대시보드에서 서브도메인 추가하기](#wordpress-대시보드에서-서브도메인-추가하기)
  - [1단계: 서브도메인명 추가](#1단계-서브도메인명-추가)
  - [2단계: DNS 제공업체에서 CNAME 및 A 레코드 업데이트](#2단계-dns-제공업체에서-cname-및-a-레코드-업데이트)
- [도메인/서브도메인 통합 대시보드](#도메인서브도메인-통합-대시보드)

# WordPress 대시보드에서 기본 도메인 추가하기

하위 계정(Sub-Account) → 사이트(Sites) → WordPress 대시보드로 이동하세요. 대시보드에서 도메인/서브도메인을 추가하는 섹션을 찾을 수 있습니다. '도메인 추가(Add Domain)' 버튼을 클릭하여 진행하세요.

![WordPress 대시보드 도메인 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026893404/original/-7L_WNYFwWD5iTORmdjeYHiTLDlWHO5USg.jpeg?1717147939)

## 1단계: 도메인명 추가

- WordPress 호스팅 대시보드의 도메인 관리 섹션으로 이동합니다.
- 원하는 도메인명을 입력합니다.
- 시스템이 자동으로 해당 도메인이 이미 다른 로케이션(Location)이나 에이전시(Agency)와 연결되어 있는지 확인합니다.
- 도메인이 사용 가능하다면 다음 단계로 진행합니다.

![도메인명 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026893401/original/cXOhxI3LUHGQaA2XkkFINAcU9NSLTQ9gTA.jpeg?1717147938)

## 2단계: SSL 인증서 구성

- 도메인이 확인된 후, SSL 인증서를 구성해야 합니다.
- 제공된 TXT 레코드를 DNS 제공업체에 추가합니다.
- TXT 레코드가 성공적으로 추가되고 확인되면 마지막 단계로 진행할 수 있습니다.

![SSL 인증서 구성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026893403/original/vyi07eWDFelwfMaDW3AiPW3dP499s-QXdQ.jpeg?1717147939)

📝 **참고:**
1. 대부분의 SSL 레코드는 1시간 내에 전파되지만, 전 세계적인 업데이트에는 최대 48시간이 소요될 수 있습니다.
2. 최적의 SSL 레코드 전파를 위해 TTL 값을 600ms 또는 가능한 가장 낮은 값으로 설정하세요.

## 3단계: DNS 업데이트

- 이 단계에서는 DNS 설정을 업데이트해야 합니다.
- 제공된 CNAME 및 A 레코드를 DNS 제공업체에 추가합니다.
- 레코드가 성공적으로 추가되면 'DNS 레코드 확인(Verify DNS Records)' 버튼을 클릭합니다.
- 대시보드로 이동하여 도메인을 기본 도메인으로 설정합니다.

![DNS 업데이트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026893402/original/wYVRaVWTM2fcOGQXG7ZI-FCNyCxwbt2GEg.jpeg?1717147938)

📝 **참고:**
1. DNS 제공업체가 Cloudflare인 경우, 프록시 설정을 비활성화해주세요.
2. 대부분의 DNS 업데이트는 1시간 내에 활성화되지만, 전 세계적인 업데이트에는 최대 48시간이 소요될 수 있습니다.
3. 최적의 DNS 레코드 전파를 위해 TTL 값을 600ms 또는 가능한 가장 낮은 값으로 설정하세요.

# WordPress 대시보드에서 서브도메인 추가하기

서브도메인 추가는 도메인 추가와 유사합니다. 추가 도메인의 SSL 인증서는 DNS 업데이트 단계에서 확인되므로 TXT 레코드 추가는 필요하지 않습니다.

## 1단계: 서브도메인명 추가

- WordPress 호스팅 대시보드의 도메인 관리 섹션으로 이동하여 원하는 도메인명을 입력합니다.
- 시스템이 자동으로 해당 도메인이 이미 다른 로케이션이나 에이전시와 연결되어 있는지 확인합니다. 도메인이 사용 가능하다면 DNS 레코드 업데이트의 마지막 단계로 진행합니다.

## 2단계: DNS 제공업체에서 CNAME 및 A 레코드 업데이트

- 제공된 CNAME 및 A 레코드를 DNS 제공업체에 추가합니다.
- 레코드가 성공적으로 추가되면 'DNS 레코드 확인(Verify DNS Records)' 버튼을 클릭합니다.

![서브도메인 DNS 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026893399/original/eJ-c9XGda0j-w_UezZLKl9og2lJ8y_wzew.png?1717147938)

# 도메인/서브도메인 통합 대시보드

새로운 대시보드는 도메인 관리에 대한 포괄적인 개요를 제공합니다.

- **SSL 발급 상태**: 'SSL 발급됨(SSL issued)/ SSL 미발급(SSL Not Issued)' 태그를 사용하여 SSL 인증서 발급 상태를 모니터링하고 올바르게 구성되었는지 확인합니다.
- **DNS 레코드 확인**: '확인됨(Verified)/ 미확인(Not Verified)' 태그를 사용하여 DNS 레코드의 확인 상태를 점검하고 올바르게 설정되었는지 확인합니다.
- **도메인 관리**: 최대 5개의 도메인 또는 서브도메인을 추가할 수 있습니다. 더 나은 조직을 위해 하나를 기본 도메인으로 지정하세요.
- **간편한 접두사 조정**: 'WWW로 접두사 변경(Change prefix to WWW)/ WWW 접두사 제거(Remove WWW Prefix)' 옵션을 사용하여 대시보드에서 간단하게 www와 non-www 접두사 간에 전환할 수 있습니다.

![도메인 대시보드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026893400/original/zX3UoqejgXrRSh8IjafVQ8zOSqkzjGpwHw.jpeg?1717147939)

도메인을 삭제하고 다시 추가해야 하는 경우, 이 과정에 시간이 걸릴 수 있습니다.

향상된 도메인 관리 플로우는 도메인을 추가하고 관리하는 것이 가능한 한 부드럽고 효율적이 되도록 보장합니다. 새로운 간소화된 단계와 강력한 대시보드를 통해 WordPress 호스팅 서비스 관리에서 더 큰 제어력과 간편함을 누릴 수 있습니다.

추가 도움이 필요하거나 궁금한 점이 있으시면 지원팀에 문의하세요. 새로운 도메인 관리 경험을 즐기세요!

---
*원문 최종 수정: Fri, 31 May, 2024 at 4:33 AM*  
*Hyperclass 사용 가이드 — hyperclass.ai*