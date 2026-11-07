---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000001367-icloud-integration-with-lead-connector
번역일: 2026-04-23
카테고리: 캘린더 > iCloud 연동
---

# iCloud와 Lead Connector 연동

이 글에서 다루는 내용

- [개요](#개요)
- [데이터 흐름: Lead Connector에서 iCloud로](#데이터-흐름-Lead-Connector에서-iCloud로)
- [데이터 흐름: iCloud에서 Lead Connector로](#데이터-흐름-iCloud에서-Lead-Connector로)

관련 아티클
- [iCloud와 Lead Connector를 연결하는 방법](https://help.leadconnectorhq.com/en/support/solutions/articles/155000001478)

### 개요

iCloud 연동에 대한 자세한 내용을 설명하기 전에, 몇 가지 중요한 사항을 알아두셔야 합니다:

- iCloud 캘린더(Calendar) 연동은 라운드 로빈(Round Robin), 공동 예약(Collective), 수업 예약(Class Booking), 서비스 캘린더(Service Calendar)에서만 지원됩니다.
- iCloud 연동을 통해 양방향 이벤트 동기화가 가능합니다: Lead Connector에서 생성한 이벤트를 iCloud로 동기화하고, iCloud에서 생성한 이벤트를 Lead Connector로 동기화할 수 있습니다.

🔔 iCloud 연동은 단순 캘린더(Simple Calendar)에서는 지원되지 않습니다.

---

### 데이터 흐름: Lead Connector(LC)에서 iCloud로

Lead Connector에서 이벤트를 생성하고 iCloud로 동기화할 때:

- Lead Connector에서 변경한 내용은 연결된 사용자의 iCloud 캘린더에 반영됩니다.
- iCloud 캘린더에서 변경한 내용은 Lead Connector 캘린더에 반영됩니다 (이벤트 삭제 제외).

이를 통해 LC 앱에서 생성하거나 수정한 이벤트가 iCloud 캘린더로 원활하게 전송되고, 그 반대의 경우도 마찬가지입니다.

⚠️ **중요사항**: iCloud 캘린더에서 이벤트를 삭제하면 Lead Connector 캘린더에는 업데이트되지 않습니다. 이는 iCloud 연동의 제한사항입니다.

⚠️ LC 캘린더에서 생성한 차단 슬롯은 iCloud로 동기화되지 않습니다.

### 데이터 흐름: iCloud에서 Lead Connector로

iCloud에서 이벤트를 생성하고 Lead Connector로 전송할 때:

- iCloud 캘린더에서 변경한 내용이 LC 캘린더에 반영됩니다.
- LC 캘린더에서 변경한 내용이 iCloud에 반영됩니다.

예를 들어, iCloud에서 "아이 학교 데리러 가기"와 같은 약속을 생성하면, LC 캘린더에도 동기화되어 표시되며, 이후 iCloud에서 변경한 내용은 LC 캘린더 앱에도 반영됩니다.

**iCloud 연동 관련 중요 정보**

iCloud 이벤트에서 LC로의 연락처(Contact) 생성은 지원되지 않습니다. 즉, iCloud에서 들어오는 모든 이벤트는 **차단 슬롯**으로 처리되며 예약(Appointment)이 아닙니다.

LC 캘린더에서 사용자에게 차단 슬롯을 생성하면, 이는 iCloud 캘린더와 동기화되지 않습니다.

---
*원문 최종 수정: 2023년 11월 24일*
*Hyperclass 사용 가이드 — hyperclass.ai*