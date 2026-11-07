---
원문: https://help.gohighlevel.com/support/solutions/articles/48000982583-refresh-or-update-snapshots
번역일: 2026-11-07
카테고리: 19-에이전시-뷰
---

# 스냅샷 새로고침 및 업데이트

고객사 서브 계정에서 워크플로우, 폼, 퍼널 등을 새로 만들거나 바꿔도 기존 스냅샷에는 자동으로 반영되지 않아요. 변경 내용을 스냅샷에 담아 이후 가져오기나 업데이트에 쓰려면 스냅샷을 직접 새로고침해야 해요.

## 스냅샷 새로고침하기

1. **Agency View**(에이전시 뷰)로 이동한 다음, 왼쪽 메뉴에서 **계정 스냅샷** 탭을 클릭하세요.
2. 업데이트할 스냅샷을 찾아 그 옆의 **새로고침** 아이콘을 클릭하세요.
3. 새로 추가했거나 수정한 항목 중 포함할 항목을 선택하세요.
4. **새로고침**을 클릭해 업데이트를 마무리하세요.

![스냅샷 새로고침 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059137335/original/4ImXJgLPogiQje4C__bwGTGY17ytoezW_g.gif?1764053794)

{% hint style="info" %}
**새로고침**을 클릭하면 하이퍼클래스가 원본 서브 계정에서 선택한 항목을 불러와요. 불러온 항목 수는 진행 표시로 확인할 수 있어요. 일부 항목을 불러오지 못해도 전체 과정이 멈추지 않고 나머지 항목은 계속 진행돼요.
{% endhint %}

![항목 불러오기 진행 표시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059751597/original/KaN1CEBWntC56zsL_DSczkAWr18LzgSRwA.png?1764725377)

---

## 새로고침 중 실패한 항목 처리하기

새로고침 중 불러오지 못한 항목은 실패로 표시돼요. 선택한 나머지 항목은 계속 처리돼요.

전체 새로고침을 처음부터 다시 하지 않고, 실패한 항목만 다시 불러올 수 있어요. 일시적인 시간 초과처럼 잠깐 생긴 문제를 해결하면서도 스냅샷 업데이트 전체를 멈추지 않아도 돼요.

![실패한 항목 다시 불러오기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059751665/original/6rEEssPXG7lNT-jUk3kLLk6ZwDavXwMUIA.png?1764725603)

---

## 스냅샷 새로고침 후 워크플로우 연락처 정리

스냅샷으로 만든 워크플로우에서, 새로고침으로 단계가 삭제될 수 있어요(예: 대기 단계 삭제). 이때 삭제된 단계에서 기다리던 연락처는 멈춰 있지 않도록 하이퍼클래스가 자동으로 제거해요.

화면에서는 다음과 같이 확인할 수 있어요.

1. 영향을 받은 워크플로우를 다음에 열면 안내가 한 번 표시돼요. 해당하는 경우에만 나타나요.

   ![워크플로우를 열 때 표시되는 한 번짜리 안내](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064759193/original/CMYs9reyZPN0_CYDFRSRENDtRlHYVACoTg.png?1770890041)
2. **Execution Logs**(실행 로그)에 "Removed by - Snapshot Refresh"라는 항목이 기록되고, 옆 패널에서 자세한 내용을 볼 수 있어요.

   ![실행 로그에 기록된 Snapshot Refresh 제거 항목](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064759370/original/gjFq-I3Wq8aVLo4u1Pc4XOyD0kax7TOgcw.png?1770890085)

{% hint style="info" %}
스냅샷으로 만든 워크플로우에서 새로고침으로 단계가 삭제될 때만 적용돼요. 워크플로우에서 단계를 직접 삭제하면 원래부터 대기 중인 연락처가 제거돼요.
{% endhint %}

---

## Push Update 버튼을 클릭하면 어떻게 되나요?

스냅샷을 새로고침하면 해당 스냅샷에 **Push Update**(업데이트 푸시) 버튼이 나타나요. 이 버튼을 클릭하면 다음 작업을 할 수 있어요.

1. 이 스냅샷을 이전에 가져온 서브 계정 중 업데이트를 받을 계정을 선택해요.
2. 푸시할 항목을 선택해요(예: 워크플로우만, 또는 특정 폼만).
3. 스냅샷 전체를 다시 불러오지 않고, 선택한 업데이트를 해당 서브 계정에 직접 동기화해요.

   [동영상](https://www.youtube.com/embed/NDTmZUBhvr4??si=bHWY3DC26NaEg4bR&wmode=opaque)

{% hint style="info" %}
업데이트는 내 에이전시 안의 서브 계정에만 푸시돼요. 외부 에이전시는 새 링크로 다시 가져와야 해요.
{% endhint %}

---

## 빠른 팁

- 스냅샷을 공유하거나 업데이트를 푸시하기 전에 항상 스냅샷을 새로고침하세요.
- **Push Update**를 쓰면 선택한 변경 사항만 고객사 계정에 동기화할 수 있어요.
- 푸시한 업데이트는 선택한 항목에만 적용되고 기존 데이터를 지우지 않아요. 기존 데이터는 그대로 안전하게 유지돼요.
