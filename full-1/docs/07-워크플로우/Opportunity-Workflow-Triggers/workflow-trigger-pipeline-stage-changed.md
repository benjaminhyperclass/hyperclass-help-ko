---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002493-workflow-trigger-pipeline-stage-changed
번역일: 2026-11-06
카테고리: 07-워크플로우
---

# 워크플로우 트리거 — Pipeline Stage Changed(파이프라인 단계 변경)

**Pipeline Stage Changed**(파이프라인 단계 변경) 트리거는 기회가 한 단계에서 다른 단계로 옮겨질 때 워크플로우를 자동으로 시작해요. 후속 연락, 알림, 정보 업데이트를 제때 처리하고 싶을 때 사용하세요. 이 문서에서는 트리거가 하는 일과 장점, 설정 방법을 알려 드려요.

## Pipeline Stage Changed 트리거란?

**Pipeline Stage Changed** 트리거는 영업 파이프라인 안에서 기회가 한 단계에서 다른 단계로 이동할 때 작동해요. 단계가 바뀔 때마다 워크플로우를 자동으로 실행해서 놓치는 리드가 없게 도와줘요. 기회가 다음 단계로 나아갈 때, 이전 단계로 되돌아갈 때, 다른 파이프라인 단계로 옮겨질 때 실행할 액션을 정할 수 있어요.

## 주요 장점

- 후속 연락 자동화: 단계가 바뀔 때마다 알림이 가기 때문에 영업 담당자가 잠재 고객과 꾸준히 소통할 수 있어요.
- 수작업 감소: 파이프라인 이동을 일일이 확인하지 않아도 돼서, 영업 전략을 세우는 일에 시간을 더 쓸 수 있어요.
- 파이프라인 현황 파악: 기회가 어디까지 진행됐는지 실시간으로 알 수 있어서 예측과 의사 결정에 도움이 돼요.
- 세부 조건 설정: 파이프라인, 단계, 담당자, 리드 금액 같은 조건에 따라 워크플로우를 설정할 수 있어요.
- 응답 시간 단축: 고객 연락과 내부 소통을 자동화해서 중요한 영업 단계에서 빠르게 대응할 수 있어요.

## 트리거 설정하기

### 워크플로우 빌더 열기

1. **자동화 > 워크플로우**로 이동해요.
2. **Create New Workflow**(새 워크플로우 만들기)를 클릭하거나, 이미 있는 워크플로우를 열어요.

![워크플로우 목록 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042344919/original/Z7YdmZWW7YgF69trLKngBYbP9khNZlzM7Q.jpeg?1740653065)

### 트리거 선택하기

1. **+ Add New Trigger**(새 트리거 추가)를 클릭해요.
2. 목록에서 **Pipeline Stage Changed**를 검색해요.
3. **Pipeline Stage Changed**를 선택해요.

![트리거 목록에서 Pipeline Stage Changed 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042344941/original/kfZD3Kxp2NTZ21LG1l8qVDolI6EWELeE-Q.jpeg?1740653081)

### 트리거 이름 정하기

트리거의 목적이 드러나도록 알아보기 쉬운 이름을 붙여요. 워크플로우가 많아도 각 트리거가 무슨 역할을 하는지 금방 알 수 있어요.

![트리거 이름 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042345055/original/dXHpPUsrNAiJDuS17dtyEYvBnHSGw1O1DA.jpeg?1740653162)

### 필터 설정하기

필터로 워크플로우가 시작되는 조건을 정할 수 있어요. 기회가 바뀔 때마다 워크플로우를 실행하는 대신, 우리 비즈니스에 중요한 기회에만 실행되도록 범위를 좁혀 줘요. 특정 파이프라인의 기회, 특정 팀원이 맡은 기회, 특정 사유로 고객전환실패 처리된 기회처럼 원하는 조건으로 자동화를 세밀하게 조정할 수 있어요. 그러면 워크플로우가 영업 프로세스에 더 정확하게 맞아요.

![필터 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065763970/original/xa_HvOOR8vPFm_8fQBtF4lMuOsVb_tAy5g.png?1772101325)

#### Assigned To 필터

**Assigned To**(담당자) 필터는 기회를 맡은 사용자를 기준으로 워크플로우를 시작해요. 기회가 파이프라인에서 이동할 때 후속 연락을 안내하거나, 작업을 배정하거나, 특정 팀원에게 알림을 보낼 때 유용해요.

![Assigned To 필터 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042363650/original/j4BOkGGKQ7xDL_xBkrZXtqgtrryqMg8biQ.png?1740664257)

#### Tag 필터(이전 이름: Has Tag)

**Tag**(태그) 필터를 쓰면 특정 태그가 있는 기회에서만 워크플로우가 시작돼요. 기회를 나누거나, 리드 우선순위를 정하거나, 대상을 좁혀 자동화할 때 특히 유용해요. 태그는 리드 유형, 우선순위, 유입 경로 같은 기준으로 기회를 분류하는 라벨이에요. 필터를 설정할 때 워크플로우가 시작되려면 어떤 태그가 있어야 하는지 지정할 수 있어요. 그러면 알맞은 기회에만 자동화가 적용돼요.

예시: 기회에 "높은 우선순위" 태그가 있으면, 다음 단계로 이동할 때 워크플로우가 시작돼요.

![Tag 필터 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155065763802/original/vDBNog5lhciogk9I3LPoOK0x7CzN_XOshg.png?1772101275)

#### In Pipeline 필터

**In Pipeline**(파이프라인 내) 필터는 워크플로우 트리거를 특정 파이프라인으로 한정해요. 선택한 파이프라인 안의 기회에서만 자동화가 시작돼요. 영업 방식, 고객 유형, 서비스 종류별로 파이프라인을 여러 개 운영할 때 특히 유용해요. 파이프라인을 지정하면 관련 있는 기회에만 워크플로우가 적용되고, 관련 없는 파이프라인에서 불필요하게 실행되는 일을 막을 수 있어요.

예시: "엔터프라이즈 영업" 파이프라인 안에서 기회가 이동할 때만 워크플로우가 시작돼요.

![In Pipeline 필터 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042363876/original/oAKEstTXufxn_LLmvtnYhsr8_NdH6YWYfA.png?1740664390)

#### Lead Value 필터

**Lead Value**(리드 금액) 필터는 기회에 입력된 금액을 기준으로 워크플로우를 시작해요. 리드의 금액 규모에 따라 자동화를 다르게 적용할 수 있어요. 금액이 큰 딜에는 알맞은 후속 조치를 하고, 금액이 작은 기회는 다르게 처리할 수 있어요.

예시: 기회 금액이 10,000달러를 넘으면 영업 매니저에게 알림을 보내요.

![Lead Value 필터 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042363981/original/ih30kq-4ZMDpZHus1Oh3AXUEyk7BrYyQtw.png?1740664432)

#### Lost Reason 필터

**Lost Reason**(실패 사유) 필터는 기회가 **Lost**(고객전환실패)로 바뀌고 특정 사유가 지정됐을 때 워크플로우를 시작해요. 딜을 놓치는 이유를 파악하고, 후속 조치를 자동화하고, 잠재 고객을 되찾거나 같은 손실을 막는 전략을 세울 때 활용할 수 있어요. 기회가 파이프라인에서 Lost 단계로 이동하면 사용자가 "가격이 너무 높음", "경쟁사 선택", "응답 없음" 같은 사유를 지정할 수 있어요. 특정 사유가 선택됐을 때만 워크플로우가 시작되도록 설정할 수 있어요.

예시: 실패 사유가 "예산 제약"이면, 유연한 요금제를 안내하는 후속 이메일을 자동으로 보내요.

![Lost Reason 필터 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042364228/original/kki_iWGEv2YLSlewo_PlI4yixV68EY5vVQ.png?1740664590)

#### Pipeline Stage 필터

**Pipeline Stage**(파이프라인 단계) 필터는 기회가 파이프라인의 특정 단계로 이동할 때 워크플로우를 시작해요. 단계 이동에 맞춰 자동화할 수 있어서, 기회가 진행될 때 후속 연락, 작업 배정, 알림을 제때 처리할 수 있어요. 어떤 단계 이동에서 워크플로우를 시작할지 정할 수 있어서 리드를 관리하고 영업 파이프라인의 흐름을 파악하기 쉬워져요.

예시: 기회가 "협상"에서 "계약 성사"로 이동하면 재무팀에 알림을 보내요.

![Pipeline Stage 필터 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042364328/original/JHzyQQFJyOxBYMLPCT2PKB8tlFggH5aVCQ.png?1740664628)

#### Status 필터

**Status**(상태) 필터는 기회의 현재 상태를 기준으로 워크플로우를 시작해요. 기회가 영업 과정의 특정 상태가 됐을 때 자동화가 실행되기 때문에, 팀이 파이프라인을 효과적으로 관리할 수 있어요. 선택할 수 있는 상태는 다음과 같아요.

- **Open**(진행 중): 기회가 아직 활성 상태이고 진행 중이에요.
- **Won**(고객전환성공): 딜이 성공적으로 마무리됐어요.
- **Lost**(고객전환실패): 기회가 판매로 이어지지 않았어요.
- **Abandoned**(중단됨): 더 이상 해당 기회를 진행하지 않아요.

예시: 기회가 **Won**으로 바뀌면 환영 이메일 시퀀스를 시작해요.

![Status 필터 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042364875/original/g0iRsRHN_JARCYsJozticR4tVJUgZ-7hIQ.png?1740664959)

### 워크플로우 액션 정하기

트리거를 설정했다면, 기회의 단계가 바뀐 뒤 실행할 액션을 정해요.

- 알림 보내기: 담당 영업 담당자에게 단계 변경을 알려요.
- 기회 상세 업데이트: 상태, 우선순위, 태그 같은 항목을 자동으로 바꿔요.
- 후속 작업 만들기: 영업팀에 잠재 고객에게 연락하는 작업을 배정해요.
- 다른 워크플로우 시작하기: 기회의 진행 상황에 따라 추가 워크플로우를 실행해요.
- 연락처에게 이메일 보내기: 파이프라인 이동에 맞춰 고객 소통을 자동화해요.

### 저장하고 게시하기

1. 필터와 액션 설정을 마치면 **Save Trigger**(트리거 저장)를 클릭해 변경 사항을 적용해요.
2. 필요한 워크플로우 단계가 모두 있는지 확인한 뒤 **Publish**(게시)를 클릭해 자동화를 켜요.
3. **Test**(테스트)로 기회를 직접 여러 단계로 옮겨 보면서 워크플로우가 의도대로 작동하는지 확인해요.

## 자주 묻는 질문

### 기회를 직접 다른 단계로 옮기면 어떻게 되나요?
기회를 직접 다른 단계로 옮겨도, 설정한 필터 조건에 맞으면 워크플로우가 시작돼요.

### 한 워크플로우에서 필터를 여러 개 쓸 수 있나요?
네, 여러 필터를 함께 쓸 수 있어요. 예를 들어 특정 파이프라인과 단계에 있는 기회가 특정 사용자에게 배정됐을 때만 액션을 실행하는 식으로 아주 구체적인 자동화 규칙을 만들 수 있어요.

### 이 트리거는 기회와 관련된 다른 트리거와 어떻게 달라요?
**Pipeline Stage Changed** 트리거는 **Opportunity Status Changed**(기회 상태 변경)나 **Opportunity Created**(기회 생성) 같은 다른 트리거와는 별개로 작동해요. 필요하면 트리거를 여러 개 설정해서 다양한 자동화 상황을 모두 다룰 수 있어요.

### 기회가 이전 단계로 되돌아가면 어떻게 되나요?
기회가 이전 단계로 되돌아가도 조건이 맞으면 워크플로우가 다시 시작돼요.

### 이 트리거로 과거 단계 이동 기록도 확인할 수 있나요?
아니요. 이 트리거는 실시간으로 단계가 바뀔 때만 작동해요. 과거 변경 내역은 기회의 활동 로그에서 확인할 수 있어요.
