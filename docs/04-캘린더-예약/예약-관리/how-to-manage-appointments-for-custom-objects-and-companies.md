---
원문: https://hyperclass.gitbook.io/hyperclass-docs/support/solutions/articles/155000009393-how-to-manage-appointments-for-custom-objects-and-companies
번역일: 2026-11-02
카테고리: 04-캘린더-예약 > 예약-관리
---

# 커스텀 오브젝트 및 회사 레코드에서 예약 관리하는 방법

하이퍼클래스의 커스텀 오브젝트(Custom Object) 및 회사(Company) 레코드에서 직접 예약(Appointment)을 관리할 수 있습니다. 예정된 예약과 지난 예약을 확인하거나, 새로운 미팅을 예약하거나, 기존 예약을 연결할 수 있습니다. 매물 조회, 보험 갱신 미팅, 회사 계정 검토 등을 관련된 레코드와 계속 연결된 상태로 유지하세요. 이 가이드에서는 예약 조회, 예약하기, 예약 연결하기 방법을 다룹니다.

**참고:** 이 기능은 비공개 베타(Private Beta)에 등록된 로케이션(Location)에서만 사용할 수 있어요.

---

**목차**

- 커스텀 오브젝트 및 회사의 예약이란 무엇인가요?
- 레코드 단위 예약의 주요 장점
- 사전 요구 사항 및 제한 사항
- 레코드 단위 예약 관리 방법
- 자주 묻는 질문

---

# **커스텀 오브젝트 및 회사의 예약이란 무엇인가요?**

레코드 단위 예약을 사용하면 커스텀 오브젝트(Custom Object)나 회사(Company)와 연관된 미팅을 관리할 수 있어요. 예를 들어 부동산 매물(Property) 레코드에서는 예정된 조회(Viewing) 일정을, 회사(Company) 레코드에서는 계정 검토 미팅을 확인할 수 있습니다.

**예약(Appointments)** 탭에는 선택한 레코드와 연결된 **예정된 예약(Upcoming)**과 **지난 예약(Past)**이 표시됩니다. 예약 내역을 확인하거나, 새 미팅을 생성하거나, 같은 로케이션(Location) 내 다른 곳에서 예약된 일정을 연결할 수 있어요.

---

## **레코드 단위 예약의 주요 장점**

예약을 CRM 레코드와 연결하면 팀에서 미팅 이력과 일정 관리 작업을 한곳에서 처리할 수 있어요.

- **통합 이력 관리:** 각 레코드별로 예정된 예약과 지난 예약을 한눈에 확인할 수 있어요.
- **맥락 안에서 바로 예약:** 커스텀 오브젝트 및 회사 레코드에서 바로 미팅을 예약할 수 있어요.
- **자동 레코드 선택:** 레코드에서 시작한 미팅은 **연관된 오브젝트(Associated objects)** 항목에 해당 레코드가 미리 선택되어 있어요.
- **기존 예약 연결:** 이미 예약되어 있는 일정을 중복 생성 없이 연결할 수 있어요.
- **빠른 검색:** 캘린더(Calendar) 이름으로 예약 목록을 빠르게 좁혀볼 수 있어요.
- **유연한 연관 관계:** 미팅을 확정하기 전에 지원되는 다른 레코드를 추가로 검토하고 선택할 수 있어요.

---

## **사전 요구 사항 및 제한 사항**

이 기능은 비공개 베타(Private Beta)에 참여 중인 로케이션(Location)에서만 사용할 수 있어요. 해당 커스텀 오브젝트 또는 회사 레코드에 접근 권한이 있어야 합니다.

- 로케이션에서 **예약(Appointments)** 탭이 활성화되어 있어야 해요.
- 미팅을 예약하려면 캘린더(Calendar), 날짜, 시간, 연락처(Contact)가 필요해요.
- 기존 예약은 같은 하이퍼클래스 로케이션 내에서 연결할 수 있어요.
- 레코드에서 미팅(Meeting)을 시작하면 현재 레코드가 **연관된 오브젝트(Associated objects)**에 미리 선택되어 있어요.
- **서비스(Services)**는 추가(Add) 메뉴에서 선택할 수 있지만, 이후 예약 단계는 미팅(Meeting)과 다를 수 있어요.

---

## **레코드 단위 예약 관리 방법**

미팅이 필요한 커스텀 오브젝트 또는 회사 레코드에서 시작하세요. 예약(Appointments) 탭을 사용해 예약 내역을 확인하거나, 새 예약을 생성하거나, 기존 미팅을 연결할 수 있습니다.

### **커스텀 오브젝트 레코드에서 예약 열기**

커스텀 오브젝트 레코드는 해당 레코드와 연관된 예약을 표시할 수 있어요. **예정된 예약(Upcoming)**과 **지난 예약(Past)** 보기를 사용해 일정 이력을 확인하세요.

- 하이퍼클래스 **하위 계정(Sub-Account)** 화면을 엽니다.
- 왼쪽 네비게이션(Navigation)에서 **매물(Properties)**이나 **보험 상품(Insurance Policies)**과 같은 해당 커스텀 오브젝트 유형을 선택하세요.
- 확인하려는 레코드를 엽니다.
- 레코드의 사이드 패널에서 **예약(Appointments)**을 선택하세요.
- **예정된 예약(Upcoming)**과 **지난 예약(Past)** 사이를 전환하며 연결된 예약을 확인하세요.
- **캘린더 이름으로 검색(Search by Calendar Name)**을 사용해 목록을 필터링하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084173375/original/zvjwA5FCeSThXH_qQ0KVHd3ZZDXzxBx72w.png?1793005205)

**참고:** 예약(Appointments) 탭에는 선택된 레코드와 연관된 예약만 표시돼요. 로케이션 내 다른 예약은 이 탭에 표시되려면 먼저 연결해야 할 수 있습니다.

### 
회사 레코드에서 예약 열기

회사(Company) 레코드에서도 동일한 예약 관리 워크플로우를 사용할 수 있어, 계정 검토 등 관련 미팅을 해당 비즈니스와 계속 연결된 상태로 유지할 수 있어요.

- 하이퍼클래스 **하위 계정(Sub-Account)** 화면을 엽니다.
- 왼쪽 네비게이션에서 **연락처(Contacts)**를 선택하세요.
- **회사(Companies)** 탭을 선택하세요.
- 확인하려는 회사 레코드를 찾아서 엽니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084258313/original/wqWupyGegqTLZVPb8n7Bv7p3gzVEmtRqAQ.png?1793066597)

- 회사 레코드 오른쪽 사이드 패널에서 세로 탭 목록을 찾으세요.
- 캘린더 아이콘을 선택해 **예약(Appointments)**을 엽니다.
- 해당 회사와 연관된 **예정된 예약(Upcoming)**과 **지난 예약(Past)**을 확인하세요.
- 필요하면 **캘린더 이름으로 검색(Search by Calendar Name)**을 사용해 목록을 좁혀보세요.

### 
새 미팅 예약하기

레코드에서 미팅(Meeting)을 시작하면 예약을 진행하는 동안 해당 레코드가 계속 선택된 상태로 유지돼요. 예약을 확정하기 전에 추가 연관 관계를 검토할 수 있습니다.

- 하이퍼클래스 **하위 계정(Sub-Account)** 화면에서 해당 커스텀 오브젝트 레코드를 열거나, **연락처(Contacts) > 회사(Companies)**로 이동해 회사 레코드를 엽니다.
- 사이드 패널에서 **예약(Appointments)**을 선택하세요.
- **추가(Add)**를 클릭하세요.
- **미팅(Meetings)**을 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084258414/original/E2sAT7zUnaNoTSIPtw5_vbY9OBmLk9jKGA.png?1793067060)

- 미팅에 사용할 캘린더(Calendar)를 선택하세요.
- 예약 날짜와 시간을 선택하세요.
- 미팅에 참석할 **연락처(Contact)**를 선택하세요.
- 예약 제목, 미팅 장소, 상태 등 필요한 세부 정보를 확인하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084173379/original/Rtp8O30K6DSkKpqQkWVsZY8S9x8UY_32wQ.png?1793005205)

### 
연관된 오브젝트 확인 및 예약 완료

**연관된 오브젝트(Associated objects)** 선택기는 어떤 CRM 레코드가 해당 미팅과 연결되는지를 제어해요. 시작한 레코드는 미리 선택되어 있습니다.

- 예약 양식에서 **연관된 오브젝트(Associated objects)**를 엽니다.
- 현재 커스텀 오브젝트 또는 회사 레코드가 선택되어 있는지 확인하세요.
- 필요한 경우, 제공되는 레코드 유형 옵션과 검색 기능을 사용해 지원되는 다른 레코드를 추가로 선택하세요.
- 선택된 연관 관계를 검토하세요.
- **예약하기(Book appointment)**를 클릭해 예약을 확정하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084173378/original/3aYdMDD-f5KEf5EcxGuQF7Om5bOsKvaSiQ.png?1793005206)

### 
서비스 예약 시작하기

같은 추가(Add) 메뉴에서 커스텀 오브젝트나 회사 레코드로부터 서비스(Service) 예약을 시작할 수도 있어요.

- 하이퍼클래스 **하위 계정(Sub-Account)** 화면을 엽니다.
- 해당 커스텀 오브젝트 레코드를 열거나, **연락처(Contacts) > 회사(Companies)**로 이동해 회사 레코드를 엽니다.
- 사이드 패널에서 **예약(Appointments)**을 선택하세요.
- **추가(Add)**를 클릭하세요.
- **서비스(Services)**를 선택하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084258386/original/O17P7IK7LR_Bx3imObC4kyUdh8QObCJYKA.png?1793066970)

### 
기존 예약 연결하기

이미 예약된 미팅이 있다면 중복 생성하지 말고 해당 예약을 레코드에 연결하세요. 검색 범위에는 현재 하이퍼클래스 로케이션 내 예약이 포함됩니다.

- 하이퍼클래스 **하위 계정(Sub-Account)** 화면에서 해당 커스텀 오브젝트 레코드를 열거나, **연락처(Contacts) > 회사(Companies)**로 이동해 회사 레코드를 엽니다.
- 레코드의 사이드 패널에서 **예약(Appointments)**을 선택하세요.
- **추가(Add)**를 클릭하세요.
- **기존 예약 연결(Link existing appointment)**을 선택하세요.
- 현재 로케이션 내에서 예약을 검색하세요.
- 해당 예약을 찾아서 **연결(Link)**을 클릭하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084258195/original/i7dtfu7O42kKgTTBTnse6RDQ3aRWbBiLcg.png?1793065926)

---

## **자주 묻는 질문**

**Q: 예약(Appointments) 탭이 비어 있어요.**

예약(Appointments) 탭에는 현재 레코드와 연관된 예약만 표시돼요. 예정된 예약(Upcoming)과 지난 예약(Past)을 모두 확인하고, 캘린더 이름 검색 필터가 적용되어 있다면 해제해보세요. 예약은 존재하지만 연결되어 있지 않다면 기존 예약 연결(Link existing appointment) 기능을 사용하세요.

**Q: 로케이션 내 다른 곳에서 예약한 일정도 연결할 수 있나요?**

네, 가능해요. **추가(Add) > 기존 예약 연결(Link existing appointment)**을 사용하면 새 예약을 만들지 않고도 같은 로케이션 내 기존 예약을 연결할 수 있어요.

**Q: 미팅을 예약할 때 현재 레코드가 자동으로 연결되나요?**

현재 커스텀 오브젝트 또는 회사 레코드는 **연관된 오브젝트(Associated objects)**에 미리 선택되어 있어요. 예약을 확정하기 전에 선택 내역을 꼭 확인하세요.

**Q: 하나의 미팅을 여러 유형의 레코드와 연관시킬 수 있나요?**

네, 가능해요. **연관된 오브젝트(Associated objects)** 선택기는 회사(Companies), 커스텀 오브젝트 레코드 및 기타 지원되는 레코드 유형을 지원해요.

**Q: 예약(Appointments) 탭이 보이지 않아요.**

이 기능은 비공개 베타(Private Beta) 단계예요. 소속 로케이션이 베타에 등록되어 있는지, 그리고 기능이 활성화되어 있는지 확인해보세요.

---
*원문 최종 수정: 2026-10-27*
*Hyperclass 사용 가이드 — hyperclass.ai*