---
원문: /support/solutions/articles/48001202723-workflow-action-set-event-start-date
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Set Event Start Date(이벤트 시작 날짜 설정)

**Set Event Start Date/Time**(이벤트 시작 날짜/시간 설정) 액션은 워크플로우 안에서 이벤트 날짜와 시간을 기준점으로 정해 두는 액션이에요. 이 기준점을 바탕으로 작업과 알림 시점을 정확하게 맞출 수 있어서, 웨비나·컨퍼런스를 운영하거나 개인별 알림을 보낼 때 유용해요.

---

## Set Event Start Date 단계란?

**Set Event Start Date/Time** 액션은 워크플로우의 다음 단계들이 기준으로 삼을 특정 날짜와 시간을 정하는 액션이에요. 특정 이벤트의 전이나 후에 실행해야 하는 작업, 알림, 액션을 예약할 때 특히 유용해요.

이 액션을 설정한 뒤 워크플로우의 **Wait**(대기) 단계에서 **Wait for Event/Appointment Time**(이벤트/예약 시간까지 대기)을 쓰면, 이벤트 날짜를 기준으로 정한 시점까지 실행을 멈출 수 있어요. 예를 들어 이벤트 며칠 전에 알림을 보내거나, 이벤트가 끝나고 며칠 뒤에 후속 액션을 실행하도록 만들 수 있어요.

일정 관리를 자동화할 수 있어서 웨비나, 컨퍼런스, 미팅, 이벤트를 운영할 때 특히 도움이 돼요.

---

## 이 기능을 쓰면 좋은 점

**Set Event Start Date/Time** 액션은 워크플로우와 이벤트를 관리할 때 다음과 같은 장점이 있어요.

- 자동 일정 관리: 이벤트를 기준으로 한 특정 시점에 작업, 알림, 이메일이 자동으로 실행돼요. 수작업이 크게 줄고 빠뜨리는 일이 없어요.
- 제때 알림: 웨비나나 컨퍼런스를 운영한다면 이벤트 시작 며칠 전 또는 몇 시간 전에 참석자에게 알림을 자동으로 보낼 수 있어요. 참여율과 참석률을 높이는 데 도움이 돼요.
- 후속 조치: 이벤트가 끝난 뒤의 후속 작업이나 커뮤니케이션도 예약할 수 있어요. 예를 들어 이벤트 며칠 뒤에 설문이나 감사 이메일을 자동으로 보낼 수 있어요.
- 유연성: 특정 날짜에만 쓸 수 있는 건 아니에요. 날짜와 관련된 어떤 필드와도 함께 쓸 수 있어서, 갱신일이나 생일처럼 고객마다 다른 날짜를 기준으로 작업을 실행할 수 있어요.
- 반복 이벤트: 반복되는 이벤트도 처리할 수 있어요. 예를 들어 매주 웨비나를 연다면 매주 알림을 자동으로 보내고, 그다음 주로 이벤트 날짜를 다시 설정하도록 워크플로우를 만들 수 있어요.
- 시간 지정 액션: 소셜 미디어 게시물이나 세일 공지처럼 정해진 시간에 실행해야 하는 액션도 정확하게 예약할 수 있어요.

---

## 활용 예시

- 웨비나 관리: **Set Event Start Date/Time** 액션으로 웨비나 날짜와 시간을 정해요. 그다음 **Wait for Event/Appointment Time** 단계를 추가해 웨비나 1주일 전, 하루 전, 1시간 전에 알림 이메일을 보내요. 이벤트 하루나 이틀 뒤에는 참가자에게 감사 인사와 추가 자료를 담은 후속 이메일을 보내도록 설정할 수 있어요.
- 구독 갱신: 매년 갱신하는 서비스라면 고객별 갱신일이 담긴 날짜형 커스텀 필드와 이 액션을 함께 쓸 수 있어요. **Wait for Event/Appointment Time** 단계로 갱신일 한 달 전, 1주일 전, 하루 전에 알림을 보내 갱신을 안내하고 필요한 방법을 알려 주세요.
- 컨퍼런스 준비: 컨퍼런스 날짜를 이벤트 시작 날짜로 정하고, **Wait for Event/Appointment Time** 단계로 얼리버드 등록 알림, 티켓 구매 알림, 행사 일정 안내, 막판 공지 같은 커뮤니케이션을 자동화해요.
- 생일 프로모션: 고객 생일에 특별 프로모션을 제공한다면 고객별 생일 커스텀 필드와 이 액션을 함께 쓰세요. **Wait for Event/Appointment Time** 단계를 설정해 생일 축하 인사와 생일 할인 혜택을 보낼 수 있어요.
- 상품 출시: 신상품을 출시한다면 출시일을 이벤트 시작 날짜로 정해요. **Wait for Event/Appointment Time** 단계를 여러 개 설정해 출시 전 티저 이메일, 출시 당일 공지, 출시 후 후속 안내를 차례로 보낼 수 있어요.
- 교육 세션: 교육 세션을 운영한다면 **Set Event Start Date/Time** 액션으로 세션 시작 시점을 표시해요. 그다음 **Wait for Event/Appointment Time** 단계로 세션 상세 안내, 며칠 전 알림, 시작 1시간 전 막판 알림을 보내요. 세션 녹화본이나 자료를 공유하는 후속 이메일도 예약할 수 있어요.
- 상품 체험: 무료 체험 기간이 있는 상품이나 서비스라면 체험 종료일을 이벤트 시작 날짜로 정해요. **Wait for Event/Appointment Time** 단계로 체험 종료 1주일 전, 3일 전, 하루 전에 알림을 보내 정식 버전 구매를 권해 보세요.
- 세일·프로모션: 세일이나 프로모션을 한다면 세일 시작 날짜/시간을 이벤트 날짜로 정해요. **Wait for Event/Appointment Time** 단계로 티저 이메일 발송, 세일 시작, 세일 종료 직전 마지막 알림을 예약할 수 있어요.
- 연간 점검·정비: 냉난방 업체나 치과처럼 연간 점검이나 정비가 있는 업종이라면 고객별 다음 예약 날짜를 이벤트 시작 날짜로 정해요. **Wait for Event/Appointment Time** 단계로 다가오는 예약을 안내하고, 방문 뒤에는 후속 연락을 할 수 있어요.
- 프로젝트 마감: 마감일이 정해진 프로젝트를 관리한다면 **Set Event Start Date/Time** 액션으로 마감일을 표시해요. 그다음 **Wait for Event/Appointment Time** 단계로 마감 전에 팀에 알림이나 작업을 보낼 수 있어요.

---

## Event Start Date 액션 사용하기

### 1단계: 워크플로우에 Set Event Start Date/Time 액션 추가하기

1. 수정할 워크플로우를 열어요.
2. **Set Event Start Date/Time** 액션을 추가해요. 추가하면 액션 설정 화면이 열려요.

![워크플로우에 Set Event Start Date/Time 액션을 추가하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48298236538/original/CQ73SgBxJJ4mx2Wn1JhUOTNdi-ck_gfdWQ.png?1684431551)

### 2단계: 이벤트 시작 날짜/시간 설정하기

1. 유형을 고르세요. 보통 **Custom Field**(커스텀 필드), **Specific Date/Time**(특정 날짜/시간), **Specific Day**(특정 요일) 같은 옵션이 있어요.

   ![이벤트 시작 날짜/시간 유형을 고르는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48298236650/original/Aca3tWPydD_WpN01o-jc-xJOX28czVLPZA.png?1684431619)

2. **Custom Field**를 고르면, 미리 만들어 둔 날짜형 커스텀 필드 값으로 어떤 이벤트 날짜를 쓸지 워크플로우에 알려 줄 수 있어요.

   ![Custom Field로 이벤트 날짜를 지정하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48298236884/original/gwHSiCax_EfG1l7AxH6HluPYX1j0BQ6Gqg.png?1684431732)

3. 쓰려는 옵션을 고르고 필요한 정보를 입력해요. 예를 들어 특정 날짜와 시간을 고르면 이벤트의 정확한 날짜와 시간을 입력해야 해요.
4. 액션을 저장해 워크플로우에 추가해요.

{% hint style="info" %}
**Set Event Start Date/Time** 액션에는 보통 여러 가지 날짜·시간 형식을 쓸 수 있어요. 흔히 쓰는 형식은 다음과 같아요.
`MM-DD-YYYY HH:MM`: 월(MM), 일(DD), 연도(YYYY) 다음에 24시간제 시간(HH:MM)을 써요. 예를 들어 2021년 12월 21일 오전 8시 30분은 `12-21-2021 08:30`으로 써요.`DD-MMM-YYYY HH:MM`: 일(DD), 월 약어(MMM), 연도(YYYY) 다음에 24시간제 시간(HH:MM)을 써요. 예를 들어 2021년 10월 21일 오전 8시 30분은 `21-OCT-2021 08:30`으로 써요.
{% endhint %}

### 3단계: Wait for Event/Appointment Time 액션 추가하기

1. 이벤트 시작 날짜/시간을 설정한 뒤, 워크플로우에 **Wait for Event/Appointment Time** 액션을 추가해요.
2. 이벤트 시작 날짜/시간의 며칠, 몇 시간, 몇 분 전 또는 후까지 기다리도록 설정해요. 예를 들어 2일 전으로 설정하면, 워크플로우는 예정된 이벤트 시작 날짜 2일 전까지 기다렸다가 다음 액션을 실행해요.

   ![Wait for Event/Appointment Time 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48298238250/original/j45I8Z0GTEeu8JjGR65Qo_wAe5LKoJNigA.png?1684432283)

3. 액션을 저장해 변경 사항을 확정해요.

{% hint style="info" %}
**Wait for Event/Appointment Time** 액션에는 다음과 같은 추가 설정이 있어요.

- **Event / Appointment Time**(이벤트/예약 시간): 보통 **Set Event Start Date/Time** 액션으로 정한 이벤트나 예약과 연결되는 필드예요. **Wait for** 액션은 이 이벤트나 예약을 기준으로 정한 시점까지 기다려요.
- **UNTIL**(~까지)
  - **When**(시점): 다음 액션이 실행될 때까지 기다리는 시간을 설정해요. 개월, 일, 시간, 분 단위로 정할 수 있어요. 예를 들어 이벤트 시간 2일 3시간 전까지 기다리도록 설정할 수 있어요. 최대 한도를 넘는 값은 더 큰 시간 단위로 자동 변환돼요. 예를 들어 60분을 입력하면 1시간으로 바뀌어요.
- **IF THE TIMING OF THIS WAIT STEP IS ALREADY IN THE PAST, HOW SHOULD THE CONTACT PROCEED?**(이 대기 단계의 시점이 이미 지났다면 연락처를 어떻게 진행할까요?): 대기 시점이 이미 지났을 때 어떻게 처리할지 정해요. 보통 다음 옵션이 있어요.
  - **Move to the next step**(다음 단계로 이동): 대기를 건너뛰고 워크플로우의 다음 단계로 넘어가요.
  - **Move to a specific step**(지정한 단계로 이동): 대기를 건너뛰고 직접 지정한 단계로 이동해요.
  - **Skip all outbound communication actions, till next wait or Event Start Date action**(다음 대기 또는 Event Start Date 액션까지 모든 발신 커뮤니케이션 액션 건너뛰기): 이메일이나 SMS처럼 메시지를 보내는 액션을 모두 건너뛰고, 다음 **Wait for Event/Appointment Time** 또는 **Set Event Start Date/Time** 액션을 만나면 다시 진행해요.
{% endhint %}

이 액션들은 워크플로우 안에서 여러 번 쓸 수 있어요. **Wait for Event/Appointment Time** 액션을 여러 개 추가해서 이벤트 시작 날짜 앞뒤로 이어지는 일정을 만들어 보세요.

---

---

## 자주 묻는 질문

### 반복되는 이벤트에도 Set Event Start Date/Time 액션을 쓸 수 있나요?
보통은 쓸 수 있어요. 첫 번째 이벤트의 시작 날짜/시간을 설정한 다음, **Go To**(이동) 액션으로 워크플로우의 처음으로 되돌아가게 하면 이후 이벤트에도 반복해서 쓸 수 있어요.

### 한 워크플로우에 이벤트 시작 날짜/시간을 여러 개 설정할 수 있나요?
보통은 같은 워크플로우에 **Set Event Start Date/Time** 액션을 여러 개 추가할 수 있어요. 각 액션이 서로 다른 이벤트나 예약에 해당하도록 하고, 그에 맞는 **Wait for Event/Appointment Time** 단계를 추가하면 각 시작 날짜/시간을 기준으로 액션을 만들 수 있어요.

### 이벤트 시작 날짜/시간이 지난 뒤에 연락처가 워크플로우에 들어오면 어떻게 되나요?
**Wait for Event/Appointment Time** 액션의 설정에 따라 달라져요. **Move to the next step** 또는 **Move to a specific step**으로 설정했다면 연락처는 대기 액션을 건너뛰어요. **Skip all outbound communication actions, till next wait or Event Start Date action**으로 설정했다면, 다음 대기 액션이나 시작 날짜/시간 액션을 만날 때까지 발신 커뮤니케이션 단계를 건너뛰어요.

### Wait for Event/Appointment Time 액션 없이 Set Event Start Date/Time 액션만 써도 되나요?
기술적으로는 뒤에 **Wait for Event/Appointment Time** 액션 없이도 이벤트 시작 날짜/시간을 설정할 수 있지만, 그다지 쓸모가 없어요. **Set Event Start Date/Time** 액션의 주된 목적은 다른 액션이 참조할 기준 시점을 만드는 것이기 때문이에요.

### 워크플로우 설정이 연락처의 시간대를 따르도록 되어 있으면 Set Event Start Date/Time 액션은 어떻게 되나요?
워크플로우 설정이 연락처의 시간대를 따르도록 되어 있어도, **Set Event Start Date/Time** 액션은 연락처의 시간대와 상관없이 기본적으로 계정의 시간대를 사용해요. 이 동작은 **Set Event Start Date/Time** 액션에만 해당해요.
