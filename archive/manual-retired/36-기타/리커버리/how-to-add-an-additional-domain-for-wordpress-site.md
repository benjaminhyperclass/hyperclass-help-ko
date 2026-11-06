---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# 워드프레스 사이트에 추가 도메인을 연결하는 방법

이 가이드는 Hyperclass를 통해 호스팅되는 워드프레스 사이트에 추가 도메인을 연결하는 방법을 안내합니다.

## 추가 도메인 연결 단계별 안내
- [1단계: '도메인 또는 서브도메인 추가' 버튼 클릭](#1단계-도메인-또는-서브도메인-추가-버튼-클릭)
- [2단계: 도메인에 CNAME 레코드 추가](#2단계-도메인에-cname-레코드-추가)
- [3단계: 도메인에 A 레코드 생성](#3단계-도메인에-a-레코드-생성)

### 1단계: '도메인 또는 서브도메인 추가' 버튼 클릭

![도메인 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48241451628/original/0pyp8k6UCxrx-a4r_Tv8BymxwJyg9w9dtA.png?1658945882)

### 2단계: 도메인에 CNAME 레코드 추가

- 사용할 도메인 이름을 입력하세요
- 'Generate CNAME' 버튼을 클릭하세요
- 시스템에서 생성된 Key(키)와 Value(값)를 복사하세요
- 이 값들을 기반으로 CNAME 레코드를 추가하세요

![CNAME 레코드 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48241453423/original/MB0cSKfLzkPl7jZebMd_P18yIL5E3xXUgA.jpeg?1658946532)

- CNAME 레코드를 추가했다는 체크박스를 선택하세요
- 'Verify and Create Certificate' 버튼을 클릭하세요

![CNAME 인증 및 인증서 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48241452662/original/koU5cVomDZ5NXPJYr2bE1wRO3cGN5LvrVg.png?1658946225)

**중요사항**: CNAME과 A 레코드의 값은 사용자마다 다를 수 있습니다(wp1.msgsndr.com, wp2.msgsndr.com 등). 레코드를 추가하기 전에 반드시 본인 화면에서 표시된 값을 확인하세요.

### 3단계: 도메인에 A 레코드 생성

- 팝업에서 값을 복사하여 도메인 설정(Domain Settings)에 A 레코드를 추가하세요

![A 레코드 값 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48241453781/original/FnIWxx-fVO7jvAHMDHRYIz2HH3rSIiNPcg.png?1658946659)

![A 레코드 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48241453826/original/0DTFtugrrIC_xSnBs2lFA8X6gUtlX-q0ZQ.png?1658946682)

**중요사항**: CNAME과 A 레코드의 값은 사용자마다 다를 수 있습니다(wp1.msgsndr.com, wp2.msgsndr.com 등). 레코드를 추가하기 전에 반드시 본인 화면에서 표시된 값을 확인하세요.

이제 완료되었습니다! DNS 레코드가 성공적으로 전파되면 워드프레스 대시보드에서 새 도메인을 기본 도메인으로 설정할 수 있습니다.

### 도메인 등록 업체별 CNAME 레코드 추가 가이드

- [CloudFlare에서 CNAME 레코드 추가하는 방법](https://community.cloudflare.com/t/how-do-i-add-a-cname-record/59)
- [Domain.com에서 CNAME 레코드 추가하는 방법](https://www.domain.com/help/article/dns-management-how-to-update-cname-aliases)
- [BlueHost에서 CNAME 레코드 추가하는 방법](https://my.bluehost.com/hosting/help/resource/714)
- [HostGator에서 CNAME 레코드 추가하는 방법](https://www.hostgator.com/help/article/how-to-change-dns-zones-mx-cname-and-a-records)
- [GoDaddy에서 CNAME 레코드 추가하는 방법](https://ca.godaddy.com/help/add-a-cname-record-19236)
- [NameCheap에서 CNAME 레코드 추가하는 방법](https://www.namecheap.com/support/knowledgebase/article.aspx/9646/2237/how-to-create-a-cname-record-for-your-domain/)

일부 도메인 제공업체는 DNS 변경사항이 전파되는데 24~48시간이 걸리며, 다른 업체는 즉시 적용됩니다. [https://dnschecker.org/](https://dnschecker.org/)와 같은 도구를 사용해서 DNS 변경사항이 전파되었는지 확인할 수 있습니다.

### 도메인이 추가되지 않을 때 문제 해결

다음과 같은 이유로 문제가 발생할 수 있습니다:

- **도메인 이름에 오타가 있는 경우** [위 예시처럼] - 오타를 수정하면 문제가 해결됩니다
- **DNS 변경사항이 아직 전파되지 않은 경우** - 더 기다린 후 몇 시간 뒤나 다음날에 다시 시도해보세요
- **DNS 설정이 올바르게 구성되지 않은 경우** - 도메인 제공업체에 문의하여 지원팀과 오류에 대해 상의하세요
- **같은 서브도메인에 대해 중복된 레코드가 있는 경우** [예: blog.mydomain.com이 wp1.msgsndr.com을 가리키는 CNAME 레코드가 있지만 동시에 다른 제공업체를 가리키는 A 레코드도 있는 경우] - 이런 경우 중복된 레코드를 삭제하면 문제가 해결됩니다

대부분의 DNS 설정 관련 문제는 Hyperclass 지원팀에서 도움을 드릴 수 없으므로 도메인 제공업체에 문의하셔야 할 수 있습니다.

---
*원문 최종 수정: 2023년 3월 21일*
*Hyperclass 사용 가이드 — hyperclass.ai*