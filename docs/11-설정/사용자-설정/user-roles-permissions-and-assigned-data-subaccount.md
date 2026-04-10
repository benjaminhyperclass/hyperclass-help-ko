---

번역일: 2026-04-07
카테고리: 11-설정 > 사용자-설정
---

# 사용자 역할, 권한 및 본인 데이터 설정: 하위 계정

이 가이드에서는 Hyperclass에서 하위 계정(Sub-account) 수준의 사용자 역할(User Role)과 권한(Permission)을 관리하는 방법을 알려드립니다. 사용자가 접근할 수 있는 기능을 제한하고, 맞춤형 가시성 규칙을 설정하며, 음성 AI(Voice AI), 캘린더(Calendar), 워크플로우(Workflow) 등의 모듈에 대해 세부적인 권한을 설정하는 방법을 배워보세요.

에이전시(Agency) 수준의 사용자 역할과 권한 관리를 찾고 계신다면 [여기를 클릭하세요.](agency-managing-user-roles-permissions.md)

---

## 사용자 역할과 권한이란?

하위 계정의 사용자 역할과 권한은 Hyperclass의 특정 로케이션(Location) 내에서 사용자가 접근할 수 있는 기능을 결정합니다. 영업 담당자에게 제한된 가시성을 부여하거나 팀 리더에게 전체 관리자 접근 권한을 할당하는 경우에도, 사용자 역할을 통해 적절한 사람이 계정의 적절한 부분을 보고 제어할 수 있습니다. 각 사용자는 Admin(관리자) 또는 User(일반 사용자) 중 하나의 역할을 부여받으며, 세부 권한과 본인 데이터만 보기(Only Assigned Data) 같은 가시성 토글을 사용하여 추가로 맞춤화할 수 있습니다. 또한 한 사용자의 권한을 다른 사용자에게 복사하고 모듈별로 가시성을 제한할 수도 있습니다.

---

## 하위 계정 역할 및 권한의 주요 장점

역할 관리는 단순한 정리 작업이 아니라 운영 보안과 효율성을 높이는 핵심입니다:

- **데이터 보안**: 연락처(Contact), 파이프라인(Pipeline), 캠페인을 승인된 직원에게만 제한합니다.

- **깔끔한 인터페이스**: 사용하지 않는 메뉴를 숨겨 팀원들이 더 빠르게 탐색할 수 있도록 합니다.

- **책임 추적**: 모든 작업을 특정 사용자에게 귀속시켜 완벽한 감사 추적을 제공합니다.

- **빠른 온보딩**: 처음부터 설정을 다시 만드는 대신 검증된 역할 템플릿을 복제합니다.

---

## 하위 계정 역할 및 권한 설정 방법

역할과 권한을 설정하면 각 팀원이 필요한 것만 보고 제어할 수 있도록 보장됩니다. 다음 단계를 따라 시작해보세요.

#### 1단계: 설정 › 내 직원으로 이동

관리하려는 하위 계정으로 이동합니다. Settings(설정) 아래에서 My Staff(내 직원)를 클릭합니다.

![설정 메뉴에서 내 직원 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049963289/original/p4fP8lIAhFT2lEBi7UnrF8o_fz9dnHnZgA.png?1752688276)

#### 2단계: 사용자 선택 또는 새 사용자 생성

기존 사용자 옆의 Edit(편집) 연필 아이콘을 클릭하거나 + Add Employee(직원 추가)를 선택하여 새 프로필을 생성합니다.

![사용자 편집 또는 새 직원 추가](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049963334/original/Wwqerqx4510qC8bINsWSVRVi-87m_0HbDg.png?1752688351)

#### 3단계: 역할 할당 - Admin 또는 User

왼쪽의 Roles and Permissions(역할 및 권한) 탭을 클릭합니다. 그런 다음 Role(역할) 드롭다운에서 선택합니다:

- **Admin(관리자)**: 하위 계정의 모든 모듈과 설정에 전체 접근 권한
- **User(일반 사용자)**: 제한된 접근 권한; 세부 권한이 적용됨

![역할 선택 - Admin 또는 User](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049963384/original/uDvV8zszaZ4p3kjieb2YpFzKGEa9DTrUeA.png?1752688450)

#### 4단계: 필요에 따라 모듈 활성화/비활성화

체크박스를 사용하여 대화(Conversations), 워크플로우(Workflows), 캘린더(Calendars), 음성 AI(Voice AI) 등의 모듈에 대한 접근을 허용하거나 제한합니다.

![모듈 권한 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049963440/original/3oNO-9VhfyFmB15iYstOWWt8pvx6Cr0LYg.png?1752688504)

#### 5단계: 필요시 '본인 데이터만 보기' 설정

Only Assigned Data(본인 데이터만 보기)를 토글하여 사용자가 자신에게 명시적으로 할당된 리드(Lead), 기회(Opportunity), 데이터만 볼 수 있도록 제한합니다.

![본인 데이터만 보기 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049963468/original/IRv0FSrEO4o78isaixRcokdrc6gRU9YqDw.png?1752688543)

#### 6단계: 변경사항 저장

Update(업데이트) 또는 Save(저장)를 클릭하여 새 권한 설정을 적용합니다.

## 본인 데이터만 보기로 가시성 제한

할당된 데이터를 기반으로 접근을 제한하면 민감한 정보를 보호하면서 사용자가 자신의 업무에만 집중할 수 있도록 도와줍니다. 본인 데이터만 보기(Only Assigned Data)를 ON으로 설정하면 사용자는 다음만 볼 수 있습니다:

- 자신에게 할당된 연락처(Contact)
- 자신이 소유자인 기회(Opportunity)
- 자신의 이름과 연결된 예약(Appointment) 또는 할 일(Task)

**사용 예시**: 영업 담당자가 다른 사람의 대화나 고객에 접근하지 않고 자신의 파이프라인만 보고 관리할 수 있도록 이 기능을 사용하세요.

![본인 데이터만 보기 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049963481/original/6zEe36lzaY47Ujajo9Cpe8joYFHPDciuAg.jpeg?1752688587)

---

## 역할 및 권한 할당

사용자 역할은 고수준 접근을 정의하고, 권한은 사용할 수 있는 모듈을 정의합니다. 팀 리더, 신뢰할 수 있는 직원, 내부 관리자에게만 Admin(관리자) 접근 권한을 부여할 것을 권장합니다.

- **Admin(관리자)**: 하위 계정 내 모든 도구, 설정, 데이터에 대한 완전한 제어
- **User(일반 사용자)**: 권한에 따른 제한적 접근; 본인 데이터만으로 제한 가능

이 주제에 대한 더 자세한 정보는 [Admin vs User Permissions](admin-vs-user-roles-and-permission-scopes.md)를 확인하세요.

---

## 사용자 간 권한 복사

새 사용자를 온보딩할 때 시간을 절약하기 위해 기존 권한 설정을 복제할 수 있습니다.

- Settings(설정) › My Staff(내 직원)로 이동
- 기존 사용자 옆의 Edit(편집) 연필 아이콘을 클릭하거나 + Add Employee(직원 추가)를 선택하여 새 프로필 생성
- Roles and Permissions(역할 및 권한) 탭 선택
- 오른쪽 상단의 Copy Permissions(권한 복사) 버튼 클릭
- Copy Permissions(권한 복사) 드롭다운을 사용하여 소스 사용자 선택
- Copy(복사)를 클릭하여 정확히 같은 설정 적용

![권한 복사 기능](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049963554/original/HM24jZg4BLEtS23DqLeTqENc0w3BkaitGA.png?1752688702)

---

## 모듈별 세부 권한

Hyperclass는 이제 개별 모듈과 하위 기능에 대한 상세한 접근 제어를 제공합니다. 세부 권한(Granular Permission)을 통해 사용자에게 하위 계정 내 특정 도구와 기능에 대한 정확한 접근 권한을 부여할 수 있습니다. 이는 대규모 팀 관리, 민감한 작업 제한, 실수로 인한 변경 위험 감소에 이상적입니다.

**데이터 내보내기**: 대시보드 위젯 데이터를 내보낼 수 있는 사람을 제어합니다. 다운로드를 제한하고 리포팅 데이터의 실수 공유를 줄이는 데 사용하세요.

세부 권한은 다음 영역에서 사용할 수 있습니다:

- AI 에이전트(AI Agents)
- 계정 설정(Account Settings)
- 계정 도구(Account Tools)
- 자동화(Automation) - 워크플로우 포함
- 블로그(Blogs)
- 캘린더(Calendars)
- 수료증(Certificates)
- 커뮤니티(Communities)
- 연락처(Contacts)
- 대화(Conversations)
- 폼(Forms)
- 퍼널(Funnels)
- Gokollab
- 연동(Integrations)
- 마케팅(Marketing)
- 미디어(Medias)
- 멤버십(Memberships)
- 기회 관리(Opportunities)
- 결제(Payments)
- QR 코드(QR Codes)
- 퀴즈(Quizzes)
- 대시보드(Dashboard)
- 평판 관리(Reputations)
- 설문(Surveys)
- 사용자 관리(User Management)
- WordPress

---

## 자주 묻는 질문

**Q: 사용자에게 모듈을 비활성화했는데 그것이 워크플로우에서 사용되면 어떻게 되나요?**
사용자는 해당 모듈을 보거나 상호작용할 수 없지만, 워크플로우는 계속 실행됩니다. 다른 누군가가 해당 자동화를 관리할 수 있는 전체 접근 권한을 유지하도록 확인하세요.

**Q: 각 캘린더마다 다른 권한을 할당할 수 있나요?**
네. 캘린더 권한은 이제 세부적으로 설정할 수 있습니다. 특정 캘린더에 대한 예약 접근만 허용하거나 전체 관리 권한을 부여할 수 있습니다.

**Q: 여러 사용자에게 권한을 일괄 할당할 수 있나요?**
아니요. 권한 복사(Copy Permissions) 기능을 하나씩 사용하거나 로드맵을 통해 대량 프로비저닝을 요청할 수 있습니다.

**Q: 에이전시 수준의 Admin과 하위 계정 수준의 Admin의 차이점은 무엇인가요?**
에이전시 Admin(관리자)은 모든 하위 계정, SaaS 상품, 청구를 제어합니다. 하위 계정 Admin은 특정 로케이션만 제어합니다.

**Q: 사용자가 에이전시 관리자가 되지 않고도 여러 로케이션을 관리할 수 있나요?**
네. Account Admin(계정 관리자)을 사용하여 전체 에이전시 접근 권한을 부여하지 않고도 여러 하위 계정을 관리할 수 있습니다.

---
*원문 최종 수정: Mon, 2 Feb, 2026 at 4:05 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*