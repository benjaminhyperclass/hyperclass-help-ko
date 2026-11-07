---
원문: https://help.gohighlevel.com/support/solutions/articles/48001176375-crm-loading-states-troubleshooting-lags-and-impact-of-custom-css-and-js
번역일: 2026-11-06
카테고리: 36-기타
---

# CRM 로딩 상태, 화면 지연 해결, 사용자 지정 CSS·JS의 영향

CRM 화면이 로딩될 때 보이는 상태와 로딩이 멈췄을 때 확인할 내용을 안내해요. 사용자 지정 CSS·JS가 로더에 주는 영향도 함께 다뤄요.

하이퍼클래스는 로딩 기능을 크게 개선했어요. 기존의 점 9개짜리 로더 대신 새 스피너를 쓰고, 앱 초기화·데이터 불러오기·서브 계정 상세 정보 가져오기 같은 작업을 상태별 화면으로 보여 줘요.

## CRM이 로딩될 때 어떤 상태가 나타나나요?

### 앱 초기화 중

앱을 실행하거나 새 페이지를 불러올 때 로더가 처음 돌기 시작하는 상태예요. 로딩 과정의 시작을 뜻해요. 앱이나 페이지에 필요한 데이터를 모두 불러올 때까지 계속 보여요.

![앱 초기화 중 로더 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155001405216/original/n6IJ7CNmxsFla2WiiOg07WhTWEVvhHp2jA.png?1687267443)

### 새 데이터 불러오는 중

앱을 처음 불러온 뒤에도 사용자 동작, 실시간 업데이트, 예약된 새로고침에 따라 새 데이터를 가져와야 할 때가 있어요. 이때 로더가 돌면서 서버에서 최신 데이터를 가져오는 중이라는 것을 알려 줘요.

![새 데이터를 불러오는 중인 로더 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155001405249/original/GREONfJWTWWj7L8CprElMU8DTiUrVuPLLw.png?1687267461)

### 서브 계정 상세 정보 가져오는 중

여러 사용자 계정이나 서브 계정을 쓰는 경우, 계정을 바꾸거나 특정 서브 계정의 정보를 불러올 때 이 상태가 나타날 수 있어요.

![서브 계정 상세 정보를 가져오는 중인 로더 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155001405356/original/GohsN1TKhc_sVZV-gYHyWsYekrFFP80K-A.png?1687267500)

### 무한 로딩 상태

앱이나 특정 페이지가 정해진 시간(예: 30초) 안에 로딩되지 않을 때 나타나는 상태예요. 로더가 진행 없이 계속 돌고, 페이지가 제대로 열리지 못하게 하는 문제가 있다는 뜻이에요. 이럴 때는 **Click Here to refresh**(여기를 클릭하여 새로고침) 안내가 나타나요. 이 버튼을 누르면 페이지가 새로고침되고 브라우저 캐시도 자동으로 지워져요. 사이트 데이터와 쿠키를 직접 지울 필요가 없어서 문제 해결이 간단해져요.

![무한 로딩 상태에서 새로고침 안내가 나타난 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155001404779/original/bBwb-vM65Ufd5VtWcaAe_M63EqaPomGa8g.png?1687267228)

{% hint style="info" %}
무한 로딩 상태에서 새로고침을 실행하면, 사용자 쪽에서 발생한 오류가 자동으로 수집되어 하이퍼클래스 서버로 전달돼요. 전달된 오류는 심층 분석에 쓰여요. 덕분에 문제를 더 잘 찾아내고 플랫폼 사용 경험을 계속 개선할 수 있어요.
{% endhint %}

## 사용자 지정 CSS·JS의 영향

사용자 지정 CSS와 JS는 로더의 동작과 전반적인 기능에 영향을 줄 수 있어요. 어떤 영향을 줄 수 있는지 살펴볼게요.

### 사용자 지정 CSS의 간섭

사용자 지정 CSS는 웹페이지의 스타일과 모양을 바꾸는 코드예요. 이 CSS가 로더의 스타일이나 클래스를 덮어쓰거나 충돌하면, 로더가 원래 의도한 모습으로 보이지 않거나 일관성이 깨질 수 있어요.

이런 경우 로더가 예상한 상태나 애니메이션을 보여 주지 못해서 혼란을 주거나 사용 경험이 나빠질 수 있어요.

사용자 지정 CSS를 점검하고, 로더에 적용된 변경 사항과 맞도록 조정하세요. 그러면 로더 동작을 방해하지 않고 사용자 지정 스타일을 함께 쓸 수 있어요.

### 사용자 지정 JS의 간섭

사용자 지정 JS(JavaScript) 코드는 로더의 내부 로직이나 로더가 받는 이벤트를 바꿔서 기능에 영향을 줄 수 있어요.

사용자 지정 JS가 로더의 이벤트 핸들러를 수정하거나 덮어쓰면, 로더가 원래 동작하지 못하거나 사용자 상호작용에 제대로 반응하지 못할 수 있어요.

사용자 지정 JS 코드를 점검하고, 로더의 업데이트된 기능과 이벤트 시스템에 맞게 고치는 것이 중요해요. 그래야 로더가 의도대로 작동하고, 여러 로딩 상태에서도 올바르게 동작해요.

사용자 지정 CSS나 JS를 수정했다면 충분히 테스트하고 디버깅해서 로더와 충돌하거나 어긋나는 부분이 없는지 확인하는 것이 좋아요. 사용자 지정 코드를 업데이트된 로더의 디자인과 기능에 맞게 조정하면, 로딩 과정 내내 매끄럽고 일관된 사용 경험을 유지할 수 있어요.

## 추가로 확인할 사항

### 문제가 생긴 사용자가 서브 계정에 추가되어 있나요?

에이전시 관리자라면 해당 사용자가 서브 계정에 한 곳 이상 추가되어 있는지 확인하세요.

1. 에이전시 보기에서 **팀 관리** 페이지로 이동하세요.
2. 오른쪽 위 **이름으로 검색** 창에서 이름, 이메일 또는 전화번호로 사용자를 검색하세요.
3. **편집**을 클릭하세요.

   ![사용자 편집 버튼](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155001407892/original/EeujbvMOt-B75vSFRrbD_a4Tq27gYg0mkw.png?1687268821)

4. **User Roles**(사용자 역할)를 클릭하세요.

   ![User Roles 탭 클릭](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48195393047/original/CfRQKOUlqixevrBBvgMTStO5dGAE9LGFLA.png?1646064411)

5. 드롭다운에서 사용자가 서브 계정에 한 곳 이상 추가되어 있는지 확인하세요.

[![단계별 안내 이미지](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48195394488/original/_hpUJqxJsfhIZg8bWCGaPzAImfNYpgG2Rg.png?1646064617)](https://app.tango.us/app/workflow/d27d73bd-86a5-4957-b2c3-fb58ff4ffd71?utm_source=magicCopy&utm_medium=magicCopy&utm_campaign=referral%20link%20tracking)

{% hint style="info" %}
에이전시 소유자가 아니라면 에이전시 관리자에게 문의하세요. 접근 권한이 있어야 하는 서브 계정에 다시 추가해 달라고 요청하면 돼요.
{% endhint %}

### 새 로더의 새로고침 버튼이 작동하지 않거나 사용자 지정 CSS/JS가 로더 동작을 방해하면 어떻게 하나요?

이런 경우에는 직접 문제를 해결해야 할 수 있어요. 사이트 데이터를 지우고, 쿠키를 제거한 다음, 강력 새로고침(하드 리프레시)을 하면 돼요. 방법은 다음과 같아요.

1. 브라우저에서 검사 창을 여세요. 화면에서 마우스 오른쪽 버튼을 누르고 **Inspect**(검사)를 선택하면 돼요. 창이 왼쪽에 열렸다면 화살표 두 개 모양의 '더 보기' 아이콘을 눌러 **애플리케이션** 탭을 찾으세요.

   ![검사 창에서 애플리케이션 탭 찾기](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155001408960/original/A56nyLYvt64k6etKB4Yv0-Ft_2Lxhiyojg.png?1687269416)

2. **애플리케이션** 탭에서 **Storage**(저장소)를 선택하세요. 아래로 스크롤해서 **Clear Site Data**(사이트 데이터 삭제) 버튼을 찾아 클릭하세요. 브라우저별 안내는 다음 링크를 참고하세요: [Chrome](https://developers.google.com/web/tools/chrome-devtools/storage/cookies), [Firefox](https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector), [Safari](https://developer.apple.com/safari/tools/), [Edge](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/storage/cookies)
3. 페이지 위쪽 주소 옆의 자물쇠 아이콘을 클릭하고 **Cookies**(쿠키)를 선택하세요. 사이트 쿠키를 삭제하는 옵션이 보여요. **제거**를 클릭하세요.

   ![자물쇠 아이콘의 쿠키 제거 화면](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155001409127/original/vTOptcG6vLr5pLot2kPXpoDWqliK7WtUZA.png?1687269495)

4. 사이트 데이터를 지우고 쿠키를 제거했으면 **완료**를 클릭하세요.
5. 마지막으로 브라우저 페이지를 새로고침하세요. 강력 새로고침은 Mac에서는 command 키를 누른 채 R을, PC에서는 control 키를 누른 채 F5를 누르면 돼요. 브라우저별 방법은 다음 링크를 참고하세요: [Chrome](https://www.refreshyourcache.com/en/hard-refresh/), [Firefox](https://www.refreshyourcache.com/en/cache/), [Safari](https://www.refreshyourcache.com/en/safari-5/), [Edge](https://answers.microsoft.com/en-us/microsoftedge/forum/all/unable-to-find-hard-reload-and-empty-cache-in/f0ac6b96-697f-4b17-b570-5b904c5ee67a)

### 페이지가 이동하지 않고 멈추면 어떻게 하나요?

[동영상](https://www.loom.com/embed/7db271bd08654c98b43dcbd7a0f7f266?sid=301f2e06-3c0f-4a9e-989a-bea660dc4270)
