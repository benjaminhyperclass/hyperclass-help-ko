---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000002552-workflow-trigger-call-details
번역일: 2026-08-11
카테고리: 07-워크플로우 > Events Workflow Triggers
---

# 워크플로우 트리거 - 전화 세부정보(Call Details)

이 아티클에서는 전화 통화 결과에 따라 작업을 자동화하는 강력한 도구인 전화 세부정보(Call Details) 워크플로우 트리거에 대해 설명해요. 이 트리거가 무엇을 하는지, 주요 이점은 무엇인지, 단계별 설정 방법, 그리고 실제 활용 사례까지 함께 알아볼게요. 마지막으로 이 기능을 워크플로우(Workflow)에서 더 잘 활용할 수 있도록 자주 묻는 질문도 다룹니다.

## 전화 세부정보(Call Details) 워크플로우 트리거란

전화 세부정보(Call Details) 워크플로우 트리거는 통화가 통화 중(busy), 취소(canceled), 음성 사서함(voicemail), 완료(completed), 부재중(not answered) 등 특정 상태에 도달했을 때 실행돼요. 이 트리거는 후속 조치, 알림, 작업 배정을 자동화하여 비즈니스 프로세스를 효율화하는 데 도움이 돼요. 통화 방향과 전화 세부정보 같은 필터로 커스터마이즈할 수 있어서, 비즈니스의 특정 요구사항에 맞게 워크플로우를 조정할 수 있어요.

## 전화 세부정보(Call Details) 트리거의 주요 이점

- **향상된 고객 후속 관리**: 부재중 또는 완료된 통화에 대한 후속 작업(Action)을 자동화하여 고객과의 상호작용이 누락되지 않도록 해요.
- **효율성 향상**: 통화 결과에 따라 작업과 알림을 자동화하여 수동 작업을 줄여줘요.
- **커스터마이즈 가능한 워크플로우**: 통화 방향과 특정 통화 상태 같은 필터를 사용해 정밀한 자동화를 구성할 수 있어요.
- **원활한 워크플로우 연동**: 복잡한 시나리오나 다단계 커뮤니케이션 프로세스를 처리하기 위해 워크플로우 간 연결을 지원해요.
- **최적화된 팀 협업**: 팀원들에게 통화 결과를 신속하게 알려서 시기적절한 대응이 가능하도록 해요.

## 전화 세부정보(Call Details) 트리거 설정하기

전화 세부정보(Call Details) 워크플로우 트리거를 구현하려면 다음 단계를 따라주세요:

### 워크플로우 설정 접근하기

자동화(Automation) 섹션으로 이동하세요. 새 워크플로우(Workflow)를 처음부터 만들거나, "전화 세부정보" 트리거를 적용하고 싶은 기존 워크플로우를 선택하세요.

### 새 트리거 추가하기

**"새 트리거 추가(Add New Trigger)"**를 클릭하고 드롭다운 메뉴에서 "전화 세부정보(Call details)"를 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076744233/original/0O-lvChkAedb9xi9Zk5MJQQ5yKtGF7Jp4Q.png?1784874665)

### 트리거 이름 짓기

"부재중 전화 후속 조치" 같이 설명적인 이름을 지정하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076744261/original/j65PwW7rbegBHfMU1AV5o1l9DAbvynDdUQ.png?1784874698)

### 필터 설정하기

필터를 사용해 트리거를 커스터마이즈하세요:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076744279/original/TaoQmZrl8RSMEgFxRqzWvGUXuk5zhNpF9w.png?1784874750)

### 통화 방향(Call Direction)

통화가 수신인지 발신인지 지정해요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076744304/original/ajwyEdpm0wGv5Lf4F1sz2MAjVZTmBTfm9w.png?1784874781)

### 전화 세부정보(Call Details)

워크플로우를 실행시킬 전화 세부정보를 선택하세요 (예: 통화 중, 음성 사서함, 완료 등).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076744338/original/lGDHvW02K9dyl-dCDMwn1CI_6gyy0z6phg.png?1784874812)

### 워크플로우 안에서(In Workflow)

트리거를 다른 워크플로우와 연결하여 원활한 자동화 프로세스를 만들어요. 드롭다운 메뉴에서 기존 워크플로우를 선택하기만 하면 돼요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076744403/original/NTqb7vaw68Yl_BvCTro_l_ddaN-ZN-oPug.png?1784874875)

### 트리거 저장하기

저장 버튼을 클릭해서 설정을 확인하세요.

### 테스트 및 발행

테스트 데이터로 워크플로우를 검증하여 정상 작동하는지 확인하세요. 확인이 끝나면 발행(Publish) 토글을 활성화하여 워크플로우를 활성화하세요.

## 활용 사례

이 트리거를 활용할 수 있는 다양한 사례를 소개해요.

### 부재중 전화 후속 조치

**시나리오**: 비즈니스에서 모든 부재중 전화(통화 중 또는 무응답)에 대해 신속하게 후속 조치를 취해 고객 참여를 유지하고자 해요.

**트리거 설정**:
- 트리거: 전화 세부정보(Call details)
- 필터: 통화 상태(Call Status)가 "통화 중(busy)" 또는 "무응답(not answered)"

**결과**: 워크플로우가 영업팀에 알림을 보내고, CRM에 후속 작업(Task)을 생성하며, 부재중 전화 세부정보를 기록해요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039465697/original/6HYUEqAFpCabBNGrClIBtB6_JHLpwbnzUw.png?1736333762)

### 고객 지원 콜백 워크플로우

**시나리오**: 지원팀이 수신 전화를 받지 못했고, 콜백을 자동으로 예약해야 해요.

**트리거 설정**:
- 트리거: 전화 세부정보(Call details)
- 필터: 통화 방향(Call Direction)이 "수신(incoming)"이고, 전화 세부정보가 "무응답(not answered)"

**결과**: 워크플로우가 지원팀에 알림을 보내고, 콜백을 예약하며, CRM에서 연락처의 활동 기록을 업데이트해요.

### 영업 기회 후속 조치

**시나리오**: 영업 담당자가 발신 전화를 완료했고, 시스템이 결과를 기록하고 다음 작업을 예약해야 해요.

**트리거 설정**:
- 트리거: 전화 세부정보(Call details)
- 필터: 통화 방향(Call Direction)이 "발신(outgoing)"이고, 전화 세부정보가 "완료(completed)"

**결과**: 워크플로우가 통화 결과를 기록하고, 연락처에게 후속 이메일을 보내며, 영업 파이프라인(Pipeline)에서 다음 전화를 예약해요.

### 팀원에게 음성 사서함 알림

**시나리오**: 고객이 음성 사서함을 남겼고, 담당 팀원에게 알려야 해요.

**트리거 설정**:
- 트리거: 전화 세부정보(Call details)
- 필터: 전화 세부정보가 "음성 사서함(voicemail)"

**결과**: 워크플로우가 팀원에게 알림을 보내고, CRM에 음성 사서함을 기록하며, 후속 작업(Task)을 생성해요.

### 통화 상태 리포팅

**시나리오**: 매니저가 취소되거나 부재중인 통화를 모니터링하여 운영상의 문제점을 파악하고자 해요.

**트리거 설정**:
- 트리거: 전화 세부정보(Call details)
- 필터: 통화 상태(Call Status)가 "취소(canceled)" 또는 "통화 중(busy)"

**결과**: 워크플로우가 통화 상태를 요약한 주간 리포트를 생성하여 매니저에게 분석용으로 전달해요.

## 자주 묻는 질문

**Q. 이 트리거로 하나의 워크플로우에서 여러 통화 상태를 처리할 수 있나요?**

네, 추가 필터를 넣어서 여러 통화 상태에 대해 워크플로우가 실행되도록 설정할 수 있어요.

**Q. 같은 통화에서 짧은 시간 안에 여러 상태가 발생하면 어떻게 되나요?**

트리거는 상태가 변경될 때마다 실행돼요. 그러므로 중복 작업을 방지하려면 조건이나 대기 시간(Cooldown)을 활용하는 것이 중요해요.

**Q. 이 트리거를 다른 워크플로우와 연결할 수 있나요?**

물론이에요. "워크플로우 안에서(In Workflow)" 필터를 사용하면 이 트리거를 다른 워크플로우와 연결해서 여러 프로세스에 걸친 원활한 자동화를 구현할 수 있어요.

**Q. 수신 전화와 발신 전화를 어떻게 구분하나요?**

통화 방향(Call Direction) 필터를 사용해서 워크플로우를 수신 전화 또는 발신 전화 중 어디에 적용할지 지정하세요.

**Q. 이 트리거를 외부 전화 연동에도 사용할 수 있나요?**

네, CRM이 외부 전화 연동을 지원한다면, 이 트리거는 타사 시스템에서 받은 통화 데이터를 기반으로 워크플로우를 실행할 수 있어요.

---
*원문 최종 수정: 2026-07-24*
*Hyperclass 사용 가이드 — hyperclass.ai*