---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002370-icloud-how-to-integrate-icloud-with-highlevel-calendars
번역일: 2026-11-06
카테고리: 04-캘린더-예약
---

# iCloud 캘린더를 하이퍼클래스 캘린더와 연동하기

iCloud Calendar를 연결하면 iCloud 예약 일정이 하이퍼클래스로 동기화되고, 하이퍼클래스 일정도 iCloud로 동기화돼요. 그러면 가능한 시간이 정확하게 표시되고 중복 예약을 막을 수 있어요. 일정과 예약도 훨씬 매끄럽게 관리할 수 있어요.

## 사전 준비

1. 연결하려는 iCloud Calendar에 사용하는 Apple 계정에 접근할 수 있어야 해요.
2. Apple에서 앱 전용 암호를 발급받아야 해요.
3. 쓰기 권한이 필요한지 확인하세요.
   - 하이퍼클래스에서 만든 일정을 iCloud Calendar에 추가하려면 해당 캘린더에 쓰기 권한이 있어야 해요.
   - iCloud Calendar의 일정을 하이퍼클래스로 가져오기만 한다면 읽기 전용 권한으로 충분해요.

## 시작하기

### 1단계: Apple에서 앱 전용 암호 발급받기

iCloud 캘린더를 연결하기 전에 Apple에서 앱 전용 암호를 발급받아야 해요. 이 암호는 평소 쓰는 Apple 계정 암호와 달라요. 타사 애플리케이션에 연결할 때는 2단계 인증을 켜는 것은 물론 앱 전용 암호도 꼭 써야 하는 것이 Apple의 정책이에요.

앱 전용 암호는 아래 순서로 발급받아요.

1. <https://appleid.apple.com/> 에 로그인하세요.

2. 아직 2단계 인증을 켜지 않았다면 **Security**(보안) 섹션에서 켜 주세요.

![Apple ID 보안 섹션에서 2단계 인증 켜기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025516865/original/f2bbnxc8oyxGkCNb2S3Sv22_ChA--iH-xg.png?1714812585)

3. **App-Specific Passwords**(앱 전용 암호) 섹션에서 **Generate Password**(비밀번호 생성)를 선택하세요.

![앱 전용 암호 섹션에서 비밀번호 생성 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025516885/original/QaYdYsN0EwumOSDMxo8s-c6045xdtMTU9w.png?1714812667)

![비밀번호 생성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025516910/original/GGZoaQaGb2jsDA9mmsJZjy9n7rRdh4jw4Q.png?1714812735)

4. 암호를 구분할 이름을 입력하고(예: 'CRM iCloud Integration') **Create**(만들기)를 클릭하세요.

![암호 이름 입력 후 만들기 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025516933/original/H1vMJKs_IZtmAQ-G31Y51CGWAAgBwK_WHQ.png?1714812817)

5. 생성된 앱 전용 암호를 복사해서 안전한 곳에 보관하세요. 다음 단계에서 iCloud 캘린더를 연결할 때 이 암호를 사용해요.

![생성된 앱 전용 암호 복사](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025516958/original/ECkYfy6yS6NOcIr2uwN22CkTcMP4dUQQ7Q.png?1714812917)

### 2단계: iCloud Calendar 연결하기

iCloud Calendar는 아래 순서로 연결해요.

1. **캘린더 > 캘린더 설정 > 연결**로 이동하세요.

2. **새로 추가**를 클릭하세요.

![연결 화면에서 새로 추가 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025517243/original/uUkcCj3MQ96zq7lUxbQtpppnrHvmbNvvlw.png?1714813769)

3. **iCloud Calendar**를 선택하고 **연결**을 클릭하세요.

![iCloud Calendar 선택 후 연결 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026809273/original/Ry1HrulkRkv3ZC4-6lLtIOX6ZSoDGBdIWA.png?1717043873)

4. Apple ID와 앞에서 발급받은 앱 전용 암호를 입력하세요.

![Apple ID와 앱 전용 암호 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026809290/original/yKrHemmmqeKcugBqUlin-Lg51hqPUKZksw.png?1717043908)

5. **연결**을 클릭하세요.

### 3단계: 캘린더 구성

iCloud Calendar 연결이 끝나면 **캘린더 구성**을 마무리해야 해요. 연결 캘린더와 충돌 확인 캘린더를 선택하면 돼요.

![캘린더 구성 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026102293/original/hIcQcFMhAJZvSIzrcd_mxcMpDnPFUjtjHw.png?1715836644)

## 캘린더 구성이란?

**캘린더 구성**에서는 **Linked Calendar**(연결 캘린더)와 **Conflict Calendar**(충돌 확인 캘린더), 두 가지를 설정해요.

**Linked Calendar**(연결 캘린더)

하이퍼클래스에서 새로 만든 일정은 모두 연결 캘린더에 추가돼요. 예를 들어 하이퍼클래스에서 새 일정을 만들면 연결 캘린더로 동기화되므로, iCloud 같은 타사 캘린더에서 바로 확인할 수 있어요.

![연결 캘린더 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026102373/original/dHPGl03N8ARTgVoMp9fac5qwZ1_nVh9ztQ.png?1715836894)

{% hint style="info" %}
- 캘린더를 연결 캘린더로 선택하려면 사용자에게 쓰기 권한이 있어야 해요.
- 연결 캘린더는 기본적으로 충돌 확인 캘린더에도 추가돼요. 그래서 타사 연결 캘린더에서 만든 일정은 하이퍼클래스로 가져오고, 하이퍼클래스에서 만든 일정은 타사 연결 캘린더로 보내요.
{% endhint %}

**Conflict Calendar**(충돌 확인 캘린더)

충돌 확인 캘린더로 추가한 타사 캘린더의 일정은 하이퍼클래스로 동기화돼요. 그 일정 시간 동안은 예약 가능 시간이 막혀요.

타사 캘린더에서 일정 상태가 'BUSY'(바쁨)로 표시된 경우에만 가능한 시간이 막혀요. 상태가 'FREE'(한가함)인 일정은 하이퍼클래스로 가져오지만 가능한 시간은 그대로 열려 있어요.

이렇게 하면 가능한 시간이 정확하게 유지되고 중복 예약을 피할 수 있어요. 중복 예약을 막기 위해 확인할 캘린더를 여러 개 추가할 수도 있어요.

![충돌 확인 캘린더 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026102433/original/-KV8WtwOkRk9HebmhKrUHaLDraa_MVxlog.png?1715836977)

## iCloud 연동의 제한 사항

- Google과 Outlook 연결은 **고급 설정**에서 **Sync Preferences**(동기화 환경설정)를 지정할 수 있어요. iCloud는 기본 동기화(단방향 동기화)만 지원해요.
- 그래서 iCloud에서 들어오는 일정은 모두 차단 시간(Blocked Slot)으로 처리되고, 이 일정에 포함된 참석자는 연락처로 만들어지지 않아요.
- 하이퍼클래스에서 사용자에게 차단 시간을 만들어도 iCloud Calendar로는 동기화되지 않아요.
- 최근 개선으로 사용자 한 명이 서브 계정 하나에 iCloud 연동을 여러 개 연결할 수 있어요. 같은 iCloud 연동을 여러 서브 계정에 연결하는 것도 가능해요.
- 구독 캘린더와는 연동할 수 없어요. URL로 구독한 iCloud 캘린더(대개 공개 캘린더)는 하이퍼클래스에 연결할 수 없다는 뜻이에요.
