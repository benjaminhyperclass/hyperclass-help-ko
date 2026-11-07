---
원문: /support/solutions/articles/155000001477-guide-to-icloud-calendar-integration
번역일: 2026-11-06
카테고리: 04-캘린더-예약
---

# iCloud 캘린더 연동 가이드

iCloud 계정과 캘린더를 하이퍼클래스에 연동하면 일정, 가용 시간, 예약을 양방향으로 동기화할 수 있어요. 이 가이드를 따라 iCloud 계정을 연결하고 캘린더 연동을 설정해 보세요.

{% hint style="info" %}
하이퍼클래스는 iCloud 캘린더와 하이퍼클래스 캘린더 사이에서 일정을 동기화할 수 있어요. 다만 iCloud 일정으로 연락처를 만드는 기능은 지원하지 않아요.
{% endhint %}

## 1단계: Apple에서 앱 전용 비밀번호 발급받기

iCloud 캘린더를 연결하려면 먼저 Apple에서 앱 전용 비밀번호를 발급받아야 해요. 이 비밀번호는 평소 쓰는 Apple 계정 비밀번호와 달라요. 타사 앱을 연결할 때 Apple은 2단계 인증을 켜는 것과 함께 앱 전용 비밀번호를 쓰도록 요구해요.

### 1-1. Apple에 로그인하기

<https://appleid.apple.com/> 에 로그인하세요.

### 1-2. 2단계 인증 켜기

아직 켜지 않았다면 **Security**(보안) 섹션에서 2단계 인증을 켜세요.

{% hint style="info" %}
지금 2단계 인증을 켜지 않고 넘어갔다가 나중에 문제가 생기면, 다시 돌아와서 켜 주세요.
{% endhint %}

![Apple 계정의 보안 섹션에서 2단계 인증을 켜는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044833218/original/yfU_7mq6Hsr2b4IXpNRaRWNMtx7-Jrk9_A.jpeg?1744228504)

### 1-3. 앱 전용 비밀번호 만들기

1. **Sign-In and Security**(로그인 및 보안) 섹션으로 들어가 "App-Specific Password"(앱 전용 비밀번호)를 선택하세요.
2. 나타나는 창에서 "Generate an app-specific password"(앱 전용 비밀번호 생성)를 클릭하세요.

![로그인 및 보안 섹션에서 앱 전용 비밀번호를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044833216/original/Xxps8T7QzuXKOpOB46Z5MfBxommB3Eo0_Q.jpeg?1744228503)

![앱 전용 비밀번호 생성 버튼이 있는 창](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044833217/original/2xUPN_KIA2Xn9jx2zX1Jn-Yd1aJeCqLEaQ.png?1744228503)

### 1-4. 앱 전용 비밀번호 이름 정하기

비밀번호를 구분할 이름(예: 'CRM iCloud 연동')을 입력하고 **만들기**를 클릭하세요.

![앱 전용 비밀번호 이름을 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044833219/original/pFVUL8ysix8l0q8XH3g2sD0LOjxAIqpVCw.jpeg?1744228504)

### 1-5. 앱 전용 비밀번호 보관하기

생성된 앱 전용 비밀번호를 복사해서 안전한 곳에 보관하세요. 다음 단계에서 iCloud 캘린더를 연결할 때 이 비밀번호를 사용해요.

![생성된 앱 전용 비밀번호가 표시된 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044833215/original/5gHtfmv34uXiKzd3Fj3YQphBZCP3SLgK3A.jpeg?1744228503)

---

## 2단계: iCloud 계정을 하이퍼클래스에 연결하기

1단계에서 발급받은 앱 전용 비밀번호로 iCloud 계정을 하이퍼클래스에 연결해요.

### 2-1. 새 캘린더 연결 추가하기

서브 계정에서 **설정 > 캘린더 > 연결**로 이동한 다음 **새로 추가 +** 를 클릭하세요.

![설정의 캘린더 연결 화면에서 새로 추가 버튼을 클릭하는 모습](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044833383/original/W2wVa-Tcl5qezr7fAoTShaNKSexqP2HRYQ.png?1744228890)

### 2-2. 인증 정보 저장하기

1. iCloud Calendar 위젯에서 **연결**을 클릭하세요.
2. iCloud Apple ID와 1단계에서 발급받은 앱 전용 비밀번호를 입력하세요.
3. **연결**을 클릭하세요.

![iCloud Calendar 위젯에서 연결을 클릭하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044833417/original/W-71fo7YCwS5C0SGM_C76nQJuUFPIhmjlQ.png?1744228995)

![Apple ID와 앱 전용 비밀번호를 입력하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044833430/original/138RgokL2s3cNNb_wWUl_jh-BYseIba9Ew.png?1744229036)

---

## 3단계: 캘린더 구성하기

2단계에서 iCloud를 연결했다면, 이제 기본 연결 캘린더와 일정 충돌을 확인할 캘린더(차단용 캘린더)를 정해야 해요.

{% hint style="info" %}
타사 캘린더를 연결하지 않으면 **캘린더 구성** 패널이 나타나지 않아요. 패널이 보이지 않으면 앞 단계로 돌아가 다른 캘린더를 연결하세요.
{% endhint %}

### 3-1. 캘린더 구성 패널 열기

서브 계정에서 다음 두 경로 중 하나로 이동하세요. 두 경로 모두 같은 패널로 연결돼요.

- **설정 > 내 프로필 > 캘린더 구성**
- **설정 > 캘린더 > 연결 > 캘린더 구성**

![설정의 내 프로필에서 캘린더 구성으로 이동하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044834570/original/Yz7rSWE0rU7Rrz6JXiq6N8fLmL8Hzb1yPQ.png?1744231945)

![캘린더 구성 패널 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044834606/original/sdTR2cvdCsQZEM9xWnc0MFHKiaOMR48_cg.png?1744232013)

### 3-2. 기본 연결 캘린더 편집하기

1. **Primary Linked Calendar**(기본 연결 캘린더) 옆의 **편집**을 클릭하세요.
2. 연결 캘린더 창에서 새 일정을 추가할 타사 캘린더를 선택하세요.

하이퍼클래스에서 새로 만든 일정은 모두 이 연결 캘린더에 추가돼요. 연결 캘린더에서 만든 일정도 모두 하이퍼클래스로 동기화돼요.

![기본 연결 캘린더를 편집하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044834776/original/B9h1Gl8qGVwfVlBTHJhtOA1bMpNp_x-lCg.png?1744232474)

### 3-3. 충돌 캘린더 편집하기

1. **Conflict Calendars**(충돌 캘린더) 옆의 **편집**을 클릭하세요.
2. 미국 공휴일, 내 캘린더, 다른 팀원의 캘린더 등 하나 이상 선택하세요.

![충돌 캘린더를 편집하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044834786/original/RdGcqVF605JnPY6n5G0KNMGsNTLDCGj34A.png?1744232509)

---

## iCloud 연동 문제 해결

- 인증이 안 될 때
  - 앱 전용 비밀번호를 입력했는지 확인하세요.
  - Apple ID에 2단계 인증이 켜져 있는지 확인하세요.
- 캘린더 동기화가 안 될 때
  - 기본 연결 캘린더로 올바른 캘린더를 선택했는지 확인하세요.
  - iCloud에서 만든 일정이 올바른 캘린더에 있어야 하이퍼클래스로 동기화돼요.
- 일정이 겹칠 때
  - iCloud의 바쁜 시간 때문에 하이퍼클래스에서 중복 예약이 생기지 않게 하려면, 충돌 캘린더를 설정하세요.

---

## 자주 묻는 질문

### 타사 캘린더의 일정으로 하이퍼클래스 캘린더를 막을 수 있나요?

네, 충돌 캘린더로 추가한 타사 캘린더의 일정은 하이퍼클래스로 동기화되고, 그 일정 시간 동안 예약 가능 시간이 막혀요. 타사 캘린더에서 일정이 'BUSY'(바쁨)로 표시된 경우에만 예약 가능 시간이 막혀요. 'FREE'(한가함)로 표시된 일정은 하이퍼클래스로 가져오지만, 예약 가능 시간은 그대로 열려 있어요.

### 차단용 캘린더를 여러 개 추가할 수 있나요?

네, 중복 예약을 막기 위해 확인할 캘린더를 여러 개 추가할 수 있어요.

### iCloud를 양방향으로 동기화할 수 있나요?

아니요. Google과 Outlook 연결은 **고급 설정**에서 **Sync Preferences**(동기화 환경설정)를 바꿀 수 있지만, iCloud는 기본 동기화(단방향 동기화)만 지원해요. iCloud에서 들어오는 일정은 모두 차단 시간(Blocked Slot)으로 처리되고, 이 일정에 포함된 참석자는 연락처로 만들어지지 않아요. 또 하이퍼클래스에서 사용자에게 차단 시간을 만들어도 iCloud 캘린더로는 동기화되지 않아요.

### iCloud 캘린더를 여러 개 연결할 수 있나요?

네, 최신 개선으로 사용자 한 명이 서브 계정 하나에 iCloud 연동을 여러 개 연결할 수 있어요. 같은 iCloud 연동을 여러 서브 계정에 연결할 수도 있어요.

### iCloud에서 구독 중인 캘린더에도 연결할 수 있나요?

아니요, 구독 캘린더와는 연동할 수 없어요. URL로 구독한 iCloud 캘린더(대개 공개 캘린더)에는 하이퍼클래스를 연결할 수 없다는 뜻이에요.
