---
원문: https://help.gohighlevel.com/support/solutions/articles/155000009237-loop-action
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 액션 — Loop(반복)

**Loop**(반복) 액션은 목록의 항목마다, 또는 숫자 범위의 숫자마다 액션 묶음을 한 번씩 실행해요. 트리거 하나로 여러 데이터가 한꺼번에 들어올 때 쓰면 좋아요.

## 개요

**Loop** 액션은 목록의 항목마다, 또는 숫자 범위의 숫자마다 액션 묶음을 한 번씩 실행해요.

예를 들어 웹훅 하나에 서비스 요청 3건이 함께 들어왔고, 요청마다 기회, 작업, 메모를 만들고 싶을 때 쓰세요. 반복 기능이 없으면 코드를 짜거나 복잡한 우회 방법으로 같은 액션을 항목 수만큼 되풀이해야 해요.

## 주요 장점

- 트리거 하나로 여러 항목 처리: 웹훅 하나나 폼 제출 한 건으로 기회, 작업, 메모를 여러 개 만들 수 있어요.
- 코드 없이 설정: 평소 쓰던 드래그 앤 드롭 액션으로 반복 로직을 만들어요.
- 항목별 데이터 사용: 반복 안에서 **Loop Item**(현재 항목) 값을 쓰면 지금 처리 중인 항목의 필드를 모든 액션에 넣을 수 있어요.
- 정해진 횟수만큼 실행: 액션을 5번이나 10번 반복하고 싶다면 숫자 범위를 고르세요.
- 순차 또는 병렬 실행: 반복을 하나씩 차례로 실행하거나, 동시에 실행해서 외부 시스템과 주고받는 작업을 더 빠르게 처리할 수 있어요.
- 한눈에 보이는 로그: **Test** 탭과 **Execution Logs**(실행 로그) 화면에서 모든 반복과 그 안의 액션을 확인할 수 있어요.

## 액션 이름

Loop

## 액션 설명

목록이나 숫자 범위를 하나씩 돌면서, 이 반복 안에 있는 액션을 항목마다 한 번씩 실행해요.

## 액션 상세 정보

| 필드 | 설명 | 필수 여부 |
| --- | --- | --- |
| **Action Name**(액션 이름) | 워크플로우 캔버스에 표시되는 이름이에요. 기본값은 “Loop”예요. | 예 |
| **Loop Over**(반복 대상) | 반복할 대상을 정해요. **A list of items**(항목 목록) 또는 **A range of numbers**(숫자 범위) 중에서 고르세요. | 예 |
| **Items**(항목 목록) | **A list of items**를 고르면 나타나요. 반복이 돌 목록이에요. 인바운드 웹훅 배열처럼 이전 단계의 값을 골라요(예: `{{inboundWebhookRequest.services}}`). | 목록일 때 예 |
| **Start Number**(시작 숫자) | **A range of numbers**를 고르면 나타나요. 세기 시작할 첫 숫자예요. 기본값은 1이에요. | 숫자 범위일 때 예 |
| **End Number**(끝 숫자) | **A range of numbers**를 고르면 나타나요. 세기를 끝낼 마지막 숫자예요. 기본값은 10이에요. | 숫자 범위일 때 예 |
| **Execution Mode**(실행 방식) | **Sequential**(순차, 기본값, 토글 꺼짐)은 반복을 하나씩 차례로 실행해요. **Parallel**(병렬, 토글 켜짐)은 여러 반복을 동시에 실행해요. | 아니요 |

## 설정 방법

아래 순서는 가장 흔한 경우예요. 목록을 가져오는 트리거를 두고, 그 목록의 항목마다 반복을 실행해요.

### 1단계: Loop 액션 추가

워크플로우 빌더에서 반복을 시작할 위치의 + 아이콘을 클릭하세요. **Actions**(액션) 패널에서 Loop를 검색해 선택하세요.

![반복 앞 단계 아래의 + 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083699621/original/J4-d0oLML-fk7qSHgUvn7yxsM4ZnTEj7ww.jpg?1792438399)

*반복 앞 단계 아래의 + 아이콘을 클릭하세요.*

![액션 패널에서 Loop 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083699805/original/lqY0pULzSFGuYZ3c37raStUmE_ZNfsKFVg.jpg?1792438722)

*액션 패널에서 Loop를 선택하세요. 캔버스에 반복 블록이 나타나요.*

### 2단계: 반복할 대상 선택

**Loop Over**에서 옵션을 하나 고르세요. 각 필드 옆의 i 아이콘에 마우스를 올리면 짧은 설명이 나와요.

- **A list of items**: 주문에 담긴 상품처럼, 목록의 항목마다 액션을 한 번씩 실행해요.
- **A range of numbers**: 시작 숫자부터 끝 숫자까지 숫자마다 액션을 한 번씩 실행해요. 정해진 횟수만큼 반복하고 싶을 때 쓰세요.

![i 아이콘 설명이 열린 Loop Over 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083699811/original/rd2TWVGVlvSckLClveyKtHEBVHBQE9hvfg.jpg?1792438735)

*i 아이콘 설명이 열린 **Loop Over** 옵션이에요.*

### 3단계: 목록 또는 범위 설정

**목록(A list of items)일 때**: **Items** 필드에서 태그 아이콘을 클릭하세요. **Previous steps**(이전 단계)를 열고 목록이 들어 있는 트리거나 단계를 선택한 다음, 목록 필드를 고르세요. 아래 예시에서는 **Inbound Webhook**(인바운드 웹훅) 트리거의 services 배열이 목록이에요.

![웹훅의 services 목록으로 설정한 Items](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083699812/original/NDnSAkywISjzj_KYD2II6ufjhxrmpI1DFA.jpg?1792438737)

*인바운드 웹훅의 services 목록으로 설정한 **Items**예요.*

**숫자 범위(A range of numbers)일 때**: **Start Number**와 **End Number**를 입력하세요. 필드 아래 도움말에 반복 안의 액션이 몇 번 실행되는지 표시돼요.

![1부터 10까지의 숫자 범위 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083699814/original/hQj_0oygvvGRquJCzFQdMa7aJB31g088iA.jpg?1792438740)

*1부터 10까지의 숫자 범위예요. 반복 안의 액션이 10번 실행돼요.*

### 4단계: 실행 방식 선택

**Execution Mode** 토글을 끈 상태로 두면 **Sequential**이에요. 한 반복이 끝나야 다음 반복이 시작돼요. 토글을 켜면 **Parallel**이에요. 여러 반복이 동시에 실행돼요. 반복 안의 액션이 외부 시스템을 호출해서 응답을 기다려야 한다면 **Parallel**이 더 빨라요.

### 5단계: 액션 저장

**Save action**(액션 저장)을 클릭하세요. 캔버스에 점선 상자가 있는 반복 블록이 나타나고, 상자 안에 **Please select action**(액션을 선택해 주세요) 안내 문구가 표시돼요.

### 6단계: 반복 안에 액션 추가

점선 반복 상자 안의 + 아이콘을 클릭하고 반복할 액션을 추가하세요. 필드 안에서 태그 아이콘을 클릭한 뒤 **Custom values**(커스텀 값) > **Loop Item**을 열면 현재 항목의 필드를 넣을 수 있어요. 예를 들어 **Name**(이름), **Estimated Value**(예상 금액), **Urgency**(긴급도), **Preferred Date**(희망 날짜)가 있어요.

![반복 안 모든 액션의 Custom values에 나타나는 Loop Item](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083699815/original/mI8FT5lbHN3-RyiSv6YImWWmXPJtxBiMUQ.jpg?1792438742)

*반복 안의 모든 액션에서 **Custom values** 아래에 **Loop Item**이 나타나요.*

![Loop Item 필드를 연결한 기회 만들기 또는 업데이트 액션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083699816/original/eawsea1xsfqcuupYIv8K73vL8xTJ_RSSPg.jpg?1792438743)

***Create or update opportunity**(기회 만들기 또는 업데이트) 액션에서 **Opportunity Name**(기회 이름)과 **Opportunity Value**(기회 금액)를 **Loop Item** 필드에 연결한 모습이에요.*

![Loop Item 필드로 제목과 설명을 만든 작업 추가 액션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083699817/original/8m8-DfPVMXkdb7yVB33UOqeINLgRoMk1Ow.jpg?1792438745)

***Add task**(작업 추가) 액션에서 제목과 설명을 **Loop Item** 필드로 채운 모습이에요.*

![Custom values에서 고른 Loop Item 값을 넣은 메모 추가 액션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083699818/original/FV52IJit1CNdDaXZQcXIpyfujf12Hr4vJw.jpg?1792438746)

***Add notes**(메모 추가) 액션에서 **Custom values**로 고른 **Loop Item** 값을 넣은 모습이에요.*

### 7단계: 완성된 반복 확인

점선 상자 안의 액션은 모두 항목마다 한 번씩 실행돼요. 상자 아래에 둔 액션은 반복이 모두 끝난 뒤에 실행돼요.

![액션 3개가 들어 있는 완성된 반복](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083699820/original/iU1fOeTOywTJaGkw7O4sT0ZA5MBRAZNszQ.jpg?1792438748)

*반복 안에 **Create or update opportunity**, **Add task**, **Note** 액션 3개가 있어요.*

## 동작 방식과 로직

| 규칙 | 동작 |
| --- | --- |
| 반복 횟수 | 목록의 항목마다, 또는 범위의 숫자마다 한 번씩 반복해요. 서비스 3개가 있는 목록이면 안쪽 액션이 3번 실행돼요. |
| **Sequential** 방식 | 1번째 반복의 액션이 모두 끝난 뒤에야 2번째 반복이 시작돼요. |
| **Parallel** 방식 | 여러 반복이 동시에 실행돼요. 안쪽 액션이 외부 시스템을 호출할 때 쓰세요. |
| 목록 반복에서의 **Loop Item** | 현재 항목의 필드가 들어 있어요. 반복마다 다른 항목이 들어와요. |
| 숫자 범위 반복에서의 **Loop Item** | 숫자 범위 반복에는 목록 항목이 없어서 항목 필드가 비어 있어요. 대신 **Custom values** > **Loop Item**의 반복 카운터를 쓰세요. 카운터에는 현재 숫자가 들어 있어요. |
| 반복 뒤의 액션 | 모든 반복이 끝난 뒤 한 번만 실행돼요. |

## 테스트와 실행 로그

### 테스트 실행

**Test workflow**(워크플로우 테스트)를 클릭하고 **Test using events**(이벤트로 테스트)를 선택한 뒤 **Listening for events**(이벤트 리스닝)를 켜세요. 실제 트리거 이벤트를 보내세요. 예를 들어 웹훅을 다시 전송해요. 이벤트가 나타나면 선택하고 **Start test run**(테스트 실행 시작)을 클릭하세요.

![인바운드 웹훅 이벤트를 기다리는 워크플로우 테스트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083699821/original/ZZegYjVOUcZ3vzBKrL9joIkj6biULnlIhQ.jpg?1792438749)

*인바운드 웹훅 이벤트를 기다리는 **Test workflow** 화면이에요.*

### 반복 결과 확인

실행이 끝나면 **Loop** 단계를 클릭하고 **Test** 탭을 여세요.

- **Input**(입력)에는 이번 실행에 쓴 **Action name**, **Items**, **Mode**, **Loop Over** 값이 표시돼요.
- **Output**(출력)에는 반복 전체의 **Items**, **Succeeded**(성공), **Failed**(실패), **Duration**(소요 시간)이 표시돼요.
- **Iterations**(반복 목록)에는 반복마다 상태와 시간이 나열돼요. 반복을 펼치면 그 안의 모든 액션과 각 상태를 볼 수 있어요. 화살표로 반복 사이를 이동하세요.

![Loop Input과 Iterations 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083699822/original/b3nuJ1irK8z-drvK08sH2fbRLTHYAfj7ew.jpg?1792438751)

*Loop **Input**과 **Iterations** 목록이에요.*

![항목 3개, 성공 3개, 실패 0개로 표시된 Loop Output](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083699824/original/_SdJ1hC9QTXlP0KseYD1Q-78oUijiLDA0g.jpg?1792438752)

*Loop **Output**: 항목 3개, 성공 3개, 실패 0개예요.*

반복 안의 액션 옆에 있는 열기 아이콘을 클릭하면 그 반복에서 해당 액션의 **Input**과 **Output**을 볼 수 있어요. 위쪽 헤더에는 지금 보고 있는 반복이 표시돼요. 예: **Iteration 3 of 3**.

![3번째 반복의 기회 만들기 또는 업데이트 출력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155083699825/original/KRlycr2IaEdlqLmI_wrtAKELdeCrC_86KQ.jpg?1792438754)

*3개 중 3번째 반복의 **Create or update opportunity** 출력이에요.*

## 사용 사례

시나리오: 서비스 요청 폼이 고객 한 명당 웹훅을 하나씩 보내요. 웹훅에는 연락처 정보와 서비스 목록이 들어 있고, 서비스마다 이름, 예상 금액, 긴급도, 희망 날짜가 있어요. 서비스마다 기회 1개, 작업 1개, 메모 1개를 만들고 싶어요.

1. 트리거: **Inbound Webhook**. 페이로드에 연락처 객체와 서비스 3개가 담긴 services 목록이 들어 있어요.
2. 액션: **Create contact**(연락처 만들기). 웹훅의 연락처 필드에서 **First name**(이름), **Email**(이메일), **Phone**(전화번호)을 연결해요.
3. 액션: **Loop**. **Loop Over**는 **A list of items**로 하고, **Items**는 **Inbound Webhook** 트리거의 services 목록으로 해요.
4. 반복 안: **Create or update opportunity**. 파이프라인과 단계는 원하는 대로 골라요. **Opportunity Name**은 **Loop Item** > **Name**, **Opportunity Value**는 **Loop Item** > **Estimated Value**, **Status**(상태)는 open으로 해요.
5. 반복 안: **Add task**. **Title**(제목)은 **Loop Item** > **Name**으로 해요. **Description**(설명)에는 **Loop Item**의 **Name**, **Estimated Value**, **Urgency**를 넣어요. **Due date**(마감일)는 **Loop Item** > **Preferred Date**로 하고, 담당 사용자를 지정해요.
6. 반복 안: **Add notes**. **Title**은 **Loop Item** > **Name**, **Note**(메모)는 **Loop Item** > **Urgency**로 해요.
7. 결과: 지붕 수리, 배수관 청소, 외벽 도장이 담긴 웹훅이 들어오면 반복이 3번 실행돼요. 기회 3개, 작업 3개, 메모 3개가 만들어져요.

## 자주 묻는 질문

### Loop Item이 뭔가요?

**Loop Item**은 반복이 지금 처리하고 있는 항목이에요. 반복 안의 어떤 액션에서든 **Custom values** > **Loop Item**을 열면 그 항목의 필드를 넣을 수 있어요. 값은 반복할 때마다 바뀌어요.

### 반복은 몇 번 실행되나요?

목록의 항목마다 한 번, 또는 **Start Number**부터 **End Number**까지 숫자마다 한 번씩 실행돼요. 숫자 범위일 때는 필드 아래 도움말에 실행 횟수가 표시돼요.

### Sequential과 Parallel은 어떻게 다른가요?

**Sequential**은 반복을 순서대로 하나씩 실행해요. **Parallel**은 여러 반복을 동시에 실행해요. 안쪽 액션이 외부 시스템의 응답을 기다려야 할 때 **Parallel**이 더 빨라요.

### 숫자 범위(A range of numbers)에서도 Loop Item을 쓸 수 있나요?

네, 하지만 반복 카운터에만 쓸 수 있어요. 숫자 범위 반복에는 목록 항목이 없어서 항목 필드가 비어 있어요. **Custom values** > **Loop Item**을 열고 카운터를 고르면 현재 숫자를 넣을 수 있어요.

### 반복마다 어떤 일이 일어났는지 어디서 볼 수 있나요?

실행한 뒤 **Loop** 단계를 열고 **Test** 탭으로 이동하세요. **Iterations** 목록에 모든 반복과 그 안의 액션이 표시돼요. 액션의 열기 아이콘을 클릭하면 해당 반복에서의 **Input**과 **Output**을 볼 수 있어요.

### 항목은 어디에서 가져오나요?

이전 단계에서 만들어진 목록이면 무엇이든 돼요. 예를 들어 인바운드 웹훅 페이로드의 배열이 있어요. **Items** 필드에서 태그 아이콘으로 골라요.

### 반복 뒤에 둔 액션도 항목마다 실행되나요?

아니요. 점선 반복 상자 안의 액션만 반복돼요. 상자 아래의 액션은 반복이 모두 끝난 뒤 한 번만 실행돼요.
