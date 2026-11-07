---
원문: /support/solutions/articles/48001184594-troubleshoot-a-missing-google-calendar-account-in-highlevel
번역일: 2026-11-06
카테고리: 04-캘린더-예약
---

# 하이퍼클래스에서 Google Calendar 계정이 보이지 않을 때 해결하기

사용자 프로필에 Google Calendar 계정이 이미 연결되어 있는데도 캘린더를 구성하는 화면에서 보이지 않을 수 있어요. 이 문서에서는 계정 재승인, Google 권한 누락, 동기화할 Google Calendar 미선택 같은 원인을 하나씩 확인하고 해결하는 방법을 안내해요. 연결 상태와 권한을 먼저 확인하면 불필요하게 다른 Google 계정을 새로 연결하지 않아도 돼요.

## 하이퍼클래스에서 Google Calendar 계정이 보이지 않는 이유

하이퍼클래스의 Google Calendar 연결은 **사용자별**이에요. 사용자마다 자기 Google 계정을 직접 연결해요. Google 계정을 연결하면 하이퍼클래스가 Google Calendar에 접근할 수 있게 되고, 그 계정의 개별 캘린더는 동기화와 가용 시간 설정에 맞게 따로 선택해요.

{% hint style="warning" %}
Google 계정을 가진 사용자가 직접 Google 승인을 완료해야 해요. 다른 사용자의 Google 계정을 연결하려고 "다른 사용자로 로그인(login as)" 방식을 쓰지 마세요.
{% endhint %}

## 연결 문제를 확인하면 좋은 점

계정 연결, Google 권한, 개별 캘린더 접근 중 어디가 문제인지 알면 알맞은 방법으로 해결할 수 있어요. 이미 잘 설정된 캘린더 구성을 불필요하게 바꾸지 않고 캘린더 가용 시간을 되살릴 수 있어요.

- 캘린더 접근 복구: 연결이나 권한에 문제가 있는 Google 계정을 다시 승인해요.
- 필요한 권한 확인: 하이퍼클래스가 연동에 필요한 Google Calendar 권한을 갖고 있는지 확인해요.
- 잘못된 연결 방지: 관련 없는 계정을 추가하지 않고, 원래 쓰려던 Google 계정을 다시 연결해요.
- 캘린더 단위 문제 구분: 계정 연결 문제인지, 특정 Google Calendar에 접근하지 못하는 문제인지 구분해요.

## 문제를 확인하기 전에

Google Calendar 연결은 하이퍼클래스 사용자 한 명 한 명에게 속해 있어요. 그래서 먼저 올바른 사용자와 Google 계정인지 확인해야 엉뚱한 계정을 다시 연결하는 일을 막을 수 있어요. Google 계정을 연결하는 것과, 그 계정에서 동기화할 캘린더를 고르는 것은 다른 작업이라는 점도 기억해 두세요.

변경하기 전에 아래 내용을 확인하세요.

- 올바른 하이퍼클래스 사용자로 작업하고 있어요.
- 그 사용자가 연결하려는 Google 계정이 무엇인지 알고 있어요.
- 사용자가 그 Google 계정에 직접 로그인할 수 있어요.
- 사용하려는 Google Calendar가 그 계정 소유이거나, 충분한 권한으로 공유되어 있어요.
- 재승인이 필요하면 사용자가 필요한 Google 권한을 승인할 수 있어요.

{% hint style="info" %}
Google 계정이 연결되어 있다고 해서 그 계정의 모든 Google Calendar가 하이퍼클래스에서 동기화되도록 설정된 것은 아니에요.
{% endhint %}

## 보이지 않는 Google Calendar 계정 해결하기

이전에 연결했는데 원하는 위치에 보이지 않는다면, 현재 연결과 Google 승인 상태를 확인해 보세요. 기존 계정이 안 보인다고 해서 다른 계정을 연결하지 말고, 사용자가 하이퍼클래스에서 쓰려던 Google 계정을 그대로 사용하세요.

1. 해당 서브 계정에서 **캘린더**로 이동하세요.
2. **캘린더 설정**을 여세요.
3. **연결** 탭을 선택하세요.

   ![연결 탭 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080995897/original/zj73O15PSpLaEzboGqUsXKo2bOlWYuY5PA.png?1789486217)
4. 쓰려는 Google 계정이 연결된 캘린더 계정으로 보이는지 확인하세요.
5. Google 계정이 연결되어 있지 않다면 **새로 추가 +**를 클릭하세요.

   ![새로 추가 버튼 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080995957/original/Or65Gm6mxuceZGSNNFFaBNTxa2uoQPp1TQ.png?1789486255)
6. 캘린더 제공업체로 **Google Calendar**를 선택하세요.

   ![캘린더 제공업체 선택 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155080996061/original/5-HLSPG3Ei89z8YWH-bW-wHcG_U5B1SIkw.png?1789486300)
7. Google에서 계정을 선택하라고 하면, 하이퍼클래스에서 쓰려는 Google 계정과 같은 계정을 선택하세요.
8. 계정 선택 화면에 올바른 계정이 보이지 않으면, Google의 계정 선택 또는 로그인 옵션으로 그 계정에 로그인하세요.

{% hint style="warning" %}
이전에 연결된 계정이라는 이유로 다른 Google 계정을 선택할 필요는 없어요. 현재 하이퍼클래스 사용자에게 맞는 계정을 승인하는 것이 목표예요.
{% endhint %}

9. Google 승인 절차를 마치고, Google Calendar 연동에 필요한 권한을 허용하세요.
10. 승인이 끝나면 하이퍼클래스로 돌아오세요.
11. **캘린더 설정 > 연결**에 Google 계정이 표시되는지 확인하세요.
12. 사용하려는 Google Calendar를 해당 캘린더 구성에서 고를 수 있는지 확인하세요.

## Google 권한 확인하고 계정 재연결하기

Google 계정이 연결된 것처럼 보여도, 승인된 권한이 하이퍼클래스에 필요한 권한을 모두 충족하지 못할 수 있어요. 이럴 때는 계정을 재연결해 하이퍼클래스를 다시 승인하면 필요한 권한이 복구돼요. 완전히 다른 Google 계정을 추가해야 한다고 생각하지 않아도 돼요.

1. **설정 > 연동**으로 이동하세요.
2. **Google** 연동을 찾으세요.
3. 필요한 권한이 없다는 경고나 표시가 있는지 확인하세요.
4. **재연결** 옵션이 보이면 **재연결**을 클릭하세요.
5. 올바른 Google 계정을 선택하세요.
6. Google 승인 안내에 따라 필요한 권한을 허용하세요.
7. **캘린더 > 캘린더 설정 > 연결**로 돌아가세요.
8. Google 계정과 사용하려는 캘린더가 표시되는지 확인하세요.

권한 취소, Google 계정 보안 변경, 비밀번호 변경, 더 이상 유효하지 않은 승인 같은 일이 생기면 Google 연결을 다시 승인해야 할 수 있어요.

이런 경우에 대한 자세한 내용은 [Google Calendar 연동이 끊어지는 이유](why-google-calendar-integration-breaks.md)를 참고하세요.

## 그래도 계정이 보이지 않으면 Google Calendar 다시 연동하기

권한을 재연결해도 계정이 돌아오지 않으면 Google Calendar를 처음부터 다시 연동해야 할 수 있어요. 다시 연동하면 연결이 새로 만들어져요. 일반적인 **재연결** 옵션으로 기존 승인을 복구할 수 없을 때 쓰는 다음 단계예요.

기존 연결을 제거하기 전에 재연동 전용 안내를 먼저 읽고, 캘린더와 동기화가 어떻게 동작하는지 확인하세요.

현재 재연동 방법은 [사용자의 Google Calendar 다시 연동하기](../how-to-re-integrate-google-calendar-for-a-user.md)를 따라 하세요.

재연결한 뒤에는 이렇게 확인하세요.

1. **캘린더 설정 > 연결**로 돌아가세요.
2. 올바른 Google 계정이 연결됨으로 표시되는지 확인하세요.
3. 사용하려는 Google Calendar가 보이는지 확인하세요.
4. 해당 **Linked Calendar**(연결 캘린더)와 **Conflict Calendar**(충돌 캘린더) 구성을 확인하세요.
5. 필요하면 캘린더 동기화를 테스트해서 연결이 제대로 동작하는지 확인하세요.

## 연결된 Google 계정과 Linked Calendar의 차이

Google 계정을 연결하는 것과 동기화할 Google Calendar를 선택하는 것은 캘린더 구성에서 서로 다른 부분이에요. 이 차이를 알면 문제가 Google 승인에 있는지, 특정 캘린더 구성에 있는지 가려낼 수 있어요.

- 연결된 Google 계정: 하이퍼클래스가 사용자의 Google Calendar 계정에 접근할 수 있도록 승인해요.
- **Linked Calendar**(연결 캘린더): 동기화에 사용할 외부 캘린더를 정해요.
- **Conflict Calendar**(충돌 캘린더): 선택한 캘린더의 바쁨 일정을 사용자의 가용 시간 판단에 반영해요.

**연결**에는 Google 계정이 제대로 보이는데 기대한 캘린더 동작이 되지 않는다면, Google 계정을 계속 다시 연결하지 말고 Linked Calendar와 Conflict Calendar 구성을 확인하세요.

자세한 설정 방법은 [Linked Calendar와 Conflict Calendar 설정하기](../setting-up-linked-calendars-conflict-calendars.md)를 참고하세요.

## 자주 묻는 질문

### Google 계정은 연결되어 있는데 하이퍼클래스에서 원하는 위치에 보이지 않아요.
계정을 다시 승인해야 하거나, 필요한 Google 권한이 빠졌거나, 필요한 Google Calendar가 해당 캘린더 구성에서 아직 선택되지 않았을 수 있어요. 연결을 제거하기 전에 **캘린더 설정 > 연결**과 **설정 > 연동 > Google**을 모두 확인해 보세요.

### 재연결할 때 같은 Google 계정을 다시 선택해야 하나요?
네. 기존 사용자의 Google Calendar 연결을 복구하려면, 그 사용자가 하이퍼클래스에서 쓰려던 Google 계정을 선택하세요. 기존 연결에 재승인이 필요하다고 해서 다른 Google 계정을 고를 필요는 없어요.

### 요청하는 Google Calendar 권한을 모두 허용해야 하나요?
계정을 승인하거나 재연결할 때 Google Calendar 연동에 필요한 권한을 허용하세요. 필요한 권한이 빠지면 하이퍼클래스가 캘린더 정보에 접근하거나 동기화하지 못할 수 있어요.

### 에이전시 관리자가 "다른 사용자로 로그인(login as)"해서 다른 사용자의 Google Calendar를 연결할 수 있나요?
Google 계정은 그 계정을 가진 사용자가 직접 연결해야 해요. 사용자가 자기 Google 계정에 로그인해서 Google 승인 절차를 직접 완료하세요.

### Google 계정은 연결되어 있는데 특정 Google Calendar만 보이지 않아요.
그 계정이 해당 Google Calendar에 충분한 접근 권한을 갖고 있는지 확인하세요. 다른 Google 계정에서 공유받은 캘린더라면 특히 중요해요. 추가 해결 방법은 [Google Calendar 쓰기 권한 오류](../google-calendar-writer-access-error.md)를 참고하세요.

### Google 계정을 재연결해도 해결되지 않으면 어떻게 하나요?
Google Calendar 재연동 절차를 처음부터 끝까지 진행하세요. 재연동이 끝나면 **캘린더 설정 > 연결**에서 계정을 확인하고 캘린더 동기화를 테스트하세요.

### Google 계정을 연결하는 것과 Linked Calendar를 선택하는 것은 같은 건가요?
아니요. Google 계정을 연결하면 하이퍼클래스가 Google Calendar에 접근할 수 있게 돼요. Linked Calendar 구성은 어떤 캘린더를 동기화에 쓸지 정해요.
