---

번역일: 2026-04-06
카테고리: 04-캘린더-예약 > 캘린더-만들기
---

# 캘린더 위젯 순서 변경

### 개요

캘린더 위젯 순서 변경 기능을 사용하면 캘린더 위젯의 단계 순서를 맞춤 설정할 수 있습니다. 날짜 및 시간 선택, 폼, 결제(활성화된 경우) 순서를 원하는 대로 조정할 수 있어요. 날짜 및 시간 선택을 먼저 보여줄지, 아니면 폼을 먼저 보여줄지 선택할 수 있고, 이에 따라 결제 단계 순서가 결정됩니다.

이 기능은 예약 완료 여부와 상관없이 리드 정보를 수집하고 싶은 비즈니스를 위해 설계되었습니다.

### 위젯 순서 설정하기

**참고:** 이 기능은 NEO 위젯에서만 사용할 수 있습니다.

- 캘린더 설정으로 이동해서 해당 캘린더를 선택하세요.
- **Forms & Payments(폼 및 결제)** 탭으로 이동합니다.
- 날짜 및 시간 선택과 폼을 원하는 순서로 드래그해서 재정렬하세요.
- **Save(저장)**을 클릭해서 변경사항을 적용합니다.

![캘린더 위젯 순서 변경 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033228393/original/W1Wjl3BvKXY4W6eHaM5x52W3zDd3SIQ_1A.gif?1726821747)

![폼 및 결제 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033227081/original/1Up6-h38-Rrg4ekTLUTJP_gknObR_N7I6A.png?1726821063)

![위젯 순서 설정 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033228666/original/FnKEyJbXO8jQIbbykBXI8WOPdQccSoffQw.png?1726821872)

---

### 어떻게 작동하나요?

#### 날짜 선택을 먼저, 폼을 나중에 하는 경우:

- **과정:** 사용자가 날짜를 선택하고, 폼을 작성한 후, 미팅을 예약합니다.
- **결과:** 예약이 완료되고, 시스템에 연락처가 생성되며, 폼이 제출됩니다.

#### 폼을 먼저, 날짜 선택을 나중에 하는 경우:

- **과정:** 사용자가 먼저 폼을 작성합니다.
- **결과:** 폼 제출 즉시 시스템에 연락처가 생성됩니다. 그 후 두 번째 단계에서 예약을 성공적으로 완료하면 시스템에 예약이 등록됩니다.

### 결제는 어떻게 작동하나요?

결제가 활성화된 경우, 예약 생성은 결제 상태에 따라 달라집니다.

#### 결제 과정:

- **제한 시간:** 사용자는 결제를 완료하는 데 10분의 시간이 주어집니다.
- **결과:** 
  - 10분 내에 결제가 성공하면 예약이 완료됩니다.
  - 10분 내에 결제가 완료되지 않으면 예약이 되지 않고, 선택한 시간대는 다른 사람이 예약할 수 있도록 다시 열립니다.

---

### 캘린더 위젯 순서 (가능한 시나리오)

1. 날짜 선택 먼저 + 결제 비활성화

![날짜 먼저 결제 없음](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027905481/original/98hXW0y_j35qcQ00hkPZk1lUoWSLeM-cIA.png?1718858024)

---

2. 날짜 선택 먼저 + 결제 활성화

![날짜 먼저 결제 있음](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028841378/original/8Nu1uo6kB6dxGSZCn2jurojMPSm0iVR3Ww.png?1720417588)

---

3. 폼 먼저 + 결제 비활성화

![폼 먼저 결제 없음](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027905523/original/M65oCDsCuRwVbakUevBLM4p9h285kJcrbQ.png?1718858147)

---

4. 폼 먼저 + 결제 활성화

![폼 먼저 결제 있음](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027905548/original/PqcAkP-XW2o_eLeeoVx57Bt9q6a1DKTzjQ.png?1718858177)

### 자주 묻는 질문

**Q. 뒤로 가기를 눌러서 폼을 다시 제출하면 어떻게 되나요?**

A: 같은 세션에서 폼을 다시 제출하면 여러 개의 폼 제출 기록이 나타납니다. 하지만 연락처에는 가장 최근 제출한 정보가 업데이트됩니다.

**Q: 폼 제출 워크플로우는 어떻게 되나요?**

A: 폼이 먼저인 경우, 폼 제출 즉시 워크플로우가 실행됩니다. 폼이 나중인 경우, 예약이 성공적으로 완료되었을 때만 워크플로우가 실행됩니다.

**Q: 예약 워크플로우는 어떻게 되나요?**

A: 결제가 비활성화된 경우, 예약 완료 즉시 워크플로우가 실행됩니다. 하지만 결제가 활성화된 경우, 결제가 성공적으로 완료된 후에만 워크플로우가 실행됩니다. (결제 성공 시에만 예약이 완료됩니다)

**Q: 예약 위젯에서 시간대가 보이지 않는데, 해당 시간에 예약된 일정도 없어요. 왜 그런가요?**

A: 이는 누군가가 위젯에서 해당 시간대를 선택했지만 아직 결제를 완료하지 않았을 때 발생할 수 있습니다. 이 경우 해당 시간대는 10분간 보류됩니다. 이 시간 내에 결제가 완료되면 예약이 완료되고 캘린더에 표시됩니다. 결제 없이 세션이 만료되면 시간대가 해제되어 다른 사람이 다시 예약할 수 있게 됩니다.

---
*원문 최종 수정: Wed, 2 Apr, 2025 at 3:53 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*