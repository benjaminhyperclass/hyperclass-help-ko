---
원문: /support/solutions/articles/155000003450-recurring-appointments
번역일: 2026-11-06
카테고리: 04-캘린더-예약
---

# 반복 예약 설정하기

같은 예약을 일정한 주기로 자동으로 잡고 싶을 때 쓰는 기능이에요. 캘린더에 반복 규칙을 설정하는 방법과, 앱 안의 예약 창에서 예약마다 사용자 지정 반복을 만드는 방법을 설명해요.

반복 예약 알림은 캘린더에 설정한 반복과, 앱 안의 예약 창에서 만든 사용자 지정 반복 예약에 모두 적용돼요. 새로 잡거나 편집한 예약에는 별도 설정 없이 자동으로 적용돼요.

## 개요

반복 예약은 설정한 반복 규칙에 따라 되풀이되는 예약이에요. 만드는 방법은 두 가지예요.

1. 캘린더 설정에서 반복 설정하기
2. 앱 안의 예약 창에서 사용자 지정 반복 만들기

**캘린더 설정에서 반복 설정하기**: 캘린더 설정에 반복 규칙을 만들어 두면 돼요. 예약 위젯이나 예약 링크로 누군가 예약할 때 이 규칙이 적용돼요. 앱 안의 예약 창에서 **날짜 및 시간**의 **기본** 탭으로 예약을 만들 때도 마찬가지예요.

![캘린더에 설정한 반복 예약 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035029663/original/EsLyXsQ2QY96XF7EB4bRDgQfZho1scaENQ.png?1729405622)

**앱 안의 예약 창에서 사용자 지정 반복 만들기**:

- 앱 안의 예약 창에서 **날짜 및 시간**의 **사용자 지정** 탭으로 예약을 만들 때, 그 예약 시리즈에만 적용되는 반복 규칙을 정할 수 있어요. 이 사용자 지정 반복은 캘린더에 설정한 내용보다 우선해요.

{% hint style="warning" %}
사용자 지정 반복 규칙을 쓰는 예약은 가용성을 확인하지 않아요. 실제로 예약 가능한 시간인지와 관계없이, 설정한 반복 규칙대로 시간을 예약해요.
{% endhint %}

![앱 안의 예약 창에서 사용자 지정 반복을 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035029707/original/ClkD0nRh1zFkwtDV894oh7N6YPn6Sn1dpw.png?1729405798)

## 캘린더에서 반복 예약 설정하기

1. **캘린더 설정**으로 이동해서 설정할 캘린더를 선택하세요.

   ![캘린더 설정에서 캘린더를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035029750/original/BgwCRFkYMYOX-_ehd4l4cbCds2qpvj6Q0Q.png?1729405902)

2. 특정 날짜별 시간대가 추가되어 있지 않은지, 캘린더에 팀원이 한 명만 배정되어 있는지 확인하세요.
3. **가용성** 탭으로 이동해서 **Recurring Meeting**(반복 미팅) 토글을 켜세요.

   ![가용성 탭에서 반복 미팅 토글을 켜는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035029817/original/YdbUdRZfotW5SNlJRqXQeHsDmaIIpU3v5A.png?1729405972)

4. 필요에 맞게 반복 설정을 입력하고 **저장**을 클릭하세요.

## 반복 설정

1. **반복**: 반복 주기를 선택해요. **매일**, **매주**, **매월**, **사용자 지정** 중에서 고르면 돼요.
2. **Times to Repeat**(반복 횟수): 반복 예약을 몇 번 잡을지 정해요. 예를 들면 다음과 같아요.

   - **매일**: 정한 횟수만큼 매일 반복해요.
   - **매주**: 정한 횟수만큼 매주 같은 요일에 반복해요.
   - **매월**: 정한 횟수만큼 매월 같은 날짜에 반복해요.
   - **사용자 지정**: 원하는 반복 패턴을 직접 정할 수 있어요.

{% hint style="info" %}
반복은 최대 **24**회까지 설정할 수 있어요. 이 설정은 예약 위젯으로 예약할 때와, 앱 안의 예약 창의 **날짜 및 시간**에서 **기본** 탭을 쓸 때 적용돼요.
{% endhint %}

## 예약할 수 없는 시간대 처리

1. **Skip Booking Unavailable Slots**(예약 불가 시간대 건너뛰기): 예약할 수 없는 시간대는 건너뛰고, 가능한 시간대만 예약해요. 예를 들어 예약이 10건 필요한데 3개 시간대가 불가능하면 7건만 예약돼요.
2. **Continue Booking**(계속 예약): 예약할 수 없는 시간대여도 예약해요. 겹치는 시간대의 예약 상태를 **Confirmed**(확정)로 할지 **Unconfirmed**(미확정)로 할지 정할 수 있어요.
3. **Book Next Available Slot**(다음 가능한 시간대 예약):

   - 예약할 수 없는 시간대는 건너뛰고, 반복 규칙에 맞는 다음 가능한 시간대를 찾아요. 예를 들어 예약이 10건 필요한데 3개 시간대가 불가능하면, 가능한 시간대를 3개 더 찾아서 총 10건을 예약해요. 즉, 중간에 있는 불가능한 시간대는 건너뛰고 그다음으로 가능한 시간대를 예약해요.

   {% hint style="info" %}
   **연속으로 3개** 시간대를 **예약할 수 없으면** 더 이상 가능한 시간대를 찾지 않아요.
   {% endhint %}

![예약할 수 없는 시간대 처리 옵션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035029965/original/kp8wNMsMVNPlLrXbBvvgqVvo5npO8l7oMA.png?1729406316)

## 앱 안의 예약 창에서 반복 예약 만들기

앱 안의 예약 창에서 반복 예약을 만드는 방법은 두 가지예요.

1. **기본** 탭 사용: 캘린더에 이미 설정된 반복 규칙을 그대로 따라요. 캘린더가 반복 예약용으로 설정되어 있으면 예약 가능한 반복 시간대가 표시돼요. 일반 캘린더라면 시간대가 하나만 표시돼요.

![기본 탭 화면 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035030186/original/lUX-9YlldQr5S41p98UckTOEMspIzsOiMg.png?1729406964)

![기본 탭 화면 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035030202/original/eBXCLidln886C7GKykNpFMj4U0ff6knsqQ.png?1729406981)

![기본 탭 화면 3](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035030207/original/l950N6__VK_qgvo70bhiPCEhohxApq5LCQ.png?1729407014)

2. **사용자 지정** 탭 사용:

   - 지금 만드는 예약에만 쓸 반복 규칙을 직접 정할 수 있어요. 이 규칙은 해당 예약 시리즈에만 적용되고, 다른 예약이나 캘린더 설정에는 영향을 주지 않아요.
   - 캘린더에 반복이 설정되어 있는지와 관계없이, 앱 안의 예약 창에서 사용자 지정 반복을 만들 수 있어요. 클래스 예약 캘린더와 서비스 캘린더에서는 지원하지 않아요.

{% hint style="info" %}
사용자 지정 반복 예약은 모든 기본 규칙과 가용성 확인보다 우선해요.
{% endhint %}

{% hint style="info" %}
사용자 지정 반복, 그리고 일괄 편집·삭제 기능은 앱 안의 예약 창에서 만든 사용자 지정 예약에서만 쓸 수 있어요.
{% endhint %}

### 반복 예약 만드는 순서

1. **Create New Appointment**(새 예약 만들기)로 이동해서 캘린더, 팀원, 연락처를 선택하세요.

   ![새 예약 만들기에서 캘린더, 팀원, 연락처를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035030440/original/_7iWfl8WqbKgePngfJueXEGTgvnDqyrDUg.png?1729407865)

2. **날짜 및 시간** 섹션에서 **사용자 지정**을 선택하세요.
3. **Recurring Event**(반복 일정) 체크박스를 선택하세요.
4. 드롭다운에서 반복 패턴을 고르거나, **사용자 지정**을 클릭해서 반복 규칙을 직접 정하세요.

   ![반복 패턴을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035030572/original/cBOWqwp0pCCP02PHARyOC-Z43kTIYEl-ag.png?1729408425)

5. 반복 예약을 언제 끝낼지 정하세요.

   - **없음**: 반복이 끝나지 않고 계속돼요.
   - **On a Specific Date**(특정 날짜): 반복이 끝나는 날짜를 정해요.
   - **After X Number of Occurrences**(지정한 횟수 후): 몇 번 반복한 뒤 끝낼지 정해요.

   ![반복 종료 조건을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035030595/original/E4iE9YV2WY7sxE4tfDXHm1t2Gs-jkutzZQ.png?1729408468)

6. 필요한 설정을 마치고 **Create Appointment**(예약 만들기)를 클릭하세요.

이제 정한 규칙에 따라 사용자 지정 반복 예약이 만들어져요.

이렇게 만든 반복 예약은 모든 회차가 하나의 예약에 연결돼요. 편집하거나 삭제할 때는 다음 중에서 고를 수 있어요.

- 모든 회차 편집 또는 삭제: 반복 예약의 모든 회차를 수정하거나 삭제해요.
- 특정 회차 편집 또는 삭제: 선택한 한 회차만 수정하거나 삭제해요.
- 이후 회차 편집 또는 삭제: 앞으로 남은 회차만 수정하거나 삭제하고, 이미 지난 회차는 그대로 둬요.

![반복 예약 편집·삭제 옵션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035030886/original/x0CFmQ6S6mPY_Bcwj7xc-ykNteLSDJxzxg.png?1729409649)

## 반복 예약 알림

알림은 새로 잡은 모든 예약에 적용돼요. 캘린더에 설정한 반복과 앱 안의 예약 창에서 만든 사용자 지정 반복이 모두 해당돼요.

- 확정 및 미확정 알림: 예약 한 건당 한 번만 보내요. 시리즈 전체를 한 번에 안내해요.
- 리마인더와 후속 알림: 사용자 지정 반복 예약을 포함해 회차마다 예약돼요.
- 일정 변경과 취소 알림(캘린더에 설정한 반복): 해당 예약에 대해서만 보내요.
- 일정 변경과 취소 알림(사용자 지정 반복): 선택한 옵션에 따라 알림을 보내요.

  - **이 예약**을 선택하면 해당 예약에 대한 알림을 보내요.
  - **모든 예약**을 선택하면 시리즈 전체에 대한 알림을 한 번 보내요.
  - 일정을 변경할 때 **This and following**(이 예약 및 이후 예약)을 선택하면 알림을 한 번 보내요.

- 반복 상세 정보: 사용자 지정 반복의 경우 `{{appointment.start_time}}` 이 날짜와 함께 반복 패턴을 보여 줄 수 있어요. 예: "25th September (reoccurs every Thursday)"

![반복 상세 정보가 포함된 알림 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083312166/original/zZY2syDtxpcdvHHoFq69FlaQwOcLYKAcPw.png?1791982962)

이 변경은 캘린더 알림에만 적용돼요. 워크플로우의 동작은 그대로예요.

## 제한 사항

- 앱 안의 예약 창에서 사용자 지정 반복 예약을 만들면, 시리즈의 첫 번째 예약만 **예약 목록 보기**, **연락처** 탭, **대화** 탭에 표시돼요. 이후 예약은 이 화면들에 하나씩 표시되지 않아요.
- 사용자 지정 반복 예약에서 **This and following**(이 예약 및 이후 예약)을 취소하면, 기술적인 제한 때문에 현재는 취소 알림이 발송되지 않아요.
- 워크플로우는 현재 시리즈의 첫 번째 사용자 지정 반복 예약에서만 실행돼요. 시리즈의 이후 사용자 지정 반복 예약은 워크플로우 트리거를 지원하지 않아요.
- 서비스 캘린더와 클래스 예약 캘린더는 사용자 지정 반복 예약을 지원하지 않아요.
- 취소·일정 변경 링크를 쓰거나 **연락처**/**대화** 탭에서 사용자 지정 반복 예약을 취소하거나 일정을 변경하면 시리즈 전체에 적용돼요.
- 예약 시리즈 전체에 미팅 링크(Zoom, Google Meet, Microsoft Teams 중 하나)가 하나만 만들어져요.
- Outlook 동기화 제한 사항:

  - 하이퍼클래스에서 만들어 Outlook에 동기화한 예약을 Outlook에서 변경하면, 그 변경 내용은 다시 동기화되지 않아요.
  - 하이퍼클래스에서 예약을 자주 삭제하면 Outlook 동기화에 영향을 줄 수 있어요.

## 자주 묻는 질문

### 반복 예약마다 고객에게 확정 알림이 따로 가나요?

아니요. 캘린더에 설정한 반복이든 사용자 지정 반복이든, 반복 시리즈 전체에 대해 확정 또는 미확정 알림이 한 번만 가요.

### 반복 시리즈의 각 예약마다 리마인더도 받나요?

네. 사용자 지정 반복 예약을 포함해, 리마인더와 후속 알림은 회차마다 따로 예약돼요.

### 사용자 지정 반복 예약의 일정을 변경하면 알림은 어떻게 가나요?

일정을 변경할 때 선택한 옵션에 따라 달라요.

- **이 예약**: 선택한 예약에 대한 알림을 보내요.
- **모든 예약**: 시리즈 전체에 대한 알림을 한 번 보내요.
- **This and following**(이 예약 및 이후 예약): 선택한 예약과 이후 예약에 대한 알림을 한 번 보내요.

### 알림에 반복 상세 정보를 표시하려면 어떻게 하나요?

알림 템플릿에 `{{appointment.start_time}}` 커스텀 값을 넣으세요. 사용자 지정 반복 예약이라면 이 값이 예약 날짜 및 시간과 함께 반복 패턴을 보여 줄 수 있어요.

### 이 알림 기능을 쓰려면 캘린더 설정을 바꿔야 하나요?

아니요. 새로 잡거나 편집한 예약에 자동으로 적용되고, 별도 설정은 필요 없어요. 다만 반복 상세 정보를 표시하려면 알림 템플릿에 예약 날짜 및 시간 커스텀 값이 들어 있어야 해요.

### 이 알림 기능이 워크플로우에도 영향을 주나요?

아니요. 캘린더 알림에만 적용돼요. 기존 워크플로우의 동작은 그대로예요.
