---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009378-visit-statuses-in-field-services
번역일: 2026-11-02
카테고리: 04-캘린더-예약 > Field Services
---

# Field Services의 방문 상태

방문 상태는 각 방문이 현재 어떤 단계에 있는지 팀 전체가 쉽게 파악할 수 있도록 도와줘요. Field Services는 방문 상태를 6가지 고정된 상태(state)로 분류하며, 각 상태 안에서 팀의 업무 방식에 맞는 나만의 라벨을 만들 수 있어요.

참고: Field Services는 현재 비공개 베타(private beta) 단계로, 선택된 계정에서만 사용할 수 있어요. 기능과 화면은 개선 과정에서 변경될 수 있습니다.

## 이 문서에서 다루는 내용

- [방문 상태란 무엇인가요?](#what)
- [6가지 방문 상태](#states)
- [방문 상태를 변경하는 방법](#change)
- [상태 라벨을 관리하는 방법](#manage)
- [방문 상태가 작업(Job)에 미치는 영향](#jobs)
- [자주 묻는 질문](#faq)

---

## 방문 상태란 무엇인가요?

모든 방문에는 **시작 전(Not started)**, **이동 중(On my way)**, **체크인 완료(Checked in)**, **완료(Completed)** 등의 상태 라벨이 지정돼요. 각 라벨은 6가지 상태 중 하나에 속하며, **상태(state)**는 Field Services와 다른 도구들이 리포팅 및 로직 처리에 사용하는 기준이고, **라벨(label)**은 팀원들이 실제로 화면에서 보게 되는 이름이에요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084162756/original/vMltisF5dMcFk3Pa9LYUzrMEqzeFW1h4lw.jpg?1792999495)

---

## 6가지 방문 상태

아래 상태들은 고정되어 있으며 변경할 수 없어요.

| 상태 | 의미 | 기본 라벨 |
|---|---|---|
| **대기(Pending)** | 예약은 됐지만 아직 시작 전인 상태 | 시작 전(Not started) |
| **진행 중(Active)** | 담당 직원이 이동 중이거나 작업 중인 상태 | 이동 중(On my way), 체크인 완료(Checked in) |
| **완료(Completed)** | 작업이 끝난 상태 | 완료(Completed) |
| **노쇼(No show)** | 고객이 현장에 없었던 상태 | 노쇼(No show) |
| **취소(Cancelled)** | 방문이 진행되지 않는 상태 | 취소(Cancelled) |
| **무효(Invalid)** | 실수로 생성된 경우. 리포트에서 제외됨 | 무효(Invalid) |

---

## 방문 상태를 변경하는 방법

- 캘린더(Calendar), 방문 목록(visits list) 또는 작업(Job)에서 방문을 엽니다.
- 방문 패널 하단의 **상태(Status)** 드롭다운 또는 방문 목록의 **상태(Status)** 열을 사용하세요.
- 새 상태를 선택하세요. 목록은 상태(state)별로 그룹화되어 표시됩니다.

---

## 상태 라벨을 관리하는 방법

- **Field Services > Field Services Settings(설정) > Global settings(전역 설정)**로 이동하세요.
- **Operations(운영)** 아래에 있는 **Jobs, visits and requests(작업, 방문, 요청)**를 열고 **Visit statuses(방문 상태)**를 클릭하세요.
- 상태를 클릭하면 펼쳐지면서 해당 상태의 라벨들을 볼 수 있어요.
- **New status(새 상태)**를 클릭해서 해당 상태에 라벨을 추가하거나, 라벨 옆의 핸들을 드래그해서 순서를 바꿀 수 있어요.
- **Save changes(변경사항 저장)**를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084162856/original/E5XpzKXbI-MXrP19p5HAePxf-1wmzpVkuw.jpg?1792999558)

예를 들어, 배관 업체라면 대기(Pending)와 진행 중(Active) 상태 아래에 *기사 배정됨*, *이동 중*, *작업 시작*, *작업 완료*와 같은 라벨을 추가할 수 있어요.

---

## 방문 상태가 작업(Job)에 미치는 영향

작업(Job)의 상태는 해당 작업에 속한 방문들을 기준으로 계산돼요. 예를 들면:

- 예약된 방문이 없는 작업은 **미예약(Unscheduled)** 상태예요.
- 예약된 방문이 있는 작업은 **예약됨(Scheduled)** 상태예요.
- 진행 중인 방문이 있는 작업은 **진행 중(In progress)** 상태예요.

직접 만든 라벨은 해당 상태(state)로 집계되기 때문에, 라벨 이름을 바꿔도 작업의 동작 방식에는 영향을 주지 않아요. **무효(Invalid)**로 설정된 방문은 리포트에서 제외됩니다. 자세한 내용은 [Field Services의 작업(Job)](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009376) 문서를 참고하세요.

---

## 자주 묻는 질문

**6가지 상태(state)를 변경할 수 있나요?**
아니요. 상태(state)는 고정되어 있어요. 각 상태 안에서 라벨을 추가, 이름 변경, 순서 변경하는 것만 가능합니다.

**커스텀 라벨이 고객에게도 보이나요?**
상태 라벨은 팀 내부용이에요. 고객은 **담당자 이동 중**, **방문 완료**처럼 별도로 설정한 알림만 받게 됩니다. 자세한 내용은 [Field Services의 알림](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009384) 문서를 참고하세요.

**타이머가 실행 중인 상태에서 방문을 완료로 표시하면 어떻게 되나요?**
Timesheets(근무시간 기록) 기능이 켜져 있다면, 아직 타이머가 실행 중이라는 경고가 표시되어 타이머를 멈출 수 있어요. 자세한 내용은 [Field Services의 Timesheets](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009383) 문서를 참고하세요.

---
*원문 최종 수정: Thu, 29 Oct, 2026 at 9:54 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*