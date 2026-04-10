---

번역일: 2026-04-06
카테고리: 14-문서-계약
---

# 워크플로우에서 문서 및 계약서 템플릿을 자동으로 생성하고 발송하는 방법

이 가이드에서는 제안서, 견적서, 서비스 계약서 등 전문적인 문서나 계약서 템플릿을 만들고, Hyperclass의 워크플로우를 사용해 자동으로 발송하는 방법을 알아보겠습니다. 템플릿 구축부터 커스텀 데이터 삽입, 문서 발송 트리거 설정, CRM에서 완료 상태 추적까지 모든 과정을 다룹니다.

---

### 커뮤니티 튜토리얼 영상

[https://www.youtube.com/watch?v=eqKz8ZFzCyY](https://www.youtube.com/watch?v=eqKz8ZFzCyY)

[https://www.youtube.com/watch?v=zcHG8DHllQI](https://www.youtube.com/watch?v=zcHG8DHllQI)

---

목차

- [문서 및 계약서 기능이란?](#문서-및-계약서-기능이란)
- [워크플로우로 문서 및 계약서 발송의 주요 장점](#워크플로우로-문서-및-계약서-발송의-주요-장점)
- [문서 또는 계약서 템플릿 만드는 방법](#문서-또는-계약서-템플릿-만드는-방법)
- [워크플로우를 통해 문서 자동 발송하는 방법](#워크플로우를-통해-문서-자동-발송하는-방법)
- [연락처가 받는 내용](#연락처가-받는-내용)
- [문서 상태 추적 방법](#문서-상태-추적-방법)
- [자주 묻는 질문](#자주-묻는-질문)
- [관련 가이드](#관련-가이드)

# 문서 및 계약서 기능이란?

문서 및 계약서(Documents & Contracts) 기능을 사용하면 제안서, 견적서, 서비스 계약서 등 브랜딩이 적용된 법적 구속력 있는 템플릿을 만들고, 태그 추가나 파이프라인 단계 변경 등 특정 트리거를 기반으로 워크플로우를 통해 자동으로 발송할 수 있습니다. 이 자동화로 적절한 시점에 문서가 전달되고, 수동 후속 작업이 필요 없으며, 영업이나 온보딩 워크플로우를 간소화할 수 있습니다.

## 워크플로우로 문서 및 계약서 발송의 주요 장점

문서 자동화는 서비스나 영업 파이프라인을 간소화하면서 상호작용을 세련되고 규정에 맞게 유지해줍니다.

- 특정 트리거 발생 시 계약서 자동 발송
- 동적 콘텐츠(커스텀 값)가 포함된 재사용 가능한 템플릿 활용
- 몇 초 만에 법적 구속력 있는 전자서명 수집
- 문서 내에 가격/상품 목록 직접 포함
- 문서 전달, 서명 상태, 완료 추적
- 문서 서명 완료 후 후속 액션을 위한 워크플로우 설정

## **문서 또는 계약서 템플릿 만드는 방법**

템플릿은 재사용 가능하며 로고, 커스텀 값, 가격표 등을 포함할 수 있습니다.

#### 1단계: 새 문서 템플릿 열기

- `Payments(결제) → Documents & Contracts(문서 및 계약서) → Templates(템플릿)`으로 이동합니다.
- `+ New(새로 만들기) → Create New Template(새 템플릿 만들기)`을 클릭합니다.
- 템플릿 이름을 입력합니다(예: "제안서").

![새 문서 템플릿 만들기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046411293/original/OmhgD7ily1z56D3MRVWiuOTi-yrf-Rx2kQ.gif?1746821717)

#### 2단계: 문서 템플릿 디자인

- `Add Element(요소 추가)`를 사용해 문서를 구성합니다:
  - **Image(이미지)**: 로고나 브랜딩 요소 업로드
  - **Text(텍스트)**: 계약 조건, 서비스 설명 등 추가
  - **Custom Values(커스텀 값)**: 연락처 이름이나 이메일 같은 동적 필드 삽입
  - **Product List(상품 목록)**: 카탈로그의 가격 정보가 포함된 서비스나 항목 포함
  - **Signature Box(서명란)**: 고객이 서명할 공간 추가
- `Save(저장)`를 클릭해 향후 사용할 템플릿을 저장합니다.

![문서 템플릿 디자인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046411268/original/Onr7QIioElyXphNe-tZ2OJmFyiKfoag5lA.png?1746821564)

참고: Templates(템플릿) 탭에서 저장된 템플릿을 언제든 편집할 수 있습니다. 단, 변경 사항은 이미 발송되거나 초안으로 저장된 문서에는 소급 적용되지 않습니다.

## **워크플로우를 통해 문서 자동 발송하는 방법**

태그 추가나 파이프라인 단계 변경 같은 특정 이벤트가 발생할 때 문서 템플릿을 자동으로 발송할 수 있습니다. "Send Documents & Contracts(문서 및 계약서 발송)" 액션을 사용하려면 템플릿이 저장되어 있고 연락처에 유효한 이메일 주소가 있어야 합니다.

#### 1단계: 새 워크플로우 만들기

- `Automation(자동화) → Workflows(워크플로우)`로 이동합니다.
- `+ Create Workflow(워크플로우 만들기)`를 클릭하고 `Start from Scratch(처음부터 시작)`을 선택합니다.

![새 워크플로우 만들기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046411342/original/kJPn9QLXNOuPN69wFaCDCMItDFgTlYWFBQ.png?1746821887)

#### 2단계: 워크플로우 디자인

- 트리거를 선택합니다(예: Tag Added(태그 추가)나 Opportunity Updated(기회 업데이트))
- `Send Documents & Contracts(문서 및 계약서 발송)` 액션을 추가합니다:
  - 액션 이름을 입력합니다
  - 문서를 "발송할" 사용자를 선택합니다
  - 저장된 템플릿을 선택합니다(예: "이벤트 제안서")
  - `Send Directly(직접 발송)` 또는 `Create as Draft(초안으로 생성)` 중 선택합니다
  - 발송 채널을 선택합니다 - 이메일, SMS 또는 둘 다

**참고:** SMS를 선택해도 시스템은 여전히 연락처에 이메일이 등록되어 있어야 합니다. 연락처에 이메일이 없으면 계약서는 생성되지만 이메일이 추가될 때까지 초안 상태로 남아있습니다.

- `Save(저장)`를 클릭한 후 워크플로우를 `Publish(발행)`합니다.

![워크플로우 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059226086/original/nZVKLjKIztDyqcm83H-rik1RC0LnYI47Qg.png?1764134652)

💡 **팁**: 나중에 검토하고 수동으로 문서를 발송하려면 "Create as Draft(초안으로 생성)"을 사용하세요.

**템플릿에서 서명자를 "Sender(발송자)"로 설정**

서명자를 **Sender(발송자)**로 지정하면 워크플로우가 실행 시 올바른 내부 사용자를 할당할 수 있어, 발송자마다 템플릿을 편집할 필요가 없습니다.

설정 방법(템플릿 편집기):

1. `Payments(결제) → Documents & Contracts(문서 및 계약서) → Templates(템플릿)`으로 이동해 **New(새로 만들기)**를 클릭합니다(또는 기존 템플릿을 편집합니다).

![템플릿 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064086014/original/XIeK1LtAUU2zSjsRx844pZ8cvRO5T68PzQ.png?1770123485)

2. 문서에 Signature(서명) 또는 다른 입력 필드를 추가합니다.

3. 필드 **Properties(속성)**에서 `To be signed by(서명자) → Sender(발송자)`로 설정합니다. "Sender"는 문서를 발송하는 사용자로, 워크플로우가 동적으로 매핑할 수 있습니다.

![서명자 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064086169/original/5aLhe_dzO3m3yQQcW2sw0NaY4wfugO2EmA.png?1770123547)

**입력 필드를 특정 직원에게 할당(템플릿 레벨)**

입력 필드를 선택할 때 하위 계정의 특정 직원에게 할당할 수 있습니다.

1. 템플릿 편집기에서 입력 필드(예: Signature(서명))를 클릭합니다.
2. 우측 Properties(속성) 패널에서 **To be signed by(서명자)**를 엽니다.
3. 직원 목록에서 해당 직원을 선택합니다.
4. 템플릿을 저장합니다.

템플릿을 사용해 문서를 생성할 때 선택된 직원이 해당 필드에 미리 할당됩니다.

![직원 할당](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066571205/original/LagXiPECtFk9IgBjJItG2vUQJSmu-Kuf5A.png?1773135948)

---

## **발송자 필드 매핑 (Assign Sender Fields To)**

템플릿에 Sender(발송자) 필드가 포함된 경우, 워크플로우가 발송 시 올바른 내부 서명자에게 할당할 수 있어 수동 편집이 필요 없습니다.

설정 방법(워크플로우):

1. 워크플로우에 **Send Documents & Contracts(문서 및 계약서 발송)** 액션을 추가합니다.

2. **From user(발송 사용자)**를 선택합니다(문서와 알림을 누가 발송할지 제어).

![발송 사용자 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064087045/original/AmhoiweiSapZ4OVpNTrVYtFDpEQgGUcIlQ.png?1770124033)

3. `To be signed by → Sender(서명자 → 발송자)`로 설정된 필드가 포함된 **Template(템플릿)**을 선택합니다.

![템플릿 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064087156/original/2xK03jvKzwKqtOPbwKMIOnrgHFwI4298EQ.png?1770124075)

4. `Assign Sender Fields To(발송자 필드 할당 대상)` 아래에서 선택합니다:

**From User(발송 사용자)** — 워크플로우의 발송자가 서명, 또는  
**Template Owner(템플릿 소유자)** — 템플릿을 마지막으로 업데이트한 사용자가 서명.

![발송자 필드 할당](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064087238/original/xcrjzJlR8nC3tftcYmmjMnhZgjv6Gro6Ug.png?1770124133)

5. Sending Mode(발송 모드)와 Channel(채널)(Email(이메일) 또는 **Direct(직접))을 선택한 후 저장하고 발행합니다.

**동작 방식:** 선택한 템플릿에 Sender(발송자) 필드가 있으면 발송 전에 할당됩니다.

## **연락처가 받는 내용**

트리거가 실행되면 연락처는 문서에 대한 안전한 링크가 포함된 이메일을 받습니다.

- 이메일에는 이름과 제안서 또는 계약서 세부 정보가 포함됩니다.
- 링크를 클릭하여 브라우저에서 바로 서명을 완료할 수 있으며, 로그인이나 다운로드가 필요 없습니다.

## **문서 상태 추적 방법**

문서가 초안, 발송됨, 확인됨, 완료됨 중 어느 상태인지 Documents & Contracts(문서 및 계약서) 대시보드에서 모니터링할 수 있습니다.

- `Payments(결제) → Documents & Contracts(문서 및 계약서) → All Documents and Contracts(모든 문서 및 계약서)`로 이동합니다.
- 상단 탭을 사용해 다음으로 필터링합니다:
  - Drafts(초안)
  - Waiting for Others(다른 사람 대기 중)
  - Completed(완료됨)
  - Payments(결제)

![문서 상태 추적](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046411421/original/bflqdq6OBmogTkDscLL7swmCIzr_iam2vA.png?1746822135)

## **자주 묻는 질문**

**Q: 문서를 발송한 후 편집할 수 있나요?**
"Create as Draft(초안으로 생성)"을 선택한 경우에만 가능합니다. 직접 발송한 경우 문서가 잠기며 편집할 수 없습니다.

**Q: 연락처가 서명하지 않으면 어떻게 되나요?**
문서는 "Waiting for Others(다른 사람 대기 중)" 상태로 남아있습니다. 다시 발송하거나 연락처에게 수동으로 후속 조치를 취할 수 있습니다.

**Q: 한 명 이상에게 문서를 발송할 수 있나요?**
네, Multiple Recipient Support(다중 수신자 지원)를 사용해 하나의 문서에서 여러 사람에게 서명 요소를 할당할 수 있습니다.

**Q: 서명 시 결제를 받을 수 있나요?**
네. 템플릿에 가격이 포함된 상품 목록이 있으면 Stripe나 다른 결제 연동을 사용해 결제 수집을 활성화할 수 있습니다.

**Q: 서명된 문서는 법적 구속력이 있나요?**
네, Hyperclass의 전자서명 프로세스는 합법성과 감사 가능성을 위한 주요 디지털 서명 규정을 준수합니다.

**Q: 수신자가 모바일에서 문서에 서명할 수 있나요?**
네, 문서는 모바일 친화적이며 휴대폰 브라우저에서 직접 서명할 수 있습니다.

**Q: 문서를 발송하기 전에 미리 볼 수 있나요?**
네. 설정 시 "Create as Draft(초안으로 생성)" 모드를 선택해 최종 검토 후 수동으로 발송할 수 있습니다.

**Q: SMS로 계약서를 발송하려 하는데 연락처에 이메일이 없으면 어떻게 되나요?**
계약서는 생성되지만 초안 상태로 남아있습니다. 계약서를 성공적으로 발송하려면 연락처에 이메일을 추가해야 합니다.

**Q: SMS 발송인데도 이메일 주소가 필요한 이유는 무엇인가요?**
현재 시스템에서 추적, 버전 이력, 계약서 수명 주기 관리를 위해 연락처의 이메일을 필수 식별자로 사용하고 있습니다. 계약서가 SMS로 전달되더라도 시스템 무결성을 유지하기 위해 연락처 프로필에 이메일이 있어야 합니다.

### **관련 가이드**

- [워크플로우 액션 - 문서 및 계약서 발송](workflow-action-send-documents-contracts.md)
- [워크플로우 내 문서 및 계약서 트리거](workflow-trigger-documents-contracts.md)
- [문서 및 계약서 사용 방법](how-to-use-documents-contracts-.md)
- [문서 알림 커스터마이징](documents-contracts-email-templates-and-team-notifications-setup.md)
- [서명 시 결제 자동화](documents-contracts-how-to-automate-sending-invoices-when-documents-are-signed.md)
- [다중 수신자 지원](multiple-recipient-support-on-documents-contracts.md)

---
*원문 최종 수정: Tue, 10 Mar, 2026 at 4:46 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*