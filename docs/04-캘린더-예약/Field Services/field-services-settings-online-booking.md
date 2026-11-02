---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009385-field-services-settings-online-booking
번역일: 2026-11-02
카테고리: 04-캘린더-예약 > Field Services
---

# Field Services 설정: 온라인 예약

온라인 예약 설정은 고객이 어떻게 예약하는지를 결정해요. 시간을 어떻게 선택하는지, 얼마나 미리 예약할 수 있는지, 결제는 어떻게 하는지, 서비스를 요청할 때 어떤 양식을 작성하는지까지 모두 여기서 설정합니다. 이 글에서는 각 설정을 하나씩 살펴볼게요.

참고: Field Services는 현재 비공개 베타(private beta) 중이며, 선택된 계정에만 제공돼요. 기능과 화면은 개선 과정에서 변경될 수 있습니다.

## 이 문서에서 다루는 내용

- [온라인 예약 설정 찾는 방법](#where)
- [예약 규칙](#rules)
- [결제](#payments)
- [요청 양식](#form)
- [자주 묻는 질문](#faq)

---

## 온라인 예약 설정 찾는 방법

- **Field Services > Field Services Settings**로 이동하세요.
- **Global settings(전역 설정)** 탭에 그대로 머무릅니다.
- **Online booking(온라인 예약)** 섹션에서 **Booking rules(예약 규칙)**, **Payments(결제)**, **Request form(요청 양식)** 중 원하는 항목을 선택하세요.

설정 메뉴 상단의 검색창을 사용하면 이름으로 원하는 설정을 바로 찾을 수 있어요. 변경한 후에는 오른쪽 상단의 **Save changes(변경사항 저장)**를 클릭하세요. **View booking page(예약 페이지 보기)**를 클릭하면 고객에게 보이는 화면을 확인할 수 있습니다.

---

## 예약 규칙

### 예약 환경설정

고객이 시간을 선택하는 방식을 정할 수 있어요:

| 옵션 | 고객이 하는 행동 |
|---|---|
| **Date and time(날짜와 시간)** | 예약 가능한 시간대 중에서 날짜와 시작 시간을 선택합니다. |
| **Date and time window(날짜와 시간대)** | 정확한 시간 대신 날짜와 오전 8시~11시 같은 시간대를 선택합니다. 시간대는 아래에서 설정하세요. |
| **Date only(날짜만)** | 날짜만 선택합니다. 방문 시간은 나중에 직접 지정합니다. |

### 예약 또는 요청

고객이 예약 페이지를 제출했을 때 어떤 일이 일어날지 정할 수 있어요:

| 옵션 | 일어나는 일 |
|---|---|
| **Booking request(예약 요청)** | 고객이 요청을 보내면 팀에서 방문 일정을 직접 잡습니다. |
| **Instant booking(즉시 예약)** | 고객이 제출하는 즉시 방문이 예약됩니다. **Accept requests when no times are open(예약 가능 시간이 없을 때 요청 받기)**를 체크하면, 예약 가능한 시간이 없을 때 고객이 빈 화면 대신 요청을 보낼 수 있어요. |

### 예약 가능 시간

| 설정 | 기능 |
|---|---|
| **Slot interval(슬롯 간격)** | 예약 가능한 시간 사이의 간격을 분 단위로 지정합니다. |
| **Minimum notice(최소 예약 시간)** | 방문 전 최소 며칠 전에 예약해야 하는지 지정합니다. |
| **Booking window(예약 가능 기간)** | 고객이 얼마나 미리 예약할 수 있는지 지정합니다. **Date-based(날짜 기준)**를 선택하면 오늘부터 일정 일수만큼 연속적으로 보여주거나, 범위 기반 기간을 설정할 수 있어요. **Count available days only(예약 가능한 날만 계산)**를 체크하면 실제로 예약 가능한 날만 계산합니다. |

### 연락처 배정

이 옵션을 켜면 방문이 예약될 때마다 연락처(Contact)가 해당 방문을 담당하는 직원에게 자동으로 배정됩니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084162850/original/7fNXSJt4xTAFTkpXDZxRewuy9vV7wmIPwQ.jpg?1792999547)

---

## 결제

- **Payment mode(결제 모드):** **Test(테스트)**와 **Live(실제)** 모드를 전환할 수 있어요. 테스트 모드에서는 실제 거래가 처리되지 않습니다. 설정 중에는 테스트 모드를 사용하세요.
- **Currency(통화):** 가격에 사용할 통화를 선택하세요. 통화를 변경하면 각 서비스의 가격도 함께 맞춰 업데이트해야 합니다.
- **Payment provider(결제 제공업체):** *No default payment provider found(기본 결제 제공업체 없음)*라는 메시지가 보이면 **Manage payment providers(결제 제공업체 관리)**를 클릭해서 연결하세요. 온라인 결제를 사용하려면 결제 제공업체가 필요해요.

### 예약 결제 옵션

| 옵션 | 일어나는 일 |
|---|---|
| **Online payment(온라인 결제)** | 연락처가 예약할 때 온라인으로 결제합니다. **Allow deposit or full payment choice(보증금 또는 전액 결제 선택 허용)**를 체크하면 보증금만 낼지 전액을 낼지 고객이 선택할 수 있어요. |
| **Pay in-person(현장 결제)** | 직원이 도착했을 때 연락처가 결제합니다. 예약 시에는 카드나 결제 정보를 수집하지 않습니다. |
| **Card on file only(카드 정보만 등록)** | 보안을 위해 카드 정보는 수집하지만, 예약 시점에는 청구되지 않습니다. |

**Taxes(세금):** 수동 세금은 각 서비스 또는 서비스의 상품에서 설정합니다. 설정하고 나면 예약 상세 정보에 세금이 표시돼요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084162852/original/rBBlEq_2HZVjqlhUoixDvE1sQo3YRql-WQ.jpg?1792999550)

참고: 아직 결제 제공업체를 연결하지 않았다면, 고객이 예약을 완료할 수 있도록 Pay in-person(현장 결제)을 선택하세요.

---

## 요청 양식

요청 양식은 고객이 예약 페이지에서 서비스를 요청할 때 작성하는 양식이에요. 기본 **Request Form(요청 양식)**이 자동으로 생성되며, **Used on booking page(예약 페이지에서 사용 중)**로 표시됩니다. 목록에는 해당 양식의 필드 수와 마지막 업데이트 시간이 나타나요. 점 세 개(⋮) 메뉴를 클릭하면 **Edit form(양식 편집)** 또는 **Copy shareable link(공유 링크 복사)**를 선택할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084162853/original/UxFXFNaCyKTn_AcPecGXGl-YvWwT7FuiQA.jpg?1792999552)

---

## 자주 묻는 질문

**Booking request(예약 요청)와 Instant booking(즉시 예약)의 차이가 뭔가요?**
Booking request는 고객이 요청을 보내면 팀에서 시간을 정하는 방식이고, Instant booking은 고객이 빈 시간을 직접 선택하면 즉시 예약이 확정되는 방식이에요.

**고객이 온라인 결제를 못 해요. 왜 그런가요?**
**Manage payment providers(결제 제공업체 관리)**에서 결제 제공업체를 연결하고, 준비가 되면 **Live(실제)** 모드로 전환한 다음 **Online payment(온라인 결제)**를 선택해 주세요.

**이 설정들이 팀원이 앱에서 직접 만든 방문 일정에도 적용되나요?**
아니요. 최소 예약 시간(Minimum notice)과 예약 가능 기간(Booking window)은 예약 페이지를 이용하는 고객에게만 적용돼요. 팀원은 앱 안에서 언제든 자유롭게 일정을 잡을 수 있습니다.

---
*원문 최종 수정: 2026-10-29*
*Hyperclass 사용 가이드 — hyperclass.ai*