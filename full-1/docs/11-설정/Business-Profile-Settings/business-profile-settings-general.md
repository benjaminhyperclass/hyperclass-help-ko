---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006221-business-profile-settings-general
번역일: 2026-11-06
카테고리: 11-설정
---

# 비즈니스 프로필 설정 — 일반 항목

**비즈니스 프로필**의 General 섹션에 있는 설정을 하나씩 설명해요. 각 설정이 연락처, 일정, 이메일·문자 발송에 어떤 영향을 주는지 확인할 때 보세요.

이 토글들은 하이퍼클래스 전반의 데이터 품질, 일정, 발송 전달률에 영향을 줘요. 각 설정을 꼼꼼히 확인하고, 팀의 문의 접수·영업·규정 준수 업무 방식에 맞게 선택하세요. 설정을 바꾼 뒤에는 **저장**을 누르고, 폼 제출, 예약, 샘플 이메일 발송 같은 주요 흐름을 몇 가지 테스트해서 의도대로 동작하는지 확인하세요.

비즈니스 프로필 설정 화면으로 이동하는 방법 등 전체 내용은 [비즈니스 프로필 설정 개요](business-profile-settings.md)를 참고하세요.

## 비즈니스 프로필 설정의 General 섹션

비즈니스 프로필에서 이 섹션은 매우 중요해서 항목별로 나눠 설명할게요. 이 설정들은 서브 계정에 큰 영향을 줄 수 있으니 주의 깊게 살펴보세요. **연락처** 메뉴에서 이상한 일이 생겼는데 해결 방법을 몰라 이 설정을 열어 보고서야, 켜지 말아야 할 것을 켰거나 켜야 할 것을 꺼 둔 걸 알게 될 수도 있어요.

![비즈니스 프로필 General 섹션 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052716583/original/jkZ4Nltmog80pNzSOKDxBzL2Ygp6WqymSA.png?1756489837)

### Duplication Opportunity Settings(기회 중복 설정)

이 기능을 **켜짐**으로 설정하면 같은 파이프라인 안에 중복된 기회를 만들 수 있어요. 켜 두면 기회가 파이프라인 단계 사이를 옮겨 가는 대신, 같은 파이프라인에 새 기회가 만들어져요. 상황에 따라 매우 유용하고, 꼭 필요한 경우도 있어요.

이 설정은 이제 **오브젝트 > 기회 관리 > 상세 정보**에서 다른 기회 관련 설정과 함께 찾을 수 있어요. 이 설정으로 바로 가려면 **Go to Opportunities Settings**(기회 관리 설정으로 이동) 버튼을 클릭하세요.

### 이름으로 Facebook 연락처 병합

고객이 Facebook Messenger로 회사에 메시지를 보내면 시스템에 새 연락처가 만들어져요. Facebook이 사용자의 이름만 보내 주고, 전화번호나 이메일 주소는 보내 주지 않기 때문이에요.

**이름으로 Facebook 연락처 병합**을 켜면 Facebook Messenger에서 온 연락처가 이름이 같은 기존 연락처에 병합돼요. 이름은 대소문자를 구분하며, 정확히 일치해야 해요.

![이름으로 Facebook 연락처 병합 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052716737/original/6WbPnq36FF_WnMJedWqhLbpxAP_bHF29NA.png?1756490092)

### 연락처 시간대 비활성화

여러 기능에서 연락처의 시간대를 반영하는 일은 중요할 수 있어요. 예를 들어 동부 표준시(EST) 오전 8시에 이메일을 보내는데, 고객이 3시간 늦은 캘리포니아(PST)에 있다고 해 볼게요. 발송 과정에서 연락처의 시간대를 고려하지 않으면 같은 이메일이 고객에게는 PST 오전 5시에 가요.

연락처별 시간대를 쓸 필요가 없다면 **연락처 시간대 비활성화**로 연락처 시간대 인식을 모두 끄고, 서브 계정에 지정된 시간대만 쓰게 할 수 있어요.

### Bot Detection Preventing Statistics Increment and Automation Execution(봇 감지로 통계 증가 및 자동화 실행 방지)

이메일 마케팅에서는 고객 참여도와 캠페인 효과를 파악하려면 정확한 지표가 필요해요. 그런데 봇이 열람률과 클릭률을 부풀려 잘못된 데이터가 나올 수 있어요. 이를 막기 위해 **Bot Detection Preventing Statistics Increment and Automation Execution** 기능이 도입됐어요. 이 설정을 켜면 봇 활동이 데이터에 미치는 영향을 줄일 수 있어요.

![봇 감지 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052716932/original/SQR4wvKzScc5yptv7H-8fkEYLOKk-dR5Cg.png?1756490487)

### 번호 인텔리전스 설정

**번호 인텔리전스**는 전화번호를 점검하는 모범 사례를 모아 둔 기능이에요. 전화번호로 통화와 문자가 제대로 되게 하고, 비용을 관리하고, 평판을 지키는 데 도움이 돼요.

이 설정은 이제 **고급 설정**의 **번호 인텔리전스**에서 찾을 수 있어요. 바로 가려면 **번호 인텔리전스 설정으로 이동** 버튼을 클릭하세요.

### Verify Email Address when first email is sent to a new contact(새 연락처에 첫 이메일을 보낼 때 이메일 주소 확인)

새 연락처에 첫 이메일을 보내려고 하면 그 연락처의 이메일 주소를 자동으로 확인해요. 이메일이 **무효**로 표시되면 이메일은 발송되지 않아요. 이후 이 연락처에 이메일을 보내려면 먼저 이메일 주소를 확인해야 해요.

<!-- 검토 필요: 원문 내용이 서로 다름 (이메일 주소 확인 항목인데 아래 안내는 전화번호 확인 요금을 설명함) -->
```
전화번호 확인의 기본 요금은 확인 시도 1회당 $0.005예요. 전화번호 확인을 시도할 때마다 이 금액이 에이전시 계정 또는 서브 계정의 크레딧 지갑에서 차감돼요.
```

```
하이퍼클래스 Founder 플랜 계정(월 $497)의 경우: 서브 계정이 "SaaS 모드"로 설정돼 있으면 전화번호 확인 비용을 조정해서, 확인을 시도할 때마다 수익을 낼 수 있어요.
```

### SMS 규정 준수 설정

SMS 규정 준수는 매우 중요하니 신중하게 다뤄야 해요. 그래서 하이퍼클래스는 모든 서브 계정에 수신 거부 메시지를 기본으로 자동 설정해 둬요. 이 수신 거부 메시지를 설정하거나 끌 수도 있지만, 끄는 것은 권장하지 않아요.

이 설정은 이제 **고급 설정**의 **SMS 규정 준수**에서 찾을 수 있어요. 바로 가려면 **Go to SMS Compliance Settings**(SMS 규정 준수 설정으로 이동) 버튼을 클릭하세요.

### Make Email compliant by adding an Unsubscribe link in your email(이메일에 수신 거부 링크를 넣어 규정 준수)

소비자를 보호하고 정보를 안전하게 지키기 위해 이메일 발송에 관한 새 법이 계속 만들어지고 있어요. 그래서 하이퍼클래스는 모든 서브 계정에 이메일 **수신 거부 링크**를 기본으로 자동 설정해 둬요. 수신 거부 링크를 설정하거나 끌 수도 있지만, 끄는 것은 권장하지 않아요. 처음 시작하는 분과 고객이 안심하고 쓸 수 있도록, 모든 서브 계정에서 이 설정은 기본으로 켜져 있고 구성돼 있어요.

![이메일 수신 거부 링크 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052717115/original/1U-GY8_9HEK0r_3lVG0pvoO_sa8e2qgBzg.png?1756490825)
