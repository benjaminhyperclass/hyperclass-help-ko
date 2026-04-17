---

번역일: 2026-04-07
카테고리: 06-사이트 > 폼
---

# 폼 결제 기능 (기부 포함)

### 커뮤니티 추가 튜토리얼

[https://youtu.be/x0YVga4F6fA](https://youtu.be/x0YVga4F6fA)

[https://youtu.be/K-4H3AILlUU](https://youtu.be/K-4H3AILlUU)

[https://youtu.be/QZ0WXKpTHIM](https://youtu.be/QZ0WXKpTHIM)

[https://youtu.be/GK3sFbmTnTk](https://youtu.be/GK3sFbmTnTk)

---
폼(Forms)의 결제 요소를 사용하면 기부금 수집과 사용자 정의 금액 수집이 가능합니다. 이제 폼 빌더의 "요소 추가"에서 "연동(Integrations)" 섹션에서 찾을 수 있으며, 결제 기능을 폼에 바로 통합하여 사용자 경험을 한 단계 높일 수 있습니다.

목차

- [개요](#개요)
- [사용 가능한 결제 유형](#사용-가능한-결제-유형)
- [기부 금액 옵션](#기부-금액-옵션)
  - [추천 금액 커스터마이징](#추천-금액-커스터마이징)
- [사용자 정의 금액](#사용자-정의-금액)
- [정기 기부](#정기-기부)
- [수동 결제 작동 방식](#수동-결제-작동-방식)
  - [1. 수동 결제 활성화](#1-수동-결제-활성화)
- [2. 폼 및 설문에 자동 표시](#2-폼-및-설문에-자동-표시)
- [3. 주문 처리 및 결제 수집](#3-주문-처리-및-결제-수집)
- [결제 추적](#결제-추적)
- [이메일 알림](#이메일-알림)
- [장점 및 사용 사례](#장점-및-사용-사례)
- [중요 참고사항](#중요-참고사항)

## 개요

폼의 결제 기능을 통해 다음을 수행할 수 있습니다:

- 기부금 수집 (추천 금액 또는 커스텀 금액)
- 구독과 같은 정기 후원 활성화
- 현금 또는 계좌이체 같은 수동 결제 방식으로 상품 판매
- 통합 결제 대시보드를 통해 모든 결제를 추적하고 관리

## 사용 가능한 결제 유형

설정에 따라 여러 방식으로 결제를 받을 수 있습니다:

- 온라인 결제 (Stripe, Authorize.net, NMI 등 연결된 게이트웨이를 통해)
- 수동 결제 (오프라인 방식)
  - 착불(COD): 고객이 배송 시 현금으로 결제
- 커스텀 결제 방식: 계좌이체, 수표 또는 기타 오프라인 방식 포함

## 기부 금액 옵션

### 추천 금액 커스터마이징

![금액 추천 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054677894/original/GQGfEt3FAM5Jfu67kOrXPw8K481ktGXAIA.png?1758889763)

![금액 추천 미리보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054677937/original/gFkQx0ghwhhvfWpNp501zRIAzkx8r9d3NQ.png?1758889784)

기부자가 선호하는 통화로 추천 금액에서 선택할 수 있도록 합니다:

- 최대 15개의 추천 금액 추가
- 드롭다운에서 통화 선택
- 유연성을 위해 "기타 금액" 옵션 활성화
- 사용자가 금액을 선택할 때 표시되는 라벨/태그 커스터마이징
- 추천 금액 스타일링이 자동으로 폼 테마와 일치

### 사용자 정의 금액

![사용자 정의 금액](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054678026/original/KpGiXmdYu-VowtFrzXp-o2QdWrsqFikUSg.png?1758889818)

추천 금액을 사용하지 않는 경우, 사용자 정의 금액 옵션이 자동으로 활성화됩니다:

- 기부자가 직접 금액을 입력할 수 있음
- 입력해야 할 내용을 안내하는 플레이스홀더 추가 가능

### 정기 기부

정기 기부 기능을 통해 고객이 반복되는 일정으로 기부를 구독할 수 있습니다.

작동 방식:

- 폼에 커스텀 금액 요소 추가
- 정기 결제 토글 활성화
- 사용 가능한 청구 주기 선택 (주간, 월간, 연간)

![정기 기부 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055401316/original/sBHoS3LWRPa6V7_hJelpl4BvKMR4VHHkpQ.png?1759832782)

고객 경험:

- 기부자가 금액과 청구 주기를 선택
- 한 번 구독하면 결제가 자동으로 반복됨

중요한 이유:

- 기부자 여정을 단순화
- 반복 후원을 장려
- 총 결제 볼륨(TPV) 증대에 도움

## 수동 결제 작동 방식

수동 결제 방식을 사용하면 폼과 설문을 통해 상품을 판매하면서 오프라인으로 결제를 수집할 수 있습니다. 수동 결제에 대한 자세한 문서는 [여기](../../08-결제/기타/manual-payment-support-for-forms-surveys.md)에서 확인하세요.

### 1. 수동 결제 활성화

- Payments(결제) > Integrations(연동) > Manual Payment Methods(수동 결제 방식)로 이동
- Cash on Delivery(착불) 또는 Custom Payment Methods(커스텀 결제 방식) 활성화
- 설명 및 구매 후 메시지 구성
- 폼 및 설문에 대해 특별히 수동 결제 옵션이 활성화되었는지 확인

### 2. 폼 및 설문에 자동 표시

- 상품이 폼이나 설문에 추가되면, 결제 선택 화면에 수동 결제 옵션이 자동으로 나타남

### 3. 주문 처리 및 결제 수집

- 수동 결제가 선택된 폼이 제출되면, 주문이 Payments(결제) > Orders(주문)에 대기 중 상태로 표시됨
- 비즈니스에서 주문을 결제 완료로 표시하고 결제 방식(현금, 카드, 수표, 계좌이체 등)을 선택할 수 있음
- 업데이트된 결제 상태가 폼 제출 섹션과 자동으로 동기화됨

## 결제 추적

![결제 추적](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054678185/original/ni3D60ydN4iUo9IzTDHuKO_HJddZNjsy9g.png?1758889842)

모든 결제를 한 곳에서 모니터링할 수 있습니다:

- 폼 제출 데이터에서 직접 결제 세부사항 확인
- Payments(결제) > Transactions(거래)에서 전체 거래 기록에 접근
- 필요에 따라 결제 세부사항 내보내기
- 실시간 상태 확인 (성공, 대기 중)

## 이메일 알림

![이메일 알림](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054678238/original/J_rv8qm_8NdEKULMVo_cHDhUQxsTYn4HGQ.jpeg?1758889881)

결제 기능이 활성화된 폼에 대해 자동응답기와 이메일 알림을 활성화하세요:

- 알림에 결제 금액과 상태가 포함됨
- 당신과 고객 모두에게 즉시 정보를 제공

## 장점 및 사용 사례

- 더 큰 유연성: 온라인과 오프라인 결제 모두 수용
- 정기 지원: 자동 정기 청구로 지속적인 후원 장려
- 원활한 주문 추적: 폼, 주문, 결제를 위한 통합 대시보드
- 자동 동기화: 결제 상태 업데이트가 주문과 제출 모두에 반영
- 현금 기반 비즈니스에 이상적: 착불이나 오프라인 방식에 의존하는 비즈니스에 완벽

## 중요 참고사항

- NMI와 Authorize.net은 이름(First Name)을 필수 필드로 요구합니다
- 현재 환불은 지원되지 않습니다
- 기존 API 기반 Stripe Connect 방식은 더 이상 지원되지 않습니다
- 커스텀 폼 결제가 있는 캘린더에서는 결제 요소가 표시되지 않습니다
- 퍼널 내 여러 폼에 걸친 다중 결제는 아직 지원되지 않습니다
- 결제 요소에서는 실행 취소/다시 실행을 사용할 수 없습니다

✅ 폼에서 결제를 활성화하면 고객에게 더 많은 옵션을 제공하고, 주문 관리를 간소화하며, 더 원활한 결제 경험을 만들 수 있습니다.

---
*원문 최종 수정: 2025-10-07*
*Hyperclass 사용 가이드 — hyperclass.ai*