---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002263-assigning-a-primary-calendar
번역일: 2026-11-07
카테고리: 04-캘린더-예약
---

# 기본 캘린더 지정하기

**Primary Calendar**(기본 캘린더)는 사용자별로 예약과 외부 캘린더 이벤트를 어떻게 동기화할지 정하는 설정이에요. 이 문서에서는 캘린더 설정 위치, 기본 캘린더의 동작 방식, 연락처 생성·트리거·충돌 확인이 동기화에 미치는 영향을 설명해요.

## 캘린더 설정 열기

해당 서브 계정에서 **설정 > 내 프로필 > 캘린더**로 이동하세요.

**내 프로필**에서 왼쪽 메뉴의 **캘린더**를 선택하면 돼요.

이 화면에는 내 사용자 프로필에 연결된 외부 캘린더 연동이 표시돼요. 여기서 **Primary Calendar**와 **Check for Conflicts**(충돌 확인) 같은 캘린더 동기화 설정도 관리할 수 있어요.

![내 프로필의 캘린더 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082699158/original/RQxuODuaegwgbqM1WocuyzQoqnPs5uxVPQ.png?1791353216)

---

## 기본 캘린더

라운드 로빈, 서비스, 클래스, 컬렉티브 캘린더 같은 그룹 캘린더 중 지원되는 캘린더에서는 사용자에게 배정된 예약을 Google, Outlook, iCloud 같은 외부 캘린더와 동기화할 수 있어요.

**Primary Calendar**는 지원되는 예약을 연결된 외부 캘린더에 기록할 때 쓰는 주 캘린더예요. 외부 캘린더에서 지원되는 이벤트를 읽어 올 수도 있어요.

연락처 생성을 켜면, 지원되는 Google 또는 Outlook 이벤트 중 참석자가 포함된 이벤트가 예약과 연락처로 만들어질 수 있어요. 반복 이벤트는 제외돼요.

Google, Outlook 연동 방법은 아래 문서를 참고하세요.

- [Google 캘린더를 하이퍼클래스 캘린더와 연동하기](캘린더-연동/integrating-google-with-hyperclass-calendars.md)
- [Outlook을 하이퍼클래스 캘린더와 연동하기](캘린더-연동/integrating-outlook-with-hyperclass-calendars.md)

![기본 캘린더 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082699293/original/_mPyZPURmj8aNXiBVemBLG4GHyI-yDMUKQ.png?1791353433)

---

## 기본 캘린더 드롭다운

**Primary Calendar** 드롭다운에는 내 프로필에 연결된 캘린더 중 지원되는 캘린더가 표시돼요.

충돌 확인에 쓰고 있거나 쓰기 권한이 없는 캘린더는 선택할 수 없을 수 있어요.

![기본 캘린더 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082699490/original/P3PkWg7i5gAMY85IT4ms-OQsOrAVqsUXMg.png?1791353614)

---

## 연락처 생성 허용

지원되는 Google 또는 Outlook 캘린더 이벤트로 선택한 캘린더에 예약과 연락처를 만들고 싶다면 **Allow Contact Creation**(연락처 생성 허용)을 사용하세요.

드롭다운에서 원하는 캘린더를 선택하세요. 내가 속한 그룹 캘린더 중 지원되는 캘린더가 선택지로 나타날 수 있어요.

외부 캘린더 이벤트로 예약이나 연락처를 만들고 싶지 않다면 **없음**으로 두세요.

---

## 트리거 허용

**Allow Trigger**(트리거 허용) 옵션은 **Allow Contact Creation**에서 캘린더를 선택하면 나타나요.

이 설정은 지원되는 Google 또는 Outlook 동기화로 만들어진 예약에 적용돼요. 켜면 동기화로 만들어진 예약에 해당하는 트리거가 실행될 수 있어요. 끄면 해당 트리거를 실행하지 않고 예약만 만들어져요.

![트리거 허용 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082700258/original/OsRFQHM0gsViuCfh8liqpBLRe_-V8HSbVA.png?1791354308)

---

## 충돌 확인

**Check for Conflicts**에서 선택한 캘린더는 기존 이벤트를 읽어 와서, 예약할 수 없는 시간대를 새 예약에서 막는 데 쓰여요.

기본 캘린더와 달리, 충돌 확인에만 쓰는 캘린더는 그 이벤트로 예약을 만들지 않아요. 일정 충돌과 중복 예약을 막는 것이 목적이에요.

이 설정은 **설정 > 내 프로필 > 캘린더**에서 관리하세요.

충돌 캘린더 설정과 일정 충돌에 대한 자세한 내용은 아래 문서를 참고하세요.

- [캘린더 일정 충돌](calendar-scheduling-conflicts.md)
- [연결된 캘린더 및 충돌 캘린더 설정하기](setting-up-linked-calendars-conflict-calendars.md)

![충돌 확인 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155082699272/original/gIDJvzcIacrPQFQLt7TgKCfQKSUAl_Xo7g.png?1791353394)

---

## 자주 묻는 질문

### 기본 캘린더와 충돌 확인은 어떻게 다른가요?

기본 캘린더는 지원되는 예약을 읽고 쓰는 방식으로 동기화해요. 충돌 확인에 쓰는 캘린더는 읽기만 해서, 예약할 수 없는 시간대를 막고 겹치는 예약을 방지해요.

### 외부 캘린더를 여러 개 연결할 수 있나요?

네. 한 사용자에게 지원되는 외부 캘린더를 여러 개 연결할 수 있어요. 다만 어느 캘린더로 동기화하고 어느 캘린더로 충돌을 확인할지는 해당 캘린더 설정에 따라 정해져요.

### 연결한 캘린더가 기본 캘린더 드롭다운에서 선택되지 않아요.

그 캘린더가 충돌 확인용으로 설정되어 있거나 필요한 쓰기 권한이 없을 수 있어요. 연결된 캘린더의 권한과 설정을 확인해 보세요.

### 트리거 허용 옵션은 언제 나타나나요?

**Allow Trigger**는 **Allow Contact Creation**에서 캘린더를 선택했을 때 나타나요. 지원되는 외부 캘린더 동기화로 만들어진 예약에 해당 트리거를 실행할지 정하는 옵션이에요.
