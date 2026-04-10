---

번역일: 2026-04-06
카테고리: 04-캘린더-예약
---

# 기본 캘린더 설정하기

이 문서에서 다루는 내용

- [기본 캘린더](#기본-캘린더)
- [기본 캘린더 드롭다운](#Primary-Calendar-Dropdown%3A)
- [연락처 생성 허용](#Allow-Contact-Creation%3A)
- [트리거 허용](#Allow-Trigger%3A)
- [충돌 확인](#Check-for-Conflicts)

팀/그룹 캘린더(라운드 로빈, 서비스, 수업, 공동 캘린더)에서 특정 사용자에게 배정된 예약은 외부 캘린더(Google/Outlook/iCloud)와 동기화될 수 있으며, 외부 캘린더의 일정을 CRM으로 읽어와 동기화할 수도 있어요.

캘린더 설정은 `Settings(설정) > My Profile(내 프로필)`에서 할 수 있습니다. 주요 설정은 기본 캘린더와 충돌 확인 두 가지예요. 사용자가 연동한 모든 외부 캘린더가 여기에 표시됩니다.

![기본 캘린더 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155024443169/original/RuaRvq7TW8tbxAs3ae4tAw5bw-07XujGHg.png?1713161985)

---

## 기본 캘린더

기본 캘린더는 Google, Outlook, iCloud에 일정을 작성하는 메인 캘린더예요. 외부 캘린더에서 일정을 읽어오기도 하지만, 주요 역할은 새로운 예약을 이런 캘린더들로 전송하는 것입니다.

연락처 생성이 활성화되면, 이벤트(배정되지 않은) 캘린더의 양방향 동기화처럼 작동해요. 요약하면, Google/Outlook에서 참석자가 있는 이벤트는 예약으로 변환되는데, 반복 이벤트는 제외됩니다.

### 기본 캘린더 드롭다운:

해당 프로필에서 연동된 모든 캘린더가 여기에 표시됩니다. 비활성화된 캘린더는 '충돌 확인'에 포함되거나 Google에 대한 쓰기 권한이 없을 수 있어요.

### 연락처 생성 허용:

Google/Outlook 캘린더에서 예약을 생성하고 싶다면 이 옵션을 선택하세요. 그렇지 않으면 없음으로 두세요.

Google/Outlook에서 참석자가 있는 이벤트를 예약/연락처로 생성하고 싶다면, 드롭다운에서 캘린더 중 하나를 선택하세요. 이렇게 하면 해당 특정 캘린더에 예약이 생성됩니다. 사용자가 속한 모든 그룹 캘린더가 이 드롭다운에 나열되어 있어요.

### 트리거 허용:

이 드롭다운은 연락처 생성에서 캘린더가 선택된 경우에만 나타납니다. Google/Outlook에서 생성된 예약에만 적용되어요. 선택하면 동기화로 인해 생성된 예약에서 트리거가 실행되고, 그렇지 않으면 트리거를 건너뜁니다.

![캘린더 동기화 설정 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155024521769/original/92pXrlv6OvVpfnvtxqR5OA4bSUkSM9M77Q.png?1713254205)

---
*원문 최종 수정: 2024년 9월 20일*
*Hyperclass 사용 가이드 — hyperclass.ai*