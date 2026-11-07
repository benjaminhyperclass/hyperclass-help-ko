---
원문: /support/solutions/articles/48001181948-when-appointment-start-time-or-any-other-appointment-custom-values-are-not-showing-up
번역일: 2026-11-07
카테고리: 04-캘린더-예약
---

# `{{appointment.start_time}}` 등 예약 커스텀 값이 표시되지 않을 때

예약 시작 시간 같은 예약 관련 커스텀 값이 비어 보이거나, 예약 알림 캠페인이 예약 시작 시간에 맞춰 발송되지 않을 때 확인할 내용을 안내해요.

아래와 같은 경우에 이 문서를 참고하세요.
`{{appointment.start_time}}` 또는 그 외 예약 관련 **커스텀 값**이 표시되지 않아요.
- **예약 알림** 캠페인이 예약 시작 시간에 맞게 발송되지 않아요.
- 테스트 이메일을 보냈는데 **Add to Google calendar**(Google 캘린더에 추가) 또는 **Add to iCal/Outlook**(iCal/Outlook에 추가) 링크가 작동하지 않아요.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666282/original/q4MMHhuPiMD37Wp6ThVJqi-NqsWQv6AF_Q.png?1619565661)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48052844868/original/4zeTLl0yXB_Pr9oY0Y0xUpibOh4SDj6C3w.png?1596761415)

## 트리거를 확인하세요

`{{appointment.start_time}}`이나 다른 예약 커스텀 값이 표시되려면 **Appointment**(예약) 트리거 또는 **Customer booked appointment**(고객이 예약함) 트리거가 필요해요. 커스텀 값을 테스트하려면 실제로 예약을 하나 만들어야 해요.

**Pipeline stage changed**(파이프라인 단계 변경됨)를 트리거로 쓰면 하이퍼클래스가 어떤 예약인지 알 수 없어요.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666284/original/Apr7vQ6cP9Pwsre_hMgvqtIO9wQ31k6caA.png?1619565661)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48043961455/original/DIXR2nEa75kIzA_3KDdiSjyIa-IonFjyig.png?1591812887)

## 워크플로우에서도 마찬가지예요

워크플로우에서도 **Appointment** 또는 **Customer booked appointment**를 워크플로우 트리거로 써야 해요.

커스텀 값을 테스트하려면 실제로 예약을 하나 만들어야 해요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666389/original/4zeTLl0yXB_Pr9oY0Y0xUpibOh4SDj6C3w.png?1619565768)

## 리드를 예약 알림 캠페인에 직접 추가할 때

리드를 **예약 알림** 캠페인에 직접 추가한다면 **event start date**(이벤트 시작일)로 **appointment start time**(예약 시작 시간)을 선택하세요.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666281/original/J49Z7zBy-fLeedsG7RyZzHAF4thoqgtelA.png?1619565661)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48043961457/original/eb744U-ucYRPt_GWsfy1HdfBgbXdkgHO1A.png?1591812887)

## 일정을 직접 변경할 때

오른쪽의 **예약** 탭으로 이동해 **확정**을 **일정 변경**으로 바꾸면 돼요. 그러면 리드를 기존 예약 알림 캠페인에서 빼고, 새 예약 시간으로 예약 알림 캠페인에 다시 추가하는 과정이 자동으로 처리돼요.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666283/original/2a6LrAcwyEAM1mTDqVEmoHE4yEv4k8Lh1w.png?1619565661)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48043961458/original/jT-AV5ARigSw3pYBCB-OnQaNDf6h5oocww.png?1591812887)

## 리드가 직접 일정을 변경하게 하려면

리드가 스스로 일정을 변경할 수 있게 하려면, 예약 알림 캠페인에서 **커스텀 값** 중 **reschedule link**(일정 변경 링크)를 선택하세요.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666279/original/B61mleFlU1RUPlPPZjkA_VVNUlOixAtLXg.png?1619565660)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48043961456/original/62vMn961ixYBFsqpWIf1BJ1mzr5jt8eWQg.png?1591812887)

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48100666278/original/qYptao1e4Ky9XNjxR8tbTemyIZp8UvAmpQ.png?1619565660)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48043961453/original/_tApzRr1QjXTOq9gDVBE7-YxuZ6TO4t_aA.png?1591812887)
