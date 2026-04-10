---

번역일: 2026-04-07
카테고리: 08-결제 > 결제-연동
---

# Square 결제: 3D Secure(3DS)로 더 원활하고 안전한 결제

Hyperclass가 이제 Square와 함께 3D Secure(3DS)를 지원합니다. 온라인 체크아웃에 카드 소지자 인증 단계를 추가하여 보안을 강화했어요. 구매자의 카드나 지역 규정에서 강력한 고객 인증(SCA)이 필요한 경우 자동으로 검증 단계가 작동하여, 사기를 방지하면서도 더 많은 결제를 성공시킬 수 있습니다. ([squareup.com](https://squareup.com/help/us/en/article/7623-risk-manager-3d-secure-3ds))

---

**목차**

- [Square용 3D Secure(3DS)란?](#square용-3d-secure3ds란)란?)
- [Square용 3D Secure(3DS)의 주요 장점](#square용-3d-secure3ds의-주요-장점)의-주요-장점)
- [3DS 체크아웃 흐름 개요](#3ds-체크아웃-흐름-개요)
- [전제조건 및 지원 흐름](#전제조건-및-지원-흐름)
- [3DS 오류 처리 및 문제해결](#3ds-오류-처리-및-문제해결)
- [어떻게 작동하나요?](#어떻게-작동하나요)[Square에서의 3DS 흐름](#square에서의-3ds-흐름)
- [NMI에서의 3DS 흐름](#nmi에서의-3ds-흐름)
- [NMI에서 Public key 추가하기](#nmi에서-public-key-추가하기)
- [자주 묻는 질문](#자주-묻는-질문)
---

## **Square용 3D Secure(3DS)란?**

3D Secure(3DS)는 거래가 승인되기 전에 구매자의 신원을 확인하도록 요구하는 업계 표준 프로토콜입니다(예: 일회용 SMS 코드, Face ID, 또는 발급 은행으로의 리다이렉트). 3DS를 활성화하면 인증이 성공한 후 책임이 카드 발급사로 전가되기 때문에 사기 관련 지불거절을 크게 줄일 수 있어요. Square는 내장된 Risk Manager의 일부로 3DS를 제공하며, Hyperclass는 이제 필요한 데이터를 전달하여 Square가 필요할 때마다 추가 검증 단계를 실행할 수 있습니다.

---

## **Square용 3D Secure(3DS)의 주요 장점**

새로운 Square 3DS 연동은 즉각적인 이점을 제공합니다:

- 3DS가 필수인 카드에서 결제 실패가 줄어들어 전환율이 향상됩니다.

- 인증 성공 후 사기 방지 및 지불거절 책임 전가가 제공됩니다.

- 영국과 EU 등 지역에서 추가 코딩 없이 자동 SCA 규정 준수가 됩니다.

- 체크아웃 내 팝업으로 마찰을 최소화하여 고객이 Hyperclass 퍼널 안에서 더 원활한 경험을 할 수 있습니다.

---

## 3DS 체크아웃 흐름 개요

Square 계정이 Hyperclass에 연결되면 3DS가 완전히 자동으로 작동합니다.

- 구매자가 주문 폼(Order Form), 결제 요소(Payment Element), 인보이스(Invoice), 또는 스토어 체크아웃에서 필수 청구 주소 및 연락처 필드를 입력합니다.

- Hyperclass가 거래 요청을 Square로 전송하면, Square 위험 규칙이 카드, 금액, 위치 및 기타 요소를 기반으로 3DS가 필요한지 결정합니다.

- 3DS가 트리거되면 구매자가 인증을 완료할 수 있도록 보안 팝업/모달이 나타납니다.

- 검증 성공 시 결제가 캡처되고 Hyperclass 주문/인보이스 상태가 "결제됨"으로 업데이트됩니다.

- 검증 실패 또는 시간 초과 시 결제가 거절되고, Hyperclass가 오류를 표시하여 구매자가 다른 카드로 시도할 수 있습니다.

---

## **전제조건 및 지원 흐름**

Square용 3DS는 Hyperclass에서 Square 카드 결제를 이미 받을 수 있는 모든 곳에서 사용 가능합니다: 주문 폼, 결제 링크, 이커머스 스토어, 인보이스 등.

전제조건:

- 하위 계정(Sub-Account) → 결제(Payments) → 연동(Integrations)에서 연결된 Square 계정

- Square 위치가 라이브 모드로 설정됨

- Square가 구매자를 검증할 수 있도록 체크아웃 폼에서 청구 주소 + 이메일/전화 필드가 표시됨(가급적 필수로 설정)

- 구매자가 3DS를 지원하는 카드와 발급 은행을 사용함

---

## **3DS 오류 처리 및 문제해결**

일반적인 시나리오를 이해하면 고객을 더 잘 지원할 수 있습니다:

- **"인증 실패"** — 구매자가 잘못된 SMS 코드를 입력했거나 Face ID를 거절했습니다. 다시 시도하거나 다른 카드를 사용하도록 안내하세요.

- **"발급사 거절"** — 카드 발급 은행이 3DS 전후에 거래를 차단했습니다. 은행에 문의하도록 안내하세요.

- **"3DS 미완료"** — 구매자가 팝업을 닫았습니다. 단계를 완료하도록 격려하세요.

Hyperclass는 항상 결제(Payments) → 거래(Transactions)에서 게이트웨이 응답을 기록하여 쉽게 참조할 수 있습니다.

---

## **어떻게 작동하나요?**

- **Square**: 설정이 필요 없습니다 - 고객이 체크아웃 중에 주소와 연락처 필드를 추가하면 바로 작동합니다.

- **NMI**: 3DS 활성화를 위한 일회성 설정이 필요합니다:

- NMI 계정에서 Payer Authentication 2.0에 등록하세요.

- 서비스 상태가 활성(Active)인지 확인하세요.

- NMI 판매자 포털에서 3DS용 Checkout Public Key를 생성하고 Hyperclass 연동에 추가하세요.

설정 완료 후 카드에서 3DS가 필요할 때마다 고객이 자동으로 인증 및 결제 완료를 위한 팝업을 보게 됩니다. [도움말 문서]([how-to-set-up-the-nmi-integration-](how-to-set-up-the-nmi-integration-.md))를 참조하세요.

### **Square에서의 3DS 흐름**

![Square에서의 3DS 흐름](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055734493/original/LGFC9Zao8SCoOuRY9PTj9t4FUr5LTP0nBw.png?1760108727)

### **NMI에서의 3DS 흐름**

![NMI에서의 3DS 흐름](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055734693/original/dVnEpwdSrrFB7sPsTtqaNc4Uo7j1BGB_zg.png?1760108824)

### **NMI에서 Public key 추가하기**

![NMI에서 Public key 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055734649/original/fZqOcq4KN3rowN8LG9vZbWFJIivy8c1hlw.png?1760108801)

---

## **자주 묻는 질문**

**Q: Square 대시보드에서 무언가를 활성화해야 하나요?**

아니요. Square의 기본 Risk Manager 규칙이 이미 고위험 거래나 SCA 의무 거래에 3DS를 적용합니다.

**Q: 저장된 "Card on File" 결제에서도 3DS가 작동하나요?**

Square 3DS는 실시간 카드 소지자 시작 결제에만 적용됩니다. Card-on-file 직불은 면제됩니다.

**Q: 3DS 사용에 추가 수수료가 있나요?**

Square는 추가 3DS 수수료를 부과하지 않으며, 표준 Square 처리 요금이 적용됩니다.

**Q: 모든 거래에서 3DS가 나타나나요?**

아니요. 카드 발급사와 Square의 위험 엔진이 언제 3DS를 트리거할지 결정합니다. 많은 저위험 결제는 챌린지 없이 바로 통과됩니다.

**Q: 3DS를 비활성화할 수 있나요?**

Hyperclass 내에서는 3DS를 비활성화할 수 없으며, Square가 규칙을 관리합니다. Square 대시보드에서 위험 규칙을 조정할 수는 있지만 SCA 지역에서는 권장되지 않습니다.

**Q: 3DS가 체크아웃을 느리게 하나요?**

추가 단계는 몇 초만 더 걸리며 페이지 내에 임베드되어 마찰을 최소화합니다.

**Q: POS나 모바일 결제에서 3DS가 지원되나요?**

아니요. 3DS는 온라인(카드 부재) 플로우에서만 사용됩니다. 대면 Square POS 거래는 대신 칩이나 탭을 사용하여 보안을 제공합니다.

**Q: 반복되는 3DS 실패는 어떻게 문제해결하나요?**

청구 주소가 카드 발급사 기록과 일치하는지 확인하고, 구매자의 기기에서 팝업을 허용하는지 확인한 후, 문제가 지속되면 다른 카드로 다시 시도하도록 안내하세요.

---
*원문 최종 수정: Tue, 14 Oct, 2025 at 10:57 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*