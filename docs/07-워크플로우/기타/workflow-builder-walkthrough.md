---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# 워크플로우 빌더 완전 가이드

워크플로우 빌더(Workflow Builder) 완전 가이드에 오신 것을 환영합니다! 이 가이드는 워크플로우 빌더를 이해하고 활용하는 데 도움을 드리기 위해 만들어졌습니다. 워크플로우가 처음이시거나 지식을 정리하고 싶으신 분 모두에게 주요 기능, 모범 사례, 성공 팁을 안내해드립니다.

---

**목차**

- [워크플로우 빌더 가이드란?](#워크플로우-빌더-가이드란)
- [무한 캔버스 레이아웃](#무한-캔버스-레이아웃)
- [새 트리거 추가하기](#새-트리거-추가하기)
- [새 액션 추가하기](#새-액션-추가하기)
- [통계 보기](#통계-보기)
- [워크플로우 테스트하기](#워크플로우-테스트하기)
- [워크플로우 저장하기](#워크플로우-저장하기)
- [버전 히스토리](#버전-히스토리)
- [초안/발행 토글](#초안발행-토글)
- [워크플로우 모범 사례](#워크플로우-모범-사례)
- [자주 묻는 질문](#자주-묻는-질문)
- [추가 읽을 자료](#추가-읽을-자료)
---

## **워크플로우 빌더 가이드란?**

이 아티클은 워크플로우 빌더의 레이아웃, 기능, 모범 사례를 포함한 종합적인 개요를 제공합니다. 고급 트리거나 상세한 액션 설정과 같은 구체적인 주제를 찾으시는 경우, 관련 아티클을 확인해보세요:

- [워크플로우 시작하기](getting-started-with-workflows.md)
- 워크플로우 트리거 목록
- 워크플로우 액션 목록

---

## **무한 캔버스 레이아웃**

워크플로우 빌더의 무한 캔버스는 워크플로우를 넓은 화면에서 볼 수 있게 해줍니다:

- 왼쪽 하단의 **화면에 맞추기(Fit to Screen)**와 **확대/축소(Zoom In/Zoom Out)** 버튼을 사용해 화면 크기를 조정하세요.

- 오른쪽 하단의 **미니맵(Minimap)**을 활용해 워크플로우 내에서 현재 위치를 파악하세요.

**모범 사례:** 복잡한 워크플로우는 관련 액션을 그룹화하고 명확한 이름 규칙을 사용해 정리하세요. 가능하면 워크플로우를 한 화면에서 볼 수 있을 만큼 작게 유지하세요. 이는 이해와 문제 해결에 도움이 됩니다.

![워크플로우 빌더 무한 캔버스 레이아웃](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039914922/original/LAuW1K8geHJG9gutYFr7gF0cBgrcCkyx3Q.png?1737001655)

---

## **새 트리거 추가하기**

트리거는 워크플로우를 시작하는 이벤트를 정의합니다. 다음 단계를 따라하세요:

- **새 트리거 추가(Add New Trigger)** 버튼을 클릭하세요.

- 목록에서 트리거를 선택하세요(예: 연락처 추가됨, 예약 완료됨).

- 관련 설정으로 트리거를 구성하세요.

![새 트리거 추가 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039914975/original/yug6PgoUJWPBwFvOLAzhYhKBqRkRhuHksA.gif?1737001882)

**중요:** 워크플로우의 모든 트리거는 각자의 특정 조건이 충족되면 활성화됩니다. 트리거 설정이 원하는 워크플로우 시작과 일치하는지 확인하세요.

포괄적인 트리거 목록은 워크플로우 트리거 목록을 참조하세요.

---

## **새 액션 추가하기**

액션은 트리거가 활성화된 후 일어나는 작업을 정의합니다. 액션을 추가하려면:

- 워크플로우 라인의 **+ 버튼**을 클릭하세요.

- 목록에서 액션을 선택하세요(예: 이메일 발송, 사용자에게 배정).

- 워크플로우 요구사항에 따라 액션을 구성하세요.

![새 액션 추가 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915055/original/Yic1dO9HJdC289lCwscOFsa_SAE--k03iA.gif?1737002097)

일반적인 액션 외에도 더 고급 유형의 액션들이 있습니다:

- **드립 액션(Drip Actions):** 워크플로우를 통한 연락처의 진행을 늦춰 흐름을 제어합니다.

- **조건부 액션(Conditional Actions):** 조건을 평가하고 특정 기준에 따라 연락처를 안내합니다.

- **목표 액션(Goal Actions):** 연락처가 중간 액션들을 건너뛰고 워크플로우의 후반부로 바로 이동할 수 있게 합니다.

**팁:** 캔버스 보기에서 명확하게 보이도록 액션에 항상 의미 있는 이름을 지어주세요. 이렇게 하면 워크플로우를 이해하고 관리하기가 쉬워집니다.

사용 가능한 모든 액션에 대한 자세한 정보는 워크플로우 액션 목록을 참조하세요.

**워크플로우 AI** 어시스턴트를 사용해 워크플로우를 이해하고 적절한 액션을 추가하는 데 도움을 받을 수도 있습니다. 자세한 내용은 [워크플로우 AI 어시스턴트](../../13-AI-Employee/workflow-ai-assistant.md) 아티클에서 확인하세요.

![워크플로우 AI 어시스턴트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915279/original/GdNuEeH9yq1qa5Vxs9RIDSffGKrW9FtfwQ.png?1737002721)

---

## **통계 보기**

통계 보기(Stats View)는 개별 액션 수준까지 커뮤니케이션 성과를 모니터링하는 데 도움을 줍니다:

- 왼쪽 상단에서 **통계 보기(Stats View)**를 켜세요.

- 빌더에서 직접 커뮤니케이션 통계를 확인하세요.

- 통계 데이터를 클릭하면 상세한 리포트에 액세스할 수 있습니다.

커뮤니케이션 액션이 워크플로우에 있었다가 사용된 후 삭제되더라도, 통계는 여전히 워크플로우에 저장됩니다.

![통계 보기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915478/original/staaRVaGy46Vtr3qGLGzGTkKjgBU-f8xow.png?1737003253)

워크플로우 성과 분석 팁은 [워크플로우 캠페인 분석 방법](../../10-마케팅/Workflow-Email-Action/how-to-analyze-workflow-campaigns-.md)을 참조하세요. 통계는 워크플로우 목록의 워크플로우 수준에서도 확인할 수 있습니다. 통계 아래의 확장 화살표를 클릭하세요.

![워크플로우 목록 통계](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915452/original/9rcKt_uTXnQ_WVrfXVHUnUyXksG_8oR64w.png?1737003186)

---

## **워크플로우 테스트하기**

워크플로우가 올바르게 작동하는지 확인하려면:

- 오른쪽 상단의 **워크플로우 테스트(Test Workflow)** 버튼을 클릭하세요.

- 테스트할 연락처를 선택하세요.

- **테스트 실행(Run Test)**을 클릭해 워크플로우를 실행하세요.

연락처를 사용한 워크플로우 테스트는 100% 완벽하지 않으며, 특히 같은 연락처를 여러 테스트에 재사용할 경우 더욱 그렇습니다. 이상적으로는 워크플로우를 발행하고 실제 환경에서 사용해 테스트해야 합니다.

**문제 해결:** 테스트가 실패하면 트리거와 액션의 불완전한 구성이 있는지 확인하세요.

![워크플로우 테스트 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915593/original/mZbQqecJbDQkkH-WyjVAOOQxPmRjoWX2-A.png?1737003477)

---

## **워크플로우 저장하기**

변경 사항을 항상 저장하세요:

- 저장되지 않은 변경 사항이 있을 때(빨간 점) 오른쪽 상단의 **저장(Save)** 버튼을 클릭하세요.

- 저장 중 오류가 발생하면 트리거와 액션의 모든 필수 필드가 완성되었는지 확인하세요.

**저장됨(Saved)**과 **발행됨(Published)**은 같지 않다는 점을 유의하세요. 워크플로우는 서로 독립적으로 저장되거나 저장되지 않을 수 있고, 초안이거나 발행 상태일 수 있습니다.

![워크플로우 저장 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915664/original/l8EFwQ6aZbDHqBLwfHM7vA5Ow0jXHl8vSg.png?1737003691)

---

## **버전 히스토리**

워크플로우에 가해진 변경 사항을 추적하세요:

- 오른쪽 상단의 **히스토리(History)** 아이콘을 클릭하세요.

- 이전 버전을 확인하세요.

![버전 히스토리 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915890/original/KVo2csPPq4w88OGCdYEd0Ul0o6E9umSVBg.png?1737004061)

**빌더로 돌아가기(Back to Builder)** 버튼을 사용해 워크플로우 편집으로 돌아가세요.

![빌더로 돌아가기 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915878/original/QCDtwnx2S3YV6IbVI86fvVWxqNF-aXGDCA.png?1737004002)

---

## **초안/발행 토글**

워크플로우의 상태를 제어하세요:

- 오른쪽 상단에서 **초안(Draft)**과 **발행(Publish)** 모드 간에 토글하세요.

- 초안 모드는 워크플로우가 실제로 트리거되거나 액션을 수행하지 않음을 의미하고, 발행 모드는 실행됨을 의미합니다.

**중요:** 대기 단계(예: 대기, 수동 전화)에 있는 연락처들은 초안 워크플로우를 재개할 때 현재 단계에 그대로 남아 있습니다.

![초안/발행 토글 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915996/original/DV1O6GQ5Siyr-EBN_O9RgmwZo0axMnLLsQ.png?1737004170)

---

## **워크플로우 모범 사례**

- **루프 방지:** 워크플로우 빌더는 시각적 루프를 방지하지만(화살표가 이전 단계로 돌아갈 수 없음), 보이지 않는 루프를 만드는 것은 가능합니다. 의도치 않은 루프 동작을 피하려면 액션을 다시 확인하세요.

- **워크플로우를 작게 유지:** 가능하면 워크플로우를 한 화면에 맞도록 하세요. 복잡한 기능은 별도의 워크플로우로 나누어 문제 해결과 관리를 단순화하세요.

- **의미 있는 이름 지정:** 특히 협업 환경에서 명확성을 높이기 위해 트리거와 액션에 명확하고 설명적인 이름을 사용하세요.

---

## **자주 묻는 질문**

**Q: 워크플로우를 초안으로 설정하면 워크플로우에 있는 연락처들은 어떻게 되나요?**

A: 대기 단계(예: 대기, 수동 전화, 수동 SMS)에 있는 연락처들은 워크플로우가 재개될 때 같은 단계에 남아 있습니다.

**Q: 목표 이벤트는 워크플로우에 어떤 영향을 주나요?**

A: 목표 이벤트는 상호작용에 따라 연락처 진행을 동적으로 조정할 수 있습니다. 자세한 내용은 [액션 - 목표 이벤트](../액션/workflow-action-goal-event.md)를 참조하세요.

**Q: 연락처를 여러 워크플로우에 추가할 수 있나요?**

A: 네, "워크플로우에 추가" 액션을 사용해 연락처를 여러 워크플로우에 포함시킬 수 있습니다. 자세한 내용은 [워크플로우에 추가](../Internal-Tools-Workflow-Actions/action-add-to-workflow-workflow-action-add-to-workflow.md)를 확인하세요.

**Q: 외부 앱을 어떻게 연동할 수 있나요?**

A: "웹훅" 액션을 사용해 외부 플랫폼으로 데이터를 전송하세요. 자세한 내용은 [액션 - 웹훅](../Webhooks-Workflow-Actions/workflow-action-webhook-outbound-.md)을 확인하세요.

---

## **추가 읽을 자료**

- [워크플로우 시작하기](getting-started-with-workflows.md)
- 워크플로우 트리거 목록
- 워크플로우 액션 목록
- [워크플로우 캠페인 분석 방법](../../10-마케팅/Workflow-Email-Action/how-to-analyze-workflow-campaigns-.md)
- [워크플로우와 자동화 소개](../introduction-to-workflows-and-automations.md)

---
*원문 최종 수정: Mon, 3 Mar, 2025 at 11:16 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*