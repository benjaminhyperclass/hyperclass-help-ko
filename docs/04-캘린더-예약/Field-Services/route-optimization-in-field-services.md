---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009380-route-optimization-in-field-services
번역일: 2026-11-02
카테고리: 04-캘린더-예약 > Field Services
---

# Field Services의 경로 최적화

운전 시간은 줄이고 업무 시간은 늘리세요. 경로 최적화(Route Optimization)는 직원의 하루 방문 일정을 재정렬해 이동 시간을 줄여주면서도, 고정(잠금)한 방문은 그대로 유지합니다. 제안받은 경로를 먼저 검토한 후 적용하기 전까지는 아무것도 변경되지 않아요.

참고: Field Services는 현재 비공개 베타(Private Beta) 상태로, 선택된 계정에서만 사용 가능합니다. 기능과 화면은 개선 과정에서 변경될 수 있어요.

## 이 문서에서 다루는 내용

- [경로 최적화란?](#what)
- [시작하기 전에](#before)
- [경로를 최적화하는 방법](#how)
- [경로 최적화 페이지 이해하기](#page)
- [제안된 경로 검토 및 적용](#apply)
- [자주 묻는 질문](#faq)
- [관련 아티클](#related)

---

## 경로 최적화란?

직원과 날짜를 지정하면, 경로 최적화는 해당 날짜의 방문 일정을 분석해서 더 효율적인 방문 순서를 제안해줘요. 이동 시간, 직원의 근무 시간, 이동 버퍼 시간, 기존 예약을 모두 고려합니다. 경로는 직원의 **경로 시작(Route start)** 위치에서 시작해 **경로 종료(Route end)** 위치에서 끝나요.

참고: 제안된 경로는 항상 먼저 검토하게 됩니다. **최적화된 경로 적용(Apply optimized route)**을 클릭하기 전까지는 일정에 아무 변화도 생기지 않아요.

---

## 시작하기 전에

- **서비스 및 직원(Services & staff) → 직원(Staff) → 편집(Edit) → 디스패치 설정(Dispatch settings)**에서 각 직원의 **경로 시작**과 **경로 종료**를 설정하세요. [Field Services의 직원](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009372) 문서를 참고하세요.
- 최적화하려는 방문에 서비스 주소가 등록되어 있고 해당 직원에게 배정되어 있는지 확인하세요.

---

## 경로를 최적화하는 방법

- **Field Services → 일정(Schedule) → 캘린더 보기(Calendar view)**로 이동하세요.
- 오른쪽 툴바의 첫 번째 아이콘인 **경로 최적화(Route optimization)** 버튼을 클릭하세요.
- **직원(Staff member)**을 선택하세요.
- **날짜(Date)**를 선택하세요. 필드 옆에 시간대가 표시됩니다. 직원을 선택하면 날짜가 자동으로 채워지며, 변경할 수도 있어요.
- **시작 위치(Start location)**와 **종료 위치(End location)**는 직원의 디스패치 설정에서 자동으로 채워지며 여기서는 수정할 수 없어요.
- **방문 일정(Visit schedule)**을 검토하세요. 방문은 기본적으로 잠금(locked) 상태로 시작되므로, 이동 가능한 방문은 잠금을 해제해야 해요.
- **경로 최적화(Optimize route)**를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084162987/original/_xJ2oOnd2wXEEWalpYo_0qHgFeqTC6spEQ.jpg?1792999608)

---

## 경로 최적화 페이지 이해하기

- **방문 일정(Visit schedule).** 왼쪽 패널에는 *집에서 출발(Departs home)*부터 *집으로 복귀(Returns home)*까지 그날의 경로가 나열됩니다. 요약 줄에는 예약된 방문 수, 잠긴 방문 수, 언제든 방문(Anytime visits) 수, 해당 날짜의 근무 시간이 표시돼요. 예: *4 scheduled (4 locked) · 1 anytime · 8:00 AM – 5:00 PM*
- 각 방문에는 경로 상 위치, 방문 제목, 소요 시간, 서비스 주소, 서비스 종류, 예정 시간이 표시됩니다. 방문 사이에는 예상 이동 시간과 거리가 표시돼요. 예: *30m · 20.8 km*
- **잠금 및 잠금 해제.** 방문의 잠금 버튼을 사용하면 해당 예정 시간을 그대로 유지할 수 있어요. 잠긴 방문은 이동하지 않습니다. 잠금을 해제하면 경로 최적화 시 해당 방문을 이동시킬 수 있어요.
- **언제든 방문(Anytime visits).** 날짜는 있지만 특정 시간이 지정되지 않은 방문은 경로 아래 Anytime 섹션에 표시됩니다. 아직 경로에 포함되지 않은 상태이며, 최적화 시 구체적인 시간이 배정돼요.
- **지도(Map).** 지도에는 각 정류지가 번호가 매겨진 핀으로 표시되며, 시작 위치부터 종료 위치까지의 경로가 그려집니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084162990/original/WzWkNOSgWDHgbD-kmz1fdhHYUjOIX-Tsnw.jpg?1792999612)

페이지 제목 옆의 **작동 방식(How it works)**을 클릭하면 제품 안에서 다음과 같은 아이콘 가이드를 포함한 간단한 설명을 볼 수 있어요.

| 아이콘 | 의미 |
|---|---|
| **잠김(Locked)** | 해당 방문은 예정된 시간에 고정됩니다. |
| **잠금 해제(Unlocked)** | 최적화 과정에서 해당 방문이 이동할 수 있습니다. |
| **언제든(Anytime)** | 해당 방문에 특정 시간을 배정할 수 있습니다. |
| **다중 직원(Multiple staff)** | 해당 방문은 최적화 대상에 포함되지 않습니다. |
| **검토 필요(Needs review)** | 해당 방문은 최적화된 일정에 포함될 수 없었습니다. |

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084162993/original/R2qJdFyXwkl35DgkzlnFouIgK83Es0UFqA.jpg?1792999617)

경로 최적화는 잠긴 방문과 두 명 이상의 직원에게 배정된 방문은 변경하지 않아요. 가능한 일정 안에 들어가지 못하는 방문 역시 변경되지 않고 수동 검토가 필요할 수 있습니다.

---

## 제안된 경로 검토 및 적용

**경로 최적화(Optimize route)**를 클릭하면 페이지에 **제안된 경로(Proposed route)** 요약이 표시됩니다.

| 항목 | 내용 |
|---|---|
| **이동 시간(Drive time)** | 해당 날짜의 총 예상 이동 시간입니다. |
| **종료 시각(Day ends)** | 직원이 업무를 마치는 시각입니다. 기존 시간은 취소선으로 표시되며 그 옆에 새 시간이 표시됩니다. |
| **상태(Status)** | 예: *Route optimized*(경로 최적화 완료), 재조정된 방문 수와 배정된 Anytime 방문 수가 함께 표시됩니다. |

이동된 각 방문은 기존 시간이 취소선으로 표시되고 그 뒤에 새 시간이 표시됩니다. 이동 시간은 추정값으로 표시돼요.

- 새로운 순서와 시간을 검토하세요.
- **최적화된 경로 적용(Apply optimized route)**을 클릭하면 새 시간이 일정에 저장됩니다.
- **현재 경로로 돌아가기(Back to current route)**를 클릭하면 저장하지 않고 기존 경로로 돌아갑니다.
- **취소(Cancel)**를 클릭하면 일정이 그대로 유지됩니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084162992/original/feS24PFw-vUqnUgJYzxQsBxLUvCugZvqqQ.jpg?1792999615)

참고: Anytime 방문이 경로에 추가되면 해당 방문이 시간을 차지하게 되므로 하루 종료 시각이 기존보다 늦어질 수 있어요.

---

## 자주 묻는 질문

**시작 위치와 종료 위치는 왜 수정할 수 없나요?**
해당 값은 직원의 디스패치 설정에서 가져온 값이기 때문이에요. 변경하려면 직원 정보를 수정하세요.

**고객이 이미 확정한 방문도 최적화로 이동되나요?**
잠금을 해제한 경우에만 이동됩니다. 시간이 반드시 고정되어야 하는 방문은 최적화 전에 잠가주세요.

**주소가 없는 방문도 최적화되나요?**
방문이 경로에 포함되려면 서비스 주소가 반드시 있어야 해요.

**직원이 여러 명 배정된 방문도 최적화되나요?**
아니요. 여러 직원에게 배정된 방문은 최적화 대상에서 제외되며 그대로 유지됩니다.

**하루 일정에 방문이 들어가지 않으면 어떻게 되나요?**
해당 방문은 변경되지 않고 **검토 필요(Needs review)**로 표시될 수 있어요. 수동으로 일정을 조정해주세요.

**경로 최적화를 클릭하면 바로 일정이 바뀌나요?**
아니요. 먼저 제안된 경로를 확인하게 됩니다. **최적화된 경로 적용(Apply optimized route)**을 클릭해야만 실제 일정이 변경돼요.

---
*원문 최종 수정: Thu, 29 Oct, 2026 at 9:54 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*