---
원문: /support/solutions/articles/155000001485-round-robin-calendars-setup-distribution-availability-explained
번역일: 2026-11-06
카테고리: 04-캘린더-예약
---

# 라운드 로빈 캘린더 설정과 예약 배정·가용 시간 이해하기

라운드 로빈 캘린더는 예약을 여러 팀원에게 고르게 나눠 배정하는 캘린더예요. 이 문서에서는 라운드 로빈 캘린더가 어떻게 동작하는지, 어떻게 만드는지 안내해요.

## 라운드 로빈 캘린더란 무엇이고, 어떻게 동작하나요?

라운드 로빈 캘린더는 배정된 팀원들에게 예약을 자동으로 나눠 주는 일정 시스템이에요. 고객이 원하는 시간에 어느 팀원이 가능한지 자동으로 확인해서 업무량이 한쪽으로 몰리지 않게 해 줘요.

- 캘린더를 설정할 때 팀원을 한 명 이상 배정해야 해요.
- 고객이 예약을 요청하면, 먼저 배정된 첫 번째 팀원의 가용 시간을 확인해요.
- 첫 번째 팀원이 불가능하면 다음 팀원으로 자동으로 넘어가요.
- 가능한 팀원을 찾을 때까지 이 과정을 반복해요.
- 선택한 시간에 가능한 팀원이 아무도 없으면, 고객이 빈 시간대를 예약하지 못하게 막아요. 그래서 고객에게는 예약할 수 있는 시간대만 보여요.

핵심 장점은 팀원이 실제로 가능할 때만 고객이 예약한다는 점이에요. 일정이 겹치는 일이 줄고, 직접 조정해야 하는 일도 줄어요.

### 슬롯 수용 인원은 어떻게 계산하나요?

라운드 로빈 캘린더에서 한 시간대(슬롯)에 예약을 여러 건 받을 수 있게 설정했다면, 슬롯 수용 인원 한도에 따라 예약 가능 여부가 정해져요.

- 확정된 예약 한 건마다 슬롯 수용 인원이 1씩 줄어요.
- 예약이 여러 시간대에 걸쳐 있으면, 영향을 받는 각 슬롯의 수용 인원이 1씩 줄어요.
- 슬롯은 정해 둔 수용 인원 한도를 모두 채웠을 때만 막혀요.
- 겹치는 예약이 영향을 받는 모든 슬롯을 미리 완전히 막지 않아요.

## 라운드 로빈 캘린더를 쓰면 좋은 이유

팀이 예약을 함께 받거나 고객 응대를 나눠 맡을 때 특히 도움이 돼요.

- 효율적인 일정 관리: 예약 배정이 자동화되어 시간과 수작업이 줄어요.
- 균형 잡힌 업무량: 예약을 고르게 나눠서 한 팀원에게 몰리지 않아요.
- 빠른 응답: 가장 먼저 가능한 팀원이 배정되어 고객 경험이 좋아져요.
- 고객의 선택 폭: 고객이 가능한 시간대 중 원하는 곳을 고를 수 있어요.
- 성장하는 팀에 적합: 예약이 많아져도 병목 없이 관리할 수 있어요.

## 라운드 로빈 캘린더 만들기

라운드 로빈 캘린더를 만들면 예약이 가능한 팀원에게 자동으로 나뉘어요. 캘린더 유형을 고르고, 예약 배정 방식을 설정하고, 팀원을 한 명 이상 배정하는 순서로 진행해요.

1. 하이퍼클래스에서 **설정 > 캘린더**로 이동해 **Create Calendar**(캘린더 만들기)를 클릭하고, 캘린더 유형으로 **라운드 로빈**을 선택하세요.

   ![설정 > 캘린더에서 캘린더를 만들고 라운드 로빈 유형을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041483729/original/snsUAoeI0jXrawvKNPCS0U_HWtTPkjxQTA.gif?1739375415)

   {% hint style="info" %}
   서브 계정의 **캘린더** 탭에서 **캘린더 설정**을 클릭한 다음 **Create Calendar**(캘린더 만들기)를 클릭하고, 캘린더 유형으로 **라운드 로빈**을 선택해도 돼요.

   ![캘린더 탭에서 캘린더 설정으로 들어가 라운드 로빈 캘린더를 만드는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041483845/original/rKM8KM6Iq9udR3tBzWCRL9tg2w_LN5-DKg.gif?1739375508)
   {% endhint %}

2. **캘린더 이름**과 **설명**을 입력하세요. 설명에는 이 캘린더를 어떤 용도로 만들었는지 적어 두면, 나중에 알아보기 쉬워요.

   ![캘린더 이름과 설명을 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041484643/original/iz5he2aAOvGRPnvYMbqM8aSrbNKlNjf3cg.png?1739376288)

3. 라운드 로빈 방식으로 예약을 배정받을 팀원을 한 명 이상 선택하세요.

   ![예약을 배정받을 팀원을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041484869/original/WafregsoVAPBerKYhGF0_Jf0uKHtFi7Z5A.png?1739376493)

4. **사용자 지정 URL**을 확인하세요. 캘린더 이름을 바탕으로 고유한 URL 주소가 자동으로 만들어져요. 필요하면 직접 수정할 수 있어요. 수정하면 사용할 수 있는 주소인지 확인해요. 이미 쓰고 있는 주소라면 안내 메시지가 나오니, 사용할 수 있는 주소가 될 때까지 고쳐 주세요.

   ![사용자 지정 URL을 확인하고 수정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041485231/original/nWi1ronf3urcKqDdyPxCHA2Mu64Ib_m80A.png?1739376814)

5. 미팅 시간과 예약 가능 시간을 설정하세요. 하이퍼클래스에서는 미팅 시간을 분 단위와 시간 단위로 설정할 수 있어요. 팀원별 선호나 회사 전체의 일정 정책에 맞춰 캘린더를 구성할 수 있고, 특정 날짜와 예외 일정도 지정할 수 있어요. 예약을 받을 수 있는 시간을 세밀하게 조정할 수 있어요.

   가용 시간을 설정하는 자세한 방법은 [캘린더 가용 시간 - 주간 근무 시간 및 특정 날짜 시간](../캘린더-만들기/calendar-availability-weekly-working-hours-date-specific-hours.md)을 참고하세요.

   ![미팅 시간과 예약 가능 시간을 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041486443/original/cWQ8bXHu38oMrFFrVY0aHz5oip6ikzS7Iw.png?1739377639)

6. 결제를 받으려면 **Accept Payments**(결제 받기) 탭에서 **결제 활성화**를 켜세요. 서비스나 상품에 결제가 필요하다면, 이렇게 해서 예약 과정에서 바로 결제를 받을 수 있어요.

   여러 통화를 선택할 수 있어서 다양한 통화로 결제를 받을 수 있어요. **Payment Information**(결제 정보) 섹션의 **Custom Description**(사용자 지정 설명)에 안내 문구를 추가하면, 고객이 예약을 마치기 전에 결제 조건, 가격 정보, 특별 안내 사항을 확인할 수 있어요.

   결제 설정의 자세한 방법은 [캘린더에서 결제 받기](../캘린더-설정/collecting-payments-in-calendars.md)를 참고하세요.

   ![결제 활성화와 결제 정보를 설정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041487283/original/6Db1jW9CQ6yCg_YDAJm3RkjsLNdxB9ES1g.png?1739378259)

7. 모든 설정을 마쳤다면 **저장**을 클릭해 라운드 로빈 캘린더를 만드세요.

   ![저장을 클릭해 라운드 로빈 캘린더를 만드는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041487667/original/ulEJ6ONGiZ3Ejx4e8VCmpRkHbF9n2YmjhA.png?1739378535)

{% hint style="info" %}
이제 캘린더를 미리보기로 확인할 수 있어요. 설정을 바꾸고 싶다면 캘린더로 이동해 캘린더 오른쪽의 점 3개를 클릭한 다음 **편집**을 클릭하세요.

![캘린더 오른쪽 점 3개 메뉴에서 편집을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041487927/original/LD3pY33tuVpR4Y9ylvFQTtKdbfenmgbEYg.png?1739378796)
{% endhint %}

## 하이퍼클래스 캘린더 추가 자료와 지원

하이퍼클래스에서 캘린더를 설정하고, 관리하고, 문제를 해결할 때 참고할 수 있는 문서예요. 라운드 로빈 예약 설정, 결제 받기, 예약 문제 해결, 캘린더 임베드까지 일정 관리에 도움이 돼요.

### 1. 캘린더 설정과 사용자 지정

- [라운드 로빈 캘린더의 예약 배정 로직](appointment-distribution-logic-for-round-robin-calendars.md) – 라운드 로빈이 가용 시간이나 균등 배분 기준으로 예약을 배정하는 방식을 알아봐요.
- [라운드 로빈 캘린더의 팀원 배정](managing-team-member-assignments-in-round-robin-calendars.md) – 예약에 팀원을 배정하는 방식과 일정 변경 시 선호 설정을 구성해요.
- [라운드 로빈 캘린더에서 직원 선택 설정하기](round-robin-calendar-staff-selection.md) – 예약하는 사람이 원하는 팀원을 직접 고르게 할 수 있어요.
- [연결 캘린더와 충돌 캘린더 설정하기](../setting-up-linked-calendars-conflict-calendars.md) – 하이퍼클래스를 Google, Outlook 같은 외부 캘린더와 동기화해 중복 예약을 막아요.

### 2. 캘린더 가용 시간과 일정

- [개별 캘린더의 가용 시간 설정 조정하기](../Calendar-Availability-Settings/adjusting-availability-settings-for-individual-calendars.md) – 근무 시간, 버퍼 시간, 예약 슬롯 길이를 설정해요.
- [캘린더 가용 시간 - 주간 근무 시간 및 특정 날짜 시간](../캘린더-만들기/calendar-availability-weekly-working-hours-date-specific-hours.md) – 요일과 시간을 골라 팀의 가용 시간을 설정해요.

### 3. 캘린더 결제 받기

- [캘린더에서 결제 받기](../캘린더-설정/collecting-payments-in-calendars.md) – 예약에 결제를 활성화하고, 결제 수단을 고르고, 가격 정보를 추가해요.

### 4. 캘린더 문제 해결과 관리

- [캘린더 문제 해결 도구](../트러블슈팅/troubleshooting-tool-for-calendar.md) – 예약을 막거나 일정 충돌을 일으키는 문제를 찾아 해결해요.
- [캘린더 그룹 비활성화](../deactivating-calendar-groups.md) – 기록은 유지하면서 캘린더 그룹을 비활성화하거나 제거해요.
- [하이퍼클래스 캘린더를 HTML 코드로 임베드하기](../embedding-hyperclass-calendars-using-html-code.md) – 웹사이트나 랜딩 페이지에 캘린더를 공유하고 임베드해 예약 접근성을 높여요.

## 자주 묻는 질문

### 가능한 팀원이 아무도 없으면 어떻게 되나요?
예약하는 사람에게 다른 날짜나 시간을 선택하라는 안내가 나와요.

### 라운드 로빈 대신 팀원에게 예약을 직접 배정할 수 있나요?
네, 예약 설정에서 자동 배정을 직접 바꿀 수 있어요.

### 특정 고객에게 특정 팀원을 우선 배정할 수 있나요?
아니요. 라운드 로빈은 현재 가용 시간 기준 또는 균등 배분 기준 설정만 지원해요.

### 고객이 예약할 때 결제를 받을 수 있나요?
네, **결제 활성화**를 켜면 고객이 서비스를 예약할 때 결제를 받을 수 있어요.
