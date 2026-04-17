---

번역일: 2026-04-06
카테고리: 04-캘린더-예약 > Service Calendars
---

# 서비스 캘린더 만드는 방법

서비스 캘린더(Service Calendar)는 서비스 기반 비즈니스의 예약 프로세스를 간소화하기 위해 만들어진 맞춤형 캘린더 유형입니다. 이 캘린더 유형에서는 제공하는 다양한 서비스를 생성하고, 카테고리별로 그룹화하며, 모든 서비스를 하나의 예약 링크인 서비스 메뉴(Service Menu)에 표시할 수 있습니다.

이 캘린더는 팀원들의 예약 가능 시간과 원활하게 연동되어, 팀 멤버를 구성하고, 특정 그룹에 서비스를 할당하며, 서비스 시간을 설정하고, 예약 과정에서 고객으로부터 결제를 받을 수 있습니다.

## 서비스 캘린더 생성 가이드

- [1단계: 캘린더 설정으로 이동하여 필수 정보 입력](#1단계-캘린더-설정으로-이동하여-필수-정보-입력)
- [2단계: 서비스 세부사항 추가](#2단계-서비스-세부사항-추가)
- [3단계: 예약 가능 시간 설정](#3단계-예약-가능-시간-설정)
- [4단계: 폼 및 결제](#4단계-폼-및-결제)
- [5단계: 알림, 추가 옵션 및 커스터마이징](#5단계-알림-추가-옵션-및-커스터마이징)
- [6단계: 룸 및 장비](#6단계-룸-및-장비)

**관련 문서**
- [서비스 메뉴](../Calendar-Service-Menus/how-to-create-service-menus-for-calendars.md)
- [룸 및 장비](../Calendar-Rooms-&-Equipment/rooms-and-equipment.md)

## 서비스 캘린더를 활성화하는 방법

- 캘린더 설정(Calendar Settings)으로 이동하세요.
- "환경설정(Preferences)"을 클릭하세요.
- "앱 내 환경설정(In-App Preferences)" 하위에서 "서비스 메뉴(Service Menu)" 옵션을 토글하여 활성화하세요.
- 이제 "새 캘린더 생성(Create New Calendar)" 하위에 "서비스 캘린더(Service Calendar)"가 표시됩니다.

![서비스 캘린더 활성화](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033091453/original/FqaE8bMTXyi6lqgX9uT7V25nQNKoSPi19A.jpg?1726662778)

**참고:** 에이전시 관리자만 이 설정에 접근할 수 있습니다.

## 서비스 캘린더를 생성하는 방법

### 1단계: 캘린더 설정으로 이동하여 필수 정보 입력 {#Step-1}

- 하위 계정에 로그인한 후 캘린더(Calendars) > 캘린더 설정(Calendar Settings)으로 이동하세요.

- 캘린더(Calendars) 탭에서 "캘린더 생성(Create Calendar)"을 클릭한 다음, "서비스 캘린더(Service Calendar)" 옵션을 선택하세요.

![캘린더 생성](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033091551/original/HDAsdcSQ3dOu9sdFP7ignfVfVADJE9sZgA.jpg?1726662868)

![서비스 캘린더 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033092938/original/5FWfiG3mXYn626AJPSaNW0OJwTZ5FZzrJg.png?1726663686)

- **필수 정보 입력:** 서비스 캘린더에 필요한 정보를 제공하세요:
  - **서비스 이름:** 캘린더의 설명적인 이름을 입력하세요.
  - **서비스 설명:** 사용자가 캘린더의 목적을 이해할 수 있도록 간단한 설명을 추가하세요.
  - **팀원 배정 및 위치:** 생성하고 있는 서비스 캘린더에 배정될 팀원을 선택하세요. 서비스 캘린더에 팀원을 선택한 후, 고급 설정에서 선호하는 미팅 위치를 구성할 수 있습니다.

#### 사용 가능한 미팅 위치:
- **전화:** 기본값은 하위 계정의 전화번호이지만, 원하는 전화번호로 편집할 수 있습니다.
- **주소:** 기본값은 하위 계정의 사업장 주소이지만, 필요한 경우 다른 주소로 편집할 수 있습니다.
- **커스텀:** 매장 주소, 고객용 메시지 또는 고정 Zoom 링크 등 사용자 정의 값을 입력할 수 있습니다.
- **Zoom:** Zoom이 성공적으로 연동된 경우 동적이고 고유한 Zoom 링크가 생성됩니다. '내 프로필(My Profile)' > 캘린더 설정(Calendar Settings) > 비디오 회의(Video Conferencing)에서 Zoom이 연동되어 있는지 확인하세요.
- **Google Meet:** Google이 성공적으로 연동되고 '내 프로필(My Profile) > 캘린더 설정(Calendar Settings)' 섹션에서 Google Calendar가 연결된 캘린더로 선택된 경우, 동적이고 고유한 Google Meet 링크가 생성됩니다.

![팀원 및 위치 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033095010/original/mZpey4plMBvaArCKJ7OWIT6HuofvN60BvA.png?1726664808)

- **URL / 슬러그:** 캘린더 링크를 결정하는 캘린더 슬러그 또는 URL을 정의하세요.
- **시간:** 서비스의 지속 시간을 지정하세요.
- **예약 가능 시간:** 캘린더의 예약 가능 시간을 설정하세요.

![기본 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033095159/original/eTd7s9WhG3rgfO21WS4R8tQaDsKTP85zBQ.jpg?1726664904)

- 고급 옵션(Advanced Options)으로 서비스 캘린더를 추가로 커스터마이징할 수 있습니다. 고급 설정 버튼(Advanced Settings Button)을 클릭하세요.

### 2단계: 서비스 세부사항 {#Step-2}

- **서비스 로고 업로드:** 서비스 캘린더의 예약 위젯(Appointment Booking Widget)에 표시될 이미지입니다.

**참고:** 서비스 로고는 개별 서비스 캘린더의 예약 위젯에서만 표시됩니다. 서비스 메뉴/그룹의 경우 서비스 커버 이미지를 사용해야 합니다.

![서비스 로고 업로드](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033095572/original/5LcNzaSfG6AaBEOPXClUSRxDZzPKrD3Zog.png?1726665091)

- **서비스 메뉴에 연결:** 이 서비스 캘린더를 서비스 메뉴(모든 서비스가 한 페이지에 표시되는 곳)에 추가하려면, 캘린더에 대한 그룹을 선택해야 합니다. 그룹은 유사한 서비스를 함께 분류하는 방법으로 생각하세요. 예를 들어, "헤어"라는 그룹을 만들고 "헤어 컷", "헤어 스파", "헤어 컬러링"과 같은 서비스 캘린더를 할당할 수 있습니다.

**참고:** 서비스 캘린더는 서비스 메뉴와 그룹에서 모두 사용할 수 있습니다.

![서비스 메뉴 연결](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033095860/original/YwfWrtxRq4jH9pFrQN7YF6EVo3PCwtrRCw.png?1726665308)

- **예약 초대 제목 커스터마이징:** Google Calendar, Outlook, Apple Calendar 등에 표시되는 캘린더 이벤트의 제목입니다.

- **이벤트 색상:** 이 캘린더에 할당하고 싶은 이벤트 색상을 선택하세요. 색상은 Google Calendar의 이벤트와 동기화됩니다.

![이벤트 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033097763/original/2oP5JpxRkPcW7ubFvgeUI2zw5i6dNLdifw.png?1726666447)

서비스 캘린더는 주로 물리적 서비스를 위한 것이므로, **Zoom/Google Meet**를 포함한 미팅 위치 추가를 **지원하지 않습니다**.

### 3단계: 예약 가능 시간 {#Step-3}

- **주간 근무 시간:** 정기적인 주간 근무 시간을 설정하세요. 매주 반복되는 기본 스케줄을 설정하는 데 유용합니다.
- **날짜별 시간:** 특정 날짜에 대한 예약 가능 시간이나 불가능 시간을 커스터마이징할 수 있는 날짜별 시간을 설정하세요. 특정 날짜를 추가하고 해당 날짜에만 적용되는 시간을 정의할 수 있습니다.

![예약 가능 시간 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033097990/original/_BHEdx42rSxA0g2SxkxMdaZOYaGsqGLZgg.png?1726666576)

- **서비스 시간:** 각 예약의 길이를 설정하세요.
- **서비스 간격:** 서비스 간격을 지정하세요.
- **후 버퍼 시간:** 준비나 전환을 위해 예약 후 추가 시간을 설정하세요.
- **최소 예약 알림 시간:** 예약 알림에 필요한 사전 알림 시간을 설정하여, 예약이 몇 시간 또는 며칠 전에 마감되어야 하는지 지정하세요.
- **날짜 범위:** 예약할 수 있는 미래 날짜의 범위를 정의하세요.

![시간 설정 세부사항](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033098211/original/wp-_MHY5WFl4I43EAevwFHFx8rr9NHKYPQ.png?1726666731)

**참고:** 서비스 캘린더의 슬롯 간격은 기본적으로 15분으로 설정되어 있으며 변경할 수 없습니다.

### 4단계: 폼 및 결제 {#Step-4}

- **폼:** 고객 정보를 수집하는 방법을 유연하게 선택할 수 있습니다. 이름, 이메일, 전화번호와 같은 표준 세부 정보를 수집하는 기본 폼을 선택하거나, 특정 요구사항에 맞춘 커스텀 폼을 생성할 수 있습니다. 커스텀 폼을 사용하려면 사이트(Sites) > 폼(Forms) > 빌더(Builder)에서 생성한 후, 캘린더의 드롭다운 메뉴에서 선택하세요. 또한 다음 사항도 가능합니다:
  - 동의 체크박스를 켜기/끄기 토글
  - 동의 메시지 커스터마이징

**참고:** 커스텀 폼은 서비스 캘린더에 직접 예약된 경우에만 적용됩니다. 서비스 메뉴를 통한 예약의 경우 기본 폼이 사용됩니다.

![폼 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033098469/original/_zUV3XJjjUfzDzxTyaHh_ZsTMR977KTaeg.png?1726666924)

- **확인 페이지:** 예약이 완료된 후 사용자에게 확인을 표시하는 방법을 결정할 수 있습니다. 같은 페이지에 감사 메시지를 표시하거나 선택한 특정 URL로 사용자를 리다이렉트할 수 있습니다.

![확인 페이지 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033098676/original/xt0pa3mm08qtUeznIyvYKYkHRhHLIiG1-Q.png?1726667018)

- **결제:** 예약에 대한 결제를 받고 싶다면, 결제 게이트웨이가 연동되어 있는지 확인하세요. 설정이 완료되면 결제 금액을 지정하고 결제 수집을 시작할 수 있습니다. 결제는 주요 참석자에게만 적용되며 게스트에게는 적용되지 않습니다.

![결제 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033098846/original/PS0Yf9pewhBAwNQjQE86b9tWrhPz7g4Rdw.png?1726667144)

### 5단계: 알림, 추가 옵션 및 커스터마이징 {#Step-5}

- **알림:** 예약 알림을 받을 대상을 선택하고, Google이 참석자에게 초대 또는 업데이트 이메일을 보낼지 허용할지 설정할 수 있습니다. 또한 예약이 이루어질 때마다 연락처가 해당 팀원에게 할당되어야 하는지 결정할 수 있습니다.

![알림 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033096963/original/2ZfA1_WD1iB7_8kGksFdPqKLpw7K0rM2Eg.png?1726665961)

- **추가 메모:** 여기에 입력한 내용은 Google 초대에 포함됩니다. 이 기능이 작동하려면 '알림(Notifications)' 설정에서 "Google Calendar가 초대장을 보내도록 허용"이 활성화되어 있는지 확인하세요.

![추가 메모 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033097089/original/m0i1xYN9YSEZng78YCp7vwUrCnPe1pY2Eg.png?1726666049)

- **커스터마이징 - 서비스 커버 이미지:** 이 섹션에서 서비스 메뉴에 표시될 서비스 커버 이미지를 업로드하세요. 이 이미지는 Neo 그룹 위젯에서 표시됩니다.

![서비스 커버 이미지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033096556/original/D3PfZA_FICm01NhsEGy5Bo9qGGSKWtk_dg.png?1726665730)

- **팀원 선택:** 예약자가 예약 과정에서 캘린더 위젯에서 직접 팀원을 선택할 수 있도록 활성화/비활성화하세요.

![팀원 선택 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033096718/original/3LFpRwhqGqcq5OjQs5tvhlovTanGfZNVqQ.png?1726665821)

### 6단계: 룸 및 장비 {#Step-6}

- 생성된 룸과 장비 목록에서 선택할 수 있습니다. 이렇게 하면 선택된 룸/장비가 서비스 캘린더와 연결되고 이 캘린더와 함께 예약됩니다.

![룸 및 장비 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033096163/original/ah-MpxMoSaxo3TV59XGg6jhHrUPttSlDSg.png?1726665482)

- 마지막으로 저장(Save)을 클릭하면 완료! 서비스 캘린더가 예약 받을 준비가 되었습니다!

![완료](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033096246/original/XTBxHb8B5ZhImQPZC3--Axvyy8MVqF032A.png?1726665538)

## 주요 특징

1. 이 캘린더는 연락처가 자신을 위해 여러 서비스를 예약하거나 여러 참가자(본인과 게스트)를 위해 서비스를 조합하여 예약할 수 있게 합니다.

2. 캘린더는 기본 15분 슬롯 간격으로 작동하여 효율적인 스케줄링을 보장합니다. 이 간격은 고정되어 있지만, 예약 사이에 버퍼 시간을 추가할 수 있어 팀원들이 다음 고객을 준비할 시간을 확보할 수 있습니다.

3. 중요한 점은 서비스 캘린더의 예약 가능 시간이 할당된 팀원들의 스케줄과 직접 연결된다는 것입니다. 따라서 캘린더 예약 가능 시간을 구성하는 옵션은 없습니다. 캘린더는 할당된 팀원들의 예약 가능 시간만 고려합니다. 팀원이 특정 시간에 불가능하면 캘린더에 이 불가능 시간이 반영됩니다.

4. 하나의 예약 링크(서비스 메뉴)에 다양한 서비스를 표시하려면, 먼저 원하는 그룹을 생성하고, 서비스 캘린더를 만들어 해당 그룹에 할당한 후, 마지막으로 서비스 메뉴를 생성하는 것이 중요합니다.

5. 서비스 메뉴는 **미팅 위치**를 지원하지 않습니다. 서비스 캘린더에 추가된 미팅 위치는 서비스 메뉴에 **적용되지 않습니다**.

---
*원문 최종 수정: Tue, 17 Mar, 2026 at 1:00 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*