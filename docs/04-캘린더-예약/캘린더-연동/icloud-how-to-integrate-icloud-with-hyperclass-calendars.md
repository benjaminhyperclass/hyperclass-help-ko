---

번역일: 2026-04-07
카테고리: 04-캘린더-예약 > 캘린더-연동
---

# iCloud - Hyperclass 캘린더와 iCloud 연동하는 방법

## 목차

- [개요](#개요)
- [사전 준비사항](#사전-준비사항)
- [시작하기](#시작하기)
- [1단계: Apple에서 앱 전용 비밀번호 받기](#1단계-apple에서-앱-전용-비밀번호-받기)
- [2단계: iCloud 캘린더 연결하기](#2단계-icloud-캘린더-연결하기)
- [3단계: 캘린더 설정](#3단계-캘린더-설정)
- [캘린더 설정이란?](#캘린더-설정이란)
- [iCloud 연동 제한사항](#icloud-연동-제한사항)

---

## 개요

iCloud 캘린더를 연결하면 iCloud 캘린더의 예약 정보와 Hyperclass 시스템의 예약 정보를 양방향으로 동기화할 수 있습니다. 이를 통해 정확한 예약 가능 시간을 유지하고, 중복 예약을 방지하며, 원활한 일정 관리와 예약 관리를 할 수 있습니다.

## 사전 준비사항

- 연결하려는 iCloud 캘린더와 연결된 Apple 계정에 접근할 수 있어야 합니다.
- Apple에서 앱 전용 비밀번호를 받아야 합니다.
- 쓰기 권한 필요 여부 확인:
  - Hyperclass 시스템에서 생성한 이벤트를 iCloud 캘린더에 추가하려면 캘린더에 쓰기 권한이 필요합니다.
  - iCloud 캘린더의 모든 이벤트를 시스템에 가져오기만 하려면 읽기 전용 권한으로도 충분합니다.

---

## 시작하기

### 1단계: Apple에서 앱 전용 비밀번호 받기

iCloud 캘린더를 연결하기 전에 Apple에서 앱 전용 비밀번호를 받아야 합니다. 이 고유한 비밀번호는 일반 Apple 계정 비밀번호와는 다릅니다. Apple에서는 서드파티 애플리케이션에 연결할 때 2단계 인증을 활성화하고 앱 전용 비밀번호를 사용하도록 요구합니다.

앱 전용 비밀번호를 받으려면 다음 단계를 따르세요:

1. [https://appleid.apple.com/](https://appleid.apple.com/)에 로그인하세요.

2. 아직 설정하지 않았다면 보안 섹션에서 2단계 인증을 활성화하세요.

![2단계 인증 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025516865/original/f2bbnxc8oyxGkCNb2S3Sv22_ChA--iH-xg.png?1714812585)

3. 앱 전용 비밀번호 섹션에서 '비밀번호 생성'을 선택하세요.

![앱 전용 비밀번호 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025516885/original/QaYdYsN0EwumOSDMxo8s-c6045xdtMTU9w.png?1714812667)

![비밀번호 생성 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025516910/original/GGZoaQaGb2jsDA9mmsJZjy9n7rRdh4jw4Q.png?1714812735)

4. 비밀번호 라벨을 입력하세요(예: 'CRM iCloud 연동')하고 '생성'을 클릭하세요.

![비밀번호 라벨 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025516933/original/H1vMJKs_IZtmAQ-G31Y51CGWAAgBwK_WHQ.png?1714812817)

5. 생성된 앱 전용 비밀번호를 복사하고 안전하게 보관하세요. 다음 단계에서 iCloud 캘린더를 연결할 때 사용됩니다.

![생성된 앱 전용 비밀번호](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025516958/original/ECkYfy6yS6NOcIr2uwN22CkTcMP4dUQQ7Q.png?1714812917)

---

### 2단계: iCloud 캘린더 연결하기

iCloud 캘린더를 연결하려면 다음 단계를 따르세요:

1. `Calendars(캘린더)` > `Calendar Settings(캘린더 설정)` > `Connections(연결)`로 이동하세요.

2. `Add New(새로 추가)`를 클릭하세요.

![새 연결 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025517243/original/uUkcCj3MQ96zq7lUxbQtpppnrHvmbNvvlw.png?1714813769)

3. `iCloud Calendar(iCloud 캘린더)`를 선택하고 `Connect(연결)`을 클릭하세요.

![iCloud 캘린더 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026809273/original/Ry1HrulkRkv3ZC4-6lLtIOX6ZSoDGBdIWA.png?1717043873)

4. Apple ID와 앞에서 생성한 앱 전용 비밀번호를 입력하세요.

![Apple ID와 비밀번호 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026809290/original/yKrHemmmqeKcugBqUlin-Lg51hqPUKZksw.png?1717043908)

5. `Connect(연결)`을 클릭하세요.

### 3단계: 캘린더 설정

iCloud 캘린더가 성공적으로 연결되면, 연결된 캘린더와 충돌 캘린더를 선택하여 캘린더 설정을 완료해야 합니다.

![캘린더 설정 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026102293/original/hIcQcFMhAJZvSIzrcd_mxcMpDnPFUjtjHw.png?1715836644)

### 캘린더 설정이란?

캘린더 설정에는 연결된 캘린더(Linked Calendar)와 충돌 캘린더(Conflict Calendar) 두 가지 설정이 포함됩니다.

**연결된 캘린더:**

시스템에서 생성되는 모든 새 이벤트가 연결된 캘린더에 추가됩니다. 예를 들어, 시스템에서 새로 생성된 이벤트는 연결된 캘린더와 동기화되어 해당 서드파티 캘린더(예: iCloud)에서 직접 확인할 수 있습니다.

![연결된 캘린더 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026102373/original/dHPGl03N8ARTgVoMp9fac5qwZ1_nVh9ztQ.png?1715836894)

참고: 
- 사용자가 캘린더를 연결된 캘린더로 선택하려면 쓰기 권한이 필요합니다.
- 연결된 캘린더는 기본적으로 충돌 캘린더에도 추가됩니다. 즉, 서드파티 연결된 캘린더에서 생성된 이벤트는 시스템에서 가져오고, 시스템에서 생성된 이벤트는 서드파티 연결된 캘린더로 전송됩니다.

**충돌 캘린더:**

충돌 캘린더로 추가된 서드파티 캘린더의 이벤트는 시스템과 동기화되어 해당 이벤트 시간 동안 예약 가능 시간을 차단합니다.

서드파티 캘린더에서 이벤트가 'BUSY(바쁨)'로 표시된 경우에만 예약 가능 시간이 차단됩니다. 'FREE(한가함)'로 표시된 이벤트의 경우, 이벤트는 시스템에서 가져오지만 예약 가능 시간은 그대로 유지됩니다.

이를 통해 정확한 예약 가능 시간을 유지하고 중복 예약을 방지할 수 있습니다. 중복 예약을 방지하기 위해 여러 캘린더를 추가할 수 있습니다.

![충돌 캘린더 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026102433/original/-KV8WtwOkRk9HebmhKrUHaLDraa_MVxlog.png?1715836977)

---

## iCloud 연동 제한사항

- Google과 Outlook 연결에서는 고급 설정에서 동기화 설정(Sync Preferences)을 구성하는 옵션을 제공하지만, iCloud는 기본 동기화(단방향 동기화)만 지원합니다.
- 이는 iCloud에서 들어오는 모든 이벤트가 차단된 슬롯으로 처리되며, 이러한 이벤트에서 발견된 게스트에 대해 연락처가 생성되지 않음을 의미합니다.
- 또 다른 제한사항은 시스템에서 사용자에 대해 차단된 슬롯이 생성되면 iCloud 캘린더와 동기화되지 않는다는 것입니다.
- 최신 개선사항으로, 각 사용자는 이제 하위 계정당 여러 iCloud 연동을 연결할 수 있으며, 동일한 iCloud 연동을 여러 하위 계정에서 연결할 수 있습니다.
- 구독 캘린더와의 연동은 불가능합니다. 즉, Hyperclass는 URL을 통해 구독한 iCloud 캘린더(일반적으로 공개 캘린더)에는 연결할 수 없습니다.

---
*원문 최종 수정: Tue, 22 Apr, 2025 at 11:55 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*