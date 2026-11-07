---
원문: https://help.gohighlevel.com/support/solutions/articles/155000006636-workflow-trigger-narration-and-statistics
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Trigger Narration(트리거 설명)과 Trigger Stats(트리거 통계)

워크플로우 트리거가 어떻게 동작하는지 확인하고, 자동화를 개선할 부분을 찾을 때 쓰는 기능이에요. 이 문서에서는 트리거 카드에서 필터 조건을 쉬운 말로 보여 주는 **Trigger Narration**(트리거 설명)과, **Attempted**(시도됨)·**Matched**(일치됨)·**Unmatched**(일치하지 않음) 수치와 연락처별 사유를 보여 주는 **Trigger Stats**(트리거 통계)를 안내해요.

## Workflow Trigger Narration과 Statistics란?

**Trigger Narration**은 트리거에 설정된 조건을 읽기 쉬운 문장으로 풀어서 보여 줘요. **Trigger Stats**는 해당 트리거에 몇 건이 시도되었고, 몇 건이 일치했고, 몇 건이 일치하지 않았는지 보여 줘요. 두 기능을 함께 쓰면 트리거 설정이 맞는지 확인하고, 문제 원인을 더 빨리 찾고, 워크플로우를 안심하고 수정할 수 있어요.

워크플로우 트리거는 워크플로우를 시작시키는 조건이에요. 필터가 많거나 트리거 경로가 여러 개이면 연락처가 왜 워크플로우에 들어왔는지, 또는 왜 들어오지 못했는지 한눈에 알기 어려워요. **Trigger Narration**은 트리거 조건을 쉬운 말로 요약해 주고, **Trigger Stats**는 그 트리거의 실제 성과 데이터를 보여 줘요.

---

## 주요 장점

- 가시성: 어떤 트리거에서 활동이 가장 많이 일어나는지 정확히 볼 수 있어요.
- 성과 분석: 성과가 좋은 트리거와 활용도가 낮은 트리거를 빠르게 찾을 수 있어요.
- 오류 발견: 예상대로 실행되지 않는 트리거를 찾아 고칠 수 있어요.
- 최적화: 추측 대신 실제 데이터를 바탕으로 워크플로우 효율을 높일 수 있어요.

---

## Trigger Narration

[동영상](https://www.youtube.com/embed/0IDt5NUjJPY?&wmode=opaque)

트리거가 "왜" 이렇게 동작하는지 한눈에 볼 수 있어요. 모든 트리거 카드에는 필터와 조건이 읽기 쉬운 문장으로 표시돼요. 트리거를 열지 않아도 조건을 빠르게 훑어볼 수 있어요.

![트리거 카드에 표시된 조건 설명](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057213778/original/Qwb4nQVYnobWa9CGL4tdYR2kPw0rbMkUWA.png?1761828969)

**작동 방식**

- 설명은 트리거 이름 아래에 표시돼요.
- 조건이 복잡한 트리거는 짧게 요약되고 **+X more**(외 X개 더보기) 링크가 함께 나와요.
- **Details**(상세 정보)를 클릭하면 전체 필터 목록이 있는 패널이 열려요.

![전체 필터를 보여 주는 상세 정보 패널](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057213970/original/IEMP6SCslDVcL8gjazchaYGqYpdOtFbj7g.png?1761829066)

감사, 인수인계, 검토 때 특히 편해요. 캔버스가 큰 워크플로우에서도 트리거를 하나씩 열어 보지 않고 목적을 바로 떠올릴 수 있어요.

---

## Trigger Stats

**Stats View**(통계 보기)에서 어떤 트리거가 잘 작동하는지 확인해 보세요. 트리거마다 **Attempted**, **Matched**, **Unmatched** 수치가 표시돼요. 연락처별 사유(예: 필터 불일치, 데이터 누락)도 자세히 볼 수 있어요.

[동영상](https://www.youtube.com/embed/VC9NIDBp4YY?&wmode=opaque)

**Trigger Stats**는 워크플로우 빌더 안에서 연락처가 각 트리거 조건에 맞았는지 확인하는 진단 화면이에요. **Attempted**, **Matched**, **Unmatched** 합계를 보여 주고, 상세 패널을 열면 연락처가 일치했거나 일치하지 않은 정확한 이유를 볼 수 있어요. 빌더를 나가지 않고도 필터를 고치고, 데이터를 업데이트하고, 변경 결과를 확인할 수 있어요.

**Trigger Stats**는 **Standard**(표준)와 **Advanced**(고급) 워크플로우 빌더에서 모두 쓸 수 있어요. **Stats View**를 열고 트리거를 선택하면 워크플로우 화면을 벗어나지 않고 해당 트리거의 진입 현황을 확인할 수 있어요.

{% hint style="warning" %}
**Stats View**에서는 워크플로우를 편집할 수 없어요. 또한 통계는 최근 30일 동안의 데이터만 볼 수 있어요.
{% endhint %}

### 트리거별 성과 지표

**Stats View**에서는 워크플로우 안에서 트리거별 성과를 확인할 수 있어요.

- **Attempted**: 트리거가 평가한 전체 연락처 수
- **Matched**: 모든 조건을 충족한 연락처 수
- **Unmatched**: 조건을 충족하지 못한 연락처 수

![Stats View 개요 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057214348/original/_T_pcifcZQDQB-R2XpVPjjkBPEUpYYlUwA.png?1761829355)

### Trigger Stats Panel

통계 수치 중 하나를 클릭하면 **Trigger Stats Panel**(트리거 통계 패널)이 열리고 다음 내용을 볼 수 있어요.

- 연락처 이름, 이메일, 시간 기록
- 일치 여부
- **Reason for Unmatch**(불일치 사유): 예를 들어 값 불일치, 필드 누락
- 자주 나오는 불일치 사유 요약: 반복되는 필터 문제나 연락처 데이터 문제를 찾는 데 도움이 돼요.
- 필터: 날짜 범위, 연락처 검색

{% hint style="info" %}
이 기능은 앱의 다른 곳에서 볼 수 있는 워크플로우 단위 리포팅(예: 목록 단위 통계, 커뮤니케이션 지표)을 보완해 줘요.
{% endhint %}

![통계 패널의 연락처 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055756117/original/vbjaab5LdUBKiw9FjdW8CNnTovGKgY6tOA.jpeg?1760135211)

### 실시간 분석과 스마트 필터

**Trigger Stats**는 이벤트가 발생하는 대로 실시간으로 업데이트돼요. 변경 사항을 적용하고 숫자가 바뀌는 것을 보면서 수정이 제대로 됐는지 바로 확인할 수 있어요. 날짜 필터와 연락처 필터를 쓰면 특정 기간이나 특정 연락처만 따로 볼 수 있어요. 수치가 갑자기 늘어난 시점을 살펴보거나 테스트 연락처를 확인할 때 좋아요.

![날짜와 연락처 필터가 적용된 통계 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155069744738/original/7lBUgqE4eX2bnS4nsyuocsffHyJ8P8GJXg.png?1776890747)

---

## 활용 팁

- 성과 문제를 일찍 발견하도록 트리거 통계를 매주 확인하세요.
- 성공률 지표로 워크플로우 상태를 살펴보세요.
- 비슷한 워크플로우끼리 트리거를 비교해 개선할 부분을 찾아보세요.

---

## 자주 묻는 질문

### **Unmatched** 수치가 높은데 무엇부터 확인해야 하나요?
**Trigger Stats Panel**을 열고 **Reason for Unmatch**를 확인하세요. 값이 잘못됐거나, 필드가 비어 있거나, 트리거를 잘못 선택한 경우가 흔한 원인이에요. 트리거 유형과 필터를 다시 확인하고, 트리거 목록에 있는 해당 트리거 설명과 비교해 보세요.

### Trigger Stats 안에서 필터나 검색을 할 수 있나요?
네, 통계 패널에서 날짜 범위로 필터링하고 연락처로 검색할 수 있어요.

### 이 기능이 트리거가 워크플로우를 시작하는 방식을 바꾸나요?
아니요. 트리거와 액션은 기존 워크플로우 방식 그대로 동작해요. 이벤트(트리거)가 흐름을 시작하고, 이후 액션이 순서대로 실행돼요. **Trigger Narration**과 **Trigger Stats**는 볼 수 있는 정보만 늘려 줄 뿐, 실행 방식은 바꾸지 않아요.

### 수치는 얼마나 자주 갱신되나요?
통계는 실시간으로 업데이트돼요. 보통 트리거 이벤트가 발생하고 몇 초 안에 새 시도 건수가 보여요.

### Trigger Stats가 트리거가 실행되는 방식을 바꾸나요?
아니요. 볼 수 있는 정보만 추가되고, 트리거 로직과 실행 방식은 그대로예요.

### **Attempted**는 무엇을 기준으로 집계하나요?
트리거가 평가한 연락처는 필터 조건에 맞든 맞지 않든 모두 **Attempted**에 1건씩 더해져요.

### 데이터는 얼마 동안 보관되나요?
**Trigger Stats** 패널에는 최근 30일 동안의 데이터가 저장돼요.
