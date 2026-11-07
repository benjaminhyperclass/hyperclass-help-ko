---
원문: /support/solutions/articles/155000003354-workflow-action-dare-time-formatter
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Date/Time Formatter(날짜/시간 포맷터)

워크플로우 안에서 날짜 필드의 형식을 바꾸거나 두 날짜를 비교할 때 쓰는 액션이에요. 날짜를 조건이나 출력 형식에 맞게 바꾸거나 비교해야 할 때 사용하세요.

## 개요

**Date/Time Formatter**(날짜/시간 포맷터) 액션은 워크플로우 안에서 날짜 필드의 형식을 바꾸거나 날짜끼리 비교해요. 날짜를 특정 조건이나 출력 형식에 맞게 변환하거나 평가할 수 있어요.

## 액션 이름

**Date/Time Formatter**

## 액션 설명

### 1. Format Date(날짜 형식 변환)

- 설명: 워크플로우 안에서 날짜 필드를 한 형식에서 다른 형식으로 바꿔요. 예를 들어 "MM/DD/YYYY" 형식의 날짜를 "YYYY-MM-DD"로 바꿔 리포트나 커뮤니케이션에서 날짜 형식을 통일할 수 있어요.
- 사용 사례: 여러 시스템이나 리포트에서 날짜 형식을 똑같이 맞춰야 할 때 유용해요.

### 2. Format Date and Time(날짜 및 시간 형식 변환)

- 설명: 날짜와 시간 필드를 한 형식에서 다른 형식으로 함께 바꿔요. 날짜와 시간이 모두 들어 있는 타임스탬프를 변환할 때 특히 유용해요.
- 사용 사례: 예약이나 타임스탬프를 다루는 워크플로우에서 날짜와 시간 형식을 모두 바꿔야 할 때 좋아요.

### 3. Compare Dates(날짜 비교)

- 설명: 두 날짜를 비교해 어느 쪽이 더 이른지, 더 늦은지, 또는 같은지 판단해요. 한 날짜가 다른 날짜로부터 특정 기간 안에 있는지에 따라 액션을 실행하는 데 쓸 수 있어요.
- 사용 사례: 등록일과 이벤트 날짜를 비교하는 것처럼 시간에 민감한 비교가 필요한 워크플로우에 알맞아요.

## 액션 상세 정보

### Format Date

![Format Date 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032443696/original/EB9x6SiLjUy0ebJ5-CPftaRAP5VX_ypYEA.png?1725706090)

#### 액션 상세 정보

| 필드 이름 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Action Name**(액션 이름) | 이 액션에 붙일 고유한 이름이에요. | 예 |
| **Action Type**(액션 유형) | 형식 변환 액션의 유형을 선택해요(Format Date, Compare Dates).| 예 |
| **Field**(필드) | 형식을 바꾸거나 비교할 날짜 필드를 선택해요. | 예 |
| **From Format**(변환 전 형식) | 날짜 필드의 현재 형식을 지정해요. | 예 |
| **To Format**(변환 후 형식) | 날짜 필드에 적용하고 싶은 형식을 지정해요. | 예 |

#### 워크플로우 예시

- 트리거: **Form Submission**(폼 제출)
- 액션: 제출 날짜를 YYYY-MM-DD 형식으로 바꿔 리포팅에 활용해요.

---

### Format Date and Time

#### 액션 상세 정보

| 필드 이름 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Action Name** | 이 액션에 붙일 이름이에요. | 예 |
| **Action Type** | **Format Date and Time**을 선택해요. | 예 |
| **Field** | 형식을 바꿀 날짜와 시간이 들어 있는 필드예요. | 예 |
| **From Format** | 날짜와 시간의 현재 형식이에요(예: DD/MM/YYYY HH:mm). | 예 |
| **To Format** | 날짜와 시간에 적용하고 싶은 형식이에요(예: MM-DD-YYYY HH). | 예 |

#### 워크플로우 예시

- 트리거: **Appointment Created**(예약 생성)
- 액션: 예약 날짜와 시간을 Unix 타임스탬프에서 알아보기 쉬운 형식으로 바꿔 알림에 활용해요.

---

### Compare Dates

![Compare Dates 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032443775/original/KT6ZVL-Tn7GpI94F2E6NzyP0_YFrkDyjdw.png?1725706406)

#### 액션 상세 정보

| 필드 이름 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Action Name** | 이 액션에 붙일 이름이에요. | 예 |
| **Action Type** | **Compare Dates**를 선택해요. | 예 |
| **Start Date**(시작 날짜) | 비교할 첫 번째 날짜 필드예요. | 예 |
| **Start Date Format**(시작 날짜 형식) | 첫 번째 날짜의 형식이에요(예: MM-DD-YYYY). | 예 |
| **End Date**(종료 날짜) | 비교할 두 번째 날짜 필드예요. | 예 |
| **End Date Format**(종료 날짜 형식) | 두 번째 날짜의 형식이에요(예: DD/MM/YYYY). | 예 |

#### 워크플로우 예시

- 트리거: **Event Registration**(이벤트 등록)
- 액션: 등록일과 이벤트 날짜를 비교해, 이벤트가 3일 이내이면 리마인더를 보내요.

## 지원하는 날짜 및 시간 형식

| 형식 유형 | 출력 예시 |
| --- | --- |
| YYYY-MM-DD | 45281 |
| MM-DD-YYYY | 45281 |
| MM/DD/YYYY | 45281 |
| MM/DD/YY | 45281 |
| DD-MM-YYYY | 21-12-2023 |
| DD/MM/YYYY | 21/12/2023 |
| DD/MM/YY | 21/12/23 |
| DD MMM YYYY | 45281 |
| D MMMM YYYY | 45281 |
| MMMM D, YYYY | 45281 |
| MMM DD, YYYY | 45281 |
| MMMM Do YYYY | December 21st, 2023 |
| X (Unix Timestamp) | 1703176259 |
