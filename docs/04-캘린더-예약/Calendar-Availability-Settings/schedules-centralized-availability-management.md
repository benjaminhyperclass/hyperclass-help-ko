---

번역일: 2026-04-07
카테고리: 04-캘린더-예약 > Calendar Availability Settings
---

# 스케줄 - 중앙 집중식 예약 가능 시간 관리

스케줄은 Hyperclass의 모든 사용자의 캘린더 예약 가능 시간을 중앙에서 관리할 수 있는 재사용 가능한 방법을 제공합니다. 시간을 한 번 설정하고 어디든 적용할 수 있어 시간을 절약하고 오류를 줄이며 일관된 예약 경험을 유지할 수 있습니다.

---

## 스케줄이란?

스케줄은 주간 근무 시간, 특정 날짜 예외 설정, 직원별 시간대 설정을 하나의 재사용 가능한 객체로 결합한 공유 예약 가능 시간 템플릿입니다. 각 캘린더를 개별적으로 편집하는 대신, 해당 시간을 따라야 하는 모든 캘린더에 스케줄을 연결하여 진정한 중앙 집중식 예약 가능 시간 관리를 구현합니다.

이 기능은 현재 **Labs**를 통해 사용할 수 있습니다. `Agency Settings(에이전시 설정) > Labs > Sub-Account`로 이동하여 `Calendars - Schedules`를 활성화하세요.

참고: **스케줄**과 **커스텀 스케줄**은 다릅니다. 스케줄은 중앙에서 관리되지만, 커스텀 스케줄은 특정 캘린더에서만 스케줄을 편집한 것으로 해당 캘린더에서만 관리됩니다.

---

## 스케줄의 주요 장점

- 모든 사용자의 시간을 한 곳에서 관리 — 더 이상 캘린더별로 편집할 필요 없음
- 여러 캘린더나 서비스에서 동일한 스케줄 재사용 가능
- 모든 신규 사용자에게 즉시 예약 가능한 기본 스케줄 제공
- 유연성 유지: 개별 캘린더가 특별한 시간이 필요한 경우 일회성 커스텀 스케줄 생성
- 기존 예약 가능 시간 자동 마이그레이션으로 다운타임이나 재작업 없음

각 사용자는 여러 개의 스케줄을 가질 수 있습니다.
각 캘린더는 한 번에 사용자당 하나의 스케줄을 가질 수 있습니다.

---

## 스케줄 접근하기

**모든 스케줄**에 접근하려면 `Calendars(캘린더) > Calendar Settings(캘린더 설정) > Availability(예약 가능 시간)` 또는 `Settings(설정) > Calendars(캘린더) > Availability(예약 가능 시간)`로 이동하세요.

![모든 스케줄 접근하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056003084/original/Tr3M_p69Qidf5zhYx1GP2QViCmxEguCSuQ.png?1760488059)

**개별** 사용자는 `Settings(설정) > My Profile(내 프로필)`로 이동한 후 아래로 스크롤하여 Schedules(스케줄)에서 자신의 스케줄을 관리할 수 있습니다.

![개인 스케줄 관리](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056003103/original/QnRDaMU1mL5SsLW7wwWWYSdm9qhHlCVBBw.png?1760488178)

관리자는 `Settings(설정) > My Staff(직원 관리)`로 이동하여 특정 사용자 옆의 편집 연필 아이콘을 클릭한 후 `User Availability(사용자 예약 가능 시간)`에서 **특정 개인의 스케줄**을 관리할 수 있습니다.

![직원 스케줄 관리](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056003128/original/abVXmTA9oiKtiqeNWUccWCIHTEb3VsiNCQ.png?1760488353)

![사용자 예약 가능 시간](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056003135/original/2yZCPdE34OJjzvKnEzM8InR26qTgkJKcOA.png?1760488409)

## 사용자 선택

사용자 드롭다운을 통해 예약 가능 시간을 관리하고자 하는 직원을 선택하세요.

![사용자 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056003153/original/rgYJzIrZQuRvAqITQXZ9xfcKIkDXxDWVAw.png?1760488526)

---

## 새 스케줄 생성

- `Create Schedule(스케줄 생성)` 클릭 > **이름** 입력 > `Create(생성)` 클릭

![새 스케줄 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056003272/original/1Ae3mER3dxJUoQCh0Kx_lPu2kKSbafYXAw.png?1760489002)

- 스케줄 구성:
  - **주간 근무 시간** — 캘린더에 예약 가능 시간이 표시되는 근무 요일과 시간 설정
  - **시간대** — 스케줄의 예약 가능 시간이 저장되고 평가되는 시간대 설정
  - **특정 날짜 예외** — 특정 날짜의 예약 가능/불가능을 표시하여 주간 근무 시간을 재정의
  - `Active On` 드롭다운을 사용하여 선택한 직원에 대해 이 스케줄이 적용될 캘린더를 선택
  - 스케줄을 **저장**

여러 스케줄(예: 상담, 데모, 현장 방문 등)을 생성하고 다양한 캘린더에 할당할 수 있습니다.

## 스케줄 편집

스케줄 목록에서 다음 작업으로 기존 스케줄을 관리할 수 있습니다:

- **기본값으로 설정**: (압핀) 기본 스케줄은 새 캘린더에 직원이 추가될 때 자동으로 적용됩니다. 이를 통해 직원은 수동 할당 없이도 즉시 예약 가능 시간이 설정됩니다. "기본값으로 설정" 아이콘을 클릭하여 모든 스케줄을 기본값으로 설정할 수 있습니다.

![기본값으로 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056003301/original/oLcX7x8ZnIFrha0S5J-ppEMZtGNq1Hel6w.png?1760489129)

- **이름 변경**: (연필) 명확성을 위해 스케줄 이름 업데이트
- **복제**: (종이) 기존 스케줄을 복사하여 처음부터 시작하지 않고도 빠르게 변형 생성
- **삭제**: (휴지통) 스케줄 제거 (현재 어떤 캘린더에서도 활성화되지 않은 경우에만 가능)

---

## 스케줄 편집 - 캘린더 연결

`Calendars(캘린더) > Calendar Settings(캘린더 설정) > Edit Calendar(캘린더 편집, 캘린더 목록에서) > Availability(예약 가능 시간)` 탭으로 이동하여 특정 캘린더의 스케줄을 관리할 수도 있습니다.

- 캘린더를 다른 스케줄을 사용하도록 전환
- 해당 캘린더용 커스텀 스케줄 생성 및 사용

스케줄에 대한 모든 업데이트는 연결된 모든 캘린더에 적용됩니다 (특정 캘린더에서 편집을 시작했더라도).

![캘린더 연결 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056003338/original/UK1mBqG1le9aPPbm5hBzXqysP409c_24cw.png?1760489454)

## 커스텀 스케줄 (캘린더별 예약 가능 시간)

- 커스텀 스케줄은:
  - 해당 캘린더에만 적용됩니다
  - 자체 주간 시간, 시간대, 특정 날짜 예외를 포함합니다
  - 캘린더의 예약 가능 시간(Availability) 탭에서 직접 생성할 수 있습니다

- 커스텀 스케줄을 생성하려면, `Availability(예약 가능 시간)` 탭에서 > 직원 **선택** > **편집** > `Customize schedule for this calendar only(이 캘린더만을 위한 스케줄 커스터마이징)`

![커스텀 스케줄 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056003386/original/7zDnebAEvD0iuiHH3oewN2zn2bRSN5BMKA.png?1760489784)

커스텀 스케줄은 스케줄 목록에 나타나지 않습니다. 해당 스케줄을 생성한 캘린더 내에서만 관리됩니다.

## 기존 캘린더의 전환 (커스텀 스케줄)

원활한 전환을 위해 설정된 예약 가능 시간에 따라 기존 캘린더 각각에 대해 커스텀 스케줄이 생성됩니다.

- 해당 캘린더의 예약 가능 시간(Availability) 탭에만 나타납니다
- 언제든지 편집하거나 재사용 가능한 스케줄로 교체할 수 있습니다

---

## 자주 묻는 질문

**Q: 기존 예약 가능 시간 설정은 어떻게 되나요?**

A: Hyperclass가 자동으로 커스텀 스케줄로 마이그레이션하므로 아무것도 손상되지 않습니다.

**Q: 라운드 로빈 캘린더에 같은 스케줄을 연결할 수 있나요?**

A: 네—라운드 로빈 그룹 내의 각 사용자에 대해 스케줄을 선택하기만 하면 됩니다.

**Q: 특정 날짜 예외가 스케줄을 사용하는 모든 캘린더에 영향을 주나요?**

A: 네. 한 캘린더에만 예외가 필요한 경우, 해당 캘린더 내에서 커스텀 스케줄을 생성하세요.

**Q: 몇 개의 스케줄을 생성할 수 있나요?**

A: 엄격한 제한은 없으며, 워크플로우에 필요한 만큼 생성할 수 있습니다.

**Q: 사용자가 여러 캘린더에 나타나는 경우 이중 예약을 방지할 수 있나요?**

A: 각 캘린더가 같은 스케줄을 참조하므로 점유된 시간은 자동으로 예약 가능 시간에서 제거되어 중복을 방지합니다.

**Q: 스케줄 업데이트로 기존 예약이 취소되나요?**

A: 아니요. 기존 이벤트는 유지되며, 향후 열린 시간대만 업데이트됩니다.

**Q: 직원별 시간대가 캘린더의 시간대와 어떻게 상호작용하나요?**

A: 스케줄은 직원 시간대를 준수하며, 예약 위젯은 자동으로 슬롯을 방문자의 브라우저 시간대로 변환합니다.

**Q: API를 통해 스케줄을 가져올 수 있나요?**

A: 아직은 안됩니다. 현재 스케줄은 앱 내에서 관리되며, API 엔드포인트는 향후 릴리스에서 발표될 예정입니다.

---
*원문 최종 수정: Tue, 11 Nov, 2025 at 2:02 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*