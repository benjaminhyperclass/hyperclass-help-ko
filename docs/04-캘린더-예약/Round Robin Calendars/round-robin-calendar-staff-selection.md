---

번역일: 2026-04-07
카테고리: 04-캘린더-예약 > Round Robin Calendars
---

# 라운드 로빈 캘린더 스태프 선택

이 문서에서는 일정 예약의 유연성을 높여 고객이 특정 팀원을 선택해 예약할 수 있으면서도 라운드 로빈 예약 배정 시스템을 활용하는 방법을 설명합니다.

---

**목차**

- [라운드 로빈 스태프 선택 로직 이해하기](#라운드-로빈-스태프-선택-로직-이해하기)
- [스태프 선택 기능의 주요 장점](#스태프-선택-기능의-주요-장점)
- [스태프 선택 기능 활성화하는 방법](#스태프-선택-기능-활성화하는-방법)
  - [1단계: 캘린더 설정으로 이동](#1단계-캘린더-설정으로-이동)
  - [2단계: 캘린더 편집](#2단계-캘린더-편집)
  - [3단계: 스태프 선택 활성화](#3단계-스태프-선택-활성화)
- [라운드 로빈 선택을 위한 스태프 가용성 관리](#라운드-로빈-선택을-위한-스태프-가용성-관리)
- [고객 관점에서 예약 과정 테스트하기](#고객-관점에서-예약-과정-테스트하기)
- [자주 묻는 질문](#자주-묻는-질문)

---

## 라운드 로빈 스태프 선택 로직 이해하기

라운드 로빈 캘린더의 스태프 선택 기능을 사용하면 고객이 예약 시 원하는 팀원을 선택할 수 있습니다. 라운드 로빈 시스템은 예약을 가용한 팀원들에게 공정하게 배정합니다. **스태프 선택** 기능이 활성화되면:

- 고객이 특정 스태프를 선택할 수 있습니다.
- 선택하지 않은 경우, 시스템이 라운드 로빈 로직에 따라 가용한 스태프를 자동 배정합니다.
- 이 기능은 **Neo 위젯**에서만 작동하며, 현대적이고 사용자 친화적인 경험을 제공합니다.

---

## **스태프 선택 기능의 주요 장점**

- 사용자가 선호하는 스태프와 예약할 수 있도록 하여 **고객 경험을 개선**합니다.
- 공정한 예약 배정을 보장하여 효율성을 높입니다.
- 캘린더 설정과 완벽하게 통합되어 **일정 충돌을 줄입니다**.
- 최적화된 예약 경험을 위해 **Neo 위젯과 연동**됩니다.

---

## 스태프 선택 기능 활성화하는 방법

스태프 선택 기능을 사용하면 고객이 원하는 팀원을 선택해 예약할 수 있으면서도 라운드 로빈 일정 관리의 효율성을 유지할 수 있습니다. 이를 통해 비즈니스의 예약 과정을 개인화하여 고객 만족도를 높이고 스태프 간 업무 배분을 개선할 수 있습니다. 라운드 로빈 캘린더에서 스태프 선택 기능을 설정하려면 다음 단계를 따르세요:

### 1단계: 캘린더 설정으로 이동

- Hyperclass 계정에서 Settings(설정) → Calendars(캘린더)로 이동하여 스태프 선택을 활성화할 캘린더를 찾습니다.

![캘린더 설정으로 이동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042355976/original/JXyKo1WO3GOwXwWTtOEQq35jIflbn71hoA.gif?1740659740)

### 2단계: 캘린더 편집

- 수정하려는 캘린더 옆의 점 3개 메뉴를 클릭합니다.
- 드롭다운에서 **Edit(편집)**을 선택합니다.

![캘린더 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042356271/original/JX_vkU_9csFrxvSqyTuRBHXhsDoqGPQEeg.png?1740659892)

### 3단계: 스태프 선택 활성화

- **Customizations(사용자 정의)** 섹션에서 **Staff Selection(스태프 선택)** 옵션을 찾습니다.
- **Allow staff selection during booking(예약 시 스태프 선택 허용)** 토글을 켭니다.

![스태프 선택 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042356436/original/B0gfGT293iO3cOu7i_Y6cP1P9Ywsz4GUUQ.png?1740660004)

중요: 스태프 선택 토글은 캘린더 위젯 스타일이 NEO로 설정된 경우에만 활성화하거나 사용할 수 있습니다.

![NEO 위젯 필수](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042356781/original/V4cOvux9kWpiCF03J-RgpOBz8ZUEPBKEAA.png?1740660240)

---

## **라운드 로빈 선택을 위한 스태프 가용성 관리**

**스태프 선택** 기능이 효과적으로 작동하려면 각 스태프의 예약 가능 시간을 업데이트해야 합니다:

- Subaccount Settings(하위 계정 설정) → My Staff(내 스태프)로 이동합니다. 가용성을 업데이트하려는 스태프를 선택합니다.

![스태프 가용성 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042358015/original/DBzI9yH0okg30UwHq1Y83uw4BONaZwJhoQ.png?1740660957)

- **Actions(작업)** 탭에서 연필 아이콘(**Edit(편집)**)을 클릭합니다. **Working hours(근무 시간)**와 **Timezone(시간대)**를 조정하고 변경사항을 저장합니다.

![근무 시간 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042358548/original/_tcB-I6bONd-z185Oe8bbPs5bfB-a281Ww.png?1740661230)

기존 예약의 취소 및 일정 변경에 대해서는 [취소 및 일정 변경 정책 (예약 위젯)]([cancellation-reschedule-policy-booking-widget-](cancellation-reschedule-policy-booking-widget-.md))을 참고하세요.

---

## 고객 관점에서 예약 과정 테스트하기

고객이 예약 시스템과 어떻게 상호작용하는지 이해하는 것은 고객 경험을 최적화하는 데 필수적입니다. 고객 관점에서 예약 과정을 확인하면 스태프 선택이 올바르게 작동하는지 확인하고 문제가 발생하기 전에 해결할 수 있습니다.

- 캘린더 옆의 점 3개 메뉴를 클릭하고 드롭다운에서 **Share(공유)**를 클릭한 다음, **Scheduling Link(예약 링크)** 또는 **Permanent Link(영구 링크)**를 복사합니다.

![예약 링크 공유](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042360828/original/Dh5uun2p6fxYZIFijT2ZUwApQmPH1-7pag.gif?1740662490)

- 복사한 링크를 브라우저에서 엽니다. 예약 페이지에서 가용한 스태프 중 한 명을 선택하는 옵션이 표시됩니다.

![스태프 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042361049/original/NHvEXUMWMX3EOnQKnd-cjzTuUiwm0WULtg.png?1740662619)

---

## 자주 묻는 질문

**Q: 클래식 캘린더 위젯에서도 스태프 선택을 사용할 수 있나요?**
아니요, 스태프 선택은 Neo 위젯에서만 사용할 수 있습니다.

**Q: 고객이 스태프를 선택하지 않으면 어떻게 되나요?**
라운드 로빈 로직에 따라 가용한 스태프가 자동으로 배정됩니다.

**Q: 여러 캘린더에서 이 기능을 활성화할 수 있나요?**
네, 스태프 선택을 활성화하려는 각 캘린더에서 동일한 단계를 따르면 됩니다.

**Q: 이 설정이 예약 배정 방식에 영향을 주나요?**
네, 고객이 특정 스태프를 선택하면 기본 라운드 로빈 배정을 우선합니다.

---
*원문 최종 수정: Mon, 3 Mar, 2025 at 10:33 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*