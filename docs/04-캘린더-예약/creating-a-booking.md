---

번역일: 2026-04-06
카테고리: 04-캘린더-예약
---

# 예약 생성하기

이 가이드에서는 렌탈에서 수동으로 **예약을 생성하는** 방법을 설명합니다. 예약 생성 양식의 모든 필드, 리스팅과 고객, 결제 정보를 추가하는 방법, 그리고 앱 내 예약이 일반적인 비즈니스나 리스팅 규칙을 무시하는 특별한 경우들을 자세히 알아보세요.

---

**목차**

- [예약 생성 개요](#예약-생성-개요)
- [예약 생성의 주요 장점](#예약-생성의-주요-장점)
- [새 예약을 생성하는 방법](#새-예약을-생성하는-방법)
- [예약 생성 양식의 섹션들](#예약-생성-양식의-섹션들)
- [고객 정보](#고객-정보)
- [리스팅 섹션](#리스팅-섹션)
- [결제 요약](#결제-요약)
- [내부 메모](#내부-메모)
- [예약 상태 설정](#예약-상태-설정)
- [저장 및 확인](#저장-및-확인)
- [자주 묻는 질문](#자주-묻는-질문)

---

# **예약 생성 개요**

예약 생성 흐름을 통해 관리자는 예약(Appointments) 또는 캘린더 보기에서 고객을 위한 예약을 직접 수동으로 생성할 수 있습니다. 관리자가 생성하는 예약은 **완전한 유연성**을 제공하며, 설정된 비즈니스 또는 리스팅 제약을 벗어난 예약도 가능합니다.

즉, 다음과 같은 일이 가능합니다:

- **영업시간 외에도** 예약 생성
- 시간 선택기가 비활성화되어 있어도 **원하는 시작/종료 시간** 설정
- 리스팅에 정의된 고정 기간과 관계없이 **모든 기간**으로 예약 생성
- 최소/최대 예약 기간, 최소 예약 사전 알림, 최대 사전 예약 기간 무시
- 가용성 확인 시 **사전 버퍼**와 **사후 버퍼** 시간대는 여전히 존중

예시: 리스팅의 기본 렌탈 시간이 오전 9시~오후 11시이고 시간 선택기가 비활성화되어 있어도, 오전 7시~오후 1시로 예약을 생성할 수 있습니다. 마찬가지로 고정 기간이 4시간 또는 1일이어도, 수동으로 2시간이나 2일로 예약할 수 있습니다.

이를 통해 관리자는 운영상의 안전성을 유지하면서도 예외 상황에 유연하게 대응할 수 있습니다.

---

## 예약 생성의 주요 장점

- **빠른 예약**: 예약 목록이나 캘린더에서 직접 생성하여 요청을 신속히 처리
- **유연성**: 리스팅이 고정 기간이나 비활성화된 시간 선택기를 사용해도 관리자가 맞춤 시작/종료 시간 설정 가능
- **충돌 방지**: 버퍼와 재고가 항상 적용되어 중복 예약 방지
- **정확한 가격 및 보증금**: 결제 요약에 설정된 가격 규칙과 보증금이 반영되어 저장 전에 총액을 명확히 확인
- **다중 리스팅 지원**: 하나의 예약에서 각각 고유한 시간과 수량을 가진 여러 리스팅 추가 가능하여 복잡한 주문 간소화
- **즉시 팀 가시성**: 저장된 예약이 예약 목록과 캘린더에 바로 표시되어 운영 조정 용이

---

## **새 예약을 생성하는 방법**

예약을 생성하는 방법은 두 가지입니다:

#### 방법 1 — 예약 목록 보기에서

- **캘린더(Calendars) → 예약 목록 보기(Appointment List View)**로 이동합니다.

![예약 목록 보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056085149/original/4bLTb3YHmBvjeqW5xb6oih8zlGvptFPj-w.png?1760547569)

- 드롭다운에서 렌탈을 선택합니다.

![렌탈 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056085292/original/xdUwSSIV-FarQ9fWtUe6ZCrWdlRQEl198g.png?1760547755)

- 우측 상단의 **+ 예약 생성(Create Booking)** 버튼을 클릭합니다.

![예약 생성 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056085310/original/JCjR-lHj0v2qUIiuizYl6R13_0K62lIh_Q.png?1760547790)

- **신규 예약(New Booking)** 화면이 열립니다.

![신규 예약 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056085337/original/nj9mza7y86UDXY-Ur3Ng56AZGI87FI-gTA.png?1760547820)

#### 방법 2 — 캘린더 보기에서

- **캘린더(Calendars) → 캘린더 보기(Calendar View)**로 이동합니다.

![캘린더 보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056085396/original/f-uOY9nRsqc4Q38Xds8ovbbyt8NC4MQRfw.png?1760547919)

- 드롭다운에서 렌탈을 선택합니다.

![렌탈 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056085416/original/scWjmoBWV-3j1_kxeCepAhiMOl1CTPxLlQ.png?1760547958)

- 캘린더 우측 상단의 **+ 신규(New)** 버튼을 클릭합니다.

![신규 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056085439/original/n1Apfyu1W84tELBsIFO1CtphQ4AzBTbqmg.png?1760547993)

- **신규 예약(New Booking)** 화면이 나타납니다.

![신규 예약 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056085447/original/7OytY5K9daygPeOwnqtUQ3Eg8aO9IirAfQ.jpeg?1760548019)

---

## **예약 생성 양식의 섹션들**

예약 양식은 다음 섹션들로 구성됩니다:

- **고객 정보**
- **리스팅**
- **결제 요약**
- **내부 메모**
- **결제 상태 설정**

각 섹션에 대한 자세한 내용은 아래에서 설명합니다.

---

## 고객 정보

예약을 하는 고객을 입력하거나 선택합니다.

필드:

- 연락처 선택 – 기존 연락처를 검색하거나 새로 생성

기록이 없는 경우, **새 연락처 추가(Add New Contact)**를 클릭하여 즉시 생성할 수 있습니다.

- 전화번호 및 이메일 – 선택한 연락처에서 자동으로 가져옴

팁: 알림과 결제 확인이 올바른 사람에게 도달하도록 연락처 정보를 항상 확인하세요.

![고객 정보](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056085478/original/LxANM-yTFJ2ln8OkRRHFuOiFiqJTD0KOsQ.png?1760548102)

---

## 리스팅 섹션

예약할 리스팅을 선택하는 섹션입니다.

#### **리스팅 추가 단계:**

- 드롭다운에서 **리스팅 이름**을 선택합니다.
- **변형(Variant)**을 선택합니다(해당되는 경우).
- **수량** 입력 – 예약할 단위 수
- 시작 및 종료 날짜/시간을 정의합니다.

리스팅의 시간 선택기가 비활성화되어 있어도 시간 선택기가 나타납니다.

- 고정 기간이나 렌탈 시간을 넘어 맞춤 시간과 기간을 선택할 수 있습니다.
- 예약을 업데이트하거나 새 리스팅을 추가할 때는 해당 시간 동안 재고가 있어야 선택 가능합니다.
- 기간은 선택에 따라 자동 계산되지만 수동으로 조정할 수 있습니다.
- **리스팅 총액**은 가격 규칙과 할인에 따라 자동 업데이트됩니다.
- **보증금**은 해당되는 경우 자동으로 업데이트됩니다.

중요: 수동 예약은 **최소/최대 기간, 예약 사전 알림, 예약 기간을 무시**하지만, **버퍼 시간은 존중**하여 기존 예약과 겹치지 않습니다.

![리스팅 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056087383/original/nIFG_l4RnlZ9BibreRrzX2HDsF8CHRZz1Q.png?1760549597)

#### **여러 리스팅 추가:**

- **+ 리스팅 추가(Add Listing)**를 다시 클릭하여 하나의 예약에 여러 항목을 포함합니다.
- 각 리스팅은 고유한 시작/종료 시간과 수량을 가질 수 있습니다.
- 최종 결제 요약에서 합계가 업데이트됩니다.

![여러 리스팅](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056087320/original/x6BTzWXIgAmlgQmjc6P4mco0N-WL6bnqGw.png?1760549535)

---

## 결제 요약

결제 요약은 예약의 모든 비용을 통합합니다.

**표시 필드:**

- 렌탈 소계 – 모든 리스팅의 합계 금액
- 보증금 – 예약에 적용되는 총 보증금. 선불로 징수할 총액의 일부이거나, 나중에 손상/약관 위반 시 청구할 수 있는 금액 안내(보증금 모드가 카드 파일 보관으로 설정된 경우)
- 총 금액 - 보증금과 기타 해당 수수료를 포함한 최종 징수 금액
- 오늘 지불 – 징수해야 할 잔액

**참고:** 보증금이 카드 파일 보관으로 설정된 경우, 결제 요약의 총 금액에서 보증금 금액이 제외되지만, 나중에 징수할 수 있으며 명시적으로 청구되기 전까지는 미납 금액으로 간주되지 않습니다.

---

## 내부 메모

이 섹션을 사용하여 상황별 메모를 추가하거나 운영 세부사항을 기록합니다.

- 내부 메모 추가: 지침, 고객 요청 또는 내부 알림을 추가합니다.

![내부 메모](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056087616/original/yE7it8m7nlORVyV7EPcD-Wa35Phkld_5Tg.png?1760549796)

---

## **예약 상태 설정**

저장하기 전에 예약의 **초기 상태**를 선택할 수 있습니다:

- **미확인(Unconfirmed)** – 예약이 기록되었지만 아직 확정되지 않음; 임시 렌탈에 유용
- **예약 완료(Booked)** – 예약이 즉시 확정됨

이러한 유연성으로 관리자는 임시 보류나 수동 확정 예약을 관리할 수 있습니다.

![예약 상태](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056087554/original/HF-gFQyknlDPM3UWR6IwlgxbrnnDnGyfUQ.png?1760549742)

---

## **저장 및 확인**

모든 필드가 완성되면:

- 고객 및 리스팅 세부정보를 검토합니다.
- **변경사항 저장(Save Changes)**을 클릭합니다.
- 예약이 예약 목록 보기에 나타납니다.

![저장 및 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056087649/original/e-B0GVPyyGHbMqbbAyy2jImm8TN3Tz3gmA.png?1760549856)

---

## **자주 묻는 질문**

**Q: 지금 당장 결제를 받지 않고도 예약을 생성할 수 있나요?**
네. 결제 없이 저장한 후, 나중에 **예약 편집**을 열어서 전체 잔액이나 보증금을 징수할 수 있습니다.

**Q: 결제 요약에 보증금이 나타나지 않는 이유는 무엇인가요?**
글로벌 설정에서 보증금이 활성화되어 있고 변형의 보증금이 $0으로 설정되지 않았는지 확인하세요.

**Q: 시간이 버퍼와 겹치거나 재고가 없으면 어떻게 되나요?**
오류가 표시되거나 저장이 비활성화됩니다. 버퍼를 존중하도록 시간을 조정하거나 사용 가능한 재고로 예약을 줄이세요.

**Q: 다중 리스팅 예약은 어떻게 가격이 책정되고 표시되나요?**
각 리스팅은 고유한 가격과 결제 상태를 가진 별도 행이 됩니다. 모든 행이 결제될 때까지 예약이 부분 결제됨으로 표시될 수 있습니다.

---
*원문 최종 수정: Tue, 3 Mar, 2026 at 5:47 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*