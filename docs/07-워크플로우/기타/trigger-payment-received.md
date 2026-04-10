---

번역일: 2026-04-09
카테고리: 99-리커버리
---

# 워크플로우 트리거 - 결제 완료

이 문서에서는 결제 완료 워크플로우 트리거를 사용하여 성공적인 결제 후 후속 작업을 자동화하는 방법을 알아보겠습니다. 일회성 결제, 구독 갱신, 인보이스 결제 등 어떤 종류든 확인 메시지, 업데이트, 팀 알림을 자동화하여 시간을 절약하고 고객 경험을 개선할 수 있습니다.

---

**목차**

- [결제 완료 트리거란?](#결제-완료-트리거란)
- [결제 완료 트리거의 주요 장점](#결제-완료-트리거의-주요-장점)
- [결제 완료 트리거 설정 방법](#결제-완료-트리거-설정-방법)
- [자주 묻는 질문](#자주-묻는-질문)

---

# **결제 완료 트리거란?**

결제 완료 트리거는 하이퍼클래스 계정을 통해 결제가 성공적으로 완료되었을 때 자동화된 워크플로우를 시작할 수 있게 해주는 기능입니다. 퍼널, 인보이스, 캘린더, 멤버십, 폼, 그리고 수동 입력을 통한 결제까지 모두 포함됩니다. 일회성 거래든 반복 구독 결제든, 이 트리거를 통해 즉시 대응할 수 있습니다—손가락 하나 까딱하지 않고요.

이는 수동 후속 조치를 줄이고, 결제를 확인하며, 고객 및 내부 팀과의 일관된 커뮤니케이션을 보장하는 필수적인 자동화 도구입니다.

---

## 결제 완료 트리거의 주요 장점

자동화를 활용하여 수동 결제 후속 조치를 제거하고, 응답 시간을 개선하며, CRM과 팀을 즉시 업데이트할 수 있습니다. 이 트리거는 비즈니스와 고객 모두에게 원활한 결제 후 경험을 제공합니다.

- **즉시 확인 발송**: 결제가 처리되는 순간 자동으로 확인 이메일이나 SMS 메시지를 발송하여 고객에게 안내하고 안심시킵니다.

- **연락처 기록 업데이트**: 태그 적용, 커스텀 필드 업데이트, 또는 내부 노트 트리거를 통해 수동 입력 없이 고객 프로필에 결제 상태를 반영합니다.

- **팀 즉시 알림**: 영업, 지원, 또는 주문 처리팀에게 실시간으로 알림을 보내 성공적인 거래 후 적시에 조치를 취할 수 있도록 합니다.

- **업셀 또는 멤버십 액세스 트리거**: 업셀 제안, 보너스 콘텐츠 전달, 또는 구매 유형에 따른 멤버십 액세스 권한 부여와 같은 시퀀스를 시작합니다.

- **실패한 결제 후속 조치 자동화**: 실패한 거래에 대해 재시도, 알림, 또는 개인화된 커뮤니케이션으로 응답하는 워크플로우를 설정하여 손실된 수익을 회복합니다.

- **구독 및 인보이스 추적 간소화**: 반복 결제나 인보이스 완료를 추적하고 특정 후속 조치나 CRM 업데이트와 손쉽게 연결합니다.

---

## **결제 완료 트리거 설정 방법**

이 트리거를 설정하면 시스템이 결제에 즉시 반응하게 됩니다. 다음은 효율적이고 정확하게 구성하는 단계별 가이드입니다.

### **새 워크플로우 시작**

좌측 메뉴에서 Automation(자동화) > Workflows(워크플로우)로 이동한 다음, 우상단의 **+ Create Workflow(워크플로우 생성)**를 클릭합니다. 드롭다운에서 Start from Scratch(처음부터 시작)를 선택하여 맞춤 워크플로우를 처음부터 구축합니다.

![새 워크플로우 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050116574/original/x0cORXcHZjSdiS0SL9JQA2p3uJPySbhr7w.png?1753000724)

### **트리거 유형 선택**

+ Add New Trigger(새 트리거 추가)를 클릭하여 트리거 옵션을 엽니다. Payments(결제) 섹션으로 스크롤하여 Payment Received(결제 완료)를 선택하여 결제 자동화를 구축합니다.

![트리거 유형 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050116687/original/2PSjzaoe7Yf22PPaoo-SbRwR2fxQY9YeKg.png?1753001737)

### 트리거 이름 지정

트리거에 명확하고 설명적인 이름을 입력합니다(예: "강의 액세스 결제"). 이름 지정은 워크플로우를 체계적으로 유지하고 쉽게 식별할 수 있게 해주며, 특히 여러 결제 트리거를 사용할 때 중요합니다.

![트리거 이름 지정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050116690/original/Ihz0uZ2QTFKDXT_-LyMOfRE_llUzGCkeBg.png?1753001757)

### 필터 추가

+ Add filters(필터 추가)를 클릭하여 어떤 결제 이벤트가 이 워크플로우를 트리거할지 세밀하게 조정합니다. 필터를 통해 특정 거래 유형, 소스, 상품, 또는 상태를 타겟할 수 있습니다.

- **소스 필터(Source Filter):** 결제가 어디서 발생했는지 지정합니다. 사용된 결제 채널에 따라 자동화를 맞춤화하는 데 도움이 됩니다.

- **Calendar(캘린더):** 캘린더 예약 예약을 통해 받은 결제.

- **External(외부):** Stripe, PayPal 또는 외부 API 연동과 같은 제3자 소스를 통한 결제.

- **Form(폼):** 결제 요소가 포함된 폼을 통해 제출된 결제.

- **Funnel(퍼널):** 1단계 또는 2단계 주문 폼과 같은 퍼널 페이지를 통한 결제.

- **Invoice(인보이스):** 하이퍼클래스의 인보이스 기능을 통해 발송된 인보이스로 완료된 결제.

- **Manual Payment(수동 결제):** CRM 내에서 수동으로 기록된 결제.

- **Memberships(멤버십):** 멤버십 상품이나 강의에 대한 액세스로 인해 트리거된 결제.

- **Website(웹사이트):** 전자상거래 상점(상품 또는 구독)을 통한 결제.

![소스 필터 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050116698/original/RPFEGNqmD673018pMhM3KDxyqsJalScwXw.png?1753001776)

### 필터 기준 선택

Global Product(글로벌 상품), Payment Status(결제 상태), 또는 Source(소스)와 같은 사용 가능한 표준 필드에서 선택합니다. 이러한 필터는 정확한 워크플로우 제어를 위해 특정 유형의 거래를 타겟하는 데 도움이 됩니다.

![필터 기준 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050116708/original/_cbjeR-U2qXh0JHoyh_Sq6b3EuN30yinHQ.png?1753001796)

### **상품별 필터링**

필터 유형으로 Global Product(글로벌 상품)을 선택하고 특정 상품 이름을 선택합니다. 이렇게 하면 정확히 해당 상품에 대한 결제를 받았을 때만 워크플로우가 트리거됩니다.

![상품별 필터링](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050116721/original/k3O79ZWXOElOzn3KRmTG2ltFQMRlI06IAg.png?1753001844)

### **결제 상태별 필터링**

Payment Status(결제 상태) 필터를 추가하고 Success(성공)로 설정합니다. 이렇게 하면 결제가 성공적으로 완료되었을 때만 워크플로우가 실행됩니다.

![결제 상태 필터](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050116737/original/nXTuhHc7FuFv_OsJqyE1vEd2OqbdDg6ybQ.png?1753001909)

### **소스별 필터링**

Source(소스) 필터를 추가하고 Calendar(캘린더)로 설정합니다. 이렇게 하면 캘린더 기반 예약을 통한 결제에 대해서만 트리거가 활성화됩니다.

![소스 필터](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050116748/original/teTGp3tGLqp0NBgrPnNFjYtWEhBnuROuQg.png?1753001979)

### **캘린더 지정**

Calendar(캘린더) 필터를 사용하여 정확한 캘린더(예: "Pat's Calendar")를 선택합니다. 이는 워크플로우를 특정 예약 캘린더에 연결하여 또 다른 정밀도 계층을 추가합니다.

![캘린더 지정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050116755/original/N4UdU1ssmlcz17Zwyia1CNItBvxZSq_aVQ.png?1753002008)

### **트리거 저장**

모든 필터를 적용한 후 Save Trigger(트리거 저장)를 클릭하여 구성을 완료합니다. 이렇게 하면 정의된 조건에서만 워크플로우가 활성화되도록 기준이 고정됩니다.

![트리거 저장](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050116763/original/k_IEYOaW9JUfgXxUb0TOhFznxYWHIt_sog.png?1753002034)

---

## **자주 묻는 질문**

**Q: 상품이나 멤버십 플랜별로 필터링할 수 있나요?**
네, Source(소스)와 Sub-Source(하위 소스) 필터를 사용하여 특정 퍼널, 캘린더, 또는 멤버십의 결제를 정확히 찾아낼 수 있습니다.

**Q: 이 트리거가 실패한 결제도 처리할 수 있나요?**
물론입니다! "Payment Status = Failed(결제 상태 = 실패)" 필터를 사용하여 재시도나 독촉 이메일을 위한 후속 조치 워크플로우를 만들 수 있습니다.

**Q: 커스텀 값(예: 결제 금액)을 사용할 수 있나요?**
네, 이메일이나 내부 알림에서 {{Payment Amount}}, {{Transaction ID}} 등과 같은 동적 필드를 사용할 수 있습니다.

**Q: 트리거를 어떻게 테스트하나요?**
샌드박스 결제 환경을 사용하거나 테스트 상품으로 실제 결제를 처리하세요. 테스트하기 전에 워크플로우가 활성화되어 있는지 확인하세요.

**Q: 이것을 다른 트리거와 결합할 수 있나요?**
네! 단일 워크플로우에 여러 트리거를 포함하거나 If/Else 조건 분기를 사용하여 결제 소스나 결과에 따라 로직을 분할할 수 있습니다.

---
*원문 최종 수정: Thu, 24 Jul, 2025 at 10:58 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*