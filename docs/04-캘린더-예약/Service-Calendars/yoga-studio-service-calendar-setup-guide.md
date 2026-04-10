---

번역일: 2026-04-06
카테고리: 04-캘린더-예약 > Service Calendars
---

# 요가 스튜디오 - 서비스 캘린더(Service Calendar) 설정 가이드

Hyperclass의 서비스 캘린더(Service Calendar)를 사용하면 요가 스튜디오에서 예약을 자동화하고, 강사 일정을 관리하며, 스튜디오 공간과 수업 장비 같은 리소스를 배정할 수 있습니다. 서비스 캘린더를 설정하면 요가 강사와 직원이 더 원활하게 운영하고, 중복 예약을 방지하며, 고객에게 매끄러운 예약 경험을 제공할 수 있습니다. 이 가이드는 요가 스튜디오에 특화된 실제 예시를 들어 각 단계를 자세히 안내합니다.

---

**목차**

- [서비스 캘린더란?](#서비스-캘린더란)
- [서비스 캘린더의 주요 장점](#서비스-캘린더의-주요-장점)
- [직원 추가 및 예약 가능 시간 설정](#직원-추가-및-예약-가능-시간-설정)
- [요가 스튜디오 서비스용 그룹 생성](#요가-스튜디오-서비스용-그룹-생성)
- [서비스 캘린더 생성](#서비스-캘린더-생성)
- [기존 서비스 캘린더 편집](#기존-서비스-캘린더-편집)
- [서비스 메뉴 생성](#서비스-메뉴-생성)
- [자주 묻는 질문](#자주-묻는-질문)

---

# **서비스 캘린더란?**

서비스 캘린더는 특정 서비스를 정의하고, 직원을 배정하며, 룸과 장비 같은 리소스를 할당할 수 있는 일정 관리 도구입니다. 요가 스튜디오의 경우, 요가 클래스, 개인 세션, 워크숍 같은 서비스별로 캘린더를 만들고, 각각에 적절한 강사, 스튜디오 룸, 장비를 연결할 수 있습니다. 이를 통해 고객은 쉽게 예약하고, 팀은 일정 충돌을 피할 수 있습니다.

---

## **서비스 캘린더의 주요 장점**

서비스 캘린더는 요가 스튜디오의 일정 관리를 간소화하고, 효율성을 높이며, 고객 경험을 개선해 줍니다.

- **자동화된 예약**: 고객이 스튜디오에 전화하지 않고도 직접 예약할 수 있습니다.

- **리소스 관리**: 스튜디오 공간과 장비(매트, 블록, 스트랩)를 배정하여 중복 예약을 방지합니다.

- **직원 일정 관리**: 강사별로 예약 가능 시간을 설정하여 효율적인 일정 관리가 가능합니다.

- **서비스 그룹화**: "클래스 & 개인 세션"이나 "워크숍" 같은 그룹으로 서비스를 체계적으로 정리합니다.

- **유연한 메뉴**: 한 번의 예약으로 여러 서비스를 제공할 수 있습니다(예: 클래스 + 개인 세션).

- **전문적인 브랜딩**: 이미지와 커스텀 색상을 추가하여 세련된 예약 페이지를 만들 수 있습니다.

---

## 직원 추가 및 예약 가능 시간 설정

직원 추가는 서비스 캘린더의 기초입니다. 강사/직원을 먼저 설정해야 서비스를 배정할 수 있습니다.

### 1. 사용자 추가 클릭

하위 계정 대시보드에서 `Settings(설정) → My Staff(내 직원) → Add User(사용자 추가)`로 이동합니다.

![직원 추가 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063768519/original/SYQ6H4sG-rnb1SXdafqB-13AQBTiWeJJHw.jpeg?1769689255)

### 2. 사용자 정보 및 권한 설정

강사/직원의 이름, 이메일, 내선번호를 입력합니다. **사용자 권한(User Permissions)**을 설정하고(필요시 접근 제한), **예약 가능 시간(Availability)**을 정의합니다(예: 마크는 월, 수, 금 오전 9시~오후 5시, 헨리는 화~토 오전 11시~오후 7시). 저장을 클릭합니다.

사용자 접근 권한에 대해 더 자세히 알아보려면 여기를 클릭하세요.

![사용자 정보 입력 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063768515/original/E86zYEmKN3IunGOWRYZW0GwDjDsZLmv6LA.png?1769689255)

---

## 요가 스튜디오 서비스용 그룹 생성

그룹은 서비스를 체계적으로 정리하는 카테고리 역할을 합니다. 각 그룹은 고유한 예약 링크를 가집니다.

### 1. 캘린더 설정 열기

**Calendars(캘린더)** 메뉴에서 우상단의 **Calendar Settings(캘린더 설정)**를 클릭합니다. 여기서 그룹, 서비스, 환경설정 등 모든 구성 옵션에 접근할 수 있습니다.

![캘린더 설정 메뉴](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063768526/original/hZZLR5s9j6_066_BetqU9bzNi0kI1nYy_Q.png?1769689257)

### 2. 서비스 메뉴 활성화

**Preferences(환경설정) → Account Preference(계정 환경설정)**로 이동하여 **Service Menu(서비스 메뉴)** 옵션을 켭니다. 이렇게 하면 서비스 기반 예약 시스템이 활성화되어 서비스 캘린더와 메뉴를 만들 수 있습니다.

![서비스 메뉴 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063768512/original/OepubqH-ikpb0fuWvR6C4d-i2l9_qAnXKQ.png?1769689254)

### 3. 그룹 생성 시작

**Calendars(캘린더)** 탭에서 좌측 사이드바의 **+ New Group(+ 새 그룹)**을 클릭합니다. 그룹은 요가 클래스, 개인 세션, 워크숍 같은 관련 서비스를 정리하는 데 도움이 됩니다.

![새 그룹 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063768513/original/CkBJY2BpB-msCLetI2O1M9ZnCL1Q1JCeEA.jpeg?1769689255)

### 4. 그룹 세부사항 추가

팝업 폼에서 **그룹명(Group Name), 설명(Description), URL(slug)**을 입력합니다. 템플릿 유형(Classic 또는 Neo)을 선택하고 **Create(생성)**를 클릭하여 그룹을 저장합니다.

![그룹 세부사항 입력](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063769076/original/4cGToOsW_IDzR52HtFjUf0wphiU1bPhHMA.png?1769689492)

---

## 서비스 캘린더 생성

### 1. 서비스 캘린더 생성

좌측 사이드바에서 그룹을 선택하고 **Create Calendar(캘린더 생성)**를 클릭합니다. 클래스나 개인 세션 같은 특정 요가 스튜디오 서비스를 위한 새 서비스 캘린더 설정이 시작됩니다.

![서비스 캘린더 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063768516/original/tC_fnPc8AB9l0Z4huFHVPNRWXeBWACzhuA.jpeg?1769689255)

### 2. 서비스 예약 선택

**Calendars(캘린더) → Service Menu(서비스 메뉴) → Create Service Menu(서비스 메뉴 생성)**로 이동합니다. 캘린더 유형 목록에서 **Service Booking(서비스 예약)**을 클릭합니다. 이 옵션은 요가 스튜디오 같은 서비스 기반 비즈니스를 위해 설계되었으며, 고객이 클래스나 개인 세션 같은 특정 서비스를 예약할 수 있습니다.

![서비스 예약 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063768520/original/KfZkh5biiK6OWOGusdcuCxcYbHzD1lQ4cw.jpeg?1769689256)

### 3. 서비스 기본 정보 입력

**서비스명(Service Name), 배정 직원(Assigned Staff), 커스텀 URL, 서비스 소요시간(Service Duration), 예약 가능 시간(Availability)**을 포함한 서비스 세부사항을 작성합니다. 이 단계는 제공하는 특정 요가 스튜디오 서비스에 맞게 캘린더를 조정하는 것입니다. 추가 커스터마이징을 위해 **Advanced Settings(고급 설정)**를 클릭합니다.

**Advanced Settings(고급 설정)**를 클릭하면 Service Details(서비스 세부사항), Availability(예약 가능 시간), Forms & Payment(양식 및 결제), Notifications(알림), Customizations(커스터마이징), Rooms & Equipment(룸 및 장비) 같은 추가 구성 패널이 펼쳐집니다. 이 옵션들을 통해 예약 플로우를 세밀하게 조정하고, 브랜딩을 추가하며, 결제를 관리하고, 스튜디오 룸이나 장비 같은 리소스를 배정할 수 있습니다.

![서비스 기본 정보](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063769074/original/GBCvJsv0qIMYrp6Gj3toaP9j5LhCsGLH1Q.jpeg?1769689492)

### 4. 서비스 세부사항 설정

**Service Details(서비스 세부사항)** 탭에서는 고객이 이 서비스를 예약할 때 보게 될 정보를 정의합니다. 먼저 **Service Logo(서비스 로고)**를 업로드하여 예약 페이지에 전문적인 모습을 줍니다. 명확한 **Service Name(서비스명)**(예: 빈야사 클래스, 개인 요가 세션, 사운드 배스)을 입력하고, 서비스에 포함된 내용을 설명하는 **Description(설명)**을 추가합니다(예: "가이드 쿨다운이 포함된 60분 요가 클래스").

다음으로 적절한 **Group(그룹)**(예: 클래스 & 개인 세션)에 서비스를 배정하여 관련 서비스와 함께 체계적으로 정리합니다. 마지막으로 **Custom URL(커스텀 URL)**을 만듭니다. 이는 고객과 공유할 예약 링크의 일부가 되어 인식하고 공유하기 쉽게 만듭니다(예: /yoga-class-booking).

![서비스 세부사항 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063768518/original/cRQDVtQS4VmCRoJ6BSD88c6o6TTFRHxhGQ.jpeg?1769689255)

### 5. 예약 및 직원 설정

이 섹션에서는 예약이 고객과 직원에게 어떻게 표시될지 구성합니다. 고객과 직원의 캘린더 초대에 표시될 **Appointment Invite Title(예약 초대 제목)**을 설정합니다({{contact.name}} 같은 플레이스홀더를 사용하여 개인화할 수 있습니다). **Team Members(팀 멤버)** 아래에서 이 서비스를 수행할 자격이 있는 강사를 한 명 이상 배정합니다. 고객은 해당 직원의 시간대만 볼 수 있습니다.

그다음 **Meeting Location(미팅 장소)**를 정의합니다. 이는 요가 스튜디오 자체, 특정 스튜디오 룸, 또는 필요시 커스텀 비디오 링크일 수 있습니다. 마지막으로 **Meeting Color(미팅 색상)**을 선택하여 내부 캘린더 보기에서 이 서비스를 시각적으로 구분하여, 직원이 예약 유형을 빠르게 식별할 수 있게 합니다.

![예약 및 직원 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063768514/original/TdryW-jKppereU4-NewaDnt8_YHjAw-EDQ.jpeg?1769689255)

### 6. 룸 배정

**Rooms(룸)** 탭에서는 **요가 스튜디오**의 물리적 공간을 서비스에 연결합니다. 룸은 서비스가 수행되는 스튜디오 룸, 연습 공간, 또는 클래스 영역을 나타낼 수 있습니다. 예를 들어, 요가 클래스와 개인 세션에는 "스튜디오 룸 1"을, 워크숍과 특별 세션에는 "스튜디오 룸 2"를 배정할 수 있습니다. 룸을 배정하면 고객이 서비스를 예약할 때 해당 특정 공간이 예약되어 중복 예약이 될 수 없습니다. 이는 제한된 스튜디오 공간을 가진 클리닉에 특히 유용하며, 같은 장소에서 같은 시간에 여러 예약이 잡히는 것을 방지합니다.

![룸 배정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063768507/original/GFbTR9brR0oT0S0FeGNRRsl0EdEcwiJ5Ew.png?1769689254)

### 7. 장비 배정

**Equipment(장비)** 탭에서는 서비스를 완료하는 데 필요한 도구나 리소스를 연결합니다. 장비는 요가 매트, 블록, 볼스터, 스트랩 같은 항목을 나타낼 수 있으며, 사용 가능한 수량을 지정할 수 있습니다. 예를 들어, 클래스 예약에는 "요가 매트"를, 회복 세션에는 "볼스터"를 배정할 수 있습니다. 고객이 서비스를 예약하면 시스템이 자동으로 필요한 장비를 예약하여, 여러 예약에서 중복으로 배정되지 않도록 합니다. 이는 모든 예약에 필요한 도구가 보장되어 원활한 운영을 유지하는 데 도움이 됩니다.

![장비 배정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063768505/original/auQXF80ZqP94DRY8fT9IXUY0oL7aY0DwQQ.png?1769689253)

---

## 기존 서비스 캘린더 편집

기존 서비스 캘린더를 업데이트하려면 **Meetings(미팅)** 탭 아래의 **Service Calendars (v1)(서비스 캘린더 v1)**로 이동합니다. 목록에서 편집하고 싶은 캘린더를 찾아 **Actions(작업)** 컬럼 아래의 **연필 아이콘**을 클릭합니다. 그러면 캘린더 설정이 다시 열려서, 캘린더를 처음부터 다시 만들지 않고도 서비스명, 배정 직원, 예약 가능 시간, 알림, 리소스 같은 세부사항을 조정할 수 있습니다.

![서비스 캘린더 편집](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063856631/original/9LHpob5YzxdyQDYGP7EIBiEtSB-cSU22Cg.png?1769776430)

---

## 서비스 메뉴 생성

서비스 메뉴를 사용하면 하나의 예약 페이지에 여러 서비스나 그룹을 표시할 수 있습니다.

### 1. 서비스 메뉴 열기

**Meetings(미팅) ➜ Service Calendars (v1)(서비스 캘린더 v1) ➜ Service Menu(서비스 메뉴)**로 이동합니다. 여기서 고객용 메뉴를 생성하고 관리할 수 있습니다.

![서비스 메뉴 열기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063768508/original/vrG28yMreRAHTWc5vhNKk2FJaZcFKIu7uA.png?1769689254)

### 2. 서비스 메뉴 생성

우상단의 **+ Create Service Menu(+ 서비스 메뉴 생성)**를 클릭합니다. 이렇게 하면 요가 스튜디오의 서비스를 표시할 새로운 고객용 메뉴가 시작됩니다.

![서비스 메뉴 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063768511/original/kpteWzbiGeiuCiKI76eYd0xRfmOMk4-Snw.png?1769689254)

### 3. 메뉴 세부사항

**Service Menu name(서비스 메뉴명)**, **Description(설명)**, **Service URL(서비스 URL)** slug을 작성하고, **Form(폼)**을 선택한 후 필요시 **Consent checkbox(동의 체크박스)**를 토글합니다. 이 설정들은 고객이 메뉴 상단에서 보게 될 내용과 공유할 링크를 정의합니다.

![메뉴 세부사항](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063768517/original/P_jQiDJrT2Ieh0ShnOF7agyQlzLxWHa71g.png?1769689255)

### 4. 옵션 활성화

**Additional Options(추가 옵션)** 아래에서 **Enable Add Guests(동반자 추가 활성화)**, **Enable Multiple Service Selection(다중 서비스 선택 활성화)**, **Enable Staff Selection(직원 선택 활성화)**를 토글합니다. 이 컨트롤을 통해 고객이 동반자를 위한 예약, 다중 서비스 선택(예: 클래스 + 개인 세션), 선호하는 강사 선택을 할 수 있습니다.

![옵션 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063769075/original/EBYPFMwlHGHPxXBSxNFfgFGkc84M_w0Scw.png?1769689492)

### 5. 서비스 선택

**Select Services(서비스 선택)**를 클릭하고 이 메뉴에 포함할 **그룹/캘린더**를 선택합니다. 이미 생성하여 그룹에 배정한 서비스만 나타납니다. 그룹을 펼쳐서 특정 서비스를 체크하세요.

![서비스 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063768510/original/5mxwDCUFx-fERUwrSSQpwHr_MP0dVzZYRQ.png?1769689254)

### 6. 순서 정렬

**Arrange your services(서비스 정렬)**를 열고, 핸들을 드래그하여 그룹/서비스가 표시되는 순서를 재정렬합니다. 가장 인기 있는 항목(예: 요가 클래스, 개인 세션)을 상단에 배치하여 전환율을 개선하세요.

![순서 정렬](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063768506/original/ZvYRCicHkjF3o_1KKruraH5coA0KhCmaIQ.png?1769689254)

---

이제 고객에게 서비스 메뉴 링크를 제공하면 다음과 같이 표시됩니다.

![서비스 메뉴 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155063770412/original/e0TGzbLMb143PCnExDieRUIZEh5bztYrmA.png?1769690266)

Hyperclass 내에서 서비스 캘린더를 마스터하는 것은 다양한 서비스를 제공하는 비즈니스에 매우 중요합니다. 이 상세한 가이드는 사용자가 서비스 캘린더를 능숙하게 생성하고, 커스터마이징하며, 표시할 수 있도록 보장하여, 비즈니스와 고객 모두에게 간소화된 경험을 제공합니다. 이 지식을 바탕으로 비즈니스는 일정 관리 프로세스를 최적화하고 고객 만족도를 높일 수 있습니다.

---

## 자주 묻는 질문

**Q: 서비스 캘린더를 저장할 수 없는 이유가 뭔가요?**
저장하기 전에 최소 한 명의 직원을 배정해야 합니다.

**Q: 서비스에 예약 가능한 시간이 표시되지 않는 이유가 뭔가요?**
직원의 예약 가능 시간, 배정된 룸, 장비를 확인해보세요.

**Q: 고객이 여러 서비스를 한 번에 예약할 수 있나요?**
네, 서비스 메뉴 설정에서 다중 서비스를 활성화하면 됩니다.

**Q: 서비스에 대한 예약금을 받을 수 있나요?**
네, Forms & Payment(양식 및 결제) 아래에서 Stripe나 PayPal을 연결하면 됩니다.

**Q: 스튜디오 룸이나 장비의 중복 예약을 어떻게 방지하나요?**
각 서비스에 룸과 장비를 배정하면 됩니다.

**Q: 고객이 선호하는 강사를 선택할 수 있나요?**
네, 서비스 메뉴에서 Staff Selection(직원 선택)을 활성화하면 됩니다.

**Q: 모든 서비스를 한 페이지에 나열하려면 어떻게 하나요?**
서비스 메뉴를 사용하여 여러 캘린더를 결합하면 됩니다.

---
*원문 최종 수정: 2026년 1월 30일 오전 6:36*
*Hyperclass 사용 가이드 — hyperclass.ai*