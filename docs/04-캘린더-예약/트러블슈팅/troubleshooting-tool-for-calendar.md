---

번역일: 2026-04-07
카테고리: 04-캘린더-예약 > 트러블슈팅
---

# 캘린더 트러블슈팅 도구

캘린더 트러블슈팅 도구는 사용자가 Hyperclass에서 예약 충돌이나 예약 가능 시간 누락 등 캘린더 관련 문제를 빠르게 식별하고 해결할 수 있도록 도와줍니다. 일반적인 설정 문제를 명확히 보여주어 사용자가 캘린더 기능을 즉시 정상화할 수 있습니다.

**목차**

- [캘린더 트러블슈팅 도구란?](#캘린더-트러블슈팅-도구란)
- [캘린더 트러블슈팅 도구의 주요 이점](#캘린더-트러블슈팅-도구의-주요-이점)
- [캘린더 트러블슈팅 도구 설정 및 사용법](#캘린더-트러블슈팅-도구-설정-및-사용법)
- [트러블슈팅 도구 접근하기](#트러블슈팅-도구-접근하기)
- [도구를 사용해 문제 진단하기](#도구를-사용해-문제-진단하기)
- [추가 트러블슈팅 도구 주제](#추가-트러블슈팅-도구-주제)
- [캘린더 연동 상태 확인하기](#캘린더-연동-상태-확인하기)
- [사용자 예약 가능 시간 설정 트러블슈팅](#사용자-예약-가능-시간-설정-트러블슈팅)
- [일반적인 예약 문제와 의미](#일반적인-예약-문제와-의미)
- [중복 예약 문제 진단하기](#중복-예약-문제-진단하기)
- [권한 관련 오류 이해하기](#권한-관련-오류-이해하기)
- [동기화 동작 팁](#동기화-동작-팁)
- [자주 묻는 질문](#자주-묻는-질문)
- [관련 문서](#관련-문서)
- [중요 참고사항](#중요-참고사항)

## **캘린더 트러블슈팅 도구란?**

캘린더 트러블슈팅 도구는 Hyperclass 내의 진단 기능으로, 캘린더 예약이 성공적으로 이루어지지 않는 설정 문제를 사용자가 감지할 수 있도록 도와줍니다. 잘못 설정된 캘린더는 예약 누락, 고객 불만, 매출 손실을 야기할 수 있습니다. 캘린더 트러블슈팅 도구는 예약 가능 시간 누락, 사용자 동기화 오류, 잘못된 팀 설정 등 문제의 정확한 원인을 찾아내어 사용자가 지원 요청 없이도 신속하게 문제를 해결할 수 있게 합니다.

## **캘린더 트러블슈팅 도구의 주요 이점**

이 기능은 캘린더 설정 문제에 대한 즉각적인 가시성을 제공하여 추측과 지원 지연을 줄입니다. 사용자가 일반적인 예약 차단 요소를 식별하고 해결함으로써 일정 관리 경험을 스스로 제어할 수 있게 합니다.

- **즉각적인 가시성**: 예약 가능 시간 누락, 미배정 사용자, Google/Outlook 동기화 실패 등 일반적인 캘린더 설정 문제를 실시간으로 감지합니다.
- **셀프 서비스 진단**: 사용자가 지원팀에 문의하지 않고도 문제를 식별할 수 있습니다.
- **빠른 예약 복구**: 예약 실패의 근본 원인을 신속히 발견하여 캘린더가 정상 기능을 재개할 수 있습니다.
- **다중 캘린더 지원**: 팀 캘린더와 라운드 로빈 캘린더에서 작동하여 광범위한 진단 범위를 보장합니다.
- **사용자 동기화 인사이트**: 개별 사용자나 연결된 계정과 관련된 동기화 문제를 강조 표시합니다.

## **캘린더 트러블슈팅 도구 설정 및 사용법**

이 내장 도구는 별도 설정이 필요하지 않지만, 예약 문제를 빠르고 정확하게 진단하려면 최신 인터페이스에서 어디에서 접근할 수 있는지 아는 것이 중요합니다.

### **트러블슈팅 도구 접근하기**

**1단계:** Hyperclass에서 **설정(Settings) → 캘린더(Calendars)**로 이동합니다. 페이지 상단에서 캘린더 설정(Calendar Settings)을 클릭하세요.

![캘린더 설정 접근](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044569840/original/jRV5fRSzdppYjBCX-YmeOMFAH8TdiIEy6A.png?1743793447)

**2단계:** 트러블슈팅하려는 캘린더를 찾습니다. 해당 캘린더 옆의 **렌치 아이콘**을 클릭하여 도구를 엽니다.

![렌치 아이콘 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044569618/original/XfgdG81VrV3K9eF7vEsYeDfLzx9cP5yPzA.png?1743792864)

### 캘린더 헤더에서 빠른 접근

편집 중인 캘린더에서 직접 진단을 시작하면 클릭 수를 줄이고 수정 속도를 높일 수 있습니다.

**1단계**

설정(Settings) → 캘린더(Calendars) → [사용자의 캘린더]로 이동한 다음, 우측 상단 헤더에서 캘린더 트러블슈팅(Troubleshoot Calendar)을 클릭합니다.

![캘린더 트러블슈팅 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064114658/original/x0y8DwUOBUMa422acn4u3rLWTnsF-8LU9w.png?1770137263)

**캘린더 트러블슈팅(Troubleshoot Calendar)**을 클릭하면 편집기를 떠나지 않고도 진단을 열 수 있습니다.

## **도구를 사용해 문제 진단하기**

**1단계:** 캘린더 그리드에서 날짜를 선택합니다.

**2단계:** 예약 불가능한 시간대에 마우스를 올려 툴팁에서 이유를 확인합니다.

![툴팁으로 이유 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044569828/original/C7zoyuad_5Oc8Uq1bTLdkWUNoyRT9DDI6A.png?1743793431)

## **추가 트러블슈팅 도구 주제**

기본적인 도구 개요 외에도, 이러한 추가 주제들은 예약 문제를 자주 일으키는 특정 사용 사례와 엣지 케이스를 자세히 다룹니다. 각 시나리오가 어떻게 작동하는지 이해하면 중단을 사전에 방지하고 일정 관리 안정성을 향상시킬 수 있습니다.

### 캘린더 연동 상태 확인하기

적절한 캘린더 연동은 정확한 동기화와 예약 가능 시간의 기초입니다. 캘린더가 올바르게 연결되지 않으면 예약이 표시되지 않거나 잘못 동기화될 수 있습니다.

- **캘린더(Calendar)** 설정 > 연결(Connections)로 이동합니다.
- Google 또는 Outlook이 "연결됨"으로 표시되는지 확인합니다.
- 필요시 다시 연결하고 올바른 캘린더를 선택합니다.

![캘린더 연결 상태](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064652514/original/4h8t3QM4ekygHV7deHeNqXTJJ3I8ipA1eg.jpeg?1770798912)

### "삭제된 캘린더" 연결 오류 해결

연결된 Google/Outlook 캘린더가 제공자에서 삭제된 경우, Hyperclass에서 오류 배너를 표시할 수 있습니다. 이제 지원팀에 문의하지 않고도 이를 정리할 수 있습니다.

- 계정 설정(Settings)에서 캘린더(Calendars) 섹션으로 이동하고 연결(Connections) 탭을 클릭합니다.
- **이 문제 해결(Fix This)**을 클릭합니다.

![문제 해결 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064653011/original/AnEe_xd9nqPt4K4v0blr-j-CTDg-vU9plg.jpeg?1770799201)

- 삭제된 캘린더의 모달 목록을 검토합니다:

각 항목은 삭제된 캘린더와 Hyperclass에서 연결된 위치를 보여줍니다.

- **삭제된 캘린더 제거(Remove Deleted Calendars)**를 클릭하여 깨진 캘린더 연결을 한 번에 제거합니다.

![삭제된 캘린더 제거](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064653223/original/NPvEVYdolJaLe1D31tv2IoIXQDIvI8wCug.png?1770799321)

- 필요시 유효한 캘린더를 다시 연결하거나 재선택합니다.

[**더 알아보기: Google 캘린더 연동 설정**](../캘린더-연동/integrating-google-with-highlevel-calendars.md)

## **사용자 예약 가능 시간 설정 트러블슈팅**

캘린더가 연동되어 있어도 예약 가능 시간이 누락되거나 잘못되면 예약이 차단됩니다. 트러블슈팅 도구는 근무 시간이 정의되지 않은 사용자를 표시합니다. 예약 가능 시간을 검토하고 조정하려면:

- 캘린더(Calendars) > 캘린더 설정(Calendar Settings)으로 이동합니다.
- 사용자에게 배정된 캘린더를 찾고 편집(Edit)을 클릭합니다.
- 해당 캘린더 내에서 예약 가능 시간(Availability) 탭을 클릭합니다.
- 관련 요일에 대해 예약 가능 시간 블록을 추가하거나 편집합니다.

![예약 가능 시간 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044573166/original/ribvANLujbwTUN1HVdKbI25UrcsxsLnGkA.png?1743802784)

[**더 알아보기: 캘린더 사용자 예약 가능 시간 설정 방법**](../Calendar-Availability-Settings/adjusting-availability-settings-for-individual-calendars.md)

## **일반적인 예약 문제와 의미**

트러블슈팅 도구 툴팁에 표시되는 각 상태 코드는 시간대가 예약 불가능한 이유를 보여줍니다.

- **USER**: 이 시간에 예약 가능한 사용자가 없음
- **COLLECTIVE**: 한 명 이상의 사용자가 예약 불가능함
- **CONFLICT**: 서드파티 캘린더 충돌
- **BOOKED**: 시스템을 통해 이미 예약됨
- **BLOCKED**: 수동으로 차단된 시간
- **NOTICE**: 최소 예약 통지 시간 위반
- **TOOFAR**: 허용 날짜 범위를 벗어남
- **DAYLIMIT**: 하루 예약 한도에 도달
- **SLOTMAX**: 슬롯의 최대 예약 수에 도달
- **BUFFER**: 버퍼 시간이 이 슬롯을 차단
- **DURATION**: 예약 시간이 간격에 비해 너무 길음
- **PAST**: 과거 시간임
- **LOOKBUSY**: Look Busy 설정으로 숨겨짐
- **NO SEATS**: 최대 좌석 수에 도달
- **RESOURCE**: 필요한 리소스를 사용할 수 없음

## **중복 예약 문제 진단하기**

중복 예약은 여러 사용자가 같은 캘린더에 동기화되거나 예약 가능 시간이 겹칠 때 발생할 수 있습니다.

- 트러블슈팅 도구를 사용해 충돌하는 사용자를 식별합니다.
- 겹침을 방지하기 위해 사용자 캘린더를 조정하거나 사용자별로 캘린더를 분리합니다.

[**더 알아보기: 중복 예약 트러블슈팅**](troubleshoot-and-fix-calendar-double-booking-in-highlevel.md)

## **권한 관련 오류 이해하기**

때로는 Google/Outlook에서 권한이 취소되거나 필요한 액세스 범위가 누락되어 예약 문제가 발생합니다.

- 설정(Settings) > 내 직원(My Staff)으로 이동합니다.
- 직원을 찾아 **편집(Edit)** > 캘린더 구성(Calendar Configuration)을 선택합니다.
- 왼쪽 리본에서 캘린더(Calendar)를 클릭한 다음 필요한 모든 권한 범위가 부여되었는지 확인합니다.

![직원 캘린더 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044572755/original/4_93tlzS1oo_Q6luaPtBUWy1X5r43svwHg.png?1743801520)

![권한 범위 확인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044573243/original/lCnrMllEQ1B868LMYVi4VaZ5IvF6i8WhdQ.png?1743803063)

[더 알아보기: 캘린더의 사용자 권한](../user-permissions-in-calendars.md)

## **자주 묻는 질문**

**Q: 트러블슈팅 도구를 별도로 활성화해야 하나요?**  
아니요. 트러블슈팅 도구는 플랫폼에 내장되어 있으며 캘린더 설정(Calendar Settings)에서 자동으로 사용할 수 있습니다.

**Q: 시간대가 "사용 불가능(UNAVAILABLE)"으로 표시되는 이유는?**  
이는 사용자가 예약 가능 시간을 벗어났거나 다른 이벤트, 동기화 문제, 예약 제한 등으로 인해 차단되었음을 의미합니다.

**Q: 캘린더에 예약 가능한 시간이 전혀 표시되지 않는 이유는?**  
일반적으로 사용자가 배정되지 않았거나, 예약 가능 시간이 설정되지 않았거나, 캘린더 동기화가 연결 해제되었을 때 발생합니다.

**Q: 이 도구로 그룹 또는 라운드 로빈 캘린더를 디버그할 수 있나요?**  
예. 그룹 캘린더를 지원하며 어떤 사용자가 예약 실패를 야기하는지 보여줍니다.

**Q: 트러블슈팅 도구가 자동화나 워크플로우 오류를 보여주나요?**  
아니요. 캘린더 관련 설정 문제만 표시하며 자동화 로직은 표시하지 않습니다.

**Q: 이 도구에서 연락처의 시간대로 예약 가능 시간을 볼 수 있나요?**  
아니요. 로그인한 사용자의 시간대를 기준으로 표시됩니다.

## 관련 문서

- [HighLevel 캘린더와 Google 연동하는 방법](../캘린더-연동/integrating-google-with-highlevel-calendars.md)
- [HighLevel 캘린더와 Outlook 동기화하는 방법](../how-to-sync-highlevel-calendars-with-outlook.md)
- [개별 캘린더의 예약 가능 시간 설정 조정](../Calendar-Availability-Settings/adjusting-availability-settings-for-individual-calendars.md)
- [중복 예약 문제 트러블슈팅](troubleshoot-and-fix-calendar-double-booking-in-highlevel.md)
- [캘린더의 사용자 권한](../user-permissions-in-calendars.md)
- [라운드 로빈 캘린더: 설정 가이드](../Round-Robin-Calendars/round-robin-calendars-setup-distribution-availability-explained.md)
- [연결된 캘린더 및 충돌 캘린더 설정](../setting-up-linked-calendars-conflict-calendars.md)

### **중요 참고사항**

- **이 도구는 먼저 캘린더의 예약 가능 시간과 미팅 간격을 확인하여 모든 잠재적 슬롯을 생성합니다. 그런 다음 이 중 어떤 슬롯이 예약 가능하고 어떤 것이 불가능한지 보여줍니다.**

- **예를 들어, 캘린더 예약 가능 시간이 오전 10시부터 오후 12시, 오후 6시부터 8시까지로 설정되어 있고 미팅 간격이 60분인 경우, 오전 10시, 11시, 오후 6시, 7시 슬롯만 표시되며, 이 네 개 슬롯에 대해 예약 가능 여부가 그에 따라 표시됩니다. 캘린더가 토요일에 사용 불가능한 경우, 해당 날에는 슬롯이 표시되지 않습니다.**

---
*원문 최종 수정: Wed, 11 Feb, 2026 at 2:51 AM*  
*Hyperclass 사용 가이드 — hyperclass.ai*