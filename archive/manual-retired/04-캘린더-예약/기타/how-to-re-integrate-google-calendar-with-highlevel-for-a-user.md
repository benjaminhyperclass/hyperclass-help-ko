---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# 사용자의 구글 캘린더를 Hyperclass와 재연동하는 방법

이 가이드는 구글 캘린더와 Hyperclass의 연동 문제를 해결하고 캘린더 기능을 복구하기 위해 재연동하는 과정을 안내합니다.

**중요**: 구글 계정 연결은 해당 구글 계정의 소유자가 직접 해야 하므로 "대신 로그인" 기능을 사용할 수 없습니다.

**목차**

- [구글 캘린더 재연동이란?](#구글-캘린더-재연동이란)
- [구글 캘린더 재연동 단계](#구글-캘린더-재연동-단계)
  - [1단계: 구글 캘린더 삭제](#1단계-구글-캘린더-삭제)
  - [2단계: 구글 캘린더 재연동](#2단계-구글-캘린더-재연동)
- [자주 묻는 질문](#자주-묻는-질문)

---

## 구글 캘린더 재연동이란?

구글 계정이 연결되어 있지만 여전히 동기화가 실패한다면, Settings(설정) → Integrations(연동) → Google에서 권한 누락 경고를 확인해보세요. "다시 연결"을 사용하여 구글 OAuth를 다시 실행하고 누락된 권한을 부여하세요.

다음과 같은 경우에 재연동을 권장합니다:

- 캘린더 이벤트 동기화가 중단됨
- 구글 계정 권한이 변경되거나 취소됨  
- 캘린더 연결이 해제되어 다시 연결이 필요함
- 계정에서 OAuth 오류나 동기화 문제가 발생함

## 구글 캘린더 재연동 단계

### 1단계: 구글 캘린더 삭제

연결된 구글 캘린더는 두 곳에서 삭제할 수 있습니다.

**1. 내 프로필(My Profile) 섹션에서:**

하위 계정에서 **Settings(설정)**을 클릭하세요. **My Profile(내 프로필)** 옵션을 선택하고 Calendar Settings(캘린더 설정)으로 이동한 다음, 연결된 구글 계정의 **휴지통/삭제** 아이콘을 클릭하세요.

![내 프로필에서 구글 캘린더 삭제](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052594133/original/ALs3W46u-TZyhIJvjaJe_-U-4OpyhB-Lsw.png?1756387386)

**2. 캘린더 연결(Calendar Connections) 섹션에서:**

Settings(설정) → Calendars(캘린더)로 이동하고 Connections(연결) 탭을 선택하세요. Connected Calendars(연결된 캘린더) 아래에서 연결된 구글 계정의 휴지통/삭제 아이콘을 클릭하세요.

![캘린더 연결에서 구글 캘린더 삭제](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052594415/original/4dcbvs0OqHramXOF8ldYzXb0LilpKBHapA.png?1756387570)

팝업에서 확인 박스를 체크하고 Confirm(확인)을 클릭하세요.

![삭제 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052594468/original/I-xNSIBPMDKX70NFowQF08pK6BkZYlJSIw.png?1756387626)

### 2단계: 구글 캘린더 재연동

마찬가지로 위에서 설명한 두 섹션(내 프로필 섹션과 캘린더 연결 섹션)에서 구글 캘린더를 다시 연결할 수 있습니다.

1. 하위 계정 Settings(설정)을 클릭하고 My Profile(내 프로필) 옵션을 선택한 다음, Calendar Settings(캘린더 설정) 아래의 **+ Add New(새로 추가)** 버튼을 클릭하세요. [Hyperclass에 구글 캘린더 연동하기](../캘린더-연동/integrating-google-with-highlevel-calendars.md) 가이드를 참조하여 구글 계정을 성공적으로 연결할 수도 있습니다.

![구글 캘린더 재연동 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052596409/original/cblnkrM4D_FEvrGVr-tvceSs5C4yAYGeOg.gif?1756388248)

**참고:** 재연동 과정을 완료한 후, 동기화 프로세스가 예상대로 작동하는지 구글 캘린더를 테스트해보세요. 테스트 후에도 문제가 지속된다면 추가 지원을 위해 고객 지원팀에 문의해주세요.

## 자주 묻는 질문

**Q: 다시 연결하기 전에 기존 연동을 제거해야 하나요?**  
네, 동기화 충돌을 피하기 위해 현재 구글 캘린더 연동을 해제한 후 다시 연결하는 것을 권장합니다.

**Q: 캘린더 연결을 해제하면 예약이 삭제되나요?**  
아니요, 연결 해제 및 재연결로 인해 시스템에 이미 동기화된 과거 또는 향후 예약이 삭제되지 않습니다.

**Q: 캘린더가 성공적으로 재연동되었는지 어떻게 확인할 수 있나요?**  
재연결 후 캘린더가 활성 동기화 상태로 목록에 표시되어야 합니다. 테스트 예약을 생성하여 양쪽 모두에 나타나는지 확인하여 테스트할 수 있습니다.

**Q: 다른 구글 계정을 사용하여 재연동할 수 있나요?**  
네. 기존 계정 연결을 해제한 후, 재연동 과정에서 다른 구글 로그인을 사용할 수 있습니다. 캘린더 이벤트에 맞는 올바른 계정인지 확인하세요.

**Q: 같은 사용자에게 여러 캘린더를 연결할 수 있나요?**  
네, 여러 캘린더를 추가할 수 있지만 기본 캘린더는 하나만 가질 수 있습니다.

---
*원문 최종 수정: Thu, 12 Feb, 2026 at 3:34 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*