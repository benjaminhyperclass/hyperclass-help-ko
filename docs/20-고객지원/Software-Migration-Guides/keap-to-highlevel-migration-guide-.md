---

번역일: 2026-04-08
카테고리: 20-고객지원 > Software Migration Guides
---

# Keap에서 Hyperclass로 이전하기 (마이그레이션 가이드)

이 가이드는 Keap에서 Hyperclass(Hyperclass)로 이전하는 자세한 방법을 안내합니다. 연락처, 커스텀 필드, 자동화, 랜딩 페이지 및 기타 필수 자산의 이전을 다루며, Hyperclass가 제공하는 기능을 최대한 활용하면서 원활한 전환을 보장하는 것이 목표입니다.

**목차**

- [이전 준비하기](#이전-준비하기)
- [연락처 및 커스텀 필드 이전](#연락처-및-커스텀-필드-이전)
- [파이프라인과 기회 관리 이전](#파이프라인과-기회-관리-이전)
- [자동화 및 캠페인 이전](#자동화-및-캠페인-이전)
- [랜딩 페이지와 폼 이전](#랜딩-페이지와-폼-이전)
- [예약 및 캘린더 이전](#예약-및-캘린더-이전)
- [최종 검토 및 교육](#최종-검토-및-교육)
- [Keap 서비스 종료](#keap-서비스-종료)

---

# **이전 준비하기**

### **1단계:** 현재 Keap 설정 검토

- **핵심 자산 파악:** Keap의 모든 중요한 자산을 목록화하세요. 연락처, 커스텀 필드, 파이프라인, 자동화, 랜딩 페이지 등을 포함합니다.

- **워크플로우 문서화:** 지속적인 운영에 필수적인 모든 자동화 시퀀스, 캠페인 및 기타 워크플로우를 기록해두세요.

- **데이터 볼륨 평가:** 이전해야 할 데이터(연락처, 커스텀 필드, 자동화)의 양을 평가하세요.

### **2단계:** 이전 목표 설정

- **명확한 목표 설정:** 향상된 자동화 기능, 통합 CRM, 개선된 요금제 등 Hyperclass로 이전하는 주요 이유를 파악하세요.

- **중요 기능 우선순위 설정:** 중단 없는 운영을 보장하기 위해 가장 중요한 기능부터 우선적으로 이전하세요.

### **3단계:** 백업 준비

- **Keap에서 데이터 내보내기:** 연락처 목록, 커스텀 필드, 자동화 시퀀스 등 필요한 모든 데이터를 내보내세요.

- **데이터 백업:** 이전 과정을 시작하기 전에 내보낸 모든 데이터가 안전하게 백업되었는지 확인하세요.

---

# 연락처 및 커스텀 필드 이전

### **1단계:** Keap에서 데이터 내보내기

- **연락처 내보내기:** Keap에서 연락처(Contacts) > 사람들(People)로 이동합니다.
- 내보낼 연락처를 선택하거나 모두 선택(Select All) 옵션을 사용합니다.
- 내보내기(Export)를 클릭하고 연락처 데이터를 CSV 파일로 다운로드하도록 선택합니다.
- 대량 내보내기(1,000개 이상의 연락처)의 경우, 이메일 주소를 입력하면 Keap에서 다운로드 링크를 보내드립니다.

- **커스텀 필드 내보내기:** 연락처 및 회사와 연결된 모든 커스텀 필드를 문서화하거나 내보내세요. 커스텀 필드는 Hyperclass에서 수동으로 다시 생성해야 한다는 점을 유의하세요.

- **자동화 규칙 문서화:** 모든 자동화 시퀀스, 트리거 및 액션을 스크린샷으로 캡처하거나 수동으로 문서화하여 기록하세요.

![Keap 연락처 내보내기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033893177/original/HvNSim0JgN9NCS5ricBaXUw_SHeyQF6myw.png?1727798693)

### **2단계:** Hyperclass로 데이터 가져오기

- **연락처 가져오기:** Hyperclass에서 연락처(Contacts) > 연락처 가져오기(Import Contacts)로 이동하여 Keap에서 내보낸 CSV 파일을 업로드합니다.
- 가져오기 과정에서 Keap의 커스텀 필드를 Hyperclass로 매핑하세요.

- **커스텀 필드 재생성:** Hyperclass에서 설정(Settings) > 커스텀 필드(Custom Fields)로 이동합니다.
- Keap의 각 커스텀 필드를 재생성하여 필드 유형이 적절히 일치하도록 확인하세요.

- **태그 재생성:** Hyperclass에서 정확한 연락처 분류를 위해 Keap에서 사용했던 모든 태그를 수동으로 생성하세요.

---

# 파이프라인과 기회 관리 이전

### **1단계:** Keap의 기존 파이프라인 검토

- **활성 파이프라인 목록화:** 단계 및 관련 거래를 포함하여 Keap의 모든 활성 파이프라인을 파악하세요.

- **거래 정보 문서화:** 거래 금액, 단계, 연관된 연락처 등 각 거래와 관련된 모든 주요 세부사항을 기록하세요.

![Keap 파이프라인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033895985/original/nSS4_Sg-LmbzHDVNyEeprpVHG-oylfp1fg.png?1727802228)

### **2단계:** Hyperclass에서 파이프라인 재생성

- **파이프라인 설정:** Hyperclass에서 기회 관리(Opportunities) > 파이프라인(Pipelines)으로 이동합니다.
- Keap의 파이프라인에 해당하는 파이프라인을 생성하고 동일한 단계와 설정을 추가하세요.

- **거래 수동 이전:** 거래 정보를 수동으로 입력하여 Hyperclass에서 각 거래를 재생성하고, 거래 단계와 연락처 연결이 일치하도록 확인하세요.

![Hyperclass 파이프라인 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033896091/original/QgAlFIvRiyOIF3DMK4MQ3IuBvcBpOwK2UA.jpg?1727802411)

---

# 자동화 및 캠페인 이전

### **1단계:** Keap의 기존 자동화 검토

- **활성 자동화 목록화:** 이메일 시퀀스, 태그, 트리거를 포함한 모든 활성 자동화를 파악하세요.

- **자동화 플로우 문서화:** Hyperclass에서 재생성을 용이하게 하기 위해 각 자동화 플로우의 상세한 메모나 스크린샷을 촬영하세요.

### **2단계:** Hyperclass에서 자동화 재생성

- **새 워크플로우 구축:** Hyperclass에서 자동화(Automation) > 워크플로우(Workflows)로 이동합니다.
- Hyperclass의 트리거, 조건, 액션을 사용하여 Keap의 자동화를 재생성하고 유사한 결과를 달성하세요.

- **워크플로우 테스트:** 재생성된 모든 워크플로우를 철저히 테스트하여 올바르게 작동하는지 확인하고, 필요한 조정을 수행하세요.

![Hyperclass 워크플로우 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033896189/original/t6TXuRjFWGtGuXzACQ0xX7zLKdDacyzm9Q.png?1727802588)

---

# 랜딩 페이지와 폼 이전

### **1단계:** Hyperclass에서 랜딩 페이지 재생성

- **랜딩 페이지 재구축:** Hyperclass의 퍼널 및 웹사이트 빌더(Funnel & Website Builder)를 사용하여 Keap의 랜딩 페이지를 재생성하세요. 디자인과 콘텐츠가 원본 Keap 랜딩 페이지와 최대한 일치하도록 확인하세요.

- **폼 추가:** 필요한 리드 정보를 수집하고 올바른 태그나 자동화를 트리거하도록 랜딩 페이지에 폼을 삽입하세요.

### **2단계:** 폼 커스터마이징

- **공개 폼 재생성:** Hyperclass에서 퍼널 및 웹사이트(Funnels & Websites) > 폼(Forms)으로 이동하여 Keap의 공개 폼을 재생성하세요.
- Keap에서 사용했던 것과 일치하도록 폼 필드와 설정을 커스터마이징하세요.

- **폼 액션 설정:** Hyperclass의 폼 제출이 Keap 설정과 유사하게 올바른 태그와 워크플로우를 트리거하도록 확인하세요.

![Hyperclass 폼 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033896153/original/h7HHSz_LlBoxZNWV0flYVvPlsCYwjmSleg.png?1727802541)

---

# 예약 및 캘린더 이전

### **1단계:** Keap의 기존 예약 검토

- **활성 예약 유형 목록화:** 알림 및 연동을 포함하여 기존의 모든 예약 유형과 관련 설정을 파악하세요.

- **예약 설정 문서화:** 각 예약 유형과 관련된 지속 시간, 예약 가능 시간, 알림 등 모든 주요 설정을 기록하세요.

### **2단계:** Hyperclass에서 예약 유형 재생성

- **예약 유형 설정:** Hyperclass에서 캘린더(Calendars) > 예약 유형(Appointment Types)으로 이동합니다.
- 지속 시간, 위치(Zoom 연동), 예약 가능 시간 등 모든 관련 설정을 포함하여 Keap의 각 예약 유형을 재생성하세요.

- **외부 캘린더 연동:** 모든 예약이 동기화되고 충돌을 방지하기 위해 Google 또는 Outlook 캘린더를 Hyperclass와 연동하세요.

![Hyperclass 캘린더 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033896195/original/pVBX15x-GqEmu0rL5RKJXZGzZvKQwvLRog.png?1727802599)

---

# **최종 검토 및 교육**

### **1단계:** 최종 데이터 검증 수행

- **데이터 교차 확인:** 연락처, 파이프라인, 자동화, 랜딩 페이지를 포함하여 모든 데이터가 성공적으로 이전되었는지 확인하세요.

- **워크플로우 검증:** 모든 워크플로우와 자동화가 Hyperclass에서 운영되고 있는지 확인하세요.

### **2단계:** 팀원 교육

- **Hyperclass 교육:** Hyperclass의 CRM, 자동화, 예약 관리 도구 사용에 대해 팀에게 필요한 교육을 제공하세요.

- **지원 리소스 활용:** 지속적인 학습과 문제 해결을 위해 팀이 Hyperclass의 지원 리소스를 활용하도록 권장하세요.

### **3단계:** 모니터링 및 최적화

- **성능 모니터링:** Hyperclass 설정의 성능을 지속적으로 모니터링하고 운영 최적화를 위해 필요한 조정을 수행하세요.

- **지속적인 개선:** 진화하는 비즈니스 요구사항을 충족하도록 설정을 정기적으로 검토하세요.

![Hyperclass 성능 대시보드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033896204/original/T2DEx5mvKA-DXK0it85lqixsZrYab6KCsA.png?1727802618)

---

# **Keap 서비스 종료**

### **1단계:** 전환 기간

- **병렬 운영:** 운영 중단을 방지하기 위해 전환 기간 동안 Keap과 Hyperclass를 병렬로 운영하는 것을 고려하세요.

- **점진적 단계적 중단:** Hyperclass에 익숙해지면서 Keap 의존도를 서서히 줄이세요.

### **2단계:** Keap 구독 취소

- **최종 데이터 백업:** Keap 구독을 취소하기 전에 모든 필요한 데이터가 안전하게 백업되었는지 확인하세요.

- **공식 취소:** Keap의 프로세스에 따라 구독을 취소하고 관련 서비스를 종료하세요.

### **3단계:** 이전 후 검토

- **성공 검토:** 이전의 성공을 평가하고 직면한 어려움과 배운 교훈을 문서화하세요.

- **지속적인 모니터링:** 이전 후 Hyperclass 설정을 지켜보며 문제를 신속하게 발견하고 해결하세요.

![이전 완료 확인 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033896211/original/glUVBEs16TpPxruTsx3cTk0z_3qoq7BO_w.png?1727802636)

---
*원문 최종 수정: 2024년 10월 1일*
*Hyperclass 사용 가이드 — hyperclass.ai*