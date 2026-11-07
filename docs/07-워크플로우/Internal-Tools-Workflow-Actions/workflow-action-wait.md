---
원문: /support/solutions/articles/155000002470-workflow-action-wait
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Wait(대기)

하이퍼클래스 워크플로우에서 다음 단계가 실행될 시점을 정하는 **Wait**(대기) 액션을 설명해요. 정해진 시간, 특정 날짜, 반복 일정, 예약 시점, 연락처나 팀원의 답장, 연락처의 행동, 사용자 지정 조건 중 하나를 골라 연락처를 기다리게 할 수 있어요.

## Wait 액션이란?

Wait 액션을 쓰면 자동화 안에서 타이밍을 직접 정할 수 있어요. 모든 메시지와 워크플로우 단계를 바로 실행하는 대신, 시간·이벤트·답장·행동·조건이 알맞아질 때까지 연락처를 기다리게 할 수 있어요.

Wait 액션은 연락처를 워크플로우 안에 이런 식으로 붙잡아 둘 수 있어요.

- 정해진 시간 동안 기다리기 (예: 1일, 1시간, 5분)
- 특정 날짜와 시간까지 기다리기 (예: 12월 4일 오전 9:00). 날짜와 시간은 직접 입력하거나 연락처 필드에서 가져올 수 있어요.
- 반복 일정에 맞춰 기다리기 (예: 매주 화요일, 매월 15일, 매년 1월 1일)
- 예약, 서비스 예약, 인보이스 만기일을 기준으로 기다리기 (예: 예약 1시간 전)
- 조건이 충족될 때까지 기다리기 (예: 연락처가 답장하거나 특정 이벤트가 일어날 때까지)
- 팀원이 연락처에게 답장할 때까지 기다리기. 선택 사항인 **Timeout**(시간 초과)을 설정하면 아무도 답하지 않을 때 워크플로우가 에스컬레이션할 수 있어요.
- 지정한 시간대에만 기다리기 (예: 평일 오전 9:00~오후 5:00)

이렇게 하면 커뮤니케이션과 워크플로우 단계가 알맞은 때에 실행돼서 효율이 오르고, 연락처의 경험도 좋아져요.

---

## Wait 액션을 쓰면 좋은 점

- 타이밍 개선: 메시지 발송, 작업 배정, 레코드 업데이트, 다음 단계 진행 전에 알맞은 시점까지 연락처를 기다리게 할 수 있어요.
- 더 알맞은 커뮤니케이션: 답장, 트리거 링크 클릭, 이메일 반응, 예약 시간, 인보이스 만기일, 사용자 지정 조건에 맞춰 후속 메시지를 보낼 수 있어요.
- 유연한 일정: 고정 지연, 특정 날짜, 반복 일정, 예약 기준 시점, 답장 대기, 행동 대기, 조건 대기를 모두 쓸 수 있어요.
- 동적 개인화: 커스텀 변수를 쓰면 날짜, 시간, 단위, 기간을 연락처 레코드에 따라 다르게 정할 수 있어요.
- 발송 시간 제어: 선택한 요일과 시간에만, 또는 추가 날짜 필터 조건이 맞을 때만 연락처를 재개할 수 있어요.
- 워크플로우 정리: 각 Wait 단계에 이름을 분명하게 붙여 두면 타이밍 로직을 검토하고 테스트하고 관리하기 쉬워요.
- AI 지원 편집: **Workflow AI Builder**(워크플로우 AI 빌더)를 쓰면 대화로 시간 지연, 시간대 설정, 답장 조건, 시간 초과 분기와 지원되는 대기 설정을 수정할 수 있어요.

---

## Wait 액션 설정 한눈에 보기

다음 표에 Wait 액션에서 쓸 수 있는 모든 설정이 있어요.

| 대기 대상 | 설명 | 세부 설정 |
| --- | --- | --- |
| **A set period of time**(설정한 기간) | 정해진 시간 동안 연락처를 붙잡아 둔 뒤 다음 단계로 보내요. | 1. **Time period and Unit**(기간과 단위): seconds(초), minutes(분), hours(시간), days(일)<br>2. **Standard**(표준) 또는 **Dynamic**(동적) 값: Dynamic은 커스텀 변수를 받아요.<br>3. **Advance Window**(재개 시간 제한): **Resume On**(선택한 요일에 재개), **Resume Between Hours**(재개 가능 시간), **Additional Filter**(추가 필터) |
| **A specific date and time**(특정 날짜 및 시간) | 정확한 날짜와 시간까지 연락처를 붙잡아 둬요. 날짜는 고정값이거나 커스텀 변수에서 동적으로 가져올 수 있어요. | 1. **Date and time**(날짜 및 시간): 계정의 날짜 형식 설정을 따라요.<br>2. **Standard** 또는 **Dynamic** 값<br>3. **When should the Contact proceed**(연락처를 언제 진행할지): **On this date and time**(이 날짜와 시간에), **Before this date**(이 날짜 이전), **After this date**(이 날짜 이후)<br>4. **If this date has already passed**(이 날짜가 이미 지난 경우): **Continue to next action**(다음 액션으로 계속), **Exit Contact from automation**(자동화에서 연락처 제외), **Go to specific step**(특정 단계로 이동), **Skip all outbound communication actions till next wait or event start date action**(다음 대기 또는 이벤트 시작일 액션 전까지 모든 발신 커뮤니케이션 액션 건너뛰기) |
| **A recurring schedule**(반복 일정) | 매주 화요일, 매월 15일, 매년 1월 1일처럼 반복되는 날짜 패턴의 다음 차례가 올 때까지 연락처를 붙잡아 둬요. | 1. **Frequency**(반복 주기): **Weekly**(매주), **Monthly**(매월), **Yearly**(매년)<br>2. **Weekly**: **On these days**(선택한 요일에), 일요일~토요일, **Time**(시간)<br>3. **Monthly**: 매월 특정 일 또는 선택한 달의 N번째 요일, 그리고 Time<br>4. **Yearly**: **On this date every year**(매년 이 날짜에), 그리고 Time<br>5. **When should the Contact proceed**: On this date and time, Before this date, After this date<br>6. **Live preview**(실시간 미리보기): 다음 예정된 반복 5건을 보여 줘요. |
| **An upcoming appointment or booking**(다가오는 예약) | 예약, 서비스 예약, 인보이스 만기일의 이전·당시·이후까지 연락처를 붙잡아 둬요. | 1. **Type**(유형): **Appointment / Calendar Event**(예약 / 캘린더 이벤트), **Service Booking**(서비스 예약), **Invoice Due Date**(인보이스 만기일)<br>2. **When should the Contact proceed**: **At the scheduled time**(예정된 시간에), **Before**(이전), **After**(이후). Before / After를 고르면 개월, 일, 시간, 분 단위로 기간을 입력해요.<br>3. **If this date has already passed**: Continue to next action, Go to specific step, Exit Contact from automation, Skip all outbound communication actions till next wait or event start date action |
| **The contact to reply**(연락처의 답장) | 연락처가 선택한 채널(SMS, Email 등)로 답장할 때까지 붙잡아 둬요. | 1. **Reply To**(답장 채널): SMS, Email 등<br>2. **Timeout**(시간 초과) 켜기/끄기와 기간 |
| **The contact to take an action**(연락처의 행동) | 연락처가 트리거 링크를 클릭하거나 보낸 이메일에 반응할 때까지 붙잡아 둬요. | 1. **What action**(어떤 행동): **Clicks a trigger link**(트리거 링크 클릭), 또는 열람·클릭·반송 같은 **Email event**(이메일 이벤트)<br>2. **Trigger link or email step selection**(트리거 링크 또는 이메일 단계 선택)<br>3. Timeout 켜기/끄기와 기간 |
| **Specific conditions to be met**(충족해야 할 특정 조건) | 어떤 필드로든 만든 사용자 지정 세그먼트가 참이 될 때까지 연락처를 붙잡아 둬요. | 1. **AND**(그리고) / **OR**(또는) 로직으로 연결한 Condition이 들어 있는 세그먼트<br>2. **Add Segment**(세그먼트 추가) / **Add Condition**(조건 추가) 컨트롤<br>3. Timeout 켜기/끄기와 기간 |
| **A user to reply**(사용자의 답장) | 팀원이 선택한 채널로 연락처에게 답장할 때까지 연락처를 붙잡아 둬요. 연락처가 먼저 메시지를 보낸 뒤에 배치하면 담당자가 답하는지 확인하기 좋아요. | 1. **Reply channel**(답장 채널): SMS, Email 등<br>2. **Which user**(어떤 사용자, 선택 사항): 연락처에 배정된 사용자 또는 특정 사용자<br>3. Timeout 켜기/끄기와 기간 |

---

## 언제 Wait 액션을 쓰나요?

지연, 일정, 예약, 고객 행동, 사용자 지정 조건에 따라 워크플로우 타이밍이 달라져야 할 때 Wait 액션이 유용해요. 자동화가 각 연락처의 흐름에 맞춰 알맞은 때에 움직이는 느낌을 줄 수 있어요.

- 적시 후속 조치: 고객 문의에 빠르게 답하거나, 알맞은 시점에 이메일이나 SMS를 보내요.
- 조건부 실행: 폼 작성이나 결제처럼 특정 조건이 충족될 때까지 연락처를 기다리게 해요.
- 발송 시간 제어: 지정한 시간에만 워크플로우를 재개해서 업무 시간 외나 주말에 메시지가 나가지 않게 해요.
- 날짜 기반 알림: 갱신일, 계약 만료일, 기념일처럼 특정 날짜까지 기다려요. 날짜는 연락처의 커스텀 변수에서 바로 가져올 수 있어요.
- 반복 접점: 매주 월요일 아침, 매월 1일, 매년 공휴일에 한 번처럼 일정한 주기로 연락처에게 다가가요.
- 예약 전 알림: 예약, 서비스 예약, 인보이스 만기일의 일정 시간 전에 리마인더를 보내요.
- AI 지원 워크플로우 편집: **Workflow AI Builder**를 쓰면 대화로 Wait 액션을 수정할 수 있어요. 시간 지연, 시간대 설정, 답장 조건을 바꾸고, 시간 초과 분기를 추가하거나 제거하고, 직접 설정 화면으로 옮겨 가지 않고도 대기 유형을 바꿀 수 있어요.
- 응답 시간 SLA: 팀원이 연락처에게 답장할 때까지 기다리다가, 제한 시간 안에 아무도 답하지 않으면 소유자에게 알리는 등 에스컬레이션 분기로 이어가요.

---

## Wait 액션 설정하기

Wait 액션을 잘 설정하면 연락처가 의도한 시점에 정확히 멈췄다가 다시 진행해요. 액션 이름을 분명하게 붙이고, 알맞은 대기 유형을 고르고, 대비 동작을 설정하고, 게시 전에 워크플로우를 테스트하면 타이밍 문제를 미리 막을 수 있어요.

1. **자동화**(Automation)로 이동해요.
2. **워크플로우**를 클릭해요.
3. 오른쪽 위의 **+ Create Workflow**(워크플로우 만들기)를 클릭해요.
4. **+ 처음부터 시작**을 선택해요.

    ![워크플로우를 처음부터 시작하는 화면](https://jumpshare.com/share/5PRMelVSQRAJ9MFMc0st+/Screen+Shot+2026-05-11+at+16.06.21.png)
5. 워크플로우의 트리거를 설정해요. 예를 들어 트리거로 **Contact created**(연락처가 생성됨)를 선택해요.
6. **+** 아이콘을 클릭해 새 워크플로우 단계를 추가해요.
7. 액션 메뉴에서 아래로 스크롤하거나 **Wait**를 검색해요.
8. **Wait** 액션을 선택해요.
9. 액션 이름을 알아보기 쉽게 지어요. 예: "Wait - 가입 1일 후". 나중에 워크플로우를 검토할 때 Wait 단계를 찾기 쉬워요.
10. 연락처가 무엇을 기다릴지 선택해요. Wait 액션을 열면 선택 화면이 나오고, 일곱 가지 옵션이 보여요.
    - **A set period of time**: 예: 2일, 6시간, 30분
    - **A specific date and time**: 예: 12월 4일 오전 9:00
    - **A recurring schedule**: 예: 매주 화요일 또는 매월 15일
    - **An upcoming appointment or booking**: 예: 예약 1시간 전
    - **The contact to reply**: SMS, Email 등 지원되는 채널에서 답장을 기다려요.
    - **The contact to take an action**: 예: 링크를 클릭하거나 이메일을 열 때까지
    - **Specific conditions to be met**: 어떤 필드로든 사용자 지정 세그먼트를 만들어요.
    - **A user to reply**: 팀원이 지원되는 채널에서 연락처에게 답장할 때까지 기다려요.
11. 선택한 옵션에 맞게 설정을 입력해요.
12. **Publish**(게시)와 **Save**(저장)를 클릭해요.

    ![Wait 액션을 설정하고 저장하는 과정](https://jumpshare.com/share/OHCFl0vweBsGJERcMSb1+/GIF+Recording+2026-05-13+at+15.15.34.gif)

{% hint style="info" %}
Wait 액션이 SMS, Email, WhatsApp 같은 발송(Send) 액션 바로 뒤에 있으면 **The contact to reply**가 목록 맨 위로 올라와서 찾기 쉬워요.
{% endhint %}

{% hint style="info" %}
워크플로우 트리거가 예약 기반이면 **An upcoming appointment or booking**에 트리거 예약을 안내하는 배너가 나타나요.
{% endhint %}

---

## 설정한 기간 기다리기 (A set period of time)

모든 연락처가 같은 시간만큼 기다려야 하거나, 대기 시간을 커스텀 변수로 계산하고 싶을 때 알맞아요.

1. **A set period of time**을 선택해요.
2. **Time period**를 입력해요. 예: 1, 5, 30
3. **Unit**을 선택해요. seconds(초), minutes(분), hours(시간), days(일) 중에서 골라요.
4. **Time period** 또는 **Unit** 옆의 점 세 개 메뉴로 입력 방식을 바꿀 수 있어요.

   - **Standard**: 직접 입력하는 고정값이에요.
   - **Dynamic**: 실행 시점에 값이 정해지는 커스텀 변수예요.
5. 연락처가 재개할 수 있는 시점을 제한하려면 **Advance Window**를 켜요.
6. 필요에 맞게 Advance Window 옵션을 설정해요.

   - **Resume On**: 특정 요일을 선택해요.
   - **Resume Between Hours**: 시간대나 정확한 시작 시간을 정해요.
   - **Additional Filter**: 특정 일, 월, 연도 같은 세부 날짜 조건을 추가해요.
7. **Save**를 클릭해 Wait 단계를 저장해요.

![설정한 기간을 기다리도록 설정하는 과정](https://jumpshare.com/share/sqi06rXJjmsOh5jNrMyU+/GIF+Recording+2026-05-13+at+15.19.10.gif)

---

## 특정 날짜 및 시간까지 기다리기 (A specific date and time)

리마인더, 갱신, 기념일, 계약일처럼 알려진 날짜 즈음에 실행해야 하는 단계에 알맞아요.

1. **A specific date and time**을 선택해요.
2. 연락처가 기다릴 정확한 **Date and time**을 선택해요. 선택기는 계정의 날짜 형식 설정을 따라요.
3. 필드 옆의 점 세 개 메뉴로 입력 방식을 바꿀 수 있어요.

   - **Standard**: 직접 고른 고정 날짜예요.
   - **Dynamic**: 실행 시점에 연락처 필드에서 날짜를 읽어 오는 커스텀 변수예요.
4. **Dynamic**을 쓰면, 실행 시점에 올바른 날짜가 되는 커스텀 변수를 입력해요.
5. **When should the Contact proceed?** 아래에서 선택해요.

   - **On this date and time**
   - **Before this date**
   - **After this date**
6. **Before this date** 또는 **After this date**를 고르면, 연락처가 진행할 시점을 기간으로 입력해요.
7. **If this date has already passed** 아래에서 선택해요.

   - **Continue to next action**
   - **Exit Contact from automation**
   - **Go to specific step**
   - **Skip all outbound communication actions till next wait or event start date action**
8. **Save**를 클릭해 Wait 단계를 저장해요.

![특정 날짜 및 시간을 설정하는 과정](https://jumpshare.com/share/UOcPEx0VaDNDoi4QYsH8+/GIF+Recording+2026-05-13+at+15.26.22.gif)

---

## 반복 일정에 맞춰 기다리기 (A recurring schedule)

반복 일정은 매주, 매월, 매년처럼 계속 이어지는 접점에 알맞아요. 반복 시점마다 워크플로우를 따로 만들 필요가 없어요.

1. **A recurring schedule**을 선택해요.
2. **Frequency**를 선택해요.

   - **Weekly**
   - **Monthly**
   - **Yearly**
3. **Weekly**는 **On these days**에서 요일을 하나 이상 선택한 뒤 시간을 골라요.
4. **Monthly**는 둘 중 하나를 선택해요.

   - 매월 특정 일 (예: Day 1, Day 15)
   - 선택한 달의 첫째, 둘째, 셋째, 넷째 또는 마지막 요일
5. **Monthly**는 일정이 실행될 달을 하나 이상 선택하고 시간을 골라요.
6. **Monthly**는 필요하면 첫째·셋째 화요일처럼 여러 순서를 함께 지정할 수 있어요.
7. **Yearly**는 **On this date every year**에서 월과 일을 선택한 뒤 시간을 골라요.
8. **When should the Contact proceed?** 아래에서 선택해요.

   - **On this date and time**
   - **Before this date**
   - **After this date**
9. 화면 아래의 **Next 5 scheduled recurrences** 미리보기로 일정이 맞는지 확인해요.
10. **Save**를 클릭해 Wait 단계를 저장해요.

![반복 일정을 설정하는 과정](https://jumpshare.com/share/ggSmwtXMbZsL2jNRGnw2+/GIF+Recording+2026-05-13+at+15.32.14.gif)

---

## 다가오는 예약 기준으로 기다리기 (An upcoming appointment or booking)

예약된 일정을 기준으로 실행해야 하는 리마인더, 후속 조치, 만기일 워크플로우, 고객 커뮤니케이션에 알맞아요.

1. **An upcoming appointment or booking**을 선택해요.
2. **Type**을 선택해요.

   - **Appointment / Calendar Event**
   - **Service Booking**
   - **Invoice Due Date**
3. 서브 계정에서 서비스 예약이 꺼져 있으면 **Service Booking**은 보이지 않아요.
4. **When should the Contact proceed?** 아래에서 선택해요.

   - **At the scheduled time**
   - **Before**
   - **After**
5. **Before** 또는 **After**를 고르면 개월, 일, 시간, 분 단위로 기간을 입력해요.
6. **If this date has already passed** 아래에서 선택해요.

   - **Continue to next action**
   - **Go to specific step**
   - **Exit Contact from automation**
   - **Skip all outbound communication actions till next wait or event start date action**
7. **Save**를 클릭해 Wait 단계를 저장해요.

![예약 기준 대기를 설정하는 과정](https://jumpshare.com/share/6UPK7HQEk0yyMiG6wM82+/GIF+Recording+2026-05-13+at+15.33.44.gif)

---

## 연락처의 답장 기다리기 (The contact to reply)

연락처가 메시지에 답하는지에 따라 다음 단계가 달라져야 할 때 알맞아요.

1. **The contact to reply**를 선택해요.
2. **Reply To** 채널을 선택해요. 예: SMS, Email (이 Wait 단계보다 앞에 **Send Email**(이메일 보내기) 또는 **Send SMS**(SMS 보내기) 액션이 있어야 해요.)
3. 답장이 없어도 정해진 시간이 지나면 연락처를 다음으로 보내려면 **Timeout**을 켜요.
4. Timeout을 켰다면 시간 초과 기간을 설정해요.
5. **Save**를 클릭해 Wait 단계를 저장해요.

![연락처의 답장 대기를 설정하는 과정](https://jumpshare.com/share/Nr9ROITt94cSMF3Kyap0+/GIF+Recording+2026-05-13+at+15.37.55.gif)

---

## 연락처의 행동 기다리기 (The contact to take an action)

트리거 링크 클릭이나 이메일 열람·클릭·반송 같은 반응에 워크플로우가 대응해야 할 때 알맞아요.

1. **The contact to take an action**을 선택해요.
2. 행동을 선택해요.

   - **Clicks a trigger link**
   - **Email event**: 열람, 클릭, 반송 등 지원되는 이메일 이벤트
3. 트리거 링크 또는 이메일 단계를 선택해요.
4. 행동이 일어나지 않아도 정해진 시간 뒤에 연락처를 다음으로 보내려면 **Timeout**을 켜요.
5. Timeout을 켰다면 시간 초과 기간을 설정해요.
6. **Save**를 클릭해 Wait 단계를 저장해요.

![연락처의 행동 대기를 설정하는 과정](https://jumpshare.com/share/KtsYVGTmkuZJAbPqtjQu+/GIF+Recording+2026-05-13+at+15.59.54.gif)

---

## 특정 조건 충족 기다리기 (Specific conditions to be met)

특정 규칙, 선별 기준, 참여 행동, 필드 값에 맞을 때만 연락처가 계속 진행해야 할 때 알맞아요.

1. **Specific conditions to be met**를 선택해요.
2. **Add Condition**으로 개별 규칙을 만들어요.
3. **Add Segment**로 규칙을 묶은 로직 블록을 만들어요.
4. **AND/OR** 로직으로 조건을 연결해요.
5. 필요한 만큼 세그먼트와 조건을 추가해요.
6. 세그먼트 중 하나라도 참이 되면 연락처가 바로 다음으로 넘어가요.
7. 어느 세그먼트도 충족되지 않을 때 정해진 시간 뒤에 연락처를 내보내려면 **Timeout**을 켜요.
8. Timeout을 켰다면 시간 초과 기간을 설정해요.
9. **Save**를 클릭해 Wait 단계를 저장해요.

![특정 조건 충족 대기를 설정하는 과정](https://jumpshare.com/share/JJ9zN60IrSloQdnspcqh+/GIF+Recording+2026-05-13+at+15.48.21.gif)

---

## 사용자의 답장 기다리기 (A user to reply)

팀원이 연락처에게 답하는지에 따라 다음 단계가 달라져야 할 때 알맞아요. 예를 들어 응답 시간 SLA를 확인하고, 아무도 답하지 않으면 에스컬레이션할 수 있어요.

1. **A user to reply**를 선택해요.
2. **Reply channel**을 선택해요. 예: SMS, Email
3. 필요하면 **Which user**로 어떤 사용자의 답장을 기다릴지 정해요. 연락처에 배정된 사용자 또는 특정 사용자를 지정할 수 있어요. 비워 두면 모든 사용자의 답장을 받아들여요.
4. 사용자가 아무도 답하지 않아도 정해진 시간 뒤에 연락처를 다음으로 보내려면 **Timeout**을 켜요. 에스컬레이션할 때는 이 분기를 사용해요.
5. Timeout을 켰다면 시간 초과 기간을 설정해요.
6. **Save**를 클릭해 Wait 단계를 저장해요.

{% hint style="info" %}
대기는 사용자가 답장을 보낸 순간이 아니라, 그 답장이 전달된 시점에 끝나요.
{% endhint %}

![사용자의 답장 대기를 설정하는 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155075541164/original/Wu6q92VyhaeGimnHmw5C-W4ObBpAtbIOTw.gif?1783523644)

---

## Wait 액션 활용 예시

실제 사례를 보면 어떤 Wait 옵션을 골라야 할지 알기 쉬워요. 고정 지연, 반복 일정, 타이밍을 맞춘 후속 메시지가 흔한 커뮤니케이션 워크플로우에서 어떻게 쓰이는지 살펴보세요.

### 예시 1: 가입 후 웰컴 이메일

시나리오: 새 고객이 웹사이트에서 가입해요.

1. 트리거: 새 연락처가 추가되면 자동화가 시작돼요.
2. 대기: 이메일을 보내기 전에 1시간 기다려요.
3. 액션: 개인에게 맞춘 웰컴 이메일을 보내요.

결과: 새 고객이 브랜드를 둘러볼 시간을 잠깐 가진 뒤 이메일을 받아요. 그래서 이메일이 더 세심하고 의도적으로 느껴져요.

![가입 후 웰컴 이메일 워크플로우 예시](https://jumpshare.com/share/zyac4ir1cDTDQl1d53fz+/Screen+Shot+2026-05-13+at+15.51.19.png)

### 예시 2: 코스 가입 후 감사 이메일

시나리오: 리드가 뉴스레터를 구독해요.
1. 트리거: 코스에 새로 가입하면 자동화가 시작돼요.
2. 대기: 첫 이메일을 보내기 전에 2분 기다려요.
3. 액션: 최신 뉴스레터 링크를 넣어 "가입해 주셔서 감사합니다" 이메일을 보내요.

결과: 짧은 지연 덕분에 이메일이 기계적이거나 즉각적으로 보이지 않고, 더 사람다운 경험을 줄 수 있어요.

![코스 가입 후 감사 이메일 워크플로우 예시](https://jumpshare.com/share/Qmyq09uICWa5qTcfxY8I+/Screen+Shot+2026-05-13+at+15.54.17.png)

### 예시 3: 장바구니 이탈 회복

시나리오: 고객이 장바구니에 상품을 담고 구매를 끝내지 않아요.

1. 트리거: 장바구니가 20분 동안 이탈 상태로 있어요.
2. 대기: 고객이 다시 생각할 시간을 주려고 10분 기다려요.
3. 액션: 할인 혜택을 담은 부드러운 리마인더 이메일을 보내요.

결과: 적절한 시점에 보낸 후속 메시지가 전환 가능성을 높여요.

### 예시 4: 매월 멤버십 갱신 알림

1. 시나리오: 멤버십 사이트에서 활성 멤버에게 매월 1일에 알림을 보내려고 해요.
2. 트리거: 연락처에 Active Members 태그가 추가돼요.
3. 대기: **A recurring schedule**을 쓰고 **Monthly** > Day 1, 오전 9:00으로 설정해요.
4. 액션: 월간 요약 이메일과 SMS 리마인더를 보내요.

결과: 멤버들이 매월 같은 날 일정한 접점을 받아요. 주기마다 워크플로우를 따로 관리할 필요가 없어요.

### 예시 5: 담당자가 답장하지 않으면 에스컬레이션(SLA)

1. 시나리오: 연락처가 메시지를 보내면 팀원이 5분 안에 답하길 바라요.
2. 트리거: 연락처가 메시지를 보내면 자동화가 시작돼요. 예: **Customer Replied**(고객 답장함)
3. 대기: **A user to reply**를 추가하고 **Timeout**을 5분으로 설정해요.
4. 액션: 시간 초과 분기에서 소유자나 매니저에게 알리고 후속 작업을 만들어요.

결과: 담당자에게 답할 시간이 잠깐 주어지고, 답하지 않은 건은 자동으로 에스컬레이션돼요.

---

## 자주 묻는 질문

### 연락처가 이미 Wait 액션에 있을 때 워크플로우를 수정하면 어떻게 되나요?

이미 Wait 액션에 있는 연락처는 기존 대기를 그대로 유지해요. Wait 액션을 바꿔도 이미 그 단계에 있는 연락처의 대기에는 반영되지 않아요.

Wait 액션 뒤 단계를 바꾸면, 해당 연락처가 워크플로우를 이어서 진행할 때 변경 사항이 적용될 수 있어요. 기존 액션의 수정과 새로 추가한 액션이 모두 포함돼요.

### Wait 액션에서 세그먼트와 조건은 뭐가 다른가요? 어떻게 쓰나요?

조건은 개별 규칙이에요. 예를 들면 "연락처의 직함이 CEO", "연락처에 High-Value 태그가 있음" 같은 규칙이에요. 세그먼트는 이런 조건을 AND/OR 로직으로 묶어 함께 판단하는 그룹이에요. 세그먼트 중 하나라도 충족되면 연락처는 Wait 단계에서 나가요.

예를 들어 참여도가 높거나 특정 기준을 충족한 연락처를 다음으로 보내고 싶을 수 있어요. Segment 1은 연락처가 제안 이메일을 열었고 의사결정자인지 확인하고, Segment 2는 전략 통화에 참석했고 승인된 예산이 있는지 확인할 수 있어요. 둘 중 하나만 충족해도 대기가 끝나요. 그래서 서로 다르지만 똑같이 적합한 행동을 모두 다룰 수 있어요.

### 이벤트·예약 기반 Wait 단계에 도착했는데 이벤트 시간이 이미 지났으면 어떻게 되나요?

연락처가 Wait 단계에 도착했을 때 이벤트나 예약 시간이 이미 지났으면, 워크플로우는 선택해 둔 **If this date has already passed** 옵션대로 움직여요.

- **Continue to next action**: 대기를 건너뛰고 다음 액션으로 이어가요.
- **Go to specific step**: 선택한 단계로 이동해요.
- **Exit Contact from automation**: 연락처를 워크플로우에서 제외해요.
- **Skip all outbound communication actions till next wait or event start date action**: 다음 대기 또는 이벤트 시작일 액션 전까지 **Email**, **SMS**, **Call**, **Voicemail**(이메일, SMS, 통화, 음성 메시지) 액션을 건너뛰어요.

### 여러 세그먼트에 서로 충돌하는 조건이 있으면 어느 세그먼트가 우선인가요?

**Specific conditions to be met** 단계의 세그먼트는 모두 각각 독립적으로 평가돼요. 우선순위가 있는 세그먼트는 없어요. 세그먼트끼리 조건이 충돌하더라도, 하나라도 참이 되는 순간 워크플로우가 다음으로 넘어가요. 세그먼트끼리는 OR 관계라서 처음으로 참이 된 세그먼트가 대기를 끝내요.

예시:

- Segment 1: Tag = VIP (태그가 VIP)
- Segment 2: Tag does not equal VIP AND Email Opened = True (태그가 VIP가 아니고 이메일을 열었음)

연락처가 둘 중 하나에 해당하면 대기가 끝나요.

### 날짜나 기간은 Standard와 Dynamic 중 어느 쪽을 써야 하나요?

모든 연락처에 같은 고정값을 적용할 때는 **Standard**를 써요. 예를 들어 모든 연락처를 2일 동안 기다리게 하거나, 모든 연락처를 12월 4일 오전 9:00에 내보낼 때예요. 연락처마다 값이 달라야 할 때는 **Dynamic**을 써요. 연락처 레코드에 저장된 갱신일에 맞춰 내보내거나, 요금제마다 다른 일수만큼 기다리게 하는 경우예요. Dynamic은 올바른 날짜, 시간, 숫자가 되는 커스텀 변수라면 무엇이든 받아요.

### 반복 일정은 어떤 차례를 기다릴지 어떻게 정하나요?

연락처가 반복 일정 Wait 단계에 도착하면, 시스템이 설정한 일정(Weekly, Monthly, Yearly)을 확인해서 다음으로 일치하는 차례에 연락처를 내보내요. 액션 안의 **Next 5 scheduled recurrences** 패널에서 워크플로우 시간대 기준으로 어떤 날짜가 쓰일지 정확히 볼 수 있어서, 저장하기 전에 일정을 확인할 수 있어요.

### An upcoming appointment or booking의 Appointment / Calendar Event, Service Booking, Invoice Due Date는 뭐가 다른가요?

- **Appointment / Calendar Event**: 연락처에 연결된 예약이나 캘린더 이벤트를 기준으로 기다려요.
- **Service Booking**: 서비스 예약을 기준으로 기다려요. 서브 계정에서 서비스 예약이 꺼져 있으면 이 옵션은 보이지 않아요.
- **Invoice Due Date**: 연락처의 인보이스 만기일을 기준으로 기다려요. 만기 전 리마인더나 만기 후 후속 조치에 유용해요.

### 옵션 순서가 가끔 바뀌는 이유는 뭔가요?

선택 화면은 상황에 맞춰 가장 관련 있는 옵션을 먼저 보여 줘요. Wait 액션이 SMS, Email, WhatsApp 같은 발송(Send) 액션 바로 뒤에 있으면 **The contact to reply**가 맨 위로 올라와서 찾기 쉬워요. 순서와 상관없이 모든 옵션은 항상 쓸 수 있어요.

### Workflow AI Builder로 Wait 액션을 수정할 수 있나요?

네, 가능해요. **Workflow AI Builder**는 대기 설정, 시간 초과 분기, 지원되는 대기 구성을 대화로 수정할 수 있어요. AI로 편집하는 방법은 [Workflow AI Builder](../기타/workflow-ai-builder.md)를 참고하세요.

### "The contact to reply"와 "A user to reply"는 뭐가 다른가요?

**The contact to reply**는 연락처가 내게 답장할 때까지 기다려요. **A user to reply**는 팀원이 연락처에게 답장할 때까지 기다려요. 팀의 누군가가 답했는지 알아야 하는 응답 시간 SLA나 에스컬레이션에는 **A user to reply**를 쓰세요.
