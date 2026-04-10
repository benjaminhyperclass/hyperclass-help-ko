---

번역일: 2026-04-07
카테고리: 08-결제 > 시작하기
---

# 고객 카드 정보 추가 및 관리하는 방법

## 개요

고객의 결제 수단을 효율적으로 관리하는 것은 거래를 간소화하고 원활한 고객 경험을 보장하는 데 필수적입니다. 이 문서에서는 결제 관리를 단순화하도록 설계된 두 가지 핵심 기능에 대해 설명합니다: 카드 정보 추가 및 카드 정보 관리. 이러한 기능을 통해 비즈니스는 고객의 결제 정보를 안전하게 가져오고(결제 제공업체에서 카드의 마지막 3-4자리 숫자와 만료일만 가져와서 UI에 표시), 확인하고, 관리할 수 있습니다.

## 찾는 위치

`Contacts(연락처) > Contact Details(연락처 상세) > '$' 아이콘(결제를 나타냄) > Actions(액션)`

![카드 관리 위치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040240689/original/WVYWWuJI7Jv4y8Qyp5t3RmJK6pqb9iWUGQ.png?1737533686)

## 카드 정보를 추가하는 방법

- `Actions(액션)` 하단의 'Add Card on File(카드 정보 추가)' 버튼을 클릭하세요
- 카드 번호, 만료일, CVV 및 국가를 입력하세요
- 정보를 확인하고 'Add Card(카드 추가)' 버튼을 클릭하세요
- 실제 결제 모드와 테스트 모드 카드 모두에 대해 수행할 수 있습니다

![카드 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040240066/original/kbLwbfrThQJCpo5GuFfFmlQ5uoYjVGtOdQ.png?1737533266)

## 저장된 카드 정보를 확인하는 방법

- `Actions(액션)` 하단의 'Manage Cards(카드 관리)' 버튼을 클릭하세요
- 각 결제 제공업체에서 모든 카드를 가져와서 마지막 3-4자리 숫자와 만료일이 목록으로 표시됩니다. 참고 - 규정 준수에 따라 카드는 저장되지 않으며 저장할 수 없으므로, 사용자가 고객의 이 모달에 접속할 때마다 결제 제공업체에서 카드 세부 정보를 항상 새로 가져옵니다
- 각 카드 항목에는 마지막 네 자리, 만료일 및 관련 라벨이 포함됩니다
- 테스트 모드와 실제 모드 카드 모두 해당 목록에서 볼 수 있습니다

![카드 관리 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040240509/original/tdYVqXUe5dNHLmw6dNjJPSCWu6Y3wLMGag.png?1737533562)

## 저장된 카드 정보를 삭제하는 방법

- 제거하려는 카드를 찾으세요
- 해당 카드 옆의 **Delete(삭제)** 버튼을 클릭하세요
- 팝업 프롬프트에서 삭제를 확인하세요
- 테스트 모드와 실제 모드 카드 모두 각각의 목록에서 삭제할 수 있습니다
- 카드가 GHL 내의 활성 구독에 연결되어 있는 경우, 삭제를 확인하기 전에 프롬프트에서 이를 알려줍니다. 프롬프트가 나타나더라도 카드를 삭제하면, 해당 카드와 연결된 구독은 자동 결제를 위한 결제 수단이 없게 됩니다.

![카드 삭제 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040240629/original/Js8bL097vaMfi0SU0nuyBPZRBZqDvEHEXw.png?1737533646)

![구독 연결 경고](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040240539/original/44boYjs8sReSoKdtVfWatQbZjfOq__--9w.png?1737533586)

**참고:** 규정 준수에 따라 당사는 카드 데이터를 저장하지 않습니다. 비즈니스가 고객의 이 모달에 접속할 때마다 카드 세부 정보(마지막 3-4자리 숫자와 만료일, 그리고 Visa/MasterCard 등의 제공업체 정보)를 안전하게 가져옵니다. 이는 결제 제공업체에서 직접 가져오며, 삭제 작업도 결제 제공업체의 도움을 받아 실행됩니다.

---
*원문 최종 수정: Fri, 22 Aug, 2025 at 10:27 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*