---

번역일: 2026-04-08
카테고리: 리포팅 > 추적-어트리뷰션
---

# Google 광고 오프라인 전환 액션 설정 방법 (Google 플랫폼 측 설정)

이 가이드는 Google 광고 인터페이스에서 직접 Google 광고 오프라인 전환 액션을 설정하는 방법을 설명합니다. 이것은 **독립적인 플랫폼 측 설정**이며 Hyperclass 설정 단계는 포함되지 않습니다. 이 설정을 완료한 후, **다음 단계** 섹션의 링크를 사용하여 광고 관리자(Ad Manager)나 워크플로우(Workflows)를 통해 Hyperclass에서 전환을 연결하세요.

**목차**

- [Google 광고 전환 액션이란?](#google-광고-전환-액션이란)
- [Google 광고 전환 액션의 주요 이점](#google-광고-전환-액션의-주요-이점)
- [Google 측 사전 요구사항](#google-측-사전-요구사항)
- [Google 광고 오프라인 전환 액션 설정 방법 (Google 플랫폼 측)](#google-광고-오프라인-전환-액션-설정-방법-google-플랫폼-측)
- [자주 묻는 질문](#자주-묻는-질문)

## Google 광고 전환 액션이란?

Google 광고 전환 액션은 리드, 통화, 폼 제출, 오프라인 판매 등 추적하고 최적화하려는 이벤트를 정의합니다. 명확하고 범위가 잘 정의된 전환 액션을 만들면 Google 광고가 성과를 올바르게 어트리뷰션할 수 있고 캠페인이 의미 있는 결과를 향해 입찰할 수 있도록 도와줍니다.

전환 액션은 원하는 행동이 발생했을 때 기록하는 Google 광고의 규칙입니다. 오프라인 전환(예: CRM에서 성사로 표시된 딜)의 경우, Google 광고는 **GCLID/GBRAID/WBRAID** 같은 식별자를 매칭하여 결과를 광고와 키워드로 다시 어트리뷰션합니다.

## Google 광고 전환 액션의 주요 이점

이점은 데이터 품질, 최적화, 리포팅에 초점을 맞춥니다. 올바른 전환 액션을 설정하면 입찰 신호가 개선되고, 측정이 명확해지며, 노이즈가 많거나 중복된 데이터를 방지할 수 있습니다.

- **정확한 최적화**: 스마트 입찰(Smart Bidding)을 위해 깔끔한 신호를 Google 광고에 제공합니다.
- **명확한 리포팅**: 1차 결과(예: 자격을 갖춘 리드)를 2차 이벤트와 분리합니다.
- **카운팅 제어**: 광고 상호작용당 **모든** 전환을 카운트할지 **하나만** 카운트할지 결정할 수 있습니다.
- **유연한 어트리뷰션**: 퍼널과 데이터 볼륨에 맞는 모델을 선택할 수 있습니다.
- **오프라인 호환성**: GCLID/GBRAID/WBRAID 같은 ID를 사용하여 서버 사이드/CRM 이벤트 업로드를 지원합니다.

## Google 측 사전 요구사항

Google 광고 계정을 미리 준비하면 나중에 재작업을 방지할 수 있습니다. 액션을 만들기 전에 접근 권한, 계정 구조, 목표 분류를 확인하세요.

- 올바른 **Google 광고** 계정에 대한 관리자 또는 표준 접근 권한
- 목표 분류에 대한 합의 (예: **리드** vs **리드 폼 제출** vs **자격을 갖춘 리드**)
- 이 액션을 입찰에 사용되는 **기본** 액션으로 표시할지 결정
- 나중에 Hyperclass에서 오프라인 전환을 게시할 때 전송할 식별자(예: **GCLID/GBRAID/WBRAID**)에 대한 명확성

## Google 광고 오프라인 전환 액션 설정 방법 (Google 플랫폼 측)

**Google 광고**에서 다음 단계를 따라 나중에 Hyperclass에서 데이터를 전송할 전환 액션을 만드세요. 올바른 설정은 깔끔한 어트리뷰션과 신뢰할 수 있는 입찰 신호를 보장합니다.

참고: 이것은 Google 플랫폼 측 가이드만입니다. Hyperclass 광고 관리자에서 오프라인 전환을 설정하려면 [Hyperclass Ad Manager - Google 광고 오프라인 전환 생성 및 관리](../../10-마케팅/Google-Ads/ad-manager-create-manage-google-ads-offline-conversions.md) 문서를 확인하세요.

Hyperclass 워크플로우에서 폼 제출, 번호 풀 통화, 채팅 위젯 응답 등의 Google 광고 전환 액션을 직접 설정하고 추적하려면 [워크플로우 액션 - Google 광고에 추가](https://help.gohilevel.com/en/support/solutions/articles/155000003368) 문서를 확인하세요.

- Google Adwords 계정에 접속하거나 [ads.google.com](https://ads.google.com/intl/en_in/start/lc/?subid=in-en-ha-awa-bk-c-c00!o3~CjwKCAjwyYPOBhBxEiwAgpT8PxzugBXx8nv7PGe8R-bVM6pT1TSQUkUBsSH7fq-9uWlPPKDs9bWKqxoCiVUQAvD_BwE~140706620052~kwd-94527731~16862088904~592470418766&gclsrc=aw.ds&gad_source=1&gad_campaignid=16862088904&gclid=CjwKCAjwyYPOBhBxEiwAgpT8PxzugBXx8nv7PGe8R-bVM6pT1TSQUkUBsSH7fq-9uWlPPKDs9bWKqxoCiVUQAvD_BwE)을 여세요.

- **"로그인"**을 클릭하여 Google 광고 계정에 로그인하거나 "지금 시작"을 클릭하여 새 Google 광고 계정 생성을 시작하세요.

![Google 광고 로그인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064512308/original/C8Aw37elwsskF22cfBXP7IxnyZg-vd6WuA.png?1770651246)

- "+" 버튼을 클릭하고 드롭다운에서 전환 액션(Conversion Action)으로 이동하세요.

![전환 액션 네비게이션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067502302/original/9qUf3GbbUGIRqj0l1iAlLO-HcyOURbtFdQ.gif?1774272837)

- 현재 Google 광고 UI 프롬프트에 따라 전환을 측정할 데이터 소스를 선택하세요.

![데이터 소스 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067579637/original/1wvU2iIuwl1vgDCU4q672wPZXEmaxnNILg.png?1774345111)

- 전환 추적을 시작하려면 오프라인 전환(Conversions offline) 옵션을 선택해야 합니다.

**참고:** Hyperclass는 오프라인 전환만 지원합니다. 웹사이트, 앱, 전화 통화 및 기타 전환 소스는 지원되지 않습니다.

![오프라인 전환 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067579648/original/-PwtOolBiOv6IZ2uBtJZzD_-GhUtvdE7Pw.png?1774345121)

- 데이터 소스 편집(Edit Data Sources)을 클릭하여 오프라인 데이터 소스를 추가하고 '이 단계를 건너뛰고 나중에 데이터 소스 설정하기'를 선택하세요.

![데이터 소스 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067579723/original/VsiSQvjZtX8P0cXhZbudRHW9m_XWoawx1w.png?1774345176)

![데이터 소스 설정 건너뛰기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067579852/original/j74nCVGHCYk6FtNsTFSCiGXRAtF9qKwHPA.png?1774345222)

- "저장 후 계속"을 클릭하세요.

![저장 후 계속](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067579906/original/Lc38gm87HysxZ7IKAiwmYlGfJ6gMn7wYMA.png?1774345249)

전환 카테고리를 선택하세요. 이 단계는 "무엇을 측정하고 싶은가?"를 정의하는 것입니다. "모두 보기"를 클릭하여 전체 전환 카테고리 목록에 접근하세요.

![전환 카테고리 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067506158/original/8tXXliQSYFav771REY1QnV9yBwa06VkBHw.png?1774274441)

- 전환 카테고리 선택 후, 카테고리에 데이터 소스를 추가해야 합니다.

![데이터 소스 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067580048/original/U4gxlhKu0mq9IJ2RGZx4--KiYeZ5-CrH8Q.png?1774345321)

- **편집** 설정을 클릭하여 세부 사항을 정의하세요.

![설정 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067580713/original/-Kp98QJlnSnH0Od2wiV0YYMqhjt-C42fKg.png?1774345593)

- 이 섹션은 이전 단계에서 선택한 '전환 목표'를 보여주는 액션 최적화를 표시합니다. 라디오 버튼을 '입찰 최적화에 사용되는 기본 액션'으로 선택된 상태로 두세요.

![액션 최적화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067580773/original/f53u6AuJzI4SU2_7b9jsWXCmby7r6dAnwQ.png?1774345640)

- 이 전환에 이름을 지어주세요. 전환 이름을 입력하세요. 이 예시에서는 "Conversion Test"라고 하겠습니다.

참고: 이 단계를 완료한 후, 전환 이름을 복사하여 가까운 곳에 붙여넣어 두세요.

![전환 이름 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067580849/original/TCZ-Nua_u5JdjdMQXgA7sxrjV91S4dGzwg.png?1774345674)

- 전환의 값을 선택하세요. 동일함, 다름, 또는 값 사용하지 않음 중에서 선택하세요... [추가 정보](https://support.google.com/google-ads/answer/3419241?hl=en)

![전환 값 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067512334/original/OVD2rhwjEiMpi-bLkZL6FRJy95oudTnFWQ.png?1774276716)

- 카운트를 선택하세요. 항상 "**모든**" 옵션을 선택하는 것을 권장합니다.

![카운트 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067512364/original/Ok2YxrgbOjCqKyH3GwIb2PP9oG6xJggbiA.png?1774276744)

- 전환 윈도우와 어트리뷰션 모델을 설정하세요.

1. 클릭 후 전환 윈도우를 "90일"로 설정하세요
2. 드롭다운에서 참여 뷰 전환 윈도우를 선택하세요
3. 다음으로, 어트리뷰션 모델을 "마지막 클릭" 또는 "데이터 기반"(권장)으로 설정하세요

![전환 윈도우 및 어트리뷰션 모델](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067512556/original/zAV1TcL39odzlku9ZwfwwGtSwrwxZ6qFHg.png?1774276791)

- "완료"를 클릭하면 전환 설정이 정의되고 저장됩니다.

![완료 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067512857/original/IuaqENbu2fX7uCCFX1IZ4KdRsdD8wKrMzw.png?1774276957)

- 변경사항을 진행하려면 "저장 후 계속"을 클릭하세요. 새 전환을 생성하려면 "전환 생성"을 선택하세요. 더 많은 전환 카테고리를 추가하려면 "다른 카테고리 추가"를 클릭하세요.

![저장 후 계속](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067580436/original/H8j4q657JuhY9VGvEq6vj7gb4_PE-MOR0A.png?1774345508)

- 전환 생성 프로세스를 완료하려면 **완료**를 클릭하세요.

![전환 생성 완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067580981/original/sHqe_AHeotyPhYjnrCfR12jhkrnN57S8Zg.png?1774345723)

## 자주 묻는 질문

**Q: 카운트를 "모든" 또는 "하나"로 설정해야 하나요?**
리드 생성의 경우 연락처가 같은 이벤트를 반복할 때 전환이 부풀려지는 것을 방지하기 위해 **하나**를 사용하세요. 구매와 같은 수익 이벤트의 경우 **모든**을 사용하세요.

**Q: Google 광고에서 전환을 보려면 얼마나 걸리나요?**
볼륨과 방법에 따라 몇 시간에서 24-48시간까지 처리 시간이 걸릴 수 있습니다. 리포팅 지연은 정상적이므로 리포트를 확인할 때 절대 날짜를 사용하세요.

**Q: 오프라인 전환을 업로드하려면 GCLID, GBRAID 또는 WBRAID가 필요한가요?**
예—신뢰할 수 있는 매칭을 위해 최소 하나의 식별자가 필요합니다. 첫 터치에서 사용 가능한 것을 캡처하고 저장한 다음 Hyperclass에서 전환을 전송할 때 포함시키세요.

**Q: 전환이 기록되고 있는지 어디서 확인할 수 있나요?**
Google 광고에서: 도구 및 설정(Tools & Settings) > 전환(Conversions)과 전환 열(Conversion columns)을 사용한 캠페인 리포트에서 확인할 수 있습니다. Hyperclass에서는 HL 측 전송이 설정되면 광고 관리자 리포팅을 사용하여 가시성을 확보하세요(관련 문서 참조).

**Q: 전환을 전송하려면 Hyperclass 광고 관리자와 워크플로우 중 무엇을 사용해야 하나요?**
중앙 집중식 광고 작업공간과 내장 매핑을 선호한다면 광고 관리자를 사용하세요. 세밀한 자동화나 맞춤 로직이 필요하다면 워크플로우를 사용하세요. 두 방법 모두 같은 Google 전환 액션으로 전송할 수 있습니다.

**Q: 업로드가 매치되지 않거나 결과가 표시되지 않는 이유는 무엇인가요?**
일반적인 문제로는 식별자 누락, 잘못된 시간대, 통화/값 불일치, 잘못된 전환 액션으로 전송하는 경우가 있습니다. 전환 ID/이름, 식별자 존재, 이벤트 타임스탬프를 확인하세요.

---
*원문 최종 수정: Tue, 24 Mar, 2026 at 5:12 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*