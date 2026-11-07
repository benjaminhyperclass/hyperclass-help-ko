---
원문: /support/solutions/articles/48001202784-workflow-action-stripe-one-time-charge
번역일: 2026-11-06
카테고리: 42-통합
---

# 워크플로우 액션 — Stripe One-Time Charge(Stripe 일회성 결제)

**Stripe One-Time Charge** 액션을 쓰면 리드, 예약, 폼 제출이 생길 때마다 고객에게 자동으로 결제를 청구할 수 있어요. 인보이스를 직접 보내지 않아도 돼서 결제 과정이 훨씬 간단해져요. 이 문서에서는 기능 소개, 장점, 사전 준비, 설정 방법을 차례로 안내해요.

---

## Stripe One-Time Charge 워크플로우 액션이란?

**Stripe One-Time Charge**(Stripe 일회성 결제)는 특정 이벤트가 생길 때마다 정해 둔 금액을 청구하는 워크플로우 액션이에요. 이벤트는 폼 제출, 예약 부킹, 그 밖에 미리 정해 둔 트리거 어느 것이든 될 수 있어요. 이벤트가 발생하면 워크플로우가 고객의 Stripe ID로 결제를 자동 처리해요. 사람이 따로 손댈 필요가 없어요.

예를 들어 리드당 비용을 받는 에이전시라면, 조건에 맞는 리드가 폼을 작성할 때마다 클라이언트에게 자동으로 결제를 청구할 수 있어요. 인보이스를 보내고 독촉하지 않아도 바로 결제를 받을 수 있어요.

---

## Stripe One-Time Charge 액션의 장점

워크플로우에서 이 기능을 쓰면 다음과 같은 점이 좋아요.

- 자동 청구: 워크플로우 트리거에 맞춰 고객에게 자동으로 청구하므로 인보이스를 직접 만들 필요가 없어요.
- 안정적인 연동: Stripe와 연동되어 안전하고 믿을 수 있는 방식으로 결제가 처리돼요.
- 트리거 맞춤 설정: 예약 확정, 폼 제출처럼 원하는 조건에 따라 청구할 수 있어요.

---

## 사전 준비: Stripe 계정을 하이퍼클래스에 연결하기

**Stripe One-Time Charge** 액션을 쓰려면 먼저 Stripe 계정을 하이퍼클래스에 연결해야 해요. 방법은 다음과 같아요.

1. Stripe 일회성 결제 자동화를 사용할 서브 계정에서 **설정**으로 이동하세요.
2. **연동** 탭을 클릭하세요.
3. Stripe 계정 연결(Connect to Your Stripe Account)을 선택하세요.
4. Stripe에 로그인한 뒤 하이퍼클래스에 접근 권한을 허용하세요.
5. 연결이 끝나면 하이퍼클래스 계정이 Stripe와 연결되어 결제를 처리할 수 있어요.

---

## 하이퍼클래스에서 Stripe One-Time Charge 액션 설정하기

Stripe 연동을 마치고 고객 ID(Customer ID)도 준비했다면, 아래 순서대로 액션을 설정하세요.

### 워크플로우 만들기 또는 열기

**자동화 > 워크플로우**로 이동하세요. 새 워크플로우를 만들거나 기존 워크플로우를 여세요.

![워크플로우 목록 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040882420/original/BnEH3nUsbAZFpcXLXGMkSn6afNHShGM_GA.png?1738569039)

### 워크플로우 트리거 설정하기

**Add New Trigger**(새 트리거 추가)를 클릭하세요. 아래로 스크롤해 사용할 수 있는 트리거를 확인하고, 워크플로우에 맞는 트리거를 선택하세요(예: **Form Submission**(폼 제출), **Appointment Booking**(예약 부킹)). 특정 폼, 예약 캘린더, 확정 상태 같은 조건으로 필터를 적용할 수 있어요.

![트리거 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040882453/original/oewXBKr-qM8eY-G8-2i184vjhCGMWgTaHg.png?1738569069)

### Stripe One-Time Charge 액션 추가하기

**+** 아이콘을 클릭해 액션을 추가하세요. **Stripe One-Time Charge**를 검색해서 선택하세요.

![Stripe One-Time Charge 액션 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040882471/original/yEcVDqjyWJMNU0ZbVWP5Jsiu9gKbgYtarg.png?1738569092)

### 액션 이름 바꾸기

액션 이름은 기본적으로 "Stripe One-Time Charge"로 정해져 있어요. 알아보기 쉽게 이름을 바꿀 수 있어요. 액션의 용도가 드러나는 이름을 붙이면 한눈에 파악하기 좋아요.

![액션 이름 변경 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040882546/original/xy7HyiwE0J_klKO4PapMOIZVMtLNjs830Q.png?1738569141)

### Customer ID 입력하기

Stripe로 고객에게 결제를 청구하려면 그 고객의 Stripe 고객 ID가 필요해요. 고객 ID는 Stripe가 고객마다 부여하는 고유 번호예요. 이 ID가 없으면 워크플로우가 결제를 처리할 수 없어요. Stripe 대시보드에서 코드(고객 ID)를 복사해 **Customer ID**(고객 ID) 필드에 붙여넣으세요.

**Stripe 고객 ID 찾는 방법**

1. Stripe 계정에 로그인하세요.
2. **고객** 탭으로 이동하세요.
3. 해당 고객을 클릭하세요.
4. **상세 정보**에서 **고객 ID**를 찾아 복사하세요.

Stripe로 결제한 적이 없는 고객은 아직 고객 ID가 없을 수 있어요. 이럴 때는 Stripe에서 고객을 직접 만들어야 할 수 있어요.

**고객을 직접 만드는 방법**

Stripe 대시보드 > **고객** 탭 > **+ 고객 추가**를 클릭하세요.

고객을 만들면 Stripe가 고객 ID를 발급해요. 이 ID를 이후 결제에도 쓸 수 있어요.

![Customer ID 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040882605/original/nbYrQSL9BSC3L7uUYVB4mUl5kqVocvdvbg.png?1738569171)

### Description 입력하기

**Description**(설명)에 결제 내용을 적어 두면 기록을 정리하기 쉬워요. 청구 목적을 적으면 돼요(예: "예약 리드 수수료"). 이 설명은 Stripe에도 표시돼서 나중에 결제를 추적하고 정산할 때 편해요.

![Description 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040882663/original/NhgztZ12aQ1tbMjaTSW3sRNtpKnI9sFgww.png?1738569220)

### Amount 입력하기

**Amount**(금액) 필드에 청구할 금액을 입력하세요. 금액이 매번 다르다면 옆의 태그 아이콘을 눌러 **Custom Variable Picker**(커스텀 변수 선택기)에서 동적 값을 고르세요. 그러면 금액이 자동으로 정확하게 청구돼요.

![Amount 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040882689/original/3VWeqz9y1yjzVcKe327RGVb4DIyUtdGouA.png?1738569251)

### Currency 선택하기

**Currency**(통화) 드롭다운에서 청구할 통화를 선택하세요. 비즈니스나 클라이언트가 있는 지역에 맞는 통화로 결제가 처리돼요.

![Currency 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040882719/original/0QyPdSX_9I-QSGHscDJajADlZ5E11V2Jxg.png?1738569281)

```
저장 및 게시

- 워크플로우 빌더에서 변경한 내용을 적용하려면 Save 버튼을 클릭하세요.

- 워크플로우를 활성화하려면 Publish 토글을 켜세요.

워크플로우 테스트

- 워크플로우를 실행시키는 예약을 잡거나 폼을 제출해 보세요.

- 워크플로우 빌더의 Enrollment History 탭에서 결제가 처리됐는지 확인하세요.

- Stripe에 로그인해 결제 거래가 생겼는지 확인하세요.
```

---

## 자주 묻는 질문

### Stripe 고객 ID 없이도 고객에게 결제를 청구할 수 있나요?

아니요. 워크플로우로 결제를 처리하려면 Stripe 고객 ID가 꼭 필요해요.

### 결제가 실패하면 어떻게 되나요?

결제가 실패하면 Stripe 거래 내역에 오류가 표시되고, 결제는 처리되지 않아요.

### 필요하면 환불할 수 있나요?

네. Stripe에서 **결제** 탭으로 이동해 해당 거래를 선택하면 바로 환불할 수 있어요.

### 트리거마다 다른 금액을 청구할 수 있나요?

네. 트리거별로 청구 금액을 다르게 설정한 워크플로우를 여러 개 만들면 돼요.

### 구독 결제에도 쓸 수 있나요?

아니요. 이 액션은 일회성 결제 전용이에요. 구독 결제는 Stripe의 반복 결제 기능을 사용하세요.

### 이 액션으로 리드에게 결제를 청구할 수 있나요?

Stripe One-Time Charge 액션은 서브 계정이 자기 연락처에게 청구하려고 만든 기능이 아니에요. 에이전시가 서브 계정 관리자에게 청구하는 용도예요.
