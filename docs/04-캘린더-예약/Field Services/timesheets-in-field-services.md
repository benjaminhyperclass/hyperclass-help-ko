---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009383-timesheets-in-field-services
번역일: 2026-11-02
카테고리: 04-캘린더-예약 > Field Services
---

# Field Services의 타임시트

작업이 실제로 얼마나 걸리는지 정확히 파악하세요. 타임시트를 사용하면 직원이 각 방문(Visit)마다 작업 시간을 기록할 수 있어서, 방문별·담당자별 작업 시간을 확인할 수 있고 모든 변경 내역에 대한 감사 기록(Audit Trail)도 남길 수 있어요. 이 아티클에서는 타이머와 시간 기록(Time Entry)이 어떻게 작동하는지, 그리고 누가 이를 수정할 수 있는지 설명해드릴게요.

참고: Field Services는 현재 비공개 베타(Private Beta) 상태이며, 선택된 계정에서만 사용할 수 있어요.

## 이 아티클에서 다루는 내용

- [타임시트란 무엇인가요?](#what)
- [타임시트를 켜는 방법](#on)
- [타이머는 어떻게 작동하나요?](#timers)
- [시간 기록 추가, 편집, 삭제](#entries)
- [시간 기록은 누가 수정할 수 있나요?](#who)
- [자주 묻는 질문](#faq)

---

## 타임시트란 무엇인가요?

타임시트는 직원이 각 방문에서 작업한 시간을 기록해요. 직원이 타이머를 시작하고 멈출 때마다 Field Services는 **시간 기록(Time Entry)**을 저장해요. 기록은 방문별, 직원별로 합산되기 때문에 작업이 실제로 얼마나 걸렸는지 확인할 수 있어요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084171902/original/jvNDs4b_gfL6v__shr-g3Warj2rGlaYqoQ.jpg)

---

## 타임시트를 켜는 방법

- **Field Services > Field Services Settings(Field Services 설정) > Global settings(전역 설정)**로 이동하세요.
- **Operations(운영)** 항목 아래에서 **Preferences and features(환경설정 및 기능)**를 클릭하세요.
- **Timesheets(타임시트)** 옵션을 켜세요 (직원이 작업(Job)과 방문에 대해 시간을 기록할 수 있도록 허용).
- **Save changes(변경사항 저장)**를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084162911/original/mK2qkMHJbWGd3l0DRaflvF55lPVgVXGA9w.jpg?1792999584)

이 페이지의 다른 설정에 대해서는 [Field Services Settings: Jobs, Visits and Preferences](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009386)를 참고하세요.

---

## 타이머는 어떻게 작동하나요?

- 직원은 방문에서 타이머를 시작할 수 있어요. 시작하고 멈출 때마다 별도의 시간 기록이 생성되므로, 하나의 방문에 여러 개의 기록이 있을 수 있어요.
- 직원은 동시에 여러 개의 타이머를 실행할 수 있어요. 예를 들어 서로 다른 두 방문에서 각각 타이머를 돌릴 수 있어요.
- 여러 직원이 함께 참여하는 방문의 경우, 각 사람마다 자신만의 타이머를 가져요. 내 타이머를 시작해도 다른 사람의 타이머는 시작되지 않아요.
- 방문 상태를 변경하더라도(예: Checked in(체크인)에서 Waiting on parts(부품 대기)로 변경) 타이머를 직접 멈추지 않는 한 계속 실행돼요.
- 타이머가 실행 중인 상태에서 방문을 **Completed(완료)**, **Cancelled(취소)**, **No show(노쇼)**로 표시하면 타이머 기록이 유실되지 않도록 경고 메시지가 표시돼요.
- 동일한 타이머가 웹과 모바일에서 똑같이 표시돼요. 한쪽에서 타이머를 시작한 후 다른 쪽에서 해당 방문을 열면, 타이머가 실행 중인 상태와 정확한 시간이 그대로 표시돼요.

방문 상태에 대한 자세한 내용은 [Visit Statuses in Field Services](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009378)를 참고하세요.

---

## 시간 기록 추가, 편집, 삭제

기록 이력을 잃지 않으면서도 시간을 수정할 수 있어요.

| 작업 | 작동 방식 |
|---|---|
| **수동으로 추가** | 방문, 담당 직원, 시작 및 종료 시간을 선택하세요. 작업 시간(Duration)은 자동으로 계산돼요. 종료 시간은 반드시 시작 시간보다 늦어야 해요. |
| **편집** | 기록의 시작 또는 종료 시간을 변경하세요. 방문 및 타임시트 합계가 즉시 업데이트돼요. |
| **삭제** | 기록을 삭제하세요. 합계가 다시 계산돼요. |
| **야간 기록** | 자정을 넘기는 기록(예: 오후 11시 30분 ~ 오전 12시 30분)은 1시간으로 계산돼요. |

모든 수동 변경 사항은 **감사 기록(Audit History)**에 남아요. 변경 전/후 값과 누가 변경했는지 확인할 수 있어요.

---

## 시간 기록은 누가 수정할 수 있나요?

- 권한이 있는 경우, 직원은 자신의 기록을 추가, 편집, 삭제할 수 있어요.
- 직원은 다른 사람의 기록은 수정할 수 없어요.
- 관리자(Admin)는 모든 직원의 기록을 추가, 편집, 삭제할 수 있어요.

---

## 자주 묻는 질문

**방문의 총 작업 시간은 어디서 확인하나요?**
방문 화면에서 직원별 작업 시간과 전체 인원의 총 작업 시간을 모두 확인할 수 있어요.

**완료된 방문도 편집이 가능한가요?**
완료된 방문의 과거 시간 기록은 계속 표시되며, 해당 사용자의 권한에 따라 편집할 수 있어요.

**과거에 예약된 방문에도 타이머가 작동하나요?**
이미 지나간 방문에는 타이머를 사용할 수 없어요. 다만 시간 기록은 수동으로 추가할 수 있어요.

---
*원문 최종 수정: Thu, 29 Oct, 2026 at 9:55 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*