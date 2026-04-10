---

번역일: 2026-04-07
카테고리: 07-워크플로우 > Facebook/Instagram Events Workflow Triggers
---

# 워크플로우 트리거 - Facebook 리드 폼 제출

Facebook 리드 폼 제출 워크플로우 트리거(Facebook Lead Form Submitted)로 후속 조치와 리드 관리를 쉽게 자동화하세요. 이 가이드에서는 설정부터 모범 사례까지 모든 것을 안내해드립니다. Facebook 리드 생성 캠페인을 CRM 워크플로우와 원활하게 연결할 수 있습니다. 캠페인을 런칭하거나 여러 페이지에서 리드를 수집할 때, 이 자동화 기능으로 어떤 리드도 놓치지 않을 수 있습니다.

---

**목차**

- [Facebook 리드 폼 제출 워크플로우 트리거란?](#facebook-리드-폼-제출-워크플로우-트리거란)
- [Facebook 리드 폼 제출 워크플로우 트리거의 주요 장점](#facebook-리드-폼-제출-워크플로우-트리거의-주요-장점)
- [Facebook 리드 폼 제출 워크플로우 트리거 설정하기](#facebook-리드-폼-제출-워크플로우-트리거-설정하기)
- [자주 묻는 질문](#자주-묻는-질문)
---

# **Facebook 리드 폼 제출 워크플로우 트리거란?**

Facebook 리드 폼 제출 트리거(Facebook Lead Form Submitted)는 연결된 Facebook 페이지의 리드 광고를 통해 리드가 폼을 제출했을 때 워크플로우를 시작하는 기능입니다. '즉석 폼'이라고도 불리는 이 폼들은 Facebook 내에서 바로 작동하며 별도의 랜딩 페이지가 필요하지 않습니다. 사용자가 폼을 작성하면 데이터가 자동으로 Hyperclass로 전송되고, 후속 조치, 태그 추가, 기회 관리 등을 위한 자동화를 구축할 수 있습니다.

Facebook에서 리드 생성 광고를 운영하는 마케터에게 필수적인 도구입니다. 리드 데이터를 수동으로 가져올 필요 없이, 이 트리거가 실제 리드 제출을 기반으로 실시간으로 워크플로우를 실행해줍니다.

---

## **Facebook 리드 폼 제출 워크플로우 트리거의 주요 장점**

- **Facebook 캠페인을 CRM 자동화와 직접 연결:** 랜딩 페이지나 수동 내보내기 없이 리드를 자동으로 워크플로우에 연결합니다.

- **실시간 자동화로 시간 절약:** 사용자가 폼을 제출하면 즉시 CRM에 추가되어 지연이 없습니다.

- **필터로 정확한 타겟팅:** 내장 필터를 사용하여 특정 페이지와 폼에만 액션을 트리거할 수 있습니다.

- **팀 효율성 향상:** 연락처 배정, 사용자 알림, 파이프라인 정리를 자동으로 처리합니다.

- **개인화된 경험 생성:** 리드의 소스 폼을 기반으로 맞춤형 이메일, 태그, 파이프라인 단계로 후속 조치를 취할 수 있습니다.

---

## **Facebook 리드 폼 제출 워크플로우 트리거 설정하기**

이 트리거를 설정하려면 먼저 Facebook 계정과 리드 폼이 Hyperclass와 연동되고 매핑되어 있어야 합니다. 아래 단계에 따라 워크플로우에서 트리거를 구성하세요:

### **워크플로우에 트리거 추가하기**

Automation(자동화) > Workflows(워크플로우)로 이동하여 새 워크플로우를 만들거나 기존 워크플로우를 편집하세요. 워크플로우 빌더에서 + Add New Trigger(+ 새 트리거 추가)를 클릭하여 시작하세요.

![워크플로우에 새 트리거 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045603059/original/10eJkp9-mjOeEXoS2sltLvqvKzd8PKDqew.jpeg?1745500078)

### **트리거 유형 선택**

사용 가능한 트리거 목록에서 Events(이벤트) 섹션까지 스크롤하여 Facebook Lead Form Submitted를 선택하세요. 이 옵션은 녹색 클립보드 아이콘과 함께 표시됩니다.

![Facebook 리드 폼 제출 트리거 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045603090/original/ufXsWG0V3Gqos8hDB2p8x4GeF01_KybLPQ.png?1745500118)

### **트리거 이름 지정**

Workflow Trigger Name(워크플로우 트리거 이름) 필드에 설명적인 이름을 입력하세요. 이는 나중에 트리거를 식별하는 데 도움이 되며, 특히 여러 리드 소스를 관리할 때 유용합니다. 예시: Facebook Lead Form Submitted (Weight Loss Campaign)

![트리거 이름 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045603110/original/A32rsx8iJ9UG70fmp3HNbFzsbutGpFIQTw.jpeg?1745500138)

### **올바른 대상을 위한 필터 적용**

트리거 이름을 지정한 후, 올바른 Facebook 페이지와 폼의 리드만 워크플로우를 트리거하도록 필터를 추가하세요.

**Page Is(페이지):** 캠페인을 실행하는 Facebook 페이지를 선택하세요. Settings(설정) > Integrations(연동) > Facebook에서 연결된 페이지만 여기에 표시됩니다.

![Facebook 페이지 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045603339/original/G9DpwHbhpYto224xX4imixdNDgPuC8o4gg.jpeg?1745500227)

**Form Is(폼)**

페이지를 선택한 후, 이 필터를 통해 해당 페이지와 연결된 특정 리드 폼을 선택할 수 있습니다.

![Facebook 리드 폼 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045603279/original/op16hb90SYlcTQ4UaCvEYOBXQ0qLgnfuwQ.jpeg?1745500201)

### **저장 후 워크플로우 구축**

트리거와 필터 설정이 완료되면 **Save Trigger(트리거 저장)**를 클릭하고 워크플로우 로직 구축을 시작하세요.

모든 필요한 액션을 정의한 후, **Test Workflow(워크플로우 테스트)**를 통해 모든 것이 예상대로 작동하는지 확인하고, 마지막으로 **Publish(발행)**하여 워크플로우를 활성화하세요.

**Facebook 리드를 위한 추천 워크플로우 액션**

Facebook 리드 폼 제출 트리거가 설정되면, 리드 관리를 효율화하고 응답 시간을 향상시키기 위해 다음 모범 사례를 고려하세요:

**Create/Update Opportunity(기회 생성/업데이트):** 새 리드를 자동으로 영업 파이프라인으로 라우팅하여 체계적으로 관리합니다.

**Assign to User(사용자에게 배정):** 각 리드가 즉시 팀원에게 할당되어 빠른 후속 조치가 가능하도록 합니다.

**Send Email(이메일 발송):** 개인화된 감사 또는 환영 이메일을 전송하여 처음부터 리드 참여를 유지합니다.

**Internal Notification(내부 알림):** 새 리드가 시스템에 들어올 때마다 팀에게 실시간으로 알려 기회를 놓치지 않도록 합니다.

이러한 단계는 빠른 응답을 돕고 Facebook 캠페인을 통해 들어오는 모든 리드와 더 강한 관계를 구축하는 데 도움이 됩니다.

---

## **자주 묻는 질문**

**Q: 트리거 설정에서 필터를 사용하지 않으면 어떻게 되나요?**

필터를 적용하지 않으면 연결된 모든 Facebook 페이지의 모든 리드 폼 제출에 대해 워크플로우가 트리거됩니다. 이는 원하지 않는 워크플로우가 실행될 수 있으므로 "Page Is"와 "Form Is" 같은 필터를 사용하는 것이 모범 사례입니다.

**Q: 이를 설정하기 전에 Facebook 리드 폼 필드를 매핑해야 하나요?**

네. Settings(설정) > Integrations(연동) > Facebook Form Fields Mapping(Facebook 폼 필드 매핑)으로 이동하여 리드 폼 필드(예: 이름, 이메일, 전화번호)가 Hyperclass 연락처 필드에 매핑되어 있는지 확인하세요. 적절한 매핑 없이는 리드 데이터가 올바르게 동기화되지 않을 수 있습니다.

**Q: 드롭다운에서 내 Facebook 페이지나 폼이 보이지 않는 이유는 무엇인가요?**

이는 일반적으로 Facebook 연동이 완료되지 않았을 때 발생합니다. Settings(설정) > Integrations(연동) > Facebook에서 Facebook 페이지가 연결되어 있고 올바른 권한이 부여되었는지 확인하세요.

**Q: 같은 트리거에서 여러 Facebook 폼으로 워크플로우를 트리거할 수 있나요?**

아니요. 트리거는 필터 설정당 하나의 폼만 지원합니다. 하지만 같은 워크플로우 내에서 다른 필터로 트리거를 복제하거나 각 폼별로 별도의 워크플로우를 설정할 수 있습니다.

**Q: 폼이 제출된 후 어떤 액션을 자동화할 수 있나요?**

일반적인 액션으로는 확인 이메일 발송, 사용자에게 리드 배정, 연락처 태그 추가, 파이프라인에서 기회 생성, 내부 팀 알림 발송 등이 있습니다. 필요한 만큼 단계를 쌓을 수 있습니다.

---
*원문 최종 수정: 2025년 4월 24일*
*Hyperclass 사용 가이드 — hyperclass.ai*