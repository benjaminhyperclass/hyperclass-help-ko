---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# Google Sheets 프리미엄 워크플로우 액션 사용 가이드

이 가이드는 Hyperclass에서 Google Sheets 프리미엄 워크플로우 액션을 효과적으로 사용하는 방법을 설명합니다. 액션 설정 방법, 개별 기능 활용법, 일반적인 문제 해결 방법을 배워보세요. 이 가이드는 구조화된 데이터 연동으로 워크플로우를 자동화하고 싶은 사용자에게 이상적입니다.

---

**목차**

- [Google Sheets 프리미엄 워크플로우 액션이란?](#google-sheets-프리미엄-워크플로우-액션이란)
- [Google Sheets 연동의 주요 이점](#google-sheets-연동의-주요-이점)
- [시작하기 전에](#시작하기-전에)
- [Google Sheets 연동 설정 방법](#google-sheets-연동-설정-방법)
- [Google Sheets 액션 기본 설정](#google-sheets-액션-기본-설정)
- [Google Sheets 액션 기능](#google-sheets-액션-기능)
---

# Google Sheets 프리미엄 워크플로우 액션이란?

Google Sheets 프리미엄 워크플로우 액션을 사용하면 Google Sheets를 Hyperclass 워크플로우에 직접 연동하여 제3자 연동 도구 없이 두 시스템 간 데이터 전송을 자동화할 수 있습니다. 이 액션은 연결된 Google Sheets에서 행을 생성, 조회, 업데이트, 삭제하는 다양한 기능을 지원합니다.

워크플로우 빌더(Workflow Builder)에서는 액션(Action)으로, 액션 설정에서는 기능도 액션(Actions)으로 표시됩니다. 여기서는 "Spreadsheet Row 생성" 같은 하위 액션을 기능(함수)으로 부르겠습니다.

---

## **Google Sheets 연동의 주요 이점**

- **구조화된 데이터 관리**: 데이터가 항상 동일한 방식으로 정리되도록 보장합니다.

- **자동화**: 데이터를 즉시 동기화하여 수동 작업을 줄입니다.

- **오류 감소**: 수동 데이터 입력으로 인한 중복이나 오류를 방지합니다.

- **확장성**: 변경 없이도 증가하는 데이터셋과 운영 속도를 지원합니다.

---

## 시작하기 전에

Google Sheets 액션을 설정하기 전에 다음을 확인하세요:

- **Google 계정이 연동됨** - Hyperclass 하위 계정에 Google 계정이 연동되어 있어야 합니다.

- **Google Sheets 준비 완료** - 시트 이름을 정하고 명확한 헤더가 있는지 확인하세요.

- **프리미엄 트리거 & 액션 활성화** - Hyperclass 에이전시 계정과 하위 계정에서 활성화되어 있어야 합니다.

일부 트리거 & 액션은 프리미엄이므로 Hyperclass에서 모든 하위 계정의 실행마다 에이전시에게 요금을 청구합니다(실행당 $0.01, 다른 플랫폼보다 훨씬 저렴). Pro 플랜의 에이전시는 하위 계정에 재청구하여 자동으로 비용을 충당하거나 수익을 낼 수 있습니다. 워크플로우 Pro 플랜은 에이전시가 하위 계정에 재판매할 수 있는 별도 구독으로, 프리미엄 트리거 & 액션을 대량 할인가로 미리 구매합니다.

---

## **Google Sheets 연동 설정 방법**

Google Sheets 액션에는 몇 가지 정의해야 할 세부사항이 있지만 간단합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038590478/original/0g9AOmI2Cpjj4GSH50ntgVFjtcagowosUQ.png?1734582672)

- 워크플로우에 Google Sheets 액션 추가:

Hyperclass에서 **자동화(Automations) > 워크플로우(Workflows)**로 이동합니다.

- **+ 액션 추가(Add Action)**를 선택하고 **Google Sheets 프리미엄 워크플로우 액션**을 선택합니다.

- Google 계정 연결: 아직 연결하지 않았다면 Hyperclass에서 Google 계정을 인증합니다.

- 스프레드시트와 워크시트 선택: 데이터가 업데이트될 적절한 Google Sheets와 특정 워크시트를 선택합니다.

---

## Google Sheets 액션 기본 설정

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038590342/original/cYv8BnVpsYzqgabMnOEQn3Hfog5CUlKIuw.png?1734582295)

- **계정(Account)** 선택

- **드라이브(Drive)** 선택

- **스프레드시트(Spreadsheet)** 선택

- **워크시트(Worksheet)** 선택

- **헤더 새로고침(Refresh Headers)** (워크시트의 첫 번째 행)

- **컬럼 선택(Select Columns)** (모든 컬럼 또는 범위를 포함할 수 있음)

드라이브, 스프레드시트, 워크시트의 정확한 이름을 알고 있으면 검색할 수 있어 도움이 됩니다. 그렇지 않으면 많이 스크롤해야 할 수 있습니다.

---

## Google Sheets 액션 기능

**기능****설명**
Create Spreadsheet Row|스프레드시트 끝에 새 행을 추가
Create Multiple Spreadsheet Row(s)|시트 끝에 하나 이상의 새 행을 추가
Lookup Spreadsheet Row|검색 조건에 맞는 첫 번째 행을 찾기
Lookup Multiple Spreadsheet Row(s)|일치하는 행을 찾고 추가 행을 반환
Update Specific Spreadsheet Row|번호가 매겨진 행의 데이터를 변경
Update Multiple Spreadsheet Row(s)|여러 행의 데이터를 변경
Update Spreadsheet Row Using Lookup|검색에 맞는 행의 데이터를 변경
Delete Specific Spreadsheet Row|번호가 매겨진 행의 모든 데이터를 지워서 빈 상태로 만들기
Delete Spreadsheet Row Using Lookup|검색에 맞는 행의 모든 데이터를 지우기

### **행 생성(Create Row)**

- 스프레드시트 끝에 새 행을 추가합니다.
- **중요 참고사항**: 새 행은 항상 가장 높은 번호의 행 다음에 추가됩니다.

**행 조회(Lookup Row)**

- 지정된 기준을 바탕으로 행을 검색합니다.
- **일반적인 사용 사례**: 이메일 주소로 고객 레코드를 검색합니다.

**조회 + 행 생성(Lookup + Create Row)**

- 조회와 생성 기능을 결합합니다.
- **동작 방식**: 조회 액션에서 일치하는 행을 찾지 못하면 새 행이 생성됩니다.

**행 업데이트(Update Row)**

- 지정된 행의 데이터를 업데이트합니다.
- **중요 참고사항**: 이 액션에는 행 번호가 필요하며, 보통 조회 액션을 통해 얻습니다.

**행 삭제(Delete Row)**

- 행 번호를 기반으로 행을 삭제합니다.
- **팁**: 삭제하기 전에 먼저 조회를 사용하여 행 번호를 확인하세요.

6. **고급 기능**

- **다중 행 조회**: 필터 기준을 바탕으로 여러 행을 검색하며, 일괄 처리에 유용합니다.

- **커스텀 변수 매핑**: 조회 액션 후 헤더가 커스텀 변수에 매핑되어 후속 액션이 간단해집니다. **문제 해결**: Google Sheets에서 헤더가 변경되면 Hyperclass에서 매핑을 새로고침하세요.

7. **Google Sheets 연동 사용 사례**

- **영업 추적**: 리드가 마일스톤에 도달했을 때 Google Sheets에 자동으로 추가하거나 업데이트합니다.

- **마케팅 캠페인**: 실시간 분석을 위해 캠페인 성과 지표를 동기화합니다.

- **고객 지원**: 지원 티켓 로그를 직접 Sheets에 기록하고 업데이트합니다.

8. **문제 해결 및 일반적인 이슈**

- **인덱스 매핑 이슈**: Google Sheet에서 변경 사항이 있으면 Hyperclass에서 헤더를 새로고침하세요.

- **인증 오류**: Hyperclass에서 Google 계정을 다시 인증하세요.

- **스프레드시트가 나타나지 않음**: 올바른 계정과 권한이 사용되고 있는지 확인하세요.

9. **자주 묻는 질문**

**Q: Google Sheet 헤더 이름이 변경되면 어떻게 되나요?**
Hyperclass에서 헤더를 새로고침하고 영향받은 워크플로우를 다시 설정해야 합니다.

**Q: 하나의 워크플로우에 여러 Google Sheets를 연동할 수 있나요?**
네, 각 액션 항목은 다른 Google Sheet를 지정할 수 있습니다.

10. **다음 단계**

- 관련 아티클 탐색:
- [워크플로우 액션 - Google Sheets](https://chatgpt.com/g/g-6740aaf2809c8191828f1a8d0a0c1cd8-highlevel-kb-gpt-internal/c/6762140c-2f7c-8007-a132-ce766373c995#)
- [LC Premium Actions 활성화 방법](https://chatgpt.com/g/g-6740aaf2809c8191828f1a8d0a0c1cd8-highlevel-kb-gpt-internal/c/6762140c-2f7c-8007-a132-ce766373c995#)

---

Google Sheets의 LC Premium Actions는 행 생성, 업데이트, 삭제를 자동화하여 데이터 관리 프로세스를 간소화하는 강력한 도구입니다. 워크플로우 시스템 내에서 Google Sheets 문서를 원활하게 연동하여 효율적인 데이터 관리를 가능하게 하고 오류 위험을 줄입니다. 조회 기능을 활용하여 특정 행을 찾고 정확성을 보장하며 모든 Google Sheets 데이터 요구사항에 대한 포괄적인 솔루션을 제공합니다.

모든 플랜($97, $970, $297, $2970, $497, $4970)의 에이전시는 LC Premium 트리거 & 액션에 액세스할 수 있습니다.
- 에이전시 설정을 통해 Premium Actions & Triggers가 활성화되면 기존 및 신규 하위 계정은 100회 무료 실행을 받습니다.
- 기존 하위 계정에 대해 에이전시가 실행 비용을 부담하지 않으려면 에이전시 뷰에서 각 하위 계정에 대해 재청구를 수동으로 활성화해야 합니다(자세한 정보).
- SaaS 구성기에서 premium actions가 활성화되면 생성된 신규 하위 계정은 자동으로 LC Premium Actions & Triggers에 등록되며, 에이전시에서 추가 작업이 필요하지 않습니다.

## Google Sheets 프리미엄 워크플로우 액션이란?

Google Sheets 프리미엄 워크플로우 액션은 LC Premium Actions 시스템을 사용하여 Google Sheets 내에서 데이터 관리 경험을 향상시키도록 설계된 강력한 기능입니다. 이 강력한 도구를 사용하면 행 생성, 업데이트, 삭제와 같은 다양한 작업을 자동화하여 워크플로우 효율성과 데이터 정확성을 크게 개선할 수 있습니다.

LC Premium Actions 시스템을 활용하면 복잡한 제3자 연동 없이 Google Sheets를 데이터 관리 프로세스에 쉽게 연동할 수 있습니다. 또한 시스템은 직관적인 사용자 인터페이스를 제공하여 데이터 관리 작업을 간소화하고 업무의 더 중요한 측면에 집중할 수 있게 합니다.

Google Sheets 프리미엄 워크플로우 액션의 뛰어난 기능 중 하나는 강력한 조회 기능입니다. 이를 통해 특정 기준에 따라 시트 내에서 특정 행을 검색할 수 있어 관련 데이터를 쉽게 찾고 작업할 수 있습니다. 이 기능은 여러 시트나 데이터베이스의 데이터를 교차 참조하는 것과 같은 복잡한 데이터 관리 작업을 자동화하는 데 도움이 됩니다.

또한 Google Sheets 프리미엄 워크플로우 액션은 새 행 생성, 특정 행 업데이트, 행 삭제, 조회 기능을 사용한 행 업데이트나 삭제와 같은 고급 기능을 포함한 다양한 액션을 지원합니다. 이 포괄적인 액션 모음을 통해 Google Sheets에서 데이터를 효과적으로 관리하는 데 필요한 모든 도구를 확보할 수 있습니다.

핵심 기능 외에도 Google Sheets 프리미엄 워크플로우 액션을 사용하면 커스텀 변수를 사용하여 워크플로우 내에서 데이터를 저장하고 조작할 수 있습니다. 이러한 유연성을 통해 필요와 요구사항에 맞춤화된 동적이고 데이터 기반의 워크플로우를 생성할 수 있습니다.

### 이 기능이 유용한 대상은?

Google Sheets 프리미엄 워크플로우 액션 기능은 Google Sheets를 사용한 데이터 관리와 협업에 의존하는 다양한 개인과 조직에게 유용합니다. 여기에는 다음이 포함되지만 이에 국한되지 않습니다:

- 중소기업: 이들 조직은 이 기능을 사용하여 데이터 관리 프로세스를 자동화하고, 재고를 추적하고, 예산을 관리하고, 보고서를 생성하여 더 효율적인 협업과 의사 결정을 가능하게 할 수 있습니다.
- 프로젝트 매니저: Google Sheets 내에서 프로젝트 추적, 업무 관리, 리소스 배정을 간소화하여 향상된 프로젝트 결과와 팀 생산성을 이끌어낼 수 있습니다.
- 영업 및 마케팅 전문가: 이 기능은 데이터 입력, 리드 추적, 영업 성과 분석을 자동화하여 영업 및 마케팅 캠페인에서 더 나은 인사이트와 의사 결정을 가능하게 합니다.
- 인사(HR) 전문가: Google Sheets 프리미엄 워크플로우 액션으로 직원 데이터를 관리하고, 온보딩 프로세스를 자동화하고, 다양한 HR 관련 지표를 추적하여 시간을 절약하고 오류를 줄일 수 있습니다.
- 교육자와 교육 기관: 교사와 관리자는 이 기능을 사용하여 학생 데이터를 관리하고, 과제를 추적하고, 성과 지표를 분석하여 더 효과적인 교육 전략을 수립할 수 있습니다.
- 비영리 조직: 비영리 단체는 Google Sheets 내에서 기부자 관리, 이벤트 기획, 예산 추적을 자동화하여 더 효율적인 운영과 더 나은 자원 배정을 할 수 있습니다.
- 연구자와 데이터 분석가: 이들 전문가는 이 기능을 사용하여 Google Sheets 내에서 데이터 수집, 분석, 보고 프로세스를 간소화하여 더 정확하고 시의적절한 인사이트를 얻을 수 있습니다.

### 이 기능의 이점은?

Google Sheets 프리미엄 워크플로우 액션은 사용자에게 다양한 이점을 제공하여 데이터 관리 프로세스에 유용한 추가 기능이 됩니다. 주요 이점은 다음과 같습니다:

- 효율성 향상: 행 생성, 업데이트, 삭제와 같은 다양한 데이터 관리 작업을 자동화하여 사용자는 시간을 절약하고 생산성을 향상시켜 업무의 더 중요한 측면에 집중할 수 있습니다.

- 정확성 향상: 자동화는 데이터 관리 프로세스에서 인적 오류 위험을 줄여 Google Sheets 내의 데이터가 정확하고 신뢰할 수 있도록 보장합니다.
- 협업 간소화: 이 기능은 팀원 간의 데이터 공유와 협력을 단순화하여 프로젝트에서 함께 작업하고 공동 목표를 달성하기 쉽게 만듭니다.
- 유연한 커스터마이제이션: 커스텀 변수와 조회를 사용하여 사용자는 필요와 요구사항에 맞춤화된 동적이고 데이터 기반의 워크플로우를 생성할 수 있습니다.
- 강력한 조회 기능: 이 기능을 통해 사용자는 특정 기준에 따라 시트 내에서 특정 행을 검색할 수 있어 관련 데이터를 쉽게 찾고 작업할 수 있습니다. 이는 여러 시트나 데이터베이스의 데이터를 교차 참조하는 것과 같은 복잡한 데이터 관리 작업을 자동화하는 데 특히 유용합니다.
- 쉬운 연동: Google Sheets 프리미엄 워크플로우 액션은 복잡한 제3자 연동의 필요성을 제거하여 Google Sheets 내에서 데이터를 관리하는 원활하고 사용자 친화적인 솔루션을 제공합니다.
- 확장성: 이 기능은 모든 규모의 조직에서 활용할 수 있어 조직이 성장하고 발전함에 따라 데이터를 관리하는 확장 가능한 솔루션입니다.
- 더 나은 의사 결정: 데이터 관리 프로세스를 간소화하고 데이터 정확성을 개선함으로써 사용자는 Google Sheets 데이터에서 얻은 인사이트를 바탕으로 더 정보에 기반한 결정을 내릴 수 있습니다.

## Google Sheets 프리미엄 워크플로우 액션 사용 방법은?

Google Sheets에서는 다음 워크플로우 액션들이 지원됩니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294013403/original/lCUixqYdA6zlNXPNjAJXNYf7kjn5vEngMg.png?1682257558)

### 스프레드시트 행 생성

LC Premium Actions를 사용하면 제3자 연동 없이 Google Sheets 문서로 직접 데이터를 전송할 수 있습니다. Google 계정을 시스템에 연동하고 Google Drive에서 원하는 시트를 선택하기만 하면 됩니다. 그런 다음 직관적인 사용자 인터페이스를 사용하여 시트에 쉽게 데이터를 전송할 수 있습니다.

#### Google 계정 선택:

하위 계정에 연동된 모든 Google 계정이 선택할 수 있는 드롭다운 메뉴에 표시됩니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294014486/original/aowv6YTk63mq1daX0eqDn2h0db48akFmFA.png?1682259674)

#### 드라이브 선택:

하위 계정 시스템의 드롭다운 메뉴에서 Google 계정을 선택하면 연결된 모든 Google Drive가 선택할 수 있도록 표시됩니다. 이를 통해 데이터를 전송하려는 대상 Google Sheets 문서가 있는 특정 Google Drive 계정을 선택할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294014527/original/fWMFC1aLZvu2iuX_Pd87-QxdbtZnSAQfmQ.png?1682259739)

#### 스프레드시트 선택:

드롭다운 메뉴에서 Google Drive를 선택하면 연동된 Google Drive와 연결된 모든 스프레드시트가 선택할 수 있도록 표시됩니다.

이를 통해 데이터를 전송하려는 특정 Google 스프레드시트 문서를 선택할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294014588/original/47mlhoT1pJN-daaiQVu2ubV1F9EyzNrk2w.png?1682259782)

#### 워크시트 선택:

드롭다운 메뉴에서 Google 스프레드시트를 선택하면 해당 스프레드시트 내의 모든 워크시트가 선택할 수 있도록 표시됩니다.

이를 통해 데이터를 전송하려는 특정 워크시트를 선택할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294014598/original/N4mlSoOjjgifygREP0oGmDbHgU9neUHygA.png?1682259818)

#### 워크시트에서 시작 컬럼과 종료 컬럼 선택

워크플로우 시스템을 사용하여 Google Sheets 문서에 데이터를 전송할 때 시트의 첫 번째 행이 자동으로 헤더 행으로 간주되며, 각 컬럼은 해당 행의 헤더 값에 따라 라벨이 지정됩니다.

시트의 헤더를 업데이트해야 하는 경우 "헤더 새로고침(Refresh Headers)" 버튼을 클릭하여 시트에서 최신 헤더 값을 가져올 수 있습니다. 이렇게 하면 데이터가 시트의 올바른 컬럼에 정확히 매핑되고 워크플로우가 최신 시트 구성에 맞춰 업데이트됩니다.

이 기능을 제공함으로써 시스템은 데이터 관리 프로세스를 쉽게 자동화하고 데이터 워크플로우의 정확성을 보장합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48294014623/original/8K0LEE6bz3imuip9_p68DFBtChyKkXHgnw.png?1682259878)

#### 워크시트에 새 행을 생성하기 위한 값 입력:

값을 