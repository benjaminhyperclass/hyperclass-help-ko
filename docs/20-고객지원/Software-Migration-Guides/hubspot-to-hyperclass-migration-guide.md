---

번역일: 2026-04-08
카테고리: 20-고객지원 > Software Migration Guides
---

# HubSpot에서 Hyperclass로 마이그레이션 가이드

HubSpot에서 Hyperclass로 비즈니스 프로세스, 데이터, 워크플로우를 마이그레이션하는 포괄적인 가이드입니다. 원활한 전환을 보장하고, 중단을 최소화하면서 Hyperclass 기능의 장점을 극대화하는 것이 목표입니다.

---

**목차**

- [마이그레이션 준비](#마이그레이션-준비)
- [CRM 데이터 마이그레이션](#crm-데이터-마이그레이션)
- [워크플로우 및 자동화 마이그레이션](#워크플로우-및-자동화-마이그레이션)
- [마케팅 캠페인 마이그레이션](#마케팅-캠페인-마이그레이션)
- [커뮤니케이션 도구 마이그레이션](#커뮤니케이션-도구-마이그레이션)
- [최종 점검 및 교육](#최종-점검-및-교육)
- [HubSpot 서비스 종료](#hubspot-서비스-종료)
- [자주 묻는 질문](#자주-묻는-질문)
---

# 마이그레이션 준비

### **1단계:** 현재 HubSpot 설정 검토

- **핵심 기능 파악:** HubSpot에서 사용 중인 모든 핵심 기능을 목록으로 작성하세요. CRM, 자동화 워크플로우, 마케팅 캠페인, 전화, SMS 메시징, 전자상거래 도구 등을 포함합니다.

- **기존 워크플로우 문서화:** Hyperclass에서 복제해야 할 기존 워크플로우, 파이프라인, 캠페인의 세부사항을 기록하세요.

- **데이터 볼륨 평가:** 마이그레이션할 데이터(연락처, 거래, 이메일 등)의 양을 평가하고, Hyperclass에서 충분한 저장 공간과 리소스를 확보하세요.

### **2단계:** 마이그레이션 목표 정의

- **명확한 목표 설정:** 마이그레이션으로 달성하고자 하는 목표를 정의하세요. 자동화 개선, CRM 통합 강화, 비용 절감 등을 포함할 수 있습니다.

- **기능 우선순위 설정:** 어떤 기능과 데이터 세트를 먼저 마이그레이션할지 우선순위를 정하세요.

### **3단계:** 백업 준비

- **HubSpot에서 데이터 내보내기:** 연락처, 회사, 거래, 티켓, 워크플로우 및 기타 필수 기록을 포함하여 HubSpot에서 필요한 모든 데이터를 내보내세요.

- **데이터 백업:** 마이그레이션 프로세스를 시작하기 전에 모든 데이터의 안전한 백업을 확보하세요.

---

# CRM 데이터 마이그레이션

### **1단계:** HubSpot에서 데이터 내보내기

- **연락처(Contacts) 및 회사(Companies):** Contacts > Contacts 및 CRM > Companies로 이동하여 CSV 파일로 데이터를 내보내세요.

- **거래 및 파이프라인:** Sales > Deals로 이동하여 파이프라인과 관련 거래를 내보내세요.

- **마케팅 자산:** 이메일, 랜딩 페이지, 폼, 워크플로우를 내보내세요.

- **상품(Products) 및 인보이스(Invoices):** 상품 카탈로그와 HubSpot 결제 도구를 통해 생성된 모든 인보이스를 내보내세요.

![HubSpot 데이터 내보내기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033899440/original/m3IUOgQ8yxWgxcoJgIAdk0Edl4lQ5Sgb0A.png?1727808789)

### **2단계:** Hyperclass로 데이터 가져오기

- **연락처 및 회사 가져오기:** Hyperclass에서 연락처(Contacts) > 연락처 가져오기(Import Contacts)로 이동하세요.
- HubSpot에서 내보낸 CSV 파일을 업로드하고 필드를 적절히 매핑하세요(예: 이름, 성, 이메일).

- **거래 및 파이프라인 재생성:** 기회 관리(Opportunities) > 파이프라인(Pipelines)에서 Hyperclass의 새 파이프라인을 설정하세요.
- 거래를 수동으로 재생성하거나 필요시 가져오기를 진행하세요.

- **상품 및 인보이스 마이그레이션:** 결제(Payments) > 상품(Products)에서 Hyperclass의 상품 목록을 재생성하세요.
- Hyperclass의 인보이싱 도구를 사용하여 인보이스와 결제 링크를 설정하세요.

![Hyperclass 데이터 가져오기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033899495/original/0Sgz-rtXZ7Qi4ZLEbwUpJoOKGunTP5wWHg.jpg?1727808933)

---

# 워크플로우 및 자동화 마이그레이션

### **1단계:** 기존 HubSpot 워크플로우 검토

- **활성 워크플로우 목록 작성:** HubSpot의 모든 활성 워크플로우를 식별하고 트리거, 액션, 지연시간을 문서화하세요.

- **워크플로우 복잡성 평가:** 각 워크플로우의 복잡성을 평가하여 Hyperclass에서 복제하기 위한 최적의 접근법을 결정하세요.

### **2단계:** Hyperclass에서 워크플로우 재생성

- **자동화 트리거 생성:** Hyperclass에서 자동화(Automation) > 워크플로우(Workflows)로 이동하세요.
- HubSpot과 동등한 트리거를 설정하세요(예: 폼 제출, 연락처 업데이트).

- **액션 및 지연 재구축:** 이메일 발송, SMS, 연락처 태그 지정, 거래 단계 업데이트 등의 액션을 재생성하세요. 워크플로우 내에서 필요한 지연시간과 조건부 로직을 구성하세요.

### **3단계:** 워크플로우 테스트

- **테스트 실행:** 워크플로우를 활성화하기 전에 의도한 대로 작동하는지 테스트를 실행하세요.

- **설정 조정:** 테스트 결과를 바탕으로 필요한 조정을 수행하여 원활한 작동을 보장하세요.

![워크플로우 테스트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033899910/original/DGy6M7SKsTWy5vdlHzfKk2VU8WHd5Jt3IQ.png?1727809821)

---

# 마케팅 캠페인 마이그레이션

### **1단계:** 이메일 캠페인 내보내기 및 재생성

- **이메일 템플릿 내보내기:** HubSpot 이메일 템플릿의 HTML 사본을 저장하세요.

- **Hyperclass에서 가져오기 또는 재구축:** Hyperclass의 마케팅(Marketing) > 이메일 캠페인(Email Campaigns)으로 이동하세요.
- 이메일 템플릿을 재생성하거나 가져와서 기존 디자인과 일치하도록 구성하세요.

### **2단계:** 랜딩 페이지 및 폼 재구축

- **랜딩 페이지 내보내기:** HubSpot 랜딩 페이지의 HTML을 다운로드하세요.

- **Hyperclass에서 재구축:** Hyperclass의 사이트(Sites) > 랜딩 페이지(Landing Pages) 빌더를 사용하여 랜딩 페이지를 재생성하세요.
- 모든 폼과 CTA 버튼이 Hyperclass 워크플로우에 연결되어 있는지 확인하세요.

### **3단계:** 캠페인 설정

- **캠페인 구성:** Hyperclass에서 캠페인을 설정하여 모든 자산(이메일, 랜딩 페이지, 폼)이 연결되도록 하세요. 필요에 따라 특정 목표, 예산, 추적 설정을 할당하세요.

![마케팅 캠페인 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033899902/original/cCTdBmm3xtFftmGYrbFBd4_QSv4_bjPa8A.png?1727809808)

---

# 커뮤니케이션 도구 마이그레이션

### **1단계:** 전화 및 SMS 마이그레이션

- **Twilio 연동:** HubSpot에서 Twilio를 사용하고 있다면, 전화 및 SMS를 위해 Hyperclass와 연동하세요. Hyperclass의 설정(Settings) > 전화번호(Phone Numbers)로 이동하여 Twilio 계정을 설정하세요.

- **커뮤니케이션 워크플로우 구성:** 자동화(Automation) > 워크플로우(Workflows)에서 SMS 및 통화 자동화 워크플로우를 설정하세요. 모든 고객 커뮤니케이션이 적절히 로그되고 추적되도록 하세요.

### **2단계:** 대화(Conversations) 인박스 설정

- **인박스 구성:** Hyperclass에서 대화(Conversations) > 인박스(Inbox)로 이동하세요. 기본 인박스를 설정하고 이메일, SMS, Facebook 메신저 등의 커뮤니케이션 채널을 연결하세요.

- **커뮤니케이션 채널 테스트:** 모든 채널이 올바르게 작동하고 메시지가 적절한 인박스로 라우팅되는지 확인하세요.

![커뮤니케이션 도구 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033899888/original/lpE6n1QaQ52WLVj6o3vZg2znRz4p1IfbCw.png?1727809774)

---

# 최종 점검 및 교육

### **1단계:** 최종 데이터 검증 수행

- **데이터 교차 확인:** 모든 데이터가 성공적으로 마이그레이션되었고 HubSpot과 Hyperclass 레코드 간에 불일치가 없는지 확인하세요.

- **워크플로우 및 캠페인 검증:** 모든 워크플로우, 자동화, 캠페인이 작동하는지 확인하세요.

### **2단계:** 팀원 교육

- **Hyperclass 교육:** HubSpot과의 차이점에 중점을 두고 팀에게 Hyperclass 사용법을 교육하세요.

- **Hyperclass 지원 활용:** 팀원들이 지속적인 학습을 위해 Hyperclass의 지원 리소스와 커뮤니티 포럼을 활용하도록 권장하세요.

### **3단계:** 모니터링 및 최적화

- **성과 모니터링:** Hyperclass의 새로운 설정 성과를 추적하고 필요에 따라 조정하세요.

- **지속적인 개선:** 워크플로우, 자동화, 캠페인을 정기적으로 검토하고 개선하여 비즈니스 목표에 부합하도록 하세요.

![최종 점검](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033899873/original/6Vd8OsjxkV6xUO4gI_xNxLXsZno3epaUOg.png?1727809755)

---

# HubSpot 서비스 종료

### **1단계:** 전환 기간

- **병렬 운영:** 전환 단계에서 중요한 운영이 누락되지 않도록 HubSpot과 Hyperclass를 병렬로 운영하는 것을 고려하세요.

- **점진적 단계별 종료:** Hyperclass가 완전히 운영되면서 HubSpot에 대한 의존도를 점진적으로 줄이세요.

### **2단계:** HubSpot 구독 취소

- **최종 데이터 백업:** HubSpot 구독을 취소하기 전에 모든 데이터가 안전하게 백업되었는지 확인하세요.

- **공식 취소:** HubSpot의 프로세스에 따라 구독을 취소하고 서비스를 종료하세요.

### **3단계:** 마이그레이션 후 검토

- **성공 검토:** 마이그레이션 프로세스의 성공을 평가하고 학습한 교훈을 문서화하세요.

- **지속적인 모니터링:** 마이그레이션 후에도 시스템을 계속 모니터링하여 잠재적인 문제를 확인하세요.

![마이그레이션 후 검토](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033899915/original/_m8qBxS0d7Yv9-Q83pv6YaYLidBJHva97A.png?1727809840)

---

## 자주 묻는 질문

**HubSpot에서 Hyperclass로 마이그레이션을 어떻게 준비해야 하나요?**

현재 HubSpot 설정을 검토하는 것부터 시작하세요. 사용 중인 핵심 기능(CRM, 자동화 워크플로우, 마케팅 캠페인, 전화, SMS 메시징, 전자상거래 도구)을 파악하고, 기존 워크플로우와 파이프라인을 문서화하며, 데이터 볼륨을 평가하세요. 명확한 마이그레이션 목표를 정의하고 먼저 마이그레이션할 기능의 우선순위를 정한 다음, 마이그레이션 프로세스를 시작하기 전에 HubSpot에서 필요한 모든 데이터를 안전한 백업으로 내보내세요.

**HubSpot에서 데이터를 어떻게 내보내나요?**

연락처와 회사의 경우 Contacts > Contacts 및 CRM > Companies로 이동하여 CSV 파일로 내보내세요. 거래와 파이프라인은 Sales > Deals로 이동하여 파이프라인과 관련 거래를 내보내세요. 이메일, 랜딩 페이지, 폼, 워크플로우를 포함한 마케팅 자산을 내보내세요. 상품과 인보이스의 경우 상품 카탈로그와 HubSpot 결제 도구를 통해 생성된 모든 인보이스를 내보내세요.

**Hyperclass에 연락처와 회사를 어떻게 가져오나요?**

Hyperclass에서 연락처(Contacts) > 연락처 가져오기(Import Contacts)로 이동하고, HubSpot에서 내보낸 CSV 파일을 업로드한 후 필드를 적절히 매핑하세요(예: 이름, 성, 이메일). 가져오기 후 모든 연락처와 회사 데이터가 올바르게 전송되었고 레코드 간의 관계가 유지되었는지 확인하세요.

**HubSpot 거래와 파이프라인을 Hyperclass에서 어떻게 재생성하나요?**

HubSpot 파이프라인 구조와 일치하도록 기회 관리(Opportunities) > 파이프라인(Pipelines)에서 새 파이프라인을 설정하세요. 그런 다음 거래를 수동으로 재생성하거나 가능하면 가져오기를 진행하세요. 영업 프로세스를 유지하기 위해 모든 거래 단계, 속성, 관련 데이터가 정확히 구성되었는지 확인하세요.

**HubSpot에서 Hyperclass로 이메일 캠페인을 어떻게 마이그레이션하나요?**

HubSpot 이메일 템플릿의 HTML 사본을 저장하세요. 그런 다음 Hyperclass의 마케팅(Marketing) > 이메일 캠페인(Email Campaigns)으로 이동하여 이메일 템플릿을 재생성하거나 가져와서 기존 디자인과 일치하도록 구성하세요. 연락처 목록에 보내기 전에 이메일을 테스트하여 올바른 형식과 기능을 확인하세요.

**HubSpot 랜딩 페이지와 폼을 Hyperclass에서 어떻게 재구축하나요?**

HubSpot 랜딩 페이지의 HTML을 다운로드한 다음 Hyperclass의 사이트(Sites) > 랜딩 페이지(Landing Pages) 빌더를 사용하여 재생성하세요. 모든 폼과 CTA 버튼이 Hyperclass 워크플로우에 연결되어 있는지 확인하세요. 각 랜딩 페이지와 폼을 테스트하여 기능과 적절한 데이터 캡처를 확인하세요.

**HubSpot 워크플로우를 Hyperclass에서 어떻게 재생성하나요?**

트리거, 액션, 지연시간을 포함하여 HubSpot의 모든 활성 워크플로우를 식별하고 문서화하세요. Hyperclass에서 자동화(Automation) > 워크플로우(Workflows)로 이동하고, 동등한 트리거를 설정하고(예: 폼 제출, 연락처 업데이트), 액션을 재구축하고(이메일 발송, SMS, 연락처 태그 지정, 거래 단계 업데이트), 필요한 지연시간과 조건부 로직을 구성하세요. 워크플로우를 활성화하기 전에 의도한 대로 작동하는지 테스트를 실행하세요.

**HubSpot에서 Hyperclass로 전화 및 SMS 기능을 어떻게 마이그레이션하나요?**

HubSpot에서 Twilio를 사용하고 있다면, 설정(Settings) > 전화번호(Phone Numbers)로 이동하여 Twilio 계정을 설정함으로써 전화 및 SMS를 위해 Hyperclass와 연동하세요. 그런 다음 자동화(Automation) > 워크플로우(Workflows)에서 SMS 및 통화 자동화 워크플로우를 설정하여 모든 고객 커뮤니케이션이 적절히 로그되고 추적되도록 하세요. Hyperclass에서 대화(Conversations) 인박스를 구성하여 모든 커뮤니케이션 채널을 관리하세요.

**HubSpot에서 Hyperclass로 마이그레이션한 후 어떤 최종 점검을 수행해야 하나요?**

모든 데이터가 성공적으로 마이그레이션되었고 HubSpot과 Hyperclass 레코드 간에 불일치가 없는지 교차 확인하세요. 모든 워크플로우, 자동화, 캠페인이 작동하는지 검증하세요. 커뮤니케이션 채널을 테스트하여 기능을 확인하세요. HubSpot과의 차이점에 중점을 두고 팀에게 Hyperclass 사용에 대한 교육을 제공하세요. 성과를 모니터링하고 필요에 따라 조정하세요.

**마이그레이션 후 즉시 HubSpot 구독을 취소해야 하나요?**

아니요, 중요한 운영이 누락되지 않도록 전환 단계에서 HubSpot과 Hyperclass를 병렬로 운영하는 것을 고려하세요. Hyperclass가 완전히 운영되면서 HubSpot에 대한 의존도를 점진적으로 줄이세요. HubSpot 구독을 취소하기 전에 모든 데이터가 안전하게 백업되었는지 확인하세요. 취소 후에도 시스템을 계속 모니터링하여 잠재적인 문제를 확인하고 마이그레이션 프로세스에서 학습한 교훈을 문서화하세요.

---
*원문 최종 수정: Thu, 24 Apr, 2025 at 2:48 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*