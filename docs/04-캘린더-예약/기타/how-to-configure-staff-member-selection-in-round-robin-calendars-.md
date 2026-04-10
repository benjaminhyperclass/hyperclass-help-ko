---

번역일: 2026-04-09
카테고리: 캘린더
---

# 라운드 로빈 캘린더에서 직원 선택 설정하기

이 가이드에서는 직원 선택 기능이 예약 유연성을 어떻게 향상시키는지, 그리고 라운드 로빈 예약 분배 시스템을 활용하면서도 고객이 특정 팀원을 선택할 수 있게 하는 방법을 설명합니다.

---

## 라운드 로빈 직원 선택 로직 이해하기

라운드 로빈 캘린더의 직원 선택 기능을 사용하면 고객이 예약할 때 선호하는 직원을 선택할 수 있습니다. 라운드 로빈 시스템은 사용 가능한 팀원들 사이에 예약을 공정하게 분배합니다. 직원 선택 기능이 활성화되면:

- 고객이 특정 직원을 선택할 수 있습니다.
- 선택하지 않으면 라운드 로빈 로직에 따라 시스템이 사용 가능한 직원을 자동 배정합니다.
- 이 기능은 **Neo 위젯**에서만 작동하여 최신의 사용자 친화적인 경험을 보장합니다.

---

## 직원 선택 기능의 주요 장점

- 고객이 선호하는 직원과 예약할 수 있게 하여 **고객 경험을 향상**시킵니다.
- 공정한 예약 분배를 보장하여 효율성을 높입니다.
- 캘린더 설정과 원활하게 통합되어 **예약 충돌을 줄입니다**.
- 최적화된 예약 경험을 위해 **Neo 위젯과 호환**됩니다.

---

## 직원 선택 기능 활성화하기

직원 선택 기능은 라운드 로빈 예약의 효율성을 유지하면서도 고객이 선호하는 팀원과 예약할 수 있는 옵션을 제공합니다. 이를 통해 비즈니스는 예약 프로세스를 개인화하여 고객 만족도를 높이고 직원 간 업무량 분배를 개선할 수 있습니다. 라운드 로빈 캘린더에서 직원 선택 기능을 설정하려면 다음 단계를 따르세요:

### 1단계: 캘린더 설정으로 이동

- Hyperclass 계정에서 Settings(설정) → Calendars(캘린더)로 이동한 후, 직원 선택 기능을 활성화하려는 캘린더를 찾습니다.

![캘린더 설정 이동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042355976/original/JXyKo1WO3GOwXwWTtOEQq35jIflbn71hoA.gif?1740659740)

### 2단계: 캘린더 편집

- 수정하려는 캘린더 옆의 점 3개 메뉴를 클릭합니다.
- 드롭다운에서 **Edit(편집)**를 선택합니다.

![캘린더 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042356271/original/JX_vkU_9csFrxvSqyTuRBHXhsDoqGPQEeg.png?1740659892)

### 3단계: 직원 선택 활성화

- **Customizations(커스터마이제이션)** 섹션에서 **Staff Selection(직원 선택)** 옵션을 찾습니다.
- **Allow staff selection during booking(예약 시 직원 선택 허용)** 토글을 켭니다.

![직원 선택 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042356436/original/B0gfGT293iO3cOu7i_Y6cP1P9Ywsz4GUUQ.png?1740660004)

**중요**: 직원 선택 활성화 토글은 캘린더 위젯 스타일이 NEO로 설정된 경우에만 사용할 수 있습니다.

![NEO 위젯 요구사항](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042356781/original/V4cOvux9kWpiCF03J-RgpOBz8ZUEPBKEAA.png?1740660240)

---

## 라운드 로빈 선택을 위한 직원 예약 가능 시간 관리

**직원 선택** 기능이 효과적으로 작동하려면 각 직원의 예약 가능 시간이 업데이트되어야 합니다:

- Settings(설정) → My Staff(내 직원)로 이동합니다. 예약 가능 시간을 업데이트하려는 직원을 선택합니다.

![직원 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042358015/original/DBzI9yH0okg30UwHq1Y83uw4BONaZwJhoQ.png?1740660957)

- **Actions(작업)** 탭에서 연필 아이콘(**Edit(편집)**)을 클릭합니다. **근무시간**과 **시간대**를 조정한 후 변경사항을 저장합니다.

![직원 예약 가능 시간 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042358548/original/_tcB-I6bONd-z185Oe8bbPs5bfB-a281Ww.png?1740661230)

기존 예약의 취소 및 일정 변경에 대한 자세한 내용은 [취소 및 일정 변경 정책(예약 위젯)](cancellation-reschedule-policy-booking-widget-.md)을 참고하세요.

---

## 고객 관점에서 예약 플로우 테스트하기

고객이 예약 시스템과 어떻게 상호작용하는지 이해하는 것은 고객 경험을 최적화하는 데 필수적입니다. 클라이언트 관점에서 예약 프로세스를 확인함으로써 직원 선택이 올바르게 작동하는지 확인하고 문제가 발생하기 전에 미리 해결할 수 있습니다.

- 캘린더 옆의 점 3개 메뉴를 클릭하고 드롭다운에서 **Share(공유)**를 클릭한 후 **Scheduling Link(예약 링크)** 또는 **Permanent Link(영구 링크)**를 복사합니다.

![예약 링크 공유](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042360828/original/Dh5uun2p6fxYZIFijT2ZUwApQmPH1-7pag.gif?1740662490)

- 복사한 링크를 브라우저에서 엽니다. 예약 페이지에서 사용 가능한 직원 중 한 명을 선택하는 옵션이 표시됩니다.

![고객 예약 페이지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042361049/original/NHvEXUMWMX3EOnQKnd-cjzTuUiwm0WULtg.png?1740662619)

---

## 자주 묻는 질문

**Q: Classic 캘린더 위젯에서도 직원 선택을 사용할 수 있나요?**
A: 아니요, 직원 선택은 Neo 위젯에서만 사용할 수 있습니다.

**Q: 고객이 직원을 선택하지 않으면 어떻게 되나요?**
A: 라운드 로빈 로직이 자동으로 사용 가능한 직원을 배정합니다.

**Q: 여러 캘린더에서 이 기능을 활성화할 수 있나요?**
A: 네, 직원 선택을 활성화하려는 각 캘린더에 대해 같은 단계를 반복하면 됩니다.

**Q: 이 설정이 예약 배정 방식에 영향을 주나요?**
A: 네, 고객이 특정 직원을 선택하면 기본 라운드 로빈 배정 방식을 무시합니다.

---
*원문 최종 수정: Mon, 3 Mar, 2025 at 10:33 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*