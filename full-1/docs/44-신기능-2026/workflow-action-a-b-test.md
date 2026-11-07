---
원문: https://help.gohighlevel.com/support/solutions/articles/155000009305-workflow-action-a-b-test
번역일: 2026-11-06
카테고리: 44-신기능-2026
---

# 워크플로우 액션 — A/B Test(A/B 테스트)

**A/B Test**(A/B 테스트) 액션을 쓰면 워크플로우 안에서 여러 경로를 비교해 어떤 시퀀스의 성과가 가장 좋은지 확인할 수 있어요. 연락처를 여러 경로에 고르게 나누고, 목표로 전환을 측정해 우승 경로를 자동으로 가려내요. 결과에 따라 이후 연락처를 우승 경로로 보내거나 테스트를 계속할 수 있어요.

## A/B Test 액션이란?

[동영상](https://jumpshare.com/embed/vwAJbJPmjGf7D5WcHta9)

**A/B Test** 액션은 같은 전환 목표를 기준으로 워크플로우 경로 2~10개를 비교해요. 연락처는 경로마다 고르게 나뉘어 들어가고, 하이퍼클래스가 각 경로의 성과를 추적해 전환율이 가장 높은 경로를 찾아요.

기본 [Split 액션](../07-워크플로우/Internal-Tools-Workflow-Actions/workflow-action-split.md)과 달리, **A/B Test**는 전환 추적, 우승 경로 선정, 테스트 이후 연락처 배정 옵션을 제공해요.

---

## A/B 테스트를 쓰면 좋은 점

A/B 테스트를 쓰면 자동 후속 시퀀스를 데이터에 근거해 정할 수 있어요. 어떤 방식이 좋을지 추측하는 대신 실제 전환 결과를 비교하고, 연락처가 워크플로우를 거치는 흐름을 개선할 수 있어요.

- 여러 경로 비교: 워크플로우 변형 2~10개를 테스트하면서 연락처를 경로마다 고르게 나눠요.
- 전환 측정: 성공을 정의하는 목표 이벤트나 사용자 지정 조건으로 성과를 추적해요.
- 우승 경로 확인: 전환율을 기준으로 성과가 가장 좋은 변형을 자동으로 정해요.
- 연락처 배정 최적화: 테스트가 끝난 뒤 새 연락처를 우승 경로로 보내거나, 계속 고르게 나눌 수 있어요.

---

## A/B Test 설정

**A/B Test** 액션에서는 경로 구성, 전환 정의, 테스트 기간, 테스트 종료 후 처리 방식을 설정해요. 각 옵션을 이해하면 의미 있는 비교를 설계하고 연락처 배정을 관리할 수 있어요.

| 설정 | 설명 |
| --- | --- |
| **Action Name**(액션 이름) | 워크플로우 안에서 이 테스트를 구분할 이름을 입력해요. |
| **Paths**(경로) | 경로를 2~10개 구성해요. 연락처는 사용 가능한 경로에 고르게 나뉘어요. |
| **Winning Criteria**(우승 기준) | 각 경로를 평가할 전환 목표를 선택해요. |
| **Test Length**(테스트 기간) | 진입한 연락처 수, 목표 달성 횟수, 날짜 및 시간 중 하나를 기준으로 테스트를 끝낼 시점을 정해요. |
| **After the Test Ends**(테스트 종료 후) | 새 연락처를 우승 경로로 보낼지, 계속 고르게 나눌지 선택해요. |

---

## Winning Criteria(우승 기준)

**Winning Criteria**는 각 워크플로우 경로에서 무엇을 전환으로 볼지 정하는 기준이에요. 예약 잡기, 이메일 반응, 결제 완료처럼 개선하고 싶은 결과를 나타내는 이벤트나 조건을 고르세요.

| 기준 | 설명 |
| --- | --- |
| **Goal Event**(목표 이벤트) | 이벤트로 전환을 측정해요. 이메일 활동(**Email activity**), 트리거 링크 클릭(**Clicked a trigger link**), **Appointment status**(예약 상태), **Form submitted**(폼이 제출되었습니다), **Payment received**(결제 완료), 인보이스 결제(**Invoice paid**) 등을 쓸 수 있어요. 안내에 따라 해당 항목을 선택하세요. |
| **Custom Condition**(사용자 지정 조건) | 리드 자격 상태처럼 연락처 필드나 커스텀 필드 조건으로 전환을 정의해요. |

![Winning Criteria 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084005199/original/ltK6xHTi_c7ayie4pouMmq5h6KcqGJBv5Q.png?1792696853)

{% hint style="warning" %}
**Winning Criteria**는 연락처가 전환했는지를 측정하는 기준이에요. 연락처가 어느 경로로 들어갈지는 정하지 않아요.
{% endhint %}

---

## Test Length(테스트 기간)

**Test Length**는 하이퍼클래스가 언제 비교를 끝내고 우승 경로를 가릴지 정해요. 모으고 싶은 데이터 양이나 테스트에 쓸 수 있는 기간에 맞춰 종료 조건을 고르세요.

| 옵션 | 설명 |
| --- | --- |
| **Total Contacts Entered**(진입한 전체 연락처 수) | 지정한 수의 연락처가 **A/B Test** 액션에 들어오면 테스트를 끝내요. |
| **Goal Completions**(목표 달성 횟수) | 설정한 횟수만큼 목표가 달성되면 테스트를 끝내요. |
| **Date and Time**(날짜 및 시간) | 지정한 날짜와 시간에 테스트를 끝내요. 계정의 시간대를 기준으로 해요. |

예를 들어 연락처 200명이 들어오면 끝나도록 테스트를 설정할 수 있어요.

---

## After the Test Ends(테스트 종료 후)

우승 경로가 정해지면 워크플로우가 새 연락처를 어떻게 처리할지 고를 수 있어요. 가장 성과가 좋은 경로를 자동으로 쓰거나, 결과를 검토하는 동안 기존 배분을 유지할 수 있어요.

| 옵션 | 동작 |
| --- | --- |
| **Send New Contacts to the Winning Path**(새 연락처를 우승 경로로 보내기) | 새 연락처는 전환율이 가장 높은 경로를 따라요. 이미 다른 경로에 있는 연락처는 진행 중이던 시퀀스를 끝까지 마쳐요. |
| **Keep Splitting and Show the Result**(계속 나누고 결과 보기) | 새 연락처를 계속 고르게 나누고, 우승 경로는 **Statistics**(통계)에 표시해요. |

우승 경로로 보내는 옵션을 선택하면, 워크플로우 캔버스에서 우승 경로에 **Winner** 배지가 표시되고 나머지 경로는 흐리게 보여요.

![우승 경로에 Winner 배지가 표시된 워크플로우 캔버스](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084005222/original/8CohG9clifsYXskzOqz6RvlYCZSh-SfYhA.png?1792696927)

---

## A/B Test 설정 방법

**A/B Test**를 설정하려면 경로를 구성하고, 모든 경로에 같은 전환 목표를 고르고, 비교가 끝나는 시점을 정해요. 이렇게 설정해야 각 경로를 같은 우승 기준으로 평가할 수 있어요.

1. **자동화 > 워크플로우**로 이동해 기존 워크플로우를 열거나 새로 만드세요.
2. 워크플로우 빌더에서 **+** 아이콘(액션 추가)을 클릭하고 **A/B Test**를 선택하세요.

   ![워크플로우 빌더에서 A/B Test 액션 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084005232/original/dKvqO7cvdtWQ0tXaj29HayJ0qYYcwtElPg.png?1792696948)
3. **Action name**에 이름을 입력하고, **Add path**(경로 추가)로 경로를 2~10개 구성하세요. 필요하면 경로 이름을 바꾸세요.
4. **Winning Criteria**에서 **Goal event**(목표 이벤트) 또는 **Custom condition**(사용자 지정 조건)을 선택하고 원하는 전환 목표를 설정하세요.
5. **Test length**에서 비교를 끝낼 시점을 선택하세요.

   ![Test length 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084005254/original/KD7pvZnXqQ8RPa2jqkOPexVPogv1UaY7HQ.png?1792697014)
6. **After the test ends**에서 **Send new contacts to the winning path** 또는 **Keep splitting and show the result**를 선택하세요.
7. **Save action**(액션 저장)을 클릭하세요. 경로마다 비교할 액션을 추가한 다음, 상황에 맞게 워크플로우를 저장하거나 게시하세요.

   ![경로별 액션이 추가된 A/B Test 워크플로우](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084005279/original/PlGoGXSWWzrpiUrdr-b8oZPqRIhy_-AnVQ.png?1792697047)

---

## A/B Test 통계와 우승 경로 선정

**Statistics** 탭에서 선택한 전환 목표를 기준으로 경로별 성과를 볼 수 있어요. 진입 수, 전환 수, 전환율을 비교하면 가장 효과적인 변형을 찾을 수 있어요.

| 지표 | 설명 |
| --- | --- |
| **Path**(경로) | 테스트한 워크플로우 경로의 이름이에요. |
| **Entered**(진입) | 경로에 들어온 연락처 수예요. |
| **Converted**(전환) | 전환 목표를 달성한 연락처 수예요. |
| **Conversion %**(전환율) | 해당 경로에서 전환한 연락처의 비율이에요. |
| **Winner**(우승) | 우승 경로가 선정되면 전환율이 가장 높은 경로를 표시해요. |

```
전환율은 다음과 같이 계산해요.
Conversion % = (Converted ÷ Entered) × 100
```

### 우승 경로 확정

설정한 테스트 종료 조건에 도달하면 우승 경로가 정해져요. **Statistics** 탭의 **Declare winner**(우승 경로 확정)로 테스트를 일찍 끝낼 수도 있어요.

하이퍼클래스는 전환율이 가장 높은 경로를 우승 경로로 선택해요. 여러 경로가 가장 높은 전환율로 동점이면, 그중 첫 번째 경로를 우승 경로로 봐요.

![Statistics 탭에서 우승 경로 확정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084005287/original/ch43TDCVvRUhggifLa06wd4zzdWS31MUCQ.png?1792697075)

---

## A/B Test 초기화

A/B Test를 초기화하면 이전 결과를 검토한 뒤 새 비교를 시작할 수 있어요. 메시지, 후속 시퀀스, 접근 방식을 바꿔 다시 테스트할 때 유용해요.

새 비교를 준비하려면 **A/B Test** 액션 안에서 **Reset test**(테스트 초기화)를 사용하세요.

{% hint style="warning" %}
초기화한 뒤 저장하면 이전 테스트 결과가 지워져요. 테스트에 다시 들어오는 연락처는 이전과 다른 경로로 들어갈 수도 있어요.
{% endhint %}

---

## 자주 묻는 질문

### 같은 A/B Test에서 이메일과 SMS 시퀀스를 비교할 수 있나요?

네, 할 수 있어요. 각 경로에는 이메일, SMS, 대기(Wait) 같은 워크플로우 액션을 서로 다르게 조합해 넣을 수 있어요. 모든 경로에서 확인하고 싶은 결과를 측정하는 전환 목표를 사용하세요.

### 모든 A/B Test 경로가 같은 우승 기준을 쓰나요?

네, 같은 기준을 써요. **A/B Test** 액션은 해당 테스트에 설정한 **Winning Criteria**로 모든 경로를 평가해요. 그래서 변형을 같은 목표로 비교할 수 있어요.

### 경로마다 연락처 수가 다르게 나오는 이유는 무엇인가요?

원래 의도한 배분은 고른 분배예요. 하지만 실제 경로별 진입 수는 달라질 수 있어요. 테스트에 들어온 연락처가 아직 적을 때 특히 그래요.

### 커스텀 필드로 리드 자격을 측정할 수 있나요?

네, 할 수 있어요. **Winning Criteria**에서 **Custom condition**을 선택하고, 자격을 갖춘 리드를 나타내는 연락처 필드나 커스텀 필드 조건을 정의하세요.
