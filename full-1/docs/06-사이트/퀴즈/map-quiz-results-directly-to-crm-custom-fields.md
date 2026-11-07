---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006913-map-quiz-results-directly-to-crm-custom-fields
번역일: 2026-11-06
카테고리: 06-사이트
---

# 퀴즈 결과를 연락처 커스텀 필드에 바로 매핑하기

퀴즈 결과 → CRM 필드 매핑을 켜면 퀴즈 결과가 연락처별 커스텀 필드에 자동으로 채워져요. 연락처마다 퀴즈 성과를 정리된 데이터로 확인할 수 있어서, 세분화·개인화·자동화에 바로 쓸 수 있어요.

## 퀴즈 결과 → CRM 필드 매핑이란?

퀴즈 결과 → CRM 필드 매핑은 연락처의 퀴즈 결과를 하이퍼클래스의 연락처 커스텀 필드에 기록해 줘요. 기록되는 결과는 다음과 같아요.

- 전체 점수와 등급
- 카테고리별 점수와 등급
- 최고·최저 점수 카테고리 정보

한 번 푼 퀴즈 답변이 CRM에 계속 남는 정보가 되는 거예요.

그래서 수동으로 태그를 붙이거나 외부 트래킹 도구를 쓰지 않아도 돼요. 퀴즈를 제출할 때마다 정리된 CRM 데이터가 쌓여요. 이 데이터로 맞춤형 경험을 만들고, 특정 워크플로우를 실행하고, 연락처를 정교하게 나눌 수 있어요.

---

## 주요 장점

- 자동 생성 필드: 전체 점수·등급, 카테고리별 점수·등급, 최고·최저 카테고리 정보 필드가 자동으로 만들어져요.
- 실시간 업데이트: 같은 퀴즈를 다시 제출하면 같은 연락처의 필드 값이 최신 결과로 덮어써져요. 중복 데이터가 생기지 않아요.
- 자동화 연계: 매핑된 필드를 워크플로우, 분기, 조건부 콘텐츠에 쓸 수 있어요.
- 깔끔한 세분화: 점수, 등급, 우승 카테고리를 기준으로 스마트 리스트를 만들 수 있어요.
- 맞춤 후속 안내: 결과 등급이나 카테고리에 따라 이메일, SMS, 페이지를 다르게 보낼 수 있어요.

---

## 자동 생성되는 퀴즈 결과 필드

하이퍼클래스는 퀴즈가 처음 제출될 때 퀴즈를 확인해서, 일정한 이름 규칙에 따라 연락처 필드를 만들어요. 이 규칙 덕분에 데이터가 깔끔하게 정리되고 검색하기도 쉬워요. 예시는 다음과 같아요.

- `{{quiz_name}} – Overall Score`
- `{{quiz_name}} – Overall Score – Tier`
- `{{quiz_name}} – {{category_name}} – Score`

---

## 기본 데이터 유형

- 점수는 숫자 필드로 저장돼요.
- 등급과 카테고리 이름은 텍스트 필드로 저장돼요.

그래서 CRM의 일반 필터, 워크플로우 조건, 개인화 도구에서 모두 쓸 수 있어요.

---

## 다시 제출하면 필드 값이 바로 업데이트돼요

연락처가 같은 퀴즈를 다시 풀 때마다 하이퍼클래스는 새 필드를 만들지 않고 기존 값을 덮어써요. 그래서 따로 정리 규칙을 만들지 않아도 자동화가 항상 최신 점수를 참조해요.

---

## 워크플로우·자동화에서 퀴즈 결과 필드 활용하기

퀴즈 데이터가 CRM에 매핑되면 여러 방식으로 쓸 수 있어요.

#### 1. 연락처 세분화

퀴즈 성과를 기준으로 연락처를 필터링하거나 그룹으로 나눠요.

예시:

- `Overall Score ≥ 80`인 사용자로 스마트 리스트를 만들어요.
- `Fitness Tier = Beginner`인 사용자를 묶어서 맞춤 메시지를 보내요.

#### 2. 자동화 개인화

퀴즈 결과에 맞춰 후속 워크플로우를 구성해요.

예시:

- 최고 점수 카테고리 또는 최저 점수 카테고리에 따라 다른 육성 이메일을 보내요.
- 카테고리 점수가 기준선을 넘으면 액션을 실행해요.

![퀴즈 결과 필드를 활용한 자동화 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058341887/original/PswBIWbnf60aCPzvqQ3xot-yhuO_-B4-2A.png?1763067422)

#### 3. 조건부 로직 구성

워크플로우나 캠페인에서 매핑된 필드로 동적인 경로를 만들어요.

예시:

- `{{quiz_name}} - Diet Tier = Advanced`이면 고급 가이드를 보내요.
- `{{quiz_name}} - Fitness Score < 50`이면 해당 연락처를 초급 플랜에 등록해요.

---

## 퀴즈 결과 → CRM 필드 매핑 설정하기

#### 1단계: 퀴즈 열기

1. **사이트 > 퀴즈**로 이동해요.
2. 기존 퀴즈를 선택하거나, 파란색 **+ Add Quiz**(퀴즈 추가) 버튼을 눌러 새 퀴즈를 만들어요.

![퀴즈 목록 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058341494/original/Ry15_2kbZ9LMUiXqzjR04JqIgapH2PblHA.png?1763066854)

#### 2단계: 결과 페이지 열기

1. 퀴즈 맨 아래에 있는 **Results Template**(결과 템플릿)으로 스크롤해요.
2. **템플릿 수정**을 눌러요.

![결과 템플릿의 템플릿 수정 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058341529/original/AbH7W8JzdprSbSVkSOHkDlS38aZDNb6PKg.png?1763066893)

#### 3단계: 커스텀 필드 켜기

1. 오른쪽 위의 **설정** 버튼을 누르고, **커스텀 필드** 드롭다운을 펼쳐서 자동으로 만들어진 커스텀 필드를 확인해요.
2. **커스텀 필드** 아래에서 동기화할 필드의 토글을 켜요. 예를 들면 다음과 같아요.
   - **Overall Score**(전체 점수)
   - **Overall Score Tier**(전체 점수 등급)
   - **Category-wise Scores and Tiers**(카테고리별 점수와 등급)
   - **Highest and Lowest Scoring Categories**(최고·최저 점수 카테고리)
3. 켠 필드마다 **Custom Field Name**(커스텀 필드 이름)과 **고유 키**가 자동으로 지정돼요.
4. 필드를 모두 켰으면 **저장**을 눌러요.

![커스텀 필드 토글을 켠 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058341562/original/qmEabdjiJeLEIy7jy6CProFIqLq2V9WQsw.png?1763066973)

#### 4단계: 연락처가 퀴즈 제출하기

사용자가 퀴즈를 끝내면 점수와 등급이 자동으로 기록돼요.

![사용자가 퀴즈를 제출하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058341621/original/zePgg7fj2FGHmtt2M2lngOhSHYq8aXd5Mw.png?1763067123)

#### 5단계: CRM 필드에 데이터 기록

퀴즈가 제출되면 선택한 필드가 연락처 레코드에 만들어지고 값이 업데이트돼요.

필드 이름 예시:

- `{{quiz_name}} - Overall Score`
- `{{quiz_name}} - {{category_name}} - Tier`
- `{{quiz_name}} - Highest Category - Score`

연락처가 같은 퀴즈를 다시 풀면 기존 데이터가 덮어써지고 중복으로 쌓이지 않아요. 그래서 연락처 레코드가 깔끔하고 정확하게 유지돼요.

![연락처 레코드에 기록된 퀴즈 결과 필드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058341782/original/ojRojOGaIAx4WaTqpV5WK0ZE4Qk7cbyiGQ.png?1763067237)

---

## 자주 묻는 질문

### 자동으로 만들어진 필드의 이름을 바꾸거나 삭제할 수 있나요?
이름을 바꾸거나 그룹으로 옮길 수 있어요. 다만 필드를 삭제하면 모든 연락처의 과거 퀴즈 데이터도 함께 삭제돼요.

### 이미 만들어 둔 퀴즈에도 이 기능을 쓸 수 있나요?
네, 퀴즈 설정에서 커스텀 필드 토글이 켜져 있으면 쓸 수 있어요. 연락처가 새 퀴즈든 기존 퀴즈든 하나라도 제출하면 하이퍼클래스가 그 자리에서 필드를 만들어요.

### 이 필드는 연락처 필드인가요, 기회 필드인가요?
연락처 커스텀 필드예요. 그래서 폼, 스마트 리스트, 연락처 워크플로우에서 쓸 수 있어요.

### 퀴즈 필드를 CSV로 내보낼 수 있나요?
네, 가능해요. 연락처를 내보내면 퀴즈 점수와 등급을 포함한 모든 커스텀 필드가 함께 내보내져요.
