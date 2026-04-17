---

번역일: 2026-04-06
카테고리: 04-캘린더-예약 > Round Robin Calendars
---

# 라운드 로빈 캘린더: 설정, 배분 및 예약 가능 시간 완전 가이드

라운드 로빈 캘린더(Round Robin Calendars)는 여러 팀원에게 예약을 고르게 배분하는 기능입니다. 이 기능을 통해 **효율적이고 공정하며 최적화된** 일정 관리를 예약 가능 시간이나 업무량 균형에 따라 할 수 있습니다. 이 가이드에서는 **라운드 로빈 캘린더** 설정, **배분 설정** 구성, **팀원 배정** 커스터마이징 단계를 안내해드리겠습니다.

---

**목차**

- [라운드 로빈 캘린더란? 어떻게 작동하나요?](#라운드-로빈-캘린더란-어떻게-작동하나요)
- [라운드 로빈 캘린더를 왜 사용하나요?](#라운드-로빈-캘린더를-왜-사용하나요)
- [라운드 로빈 캘린더 만들기](#라운드-로빈-캘린더-만들기)
- [하이퍼클래스 캘린더 추가 자료 및 지원](#하이퍼클래스-캘린더-추가-자료-및-지원)
- [자주 묻는 질문](#자주-묻는-질문)
---

## 라운드 로빈 캘린더란? 어떻게 작동하나요?

**라운드 로빈 캘린더**는 배정된 팀원들에게 예약을 자동으로 배분하는 일정 관리 시스템입니다. **공정한 업무 배분**을 보장하고 요청된 시간에 어느 팀원이 예약 가능한지 자동으로 확인하여 **예약 가능 시간을 최적화**합니다. **라운드 로빈 캘린더**의 주요 특징:

- 설정 시 **최소 한 명의 팀원**이 라운드 로빈 캘린더에 배정되어야 합니다.

- 고객이 **예약을 요청**하면, 시스템이 먼저 **첫 번째 배정된 팀원의 예약 가능 여부**를 확인합니다.

- 첫 번째 팀원이 **예약 불가능**하면, 자동으로 **다음 팀원**으로 넘어갑니다.

- 이 과정은 **예약 가능한 팀원**을 찾을 때까지 계속됩니다.

- 선택된 시간에 **예약 가능한 팀원이 없으면**, 시스템이 **고객이 빈 슬롯을 예약하지 못하도록 방지**하여 유효한 예약 옵션만 보이도록 합니다.

**핵심 장점:** 고객은 팀원이 실제로 예약 가능할 때만 예약할 수 있어 일정 충돌을 없애고 수동 개입을 줄입니다.

### 슬롯 용량 계산 방법

라운드 로빈 캘린더가 슬롯당 여러 예약을 허용한다면, 예약 가능 여부는 슬롯 용량 한도로 결정됩니다. 확정된 예약 하나당 슬롯 용량이 1씩 감소합니다. 예약이 여러 시간 슬롯과 겹치면, 시스템이 영향받은 각 슬롯의 예약 가능 수를 1씩 줄입니다. 슬롯은 정의된 용량 한도에 완전히 도달했을 때만 차단됩니다. 이제 겹치는 예약이 영향받은 모든 슬롯을 조기에 완전 차단하지 않습니다.

---

## 라운드 로빈 캘린더를 왜 사용하나요?

라운드 로빈 캘린더는 **예약을 공유**하거나 **고객 상호작용을 함께 처리**하는 팀에게 특히 여러 장점을 제공합니다. 주요 장점은 다음과 같습니다:

- 효율적인 일정 관리 – 예약 배정을 자동화하여 시간을 절약하고 수동 작업을 줄입니다.

- 균형잡힌 업무량 – 예약을 고르게 배분하여 특정 팀원이 과부하되는 것을 방지합니다.

- 더 빠른 응답 시간 – **다음으로 예약 가능한** 팀원이 배정되어 고객 경험을 개선합니다.

- 고객을 위한 유연성 – 고객이 **예약 가능한 모든 슬롯**을 선택할 수 있어 일정 조정이 편리합니다.

- 성장하는 팀에 이상적 – 성장하는 비즈니스가 병목 현상 없이 대량의 예약을 관리할 수 있도록 도움을 줍니다.

---

## 라운드 로빈 캘린더 만들기

라운드 로빈 캘린더를 만들면 예약 가능한 팀원들에게 예약이 자동으로 배분됩니다. 이 과정에는 캘린더 유형 선택, 예약 배분 로직 구성, 최소 한 명의 팀원 배정이 포함됩니다.

**1단계**: 하이퍼클래스에서 Settings(설정) → Calendars(캘린더)로 이동하고, Create Calendar(캘린더 만들기)를 클릭한 후 캘린더 유형으로 **Round Robin(라운드 로빈)**을 선택합니다.

![라운드 로빈 캘린더 생성 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041483729/original/snsUAoeI0jXrawvKNPCS0U_HWtTPkjxQTA.gif?1739375415)

하위 계정에서 Calendars(캘린더) 탭을 클릭하고, Calendar Settings(캘린더 설정)을 클릭한 다음 Create Calendar(캘린더 만들기)를 클릭하여 캘린더 유형으로 라운드 로빈을 선택할 수도 있습니다.

![캘린더 설정에서 라운드 로빈 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041483845/original/rKM8KM6Iq9udR3tBzWCRL9tg2w_LN5-DKg.gif?1739375508)

**2단계: 캘린더 이름 및 설명:** 여기서 캘린더에 이름을 지정하고 필요에 따라 설명을 추가할 수 있습니다. 설명은 캘린더의 목적을 명확히 하여 의도된 용도나 만든 이유를 기억하기 쉽게 도와줍니다.

![캘린더 이름 및 설명 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041484643/original/iz5he2aAOvGRPnvYMbqM8aSrbNKlNjf3cg.png?1739376288)

**3단계: 팀원 선택:** 라운드 로빈 일정 시스템을 통해 예약이 배정될 팀원을 한 명 이상 선택합니다.

![팀원 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041484869/original/WafregsoVAPBerKYhGF0_Jf0uKHtFi7Z5A.png?1739376493)

**4단계: 커스텀 URL:** 캘린더 이름을 기반으로 고유한 URL 슬러그가 자동 생성됩니다. 필요시 수동으로 편집할 수 있습니다. 편집하면 시스템이 URL 사용 가능 여부를 확인합니다. URL이 이미 사용 중이라면 메시지가 표시되고, 사용 가능한 것을 찾을 때까지 수정할 수 있습니다.

![커스텀 URL 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041485231/original/nWi1ronf3urcKqDdyPxCHA2Mu64Ib_m80A.png?1739376814)

**5단계: 미팅 시간 및 예약 가능 시간:** 하이퍼클래스는 비즈니스 요구에 따라 유연성을 보장하기 위해 **분과 시간 단위로 미팅 시간을 커스터마이징**할 수 있게 해줍니다. **팀원 선호도**나 **회사 전체 일정 정책**에 따라 캘린더를 설정할 수 있습니다. **특정 날짜와 예외사항**을 구성하여 예약 가능한 시간을 정확하게 제어할 수 있습니다.

예약 가능 시간 커스터마이징에 대한 자세한 단계는 [캘린더 예약 가능 시간 - 주간 근무 시간 및 특정 날짜 시간](../캘린더-만들기/calendar-availability-weekly-working-hours-date-specific-hours.md)을 참조하세요.

![미팅 시간 및 예약 가능 시간 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041486443/original/cWQ8bXHu38oMrFFrVY0aHz5oip6ikzS7Iw.png?1739377639)

**6단계: 결제 수신:** Accept Payments(결제 수신) 탭에서 캘린더를 통해 직접 결제를 활성화할 수 있습니다. 서비스나 상품에 결제가 필요하다면, 이 옵션을 토글하여 예약 과정에서 원활하게 결제를 받을 수 있습니다.

하이퍼클래스는 **다중 통화 지원**으로 다양한 통화 옵션도 제공합니다. Payment Information(결제 정보) 섹션 아래에 **커스텀 설명**을 추가할 수 있습니다. 이는 고객이 예약을 완료하기 전에 결제 조건, 가격 세부사항 또는 특별 지침을 이해하는 데 도움이 됩니다.

결제 수신 커스터마이징에 대한 자세한 단계는 [캘린더에서 결제 수집하기](../캘린더-설정/collecting-payments-in-calendars.md)를 참조하세요.

![결제 수신 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041487283/original/6Db1jW9CQ6yCg_YDAJm3RkjsLNdxB9ES1g.png?1739378259)

**7단계: 캘린더 저장:** 모든 설정을 커스터마이징했다면, **Save(저장)**을 클릭하여 **라운드 로빈 캘린더**를 **생성**합니다.

![캘린더 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041487667/original/ulEJ6ONGiZ3Ejx4e8VCmpRkHbF9n2YmjhA.png?1739378535)

이제 캘린더를 미리보거나, 일부 설정을 다시 조정하고 싶다면 Calendars(캘린더) → 캘린더 우측의 점 3개 클릭 → Edit(편집)으로 이동하세요.

![캘린더 편집 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041487927/original/LD3pY33tuVpR4Y9ylvFQTtKdbfenmgbEYg.png?1739378796)

---

## 하이퍼클래스 캘린더 추가 자료 및 지원

이 자료들은 **하이퍼클래스에서 캘린더 설정, 관리, 문제 해결에 대한 포괄적인 지원**을 제공합니다. **라운드 로빈 예약 구성, 결제 수집, 예약 문제 해결, 캘린더 삽입** 등 어떤 작업을 하든, 이 가이드들이 일정 관리를 최적화하는 데 도움이 될 것입니다.

### 1. 캘린더 설정 및 커스터마이징

- **[라운드 로빈 캘린더 예약 배분 로직](../기타/round-robin-calendars-appointment-distribution-logic.md)** – 라운드 로빈이 예약 가능 여부나 균등 배분에 따라 예약을 일정하는 방법을 알아보세요.

- [라운드 로빈 캘린더에서 팀원 배정](../기타/team-member-assignment-round-robin-calendar-.md) – 팀원이 예약에 배정되는 방법과 일정 변경 선호도를 구성하세요.

- [라운드 로빈 캘린더에서 직원 선택 구성하는 방법](../기타/how-to-configure-staff-member-selection-in-round-robin-calendars-.md) – 예약 시 초대받는 사람이 선호하는 팀원을 선택할 수 있도록 설정하세요.

- [연결된 캘린더 및 충돌 캘린더 설정](../setting-up-linked-calendars-conflict-calendars.md) – 하이퍼클래스를 Google이나 Outlook 같은 외부 캘린더와 동기화하여 이중 예약을 방지하세요.

### 2. 캘린더 예약 가능 시간 및 일정 관리

- **[개별 캘린더의 예약 가능 시간 설정 조정](../Calendar-Availability-Settings/adjusting-availability-settings-for-individual-calendars.md)** – 근무 시간, 버퍼 시간, 예약 슬롯 시간을 설정하세요.

- [캘린더 예약 가능 시간 - 주간 근무 시간 및 특정 날짜 시간](../캘린더-만들기/calendar-availability-weekly-working-hours-date-specific-hours.md) – 특정 요일과 시간을 선택하여 팀 예약 가능 시간을 커스터마이징하세요.

### 3. 캘린더에서 결제 수집

- **[캘린더에서 결제 수집하기](../캘린더-설정/collecting-payments-in-calendars.md)** – 예약에 대한 결제를 활성화하고, 결제 게이트웨이를 선택하고, 가격 세부사항을 추가하세요.

### 4. 캘린더 문제 해결 및 관리

- **[캘린더 문제 해결 도구](../트러블슈팅/troubleshooting-tool-for-calendar.md)** – 예약을 방해하거나 일정 충돌을 일으키는 문제를 식별하고 해결하세요.

- [캘린더 그룹 비활성화](../deactivating-calendar-groups.md) – 기록을 유지하면서 캘린더 그룹을 비활성화하거나 제거하세요.

- [HTML 코드를 사용하여 하이퍼클래스 캘린더 삽입하기](../embedding-highlevel-calendars-using-html-code.md) – 더 쉬운 예약 접근을 위해 웹사이트나 랜딩 페이지에 캘린더를 공유하고 삽입하세요.

---

## 자주 묻는 질문

**Q. 예약 가능한 팀원이 없으면 어떻게 되나요?**
초대받는 사람에게 다른 날짜/시간을 선택하라는 안내가 표시됩니다.

**Q. 라운드 로빈을 사용하는 대신 수동으로 팀원에게 예약을 배정할 수 있나요?**
네, 예약 설정에서 자동 배정을 재정의할 수 있습니다.

**Q. 특정 고객에 대해 특정 팀원을 우선시할 수 있나요?**
아니요, 라운드 로빈은 현재 **예약 가능 여부 기반 또는 균등 배분 설정**만 지원합니다.

**Q. 고객이 예약할 때 요금을 청구할 수 있나요?**
네, **Accept Payments(결제 수신)**를 활성화하여 고객이 서비스를 예약할 때 결제를 요구할 수 있습니다.

---
*원문 최종 수정: 2026-03-16*
*Hyperclass 사용 가이드 — hyperclass.ai*