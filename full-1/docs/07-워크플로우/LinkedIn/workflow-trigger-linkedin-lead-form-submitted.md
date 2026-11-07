---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003497-workflow-trigger-linkedin-lead-form-submitted
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — LinkedIn Lead Form Submitted(LinkedIn 리드 폼 제출)

LinkedIn 리드 광고(Lead Gen) 폼이 제출되는 즉시 새 리드를 받아 하이퍼클래스 워크플로우로 보낼 수 있어요. 이 문서에서는 **LinkedIn Lead Form Submitted**(LinkedIn 리드 폼 제출) 트리거가 언제 실행되는지, **Page**(LinkedIn 페이지)나 커스텀 필드 같은 필터를 어떻게 설정하는지 설명해요. 설정 방법과 테스트 방법, 문제 해결 팁도 함께 안내해요.

---

# LinkedIn Lead Form Submitted 트리거란?

**LinkedIn Lead Form Submitted** 트리거는 하이퍼클래스 계정에 연결된 LinkedIn Lead Gen 폼을 제출한 연락처를 바로 워크플로우에 등록해요. 이 트리거로 즉시 후속 연락을 보내고, 담당자를 배정하고, 기회를 만들고, 육성 자동화를 시작할 수 있어요. 리드가 어디서 왔는지, 어떤 정보를 입력했는지에 따라 흐름을 나눌 수도 있어요.

**트리거 상세 정보**

| 필드명 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Page** | Lead Gen 폼을 소유한 LinkedIn 페이지예요. 특정 페이지를 선택하면 해당 페이지에서 들어온 제출만 워크플로우에 등록돼요. | 아니오 |

### 필터에서 쓸 수 있는 연산자

| 연산자 | 설명 |
| --- | --- |
| **Is (Exact Match)**(정확히 일치) | 필드 값이 선택한 값과 정확히 같을 때 실행돼요. |
| **Contains Phrase**(문구 포함) | 필드에 입력한 문구가 포함되어 있을 때 실행돼요. |
| **Does Not Contain Phrase**(문구 미포함) | 필드에 입력한 문구가 포함되어 있지 않을 때 실행돼요. |
| **Is Empty**(비어 있음) | 필드에 값이 없을 때 실행돼요. |
| **Is Not Empty**(비어 있지 않음) | 필드에 값이 하나라도 있을 때 실행돼요. |

---

## LinkedIn Lead Form Submitted의 장점

장점을 알아 두면 필터를 걸고, 담당자를 나누고, 후속 연락을 보내는 흐름을 더 빠르고 깔끔하게 만들 수 있어요.

- 빠른 대응: 제출 즉시 실행되므로 바로 문자, 이메일, 전화로 연락할 수 있어요.
- 정확한 분배: **Page**나 연결(매핑)된 커스텀 필드로 필터를 걸어 알맞은 담당자나 파이프라인에 배정할 수 있어요.
- 깔끔한 데이터: 필드 매핑과 중복 제거를 함께 쓰면 연락처 기록을 하나로 정확하게 유지할 수 있어요.
- 자동 후속 조치: 육성 시퀀스, 작업, 기회 생성을 수작업 없이 시작할 수 있어요.
- 명확한 리포팅: 유입 경로가 일관되게 기록되어 캠페인 성과를 측정하기 쉬워요.

---

## 사전 준비

아래 항목을 먼저 확인하면 "리드가 들어오지 않아요" 같은 문제를 막고 테스트도 쉬워져요.

- **설정 > 연동**에서 LinkedIn Lead Ads 연동이 연결되어 있어야 해요. 올바른 LinkedIn 페이지와 **광고 계정**에 접근할 수 있어야 해요.
- 해당 페이지에 게시된 LinkedIn Lead Gen 폼이 하나 이상 있어야 해요.
- 필드 매핑을 미리 계획해 두세요. 예를 들어 이메일, 전화번호, 회사, 직책을 매핑하고, 비즈니스 니치나 자격 확인 항목은 하이퍼클래스의 같은 이름의 커스텀 필드에 매핑해요.

---

## 필터 로직과 활용 팁

필터를 올바르게 조합하면 조건에 맞는 제출만 자동화에 들어오고, 의도하지 않은 등록을 막을 수 있어요.

- 트리거에 필터를 여러 개 설정하면 모두 함께 평가돼요(AND 조건).
- 처음에는 넓게 시작하세요. 예를 들어 **Page** → **Is**(다음과 같음) → 내 LinkedIn 페이지로 설정한 뒤 조건을 하나씩 더하세요.
- 처음 운영할 때는 필터를 너무 많이 걸지 마세요. 리드가 정상적으로 들어오는 것을 확인한 뒤에 조건을 추가하세요.
- 페이지별 워크플로우는 단순하게 유지하세요. 복잡한 조건이 많은 워크플로우 하나보다 페이지당 워크플로우 하나가 관리하기 쉬워요.

---

## 권장 워크플로우 설정

몇 가지 워크플로우 설정을 해 두면 테스트가 쉬워지고 중복 연락도 막을 수 있어요.

- **Allow Re-entry**(재진입 허용): 테스트 중이거나 리드가 여러 번 제출할 수 있을 때 켜세요. 첫 제출만 트리거해야 한다면 끄세요.
- **Stop on Response**(응답 시 중지, 선택 사항): 리드가 답장하면 육성 시퀀스를 멈추고 싶을 때 쓰세요.
- **Enrollment Logs**(등록 로그): **Execution Logs**(실행 로그)에서 제출 후 각 리드가 거친 경로를 확인하세요.

---

## LinkedIn Lead Form Submitted 설정하기

아래 순서대로 트리거를 설정하고, 필터를 추가한 뒤 저장하세요. 정확하게 설정해야 원하는 리드만 워크플로우에 들어와 알맞은 액션을 받아요.

### 워크플로우 열기

왼쪽 메뉴에서 **자동화 > 워크플로우**로 이동해 오른쪽 위의 **Create Workflow**(워크플로우 만들기)를 클릭하세요. **처음부터 시작**(또는 **Select a Recipe**(레시피 선택))을 선택하면 새 빌더 화면이 열려요.

![워크플로우 목록에서 새 워크플로우를 만드는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057970620/original/bjb7_ZM6As5IQnHDubVlwOgeHmbZ6pRfkQ.png?1762770898)

### 트리거 추가

워크플로우 빌더에서 **+ Add**(추가)에 마우스를 올리고 **Add Trigger**(트리거 추가)를 선택하세요. 화면 오른쪽에 트리거 설정 패널이 열려요.

![빌더에서 트리거 추가를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057970757/original/ZO4Sp2ScsO5zON3zyKR7MraIqsAcKr8MJg.png?1762770937)

### 트리거 선택

검색창을 쓰거나 목록을 스크롤해서 **LinkedIn Lead Form Submitted**를 찾아 선택하세요. 이렇게 하면 LinkedIn 리드 제출이 이 워크플로우의 등록 조건이 돼요.

![트리거 목록에서 LinkedIn Lead Form Submitted를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057970856/original/4Fl_2CeEkWff4CgxQwLUphkhtPfSb5ku3w.png?1762770991)

### 트리거 이름 입력

팀원이 한눈에 유입 경로를 알아볼 수 있도록 **Workflow Trigger Name**(워크플로우 트리거 이름)을 알기 쉽게 입력하세요. *LinkedIn Lead Form Submitted*나 *LinkedIn Leads — Page Scoped* 같은 이름이 좋아요.

![트리거 이름을 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057970933/original/G0Z4VMoMxIPaFl0XE8Pgvvjic7pmB05xpQ.png?1762771035)

### 필터 추가

**Add filters**(필터 추가)를 클릭하면 필드 선택 창이 열려요. 여기에는 **Standard Fields**(표준 필드)(예: **Page**)와 **Custom Fields**(커스텀 필드)가 나와요. 검색창을 쓰면 비즈니스 니치나 업종처럼 매핑해 둔 필드를 빠르게 찾을 수 있어요.

![필터 추가에서 필드를 고르는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057971005/original/MDjTNpj9duZeivOY4JbYQxmsUJQWWyE9EQ.png?1762771083)

### Page 필터 설정

**Page** → **Is**로 설정한 다음, 드롭다운에서 원하는 LinkedIn 페이지를 선택하세요. 그러면 해당 페이지에서 들어온 제출만 워크플로우에 등록돼요.

![Page 필터에서 LinkedIn 페이지를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057971148/original/RVvdtHDRlnX8gLr49tXNNye2EvMaZODjQg.png?1762771147)

---

## 트리거 테스트하기

실제로 운영하기 전에 테스트하면 연동, 매핑, 필터가 제대로 작동하는지 확인할 수 있어요.

1. LinkedIn Campaign Manager에서 연결된 페이지와 폼으로 테스트 리드를 제출하세요.
2. 하이퍼클래스에서 **연락처**를 열고, 매핑한 필드와 함께 연락처가 생성(또는 업데이트)되었는지 확인하세요.
3. 워크플로우의 **Enrollment History**(등록 이력) / **Execution Logs**에서 트리거가 실행되고 액션이 진행되었는지 확인하세요.
4. 등록을 막은 필터가 있는지 살펴보고, 필요하면 조정하세요.

---

## 자주 묻는 질문

### Page 필터를 꼭 설정해야 하나요?

아니요. 필터는 선택 사항이에요. 다만 **Page** 필터를 쓰면 특정 LinkedIn 페이지에서 들어온 제출만 등록할 수 있어요.

### 특정 LinkedIn Lead Gen 폼만 골라서 필터링할 수 있나요?

매핑에서 폼 식별자가 제공되거나 폼 이름을 담은 커스텀 필드를 쓰고 있다면, 그 값으로 필터링할 수 있어요. 그렇지 않다면 **Page**로 범위를 정하고, 트리거 이후 조건을 사용하세요.

### 중복 연락처는 어떻게 처리되나요?

하이퍼클래스는 이메일, 전화번호 같은 식별 정보로 일치하는 연락처를 찾아요. 일치하는 연락처가 있으면 그 연락처를 업데이트하고, 없으면 새 연락처를 만들어요. 중복 제거 설정을 알맞게 조정하고, 필요할 때는 연락처를 병합하세요.

### 같은 리드가 다시 제출하면 워크플로우가 또 실행되나요?

**Allow Re-entry** 설정에 따라 달라요. 테스트할 때나 리드가 여러 번 제출할 수 있는 캠페인에서는 이 설정을 켜세요.

### 매핑한 필드가 비어 있으면 어떻게 하나요?

**Is Empty** / **Is Not Empty** 연산자로 해당 리드를 포함하거나 제외할 수 있어요. 아니면 LinkedIn 폼에서 해당 항목을 필수 응답으로 설정하세요.

### 리드가 하이퍼클래스에 얼마나 빨리 나타나나요?

리드는 보통 제출 직후에 동기화돼요. 테스트할 때는 잠시 기다린 뒤 **Execution Logs**를 확인하세요.

### 페이지마다 다른 워크플로우를 운영할 수 있나요?

네. 페이지마다 워크플로우를 하나씩 만들거나, **Page** → **Is** 필터와 분기 액션을 함께 쓰면 돼요.

### 트리거가 실행되었는지 어디서 확인하나요?

워크플로우의 **Enrollment History**와 **Execution Logs**를 열면 등록 내역과 액션 경로를 볼 수 있어요.
