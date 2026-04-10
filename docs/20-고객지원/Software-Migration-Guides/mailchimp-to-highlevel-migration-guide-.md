---

번역일: 2026년 4월 8일
카테고리: 20-고객지원 > Software Migration Guides
---

# Mailchimp에서 Hyperclass로 이전 가이드

이 가이드는 Mailchimp에서 Hyperclass로 이전하는 전체 과정을 다룹니다. 이메일 캠페인, 연락처 목록, 폼, 자동화 워크플로우를 이전하는 방법을 설명하며, Hyperclass의 포괄적인 CRM 및 마케팅 자동화 기능을 활용하여 원활한 전환을 목표로 합니다.

---

**목차**

- [이전 준비](#이전-준비)
- [연락처, 캠페인 및 자동화 이전](#연락처-캠페인-및-자동화-이전)
- [폼 및 랜딩 페이지 이전](#폼-및-랜딩-페이지-이전)
- [이메일 캠페인 및 자동화 이전](#이메일-캠페인-및-자동화-이전)
- [연동 설정](#연동-설정)
- [최종 확인 및 팀 교육](#최종-확인-및-팀-교육)
- [Mailchimp 사용 종료](#mailchimp-사용-종료)

---

# 이전 준비

### **1단계:** 현재 Mailchimp 설정 검토

- **핵심 자산 식별:** 이전해야 할 모든 오디언스, 이메일 캠페인, 자동화 워크플로우, 폼의 목록을 작성하세요.

- **디자인과 콘텐츠 문서화:** 각 이메일과 폼의 디자인, 콘텐츠, 설정을 스크린샷이나 메모로 저장하여 Hyperclass에서 동일하게 구현할 수 있도록 준비하세요.

- **데이터 볼륨 평가:** 이전할 연락처와 캠페인의 수를 평가하세요.

### **2단계:** 이전 목표 정의

- **명확한 목표 설정:** 통합 CRM 기능, 향상된 자동화, 비용 효율성 등 Hyperclass로 이전하는 이유를 명확히 하세요.

- **핵심 기능 우선순위 설정:** 업무 중단을 최소화하기 위해 가장 중요한 기능부터 이전하는 데 집중하세요.

### **3단계:** 백업 준비

- **Mailchimp에서 데이터 내보내기:** 연락처 목록, 이메일 캠페인, 자동화 워크플로우를 포함한 모든 관련 데이터를 내보내세요.

- **데이터 백업:** 이전 과정을 시작하기 전에 모든 내보낸 데이터를 안전하게 백업하세요.

---

# 연락처, 캠페인 및 자동화 이전

### **1단계:** Mailchimp에서 데이터 내보내기

- **연락처 내보내기:** Mailchimp에서 Audience > All contacts로 이동하세요. 관련 연락처를 선택하고 CSV 파일로 다운로드하여 오디언스 데이터를 내보내세요.

- **이메일 캠페인 내보내기:** Campaigns > All Campaigns에 접속하여 재사용 가능한 콘텐츠나 HTML 템플릿을 내보내세요.

- **자동화 내보내기:** 트리거, 액션, 세그먼트를 포함한 기존 자동화 워크플로우의 설정을 문서화하세요.

### **2단계:** Hyperclass로 연락처 가져오기

- **연락처 가져오기:** Hyperclass에서 연락처(Contacts) > 연락처 가져오기(Import Contacts)로 이동하여 Mailchimp에서 내보낸 CSV 파일을 업로드하세요. 모든 데이터가 올바르게 가져와지도록 커스텀 필드를 매핑하세요.

![연락처 가져오기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033900333/original/hu1jNnFJroa4vCsIINjHyfZV9o8KLS80Yg.png?1727810817)

---

# 폼 및 랜딩 페이지 이전

### **1단계:** Hyperclass에서 폼 다시 만들기

- **폼 재구축:** Hyperclass의 사이트(Sites) > 폼(Forms)을 사용하여 Mailchimp의 폼을 다시 만드세요. 필드, 검증 규칙, 제출 액션이 Mailchimp에서 사용했던 것과 일치하도록 설정하세요.

- **폼 삽입:** 제공된 삽입 코드를 사용하여 다시 만든 폼을 웹사이트나 랜딩 페이지에 삽입하세요.

### **2단계:** Hyperclass에서 랜딩 페이지 다시 만들기

- **랜딩 페이지 재구축:** Hyperclass의 사이트(Sites) > 퍼널(Funnels)로 이동하여 Mailchimp에서 사용했던 랜딩 페이지를 다시 만드세요. Hyperclass의 템플릿을 사용하거나 처음부터 시작하여 원본 페이지와 동일한 디자인을 구현하세요.

- **랜딩 페이지 발행:** 필요한 경우 커스텀 도메인을 연결하고 랜딩 페이지를 발행하여 실제 서비스에 적용하세요.

![랜딩 페이지 빌더](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033900416/original/gm-aZHyJaH7nofGK4y5fG6jV1UVyj1w0cQ.png?1727811017)

---

# 이메일 캠페인 및 자동화 이전

### **3단계:** Hyperclass에서 이메일 캠페인 다시 만들기

- **템플릿 선택:** Hyperclass에서 마케팅(Marketing) > 이메일(Emails) > 템플릿(Templates)으로 이동하여 적절한 템플릿을 선택하거나 처음부터 시작하세요.

- **콘텐츠 재구축:** Mailchimp 이메일의 텍스트, 이미지, 링크를 Hyperclass 이메일 빌더로 복사하세요. 레이아웃과 디자인 요소가 원본 Mailchimp 캠페인과 일치하도록 하세요.

- **수신거부 링크 설정:** 이메일 규정을 준수하기 위해 Hyperclass의 내장 수신거부 병합 태그를 사용하세요.

### **4단계:** Hyperclass에서 자동화 다시 만들기

- **자동화 워크플로우 재구축:** Hyperclass의 자동화(Automations) > 워크플로우(Workflows)로 이동하여 Mailchimp 자동화를 다시 만드세요. 원본 Mailchimp 워크플로우와 일치하도록 트리거, 액션, 조건을 설정하세요.

- **미리 제작된 레시피 사용:** 기존 Mailchimp 자동화와 일치하는 Hyperclass의 워크플로우 레시피가 있다면 활용하여 시간을 절약하세요.

![워크플로우 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033900357/original/CUGsNxOC_wZjF6-xdZjKd5Rv74RxnnbEvQ.png?1727810903)

---

# 연동 설정

### **1단계:** Hyperclass에서 연동 다시 연결

- **이메일 연동 재설정:** Hyperclass의 설정(Settings) > 연동(Integrations)으로 이동하여 필요한 서드파티 서비스(예: Zapier, 소셜 미디어 플랫폼)를 다시 연결하세요.

- **결제 처리 설정 (해당하는 경우):** Mailchimp에서 이커머스 기능을 사용했다면, Hyperclass의 설정(Settings) > 결제(Payments)에서 결제 게이트웨이를 설정하세요.

### **2단계:** 분석 설정

- **추적 활성화:** Hyperclass의 내장 분석 기능을 사용하여 이메일 캠페인과 랜딩 페이지의 성과를 모니터링하세요.

- **서드파티 분석 구현 (필요한 경우):** 설정(Settings) > 추적(Tracking)으로 이동하여 Mailchimp에서 사용했던 추적 코드(예: Google Analytics)를 다시 구현하세요.

![연동 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033900425/original/rdYcK6RFdDf2vzrdzx34wY2gK_ZGkrVtTQ.png?1727811050)

---

# 최종 확인 및 팀 교육

### **1단계:** 최종 데이터 검증 수행

- **데이터 교차 확인:** 모든 연락처, 이메일 캠페인, 자동화 워크플로우가 성공적으로 이전되어 Hyperclass에서 올바르게 작동하는지 확인하세요.

- **이메일 캠페인 테스트:** 개인화 태그와 수신거부 링크를 포함하여 이메일이 올바르게 전송되는지 확인하세요.

### **2단계:** 팀원 교육

- **Hyperclass 교육:** 팀에게 Hyperclass의 이메일 빌더, 워크플로우, CRM 기능 사용법을 교육하세요.

- **지원 자료 활용:** 지속적인 학습과 문제 해결을 위해 팀이 Hyperclass의 지원 자료와 문서를 활용하도록 독려하세요.

### **3단계:** 모니터링 및 최적화

- **성과 모니터링:** Hyperclass에서 캠페인과 워크플로우의 성과를 정기적으로 확인하고 필요에 따라 조정하세요.

- **지속적인 개선:** Hyperclass의 새로운 기능과 업데이트를 지속적으로 파악하여 설정을 개선하세요.

![성과 모니터링 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033900447/original/58vtcQVqSghAGMP46HAiDasOqpHlD_lNkQ.png?1727811088)

---

# Mailchimp 사용 종료

### **1단계:** 전환 기간

- **병렬 운영:** 원활한 전환을 위해 Mailchimp와 Hyperclass를 짧은 기간 동안 동시에 운영하는 것을 고려하세요.

- **점진적 단계적 중단:** Hyperclass의 기능에 대한 신뢰도가 높아지면서 Mailchimp를 점진적으로 단계적으로 중단하세요.

### **2단계:** Mailchimp 구독 해지

- **최종 데이터 백업:** Mailchimp 구독을 해지하기 전에 필요한 모든 데이터가 안전하게 백업되었는지 확인하세요.

- **공식 해지:** Mailchimp의 절차에 따라 구독을 해지하고 관련 서비스를 종료하세요.

### **3단계:** 이전 후 검토

- **성공 검토:** 이전의 성공을 평가하고 발생한 문제와 해결책을 문서화하세요.

- **지속적인 모니터링:** 이전 후 Hyperclass 설정을 지속적으로 모니터링하여 문제를 신속하게 발견하고 해결하세요.

![이전 완료 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033900450/original/xBfrQ9iPlGnEj0LCs375PQuTJFb1yLrdmg.png?1727811098)

---
*원문 최종 수정: 2025년 3월 7일 금요일 오전 11:29*
*Hyperclass 사용 가이드 — hyperclass.ai*