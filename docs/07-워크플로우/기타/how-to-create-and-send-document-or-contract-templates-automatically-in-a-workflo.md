---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# 워크플로우에서 문서 및 계약서 템플릿을 자동으로 생성하고 발송하는 방법

이 가이드는 제안서, 견적서, 서비스 계약서 같은 전문 문서나 계약서 템플릿을 만들고, Hyperclass의 워크플로우를 통해 자동으로 발송하는 방법을 설명합니다. 템플릿 구축, 커스텀 데이터 삽입, 문서 자동 발송 트리거 설정, CRM에서 완료 상태 추적 방법까지 배울 수 있습니다.

---

### 커뮤니티 튜토리얼 더보기

[https://www.youtube.com/watch?v=eqKz8ZFzCyY](https://www.youtube.com/watch?v=eqKz8ZFzCyY)

[https://www.youtube.com/watch?v=zcHG8DHllQI](https://www.youtube.com/watch?v=zcHG8DHllQI)

---

목차

- [문서 및 계약서 기능이란?](#문서-및-계약서-기능이란)
- [워크플로우로 문서 및 계약서 발송 시 주요 장점](#워크플로우로-문서-및-계약서-발송-시-주요-장점)
- [문서 또는 계약서 템플릿 만드는 방법](#문서-또는-계약서-템플릿-만드는-방법)
- [워크플로우를 통한 문서 자동 발송 방법](#워크플로우를-통한-문서-자동-발송-방법)
- [연락처가 받는 내용](#연락처가-받는-내용)
- [문서 상태 추적 방법](#문서-상태-추적-방법)
- [자주 묻는 질문](#자주-묻는-질문)

# 문서 및 계약서 기능이란?

문서 및 계약서(Documents & Contracts) 기능을 사용하면 제안서, 견적서, 서비스 계약서 같은 브랜드화된 법적 구속력 있는 템플릿을 만들고, 태그 추가나 파이프라인 단계 변경 같은 특정 트리거에 따라 워크플로우를 통해 자동으로 발송할 수 있습니다. 이 자동화는 프로세스의 적절한 시점에 문서가 전달되도록 보장하고, 수동 후속 작업을 없애며, 영업이나 온보딩 워크플로우를 간소화합니다.

## 워크플로우로 문서 및 계약서 발송 시 주요 장점

문서 자동화는 세련되고 규정을 준수하는 상호작용을 유지하면서 서비스나 영업 파이프라인을 간소화합니다.

- 특정 트리거가 발생할 때 계약서를 자동으로 발송
- 동적 콘텐츠(커스텀 값)가 포함된 재사용 가능한 템플릿 사용
- 몇 초 만에 법적 구속력 있는 전자 서명 수집
- 문서 내에 가격/상품 목록 직접 포함
- 문서 전달, 서명 상태, 완료 추적
- 문서 서명 완료 후 후속 작업을 위한 워크플로우 설정

## 문서 또는 계약서 템플릿 만드는 방법

템플릿은 재사용 가능하며 로고, 커스텀 값, 가격표 등을 포함할 수 있습니다.

#### 1단계: 새 문서 템플릿 열기

- Payments(결제) > Documents & Contracts(문서 및 계약서) > Templates(템플릿)으로 이동합니다.
- + New(신규) → Create New Template(새 템플릿 만들기)을 클릭합니다.
- 템플릿 이름을 지정합니다 (예: "제안서").

![새 템플릿 만들기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046411293/original/OmhgD7ily1z56D3MRVWiuOTi-yrf-Rx2kQ.gif?1746821717)

#### 2단계: 문서 템플릿 디자인하기

- Add Element(요소 추가)를 사용하여 문서를 구성합니다:
  - Image(이미지): 로고나 브랜딩 요소를 업로드합니다.
  - Text(텍스트): 계약 조건, 서비스 설명 등을 추가합니다.
  - Custom Values(커스텀 값): 연락처 이름이나 이메일 같은 동적 필드를 삽입합니다.
  - Product List(상품 목록): 카탈로그에서 가져온 가격이 포함된 서비스나 항목을 포함합니다.
  - Signature Box(서명란): 고객이 서명할 공간을 추가합니다.
- Save(저장)를 클릭하여 향후 사용을 위해 템플릿을 저장합니다.

![문서 템플릿 디자인](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046411268/original/Onr7QIioElyXphNe-tZ2OJmFyiKfoag5lA.png?1746821564)

**참고:** Templates(템플릿) 탭에서 저장된 템플릿을 언제든지 편집할 수 있습니다. 그러나 변경 사항은 이미 발송되었거나 초안으로 저장된 문서에는 소급 적용되지 않습니다.

## 워크플로우를 통한 문서 자동 발송 방법

태그 추가나 파이프라인 단계 변경 같은 특정 이벤트가 발생할 때 문서 템플릿을 자동으로 발송할 수 있습니다. "Send Documents & Contracts(문서 및 계약서 발송)" 액션을 사용하려면 템플릿이 저장되어 있고, 연락처에 유효한 이메일 주소가 있어야 합니다.

#### 1단계: 새 워크플로우 만들기

- Automation(자동화) > Workflows(워크플로우)로 이동합니다.
- + Create Workflow(워크플로우 만들기)를 클릭하고 Start from Scratch(빈 템플릿으로 시작)를 선택합니다.

![새 워크플로우 만들기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046411342/original/kJPn9QLXNOuPN69wFaCDCMItDFgTlYWFBQ.png?1746821887)

#### 2단계: 워크플로우 디자인하기

- 트리거를 선택합니다 (Tag Added(태그 추가) 또는 Opportunity Updated(기회 업데이트) 등)
- Send Documents & Contracts(문서 및 계약서 발송) 액션을 추가합니다:
  - 액션 이름을 지정합니다
  - 문서를 발송할 "From user(발송자)" 사용자를 선택합니다
  - 저장된 템플릿을 선택합니다 (예: "이벤트 제안서")
  - Send Directly(직접 발송) 또는 Create as Draft(초안으로 생성) 중 선택합니다
  - 발송 채널을 선택합니다 - Email(이메일), SMS(문자), 또는 둘 다

**참고:** SMS를 선택하더라도 시스템은 여전히 연락처에 이메일이 등록되어 있어야 합니다. 연락처에 이메일이 없으면 계약서는 생성되지만 이메일을 추가할 때까지 초안 상태로 남아있습니다.

- Save(저장)를 클릭한 다음 워크플로우를 Publish(발행)합니다.

![워크플로우 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155059226086/original/nZVKLjKIztDyqcm83H-rik1RC0LnYI47Qg.png?1764134652)

**프로 팁:** 나중에 문서를 검토하고 수동으로 발송하려면 "Create as Draft(초안으로 생성)"을 사용하세요.

**템플릿에서 서명자를 "Sender(발송자)"로 설정하기**

서명자를 **Sender(발송자)**로 지정하면 워크플로우가 실행 시 올바른 내부 사용자를 자동으로 할당할 수 있어, 발송자마다 템플릿을 편집할 필요가 없습니다.

단계 (템플릿 편집기)

1. Payments(결제) → Documents & Contracts(문서 및 계약서) → Templates(템플릿)으로 이동하여 **New(신규)**를 클릭합니다 (또는 기존 템플릿을 편집).

![템플릿 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064086014/original/XIeK1LtAUU2zSjsRx844pZ8cvRO5T68PzQ.png?1770123485)

2. 문서에 Signature(서명) (또는 다른 입력 가능한) 필드를 추가합니다.

3. 필드 **Properties(속성)**에서 To be signed by(서명자) → Sender(발송자)로 설정합니다. "Sender(발송자)"는 문서를 발송하는 사용자이며, 워크플로우가 동적으로 매핑할 수 있습니다.

![서명자 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064086169/original/5aLhe_dzO3m3yQQcW2sw0NaY4wfugO2EmA.png?1770123547)

**특정 직원에게 입력 가능한 필드 할당하기 (템플릿 수준)**

입력 가능한 필드를 선택할 때 하위 계정의 특정 직원에게 할당할 수 있습니다.

1. 템플릿 편집기에서 입력 가능한 필드(예: Signature(서명))를 클릭합니다.
2. 우측 Properties(속성) 패널에서 **To be signed by(서명자)**를 엽니다.
3. 직원 목록에서 필요한 직원을 선택합니다.
4. 템플릿을 저장합니다.

템플릿을 사용하여 문서를 생성할 때 선택된 직원이 해당 필드에 미리 할당됩니다.

![직원 할당](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155066571205/original/LagXiPECtFk9IgBjJItG2vUQJSmu-Kuf5A.png?1773135948)

---

## 발송자 필드 매핑하기 (Assign Sender Fields To)

템플릿에 Sender(발송자) 필드가 포함되어 있으면 워크플로우가 발송 시 올바른 내부 서명자에게 자동으로 할당할 수 있어 수동 편집이 필요하지 않습니다.

단계 (워크플로우)

1. 워크플로우에 **Send Documents & Contracts(문서 및 계약서 발송)** 액션을 추가합니다.

2. **From user(발송자)** 를 선택합니다 (문서와 알림을 누가 발송할지 제어).

![발송자 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064087045/original/AmhoiweiSapZ4OVpNTrVYtFDpEQgGUcIlQ.png?1770124033)

3. To be signed by(서명자) → Sender(발송자)로 설정된 필드가 포함된 **Template(템플릿)**를 선택합니다.

![템플릿 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064087156/original/2xK03jvKzwKqtOPbwKMIOnrgHFwI4298EQ.png?1770124075)

4. Assign Sender Fields To(발송자 필드 할당 대상) 아래에서 선택합니다:

**From User(발송자)** — 워크플로우의 발송자가 서명, 또는  
**Template Owner(템플릿 소유자)** — 템플릿을 마지막으로 업데이트한 사용자가 서명.

![발송자 필드 할당](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155064087238/original/xcrjzJlR8nC3tftcYmmjMnhZgjv6Gro6Ug.png?1770124133)

5. Sending Mode(발송 모드)와 Channel(채널) (Email(이메일) 또는 **Direct(직접))를 선택한 다음 Save(저장)하고 발행합니다.

**동작:** 선택한 템플릿에 Sender(발송자) 필드가 있으면 발송 전에 할당됩니다.

## 연락처가 받는 내용

트리거되면 연락처는 문서의 보안 링크가 포함된 이메일을 받습니다.

- 이메일에는 연락처의 이름과 제안서 또는 계약서 세부 정보가 포함됩니다.
- 링크를 클릭하면 브라우저에서 직접 서명을 완료할 수 있습니다 — 로그인이나 다운로드가 필요하지 않습니다.

## 문서 상태 추적 방법

문서가 초안, 발송, 열람, 완료 상태인지를 Documents & Contracts(문서 및 계약서) 대시보드에서 모두 모니터링할 수 있습니다.

- Payments(결제) > Documents & Contracts(문서 및 계약서) > All Documents and Contracts(모든 문서 및 계약서)로 이동합니다.
- 상단의 탭을 사용하여 다음으로 필터링합니다:
  - Drafts(초안)
  - Waiting for Others(대기 중)
  - Completed(완료)
  - Payments(결제)

![문서 상태 추적](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046411421/original/bflqdq6OBmogTkDscLL7swmCIzr_iam2vA.png?1746822135)

## 자주 묻는 질문

**Q: 발송 후 문서를 편집할 수 있나요?**
"Create as Draft(초안으로 생성)"을 선택한 경우에만 가능합니다. 직접 발송한 경우 문서가 잠기므로 편집할 수 없습니다.

**Q: 연락처가 서명하지 않으면 어떻게 되나요?**
문서는 "Waiting for Others(대기 중)" 상태로 남아있습니다. 재발송하거나 연락처에게 수동으로 후속 조치를 취할 수 있습니다.

**Q: 한 명 이상에게 문서를 발송할 수 있나요?**
예, Multiple Recipient Support(다중 수신자 지원)를 사용하여 하나의 문서에서 여러 사람에게 서명 요소를 할당할 수 있습니다.

**Q: 서명할 때 결제를 수집할 수 있나요?**
예. 템플릿에 가격이 포함된 상품 목록이 있으면 Stripe이나 다른 결제 연동을 사용하여 결제 수집을 활성화할 수 있습니다.

**Q: 서명된 문서는 법적 구속력이 있나요?**
예, Hyperclass의 전자 서명 프로세스는 법적 유효성과 감사 가능성을 위한 주요 디지털 서명 규정을 준수합니다.

**Q: 수신자가 모바일에서 문서에 서명할 수 있나요?**
예 — 문서는 모바일 친화적이며 휴대폰 브라우저에서 직접 서명할 수 있습니다.

**Q: 발송 전에 문서를 미리 볼 수 있나요?**
예. 설정 중에 Create as Draft(초안으로 생성) 모드를 선택하여 최종 검토 후 수동으로 발송할 수 있습니다.

**Q: SMS로 계약서를 발송하려고 하는데 연락처에 이메일이 없으면 어떻게 되나요?**
계약서는 생성되지만 초안 상태로 남아있습니다. 계약서를 성공적으로 발송하려면 연락처에 이메일을 추가해야 합니다.

**Q: SMS 발송에도 이메일 주소가 필요한 이유는 무엇인가요?**
현재 추적, 버전 기록, 계약서 생명주기 관리를 위해 연락처의 이메일을 필수 식별자로 사용합니다. 계약서가 SMS로 전달되더라도 시스템 무결성을 유지하기 위해 연락처 프로필에 이메일이 있어야 합니다.

---
*원문 최종 수정: Tue, 10 Mar, 2026 at 4:46 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*