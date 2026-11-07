---
원문: /support/solutions/articles/155000002688-workflow-action-update-contact-field
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Update Contact Field(연락처 필드 업데이트)

**Update Contact Field**(연락처 필드 업데이트) 액션은 워크플로우가 실행될 때 연락처 정보를 자동으로 바꿔 줘요. 워크플로우 안에서 하이퍼클래스가 필드 값을 대신 업데이트해야 할 때 쓰세요.

{% hint style="info" %}
**연락처 한 명만 수정하나요?**

워크플로우가 필요 없어요. **연락처**로 이동해 해당 연락처를 열고, 이름·이메일 주소·전화번호 같은 정보를 직접 편집하세요.
{% endhint %}

## Update Contact Field 액션이란?

**Update Contact Field** 액션은 연락처 레코드에 저장된 정보를 바꿔요.

이 액션으로 할 수 있는 일은 다음과 같아요.

- 기본 필드 업데이트
- 커스텀 필드 업데이트
- 고정 값 사용
- 동적 값(Dynamic Value) 사용
- 여러 필드를 한 번에 업데이트
- 지원되는 다중 선택 필드에서 기존 선택 항목을 지우지 않고 새 선택 항목 추가
- 커스텀 필드 데이터 삭제

## 이 액션을 쓰면 좋은 점

1. 정확한 연락처 데이터: 연락처 데이터베이스를 항상 최신으로 유지해서 오래되었거나 잘못된 정보가 남을 위험을 줄여요.
2. 더 나은 개인화: 최신 연락처 정보를 활용해 더 개인화되고 정확하게 겨냥한 메시지를 보낼 수 있어요.
3. 워크플로우 효율 향상: 사람이 직접 손대지 않아도 연락처 레코드가 자동으로 업데이트되어 시간과 수고를 아낄 수 있어요.
4. 매끄러운 고객 경험: 연락처 정보를 정확하게 관리하면 알맞은 때에 알맞은 내용을 전달할 수 있어요.

## 동작 방식: Add Field, Update, Add to Field Data, Clear

각 옵션이 연락처 데이터에 어떤 영향을 주는지 알아 두면 값이 실수로 덮어쓰이거나 삭제되는 일을 막을 수 있어요. **Add Field**(필드 추가)는 액션에 필드를 하나 더 추가하는 버튼이고, **Update field data**(필드 데이터 업데이트), **Add to field data**(필드 데이터에 추가), **Clear field data**(필드 데이터 삭제)는 연락처에 저장된 값을 어떻게 처리할지 정해요.

- **Add Field**: 같은 액션에 필드와 값을 입력하는 줄을 하나 더 추가해요. 기존 필드 값에 데이터를 덧붙이거나 선택한 작업 유형을 바꾸지는 않아요.
- **Update field data**: 선택한 필드의 현재 값을 설정한 값으로 바꿔요. 다중 선택 필드라면 기존 선택 항목이 새 값으로 바뀌어요.
- **Add to field data**: 연락처에 이미 저장된 선택 항목은 그대로 두고, 선택한 값을 추가해요. 지원되는 다중 선택 필드에서만 쓸 수 있어요. 이 옵션을 선택하면 필드 선택 목록에 지원되는 다중 드롭다운 필드와 다중 체크박스 필드만 표시돼요.
- **Clear field data**: 선택한 필드의 기존 값을 지워서 빈 상태로 만들어요.

### Add to field data 예시

연락처에 **Services Interested In**(관심 서비스)이라는 다중 체크박스 필드가 있고, 현재 다음 항목이 선택되어 있다고 해 볼게요.

- 이메일 마케팅

워크플로우에서 **Add to field data**를 선택하고 다음 항목을 고릅니다.

- SMS 마케팅

액션이 실행된 뒤 **Services Interested In** 필드에는 다음 항목이 들어 있어요.

- 이메일 마케팅
- SMS 마케팅

### 변경 전후 예시

연락처에 현재 다음 정보가 있다고 해 볼게요.

- **City**(도시): Austin
- **Customer Status**(고객 상태): 예비 고객
- **Phone**(전화번호): (512) 555-0100

워크플로우에서 **Update field data**를 선택하고 **City**를 골라 새 값으로 `Dallas`를 입력해요. 이어서 **Add Field**를 선택해 **Customer Status**를 추가하고 `고객`을 입력해요.

액션이 실행되면 결과는 다음과 같아요.

- **City**: Dallas
- **Customer Status**: 고객
- **Phone**: (512) 555-0100

**City**와 **Customer Status**는 업데이트에 포함했기 때문에 기존 값이 새 값으로 바뀌어요. **Phone**은 액션에 포함하지 않았기 때문에 그대로 남아요.

## Update Contact Field 액션 설정하기

1. 왼쪽 메뉴에서 **자동화**로 이동한 다음, 상단의 **워크플로우** 메뉴를 클릭하세요.

   ![자동화 메뉴의 워크플로우 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038202189/original/yBmOc0UE7LlMJuFPwspRPSRxnznpty2Erg.png?1733994774)

2. 워크플로우 편집 화면을 열고 **Update Contact Field** 액션을 추가할 워크플로우를 선택하세요. 새로 만들려면 **Create Workflow**(워크플로우 만들기) 버튼을 클릭하고, 드롭다운 메뉴에서 **처음부터 시작**을 선택하세요.

   ![워크플로우 만들기 버튼과 처음부터 시작 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038202228/original/Ynsn0vA1vlsO2t5dPicDrR7WQwHTPr2CiQ.png?1733994813)

3. **+** 아이콘을 클릭하고, 사용할 수 있는 액션 목록에서 **Update Contact Field**를 선택하세요.

   ![액션 목록에서 Update Contact Field 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038222515/original/OC089a5ZRBwnfvMciICewJWGcYylqc9x5g.png?1734007769)

4. 액션 이름을 알아보기 쉽게 입력하세요. 예를 들어 "연락처 주소 업데이트"처럼 쓰면 워크플로우에서 액션을 찾기 편해요.

   ![액션 이름 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038224174/original/BbSBZ3BEifxBP3I1f6lAv-IKwU_ns-fwXw.png?1734008745)

5. **Action Type**(작업 유형)에서 선택한 필드 데이터를 하이퍼클래스가 어떻게 처리할지 고르세요.
   - 필드의 현재 값이나 선택 항목을 바꾸려면 **Update field data**를 선택하세요.
   - 기존 선택 항목에 값을 덧붙이려면 **Add to field data**를 선택하세요. 이 옵션을 선택하면 필드 선택 목록에 지원되는 다중 선택 필드만 표시돼요.
   - 필드의 현재 값을 지우려면 **Clear field data**를 선택하세요.

   ![Action Type 옵션 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080977057/original/bjA523waZ8Q97qevRB12THl_s6JZScSfUQ.png?1789477679)

6. 필드를 더 추가하려면 **Add Field** 버튼을 클릭하세요.

   ![Add Field 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038224220/original/KgJcvLBHb5uIsHv9mk0C3e08IY2MS8mL9g.png?1734008758)

7. 업데이트할 필드를 선택하세요. **City**(도시), **Country**(국가), **Phone**(전화번호), **Custom Fields**(커스텀 필드) 등을 고를 수 있어요.

   ![업데이트할 필드 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038224236/original/d-Lz95CZuPiJSoo13ndNWTIpFDb7eHO6tQ.png?1734008768)

8. 필드를 모두 추가했으면 **Save Action**(액션 저장)을 클릭하세요. 그런 다음 샘플 연락처로 테스트해서 필드가 의도한 대로 업데이트되는지 확인하세요.

   ![액션 저장 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038221925/original/Fp0mLL8K0bifgIJ1XvPs4JORlJxdOcNZVQ.jpeg?1734007354)

9. 워크플로우를 활성화하려면 **Publish**(게시) 토글을 켜세요.

   ![Publish 토글](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038221952/original/kPcUBJ882lYdyBz1jRnP9M22AhrroZLI8Q.jpeg?1734007369)

## 자주 묻는 질문

### 액션 하나로 여러 필드를 한 번에 업데이트할 수 있나요?
네, 같은 액션 안에서 여러 필드를 선택해 동시에 업데이트할 수 있어요. 시간을 아끼고 워크플로우도 단순하게 유지할 수 있어요.

### 연락처에 없는 필드를 업데이트하려고 하면 어떻게 되나요?
필드가 없으면 업데이트가 실패하거나 무시될 수 있어요. 이를 피하려면 연락처 레코드나 CRM에 해당 필드가 제대로 만들어져 있는지 먼저 확인하세요.

### Update Contact Field 액션이 잘 작동했는지 어떻게 확인하나요?
샘플 연락처로 워크플로우를 테스트한 다음, 연락처 레코드에 변경 내용이 반영되었는지 확인하세요. 일부 플랫폼은 업데이트를 추적할 수 있는 활동 로그도 제공해요.

### 잘못 업데이트했을 때 되돌릴 수 있나요?
아니요, 한 번 업데이트된 필드는 자동으로 되돌릴 수 없어요. 바로잡으려면 올바른 정보로 필드를 다시 업데이트해야 해요.

### Add Field와 Add to field data는 어떻게 다른가요?
**Add Field**는 같은 Update Contact Field 액션에 필드와 값을 입력하는 줄을 하나 더 추가해요. **Add to field data**는 지원되는 다중 선택 필드의 기존 선택 항목은 그대로 두고, 선택한 값을 덧붙여서 연락처 데이터를 바꿔요.
