---

번역일: 2026-04-06
카테고리: 04-캘린더-예약
---

# iCloud 캘린더 연동 가이드

iCloud 계정과 캘린더를 Hyperclass와 연동하면 이벤트, 예약 가능 시간, 약속 일정을 양방향으로 동기화할 수 있습니다. 이 가이드를 따라 iCloud 계정을 연결하고 캘린더 연동을 올바르게 설정해보세요.

Hyperclass는 iCloud와 Hyperclass 캘린더 간에 이벤트를 동기화할 수 있습니다. 단, iCloud 이벤트에서 **연락처 생성**은 지원되지 않습니다.

---
**목차**

- [1단계: Apple에서 앱별 암호 받기](#1단계-apple에서-앱별-암호-받기)
  - [1-a: Apple에 로그인](#1-a-apple에-로그인)
  - [1-b: 이중 인증 활성화](#1-b-이중-인증-활성화)
  - [1-c: 앱별 암호 생성](#1-c-앱별-암호-생성)
  - [1-d: 앱별 암호 이름 지정](#1-d-앱별-암호-이름-지정)
  - [1-e: 앱별 암호 저장](#1-e-앱별-암호-저장)
- [2단계: Hyperclass에 iCloud 계정 연결](#2단계-hyperclass에-icloud-계정-연결)
  - [2-a: 새 연결 캘린더 추가](#2-a-새-연결-캘린더-추가)
  - [2-b: 인증 정보 저장](#2-b-인증-정보-저장)
- [3단계: 캘린더 설정](#3단계-캘린더-설정)
  - [3-a: 캘린더 설정 패널](#3-a-캘린더-설정-패널)
  - [3-b: 기본 연결 캘린더 편집](#3-b-기본-연결-캘린더-편집)
  - [3-c: 충돌 확인 캘린더 편집](#3-c-충돌-확인-캘린더-편집)
- [iCloud 연동 문제 해결](#icloud-연동-문제-해결)
- [자주 묻는 질문](#자주-묻는-질문)

---

## **1단계: Apple에서 앱별 암호 받기**

iCloud 캘린더를 연결하기 전에 Apple에서 앱별 암호를 받아야 합니다. 이 고유한 암호는 일반 Apple 계정 암호와 다릅니다. Apple은 제3자 애플리케이션에 연결할 때 이중 인증을 활성화하는 것과 함께 앱별 암호 사용을 의무화하고 있습니다.

### **1-a: Apple에 로그인**

[https://appleid.apple.com/](https://appleid.apple.com/)에 로그인하세요.

### **1-b: 이중 인증 활성화**

아직 활성화하지 않았다면 보안 섹션에서 이중 인증을 활성화하세요.

이 단계에서 이중 인증 활성화를 건너뛰고 나중에 문제가 생기면 다시 돌아와서 활성화하세요.

![이중 인증 활성화 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044833218/original/yfU_7mq6Hsr2b4IXpNRaRWNMtx7-Jrk9_A.jpeg?1744228504)

### **1-c: 앱별 암호 생성**

로그인 및 보안 섹션으로 들어가서 "앱별 암호"를 선택한 후, 모달에서 "앱별 암호 생성"을 클릭하세요.

![앱별 암호 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044833216/original/Xxps8T7QzuXKOpOB46Z5MfBxommB3Eo0_Q.jpeg?1744228503)

![앱별 암호 생성 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044833217/original/2xUPN_KIA2Xn9jx2zX1Jn-Yd1aJeCqLEaQ.png?1744228503)

### **1-d: 앱별 암호 이름 지정**

암호의 라벨을 입력하고(예: 'CRM iCloud 연동') '생성'을 클릭하세요.

![앱별 암호 이름 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044833219/original/pFVUL8ysix8l0q8XH3g2sD0LOjxAIqpVCw.jpeg?1744228504)

### **1-e: 앱별 암호 저장**

생성된 앱별 암호를 복사하여 안전하게 보관하세요. 다음 단계에서 iCloud 캘린더를 연결할 때 사용됩니다.

![생성된 앱별 암호](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044833215/original/5gHtfmv34uXiKzd3Fj3YQphBZCP3SLgK3A.jpeg?1744228503)

---

## 2단계: Hyperclass에 iCloud 계정 연결

1단계에서 받은 앱별 암호를 사용하여 iCloud 계정을 Hyperclass에 연결하세요.

### **2-a: 새 연결 캘린더 추가**

하위 계정 > Settings(설정) > Calendars(캘린더) > connections(연결)로 이동하여 "+ Add New(새로 추가)"를 클릭하세요.

![연결 캘린더 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044833383/original/W2wVa-Tcl5qezr7fAoTShaNKSexqP2HRYQ.png?1744228890)

### **2-b: 인증 정보 저장**

iCloud Calendar 위젯에서 "Connect(연결)"을 클릭한 후, iCloud Apple ID와 1단계에서 받은 앱별 암호를 입력하고 "Connect(연결)"을 클릭하세요.

![iCloud 캘린더 연결](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044833417/original/W-71fo7YCwS5C0SGM_C76nQJuUFPIhmjlQ.png?1744228995)

![인증 정보 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044833430/original/138RgokL2s3cNNb_wWUl_jh-BYseIba9Ew.png?1744229036)

---

## **3단계: 캘린더 설정**

2단계에서 iCloud를 연결한 후, 기본 연결 캘린더와 "차단" 캘린더를 설정해야 합니다.

제3자 캘린더를 연결하지 않았다면 이 캘린더 설정 패널이 나타나지 않습니다. 패널이 보이지 않으면 돌아가서 다른 캘린더를 연결하세요.

### **3-a: 캘린더 설정 패널**

하위 계정 > Settings(설정) > My Profile(내 프로필) > Calendar Configuration(캘린더 설정) **또는** 하위 계정 > Settings(설정) > Calendars(캘린더) > connections(연결) > calendar configuration(캘린더 설정)으로 이동하세요 (두 경로 모두 같은 패널로 이동합니다).

![캘린더 설정 경로 1](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044834570/original/Yz7rSWE0rU7Rrz6JXiq6N8fLmL8Hzb1yPQ.png?1744231945)

![캘린더 설정 경로 2](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044834606/original/sdTR2cvdCsQZEM9xWnc0MFHKiaOMR48_cg.png?1744232013)

### **3-b: 기본 연결 캘린더 편집**

기본 연결 캘린더 옆의 "Edit(편집)"을 클릭하세요. 연결 캘린더 모달에서 새 이벤트를 추가할 제3자 캘린더를 선택하세요. 시스템에서 생성된 모든 새 이벤트가 연결된 캘린더에 추가되고, 연결된 캘린더에서 생성된 모든 이벤트가 시스템과 동기화됩니다.

![기본 연결 캘린더 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044834776/original/B9h1Gl8qGVwfVlBTHJhtOA1bMpNp_x-lCg.png?1744232474)

### **3-c: 충돌 확인 캘린더 편집**

충돌 확인 캘린더 옆의 "Edit(편집)"을 클릭하세요. 미국 공휴일, 본인 캘린더, 다른 팀원 캘린더 등 하나 이상의 옵션을 선택하세요.

![충돌 확인 캘린더 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155044834786/original/RdGcqVF605JnPY6n5G0KNMGsNTLDCGj34A.png?1744232509)

---

## **iCloud 연동 문제 해결**

- **인증 문제:**
  - 앱별 암호를 사용하는지 확인하세요.
  - Apple ID에서 이중 인증이 활성화되어 있는지 확인하세요.

- **캘린더 동기화 문제:**
  - 올바른 캘린더가 기본으로 선택되어 있는지 확인하세요.
  - iCloud에서 생성된 이벤트가 Hyperclass와 동기화되려면 올바른 캘린더에 있어야 한다는 점을 기억하세요.

- **일정 충돌:**
  - iCloud의 바쁜 시간이 Hyperclass에서 중복 예약을 방지하도록 하려면 충돌 확인 캘린더가 설정되어 있는지 확인하세요.

---

## 자주 묻는 질문

**Q: 제3자 캘린더의 이벤트로 Hyperclass 캘린더를 차단할 수 있나요?**

A: 네, 충돌 확인 캘린더로 추가된 제3자 캘린더의 이벤트가 시스템과 동기화되어 해당 이벤트 기간 동안 예약 가능 시간이 차단됩니다. 제3자 캘린더에서 이벤트가 'BUSY(바쁨)'로 표시된 경우에만 예약 가능 시간이 차단됩니다. 'FREE(자유)'로 표시된 이벤트의 경우 시스템에서 가져오지만 예약 가능 시간은 열린 상태로 유지됩니다.

**Q: 여러 개의 차단 캘린더를 추가할 수 있나요?**

A: 네, 중복 예약을 방지하기 위해 확인할 여러 캘린더를 추가할 수 있습니다.

**Q: iCloud를 양방향으로 동기화할 수 있나요?**

A: 아니요. Google과 Outlook 연결은 고급 설정에서 동기화 기본 설정을 구성하는 옵션을 제공하지만, iCloud는 기본 동기화(단방향 동기화)만 지원합니다. 즉, iCloud에서 들어오는 모든 이벤트는 차단된 슬롯으로 처리되며, 이러한 이벤트의 참석자에 대한 연락처는 생성되지 않습니다. 또 다른 제한 사항은 시스템에서 사용자에게 차단된 슬롯이 생성되어도 iCloud 캘린더와 동기화되지 않는다는 점입니다.

**Q: 여러 iCloud 캘린더를 연결할 수 있나요?**

A: 네, 최신 개선 사항으로 각 사용자는 하위 계정당 여러 iCloud 연동을 연결할 수 있으며, 동일한 iCloud 연동을 여러 하위 계정에 연결할 수 있습니다.

**Q: 내 iCloud에 연결한 계정들에도 연결할 수 있나요?**

A: 아니요. 구독 캘린더와의 연동은 불가능합니다. 즉, Hyperclass는 URL을 통해 구독한 iCloud 캘린더(일반적으로 공개 캘린더)에는 연결할 수 없습니다.

---
*원문 최종 수정: Tue, 22 Apr, 2025 at 11:22 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*