---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000006624-rentals-creating-a-booking
번역일: 2026-08-11
카테고리: 04-캘린더-예약 > 렌탈
---

# 렌탈 - 예약 생성하기

이 아티클에서는 렌탈(Rentals)에서 **예약(Booking)을 수동으로 생성**하는 방법을 설명해요. 예약 생성 양식(Create Booking form)의 모든 필드, 리스팅/고객/결제 추가 방법, 그리고 앱 내 예약이 일반 비즈니스 또는 리스팅 규칙을 무시하는 모든 특수 케이스를 다룹니다.

---

**목차**

- [예약 생성 개요](#Overview-of-Creating-a-Booking)[예약 생성의 주요 이점](#Key-Benefits-of-Creating-a-Booking)
- [새 예약을 생성하는 방법](#How-to-Create-a-New-Booking?)
- [예약 생성 양식의 구성](#Sections-of-the-Create-Booking-Form)
- [고객 정보](#Customer-Information)
- [리스팅 섹션](#Listings-Section)
- [결제 요약](#Payment-Summary)
- [내부 노트](#Internal-Notes)
- [예약 상태 설정](#Set-Booking-Status)
- [저장 및 확인](#Save-and-Confirm)
- [자주 묻는 질문](#Frequently-Asked-Questions)
- [관련 아티클](#Related-Articles)
---

# **예약 생성 개요**

예약 생성(Create Booking) 플로우를 사용하면 관리자가 예약(Appointments) 또는 캘린더(Calendar) 화면에서 고객을 위한 예약을 직접 수동으로 생성할 수 있어요. 관리자가 생성한 예약은 **완전한 유연성**을 제공하며, 설정된 비즈니스 또는 리스팅 제약 조건을 벗어난 예약도 가능해요.

즉, 다음이 가능해요:

- 
비즈니스 운영 시간 **외**에도 예약을 생성할 수 있어요.


- 
시간 선택기가 비활성화되어 있어도 **원하는 시작/종료 시간**을 설정할 수 있어요.


- 
리스팅에 정해진 고정 기간과 무관하게 **원하는 기간**으로 예약을 생성할 수 있어요.


- 
최소/최대 예약 기간, 최소 예약 사전 통지 시간, 최대 사전 예약 기간을 우회할 수 있어요.


- 
단, 예약 가능 여부를 확인할 때 **사전 버퍼(pre-buffer)**와 **사후 버퍼(post-buffer)** 시간대는 여전히 준수해요.


예시: 리스팅의 기본 대여 시간이 오전 9시~오후 11시이고 시간 선택기가 비활성화된 경우에도, 오전 7시~오후 1시로 예약을 생성할 수 있어요. 마찬가지로 고정 기간이 4시간 또는 1일로 설정되어 있어도 수동으로 2시간 또는 2일로 예약할 수 있어요.

이를 통해 관리자는 운영 안전성을 유지하면서도 예외 상황에 유연하게 대응할 수 있어요.

---

## 예약 생성의 주요 이점

- 
빠른 일정 처리: 예약(Appointments) 또는 캘린더에서 직접 생성해 요청을 신속하게 처리할 수 있어요.


- 
유연성: 리스팅이 고정 기간을 사용하거나 시간 선택기가 비활성화되어 있어도 관리자가 시작/종료 시간을 임의로 설정할 수 있어요.


- 
충돌 방지: 버퍼와 재고가 항상 적용되어 초과 예약을 방지해요.


- 
정확한 가격 및 보증금: 결제 요약(Payment Summary)에 설정된 가격 규칙과 보증금이 반영되어 저장 전에 총액을 명확히 확인할 수 있어요.


- 
다중 리스팅 지원: 각기 다른 시간과 수량을 가진 여러 리스팅을 하나의 예약에 추가하여 복잡한 주문도 간편하게 처리할 수 있어요.


- 
즉시 팀 공유: 저장된 예약은 즉시 예약(Appointments)과 캘린더에 표시되어 운영 조율이 원활해요.

---

## **새 예약을 생성하는 방법**

예약을 생성하는 방법은 두 가지가 있어요:

#### 방법 1 — 예약(Appointments) 화면에서


- 
**캘린더(Calendars) → 예약 목록 보기(Appointment List View)**로 이동하세요.
 
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056085149/original/4bLTb3YHmBvjeqW5xb6oih8zlGvptFPj-w.png?1760547569)


- 
드롭다운에서 렌탈(Rentals)을 선택하세요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056085292/original/xdUwSSIV-FarQ9fWtUe6ZCrWdlRQEl198g.png?1760547755)


- 
오른쪽 상단의 **+ 예약 생성(+ Create Booking)**을 클릭하세요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056085310/original/JCjR-lHj0v2qUIiuizYl6R13_0K62lIh_Q.png?1760547790)


- 
**새 예약(New Booking)** 화면이 열려요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056085337/original/nj9mza7y86UDXY-Ur3Ng56AZGI87FI-gTA.png?1760547820)


#### 방법 2 — 캘린더(Calendar) 화면에서


- 
**캘린더(Calendars) → 캘린더 보기(Calendar View)**로 이동하세요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056085396/original/f-uOY9nRsqc4Q38Xds8ovbbyt8NC4MQRfw.png?1760547919)


- 
드롭다운에서 렌탈(Rentals)을 선택하세요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056085416/original/scWjmoBWV-3j1_kxeCepAhiMOl1CTPxLlQ.png?1760547958)


- 
캘린더 오른쪽 상단의 **+ 신규(+ New)**를 클릭하세요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056085439/original/n1Apfyu1W84tELBsIFO1CtphQ4AzBTbqmg.png?1760547993)


- 
**새 예약(New Booking)** 화면이 나타나요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155073942646/original/k-EdupEP0CmzS8DW0JUMq8ktafO1qtKQdg.png?1781768388)


---

## **예약 생성 양식의 구성**

예약 양식은 다음 섹션으로 구성되어 있어요:

- 
고객 정보(Customer Details)

- 
리스팅(Listings)

- 
내부 노트(Internal Note)

- 
결제 요약(Payment Summary)

- 
예약 상태 설정(Set Booking Status)


각 섹션에 대한 자세한 내용은 아래에서 확인하세요.

**팁:** 리스팅을 캘린더에서 잠시 제외해야 한다면(예: 유지보수 또는 내부 사용), 차단 슬롯(Blocked slot) 이벤트를 생성하세요. 차단 슬롯은 예약처럼 예약 가능 시간을 줄이지만, 고객 예약이나 주문에 연결되지는 않아요.

자세히 알아보기: [렌탈 리스팅의 차단 슬롯](rentals-blocked-slots-for-listings.md)
---

## 고객 정보

예약하는 고객 정보를 입력하거나 선택하세요.

필드:

- 연락처 선택(Select Contact) – 기존 연락처를 검색하거나 새로 생성할 수 있어요.

해당하는 레코드가 없다면 **새 연락처 추가(Add New Contact)**를 클릭해 바로 생성하세요.


- 전화번호 및 이메일(Phone & Email) – 선택한 연락처에서 자동으로 불러와요.


팁: 알림과 결제 확인이 올바른 사람에게 전달되도록 항상 연락처 정보를 확인하세요.
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155073942731/original/4r4ABPKySmFQsg5VK4W7I0lvBOItfrgd2g.png?1781768447)


---

## 리스팅 섹션

이 섹션에서 예약할 리스팅(들)을 선택해요.

#### **리스팅 추가 방법:**


- 
드롭다운에서 **리스팅 이름(Listing Name)**을 선택하세요.


- 
(해당하는 경우) **변형(Variant)**을 선택하세요.


- 
**수량(Quantity)**을 입력하세요 – 예약할 유닛 수예요.


- 
시작 및 종료 날짜/시간을 지정하세요.


리스팅의 시간 선택기가 비활성화되어 있어도 시간 선택 창이 나타나요.


- 
고정 기간이나 대여 시간과 무관하게 원하는 시간과 기간을 선택할 수 있어요.


- 예약에 리스팅을 업데이트하거나 새로 추가할 때, 해당 시간대에 재고가 있어야 선택할 수 있어요.


- 기간(Duration)은 선택한 값을 기준으로 자동 계산되지만 수동으로 조정할 수 있어요.


- 
**리스팅 총액(Listing Total)**은 가격 규칙과 할인이 반영되어 자동으로 업데이트돼요.


- (해당하는 경우) **보증금(Security Deposit)**도 자동으로 업데이트돼요.


중요: 수동 예약은 **최소/최대 기간, 예약 사전 통지 시간, 예약 가능 기간을 무시**하지만, 기존 예약과 겹치지 않도록 **버퍼 시간은 준수**해요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155073942762/original/AuMiab5MV9p8JV8nLUWmxRdMnF-OZ_DK6w.png?1781768472)


#### 


#### **여러 리스팅 추가하기:**


- 
**+ 리스팅 추가(+ Add Listing)**를 다시 클릭해 하나의 예약에 여러 항목을 포함시킬 수 있어요.


- 
각 리스팅은 고유한 시작/종료 시간과 수량을 가질 수 있어요.


- 
합산된 총액은 최종 결제 요약(Payment Summary)에 업데이트돼요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155073942878/original/ag7-HYgle831dtBNopcsq4e85IWt-VOiTA.png?1781768530)


---

## 내부 노트

이 섹션을 사용해 상황별 노트를 추가하거나 운영 세부 정보를 기록하세요.

- 
내부 노트 추가(Add Internal Note): 지시사항, 고객 요청, 또는 내부 알림 사항을 추가하세요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155073943013/original/xiIgpq4A-w2bz5ga62tkUeyn74TyRpiaqA.png?1781768621)


---

## 결제 요약

결제 요약(Payment Summary)은 예약의 모든 비용을 정리해서 보여줘요.

**표시되는 필드:**

- 
대여 소계(Rental Subtotal) – 모든 리스팅의 합산 금액이에요.


- 
보증금(Security Deposit) – 해당 예약에 적용되는 총 보증금이에요. 이는 선불로 수금해야 할 총액의 일부일 수도 있고, 보증금 방식이 카드 등록(card on file)으로 설정된 경우 이후 손상/약관 위반 시 청구될 수 있는 금액을 안내하는 것일 수도 있어요.


- 
총액(Total Amount) – 적용되는 보증금과 기타 비용을 포함한 최종 수금 금액이에요.


- 
오늘 결제할 금액(Due Today) – 남은 수금 금액이에요.


**참고:** 보증금이 카드 등록(Card on File)으로 설정된 경우, 결제 요약의 총액(Total Amount)에는 보증금 금액이 포함되지 않아요. 단, 보증금은 이후에 수금할 수 있으며, 명시적으로 청구되기 전까지는 미수금(amount due)으로 간주되지 않아요.
## 
![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155073943115/original/sJfWec09Zzr0yrj2GHDcuV1hRGxXxie0Aw.png?1781768646)


---

## **예약 상태 설정**

저장하기 전, 예약의 **초기 상태**를 선택할 수 있어요:

- 
**미확정(Unconfirmed)** – 예약이 기록되었지만 아직 확정되지 않은 상태예요. 임시 대여에 유용해요.


- 
**예약 확정(Booked)** – 예약이 즉시 확정돼요.


이 유연성 덕분에 관리자는 임시 보류 상태나 수동으로 확정한 예약을 관리할 수 있어요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155073943160/original/X7W15OwY6vhEaIOTW6vdSNFVddPSKCPSqw.png?1781768669)


---

## **저장 및 확인**

모든 필드를 입력했다면:

- 
고객 및 리스팅 세부 정보를 확인하세요.


- 
예약 확인(Confirm booking)을 클릭하세요.


- 
예약이 예약 목록 보기(Appointments List View)에 표시돼요.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155073943169/original/JrsRSx6pRMidxE3jt7WOe4FHTapA3f1SSQ.png?1781768683)


---

## **자주 묻는 질문**

Q: 지금 결제를 받지 않고 예약을 생성할 수 있나요?
네, 가능해요. 결제 없이 저장한 뒤, 이후에 **예약 편집(Edit Booking)**을 열어 전체 잔액이나 보증금을 수금할 수 있어요.

**Q: 결제 요약에 보증금이 표시되지 않는 이유는 무엇인가요?**
전역 설정(Global Settings)에서 보증금 기능이 활성화되어 있는지, 그리고 해당 변형(Variant)의 보증금이 $0으로 설정되어 있지 않은지 확인하세요.

**Q: 설정한 시간이 버퍼와 겹치거나 재고가 부족한 경우 어떻게 되나요?**
오류가 표시되거나 저장 버튼이 비활성화돼요. 버퍼를 준수하도록 시간을 조정하거나 예약을 가능한 재고 범위 내로 줄이세요.

Q: 다중 리스팅 예약은 가격과 화면에 어떻게 표시되나요?
각 리스팅은 개별 행으로 표시되며 각자의 가격과 결제 상태를 가져요. 모든 행이 결제 완료되기 전까지는 예약 상태가 부분 결제(Partially Paid)로 표시될 수 있어요.

---

*원문 최종 수정: 2026년 8월 5일*
*Hyperclass 사용 가이드 — hyperclass.ai*