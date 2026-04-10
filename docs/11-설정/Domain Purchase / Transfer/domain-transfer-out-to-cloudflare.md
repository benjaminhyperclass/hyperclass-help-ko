---

번역일: 2026-04-07
카테고리: 11-설정 > 도메인 구매/이전
---

# 도메인을 Cloudflare로 이전하기

이 글에서는 도메인을 다른 Cloudflare 계정으로 이전하는 방법을 안내합니다. 사전 준비사항, 준비 단계, 그리고 이전 과정으로 구성되어 있습니다.

---

**목차**

- [사전 준비사항](#사전-준비사항)
- [이전 준비하기](#이전-준비하기)
  - [1단계: 새 계정에 도메인을 웹사이트로 추가하고 플랜 선택](#1단계-새-계정에-도메인을-웹사이트로-추가하고-플랜-선택)
  - [2단계: 계정 ID 확인 후 공유](#2단계-계정-id-확인-후-공유)
- [이전하기](#이전하기)
- ["네임서버 오류" 상태](#네임서버-오류-상태)

## 사전 준비사항

도메인을 이전할 Cloudflare 계정이 미리 만들어져 있어야 하고, 해당 계정에 접근 권한이 있어야 합니다.

## 이전 준비하기

#### **1단계:** 새 계정에 도메인을 웹사이트로 추가하고 플랜 선택

- 도메인을 이전할 Cloudflare 계정에 로그인합니다.

- **+ Add(추가)**를 클릭한 다음 **Connect a domain(도메인 연결)**을 선택합니다.

![도메인 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066541161/original/gVVHcsIW5QonlscmH3R5-YwnheyNszfwvg.png?1773091141)

- 이전할 도메인 이름을 입력하고 Continue(계속)를 클릭합니다.

![도메인 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066541180/original/65gJErz2EfCjyuCSJ6u23UJFGhREXOF5fg.png?1773091219)

- **Free(무료)** 플랜 또는 **Paid(유료)** 플랜을 선택합니다.

![플랜 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066541191/original/w7clqIe9U_CEp-gGmzhQNpK78eeRdSoIsA.jpeg?1773091290)

- 스캔된 DNS 레코드와 현재 DNS 레코드가 일치하는지 확인합니다. 현재 DNS 레코드는 다음 위치에서 확인할 수 있습니다:

![DNS 레코드 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066541199/original/NzCoal8RZ8tmFp3uFfnoo8KSCkI-IRQQTA.jpeg?1773091337)

- 스캔된 레코드가 기존 레코드와 일치하면 Continue to Activation(활성화 계속)을 클릭합니다. 일치하지 않으면 수동으로 레코드를 추가/제거하여 기존 레코드와 맞춰주세요.

Continue to Activation(활성화 계속)을 클릭하기 전에 **모든 레코드의 프록시가 OFF되어 있는지** 확인해주세요. 이 단계에서는 네임서버를 변경할 필요가 없습니다.

![프록시 설정 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066541215/original/_Kcx_bTIL4_t4G4MaH2E5Xs9l-aVkFwc6Q.jpeg?1773091385)

![활성화 계속 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066541214/original/Q9ZihH0a9DQzvpUhaTNM5iXoaLzaqD9bog.jpeg?1773091378)

#### **2단계:** 계정 ID 확인 후 공유

위의 모든 과정을 완료했다면, Cloudflare 계정의 계정 ID를 확인해서 저희에게 공유해주세요. 계정 ID는 URL에서 영숫자 값을 추출하면 됩니다.

예시: 이 경우 계정 ID는 0d2031c4bcda5980204101c44294740c입니다.

![계정 ID 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066541313/original/ZgkAPa5NXYZ1HWPeiNZJxUzhM5x2vgGVaw.jpeg?1773091646)

---

## 이전하기

위의 2단계가 모두 완료되면, 저희가 이전 프로세스를 시작합니다. 저희가 시작한 후 **24시간 이내**에 이전이 완료될 예정입니다. 그 다음 아래 단계에 따라 이전을 승인해주세요:

- 좌측 네비게이션 메뉴의 Domain Registration(도메인 등록) 아래 **Domains(도메인)**에서 Manage(관리)를 선택하고, 해당 도메인의 **Manage(관리)** 버튼을 클릭합니다.

![도메인 관리 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066541338/original/jh7NDLyHrVE1FxwbXaXJdZNp5h_aolVBwQ.jpeg?1773091752)

- 이전 요청을 승인합니다.

![이전 승인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066541348/original/IozVBYypZNlTQHRSFXUG-KnpFUBecHvCRg.png?1773091763)

- 승인 후 24시간 이내에 이전이 완료될 예정입니다. 이전이 성공하면 **Manage Domains(도메인 관리)**에서 해당 도메인의 상태가 Active(활성)로 변경됩니다. **Account Home(계정 홈)**에서 해당 도메인이 ['Invalid Nameserver(네임서버 오류)'](#네임서버-오류-상태) 상태로 표시되면, 몇 시간 기다린 후 다시 확인해주세요.

![이전 완료 상태](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066541351/original/s3tD_v2Uu3THwztcXS8ZW4GkxRBH84v-9g.jpeg?1773091778)

## **"네임서버 오류" 상태**

이전이 승인된 후, 도메인이 계정 홈 섹션에서 일시적으로 "Invalid Nameservers(네임서버 오류)"로 표시될 수 있습니다. 걱정하지 마세요. 이는 정상적인 현상입니다.

이 경고는 일반적으로 이전 후 24시간 이내에 자동으로 해결됩니다. 별도로 조치할 필요는 없습니다.

---
*원문 최종 수정: 2026년 3월 9일*
*Hyperclass 사용 가이드 — hyperclass.ai*