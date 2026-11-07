---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002684-calendar-widget-reorder
번역일: 2026-11-07
카테고리: 04-캘린더-예약
---

# 캘린더 위젯 순서 바꾸기

캘린더 위젯의 단계 순서를 원하는 대로 바꾸는 방법을 안내해요. 날짜·시간 선택과 폼 중 무엇을 먼저 보여 줄지 정할 수 있어요.

[동영상](https://www.youtube.com/embed/uxgmdoSSeyw?&wmode=opaque)

## 개요

캘린더 위젯 순서 변경 기능을 쓰면 위젯의 단계 순서를 직접 정할 수 있어요. 단계는 날짜·시간 선택, 폼, 결제(켜져 있는 경우)예요. 날짜·시간 선택과 폼 중 무엇을 먼저 보여 줄지 고를 수 있고, 그에 따라 결제 단계의 위치도 정해져요.

예약이 완료되지 않더라도 리드 정보를 모으고 싶은 비즈니스에 알맞은 기능이에요.

## 위젯 순서 설정하기

{% hint style="info" %}
이 기능은 NEO 위젯에서만 쓸 수 있어요.
{% endhint %}

1. **캘린더 설정**으로 이동한 뒤 캘린더를 선택하세요.
2. **Forms & Payments**(폼 및 결제)로 이동하세요.
3. **Date & Time Selector**(날짜·시간 선택)와 **Form**(폼)을 끌어서 원하는 순서로 바꾸세요.
4. **저장**을 클릭해 변경 사항을 적용하세요.

![위젯 순서를 끌어서 바꾸는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033228393/original/W1Wjl3BvKXY4W6eHaM5x52W3zDd3SIQ_1A.gif?1726821747)

![폼 및 결제 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033227081/original/1Up6-h38-Rrg4ekTLUTJP_gknObR_N7I6A.png?1726821063)

![순서를 바꾼 뒤의 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033228666/original/FnKEyJbXO8jQIbbykBXI8WOPdQccSoffQw.png?1726821872)

## 어떻게 동작하나요?

#### 날짜 선택이 먼저이고 폼이 두 번째인 경우

- 처리: 사용자가 날짜를 고르고, 폼을 작성한 뒤, 미팅을 예약해요.
- 결과: 예약이 완료되고, 시스템에 연락처가 만들어지며, 폼이 제출돼요.

#### 폼이 먼저이고 날짜 선택이 두 번째인 경우

- 처리: 사용자가 먼저 폼을 작성해요.
- 결과: 폼을 제출하면 바로 시스템에 연락처가 만들어져요. 이후 두 번째 단계에서 예약에 성공하면 시스템에 예약이 만들어져요.

## 결제는 어떻게 처리되나요?

결제가 켜져 있으면 결제 상태에 따라 예약이 만들어져요.

#### 결제 과정

- 소요 시간: 사용자는 10분 안에 결제를 완료해야 해요.
- 결과:
  - 10분 안에 결제에 성공하면 예약이 완료돼요.
  - 10분 안에 결제하지 않으면 예약이 완료되지 않고, 선택했던 시간대가 다시 열려 다른 사람이 예약할 수 있어요.

## 캘린더 위젯 순서별 시나리오

1. 날짜 선택이 먼저이고 결제가 꺼져 있는 경우

![날짜 선택 먼저, 결제 꺼짐](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027905481/original/98hXW0y_j35qcQ00hkPZk1lUoWSLeM-cIA.png?1718858024)

---

2. 날짜 선택이 먼저이고 결제가 켜져 있는 경우

![날짜 선택 먼저, 결제 켜짐](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028841378/original/8Nu1uo6kB6dxGSZCn2jurojMPSm0iVR3Ww.png?1720417588)

---

3. 폼이 먼저이고 결제가 꺼져 있는 경우

![폼 먼저, 결제 꺼짐](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027905523/original/M65oCDsCuRwVbakUevBLM4p9h285kJcrbQ.png?1718858147)

---

4. 폼이 먼저이고 결제가 켜져 있는 경우

![폼 먼저, 결제 켜짐](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027905548/original/PqcAkP-XW2o_eLeeoVx57Bt9q6a1DKTzjQ.png?1718858177)

## FAQ

### 사용자가 뒤로 가서 폼을 다시 제출하면 어떻게 되나요?
같은 세션 안에서 폼을 다시 제출하면 폼 제출 내역이 여러 개 표시돼요. 연락처에는 가장 최근에 제출한 내용이 업데이트돼요.

### 폼 제출 워크플로우는 어떻게 실행되나요?
폼이 먼저인 경우에는 폼을 제출하는 즉시 실행돼요. 폼이 두 번째인 경우에는 예약에 성공했을 때만 실행돼요.

### 예약 워크플로우는 어떻게 실행되나요?
결제가 꺼져 있으면 예약이 완료되는 즉시 실행돼요. 결제가 켜져 있으면 결제가 성공적으로 끝난 뒤에 실행돼요. 결제 상태가 성공일 때만 예약이 완료되기 때문이에요.

### 예약 위젯에 시간대가 보이지 않는데, 같은 시간에 잡힌 예약도 없어요. 왜 그런가요?
다른 사람이 위젯에서 시간대를 선택했지만 아직 결제를 마치지 않은 경우일 수 있어요. 이럴 때는 해당 시간대가 10분 동안 보류돼요. 그 사이에 결제가 끝나면 예약이 완료되고 **캘린더 보기**에 표시돼요. 결제 없이 세션이 만료되면 시간대가 풀려서 위젯에 다시 나타나고, 다른 사람이 예약할 수 있어요.
