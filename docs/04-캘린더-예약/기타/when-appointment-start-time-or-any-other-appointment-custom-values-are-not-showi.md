---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# {{appointment.start_time}} 또는 기타 예약 커스텀 값이 표시되지 않을 때

{{appointment.start_time}} 또는 기타 예약 커스텀 값이 표시되지 않는 경우

또는 예약 리마인더 캠페인이 예약 시작 시간에 맞춰 제대로 실행되지 않는 경우:

또는 테스트 이메일 발송 시 구글 캘린더에 추가 / iCal/Outlook에 추가 링크가 작동하지 않는 경우:

![예약 커스텀 값 문제](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666282/original/q4MMHhuPiMD37Wp6ThVJqi-NqsWQv6AF_Q.png?1619565661)

{{appointment.start_time}} 또는 기타 예약 커스텀 값이 표시되려면 **예약(Appointment)** 또는 **고객이 예약 완료(Customer booked appointment)** 트리거가 필요합니다. 커스텀 값을 테스트하려면 실제로 예약을 진행해야 합니다.

파이프라인 단계 변경(Pipeline stage changed)을 트리거로 사용하면, 하이레벨이 어떤 예약인지 알 수 없습니다.

![트리거 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666284/original/Apr7vQ6cP9Pwsre_hMgvqtIO9wQ31k6caA.png?1619565661)

워크플로우도 마찬가지입니다:

워크플로우 트리거로 **예약(Appointment)** 또는 **고객이 예약 완료(Customer booked appointment)**를 사용해야 합니다:

커스텀 값을 테스트하려면 **실제 예약을 진행해야** 합니다.

![워크플로우 트리거](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666389/original/4zeTLl0yXB_Pr9oY0Y0xUpibOh4SDj6C3w.png?1619565768)

예약 리마인더 캠페인에 리드를 수동으로 추가해야 하는 경우, 이벤트 시작 날짜로 예약 시작 시간을 선택해야 합니다.

![리마인더 캠페인 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666281/original/J49Z7zBy-fLeedsG7RyZzHAF4thoqgtelA.png?1619565661)

수동으로 예약 변경을 하려면, 우측의 예약(Appointments) 탭으로 이동해서 확정됨(Confirmed)을 재예약(Reschedule)으로 변경하면 됩니다. 이렇게 하면 기존 예약 리마인더 캠페인에서 리드를 제거하고, 새로운 예약 시간으로 다시 예약 리마인더 캠페인에 추가하는 과정이 자동화됩니다.

![예약 상태 변경](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666283/original/2a6LrAcwyEAM1mTDqVEmoHE4yEv4k8Lh1w.png?1619565661)

리드가 스스로 예약을 변경할 수 있도록 하려면, 예약 리마인더 캠페인의 커스텀 값에서 재예약 링크를 선택할 수 있습니다:

![재예약 링크 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666279/original/B61mleFlU1RUPlPPZjkA_VVNUlOixAtLXg.png?1619565660)

![커스텀 값 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666278/original/qYptao1e4Ky9XNjxR8tbTemyIZp8UvAmpQ.png?1619565660)

---
*원문 최종 수정: 2021년 4월 27일*
*Hyperclass 사용 가이드 — hyperclass.ai*