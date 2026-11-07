---
원문: https://help.gohighlevel.com/support/solutions/articles/48001214441-workflow-action-update-contact-field
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Update Contact Field(연락처 필드 업데이트)

**Update Contact Field**(연락처 필드 업데이트) 액션은 워크플로우 안에서 표준 연락처 필드나 커스텀 필드에 새 값을 쓰거나, 커스텀 필드의 값을 비우는 액션이에요. 이제 더 많은 필드 유형에 **Dynamic Custom Values**(동적 커스텀 값)를 쓸 수 있어서, 값을 직접 입력하지 않고 앞 단계의 결과나 저장된 필드 값을 그대로 넣을 수 있어요.

## 개요

하이퍼클래스의 Update Contact Field 액션은 워크플로우가 실행되는 바로 그 시점에 연락처 레코드의 데이터를 바꿔요. 필드에 값을 넣거나 기존 값을 비울 수 있고, 모든 변경 내용은 **Execution Logs**(실행 로그)에서 확인할 수 있어요.

개인화, 세분화, 리포팅, 이후 워크플로우 로직에서 연락처 데이터를 정확하게 유지할 때 자주 쓰는 액션이에요.

## Update Contact Field 액션 추가하기

1. **자동화 > 워크플로우**로 이동하세요.
2. 기존 워크플로우를 열거나 새로 만드세요.
3. 액션을 추가할 위치에서 **+** 아이콘을 클릭하세요.
4. 액션 패널(Actions)에서 **Update Contact Field**를 선택하세요.

![액션 패널에서 Update Contact Field 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064139621/original/pbJGUi7aYKQIRsDDU612BZlaLUAZzydHkw.png?1770188156)

## 액션 설정

### Action Name(액션 이름)

나중에 워크플로우 캔버스와 **Execution Logs**에서 쉽게 알아볼 수 있도록 액션 이름을 구체적으로 지어 주세요.

![Action Name 입력란](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064139633/original/uOA3B9wly54PZebr_ZkpmFt87vERaK75nQ.png?1770188174)

### Action Type(액션 유형) 선택

액션이 어떻게 동작할지 고르세요. 선택한 유형에 따라 다음에 나오는 설정 항목이 달라져요.

**Action Type** 옵션은 다음과 같아요.

- **Update field data**(필드 데이터 업데이트) – 필드에 새 값을 써요.
- **Clear field data**(필드 데이터 지우기) – 저장된 값을 지워요. 커스텀 필드에서만 쓸 수 있어요.

![Action Type 선택 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064139664/original/munQVWwAGalOBwZl7SLwLp42zMS5aL2zwA.png?1770188194)

### Update field data

연락처 필드의 값을 덮어쓸 때 쓰는 모드예요.

1. 업데이트할 연락처 필드를 선택하세요.
2. 다음 중 하나로 값을 입력하세요.

   - 고정 값(static value)
   - **Dynamic Value**(동적 값): 워크플로우나 연락처에서 가져오는 실시간 데이터

워크플로우가 이 단계에 도달하면 새 값이 기존 값을 대체해요.

![Update field data 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064139707/original/YT7RvqDRGXyhtk1TLKL4XKICCyvbbpE0Hg.png?1770188240)

### Clear field data

**커스텀 연락처 필드**에 저장된 값을 지울 때 쓰는 모드예요.

1. **Action Type**에서 **Clear field data**를 선택하세요.
2. 지울 커스텀 필드를 하나 이상 선택하세요.
3. 액션이 실행되면 해당 필드 값이 빈 값으로 바뀌어요.

{% hint style="warning" %}
값을 지우면 스마트 리스트, 필터, 워크플로우 조건에 영향을 줄 수 있어요. 게시하기 전에 연관된 곳이 없는지 꼭 확인하세요.
{% endhint %}

## Update Contact Field에서 동적 값 사용하기

앞선 워크플로우 단계의 실시간 결과나 저장된 연락처 필드 값을 이용해 연락처 필드를 채울 수 있어요. 값을 직접 입력할 필요가 없고, 같은 로직을 중복해서 만들지 않아도 돼요.

동적 값은 실행 시점에 연락처마다 각각 계산돼요.

### 지원하는 필드 유형

**Update Contact Field**에서는 다음 필드 유형에 동적 값을 쓸 수 있어요.

- **숫자** – 점수, 횟수 등
- **선택 / 드롭다운** – 여기서는 옵션 ID가 필요 없어요.
- **금액** – 합계, 금액 등

{% hint style="warning" %}
선택 / 드롭다운 필드는 연락처 필드를 업데이트할 때 **옵션 ID가 필요하지 않아요.** 옵션 ID가 필요한 **If/Else**(조건 분기) 조건과는 달라요.
{% endhint %}

### 동적 값 사용 방법

1. 워크플로우에 **Update Contact Field** 액션을 추가하세요.
2. **Action Type**에서 **Update field data**를 선택하세요.
3. 값을 넣을 연락처 필드를 선택하세요.
4. 값 입력란에서 **Dynamic Value**로 전환하세요.
5. 다음 중 하나에서 값을 고르세요.

   - 앞선 워크플로우 단계의 결과
   - 저장된 연락처 필드
6. **Save and publish**(저장 및 게시)를 클릭하세요.

## 활용 예시

환자가 예약을 확정하면 워크플로우가 확정 유형(예: *후속 방문*, *첫 방문*)을 가져와요. 이 값을 커스텀 연락처 필드에 동적으로 기록하면 기록이 정확하게 유지되고, 알맞은 후속 안내를 보낼 수 있어요.

## 여러 필드 한 번에 업데이트하기

액션 하나에서 필드를 여러 개 업데이트할 수 있어요.

- **Add field**(필드 추가)를 클릭하면 필드 행이 추가돼요.
- 내용을 명확히 하고 이력을 관리하기 위해, 업데이트와 지우기를 별도 액션으로 나누는 팀도 있어요.

## 필드 유형별 주의 사항과 유효성 검사

오류를 막으려면 값이 필드 유형과 맞아야 해요.

- **문자 / 숫자:** 알맞은 형식으로 입력하세요.
- **날짜:** 올바른 날짜 값이나 날짜 기반 동적 값을 쓰세요.
- **드롭다운 / 체크박스 / 라디오:** 이미 있는 옵션과 일치하는 값이어야 해요.
- **이메일 / 전화번호:** 형식에 맞는 값을 입력하세요.

{% hint style="info" %}
필드는 미리 만들어져 있어야 해요. 이 액션으로는 새 필드를 만들 수 없어요.
{% endhint %}

## 자주 묻는 질문

### 이메일이나 전화번호 같은 표준 연락처 필드도 업데이트할 수 있나요?
네. **Update field data**는 표준 연락처 필드와 커스텀 연락처 필드를 모두 지원해요.

### 표준 연락처 필드도 지울 수 있나요?
아니요. **Clear field data**는 커스텀 연락처 필드에서만 쓸 수 있어요.

### 액션 하나로 여러 필드를 업데이트할 수 있나요?
네. **Add field**를 눌러 같은 액션에서 여러 필드를 업데이트하세요.

### 동적 값은 토큰과 뭐가 다른가요?
동적 값을 쓰면 앞선 워크플로우 단계의 실시간 결과나 필드를 골라서 넣을 수 있어요. 토큰도 계속 쓸 수 있지만, 동적 값은 값을 직접 입력하거나 연결하지 않아도 돼요.

### 형식이 맞지 않으면 어떻게 되나요?
유효성 검사에서 업데이트가 실패할 수 있어요. 필드 유형을 확인하고 **Execution Logs**를 살펴보세요.

### 값을 지우면 스마트 리스트나 워크플로우에 영향이 있나요?
네. 값을 지우면 리스트 포함 여부나 분기 로직이 달라질 수 있어요.
