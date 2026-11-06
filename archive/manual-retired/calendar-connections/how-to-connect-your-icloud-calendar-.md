---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000005596-how-to-connect-your-icloud-calendar-
번역일: 2026-04-23
카테고리: calendar-connections
---

# iCloud 캘린더 연동 방법

이 가이드는 iCloud 캘린더를 연동하여 예약을 동기화하고 예약 가능 시간을 정확하게 유지하는 방법을 설명합니다. 연동이 완료되면 iCloud 캘린더의 이벤트가 자동으로 반영되어 중복 예약을 방지하고 원활한 일정 관리 경험을 제공합니다.

---

**목차**

- [사전 준비사항](#사전-준비사항)
- [앱 전용 비밀번호 생성](#앱-전용-비밀번호-생성)
- [iCloud 캘린더 연동](#icloud-캘린더-연동)
- [캘린더 동기화 설정](#캘린더-동기화-설정)
- [연결된 캘린더](#연결된-캘린더)
- [충돌 캘린더](#충돌-캘린더)
- [중요한 iCloud 동기화 제한사항](#중요한-icloud-동기화-제한사항)
- [자주 묻는 질문](#자주-묻는-질문)
- [추가 도움이 필요하신가요?](#추가-도움이-필요하신가요)

---

# 사전 준비사항

시작하기 전에, 연동하려는 iCloud 캘린더와 연결된 Apple 계정에 접근할 수 있는지 확인하세요. Apple 계정에 2단계 인증이 활성화되어 있어야 하며, 고유한 앱 전용 비밀번호를 생성해야 합니다. iCloud 캘린더에 새 예약을 추가할 계획이라면 캘린더에서 쓰기 권한을 허용해야 합니다. 이벤트만 읽어오는 것이 목적이라면 읽기 전용 권한으로도 충분합니다.

---

## 앱 전용 비밀번호 생성

![앱 전용 비밀번호 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063369580/original/GLD4nq7cCXH5IeYSoWWxgsUlAw_yIAxgoA.jpeg?1769185352)

iCloud 캘린더를 안전하게 연동하려면 Apple에서 요구하는 앱 전용 비밀번호가 필요합니다. 이 비밀번호는 일반 Apple 계정 비밀번호와 다르며, 타사 서비스 연동에만 사용됩니다.

Apple 계정에 로그인하고 **로그인 및 보안(Sign-In and Security)** 섹션을 엽니다. 그곳에서 **앱 전용 비밀번호(App-Specific Passwords)**를 찾으세요.

![앱 전용 비밀번호 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063369647/original/ddPKs-LWir1BTcMb5vG7WanSWhhDl4gZfg.jpeg?1769185412)

새 비밀번호 생성 옵션을 선택하여 새 비밀번호를 만드세요. 나중에 식별할 수 있도록 알아보기 쉬운 라벨을 사용하세요.

![앱 전용 비밀번호 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063369775/original/q3lDvbrpfM6q4ecygeSdlIoRjF9XB44o_w.png?1769185479)

생성이 완료되면 비밀번호를 복사하고 안전하게 보관하세요. 연동 과정에서 이 비밀번호가 필요합니다.

---

## **iCloud 캘린더 연동**

![캘린더 연결 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063369879/original/mM7J_qCqA_Mdt_4ywM0BIt3tqExcVzI1Pg.jpeg?1769185538)

캘린더 연결 영역을 열고 새 캘린더 연결을 추가하세요. 사용 가능한 옵션 중에서 iCloud 캘린더 옵션을 선택합니다.

![iCloud 연결 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063369938/original/GqT6CrUz_ZSWpPjjnFYiLCkvzFXAfltTsg.jpeg?1769185618)

Apple ID 이메일 주소와 앞서 생성한 앱 전용 비밀번호를 입력합니다. 확인을 눌러 연결을 완료하세요.

연결이 성공하면 iCloud 캘린더가 연결된 캘린더 목록에 표시됩니다.

---

## **캘린더 동기화 설정**

연결 후, 캘린더 설정을 통해 예약이 올바르게 동기화되고 예약 가능 시간이 정확하게 유지되도록 해야 합니다.

![캘린더 동기화 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063370185/original/WCAmchOd1uIon8GKICnzyFozT-K5lChDcw.jpeg?1769185720)

### **연결된 캘린더**

![연결된 캘린더 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063370616/original/czURyLpB9GpB9eeVrkStimmQFLRxhSAIxQ.jpeg?1769185927)

연결된 캘린더는 새 예약이 추가되는 위치를 결정합니다. 쓰기 권한이 활성화되어 있다면 생성되는 모든 새 예약이 이 캘린더에 기록됩니다. 연결된 캘린더에서 직접 생성된 이벤트도 역동기화됩니다.

### **충돌 캘린더**

![충돌 캘린더 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063370786/original/gEQp_jDHUtzQKkDhYKnPIU9DiVMJO12UsA.jpeg?1769186020)

충돌 캘린더는 이미 이벤트가 있을 때 예약 가능 시간을 차단하기 위해 확인됩니다. **바쁨(Busy)**으로 표시된 이벤트만 시간을 차단하며, **여유(Free)**로 표시된 이벤트는 예약 가능 시간에 영향을 주지 않습니다.

![여러 충돌 캘린더](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063370879/original/YChjTeXRaLPXL9inIkftMWdFRdpw_2Wlsw.jpeg?1769186100)

충돌을 확인할 여러 캘린더를 추가할 수 있어 중복 예약을 방지하는 데 도움이 됩니다.

---

## **중요한 iCloud 동기화 제한사항**

![동기화 제한사항](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063371029/original/lxMsNdUHmL9B6hgMbP1qlHIgnSq00fhwdQ.jpeg?1769186187)

iCloud 캘린더는 기본 동기화 방식을 사용합니다. 모든 들어오는 이벤트는 차단된 시간으로 처리되며, 이벤트 참석자에 대해 연락처가 생성되지 않습니다. 또한 수동으로 생성된 차단 시간은 iCloud로 역동기화되지 않습니다.

---

## **자주 묻는 질문**

**Q: 앱 전용 비밀번호가 왜 필요한가요?**

Apple은 주 계정 비밀번호를 노출하지 않고 타사 서비스를 안전하게 연결하기 위해 앱 전용 비밀번호를 요구합니다.

**Q: 어떤 이벤트가 예약 가능 시간을 차단할지 선택할 수 있나요?**

네. iCloud 캘린더에서 바쁨으로 표시된 이벤트만 예약 가능 시간을 차단합니다.

**Q: iCloud 이벤트에서 연락처가 생성되나요?**

아니요. iCloud에서 동기화된 이벤트는 연락처 레코드를 생성하지 않고 차단된 시간으로만 처리됩니다.

**Q: 여기서 생성한 차단 시간이 iCloud로 역동기화되나요?**

아니요. 수동으로 생성한 차단 시간은 iCloud 캘린더로 다시 기록되지 않습니다.

---

## **추가 도움이 필요하신가요?**

캘린더가 예상대로 동기화되지 않는다면, 2단계 인증이 활성화되어 있는지, 앱 전용 비밀번호가 유효한지, 연결 및 충돌 확인을 위해 올바른 캘린더가 선택되어 있는지 확인하세요. 캘린더를 다시 연결하면 권한이나 동기화 문제가 해결되는 경우가 많습니다.

---
*원문 최종 수정: 2026년 1월 23일*
*Hyperclass 사용 가이드 — hyperclass.ai*