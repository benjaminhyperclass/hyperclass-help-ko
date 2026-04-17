---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# 구글 광고 오프라인 컨버전 액션 설정 방법 (구글 플랫폼 측 설정)

이 가이드는 구글 광고 인터페이스에서 직접 구글 광고 오프라인 컨버전 액션을 구성하는 방법을 설명합니다. 이는 **독립적인 플랫폼 측 설정**이며 Hyperclass 구성 단계는 포함하지 않습니다. 이 설정을 완료한 후, **다음 단계** 섹션의 링크를 사용하여 광고 관리자(Ad Manager) 또는 워크플로우(Workflows)를 통해 Hyperclass에서 컨버전을 연결하세요.

**목차**

- [구글 광고 컨버전 액션이란?](#구글-광고-컨버전-액션이란)
- [구글 광고 컨버전 액션의 주요 이점](#구글-광고-컨버전-액션의-주요-이점)
- [구글 측 사전 요구사항](#구글-측-사전-요구사항)
- [구글 광고 오프라인 컨버전 액션 설정 방법 (구글 플랫폼 측)](#구글-광고-오프라인-컨버전-액션-설정-방법-구글-플랫폼-측)
- [자주 묻는 질문](#자주-묻는-질문)

## 구글 광고 컨버전 액션이란?

구글 광고 컨버전 액션은 리드, 전화, 폼 제출, 오프라인 영업 등 추적하고 최적화하려는 이벤트를 정의합니다. 명확하고 잘 범위가 설정된 컨버전 액션을 생성하면 구글 광고가 성과를 올바르게 어트리뷰션하고 캠페인이 의미 있는 결과를 향해 입찰하도록 도와줍니다.

컨버전 액션은 원하는 액션이 발생했을 때를 기록하는 구글 광고의 규칙입니다. 오프라인 컨버전(예: CRM에서 성사로 표시된 거래)의 경우, 구글 광고는 **GCLID/GBRAID/WBRAID**와 같은 식별자를 매칭하여 결과를 광고와 키워드로 어트리뷰션합니다.

## 구글 광고 컨버전 액션의 주요 이점

이점은 데이터 품질, 최적화, 리포팅에 중점을 둡니다. 올바른 컨버전 액션을 설정하면 입찰 신호가 개선되고, 측정이 명확해지며, 노이즈가 많거나 중복된 데이터를 방지할 수 있습니다.

- **정확한 최적화**: 스마트 입찰을 위해 구글 광고에 깨끗한 신호를 제공합니다.
- **명확한 리포팅**: 주요 결과(예: 자격을 갖춘 리드)를 부차적 이벤트와 분리합니다.
- **카운팅 제어**: 광고 상호작용당 **모든** 컨버전을 카운트할지 **하나만** 카운트할지 결정합니다.
- **유연한 어트리뷰션**: 퍼널과 데이터 볼륨에 맞는 모델을 선택합니다.
- **오프라인 호환성**: GCLID/GBRAID/WBRAID 같은 ID를 사용하여 서버 측/CRM 이벤트 업로드를 지원합니다.

## 구글 측 사전 요구사항

구글 광고 계정을 준비하면 나중에 재작업을 방지할 수 있습니다. 액션을 생성하기 전에 액세스, 계정 구조, 목표 분류를 확인하세요.

- 올바른 **구글 광고** 계정에 대한 관리자 또는 표준 액세스 권한
- 목표 분류에 대한 합의 (예: **리드** vs **리드 폼 제출** vs **자격을 갖춘 리드**)
- 이 액션이 입찰에 사용되는 **기본** 액션으로 표시되어야 하는지에 대한 결정
- 나중에 Hyperclass에서 오프라인 컨버전을 게시할 때 전송할 식별자(예: **GCLID/GBRAID/WBRAID**)에 대한 명확성

## 구글 광고 오프라인 컨버전 액션 설정 방법 (구글 플랫폼 측)

다음 단계를 **구글 광고**에서 따라하여 나중에 Hyperclass에서 데이터를 전송할 컨버전 액션을 생성하세요. 적절한 설정은 깨끗한 어트리뷰션과 신뢰할 수 있는 입찰 신호를 보장합니다.

참고: 이는 구글 플랫폼 측 가이드입니다. Hyperclass 광고 관리자에서 오프라인 컨버전을 설정하려면 [Hyperclass 광고 관리자 - 구글 광고 오프라인 컨버전 생성 및 관리](../../10-마케팅/Google-Ads/ad-manager-create-manage-google-ads-offline-conversions.md) 아티클을 확인하세요.

폼 제출, 번호 풀 통화, 채팅 위젯 응답 등과 같은 구글 광고 컨버전 액션을 Hyperclass 워크플로우 내에서 직접 설정하고 추적하려면 [워크플로우 액션 - 구글 광고에 추가](../Integrations-Workflow-Actions/workflow-action-add-to-google-ads.md) 아티클을 확인하세요.

- 구글 애드워즈 계정으로 이동하거나 [ads.google.com](https://ads.google.com/intl/en_in/start/lc/?subid=in-en-ha-awa-bk-c-c00!o3~CjwKCAjwyYPOBhBxEiwAgpT8PxzugBXx8nv7PGe8R-bVM6pT1TSQUkUBsSH7fq-9uWlPPKDs9bWKqxoCiVUQAvD_BwE~140706620052~kwd-94527731~16862088904~592470418766&gclsrc=aw.ds&gad_source=1&gad_campaignid=16862088904&gclid=CjwKCAjwyYPOBhBxEiwAgpT8PxzugBXx8nv7PGe8R-bVM6pT1TSQUkUBsSH7fq-9uWlPPKDs9bWKqxoCiVUQAvD_BwE)을 열어주세요.

- **"로그인(Sign In)"**을 클릭하여 구글 광고 계정에 로그인하거나 "시작하기(Start Now)"를 클릭하여 새 구글 광고 계정을 생성하세요.

![구글 광고 로그인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064512308/original/C8Aw37elwsskF22cfBXP7IxnyZg-vd6WuA.png?1770651246)

- "+" 버튼을 클릭하고 드롭다운에서 컨버전 액션(Conversion Action)으로 이동하세요.

![컨버전 액션 메뉴로 이동](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067502302/original/9qUf3GbbUGIRqj0l1iAlLO-HcyOURbtFdQ.gif?1774272837)

- 현재 구글 광고 UI 프롬프트에 따라 컨버전을 측정할 데이터 소스를 선택하세요.

![데이터 소스 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067579637/original/1wvU2iIuwl1vgDCU4q672wPZXEmaxnNILg.png?1774345111)

- 컨버전 추적을 시작하려면 오프라인 컨버전(Conversions offline) 옵션을 선택해야 합니다.

**참고:** Hyperclass는 오프라인 컨버전만 지원합니다. 웹사이트, 앱, 전화 통화 및 기타 컨버전 소스는 지원되지 않습니다.

![오프라인 컨버전 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067579648/original/-PwtOolBiOv6IZ2uBtJZzD_-GhUtvdE7Pw.png?1774345121)

- 데이터 소스 편집(Edit Data Sources)을 클릭하여 오프라인 데이터 소스를 추가하고 '이 단계를 건너뛰고 나중에 데이터 소스 설정하기(Skip this step and set up a data source later)'를 선택하세요.

![데이터 소스 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067579723/original/VsiSQvjZtX8P0cXhZbudRHW9m_XWoawx1w.png?1774345176)

![단계 건너뛰기 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067579852/original/j74nCVGHCYk6FtNsTFSCiGXRAtF9qKwHPA.png?1774345222)

- "저장하고 계속하기(Save and Continue)"를 클릭하세요.

![저장하고 계속하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067579906/original/Lc38gm87HysxZ7IKAiwmYlGfJ6gMn7wYMA.png?1774345249)

컨버전 카테고리를 선택하세요. 이 단계는 "무엇을 측정하고 싶나요?"를 정의하는 것입니다. 전체 컨버전 카테고리 목록에 액세스하려면 "모두 보기(See all)"를 클릭하세요.

![컨버전 카테고리 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067506158/original/8tXXliQSYFav771REY1QnV9yBwa06VkBHw.png?1774274441)

- 컨버전 카테고리를 선택한 후, 카테고리에 데이터 소스를 추가해야 합니다.

![카테고리에 데이터 소스 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067580048/original/U4gxlhKu0mq9IJ2RGZx4--KiYeZ5-CrH8Q.png?1774345321)

- **편집(Edit)** 설정을 클릭하여 세부사항을 정의하세요.

![편집 설정 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067580713/original/-Kp98QJlnSnH0Od2wiV0YYMqhjt-C42fKg.png?1774345593)

- 이 섹션은 이전 단계에서 선택한 '컨버전 목표'를 보여주는 액션 최적화를 표시합니다. 라디오 버튼을 '입찰 최적화에 사용되는 기본 액션(Primary action used for bidding optimisation)'으로 선택된 상태로 두세요.

![액션 최적화 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067580773/original/f53u6AuJzI4SU2_7b9jsWXCmby7r6dAnwQ.png?1774345640)

- 이 컨버전에 이름을 지정하세요. 컨버전 이름을 입력하세요. 이 예시에서는 "Conversion Test"라고 부르겠습니다.

참고: 이 단계를 완료한 후, 컨버전 이름을 가까운 곳에 복사해서 붙여넣어 주세요.

![컨버전 이름 지정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067580849/original/TCZ-Nua_u5JdjdMQXgA7sxrjV91S4dGzwg.png?1774345674)

- 컨버전의 값을 선택하세요. 동일, 다름, 또는 값 사용 안 함 중에서 선택하세요... [자세한 정보](https://support.google.com/google-ads/answer/3419241?hl=en)

![컨버전 값 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067512334/original/OVD2rhwjEiMpi-bLkZL6FRJy95oudTnFWQ.png?1774276716)

- 카운트를 선택하세요. 항상 "**모든(Every)**" 옵션을 선택하는 것을 권장합니다.

![카운트 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067512364/original/Ok2YxrgbOjCqKyH3GwIb2PP9oG6xJggbiA.png?1774276744)

- 컨버전 윈도우와 어트리뷰션 모델을 설정하세요.

1. 클릭 후 컨버전 윈도우를 "90일"로 설정하세요
2. 드롭다운에서 참여형 뷰 컨버전 윈도우를 선택하세요
3. 다음으로 어트리뷰션 모델을 "마지막 클릭(Last Click)" 또는 "데이터 기반(Data Driven)"(권장)으로 설정하세요

![컨버전 윈도우 및 어트리뷰션 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067512556/original/zAV1TcL39odzlku9ZwfwwGtSwrwxZ6qFHg.png?1774276791)

- "완료(Done)"를 클릭하면 컨버전 설정이 정의되고 저장됩니다.

![완료 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067512857/original/IuaqENbu2fX7uCCFX1IZ4KdRsdD8wKrMzw.png?1774276957)

- 저장하고 계속하기(Save and continue)를 클릭하여 변경 사항을 진행하세요. 새 컨버전을 생성하려면 "컨버전 생성(Create Conversion)"을 선택하세요. 더 많은 컨버전 카테고리를 추가하려면 "다른 카테고리 추가(Add Another Category)"를 클릭하세요.

![저장하고 계속하기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067580436/original/H8j4q657JuhY9VGvEq6vj7gb4_PE-MOR0A.png?1774345508)

- **완료(Finish)**를 클릭하여 컨버전 생성 프로세스를 마무리하세요.

![완료 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067580981/original/sHqe_AHeotyPhYjnrCfR12jhkrnN57S8Zg.png?1774345723)

## 자주 묻는 질문

**Q: 카운트에서 모든(Every) 또는 하나(One) 중 무엇을 설정해야 하나요?**
리드 제너레이션에는 **하나(One)**를 사용하여 연락처가 같은 이벤트를 반복할 때 컨버전이 부풀려지는 것을 방지하세요. 구매 같은 수익 이벤트에는 **모든(Every)**를 사용하세요.

**Q: 구글 광고에서 컨버전을 보려면 얼마나 기다려야 하나요?**
볼륨과 방법에 따라 처리에 몇 시간에서 24-48시간까지 걸릴 수 있습니다. 리포팅 지연은 정상이며, 보고서를 확인할 때는 절대 날짜를 사용하세요.

**Q: 오프라인 컨버전을 업로드하려면 GCLID, GBRAID 또는 WBRAID가 필요한가요?**
예—신뢰할 수 있는 매칭을 위해 최소 하나의 식별자가 필요합니다. 첫 터치에서 사용 가능한 것을 캡처하고 저장한 후, Hyperclass에서 컨버전을 전송할 때 포함시키세요.

**Q: 컨버전이 기록되고 있는지 어디서 확인할 수 있나요?**
구글 광고에서: 도구 및 설정(Tools & Settings) > 컨버전(Conversions) 및 컨버전 컬럼을 사용하는 캠페인 보고서에서 확인하세요. Hyperclass에서는 HL 측 전송이 구성되면 광고 관리자 리포팅을 사용하세요(관련 아티클 참조).

**Q: 컨버전을 전송하려면 Hyperclass 광고 관리자를 사용해야 하나요, 워크플로우를 사용해야 하나요?**
중앙화된 광고 작업 공간과 내장 매핑을 선호한다면 광고 관리자를 사용하세요. 세밀한 자동화나 커스텀 로직이 필요하다면 워크플로우를 사용하세요. 둘 다 같은 구글 컨버전 액션으로 전송할 수 있습니다.

**Q: 업로드가 매칭되지 않거나 결과가 표시되지 않는 이유는 무엇인가요?**
일반적인 문제로는 누락된 식별자, 잘못된 시간대, 통화/값 불일치, 또는 잘못된 컨버전 액션으로 전송하는 경우가 있습니다. 컨버전 ID/이름, 식별자 존재, 이벤트 타임스탬프를 확인하세요.

## 관련 아티클

- [광고 관리자 - 구글 광고 오프라인 컨버전 생성 및 관리](../../10-마케팅/Google-Ads/ad-manager-create-manage-google-ads-offline-conversions.md)
- [워크플로우 액션 – 구글 애드워즈에 추가](../Integrations-Workflow-Actions/workflow-action-add-to-google-ads.md)
- 광고 관리자 설정 개요
- [광고 관리자 개요](../../10-마케팅/Getting-Started-w/-Ad-Manager/overview-of-ad-manager.md)
- [구글 광고 리포팅 설정 방법](../../18-리포팅/how-to-set-up-google-ad-reporting.md)
- [어트리뷰션 소스 이해하기](../../18-리포팅/understanding-attribution-source.md)

---
*원문 최종 수정: Tue, 24 Mar, 2026 at 5:12 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*