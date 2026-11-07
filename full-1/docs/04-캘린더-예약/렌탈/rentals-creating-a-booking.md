---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006624-rentals-creating-a-booking
번역일: 2026-11-06
카테고리: 04-캘린더-예약
---

# 대여 예약 직접 만들기

**대여**(Rentals)에서 예약을 직접 만드는 방법을 안내해요. 예약 생성 화면의 항목, 리스팅·고객·결제 정보를 넣는 방법을 순서대로 살펴봐요. 관리자가 직접 만든 예약이 일반 영업 규칙이나 리스팅 규칙을 넘어서는 경우도 함께 설명해요. 예약을 만들면서 고객 정보 수집용 폼을 선택해 붙이는 방법도 다뤄요.

## 예약 생성 개요

**예약 생성** 기능을 쓰면 관리자가 **예약 목록 보기**나 **캘린더 보기**에서 고객 대신 예약을 직접 만들 수 있어요. 관리자가 만든 예약은 설정된 영업 조건이나 리스팅 조건에 얽매이지 않아요.

그래서 다음과 같이 예약할 수 있어요.

- 영업시간 밖에도 예약을 만들 수 있어요.
- 시간 선택 기능이 꺼져 있어도 시작 시간과 종료 시간을 원하는 대로 정할 수 있어요.
- 리스팅에 고정 소요 시간이 정해져 있어도 원하는 소요 시간으로 예약할 수 있어요.
- 최소·최대 예약 시간, 최소 예약 사전 공지 시간, 최대 사전 예약 기간을 건너뛸 수 있어요.
- 가용 여부를 확인할 때는 사전 버퍼와 사후 버퍼 시간대를 그대로 적용해요.

예를 들어 리스팅의 기본 대여 시간이 오전 9시~오후 11시이고 시간 선택 기능이 꺼져 있어도, 오전 7시~오후 1시로 예약을 만들 수 있어요. 고정 소요 시간이 4시간 또는 1일이어도 직접 2시간이나 2일로 예약할 수 있어요.

이렇게 예외 상황은 유연하게 처리하면서도 운영상 안전장치는 유지해요.

## 예약을 직접 만들면 좋은 점

대여 예약을 직접 만들면 특별한 일정 요청을 받아 주고, 가용 현황을 관리하고, 예약을 마무리하는 데 필요한 정보를 모을 수 있어요.

- 빠른 일정 등록: **예약 목록 보기**나 **캘린더 보기**에서 바로 만들어 요청을 신속하게 처리해요.
- 유연한 시간 설정: 리스팅이 고정 소요 시간을 쓰거나 시간 선택 기능이 꺼져 있어도 관리자가 시작·종료 시간을 직접 정할 수 있어요.
- 중복 예약 방지: 버퍼와 재고는 항상 적용되어 초과 예약을 막아요.
- 정확한 가격과 보증금: **Payment Summary**(결제 요약)에 설정된 가격 규칙과 보증금이 반영되어, 저장하기 전에 금액을 명확하게 확인할 수 있어요.
- 여러 리스팅 지원: 한 예약에 리스팅을 여러 개 담을 수 있어요. 리스팅마다 시간과 수량을 따로 정할 수 있어서 복잡한 주문도 간단히 처리해요.
- 팀 내 즉시 공유: 저장한 예약은 **예약 목록 보기**와 **캘린더 보기**에 바로 표시되어 팀이 함께 일정을 조율할 수 있어요.
- 선택 가능한 정보 수집 폼: 예약을 만들면서 사용 가능한 폼을 붙여 고객 정보를 함께 받을 수 있어요.

## 새 예약 만들기

**New Booking**(새 예약) 화면은 두 가지 방법으로 열 수 있어요. 대여 예약 목록에서 작업하려면 **예약 목록 보기**를, 캘린더에서 바로 만들려면 **캘린더 보기**를 이용하세요.

### 방법 1 — 예약 목록 보기에서 시작하기

1. **캘린더 > 예약 목록 보기**로 이동하세요.

![캘린더 메뉴에서 예약 목록 보기로 이동하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056085149/original/4bLTb3YHmBvjeqW5xb6oih8zlGvptFPj-w.png?1760547569)

2. 드롭다운에서 **대여**를 선택하세요.

![예약 목록 보기에서 대여를 선택한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056085292/original/xdUwSSIV-FarQ9fWtUe6ZCrWdlRQEl198g.png?1760547755)

3. 오른쪽 위의 **+ 예약 생성**을 클릭하세요.

![대여 예약 목록 보기의 예약 생성 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056085310/original/JCjR-lHj0v2qUIiuizYl6R13_0K62lIh_Q.png?1760547790)

4. **New Booking** 화면이 열려요.

![대여 예약 목록에서 열린 새 예약 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056085337/original/nj9mza7y86UDXY-Ur3Ng56AZGI87FI-gTA.png?1760547820)

### 방법 2 — 캘린더 보기에서 시작하기

1. **캘린더 > 캘린더 보기**로 이동하세요.

![캘린더 메뉴에서 캘린더 보기로 이동하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056085396/original/f-uOY9nRsqc4Q38Xds8ovbbyt8NC4MQRfw.png?1760547919)

2. 드롭다운에서 **대여**를 선택하세요.

![캘린더 보기에서 대여를 선택한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056085416/original/scWjmoBWV-3j1_kxeCepAhiMOl1CTPxLlQ.png?1760547958)

3. 캘린더 오른쪽 위의 **+ 신규**를 클릭하세요.

![대여 캘린더 보기의 새 예약 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056085439/original/n1Apfyu1W84tELBsIFO1CtphQ4AzBTbqmg.png?1760547993)

4. **New Booking** 화면이 나타나요.

![대여 캘린더 보기에서 열린 새 예약 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155073942646/original/k-EdupEP0CmzS8DW0JUMq8ktafO1qtKQdg.png?1781768388)

## 예약 생성 화면의 구성

**New Booking** 화면은 고객 정보, 대여 항목, 선택 입력 폼, 메모, 결제 정보를 영역별로 나눠 보여 줘요. 저장하기 전에 예약 내용을 한눈에 검토할 수 있어요.

예약 화면은 다음 영역으로 구성돼요.

1. **고객 세부 정보**
2. **Booking form**(예약 폼, 선택)
3. **리스팅**
4. **Internal Note**(내부 메모)
5. **Payment Summary**(결제 요약)
6. **예약 상태**

각 영역을 차례로 설명해요.

{% hint style="info" %}
정비나 내부 사용 등으로 리스팅을 캘린더에서 잠시 빼야 한다면 **차단된 슬롯** 이벤트를 만드세요. 차단된 슬롯은 예약처럼 가용 수량을 줄여 주지만, 고객 예약이나 주문과는 연결되지 않아요. 자세한 내용은 "Blocked Slots for Rental Listings" 문서를 참고하세요.
{% endhint %}

## 고객 세부 정보

예약하는 고객을 입력하거나 선택해요. 연락처 정보가 정확해야 확인 메시지와 알림이 해당 고객에게 전달돼요. 붙인 예약 폼에서 지원하는 항목도 이 정보로 미리 채워져요.

항목은 다음과 같아요.

- **연락처 선택**: 기존 연락처를 검색하거나 새로 만들어요.
  - 연락처가 없다면 **새 연락처 추가**를 클릭해 바로 만들 수 있어요.
- **Phone & Email**(전화번호·이메일): 선택한 연락처에서 자동으로 불러와요.

{% hint style="info" %}
알림과 결제 확인 메시지가 올바른 사람에게 가도록 연락처 정보를 꼭 확인하세요.
{% endhint %}

![연락처를 선택하고 고객 정보를 확인하는 고객 세부 정보 항목](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155073942731/original/4r4ABPKySmFQsg5VK4W7I0lvBOItfrgd2g.png?1781768447)

## 대여 예약에 폼 붙이기

대여 예약을 직접 만들 때 선택 사항으로 고객 정보 수집용 폼을 붙일 수 있어요. 고객에게 별도의 예약 페이지를 안내하지 않아도 정보를 받을 수 있어요. 설정해 둔 폼이 미리 선택되어 있고, 선택한 연락처의 이름, 성, 이메일, 전화번호가 자동으로 채워져요.

1. **캘린더 > 예약 목록 보기**를 열고 **대여**를 선택한 다음 **+ 예약 생성**을 클릭해 **New Booking**을 여세요. **캘린더 보기**의 **대여**에서 시작해도 돼요.
2. **고객 세부 정보**에서 예약할 연락처를 선택하세요.
3. **Booking form** 영역에서 **Attach form**(폼 첨부)을 클릭하세요.
4. 미리 선택된 폼을 확인하거나, **Booking form** 드롭다운에서 사용 가능한 다른 폼을 선택하세요.
5. 미리 채워진 고객 정보를 확인하고, 나머지 해당 항목은 고객을 대신해 입력하세요.
6. 폼 창 아래쪽의 **Attach form**을 클릭하세요.
7. 선택한 폼이 **Booking form** 영역에 표시되는지 확인한 다음, 리스팅과 예약 상태 등 나머지 예약 정보를 입력하고 저장하세요.

![Booking form과 Attach form이 보이는 대여 새 예약 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084553262/original/BlaM4XiYBbEF5YUtKHhNllg6UwGMd6RBJA.png?1793328251)

{% hint style="warning" %}
폼 첨부는 선택 사항이고, 예약을 만드는 중에만 할 수 있어요. 이미 만든 예약에는 폼을 추가할 수 없고, 제출된 폼도 나중에 편집할 수 없어요. 폼 안에는 CAPTCHA, 상품 판매, 결제 요소가 표시되지 않아요. 예약 화면에 따로 있는 결제나 상품 관련 설정에는 영향이 없어요.
{% endhint %}

폼 첨부에 대한 자세한 내용은 [서비스 및 대여 예약에 폼 첨부하기](../예약-관리/attach-forms-to-in-app-service-and-rental-bookings.md)를 참고하세요.

## 리스팅

예약할 리스팅을 선택하고 수량, 시간, 해당 옵션을 정해요. 이 정보로 가용 여부가 정해지고 대여 금액이 계산돼요.

### 리스팅 추가하기

1. 드롭다운에서 **Listing Name**(리스팅 이름)을 선택하세요.
2. 해당하는 경우 **배리언트**를 선택하세요.
3. **수량**에 예약할 개수를 입력하세요.
4. **Start Date Time**(시작 날짜 및 시간)과 **종료 날짜 및 시간**을 정하세요.
   - 리스팅의 시간 선택 기능이 꺼져 있어도 시간 선택 창이 나타나요.
   - 고정 소요 시간이나 대여 시간과 상관없이 원하는 시간과 소요 시간을 고를 수 있어요.
   - 예약에 리스팅을 새로 추가하거나 수정할 때는 선택한 기간에 재고가 있어야 해요.
   - **소요 시간**은 선택한 시간에 맞춰 자동으로 계산되지만, 직접 조정할 수도 있어요.
5. **Listing Total**(리스팅 합계)은 가격 규칙과 할인이 반영되어 자동으로 바뀌어요.
6. 해당하는 경우 **보증금**도 자동으로 바뀌어요.

{% hint style="warning" %}
직접 만든 예약은 최소·최대 소요 시간, 예약 사전 공지 시간, 예약 가능 기간을 무시해요. 하지만 버퍼 시간은 적용하므로 기존 예약과 겹치지 않아요.
{% endhint %}

![배리언트, 수량, 날짜, 시간, 합계가 있는 대여 리스팅 설정 항목](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155073942762/original/AuMiab5MV9p8JV8nLUWmxRdMnF-OZ_DK6w.png?1781768472)

### 리스팅 여러 개 추가하기

한 대여 예약에 리스팅을 여러 개 담을 수 있어요. 리스팅마다 일정과 수량은 따로 유지돼요.

- **+ Add Listing**(리스팅 추가)을 다시 클릭하면 한 예약에 항목을 더 담을 수 있어요.
- 리스팅마다 시작·종료 시간과 수량을 다르게 정할 수 있어요.
- 합산 금액은 마지막의 **Payment Summary**에 반영돼요.

![대여 예약에 리스팅을 여러 개 추가한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155073942878/original/ag7-HYgle831dtBNopcsq4e85IWt-VOiTA.png?1781768530)

## 내부 메모

**Internal Note** 영역에는 팀이 예약을 처리하는 데 도움이 되는 운영 정보를 남겨요.

- **Add Internal Note**(내부 메모 추가): 작업 지침, 고객 요청 사항, 내부 알림 사항을 적어요.

![대여 예약의 내부 메모 입력란](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155073943013/original/xiIgpq4A-w2bz5ga62tkUeyn74TyRpiaqA.png?1781768621)

## 결제 요약

**Payment Summary**는 리스팅 요금과 해당되는 보증금을 한데 모아 보여 줘요. 예약을 저장하기 전에 받을 금액을 확인할 수 있어요. 관련 설정은 "Configuring Pricing & Discounts" 문서를 참고하세요.

표시되는 항목은 다음과 같아요.

- **Rental Subtotal**(대여 소계): 모든 리스팅의 합산 금액이에요.
- **보증금**: 이 예약에 적용되는 보증금 총액이에요. 보증금 방식에 따라 미리 받을 수도 있고, 카드가 등록되어 있을 때 파손이나 약관 위반이 생기면 나중에 청구할 수도 있어요.
- **총 금액**: 최종적으로 받을 금액이에요. 보증금이나 그 밖의 요금이 미리 결제 대상이면 그 금액도 포함돼요.
- **오늘 마감**: 아직 받아야 할 남은 금액이에요.

{% hint style="info" %}
보증금을 **Card on File**(저장된 카드)로 설정하면 **Payment Summary**의 **총 금액**에 그 보증금이 포함되지 않아요. 보증금은 나중에 받을 수 있고, 직접 청구하기 전에는 납부할 금액이 아니에요.
{% endhint %}

![대여 소계, 보증금, 총액, 납부할 금액이 표시된 결제 요약](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155073943115/original/sJfWec09Zzr0yrj2GHDcuV1hRGxXxie0Aw.png?1781768646)

## 예약 상태 정하기

저장하기 전에 처음 예약 상태를 골라 대여가 임시인지 확정인지 정해요.

- **미확인**: 예약은 기록되지만 아직 확정되지 않은 상태예요. 임시 대여에 쓰면 좋아요.
- **예약됨**: 예약이 바로 확정돼요.

이렇게 하면 관리자가 임시로 잡아 둔 예약과 직접 확정한 예약을 구분해서 관리할 수 있어요.

![미확인과 예약됨을 포함한 예약 상태 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155073943160/original/X7W15OwY6vhEaIOTW6vdSNFVddPSKCPSqw.png?1781768669)

## 저장하고 확인하기

예약을 제출하기 전에 고객, 붙인 폼(사용한 경우), 리스팅, 예약 상태를 검토하세요. 예약을 저장하면 **예약 목록 보기**에 표시돼요.

1. 고객과 리스팅 정보를 검토하고, 작성을 마친 폼이 **Booking form** 영역에 표시되는지 확인하세요.
2. **예약 만들기**를 클릭해 예약을 마무리하세요.
3. 예약이 **예약 목록 보기**에 나타나요.

![직접 만든 대여 예약을 저장하는 마지막 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155073943169/original/JrsRSx6pRMidxE3jt7WOe4FHTapA3f1SSQ.png?1781768683)

## 자주 묻는 질문

### 지금 결제를 받지 않고 예약을 만들 수 있나요?
네, 가능해요. 결제 없이 저장한 뒤 나중에 **Edit Booking**(예약 편집)을 열어 잔액 전체나 보증금을 받으면 돼요.

### 결제 요약에 보증금이 표시되지 않아요.
**글로벌 설정**에서 보증금이 활성화되어 있는지, 해당 배리언트의 보증금이 $0로 설정되어 있지 않은지 확인하세요.

### 시간이 버퍼와 겹치거나 재고가 부족하면 어떻게 되나요?
오류가 표시되거나 저장 버튼이 비활성화돼요. 버퍼를 피하도록 시간을 조정하거나, 가용 재고에 맞게 예약 수량을 줄이세요.

### 리스팅이 여러 개인 예약은 가격이 어떻게 계산되고 표시되나요?
리스팅마다 별도의 행이 생기고, 행마다 가격과 결제 상태가 따로 있어요. 모든 행이 결제될 때까지 예약에는 **부분 결제됨**으로 표시될 수 있어요.

### 직접 만드는 대여 예약에 정보 수집 폼이 꼭 필요한가요?
아니요. 폼 첨부는 선택 사항이라 폼 없이도 예약을 만들 수 있어요.

### 대여 예약을 만든 뒤에 붙인 폼을 추가하거나 바꿀 수 있나요?
아니요. 폼은 예약을 만드는 중에 붙이고 작성해야 해요. 이미 만든 예약에는 폼을 추가할 수 없고, 제출된 폼도 나중에 편집할 수 없어요.
