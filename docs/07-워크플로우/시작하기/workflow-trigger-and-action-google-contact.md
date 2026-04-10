---

번역일: 2026-04-07
카테고리: 07-워크플로우 > 시작하기
---

# 워크플로우 트리거와 액션: Google 연락처

Hyperclass 워크플로우와 Google 연락처를 연결하여 CRM을 전문가처럼 자동화하세요. 새로운 네이티브 트리거와 액션으로 연락처와 그룹을 즉시 동기화하고, 생성하고, 업데이트할 수 있어 수동 데이터 입력과 중복 레코드를 제거합니다.

---

**목차**

- [워크플로우에서 Google 연락처 연동이란?](#워크플로우에서-google-연락처-연동이란)
- [Google 연락처 연동의 주요 이점](#google-연락처-연동의-주요-이점)
- [Google 연락처 트리거](#google-연락처-트리거)
- [Google 연락처 액션](#google-연락처-액션)
- [Google 연락처 시작하기](#google-연락처-시작하기)
- [Google 연락처 트리거는 어떻게 작동하나요?](#google-연락처-트리거는-어떻게-작동하나요)
- [예약에서 연락처 저장하기 사용 예시](#예약에서-연락처-저장하기-사용-예시)
- [폼 제출을 Google 연락처로 변환하기 사용 예시](#폼-제출을-google-연락처로-변환하기-사용-예시)
- [Notion 레코드에서 Google 연락처 생성하기 사용 예시](#notion-레코드에서-google-연락처-생성하기-사용-예시)
- [자주 묻는 질문](#자주-묻는-질문)
---

## **워크플로우에서 Google 연락처 연동이란?**

워크플로우의 Google 연락처 연동은 Hyperclass와 Google 연락처 간의 양방향 자동화를 제공합니다. 몇 번의 클릭으로 Google 연락처 내 변경사항에서 Hyperclass 워크플로우를 트리거하거나, Hyperclass에서 연락처 업데이트를 Google 주소록으로 직접 전송할 수 있습니다. 이를 통해 작업하는 모든 곳에서 고객 데이터를 일관되게 유지할 수 있습니다.

---

## **Google 연락처 연동의 주요 이점**

- 중복 입력 중단—연락처가 자동으로 동기화됩니다.

- 깨끗한 데이터베이스를 유지하고 중복을 방지합니다.

- 새로운 Google 연락처나 그룹이 생성되는 순간 개인화된 후속 조치를 트리거합니다.

- 서드파티 Zap과 웹훅을 제거하여 비용과 복잡성을 줄입니다.

- 5분마다 폴링하여 거의 실시간 정확성을 보장합니다.

---

## **Google 연락처 트리거**

Google 연락처 트리거는 Google의 이벤트가 Hyperclass 워크플로우를 시작하도록 합니다.

- **New Contact(새 연락처)** – Google 연락처에 새로운 연락처가 나타날 때 실행됩니다.

- **New Group(새 그룹)** – 누군가 Google 연락처에서 새 연락처 그룹을 만들 때 실행됩니다.

팀이 주로 Gmail/Google Workspace를 사용하지만 여전히 Hyperclass 자동화를 원할 때 이상적입니다.

---

## **Google 연락처 액션**

Google 연락처 액션은 Hyperclass 워크플로우가 해당 단계에 도달할 때마다 Google 내에서 실행됩니다.

- **Create Contact(연락처 생성)** – Google 연락처에 새로운 항목을 추가합니다.

- **Update Contact(연락처 업데이트)** – 전화번호, 이메일 또는 기타 필드를 최신 상태로 유지합니다.

- **Find Contact(연락처 찾기)** – 이름, 이메일 또는 전화번호로 검색합니다.

- **Find or Create Contact(연락처 찾기 또는 생성)** – 찾으면 업데이트하고 없으면 추가하여 중복을 안전하게 방지합니다.

- **Create Group(그룹 생성)** – 즉석에서 새로운 Google 연락처 그룹을 만듭니다.

- **Add Contact to Groups(그룹에 연락처 추가)** – 기존 연락처를 하나 또는 여러 그룹에 추가합니다.

---

## **Google 연락처 시작하기**

1. 워크플로우에서 검색: 워크플로우 빌더에서 Google 연락처 트리거나 액션을 검색합니다(예: "Find Contact", "Create Contact").

![Google 연락처 검색](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056230405/original/Zh0qay8B5Iot_uYeVWqFoVJx_EDInGvfcg.png?1760696641)

2. 계정 연결: Google 연락처가 이미 연결되어 있다면 바로 필드를 구성할 수 있습니다. 그렇지 않다면 Connect Now를 클릭하고 Google 계정으로 로그인하세요.

![Google 연락처 연결](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056229973/original/N1QE6DQ_Y5kWJP1M88G3uCKvJ-FN1IHWCw.png?1760696561)

3. 대체 방법: `Settings(설정) → Integrations(연동)`으로 이동합니다. Google Contacts를 찾아 액세스를 승인하세요.

연결되면 워크플로우에서 연락처를 원활하게 동기화하고, 찾고, 업데이트할 수 있습니다.

![Google 연락처 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056229595/original/vbT4lxtypXtRT6ep3h2x3ykFUGNWkqe_wQ.png?1760696497)

---

## **Google 연락처 트리거는 어떻게 작동하나요?**

Google 연락처 트리거는 폴링으로 작동합니다. Hyperclass는 정기적으로(보통 5분마다) Google에 요청을 보내 새로운 연락처나 그룹 추가를 확인합니다. 응답에 따라 워크플로우가 적절히 트리거됩니다.

**설정 단계:** 트리거를 선택합니다(예: New Contact 또는 New Group). 트리거 이름을 제공하고 Test Trigger를 클릭합니다. 커스텀 값을 통해 후속 액션에서 사용할 수 있는 메타데이터를 가져오려면 테스트가 필요합니다.

![Google 연락처 트리거 테스트](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056227698/original/Li2SzR84R-EhKtRffVKcL-uVkcac0SyxQA.png?1760695865)

---

## 예약에서 연락처 저장하기 사용 예시

사용 예시: 고객이 예약을 할 때 자동으로 Google 연락처에 추가하고 관련 그룹(예: "Consults", "Demos")으로 정리합니다.

**워크플로우 구성:**

- **트리거:** Appointment Booked(예약 완료)

- **필터:** Calendar = "Demo Calls"

- **액션:**
  - Find or Create Contact(연락처 찾기 또는 생성) (Google Contacts)
  - Add Contact to Groups(그룹에 연락처 추가) → 예: "Demo Leads"

예시: "Demo Calls" 캘린더를 통해 데모가 예약됨 → Hyperclass가 연락처 존재 여부 확인 → 없으면 생성 → Google 연락처의 "Demo Leads" 그룹에 연락처 추가.

![예약 연락처 저장 워크플로우](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050792392/original/l1odR_4jNjfQJfjGP1KgOOaz1TX3YjWc7w.png?1754047501)

---

## 폼 제출을 Google 연락처로 변환하기 사용 예시

사용 예시: 폼 제출에서 리드 데이터를 캡처하고 원활한 후속 조치를 위해 Google 연락처로 동기화합니다.

**워크플로우 구성:**

- **트리거:** Form Submitted(폼 제출)

- **필터:** Form Name = "Website Lead Form"

- **액션:**
  - Find or Create Contact(연락처 찾기 또는 생성)
  - Update Contact(연락처 업데이트) (새로운 정보로 재제출할 때)

예시: 사용자가 "Website Lead Form"을 제출 → Hyperclass가 이메일로 Google 연락처 확인 → 찾으면 업데이트, 없으면 새로 생성.

![폼 제출 연락처 워크플로우](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050792533/original/lbb35nWl1pI8V3oh60PFqgAMm_AU4o_7Xw.png?1754047591)

---

## Notion 레코드에서 Google 연락처 생성하기 사용 예시

사용 예시: Notion의 새 레코드에서 자동으로 Google 연락처를 생성합니다.

**워크플로우 구성:**

- **트리거:** Notion - New Database item(새 데이터베이스 항목)

- **데이터베이스:** "New users data"

- **액션:**
  - Find a record in database(데이터베이스에서 레코드 찾기)
  - Create Contact(연락처 생성)
  - Add Contact to Groups(그룹에 연락처 추가)

예시: Notion 데이터베이스에 새 레코드가 추가될 때마다 Google 연락처에 새 연락처가 생성됩니다. 새 레코드가 추가되면 워크플로우는 레코드에 "New user"라는 코멘트가 포함되어 있는지 확인합니다. 코멘트가 있으면 Google 연락처에 새 연락처가 자동으로 생성됩니다.

![Notion 연락처 생성 워크플로우](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050793042/original/KypZFs5mTPaa5274d712bhC4KdyEZOdWSQ.png?1754047933)

---

## **자주 묻는 질문**

**Q: 이미 Google 연락처에 있는 연락처를 업데이트할 수 있나요?**
네, "Update Contact" 액션을 사용하여 기존 연락처 레코드를 수정할 수 있습니다.

**Q: 이 기능이 작동하려면 유료 Google 계정이 필요한가요?**
아니요. Google 연락처에 액세스할 수 있는 모든 Gmail 계정에서 연동이 작동합니다.

**Q: 태그나 파이프라인 단계를 기반으로 연락처를 동적으로 그룹화할 수 있나요?**
물론입니다. 조건부 로직을 사용하고 태그를 Google 그룹에 매핑하여 동기화된 연락처를 동적으로 분할할 수 있습니다.

---
*원문 최종 수정: Mon, 8 Dec, 2025 at 12:47 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*