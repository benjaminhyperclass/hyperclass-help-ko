---

번역일: 2026-04-08
카테고리: 16-SaaS-설정 > Saas Mode
---

# 워크플로우 - 날짜/시간 포맷터 액션

날짜/시간 포맷터 액션을 사용하면 요구사항에 맞게 날짜 또는 날짜와 시간의 형식을 변경할 수 있습니다. 또한 이 액션을 통해 날짜를 비교할 수도 있습니다.

목차
- 날짜 형식 변경
- 날짜와 시간 형식 변경  
- 날짜 비교

![워크플로우 날짜/시간 포맷터 액션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293485600/original/mQC3q6W5GkDW_Um06RXgC_HIQuOXyamprA.png?1681915820)

## 날짜 형식을 변경하는 방법

### 한 날짜 형식에서 다른 형식으로 날짜 구조를 변환합니다.

필드(Field):
특정 날짜, 현재 날짜, 연락처의 날짜 필드나 날짜 타입 커스텀 필드, 예약 시작/종료 날짜, 커스텀 값, 또는 인바운드 웹훅 트리거 중 아무 날짜 필드나 선택할 수 있습니다.

![날짜 필드 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293499588/original/_1utIHUqHXOqAPs92BiTwpZww4BQsBrujQ.png?1681918643)

원래 형식(From Format):
특정 날짜, 현재 날짜, 연락처의 날짜 타입 표준 필드, 연락처의 날짜 타입 커스텀 필드, 또는 예약 시작/종료 날짜 같은 시스템 필드를 선택하면 형식이 자동으로 감지되어 미리 선택됩니다. 커스텀 값이나 인바운드 웹훅 트리거의 경우에는 정확히 일치하는 형식을 직접 선택해야 합니다.

![원래 형식 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293500391/original/1Kd6PUZXtT4AOQFWbBLkT2LOImgrmYP82g.png?1681918843)

### 변경할 형식(To Format):
목록에서 필요한 형식을 선택하세요

![변경할 형식 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293500697/original/Dlds7-wpcq09sncoJ5Yj3LJkGMkityYRNw.png?1681918918)

### 출력 결과

날짜 형식 변경을 설정한 후, 워크플로우의 다음 액션에서 결과를 사용할 수 있습니다: {{datetime_formatter.1.date}}

커스텀 값

![커스텀 값 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293485199/original/i57GTs9YqhKeBH6jHV9SZ8b70o9BHxFqhA.png?1681915720)

## 날짜와 시간 형식 변경

날짜와 시간 구조를 한 형식에서 다른 형식으로 변환합니다.

### 필드(Field):
특정 날짜와 시간, 현재 날짜와 시간, 예약 시작 또는 종료 날짜 시간, 커스텀 값, 또는 인바운드 웹훅 트리거 중 아무 날짜-시간 필드나 선택할 수 있습니다.

참고사항:
현재 연락처 커스텀 필드는 날짜 시간 구조를 지원하지 않습니다.

![날짜 시간 필드 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293501865/original/vobWnYp1Evzld6XXk5ZHrhnEfHKOqONeag.png?1681919224)

### 원래 형식(From Format):
특정 날짜와 시간, 현재 날짜와 시간, 연락처 필드, 또는 예약 시작/종료 날짜 시간 같은 시스템 필드를 선택하면 형식이 자동으로 감지되어 미리 선택됩니다. 커스텀 값이나 인바운드 웹훅 트리거의 경우에는 정확히 일치하는 형식을 직접 선택해야 합니다.

![원래 형식 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293485200/original/ADCn7ZI9KM1XNRCewnqcX2MQFhLod3cGOA.png?1681915720)

### 변경할 형식(To Format):
목록에서 필요한 형식을 선택하세요

![변경할 형식 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293502392/original/Hx6KmKS9a_LsIT3YPR28n1I5snd_5T-VHQ.png?1681919362)

### 출력 결과

날짜와 시간 형식 변경을 설정한 후, 워크플로우의 다음 액션에서 결과를 사용할 수 있습니다.

{{datetime_formatter.1.datetime}}

커스텀 값

![커스텀 값 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293502719/original/RafxrtJSJwOrKgFMTiiXu_QDJ3l8oFEzQQ.png?1681919449)

## 날짜 비교

두 날짜를 비교하여 일 수 차이를 계산합니다.

### 시작 날짜(Start Date):
특정 날짜, 현재 날짜, 연락처의 날짜 필드나 날짜 타입 커스텀 필드, 예약 시작/종료 날짜, 커스텀 값, 또는 인바운드 웹훅 트리거 중 아무 날짜 필드나 선택할 수 있습니다.

![시작 날짜 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293485206/original/pu4iIap9Yhth5gOEcLZ9F3bCAtyj-bLduw.png?1681915721)

### 시작 날짜 형식(Start Date Format):
특정 날짜, 현재 날짜, 연락처의 날짜 타입 표준 필드, 연락처의 날짜 타입 커스텀 필드, 또는 예약 시작/종료 날짜 같은 시스템 필드를 선택하면 형식이 자동으로 감지되어 미리 선택됩니다. 커스텀 값이나 인바운드 웹훅 트리거의 경우에는 정확히 일치하는 형식을 직접 선택해야 합니다.

![시작 날짜 형식 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293485196/original/x1alZjEhaa3Bcvql1AKt9urx0eoKr9Iu1A.png?1681915720)

### 종료 날짜(End Date):
특정 날짜, 현재 날짜, 연락처의 날짜 필드나 날짜 타입 커스텀 필드, 예약 시작/종료 날짜, 커스텀 값, 또는 인바운드 웹훅 트리거 중 아무 날짜 필드나 선택할 수 있습니다.

![종료 날짜 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293485191/original/c1isR7MZKKuBytIQEFfAeVzdZHE0ST9idw.png?1681915720)

#### 종료 날짜 형식(End Date Format):
특정 날짜, 현재 날짜, 연락처의 날짜 타입 표준 필드, 연락처의 날짜 타입 커스텀 필드, 또는 예약 시작/종료 날짜 같은 시스템 필드를 선택하면 형식이 자동으로 감지되어 미리 선택됩니다. 커스텀 값이나 인바운드 웹훅 트리거의 경우에는 정확히 일치하는 형식을 직접 선택해야 합니다.

![종료 날짜 형식 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293485194/original/ms1zccoNhkzIk47RIxyB0Im3qaF2PHsP-w.png?1681915720)

### 출력 결과

날짜 비교를 설정한 후, 워크플로우의 다음 액션에서 결과를 사용할 수 있습니다: {{datetime_formatter.1.days}}

차이는 종료 날짜 - 시작 날짜로 계산되므로, 시작 날짜가 종료 날짜보다 클 경우 음수 값을 얻게 됩니다.

커스텀 값

![커스텀 값 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48293485195/original/TQD4-jxcpOu4EmXENgwAN5WSqddc-uaBag.png?1681915720)

## 사용 예시

- 인바운드 웹훅 트리거 데이터의 형식을 변경하여 이벤트 시작 날짜를 설정하거나, 연락처 커스텀 필드를 업데이트하거나, If/Else 조건에서 비교하는 용도로 활용
- 날짜 형식이 MM/DD/YYYY인데, 날짜를 DD/MM/YYYY 형식으로 받는 앱에 전송해야 하는 경우, 날짜/시간 포맷터로 날짜 형식을 변경한 후 커스텀 웹훅으로 전송 가능
- 커스텀 형식의 날짜 시간 정보를 구글 시트에 저장
- 커스텀 형식의 날짜 시간 정보를 이메일/SMS/Slack에 사용
- 현재 날짜(시작 날짜)와 인보이스 마감일(종료 날짜)을 비교하여 이메일/SMS/Slack에서 동적 값 사용
  예시: 인보이스 마감일이 {{datetime_formatter.1.days}}일 남았습니다.

참고사항:
연체된 경우, 즉 현재 날짜(시작 날짜)가 인보이스 마감일(종료 날짜)보다 클 때는 결과가 음수 값으로 나타납니다.

---
*원문 최종 수정: Tue, 16 Jan, 2024 at 4:49 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*