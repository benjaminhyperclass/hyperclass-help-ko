---

번역일: 2026-04-06
카테고리: 04-캘린더-예약 > Service Calendars
---

# 이발소 - 서비스 캘린더(Service Calendar) 설정 가이드

Hyperclass의 서비스 캘린더(Service Calendars)를 활용하면 이발소에서 예약을 자동화하고, 직원 일정을 관리하며, 의자나 장비 같은 리소스를 배정할 수 있습니다. 서비스 캘린더를 설정하면 더 원활한 운영이 가능하고, 중복 예약을 방지하며, 고객에게 매끄러운 예약 경험을 제공할 수 있습니다. 이 가이드는 이발소에 특화된 예시를 들어 각 단계를 설명합니다.

---

## 목차

- [서비스 캘린더란 무엇인가요?](#서비스-캘린더란-무엇인가요)
- [서비스 캘린더의 주요 장점](#서비스-캘린더의-주요-장점)
- [직원 추가 및 예약 가능 시간 설정](#직원-추가-및-예약-가능-시간-설정)
- [이발소 서비스용 그룹 만들기](#이발소-서비스용-그룹-만들기)
- [서비스 캘린더 생성](#서비스-캘린더-생성)
- [기존 서비스 캘린더 편집](#기존-서비스-캘린더-편집)
- [서비스 메뉴 만들기](#서비스-메뉴-만들기)
- [자주 묻는 질문](#자주-묻는-질문)

---

## 서비스 캘린더란 무엇인가요?

서비스 캘린더(Service Calendars)는 특정 서비스를 정의하고, 직원을 배정하며, 룸이나 장비 같은 리소스를 할당할 수 있는 예약 도구입니다. 이발소의 경우 이발, 면도, 스타일링 같은 서비스별로 캘린더를 만들어 적절한 이발사, 의자, 도구와 연결할 수 있습니다. 고객은 쉽게 예약하고, 팀은 일정 충돌을 피할 수 있습니다.

---

## 서비스 캘린더의 주요 장점

서비스 캘린더는 이발소의 예약 관리를 간소화하고, 효율성을 높이며, 고객 경험을 개선해줍니다.

- **예약 자동화**: 고객이 직접 전화하지 않고도 예약할 수 있습니다.

- **리소스 관리**: 의자와 도구(면도기, 드라이어, 가위)를 배정하여 중복 예약을 방지합니다.

- **직원 일정 관리**: 이발사의 근무 시간을 정의하여 정확한 예약 가능 시간을 제공합니다.

- **서비스 그룹화**: "이발 & 면도"나 "스타일링" 같은 그룹으로 서비스를 체계적으로 관리합니다.

- **유연한 메뉴**: 한 번에 여러 서비스 예약 가능(예: 이발 + 면도).

- **전문적인 브랜딩**: 이미지와 커스텀 색상을 추가하여 세련된 예약 페이지를 만듭니다.

---

## 직원 추가 및 예약 가능 시간 설정

직원 추가는 서비스 캘린더의 기초입니다. 이발사가 설정되지 않으면 어떤 서비스도 배정할 수 없기 때문입니다.

### Add User 클릭

하위 계정 대시보드에서 Settings(설정) → My Staff → Add User로 이동합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054586982/original/PjK4QWFebF5gFuiex0J57iCJtuyMllcsug.png?1758804696)

### 사용자 정보 및 권한

이발사의 이름, 이메일, 내선번호를 입력합니다. **사용자 권한(user permissions)**을 설정하고(필요시 접근을 제한), **예약 가능 시간(availability)**을 정의합니다(예: Mark은 월, 수, 금 오전 9시-오후 5시; Henry는 화-토 오전 11시-오후 7시). Save를 클릭합니다.

사용자 권한에 대한 자세한 내용은 여기에서 확인하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054587005/original/UyMCxhsaS-5YiLtfjCfZ-dK_WTe_s5QIMg.png?1758804726)

---

## 이발소 서비스용 그룹 만들기

그룹은 서비스를 체계적으로 정리하는 카테고리 역할을 합니다. 각 그룹은 고유한 예약 링크를 갖습니다.

### 캘린더 설정 열기

**Calendars(캘린더)** 메뉴에서 우상단의 **Calendar Settings(캘린더 설정)**을 클릭합니다. 여기서 그룹, 서비스, 환경설정의 모든 구성 옵션에 접근할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054635573/original/deHnLI0Ky-qu9ySG49F9IiDattSfJ0OnQA.png?1758866679)

### 서비스 메뉴 활성화

**Preferences(환경설정) → Account Preference(계정 환경설정)**으로 이동하여 **Service Menu(서비스 메뉴)** 옵션을 활성화합니다. 이렇게 하면 서비스 기반 예약 시스템이 활성화되어 서비스 캘린더와 메뉴를 만들 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054635582/original/vLor2RMfC072ATG1rwR7JTK2Xe_u8uyDWg.png?1758866698)

### 그룹 생성 시작

**Calendars(캘린더) 탭**에서 좌측 사이드바의 **+ New Group**을 클릭합니다. 그룹은 이발, 면도, 스타일링 같은 관련 서비스를 정리하는 데 도움이 됩니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054638212/original/EmVLIuXcdxn73QdpNmacY4pcbME-E_N4Gg.png?1758869379)

### 그룹 세부사항 추가

팝업 양식에서 **그룹 이름(Group Name), 설명(Description), URL(slug)**을 입력합니다. 템플릿 유형(Classic 또는 Neo)을 선택하고 **Create**를 클릭하여 그룹을 저장합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054638251/original/vo6YPMfFSVQ-iruCwu5JrGY48asv-la30A.png?1758869413)

---

## 서비스 캘린더 생성

### 서비스 캘린더 만들기

좌측 사이드바에서 그룹을 선택하고 **Create Calendar(캘린더 만들기)**를 클릭합니다. 이발이나 면도 같은 특정 이발소 서비스를 위한 새로운 서비스 캘린더 설정이 시작됩니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054638266/original/oXmQxfZWFdZuH-gtlIlBCEIwim6idoUqVw.png?1758869440)

### 서비스 예약 선택

**Calendars(캘린더) → Service Menu(서비스 메뉴) → Create Service Menu(서비스 메뉴 만들기)**로 이동합니다. 캘린더 유형 목록에서 **Service Booking(서비스 예약)**을 클릭합니다. 이 옵션은 이발소 같은 서비스 기반 비즈니스를 위해 설계되어, 고객이 이발이나 면도 같은 특정 서비스를 예약할 수 있게 합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054656383/original/oVRAnDtWZ6foUl9MrNK6ZpEmEuOGmsAwXA.png?1758879544)

### 서비스 기본정보 입력

**서비스 이름(Service Name), 배정된 직원(Assigned Staff), 커스텀 URL, 서비스 시간(Service Duration), 예약 가능 시간(Availability)**을 포함한 서비스 세부사항을 작성합니다. 이 단계에서 제공하는 특정 이발소 서비스에 맞게 캘린더를 맞춤 설정합니다. 추가 커스터마이징을 위해 **Advanced Settings(고급 설정)**을 클릭하세요.

**Advanced Settings(고급 설정)**을 클릭하면 서비스 세부사항, 예약 가능 시간, 폼 & 결제, 알림, 커스터마이징, 룸 & 장비 같은 추가 구성 패널이 확장됩니다. 이 옵션들을 통해 예약 흐름을 세밀하게 조정하고, 브랜딩을 추가하며, 결제를 관리하고, 의자나 도구 같은 리소스를 배정할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054656460/original/2lYJvgBbPlMvkYZnBq1LAAp_uOHQrW0tUw.png?1758879585)

### 서비스 세부사항 설정

**Service Details(서비스 세부사항) 탭**에서는 고객이 이 서비스를 예약할 때 보게 될 정보를 정의합니다. 먼저 **서비스 로고(Service Logo)**를 업로드하여 예약 페이지에 전문적인 모습을 더합니다. 명확한 **서비스 이름(Service Name)**(예: 이발, 수염 다듬기, 면도)을 입력하고, "샴푸와 스타일링을 포함한 30분 이발"과 같이 서비스에 포함된 내용을 설명하는 **설명(Description)**을 추가합니다.

다음으로 서비스를 적절한 **그룹(Group)**(예: 이발 & 면도)에 배정하여 관련 서비스와 함께 체계적으로 관리되도록 합니다. 마지막으로 **커스텀 URL**을 만듭니다. 이것은 고객과 공유할 예약 링크의 일부가 되어 인식하고 공유하기 쉽게 만듭니다(예: /haircut-booking).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054676547/original/yqgZGBSU9LVpBpkfkVGD8IgJwgJDWRym9w.jpeg?1758889071)

### 예약 및 직원 설정

이 섹션에서는 예약이 고객과 직원에게 어떻게 표시될지 구성합니다. **예약 초대 제목(Appointment Invite Title)**을 설정합니다. 이것은 고객과 직원의 캘린더 초대에 표시됩니다({{contact.name}} 같은 플레이스홀더를 사용하여 개인화할 수 있습니다). **Team Members(팀원)** 아래에서 이 서비스를 수행할 자격이 있는 한 명 이상의 이발사를 배정합니다. 고객은 해당 직원의 시간대만 볼 수 있습니다. 그다음 **미팅 장소(Meeting Location)**를 정의합니다. 이것은 이발소 자체, 특정 의자, 또는 필요시 커스텀 비디오 링크일 수 있습니다. 마지막으로 **미팅 색상(Meeting Color)**을 선택하여 내부 캘린더 뷰에서 이 서비스를 시각적으로 구분하게 하면, 직원이 예약 유형을 빠르게 식별하는 데 도움이 됩니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054656597/original/WRH3Z7jaRTNxx4E2LphYqULyXxIPZws2rw.png?1758879690)

### 룸 배정

**Rooms(룸) 탭**에서는 이발소의 물리적 공간을 서비스에 연결합니다. 룸은 서비스가 수행되는 **의자, 부스, 또는 스테이션**을 나타낼 수 있습니다. 예를 들어 이발과 면도에는 "살롱 의자 1"을, 블로우드라이와 마무리에는 "스타일링 의자"를 배정할 수 있습니다. 룸을 배정하면 고객이 서비스를 예약했을 때 해당 특정 의자나 스테이션이 예약되어 중복 예약될 수 없습니다. 이는 제한된 좌석이 있는 샵에서 특히 유용한데, 같은 장소에서 동시에 여러 예약이 잡히는 것을 방지하기 때문입니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054656694/original/2j8ob179waKG-rHgFd1fp899SASVttW8NA.png?1758879721)

### 장비 배정

**Equipment(장비) 탭**에서는 서비스를 완료하는 데 필요한 도구나 리소스를 연결합니다. 장비는 **면도기, 가위, 헤어드라이어** 같은 아이템을 나타낼 수 있고, 사용 가능한 수량을 지정할 수 있습니다. 예를 들어 면도 서비스에 "면도기"를 배정하거나 스타일링 서비스에 "헤어드라이어"를 배정할 수 있습니다. 고객이 서비스를 예약하면 시스템이 자동으로 필요한 장비를 예약하여 여러 예약에서 과다 예약되지 않도록 합니다. 이는 모든 예약에 필요한 도구가 확실히 준비되도록 보장하여 원활한 운영에 도움이 됩니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054663035/original/LRkytLwV8w7Bn9rhrEG4zivqyBGXwoPA-Q.png?1758882725)

---

## 기존 서비스 캘린더 편집

기존 서비스 캘린더를 업데이트하려면 **Meetings(미팅)** 탭 아래의 **Service Calendars (v1)**로 이동하세요. 목록에서 편집할 캘린더를 찾고 **Actions(작업)** 열 아래의 **연필 아이콘**을 클릭합니다. 캘린더를 다시 만들 필요 없이 서비스 이름, 배정된 직원, 예약 가능 시간, 알림, 리소스 같은 세부사항을 조정할 수 있는 캘린더 설정이 다시 열립니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054657674/original/0AbIhGq6phmXSKHYSBhMMRBzrQLFTyXY4g.png?1758880246)

---

## 서비스 메뉴 만들기

서비스 메뉴를 사용하면 하나의 예약 페이지에 여러 서비스나 그룹을 표시할 수 있습니다.

### 서비스 메뉴 열기

**Meetings(미팅)** ➜ **Service Calendars (v1)** ➜ **Service Menu(서비스 메뉴)**로 이동합니다. 고객이 보는 메뉴를 만들고 관리하는 서비스 메뉴 영역으로 이동됩니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054678383/original/_aGkwY8xRswepTkqG9I_MYUj55-N-usstQ.png?1758889945)

### 서비스 메뉴 만들기

우상단의 **+ Create Service Menu(서비스 메뉴 만들기)**를 클릭합니다. 이발소 서비스를 표시할 새로운 고객용 메뉴를 시작합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054673764/original/lDYPQlCgxHRlYhvTA4iTnq7OHcsgG9h0fA.png?1758887817)

### 메뉴 세부사항

**서비스 메뉴 이름(Service Menu name)**, **설명(Description)**, **서비스 URL** slug를 작성하고, **폼(Form)**을 선택하며, 필요시 **동의 체크박스(Consent checkbox)**를 토글합니다. 이 설정들은 고객이 메뉴 상단에서 보게 될 내용과 공유할 링크를 정의합니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054673932/original/5Ak6HPvUWBMjlWM8O4Gog62kpmEubC991g.png?1758887849)

### 옵션 활성화

**Additional Options(추가 옵션)** 아래에서 **Enable Add Guests(게스트 추가 활성화)**, **Enable Multiple Service Selection(여러 서비스 선택 활성화)**, **Enable Staff Selection(직원 선택 활성화)**를 토글합니다. 이 컨트롤을 통해 고객이 게스트 예약, 여러 서비스 선택(예: 이발 + 면도), 선호하는 이발사 선택을 할 수 있습니다.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054673971/original/2JHKx1YR0fneUguh4j7fi5JctWcprFHcZQ.png?1758887870)

### 서비스 선택

**Select Services(서비스 선택)**을 클릭하고 이 메뉴에 포함할 **그룹/캘린더**를 선택합니다. 이미 만들고 그룹에 배정한 서비스만 나타납니다. 그룹을 확장하여 특정 서비스를 체크하세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054674071/original/svsdbwWlrsjXhanbhM3326mdg6h2gB_c5Q.png?1758887896)

### 순서 정리

**Arrange your services(서비스 정리)**를 열고, 핸들을 드래그하여 그룹/서비스가 나타나는 순서를 조정합니다. 가장 인기 있는 항목(예: 이발, 면도)을 상단에 배치하여 전환율을 높이세요.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054674114/original/yzIcgBAbp1k4zrqK6kWAkLSh_tI3dedrBg.png?1758887914)

---

## 자주 묻는 질문

**Q: 서비스 캘린더를 저장할 수 없는 이유는 무엇인가요?**

저장하기 전에 최소 한 명의 직원을 배정해야 합니다.

**Q: 서비스에 예약 가능한 시간대가 나타나지 않는 이유는 무엇인가요?**

직원의 예약 가능 시간, 배정된 룸, 장비를 확인하세요.

**Q: 고객이 여러 서비스를 한 번에 예약할 수 있나요?**

네, 서비스 메뉴 설정에서 여러 서비스를 활성화하면 됩니다.

**Q: 서비스에 대해 예약금을 받을 수 있나요?**

네, Forms & Payment(폼 & 결제) 아래에서 Stripe나 PayPal을 연결하면 됩니다.

**Q: 의자나 도구의 중복 예약을 어떻게 방지하나요?**

각 서비스에 룸과 장비를 배정하면 됩니다.

**Q: 고객이 선호하는 이발사를 선택할 수 있나요?**

네, 서비스 메뉴에서 Staff Selection(직원 선택)을 활성화하면 됩니다.

**Q: 모든 서비스를 한 페이지에 나열하려면 어떻게 하나요?**

서비스 메뉴를 사용하여 여러 캘린더를 결합하면 됩니다.

---
*원문 최종 수정: Thu, 29 Jan, 2026 at 6:56 AM*
*Hyperclass 사용 가이드 — hyperclass.ai*