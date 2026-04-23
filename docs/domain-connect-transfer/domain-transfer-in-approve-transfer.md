---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000005326-domain-transfer-in-approve-transfer
번역일: 2026-04-23
카테고리: 도메인 연결 및 이전
---

# 도메인 이전 승인하기

**목차**

- [개요](#개요)
- [승인이 필요한 이유](#승인이-필요한-이유)
- [현재 등록업체에서 이전 승인하는 방법](#현재-등록업체에서-이전-승인하는-방법)
  - [GoDaddy](#GoDaddy)
  - [Namecheap](#Namecheap)
  - [IONOS](#IONOS)
- [승인 후 진행 과정](#승인-후-진행-과정)
- [이전이 거부된 경우](#이전이-거부된-경우)
- [자주 묻는 질문](#자주-묻는-질문)

---

## 개요

도메인 이전 요청을 제출한 후, 마지막 단계는 현재 등록업체에서 이전을 승인하는 것입니다. 이 과정을 완료하지 않으면 이전은 대기 상태로 남아있으며 완료되지 않습니다.

![도메인 이전 승인 대기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047276271/original/2Igi5jRN5ZBOm9IiIIMnvpxhz8OFmt51Wg.png?1748340871)

## 승인이 필요한 이유

도메인 이전은 무단 변경을 방지하기 위해 현재 등록업체(GoDaddy, Namecheap, IONOS 등)의 명시적인 확인이 필요합니다. 이메일 또는 등록업체 대시보드를 통해 직접 이전을 승인해야 합니다.

아무런 조치를 취하지 않으면, 등록업체 정책에 따라 5-7일 후 자동으로 승인될 수도 있습니다.

## 현재 등록업체에서 이전 승인하는 방법

등록업체별 이전 승인 방법을 안내합니다:

### GoDaddy

[방법 1: 이메일 승인](https://www.godaddy.com/en-in/help/approve-a-transfer-away-from-godaddy-6040)

[방법 2: 대시보드 승인](https://www.godaddy.com/en-in/help/approve-a-transfer-away-from-godaddy-6040)

### Namecheap

[Namecheap에서 도메인 이전하기](https://www.godaddy.com/en-in/help/approve-a-transfer-away-from-godaddy-6040)

### IONOS

[IONOS 도메인 이전](https://www.ionos.com/help/domains/domain-transfers/)

- IONOS에 로그인합니다
- Domains & SSL로 이동합니다
- 이전할 도메인을 클릭합니다
- 대기 중인 이전 알림이나 이메일 지침을 확인합니다
- 안내에 따라 이전을 승인합니다

## 승인 후 진행 과정

이전을 승인하면:

- 도메인이 저희 등록업체 파트너(Cloudflare)로 이동됩니다
- 계정의 Internal Domains에서 해당 도메인을 확인할 수 있습니다
- 플랫폼 내에서 DNS, 갱신, 결제를 직접 관리할 수 있습니다
- Manage(관리) 버튼이 활성화되어 추가 작업을 수행할 수 있습니다

![이전 완료 후 도메인 관리 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047276270/original/KZf5k0wEon9mkrWn5K48Jc0Hav4P-2dQxA.png?1748340871)

## 이전이 거부된 경우

![도메인 이전 거부 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047276269/original/qhUbCxsm904JfGdLLyxQ4W2IV-p2kn0ZVQ.png?1748340871)

다음과 같은 경우 이전이 거부될 수 있습니다:

- 직접 취소한 경우
- 등록업체가 차단한 경우 (예: 60일 잠금)
- 제시간에 승인하지 않은 경우

이런 상황이 발생하면:

- 도메인 상태가 거부됨(Rejected)으로 표시됩니다
- Transfer to Us(저희로 이전) 버튼이 다시 나타나 재시도할 수 있습니다

## 자주 묻는 질문

**1. 나중에 도메인을 다른 등록업체로 다시 이전할 수 있나요?**

네, 가능합니다. 다만 ICANN 규칙에 따라 일반적으로 마지막 이전으로부터 60일을 기다려야 합니다.

**2. 도메인 이전 시 서비스 중단이 발생하나요?**

DNS 레코드를 이전 전에 정확히 검토하고 이전했다면 중단되지 않습니다. 항상 재검토하시기 바랍니다.

---

도메인 이전 과정에서 질문이 있거나 문제가 발생하면, 계정의 도움말 아이콘을 통해 지원팀에 언제든 문의하실 수 있습니다.

---
*원문 최종 수정: Wed, 11 Jun, 2025 at 5:59 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*