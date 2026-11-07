---
원문: /support/solutions/articles/155000009235-test-workflow
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 테스트 — Test Workflow

워크플로우를 게시하기 전에 제대로 동작하는지 미리 확인하는 기능이에요. 이 문서에서는 트리거 하나, 액션 하나, 또는 워크플로우 전체를 테스트하는 방법을 안내해요.

## 개요

**Test workflow**(워크플로우 테스트)를 쓰면 워크플로우를 게시하기 전에 확인할 수 있어요. 내 계정에서 실제로 발생한 이벤트로 트리거 하나를 테스트하거나, 그 이벤트의 데이터로 액션 하나를 테스트할 수 있어요. 워크플로우 전체를 한 단계씩 실행하면서 각 단계의 성공·실패를 지켜볼 수도 있어요.

테스트는 실제 단계를 그대로 실행해요. 테스트가 잘 되면 워크플로우도 잘 동작한다는 뜻이에요.

## 이럴 때 좋아요

- 실제 데이터: 임의로 만든 값이 아니라 내 계정의 실제 이벤트로 테스트해요.
- 한 단계씩: 워크플로우 전체를 돌리지 않고 트리거나 액션 하나만 테스트할 수 있어요.
- 실시간 진행 확인: 워크플로우 전체 테스트가 진행되는 모습을 캔버스에서 단계별로 볼 수 있어요.
- 빠른 문제 해결: 각 단계를 열어 입력(Input)과 출력(Output)을 확인하고, 클릭 한 번으로 실행을 다시 해 볼 수 있어요.
- 안심하고 게시: 모든 단계가 이미 동작하는 것을 확인한 뒤에 게시할 수 있어요.

## 테스트 방식

트리거의 **Test** 탭과 **Test workflow** 패널에서는 두 가지 방식으로 테스트할 수 있어요.

| 옵션 | 하는 일 | 이럴 때 쓰세요 |
| --- | --- | --- |
| **Test using events**(이벤트로 테스트) | 내 계정에서 발생하는 다음 실제 이벤트를 15분 동안 기다렸다가, 그 이벤트로 테스트를 실행해요. | 폼을 직접 제출하는 것처럼 트리거를 내가 직접 발생시킬 수 있을 때 |
| **Enroll a contact**(연락처 등록) | 내가 고른 연락처에 트리거가 발생한 것처럼 테스트를 실행해요. | 실제 이벤트를 발생시키기 어려울 때 |

## 트리거 테스트하기

여기서는 실제 폼 제출로 **Form Submitted**(폼 제출) 트리거를 테스트하는 예시를 보여 드려요.

### 1단계: Test 탭 열기

1. 캔버스에서 트리거를 클릭하세요.
2. 열린 패널에서 **Setup**(설정) 탭 옆의 **Test**(테스트) 탭을 클릭하세요.
3. **Test using events**를 선택하세요.

![Form Submitted 트리거의 Test 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083699859/original/-HgLokCLFgT3YSGxZK3OW5GruYN2C2YCnw.png?1792438853)

*Form Submitted 트리거의 Test 탭*

### 2단계: Listen for events 켜기

**Listen for events**(이벤트 수신 대기) 토글을 켜세요. 패널에 남은 대기 시간과 기록된 이벤트 수가 표시돼요.

![남은 시간과 기록된 이벤트 수가 표시된 이벤트 수신 대기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083699860/original/gnbKXy4krdvtyXZjV9ZkrWt1XBSGzUhnVA.png?1792438859)

*남은 시간과 기록된 이벤트 수가 표시된 이벤트 수신 대기 화면*

### 3단계: 트리거 발생시키기

1. 트리거가 발생하는 동작을 직접 해 보세요. **Form Submitted**라면 폼을 열어 제출하면 돼요. 몇 초 안에 패널에 이벤트가 나타나요.
2. **Select event**(이벤트 선택)에서 해당 이벤트를 선택하세요.

**Event data**(이벤트 데이터)에는 폼 필드와 연락처 정보를 포함해 그 이벤트가 담고 있는 모든 필드가 나와요.

![기록된 이벤트와 이벤트 데이터](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083699863/original/my0wteO24M3kxefJpLX_NwJJXfPG5TNbyg.png?1792438864)

*기록된 이벤트와 이벤트 데이터*

### 4단계: Test Trigger 클릭하기

**Test Trigger**(트리거 테스트)를 클릭하세요. 테스트를 통과하면 패널에 **Trigger tested**(트리거 테스트 완료)가 표시되고 이벤트가 고정돼요. 트리거 아래의 모든 액션은 이 이벤트의 데이터로 테스트돼요.

![출력으로 고정된 이벤트가 표시된 Trigger tested 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083699864/original/4MjOKtmzGQZw2EKWP_RgeVUuXVdn16hYRA.png?1792438869)

*출력으로 고정된 이벤트가 표시된 Trigger tested 화면*

{% hint style="info" %}
**Retest**(다시 테스트)를 클릭하면 언제든 다른 이벤트로 트리거를 다시 테스트할 수 있어요.
{% endhint %}

## 액션 테스트하기

### 1단계: 설정 확인하기

1. 캔버스에서 액션을 클릭하세요.
2. **Setup** 탭에서 필드를 확인하세요. **Contact Full Name**(연락처 전체 이름)처럼 커스텀 값을 쓰는 필드는 테스트하는 동안 고정된 이벤트의 값으로 채워져요.

### 2단계: 테스트 실행하기

1. **Test** 탭을 여세요. **Input**(입력)에는 고정된 이벤트를 바탕으로 액션이 사용할 값이 나와요.
2. **Test action**(액션 테스트)을 클릭하세요.

![고정된 이벤트로 채워진 액션의 입력값](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083699865/original/6xZWh1-HCfE3s2bLOuuHPbU63sQpCYEkqQ.png?1792438874)

*고정된 이벤트로 채워진 액션의 입력값*

### 3단계: 출력 확인하기

테스트를 통과하면 패널에 **Action tested**(액션 테스트 완료)가 표시돼요. **Output**(출력)으로 전환하면 결과를 볼 수 있어요. 예를 들어 **Success**(성공), 메시지, 새로 만들어진 레코드의 ID가 나와요. 이 필드들은 이후 단계에서 쓸 수 있어요.

![Create Opportunity 액션의 출력이 표시된 Action tested 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083699869/original/Xog3i_ETN1IKuSRNxiL3wCZaWaE58_gfMQ.png?1792438879)

*Create Opportunity 액션의 출력이 표시된 Action tested 화면*

{% hint style="info" %}
액션은 실제로 실행돼요. 이 예시에서는 테스트하면 파이프라인에 실제 기회가 만들어져요.
{% endhint %}

## 워크플로우 전체 테스트하기

### 1단계: Test workflow 열기

빌더 오른쪽 위의 **Test workflow**를 클릭하세요. **Test workflow** 패널이 **New test**(새 테스트) 탭으로 열려요.

### 2단계: 트리거와 이벤트 고르기

1. **Test using events** 또는 **Enroll a contact**를 선택하세요.
2. **Select Trigger**(트리거 선택)에서 실행할 트리거를 고르세요.
3. **Select event**에서 테스트에 쓸 이벤트를 고르세요. 새 이벤트를 기록하려면 **Listen for events**를 켜세요.
4. 이벤트 데이터를 확인한 뒤 **Start test run**(테스트 실행 시작)을 클릭하세요.

![트리거와 이벤트를 선택한 Test workflow 패널](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083699875/original/Pt8fmywtE9NotPD3Ylvejtuf2LM0_O3-gQ.png?1792438902)

*트리거와 이벤트를 선택한 Test workflow 패널*

### 3단계: 실행 지켜보기

워크플로우가 액션을 하나씩 실행해요. 캔버스의 각 단계는 끝날 때마다 상태를 보여 주고, **History**(기록) 탭에는 이 실행이 **Test running**(테스트 실행 중)으로 표시돼요.

![진행 중인 테스트 실행: 끝난 단계는 Success, 현재 단계는 Running으로 표시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083699879/original/uVlUPzbTmlmIMY9rTzI75oBBEM2WDVXFjw.png?1792438908)

*진행 중인 테스트 실행: 끝난 단계는 Success, 현재 단계는 Running으로 표시*

### 4단계: 결과 확인하기

실행이 끝나면 캔버스에 모든 단계의 결과가 표시되고, **History**에 최종 상태가 나와요. 예를 들면 **Completed with skipped steps**(건너뛴 단계가 있는 채로 완료)처럼요. 실행 결과를 보는 동안 캔버스는 읽기 전용이에요.

![끝난 실행: 캔버스의 단계별 상태와 History의 실행 기록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083699887/original/8O7VyhkhnTNjD4pp6oIB0P1uUrsbDQ0vBg.png?1792438915)

*끝난 실행: 캔버스의 단계별 상태와 History의 실행 기록*

단계를 클릭하면 그 단계의 **Input**과 **Output**이 열려요. 문제가 생긴 단계를 찾을 때 활용하세요.

![테스트 실행에서 한 단계의 출력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083699889/original/9V8zX0gtOdjGEJNkXN7HKfB6mhSs82RCUQ.png?1792438922)

*테스트 실행에서 한 단계의 출력*

## 기록 확인하고 다시 실행하기

**Test workflow** 패널의 **History** 탭을 열면 지금까지의 테스트 실행을 모두 볼 수 있어요. 목록은 **All**(전체), **Success**, **Failed**(실패), **Skipped**(건너뜀)로 걸러 볼 수 있어요.

![지난 테스트 실행이 보이는 History 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083699966/original/OILvWfAo7AdU1X3r3vpYNksw5WvvY5f5xw.png?1792439010)

*지난 테스트 실행이 보이는 History 탭*

같은 테스트를 다시 실행하려면 실행 항목 위에 마우스를 올리고 **Retry run**(실행 다시 시도)을 클릭하세요. 다시 실행할 때는 같은 트리거 데이터와 액션 설정을 쓰고, **History**에 새 실행으로 기록돼요.

![지난 테스트 실행의 Retry run](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083699970/original/2wsA1VfJWWSsYBsIZ5_hn6lgso5SLx41tA.png?1792439016)

*지난 테스트 실행의 Retry run*

## 실행 및 단계 상태

| 상태 | 의미 |
| --- | --- |
| **Test running** | 실행이 진행 중이에요. **History**에 지금 실행 중인 단계가 표시돼요. |
| **Success** | 단계가 오류 없이 실행되고 끝났어요. |
| **Failed** | 단계가 실행됐지만 오류가 반환됐어요. 단계를 열어 출력에서 오류를 확인하세요. |
| **Action skipped**(액션 건너뜀) | 이번 테스트 실행에서 해당 단계가 실행되지 않았어요. |
| **Completed with skipped steps** | 실행이 끝났고, 건너뛴 단계가 하나 이상 있어요. |

## 알아 두세요

- 테스트는 실제로 실행돼요. 메시지가 발송되고, 레코드가 만들어지거나 바뀌어요.
- 테스트는 선택 사항이에요. 테스트하지 않고도 저장하고 게시할 수 있어요.
- 고정된 이벤트는 다른 이벤트로 트리거를 다시 테스트하기 전까지 유지돼요.
- 이벤트 수신 대기는 15분 동안 이어져요. 그 안에 이벤트가 오지 않았다면 다시 켜세요.

## 사용 사례

시나리오: 영상 제작 에이전시가 "영상 제작 및 편집 요청" 폼에 쓸 워크플로우를 만들어요. 누군가 폼을 제출하면 워크플로우가 기회를 만들고, 환영 이메일을 보내고, '높은 우선순위' 태그를 추가하고, 후속 작업을 만들어요.

워크플로우를 만드는 사람은 먼저 트리거에서 **Listen for events**를 켜고, 자기 정보로 폼을 제출한 뒤 그 이벤트로 트리거를 테스트해요. 그다음 **Create Opportunity**(기회 생성) 액션을 테스트하고, 파이프라인에 올바른 이름으로 기회가 생겼는지 확인해요. 마지막으로 **Test workflow**를 클릭해 두 번째 이벤트로 모든 단계를 실행해요. 실행 결과에서 각 단계의 결과를 확인했기 때문에, 워크플로우가 잘 동작한다는 확신을 갖고 게시할 수 있어요.

## 자주 묻는 질문

### 테스트하면 실제 이메일이 발송되거나 실제 레코드가 만들어지나요?

네. 테스트할 때마다 실제 액션이 실행돼요. **Send Email**(이메일 발송) 액션을 테스트하면 이메일이 발송되고, **Create Opportunity** 액션을 테스트하면 기회가 만들어져요. 고객에게 연락이 가지 않게 하려면 내 정보나 테스트용 폼 입력으로 테스트하세요.

### 이벤트 수신을 기다리는 동안 이벤트가 오지 않아요.

이벤트 수신 대기는 15분 동안 이벤트를 기록해요. 아무것도 오지 않았다면 **Listen for events**를 다시 켜고, 폼을 제출하는 것처럼 트리거를 한 번 더 발생시켜 보세요.

### 실제 이벤트를 발생시키지 않고 트리거를 테스트할 수 있나요?

네. **Test** 탭에서 **Enroll a contact**를 선택하세요. 내가 고른 연락처에 트리거가 발생한 것처럼 테스트가 실행돼요.

### 액션을 테스트하기 전에 트리거를 먼저 테스트해야 하나요?

네. 액션 테스트는 트리거 테스트로 고정된 이벤트의 데이터를 사용해요. 트리거를 먼저 테스트한 다음 그 아래 액션을 테스트하세요.

### 게시하기 전에 모든 단계를 테스트해야 하나요?

아니요. 테스트는 선택 사항이에요. 테스트를 실행하지 않고도 워크플로우를 저장하고 게시할 수 있어요.

### 전에 실행한 테스트는 어디에서 볼 수 있나요?

**Test workflow**를 클릭하고 **History** 탭을 여세요. 모든 실행이 상태와 함께 나열되고, **Success**, **Failed**, **Skipped**로 걸러 볼 수 있어요.

### Retry run은 무엇을 사용하나요?

처음 실행과 같은 트리거 데이터와 같은 액션 설정을 사용해요. 그래서 수정한 내용을 똑같은 이벤트로 확인해 볼 수 있어요.
