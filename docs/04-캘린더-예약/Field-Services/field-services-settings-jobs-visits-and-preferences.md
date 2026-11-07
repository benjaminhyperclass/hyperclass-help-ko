---
원문: /support/solutions/articles/155000009386-field-services-settings-jobs-visits-and-preferences
번역일: 2026-11-07
카테고리: 04-캘린더-예약
---

# 현장 서비스 설정: 작업, 방문, 환경설정

운영 설정은 팀이 매일 일하는 방식을 정해요. 요청·작업·방문의 이름, 고객에게 보여 줄 방문 시간 형식, 방문 상태 이름, 체크리스트, 알림, 켜 둘 기능을 설정할 수 있어요. 이 문서에서는 설정을 간단히 살펴보고, 자세한 내용은 각 문서로 안내해요.

{% hint style="info" %}
현장 서비스는 현재 비공개 베타 단계이며, 선정된 계정에서만 쓸 수 있어요. 기능과 화면은 개선 과정에서 바뀔 수 있어요.
{% endhint %}

## 운영 설정 위치

1. **현장 서비스 > Field Services Settings**(현장 서비스 설정)로 이동해요.
2. **글로벌 설정** 탭에 그대로 있어요.
3. **Operations**(운영) 아래에서 **Jobs, visits and requests**(작업, 방문, 요청), **알림**, **Preferences and features**(환경설정 및 기능) 중 하나를 열어요.

---

## 일반: 제목, 도착 시간대, 보관 사유

**Jobs, visits and requests > 일반**을 열어요.

### 제목

새 요청, 작업, 방문의 이름을 어떻게 지을지 정해요. **Request title**(요청 제목), **직책**, **Visit title**(방문 제목) 필드에는 직접 입력한 텍스트와 병합 필드를 함께 쓸 수 있어요. 기본값은 연락처의 전체 이름이에요(예: *Sarah Lee*). 태그 아이콘을 클릭하면 병합 필드를 넣을 수 있어요.

### 도착 시간대

확인 메시지와 리마인더에 방문 시간을 어떻게 보여 줄지 정해요. 각 방문에서 바꿀 수도 있어요.

| 옵션 | 고객에게 보이는 내용 |
| --- | --- |
| **Exact time**(정확한 시간) | 시작 시간이 표시돼요(예: 오전 10:00). |
| **기간** | 방문 시간부터 시작하는 시간 범위가 표시돼요. |

### 요청 보관 사유

직원이 요청을 작업으로 전환하지 않고 보관할 때 고를 수 있는 사유를 정해요. **Add reason**(사유 추가)을 클릭하면 사유를 추가할 수 있어요. 사유는 최대 8개까지 만들 수 있어요.

![제목, 도착 시간대, 보관 사유를 설정하는 일반 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084162855/original/3Dw-ssIc0taUjgjUcjkGyi48o5qtn32rKw.jpg?1792999555)

---

## 방문 상태, 체크리스트, 알림

아래 설정은 각각 별도 문서에서 자세히 설명해요.

| 설정 | 기능 | 자세히 보기 |
| --- | --- | --- |
| **Visit statuses**(방문 상태) | 방문 단계별 이름을 관리해요. | [현장 서비스의 방문 상태](visit-statuses-in-field-services.md) |
| **Checklists**(체크리스트) | 직원이 반복해서 쓸 체크리스트를 만들어요. | [현장 서비스의 체크리스트, 메모, 폼](checklists-notes-and-forms-in-field-services.md) |
| **알림** | 연락처, 배정된 직원, 관리자나 디스패처에게 보낼 메시지를 켜요. | [현장 서비스의 알림](notifications-in-field-services.md) |

---

## 환경설정 및 기능

**Preferences and features**를 열어 앱 안의 환경설정을 정해요.

| 설정 | 기능 |
| --- | --- |
| **주 시작 요일** | 캘린더와 다른 주간 보기에서 한 주를 시작할 요일을 고르세요. 기본값은 일요일이에요. |
| **요청** | 연락처가 작업 요청을 보낼 수 있게 해요. 요청은 직원이 검토한 뒤 작업으로 전환해요. [현장 서비스의 요청](requests-in-field-services.md)을 참고하세요. |
| **타임시트** | 직원이 작업과 방문별로 근무 시간을 기록할 수 있게 해요. [현장 서비스의 타임시트](timesheets-in-field-services.md)를 참고하세요. |

설정을 마치면 **변경사항 저장**을 클릭하세요.

![환경설정 및 기능 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084162911/original/mK2qkMHJbWGd3l0DRaflvF55lPVgVXGA9w.jpg?1792999584)

---

## 자주 묻는 질문

### 기본 제목 형식을 나중에 바꿀 수 있나요?
네, 바꿀 수 있어요. 제목 형식을 바꾸면 새로 만드는 요청, 작업, 방문에 적용돼요. 이미 만든 항목은 기존 제목이 그대로 유지돼요.

### 고객에게 보이는 예약 시간 설정은 어디에 있나요?
**Online booking**(온라인 예약) > **Booking rules**(예약 규칙)에 있어요. [현장 서비스 설정: 온라인 예약](field-services-settings-online-booking.md)을 참고하세요.
