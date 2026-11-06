---
원문: https://help.leadconnectorhq.com/support/solutions/articles/155000005595-how-to-connect-your-outlook-calendar-
번역일: 2026-04-23
카테고리: calendar-connections
---

# Outlook 캘린더 연결하기

Outlook 캘린더를 연결하면 예약과 예약 가능 시간이 자동으로 동기화됩니다. 연결이 완료되면 모든 캘린더에서 예약이 일관되게 유지되어 일정 충돌을 줄이고 실시간 변경 사항이 예약 가능 시간에 반영됩니다. 이 설정을 통해 수동 업데이트 없이도 모든 일정을 체계적으로 관리할 수 있습니다.

---

**목차**

- [개요](#개요)
- [Outlook 캘린더 연결하기](#outlook-캘린더-연결하기)
- [캘린더 설정 이해하기](#캘린더-설정-이해하기)
- [예약 가능 시간 정확성 유지 방법](#예약-가능-시간-정확성-유지-방법)
- [자주 묻는 질문](#자주-묻는-질문)

---

## 개요

Outlook 캘린더가 연결되면 설정에 따라 예약된 일정이 양방향으로 동기화됩니다. 시스템을 통해 생성된 새로운 예약은 캘린더에 직접 추가되고, 기존 캘린더 이벤트는 예약 가능 시간을 차단하는 데 사용됩니다. 이를 통해 신뢰할 수 있는 예약 경험을 제공하고 중복 예약을 방지할 수 있습니다.

![Outlook 캘린더 연결 관리 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063293076/original/4-Bb7QDBpx-Zg824oL8u_fpSR8stl6r-JA.jpeg?1769117162)

이 화면은 외부 캘린더가 관리되고 연결되는 곳입니다. Outlook 캘린더를 추가하는 시작점입니다.

---

## Outlook 캘린더 연결하기

연결 과정은 캘린더 연결 영역에서 시작되며, 여기서 새로운 캘린더 소스를 추가할 수 있습니다. 이곳에서 Outlook을 선택하고 안전하게 인증하여 이벤트 동기화를 시작할 수 있습니다.

![새 캘린더 연결 추가 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063293185/original/lTh4Ln2um9tkYOVbcOYzm7N8-xY83-hWYg.png?1769117581)

이 화면은 새 캘린더 연결을 추가하는 옵션을 보여줍니다. 이를 선택하면 Outlook을 캘린더 소스로 선택할 수 있습니다.

Outlook을 선택한 후, 이벤트가 올바르게 동기화될 수 있도록 로그인하고 액세스를 승인하라는 메시지가 표시됩니다.

![Outlook 인증 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063293107/original/Hv09AcmKRDsmZFZ0qSK4G-fS4uZQ9kYnLw.png?1769117343)

인증 과정에서 나타나는 화면입니다. 로그인하고 권한을 부여하면 연결 과정이 완료됩니다.

인증이 완료되면 Outlook 캘린더가 연결된 캘린더로 표시되며 설정할 준비가 완료됩니다.

---

## 캘린더 설정 이해하기

캘린더 연결 후 설정을 통해 이벤트 동기화 방식과 예약 가능 시간 계산 방법이 결정됩니다. **연결된 캘린더(Linked Calendar)**와 **충돌 캘린더(Conflict Calendar)** 두 가지 설정이 이 동작을 제어합니다.

![연결된 캘린더와 충돌 캘린더 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063293260/original/fddMog7TW5MsTMLmmjNk6R19ZZVFuaynbQ.jpeg?1769117858)

연결된 캘린더와 충돌 캘린더가 설정되는 섹션입니다.

**연결된 캘린더**는 시스템을 통해 생성된 새 예약이 자동으로 추가되는 곳입니다. 이 캘린더에서 직접 생성된 이벤트도 시스템으로 가져와서 양쪽 화면을 동기화 상태로 유지합니다.

![특정 Outlook 캘린더를 새 예약을 받을 캘린더로 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063300730/original/nQQvF4tWjXFB4n96irmC2OOCqt4T_QkSlQ.jpeg?1769146505)

새 예약을 받을 특정 Outlook 캘린더를 선택하는 화면입니다.

**충돌 캘린더**는 예약 가능 시간을 확인하는 데 사용됩니다. 바쁨(busy)으로 표시된 이벤트는 예약 시간을 차단하고, 자유(free)로 표시된 이벤트는 예약 가능 시간에 영향을 주지 않습니다. 여기에 여러 캘린더를 추가하여 일정이 정확하게 유지되도록 할 수 있습니다.

![일정 충돌을 감지할 캘린더 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063300880/original/FIZfCohWPczytiX2g4X029MtRqjc19E4Vw.jpeg?1769146685)

일정 충돌을 감지하기 위해 캘린더를 선택하는 화면입니다.

---

## 예약 가능 시간 정확성 유지 방법

설정이 완료되면 예약 가능 시간이 자동으로 업데이트됩니다. 바쁨 이벤트는 시간대를 차단하고, 자유 이벤트는 예약 가능 시간을 차단하지 않고 표시되며, 새 예약은 지연 없이 동기화됩니다. 이를 통해 수동 조정 없이도 일정이 정확하게 유지됩니다.

---

## 자주 묻는 질문

**Q: 연결 후 기존 Outlook 이벤트가 표시되나요?**

연결이 완료된 후 생성된 이벤트만 자동으로 동기화됩니다.

**Q: 여러 개의 Outlook 캘린더를 연결할 수 있나요?**

네, 여러 캘린더를 연결할 수 있지만 연결된 캘린더로는 하나만 선택할 수 있습니다.

**Q: 이벤트가 자유(free)로 표시되면 어떻게 되나요?**

자유 이벤트는 캘린더에 표시되지만 예약 가능 시간을 차단하지는 않습니다.

**Q: 동기화된 이벤트를 시스템에서 편집할 수 있나요?**

적절한 동기화를 위해 편집은 Outlook에서 직접 하는 것이 좋습니다.

**Q: 이 연결이 이벤트 스타일 캘린더와 호환되나요?**

이벤트 스타일 캘린더는 이 연결을 지원하지 않습니다.

---
*원문 최종 수정: 2026-03-12*
*Hyperclass 사용 가이드 — hyperclass.ai*