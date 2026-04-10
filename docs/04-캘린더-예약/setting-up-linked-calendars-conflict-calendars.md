---

번역일: 2026-04-06
카테고리: 04-캘린더-예약
---

# 연결된 캘린더 및 충돌 캘린더 설정하기

Hyperclass를 사용하면 외부 캘린더(Google, Office 365, Outlook.com)를 동기화하여 예약 가능 시간을 최신 상태로 유지하고 중복 예약을 방지할 수 있습니다. Connected Calendars(연결된 캘린더)로 Hyperclass의 접근을 승인하고, Linked Calendars(연결 캘린더)로 이벤트를 가져와 실제 예약 가능 시간을 표시하며, Conflict Calendars(충돌 캘린더)로 다른 일정이 있을 때 Hyperclass의 예약 슬롯을 자동으로 차단할 수 있습니다.

**목차**

- [연결된 캘린더, 링크 캘린더, 충돌 캘린더를 언제 사용하나요?](#연결된-캘린더-링크-캘린더-충돌-캘린더를-언제-사용하나요)
- [사전 준비사항](#사전-준비사항)
- [링크 캘린더 설정하기](#링크-캘린더-설정하기)
- [동기화 설정 (고급 설정)](#동기화-설정-고급-설정)
- [충돌 캘린더](#충돌-캘린더)
- [캘린더 작동 방식](#캘린더-작동-방식)
- [모범 사례 및 고려사항](#모범-사례-및-고려사항)
- [일반적인 문제 해결](#일반적인-문제-해결)

## **연결된 캘린더, 링크 캘린더, 충돌 캘린더를 언제 사용하나요?**

- **Connected Calendars(연결된 캘린더)**: Hyperclass가 외부 캘린더 계정에서 이벤트를 읽고 (선택적으로 쓸 수 있도록) 권한을 부여합니다.

- **Linked Calendars(링크 캘린더)**: 이벤트와 예약 가능 시간을 Hyperclass로 가져와서 실제 바쁜 시간을 표시합니다.

- **Conflict Calendars(충돌 캘린더)**: 특정 연결된 캘린더를 차단 캘린더로 지정하여, 겹치는 Hyperclass 예약 슬롯을 자동으로 '예약 불가능'으로 만듭니다.

## **사전 준비사항**

- **사용자 역할**: 하위 계정에서 Admin(관리자) 또는 Manager(매니저) 권한
- **외부 캘린더 계정**: 각 사용자마다 활성화된 Google 캘린더, Office 365, 또는 Outlook.com 로그인 계정

## 링크 캘린더 설정하기

### **1단계:** Connections 탭 접근하기

Hyperclass 하위 계정 사이드바에서 `Settings(설정) → Calendars(캘린더)`로 이동한 후, 상단의 Connections 탭을 클릭하여 **Connected Calendars(연결된 캘린더)** 페이지로 이동합니다.

![연결된 캘린더 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047943546/original/6nBdgykHgbRT_uGAU8fK9U-OP5Rk7y2HhA.gif?1749472656)

### **2단계:** 캘린더 추가하기

- Connected Calendars 섹션에서 **+ Add New** 버튼을 클릭합니다.
- 제공업체를 선택하세요: Google, Outlook, iCloud 또는 Calendly Calendar
- 로그인하고 Hyperclass에 이벤트 읽기 권한을 부여합니다 (예약을 다시 동기화할 계획이라면 쓰기 권한도 포함).
- 연결이 성공하면 제공업체 아이콘과 함께 이메일 주소가 목록에 표시됩니다.

![캘린더 추가하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047943978/original/stEFOtKQ5zhCQXbs8zNrUfu19JMVsdKWIg.gif?1749473168)

**알림: 연결 끊어진 통합 다시 연결하기**
"Reconnect your integration"과 같은 빨간색 배너가 표시되거나 캘린더 타일이 빨간색으로 테두리가 표시되면, OAuth 토큰이 만료되었거나 취소된 것일 수 있습니다. **Reconnect**를 클릭하고 Hyperclass에 다시 승인하여 액세스를 복원하세요.

제공업체에서 서드파티 캘린더가 삭제된 경우, 배너에 **Fix This** 옵션이 표시될 수도 있습니다. **Fix This**를 클릭하여 삭제된 모든 캘린더 인스턴스를 검토하고 **Remove Deleted Calendars**를 사용하여 끊어진 연결을 정리하세요.

### **3단계:** 링크 캘린더 구성하기

- Calendar Configuration 섹션의 Linked Calendar에서 **Add** 버튼을 클릭합니다.
- Connected Calendars 중 하나를 선택하여 Hyperclass로 이벤트를 가져옵니다.
- **Save**를 클릭합니다.

![링크 캘린더 구성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047944165/original/cmcw_3LVwMag0rf2j0gu5C_Lz6RqRe47IA.gif?1749473383)

**중요 사항:**
1. 사용자가 캘린더를 링크 캘린더로 선택하려면 Writer 권한이 필요합니다.
2. 링크 캘린더는 기본적으로 충돌 캘린더에 추가됩니다. 즉, 서드파티 링크 캘린더에 생성된 모든 이벤트가 시스템에 가져오고, 시스템에서 생성된 모든 이벤트는 서드파티 링크 캘린더로 전송됩니다.
3. 고급 설정에서 동기화 설정을 구성할 수 있습니다.

## **동기화 설정 (고급 설정)**

### **1. 기본 동기화 (단방향 동기화)**

- 시스템에서 생성된 이벤트가 링크 캘린더(예: Google)에 동기화됩니다.
- 링크 캘린더(예: Google)에서 생성된 이벤트가 시스템에 동기화됩니다.

이러한 이벤트는 차단된 슬롯으로 동기화됩니다.

- 링크 캘린더(예: Google) 이벤트의 게스트에 대해서는 연락처가 생성되지 않습니다.
- 자동화/워크플로우가 트리거되지 않습니다.

![기본 동기화 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047945204/original/jZsOK6uuUHRASpqHvscqcdsB6DadEbS_fg.png?1749474582)

### **2. 양방향 동기화**

- 시스템에서 생성된 이벤트가 링크 캘린더(예: Google)에 동기화됩니다.
- 링크 캘린더(예: Google)에서 생성된 이벤트가 시스템에 동기화됩니다.

이러한 이벤트는 예약으로 동기화됩니다.

- 링크 캘린더(예: Google) 이벤트에서 발견된 게스트에 대해 연락처가 생성됩니다.
- 시스템에서 생성된 다른 예약과 마찬가지로 자동화/워크플로우가 트리거될 수 있습니다.

**예시:** John이 오후 1시부터 2시까지 'Dr. Mark와의 병원 예약'이라는 구글 이벤트를 생성하고 구글 캘린더에 Dr. Mark를 게스트로 추가했습니다.

- **기본 동기화 (단방향 동기화)**: 오후 1시부터 2시까지 차단된 시간만 시스템에 추가되어 해당 시간에 아무도 예약할 수 없습니다.
- **양방향 동기화**: 오후 1시부터 2시까지 예약이 시스템에 생성되어 해당 시간에 아무도 예약할 수 없습니다. Dr. Mark에 대한 새로운 연락처가 시스템에 생성됩니다. 워크플로우가 생성된 경우 Dr. Mark에 대해 트리거됩니다.

## **충돌 캘린더**

충돌 캘린더로 추가된 서드파티 캘린더의 이벤트는 시스템에 동기화되어 해당 이벤트 기간 동안 예약 가능 시간을 차단합니다. 이름에서 알 수 있듯이, 선택한 캘린더의 모든 이벤트를 읽어와서 사용자가 예약 불가능한 시간을 차단합니다. 서드파티 캘린더에서 이벤트가 'BUSY'로 표시된 경우에만 예약 가능 시간이 차단됩니다. 'FREE'로 표시된 이벤트의 경우, 이벤트는 시스템에 가져오지만 예약 가능 시간은 그대로 유지됩니다.

![충돌 캘린더 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047945538/original/sckXVuIxwCrhketzFQDkdTzL8lhoedKrbg.gif?1749474918)

이를 통해 정확한 예약 가능 시간을 보장하고 중복 예약을 방지합니다. 중복 예약을 방지하기 위해 확인할 여러 캘린더를 추가할 수 있습니다. 충돌 캘린더 섹션에서는 예약을 생성하지 않고, 서드파티 캘린더에 이미 예정된 이벤트에 대해 시간을 차단하기만 합니다.

## 캘린더 작동 방식

- **예약 요청**: 고객이 예약을 요청하면 Hyperclass는 링크 캘린더와 충돌 캘린더를 모두 확인합니다. 겹치는 이벤트가 있으면 해당 슬롯이 예약 불가능으로 표시됩니다.

- **양방향 동기화**: **Write Back Appointments(예약 되돌려 쓰기)**를 활성화하면 Hyperclass가 새 예약을 외부 캘린더에 기록합니다.

- Hyperclass에서의 취소나 일정 변경도 외부 캘린더에 업데이트됩니다.

- **캘린더 뷰**: 캘린더 탭에서 외부 이벤트는 음영 처리된 블록으로, Hyperclass 예약은 색상이 있는 이벤트로, 차단된 슬롯은 예약 불가능 표시로 나타납니다.

## **모범 사례 및 고려사항**

- **되돌려 쓰기 제한**: 중복 항목을 방지하기 위해 주요 업무용 캘린더에서만 되돌려 쓰기를 활성화하세요.

- **개인 이벤트 차단**: 개인 캘린더를 충돌 캘린더로 연결하여 가족이나 개인적인 약속이 예약 슬롯을 자동으로 차단하도록 하세요.

- **시간대 맞추기**: 외부 캘린더의 시간대가 Hyperclass 프로필과 일치하는지 확인하여 불일치를 방지하세요.

- **정기적 재승인**: 외부 계정 비밀번호나 보안 설정을 변경한 경우, Hyperclass에 다시 승인하여 연결 끊김을 방지하세요.

## **일반적인 문제 해결**

| 문제 | 원인 | 해결책 |
|------|------|--------|
| 연결이 끊어짐으로 표시됨 (빨간 배너) | OAuth 토큰 만료 또는 취소됨 | `Settings(설정) → Calendars(캘린더) → Connections`에서 Reconnect를 클릭하고 다시 승인하세요. |
| 이벤트가 Hyperclass에 나타나지 않음 | 링크 캘린더가 선택되지 않았거나 동기화가 비활성화됨 | `Calendar Configuration → Linked Calendar`에서 Edit을 클릭하고 Sync Events가 켜져 있는지 확인하세요. |
| 외부 이벤트 중에도 슬롯 예약 가능 | 충돌 캘린더가 활성화되지 않음 | Conflict Calendars에서 Edit을 클릭하고 Use as Conflict Calendar를 토글한 후 Save하세요. |
| Hyperclass 예약이 되돌려 쓰기되지 않음 | Write-Back 토글이 꺼짐 | 링크 캘린더 설정을 편집하여 Write Back Appointments를 활성화한 후 저장하세요. |
| 외부 이벤트 중복 | 여러 캘린더에서 되돌려 쓰기가 활성화됨 | 보조 캘린더에서 되돌려 쓰기를 비활성화하거나 불필요한 추가 캘린더 연결을 해제하세요. |

---
*원문 최종 수정: Wed, 11 Feb, 2026 at 2:54 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*