---

번역일: 2026-04-08
카테고리: 20-고객지원 > Software Migration Guides
---

# Calendly에서 Hyperclass로 이전하기 (마이그레이션 가이드)

이 가이드는 Calendly의 예약 및 일정 관리 기능을 Hyperclass로 완전히 이전하는 방법을 안내합니다. 기존 예약 기능과 자동화를 유지하면서 Hyperclass의 확장된 기능을 활용할 수 있도록 원활한 전환을 목표로 합니다.

**중요:** Calendly에서 Hyperclass로 이전할 때 다음 구성 요소를 모두 마이그레이션해야 합니다.

1. 사용자
2. 캘린더 설정
3. 예약 가능 시간 설정
4. 화상 회의
5. 결제 수집
6. 캘린더(이벤트 유형)
7. 워크플로우(자동화)

---

**목차**

- [사용자 이전](#사용자-이전)
- [캘린더 설정 이전](#캘린더-설정-이전)
- [예약 가능 시간 설정 이전](#예약-가능-시간-설정-이전)
- [화상 회의 설정](#화상-회의-설정)
- [결제 수집 설정](#결제-수집-설정)
- [캘린더(이벤트 유형) 이전](#캘린더이벤트-유형-이전)
- [워크플로우(자동화) 이전](#워크플로우자동화-이전)
- [연락처 이전](#연락처-이전)
- [추가 이전 고려사항](#추가-이전-고려사항)
- [자주 묻는 질문](#자주-묻는-질문)

# 사용자 이전

Calendly는 조직(에이전시 레벨) 내에서 여러 사용자를 지원합니다. 각 사용자는 개별 Calendly 계정과 페이지, 그리고 할당된 이벤트 유형을 가집니다.

Calendly 조직의 관리자와 소유자는 조직 구성원 목록을 다운로드할 수 있으며, 이 목록은 모든 구성원의 정보를 포함합니다. 이 목록을 통해 사용자들이 Hyperclass 하위 계정에 올바르게 추가되었는지 확인할 수 있습니다.

### **1단계:** Calendly 사용자 목록 내보내기

- **Calendly 로그인:** Calendly 페이지 우측 상단에서 Account > Users를 선택합니다. Export를 클릭하면 CSV 파일이 다운로드됩니다.

### **2단계:** Hyperclass 하위 계정에 사용자 추가 및 할당

- **Hyperclass 로그인:** Agency Settings(에이전시 설정) > Team(팀)으로 이동합니다. Calendly의 사용자들이 Hyperclass 하위 계정에 추가되고 할당되었는지 확인합니다.

- + Add Employee(직원 추가)를 사용하여 누락된 사용자를 추가합니다. Calendly 내보내기 파일을 참조하여 사용자 역할을 결정하세요.

![사용자 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032351762/original/syJARtn1yQfzWRaR6sSqpuQ_vrIKJ4Nh0Q.png?1725552971)

---

# 캘린더 설정 이전

Calendly는 Google 캘린더, Outlook, iCloud 캘린더와 동기화하여 사용자의 가용성을 기반으로 이벤트를 예약합니다. Hyperclass도 중복 예약을 방지하는 유사한 기능을 제공합니다.

### **중요:** 이전하는 각 사용자에 대해 다음 단계를 수행하세요.

### **1단계:** Calendly에서 Google 캘린더 연결 해제

- **캘린더 동기화 설정 접근:** Calendly에서 Account > Calendar Sync로 이동합니다.

- **캘린더 연결 해제:** Calendly에서 Google 캘린더/Outlook 캘린더 연결을 해제합니다.

### **2단계:** Hyperclass에 Google 캘린더 연결

- **연동으로 이동:** Hyperclass에서 Settings(설정) > Integrations(연동)으로 이동합니다.

- **Google 캘린더 및 Outlook 연결:** Google을 선택하고 안내에 따라 로그인하여 캘린더를 연결합니다. Hyperclass는 Google 캘린더의 가용성을 기반으로 충돌을 확인합니다.

- **동기화 기본 설정:** Calendars(캘린더) > Calendar Settings(캘린더 설정) > Connections(연결)로 이동합니다. Calendly에서 설정한 것과 유사하게 취소 동기화 및 기타 기본 설정을 구성합니다.

### **3단계:** 이전 후 확인

- **캘린더 동기화 테스트:** Google에서 테스트 이벤트를 예약하고 Hyperclass 캘린더에서 차단된 것으로 나타나는지, 그리고 Google 캘린더의 기존 바쁜 이벤트가 Hyperclass 캘린더에서 존중되는지 확인합니다.

![캘린더 연결 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032351757/original/kppG7-3Whe8ttZmUxdwwSnWgEanW4UliuA.png?1725552970)

---

# 예약 가능 시간 설정 이전

Calendly는 시간 증분, 가용성, 시간대 관리를 포함한 여러 예약 설정을 제공합니다. 예약의 일관성을 유지하려면 이러한 설정을 Hyperclass에서 복제해야 합니다.

### **1단계:** 예약 설정 문서화

- **기존 설정 검토:** Calendly에서 현재 예약 설정을 문서화합니다. 여기에는 가능한 시간, 버퍼 시간, 최소 예고 시간, 일일 제한, 시간대 표시 설정이 포함됩니다.

### **2단계:** Hyperclass에서 예약 설정

- **예약 가능 시간 설정:** Hyperclass에서 생성한 특정 캘린더 아래의 Availability(예약 가능 시간) 설정으로 이동합니다. Calendly에서 문서화한 설정에 따라 가능한 시간, 버퍼 시간, 일일 제한을 설정합니다.

- **시간대 설정:** Hyperclass 로케이션과 사용자 프로필에서 시간대가 올바르게 구성되어 Calendly에서 사용한 표시 설정과 일치하는지 확인합니다.

### **3단계:** 이전 후 확인

- **가용성 확인:** Hyperclass의 캘린더를 확인하여 가능한 시간이 Calendly에서 설정한 것과 일치하고, 버퍼 시간 및 기타 제한사항이 올바르게 적용되었는지 확인합니다.

---

# 화상 회의 설정

Calendly는 Zoom과 연동하여 예약된 이벤트에 대해 자동으로 미팅 링크를 생성합니다. 이 기능은 Hyperclass에서도 동일하게 구현할 수 있습니다.

### 1단계: Calendly에서 Zoom 연결 해제

- **연동 접근:** Calendly에서 Integrations > Zoom으로 이동합니다.

- **Zoom 연결 해제:** 단계에 따라 Calendly에서 Zoom 계정 연결을 해제합니다.

### 2단계: Hyperclass에 Zoom 연결

- **연동으로 이동:** Hyperclass에서 Settings(설정) > Calendar(캘린더) > Connections(연결)로 이동합니다.

- **Zoom 연결:** Zoom을 선택하고 계정에 로그인합니다. Hyperclass가 Zoom 계정에 액세스할 수 있도록 권한을 부여합니다.

- **Zoom을 기본 위치로 설정:** 해당하는 경우 Hyperclass의 캘린더 설정에서 Zoom을 예약의 기본 위치로 설정합니다.

![Zoom 연결 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032351760/original/3jGcZDKJY2YWNHrNAVmNcKk9rpLEMjK5Iw.png?1725552970)

---

# 결제 수집 설정

Calendly의 모든 이벤트 유형은 결제를 지원합니다. 개인 이벤트 유형(일대일 및 그룹)은 귀하의 Stripe 계정에 연결되고, 팀 이벤트 유형(라운드 로빈 및 공동)은 Calendly 소유자의 Stripe 계정에 연결됩니다. 여러 Stripe 계정 연결을 지원하기 위해 추가 로케이션을 생성하도록 고객을 안내하세요.

### **1단계:** Calendly에서 Stripe 연결 해제

- **Calendly 로그인:** Calendly 계정에서 Stripe를 완전히 연결 해제하려면 Integrations 페이지를 방문하여 Stripe 옵션을 선택하고 Disconnect를 클릭합니다.

**중요:** Calendly 계정에서 결제를 받는 모든 이벤트 유형은 Stripe 연결이 해제되면 무료가 됩니다.

### **2단계:** Hyperclass에서 Stripe 연결

- **Hyperclass 하위 계정 로그인:** 하위 계정에서 Payments(결제) 탭 > Integration(연동)으로 이동하여 먼저 결제 게이트웨이를 추가합니다.

### **3단계:** 캘린더에서 결제 수집 활성화

- [Hyperclass 캘린더에 결제 솔루션을 연결하는 방법을 알아보려면 여기를 클릭하세요.](../../04-캘린더-예약/캘린더-설정/collecting-payments-in-calendars.md)

---

# 캘린더(이벤트 유형) 이전

Calendly에서 캘린더는 이벤트 유형이라고 부릅니다. 이는 미팅 예약, 결제 수집, 연락처로부터 추가 정보 수집에 사용됩니다. Hyperclass에서는 예약 시스템을 통해 유사한 기능을 구현합니다.

### **1단계:** 이벤트 유형 문서화

- **이벤트 유형 목록:** Calendly에서 생성한 각 이벤트 유형을 식별하고 문서화합니다. 이름, 지속 시간, 위치, 관련 설정을 포함하세요.

- **세부 사항 기록:** 버퍼 시간, 최소 예고 시간, 일일 제한, 그리고 초대자로부터 추가 정보를 수집하는 데 사용되는 커스텀 필드 등의 세부 사항을 포함하세요.

### **2단계:** Hyperclass에서 이벤트 유형 재생성

- **Hyperclass 캘린더 접근:** Hyperclass에서 Calendars(캘린더) > Calendar Settings(캘린더 설정)으로 이동합니다.

- **새 예약 유형 생성:** Create New Calendar(새 캘린더 생성)를 선택하여 새로운 예약 유형 설정을 시작합니다.

- **예약 세부 사항 구성:** 이름, 지속 시간, 위치(Date-Specific Hours), 버퍼 시간, 최소 예고 시간, 일일 제한 등의 설정을 구성합니다. 캘린더에 팀 구성원을 추가합니다. 이는 Calendly의 이벤트 유형 설정에 해당합니다.

- **커스텀 필드:** Calendly 이벤트 유형이 추가 정보(예: 질문 또는 양식)를 수집했다면, [Hyperclass 폼에서 커스텀 필드로 재생성하는 방법을 알아보려면 여기를 클릭하세요.](../../06-사이트/폼/how-to-quickly-add-and-edit-custom-fields-in-forms-and-surveys.md)

### **3단계:** 예약 링크 공유

- **링크 생성 및 공유:** 각 예약 유형 설정 후, Hyperclass에서 해당 예약 링크를 생성합니다. 이 링크를 팀과 공유하거나 웹사이트 및 이메일에 삽입하여 기존 Calendly 링크를 대체합니다.

### **4단계:** 이전 후 확인

- **예약 프로세스 테스트:** 새로운 Hyperclass 예약 링크를 통해 테스트 예약을 수행하여 예약 프로세스가 예상대로 작동하는지 확인합니다. 모든 설정(예: 버퍼 시간, 양식 질문, 알림, Zoom 링크)이 올바르게 작동하는지 확인합니다.

![캘린더 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032351761/original/ScGEc9WgdTz4kwEmS8Ba16gVHonecfxvew.png?1725552970)

---

# 워크플로우(자동화) 이전

Calendly 워크플로우는 알림 이메일이나 후속 메시지 발송과 같은 작업을 자동화합니다. Hyperclass는 워크플로우 기능을 통해 유사한 자동화 기능을 제공합니다.

### **1단계:** 기존 워크플로우 문서화

- **Calendly 워크플로우 검토:** [Calendly 홈 페이지](https://calendly.com/event_types/user/me)에서 왼쪽 네비게이션 패널의 [Workflows](https://calendly.com/app/workflows/user/me)를 선택합니다. Calendly에서 설정한 워크플로우를 문서화합니다. 트리거(예: 이벤트 생성, 이벤트 취소)와 액션(예: 이메일 발송, SMS 발송)을 포함하세요.

### **2단계:** Hyperclass에서 워크플로우 재생성

- **워크플로우 접근:** Hyperclass에서 Automation(자동화) > Workflows(워크플로우)로 이동합니다.

- **새 워크플로우 생성:** Create New Workflow(새 워크플로우 생성)를 선택하고 Calendly에서 문서화한 것과 일치하는 조건과 액션을 설정합니다. Hyperclass의 트리거 옵션을 사용하여 유사한 이벤트(예: 예약 완료, 예약 취소, 예약 노쇼)를 기반으로 워크플로우를 시작합니다.

- **메시지 커스터마이징:** 워크플로우의 일부인 이메일이나 SMS 메시지를 개인화를 위해 Hyperclass의 변수를 사용하여 커스터마이징합니다.

### **3단계:** 이전 후 확인

- **워크플로우 실행 테스트:** 테스트 예약을 생성하고 워크플로우가 예상대로 트리거되는지 관찰합니다. 메시지가 올바른 시간에 올바른 내용으로 발송되는지 확인합니다.

![워크플로우 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032354283/original/WxEkWAhpx4nr9l9l5UOo4xHVk9tUCfXxFA.png?1725555195)

---

# 연락처 이전

완전히 전환하기 전에 연락처 정보가 포함된 Calendly의 예약 데이터를 내보내서 마이그레이션 중에 아무것도 손실되지 않도록 하는 것이 중요합니다.

### **1단계:** 이벤트 세부 사항 내보내기

- **Calendly에서 이벤트 필터링:** Calendly에서 내보내야 할 이벤트를 필터링합니다(예: 지난 30일, 특정 이벤트 유형). [홈 페이지](https://calendly.com/event_types/user/me)에서 Meetings를 선택합니다.

- **CSV로 내보내기:** Scheduled Events 페이지 우측 상단에서 Export를 선택하여 이벤트 세부 사항을 CSV 형식으로 다운로드합니다. 이 파일에는 초대자 연락처 정보, 이벤트 유형, 날짜, 위치 등이 포함됩니다.

### **2단계:** CSV 데이터 준비 및 Hyperclass로 연락처 가져오기

- CSV를 통한 대량 가져오기 문제 해결

![연락처 가져오기 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032354461/original/Yn8DItbs2HVoVAC8gKufoDOIdtn9pWmoSw.png?1725555440)

---

# 추가 이전 고려사항

### **교육 및 지원**

- **내부 교육:** 팀원들에게 Hyperclass 사용법에 대한 교육 세션을 제공하며, Calendly와 다른 기능에 중점을 둡니다.

- **지원 액세스:** 고객의 팀이 예약 관련 질문이 있을 때 Hyperclass 지원 리소스에 액세스하는 방법을 알고 있는지 확인합니다.

### **다른 앱 마이그레이션**

- **Calendly는 단일 기능:** 고객의 기술 스택에 더 많은 도구가 있나요? 소프트웨어 가이드를 사용하여 고객이 다른 소프트웨어를 마이그레이션하도록 도와주세요.

![마이그레이션 가이드 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032354645/original/byIjL1ylRg8YBCgrVfejq3kwNWJOpHtwNQ.png?1725555667)

---

## 자주 묻는 질문

**Calendly에서 사용자 목록을 내보내려면 어떻게 하나요?**

Calendly에서 사용자 목록을 내보내려면 계정에 로그인하고 Account 섹션에서 Users로 이동한 후 Export 옵션을 선택하면 모든 사용자 세부 사항이 포함된 CSV 파일이 다운로드됩니다.

**Calendly에서 캘린더 연결을 해제하고 Hyperclass에 연결하려면 어떻게 하나요?**

캘린더 연결을 Calendly에서 Hyperclass로 이동하려면 먼저 Calendly 계정 설정을 열고 Calendar Sync 섹션으로 이동하여 현재 캘린더(Google 또는 Outlook 등)를 연결 해제합니다. 그 후 Hyperclass를 열고 Settings(설정) > Integrations(연동)로 이동하여 캘린더 계정을 연결합니다. 연결 후 Calendars(캘린더) > Calendar Settings(캘린더 설정) > Connections(연결)로 이동하여 동기화 기본 설정을 구성하여 모든 것이 올바르게 작동하도록 합니다.

**Hyperclass 하위 계정에 사용자를 추가하고 할당하려면 어떻게 하나요?**

Hyperclass 하위 계정에 사용자를 추가하고 할당하려면 Hyperclass에서 Agency Settings(에이전시 설정) > Team(팀)으로 이동하여 이미 시스템에 있는 사용자를 확인하고, + Add Employee(직원 추가) 버튼을 사용하여 Calendly 내보내기를 기반으로 누락된 사용자를 추가합니다.

**Calendly 구성과 일치하도록 Hyperclass에서 예약 가능 시간 설정을 하려면 어떻게 하나요?**

Calendly 구성과 일치하는 Hyperclass의 예약 가능 시간 설정을 하려면 먼저 가능한 시간과 버퍼 시간 등의 기존 Calendly 설정을 문서화한 후, Hyperclass에서 특정 캘린더의 Availability(예약 가능 시간) 설정으로 이동하여 문서화한 설정과 일치하도록 구성합니다.

**화상 회의를 위해 Hyperclass와 Zoom을 연동하려면 어떻게 하나요?**

화상 회의를 위해 Hyperclass와 Zoom을 연동하려면 먼저 Calendly에서 Integrations > Zoom으로 이동하여 Zoom을 연결 해제합니다. 그 후 Hyperclass에서 Settings(설정) > Calendar(캘린더) > Connections(연결)로 이동하여 Zoom을 선택하고 로그인한 후 필요한 경우 기본 위치로 설정합니다.

**Hyperclass에서 Stripe를 사용한 결제 수집을 설정하려면 어떻게 하나요?**

Hyperclass에서 Stripe를 사용한 결제 수집을 설정하려면 먼저 Calendly에서 Integrations > Stripe로 이동하여 Disconnect를 클릭하여 Stripe를 연결 해제합니다. 그 후 Hyperclass에서 Payments(결제) 탭 > Integration(연동)으로 이동하여 Stripe를 추가하고 캘린더에서 활성화합니다.

**Calendly의 이벤트 유형을 Hyperclass에서 재생성하려면 어떻게 하나요?**

Calendly의 이벤트 유형을 Hyperclass에서 재생성하려면 이름, 지속 시간, 위치 등의 세부 사항을 포함한 기존 Calendly 이벤트 유형을 문서화한 후, Hyperclass에서 Calendars(캘린더) > Calendar Settings(캘린더 설정)로 이동하여 새 캘린더를 생성하고 문서화한 내용과 일치하도록 세부 사항을 구성합니다.

**워크플로우(자동화)를 Calendly에서 Hyperclass로 마이그레이션하려면 어떻게 하나요?**

워크플로우(자동화)를 Calendly에서 Hyperclass로 마이그레이션하려면 트리거와 액션을 포함한 Calendly 워크플로우를 문서화한 후, Hyperclass에서 Automation(자동화) > Workflows(워크플로우)로 이동하여 일치하는 트리거와 액션으로 새 워크플로우를 생성합니다.

**Calendly에서 연락처 데이터를 내보내고 Hyperclass로 가져오려면 어떻게 하나요?**

Calendly에서 연락처 데이터를 내보내고 Hyperclass로 가져오려면 먼저 Calendly에서 Home > Meetings로 이동하여 이벤트를 필터링하고 Export를 선택하여 연락처 세부 정보가 포함된 CSV를 다운로드합니다. 그 후 CSV를 준비하고 Hyperclass의 연락처 대량 가져오기 프로세스를 따릅니다.

**모든 것이 올바르게 작동하는지 확인하기 위해 수행해야 할 주요 이전 후 확인 사항은 무엇인가요?**

연결된 캘린더에서 테스트 이벤트를 예약하고 Hyperclass에 나타나는지 확인하여 캘린더 동기화를 테스트합니다. 예약 가능 시간 설정이 이전 구성과 일치하는지 확인합니다.

테스트 예약을 통해 워크플로우, 알림, 연동(예: Zoom, Stripe)이 올바르게 작동하는지 확인합니다. 연락처가 올바르게 가져와졌는지 확인합니다.

**마이그레이션하는 동안 여러 Hyperclass 하위 계정에서 동일한 Calendly 계정을 사용할 수 있나요?**

네. 속해 있는 각 Hyperclass 하위 계정에서 동일한 Calendly 계정을 연결할 수 있습니다. 각 사용자는 하위 계정당 하나의 Calendly 계정만 연결할 수 있습니다.

---
*원문 최종 수정: Tue, 23 Dec, 2025 at 8:23 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*