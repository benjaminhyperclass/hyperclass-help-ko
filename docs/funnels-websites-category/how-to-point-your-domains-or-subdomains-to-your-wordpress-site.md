---
원문: https://help.leadconnectorhq.com/support/solutions/articles/48001204688-how-to-point-your-domains-or-subdomains-to-your-wordpress-site
번역일: 2026-04-23
카테고리: 퍼널/웹사이트
---

# 도메인 또는 서브도메인을 WordPress 사이트에 연결하는 방법

## 목차

- [새 WordPress 사이트 설정하기](#새-WordPress-사이트-설정하기)
  - [새 WordPress를 블로그로 설정하기](#새-WordPress를-블로그로-설정하기)
  - [기타 도메인 등록업체 관련 링크](#기타-도메인-등록업체-관련-링크)
  - [새 WordPress를 메인 사이트로 설정하기](#새-WordPress를-메인-사이트로-설정하기)
- [기존 웹사이트 마이그레이션](#기존-웹사이트-마이그레이션)
- [자주 묻는 질문](#자주-묻는-질문)

새 WordPress 웹사이트를 설정하거나, 기존 사이트를 마이그레이션하거나, 추가 도메인을 연결할 때는 도메인의 DNS를 WordPress 인스턴스로 연결하도록 설정해야 합니다. 이 가이드는 설정 방법과 모범 사례를 안내해드립니다.

# 새 WordPress 사이트 설정하기

새 WordPress 사이트를 만들 때는 다음 두 가지 사용 사례 중 하나에 해당할 것입니다.

## 새 WordPress를 블로그로 설정하기

WordPress 사이트를 blog.mydomain.com 또는 updates.mydomain.com과 같은 서브도메인에서 사용할 계획이라면, 아래 화면에서 "새 웹사이트를 만들고 싶습니다"를 선택하세요.

![새 웹사이트 생성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48229694461/original/T49r8HPUFpDfasSBEi9NpPayBXtemDLJdw.png?1654083940)

그다음 도메인 공급업체(CloudFlare, GoDaddy, BigRock, NameCheap 등)에 로그인하여 blog.mydomain.com이 wp.msgsndr.com을 가리키는 CNAME 레코드를 추가하세요. 아래는 BigRock 도메인 공급업체를 사용한 예시입니다.

![BigRock CNAME 설정 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48171643220/original/2Q9zJfhG_hF7VtxJNHboRrP5bumnTyaXyQ.png?1639679737)

### 기타 도메인 등록업체 관련 링크

- [CloudFlare에서 CNAME 레코드 추가하기](https://community.cloudflare.com/t/how-do-i-add-a-cname-record/59)
- [Domain.com에서 CNAME 레코드 추가하기](https://www.domain.com/help/article/dns-management-how-to-update-cname-aliases)
- [BlueHost에서 CNAME 레코드 추가하기](https://my.bluehost.com/hosting/help/resource/714)
- [HostGator에서 CNAME 레코드 추가하기](https://www.hostgator.com/help/article/how-to-change-dns-zones-mx-cname-and-a-records)
- [GoDaddy에서 CNAME 레코드 추가하기](https://ca.godaddy.com/help/add-a-cname-record-19236)
- [NameCheap에서 CNAME 레코드 추가하기](https://www.namecheap.com/support/knowledgebase/article.aspx/9646/2237/how-to-create-a-cname-record-for-your-domain/)

일부 도메인 공급업체는 DNS 변경 사항이 반영되는 데 24-48시간이 걸리지만, 즉시 반영되는 곳도 있습니다. [https://dnschecker.org/](https://dnschecker.org/)와 같은 도구를 사용해서 DNS 변경 사항이 반영되었는지 확인할 수 있습니다.

DNS 변경 사항이 반영되면 아래 화면으로 돌아와서 도메인이 올바르게 연결되었는지 확인하세요.

![도메인 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48229694824/original/Go3dZ6ph-8Q2USciwUvUEO_ODrcASa7JrA.png?1654084022)

도메인이 올바르게 연결되지 않으면 아래 예시와 같은 오류가 발생합니다.

![도메인 연결 오류 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48229695373/original/nbHnFzXWii09sc0cGxMJRqZVz5Q2y-dAXw.png?1654084159)

이런 오류는 다음과 같은 이유로 발생할 수 있습니다:

- 도메인 이름에 오타가 있는 경우 (위 예시처럼)
  이 경우 오타를 수정하면 문제가 해결됩니다.

- DNS 변경 사항이 아직 반영되지 않은 경우
  이 경우 더 기다린 후 몇 시간 후나 다음 날에 다시 시도해보세요.

- DNS 설정이 올바르지 않은 경우
  도메인 공급업체에 문의해서 오류에 대해 지원팀과 상의하세요.

- 같은 서브도메인에 대해 충돌하는 레코드가 있는 경우 (예: blog.mydomain.com이 wp.msgsndr.com을 가리키는 CNAME 레코드가 있지만 동시에 다른 공급업체를 가리키는 A 레코드도 있는 경우)
  이런 경우 중복되는 레코드를 제거하면 문제가 해결됩니다.

DNS 설정과 관련된 대부분의 경우 저희 지원팀에서는 도움을 드릴 수 없으며, 도메인 공급업체에 직접 문의하셔야 할 수 있습니다.

## 새 WordPress를 메인 사이트로 설정하기

WordPress 사이트를 메인 사이트로 사용하고 싶다면 mydomain.com과 www.mydomain.com에서 사용하게 될 것입니다.

이런 경우 위와 비슷한 단계를 따르되, 루트 도메인(mydomain.com)에 대해서는 34.149.157.183을 가리키는 A 레코드를, 서브도메인(www.mydomain.com)에 대해서는 wp.msgsndr.com을 가리키는 CNAME을 설정해야 합니다. 아래는 이런 설정의 예시입니다.

### mydomain.com의 A 레코드

![루트 도메인 A 레코드 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48171653872/original/iAcCaLykU6_CRQaW1-oEkV9qEZsaDh1mYA.png?1639682652)

### www.mydomain.com의 CNAME

![www 서브도메인 CNAME 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48171657076/original/ds7JsTOXfjri0BfpmHePKgsR1BpBgLtzvw.png?1639683646)

# 기존 웹사이트 마이그레이션

이미 실제 트래픽이 있는 기존 WordPress 사이트를 저희 서버로 마이그레이션하려는 경우, DNS를 두 번 변경해야 합니다. 마이그레이션 과정에서 실제 사이트의 다운타임이 발생하지 않도록 하기 위해 이런 2단계 과정을 거칩니다. 이를 통해 마이그레이션 과정 중에도 여러분(또는 고객)의 웹사이트 방문자들이 일관된 경험을 할 수 있습니다.

## 마이그레이션 시작 시

마이그레이션을 시작할 때 더미 CNAME을 입력하고 무작위로 생성된 값을 가리키도록 하여 도메인을 확인하라는 요청을 받게 됩니다. 이 단계는 다음과 같습니다:

![마이그레이션 시작 시 도메인 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48229695901/original/8I_YEko54b6YimTMhNuzBhFsrcdVbuIpAQ.png?1654084237)

이를 통해 백업 파일의 출처인 도메인을 확인할 수 있습니다.

## 마이그레이션 완료 후

마이그레이션이 완료되면 wp-my-domain-com.msgsndr.com과 같은 임시 도메인이 발급됩니다. 이를 통해 마이그레이션된 웹사이트를 미리 보고, wp-admin 포털에 로그인해서 모든 커스터마이징을 테스트할 수 있습니다. 마이그레이션을 확인한 후에는 기존 웹사이트에서 새로 마이그레이션된 웹사이트로 트래픽을 전환할 준비를 할 수 있습니다.

이를 위해 다음과 같은 실제 트래픽 도메인들을 연결해야 합니다:

- domain.com (루트 도메인을 A 레코드를 통해 34.149.157.183로)
- www.domain.com (서브도메인을 CNAME을 통해 wp.msgsndr.com으로)
- blog.domain.com (서브도메인을 CNAME을 통해 wp.msgsndr.com으로)

도메인 변경 사항이 반영되면 로케이션 보기(Location View) → 사이트(Sites) → WordPress로 이동해서 추가 도메인으로 등록해야 합니다.

![추가 도메인 등록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48229696145/original/4h3IDzgcb8UL7cM9TfcHQ_ey0Nfjwfwiog.png?1654084285)

그다음 wp-admin → 대시보드(Dashboard) → 왼쪽 메뉴의 설정(Settings) → 일반(General)에 로그인해서 아래와 같이 사이트 URL과 WordPress URL을 변경하세요.

![WordPress URL 설정 변경](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48229696339/original/bj8DN2fPf1ohlEMzIU1ZhmGLNBQQ0wytQQ.png?1654084327)

# 자주 묻는 질문

## Q1: 같은 도메인을 다른 하위 계정/로케이션에 추가할 수 없어요

같은 도메인/서브도메인은 두 개의 로케이션에서 동시에 사용할 수 없습니다.

## Q2: 기본 도메인을 업데이트할 수 없는 이유는 무엇인가요?

추가 도메인은 삭제해서 다른 곳에서 사용할 수 있지만, 기본 도메인은 현재로서는 재활용할 수 없습니다.

## Q3: A/CNAME 레코드를 추가했는데도 도메인이 추가되지 않아요

이런 상황은 다음과 같은 이유로 발생할 수 있습니다:

- 도메인 이름에 오타가 있는 경우
  이 경우 오타를 수정하면 문제가 해결됩니다.

- DNS 변경 사항이 아직 반영되지 않은 경우
  이 경우 더 기다린 후 몇 시간 후나 다음 날에 다시 시도해보세요.

- DNS 설정이 올바르지 않은 경우
  도메인 공급업체에 문의해서 오류에 대해 지원팀과 상의하세요.

- 같은 서브도메인에 대해 충돌하는(여러 개의) 레코드가 있는 경우 (예: blog.mydomain.com이 wp.msgsndr.com을 가리키는 CNAME 레코드가 있지만 동시에 다른 공급업체를 가리키는 A 레코드도 있는 경우)
  이런 경우 중복되는 레코드를 제거하면 문제가 해결됩니다.

## Q4: 루트 도메인(예: mydomain.com)을 연결할 수 없어요

WordPress에 해당 슬러그/루트 도메인을 사용할 계획이라면 추가적인 AAA, TXT 레코드 등이 없는지 확인하세요.

---
*원문 최종 수정: 2022년 6월 1일*
*Hyperclass 사용 가이드 — hyperclass.ai*