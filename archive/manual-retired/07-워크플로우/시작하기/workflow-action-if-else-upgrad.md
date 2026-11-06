---

번역일: 2026-04-07
카테고리: 07-워크플로우 > 시작하기
---

# 워크플로우 액션 - 조건 분기(If/Else) 업그레이드

**목차**

- [개요](#개요)
- [업그레이드](#업그레이드)
  - [시나리오 레시피 도입](#시나리오-레시피-도입)
  - [향상된 분기 기능](#향상된-분기-기능)
  - ["하루 중 시간" 조건](#하루-중-시간-조건)
  - [UI 업그레이드](#ui-업그레이드)

### **개요**

조건 분기(If/Else) 액션은 워크플로우에서 사용자에게 많은 유연성을 제공하는 가장 강력한 액션 중 하나입니다. 이 액션을 더욱 강력하고 사용자 친화적으로 만들기 위해 중요한 변경사항을 적용했습니다.

### 업그레이드

#### 시나리오 레시피 도입

- 시나리오 레시피(Scenario Recipes)를 도입하여 조건 분기(If/Else) 조건 설정 방식을 완전히 새롭게 개선했습니다. 설정 과정을 단순화하는 미리 만들어진 템플릿입니다:
  - 조건 분기 전용으로 제작된 미리 만들어진 레시피 중에서 선택하세요.
  - 드롭다운을 클릭하고 제공되는 10가지 레시피 유형 중 선택하거나 직접 만들 수 있습니다.
  - 이러한 레시피는 사용 전 추가해야 할 전제 조건이 있는지도 알려줍니다.

![시나리오 레시피 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035064796/original/BRvEblz5MvlYdRD-TYzmzsvL2TzWLC24IQ.png?1729494797)

![레시피 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035064580/original/wD07GriI3Gf92kDs85o4bfS2zRk84KnFIQ.png?1729494653)

#### 향상된 분기 기능

- 빌더의 조건 분기(If/Else) 브랜치도 대폭 업그레이드되었습니다.
- 이제 각 분기의 간결한 텍스트 요약을 볼 수 있어, 어떤 조건이 충족되는지 한눈에 파악하기 쉽습니다.
- 여러 조건이 있는 분기의 경우, "+x개 추가 조건"을 클릭하면 편리한 팝업 창에서 전체 목록을 볼 수 있습니다.
- 분기를 클릭하면 해당 분기만 편집할 수 있도록 분리되고 다른 분기는 축소되어, 한 번에 하나의 분기에 집중할 수 있습니다.

![분기 요약 보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035064582/original/HVZso954wdLwdXoCuMutFlZP9Pp7OJ9yjA.png?1729494653)

![추가 조건 보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035064585/original/Nxb3n8WS4DZ9-bzIEQAN2byGhG3rOX9beA.png?1729494653)

![분기 편집 모드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035064799/original/0sCasTr9FtVabdZ62FW24LQ-pKYlO_6MQQ.jpeg?1729494797)

#### "하루 중 시간" 조건

- 기존의 "현재 시간" 조건 유형에서는 사용자가 시간 옵션만 선택할 수 있었습니다.
- "날짜 - 시간" 조건에 "하루 중 시간(Time of the Day)"이라는 새로운 옵션을 추가했습니다.
- 이를 통해 사용자가 15분 간격으로 구체적인 시간을 선택할 수 있어, 더 세밀한 제어가 가능합니다.
- 사용의 편의성을 위해 선택된 값의 설명을 표시하여 어떤 상황에서 참이 되는지 나타냅니다.

![시간 조건 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035064586/original/OohrsZjzA2_wI16zzNPafRyV9PopNEB1Mg.png?1729494653)

![시간 범위 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035064583/original/IW1bwgzNnz23X7ek66aVRzPCIGrKnEswPQ.png?1729494653)

#### UI 업그레이드

- 조건 분기(If/Else) 액션을 위한 새롭고 사용자 친화적인 UI를 제공합니다.
- 분기 구성(Branch Configuration) 화면이 더욱 간소화되었습니다.
- 새로운 조건 드롭다운으로 특정 조건을 더 쉽게 검색하고 선택할 수 있습니다.
- 이제 사용자가 UI에서 분기를 드래그 앤 드롭으로 간단히 재배열할 수 있습니다.

![개선된 UI](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035064581/original/IkfOVeZvtX3nfFD5UexvjNjXWKijxRdlVw.jpeg?1729494653)

![조건 드롭다운](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035064797/original/SjijljFD3-UYiy2n15WCvfN3PI31mkbdvw.png?1729494797)

![드래그 앤 드롭 재배열](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155035064798/original/2_9QFQnL5jT-CS449k3TCne4PLzPXCvRew.png?1729494797)

---
*원문 최종 수정: 2025년 4월 8일*
*Hyperclass 사용 가이드 — hyperclass.ai*