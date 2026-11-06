---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002184-partial-payment-collect-deposit-amount
번역일: 2026-11-06
카테고리: 04-캘린더-예약
---

# 부분 결제로 예약금 받기

**부분 결제**를 켜면 예약자가 예약할 때 예약금만 먼저 내고, 나머지 금액은 나중에 낼 수 있어요. 이 문서에서는 설정 방법과 남은 금액을 받는 방법을 안내해요.

[동영상](https://www.youtube.com/embed/1VEdxywhT1U?&wmode=opaque)

## 부분 결제란?

부분 결제는 예약자가 예약금을 먼저 내서 예약을 확정하고, 남은 금액은 나중에 내는 방식이에요. 전액 결제와 함께 예약금 결제도 선택해서 받을 수 있어요. 이 기능은 모든 캘린더 유형에서 쓸 수 있고, 자리를 미리 확보하는 데 도움이 돼요.

예약 시점에 예약자에게 청구할 금액은 고정 금액이나 **총 금액**의 비율(**백분율**) 중에서 골라서 정해요.

## 부분 결제가 거래와 주문에 미치는 영향

![부분 결제 사용 시 결제 내역 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023874265/original/c5hsV31Rg8FUfyqrVrCgQQNFYMGoDAKZHA.png?1712122099)

부분 결제를 켜면 결제 메뉴에 내역이 두 개 생겨요.

- **거래**: 예약할 때 실제로 결제된 금액(예약금)이에요.

![거래 내역 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023874407/original/yKYCL_xx8aiCufzAFCIQifEpOMLWxqLDhQ.png?1712122324)

- **주문**: 예약자에게 아직 받지 못한 금액(**총 금액** − 예약금)이에요. 이 금액은 직접 수집해야 해요.

## 부분 결제 설정하기

1. **결제 게이트웨이 연동**: Stripe나 Authorize.net 같은 **결제 게이트웨이**가 연동되어 있는지 확인하세요. 연동은 **결제 > 연동**에서 할 수 있어요.
2. 결제 켜기: 해당 캘린더의 **캘린더 설정**에서 폼 및 결제 섹션으로 이동해, 결제를 받는 토글을 켜세요.

   ![캘린더 설정에서 결제 토글을 켜는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023873723/original/qh84sI5jK74C15QtJDvFjkxIVY73lfCypw.png?1712120969)

3. **총 금액**과 통화 입력: 서비스나 예약의 **총 금액**을 입력하고 통화를 선택하세요.

   ![총 금액과 통화를 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023875315/original/jDPTb95KbCiV_Z1bNFkGFXoBJAWYnoDQQg.png?1712123868)

4. **부분 결제** 켜기: 부분 결제를 허용하는 체크박스를 선택하세요.

   ![부분 결제 체크박스를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023875330/original/nUChXVtlfLyUPYLTHT-bcLVTmTXbbghDqg.png?1712123912)

5. 금액 유형 선택: 고정 금액과 **백분율** 중에서 하나를 고르세요. **백분율**은 **총 금액**을 기준으로 계산돼요.

   ![금액 유형을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023875412/original/EJ0SZ3ZGIUD92bWFq9JrXo90BjB_R_5vsA.png?1712123958)

6. 예약금 또는 비율 입력: 서비스나 예약에 적용할 예약금(또는 예약금 비율)을 입력하세요. 비율은 앞에서 입력한 **총 금액**을 기준으로 계산돼요.

   ![예약금 또는 비율을 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023875759/original/h6KWVxtgbVYQ-g0CLA4_P_43_NxR-nuE_w.png?1712124477)

7. **설명 추가**: 필요하면 **설명**을 입력해 결제에 대한 안내를 덧붙이세요.

   ![설명을 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023874940/original/dkS82BeTBEBKpH74CNQ06h_tQXfNxLxUEQ.png?1712123347)

8. **설정 저장**을 클릭해 변경 내용을 적용하세요.

## 남은 금액 받기

남은 금액은 자동으로 청구되지 않아요. 예약별로 직접 수집해야 해요.

1. 해당 예약의 상세 창을 여세요.
2. **결제** 탭으로 이동하세요.
3. **결제 수집**을 클릭하세요.

![예약 상세 창의 결제 탭에서 결제 수집을 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084958604/original/IyeaFc193ycEBGNpM7PSFO5E_WUbV7Q4WQ.png?1793804835)

## 이런 점이 좋아요

예약금을 받으면 예약 후 나타나지 않는 노쇼를 줄일 수 있어요. 예약자에게 서비스의 전체 금액을 보여 주면서도 예약금만 먼저 내게 할 수 있어서, 처음부터 전액 결제를 강요하지 않고 예약 경험을 높일 수 있어요.

## FAQ

### 부분 결제는 어떤 캘린더 유형에서 쓸 수 있나요?
모든 캘린더 유형에서 켤 수 있어요. 이벤트(Event), 라운드 로빈(Round Robin), 컬렉티브(Collective), 클래스(Class), 서비스 캘린더(Service Calendar), 서비스 메뉴(Service Menu)가 모두 해당돼요.

### 남은 결제 금액은 어떻게 관리하나요?
예약 상세 창을 열고 **결제** 탭에서 직접 관리해요. 받아야 할 남은 금액을 확인한 뒤 예약자에게 **결제 수집**으로 청구하면 돼요.

### 캘린더 결제에는 어떤 결제 게이트웨이를 쓸 수 있나요?
현재는 Stripe, NMI, Authorize.net을 쓸 수 있어요.
