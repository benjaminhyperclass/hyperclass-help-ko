---

번역일: 2026-04-08
카테고리: 19-에이전시-뷰 > Snapshots
---

# Hyperclass에서 새 스냅샷 만들기

이 문서는 Hyperclass에서 새 스냅샷(Snapshot)을 만드는 방법을 안내합니다. 스냅샷을 사용하면 하위 계정의 설정을 복제하여 다른 하위 계정에서 효율적으로 재사용할 수 있습니다.

**목차**

- [스냅샷이란?](#스냅샷이란)
- [스냅샷의 주요 장점](#스냅샷의-주요-장점)
- [스냅샷 만드는 방법](#스냅샷-만드는-방법)
- [자주 묻는 질문](#자주-묻는-질문)

## 스냅샷이란?

Hyperclass의 스냅샷은 하위 계정의 모든 설정을 캡처하는 재사용 가능한 템플릿입니다. 워크플로우, 퍼널, 캘린더, 폼, 캠페인, 커스텀 필드 등을 포함하여 성공적인 설정을 다른 고객 계정에 복제할 수 있습니다.

**참고:** 스냅샷을 직접 "만드는" 것이 아닙니다. 먼저 하위 계정을 구성한 다음, 그 계정으로부터 스냅샷을 생성하는 것입니다.

## 스냅샷의 주요 장점

- **시간 절약:** 반복 사용 가능한 설정을 빠르게 배포할 수 있습니다.
- **일관성 보장:** 고객이나 업종별로 동일한 설정을 유지할 수 있습니다.
- **SaaS 제품 지원:** SaaS 요금제를 위한 미리 구성된 계정 템플릿을 제공할 수 있습니다.
- **선택적 자산 제어:** 모든 자산을 포함하거나 필요한 것만 선택할 수 있습니다.

## 스냅샷 만드는 방법

#### **1단계:** Account Snapshots(계정 스냅샷)으로 이동

- 에이전시 뷰에서 **Account Snapshots(계정 스냅샷)**을 클릭합니다
- 우측 상단의 파란색 **+ Create New Snapshot(새 스냅샷 생성)** 버튼을 클릭합니다

![새 스냅샷 생성 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047025974/original/DW1Rr3rRfBF2NrEltZ0SI9Ns4hW_ARDqlg.png?1747854752)

#### **2단계:** 스냅샷 이름 지정 & 하위 계정 선택

사용 목적을 반영하는 이름을 입력하고(예: "스파 퍼널 설정"), 캡처하려는 자산이 포함된 하위 계정을 선택합니다.

![스냅샷 이름 및 계정 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047025912/original/H_cf0KyL_NHYsA1wmfa4KC2LCTv2niPhog.png?1747854618)

#### **3단계:** 포함할 자산 선택

선택한 하위 계정의 모든 자산 목록이 표시됩니다. **Select All(모두 선택)**을 클릭하여 모든 것을 포함하거나, 각 카테고리를 +로 펼쳐서 개별적으로 선택할 수 있습니다. 준비가 완료되면 Create(생성)를 클릭합니다.

**참고:** 이 단계에서 자산 로드에 실패하는 경우, 이제 "Retry(재시도)" 옵션이 표시됩니다. 이를 클릭하면 스냅샷 생성 과정을 다시 시작하지 않고도 불완전한 카테고리를 다시 가져올 수 있습니다. 자산이 많거나 간헐적인 로드 지연이 있는 경우 특히 유용합니다.

![자산 선택 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067734786/original/hXnUfhnxf05CUg6KwF6M6YZGwth81gWuVg.gif?1774455890)

### Ad Campaigns – LinkedIn (Marketing Assets)

스냅샷에 LinkedIn 캠페인 구조를 포함할 수 있습니다.

Marketing assets(마케팅 자산) → Ad Campaigns – LinkedIn으로 이동합니다.

특정 캠페인을 선택하거나 Select All(모두 선택)을 선택합니다(선택됨/전체 수가 표시됩니다).

Hyperclass는 전체 계층구조를 보존합니다: Campaign Group → Campaign → Ad.

참고: Lead Gen Forms(리드 생성 폼)은 스냅샷에 포함되지 않습니다.

![LinkedIn 캠페인 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155067811354/original/-k1WfJbzO3PpR3Uc5tDMNX9FxCiQSOi9bA.png?1774530177)

## 자주 묻는 질문

**Q: 스냅샷을 어디서 만드나요?**
스냅샷 자체를 만드는 것이 아니라 하위 계정을 구성합니다. 그 다음 스냅샷 도구를 사용하여 해당 하위 계정을 캡처하는 것입니다.

**Q: 스냅샷에 무엇이 포함되나요?**
포함되는 항목: 워크플로우, 퍼널, 캘린더, 폼, 이메일, 트리거, 커스텀 필드, 커스텀 값, 멤버십 콘텐츠, 서비스, 웨비나 등.

포함되지 않는 항목: 연락처, 예약, 대화, 평판 관리 데이터, Stripe 연동, 기타 연동 설정.

**Q: 스냅샷을 여러 번 사용할 수 있나요?**
네! 필요한 만큼 여러 하위 계정에 스냅샷을 적용할 수 있습니다.

**Q: 나중에 스냅샷을 업데이트할 수 있나요?**
네. Refresh(새로고침) 옵션을 사용하여 기존 스냅샷에서 새 자산을 추가하거나 제거할 수 있습니다.

---
*원문 최종 수정: Thu, 26 Mar, 2026 at 8:04 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*