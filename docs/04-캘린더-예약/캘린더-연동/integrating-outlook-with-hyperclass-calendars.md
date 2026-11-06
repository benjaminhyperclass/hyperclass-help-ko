---

번역일: 2026-04-07
카테고리: 04-캘린더-예약 > 캘린더-연동
---

# Outlook을 Hyperclass 캘린더와 연동하기

이 문서는 Outlook 계정을 Hyperclass 캘린더와 연결하여 원활한 일정 동기화와 효율적인 캘린더 관리를 위한 방법을 안내합니다.

## 목차

- [Outlook 캘린더 연동이란?](#outlook-캘린더-연동이란)
- [Outlook 캘린더 연동의 주요 장점](#outlook-캘린더-연동의-주요-장점)
- [Outlook 캘린더 연동 사전 준비사항](#outlook-캘린더-연동-사전-준비사항)
- [Outlook 캘린더 연결 단계](#outlook-캘린더-연결-단계)
- [자주 묻는 질문](#자주-묻는-질문)

## Outlook 캘린더 연동이란?

Outlook 캘린더를 Hyperclass와 연동하면 Outlook 캘린더의 예약을 시스템으로 동기화하고 그 반대도 가능합니다. 이를 통해 정확한 예약 가능 시간을 확보하고, 중복 예약을 방지하며, 원활한 일정 관리와 예약 관리가 가능합니다.

### Outlook 캘린더 연동의 주요 장점

- **원활한 연동**: 기존 Outlook(Microsoft) 계정을 몇 번의 클릭만으로 연결할 수 있습니다.
- **스마트 예약 가능 시간**: Outlook 캘린더의 예약 가능 시간을 Hyperclass 일정 관리에 자동으로 반영합니다.
- **중복 예약 방지**: Outlook의 일정을 Hyperclass에서 예약 불가 시간으로 표시할 수 있습니다.
- **통합 관리**: 외부 도구와 동기화를 유지하면서 예약을 중앙에서 관리할 수 있습니다.

### Outlook 캘린더 연동 사전 준비사항

- 활성화된 Outlook(Microsoft) 계정이 있어야 합니다.
- Hyperclass 사용자 프로필에 로그인되어 있어야 합니다.
- Outlook에 일정을 전송하려면 쓰기 권한이 필요합니다.

## Outlook 캘린더 연결 단계

### 1단계: 캘린더 연결로 이동

- 하위 계정의 Settings(설정)으로 이동합니다.
![설정 메뉴](https://jumpshare.com/v/ryQPlQhQckXw3YtcO6Sw+/Screen+Shot+2025-05-28+at+8.48.27+PM.png)

- Business Services(비즈니스 서비스) 하위의 Calendars(캘린더)를 선택합니다.
- Connections(연결) 탭을 클릭한 후 + Add New(새로 추가) 버튼을 클릭하여 새 캘린더를 추가합니다.
![캘린더 연결 추가](https://jumpshare.com/v/WzRxRYe4TpuuWnEjOcx9+/Screen+Shot+2025-05-28+at+8.50.44+PM.png)

### 2단계: Outlook으로 인증

- Connections(연결) 페이지에서 OutlookCalendar 옆의 Connect(연결) 버튼을 클릭합니다.
![Outlook 연결](https://jumpshare.com/v/HkeaAlT9pE52VsDA28QH+/Screen+Shot+2025-05-28+at+8.54.15+PM.png)

- Outlook 계정에 로그인합니다.
- 인증 프로세스를 완료하기 위해 필요한 권한을 허용합니다.
![Outlook 인증](https://jumpshare.com/v/o3Bjtfrtek1kzkbxXeXA+/Screen+Shot+2025-04-15+at+11.46.36+PM.png)

**지원되는 계정**: Microsoft 365 / Exchange Online 계정
**지원되지 않는 계정**: 독립형 또는 온프레미스 Microsoft Exchange 서버

## 자주 묻는 질문

**Q: Outlook 연동이 이벤트 캘린더와 작동하나요?**
아니요, Outlook 연동은 이벤트 캘린더와 작동하지 않습니다. 이벤트 캘린더는 Google 연동만 지원합니다.

**Q: 여러 Outlook 계정을 연동할 수 있나요?**
네, 최신 업데이트로 하나 이상의 Outlook 계정을 연동할 수 있습니다.

**Q: Outlook 연결을 해제하면 어떻게 되나요?**
Hyperclass는 더 이상 Outlook에서 예약 가능 시간이나 일정 데이터를 받지 않으며, 캘린더 기반 일정 관리에 영향을 줄 수 있습니다.

**Q: Outlook 캘린더가 삭제되어 Hyperclass에 오류 배너가 표시된다면?**
배너의 Fix This(문제 해결)를 클릭하여 삭제된 캘린더 인스턴스와 Hyperclass에서 연결된 위치를 확인합니다. 그런 다음 Remove Deleted Calendars(삭제된 캘린더 제거)를 선택하여 손상된 연결을 제거하고 오류 없는 설정을 복원합니다.

**Q: 계정 간 Outlook 연동에 제한사항이 있나요?**
아니요. 최신 업데이트로 동일한 Outlook 계정을 여러 하위 계정에서 연결할 수 있습니다.

**Q: 어떤 유형의 Outlook 계정이 지원되나요?**
Hyperclass는 Office 365, Outlook.com, live.com, hotmail 캘린더를 지원합니다.

**Q: 이 연동에서 지원되지 않는 시나리오는 무엇인가요?**
Outlook Desktop을 사용하고 일정이 클라우드에 동기화되지 않은 경우, 해당 일정은 Hyperclass에서 보이지 않습니다. 또한 온프레미스 Exchange 서버에서 호스팅되는 Outlook 계정은 지원하지 않습니다.

---
*원문 최종 수정: Wed, 11 Feb, 2026 at 2:56 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*