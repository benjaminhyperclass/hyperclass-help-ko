---

번역일: 2026-04-08
카테고리: 37-이커머스-스토어 > E-Commerce Store
---

# Printful 연동 사용법

이 가이드는 Hyperclass와 Printful 연동을 사용하는 방법을 설명합니다. 상품 주문 처리 자동화, 주문 동기화, 이커머스 운영을 CRM 안에서 직접 관리할 수 있게 해주는 기능입니다.

---

## Printful 연동 소개

Printful은 인기 있는 주문형 인쇄 및 주문 처리 서비스로, 재고 관리, 생산, 배송을 직접 처리하지 않고도 맞춤형 상품을 만들 수 있게 해줍니다. Printful을 이커머스 스토어와 연동하면 비즈니스 운영을 간소화하고 스토어의 상품 라인업을 확장할 수 있습니다. Printful 스토어에서 상품 생성, 삭제, 수정, 주문 처리와 관련된 모든 업데이트가 이커머스 스토어에 실시간으로 동기화됩니다.

### 이 연동이 중요한 이유

- Marketplace Architecture에서 개발된 첫 번째 연동입니다
- 서드파티 개발자들이 Marketplace Architecture를 활용해 연동을 개발하고 지원 연동 목록을 확장할 수 있게 해줍니다

## 온라인 스토어와 연동하는 방법

- 스토어 운영자는 App Marketplace에서 Printful 앱을 설치할 수 있습니다. 앱 설치 후 GHL 하위 계정을 Printful 스토어에 연결해야 합니다.
- 인증 성공 후 스토어 운영자는 Printful 상품을 GHL 상품으로 가져올 수 있습니다. GHL에 가져온 상품은 온라인 스토어에 발행하려면 수동으로 활성화해야 합니다.
- 스토어 운영자가 상품을 발행한 후 고객이 온라인 스토어에서 Printful 상품을 주문할 수 있습니다. Printful 상품 주문은 Printful 계정과 동기화됩니다.
- Printful에서 주문 처리가 완료되면 배송 상세 정보가 이메일로 발송됩니다.

## Printful 연동 기능

- **상품 가져오기**: 특정 Printful 스토어의 모든 상품을 선택한 LeadConnector 이커머스 스토어 로케이션으로 원활하게 가져올 수 있습니다.
- **상품 동기화**: Printful과 이커머스 스토어 간 상품을 동기화하여 생성, 수정, 삭제 업데이트가 실시간으로 반영되도록 합니다.
- **주문 생성**: 이커머스 스토어에서 주문이 발생하면 연결된 Printful 스토어에 자동으로 주문을 생성합니다.
- **주문 처리 동기화**: Printful의 배송 정보를 이커머스 스토어로 동기화하여 부분 및 완전 주문 처리를 포함한 주문 처리 상태를 최신으로 유지합니다.
- **주문 상태 기반 알림**: 주문이 부분적으로든 완전히든 처리되면 이메일로 알림을 받습니다. 배송 상세 정보는 Printful에서 제공됩니다.

## 주의사항

- 현재 버전에서는 상품을 가져올 때 Printful 스토어 제약으로 인해 상품 설명이 가져와지지 않습니다
- 일부 상품은 특정 지역에만 배송되므로 상품을 발행할 때 주의깊게 확인해야 합니다. 이 정보는 Printful 상품 카탈로그에서 확인할 수 있습니다
- 주문이 Printful과 동기화되려면 배송 주소가 정확해야 합니다. 잘못된 배송 정보가 있으면 주문이 생성되지 않거나 Printful에 동기화되지 않습니다

![Printful 연동 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027182173/original/4VWlbVhkng8XbtlHTfOH0gFz4URrKh2n-A.jpeg?1717616947)

![Printful 상품 관리](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027182170/original/pHAI3fkU-ex24K96jptzL3E6UA7rRT1tGA.jpeg?1717616947)

![Printful 주문 처리](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027182172/original/PC2ktrNKtAUPHDF2RN8fm7g40BOiijq74A.jpeg?1717616947)

![Printful 배송 관리](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027182171/original/dCWxz2JzXmcbOXWcaOuiAzMMBfGNnMI4IQ.jpeg?1717616947)

---
*원문 최종 수정: Tue, 6 May, 2025 at 3:32 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*