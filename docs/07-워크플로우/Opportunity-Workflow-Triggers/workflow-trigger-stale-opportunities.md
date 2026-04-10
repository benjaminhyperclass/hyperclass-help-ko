---

번역일: 2026-04-07
카테고리: 07-워크플로우 > Opportunity Workflow Triggers
---

# 워크플로우 트리거 - 정체된 기회

**"정체된 기회(Stale Opportunities)"** 워크플로우 트리거는 지정된 기간 동안 정체된 기회를 자동으로 식별하고 조치를 취하여 어떤 기회도 방치되지 않도록 보장합니다. 이 글에서는 정의, 장점, 설정 과정, 활용 사례, 그리고 자주 묻는 질문에 대한 답변을 다룹니다.

---

**목차**

- [정체된 기회 트리거란 무엇인가요?](#정체된-기회-트리거란-무엇인가요)
- [정체된 기회 워크플로우 트리거 사용의 주요 장점](#정체된-기회-워크플로우-트리거-사용의-주요-장점)
- [트리거 사용 단계별 프로세스](#트리거-사용-단계별-프로세스)
- [정체된 기회 트리거의 활용 사례](#정체된-기회-트리거의-활용-사례)
- [자주 묻는 질문](#자주-묻는-질문)

---

## **정체된 기회 트리거란 무엇인가요?**

**"정체된 기회"** 트리거는 기회가 설정된 기간 동안 같은 단계에서 진전이나 업데이트 없이 머물러 있을 때 작동하는 워크플로우 액션입니다. 정체된 기회에 적극적으로 재참여 조치를 취할 수 있게 하여 잠재 리드가 놓치지 않도록 보장합니다. 예를 들어, 기회가 **"협상"** 단계에서 5일 동안 업데이트 없이 머물러 있다면, 이 트리거가 자동으로 후속 이메일을 발송하거나 매니저에게 알리거나 기회를 새로운 팀원에게 재배정할 수 있습니다.

---

## **정체된 기회 워크플로우 트리거 사용의 주요 장점**

**1. 적극적인 파이프라인 관리:** 정체된 기회를 자동으로 식별하고 해결하여 영업 파이프라인을 활성 상태로 유지하고 진행시킵니다.

**2. 응답 시간 단축:** 영업 담당자가 너무 늦기 전에 잠재 고객과 다시 소통할 수 있도록 자동 알림을 발송합니다.

**3. 가시성 향상:** 방치된 기회에 대해 매니저나 팀 리더에게 알려 개입할 기회를 제공합니다.

**4. 워크플로우 맞춤화:** 파이프라인 단계, 비활성 기간, 팀 책임에 따라 트리거와 액션을 맞춤 설정하여 타겟팅된 후속 조치를 보장합니다.

**5. 수동 작업 감소:** 정체된 기회의 수동 추적을 제거하고 후속 조치를 자동화하여 팀의 소중한 시간을 절약합니다.

---

## **트리거 사용 단계별 프로세스**

CRM의 **"Automation(자동화)"** 섹션으로 이동한 다음 **"Workflows(워크플로우)"** 옵션을 선택하세요.

![워크플로우 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037992675/original/v52oSSh-I-lN_K0EjzqBygKIcV8pxlWZyQ.png?1733748873)

**"+ Create Workflow(워크플로우 생성)"**를 클릭하세요. 다음, **"Start from scratch(처음부터 시작)"**를 클릭하세요.

![워크플로우 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037992710/original/aM1y4qUo4kCInwQZE4mjAylBspkXETBwww.png?1733748906)

**"+ Add new Trigger(새 트리거 추가)"** 버튼을 클릭하여 워크플로우 트리거를 선택하세요.

![트리거 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037993058/original/_SQ_J5euvRtyUimg82TQ9V8C_ySLW9KhpQ.png?1733749151)

사용 가능한 트리거 목록에서 **"Stale Opportunities(정체된 기회)"**를 선택하세요.

![정체된 기회 트리거 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037993718/original/ZGKCw0GxgCvLvHZ3faQDp3KeC1Pf0VlZ1w.png?1733749613)

**트리거 이름 지정:** 워크플로우 목록에서 쉽게 식별할 수 있도록 트리거에 이름을 지정하세요. 예: "정체된 기회 후속 조치"

![트리거 이름 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037993955/original/nJkzwOISoek2jCrR1rocZYgL_NJ-bHYPAQ.png?1733749774)

### 트리거 필터 구성

"Add Filters(필터 추가)"를 클릭하세요.

![필터 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037994623/original/2aLVKxmG6QYYdPvFvYaYXWNqCTeynB_Vfw.png?1733750200)

**Duration in Days(일 단위 기간):** 기회가 "정체"로 표시되기 전에 정체 상태로 남아있을 수 있는 일 수를 설정하세요 (예: 2일).

![기간 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037994663/original/8APRMK1eRbtYicrel-CP79_U8mycGF89fg.png?1733750224)

**In Pipeline(파이프라인에서):** 트리거가 적용될 특정 파이프라인을 선택하세요 (예: "Sales Pipeline").

![파이프라인 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037995060/original/u5J2wZu6PoIBMKBvMA2gAedLGOy_gI8znA.png?1733750491)

**Pipeline Stage(파이프라인 단계):** 트리거가 활성화될 파이프라인 단계를 선택하세요 (예: "Negotiation(협상)" 단계).

![파이프라인 단계 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037995612/original/MeWoSizOEMOYqYAuPDm55fAvopV-4IIzcg.png?1733750814)

**트리거 저장:** 필터와 모든 설정을 구성한 후에는 **"Save Trigger(트리거 저장)"** 버튼을 클릭하는 것을 잊지 마세요.

![트리거 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037997243/original/ohn1yJtGqdEcp_Z8zuINlupqp6fM4acpWw.png?1733751840)

**워크플로우 저장:** 워크플로우 트리거, 필터 또는 워크플로우 액션을 설정하든 관계없이 매 단계에서 설정을 **"저장"**하는 것이 중요합니다. **"Save(저장)"** 버튼을 누를 때까지 워크플로우는 저장되지 않은 초안에 불과합니다.

### 트리거된 액션

트리거를 설정한 후에는 트리거 다음에 이어질 액션을 설정해야 합니다. 알림 이메일 발송, 내부 알림 발송, 정체된 기회를 추가 검토를 위해 새로운 단계로 이동, 또는 다른 워크플로우에 추가하는 등의 작업을 원할 수 있습니다.

### 저장 및 테스트
목표에 맞게 트리거와 액션을 설정한 후 **"Save(저장)"** 버튼을 누르세요. 의도한 대로 작동하는지 확인하려면 **"Test Workflow(워크플로우 테스트)"** 버튼을 클릭하여 미리 볼 수 있습니다.

![워크플로우 테스트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037992447/original/xmPGq-4XN7UjGXSE0E2K1t0DykyCNo2tGA.png?1733748715)

### 워크플로우 활성화

테스트를 완료하고 확신이 서면 토글 옵션을 사용하여 워크플로우를 **"Publish(발행)"**할 때입니다.

![워크플로우 발행](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038002534/original/1su8lFyfjS-vtJ5ANUuOPXlgMZyrRK0Ygg.png?1733754952)

### **설정 예시**

**트리거 설정:**
- 워크플로우 트리거: 정체된 기회
- **워크플로우 트리거 이름:** 정체된 기회 후속 조치

**필터:**
- **일 단위 기간:** 2
- **파이프라인에서:** Sales Pipeline
- **파이프라인 단계:** Negotiation

**정체된 기회에 대한 액션:**
- **이메일 액션 이름:** 영업 담당자에게 알림 이메일
- **발신자 이름:** 귀하의 회사
- **발신자 이메일:** yourcompany@example.com
- **제목:** "알림: 정체된 기회에 주의가 필요합니다"

**이메일 본문:**

안녕하세요 {{opportunity.assigned_user}}님,

"{{pipeline.name}}" 파이프라인의 "{{opportunity.name}}" 기회가 {{duration}}일 동안 비활성 상태입니다.

이 기회를 진전시키거나 상태를 업데이트하는 데 필요한 조치를 취해 주세요.

감사합니다,

[귀하의 회사명]

**알림 액션 이름:** 매니저에게 알림
- **메시지:** "'{{pipeline.name}}' 파이프라인의 기회가 정체되었습니다. 기회 세부사항: {{opportunity.details}}."

**추가 액션:**
- 필요시 추가 검토나 조치를 위해 기회를 다른 단계로 이동

**결과:** 이 자동화는 정체된 기회가 신속하게 해결되도록 보장하여 영업 파이프라인을 활성 상태로 유지하고 놓친 기회의 가능성을 줄입니다. 관련 액션과 필터를 구성하여 시기적절한 후속 조치와 정체된 기회의 적절한 관리를 보장할 수 있습니다.

---

## **정체된 기회 트리거의 활용 사례**

- **정체된 거래 재참여:** "협상" 단계의 기회가 5일 이상 비활성 상태일 때 잠재 고객과의 논의를 다시 점화하기 위해 후속 이메일을 발송합니다.

- **영업 담당자 책임:** 영업 담당자의 기회 중 하나가 차가워졌을 때 자동으로 알려 시기적절한 조치를 취하도록 격려합니다.

- **매니저 알림:** 고가치 기회가 정체되었을 때 영업 매니저에게 알려 개입하여 영업 담당자에게 지도나 지원을 제공할 수 있도록 합니다.

- **파이프라인 정리:** 정체된 기회를 자동으로 "검토 필요" 단계로 이동시켜 팀이 각 기회에 대한 다음 단계를 검토하고 결정하도록 촉구합니다.

---

## **자주 묻는 질문**

**Q: 정체된 기회에 대해 설정할 적절한 "일 단위 기간"은 어떻게 결정하나요?**

영업 사이클에 따라 다릅니다. 짧은 사이클의 경우 2-3일이면 충분할 수 있지만, 긴 사이클의 경우 기회를 정체된 것으로 간주하기 위해 7-10일이 필요할 수 있습니다.

**Q: "정체된 기회" 트리거를 파이프라인 내의 특정 단계에만 적용할 수 있나요?**

네, 필터 기준에서 특정 파이프라인 단계를 지정할 수 있어 해당 단계의 기회에만 트리거가 적용됩니다.

**Q: 실제로는 작업 중이지만 정체된 것으로 보이는 기회에 대한 오탐지를 어떻게 피할 수 있나요?**

최근 업데이트나 활동(노트, 이메일 답장, 통화 기록 등)이 있는 기회를 정체된 것으로 표시되지 않도록 제외하는 커스텀 필터와 조건을 사용하세요.

**Q: 같은 기회가 다시 정체되면 "정체된 기회" 워크플로우가 다시 실행되도록 트리거할 수 있나요?**

네, 기회가 새 단계로 이동하거나 업데이트되는 한 트리거가 재설정됩니다. 기준에 따라 다시 정체되면 워크플로우가 예상대로 실행됩니다.

---
*원문 최종 수정: Mon, 9 Dec, 2024 at 8:39 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*