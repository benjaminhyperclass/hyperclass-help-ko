---
원문: /support/solutions/articles/155000003552-configuring-calendar-widget-style-classic-neo-
번역일: 2026-11-06
카테고리: 04-캘린더-예약
---

# 캘린더 위젯 스타일 설정 (Classic·Neo)

하이퍼클래스는 예약 캘린더가 고객에게 보이는 방식을 정하는 위젯 스타일로 Classic과 Neo, 두 가지를 제공해요. 이 문서에서는 두 스타일의 차이와 장점, 설정 방법을 안내해요.

## 캘린더 위젯 스타일이란?

캘린더 위젯 스타일은 리드나 고객에게 예약 캘린더를 공유할 때 화면이 어떻게 보일지 정하는 설정이에요. 하이퍼클래스에는 Classic 위젯과 Neo 위젯이 있고, 쓰임새와 사용자 지정 범위가 서로 달라요.

## 캘린더 위젯 스타일의 장점

각 스타일의 장점을 알면 일정 관리 방식에 맞는 위젯을 고르기 쉬워요.

- Classic 스타일: 간단하고 안정적인 레이아웃이에요. 빠르게 설정해서 기본적인 예약을 받을 때 알맞아요.
- Neo 스타일: 현대적이고 사용자 지정 범위가 넓은 화면이에요. 위젯 단계 순서 변경, 색상 사용자 지정, **직원 선택**, 클래스 예약 좌석 표시 같은 기능을 쓸 수 있어요.
- 유연성: 캘린더를 만들거나 편집할 때 스타일을 바꿀 수 있어요.
- 그룹 캘린더 기본값: 그룹 캘린더에는 Neo 위젯이 자동으로 적용되어, 깔끔한 그룹 예약 화면을 제공해요.

## Classic 위젯

Classic 위젯은 단순한 레이아웃으로 예약을 받는 데 초점을 맞췄어요. 세밀한 사용자 지정이나 현대적인 디자인이 필요 없는 비즈니스에 잘 맞아요.

- 설정이 빠르고 간단해요.
- 단일 캘린더나 미배정 캘린더에 쓰는 표준 레이아웃이에요.
- 사용자 지정을 최소로 하고 싶은 비즈니스에 알맞아요.

![Classic 위젯 화면 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053389155/original/ITlrUJmXGd8onCHwAW3wpA-NXeTdjgBokQ.png?1757424303)

## Neo 위젯

Neo 위젯은 사용자 지정과 유연성을 중심으로 만든 최신 스타일이에요. 그룹 캘린더의 기본 스타일이며, 더 다양한 기능을 지원해요. 그룹 캘린더 화면 구성은 [Neo 그룹 보기 템플릿](../neo-group-view-template.md) 문서에서 볼 수 있어요.

- 색상, 배경, 버튼을 사용자 지정할 수 있어요.
- 위젯 단계(폼, 날짜 및 시간, 결제)의 순서를 바꿀 수 있어요.
- 라운드 로빈 캘린더에서 [직원 선택](../Round-Robin-Calendars/round-robin-calendar-staff-selection.md) 옵션을 쓸 수 있어요.
- 클래스 예약 캘린더에서 좌석을 표시할 수 있어요.
- 간결하고 현대적인 화면이에요.

![Neo 위젯 화면 예시](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053389123/original/vrF3eAhQgwPB6xaHA0xekaPfZKlCeVBVPQ.png?1757424283)

## 캘린더 위젯 스타일 설정하기

위젯 스타일을 고르거나 바꾸면 예약 페이지를 원하는 디자인과 기능에 맞출 수 있어요.

{% hint style="info" %}
**Classic과 Neo를 고르기 전에 알아 두세요**

두 위젯의 차이를 알아 두면 캘린더 설정에 맞는 스타일을 고르기 쉬워요.

- 미배정 캘린더는 Classic이 기본이고, 그룹 캘린더는 Neo가 기본이에요.
- 색상, 배경, 버튼 텍스트 같은 사용자 지정 옵션은 Neo에서만 쓸 수 있어요.
- 라운드 로빈 캘린더의 **직원 선택**도 Neo가 필요해요.
- 클래스 예약의 좌석 표시도 Neo에서만 지원해요.
- 결제 받기는 Classic과 Neo 모두 지원해요.
- 위젯 스타일은 언제든 바꿀 수 있고, 기존 예약에는 영향이 없어요.
{% endhint %}

### 설정 열기

왼쪽 메뉴에서 **설정**을 클릭하세요. 계정 환경, 비즈니스 정보, 캘린더 설정을 관리하는 곳이에요.

![왼쪽 메뉴에서 설정 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053389542/original/nWbGf1844DFD6LZ2BZ-cdxkMBKzdyR8LfQ.png?1757424497)

### 캘린더로 이동

**설정**에서 **비즈니스 서비스** 아래의 **캘린더**를 클릭하세요. 만들어 둔 캘린더가 모두 보이는 관리 화면으로 이동해요.

![비즈니스 서비스 아래 캘린더 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053389596/original/R8zGPM6caJtwmbcZnsyILto3USKu-aQ3-A.png?1757424537)

### 캘린더 만들기 또는 편집

**캘린더** 화면에서 새 캘린더를 만들려면 **New Calendar**(새 캘린더)를 클릭하세요. 기존 캘린더의 설정을 바꾸려면 해당 캘린더 옆의 **편집** 아이콘을 클릭하세요. 이 화면에서 위젯 스타일을 정하거나 바꿀 수 있어요.

![새 캘린더 버튼과 편집 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053389669/original/knlBJ5svshub779YYyQQtSglHMRj5T1NGA.png?1757424579)

### 위젯 스타일 선택

캘린더 설정 화면에서 **사용자 지정** 탭으로 이동하세요. **Calendar Widget Style**(캘린더 위젯 스타일)에서 **Classic**과 **Neo** 중 하나를 선택하세요. 그룹 캘린더는 Neo가, 미배정 캘린더는 Classic이 기본값이에요.

![사용자 지정 탭에서 캘린더 위젯 스타일 선택](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053389793/original/hSuU6gasTFdtF6G1aLWDdm15ZkmzzrGb3A.png?1757424651)

## 자주 묻는 질문

### 캘린더를 만든 뒤에 Classic에서 Neo로 바꿀 수 있나요?
네, 기존 캘린더를 언제든 편집해서 위젯 스타일을 바꿀 수 있어요.

### 사용자 지정 옵션은 Classic과 Neo 위젯 모두에서 쓸 수 있나요?
아니요. 색상, 배경, 순서 변경 같은 사용자 지정 기능은 Neo 위젯에서만 쓸 수 있어요.

### 그룹 캘린더는 왜 Neo가 기본값인가요?
Neo는 고급 그룹 예약 기능과 **직원 선택**을 지원해요. 여러 팀원이 함께 쓰기에 알맞은 현대적인 레이아웃이기도 해요.

### 좌석이 여러 개인 클래스 예약에는 어떤 위젯을 써야 하나요?
시간대별로 남은 좌석을 표시하려면 Neo 위젯이 필요해요.

### 위젯 스타일을 바꾸면 기존 예약에 영향이 있나요?
아니요. 위젯 스타일을 바꾸면 예약 페이지의 모양만 달라지고, 기존 예약은 그대로예요.
