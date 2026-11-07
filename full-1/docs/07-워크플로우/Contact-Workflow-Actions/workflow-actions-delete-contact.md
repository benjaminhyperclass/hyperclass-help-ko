---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003423-workflow-actions-delete-contact
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Delete Contact(연락처 삭제)

워크플로우에서 **Delete Contact**(연락처 삭제) 액션이 무엇인지, 어떻게 설정하는지, 쓰기 전에 무엇을 확인해야 하는지 안내해요.

## Delete Contact 액션이란?

**Delete Contact** 액션을 쓰면 연락처의 모든 기록을 시스템에서 자동으로 삭제할 수 있어요. 특정 조건에 맞아서 CRM에 더 이상 필요 없는 연락처를 정리할 때 사용해요. 연락처를 삭제하면 되돌릴 수 없으므로<!-- 검토 필요: 원문 내용이 서로 다름 --> 설정을 꼼꼼히 확인하고 영향을 이해한 뒤에 쓰세요.

## Delete Contact 액션 사용하기

{% hint style="warning" %}
자동 삭제 대상이 되는 필터 조건을 꼭 세 번 확인하고, 워크플로우를 테스트한 뒤에 그대로 두세요. 연락처 데이터는 직접 백업해 두고, **Delete Contact** 액션을 쓴다는 사실을 관련 팀원에게 알려 두는 것이 좋아요.
{% endhint %}

1. 워크플로우 빌더를 열어요. 서브 계정의 **자동화** 메뉴로 이동해서 원하는 워크플로우를 열거나, 새로 만들거나, 레시피로 만들어요.

   ![워크플로우 빌더 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040683086/original/u0cx1mRLK1gmXsIteDcxdqITxu9TJo-6Sw.png?1738188522)

2. 액션을 추가해요. 워크플로우 빌더에서 더하기(+) 버튼을 눌러 액션 메뉴를 열고, 검색하거나 스크롤해서 **Delete Contact**를 찾아 선택해요.

   {% hint style="info" %}
   **Delete Contact** 액션은 워크플로우의 맨 끝에 두세요. 연락처가 바로 삭제되면서 워크플로우도 끝나기 때문에, **Delete Contact** 뒤에 있는 액션은 실행되지 않아요.
   {% endhint %}

   ![액션 메뉴에서 Delete Contact 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040683126/original/FClehbjOj1HSlOHtl_wxXgxLutnC-Aimqg.png?1738188646)

3. 액션을 구성해요. **Delete Contact** 액션에는 따로 설정할 항목이 없어요. 워크플로우에서 진행 중인 연락처를 그대로 삭제해요.

   ![설정 항목이 없는 Delete Contact 액션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040683193/original/Mu8ynRedaS6nVDdLjbGRwJgUhSsNWgAioA.png?1738188834)

4. **Save Action**(액션 저장)을 눌러 워크플로우에 액션을 추가해요. 워크플로우를 테스트한 뒤 준비가 되면 게시할 수 있어요.

   ![Save Action 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040683264/original/_LohJHHZoMXWc0iaw0pncXmvP4kmjBzjlQ.png?1738188970)

## 자주 묻는 질문

### 삭제된 연락처를 복원할 수 있나요?

**Delete Contact** 옵션으로 삭제한 연락처는 삭제 후 2개월 이내에 복원할 수 있어요. 자세한 내용은 "How To Delete Contacts And Their Data" 문서를 참고하세요.

### 연락처를 삭제하면 무엇이 함께 삭제되나요?

연락처 기록과 함께 대화, 메모, 작업, 활동 이력 같은 관련 데이터도 모두 삭제되고 영구적으로 사라져요. 삭제된 연락처를 복원해도 이 관련 데이터는 복구되지 않아요.

### 삭제 말고 다른 방법은 없나요?

있어요. 연락처를 영구 삭제하고 싶지는 않지만 워크플로우 진행만 멈추고 싶다면 **Remove From Workflow**(워크플로우에서 제거) 액션을 써 보세요. 해당 워크플로우에서만 연락처를 빼고, 시스템에 있는 연락처 데이터에는 영향을 주지 않아요.
