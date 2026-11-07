---
원문: https://help.gohighlevel.com/support/solutions/articles/155000003201-workflow-trigger-messaging-error-code-sms
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Messaging Error - SMS(메시지 오류 - SMS)

**Messaging Error - SMS** 트리거는 SMS가 전달되지 않고 아래 오류 코드 중 하나가 반환되면 워크플로우를 자동으로 시작해요. 이 트리거로 오류가 난 연락처를 정리하면 전달률을 높일 수 있어요.

## 개요

전달되지 않은 SMS의 오류 코드를 기준으로 워크플로우를 실행해요. 오류 유형에 맞는 조치를 자동화하면 연락처 목록을 깨끗하게 관리할 수 있어요.

## 트리거 이름

Messaging Error - SMS(메시지 오류 - SMS)

## 설정 방법

1. **Workflow Trigger**(워크플로우 트리거)를 선택하세요.
   - 드롭다운 목록에서 **Messaging Error - SMS**를 선택하세요.
2. **Workflow Trigger Name**(트리거 이름)을 입력하세요.
   - 워크플로우 안에서 쉽게 알아볼 수 있도록 트리거 이름을 구체적으로 정하세요.
3. **Filters**(필터)를 설정하세요.
   - 필터를 추가하면 아래 오류 코드 중 특정 코드에만 트리거가 작동하도록 좁힐 수 있어요.

| 코드 | 설명 |
| --- | --- |
| 30007 | 통신사 규정 위반 (Carrier Violation) |
| 30034 | 번호의 A2P 등록 보류 중 (A2P Registration Pending on Number) |
| 30032 | 수신자 부담(Toll Free) 번호 미인증 (Toll Free Number not Verified) |
| 30005 | 비활성 사용자이거나 존재하지 않는 번호 (User Inactive/Number does not exist) |
| 30003 | 연결할 수 없거나 서비스가 중단된 번호 (Unreachable/Out of Service Number) |
| 30004 | SMS 수신을 원하지 않음 / 수신거부 설정됨 (Do not want SMS/DND enabled) |
| 30006 | 유선 전화이거나 SMS를 받을 수 없음 (Landline/Incapable to receive SMS) |
| 30023 | US A2P 10DLC - 일일 메시지 한도 도달 (US A2P 10DLC - Daily Message Cap Reached) |
| 21408 | 해당 지역에 SMS 발송 권한이 켜져 있지 않음 (Permission to Send SMS Not Enabled for Region) |
| 30008 | 알 수 없는 오류 (Unknown Error) |
| 21606 | 유효하지 않은 'From' 전화번호 (Invalid 'From' Phone Number) |
| 21211 | 유효하지 않은 'To' 전화번호 (Invalid 'To' Phone Number) |
| 21614 | 'To' 번호가 유효한 모바일 번호가 아님 ('To' Number Is Not a Valid Mobile Number) |
| 21610 | 사용자가 STOP으로 답장함(수신 해지) (User Replied with STOP (Opted Out)) |
| 30011 | 수신 번호 또는 지역에서 MMS가 지원되지 않음 (MMS Not Supported by Recipient Number or Region) |
| 30033 | A2P 캠페인이 중지되었거나 삭제됨 (A2P Campaign Suspended or Deleted) |
| 21661 | 'From' 번호가 SMS를 지원하지 않음 ('From' Number Is Not SMS-Capable) |
| 21635 | 'To' 번호가 유선 전화일 수 없음 ('To' Number Cannot Be a Landline) |
| 30037 | 발신 메시지가 비활성화됨 (Outbound Messaging Disabled) |
| 30002 | 서브 계정이 정지됨 (Sub-Account Suspended) |

## 예시

신제품을 홍보하는 SMS 캠페인을 보내고 있다고 가정해 볼게요. 다음에도 메시지를 받지 못할 가능성이 높은 연락처를 자동으로 제거하거나, 태그를 추가해 일정 시간이 지난 뒤 SMS를 다시 보내고 싶어요.

1. **Workflow Trigger**를 선택하세요.
   - 트리거: **Messaging Error - SMS**
2. **Workflow Trigger Name**을 입력하세요.
   - 이름: Messaging Error - SMS
3. **Filters**를 설정하세요.
   - **Filter Type**(필터 유형): **Error Code is**(오류 코드가 다음과 같음)
   - **Error Name**(오류 이름): **30007 - Carrier Violation**(통신사 규정 위반)

   ![트리거 필터에서 오류 코드 30007을 선택한 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033086504/original/iv8aR4ZsYOgRmu7gfYc1HJCccorQpor0dQ.jpeg?1726659711)
4. 오류 코드마다 다른 조치가 필요하면 **If/Else**(조건 분기)로 나눠서 설정할 수 있어요. 아래 화면을 참고하세요.

   ![오류 코드별로 If/Else 분기를 만든 워크플로우 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033086528/original/vGMb8HREi0nL0poEZYc-KF4Qw_uRJHKyBQ.jpeg?1726659731)
