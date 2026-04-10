---

번역일: 2026-04-06
카테고리: 04-캘린더-예약
---

# 사용자의 구글 캘린더 재연동하기

이 가이드에서는 구글 캘린더와 Hyperclass를 재연동하여 동기화 문제를 해결하고 캘린더 기능을 복원하는 방법을 안내합니다.

**중요사항**: 구글 계정 연결은 해당 구글 계정의 실제 소유자가 직접 해야 하므로 "대신 로그인" 기능을 사용할 수 없습니다.

## 목차

- [구글 캘린더 재연동이란?](#구글-캘린더-재연동이란)
- [구글 캘린더 재연동 단계](#구글-캘린더-재연동-단계)
  - [1단계: 구글 캘린더 삭제](#1단계-구글-캘린더-삭제)
  - [2단계: 구글 캘린더 재연동](#2단계-구글-캘린더-재연동)
- [자주 묻는 질문](#자주-묻는-질문)

---

## 구글 캘린더 재연동이란?

구글 계정은 연결되어 있지만 동기화가 여전히 실패한다면, Settings(설정) → Integrations(연동) → Google에서 권한 누락 경고를 확인하세요. Reconnect(재연결)를 사용해서 구글 OAuth를 다시 실행하고 누락된 권한을 부여할 수 있습니다.

다음과 같은 경우에 재연동이 필요합니다:

- 캘린더 이벤트 동기화가 중단된 경우
- 구글 계정 권한이 변경되거나 취소된 경우
- 캘린더가 연결 해제되어 다시 연결이 필요한 경우
- 계정에서 Open Authorization 오류나 동기화 문제가 나타나는 경우

## 구글 캘린더 재연동 단계

### 1단계: 구글 캘린더 삭제

연결된 구글 캘린더는 두 곳에서 삭제할 수 있습니다.

**1. My Profile(내 프로필) 섹션에서:**

하위 계정의 **Settings(설정)**을 클릭합니다. **My Profile(내 프로필)** 옵션을 선택하고 Calendar Settings(캘린더 설정)으로 이동한 후, 연결된 구글 계정의 **Bin/Delete(휴지통/삭제)** 아이콘을 클릭하세요.

![구글 캘린더 삭제 - My Profile](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052594133/original/ALs3W46u-TZyhIJvjaJe_-U-4OpyhB-Lsw.png?1756387386)

**2. Calendar Connections(캘린더 연결) 섹션에서:**

Settings(설정) → Calendars(캘린더)로 이동하고 Connections(연결) 탭을 선택합니다. Connected Calendars(연결된 캘린더) 아래에서 연결된 구글 계정의 Bin/Delete(휴지통/삭제) 아이콘을 클릭하세요.

![구글 캘린더 삭제 - Calendar Connections](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052594415/original/4dcbvs0OqHramXOF8ldYzXb0LilpKBHapA.png?1756387570)

팝업에서 확인 체크박스를 선택하고 Confirm(확인)을 클릭합니다.

![삭제 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052594468/original/I-xNSIBPMDKX70NFowQF08pK6BkZYlJSIw.png?1756387626)

### 2단계: 구글 캘린더 재연동

위에서 설명한 것과 동일한 두 섹션(My Profile(내 프로필) 섹션과 Calendar Connections(캘린더 연결) 섹션)에서 구글 캘린더를 다시 연결할 수 있습니다.

1. 하위 계정 Settings(설정)을 클릭하고 My Profile(내 프로필) 옵션을 선택한 후, Calendar Settings(캘린더 설정) 아래에서 **+ Add New(새로 추가)** 버튼을 클릭하세요. [Hyperclass와 구글 캘린더 연동하기](integrating-google-with-highlevel-calendars.md) 가이드를 참고하여 구글 계정을 성공적으로 연결할 수도 있습니다.

![구글 캘린더 재연동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052596409/original/cblnkrM4D_FEvrGVr-tvceSs5C4yAYGeOg.gif?1756388248)

**참고사항**: 재연동 과정을 완료한 후, 구글 캘린더를 테스트하여 동기화 과정이 예상대로 작동하는지 확인하세요. 테스트 후에도 문제가 계속된다면 추가 지원을 위해 고객 지원팀에 문의해 주세요.

## 자주 묻는 질문

**Q: 재연결하기 전에 기존 연동을 삭제해야 하나요?**  
A: 네, 동기화 충돌을 피하기 위해 현재의 구글 캘린더 연동을 연결 해제한 후 재연결하는 것이 좋습니다.

**Q: 캘린더 연결을 해제하면 예약이 사라지나요?**  
A: 아니요, 연결 해제와 재연결은 시스템에 이미 동기화된 과거나 향후 예약을 삭제하지 않습니다.

**Q: 캘린더가 성공적으로 재연동되었는지 어떻게 알 수 있나요?**  
A: 재연결 후에는 활성 동기화 상태로 캘린더가 목록에 표시됩니다. 테스트 예약을 생성하여 양쪽에 모두 나타나는지 확인하여 테스트할 수 있습니다.

**Q: 다른 구글 계정으로 재연동할 수 있나요?**  
A: 네, 기존 계정을 연결 해제한 후 재연동 시 다른 구글 로그인을 사용할 수 있습니다. 캘린더 이벤트에 맞는 올바른 계정인지 확인하세요.

**Q: 같은 사용자에게 여러 캘린더를 연결할 수 있나요?**  
A: 네, 여러 캘린더를 추가할 수 있지만 기본 캘린더는 하나만 가질 수 있습니다.

---
*원문 최종 수정: Thu, 12 Feb, 2026 at 3:34 AM*  
*Hyperclass 사용 가이드 — hyperclass.ai*