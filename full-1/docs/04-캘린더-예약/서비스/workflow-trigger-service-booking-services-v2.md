---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006140-workflow-trigger-service-booking-services-v2-
번역일: 2026-11-06
카테고리: 04-캘린더-예약
---

# 워크플로우 트리거 — Service Booking(서비스 예약) (Services v2)

**Service Booking**(서비스 예약) 워크플로우 트리거가 무엇인지, 언제 실행되는지, 예약 상태 트리거와 어떻게 다른지 설명해요. 워크플로우에서 이 트리거를 처음 쓰기 전에 읽어 보세요.

## Service Booking 트리거란?

**Service Booking** 트리거를 쓰면 서비스 예약이 만들어지거나 업데이트될 때마다 워크플로우를 자동으로 실행할 수 있어요. 서비스 예약 하나에는 여러 서비스(예약)가 들어갈 수 있어요.

개별 캘린더 예약 단위로 동작하는 예약 트리거와 달리, 이 트리거는 대표 예약 단위로 동작해요. 고객이 헤어컷, 페이셜, 마사지를 한 번에 결제하며 예약해도 워크플로우는 3번이 아니라 전체 예약에 대해 한 번만 실행돼요. 그래서 같은 작업이 중복되지 않고, 모든 서비스 정보도 한곳에서 쓸 수 있어요.

![Service Booking 트리거 개요 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053330224/original/74B0X4pUs3yQIxMSbgOcw2RPzUQGq7LZcg.png?1757367116)

---

## Service Booking 트리거의 장점

이 트리거를 언제 쓰면 좋은지 판단하는 데 도움이 돼요.

- 중복 메시지 방지: 여러 서비스를 구매해도 예약 1건당 한 번만 실행되어 메시지가 깔끔하게 나가요.
- 개인화된 안내: 예약 세부 정보(서비스, 날짜/시간, 소요 시간, 직원, 애드온, 시간대)를 넣으면 고객이 자신이 예약한 내용을 정확히 알 수 있어요.
- 알맞은 대상 선택: 상태, 서비스, 카테고리, 태그, 위치, 예약을 만들거나 수정한 사람으로 필터링해서 필요한 사람에게만 메시지를 보낼 수 있어요.
- 여러 서비스 요약: 확인 메시지 하나에 예약한 모든 서비스와 선택한 애드온을 나열할 수 있어서 혼란과 추가 문의가 줄어요.

---

## 트리거가 실행되는 때

다음 경로로 **새 서비스 예약이 만들어질 때** 워크플로우가 실행돼요.

- 예약 페이지: 고객이 온라인에서 직접 예약할 때
- 사용자: 직원이 직접 예약을 만들 때

---

## 예약 상태 트리거와의 차이

예약 단위 자동화와 개별 예약 단위 자동화가 섞이지 않도록 핵심 동작을 비교해 보세요.

- **Appointment Status**(예약 상태) 트리거는 캘린더 예약에만 적용돼요.
- **Service Booking** 트리거는 Services (v2) 예약에만 적용돼요.
- 예약자가 서비스 예약 하나에 여러 서비스(예: 5개)를 담아 예약해도 워크플로우는 5번이 아니라 한 번만 실행돼요.
  - 예: 워크플로우 액션이 **Send Email**(이메일 보내기)이면, 서비스 예약 커스텀 값을 사용한 경우 예약한 모든 서비스가 담긴 이메일이 한 통만 발송돼요.

---

## 사용 가능한 필터

필터를 쓰면 어떤 예약에서 워크플로우를 시작할지 좁힐 수 있어요. 이 트리거에서 쓸 수 있는 필터는 다음과 같아요.

- **Appointment Status**(예약 상태): Unconfirmed(미확인), Confirmed(확정), Showed(방문), No Show(노쇼), Cancelled(취소), Invalid(유효하지 않음)
- **Created By / Modified By**(생성자 / 수정자)
- **Has Tag**(태그 있음)
- **In Service**(특정 서비스)
- **In Service Category**(서비스 카테고리, 서비스 묶음)
- **In Service Location**(서비스 위치)

![트리거 필터 목록 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053330014/original/y59aJF0FVY2oOgYVJvD4v4aBtQbpW2PxDA.png?1757366323)

---

## 트리거가 보이는 조건

이 트리거는 서브 계정에서 Services (v2)가 켜져 있을 때만 보여요. 서브 계정에서 Services (v2)가 꺼져 있으면 다음과 같아요.

- 새 워크플로우: **Service Booking** 트리거를 선택할 수 없어요.
- 이미 이 트리거가 들어 있는 기존 워크플로우:
  - 새 예약에는 실행되지 않아요(트리거가 실행되지 않고 차단돼요).
  - 기존 예약: 예약 상태가 업데이트되면 워크플로우가 평소처럼 실행돼요.

---

## 서비스 예약과 Order Submitted 트리거의 동작

서비스 예약이 만들어지면 기본적으로 주문이 자동으로 생성돼요. 자동화가 중복되지 않도록, 서비스 예약으로 만들어진 주문에는 **Order Submitted**(주문 제출됨) 트리거가 실행되지 않아요.

이런 주문에도 워크플로우를 실행하고 싶다면 필터를 직접 추가해야 해요.

- **Order Source = Calendar**(주문 출처 = 캘린더)

**Order Submitted** 트리거에 **Order Source = Calendar** 필터를 적용하면, 주문 기반 워크플로우가 서비스 예약 주문에서도 실행돼요. 원할 때만 실행되도록 하는 방법이에요.

![Order Submitted 트리거에 Order Source 필터를 적용한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053330194/original/k1mro9IrxC3iuEYayMYeg3vM26gjCjjsOg.png?1757366998)

---

## 지원되는 예약 액션

| 액션 | 상태 | 비고 |
| --- | --- | --- |
| **Update Appointment Status**(예약 상태 업데이트) | ✅ 지원 | 서비스 예약 ID 기준 |
| **Create Appointment Note**(예약 메모 만들기) | ✅ 지원 | 서비스 예약 ID 기준. 메모는 서비스 예약 전체에 적용돼요 |
| **Book Appointment**(예약하기) | 지원되지 않음 | 해당 없음 |
| **Conversation AI Booking Bot**(대화 AI 예약 봇) | 지원되지 않음 | 해당 없음 |
| **Eliza Booking**(Eliza 예약) | 지원되지 않음 | 해당 없음 |

---

## 서비스 예약에서 커스텀 값 사용하기

고객이 서비스를 예약하면 서비스 이름, 날짜, 시간, 가격, 직원, 애드온 같은 예약 세부 정보를 이메일, 문자, 리마인더에 자동으로 넣을 수 있어요.

### 어떤 정보를 쓸 수 있나요?

예약한 서비스마다 다음 정보를 표시할 수 있어요.

- **서비스 이름**: 예: "헤어컷", "마사지"
- **가격**: 서비스 요금
- **소요 시간**: 서비스에 걸리는 시간(예: 60분)
- **날짜 & 시간**: 예약된 일정
- **시간대**: 고객의 현지 시간대
- **Assigned Staff**(담당 직원): 예약을 맡은 팀원
- **애드온**: 고객이 선택한 추가 항목(가격 포함)

여러 서비스를 함께 예약하면 서비스와 해당 애드온이 차례대로 나열돼요.

### 예시: 템플릿에서는 이렇게 보여요

```
{{#each serviceBooking.services}}
  {{this.name}} - {{this.duration}} | Price: {{this.price}}  
  Date: {{this.startDate}} at {{this.startTime}} ({{this.timezone}})  
  With: {{this.assignedUser}}  

  {{#if addOns}}
    Add-ons:  
    {{#each addOns}}
      - {{this.addonName}} ({{this.addonPrice}})  
    {{/each}}
  {{/if}}
{{/each}}
```

이 코드가 하는 일은 다음과 같아요.

- `{{#each serviceBooking.services}} ... {{/each}}` 블록은 예약한 서비스마다 안의 내용을 반복해요.
- 고객이 서비스 3개를 예약하면 이 부분이 3번(서비스마다 한 번씩) 반복돼요.
- 애드온을 선택했다면 해당 서비스 아래에 나열돼요.

```
커스텀 값에 대해 더 알고 싶으신가요? How to use Custom Values 문서를 확인하세요.
```

---

## 추가 정보 넣기

직원 전체 이름처럼 다른 정보를 보여 주고 싶다면, 블록 안에 커서를 두고 원하는 항목의 플레이스홀더를 추가하면 돼요.

**직원 이름을 포함한 예시:**

```
{{#each serviceBooking.services}}
  {{this.name}} - {{this.duration}} | Price: {{this.price}}  
  Staff User: {{this.user.name}}  
  Date: {{this.startDate}} at {{this.startTime}} ({{this.timezone}})  
  With: {{this.assignedUser}}  
{{/each}}
```

이렇게 하면 고객이 예약한 서비스 내용을 정확히 담아 확인 이메일이나 리마인더를 맞춤으로 만들 수 있어요.

---

## Service Booking 워크플로우 트리거 설정하기

설정을 제대로 해 두면 워크플로우가 알맞은 시점에, 알맞은 예약에서 실행되고 필요한 정보를 전달해요.

#### 1단계: 워크플로우 만들기 또는 열기

1. 왼쪽 메뉴에서 **자동화**를 선택하세요.
2. 기존 워크플로우를 열려면 워크플로우 이름을 클릭하세요.
3. 새 워크플로우를 만들려면 **+ Create New Workflow**(새 워크플로우 만들기) 버튼을 클릭하세요.

![워크플로우 목록에서 새 워크플로우를 만드는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053330552/original/8mnO8MtsgUsvrH1FulZYq5FAXczERNnRRQ.png?1757368242)

#### 2단계: 트리거 추가하기

1. **+ Add New Trigger**(새 트리거 추가)를 클릭해서 새 트리거를 만드세요.
2. 검색창에서 **Service Booking** 트리거를 선택하세요.

![검색창에서 Service Booking 트리거를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053330579/original/jPqZY7tm_rQ5-XszfSXqlLvZ4_oTosnmcQ.png?1757368385)

#### 3단계: 필터 추가하기

1. 필요한 필터로 트리거를 설정하세요. 필터 종류는 [사용 가능한 필터](#사용-가능한-필터)를 참고하세요.
2. 설정을 마치면 파란색 **Save Trigger**(트리거 저장) 버튼을 눌러 저장하세요.

![필터를 설정하고 Save Trigger 버튼을 누르는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053330615/original/EXx6UxQFcMR3aBDIhp2i5BldgCcArKyP9w.png?1757368482)

---

## 자주 묻는 질문

### 서브 계정에서 Service Booking 트리거를 쓰려면 어떻게 하나요?
Services (v2)가 켜져 있는지 확인하세요. Services가 꺼져 있으면 새 워크플로우에서 이 트리거를 쓸 수 없어요. Services를 켜는 방법은 "Services - Overview & How to Get Started" 문서를 참고하세요.

### 확인 메시지나 리마인더에 직원 정보를 넣을 수 있나요?
네. 커스텀 값을 사용하면 담당 직원(또는 가격, 날짜, 위치 같은 다른 정보)을 메시지에 넣을 수 있어요.
