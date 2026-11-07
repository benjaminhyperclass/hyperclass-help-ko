---
원문: https://help.gohighlevel.com/support/solutions/articles/48001181302-how-to-re-integrate-google-calendar-for-a-user
번역일: 2026-11-07
카테고리: 04-캘린더-예약
---

# 사용자의 Google 캘린더 다시 연동하기

Google 캘린더를 하이퍼클래스에 다시 연동해서 동기화 문제를 해결하고 캘린더 기능을 복구하는 방법을 안내해요.

{% hint style="warning" %}
"로그인해서 보기(login as)" 기능은 쓸 수 없어요. Google 계정 연결은 그 계정을 소유한 사용자가 직접 해야 해요.
{% endhint %}

[동영상](https://www.youtube.com/embed/G5HzW3bPH_w?&t=4s&wmode=opaque)

## Google 캘린더 재연동이란?

Google 계정이 연결되어 있는데도 동기화가 계속 실패한다면, **설정 > 연동 > Google**에서 권한이 부족하다는 경고가 있는지 확인하세요. 경고가 있으면 **Reconnect**(다시 연결)를 클릭해서 Google OAuth 인증을 다시 진행하고, 빠진 권한을 허용하세요.

{% hint style="info" %}
다시 연결하면, 연동이 끊긴 동안 만들어졌는데 아직 동기화되지 않은 예정 예약이 하이퍼클래스에서 자동으로 동기화돼요. 동기화하려고 예약을 일일이 수정할 필요는 없어요.
{% endhint %}

다음과 같은 경우에 재연동을 권장해요.

- 캘린더 일정이 동기화되지 않을 때
- Google 계정의 권한이 변경되었거나 취소되었을 때
- 캘린더 연결이 끊겨서 다시 연결해야 할 때
- 계정에 인증 오류나 동기화 문제가 계속 나타날 때

## Google 캘린더 재연동 절차

### 1단계: Google 캘린더 삭제

연결된 Google 캘린더는 두 곳에서 삭제할 수 있어요.

**1. 내 프로필에서 삭제하기**

1. 서브 계정에서 **설정**을 클릭하세요.
2. **내 프로필**을 선택하세요.
3. **캘린더 설정**으로 이동하세요.
4. 연결된 Google 계정의 **삭제**(휴지통) 아이콘을 클릭하세요.

![내 프로필의 캘린더 설정에서 연결된 Google 계정 삭제 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052594133/original/ALs3W46u-TZyhIJvjaJe_-U-4OpyhB-Lsw.png?1756387386)

**2. 캘린더 연결 화면에서 삭제하기**

1. **설정 > 캘린더**로 이동하세요.
2. **연결** 탭을 선택하세요.
3. **Connected Calendars**(연결된 캘린더) 아래에서 연결된 Google 계정의 **삭제**(휴지통) 아이콘을 클릭하세요.

![연결 탭의 연결된 캘린더에서 Google 계정 삭제 아이콘](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052594415/original/4dcbvs0OqHramXOF8ldYzXb0LilpKBHapA.png?1756387570)

팝업이 나타나면 확인 체크박스를 선택하고 **확인**을 클릭하세요.

![삭제 확인 팝업](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052594468/original/I-xNSIBPMDKX70NFowQF08pK6BkZYlJSIw.png?1756387626)

### 2단계: Google 캘린더 다시 연동

위와 같은 두 곳(내 프로필, 캘린더 연결 화면)에서 Google 캘린더를 다시 연결할 수 있어요.

1. 서브 계정에서 **설정**을 클릭하고 **내 프로필**을 선택하세요. **캘린더 설정**에서 **새로 추가 +** 버튼을 클릭하세요. Google 계정을 연결하는 자세한 과정은 "Google 캘린더를 하이퍼클래스와 연동하는 방법" 가이드를 참고하세요.

![새로 추가 버튼을 눌러 Google 캘린더를 연결하는 과정](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052596409/original/cblnkrM4D_FEvrGVr-tvceSs5C4yAYGeOg.gif?1756388248)

{% hint style="info" %}
재연동을 마친 뒤에는 Google 캘린더를 테스트해서 동기화가 제대로 되는지 확인하세요. 테스트 후에도 문제가 계속되면 하이퍼클래스 고객지원에 문의하세요.
{% endhint %}

## 자주 묻는 질문

### 다시 연결하기 전에 기존 연동을 먼저 삭제해야 하나요?

네, 동기화 충돌을 피하려면 다시 연결하기 전에 현재 Google 캘린더 연동을 먼저 해제하는 것을 권장해요.

### 캘린더 연결을 해제하면 예약이 사라지나요?

아니요. 연결을 해제했다가 다시 연결해도, 이미 시스템에 동기화된 지난 예약과 예정 예약은 삭제되지 않아요.

### 캘린더가 제대로 다시 연동되었는지 어떻게 알 수 있나요?

다시 연결하면 캘린더가 동기화 상태가 활성인 채로 목록에 표시돼요. 테스트 예약을 만들어서 하이퍼클래스와 Google 캘린더 양쪽에 모두 나타나는지 확인해 보세요.

### 다른 Google 계정으로 다시 연동할 수 있나요?

네. 기존 계정의 연결을 해제한 뒤, 재연동할 때 다른 Google 계정으로 로그인하면 돼요. 캘린더 일정이 들어 있는 계정이 맞는지만 확인하세요.

### 한 사용자에게 캘린더를 여러 개 연결할 수 있나요?

네, 캘린더를 여러 개 추가할 수 있어요. 다만 주 캘린더는 하나만 지정할 수 있어요.
