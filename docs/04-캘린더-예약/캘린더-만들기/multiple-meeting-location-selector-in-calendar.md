---

번역일: 2026-04-06
카테고리: 04-캘린더-예약 > 캘린더-만들기
---

# 캘린더 다중 미팅 장소 선택 기능

**목차**

- [개요](#개요)
- [다중 미팅 장소 설정 방법](#다중-미팅-장소-설정-방법)
- [제한사항](#제한사항)
- [설정 단계](#설정-단계)
- [사용 가능한 미팅 장소](#사용-가능한-미팅-장소)
- [예약 위젯 - 예약자가 장소를 선택하는 방법](#예약-위젯-예약자가-장소를-선택하는-방법)

### **개요**

다중 미팅 장소 선택 기능을 사용하면 캘린더 설정에 여러 미팅 장소를 추가할 수 있습니다. 이렇게 설정된 장소들은 예약 위젯에 표시되어 예약자가 원하는 미팅 장소를 유연하게 선택할 수 있게 해줍니다. 이 기능은 예약자에게 다양한 미팅 장소 선택권을 제공하고 싶을 때 특히 유용합니다.

---

### **다중 미팅 장소 설정 방법**

#### **제한사항**

설정을 시작하기 전에 다음 제한사항을 확인해주세요:

- 다중 미팅 장소는 이벤트 캘린더(Event Calendar)와 팀원이 한 명인 라운드 로빈 & 서비스 캘린더(Round Robin & Service Calendar)에서만 설정 가능합니다.
- 이 기능은 Neo 위젯에서만 지원됩니다.

#### 설정 단계

- 캘린더 설정으로 이동하여 설정하려는 캘린더를 선택합니다.
- 이벤트 캘린더(Event Calendar)의 경우: 아래로 스크롤하여 미팅 장소 섹션을 찾습니다.

![이벤트 캘린더 미팅 장소 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033236047/original/DVaFUvuw4LiBw1D7f4gVmGauJ1ru0J79Kg.png?1726826723)

- 라운드 로빈 / 서비스 캘린더(Round Robin / Service Calendar)의 경우: 아래로 스크롤하여 팀 멤버 섹션을 찾습니다.

![라운드 로빈 서비스 캘린더 팀 멤버 설정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033236422/original/s9x6zLl3RbWrf7PgPj5Zs3GniwvqFLQMTw.png?1726826966)

- "+Add Location" 버튼을 클릭합니다.
- 원하는 장소를 선택하고 설정합니다.
- '사용자 지정(Custom)'을 선택하면 표시 라벨을 추가할 수 있습니다. 예를 들어, 실제 미팅 장소는 사무실 주소이지만 예약 전에는 주소를 노출하고 싶지 않다면, 장소 입력란에는 주소를 입력하고 라벨에는 "서울 사무소" 같은 이름을 사용할 수 있습니다. 예약 위젯에는 "서울 사무소"가 표시되고, 예약 완료 후에는 실제 주소가 예약자에게 전달됩니다.
- 미팅 장소 추가가 완료되면 "Save" 버튼을 클릭합니다.

![미팅 장소 추가 설정 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033239553/original/WvWYqVl5UkPlOK6F6K4LBWdIqK5NfwZE-w.png?1726828802)

---

#### 사용 가능한 미팅 장소

**이벤트 캘린더:**

- **전화(Phone):** 기본값으로 하위 계정의 전화번호가 입력되지만, 원하는 번호로 수정할 수 있습니다.
- **주소(Address):** 기본값으로 하위 계정의 비즈니스 주소가 입력되지만, 필요시 다른 주소로 수정할 수 있습니다.
- **사용자 지정(Custom):** 매장 주소, 고객 안내 메시지, 고정된 Zoom 링크 등 원하는 값을 입력할 수 있습니다. 이벤트 캘린더는 동적 Zoom / Google Meet 링크 생성을 지원하지 않습니다.
- **예약자에게 문의:** 예약자가 선호하는 미팅 장소를 직접 입력하도록 요청하며, 입력된 장소는 모든 참조에서 사용됩니다. 둘 이상의 장소가 추가된 경우, 예약 위젯에 '기타 장소(Elsewhere)' 라벨이 표시됩니다.

**라운드 로빈 & 서비스 캘린더:**

- **전화(Phone):** 이벤트 캘린더와 마찬가지로 기본 전화번호를 수정할 수 있습니다.
- **주소(Address):** 이벤트 캘린더와 마찬가지로 기본 주소를 수정할 수 있습니다.
- **사용자 지정(Custom):** 이벤트 캘린더와 마찬가지로 원하는 값을 입력할 수 있습니다.
- **Zoom:** Zoom이 성공적으로 연동된 경우 고유한 Zoom 링크가 자동 생성됩니다. 'My Profile(내 프로필)' > Calendar Settings(캘린더 설정) > Video Conferencing(화상 회의)에서 Zoom 연동을 확인하세요.
- **Google Meet:** Google이 성공적으로 연동되고 'My Profile(내 프로필) > Calendar Settings(캘린더 설정)' 섹션에서 Google Calendar가 연결된 캘린더로 선택된 경우 고유한 Google Meet 링크가 생성됩니다.
- **예약자에게 문의:** 예약자가 선호하는 미팅 장소를 직접 입력하도록 요청하며, 입력된 장소는 모든 참조에서 사용됩니다. 둘 이상의 장소가 추가된 경우, 예약 위젯에 '기타 장소(Elsewhere)' 라벨이 표시됩니다.

![미팅 장소 옵션 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033242711/original/9FDhUWnonh9FchLLV29uA9KOsfBR22_w7Q.png?1726830855)

---

### 예약 위젯 - 예약자가 장소를 선택하는 방법

캘린더 설정에서 구성한 모든 옵션이 예약 위젯에 표시됩니다. 예약자는 선호하는 장소를 선택할 수 있으며, 선택된 장소는 예약의 미팅 장소로 사용됩니다. 선택된 장소는 확인 페이지, 확인 이메일, 워크플로우, 앱 내 예약 모달, 그리고 미팅 장소가 표시되는 모든 곳에서 사용됩니다.

![예약 위젯에서 장소 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033242908/original/9r8JiisLiCPco0fd_70Ds1mYtr9tn7Sk2w.png?1726830985)

---
*원문 최종 수정: Sun, 20 Apr, 2025 at 10:27 PM*
*Hyperclass 사용 가이드 — hyperclass.ai*