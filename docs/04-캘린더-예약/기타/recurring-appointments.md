---

번역일: 2026-04-09
카테고리: 캘린더
---

# 반복 예약

**목차**

- [개요](#개요)
- [캘린더에서 반복 예약 설정하기](#캘린더에서-반복-예약-설정하기)
- [반복 설정](#반복-설정)
- [예약 불가 슬롯 처리](#예약-불가-슬롯-처리)
- [앱 내 예약 모달을 통한 반복 예약 생성](#앱-내-예약-모달을-통한-반복-예약-생성)
- [반복 예약 생성 단계](#반복-예약-생성-단계)
- [제한 사항](#제한-사항)
---

### **개요**

반복 예약은 설정된 반복 규칙에 따라 자동으로 반복되는 예약입니다. 반복 예약을 생성하는 방법은 두 가지가 있습니다:

- 캘린더 설정에서 반복 설정
- 예약 모달에서 커스텀 반복 설정

**캘린더 설정에서 반복 설정:**

- 캘린더 설정에서 반복 규칙을 구성합니다. 이 설정은 고객이 예약 위젯이나 예약 링크를 통해 예약하거나, 앱 내 예약 모달의 **기본** 날짜 및 시간 탭을 사용하여 예약을 생성할 때 적용됩니다.

![캘린더 설정에서 반복 예약 구성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035029663/original/EsLyXsQ2QY96XF7EB4bRDgQfZho1scaENQ.png?1729405622)

**예약 모달에서 커스텀 반복:**

- 앱 내 예약 모달의 **커스텀** 날짜 및 시간 탭을 사용하여 예약을 생성할 때, 해당 예약 시리즈에 대한 특정 반복 규칙을 설정할 수 있습니다. 이 커스텀 반복은 캘린더 구성을 무시하고 적용됩니다.

**참고**: 커스텀 반복 규칙이 있는 예약의 경우, 예약 가능 시간이 고려되지 않습니다. 시스템은 실제 예약 가능 여부와 상관없이 설정한 반복 규칙에 따라 슬롯을 예약합니다.

![커스텀 반복 예약 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035029707/original/ClkD0nRh1zFkwtDV894oh7N6YPn6Sn1dpw.png?1729405798)

---

### **캘린더에서 반복 예약 설정하기**

1. **캘린더 설정으로 이동**: `Calendar(캘린더) → Settings(설정)`으로 이동하여 구성하려는 캘린더를 선택합니다.

![캘린더 설정 접근](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035029750/original/BgwCRFkYMYOX-_ehd4l4cbCds2qpvj6Q0Q.png?1729405902)

2. **기본 설정 확인**: 날짜별 시간이 추가되지 않았고, 캘린더에 팀원이 한 명만 할당되었는지 확인합니다.

3. **반복 미팅 활성화**: `Availability(예약 가능 시간)` 탭으로 이동하여 `Recurring Meeting(반복 미팅)`을 켭니다.

![반복 미팅 토글 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035029817/original/YdbUdRZfotW5SNlJRqXQeHsDmaIIpU3v5A.png?1729405972)

4. **반복 설정 구성**: 필요에 따라 반복 설정을 조정하고 `Save(저장)`을 클릭합니다.

---

### **반복 설정**

- **Repeat(반복)**: 반복 빈도를 선택합니다 (매일, 매주, 매월, 커스텀).

- **Times to Repeat(반복 횟수)**: 반복 예약이 몇 번 발생해야 하는지 지정합니다. 예시:
  - **매일**: 지정된 횟수만큼 매일 반복
  - **매주**: 지정된 횟수만큼 같은 요일에 매주 반복
  - **매월**: 지정된 횟수만큼 같은 날짜에 매월 반복
  - **커스텀**: 커스텀 반복 패턴 허용

**참고**: 최대 반복 횟수는 **24회**입니다. 이 설정은 예약 위젯이나 앱 내 예약 모달의 **기본** 날짜 및 시간 설정을 통해 예약이 이루어질 때 적용됩니다.

---

### 예약 불가 슬롯 처리

- **Skip Booking Unavailable Slots(예약 불가 슬롯 건너뛰기)**:
  예약 불가 슬롯은 건너뛰고 예약 가능한 슬롯만 예약됩니다. 예를 들어, 10개의 예약이 필요하고 3개 슬롯이 예약 불가라면, 7개의 예약만 생성됩니다.

- **Continue Booking(계속 예약하기)**:
  슬롯이 예약 불가 상태여도 예약이 생성됩니다. 이렇게 겹치는 슬롯의 상태를 확정 또는 미확정 중 어느 것으로 할지 결정할 수 있습니다.

- **Book Next Available Slot(다음 예약 가능 슬롯 예약)**:
  예약 불가 슬롯은 건너뛰고, 시스템이 반복 규칙을 충족하기 위해 다음 예약 가능한 슬롯을 찾습니다. 예를 들어, 10개의 예약이 필요하고 3개 슬롯이 예약 불가라면, 시스템이 3개의 추가 예약 가능 슬롯을 찾아 총 10개의 예약을 생성합니다. 즉, 중간의 예약 불가 슬롯은 건너뛰고 다음 예약 가능한 슬롯이 예약됩니다.

- **참고**: **연속된 3개 슬롯**이 **예약 불가**인 경우, 시스템은 더 이상 예약 가능한 슬롯을 찾지 않습니다.

![예약 불가 슬롯 처리 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035029965/original/kp8wNMsMVNPlLrXbBvvgqVvo5npO8l7oMA.png?1729406316)

---

### 앱 내 예약 모달을 통한 반복 예약 생성

앱 내 예약 모달에서 반복 예약을 설정하는 방법은 두 가지가 있습니다:

1. **Default(기본) 탭 사용**:
   이 탭은 캘린더에서 이미 구성된 반복 설정을 따릅니다. 캘린더가 반복 예약으로 설정되어 있다면 사용 가능한 반복 슬롯을 표시하고, 일반 캘린더라면 단일 슬롯만 표시됩니다.

![기본 탭에서의 반복 예약](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035030186/original/lUX-9YlldQr5S41p98UckTOEMspIzsOiMg.png?1729406964)

![기본 탭 반복 슬롯 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035030202/original/eBXCLidln886C7GKykNpFMj4U0ff6knsqQ.png?1729406981)

![기본 탭 최종 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035030207/original/l950N6__VK_qgvo70bhiPCEhohxApq5LCQ.png?1729407014)

2. **Custom(커스텀) 탭 사용**:

- 이 탭을 사용하면 생성하는 예약에 대해 특별한 커스텀 반복 규칙을 정의할 수 있습니다. 이 커스텀 규칙은 해당 예약 시리즈에만 적용되며 다른 예약이나 캘린더 설정에는 영향을 주지 않습니다.
- 캘린더에 반복 설정이 되어 있든 없든 상관없이, 앱 내 예약 모달에서 직접 커스텀 반복을 생성할 수 있습니다 (수업 예약 및 서비스 캘린더는 지원하지 않음).

**참고**: 커스텀 반복 예약은 모든 기본 규칙과 예약 가능성 확인을 무시합니다.

#### 참고: 커스텀 반복과 일괄 편집/삭제 기능은 앱 내 예약 모달을 통해 생성된 커스텀 예약에서만 사용할 수 있습니다.

#### 반복 예약 생성 단계

1. **새 예약 생성**:

- `Create New Appointment(새 예약 생성)`로 이동하여 캘린더, 팀원, 연락처를 선택합니다.

![새 예약 생성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035030440/original/_7iWfl8WqbKgePngfJueXEGTgvnDqyrDUg.png?1729407865)

2. **반복 구성**:

- `Date and Time(날짜 및 시간)` 섹션으로 이동하여 **Custom(커스텀)**을 선택합니다.
- `Recurring Event(반복 이벤트)` 체크박스를 선택합니다.
- 드롭다운에서 반복 패턴을 선택하거나 `Custom(커스텀)`을 클릭하여 특정 반복 규칙을 정의합니다.

![커스텀 반복 이벤트 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035030572/original/cBOWqwp0pCCP02PHARyOC-Z43kTIYEl-ag.png?1729408425)

3. **반복 종료 설정**:

- 반복 예약이 언제 끝날지 결정합니다:
  - **Never(무기한)**: 반복이 무한히 계속됩니다.
  - **On a Specific Date(특정 날짜에)**: 반복 종료 날짜를 설정합니다.
  - **After X Number of Occurrences(X회 발생 후)**: 몇 번의 반복 후 종료할지 지정합니다.

![반복 종료 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035030595/original/E4iE9YV2WY7sxE4tfDXHm1t2Gs-jkutzZQ.png?1729408468)

4. **저장 및 생성**:

- 필요에 따라 설정을 구성하고 `Create Appointment(예약 생성)`을 클릭하여 예약을 생성합니다.

지정된 규칙에 따라 커스텀 반복 예약이 설정되었습니다.

---

이 설정으로 모든 반복 인스턴스가 단일 예약에 연결됩니다. 다음 중에서 선택할 수 있습니다:

- **Edit or Delete All Occurrences(모든 발생 편집 또는 삭제)**: 반복 예약의 모든 인스턴스를 수정하거나 제거합니다.
- **Edit or Delete a Specific Occurrence(특정 발생 편집 또는 삭제)**: 반복 예약의 특정 인스턴스만 변경하거나 삭제합니다.
- **Edit or Delete Future Occurrences(향후 발생 편집 또는 삭제)**: 과거 발생은 그대로 두고 향후 인스턴스만 조정하거나 제거합니다.

![반복 예약 편집 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035030886/original/x0CFmQ6S6mPY_Bcwj7xc-ykNteLSDJxzxg.png?1729409649)

---

### **제한 사항**

- 앱 내 예약 모달을 사용하여 커스텀 반복 예약을 생성할 때, 시리즈의 첫 번째 예약만 다음 화면에 표시됩니다: 예약 목록 보기, 연락처 탭, 대화 탭. 반복 시리즈의 후속 예약들은 이러한 섹션에 개별적으로 표시되지 않습니다.
- 워크플로우는 현재 시리즈의 첫 번째 커스텀 반복 예약에만 트리거됩니다. 시리즈의 후속 커스텀 반복 예약들은 워크플로우 트리거를 지원하지 않습니다.
- 현재 커스텀 반복 예약에 대한 캘린더 알림은 전송되지 않습니다.
- 서비스 및 수업 예약 캘린더는 커스텀 반복 예약을 지원하지 않습니다.
- 취소/일정 변경 링크나 연락처/대화 탭을 통해 커스텀 반복 예약을 취소하거나 일정을 변경하면 전체 시리즈에 영향을 줍니다.
- 전체 예약 시리즈에 대해 하나의 미팅 링크(Zoom, Google Meet, Microsoft Teams)만 생성됩니다.
- **Outlook 동기화 제한사항**:
  - 시스템에서 생성되어 Outlook에 동기화된 예약은 Outlook에서 변경 사항이 있어도 다시 동기화되지 않습니다.
  - 시스템에서 예약을 자주 삭제하면 Outlook과의 동기화 경험에 영향을 줄 수 있습니다.

---
*원문 최종 수정: 2025-10-24*
*Hyperclass 사용 가이드 — hyperclass.ai*