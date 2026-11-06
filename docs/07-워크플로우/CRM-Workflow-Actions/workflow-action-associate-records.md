---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000007718-workflow-action-associate-records
번역일: 2026-08-11
카테고리: 07-워크플로우 > CRM Workflow Actions
---

# 워크플로우 액션: 레코드 연결 (Associate Records)

워크플로우 자동화

## 레코드 연결 워크플로우 액션

유연한 필터와 매칭 전략을 사용하여 객체(Object)와 다른 객체의 레코드 간 연결(Association)을 자동으로 생성합니다.

무엇을 배우게 되나요

레코드 연결(Associate Records) 워크플로우 액션은 필드 값, 병합 필드(Merge Field), 커스텀 매칭 규칙을 기반으로 CRM 레코드를 자동으로 찾아 연결함으로써 수동 작업을 없애줍니다.

이 아티클에서는 액션을 설정하는 방법, 매칭 전략을 선택하는 방법, 연결 라벨(Association Label)을 적용하는 방법, 그리고 실제 업무 사례를 통해 복잡한 비즈니스 관계를 모델링하는 방법을 설명합니다.

베타 기능

레코드 연결 워크플로우 액션은 현재 Labs를 통해 베타 버전으로 제공됩니다. 사용 전 **Settings(설정) → Labs → Associate Records - Workflow Action**에서 활성화해야 합니다. 베타 기능은 현재 활발히 개발 중이며 사용자 피드백에 따라 업데이트될 수 있습니다.

목차

1
[레코드 연결 워크플로우 액션이란?](#section-1)
2
[주요 장점](#section-2)
3
[기능 개요](#section-3)
4
[레코드 연결 액션 설정 방법](#section-4)
5
[실제 사용 사례](#section-5)
6
[관련 아티클](#section-6)
7
[자주 묻는 질문](#section-faq)

1

## 레코드 연결 워크플로우 액션이란?

레코드 연결(Associate Records) 워크플로우 액션은 필드 단위 매칭 규칙을 기반으로 CRM 레코드 간의 연결을 자동으로 생성합니다. 연락처(Contacts), 회사(Companies), 기회 관리(Opportunities), 커스텀 객체(Custom Objects) 전반에서 작동하여, 수동 데이터 입력 없이 복잡한 비즈니스 관계를 모델링할 수 있습니다.

워크플로우에 레코드가 등록(enroll)되면, 액션은 도시, 부동산 유형, 상태 등 설정한 필터를 사용해 일치하는 레코드를 검색하고, 정의한 전략(가장 먼저 생성된 레코드, 가장 최근에 생성된 레코드, 또는 모든 일치 레코드)에 따라 연결을 생성합니다.

이 액션을 사용하면 CRM 관계를 유지하기 위해 외부 도구나 커스텀 코드를 사용할 필요가 없으며, 레코드가 생성되거나 수정될 때마다 연결이 정확하게 유지됩니다.

2

## 주요 장점

레코드 연결 액션은 대규모 CRM 관계 관리를 위한 자동화, 정확성, 유연성을 제공합니다.

**수동 레코드 연결 작업 감소** — 필드 값과 비즈니스 로직을 기반으로 레코드 연결을 자동화하여 반복적인 연결 작업을 없애줍니다.

**정확한 연결 유지** — 레코드가 생성되거나 수정될 때 자동으로 연결을 생성하여, 관계가 항상 최신 데이터를 반영하도록 합니다.

**연결된 레코드 전반에 워크플로우 구축** — 표준 객체와 커스텀 객체(Custom Objects) 전반에서 복잡한 자동화를 구축하여 실제 업무 프로세스를 CRM에 직접 모델링할 수 있습니다.

**객체 간 프로세스 자동화** — 서드파티 자동화 도구나 커스텀 코드를 CRM 전반에서 원활하게 작동하는 네이티브 워크플로우 액션으로 대체합니다.

**유연한 매칭 지원** — 고정 값 또는 등록된 레코드의 병합 필드(Merge Field)를 사용하여 일치하는 레코드를 동적으로 식별할 수 있습니다.

3

## 기능 개요

레코드 연결 액션은 다양한 CRM 워크플로우와 비즈니스 상황을 처리할 수 있는 유연한 설정 옵션을 제공합니다.

기능 1

다중 객체 지원

워크플로우 유형과 하위 계정(Sub-account)에 설정된 객체 연결 구성에 따라, 연락처(Contacts), 회사(Companies), 기회 관리(Opportunities), 커스텀 객체(Custom Objects) 전반에서 레코드를 연결할 수 있습니다.

기능 2

필드 기반 필터

해당 필드 유형과 그에 맞는 연산자(같음, 이다, 비어있지 않음, 포함함, 초과 등)를 지원하는 하나 이상의 필드 기반 필터를 사용해 레코드를 찾을 수 있습니다.

기능 3

고정 값 및 병합 필드

고정 값(예: 침실 개수 "4") 또는 등록된 레코드의 병합 필드(예: contact.preferred_city)를 사용하여 실시간 데이터를 기반으로 레코드를 동적으로 매칭할 수 있습니다.

기능 4

매칭 전략

비즈니스 요구에 따라 가장 먼저 생성된 레코드(가장 먼저 만들어진 레코드), 가장 최근에 생성된 레코드(가장 나중에 만들어진 레코드), 또는 일치하는 모든 레코드와 연결하도록 선택할 수 있습니다.

기능 5

연결 라벨(Association Label)

기존 연결 라벨을 적용하여 레코드 간 관계를 분류하고 설명할 수 있습니다(예: "잠재 구매자", "판매자"). 선택한 라벨은 트리거(Trigger) 레코드에 적용됩니다.

기능 6

객체 간 연결

하위 계정(Sub-account)에 설정된 연결 구성을 기반으로 서로 다른 객체 간(연락처 → 부동산, 회사 → 기회 관리 등) 연결을 생성할 수 있습니다.

기능 7

다중 필터 로직

AND 조건으로 여러 필터를 추가하여 정밀한 매칭 규칙을 만들 수 있습니다. 레코드가 연결 대상이 되려면 모든 조건을 충족해야 합니다.

4

## 레코드 연결 액션 설정 방법

연락처(Contact), 회사(Company), 커스텀 객체(Custom Object) 워크플로우에서 레코드 연결 액션을 설정하려면 다음 단계를 따르세요.

1단계

Labs에서 기능 활성화

**Settings(설정) → Labs**로 이동하여 **Associate Records - Workflow Action** 기능을 활성화(Enable)하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077497329/original/wO99TV_UQCyIiYu5wGvADNuJAUeJ1IZLjg.png?1785767436)

2단계

워크플로우 열기 또는 생성

액션을 추가할 기존 워크플로우를 열거나, 새로운 연락처(Contact), 회사(Company), 커스텀 객체(Custom Object) 워크플로우를 생성하세요.

3단계

레코드 연결 액션 추가

**+** 아이콘을 클릭해 새 액션을 추가합니다. **Associations(연결)** 카테고리에서 (BETA 태그가 표시된) **Associate Records**를 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077507058/original/vs-r6KzVQfT0SpaPnk8kdqGjhTfWzCaroQ.png?1785772549)

4단계

액션 이름 지정 (선택 사항)

**ACTION NAME** 필드에서 기본 이름인 "Associate records"를 그대로 사용하거나, 생성하려는 특정 연결을 설명하는 이름으로 커스터마이즈할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077507117/original/a6vuzGxhSqYUeF-ZBqdDQqE-mXoCnl2JvA.png?1785772592)

5단계

연결할 객체 선택

**CREATE ASSOCIATION WITH** 항목에서 연결하려는 레코드가 포함된 객체 유형을 선택하세요(예: 부동산, 캠페인, 회사, 보험 정책, 거래 등).

사용 가능한 객체는 하위 계정(Sub-account)에 설정된 연결 구성에 따라 달라집니다. 다른 객체 레코드와 연결하려면 Associations(연결) 설정을 확인하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077507180/original/kpIHrfIjHiH-ph1_cfi6bs1qyfqnzse0nA.png?1785772622)

6단계

일치하는 레코드를 식별할 필터 설정

**FILTER RECORDS TO ASSOCIATE** 항목에서 하나 이상의 필드 기반 필터를 추가하세요. 각 필터 행에서:

- 매칭할 필드를 선택합니다(예: 침실 수, 도시, 부동산 유형)
- 연산자를 선택합니다(예: 같음, 이다, 비어있지 않음)
- 고정 값을 입력하거나 등록된 레코드의 병합 필드(병합 필드 아이콘으로 표시됨)를 사용합니다

**Add field(필드 추가)**를 클릭하면 필터 조건을 추가할 수 있습니다. 모든 필터는 AND 조건으로 작동하며, 레코드가 연결 대상이 되려면 모든 조건을 충족해야 합니다.

액션이 작동하려면 최소 한 개 이상의 필드-값 조합이 필요합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077507661/original/G8iRb_qmRhJy-CsqrUkEhsW4PM3rWVRATg.png?1785772870)

7단계

매칭 전략 선택

**WHEN MULTIPLE RECORDS MATCH** 항목에서 여러 개의 레코드가 일치할 경우 처리 방식을 선택하세요:

- **Associate with all matching records (모든 일치 레코드와 연결)** — 필터 조건을 충족하는 모든 레코드와 연결을 생성합니다
- **Associate with earliest created record (가장 먼저 생성된 레코드와 연결)** — 가장 먼저 생성된 레코드에만 연결합니다
- **Associate with latest created record (가장 최근 생성된 레코드와 연결)** — 가장 최근에 생성된 레코드에만 연결합니다

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077507694/original/xdv4MzpzKet9doSF3TGhBzYZZbjexxtyMg.png?1785772915)

8단계

연결 라벨 선택

**ASSOCIATION LABEL** 항목에서 연결을 분류할 기존 라벨을 선택하세요(예: "잠재 구매자", "판매자").

선택한 라벨은 트리거(Trigger) 레코드에 적용됩니다. 일부 라벨은 짝(pair)으로 구성되어 있습니다(예: "판매자 - 부동산과 짝지어짐"과 "잠재 구매자 - 관심 부동산과 짝지어짐").

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077507725/original/JsyEWQI8VtwXmFguq7qa2aJrDShkW6M_GA.png?1785772962)

9단계

변경 사항 저장

**Save action(액션 저장)**을 클릭하면 설정한 액션이 워크플로우에 추가됩니다. 변경 사항을 취소하려면 **Cancel(취소)**을 클릭하세요.

연결 자동화를 활성화하려면 워크플로우를 저장하고 발행(Publish)하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077507779/original/V95cjMUVysjwtrIRPjWZn1j_LSD5p0-eUA.png?1785773001)

10단계

연결 확인

워크플로우 실행 이후 연결을 확인하려면 **Contacts(연락처)** > Associations(연결) 메뉴로 이동하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155077508422/original/XYDNjNUqwuUH1L4d3ZjtrAvGQSJLCPo7Wg.png?1785773366)

완료

발행 후에는 레코드가 워크플로우에 등록되고 설정한 필터 조건과 일치할 때마다 연결이 자동으로 생성됩니다.

작동 중인 자동화

더 스마트한 CRM 워크플로우 구축하기

레코드 연결 액션을 사용하면 연락처(Contacts), 회사(Companies), 기회 관리(Opportunities), 커스텀 객체(Custom Objects) 전반에서 복잡한 관계 관리를 자동화하여 수동 작업을 줄이고 CRM 데이터를 정확하게 유지할 수 있습니다.

5

## 실제 사용 사례

레코드 연결 액션은 레코드 간에 동적이고 규칙 기반의 연결이 필요한 업종에 특히 적합합니다. 아래는 부동산 에이전시의 예시입니다.

사용 사례: 부동산 구매자-매물 매칭

한 부동산 에이전시는 매물을 추적하기 위해 "Property(부동산)"라는 커스텀 객체(Custom Object)를 사용합니다. 새로운 구매자 연락처가 워크플로우에 등록되면, 레코드 연결 액션이 구매자의 선호 조건과 일치하는 부동산 레코드를 자동으로 검색합니다.

**설정:**

- **연결할 객체(Create Association With):** Property(부동산)
- **필터:** 침실 수(숫자)가 4와 같음, 도시(드롭다운 단일 선택)가 contact.preferred_city와 일치, 부동산 유형(드롭다운 단일 선택)이 contact.preferred_type과 일치, 부동산 이름(한 줄 텍스트)이 비어있지 않음
- **매칭 전략:** 모든 일치 레코드와 연결
- **연결 라벨:** 잠재 구매자

**결과:** 각 구매자는 조건에 맞는 모든 부동산과 자동으로 연결되며, 담당자는 각 부동산 레코드에서 관심 있는 구매자 목록을 바로 확인할 수 있습니다. 이를 통해 수동 연결 작업이 사라지고, 구매자가 관련 매물을 즉시 확인할 수 있습니다.

이 자동화는 팀이 레코드를 하나씩 수동으로 연결하지 않고도 연결을 생성하고 유지할 수 있도록 도와주며, 새로운 연락처와 매물이 시스템에 추가될 때마다 상당한 시간을 절약해 줍니다.

7

## 자주 묻는 질문

**Q: 레코드 연결 액션은 어떤 객체를 지원하나요?**

이 액션은 연락처(Contacts), 회사(Companies), 기회 관리(Opportunities), 커스텀 객체(Custom Objects)를 지원합니다. 사용 가능한 대상 객체는 워크플로우 유형과 하위 계정(Sub-account)에 설정된 연결 구성에 따라 달라집니다.

**Q: 필터 값에 병합 필드를 사용할 수 있나요?**

네. 등록된 레코드의 병합 필드를 사용하여 실시간 데이터를 기반으로 레코드를 동적으로 매칭할 수 있습니다. 예를 들어 contact.preferred_city를 사용해 부동산의 City(도시) 필드와 매칭할 수 있습니다.

**Q: 필터에 일치하는 레코드가 없으면 어떻게 되나요?**

필터 조건과 일치하는 레코드가 없으면, 액션은 연결을 생성하지 않고 완료되며 워크플로우는 다음 단계로 계속 진행됩니다.

**Q: 하위 계정에서 객체 간 연결은 어떻게 설정하나요?**

다른 객체 레코드와 연결하려면 Associations(연결) 설정을 확인하세요. 여기서 어떤 객체를 서로 연결할 수 있는지 정의하고 연결 라벨을 설정할 수 있습니다.

**Q: "가장 먼저", "가장 최근", "모두" 매칭 전략은 어떻게 선택해야 하나요?**

가장 오래된 일치 레코드와 연결하려면 "가장 먼저 생성된 레코드와 연결"을 사용하세요. 가장 최근에 일치한 레코드를 원한다면 "가장 최근 생성된 레코드와 연결"을 사용하세요. 조건에 맞는 모든 레코드와 연결을 생성하려면 "모든 일치 레코드와 연결"을 사용하세요.

**Q: 연결 라벨은 필수인가요?**

네, 액션을 설정할 때 연결 라벨을 반드시 선택해야 합니다. 라벨은 레코드 간의 관계를 분류하고 설명하는 데 도움이 됩니다.

**Q: OR 조건으로 여러 필터를 사용할 수 있나요?**

아니요. 현재 이 액션은 AND 조건만 지원합니다. 레코드가 연결 대상이 되려면 모든 필터 조건을 충족해야 하며, OR 조건은 지원되지 않습니다.

**Q: 등록된 레코드가 변경되면 기존 연결도 업데이트되나요?**

액션은 워크플로우가 실행될 때 연결을 생성합니다. 등록 이후 레코드가 변경되어도 연결은 자동으로 업데이트되지 않습니다. 특정 필드가 변경될 때 연결을 다시 평가하도록 추가 워크플로우 트리거를 설정할 수 있습니다.

**Q: 어떤 라벨이 트리거 레코드에 적용되나요?**

액션 설정에서 선택한 연결 라벨이 트리거 레코드(워크플로우에 등록된 레코드)에 적용됩니다. 해당 라벨이 짝(pair)으로 구성된 경우, 연결된 레코드에는 대응하는 짝 라벨이 적용됩니다.

---
*원문 최종 수정: 2026-08-03*
*Hyperclass 사용 가이드 — hyperclass.ai*