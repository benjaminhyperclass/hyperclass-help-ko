---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# Google 광고 오프라인 전환 액션 설정하기 (Google 플랫폼 측 설정)

이 가이드는 Google 광고 인터페이스에서 직접 Google 광고 오프라인 전환 액션을 설정하는 방법을 설명합니다. 이는 **독립적인 플랫폼 측 설정**이며 Hyperclass 설정 단계는 포함되지 않습니다. 이 설정을 완료한 후, **다음 단계**의 링크를 사용하여 광고 관리자나 워크플로우를 통해 Hyperclass에서 전환을 연결하세요.

**목차**

- [Google 광고 전환 액션이란?](#google-광고-전환-액션이란)
- [Google 광고 전환 액션의 주요 이점](#google-광고-전환-액션의-주요-이점)
- [Google 측 사전 요구사항](#google-측-사전-요구사항)
- [Google 광고 오프라인 전환 액션 설정하기 (Google 플랫폼 측)](#google-광고-오프라인-전환-액션-설정하기-google-플랫폼-측))
- [자주 묻는 질문](#자주-묻는-질문)
- [관련 문서](#관련-문서)

# Google 광고 전환 액션이란?

Google 광고 전환 액션은 리드, 전화 문의, 폼 제출, 오프라인 판매 등 추적하고 최적화하고자 하는 이벤트를 정의합니다. 명확하고 범위가 잘 정의된 전환 액션을 만들면 Google 광고가 성과를 정확히 어트리뷰션할 수 있고 캠페인이 의미 있는 결과를 향해 입찰하도록 도움을 줍니다.

전환 액션은 원하는 행동이 발생했을 때 이를 기록하는 Google 광고의 규칙입니다. 오프라인 전환(예: CRM에서 성사로 표시된 거래)의 경우, Google 광고는 **GCLID/GBRAID/WBRAID**와 같은 식별자를 매칭하여 결과를 광고와 키워드에 다시 어트리뷰션합니다.

## **Google 광고 전환 액션의 주요 이점**

이점은 데이터 품질, 최적화, 리포팅에 중점을 둡니다. 올바른 전환 액션을 설정하면 입찰 신호가 개선되고, 측정이 명확해지며, 노이즈나 중복된 데이터를 방지할 수 있습니다.

- **정확한 최적화**: Google 광고에 스마트 입찰을 위한 깔끔한 신호를 제공합니다.
- **명확한 리포팅**: 주요 결과(예: 자격을 갖춘 리드)를 부차적 이벤트와 분리합니다.
- **카운팅 제어**: 광고 상호작용당 **모든** 전환을 셀지 **하나**만 셀지 결정할 수 있습니다.
- **유연한 어트리뷰션**: 퍼널과 데이터 볼륨에 맞는 모델을 선택할 수 있습니다.
- **오프라인 호환성**: GCLID/GBRAID/WBRAID와 같은 ID를 사용하여 서버 측/CRM 이벤트 업로드를 지원합니다.

## **Google 측 사전 요구사항**

Google 광고 계정을 미리 준비하면 나중에 다시 작업하는 것을 방지할 수 있습니다. 액션을 만들기 전에 접근 권한, 계정 구조, 목표 분류를 확인하세요.

- 올바른 **Google 광고** 계정에 대한 관리자 또는 표준 접근 권한
- 목표 분류에 대한 합의(예: **리드** vs **리드 폼 제출** vs **자격을 갖춘 리드**)
- 이 액션이 입찰에 사용되는 **주요** 액션으로 표시되어야 하는지 결정
- 나중에 Hyperclass에서 오프라인 전환을 게시할 때 보낼 식별자(예: **GCLID/GBRAID/WBRAID**)에 대한 명확성

## Google 광고 오프라인 전환 액션 설정하기 (Google 플랫폼 측)

**Google 광고**에서 다음 단계를 따라 나중에 Hyperclass에서 데이터를 보낼 전환 액션을 만드세요. 올바른 설정은 깔끔한 어트리뷰션과 신뢰할 수 있는 입찰 신호를 보장합니다.

참고: 이는 Google 플랫폼 측 가이드입니다. Hyperclass 광고 관리자에서 오프라인 전환을 설정하려면 [Hyperclass 광고 관리자 - Google 광고 오프라인 전환 생성 및 관리](ad-manager-create-manage-google-ads-offline-conversions.md) 문서를 확인하세요.

폼 제출, 번호 풀 전화, 채팅 위젯 응답 등과 같은 Google 광고 전환 액션을 Hyperclass 워크플로우 내에서 직접 설정하고 추적하려면 [워크플로우 액션 - Google 광고에 추가](workflow-action-add-to-google-ads.md) 문서를 확인하세요.

- Google 애드워즈 계정으로 이동하거나 [ads.google.com](https://ads.google.com/intl/en_in/start/lc/?subid=in-en-ha-awa-bk-c-c00!o3~CjwKCAjwyYPOBhBxEiwAgpT8PxzugBXx8nv7PGe8R-bVM6pT1TSQUkUBsSH7fq-9uWlPPKDs9bWKqxoCiVUQAvD_BwE~140706620052~kwd-94527731~16862088904~592470418766&gclsrc=aw.ds&gad_source=1&gad_campaignid=16862088904&gclid=CjwKCAjwyYPOBhBxEiwAgpT8PxzugBXx8nv7PGe8R-bVM6pT1TSQUkUBsSH7fq-9uWlPPKDs9bWKqxoCiVUQAvD_BwE)을 열어주세요.

- **"로그인"**을 클릭하여 Google 광고 계정에 로그인하거나 "지금 시작"을 클릭하여 새 Google 광고 계정을 만드세요.

![Google 광고 로그인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064512308/original/C8Aw37elwsskF22cfBXP7IxnyZg-vd6WuA.png?1770651246)

- "+" 버튼을 클릭하고 드롭다운에서 전환 액션으로 이동합니다.

![전환 액션 메뉴 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067502302/original/9qUf3GbbUGIRqj0l1iAlLO-HcyOURbtFdQ.gif?1774272837)

- 현재 Google 광고 UI 프롬프트에 따라 전환을 측정할 데이터 소스를 선택하세요.

![데이터 소스 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067579637/original/1wvU2iIuwl1vgDCU4q672wPZXEmaxnNILg.png?1774345111)

- 전환 추적을 시작하려면 오프라인 전환 옵션을 선택해야 합니다.

**주의사항: **Hyperclass는 오프라인 전환만 지원합니다. 웹사이트, 앱, 전화 통화 및 기타 전환 소스는 지원되지 않습니다.

![오프라인 전환 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067579648/original/-PwtOolBiOv6IZ2uBtJZzD_-GhUtvdE7Pw.png?1774345121)

- 데이터 소스 편집을 클릭하여 오프라인 데이터 소스를 추가하고 '이 단계를 건너뛰고 나중에 데이터 소스 설정'을 선택하세요.

![데이터 소스 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067579723/original/VsiSQvjZtX8P0cXhZbudRHW9m_XWoawx1w.png?1774345176)

![데이터 소스 건너뛰기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067579852/original/j74nCVGHCYk6FtNsTFSCiGXRAtF9qKwHPA.png?1774345222)

- "저장 후 계속"을 클릭하세요.

![저장 후 계속](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067579906/original/Lc38gm87HysxZ7IKAiwmYlGfJ6gMn7wYMA.png?1774345249)

전환 카테고리를 선택하세요. 이 단계는 "무엇을 측정하고 싶은가?"를 정의하는 것입니다. "모두 보기"를 클릭하여 전체 전환 카테고리 목록에 접근하세요.

![전환 카테고리 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067506158/original/8tXXliQSYFav771REY1QnV9yBwa06VkBHw.png?1774274441)

- 전환 카테고리를 선택한 후 카테고리에 데이터 소스를 추가해야 합니다.

![데이터 소스 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067580048/original/U4gxlhKu0mq9IJ2RGZx4--KiYeZ5-CrH8Q.png?1774345321)

- **편집** 설정을 클릭하여 세부사항을 정의하세요.

![설정 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067580713/original/-Kp98QJlnSnH0Od2wiV0YYMqhjt-C42fKg.png?1774345593)

- 이 섹션은 이전 단계에서 선택한 '전환 목표'를 보여주는 액션 최적화를 나타냅니다. 라디오 버튼은 '입찰 최적화에 사용되는 주요 액션'으로 선택된 상태로 두세요.

![액션 최적화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067580773/original/f53u6AuJzI4SU2_7b9jsWXCmby7r6dAnwQ.png?1774345640)

- 이 전환에 이름을 지정하세요. 전환의 이름을 입력해주세요. 이 예시에서는 "Conversion Test"라고 부르겠습니다.

참고: 이 단계를 완료한 후 전환 이름을 어딘가에 복사해서 붙여넣어 두세요.

![전환 이름 지정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067580849/original/TCZ-Nua_u5JdjdMQXgA7sxrjV91S4dGzwg.png?1774345674)

- 전환의 값을 선택하세요. 동일, 다름, 또는 값 사용 안 함 중에서 선택하세요... [자세한 정보](https://support.google.com/google-ads/answer/3419241?hl=en)

![전환 값 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067512334/original/OVD2rhwjEiMpi-bLkZL6FRJy95oudTnFWQ.png?1774276716)

- 카운트를 선택하세요. 항상 "**모든**" 옵션을 선택하는 것을 권장합니다.

![카운트 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067512364/original/Ok2YxrgbOjCqKyH3GwIb2PP9oG6xJggbiA.png?1774276744)

- 전환 윈도우와 어트리뷰션 모델을 설정하세요.

1. 클릭스루 전환 윈도우를 "90일"로 설정하세요
2. 드롭다운에서 참여 뷰 전환 윈도우를 선택하세요
3. 다음으로 어트리뷰션 모델을 "마지막 클릭" 또는 "데이터 기반"(권장)으로 설정하세요

![전환 윈도우 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067512556/original/zAV1TcL39odzlku9ZwfwwGtSwrwxZ6qFHg.png?1774276791)

- "완료"를 클릭하면 전환 설정이 정의되고 저장됩니다.

![설정 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067512857/original/IuaqENbu2fX7uCCFX1IZ4KdRsdD8wKrMzw.png?1774276957)

- "저장 후 계속"을 클릭하여 변경사항을 진행하세요. "전환 생성"을 선택하여 새 전환을 만들거나 "다른 카테고리 추가"를 클릭하여 더 많은 전환 카테고리를 추가하세요.

![전환 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067580436/original/H8j4q657JuhY9VGvEq6vj7gb4_PE-MOR0A.png?1774345508)

- **마침**을 클릭하여 전환 생성 프로세스를 완료하세요.

![프로세스 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067580981/original/sHqe_AHeotyPhYjnrCfR12jhkrnN57S8Zg.png?1774345723)

## **자주 묻는 질문**

**Q: 카운트를 '모든' 또는 '하나'로 설정해야 하나요?**
리드 생성의 경우 **하나**를 사용하여 연락처가 같은 이벤트를 반복할 때 전환이 부풀려지는 것을 방지하세요. 구매와 같은 수익 이벤트의 경우 **모든**을 사용하세요.

**Q: Google 광고에서 전환을 보려면 얼마나 걸리나요?**
처리는 볼륨과 방법에 따라 몇 시간에서 24-48시간까지 걸릴 수 있습니다. 리포팅 지연은 정상이니 리포트를 확인할 때 절대 날짜를 사용하세요.

**Q: 오프라인 전환을 업로드하려면 GCLID, GBRAID 또는 WBRAID가 필요한가요?**
네—신뢰할 수 있는 매칭을 위해서는 최소 하나의 식별자가 필요합니다. 첫 터치에서 사용 가능한 것을 캡처하여 저장한 다음, Hyperclass에서 전환을 보낼 때 포함시키세요.

**Q: 전환이 기록되고 있는지 어디서 확인하나요?**
Google 광고에서: 도구 및 설정(Tools & Settings) > 전환(Conversions) 및 전환 열을 사용하는 캠페인 리포트에서 확인하세요. Hyperclass에서는 HL측 전송이 구성되면 광고 관리자 리포팅을 사용하세요(관련 문서 참조).

**Q: 전환을 보내려면 Hyperclass 광고 관리자를 사용해야 하나요, 워크플로우를 사용해야 하나요?**
중앙화된 광고 작업 공간과 내장 매핑을 선호한다면 광고 관리자를 사용하세요. 세밀한 자동화나 커스텀 로직이 필요하다면 워크플로우를 사용하세요. 둘 다 같은 Google 전환 액션으로 보낼 수 있습니다.

**Q: 업로드가 매치되지 않거나 결과가 표시되지 않는 이유는 무엇인가요?**
일반적인 문제로는 식별자 누락, 잘못된 시간대, 통화/값 불일치, 또는 잘못된 전환 액션으로 보내는 것 등이 있습니다. 전환 ID/이름, 식별자 존재, 이벤트 타임스탬프를 확인하세요.

## 관련 문서

- [광고 관리자 - Google 광고 오프라인 전환 생성 및 관리](ad-manager-create-manage-google-ads-offline-conversions.md)
- [워크플로우 액션 – Google 애드워즈에 추가](workflow-action-add-to-google-ads.md)
- 광고 관리자 설정 개요
- [광고 관리자 개요](overview-of-ad-manager.md)
- [Google 광고 리포팅 설정 방법](how-to-set-up-google-ad-reporting.md)
- [어트리뷰션 소스 이해하기](understanding-attribution-source.md)

---
*원문 최종 수정: Tue, 24 Mar, 2026 at 5:12 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*