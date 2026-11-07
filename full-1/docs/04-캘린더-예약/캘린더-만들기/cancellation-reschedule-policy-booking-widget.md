---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002738-cancellation-reschedule-policy-booking-widget-
번역일: 2026-11-07
카테고리: 04-캘린더-예약
---

# 예약 위젯의 취소·일정 변경 정책

예약자가 예약 위젯에서 취소 링크나 일정 변경 링크를 쓸 수 있는 기간을 정하는 설정이에요. 예약 직전에 일정이 바뀌는 일을 줄이고 싶을 때 사용하세요.

[동영상](https://www.youtube.com/embed/DFgRG92wJVs?&wmode=opaque)

## 개요

취소·일정 변경 정책 설정으로 예약자가 예약 위젯에서 취소 링크나 일정 변경 링크에 접근할 수 있는 기간을 정할 수 있어요.

정해 둔 기간이 지나면 예약자는 링크로 예약을 바꿀 수 없어요. 이후에 변경하려면 사업주에게 직접 문의해야 해요. 주로 예약 직전의 변경을 막는 데 도움이 돼요.

## 사용 방법

1. **캘린더 설정**으로 이동해 원하는 캘린더를 선택해요.
2. **Notifications**(알림)와 **추가 옵션** 섹션으로 이동해요.
3. **Cancellation and Reschedule Policy**(취소 및 일정 변경 정책) 아래에서 **Allow Cancellation of Meeting**(미팅 취소 허용)과 **Allow Rescheduling of Meeting**(미팅 일정 변경 허용)을 켜요.

   ![취소 및 일정 변경 정책의 허용 옵션을 켠 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033230340/original/MGArGrsEbh_tCpZA3xJKHLl8MT4AbFkWww.png?1726823029)

4. 링크를 비활성화할 시간 범위를 지정해요.

   ![링크를 비활성화할 시간 범위를 지정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033230968/original/erSvM9kLoVd-ymDmepj8Q0ymFUa9TTZOvg.png?1726823494)

{% hint style="info" %}
값을 비워 두면 링크가 만료되지 않아요. 예약자는 언제든 링크를 쓸 수 있어요.
{% endhint %}

**이 설정을 켜면**

추가 메모 영역에 취소 링크와 일정 변경 링크가 들어가고, 캘린더 초대에도 포함돼요. 이 링크는 설정한 기간이 지나면 만료돼요. 그러면 예약자는 미팅을 취소하거나 일정을 바꿀 수 없어요.

![추가 메모 영역에 취소 링크와 일정 변경 링크가 표시된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028626656/original/zXnX_zWHfeFSujbXsJo_pLkf7ip-kwMigQ.png?1719999815)

## 예약자는 취소·일정 변경 링크를 어떻게 받나요?

**Allow Cancellation of Meeting**(미팅 취소 허용)과 **Allow Rescheduling of Meeting**(미팅 일정 변경 허용)을 켜면 두 링크가 추가 메모 영역에 들어가요. 이 영역의 내용은 캘린더 초대의 메모에도 포함돼요. 예약자는 이 링크로 예약을 취소하거나 일정을 변경할 수 있어요.

워크플로우에서 커스텀 값 `{{appointment.reschedule_link}}`와 `{{appointment.cancellation_link}}`를 써서 예약자에게 링크를 보낼 수도 있어요. 이 값은 예약과 관련된 이벤트로 시작하는 워크플로우에서만 작동해요. 예를 들어 **Appointment Status**(예약 상태)나 **Customer Booked Appointment**(고객 예약 완료) 트리거가 있어요. 일반 폼 제출이나 단계 변경처럼 예약 트리거가 없는 워크플로우에는 예약 정보가 전달되지 않아서 값이 빈 칸으로 나와요.

미팅과 서비스는 이미 만든 예약에서 바로 일정 변경 링크를 만들 수도 있어요.

1. 예약을 열어요.
2. **예약 액션**을 클릭해요.
3. **Generate Reschedule Link**(일정 변경 링크 생성)를 선택해요.
4. **링크 복사**를 클릭해요.

복사한 링크는 원하는 방법으로 고객에게 전달하면 돼요.

이렇게 하면 고객이 일정 변경 링크가 들어 있는 이전 캘린더 초대, 이메일, 알림을 찾지 않아도 일정 변경 화면으로 들어갈 수 있어요.
