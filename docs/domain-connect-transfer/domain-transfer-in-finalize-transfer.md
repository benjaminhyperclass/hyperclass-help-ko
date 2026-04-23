---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000005317-domain-transfer-in-finalize-transfer
번역일: 2026-04-23
카테고리: domain-connect-transfer
---

# 도메인 이전 완료하기

**목차**

- [개요](#개요)
- [이 단계에서 일어나는 일](#이-단계에서-일어나는-일)
- [현재 도메인 등록업체에 로그인하기](#현재-도메인-등록업체에-로그인하기)
- [DNSSEC 및 Whois 개인정보보호 비활성화](#DNSSEC-및-Whois-개인정보보호-비활성화)
- [도메인 잠금 해제 및 인증 코드 받기](#도메인-잠금-해제-및-인증-코드-받기)
- [이전 처리 및 결제](#이전-처리-및-결제)
- [자주 묻는 질문](#자주-묻는-질문)

---

## 개요

이전 완료 단계는 현재 등록업체(GoDaddy, Namecheap, IONOS 등)에서 CRM으로 도메인을 이전하는 승인 과정을 완료하는 단계입니다. 이 단계를 통해 이전 후에도 도메인과 관련 서비스가 원활하게 작동할 수 있도록 보장합니다.

![도메인 이전 완료 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047256576/original/kU9bW8i6vKD3Rt8N8iHU1zkagbQS72dy8w.png?1748327059)

## 이 단계에서 일어나는 일

이전 완료 화면에서 다음 작업을 수행합니다:

- 현재 등록업체(도메인을 처음 등록한 곳)에 로그인
- DNSSEC 및 Whois 개인정보보호 비활성화
- 도메인 잠금 해제
- 인증 코드(EPP 코드) 요청 및 입력
- 이전 요청 제출 및 결제 완료

## 현재 도메인 등록업체에 로그인하기

도메인을 처음 구입한 등록업체에 로그인하세요.

## DNSSEC 및 Whois 개인정보보호 비활성화

도메인 이전을 시작하기 전에 현재 등록업체에서 DNSSEC를 비활성화하고 Whois 개인정보보호를 제거하는 것이 중요합니다.

### 일반 설정 방법:

- 현재 등록업체 계정에 로그인
- DNS 또는 도메인 설정으로 이동
- DNSSEC 옵션을 찾아 비활성화
- Whois 개인정보보호가 활성화되어 있다면 비활성화
- 변경사항 저장

### 1. GoDaddy

[DNSSEC 비활성화](https://www.godaddy.com/en-in/help/turn-dnssec-on-or-off-6420) | [Whois 개인정보보호 제거](https://www.godaddy.com/en-in/help/change-my-domain-privacy-level-32283)

참고: DNSSEC 레코드가 완전히 제거되는 데 몇 분이 걸릴 수 있습니다. 설정이 업데이트되면 GoDaddy에서 확인 메시지를 볼 수 있습니다.

### 2. NameCheap

[DNSSEC 비활성화](https://www.namecheap.com/support/knowledgebase/subcategory/2232/dnssec/) | [Whois 개인정보보호 제거](https://www.namecheap.com/support/knowledgebase/article.aspx/484/37/how-do-i-disable-domain-privacy-service-for-my-domain/)

### 3. IONOS

[DNSSEC 비활성화](https://www.ionos.com/help/domains/dns-pro/setting-up-and-managing-dnssec/#c165924) | [Whois 개인정보보호 제거](https://www.ionos.com/help/domains/domain-guard/disabling-domain-guard/#:~:text=In%20order%20to%20deactivate%20Domain,instructions%20contained%20in%20the%20email.)

## 도메인 잠금 해제 및 인증 코드 받기

도메인을 이전하기 전에 도메인 잠금을 해제하고, 현재 등록업체에서 인증 코드(EPP 또는 이전 코드라고도 함)를 받아야 합니다.

### 일반 설정 방법:

- 현재 등록업체 계정(예: GoDaddy, Namecheap, IONOS)에 로그인
- 도메인 관리 또는 도메인 설정 섹션으로 이동
- 도메인 잠금(Domain Lock) 또는 등록업체 잠금(Registrar Lock) 옵션 찾기
- 잠금을 비활성화하여 도메인 잠금 해제
- 잠금 해제 후, 인증 코드를 받는 옵션 찾기(EPP 코드, 이전 코드 또는 AuthInfo로 표시될 수 있음)
- 코드가 화면에 표시되거나 등록된 이메일로 전송됩니다

### 1. GoDaddy

GoDaddy에서 도메인을 이전하는 방법에 대한 자세한 내용은 [여기](https://www.godaddy.com/en-in/help/transfer-my-domain-away-from-godaddy-3560)에서 확인할 수 있습니다.

### 2. Namecheap

Namecheap에서 도메인을 이전하는 방법에 대한 자세한 내용은 [여기](https://www.namecheap.com/support/knowledgebase/article.aspx/258/84/what-should-i-do-to-transfer-a-domain-from-namecheap/)에서 확인할 수 있습니다.

참고: 인증 코드를 요청하기 전에 WhoisGuard가 비활성화되어 있는지 확인하세요.

### 3. IONOS

IONOS에서 도메인을 이전하는 방법에 대한 자세한 내용은 [여기](https://www.ionos.com/help/domains/transferring-your-domain-away-from-ionos-to-another-provider/transferring-a-domain-from-11-ionos-to-another-provider/)에서 확인할 수 있습니다.

## 이전 처리 및 결제

확인 및 이전 완료 버튼을 클릭하면 다음과 같이 진행됩니다:

- 도메인 잠금 해제 상태, 인증 코드 및 기타 레지스트리 수준 상태 확인
- 도메인이 이전에 유효하다면 지갑에서 수수료 차감
- 이전 요청 제출

## 자주 묻는 질문

1. **이전 완료 후 얼마나 걸리나요?**

제출 후, 이전은 일반적으로 등록업체에 따라 1-5일 이내에 완료됩니다. 수동으로 승인되는 경우 일부 도메인은 더 빠르게 완료될 수 있습니다.

2. **도메인 잠금 해제 옵션이 보이지 않습니다. 어떻게 해야 하나요?**

일부 등록업체는 이 설정을 "보안" 또는 "이전 설정" 하위에 숨겨둡니다. 보이지 않는다면 도움말 센터를 검색하거나 고객지원에 문의하세요.

3. **인증 코드가 틀렸다면 어떻게 하나요?**

오류 메시지가 표시됩니다. 등록업체에 다시 확인하고 도메인 잠금도 해제되었는지 확인하세요.

4. **도메인 이전 시 서비스 중단이 발생하나요?**

이전 전에 DNS 레코드를 정확히 검토하고 마이그레이션한다면 중단되지 않습니다. 항상 이중 확인하세요.

---
*원문 최종 수정: Mon, 30 Jun, 2025 at 4:52 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*