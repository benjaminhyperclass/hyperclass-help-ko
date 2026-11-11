---
원문: /support/solutions/articles/155000002184-partial-payment-collect-deposit-amount
번역일: 2026-11-07
카테고리: 04-캘린더-예약
---

# 부분 결제로 예약금 받기

예약할 때 총 금액 중 일부만 예약금으로 먼저 받고, 나머지는 나중에 받을 수 있어요. 이 문서에서는 **부분 결제**를 설정하는 방법과 남은 금액을 받는 방법을 안내해요.

## 부분 결제란?

부분 결제를 켜면 예약자는 예약금만 먼저 내고 예약을 확정할 수 있어요. 남은 금액은 나중에 정산해요. 전체 금액을 받는 기존 방식과 함께, 이제 예약금만 받는 방식도 쓸 수 있어요. 이 기능은 모든 캘린더 유형에서 쓸 수 있고, 자리를 확보하는 데 도움이 돼요. ▶ 영상 [9강 2부 9:15](https://www.youtube.com/watch?v=cwEP0OFhed0&t=555s)

예약 시점에 예약자에게 청구할 금액은 고정 금액이나 총 금액에 대한 백분율 중에서 정할 수 있어요.

---

## 부분 결제가 거래와 주문에 미치는 영향

![부분 결제 시 결제 내역 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023874265/original/c5hsV31Rg8FUfyqrVrCgQQNFYMGoDAKZHA.png?1712122099)

부분 결제를 켜면 **결제**에 항목이 두 개 생겨요.

- **거래**: 예약할 때 청구된 금액(예약금)이에요.

![거래 항목 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023874407/original/yKYCL_xx8aiCufzAFCIQifEpOMLWxqLDhQ.png?1712122324)

- **주문**: 예약자에게 아직 받지 못한 금액(**총 금액** - 예약금)이에요. 이 금액은 직접 수집해야 해요.

---

## 부분 결제 설정하기

1. **결제 게이트웨이 연동**: Stripe나 Authorize.net 같은 결제 게이트웨이를 연동했는지 확인하세요. (**결제 > 연동**)
2. 결제 허용 켜기: **캘린더 설정 > Forms & Payments**(폼 및 결제) 섹션에서 해당 캘린더의 **Accept Payments**(결제 허용) 토글을 켜세요.

   ![결제 허용 토글을 켠 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023873723/original/qh84sI5jK74C15QtJDvFjkxIVY73lfCypw.png?1712120969)

3. **총 금액**과 통화 입력: 서비스나 예약의 **총 금액**을 입력하고, 사용할 **Currency**(통화)를 선택하세요.

   ![총 금액과 통화 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023875315/original/jDPTb95KbCiV_Z1bNFkGFXoBJAWYnoDQQg.png?1712123868)

4. 부분 결제 옵션 켜기: **Accept Partial Payment**(부분 결제 허용) 체크박스를 선택하세요.

   ![부분 결제 허용 체크박스 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023875330/original/nUChXVtlfLyUPYLTHT-bcLVTmTXbbghDqg.png?1712123912)

5. 금액 유형 선택: **Flat Amount**(고정 금액)와 **백분율** 중 하나를 고르세요. 백분율은 **총 금액**을 기준으로 계산돼요.

   ![금액 유형 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023875412/original/EJ0SZ3ZGIUD92bWFq9JrXo90BjB_R_5vsA.png?1712123958)

6. 예약금 또는 백분율 입력: 서비스나 예약에 적용할 예약금(또는 예약금 비율)을 입력하세요. 백분율은 입력한 **총 금액**을 기준으로 계산돼요.

   ![예약금 또는 백분율 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023875759/original/h6KWVxtgbVYQ-g0CLA4_P_43_NxR-nuE_w.png?1712124477)

7. **설명 추가**: 필요하면 설명을 입력해 추가 안내를 남기세요.

   ![설명 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023874940/original/dkS82BeTBEBKpH74CNQ06h_tQXfNxLxUEQ.png?1712123347)

8. **설정 저장**을 클릭해 변경 내용을 적용하세요.

---

## 남은 금액 받기

남은 금액은 직접 수집해야 해요. 예약 보기 창을 열고 **결제** 탭으로 이동한 다음 **결제 수집**을 클릭하세요.

![예약 보기 창의 결제 탭에서 결제 수집 버튼을 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084958604/original/IyeaFc193ycEBGNpM7PSFO5E_WUbV7Q4WQ.png?1793804835)

---

## 주요 이점

예약금을 받으면 노쇼를 줄일 수 있어요. 예약 또는 서비스의 총 금액을 보여 주면서 예약금만 내도 되게 하면, 전액을 미리 내라고 요구하지 않고도 예약자의 경험을 높일 수 있어요.

---

## 자주 묻는 질문

### 어떤 캘린더 유형에서 부분 결제를 쓸 수 있나요?

모든 캘린더 유형에서 부분 결제를 켤 수 있어요. 지원하는 유형은 **Event**(이벤트), **Round Robin**(라운드 로빈), **Collective**(공동), **Class**(클래스), **Service Calendar**(서비스 캘린더), **Service Menu**(서비스 메뉴)예요.

### 받지 못한 금액은 어떻게 관리하나요?

예약 상세 정보를 볼 때 **결제** 탭에서 직접 관리할 수 있어요. 받지 못한 금액을 확인하고 예약자에게 수집하세요.

### 캘린더 결제에 쓸 수 있는 결제 게이트웨이는 무엇인가요?

현재 캘린더 결제에서 지원하는 결제 게이트웨이는 Stripe, NMI, Authorize.net이에요.
