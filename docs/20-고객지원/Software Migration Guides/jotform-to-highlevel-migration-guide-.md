---

번역일: 2026-04-08
카테고리: 20-고객지원 > Software Migration Guides
---

# JotForm을 Hyperclass로 이전하는 방법 (마이그레이션 가이드)

이 종합 가이드는 JotForm에서 Hyperclass로 폼, 데이터, 워크플로우를 이전하는 단계별 방법을 제공합니다. 최소한의 중단으로 원활하게 전환하면서 Hyperclass의 통합 마케팅 및 CRM 기능을 완전히 활용할 수 있도록 도와드립니다.

---

**목차**

- [이전 준비](#이전-준비)
- [데이터 이전](#데이터-이전)
- [폼 및 워크플로우 이전](#폼-및-워크플로우-이전)
- [연동 및 알림 이전](#연동-및-알림-이전)
- [최종 확인 및 교육](#최종-확인-및-교육)
- [JotForm 서비스 종료](#jotform-서비스-종료)

---

# 이전 준비

### 1단계: 현재 JotForm 설정 검토

- 핵심 폼과 데이터 파악: JotForm에서 활성화된 모든 폼을 목록으로 작성하고, 제출 데이터, 이메일 알림, 연동 설정 등 관련 데이터를 확인하세요.

- 폼 워크플로우 문서화: 각 폼이 현재 워크플로우, 이메일 알림, 외부 서비스 연동과 어떻게 상호작용하는지 자세히 기록해두세요.

- 데이터 규모 평가: 이전해야 할 데이터(폼 제출, 연락처 정보 등)의 양을 평가하세요.

### 2단계: 이전 목표 설정

- 명확한 목표 설정: Hyperclass로 이전하여 달성하고자 하는 목표를 정하세요. 예: 자동화 개선, CRM 도구와의 통합 강화, 비용 절감 등.

- 기능 우선순위 결정: 먼저 이전해야 할 가장 중요한 폼과 데이터를 결정하세요.

### 3단계: 백업 준비

- JotForm에서 데이터 내보내기: 폼 제출 데이터, 템플릿, 설정 등 필요한 모든 데이터를 JotForm에서 내보내세요.

- 데이터 백업: 이전 과정을 시작하기 전에 모든 데이터가 안전하게 백업되었는지 확인하세요.

![JotForm 데이터 내보내기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034034712/original/kVW5hpkM6dq4K3Om70eEAAvLLPFXMJdasw.png?1727961451)

# 데이터 이전

### 1단계: JotForm에서 데이터 내보내기

- 폼 제출 데이터 내보내기: JotForm에서 각 폼으로 이동하여 폼 제출 데이터를 선택하고 CSV 파일로 내보내세요.

- 폼 템플릿 내보내기: Hyperclass에서 재생성할 때 참고할 수 있도록 JotForm 템플릿의 사본을 저장해두세요.

### 2단계: Hyperclass로 데이터 가져오기

- Hyperclass에서 폼 재생성: Hyperclass의 `Sites(사이트) → Forms(폼)`으로 이동하세요. 폼 빌더를 사용하여 JotForm의 모든 필드와 일치하도록 폼을 재생성하세요.

- 연락처 가져오기: JotForm에 저장된 연락처 정보가 있다면, `Contacts(연락처) → Import Contacts(연락처 가져오기)`로 이동하여 CSV 파일을 업로드해 Hyperclass로 가져오세요.

- 커스텀 필드 설정: JotForm에서 수집하던 데이터와 일치하도록 Hyperclass에서 필요한 커스텀 필드를 생성하세요.

![Hyperclass 폼 빌더 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034048080/original/ZD6ZYLtLVBFDFJOTbWC1GnbSUL8n7uyxGg.png?1727968977)

---

# 폼 및 워크플로우 이전

### 1단계: 기존 JotForm 워크플로우 검토

- 활성 워크플로우 목록 작성: JotForm에서 폼 제출로 실행되는 모든 워크플로우를 파악하고 문서화하세요. 예: 이메일 알림, 데이터 라우팅, 다른 도구와의 연동 등.

- 워크플로우 복잡도 평가: 각 워크플로우의 복잡도를 평가하여 Hyperclass에서 어떻게 재현할지 결정하세요.

### 2단계: Hyperclass에서 워크플로우 재생성

- 자동화 트리거 생성: Hyperclass에서 `Automation(자동화) → Workflows(워크플로우)`로 이동하세요. JotForm 워크플로우의 로직과 동일하게 각 폼 제출에 대한 트리거를 설정하세요(예: 알림 발송, 연락처 기록 업데이트).

- 액션과 조건 재구성: 확인 이메일 발송, 연락처 태그 추가, CRM 기록 업데이트 등의 액션을 재생성하세요. 기존 워크플로우와 동일하게 필요한 조건이나 분기 로직을 설정하세요.

### 3단계: 워크플로우 테스트

- 테스트 실행: 워크플로우를 활성화하기 전에 의도한 대로 작동하는지 철저히 테스트하세요.

- 설정 조정: 테스트 결과를 바탕으로 원활한 운영을 위해 필요한 조정을 하세요.

---

# 연동 및 알림 이전

### 1단계: Hyperclass에서 연동 재생성

- 필요한 연동 파악: JotForm에서 연동하고 있던 외부 도구들을 확인하세요. 예: 결제 게이트웨이, 이메일 마케팅 도구, CRM 등.

- Hyperclass에서 연동 설정: Hyperclass의 내장 연동 기능이나 Zapier를 사용하여 외부 애플리케이션과 연결하세요. `Settings(설정) → Integrations(연동)`로 이동하여 필요한 연결을 설정하세요.

### 2단계: 이메일 알림 재생성

- 내부 알림 설정: Hyperclass에서 `Automation(자동화) → Workflows(워크플로우)`로 이동하여 폼 제출 시 내부 알림을 설정하세요.

- 자동응답 설정: JotForm에서 자동응답을 사용하고 있었다면, 폼 제출 시 실행되는 자동 이메일 시퀀스를 생성하여 Hyperclass에서 설정하세요.

![연동 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034034717/original/Yo-oSTos10DYgMLGJ7bczGQ9pbBf37BfvQ.png?1727961452)

![워크플로우 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034034718/original/xppqTbv0qo60i7wsDRIk16z5mKoanMW6ew.png?1727961452)

---

# 최종 확인 및 교육

### 1단계: 최종 데이터 검증

- 데이터 교차 확인: 모든 데이터가 성공적으로 이전되었는지, JotForm과 Hyperclass 기록 간에 불일치가 없는지 확인하세요.

- 폼과 워크플로우 검증: 모든 폼과 워크플로우가 Hyperclass에서 정상적으로 작동하는지 확인하세요.

### 2단계: 팀원 교육

- Hyperclass 교육: 팀원들에게 Hyperclass의 폼 빌더와 자동화 도구 사용법을 교육하고, JotForm과의 차이점에 중점을 두세요.

- Hyperclass 지원 활용: 팀원들이 지속적인 학습을 위해 Hyperclass의 지원 자료와 커뮤니티 포럼을 활용하도록 권장하세요.

### 3단계: 모니터링 및 최적화

- 성능 모니터링: Hyperclass의 새로운 설정 성능을 추적하고 필요에 따라 조정하세요.

- 지속적인 개선: 비즈니스 목표와 일치하도록 폼, 워크플로우, 연동을 정기적으로 검토하고 개선하세요.

---

# JotForm 서비스 종료

### 1단계: 전환 기간

- 병렬 운영: 전환 단계에서 중요한 작업이 누락되지 않도록 JotForm과 Hyperclass를 병렬로 운영하는 것을 고려하세요.

- 점진적 단계별 종료: Hyperclass가 완전히 작동하면서 JotForm에 대한 의존도를 점진적으로 줄이세요.

### 2단계: JotForm 구독 취소

- 최종 데이터 백업: JotForm 구독을 취소하기 전에 모든 데이터가 안전하게 백업되었는지 확인하세요.

- 공식 취소: JotForm의 절차에 따라 구독을 취소하고 서비스를 종료하세요.

### 3단계: 이전 후 검토

- 성공 여부 검토: 이전 과정의 성공 여부를 평가하고 배운 점을 문서화하세요.

- 지속적인 모니터링: 이전 후에도 잠재적인 문제가 없는지 시스템을 계속 모니터링하세요.

---
*원문 최종 수정: Fri, 7 Mar, 2025 at 11:35 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*