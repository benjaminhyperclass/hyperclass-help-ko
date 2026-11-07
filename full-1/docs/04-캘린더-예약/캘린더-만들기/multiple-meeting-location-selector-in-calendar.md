---
원문: https://help.gohighlevel.com/support/solutions/articles/155000002706-multiple-meeting-location-selector-in-calendar
번역일: 2026-11-07
카테고리: 04-캘린더-예약
---

# 예약 위젯에서 여러 미팅 장소 중 고르게 하기

캘린더 하나에 미팅 장소를 여러 개 등록하면, 예약자가 예약 위젯에서 원하는 장소를 직접 고를 수 있어요. 이 문서에서는 설정 방법과 장소 유형별 차이, 예약자가 장소를 고르는 방식을 안내해요.

[동영상](https://www.youtube.com/embed/TzGPUEb-6ns?&wmode=opaque)

## 개요

**캘린더 설정**에 미팅 장소를 여러 개 추가하면 예약 위젯에 모두 표시돼요. 예약자는 그중 편한 장소를 골라 예약할 수 있어요. 예약자에게 장소를 선택하게 하고 싶을 때 쓰면 좋아요.

## 여러 미팅 장소 설정하기

### 제한 사항

설정하기 전에 아래 제한 사항을 확인하세요.

1. 여러 미팅 장소는 **Event Calendar**(이벤트 캘린더)와, 팀원이 한 명인 **Round Robin**(라운드 로빈) & **Service**(서비스) 캘린더에서만 설정할 수 있어요.
2. 이 기능은 Neo 위젯에서만 지원돼요.

### 설정 순서

1. **캘린더 설정**으로 이동해 설정할 캘린더를 선택하세요.
2. 캘린더 종류에 따라 아래 위치까지 아래로 스크롤하세요.
   - **Event Calendar**: **미팅 장소** 섹션까지 스크롤하세요.

     ![Event Calendar의 미팅 장소 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033236047/original/DVaFUvuw4LiBw1D7f4gVmGauJ1ru0J79Kg.png?1726826723)

   - **Round Robin** / **Service** 캘린더: **Team Members**(팀 구성원) 섹션까지 스크롤하세요.

     ![Round Robin·Service 캘린더의 팀 구성원 섹션](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033236422/original/s9x6zLl3RbWrf7PgPj5Zs3GniwvqFLQMTw.png?1726826966)

3. **+ 위치 추가** 버튼을 클릭하세요.
4. 원하는 장소를 선택하고 내용을 설정하세요.
5. **사용자 지정**을 선택하면 표시용 이름(라벨)을 추가할 수 있어요.
   - 예를 들어 미팅 장소가 사무실 주소인데 예약 전에는 주소를 보여 주고 싶지 않다고 해 볼게요. 이때 장소 입력란에는 실제 주소를 입력하고, 라벨에는 "뉴욕 사무실"처럼 입력하세요.
   - 예약 위젯에는 예약이 끝나기 전까지 "뉴욕 사무실"이 표시돼요. 예약이 끝나면 실제 주소가 표시되고, 예약자에게도 실제 주소가 전달돼요.
6. 미팅 장소를 모두 추가했으면 **저장**을 클릭하세요.

![미팅 장소를 추가하고 저장하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033239553/original/WvWYqVl5UkPlOK6F6K4LBWdIqK5NfwZE-w.png?1726828802)

### 선택할 수 있는 미팅 장소

**Event Calendar**

- **전화번호**: 기본값으로 서브 계정의 전화번호가 채워져요. 원하는 번호로 바꿀 수 있어요.
- **주소**: 기본값으로 서브 계정의 비즈니스 주소가 채워져요. 필요하면 다른 주소로 바꿀 수 있어요.
- **사용자 지정**: 매장 주소, 고객에게 전할 안내 문구, 고정된 Zoom 링크 등 원하는 내용을 입력할 수 있어요. **Event Calendar**는 Zoom이나 Google Meet 링크를 예약마다 자동으로 만들어 주지 않아요.
- **예약자에게 물어보기**: 예약자가 원하는 미팅 장소를 직접 입력하게 해요. 입력한 장소는 이후 모든 곳에서 사용돼요. 장소를 두 개 이상 추가한 경우, 예약 위젯에는 이 기능을 나타내는 **Elsewhere**(다른 장소) 라벨이 표시돼요.

**Round Robin & Service 캘린더**

- **전화번호**: **Event Calendar**와 같이 기본 전화번호를 바꿀 수 있어요.
- **주소**: **Event Calendar**와 같이 기본 주소를 바꿀 수 있어요.
- **사용자 지정**: **Event Calendar**와 같이 원하는 내용을 입력할 수 있어요.
- **Zoom**: Zoom이 연동되어 있으면 예약마다 고유한 Zoom 링크가 만들어져요. **내 프로필 > 캘린더 설정 > Video Conferencing**(화상 회의)에서 Zoom이 연동되어 있는지 확인하세요.
- **Google Meet**: Google이 연동되어 있고, **내 프로필 > 캘린더 설정**의 연결된 캘린더로 Google Calendar를 선택했다면 예약마다 고유한 Google Meet 링크가 만들어져요.
- **예약자에게 물어보기**: 예약자가 원하는 미팅 장소를 직접 입력하게 해요. 입력한 장소는 이후 모든 곳에서 사용돼요. 장소를 두 개 이상 추가한 경우, 예약 위젯에는 이 기능을 나타내는 **Elsewhere** 라벨이 표시돼요.

![선택할 수 있는 미팅 장소 목록](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033242711/original/9FDhUWnonh9FchLLV29uA9KOsfBR22_w7Q.png?1726830855)

## 예약 위젯에서 예약자가 장소를 고르는 방법

**캘린더 설정**에서 등록한 장소가 모두 예약 위젯에 표시돼요. 예약자가 원하는 장소를 선택하면 그 장소가 예약의 미팅 장소가 돼요.

선택한 장소는 아래와 같은 곳에 표시돼요.

- 예약 확인 페이지
- 확인 이메일
- 워크플로우
- 앱 안의 예약 상세 창
- 그 밖에 미팅 장소가 표시되는 모든 곳

![예약 위젯에서 미팅 장소를 선택하는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033242908/original/9r8JiisLiCPco0fd_70Ds1mYtr9tn7Sk2w.png?1726830985)
