---
원문: /support/solutions/articles/155000003364-workflow-action-update-appointment-status
번역일: 2026-11-07
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Update Appointment Status(예약 상태 업데이트)

**Update Appointment Status**(예약 상태 업데이트) 액션은 워크플로우에 들어온 연락처의 예약 상태를 바꿔요. 예약이 취소되거나 고객이 참석했을 때 예약 상태를 자동으로 맞추고 싶다면 이 액션을 쓰세요.

## 개요

**Update Appointment Status** 액션은 워크플로우 안의 연락처와 연결된 예약의 상태를 바꿔요. 예약을 **Confirmed**(확정), **Cancelled**(취소됨), **Showed**(참석) 같은 새 상태로 업데이트할 수 있어요.

워크플로우를 시작시킨 트리거가 **Appointment**(예약)나 **Customer Book Appointment**(고객 예약 완료) 같은 예약 관련 이벤트라면, 그 트리거를 일으킨 예약의 상태가 자동으로 바뀌어요. 그 외의 트리거라면 해당 연락처의 가장 최근 예약 상태가 바뀌어요.

## 액션 이름

**Update Appointment Status**

## 액션 설명

이 액션은 이미 있는 예약의 상태를 바꿔요. 워크플로우가 예약 관련 이벤트로 시작됐는지, 다른 트리거로 시작됐는지에 따라 상태를 바꿀 예약이 정해져요. 덕분에 예약 상태에 항상 최신 정보가 반영돼요.

## 액션 상세 정보(Action Details)

![Update Appointment Status 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032467522/original/oVVTE1Om39xlri7JtlJVbFz7n6-TxiFz-g.png?1725820649)

### 설정 방법

1. **Action Name**(액션 이름)에 액션 이름을 입력해요. 예: Update Appointment Status
2. **Status**(상태) 드롭다운에서 원하는 예약 상태를 선택해요. 선택할 수 있는 상태는 다음과 같아요.
   - **New**(신규)
   - **Confirmed**
   - **Cancelled**
   - **Showed**
   - **No-show**(불참)
   - **Invalid**(유효하지 않음)
3. 이 액션은 워크플로우를 시작시킨 예약의 상태를 바꿔요. 해당하는 예약이 없으면 연락처의 가장 최근 예약 상태를 바꿔요.

| 필드 이름 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Status** | 예약을 바꿀 새 상태예요. (예: New, Confirmed, Cancelled, Showed, No-show, Invalid) | 예 |

## 예시

고객이 예약을 취소하는 경우를 생각해 볼게요. 이때 이 액션으로 예약 상태를 **Cancelled**로 자동 업데이트할 수 있어요. 반대로 고객이 예약한 시간에 찾아왔다면 상태를 **Showed**로 바꿔서 참석한 예약으로 남길 수 있어요.

## 추가 참고 사항

- 이 액션을 쓰면 예약 상태가 바뀔 때 이어지는 후속 작업을 자동화하기 좋아요.
- 올바른 예약의 상태가 바뀌도록 워크플로우를 예약 관련 이벤트로 시작시키세요.
- 예약 상태가 잘못 업데이트되지 않도록, 워크플로우를 저장하기 전에 선택한 상태가 맞는지 다시 확인하세요.

{% hint style="info" %}
예약 내용이 외부 캘린더(Google, Outlook, iCloud)에 함께 기록되는 경우, 예약 상태를 **Showed**나 **No-show**로 바꿔도 외부 캘린더 이벤트는 업데이트되지 않아요.

이렇게 하면 참석자에게 서드파티의 "이벤트 업데이트" 이메일이 불필요하게 가는 일을 막을 수 있어요.
{% endhint %}
