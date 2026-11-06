---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002184-partial-payment-collect-deposit-amount
번역일: 2026-11-06
카테고리: 04-캘린더-예약
---

# 부분 결제로 예약금 받기

예약자가 예약금만 먼저 내고 나머지 금액은 나중에 내도록 설정하는 기능이에요. 모든 캘린더 유형에서 쓸 수 있어요.

[동영상](https://www.youtube.com/embed/1VEdxywhT1U?&wmode=opaque)

## 부분 결제란?

부분 결제를 쓰면 예약자가 예약금을 먼저 내고 예약을 확정할 수 있어요. 남은 금액은 나중에 결제해요. 이제 전체 금액뿐 아니라 예약금만 받는 것도 가능해요. 이 기능은 모든 캘린더 유형에서 쓸 수 있고, 자리를 확보하는 데 도움이 돼요.

예약 시점에 예약자에게 청구할 금액은 고정 금액이나 총 금액에 대한 비율 중에서 고를 수 있어요.

---

## 부분 결제가 거래와 주문에 미치는 영향

![부분 결제를 켰을 때 결제 목록에 표시되는 항목](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023874265/original/c5hsV31Rg8FUfyqrVrCgQQNFYMGoDAKZHA.png?1712122099)

부분 결제를 켜면 결제 내역에 항목이 두 개 생겨요.

- **거래**: 예약할 때 결제된 금액(예약금)이에요.

![거래 항목 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023874407/original/yKYCL_xx8aiCufzAFCIQifEpOMLWxqLDhQ.png?1712122324)

- **주문**: 예약자에게 아직 받지 못한 금액(**총 금액** - 예약금)이에요. 이 남은 금액은 직접 수집해야 해요.

---

## 부분 결제 설정하기

1. 결제 게이트웨이를 연동했는지 확인하세요. Stripe나 Authorize.net 같은 결제 게이트웨이를 연동해야 해요. **결제 > 연동**에서 할 수 있어요. 아직 연동하지 않았다면 **결제 게이트웨이 연동**을 눌러 진행하세요.
2. **캘린더 설정**의 **Forms & Payments**(폼 및 결제) 섹션에서 해당 캘린더의 **Accept Payments**(결제 받기) 토글을 켜세요.

   ![캘린더 설정에서 결제 받기 토글을 켜는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023873723/original/qh84sI5jK74C15QtJDvFjkxIVY73lfCypw.png?1712120969)

3. **총 금액**에 서비스나 예약의 전체 금액을 입력하고, **Currency**(통화)에서 사용할 통화를 선택하세요.

   ![총 금액과 통화를 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023875315/original/jDPTb95KbCiV_Z1bNFkGFXoBJAWYnoDQQg.png?1712123868)

4. **Accept Partial Payment**(부분 결제 허용) 체크박스를 선택하세요.

   ![부분 결제 허용 체크박스를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023875330/original/nUChXVtlfLyUPYLTHT-bcLVTmTXbbghDqg.png?1712123912)

5. 금액 유형을 **Flat Amount**(고정 금액)와 **백분율** 중에서 선택하세요. 백분율은 총 금액을 기준으로 계산돼요.

   ![금액 유형을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023875412/original/EJ0SZ3ZGIUD92bWFq9JrXo90BjB_R_5vsA.png?1712123958)

6. 예약금 금액이나 비율을 입력하세요. 비율은 앞에서 입력한 총 금액을 기준으로 계산돼요.

   ![예약금 금액 또는 비율을 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023875759/original/h6KWVxtgbVYQ-g0CLA4_P_43_NxR-nuE_w.png?1712124477)

7. 필요하면 **설명 추가**에 **설명**을 입력하세요. 예약자에게 보여 줄 부가 정보를 적을 수 있어요.

   ![설명을 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023874940/original/dkS82BeTBEBKpH74CNQ06h_tQXfNxLxUEQ.png?1712123347)

8. **설정 저장**을 눌러 변경 내용을 적용하세요.

---

## 남은 금액 받기

남은 금액은 직접 수집해야 해요. 예약 상세를 열고 **결제** 탭으로 이동한 다음 **결제 수집**을 누르세요.

![예약 상세의 결제 탭에서 결제 수집 버튼을 누르는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084958604/original/IyeaFc193ycEBGNpM7PSFO5E_WUbV7Q4WQ.png?1793804835)

---

## 주요 장점

예약금을 받으면 노쇼를 줄이는 데 도움이 돼요. 예약의 전체 비용을 보여 주면서도 예약금만 낼 수 있게 해 주니, 전액을 먼저 결제하라고 요구하지 않고도 예약자의 이용 경험을 좋게 만들 수 있어요.

---

## 자주 묻는 질문

### 부분 결제는 어떤 캘린더 유형에서 쓸 수 있나요?
모든 캘린더 유형에서 부분 결제를 켤 수 있어요. **Event**(이벤트), **Round Robin**(라운드 로빈), **Collective**(컬렉티브), **Class**(클래스), **Service Calendar**(서비스 캘린더), **Service Menu**(서비스 메뉴)가 모두 해당돼요.

### 남은 결제 금액은 어떻게 관리하나요?
예약 상세를 열고 **결제** 탭에서 직접 관리해요. 남은 금액을 확인하고 예약자에게 수집하면 돼요.

### 캘린더 결제에서는 어떤 결제 게이트웨이를 쓸 수 있나요?
현재 캘린더 결제에서 지원하는 결제 게이트웨이는 Stripe, NMI, Authorize.net이에요.
