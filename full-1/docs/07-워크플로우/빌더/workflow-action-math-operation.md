---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003356-workflow-action-math-operation
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Math Operation(수학 연산)

**Math Operation**(수학 연산) 액션을 쓰면 워크플로우 안에서 숫자나 커스텀 필드끼리 더하기, 빼기, 곱하기, 나누기를 할 수 있어요. 계산이 복잡할 때 여러 단계로 나눠 처리하는 방법도 함께 안내해요.

{% hint style="warning" %}
현재 하나의 **Math Operation** 액션에서는 연산 순서(PEMDAS 또는 BODMAS)가 필요한 복잡한 수식을 처리할 수 없어요. 복잡한 계산은 여러 단계로 직접 나눠서 설정하세요.
{% endhint %}

## Math Operation 액션이란?

**Math Operation** 액션을 쓰면 워크플로우 안에서 바로 계산을 할 수 있어요. 숫자 필드를 더하거나 빼거나 곱하거나 나눈 뒤, 특정 액션이나 트리거에 맞춰 값을 자동으로 업데이트해요. 날짜 필드는 일, 월, 연 단위로 더하거나 뺄 수 있어서 리마인더나 일정처럼 시간과 관련된 작업을 자동화하기 좋아요.

예를 들어 구독형 서비스라면 시작일에 이용 기간을 더해 갱신일을 계산할 수 있어요. 그러면 고객에게 알맞은 시점에 안내를 보낼 수 있어요.

## Math Operation 액션을 쓰면 좋은 점

- 자동화와 효율: 직접 계산하지 않아도 되어 오류가 줄고 시간이 절약돼요. 리드 점수 계산, 수수료 계산, 마감일 관리처럼 반복되는 작업에 알맞아요.
- 맞춤 설정과 연동: 커스텀 필드와 커스텀 값을 쓸 수 있어요. 다른 워크플로우 액션, 트리거, **If/Else**(조건 분기)와 함께 써서 더 정교한 자동화를 만들 수 있어요.
- 정확성과 확장성: 숫자, 금액, 날짜 필드를 정확하게 업데이트해요. 데이터가 많아져도 따로 손이 가지 않고 일정한 성능으로 처리돼요.

## Math Operation 액션 설정하기

필드를 고르고, 계산 방식을 정하고, 결과를 저장할 필드를 지정하는 순서로 설정해요. 동적 필드, 여러 연산, 커스텀 값을 활용하면 계산을 더 정확하게 자동화할 수 있어요.

### 워크플로우 열기

1. 왼쪽 메뉴에서 **자동화** > **워크플로우**로 이동하세요.
2. Math Operation 액션을 추가할 워크플로우를 새로 만들거나 기존 워크플로우를 여세요.

![자동화 메뉴에서 워크플로우 선택하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040699092/original/NToaC5zQG_CWDZ9waZNDP9ev6dPN9EZQ0A.png?1738225302)

### 액션 추가하기

먼저 워크플로우 트리거를 설정하세요. 트리거는 워크플로우가 언제 시작되어 Math Operation을 실행할지 정해요.

1. 트리거 설정을 마친 뒤 **Add Action**(액션 추가)을 클릭하세요.
2. 목록에서 **Math Operation**을 선택하세요.

![Add Action에서 Math Operation 선택하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040699125/original/3tpRQ11Rb27zCnrIPhlbXG_CKPygq6Riug.png?1738225328)

### 액션 이름 정하기

액션 이름은 기본적으로 **Math Operation**이에요. 알아보기 쉬운 이름으로 바꿀 수 있어요. 워크플로우가 복잡할수록 이름만 보고 어떤 액션인지 알 수 있어야 편해요.

![액션 이름 변경하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040699202/original/FCfvGnFRxkKEw-Lqwu48qGT-fowWcRBwkA.png?1738225368)

### 필드 선택하기

이름을 정했다면 계산을 적용할 필드를 골라요. **Select Field**(필드 선택) 드롭다운을 클릭하면 세 가지 항목이 나와요.

- **Date Fields**(날짜 필드): 시스템이 제공하는 날짜 필드로 일정, 리마인더, 나이 확인 같은 날짜 계산을 해요.
  - **Current Date**(현재 날짜): 워크플로우가 실행되는 날짜예요. 오늘을 기준으로 마감일, 후속 연락 리마인더, 앞으로의 일정을 계산할 때 유용해요.
  - **Date of Birth**(생년월일): 연락처에 기록된 생일이에요. 나이 확인, 생일 리마인더, 기념일 계산에 주로 써요.
- **Custom Fields**(커스텀 필드): 내 CRM 설정에 맞게 만든 필드예요. 보험 만기일이나 계약 시작일 같은 필드가 그 예예요. 시스템에 저장된 데이터로 계산하므로 자동 갱신 리마인더, 계약 연장, 단계별 일정 관리에 유용해요.
- **Custom Values**(커스텀 값): 저장된 필드 대신 고정된 값을 직접 입력해요. 날짜에 특정 일수를 더하거나, 리드 점수나 가격을 일정 비율로 올릴 때처럼 고정된 계산에 알맞아요.

![Select Field 드롭다운의 세 가지 항목](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040699271/original/w7SprVSTGgJKJt5Viv52QjPdR8j-q7PPCA.png?1738225424)

### 연산 종류 정하기

**Date Fields**, **Custom Fields**, **Custom Values** 중 하나를 골랐다면 어떤 계산을 할지 정해요.

날짜 필드는 일, 월, 연 단위로 더하거나 뺄 수 있어요. 자동 리마인더, 마감일, 일정 조정을 설정할 때 편해요.

![날짜 필드의 연산 종류](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040699781/original/kyZjAWaK4Mf5TolqKX4E_1XHg1oVTCbFig.png?1738225730)

숫자 필드와 금액 필드는 **Addition**(더하기), **Subtraction**(빼기), **Multiplication**(곱하기), **Division**(나누기) 중에서 골라 값을 자동으로 업데이트해요.

![숫자·금액 필드의 연산 종류](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040699770/original/TaSK-vRWZJ1vL3tijr5EwKBDAteo2RWldw.png?1738225716)

### 연산 값 입력하기

연산 종류를 골랐다면 계산에 쓸 숫자를 입력해요. 숫자를 직접 입력해도 되고, **+** 와 **-** 아이콘으로 값을 빠르게 조절해도 돼요.

![연산 값 입력하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040699925/original/OwhS6iIPfu8M76_VfbgwfwD4QPXANAwxYQ.gif?1738225829)

### 태그 아이콘으로 동적 값 쓰기

**Tag Icon**(태그 아이콘)을 누르면 숫자를 직접 입력하는 대신 커스텀 필드의 동적 값을 고를 수 있어요. 데이터가 바뀌면 계산 결과도 자동으로 따라 바뀌어서 워크플로우를 더 유연하게 운영할 수 있어요.

![태그 아이콘으로 동적 값 선택하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040700033/original/MvgquKYjg7H11hMO6Ze4Xn8W3qWY4ziyhA.png?1738225929)

### 삭제 아이콘

**Delete Icon**(삭제 아이콘, 휴지통 모양)을 누르면 필요 없는 연산을 지울 수 있어요. 실수로 잘못 추가했거나 더 이상 필요 없는 연산이 있어도 Math Operation 액션을 처음부터 다시 만들 필요가 없어요.

![삭제 아이콘으로 연산 지우기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040700111/original/z5Jpt_QLsRQ8FcKsjUu9iiFPKFcTAh8gxA.png?1738225964)

### 연산 여러 개 추가하기

<!-- 검토 필요: 원문 내용이 서로 다름 -->

하나의 Math Operation 액션 안에서 연산을 여러 개 추가하려면 **Add Operator**(연산자 추가)를 사용해요. 값을 먼저 더한 뒤 그 결과에 곱하는 것처럼 계산을 이어서 해야 할 때 유용해요. **Add Operator**를 클릭하면 별도의 워크플로우 액션을 만들지 않고도 계산을 계속 이어 갈 수 있어요.

![Add Operator로 연산 추가하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040700144/original/aj2JjzQ031NeRIPy6e1get9w2Nad09suyQ.png?1738226001)

### 결과를 저장할 필드 지정하기

**Update Field**(업데이트할 필드)에서는 계산 결과를 어느 필드에 저장할지 정해요. 처리하는 데이터와 같은 종류의 필드를 골라야 해요. 숫자 계산 결과는 숫자 필드에, 날짜 계산 결과는 날짜 필드에 저장하세요.

![Update Field에서 결과 저장 필드 선택하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040700168/original/I86tyUHLU3FGPqLSGNTw-o617v7HV9a7aw.png?1738226023)

### 저장하고 게시하기

1. **Save**(저장)를 클릭해 Math Operation 액션을 워크플로우에 적용하세요.
2. 워크플로우 설정을 모두 마쳤다면 **Publish**(게시)를 클릭해 워크플로우를 활성화하세요.

## 자주 묻는 질문

### 커스텀 날짜 필드에도 수학 연산을 할 수 있나요?

네, 커스텀 날짜 필드에서도 더하기와 빼기를 할 수 있어요. 리마인더나 일정처럼 시간과 관련된 작업을 자동화할 때 쓰세요.

### 수학 연산에서 쓸 수 있는 값의 범위에 제한이 있나요?

숫자 필드에는 양수와 음수를 모두 저장할 수 있어요. 금액 필드에는 0 이상의 값만 입력할 수 있어요. 날짜 필드에서는 음수를 지원하지 않아요.

### Math Operation 액션을 If/Else 조건과 함께 쓸 수 있나요?

네, 쓸 수 있어요. Math Operation의 결과를 **If/Else** 조건에서 활용하면 상황에 따라 달라지는 워크플로우를 만들 수 있어요. 예를 들어 계산된 리드 점수에 따라 참여도별로 다른 영업 경로로 리드를 보낼 수 있어요.

### 1 + 2 × 3 - 4 ÷ 5처럼 여러 연산을 한 번에 할 수 있나요?

현재 하이퍼클래스의 **Math Operation** 워크플로우 액션은 한 번에 하나의 간단한 연산만 지원해요. 두 값 사이의 더하기, 빼기, 곱하기, 나누기가 그 대상이에요.

{% hint style="warning" %}
- 이 액션은 연산 순서(PEMDAS 또는 BODMAS)를 자동으로 적용하지 않아요.
- 복잡한 계산이 필요하면 올바른 계산 순서에 맞춰 Math Operation 단계를 여러 개로 나누세요. 중간 결과는 커스텀 필드에 저장해서 쓰세요.
{% endhint %}
