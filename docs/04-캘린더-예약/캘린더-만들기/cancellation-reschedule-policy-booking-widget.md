---

번역일: 2026-04-06
카테고리: 04-캘린더-예약 > 캘린더-만들기
---

# 취소 및 일정 변경 정책 (예약 위젯)

목차

- [개요](#개요)
- [사용 방법](#사용-방법)
- [예약자가 취소 및 일정 변경 링크를 받는 방법](#예약자가-취소-및-일정-변경-링크를-받는-방법)

---

## 개요

취소 및 일정 변경 정책 설정을 통해 예약 위젯에서 예약자가 취소 또는 일정 변경 링크에 접근할 수 있는 시간 범위를 정의할 수 있습니다.

이 기능을 사용하면 일정 시간이 지난 후에는 예약자가 취소나 일정 변경 링크에 접근하여 예약을 수정할 수 없도록 제한할 수 있습니다. 대신 변경사항이 필요한 경우 비즈니스 담당자에게 직접 연락해야 합니다. 이는 주로 비즈니스에서 막판 예약 변경을 방지하는 데 도움이 됩니다.

---

## 사용 방법

- Calendar Settings(캘린더 설정)으로 이동하여 원하는 캘린더를 선택하세요.

- Notifications and Additional Options(알림 및 추가 옵션) 섹션으로 이동하세요.

- Cancellation and Reschedule Policy(취소 및 일정 변경 정책) 아래에서 "Allow Cancellation of Meeting(미팅 취소 허용)"과 "Allow Rescheduling of Meeting(미팅 일정 변경 허용)"을 활성화하세요.

![취소 및 일정 변경 정책 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033230340/original/MGArGrsEbh_tCpZA3xJKHLl8MT4AbFkWww.png?1726823029)

- 링크가 비활성화될 시간 범위를 지정하세요. (참고: 값을 비워두면 링크가 만료되지 않으며 예약자가 언제든지 접근할 수 있습니다.)

![시간 범위 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033230968/original/erSvM9kLoVd-ymDmepj8Q0ymFUa9TTZOvg.png?1726823494)

이 설정이 활성화되면:

취소 링크와 일정 변경 링크가 추가 메모 섹션에 추가되고 캘린더 초대에 포함됩니다. 이러한 링크는 설정된 시간에 따라 만료되어 예약자가 미팅을 취소하거나 일정을 변경하는 것을 방지합니다.

![캘린더 초대 메모의 링크](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028626656/original/zXnX_zWHfeFSujbXsJo_pLkf7ip-kwMigQ.png?1719999815)

---

## 예약자가 취소 및 일정 변경 링크를 받는 방법

"Allow Cancellation(취소 허용)"과 "Allow Reschedule(일정 변경 허용)"을 활성화하면 이러한 링크가 추가 메모 섹션에 추가됩니다. 이 섹션의 내용은 캘린더 초대의 메모 섹션에 포함됩니다. 예약자는 해당 링크를 사용하여 예약을 취소하거나 일정을 변경할 수 있습니다.

또는 워크플로우에서 커스텀 값 `{{appointment.reschedule_link}}`와 `{{appointment.cancellation_link}}`을 사용하여 예약자에게 이러한 링크를 발송할 수 있습니다. 이러한 값들은 Appointment Status(예약 상태)나 Customer Booked Appointment(고객 예약 완료)와 같은 예약 기반 이벤트로 워크플로우가 트리거되는 경우에만 작동합니다. 예약 트리거가 없는 워크플로우(일반적인 폼 제출이나 단계 변경 등)는 예약 컨텍스트를 전달하지 않으므로 해당 값들이 빈 값으로 렌더링됩니다.

---
*원문 최종 수정: Mon, 9 Jun, 2025 at 3:21 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*