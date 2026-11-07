---
원문: https://help.gohighlevel.com/support/solutions/articles/155000009276-how-to-automate-internal-comments-in-highlevel-workflows
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Add Internal Comment(내부 댓글 추가)로 내부 댓글 자동화하기

**Add Internal Comment**(내부 댓글 추가) 워크플로우 액션을 쓰면 하이퍼클래스 대화에 비공개 댓글을 자동으로 남길 수 있어요. 고객 정보를 공유하고, 후속 조치를 안내하고, 팀원을 @멘션하는 일을 손으로 하지 않아도 돼요. 댓글은 대화 기록에 표시되고 고객에게는 전송되지 않아요. 액션 설정을 더 자세히 알고 싶다면 [워크플로우 액션 — Add Internal Comment](../../03-대화/대화/workflow-actions-add-internal-comment.md) 문서를 참고하세요.

## Add Internal Comment 액션이란?

**Add Internal Comment** 액션은 워크플로우가 실행될 때 연락처의 대화에 내부 댓글을 자동으로 남겨요. 팀이 후속 조치를 조율하고, 중요한 정보를 공유하고, 내부 소통을 한곳에 정리하는 데 도움이 돼요. 예를 들어 우선순위가 높은 리드가 워크플로우에 들어오면, 할당된 사용자를 멘션하면서 연락하라는 안내를 댓글로 남길 수 있어요.

## 이럴 때 편해요

자동 내부 댓글을 쓰면 여러 도구를 오가지 않고도 팀이 상황을 파악하고 제때 움직일 수 있어요.

- 자동 소통: 워크플로우 트리거에 따라 내부 댓글을 자동으로 추가해요.
- 팀 협업: 사용자를 @멘션해서 해당 대화를 확인하게 해요.
- 더 나은 맥락: 안내 사항과 고객 정보를 대화 기록 안에 함께 둬요.
- 빠른 후속 조치: 리드에게 관심이 필요할 때 담당 팀원에게 알려요.
- 비공개 소통: 고객에게 메시지를 보내지 않고 내부 정보를 공유해요.

## 자동 내부 댓글에서 @멘션 쓰기

@멘션으로 대화를 확인하거나 처리해야 할 팀원을 지정할 수 있어요. 멘션된 사용자는 연락처 팔로워로 추가되고, 각자의 알림 설정에 따라 알림을 받아요.

멘션 옵션은 두 가지예요.

- **Assigned User**(할당된 사용자): 워크플로우가 실행될 때 연락처에 할당된 사용자를 자동으로 멘션해요.
- **Specific User**(특정 사용자): 서브 계정에서 선택한 팀원을 한 명 이상 멘션해요.

연락처에 할당된 사용자가 없으면 **Assigned User** 멘션은 빠져요. 나머지 댓글 내용이 비어 있지 않다면 그 내용은 그대로 남아요.

{% hint style="warning" %}
멘션된 사용자는 연락처 팔로워로 추가돼요. 그러면 해당 대화를 보고 답장할 수 있는 권한이 생길 수 있어요.
{% endhint %}

## 알아 두면 좋은 점과 제한 사항

자동 댓글이 어떻게 동작하는지 알아 두면 정보 누락, 의도하지 않은 알림, 불필요한 워크플로우 오류를 막을 수 있어요.

- 내부 댓글은 팀원에게만 보이고 고객에게는 보이지 않아요.
- 댓글을 남겨도 SMS나 이메일 메시지 크레딧이 차감되지 않아요.
- 댓글은 남긴 뒤에 편집하거나 삭제할 수 없어요.
- 첨부파일은 지원하지 않아요.
- 댓글 내용이 없는 액션은 건너뛰어요.
- 워크플로우에서 멘션을 지워도, 이전 실행에서 이미 추가된 팔로워는 제거되지 않아요.
- 멘션 알림은 **설정 > 내 프로필 > 알림**에 있는 사용자별 설정에 따라 달라요.

## Add Internal Comment 액션 설정하기

이 액션을 설정하면 워크플로우가 대화 맥락을 자동으로 남기고 알맞은 팀원에게 알릴 수 있어요. 워크플로우 기본 사용법은 [워크플로우 시작하기](../기타/getting-started-with-workflows.md), 사용할 수 있는 액션 전체 목록은 [워크플로우 액션 전체 목록](../기타/what-are-workflow-actions-complete-list.md)에서 확인하세요.

1. **자동화 > 워크플로우**로 이동해서 새 워크플로우를 만들거나 기존 워크플로우를 열어요.

   ![워크플로우 목록에서 워크플로우를 여는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083929401/original/PrQFunuVMhcWHHsgQBZi3XuDtu1CTuJYzA.png?1792655707)
2. **+** 아이콘을 클릭하고 Communication Actions(커뮤니케이션 액션) 아래에서 **Add Internal Comments**(내부 댓글 추가)를 선택해요.

   ![커뮤니케이션 액션에서 내부 댓글 추가를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083929532/original/CkjqDoEV80fuXPICUsDyaerJvSBpg-DA1w.png?1792655775)
3. 팀원에게 보여 주고 싶은 정보나 안내 사항을 댓글로 써요.
4. **@** 옵션을 눌러 필요에 따라 **Assigned User** 또는 **Specific User**를 선택해요.
5. **Save Action**(액션 저장)을 클릭해서 워크플로우에 액션을 추가해요.

   ![액션 저장 버튼을 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083929640/original/gtjrCUDifRgwprawZexbmeJ-P_5mvyo8gQ.png?1792655832)
6. 테스트 연락처로 워크플로우를 테스트해요. 댓글이 제대로 표시되는지 확인한 뒤 워크플로우를 게시해요.

### 활용 예시

- 우선순위가 높은 리드: "핫 리드가 들어왔어요. @Assigned User 확인하시고 최대한 빨리 연락해 주세요."
- 예약 불참: "고객이 예약에 나타나지 않았어요. 연락해서 일정을 다시 잡아 주세요."
- 에스컬레이션: "이 대화는 추가 지원이 필요해요. 내용을 확인하고 후속 조치를 해 주세요."

## 자주 묻는 질문

### 자동 내부 댓글을 고객도 볼 수 있나요?
아니요. 내부 댓글은 비공개로 유지되고, 고객과 소통하는 채널로는 전송되지 않아요.

### 여러 팀원을 한 번에 멘션할 수 있나요?
네. 댓글 하나에서 여러 명의 **Specific User**를 멘션할 수 있어요.

### 연락처에 할당된 사용자가 없으면 어떻게 되나요?
**Assigned User** 멘션은 빠져요. 다른 댓글 내용이 있으면 댓글은 그대로 남아요.

### @멘션하면 팀원에게 알림이 가나요?
네. 각 사용자의 알림 설정에 따라 알림이 가요.

### 내부 댓글을 편집하거나 삭제할 수 있나요?
아니요. 이미 남긴 내부 댓글은 편집하거나 삭제할 수 없어요.

### 댓글 내용이 비어 있으면 어떻게 되나요?
워크플로우가 해당 액션을 건너뛰어요. 건너뛴 이유는 워크플로우의 **Execution Logs**(실행 로그)에서 확인할 수 있어요.

### 자동으로 남긴 내부 댓글은 어디서 볼 수 있나요?
**대화**에서 해당 대화를 열면 타임라인에 댓글이 표시돼요. **내부 댓글**과 **Mentions**(멘션) 필터로도 찾을 수 있어요. 내부 댓글 사용법은 [대화에서 내부 댓글 추가하고 사용자 멘션하기](../../03-대화/대화/conversations-how-to-add-internal-comments-mention-users.md), 대화 화면 전반은 [대화 탭 시작하기](../../03-대화/대화/getting-started-with-the-conversations-tab.md)를 참고하세요.

### Add Internal Comment와 Add to Notes는 같은 기능인가요?
아니요. **Add Internal Comment**는 대화 타임라인에 직접 댓글을 남기고, **Add to Notes**(메모에 추가)는 해당 레코드의 메모 영역에 정보를 저장해요. **Add to Notes**는 [워크플로우 액션 — Add to Notes](../Contact-Workflow-Actions/workflow-action-add-to-notes.md) 문서에서 자세히 볼 수 있어요.
