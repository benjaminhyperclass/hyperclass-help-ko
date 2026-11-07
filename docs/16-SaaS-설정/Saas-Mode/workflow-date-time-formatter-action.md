---
원문: /support/solutions/articles/48001237982-workflow-date-time-formatter-action
번역일: 2026-11-06
카테고리: 16-SaaS-설정
---

# 워크플로우 액션 — Date/Time Formatter(날짜/시간 포맷터)

**Date/Time Formatter**(날짜/시간 포맷터) 액션을 쓰면 날짜나 날짜·시간의 표시 형식을 원하는 대로 바꿀 수 있어요. 두 날짜를 비교하는 것도 이 액션으로 할 수 있어요.

이 액션에는 세 가지 유형이 있어요.

- **Format Date**(날짜 형식 변환)
- **Format Date and Time**(날짜·시간 형식 변환)
- **Compare Dates**(날짜 비교)

![Date/Time Formatter 액션 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293485600/original/mQC3q6W5GkDW_Um06RXgC_HIQuOXyamprA.png?1681915820)

---

## 날짜 형식 바꾸기 (Format Date)

날짜의 형식을 다른 형식으로 바꿀 때 사용해요.

### Field

**Field**(필드)에서 형식을 바꿀 날짜 필드를 선택하세요. 선택할 수 있는 항목은 다음과 같아요.

- **Specific Date**(특정 날짜)
- **Current Date**(현재 날짜)
- 연락처의 날짜 필드, 날짜 유형 커스텀 필드
- 예약 시작·종료 날짜
- 커스텀 값
- **Inbound Webhook Trigger**(수신 웹훅 트리거)

### From Format

**From Format**(변경 전 형식)은 현재 날짜가 어떤 형식인지 알려 주는 항목이에요.

**Specific Date**, **Current Date**, 연락처의 날짜 유형 기본 필드, 연락처의 날짜 유형 커스텀 필드, 예약 시작·종료 날짜를 선택하면 형식을 자동으로 인식해서 미리 선택해 줘요. 커스텀 값이나 **Inbound Webhook Trigger**의 값을 선택했다면 값과 정확히 일치하는 형식을 직접 골라야 해요.

### To Format

**To Format**(변경 후 형식)에서 원하는 형식을 목록에서 선택하세요.

![To Format 목록에서 형식 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293500697/original/Dlds7-wpcq09sncoJ5Yj3LJkGMkityYRNw.png?1681918918)

### Output

**Format Date** 설정을 마치면 결과를 워크플로우의 다음 액션에서 사용할 수 있어요. 결과 값은 `{{datetime_formatter.1.date}}` 로 불러와요.

**Custom Values**(커스텀 값)

---

## 날짜와 시간 형식 바꾸기 (Format Date and Time)

날짜와 시간의 형식을 다른 형식으로 바꿀 때 사용해요.

### Field

**Field**에서 형식을 바꿀 날짜·시간 필드를 선택하세요. 선택할 수 있는 항목은 다음과 같아요.

- **Specific Date and Time**(특정 날짜 및 시간)
- **Current Date and Time**(현재 날짜 및 시간)
- 예약 시작·종료 날짜와 시간
- 커스텀 값
- **Inbound Webhook Trigger**

{% hint style="info" %}
현재 연락처 커스텀 필드는 날짜·시간 형식을 지원하지 않아요.
{% endhint %}

![Field에서 날짜·시간 필드 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293501865/original/vobWnYp1Evzld6XXk5ZHrhnEfHKOqONeag.png?1681919224)

### From Format

**Specific Date and Time**, **Current Date and Time**, 연락처 필드, 예약 시작·종료 날짜와 시간을 선택하면 형식을 자동으로 인식해서 미리 선택해 줘요. 커스텀 값이나 **Inbound Webhook Trigger**의 값을 선택했다면 값과 정확히 일치하는 형식을 직접 골라야 해요.

![From Format 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293485200/original/ADCn7ZI9KM1XNRCewnqcX2MQFhLod3cGOA.png?1681915720)

### To Format

목록에서 원하는 형식을 선택하세요.

![To Format 목록에서 형식 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293502392/original/Hx6KmKS9a_LsIT3YPR28n1I5snd_5T-VHQ.png?1681919362)

### Output

**Format Date and Time** 설정을 마치면 결과를 워크플로우의 다음 액션에서 사용할 수 있어요. 결과 값은 `{{datetime_formatter.1.datetime}}` 로 불러와요.

**Custom Values**

![Output 결과 값 사용 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293502719/original/RafxrtJSJwOrKgFMTiiXu_QDJ3l8oFEzQQ.png?1681919449)

---

## 날짜 비교하기 (Compare Dates)

두 날짜를 비교해서 그 차이를 일 수로 구할 때 사용해요.

### Start Date

**Start Date**(시작일)에서 날짜 필드를 선택하세요. 선택할 수 있는 항목은 다음과 같아요.

- **Specific Date**
- **Current Date**
- 연락처의 날짜 필드, 날짜 유형 커스텀 필드
- 예약 시작·종료 날짜
- 커스텀 값
- **Inbound Webhook Trigger**

![Start Date 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293485206/original/pu4iIap9Yhth5gOEcLZ9F3bCAtyj-bLduw.png?1681915721)

### Start Date Format

**Specific Date**, **Current Date**, 연락처의 날짜 유형 기본 필드, 연락처의 날짜 유형 커스텀 필드, 예약 시작·종료 날짜를 선택하면 형식을 자동으로 인식해서 미리 선택해 줘요. 커스텀 값이나 **Inbound Webhook Trigger**의 값을 선택했다면 값과 정확히 일치하는 형식을 직접 골라야 해요.

![Start Date Format 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293485196/original/x1alZjEhaa3Bcvql1AKt9urx0eoKr9Iu1A.png?1681915720)

### End Date

**End Date**(종료일)에서 날짜 필드를 선택하세요. 선택할 수 있는 항목은 **Start Date**와 같아요.

![End Date 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293485191/original/c1isR7MZKKuBytIQEFfAeVzdZHE0ST9idw.png?1681915720)

### End Date Format

**Specific Date**, **Current Date**, 연락처의 날짜 유형 기본 필드, 연락처의 날짜 유형 커스텀 필드, 예약 시작·종료 날짜를 선택하면 형식을 자동으로 인식해서 미리 선택해 줘요. 커스텀 값이나 **Inbound Webhook Trigger**의 값을 선택했다면 값과 정확히 일치하는 형식을 직접 골라야 해요.

![End Date Format 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293485194/original/ms1zccoNhkzIk47RIxyB0Im3qaF2PHsP-w.png?1681915720)

### Output

**Compare Dates** 설정을 마치면 결과를 워크플로우의 다음 액션에서 사용할 수 있어요. 결과 값은 `{{datetime_formatter.1.days}}` 로 불러와요.

차이는 **End Date** − **Start Date**로 계산해요. 그래서 **Start Date**가 **End Date**보다 늦은 날짜면 결과가 음수로 나와요.

**Custom Values**

![Output 결과 값 사용 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293485195/original/TQD4-jxcpOu4EmXENgwAN5WSqddc-uaBag.png?1681915720)

---

## 활용 예시

- **Inbound Webhook Trigger**로 들어온 데이터의 형식을 바꿔서 **Set Event Start Date**(이벤트 시작 날짜 설정)에 쓰거나, 연락처 커스텀 필드를 업데이트하거나, **If/Else** 조건에서 비교할 수 있어요.
- 날짜 형식이 MM/DD/YYYY인데, 날짜를 DD/MM/YYYY 형식으로 받는 앱에 보내야 한다고 해 볼게요. 이때 **Date/Time Formatter**로 형식을 바꾼 뒤 **Custom Webhook**(커스텀 웹훅)으로 보내면 돼요.
- 원하는 형식으로 바꾼 날짜·시간 정보를 Google Sheets에 저장할 수 있어요.
- 원하는 형식으로 바꾼 날짜·시간 정보를 이메일, SMS, Slack 메시지에 쓸 수 있어요.
- 현재 날짜(**Start Date**)와 인보이스 만기일(**End Date**)을 비교해서, 그 값을 이메일, SMS, Slack 메시지에 쓸 수 있어요.
  예: `인보이스 만기까지 {{datetime_formatter.1.days}}일 남았습니다.`

{% hint style="info" %}
만기일이 지나서 현재 날짜(**Start Date**)가 인보이스 만기일(**End Date**)보다 늦으면 결과가 음수로 나와요.
{% endhint %}
