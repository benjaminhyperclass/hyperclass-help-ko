---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006505-unified-payment-options-across-all-saas-locations
번역일: 2026-11-07
카테고리: 11-설정
---

# 모든 SaaS 서브 계정에서 통일된 결제 옵션

모든 SaaS 서브 계정에서 저장된 카드, 지갑 크레딧, 에이전시 카드(에이전시 전용)로 결제할 수 있어요. 서브 계정이 여러 개든 하나든 같은 방식으로 결제할 수 있고, SaaS 버전별로 달랐던 결제 방식도 하나로 맞춰졌어요.

## 통합 결제 옵션 개요

통합 결제 옵션은 SaaS V1과 V2의 결제 방식을 하나로 맞춘 기능이에요. 에이전시 사용자와 서브 계정 사용자 모두 역할에 맞는 같은 결제 화면을 보게 되고, 모든 SaaS 서브 계정에서 지갑과 카드로 결제할 수 있어요.

- 에이전시 사용자는 **Pay using Card**(카드로 결제), **Pay using Wallet**(지갑으로 결제), **Pay using Agency Card**(에이전시 카드로 결제)를 쓸 수 있어요.
- 서브 계정 사용자는 **Pay using Card**와 **Pay using Wallet**을 쓸 수 있어요.

---

## 통합 결제 옵션의 장점

- 같은 결제 경험: SaaS V1과 V2에서 결제 과정이 똑같아요.
- 역할별 옵션 표시: 에이전시 사용자와 서브 계정 사용자에게는 각자에게 해당하는 옵션만 보여요.
- 지갑 사용 가능: 모든 SaaS 서브 계정에서 지갑 결제를 쓸 수 있어요.
- 불일치 해소: V1과 V2 사이에 있던 결제 방법의 차이가 없어져서 더 매끄럽게 결제할 수 있어요.

---

## 결제 방법 한눈에 보기

결제 옵션별로 어떻게 결제되는지 살펴보세요.

- **Pay using Card**: **설정 > 청구/결제**에 저장된 기본 카드로 결제해요.

  ![카드로 결제 옵션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055112920/original/MMz10K1ZOmP3-A8K0ZdNWibqhqY2ysaMIg.png?1759419023)
- **Pay using Wallet**: 미리 충전해 둔 크레딧에서 차감해요. 잔액이 설정한 기준 아래로 떨어지면 자동으로 충전돼요.

  ![지갑으로 결제 옵션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055112752/original/Qpx6xGfBnKO6oJO6fz_dS17jflc5Lv5rKA.png?1759418952)
- **Pay using Agency Card**: 에이전시 수준의 사용자에게만 보여요. 하이퍼클래스가 에이전시에 등록된 카드로 결제를 청구해요.

  ![에이전시 카드로 결제 옵션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055112522/original/UApYkfkhh8A0knSXK_-pMGNHu-tTt886jw.png?1759418916)

---

## 자주 묻는 질문

### 고객이 실수로 에이전시 카드를 쓸 수도 있나요?

아니요. 서브 계정 사용자에게는 **Pay using Agency Card** 버튼이 보이지 않아요. 자신의 지갑과 카드 옵션만 보여요.

### 지갑의 자동 충전 기준 금액은 어떻게 바꾸나요?

**설정 > 청구/결제 > Wallets & Transactions**(지갑 및 거래 내역) **> Auto-Recharge**(자동 충전)로 이동하세요.

### 에이전시 카드로 결제된 내역이 고객에게도 보이나요?

아니요. 에이전시 카드로 처리된 결제는 서브 계정 인보이스에 표시되지 않아요.

### 새 결제 화면을 보려면 따로 이전 작업을 해야 하나요?

아니요. SaaS V1과 V2의 결제 방식이 자동으로 맞춰져 있어서 따로 할 일은 없어요.
