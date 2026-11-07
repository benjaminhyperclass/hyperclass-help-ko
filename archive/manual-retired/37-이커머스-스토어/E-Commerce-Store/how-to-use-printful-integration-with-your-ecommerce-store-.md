---

번역일: 2026-04-08
카테고리: 37-이커머스-스토어 > E-Commerce Store
---

# 이커머스 스토어에서 Printful 연동 사용 방법

### Printful 연동이란?

Printful은 주문형 인쇄 및 풀필먼트 서비스의 선두업체로, 기업이 재고 관리, 생산, 배송을 직접 처리할 필요 없이 맞춤 상품을 제공할 수 있게 해줍니다. Printful을 이커머스 스토어와 연동하면 운영을 효율화하고 상품 제공을 향상시킬 수 있습니다. 상품 생성, 삭제, 업데이트, 주문 처리와 관련된 Printful 스토어의 모든 업데이트가 이커머스 스토어에 실시간으로 동기화됩니다.

### Printful 연동에서 제공하는 기능들

- **상품 가져오기**: 특정 Printful 스토어의 모든 상품을 선택한 이커머스 스토어 로케이션으로 원활하게 가져올 수 있습니다.
- **상품 동기화**: Printful과 이커머스 스토어 간 상품을 동기화하여 생성, 수정, 삭제에 대한 업데이트가 실시간으로 반영됩니다.
- **주문 생성**: 이커머스 스토어에 주문이 들어올 때마다 연결된 Printful 스토어에 자동으로 주문이 생성됩니다.
- **주문 처리 동기화**: Printful에서 이커머스 스토어로 배송 정보를 동기화하여 부분 처리와 완전 처리를 포함한 주문 처리 상태를 최신으로 유지합니다.
- **주문 상태 기반 알림**: 주문이 부분 또는 완전히 처리되면 사용자가 이메일로 알림을 받습니다. 배송 세부 정보는 Printful에서 공유됩니다.

### 중요 사항

- **상품 발행**: 가져온 상품은 기본적으로 이커머스 스토어에 발행되지 않으므로 수동으로 활성화해야 합니다. 현재 버전에서는 상품 설명이 Printful에서 가져와지지 않습니다.
- **상품 보존**: 마켓플레이스 앱을 제거해도 상품은 LeadConnector 스토어 로케이션에서 삭제되지 않습니다.
- **다중 로케이션 지원**: 하나의 Printful 스토어를 여러 LeadConnector 스토어 로케이션에 연결할 수 있습니다.
- **배송 주소 제한**: 특정 상품은 Printful에서 정의한 특정 지역에만 배송할 수 있습니다. 이커머스 스토어의 주문 배송 주소를 Printful에서 지원하지 않으면 해당 주문은 Printful 계정에 생성되지 않습니다.
- **스토어 생성**: 인증 과정에서 "새 스토어 만들기" 옵션을 선택하면 "LeadConnector Store"라는 이름의 새 스토어가 생성됩니다.

### 이커머스 스토어에 Printful 연동 단계

1. **이커머스 스토어에 Printful 연결**: 하위 계정(Sub-Account) > 설정(Settings) > 연동(Integrations) > Printful > 앱 보기(View App) > 설치(Install)로 이동하거나 '앱 마켓플레이스'에서 Printful 애플리케이션을 직접 검색하세요.

![Printful 연동 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026487344/original/5Qhgo3lXYb6PghYQBy0Qw27cABL1gj97Uw.png?1716465850)

![Printful 앱 마켓플레이스](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026487455/original/93o3odnxRz3koyyuvd3o8mQAMwD9Bs1iSQ.jpeg?1716465929)

![Printful 앱 설치](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026487551/original/suJH_ppCdNxk6WQJg1Vi_N6zvnSKgxOvFA.png?1716466005)

2. **Printful에서 상품 가져오기**: 연결에 성공한 후 특정 Printful 스토어를 선택하고 상품을 선택한 Leadconnector 이커머스 스토어 로케이션으로 가져오세요. Printful에 스토어가 없으면 Leadconnector라는 이름으로 Printful에 새 스토어가 생성됩니다.

![Printful 스토어 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027045811/original/pfrmh9SMdUCLCfWVqsYjyTBQRZ5y_PrG9w.png?1717476295)

- Printful 스토어에서 Hyperclass 스토어로 상품을 선택하여 가져오세요. 스토어 소유자는 가져온 상품을 발행하기 위해 이커머스 스토어에서 수동으로 활성화해야 합니다. 필요하다면 연동 설정 중 "새 스토어 만들기" 옵션을 선택하여 "LeadConnector Store"라는 이름의 새 스토어를 자동으로 생성하세요.

![상품 선택 및 가져오기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027045834/original/XDOH5ApKcffMd6iB3NKmvhKWukFbOvsNgQ.png?1717476338)

3. **상품 발행**: Printful에서 상품을 가져온 후 몇 가지 업데이트가 필요합니다:

- 상품을 가져온 후 결제(Payments) 섹션의 상품 페이지로 가서 온라인 스토어에 수동으로 발행하세요.
- 상품 설명이 Printful에서 가져와지지 않으므로 상품 상세 페이지에서 상품 세부 정보와 설명을 직접 사용자 정의하세요.

![상품 발행 및 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029528048/original/lNxLqP_gGjgDcBLNDKKIvCxt4Bat1m6cDg.png?1721374749)

4. **주문 생성**: Hyperclass 이커머스 스토어에 주문이 들어오면 연결된 Printful 스토어에 해당 주문이 자동으로 동시에 생성됩니다.

![주문 자동 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027070874/original/9JGaTktq_3Oh0ICxxT8zM8JVB-g-nSUKqw.png?1717498582)

5. **주문의 부분 및 완전 처리**: Printful에서 이커머스 스토어로 배송 정보를 동기화하여 부분 처리와 완전 처리를 포함한 주문 처리 상태가 최신으로 업데이트됩니다.

![주문 처리 상태 동기화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027071118/original/2KPaIpg7ek14ypLM9NtQHBvviaO0gFBXRQ.png?1717498758)

### 주의사항

- 이번 버전에서는 상품을 가져올 때 Printful 스토어의 제한으로 인해 상품 설명이 가져와지지 않습니다.
- 일부 상품은 특정 지역에만 배송되므로 사용자는 상품 카탈로그에서 확인 후 신중하게 상품을 발행해야 합니다. 이 정보는 Printful의 상품 카탈로그에서 확인할 수 있습니다.
- 주문이 Printful과 동기화되려면 배송 주소가 정확해야 하며, 잘못된 배송 정보가 있으면 주문이 생성되거나 Printful에 동기화되지 않습니다.

이러한 단계를 따르고 주요 기능과 중요 사항을 이해하면 Printful을 이커머스 스토어와 효과적으로 연동하여 비즈니스 운영을 향상시키고 상품 제공을 쉽게 확장할 수 있습니다.

---
*원문 최종 수정: 2024년 7월 19일*
*Hyperclass 사용 가이드 — hyperclass.ai*