---

번역일: 2026-04-06
카테고리: 03-대화
---

# 워크플로우에 수동 통화 액션 추가하는 방법

이 가이드는 워크플로우에 수동 통화(Manual Call) 액션을 추가하는 방법을 설명합니다. 이 액션을 사용하면 워크플로우 트리거 조건이 충족될 때 자동으로 통화 할 일이 생성됩니다. 개인적인 터치가 필요한 영업이나 고객 지원 후속 조치에 완벽한 기능입니다.

---

**목차**

- [수동 통화 액션이란?](#수동-통화-액션이란)
- [수동 통화 액션의 주요 장점](#수동-통화-액션의-주요-장점)
- [워크플로우에 수동 통화 액션 추가하기](#워크플로우에-수동-통화-액션-추가하기)
- [배정된 수동 통화 확인하기](#배정된-수동-통화-확인하기)
- [자주 묻는 질문](#자주-묻는-질문)

---

## **수동 통화 액션이란?**

수동 통화 액션은 Hyperclass 워크플로우에서 사용하는 수동 작업(Manual Action)의 한 종류입니다. 태그, 폼 제출, 예약 등의 워크플로우 트리거에 따라 팀원에게 아웃바운드 통화 할 일을 자동으로 배정할 수 있습니다. 워크플로우가 트리거되면 해당 연락처가 대화(Conversations) 섹션의 수동 작업(Manual Actions) 탭에 나타납니다.

---

## **수동 통화 액션의 주요 장점**

- **자동화 유연성**: 워크플로우에서 통화 할 일을 자동으로 배정
- **워크플로우 효율성**: 담당자가 하나의 탭에서 아웃바운드 통화 대기열을 관리 가능
- **작업 추적**: '통화 예정' 또는 '완료' 등의 상태를 확인하여 명확한 후속 조치 가능
- **커스텀 트리거**: 연락처 태그, 폼 작성, 파이프라인 단계 변경 등 다양한 조건으로 트리거 가능

---

## **워크플로우에 수동 통화 액션 추가하기**

수동 통화 액션은 워크플로우 빌더에서 "수동 작업(Manual Action)" 단계를 사용하여 추가합니다. 아래 단계를 따라 이 액션을 올바르게 설정하세요.

- 좌측 내비게이션 바에서 마케팅(Marketing)으로 이동합니다.
- + 워크플로우 생성(Create Workflow)을 클릭하여 새 워크플로우를 만듭니다.

![워크플로우 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047763929/original/exTyzYKY_4JgYGECkaEEzEzRzdyhB09qEg.png?1749064306)

- + 트리거 추가(Add Trigger)를 클릭하고 트리거를 선택합니다.
- 트리거 추가 후, 그 아래의 + 아이콘을 클릭하여 새 액션을 추가합니다.

![액션 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047763961/original/mtgAI8HjCeBUWPZUTATMnBYDDe8xJJxz6w.png?1749064384)

- 수동 통화 액션(Manual Action To Call)을 선택합니다. "수동 통화"와 같이 액션 이름을 입력합니다.

![수동 통화 액션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047763879/original/L47Yx7IJxY6aoYxVubGslT4b-Al_oovZUA.png?1749064236)

- 저장(Save)을 클릭한 후 워크플로우를 발행(Publish)합니다.

![워크플로우 저장 및 발행](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047763871/original/ctbfEgEilorZyDUA2lTlBVjv5XpIaNxngg.png?1749064211)

---

## **배정된 수동 통화 확인하기**

트리거되면 수동 통화 액션에 배정된 연락처가 대화(Conversations) 탭의 수동 작업(Manual Actions)에 나타납니다. 찾고 추적하는 방법은 다음과 같습니다.

- 좌측 내비게이션에서 대화(Conversations)를 클릭합니다.
- 페이지 상단의 수동 작업(Manual Actions) 탭을 클릭합니다.
- 워크플로우에서 생성된 수동 작업 목록을 확인할 수 있습니다.

![수동 작업 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047764201/original/Vy3wbnNP6Q3NHw8yHieTpW1Wk4GMhEuztg.png?1749064996)

---

## **자주 묻는 질문**

**Q: 수동 통화를 특정 사용자에게 배정할 수 있나요?**
네. 수동 작업 단계에서 특정 사용자에게 통화를 배정하거나 라운드 로빈 배정을 사용할 수 있습니다.

**Q: 통화 결과나 노트는 어디서 확인하나요?**
통화 완료 후 연락처 상세 페이지에서 직접 통화 노트와 결과를 기록할 수 있습니다.

**Q: 수동 작업에 나타난 수동 통화 할 일을 어떻게 시작하나요?**
수동 작업 탭에서 해당 할 일 옆의 시작하기(Let's Start) 버튼을 클릭하세요.

---
*원문 최종 수정: Wed, 4 Jun, 2025 at 2:30 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*