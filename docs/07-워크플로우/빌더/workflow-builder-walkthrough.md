---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000001254-workflow-builder-walkthrough
번역일: 2026-11-02
카테고리: 07-워크플로우 > 빌더
---

# 워크플로우 빌더 둘러보기

워크플로우 빌더(Workflow Builder) 둘러보기에 오신 것을 환영합니다! 이 가이드는 워크플로우 빌더를 이해하고 탐색하는 데 도움을 드리기 위해 작성되었습니다. 워크플로우가 처음이든, 지식을 다시 정리하고 싶든, 이 글에서 핵심 기능과 모범 사례, 성공을 위한 팁을 안내해 드릴게요.

**목차**

- 이 워크플로우 빌더 둘러보기는 무엇인가요?
- 무한 캔버스 레이아웃
- 캔버스에서 워크플로우 노드 직접 이동하기
- 워크플로우 전환기(Workflow Switcher)
- 새 트리거 추가하기
- 새 액션 추가하기
- 연동 기반 액션 및 트리거 연결하기
- 통계 보기(Stats View)
- 워크플로우 테스트하기
- 워크플로우 저장하기
- 버전 기록
- 워크플로우 변경이 이미 진행 중인 연락처에 미치는 영향
- 초안/발행 토글
- 워크플로우 모범 사례
- 자주 묻는 질문
- 더 읽어보기

## **이 워크플로우 빌더 둘러보기는 무엇인가요?**

이 글은 워크플로우 빌더의 레이아웃, 기능, 모범 사례를 포함한 전반적인 개요를 제공합니다. 고급 트리거나 상세한 액션 설정 등 더 구체적인 주제를 찾으신다면, 아래 관련 문서를 참고해 주세요.

- [워크플로우 시작하기](https://hyperclass.gitbook.io/hyperclass-docs/en/support/solutions/articles/155000002288)
- [워크플로우 트리거 목록](https://hyperclass.gitbook.io/hyperclass-docs/en/support/solutions/articles/155000002292)
- [워크플로우 액션 목록](https://hyperclass.gitbook.io/hyperclass-docs/en/support/solutions/articles/155000002294)

## **무한 캔버스 레이아웃**

워크플로우 빌더의 무한 캔버스(Infinite Canvas)를 사용하면 워크플로우를 넓은 화면으로 확인할 수 있어요. 다음 기능을 사용할 수 있습니다:

- 좌측 하단의 **화면에 맞추기(Fit to Screen)** 및 **확대/축소(Zoom In/Zoom Out)** 버튼으로 화면 보기를 조정
- 우측 하단의 **미니맵(Minimap)**으로 현재 워크플로우 내 위치를 탐색

**모범 사례:** 관련 액션을 그룹화하고 명확한 이름 규칙을 사용하여 복잡한 워크플로우를 정리해 보세요. 가능하면 워크플로우를 한 화면에 들어올 만큼 작게 유지하는 것이 좋습니다. 이렇게 하면 이해와 문제 해결이 더 쉬워져요.

## 캔버스에서 워크플로우 노드 직접 이동하기

표준 워크플로우 빌더(Standard Workflow Builder)에서는 캔버스 위에서 노드를 직접 이동할 수 있어요.

- 노드에 마우스를 올리면 6개 점으로 이루어진 드래그 핸들이 나타납니다.
- 드래그 핸들을 클릭한 채로 눌러 노드를 이동하세요.
- "Move here" 표시가 보이는 위치에 노드를 놓으세요.

이렇게 하면 우클릭 메뉴를 사용하지 않고도 단계와 분기를 더 쉽게 재구성할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039914922/original/LAuW1K8geHJG9gutYFr7gF0cBgrcCkyx3Q.png?1737001655)

## 워크플로우 전환기(Workflow Switcher)

워크플로우 전환기(Workflow Switcher)를 사용하면 빌더를 벗어나지 않고도 다른 워크플로우로 빠르게 이동할 수 있어요.

좌측 패널에서 열거나 **Shift + W**를 눌러서 연 다음, 검색하거나 스크롤하여 다른 워크플로우를 선택하세요.

자세한 내용은 Using the Workflow Switcher in 하이퍼클래스 문서를 참고해 주세요.

## 새 트리거 추가하기

트리거(Trigger)는 워크플로우를 시작시키는 이벤트를 정의합니다. 다음 단계를 따라주세요:

- **새 트리거 추가(Add New Trigger)** 버튼을 클릭하세요.
- 목록에서 트리거를 선택하세요 (예: 연락처 추가됨, 예약 완료 등).
- 관련 설정값으로 트리거를 구성하세요.

**팁:** 검색창과 카테고리 필터를 사용하면 트리거를 더 빠르게 찾을 수 있어요. 검색 결과에는 올바른 트리거를 선택하는 데 도움이 되는 추가 정보(배지, 앱 상세정보 등)가 표시될 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039914975/original/yug6PgoUJWPBwFvOLAzhYhKBqRkRhuHksA.gif?1737001882)

**중요:** 워크플로우에 있는 모든 트리거는 해당 조건이 충족되면 활성화됩니다. 원하는 방식으로 워크플로우가 시작되도록 트리거 설정을 잘 확인해 주세요.

전체 트리거 목록은 [워크플로우 트리거 목록](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000002292)을 참고하세요.

**표준 빌더에서 키보드 단축키 사용하기**

표준 빌더(Standard Builder)는 노드 선택, 노드 간 이동, 액션 복사 및 붙여넣기, 캔버스 확대/축소, 패널 열기, 노드 삭제, 변경 사항 저장을 위한 키보드 단축키를 지원합니다.

전체 단축키 목록과 키 조합은 키보드 단축키 관련 문서를 참고해 주세요.

## 새 액션 추가하기

액션(Action)은 트리거가 활성화된 후 실행되는 작업을 정의합니다. 액션을 추가하려면:

- 워크플로우 선(line)의 **+ 버튼**을 클릭하세요.
- 목록에서 액션을 선택하세요 (예: 이메일 발송, 사용자에게 배정 등).
- 워크플로우 요구사항에 맞게 액션을 구성하세요.

**팁:** 검색창과 카테고리를 사용하면 하이퍼클래스에서 만든 도구와 마켓플레이스 앱 전반에서 액션을 빠르게 찾을 수 있어요. 일부 결과에는 가격이나 설치 정보 같은 추가 세부사항이 표시되어, 단계를 추가하기 전에 옵션을 비교해 볼 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915055/original/Yic1dO9HJdC289lCwscOFsa_SAE--k03iA.gif?1737002097)

일반적인 액션 외에도 좀 더 고급 유형의 액션들이 있습니다:

- **드립 액션(Drip Actions):** 연락처가 워크플로우를 진행하는 속도를 늦춰서 흐름을 제어합니다.
- **조건 액션(Conditional Actions):** 조건을 평가하여 특정 기준에 따라 연락처를 안내합니다.
- **목표 액션(Goal Actions):** 중간 액션들을 건너뛰고 연락처를 워크플로우의 이후 지점으로 바로 이동시킵니다.

**팁:** 캔버스 뷰에서 명확하게 알아볼 수 있도록 액션에는 항상 의미 있는 이름을 붙여 주세요. 이렇게 하면 워크플로우를 이해하고 관리하기가 더 쉬워집니다.

사용 가능한 모든 액션에 대한 자세한 정보는 [워크플로우 액션 목록](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000002294)을 참고하세요.

워크플로우를 이해하고 올바른 액션을 추가하는 데 **워크플로우 AI(Workflow AI)** 어시스턴트를 활용할 수도 있습니다. 자세한 내용은 [워크플로우 AI 어시스턴트](https://hyperclass.gitbook.io/hyperclass-docs/en/support/solutions/articles/155000003970) 문서를 참고해 주세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915279/original/GdNuEeH9yq1qa5Vxs9RIDSffGKrW9FtfwQ.png?1737002721)

## **연동 기반 액션 및 트리거 연결하기**

연동(Integration) 기반 워크플로우 단계는 계정이 연결되기 전에 필요한 필드를 미리 보여줍니다. 유효한 계정을 연결하기 전까지 해당 필드는 잠긴 상태로 유지됩니다.

연동 기반 단계를 연결하고 구성하려면:

1. 워크플로우에 연동 액션 또는 트리거를 추가하세요.
2. 사용 가능한 필드 미리보기를 확인하세요.
3. "계정 연결(Connect your account)"을 클릭하세요.
4. 팝업 창에서 연동 설정을 완료하세요.
5. 계정 선택기가 있는 경우, 워크플로우로 돌아와 연결된 계정을 선택하세요.
6. 잠금 해제된 필드를 구성하세요.

**여러 개의 연결된 계정**

일부 연동은 두 개 이상의 연결된 계정을 지원합니다. 액션 또는 트리거 내의 계정 선택기를 사용하여 해당 단계에서 사용할 계정을 선택하세요.

선택한 계정을 변경하면 해당 계정에 의존하는 필드가 다시 로드되거나 초기화될 수 있습니다. 저장하기 전에 단계를 꼭 확인해 주세요.

**유효하지 않거나 삭제된 계정**

선택한 계정이 삭제되거나 유효하지 않게 되면, 워크플로우 단계는 다시 "연결 필요" 잠금 상태로 돌아갑니다. 단계를 저장하기 전에 재연결하거나 다른 유효한 계정을 선택해 주세요.

## 통계 보기(Stats View)

통계 보기(Stats View)를 사용하면 워크플로우 빌더를 벗어나지 않고도 트리거 등록 활동과 커뮤니케이션 액션의 성과를 확인할 수 있어요.

통계 보기를 사용하려면:

1. 워크플로우를 여세요.
2. 좌측 상단에서 통계 보기를 켜세요.
3. 트리거 또는 액션을 선택하여 사용 가능한 통계를 확인하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080299684/original/gJgGTZWrmv_KbFYs1gTbw6NrBbFnC79mOQ.jpeg?1788796149)

워크플로우 트리거의 경우, 통계 보기에서 다음 항목을 확인할 수 있습니다:

**시도됨(Attempted)**: 트리거에 의해 평가된 연락처
**일치함(Matched)**: 트리거 조건을 충족한 연락처
**불일치(Unmatched)**: 트리거 조건을 충족하지 못한 연락처

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076675777/original/em6HgH8w14YjMbF48kpLUFYmG0zh0TBGpQ.gif?1784802556)

트리거 통계를 클릭하면 상세 보기가 열립니다. 연락처별 결과를 확인하고, 특정 연락처를 검색하고, 연락처가 조건과 일치하지 않은 이유를 조사할 수 있어요.

커뮤니케이션 액션의 경우, 통계 보기에서 해당 액션의 전달 및 참여 관련 통계를 확인할 수 있습니다. 통계를 클릭하면 상세 보고서가 열립니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155076675829/original/IuY1sQN1fo6nTS01f_BMvAEK4WpB0Mx7Ew.png?1784802571)

워크플로우 성과 분석에 대한 팁은 [워크플로우 캠페인 분석 방법](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000003902)을 참고해 주세요. 워크플로우 목록(Workflow List)에서도 워크플로우 단위의 통계를 확인할 수 있어요. 통계(Stats) 아래의 펼침 화살표를 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915452/original/9rcKt_uTXnQ_WVrfXVHUnUyXksG_8oR64w.png?1737003186)

워크플로우에 사용되었던 커뮤니케이션 액션이 이후 삭제되더라도, 해당 통계는 워크플로우에 계속 저장됩니다.

통계 보기가 활성화된 상태에서는 워크플로우를 편집할 수 없습니다. 트리거 통계는 최근 30일간의 데이터를 포함합니다.

트리거 통계에 대한 전체 안내는 [워크플로우 트리거 내레이션 및 통계](https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000006636-workflow-trigger-narration-and-statistics)를 참고해 주세요.

## **워크플로우 테스트하기**

워크플로우가 올바르게 작동하는지 확인하려면:

- 우측 상단의 **워크플로우 테스트(Test Workflow)** 버튼을 클릭하세요.
- 테스트할 연락처를 선택하세요.
- **테스트 실행(Run Test)**을 클릭하여 워크플로우를 실행하세요.

연락처를 이용한 워크플로우 테스트는 100% 완벽하지 않다는 점에 유의하세요. 특히 동일한 연락처로 여러 번 테스트할 경우 더욱 그렇습니다. 가장 이상적인 방법은 워크플로우를 발행한 후 실제로 사용하면서 테스트하는 것입니다.

**문제 해결:** 테스트가 실패하면 트리거와 액션에 설정이 누락된 부분이 없는지 확인해 주세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915593/original/mZbQqecJbDQkkH-WyjVAOOQxPmRjoWX2-A.png?1737003477)

## **워크플로우 저장하기**

변경 사항은 항상 저장해 주세요:

- 저장하지 않은 변경 사항이 있을 때(빨간 점 표시) 우측 상단의 **저장(Save)** 버튼을 클릭하세요.
- 저장 중 오류가 발생하면, 트리거와 액션의 필수 필드가 모두 입력되었는지 확인하세요.

**저장됨(Saved)**과 **발행됨(Published)**은 서로 다른 개념이라는 점에 유의하세요. 워크플로우는 저장되거나 저장되지 않은 변경 사항이 있을 수 있고, 이와 별개로 초안(Draft) 또는 발행(Publish) 상태일 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915664/original/l8EFwQ6aZbDHqBLwfHM7vA5Ow0jXHl8vSg.png?1737003691)

## **버전 기록**

워크플로우에 대한 변경 사항을 추적할 수 있어요:

- 우측 상단의 **기록(History)** 아이콘을 클릭하세요.
- 이전 버전들을 확인하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915890/original/KVo2csPPq4w88OGCdYEd0Ul0o6E9umSVBg.png?1737004061)

**빌더로 돌아가기(Back to Builder)** 버튼을 사용하여 워크플로우 편집 화면으로 돌아갈 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915878/original/QCDtwnx2S3YV6IbVI86fvVWxqNF-aXGDCA.png?1737004002)

### 워크플로우 변경이 이미 진행 중인 연락처에 미치는 영향

이미 워크플로우를 진행 중인 연락처도 이후 액션에 적용된 업데이트를 사용할 수 있습니다.

예를 들어, 연락처가 현재 대기(Wait) 액션에 있고 그 이후의 액션을 업데이트했다면, 해당 연락처가 그 단계에 도달했을 때 업데이트된 설정을 사용하게 됩니다. 대기 액션 이후에 새 액션을 추가하면, 연락처는 동일한 워크플로우 여정의 일부로 그 새 액션도 실행할 수 있어요.

연락처가 이미 대기 중인 상태에서 대기 액션을 변경하더라도, 해당 연락처의 기존 대기 시간은 변경되지 않습니다. 연락처는 현재 대기를 완료한 후 업데이트된 워크플로우를 계속 진행합니다.

## **초안/발행 토글**

워크플로우의 상태를 제어할 수 있어요:

- 우측 상단에서 **초안(Draft)**과 **발행(Publish)** 모드를 전환하세요.
- 초안 모드에서는 워크플로우가 실제로 트리거되거나 액션을 실행하지 않습니다. 발행 모드에서는 실제로 작동합니다.

**중요:** 대기 단계(예: 대기, 수동 전화)에 있는 연락처는 초안 워크플로우를 다시 활성화해도 현재 단계에 그대로 남아 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039915996/original/DV1O6GQ5Siyr-EBN_O9RgmwZo0axMnLLsQ.png?1737004170)

## **워크플로우 모범 사례**

- **루프(순환)를 피하세요:** 워크플로우 빌더는 시각적인 루프(화살표가 이전 단계로 되돌아가는 것)를 방지하지만, 눈에 보이지 않는 루프는 만들어질 수 있습니다. 의도치 않은 순환 동작이 발생하지 않도록 액션을 꼼꼼히 확인하세요.
- **워크플로우를 작게 유지하세요:** 가능하면 워크플로우가 한 화면에 들어오도록 만드세요. 복잡한 기능은 여러 워크플로우로 나누어 문제 해결과 관리를 단순화하세요.
- **의미 있는 이름 사용:** 특히 협업 환경에서는 트리거와 액션에 명확하고 설명적인 이름을 붙여서 가독성을 높이세요.

## **자주 묻는 질문**

**Q: 워크플로우를 초안으로 설정하면 안에 있던 연락처는 어떻게 되나요?**

A: 대기 단계(예: 대기, 수동 전화, 수동 SMS)에 있는 연락처는 워크플로우가 다시 활성화될 때 동일한 단계에 그대로 남아 있습니다.

**Q: 목표 이벤트(Goal Event)는 워크플로우에 어떤 영향을 주나요?**

A: 목표 이벤트는 상호작용에 따라 연락처의 진행 상태를 동적으로 조정할 수 있습니다. 자세한 내용은 [액션 - 목표 이벤트](https://hyperclass.gitbook.io/hyperclass-docs/en/support/solutions/articles/155000003328) 문서를 참고해 주세요.

**Q: 연락처를 여러 워크플로우에 추가할 수 있나요?**

A: 네, "워크플로우에 추가" 액션을 사용하면 연락처를 여러 워크플로우에 포함시킬 수 있습니다. 자세한 내용은 [워크플로우에 추가](https://hyperclass.gitbook.io/hyperclass-docs/en/support/solutions/articles/155000002554) 문서를 참고해 주세요.

**Q: 외부 앱과 연동하려면 어떻게 하나요?**

A: "웹훅(Webhook)" 액션을 사용하여 외부 플랫폼으로 데이터를 전송할 수 있습니다. 자세한 내용은 [액션 - 웹훅](https://hyperclass.gitbook.io/hyperclass-docs/en/support/solutions/articles/155000003299)을 참고해 주세요.

## **더 읽어보기**

- [워크플로우 시작하기](https://hyperclass.gitbook.io/hyperclass-docs/en/support/solutions/articles/155000002288)
- [워크플로우 트리거 목록](https://hyperclass.gitbook.io/hyperclass-docs/en/support/solutions/articles/155000002292)
- [워크플로우 액션 목록](https://hyperclass.gitbook.io/hyperclass-docs/en/support/solutions/articles/155000002294)
- [워크플로우 캠페인 분석 방법](https://hyperclass.gitbook.io/hyperclass-docs/en/support/solutions/articles/155000003902)
- [워크플로우와 자동화 소개](https://hyperclass.gitbook.io/hyperclass-docs/en/support/solutions/articles/155000002445)

---
*원문 최종 수정: 2026-09-07*
*Hyperclass 사용 가이드 — hyperclass.ai*