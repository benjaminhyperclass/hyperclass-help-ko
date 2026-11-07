---
원문: https://help.gohighlevel.com/support/solutions/articles/155000009423-using-custom-css-and-javascript-with-the-custom-navigation
번역일: 2026-11-07
카테고리: 44-신기능-2026
---

# 커스텀 내비게이션에서 커스텀 CSS·JavaScript 사용하기

**Custom Navigation**(커스텀 내비게이션)을 켜면 기존 커스텀 CSS·JavaScript가 어떻게 처리되는지, 기존 코드를 다시 쓰려면 어떻게 하는지, 알려진 호환성 제한은 무엇인지 설명해요.

**Custom Navigation**은 화면 구조가 새로 바뀐 인터페이스예요. 하이퍼클래스의 모양과 동작을 바꾸려고 쓰던 커스텀 CSS·JavaScript에 영향을 줄 수 있어요. 호환성 문제를 막기 위해 **Custom Navigation**을 켜면 기존 커스텀 코드는 기본적으로 꺼져요. 코드가 삭제되지는 않아요.

## 커스텀 내비게이션과 커스텀 CSS·JavaScript

커스텀 CSS와 JavaScript는 에이전시 수준에서 설정하고, 보통 모든 서브 계정에 적용돼요. **Custom Navigation**은 화면 구조가 달라서, 이전 내비게이션용으로 작성한 코드는 기대한 대로 동작하지 않을 수 있어요.

하이퍼클래스는 **Custom Navigation**을 쓰는 에이전시 화면과 서브 계정 화면에서 기존 커스텀 CSS·JavaScript를 자동으로 꺼요. 기존 코드는 삭제되지 않고, 이전 내비게이션을 계속 쓰는 서브 계정에는 영향이 없어요.

에이전시는 **White Label**(화이트라벨) 설정에서 기존 코드를 다시 쓰도록 선택할 수 있어요. 다만 호환성은 보장되지 않아요.

{% hint style="warning" %}
기존 커스텀 CSS·JavaScript는 에이전시 수준에서 설정돼요. **White Label** 설정에서 서브 계정별로 따로 끌 수는 없어요.
{% endhint %}

## 커스텀 CSS를 적용한 상태로 미리보기

**Custom Navigation**을 켜기 전에, 기존 커스텀 CSS를 적용했을 때와 적용하지 않았을 때 새 화면이 어떻게 보이는지 미리 확인할 수 있어요.

1. **에이전시 보기** 또는 사용 가능한 서브 계정에서 **설정 > 실험실**로 이동하세요.
2. **New Design Experience Starting with Navigation**(내비게이션부터 시작하는 새 디자인 경험)을 찾으세요.
3. **미리보기**를 클릭하면 새 브라우저 탭에서 **Custom Navigation**이 열려요.
4. 커스텀 CSS 컨트롤을 사용해 기존 스타일을 켠 화면과 끈 화면을 비교하세요.
5. 내비게이션 메뉴, 아이콘, 텍스트 등 다른 요소에서 스타일이 충돌하는 곳이 없는지 확인하세요.

**미리보기 모드**에서는 **Custom Navigation**이 켜지지 않고, 기존 내비게이션 설정도 바뀌지 않아요.

![실험실에서 커스텀 내비게이션 미리보기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155084253825/original/aaCjkH6S3K4X5ge_ofoYimBySKCwolHfsg.png?1793050223)

## 기존 커스텀 CSS·JavaScript 다시 사용하기

**Custom Navigation**에서도 기존 커스텀 CSS·JavaScript를 계속 쓰고 싶다면 **White Label** 설정에서 기존 커스텀 코드 사용 옵션을 켜세요. 에이전시 관리자만 쓸 수 있어요.

1. **에이전시 보기**를 여세요.
2. **설정 > 회사 > White Label**로 이동하세요.
3. **Custom Navigation** 섹션에서 기존 커스텀 코드를 다시 사용하는 옵션을 찾으세요.
4. 토글을 켜면 기존 커스텀 CSS·JavaScript가 **Custom Navigation**에서 실행돼요.

{% hint style="info" %}
기존 커스텀 코드 옵션은 **Custom Navigation**을 켰을 때 나타나요. 기존 코드를 다시 쓰면 새 화면의 모양이나 동작에 영향을 줄 수 있어요. 호환성 문제가 생기면 이 옵션을 꺼서 **Custom Navigation**에 기존 코드가 적용되지 않게 하세요.
{% endhint %}

## 알려진 호환성 제한

**Custom Navigation**은 화면 구조가 달라서, 이전 내비게이션용으로 만든 커스텀 CSS·JavaScript 중 일부는 의도한 대로 동작하지 않을 수 있어요. 기존 커스텀 코드를 다시 쓸 때 알려진 호환성 문제는 다음과 같아요.

| 사용자 지정 항목 | 예상되는 영향 |
| --- | --- |
| 다크 모드 | **Custom Navigation**은 현재 다크 모드를 지원하지 않아요. 기존 다크 모드 CSS 때문에 내비게이션 텍스트나 항목을 읽기 어렵거나 아예 보이지 않을 수 있어요. |
| 사이드바 스타일 | 사이드바 요소를 추가하거나 수정하는 커스텀 CSS는 내비게이션의 기본 구조가 바뀌어서 더 이상 제대로 동작하지 않을 수 있어요. |
| 커스텀 JavaScript | 내비게이션 요소를 수정하거나 위치를 옮기는 스크립트는 기대한 대로 동작하지 않을 수 있어요. 내비게이션 항목 고정처럼 예전에 커스텀 스크립트로 처리하던 기능 중 일부는 이제 기본 기능으로 쓸 수 있어요. |
| **사용자 정의 메뉴 링크** | **사용자 정의 메뉴 링크**는 계속 동작해요. 다만 이 링크의 스타일을 바꾸거나 위치를 옮기려고 쓰던 CSS·JavaScript는 새 내비게이션과 맞지 않을 수 있어요. |
| **마켓플레이스 앱** | 자체 CSS·JavaScript를 삽입하는 **마켓플레이스 앱**은 기존 커스텀 코드를 꺼 두어도 스타일이나 레이아웃 문제를 일으킬 수 있어요. |

기존 커스텀 코드 토글은 에이전시의 **White Label** 설정으로 추가한 CSS·JavaScript만 제어해요. 설치된 **마켓플레이스 앱**이 삽입한 코드에는 영향을 주지 않아요.

기존 커스텀 코드를 껐는데도 내비게이션이 계속 이상하게 보이면, 설치된 **마켓플레이스 앱**이 CSS나 JavaScript를 삽입하고 있는지 확인하세요. **Custom Navigation**에는 앱이 삽입한 스타일을 자동으로 찾아내거나 끄는 기능이 아직 없어요.
