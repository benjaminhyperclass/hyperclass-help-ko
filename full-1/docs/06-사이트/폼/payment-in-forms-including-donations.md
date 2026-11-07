---
원문: https://help.gohighlevel.com/support/solutions/articles/155000001884-payment-in-forms-including-donations-
번역일: 2026-11-06
카테고리: 06-사이트
---

# 폼에서 결제 받기 (후원금 포함)

폼에 결제 요소를 넣으면 후원금이나 방문자가 직접 정한 금액을 받을 수 있어요. 폼 빌더의 **Add Element**(요소 추가)에서 **연동** 섹션을 열면 결제 요소를 찾을 수 있어요.

### [동영상](https://www.youtube.com/embed/NQLEW3VMXmA?&wmode=opaque)

[동영상](https://www.youtube.com/embed/9GmczQedEoQ?&wmode=opaque)

### 커뮤니티 튜토리얼 더 보기

<https://youtu.be/x0YVga4F6fA>

<https://youtu.be/K-4H3AILlUU>

<https://youtu.be/QZ0WXKpTHIM>

<https://youtu.be/GK3sFbmTnTk>

---

## 개요

폼에서 결제 기능을 쓰면 다음을 할 수 있어요.

- 후원금(추천 금액 또는 직접 입력한 금액)을 받아요.
- 구독처럼 정기적으로 내는 반복 후원을 받아요.
- 현금이나 계좌 이체 같은 수동 결제 방법으로 상품을 판매해요.
- 모든 결제를 **결제** 메뉴에서 한 번에 확인하고 관리해요.

---

## 사용할 수 있는 결제 유형

설정에 따라 여러 방식으로 결제를 받을 수 있어요.

- 온라인 결제: Stripe, Authorize.net, NMI처럼 연결한 결제 대행 서비스를 통해 받아요.
- 수동 결제: 오프라인으로 받는 방식이에요.

  - **착불 결제 (COD)**: 고객이 상품을 받을 때 현금으로 결제해요.
  - **Custom Payment Methods**(사용자 지정 결제 방법): 계좌 이체, 수표 등 그 밖의 오프라인 결제 방식이에요.

---

## 후원 금액 설정

### 추천 금액 설정하기

![추천 금액 설정 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054677894/original/GQGfEt3FAM5Jfu67kOrXPw8K481ktGXAIA.png?1758889763)

![추천 금액 설정 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054677937/original/gFkQx0ghwhhvfWpNp501zRIAzkx8r9d3NQ.png?1758889784)

후원자가 원하는 통화로 추천 금액 중에서 고르게 할 수 있어요.

- 추천 금액은 최대 15개까지 추가할 수 있어요.
- 드롭다운에서 통화를 선택해요.
- 더 유연하게 받고 싶다면 **Other Amount**(기타 금액) 옵션을 켜요.
- 후원자가 금액을 선택했을 때 표시되는 레이블(태그)을 원하는 문구로 바꿀 수 있어요.
- 추천 금액의 스타일은 폼의 테마에 맞게 자동으로 적용돼요.

---

### 방문자가 직접 금액 입력하기

![방문자 직접 입력 금액 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054678026/original/KpGiXmdYu-VowtFrzXp-o2QdWrsqFikUSg.png?1758889818)

추천 금액을 쓰지 않으면 **User-Defined Amount**(사용자 지정 금액) 옵션이 자동으로 켜져요.

- 후원자가 원하는 금액을 직접 입력할 수 있어요.
- 무엇을 입력하면 되는지 안내하는 플레이스홀더를 넣을 수 있어요.

---

### 반복 후원

**Recurring Donation**(반복 후원) 기능을 쓰면 고객이 일정한 주기로 후원을 구독할 수 있어요.

작동 방식:

1. 폼에 **커스텀 금액** 요소를 추가해요.
2. **Recurring Payment**(반복 결제) 토글을 켜요.
3. 선택할 수 있는 결제 주기(주간, 월간, 연간)를 정해요.

![반복 결제 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055401316/original/sBHoS3LWRPa6V7_hJelpl4BvKMR4VHHkpQ.png?1759832782)

고객 입장에서는 이렇게 진행돼요.

- 후원자가 금액과 결제 주기를 선택해요.
- 한 번 구독하면 이후 결제가 자동으로 반복돼요.

이 기능을 쓰면 좋은 점은 다음과 같아요.

- 후원 과정이 단순해져요.
- 후원자가 꾸준히 후원하도록 유도할 수 있어요.
- 총 결제량(Total Payment Volume, TPV)을 늘리는 데 도움이 돼요.

### **결제 수집** 요소 화면 개선

**결제 수집** 요소의 기본 화면이 더 깔끔해졌어요.

이번 업데이트에는 다음 내용이 들어 있어요.

- 비어 있는 상태를 더 알아보기 쉽게 보여 줘요.
- 헤더 텍스트를 직접 설정할 수 있어요.
- 결제 요소를 설정하는 중에 바로 상품을 추가할 수 있어요.

덕분에 폼 안의 결제 영역을 이해하고 설정하기가 더 쉬워졌어요.

---

## 수동 결제 방식

수동 결제 방법을 쓰면 폼과 설문으로 상품을 판매하고, 결제는 오프라인으로 받을 수 있어요. 수동 결제에 대한 자세한 내용은 [폼·설문의 수동 결제 지원](../../08-결제/기타/manual-payment-support-for-forms-surveys.md) 문서를 참고하세요.

### 1. 수동 결제 켜기

- **결제 > 연동 > Manual Payment Methods**(수동 결제 방법)로 이동해요.
- **착불 결제 (COD)** 또는 **Custom Payment Methods**를 켜요.
- 설명과 구매 후 안내 메시지를 설정해요.
- 수동 결제 옵션이 폼과 설문에서 쓸 수 있도록 켜져 있는지 확인해요.

### 2. 폼·설문에 자동으로 표시

- 폼이나 설문에 상품을 추가하면 결제 수단 선택 영역에 수동 결제 옵션이 자동으로 나타나요.

### 3. 주문 처리와 결제 수집

- 수동 결제를 선택한 채로 폼이 제출되면 **결제 > 주문**에 **대기 중** 상태로 주문이 표시돼요.
- 이후 주문을 **유료**로 바꾸고 결제 수단(현금, 카드, 수표, 계좌 이체 등)을 선택할 수 있어요.
- 바뀐 결제 상태는 **폼 제출**에도 자동으로 반영돼요.

---

## 결제 내역 확인

![결제 내역 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054678185/original/ni3D60ydN4iUo9IzTDHuKO_HJddZNjsy9g.png?1758889842)

모든 결제를 한곳에서 확인할 수 있어요.

- 폼 제출 데이터에서 바로 결제 상세 정보를 볼 수 있어요.
- **결제 > 거래 내역**에서 전체 거래 내역을 확인해요.
- 필요하면 결제 내역을 내보낼 수 있어요.
- 성공, 대기 중 같은 결제 상태를 실시간으로 볼 수 있어요.

---

## 이메일 알림

![이메일 알림 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054678238/original/J_rv8qm_8NdEKULMVo_cHDhUQxsTYn4HGQ.jpeg?1758889881)

결제가 들어간 폼에는 자동 응답 메일과 **이메일 알림**을 켤 수 있어요.

- 알림에는 결제 금액과 결제 상태가 포함돼요.
- 운영자와 고객 모두 바로 상황을 알 수 있어요.

---

## 장점과 활용 사례

- 높은 유연성: 온라인 결제와 오프라인 결제를 모두 받을 수 있어요.
- 반복 결제 지원: 자동 반복 결제로 꾸준한 후원을 이끌어 낼 수 있어요.
- 매끄러운 주문 추적: 폼, 주문, 결제를 한 화면에서 관리해요.
- 자동 동기화: 결제 상태가 바뀌면 **주문**과 **제출** 양쪽에 반영돼요.
- 현금 거래 비즈니스에 적합: 착불 결제나 오프라인 결제를 주로 쓰는 비즈니스에 잘 맞아요.

---

## 유의 사항

- NMI와 Authorize.net을 쓰려면 **이름**을 필수 항목으로 설정해야 해요.
- 환불은 현재 지원하지 않아요.
- 예전 API 방식의 Stripe Connect는 더 이상 지원하지 않아요.
- 결제가 들어간 커스텀 폼을 쓰는 **캘린더**에서는 결제 요소가 표시되지 않아요.
- 퍼널에서 여러 폼에 걸친 다중 결제는 아직 지원하지 않아요.
- 결제 요소에서는 **실행 취소**와 **다시 실행**을 쓸 수 없어요.

---

폼에서 결제를 켜면 고객에게 더 다양한 결제 방법을 제공하고, 주문 관리를 간편하게 하고, 더 매끄러운 결제 경험을 만들 수 있어요.
