---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006656-workflows-version-history-restore
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 버전 기록 보기와 복원 — Version History(버전 기록)

워크플로우를 수정할 때마다 저장된 버전을 확인하고, 이전 버전으로 되돌릴 수 있는 기능이에요. 개편된 **Version History**(버전 기록) 사이드바에서 버전을 훑어보고, 클릭 한 번으로 복원할 수 있어요. 추가 비용은 없어요.

## 버전 기록이란?

**Version History**(버전 기록)는 워크플로우가 저장된 시점마다 쌓이는 타임라인이에요. 각 항목에는 수정한 사람, 정확한 시각(**Timestamp**, 타임스탬프), 그리고 임시 저장(**Draft**)인지 게시(**Published**)된 버전인지가 기록돼요.

2025년 개편으로 지난 버전을 훑어보고, 편집자별로 필터링하고, 복원하는 일이 훨씬 빨라졌어요. 복원한 버전은 새 **Draft**(임시 저장)로 열려요. 그래서 **Publish**(게시)하기 전에는 운영 중인 워크플로우가 바뀌지 않아요. 워크플로우 전반에서 쓰는 '임시 저장 → 게시' 방식과 같아요.

## 버전 기록의 장점

- **마음 편한 복구**: 최근 10개 버전(또는 30일) 중 원하는 버전으로 한 번에 돌아갈 수 있어요.
- **팀 책임 확인**: 누가 언제 저장했는지 편집자 이름과 시각을 모두 볼 수 있어요.
- **유연한 복구**: 지난 버전을 새 **Draft**로 만들거나, 아예 새 워크플로우로 만들 수 있어요.
- **쉬운 사용법**: 깔끔한 사이드바에 v12, v13, v14처럼 시간순 번호가 붙어요.
- **편집을 돕는 세 가지 기능 중 하나**: **Auto Save**(자동 저장), **Undo**(실행 취소)/**Redo**(다시 실행)와 함께 쓸 수 있고, 추가 비용은 없어요.

## 이런 기능이 포함돼요

**버전 기록 개편**

- 저장된 버전마다 그 시점의 워크플로우가 그대로 남아요. 편집자, 타임스탬프, 워크플로우 상태(**Draft** 또는 **Published**)도 함께 기록돼요.
- 최대 10개 버전 또는 30일치 기록을 볼 수 있어요. 편집자별로 정리하고 필터링할 수도 있어요.

**이전 버전 복원**

- 원하는 버전 옆의 **Restore**(복원)를 클릭하면 그 버전이 새 **Draft**로 열려요.
- 이전 버전을 바탕으로 새 워크플로우를 만들 수도 있어요.

**더 편해진 탐색**

- 새 **Version History** 사이드바는 시간순 목록과 빠른 필터, 명확한 버전 이름(v12, v13, v14…)을 보여 줘요.
- 필요한 버전을 헤매지 않고 바로 찾을 수 있어요.

![버전 기록 사이드바 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060754091/original/j5wApL1T9aSCwaiqL7x3HuCm7tbQCX9O_Q.png?1765902947)

## 버전이 만들어지는 시점

**Version History**에는 다음과 같은 중요한 순간에 버전이 자동으로 기록돼요.

- **Save**(저장)를 직접 클릭할 때
- **Unsaved Changes**(저장되지 않은 변경사항) 팝업에서 변경을 확인할 때
- 워크플로우에서 **Save Version**(버전 저장)을 사용할 때
- 워크플로우 상태가 바뀔 때(예: **Draft** → **Publish**, **Publish** → **Draft**)

{% hint style="info" %}
**Auto Save 참고**: 평소의 자동 저장만으로는 새 버전이 만들어지지 않아요. 지금 상태를 버전으로 남기려면 **Save Version**을 클릭하세요. 마지막으로 자동 저장된 변경 내용이 **Version History**에 기록돼요.
{% endhint %}

![버전 저장 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155060754280/original/c9nsKcrWntNlYTju4vaqbgztW9tIn0-UhQ.png?1765903010)

![저장되지 않은 변경사항 확인 팝업](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055806350/original/7UOEVmXVHj6_yTva7syX4imNoUyTBVhm2w.png?1760299614)

## 버전 둘러보기

**Version History**를 열면 저장된 항목이 **시간**과 **편집자**별로 정리돼 있어요.

각 항목에는 다음 정보가 나와요.

- **워크플로우 이름**
- **버전 번호**(예: v12, v13, v14)
- **Timestamp**(타임스탬프)
- **Editor**(편집자)
- **Status**(상태): **Draft** 또는 **Published**

![버전 목록 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055806353/original/Zh9jqSy76VMW90Wdk0flXHA5YcXmoPSd3g.png?1760299616)

목록에서는 다음을 할 수 있어요.

- 편집자별로 필터링하기
- **최대 10개 버전 또는 30일** 중 먼저 도달하는 범위까지 기록 보기

## 버전 복원하기, 버전으로 새로 만들기

- 이전 버전 옆의 **Restore**를 클릭하면 그 버전이 **새 Draft**로 열려요.
- 복원한 **Draft**를 **Publish**하기 전까지는 **Published** 워크플로우가 바뀌지 않아요.
- 원래 워크플로우를 건드리지 않고 따로 가지를 치고 싶다면 **Create new workflow from version**(버전으로 새 워크플로우 만들기)을 선택하세요.

![복원 및 새 워크플로우 만들기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055806351/original/WmVJgFaaL_TjRFCWroB4shAt4Wt6MKSnfQ.png?1760299615)

**복원하려면 다음 조건이 필요해요.**

- 워크플로우가 **Draft** 상태여야 해요.
- 워크플로우에 현재 **등록된 연락처가 없어야** 해요.
- 복원한 상태는 **새 버전**으로 저장되고, 이전 버전은 모두 그대로 남아요.

## 워크플로우를 수정하면 진행 중인 연락처는 어떻게 되나요?

이미 워크플로우를 진행 중인 연락처는, 앞으로 거칠 액션에 반영한 수정 내용을 그대로 쓸 수 있어요.

예를 들어 연락처가 **Wait**(대기) 액션에 있고 그 뒤에 오는 액션을 수정했다면, 연락처는 해당 단계에 도착했을 때 수정된 액션을 사용해요. **Wait** 액션 뒤에 새 액션을 추가하면, 연락처가 같은 워크플로우 흐름 안에서 그 새 액션도 실행할 수 있어요.

**Wait** 액션 자체를 바꿔도, 이미 그 단계에 있는 연락처의 대기 시간은 바뀌지 않아요. 해당 연락처는 현재 대기를 끝낸 뒤에 수정된 워크플로우를 이어서 진행해요.

## 활용 팁

- 큰 변경을 마칠 때마다 버전에 이름을 붙이세요(예: "엔터프라이즈 분기 추가", "환영 시퀀스 업데이트").
- 여러 명이 편집한다면, 큰 변경 전에 **Save Version**을 사용해 서로 맞춰 두세요.
- 복원하기 전에 **Preview / Compare**로 차이를 확인하세요.
- 현재 워크플로우를 건드리지 않고 큰 아이디어를 시험해 보고 싶다면 **Create new workflow from version**으로 안전하게 가지를 치세요.

## 참고 사항과 제한

- **Draft → Publish**: 복원하면 **새 Draft**가 만들어져요. 실제로 적용하려면 **Publish**해야 해요.
- **Undo/Redo 초기화**: 버전을 복원하면 그 **Draft**부터 편집 기록이 새로 시작돼요.
- **Auto Save 범위**: **Auto Save**는 캔버스에서 한 편집에 적용돼요. 일부 설정 패널의 편집은 따로 저장하거나 적용해야 할 수 있어요(v1).
- **보관 기간**: **Version History**는 최대 10개 버전 또는 30일치를 보관해요.
- **복원 조건**: 워크플로우가 **Draft** 상태이고 등록된 연락처가 없어야 해요.
- **사용 가능 여부**: 출시 시점에는 **Version History**를 **실험실**의 베타 기능으로 쓸 수 있어요. 계정의 **설정 > 실험실**에서 켜세요.
