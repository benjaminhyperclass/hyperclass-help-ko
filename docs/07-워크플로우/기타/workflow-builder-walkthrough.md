---
원문: /support/solutions/articles/155000001254-workflow-builder-walkthrough
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 빌더 둘러보기

이 문서는 **워크플로우 빌더**(Workflow Builder)의 화면 구성, 주요 기능, 사용 팁을 한 번에 살펴보는 안내서예요. 워크플로우를 처음 쓰는 분도, 기능을 다시 확인하고 싶은 분도 참고할 수 있어요.

{% hint style="success" %}
🎬 **영상으로 배우기** — 창업 챌린지 강의에서 이 내용을 화면으로 직접 보여 드려요.

* [6강 · 자동화의 문법: 트리거·액션·대기·조건 (15:04)](https://www.youtube.com/watch?v=yyvk6kgvbXw&t=904s)
* [6강 · 워크플로우 빌더 인터페이스 투어 (18:55)](https://www.youtube.com/watch?v=yyvk6kgvbXw&t=1135s)

전체 강의 목차: [창업 챌린지 강의 영상으로 배우기](../../01-시작하기/creator-challenge-videos.md)
{% endhint %}

## 이 문서에서 다루는 내용

이 문서는 워크플로우 빌더의 레이아웃, 기능, 활용 팁을 전체적으로 소개해요. 고급 트리거나 액션 설정처럼 더 구체적인 내용이 필요하면 아래 문서를 참고하세요.

- 워크플로우 시작하기
- 워크플로우 트리거 목록
- [워크플로우 액션 목록](what-are-workflow-actions-complete-list.md)

---

## 무한 캔버스 레이아웃

워크플로우 빌더의 무한 캔버스(Infinite Canvas)에서는 워크플로우 전체를 넓게 볼 수 있어요. 다음 기능으로 화면을 조절해 보세요.

- 왼쪽 아래의 **Fit to Screen**(화면에 맞추기)과 **Zoom In**(확대)/**Zoom Out**(축소) 버튼으로 보기 크기를 조절해요.
- 오른쪽 아래의 **Minimap**(미니맵)으로 워크플로우 안에서 현재 보고 있는 위치를 확인하고 이동해요.

복잡한 워크플로우는 관련된 액션끼리 묶고, 알아보기 쉬운 이름을 붙여 정리해 두세요. 워크플로우가 한 화면에 들어올 만큼 작으면 내용을 이해하고 문제를 찾기가 더 쉬워요.

## 캔버스에서 노드 바로 옮기기

표준 워크플로우 빌더에서는 캔버스 위에서 노드를 바로 옮길 수 있어요.

- 노드 위에 마우스를 올리면 점 6개 모양의 드래그 핸들이 나타나요.
- 드래그 핸들을 클릭한 채로 노드를 끌어요.
- **Move here**(여기로 이동) 표시가 보이는 곳에 노드를 놓아요.

마우스 오른쪽 클릭 메뉴로 노드를 하나씩 옮기지 않아도 단계와 분기를 쉽게 재배치할 수 있어요.

![캔버스에서 노드를 끌어 옮기는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039914922/original/LAuW1K8geHJG9gutYFr7gF0cBgrcCkyx3Q.png?1737001655)

---

## 워크플로우 전환기

**Workflow Switcher**(워크플로우 전환기)를 쓰면 빌더를 나가지 않고도 다른 워크플로우로 빠르게 이동할 수 있어요.

왼쪽 패널에서 열거나 `Shift + W`를 눌러 열 수 있어요. 목록을 검색하거나 스크롤해서 이동할 워크플로우를 선택하세요.

자세한 내용은 "하이퍼클래스에서 워크플로우 전환기 사용하기" 문서를 참고하세요.

---

## 새 트리거 추가하기

트리거는 워크플로우를 시작시키는 이벤트예요. 다음 순서로 추가해요.

1. **Add New Trigger**(새 트리거 추가) 버튼을 클릭해요.
2. 목록에서 트리거를 선택해요. 예: **Contact Added**(연락처 추가됨), **Appointment Booked**(예약 완료).
3. 트리거에 맞는 설정을 입력해요.

{% hint style="info" %}
검색창과 카테고리 필터를 쓰면 트리거를 더 빨리 찾을 수 있어요. 검색 결과에는 배지나 앱 정보 같은 추가 정보가 함께 표시될 수 있어서, 알맞은 트리거를 고르는 데 도움이 돼요.
{% endhint %}

![트리거를 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039914975/original/yug6PgoUJWPBwFvOLAzhYhKBqRkRhuHksA.gif?1737001882)

{% hint style="warning" %}
워크플로우에 있는 모든 트리거는 각자의 조건이 충족되면 작동해요. 의도한 대로 워크플로우가 시작되도록 트리거 설정을 꼭 확인하세요.
{% endhint %}

트리거 전체 목록은 워크플로우 트리거 목록 문서에서 확인하세요.

---

### 표준 빌더에서 키보드 단축키 쓰기

표준 빌더에서는 키보드 단축키로 노드 선택과 이동, 액션 복사·붙여넣기, 캔버스 확대·축소, 패널 열기, 노드 삭제, 변경 사항 저장을 할 수 있어요.

전체 단축키와 키 조합은 키보드 단축키 문서를 참고하세요.

---

## 새 액션 추가하기

액션은 트리거가 작동한 뒤 실제로 실행되는 동작이에요. 다음 순서로 추가해요.

1. 워크플로우 선에 있는 **+** 버튼을 클릭해요.
2. 목록에서 액션을 선택해요. 예: **Send Email**(이메일 보내기), **Assign to User**(사용자에게 배정).
3. 워크플로우에 필요한 내용에 맞게 액션을 설정해요.

{% hint style="info" %}
검색창과 카테고리를 쓰면 하이퍼클래스에서 만든 도구와 마켓플레이스 앱의 액션을 빠르게 찾을 수 있어요. 일부 결과에는 가격이나 설치 정보 같은 추가 정보가 표시돼서, 단계를 추가하기 전에 옵션을 비교해 볼 수 있어요.
{% endhint %}

![액션을 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915055/original/Yic1dO9HJdC289lCwscOFsa_SAE--k03iA.gif?1737002097)

일반 액션 외에 좀 더 고급 기능을 하는 액션도 있어요.

- 드립 액션: 연락처가 워크플로우를 진행하는 속도를 늦춰서 흐름을 조절해요.
- 조건 액션: 조건을 확인해서 연락처를 기준에 맞는 경로로 안내해요.
- 목표 액션: 연락처가 중간 액션을 건너뛰고 워크플로우의 뒤쪽 지점으로 바로 넘어가게 해요.

{% hint style="info" %}
캔버스에서 한눈에 알아볼 수 있도록 액션마다 의미 있는 이름을 붙이세요. 워크플로우를 이해하고 관리하기가 쉬워져요.
{% endhint %}

사용할 수 있는 모든 액션은 [워크플로우 액션 목록](what-are-workflow-actions-complete-list.md)에서 자세히 확인하세요.

**Workflow AI Assistant**(워크플로우 AI 어시스턴트)를 쓰면 워크플로우를 이해하고 알맞은 액션을 추가하는 데 도움을 받을 수 있어요. 자세한 내용은 워크플로우 AI 어시스턴트 문서를 참고하세요.

![워크플로우 AI 어시스턴트 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915279/original/GdNuEeH9yq1qa5Vxs9RIDSffGKrW9FtfwQ.png?1737002721)

---

## 연동 기반 액션과 트리거 연결하기

연동 기반 워크플로우 단계는 계정을 연결하기 전에도 필요한 필드를 미리 보여 줘요. 유효한 계정을 연결하기 전까지는 필드가 잠겨 있어요.

연동 기반 단계를 연결하고 설정하는 순서는 다음과 같아요.

1. 워크플로우에 연동 액션이나 트리거를 추가해요.
2. 미리 보기로 표시되는 필드를 확인해요.
3. **Connect your account**(계정 연결)를 클릭해요.
4. 팝업 창에서 연동 설정을 완료해요.
5. 워크플로우로 돌아와요. 계정 선택 항목이 있으면 연결한 계정을 선택해요.
6. 잠금이 풀린 필드를 설정해요.

{% hint style="info" %}
여러 계정 연결

일부 연동은 계정을 둘 이상 연결할 수 있어요. 액션이나 트리거 안의 계정 선택 항목에서 그 단계에 사용할 계정을 고르세요.

선택한 계정을 바꾸면 그 계정에 따라 달라지는 필드가 다시 불러와지거나 초기화될 수 있어요. 저장하기 전에 단계를 확인하세요.

유효하지 않거나 삭제된 계정

선택한 계정이 삭제되었거나 유효하지 않게 되면, 워크플로우 단계는 연결이 필요한 잠금 상태로 돌아가요. 단계를 저장하기 전에 계정을 다시 연결하거나 유효한 다른 계정을 선택하세요.
{% endhint %}

---

## Stats View

**Stats View**(통계 보기)를 쓰면 워크플로우 빌더를 벗어나지 않고 트리거의 등록 현황과 커뮤니케이션 액션의 성과를 확인할 수 있어요.

Stats View를 사용하려면 다음 순서로 진행하세요.

1. 워크플로우를 열어요.
2. 왼쪽 위에서 **Stats View**를 켜요.
3. 통계를 확인할 트리거나 액션을 선택해요.

![Stats View를 켠 워크플로우 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080299684/original/gJgGTZWrmv_KbFYs1gTbw6NrBbFnC79mOQ.jpeg?1788796149)

워크플로우 트리거에서는 Stats View에 다음 항목이 표시돼요.

- **Attempted**(시도됨): 트리거가 확인한 연락처
- **Matched**(일치됨): 트리거 조건을 충족한 연락처
- **Unmatched**(불일치): 트리거 조건을 충족하지 못한 연락처

![트리거 통계 항목 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076675777/original/em6HgH8w14YjMbF48kpLUFYmG0zh0TBGpQ.gif?1784802556)

트리거 통계를 클릭하면 상세 화면이 열려요. 연락처별 결과를 확인하고, 특정 연락처를 검색하고, 조건이 일치하지 않은 이유도 살펴볼 수 있어요.

커뮤니케이션 액션에서는 해당 액션의 발송·반응 통계가 표시돼요. 통계를 클릭하면 상세 리포트가 열려요.

![커뮤니케이션 액션 통계 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076675829/original/IuY1sQN1fo6nTS01f_BMvAEK4WpB0Mx7Ew.png?1784802571)

워크플로우 성과를 분석하는 팁은 [워크플로우 캠페인 분석하기](../../10-마케팅/Workflow-Email-Action/how-to-analyze-workflow-campaigns.md) 문서를 참고하세요. 워크플로우 목록에서도 워크플로우 단위 통계를 볼 수 있어요. **Stats**(통계) 아래의 확장 화살표를 클릭하세요.

![워크플로우 목록의 통계 확장 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915452/original/9rcKt_uTXnQ_WVrfXVHUnUyXksG_8oR64w.png?1737003186)

{% hint style="info" %}
워크플로우에 있던 커뮤니케이션 액션을 사용한 뒤 삭제해도, 그 통계는 워크플로우에 그대로 남아 있어요.

Stats View가 켜져 있는 동안에는 워크플로우를 편집할 수 없어요. 트리거 통계에는 최근 30일 데이터가 포함돼요.

트리거 통계 사용법 전체는 Workflow Trigger Narration and Statistics 문서를 참고하세요.
{% endhint %}

---

## 워크플로우 테스트하기

워크플로우가 제대로 작동하는지 확인하려면 다음 순서로 테스트하세요.

1. 오른쪽 위의 **Test Workflow**(워크플로우 테스트) 버튼을 클릭해요.
2. 테스트에 사용할 연락처를 선택해요.
3. **Run Test**(테스트 실행)를 클릭해 워크플로우를 실행해요.

{% hint style="info" %}
연락처로 하는 Test Workflow는 결과가 100% 정확하지 않을 수 있어요. 같은 연락처로 여러 번 테스트하면 특히 그래요. 가능하면 워크플로우를 게시해서 실제로 사용하며 테스트하는 것이 좋아요.
{% endhint %}

테스트가 실패하면 트리거와 액션에 설정이 덜 끝난 곳이 없는지 확인하세요.

![워크플로우를 테스트하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915593/original/mZbQqecJbDQkkH-WyjVAOOQxPmRjoWX2-A.png?1737003477)

---

## 워크플로우 저장하기

변경 사항은 항상 저장하세요.

- 저장하지 않은 변경 사항이 있으면(빨간 점 표시) 오른쪽 위의 **Save**(저장) 버튼을 클릭하세요.
- 저장할 때 오류가 나면 트리거와 액션의 필수 입력 항목이 모두 채워졌는지 확인하세요.

{% hint style="info" %}
저장과 게시는 서로 다른 개념이에요. 워크플로우는 저장됨 또는 저장되지 않은 변경 사항이 있는 상태일 수 있고, 임시 저장 또는 게시 상태일 수 있어요. 이 두 가지는 서로 독립적이에요.
{% endhint %}

![워크플로우를 저장하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915664/original/l8EFwQ6aZbDHqBLwfHM7vA5Ow0jXHl8vSg.png?1737003691)

---

## 버전 기록

워크플로우에서 바뀐 내용을 추적할 수 있어요.

- 오른쪽 위의 **History**(기록) 아이콘을 클릭해요.
- 이전 버전을 확인해요.

![버전 기록 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915890/original/KVo2csPPq4w88OGCdYEd0Ul0o6E9umSVBg.png?1737004061)

워크플로우 편집으로 돌아가려면 **Back to Builder**(빌더로 돌아가기) 버튼을 사용하세요.

![빌더로 돌아가기 버튼 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915878/original/QCDtwnx2S3YV6IbVI86fvVWxqNF-aXGDCA.png?1737004002)

### 워크플로우를 바꾸면 이미 진행 중인 연락처에는 어떻게 되나요?

이미 워크플로우를 진행 중인 연락처는 앞으로 실행될 액션에 적용한 변경 사항을 그대로 사용해요.

예를 들어 연락처가 **Wait**(대기) 액션에 있는 동안 그 뒤에 있는 액션을 수정하면, 연락처가 그 단계에 도착했을 때 수정된 설정이 적용돼요. **Wait** 액션 뒤에 새 액션을 추가하면, 같은 워크플로우 진행 과정에서 연락처가 그 새 액션도 실행할 수 있어요.

연락처가 이미 대기 중인데 **Wait** 액션을 바꾸면, 그 연락처의 기존 대기 시간은 바뀌지 않아요. 연락처는 현재 대기를 마친 뒤에 수정된 워크플로우를 이어서 진행해요.

---

## Draft/Publish 전환

워크플로우의 상태를 관리할 수 있어요.

- 오른쪽 위에서 **Draft**(임시 저장)와 **Publish**(게시) 모드를 전환해요.
- **Draft** 모드에서는 워크플로우가 실제로 트리거되거나 액션을 실행하지 않아요. **Publish** 모드에서는 실행돼요.

{% hint style="warning" %}
**Wait**(대기), **Manual Call**(수동 통화) 같은 대기 단계에 있는 연락처는, 임시 저장 상태였던 워크플로우를 다시 시작해도 현재 단계에 그대로 머물러요.
{% endhint %}

![Draft/Publish 전환 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915996/original/DV1O6GQ5Siyr-EBN_O9RgmwZo0axMnLLsQ.png?1737004170)

---

## 워크플로우 활용 팁

- 반복 구조 피하기: 워크플로우 빌더는 화살표가 이전 단계로 돌아가는 시각적인 반복을 막아 줘요. 하지만 눈에 보이지 않는 반복은 만들어질 수 있어요. 의도하지 않은 반복이 생기지 않도록 액션을 다시 한번 확인하세요.
- 워크플로우를 작게 유지하기: 가능하면 워크플로우가 한 화면에 들어오도록 만드세요. 복잡한 기능은 별도의 워크플로우로 나누면 문제를 찾고 관리하기가 쉬워요.
- 의미 있는 이름 붙이기: 트리거와 액션에 명확하고 구체적인 이름을 붙이세요. 여러 사람이 함께 쓰는 환경에서 특히 도움이 돼요.

---

## 자주 묻는 질문

### 워크플로우를 임시 저장으로 바꾸면 안에 있던 연락처는 어떻게 되나요?

**Wait**(대기), **Manual Call**(수동 통화), **Manual SMS**(수동 문자) 같은 대기 단계에 있는 연락처는, 워크플로우를 다시 시작해도 같은 단계에 그대로 머물러요.

### 목표 이벤트는 워크플로우에 어떤 영향을 주나요?

목표 이벤트는 연락처의 반응에 따라 연락처의 진행 상황을 동적으로 조정할 수 있어요. 더 알고 싶다면 Action - Goal Event 문서를 참고하세요.

### 한 연락처를 여러 워크플로우에 추가할 수 있나요?

네, 할 수 있어요. **Add to Workflow**(워크플로우에 추가) 액션을 쓰면 연락처를 여러 워크플로우에 포함시킬 수 있어요. 자세한 내용은 Add To Workflow 문서를 참고하세요.

### 외부 앱과 연동하려면 어떻게 하나요?

**Webhook**(웹훅) 액션으로 외부 플랫폼에 데이터를 보낼 수 있어요. 자세한 내용은 Actions - Webhook 문서를 참고하세요.

---

## 더 알아보기

- 워크플로우 시작하기
- 워크플로우 트리거 목록
- [워크플로우 액션 목록](what-are-workflow-actions-complete-list.md)
- [워크플로우 캠페인 분석하기](../../10-마케팅/Workflow-Email-Action/how-to-analyze-workflow-campaigns.md)
- 워크플로우와 자동화 소개
