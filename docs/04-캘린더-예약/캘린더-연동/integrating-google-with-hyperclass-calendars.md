---
원문: /support/solutions/articles/155000002369-integrating-google-with-highlevel-calendars
번역일: 2026-11-06
카테고리: 04-캘린더-예약
---

# Google Calendar를 하이퍼클래스 캘린더에 연동하기

Google 계정을 하이퍼클래스 **캘린더**(Calendars)에 연결하면 일정이 서로 동기화되고, 캘린더를 한곳에서 관리할 수 있어요. 이 문서에서는 Google Calendar를 연결하는 순서를 안내해요.

## Google Calendar 연동이란?

Google Calendar를 하이퍼클래스와 연동하면 실시간 일정 관리, 간편한 가용 시간 관리, 플랫폼 간 동기화를 쓸 수 있어요. 통화 예약, 예약 자동화, 팀 일정 조율을 한곳에서 처리하기에 알맞아요.

## Google Calendar 연동의 주요 장점

- Google Calendar와 하이퍼클래스 사이에서 예약이 실시간으로 동기화돼요.
- 양방향 동기화로 두 플랫폼의 일정이 서로 같게 유지돼요.
- 충돌 캘린더를 활용해 중복 예약을 막을 수 있어요.
- 프로필마다 캘린더를 선택할 수 있어서 여러 사용자가 함께 쓰는 환경도 지원해요.
- 일정이 더 잘 보이고 관리하기 쉬워져요.
- 연결이 끊긴 동안 만들어진 예약은 다시 연결하면 자동으로 동기화돼요. 새 캘린더를 연결하거나 선택한 캘린더를 바꾸면 앞으로의 예약이 자동으로 다시 동기화돼요.

## 연동 전에 준비할 것

1. 사용할 수 있는 Google 계정
2. 하이퍼클래스 **캘린더 설정**에 대한 **관리자** 또는 사용자 수준 접근 권한
3. 연결할 캘린더가 충돌하는 권한으로 공유되어 있지 않아야 해요.

{% hint style="info" %}
캘린더 연동은 회사 전체 설정이 아니라 사용자 프로필별로 연결돼요. 각 사용자가 자신의 Google Calendar를 직접 연결해야 해요.
{% endhint %}

## Google Calendar 연결 순서

▶ 영상 [4강 3부 57:45](https://www.youtube.com/watch?v=oEDq8IGJ3-c&t=3465s)

### 1단계: 캘린더 연결 화면으로 이동하기

1. 서브 계정으로 이동해 왼쪽 메뉴에서 **캘린더**를 선택하고, 오른쪽 위의 **캘린더 설정**을 클릭하세요.

   ![캘린더 화면 오른쪽 위의 캘린더 설정 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050180404/original/7DzuYUvJc0EGi-lSow3gnOwZyyqaovKwtg.png?1753112360)
2. 위쪽 탭에서 **연결**을 클릭한 다음, **새로 추가 +** 버튼을 눌러 새 캘린더를 추가하세요.

   ![연결 탭에서 새로 추가 버튼을 누르는 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050180701/original/dbjrV8gci36b1H-taFZVzuTRn4AEZ5PyMw.png?1753112644)

### 2단계: Google 계정으로 인증하기

1. **연결** 페이지에서 Google Calendar 옆의 **연결** 버튼을 클릭하세요.

   ![Google Calendar 옆의 연결 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050180794/original/_sWTEdQBEEhDnXoyRt-Ef4d2efTeCUjC1g.png?1753112712)
2. 사용할 Google 계정을 선택하세요.
3. 요청하는 권한을 모두 허용하세요. **캘린더**(읽기/쓰기), **프로필**, **이메일** 접근 권한이 포함돼요.

   ![Google 계정 권한 허용 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050180917/original/TsIcIfPiiMCzymf4Tg4IVsCb94ML43i2YQ.png?1753112811)

{% hint style="warning" %}
캘린더 전체 접근 권한을 허용해야 해요. "writer" 권한을 허용하지 않으면 동기화 문제가 생길 수 있어요.
{% endhint %}

{% hint style="info" %}
연결할 때 Google에서 권한을 일부만 허용할 수도 있어요. 필요한 권한을 모두 허용하지 않으면 동기화가 실패할 수 있어요. **설정 > 연동 > Google**에서 권한 누락 경고가 있는지 확인하고, **Reconnect**(다시 연결)로 빠진 권한을 허용하세요.
{% endhint %}

## 자주 묻는 질문

### 캘린더가 동기화되지 않아요. 왜 그런가요?

**설정 > 연동 > Google**에서 권한 누락 경고가 있는지도 확인하세요. 필수 권한이 빠져 있다면 **Reconnect**(다시 연결)를 클릭하세요.

### Google Calendar가 목록에 보이지 않아요. 어떻게 하나요?

올바른 Google 계정으로 로그인했는지 확인하세요. 모든 Google 계정에서 로그아웃한 뒤, 올바른 계정으로 다시 연결하세요.

### Google Calendar 동기화가 끊기는 이유는 무엇인가요?

- 토큰 만료
- 캘린더 삭제
- 연결한 뒤 권한 취소

자세한 내용은 "Why Google Calendar Integration Breaks and How to Fix it" 문서를 참고하세요.

### 연결한 Google Calendar가 삭제되어 오류 배너가 보여요. 어떻게 하나요?

배너의 **Fix This**(해결하기)를 클릭하세요. 삭제된 캘린더 목록과, 그 캘린더가 하이퍼클래스 어디에 연결되어 있는지 보여 주는 창이 열려요. **Remove Deleted Calendars**(삭제된 캘린더 제거)를 클릭하면 끊어진 연결이 정리돼요. 이후 필요하면 다시 연결하거나 사용 중인 캘린더를 선택하세요.

### 캘린더 하나를 여러 사용자가 함께 쓸 수 있나요?

아니요. 캘린더 연동은 사용자별로 이루어져요. 개인별 일정 예약과 동기화를 쓰려면 각 사용자가 자신의 Google Calendar를 연결해야 해요.

### Google Calendar를 여러 개 동기화할 수 있나요?

네, Google Calendar를 여러 개 연결할 수 있어요. 예약에 쓸 캘린더 하나는 **Linked Calendar**(연결된 캘린더)로, 나머지는 **Conflict Calendars**(충돌 캘린더)로 설정하면 중복 예약을 막을 수 있어요.

### 특정 종류의 Google 계정이 필요한가요? (Gmail, G Suite 등)

아니요. 개인 Gmail 계정과 G Suite(Google Workspace) 계정 모두 이 연동을 쓸 수 있어요.
