---
원문: /support/solutions/articles/48001238249-guide-to-date-time-formatter-workflow-action
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Date/Time Formatter(날짜/시간 포맷터)

**Date/Time Formatter**(날짜/시간 포맷터) 액션은 워크플로우 안에서 날짜나 날짜·시간의 형식을 바꾸거나, 두 날짜를 비교해 일수 차이를 구할 때 쓰는 액션이에요. 다른 앱이나 데이터베이스, 이메일·SMS·Slack 같은 채널에 맞는 형식으로 날짜를 바꿀 수 있어요.

## Date/Time Formatter 액션이란?

**Date/Time Formatter** 액션은 자동화 안에서 날짜와 시간을 다루도록 도와줘요. 주요 기능은 세 가지예요.

- 날짜 형식 바꾸기 (예: 2024-12-09)
- 날짜·시간 형식 바꾸기 (예: 2024-12-09 15:48)
- 두 날짜를 비교해 차이 구하기 (예: 2024-12-09와 2024-12-08)

이 기능으로 날짜와 시간의 표시 방식을 바꾸거나 두 날짜를 비교할 수 있어서, 정보를 알맞은 형식으로 공유하거나 저장하기 쉬워요.

## 이 액션을 쓰면 좋은 점

날짜·시간 데이터를 워크플로우에서 다룰 때 이런 점이 좋아요.

- 일관성: 플랫폼과 앱이 달라도 날짜와 시간을 같은 형식으로 맞출 수 있어요. 읽기 쉽고 헷갈릴 일이 줄어요.
- 호환성: 필요한 대로 날짜·시간 형식을 바꿔서 여러 도구와 시스템 사이에 데이터를 매끄럽게 주고받을 수 있어요.
- 의사 결정: 날짜 비교와 계산이 쉬워져서 시간이 중요한 업무에서 판단하기 편해요.
- 유연성: 다양한 형식 옵션이 있어서 상황과 취향에 맞게 쓸 수 있어요.

## Date/Time Formatter 액션 설정하기

### 워크플로우 빌더 열기

**자동화 > 워크플로우 > Create Workflow**(워크플로우 만들기) **> 처음부터 시작**을 차례로 클릭하세요. 이미 만든 워크플로우를 열어서 이 액션을 추가해도 돼요.

![워크플로우를 처음부터 시작하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043086464/original/AOYu8H9yQ2VumEc63huR39VmAM2B67tTkg.png?1741750190)

### Date/Time Formatter 액션 선택하기

1. **+** 아이콘을 클릭해 워크플로우 액션 목록을 열어요.
2. 목록에서 **Date/Time Formatter**를 선택하세요.

### 액션 유형 알아보기

**Date/Time Formatter** 액션을 쓰면 워크플로우에서 날짜 값을 알맞게 변환하고, 저장하고, 비교할 수 있어요. 설정을 마치면 변환했거나 계산한 값이 동적 변수로 저장돼요. 이 변수는 이메일 보내기, CRM 필드 업데이트, 조건 분기 같은 뒤쪽 액션에서 쓸 수 있어요.

이 액션은 세 가지 방식으로 쓸 수 있어요.

- **Format Date**(날짜 형식 변경): 날짜를 다른 형식으로 바꿔요.
- **Format Date-Time**(날짜·시간 형식 변경): 날짜와 시간의 형식을 함께 바꿔요.
- **Compare Dates**(날짜 비교): 두 날짜의 차이를 계산해요.

![Date/Time Formatter 액션 유형 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043064532/original/kzSdz_vTyGk9OgGFsjIW428Egk6ctG5MDQ.png?1741707004)

### Format Date

**Format Date**는 날짜 구조를 한 형식에서 다른 형식으로 바꾸는 기능이에요. 설정 항목은 다음과 같아요.

#### Field Selection

**Field Selection**(필드 선택)에서 형식을 바꿀 날짜 필드를 고르세요. 선택할 수 있는 값은 다음과 같아요.

- **Specific Date**(특정 날짜)
- **Current Date**(현재 날짜)
- 연락처의 날짜 필드
- 날짜 유형 커스텀 필드
- **Appointment start/end date**(예약 시작/종료 날짜)
- **Custom values**(커스텀 값)
- **Inbound Webhook Trigger**(인바운드 웹훅 트리거)

![형식을 바꿀 날짜 필드를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043064633/original/c5y6pWoRV_BXXuqz3_pmcPpw1HnIn7VR1w.png?1741707067)

{% hint style="info" %}
현재 연락처 커스텀 필드는 날짜·시간(Date Time) 구조를 지원하지 않아요.
{% endhint %}

#### From Format

**From Format**(원본 형식)은 원래 날짜가 어떤 형식인지 알려 주는 항목이에요. **Specific Date**, **Current Date**, 연락처의 날짜 유형 표준 필드나 커스텀 필드, **Appointment start/end date** 같은 시스템 필드를 고르면 형식이 자동으로 감지되어 미리 선택돼요. **Custom values**나 **Inbound Webhook Trigger**를 고르면 맞는 형식을 직접 선택해야 해요.

![원본 형식을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043064837/original/N-gVpbSNXEkJ76O_cwyNdPCFjSXEJoHDzA.png?1741707112)

#### To Format

**To Format**(변환 형식)에서는 사용할 수 있는 형식 목록 중 결과로 받고 싶은 날짜 형식을 선택하세요. 원래 날짜가 이 형식으로 바뀌어요.

![변환할 날짜 형식을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043064972/original/gFsbZ2hBbNaXC7fvOwh7VVl2eQ9g1s8fRA.png?1741707182)

### Format Date-Time

**Format Date-Time**은 날짜와 시간 정보가 함께 있는 값을 다른 형식으로 바꾸는 기능이에요. 설정 항목은 다음과 같아요.

#### Field Selection

**Field Selection**에서 형식을 바꿀 날짜·시간 필드를 고르세요. 선택할 수 있는 값은 다음과 같아요.

- **Specific Date and Time**(특정 날짜 및 시간)
- **Current Date and Time**(현재 날짜 및 시간)
- **Appointment start/end date and time**(예약 시작/종료 날짜 및 시간)
- **Custom values**
- **Inbound Webhook Trigger**

연락처 커스텀 필드는 아직 날짜·시간 구조를 지원하지 않아요.

![형식을 바꿀 날짜·시간 필드를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043085210/original/QfBq7h_U-0-ox4hOdBfaF4iUoi9xZwkalA.png?1741746520)

{% hint style="info" %}
현재 연락처 커스텀 필드는 날짜·시간(Date Time) 구조를 지원하지 않아요.
{% endhint %}

#### From Format

**Specific Date and Time**, **Current Date and Time**, **Appointment start/end date and time** 같은 시스템 필드를 고르면 형식이 자동으로 감지되어 미리 선택돼요. **Custom values**나 **Inbound Webhook Trigger**를 고르면 맞는 형식을 직접 선택해야 해요.

![원본 날짜·시간 형식을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043085235/original/dDk15VGid2gSm1zfTK51IeJuowR3s8b5PQ.png?1741746552)

#### To Format

**To Format**에서는 사용할 수 있는 형식 목록 중 결과로 받고 싶은 날짜·시간 형식을 선택하세요. 원래 날짜와 시간이 이 형식으로 바뀌어요.

![변환할 날짜·시간 형식을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043085239/original/iViu4OjOa6H_kHgDvM65p2ljHgoJg0-Y2g.png?1741746584)

### Compare Dates

**Compare Dates**는 두 날짜를 비교해서 일수 차이를 구하는 기능이에요. 설정 항목은 다음과 같아요.

#### Start Date Selection

**Start Date Selection**(시작 날짜 선택)에서 시작 날짜를 고르세요. 선택할 수 있는 값은 다음과 같아요.

- **Specific Date**
- **Current Date**
- 연락처의 날짜 필드
- 날짜 유형 커스텀 필드
- **Appointment start/end date**
- **Custom values**
- **Inbound Webhook Trigger**

![시작 날짜를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043086393/original/BMpIxErNiu7p2RxN-ivzSHrYTopTp4Vxbg.png?1741749979)

#### Start Date Format

**Start Date Format**(시작 날짜 형식)에서 시작 날짜의 형식을 확인하세요. **Specific Date**, **Current Date**, 연락처의 날짜 유형 표준 필드나 커스텀 필드, **Appointment start/end date** 같은 시스템 필드를 고르면 형식이 자동으로 감지되어 미리 선택돼요. **Custom values**나 **Inbound Webhook Trigger**를 고르면 맞는 형식을 직접 선택해야 해요.

![시작 날짜 형식을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043086414/original/AJn---_UmwDK3ATEaKwKTjjqcAYrBn1sLw.png?1741750010)

#### End Date Selection

**End Date Selection**(종료 날짜 선택)에서는 시작 날짜와 같은 값 중에서 종료 날짜를 고르세요(**Specific Date**, **Current Date**, 연락처의 날짜 필드, 날짜 유형 커스텀 필드, **Appointment start/end date**, **Custom values**, **Inbound Webhook Trigger**).

![종료 날짜를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043086424/original/oiwhL5F9dkcNN19ynLAhYESOb1LkLlL3tw.png?1741750049)

#### End Date Format

**End Date Format**(종료 날짜 형식)도 시작 날짜 형식과 같아요. 시스템 필드를 고르면 형식이 자동으로 감지되어 미리 선택돼요. **Custom values**나 **Inbound Webhook Trigger**를 고르면 맞는 형식을 직접 선택해야 해요.

![종료 날짜 형식을 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043086433/original/GQhQqrwdeT1M47-jKsb41yZRm9ErtQ9xsg.png?1741750074)

{% hint style="info" %}
차이는 종료 날짜에서 시작 날짜를 뺀 값(End Date - Start Date)으로 계산해요. 시작 날짜가 종료 날짜보다 늦으면 음수가 나와요.

**Compare Dates**는 마감일 계산, 이벤트 사이의 기간 확인, 두 날짜의 시간 차이에 따른 판단처럼 날짜를 비교해야 할 때 유용해요.
{% endhint %}

## 사용 사례

**Date/Time Formatter** 액션은 날짜와 시간 데이터를 관리하고 가공해야 하는 여러 상황에서 쓸 수 있어요.

- 이벤트 운영팀: 여러 곳에서 들어온 이벤트 시작·종료 날짜와 시간을 같은 형식으로 맞춰서 데이터를 읽기 쉽게 정리해요.
- 마케팅팀: 변환한 날짜·시간 정보를 이메일 캠페인, SMS, Slack 메시지에 넣어서 개인화된 시의성 있는 메시지를 보내요.
- 영업팀: 현재 날짜와 인보이스 결제 기한을 비교해서 결제 기한이 다가오거나 지난 고객에게 자동으로 알림을 보내요.
- 고객지원팀: 인바운드 웹훅 트리거로 받은 날짜·시간 데이터를 변환해서 지원 티켓을 만들거나 CRM 시스템을 업데이트해요.
- 프로젝트 관리자: 프로젝트 시작일과 마감일을 비교해서 남은 기간을 계산하고 팀원에게 알림을 보내요.
- 데이터 분석가: 형식이 통일된 날짜·시간 데이터를 스프레드시트나 데이터베이스에 저장해서 분석과 리포트 작성을 쉽게 해요.
- 소프트웨어 개발자: 여러 소스의 날짜·시간 데이터를 변환해서 애플리케이션에 연동하고, 호환성과 원활한 데이터 처리를 확보해요.
- 이커머스 사업자: 주문일과 배송일 정보를 변환해서 추적과 고객 안내에 활용해요.

## 자주 묻는 질문

### 변환한 날짜나 시간을 다른 워크플로우 액션에서 쓰려면 어떻게 하나요?

**Date/Time Formatter** 액션이 날짜나 시간을 처리하면 변환된 값이 동적 변수에 저장돼요(예: `{{datetime_formatter.1.date}}`, `{{datetime_formatter.1.datetime}}`). 이 변수를 뒤에 오는 액션에서 불러와 쓰면 돼요. 이메일 보내기, CRM 필드 업데이트, 날짜 값에 따른 조건 분기 등에 쓸 수 있어요.

### **From Format**을 잘못 선택하면 어떻게 되나요?

선택한 **From Format**이 입력한 날짜의 실제 형식과 다르면 워크플로우가 날짜를 제대로 처리하지 못할 수 있어요. 그러면 날짜 값이 비거나 잘못 나올 수 있어요. 변환하기 전에 **From Format**이 원래 날짜 구조와 정확히 일치하는지 항상 확인하세요.

### 연락처에 저장된 날짜 필드와 현재 날짜를 비교할 수 있나요?

네, **Compare Dates**를 쓰면 연락처에 저장된 날짜(예: "가입 날짜", "마지막 구매 날짜")를 **Current Date**와 비교할 수 있어요. 일정한 일수가 지났을 때 리마인더, 후속 연락, 자동 액션을 실행하는 데 유용해요. 일수 차이는 `{{datetime_formatter.1.days}}`에 저장되어 워크플로우에서 계속 쓸 수 있어요.

### Date/Time Formatter 액션은 시간대 차이를 처리하나요?

**Date/Time Formatter** 액션은 시스템의 기본 시간대 설정을 기준으로 날짜와 시간을 처리해요. 워크플로우에 시간대가 서로 다른 사용자가 있다면, 형식을 적용하기 전에 모든 날짜·시간 값을 같은 기준으로 맞추거나 변환해 두세요.
