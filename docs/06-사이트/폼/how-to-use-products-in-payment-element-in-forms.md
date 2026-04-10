---

번역일: 2026-04-07
카테고리: 06-사이트 > 폼
---

# 폼의 결제 요소에서 상품 사용하는 방법

폼 경험을 향상시키는 새로운 기능인 '폼 내 상품(Products in Forms)'을 소개하게 되어 기쁩니다! 이 업데이트로 사용자들은 더 나은 커스터마이징과 레이아웃 옵션으로 폼에 상품을 매끄럽게 추가할 수 있습니다.

## 새로운 기능

- **결제 유형**: 이제 폼에서 상품을 판매하거나 커스텀 금액을 수집할 수 있는 옵션이 있습니다.
- 상품 선택, 설명과 이미지 포함, 레이아웃 선택 기능
- 사용자는 특정 상품에 사용 가능한 다양한 변형(variants)을 선택할 수 있습니다
- 상품 수량은 재고 관리에 따라 처리됩니다
- 상품 구매 시 세금 계산이 포함됩니다

## 사용 방법

- 연동(Integrations) 섹션에서 "결제(Payment)" 요소를 찾으세요.
- 결제 요소를 폼 캔버스에 드래그 앤 드롭하세요.
- 결제 게이트웨이를 연결하세요
- 라이브 모드와 테스트 모드 사이를 전환하세요.
- "상품 추가(Add Product)"를 클릭하여 사용 가능한 옵션에서 선택하세요.
- 설명, 이미지, 레이아웃을 포함한 상품 세부 정보를 커스터마이징하세요.
- 테마와 스타일링 옵션을 선택하여 외관을 커스터마이징할 수 있습니다.
- 변경 사항을 저장하고 폼을 미리보기하여 상품이 작동하는 것을 확인하세요.

## 주요 특징

**커스터마이징:**

- 최대 20개의 상품을 추가할 수 있습니다
- 3가지 다른 레이아웃 옵션이 제공됩니다
- 이러한 폼들은 퍼널에 쉽게 추가할 수 있으며, 무제한 커스터마이징이 가능한 원스텝 주문 폼으로 사용할 수 있습니다

**결제 추적:**

- 폼 제출 시, 결제 금액, 주문 ID, 결제 상태가 제출 세부 정보에 포함됩니다.
- 주문 ID를 클릭하면 주문 세부 정보를 볼 수 있습니다.
- 이러한 세부 정보는 내보내기 옵션을 통해 내보낼 수도 있습니다.

**이메일 알림:**

이메일 알림에도 결제 상태와 금액이 반영됩니다.

**워크플로우 트리거:**

"결제 수신" 트리거를 "폼(Forms)"을 소스로 하여 사용할 수 있습니다.

## 참고사항

- 현재 구독 상품은 지원되지 않습니다.
- NMI와 Authorize.net는 폼에 결제 요소가 있을 때 이름(First Name)을 필수 필드로 요구합니다.
- 현재 환불 금액은 캡처되지 않습니다
- 기존 API 기반 Stripe 연결 방식은 지원되지 않습니다.
- 커스텀 폼 결제 요소가 있는 캘린더에서는 결제 요소가 표시되지 않습니다.
- 퍼널에서 다중 네이티브 폼의 다중 결제는 아직 지원되지 않습니다
- 결제 요소에서는 아직 되돌리기/다시하기가 지원되지 않습니다

**예시:**

![폼 결제 요소 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026869151/original/1YbxlO57b5cbsyG1WzxTxVZSt-zmorR9xg.png?1717096320)

![상품 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026869150/original/rheoLcBvY4EL-OMPiNUBMmyh8pMOW97chg.png?1717096320)

![결제 요소 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026869152/original/s7fkipabypo9Fdh7PpkyJXWjPgGQAIYeAA.png?1717096320)

![상품 레이아웃 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026869155/original/9cxDFpaCsJ6886WW_KAGZYHr3CvD0JB85w.png?1717096320)

![완성된 폼 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026869154/original/WKYKKY1xzplKA_rBXYMtJBi0aPCEedpgsA.png?1717096320)

![폼 제출 결과](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026869153/original/uVvs3py6TyoEjtmSsknphqI3Aqd4CA7KIw.png?1717096320)

---
*원문 최종 수정: Thu, 30 May, 2024 at 2:21 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*