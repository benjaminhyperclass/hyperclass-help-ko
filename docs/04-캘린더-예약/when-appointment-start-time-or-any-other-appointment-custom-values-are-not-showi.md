---

번역일: 2026-04-06
카테고리: 04-캘린더-예약
---

# {{appointment.start_time}} 또는 예약 커스텀 값이 표시되지 않는 경우

{{appointment.start_time}} 또는 기타 예약 커스텀 값이 표시되지 않거나,

예약 리마인더 캠페인이 예약 시작 시간에 맞춰 제대로 실행되지 않는 경우,

또는 테스트 이메일 발송 시 "Google 캘린더에 추가" / "iCal/Outlook에 추가" 링크가 작동하지 않는 경우 해결 방법을 안내해드립니다.

![예약 커스텀 값 표시 오류 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666282/original/q4MMHhuPiMD37Wp6ThVJqi-NqsWQv6AF_Q.png?1619565661)

{{appointment.start_time}} 또는 기타 예약 커스텀 값이 표시되려면 **Appointment(예약)** 또는 **Customer booked appointment(고객이 예약함)** 트리거가 필요합니다. 커스텀 값을 테스트하려면 실제 예약을 잡아야 합니다.

**Pipeline stage changed(파이프라인 단계 변경)**을 트리거로 사용하면 Hyperclass가 어떤 예약인지 알 수 없습니다.

![트리거 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666284/original/Apr7vQ6cP9Pwsre_hMgvqtIO9wQ31k6caA.png?1619565661)

## 워크플로우에서도 동일합니다

워크플로우 트리거로 **Appointment(예약)** 또는 **Customer booked appointment(고객이 예약함)**를 사용해야 합니다.

커스텀 값을 테스트하려면 **실제 예약을 잡아야** 합니다.

![워크플로우 트리거 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666389/original/4zeTLl0yXB_Pr9oY0Y0xUpibOh4SDj6C3w.png?1619565768)

## 수동으로 예약 리마인더 캠페인에 리드 추가하기

리드를 예약 리마인더 캠페인에 수동으로 추가해야 하는 경우, 이벤트 시작일(Event Start Date)로 예약 시작 시간을 선택해야 합니다.

![수동 캠페인 추가 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666281/original/J49Z7zBy-fLeedsG7RyZzHAF4thoqgtelA.png?1619565661)

## 예약 일정 변경하기

수동으로 일정을 변경하려면 오른쪽의 Appointments(예약) 탭에서 Confirmed(확정)를 Reschedule(일정 변경)로 전환하면 됩니다. 이렇게 하면 기존 예약 리마인더 캠페인에서 리드를 제거하고 새로운 예약 시간으로 다시 캠페인에 추가하는 과정이 자동화됩니다.

![예약 일정 변경 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666283/original/2a6LrAcwyEAM1mTDqVEmoHE4yEv4k8Lh1w.png?1619565661)

## 고객이 직접 일정 변경할 수 있도록 하기

리드가 스스로 일정을 변경할 수 있게 하려면, 예약 리마인더 캠페인의 커스텀 값에서 일정 변경 링크(Reschedule Link)를 선택할 수 있습니다.

![일정 변경 링크 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666279/original/B61mleFlU1RUPlPPZjkA_VVNUlOixAtLXg.png?1619565660)

![커스텀 값에서 일정 변경 링크 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666278/original/qYptao1e4Ky9XNjxR8tbTemyIZp8UvAmpQ.png?1619565660)

---
*원문 최종 수정: 2021년 4월 27일*
*Hyperclass 사용 가이드 — hyperclass.ai*