---

번역일: 2026-04-06
카테고리: 04-캘린더-예약
---

# 예약 노트 작성, 관리 및 레코드 간 동기화하는 방법

핵심 내용을 한 번만 기록하고 어디서든 함께 활용하세요. Hyperclass에서는 예약(Appointment) 노트가 관련된 연락처(Contact), 기회(Opportunity), 대화(Conversation) 레코드에 자동으로 표시되어 모든 팀원이 같은 정보를 볼 수 있습니다. 이 가이드에서는 노트를 작성, 관리, 필터링하는 방법과 구글/아웃룩과 동기화되는 항목과 내부 전용 항목을 구분하여 설명합니다. 업무 인수인계를 원활하게 하고 중복 입력을 줄이며 모든 상호작용을 실행 가능하게 만드세요.

---

**목차**

- [Hyperclass의 예약 노트란?](#hyperclass의-예약-노트란)
- [예약 노트의 주요 장점](#예약-노트의-주요-장점)
- [다양한 모듈 간 노트 흐름](#다양한-모듈-간-노트-흐름)
- [예약 노트 추가, 확인 및 관리 방법](#예약-노트-추가-확인-및-관리-방법)
- [예약 노트 관리](#예약-노트-관리)
- [자주 묻는 질문](#자주-묻는-질문)

---

# Hyperclass의 예약 노트란?

예약 노트는 Hyperclass의 단일 캘린더 이벤트에 연결된 내부 컨텍스트를 기록합니다. 노트를 추가하면 관련된 연락처(Contact), 기회(Opportunity), 대화(Conversation) 레코드에서 자동으로 확인할 수 있습니다.

예약 노트를 수정하거나 삭제하면 해당 노트가 표시되는 모든 곳에 반영되므로 다시 입력하거나 버전을 맞출 필요가 없습니다. 각 노트에는 작성자와 작성 시간이 기록되어 책임 소재와 업무 인수인계를 지원합니다. 노트는 Hyperclass 내부 전용이며, 외부 캘린더 설명과는 별도로 관리됩니다.

예약의 노트 영역에서는 세 가지 유형의 콘텐츠를 확인할 수 있습니다: **사용자가 추가한 노트**(연락처/기회/대화로 전파됨), 예약 폼의 **예약자 추가 정보**(**예약 모달에만** 표시), 양방향 동기화가 활성화된 경우 **구글/아웃룩 이벤트 설명**(**예약 모달에만** 표시). 내부 노트는 외부 캘린더와 **절대 동기화되지 않습니다**. 양방향 동기화 시 구글/아웃룩 설명만 예약으로 **동기화되어** 참고용으로 사용됩니다.

---

## 예약 노트의 주요 장점

이러한 장점을 이해하면 팀이 노트를 예약 컨텍스트의 공유 정보 소스로 활용할 수 있습니다.

- **일관성**: 예약에 연결된 하나의 노트가 연락처, 기회, 대화에 표시됩니다.

- **실시간 업데이트**: 한 번 편집하면 노트가 표시되는 모든 곳에 변경사항이 반영됩니다.

- **검색 가능성**: 소스별(사용자, 워크플로우, API) 필터링으로 중요한 항목에 집중할 수 있습니다.

- **책임 소재**: 각 노트에 작성자와 타임스탬프가 기록되어 명확한 소유권을 제공합니다.

---

## 다양한 모듈 간 노트 흐름

예약 노트는 연락처와 함께 이동하여 캘린더로 다시 돌아가지 않고도 같은 컨텍스트를 볼 수 있습니다. 예약에서 생성한 노트는 다른 곳에서 보는 것과 *동일한* 노트이며, 어떤 모듈에서 보거나 편집해도 같은 내용, 작성자, 타임스탬프가 표시됩니다.

- **연락처(Contacts):** **연락처(Contacts)** → 사람 선택 → 오른쪽 **노트(Notes)** 패널(및 **예약(Appointments)** 카드)에서 예약의 내부 노트를 확인하거나 편집할 수 있습니다.

- **대화(Conversations):** **대화(Conversations)** → 대화 선택 → 오른쪽 **노트(Notes)** 패널을 사용하여 해당 연락처에 연결된 예약 노트를 확인하거나 편집할 수 있습니다.

- **기회(Opportunities):** **기회(Opportunities)** → 관련 기회 클릭 → 드로어에서 **노트(Notes)**를 선택하여 해당 기회의 연락처에 연결된 예약 노트를 확인하거나 편집할 수 있습니다.

노트는 지원되는 레코드 간에 실시간으로 동기화되므로 팀은 모듈 간 컨텍스트를 수동으로 새로고침하지 않고도 항상 최신 버전을 확인할 수 있습니다.

다음 표를 사용하여 어디에 무엇이 표시되는지 확인하세요:

| **입력 유형** | **예약 모달** | **연락처** | **기회** | **대화** |
|---|---|---|---|---|
| **내부 예약 노트 (사용자/워크플로우/API)** | ✔ | ✔ | ✔ | ✔ |
| **연락처 노트 (연락처에서 추가)** | — | ✔ | — | — |
| **예약자 추가 정보** | ✔ | — | — | — |
| **구글/아웃룩 이벤트 설명** | ✔ | — | — | — |

---

## 예약 노트 추가, 확인 및 관리 방법

팀이 어디서 작업하든 컨텍스트를 기록할 수 있는 가장 일반적인 경로를 다룹니다.

### **캘린더 보기(예약된 예약)에서**

- **캘린더(Calendars) → 캘린더 보기(Calendar View)**로 이동합니다.

![캘린더 보기 스크린샷](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058316171/original/3lABRxMABz2GdAjmNgSJrUWeqjx1ZhtJyQ.jpeg?1763046016)

- 예약을 클릭하여 열고 **노트(Notes)** 탭을 선택합니다. **내부 노트 추가(Add Internal Note)**를 클릭하고 노트를 입력한 후 **저장(Save)**합니다.

![노트 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058316247/original/gK20-NRn1D44NPPU22r7Hx9Mcp4-OSEung.jpeg?1763046062)

![노트 작성 에디터](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058318997/original/FssWJHbNruJmGMvPzoxmk7WjdSnHUzc2bQ.png?1763047372)

### **예약 목록 보기(예약된 예약)에서**

- **캘린더(Calendars) → 예약 목록 보기(Appointment List View)**로 이동합니다.

![예약 목록 보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058316455/original/Ahg24nQWy2bV_KXGUFhilpH1ib0OiwcjqQ.png?1763046159)

- 예약을 찾아 **⋮** 메뉴를 클릭한 후 **편집(Edit)**을 선택합니다. **세부사항 편집(Edit Details) → 내부 노트(Internal Note(s))**에서 **내부 노트 추가(Add Internal Note)**를 클릭하고 입력한 후 **저장(Save)**합니다.

![편집 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058316532/original/-sjvkPVFOUQXruLDkETuXj94f2TqOKm61g.png?1763046185)

### **고객 예약 시(추가 정보 필드)**

- 캘린더 폼에 **추가 정보(Additional Information)** 항목이 포함되어 있으며, 고객이 입력한 내용이 예약 컨텍스트로 표시됩니다.

![추가 정보 필드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058317107/original/b6vjMEETmkR5AdDzaLC4VoGSUQ0CmkptFg.jpeg?1763046480)

### **내부 노트 추가(에디터 및 상태)**

노트를 작성하고 필요한 경우 같은 패널에서 예약 상태를 업데이트하여 컨텍스트와 미팅 라이프사이클을 동기화합니다.

- **캘린더 보기(Calendar View)** 또는 **예약 목록 보기(Appointment List View)**에서 예약을 열고 **내부 노트 추가(Add Internal Note)**를 클릭합니다.

![내부 노트 추가 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058317586/original/hAS0EHyJB_x-jVcqsek-QYQjPOTD8ddWeA.png?1763046756)

- 노트를 입력합니다. 서식(굵게, 기울임꼴, 밑줄, 목록, 링크)을 사용할 수 있습니다. 에디터는 최대 65,000자까지 지원합니다.

![노트 에디터](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058317741/original/gGG2xKDR3gP1pX-BaIWuJm1rm4UtpznYVg.png?1763046809)

---

## 예약 노트 관리

바쁜 일정에서 노트를 쉽게 찾고 제어할 수 있게 합니다.

### **소스별 필터링**

- **내부 노트(Internal Note(s))**에서 **필터(filter)** 아이콘을 클릭하고 **사용자(User)**, **API**, **워크플로우(Workflow)** 중에서 선택합니다. 여러 항목을 동시에 선택할 수 있습니다.

![필터 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058318111/original/np4IdFXlnFbldmr_bIUU_DtoDxL5wxxG4w.png?1763046975)

### **노트 정렬**

- **정렬(sort)** 아이콘을 클릭하여 **생성일(Date created)**(오름차순/내림차순)로 정렬합니다.

![정렬 옵션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058318173/original/CawJEeY8WmDd3ZSj7ZrUK5H-pL2j4772JA.png?1763047007)

### **노트 검색**

- **내부 노트(Internal Note(s))**의 **검색(Search)** 필드를 사용하여 해당 예약의 노트에서 키워드를 찾을 수 있습니다.

![검색 필드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058318272/original/ZuQ1fWx1SJGu5hobm34NuT_cR9oM750kTw.png?1763047034)

### **상태**

- **예약 목록 보기(Appointment List View)** 탭(**예정(Upcoming), 취소됨(Cancelled), 전체(All)**)이나 편집 세부사항 패널의 **상태(Status)** 필드를 사용하여 예약을 탐색합니다. 노트는 예약 상태에 관계없이 접근 가능하며, 상태 변경 시에도 노트가 삭제되지 않습니다.

![상태 탭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058318438/original/2afYjsqtHL4cpdhJCEAtiqOPWc4DyIj5ZQ.png?1763047136)

### **노트 삭제 또는 편집(⋮ 메뉴)**

- 예약 열기 → **내부 노트(Internal Note(s))**. 노트 카드에서 **⋮**(점 세 개) 메뉴를 클릭하여 노트를 **편집(Edit)** 또는 **삭제(Delete)**합니다. 노트를 삭제하면 해당 노트가 표시되던 연락처, 기회, 대화에서 제거되며, **30일 이내에 복원**할 수 있습니다.

![노트 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058318524/original/cGyWQHPrCfbLbkHPuJfJlwKqXWxZA6luzw.png?1763047179)

---

## 자주 묻는 질문

**Q: 내부 예약 노트, 예약자 추가 정보, 구글/아웃룩 이벤트 설명 간의 실질적인 차이점은 무엇인가요?**

**내부 예약 노트**는 Hyperclass에서 사용자/워크플로우/API로 생성되며 관련된 연락처, 기회, 대화로 **전파**됩니다. **예약자 추가 정보**는 고객이 예약 시 제공하며 **해당 예약에만** 남습니다. **구글/아웃룩 이벤트 설명**(양방향 동기화 시)은 **예약에** 외부 컨텍스트로 나타나며 다른 모듈로 푸시되거나 내부 노트를 대체하지 않습니다.

**Q: 연락처/기회/대화 보기에서 예약 노트를 편집하면 예약도 업데이트되나요?**

네. 여러 곳에서 참조되는 같은 노트입니다. 어떤 화면에서든 편집하거나 삭제하면 예약을 포함하여 해당 노트가 나타나는 모든 곳에서 업데이트됩니다.

**Q: 예약을 재조정하거나 취소하면 노트는 어떻게 되나요?**

노트는 예약 레코드에 첨부된 상태로 유지되며 이 문서의 규칙에 따라 표시됩니다. **상태**(확인됨(Confirmed), 취소됨(Cancelled), 참석(Showed), 불참(No Show), 유효하지 않음(Invalid), 미확인(Unconfirmed)) 변경은 노트를 제거하지 **않습니다**.

**Q: 반복 예약이나 복제된 예약에서 노트는 어떻게 작동하나요?**

노트는 특정 예약 인스턴스에 연결됩니다. 각각 고유한 컨텍스트가 필요한 인스턴스에 노트를 작성하세요. 노트는 새 이벤트나 복제된 이벤트로 자동 복사되지 않습니다.

---
*원문 최종 수정: Tue, 17 Mar, 2026 at 12:47 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*