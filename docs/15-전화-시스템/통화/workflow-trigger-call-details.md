---
원문: /support/solutions/articles/155000002552-workflow-trigger-call-details
번역일: 2026-11-06
카테고리: 15-전화-시스템
---

# 워크플로우 트리거 — Call details(통화 상세정보)

**Call details**(통화 상세정보) 트리거는 통화가 특정 상태가 되면 워크플로우를 시작해요. 부재중 통화 후속 연락이나 팀 알림처럼 통화 결과에 따른 작업을 자동으로 처리할 때 쓰세요.

## Call details 트리거란?

**Call details** 트리거는 통화가 통화 중(busy), 취소(canceled), 음성사서함(voicemail), 완료(completed), 응답 없음(not answered) 같은 상태가 되면 작동해요. 후속 연락, 알림, 업무 배정을 자동으로 처리할 수 있어요. 통화 방향이나 통화 상태 같은 필터로 비즈니스에 맞게 조정할 수도 있어요.

## 주요 장점

- 고객 후속 관리 강화: 놓친 통화나 완료된 통화에 대한 후속 작업을 자동으로 실행해서, 응대하지 못한 고객이 없도록 도와줘요.
- 업무 효율 향상: 통화 결과에 따라 작업과 알림을 자동으로 처리해서 수작업을 줄여 줘요.
- 맞춤형 워크플로우: 통화 방향, 특정 통화 상태 같은 필터로 자동화 조건을 세밀하게 정할 수 있어요.
- 워크플로우 간 연결: 워크플로우를 서로 연결해서 복잡한 상황이나 여러 단계로 이루어진 소통 과정을 처리할 수 있어요.
- 팀 협업 개선: 통화 결과를 팀원에게 바로 알려서 빠르게 대응할 수 있어요.

## Call details 트리거 설정하기

다음 단계를 따르세요.

### 워크플로우 열기

1. 왼쪽 메뉴에서 **자동화 > 워크플로우**로 이동하세요.
2. 처음부터 새 워크플로우를 만들거나, **Call details** 트리거를 추가할 기존 워크플로우를 선택하세요.

### 트리거 추가하기

1. **Add New Trigger**(새 트리거 추가)를 클릭하세요.
2. 드롭다운 메뉴에서 **Call details**를 선택하세요.

### 트리거 이름 정하기

트리거 이름을 알아보기 쉽게 입력하세요. 예를 들어 "부재중 통화 후속 조치"처럼 쓸 수 있어요.

![트리거 이름 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076744261/original/j65PwW7rbegBHfMU1AV5o1l9DAbvynDdUQ.png?1784874698)

### 필터 설정하기

필터로 트리거 조건을 세부적으로 정해요.

![트리거 필터 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076744279/original/TaoQmZrl8RSMEgFxRqzWvGUXuk5zhNpF9w.png?1784874750)

#### Call Direction(통화 방향)

수신 통화(incoming)인지 발신 통화(outgoing)인지 선택하세요.

![Call Direction 필터 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076744304/original/ajwyEdpm0wGv5Lf4F1sz2MAjVZTmBTfm9w.png?1784874781)

#### Call Details(통화 상세정보)

워크플로우를 시작할 통화 상세정보를 선택하세요. 예를 들면 busy(통화 중), voicemail(음성사서함), completed(완료)가 있어요.

![Call Details 필터 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076744338/original/lGDHvW02K9dyl-dCDMwn1CI_6gyy0z6phg.png?1784874812)

#### In Workflow(워크플로우 내)

이 트리거를 다른 워크플로우와 연결해서 자동화를 이어 갈 수 있어요. 드롭다운 메뉴에서 기존 워크플로우를 선택하세요.

### 트리거 저장하기

**Save**(저장) 버튼을 클릭해 설정을 저장하세요.

### 테스트하고 게시하기

1. 테스트 데이터로 워크플로우가 제대로 작동하는지 확인하세요.
2. 확인이 끝나면 **Publish**(게시) 토글을 켜서 워크플로우를 활성화하세요.

## 사용 사례

이 트리거는 다음과 같은 상황에서 쓸 수 있어요.

### 부재중 통화 후속 조치

- 시나리오: 통화 중이거나 응답하지 못한 부재중 통화에 빠르게 후속 연락을 해서 고객과의 관계를 이어 가고 싶어요.
- 트리거 설정
  - 트리거: **Call details**
  - 필터: **Call Status**(통화 상태)가 "busy"(통화 중) 또는 "not answered"(응답 없음)- 결과: 워크플로우가 영업팀에 알림을 보내고, CRM에 후속 작업을 만들고, 부재중 통화 내용을 기록해요.

![부재중 통화 후속 조치 워크플로우 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039465697/original/6HYUEqAFpCabBNGrClIBtB6_JHLpwbnzUw.png?1736333762)

### 고객 지원 콜백 워크플로우

- 시나리오: 고객 지원팀에 걸려 온 수신 통화에 응답하지 못해서, 콜백 일정을 자동으로 잡아야 해요.
- 트리거 설정
  - 트리거: **Call details**
  - 필터: **Call Direction**이 "incoming"(수신)이고 **Call details**가 "not answered"(응답 없음)
- 결과: 워크플로우가 지원팀에 알림을 보내고, 콜백 일정을 잡고, CRM에서 연락처의 활동 로그를 업데이트해요.

### 영업 기회 후속 관리

- 시나리오: 영업 담당자가 발신 통화를 마쳤어요. 통화 결과를 기록하고 다음 할 일을 예약해야 해요.
- 트리거 설정
  - 트리거: **Call details**
  - 필터: **Call Direction**이 "outgoing"(발신)이고 **Call details**가 "completed"(완료)
- 결과: 워크플로우가 통화 결과를 기록하고, 연락처에게 후속 이메일을 보내고, 영업 파이프라인에서 다음 통화를 예약해요.

### 팀원에게 음성사서함 알림 보내기

- 시나리오: 고객이 음성 메시지를 남겼어요. 담당 팀원에게 알려야 해요.
- 트리거 설정
  - 트리거: **Call details**
  - 필터: **Call details**가 "voicemail"(음성사서함)
- 결과: 워크플로우가 팀원에게 알림을 보내고, CRM에 음성사서함 내용을 기록하고, 후속 작업을 만들어요.

### 통화 상태 리포트

- 시나리오: 관리자가 취소되거나 놓친 통화를 살펴보면서 운영상 병목 구간을 찾고 싶어요.
- 트리거 설정
  - 트리거: **Call details**
  - 필터: **Call Status**가 "canceled"(취소) 또는 "busy"(통화 중)
- 결과: 워크플로우가 통화 상태를 요약한 주간 리포트를 만들어 관리자에게 보내서 분석할 수 있게 해요.

## 자주 묻는 질문

### 한 워크플로우에서 여러 통화 상태를 처리할 수 있나요?
네. 필터를 추가하면 여러 통화 상태에서 워크플로우가 시작되도록 설정할 수 있어요.

### 같은 통화의 상태가 짧은 시간에 여러 번 바뀌면 어떻게 되나요?
트리거는 상태가 바뀔 때마다 작동해요. 같은 작업이 반복 실행되지 않도록 조건이나 대기 시간(cooldown)을 함께 설정하는 것이 좋아요.

### 이 트리거를 다른 워크플로우와 연결할 수 있나요?
네. **In Workflow** 필터로 이 트리거를 다른 워크플로우와 연결하면, 여러 프로세스에 걸친 자동화를 이어서 만들 수 있어요.

### 수신 통화와 발신 통화는 어떻게 구분하나요?
**Call Direction** 필터로 수신 통화에 적용할지, 발신 통화에 적용할지 정하세요.

### 외부 통화 연동에도 이 트리거를 쓸 수 있나요?
네. CRM이 외부 통화 연동을 지원하면, 외부 시스템에서 받은 통화 데이터를 기준으로 이 트리거가 워크플로우를 시작할 수 있어요.
