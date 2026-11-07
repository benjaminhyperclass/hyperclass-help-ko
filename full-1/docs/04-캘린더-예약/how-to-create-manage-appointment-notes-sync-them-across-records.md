---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003444-how-to-create-manage-appointment-notes-sync-them-across-records
번역일: 2026-11-06
카테고리: 04-캘린더-예약
---

# 예약 메모 작성·관리하고 연락처·기회·대화에 동기화하기

예약 메모를 한 번만 작성하면 같은 예약과 연결된 연락처, 기회, 대화에서 똑같이 볼 수 있어요. 이 문서에서는 메모를 만들고, 관리하고, 필터링하는 방법을 안내해요. Google/Outlook과 동기화되는 내용과 하이퍼클래스 안에만 남는 내용도 구분해서 설명해요.

[동영상](https://www.youtube.com/embed/LRFZykyKolQ?&wmode=opaque)

## 예약 메모란?

예약 메모는 캘린더 일정 하나에 연결된 내부용 메모예요. 메모를 추가하면 그 예약과 연결된 연락처, 기회, 대화에서도 자동으로 볼 수 있어요.

예약 메모를 수정하거나 삭제하면 메모가 표시되는 모든 곳에 반영돼요. 같은 내용을 다시 입력하거나 버전을 맞출 필요가 없어요. 메모마다 작성자와 작성 시각이 기록되므로 담당자가 바뀔 때도 확인하기 쉬워요. 예약 메모는 하이퍼클래스 안에서만 쓰는 내부 메모예요. 외부 캘린더의 설명란은 따로 관리되며 예약 메모를 대신하지 않아요.

예약의 메모 영역에는 세 가지 내용이 보여요.

- 사용자가 추가한 메모: 연락처, 기회, 대화로 함께 표시돼요.
- 예약한 사람이 예약 폼에 입력한 **추가 정보**: **Appointment Modal**(예약 창)에서만 보여요.
- Google/Outlook 일정 설명: 양방향 동기화를 켠 경우에만 보이며, 예약 창에서만 보여요.

내부 메모는 외부 캘린더로 절대 동기화되지 않아요. 양방향 동기화를 켜면 Google/Outlook의 일정 설명이 참고용으로 예약 안에 들어와요.

## 예약 메모의 장점

예약 메모를 팀이 함께 보는 기준 정보로 쓰면 이런 점이 좋아요.

- 일관성: 예약에 연결된 메모 하나가 연락처, 기회, 대화에 똑같이 표시돼요.
- 실시간 반영: 한 곳에서 수정하면 메모가 보이는 모든 곳에 바로 반영돼요.
- 찾기 쉬움: 출처(사용자, 워크플로우, API)별로 필터링해서 필요한 메모만 볼 수 있어요.
- 책임 소재 명확: 메모마다 작성자와 작성 시각이 남아요.

## 메모가 각 화면에 표시되는 방식

예약 메모는 연락처를 따라다녀요. 그래서 캘린더로 돌아가지 않아도 같은 내용을 볼 수 있어요. 예약에서 만든 메모와 다른 화면에서 보는 메모는 같은 메모예요. 어느 화면에서 열어도 내용, 작성자, 작성 시각이 같아요.

- **연락처**: **연락처**를 열고 사람을 선택하세요. 오른쪽 **메모** 패널과 **예약** 카드에서 예약의 내부 메모를 보거나 편집할 수 있어요.
- **대화**: **대화**를 열고 대화를 선택하세요. 오른쪽 **메모** 패널에서 해당 연락처와 연결된 예약 메모를 보거나 편집할 수 있어요.
- **기회 관리**(Opportunities): **기회 관리**를 열고 해당 기회를 클릭하세요. 오른쪽에 열리는 창에서 **메모**를 선택하면 그 기회의 연락처와 연결된 예약 메모를 보거나 편집할 수 있어요.

```
메모는 지원되는 기록 간에 실시간으로 동기화돼요. 팀은 화면마다 내용을 새로 확인하지 않아도 항상 최신 버전을 볼 수 있어요.
```

아래 표에서 어떤 내용이 어디에 표시되는지 확인하세요.

| 입력 유형 | 예약 창 | 연락처 | 기회 | 대화 |
| --- | --- | --- | --- | --- |
| 내부 예약 메모(사용자/워크플로우/API) | ✔ | ✔ | ✔ | ✔ |
| 연락처 메모(연락처에서 추가) | — | ✔ | — | — |
| 예약한 사람의 추가 정보 | ✔ | — | — | — |
| Google/Outlook 일정 설명 | ✔ | — | — | — |

## 예약 메모 추가·확인·관리하기

어디서 작업하든 맥락을 남길 수 있도록 자주 쓰는 경로를 정리했어요.

### 캘린더 보기에서 추가하기(예약이 잡힌 경우)

1. **캘린더 > 캘린더 보기**로 이동하세요.
2. 예약을 클릭해 연 다음 **메모** 탭을 선택하세요.
3. **내부 메모 추가**를 클릭하고 메모를 입력한 뒤 **저장**을 클릭하세요.

![캘린더 보기에서 예약 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058316247/original/gK20-NRn1D44NPPU22r7Hx9Mcp4-OSEung.jpeg?1763046062)

![메모 탭에서 내부 메모 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058318997/original/FssWJHbNruJmGMvPzoxmk7WjdSnHUzc2bQ.png?1763047372)

### 예약 목록 보기에서 추가하기(예약이 잡힌 경우)

1. **캘린더 > 예약 목록 보기**로 이동하세요.

   ![예약 목록 보기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058316455/original/Ahg24nQWy2bV_KXGUFhilpH1ib0OiwcjqQ.png?1763046159)

2. 예약을 찾아 **⋮** 메뉴를 클릭하고 **편집**을 선택하세요.
3. **세부 정보 수정 > 내부 메모**에서 **내부 메모 추가**를 클릭하고 메모를 입력한 뒤 **저장**을 클릭하세요.

   ![세부 정보 수정에서 내부 메모 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058316532/original/-sjvkPVFOUQXruLDkETuXj94f2TqOKm61g.png?1763046185)

### 고객이 예약할 때 입력하는 내용(추가 정보 필드)

캘린더 폼에 **추가 정보** 필드가 있으면, 고객이 입력한 내용이 예약과 함께 예약 맥락으로 표시돼요.

![예약 폼의 추가 정보 필드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058317107/original/b6vjMEETmkR5AdDzaLC4VoGSUQ0CmkptFg.jpeg?1763046480)

### 내부 메모 작성하기(편집기와 상태)

메모를 작성하면서, 필요하면 같은 패널에서 예약 **상태**도 바꿀 수 있어요. 그러면 메모 내용과 미팅 진행 상황을 함께 맞춰 둘 수 있어요.

1. **캘린더 보기** 또는 **예약 목록 보기**에서 예약을 열고 **내부 메모 추가**를 클릭하세요.

   ![내부 메모 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058317586/original/hAS0EHyJB_x-jVcqsek-QYQjPOTD8ddWeA.png?1763046756)

2. 메모를 입력하세요. 굵게, 기울임, 밑줄, 목록, 링크 같은 서식을 쓸 수 있어요. 편집기에는 최대 65,000자까지 입력할 수 있어요.

   ![메모 편집기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058317741/original/gGG2xKDR3gP1pX-BaIWuJm1rm4UtpznYVg.png?1763046809)

## 예약 메모 관리하기

메모가 많아도 쉽게 찾고 관리할 수 있어요.

### 출처별로 필터링하기

**내부 메모**의 필터 아이콘을 클릭하고 **사용자**, **API**, **워크플로우** 중에서 선택하세요. 여러 개를 함께 선택할 수 있어요.

![출처별 필터](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058318111/original/np4IdFXlnFbldmr_bIUU_DtoDxL5wxxG4w.png?1763046975)

### 메모 정렬하기

정렬 아이콘을 클릭하면 **생성일** 기준으로 오름차순 또는 내림차순으로 정렬할 수 있어요.

![생성일 기준 정렬](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058318173/original/CawJEeY8WmDd3ZSj7ZrUK5H-pL2j4772JA.png?1763047007)

### 메모 검색하기

**내부 메모**의 **메모 검색** 입력란에 키워드를 입력하면 이 예약의 메모 중에서 해당 키워드가 들어간 메모를 찾을 수 있어요.

![메모 검색](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058318272/original/ZuQ1fWx1SJGu5hobm34NuT_cR9oM750kTw.png?1763047034)

### 상태

**예약 목록 보기**의 탭(**Upcoming**(예정), **Cancelled**(취소됨), **All**(전체))이나 **세부 정보 수정** 패널의 **상태** 필드로 예약을 찾아볼 수 있어요. 예약 상태와 관계없이 메모는 계속 볼 수 있어요. 상태를 바꿔도 메모는 삭제되지 않아요.

![예약 상태 탭과 상태 필드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058318438/original/2afYjsqtHL4cpdhJCEAtiqOPWc4DyIj5ZQ.png?1763047136)

### 메모 편집·삭제하기(⋮ 메뉴)

1. 예약을 열고 **내부 메모**로 이동하세요.
2. 메모 카드의 **⋮**(점 세 개) 메뉴를 클릭하고 **편집** 또는 **삭제**를 선택하세요.

메모를 삭제하면 그 메모가 표시되던 연락처, 기회, 대화에서도 사라져요. 삭제한 메모는 30일 이내에 복원할 수 있어요.

![메모 카드의 편집·삭제 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058318524/original/cGyWQHPrCfbLbkHPuJfJlwKqXWxZA6luzw.png?1763047179)

## 자주 묻는 질문

### 내부 예약 메모, 예약한 사람의 추가 정보, Google/Outlook 일정 설명은 실제로 어떻게 다른가요?
내부 예약 메모는 하이퍼클래스에서 사용자, 워크플로우, API가 만드는 메모예요. 연결된 연락처, 기회, 대화로 함께 표시돼요. 예약한 사람의 **추가 정보**는 고객이 예약할 때 입력한 내용이며, 해당 예약에만 남아요. Google/Outlook 일정 설명은 양방향 동기화를 켰을 때 예약에 외부 맥락으로 표시돼요. 다른 화면으로 전달되지 않고 내부 메모를 대신하지도 않아요.

### 연락처·기회·대화 화면에서 예약 메모를 수정하면 예약에도 반영되나요?
네, 반영돼요. 여러 곳에서 참조하는 같은 메모이기 때문이에요. 어느 화면에서 수정하거나 삭제하든 예약을 포함해 메모가 표시되는 모든 곳에 반영돼요.

### 예약을 변경하거나 취소하면 메모는 어떻게 되나요?
메모는 예약 기록에 그대로 남고, 이 문서에서 설명한 규칙에 따라 계속 보여요. **상태**(**Confirmed**(확정됨), **Cancelled**(취소됨), **Showed**(참석), **No Show**(노쇼), **Invalid**(유효하지 않음), **Unconfirmed**(미확정))를 바꿔도 메모는 삭제되지 않아요.

### 반복 예약이나 복제한 예약에서는 메모가 어떻게 되나요?
메모는 특정 예약 하나에 연결돼요. 따로 맥락이 필요한 예약마다 메모를 작성하세요. 새로 만들거나 복제한 일정으로 메모가 자동으로 복사되지는 않아요.
