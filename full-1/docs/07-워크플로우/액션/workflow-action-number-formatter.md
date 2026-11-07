---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003355-workflow-action-number-formatter
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Number Formatter(숫자 포맷터)

**Number Formatter**(숫자 포맷터) 액션으로 워크플로우 안에서 숫자 필드를 변환하고 만들 수 있어요. 이 문서에서는 액션 유형별 설정 항목과 사용 예시를 설명해요.

## Overview(개요)

**Number Formatter** 액션은 숫자 필드의 형식을 바꾸거나 새로 만들 때 써요. 다음 기능이 있어요.

- 텍스트를 숫자로 변환
- 숫자 서식 지정
- 전화번호 서식 지정
- 통화 서식 지정
- 난수(무작위 숫자) 생성

## Action Name(액션 이름)

**Number Formatter**

## Action Details(액션 상세 정보)

### Text to Number(텍스트를 숫자로)

숫자 모양의 텍스트를 숫자 형식으로 바꿔요. 예를 들어 "$12,345.67"은 12345.67이 돼요.

![Text to Number 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032444844/original/gQMRG6tJfZ6hZNRMhH63SfFLy1uiA5aOHw.png?1725710234)

#### Action Details

| 필드 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Action Name**(액션 이름) | 액션의 이름이에요. 원하는 대로 바꿀 수 있어요. | 예 |
| **Action Type**(액션 유형) | 실행할 동작을 정해요. 여기서는 **Text to Number**(텍스트를 숫자로)로 설정해요. | 예 |
| **Select Field**(필드 선택) | 숫자가 텍스트로 들어 있는 필드를 선택해요. | 예 |
| **Input Decimal Mark**(입력 소수점 표시) | 입력값에서 소수점을 어떻게 표시하는지 지정해요(예: 마침표). | 예 |

#### 워크플로우 설정 예시

- **Trigger**(트리거): **Form Submitted**(폼 제출)
- **Action**(액션): 텍스트를 숫자로 바꿔 결제 데이터를 정확하게 처리해요.

---

### Format Number(숫자 서식)

소수 자릿수, 천 단위 구분 기호 같은 설정에 맞춰 숫자의 서식을 지정해요.

![Format Number 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032444854/original/dnFaP_6cfkINQQDk-mw24WbLN76-c3SPhg.png?1725710280)

#### Action Details

| 필드 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Action Name** | 액션의 이름이에요. 원하는 대로 바꿀 수 있어요. | 예 |
| **Action Type** | 실행할 동작을 정해요. 여기서는 **Format Number**로 설정해요. | 예 |
| **Select Field** | 숫자가 들어 있는 필드를 선택해요. | 예 |
| **Input Decimal Mark** | 입력한 숫자에 현재 쓰이는 소수점 표시를 지정해요. | 예 |
| **To Format**(출력 형식) | 숫자를 어떤 형식으로 내보낼지 정해요(예: 마침표). | 예 |

#### 워크플로우 설정 예시

- **Trigger**: **Trigger link clicked**(트리거 링크 클릭)
- **Action**: 통계 데이터를 메시지에 보여 주기 위해 숫자 서식을 지정해요.

---

### Format Phone Number(전화번호 서식)

전화번호를 원하는 형식(예: (123) 456-7890)으로 통일해요.

![Format Phone Number 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032444859/original/419_JP_zpjRBHacVlD2xJiT6EGUaYHhR7A.png?1725710312)

#### Action Details

| 필드 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Action Name** | 액션의 이름이에요. 원하는 대로 바꿀 수 있어요. | 예 |
| **Action Type** | 실행할 동작을 정해요. 여기서는 **Format Phone Number**로 설정해요. | 예 |
| **Select Field** | 전화번호가 들어 있는 필드를 선택해요. | 예 |
| **To Format** | 전화번호를 어떤 형식으로 바꿀지 정해요(예: E.164). | 예 |
| **Phone Number Country Code**(전화번호 국가 코드) | 전화번호의 국가를 지정해요. | 예 |

#### 워크플로우 설정 예시

- **Trigger**: **Appointment Booked**(예약 완료)
- **Action**: 아웃바운드 통화에 쓸 수 있도록 연락처의 전화번호 형식을 정리해요.

---

### Format Currency(통화 서식)

지역(로케일)별 설정을 반영해 숫자 값을 통화 형식으로 바꿔요.

![Format Currency 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032444872/original/pH52nzLK7Onyn_kOPmXka47rSrGcJGpx8w.png?1725710337)

#### Action Details

| 필드 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Action Name** | 액션의 이름이에요. 원하는 대로 바꿀 수 있어요. | 예 |
| **Action Type** | 실행할 동작을 정해요. 여기서는 **Format Currency**로 설정해요. | 예 |
| **Select Field** | 숫자 값이 들어 있는 필드를 선택해요. | 예 |
| **Currency**(통화) | 통화 종류를 정해요(예: USD, EUR). | 예 |
| **Currency Locale**(통화 로케일) | 통화에 적용할 로케일 형식을 정해요(예: en-US). | 예 |

#### 워크플로우 설정 예시

- **Trigger**: **Payment Received**(결제 완료)
- **Action**: 영수증에 금액이 정확히 표시되도록 통화 서식을 지정해요.

---

### Random Number(난수)

지정한 범위 안에서 무작위 숫자를 만들어요.

![Random Number 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032444877/original/bq9cnzChFLQ4_z0uujoqQsN8iSqWpJtNEQ.png?1725710371)

#### Action Details

| 필드 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Action Name** | 액션의 이름이에요. 원하는 대로 바꿀 수 있어요. | 예 |
| **Action Type** | 실행할 동작을 정해요. 여기서는 **Random Number**로 설정해요. | 예 |
| **Lower Range**(하한) | 생성할 난수의 최솟값이에요. | 예 |
| **Upper Range**(상한) | 생성할 난수의 최댓값이에요. | 예 |
| **Decimal Points**(소수점 자릿수) | 허용할 소수점 자릿수를 정해요. | 아니요 |

#### 워크플로우 설정 예시

- **Trigger**: **Email Opened**(이메일 열람)
- **Action**: A/B 테스트에 쓸 난수를 만들어요.
