---
원문: https://help.gohighlevel.com/support/solutions/articles/155000009463-follow-linked-workflows
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 연결 관계 보기 — Linked workflows(연결된 워크플로우)

**Linked workflows**(연결된 워크플로우)를 열면 한 워크플로우가 폴더를 넘나들며 다른 워크플로우와 어떻게 이어져 있는지 한눈에 볼 수 있어요.

## Linked workflows로 알 수 있는 것

워크플로우는 다른 워크플로우와 직접 연결될 수도 있고, 공유하는 자산을 통해 연결될 수도 있어요.

예를 들어 한 워크플로우가 태그를 추가하면 그 태그로 다른 워크플로우가 시작될 수 있어요. 액션으로 연락처를 다른 워크플로우에 추가하거나 다른 워크플로우에서 제거할 수도 있어요.

**Linked workflows**를 열면 이런 관계가 **Workflow view**(워크플로우 보기) 모달 창에 모여 보여요. 다른 폴더에 있는 워크플로우와의 연결도 함께 표시돼요.

## Linked workflows 여는 방법

1. **자동화 > 워크플로우 > Workflow Maps**(워크플로우 맵)를 여세요.
2. 살펴볼 워크플로우를 찾아 클릭하세요.
3. 세부 정보 패널에서 **Linked workflows**를 클릭하세요.
4. **Workflow view** 모달 창에서 연결 관계를 확인하세요.

[동영상](https://jumpshare.com/embed/tW2sdy4ZQYpaY3FYyeNc)

다른 워크플로우와 직접 연결된 워크플로우를 선택한 다음, 세부 정보 패널에서 Linked workflows를 클릭하세요.

## 연결 관계 읽는 방법

연결선의 방향을 보면 워크플로우끼리 어떤 관계인지 알 수 있어요.

- 자산에서 워크플로우로 향하는 연결은 트리거 관계를 뜻해요.
- 워크플로우에서 자산으로 향하는 연결은 그 자산을 바꾸는 액션을 뜻해요.
- 워크플로우에서 다른 워크플로우로 바로 향하는 화살표는 연락처를 다른 워크플로우에 추가하거나 다른 워크플로우에서 제거하는 액션을 뜻해요.

공유 자산은 맵으로 돌아가 해당 자산을 클릭하면 사용 현황을 볼 수 있어요. 관련 워크플로우 행을 펼친 뒤 **View step**(단계 보기)을 누르면 목록에 나온 트리거나 액션을 자세히 확인할 수 있어요.

![연결된 워크플로우와 이들을 이어 주는 액션을 함께 보여 주는 Workflow view 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084352783/original/2qwRy8Fot3WzS9K_sQkNh_wJtcQGWB4mBA.jpg?1793135631)

Workflow view에는 연결된 워크플로우와 이들을 이어 주는 액션이 함께 표시돼요.

## 자주 묻는 질문

### 다른 폴더에 있는 워크플로우도 Linked workflows에 나오나요?

네. Linked workflows에는 폴더를 넘나드는 연결 관계도 포함돼요.

### Linked workflows는 어디에서 열리나요?

**Workflow view**라는 제목의 모달 창으로 열려요.

### 이 그래프에서 특정 연락처가 거쳐 간 경로도 볼 수 있나요?

맵 왼쪽 패널의 **Contacts**(연락처)에서 연락처의 워크플로우 이력을 확인하세요. Linked workflows는 설정된 연결 관계를 보여 줘요.

---

다음 문서: [오류가 있는 워크플로우 확인하기](review-workflows-with-errors.md)
