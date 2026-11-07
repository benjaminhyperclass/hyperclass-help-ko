---
원문: /support/solutions/articles/155000003357-workflow-action-event-start-date
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Event Start Date(이벤트 시작 날짜)

**Event Start Date**(이벤트 시작 날짜) 액션은 특정 날짜와 시간을 정해 두고, 이를 기준으로 **Wait**(대기) 이벤트나 이후 액션이 실행되게 하는 액션이에요. 후속 액션의 타이밍을 특정 시간이나 요일에 맞출 수 있어서 실행 시점을 더 세밀하게 조절할 수 있어요.

## 액션 이름

**Event Start Date**(이벤트 시작 날짜)

## 액션 설명

**Event Start Date** 액션은 특정 날짜, 시간 또는 커스텀 필드 값을 이후 워크플로우 액션의 기준 시점으로 정해요. 특히 **Wait** 이벤트와 함께 쓰면, 정해 둔 이벤트 시간을 기준으로 액션을 멈추거나 실행할 수 있어요. 후속 안내, 리마인더 같은 예약 작업을 자동화할 때 유용해요.

## 액션 상세 정보

### Specific Day(특정 일)

![Specific Day 유형을 선택한 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032445509/original/iwafksQDf_H0H5RLys6FTyLMe12XPHXRmg.png?1725713040)

![Specific Day 유형을 선택한 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032445558/original/NF4KiMa2-WOZCmfGmjoWXszo7CKkD3JY5w.png?1725713140)

### Custom Field(커스텀 필드)

### Specific Date and Time(특정 날짜 및 시간)

![Specific Date/Time 유형을 선택한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032445569/original/lnBfAlpPR6O72bkGrAG9ycyxviTT5JWDTg.png?1725713232)

### 설정 방법

1. **Action Name**(액션 이름): 이 액션을 설명하는 이름을 입력해요. 예: "웨비나 이벤트 시작 시간"
2. **Type**(유형): 아래 옵션 중에서 선택해요.
   - **Specific Day**: 반복되는 특정 일을 정하고 싶을 때 선택해요. 예: 매월 며칠, 매주 무슨 요일
   - **Specific Date/Time**: 정확한 날짜와 시간을 정하고 싶을 때 선택해요. 예: 2024년 9월 14일 오전 10시 30분
   - **Custom Field**: 커스텀 필드에 저장된 날짜를 가져와요. 예: "이벤트 등록일"을 담은 필드
3. **Select Custom Field**(커스텀 필드 선택): **Custom Field** 유형을 선택했을 때만 보여요. 날짜가 저장된 커스텀 필드를 선택해요.
4. **Select Date**(날짜 선택): **Specific Date/Time** 유형을 선택했을 때만 보여요. 날짜 선택 창에서 날짜와 시간을 골라요.
5. **Current Day of Month/Week**(현재 월의 일/주의 요일): **Specific Day** 유형을 선택했을 때만 보여요. 이벤트 시작을 현재 월의 일 기준으로 할지, 현재 주의 요일 기준으로 할지 선택해요.

### 필드 상세 정보

| 필드 이름 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Action Name** | 워크플로우에서 이 액션에 붙이는 이름이에요. | 예 |
| **Type** | **Specific Day**, **Specific Date/Time**, **Custom Field** 중에서 선택해요. | 예 |
| **Select Custom Field** | **Custom Field** 유형을 선택하면 나타나요. 날짜가 저장된 커스텀 필드를 선택해요. | 아니요 |
| **Select Date** | **Specific Date/Time** 유형을 선택하면 나타나요. 날짜 선택 창에서 날짜를 골라요. | 아니요 |
| **Current Day of Month/Week** | **Specific Day** 유형을 선택하면 나타나요. 일 기준 또는 주 기준 트리거를 고를 수 있어요. | 예 |

## 예시

- **Type**: **Specific Date/Time**
  - 사용 예: 특정 날짜에 열린 이벤트가 끝나고 일주일 뒤에 후속 이메일을 보내고 싶을 때
  - 설정 예: 이벤트 시작일로 `2024년 9월 14일`을 선택해요. 워크플로우는 이 날짜를 이후 모든 시간 기반 액션의 기준 시점으로 사용해요.
- **Type**: **Custom Field**
  - 사용 예: "이벤트 등록일" 같은 커스텀 날짜 필드를 기준으로 후속 액션을 설정하고 싶을 때
  - 설정 예: 워크플로우가 `이벤트 등록일` 커스텀 필드에서 날짜를 가져와요. 그 날짜를 기준으로 리마인더 이메일 발송이나 작업 배정 같은 후속 액션을 실행해요.
- **Type**: **Specific Day**
  - 사용 예: 반복되는 이벤트나 작업에서 현재 월의 일 또는 현재 주의 요일을 기준으로 액션을 자동화하고 싶을 때
  - 설정 예: "Current Day of Month"를 선택하면 매월 1일마다 반복되는 리마인더를 설정할 수 있어요.

## 추가 참고 사항

- 날짜 형식: 날짜와 시간을 올바른 형식(예: MM-DD-YYYY HH)으로 입력하세요. 그래야 워크플로우 타이밍에 오류가 생기지 않아요.
- 활용 예: 리마인더, 후속 안내처럼 특정 날짜에 따라 실행되는 액션을 자동화할 때 잘 맞아요.
- 트리거 활용: 이 액션을 **Wait** 이벤트와 함께 쓰면, 연락처를 특정 날짜나 시간까지 기다리게 한 뒤 다음 액션으로 넘어가게 할 수 있어요.
