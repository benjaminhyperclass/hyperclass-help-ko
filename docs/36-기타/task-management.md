---
원문: /support/solutions/articles/155000004498-task-management
번역일: 2026-11-07
카테고리: 36-기타
---

# 작업 관리: 작업 만들기, 필터, 정렬

**연락처 > 작업** 목록 화면에서 작업을 만들고 확인하는 방법을 안내해요. 상세 필터, 정렬, 일괄 작업을 쓰면 작업을 더 쉽게 관리할 수 있어요.

## 작업 목록 열기

![작업 목록 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040018805/original/beZbCui3MRUyeesI5CRu-hKyOKUCZkhwLg.png?1737116275)

1. 왼쪽 메뉴에서 **연락처 > 작업**으로 이동하세요.
2. 목록 위쪽에서 필터, 정렬, 일괄 작업을 쓸 수 있어요.

## 새 작업 만들기

![작업 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052808108/original/6eTMJS-r6Jy_QQMuDkMG_pu3Dd2lMOIqoQ.png?1756726621)

1. 오른쪽 위에서 **+ 작업 추가**를 클릭하세요.
2. 아래 항목을 입력하세요.
   - **제목**: 작업을 간단히 설명해 주세요.
   - **설명**(선택): 작업에 대한 자세한 내용을 적어요. 굵은 글씨, 색상 글씨, URL 같은 서식도 넣을 수 있어요.
   - **마감 날짜 및 시간**: 작업의 마감 기한을 정해요.
   - **반복 작업**(선택): 켜면 사용자 지정 일정에 따라 반복되는 작업을 만들 수 있어요.
   - **연락처**(선택): 작업을 특정 연락처에 지정해요.
   - **담당자**(선택): 작업을 팀원에게 지정해요.
3. **저장**을 클릭하면 저장한 뒤 편집 화면으로 이동해요. 이어서 다른 작업을 만들려면 **Save and Add Another**(저장 후 추가)를 클릭하세요.

{% hint style="info" %}
워크플로우 액션 **Add Task**(작업 추가)는 실행 시점에 연락처가 없으면 연락처 없는 작업을 만들어요. 연락처가 있으면 작업이 그 연락처에 자동으로 연결돼요.
{% endhint %}

## 작업 관리하기

![작업 관리 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040018986/original/Mx3vy2o0BtmhqtwWFE3QnMuNKG6qCzeQ8g.png?1737116438)

- **필드 편집**: **작업** 열의 연필 아이콘을 쓰거나 작업 제목을 클릭하면 작업 내용을 수정할 수 있어요.
- **작업 삭제**: 작업을 선택하고 **삭제**를 클릭하세요. 삭제한 작업은 2개월 안에 복원할 수 있어요.
- **일괄 작업**: 작업을 여러 개 선택해 한꺼번에 완료 처리하거나 삭제할 수 있어요.

### 연락처 없는 작업 보기

워크플로우는 연락처 없이도 작업을 만들 수 있어요. 이런 작업은 작업 목록에 독립 작업으로 표시돼요. 필터를 쓰면 빠르게 찾아서 처리할 수 있어요.

{% hint style="info" %}
삭제한 작업은 2개월 안에 복원할 수 있어요.
{% endhint %}

## 상세 필터

**상세 필터**를 클릭하면 다음 기준으로 작업을 좁혀서 볼 수 있어요.

- 담당자
- 상태(전체, 오늘 마감, 기한 초과, 예정)
- 마감 날짜
- 커스텀 필드(해당하는 경우)

![상세 필터 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040020206/original/JhVVTpYB-EWKxZMuzJ0a9PPYbjAQLJ78iQ.png?1737117308)

## 정렬

**정렬**을 클릭하면 다음 기준으로 작업 순서를 바꿀 수 있어요.

- 마감 날짜
- 제목
- 생성 일시
- 수정 일시

![정렬 옵션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155040020892/original/IOYRj0_pFi37FoNtFyn7QErnS9-CRGBn5w.png?1737117895)

## 자주 묻는 질문

### 워크플로우에서 특정 시간이 마감인 작업을 만들려면 어떻게 하나요?

워크플로우 액션 **Add Task**(작업 추가)를 사용하고, **Due In**(마감까지 기간) 필드를 **Dynamic Mode**(동적 모드)로 바꾸세요. 그러면 커스텀 값이나 동적 변수로 특정 날짜와 시간(예: 05-30-2025 03:00 PM)을 입력할 수 있어요.

### 워크플로우로 연락처 없는 작업을 만들 수 있나요?

네. 연락처가 없을 때 **Add Task** 액션은 독립 작업을 만들어요.

### 연락처 없는 작업은 어떻게 찾나요?

**연락처** 필터를 **Unassigned**(미지정)로 설정하세요. 연락처 없음을 나타내는 값을 써도 돼요. 필요하면 **담당자**와 **마감**도 함께 지정해 범위를 더 좁힐 수 있어요.

### 연락처 없는 작업에도 알림이 가나요?

네, 워크플로우로 알림을 추가하면 돼요. 예를 들어 **Task Reminder**(작업 알림) 트리거와 **Internal Notification**(내부 알림) 액션을 함께 쓸 수 있어요. 직접 설정하지 않으면 알림이 자동으로 가지 않아요.
