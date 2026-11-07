---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002554-action-add-to-workflow-workflow-action-add-to-workflow
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Add to Workflow(워크플로우에 추가)

**Add to Workflow**(워크플로우에 추가) 액션은 연락처를 다른 워크플로우로 자동으로 보내 줘요. 이 문서에서는 액션의 개념과 장점, 설정 방법, 활용 예시를 알아보고, 자주 묻는 질문에도 답해요.

## Add to Workflow 액션이란?

**Add to Workflow** 액션은 연락처를 지정한 다른 워크플로우에 자동으로 추가하는 자동화 도구예요. 고객 여정이나 업무 과정에서 연락처를 다음 단계로 넘기고, 알맞은 때에 알맞은 절차를 거치게 하려고 자주 써요. **Pass Input Trigger Parameters**(입력 트리거 파라미터 전달) 옵션을 켜면 원래 워크플로우의 트리거 데이터를 새 워크플로우로 가져갈 수 있어서, 더 개인화된 자동화를 만들 수 있어요.

예를 들어 고객이 예약을 마치면 "Appointment Follow-Up" 워크플로우에 자동으로 추가해서, 예약 확인 정보와 사전 알림을 보낼 수 있어요.

## Add to Workflow 액션의 장점

- **연락처 이동이 매끄러워요:** 연락처를 워크플로우 사이에서 자동으로 옮겨서 한 단계에서 다음 단계로 자연스럽게 이어 줘요.
- **데이터가 그대로 유지돼요:** 중요한 트리거 데이터를 다른 워크플로우로 가져가서 핵심 정보가 사라지지 않아요.
- **시간을 아껴요:** 고객을 다음 단계로 옮기는 작업을 직접 하지 않아도 되니 시간과 인력을 줄일 수 있어요.
- **고객 경험이 좋아져요:** 후속 안내, 확인, 알림을 제때 보내 고객이 계속 관심을 갖고 정보를 받을 수 있어요.
- **확장하기 쉬워요:** 비즈니스가 커져도 수동으로 고치지 않고 자동화 규모를 키울 수 있어요.

## 설정 방법

**Add to Workflow** 액션은 다음 순서로 설정하세요.

1. **자동화 > 워크플로우**로 이동하세요.

   ![자동화 메뉴의 워크플로우 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038114650/original/tRXiDgUdX_4fI8YqkdCz_A9hIUQ6EHf2ow.png?1733903018)

2. 오른쪽 위의 **+ Create Workflow**(워크플로우 만들기) 버튼을 클릭하세요.
3. 드롭다운 메뉴에서 **처음부터 시작**을 선택하세요. 워크플로우 빌더 화면이 열려요.

   ![처음부터 시작 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038132428/original/zWd3p4FdFP0hYyIRAO5JVwCDYvDvw66MLQ.png?1733913709)

4. **+** 버튼을 클릭해 워크플로우 액션 목록을 열어요.
5. 아래로 스크롤해서 **Add to Workflow**를 찾아 클릭하세요. 설정 창이 열려요.

   ![액션 목록에서 Add to Workflow 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038115145/original/pNuCen1d6iXBNwiSLuY9sEKNrGIvKsuklA.png?1733903456)

### 액션 이름 정하기

나중에 알아보기 쉽도록 액션 이름을 지어 주세요. 이 예시에서는 **“Add to AI Appointment Booking Workflow”**라고 이름 붙였어요.

![액션 이름 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038115198/original/gr39JSt3FZrwEd59VtOK2D52GLTqCrh7cw.png?1733903483)

### 대상 워크플로우 선택하기

연락처를 추가할 워크플로우를 고르세요. 이 예시에서는 이미 만들어 둔 “AI Appointment Booking” 워크플로우를 선택했어요.

![대상 워크플로우 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038115668/original/Kc_sYyQmb_EfASQ6ZlIb2lJqVNHBSFY1Cw.png?1733903724)

### Pass Input Trigger Parameters 켜기 (선택)

처음 워크플로우의 트리거 데이터를 새 워크플로우로 가져가려면 이 옵션을 켜세요. 예를 들어 연락처 정보나 예약 날짜 같은 핵심 정보를 넘길 수 있어요.

{% hint style="info" %}
이 옵션은 원래 트리거 이벤트의 데이터만 받는 워크플로우로 전달해요. 워크플로우 중간에 만들어진 결과는 전달하지 않아요. 예를 들어 **Custom Code**(커스텀 코드) 액션의 API 호출로 받은 데이터는 전달되지 않아요.
{% endhint %}

![Pass Input Trigger Parameters 옵션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038115803/original/9xzDXbG9XT_zf8sIhDxRhaxJZINMpnQgyA.png?1733903816)

### 액션 저장하기

워크플로우 빌더로 돌아가기 전에 아래쪽의 **Save Action**(액션 저장) 버튼을 꼭 클릭하세요.

![Save Action 버튼 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038115871/original/aTc1vxLiW5WhluFw4lWVhcCtVRetLnc5WA.png?1733903843)

### 테스트하고 저장하기

테스트를 실행해서 액션이 의도대로 동작하는지 확인하세요.

{% hint style="info" %}
워크플로우 빌더를 나갈 때는 초안(Draft)을 꼭 **Save**(저장)하세요. 그러면 나중에 다시 들어왔을 때 작업하던 곳에서 이어서 만들 수 있어요.
{% endhint %}

![워크플로우 테스트와 저장 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038116576/original/WdUuFt-1pM9V-4cUMjnWvbW9v_brVnvozQ.png?1733904323)

### 워크플로우 게시하기

모두 확인했다면 토글을 켜서 워크플로우를 활성화하세요.

![워크플로우 활성화 토글 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038132785/original/oxz5feoW5CHFb-2FwvvHMiNYhF52uDGl1Q.png?1733913938)

## 자주 묻는 질문

### 연락처를 여러 워크플로우에 한꺼번에 추가할 수 있나요?

아니요. **Add to Workflow** 액션은 한 번에 하나의 워크플로우에만 연락처를 추가해요. 대신 자동화 안에 **Add to Workflow** 액션을 여러 개 넣으면 같은 효과를 낼 수 있어요.

### Pass Input Trigger Parameters를 켜면 어떻게 되나요?

이 옵션을 켜면 처음 트리거의 데이터(연락처 정보, 예약 날짜 등)가 새 워크플로우로 넘어가요. 그래서 새 워크플로우의 이후 액션을 개인화할 수 있어요.

### Pass Input Trigger Parameters를 켜면 어떤 필드를 쓸 수 있나요?

이 옵션을 켜면 **원래 워크플로우의 트리거 이벤트** 데이터가 모두 새 워크플로우로 넘어가요. 정확한 필드는 트리거 종류에 따라 달라요.

- 예약 트리거: **Contact Name**(연락처 이름), 이메일, 전화번호, 예약 날짜/시간, 배정된 캘린더, 상태(예약됨/취소됨), 예약 ID
- 폼 제출 트리거: 폼 이름, 제출 날짜/시간, 제출된 필드(매핑된 모든 값), **Contact Details**(연락처 세부정보)
- 설문 트리거: 설문 이름, 제출된 답변, **Contact Details**
- **Inbound Call**(인바운드 통화)/대화 트리거: **Contact Details**, 출처(통화/채팅), 타임스탬프, **Assigned User**(할당된 사용자, 있는 경우)
- 커스텀 이벤트 트리거: 해당 이벤트에 정의한 모든 커스텀 필드와 값

이 필드는 새 워크플로우의 액션(예: **Send Email**(이메일 보내기), **Update Custom Value**(커스텀 값 업데이트))에서 확인하고 매핑할 수 있어요. 덕분에 개인화 정보가 제대로 이어져요.

### Pass Input Trigger Parameters가 제대로 동작하는지 어떻게 확인하나요?

워크플로우를 활성화하기 전에 테스트를 실행해 보세요. 데이터가 의도대로 전달되는지 확인할 수 있어요.

### Add to Workflow 액션을 쓸 때 다음 워크플로우의 트리거는 무엇으로 설정하나요?

**Add to Workflow** 액션으로 연락처를 받는 워크플로우에는 트리거를 따로 설정하지 않아도 돼요. 워크플로우가 시작되는 지점에서 시스템이 연락처를 자동으로 등록해 주기 때문에 추가 트리거가 필요 없어요. 자동화로 연락처가 추가된다고 생각하고 새 워크플로우를 설계한 다음, 원하는 첫 액션(예: **Send Email**, **Wait**(대기), **Create/Update Opportunity**(기회 생성/업데이트))으로 시작하세요. **Pass Input Trigger Parameters**를 켜면 원래 워크플로우의 데이터로 이후 단계를 개인화할 수도 있어요.

### Custom Code 액션의 결과(예: API 응답)를 Pass Input Trigger Parameters로 다음 워크플로우에 넘길 수 있나요?

아니요. **Pass Input Trigger Parameters**는 워크플로우가 시작될 때의 트리거 이벤트 데이터만 전달해요. 이후에 실행되는 액션의 결과(**Custom Code** 응답 포함)는 전달하지 않아요. API 응답 데이터를 다른 워크플로우에서 쓰려면, 먼저 응답을 다음 워크플로우가 읽을 수 있는 곳에 저장하세요. 예를 들어 연락처 필드나 **Custom Value**(커스텀 값)에 저장한 뒤, 연락처를 다음 워크플로우에 추가하면 돼요.
